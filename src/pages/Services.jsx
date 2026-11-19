import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import {
  Monitor,
  Smartphone,
  Code2,
  Layers,
  Settings,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  Zap,
} from 'lucide-react';

export default function Services() {
  const iconMap = {
    'website-development': Monitor,
    'mobile-app-development': Smartphone,
    'custom-software': Code2,
    'api-integrations': Layers,
    'maintenance-support': Settings,
  };

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
              <span>SPECIALIZED CAPABILITIES</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>TURNKEY ENGINEERING</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <span className="block text-[#F5F1E8]">HIGH-PERFORMANCE.</span>
              <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">DIGITAL SOLUTIONS.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              From high-velocity web platforms and native mobile applications to custom enterprise architectures and 24/7 SLA maintenance, we engineer software tailored to your exact business operations.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. VALUE PROPOSITION STRIP                               */}
      {/* ======================================================== */}
      <section className="relative w-full py-12 border-b border-[#232326] bg-[#0A0A0C]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#2B2D31] flex items-center justify-center text-[#C6A66B] flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">
                  Sub-Second Performance
                </h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans leading-relaxed">
                  Obsessively optimized codebases delivering near-instant load speeds and fluid 60 FPS transitions.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#2B2D31] flex items-center justify-center text-[#C6A66B] flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">
                  Enterprise Security
                </h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans leading-relaxed">
                  Built-in zero-trust authentication, cryptographic data hygiene, and automated security monitoring.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <div className="w-10 h-10 rounded-lg bg-[#080808] border border-[#2B2D31] flex items-center justify-center text-[#C6A66B] flex-shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">
                  Bespoke Craftsmanship
                </h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans leading-relaxed">
                  No generic templates. Every system is engineered specifically around your organizational operational flows.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. DETAILED 5 SERVICES CARDS                             */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="space-y-10">
            {services.map((item) => {
              const Icon = iconMap[item.id] || Code2;
              return (
                <div
                  key={item.id}
                  id={item.id}
                  className="p-8 sm:p-12 rounded-2xl bg-[#0E0F10] border border-[#232326] hover:border-[#C6A66B]/50 transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Number, Title, Description, Tech Stack (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <span
                          style={{ fontFamily: "'Anton', sans-serif" }}
                          className="text-lg text-[#C6A66B] uppercase tracking-wide"
                        >
                          CAPABILITY {item.number}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#080808] border border-[#2B2D31] flex items-center justify-center text-[#C6A66B]">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <h2
                        style={{ fontFamily: "'Anton', sans-serif" }}
                        className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
                      >
                        {item.title}
                      </h2>

                      <p className="text-sm font-semibold text-[#C6A66B] font-sans">
                        {item.tagline}
                      </p>

                      <p className="text-sm sm:text-base text-[#BFC4C8] leading-relaxed font-sans pt-1">
                        {item.description}
                      </p>

                      {/* Tech Stack Pills */}
                      <div className="pt-2">
                        <div className="text-xs uppercase tracking-wider text-[#858B92] font-sans font-semibold mb-2.5">
                          KEY TECHNOLOGIES:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs px-3 py-1.5 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Deliverables & Action (5 cols) */}
                    <div className="lg:col-span-5 p-7 rounded-xl bg-[#141517] border border-[#2B2D31] flex flex-col justify-between h-full space-y-6">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#C6A66B] font-sans mb-4">
                          WHAT WE DELIVER:
                        </h3>
                        <ul className="space-y-3">
                          {item.deliverables.map((deliv, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#F5F1E8] font-sans">
                              <CheckCircle2 className="w-4 h-4 text-[#C6A66B] mt-0.5 flex-shrink-0" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-5 border-t border-[#232326]">
                        <div className="text-xs text-[#858B92] font-sans mb-4">
                          <strong className="text-[#F5F1E8]">Ideal For:</strong> {item.idealFor}
                        </div>
                        <Link
                          to="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] active:bg-[#B09054] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
                        >
                          <span>Consult on {item.title}</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Consultation Banner */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#101112] via-[#141517] to-[#101112] border border-[#C6A66B]/40 text-center space-y-5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] font-sans select-none">
              ARCHITECTURAL ADVISORY
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              HAVE A SPECIALIZED TECHNICAL REQUIREMENT?
            </h2>
            <p className="text-sm text-[#BFC4C8] max-w-xl mx-auto font-sans leading-relaxed">
              We specialize in solving complex hardware-software boundary challenges, high-frequency valuation pipelines, and custom security protocols.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Schedule Engineering Discovery Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
