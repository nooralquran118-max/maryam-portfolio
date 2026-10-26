import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Copy, Check, Sparkles, Calendar, Terminal } from 'lucide-react';
import { PERSONAL_INFO, PORTRAIT_IMAGE } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

interface HeroProps {
  onHireClick: () => void;
  onScheduleClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onHireClick, onScheduleClick }) => {
  const [copied, setCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCopyEmail = () => {
    soundManager.playTick(600);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToWorks = () => {
    soundManager.playTick(500);
    const element = document.getElementById('featured-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-grid-subtle">
      {/* Soft Ambient Light Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-tr from-cyan-400/15 via-purple-300/15 to-transparent blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-200/20 blur-2xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen Grid (Left: Typography & CTAs, Right: Portrait Media Container) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Clean Unboxed Editorial Kicker & Live Availability */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-slate-600 font-medium mb-6">
              <span className="inline-flex items-center gap-1.5 text-cyan-700 font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-cyan-500 ring-4 ring-cyan-100" />
                Available Q4 for Global Projects
              </span>
              <span className="text-slate-300 font-light" aria-hidden="true">·</span>
              <span>Web Development & AI Architecture</span>
              <span className="text-slate-300 font-light" aria-hidden="true">·</span>
              <span>Lahore & Remote</span>
            </div>

            {/* Big Bold Animated Typography (Exact User Requirement) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] text-balance">
              Hi, I'm <span className="bg-gradient-to-r from-slate-950 via-slate-800 to-slate-900 bg-clip-text text-transparent">Maryam Noor</span> —{' '}
              <span className="bg-gradient-to-r from-cyan-600 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
                AI Web Developer
              </span>{' '}
              &amp;{' '}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Content Creator
              </span>
            </h1>

            {/* Lead Narrative Body */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.tagline}
            </p>

            {/* Key Service Specializations (Clean Unboxed Badges) */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-slate-700">
              <span className="inline-flex items-center gap-1 text-cyan-700 font-medium bg-cyan-50/80 px-2.5 py-1 rounded-md border border-cyan-200/50">
                <Terminal className="w-3 h-3 text-cyan-600" /> Generative Web Apps
              </span>
              <span className="inline-flex items-center gap-1 text-purple-700 font-medium bg-purple-50/80 px-2.5 py-1 rounded-md border border-purple-200/50">
                <Sparkles className="w-3 h-3 text-purple-600" /> Multi-Agent Prompt Pipelines
              </span>
              <span className="inline-flex items-center gap-1 text-slate-800 font-medium bg-slate-100/80 px-2.5 py-1 rounded-md border border-slate-200/50">
                Pak Street Eats Creator
              </span>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  soundManager.playTick(700);
                  onHireClick();
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 rounded-xl shadow-md hover:shadow-cyan-500/20 transition-all duration-300 group"
              >
                <span>Hire Maryam</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToWorks}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 hover:text-cyan-700 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs transition-colors"
              >
                <span>Explore Featured Work</span>
                <ArrowDown className="w-4 h-4 text-slate-400 group-hover:text-cyan-600" />
              </button>

              <button
                onClick={() => {
                  soundManager.playTick(650);
                  onScheduleClick();
                }}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-sm font-medium text-purple-700 hover:text-purple-900 bg-purple-50/70 hover:bg-purple-100/70 border border-purple-200/60 rounded-xl transition-colors"
              >
                <Calendar className="w-4 h-4 text-purple-600" />
                <span>Book 30-Min Call</span>
              </button>
            </div>

            {/* One-Click Email Copy Trigger */}
            <div className="mt-8 pt-6 border-t border-[#E8E2D8] flex items-center gap-3">
              <span className="text-xs text-slate-600 font-medium">Direct Inquiries:</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-800 hover:text-cyan-600 bg-white/90 hover:bg-white px-3 py-1.5 rounded-lg border border-[#E8E2D8] transition-colors group shadow-2xs"
                title="Click to copy email address"
              >
                <span>{PERSONAL_INFO.email}</span>
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-600" />
                )}
              </button>
              {copied && <span className="text-xs text-emerald-600 font-medium animate-fade-in">Copied to clipboard!</span>}
            </div>
          </motion.div>

          {/* Right Column: Professional Portrait Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Accent Aura */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-400/25 via-purple-400/20 to-transparent rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />

            {/* Frame Container */}
            <div className="relative rounded-2xl overflow-hidden bg-white p-2 shadow-xl ring-1 ring-slate-200/80">
              <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                {/* Fallback container */}
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 via-cyan-50 to-purple-50 text-slate-400">
                    <span className="text-sm font-medium">Loading portrait...</span>
                  </div>
                )}
                <img
                  src={PORTRAIT_IMAGE}
                  alt="Maryam Noor — Professional Portrait AI Web Developer & Content Creator"
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle Modern Scrim & Corner Accent */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Overlay Pill-Free Card Info */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-white/90 backdrop-blur-md border border-white/60 shadow-xs flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900">Maryam Noor</p>
                    <p className="text-[11px] text-slate-500">AI Frontend &amp; System Prompts</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[10px] font-mono font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200/50">
                      LIVE · 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Quantitative Proof Row (Placed strictly below split per constitution) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 pt-10 border-t border-[#E8E2D8] grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/85 border border-[#E8E2D8] shadow-2xs hover:border-cyan-400 transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono tracking-tight tabular-nums bg-gradient-to-r from-slate-950 to-slate-800 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
