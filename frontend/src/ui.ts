/**
 * UI — DOM manipulation for transcript, activity feed, and diff viewer.
 */

import type { ClaudeToolUseEvent } from "./types";

export class UI {
  private transcriptEl: HTMLElement;
  private activityLog: HTMLElement;
  private diffsEl: HTMLElement;
  private statusDot: HTMLElement;
  private statusText: HTMLElement;
  private micBtn: HTMLElement;
  private micHint: HTMLElement;
  private connectBtn: HTMLElement;

  // Screens
  private pickerScreen: HTMLElement;
  private voiceScreen: HTMLElement;

  // Picker elements
  private projectPathInput: HTMLInputElement;
  private browserList: HTMLElement;
  private browserHeader: HTMLElement;
  private recentProjectsEl: HTMLElement;
  private projectNameEl: HTMLElement;

  constructor() {
    this.transcriptEl = document.getElementById("transcript")!;
    this.activityLog = document.getElementById("activity-log")!;
    this.diffsEl = document.getElementById("diffs")!;
    this.statusDot = document.getElementById("connection-status")!;
    this.statusText = document.getElementById("status-text")!;
    this.micBtn = document.getElementById("mic-btn")!;
    this.micHint = document.getElementById("mic-hint")!;
    this.connectBtn = document.getElementById("connect-btn")!;

    this.pickerScreen = document.getElementById("project-picker")!;
    this.voiceScreen = document.getElementById("voice-screen")!;
    this.projectPathInput = document.getElementById("project-path") as HTMLInputElement;
    this.browserList = document.getElementById("browser-list")!;
    this.browserHeader = document.getElementById("browser-header")!;
    this.recentProjectsEl = document.getElementById("recent-projects")!;
    this.projectNameEl = document.getElementById("project-name")!;
  }

  onConnectClick(handler: () => void): void {
    this.connectBtn.addEventListener("click", handler);
  }

  // ── Project Picker ─────────────────────────────────────────

  showProjectPicker(): void {
    this.pickerScreen.style.display = "flex";
    this.voiceScreen.style.display = "none";
    this.renderRecentProjects();
    this.projectPathInput.focus();
  }

  showVoiceScreen(projectPath: string): void {
    this.pickerScreen.style.display = "none";
    this.voiceScreen.style.display = "flex";

    // Show project name in header
    const name = projectPath.split(/[/\\]/).pop() || projectPath;
    this.projectNameEl.textContent = name;
    this.projectNameEl.title = projectPath;

    // Save to recent projects
    this.addRecentProject(projectPath);
  }

