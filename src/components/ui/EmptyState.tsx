import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

type EmptyStateProps = {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

/** Empty state shown when content is intentionally not configured yet. */
export function EmptyState({ icon: Icon, title, description, className }: EmptyStateProps) {
  return (
    <div className={cn('flex items-start gap-4 rounded-xl border border-dashed border-white/12 bg-white/[0.02] p-5', className)}>
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04]">
        <Icon className="h-4 w-4 text-ink-faint" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-medium text-ink">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{description}</p>
      </div>
    </div>
  )
}