export type ExperienceRole = {
  id: string
  title: string
  organization: string
  location: string
  period: string
  type: string
  responsibilities: string[]
  certificates: string[]
}

export const experience: ExperienceRole[] = [
  {
    id: 'embeddedfru-python-intern',
    title: 'Python Intern',
    organization: 'EmbeddedFru',
    location: 'Remote',
    period: 'July 2023 – January 2024',
    type: 'Internship',
    responsibilities: [
      'Organized and processed business datasets using Python',
      'Performed data cleaning and validation on real-world data',
      'Wrote SQL queries for data extraction, filtering, and aggregation',
      'Built data processing and workflow automation pipelines',
      'Applied OOP principles to design modular, maintainable pipelines',
    ],
    certificates: [
      'Machine Learning with Python',
      'SQL with Python',
      'OOPs Concepts with Python',
    ],
  },
]