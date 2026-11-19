import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { prefersReducedMotion } from '../../lib/animations';

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
  const shouldReduceMotion = prefersReducedMotion();
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 340;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="testimonials-section"
      aria-labelledby="testimonials-heading"
      className="relative w-full bg-[#080808] py-16 sm:py-20 lg:py-24 text-[#F5F1E8] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        
        {/* Top Header Row with Navigation Controls on Right */}
        <div className="flex items-start justify-between mb-8 sm:mb-10">
          <div>
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4">
              WHAT PEOPLE SAY
            </p>
          </div>

          {/* Top-Right Circular Navigation Controls */}
          <div className="flex items-center gap-3 select-none">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#3A3528] hover:border-[#C6A66B] bg-[#0A0A0B] hover:bg-[#141416] flex items-center justify-center transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B]"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4 text-[#C6A66B] transition-transform duration-200 group-hover:-translate-x-0.5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#3A3528] hover:border-[#C6A66B] bg-[#0A0A0B] hover:bg-[#141416] flex items-center justify-center transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B]"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4 text-[#C6A66B] transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>

        {/* Content Grid: Headline on Left + 3 Testimonial Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* Left Column: Oversized Condensed Headline */}
          <div className="lg:col-span-3 flex flex-col justify-start">
            <h2
              id="testimonials-heading"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.94] select-none text-[3.25rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.35rem] xl:text-[4.85rem]"
            >
              <span className="block text-[#F5F1E8]">WHAT</span>
              <span className="block text-[#F5F1E8] mt-1 sm:mt-1.5">PEOPLE</span>
              <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">SAY.</span>
            </h2>
          </div>

          {/* Right Column: Three Testimonial Cards */}
          <div className="lg:col-span-9">
            <div
              ref={scrollContainerRef}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-4 xl:gap-5 overflow-x-auto pb-2 scrollbar-none snap-x"
            >
              {testimonials.map((item, idx) => {
                const cardContent = (
                  <div className="group relative flex flex-col justify-between h-full p-6 sm:p-7 rounded-xl bg-[#0E0F10] border border-[#222425] hover:border-[#C6A66B]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.45)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.65)] snap-start">
                    <div>
                      {/* Gold Quotation Mark */}
                      <div className="mb-4 text-[#C6A66B] select-none flex items-center">
                        <Quote className="w-7 h-7 fill-[#C6A66B] text-[#C6A66B]" />
                      </div>

                      {/* Testimonial Paragraph */}
                      <p className="text-xs sm:text-[13.5px] text-[#BFC4C8] font-sans leading-relaxed font-normal">
                        {item.quote}
                      </p>
                    </div>

                    <div>
                      {/* Thin Horizontal Divider */}
                      <div className="w-full h-[1px] bg-[#222425] my-5" />

                      {/* Client Avatar + Role Info */}
                      <div className="flex items-center gap-3.5 select-none">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-11 h-11 rounded-full object-cover border border-[#2A2A2D]"
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
                );

                if (shouldReduceMotion) {
                  return <div key={item.id} className="h-full">{cardContent}</div>;
                }

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{
                      duration: 0.45,
                      delay: idx * 0.08,
                      ease: [0.2, 0, 0, 1],
                    }}
                    className="h-full"
                  >
                    {cardContent}
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
