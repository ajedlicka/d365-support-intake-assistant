# Example — Interactive Defect, WARMER tone variant (F&O)

**This is a tone comparison, not a second lane.** It runs the *same* scenario as
[defect-interactive.md](defect-interactive.md) — a free text invoice failing to post — but in
a slightly warmer register. Read the two side by side to decide how clipped you want the flow
to feel before you commit the tone in INTAKE-PROMPT.md.

Everything structural is identical: same lane, same checklist, same stopping behavior, same
template. Only the phrasing of the assistant's turns changes.

> The tight baseline caps turns at ~40 words with three-word acknowledgments. This variant
> relaxes both slightly: brief acknowledgments become short human phrases, and turns run a
> little longer. It does **not** add enthusiasm ("Great question!") or praise — that line from
> the brief holds in both versions. Warmer, not chirpier.

---

**Client:**
I keep getting an error when I try to post a free text invoice. It just won't go through.

**Assistant:**
Sorry you're stuck on that — a free text invoice that won't post is a frustrating one. To get
someone on it quickly, what's the exact error text it shows you, or a screenshot of it?

**Client:**
It says "Voucher CIV-001042 cannot be posted. The transaction has been changed since it was retrieved."

**Assistant:**
That's helpful, thank you. And is this happening in PROD, or in one of the sandboxes?

**Client:**
Production.

**Assistant:**
Got it. Which legal entity are you working in?

**Client:**
USMF.

**Assistant:**
Thanks. When did this start — is today the first you've seen it, or has it been going on a while?

**Client:**
Started this morning. It was fine yesterday.

**Assistant:**
Okay, so brand new today. Would you mind walking me through the steps that lead to it — where
you click, and the point where the error pops up?

**Client:**
I open the free text invoice, add the lines, hit Post, then it fails. I'm not doing anything different from usual.

**Assistant:**
That makes sense — so a free text invoice in USMF that posted fine until this morning, now
failing right at Post. Is it every single time, or does it sometimes go through?

**Client:**
Every time so far. Three invoices.

**Assistant:**
Thanks for checking. Do you happen to know if anyone else is hitting this, or is it just you
so far?

**Client:**
Not sure, I haven't asked around.

**Assistant:**
No problem. Last one — do you know of anything that changed since yesterday? A deployment, a
config change, a data import, anything like that?

**Client:**
We had some kind of update pushed overnight, I think. Not sure what.

**Assistant:**
That's really useful to note. That's enough to get someone started — here's the summary. Paste
it into the ticket, or into the description field if you haven't submitted yet.

```
==================================================
D365 SUPPORT TICKET — INTAKE SUMMARY
Prepared with the intake assistant. Reviewed by client before submission.
==================================================

PROBLEM STATEMENT
Free text invoice fails on Post with "transaction has been changed since it was retrieved."

TYPE: Interactive defect
PRODUCT: F&O

--------------------------------------------------
ENVIRONMENT & SCOPE
- Environment:      PROD
- Legal entity:     USMF
- When it started:  This morning; worked fine yesterday
- New or ongoing:   New today
- Who is affected:  Reporting user; others not yet checked [CLIENT UNSURE]

--------------------------------------------------
DETAILS
- Error text: "Voucher CIV-001042 cannot be posted. The transaction has been changed since it was retrieved."
- Where: Free text invoice > Post
- Repro steps: Open free text invoice, add lines, click Post; error appears on post
- Frequency: Every time (3 of 3 invoices so far)
- Other users / legal entities: Not yet confirmed [CLIENT UNSURE]

--------------------------------------------------
RECENT CHANGES / CONTEXT
- Client reports an overnight update was pushed; specifics unknown

--------------------------------------------------
OPEN QUESTIONS FOR CONSULTANT
- Confirm scope: is this all users, or only this user?
- Identify the overnight change/deployment referenced by the client.

==================================================
```

---

### What changed vs. the tight baseline — and what didn't

**Changed (tone only):**
- Opened with a one-line acknowledgment of the frustration ("Sorry you're stuck on that")
  instead of going straight to the question.
- Acknowledgments are short human phrases ("That's helpful, thank you," "No problem") rather
  than clipped three-word tags.
- Turns run a little longer and soften the asks ("Would you mind walking me through…").

**Did NOT change (holds in both versions):**
- **No enthusiasm or praise** — no "Great question!", no gushing. The brief's no-enthusiasm
  rule survives; warmth here is empathy and courtesy, not cheerleading.
- **One question per turn**, never stacked.
- Same lane, same checklist order, same **stop at seven questions** with scope left open.
- **No diagnosis** — identical restraint on the "transaction has been changed" error.
- **Identical output template.**

### Trade-off to weigh

Warmer reads as more human and less like an interrogation, which is squarely the brief's
concern. The cost is length: each turn is a few seconds slower to read, and across 7–8 turns a
busy, annoyed client feels that. The tight baseline optimizes for "prove value fast and get
out"; the warmer variant optimizes for "don't feel like a bot."

**If you want a middle setting:** keep the warmer *opening* line (the empathy up front does the
most work for the "not an interrogation" goal) but revert the rest to the tight cadence. That's
a one-paragraph change to the "HOW YOU TALK" section of INTAKE-PROMPT.md — say the word and I'll
wire whichever setting you pick into the artifact itself.
