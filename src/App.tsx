/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsSection } from './components/SkillsSection';
import { FeaturedWork } from './components/FeaturedWork';
import { PhilosophyAndProof } from './components/PhilosophyAndProof';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [scheduleModalOpen, setScheduleModalOpen] = useState(false);

  const handleHireClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSchedule = () => {
    setScheduleModalOpen(true);
  };

  const handleCloseSchedule = () => {
    setScheduleModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-cyan-500/20 selection:text-cyan-900 flex flex-col font-sans">
      {/* 1-Row, 3-Zone Navigation Header */}
      <Navbar onHireClick={handleHireClick} />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1">
        {/* 1. Hero Section (with portrait image & animated typography) */}
        <Hero
          onHireClick={handleHireClick}
          onScheduleClick={handleOpenSchedule}
        />

        {/* 2. Skills & Tech Stack Section (with holographic hands AI image & 3 glowing grid cards) */}
        <SkillsSection />

        {/* 3. Featured Work Section (with laptop mockup image & pakstreeteats.netlify.app) */}
        <FeaturedWork />

        {/* The Hybrid AI + Craft Formula & Attributable Proof */}
        <PhilosophyAndProof />

        {/* 4. Contact / Hire Me Section (with digital handshake image & Payoneer readiness badge) */}
        <ContactSection
          scheduleModalOpen={scheduleModalOpen}
          onOpenSchedule={handleOpenSchedule}
          onCloseSchedule={handleCloseSchedule}
        />
      </main>

      {/* Clean Minimalist Footer */}
      <Footer />
    </div>
  );
}
