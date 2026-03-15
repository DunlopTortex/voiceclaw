# VoiceCode: Your AI Pair Programmer That Talks Back.

## What This Is

An open-source voice-first coding tool. You talk through ideas with an AI pair programmer (Gemini). When you decide to build something, it tells Claude Code to do it.

**Gemini** is the pair programmer — it listens, thinks critically, pushes back on bad ideas, suggests better approaches, and only calls Claude Code when you say "do it."

**Claude Code** is the hands — it reads the codebase, writes code, runs tests, and ships.

```
"Should we add WebSocket support or just use polling?"
"What's the fastest way to add search to this app?"
"I think we should refactor the auth module, what do you think?"
"Yeah let's do it"
"Run the tests"
"What files did you change?"
```

It's not a voice remote control. It's a pair programmer you can talk to.

---

## How a User Gets Started

```bash
# 1. Clone
git clone https://github.com/yourname/voicecode.git
cd voicecode

# 2. Install
pip install -r requirements.txt

# 3. Set your Gemini API key
#    (user creates .env — see .env.example)

# 4. Run
python server.py --project /path/to/your/project

# Opens http://localhost:3333 in your browser
```

That's it. A browser tab opens. The user holds spacebar, speaks, sees everything happening in real-time — voice transcript on the left, file changes on the right.

### Prerequisites

