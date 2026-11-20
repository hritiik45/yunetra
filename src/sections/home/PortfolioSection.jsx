import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import useScrollScene, { applyParallax } from '../../hooks/useScrollScene';
import { Scene, Item, LineX, MaskLine, ClipReveal } from '../../components/motion';
import ArrowSwap from '../../components/ui/ArrowSwap';

const projects = [
  {
    id: 'business-website',
    category: 'WEBSITE',
    title: 'Business Website',
    description: 'A modern, responsive website for a growing business.',
    image: '/images/hq/project_business_website.webp',
    alt: 'Laptop displaying professional business website',
    link: '/services',
  },
  {
    id: 'custom-webapp',
    category: 'WEB APPLICATION',
    title: 'Custom Web App',
    description: 'Operational software tailored to specific business needs.',
    image: '/images/hq/project_custom_webapp.webp',
    alt: 'Laptop displaying dark analytics dashboard web application',
    link: '/services',
  },
  {
    id: 'mobile-app',
    category: 'MOBILE APPLICATION',
    title: 'Mobile App',
    description: 'Feature-rich mobile app with a clean and intuitive interface.',
    image: '/images/hq/project_mobile_app.webp',
    alt: 'Smartphone displaying modern mobile application',
    link: '/services',
  },
];

export default function PortfolioSection({ viewAllLink = '/portfolio' }) {
  const sectionRef = useRef(null);

  useScrollScene(sectionRef, ({ q, isMobile }) => {
    applyParallax(q, { isMobile });
  });

  return (
    <section
      ref={sectionRef}
      id="portfolio-section"
      aria-labelledby="portfolio-heading"
      className="relative w-full bg-[#080808] py-16 sm:py-20 lg:py-24 text-[#F5F1E8] border-b border-[#252525]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Eyebrow, Headline, Description, Button (~32% width) */}
          <Scene className="lg:col-span-4 flex flex-col justify-center">
            {/* Eyebrow */}
            <Item
              as="p"
              className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] mb-4 sm:mb-5 font-sans select-none"
            >
              SELECTED WORK
            </Item>

            {/* Display Headline with Clear Line Separation */}
            <h2
              id="portfolio-heading"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.98] select-none text-[3.25rem] sm:text-[3.75rem] md:text-[4rem] lg:text-[4.15rem] xl:text-[4.65rem]"
            >
              <MaskLine d={0.08} className="text-[#F5F1E8]">REAL PROJECTS.</MaskLine>
              <MaskLine d={0.2} className="text-[#F5F1E8] mt-1 sm:mt-1.5">
                REAL <span className="text-[#C6A66B]">OUTCOMES.</span>
              </MaskLine>
            </h2>

            {/* Supporting Copy */}
            <Item
              as="p"
              d={0.45}
              className="text-sm sm:text-[14.5px] text-[#BFC4C8] font-sans leading-relaxed max-w-sm mt-5 sm:mt-6 font-normal"
            >
              We showcase the solutions we’ve built for businesses and communities.
            </Item>

            {/* View All Button */}
            <Item d={0.6} className="mt-8 sm:mt-9">
              <Link
                to={viewAllLink}
                className="btn-sheen inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-transparent hover:bg-[#151616] border border-[#4A4D52] hover:border-[#C6A66B] text-[#F5F1E8] hover:text-[#C6A66B] text-xs sm:text-sm font-medium transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-0.5 group shadow-sm select-none"
              >
                <span>View All Projects</span>
                <ArrowSwap className="w-3.5 h-3.5" />
              </Link>
            </Item>
          </Scene>

          {/* Right Column: 3 Project Cards (~68% width) */}
          <div className="lg:col-span-8">
            {/* The middle project sits lower on md+ so the row reads as a curated
                composition rather than three identical tiles. */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-5 xl:gap-6">
              {projects.map((project, idx) => (
                <Scene
                  key={project.id}
                  amount={0.2}
                  className={idx === 1 ? 'md:pt-10' : ''}
                >
                  <Item d={idx * 0.12} className="h-full">
                    <Link
                      to={project.link}
                      className="group relative isolate flex flex-col justify-between h-full rounded-xl bg-[#101111] border border-[#303331] hover:border-[#C6A66B]/60 transition-[border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_18px_44px_rgba(0,0,0,0.7)] hover:-translate-y-1.5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B]"
                    >
                      {/* Top Visual Image: opens through a mask, then drifts on scroll */}
                      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
                        <ClipReveal
                          from="bottom"
                          scale={1.25}
                          d={idx * 0.12 + 0.15}
                          className="absolute inset-0"
                        >
                          <div data-parallax="0.05" className="w-full h-full">
                            <img
                              src={project.image}
                              alt={project.alt}
                              className="w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07]"
                              loading="lazy"
                            />
                          </div>
                        </ClipReveal>
                        {/* Hover overlay: soft obsidian wash rising from the base */}
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-[#080808]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        />
                        {/* Gold hairline drawing along the image base on hover */}
                        <span
                          aria-hidden="true"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A66B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                        <div>
                          {/* Category */}
                          <Item
                            as="span"
                            d={idx * 0.12 + 0.5}
                            className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#C6A66B] block mb-1.5"
                          >
                            {project.category}
                          </Item>

                          {/* Title */}
                          <Item
                            as="h3"
                            d={idx * 0.12 + 0.58}
                            className="text-base sm:text-[17px] font-bold text-[#F5F1E8] font-sans tracking-tight leading-snug group-hover:text-white transition-colors"
                          >
                            {project.title}
                          </Item>

                          {/* Description */}
                          <Item
                            as="p"
                            d={idx * 0.12 + 0.66}
                            className="text-xs sm:text-[13px] text-[#BFC4C8] font-sans leading-relaxed mt-2 font-normal"
                          >
                            {project.description}
                          </Item>
                        </div>

                        {/* Circular Gold Arrow Affordance */}
                        <Item d={idx * 0.12 + 0.75} className="flex justify-end pt-4">
                          <div className="w-8 h-8 rounded-full border border-[#C6A66B]/60 group-hover:border-[#C6A66B] group-hover:bg-[#C6A66B] bg-[#080808] flex items-center justify-center transition-colors duration-300">
                            <ArrowSwap className="w-3.5 h-3.5 text-[#C6A66B] group-hover:text-[#080808] transition-colors duration-300" />
                          </div>
                        </Item>
                      </div>
                    </Link>
                  </Item>
                </Scene>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
