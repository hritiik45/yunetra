import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Monitor,
  Smartphone,
  Code2,
  Layers,
  Settings,
  ArrowRight,
  Play,
} from 'lucide-react';
import { prefersReducedMotion } from '../../lib/animations';

const services = [
  {
    number: '01',
    title: 'Website\nDevelopment',
    description: 'Modern, responsive and high-performance websites for businesses.',
    icon: Monitor,
    link: '/services',
  },
  {
    number: '02',
    title: 'Mobile App\nDevelopment',
    description: 'Feature-rich mobile applications for Android and iOS.',
    icon: Smartphone,
    link: '/services',
  },
  {
    number: '03',
    title: 'Custom\nSoftware',
    description: 'Tailored software solutions designed around your business needs.',
    icon: Code2,
    link: '/services',
  },
  {
    number: '04',
    title: 'API & System\nIntegrations',
    description: 'Seamless integrations with third-party tools and systems.',
    icon: Layers,
    link: '/services',
  },
  {
    number: '05',
    title: 'Maintenance &\nSupport',
    description: 'Ongoing support to keep your products secure, updated and running smoothly.',
    icon: Settings,
    link: '/services',
  },
];

function ServiceCard({ service, index, shouldReduceMotion }) {
  const IconComponent = service.icon;

  const cardContent = (
    <Link
      to={service.link}
      className="group relative flex flex-col justify-between h-full min-h-[195px] sm:min-h-[205px] p-5 sm:p-6 rounded-xl bg-[#111113]/95 hover:bg-[#151518] border border-[#232326] hover:border-[#C6A66B]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.65)] hover:-translate-y-0.5 select-none"
    >
      {/* Top Header: Champagne Gold Icon + Service Number */}
      <div className="flex items-center justify-between w-full">
        <div className="text-[#C6A66B] flex items-center justify-center">
          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 stroke-[1.6]" />
        </div>
        <span className="text-xs sm:text-[13px] font-mono font-medium text-[#C6A66B]/80 tracking-wider">
          {service.number}
        </span>
      </div>

      {/* Middle Content: Title + Description */}
      <div className="my-auto pt-3 pb-3">
        <h3 className="text-[#F5F1E8] font-bold text-base sm:text-[17px] leading-snug tracking-tight font-sans whitespace-pre-line group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-[#9CA3AF] text-xs sm:text-[13px] leading-relaxed mt-2 font-sans font-normal">
          {service.description}
        </p>
      </div>

      {/* Bottom Affordance: Circular Right Arrow */}
      <div className="flex justify-end pt-1">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#3E382B] group-hover:border-[#C6A66B] bg-[#0A0A0B] flex items-center justify-center transition-colors duration-200">
          <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );

  if (shouldReduceMotion) {
    return <div className="h-full">{cardContent}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
        ease: [0.2, 0, 0, 1],
      }}
      className="h-full"
    >
      {cardContent}
    </motion.div>
  );
}

