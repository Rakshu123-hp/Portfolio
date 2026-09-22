import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Award, Sparkles, MoveRight } from 'lucide-react'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { skillCategories } from '@/data/skills'
import { Seo } from '@/components/layout/Seo'
import { Button } from '@/components/ui/Button'
import { ResumeButton } from '@/components/ui/ResumeButton'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/animations/Reveal'
import { ProjectsGrid } from '@/components/projects/ProjectCard'
import { ProjectArtwork } from '@/components/ui/ProjectArtwork'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'
import { cn } from '@/utils/cn'

const focusAreas = [
  { label: 'AI', note: 'machine learning & deep learning systems' },
  { label: 'Data Science', note: 'from raw data to clean insight' },
  { label: 'Backend Development', note: 'APIs, pipelines, and services' },
  { label: 'Problem Solving', note: 'structured thinking, real problems' },
]

export function Home() {
  const prefersReduced = useReducedMotion()

  return (
    <div className="bg-glow-top">
      <Seo path="/" />

      {/* -------------------------------------------------- HERO --- */}
      <section className="relative overflow-hidden">
        <div className="bg-grid absolute inset-0" aria-hidden="true" />
        <div className="container-page relative grid min-h-[calc(100svh-80px)] items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div>
            <Reveal>
              <p className="label-kicker mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent" />
                Data Science Undergraduate Â· Bangalore
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[64px]">
                Hi, I&apos;m <span className="gradient-text whitespace-nowrap">Rakshitha H P.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
                {profile.tagline}
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-faint">
                {profile.heroSecondary}
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <li key={area.label} className="flex items-start gap-3">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    <span className="text-sm leading-relaxed text-ink-muted">
                      <span className="font-medium text-ink">{area.label}.</span> {area.note}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-3.5">
                <Button to="/projects" iconRight={ArrowRight} size="lg">
                  Explore My Work
                </Button>
                <Button to="/about" variant="secondary" size="lg">
                  About Me
                </Button>
                <ResumeButton variant="outline" size="lg" showHint />
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-10 flex items-center gap-5">
                {[
                  { icon: Linkedin, url: profile.links.linkedin, label: 'LinkedIn' },
                  { icon: Github, url: profile.links.github, label: 'GitHub' },
                  { icon: Award, url: profile.links.leetcode, label: 'LeetCode' },
                ].map(({ icon: Icon, url, label }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring group flex items-center gap-2 rounded-lg text-sm font-medium text-ink-muted transition-colors hover:text-ink"
                  >
                    <Icon
                      className="h-5 w-5 transition-colors group-hover:text-accent-300"
                      aria-hidden="true"
                    />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal delay={0.2} className="hidden lg:block" y={32}>
            <motion.div
              className="relative"
              animate={prefersReduced ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="relative aspect-[4/3.6] overflow-hidden rounded-3xl border border-white/10 bg-surface-900/70 shadow-lift">
                <ProjectArtwork accent="#6d8dff" seed={31} className="!rounded-3xl" />

                {/* Photo */}
                <div className="absolute inset-x-0 top-0 flex justify-center pt-[9%]">
                  <div className="relative">
                    <div
                      className="absolute -inset-3 rounded-[2rem] border border-accent/30"
                      style={{ background: 'linear-gradient(140deg, rgba(109,141,255,0.25), rgba(139,123,255,0.1))' }}
                      aria-hidden="true"
                    />
                    <div className="relative h-52 w-52 overflow-hidden rounded-[1.6rem] border border-white/15 bg-surface-800 shadow-lift sm:h-60 sm:w-60">
                      <ProfilePhoto className="h-full w-full" imgClassName="rounded-none" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 grid gap-px border-t border-white/[0.06] bg-white/[0.06] font-mono">
                  <div className="flex items-center justify-between bg-surface-950/90 px-5 py-3">
                    <span className="text-[11px] uppercase tracking-widest text-ink-faint">neural-backend.v1</span>
                    <span className="flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent/70" />
                      <span className="h-1.5 w-1.5 rounded-full bg-violet/70" />
                    </span>
                  </div>
                  <div className="bg-surface-950/90 px-5 py-4 text-[12px] leading-relaxed text-ink-muted">
                    <p><span className="text-accent-300">query</span> â†’ retrieval â†’ generation</p>
                    <p><span className="text-violet-400">pipeline</span> Â· data â†’ insight â†’ decision</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------- QUICK INTRO --- */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <SectionHeading
              kicker="Quick Intro"
              title="Turning ideas into practical technology."
            />
            <Reveal delay={0.08}>
              <div className="space-y-5 text-base leading-relaxed text-ink-muted">
                <p>
                  I&apos;m interested in building systems where artificial intelligence, data,
                  and backend engineering meet â€” applications that don&apos;t just demonstrate a
                  concept, but actually work with real input, real constraints, and real feedback.
                </p>
                <p>
                  My work so far spans retrieval-augmented generation, machine learning pipelines,
                  and data-centric engineering â€” from processing datasets in Python to designing
                  APIs and orchestrating LLM applications.
                </p>
                <p>
                  Right now I&apos;m deepening my work in AI-focused backend development and
                  continuing to practice the fundamentals: clean data, careful evaluation, and
                  systems designed to be maintained.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------- FEATURED PROJECTS --- */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              kicker="Featured Projects"
              title="Selected work, built to solve real problems."
              description="A look at the projects I'm currently building and have completed across AI, machine learning, and backend systems."
            />
            <Reveal delay={0.1}>
              <Link
                to="/projects"
                className="link-underline inline-flex items-center gap-2 text-sm font-medium text-accent-300 hover:text-accent"
              >
                View all projects <MoveRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-8 sm:mt-10">
            <ProjectsGrid projects={projects} />
          </div>
        </div>
      </section>

      {/* ----------------------------------------- SKILLS PREVIEW --- */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            kicker="What I Work With"
            title="Skills shaped by real projects."
            description="A practical toolkit built through coursework, internships, and self-driven project work."
          />

          <div className="mt-8 sm:mt-10 grid gap-5 md:grid-cols-2">
            {skillCategories.map((category, i) => (
              <Reveal key={category.id} delay={i * 0.06}>
                <div className="card-surface card-hover h-full p-6 sm:p-7">
                  <p className="label-kicker">{category.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {category.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/30 hover:text-accent-300"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1} className="mt-10">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-300 hover:text-accent"
            >
              Explore full skills <MoveRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------- CTA --- */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <Reveal>
            <div className="card-surface relative overflow-hidden rounded-3xl p-8 sm:p-10">
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    'radial-gradient(60% 120% at 80% 0%, rgba(109,141,255,0.14), transparent 60%), radial-gradient(40% 100% at 10% 100%, rgba(139,123,255,0.12), transparent 60%)',
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <p className="label-kicker mb-4">Let&apos;s connect</p>
                <h2 className={cn('max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl')}>
                  Interested in data, AI, or backend engineering? Let&apos;s talk.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted">
                  I&apos;m always open to conversations about internships, collaborations, and
                  projects that need a data-driven, practical approach.
                </p>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <Button to="/contact" iconRight={ArrowRight} size="lg">
                    Contact Me
                  </Button>
                  <ResumeButton variant="secondary" size="lg" showHint />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}