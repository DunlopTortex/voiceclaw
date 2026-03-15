# VibeCodeBlind: Making AI-Assisted Coding Work for Blind Engineers

## A Comprehensive Design Vision

*Synthesized from the HN community thread (473 comments, 3270 points), and independent analyses by Claude, Gemini, and GPT-4o.*

---

## 1. The Core Problem

"Vibe coding" — the practice of rapidly building software through natural-language conversation with AI — is currently a **visual-first experience**. Sighted developers scan inline diffs, preview rendered UIs, watch token-by-token streaming, and interact with suggestions spatially. Every major AI coding tool (Cursor, Copilot, Claude Code, Codex, Gemini CLI) assumes you can **see** the output.

For a blind engineer, the "vibe" breaks completely.

But the problem is not that blind engineers can't code. The HN thread makes this abundantly clear: blind developers build **richer abstract mental models** of code than most sighted engineers, process screen reader speech at 5-6x normal speed, and navigate codebases as directed graphs rather than flat text. The problem is that current AI tooling fights these strengths instead of supporting them.

**The real bottleneck is not writing code — it is reviewing AI-generated changes.**

---

## 2. What the Blind Engineering Community Actually Says

These insights come directly from the HN thread — real blind and low-vision engineers speaking from experience.

### How Blind Developers Actually Work

| Reality | Implication for Tool Design |
|---|---|
| Screen readers at **5-6x speed** are the primary interface. Speech is processed faster than most sighted people read. | Output must be structured and navigable, not dumped as a wall of text. |
| Code is a **directed graph** in memory, not a visual block. Mental models are richer and have no spatial limits. | Tools should expose AST/symbol structure, not line-by-line text. |
| **CLI trumps GUI.** Terminal-based tools are structurally preferred. | Build on terminal foundations, not web UIs. |
| **Braille displays** (40-80 cells) give random-access reading that speech cannot. | Support braille-friendly output — raw transcript mode, exact character echo. |
| The biggest pain is **reviewing changes**, not writing code. | Accessible diff narration is the single highest-impact feature to build. |
| Streaming token-by-token output is a **nightmare** for screen readers (NVDA, JAWS, VoiceOver). | Batch output. Deliver complete responses, not live streams. |
| Full-screen TUI redraws are **hostile** to screen readers. Line rewrites are interpreted as fresh content. | Append-only output. Never repaint previous lines. |
| **Sonification** (the Jenkins-to-Zelda-sounds story) provides ambient awareness without active attention. | Audio cues for AI state, test results, and error types. |
| **Emacspeak** (by T.V. Raman at Google) is the gold standard for blind-first coding tooling. | Study its design principles: speech as a first-class output modality, not bolted on. |

### The Fundamental Design Rule

All three AI models converge on the same principle:

> **Never make blind users consume visual state indirectly. Convert visual state into semantic state.**

Not: screenshots, animated spinners, floating diff widgets, "look at the preview."

Yes: landmarks, roles, labels, focus order, structured diffs, line numbers, symbol graphs, explicit task state.

---

## 3. The Unified Architecture

All three models agree: **don't build another IDE.** Build a **blind-first agent layer** that works on top of existing coding tools.

### The Three-Layer Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    LAYER 3: Tool Integrations                    │
│  AGENTS.md (Codex) │ CLAUDE.md │ GEMINI.md │ Cursor Rules       │
│  Prompt packs that instruct any AI agent to output blind-first   │
└───────────────┬──────────────┬──────────────┬───────────────────┘
                │              │              │
┌───────────────▼──────────────▼──────────────▼───────────────────┐
│                    LAYER 2: A11y MCP Server                      │
│  describe_repo() │ accessible_diff() │ browser_a11y_snapshot()   │
│  symbol_index()  │ run_tests_compact()│ ui_change_explainer()    │
│  error_navigator()│ narrate_task_state()│ focus_order_report()   │
└───────────────┬──────────────┬──────────────┬───────────────────┘
                │              │              │
