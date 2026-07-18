# Akhilpari Gauswami — Portfolio (React)

React rebuild of the portfolio, based on the new Figma/Stitch design export
(navbar, footer, home hero/projects/experiments, journey page, case study
template, get-in-touch page).

## Latest round of fixes

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
                    House Service — ONE template serves both
    experiments.js  Plutus Bank + Hands of Cards only (the two real,
                    live ones — not the idea-stage ones)
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

- [ ] Real project data in `src/data/projects.js` (KnightCraving content
      exists in the old `case_study_kc.html` — port it over rather than
      rewriting from scratch)
- [ ] House Service case study content (doesn't exist yet anywhere)
- [ ] Journey page — exact dates + the one decision worth telling per milestone
- [ ] Wire Contact form to Formspree/EmailJS (stub is in place)
- [ ] Add `resume.pdf` and real profile/product images — every dashed-border
      box and `Placeholder`-wrapped line in the UI marks a spot that needs one
- [ ] Confirm Playfair Display is actually right by checking the Figma
      source's text panel
