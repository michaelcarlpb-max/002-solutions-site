---
title: "What App Store submission actually looks like"
description: "It's screenshots, metadata, privacy forms, and waiting. Here's what the last 20% of shipping an iOS app actually involves."
pubDate: 2026-09-21
tags: ["ios", "swiftui", "founders", "process"]
draft: true
---

The last 20% of shipping an iOS app takes longer than you think, and none of it is the fun part.

You have working code. The UI looks good on your test device. You've fixed the crashes. You think you're done. You're not. What's left is App Store submission, which is:

- Writing marketing copy Apple will reject if it mentions competitors
- Producing screenshots that look right on every device you support, even though most of your users own one or two phone models
- Filling out a privacy manifest that asks questions you've never thought about
- Waiting 24–48 hours to find out you misspelled something in your App Privacy section

This is not engineering work. It's paperwork. But it's the only way your app becomes a thing people can download.

## The metadata gauntlet

App Store Connect wants you to describe your app in several formats simultaneously. You need:

**A name** (30 characters). Harder than it sounds when your actual product name is 28 characters and you want to mention what the app does.

**A subtitle** (30 characters). Apple's guidelines say this should describe what the app does. Most developers use it for keyword stuffing. Apple rejects obvious keyword stuffing. The line between the two is vibes-based.

**A description** (4000 characters). Nobody reads this, but you still have to write it. The first two sentences matter — that's what shows before "more." Everything after that is SEO.

**Keywords** (100 characters). Comma-separated. No spaces after commas. Don't include your app name (it's already a keyword). Don't include category terms Apple auto-indexes. What's left is usually 6-8 words you hope help discoverability but can't prove.

**What's new** (4000 characters). Required with every update. Most developers write "Bug fixes and performance improvements" because they fixed a layout bug in the settings screen and don't want to explain it.

You can't deploy the app without completing all of these fields. You can spend two hours on them and still get it wrong because Apple's reviewer has a different interpretation of "accurate description" than you do.

## Screenshots that scale badly

On paper, Apple has made this easier. You now only have to upload one set of iPhone screenshots at the largest size, plus one iPad set if your app runs on iPad, and App Store Connect scales them down for smaller devices. In practice, a screenshot designed for a Pro Max often looks cramped or oddly cropped on the smaller phones most people actually carry, so teams that care end up producing more than one size anyway.

Most [iOS development work](/services/ios-development/) I do is for small teams shipping simple apps. They don't have a design system that gracefully handles every screen size. They have SwiftUI that adapts reasonably well and some padding that looks fine on a 6.1" screen.

Creating screenshots that look right means either:

1. Running the app on several simulators, carefully staging the exact screen state you want, then taking simulator screenshots
2. Using a design tool to mock up what the app *would* look like with perfect data in perfect layout
3. Paying someone on Fiverr to do option 2 for you

None of these options feel good. The screenshots lie a little — they show the app in states it's rarely in, with data that's cleaner than real usage. But Apple requires them, and users expect them, so you do it.

## The privacy manifest nobody warned you about

Since 2024, Apple has required a privacy manifest: a machine-readable file declaring what data you collect and why. If you use certain APIs — user defaults, file timestamps, system boot time — you need to declare those too, even if you're not "tracking" anyone.

The privacy manifest is a `.plist` file you add to your Xcode project. The App Privacy section in App Store Connect is a web form with 40 questions. They ask overlapping things but aren't connected. You fill out both.

Sample question: "Does this app collect precise location data?"

You think: "We use location services when the user asks for nearby results. Is that 'collect'? We don't store it. We send it to our backend to fetch data. Does 'collect' mean 'transmit'? The backend logs the request. Is that collection?"

The correct answer is probably "yes," but the guidelines are written like a legal document, and you're an engineer trying to ship an app. You make your best guess. If you guess wrong, the reviewer rejects the submission and you try again three days later.

## The wait

You submit. Now you wait.

Apple says most submissions are reviewed within a day or two, and that's usually accurate. Sometimes you get reviewed in six hours. Sometimes it takes four days. There's no way to know.

While you wait, your options are limited. If you spot a typo in the subtitle, you can pull the submission out of review to fix it, but that puts you at the back of the line. Most people just wait.

When the review finishes, you get one of three outcomes:

1. **Approved.** You can release immediately or schedule a future date.
2. **Rejected.** You get a note from the reviewer explaining what's wrong. Sometimes it's clear ("Your app crashes on launch"). Sometimes it's vague ("Guideline 4.2 - Minimum Functionality"). You fix it, resubmit, wait again.
3. **Metadata rejected.** Everything else is fine, but your subtitle mentions a competitor or your screenshots show an iPad in an orientation Apple doesn't want. You edit the metadata, resubmit, wait again.

You only ship when outcome 1 happens.

## Why this matters for founders

If you're a founder building your first app, budget time for this. I've seen teams assume "done coding" means "ships next week." It doesn't. Between the metadata, the screenshots, the privacy manifest, and the review wait, you're looking at 3–7 days minimum. Longer if you get rejected once.

If you're hiring someone to ship the app, make sure submission is in scope. Some iOS contractors consider their work done when the code is feature-complete. App Store submission is additional. That's reasonable, but you need to know it upfront.

If you're doing it yourself, expect it to feel bureaucratic and annoying. That's normal. Everyone finds this part tedious. The difference between shipping and not shipping is doing it anyway.

## What helps

A few things that make submission less painful:

- **Start the metadata early.** You can fill out App Store Connect before your app is finished. Get the description, keywords, and screenshots drafted while you're still coding. You'll revise them, but having a draft saves time.

- **Script your screenshots.** `xcrun simctl io booted screenshot` grabs a clean, full-resolution capture of whatever the running simulator shows, and tools like fastlane's `snapshot` can generate the whole set for you. Either beats screenshotting by hand every release.

- **Read the rejection carefully.** When Apple rejects, they usually tell you exactly what's wrong. Don't skim it. Don't assume. Read the specific guideline they cite and fix the specific thing they flag.

The work isn't glamorous. But it's the last gate between your code and users. You do it once per release, you get better at it over time, and eventually it's just part of the process.
