import { projects } from '@/data/projects'
import { Seo } from '@/components/layout/Seo'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProjectsGrid } from '@/components/projects/ProjectCard'
import { Reveal } from '@/components/animations/Reveal'

export function Projects() {
  return (
    <div>
      <Seo
        path="/projects"
        title="Projects"
        description="Selected work across AI, machine learning, backend systems, and security-oriented problem solving."
      />
      <PageHeader
        kicker="Projects"
        title={<>Selected Work</>}
        description="These projects represent practical work across AI, machine learning, backend systems, and security-oriented problem solving â€” built to work, not just to demonstrate."
      />

      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <ProjectsGrid projects={projects} className="lg:grid-cols-1 xl:grid-cols-3" />

          <Reveal delay={0.1} className="mt-10">
            <div className="card-surface rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-xl font-semibold">How these projects are documented</h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    Each project page walks through the problem, the approach, and the 
                    architecture. Where details are still being finalized â€” like SIM Swap 
                    specifics â€” the pages say so instead of guessing, and they&apos;ll be 
                    updated as the work stabilizes. The source repositories will be linked 
                    once they&apos;re verified and published.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}