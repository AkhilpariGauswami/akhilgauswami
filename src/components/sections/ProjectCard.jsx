import { ImageOff } from 'lucide-react';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import Placeholder from '../ui/Placeholder';

export default function ProjectCard({ project }) {
  const { name, oneLiner, status, tags, thumbnail, links } = project;

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border-2 bg-white">
      <div className="relative flex aspect-[4/3] items-center justify-center border-b border-border-2 bg-surface-2">
        {thumbnail ? (
          <img src={thumbnail} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-muted">
            <ImageOff size={20} />
            <span className="font-mono text-xs">No thumbnail yet</span>
          </div>
        )}
        {status && (
          <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 font-mono text-xs text-body shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-bold italic text-ink">{name}</h3>
        <p className="mt-2 font-body text-sm text-body">
          {oneLiner || <Placeholder>One-line problem statement goes here</Placeholder>}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag === 'TODO' ? <Placeholder>tag</Placeholder> : tag}</Tag>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button to={links.caseStudy} size="sm">
            Case Study
          </Button>
          {links.demo && (
            <Button href={links.demo} variant="secondary" size="sm">
              Live Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
