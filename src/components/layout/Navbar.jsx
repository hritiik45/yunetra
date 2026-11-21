import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import { EASE_OUT } from '../../lib/animations';
import ArrowSwap from '../ui/ArrowSwap';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function activeNameFor(pathname) {
  const hit = navLinks.find((l) =>
    l.href === '/' ? pathname === '/' : pathname === l.href || pathname.startsWith(`${l.href}/`)
  );
  return hit ? hit.name : null;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const reduce = useReducedMotion();
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);
  const drawerRef = useRef(null);

  const activeName = activeNameFor(pathname);
  // One shared indicator: it follows the pointer/keyboard focus and settles back on the current page.
  const indicatorName = hovered ?? activeName;

  // Header behaviour on scroll: no height change, just a firmer edge once content passes under it.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;
    let ticking = false;
    const update = () => {
      ticking = false;
      el.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Escape closes the drawer and returns focus to the toggle; focus moves into the drawer on open.
  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const t = setTimeout(() => drawerRef.current?.querySelector('a')?.focus(), 60);
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      ref={headerRef}
      data-scrolled="false"
      initial={reduce ? false : { y: '-100%', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.1 }}
      className="sticky top-0 z-50 w-full bg-[#080808]/95 backdrop-blur-md border-b border-white/5 transition-[border-color,box-shadow,background-color] duration-500 data-[scrolled=true]:border-[#C6A66B]/15 data-[scrolled=true]:bg-[#080808]/98 data-[scrolled=true]:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-8 lg:px-12">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-2">
          {/* Brand Logo - Using user-supplied yunetra_logo.png */}
          <Link
            to="/"
            className="flex items-center group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] rounded-sm flex-shrink-0"
            aria-label="Yunetra Home"
          >
            <img
              src="/yunetra_logo.png"
              alt="Yunetra — Ideas Products People Forward"
              className="h-8 sm:h-10 md:h-12 lg:h-[50px] w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-10"
            aria-label="Main Navigation"
            onMouseLeave={() => setHovered(null)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setHovered(null);
            }}
          >
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                end={item.href === '/'}
                onMouseEnter={() => setHovered(item.name)}
                onFocus={() => setHovered(item.name)}
                className={({ isActive }) =>
                  `relative py-1 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:text-white ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#BFC4C8] hover:text-white'
                  }`
                }
              >
                <span>{item.name}</span>
                {indicatorName === item.name && (
                  <motion.span
                    layoutId="nav-indicator"
                    transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                    className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[#C6A66B] rounded-full"
                  />
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls: CTA Button & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="btn-sheen inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4AF77] active:bg-[#B09054] active:scale-[0.97] text-[#080808] font-semibold text-xs sm:text-sm transition-[background-color,transform,box-shadow] duration-300 hover:shadow-[0_8px_24px_-8px_rgba(198,166,107,0.6)] shadow-sm group select-none whitespace-nowrap"
            >
              <span className="hidden sm:inline">Start a Project</span>
              <span className="sm:hidden">Start Project</span>
              <ArrowSwap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>

            {/* Circular Hamburger Menu Button */}
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMobileMenuOpen((o) => !o)}
              className="lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 hover:border-[#C6A66B]/70 flex items-center justify-center text-white transition-[border-color,transform] duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] flex-shrink-0"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    <X className="w-4 h-4 text-[#BFC4C8]" />
                  </motion.span>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-3.5 sm:w-4 flex flex-col gap-1 items-center justify-center"
                  >
                    <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                    <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence initial={false}>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation"
              ref={drawerRef}
              key="drawer"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE_OUT }}
              className="lg:hidden overflow-hidden"
            >
              <div className="border-t border-white/10 py-4 space-y-2.5 bg-[#080808] px-2 rounded-b-xl">
                {navLinks.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={reduce ? false : { opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EASE_OUT, delay: 0.08 + i * 0.045 }}
                  >
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] ${
                          isActive
                            ? 'text-[#C6A66B] bg-white/5 font-semibold'
                            : 'text-[#BFC4C8] hover:text-white hover:bg-white/5'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
