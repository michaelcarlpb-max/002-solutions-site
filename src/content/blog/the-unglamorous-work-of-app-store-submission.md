---
title: "App Store submission is 90% paperwork and one really dumb mistake"
description: "You wrote the code. Now you need screenshots in 12 sizes, a privacy policy, and to figure out why TestFlight says your build is 'missing compliance.'"
pubDate: 2026-09-07
tags: ["ios", "swiftui", "process"]
draft: true
---

The first time you submit an app to the App Store, you spend maybe 5% of your time on the actual submission button and 95% on everything Apple requires before they'll let you press it.

Screenshots in six device sizes. App preview videos that autoplay on mute. A privacy policy URL that loads over HTTPS. Export compliance documentation for an app that doesn't do cryptography beyond what iOS provides by default. Age ratings based on a questionnaire that asks whether your app "simulates gambling" (no) and whether it contains "realistic violence" (also no, it's a todo list).

This isn't a rant about Apple being unreasonable. Most of these requirements exist for actual reasons. But nobody tells you upfront that [shipping an iOS app](/services/ios-development/) means becoming conversational in App Store Connect's 47-tab interface and learning which fields you can ignore versus which ones will silently block your submission.

## The screenshot problem everyone hits

App Store Connect requires screenshots for iPhone and iPad. Not just "an iPhone screenshot" — a specific set:

- 6.7" iPhone (iPhone 15 Pro Max)
- 6.5" iPhone (iPhone 14 Plus, still required)
- 5.5" iPhone (yes, the iPhone 8 Plus, still required)
- 12.9" iPad Pro
- Probably others by the time you read this

You can upload one set and let Apple scale them, but they'll look bad. You can use the simulator to generate them, but the simulator doesn't perfectly match device aspect ratios unless you're careful about window sizing. You can use a tool like Fastlane to automate it, which works great once you've debugged the initial setup.

Most people solve this by spending two hours on submission day frantically screenshotting in the simulator and realizing halfway through that they forgot to turn off debug overlays.

The correct answer is to generate them once, check them into the repo, and update them only when the UI actually changes. Treat screenshots like assets, not like a thing you regenerate every release.

## The build that won't process

You archive the app. You upload it to App Store Connect. You wait 10 minutes. Then you get an email: "Invalid Binary." No details in the email. You log into App Store Connect. Still no details. You check the developer forums. Twelve threads about "invalid binary," none of them describing your specific issue.

Common causes:

- **Bitcode.** Apple deprecated it in Xcode 14. If you have an old project with `ENABLE_BITCODE = YES` in the build settings, remove it.
- **Missing compliance.** If your app uses encryption (which includes HTTPS, which every app uses), you need to answer a questionnaire about export compliance. Most apps select "No" because they're using standard iOS encryption. But you have to affirmatively say "No" or the build sits in limbo.
- **Outdated provisioning profile.** This one is rare if you're using automatic signing, but if you manually manage certificates, a stale profile will silently break the upload.

The debugging process is: archive again, upload again, wait 10 minutes, check email. Repeat until it works. There's no faster feedback loop. Budget an hour.

## The privacy policy you don't have

If your app collects any user data — and "data" includes things like "they created an account" or "we store their preferences on our server" — you need a privacy policy. Not in the app. On a website. Linked from App Store Connect.

It doesn't have to be written by a lawyer. It does have to be honest and specific. If you're using Firebase Analytics, say so. If you're not collecting anything, say that too. The policy needs to load over HTTPS, and the link can't 404 when Apple's reviewer clicks it.

Most indie developers solve this with a one-page Markdown file hosted on GitHub Pages or their own domain. That's fine. Apple isn't grading the policy on style. They're checking that it exists and corresponds roughly to what the app actually does.

If you don't have a privacy policy and your app genuinely doesn't collect data, you still need a page that says "We don't collect data." This feels silly, but the alternative is a rejection with the note "Missing Privacy Policy."

## The one really dumb mistake

Every submission has one entirely preventable error that costs you a day.

For me, it's usually the app icon. Xcode will let you build and run an app with a missing 1024×1024 icon in the asset catalog. TestFlight will accept the build. But App Store Connect will reject it at the final review step with "Missing App Icon" and you'll lose 24 hours to the review queue.

For other people, it's forgetting to bump the build number. Or leaving a "TODO" string visible in the UI that a reviewer screenshots. Or linking to a staging server that goes offline the day the reviewer tests the app.

The common thread: something you could have caught in 30 seconds if you'd remembered to check. The fix is a pre-submission checklist. Mine is seven items:

1. App icon present (all sizes)
2. Build number incremented
3. Screenshots current
4. Privacy policy URL loads
5. No debug logging visible in UI
6. TestFlight build tested on physical device
7. Compliance documentation answered

This list lives in the project README. I check it before every submission. It's boring, it's unglamorous, and it's the difference between a two-day review and a two-week one.

## What this actually looks like

Most of the [iOS app work](/services/ios-development/) I do is writing SwiftUI views, wiring up APIs, and fixing layout bugs. But a real shipping app requires the submission process to be smooth, because a founder doesn't want to be the one learning App Store Connect's quirks at 11 PM the night before launch.

Getting the first submission right means:

- Generating and storing screenshots in the repo
- Writing a one-page privacy policy if none exists
- Setting up a checklist so nothing dumb gets missed
- Doing a full TestFlight-to-review dry run before the actual launch

None of this is hard. All of it is easy to skip. And skipping it means your launch day turns into "why is the build still processing?" day.
