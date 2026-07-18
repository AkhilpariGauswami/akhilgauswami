const TONES = {
  neutral: 'bg-surface-3 text-body',
  tint: 'bg-tint text-primary',
  outline: 'border border-border/60 text-muted bg-transparent',
};

export default function Tag({ children, tone = 'neutral', className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 font-mono text-xs font-medium ${TONES[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
