---
title: "Hurricane season isn't when you test your backup"
description: "Most Tampa Bay businesses wait until June to think about disaster recovery. That's already too late for this year."
pubDate: 2026-09-28
tags: ["backup", "disaster-recovery", "infrastructure", "small-business"]
draft: true
---

The National Hurricane Center releases its Atlantic season forecast in May. By then, every Tampa business owner has already seen the "Are you prepared?" checklists from their insurance agent, the county emergency management office, and three different MSPs.

None of those checklists mention the actual problem: if you're reading a hurricane prep guide in May, you're not preparing for this hurricane season. You're scrambling.

Real preparation happened in February. What you're doing now is triage.

## What "prepared" actually looks like

A backup strategy that works during a hurricane has three qualities:

1. **Offsite replication that's already running.** Not "we have a plan to turn on cloud backup." Not "our NAS has a USB drive we take home sometimes." A system that's copying data out of the building every night, that you've verified within the last 60 days.

2. **A recovery runbook you've actually followed.** One page. Lists every system that matters, where its backup lives, and the exact steps to bring it back up. You ran through this in January with a test restore. Not a full DR drill — just "can we get QuickBooks back from backup in under an hour?"

3. **Hardware you can lose.** Your on-premise server can flood. Your office can lose power for a week. Your internet can go dark. And your business still functions, because the critical stuff either lives in the cloud already or can be stood up there from backup in a few hours.

Most Tampa businesses have one of these three. Almost none have all three. That's the gap that turns a hurricane from "stressful week" to "existential threat."

## The triage version for this season

If you're reading this in May or later, you're not going to build a perfect DR plan before June 1st. You can still do two things that matter:

**One:** Identify your single point of failure. For most small businesses, it's either the accounting system or the CRM. Whichever one would stop operations if it disappeared for three days — that's the one. Get a confirmed working backup of that system into a different location. Cloud storage, a colleague's office in Orlando, your house. Somewhere that won't flood when your building does. Verify you can actually open the backup. This is a weekend project, not a multi-month initiative.

**Two:** Write down your vendor contact info and account recovery details somewhere that isn't in the office. Most of what you'll need to do during an outage is call people and prove you're you. Your insurance agent, your internet provider, your building manager, your SaaS vendors. Put all of that in a Google Doc or a password manager that you can access from your phone. Include account numbers. Include the direct lines that skip the phone tree.

These two steps won't give you a complete DR plan. They'll give you the difference between "we're offline for three days" and "we're offline for three weeks while we try to reconstruct who we even had accounts with."

## What February looks like

If you're reading this in 2027 and want to actually be ready next time, here's the rhythm that works:

Start in February. Pick one system. Run a restore test. Document what you learned. Do this once a month until May. By June, you've tested five systems and you know which backups are real and which are pretend.

This is most of what [infrastructure consulting work](/services/it-consulting/) looks like — not building elaborate disaster recovery architectures, but making sure the boring stuff you thought was already working actually works. If you want help with the February version instead of the May scramble, [get in touch](/contact/).

Hurricane season runs June through November. Your backup strategy shouldn't.
