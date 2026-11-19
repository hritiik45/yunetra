import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  FileText,
  Code2,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { prefersReducedMotion } from '../../lib/animations';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your goals, challenges and users.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan',
    description: 'Define the solution, features and roadmap.',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop, test and refine the product.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Launch & Improve',
    description: 'Go live and continue to support growth.',
    icon: Rocket,
  },
];

export default function ProcessSection() {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section
      id="process-section"
      aria-labelledby="process-heading"
      className="relative w-full bg-[#F5F1E8] py-16 sm:py-20 lg:py-24 text-[#080808] border-b border-[#D8D2C6]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
          
          {/* Left Introduction Column (Approx 28-30% Width) */}
          <div className="lg:w-[30%] xl:w-[28%] flex flex-col justify-center lg:pr-8 xl:pr-10">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] mb-4 sm:mb-5 font-sans select-none">
              OUR PROCESS
            </p>

            {/* Display Headline with Balanced Spacing */}
            <h2
              id="process-heading"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.98] select-none text-[3rem] sm:text-[3.5rem] md:text-[3.75rem] lg:text-[3.85rem] xl:text-[4.25rem]"
            >
              <span className="block text-[#080808]">A CLEAR PATH</span>
              <span className="block text-[#080808] mt-1 sm:mt-1.5">FROM IDEA</span>
              <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">TO LAUNCH.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-[15px] text-[#45433F] font-sans leading-relaxed max-w-sm mt-5 sm:mt-6 font-normal">
              A transparent and collaborative process to turn your ideas into working products.
            </p>
          </div>

          {/* Thin Vertical Divider (Desktop Only) */}
          <div
            className="hidden lg:block w-[1px] bg-[#D9C7A5] h-36 xl:h-44 self-center flex-shrink-0 mx-4 xl:mx-8"
            aria-hidden="true"
          />

          {/* Four Evenly Spaced Process Steps Across Remaining Width */}
          <div className="lg:w-[70%] xl:w-[72%] lg:pl-6 xl:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-4 xl:gap-6 relative">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isLast = index === steps.length - 1;

                const stepContent = (
                  <div className="group relative flex flex-col items-start select-none">
                    
                    {/* Icon + Number + Connecting Arrow Row */}
                    <div className="relative flex items-center w-full mb-5 sm:mb-6">
                      
                      {/* Oversized Pale Number Behind Icon */}
                      <span
                        style={{ fontFamily: "'Anton', sans-serif" }}
                        className="absolute -top-7 -left-1 text-7xl sm:text-8xl lg:text-[6.5rem] xl:text-[7rem] text-[#E5DFD4] pointer-events-none select-none z-0 leading-none tracking-tighter"
                        aria-hidden="true"
                      >
                        {step.number}
                      </span>

                      {/* Circular Dark Icon Container with Thin Gold Border */}
                      <div className="relative z-10 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#080808] border border-[#C6A66B] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                        <IconComponent className="w-5 h-5 text-[#C6A66B] stroke-[1.6]" />
                      </div>

                      {/* Minimal Champagne-Gold Connecting Arrow (Between Steps on Desktop) */}
                      {!isLast && (
                        <div
                          className="hidden lg:flex flex-1 items-center justify-center px-2 z-10"
                          aria-hidden="true"
                        >
                          <ArrowRight className="w-4 h-4 text-[#C6A66B]/85 transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      )}
                    </div>

                    {/* Step Title Below Icon */}
                    <h3 className="relative z-10 text-base sm:text-lg font-bold text-[#080808] font-sans tracking-tight leading-snug mt-2 mb-1.5">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="relative z-10 text-xs sm:text-[13.5px] text-[#45433F] font-sans leading-relaxed max-w-[210px] font-normal">
                      {step.description}
                    </p>
                  </div>
                );

                if (shouldReduceMotion) {
                  return <div key={step.number}>{stepContent}</div>;
                }

                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                      ease: [0.2, 0, 0, 1],
                    }}
                  >
                    {stepContent}
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
