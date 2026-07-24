// Data-driven on purpose: the design ships ONE case-study template
// (project-case-study-page.svg) but there are two real projects. CaseStudy.jsx
// reads from this array by slug, so LocalLink gets the same page quality
// as KnightCraving the moment its content exists — zero new UI code needed.
//
// Fields are a mix of confirmed facts and deliberate TODOs. The TODOs need
// YOUR actual specifics (dates, metrics, what you considered and rejected) —
// don't fill them with plausible-sounding invented details. That's the exact
// mistake the v0/design-file export made with its fake "Nexus"/"Aura"
// projects and fabricated career history; the whole point of this file is
// not repeating it. KnightCraving's real case-study content already exists
// in the old case_study_kc.html — port it into the fields below rather than
// rewriting from scratch.
//
// "LocalLink" is the current name — renamed from "House Service." Slug
// updated to match; update any external links (resume, LinkedIn posts)
// still pointing at /work/house-service.
//
// repo links intentionally keep the "Goswami" GitHub URL — that's the
// account username, unrelated to the "Gauswami" display-name spelling.

export const projects = [
  {
    slug: 'knightcraving',
    name: 'KnightCraving',
    oneLiner:
      'Compares food delivery prices across Zomato and Swiggy so you order from whichever is actually cheaper.',
    status: 'TODO', // e.g. "Live", "In Development", "Shipped v1.2"
    tags: ['Food-Tech', 'Price Comparison'],
    thumbnail: null, // /assets/projects/knightcraving-thumb.png
    links: {
      caseStudy: '/work/knightcraving',
      demo: null,
      repo: 'https://github.com/AkhilpariGoswami',
    },
    caseStudy: {
      role: 'TODO',
      timeline: 'TODO',
      stack: ['TODO'],
      problem:
        'TODO — port over from case_study_kc.html rather than rewriting; that copy already leads with the problem, not an overview.',
      whyItMatters: 'TODO',
      research: 'TODO',
      keyInsights: [
        {
          title: 'Synchronized Selection',
          description:
            'TODO — this is the named UX mechanic at the core of the v1.0–v1.2 roadmap. What it does, and why it beat a plain side-by-side price comparison, is worth spelling out here — it\u2019s the most distinctive, interview-worthy detail this case study has.',
        },
        { title: 'TODO', description: 'TODO' },
      ],
      decisionLog: [
        { considered: 'TODO', chosen: 'TODO', reasoning: 'TODO' },
        { considered: 'TODO', chosen: 'TODO', reasoning: 'TODO' },
      ],
      versionJourney: [
        { version: 'v1.0', description: 'TODO — what shipped in the first version.' },
        { version: 'v1.1', description: 'TODO — what changed, and what prompted the change.' },
        { version: 'v1.2', description: 'TODO — what changed, and what prompted the change.' },
      ],
      solution: 'TODO',
      results: 'TODO',
      challenges: 'TODO',
      lessonsLearned: 'TODO',
    },
  },
  {
    slug: 'locallink',
    name: 'LocalLink',
    oneLiner: 'Local home-services marketplace, connecting nearby households with service providers.',
    status: 'TODO',
    tags: ['Home Services', 'Marketplace'],
    thumbnail: null,
    links: {
      caseStudy: '/work/locallink',
      demo: null,
      repo: 'https://github.com/AkhilpariGoswami',
    },
    caseStudy: {
      role: 'TODO',
      timeline: 'TODO',
      stack: ['TODO'],
      problem: 'TODO — no case study written yet anywhere (confirmed gap).',
      whyItMatters: 'TODO',
      research: 'TODO',
      keyInsights: [{ title: 'TODO', description: 'TODO' }],
      decisionLog: [{ considered: 'TODO', chosen: 'TODO', reasoning: 'TODO' }],
      versionJourney: [{ version: 'TODO', description: 'TODO' }],
      solution: 'TODO',
      results: 'TODO',
      challenges: 'TODO',
      lessonsLearned: 'TODO',
    },
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
