import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import {
  ShieldCheck,
  Layers,
  Cpu,
  Target,
  Sparkles,
  Compass,
  ArrowRight,
} from 'lucide-react';

export default function About() {
  const metrics = [
    { value: '02', label: 'Flagship Platforms', sub: 'Ratnakhata & BoundaryX' },
    { value: '05', label: 'Core Engineering Domains', sub: 'Web, Mobile, Cloud, APIs, SLA' },
    { value: '99.98%', label: 'Platform Reliability', sub: 'Production SLA Benchmark' },
    { value: '100%', label: 'Zero-Trust Architecture', sub: 'Hardware & Cryptographic Rigor' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Deterministic Engineering',
      description:
        'We reject stochastic guesswork and frivolous complexity. Every hardware trace, algorithmic pipeline, and backend microservice is designed with predictable mathematical bounds.',
    },
    {
      icon: Cpu,
      title: 'Hardware & Optical Precision',
      description:
        'Physical platforms are engineered with tight tolerances, MIL-STD testing, and zero thermal degradation for continuous mission-critical facility deployments.',
    },
    {
      icon: ShieldCheck,
      title: 'Sovereign Data Cryptography',
      description:
        'From diamond supply chains to industrial edge boundaries, customer telemetry and institutional data are fortified behind hardware-enforced cryptographic boundaries.',
    },
    {
      icon: Layers,
      title: 'Product-First Craftsmanship',
      description:
        'Because we architect and maintain our own flagship enterprise platforms, we apply the exact same product rigor, speed, and long-term maintainability to all client systems.',
    },
  ];

  const milestones = [
    {
      year: '2024',
      title: 'Foundational R&D & Optical Lab',
      desc: 'Established research facility focused on optical sensor fusion, sub-millisecond edge telemetry, and enterprise valuation cryptography.',
    },
    {
      year: '2025',
      title: 'Ratnakhata Platform Launch',
      desc: 'Commercial debut of our precision valuation and ledger platform across the global diamond and certified gemstone trade.',
    },
    {
      year: '2026',
      title: 'BoundaryX & Enterprise Expansion',
      desc: 'Deployment of the BoundaryX industrial perimeter intelligence hardware alongside bespoke engineering services for corporate institutions.',
    },
  ];

  return (
    <div className="w-full bg-[#080808] text-[#F5F1E8] overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER WITH ATMOSPHERIC ARTWORK & STACKED HEADLINE */}
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
              <span>ABOUT YUNETRA</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>ENGINEERING PHILOSOPHY</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <span className="block text-[#F5F1E8]">IDEAS INTO PRODUCTS.</span>
              <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">BUILT FOR WHAT’S NEXT.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Yunetra is a technology company operating at the convergence of physical edge electronics, optical intelligence, and deterministic enterprise software systems. We engineer platforms built for uncompromising real-world reliability.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. METRICS BANNER                                        */}
      {/* ======================================================== */}
      <section className="relative w-full py-12 border-b border-[#232326] bg-[#0A0A0C]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] text-center hover:border-[#C6A66B]/50 transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <div
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-3xl sm:text-4xl text-[#C6A66B] uppercase"
                >
                  {m.value}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F5F1E8] font-sans mt-2">
                  {m.label}
                </div>
                <div className="text-[11px] text-[#858B92] font-sans mt-1">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. EDITORIAL DOCTRINE & MISSION / VISION                  */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
            
            {/* Left Column: Origin & Philosophy (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 rounded-2xl bg-[#0E0F10] border border-[#232326] space-y-6 flex flex-col justify-between shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              <div>
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
                  THE YUNETRA DOCTRINE
                </p>
                <h2
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
                >
                  ENGINEERED FOR REAL OUTCOMES
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#BFC4C8] font-sans leading-relaxed mt-6">
                  <p>
                    Modern technology often prioritizes rapid prototyping over systemic resilience—resulting in bloated software, fragile dependencies, and hardware that fails under real-world industrial constraints.
                  </p>
                  <p>
                    Yunetra was founded on a contrary philosophy: <strong className="text-[#F5F1E8]">Determinism</strong>. Whether we are calculating the refractive index and carat valuation of a rare diamond parcel or processing multi-spectrum perimeter telemetry in sub-millisecond windows, our systems are built to perform without compromise.
                  </p>
                  <p>
                    We build both our own proprietary platforms and develop customized software solutions for enterprises that refuse to accept downtime or operational ambiguity.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#232326] flex items-center justify-between text-xs text-[#858B92] font-sans">
                <div>Obsidian Black &bull; Warm Champagne Ivory &bull; Champagne Gold</div>
                <div className="text-[#C6A66B] font-semibold">EST. 2024</div>
              </div>
            </div>

            {/* Right Column: Mission & Vision Cards (5 cols) */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              
              <div className="p-8 rounded-2xl bg-[#0E0F10] border border-[#232326] space-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#2B2D31] flex items-center justify-center text-[#C6A66B]">
                  <Target className="w-5 h-5" />
                </div>
                <h3
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-2xl uppercase tracking-tight text-[#F5F1E8]"
                >
                  OUR MISSION
                </h3>
                <p className="text-sm text-[#BFC4C8] font-sans leading-relaxed">
                  To eliminate operational ambiguity across mission-critical sectors through precision hardware engineering, cryptographic ledger systems, and bespoke digital platforms.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#0E0F10] border border-[#232326] space-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#2B2D31] flex items-center justify-center text-[#C6A66B]">
                  <Compass className="w-5 h-5" />
                </div>
                <h3
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-2xl uppercase tracking-tight text-[#F5F1E8]"
                >
                  OUR VISION
                </h3>
                <p className="text-sm text-[#BFC4C8] font-sans leading-relaxed">
                  To serve as the global technical benchmark where physical measurement accuracy, autonomous intelligence, and enterprise software unite effortlessly.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CORE ENGINEERING PILLARS                              */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-[#252525] bg-[#0A0A0C]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
              FOUNDATIONAL PRINCIPLES
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              HOW WE ENGINEER SOLUTIONS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
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
                      {v.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#BFC4C8] font-sans leading-relaxed">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. EVOLUTION TIMELINE                                    */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 border-t border-[#252525]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
              TRAJECTORY &amp; GROWTH
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              ENGINEERING TIMELINE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#0E0F10] border border-[#232326] hover:border-[#C6A66B]/40 transition-colors space-y-3 relative shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
              >
                <span
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-4xl text-[#C6A66B] uppercase block"
                >
                  {m.year}
                </span>
                <h3 className="text-base font-bold text-[#F5F1E8] font-sans">
                  {m.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#BFC4C8] font-sans leading-relaxed">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Engagement Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#101112] via-[#141517] to-[#101112] border border-[#C6A66B]/40 text-center space-y-5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] font-sans select-none">
              COLLABORATE WITH YUNETRA
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              READY TO BUILD SOMETHING GREAT?
            </h2>
            <p className="text-sm text-[#BFC4C8] max-w-lg mx-auto font-sans leading-relaxed">
              Connect directly with our technical leadership and explore how Yunetra platforms and engineering capabilities can empower your operations.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] active:bg-[#B09054] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
              >
                <span>Engage With Leadership</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-[#080808]/70 hover:bg-white/5 border border-white/20 hover:border-[#C6A66B] text-white font-semibold text-xs uppercase tracking-wider transition-all"
              >
                <span>Explore Case Studies</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
