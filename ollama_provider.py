"""Ollama-based coding provider — runs local LLMs for code tasks."""

import asyncio
import json
import os
from typing import AsyncGenerator

import httpx

from coding_provider import CodingProvider


# Tools that Ollama can simulate via prompt instructions
TOOL_DESCRIPTIONS = {
    "Read": "Read file contents",
    "Glob": "Find files by pattern",
    "Grep": "Search file contents",
    "LS": "List directory contents",
    "Edit": "Edit a file",
    "Write": "Write/create a file",
    "Bash": "Run a shell command",
}


class OllamaProvider(CodingProvider):
    """Use a local Ollama model for coding tasks.

    Ollama doesn't have built-in file tools like Claude CLI, so this provider:
    1. Reads relevant context (files, directory listings) itself
    2. Sends everything to Ollama as a single prompt
    3. For edit mode, parses Ollama's response for file changes and applies them

    Requires Ollama running locally (default: http://localhost:11434).
    """

    def __init__(self, project_dir: str):
        super().__init__(project_dir)
        self.base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
        self.model = os.getenv("OLLAMA_MODEL", "llama3.1")
        self._cancel = False

    async def run(
        self,
        instruction: str,
        mode: str = "edit",
        allowed_tools: str | None = None,
        permission_mode: str | None = None,
    ) -> AsyncGenerator[dict, None]:
        self._cancel = False

        yield {
            "type": "status",
            "claude_running": True,
            "session_id": None,
        }

        # Build the system prompt based on mode and allowed tools
        system_prompt = self._build_system_prompt(mode, allowed_tools)

        # Build messages for the Ollama chat API
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": instruction},
        ]

        yield {
            "type": "claude_event",
            "subtype": "thinking",
            "text": f"Using Ollama ({self.model}) to process: {instruction[:100]}...",
        }

        try:
            result_text = await self._chat(messages)

            if self._cancel:
                yield {
                    "type": "function_result",
                    "result": "Operation cancelled.",
                    "is_error": False,
                }
                return

            # In edit mode, try to apply any file changes from the response
            if mode == "edit" and allowed_tools != "Read,Glob,Grep,LS":
                changes_applied = await self._apply_changes(result_text)
                if changes_applied:
                    result_text += f"\n\n[Applied {changes_applied} file change(s)]"

            yield {
                "type": "function_result",
                "result": result_text,
                "is_error": False,
            }

        except httpx.ConnectError:
            yield {
                "type": "function_result",
                "result": (
                    f"Cannot connect to Ollama at {self.base_url}. "
                    "Make sure Ollama is running: `ollama serve`"
                ),
                "is_error": True,
            }
        except Exception as e:
            yield {
                "type": "function_result",
                "result": f"Ollama error: {str(e)}",
                "is_error": True,
            }

    async def _chat(self, messages: list[dict]) -> str:
        """Send a chat request to Ollama and return the response text."""
        async with httpx.AsyncClient(timeout=300.0) as client:
            response = await client.post(
                f"{self.base_url}/api/chat",
                json={
                    "model": self.model,
                    "messages": messages,
                    "stream": False,
                },
            )
            response.raise_for_status()
            data = response.json()
            return data.get("message", {}).get("content", "")

    async def _apply_changes(self, response_text: str) -> int:
        """Parse response for file changes in code blocks and apply them.

        Looks for patterns like:
          ```filepath: path/to/file.py
          <content>
          ```
        or:
          FILE: path/to/file.py
          ```
          <content>
          ```
        """
        import re

        changes = 0

        # Pattern: ```filepath: path/to/file
        pattern = r'```(?:filepath|file|path):\s*(.+?)\n(.*?)```'
        matches = re.findall(pattern, response_text, re.DOTALL)

        for filepath, content in matches:
            filepath = filepath.strip()
            full_path = os.path.join(self.project_dir, filepath)

            # Safety: don't write outside project dir
            real_path = os.path.realpath(full_path)
            real_project = os.path.realpath(self.project_dir)
            if not real_path.startswith(real_project):
                continue

            os.makedirs(os.path.dirname(full_path), exist_ok=True)
            with open(full_path, "w") as f:
                f.write(content)
            changes += 1

        return changes

    def _build_system_prompt(self, mode: str, allowed_tools: str | None) -> str:
        """Build a system prompt that tells Ollama how to behave."""
        base = (
            f"You are a coding assistant working in the project directory: {self.project_dir}\n"
            "You help developers by reading, understanding, and modifying code.\n"
        )

        if mode == "ask" or allowed_tools == "Read,Glob,Grep,LS":
            base += (
                "\nYou are in READ-ONLY mode. Analyze the code and provide your answer. "
                "Do NOT suggest file modifications — only analyze and advise.\n"
            )
        else:
            base += (
                "\nYou can suggest file changes. When you want to create or modify a file, "
                "use this exact format:\n"
                "```filepath: relative/path/to/file.ext\n"
                "<entire file content>\n"
                "```\n"
                "Be precise with file paths relative to the project root.\n"
            )

        return base

    async def cancel(self):
        self._cancel = True

    def get_config(self) -> dict:
        return {
            "provider": "ollama",
            "model": self.model,
            "base_url": self.base_url,
        }

    def set_config(self, **kwargs) -> dict:
        if "model" in kwargs and kwargs["model"]:
            self.model = kwargs["model"]
        if "base_url" in kwargs and kwargs["base_url"]:
            self.base_url = kwargs["base_url"]
        return self.get_config()

    @staticmethod
    def provider_name() -> str:
        return "ollama"
