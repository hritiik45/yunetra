import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, X } from 'lucide-react';

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section
      id="hero"
      aria-label="Yunetra Hero Section"
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-[#080808] flex items-center"
    >
      {/* Background Artwork Layer: Full container with precise focal alignment */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/hq/hero_artwork_perfect.webp"
          alt="Yunetra Precision Platform"
          className="w-full h-full object-cover object-[72%_top] lg:object-[68%_center]"
          fetchPriority="high"
        />

        {/* Mobile atmospheric overlay for optimal text contrast */}
        <div className="lg:hidden absolute inset-0 bg-[#080808]/75 pointer-events-none" />

        {/* Solid obsidian block behind left headline + smooth feather */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[42%] bg-[#080808] z-10" />
        <div className="hidden lg:block absolute left-[42%] top-0 bottom-0 w-40 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
          
          {/* Left Column (Headline, Tag, Description, CTAs, Scroll Indicator) */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
            
            {/* Eyebrow Badge */}
            <div className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#C6A66B] mb-4 sm:mb-5 select-none font-sans">
              <span>PRODUCTS</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>TECHNOLOGY</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>REAL IMPACT</span>
            </div>

            {/* Oversized Headline in Anton bold condensed display font */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight text-white leading-[0.88] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.25rem] xl:text-[6.25rem] 2xl:text-[7rem]"
            >
              <span className="block text-[#F5F1E8]">IDEAS INTO</span>
              <span className="block text-[#C6A66B]">PRODUCTS.</span>
              <span className="block text-[#F5F1E8]">BUILT FOR</span>
              <span className="block text-[#F5F1E8]">WHAT’S NEXT.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-md sm:max-w-lg leading-relaxed font-normal">
              We create software products and digital solutions designed to solve real business problems and help businesses move forward.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] active:bg-[#B09054] text-[#080808] font-semibold text-xs sm:text-sm transition-all shadow-md group select-none text-center"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#080808]/70 hover:bg-white/5 border border-white/20 hover:border-[#C6A66B] text-white font-semibold text-xs sm:text-sm transition-all backdrop-blur-sm group select-none text-center"
              >
                <span>Build With Yunetra</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex items-center gap-3.5 text-[#858B92] select-none">
              <div className="w-5 h-9 rounded-full border border-white/25 flex justify-center pt-1.5 bg-black/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B] animate-bounce" />
              </div>
              <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#858B92]">
                Scroll to Explore
              </span>
            </div>
          </div>

          {/* Middle Column (Vertical Keywords & Watch Our Story) */}
          <div className="hidden lg:flex lg:col-span-2 xl:col-span-2 flex-col justify-start pl-6 lg:pl-8 border-l border-white/10 z-20 self-start mt-2">
            <div className="space-y-1.5 text-[11px] font-semibold tracking-[0.22em] text-[#C6A66B] uppercase font-sans">
              <div>IDEAS</div>
              <div>PEOPLE</div>
              <div>PRODUCTS</div>
              <div>PROGRESS</div>
            </div>
            <div className="w-8 h-[2px] bg-[#C6A66B] mt-4 mb-7" />

            {/* Watch Our Story Trigger */}
            <button
              type="button"
              onClick={() => setVideoModalOpen(true)}
              className="flex items-center gap-3.5 group cursor-pointer text-left select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] rounded-full"
              aria-label="Watch Our Story Video"
            >
              <div className="w-11 h-11 rounded-full border border-[#C6A66B] bg-black/60 flex items-center justify-center group-hover:bg-[#C6A66B]/20 group-hover:scale-105 transition-all shadow-sm">
                <Play className="w-3.5 h-3.5 fill-[#C6A66B] text-[#C6A66B] ml-0.5" />
              </div>
              <div className="text-xs font-medium text-white leading-tight font-sans">
                <div>Watch</div>
                <div>Our Story</div>
              </div>
            </button>
          </div>

          {/* Right Space reserved for Floating 3D Artwork */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />

        </div>

        {/* Right Stacked Metrics (Visible on lg and larger) */}
        <div className="hidden lg:flex flex-col items-center justify-center space-y-6 text-center z-20 absolute right-6 sm:right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 select-none">
          <div>
            <div
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-4xl lg:text-5xl font-normal text-white tracking-tight leading-none"
            >
              02
            </div>
            <div className="text-[10px] tracking-[0.25em] font-semibold text-[#BFC4C8] uppercase mt-1.5 font-sans">
              Products
            </div>
          </div>

          <div className="w-[1px] h-5 bg-white/20" />

          <div>
            <div
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-4xl lg:text-5xl font-normal text-white tracking-tight leading-none"
            >
              05+
            </div>
            <div className="text-[10px] tracking-[0.25em] font-semibold text-[#BFC4C8] uppercase mt-1.5 font-sans">
              Service Areas
            </div>
          </div>

          <div className="w-[1px] h-5 bg-white/20" />

          <div>
            <div className="font-sans text-3xl lg:text-4xl font-bold text-white tracking-tight leading-none">
              &infin;
            </div>
            <div className="text-[10px] tracking-[0.25em] font-semibold text-[#BFC4C8] uppercase mt-1.5 font-sans">
              Possibilities
            </div>
          </div>
        </div>

        {/* Bottom Right Optical Reticle & Label */}
        <div className="hidden lg:flex items-center gap-4 z-20 absolute right-6 sm:right-8 lg:right-12 xl:right-16 bottom-10 select-none">
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full border border-[#C6A66B]/60" />
            <div className="w-14 h-[1px] bg-[#C6A66B]/50 absolute" />
            <div className="h-14 w-[1px] bg-[#C6A66B]/50 absolute" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#F5F1E8] shadow-[0_0_12px_#C6A66B] absolute" />
          </div>
          <div>
            <div className="text-[10px] font-semibold tracking-[0.2em] text-white/90 leading-tight uppercase font-sans">
              <div>Technology</div>
              <div>For a Brighter</div>
              <div>Tomorrow</div>
            </div>
            <div className="w-10 h-[1.5px] bg-[#C6A66B] mt-2" />
          </div>
        </div>

        {/* Mobile/Tablet Fallback Metrics Strip */}
        <div className="lg:hidden mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center z-10 relative">
          <div>
            <div
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl font-normal text-white leading-none"
            >
              02
            </div>
            <div className="text-[9px] tracking-widest text-[#BFC4C8] uppercase mt-1">Products</div>
          </div>
          <div>
            <div
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl font-normal text-white leading-none"
            >
              05+
            </div>
            <div className="text-[9px] tracking-widest text-[#BFC4C8] uppercase mt-1">Service Areas</div>
          </div>
          <div>
            <div className="font-sans text-2xl font-bold text-white leading-none">&infin;</div>
            <div className="text-[9px] tracking-widest text-[#BFC4C8] uppercase mt-1">Possibilities</div>
          </div>
        </div>
      </div>

      {/* Optional Interactive Story Modal */}
      {videoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-in fade-in"
        >
          <div className="relative w-full max-w-2xl bg-[#121214] border border-white/15 rounded-xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B]"
              aria-label="Close story preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C6A66B] font-semibold font-sans">
                Yunetra Executive Overview
              </span>
              <h3
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-3xl uppercase tracking-tight text-white font-normal"
              >
                Architecting Industrial Systems
              </h3>
              <p className="text-sm text-[#BFC4C8] leading-relaxed font-sans">
                Yunetra bridges advanced optical measurement, edge computing hardware, and deterministic enterprise software platforms. Designed for mission-critical reliability across manufacturing, valuation, and security domains.
              </p>
              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(false)}
                  className="px-5 py-2 rounded-md bg-[#C6A66B] text-black text-xs font-semibold uppercase tracking-wider"
                >
                  Close Briefing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
