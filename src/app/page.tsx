import { Hero } from '@/components/home/hero'
import { ProjectsSection } from '@/components/home/projects-section'
import { ExperimentsSection } from '@/components/home/experiments-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <ExperimentsSection />
    </>
  )
}
