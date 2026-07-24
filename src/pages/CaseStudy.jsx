import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, CodeXml } from 'lucide-react';
import { projects, getProjectBySlug } from '../data/projects';
import Button from '../components/ui/Button';
import Tag from '../components/ui/Tag';
import Placeholder from '../components/ui/Placeholder';
import Timeline from '../components/sections/Timeline';
import useDocumentTitle from '../hooks/useDocumentTitle';

// Shared TODO detection: matches "TODO" alone AND "TODO — some hint text",
// so a descriptive hint doesn't accidentally lose its Placeholder styling.
// Previously several spots in this file used `=== 'TODO'` (exact match
// only) while Body used its own separate startsWith check — inconsistent,
// and the exact-match spots silently render raw "TODO — ..." strings as if
// they were finished copy the moment a hint is added. One helper, used
// everywhere, fixes both.
function isTodo(value) {
  return typeof value === 'string' && value.startsWith('TODO');
}

function stripTodo(value, fallback) {
  const stripped = value.replace(/^TODO\s*—?\s*/, '');
  return stripped || fallback;
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  useDocumentTitle(project ? project.name : 'Project not found', project?.oneLiner);

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
            {isTodo(project.status) ? (
              <Placeholder>{stripTodo(project.status, 'status, e.g. "Shipped v1.0"')}</Placeholder>
            ) : (
              project.status
            )}
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
                <Tag key={i}>{isTodo(t) ? <Placeholder>{stripTodo(t, 'stack item')}</Placeholder> : t}</Tag>
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
                  {isTodo(insight.title) ? (
                    <Placeholder>{stripTodo(insight.title, 'insight title')}</Placeholder>
                  ) : (
                    insight.title
                  )}
                </h3>
                <p className="mt-1 font-body text-sm text-body">
                  {isTodo(insight.description) ? (
                    <Placeholder>{stripTodo(insight.description, 'what you found')}</Placeholder>
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
                  {isTodo(entry.considered) ? (
                    <Placeholder>{stripTodo(entry.considered, "option you didn't pick")}</Placeholder>
                  ) : (
                    entry.considered
                  )}
                </p>
                <p className="mt-1.5 font-body text-sm text-body">
                  <span className="font-semibold text-ink">Chose: </span>
                  {isTodo(entry.chosen) ? (
                    <Placeholder>{stripTodo(entry.chosen, 'option you picked')}</Placeholder>
                  ) : (
                    entry.chosen
                  )}
                </p>
                <p className="mt-1.5 font-body text-sm text-muted">
                  <span className="font-semibold text-ink">Why: </span>
                  {isTodo(entry.reasoning) ? (
                    <Placeholder>{stripTodo(entry.reasoning, 'the reasoning')}</Placeholder>
                  ) : (
                    entry.reasoning
                  )}
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
                title: isTodo(v.version) ? (
                  <Placeholder key={`v-${i}`}>{stripTodo(v.version, 'version label, e.g. "v1.0 — Foundation"')}</Placeholder>
                ) : (
                  v.version
                ),
                points: [
                  isTodo(v.description) ? (
                    <Placeholder key={`d-${i}`}>{stripTodo(v.description, 'what changed in this version')}</Placeholder>
                  ) : (
                    v.description
                  ),
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
      <p className="mt-2 font-body text-ink">
        {isTodo(value) ? <Placeholder>{stripTodo(value, label.toLowerCase())}</Placeholder> : value}
      </p>
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
  return (
    <p className={`font-body text-body ${className}`}>
      {isTodo(children) ? <Placeholder>{stripTodo(children, 'fill this in')}</Placeholder> : children}
    </p>
  );
}
