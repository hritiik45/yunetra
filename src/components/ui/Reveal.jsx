import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { EASE_OUT } from '../../lib/animations';

/**
 * Generic scroll reveal.
 *
 * Public API is unchanged (children, className, delay, duration, yOffset) and
 * extended with:
 *  - once   (default false): replay every time the element re-enters the
 *           viewport, scrolling in either direction. Pass `once` for one-shot.
 *  - amount: fraction of the element that must be visible (default 0.2)
 *  - margin: viewport root margin
 *  - x:      optional horizontal offset
 */
export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  yOffset = 20,
  x = 0,
  once = false,
  amount = 0.2,
  margin = '0px 0px -6% 0px',
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration, delay, ease: EASE_OUT },
      }}
      viewport={{ once, amount, margin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
