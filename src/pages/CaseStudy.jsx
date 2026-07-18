import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, CodeXml } from 'lucide-react';
import { projects, getProjectBySlug } from '../data/projects';
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';
import Placeholder from '../components/ui/Placeholder';
import Timeline from '../components/sections/Timeline';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-[1200px] px-8 py-28 text-center">
        <h1 className="font-display text-4xl font-bold italic text-ink">Project not found</h1>
        <Link to="/" className="mt-6 inline-block font-body text-primary hover:underline">
          ← Back to home
        </Link>
      </section>
    );
  }

  const cs = project.caseStudy;
  const index = projects.findIndex((p) => p.slug === slug);
  const prev = projects[index - 1];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Hero */}
      <section className="mx-auto max-w-[900px] px-8 pb-12 pt-20 text-center md:pt-28">
        {project.status && (
          <span className="inline-flex items-center rounded-full bg-surface-3 px-4 py-1.5 font-mono text-xs text-body">
            {project.status === 'TODO' ? <Placeholder>status, e.g. "Shipped v1.0"</Placeholder> : project.status}
          </span>
        )}
        <h1 className="mt-6 font-display text-5xl font-black italic text-ink md:text-6xl">
          {project.name}
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg text-body">{project.oneLiner}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {project.links.demo && (
            <Button href={project.links.demo} icon={ExternalLink}>
              Live Demo
            </Button>
          )}
          {project.links.repo && (
            <Button href={project.links.repo} variant="secondary" icon={CodeXml}>
              GitHub
            </Button>
          )}
        </div>
      </section>

      {/* Hero image */}
      <div className="mx-auto flex aspect-[16/7] max-w-[1200px] items-center justify-center rounded-2xl border border-dashed border-border bg-surface-2 px-8">
        <p className="font-mono text-xs text-muted">Product screenshot / hero shot goes here</p>
      </div>

      {/* Role / Timeline / Stack strip */}
      <section className="mx-auto max-w-[1200px] border-b border-border-2 px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <MetaBlock label="Role" value={cs.role} />
          <MetaBlock label="Timeline" value={cs.timeline} />
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-muted">Tech Stack</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {cs.stack.map((t, i) => (
                <Tag key={i}>{t === 'TODO' ? <Placeholder>stack item</Placeholder> : t}</Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[800px] space-y-20 px-8 py-20">
        <Section title="The Problem Space" body={cs.problem} />

        <div className="rounded-2xl bg-surface-2 p-8">
          <h2 className="font-display text-2xl font-bold italic text-ink">Why It Matters</h2>
          <Body className="mt-3">{cs.whyItMatters}</Body>
        </div>

        <div>
          <Section title="Research &amp; Key Insights" body={cs.research} />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {cs.keyInsights.map((insight, i) => (
              <div key={i} className="rounded-xl border border-border-2 p-5">
                <h3 className="font-body font-semibold text-ink">
                  {insight.title === 'TODO' ? <Placeholder>insight title</Placeholder> : insight.title}
                </h3>
                <p className="mt-1 font-body text-sm text-body">
                  {insight.description === 'TODO' ? (
                    <Placeholder>what you found</Placeholder>
                  ) : (
                    insight.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decision Log — the design file doesn't actually include this section;
            added because the audit calls it the single highest-leverage gap in
            every previous version of this portfolio. */}
        <div>
          <h2 className="font-display text-2xl font-bold italic text-ink">Decision Log</h2>
          <p className="mt-2 font-body text-sm text-muted">What I considered, what I chose, and why.</p>
          <div className="mt-6 space-y-4">
            {cs.decisionLog.map((entry, i) => (
              <div key={i} className="rounded-xl border border-border-2 p-5">
                <p className="font-body text-sm text-body">
                  <span className="font-semibold text-ink">Considered: </span>
                  {entry.considered === 'TODO' ? <Placeholder>option you didn't pick</Placeholder> : entry.considered}
                </p>
                <p className="mt-1.5 font-body text-sm text-body">
                  <span className="font-semibold text-ink">Chose: </span>
                  {entry.chosen === 'TODO' ? <Placeholder>option you picked</Placeholder> : entry.chosen}
                </p>
                <p className="mt-1.5 font-body text-sm text-muted">
                  <span className="font-semibold text-ink">Why: </span>
                  {entry.reasoning === 'TODO' ? <Placeholder>the reasoning</Placeholder> : entry.reasoning}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Section title="The Solution" body={cs.solution} />

        <div>
          <h2 className="font-display text-2xl font-bold italic text-ink">Version Journey</h2>
          <div className="mt-6">
            <Timeline
              items={cs.versionJourney.map((v, i) => ({
                title: v.version === 'TODO' ? <Placeholder key={`v-${i}`}>version label, e.g. "v1.0 — Foundation"</Placeholder> : v.version,
                points: [
                  v.description === 'TODO' ? <Placeholder key={`d-${i}`}>what changed in this version</Placeholder> : v.description,
                ],
              }))}
            />
          </div>
        </div>

        <Section title="Results" body={cs.results} />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          <Section title="Challenges" body={cs.challenges} />
          <Section title="Lessons Learned" body={cs.lessonsLearned} />
        </div>
      </div>

      {/* Prev / Next */}
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between border-t border-border-2 px-8 py-10">
        <Link to={`/work/${prev.slug}`} className="group flex items-center gap-2 font-body text-body hover:text-primary">
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>
            <span className="block font-mono text-xs text-muted">Previous</span>
            {prev.name}
          </span>
        </Link>
        <Link to={`/work/${next.slug}`} className="group flex items-center gap-2 text-right font-body text-body hover:text-primary">
          <span>
            <span className="block font-mono text-xs text-muted">Next</span>
            {next.name}
          </span>
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </nav>
    </article>
  );
}

function MetaBlock({ label, value }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-muted">{label}</p>
      <p className="mt-2 font-body text-ink">{value === 'TODO' ? <Placeholder>{label.toLowerCase()}</Placeholder> : value}</p>
    </div>
  );
}

function Section({ title, body }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold italic text-ink">{title}</h2>
      <Body className="mt-3">{body}</Body>
    </div>
  );
}

function Body({ children, className = '' }) {
  const isPlaceholder = typeof children === 'string' && children.startsWith('TODO');
  return (
    <p className={`font-body text-body ${className}`}>
      {isPlaceholder ? <Placeholder>{children.replace(/^TODO\s*—?\s*/, '')}</Placeholder> : children}
    </p>
  );
}
