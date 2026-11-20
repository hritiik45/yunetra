import React from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Arrow that exits right while a fresh one slides in from the left on hover.
 * Requires a `group` ancestor (all CTA links already have one). Colour comes
 * from the surrounding text colour (or a text-* class passed in `className`).
 */
export default function ArrowSwap({ className = 'w-4 h-4' }) {
  const base =
    'absolute inset-0 w-full h-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]';
  return (
    <span
      className={`relative inline-block flex-shrink-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <ArrowRight
        className={`${base} group-hover:translate-x-[140%] group-focus-visible:translate-x-[140%]`}
      />
      <ArrowRight
        className={`${base} -translate-x-[140%] group-hover:translate-x-0 group-focus-visible:translate-x-0`}
      />
    </span>
  );
}
