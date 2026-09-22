import { GraduationCap } from 'lucide-react'
import { education } from '@/data/education'
import { Seo } from '@/components/layout/Seo'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/animations/Reveal'
import { Badge } from '@/components/ui/Badge'

export function Education() {
  return (
    <div>
      <Seo
        path="/education"
        title="Education"
        description="Education â€” B.E. Data Science at MVJ College of Engineering, Bangalore, and a Diploma in Computer Science at Siddaganga Polytechnic, Tumkur."
      />
      <PageHeader
        kicker="Education"
        title="The academic path behind the work."
        description="A Data Science degree in progress, built on a solid polytechnic foundation in computer science."
      />

      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <div className="relative mx-auto max-w-3xl">
            <span
              className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-violet/40 via-white/10 to-transparent"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {education.map((entry, i) => (
                <Reveal key={entry.id} delay={i * 0.08}>
                  <article className="relative pl-16 sm:pl-20">
                    <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-violet/30 bg-violet/10">
                      <GraduationCap className="h-5 w-5 text-violet-400" aria-hidden="true" />
                    </span>

                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="violet">{entry.note ?? entry.type}</Badge>
                      <span className="font-mono text-xs text-ink-faint">{entry.period}</span>
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold text-ink">{entry.degree}</h2>
                    <p className="mt-1.5 text-sm text-ink-muted">
                      {entry.institution}, {entry.location}
                    </p>

                    <div className="card-surface mt-6 p-6 sm:p-7">
                      <h3 className="text-sm font-semibold text-ink">
                        {entry.type === 'degree' ? 'Relevant coursework' : 'Relevant areas'}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {entry.highlights.map((h) => (
                          <span
                            key={h}
                            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-ink"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.1} className="mt-10">
            <div className="mx-auto max-w-3xl rounded-2xl border border-white/[0.07] bg-surface-800/60 p-6 sm:p-7">
              <p className="text-sm leading-relaxed text-ink-muted">
                This path â€” polytechnic computing followed by a Data Science degree â€” is exactly
                why my approach is practical first: I learned to build full-stack features, wire up
                networks, and write code that runs before I started training models.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}