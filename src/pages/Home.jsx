import { motion } from 'framer-motion';
import { ArrowRight, User } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectCard from '../components/sections/ProjectCard';
import ExperimentCard from '../components/sections/ExperimentCard';
import { projects } from '../data/projects';
import { experiments } from '../data/experiments';

export default function Home() {
  return (
    <>
      <Hero />

      <section id="projects" className="mx-auto max-w-[1200px] px-8 py-24">
        <h2 className="font-display text-4xl font-bold italic text-ink">Projects</h2>
        <p className="mt-3 max-w-lg font-body text-body">
          Two projects, written up as decisions rather than feature lists.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="experiments" className="mx-auto max-w-[1200px] px-8 py-24">
        <h2 className="font-display text-4xl font-bold italic text-ink">Experiments</h2>
        <p className="mt-3 max-w-lg font-body text-body">
          Smaller, faster explorations — built to learn one specific thing, not to ship.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {experiments.map((experiment) => (
            <ExperimentCard key={experiment.slug} experiment={experiment} />
          ))}
        </div>
      </section>
    </>
  );
}

function Hero() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-16 px-8 py-20 md:grid-cols-2 md:py-28">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full bg-tint px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-wide text-primary">
            Open to opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl font-black italic leading-[1.05] text-ink md:text-6xl"
        >
          i don't just build,
          <br /> i figure out what to build
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-md font-body text-lg text-body"
        >
          AI &amp; Data Science engineer, GEC Rajkot — building products end
          to end and writing up the decisions behind them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <Button href="#projects" icon={ArrowRight}>
            View Projects
          </Button>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="flex aspect-[4/3] flex-col items-center justify-center gap-5 rounded-3xl border border-border-2 bg-white p-10 shadow-sm"
      >
        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-surface-3 to-surface">
          <User size={48} strokeWidth={1.5} className="text-muted-2" />
        </div>
        <div className="text-center">
          <p className="font-body text-lg font-semibold text-ink">Akhilpari Gauswami</p>
          {/* Design file said "Product Manager" — swapped for your actual
              positioning elsewhere on the site. Say the word if you want
              the literal text back. */}
          <p className="font-body text-sm text-muted">Product Engineer</p>
        </div>
      </motion.div>
    </section>
  );
}
