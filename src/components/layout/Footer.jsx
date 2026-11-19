import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Youtube } from 'lucide-react';
import { footerNavSections } from '../../data/navigation';

export default function Footer() {
  return (
    <footer className="w-full bg-[#080808] border-t border-[#252525] mt-auto text-[#F5F1E8] font-sans">
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12 pt-16 pb-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 pb-12">
          {/* Brand Column */}
          <div className="lg:w-[34%] lg:pr-8 xl:pr-12 space-y-4">
            <Link
              to="/"
              className="inline-block focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B] rounded-sm group"
              aria-label="Yunetra Home"
            >
              <img
                src="/yunetra_logo.png"
                alt="Yunetra — Ideas Products People Forward"
                className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.01]"
              />
            </Link>
            <p className="text-sm text-[#BFC4C8] leading-relaxed max-w-sm font-sans">
              A technology company creating useful products and digital solutions for businesses.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-[#252525] bg-transparent hover:border-[#C6A66B] hover:text-[#C6A66B] flex items-center justify-center text-[#BFC4C8] transition-colors"
                aria-label="Yunetra on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-[#252525] bg-transparent hover:border-[#C6A66B] hover:text-[#C6A66B] flex items-center justify-center text-[#BFC4C8] transition-colors"
                aria-label="Yunetra on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-md border border-[#252525] bg-transparent hover:border-[#C6A66B] hover:text-[#C6A66B] flex items-center justify-center text-[#BFC4C8] transition-colors"
                aria-label="Yunetra on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:flex lg:flex-1 gap-8 lg:gap-0">
            {footerNavSections.map((section, idx) => (
              <div
                key={section.title}
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
                      <Link
                        to={link.href}
                        className="text-sm text-[#BFC4C8] hover:text-white transition-colors font-sans"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#252525] text-xs sm:text-sm text-[#858B92] font-sans">
          <p>&copy; 2024 Yunetra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
