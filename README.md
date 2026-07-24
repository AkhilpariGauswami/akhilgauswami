# Akhilpari Gauswami — Portfolio (React)

React rebuild of the portfolio, based on the new Figma/Stitch design export
(navbar, footer, home hero/projects/experiments, journey page, case study
template, get-in-touch page).

## This pass: compared against the v0/Next.js export, merged the good parts

A parallel `design-system-interface` export (Next.js + TypeScript + shadcn,
generated via v0.app from the same design file) was compared against this
codebase. Verdict: it shipped the design file's fake demo content completely
untouched — "Nexus Enterprise Suite," a fabricated career history at "Tech
Innovators Inc.," and (worth calling out directly) the name spelled two
different ways on the same page: "Akhilpari Gauswami" in the nav, "Akhil Pari
Goswami" in the hero and footer. It also had two real bugs: the nav's
active-state check compared `usePathname()` against a hash-fragment href, so
Projects/Experiments could never highlight (this codebase already avoided
that by using scroll-spy — see below); and its experiments section
destructured a fixed `[featured, second, third, archived]` from the array,
which throws with fewer than 4 items — i.e. with your actual 2.

Kept from this codebase rather than rebuilding on the other stack: the real
project names, the honest `Placeholder` pattern, the bug fixes below, and
the Vite/React Router setup itself (no server-rendering needs here, so
Next.js would be net-new complexity for no real benefit). Ported over: the
idea of per-page SEO titles, which the Next.js version got for free via
`generateMetadata` and this one didn't have — see `useDocumentTitle` below.

**Changes this pass:**

- `data/projects.js`: "House Service" renamed to **LocalLink** (current
  name) — slug, route, and case-study links all updated to match
- KnightCraving: richer one-liner, real tags, and the `v1.0`/`v1.1`/`v1.2`
  version-journey labels filled in (the *labels* are real; what changed in
  each version is still TODO). Added a named key-insight slot for
  **Synchronized Selection** — the actual UX mechanic behind the roadmap —
  since it's the single most distinctive, interview-worthy detail this case
  study has and it wasn't surfaced anywhere before
  - **Fixed a bug this introduced:** the longer `"TODO — <hint>"` strings
    now used throughout `projects.js` weren't getting the dashed-underline
    `Placeholder` treatment, because several spots in `CaseStudy.jsx` checked
    `value === 'TODO'` (exact match only) instead of `.startsWith('TODO')`.
    That would've rendered raw `"TODO — what shipped in..."` as if it were
    finished copy. Consolidated every check in that file onto one
    `isTodo()`/`stripTodo()` helper pair so this can't drift out of sync
    again as more hints get added.
- `data/experiments.js`: real tags for Plutus Bank (Banking, Simulation) and
  Hands of Cards (Multiplayer, Game) — descriptions were already accurate,
  left as-is
- `pages/Journey.jsx`: rebuilt with real milestones — GEC Rajkot →
  FICE (with Microsoft, climate prediction) → CSR Box (AI automation) →
  KnightCraving → LocalLink → EA Product Management certification (Forage,
  **July 2025** — the one date known for certain) → **accepted offer at
  Grumble Info Tech** (Frontend Developer / Jr. Software Engineer, starting
  June 2026). Exact dates for everything else are marked TODO — the shape
  and every named milestone are real, the ordering is a best guess pending
  your confirmation
- `pages/Contact.jsx`: "Whether it's an internship..." → "Whether it's a
  product or frontend role..." — the internship-seeking framing was stale
  now that Grumble Info Tech is accepted; you're targeting PM/UI-UX/frontend
  roles at remote-friendly companies beyond it, per the Journey update above
- New `hooks/useDocumentTitle.js`: sets `document.title` (and meta
  description) per page, restoring the previous value on unmount. This is
  the lightweight equivalent of what Next.js's `generateMetadata` gave the
  other version for free. It does **not** solve per-route social-preview
  (`og:`) tags — that needs actual SSR/prerendering, which is a bigger
  decision (bring in Next.js, or add a prerender step to this Vite setup)
  and wasn't made unilaterally here

**Deliberately not carried over from the Next.js version:** its images
(`project-aura.png`, `project-nexus.png`, etc. — all tied to the fake
projects, not applicable) and its profile photo, which reads as a generic
stock headshot rather than an actual photo of Akhil — worth confirming
either way before it ends up on a live site as-is. Dark mode was also left
out: the other version had the OKLCH token infrastructure for it, but it
wasn't something either build was asked for, so adding it here would've been
a scope decision made on your behalf rather than a fix.

## Earlier round of fixes

- Navbar active-dot bug fixed — Projects/Experiments now use scroll-spy
  (IntersectionObserver) instead of having no active-state logic at all
