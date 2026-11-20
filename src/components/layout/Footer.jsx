import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { footerNavSections } from '../../data/navigation';
import { Scene, Item, LineX } from '../motion';

const socialClass =
  'w-8 h-8 rounded-md border border-[#252525] bg-transparent hover:border-[#C6A66B] hover:text-[#C6A66B] hover:bg-[#C6A66B]/10 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center text-[#BFC4C8] transition-[border-color,color,background-color,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B]';

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#080808] mt-auto text-[#F5F1E8] font-sans">
      {/* Top border draws in from the left each time the footer enters view */}
      <Scene amount={0.05} margin="0px" className="absolute top-0 left-0 right-0">
        <LineX className="h-px w-full bg-[#252525] origin-left" />
        <LineX d={0.15} className="absolute top-0 left-0 h-px w-1/3 bg-gradient-to-r from-[#C6A66B]/70 to-transparent origin-left" />
      </Scene>

      <Scene amount={0.15} className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 pb-12">
          {/* Brand Column */}
          <div className="lg:w-[34%] lg:pr-8 xl:pr-12 space-y-4">
            <Item d={0.05}>
              <Link
                to="/"
                className="inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] rounded-sm group"
                aria-label="Yunetra Home"
              >
                <img
                  src="/yunetra_logo.png"
                  alt="Yunetra — Ideas Products People Forward"
                  className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                />
              </Link>
            </Item>
            <Item
              as="p"
              d={0.15}
              className="text-sm text-[#BFC4C8] leading-relaxed max-w-sm font-sans"
            >
              A technology company creating useful products and digital solutions for businesses.
            </Item>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <Item d={0.25}>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Yunetra on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </Item>
              <Item d={0.32}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Yunetra on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </Item>
              <Item d={0.39}>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={socialClass}
                  aria-label="Yunetra on YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </Item>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-1 gap-8 lg:gap-0">
            {footerNavSections.map((section, idx) => (
              <Item
                key={section.title}
                d={0.2 + idx * 0.09}
                className={`space-y-4 lg:border-l lg:border-[#252525] lg:pl-8 xl:pl-10 ${
                  section.title === 'Services' ? 'lg:flex-[1.3]' : 'lg:flex-1'
                }`}
              >
                <h3 className="text-sm font-semibold text-[#C6A66B] font-sans">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-slide text-sm text-[#BFC4C8] hover:text-white focus-visible:text-white focus-visible:outline-none font-sans inline-flex items-center gap-1.5 transition-colors"
                        >
                          <span>{link.name}</span>
                          <span className="text-[11px] text-[#C6A66B]">↗</span>
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="link-slide text-sm text-[#BFC4C8] hover:text-white focus-visible:text-white focus-visible:outline-none font-sans"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </Item>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative pt-8 text-xs sm:text-sm text-[#858B92] font-sans">
          <LineX d={0.5} className="absolute top-0 left-0 right-0 h-px bg-[#252525] origin-left" />
          <Item d={0.6}>
            <p>&copy; 2024 Yunetra. All rights reserved.</p>
          </Item>
        </div>
      </Scene>
    </footer>
  );
}
