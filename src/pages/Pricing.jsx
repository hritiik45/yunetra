import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  CreditCard,
  Receipt,
  Clock,
  ChevronDown,
  Layers,
  Cpu,
  Trophy,
} from 'lucide-react';
import usePageMotion from '../hooks/usePageMotion';
import { MaskLine } from '../components/motion';

export default function Pricing() {
  const pageRef = React.useRef(null);
  usePageMotion(pageRef);

  const [activeCategory, setActiveCategory] = useState('ratnakhata');
  const [activeFaq, setActiveFaq] = useState(null);

  const categories = [
    { id: 'ratnakhata', label: 'Ratnakhata SaaS', icon: Zap },
    { id: 'services', label: 'Digital Engineering', icon: Layers },
    { id: 'boundaryx', label: 'BoundaryX Platform', icon: Cpu },
  ];

  const pricingData = {
    ratnakhata: [
      {
        name: 'Starter Vault',
        tagline: 'Ideal for independent gem merchants and trading desks',
        price: '₹4,999',
        period: '/ month',
        billingNote: 'Billed quarterly (₹14,997) &bull; 14-day refund window',
        badge: null,
        features: [
          'Up to 5,000 diamond & gem parcel records',
          'Single vault inventory management',
          'Standard 4C grading & valuation logging',
          'Automated GST invoice generation',
          'Daily cloud backups & SSL encryption',
          'Standard business hours email support',
        ],
        ctaText: 'Choose Starter Vault',
        ctaInterest: 'ratnakhata',
      },
      {
        name: 'Professional Suite',
        tagline: 'Engineered for multi-facility trading houses and certified labs',
        price: '₹14,999',
        period: '/ month',
        billingNote: 'Billed quarterly (₹44,997) &bull; Priority deployment',
        badge: 'MOST POPULAR',
        popular: true,
        features: [
          'Unlimited diamond parcel inventory control',
          'Multi-facility vault synchronization',
          'Automated cryptographic chain-of-custody ledger',
          'Real-time multi-currency & market index feeds',
          'Multi-user permissions with role-based audit logs',
          'Restricted API access for custom ERP feeds',
          'Dedicated account manager with 4-hour SLA',
        ],
        ctaText: 'Get Started with Pro',
        ctaInterest: 'ratnakhata',
      },
      {
        name: 'Institutional Enterprise',
        tagline: 'Tailored architecture for exchange bourses and diamond conglomerates',
        price: 'Custom',
        period: '',
        billingNote: 'Bespoke annual licensing &bull; Dedicated SLA',
        badge: 'ENTERPRISE',
        features: [
          'Dedicated private cloud or on-premise installation',
          'Proprietary optical scanner hardware integration',
          'Custom cryptographic Hardware Security Module (HSM)',
          'High-throughput ERP & SAP bidirectional connectors',
          'Custom machine learning grading models',
          '24/7/365 dedicated engineering team SLA',
        ],
        ctaText: 'Request Enterprise Architecture',
        ctaInterest: 'ratnakhata',
      },
    ],
    services: [
      {
        name: 'Brand & Web Platform',
        tagline: 'Precision digital presence engineered for technology and luxury brands',
        price: '₹24,999',
        period: 'starting',
        billingNote: 'Milestone delivery (50% upfront, 50% on launch)',
        badge: null,
        features: [
          'Headless responsive web portal (React / Next.js)',
          'Custom micro-interactions and dark luxury aesthetic',
          'CMS integration for dynamic news & product catalogs',
          'SEO optimization & sub-second Core Web Vitals',
          'Full contact & lead capture pipeline integration',
          '30 days post-launch warranty and bug-fix support',
        ],
        ctaText: 'Initiate Web Build',
        ctaInterest: 'website',
      },
      {
        name: 'Custom SaaS / Mobile MVP',
        tagline: 'Full-stack software platform engineered for commercial operation',
        price: '₹74,999',
        period: 'starting',
        billingNote: 'Staged sprint milestones &bull; Source code ownership',
        badge: 'FULL STACK',
        popular: true,
        features: [
          'Cross-platform mobile (Flutter) or full-stack web application',
          'Secure authentication, role-based access & database schema',
          'Complete Razorpay payment gateway integration',
          'Administrative control center with operational analytics',
          'Automated transactional emails & notifications',
          'Cloud infrastructure setup (AWS / Cloudflare)',
          '60 days post-deployment engineering warranty',
        ],
        ctaText: 'Build Custom Platform',
        ctaInterest: 'custom-software',
      },
      {
        name: 'Enterprise Cloud System',
        tagline: 'High-throughput distributed systems and mission-critical workflows',
        price: 'Custom',
        period: 'quote',
        billingNote: 'Tailored Statement of Work (SOW)',
        badge: 'TURNKEY',
        features: [
          'Distributed microservices architecture',
          'Real-time WebSocket & streaming telemetry pipelines',
          'Legacy system modernization and data migration',
          'Continuous Integration & automated zero-downtime deployment',
          'Strict SOC 2 & ISO 27001 data isolation compliance',
          '24/7 monitoring and dedicated DevOps support',
        ],
        ctaText: 'Request Technical Scoping',
        ctaInterest: 'custom-software',
      },
    ],
    boundaryx: [
      {
        name: 'Cricket Platform: Tournament Pass',
        tagline: 'Complete digital management for leagues, tournaments, and cricket clubs',
        price: '₹2,999',
        period: '/ tournament',
        billingNote: 'Instant activation &bull; Web & mobile accessible',
        badge: null,
        features: [
          'Complete tournament fixture generation & team rosters',
          'Real-time ball-by-ball digital live scoring',
          'Automated points tables, NRR calculation & team standings',
          'Player statistics, leaderboard & award tracking',
          'Public live score match links for spectators',
          'Instant tournament certificates & PDF summary reports',
        ],
        ctaText: 'Organise Tournament',
        ctaInterest: 'boundaryx',
        externalUrl: 'https://boundaryx.yunetra.com/user/home',
      },
      {
        name: 'Edge Telemetry Developer Kit',
        tagline: 'Ruggedized hardware platform for prototype perimeter perception',
        price: '₹49,999',
        period: 'one-time',
        billingNote: 'Includes 1 year telemetry cloud license &bull; Hardware warranty',
        badge: 'HARDWARE PILOT',
        popular: true,
        features: [
          '1x MIL-STD-810H rated industrial edge computing unit',
          'Dual-spectrum optical day/night sensor interface',
          'On-device neural inference & FPGA pipeline integration',
          'Zero-trust hardware security module (HSM) encryption',
          '1-year cloud telemetry streaming & dashboard access',
          'Developer SDK with C++ / Python integration hooks',
        ],
        ctaText: 'Order Developer Kit',
        ctaInterest: 'boundaryx',
      },
      {
        name: 'Industrial Turnkey Deployment',
        tagline: 'Multi-node boundary sensor mesh for high-security facilities',
        price: 'Custom',
        period: 'quote',
        billingNote: 'On-site site survey &bull; Hardware installation',
        badge: 'INDUSTRIAL',
        features: [
          'Multi-node distributed perimeter sensor hardware installation',
          'Custom optical array calibration & thermal envelope rating',
          'Isolated private 5G / Ethernet PoE+ networking setup',
          'On-premise control room integration & telemetry dashboard',
          'Sub-second automated alert dispatch & security system tie-in',
          'Annual maintenance contract (AMC) with on-site technician SLA',
        ],
        ctaText: 'Schedule Site Assessment',
        ctaInterest: 'boundaryx',
      },
    ],
  };

  const faqs = [
    {
      q: 'Which payment methods are accepted through Razorpay?',
      a: 'We accept all standard Indian payment methods through our Razorpay checkout and invoice links, including UPI (Google Pay, PhonePe, Paytm, BHIM), Debit & Credit Cards (Visa, Mastercard, RuPay), NetBanking across 50+ Indian banks, and NEFT/RTGS for larger enterprise settlements.',
    },
    {
      q: 'Do you provide valid GST invoices for business expenses?',
      a: 'Yes. All invoices generated by Yunetra include official GST details, allowing your registered commercial entity to claim applicable Input Tax Credit (ITC). You can enter your GSTIN during checkout or invoice payment.',
    },
    {
      q: 'What is your refund policy on platform subscriptions?',
      a: 'We maintain a transparent 14-day money-back guarantee on all new Ratnakhata software platform subscriptions. If the platform does not meet your operational workflow requirements, you can request a 100% refund within 14 calendar days. Approved refunds are credited directly to your original payment method in 5 to 7 business days as per our published Refund Policy.',
    },
    {
      q: 'How are custom software engineering milestones billed?',
      a: 'Custom engineering and turnkey projects are structured around clear deliverables. Typically, projects are divided into milestone stages (e.g. 50% mobilization, 25% prototype review, 25% production launch). Each milestone is backed by a formal Statement of Work (SOW) and verifiable Razorpay invoice.',
    },
    {
      q: 'Can I upgrade or customize our subscription tier later?',
      a: 'Yes. You can seamlessly scale from the Starter Vault to the Professional Suite or add custom vault locations as your business expands. Subscription fees are automatically prorated to reflect your current billing period.',
    },
  ];

  return (
    <div ref={pageRef} className="w-full bg-[#080808] text-[#F5F1E8] overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER WITH ATMOSPHERIC BACKDROP & HEADLINE       */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden border-b border-[#252525] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
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
            <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4">
              <span>COMMERCIAL TRANSPARENCY</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>ENTERPRISE &amp; SAAS</span>
            </div>

            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <MaskLine standalone d={0.15} className="text-[#F5F1E8]">PREDICTABLE PRICING.</MaskLine>
              <MaskLine standalone d={0.27} className="text-[#C6A66B] mt-1 sm:mt-1.5">ENGINEERED FOR SCALE.</MaskLine>
            </h1>

            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Transparent commercial packages structured in Indian Rupees (INR) for our flagship platforms, tournament solutions, and custom software engineering. Every transaction is backed by clear SLAs and secure payment processing.
            </p>

            {/* Compliance & Trust Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-[#BFC4C8] font-sans">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[#C6A66B]" />
                <span>Secure Payments via Razorpay</span>
              </div>
              <div className="flex items-center gap-2">
                <Receipt className="w-4 h-4 text-[#C6A66B]" />
                <span>Instant GST Invoices</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C6A66B]" />
                <span>14-Day SaaS Refund Window</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C6A66B]" />
                <span>Zero Hidden Fees</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. CATEGORY SELECTOR TABS                                */}
      {/* ======================================================== */}
      <section className="relative w-full py-8 border-b border-[#232326] bg-[#0A0A0C]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#C6A66B] text-[#080808] shadow-[0_4px_20px_rgba(198,166,107,0.35)] scale-105'
                      : 'bg-[#141517] text-[#BFC4C8] border border-[#2B2D31] hover:border-[#C6A66B]/50 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. PRICING TIERS GRID                                    */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {pricingData[activeCategory].map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl flex flex-col justify-between p-8 sm:p-9 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#121316] border-2 border-[#C6A66B] shadow-[0_12px_40px_rgba(198,166,107,0.18)] scale-[1.02]'
                    : 'bg-[#0E0F10] border border-[#232326] hover:border-[#C6A66B]/40 shadow-[0_8px_32px_rgba(0,0,0,0.6)]'
                }`}
              >
                {/* Popular / Tier Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-8">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full bg-[#C6A66B] text-[#080808] font-sans shadow-md">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <h3
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
                  >
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#858B92] font-sans mt-2 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="my-6 pt-5 pb-5 border-y border-[#232326]">
                    <div className="flex items-baseline gap-2">
                      <span
                        style={{ fontFamily: "'Anton', sans-serif" }}
                        className="text-4xl sm:text-5xl text-[#C6A66B] uppercase tracking-tight"
                      >
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs uppercase font-medium text-[#858B92] font-sans">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-[11px] text-[#BFC4C8] font-sans mt-2"
                      dangerouslySetInnerHTML={{ __html: plan.billingNote }}
                    />
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#858B92] font-sans">
                      INCLUDED CAPABILITIES:
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#F5F1E8] font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#C6A66B] mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action Button */}
                <div className="pt-4">
                  {plan.externalUrl ? (
                    <a
                      href={plan.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sheen w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md group"
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  ) : (
                    <Link
                      to={`/contact?interest=${plan.ctaInterest}&plan=${encodeURIComponent(plan.name)}`}
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                        plan.popular
                          ? 'btn-sheen bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] shadow-md group'
                          : 'bg-[#141517] hover:bg-[#1A1C1F] border border-[#2B2D31] hover:border-[#C6A66B] text-[#F5F1E8] hover:text-[#C6A66B]'
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>

              </div>
            ))}
          </div>

          {/* Payment Gateway Trust Box */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#101113] via-[#141517] to-[#101113] border border-[#C6A66B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs uppercase font-semibold tracking-[0.2em] text-[#C6A66B] font-sans">
                <ShieldCheck className="w-4 h-4" />
                <span>OFFICIAL PAYMENT GATEWAY PARTNER</span>
              </div>
              <h3
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                SECURE TRANSACTIONS POWERED BY RAZORPAY
              </h3>
              <p className="text-xs sm:text-sm text-[#BFC4C8] font-sans max-w-2xl leading-relaxed">
                All platform subscriptions and turnkey project payments are securely executed through Razorpay with 256-bit SSL encryption, instant GST-compliant tax invoices, and full support for UPI, Cards, NetBanking, and NEFT/RTGS settlements.
              </p>
            </div>
            <Link
              to="/contact"
              className="btn-sheen inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all shadow-md flex-shrink-0"
            >
              <span>Request Custom Invoice</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BILLING & COMMERCIAL FAQ ACCORDION                    */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#0A0A0C] border-t border-[#232326]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
            >
              BILLING &amp; COMMERCIAL INQUIRIES
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-[#0E0F10] border border-[#232326] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#141517] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A66B]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-semibold text-[#F5F1E8] font-sans">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#C6A66B] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#BFC4C8] font-sans leading-relaxed border-t border-[#232326]/60">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Consultation Link */}
          <div className="mt-16 text-center">
            <p className="text-xs text-[#858B92] font-sans">
              Have specific enterprise procurement requirements or need a signed Non-Disclosure Agreement (NDA)?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-[#C6A66B] hover:text-white transition-colors font-sans"
            >
              <span>Connect with our Commercial Accounts Team</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
