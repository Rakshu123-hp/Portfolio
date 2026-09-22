import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type ValidTag = 'div' | 'section' | 'li' | 'span'

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: ValidTag
  once?: boolean
}

const tags: Record<ValidTag, 'div' | 'section' | 'li' | 'span'> = {
  div: 'div',
  section: 'section',
  li: 'li',
  span: 'span',
}

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = 'div',
  once = true,
}: RevealProps) {
  const prefersReduced = useReducedMotion()
  const MotionTag = motion[tags[as]]

  return (
    <MotionTag
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </MotionTag>
  )
}