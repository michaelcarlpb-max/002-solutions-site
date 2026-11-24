---
title: "The AI policy your team will actually follow"
description: "Most AI policies read like legal disclaimers. Here's how to write one people will use."
pubDate: 2026-11-24
tags: ["ai", "small-business", "process", "consulting"]
draft: true
---

Most AI acceptable-use policies are written to protect the company from the employees. That's the wrong starting point for a small team.

You're not trying to prevent malice. You're trying to prevent accidents from people who are genuinely trying to do their jobs faster. The policy should make the safe path the easy path, not erect a permission structure that everyone routes around.

Here's what works in practice.

## Start with what people are already doing

Before you write anything, spend two days asking your team what they're actually using AI for right now. Not what you think they should be using it for. What they are using it for.

You'll get answers like: drafting emails, debugging code, summarizing meeting transcripts, writing product descriptions, generating test data, explaining error messages. Good. Write those down.

Then ask: "What would you like to use it for but haven't tried yet?" Write those down too.

Now you have the real policy scope. If your team isn't touching customer PII, your policy doesn't need three paragraphs about data classification frameworks. If nobody's using AI to write client-facing deliverables, you don't need an approval chain for that.

Write the policy for the actual risks you have, not the theoretical ones you read about in a Gartner report.

## The two-rule version that covers 90% of cases

Here's the simplest usable policy, verbatim:

**Rule 1:** Don't put customer data, proprietary code, or confidential information into public AI tools (ChatGPT free tier, Claude web, Gemini, etc.). If you need AI to work with that stuff, ask first.

**Rule 2:** If AI generates something that goes to a client or gets shipped to users, a human reviews it. No auto-send, no copy-paste-submit.

That's it. Everything else is detail.

Most teams can ship this version in a Slack announcement and be 90% covered. If you're in healthcare or finance or you're handling GDPR data at scale, you'll need more. But a ten-person software shop? Start here.

## When you need the longer version

The longer version adds three sections:

**Approved tools.** A short list of tools the company pays for and why they're different from the free ones. Example: "We have a ChatGPT Team account. Data sent there isn't used for training. Use that instead of the free version when you need to work with internal code or customer info."

This is also where you name any tools you've explicitly decided *not* to use, and why. "We don't use tool X because it stores prompts on servers we don't control" is clearer than a vague "use approved tools only" that leaves people guessing.

**Common scenarios.** A list of real examples drawn from your team's actual work, with a yes/no call on each. "Using AI to draft internal documentation: yes. Using AI to generate a blog post for our site: yes, but someone edits it. Using AI to respond to a support ticket: no, unless you write the reply yourself after reviewing what it suggested."

Concrete scenarios are the difference between a policy people read once and forget, and a policy people actually reference.

**Who to ask.** One name, one email address, or one Slack channel. Not "contact your manager or the IT team or compliance." Just: "If you're unsure, ask Jane." Small teams do not need a committee structure for this.

## What to leave out

Do not include:

- **A preamble about how AI is transforming the workplace.** Nobody cares. Get to the rules.
- **A definition of "artificial intelligence."** If someone's confused about what counts as AI, they'll ask. If they won't ask, the definition won't help.
- **A prohibition on using AI at all.** You will lose. People are already using it. Your job is to make the safe uses obvious, not to pretend you can ban the technology.
- **A training requirement.** If your policy is short and clear, you don't need mandatory training. If it's long and legalistic, training won't save it.

## Enforcement is "hey, don't do that"

The enforcement model for a small team is not progressive discipline. It's: someone does something risky, you notice, you say "hey, don't do that," and they stop. If they don't stop, you have a different problem than policy language will solve.

Do not write your policy like you're legislating for bad actors. You're writing for good people who might not think through every edge case of a new tool. Treat them accordingly.

## The annual review trap

You do not need to "review this policy quarterly" unless you work in a regulated industry that requires it. Set a calendar reminder for twelve months out. If something breaks before then, update the policy. Otherwise, let it sit.

Policies that change every quarter train people to ignore policies.

## When you actually need help

If you're a 50-person company touching HIPAA data, or you're writing this for a due-diligence checklist because you're raising a Series A, or you're in fintech and your auditors are asking questions — yeah, you need more than two rules in a Slack message.

That's when it makes sense to bring in someone who does [this kind of advisory work](/services/advisory/) for a living. Not to write a policy from scratch, but to pressure-test the one you drafted against the specifics of your industry and surface the gaps you wouldn't have thought of.

But most small teams are not there yet. Most small teams just need someone to say out loud what the rules are, so people stop wondering whether they're allowed to use the tool that's obviously making them faster.

Write that version first. You can always make it longer later.
