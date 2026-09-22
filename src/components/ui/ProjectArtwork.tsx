import { useEffect, useId, useRef } from 'react'
import { cn } from '@/utils/cn'

type Node = {
  x: number
  y: number
  r: number
  pulse?: number
}

type Edge = {
  from: number
  to: number
}

function buildNodes(seed: number): { nodes: Node[]; edges: Edge[] } {
  // deterministic pseudo-random from seed so visuals are stable
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const nodes: Node[] = Array.from({ length: 9 }, (_, i) => {
    const angle = (i / 9) * Math.PI * 2 - Math.PI / 2
    const radius = 42 + rand() * 34
    return {
      x: 100 + Math.cos(angle) * radius,
      y: 100 + Math.sin(angle) * radius,
      r: 2.5 + rand() * 3,
      pulse: rand(),
    }
  })
  const edges: Edge[] = []
  const pairs: Array<[number, number]> = [
    [0, 1],
    [0, 2],
    [0, 4],
    [1, 3],
    [2, 5],
    [3, 6],
    [4, 7],
    [5, 8],
    [6, 7],
    [1, 8],
  ]
  pairs.forEach(([a, b]) => {
    if (rand() > 0.15) edges.push({ from: a, to: b })
  })
  return { nodes, edges }
}

type ProjectArtworkProps = {
  accent?: string
  variant?: 'network' | 'circuit'
  seed?: number
  className?: string
}

export function ProjectArtwork({
  accent = '#6d8dff',
  variant = 'network',
  seed = 1,
  className,
}: ProjectArtworkProps) {
  const gradientId = useId()
  const glowId = useId()
  const { nodes, edges } = buildNodes(seed)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = mq.matches
  }, [])

  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden rounded-2xl',
        className,
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 200 200"
        className="h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        role="presentation"
      >
        <defs>
          <radialGradient id={glowId} cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="55%" stopColor={accent} stopOpacity="0.08" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="1" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <circle cx="100" cy="100" r="92" fill={`url(#${glowId})`} />

        {variant === 'network' && (
          <g>
            {edges.map((edge, i) => {
              const a = nodes[edge.from]
              const b = nodes[edge.to]
              return (
                <line
                  key={i}
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke={accent}
                  strokeOpacity="0.3"
                  strokeWidth="0.8"
                />
              )
            })}
            {nodes.map((n, i) => (
              <g key={i}>
                <circle cx={n.x} cy={n.y} r={n.r + 3} fill={accent} opacity="0.12" />
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={n.r}
                  fill={accent}
                  opacity={reducedMotionRef.current ? 0.8 : (n.pulse ?? 0.6)}
                />
              </g>
            ))}
          </g>
        )}

        {variant === 'circuit' && (
          <g stroke={accent} strokeOpacity="0.28" strokeWidth="0.9" fill="none">
            <path d="M20 40 H70 L85 55 H150 L165 40 H180" />
            <path d="M20 90 H60 L75 105 H140 L155 90 H180" />
            <path d="M20 140 H50 L65 125 H130 L145 140 H180" />
            <path d="M150 40 V25 H110" />
            <path d="M70 90 V75 H100" />
            <path d="M130 140 V155 H95" />
            {[
              [60, 40],
              [85, 55],
              [140, 55],
              [165, 40],
              [50, 90],
              [75, 105],
              [140, 90],
              [155, 90],
              [65, 125],
              [130, 125],
              [110, 25],
              [100, 75],
              [95, 155],
              [145, 140],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r="2.4" fill={accent} stroke="none" opacity="0.7" />
            ))}
          </g>
        )}
      </svg>

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(7,8,16,0.9), rgba(7,8,16,0.15) 55%, rgba(7,8,16,0.35))',
        }}
      />
    </div>
  )
}