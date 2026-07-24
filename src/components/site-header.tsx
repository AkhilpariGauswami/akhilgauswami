'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experiments', href: '/#experiments' },
  { label: 'Journey', href: '/journey' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav className="flex items-center justify-between rounded-2xl border border-border/70 bg-secondary/70 px-6 py-3 backdrop-blur-md">
          <Link
            href="/"
            className="font-serif text-xl font-bold tracking-tight text-foreground md:text-2xl"
          >
            Akhilpari Gauswami
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active =
                item.href === '/' ? pathname === '/' : pathname + '' === item.href
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground',
                    active && 'text-primary',
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-1 text-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/70 bg-secondary/90 p-3 backdrop-blur-md md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-background hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-primary-foreground"
            >
              Get in Touch
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
