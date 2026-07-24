import type { Metadata } from 'next'
import { journey } from '@/lib/data'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'My Journey — Akhilpari Gauswami',
  description:
    'A chronological mapping of my growth, bridging product strategy with technical execution across various roles and disciplines.',
}

function JourneyCard({ entry, first }: { entry: (typeof journey)[number]; first?: boolean }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-[0_20px_40px_-30px_rgba(30,27,75,0.35)] md:p-7">
      <h2 className="font-serif text-2xl font-bold leading-tight text-foreground md:text-3xl">
        {entry.role}
      </h2>
      <p className="mt-1 text-foreground/80">{entry.company}</p>
      <ul className={cn('mt-4 space-y-3', first ? '' : 'list-disc pl-5')}>
        {entry.points.map((point) => (
          <li key={point} className="leading-relaxed text-muted-foreground">
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function JourneyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <header className="text-center">
        <h1 className="font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          My Journey
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          A chronological mapping of my growth, bridging product strategy with technical execution
          across various roles and disciplines.
        </p>
      </header>

      <div className="relative mt-16 md:mt-20">
        {/* Center line (desktop) / left line (mobile) */}
        <div className="absolute left-4 top-2 h-full w-px bg-border md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-20">
          {journey.map((entry, i) => {
            const isLeft = i % 2 === 1 // alternate: first on right
            return (
              <div
                key={entry.role}
                className="relative grid gap-4 pl-12 md:grid-cols-2 md:items-center md:gap-12 md:pl-0"
              >
                {/* Dot */}
                <span
                  className={cn(
                    'absolute left-4 top-2 size-3.5 -translate-x-1/2 rounded-full border-2 md:left-1/2',
                    i === 0
                      ? 'border-primary bg-primary'
                      : 'border-muted-foreground/50 bg-background',
                  )}
                  aria-hidden="true"
                />

                {isLeft ? (
                  <>
                    <div className="md:pr-4 md:text-right">
                      <JourneyCard entry={entry} first={i === 0} />
                    </div>
                    <p className="text-sm font-medium text-muted-foreground md:pl-4">
                      {entry.period}
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className={cn(
                        'text-sm font-medium md:order-1 md:pr-4 md:text-right',
                        i === 0 ? 'text-primary' : 'text-muted-foreground',
                      )}
                    >
                      {entry.period}
                    </p>
                    <div className="md:order-2 md:pl-4">
                      <JourneyCard entry={entry} first={i === 0} />
                    </div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
