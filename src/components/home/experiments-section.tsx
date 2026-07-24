import { ArrowRight, ExternalLink, Code2, AudioLines } from 'lucide-react'
import { experiments, type Experiment } from '@/lib/data'
import { cn } from '@/lib/utils'

function Tag({ label }: { label: string }) {
  const accent = ['WebGL', 'React'].includes(label)
  return (
    <span
      className={cn(
        'rounded-md px-2.5 py-1 text-xs font-medium',
        accent ? 'bg-accent text-accent-foreground' : 'bg-secondary text-secondary-foreground',
      )}
    >
      {label}
    </span>
  )
}

function ExperimentLinks({ links }: { links: Experiment['links'] }) {
  if (links.length === 0) return null
  return (
    <div className="mt-5 flex flex-wrap items-center gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href="#"
          className={cn(
            'inline-flex items-center gap-1.5 text-sm font-medium transition-colors',
            link.type === 'repo'
              ? 'text-foreground hover:text-primary'
              : 'text-primary hover:text-primary/80',
          )}
        >
          {link.label}
          {link.type === 'demo' && <ExternalLink className="size-3.5" />}
          {link.type === 'repo' && <Code2 className="size-3.5" />}
          {link.type === 'pen' && <ArrowRight className="size-3.5" />}
        </a>
      ))}
    </div>
  )
}

export function ExperimentsSection() {
  const [featured, second, third, archived] = experiments

  return (
    <section id="experiments" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl">
          Experiments
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Playful explorations, technical spikes, and UI micro-interactions. A sandbox where function
          meets unstructured creativity.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {/* Featured — spans 2 columns, split into visual + content */}
        <article className="grid overflow-hidden rounded-2xl border border-border bg-card sm:grid-cols-2 lg:col-span-2">
          <div className="flex min-h-48 items-center justify-center bg-secondary/60 p-8">
            <div className="flex size-16 items-center justify-center rounded-2xl">
              <div className="size-12 rotate-12 rounded-full border-4 border-primary/60" />
              <div className="-ml-6 size-12 -rotate-12 rounded-full border-4 border-primary/40" />
            </div>
          </div>
          <div className="p-6">
            <div className="flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <Tag key={t} label={t} />
              ))}
            </div>
            <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">{featured.title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{featured.description}</p>
            <ExperimentLinks links={featured.links} />
          </div>
        </article>

        {/* Second card */}
        <article className="rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-wrap gap-2">
            {second.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">{second.title}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{second.description}</p>
          <ExperimentLinks links={second.links} />
        </article>

        {/* Third card */}
        <article className="rounded-2xl border border-border bg-card p-6">
          <div className="flex flex-wrap gap-2">
            {third.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">{third.title}</h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">{third.description}</p>
          <ExperimentLinks links={third.links} />
        </article>

        {/* Archived — spans 2 columns, dashed border */}
        <article className="relative rounded-2xl border border-dashed border-border bg-secondary/40 p-6 lg:col-span-2">
          <AudioLines className="absolute right-6 top-6 size-7 text-muted-foreground/50" />
          <div className="flex flex-wrap gap-2">
            {archived.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <h3 className="mt-4 font-serif text-2xl font-bold text-foreground">{archived.title}</h3>
          <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
            {archived.description}
          </p>
        </article>
      </div>
    </section>
  )
}
