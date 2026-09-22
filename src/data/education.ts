export type EducationEntry = {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  type: 'degree' | 'diploma'
  highlights: string[]
  note?: string
}

export const education: EducationEntry[] = [
  {
    id: 'b-e-data-science',
    degree: 'B.E. – Data Science',
    institution: 'MVJ College of Engineering',
    location: 'Bangalore',
    period: '2024 – 2027',
    type: 'degree',
    note: 'Undergraduate',
    highlights: ['AI/ML', 'Data Structures', 'DBMS', 'Data Visualization', 'Big Data Analytics'],
  },
  {
    id: 'diploma-cs-it',
    degree: 'Diploma – Computer Science / IT',
    institution: 'Siddaganga Polytechnic',
    location: 'Tumkur',
    period: '2021 – 2024',
    type: 'diploma',
    note: 'Diploma',
    highlights: ['Programming', 'Networking', 'Full Stack Development'],
  },
]