The user needs:
- **Python 3.11+**
- **Claude Code CLI** installed and authenticated (`claude` command available)
- **Gemini API key** (free tier from [Google AI Studio](https://aistudio.google.com/))
- **A microphone and speakers**

### The .env file

Users create this themselves (never committed to git):

```env
GEMINI_API_KEY=your-gemini-api-key-from-aistudio
```

That's the only key needed. Claude Code CLI uses its own authentication (already configured when the user installed it).

### For production use (optional)

Switch to Vertex AI for a stable, GA model:

```env
GOOGLE_CLOUD_PROJECT=your-gcp-project-id
GOOGLE_CLOUD_LOCATION=us-central1
USE_VERTEX_AI=true
```

---

## Architecture

The browser connects **directly** to Gemini Live API for voice. Audio never touches the Python backend. Zero added latency on the voice path.

```
┌──────────────────────────────────────────────────────────────────┐
│                     BROWSER (localhost:3333)                       │
│                                                                   │
│  ┌──────────────┐    ┌──────────────────────────────────────────┐│
│  │ Voice Panel   │    │ Activity Feed + File Changes Panel      ││
│  │ Transcript    │    │ (updates via WebSocket from backend)    ││
│  └──────┬───────┘    └──────────────────▲───────────────────────┘│
│         │ mic audio (Web Audio API)     │ tool events, diffs      │
│         │                               │                         │
│         ▼ DIRECT CONNECTION             │ WebSocket               │
│  ┌──────────────────┐           ┌──────┴──────────────────────┐  │
│  │ Gemini Live API   │           │ Python Backend              │  │
│  │ (Google servers)  │◄─────────►│ (localhost:3333)            │  │
│  │                   │ function  │                              │  │
│  │ Voice in/out      │ calls +   │ • Handles function calls    │  │
│  │ (zero latency     │ responses │ • Spawns claude -p          │  │
│  │  from our code)   │           │ • Parses stream-json        │  │
│  └──────────────────┘           │ • Routes questions to Claude│  │
│                                  │ • Git checkpointing         │  │
│                                  │ • Pushes events to browser  │  │
│                                  └──────┬─────────────────────┘  │
└──────────────────────────────────────────┼────────────────────────┘
                                           │ spawns subprocess
                                           ▼
                                  ┌──────────────────────┐
                                  │  CLAUDE CODE CLI      │
                                  │  claude -p "..."      │
                                  │  --stream-json        │
                                  │  --resume $SESSION_ID │
                                  └──────────────────────┘
```

### How the connection works

1. User opens `localhost:3333` in browser
2. Backend generates a **Gemini ephemeral token** (short-lived, safe for browser)
3. Browser opens WebSocket **directly to Gemini Live API** using the token
4. Mic audio goes: browser → Gemini (direct, no backend hop)
5. Gemini speech goes: Gemini → browser (direct, no backend hop)
6. When Gemini calls a function, the browser forwards it to the backend via local WebSocket
7. Backend spawns `claude -p`, parses stream-json, pushes events back to browser
8. Backend sends function result to browser, browser sends it to Gemini as FunctionResponse

**Voice path (latency-critical):** Browser ↔ Gemini directly. Our code adds zero latency.

**Function path (not latency-critical):** Browser → Backend → Claude → Backend → Browser → Gemini. This takes 5-60 seconds anyway because Claude is coding.

### What Runs Where

| Component | Where | Who pays |
|---|---|---|
| Gemini Live API | Google's servers (browser connects directly) | User's Gemini API key |
| Python backend | User's laptop (localhost:3333) | Free |
| Browser UI | User's laptop | Free |
| Claude Code CLI | User's laptop | User's existing Claude auth |

Nothing is hosted. No cloud backend. No accounts to create. Clone, configure, run.

---

## How Gemini and Claude Work Together

**Gemini is the brain.** It thinks, discusses, debates, and decides with the user.

**Claude Code is the hands.** It reads the codebase, writes code, runs commands.

Gemini doesn't touch code. Claude doesn't talk to the user. They have completely separate jobs.

### The Two Modes of Conversation

**Mode 1: Brainstorming (no code changes)**

Most of the conversation is here. The user thinks out loud. Gemini responds with opinions, tradeoffs, and suggestions. No functions are called. No code is touched.

```
User: "Should we add WebSocket support or just use polling?"

Gemini: "For a dashboard that updates every few seconds, polling
         is simpler and good enough. WebSockets make sense if you
         need sub-second updates — like a chat app or live
         collaboration. What's the update frequency you need?"

User: "It's a monitoring dashboard, updates every 5 seconds"

Gemini: "Polling. Definitely. Use a simple setInterval with fetch.
         WebSockets would be overengineering this. You can always
         upgrade later if the requirements change. Want me to have
         Claude set it up?"

User: "Yeah"

Gemini: "On it."
  → code_task("Add polling to the monitoring dashboard.
     Fetch updates every 5 seconds using setInterval.")
```

**Mode 2: Coding (Claude does the work)**

Only happens when the user explicitly says "do it," "go ahead," "yes," or gives a direct instruction like "add dark mode." Gemini calls a function, Claude codes, Gemini narrates the result.

```
  ♪ Mozart fades in ♪

  Orchestrator parses stream-json in real-time:

    tool_use: Read → [chime]
    → Gemini: "Reading the dashboard..."

    tool_use: Edit → [pen scratch]
    → Gemini: "Adding the polling logic..."

    result: "Added polling..."

  ♪ Mozart fades out ♪ [success bell]

Gemini: "Done. Claude added a usePolling hook that fetches
         dashboard data every 5 seconds with error handling
         and a loading state. Want to run it?"
```

### Gemini Is a Critical Thinker

Gemini doesn't just say yes to everything. It has opinions:

```
User: "Let's add Redis for caching"

Gemini: "Hold on — you've got 50 users on a single server.
         In-memory caching with a Map would do the job and
         saves you running a Redis instance. Redis makes sense
         when you scale to multiple servers and need shared
         state. Want to start with in-memory and add a cache
         interface so you can swap to Redis later?"

User: "Good point, yeah do that"

Gemini: "Smart. On it."
  → code_task("Add in-memory caching with an interface
     that can be swapped to Redis later")
```

```
User: "Should we write tests for this?"

Gemini: "Absolutely. You changed the auth flow — that's the
         one thing you really don't want to break silently.
         I'd add tests for valid token, expired token, missing
         token, and malformed token. Want me to have Claude
         write those?"
```

```
User: "Let's rewrite the whole backend in Rust"

Gemini: "That's a big call for a Node.js project that's working
         fine. What's driving this? Is it performance, or do you
         just want to use Rust? If it's performance, let's profile
         first and see where the bottlenecks actually are."
```

**The user always has the final word.** If they say "do it anyway," Gemini does it. No gatekeeping. Just honest input.

### When Claude Needs Clarification

Claude Code CLI sometimes asks clarifying questions. Gemini relays these as voice:

```
User: "Fix the bug"
Gemini: "On it."
  → code_task("Fix the bug")

Claude's result: "I found two potential issues:
  1. TypeError in auth.js — user.token can be null
  2. Missing form validation in signup.tsx
  Which one should I fix?"

Gemini: "Claude found two issues — a null token error in
  auth.js and missing form validation in signup. Which one?"

User: "The auth one"

Gemini: "Got it."
  → code_task("Fix the TypeError in auth.js where
     user.token can be null")
```

### How Gemini and Claude Work Together

Two paths through the system. Both go through Claude Code — the only difference is whether Claude reads or writes.

```
Quick responses (Live API handles directly):
  "Yes" / "On it" / "Got it" / "Which file?" / progress narration

Investigation (Live API → backend → Claude ask mode):
  "Should we use microservices?" → investigate_and_advise()

  Backend runs: claude -p "question" --print
    --allowedTools "Read,Glob,Grep,LS"
  Claude reads the codebase, answers the question.
  Answer returned to Live API → spoken to user.

Coding (Live API → backend → Claude edit mode):
  "Do it" / "Add dark mode" → code_task()

  Backend runs: claude -p "instruction" --output-format stream-json
  Claude reads, edits, runs tests — full access.
```

**Claude reads code AND answers questions. Gemini speaks the answer. Nobody guesses.**

Example:

```
User: "Should we add caching to the API?"

Gemini Live: "Let me look at the code first."
  → investigate_and_advise("Should we add caching to the API?")

  Backend runs:
    claude -p "The developer is asking: should we add caching
      to the API? Read the relevant code and give your grounded
      recommendation with tradeoffs." --print
      --allowedTools "Read,Glob,Grep,LS"
      --resume $SESSION_ID

  Claude reads code, thinks, returns:
    "12 REST endpoints in Express. PostgreSQL with Prisma ORM.
     No caching. The /products endpoint does 3 JOINs returning
     ~2MB — that's your bottleneck. I'd add Redis caching just
     for that one endpoint with a 60-second TTL. The other
     endpoints at ~200ms are fine."

Gemini Live speaks Claude's answer to the user.

User: "Yeah set it up"

Gemini Live: "On it."
  → code_task("Add Redis caching to /products with 60s TTL")
```

### What Gemini Does and Doesn't Do

| Gemini's job | NOT Gemini's job |
|---|---|
| Relay Claude's grounded analysis to the user | Give generic advice without looking at the code |
| Ask Claude to read the code and answer questions | Guess about the codebase from conversation alone |
| Push back on bad ideas with code-backed reasoning | Blindly agree with everything |
| Suggest better approaches based on what exists | Over-specify implementation details for Claude |
| The user ALWAYS has the final word | Gatekeep — if they say "do it anyway," do it |
| Decide WHEN to call Claude (only on user confirmation) | Call Claude on every utterance |
| Pass the user's intent as-is when coding | Rewrite vague instructions into detailed specs |

### Gemini's System Prompt (the core principle)

Stored in `prompts/gemini_system.md` — fully editable by the user.

```
You are an AI pair programmer. The developer talks to you by voice.
You think critically, give honest opinions, and discuss ideas before
writing any code.

YOUR ROLE:
- You are the thinking partner. Discuss architecture, tradeoffs,
  priorities, and approach BEFORE coding.
- Give concise, opinionated answers. Don't be wishy-washy.
  If something is a bad idea, say so (respectfully).
- Agree when the idea is good. Disagree when it's not.
  Give pros and cons for grey areas.
- The user ALWAYS has the final word. If they say "do it anyway"
  after you push back, do it. No gatekeeping.

WHEN THE USER ASKS A QUESTION ABOUT THEIR CODE:
- Use the investigate_and_advise function. Claude will read the
  codebase and give a grounded answer, which you then relay.
- Say "Let me look at the code" before calling the function.
- NEVER guess about the codebase. Always ask Claude first.

WHEN TO CALL CLAUDE CODE FOR EDITS:
- ONLY when the user explicitly says to: "do it", "go ahead",
  "yes", "build that", "make that change", or gives a direct
  instruction like "add dark mode to the settings page."
- If the user is just discussing or asking a question, use
  investigate_and_advise (Claude reads, no edits).
- When you do call Claude for edits, pass the user's intent
  naturally. Don't over-specify.

WHEN CLAUDE RETURNS A RESULT:
- Narrate what changed concisely.
- If Claude asks a clarifying question, relay it to the user.
- If Claude reports an error, explain it simply and suggest
  what to do next.

VOICE PERSONALITY:
- Concise. No filler. No "great question!"
- Direct and honest, like a senior engineer you trust.
- Opinionated but not arrogant.
```

---

## Function Schema

Three categories of functions: **thinking**, **coding**, and **status**.

### Thinking functions (Claude reads and answers)

| Function | What it does |
|---|---|
| `investigate_and_advise(question)` | Claude Code reads the codebase in ask mode (`--allowedTools "Read,Glob,Grep,LS"`) and answers the question with grounded analysis. No code changes. Use for architecture questions, tradeoffs, "should we" discussions. |

### Coding functions (Claude does the work)

| Function | What it does |
|---|---|
| `code_task(instruction)` | General coding — edits, features, fixes, refactors |
| `edit_file(path, instruction)` | Targeted edit to a specific file |
| `run_command(command)` | Run a shell command |
| `run_tests(filter)` | Run tests, return compact pass/fail |
| `check_errors()` | Check for lint/build errors |
| `undo_last()` | Git checkout to revert last change |

### Status functions (quick info, no coding)

| Function | What it does |
|---|---|
| `read_file(path)` | Read and summarize a file |
| `explain_code(path, symbol)` | Explain how something works |
| `review_changes()` | Summarize what changed (accessible diff) |
| `describe_ui(url)` | Describe a web page by its structure |
| `get_status()` | What files changed, current session state |
| `search_codebase(query)` | Search for symbols, patterns, files |

All functions are `NON_BLOCKING` (except `undo_last` and `get_status`).

---

## Voice Input Modes

Two modes. User picks at startup or switches mid-session.

### Mode 1: Push-to-Talk (default)

Hold **spacebar** to speak. Release to send. Mic is silent otherwise.

```
Spacebar DOWN → mic starts recording
User speaks:   "Add authentication to the express app"
Spacebar UP   → audio sent to Gemini → mic stops
```

Saves tokens, no background noise issues, no accidental barge-in.

### Mode 2: Always-On (hands-free)

Open mic. Gemini's built-in VAD detects when the user speaks. For blind users, users with mobility limitations, or anyone on a treadmill.

```bash
python main.py --project /path/to/project --always-on
```

### Barge-In Handling (Always-On Mode)

In always-on mode, the user can speak while Claude is mid-edit. Instead of silently canceling the function call (Gemini's default), we handle it intelligently:

```
Claude is mid-edit (adding authentication)...
  ♪ Mozart playing, chimes for file reads ♪

User speaks: "Actually wait"

Gemini detects barge-in. Checks: is Claude currently working?
  → Yes, Claude is mid-edit.

Gemini speaks: "Claude is still working on the authentication
  changes. Do you want to let it finish, or cancel and undo?"

User: "Let it finish"
Gemini: "Got it, letting Claude finish."
  → Claude completes, result narrated normally.

  OR

User: "Cancel and undo"
Gemini: "Canceling and reverting."
  → Orchestrator kills the claude -p process
  → Runs: claude -p "git checkout -- . to revert uncommitted changes"
  → Gemini: "Reverted. What would you like to do instead?"
```

The orchestrator tracks whether Claude is currently running. On barge-in:
1. Pause — don't cancel the Claude process yet
2. Ask the user what they want
3. Either let Claude finish or kill + revert

```python
# In the orchestrator, when Gemini reports an interruption:
if claude_process_running:
    # Don't kill Claude yet — ask the user
    await gemini.send_client_content(
        turns=[{"role": "model", "parts": [{"text":
            "Claude is still working. Let it finish, or cancel and undo?"
        }]}],
        turn_complete=True
    )
    # Wait for user's response, then act accordingly
```

---

## Confirmation Before Every Code Change

**Every function that modifies files requires user confirmation.** Gemini ALWAYS says what it's about to do and waits for "yes" / "go ahead" / "do it" before calling Claude.

```
User: "Add dark mode to the settings page"

Gemini: "I'll have Claude add a dark mode toggle to the settings
         page. Go ahead?"

User: "Yes"                    ← Only NOW does Gemini call code_task()

  OR

User: "Actually, just the CSS variables for now, not the toggle"

Gemini: "Got it — just the CSS custom properties for dark mode
         theming, no toggle component yet. Go ahead?"

User: "Yeah"                   ← NOW Gemini calls code_task()
```

This applies to ALL coding functions:

| Function | Confirmation required? |
|---|---|
| `code_task` | YES — always confirm |
| `edit_file` | YES — always confirm |
| `run_command` | YES — always confirm (especially destructive commands) |
| `run_tests` | YES — confirm first time, then "run tests again" can be quick |
| `check_errors` | No — read-only, safe |
| `undo_last` | YES — destructive, always confirm |
| `investigate_and_advise` | No — just reading + thinking, no changes |
| `read_file` | No — read-only |
| `explain_code` | No — read-only |
| `review_changes` | No — read-only |
| `describe_ui` | No — read-only |
| `get_status` | No — read-only |
| `search_codebase` | No — read-only |

**Rule: if it writes to disk, confirm first. If it only reads, just do it.**

This is baked into the Gemini system prompt:

```
CONFIRMATION RULE:
Before calling ANY function that modifies files (code_task, edit_file,
run_command, run_tests, undo_last), you MUST:
1. State what you're about to do in plain language
2. Wait for the user to say "yes", "go ahead", "do it", or similar
3. ONLY THEN call the function

Read-only functions (read_file, explain_code, search_codebase,
investigate_and_advise, get_status, review_changes, describe_ui,
check_errors) can proceed without confirmation.
```

---

## Sound Design

While Claude is working, the user hears ambient feedback instead of silence.

| Event | Sound | Purpose |
|---|---|---|
| Task starts | Mozart fades in | "Working on it" |
| File read | Soft chime | Awareness |
| File edit | Pen-on-paper scratch | "Writing code" |
| New file created | Page turn | "New file" |
| Command running | Brief keyboard clatter | "Running something" |
| Tests pass | Rising arpeggio | Success |
| Tests fail | Descending minor chord | Failure |
| Error | Low buzz | Problem |
| Task complete | Mozart fades out + bell | "Done, back to you" |

Mozart stays low (~20%). Sound cues overlay briefly. The user builds an unconscious sense of what's happening — three chimes followed by a scratch means "Claude read three files and is now editing."

**Significant events** (edits, creates, errors) are also narrated by Gemini via `send_client_content` during NON_BLOCKING function execution. The user hears both: cues for rapid events, speech for important ones.

---

## Models

This project uses **one Gemini model** for voice + **Claude Code CLI** for all thinking and coding.

### Gemini Live API (always running)

Handles real-time voice conversation, function calling, progress narration.

| | Prototyping (Google AI Studio) | Production (Vertex AI) |
|---|---|---|
| Model | `gemini-2.5-flash-native-audio-preview-12-2025` | `gemini-live-2.5-flash-native-audio` |
| Status | Preview | **GA (Generally Available)** |
| Auth | `GEMINI_API_KEY` | GCP service account |
| Input tokens | 128,000 | 128,000 |
| Output tokens | 8,192 | 8,192 |
| Audio I/O | 16-bit PCM (16kHz in, 24kHz out) | Same |
| Session limit | Unlimited (with context compression) | Same |
| Languages | 24 | 24 |
| Function calling | Yes | Yes |

### Claude Code CLI (called on demand)

All codebase reading, analysis, and editing goes through `claude -p`. Two modes:

| Mode | Command | When |
|---|---|---|
| **Ask** (read-only) | `claude -p "question" --print --allowedTools "Read,Glob,Grep,LS"` | `investigate_and_advise()` — architecture questions, tradeoffs |
| **Edit** (full access) | `claude -p "instruction" --output-format stream-json` | `code_task()` — coding, refactoring, tests |

Both use `--resume $SESSION_ID` to maintain context across calls.

### How the models work together

| Scenario | Who handles it | Why |
|---|---|---|
| "Add dark mode" | Gemini Live → Claude Code (edit mode) | Direct instruction, Claude codes |
| "Got it" / "Yes" / "Which file?" | Gemini Live API alone | Quick conversational, no Claude needed |
| "Should we add caching?" | Gemini Live → Claude Code (ask mode) | Needs codebase reading + analysis |
| "What's the best way to handle auth?" | Gemini Live → Claude Code (ask mode) | Architecture question requiring grounded analysis |
| Progress narration while Claude works | Gemini Live API alone | Real-time, low-latency speech |

---

## Session Management

| System | How it works |
|---|---|
| **Gemini Live** | `ContextWindowCompressionConfig` with `SlidingWindow` for unlimited sessions. `SessionResumptionConfig` with handles valid **24 hours**. Auto-reconnect on `GoAway` (server sends `timeLeft` before disconnect). No built-in long-term memory — handles only preserve session state, not persistent memory across days. |
| **Claude** | `--resume $SESSION_ID` on every `claude -p` call. Sessions persist to disk at `~/.claude/projects/`. Survive crashes, restarts, everything. |
| **Orchestrator** | Stores Claude session ID + Gemini `new_handle` + last N result summaries. Persists to JSON in project dir. On browser refresh or crash, reconnects Gemini with stored handle (if <24h), resumes Claude with stored session ID. |

> **No built-in Gemini memory across sessions.** If the Gemini session handle expires (>24h) or is lost, Gemini starts fresh. The user's coding context is preserved through Claude's session resumption, not Gemini's. Gemini only needs to know "what happened recently" — the orchestrator re-injects a summary of recent Claude results on reconnection.

---

## The Interface

User runs `python main.py --project /path/to/project`, a browser tab opens at `localhost:3333`.

```
┌──────────────────────────────────────────────────────────────────┐
│  VoiceCode                                    [Push-to-Talk ▾]   │
├────────────────────────┬─────────────────────────────────────────┤
│                        │                                         │
│   🎙 Voice             │   Agent Activity (real-time log)        │
│                        │                                         │
│   ● Hold Space to Talk │   14:32:01  📖 Read settings.tsx        │
│                        │   14:32:02  📖 Read theme.css           │
│   ─────────────────    │   14:32:04  📄 Create ThemeToggle.tsx   │
│                        │   14:32:06  ✏️ Edit settings.tsx        │
│   You: "Add dark mode  │   14:32:08  ✏️ Edit theme.css          │
│   to the settings"     │   14:32:09  ✅ Done (5 tool calls)     │
│                        │                                         │
│   Gemini: "Adding dark │ ─────────────────────────────────────── │
│   mode. Go ahead?"     │                                         │
│                        │   File Changes (live diffs)             │
│   You: "Yes"           │                                         │
│                        │   ThemeToggle.tsx (new)                  │
│   Gemini: "Creating a  │   + export const ThemeToggle = () => {  │
│   toggle component..." │   +   const [dark, setDark] = ...       │
│                        │   +   return <button onClick=...        │
│   Gemini: "Done. Added │                                         │
│   ThemeToggle to the   │   settings.tsx (modified)                │
│   settings page with   │   - import { Settings } from './...'    │
│   CSS custom props."   │   + import { Settings, ThemeToggle }    │
│                        │   + <ThemeToggle />                      │
│                        │                                         │
└────────────────────────┴─────────────────────────────────────────┘
```

### Left Panel: Voice

- Big mic button (spacebar to hold, or click)
- Toggle between push-to-talk and always-on
- Live voice transcript — what the user said, what Gemini said
- Mozart / sound cue status indicator
- All audio plays through the browser (Web Audio API)

### Right Panel: Agent Activity + File Changes

- **Activity feed (top):** Real-time log of every Claude tool call — timestamped, one line each. Read, Edit, Write, Bash, test results. Updates live as stream-json events arrive.
- **File changes (bottom):** Actual diffs as Claude makes them. New files show full content. Edits show old/new with red/green highlighting. Like watching Claude Code's interactive terminal but in a clean web UI. All data comes from stream-json `tool_input` — we have `file_path`, `old_string`, `new_string` for every edit.

### How Events Flow to the UI

```
Claude Code CLI (headless)
  ↓ stream-json stdout
Python Backend
  ↓ parses each JSON line
  ↓ classifies: tool_use (Read/Edit/Write/Bash), text_delta, result
  ↓ sends via WebSocket to browser
Browser
  ↓ updates transcript panel (Gemini text)
  ↓ appends to activity feed (tool calls)
  ↓ renders diff in file changes panel (edit tool_input)
```

Every stream-json event becomes a WebSocket message to the browser. The UI updates in real-time — you see files being edited as Claude writes them.

---

## Project Structure

```
voicecode/
  # Backend (Python)
  server.py                     # FastAPI server + WebSocket endpoint
  gemini_session.py             # Gemini Live API connection, reconnection
  claude_runner.py              # Spawn claude -p, parse stream-json, emit events
  function_router.py            # Map Gemini function calls → claude -p commands
  context_bridge.py             # Store Claude results for Gemini context awareness
  checkpoint.py                 # Git auto-checkpoint before code changes + revert

  # Frontend (served by FastAPI)
  static/
    index.html                  # Single page app — the UI above
    app.js                      # WebSocket client, audio capture/playback, UI updates
    style.css                   # Layout, diff highlighting, dark mode
    audio/
      music/                    # Copyright-free Mozart (MP3)
      cues/                     # Sound effects (WAV) — played via Web Audio API

  # Config
  prompts/
    gemini_system.md            # Gemini's personality — editable by user
  .env.example                  # Template for API keys
  requirements.txt              # Python dependencies
  LICENSE                       # MIT
```

### What's NOT in this repo

- No npm/node/React — vanilla HTML/JS/CSS, zero build step
- No external database — state lives in memory + git
- No deployment needed — runs on localhost
- No modifications to Claude Code — used as-is via `claude -p`

---

## Tech Stack

| Component | Technology | Why |
|---|---|---|
| Backend server | **FastAPI** | Async Python, WebSocket support, serves static files |
| WebSocket (backend↔browser) | **FastAPI WebSocket** | Real-time events to UI |
| Gemini Live API | **google-genai** | Official SDK, manages Gemini WebSocket |
| Audio capture (browser) | **Web Audio API** | Browser-native mic capture, PCM encoding |
| Audio playback (browser) | **Web Audio API** | Browser-native speaker output |
| Sound cues (browser) | **Web Audio API** | Low-latency WAV playback |
| Background music (browser) | **HTML5 Audio** | Plays Mozart MP3 with volume control |
| Frontend | **Vanilla JS + HTML + CSS** | No build step, no dependencies, just works |
| Diff rendering | **Custom JS** | Parse tool_input old_string/new_string into red/green diffs |
| Config | **python-dotenv** | Load .env |
| Async runtime | **asyncio** | Everything is async |

### requirements.txt

```
fastapi>=0.110.0
uvicorn>=0.29.0
websockets>=12.0
google-genai>=1.0.0
python-dotenv>=1.0.0
```

No `sounddevice`, no `pygame`, no `numpy` — all audio happens in the browser now. Five Python dependencies total.

---

## Risks and Mitigations

### RISK 1: Latency (10-60 seconds for complex edits)

Claude Code takes time for complex tasks. The user hears silence.

**Mitigation:** Mozart + sound cues + Gemini narrating significant events. The user always hears something. Silence never exceeds ~3 seconds.

### RISK 2: Barge-In During Claude Edit (SOLVED)

In always-on mode, the user might speak while Claude is mid-edit.

**Solved by intelligent barge-in handling.** Gemini doesn't silently cancel. It pauses, tells the user Claude is still working, and asks: "Let it finish, or cancel and undo?" User decides. In push-to-talk mode, barge-in can't happen accidentally at all.

### RISK 3: Voice Misrecognition

Gemini mishears the user in a noisy room. "Read the file" becomes "edit the file."

**Mitigation:** Gemini confirms before destructive actions. Non-destructive actions (reads, searches, status) are safe to misfire. Enable `output_audio_transcription` so the user can check what Gemini heard.

### RISK 4: Process Spawn Overhead

Each function call spawns a new `claude -p` process (~1-2 second startup).

**Mitigation:** `--resume $SESSION_ID` avoids cold context loading. Claude caches session state on disk.

### RISK 5: Claude Code CLI Changes

CLI flags, stream-json format, or behavior could change between versions.

**Mitigation:** Parse conservatively — only look for fields we need. Pin Claude Code version in docs. Abstract CLI invocation behind `claude_runner.py`.

### RISK 6: Gemini Session Drops

WebSocket can disconnect (GoAway messages, network issues).

**Mitigation:** Context compression for unlimited duration. Session resumption handles valid 24 hours. Auto-reconnect on GoAway with stored handle. Orchestrator re-injects recent Claude result summaries on reconnection. Brief reconnection chime so user knows. Handle expiry (>24h) means Gemini starts fresh — but Claude session is still intact, so no coding context is lost.

---

## Limitations

1. **Requires internet.** Both Gemini API and Claude Code API need connectivity.
2. **Requires Claude Code CLI installed.** Users must have `claude` installed and authenticated.
3. **Latency floor ~4-7 seconds** for simple operations. Complex edits: 15-60 seconds.
4. **Cannot show visual UI.** `describe_ui` narrates the accessibility tree, not a screenshot.
5. **Requires spacebar for input.** Push-to-talk means you need one hand on the keyboard. For fully hands-free use (e.g. blind users), a configurable toggle to always-on mode is available.
6. **Single session per instance.** Run multiple instances for multiple projects.

---

## Build Phases

### Phase 1: Core Voice Loop (MVP — 2 weeks)

The minimum: speak a command, Claude codes, hear the result.

- [ ] Gemini Live API WebSocket connection with context compression
- [ ] Mic capture and speaker playback (PCM)
- [ ] 4 functions: `code_task`, `read_file`, `run_command`, `get_status`
- [ ] `investigate_and_advise` via Claude ask mode (`claude -p --print --allowedTools`)
- [ ] `claude_runner.py` — spawn `claude -p`, parse stream-json
- [ ] Context bridge — store results for Gemini awareness
- [ ] Gemini system prompt (confirmation behavior, translation, narration)
- [ ] Auto-reconnection with session handles
- [ ] `.env.example` and setup instructions

### Phase 2: Ambient Audio + Full Functions (1 week)

Polish. Silence → music + cues.

- [ ] Mozart player with fade in/out
- [ ] Sound cues driven by stream-json tool_use events
- [ ] Gemini progress narration via `send_client_content`
- [ ] All 12 functions wired up
- [ ] Barge-in recovery (track in-flight Claude processes)

### Phase 3: Robustness (ongoing)

- [ ] Crash recovery (persist orchestrator state to disk)
- [ ] Multiple Mozart tracks, randomized
- [ ] User-configurable sounds and volume
- [ ] Manual VAD mode for noisy environments
- [ ] Braille transcript mode (pipe all text to file)
- [ ] Usage/cost tracking

---

## Open Source Strategy

### License

MIT — maximum adoption, no friction.

### What Users Bring

- Their own Gemini API key (free tier available)
- Their own Claude Code installation (already authenticated)
- A microphone and speakers

### Everything Is User-Editable

The whole point of open source is that users own their setup:

| File | What it controls | Users can... |
|---|---|---|
| `prompts/gemini_system.md` | Gemini's personality, confirmation behavior, verbosity | Change tone, add languages, make it more/less chatty |
| `assets/music/` | Background music during coding | Swap Mozart for lo-fi, jazz, silence, whatever |
| `assets/cues/` | Sound effects for tool events | Replace with custom sounds or disable |
| `function_router.py` | Which voice commands exist | Add new commands, remove ones they don't use |
| `config.py` | Model selection, audio settings | Switch models, adjust volumes, change VAD sensitivity |
| `.env` | API keys | Their own keys, never committed |

**The Gemini system prompt (`prompts/gemini_system.md`) is a plain Markdown file in the repo.** Not hardcoded. Not hidden in a Python string. Users open it, read it, change it. Contributors can submit PRs to improve it. This is the single most important file for tuning the voice experience — it should be front and center.

### Contribution-Friendly Design

The codebase is intentionally thin (~400 lines of core logic). Contributors can:
- Improve the Gemini system prompt in `prompts/gemini_system.md`
- Add new functions to `function_router.py`
- Add new sound cues to `assets/cues/`
- Add language support
- Build frontends on top of it

---

## Summary

**What we build:** A local web app that gives you an AI pair programmer you talk to. Voice conversation on the left, real-time file changes on the right. You discuss with Gemini, Claude reads and codes, Gemini speaks the results — all live.

**What we don't build:** A coding agent (Claude Code already is one), a voice engine (Gemini already is one), any hosted infrastructure (everything runs on localhost).

**How users get it:** Clone from GitHub, add their Gemini API key, run `python server.py`, browser opens, start talking.

**Who it's for:** Anyone who wants to think out loud while coding. Developers who talk through problems before writing code. People who want an opinionated pair programmer available 24/7. Hands-free coders. Blind engineers. People on a treadmill. People with RSI. People who just want to watch Claude Code work in a nicer UI than a terminal.
