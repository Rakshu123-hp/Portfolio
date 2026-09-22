import { Activity, Image as ImageIcon, Info, Layers } from 'lucide-react'
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

const brainTumor = projects.find((p) => p.slug === 'brain-tumor-detection')!

const pipeline = [
  { label: 'MRI Image', sub: 'Input scans', icon: ImageIcon },
  { label: 'Preprocessing', sub: 'Normalization & resizing', icon: ImageIcon },
  { label: 'Augmentation', sub: 'Extended training variety', icon: Layers },
  { label: 'Class Balancing', sub: 'Handling imbalanced classes', icon: Layers },
  { label: 'CNN', sub: 'Feature learning & classification', icon: Activity },
  { label: 'Classification', sub: 'Tumor detection output', icon: ImageIcon },
  { label: 'Evaluation', sub: 'Metrics & review', icon: Activity },
]

const workflow = [
  'Image preprocessing',
  'Image augmentation',
  'Class balancing',
  'CNN-based classification',
  'Model evaluation',
  'Accuracy, precision, recall',
  'Confusion matrix',
  'Training performance visualization',
]

export function BrainTumor() {
  return (
    <div>
      <Seo
        path="/projects/brain-tumor-detection"
        title="Brain Tumor Detection"
        description="Brain Tumor Detection — a machine learning project classifying brain tumors from MRI images using deep learning, with a documented CNN pipeline."
      />
      <ProjectHero project={brainTumor} />

      {/* Overview */}
      <ProjectSection
        id="overview"
        title="Overview"
        alt
        intro={
          <>
            <p>
              This is a machine learning project focused on detecting and classifying brain tumors
              from MRI scan images. The work follows a full documented workflow — from preprocessing
              raw images, through augmenting and balancing the training data, to training a CNN
              classifier and evaluating it with proper metrics.
            </p>
            <p>
              The project exercises the whole modeling pipeline: making images usable, training a
              network that learns the right patterns, and reporting results honestly with confusion
              matrices and training curves.
            </p>
          </>
        }
      />

      {/* Problem */}
      <ProjectSection
        id="problem"
        title="Problem"
        alt
        intro={
          <p>
            Diagnosing brain tumors from MRI scans is a critical, skill-heavy task. A computer
            vision model can help flag suspicious scans for review — but building one that actually
            works means dealing with the realities of medical imaging data: varying resolutions,
            uneven class distributions, and the need to know not just accuracy but where a model
            gets it wrong.
          </p>
        }
      />

      {/* Dataset */}
      <ProjectSection id="dataset" title="Dataset" alt>
        <DetailEmptyState
          title="Dataset details to be added"
          description="The dataset used, its size, class distribution, and source will be documented here as soon as they are confirmed. No figures have been invented."
        />
      </ProjectSection>

      {/* Pipeline visualization */}
      <ProjectSection
        id="pipeline"
        title="ML Pipeline"
        alt
        intro={
          <p>
            From raw MRI image to evaluated classification result, the pipeline is:
          </p>
        }
      >
        <div className="mx-auto max-w-xl">
          {pipeline.map((step, i) => {
            const final = i === pipeline.length - 1
            return (
              <div key={step.label} className="flex flex-col items-start">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/30 bg-accent/10">
                    <step.icon className="h-5 w-5 text-accent-300" aria-hidden="true" />
                  </span>
                  <div className="rounded-lg border border-white/10 bg-surface-700/80 px-4 py-2.5">
                    <p className="font-mono text-sm text-ink">{step.label}</p>
                    <p className="text-[11px] text-ink-faint">{step.sub}</p>
                  </div>
                </div>
                {!final && (
                  <span className="ml-5 h-6 w-px bg-gradient-to-b from-accent/50 to-white/10" aria-hidden="true" />
                )}
              </div>
            )
          })}
          <div className="ml-14 mt-3">
            <Badge tone="accent">Classified result</Badge>
          </div>
        </div>
      </ProjectSection>

      {/* Workflow breakdown */}
      <ProjectSection
        id="workflow"
        title="Documented workflow"
        alt
        intro={
          <p>
            The project documentation covers each stage of the pipeline, including:
          </p>
        }
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {workflow.map((item, i) => (
            <Reveal key={item} delay={i * 0.04} as="li">
              <div className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-surface-800/60 p-4">
                <span className="font-mono text-[11px] text-accent">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm text-ink-muted">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </ProjectSection>

      {/* Preprocessing */}
      <ProjectSection
        id="preprocessing"
        title="Preprocessing"
        alt
        intro={
          <p>
            Raw MRI images are prepared before they reach the model — normalized, resized to a
            consistent input shape, and cleaned so the network learns from tissue patterns rather
            than artifact noise.
          </p>
        }
      />

      {/* Model */}
      <ProjectSection
        id="model"
        title="Model"
        alt
        intro={
          <>
            <p>
              A convolutional neural network (CNN) is used to learn image features directly from
              the preprocessed scans. OpenCV supports the image-handling side of the pipeline.
            </p>
            <p>
              Specific architecture details — layer configuration, kernel sizes, and tuning
              choices — will be documented precisely here as part of the write-up.
            </p>
          </>
        }
      >
        <DetailEmptyState
          title="Architecture details to be added"
          description="The exact CNN architecture and training configuration are being documented and will replace this placeholder."
        />
      </ProjectSection>

      {/* Training */}
      <ProjectSection
        id="training"
        title="Training"
        alt
        intro={
          <p>
            Training decisions that shape the model are part of the documented workflow:
          </p>
        }
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="neutral">Image augmentation</Badge>
          <Badge tone="neutral">Class balancing</Badge>
          <Badge tone="neutral">Training performance visualization</Badge>
        </div>
      </ProjectSection>

      {/* Evaluation */}
      <ProjectSection
        id="evaluation"
        title="Evaluation"
        alt
        intro={
          <p>
            The model is evaluated beyond a single accuracy number:
          </p>
        }
      >
        <div className="flex flex-wrap gap-2">
          <Badge tone="neutral">Accuracy</Badge>
          <Badge tone="neutral">Precision</Badge>
          <Badge tone="neutral">Recall</Badge>
          <Badge tone="neutral">Confusion matrix</Badge>
          <Badge tone="neutral">Training curves</Badge>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Published metrics will reflect the actual evaluation runs. No accuracy figure is claimed here
          until one has genuinely been measured.
        </p>
      </ProjectSection>

      {/* Results */}
      <ProjectSection id="results" title="Results" alt>
        <DetailEmptyState
          title="Results to be added"
          description="Final accuracy, precision, recall, and the confusion matrix will be published here once the evaluation is complete and documented."
        />
      </ProjectSection>

      {/* My Contribution */}
      <ProjectSection
        id="contribution"
        title="My Contribution"
        alt
        intro={
          <p>
            I developed this project end to end — building the preprocessing and augmentation stage,
            the CNN model, the training and evaluation pipeline, and the documentation of results.
          </p>
        }
      />

      {/* Disclaimer */}
      <ProjectSection id="disclaimer" title="Disclaimer" alt>
        <Reveal>
          <div className="flex items-start gap-4 rounded-2xl border border-amber-400/25 bg-amber-400/[0.06] p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink-muted">
              This project is an academic machine-learning project and is not intended for medical
              diagnosis or clinical decision-making.
            </p>
          </div>
        </Reveal>
      </ProjectSection>

      <NextProjects current={brainTumor} all={projects} />
    </div>
  )
}