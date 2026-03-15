/**
 * AudioManager — Mic capture (16kHz PCM) and speaker playback (24kHz PCM).
 *
 * Capture: AudioContext at 16kHz + AudioWorklet → Int16 PCM → base64
 * Playback: base64 → Int16 → Float32 → AudioBuffer at 24kHz → speakers
 */

import { log } from "./debug-log";

export type AudioChunkCallback = (base64Pcm: string) => void;
let chunksSent = 0;
let chunksPlayed = 0;

export class AudioManager {
  private playbackCtx: AudioContext | null = null;
  private captureCtx: AudioContext | null = null;
  private micStream: MediaStream | null = null;
  private sourceNode: MediaStreamAudioSourceNode | null = null;
  private processorNode: ScriptProcessorNode | null = null;
  private onChunk: AudioChunkCallback | null = null;
  private onCaptureEnd: (() => void) | null = null;
  private isCapturing = false;
  private mode: "push-to-talk" | "always-on" = "push-to-talk";

  // Playback scheduling — gapless audio
  private nextStartTime = 0;
  private playbackQueueProcessing = false;
  private playbackQueue: Float32Array[] = [];

  async init(): Promise<void> {
    // Playback context at default sample rate (browser resamples 24kHz buffers)
    this.playbackCtx = new AudioContext();

    // Resume on any user interaction (browser autoplay policy)
    const resumeCtx = () => {
      if (this.playbackCtx?.state === "suspended") {
        this.playbackCtx.resume();
      }
    };
    document.addEventListener("click", resumeCtx, { once: true });
    document.addEventListener("keydown", resumeCtx, { once: true });

    // Set up keyboard listeners for push-to-talk
    document.addEventListener("keydown", (e) => {
      if (
        e.code === "Space" &&
        !e.repeat &&
        this.mode === "push-to-talk" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        this.startCapture();
      }
    });

    document.addEventListener("keyup", (e) => {
      if (
        e.code === "Space" &&
        this.mode === "push-to-talk" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        this.stopCapture();
      }
    });
  }

  setMode(mode: "push-to-talk" | "always-on"): void {
    this.mode = mode;
    if (mode === "always-on") {
      this.startCapture();
    } else {
      this.stopCapture();
    }
  }

  setOnChunk(callback: AudioChunkCallback): void {
    this.onChunk = callback;
  }

  setOnCaptureEnd(callback: () => void): void {
    this.onCaptureEnd = callback;
  }

  async startCapture(): Promise<void> {
    if (this.isCapturing) return;
    this.isCapturing = true;

    try {
      if (!this.micStream) {
        this.micStream = await navigator.mediaDevices.getUserMedia({
          audio: {
            channelCount: 1,
            echoCancellation: true,
            noiseSuppression: true,
          },
        });
      }

      // Resume playback context (browser autoplay policy)
      if (this.playbackCtx?.state === "suspended") {
        await this.playbackCtx.resume();
      }

      // Capture context at 16kHz — browser handles resampling
      this.captureCtx = new AudioContext({ sampleRate: 16000 });
      this.sourceNode = this.captureCtx.createMediaStreamSource(this.micStream);

      // ScriptProcessor to get raw PCM samples
      const bufferSize = 2048;
      this.processorNode = this.captureCtx.createScriptProcessor(
        bufferSize,
        1,
        1
      );

      this.processorNode.onaudioprocess = (event) => {
        if (!this.isCapturing || !this.onChunk) return;

        const input = event.inputBuffer.getChannelData(0);

        // Already at 16kHz from captureCtx — just convert to Int16
        const pcm16 = float32ToInt16(input);
        const base64 = arrayBufferToBase64(pcm16.buffer as ArrayBuffer);

        chunksSent++;
        if (chunksSent % 50 === 1) {
          log("AUDIO_IN", `Sending chunk #${chunksSent}, ${base64.length} chars, sampleRate=${this.captureCtx?.sampleRate}`);
        }
        this.onChunk(base64);
      };

      this.sourceNode.connect(this.processorNode);
      this.processorNode.connect(this.captureCtx.destination);

      // Update UI
      document.getElementById("mic-btn")?.classList.add("active");
      document.getElementById("mic-hint")!.textContent = "Listening...";
      log("AUDIO_IN", `Capture started, sampleRate=${this.captureCtx.sampleRate}`);
    } catch (err) {
      log("AUDIO_IN", `Capture failed: ${err}`);
      this.isCapturing = false;
    }
  }

