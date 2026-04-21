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
    metaDescription:
      'Independent technology advisory — architecture reviews, stack selection, technical due diligence, and roadmap sessions. Short engagements, direct answers.',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
