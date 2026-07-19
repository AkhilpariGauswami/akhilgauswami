// Data-driven on purpose: the design ships ONE case-study template
// (project-case-study-page.svg) but there are two real projects. CaseStudy.jsx
// reads from this array by slug, so House Service gets the same page quality
// as KnightCraving the moment its content exists — zero new UI code needed.
//
// Fields are a mix of confirmed facts (project names, one-liners) and
// deliberate TODOs. Nothing here should ship as-is. KnightCraving's real
// case-study content already exists in the old case_study_kc.html — port
// it into the fields below rather than rewriting from scratch.


export const projects = [
  {
    slug: 'knightcraving',
    name: 'KnightCraving',
    oneLiner: 'Campus food price comparison tool.',
    status: 'Live', 
    tags: ['Food', 'Price Comparison', 'Campus Life'],
    thumbnail: null, // /assets/projects/knightcraving-thumb.png
    links: {
      caseStudy: '/work/knightcraving',
      demo: null,
      repo: 'https://github.com/AkhilpariGauswami/KnightCraving',
    },
    caseStudy: {
      role: 'Owner & Lead Developer', // TODO: confirm
      timeline: 'TODO',
      stack: ['React', 'Node.js', 'Express', 'MongoDB'], // TODO: confirm
      problem:
        'People waste time switching between Zomato and Swiggy hunting for the best deal. KnightCraving instantly compares food prices across platforms so users choose smarter — in seconds.',
      whyItMatters: 'TODO',
      research: 'TODO',
      keyInsights: [
        { title: 'TODO', description: 'TODO' },
        { title: 'TODO', description: 'TODO' },
      ],
      decisionLog: [
        { considered: 'TODO', chosen: 'TODO', reasoning: 'TODO' },
        { considered: 'TODO', chosen: 'TODO', reasoning: 'TODO' },
      ],
      versionJourney: [{ version: 'TODO', description: 'TODO' }],
      solution: 'TODO',
      results: 'TODO',
      challenges: 'TODO',
      lessonsLearned: 'TODO',
    },
  },
  {
    slug: 'house-service',
    name: 'House Service',
    oneLiner: 'Local home services marketplace.',
    status: 'In Progress',
    tags: ['Home Services', 'Marketplace', 'Local'],
    thumbnail: null,
    links: {
      caseStudy: '/work/house-service',
      demo: null,
      repo: 'https://github.com/AkhilpariGauswami/LocalLink',
    },
    caseStudy: {
      role: 'Owner & Lead Developer', // TODO: confirm
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
