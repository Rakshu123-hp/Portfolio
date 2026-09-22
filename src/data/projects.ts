export type ProjectBadge = {
  label: string
  tone: 'accent' | 'violet' | 'neutral'
}

export type Project = {
  id: string
  slug: string
  title: string
  category: string
  status: string
  role: string
  shortDescription: string
  description: string
  technologies: string[]
  featured: boolean
  github: string | null
  liveDemo: string | null
  badges?: ProjectBadge[]
  accent: string
}

/**
 * GitHub / demo links for projects are intentionally kept empty (null)
 * until the repositories are verified. Add the URLs below to activate them.
 */
export const projects: Project[] = [
  {
    id: 'nyaya-sathi',
    slug: 'nyaya-sathi',
    title: 'Nyaya Sathi',
    category: 'AI / RAG Application',
    status: 'In Progress',
    role: 'AI Backend Developer',
    shortDescription:
      'An AI-powered legal-guidance assistant that answers user queries using Indian legal sources, backed by retrieval-augmented generation with traceable citations.',
    description:
      'Nyaya Sathi is an AI-powered legal-guidance assistant designed to answer user queries using Indian legal sources with traceable citations. As a project it explores how retrieval-augmented generation can make answers grounded in reference documents.',
    technologies: ['Python', 'LangChain', 'RAG', 'ChromaDB', 'Redis'],
    featured: true,
    github: null,
    liveDemo: null,
    badges: [
      { label: 'Major Project', tone: 'accent' },
      { label: 'AI Backend Developer', tone: 'violet' },
    ],
    accent: '#6d8dff',
  },
  {
    id: 'sim-swap-attack-detection',
    slug: 'sim-swap',
    title: 'SIM Swap Attack Detection',
    category: 'Security / Machine Learning',
    status: 'In Progress',
    role: 'Developer',
    shortDescription:
      'A security-oriented ML project focused on detecting SIM swap fraud patterns. Project details are currently being updated.',
    description:
      'A security-and-machine-learning focused project aimed at detecting SIM swap attack patterns. Detailed implementation specifics are being finalized and will be documented here.',
    technologies: ['Python', 'Machine Learning'],
    featured: true,
    github: null,
    liveDemo: null,
    accent: '#8b7bff',
  },
  {
    id: 'brain-tumor-detection',
    slug: 'brain-tumor-detection',
    title: 'Brain Tumor Detection',
    category: 'Medical Image Classification / ML',
    status: 'Completed',
    role: 'Developer',
    shortDescription:
      'A machine learning project focused on detecting and classifying brain tumors from MRI scan images using a CNN-based pipeline.',
    description:
      'A machine learning project focused on detecting and classifying brain tumors from MRI scan images. It follows a documented workflow spanning preprocessing, augmentation, CNN classification, and evaluation.',
    technologies: ['Python', 'Deep Learning', 'CNN', 'OpenCV'],
    featured: true,
    github: null,
    liveDemo: null,
    accent: '#8aa2ff',
  },
]

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}