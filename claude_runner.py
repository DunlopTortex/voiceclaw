"""Spawn claude -p, parse stream-json stdout, yield structured events."""

import asyncio
import json
from typing import AsyncGenerator


class ClaudeRunner:
    def __init__(self, project_dir: str):
        self.project_dir = project_dir
        self.session_id: str | None = None
        self.process: asyncio.subprocess.Process | None = None

    async def run(
        self,
        instruction: str,
        mode: str = "edit",
        allowed_tools: str | None = None,
    ) -> AsyncGenerator[dict, None]:
        """Run claude -p and yield parsed stream-json events.

        mode="edit": full access, streams tool_use events
        mode="ask": read-only, restricted tools, returns text answer
        """
        if mode == "ask":
            cmd = [
                "claude",
                "-p",
                instruction,
                "--print",
            ]
            if allowed_tools:
                cmd.extend(["--allowedTools", allowed_tools])
        else:
            cmd = [
                "claude",
                "-p",
                instruction,
                "--output-format",
                "stream-json",
                "--verbose",
            ]

        if self.session_id:
            cmd.extend(["--resume", self.session_id])

        self.process = await asyncio.create_subprocess_exec(
            *cmd,
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE,
            cwd=self.project_dir,
        )

        # In ask mode, claude --print outputs plain text (not stream-json)
        if mode == "ask":
            stdout, _ = await self.process.communicate()
            result_text = stdout.decode("utf-8").strip()
            yield {
                "type": "function_result",
                "result": result_text,
                "is_error": self.process.returncode != 0,
            }
            return

        # In edit mode, parse stream-json line by line
        assert self.process.stdout is not None
        async for raw_line in self.process.stdout:
            line = raw_line.decode("utf-8").strip()
            if not line:
                continue

            try:
                event = json.loads(line)
            except json.JSONDecodeError:
                continue

            # Init event — extract session_id
            if event.get("type") == "system" and event.get("subtype") == "init":
                self.session_id = event.get("session_id")
                yield {
                    "type": "status",
                    "claude_running": True,
                    "session_id": self.session_id,
                }
                continue

            # Assistant message — extract tool_use and text
            if event.get("type") == "assistant":
                content = event.get("message", {}).get("content", [])
                for item in content:
                    if item.get("type") == "tool_use":
                        yield {
                            "type": "claude_event",
                            "subtype": "tool_use",
                            "tool": item["name"],
                            "input": item.get("input", {}),
                        }
                    elif item.get("type") == "text" and item.get("text"):
                        yield {
                            "type": "claude_event",
                            "subtype": "text",
                            "text": item["text"],
                        }

            # Final result
            if event.get("type") == "result":
                self.session_id = event.get("session_id", self.session_id)
                yield {
                    "type": "function_result",
                    "result": event.get("result", ""),
                    "is_error": event.get("is_error", False),
                    "session_id": self.session_id,
                }

        await self.process.wait()

    async def cancel(self):
        """Kill the running Claude process."""
        if self.process and self.process.returncode is None:
            self.process.terminate()
            try:
                await asyncio.wait_for(self.process.wait(), timeout=5)
            except asyncio.TimeoutError:
                self.process.kill()
