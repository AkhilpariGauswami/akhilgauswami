import { ArrowUpRight } from 'lucide-react';
import Tag from '../ui/Tag';
import Placeholder from '../ui/Placeholder';

export default function ExperimentCard({ experiment }) {
  const { name, description, tags, status, links } = experiment;
  const hasLink = links?.demo || links?.repo;

  return (
    <div className="flex flex-col rounded-2xl border border-border-2 bg-white p-6">
      <div className="flex flex-wrap items-center gap-2">
        {status && <Tag tone="outline">{status}</Tag>}
        {tags.map((tag) => (
          <Tag key={tag}>{tag === 'TODO' ? <Placeholder>tag</Placeholder> : tag}</Tag>
        ))}
      </div>

      <h3 className="mt-4 font-display text-xl font-bold italic text-ink">{name}</h3>
      <p className="mt-2 flex-1 font-body text-sm text-body">{description}</p>

      {hasLink ? (
        <div className="mt-4 flex gap-4">
          {links.demo && (
            <a href={links.demo} className="inline-flex items-center gap-1 font-body text-sm text-primary hover:underline">
              Live Demo <ArrowUpRight size={14} />
            </a>
          )}
          {links.repo && (
            <a href={links.repo} className="inline-flex items-center gap-1 font-body text-sm text-primary hover:underline">
              Repo <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      ) : (
        <p className="mt-4 font-mono text-xs text-muted">
          <Placeholder>Add demo/repo link</Placeholder>
        </p>
      )}
    </div>
  );
}
