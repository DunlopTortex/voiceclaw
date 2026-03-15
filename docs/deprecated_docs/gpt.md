Yes. The best thing to build is **not** another visual IDE. Build a **blind-first agent layer** that sits on top of existing coding agents and IDEs.

From the forum thread you pasted, the pattern is clear: blind engineers do well when the workflow is **keyboard-first, text-first, stable, semantic, and predictable**. They struggle when tools are visually rich, spatial, animated, or constantly rewriting the screen. So your product should make “vibe coding” feel like: **intent → plan → reviewable changes → spoken/braille-friendly verification**.

A quick reality check on the current tools: Gemini CLI already exposes a screen-reader-friendly mode plus toggles for spinner and loading behavior; VS Code already has mature screen reader mode, an Accessible View, an Accessible Diff Viewer, and terminal accessibility help. By contrast, Codex CLI is still documented primarily as a full-screen terminal UI, and recent user reports say its redraws and spinner behavior are hard to follow with NVDA. Claude Code is still terminal-centric too, and there is an open request asking Anthropic for a Gemini-style `--screen-reader` mode. Cursor inherits a lot from VS Code because it is based on the VS Code codebase, but users have still reported screen-reader problems in Cursor’s AI dialogs and editing flows. ([Gemini CLI][1])

So the opportunity is huge: **don’t replace the model, replace the interaction model**.

## What to build

Build an **Accessible Coding Agent Runtime** with three parts:

### 1. An append-only accessibility shell

This is the biggest win.

Instead of a full-screen TUI that mutates lines, your shell should:

* stream only **new appended lines**
* never repaint previous lines
* disable spinners, timers, ANSI junk, progress bars, and live-updating status rows
* emit clean event blocks like:

  * `PLAN`
  * `READING`
  * `EDITING`
  * `RUNNING TESTS`
  * `RESULT`
* support “speak only complete sentence / complete line / complete paragraph”
* expose a raw transcript mode for braille displays

This directly addresses the exact failure mode reported in Codex and Claude-style TUIs: screen readers interpret line rewrites as fresh content and become noisy or unusable. Gemini CLI’s own config shows the right direction already with `ui.accessibility.screenReader`, `ui.showSpinner`, `ui.loadingPhrases`, and `ui.useAlternateBuffer`. ([Gemini CLI][1])

### 2. A semantic coding assistant, not a visual one

Blind developers do not need “show me the diff nicely.” They need:

* “summarize the repo structure”
* “list the changed files”
* “read the symbols changed in file A”
* “jump to failing test”
* “explain the call flow from route to DB”
* “describe the UI semantically”

So your core tools should be:

* `repo_outline`
* `symbol_index`
* `accessible_diff`
* `error_navigator`
* `test_failure_explainer`
* `dependency_change_summary`
* `browser_a11y_snapshot`
* `focus_order_report`
* `form_controls_report`

Think of this as **AST + DOM + test results turned into spoken structure**.

### 3. A browser/UI narrator for frontend work

This is where you can really unlock “blind vibe coding apps.”

Frontend is hard mainly because current tools over-index on screenshots and visual previews. Your tool should let a blind engineer work from:

* the DOM
* the accessibility tree
* headings / landmarks / roles
* tab order
* form fields / labels / validation
* contrast failures
* button/link names
* alerts, dialogs, and focus traps

After every UI change, your agent should produce something like:

> Page summary: 1 banner, 1 nav, 1 main, 1 footer.
> Main contains H1 “Pricing”, 3 H2 sections, 2 unlabeled buttons, 1 dialog trigger.
> Focus order issue: keyboard focus skips from nav to footer.
> Form issue: email field has placeholder but no programmatic label.

That is vastly more useful than “here’s a screenshot.”

Cursor’s browser tooling already talks about controlling a browser, auditing accessibility, and converting designs into code, so there is a natural insertion point for this kind of semantic narrator. ([Cursor][2])

## The product strategy I’d recommend

The strongest path is:

**Build one blind-first MCP server / agent toolkit** that works with all of them.

Why this is smart:

* Codex supports `AGENTS.md`, project config, and skills. ([OpenAI Developers][3])
* Claude Code supports `CLAUDE.md`, rules, and skills. ([Claude][4])
* Gemini CLI supports `GEMINI.md`, skills, and explicit accessibility settings. ([Gemini CLI][5])
* Cursor supports rules and hooks, and is based on VS Code. ([Cursor][6])

So instead of building four separate products, build:

* one **A11y MCP server**
* one **prompt/rules pack**
* one **accessible CLI wrapper**
* optional editor integrations later

## What your MCP server should expose

Minimum useful toolset:

* `describe_repo()`

  * project tree
  * key packages
  * entrypoints
  * build/test commands

* `describe_symbol(symbol_name)`

  * signature
  * callers
  * callees
  * files involved

* `accessible_diff(base, head)`

  * summarize by file
  * then by hunk
  * then by inserted/deleted lines
  * include symbol names and line numbers

* `run_tests_compact()`

  * collapse noisy logs
  * surface only failing suites, failing assertions, stack frames, and likely fix sites

* `browser_a11y_snapshot(url)`

  * landmarks
  * headings
  * buttons/links
  * forms
  * dialogs
  * current focus
  * tab order issues
  * missing labels/roles

* `ui_change_explainer(before, after)`

  * “what changed for a screen-reader user”

* `narrate_task_state()`

  * explicit state transitions instead of spinners

That one server would make Codex, Claude Code, Gemini CLI, and Cursor much more usable even before the vendors fix their native UIs.

