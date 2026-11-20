import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Pages
import Home from '../pages/Home';
import Products from '../pages/Products';
import Ratnakhata from '../pages/Ratnakhata';
import BoundaryX from '../pages/BoundaryX';
import Services from '../pages/Services';
import About from '../pages/About';
import Contact from '../pages/Contact';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import TermsConditions from '../pages/TermsConditions';
import RefundPolicy from '../pages/RefundPolicy';
import ShippingPolicy from '../pages/ShippingPolicy';
import Portfolio from '../pages/Portfolio';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { scrollToTop, refreshScrollTriggers } from '../lib/animations';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Lenis-aware jump to top, then recalculate ScrollTrigger positions for the new page.
    scrollToTop();
    const id = requestAnimationFrame(() => refreshScrollTriggers());
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return null;
}

// 404 Fallback component
function NotFound() {
  return (
    <div className="py-28 bg-[#080808] min-h-[70vh] flex items-center justify-center text-center px-6">
      <div className="max-w-xl mx-auto">
        <div className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-[0.25em] text-[#C6A66B] px-3.5 py-1 rounded-full bg-[#111113] border border-[#232326]">
          <span>ERROR 404</span>
          <span>✦</span>
          <span>SIGNAL LOST</span>
        </div>
        <h1
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-4xl sm:text-6xl text-[#F5F1E8] uppercase tracking-tight mt-6 leading-tight"
        >
          ROUTE NOT FOUND
        </h1>
        <p className="mt-4 text-sm sm:text-base text-[#BFC4C8] font-sans leading-relaxed">
          The requested system route does not exist or has been relocated to another namespace.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-semibold text-xs sm:text-sm transition-all"
          >
            Return to Headquarters &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/ratnakhata" element={<Ratnakhata />} />
          <Route path="/products/boundaryx" element={<BoundaryX />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
