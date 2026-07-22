# D365 Support Intake Assistant

A copy-paste helper that turns a vague support request into a clear one — before you open a
ticket. It asks you a few short questions about your Dynamics 365 issue and hands you back a
tidy summary you can drop straight into the support portal.

It runs inside whatever AI assistant you already use — Claude, ChatGPT, Copilot, or Gemini.
There's nothing to install and nothing to log in to.

---

## Who this is for

D365 key users and functional users who raise support tickets for **Finance & Operations,
Commerce, or the data warehouse**. You don't need to be technical. If you can describe your
problem in plain English, the assistant does the rest.

---

## Why use it

Most tickets arrive as a sentence or two — "batch job failed" or "can't post an invoice" —
with no environment, no legal entity, no error text, and no steps. The consultant then has to
come back and ask for all of it before real work can start. That round-trip costs you time
and delays the fix.

This tool front-loads those questions in about **3–4 minutes** so your first ticket is
already the useful one.

---

## How to use it

1. Open your AI assistant (Claude, ChatGPT, Copilot, or Gemini).
2. Copy everything in **[INTAKE-PROMPT.md](INTAKE-PROMPT.md)** and paste it into a new chat.
3. On the next line, describe your issue in a sentence or two — however you'd normally say it.
4. Answer the handful of questions it asks. "I don't know" is a fine answer to any of them.
5. When it gives you the summary, read it over, tweak anything that's off, and **paste it
   into the ticket description in the portal.**

That's the whole thing. If you use it often, **[SETUP.md](SETUP.md)** shows how to save the
instructions so you don't have to paste them every time — that's optional convenience only.

---

## What it does

- Works out what kind of issue you have and asks the questions that fit it
- Keeps it short — usually 6 to 10 questions, and it stops early if it has enough
- Never re-asks something you've already answered or said you don't know
- Gives you a clean, plain-text summary organized the way the support team likes to read it
- Clearly flags anything that wasn't covered, so the consultant knows what's still open

## What it does NOT do

- **It does not diagnose your issue and it does not suggest fixes.** It only gathers
  information. If you ask it what's wrong, it will tell you a consultant will take it from
  there. That's intentional — diagnosis is the consultant's job, and a good description is
  what lets them do it fast.
- **It does not submit anything.** It hands you text; you paste it into the portal yourself.
  Nothing is sent anywhere on your behalf.
- **It does not replace raising a ticket.** If your production system is down or you're
  blocked from shipping or invoicing, submit a ticket in the portal right away — don't wait
  to finish the questions.

---

## A note on privacy

Your conversation happens inside your own AI assistant. Paste in what you'd be comfortable
putting in a support ticket. Avoid pasting passwords or other credentials — the support team
never needs those.

---

*This tool is maintained by your D365 managed services team and updated over time. If you've
saved a copy, re-copy it now and then so you have the current version.*
