export type ProjectStatus = 'Live' | 'In Progress'

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  status: ProjectStatus
  category: string
  hasLiveDemo: boolean
}

export const projects: Project[] = [
  {
    slug: 'nexus-enterprise-suite',
    title: 'Nexus Enterprise Suite',
    description:
      'Redesigning the core navigation and data visualization components for a Fortune 500 logistics platform, resulting in a 40% reduction in user error.',
    image: '/images/project-nexus.png',
    tags: ['Product Design', 'React', 'Data Viz'],
    status: 'Live',
    category: 'Product Design',
    hasLiveDemo: true,
  },
  {
    slug: 'aura-fintech-app',
    title: 'Aura Fintech App',
    description:
      'End-to-end design and prototype of a personal finance application aimed at simplifying investment strategies for young professionals.',
    image: '/images/project-aura.png',
    tags: ['UX/UI', 'Figma', 'Fintech'],
    status: 'In Progress',
    category: 'UX/UI',
    hasLiveDemo: false,
  },
]

export const projectCategories = ['All Categories', 'Product Design', 'UX/UI', 'Data Viz', 'Fintech']

export type Experiment = {
  title: string
  description: string
  tags: string[]
  featured?: boolean
  archived?: boolean
  links: { label: string; type: 'demo' | 'repo' | 'pen' }[]
}

export const experiments: Experiment[] = [
  {
    title: 'Fluid Particle System',
    description:
      'Exploring custom shaders and instanced rendering in Three.js to create a responsive, cursor-avoiding particle field. Optimizing for 60fps on mobile.',
    tags: ['WebGL', 'WIP'],
    featured: true,
    links: [
      { label: 'Live Demo', type: 'demo' },
      { label: 'Repo', type: 'repo' },
    ],
  },
  {
    title: 'Dynamic Island UI',
    description:
      "A web-based recreation of iOS's dynamic island interactions using Framer Motion for fluid spring animations.",
    tags: ['React'],
    links: [{ label: 'View Pen', type: 'pen' }],
  },
  {
    title: 'Gooey Navigation',
    description:
      'Experimenting with SVG filters and CSS transitions to create a viscous, organic tab-switching effect.',
    tags: ['CSS'],
    links: [{ label: 'View Pen', type: 'pen' }],
  },
  {
    title: 'Audio Visualizer Web API',
    description:
      'An older spike testing the Web Audio API to map frequency data to DOM elements. Kept around as a reference for handling stream data.',
    tags: ['Archived'],
    archived: true,
    links: [],
  },
]

export type JourneyEntry = {
  period: string
  role: string
  company: string
  points: string[]
}

export const journey: JourneyEntry[] = [
  {
    period: '2023 - Present',
    role: 'Senior Product Designer',
    company: 'Tech Innovators Inc.',
    points: [
      'Leading design strategy for enterprise SaaS platforms.',
      'Spearheaded a complete design system overhaul, reducing design-to-dev handoff time by 40%.',
      'Mentoring a team of 3 junior designers.',
    ],
  },
  {
    period: '2021 - 2023',
    role: 'Product Designer',
    company: 'Creative Solutions Agency',
    points: [
      'Delivered end-to-end design for B2C mobile applications.',
      'Collaborated closely with engineering to ensure pixel-perfect implementation.',
    ],
  },
  {
    period: '2019 - 2021',
    role: 'UX/UI Intern',
    company: 'StartUp Launchpad',
    points: [
      'Assisted in conducting user research and usability testing.',
      'Created wireframes and interactive prototypes for early-stage products.',
    ],
  },
]

export type CaseStudy = {
  slug: string
  badge: string
  title: string
  subtitle: string
  heroImage: string
  role: string
  timeline: string
  techStack: string[]
  problem: string
  whyItMatters: string
  research: string
  insights: { title: string; body: string }[]
  solutionIntro: string
  solutions: { title: string; body: string; image?: string }[]
  versions: { version: string; label: string; body: string; current?: boolean }[]
  challenges: string
  lessons: string
  prev: { slug: string; title: string }
  next: { slug: string; title: string }
}

