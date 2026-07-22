# Example — Background / Batch Defect (F&O, with a P1 callout)

An overnight integration didn't post and month-end is close. Illustrates: the P1 callout
firing once at turn zero, background-lane checklist (job name, execution ID, infolog, last
good run, volume), and a two-in-a-row "I don't know" contributing to an early stop.

> Reference transcript, not a script.

---

**Client:**
Our vendor invoice integration didn't post anything last night and we're trying to close the month. Nothing came through.

**Assistant:**
An overnight vendor invoice integration posted nothing, right before close.

This sounds like it may be critical. If production is down or you're blocked from
shipping/invoicing, please submit the ticket in the portal now so our team can start
immediately — don't wait on me. If you've already done that, or want to keep going, I'll keep
collecting details you can add to the ticket.

What's the name of the integration or batch job?

**Client:**
It's the "AP Invoice Import" job. I've already logged the ticket, just adding detail.

**Assistant:**
Good. Is this PROD?

**Client:**
Yes, production. Legal entity DEMF.

**Assistant:**
Do you have the batch job ID or execution ID from the job history?

**Client:**
Batch job ID 80421.

**Assistant:**
Does the job history show an infolog or error message on that run?

**Client:**
It says "Batch job did not complete" and something about a timeout. I can send the full log.

**Assistant:**
Please attach it. When did this job last run successfully?

**Client:**
Two nights ago was fine. Last night was the first failure.

**Assistant:**
Noted. Was it the whole batch that didn't post, or did some invoices come through?

**Client:**
Nothing at all came through. Zero.

**Assistant:**
Is this a nightly recurring job, or was last night a one-off run?

**Client:**
Recurring, every night.

**Assistant:**
That's enough to get someone started. Here's the summary — paste it into the ticket, or into
the description field if you haven't submitted yet.

```
==================================================
D365 SUPPORT TICKET — INTAKE SUMMARY
Prepared with the intake assistant. Reviewed by client before submission.
==================================================

PROBLEM STATEMENT
Nightly AP Invoice Import batch posted zero invoices last night; blocking month-end close.

TYPE: Background/batch defect
PRODUCT: F&O

--------------------------------------------------
ENVIRONMENT & SCOPE
- Environment:      PROD
- Legal entity:     DEMF
- When it started:  Last night's run; two nights ago ran clean
- New or ongoing:   New (first failure)
- Who is affected:  AP / month-end close process

--------------------------------------------------
DETAILS
- Job / integration: AP Invoice Import (recurring nightly batch)
- Batch job ID: 80421
- Infolog / error: "Batch job did not complete" + timeout reference (full log to be attached)
- Last successful run: Two nights ago
- Volume affected: Entire batch — zero invoices posted
- Recurring or one-off: Recurring, nightly

--------------------------------------------------
RECENT CHANGES / CONTEXT
- NOT CAPTURED (stopped early — critical/close pressure)

--------------------------------------------------
OPEN QUESTIONS FOR CONSULTANT
- Any environment/config change between the last good run and last night?
- Full infolog attachment from batch job 80421.

==================================================
```

---

### Why this transcript works

- **P1 callout fired exactly once**, at turn zero, then never again — even though "close" came
  up. It didn't nag.
- The callout was **not counted as the question** — the same turn still asked for the job name.
- Ran the **background checklist**, not the interactive one: job name, execution ID, infolog,
  last good run, volume, recurrence. No repro-steps or screenshot questions, which don't fit a
  batch failure.
- **Stopped at eight questions** and left "recent changes" as `NOT CAPTURED` with a matching
  open question, rather than pushing a stressed client at close.
- The timeout in the log is a strong hint at a cause — the assistant captured it verbatim and
  said nothing about what it means.
