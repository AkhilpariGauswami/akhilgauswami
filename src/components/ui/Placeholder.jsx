/**
 * Wraps placeholder copy so it reads as "fill this in" at a glance in the
 * rendered UI — not just in a code comment someone could miss. Swap the
 * content and delete the wrapper once real copy exists.
 */
export default function Placeholder({ children, className = '' }) {
  return (
    <span className={`italic text-muted/80 decoration-dashed underline decoration-1 underline-offset-4 ${className}`}>
      {children}
    </span>
  );
}
