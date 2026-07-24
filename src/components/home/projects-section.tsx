'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { Search, ChevronDown } from 'lucide-react'
import { projects, projectCategories, type Project } from '@/lib/data'

function StatusBadge({ status }: { status: Project['status'] }) {
  const live = status === 'Live'
  return (
    <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground shadow-sm backdrop-blur">
      <span
        className={`size-1.5 rounded-full ${live ? 'bg-primary' : 'border border-muted-foreground'}`}
        aria-hidden="true"
      />
      {status}
    </span>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-[0_20px_40px_-24px_rgba(30,27,75,0.35)]">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={project.image || '/placeholder.svg'}
          alt={`${project.title} preview`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <StatusBadge status={project.status} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-2xl font-bold text-foreground">{project.title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Case Study
          </Link>
          {project.hasLiveDemo && (
            <Link
              href="#"
              className="inline-flex items-center rounded-xl border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All Categories')

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesQuery =
        query.trim() === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      const matchesCategory =
        category === 'All Categories' ||
        p.category === category ||
        p.tags.includes(category)
      return matchesQuery && matchesCategory
    })
  }, [query, category])

  return (
    <section id="projects" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            Projects
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            A curated selection of case studies detailing product strategy, technical execution, and
            the outcomes achieved.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full rounded-xl border border-border bg-background py-2.5 pl-9 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary sm:w-64"
            />
          </div>
          <div className="relative">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              aria-label="Filter by category"
              className="w-full cursor-pointer appearance-none rounded-xl border border-border bg-background py-2.5 pl-4 pr-10 text-sm text-foreground outline-none transition-colors focus:border-primary"
            >
              {projectCategories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-muted-foreground">
          No projects match your search.
        </p>
      )}
    </section>
  )
}
