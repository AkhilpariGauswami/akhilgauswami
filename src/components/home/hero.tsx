import Link from 'next/link'
import Image from 'next/image'

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-balance text-foreground md:text-6xl lg:text-7xl">
            i dont just build, i figure out what to build
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Product-minded software engineer and designer dedicated to building intentional digital
            experiences.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#projects"
              className="inline-flex items-center rounded-xl bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </Link>
            <Link
              href="/#experiments"
              className="inline-flex items-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Explore Experiments
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border bg-secondary/60 shadow-[0_30px_60px_-30px_rgba(30,27,75,0.25)]">
            <div className="flex items-center justify-between border-b border-border/70 px-6 py-4">
              <div className="flex items-center gap-6 text-sm">
                <span className="text-muted-foreground">Dashboard</span>
                <span className="border-b-2 border-foreground pb-3 font-medium text-foreground">
                  Home
                </span>
              </div>
              <span className="size-6 rounded-full bg-foreground/80" aria-hidden="true" />
            </div>
            <div className="flex flex-col items-center px-6 py-12">
              <div className="rounded-full bg-gradient-to-b from-accent to-background p-2 ring-1 ring-border">
                <Image
                  src="/images/profile.png"
                  alt="Portrait of Akhil Pari Goswami"
                  width={180}
                  height={180}
                  className="size-40 rounded-full object-cover md:size-44"
                  priority
                />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">Akhil Pari Goswami</h2>
              <p className="mt-1 text-sm text-muted-foreground">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
