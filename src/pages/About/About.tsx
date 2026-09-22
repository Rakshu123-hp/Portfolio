import { ArrowRight, BrainCircuit, Compass, GraduationCap, Sparkles } from 'lucide-react'
import { profile } from '@/data/profile'
import { education } from '@/data/education'
import { skillCategories } from '@/data/skills'
import { Seo } from '@/components/layout/Seo'
import { PageHeader } from '@/components/ui/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/animations/Reveal'
import { Button } from '@/components/ui/Button'
import { ResumeButton } from '@/components/ui/ResumeButton'
import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

export function About() {
  return (
    <div>
      <Seo
        path="/about"
        title="About"
        description="About Rakshitha H P â€” a Data Science undergraduate focused on AI, data engineering, and backend development."
      />
      <PageHeader
        kicker="About"
        title={<>Building intelligent systems, one practical step at a time.</>}
        description="An introduction to who I am, what I work with, and how I think about building software."
      />

      {/* Introduction */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <Reveal className="mb-8">
                <div className="card-surface mx-auto max-w-xs overflow-hidden p-3 sm:p-4">
                  <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10">
                    <ProfilePhoto className="h-full w-full" imgClassName="rounded-none" />
                  </div>
                  <div className="mt-4 px-2 pb-1 text-center">
                    <p className="whitespace-nowrap font-display text-sm font-semibold text-ink">
                      {profile.name}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                      Undergraduate Student
                    </p>
                  </div>
                </div>
              </Reveal>
              <SectionHeading kicker="Introduction" title="A quick hello." />
            </div>
            <Reveal delay={0.06}>
              <div className="space-y-5 text-base leading-relaxed text-ink-muted">
                <p>
                  I&apos;m {profile.name}, a {profile.role.toLowerCase()} from {profile.location}.
                  I got into computing through the practical side of things â€” working with data,
                  writing code that has to actually run, and building systems that other people
                  depend on.
                </p>
                <p>
                  Over the past few years I&apos;ve had the chance to work across that spectrum:
                  an internship where I cleaned, validated, and processed real business datasets,
                  coursework that pushed me into AI/ML fundamentals, and project work where I&apos;ve
                  designed backend architecture for AI applications.
                </p>
                <p>
                  What keeps me interested is the gap between a model that works in a notebook and
                  a system that works for real users. That gap â€” retrieval pipelines, APIs,
                  caching, evaluation, deployment concerns â€” is where I like to spend my time.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What I Work With */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            kicker="What I Work With"
            title="Tools I reach for"
            description="Technologies I've used in coursework, internships, and projects â€” described plainly."
          />
          <div className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2">
            {skillCategories.map((category, i) => (
              <Reveal key={category.id} delay={i * 0.05}>
                <div className="card-surface card-hover h-full p-6 sm:p-7">
                  <p className="label-kicker">{category.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{category.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-ink"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <SectionHeading
              kicker="Current Focus"
              title="Where my energy is going"
            />
            <Reveal delay={0.06}>
              <ul className="space-y-6">
                {[
                  {
                    icon: BrainCircuit,
                    title: 'AI backend engineering',
                    text: 'Deepening my work on retrieval-augmented generation â€” ingestion, embeddings, vector search, caching, and answer evaluation.',
                  },
                  {
                    icon: Compass,
                    title: 'Practical machine learning',
                    text: 'Moving from textbook pipelines to models trained and evaluated on real constraints: preprocessing, class balance, and honest metrics.',
                  },
                  {
                    icon: Sparkles,
                    title: 'Data fundamentals',
                    text: 'Keeping the basics sharp â€” SQL, cleaning, validation â€” because every good model starts with trustworthy data.',
                  },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.06} as="li">
                    <div className="flex gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10">
                        <item.icon className="h-5 w-5 text-accent-300" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-medium text-ink">{item.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Education snapshot */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <SectionHeading
            kicker="Education Snapshot"
            title="Learning in progress."
          />
          <div className="mt-8 sm:mt-10 grid gap-6 md:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.08}>
                <div className="card-surface card-hover h-full p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <GraduationCap className="h-5 w-5 text-ink-muted" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{item.degree}</h3>
                  <p className="mt-1 text-sm text-ink-muted">
                    {item.institution}, {item.location} Â· {item.period}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-ink-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-t border-white/[0.05] py-12 sm:py-16">
        <div className="container-page">
          <Reveal>
            <div className="card-surface relative overflow-hidden rounded-3xl p-8 sm:p-10">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(50% 120% at 85% 10%, rgba(139,123,255,0.12), transparent 60%)',
                }}
                aria-hidden="true"
              />
              <div className="relative max-w-3xl">
                <p className="label-kicker mb-4">How I Work</p>
                <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                  Practical over flashy; clear over clever.
                </h2>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-muted">
                  <p>
                    I believe the best work is boring where it should be. Structure, clean data,
                    measurable evaluation, and code that someone else can read win almost every
                    time.
                  </p>
                  <p>
                    I also believe in showing up for the work nobody asks for â€” the event logistics,
                    the web solutions nobody noticed, the documentation that makes a project
                    survive its first delete-database scare.
                  </p>
                  <p>
                    And I keep learning in public: building projects, breaking them, and fixing
                    them is my favorite way to get better.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3.5">
                  <Button to="/projects" iconRight={ArrowRight}>
                    See what I&apos;m building
                  </Button>
                  <ResumeButton variant="secondary" showHint />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}