┌───────────────▼──────────────▼──────────────▼───────────────────┐
│                  LAYER 1: Accessible CLI Shell                   │
│  Append-only output │ No ANSI junk │ No spinners │ No repaints  │
│  Batched delivery │ Event blocks │ Braille transcript mode       │
│  Sonification │ Screen reader auto-detection                     │
└─────────────────────────────────────────────────────────────────┘
```

This architecture means you build **one system** that improves Codex, Claude Code, Gemini CLI, and Cursor simultaneously, rather than four separate products.

---

## 4. The Six Core Capabilities

Ranked by impact, synthesized across all three model responses.

### 4.1 Accessible Diff Narrator (Highest Impact)

**The single biggest gap.** When an AI agent makes 15 changes across 4 files, a sighted person scans the diff visually in seconds. A blind person needs a structured, navigable summary.

**What it does:**

The tool produces layered summaries that the user drills into:

```
Level 1 — Overview:
  "3 files changed. 1 new file created."

Level 2 — Per-file summary:
  "auth.js: added function validateToken (18 lines), modified handleLogin.
   routes.js: added 1 import, added 1 route.
   NEW: middleware/jwt.js: 42 lines, exports verifyJWT."

Level 3 — Per-hunk detail:
  "In handleLogin: replaced the direct fetch() call on line 34 with
   a call to the new validateToken() function."

Level 4 — Raw diff (line numbers, inserted/deleted):
  Available on request for braille display users.
```

Each level is keyboard-navigable. Enter drills in, Escape goes up.

**Implementation:** Use tree-sitter to parse both before/after states, diff at the AST level (not line level), then use an LLM to generate the natural-language summary. Fall back to standard unified diff for non-parseable files.

### 4.2 AST-Level Code Navigation

Current screen readers read code **line by line**, which is like reading a book one word at a time. Code has *structure* — functions, blocks, conditionals, arguments.

**What it does:**

```
"You are in function handleSubmit.
 It has 3 blocks: a try (2 statements), a catch (1 statement), and a finally.
 Press Enter to drill in, Escape to go up, Tab to move to next sibling."
```

**Implementation:** Use tree-sitter to build the AST. Expose navigation as a set of MCP tools:

- `describe_symbol(name)` — signature, callers, callees, files involved
- `symbol_index(file)` — all symbols in a file, hierarchically
- `repo_outline()` — project tree, key packages, entrypoints, build/test commands

**Why this matters:** Blind developers already think in ASTs. This tool matches their mental model instead of fighting it.

### 4.3 Append-Only Accessible Shell

The most actionable infrastructure change. Full-screen TUIs (used by Codex CLI, Claude Code) mutate lines in place. Screen readers interpret every repaint as new content, creating an incomprehensible audio storm.

**The shell must:**

- Stream only **new appended lines**
- Never repaint previous lines
- Disable spinners, progress bars, ANSI formatting, elapsed timers
- Emit clean **event blocks**: `PLAN`, `READING`, `EDITING`, `RUNNING TESTS`, `RESULT`
- Support "announce only complete sentences/paragraphs"
- Expose a **raw transcript mode** for braille displays
- Halt streaming and deliver only when generation is 100% complete (toggle)

**Reference implementation:** Gemini CLI already has `ui.accessibility.screenReader`, `ui.showSpinner`, `ui.loadingPhrases`, and `ui.useAlternateBuffer` config options. This is the right shape — but it needs to go further.

### 4.4 Browser/UI Narrator for Frontend Work

Frontend development is hard for blind engineers mainly because current tools over-index on screenshots and visual previews. But DOM structure, the accessibility tree, and focus order contain all the information needed to verify a UI.

**After every UI change, the agent produces:**

```
Page summary: 1 banner, 1 nav, 1 main, 1 footer.
Main contains H1 "Pricing", 3 H2 sections, 2 unlabeled buttons, 1 dialog trigger.

