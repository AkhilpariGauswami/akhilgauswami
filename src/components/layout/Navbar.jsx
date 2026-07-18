import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';

// NOTE: the design file (navbar.svg) had "Home" as a nav link, which the
// audited/approved IA already removed (logo does that job) — fixed here.
// The wordmark spelling ("Gauswami") was confirmed correct by Akhil directly
// — not a typo, despite the design/audit history suggesting otherwise.
const NAV_LINKS = [
  { label: 'Projects', href: '/#projects', sectionId: 'projects' },
  { label: 'Experiments', href: '/#experiments', sectionId: 'experiments' },
  { label: 'Journey', to: '/journey' },
];

const SECTION_IDS = ['projects', 'experiments'];

// Bug fix: Projects/Experiments are anchor links, not routes, so
// react-router's NavLink (which only Journey used) had nothing to compare
// against and never lit up. This tracks scroll position on the home page
// instead, so all three links share one active-state source of truth.
function useActiveSection(enabled) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!enabled) {
      setActiveId(null);
      return;
    }

    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [enabled]);

  return activeId;
}

function NavItem({ link, isActive }) {
  const classes = [
    'relative font-body text-[15px] transition-colors after:absolute after:-bottom-2 after:left-1/2',
    'after:h-1 after:w-1 after:-translate-x-1/2 after:rounded-full after:bg-primary after:transition-opacity',
    isActive ? 'text-ink after:opacity-100' : 'text-body hover:text-ink after:opacity-0',
  ].join(' ');

  if (link.to) {
    return (
      <Link to={link.to} className={classes}>
        {link.label}
      </Link>
    );
  }

  return (
    <a href={link.href} className={classes}>
      {link.label}
    </a>
  );
}

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const activeSectionId = useActiveSection(isHome);

  return (
    <header className="sticky top-0 z-50 w-full py-6">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between rounded-2xl border border-border/30 bg-surface/70 px-8 py-4 backdrop-blur-md"
        aria-label="Primary"
      >
        <Link to="/" className="font-display text-xl font-bold italic text-ink">
          Akhilpari Gauswami
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.to
              ? location.pathname === link.to
              : isHome && activeSectionId === link.sectionId;
            return <NavItem key={link.label} link={link} isActive={isActive} />;
          })}
        </div>

        <Button to="/contact" size="sm">
          Get in Touch
        </Button>
      </nav>
    </header>
  );
}
