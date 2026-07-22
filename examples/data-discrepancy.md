# Example — Data Discrepancy (Commerce modifier)

A store's daily sales total in a report doesn't match the POS. Illustrates the
data-discrepancy checklist (value seen vs. expected, record IDs, where it shows, was it ever
correct, reconciles elsewhere) plus the **Commerce modifier** (store/channel, register,
last sync / P-job), and an early stop when the client signals impatience.

> Reference transcript, not a script.

---

**Client:**
The sales total for our downtown store in the report doesn't match what the registers actually took yesterday. It's off.

**Assistant:**
The downtown store's reported sales total doesn't match the registers for yesterday. What
figure does the report show, and what should it be?

**Client:**
Report says $18,240. The registers totalled $19,600 — so it's about $1,360 short.

**Assistant:**
Thanks. Where are you seeing the $18,240 — which report or inquiry?

**Client:**
The Store sales report in F&O.

**Assistant:**
Which store or channel is this?

**Client:**
Downtown — channel code DT-01.

**Assistant:**
Was this store's total ever correct in the report, or has it been off for a while?

**Client:**
It's been fine every other day. Just yesterday looks wrong.

**Assistant:**
So DT-01 reconciled fine until yesterday, now $1,360 short in the Store sales report. Is the
gap coming from one register, or across several?

**Client:**
Not sure, I'd have to dig. Honestly can you just submit it and someone can look?

**Assistant:**
That's enough to get someone started. Here's the summary — paste it into the ticket, or into
the description field if you haven't submitted yet.

```
==================================================
D365 SUPPORT TICKET — INTAKE SUMMARY
Prepared with the intake assistant. Reviewed by client before submission.
==================================================

PROBLEM STATEMENT
Downtown store (DT-01) reported sales for yesterday are ~$1,360 short of register totals.

TYPE: Data discrepancy
PRODUCT: Commerce

--------------------------------------------------
ENVIRONMENT & SCOPE
- Environment:      NOT CAPTURED
- Legal entity:     NOT CAPTURED
- When it started:  Yesterday's figures; prior days reconciled correctly
- New or ongoing:   New (one day so far)
- Who is affected:  Downtown store DT-01

--------------------------------------------------
DETAILS
- Value seen: $18,240 (Store sales report, F&O)
- Value expected: $19,600 (register totals) — variance ~$1,360 short
- Where shown: Store sales report in F&O
- Ever correct: Yes — reconciled every prior day; only yesterday is off
- Store / channel: Downtown, channel DT-01
- Register scope: Unknown — one vs. several registers [CLIENT UNSURE]
- Last successful sync / P-job status: NOT CAPTURED

--------------------------------------------------
RECENT CHANGES / CONTEXT
- NOT CAPTURED (client asked to submit)

--------------------------------------------------
OPEN QUESTIONS FOR CONSULTANT
- Environment and legal entity for DT-01.
- Status of the P-job / last successful sync for yesterday's trading day.
- Whether the variance is isolated to one register.

==================================================
```

---

### Why this transcript works

- Ran the **data-discrepancy checklist**: seen vs. expected with a computed variance, where
  it shows, and whether it was ever correct — the questions that make a mismatch actionable.
- Layered the **Commerce modifier** (store/channel captured) and flagged the P-job / sync
  status as the key open question — that's where a consultant will look first, but the
  assistant only captured the gap, it didn't diagnose.
- **Stopped the moment the client said "can you just submit it"** — that's stopping rule #1.
  It didn't squeeze in environment or legal entity; it parked them as open questions instead.
- Two fields never got asked, so they read `NOT CAPTURED` (not "client unsure") — the
  consultant can tell these were skipped for time, not unknown to the client.
