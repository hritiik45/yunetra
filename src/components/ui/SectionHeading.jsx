import React from 'react';
import { cn } from '../../lib/utils';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  as: HeadingTag = 'h2',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'max-w-3xl mb-12',
        isCenter ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-widest font-semibold text-accent mb-2 px-3 py-1 rounded-full bg-surface-secondary border border-border">
          {eyebrow}
        </span>
      )}
      <HeadingTag className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold tracking-tight text-foreground uppercase mt-2">
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-foreground-secondary leading-relaxed font-sans">
          {description}
        </p>
      )}
    </div>
  );
}
