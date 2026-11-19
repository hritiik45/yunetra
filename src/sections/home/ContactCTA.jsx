import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { prefersReducedMotion } from '../../lib/animations';

export default function ContactCTA() {
  const shouldReduceMotion = prefersReducedMotion();

  const ctaContent = (
    <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Side: Eyebrow + Large Headline */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4">
            LET&apos;S BUILD TOGETHER
          </p>

          {/* Headline */}
          <h2
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="uppercase tracking-tight leading-[0.98] select-none text-[3.25rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[4.75rem] xl:text-[5.25rem]"
          >
            <span className="block text-[#F5F1E8]">HAVE AN IDEA</span>
            <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">WORTH BUILDING?</span>
          </h2>
        </div>

        {/* Right Side: Supporting Copy + Dual CTAs */}
        <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4 xl:pl-8">
          {/* Supporting Text */}
          <p className="text-sm sm:text-base text-[#F5F1E8] font-sans leading-relaxed max-w-md font-normal mb-7 sm:mb-8">
            Share your idea or business need and let&apos;s turn it into a real product or digital solution.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 select-none">
            {/* Primary Button */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B376] active:bg-[#B09054] text-[#080808] font-bold text-xs sm:text-sm transition-all duration-200 group shadow-md"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Button */}
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-lg bg-[#080808]/70 hover:bg-[#151518] border border-[#3E4044] hover:border-[#C6A66B] text-[#F5F1E8] hover:text-[#C6A66B] font-semibold text-xs sm:text-sm transition-all duration-200 shadow-sm"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <section
      id="contact-cta"
      aria-label="Contact Call to Action"
      className="relative w-full overflow-hidden bg-[#080808] border-t border-[#C6A66B]/35"
    >
      {/* Cinematic Mountain Landscape Background */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src="/images/hq/cta_mountain_bg.webp"
          alt=""
          className="w-full h-full object-cover object-[center_35%] opacity-85"
          aria-hidden="true"
        />
        {/* Dark contrast gradient overlays */}
        <div className="absolute inset-0 bg-[#080808]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/85 via-[#080808]/60 to-[#080808]/50" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      {shouldReduceMotion ? (
        ctaContent
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0, 1] }}
        >
          {ctaContent}
        </motion.div>
      )}
    </section>
  );
}
