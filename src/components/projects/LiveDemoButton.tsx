import { Globe } from 'lucide-react'
import type { Project } from '@/data/projects'
import { cn } from '@/utils/cn'

type LiveDemoButtonProps = {
  project: Project
  size?: 'sm' | 'md'
  className?: string
}

const sizes = {
  sm: 'px-3.5 py-1.5 text-[13px]',
  md: 'px-5 py-2.5 text-sm',
} as const

/**
 * Live demo control for a project.
 * - When `project.liveDemo` is set it renders a real external link.
 * - When it is null it renders a disabled, clearly labelled placeholder so every
 *   project still shows the option without pointing at a dead URL.
 */
export function LiveDemoButton({ project, size = 'md', className }: LiveDemoButtonProps) {
  if (!project.liveDemo) {
    return (
      <span
        aria-disabled="true"
        title="Live demo will be linked once it is deployed"
        className={cn(
          'inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-white/12 bg-white/[0.02] font-medium text-ink-faint',
          sizes[size],
          className,
        )}
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        Live Demo
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] opacity-80">
          soon
        </span>
      </span>
    )
  }

  return (
    <a
      href={project.liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      title={`Open the ${project.title} live demo`}
      className={cn(
        'focus-ring inline-flex items-center gap-2 rounded-xl border border-accent/40 bg-accent/10 font-medium text-accent-300 transition-all hover:bg-accent/15 hover:-translate-y-0.5',
        sizes[size],
        className,
      )}
    >
      <Globe className="h-4 w-4" aria-hidden="true" />
      Live Demo
    </a>
  )
}
