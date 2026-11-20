import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);
// Avoid ScrollTrigger refresh storms when mobile browser chrome collapses.
ScrollTrigger.config({ ignoreMobileResize: true });

/**
 * Check if the user has requested reduced motion
 * @returns {boolean}
 */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/* -------------------------------------------------------------------------- */
/*  Framer Motion presets                                                     */
/* -------------------------------------------------------------------------- */

/** Expo-out: the house easing for all cinematic reveals. */
export const EASE_OUT = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT = [0.76, 0, 0.24, 1];

export const transitions = {
  default: { duration: 0.4, ease: [0.2, 0, 0, 1] },
  smooth: { duration: 0.6, ease: EASE_OUT },
  spring: { type: 'spring', damping: 20, stiffness: 100 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.default },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitions.default },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

/**
 * Reversible variants. Every variant takes the element's `custom` value as a
 * delay (seconds). The `hidden` state is quick so that scrolling back out of a
 * section resets it without a visible lag, ready to replay on re-entry.
 */
const RESET = { duration: 0.35, ease: [0.4, 0, 1, 1] };

export const maskUp = {
  hidden: { y: '115%', transition: RESET },
  visible: (d = 0) => ({
    y: '0%',
    transition: { duration: 1.05, ease: EASE_OUT, delay: d },
  }),
};

export const itemUp = {
  hidden: { opacity: 0, y: 26, transition: RESET },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_OUT, delay: d },
  }),
};

export const itemFade = {
  hidden: { opacity: 0, transition: RESET },
  visible: (d = 0) => ({
    opacity: 1,
    transition: { duration: 0.9, ease: 'easeOut', delay: d },
  }),
};

export const lineGrowX = {
  hidden: { scaleX: 0, transition: RESET },
  visible: (d = 0) => ({
    scaleX: 1,
    transition: { duration: 1.1, ease: EASE_OUT, delay: d },
  }),
};

export const lineGrowY = {
  hidden: { scaleY: 0, transition: RESET },
  visible: (d = 0) => ({
    scaleY: 1,
    transition: { duration: 1.1, ease: EASE_OUT, delay: d },
  }),
};

/** Build a clip-path reveal variant set. `from` is the closed inset. */
export function clipVariants(from = 'inset(100% 0% 0% 0%)', to = 'inset(0% 0% 0% 0%)') {
  return {
    hidden: { clipPath: from, transition: { duration: 0.01 } },
    visible: (d = 0) => ({
      clipPath: to,
      transition: { duration: 1.25, ease: EASE_IN_OUT, delay: d },
    }),
  };
}

/** Inner counter-scale used together with a clip reveal. */
export const scaleSettle = (from = 1.22) => ({
  hidden: { scale: from, transition: { duration: 0.01 } },
  visible: (d = 0) => ({
    scale: 1,
    transition: { duration: 1.6, ease: EASE_OUT, delay: d },
  }),
});

/* -------------------------------------------------------------------------- */
/*  Lenis  <->  GSAP ScrollTrigger (single loop, single instance)             */
/* -------------------------------------------------------------------------- */

let lenisInstance = null;
let tickerFn = null;
let consumers = 0;
let locks = 0;

export function getLenis() {
  return lenisInstance;
}

/**
 * Starts the one-and-only Lenis instance and drives it from the GSAP ticker,
 * wiring its scroll events to ScrollTrigger. Reference-counted so React
 * StrictMode double-mounts and nested callers can't create duplicates or tear
 * the instance down early. Returns a cleanup function.
 */
export function initSmoothScroll() {
  if (typeof window === 'undefined') return () => {};

  consumers += 1;
  let released = false;
  const release = () => {
    if (released) return;
    released = true;
    consumers -= 1;
    if (consumers <= 0) destroySmoothScroll();
  };

  // Respect reduced motion: native scrolling only.
  if (prefersReducedMotion() || lenisInstance) return release;

  try {
    lenisInstance = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      anchors: false,
    });

    lenisInstance.on('scroll', ScrollTrigger.update);
    tickerFn = (time) => lenisInstance && lenisInstance.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);
  } catch (error) {
    console.warn('Lenis smooth scrolling initialization skipped:', error);
    lenisInstance = null;
  }

  return release;
}

export function destroySmoothScroll() {
  if (tickerFn) {
    gsap.ticker.remove(tickerFn);
    tickerFn = null;
    gsap.ticker.lagSmoothing(500, 33); // restore GSAP defaults
  }
  if (lenisInstance) {
    lenisInstance.off('scroll', ScrollTrigger.update);
    lenisInstance.destroy();
    lenisInstance = null;
  }
  consumers = 0;
}

/** Jump (no animation) to the top, used on route changes. */
export function scrollToTop() {
  if (lenisInstance) {
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

/** Smooth-scroll to an element or selector, Lenis-aware, with native fallback. */
export function scrollToTarget(target, options = {}) {
  const el = typeof target === 'string' ? document.querySelector(target) : target;
  if (!el) return;
  if (lenisInstance) {
    lenisInstance.scrollTo(el, { offset: -80, duration: 1.4, ...options });
  } else {
    el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }
}

/** Lock page scrolling (modals / drawers). Returns the unlock function. */
export function lockScroll() {
  locks += 1;
  if (locks === 1) {
    lenisInstance?.stop();
    document.documentElement.style.overflow = 'hidden';
  }
  let done = false;
  return () => {
    if (done) return;
    done = true;
    locks = Math.max(0, locks - 1);
    if (locks === 0) {
      document.documentElement.style.overflow = '';
      lenisInstance?.start();
    }
  };
}

/** Recalculate every ScrollTrigger once layout has settled. */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}

export { gsap, ScrollTrigger };
