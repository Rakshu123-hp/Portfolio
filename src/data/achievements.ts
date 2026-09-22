export type AchievementGroup = {
  id: string
  title: string
  description: string
  items: { name: string; detail: string }[]
}

export const achievementGroups: AchievementGroup[] = [
  {
    id: 'hackathons',
    title: 'Hackathons',
    description: 'Participated in 3+ hackathons and project expos, collaborating under time pressure to build and present working ideas.',
    items: [
      { name: 'Maharaja Institute of Technology', detail: 'Hackathon participant' },
      { name: 'Sapthagiri NPS University', detail: 'Hackathon participant' },
      { name: 'Project Expo – MVJ College of Engineering', detail: 'Project exhibition participant' },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Took ownership of running events end-to-end on campus.',
    items: [
      { name: 'Department Coordinator — Vertechx Event', detail: 'Managed end-to-end event logistics' },
    ],
  },
  {
    id: 'clubs',
    title: 'Campus Involvement',
    description: 'Active roles that combine technical and organizational work.',
    items: [
      { name: 'Toastmasters International, District 92', detail: 'Web Solutions Strategist' },
      { name: 'Software Development Club', detail: 'Content Member' },
    ],
  },
]