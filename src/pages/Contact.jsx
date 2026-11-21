import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Loader2,
  AlertCircle
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { CONTACT } from '../data/contact';
import { submitForm } from '../lib/submitForm';
import { EASE_OUT } from '../lib/animations';
import usePageMotion from '../hooks/usePageMotion';
import { MaskLine } from '../components/motion';

export default function Contact() {
  const pageRef = React.useRef(null);
  usePageMotion(pageRef);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: 'ratnakhata',
    budget: 'flexible',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Honeypot: real visitors never fill this hidden field.
    if (form.elements._honey && form.elements._honey.value) return;
    setError('');
    setSending(true);
    try {
      await submitForm(
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization,
          interest: formData.interest,
          budget: formData.budget,
          message: formData.message,
        },
        { subject: `New Yunetra enquiry from ${formData.name}` }
      );
      setSubmitted(true);
      setFormData((prev) => ({ ...prev, message: '' }));
    } catch {
      setError(
        `We could not send your message. Please try again, or email us directly at ${CONTACT.email}.`
      );
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactChannels = [
    {
      icon: Mail,
      title: 'Corporate Email',
      detail: CONTACT.email,
      subtext: 'Executive & commercial partnerships',
      action: `mailto:${CONTACT.email}`,
    },
    {
      icon: Phone,
      title: 'Direct Telephony',
      detail: CONTACT.phoneDisplay,
      subtext: 'Mon–Fri, 9:00 AM – 7:00 PM IST',
      action: CONTACT.phoneTel,
    },
    {
      icon: MessageSquare,
      title: 'Technical Support',
      detail: CONTACT.email,
      subtext: '24/7 SLA active deployment help',
      action: `mailto:${CONTACT.email}`,
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      detail: CONTACT.addressLine1,
      subtext: CONTACT.addressLine2,
      action: null,
    },
  ];

  const faqs = [
    {
      q: 'Can we sign an NDA prior to disclosing our system specifications?',
      a: 'Yes, absolutely. We routinely execute mutual Non-Disclosure Agreements (NDAs) prior to architectural discovery sessions or reviewing proprietary schematics and business workflows.',
    },
    {
      q: 'Do you provide on-site hardware installation for BoundaryX?',
      a: 'Yes. Our specialized field engineering teams perform full on-site optical calibration, sensor enclosure mounting, and local intranet integration for critical perimeter installations.',
    },
    {
      q: 'How does engagement billing work for bespoke software services?',
      a: 'Custom engineering operates under structured milestone sprints (Discovery, Prototype, Architecture, Staging, and Production Deployment). Invoices are tied directly to agreed deliverables.',
    },
    {
      q: 'Can Ratnakhata integrate with existing ERP systems?',
      a: 'Yes. Ratnakhata features deterministic REST and GraphQL APIs engineered to sync smoothly with SAP, Oracle, Tally Prime, and custom internal inventory databases.',
    },
  ];

  return (
    <div ref={pageRef} className="w-full bg-[#080808] text-[#F5F1E8] overflow-hidden">
      
      {/* ======================================================== */}
      {/* 1. HERO BANNER WITH ATMOSPHERIC BACKDROP & MASSIVE HEADLINE */}
      {/* ======================================================== */}
      <section className="relative w-full overflow-hidden border-b border-[#252525] pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
        
        {/* Cinematic Backdrop with Mountain Artwork & Overlays */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <img
            src="/images/hq/cta_mountain_bg.webp"
            alt=""
            className="w-full h-full object-cover object-[center_35%] opacity-40"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#080808]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-[#080808]/60" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
            
            {/* Left Headline Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-3 sm:mb-4">
                <span>INITIATE ENGAGEMENT</span>
                <span className="text-[#C6A66B] text-[10px]">✦</span>
                <span>ENGINEERING ADVISORY</span>
              </div>

              {/* Large Homepage-style Anton Headline */}
              <h1
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="uppercase tracking-tight leading-[0.92] select-none text-[3.25rem] sm:text-[4.25rem] md:text-[5rem] lg:text-[5.5rem] xl:text-[6.25rem]"
              >
                <MaskLine standalone d={0.15} className="text-[#F5F1E8]">LET’S BUILD</MaskLine>
                <MaskLine standalone d={0.27} className="text-[#C6A66B] mt-1 sm:mt-1.5">SOMETHING GREAT.</MaskLine>
              </h1>

              {/* Supporting Copy */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#BFC4C8] font-sans max-w-xl leading-relaxed font-normal">
                Connect directly with our systems architects, product engineers, and technical directors. Whether you are deploying Ratnakhata, integrating BoundaryX hardware, or engineering a custom digital platform, we are ready to build.
              </p>
            </div>

            {/* Right Contact Cards in a 2x2 Grid (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactChannels.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-[#101112]/90 backdrop-blur-md border border-[#232326] hover:border-[#C6A66B]/60 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-[#080808] border border-[#2A2B2E] flex items-center justify-center text-[#C6A66B] mb-3">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A66B] block font-sans">
                        {item.title}
                      </span>
                      <p className="text-sm font-bold text-[#F5F1E8] font-sans mt-1">
                        {item.detail}
                      </p>
                      <p className="text-[11px] text-[#858B92] font-sans mt-0.5">
                        {item.subtext}
                      </p>
                    </div>

                    {item.action && (
                      <a
                        href={item.action}
                        className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-[#C6A66B] hover:text-white transition-colors font-sans"
                      >
                        <span>Connect</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. MAIN FORM & OPERATIONAL DETAILS SECTION                */}
      {/* ======================================================== */}
      <section className="relative w-full py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            
            {/* Left: Contact Form (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-10 rounded-2xl bg-[#0E0F10] border border-[#232326] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
              <div className="mb-8">
                <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
                  SECURE TRANSMISSION
                </p>
                <h2
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="uppercase tracking-tight text-3xl sm:text-4xl text-[#F5F1E8]"
                >
                  TELL US ABOUT YOUR PROJECT
                </h2>
                <p className="text-xs sm:text-sm text-[#BFC4C8] mt-1 font-sans">
                  Submissions are reviewed directly by technical directors within 4–6 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-[#C6A66B]/20 border border-[#C6A66B] text-[#C6A66B] flex items-center justify-center mx-auto text-2xl">
                    <CheckCircle2 className="w-8 h-8 text-[#C6A66B]" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-3xl sm:text-4xl uppercase text-[#F5F1E8]"
                  >
                    INQUIRY TRANSMITTED
                  </h3>
                  <p className="text-sm text-[#BFC4C8] font-sans max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. A systems architect has been assigned to your request and will follow up through encrypted corporate email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg border border-[#3E4044] hover:border-[#C6A66B] text-xs uppercase font-semibold tracking-wider text-[#F5F1E8] hover:text-[#C6A66B] transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" aria-busy={sending}>
                  {/* Spam honeypot (hidden from people) */}
                  <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5 font-sans"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Vikram Mehta"
                        className="w-full px-4 py-3 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] placeholder:text-[#606368] focus:outline-none focus:border-[#C6A66B] text-sm font-sans transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5 font-sans"
                      >
                        Corporate Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@enterprise.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] placeholder:text-[#606368] focus:outline-none focus:border-[#C6A66B] text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5 font-sans"
                      >
                        Phone / WhatsApp
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] placeholder:text-[#606368] focus:outline-none focus:border-[#C6A66B] text-sm font-sans transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5 font-sans"
                      >
                        Company / Entity
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Organization or Facility"
                        className="w-full px-4 py-3 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] placeholder:text-[#606368] focus:outline-none focus:border-[#C6A66B] text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="interest"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5 font-sans"
                      >
                        Engagement Domain *
                      </label>
                      <select
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] focus:outline-none focus:border-[#C6A66B] text-sm font-sans transition-colors"
                      >
                        <option value="ratnakhata">Ratnakhata Platform Demo &amp; Licensing</option>
                        <option value="boundaryx">BoundaryX Industrial Hardware Inquiries</option>
                        <option value="website-dev">Website &amp; Web Platform Engineering</option>
                        <option value="mobile-dev">Mobile Application Engineering</option>
                        <option value="custom-software">Custom Enterprise Software Systems</option>
                        <option value="api-integration">API Integrations &amp; Middleware</option>
                        <option value="maintenance">Maintenance, SLA &amp; Support Contracts</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="budget"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5 font-sans"
                      >
                        Project Scope / Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] focus:outline-none focus:border-[#C6A66B] text-sm font-sans transition-colors"
                      >
                        <option value="flexible">Flexible / Exploring Solutions</option>
                        <option value="tier-1">&lt; ₹2,50,000 / Starter Scope</option>
                        <option value="tier-2">₹2,50,000 – ₹10,00,000 / Growth Platform</option>
                        <option value="tier-3">₹10,00,000 – ₹25,00,000 / Enterprise System</option>
                        <option value="tier-4">₹25,00,000+ / Mission-Critical Facility</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F1E8] mb-1.5 font-sans"
                    >
                      Project Specifications &amp; Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your operational context, technical requirements, desired timelines, or deployment locations..."
                      className="w-full px-4 py-3 rounded-lg bg-[#141517] border border-[#2B2D31] text-[#F5F1E8] placeholder:text-[#606368] focus:outline-none focus:border-[#C6A66B] text-sm font-sans transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    {error && (
                      <div role="alert" className="mb-3 flex items-start gap-2.5 p-3.5 rounded-lg bg-[#2A1515] border border-[#6B2B2B] text-xs text-[#F0C2C2] font-sans leading-relaxed">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={sending}
                      className="btn-sheen disabled:opacity-70 disabled:cursor-wait w-full inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] active:bg-[#B09054] text-[#080808] font-bold text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md group"
                    >
                      <span>{sending ? 'Sending…' : 'Transmit Inquiry to Engineering'}</span>
                      {sending ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      )}
                    </button>
                    <p className="text-[11px] text-[#858B92] text-center mt-2.5 font-sans">
                      Protected under TLS 1.3 encryption &bull; Standard mutual NDA applies
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Right: Operational Details & Direct Rapid Action (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Operating Hours Card */}
              <div className="p-8 rounded-2xl bg-[#0E0F10] border border-[#232326] space-y-5 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2.5 text-[#C6A66B]">
                  <Clock className="w-5 h-5" />
                  <h3
                    style={{ fontFamily: "'Anton', sans-serif" }}
                    className="text-xl uppercase tracking-tight text-[#F5F1E8]"
                  >
                    OPERATIONAL WINDOWS
                  </h3>
                </div>
                
                <div className="space-y-3 text-sm font-sans">
                  <div className="flex items-center justify-between pb-3 border-b border-[#232326]">
                    <span className="text-[#BFC4C8]">Engineering &amp; Sales:</span>
                    <span className="text-[#F5F1E8] font-medium">Mon–Fri: 9:00 AM – 7:00 PM IST</span>
                  </div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#232326]">
                    <span className="text-[#BFC4C8]">Hardware QA Lab:</span>
                    <span className="text-[#F5F1E8] font-medium">Mon–Sat: 8:00 AM – 8:00 PM IST</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#BFC4C8]">Critical Telemetry SLA:</span>
                    <span className="text-[#C6A66B] font-semibold">24/7/365 Continuous</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#141517] border border-[#252525] flex items-start gap-3 mt-4">
                  <ShieldCheck className="w-5 h-5 text-[#C6A66B] mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-[#BFC4C8] leading-relaxed font-sans">
                    All meetings can be scheduled both physically at our Guna office or remotely via encrypted video conference.
                  </p>
                </div>
              </div>

              {/* Direct WhatsApp Callout in Gold Accent Style */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121214] via-[#101012] to-[#0A0A0C] border border-[#C6A66B]/40 space-y-4 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
                <div className="flex items-center gap-2 text-[#C6A66B]">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs uppercase font-semibold tracking-[0.2em] font-sans">
                    RAPID DIRECT RESPONSE
                  </span>
                </div>
                <h3
                  style={{ fontFamily: "'Anton', sans-serif" }}
                  className="text-2xl sm:text-3xl uppercase tracking-tight text-[#F5F1E8]"
                >
                  NEED IMMEDIATE CONSULTATION?
                </h3>
                <p className="text-xs sm:text-sm text-[#BFC4C8] font-sans leading-relaxed">
                  Connect directly with our engineering triage team via WhatsApp for emergency platform inquiries or rapid project estimation.
                </p>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sheen inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg bg-[#C6A66B] hover:bg-[#D4B07B] text-[#080808] font-bold text-xs uppercase tracking-wider transition-colors font-sans shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Conversation</span>
                </a>
              </div>

            </div>

          </div>

          {/* ======================================================== */}
          {/* 3. INTERACTIVE PRE-SALES FAQS                            */}
          {/* ======================================================== */}
          <div className="mt-20 pt-16 border-t border-[#252525]">
            <div className="max-w-3xl mb-10">
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-[#C6A66B] font-sans select-none mb-2">
                CLARITY BEFORE INQUIRING
              </p>
              <h2
                style={{ fontFamily: "'Anton', sans-serif" }}
                className="text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F1E8]"
              >
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-4 max-w-4xl">
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div
                    key={index}
                    className="rounded-xl bg-[#0E0F10] border border-[#232326] hover:border-[#C6A66B]/40 transition-colors overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A66B] rounded-xl"
                    >
                      <span className="text-sm sm:text-base font-bold text-[#F5F1E8] font-sans">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C6A66B] transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: EASE_OUT }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-5 pt-1 text-sm text-[#BFC4C8] font-sans leading-relaxed border-t border-[#232326]">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
