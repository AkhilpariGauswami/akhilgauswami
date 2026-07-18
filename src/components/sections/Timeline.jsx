export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-border-2 pl-8">
      {items.map((item, i) => (
        <div key={i} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[calc(2rem+4.5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-surface" />
          {item.period && (
            <p className="font-mono text-xs uppercase tracking-wide text-primary">{item.period}</p>
          )}
          <h3 className="mt-1 font-display text-xl font-bold italic text-ink">{item.title}</h3>
          {item.subtitle && <p className="mt-0.5 font-body text-sm text-muted">{item.subtitle}</p>}
          {item.points?.length > 0 && (
            <ul className="mt-2 space-y-1.5">
              {item.points.map((point, j) => (
                <li key={j} className="font-body text-sm text-body">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
