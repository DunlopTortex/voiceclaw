// ── Gemini Function Declarations ──────────────────────────────
// Using parametersJsonSchema (standard JSON Schema, lowercase types).
// This is the latest recommended format per @google/genai SDK docs.

import type { FunctionDeclaration } from "@google/genai";

export const functionDeclarations: FunctionDeclaration[] = [
  {
    name: "investigate_and_advise",
    description:
      "Read the user's codebase and answer a question about their project. Use this for ANY question about files, project structure, architecture, or code.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        question: {
          type: "string",
          description: "The question to investigate in the codebase",
        },
      },
      required: ["question"],
    },
  },
  {
    name: "code_task",
    description:
      "Write code, add features, fix bugs, or refactor in the user's project. Only call after user confirms.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        instruction: {
          type: "string",
          description: "What to code",
        },
      },
      required: ["instruction"],
    },
  },
  {
    name: "read_file",
    description:
      "Read and summarize a specific file from the user's project.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        path: {
          type: "string",
          description: "File path to read",
        },
      },
      required: ["path"],
    },
  },
  {
    name: "run_command",
    description:
      "Run a shell command in the user's project. Only call after user confirms.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        command: {
          type: "string",
          description: "Shell command to run",
        },
      },
      required: ["command"],
    },
  },
  {
    name: "get_status",
    description:
      "Get current session status: what files changed, Claude state.",
    parametersJsonSchema: {
      type: "object",
      properties: {},
    },
  },
  {
    name: "open_url",
    description:
      "Open a URL in a new browser tab. Use this to show the user a running localhost server, a webpage, or any URL they want to preview.",
    parametersJsonSchema: {
      type: "object",
      properties: {
        url: {
          type: "string",
          description: "The URL to open, e.g. http://localhost:8000",
        },
      },
      required: ["url"],
    },
  },
];

// ── WebSocket Messages (Browser ↔ Backend) ───────────────────

/** Browser → Backend: forward a Gemini function call */
export interface FunctionCallMessage {
  type: "function_call";
  id: string;
  name: string;
  args: Record<string, unknown>;
}

/** Backend → Browser: Claude tool use event */
export interface ClaudeToolUseEvent {
  type: "claude_event";
  subtype: "tool_use";
  tool: string;
  input: Record<string, unknown>;
  timestamp?: string;
}

/** Backend → Browser: Claude text output */
export interface ClaudeTextEvent {
  type: "claude_event";
  subtype: "text";
  text: string;
  timestamp?: string;
}

/** Backend → Browser: function execution complete */
export interface FunctionResultMessage {
  type: "function_result";
  id: string;
  name: string;
  result: string;
  is_error?: boolean;
}

/** Backend → Browser: status update */
export interface StatusMessage {
  type: "status";
  claude_running: boolean;
  session_id: string | null;
}

export type BackendMessage =
  | ClaudeToolUseEvent
  | ClaudeTextEvent
  | FunctionResultMessage
  | StatusMessage;

// ── Config types ─────────────────────────────────────────────

export interface ServerConfig {
  system_prompt: string;
  model: string;
}

export interface TokenResponse {
  token: string;
}

export interface SessionState {
  gemini_handle: string | null;
  claude_session_id: string | null;
}
