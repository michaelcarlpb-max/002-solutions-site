export type ServiceIcon = 'consulting' | 'ios' | 'ai' | 'advisory';

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: ServiceIcon;
  summary: string;
  intro: string;
  deliverables: string[];
  engagement: {
    typicalLength: string;
    pricing: string;
    process: string;
  };
  goodFit: string[];
  notAFit: string[];
  /** Rendered as an FAQ section + FAQPage schema. Write answers in plain prose — no markdown. */
  faqs: { question: string; answer: string }[];
  /** Used for SEO meta description. Keep under ~155 chars. */
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: 'it-consulting',
    title: 'Freelance IT Consulting',
    shortTitle: 'IT Consulting',
    icon: 'consulting',
    summary:
      'Infrastructure, tooling, and technical decisions without the enterprise markup. For small businesses that need senior-level thinking without a full-time hire.',
    intro:
      "Most small businesses don't need a full IT department — they need one experienced person who can actually answer the question. Someone to untangle the stack, fix what's broken, and tell you straight whether that new tool is worth the money. That's the work.",
    deliverables: [
      'Network and systems troubleshooting',
      'Stack reviews and tool rationalization',
      'Backup and disaster recovery planning',
      'Email, identity, and access hygiene',
      'Vendor and SaaS cost audits',
      'Migration planning and execution',
    ],
    engagement: {
      typicalLength: '2–4 weeks for scoped audits; longer for project work.',
      pricing: 'Fixed price per engagement. No hourly billing, no retainers.',
      process: 'Scoping call → written proposal → the work → handoff docs.',
    },
    goodFit: [
      'Small businesses without a dedicated IT person',
      'Teams paying enterprise prices for small-business problems',
      'Founders who inherited a messy stack and need a cleanup',
      'Anyone who wants a plain-English answer, not a sales pitch',
    ],
    notAFit: [
      'Ongoing managed services or helpdesk retainers',
      'Break-fix on-call coverage',
      'Compliance certifications (SOC 2, HIPAA audits, etc.)',
    ],
    faqs: [
      {
        question: 'How much does IT consulting cost for a small business?',
        answer:
          "Every engagement is a fixed price quoted up front after a short scoping call — no hourly billing, no retainers, no surprise invoices. The price depends on scope: a focused audit costs less than a full migration. You'll know the exact number before any work starts, and it doesn't change unless the scope does.",
      },
      {
        question: 'Do you work with businesses outside of Tampa?',
        answer:
          "Yes. I'm based in Tampa, Florida and work in Eastern Time, but nearly all of this work happens remotely, so I take on clients anywhere. For Tampa Bay area businesses I can also come on-site when the work calls for it.",
      },
      {
        question: 'Do you offer ongoing IT support or managed services?',
        answer:
          "No — I do scoped, project-based work rather than helpdesk retainers or on-call coverage. When an engagement ends you get handoff documentation so your team (or your next provider) can run what I built. If you need ongoing managed services, I'll tell you that honestly and point you toward the right kind of provider.",
      },
      {
        question: 'What size of business is this a good fit for?',
        answer:
          "Typically small businesses and founder-led teams without a dedicated IT person — roughly one to fifty people. If you're big enough to have your own IT department, you probably need staff, not a consultant. If you're paying enterprise prices for small-business problems, that's exactly the situation I help fix.",
      },
      {
        question: 'What does a typical engagement look like?',
        answer:
          'We start with a scoping call where you describe the problem in plain English. I send a written proposal with a fixed price and a clear deliverable. Then I do the work — most scoped audits take two to four weeks — and finish with handoff documentation and a walkthrough so you actually understand what changed and why.',
      },
    ],
    metaDescription:
      'Freelance IT consulting for small businesses — infrastructure reviews, backup planning, stack rationalization, and senior-level technical decisions without the enterprise markup.',
  },
  {
    slug: 'ios-development',
    title: 'iOS & App Development',
    shortTitle: 'iOS Development',
    icon: 'ios',
    summary:
      'Native SwiftUI apps from concept through App Store submission. Full lifecycle, not just code.',
    intro:
      "I build native iOS apps in SwiftUI — end-to-end, from first sketch to App Store release. You get one person who handles the design sense, the Swift, the App Store paperwork, and the inevitable rejection notices. No handoffs, no hiring six people.",
    deliverables: [
      'SwiftUI app design and development',
      'App Store submission and review navigation',
      'StoreKit 2 and in-app purchase integration',
      'Push notifications, widgets, and Live Activities',
      'HealthKit, WeatherKit, and system framework integrations',
      'TestFlight builds and beta program setup',
    ],
    engagement: {
      typicalLength: '4–12 weeks for a v1, depending on scope.',
      pricing: 'Fixed price per milestone. No hourly billing.',
      process: 'Scope → prototype → build in public → TestFlight → ship.',
    },
    goodFit: [
      'Founders with a product idea and no iOS expertise in-house',
      'Small businesses wanting a branded, owned-not-rented app experience',
      'Teams that need a senior iOS lead for a single project',
      'Existing apps that need a v2 rebuild in SwiftUI',
    ],
    notAFit: [
      'Android-first or Android-only projects',
      'Cross-platform stacks (React Native, Flutter, Ionic)',
      'Staff augmentation inside an existing iOS team',
    ],
    faqs: [
      {
        question: 'How much does it cost to build an iOS app?',
        answer:
          "It depends entirely on scope — a focused single-purpose app costs far less than one with accounts, payments, and a backend. I price per milestone, fixed, so you know the cost of each phase before it starts. After a scoping call I'll give you a realistic number and, just as importantly, tell you which features to cut from v1 to get to market faster.",
      },
      {
        question: 'How long does it take to build an app?',
        answer:
          'Most v1 apps take four to twelve weeks depending on scope. Simple, focused apps land on the shorter end; apps with backends, in-app purchases, or heavy system integrations take longer. You see progress throughout via TestFlight builds, not a big reveal at the end.',
      },
      {
        question: 'Do you build Android or cross-platform apps?',
        answer:
          "No — I build native iOS apps in SwiftUI, and I'd rather be excellent at one platform than mediocre at two. If you genuinely need Android on day one, a cross-platform shop is a better fit, and I'll tell you that in the first call. Many small businesses find iOS-first is the right way to validate before paying for both platforms.",
      },
      {
        question: 'Who owns the code when the project is done?',
        answer:
          'You do. You get the complete source code, the App Store account is yours, and the handoff includes documentation so another developer could pick it up tomorrow. No lock-in, no licensing terms, no rented codebase.',
      },
      {
        question: 'Do you handle the App Store submission process?',
        answer:
          "Yes — end to end. That includes the App Store listing, screenshots, privacy declarations, review submission, and dealing with Apple's rejection notices when they happen (they happen to everyone). The engagement isn't done until the app is live.",
      },
    ],
    metaDescription:
      'Native SwiftUI iOS app development, end-to-end. From concept through App Store submission — one senior developer handling design, code, and release.',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation Consulting',
    shortTitle: 'AI & Automation',
    icon: 'ai',
    summary:
      'Put modern AI to work on real problems — automations, agents, and sensible integrations. Skeptical of hype, focused on what works.',
    intro:
      "Most AI projects fail because they start with the technology instead of the problem. I start the other way around: find the repeatable work eating your time, then figure out the smallest AI-assisted thing that makes it go away. No strategy decks, no six-month pilots — working software that reduces a real workflow.",
    deliverables: [
      'Claude and OpenAI API integration',
      'RAG pipelines for searching private documents',
      'Document processing and structured extraction',
      'Workflow automation with n8n, Zapier, or custom scripts',
      'AI-assisted internal tools (dashboards, admin apps, agents)',
      'Prompt engineering and evaluation',
    ],
    engagement: {
      typicalLength: '1–6 weeks per project.',
      pricing: 'Fixed price per deliverable.',
      process: 'Identify the workflow → prototype → measure → ship.',
    },
    goodFit: [
      'Small businesses with manual work that obviously could be automated',
      'Teams wanting to try AI without a research project',
      'Founders sitting on data they can\'t exploit yet',
      'Existing products that need an AI-assisted feature done right',
    ],
    notAFit: [
      'Foundation model training or fine-tuning research',
      'ML research projects without a clear production target',
      'Speculative "AI strategy" engagements without a workflow to improve',
    ],
    faqs: [
      {
        question: 'What kinds of tasks can AI actually automate for a small business?',
        answer:
          'The boring, repeatable ones: processing documents and invoices, extracting data from PDFs and emails, triaging inboxes, answering questions against your internal documents, drafting first-pass reports, and gluing together tools that don\'t talk to each other. If a task follows a pattern and eats hours every week, it\'s probably automatable. If it requires real judgment every time, it probably isn\'t — and I\'ll say so.',
      },
      {
        question: 'Do I need a big budget or a lot of data to start with AI?',
        answer:
          "No. Most useful AI automation projects are one to six weeks of work built on existing models like Claude — no training, no data science team, no six-month pilot. The right first project is the smallest thing that removes a real chunk of weekly busywork, and you measure whether it worked before spending more.",
      },
      {
        question: 'Is my business data safe when using AI tools?',
        answer:
          "It can be, if it's set up properly. I build on commercial APIs (like Anthropic and OpenAI) under terms where your data isn't used to train models, keep your data inside accounts you own, and avoid sending anything sensitive that doesn't need to leave your systems. Part of every engagement is walking you through exactly where your data goes.",
      },
      {
        question: 'Which AI tools and models do you work with?',
        answer:
          "Mostly the Claude and OpenAI APIs for the model layer, with n8n, Zapier, or custom scripts for the workflow plumbing — chosen per problem, not by loyalty. I'm deliberately vendor-neutral: you get whatever combination solves your workflow cheapest and most reliably.",
      },
      {
        question: 'How do I know if my AI project will actually work before paying for it?',
        answer:
          "We start with the workflow, not the technology: identify the repeatable task, prototype the smallest version, and measure it against the manual process. If the prototype doesn't clearly win, you stop early and cheap. I turn down projects where I don't think AI is the right answer — a strategy deck with no working software helps nobody.",
      },
    ],
    metaDescription:
      'AI and automation consulting — Claude and OpenAI integrations, RAG pipelines, and workflow automation for small businesses. Skeptical of hype, focused on what ships.',
  },
  {
    slug: 'advisory',
    title: 'General Tech Advisory',
    shortTitle: 'Advisory',
    icon: 'advisory',
    summary:
      'A second pair of eyes on your stack, architecture, or roadmap. Short engagements, direct answers.',
    intro:
      "Sometimes you don't need someone to build — you need someone experienced to look at what you've got and tell you the truth about it. Is this architecture going to survive the next year? Is this stack choice going to bite you? Should you buy or build? I give you a straight answer and the reasoning behind it.",
    deliverables: [
      'Architecture and code reviews',
      'Technology and stack selection advice',
      'Technical due diligence (for acquisitions or investments)',
      'Roadmap and prioritization sessions',
      'Build-vs-buy analysis',
      'Written recommendations with tradeoffs',
    ],
    engagement: {
      typicalLength: 'A half-day session up to 2 weeks.',
      pricing: 'Fixed price per session or written deliverable.',
      process: 'Briefing → review → written recommendations → follow-up call.',
    },
    goodFit: [
      'Founders about to commit to a big build and wanting a sanity check',
      'Teams in disagreement on technical direction',
      'Investors or acquirers doing technical due diligence',
      'Boards or execs who need an independent technical read',
    ],
    notAFit: [
      'Ongoing fractional CTO retainers',
      'Team management or hiring decisions',
      'Long-term architecture ownership',
    ],
    faqs: [
      {
        question: 'What is a technology advisory session?',
        answer:
          "A short, focused engagement — anywhere from a half-day session to two weeks — where an experienced outside technologist reviews your architecture, stack, or roadmap and gives you a straight written answer. You brief me, I dig in, and you get recommendations with the tradeoffs spelled out, plus a follow-up call to work through questions.",
      },
      {
        question: 'When does it make sense to get a second opinion on a technical decision?',
        answer:
          "Before the expensive commitment, not after. The classic moments: you're about to sign off on a big build, your team is split on technical direction, you're choosing a stack you'll live with for years, or you're acquiring or investing in a company whose technology you can't evaluate yourself. A short review now is much cheaper than unwinding the wrong decision later.",
      },
      {
        question: 'Are you available as a fractional CTO?',
        answer:
          "Not on an ongoing retainer — I keep advisory work short and scoped so the advice stays independent. If you need someone to own architecture or manage a team long-term, that's a hire. What I can do is help you make the big decisions well, including helping you figure out what that hire should look like.",
      },
      {
        question: 'What do I actually get at the end of an advisory engagement?',
        answer:
          'A written recommendation in plain English: what I reviewed, what I found, what I\'d do in your position, and the tradeoffs of each option. It\'s a document you can share with your team, your board, or your investors — not a slide deck of generalities. Plus a follow-up call to pressure-test it.',
      },
      {
        question: 'Can you review code or architecture under NDA?',
        answer:
          "Yes — NDAs are routine for this work, especially for technical due diligence on acquisitions or investments. Your code and findings stay confidential, and the written deliverable goes only to you.",
      },
    ],
    metaDescription:
      'Independent technology advisory — architecture reviews, stack selection, technical due diligence, and roadmap sessions. Short engagements, direct answers.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