Focus order issue: keyboard focus skips from nav to footer.
Form issue: email field has placeholder but no programmatic label.
Contrast failure: H2 "Enterprise" — 2.8:1 ratio (needs 4.5:1).
```

**MCP tools to expose:**

| Tool | What It Reports |
|---|---|
| `browser_a11y_snapshot(url)` | Landmarks, headings, buttons/links, forms, dialogs, current focus, tab order issues, missing labels/roles |
| `focus_order_report(url)` | Keyboard navigation sequence, trap detection |
| `form_controls_report(url)` | Labels, validation, required fields, error announcements |
| `ui_change_explainer(before, after)` | "What changed for a screen-reader user" |

**This is vastly more useful than "here's a screenshot."** It lets a blind engineer build and verify frontend applications with the same confidence a sighted developer gets from a browser preview.

### 4.5 Sonification (Ambient Audio Feedback)

Borrowed from the HN thread's Jenkins-to-Zelda-sounds setup. Assign distinct, non-intrusive audio cues to AI and development states:

| Event | Sound |
|---|---|
| AI is thinking | Subtle ambient hum |
| Code generation in progress | Gentle rhythmic tick |
| Build/tests passed | Success chime |
| Build/tests failed | Distinct error tone |
| New file created | Soft rising note |
| File modified | Neutral click |
| File deleted | Low descending note |
| Syntax error detected | Sharp clank |

**Why this works:** Sound doesn't require active attention. It fades into the background when not needed, but patterns stand out immediately. One HN commenter described debugging by "counting the clanks" — two clanks on this page, one clank on that page, there's the bug.

### 4.6 Agentic Error Handling

Instead of dumping a raw 50-line stack trace into the terminal, deploy a background agent to catch the error, parse it, and deliver a structured summary:

```
Error: NullPointerException in auth.js line 22.
Root cause: user.token is undefined — the token was not set after the OAuth callback.
Likely fix site: auth.js line 18, the setToken() call.
Related test: test/auth.test.js line 45 (currently failing).
```

**MCP tools:**

- `run_tests_compact()` — collapse noisy logs, surface only failing suites, assertions, stack frames, likely fix sites
- `error_navigator()` — parse error output, summarize root cause, suggest fix location
- `dependency_change_summary()` — after package updates, summarize what changed and what might break

---

## 5. How to Improve Each Existing Tool

### Claude Code

**Current state:** Terminal-based (good), but uses ANSI formatting, spinners, and screen repaints that break screen readers. An open GitHub issue (#11002) requests a `--screen-reader` mode.

**What to add:**
- `--screen-reader` / `--accessibility` flag
- Append-only mode (never repaint previous lines)
- "Announce only complete lines" mode
- Accessible diff view (structured, not raw +/- lines)
- JSON event stream mode for external tool consumption
- Auto-detect screen readers on Windows/macOS/Linux
- Project-wide `CLAUDE.md` already works — ship a blind-first instruction pack today

### Gemini CLI

**Current state:** Closest to the right shape. Already has `ui.accessibility.screenReader`, spinner toggles, and loading phrase config. But NVDA users still report trouble with the input field.

**What to add:**
- Rock-solid editable input field for NVDA/JAWS/VoiceOver
- Braille-friendly exact character echo
- "Speak on sentence boundaries only" mode
- Default to accessibility mode when a screen reader is detected
- Fix the input field interactivity bugs reported by NVDA users

### Codex CLI

**Current state:** Full-screen terminal UI. Screen redraws and spinners confuse NVDA. Strong project-instruction and skill mechanisms make it a good candidate for an accessibility wrapper.

**What to add:**
- `codex --screen-reader` / `codex --plain-transcript`
- Disable spinner, elapsed timer, in-place updates
- Accessible review mode that reads patches file-by-file
- Dedicated "summarize current task state" hotkey
- Ship as an AGENTS.md skill pack for immediate use

### Cursor IDE

**Current state:** Built on VS Code, which has mature accessibility (screen reader mode, Accessible View, Accessible Diff Viewer, terminal accessibility). But Cursor's custom AI dialogs (Ctrl+K, Composer, Chat) break screen reader compatibility.

**What to add:**
- All AI prompt boxes must be standard accessible text inputs
- Every AI result must open in Accessible View
- File edits must be reviewable in Accessible Diff Viewer format
- Agent steps should appear as keyboard-navigable task list items
- No custom canvas/chat surfaces unless they are fully ARIA-correct
- Every AI action must have a dedicated, remappable hotkey
- No mouse-dependent pop-ups or floating action buttons

---

## 6. The Blind-First Prompt Pack

Ship a ready-made instruction file for every ecosystem. This is immediately useful, costs nothing, and improves the experience before any native product fixes land.

**Files to ship:**
- `AGENTS.md` for Codex
- `CLAUDE.md` for Claude Code
- `GEMINI.md` for Gemini CLI
- `.cursor/rules/blind-first.mdc` for Cursor

**Core instructions (shared across all):**

```markdown
# Blind-First Coding Workflow

