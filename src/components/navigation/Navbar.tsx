import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { profile } from '@/data/profile'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/utils/cn'
import { ResumeButton } from '@/components/ui/ResumeButton'

export const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/education', label: 'Education' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar() {
  const scrolled = useScrolled(8)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-white/[0.06] bg-surface/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav
        className="container-page flex h-16 items-center justify-between gap-4 sm:h-[70px]"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="focus-ring group flex items-center gap-3 rounded-lg"
          aria-label="Rakshitha H P — Home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-accent/40 bg-gradient-to-br from-accent/20 to-violet/20 font-display text-sm font-bold text-accent-300 transition-colors group-hover:text-accent">
            RH
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-ink sm:block">
            RAKSHITHA H P
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'link-underline rounded-md px-3 py-2 text-sm font-medium transition-colors',
                  isActive ? 'text-ink' : 'text-ink-muted hover:text-ink',
                )
              }
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-[5px] left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center lg:flex">
          <ResumeButton size="sm" showHint />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={prefersReduced ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={prefersReduced ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-white/[0.06] bg-surface/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-page flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                      isActive
                        ? 'bg-accent/10 text-accent-300'
                        : 'text-ink-muted hover:bg-white/[0.04] hover:text-ink',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-3 border-t border-white/[0.06] pt-4">
                <ResumeButton size="md" showHint className="!w-full [&>a]:w-full [&>button]:w-full" />
              </div>
              <p className="mt-4 px-4 font-mono text-xs text-ink-faint">
                {profile.location} · {profile.email}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}