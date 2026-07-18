// GitHub URL intentionally NOT updated to "Gauswami" — this is the actual
// account username, a technical identifier, not display text. Changing it
// here would just break the link unless the GitHub account itself is also
// renamed. Confirm the real username before touching this.
const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/TODO' },
  { label: 'GitHub', href: 'https://github.com/AkhilpariGoswami' },
  { label: 'Read.cv', href: 'https://read.cv/TODO' },
  { label: 'Email', href: 'mailto:hello@akhilpari.com' },
];

export default function Footer() {
  // Dynamic year on purpose: the copyright line has gone stale in every
  // previous build (2025 left in the HTML version, 2024 baked into this
  // new design file) — computing it removes that bug permanently.
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-2 bg-surface">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-8 py-10 md:flex-row md:items-center">
        <p className="font-mono text-xs uppercase tracking-wide text-muted">
          Built with intent, not just code.{' '}
          <span className="text-muted-2">© {year} Akhilpari Gauswami</span>
        </p>

        <div className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-body text-sm text-body transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
