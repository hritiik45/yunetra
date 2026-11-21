import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Cpu, ArrowRight } from 'lucide-react';
import usePageMotion from '../hooks/usePageMotion';
import { MaskLine } from '../components/motion';

export default function TermsConditions() {
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
              <span>LEGAL &amp; GOVERNANCE</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>TERMS OF SERVICE</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <MaskLine standalone d={0.15} className="text-[#F5F1E8]">TERMS OF</MaskLine>
              <MaskLine standalone d={0.27} className="text-[#C6A66B] mt-1 sm:mt-1.5">SERVICE.</MaskLine>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Governing terms, operational conditions, and intellectual property provisions for utilizing Yunetra software platforms, edge hardware infrastructure, and bespoke engineering services.
            </p>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SUMMARY METRICS STRIP                                  */}
      {/* ======================================================== */}
      <section className="relative w-full py-12 border-b border-[#232326] bg-[#0A0A0C]">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">99.9% Production SLA</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">High-availability infrastructure commitment for active Ratnakhata tenants.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Scale className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">100% Client Data Rights</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Full legal ownership of your commercial parcel records and proprietary data.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Cpu className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">1-Year Hardware Warranty</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Standard manufacturer warranty on physical BoundaryX edge sensor enclosures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. TERMS DOCUMENT BODY                                    */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-4xl mx-auto space-y-8 p-8 sm:p-12 rounded-2xl bg-[#0E0F10] border border-[#232326] text-[#BFC4C8] font-sans leading-relaxed text-sm sm:text-base shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            
            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                1. ACCEPTANCE OF MASTER TERMS
              </h2>
              <p>
                By accessing Yunetra&rsquo;s digital portals, deploying our software solutions, subscribing to Ratnakhata, or acquiring BoundaryX hardware platforms, you (&ldquo;Client&rdquo;, &ldquo;Entity&rdquo;, or &ldquo;User&rdquo;) agree to be legally bound by these Terms of Service. If you are entering into these terms on behalf of a corporate entity, you affirm that you possess full statutory authority to bind that entity.
              </p>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                2. INTELLECTUAL PROPERTY &amp; PROPRIETARY RIGHTS
              </h2>
              <p>
                All software binaries, firmware images, circuit board schematics, optical grading algorithms, mathematical valuation models, trademarks, and user interfaces associated with Yunetra, Ratnakhata, and BoundaryX remain the exclusive and unencumbered intellectual property of Yunetra Technology Systems.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">Prohibited Conduct:</strong> You may not reverse engineer, decompile, disassemble, extract source code, clone optical geometries, or attempt to bypass hardware security modules (HSMs).
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Client Data Sovereignty:</strong> Clients retain 100% full legal ownership of their proprietary commercial transaction data, diamond parcel records, and localized facility telemetry processed through the platforms.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                3. SOFTWARE PLATFORM LICENSING &amp; TENANCY (RATNAKHATA)
              </h2>
              <p>
                Ratnakhata is provided on a non-exclusive, non-transferable, revocable subscription license basis:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Access is provisioned per authorized enterprise tenant seat and business location.</li>
                <li>Clients are responsible for safeguarding authentication credentials and enforcing internal multi-factor authentication (MFA).</li>
                <li>Yunetra guarantees platform infrastructure availability under a 99.9% uptime Service Level Agreement (SLA), excluding scheduled maintenance windows announced forty-eight (48) hours in advance.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                4. CUSTOM ENGINEERING SERVICES &amp; MILESTONES
              </h2>
              <p>
                For custom development engagements (Website Development, Mobile Apps, Custom Software, API Integrations, and Maintenance SLAs):
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Scope, technical deliverables, and milestone acceptance criteria are defined in individual Statements of Work (SOW).</li>
                <li>Clients agree to provide timely technical access, review feedback, and milestone approvals within five (5) business days of deliverable staging.</li>
                <li>Bespoke intellectual property created specifically for a client is transferred upon final settlement of project invoices, as outlined in the respective SOW.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                5. HARDWARE DEPLOYMENT &amp; OPERATIONAL WARRANTY (BOUNDARYX)
              </h2>
              <p>
                BoundaryX edge hardware is delivered with a one-year standard limited manufacturer warranty against component defects. The warranty does not cover damages arising from unauthorized physical tampering, improper electrical grounding, immersion beyond specified IP ratings, or force majeure events.
              </p>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                6. COMMERCIAL BILLING &amp; PAYMENT TERMS
              </h2>
              <p>Unless otherwise specified in a formal enterprise contract:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Invoices are payable within fifteen (15) calendar days from receipt.</li>
                <li>Late balances may incur statutory interest at 1.5% per month or the maximum permissible rate under law.</li>
                <li>All fees are exclusive of applicable GST, VAT, and international withholding taxes.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                7. LIMITATION OF LIABILITY
              </h2>
              <p>
                To the maximum extent permitted by applicable law, in no event shall Yunetra, its directors, or engineering staff be liable for indirect, punitive, incidental, special, or consequential damages—including loss of profits, commercial interruption, or diamond valuation discrepancies resulting from improper optical sensor maintenance. Yunetra&rsquo;s aggregate liability shall not exceed the total fees paid by the client in the three (3) months preceding the incident.
              </p>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                8. GOVERNING LAW &amp; JUDICIAL JURISDICTION
              </h2>
              <p>
                These Terms of Service and any contractual disputes arising hereunder shall be governed by and construed in accordance with the laws of the Republic of India. The courts of Guna, Madhya Pradesh shall have exclusive jurisdiction over all disputes arising out of or related to these agreements.
              </p>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                9. LEGAL INQUIRIES &amp; FORMAL NOTICES
              </h2>
              <div className="p-6 rounded-xl bg-[#0A0A0C] border border-[#232326] space-y-1">
                <div className="text-sm font-bold text-[#F5F1E8] font-sans">Yunetra Legal Affairs Division</div>
                <div className="text-xs text-[#C6A66B] font-sans">Email: hritik45raghuwanshi@gmail.com &bull; Phone: +91 62604 91554</div>
                <div className="text-xs text-[#858B92] font-sans mt-1">
                  Registered Headquarters: Salim Chacha Ki Badi, Kernal Ganj, Near Hanuman Mandir, Guna, Madhya Pradesh - 473001
                </div>
              </div>
            </section>

            {/* Bottom Links */}
            <div className="pt-6 border-t border-[#232326] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858B92] font-sans">
              <div>Effective October 2026 &bull; Yunetra Legal Governance</div>
              <div className="flex items-center gap-4">
                <Link to="/privacy-policy" className="hover:text-[#C6A66B] transition-colors">
                  Privacy Policy &rarr;
                </Link>
                <Link to="/refund-policy" className="hover:text-[#C6A66B] transition-colors">
                  Refund Policy &rarr;
                </Link>
                <Link to="/shipping-policy" className="hover:text-[#C6A66B] transition-colors">
                  Shipping Policy &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
