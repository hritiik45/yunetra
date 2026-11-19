import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trophy } from 'lucide-react';

export default function ProductShowcase() {
  const ratnakhataFeatures = [
    'Billing & Invoicing',
    'Inventory Management',
    'Customer Records',
    'Reports & Analytics',
  ];

  const boundaryxFeatures = [
    'Tournament Management',
    'Live Scoring',
    'Points Table & Stats',
    'Team & Player Management',
  ];

  return (
    <section
      id="products"
      aria-labelledby="our-products-heading"
      className="relative w-full overflow-hidden bg-[#F7F3EB] py-14 sm:py-18 lg:py-20 border-b-2 border-[#C6A66B]"
    >
      {/* Decorative Golden Orbital Curve Across Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M-50,440 C320,380 680,60 1480,20"
          stroke="#C6A66B"
          strokeWidth="1.2"
          opacity="0.45"
        />
      </svg>

      {/* Sparkling 4-Point Golden Star Flare */}
      <div
        className="absolute left-[16%] sm:left-[18%] lg:left-[21%] bottom-[8%] sm:bottom-[10%] lg:bottom-[12%] pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <div className="relative w-9 h-9 flex items-center justify-center">
          <div className="absolute w-7 h-7 rounded-full bg-[#C6A66B]/25 blur-md animate-pulse" />
          <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C6A66B] fill-current">
            <path d="M12 0L13.5 9.5 24 12 13.5 14.5 12 24 10.5 14.5 0 12 10.5 9.5z" />
          </svg>
        </div>
      </div>

      {/* Rugged Obsidian Mountain Silhouette at Bottom Left */}
      <img
        src="/images/hq/sec2_rock_left_clean.webp"
        alt=""
        className="absolute left-0 bottom-0 pointer-events-none select-none z-10 w-[240px] sm:w-[300px] lg:w-[380px] h-auto object-contain object-left-bottom"
        aria-hidden="true"
      />

      {/* Main Content Layout */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr_1.5fr] gap-6 lg:gap-6 xl:gap-8 items-stretch">
          
          {/* ======================================================== */}
          {/* COLUMN 1: LEFT INTRO (Eyebrow, Headline, Copy, CTA)     */}
          {/* ======================================================== */}
          <div className="flex flex-col justify-between py-1 lg:py-2">
            <div>
              {/* Eyebrow Label */}
              <div className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C6A66B] uppercase font-sans select-none mb-3 sm:mb-4">
                OUR PRODUCTS
              </div>

              {/* Large Condensed Headline in Anton */}
              <h2
                id="our-products-heading"
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight leading-[0.92] text-[2.75rem] sm:text-[3.25rem] lg:text-[2.85rem] xl:text-[3.4rem] 2xl:text-[3.75rem] select-none text-[#121212]"
              >
                <span className="block text-[#121212]">SOLUTIONS</span>
                <span className="block text-[#121212]">DESIGNED FOR</span>
                <span className="block text-[#C6A66B]">REAL BUSINESSES.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="mt-4 sm:mt-5 text-xs sm:text-[13px] text-[#4E4B47] font-sans leading-relaxed max-w-sm font-normal">
                Focused products built for specific industries. Practical, reliable and designed to create real value for businesses and communities.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-6 sm:mt-8">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-lg border border-[#121212]/30 hover:border-[#121212] bg-[#FAF7F2] hover:bg-white text-[#121212] font-semibold text-xs sm:text-sm transition-all shadow-sm group select-none text-center"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ======================================================== */}
          {/* COLUMN 2: RATNAKHATA CARD (Dark Luxury Jewellery Card)    */}
          {/* ======================================================== */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between min-h-[420px] sm:min-h-[440px] lg:min-h-[430px] xl:min-h-[440px] group transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.3)]">
            
            {/* Background Artwork Layer (Card Container, Laptop, Gold Ring, Silk Sheen & Rock Ledge) */}
            <img
              src="/images/hq/ratnakhata_card_backdrop.webp"
              alt="Ratnakhata Jewellery Software Interface"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-[1.01]"
            />

            {/* Accessible HTML Content on the Left Half */}
            <div className="relative z-10 w-[54%] sm:w-[50%] lg:w-[53%] xl:w-[50%] flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7">
              <div>
                {/* Brand Header */}
                <div className="flex items-center gap-2.5">
                  {/* Geometric Gold Diamond Icon */}
                  <div className="w-5 h-5 rounded-[3px] bg-[#C6A66B]/20 border border-[#C6A66B] rotate-45 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-[#C6A66B] rounded-[1px]" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-xl sm:text-2xl uppercase tracking-wider text-white select-none leading-none pt-0.5"
                  >
                    RATNAKHATA
                  </h3>
                </div>

                {/* Subtitle / Category */}
                <div className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#C6A66B] mt-1.5 font-sans">
                  Jewellery Business Software
                </div>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-[#BFC4C8] font-sans leading-relaxed font-normal">
                  Modern billing, inventory and business management software designed for jewellery retailers.
                </p>

                {/* Feature Checklist */}
                <ul className="mt-4 sm:mt-5 space-y-2 select-none" aria-label="Ratnakhata Features">
                  {ratnakhataFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#C6A66B] text-[#080808] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg
                          viewBox="0 0 12 12"
                          className="w-2 h-2 fill-none stroke-current stroke-[2.2]"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M2.5 6.2L4.8 8.5L9.5 3.5" />
                        </svg>
                      </span>
                      <span className="text-[11px] sm:text-xs font-medium text-white/90 font-sans">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-5 sm:mt-6">
                <Link
                  to="/products/ratnakhata"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] active:bg-[#B09054] text-[#080808] font-semibold text-xs sm:text-sm shadow-md transition-all group select-none text-center"
                >
                  <span>Explore Ratnakhata</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* COLUMN 3: BOUNDARYX CARD (Warm Ivory Cricket Platform)    */}
          {/* ======================================================== */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between min-h-[420px] sm:min-h-[440px] lg:min-h-[430px] xl:min-h-[440px] group transition-all duration-300 hover:shadow-[0_16px_50px_rgba(0,0,0,0.18)]">
            
            {/* Background Artwork Layer (Card Container, Phone, Ball, Rock Mountain & Organisers Arrow) */}
            <img
              src="/images/hq/boundaryx_card_backdrop.webp"
              alt="BoundaryX Cricket Tournament Interface"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 transition-transform duration-500 group-hover:scale-[1.01]"
            />

            {/* Accessible HTML Content on the Left Half */}
            <div className="relative z-10 w-[54%] sm:w-[50%] lg:w-[53%] xl:w-[50%] flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7 pt-10 sm:pt-11 lg:pt-12">
              <div>
                {/* Brand Header */}
                <div className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-[#C6A66B] fill-[#C6A66B] flex-shrink-0" />
                  <h3
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-xl sm:text-2xl uppercase tracking-wider text-[#121212] select-none leading-none pt-0.5"
                  >
                    BOUNDARYX
                  </h3>
                </div>

                {/* Subtitle / Category */}
                <div className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#121212] mt-1.5 font-sans">
                  Cricket Tournament Platform
                </div>

                {/* Description */}
                <p className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-[#55524E] font-sans leading-relaxed font-normal">
                  Organise, manage and run cricket tournaments with live scoring, fixtures and detailed statistics.
                </p>

                {/* Feature Checklist */}
                <ul className="mt-4 sm:mt-5 space-y-2 select-none" aria-label="BoundaryX Features">
                  {boundaryxFeatures.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 rounded-full bg-[#C6A66B] text-[#080808] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <svg
                          viewBox="0 0 12 12"
                          className="w-2 h-2 fill-none stroke-current stroke-[2.2]"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M2.5 6.2L4.8 8.5L9.5 3.5" />
                        </svg>
                      </span>
                      <span className="text-[11px] sm:text-xs font-medium text-[#222222] font-sans">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-5 sm:mt-6">
                <Link
                  to="/products/boundaryx"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg border border-[#121212]/30 hover:border-[#121212] bg-white hover:bg-[#121212]/5 text-[#121212] font-semibold text-xs sm:text-sm shadow-sm transition-all group select-none text-center"
                >
                  <span>Explore BoundaryX</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
