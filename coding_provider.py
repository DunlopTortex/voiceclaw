"""Abstract base for coding LLM providers (Claude, Ollama, Z.ai)."""

from abc import ABC, abstractmethod
from typing import AsyncGenerator


class CodingProvider(ABC):
    """Interface that all coding providers must implement."""

    def __init__(self, project_dir: str):
        self.project_dir = project_dir
        self.process = None  # For cancel support

    @abstractmethod
    async def run(
        self,
        instruction: str,
        mode: str = "edit",
        allowed_tools: str | None = None,
        permission_mode: str | None = None,
    ) -> AsyncGenerator[dict, None]:
        """Run a coding task and yield structured events.

        Expected event types:
          {"type": "status", "claude_running": True, ...}
          {"type": "claude_event", "subtype": "thinking"|"tool_use"|"text", ...}
          {"type": "function_result", "result": str, "is_error": bool}
        """
        ...

    @abstractmethod
    async def cancel(self):
        """Cancel the currently running operation."""
        ...

    @abstractmethod
    def get_config(self) -> dict:
        """Return current provider configuration."""
        ...

    @abstractmethod
    def set_config(self, **kwargs) -> dict:
        """Update provider configuration. Returns new config."""
        ...

    @staticmethod
    def provider_name() -> str:
        """Human-readable provider name."""
        return "unknown"
