import { CalendarDays, Trophy, Users, Lightbulb } from 'lucide-react'
import { achievementGroups } from '@/data/achievements'
import { Seo } from '@/components/layout/Seo'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/animations/Reveal'

const groupMeta: Record<
  string,
  { icon: typeof Trophy; accent: string }
> = {
  hackathons: { icon: Trophy, accent: '#6d8dff' },
  leadership: { icon: Users, accent: '#8b7bff' },
  clubs: { icon: Lightbulb, accent: '#8aa2ff' },
}

export function Achievements() {
  return (
    <div>
      <Seo
        path="/achievements"
        title="Achievements"
        description="Hackathons, event leadership, and campus involvement â€” documented extracurricular experience."
      />
      <PageHeader
        kicker="Achievements"
        title="Extracurricular work, documented honestly."
        description="Hackathon participation, event leadership, and campus roles that shaped how I work with teams."
      />

      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page space-y-12">
          {achievementGroups.map((group) => {
            const meta = groupMeta[group.id] ?? groupMeta['hackathons']
            const Icon = meta.icon
            return (
              <div key={group.id}>
                <Reveal>
                  <div className="flex items-center gap-4">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border"
                      style={{ borderColor: `${meta.accent}44`, backgroundColor: `${meta.accent}18` }}
                    >
                      <Icon className="h-6 w-6" style={{ color: meta.accent }} aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-semibold">{group.title}</h2>
                      <p className="mt-1 max-w-2xl text-sm leading-relaxed text-ink-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </Reveal>

                <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((item, ii) => (
                    <Reveal key={item.name} delay={ii * 0.05}>
                      <div
                        className="card-surface card-hover h-full p-6"
                        style={{ borderTopColor: `${meta.accent}33`, borderTopWidth: 1 }}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="text-base font-medium text-ink">{item.name}</h3>
                          <span
                            className="mt-0.5 font-mono text-[10px] uppercase tracking-widest"
                            style={{ color: meta.accent }}
                          >
                            {group.id === 'hackathons' ? '02' : group.id === 'leadership' ? '01' : '03'}
                          </span>
                        </div>
                        <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-muted">
                          <CalendarDays className="h-3.5 w-3.5 opacity-60" aria-hidden="true" />
                          {item.detail}
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
    </div>
  )
}