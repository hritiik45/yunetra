import { gsap } from 'gsap';
import Lenis from 'lenis';

/**
 * Check if the user has requested reduced motion
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Standard Framer Motion transition curves and presets
 */
export const transitions = {
  default: { duration: 0.4, ease: [0.2, 0, 0, 1] },
  smooth: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  spring: { type: 'spring', damping: 20, stiffness: 100 },
};

/**
 * Reusable Framer Motion Variants
 */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.default,
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.default,
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/**
 * Singleton Lenis smooth scrolling controller with automatic cleanup
 */
let lenisInstance = null;
let rafId = null;

export function initSmoothScroll() {
  if (typeof window === 'undefined') return () => {};

  // Respect user preference for reduced motion
  if (prefersReducedMotion()) {
    return () => {};
  }

  // Prevent multiple instances
  if (lenisInstance) {
    return () => destroySmoothScroll();
  }

  try {
    lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    function raf(time) {
      if (lenisInstance) {
        lenisInstance.raf(time);
        rafId = requestAnimationFrame(raf);
      }
    }

    rafId = requestAnimationFrame(raf);
  } catch (error) {
    console.warn('Lenis smooth scrolling initialization skipped:', error);
  }

  return () => destroySmoothScroll();
}

export function destroySmoothScroll() {
  if (rafId) {
    cancelAnimationFrame(rafId);
    rafId = null;
  }
  if (lenisInstance) {
    lenisInstance.destroy();
    lenisInstance = null;
  }
}

/**
 * GSAP instance helper for future section animations
 */
export { gsap };
