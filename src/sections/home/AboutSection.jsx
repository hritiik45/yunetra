import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Users,
  ShieldCheck,
  Clock,
  ArrowRight,
} from 'lucide-react';
import useScrollScene, { applyParallax } from '../../hooks/useScrollScene';
import { Scene, Item, LineX, MaskLine, ClipReveal } from '../../components/motion';
import ArrowSwap from '../../components/ui/ArrowSwap';

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
  const sectionRef = useRef(null);

  // Image depth only (parallax). Everything else is in-view choreography.
  useScrollScene(sectionRef, ({ q, isMobile }) => {
    applyParallax(q, { isMobile });
  });

  return (
    <section
      ref={sectionRef}
      id="about-section"
      aria-labelledby="about-heading"
      className="relative w-full overflow-hidden bg-[#F2EFE7] py-16 sm:py-20 lg:py-24 text-[#080808] border-b border-[#D8D2C6]"
    >
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {/* Main Editorial Grid: Left Copy + Central Team Panel + Right Architectural Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-stretch">
          {/* Left Column: Eyebrow, Large Headline, Description, CTA */}
          <Scene className="lg:col-span-4 xl:col-span-4 flex flex-col justify-between py-1">
            <div>
              {/* Eyebrow */}
              <Item
                as="p"
                className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#252525] mb-3 sm:mb-4 font-sans select-none"
              >
                WHY YUNETRA
              </Item>

              {/* Display Headline */}
              <h2
                id="about-heading"
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight leading-[0.88] select-none text-[3.25rem] sm:text-[3.75rem] md:text-[4.25rem] lg:text-[4.15rem] xl:text-[4.75rem]"
              >
                <MaskLine d={0.08} className="text-[#080808]">THOUGHTFUL</MaskLine>
                <MaskLine d={0.18} className="text-[#080808]">TECHNOLOGY.</MaskLine>
                <MaskLine d={0.28} className="text-[#C6A66B]">REAL RESULTS.</MaskLine>
              </h2>

              {/* Supporting Copy */}
              <Item
                as="p"
                d={0.5}
                className="text-sm sm:text-[15px] text-[#4A4D52] font-sans leading-relaxed max-w-sm mt-5 sm:mt-6 font-normal"
              >
                We combine product thinking with client-focused development to create practical technology that delivers value.
              </Item>
            </div>

            {/* CTA Button */}
            <Item d={0.65} className="mt-8 sm:mt-10">
              <Link
                to="/about"
                className="btn-sheen inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-transparent hover:bg-[#080808] border border-[#252525] hover:border-[#080808] text-[#080808] hover:text-[#F5F1E8] text-xs sm:text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-0.5 group shadow-sm select-none"
              >
                <span>More About Us</span>
                <ArrowSwap className="w-3.5 h-3.5" />
              </Link>
            </Item>
          </Scene>

          {/* Central Panel: Team Collaboration Photo + Brand Philosophy + Metrics */}
          <Scene amount={0.15} className="lg:col-span-5 xl:col-span-5 flex">
            <Item d={0.1} className="flex flex-1">
              <div className="isolate flex flex-1 flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080808] border border-[#222225] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
                {/* Upper Portion: Team Image (Left) + Dark Philosophy Panel (Right) */}
                <div className="grid grid-cols-1 sm:grid-cols-12 flex-1 min-h-[220px] sm:min-h-[240px]">
                  {/* Team Collaboration Photograph */}
                  <div className="sm:col-span-8 relative overflow-hidden h-full min-h-[190px] sm:min-h-[210px]">
                    <ClipReveal from="left" scale={1.18} d={0.25} className="absolute inset-0">
                      <div data-parallax="0.04" className="w-full h-full">
                        <img
                          src="/images/hq/team_collaboration.webp"
                          alt="Yunetra team collaborating around a workstation"
                          loading="lazy"
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </ClipReveal>
                  </div>

                  {/* Philosophy Panel */}
                  <div className="sm:col-span-4 bg-[#080808] p-5 sm:p-6 flex flex-col justify-between border-t sm:border-t-0 sm:border-l border-[#202023]">
                    <div className="flex flex-col gap-1.5 text-xs sm:text-[13px] tracking-[0.24em] font-medium text-[#F5F1E8] font-sans uppercase select-none">
                      <MaskLine d={0.7}>IDEAS</MaskLine>
                      <MaskLine d={0.8}>PEOPLE</MaskLine>
                      <MaskLine d={0.9}>PRODUCTS</MaskLine>
                      <MaskLine d={1.0}>PROGRESS</MaskLine>
                    </div>

                    <Item d={1.1} className="flex justify-end pt-4 sm:pt-6">
                      <Link
                        to="/about"
                        className="w-8 h-8 rounded-full border border-[#C6A66B]/50 hover:border-[#C6A66B] bg-[#121214] hover:bg-[#C6A66B] flex items-center justify-center transition-colors duration-300 group/arrow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B]"
                        aria-label="Read more about our philosophy"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B] group-hover/arrow:text-[#080808] transition-[transform,color] duration-300 group-hover/arrow:translate-x-0.5" />
                      </Link>
                    </Item>
                  </div>
                </div>

                {/* Lower Portion: Dark Metrics Strip */}
                <div className="grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#202023] border-t border-[#202023] bg-[#080808] py-4 sm:py-5 px-3 sm:px-5">
                  {metrics.map((item, idx) => (
                    <Item
                      key={idx}
                      d={0.85 + idx * 0.12}
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
                    </Item>
                  ))}
                </div>
              </div>
            </Item>
          </Scene>

          {/* Right-side Visual: Skyscraper Architecture + Editorial Statement Card */}
          <Scene amount={0.15} className="lg:col-span-3 xl:col-span-3 flex">
            <Item d={0.2} className="flex flex-1">
              <div className="relative isolate flex-1 rounded-2xl sm:rounded-3xl overflow-hidden bg-[#080808] border border-[#222225] flex flex-col justify-end p-5 sm:p-6 min-h-[300px] sm:min-h-[340px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
                {/* Background Architectural Artwork */}
                <ClipReveal from="bottom" scale={1.2} d={0.3} className="absolute inset-0 z-0 pointer-events-none select-none">
                  <div data-parallax="0.05" className="w-full h-full">
                    <img
                      src="/images/hq/sec4_architecture.webp"
                      alt=""
                      loading="lazy"
                      className="w-full h-full object-cover object-top"
                      aria-hidden="true"
                    />
                  </div>
                </ClipReveal>
                {/* Dark atmospheric overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/45 to-transparent z-0 pointer-events-none" />

                {/* Dark Editorial Statement Card */}
                <Item d={0.85} className="relative z-10 p-5 rounded-2xl bg-[#080808]/85 backdrop-blur-md border border-[#2A2A2D] shadow-lg">
                  <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-[#E5E0D6] leading-relaxed font-sans select-none">
                    <MaskLine d={0.95}>A TECHNOLOGY</MaskLine>
                    <MaskLine d={1.02}>COMPANY</MaskLine>
                    <MaskLine d={1.09} className="text-[#C6A66B] mt-1">BUILDING</MaskLine>
                    <MaskLine d={1.16} className="text-[#C6A66B]">USEFUL</MaskLine>
                    <MaskLine d={1.23} className="text-[#C6A66B]">PRODUCTS</MaskLine>
                    <MaskLine d={1.3} className="mt-1">AND DIGITAL</MaskLine>
                    <MaskLine d={1.37}>SOLUTIONS.</MaskLine>
                  </p>
                </Item>
              </div>
            </Item>
          </Scene>
        </div>

        {/* Bottom Brand Values Strip: Four Evenly Spaced Cards in Obsidian with Gold Border */}
        <Scene amount={0.2} className="mt-12 sm:mt-16 lg:mt-20">
          <Item className="rounded-2xl sm:rounded-3xl bg-[#080808] border border-[#C6A66B]/35 shadow-[0_16px_48px_rgba(0,0,0,0.22)] overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#202023]">
              {brandValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <Item
                    key={idx}
                    d={0.2 + idx * 0.12}
                    className="relative p-6 sm:p-7 lg:p-8 flex flex-col justify-between group hover:bg-[#0E0E10] transition-colors duration-300"
                  >
                    {/* Hover border: gold hairline draws along the top edge */}
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 right-0 h-px bg-[#C6A66B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    />
                    <div>
                      {/* Champagne Gold Icon */}
                      <div className="w-10 h-10 rounded-lg bg-[#141417] border border-[#252528] flex items-center justify-center text-[#C6A66B] mb-4 sm:mb-5 group-hover:border-[#C6A66B]/50 group-hover:bg-[#C6A66B]/10 group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
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
                  </Item>
                );
              })}
            </div>
          </Item>
        </Scene>
      </div>
    </section>
  );
}
