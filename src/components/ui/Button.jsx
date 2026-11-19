import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  disabled = false,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-normal rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:pointer-events-none select-none';

  const variants = {
    primary:
      'bg-accent text-brand-obsidian font-semibold hover:bg-accent-hover active:bg-accent-pressed shadow-sm',
    secondary:
      'bg-surface-secondary text-foreground hover:bg-surface-tertiary border border-border hover:border-border-strong',
    outline:
      'bg-transparent text-foreground border border-border hover:border-accent hover:text-accent',
    ghost:
      'bg-transparent text-foreground hover:bg-surface-secondary hover:text-foreground',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 h-8 gap-1.5',
    md: 'text-sm px-4 py-2 h-10 gap-2',
    lg: 'text-base px-6 py-3 h-12 gap-2.5',
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
