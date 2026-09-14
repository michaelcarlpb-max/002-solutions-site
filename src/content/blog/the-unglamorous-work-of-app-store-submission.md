---
title: "App Store submission is 90% paperwork you do once"
description: "The technical work is done but the app won't ship for another week. Here's what actually happens between 'build complete' and 'available for download.'"
pubDate: 2026-09-14
tags: ["ios", "swiftui", "process"]
draft: true
---

The app works. TestFlight testers can use it. The crash logs are clean. You're ready to ship.

Then you spend three days on screenshots, privacy manifests, and export compliance declarations before you can even click "Submit for Review." This is the part of [iOS development work](/services/ios-development/) that every blog post skips over — and the part that usually takes longer than you expect the first time through.

## What you're actually doing when you "submit to the App Store"

It's not one submission. It's five or six separate compliance declarations, asset uploads, and form-fills that Apple requires before a human reviewer will look at your app. Some of it makes sense. Some of it is clearly there because of a lawsuit in 2019.

**App Privacy questions.** You click through a questionnaire about every type of data your app collects, how it's used, whether it's linked to the user's identity, and whether it's used for tracking. If you collect an email address, that's "Contact Info." If you store that email in UserDefaults and sync it via iCloud, that's "linked to the user." The definitions are precise and counterintuitive. Getting one answer wrong means rejection and another week of delay.

**Export compliance.** A yes/no question about encryption that sounds simple but isn't. If your app uses HTTPS — which it does — that's encryption. But it's exempt encryption, so you answer "No." Unless your app does its own crypto on top of HTTPS, in which case you answer "Yes" and fill out a supplement. The first time you do this, you will read the documentation twice and still second-guess yourself.

**Screenshots.** Five device sizes minimum if you want to cover iPhone and iPad. More if you support Apple Watch or Mac. Each screenshot needs to show the app in use, not the marketing site. I've seen rejections for screenshots that included too much "coming soon" content or device frames that didn't match the Apple-approved templates. You are not designing a landing page. You are filling out a government form with images.

**App Review information.** A text field for notes to the reviewer, plus demo account credentials if your app requires login. If you skip this and your app has a login screen, rejection. If you include credentials that don't work, rejection. This field exists because app reviewers will not create an account to test your app, and they will not email you to ask for one.

None of this is hard. It's just a checklist you have to get right, and each mistake costs you a week.

## Where the time actually goes

The first time you ship an app, the paperwork takes longer than expected for the same reason TSA takes longer the first time — you don't know which line to stand in or what they're going to ask for when you get to the front. You are reading help docs while filling out forms, which is the slowest way to fill out forms.

The second time is faster, because you have a previous submission to reference. You copy most of the privacy answers, you know which export compliance answer applies, you've already made screenshots that follow the rules. It's still an hour or two of pure administrivia, but it's not three days.

The real time sink isn't the first submission. It's the revision you make six months later when you realize you didn't document your privacy answers anywhere and now you're trying to remember whether "Analytics" was supposed to be "Performance Data" or "Other Usage Data."

## What I actually do

I keep a checklist. Not because the work is complicated, but because it's easy to skip something when you're switching contexts from "build the app" to "fill out compliance forms." The checklist lives in the project repo as a markdown file, right next to the release notes.

It includes:

- Every privacy question and its answer for this specific app
- The export compliance answer and a one-sentence reminder of why
- Device sizes that need screenshots and the tool I use to generate them (I script this now, because doing it manually five times is five times too many)
- A "test the demo account" step, because I have shipped credentials that expired

None of this is glamorous. It's the same kind of work as filing your taxes — necessary, slightly annoying, faster if you do it every year instead of once.

If you're shipping your first app and it's taking longer than you thought it should, this is why. The work isn't hard. There's just more of it than the blog posts about SwiftUI components tend to mention.
