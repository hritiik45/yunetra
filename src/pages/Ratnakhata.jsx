import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Layers,
  Database,
  Lock,
  Sparkles,
  BarChart3,
  RefreshCw,
  Cpu,
} from 'lucide-react';
import usePageMotion from '../hooks/usePageMotion';
import { MaskLine } from '../components/motion';

export default function Ratnakhata() {
  const pageRef = React.useRef(null);
  usePageMotion(pageRef);
  const pillars = [
    {
      icon: BarChart3,
      title: 'Automated Carat Weight & Optical Geometry Tracking',
      description:
        'Direct optical ingestion mapping facets, table percentages, pavilion angles, and color saturation into deterministic digital asset records.',
    },
    {
      icon: Lock,
      title: 'Certified Cryptographic Ledger for Chain-of-Custody',
      description:
        'Immutable cryptographic audit trails tracking every gemstone parcel from raw import intake through certified laboratory grading and distribution.',
    },
    {
      icon: RefreshCw,
      title: 'Real-time Multi-Currency & Market Index Feeds',
      description:
        'Dynamic synchronization with international diamond exchange indices, Rapaport pricing metrics, and multi-currency exchange rates.',
    },
    {
      icon: Database,
      title: 'Multi-Facility Inventory Vault Synchronization',
      description:
        'Enterprise multi-vault management with role-based access control, consignment tracking, and live physical custody verification.',
    },
  ];

  const specs = [
    { label: 'Platform Architecture', value: 'Multi-Tenant Cloud or On-Premises Air-Gapped' },
    { label: 'Data Encryption', value: 'AES-256 at Rest & TLS 1.3 in Transit' },
    { label: 'Valuation Precision', value: 'Deterministic ±0.01% Mathematical Resolution' },
    { label: 'Integration APIs', value: 'RESTful JSON & GraphQL Endpoints' },
    { label: 'Compliance Standards', value: 'Kimberley Process & Anti-Money Laundering (AML)' },
    { label: 'Uptime SLA', value: '99.98% High-Availability Multi-Region' },
  ];

  return (
    <div ref={pageRef} className="w-full bg-[#080808] text-[#F5F1E8] overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER WITH ATMOSPHERIC BACKDROP & MASSIVE HEADLINE */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden border-b border-[#252525] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
        
        {/* Background Artwork Overlay */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/images/hq/cta_mountain_bg.webp"
            alt=""
            className="w-full h-full object-cover object-[center_35%] opacity-35"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#080808]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/60" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Headline Column (7 cols) */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4">
                <span>FLAGSHIP SOFTWARE PLATFORM</span>
                <span className="text-[#C6A66B] text-[10px]">✦</span>
                <span>VALUATION INTELLIGENCE</span>
              </div>

              {/* Giant Stacked Anton Headline */}
              <h1
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
              >
                <MaskLine standalone d={0.15} className="text-[#F5F1E8]">RATNAKHATA.</MaskLine>
                <MaskLine standalone d={0.27} className="text-[#C6A66B] mt-1 sm:mt-1.5">PRECISION VALUATION.</MaskLine>
              </h1>

              {/* Supporting Copy */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-xl leading-relaxed font-normal">
                High-integrity valuation intelligence and cryptographic accounting systems engineered specifically for the global diamond and certified gemstone trade. Eliminates operational ambiguity across your entire custody pipeline.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="btn-sheen inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
                >
                  <span>Request Ratnakhata Demo</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-lg bg-[#141517] hover:bg-[#1A1C1F] border border-[#2B2D31] hover:border-[#C6A66B] text-[#F5F1E8] hover:text-[#C6A66B] text-xs uppercase font-semibold tracking-wider transition-all"
                >
                  <span>All Products</span>
                </Link>
              </div>
            </div>

            {/* Right Mockup Column (5 cols) */}
            <div className="lg:col-span-5 bg-[#0A0A0C] rounded-2xl p-8 border border-[#232326] shadow-[0_8px_32px_rgba(0,0,0,0.6)] flex items-center justify-center">
              <img
                src="/images/hq/ratnakhata_mockup.webp"
                alt="Ratnakhata Platform Interface"
                className="w-full max-h-[340px] object-contain"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. ARCHITECTURAL PILLARS                                 */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 border-b border-[#252525]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
              SYSTEM CAPABILITIES
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              CORE ARCHITECTURAL PILLARS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-[#0E0F10] border border-[#232326] hover:border-[#C6A66B]/50 transition-all duration-300 space-y-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#2B2D31] flex items-center justify-center text-[#C6A66B]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-xl uppercase tracking-tight text-[#F5F1E8]"
                    >
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#BFC4C8] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. TECHNICAL SPECIFICATIONS MATRIX                       */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0A0A0C]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
              TECHNICAL GOVERNANCE
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              SYSTEM SPECIFICATIONS
            </h2>
          </div>

          <div className="rounded-2xl bg-[#0E0F10] border border-[#232326] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <div className="divide-y divide-[#232326]">
              {specs.map((item, idx) => (
                <div key={idx} className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-6 hover:bg-[#141517] transition-colors">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#C6A66B] font-sans">
                    {item.label}
                  </span>
                  <span className="text-sm sm:text-base font-medium text-[#F5F1E8] font-sans">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Consultation CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#101112] via-[#141517] to-[#101112] border border-[#C6A66B]/40 text-center space-y-5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] font-sans select-none">
              ENTERPRISE ONBOARDING
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              READY TO MODERNIZE YOUR GEMSTONE VALUATION?
            </h2>
            <p className="text-sm text-[#BFC4C8] max-w-lg mx-auto font-sans leading-relaxed">
              Schedule a direct walkthrough with our diamond technology directors and see how Ratnakhata can integrate into your operations.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="btn-sheen inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Schedule Live Demonstration</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
