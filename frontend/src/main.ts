/**
 * VoiceCode — Entry point. Glues together all modules.
 *
 * Flow:
 *   1. Check if project is selected (GET /api/project)
 *   2. If not → show project picker
 *   3. If yes → show voice screen, init audio/gemini/backend
 */

import "./style.css";
import "./debug-log"; // Ctrl+Shift+D to download log
import { log } from "./debug-log";
import { AudioManager } from "./audio-manager";
import { GeminiConnection } from "./gemini-connection";
import { BackendConnection } from "./backend-connection";
import { UI } from "./ui";
import type { BackendMessage, ClaudeToolUseEvent } from "./types";

const ui = new UI();

let audioManager: AudioManager | null = null;
let gemini: GeminiConnection | null = null;
let backend: BackendConnection | null = null;
let isConnected = false;

// ── Project Picker ───────────────────────────────────────────

async function openProject(path: string): Promise<boolean> {
  try {
    const res = await fetch("/api/project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path }),
    });
    const data = await res.json();
    if (data.error) {
      ui.setPickerError(data.error);
      return false;
    }
    ui.showVoiceScreen(data.path);
    await initVoiceUI();
    return true;
  } catch {
    ui.setPickerError("Failed to connect to backend");
    return false;
  }
}

async function browseDir(path: string): Promise<void> {
  try {
    const res = await fetch(`/api/projects/browse?path=${encodeURIComponent(path)}`);
    const data = await res.json();
    if (data.error) return;
    ui.renderFolderBrowser(data.current, data.parent, data.dirs);
  } catch {
    // ignore
  }
}

// ── Voice UI Init ────────────────────────────────────────────

async function initVoiceUI(): Promise<void> {
  audioManager = new AudioManager();
  await audioManager.init();

  // Backend WebSocket — always active
  backend = new BackendConnection((msg: BackendMessage) => {
    switch (msg.type) {
      case "claude_event":
        if (msg.subtype === "tool_use") {
          const e = msg as ClaudeToolUseEvent;
          const detail = (e.input.file_path as string) || (e.input.command as string) || (e.input.pattern as string) || "";
          log("CLAUDE", `tool=${e.tool} ${detail ? "target=" + detail : ""}`);
          ui.addActivityEvent(e);
        }
        break;

      case "function_result": {
        const preview = msg.result.slice(0, 150);
        log("CLAUDE", `result name=${msg.name} error=${msg.is_error || false} | ${preview}`);
        if (gemini) {
          gemini.sendFunctionResponse(msg.id, msg.name, msg.result);
        }
        ui.addActivityDone(msg.is_error || false);
        ui.setClaudeWorking(false);
        break;
      }

      case "status":
        log("CLAUDE", `status running=${msg.claude_running} session=${msg.session_id}`);
        ui.setClaudeWorking(msg.claude_running);
        break;
    }
  });
  backend.connect();

  // Connect/Disconnect button
  ui.onConnectClick(async () => {
    if (isConnected && gemini) {
      await gemini.disconnect();
      audioManager?.stopCapture();
      ui.setConnected(false);
      isConnected = false;
      return;
    }

    gemini = new GeminiConnection(audioManager!, {
      onTranscript: (role, text) => {
        ui.addTranscript(role, text);
      },
      onTurnComplete: () => {
        ui.endTranscript();
      },
      onFunctionCall: (id, name, args) => {
        log("GEMINI", `function_call name=${name} id=${id} | ${JSON.stringify(args).slice(0, 150)}`);

        // Client-side tools — handled in browser, not sent to Claude
        if (name === "open_url") {
          const url = (args.url as string) || "";
          log("BROWSER", `Opening URL: ${url}`);
          window.open(url, "_blank");
          gemini!.sendFunctionResponse(id, name, `Opened ${url} in a new browser tab.`);
          return;
        }

        ui.setClaudeWorking(true);
        backend!.sendFunctionCall(id, name, args);
      },
      onConnected: () => {
        ui.setConnected(true);
        isConnected = true;
      },
      onDisconnected: () => {
        ui.setConnected(false);
        isConnected = false;
      },
      onStateChange: (state) => {
        ui.setGeminiState(state);
      },
    });

    await gemini.connect();
  });

  // Mode selector
  const modeSelect = document.getElementById("mode-select") as HTMLSelectElement;
  modeSelect.addEventListener("change", () => {
    audioManager?.setMode(modeSelect.value as "push-to-talk" | "always-on");
  });

  // Text input — for testing tool calls
  const textInput = document.getElementById("text-input") as HTMLInputElement;
  textInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && textInput.value.trim() && gemini) {
      const text = textInput.value.trim();
      ui.addTranscript("user", text);
      gemini.sendText(text);
      textInput.value = "";
    }
  });

  // Mic button click (alternative to spacebar)
  const micBtn = document.getElementById("mic-btn")!;
  micBtn.addEventListener("mousedown", () => {
    audioManager?.startCapture();
    ui.setGeminiState("listening");
  });
  micBtn.addEventListener("mouseup", () => {
    audioManager?.stopCapture();
    ui.setGeminiState("idle");
  });
}

// ── Teardown ─────────────────────────────────────────────────

function teardownVoiceUI(): void {
  gemini?.disconnect();
  backend?.disconnect();
  audioManager?.destroy();
  gemini = null;
  backend = null;
  audioManager = null;
  isConnected = false;
}

// ── Main Init ────────────────────────────────────────────────

async function init() {
  // Wire up picker events
  ui.onOpenProject((path) => openProject(path));
  ui.onBrowseNative(async () => {
    try {
      const res = await fetch("/api/projects/pick");
      const data = await res.json();
      if (data.path) {
        openProject(data.path);
      }
    } catch {
      // dialog cancelled or failed
    }
  });
  ui.onChangeProject(() => {
    teardownVoiceUI();
    ui.showProjectPicker();
    browseDir("~");
  });
  ui.onBrowseDir((path) => browseDir(path));
  ui.onSelectDir((path) => openProject(path));
  ui.onRecentClick((path) => openProject(path));

  // Check if a project is already set (e.g. via --project CLI arg)
  try {
    const res = await fetch("/api/project");
    const data = await res.json();

    if (data.active && data.path) {
      ui.showVoiceScreen(data.path);
      await initVoiceUI();
    } else {
      ui.showProjectPicker();
      browseDir("~");
    }
  } catch {
    ui.showProjectPicker();
    browseDir("~");
  }

  console.log("VoiceCode initialized");
}

init().catch(console.error);
