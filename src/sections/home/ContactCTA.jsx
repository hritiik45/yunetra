import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollScene, { applyParallax } from '../../hooks/useScrollScene';
import { Scene, Item, LineX, MaskLine, ClipReveal, Magnetic } from '../../components/motion';
import ArrowSwap from '../../components/ui/ArrowSwap';

export default function ContactCTA() {
  const sectionRef = useRef(null);

  useScrollScene(sectionRef, ({ q, isMobile }) => {
    applyParallax(q, { isMobile });
  });

  return (
    <section
      ref={sectionRef}
      id="contact-cta"
      aria-label="Contact Call to Action"
      className="relative w-full overflow-hidden bg-[#080808] border-t border-[#C6A66B]/35"
    >
      {/* Cinematic Mountain Landscape Background: opens through a mask, then drifts */}
      <Scene amount={0.1} className="absolute inset-0 pointer-events-none select-none z-0">
        <ClipReveal from="bottom" scale={1.12} className="absolute inset-0">
          <div data-parallax="0.08" className="w-full h-full">
            <img
              src="/images/hq/cta_mountain_bg.webp"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover object-[center_35%] opacity-85"
              aria-hidden="true"
            />
          </div>
        </ClipReveal>
        {/* Dark contrast gradient overlays */}
        <div className="absolute inset-0 bg-[#080808]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/85 via-[#080808]/60 to-[#080808]/50" />
        {/* Long fade into the footer */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
      </Scene>

      <Scene
        amount={0.25}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Eyebrow + Large Headline */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <Item
              as="p"
              className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4"
            >
              LET&apos;S BUILD TOGETHER
            </Item>

            {/* Headline */}
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.98] select-none text-[3.25rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.25rem]"
            >
              <MaskLine d={0.1} className="text-[#F5F1E8]">HAVE AN IDEA</MaskLine>
              <MaskLine d={0.22} className="text-[#C6A66B] mt-1 sm:mt-1.5">WORTH BUILDING?</MaskLine>
            </h2>

            {/* Gold accent rule that draws out beneath the headline */}
            <LineX
              d={0.6}
              className="mt-6 sm:mt-7 h-px w-28 sm:w-40 bg-gradient-to-r from-[#C6A66B] to-[#C6A66B]/0 origin-left"
            />
          </div>

          {/* Right Side: Supporting Copy + Dual CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4 xl:pl-8">
            {/* Supporting Text */}
            <Item
              as="p"
              d={0.45}
              className="text-sm sm:text-base text-[#F5F1E8] font-sans leading-relaxed max-w-md font-normal mb-7 sm:mb-8"
            >
              Share your idea or business need and let&apos;s turn it into a real product or digital solution.
            </Item>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 select-none">
              {/* Primary Button */}
              <Item d={0.65}>
                <Magnetic>
                  <Link
                    to="/contact"
                    className="btn-sheen inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B376] active:bg-[#B09054] active:scale-[0.98] text-[#080808] font-bold text-xs sm:text-sm transition-[background-color,transform,box-shadow] duration-300 hover:shadow-[0_12px_34px_-8px_rgba(198,166,107,0.65)] group shadow-md"
                  >
                    <span>Start a Project</span>
                    <ArrowSwap className="w-3.5 h-3.5" />
                  </Link>
                </Magnetic>
              </Item>

              {/* Secondary Button */}
              <Item d={0.77}>
                <Magnetic>
                  <Link
                    to="/contact"
                    className="btn-sheen inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-lg bg-[#080808]/70 hover:bg-[#151518] border border-[#3E4044] hover:border-[#C6A66B] active:scale-[0.98] text-[#F5F1E8] hover:text-[#C6A66B] font-semibold text-xs sm:text-sm transition-[background-color,border-color,color,transform] duration-300 shadow-sm"
                  >
                    <span>Contact Us</span>
                  </Link>
                </Magnetic>
              </Item>
            </div>
          </div>
        </div>
      </Scene>
    </section>
  );
}
