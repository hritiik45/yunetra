import React from 'react';
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

export default function Home() {
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
