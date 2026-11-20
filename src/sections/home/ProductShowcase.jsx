import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, ExternalLink } from 'lucide-react';
import { gsap } from '../../lib/animations';
import useScrollScene, { applyParallax, drawPath } from '../../hooks/useScrollScene';
import { Scene, Item, Fade, MaskLine, ClipReveal } from '../../components/motion';
import ArrowSwap from '../../components/ui/ArrowSwap';

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

function FeatureList({ label, features, textClass, baseDelay }) {
  return (
    <ul className="mt-4 sm:mt-5 space-y-2 select-none" aria-label={label}>
      {features.map((feat, i) => (
        <Item as="li" key={feat} d={baseDelay + i * 0.09} className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-[#C6A66B] text-[#080808] flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-500 group-hover:scale-110">
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
          <span className={`text-[11px] sm:text-xs font-medium font-sans ${textClass}`}>{feat}</span>
        </Item>
      ))}
    </ul>
  );
}

export default function ProductShowcase() {
  const sectionRef = useRef(null);

  useScrollScene(sectionRef, ({ q, isMobile }) => {
    const section = sectionRef.current;

    // Entry transition from the hero: the ivory panel opens from an inset,
    // rounded frame to full width as it rises over the obsidian hero.
    gsap.fromTo(
      section,
      { clipPath: 'inset(5% 3.5% 0% 3.5% round 28px 28px 0px 0px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0px 0px 0px 0px)',
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top 100%',
          end: 'top 30%',
          scrub: true,
          invalidateOnRefresh: true,
        },
      }
    );

    // Orbital hairline draws as the section scrolls through (reverses on the way up).
    drawPath(q('[data-curve]')[0], section, { start: 'top 70%', end: 'bottom 55%' });

    // Restrained depth on product artwork + rock silhouette.
    applyParallax(q, { isMobile });
    const rock = q('[data-rock]')[0];
    if (rock) {
      gsap.fromTo(
        rock,
        { y: isMobile ? 20 : 50 },
        {
          y: isMobile ? -6 : -20,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    }
  });

  return (
    <section
      ref={sectionRef}
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
          data-curve
          d="M-50,440 C320,380 680,60 1480,20"
          stroke="#C6A66B"
          strokeWidth="1.2"
          opacity="0.45"
        />
      </svg>

      {/* Sparkling 4-Point Golden Star Flare */}
      <Scene
        className="absolute left-[16%] sm:left-[18%] lg:left-[21%] bottom-[8%] sm:bottom-[10%] lg:bottom-[12%] pointer-events-none select-none z-10"
        aria-hidden="true"
      >
        <Fade d={0.6}>
          <div className="relative w-9 h-9 flex items-center justify-center">
            <div className="absolute w-7 h-7 rounded-full bg-[#C6A66B]/25 blur-md animate-pulse" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#C6A66B] fill-current">
              <path d="M12 0L13.5 9.5 24 12 13.5 14.5 12 24 10.5 14.5 0 12 10.5 9.5z" />
            </svg>
          </div>
        </Fade>
      </Scene>

      {/* Rugged Obsidian Mountain Silhouette at Bottom Left */}
      <img
        data-rock
        src="/images/hq/sec2_rock_left_clean.webp"
        alt=""
        loading="lazy"
        className="absolute left-0 bottom-0 pointer-events-none select-none z-10 w-[240px] sm:w-[300px] lg:w-[380px] h-auto object-contain object-left-bottom will-change-transform"
        aria-hidden="true"
      />

      {/* Main Content Layout */}
      <div className="relative z-20 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr_1.5fr] gap-6 lg:gap-6 xl:gap-8 items-stretch">
          {/* ======================================================== */}
          {/* COLUMN 1: LEFT INTRO (Eyebrow, Headline, Copy, CTA)     */}
          {/* ======================================================== */}
          <Scene className="flex flex-col justify-between py-1 lg:py-2">
            <div>
              {/* Eyebrow Label */}
              <Item className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C6A66B] uppercase font-sans select-none mb-3 sm:mb-4">
                OUR PRODUCTS
              </Item>

              {/* Large Condensed Headline in Anton */}
              <h2
                id="our-products-heading"
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight leading-[0.92] text-[2.75rem] sm:text-[3.25rem] lg:text-[2.85rem] xl:text-[3.4rem] 2xl:text-[3.75rem] select-none text-[#121212]"
              >
                <MaskLine d={0.08} className="text-[#121212]">SOLUTIONS</MaskLine>
                <MaskLine d={0.18} className="text-[#121212]">DESIGNED FOR</MaskLine>
                <MaskLine d={0.28} className="text-[#C6A66B]">REAL BUSINESSES.</MaskLine>
              </h2>

              {/* Supporting Copy */}
              <Item
                as="p"
                d={0.5}
                className="mt-4 sm:mt-5 text-xs sm:text-[13px] text-[#4E4B47] font-sans leading-relaxed max-w-sm font-normal"
              >
                Focused products built for specific industries. Practical, reliable and designed to create real value for businesses and communities.
              </Item>
            </div>

            {/* CTA Button */}
            <Item d={0.65} className="mt-6 sm:mt-8">
              <Link
                to="/products"
                className="btn-sheen inline-flex items-center justify-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-lg border border-[#121212]/30 hover:border-[#121212] bg-[#FAF7F2] hover:bg-white text-[#121212] font-semibold text-xs sm:text-sm transition-[background-color,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-md shadow-sm group select-none text-center"
              >
                <span>View All Products</span>
                <ArrowSwap className="w-4 h-4" />
              </Link>
            </Item>
          </Scene>

          {/* ======================================================== */}
          {/* COLUMN 2: RATNAKHATA CARD (Dark Luxury Jewellery Card)    */}
          {/* ======================================================== */}
          <Scene amount={0.15} className="flex">
            <Item d={0.15} className="flex flex-1">
              <div className="group relative flex flex-1 flex-col rounded-3xl shadow-2xl ring-1 ring-transparent hover:ring-[#C6A66B]/60 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <ClipReveal
                  from="bottom"
                  radius="24px"
                  scale={1.1}
                  d={0.15}
                  className="relative flex flex-1 flex-col rounded-3xl overflow-hidden"
                  innerClassName="flex flex-1 flex-col justify-between min-h-[420px] sm:min-h-[440px] lg:min-h-[430px] xl:min-h-[440px]"
                >
                  {/* Background Artwork Layer (Card Container, Laptop, Gold Ring, Silk Sheen & Rock Ledge) */}
                  <div data-parallax="0.012" className="absolute inset-0 z-0 pointer-events-none select-none">
                    <img
                      src="/images/hq/ratnakhata_card_backdrop.webp"
                      alt="Ratnakhata Jewellery Software Interface"
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                    />
                  </div>

                  {/* Accessible HTML Content on the Left Half */}
                  <div className="relative z-10 w-[54%] sm:w-[50%] lg:w-[53%] xl:w-[50%] flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7 flex-1">
                    <div>
                      {/* Brand Header */}
                      <Item d={0.55} className="flex items-center gap-2.5">
                        {/* Geometric Gold Diamond Icon */}
                        <div className="w-5 h-5 rounded-[3px] bg-[#C6A66B]/20 border border-[#C6A66B] rotate-45 flex items-center justify-center flex-shrink-0 transition-transform duration-700 group-hover:rotate-[135deg]">
                          <div className="w-2 h-2 bg-[#C6A66B] rounded-[1px]" />
                        </div>
                        <h3
                          style={{ fontFamily: "'Anton', sans-serif" }}
                          className="text-xl sm:text-2xl uppercase tracking-wider text-white select-none leading-none pt-0.5"
                        >
                          RATNAKHATA
                        </h3>
                      </Item>

                      {/* Subtitle / Category */}
                      <Item d={0.65} className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#C6A66B] mt-1.5 font-sans">
                        Jewellery Business Software
                      </Item>

                      {/* Description */}
                      <Item as="p" d={0.72} className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-[#BFC4C8] font-sans leading-relaxed font-normal">
                        Modern billing, inventory and business management software designed for jewellery retailers.
                      </Item>

                      {/* Feature Checklist */}
                      <FeatureList
                        label="Ratnakhata Features"
                        features={ratnakhataFeatures}
                        textClass="text-white/90"
                        baseDelay={0.85}
                      />
                    </div>

                    {/* Action Button */}
                    <Item d={1.25} className="mt-5 sm:mt-6">
                      <Link
                        to="/products/ratnakhata"
                        className="btn-sheen inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] active:bg-[#B09054] active:scale-[0.98] text-[#080808] font-semibold text-xs sm:text-sm shadow-md hover:shadow-[0_10px_28px_-8px_rgba(198,166,107,0.6)] transition-[background-color,transform,box-shadow] duration-300 group select-none text-center"
                      >
                        <span>Explore Ratnakhata</span>
                        <ArrowSwap className="w-4 h-4" />
                      </Link>
                    </Item>
                  </div>
                </ClipReveal>
              </div>
            </Item>
          </Scene>

          {/* ======================================================== */}
          {/* COLUMN 3: BOUNDARYX CARD (Warm Ivory Cricket Platform)    */}
          {/* ======================================================== */}
          <Scene amount={0.15} className="flex">
            <Item d={0.3} className="flex flex-1">
              <div className="group relative flex flex-1 flex-col rounded-3xl shadow-xl ring-1 ring-transparent hover:ring-[#C6A66B]/60 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(0,0,0,0.22)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                <ClipReveal
                  from="bottom"
                  radius="24px"
                  scale={1.1}
                  d={0.3}
                  className="relative flex flex-1 flex-col rounded-3xl overflow-hidden"
                  innerClassName="flex flex-1 flex-col justify-between min-h-[420px] sm:min-h-[440px] lg:min-h-[430px] xl:min-h-[440px]"
                >
                  {/* Background Artwork Layer (Card Container, Phone, Ball, Rock Mountain & Organisers Arrow) */}
                  <div data-parallax="0.012" className="absolute inset-0 z-0 pointer-events-none select-none">
                    <img
                      src="/images/hq/boundaryx_card_backdrop.webp"
                      alt="BoundaryX Cricket Tournament Interface"
                      loading="lazy"
                      className="w-full h-full object-cover object-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.035]"
                    />
                  </div>

                  {/* Accessible HTML Content on the Left Half */}
                  <div className="relative z-10 w-[54%] sm:w-[50%] lg:w-[53%] xl:w-[50%] flex flex-col justify-between h-full p-5 sm:p-6 lg:p-7 pt-10 sm:pt-11 lg:pt-12 flex-1">
                    <div>
                      {/* Brand Header */}
                      <Item d={0.7} className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-[#C6A66B] fill-[#C6A66B] flex-shrink-0 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                        <h3
                          style={{ fontFamily: "'Anton', sans-serif" }}
                          className="text-xl sm:text-2xl uppercase tracking-wider text-[#121212] select-none leading-none pt-0.5"
                        >
                          BOUNDARYX
                        </h3>
                      </Item>

                      {/* Subtitle / Category */}
                      <Item d={0.8} className="text-xs sm:text-[13px] font-semibold tracking-wide text-[#121212] mt-1.5 font-sans">
                        Cricket Tournament Platform
                      </Item>

                      {/* Description */}
                      <Item as="p" d={0.87} className="mt-2.5 sm:mt-3 text-[11px] sm:text-xs text-[#55524E] font-sans leading-relaxed font-normal">
                        Organise, manage and run cricket tournaments with live scoring, fixtures and detailed statistics.
                      </Item>

                      {/* Feature Checklist */}
                      <FeatureList
                        label="BoundaryX Features"
                        features={boundaryxFeatures}
                        textClass="text-[#222222]"
                        baseDelay={1.0}
                      />
                    </div>

                    {/* Action Buttons */}
                    <Item d={1.4} className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
                      <a
                        href="https://boundaryx.yunetra.com/user/home"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sheen inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-3 rounded-lg bg-[#121212] hover:bg-[#252525] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all group select-none text-center"
                      >
                        <span>Launch App</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#C6A66B]" />
                      </a>
                      <Link
                        to="/products/boundaryx"
                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-3 rounded-lg border border-[#121212]/30 hover:border-[#121212] bg-white hover:bg-[#121212]/5 active:scale-[0.98] text-[#121212] font-semibold text-xs sm:text-sm shadow-sm hover:shadow-md transition-all group select-none text-center"
                      >
                        <span>Explore</span>
                        <ArrowSwap className="w-3.5 h-3.5" />
                      </Link>
                    </Item>
                  </div>
                </ClipReveal>
              </div>
            </Item>
          </Scene>
        </div>
      </div>
    </section>
  );
}
