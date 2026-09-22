import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'md' | 'lg' | 'sm'

type BaseProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  icon?: LucideIcon
  iconRight?: LucideIcon
  className?: string
  disabled?: boolean
  title?: string
  ariaLabel?: string
}

type ButtonAsLinkProps = BaseProps & {
  to: string
  href?: never
  type?: never
  onClick?: () => void
}

type ButtonAsAnchorProps = BaseProps & {
  href: string
  to?: never
  type?: never
  target?: string
  rel?: string
  download?: boolean
  onClick?: () => void
}

type ButtonAsButtonProps = BaseProps & {
  to?: never
  href?: never
  type?: 'button' | 'submit'
  onClick?: () => void
}

export type ButtonProps = ButtonAsLinkProps | ButtonAsAnchorProps | ButtonAsButtonProps

const base =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 select-none whitespace-nowrap'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-b from-accent-400 to-accent-600 text-white shadow-[0_8px_24px_-8px_rgba(109,141,255,0.55)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(109,141,255,0.65)] active:translate-y-0 disabled:from-surface-600 disabled:to-surface-600 disabled:text-ink-faint disabled:shadow-none disabled:hover:translate-y-0',
  secondary:
    'border border-white/12 bg-white/[0.04] text-ink hover:border-accent/40 hover:bg-white/[0.07] hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0',
  outline:
    'border border-accent/40 text-accent-300 hover:border-accent hover:bg-accent/10 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50',
  ghost: 'text-ink-muted hover:text-ink hover:bg-white/[0.05] disabled:opacity-50',
}

const sizes: Record<Size, string> = {
  sm: 'px-3.5 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-[15px]',
}

function SparkleIcon({ icon: Icon, side }: { icon?: LucideIcon; side?: 'left' | 'right' }) {
  if (!Icon) return null
  return (
    <Icon
      className={cn('h-4 w-4', side === 'right' && 'opacity-80')}
      strokeWidth={2}
      aria-hidden="true"
    />
  )
}

export function ButtonInternal(props: ButtonProps) {
  const prefersReduced = useReducedMotion()
  const {
    children,
    variant = 'primary',
    size = 'md',
    icon,
    iconRight,
    className,
    disabled,
    title,
    ariaLabel,
  } = props

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    prefersReduced && 'hover:translate-y-0 active:translate-y-0',
    disabled && 'cursor-not-allowed',
    className,
  )

  const content = (
    <>
      <SparkleIcon icon={icon} />
      <span>{children}</span>
      <SparkleIcon icon={iconRight} side="right" />
    </>
  )

  if (props.to) {
    return (
      <Link to={props.to} className={classes} title={title} aria-label={ariaLabel} onClick={props.onClick}>
        {content}
      </Link>
    )
  }

  if (props.href) {
    return (
      <a
        href={props.href}
        className={classes}
        title={title}
        aria-label={ariaLabel}
        target={props.target}
        rel={props.rel}
        download={props.download}
        onClick={props.onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={props.type ?? 'button'}
      className={classes}
      disabled={disabled}
      title={title}
      aria-label={ariaLabel}
      onClick={props.onClick}
    >
      {content}
    </button>
  )
}

export function Button(props: ButtonProps) {
  return <ButtonInternal {...props} />
}