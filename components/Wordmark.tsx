export function StarGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2.5l2.6 6.15 6.65.55-5.05 4.37 1.52 6.5L12 16.6l-5.72 3.47 1.52-6.5-5.05-4.37 6.65-.55L12 2.5z" />
    </svg>
  );
}

export default function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
      <StarGlyph className="h-[1.1em] w-[1.1em] text-accent" />
      <span className="font-semibold tracking-tight">FiveStarKit</span>
    </span>
  );
}
