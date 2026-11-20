import React, { useRef } from 'react';
import {
  Search,
  FileText,
  Code2,
  Rocket,
  ArrowRight,
} from 'lucide-react';
import { gsap } from '../../lib/animations';
import useScrollScene from '../../hooks/useScrollScene';
import { Scene, Item, LineY, MaskLine } from '../../components/motion';

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

const INACTIVE_TEXT = 0.42;

/** The tweens that "switch a step on". Shared by the scrubbed and per-step modes. */
function addStepActivation(tl, step, at = 0, dur = 0.35) {
  const icon = step.querySelector('[data-step-icon]');
  const glyph = step.querySelector('[data-step-icon] svg');
  const num = step.querySelector('[data-step-num]');
  const text = step.querySelector('[data-step-text]');
  tl.to(icon, { backgroundColor: '#C6A66B', boxShadow: '0 0 0 6px rgba(198,166,107,0.14)', scale: 1.06, duration: dur }, at)
    .to(glyph, { color: '#080808', duration: dur }, at)
    .to(num, { color: '#EADFC6', y: 0, duration: dur }, at)
    .to(text, { opacity: 1, duration: dur }, at);
}

export default function ProcessSection() {
  const sectionRef = useRef(null);

  useScrollScene(sectionRef, ({ q, isDesktop }) => {
    const stepEls = q('[data-step]');
    const fills = q('[data-step-fill]');

    // Inactive baseline (the original look, slightly dimmed text, numbers dropped).
    gsap.set(q('[data-step-text]'), { opacity: INACTIVE_TEXT });
    gsap.set(q('[data-step-num]'), { y: 22 });

    if (isDesktop) {
      // One scrubbed timeline: the line draws step to step and each stage
      // switches on as the line reaches it. Scrolling up reverses it exactly.
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: q('[data-steps]')[0],
          start: 'top 78%',
          end: 'bottom 38%',
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      });
      stepEls.forEach((step, i) => {
        const t = i * 1;
        addStepActivation(tl, step, t);
        if (fills[i]) tl.to(fills[i], { scaleX: 1, duration: 0.7 }, t + 0.3);
      });
    } else {
      // Tablet / mobile: no scrub. Each step activates once it is well on
      // screen and deactivates again when scrolled back below it.
      stepEls.forEach((step) => {
        const tl = gsap.timeline({
          paused: true,
          scrollTrigger: {
            trigger: step,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        });
        addStepActivation(tl, step, 0, 0.5);
      });
    }
  });

  return (
    <section
      ref={sectionRef}
      id="process-section"
      aria-labelledby="process-heading"
      className="relative w-full bg-[#F5F1E8] py-16 sm:py-20 lg:py-24 text-[#080808] border-b border-[#D8D2C6]"
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
          {/* Left Introduction Column (Approx 28-30% Width) */}
          <Scene className="lg:w-[30%] xl:w-[28%] flex flex-col justify-center lg:pr-8 xl:pr-10">
            {/* Eyebrow */}
            <Item
              as="p"
              className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] mb-4 sm:mb-5 font-sans select-none"
            >
              OUR PROCESS
            </Item>

            {/* Display Headline with Balanced Spacing */}
            <h2
              id="process-heading"
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.98] select-none text-[3rem] sm:text-[3.5rem] md:text-[3.75rem] lg:text-[3.85rem] xl:text-[4.25rem]"
            >
              <MaskLine d={0.08} className="text-[#080808]">A CLEAR PATH</MaskLine>
              <MaskLine d={0.18} className="text-[#080808] mt-1 sm:mt-1.5">FROM IDEA</MaskLine>
              <MaskLine d={0.28} className="text-[#C6A66B] mt-1 sm:mt-1.5">TO LAUNCH.</MaskLine>
            </h2>

            {/* Supporting Paragraph */}
            <Item
              as="p"
              d={0.5}
              className="text-sm sm:text-[15px] text-[#45433F] font-sans leading-relaxed max-w-sm mt-5 sm:mt-6 font-normal"
            >
              A transparent and collaborative process to turn your ideas into working products.
            </Item>
          </Scene>

          {/* Thin Vertical Divider (Desktop Only) */}
          <Scene amount={0.3} className="hidden lg:block self-center flex-shrink-0 mx-4 xl:mx-8" aria-hidden="true">
            <LineY d={0.3} className="w-[1px] bg-[#D9C7A5] h-36 xl:h-44 origin-top" />
          </Scene>

          {/* Four Evenly Spaced Process Steps Across Remaining Width */}
          <div className="lg:w-[70%] xl:w-[72%] lg:pl-6 xl:pl-8">
            <div
              data-steps
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-8 lg:gap-4 xl:gap-6 relative"
            >
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                const isLast = index === steps.length - 1;

                return (
                  <Scene key={step.number} amount={0.3}>
                    <Item d={index * 0.1}>
                      <div data-step className="group relative flex flex-col items-start select-none">
                        {/* Icon + Number + Connecting Arrow Row */}
                        <div className="relative flex items-center w-full mb-5 sm:mb-6">
                          {/* Oversized Pale Number Behind Icon */}
                          <span
                            data-step-num
                            style={{ fontFamily: "'Anton', sans-serif" }}
                            className="absolute -top-7 -left-1 text-7xl sm:text-8xl lg:text-[6.5rem] xl:text-[7rem] text-[#E5DFD4] pointer-events-none select-none z-0 leading-none tracking-tighter"
                            aria-hidden="true"
                          >
                            {step.number}
                          </span>

                          {/* Circular Dark Icon Container with Thin Gold Border */}
                          <div
                            data-step-icon
                            className="relative z-10 w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#080808] border border-[#C6A66B] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105"
                          >
                            <IconComponent className="w-5 h-5 text-[#C6A66B] stroke-[1.6]" />
                          </div>

                          {/* Connector to the next step (Desktop): a faint track, a gold fill that
                              the scroll draws, and the original arrow riding its tip. */}
                          {!isLast && (
                            <div
                              className="hidden lg:flex relative flex-1 items-center justify-end px-2 z-10"
                              aria-hidden="true"
                            >
                              <span className="absolute left-0 -right-4 xl:-right-6 top-1/2 h-px bg-[#C6A66B]/25" />
                              <span
                                data-step-fill
                                className="absolute left-0 -right-4 xl:-right-6 top-1/2 h-px bg-[#C6A66B] origin-left scale-x-0"
                              />
                              <ArrowRight className="relative w-4 h-4 text-[#C6A66B]/85 transition-transform duration-200 group-hover:translate-x-1" />
                            </div>
                          )}
                        </div>

                        <div data-step-text>
                          {/* Step Title Below Icon */}
                          <h3 className="relative z-10 text-base sm:text-lg font-bold text-[#080808] font-sans tracking-tight leading-snug mt-2 mb-1.5">
                            {step.title}
                          </h3>

                          {/* Step Description */}
                          <p className="relative z-10 text-xs sm:text-[13.5px] text-[#45433F] font-sans leading-relaxed max-w-[210px] font-normal">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Item>
                  </Scene>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
