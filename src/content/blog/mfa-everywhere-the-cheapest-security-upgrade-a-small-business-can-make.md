---
title: "Turn on MFA everywhere. Today."
description: "Most breaches start with a stolen password. Multi-factor authentication stops almost all of them. Here's how to actually roll it out."
pubDate: 2026-11-02
tags: ["security", "small-business", "it"]
draft: true
---

Someone on your team reused a password. It got leaked in a breach you'll never hear about. Now someone in another country has full access to your email, your accounting software, and your customer database.

This is the most common way small businesses get compromised, and the fix costs nothing: turn on multi-factor authentication everywhere it's available.

Not "eventually." Not "for the sensitive accounts." Everywhere. Today.

## Why this matters more than any other security thing

I've seen companies spend thousands hardening their network perimeter while leaving Office 365 wide open to anyone with a stolen password. The math is backwards.

Multi-factor authentication — a second verification step after the password, usually via an authenticator app or a hardware key — blocks over 99% of automated credential attacks. Microsoft's published numbers say 99.9%. Even if you assume they're overselling by half, it's still the single highest-leverage security control available.

The reason it works: attackers have industrial-scale tooling for password theft. They don't have industrial-scale tooling for intercepting your one-time codes. The economics shift entirely.

## Where to start

Three tiers, in order:

**Tier 1: Email and financial systems.** If you do nothing else, turn on MFA for:
- Your primary email provider (Google Workspace, Microsoft 365, etc.)
- Your bank accounts
- Your payroll and accounting systems (QuickBooks, Gusto, etc.)
- Any system that can initiate payments

These are the accounts an attacker will use to steal money or lock you out of everything else.

**Tier 2: Customer-facing and internal tools.** Once tier 1 is locked down:
- Your CRM (Salesforce, HubSpot, etc.)
- Your admin panels for any customer-facing systems
- Your code repositories if you write software
- Your cloud infrastructure consoles (AWS, Azure, etc.)

These are the accounts an attacker will use to steal customer data or ransom your business.

**Tier 3: Everything else.** Any SaaS tool where a compromised account would cause a bad day. Slack. Notion. Your project management system. If someone unauthorized got in, would it be a problem? Then turn on MFA.

## How to actually roll this out without a rebellion

The biggest pushback I hear: "Our team will hate this."

They won't. Not if you do two things right.

First, use authenticator apps, not SMS. SMS codes work, but they're slower and more annoying. A good authenticator app (Authy, Microsoft Authenticator, Google Authenticator — pick one and standardize on it) generates codes instantly. The user experience is: open app, tap code, paste. Takes three seconds.

Second, set up the rollout in waves over a week, not all at once on Monday morning. Monday: email and financial. Wednesday: internal tools. Friday: everything else. Give people time to get used to the pattern before adding the next layer.

Most resistance evaporates once people realize the actual workflow is "tap, paste, done" instead of "wait for a text, hope it arrives, retype the code before it expires."

## The one argument against MFA that's actually real

The legitimate concern: what happens if someone loses their phone?

This is solvable. Every MFA system has backup codes — one-time-use passwords you generate once and store somewhere safe. Print them. Put them in a password manager. Lock them in a drawer. Just don't skip generating them.

For a small team, I usually recommend: each person generates backup codes for their critical accounts, stores them in the company password manager, and the business owner has access to those entries. If someone's phone dies or gets stolen, you're not locked out.

This is the part of [IT consulting work](/services/it-consulting/) that no one thinks is glamorous but that prevents actual disasters: making sure the disaster recovery path exists before you need it.

## What you should do this week

Pick your email system. Turn on MFA for every account. Don't wait for buy-in. Don't send a survey. Just do it.

The pushback you're worried about is imaginary. The breach you're preventing is not.

If you want help auditing what's actually exposed and where your gaps are, that's a [two-hour engagement](/services/it-consulting/). But you don't need me to turn on MFA for Office 365. You just need to stop putting it off.
