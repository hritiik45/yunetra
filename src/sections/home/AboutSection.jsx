import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Layers,
  Users,
  ShieldCheck,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { prefersReducedMotion } from '../../lib/animations';

const metrics = [
  { value: '02', label: 'PRODUCTS' },
  { value: '05+', label: 'SERVICE AREAS' },
  { value: '1', label: 'VISION' },
  { value: '∞', label: 'POSSIBILITIES' },
];

const brandValues = [
  {
    icon: Layers,
    title: 'Product-First Approach',
    description: 'We build our own products and apply the same thinking to client projects.',
  },
  {
    icon: Users,
    title: 'Client-Focused',
    description: 'We work closely with clients to understand real problems and deliver practical solutions.',
  },
  {
    icon: ShieldCheck,
    title: 'Reliable Execution',
    description: 'Clear communication, structured process and consistent delivery from idea to launch.',
  },
  {
    icon: Clock,
    title: 'Long-Term Support',
    description: 'We stay committed after launch with ongoing support and improvements.',
  },
];

export default function AboutSection() {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section
      id="about-section"
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden bg-[#F2EFE7] py-16 sm:py-20 lg:py-24 text-[#080808] border-b border-[#D8D2C6]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        
        {/* Main Editorial Grid: Left Copy + Central Team Panel + Right Architectural Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-stretch">
          
          {/* Left Column: Eyebrow, Large Headline, Description, CTA */}
          <div className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between py-1">
            <div>
              {/* Eyebrow */}
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#252525] mb-3 sm:mb-4 font-sans select-none">
                WHY YUNETRA
              </p>

              {/* Display Headline */}
              <h2
                id="about-heading"
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight leading-[0.88] select-none text-[3.25rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.15rem] xl:text-[4.75rem]"
              >
                <span className="block text-[#080808]">THOUGHTFUL</span>
                <span className="block text-[#080808]">TECHNOLOGY.</span>
                <span className="block text-[#C6A66B]">REAL RESULTS.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-[15px] text-[#4A4D52] font-sans leading-relaxed max-w-sm mt-5 sm:mt-6 font-normal">
                We combine product thinking with client-focused development to create practical technology that delivers value.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mt-8 sm:mt-10">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-transparent hover:bg-[#080808] border border-[#252525] hover:border-[#080808] text-[#080808] hover:text-[#F5F1E8] text-xs sm:text-sm font-semibold transition-all duration-200 group shadow-sm select-none"
              >
                <span>More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Central Panel: Team Collaboration Photo + Brand Philosophy + Metrics */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080808] border border-[#222225] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
            
            {/* Upper Portion: Team Image (Left) + Dark Philosophy Panel (Right) */}
            <div className="grid grid-cols-1 sm:grid-cols-12 flex-1 min-h-[220px] sm:min-h-[240px]">
              
              {/* Team Collaboration Photograph */}
              <div className="sm:col-span-8 relative overflow-hidden h-full min-h-[190px] sm:min-h-[210px]">
                <img
                  src="/images/hq/team_collaboration.webp"
                  alt="Yunetra team collaborating around a workstation"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Philosophy Panel */}
              <div className="sm:col-span-4 bg-[#080808] p-5 sm:p-6 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-[#202023]">
                <div className="flex flex-col gap-1.5 text-xs sm:text-[13px] tracking-[0.24em] font-medium text-[#F5F1E8] font-sans uppercase select-none">
                  <span>IDEAS</span>
                  <span>PEOPLE</span>
                  <span>PRODUCTS</span>
                  <span>PROGRESS</span>
                </div>

                <div className="flex justify-end pt-4 sm:pt-6">
                  <Link
                    to="/about"
                    className="w-8 h-8 rounded-full border border-[#C6A66B]/50 hover:border-[#C6A66B] bg-[#121214] flex items-center justify-center transition-colors group/arrow"
                    aria-label="Read more about our philosophy"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 group-hover/arrow:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Lower Portion: Dark Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#202023] border-t border-[#202023] bg-[#080808] py-4 sm:py-5 px-3 sm:px-5">
              {metrics.map((item, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col justify-center px-3 py-2 sm:py-0 ${
                    idx >= 2 ? 'pt-3 sm:pt-0' : ''
                  }`}
                >
                  <span
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-3xl sm:text-4xl text-white tracking-tight leading-none select-none"
                  >
                    {item.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-[#8E959E] uppercase font-medium mt-1.5 select-none">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right-side Visual: Skyscraper Architecture + Editorial Statement Card */}
          <div className="lg:col-span-3 xl:col-span-3 relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080808] border border-[#222225] flex flex-col justify-end p-5 sm:p-6 min-h-[300px] sm:min-h-[340px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
            {/* Background Architectural Artwork */}
            <img
              src="/images/hq/sec4_architecture.webp"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none select-none z-0"
              aria-hidden="true"
            />
            {/* Dark atmospheric overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/45 to-transparent z-0 pointer-events-none" />

            {/* Dark Editorial Statement Card */}
            <div className="relative z-10 p-5 rounded-2xl bg-[#080808]/85 backdrop-blur-md border border-[#2A2A2D] shadow-lg">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#E5E0D6] leading-relaxed font-sans select-none">
                <span className="block">A TECHNOLOGY</span>
                <span className="block">COMPANY</span>
                <span className="block text-[#C6A66B] mt-1">BUILDING</span>
                <span className="block text-[#C6A66B]">USEFUL</span>
                <span className="block text-[#C6A66B]">PRODUCTS</span>
                <span className="block mt-1">AND DIGITAL</span>
                <span className="block">SOLUTIONS.</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Brand Values Strip: Four Evenly Spaced Cards in Obsidian with Gold Border */}
        <div className="mt-12 sm:mt-16 lg:mt-20 rounded-2xl sm:rounded-3xl bg-[#080808] border border-[#C6A66B]/35 shadow-[0_16px_48px_rgba(0,0,0,0.22)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#202023]">
            {brandValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 lg:p-8 flex flex-col justify-between group hover:bg-[#0E0E10] transition-colors duration-200"
                >
                  <div>
                    {/* Champagne Gold Icon */}
                    <div className="w-10 h-10 rounded-lg bg-[#141417] border border-[#252528] flex items-center justify-center text-[#C6A66B] mb-4 sm:mb-5 group-hover:border-[#C6A66B]/40 transition-colors">
                      <IconComp className="w-5 h-5 stroke-[1.6]" />
                    </div>

                    {/* Heading */}
                    <h3 className="text-base sm:text-[17px] font-bold text-[#F5F1E8] font-sans tracking-tight mb-2 group-hover:text-white transition-colors">
                      {val.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-[#9CA3AF] font-sans leading-relaxed font-normal">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
