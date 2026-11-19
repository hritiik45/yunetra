import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { prefersReducedMotion } from '../../lib/animations';

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
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section
      id="portfolio-section"
      aria-labelledby="portfolio-heading"
      className="relative w-full bg-[#080808] py-16 sm:py-20 lg:py-24 text-[#F5F1E8] border-b border-[#252525]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Eyebrow, Headline, Description, Button (~32% width) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            {/* Eyebrow */}
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] mb-4 sm:mb-5 font-sans select-none">
              SELECTED WORK
            </p>

            {/* Display Headline with Clear Line Separation */}
            <h2
              id="portfolio-heading"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.98] select-none text-[3.25rem] sm:text-[3.75rem] md:text-[4rem] lg:text-[4.15rem] xl:text-[4.65rem]"
            >
              <span className="block text-[#F5F1E8]">REAL PROJECTS.</span>
              <span className="block text-[#F5F1E8] mt-1 sm:mt-1.5">
                REAL <span className="text-[#C6A66B]">OUTCOMES.</span>
              </span>
            </h2>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-[14.5px] text-[#BFC4C8] font-sans leading-relaxed max-w-sm mt-5 sm:mt-6 font-normal">
              We showcase the solutions we’ve built for businesses and communities.
            </p>

            {/* View All Button */}
            <div className="mt-8 sm:mt-9">
              <Link
                to={viewAllLink}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-transparent hover:bg-[#151616] border border-[#4A4D52] hover:border-[#C6A66B] text-[#F5F1E8] hover:text-[#C6A66B] text-xs sm:text-sm font-medium transition-all duration-200 group shadow-sm select-none"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Project Cards (~68% width) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-5 xl:gap-6">
              {projects.map((project, idx) => {
                const cardContent = (
                  <Link
                    to={project.link}
                    key={project.id}
                    className="group relative flex flex-col justify-between h-full rounded-xl bg-[#101111] border border-[#303331] hover:border-[#C6A66B]/60 transition-all duration-300 overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.45)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.65)] hover:-translate-y-0.5 select-none"
                  >
                    {/* Top Visual Image */}
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0A0A0A]">
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                      <div>
                        {/* Category */}
                        <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#C6A66B] block mb-1.5">
                          {project.category}
                        </span>

                        {/* Title */}
                        <h3 className="text-base sm:text-[17px] font-bold text-[#F5F1E8] font-sans tracking-tight leading-snug group-hover:text-white transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-[13px] text-[#BFC4C8] font-sans leading-relaxed mt-2 font-normal">
                          {project.description}
                        </p>
                      </div>

                      {/* Circular Gold Arrow Affordance */}
                      <div className="flex justify-end pt-4">
                        <div className="w-8 h-8 rounded-full border border-[#C6A66B]/60 group-hover:border-[#C6A66B] bg-[#080808] flex items-center justify-center transition-colors duration-200">
                          <ArrowRight className="w-3.5 h-3.5 text-[#C6A66B] transition-transform duration-200 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );

                if (shouldReduceMotion) {
                  return <div key={project.id} className="h-full">{cardContent}</div>;
                }

                return (
                  <motion.div
                    key={project.id}
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
