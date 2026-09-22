import { Link } from 'react-router-dom'
import { Github, Linkedin, Award, ArrowUp, Mail } from 'lucide-react'
import { profile } from '@/data/profile'
import { socialLinks } from '@/utils/links'
import { navItems } from '@/components/navigation/Navbar'

const socialIcons = {
  linkedin: Linkedin,
  github: Github,
  leetcode: Award,
} as const

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-950/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="focus-ring inline-flex items-center gap-3 rounded-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-accent/40 bg-gradient-to-br from-accent/20 to-violet/20 font-display font-bold text-accent-300">
                RH
              </span>
              <span className="font-display font-semibold text-ink">{profile.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {profile.role} based in {profile.location}, focused on AI, data, and backend
              development.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring mt-4 inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-accent-300"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="label-kicker mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="link-underline text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label-kicker mb-4">Find me online</p>
            <ul className="space-y-2.5">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.id as keyof typeof socialIcons] ?? Linkedin
                return (
                  <li key={social.id}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring group inline-flex items-center gap-2.5 rounded-md text-sm text-ink-muted transition-colors hover:text-ink"
                    >
                      <Icon
                        className="h-4 w-4 transition-colors group-hover:text-accent-300"
                        aria-hidden="true"
                      />
                      {social.handle}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-sm text-ink-faint">© 2026 Rakshitha H P</p>
          <a
            href="#top"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md text-sm text-ink-faint transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}