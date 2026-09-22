import { BadgeCheck, Building2, CalendarDays, MapPin } from 'lucide-react'
import { experience } from '@/data/experience'
import { Seo } from '@/components/layout/Seo'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/animations/Reveal'
import { Badge } from '@/components/ui/Badge'

export function Experience() {
  return (
    <div>
      <Seo
        path="/experience"
        title="Experience"
        description="Experience â€” Python internship at EmbeddedFru covering data processing, cleaning, SQL queries, and workflow automation."
      />
      <PageHeader
        kicker="Experience"
        title="Where I've put the fundamentals to work."
        description="Hands-on work that turned classroom Python, SQL, and OOP knowledge into real data pipeline experience."
      />

      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <div className="relative mx-auto max-w-3xl">
            <span
              className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent"
              aria-hidden="true"
            />
            <div className="space-y-10">
              {experience.map((role, i) => (
                <Reveal key={role.id} delay={i * 0.08}>
                  <article className="relative pl-16 sm:pl-20">
                    <span className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                      <span className="font-mono text-xs text-accent-300">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </span>

                    <div className="flex flex-wrap items-center gap-2">
                      <Badge tone="accent">{role.type}</Badge>
                      <span className="inline-flex items-center gap-1.5 text-xs text-ink-faint">
                        <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                        {role.period}
                      </span>
                    </div>

                    <h2 className="mt-4 text-2xl font-semibold text-ink">{role.title}</h2>
                    <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-ink-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <Building2 className="h-4 w-4" aria-hidden="true" />
                        {role.organization}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {role.location}
                      </span>
                    </div>

                    <div className="card-surface mt-6 p-6 sm:p-7">
                      <h3 className="text-sm font-semibold text-ink">What I did</h3>
                      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-sm leading-relaxed text-ink-muted marker:text-accent/60">
                        {role.responsibilities.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>

                      <div className="mt-6 border-t border-white/[0.06] pt-5">
                        <h3 className="flex items-center gap-2 text-sm font-semibold text-ink">
                          <BadgeCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                          Certificates earned
                        </h3>
                        <ul className="mt-3 space-y-1.5">
                          {role.certificates.map((c) => (
                            <li key={c} className="text-sm text-ink-muted">
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}