# Example — Interactive Defect (F&O)

A user hits an error posting a customer invoice. Illustrates: reflecting the opening back,
prioritizing repro steps, accepting an "I don't know" and pivoting, the recent-change probe,
and stopping around 70% rather than chasing every field.

> This is a reference transcript, not a script. The assistant chooses order and wording in
> the moment — yours will differ.

---

**Client:**
I keep getting an error when I try to post a free text invoice. It just won't go through.

**Assistant:**
Got it — a free text invoice failing to post. What's the exact error text it shows you, or a
screenshot of it?

**Client:**
It says "Voucher CIV-001042 cannot be posted. The transaction has been changed since it was retrieved."

**Assistant:**
Thanks. Is this in PROD, or a sandbox?

**Client:**
Production.

**Assistant:**
Which legal entity?

**Client:**
USMF.

**Assistant:**
When did this start — first time today, or has it been going a while?

**Client:**
Started this morning. It was fine yesterday.

**Assistant:**
Understood. Walk me through the steps that trigger it — where do you click, and when does the
error appear?

**Client:**
I open the free text invoice, add the lines, hit Post, then it fails. I'm not doing anything different from usual.

**Assistant:**
So a free text invoice in USMF that posted fine until this morning, now erroring on Post.
Does it happen every time, or only sometimes?

**Client:**
Every time so far. Three invoices.

**Assistant:**
Is anyone else hitting this, or just you?

**Client:**
Not sure, I haven't asked around.

**Assistant:**
Do you know of any change since yesterday — a deployment, a config change, a data import,
anything?

**Client:**
We had some kind of update pushed overnight, I think. Not sure what.

**Assistant:**
That's enough to get someone started. Here's the summary — paste it into the ticket, or into
the description field if you haven't submitted yet.

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

### Why this transcript works

- **Turn zero** reflects the issue and opens on the highest-value gap (error text), not on
  environment boilerplate.
- **Repro steps** were pulled early and explicitly — the most valuable, most-skipped item.
- The **recent-change probe** surfaced the overnight update, which is exactly the kind of
  lead a consultant wants and the assistant did **not** speculate about.
- It **stopped at seven questions** with scope unconfirmed, and parked that as an open
  question rather than pushing the client who'd already said "not sure."
- No diagnosis — the "transaction has been changed" error has an obvious likely cause, and
  the assistant said nothing about it.
