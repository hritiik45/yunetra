import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { EASE_OUT, lockScroll } from '../../lib/animations';

/**
 * "Watch Our Story" briefing dialog. Content is unchanged from the original.
 * (No video is connected, so none is claimed or played.)
 *
 * Adds: portal rendering (immune to transformed ancestors), enter/exit
 * transitions, Escape to close, focus moved into the dialog and restored on
 * close, Tab focus loop, and page scroll lock.
 */
export default function StoryModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const returnFocusRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    returnFocusRef.current = document.activeElement;
    const unlock = lockScroll();
    const t = setTimeout(() => closeRef.current?.focus(), 30);
    return () => {
      clearTimeout(t);
      unlock();
      returnFocusRef.current?.focus?.();
    };
  }, [open]);

  const onKeyDown = (e) => {
    if (e.key === 'Escape') {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== 'Tab' || !dialogRef.current) return;
    const f = dialogRef.current.querySelectorAll('button, [href], [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  if (typeof document === 'undefined') return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onKeyDown={onKeyDown}
          onMouseDown={(e) => e.target === e.currentTarget && onClose()}
          data-lenis-prevent
        >
          <motion.div
            ref={dialogRef}
            className="relative w-full max-w-2xl bg-[#121214] border border-white/15 rounded-xl p-6 sm:p-8"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.55, ease: EASE_OUT }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white hover:rotate-90 rounded-full bg-white/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B]"
              aria-label="Close story preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-semibold font-sans">
                Yunetra Executive Overview
              </span>
              <h3
                id="story-modal-title"
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-3xl uppercase tracking-tight text-white font-normal"
              >
                Architecting Industrial Systems
              </h3>
              <p className="text-sm text-[#BFC4C8] leading-relaxed font-sans">
                Yunetra bridges advanced optical measurement, edge computing hardware, and deterministic enterprise software platforms. Designed for mission-critical reliability across manufacturing, valuation, and security domains.
              </p>
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-sheen px-5 py-2 rounded-md bg-[#C6A66B] text-black text-xs font-semibold uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F1E8]"
                >
                  Close Briefing
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
