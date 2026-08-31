---
title: "App Store submission is mostly paperwork and waiting"
description: "Shipping to the App Store means dealing with certificates, compliance forms, and Apple's opaque review process. Here's what actually happens."
pubDate: 2026-08-31
tags: ["ios", "swiftui", "process"]
draft: true
---

Most of the work of getting an app into the App Store has nothing to do with writing code.

You spend weeks building the thing — architecture decisions, SwiftUI views, data persistence, testing on real devices. Then you hit "submit" and discover that shipping means filling out compliance questionnaires, wrangling provisioning profiles, and waiting three days to find out that your screenshot dimensions are wrong.

This is the part no one puts in the tutorial. It's also the part that trips up every first-time founder I talk to.

## Before you can submit anything

Apple's prerequisites are scattered across three different portals and one local tool. You need:

- An Apple Developer Program membership ($99/year, takes 24–48 hours to activate)
- A properly configured App Store Connect record with your app's metadata
- A distribution certificate and provisioning profile (created in the developer portal, installed in Xcode)
- Privacy manifest files if you use any third-party SDKs (and you probably do)
- Export compliance documentation, even if your app doesn't do encryption

That last one catches people. If your app uses HTTPS — which it does — Apple considers that encryption. You have to file a form saying you're using standard encryption and not exporting munitions-grade crypto. It's a relic of 1990s export law. You still have to do it.

Getting the certificates right is its own adventure. Xcode's "automatic signing" works until it doesn't, at which point you're manually creating certificate signing requests and troubleshooting why your build says "profile doesn't include signing certificate." This is [the kind of thing that eats half a day in iOS development work](/services/ios-development/) if you've never done it before.

## What "in review" actually means

You archive the build. You upload it. App Store Connect says "processing" for twenty minutes, then switches to "waiting for review." Now you wait.

Current average review time is about 24 hours, but I've seen it go as fast as three hours and as slow as a week. There's no way to know. There's no queue position. You just wait.

When the review starts, one of three things happens:

1. **Approval.** The app appears in the store within a few hours. This is the minority case on first submission.

2. **Rejection for a fixable issue.** Screenshot dimensions, missing privacy disclosures, a reference to a feature that isn't obviously present in the app. You fix it and resubmit. Another 24-hour wait.

3. **Rejection for something structural.** The app violates a guideline (real or imagined), uses a private API you didn't know was private, or triggers some automated fraud detection. These can take days to resolve, sometimes involving back-and-forth emails with a faceless review team.

I've had apps rejected because the reviewer couldn't figure out how to use a feature that was documented in the app description. I've had apps approved that I was certain would get rejected. The process is consistent in its inconsistency.

## The compliance gauntlet

If your app does anything interesting — payments, user-generated content, access to health data, tracking across other apps — you're filling out additional forms.

App Tracking Transparency? You need a usage description string and a justification for why you're asking. In-app purchases? Full financial metadata for every SKU. User-generated content? A content moderation plan and a way to report abuse.

None of this is documented in one place. You discover it when the review comes back saying "your app is missing required functionality" and includes a link to a guideline you've never heard of.

The worst offender is tax and banking information. If you're charging money, Apple needs your tax ID, your banking details, and signed contracts for every territory you're selling in. The interface for this is a multi-step modal buried in App Store Connect that will time out if you take too long to find your routing number.

## What I tell founders to expect

When someone asks me how long it takes to ship an iOS app, the honest answer is "two to three weeks longer than you think, even after the code is done."

Budget for:

- One full day setting up certificates, profiles, and App Store Connect metadata
- At least one rejection and resubmission cycle (48+ hours)
- Another half-day if you're dealing with payments or sensitive data
- Periodic certificate renewals (they expire annually, and Xcode will fail your build with a cryptic error when they do)

This is boring work. It's also unavoidable work. The App Store is a walled garden, and the wall has a very specific gate with very specific paperwork.

The upside: once you've done it successfully for one app, the second one is faster. You know where the traps are. You have a checklist. You remember that "export compliance" means clicking "yes, standard encryption only" and moving on.

But the first time? Plan for it to take longer than building the feature you just shipped.
