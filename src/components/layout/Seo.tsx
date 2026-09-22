import { useEffect } from 'react'
import { site } from '@/data/site'

type SeoProps = {
  title?: string
  description?: string
  path?: string
}

const defaultDescription =
  'Rakshitha H P — Data Science undergraduate in Bangalore building practical solutions with AI, machine learning, and backend engineering.'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  const existing = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  )
  if (existing) {
    existing.setAttribute('content', content)
    return
  }
  const meta = document.createElement('meta')
  meta.setAttribute(attr, key)
  meta.setAttribute('content', content)
  document.head.appendChild(meta)
}

export function Seo({ title, description, path = '/' }: SeoProps) {
  const fullTitle = title ? `${title} | ${site.name}` : site.title
  const desc = description ?? defaultDescription

  useEffect(() => {
    document.title = fullTitle
    upsertMeta('name', 'description', desc)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('name', 'twitter:title', fullTitle)
    upsertMeta('name', 'twitter:description', desc)
    if (site.url) {
      const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (canonical) canonical.setAttribute('href', `${site.url}${path}`)
    }
  }, [fullTitle, desc, path])

  return null
}