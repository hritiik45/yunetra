/**
 * Writes the pointer position into CSS variables (--mx / --my) so a CSS-only
 * radial highlight (.spotlight) can follow the cursor. Direct DOM write: no
 * React state, no re-render. Ignores touch input.
 */
export function spotlightMove(e) {
  if (e.pointerType && e.pointerType !== 'mouse') return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty('--mx', `${e.clientX - r.left}px`);
  el.style.setProperty('--my', `${e.clientY - r.top}px`);
}
