import { ArrowDown, Library, Zap, GitBranch, Scale, Search, Database, Workflow } from 'lucide-react'
import { projects } from '@/data/projects'
import { Seo } from '@/components/layout/Seo'
import {
  ProjectHero,
  ProjectSection,
  TechStackList,
  NextProjects,
} from '@/projects/ProjectDetailLayout'
import { Reveal } from '@/components/animations/Reveal'
import { Badge } from '@/components/ui/Badge'

const nyayaSathi = projects.find((p) => p.slug === 'nyaya-sathi')!

const ragSteps = [
  { label: 'User Query', sub: 'Natural-language question about Indian law' },
  { label: 'Query Processing', sub: 'Normalization, intent framing' },
  { label: 'Retriever', sub: 'LangChain retrieval orchestration' },
  { label: 'Vector Search', sub: 'Semantic similarity search' },
  { label: 'ChromaDB', sub: 'Embedding store & retrieval index' },
  { label: 'Relevant Legal Documents', sub: 'Ranked source chunks' },
  { label: 'LLM / Prompt Orchestration', sub: 'Grounded answer generation' },
  { label: 'Generated Answer', sub: 'Response built from retrieved context' },
  { label: 'Citation Resolution', sub: 'Traceable references attached' },
]

const dataFlow = [
  { title: 'Ingestion', text: 'Legal source documents are processed into chunks for retrieval.' },
  { title: 'Embedding', text: 'Chunks are embedded into vectors for similarity search.' },
  { title: 'Indexing', text: 'Vectors and metadata are stored in ChromaDB.' },
  { title: 'Query time', text: 'A user query is embedded and matched against the index.' },
  { title: 'Grounding', text: 'Top results are passed to the LLM as context with prompt orchestration.' },
]

const evaluationFocus = [
  'Retrieval quality — are the right documents being surfaced?',
  'Answer grounding — is the response supported by retrieved sources?',
  'Citation accuracy — do references actually map to the claims made?',
]

