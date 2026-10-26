---
title: "The bill arrives six months after you ship the LLM feature"
description: "LLM costs scale weirdly. What seems cheap at prototype scale can wreck your margins when real users show up."
pubDate: 2026-10-26
tags: ["ai", "llm", "consulting", "founders"]
draft: true
---

You build a prototype. It works. The LLM calls cost twelve cents. You ship it.

Six months later, your cloud bill has a line item for $4,800 that wasn't there before, and you're trying to figure out how a feature that "just summarizes some text" turned into your third-largest infrastructure expense.

This happens more than it should. LLM costs scale in ways that don't match how normal software scales, and most teams don't notice until the credit card auto-renews.

## Why the math breaks at production scale

A typical API call to GPT-4 costs around $0.03 for a thousand input tokens and $0.06 for a thousand output tokens. That sounds fine until you do the multiplication.

Say you're building a support tool that uses an LLM to suggest reply templates. Each call processes the customer's message (average 200 tokens), the full ticket history (800 tokens), and your knowledge base context (1,500 tokens). The model returns a 400-token draft reply. One interaction costs about $0.10.

At ten support tickets a day, that's a dollar. At a thousand tickets a day — which is small for a real support queue — you're burning $3,000 a month on a feature that mostly generates text you could've templated.

The problem compounds when users can trigger calls freely. If your feature lives in a chatbot or a "refine this output" loop, costs balloon. One customer who hits "regenerate" fifteen times looking for the perfect wording just ate $1.50 of margin on a $20 subscription.

## The three cost traps no one warns you about

**Trap one: Context window bloat.** Every extra token in the prompt costs money. Teams routinely dump entire documents into context "just in case," when a 200-token summary would've worked. I've seen pricing drop 70% by trimming context to what the model actually needs.

**Trap two: Output verbosity.** If you're generating marketing copy or creative content, longer output is the point. But most LLM use cases don't need 800 words. A tighter system prompt ("respond in under 100 words") can cut costs in half.

**Trap three: No fallback path.** If the LLM is the only way to complete a task, you're stuck paying whatever it costs. The teams with sustainable LLM features always have a non-LLM path for the 80% case, and they only route to the model when it's actually needed.

## What actually works for cost control

Use smaller models. GPT-4 is overkill for most tasks. GPT-3.5-turbo costs a tenth as much and handles straightforward classification, summarization, and templating just fine. Claude Haiku is even cheaper for high-volume, low-complexity work.

Cache aggressively. If the same context appears in multiple requests — your prompt template, your knowledge base, your system instructions — cache it. Most providers charge far less for cached tokens. One client cut their bill by 40% by caching a 10,000-token knowledge base that was hitting the API hundreds of times a day.

Monitor per-user costs. If you're building a SaaS product, track LLM spend per account. The moment you see one user burning $50/month in API calls on a $10 plan, you know you have a problem. Fix it before you have a hundred users doing it.

Batch where you can. If the task doesn't need to be real-time, queue it and process in bulk. Some of this is [standard automation work](/services/ai-automation/) — you're just treating the LLM like an expensive external service that you call strategically, not reflexively.

## The boring decision that saves the most money

Most teams should start with a hybrid approach: use the LLM for the hard 20% and use rules, templates, or simpler models for the rest. That means writing actual code — not just piping everything through an LLM and hoping the context window solves it.

It's less exciting than "we use AI for everything," but it's what keeps the feature viable when usage grows. The best [AI advisory work](/services/advisory/) I do is often just mapping out which parts of a workflow genuinely need an LLM and which parts are being routed there out of laziness.

The bill comes due eventually. Better to design for it now than to scramble when your AWS invoice triples.
