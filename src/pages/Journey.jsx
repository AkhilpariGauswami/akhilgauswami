import Timeline from '../components/sections/Timeline';
import Placeholder from '../components/ui/Placeholder';
import useDocumentTitle from '../hooks/useDocumentTitle';

// Reshaped from the design's literal employer/job-title/years template into
// academic + project milestones. Exact dates below are still TODO — you
// know them, I don't — but every named milestone and its description is a
// real, confirmed fact:
// GEC Rajkot → FICE + CSR Box internships → KnightCraving + LocalLink →
// EA Product Management certification → Grumble Info Tech offer → graduation.
// Order below follows the sequence facts were given in, not a confirmed
// timeline — reorder once you fill in real dates.
// (LocalLink was renamed from "House Service" — see data/projects.js.)
const MILESTONES = [
  {
    period: 'TODO — start year',
    title: 'B.E. Computer Engineering (AI & Data Science)',
    subtitle: 'Government Engineering College Rajkot · Gujarat Technological University',
    points: ['Final year, graduating 2026.'],
  },
  {
    period: 'TODO — dates',
    title: 'Internship — FICE',
    subtitle: 'In collaboration with Microsoft — climate prediction',
    points: ['TODO — the one decision or result from this internship worth telling here.'],
  },
  {
    period: 'TODO — dates',
    title: 'Internship — CSR Box',
    subtitle: 'AI automation',
    points: ['TODO — the one decision or result from this internship worth telling here.'],
  },
  {
    period: 'TODO — year',
    title: 'Building KnightCraving',
    subtitle: 'Campus food price comparison tool',
    points: ['TODO — the one decision from this build worth telling here (Synchronized Selection is the obvious candidate).'],
  },
  {
    period: 'TODO — year',
    title: 'Building LocalLink',
    subtitle: 'Local home-services marketplace',
    points: ['TODO — the one decision from this build worth telling here.'],
  },
  {
    period: 'July 2025',
    title: 'Electronic Arts Product Management Job Simulation',
    subtitle: 'Forage',
    points: ['Completed certification.'],
  },
  {
    period: 'TODO — offer date',
    title: 'Accepted offer — Grumble Info Tech',
    subtitle: 'Frontend Developer / Jr. Software Engineer, starting June 2026',
    points: [
      'Still open to Product Management, UI/UX, and frontend roles at remote-friendly companies and MNCs beyond this.',
    ],
  },
  {
    period: '2026',
    title: 'Graduating — and a portfolio rebuilt four times over',
    points: [
      'Dark HTML → light React/JSX → static Stitch build → this React rebuild.',
    ],
  },
];

export default function Journey() {
  useDocumentTitle(
    'My Journey',
    'From GEC Rajkot to Grumble Info Tech — internships, projects, and how I think about building.'
  );

  return (
    <section className="mx-auto max-w-[1200px] px-8 py-20 md:py-28">
      <h1 className="font-display text-5xl font-black italic text-ink md:text-6xl">My Journey</h1>
      <p className="mt-6 max-w-xl font-body text-lg text-body">
        <Placeholder>
          One or two sentences on how you think about building — this is where the old
          Philosophy/Process content belongs. A starting point: you've described yourself as a
          "Visionary Orchestrator," energized by ideation, systems thinking, and coordination more
          than repetitive execution. Rewrite it in your own voice rather than shipping this line
          as-is.
        </Placeholder>
      </p>

      <div className="mt-14 max-w-2xl">
        <Timeline items={MILESTONES} />
      </div>
    </section>
  );
}
