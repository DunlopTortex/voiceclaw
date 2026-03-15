/**
 * Debug logger — one line per event, easy to grep.
 *
 * Format: [HH:mm:ss.SSS] [CATEGORY] message | key=value key=value
 * Press Ctrl+Shift+D to download the log file.
 */

const MAX_ENTRIES = 5000;
const entries: string[] = [];
let msgSeq = 0;
let audioOutCount = 0;

export function log(category: string, msg: string, data?: unknown): void {
  const ts = new Date().toISOString().slice(11, 23);
  let line = `[${ts}] [${category}] ${msg}`;
  if (data !== undefined) {
    try {
      const s = typeof data === "string" ? data : JSON.stringify(data, null, 0);
      line += ` | ${s.length > 200 ? s.slice(0, 200) + `...(${s.length}c)` : s}`;
    } catch {
      line += " | [unserializable]";
    }
  }
  entries.push(line);
  if (entries.length > MAX_ENTRIES) entries.shift();
  console.log(line);
}

/** Single-line summary of each Gemini message */
export function logGeminiMessage(message: any): void {
  msgSeq++;
  const parts: string[] = [`#${msgSeq}`];

  // Setup
  if (message.setupComplete) {
    parts.push("type=setup_complete");
  }

  // Session resumption
  if (message.sessionResumptionUpdate) {
    const u = message.sessionResumptionUpdate;
    parts.push(`type=session_resumption resumable=${u.resumable ?? "?"}`);
  }

  // Thought (thinking before speaking)
  if (message.serverContent?.modelTurn?.parts) {
    for (const p of message.serverContent.modelTurn.parts) {
      if (p.thought && p.text) {
        parts.push(`type=thought text="${p.text.slice(0, 120)}"`);
      } else if (p.text) {
        parts.push(`type=text text="${p.text.slice(0, 120)}"`);
      }
      if (p.inlineData) {
        // Batch audio — only log every 20th chunk to reduce noise
        audioOutCount++;
        if (audioOutCount === 1 || audioOutCount % 20 === 0) {
          parts.push(`type=audio chunk=${audioOutCount} mime=${p.inlineData.mimeType} len=${p.inlineData.data?.length}`);
        } else {
          return; // Skip logging for intermediate audio chunks
        }
      }
    }
  }

  // NOTE: Do NOT access message.data — it triggers SDK getter that crashes on thought messages

  // Transcription
  if (message.serverContent?.inputTranscription?.text) {
    parts.push(`type=input_transcript text="${message.serverContent.inputTranscription.text}"`);
  }
  if (message.serverContent?.outputTranscription?.text) {
    parts.push(`type=output_transcript text="${message.serverContent.outputTranscription.text}"`);
  }

  // Turn signals
  if (message.serverContent?.generationComplete) {
    parts.push("type=generation_complete");
    audioOutCount = 0; // Reset for next turn
  }
  if (message.serverContent?.turnComplete) {
    parts.push("type=turn_complete");
  }

  // Tool calls
  if (message.toolCall?.functionCalls) {
    for (const fc of message.toolCall.functionCalls) {
      parts.push(`type=function_call name=${fc.name} id=${fc.id}`);
    }
  }

  // Usage
  if (message.usageMetadata) {
    const u = message.usageMetadata;
    parts.push(`usage=${u.totalTokenCount ?? "?"}tok`);
  }

  if (parts.length > 1) {
    log("GEMINI", parts.join(" | "));
  }
}

export function downloadLog(): void {
  const blob = new Blob([entries.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `voicecode-debug-${Date.now()}.log`;
  a.click();
  URL.revokeObjectURL(url);
}

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && e.code === "KeyD") {
    e.preventDefault();
    downloadLog();
  }
});
