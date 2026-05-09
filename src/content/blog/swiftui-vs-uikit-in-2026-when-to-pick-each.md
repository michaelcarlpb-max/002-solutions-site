---
title: "SwiftUI is ready. UIKit still wins sometimes."
description: "After five years, SwiftUI handles most iOS work. But three scenarios still call for UIKit — here's when to reach for each."
pubDate: 2026-05-04
tags: ["ios", "swiftui", "tools"]
draft: false
---

The question isn't whether SwiftUI is production-ready anymore. It is. The question is whether *your specific project* should use it.

I shipped my first SwiftUI app in 2021. It was rough. Navigation was half-baked. List performance collapsed under moderate data loads. Every third beta release broke something that had worked the week before. Today, in 2026, those problems are solved. SwiftUI is the default choice for new iOS work, and it should be.

But "default" doesn't mean "always." Three scenarios still call for UIKit, and pretending otherwise costs time and user experience.

## When SwiftUI wins (which is most of the time)

Start here unless you have a specific reason not to:

**New apps with typical UI patterns.** Forms, lists, navigation stacks, tab bars — SwiftUI handles all of it well now. The declarative model is faster to write and easier to maintain than UIKit's imperative slog. If your app is mostly standard components arranged in normal ways, SwiftUI will ship faster and stay readable longer.

**Apps that need to target iOS 17+.** If you can drop support for older OS versions, you unlock everything Apple has stabilized over the past two years: reliable `NavigationStack`, proper `ScrollView` paging, observable macros that actually work. The framework is legitimately good at this point.

**Solo developers and small teams.** SwiftUI's learning curve is steeper upfront, but the code you write is more compact and less ceremonial. One person can move faster in SwiftUI than in UIKit once they clear the initial hump. No more delegate boilerplate, no more manual constraint setup, no more wondering which view controller is actually managing state.

## When UIKit still wins

Three scenarios where I reach for UIKit first:

**1. Complex collection views with heterogeneous cells.** If you're building something like a social feed — dynamic heights, nested horizontal scrolling, media mixed with text, lazy loading that needs to feel instant — UIKit's `UICollectionView` with compositional layout is still more predictable than SwiftUI's `List` or `ScrollView`. SwiftUI's performance is *fine* for most cases. It's not fine when you need pixel-perfect control over exactly when cells load and exactly how memory gets managed under rapidly changing data.

**2. Deep customization of standard controls.** SwiftUI makes the common case easy. It makes the uncommon case somewhere between annoying and impossible. If you need a text field that does something nonstandard — custom selection behavior, complex input validation with live feedback, accessibility support that doesn't map cleanly to SwiftUI's model — you'll end up wrapping UIKit anyway. At that point, just use UIKit for the whole flow.

**3. Apps that need to support iOS 15 or earlier.** SwiftUI's pre-iOS 16 navigation was genuinely broken. `NavigationView` had memory leaks. `NavigationLink` had unpredictable push behavior. Sheet dismissal sometimes just didn't work. If you're stuck supporting older OS versions, the safe choice is UIKit for navigation and SwiftUI only for isolated views where you can contain the damage.

## The hybrid approach mostly doesn't work

The tempting middle ground is to mix them: UIKit for navigation, SwiftUI for content views. Or SwiftUI for the shell, UIKit for complex components. I've tried this on multiple projects. It's bad.

The two frameworks don't compose cleanly. You end up with `UIHostingController` wrappers, manual layout bridging, state synchronization bugs that are impossible to debug. The app *works*, but the codebase feels like two separate projects duct-taped together. Pick one and commit.

The one exception: wrapping a single isolated UIKit component inside a mostly-SwiftUI app is fine. One `UIViewRepresentable` for a specific thing SwiftUI can't do is manageable. Trying to split architectural layers across frameworks is not.

## What I'm actually doing

For new client work targeting iOS 17+, I ship SwiftUI unless the app's core feature is one of the three scenarios above. That covers maybe 80% of projects. For the other 20%, I use UIKit and accept that the code will be longer and more tedious to maintain.

For existing UIKit apps, I don't rewrite them. Rewrites are expensive and rarely worth it unless you're already doing a major feature overhaul. But new screens go in SwiftUI where possible, wrapped carefully to avoid the hybrid tax.

If you're starting a new iOS project today, default to SwiftUI. But if you hit one of those three scenarios — complex collections, deep customization, or old OS support — don't force it. UIKit still exists. Use it.
