import React, { useEffect } from 'react';
import {
  HeroSection,
  ProductShowcase,
  ServicesSection,
  AboutSection,
  PortfolioSection,
  ProcessSection,
  TestimonialsSection,
  ContactCTA,
} from '../sections/home';
import { refreshScrollTriggers } from '../lib/animations';

export default function Home() {
  // ScrollTrigger measures section positions. Re-measure once fonts and images
  // have settled so pinned/scrubbed ranges are exact after load / refresh.
  useEffect(() => {
    let cancelled = false;
    const refresh = () => {
      if (!cancelled) refreshScrollTriggers();
    };
    document.fonts?.ready?.then(refresh);
    window.addEventListener('load', refresh);
    const t = setTimeout(refresh, 600);
    return () => {
      cancelled = true;
      clearTimeout(t);
      window.removeEventListener('load', refresh);
    };
  }, []);

  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  );
}
