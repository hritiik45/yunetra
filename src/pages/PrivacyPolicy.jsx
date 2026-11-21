import React from 'react';
import { Link } from 'react-router-dom';
import usePageMotion from '../hooks/usePageMotion';
import { MaskLine } from '../components/motion';

export default function PrivacyPolicy() {
  const pageRef = React.useRef(null);
  usePageMotion(pageRef);
  return (
    <div ref={pageRef} className="w-full bg-[#080808] text-[#F5F1E8] overflow-hidden">
      
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
              <span>COMPLIANCE &amp; GOVERNANCE</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>DATA PROTECTION</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <MaskLine standalone d={0.15} className="text-[#F5F1E8]">PRIVACY</MaskLine>
              <MaskLine standalone d={0.27} className="text-[#C6A66B] mt-1 sm:mt-1.5">POLICY.</MaskLine>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Our formal commitment to safeguarding institutional telemetry, customer credentials, and proprietary commercial data under international standards.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. POLICY DOCUMENT BODY                                   */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-4xl mx-auto space-y-8 p-8 sm:p-12 rounded-2xl bg-[#0E0F10] border border-[#232326] text-[#BFC4C8] font-sans leading-relaxed text-sm sm:text-base shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            
            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                1. DATA PROTECTION ARCHITECTURE &amp; OVERVIEW
              </h2>
              <p>
                Yunetra (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to deterministic data stewardship and institutional privacy. This Privacy Policy delineates how we collect, process, isolate, and protect information when you navigate our public web portals, evaluate our software platforms (including Ratnakhata), or deploy our edge hardware systems (including BoundaryX).
              </p>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                2. CATEGORIES OF INFORMATION COLLECTED
              </h2>
              <p>We restrict data collection to minimal operational necessities:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">Commercial Inquiries &amp; Contact Telemetry:</strong> Name, corporate email address, organizational entity, telephone/WhatsApp contact, and engagement specifications submitted via forms.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Authenticated Platform Credentials:</strong> Encrypted authorization tokens, usernames, and role-based access control (RBAC) permissions associated with client tenant workspaces.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Hardware &amp; System Telemetry:</strong> Device identifiers, firmware build revisions, network handshake timestamps, and diagnostic uptime logs transmitted by connected BoundaryX sensor modules.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Technical Browser Data:</strong> IP address, browser type, operating system version, and anonymous session analytics collected exclusively to maintain network security and page performance.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                3. CRYPTOGRAPHIC DATA ISOLATION
              </h2>
              <p>
                All information in transit and at rest is governed by enterprise-grade cryptographic controls:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">In Transit:</strong> Transport Layer Security (TLS 1.3) with strict forward secrecy and HSTS enforcement across all web and API endpoints.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">At Rest:</strong> Advanced Encryption Standard (AES-256) across institutional databases, cryptographic vault keyrings, and backup snapshots.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Hardware HSM Isolation:</strong> BoundaryX hardware units leverage dedicated Hardware Security Modules (HSMs) for localized cryptographic key generation and perimeter telemetry signing.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                4. THIRD-PARTY INFRASTRUCTURE PARTNERS
              </h2>
              <p>
                We partner exclusively with tier-one infrastructure providers that adhere to ISO 27001, SOC 2 Type II, and GDPR compliance standards:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li><strong className="text-[#F5F1E8]">Cloud Compute &amp; Storage:</strong> Amazon Web Services (AWS) and Cloudflare Edge Network.</li>
                <li><strong className="text-[#F5F1E8]">Payment Gateways:</strong> PCI-DSS Level 1 compliant processors (Razorpay, Stripe) for secure financial transactions.</li>
                <li><strong className="text-[#F5F1E8]">Telemetry &amp; Uptime Logging:</strong> Datadog and Sentry for real-time exception tracking and system resilience.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                5. DATA PROTECTION OFFICE &amp; REGULATORY INQUIRIES
              </h2>
              <div className="p-6 rounded-xl bg-[#141517] border border-[#2B2D31]">
                <div className="text-base font-bold text-[#F5F1E8]">Yunetra Data Protection Office</div>
                <div className="text-xs text-[#C6A66B] mt-0.5">Email: hritik45raghuwanshi@gmail.com &bull; Phone: +91 62604 91554</div>
                <div className="text-xs text-[#858B92] mt-1">
                  Registered Address: Salim Chacha Ki Badi, Kernal Ganj, Near Hanuman Mandir, Guna, Madhya Pradesh - 473001
                </div>
              </div>
            </section>

            <div className="pt-6 border-t border-[#232326] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858B92]">
              <div>Last updated: October 2026 &bull; Yunetra Technology Systems</div>
              <div className="flex items-center gap-4">
                <Link to="/terms-and-conditions" className="hover:text-[#F5F1E8] transition-colors">
                  Terms of Service &rarr;
                </Link>
                <Link to="/refund-policy" className="hover:text-[#F5F1E8] transition-colors">
                  Refund Policy &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
