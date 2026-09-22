export function PageLoader() {
  return (
    <div
      className="grid min-h-[60vh] place-items-center"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-accent" />
        <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
          Loading…
        </span>
      </div>
    </div>
  )
}