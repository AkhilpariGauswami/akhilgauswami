import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, ArrowUpRight, Download } from 'lucide-react'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Get in Touch — Akhilpari Gauswami',
  description:
    'Have a product challenge, a strategic vision, or want to discuss design systems? Get in touch with Akhilpari Gauswami.',
}

const presence = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'Read.cv', href: 'https://read.cv' },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: intro + contact info */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Open to Opportunities
          </span>

          <h1 className="mt-6 font-serif text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty">
            Whether you have a product challenge that needs clarifying, a strategic vision that needs
            execution, or just want to discuss the finer points of design systems, I&apos;d love to
            hear from you.
          </p>

          <div className="mt-12">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Direct Contact
            </h2>
            <a
              href="mailto:hello@akhilpari.com"
              className="mt-4 inline-flex items-center gap-3 text-lg text-foreground transition-colors hover:text-primary"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-secondary">
                <Mail className="size-5" />
              </span>
              hello@akhilpari.com
            </a>
          </div>

          <div className="mt-10">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Digital Presence
            </h2>
            <ul className="mt-4 space-y-3">
              {presence.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                    <ArrowUpRight className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <a
            href="#"
            className="mt-10 inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-secondary"
          >
            <Download className="size-4" />
            Download Resume
          </a>
        </div>

        {/* Right: form */}
        <ContactForm />
      </div>
    </div>
  )
}