export const caseStudies: Record<string, CaseStudy> = {
  'nexus-enterprise-suite': {
    slug: 'nexus-enterprise-suite',
    badge: 'Shipped v2.0',
    title: 'Project Nexus: Unifying the SaaS Experience',
    subtitle:
      'A comprehensive redesign of the core platform architecture to streamline user onboarding and reduce time-to-value for enterprise clients by 40%.',
    heroImage: '/images/case-hero.png',
    role: 'Lead Product Designer',
    timeline: 'Q3 2023 - Q1 2024',
    techStack: ['React', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    problem:
      'Enterprise users were experiencing significant friction during the initial configuration phase. Analytics indicated a 60% drop-off rate within the first 48 hours of account creation. The existing architecture was disjointed, forcing users to navigate through multiple nested settings menus just to achieve basic functionality.',
    whyItMatters:
      "High churn during onboarding directly impacts MRR. By simplifying this flow, we weren't just improving usability; we were addressing a critical business bottleneck that constrained scalable growth.",
    research:
      'We conducted 20 in-depth user interviews with newly churned accounts and analyzed session recordings. The qualitative data revealed a clear pattern of cognitive overload.',
    insights: [
      {
        title: 'Lost in Navigation',
        body: "Users couldn't find the primary action triggers without explicit guidance.",
      },
      {
        title: 'Time to Value',
        body: 'The "Aha!" moment was buried under 15 minutes of mandatory configuration.',
      },
    ],
    solutionIntro:
      'A modular, progressive disclosure interface that guides users through setup contextually.',
    solutions: [
      {
        title: 'Progressive Onboarding',
        body: 'Breaking down the 15-step process into bite-sized, contextual prompts.',
        image: '/images/case-solution.png',
      },
      {
        title: 'Contextual Help',
        body: 'Inline tooltips replacing heavy documentation.',
      },
      {
        title: 'Unified Dashboard',
        body: 'Centralized control plane for all configurations.',
        image: '/images/project-nexus.png',
      },
    ],
    versions: [
      {
        version: 'v1.0',
        label: 'Foundation',
        body: 'Initial release focusing on core functionality. High friction identified in setup.',
      },
      {
        version: 'v1.5',
        label: 'The Pivot',
        body: 'Introduced tooltips and simplified menus based on early feedback.',
      },
      {
        version: 'v2.0',
        label: 'Nexus (Current)',
        body: 'Complete overhaul of the onboarding architecture, achieving the 40% TTV reduction.',
        current: true,
      },
    ],
    challenges:
      'Balancing the need for extensive configuration options with the desire for a simple, streamlined onboarding experience was a constant negotiation with engineering and product management.',
    lessons:
      'Assuming user knowledge is dangerous. We learned that explicitly guiding users, even for seemingly obvious steps, significantly improved confidence and completion rates.',
    prev: { slug: 'aura-fintech-app', title: 'Fintech Dashboard' },
    next: { slug: 'aura-fintech-app', title: 'AI Design Tool' },
  },
  'aura-fintech-app': {
    slug: 'aura-fintech-app',
    badge: 'In Progress',
    title: 'Aura: Rethinking Personal Finance',
    subtitle:
      'End-to-end design and prototype of a personal finance application aimed at simplifying investment strategies for young professionals.',
    heroImage: '/images/project-aura.png',
    role: 'Product Designer',
    timeline: 'Q1 2024 - Present',
    techStack: ['Figma', 'SwiftUI', 'Prototyping', 'UX Research'],
    problem:
      'Young professionals wanted to start investing but found existing tools intimidating and jargon-heavy. Onboarding required financial literacy that most first-time investors simply did not have.',
    whyItMatters:
      'Lowering the barrier to entry for investing is both a business opportunity and a chance to build long-term financial confidence for an underserved demographic.',
    research:
      'We surveyed 150 first-time investors and ran moderated usability tests on three competing apps to understand where confidence broke down.',
    insights: [
      {
        title: 'Jargon Overload',
        body: 'Financial terminology alienated users before they made a first deposit.',
      },
      {
        title: 'Fear of Mistakes',
        body: 'Users hesitated to act without a clear sense of risk and outcome.',
      },
    ],
    solutionIntro:
      'A guided, conversational investment flow that explains concepts in plain language as users go.',
    solutions: [
      {
        title: 'Plain-Language Goals',
        body: 'Users describe outcomes, not instruments, and Aura maps a strategy.',
        image: '/images/project-aura.png',
      },
      {
        title: 'Confidence Meter',
        body: 'Real-time risk visualisation before any commitment.',
      },
      {
        title: 'Automated Rules',
        body: 'Set-and-forget recurring investments with clear projections.',
      },
    ],
    versions: [
      {
        version: 'v0.5',
        label: 'Concept',
        body: 'Early prototype validating the conversational onboarding idea.',
      },
      {
        version: 'v0.8',
        label: 'Beta',
        body: 'Introduced the confidence meter after usability feedback.',
        current: true,
      },
    ],
    challenges:
      'Communicating financial risk simply without oversimplifying required close collaboration with compliance and content design.',
    lessons:
      'Clarity beats completeness. Showing fewer, well-explained options built more trust than exposing every possible control.',
    prev: { slug: 'nexus-enterprise-suite', title: 'Nexus Enterprise Suite' },
    next: { slug: 'nexus-enterprise-suite', title: 'Nexus Enterprise Suite' },
  },
}

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Read.cv', href: 'https://read.cv' },
  { label: 'Email', href: 'mailto:hello@akhilpari.com' },
]
