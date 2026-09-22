import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Reveal } from '@/components/animations/Reveal'

type SectionHeadingProps = {
  kicker?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {kicker && <p className="label-kicker mb-4">{kicker}</p>}
      <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">{description}</p>
      )}
    </Reveal>
  )
}