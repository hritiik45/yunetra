import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Cpu } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 'ratnakhata',
      title: 'Ratnakhata',
      eyebrow: 'FLAGSHIP SOFTWARE PLATFORM',
      tagline: 'Precision Diamond & Gemstone Valuation Intelligence',
      description:
        'A specialized enterprise software platform engineered for high-value gemstone inventory control, automated cryptographic accounting, and certified laboratory grading workflows.',
      features: [
        'Automated Carat Weight & Optical Geometry Tracking',
        'Certified Cryptographic Ledger for Chain-of-Custody',
        'Real-time Multi-Currency & Market Index Feeds',
        'Multi-Facility Inventory Vault Synchronization',
      ],
      slug: '/products/ratnakhata',
      image: '/images/hq/ratnakhata_mockup.webp',
      badge: 'Active Platform',
    },
    {
      id: 'boundaryx',
      title: 'BoundaryX',
      eyebrow: 'INDUSTRIAL EDGE HARDWARE & AI',
      tagline: 'Autonomous Perimeter Sensor Fusion & Telemetry',
      description:
        'High-performance hardware-software infrastructure delivering ultra-reliable boundary telemetry, optical and thermal surveillance fusion, and real-time defense computing.',
      features: [
        'Sub-millisecond Edge Sensor Fusion Architecture',
        'Ruggedized MIL-STD-810H Enclosure & Thermal Envelope',
        'Multi-Spectrum Optical & Thermal Telemetry Ingestion',
        'Zero-Trust Encrypted Hardware Security Module (HSM)',
      ],
      slug: '/products/boundaryx',
      image: '/images/hq/boundaryx_mockup.webp',
      badge: 'Active System',
    },
  ];

  return (
    <div className="w-full bg-[#080808] text-[#F5F1E8] overflow-hidden">
      
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
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4">
              <span>PROPRIETARY ECOSYSTEM</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>ENGINEERED PRODUCTS</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <span className="block text-[#F5F1E8]">ENGINEERED PRODUCTS.</span>
              <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">UNCOMPROMISING RIGOR.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Explore our core hardware and software platforms built for extreme precision, institutional valuation control, and mission-critical perimeter computing.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. PRODUCT CARDS SECTION                                 */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="space-y-14">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="p-8 sm:p-12 rounded-2xl bg-[#0E0F10] border border-[#232326] hover:border-[#C6A66B]/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Left Column: Product Info & Highlights (7 cols) */}
                  <div className="lg:col-span-7 space-y-5">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md bg-[#141517] border border-[#2B2D31] text-[#C6A66B] font-sans">
                        {prod.eyebrow}
                      </span>
                      <span className="text-xs text-[#858B92] font-mono">
                        {prod.badge}
                      </span>
                    </div>

                    <h2
                      style={{ fontFamily: "'Anton', sans-serif" }}
                      className="text-4xl sm:text-5xl uppercase tracking-tight text-[#F5F1E8]"
                    >
                      {prod.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#C6A66B] font-sans">
                      {prod.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#BFC4C8] leading-relaxed font-sans">
                      {prod.description}
                    </p>

                    {/* Features Grid */}
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#858B92] font-sans mb-3">
                        CORE ARCHITECTURAL PILLARS:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {prod.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F1E8] font-sans">
                            <CheckCircle2 className="w-4 h-4 text-[#C6A66B] mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <Link
                        to={prod.slug}
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
                      >
                        <span>Explore {prod.title} Architecture</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-[#141517] hover:bg-[#1A1C1F] border border-[#2B2D31] hover:border-[#C6A66B] text-[#F5F1E8] hover:text-[#C6A66B] text-xs uppercase font-semibold tracking-wider transition-all"
                      >
                        <span>Request Demonstration</span>
                      </Link>
                    </div>

                  </div>

                  {/* Right Column: Visual Mockup (5 cols) */}
                  <div className="lg:col-span-5 bg-[#080808] rounded-xl p-8 border border-[#232326] flex items-center justify-center group overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full max-h-[320px] object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Custom Build CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#101112] via-[#141517] to-[#101112] border border-[#C6A66B]/40 text-center space-y-5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] font-sans select-none">
              ENTERPRISE LICENSING
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              NEED TAILORED PLATFORM DEPLOYMENTS?
            </h2>
            <p className="text-sm text-[#BFC4C8] max-w-lg mx-auto font-sans leading-relaxed">
              We engineer custom hardware sensor configurations, private cloud instances, and proprietary workflow integrations.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Schedule Architectural Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
