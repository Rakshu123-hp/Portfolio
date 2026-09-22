import { useState } from 'react'
import { UserRound } from 'lucide-react'
import { profile } from '@/data/profile'
import { cn } from '@/utils/cn'

type ProfilePhotoProps = {
  className?: string
  imgClassName?: string
}

/**
 * Renders the profile photo from `profile.photo` (public/profile.jpg by default).
 * If the file isn't present yet, it renders a tasteful initials/avatar fallback
 * so the layout never looks broken before the photo is added.
 */
export function ProfilePhoto({ className, imgClassName }: ProfilePhotoProps) {
  const [failed, setFailed] = useState(false)
  const showFallback = failed || !profile.photo

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden border border-white/10 bg-surface-800',
        className,
      )}
      role="img"
      aria-label={failed ? undefined : `Portrait of ${profile.name}`}
    >
      {showFallback ? (
        <div
          className="flex h-full w-full items-center justify-center rounded-full"
          aria-hidden="true"
        >
          <div className="relative flex h-3/5 w-3/5 items-center justify-center rounded-full border border-accent/30 bg-gradient-to-br from-accent/15 to-violet/15">
            <span className="font-display text-3xl font-bold text-accent-300 sm:text-4xl">
              RH
            </span>
            <UserRound
              className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-surface-900 p-1 text-ink-faint"
              strokeWidth={2}
            />
          </div>
        </div>
      ) : (
        <img
          src={profile.photo}
          alt={`${profile.name} — ${profile.role}`}
          width={640}
          height={640}
          loading="lazy"
          onError={() => setFailed(true)}
          className={cn('h-full w-full object-cover', imgClassName)}
        />
      )}
    </div>
  )
}