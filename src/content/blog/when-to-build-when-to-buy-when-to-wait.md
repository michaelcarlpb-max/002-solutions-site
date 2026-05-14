---
title: "Build, buy, or wait: how to decide without a spreadsheet"
description: "The real cost of building isn't engineering time. It's the decision you're not making while you build."
pubDate: 2026-05-11
tags: ["advisory", "consulting", "founders", "process"]
draft: false
---

Every founder I've worked with has asked some version of the same question: "Should we just build this ourselves?"

The answer is almost never about whether you *can* build it. You probably can. The question is whether you should spend the next three months doing that instead of something else.

Most advice on build-vs-buy reduces to spreadsheets. Calculate engineering hours, multiply by hourly rate, compare to the SaaS price. This is technically useful and practically useless, because it ignores the two costs that actually matter: opportunity cost and drag.

## Opportunity cost is simpler than you think

If you build instead of buy, what are you *not* building?

Not as a theoretical exercise. Specifically. What ships three months later because you spent three months on authentication instead of using Auth0? What customer conversation gets delayed because your engineer is debugging webhook retry logic?

I worked with a founder who wanted to build their own email delivery system. They had specific requirements — decent reasons, not just NIH syndrome. When I asked what wouldn't ship if they did that, the answer was clear: the feature that would let their largest prospect move off a spreadsheet and actually pay them.

They bought Postmark. The prospect converted. This is not a story about the magic of SaaS. It's a story about knowing which problem was actually blocking revenue.

The build-vs-buy decision is almost never the most important technical decision you're making. Treat it that way.

## Drag compounds

Drag is what happens after you ship the thing you built.

You own it now. It breaks. It needs updates. A customer needs a feature it doesn't have. You spend four hours debugging why emails aren't sending, then realize it's a DNS thing that wouldn't exist if you'd just used SendGrid.

Drag is invisible until you're in it, which is why founders systematically underweight it. They calculate the build cost, forget the maintenance cost, and then spend the next two years paying interest on the decision.

Here's a test: if the thing you're considering building isn't your core product — if it's infrastructure, or tooling, or some enabling layer — you're probably going to regret building it. Not because you'll build it badly, but because you'll build it once and maintain it forever.

I've built authentication systems. I've built file storage abstractions. I've built admin dashboards. All of them worked. None of them were worth it. The correct decision in every case was to pay someone else to think about that problem and spend my time on the thing only I could build.

## When to actually build

Sometimes you should build.

You should build when the thing you need doesn't exist. Not "doesn't exist in exactly the shape I want," but actually doesn't exist. You should build when buying would mean compromising something central to how your product works.

You should build when the alternative is waiting, and waiting means not shipping.

A client needed a highly specific workflow automation for a warehouse system. There was no SaaS for it. There were adjacent tools, but wiring them together would've meant managing three integrations, two of which were poorly documented. Building took two weeks. It's been running for a year with zero maintenance. That was the right call.

The distinction is this: if you're building because the market hasn't solved your problem, build. If you're building because the market solved it in a way that's 80% right and you want 100%, don't.

## When to wait

The third option gets ignored: do nothing.

Not forever. Just for now.

Most founders treat every technical decision as urgent. They're not. Some problems solve themselves if you wait six months. Some tools get better. Some requirements turn out to be imaginary once you talk to three more customers.

I worked with a team convinced they needed a real-time collaboration feature. The competitor had it. Customers mentioned it. It felt urgent. I asked how many customers had actually stopped using the product because it was missing. The answer was zero.

They waited. Six months later, a customer asked for it. By then, there was a library that did 90% of what they needed. They shipped it in a week.

Waiting is a decision. It should be on the list of options next to build and buy, not treated as a failure to decide.

## How I actually decide

Here's the framework I use when a client asks me build-or-buy:

1. Is this your core product? If yes, build. If no, keep going.
2. Does a credible solution exist? If no, build. If yes, keep going.
3. Will building this delay something more important? If yes, buy. If no, keep going.
4. Can you wait three months and revisit? If yes, wait.

That's it. No spreadsheet required. The answer is almost always obvious once you ask the right questions.

The hard part is admitting which question actually matters.
