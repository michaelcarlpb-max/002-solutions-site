---
title: "Most small teams are using SSO wrong"
description: "Single sign-on sounds like security hygiene, but for a 12-person company it's often just expensive complexity. Here's what you actually need."
pubDate: 2026-11-16
tags: [security, it, small-business, tools]
draft: true
---

A founder reached out last month asking whether he should move his 15-person company to Okta. His reasoning: "We have too many passwords floating around. SSO would fix that, right?"

No. SSO would add an identity provider, an annual contract, and three new ways things could break. What he needed was a password manager and ten minutes to audit which services his team actually used.

This confusion is everywhere. Small teams see "single sign-on" on every SaaS landing page and assume that's the grown-up thing to do. Sometimes it is. Usually it isn't.

## SSO solves a specific problem you might not have

Single sign-on makes sense when:

- **You have 50+ people** and onboarding/offboarding takes half a day because someone has to click through 30 different admin panels
- **You're in a regulated industry** where audit logs and centralized access control aren't optional
- **You already have an identity provider** (Active Directory, Google Workspace at scale) and SSO is just wiring, not a whole new system

For a 10-person team where everyone's using their work Gmail and you can count your critical services on two hands? SSO is expense and complexity pretending to be security. You're paying $8–15 per user per month for Okta or OneLogin, plus the SSO tax most SaaS vendors charge (often 2–3x their base tier), to solve a problem you could handle with a shared 1Password vault and a spreadsheet.

The real problem small teams have isn't authentication. It's visibility. You don't know who has access to what, and when someone leaves you panic-disable accounts for a week. A password manager doesn't fix that by itself, but neither does SSO.

## What a password manager actually does

1Password or Bitwarden for Teams costs $8–10/user/year. For that you get:

- **Centralized credential storage** — everyone's using strong unique passwords, not variations on the company name
- **Shared vaults** — the three people who need Stripe access have it; the other twelve don't
- **Offboarding clarity** — when someone leaves, you remove them from the password manager and you know exactly which credentials to rotate

This covers 80% of what small teams think they need SSO for, at 5% of the cost and none of the integration work. The [security baseline most small businesses need](/services/it-consulting/) is surprisingly boring: strong passwords, MFA everywhere it's offered, and someone who knows what accounts exist.

The thing password managers *don't* do is enforce company-wide policies. If your team can still log in with "Password123" because they're not using the manager, you haven't solved anything. That's a process problem, not a tool problem. SSO doesn't fix it either — it just moves the failure point.

## When SSO makes sense anyway

If you're at 30+ people and burning an hour a week on access management, SSO starts to pay for itself. If you're hiring a head of IT or security and they want centralized logs and policies, SSO gives them the control plane they need. If half your critical tools already support SAML and your team is on Google Workspace Enterprise, the incremental cost is small.

But if you're a 12-person company and "SSO" is on a checklist someone handed you, don't do it yet. Get a password manager. Turn on MFA. Write down which services you're actually using and who has admin access. When that breaks down — when it's genuinely hard to manage — you'll know, and SSO will make sense.

The mistake is assuming that because big companies do something, small companies should do a small version of it. Sometimes the right move is structurally different. This is one of those times.

## What to do Monday morning

Three things, all of which take less than an hour:

1. **Pick a password manager and get everyone on it.** 1Password for Teams or Bitwarden for Teams. Don't overthink it.
2. **Make a list of every service the company pays for.** Spreadsheet, three columns: service name, who has admin access, whether it has MFA turned on.
3. **Turn on MFA everywhere you can.** Start with email, banking, and anything that touches customer data.

If you do those three things you've solved the actual problem. SSO is an option later if the shape of the problem changes. Right now it's just a distraction with a recurring invoice.
