---
title: "The three questions that predict whether your AI project will ship"
description: "Most AI projects stall because they skip the unsexy decisions. Here's how to tell if yours will actually make it to production."
pubDate: 2026-04-21
tags: ["ai", "consulting", "process"]
draft: true
---

I've looked at maybe two dozen AI project plans in the last year. About half were going to fail before anyone wrote a line of code, and you could tell by asking three questions.

Not "what model are you using" or "how are you handling hallucinations." Those matter, but they come later. The projects that stall do it earlier, in the decisions nobody wants to talk about because they aren't technically interesting.

## Question one: What happens when it's wrong?

This is the question that separates real projects from demos.

A demo can be wrong 20% of the time and still feel impressive. A production system that's wrong 20% of the time is a support nightmare, a liability, or both. If you don't know what happens when the AI screws up — not in theory, but in your specific workflow — you don't have a project yet. You have a research question.

The useful version of this question is concrete: "Our AI thing generates email subject lines. When it produces a bad one, does a human see it before the email goes out, or does it just send?"

If the answer is "it just sends," you need 99%+ reliability, which probably means you're not using an LLM for this. If the answer is "a human sees it," then you need to design that review step — how long it takes, what the UI looks like, whether the human can fix it or just approve/reject. That's not an AI problem. It's a workflow problem. But it's the thing that decides whether anyone will actually use this.

## Question two: Where does the data come from, and who maintains it?

The boring infrastructure question that kills more projects than any technical limitation.

Most useful AI applications need context: your company's support tickets, your product documentation, your customer data, your internal policies. That data lives somewhere — Notion, Zendesk, Salesforce, a Google Drive folder someone set up in 2019. Getting it into your AI system means building connectors, handling auth, dealing with rate limits, and writing code to keep the data fresh.

None of that is hard individually. All of it together is enough work that it needs to be someone's explicit job, and if it's not, the project will drift. I've seen this happen: team gets excited about the AI piece, builds a clever prototype with manually copied data, then realizes they need a way to sync 40,000 support tickets every hour. Six weeks later they're still debugging an API client and the momentum is gone.

The smell test: can you describe, in one sentence, how the data gets from where it is now to where your AI needs it, and can you name the person who will own that pipeline? If not, add three months to your timeline.

## Question three: What's the smallest version that does something useful?

This is where most projects fail, because the first version people imagine is too big.

The wrong version: "An AI assistant that can answer any question about our product, route support tickets, and suggest documentation improvements." That's three projects. You'll spend months arguing about scope, building infrastructure to support all three use cases, and never ship anything.

The right version: "A thing that reads new support tickets and suggests which of our five help articles to send, with a confidence score. Support agents see the suggestion in Zendesk and can send it with one click."

That's specific enough to build in a few weeks. It solves one real problem. You can measure whether it works. And if it doesn't work, you know quickly and can pivot.

The test: can one person build the first version in a month, including the connectors and the UI? If the answer is no, it's not the first version.

## What this means in practice

Most AI projects fail for non-AI reasons. The model works fine. The integration is impossible. Or the integration works fine but nobody wants to change their workflow. Or the workflow is fine but the data pipeline breaks every other Tuesday.

If you're planning an AI project and you haven't answered these three questions with boring specifics, you're not ready to start. Take a week. Write down what "wrong" looks like, draw the data flow, and cut the scope until one person could build it.

The unsexy decisions are the ones that matter. Everything else is just picking a model.
