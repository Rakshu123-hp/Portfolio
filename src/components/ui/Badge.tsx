import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

export type BadgeTone = 'accent' | 'violet' | 'neutral' | 'success' | 'warning'

const tones: Record<BadgeTone, string> = {
  accent: 'border-accent/30 bg-accent/10 text-accent-300',
  violet: 'border-violet/30 bg-violet/10 text-violet-400',
  neutral: 'border-white/10 bg-white/[0.05] text-ink-muted',
  success: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300',
  warning: 'border-amber-400/25 bg-amber-400/10 text-amber-300',
}

type BadgeProps = {
  children: ReactNode
  tone?: BadgeTone
  icon?: LucideIcon
  className?: string
  dot?: boolean
}

export function Badge({ children, tone = 'neutral', icon: Icon, className, dot }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em]',
        tones[tone],
        className,
      )}
    >
      {dot && (
        <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" aria-hidden="true" />
      )}
      {Icon && <Icon className="h-3 w-3" strokeWidth={2} aria-hidden="true" />}
      {children}
    </span>
  )
}