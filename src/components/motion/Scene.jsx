import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  maskUp,
  itemUp,
  itemFade,
  lineGrowX,
  lineGrowY,
  clipVariants,
  scaleSettle,
} from '../../lib/animations';

/**
 * Scene = the orchestrating parent. Children (Item / MaskLine / ClipReveal /
 * Line) inherit the "hidden" / "visible" variant labels, so one in-view
 * observer drives a whole choreographed block, in both scroll directions:
 *
 *   scroll down into view  -> "visible" (plays)
 *   scroll back out        -> "hidden"  (quick reset)
 *   scroll back in         -> "visible" (plays again)
 *
 * Pass `state` ("hidden" | "visible") to control it manually (hero).
 * With reduced motion everything renders statically.
 */
export function Scene({
  as = 'div',
  state,
  amount = 0.2,
  margin = '0px 0px -6% 0px',
  className,
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;
  const Plain = as;

  if (reduce) {
    return (
      <Plain className={className} {...stripMotionProps(rest)}>
        {children}
      </Plain>
    );
  }

  const driver = state
    ? { animate: state }
    : { whileInView: 'visible', viewport: { once: false, amount, margin } };

  return (
    <Tag initial="hidden" className={className} {...driver} {...rest}>
      {children}
    </Tag>
  );
}

function stripMotionProps({ variants, custom, initial, animate, whileInView, viewport, ...dom }) {
  return dom;
}

function makeItem(defaultVariants) {
  return function MotionItem({ as = 'div', d = 0, variants = defaultVariants, className, children, ...rest }) {
    const reduce = useReducedMotion();
    const Tag = motion[as] || motion.div;
    const Plain = as;
    if (reduce) {
      return (
        <Plain className={className} {...stripMotionProps(rest)}>
          {children}
        </Plain>
      );
    }
    return (
      <Tag variants={variants} custom={d} className={className} {...rest}>
        {children}
      </Tag>
    );
  };
}

/** Fade + rise. */
export const Item = makeItem(itemUp);
/** Fade only. */
export const Fade = makeItem(itemFade);
/** Hairline that grows horizontally (set origin-left / origin-right / origin-center). */
export const LineX = makeItem(lineGrowX);
/** Hairline that grows vertically. */
export const LineY = makeItem(lineGrowY);

/**
 * One line of a headline revealed through a mask. `standalone` lets it drive
 * itself (own in-view trigger) when there is no <Scene> ancestor.
 * Replaces
 * <span className="block ...">LINE</span>. The clip uses negative insets so
 * Anton's tall glyphs and tight leading are never cropped.
 */
export function MaskLine({ d = 0, className = '', style, standalone = false, children }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <span className={`block ${className}`} style={style}>
        {children}
      </span>
    );
  }
  // The observer must sit on the unclipped outer element: the inner line starts
  // translated outside the clip, so it can never report itself as "in view".
  const Outer = standalone ? motion.span : 'span';
  const outerProps = standalone
    ? { initial: 'hidden', whileInView: 'visible', viewport: { once: false, amount: 0.5 } }
    : {};
  return (
    <Outer
      className={`block ${className}`}
      style={{ clipPath: 'inset(-14% -4% -14% -4%)', ...style }}
      {...outerProps}
    >
      <motion.span className="block will-change-transform" variants={maskUp} custom={d}>
        {children}
      </motion.span>
    </Outer>
  );
}

const CLIP_FROM = {
  bottom: 'inset(100% 0% 0% 0%',
  top: 'inset(0% 0% 100% 0%',
  left: 'inset(0% 100% 0% 0%',
  right: 'inset(0% 0% 0% 100%',
};

/**
 * Mask-based image/panel reveal: the frame opens via clip-path while its
 * content settles from a slight over-scale. `from` is the edge it opens from.
 * Use `radius` (e.g. "24px") when the frame is rounded.
 */
export function ClipReveal({
  from = 'bottom',
  radius,
  scale = 1.2,
  d = 0,
  className = '',
  innerClassName = 'w-full h-full',
  children,
  ...rest
}) {
  const reduce = useReducedMotion();
  if (reduce) {
    return (
      <div className={className} {...stripMotionProps(rest)}>
        <div className={innerClassName}>{children}</div>
      </div>
    );
  }
  const r = radius ? ` round ${radius}` : '';
  const closed = `${CLIP_FROM[from] || CLIP_FROM.bottom}${r})`;
  const open = `inset(0% 0% 0% 0%${r})`;
  return (
    <motion.div
      variants={clipVariants(closed, open)}
      custom={d}
      className={className}
      {...rest}
    >
      <motion.div
        variants={scaleSettle(scale)}
        custom={d}
        className={`${innerClassName} will-change-transform`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
