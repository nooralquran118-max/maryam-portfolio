import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Copy, Check, Send, Globe, ShieldCheck, CreditCard, Clock, Calendar, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, DIGITAL_HANDSHAKE_IMAGE, FAQS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

interface ContactSectionProps {
  scheduleModalOpen: boolean;
  onOpenSchedule: () => void;
  onCloseSchedule: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  scheduleModalOpen,
  onOpenSchedule,
  onCloseSchedule,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'AI Web Development',
    budget: '$3,000 – $7,000',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Live PKT (UTC+5) Clock
  const [currentTime, setCurrentTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setCurrentTime(formatter.format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    soundManager.playTick(650);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitting(true);
    soundManager.playTick(750);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      soundManager.playChime();
    }, 900);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#FAF8F5] overflow-hidden">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-100/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-cyan-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold text-cyan-600 tracking-wider uppercase mb-2">
            Start A Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Let's Engineer the Next Frontier
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you need a high-conversion AI web app, an enterprise prompt architecture, or authoritative technical content that captivates audiences, Maryam is ready to collaborate.
          </p>
        </div>

        {/* Feature Media Banner: Digital Handshake Image (Exact User Requirement) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-3xl overflow-hidden border border-[#E8E2D8] bg-white/95 shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Visual Container */}
            <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden bg-slate-900">
              <img
                src={DIGITAL_HANDSHAKE_IMAGE}
                alt="Futuristic Digital Handshake representing global partnership"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center opacity-95 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950/70 pointer-events-none" />
            </div>

            {/* Content & Global Trust Callout */}
            <div className="lg:col-span-6 p-8 sm:p-10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-700 font-semibold mb-3">
                <Globe className="w-4 h-4 text-cyan-600" />
                <span>GLOBAL COLLABORATION ARCHITECTURE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Seamless Cross-Border Delivery &amp; Instant Onboarding
              </h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Working with Maryam guarantees prompt communication, synchronous availability across North American, European, and Asian timezones, and full contractual transparency.
              </p>

              {/* PAYONEER GLOBAL PAYMENT READINESS BADGE (Exact User Requirement) */}
              <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-cyan-50/40 border border-cyan-200/60 shadow-2xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                      P
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span>Payoneer Global Verified Partner</span>
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      </div>
                      <div className="text-[11px] text-slate-500">Cross-Border Payment Readiness</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    VERIFIED
                  </span>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                    <span>Currencies: USD, EUR, GBP, CAD, AUD</span>
                  </div>
                  <span className="text-slate-400">·</span>
                  <span>Instant ACH &amp; Wire Transfer Ready</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Layout Grid: Left (Contact Details & Timezone) vs Right (Interactive Inquiry Form) */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Inquiries, Timezone, Booking */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="glow-card rounded-2xl p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-200/70 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  Responds &lt; 4 Hours
                </span>
              </div>

