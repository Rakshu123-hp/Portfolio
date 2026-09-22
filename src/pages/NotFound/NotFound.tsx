import { Link } from 'react-router-dom'
import { Compass } from 'lucide-react'
import { Seo } from '@/components/layout/Seo'
import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <div>
      <Seo title="Page not found" description="The page you are looking for does not exist." />
      <section className="grid min-h-[60vh] place-items-center px-5 py-16">
        <div className="text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-accent/10">
            <Compass className="h-7 w-7 text-accent-300" aria-hidden="true" />
          </span>
          <p className="label-kicker mt-8">404</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">This page wandered off.</h1>
          <p className="mx-auto mt-4 max-w-md text-ink-muted">
            The page you&apos;re looking for doesn&apos;t exist or was moved. Let&apos;s get you back
            somewhere useful.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button to="/">Back to Home</Button>
            <Link
              to="/projects"
              className="focus-ring rounded-xl border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-ink transition-all hover:border-accent/40 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}