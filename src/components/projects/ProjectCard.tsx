import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderKanban } from 'lucide-react'
import type { Project } from '@/data/projects'
import { cn } from '@/utils/cn'
import { Badge } from '@/components/ui/Badge'
import { ProjectArtwork } from '@/components/ui/ProjectArtwork'
import { Reveal } from '@/components/animations/Reveal'
import { LiveDemoButton } from '@/components/projects/LiveDemoButton'

type ProjectCardProps = {
  project: Project
  seed?: number
  delay?: number
}

export function ProjectCard({ project, seed, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      {/*
        The card is a container with a stretched link so that the "Live Demo"
        button can be a real anchor without nesting anchors (invalid HTML).
      */}
      <div className="card-surface card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="relative h-44 overflow-hidden rounded-xl border border-white/[0.07] bg-surface-900 sm:h-52">
          <ProjectArtwork
            accent={project.accent}
            variant={seed !== undefined && seed % 2 === 0 ? 'circuit' : 'network'}
            seed={seed ?? project.id.length + 7}
          />
          <span
            className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/12 bg-surface-950/80 backdrop-blur"
          >
            <FolderKanban className="h-4 w-4 text-ink-muted transition-colors group-hover:text-accent-300" strokeWidth={2} />
          </span>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {project.badges?.map((badge) => (
            <Badge key={badge.label} tone={badge.tone}>
              {badge.label}
            </Badge>
          ))}
          <Badge tone="neutral">{project.category}</Badge>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-ink transition-colors group-hover:text-accent-300 sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {project.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
            View Project
            <ArrowUpRight
              className="h-4 w-4 text-ink-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
          </span>
          <LiveDemoButton project={project} size="sm" className="relative z-20" />
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="focus-ring absolute inset-0 z-10 rounded-2xl"
          aria-label={`View project: ${project.title}`}
        >
          <span className="sr-only">View Project</span>
        </Link>
      </div>
    </Reveal>
  )
}

export function ProjectsGrid({
  projects,
  className,
}: {
  projects: Project[]
  className?: string
}) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 lg:grid-cols-3', className)}>
      {projects.map((project, i) => (
        <ProjectCard key={project.id} project={project} seed={i} delay={i * 0.08} />
      ))}
    </div>
  )
}