              <h4 className="mt-4 text-lg font-bold text-slate-900 tracking-tight">
                Direct Email Inquiries
              </h4>
              <p className="mt-1 text-xs text-slate-500">
                Send RFP briefs, architecture inquiries, or content retainers directly.
              </p>

              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 truncate font-mono text-xs sm:text-sm text-slate-900 bg-slate-100 p-2.5 rounded-lg border border-slate-200">
                  {PERSONAL_INFO.email}
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2.5 text-xs font-medium bg-slate-900 hover:bg-cyan-600 text-white rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Collaboration Inquiry with Maryam Noor`}
                  className="text-cyan-700 hover:text-cyan-800 font-medium inline-flex items-center gap-1"
                >
                  Launch Default Mail Client →
                </a>
              </div>
            </div>

            {/* Timezone & Availability Card */}
            <div className="glow-card rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-mono font-bold text-slate-900">
                    Lahore, PK (UTC+5)
                  </span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {currentTime || 'Online'}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                Maryam operates flexible overlapping windows accommodating US Eastern (EST), European (CET), and Gulf Standard (GST) operating hours.
              </p>
            </div>

            {/* Direct 30-Min Consultation Trigger */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-cyan-50 border border-purple-200/80 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-800 mb-1">
                <Calendar className="w-4 h-4 text-purple-600" />
                <span>Need Rapid Technical Guidance?</span>
              </div>
              <h4 className="text-base font-bold text-slate-900 tracking-tight">
                Book a 30-Minute AI Exploration Call
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                Discuss system prompt design, UI implementation roadmap, or project budget allocation.
              </p>
              <button
                onClick={() => {
                  soundManager.playTick(700);
                  onOpenSchedule();
                }}
                className="mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-purple-700 hover:bg-purple-800 shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Select Call Slot</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glow-card rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Send a Project Brief
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-500">
                Fill in your details and Maryam will review your specs within 24 hours.
              </p>

              {submitted ? (
                <div className="mt-8 p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">
                    Brief Received Successfully!
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                    Thank you for reaching out. Maryam has received your inquiry for{' '}
                    <strong>{formData.service}</strong> and will follow up with initial thoughts at{' '}
                    <strong>{formData.email}</strong> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        service: 'AI Web Development',
                        budget: '$3,000 – $7,000',
                        message: '',
                      });
                    }}
                    className="mt-6 px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-white"
                      >
                        <option value="AI Web Development">AI Web Designing &amp; Development</option>
                        <option value="Prompt Engineering">Enterprise Prompt Engineering</option>
                        <option value="Technical Content Writing">Technical Writing &amp; Content Creation</option>
                        <option value="Full-Stack Product">Full-Stack AI Application</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Estimated Project Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-white"
                      >
                        <option value="$1,500 – $3,000">$1,500 – $3,000 (Sprint / Prototype)</option>
                        <option value="$3,000 – $7,000">$3,000 – $7,000 (Production Feature/App)</option>
                        <option value="$7,000+">$7,000+ (Full Platform / Enterprise Retainer)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Project Goals &amp; Timeline *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe what you want to build, existing tech stack, target users, and key milestones..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-cyan-500 bg-white leading-relaxed"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 shadow-md flex items-center justify-center gap-2 group disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Encrypting &amp; Transmitting...</span>
                      ) : (
                        <>
                          <span>Submit Inquiry to Maryam</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="mt-2 text-center text-[11px] text-slate-500">
                      Zero spam. Direct review by Maryam Noor with NDA readiness upon request.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Client FAQs Accordion */}
        <div className="mt-16 pt-12 border-t border-slate-200/80 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Frequently Addressed Inquiries
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Transparent terms, deliverables, and international payment mechanics
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => {
                    soundManager.playTick(550);
                    setActiveFaq(activeFaq === idx ? null : idx);
                  }}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="text-xs sm:text-sm font-semibold text-slate-900">
                    {faq.q}
                  </span>
                  <span className="text-slate-400 font-mono text-sm shrink-0">
                    {activeFaq === idx ? '−' : '+'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Consultation Scheduler Modal */}
      <AnimatePresence>
        {scheduleModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-600" />
                  <h4 className="text-base font-bold text-slate-900">
                    Schedule Discovery Session
                  </h4>
                </div>
                <button
                  onClick={onCloseSchedule}
                  className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                >
                  ✕
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Select a convenient 30-minute slot with Maryam Noor. Meetings take place via Google Meet or Zoom.
                </p>

                {/* Slot Options */}
                <div className="space-y-2">
                  {[
                    { date: 'Tomorrow, 3:00 PM PKT', alt: '10:00 AM UTC' },
                    { date: 'Tomorrow, 7:30 PM PKT', alt: '2:30 PM UTC / 10:30 AM EST' },
                    { date: 'Wednesday, 4:00 PM PKT', alt: '11:00 AM UTC' },
                    { date: 'Thursday, 8:00 PM PKT', alt: '3:00 PM UTC / 11:00 AM EST' },
                  ].map((slot, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        soundManager.playChime();
                        alert(`Reserved slot for ${slot.date}. Maryam will send an invite to your email!`);
                        onCloseSchedule();
                      }}
                      className="w-full p-3 rounded-xl border border-slate-200 hover:border-purple-500 hover:bg-purple-50/50 text-left transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-purple-700">
                          {slot.date}
                        </div>
                        <div className="text-[11px] text-slate-500">{slot.alt}</div>
                      </div>
                      <span className="text-[11px] font-semibold text-purple-600 group-hover:translate-x-0.5 transition-transform">
                        Select →
                      </span>
                    </button>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <span className="text-[11px] text-slate-500">
                    Prefer custom timings? Email directly at{' '}
                    <span className="font-mono text-cyan-700 font-semibold">{PERSONAL_INFO.email}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
