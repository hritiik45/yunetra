import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { initSmoothScroll } from '../../lib/animations';

export default function MainLayout({ children }) {
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
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