## How to improve each existing tool

### Claude Code

Claude Code should add a real `--screen-reader` or `--accessibility` mode. The request already exists and even lays out the right behavior: disable spinners and animations, use plain linear text, avoid ANSI-heavy formatting, and simplify streaming output. Claude also supports project-wide `CLAUDE.md`, which means you can already inject blind-first workflow instructions today. ([GitHub][7])

What I’d add:

* append-only mode
* “announce only complete lines”
* accessible diff view
* JSON event stream mode
* auto-detect screen readers on Windows/macOS/Linux

### Gemini CLI

Gemini is currently the closest to the right shape because it already has a screen-reader setting plus spinner/loading toggles. But Google’s own issue tracker shows that at least some NVDA users still had trouble reading and editing the input field, so configuration alone is not enough. ([Gemini CLI][1])

What I’d add:

* rock-solid editable input field for NVDA/JAWS/VoiceOver
* braille-friendly exact character echo
* “speak on sentence boundaries only”
* default accessibility mode when a screen reader is detected

### Codex CLI

Codex’s main issue is that the TUI interaction model is wrong for screen readers. Official docs still present it as a full-screen terminal UI, and recent issues specifically call out redraw churn and spinners confusing NVDA. Codex does have strong project-instruction and skill mechanisms, so it is a great candidate for an accessibility-first wrapper or skill pack. ([OpenAI Developers][8])

What I’d add:

* `codex --screen-reader`
* `codex --plain-transcript`
* disable spinner / elapsed timer / in-place updates
* accessible review mode that reads patches file-by-file
* dedicated “summarize current task state” hotkey

### Cursor IDE

Cursor should borrow much more aggressively from native VS Code accessibility patterns instead of building custom AI UI that breaks screen readers. VS Code already has screen reader mode, Accessible View, Accessible Diff Viewer, terminal accessibility help, and recent chat accessibility improvements. Cursor users have reported that AI dialogs such as Ctrl+K generate are not fully screen-reader accessible, even though Cursor sits on the VS Code base. ([Visual Studio Code][9])

What I’d add:

* all AI prompt boxes must be standard accessible text inputs
* every AI result must open in Accessible View
* file edits must be reviewable in Accessible Diff Viewer format
* agent steps should appear as keyboard-navigable task list items
* no custom canvas-like chat/composer surfaces unless they are fully ARIA-correct

## The blind-first prompt pack you should ship

Ship a ready-made instruction pack for all four ecosystems:

* `AGENTS.md` for Codex
* `CLAUDE.md` for Claude Code
* `GEMINI.md` for Gemini CLI
* Cursor rules

Core instructions should say:

```md
# Blind-first coding workflow

- Always describe your plan before editing files.
- Prefer sequential, file-by-file edits over large multi-file rewrites.
- When showing changes, summarize them in plain text first, then provide exact file names and line numbers.
- Never rely on screenshots alone; describe UI using DOM structure, accessibility tree, landmarks, headings, labels, focus order, and roles.
- For frontend work, always run an accessibility audit and summarize:
  - headings
  - landmarks
  - buttons/links
  - forms and labels
  - dialogs and focus handling
  - keyboard navigation issues
- When running tests, collapse noisy logs and surface only failing tests, root causes, and likely fix sites.
- Avoid spinner-like or rapidly changing textual output.
- Prefer append-only output and complete sentences.
- If a diff is large, present it file-by-file and ask before continuing.
```

This alone will improve the experience a lot, even before native product fixes land.

## The best MVP

If you want the fastest path to something useful:

Build this first:

**`blind-dev-mcp`**

* works with Codex / Claude Code / Gemini / Cursor
* exposes repo map, symbol map, accessible diff, compact test output, and browser accessibility snapshot
* ships with default instruction files for each ecosystem
* includes an optional terminal wrapper that forces append-only output

That is much more achievable than building a whole new IDE, and it solves the real bottleneck.

## The single most important design rule

**Never make blind users consume visual state indirectly. Convert visual state into semantic state.**

Not:

* screenshot
* animated spinner
* custom floating diff widget
* “look at the preview”

Yes:

* landmarks
* roles
* labels
* focus order
* structured diffs
* line numbers
* symbol graphs
* explicit task state

That is how you make “vibe coding” real for blind engineers.

If you want, I can turn this into a concrete MVP spec with:

1. the MCP tool schema,
2. a first `AGENTS.md` / `CLAUDE.md` / `GEMINI.md` pack,
3. and a 2-week build plan.

[1]: https://geminicli.com/docs/reference/configuration/ "Gemini CLI configuration | Gemini CLI"
[2]: https://cursor.com/docs/agent/tools/browser?utm_source=chatgpt.com "Browser | Cursor Docs"
[3]: https://developers.openai.com/codex/guides/agents-md/ "Custom instructions with AGENTS.md"
[4]: https://code.claude.com/docs/en/memory "How Claude remembers your project - Claude Code Docs"
[5]: https://geminicli.com/docs/cli/gemini-md/ "Provide context with GEMINI.md files | Gemini CLI"
[6]: https://cursor.com/docs/rules?utm_source=chatgpt.com "Rules | Cursor Docs"
[7]: https://github.com/anthropics/claude-code/issues/11002 "[FEATURE] Add a --screen-reader mode for better accessibility with NVDA and JAWS · Issue #11002 · anthropics/claude-code · GitHub"
[8]: https://developers.openai.com/codex/cli/features/ "Codex CLI features"
[9]: https://code.visualstudio.com/docs/configure/accessibility/accessibility "Accessibility"
