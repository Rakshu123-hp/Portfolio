import { profile } from '@/data/profile'

export type SocialLink = {
  id: string
  label: string
  url: string
  handle: string
}

export const socialLinks: SocialLink[] = [
  { id: 'linkedin', label: 'LinkedIn', url: profile.links.linkedin, handle: 'in/rakshitha-hp' },
  { id: 'github', label: 'GitHub', url: profile.links.github, handle: 'Rakshu123-hp' },
  { id: 'leetcode', label: 'LeetCode', url: profile.links.leetcode, handle: 'Rakshu31' },
]

export function isResumeAvailable(): boolean {
  return profile.resumeUrl.trim().length > 0
}