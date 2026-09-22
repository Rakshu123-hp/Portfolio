export type SkillCategory = {
  id: string
  title: string
  description: string
  skills: {
    name: string
    note: string
  }[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming-data',
    title: 'Programming & Data',
    description: 'Core languages and database skills for working with data end-to-end.',
    skills: [
      { name: 'Python', note: 'Primary language for scripting, analysis, and ML work' },
      { name: 'SQL', note: 'Querying, filtering, and aggregating data' },
      { name: 'MySQL', note: 'Relational database design and queries' },
    ],
  },
  {
    id: 'backend-apis',
    title: 'Backend & APIs',
    description: 'Building services and APIs that power applications.',
    skills: [
      { name: 'Flask', note: 'Lightweight Python web frameworks and APIs' },
      { name: 'Node.js', note: 'JavaScript runtime for server-side work' },
      { name: 'Express', note: 'Building REST endpoints and middleware' },
      { name: 'REST APIs', note: 'Designing and consuming RESTful services' },
    ],
  },
  {
    id: 'data-viz',
    title: 'Data & Visualization',
    description: 'Transforming raw data into clean, understandable insight.',
    skills: [
      { name: 'Power BI', note: 'Dashboards and business reporting' },
      { name: 'Tableau', note: 'Interactive data visualization' },
      { name: 'Excel', note: 'Analysis, modeling, and reporting' },
      { name: 'Google Sheets', note: 'Collaborative data workflows' },
      { name: 'Data Cleaning & Validation', note: 'Preparing datasets for analysis' },
      { name: 'Data Visualization', note: 'Designing clear visual narratives' },
      { name: 'KPI Tracking', note: 'Defining and monitoring key metrics' },
    ],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    description: 'Building models, retrieval systems, and intelligent pipelines.',
    skills: [
      { name: 'Scikit-Learn', note: 'Classical machine learning in Python' },
      { name: 'Machine Learning', note: 'Model development and evaluation' },
      { name: 'Deep Learning', note: 'Neural approaches, including CNNs' },
      { name: 'RAG', note: 'Retrieval-augmented generation' },
      { name: 'LangChain', note: 'LLM application orchestration' },
    ],
  },
]