  stopCapture(): void {
    if (!this.isCapturing) return;
    this.isCapturing = false;

    this.processorNode?.disconnect();
    this.sourceNode?.disconnect();
    this.processorNode = null;
    this.sourceNode = null;

    // Close the capture context (new one created each time)
    this.captureCtx?.close();
    this.captureCtx = null;

    // Update UI
    document.getElementById("mic-btn")?.classList.remove("active");
    document.getElementById("mic-hint")!.textContent = "Hold Space to Talk";
    log("AUDIO_IN", `Capture stopped, ${chunksSent} chunks sent total`);

    // Notify that capture ended (triggers audioStreamEnd)
    this.onCaptureEnd?.();
  }

  /**
   * Queue Gemini's audio response for playback.
   * Expects base64-encoded 24kHz 16-bit PCM.
   */
  queuePlayback(pcm24kBase64: string): void {
    const float32 = base64ToFloat32Audio(pcm24kBase64);
    chunksPlayed++;
    if (chunksPlayed === 1) {
      log("AUDIO_OUT", `Playback started, ctx.state=${this.playbackCtx?.state}`);
    }
    this.playbackQueue.push(float32);

    if (!this.playbackQueueProcessing) {
      this.processPlaybackQueue();
    }
  }

  private processPlaybackQueue(): void {
    if (!this.playbackCtx || this.playbackQueue.length === 0) {
      if (chunksPlayed > 0) {
        log("AUDIO_OUT", `Playback queued ${chunksPlayed} chunks`);
        chunksPlayed = 0;
      }
      this.playbackQueueProcessing = false;
      return;
    }

    this.playbackQueueProcessing = true;

    // Resume if suspended
    if (this.playbackCtx.state === "suspended") {
      this.playbackCtx.resume();
    }

    while (this.playbackQueue.length > 0) {
      const samples = this.playbackQueue.shift()!;

      const buffer = this.playbackCtx.createBuffer(1, samples.length, 24000);
      buffer.getChannelData(0).set(samples);

      const source = this.playbackCtx.createBufferSource();
      source.buffer = buffer;
      source.connect(this.playbackCtx.destination);

      // Schedule gapless playback
      if (this.nextStartTime < this.playbackCtx.currentTime) {
        this.nextStartTime = this.playbackCtx.currentTime;
      }
      source.start(this.nextStartTime);
      this.nextStartTime += buffer.duration;
    }

    this.playbackQueueProcessing = false;
  }

  destroy(): void {
    this.stopCapture();
    if (this.micStream) {
      this.micStream.getTracks().forEach((t) => t.stop());
      this.micStream = null;
    }
    this.playbackCtx?.close();
    this.playbackCtx = null;
  }
}

// ── Audio utility functions ──────────────────────────────────

function float32ToInt16(float32: Float32Array): Int16Array {
  const int16 = new Int16Array(float32.length);
  for (let i = 0; i < float32.length; i++) {
    const s = Math.max(-1, Math.min(1, float32[i]));
    int16[i] = s * 32768;
  }
  return int16;
}

/** Decode base64 PCM 16-bit to Float32Array for Web Audio playback. */
function base64ToFloat32Audio(base64: string): Float32Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }

  // 16-bit PCM little-endian → Float32
  const length = bytes.length / 2;
  const float32 = new Float32Array(length);
  for (let i = 0; i < length; i++) {
    let sample = bytes[i * 2] | (bytes[i * 2 + 1] << 8);
    if (sample >= 32768) sample -= 65536;
    float32[i] = sample / 32768;
  }
  return float32;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}