- Always describe your plan before editing files.
- Prefer sequential, file-by-file edits over large multi-file rewrites.
- When showing changes, summarize them in plain text first, then provide
  exact file names and line numbers.
- Never rely on screenshots alone; describe UI using DOM structure,
  accessibility tree, landmarks, headings, labels, focus order, and roles.
- For frontend work, always run an accessibility audit and summarize:
  headings, landmarks, buttons/links, forms/labels, dialogs/focus handling,
  and keyboard navigation issues.
- When running tests, collapse noisy logs and surface only failing tests,
  root causes, and likely fix sites.
- Avoid spinner-like or rapidly changing textual output.
- Prefer append-only output and complete sentences.
- If a diff is large, present it file-by-file and ask before continuing.
- When describing code changes, use symbol names (function, class, variable)
  rather than just line numbers.
- Always announce the current operation phase: PLANNING, READING, EDITING,
  TESTING, DONE.
```

---

## 7. Sighted vs. Accessible Vibe Coding — Feature Comparison

| Capability | Sighted Vibe Coding | Accessible Vibe Coding |
|---|---|---|
| **Output delivery** | Token-by-token streaming | Batched output with summary prelude |
| **Code review** | Visual red/green inline diffs | Semantic LLM explanations → AST drill-down → raw diff |
| **State feedback** | Spinners and loading bars | Sonification + explicit event blocks |
| **Error triage** | Scanning raw stack traces | Agentic summarization of root cause + fix site |
| **UI verification** | Browser preview / screenshot | A11y tree snapshot + focus order + form audit |
| **Navigation** | Visual scanning + mouse | AST tree navigation + keyboard shortcuts |
| **Code structure** | Syntax highlighting + indentation | Symbol hierarchy + spoken/braille structure |
| **Multi-file changes** | Scroll through diff tabs | Layered summary: overview → file → hunk → line |

---

## 8. The Voice-First Coding Agent (Moonshot)

All three models mention this as the ultimate vision. Not voice-to-text-to-AI, but a **fully conversational coding agent** where the entire loop is audio:

```
Developer: "Add authentication to the Express app."

Agent works silently (sonification hum indicates activity).

Agent: "I've made changes to three files. Want me to walk you through
        the changes, or should I run the tests first?"

Developer: "Walk me through it."

Agent: "The main change is a new middleware in auth.js that checks for
        a JWT token in the Authorization header. I also added a route
        in routes.js and a new test file. The test file has 4 tests
        covering valid token, expired token, missing token, and
        malformed token cases."

Developer: "Run the tests."

Agent: "All 4 tests pass. The auth middleware is working. Should I
        commit these changes?"
