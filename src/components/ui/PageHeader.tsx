import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Reveal } from '@/components/animations/Reveal'

type PageHeaderProps = {
  kicker: string
  title: ReactNode
  description?: ReactNode
  className?: string
}

export function PageHeader({ kicker, title, description, className }: PageHeaderProps) {
  return (
    <section className={cn('bg-glow-top pb-4 pt-12 sm:pt-14', className)}>
      <div className="container-page">
        <Reveal>
          <p className="label-kicker mb-4">{kicker}</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}