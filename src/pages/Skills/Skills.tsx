import { Code2, Server, BarChart3, BrainCircuit, ArrowRight, Layers } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillCategories } from '@/data/skills'
import { Seo } from '@/components/layout/Seo'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/animations/Reveal'
import { Button } from '@/components/ui/Button'

const categoryMeta: Record<string, { icon: LucideIcon; accent: string }> = {
  'programming-data': { icon: Code2, accent: '#6d8dff' },
  'backend-apis': { icon: Server, accent: '#8b7bff' },
  'data-viz': { icon: BarChart3, accent: '#8aa2ff' },
  'ai-ml': { icon: BrainCircuit, accent: '#a8baff' },
}

const practices = [
  {
    title: 'Learn by building',
    text: 'Every skill here was picked up while solving an actual problem â€” a dataset, an API, a pipeline.',
  },
  {
    title: 'No magic percentages',
    text: 'Rather than claim a level I canâ€™t defend, I prefer to show the work those skills were used in.',
  },
  {
    title: 'Foundations matter',
    text: 'Data cleaning and validation sit right next to neural networks because the pipeline is only as strong as its weakest stage.',
  },
]

export function Skills() {
  return (
    <div>
      <Seo
        path="/skills"
        title="Skills"
        description="Skills in programming, backend development, data analytics, and AI/ML â€” built through coursework, internships, and projects."
      />
      <PageHeader
        kicker="Skills"
        title="A toolkit built through real work."
        description="Technologies I use across programming, backend systems, data analytics, and AI/ML â€” shown plainly, without inflated rankings."
      />

      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page space-y-10">
          {skillCategories.map((category) => {
            const meta = categoryMeta[category.id] ?? categoryMeta['programming-data']
            const Icon = meta.icon
            return (
              <div
                key={category.id}
                className="grid gap-6 lg:grid-cols-[0.9fr_1.6fr] lg:gap-12"
              >
                <Reveal>
                  <div>
                    <span
                      className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border"
                      style={{ borderColor: `${meta.accent}44`, backgroundColor: `${meta.accent}18` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: meta.accent }} aria-hidden="true" />
                    </span>
                    <h2 className="mt-5 text-2xl font-semibold">{category.title}</h2>
                    <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
                      {category.description}
                    </p>
                  </div>
                </Reveal>

                <div className="grid gap-4 sm:grid-cols-2">
                  {category.skills.map((skill, si) => (
                    <Reveal key={skill.name} delay={si * 0.05}>
                      <div className="card-surface card-hover group h-full p-5">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[11px] text-ink-faint">
                            {String(si + 1).padStart(2, '0')}
                          </span>
                          <Layers
                            className="h-4 w-4 text-ink-faint opacity-0 transition-all duration-300 group-hover:opacity-100"
                            style={{ color: meta.accent }}
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="mt-2 text-base font-medium text-ink">{skill.name}</h3>
                        <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">
                          {skill.note}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* How I approach technology */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            kicker="Approach"
            title="How I think about technology."
          />
          <div className="mt-8 sm:mt-10 grid gap-5 md:grid-cols-3">
            {practices.map((practice, i) => (
              <Reveal key={practice.title} delay={i * 0.06}>
                <div className="card-surface card-hover h-full p-7">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-medium text-ink">{practice.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{practice.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-8 sm:mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-surface-800/60 p-6 sm:p-8">
              <div>
                <h3 className="text-lg font-medium text-ink">Want the detail behind the tools?</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  The projects page shows exactly where these technologies got used.
                </p>
              </div>
              <Button to="/projects" iconRight={ArrowRight}>
                View Projects
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}