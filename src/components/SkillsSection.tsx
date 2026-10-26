import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layout, Cpu, PenTool, CheckCircle2, Code2, ChevronRight, Sparkles, SlidersHorizontal, Eye } from 'lucide-react';
import { SKILL_PILLARS, TECH_TOOLS, HOLOGRAPHIC_HANDS_IMAGE } from '../data/portfolioData';
import { SkillPillar } from '../types';
import { soundManager } from '../utils/sound';

export const SkillsSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<SkillPillar>(SKILL_PILLARS[0]);
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'ai' | 'design' | 'workflow'>('all');
  const [inspectModalOpen, setInspectModalOpen] = useState(false);

  const filteredTools = activeCategory === 'all'
    ? TECH_TOOLS
    : TECH_TOOLS.filter((t) => t.category === activeCategory);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Layout':
        return <Layout className="w-5 h-5" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5" />;
      case 'PenTool':
        return <PenTool className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 relative bg-[#FAF8F5] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100/30 blur-3xl -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-100/30 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold text-cyan-600 tracking-wider uppercase mb-2">
            Engineered Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            Skills &amp; Futuristic Tech Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Unifying generative multi-agent systems, human-centered UI design, and high-impact technical prose to build intelligent, conversion-driven web applications.
          </p>
        </div>

        {/* Feature Spotlight: Holographic Hands AI Media Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative rounded-2xl overflow-hidden border border-cyan-500/20 bg-gradient-to-r from-slate-900 to-slate-950 text-white shadow-xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-10 z-10">
              <div className="text-xs font-mono text-cyan-400 font-semibold mb-2">
                HOLOGRAPHIC COGNITIVE ARCHITECTURE
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Where Intelligence Meets Fluid Digital Craft
              </h3>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Maryam designs interfaces that translate abstract AI reasoning into tangible, tactile, and frictionless user flows. Every interaction is mapped for clarity, speed, and trust.
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Multimodal RAG
                </span>
                <span className="px-2.5 py-1 rounded-md bg-purple-950/80 text-purple-300 border border-purple-500/30">
                  Structured Schemas
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  Fluid 60FPS UI
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
              <img
                src={HOLOGRAPHIC_HANDS_IMAGE}
                alt="Futuristic Holographic Hands interacting with AI nodes"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* 3 Core Interactive Grid Cards with Glowing Hover Effects */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Three Core Disciplines
            </h3>
            <span className="text-xs text-slate-500 hidden sm:inline">
              Click any card to inspect sample production artifacts
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {SKILL_PILLARS.map((pillar) => {
              const isSelected = selectedPillar.id === pillar.id;
              const isCyan = pillar.glowColor === 'cyan';

              return (
                <motion.div
                  key={pillar.id}
                  whileHover={{ y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => {
                    soundManager.playTick(720);
                    setSelectedPillar(pillar);
                    setInspectModalOpen(true);
                  }}
                  className={`glow-card rounded-2xl p-6 sm:p-7 cursor-pointer flex flex-col justify-between transition-all duration-300 ${
                    isSelected ? 'ring-2 ring-cyan-500 shadow-md' : ''
                  }`}
                >
                  <div>
                    {/* Header Icon + Role */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isCyan
                            ? 'bg-cyan-50 text-cyan-600 border border-cyan-200/80'
                            : 'bg-purple-50 text-purple-600 border border-purple-200/80'
                        }`}
                      >
                        {getIcon(pillar.iconName)}
                      </div>
                      <span className="text-xs font-mono font-medium text-slate-600 flex items-center gap-1 group-hover:text-cyan-600">
                        Inspect <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h4 className="mt-5 text-xl font-bold text-slate-900 tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-slate-600">
                      {pillar.role}
                    </p>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>

                    {/* Core Capabilities List */}
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      {pillar.coreCapabilities.map((cap, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                              isCyan ? 'text-cyan-500' : 'text-purple-500'
                            }`}
                          />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Footer Metric */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                    <span className="truncate">{pillar.metrics}</span>
                    <Eye className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-2" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Interactive Deep-Dive Modal / Drawer */}
        <AnimatePresence>
          {inspectModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 16 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden max-h-[90vh] flex flex-col"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600">
                      {getIcon(selectedPillar.iconName)}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">
                        {selectedPillar.title} — Artifact Preview
                      </h4>
                      <p className="text-xs text-slate-500">{selectedPillar.sampleArtifactTitle}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setInspectModalOpen(false)}
                    className="text-slate-400 hover:text-slate-700 text-sm font-semibold p-2 rounded-lg hover:bg-slate-100"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-4 flex-1 overflow-y-auto">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-2">
                    <span>Artifact Type: {selectedPillar.sampleArtifactType.toUpperCase()}</span>
                    <span>Production Grade</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-900 text-cyan-300 font-mono text-xs overflow-x-auto leading-relaxed border border-slate-800">
                    <code>{selectedPillar.sampleArtifactContent}</code>
                  </pre>
                  <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                    This sample illustrates Maryam's disciplined standards: zero hallucinations, strict contract validation, and clean architectural separation.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex justify-end gap-3">
                  <button
                    onClick={() => setInspectModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
                  >
                    Close Preview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Tech Stack Explorer & Filter Tabs */}
        <div className="mt-16 pt-12 border-t border-[#E8E2D8]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Tools, Models &amp; Frameworks
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Battle-tested tools leveraged across client production releases
              </p>
            </div>

            {/* Interactive Segmented Filter Controls */}
            <div className="flex items-center gap-1 p-1 bg-[#EDE8DE] rounded-xl overflow-x-auto">
              {[
                { id: 'all', label: 'All Tools' },
                { id: 'frontend', label: 'Frontend & UI' },
                { id: 'ai', label: 'AI & LLMs' },
                { id: 'workflow', label: 'Content & Flow' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    soundManager.playTick(600);
                    setActiveCategory(tab.id as typeof activeCategory);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                    activeCategory === tab.id
                      ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                      : 'text-slate-700 hover:text-slate-950'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tools */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/85 border border-[#E8E2D8] hover:border-cyan-400 hover:shadow-xs transition-all duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {tool.name}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded">
                    {tool.level}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-slate-500 leading-snug">
                  {tool.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
