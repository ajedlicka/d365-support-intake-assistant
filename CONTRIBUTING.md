# Contributing

This is a small, prompt-only tool. The whole product is
[INTAKE-PROMPT.md](INTAKE-PROMPT.md); everything else is packaging.

## The one rule

**Changes to the intake flow live in INTAKE-PROMPT.md — nowhere else.** The examples in
`examples/` are validation fixtures and tone references. When you change the prompt, re-check
the examples still reflect how it behaves, and update them if they drift.

## If you're tuning the flow

- **Tone** is controlled by the "HOW YOU TALK" section. See
  [examples/defect-interactive.md](examples/defect-interactive.md) (tight baseline) and
  [examples/defect-interactive-warmer.md](examples/defect-interactive-warmer.md) (warmer
  variant) for the two ends of the range.
- **Classification** is the highest-risk area — the config-vs-defect split especially. If you
  touch it, test it against the config example, which is written to catch that failure mode.
- **The output template is a contract with the consultants** who read it. Keep the section
  headers and their order stable; consultants scan by shape. Change the DETAILS body freely.

## Testing a change

There's no build. To test: paste the edited INTAKE-PROMPT.md into a fresh chat in a couple of
different AI assistants, run each lane's scenario, and confirm the summary still fills in
cleanly and the stopping rules still fire. The `examples/` transcripts are your reference for
"correct."

## Scope

Phase 1 is deliberately prompt-only — no hosting, no integrations, no per-client config. Keep
the prompt free of anything that assumes infrastructure, so those stay easy to add later
without reworking the flow.
