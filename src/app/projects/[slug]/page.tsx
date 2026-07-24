import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ExternalLink, Code2, Map, Gauge, ArrowLeft, ArrowRight } from 'lucide-react'
import { caseStudies } from '@/lib/data'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) return { title: 'Case Study — Akhilpari Gauswami' }
  return {
    title: `${study.title} — Akhilpari Gauswami`,
    description: study.subtitle,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = caseStudies[slug]
  if (!study) notFound()

  const insightIcons = [Map, Gauge]

  return (
    <article className="pb-8">
      {/* Hero */}
      <header className="mx-auto max-w-4xl px-6 pt-10 text-center md:pt-16">
        <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {study.badge}
        </span>
        <h1 className="mx-auto mt-6 max-w-3xl font-serif text-5xl font-bold leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl">
          {study.title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          {study.subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Live Demo
            <ExternalLink className="size-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            GitHub
            <Code2 className="size-4" />
          </a>
        </div>
      </header>

      {/* Hero image */}
      <div className="mx-auto mt-12 max-w-6xl px-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-secondary">
          <Image
            src={study.heroImage || '/placeholder.svg'}
            alt={`${study.title} hero`}
            fill
            className="object-cover"
            sizes="(max-width: 1152px) 100vw, 1152px"
            priority
          />
        </div>
      </div>

      {/* Meta */}
      <div className="mx-auto mt-10 max-w-4xl border-y border-border px-6 py-6">
        <dl className="grid gap-6 sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Role
            </dt>
            <dd className="mt-2 font-medium text-foreground">{study.role}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Timeline
            </dt>
            <dd className="mt-2 font-medium text-foreground">{study.timeline}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Tech Stack
            </dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {study.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </dd>
          </div>
        </dl>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-4xl px-6">
        {/* Problem */}
        <section className="mt-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground">
            The Problem Space
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{study.problem}</p>
          <div className="mt-8 rounded-2xl bg-secondary/70 p-6 md:p-8">
            <h3 className="font-serif text-2xl font-bold text-foreground">Why It Matters</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{study.whyItMatters}</p>
          </div>
        </section>

        {/* Research */}
        <section className="mt-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground">
            Research &amp; Key Insights
          </h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">{study.research}</p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {study.insights.map((insight, i) => {
              const Icon = insightIcons[i % insightIcons.length]
              return (
                <div key={insight.title} className="rounded-2xl border border-border p-6">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-4 font-semibold text-foreground">{insight.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{insight.body}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Solution */}
        <section className="mt-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground">
            The Solution
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            {study.solutionIntro}
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {study.solutions.map((sol, i) => (
              <div
                key={sol.title}
                className={`flex flex-col overflow-hidden rounded-2xl border border-border bg-card ${
                  i === 0 ? 'md:row-span-2' : ''
                }`}
              >
                {sol.image && (
                  <div
                    className={`relative bg-secondary ${
                      i === 0 ? 'min-h-56 flex-1' : 'aspect-[16/10]'
                    }`}
                  >
                    <Image
                      src={sol.image || '/placeholder.svg'}
                      alt={sol.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h3
                    className={
                      i === 0
                        ? 'font-serif text-2xl font-bold text-foreground'
                        : 'font-semibold text-foreground'
                    }
                  >
                    {sol.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{sol.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Version Journey */}
        <section className="mt-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground">
            Version Journey
          </h2>
          <ol className="relative mt-8 space-y-8 border-l border-border pl-8">
            {study.versions.map((v) => (
              <li key={v.version} className="relative">
                <span
                  className={`absolute -left-[2.55rem] top-1 size-3.5 rounded-full border-2 ${
                    v.current
                      ? 'border-primary bg-primary'
                      : 'border-muted-foreground/40 bg-background'
                  }`}
                  aria-hidden="true"
                />
                <p
                  className={`text-sm font-medium ${v.current ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  {v.version} - {v.label}
                </p>
                <p className="mt-1 leading-relaxed text-foreground">{v.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Challenges + Lessons */}
        <section className="mt-16 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Challenges
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.challenges}</p>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground">
              Lessons Learned
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{study.lessons}</p>
          </div>
        </section>
      </div>

      {/* Prev / Next */}
      <nav className="mx-auto mt-16 flex max-w-4xl items-center justify-between border-t border-border px-6 pt-8">
        <Link href={`/projects/${study.prev.slug}`} className="group">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <ArrowLeft className="size-4" />
            Previous
          </span>
          <span className="mt-1 block font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {study.prev.title}
          </span>
        </Link>
        <Link href={`/projects/${study.next.slug}`} className="group text-right">
          <span className="flex items-center justify-end gap-1.5 text-sm text-muted-foreground">
            Next
            <ArrowRight className="size-4" />
          </span>
          <span className="mt-1 block font-serif text-xl font-bold text-foreground transition-colors group-hover:text-primary">
            {study.next.title}
          </span>
        </Link>
      </nav>
    </article>
  )
}
