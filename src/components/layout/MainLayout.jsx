import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { initSmoothScroll } from '../../lib/animations';

export default function MainLayout({ children }) {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  useEffect(() => {
    // Optional smooth scrolling with automatic lifecycle cleanup
    const cleanup = initSmoothScroll();
    return () => {
      if (typeof cleanup === 'function') cleanup();
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main id="main-content" className="flex-1 focus:outline-none">
        <motion.div
          key={pathname}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {children || <Outlet />}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
