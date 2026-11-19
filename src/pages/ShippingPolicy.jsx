import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Box, Cpu, ArrowRight } from 'lucide-react';

export default function ShippingPolicy() {
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
              <span>LOGISTICS &amp; FULFILLMENT</span>
              <span className="text-[#C6A66B] text-[10px]">✦</span>
              <span>CHAIN-OF-CUSTODY</span>
            </div>

            {/* Giant Stacked Anton Headline */}
            <h1
              style={{ fontFamily: "'Anton', sans-serif" }}
              className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
            >
              <span className="block text-[#F5F1E8]">SHIPPING &amp;</span>
              <span className="block text-[#C6A66B] mt-1 sm:mt-1.5">DELIVERY POLICY.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-2xl leading-relaxed font-normal">
              Operational standards for dispatching physical edge computing hardware, industrial sensor modules, and instant digital provisioning under strict protocols.
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
              <Truck className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">3–7 Day Air Express</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Priority domestic dispatch across all tier-one industrial corridors.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Box className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">Mil-Spec ESD Packaging</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Anti-static, tamper-evident sealed shock cases for optical modules.</p>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0E0F10] border border-[#232326] flex items-start gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
              <Cpu className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-bold text-[#F5F1E8] font-sans uppercase tracking-wide">Instant Digital Access</h3>
                <p className="text-xs text-[#BFC4C8] mt-1 font-sans">Ratnakhata software credentials delivered via encrypted email in 1 hour.</p>
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
                1. DUAL FULFILLMENT ARCHITECTURE
              </h2>
              <p>
                Yunetra operates both digital platform ecosystems (such as our Ratnakhata valuation platform and cloud SaaS) and precision physical hardware systems (including BoundaryX perimeter intelligence and optical sensor platforms). This document specifies fulfillment timelines, transit protections, and tracking governance for both categories.
              </p>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                2. PHYSICAL HARDWARE DISPATCH (BOUNDARYX PLATFORMS)
              </h2>
              <p>
                Every hardware unit undergoes rigorous functional testing, firmware burn-in, and optical calibration prior to dispatch:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">Processing &amp; Quality QA:</strong> Standard off-the-shelf development kits and sensor units are prepared and calibrated within two (2) to three (3) business days. Custom industrialized enclosures or client-specific sensor arrays may require up to seven (7) business days.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Domestic Transit Timelines:</strong> Deliveries within metropolitan and industrial manufacturing corridors typically arrive within 3 to 5 business days via tier-one air express carriers (BlueDart, DHL, FedEx).
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">International Shipments:</strong> Global deliveries are routed via priority international couriers with typical transit windows of 7 to 12 business days, subject to destination customs clearance.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                3. PACKAGING &amp; ELECTROSTATIC SHIELDING
              </h2>
              <p>
                Sensitive electronic components, optical sensors, and FPGA processing units are packaged under strict engineering protocols:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Shielded within multi-layer ESD (Electrostatic Discharge) moisture-barrier packaging.</li>
                <li>Housed inside high-density foam dampening cases engineered to withstand drop acceleration and vibration during freight handling.</li>
                <li>Secured with serialized tamper-evident holographic warranty tape. If the tape is broken upon receipt, document the packaging condition and contact logistics immediately.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                4. SOFTWARE LICENSES &amp; DIGITAL PROVISIONING
              </h2>
              <p>
                For cloud software platforms, API access tokens, and custom digital products:
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>
                  <strong className="text-[#F5F1E8]">Ratnakhata Platform:</strong> Tenant environments, administrator credentials, and encryption keyrings are provisioned automatically within one (1) hour of approved commercial payment.
                </li>
                <li>
                  <strong className="text-[#F5F1E8]">Custom Software Codebases &amp; Builds:</strong> Delivered via secure Git repository invitations, signed artifact registries, or private AWS/Cloudflare download vaults as defined in the project scope of work.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
              >
                5. LOGISTICS HELP DESK &amp; DISPATCH SUPPORT
              </h2>
              <div className="mt-4 p-6 rounded-xl bg-[#141517] border border-[#2B2D31] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-base font-bold text-[#F5F1E8]">Yunetra Logistics Operations &amp; Dispatch</div>
                  <div className="text-xs text-[#C6A66B] mt-0.5">Email: logistics@yunetra.com &bull; support@yunetra.com</div>
                  <div className="text-xs text-[#858B92] mt-1">Please report transit discrepancies within 48 hours with packaging photos.</div>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <span>Logistics Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            <div className="pt-6 border-t border-[#232326] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#858B92]">
              <div>Last updated: October 2026 &bull; Yunetra Logistics Operations</div>
              <div className="flex items-center gap-4">
                <Link to="/refund-policy" className="hover:text-[#F5F1E8] transition-colors">
                  Refund Policy &rarr;
                </Link>
                <Link to="/terms-and-conditions" className="hover:text-[#F5F1E8] transition-colors">
                  Terms of Service &rarr;
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