```

This is "vibe coding" that actually works without sight. The vibe is **conversational flow**, not visual scanning.

---

## 9. Product Strategy

### Why an MCP Server Is the Smartest Path

Instead of building four separate integrations:

- **Codex** supports AGENTS.md, project config, and skills
- **Claude Code** supports CLAUDE.md, rules, and skills
- **Gemini CLI** supports GEMINI.md, skills, and explicit accessibility settings
- **Cursor** supports rules, hooks, and is built on VS Code

Build **one A11y MCP server** + **one prompt pack** + **one accessible CLI wrapper** that works across all of them.

### The MCP Server Tool Surface

| Tool | Purpose |
|---|---|
| `describe_repo()` | Project tree, key packages, entrypoints, build/test commands |
| `describe_symbol(name)` | Signature, callers, callees, files involved |
| `accessible_diff(base, head)` | Layered: by file → by hunk → by line, with symbol names |
| `run_tests_compact()` | Collapse noise, surface failures + root causes + fix sites |
| `error_navigator(error_output)` | Parse error, summarize cause, suggest fix location |
| `browser_a11y_snapshot(url)` | Landmarks, headings, forms, focus, tab order, missing labels |
| `focus_order_report(url)` | Keyboard navigation sequence and trap detection |
| `ui_change_explainer(before, after)` | What changed from a screen reader user's perspective |
| `narrate_task_state()` | Explicit state transitions instead of spinners |
| `dependency_change_summary()` | What changed after package updates |

---

## 10. MVP Build Plan

### Phase 1: Immediate (Week 1-2) — Prompt Packs + CLI Wrapper

**Zero infrastructure required.** Ship today.

1. Write and publish the blind-first prompt pack (AGENTS.md, CLAUDE.md, GEMINI.md, Cursor rules)
2. Build a thin CLI wrapper that forces append-only output from any underlying tool
3. Disable ANSI escape codes, spinners, progress bars
4. Add "generation complete" audio notification

### Phase 2: Core MCP Server (Week 3-6)

Build the MCP server with the three highest-impact tools:

1. `accessible_diff()` — AST-aware diff narration using tree-sitter
2. `describe_repo()` / `describe_symbol()` — structured code navigation
3. `run_tests_compact()` — error summarization

### Phase 3: Frontend Narrator (Week 7-10)

Add browser/UI tools:

1. `browser_a11y_snapshot()` — using Playwright's accessibility tree API
2. `ui_change_explainer()` — before/after comparison
3. `focus_order_report()` — keyboard navigation audit

### Phase 4: Sonification + Voice (Week 11+)

1. Audio cue system for development events
2. Voice-first conversational interface prototype
3. Braille display optimization (raw transcript, exact echo)

---

## 11. Key Technical Decisions

| Decision | Recommendation | Rationale |
|---|---|---|
| AST parsing | **tree-sitter** | Multi-language, fast, well-maintained, mentioned by HN community |
| Diff engine | AST-level (tree-sitter), fall back to unified | Symbol-aware diffs are more meaningful than line diffs |
| Browser automation | **Playwright** | Built-in accessibility tree API, headless support |
| MCP protocol | **Model Context Protocol** | Works across Codex, Claude Code, Gemini CLI, Cursor |
| CLI framework | **ink (React for CLIs)** or raw Node.js | Append-only rendering is easier to enforce |
| Audio/sonification | **Web Audio API** or system beeps | Low latency, no external dependencies |
| Screen reader detection | OS-level APIs | Windows: detect NVDA/JAWS process; macOS: VoiceOver status; Linux: Orca/BRLTTY |

---

## 12. The Market

The market is small but **deeply underserved**. More importantly:

- **Accessibility compliance** for AI dev tools is likely to become a legal requirement as these tools become standard workplace infrastructure.
- Major tech companies (Google, Microsoft, Apple, Amazon) all employ blind engineers and have internal accessibility mandates.
- The **prompt pack alone** is a zero-cost entry point that builds community and trust.
- An MCP server that works across all major AI coding tools has **no direct competitor** today.

The community on HN was clear: blind engineers don't need charity — they need tools that match their workflow instead of fighting it. The ones who build those tools first will own this space.

---

*This document synthesizes perspectives from Claude (Anthropic), Gemini (Google), and GPT-4o (OpenAI), grounded in real-world insights from 473 comments by blind and low-vision engineers on Hacker News.*
