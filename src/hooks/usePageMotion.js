import { gsap, ScrollTrigger } from '../lib/animations';
import useScrollScene from './useScrollScene';

const CARD = '.rounded-2xl, .rounded-xl';

/**
 * Motion for internal (non-home) pages, driven from the page root's DOM so the
 * existing markup and content stay untouched:
 *
 *  - Hero: artwork settles in, then drifts / darkens as the hero is scrolled
 *    out, with the hero copy easing away (all scrubbed, so fully reversible).
 *  - Everything else (eyebrows, headings, paragraphs, lists, buttons and
 *    top-level cards) rises into place in staggered batches. They reset when
 *    scrolled back below the fold and play again on re-entry.
 *
 * Reduced motion: useScrollScene skips this entirely, leaving a static page.
 */
export default function usePageMotion(rootRef) {
  useScrollScene(rootRef, ({ scope, isMobile }) => {
    const hero = scope.querySelector('section');

    if (hero) {
      const img = hero.querySelector('img[aria-hidden="true"]');
      const content = hero.querySelector(':scope > .relative.z-10');
      if (img) gsap.from(img, { scale: 1.18, opacity: 0, duration: 1.8, ease: 'power3.out' });

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
      if (img) tl.to(img.parentElement, { yPercent: isMobile ? 3 : 7, scale: isMobile ? 1.05 : 1.12, duration: 1 }, 0);
      if (content) tl.to(content, { y: isMobile ? -24 : -60, opacity: 0, duration: 0.65 }, 0.1);
    }

    const all = Array.from(
      scope.querySelectorAll(`h2, p, ul, a.inline-flex, ${CARD}, [class*="tracking-[0.25em]"]`)
    );
    const targets = all.filter(
      (el) =>
        !el.closest('h1') &&
        !el.closest('[aria-hidden="true"]') &&
        !el.closest('[data-no-motion]') &&
        !(el.parentElement && el.parentElement.closest(CARD))
    );

    const rise = isMobile ? 18 : 32;
    gsap.set(targets, { opacity: 0, y: rise });

    const play = (els) =>
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: 'power3.out',
        stagger: { amount: Math.min(0.45, 0.08 * els.length) },
        overwrite: true,
        // Hand transforms back to CSS so hover lifts keep working.
        onComplete: () => gsap.set(els, { clearProps: 'transform,opacity' }),
      });

    ScrollTrigger.batch(targets, {
      start: 'top 90%',
      onEnter: play,
      onEnterBack: play,
      onLeaveBack: (els) => gsap.to(els, { opacity: 0, y: rise, duration: 0.3, overwrite: true }),
    });
  });
}
