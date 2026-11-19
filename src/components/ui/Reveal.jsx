import React from 'react';
import { motion } from 'framer-motion';
import { prefersReducedMotion } from '../../lib/animations';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  yOffset = 20,
}) {
  const shouldReduceMotion = prefersReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration,
        delay,
        ease: [0.2, 0, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
