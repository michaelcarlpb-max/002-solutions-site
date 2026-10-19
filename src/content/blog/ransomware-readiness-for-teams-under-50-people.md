---
title: "The ransomware test most small teams fail"
description: "You have backups. But can you actually restore from them under pressure? Most teams find out the hard way."
pubDate: 2026-10-19
tags: ["backup", "disaster-recovery", "security", "small-business"]
draft: true
---

Ask a business owner if they have backups and they'll say yes. Ask them when they last tested a restore and you'll get a pause, then "we should probably do that."

That pause is the problem.

Ransomware doesn't care whether your backup software is running. It cares whether you can get your business back online in 48 hours without paying someone in Bitcoin. Most teams under 50 people can't, and they don't find out until it's too late.

## What "ready" actually looks like

Ransomware readiness isn't about防御 tools — that's security's job. It's about recovery speed. Three things matter:

**Your backups are offline or immutable.** If the backup lives on a network share the ransomware can see, it's not a backup. Cloud backups with versioning and API-only access work. So do physically disconnected drives rotated offsite. A Synology NAS in the office that mounts at startup does not.

**You've restored a full system recently.** Not a test file. A full machine or database. You documented how long it took and what broke. You know which credentials you need and where they are. You've done this in the last six months.

**Someone other than you knows how to do it.** If you're the only person who can run the restore, you're a single point of failure. The restore process needs to be written down and tested by whoever's second-chair. Ideally by someone who wasn't around when you set it up.

Most businesses have one of these. Very few have all three.

## The two-hour audit

Here's what I do when someone asks about [backup and disaster recovery readiness](/services/it-consulting/): we spend two hours going through their current setup and testing it.

We don't install anything. We just try to restore something important — a file server, a database, a critical app — from their existing backups. Then we document what worked, what didn't, and how long it took.

About 60% of the time, something is broken in a way that wouldn't surface until an emergency. The backup job is writing to the wrong destination. The retention policy deleted the version we'd actually need. The credentials rotated and nobody updated the runbook. The backup "succeeded" but the data's corrupt.

The audit catches this when it's fixable in an afternoon instead of a crisis.

## The unpopular opinion: most teams over-backup

Small businesses tend to make one of two mistakes. The first is under-backing-up: they have nothing, or they have something that hasn't worked in eight months.

The second is over-backing-up: they're running three different backup tools that all do the same thing because they kept adding products instead of fixing the first one. They're paying for retention they don't need and complexity they can't maintain.

A 30-person company does not need enterprise backup software with deduplication and incremental-forever architecture. They need one good cloud backup product with versioning, a documented restore process, and a quarterly test. That's it.

The test is what separates real readiness from expensive theater.

## What to do this week

Pick your most critical system. Set aside two hours. Try to restore it from backup to a test environment or isolated machine. Time it. Write down every step. Note what broke or what you had to look up.

Then put a recurring calendar event for six months from now to do it again with someone else running the restore while you watch.

If you can't do this — if the backups don't exist, or nobody has time, or the process is too complicated — that's the thing to fix before ransomware finds you. Not the firewall rules, not the security awareness training. The backups you can actually use.
