import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from '../lib/animations';

/**
 * Runs a GSAP/ScrollTrigger setup inside a gsap.matchMedia scope.
 *
 *   useScrollScene(ref, ({ q, isDesktop, isMobile }) => { ... });
 *
 * - Skipped entirely when the user prefers reduced motion (static layout).
 * - Everything created inside is reverted on unmount / breakpoint change, so
 *   no ScrollTriggers, tweens or inline styles are left behind (also safe under
 *   React StrictMode double-invocation).
 * - Desktop = >=1024px. Mobile = <1024px (tablet is treated as mobile so heavy
 *   scroll-scrubbed effects stay desktop-only).
 */
export default function useScrollScene(scopeRef, setup) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
        isMobile: '(max-width: 1023px) and (prefers-reduced-motion: no-preference)',
      },
      (context) => {
        const { isDesktop, isMobile } = context.conditions;
        const q = gsap.utils.selector(scope);
        return setup({ scope, q, isDesktop, isMobile }) || undefined;
      },
      scope
    );

    return () => mm.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/**
 * Generic scroll parallax driven by data attributes:
 *   <div data-parallax="0.08"> ... </div>   (fraction of own height, +/-)
 * The element is pre-scaled just enough that its edges never show.
 * Its parent (or `data-parallax-trigger` selector target) is the ScrollTrigger.
 */
export function applyParallax(q, { isMobile = false } = {}) {
  q('[data-parallax]').forEach((el) => {
    const raw = parseFloat(el.dataset.parallax) || 0.06;
    const speed = isMobile ? raw * 0.5 : raw;
    gsap.set(el, { scale: 1 + speed * 2 + 0.01, transformOrigin: '50% 50%' });
    gsap.fromTo(
      el,
      { yPercent: -speed * 100 },
      {
        yPercent: speed * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: el.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );
  });
}

/** Scroll-scrubbed stroke draw for an SVG path. */
export function drawPath(path, trigger, { start = 'top 85%', end = 'center 35%' } = {}) {
  if (!path) return;
  const len = path.getTotalLength();
  gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
  gsap.to(path, {
    strokeDashoffset: 0,
    ease: 'none',
    scrollTrigger: { trigger, start, end, scrub: 0.6, invalidateOnRefresh: true },
  });
}

export { ScrollTrigger };