export function NyayaSathi() {
  return (
    <div>
      <Seo
        path="/projects/nyaya-sathi"
        title="Nyaya Sathi"
        description="Nyaya Sathi — an AI-powered legal-guidance assistant using RAG with LangChain, ChromaDB, and Redis for citation-backed answers."
      />
      <ProjectHero project={nyayaSathi} />

      {/* Overview */}
      <ProjectSection
        id="overview"
        title="Project Overview"
        alt
        intro={
          <>
            <p>
              Nyaya Sathi is an AI-powered legal-guidance assistant designed to answer user
              questions using Indian legal sources with traceable citations. Instead of relying
              on a model&apos;s memory alone, it grounds responses in retrieved legal documents so
              answers can point back to where the information actually came from.
            </p>
            <p>
              The project is a study in applied retrieval-augmented generation: how to turn a
              collection of documents into a useful, well-cited assistant — and how to evaluate
              whether the system is actually working.
            </p>
          </>
        }
      />

      {/* My Role */}
      <ProjectSection
        id="role"
        title="My Role"
        intro={
          <p>
            As the AI backend developer, I work across the ingestion, retrieval, orchestration,
            and caching layers of the system.
          </p>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Document ingestion', text: 'Processing legal sources into retrievable chunks' },
            { title: 'Embeddings', text: 'Building the vector representation pipeline' },
            { title: 'Vector search', text: 'Semantic retrieval from the document index' },
            { title: 'RAG orchestration', text: 'LangChain pipelines linking retrieval to generation' },
            { title: 'Redis caching', text: 'Query caching and chat history management' },
            { title: 'Evaluation', text: 'Measuring retrieval and answer quality' },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <div className="card-surface card-hover h-full p-5">
                <h3 className="text-sm font-semibold text-accent-300">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ProjectSection>

      {/* Problem */}
      <ProjectSection
        id="problem"
        title="Problem"
        intro={
          <>
            <p>
              Legal information is dense, technical, and spread across many documents. Someone
              trying to understand their situation often ends up lost in terminology and sources,
              unsure whether the information they find is current, relevant, or even correct.
            </p>
            <p>
              A helpful assistant has to do more than generate fluent answers — it has to retrieve
              the right source material and make it possible for the user (and, importantly, a
              human reviewer) to trace an answer back to its source.
            </p>
          </>
        }
      />

      {/* Approach */}
      <ProjectSection
        id="approach"
        title="Approach"
        intro={
          <>
            <p>
              Nyaya Sathi follows a retrieval-augmented generation approach: rather than asking
              the model to answer from training memory, we retrieve relevant legal documents and
              generate an answer grounded in that context.
            </p>
            <p>
              The pipeline is designed around a few core ideas: structured ingestion of source
              documents, semantic retrieval over embeddings, LLM generation constrained by
              retrieved context, traceable citations, and caching to keep repeated queries fast.
            </p>
          </>
        }
      />

      {/* Architecture */}
      <ProjectSection
        id="architecture"
        title="AI Backend Architecture"
        intro={
          <p>
            The system is organized as a layered pipeline: query in, grounded citation-backed
            answer out. Redis supports the experience on the sides — caching repeat queries and
            storing chat history.
          </p>
        }
      >
        <ArchitectureFlow />
      </ProjectSection>

      {/* Tech stack */}
      <ProjectSection id="stack" title="Technology Stack" alt>
        <TechStackList technologies={nyayaSathi.technologies} />
      </ProjectSection>

      {/* RAG Pipeline */}
      <ProjectSection
        id="rag-pipeline"
        title="RAG Pipeline"
        alt
        intro={
          <p>
            Each user query moves through the retrieval pipeline before any answer is generated.
          </p>
        }
      >
        <div className="mx-auto max-w-2xl">
          {ragSteps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.02} className="relative">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                    <span className="font-mono text-xs text-accent-300">{String(i + 1).padStart(2, '0')}</span>
                  </span>
                  {i < ragSteps.length - 1 && (
                    <ArrowDown className="my-1 h-4 w-4 text-ink-faint" aria-hidden="true" />
                  )}
                </div>
                <div className="card-surface mb-4 flex-1 self-start p-5">
                  <h3 className="font-mono text-sm font-medium text-ink">{step.label}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{step.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </ProjectSection>

      {/* Data flow */}
      <ProjectSection
        id="data-flow"
        title="Data Flow"
        alt
        intro={
          <p>
            Behind the query pipeline is the data lifecycle that makes retrieval possible in the
            first place.
          </p>
        }
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {dataFlow.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.06}>
              <div className="card-surface card-hover h-full p-5">
                <Workflow className="h-5 w-5 text-accent-300" aria-hidden="true" />
                <h3 className="mt-3 font-mono text-sm font-medium text-ink">0{i + 1} · {step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-ink-muted">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ProjectSection>

      {/* Caching */}
      <ProjectSection
        id="caching"
        title="Caching with Redis"
        alt
        intro={
          <p>
            Redis plays two supporting roles in the system.
          </p>
        }
      >
        <div className="grid gap-5 md:grid-cols-2">
          {[
            {
              icon: Zap,
              title: 'Query cache',
              text: 'Frequently asked questions are answered faster by caching retrieval results and generated answers, avoiding redundant embedding lookups and LLM calls.',
            },
            {
              icon: Library,
              title: 'Chat history',
              text: 'Conversation context is stored so the assistant can maintain continuity across turns within a session.',
            },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="card-surface card-hover h-full p-6">
                <item.icon className="h-5 w-5 text-violet-400" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-medium text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </ProjectSection>

      {/* Citations */}
      <ProjectSection
        id="citations"
        title="Citation System"
        alt
        intro={
          <>
            <p>
              Every generated answer is expected to carry traceable citations — references that
              point back to the specific legal source chunks that supported the response.
            </p>
            <p>
              This is the difference between an answer that feels right and an answer that can be
              checked. Citation resolution ties each claim back to the retrieved context, so the
              gap between &ldquo;the model said so&rdquo; and &ldquo;here is the source&rdquo; stays visible.
            </p>
          </>
        }
      >
        <div className="flex items-start gap-4 rounded-2xl border border-accent/20 bg-accent/[0.06] p-6">
          <Scale className="mt-0.5 h-5 w-5 shrink-0 text-accent-300" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink-muted">
            <span className="font-medium text-ink">Intended use.</span> Nyaya Sathi is a
            project — a legal-guidance assistant built to explore grounded, cited answering of
            legal questions. It is not a licensed legal advisor, and its output should not be
            treated as guaranteed legal advice.
          </p>
        </div>
      </ProjectSection>

      {/* Evaluation */}
      <ProjectSection
        id="evaluation"
        title="Evaluation"
        alt
        intro={
          <p>
            Because the assistant&apos;s value depends on groundedness, evaluation focuses on what
            users actually experience:
          </p>
        }
      >
        <ul className="max-w-2xl space-y-3">
          {evaluationFocus.map((item, i) => (
            <Reveal key={item} delay={i * 0.06} as="li">
              <div className="flex gap-3 rounded-xl border border-white/[0.07] bg-surface-800/60 p-4">
                <Search className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" aria-hidden="true" />
                <span className="text-sm leading-relaxed text-ink-muted">{item}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </ProjectSection>

      {/* Status */}
      <ProjectSection
        id="status"
        title="Current Status"
        alt
        intro={
          <p>
            Nyaya Sathi is in active development.
          </p>
        }
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="warning" dot>In Progress</Badge>
          <Badge tone="neutral">Document ingestion</Badge>
          <Badge tone="neutral">Embeddings</Badge>
          <Badge tone="neutral">Vector search</Badge>
          <Badge tone="neutral">RAG orchestration</Badge>
          <Badge tone="neutral">Redis caching</Badge>
          <Badge tone="neutral">Citation resolution</Badge>
          <Badge tone="neutral">Evaluation</Badge>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted">
          The repository and any running demo will be linked here as soon as they are verified and
          shared publicly.
        </p>
      </ProjectSection>

      <NextProjects current={nyayaSathi} all={projects} />
    </div>
  )
}

function ArchitectureFlow() {
  const steps = [
    'User Query',
    'Query Processing',
    'Retriever',
    'Vector Search',
    'ChromaDB',
    'Relevant Legal Documents',
    'LLM / Prompt Orchestration',
    'Generated Answer',
    'Citation Resolution',
    'User',
  ]
  const redisItems = [
    { icon: Zap, label: 'Query cache' },
    { icon: GitBranch, label: 'Chat history' },
  ]

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_240px]">
      <div className="card-surface rounded-2xl p-5 sm:p-8">
        <p className="label-kicker mb-6">Query → Answer Flow</p>
        <div className="max-w-xl">
          {steps.map((step, i) => {
            const final = i === steps.length - 1
            const storage = step === 'ChromaDB'
            return (
              <div key={step} className="flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <div
                    className={
                      storage
                        ? 'rounded-lg border border-accent/40 bg-accent/15 px-4 py-2.5 font-mono text-sm font-medium text-accent-300'
                        : 'rounded-lg border border-white/10 bg-surface-700/80 px-4 py-2.5 font-mono text-sm text-ink'
                    }
                  >
                    {step}
                  </div>
                  {storage && (
                    <span className="hidden items-center gap-1 font-mono text-[10px] uppercase tracking-widest text-accent-300 sm:inline-flex">
                      <Database className="h-3.5 w-3.5" aria-hidden="true" /> vector store
                    </span>
                  )}
                </div>
                {!final && (
                  <span className="ml-5 h-6 w-px bg-gradient-to-b from-accent/50 to-white/10" aria-hidden="true" />
                )}
                {final && (
                  <div className="mt-3">
                    <Badge tone="accent">Answer delivered with citations</Badge>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <div className="card-surface h-fit rounded-2xl p-5 sm:p-6">
        <p className="label-kicker mb-4">Redis Layer</p>
        <div className="space-y-3">
          {redisItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-xl border border-violet/25 bg-violet/[0.08] p-4"
            >
              <item.icon className="h-4 w-4 text-violet-400" aria-hidden="true" />
              <span className="font-mono text-sm text-ink">{item.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs leading-relaxed text-ink-faint">
          Redis sits alongside the main flow, caching repeat queries and maintaining conversation
          state.
        </p>
      </div>
    </div>
  )
}