export default function ServicesSection() {
  const shouldReduceMotion = prefersReducedMotion();

  const handleProcessClick = (e) => {
    e.preventDefault();
    const target = document.getElementById('process-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services-section"
      aria-labelledby="services-heading"
      className="relative w-full overflow-hidden bg-[#080808] py-14 sm:py-18 lg:py-20 border-b border-[#252525] text-white"
    >
      {/* Background Architectural Artwork on Right */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] lg:w-[40%] xl:w-[36%] pointer-events-none select-none overflow-hidden z-0 hidden lg:block">
        <img
          src="/images/hq/services_architecture_clean.webp"
          alt=""
          className="w-full h-full object-cover object-left-top"
          aria-hidden="true"
        />
        {/* Soft edge feathering into pitch obsidian */}
        <div className="absolute inset-y-0 left-0 w-36 sm:w-48 bg-gradient-to-r from-[#080808] via-[#080808]/70 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080808] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
        {/* Ambient darkening for perfect text readability */}
        <div className="absolute inset-0 bg-[#080808]/20 pointer-events-none" />
      </div>

      {/* Subtle Golden Ambient Glow & Hairline Curve */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M600,520 C950,510 1200,320 1440,180"
          stroke="#C6A66B"
          strokeWidth="0.8"
          opacity="0.3"
        />
      </svg>

      {/* Top-Right Architecture Vertical Brand Wordmark */}
      <div className="hidden xl:flex absolute right-10 2xl:right-14 top-10 2xl:top-12 z-10 flex-row items-center gap-3.5 select-none pointer-events-none">
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#C6A66B]/60 via-[#C6A66B]/25 to-transparent" />
        <div className="flex flex-col gap-1.5 text-[10px] tracking-[0.26em] font-medium text-[#BFC4C8]/90 font-sans uppercase">
          <span>TECHNOLOGY</span>
          <span>PRODUCTS</span>
          <span>PEOPLE</span>
          <span>PROGRESS</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          
          {/* Left Column: Eyebrow, Oversized Headline, Description, CTA */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-start pt-1">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] mb-3 sm:mb-4 font-sans select-none">
              OUR SERVICES
            </p>

            {/* Oversized Headline */}
            <h2
              id="services-heading"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.88] select-none text-[3.25rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.35rem] xl:text-[4.85rem]"
            >
              <span className="block text-[#F5F1E8]">FROM</span>
              <span className="block text-[#F5F1E8]">IDEA TO</span>
              <span className="block text-[#C6A66B]">IMPACT.</span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-[14px] text-[#A0A6AD] font-sans leading-relaxed max-w-xs sm:max-w-sm mt-5 sm:mt-6 font-normal">
              We build websites, mobile apps and custom software that help businesses work better and grow.
            </p>

            {/* CTA Button */}
            <div className="mt-7 sm:mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-[#0E0E10] hover:bg-[#161619] border border-[#2A2A2D] hover:border-[#C6A66B] text-[#F5F1E8] hover:text-[#C6A66B] text-xs sm:text-sm font-medium transition-all duration-200 group shadow-sm select-none"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Center / Right Column: 5 Service Cards + Process Link */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-center">
            
            {/* Top Row: Cards 01, 02, 03 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 xl:gap-5">
              <ServiceCard
                service={services[0]}
                index={0}
                shouldReduceMotion={shouldReduceMotion}
              />
              <ServiceCard
                service={services[1]}
                index={1}
                shouldReduceMotion={shouldReduceMotion}
              />
              <ServiceCard
                service={services[2]}
                index={2}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>

            {/* Bottom Row: Cards 04, 05 + Our Process Link */}
            <div className="mt-3.5 sm:mt-4 xl:mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3.5 sm:gap-4 xl:gap-5 items-center">
              {/* Desktop Stagger Offset */}
              <div className="hidden lg:block lg:col-span-1" />

              {/* Card 04 */}
              <div className="lg:col-span-4 h-full">
                <ServiceCard
                  service={services[3]}
                  index={3}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>

              {/* Card 05 */}
              <div className="lg:col-span-4 h-full">
                <ServiceCard
                  service={services[4]}
                  index={4}
                  shouldReduceMotion={shouldReduceMotion}
                />
              </div>

              {/* Our Process Play Link */}
              <div className="sm:col-span-2 lg:col-span-3 flex items-center justify-start lg:justify-center pt-2 sm:pt-3 lg:pt-0">
                <a
                  href="#process-section"
                  onClick={handleProcessClick}
                  className="group flex items-center gap-3.5 sm:gap-4 py-2 px-1 rounded-xl transition-all select-none cursor-pointer"
                  aria-label="Our Process — See How We Work"
                >
                  {/* Circular Play Button */}
                  <div className="relative flex-shrink-0 w-12 h-12 sm:w-13 sm:h-13 rounded-full border border-[#C6A66B]/60 group-hover:border-[#C6A66B] bg-[#0A0A0B]/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_24px_rgba(198,166,107,0.35)]">
                    <Play className="w-4 h-4 text-[#C6A66B] fill-[#C6A66B] ml-0.5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Text labels */}
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] sm:text-xs text-[#BFC4C8] font-medium tracking-wide">
                      Our Process
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#F5F1E8] group-hover:text-[#C6A66B] transition-colors flex items-center gap-1.5 mt-0.5">
                      <span>See How We Work</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 text-[#C6A66B]" />
                    </span>
                  </div>
                </a>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
