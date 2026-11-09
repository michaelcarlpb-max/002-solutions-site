---
title: "You probably don't need that"
description: "Most over-engineering happens when you solve tomorrow's problem today. Here's how to recognize it before you've burned a month."
pubDate: 2026-11-09
tags: ["advisory", "process", "founders", "small-business"]
draft: true
---

The strongest predictor of over-engineering isn't technical complexity. It's how far into the future you're solving for.

If you're building for the problem you have *right now*, you'll probably land somewhere reasonable. If you're building for the problem you might have in eighteen months, you're going to waste time on abstractions that won't survive contact with reality.

This shows up everywhere. The founder who specs out a multi-region database architecture before they have a single paying customer. The team that builds a plugin system for a feature set that hasn't changed in two years. The business that buys enterprise software because "we'll eventually need SSO," even though they currently have twelve employees.

## What over-engineering actually costs

The obvious cost is time. You spend three weeks building a flexible queueing system when a cron job would've worked. That's three weeks you're not shipping the thing people are waiting for.

The less obvious cost is cognitive load. Every abstraction you add is something your team has to understand, maintain, and route around when it doesn't quite fit. Most [advisory work](/services/advisory/) I do involves helping teams delete things they built six months ago and never actually needed.

The worst cost is optionality. Once you've committed to the complex version, the simple version stops being available. You can't go back to the cron job after you've rewritten everything to use the queue. The architecture has opinions now, and you're stuck with them.

## How to recognize it while there's still time

Three patterns that show up reliably:

**You're arguing about it.** If the right approach were obvious, you wouldn't be in a room debating three different database schemas. The fact that reasonable people disagree usually means you don't have enough information yet — which means you're speculating about the future instead of responding to the present.

**The implementation keeps growing.** You thought it would take three days. It's been a week and you're not halfway done. That's not because you were bad at estimation. It's because the problem you're solving is harder than the problem you have.

**No one can explain it simply.** If you can't describe what you're building in two sentences that a non-technical founder would understand, you've probably added complexity that doesn't map to a real user need. Complexity should come from the problem, not from your solution.

## What to do instead

The annoying answer is: solve the problem you have, then wait. Ship the cron job. See if anyone complains. If they do, you'll know exactly what to build next, because you'll have real data instead of speculation.

This goes against every instinct developers are trained to have. We're supposed to think ahead. Plan for scale. Make it "production-ready" from day one. But most software never gets the scale you're planning for, and the definition of "production-ready" changes faster than you can build for it.

I'm not arguing for sloppy work. The cron job should run reliably. The database schema should be correct. The code should be readable. But "readable" and "flexible enough to handle three hypothetical future use cases" are different targets, and the second one usually isn't worth it.

The best engineering I see from small teams comes from people who are almost embarrassingly pragmatic. They'll hardcode things that "should" be configurable. They'll write the same logic twice instead of abstracting it. They'll pick the boring database. Then they'll ship, and six months later they'll have enough information to know what actually matters.

That's not laziness. That's knowing the difference between the problem you have and the problem you're afraid of.
