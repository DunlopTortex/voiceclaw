"""Z.ai coding provider — uses Zed's AI assistant for code tasks.

Z.ai can be accessed via the Zed editor's CLI (`zed`) or through its
HTTP API when running as a background service. This provider supports
both modes:

1. CLI mode: Invokes `zed --ai` subprocess (requires Zed installed)
2. API mode: Connects to Z.ai's API endpoint (requires ZEDN_API_KEY)

Falls back to CLI mode by default.
"""

import asyncio
import json
import os
import subprocess
import threading
from queue import Queue
from typing import AsyncGenerator

import httpx

from coding_provider import CodingProvider


class ZedProvider(CodingProvider):
    """Use Z.ai (Zed's AI) for coding tasks.

    Supports two modes:
    - "api": Uses Z.ai HTTP API (set ZED_API_KEY and optionally ZED_API_URL)
    - "cli": Uses `zed` CLI subprocess for AI operations
    """

    def __init__(self, project_dir: str):
        super().__init__(project_dir)
        self.api_key = os.getenv("ZED_API_KEY", "")
        self.api_url = os.getenv("ZED_API_URL", "https://api.zed.dev/ai/v1")
        self.model = os.getenv("ZED_MODEL", "zed-1")
        self.mode = "api" if self.api_key else "cli"
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

        yield {
            "type": "claude_event",
            "subtype": "thinking",
            "text": f"Using Z.ai ({self.model}) to process: {instruction[:100]}...",
        }

        try:
            if self.mode == "api":
                async for event in self._run_api(instruction, mode, allowed_tools):
                    yield event
            else:
                async for event in self._run_cli(instruction, mode, allowed_tools):
                    yield event
        except httpx.ConnectError:
            yield {
                "type": "function_result",
                "result": (
                    f"Cannot connect to Z.ai API at {self.api_url}. "
                    "Check your ZED_API_KEY and ZED_API_URL settings."
                ),
                "is_error": True,
            }
        except FileNotFoundError:
            yield {
                "type": "function_result",
                "result": (
                    "Zed CLI not found. Install Zed from https://zed.dev and ensure "
                    "'zed' is in your PATH, or set ZED_API_KEY to use the API mode."
                ),
                "is_error": True,
            }
        except Exception as e:
            yield {
                "type": "function_result",
                "result": f"Z.ai error: {str(e)}",
                "is_error": True,
            }

    async def _run_api(
        self,
        instruction: str,
        mode: str,
        allowed_tools: str | None,
    ) -> AsyncGenerator[dict, None]:
        """Run via Z.ai HTTP API (OpenAI-compatible chat completions)."""
        system_prompt = self._build_system_prompt(mode, allowed_tools)

        async with httpx.AsyncClient(timeout=300.0) as client:
            response = await client.post(
                f"{self.api_url}/chat/completions",
                headers={
                    "Authorization": f"Bearer {self.api_key}",
                    "Content-Type": "application/json",
                },
                json={
                    "model": self.model,
                    "messages": [
                        {"role": "system", "content": system_prompt},
                        {"role": "user", "content": instruction},
                    ],
                    "stream": False,
                },
            )
            response.raise_for_status()
            data = response.json()

            result_text = ""
            choices = data.get("choices", [])
            if choices:
                result_text = choices[0].get("message", {}).get("content", "")

            if self._cancel:
                yield {
                    "type": "function_result",
                    "result": "Operation cancelled.",
                    "is_error": False,
                }
                return

            # Apply file changes if in edit mode
            if mode == "edit" and allowed_tools != "Read,Glob,Grep,LS":
                changes = await self._apply_changes(result_text)
                if changes:
                    result_text += f"\n\n[Applied {changes} file change(s)]"

            yield {
                "type": "function_result",
                "result": result_text,
                "is_error": False,
            }

    async def _run_cli(
        self,
        instruction: str,
        mode: str,
        allowed_tools: str | None,
    ) -> AsyncGenerator[dict, None]:
        """Run via Zed CLI subprocess."""
        system_prompt = self._build_system_prompt(mode, allowed_tools)
        full_prompt = f"{system_prompt}\n\nUser request: {instruction}"

        loop = asyncio.get_event_loop()
        self.process = await loop.run_in_executor(
            None,
            lambda: subprocess.Popen(
                ["zed", "--ai", "--prompt", full_prompt],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                cwd=self.project_dir,
            ),
        )

        stdout, stderr = await loop.run_in_executor(None, self.process.communicate)
        result_text = stdout.decode("utf-8").strip()

        if self.process.returncode != 0:
            error = stderr.decode("utf-8").strip()
            yield {
                "type": "function_result",
                "result": f"Z.ai CLI error (exit {self.process.returncode}): {error or result_text}",
                "is_error": True,
            }
            return

        if self._cancel:
            yield {
                "type": "function_result",
                "result": "Operation cancelled.",
                "is_error": False,
            }
            return

        # Apply file changes if in edit mode
        if mode == "edit" and allowed_tools != "Read,Glob,Grep,LS":
            changes = await self._apply_changes(result_text)
            if changes:
                result_text += f"\n\n[Applied {changes} file change(s)]"

        yield {
            "type": "function_result",
            "result": result_text,
            "is_error": False,
        }

    async def _apply_changes(self, response_text: str) -> int:
        """Parse response for file changes and apply them."""
        import re

        changes = 0
        pattern = r'```(?:filepath|file|path):\s*(.+?)\n(.*?)```'
        matches = re.findall(pattern, response_text, re.DOTALL)

        for filepath, content in matches:
            filepath = filepath.strip()
            full_path = os.path.join(self.project_dir, filepath)

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
        if self.process and self.process.returncode is None:
            self.process.terminate()
            try:
                self.process.wait(timeout=5)
            except subprocess.TimeoutExpired:
                self.process.kill()

    def get_config(self) -> dict:
        return {
            "provider": "zed",
            "model": self.model,
            "mode": self.mode,
            "api_url": self.api_url,
        }

    def set_config(self, **kwargs) -> dict:
        if "model" in kwargs and kwargs["model"]:
            self.model = kwargs["model"]
        if "api_url" in kwargs and kwargs["api_url"]:
            self.api_url = kwargs["api_url"]
        if "api_key" in kwargs and kwargs["api_key"]:
            self.api_key = kwargs["api_key"]
            self.mode = "api"
        return self.get_config()

    @staticmethod
    def provider_name() -> str:
        return "zed"
