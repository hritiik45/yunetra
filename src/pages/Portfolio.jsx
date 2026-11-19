import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Monitor,
  Smartphone,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

const portfolioItems = [
  {
    id: 'ratnakhata',
    category: 'ENTERPRISE PLATFORM',
    filterCategory: 'platforms',
    title: 'Ratnakhata: Diamond Valuation & Ledger Engine',
    subtitle: 'Cryptographic chain-of-custody and real-time appraisal platform',
    description:
      'Engineered an immutable, deterministic software platform for the diamond and gemstone trade. Replaced manual paperwork with optical parcel ingestion, laboratory grading synchronization, and multi-currency ledger accounts.',
    image: '/images/hq/ratnakhata_mockup.webp',
    metrics: [
      { label: 'Valuation Precision', value: '99.94%' },
      { label: 'Reconciliation Speed', value: '8x Faster' },
      { label: 'Inventory Tracked', value: '$120M+' },
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'WebSockets', 'Tailwind CSS'],
    impact: 'Adopted across premier diamond trading hubs in Surat, Mumbai, and Antwerp.',
    link: '/products/ratnakhata',
  },
  {
    id: 'boundaryx',
    category: 'HARDWARE & EDGE AI',
    filterCategory: 'edge',
    title: 'BoundaryX: Autonomous Perimeter Telemetry',
    subtitle: 'Ruggedized optical and thermal sensor fusion platform',
    description:
      'Developed low-latency on-device machine perception hardware designed for high-security facilities. Ingests dual-spectrum optical and thermal feeds to eliminate false alarms while guaranteeing sub-second intrusion telemetry.',
    image: '/images/hq/boundaryx_mockup.webp',
    metrics: [
      { label: 'Response Latency', value: '< 150ms' },
      { label: 'False Positives', value: '< 0.02%' },
      { label: 'Enclosure Rating', value: 'MIL-STD-810H' },
    ],
    techStack: ['Embedded C++', 'FPGA Fusion', 'Python', 'WebRTC', 'Hardware HSM'],
    impact: 'Deployed across perimeter boundaries for mission-critical industrial yards.',
    link: '/products/boundaryx',
  },
  {
    id: 'business-portal',
    category: 'WEB ARCHITECTURE',
    filterCategory: 'web',
    title: 'Precision Brand & Corporate Digital Portal',
    subtitle: 'Ultra-fast headless web presence with tailored micro-interactions',
    description:
      'Constructed a production-grade digital flagship featuring dark obsidian luxury aesthetic, fluid animations, and sub-second Core Web Vitals performance across all international device viewports.',
    image: '/images/hq/project_business_website.webp',
    metrics: [
      { label: 'LCP Load Time', value: '0.42s' },
      { label: 'SEO Audit Score', value: '100/100' },
      { label: 'Organic Inquiries', value: '+185%' },
    ],
    techStack: ['Next.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Edge'],
    impact: 'Transformed digital lead qualification and elevated client conversion by 3.2x.',
    link: '/contact',
  },
  {
    id: 'custom-webapp',
    category: 'ENTERPRISE PLATFORM',
    filterCategory: 'platforms',
    title: 'Industrial Telemetry & Operations Dashboard',
    subtitle: 'Real-time multi-sensor analytics with sub-second stream rendering',
    description:
      'Created a comprehensive centralized monitoring console for operations directors. Visualizes live facility health, machine duty cycles, and incident dispatches on an intuitive dark glassmorphism canvas.',
    image: '/images/hq/project_custom_webapp.webp',
    metrics: [
      { label: 'Stream Throughput', value: '25k events/sec' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'Mean Triage Time', value: '-65%' },
    ],
    techStack: ['React 18', 'Go Microservices', 'Apache Kafka', 'TimescaleDB', 'Tailwind'],
    impact: 'Reduced operational downtime across 14 distributed client production hubs.',
    link: '/contact',
  },
  {
    id: 'mobile-app',
    category: 'MOBILE APPLICATION',
    filterCategory: 'mobile',
    title: 'Offline-First Field Inspection Mobile Suite',
    subtitle: 'Ruggedized cross-platform mobile app for facility inspection teams',
    description:
      'Engineered an iOS and Android field utility allowing engineers to conduct sensor audits, scan QR barcodes, and log hardware telemetry in remote zones with automated background cryptographic syncing.',
    image: '/images/hq/project_mobile_app.webp',
    metrics: [
      { label: 'Frame Rate', value: '60 FPS Solid' },
      { label: 'Offline Sync Queue', value: '100% Zero-Loss' },
      { label: 'Store Rating', value: '4.9 / 5.0' },
    ],
    techStack: ['Flutter', 'Dart', 'SQLite', 'Firebase Cloud Messaging', 'AES-256'],
    impact: 'Streamlined daily inspection workflows for over 1,200 active field operators.',
    link: '/contact',
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems =
    activeFilter === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.filterCategory === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'platforms', label: 'Enterprise Platforms' },
    { id: 'edge', label: 'Hardware & Edge AI' },
    { id: 'web', label: 'Web Architecture' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  return (
    <div className="w-full bg-[#080808] text-[#F5F1E8] overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER WITH ATMOSPHERIC BACKDROP & MASSIVE HEADLINE */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden border-b border-[#252525] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
        
        {/* Background Artwork Overlay */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/images/hq/cta_mountain_bg.webp"
            alt=""
            className="w-full h-full object-cover object-[center_35%] opacity-35"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#080808]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/60" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4">
              <span>SELECTED WORK</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>ENGINEERED OUTCOMES</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <span className="block text-[#F5F1E8]">REAL PROJECTS.</span>
              <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">REAL OUTCOMES.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Explore our portfolio of production-grade platforms, physical edge sensors, and custom software systems delivering uncompromising real-world impact for businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FILTER PILLS & CASE STUDIES                            */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 font-sans ${
                  activeFilter === tab.id
                    ? 'bg-[#C6A66B] text-[#080808] shadow-md'
                    : 'bg-[#101112] border border-[#232326] text-[#BFC4C8] hover:text-[#F5F1E8] hover:border-[#C6A66B]/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="space-y-12">
            {filteredItems.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl bg-[#0E0F10] border border-[#232326] hover:border-[#C6A66B]/50 transition-all duration-300 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.6)]"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
                  
                  {/* Left Column: Visual Mockup (5 cols) */}
                  <div className="lg:col-span-5 relative bg-[#080808] flex items-center justify-center p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#232326] overflow-hidden group">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-h-[300px] sm:max-h-[360px] object-contain transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-5 left-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-md bg-[#080808]/90 backdrop-blur-md border border-[#252525] text-[#C6A66B] font-sans">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Case Study Narrative (7 cols) */}
                  <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-6">
                    <div>
                      <h2
                        style={{ fontFamily: "'Anton', sans-serif" }}
                        className="text-3xl sm:text-4xl uppercase tracking-tight text-[#F5F1E8]"
                      >
                        {project.title}
                      </h2>
                      
                      <p className="text-sm font-semibold text-[#C6A66B] mt-1.5 font-sans">
                        {project.subtitle}
                      </p>

                      <p className="text-sm sm:text-base text-[#BFC4C8] leading-relaxed font-sans mt-3.5">
                        {project.description}
                      </p>

                      {/* Outcome Metrics Strip */}
                      <div className="grid grid-cols-3 gap-3 my-6 pt-5 border-t border-[#232326]">
                        {project.metrics.map((metric, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-[#141517] border border-[#2B2D31] text-center">
                            <div
                              style={{ fontFamily: "'Anton', sans-serif" }}
                              className="text-2xl sm:text-3xl text-[#C6A66B] uppercase"
                            >
                              {metric.value}
                            </div>
                            <div className="text-[10px] sm:text-[11px] text-[#858B92] font-sans uppercase tracking-wider mt-1">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <span className="text-[11px] font-bold text-[#858B92] uppercase font-sans mr-1">
                          STACK:
                        </span>
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-3 py-1 rounded-md bg-[#141517] border border-[#2B2D31] text-[#BFC4C8] font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer Row */}
                    <div className="pt-6 border-t border-[#232326] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <p className="text-xs text-[#858B92] font-sans italic">
                        &bull; {project.impact}
                      </p>
                      <Link
                        to={project.link}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] text-xs font-bold uppercase tracking-wider transition-all shadow-md flex-shrink-0"
                      >
                        <span>Explore Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation CTA */}
          <div className="mt-20 p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-[#101112] via-[#141517] to-[#101112] border border-[#C6A66B]/40 text-center space-y-5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#C6A66B] font-sans select-none">
              START YOUR BUILD
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              READY TO BUILD YOUR NEXT SYSTEM?
            </h2>
            <p className="text-sm text-[#BFC4C8] max-w-lg mx-auto font-sans leading-relaxed">
              Share your business requirements or technical architecture with our team and let&apos;s engineer a bespoke solution.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
              >
                <span>Initiate Project Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
