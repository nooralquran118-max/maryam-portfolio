import React, { useState } from 'react';
import { ArrowUp, Mail, Copy, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundManager } from '../utils/sound';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const scrollToTop = () => {
    soundManager.playTick(600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    soundManager.playTick(650);
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <footer className="border-t border-[#E8E2D8] bg-[#F3EFE6]/90 py-12 text-slate-700 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Mission */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-bold text-slate-900 text-sm">Maryam Noor</span>
            <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
            <span>AI Web Developer &amp; Content Creator</span>
            <span className="hidden sm:inline text-slate-300" aria-hidden="true">·</span>
            <span className="text-cyan-700 font-medium">Creator of pakstreeteats.netlify.app</span>
          </div>

          {/* Socials & Actions */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://pakstreeteats.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 font-medium transition-colors"
            >
              Pak Street Eats
            </a>
            
            {/* Direct Email Link with Copy Helper in Footer */}
            <div className="flex items-center gap-1.5 bg-white/90 hover:bg-white px-2.5 py-1 rounded-lg border border-[#E8E2D8] transition-colors shadow-2xs">
              <Mail className="w-3.5 h-3.5 text-cyan-600" />
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-slate-800 hover:text-cyan-600 font-medium transition-colors"
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={handleCopyEmail}
                title="Copy email to clipboard"
                className="p-1 text-slate-400 hover:text-cyan-600 transition-colors ml-1"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white hover:bg-white/90 text-slate-700 border border-[#E8E2D8] transition-colors flex items-center gap-1 font-medium shadow-2xs"
              title="Return to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Quiet Copyright & Payoneer Verified Line */}
        <div className="mt-8 pt-6 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Maryam Noor. Crafted with React 19, Tailwind CSS &amp; Generative Intelligence.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Payoneer Cross-Border Payments Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