  onOpenProject(handler: (path: string) => void): void {
    const openBtn = document.getElementById("open-btn")!;
    const input = this.projectPathInput;

    const submit = () => {
      const path = input.value.trim();
      if (path) handler(path);
    };

    openBtn.addEventListener("click", submit);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submit();
    });
  }

  onBrowseNative(handler: () => void): void {
    document.getElementById("browse-btn")!.addEventListener("click", handler);
  }

  onChangeProject(handler: () => void): void {
    document.getElementById("change-project-btn")!.addEventListener("click", handler);
  }

  onBrowseDir(handler: (path: string) => void): void {
    this.browserList.addEventListener("click", (e) => {
      const target = (e.target as HTMLElement).closest("[data-path]") as HTMLElement | null;
      if (target?.dataset.path) handler(target.dataset.path);
    });
    this.browserHeader.addEventListener("click", (e) => {
      const target = (e.target as HTMLElement).closest("[data-path]") as HTMLElement | null;
      if (target?.dataset.path) handler(target.dataset.path);
    });
  }

  onSelectDir(handler: (path: string) => void): void {
    this.browserList.addEventListener("dblclick", (e) => {
      const target = (e.target as HTMLElement).closest("[data-path]") as HTMLElement | null;
      if (target?.dataset.path) handler(target.dataset.path);
    });
  }

  onRecentClick(handler: (path: string) => void): void {
    this.recentProjectsEl.addEventListener("click", (e) => {
      const target = (e.target as HTMLElement).closest("[data-path]") as HTMLElement | null;
      if (target?.dataset.path) handler(target.dataset.path);
    });
  }

  renderFolderBrowser(current: string, parent: string, dirs: { name: string; path: string }[]): void {
    this.projectPathInput.value = current;

    this.browserHeader.innerHTML = `<button class="browser-up" data-path="${escapeAttr(parent)}">&#8593; Up</button>
      <span class="browser-current">${escapeHtml(current)}</span>`;

    this.browserList.innerHTML = dirs
      .map(
        (d) =>
          `<div class="browser-dir" data-path="${escapeAttr(d.path)}">&#128193; ${escapeHtml(d.name)}</div>`
      )
      .join("");
  }

  setPickerError(msg: string): void {
    // Brief error flash on the input
    this.projectPathInput.classList.add("input-error");
    this.projectPathInput.placeholder = msg;
    setTimeout(() => {
      this.projectPathInput.classList.remove("input-error");
      this.projectPathInput.placeholder = "/path/to/your/project";
    }, 2000);
  }

  private renderRecentProjects(): void {
    const recent = this.getRecentProjects();
    if (recent.length === 0) {
      this.recentProjectsEl.innerHTML = "";
      return;
    }
    this.recentProjectsEl.innerHTML =
      `<h3>Recent Projects</h3>` +
      recent
        .map((p) => {
          const name = p.split(/[/\\]/).pop() || p;
          return `<div class="recent-entry" data-path="${escapeAttr(p)}">
            <span class="recent-name">${escapeHtml(name)}</span>
            <span class="recent-path">${escapeHtml(p)}</span>
          </div>`;
        })
        .join("");
  }

  private addRecentProject(path: string): void {
    const recent = this.getRecentProjects().filter((p) => p !== path);
    recent.unshift(path);
    localStorage.setItem("voicecode_recent", JSON.stringify(recent.slice(0, 10)));
  }

  private getRecentProjects(): string[] {
    try {
      return JSON.parse(localStorage.getItem("voicecode_recent") || "[]");
    } catch {
      return [];
    }
  }

  // ── Status ──────────────────────────────────────────────────

  setConnected(connected: boolean): void {
    this.statusDot.className = `status-dot ${connected ? "connected" : "disconnected"}`;
    this.statusText.textContent = connected ? "Connected" : "Disconnected";
    this.connectBtn.textContent = connected ? "Disconnect" : "Connect";
  }

  setClaudeWorking(working: boolean): void {
    if (working) {
      this.statusText.textContent = "Claude working...";
      this.statusDot.className = "status-dot recording";
    } else {
      this.statusText.textContent = "Connected";
      this.statusDot.className = "status-dot connected";
    }
  }

  setGeminiState(state: "idle" | "thinking" | "speaking" | "listening"): void {
    const labels: Record<string, string> = {
      idle: "Ready",
      thinking: "Thinking...",
      speaking: "Speaking...",
      listening: "Listening...",
    };
    const dotClass: Record<string, string> = {
      idle: "connected",
      thinking: "thinking",
      speaking: "speaking",
      listening: "recording",
    };
    this.statusText.textContent = labels[state];
    this.statusDot.className = `status-dot ${dotClass[state]}`;
  }

  // ── Transcript ──────────────────────────────────────────────

  private lastTranscriptRole: "user" | "gemini" | null = null;
  private lastTranscriptEl: HTMLElement | null = null;
  private lastTranscriptText = "";

  addTranscript(role: "user" | "gemini", text: string): void {
    // Accumulate into the current entry if same role
    if (role === this.lastTranscriptRole && this.lastTranscriptEl) {
      this.lastTranscriptText += text;
      const textSpan = this.lastTranscriptEl.querySelector(".transcript-text");
      if (textSpan) {
        textSpan.textContent = this.lastTranscriptText;
      }
    } else {
      // New role or first entry — create a new line
      const entry = document.createElement("div");
      entry.className = `transcript-entry transcript-${role}`;
      const roleLabel = role === "user" ? "You" : "Gemini";
      entry.innerHTML = `<span class="role">${roleLabel}:</span> <span class="transcript-text">${escapeHtml(text)}</span>`;

      this.transcriptEl.appendChild(entry);
      this.lastTranscriptRole = role;
      this.lastTranscriptEl = entry;
      this.lastTranscriptText = text;
    }

    this.transcriptEl.scrollTop = this.transcriptEl.scrollHeight;
  }

  /** End the current transcript accumulation (e.g. on turn complete). */
  endTranscript(): void {
    this.lastTranscriptRole = null;
    this.lastTranscriptEl = null;
    this.lastTranscriptText = "";
  }

  // ── Activity Feed ───────────────────────────────────────────

  addActivityEvent(event: ClaudeToolUseEvent): void {
    const entry = document.createElement("div");
    entry.className = "activity-entry";

    const time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const icon = toolIcon(event.tool);
    let detail = "";

    if (event.tool === "Read" || event.tool === "Edit" || event.tool === "Write") {
      detail = (event.input.file_path as string) || event.tool;
    } else if (event.tool === "Bash") {
      detail = ((event.input.command as string) || "").slice(0, 80);
    } else if (event.tool === "Glob") {
      detail = (event.input.pattern as string) || "search";
    } else if (event.tool === "Grep") {
      detail = (event.input.pattern as string) || "search";
    } else {
      detail = event.tool;
    }

    entry.innerHTML = `<span class="time">${time}</span> ${icon} <span class="detail">${escapeHtml(detail)}</span>`;
    this.activityLog.appendChild(entry);
    this.activityLog.scrollTop = this.activityLog.scrollHeight;

    // Also render diffs for Edit/Write events
    if (event.tool === "Edit") {
      this.addDiff(
        (event.input.file_path as string) || "unknown",
        (event.input.old_string as string) || "",
        (event.input.new_string as string) || ""
      );
    } else if (event.tool === "Write") {
      this.addDiff(
        (event.input.file_path as string) || "unknown",
        "",
        (event.input.content as string) || ""
      );
    }
  }

  addActivityDone(isError: boolean): void {
    const entry = document.createElement("div");
    entry.className = `activity-entry ${isError ? "activity-error" : "activity-done"}`;

    const time = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    entry.innerHTML = `<span class="time">${time}</span> ${isError ? "&#10060;" : "&#9989;"} <span class="detail">${isError ? "Error" : "Done"}</span>`;
    this.activityLog.appendChild(entry);
    this.activityLog.scrollTop = this.activityLog.scrollHeight;
  }

  // ── Diff Viewer ─────────────────────────────────────────────

  addDiff(filePath: string, oldStr: string, newStr: string): void {
    const block = document.createElement("div");
    block.className = "diff-block";

    const header = document.createElement("div");
    header.className = "diff-header";
    header.textContent = filePath + (oldStr === "" ? " (new)" : " (modified)");
    block.appendChild(header);

    const body = document.createElement("div");
    body.className = "diff-body";

    if (oldStr) {
      for (const line of oldStr.split("\n")) {
        const el = document.createElement("div");
        el.className = "diff-removed";
        el.textContent = "- " + line;
        body.appendChild(el);
      }
    }

    for (const line of newStr.split("\n")) {
      const el = document.createElement("div");
      el.className = "diff-added";
      el.textContent = "+ " + line;
      body.appendChild(el);
    }

    block.appendChild(body);
    this.diffsEl.appendChild(block);
    this.diffsEl.scrollTop = this.diffsEl.scrollHeight;
  }

  // ── Clear ───────────────────────────────────────────────────

  clearActivity(): void {
    this.activityLog.innerHTML = "";
  }

  clearDiffs(): void {
    this.diffsEl.innerHTML = "";
  }
}

// ── Helpers ──────────────────────────────────────────────────

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function escapeAttr(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function toolIcon(tool: string): string {
  const icons: Record<string, string> = {
    Read: "&#128214;",
    Edit: "&#9999;&#65039;",
    Write: "&#128196;",
    Bash: "&#128187;",
    Glob: "&#128269;",
    Grep: "&#128269;",
    LS: "&#128193;",
  };
  return icons[tool] || "&#9881;&#65039;";
}
