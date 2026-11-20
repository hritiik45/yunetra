import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, RefreshCw, Clock, ArrowRight } from 'lucide-react';
import usePageMotion from '../hooks/usePageMotion';
import { MaskLine } from '../components/motion';

export default function RefundPolicy() {
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
              <span>COMMERCIAL GOVERNANCE</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>SETTLEMENT CLAUSES</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <MaskLine standalone d={0.15} className="text-[#F5F1E8]">REFUND &amp;</MaskLine>
              <MaskLine standalone d={0.27} className="text-[#C6A66B] mt-1 sm:mt-1.5">CANCELLATION POLICY.</MaskLine>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Transparent terms governing software subscriptions, bespoke engineering milestones, and industrial hardware platform returns under formal commercial guidelines.
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
              <RefreshCw className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">14-Day SaaS Window</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Full refund on new Ratnakhata subscriptions within 14 calendar days.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <ShieldCheck className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">30-Day Hardware RMA</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Defective BoundaryX units qualify for immediate replacement or repair.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Clock className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">5–7 Day Processing</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Approved funds credited back directly to original payment method.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. POLICY DOCUMENT BODY                                   */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          
          <div className="max-w-4xl mx-auto space-y-8 p-8 sm:p-12 rounded-2xl bg-[#0E0F10] border border-[#232326] text-[#BFC4C8] font-sans leading-relaxed text-sm sm:text-base shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            
            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                1. SCOPE &amp; COMMERCIAL FRAMEWORK
              </h2>
              <p>
                At Yunetra, our engineering services and product platforms are built with uncompromising precision and deterministic reliability. This Refund and Cancellation Policy governs all commercial transactions, digital software licenses, customized system development, and physical edge hardware orders executed with Yunetra Technology Systems.
              </p>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                2. SOFTWARE-AS-A-SERVICE (RATNAKHATA PLATFORM)
              </h2>
              <p>
                For our cloud-hosted valuation intelligence platform (Ratnakhata):
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">Initial Subscription Refund:</strong> New institutional subscribers are entitled to a 100% refund within fourteen (14) days of onboarding if the platform does not meet documented technical specifications.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Subscription Cancellation:</strong> Recurring monthly or annual billing may be cancelled at any time through the enterprise portal. Upon cancellation, access remains active until the end of the current paid billing cycle with no subsequent automated renewals.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Annual Enterprise Commitments:</strong> Multi-year institutional contracts with dedicated server instances or custom integrations are governed by specific Master Service Agreements (MSAs).
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                3. CUSTOM SOFTWARE DEVELOPMENT &amp; BESPOKE SERVICES
              </h2>
              <p>
                Bespoke development contracts (including Website Development, Mobile Apps, Custom Enterprise Platforms, and API Integrations) operate on structured deliverable milestones:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">Discovery &amp; Architectural Phase:</strong> Initial architecture deposits are refundable prior to formal technical kickoff and sprint commencement, less documented consulting hours incurred.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Milestone Sign-Off:</strong> Once an agreed technical milestone (e.g., prototype delivery, user acceptance testing, or deployment) is formally reviewed and approved by the client, funds allocated to that milestone are non-refundable.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Project Termination:</strong> Clients may terminate ongoing retainer or development projects by providing fifteen (15) business days written notice. In such cases, billing ceases for unworked future milestones.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                4. PHYSICAL HARDWARE &amp; SENSORS (BOUNDARYX PLATFORM)
              </h2>
              <p>
                Physical industrial computing systems, optical sensor modules, and BoundaryX edge hardware follow a specialized return protocol:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">Dead On Arrival (DOA) &amp; Manufacturing Defects:</strong> Any unit exhibiting factory defects or transit damage within thirty (30) calendar days of delivery will be repaired or replaced under expedited warranty at zero additional cost to the client.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Return Material Authorization (RMA):</strong> All physical hardware returns require an issued RMA number from our hardware engineering division prior to shipping.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Restocking &amp; Testing Fee:</strong> Non-defective evaluation units returned within the authorized 30-day window are subject to a 15% technical recertification and restocking fee to cover cryptographic memory sanitation and environmental recalibration.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                5. REIMBURSEMENT PROCESSING &amp; BANK TIMELINES
              </h2>
              <p>
                Once a cancellation or refund request is verified and authorized:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  Refunds are remitted exclusively back to the original funding source (credit card, corporate bank transfer, or electronic payment gateway).
                </li>
                <li>
                  The standard banking transfer timeframe is between <strong className="text-[#F5F1E8]">5 to 7 business days</strong> depending on your clearing bank or payment provider.
                </li>
                <li>
                  A formal credit note and accounting confirmation will be dispatched to your billing contact email upon completion.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                6. DISPUTE RESOLUTION &amp; BILLING DESK
              </h2>
              <div className="mt-4 p-6 rounded-xl bg-[#141517] border border-[#2B2D31] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-[#F5F1E8]">Yunetra Commercial Accounts &amp; Billing</div>
                  <div className="text-xs text-[#C6A66B] mt-0.5">Email: hritik45raghuwanshi@gmail.com &bull; Phone: 62600491554</div>
                  <div className="text-xs text-[#858B92] mt-1">Resolution SLA: Maximum 24–48 Business Hours</div>
                </div>
                <Link
                  to="/contact"
                  className="btn-sheen inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Contact Billing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            <div className="pt-6 border-t border-[#232326] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858B92]">
              <div>Last updated: October 2026 &bull; Yunetra Commercial Compliance</div>
              <div className="flex items-center gap-4">
                <Link to="/terms-and-conditions" className="hover:text-[#F5F1E8] transition-colors">
                  Terms of Service &rarr;
                </Link>
                <Link to="/privacy-policy" className="hover:text-[#F5F1E8] transition-colors">
                  Privacy Policy &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
