import { useRef, useState } from 'react'
import { Download, FileText } from 'lucide-react'
import { profile } from '@/data/profile'
import { isResumeAvailable } from '@/utils/links'
import { cn } from '@/utils/cn'
import { Button } from './Button'

type ResumeButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showHint?: boolean
  className?: string
}

/**
 * Resume button backed by `profile.resumeUrl`.
 * - When the URL is set (it points at the PDF in /public), it renders a real
 *   download link.
 * - When empty, clicking shows an inline "coming soon" hint instead of a broken
 *   link, so the button is safe to keep in the UI before the file exists.
 */
export function ResumeButton({
  variant,
  size,
  showHint = true,
  className,
}: ResumeButtonProps) {
  const [showNote, setShowNote] = useState(false)
  const timer = useRef<number | null>(null)

  const available = isResumeAvailable()

  function handleClick() {
    if (available) return
    setShowNote(true)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setShowNote(false), 3200)
  }

  return (
    <span className={cn('relative inline-flex flex-col items-end', className)}>
      {available ? (
        <Button
          href={profile.resumeUrl}
          download
          icon={Download}
          variant={variant}
          size={size}
          ariaLabel="Download resume"
        >
          Download Resume
        </Button>
      ) : (
        <Button
          variant={variant ?? 'secondary'}
          size={size}
          icon={FileText}
          onClick={handleClick}
          ariaLabel="Download resume (coming soon)"
        >
          Download Resume
        </Button>
      )}

      {showHint && showNote && (
        <span
          role="status"
          className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-lg border border-accent/30 bg-surface-700 px-3 py-1.5 text-xs text-accent-300 shadow-lift"
        >
          Resume coming soon
        </span>
      )}
    </span>
  )
}