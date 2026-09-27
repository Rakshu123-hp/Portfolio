import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Github, Globe, Check } from 'lucide-react'
import type { Project } from '@/data/projects'
import { Reveal } from '@/components/animations/Reveal'
import { Badge } from '@/components/ui/Badge'
import { EmptyState } from '@/components/ui/EmptyState'
import { ProjectArtwork } from '@/components/ui/ProjectArtwork'
import { LiveDemoButton } from '@/components/projects/LiveDemoButton'
import { cn } from '@/utils/cn'

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="bg-glow-top pb-6 pt-10 sm:pt-16">
      <div className="container-page">
        <Reveal>
          <Link
            to="/projects"
            className="link-underline inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            All Projects
          </Link>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-2">
                {project.badges?.map((badge) => (
                  <Badge key={badge.label} tone={badge.tone}>
                    {badge.label}
                  </Badge>
                ))}
                <Badge tone={badgeToneFor(project.status)} dot>
                  {project.status}
                </Badge>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl">
                {project.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {project.description}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-ink-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-7 grid max-w-md grid-cols-2 gap-4">
                <ProjectMeta label="Category" value={project.category} />
                <ProjectMeta label="Role" value={project.role} />
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-ink transition-all hover:border-accent/40 hover:-translate-y-0.5"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" /> View Code
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-xl border border-dashed border-white/12 bg-white/[0.02] px-5 py-2.5 text-sm text-ink-faint">
                    <Github className="h-4 w-4" aria-hidden="true" /> Repository link coming soon
                  </span>
                )}
                <LiveDemoButton project={project} />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="relative hidden aspect-square overflow-hidden rounded-3xl border border-white/10 bg-surface-900/60 shadow-lift lg:block">
              <ProjectArtwork accent={project.accent} seed={9} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function badgeToneFor(status: string) {
  const s = status.toLowerCase()
  if (s.includes('progress')) return 'warning' as const
  if (s.includes('completed')) return 'success' as const
  return 'neutral' as const
}

function ProjectMeta({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.07] bg-surface-800/60 p-4">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">{label}</p>
      <p className="mt-1 text-sm font-medium text-ink">{value}</p>
    </div>
  )
}

export function ProjectSection({
  id,
  title,
  intro,
  children,
  alt,
}: {
  id?: string
  title: string
  intro?: ReactNode
  children?: ReactNode
  alt?: boolean
}) {
  return (
    <section
      id={id}
      className={cn('py-10 sm:py-14', alt ? 'border-b border-white/[0.05]' : '')}
    >
      <div className="container-page">
        <Reveal>
          <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        </Reveal>
        {intro && (
          <Reveal delay={0.05}>
            <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-ink-muted">
              {intro}
            </div>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  )
}

export function TechStackList({ technologies }: { technologies: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {technologies.map((tech, i) => (
        <Reveal key={tech} delay={i * 0.04}>
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-surface-800/60 p-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/25 bg-accent/10">
              <Check className="h-4 w-4 text-accent-300" aria-hidden="true" />
            </span>
            <span className="font-mono text-sm text-ink">{tech}</span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export function DetailEmptyState({
  icon,
  title,
  description,
}: {
  icon?: typeof Globe
  title: string
  description: string
}) {
  return (
    <Reveal>
      <EmptyState icon={icon ?? Globe} title={title} description={description} />
    </Reveal>
  )
}

export function NextProjects({ current, all }: { current: Project; all: Project[] }) {
  const others = all.filter((p) => p.id !== current.id)
  return (
    <section className="border-t border-white/[0.05] py-14">
      <div className="container-page">
        <p className="label-kicker mb-6">More Projects</p>
        <div className="grid gap-5 sm:grid-cols-2">
          {others.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <Link
                to={`/projects/${p.slug}`}
                className="card-surface card-hover group flex items-center justify-between gap-4 p-6"
              >
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                    {p.category}
                  </p>
                  <h3 className="mt-1.5 text-lg font-semibold text-ink group-hover:text-accent-300">
                    {p.title}
                  </h3>
                </div>
                <ArrowRight
                  className="h-5 w-5 shrink-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}