- Favicon replaced (was the default Vite logo) with a simple indigo
  monogram — swap `public/favicon.svg` for a real logo mark whenever you
  have one
- Hero subtitle rewritten for graduate status (was "4th-year... student")
- Hero visual is now a real placeholder card (photo circle + name + role)
  instead of a plain dashed box — "Product Manager" swapped to "Product
  Engineer" to match your actual positioning, flag it if you wanted the
  literal text
- "Open to internship opportunities" → "Open to opportunities"
- Live Demo button on both the project cards and the case study page
  already toggles on/off — see below

## Stack

- **Vite + React** — no Next.js; this is a static site, doesn't need SSR
- **Tailwind CSS v4** — theme tokens in `src/index.css`, values extracted
  directly from the design SVGs' fill colors
- **React Router v7** — client-side routing across 4 pages
- **Framer Motion** — hero entrance animation, respects `prefers-reduced-motion`
- **lucide-react** — icons

## Running it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run lint      # oxlint
```

## Structure

```
src/
  components/
    layout/     Navbar, Footer (shared across all pages)
    ui/         Button, Tag, Placeholder — reused everywhere
    sections/   ProjectCard, ExperimentCard, Timeline
  pages/
    Home.jsx      Hero fully built; Projects/Experiments render real cards
                  from data, content inside those cards is placeholder
    Journey.jsx   Full timeline UI; reshaped from the design's literal
                  career-ladder template into academic + project milestones
    Contact.jsx   Fully built — form, direct contact, socials, resume link
    CaseStudy.jsx Dynamic route (/work/:slug), full section set incl. a
                  Decision Log the original design didn't have
  data/
    projects.js     Full case-study schema for both KnightCraving and
                    LocalLink — ONE template serves both
    experiments.js  Plutus Bank + Hands of Cards only (the two real,
                    live ones — not the idea-stage ones)
  hooks/
    useDocumentTitle.js  Per-page <title> + meta description
```

## Toggling "Live Demo" on/off

Already wired — no new code needed when a project goes live. In
`data/projects.js`, each project has `links.demo`. Set it to `null` and the
button disappears (both on the homepage card and the case study page); set
it to a real URL and the button appears. Same pattern for `links.repo`.

## What's real vs. placeholder right now

**Built for real:** design tokens, Navbar, Footer, Hero, full Contact page,
routing, and — as of this pass — the *complete UI* for Projects, Experiments,
Journey, and the Case Study template (every section from the design, plus a
Decision Log section the design itself was missing). Any text you see
wrapped in a dashed underline is a placeholder — it's meant to be visually
obvious, not just flagged in a comment.

**Typefaces:** display headings now use Playfair Display (Bold/Black),
swapped in from a visual read of the design files — the old Instrument
Serif doesn't have a bold weight and reads much lighter than what's in these
mockups. Body (Epilogue) and labels (JetBrains Mono) carry over unchanged.
This is a best-effort match from outlined vector text, not a certainty — the
Figma source's text panel will confirm the exact name if you want to check.

**Still placeholder, intentionally:** every specific fact — project
descriptions, tags, stack, role/timeline, decision log entries, results,
Journey dates and milestones beyond the known shape. The design file this
was built from ships with generic SaaS placeholder content (fake company
names, a fake career history, a project called "Project Nexus") — none of
it is Akhil's real content, so none of it was carried into the code.

## Known TODOs

- [ ] KnightCraving case-study narrative — problem/research/decision
      log/results still TODO; content exists in the old `case_study_kc.html`,
      port it over rather than rewriting from scratch. The `v1.0`/`v1.1`/`v1.2`
      labels and the Synchronized Selection mechanic are already real —
      the *why* behind each is what's missing
- [ ] LocalLink case study content (doesn't exist yet anywhere)
- [ ] Journey page — exact dates for every milestone, and confirm the
      ordering (FICE vs. CSR Box vs. the two projects isn't confirmed
      chronological, just the order the facts were given in)
- [ ] Journey intro paragraph — a real starting draft is in place
      ("Visionary Orchestrator"-based) but it's a hint to rewrite in your
      own voice, not finished copy
- [ ] Wire Contact form to Formspree/EmailJS (stub is in place)
- [ ] Add `resume.pdf` and real profile/product images — every dashed-border
      box and `Placeholder`-wrapped line in the UI marks a spot that needs one
- [ ] Real social links — LinkedIn and Read.cv are still `/TODO`
- [ ] Confirm Playfair Display is actually right by checking the Figma
      source's text panel
- [ ] Decide on dark mode / dropping it — infrastructure exists in the
      compared Next.js version if wanted later, not built here
