import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { prefersReducedMotion } from '../../lib/animations';
import { Scene, Item, MaskLine, spotlightMove } from '../../components/motion';

const testimonials = [
  {
    id: 1,
    quote:
      'Professional, reliable and easy to work with. The website they built for us has improved our online visibility and enquiries.',
    name: 'Business Owner',
    industry: 'Retail',
    avatar: '/images/hq/testimonial_avatar.webp',
  },
  {
    id: 2,
    quote:
      'Clear communication and strong technical skills. They understood our requirements and delivered exactly what we needed.',
    name: 'Product Founder',
    industry: 'Sports',
    avatar: '/images/hq/testimonial_avatar.webp',
  },
  {
    id: 3,
    quote:
      'Great project experience from start to finish. The team is responsive, supportive and delivers high-quality work.',
    name: 'Client',
    industry: 'Hospitality',
    avatar: '/images/hq/testimonial_avatar.webp',
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const [can, setCan] = useState({ prev: false, next: false });

  // The track is a real horizontal scroll-snap carousel. This measures whether
  // there is anything to scroll to, so the arrows are only live when they can act
  // (e.g. all three cards fit side by side on wide screens -> nothing to scroll).
  const measure = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const prev = el.scrollLeft > 4;
    const next = el.scrollLeft + el.clientWidth < el.scrollWidth - 4;
    setCan((c) => (c.prev === prev && c.next === next ? c : { prev, next }));
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return undefined;
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [measure]);

  const scroll = (direction) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const card = el.querySelector('[data-card]');
    const gap = parseFloat(getComputedStyle(el).columnGap) || 16;
    const amount = (card ? card.offsetWidth : 340) + gap;
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
  };

  const navBtn =
    'w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#3A3528] bg-[#0A0A0B] flex items-center justify-center transition-[border-color,background-color,opacity,transform] duration-300 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B] enabled:hover:border-[#C6A66B] enabled:hover:bg-[#C6A66B] enabled:active:scale-95 disabled:opacity-35 disabled:cursor-default';

  return (
    <section
      id="testimonials-section"
      aria-labelledby="testimonials-heading"
      className="relative w-full bg-[#080808] py-16 sm:py-20 lg:py-24 text-[#F5F1E8] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Top Header Row with Navigation Controls on Right */}
        <Scene className="flex items-start justify-between mb-8 sm:mb-10">
          <div>
            {/* Eyebrow */}
            <Item
              as="p"
              className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4"
            >
              WHAT PEOPLE SAY
            </Item>
          </div>

          {/* Top-Right Circular Navigation Controls */}
          <Item d={0.15} className="flex items-center gap-3 select-none">
            <button
              type="button"
              onClick={() => scroll('left')}
              disabled={!can.prev}
              className={navBtn}
              aria-label="Previous testimonial"
              aria-controls="testimonial-track"
            >
              <ArrowLeft className="w-4 h-4 text-[#C6A66B] group-enabled:group-hover:text-[#080808] transition-[transform,color] duration-300 group-enabled:group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              disabled={!can.next}
              className={navBtn}
              aria-label="Next testimonial"
              aria-controls="testimonial-track"
            >
              <ArrowRight className="w-4 h-4 text-[#C6A66B] group-enabled:group-hover:text-[#080808] transition-[transform,color] duration-300 group-enabled:group-hover:translate-x-0.5" />
            </button>
          </Item>
        </Scene>

        {/* Content Grid: Headline on Left + 3 Testimonial Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
          {/* Left Column: Oversized Condensed Headline */}
          <Scene className="lg:col-span-3 flex flex-col justify-start">
            <h2
              id="testimonials-heading"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.94] select-none text-[3.25rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.35rem] xl:text-[4.85rem]"
            >
              <MaskLine d={0.08} className="text-[#F5F1E8]">WHAT</MaskLine>
              <MaskLine d={0.18} className="text-[#F5F1E8] mt-1 sm:mt-1.5">PEOPLE</MaskLine>
              <MaskLine d={0.28} className="text-[#C6A66B] mt-1 sm:mt-1.5">SAY.</MaskLine>
            </h2>
          </Scene>

          {/* Right Column: Three Testimonial Cards (horizontal scroll-snap track) */}
          <Scene amount={0.15} className="lg:col-span-9 min-w-0">
            <div
              id="testimonial-track"
              ref={scrollContainerRef}
              onScroll={measure}
              tabIndex={0}
              role="region"
              aria-label="Client testimonials"
              className="flex gap-4 xl:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none overscroll-x-contain px-2 -mx-2 pt-4 -mt-4 pb-8 -mb-6 focus-visible:outline-none"
            >
              {testimonials.map((item, idx) => (
                <Item
                  key={item.id}
                  data-card
                  d={0.1 + idx * 0.14}
                  className="snap-start shrink-0 basis-[86%] sm:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] xl:basis-[calc((100%-2.5rem)/3)]"
                >
                  <div
                    onPointerMove={spotlightMove}
                    className="spotlight group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-xl overflow-hidden bg-gradient-to-b from-[#121314] to-[#0C0D0E] border border-[#222425] hover:border-[#C6A66B]/50 transition-[border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_4px_20px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.7)] hover:-translate-y-1.5"
                  >
                    {/* Gold hairline drawing across the top edge on hover */}
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 right-0 h-px bg-[#C6A66B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div className="relative">
                      {/* Gold Quotation Mark */}
                      <div className="mb-4 text-[#C6A66B] select-none flex items-center origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:-rotate-6">
                        <Quote className="w-7 h-7 fill-[#C6A66B] text-[#C6A66B]" />
                      </div>

                      {/* Testimonial Paragraph */}
                      <p className="text-xs sm:text-[13.5px] text-[#BFC4C8] group-hover:text-[#D5D9DC] transition-colors duration-500 font-sans leading-relaxed font-normal">
                        {item.quote}
                      </p>
                    </div>

                    <div className="relative">
                      {/* Thin Horizontal Divider */}
                      <div className="w-full h-[1px] bg-[#222425] my-5" />

                      {/* Client Avatar + Role Info */}
                      <div className="flex items-center gap-3.5 select-none">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover border border-[#2A2A2D] group-hover:border-[#C6A66B]/60 transition-colors duration-500"
                          loading="lazy"
                        />
                        <div>
                          <div className="text-sm font-bold text-[#F5F1E8] font-sans tracking-tight">
                            {item.name}
                          </div>
                          <div className="text-xs text-[#8E959E] font-sans font-normal mt-0.5">
                            {item.industry}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Item>
              ))}
            </div>
          </Scene>
        </div>
      </div>
    </section>
  );
}
