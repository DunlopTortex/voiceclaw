"""Map Gemini function calls to claude -p invocations."""

from typing import AsyncGenerator

from claude_runner import ClaudeRunner


class FunctionRouter:
    def __init__(self, claude: ClaudeRunner):
        self.claude = claude

    async def route(self, name: str, args: dict) -> AsyncGenerator[dict, None]:
        """Route a function call to the appropriate claude -p invocation."""

        if name == "code_task":
            async for event in self.claude.run(
                instruction=args.get("instruction", ""),
                mode="edit",
            ):
                yield event

        elif name == "investigate_and_advise":
            question = args.get("question", "")
            async for event in self.claude.run(
                instruction=(
                    f"The developer is asking: {question}. "
                    "Read the relevant code and give your grounded "
                    "recommendation with tradeoffs."
                ),
                mode="ask",
                allowed_tools="Read,Glob,Grep,LS",
            ):
                yield event

        elif name == "read_file":
            path = args.get("path", "")
            async for event in self.claude.run(
                instruction=f"Read the file at {path} and provide a concise summary of its contents.",
                mode="ask",
                allowed_tools="Read",
            ):
                yield event

        elif name == "run_command":
            command = args.get("command", "")
            async for event in self.claude.run(
                instruction=f"Run this shell command and report the output: {command}",
                mode="edit",
            ):
                yield event

        elif name == "get_status":
            async for event in self.claude.run(
                instruction=(
                    "What files have been modified in this session? "
                    "Show a brief summary of recent changes."
                ),
                mode="ask",
                allowed_tools="Read,Glob,Grep,LS",
            ):
                yield event

        else:
            yield {
                "type": "function_result",
                "result": f"Unknown function: {name}",
                "is_error": True,
            }
