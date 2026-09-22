import { AlignStartVertical, Construction, Flag, ShieldAlert, Workflow } from 'lucide-react'
import { projects } from '@/data/projects'
import { Seo } from '@/components/layout/Seo'
import {
  ProjectHero,
  ProjectSection,
  NextProjects,
  DetailEmptyState,
} from '@/projects/ProjectDetailLayout'
import { Reveal } from '@/components/animations/Reveal'
import { Badge } from '@/components/ui/Badge'

const simSwap = projects.find((p) => p.slug === 'sim-swap')!

/**
 * Edit the strings and items below as the project details are finalized.
 * Every placeholder block is referenced here so it is easy to swap in real content.
 */
const editable = {
  solutionHeading: 'Solution',
  solutionText:
    'The plan is to catch SIM swap signals before they become account-level damage — by analyzing patterns that hint at a swap having taken place. The exact detection logic and model architecture are still being finalized.',
  techStack: ['Python', 'Machine Learning'],
}

export function SimSwap() {
  return (
    <div>
      <Seo
        path="/projects/sim-swap"
        title="SIM Swap Attack Detection"
        description="SIM Swap Attack Detection — a security and machine learning project detecting SIM swap fraud patterns. Details are being finalized."
      />
      <ProjectHero project={simSwap} />

      {/* Notice that details are pending */}
      <section className="border-t border-white/[0.05] py-10">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col gap-4 rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-6 sm:flex-row sm:items-center sm:gap-5">
              <Construction className="h-8 w-8 shrink-0 text-amber-300" aria-hidden="true" />
              <div>
                <p className="text-base font-medium text-amber-200">Project details being updated</p>
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  The implementation specifics for this project are still being finalized. The
                  structure below is ready — sections will be filled in as the work is completed
                  and verified, without guessing at numbers.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Overview */}
      <ProjectSection
        id="overview"
        title="Overview"
        alt
        intro={
          <p>
            SIM swap fraud happens when an attacker convinces a carrier to move a victim&apos;s phone
            number to a SIM card the attacker controls. Once the number is theirs, they inherit
            access to accounts protected only by SMS-based verification. This project explores how
            machine learning can flag the behavioral and usage signals that suggest a swap has
            already happened.
          </p>
        }
      />

      {/* Problem */}
      <ProjectSection
        id="problem"
        title="Problem"
        alt
        intro={
          <p>
            The danger with SIM swapping is how invisible it can be — the victim&apos;s phone goes
            quiet, and across a carrier or bank the first sign is often only visible in activity
            patterns. Detecting these patterns reliably, early enough to matter, is a
            security-and-machine-learning problem in one: rare events, noisy signals, and high
            cost if they&apos;re missed.
          </p>
        }
      >
        <div className="flex items-start gap-4 rounded-2xl border border-white/[0.07] bg-surface-800/60 p-6">
          <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink-muted">
            <span className="font-medium text-ink">Focus.</span> This project centers on detecting
            signs of a SIM swap from available signals — not on preventing every possible social-engineering
            route. The specific signals, dataset, and results are being documented and will be shown here.
          </p>
        </div>
      </ProjectSection>

      {/* Solution */}
      <ProjectSection
        id="solution"
        title={editable.solutionHeading}
        alt
        intro={<p>{editable.solutionText}</p>}
      >
        <DetailEmptyState
          title="Detection approach"
          description="The specific model architecture and feature set are being finalized. Once decided, the detection logic will be documented here step by step."
        />
      </ProjectSection>

      {/* How It Works */}
      <ProjectSection
        id="how-it-works"
        title="How It Works"
        alt
        intro={
          <p>
            A detection system of this kind generally observes activity signals, looks for
            anomalies that match a swap pattern, and raises a flag when confidence crosses a
            threshold. The precise flow is being designed — an editable placeholder for the final
            logic chain is below.
          </p>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {['Signal collection', 'Feature building', 'Detection model', 'Alerting'].map((step, i) => (
            <Reveal key={step} delay={i * 0.06}>
              <div className="card-surface card-hover h-full p-5">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-sm font-medium text-ink">{step}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-faint">Details to be added</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ProjectSection>

      {/* Architecture */}
      <ProjectSection
        id="architecture"
        title="Architecture"
        alt
        intro={
          <p>
            The architecture is being finalized. When ready, it will be presented here as a
            diagram similar to the other project pages — showing how signals flow into features,
            features into the model, and model output into a decision.
          </p>
        }
      >
        <DetailEmptyState
          icon={Workflow}
          title="Architecture diagram"
          description="Under construction. The data flow and system components will be visualized here once confirmed."
        />
      </ProjectSection>

      {/* Tech stack */}
      <ProjectSection id="tech" title="Technology Stack" alt>
        <div className="flex flex-wrap gap-2">
          {editable.techStack.map((t) => (
            <span
              key={t}
              className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-sm text-ink"
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted">
          Additional libraries and tools will be listed here as the implementation is finalized.
        </p>
      </ProjectSection>

      {/* Detection Logic */}
      <ProjectSection
        id="detection-logic"
        title="Detection Logic"
        alt
      >
        <DetailEmptyState
          icon={AlignStartVertical}
          title="Detection logic"
          description="The decision rules and model logic are being worked out. This section will describe exactly how a potential SIM swap is identified — no placeholders pretending to be results."
        />
      </ProjectSection>

      {/* Results */}
      <ProjectSection
        id="results"
        title="Results"
        alt
      >
        <DetailEmptyState
          icon={Flag}
          title="Results pending"
          description="No accuracy, dataset, or performance figures are listed here yet, because none have been finalized. They will be published honestly once the evaluation is done."
        />
      </ProjectSection>

      {/* My Contribution */}
      <ProjectSection
        id="contribution"
        title="My Contribution"
        alt
        intro={
          <p>
            I&apos;m building this as a security-and-ML focused project — shaping the problem,
            designing the detection approach, and implementing the pipeline end to end. My exact
            responsibilities are being documented alongside the design as the work settles.
          </p>
        }
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="neutral">Problem definition</Badge>
          <Badge tone="neutral">Detection approach</Badge>
          <Badge tone="neutral">ML pipeline</Badge>
        </div>
      </ProjectSection>

      <NextProjects current={simSwap} all={projects} />
    </div>
  )
}