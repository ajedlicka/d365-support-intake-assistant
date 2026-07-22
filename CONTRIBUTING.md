# Contributing

This is a small, prompt-only tool. The whole product is
[INTAKE-PROMPT.md](INTAKE-PROMPT.md); everything else is packaging.

## The one rule

**Changes to the intake flow live in INTAKE-PROMPT.md — nowhere else.** The examples in
`examples/` are validation fixtures and tone references. When you change the prompt, re-check
the examples still reflect how it behaves, and update them if they drift.

## If you're tuning the flow

- **Tone** ships as three client-selectable settings (Tight / Balanced / Warm), defined in the
  "TONE SETTING" section and applied in "HOW YOU TALK". Balanced is the default. See
  [examples/defect-interactive.md](examples/defect-interactive.md) (Tight) and
  [examples/defect-interactive-warmer.md](examples/defect-interactive-warmer.md) (Warm) for the
  two ends of the range. When editing tone, keep the "constant in every tone" list intact —
  only the per-tone phrasing should differ.
- **Classification** is the highest-risk area — the config-vs-defect split especially. If you
  touch it, test it against the config example, which is written to catch that failure mode.
- **The output template is a contract with the consultants** who read it. Keep the section
  headers and their order stable; consultants scan by shape. Change the DETAILS body freely.

## Testing a change

There's no build. To test: paste the edited INTAKE-PROMPT.md into a fresh chat in a couple of
different AI assistants, run each lane's scenario, and confirm the summary still fills in
cleanly and the stopping rules still fire. The `examples/` transcripts are your reference for
"correct."

## The website (`docs/` → GitHub Pages)

`docs/index.html` is the client-facing front door, served by GitHub Pages from the `docs/`
folder. It is **self-contained** — inline CSS/JS, no external requests, no analytics — so it
also works if a client saves it and opens it offline.

The full prompt is **inlined** into that page so the "Copy prompt" button copies it exactly.
That inline copy is generated, not hand-edited:

> **When `INTAKE-PROMPT.md` changes, regenerate the page:**
> ```
> node docs/build.js
> ```
> Then bump the **"Last updated"** date in the footer of `docs/index.html`.

`docs/build.js` reads `INTAKE-PROMPT.md`, HTML-escapes it, and rewrites everything between the
`<!-- PROMPT:START -->` / `<!-- PROMPT:END -->` markers. It has zero dependencies (Node only).
`docs/.nojekyll` tells GitHub Pages to serve the folder as-is without Jekyll processing.

The page is branded simply as "D365 Managed Services" (header wordmark and footer). The contact
path is intentionally "reach out to your account manager" — swap in a real support address only
if you want one on a public page.

## Scope

Phase 1 is deliberately prompt-only — no hosting, no integrations, no per-client config. Keep
the prompt free of anything that assumes infrastructure, so those stay easy to add later
without reworking the flow.
