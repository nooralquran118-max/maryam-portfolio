import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Check, Quote, ArrowRight, Play, RefreshCw, Cpu, Layers, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const PhilosophyAndProof: React.FC = () => {
  const [selectedPromptIdea, setSelectedPromptIdea] = useState(
    'Culinary Street Discovery platform with regional recipe recommender'
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedOutput, setGeneratedOutput] = useState<string | null>(null);

  const promptPresets = [
    'Culinary Street Discovery platform with regional recipe recommender',
    'Medical AI Diagnostic dashboard with real-time vitals streaming',
    'Autonomous Developer Documentation writer with live code sandbox',
  ];

  const handleRunSimulation = (idea: string) => {
    soundManager.playTick(700);
    setIsGenerating(true);
    setGeneratedOutput(null);

    setTimeout(() => {
      setIsGenerating(false);
      soundManager.playChime();
      if (idea.includes('Culinary')) {
        setGeneratedOutput(`// ARCHITECTURAL BLUEPRINT (Authored by Maryam Noor)
Project: Pak Street Eats Next-Gen Engine
Target: pakstreeteats.netlify.app

1. FRONTEND LAYER:
   • Framework: React 19 + Tailwind v4 + Vite
   • State: Zero-overhead localized context with reactive URL filters
   • Render Budget: < 0.6s FCP on 4G mobile

2. INTELLIGENCE TOPOLOGY:
   • Model: Gemini 2.5 Flash with search grounding
   • Schema: Strict JSON output for ingredients, spice level & cultural history
   • Prompt Constraint: "Prohibit synthetic culinary hallucinations; ground in verified Pakistani regional recipes."

3. CONVERSION METRIC:
   • Estimated Dwell Time: +45% via sensory descriptive copy
   • Mobile Lighthouse: 99/100`);
      } else if (idea.includes('Medical')) {
        setGeneratedOutput(`// ARCHITECTURAL BLUEPRINT (Authored by Maryam Noor)
Project: PulseCare AI Monitor

1. FRONTEND LAYER:
   • Canvas: High-frequency 60FPS ECG waveform visualizer
   • Color Palette: Off-white canvas, surgical cyan (#06B6D4) telemetry indicators
   • Accessibility: Strict WCAG 2.1 AAA high-contrast alarm states

2. INTELLIGENCE TOPOLOGY:
   • Model: Claude 3.5 Sonnet agent with medical schema validation
   • Latency Ceiling: < 80ms anomaly flagging via Web Worker streaming

3. STATUS: Production-ready contract verified.`);
      } else {
        setGeneratedOutput(`// ARCHITECTURAL BLUEPRINT (Authored by Maryam Noor)
Project: DocuGenie Technical Suite

1. CONTENT & ARCHITECTURE:
   • Engine: MDX + Syntax Highlighter + Edge CDN
   • Tone of Voice: Authoritative, concise, human-first developer advocacy
   • Prompt Architecture: Multi-shot extraction producing runnable TypeScript snippets

2. ENGAGEMENT METRICS:
   • Target Completion Rate: 84%
   • Payoneer-integrated subscription billing ready.`);
      }
    }, 600);
  };

  return (
    <section id="philosophy" className="py-20 md:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono font-semibold text-purple-600 tracking-wider uppercase mb-2">
            The Hybrid Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight text-balance">
            The AI + Engineering Craft Formula
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Most developers write code without deep prompt understanding. Most writers write words without knowing React. Maryam Noor unites both worlds into a unified competitive moat.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-7 rounded-2xl bg-white/90 border border-[#E8E2D8] shadow-xs hover:border-cyan-400 transition-colors">
            <div className="text-xs font-mono font-bold text-cyan-600 mb-2">01. STEP ONE</div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Cognitive Architecture &amp; Prompts
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We define strict JSON schemas, evaluate edge cases, and craft prompt contracts that eliminate AI hallucinations before touching UI components.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
              Zero Hallucinations · Structured Output
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-white/90 border border-[#E8E2D8] shadow-xs hover:border-purple-400 transition-colors">
            <div className="text-xs font-mono font-bold text-purple-600 mb-2">02. STEP TWO</div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              Fluid 60FPS Frontend Engineering
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We translate data into pristine, responsive React interfaces with tactile micro-interactions, clean light-mode surfaces, and sub-second web vitals.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
              React 19 · Tailwind v4 · Motion
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-white/90 border border-[#E8E2D8] shadow-xs hover:border-cyan-400 transition-colors">
            <div className="text-xs font-mono font-bold text-cyan-600 mb-2">03. STEP THREE</div>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              High-Retention Storytelling &amp; Copy
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              We wrap the product in authoritative, compelling technical copy and documentation that hooks attention, explains complexity, and drives conversions.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500">
              350k+ Readers · High Conversion Dwell
            </div>
          </div>
        </div>

        {/* Interactive Prompt & Architecture Sandbox */}
        <div className="mt-16 rounded-3xl bg-slate-900 text-white p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="max-w-2xl mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold mb-1">
              <Terminal className="w-4 h-4" />
              <span>LIVE INTERACTION LAB</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Simulate an AI Architecture Specification
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              Select or test a concept to see how Maryam structures an enterprise blueprint in real-time.
            </p>
          </div>

          {/* Quick preset selector buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            {promptPresets.map((preset) => (
              <button
                key={preset}
                onClick={() => {
                  setSelectedPromptIdea(preset);
                  handleRunSimulation(preset);
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors text-left ${
                  selectedPromptIdea === preset
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>

          {/* Sandbox Terminal Output */}
          <div className="rounded-xl bg-slate-950 p-4 border border-slate-800 font-mono text-xs text-cyan-300 min-h-[160px] overflow-x-auto relative">
            {isGenerating ? (
              <div className="flex items-center gap-2 text-slate-400 py-6">
                <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                <span>Orchestrating system schemas and frontend parameters...</span>
              </div>
            ) : generatedOutput ? (
              <pre className="whitespace-pre-wrap leading-relaxed">{generatedOutput}</pre>
            ) : (
              <div className="py-6 text-slate-400 flex items-center justify-between">
                <span>Click any preset above or press "Synthesize Architecture" to run blueprint simulation.</span>
                <button
                  onClick={() => handleRunSimulation(selectedPromptIdea)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Synthesize</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Attributable Client Testimonials & Social Proof */}
        <div className="mt-20 pt-14 border-t border-[#E8E2D8]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-mono font-semibold text-cyan-600 uppercase tracking-wider mb-2">
              Client &amp; Collaborator Endorsements
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Validated Across High-Growth Teams
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-white/90 border border-[#E8E2D8] shadow-xs flex flex-col justify-between hover:border-cyan-400 transition-colors"
              >
                <div>
                  <Quote className="w-6 h-6 text-cyan-500/50 mb-3" />
                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{t.author}</h4>
                    <p className="text-[11px] text-slate-500">
                      {t.role} · {t.company}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200/50">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
