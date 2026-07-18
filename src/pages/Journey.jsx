import Timeline from '../components/sections/Timeline';
import Placeholder from '../components/ui/Placeholder';

// Reshaped from the design's literal template (employer / job title / years)
// into academic + project milestones — see chat for why. Dates and specifics
// below are TODO; the shape (school → KnightCraving → House Service →
// portfolio iterations → graduation) is grounded in real facts.
const MILESTONES = [
  {
    period: 'TODO — start year',
    title: 'AI & Data Science, GEC Rajkot',
    points: ['4th-year engineering program, focused on AI & Data Science.'],
  },
  {
    period: 'TODO — year',
    title: 'Building KnightCraving',
    subtitle: 'Campus food price comparison tool',
    points: ['TODO — the one decision from this build worth telling here.'],
  },
  {
    period: 'TODO — year',
    title: 'Building House Service',
    subtitle: 'Local home services marketplace',
    points: ['TODO — the one decision from this build worth telling here.'],
  },
  {
    period: '2026',
    title: 'Graduating — and a portfolio rebuilt three times over',
    points: [
      'Dark HTML → light React/JSX → static Stitch build → this React rebuild.',
      'Looking for product-minded engineering internships and junior roles.',
    ],
  },
];

export default function Journey() {
  return (
    <section className="mx-auto max-w-[1200px] px-8 py-20 md:py-28">
      <h1 className="font-display text-5xl font-black italic text-ink md:text-6xl">My Journey</h1>
      <p className="mt-6 max-w-xl font-body text-lg text-body">
        <Placeholder>
          One or two sentences on how you think about building — this is where the old
          Philosophy/Process content belongs.
        </Placeholder>
      </p>

      <div className="mt-14 max-w-2xl">
        <Timeline items={MILESTONES} />
      </div>
    </section>
  );
}
