import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowRight, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080808]/95 backdrop-blur-md border-b border-white/5 transition-colors">
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
              className="h-8 sm:h-10 md:h-12 lg:h-[50px] w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-10" aria-label="Main Navigation">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative py-1 text-xs sm:text-sm font-medium tracking-wide transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-[#BFC4C8] hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-[-6px] left-0 right-0 h-[2px] bg-[#C6A66B] rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Controls: CTA Button & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4AF77] active:bg-[#B09054] text-[#080808] font-semibold text-xs sm:text-sm transition-all shadow-sm group select-none whitespace-nowrap"
            >
              <span className="hidden sm:inline">Start a Project</span>
              <span className="sm:hidden">Start Project</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            {/* Circular Hamburger Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/70 border border-white/20 hover:border-white/40 flex items-center justify-center text-white transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] flex-shrink-0"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4 text-[#BFC4C8]" />
              ) : (
                <div className="w-3.5 sm:w-4 flex flex-col gap-1 items-center justify-center">
                  <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                  <span className="w-full h-[1.5px] bg-white rounded-full"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-2.5 bg-[#080808] px-2 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'text-[#C6A66B] bg-white/5 font-semibold' : 'text-[#BFC4C8] hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
