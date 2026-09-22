import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Github, Linkedin, Award, Mail, MessageSquare, Send, ShieldCheck } from 'lucide-react'
import { profile } from '@/data/profile'
import { socialLinks } from '@/utils/links'
import { Seo } from '@/components/layout/Seo'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/animations/Reveal'

const socialIcons = { linkedin: Linkedin, github: Github, leetcode: Award }

export function Contact() {
  return (
    <div>
      <Seo
        path="/contact"
        title="Contact"
        description="Get in touch with Rakshitha H P â€” email, LinkedIn, GitHub, and LeetCode."
      />
      <PageHeader
        kicker="Contact"
        title={<>Let&apos;s build something meaningful.</>}
        description="If you have a project, an internship, or a problem that needs a data-driven approach â€” I&apos;d love to hear about it."
      />

      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact details */}
          <div className="space-y-8">
            <Reveal>
              <div>
                <p className="label-kicker mb-3">Direct email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="focus-ring group inline-flex items-center gap-3 rounded-lg text-lg font-medium text-ink transition-colors hover:text-accent-300"
                >
                  <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
                  {profile.email}
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <div>
                <p className="label-kicker mb-4">Elsewhere on the web</p>
                <ul className="space-y-3">
                  {socialLinks.map((social) => {
                    const Icon = socialIcons[social.id as keyof typeof socialIcons] ?? Linkedin
                    return (
                      <li key={social.id}>
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-surface card-hover group flex items-center justify-between gap-4 p-4"
                        >
                          <span className="flex items-center gap-3">
                            <Icon
                              className="h-5 w-5 text-ink-muted transition-colors group-hover:text-accent-300"
                              aria-hidden="true"
                            />
                            <span className="text-sm font-medium text-ink">{social.label}</span>
                          </span>
                          <span className="font-mono text-xs text-ink-faint transition-colors group-hover:text-accent-300">
                            {social.handle}
                          </span>
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-surface-800/60 p-5">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-ink-muted">
                  Prefer async? Email works best for me â€” I respond to every genuine message,
                  usually within a couple of days.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.08}>
            <div className="card-surface rounded-2xl p-6 sm:p-8">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <MessageSquare className="h-5 w-5 text-accent" aria-hidden="true" />
                Send a message
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                Fill this in and I&apos;ll get back to you. For now the form previews your message
                locally â€” a real send endpoint can be connected later.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}

/**
 * Frontend-only contact form.
 *
 * To connect a real backend (EmailJS, Resend, or your own API):
 * 1. Keep the `handleSubmit` scaffolding.
 * 2. Replace the local preview logic with your provider call.
 * 3. The `.env.local` file is where keys like VITE_EMAILJS_SERVICE_ID would live.
 */
export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const prefersReduced = useReducedMotion()

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // NOTE: No email is actually sent â€” this simulates a successful
    // submission until a backend provider is configured.
    setStatus('sent')
  }

  const inputBase =
    'focus-ring w-full rounded-xl border border-white/10 bg-surface-950/60 px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors hover:border-white/20'

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink-muted">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputBase}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink-muted">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputBase}
            autoComplete="email"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink-muted">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project, opportunity, or ideaâ€¦"
          className={`${inputBase} resize-y`}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sent'}
        className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-accent-400 to-accent-600 px-6 py-3 text-sm font-medium text-white shadow-[0_8px_24px_-8px_rgba(109,141,255,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(109,141,255,0.65)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </button>

      <AnimatePresence>
        {status === 'sent' && (
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="status"
            className="flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.06] p-4"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10">
              <Check className="h-4 w-4 text-emerald-300" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-medium text-emerald-300">Message ready</p>
              <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">
                Preview complete. Email delivery is not configured yet â€” please reach me at{' '}
                {profile.email} for now.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}