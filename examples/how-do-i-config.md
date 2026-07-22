# Example — How-do-I / Configuration (F&O)

A user wants to set something up and mentions "it won't let me" while exploring. Illustrates
the highest-stakes classification: this is **config, not a defect**, even though broken-ish
language appears. The assistant runs the short four-question config shape and stops — no
error text, no repro steps, no "who's affected."

> Reference transcript, not a script.

---

**Client:**
How do I set up a costing sheet? I tried but it won't let me activate it.

**Assistant:**
You're setting up a costing sheet and want it activated. In business terms, what are you
trying to get it to do — what should it calculate?

**Client:**
We want to add indirect costs — like a freight surcharge and an overhead percentage — onto our manufactured items.

**Assistant:**
Understood. How far have you gotten so far in the setup?

**Client:**
I created the cost groups and added nodes to the costing sheet, but the Activate button gives a validation message and stops.

**Assistant:**
Is this in PROD, or a sandbox?

**Client:**
A sandbox — our UAT environment. We're testing before we roll it out.

**Assistant:**
Is there a deadline or event driving this — a go-live or a testing milestone?

**Client:**
We want it configured before UAT sign-off next Friday.

**Assistant:**
That's enough to get someone started. Here's the summary — paste it into the ticket, or into
the description field if you haven't submitted yet.

```
==================================================
D365 SUPPORT TICKET — INTAKE SUMMARY
Prepared with the intake assistant. Reviewed by client before submission.
==================================================

PROBLEM STATEMENT
Guidance needed to configure and activate a costing sheet for indirect costs on manufactured items.

TYPE: How-to / configuration
PRODUCT: F&O

--------------------------------------------------
ENVIRONMENT & SCOPE
- Environment:      UAT sandbox
- Legal entity:     NOT CAPTURED
- When it started:  N/A (configuration request)
- New or ongoing:   N/A (configuration request)
- Who is affected:  N/A (configuration request)

--------------------------------------------------
DETAILS
- Business goal: Add indirect costs (freight surcharge + overhead percentage) to manufactured items via a costing sheet
- Progress so far: Cost groups created; costing sheet nodes added; Activate button returns a validation message and stops
- Deadline / driver: Wants it configured before UAT sign-off next Friday

--------------------------------------------------
RECENT CHANGES / CONTEXT
- N/A (configuration request)

--------------------------------------------------
OPEN QUESTIONS FOR CONSULTANT
- Which legal entity is being configured?

==================================================
```

---

### Why this transcript works

- **This is the make-or-break classification.** The user said "it won't let me activate it" —
  defect-sounding language — but the disambiguation test caught that they don't yet know *how*
  to do the setup. It ran the **config lane**, not a defect interrogation. Getting this wrong
  is what kills adoption.
- It **did not** ask for exact error text, repro steps, frequency, or who's affected — none of
  those fit a how-to question. Four questions, done.
- The validation message got captured as **progress context**, not chased as a "bug." The
  assistant offered no opinion on why Activate is failing — that's the consultant's call.
- Inapplicable scope fields are marked `N/A (configuration request)`, **not** with gap markers
  — so the consultant sees they were correctly skipped, not missed.
