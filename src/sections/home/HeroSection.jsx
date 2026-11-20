import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useInView } from 'framer-motion';
import { gsap } from '../../lib/animations';
import useScrollScene from '../../hooks/useScrollScene';
import { Scene, Item, Fade, LineX, LineY, MaskLine, ClipReveal, Magnetic } from '../../components/motion';
import ArrowSwap from '../../components/ui/ArrowSwap';
import StoryModal from '../../components/ui/StoryModal';

export default function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const sectionRef = useRef(null);

  // Content replays once the hero is mostly back in view; the artwork only
  // resets after the hero has fully left, so it never pops while scrubbing.
  const contentIn = useInView(sectionRef, { amount: 0.3 });
  const anyIn = useInView(sectionRef, { amount: 0 });

  // Scroll-linked depth + exit transition (scrubbed, so fully reversible).
  useScrollScene(sectionRef, ({ q, isDesktop }) => {
    const bg = q('[data-hero-bg]')[0];
    const shade = q('[data-hero-shade]')[0];
    const content = q('[data-hero-content]')[0];
    const seam = q('[data-hero-seam]')[0];

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });
    tl.to(bg, { yPercent: isDesktop ? 6 : 3, scale: isDesktop ? 1.14 : 1.06, duration: 1 }, 0)
      .to(shade, { opacity: 0.78, duration: 1 }, 0.15)
      .to(content, { y: isDesktop ? -70 : -30, opacity: 0, duration: 0.6 }, 0.1)
      .fromTo(seam, { scaleX: 0 }, { scaleX: 1, duration: 0.75 }, 0.25);
  });

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Yunetra Hero Section"
      className="relative min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-[#080808] flex items-center"
    >
      {/* Background Artwork Layer: Full container with precise focal alignment */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Scene state={anyIn ? 'visible' : 'hidden'} className="absolute inset-0">
          <ClipReveal from="left" scale={1.18} className="absolute inset-0">
            <div data-hero-bg className="w-full h-full will-change-transform">
              <img
                src="/images/hq/hero_artwork_perfect.webp"
                alt="Yunetra Precision Platform"
                className="w-full h-full object-cover object-[72%_top] lg:object-[68%_center]"
                fetchpriority="high"
              />
            </div>
          </ClipReveal>
        </Scene>

        {/* Mobile atmospheric overlay for optimal text contrast */}
        <div className="lg:hidden absolute inset-0 bg-[#080808]/75 pointer-events-none" />

        {/* Solid obsidian block behind left headline + smooth feather */}
        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-[42%] bg-[#080808] z-10" />
        <div className="hidden lg:block absolute left-[42%] top-0 bottom-0 w-40 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent z-10 pointer-events-none" />

        {/* Exit-transition shade: obsidian rises over the artwork as the hero is left */}
        <div
          data-hero-shade
          className="absolute inset-0 bg-[#080808] opacity-0 z-10 pointer-events-none"
        />
      </div>

      {/* Gold seam that draws across the hero's lower edge while scrolling out */}
      <div
        data-hero-seam
        className="absolute inset-x-0 bottom-0 h-px bg-[#C6A66B]/70 origin-left z-30 pointer-events-none scale-x-0"
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div
        data-hero-content
        className="relative z-20 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 will-change-transform"
      >
        <Scene state={contentIn ? 'visible' : 'hidden'}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-start">
            {/* Left Column (Headline, Tag, Description, CTAs, Scroll Indicator) */}
            <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center">
              {/* Eyebrow Badge */}
              <Item
                d={0.35}
                className="flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-[#C6A66B] mb-4 sm:mb-5 select-none font-sans"
              >
                <span>PRODUCTS</span>
                <span className="text-[#C6A66B] text-[10px]">✦</span>
                <span>TECHNOLOGY</span>
                <span className="text-[#C6A66B] text-[10px]">✦</span>
                <span>REAL IMPACT</span>
              </Item>

              {/* Oversized Headline in Anton bold condensed display font */}
              <h1
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight text-white leading-[0.88] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.25rem] xl:text-[6.25rem] 2xl:text-[7rem]"
              >
                <MaskLine d={0.45} className="text-[#F5F1E8]">IDEAS INTO</MaskLine>
                <MaskLine d={0.55} className="text-[#C6A66B]">PRODUCTS.</MaskLine>
                <MaskLine d={0.65} className="text-[#F5F1E8]">BUILT FOR</MaskLine>
                <MaskLine d={0.75} className="text-[#F5F1E8]">WHAT’S NEXT.</MaskLine>
              </h1>

              {/* Supporting Copy */}
              <Item
                as="p"
                d={0.95}
                className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-md sm:max-w-lg leading-relaxed font-normal"
              >
                We create software products and digital solutions designed to solve real business problems and help businesses move forward.
              </Item>

              {/* Action Buttons */}
              <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Item d={1.1} className="flex">
                  <Magnetic className="flex flex-1">
                    <Link
                      to="/products"
                      className="btn-sheen inline-flex w-full items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] active:bg-[#B09054] active:scale-[0.98] text-[#080808] font-semibold text-xs sm:text-sm transition-[background-color,transform,box-shadow] duration-300 hover:shadow-[0_10px_30px_-8px_rgba(198,166,107,0.55)] shadow-md group select-none text-center"
                    >
                      <span>Explore Our Products</span>
                      <ArrowSwap className="w-4 h-4" />
                    </Link>
                  </Magnetic>
                </Item>

                <Item d={1.2} className="flex">
                  <Magnetic className="flex flex-1">
                    <Link
                      to="/contact"
                      className="btn-sheen inline-flex w-full items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#080808]/70 hover:bg-white/5 border border-white/20 hover:border-[#C6A66B] active:scale-[0.98] text-white font-semibold text-xs sm:text-sm transition-[background-color,border-color,transform] duration-300 backdrop-blur-sm group select-none text-center"
                    >
                      <span>Build With Yunetra</span>
                      <ArrowSwap className="w-4 h-4" />
                    </Link>
                  </Magnetic>
                </Item>
              </div>

              {/* Scroll Indicator */}
              <Item
                d={1.45}
                className="mt-8 sm:mt-10 lg:mt-12 flex items-center gap-3.5 text-[#858B92] select-none"
              >
                <div className="w-5 h-9 rounded-full border border-white/25 flex justify-center pt-1.5 bg-black/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A66B] animate-bounce" />
                </div>
                <span className="text-[10px] tracking-[0.25em] uppercase font-medium text-[#858B92]">
                  Scroll to Explore
                </span>
              </Item>
            </div>

            {/* Middle Column (Vertical Keywords & Watch Our Story) */}
            <Fade
              d={0.7}
              className="hidden lg:flex lg:col-span-2 xl:col-span-2 flex-col justify-start pl-6 lg:pl-8 border-l border-white/10 z-20 self-start mt-2"
            >
              <div className="space-y-1.5 text-[11px] font-semibold tracking-[0.22em] text-[#C6A66B] uppercase font-sans">
                <Item d={1.0}>IDEAS</Item>
                <Item d={1.08}>PEOPLE</Item>
                <Item d={1.16}>PRODUCTS</Item>
                <Item d={1.24}>PROGRESS</Item>
              </div>
              <LineX d={1.35} className="w-8 h-[2px] bg-[#C6A66B] mt-4 mb-7 origin-left" />

              {/* Watch Our Story Trigger */}
              <Item d={1.5}>
                <button
                  type="button"
                  onClick={() => setVideoModalOpen(true)}
                  className="flex items-center gap-3.5 group cursor-pointer text-left select-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] rounded-full"
                  aria-label="Watch Our Story Video"
                  aria-haspopup="dialog"
                >
                  <div className="w-11 h-11 rounded-full border border-[#C6A66B] bg-black/60 flex items-center justify-center group-hover:bg-[#C6A66B]/20 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(198,166,107,0.12)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-sm">
                    <Play className="w-3.5 h-3.5 fill-[#C6A66B] text-[#C6A66B] ml-0.5" />
                  </div>
                  <div className="text-xs font-medium text-white leading-tight font-sans">
                    <div>Watch</div>
                    <div>Our Story</div>
                  </div>
                </button>
              </Item>
            </Fade>

            {/* Right Space reserved for Floating 3D Artwork */}
            <div className="hidden lg:block lg:col-span-4 xl:col-span-5" />
          </div>

          {/* Right Stacked Metrics (Visible on lg and larger) */}
          <div className="hidden lg:flex flex-col items-center justify-center space-y-6 text-center z-20 absolute right-6 sm:right-8 lg:right-12 xl:right-16 top-1/2 -translate-y-1/2 select-none">
            <Item d={1.15}>
              <div
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-4xl lg:text-5xl font-normal text-white tracking-tight leading-none"
              >
                02
              </div>
              <div className="text-[10px] tracking-[0.25em] font-semibold text-[#BFC4C8] uppercase mt-1.5 font-sans">
                Products
              </div>
            </Item>

            <LineY d={1.25} className="w-[1px] h-5 bg-white/20 origin-top" />

            <Item d={1.3}>
              <div
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-4xl lg:text-5xl font-normal text-white tracking-tight leading-none"
              >
                05+
              </div>
              <div className="text-[10px] tracking-[0.25em] font-semibold text-[#BFC4C8] uppercase mt-1.5 font-sans">
                Service Areas
              </div>
            </Item>

            <LineY d={1.4} className="w-[1px] h-5 bg-white/20 origin-top" />

            <Item d={1.45}>
              <div className="font-sans text-3xl lg:text-4xl font-bold text-white tracking-tight leading-none">
                &infin;
              </div>
              <div className="text-[10px] tracking-[0.25em] font-semibold text-[#BFC4C8] uppercase mt-1.5 font-sans">
                Possibilities
              </div>
            </Item>
          </div>

          {/* Bottom Right Optical Reticle & Label */}
          <Item
            d={1.65}
            className="hidden lg:flex items-center gap-4 z-20 absolute right-6 sm:right-8 lg:right-12 xl:right-16 bottom-10 select-none"
          >
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
          </Item>

          {/* Mobile/Tablet Fallback Metrics Strip */}
          <Item
            d={1.2}
            className="lg:hidden mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center z-10 relative"
          >
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
          </Item>
        </Scene>
      </div>

      {/* Optional Interactive Story Modal (portaled to <body>) */}
      <StoryModal open={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
    </section>
  );
}
