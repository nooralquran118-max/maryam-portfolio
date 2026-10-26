import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Copy, Check, Sparkles, Smartphone, Laptop, Zap, ArrowUpRight, Flame, Compass, Utensils } from 'lucide-react';
import { FEATURED_PROJECTS, LAPTOP_MOCKUP_IMAGE } from '../data/portfolioData';
import { Project } from '../types';
import { soundManager } from '../utils/sound';

export const FeaturedWork: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [previewFoodIndex, setPreviewFoodIndex] = useState(0);

  const primaryProject = FEATURED_PROJECTS.find((p) => p.isPrimary) || FEATURED_PROJECTS[0];
  const secondaryProjects = FEATURED_PROJECTS.filter((p) => !p.isPrimary);

  const handleCopyLink = (url: string) => {
    soundManager.playTick(650);
    navigator.clipboard.writeText(url);
    setCopiedUrl(true);
    setTimeout(() => setCopiedUrl(false), 2400);
  };

  // Sample culinary interactive showcase items for Pak Street Eats preview
  const streetEatsMenu = [
    {
      name: 'Nihari Burger',
      origin: 'Lahore & Karachi Fusion',
      spice: 'Mild-Medium',
      lore: 'Slow-cooked braised beef shank infused with 14 aromatic whole spices, served on a toasted artisanal brioche with ginger slivers and fresh lime.',
      tags: ['Slow Braised', 'Signature', 'Crowd Favorite'],
    },
    {
      name: 'Seekh Kabab Platter',
      origin: 'Peshawar & Rawalpindi',
      spice: 'Spicy',
      lore: 'Charcoal-grilled minced beef skewers blended with coriander seeds, crushed chili, and mint raita served on freshly baked tandoori naan.',
      tags: ['Charcoal Fired', 'High Protein', 'Gluten Alert'],
    },
    {
      name: 'Biryani Bliss Bowl',
      origin: 'Sindhi Regional Legacy',
      spice: 'Bold & Aromatic',
      lore: 'Layered fragrant basmati rice cooked with saffron strands, tender marinated meat, dried plums (aloo bukhara), and caramelized onions.',
      tags: ['Royal Saffron', 'Cultural Icon', 'Chef Pick'],
    },
    {
      name: 'Dahi Bhalla Street Chaat',
      origin: 'Old Anarkali, Lahore',
      spice: 'Sweet & Tangy',
      lore: 'Soft lentil dumplings drenched in whipped yogurt, tamarind reduction, green herb chutney, and toasted cumin sprinkle.',
      tags: ['Vegetarian', 'Cooling', 'Street Staple'],
    },
  ];

  return (
    <section id="featured-work" className="py-20 md:py-28 relative bg-[#F3EFE6]/80 overflow-hidden">
      {/* Background Subtle Accent Grids */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold text-cyan-600 tracking-wider uppercase mb-2">
            Selected Works &amp; Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Featured Web Projects &amp; Live Deployments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every application engineered by Maryam Noor prioritizes micro-interaction responsiveness, clean accessibility, and frictionless user conversion.
          </p>
        </div>

        {/* PRIMARY SPOTLIGHT: Pak Street Eats Showcase (Exact User Requirement) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 rounded-3xl bg-white/95 border border-[#E8E2D8] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Content / Case Study */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono mb-4">
                  <span className="text-cyan-700 font-bold bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200/60">
                    FLAGSHIP PROJECT
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Live Production</span>
                  <span aria-hidden="true">·</span>
                  <span>Netlify CDN</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {primaryProject.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  {primaryProject.tagline}
                </p>

                <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {primaryProject.description}
                </p>

                {/* Key Project Highlights */}
                <div className="mt-6 space-y-2.5">
                  {primaryProject.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <Sparkles className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Tags (No pill sandwich, clean unboxed with border) */}
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {primaryProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono text-slate-700 bg-slate-100/90 px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions & Metrics */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {primaryProject.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60">
                      <div className="text-lg font-bold font-mono text-slate-900">{m.value}</div>
                      <div className="text-[11px] text-slate-500">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {/* Live Link Button */}
                  <a
                    href="https://pakstreeteats.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playTick(800)}
                    className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-slate-900 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 rounded-xl shadow-xs transition-all duration-300 group"
                  >
                    <span>Visit pakstreeteats.netlify.app</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  {/* Copy Link Button */}
                  <button
                    onClick={() => handleCopyLink('https://pakstreeteats.netlify.app')}
                    className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-semibold text-slate-700 hover:text-cyan-600 bg-slate-100 hover:bg-slate-200/80 rounded-xl transition-colors"
                    title="Copy live URL"
                  >
                    {copiedUrl ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copiedUrl ? 'Copied!' : 'Copy Link'}</span>
                  </button>

                  {/* Interactive Culinary Preview Launcher */}
                  <button
                    onClick={() => {
                      soundManager.playTick(700);
                      setSelectedProject(primaryProject);
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-3 text-xs font-semibold text-cyan-700 bg-cyan-50 hover:bg-cyan-100/80 rounded-xl transition-colors"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Interactive Explorer</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Media: Laptop Mockup Image with Smooth Scroll Reveal */}
            <div className="lg:col-span-7 bg-gradient-to-br from-slate-100 via-slate-50 to-cyan-50/30 p-6 sm:p-8 lg:p-10 flex items-center justify-center">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 group">
                <img
                  src={LAPTOP_MOCKUP_IMAGE}
                  alt="Laptop mockup showcasing Pak Street Eats live web project"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Subtle Ambient Glow Border */}
                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none" />

                {/* Interactive floating badge */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-mono font-medium px-3 py-1.5 rounded-lg border border-white/20 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>pakstreeteats.netlify.app</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Featured Projects Grid */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              More AI Systems &amp; Technical Platforms
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Engineered with Gemini SDK, Next.js &amp; Tailwind
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="glow-card rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Image container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono font-medium text-slate-700 border border-slate-200">
                      {project.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="text-xs font-mono text-cyan-600 font-semibold mb-1">
                      {project.displayUrl}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 tracking-tight">
                      {project.title}
                    </h4>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer metrics & inspect */}
                <div className="p-6 pt-0 mt-auto">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="text-xs font-mono text-slate-500">
                      {project.metrics[0].label}: <span className="font-bold text-slate-800">{project.metrics[0].value}</span>
                    </div>
                    <button
                      onClick={() => {
                        soundManager.playTick(600);
                        setSelectedProject(project);
                      }}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-700 hover:text-cyan-800"
                    >
                      <span>Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal: Interactive Project Explorer / Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-mono text-cyan-600 font-semibold uppercase">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">{selectedProject.tagline}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg text-sm"
                  >
                    ✕
                  </button>
                </div>

                {/* Modal Content */}
                <div className="mt-4 flex-1 overflow-y-auto space-y-6 pr-1">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Deep-Dive Architectural Context
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>
                  </div>

                  {/* Special Interactive Culinary Dish Switcher if Pak Street Eats */}
                  {selectedProject.id === 'pak-street-eats' && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <Flame className="w-3.5 h-3.5 text-amber-500" />
                          Interactive Menu Explorer (Simulated Preview)
                        </span>
                        <span className="text-[11px] font-mono text-slate-500">
                          Dish {previewFoodIndex + 1} of {streetEatsMenu.length}
                        </span>
                      </div>

                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {streetEatsMenu.map((item, idx) => (
                          <button
                            key={item.name}
                            onClick={() => setPreviewFoodIndex(idx)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                              previewFoodIndex === idx
                                ? 'bg-slate-900 text-white font-semibold'
                                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>

                      <div className="mt-3 p-3.5 rounded-lg bg-white border border-slate-200/80">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-slate-900">
                            {streetEatsMenu[previewFoodIndex].name}
                          </span>
                          <span className="font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px]">
                            {streetEatsMenu[previewFoodIndex].origin} · {streetEatsMenu[previewFoodIndex].spice}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                          {streetEatsMenu[previewFoodIndex].lore}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Metrics Grid */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Validated Benchmarks
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {selectedProject.metrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                          <div className="text-lg font-bold font-mono text-slate-900">{m.value}</div>
                          <div className="text-[11px] text-slate-500">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Engineering Pillars */}
                  <div>
                    <h4 className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Engineering Implementation Highlights
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((h, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-cyan-600 font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  {selectedProject.liveUrl ? (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-cyan-600 rounded-lg shadow-xs"
                    >
                      <span>Open Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400">Internal Enterprise Suite</span>
                  )}

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
                  >
                    Close Case Study
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
