import Link from 'next/link'
import { socialLinks } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <p className="flex items-center gap-2 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground md:text-left">
          Built with intent, not just code.
          <span className="inline-block size-2.5 rounded-sm bg-foreground" aria-hidden="true" />
          2024 Akhil Pari Goswami
        </p>
        <nav className="flex items-center gap-6">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
