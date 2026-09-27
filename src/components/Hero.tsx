import React from 'react';
import { Wind, Sliders, ShieldCheck, Zap, Droplets, Radar, ArrowRight, FileText } from 'lucide-react';
import { PROJECT_METADATA } from '../core/fanData';

interface HeroProps {
  onSelectTab: (tabId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTab }) => {
  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Background Gradient & Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-teal-500/15 via-cyan-500/20 to-emerald-500/15 blur-3xl pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        {/* Academic Course & Department Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-teal-500/30 text-xs font-medium text-teal-300 shadow-sm animate-float">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          <span>{PROJECT_METADATA.module}</span>
          <span className="text-slate-500">•</span>
          <span>{PROJECT_METADATA.department}</span>
        </div>

        {/* Main Title with Aerodynamic Gradient */}
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight sm:leading-none">
          SMART-BREEZE
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-emerald-400 text-2xl sm:text-4xl mt-2 font-extrabold">
            Automated Evaporative Fan &amp; Humidity Regulator
          </span>
        </h1>

        {/* Team Leader Credential Badge with Real Portrait */}
        <div className="flex justify-center pt-1">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl glass-panel border border-teal-500/30 shadow-lg hover:border-teal-400/60 transition-all">
            <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-teal-400/80 shrink-0 shadow-md">
              <img
                src="/members/210494D_PREMAKUMARA_HPS.png"
                alt="Sadun Premakumara"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-white">Sadun Premakumara</span>
                <span className="badge-teal text-[10px] font-mono px-2 py-0.2 rounded-md font-bold">
                  210494D
                </span>
              </div>
              <p className="text-[11px] text-teal-300 font-medium">
                Project Team Leader &amp; Systems Architect • Group 4 Tech Pioneers
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Subtitle */}
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
          An eco-friendly climate regulation appliance solving the tropical cooling dilemma in Sri Lanka.
          Replacing dry, skin-parching air with a gentle humidified breeze via vertical capillary cotton wicks,
          autonomous ultrasonic sonar presence tracking, and an Arduino Uno microcontroller running on just{' '}
          <strong className="text-teal-300 font-semibold">18 Watts</strong>.
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onSelectTab('simulator')}
            className="btn-primary px-6 py-3 text-sm flex items-center gap-2 hover-lift"
          >
            <Sliders className="w-4 h-4" />
            <span>Launch Climate Simulator</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectTab('docs')}
            className="px-6 py-3 rounded-xl text-sm font-semibold glass-panel text-white hover:bg-slate-800/80 transition-all flex items-center gap-2 border border-slate-700 hover:border-teal-500/40"
          >
            <FileText className="w-4 h-4 text-teal-400" />
            <span>Read 151-Page Report &amp; Slides</span>
          </button>
        </div>

        {/* High-Impact Engineering Key Metric Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto pt-6">
          <div className="glass-panel rounded-2xl p-4 text-center border border-teal-500/20 hover-lift">
            <div className="flex items-center justify-center gap-1.5 text-teal-400 mb-1">
              <Zap className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Power Draw</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">18W</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Saves &gt;98% vs 1,500W AC</p>
          </div>

          <div className="glass-panel rounded-2xl p-4 text-center border border-cyan-500/20 hover-lift">
            <div className="flex items-center justify-center gap-1.5 text-cyan-400 mb-1">
              <Radar className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Sonar Range</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">90 cm</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Autonomous Presence Detect</p>
          </div>

          <div className="glass-panel rounded-2xl p-4 text-center border border-emerald-500/20 hover-lift">
            <div className="flex items-center justify-center gap-1.5 text-emerald-400 mb-1">
              <Droplets className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Target Comfort</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">45% RH</div>
            <p className="text-[11px] text-slate-400 mt-0.5">Stops Dry Skin &amp; Eye Strain</p>
          </div>

          <div className="glass-panel rounded-2xl p-4 text-center border border-amber-500/20 hover-lift">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Prototype BOM</span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-white">Rs. 7,265</div>
            <p className="text-[11px] text-slate-400 mt-0.5">&lt; $25 USD Direct Build Cost</p>
          </div>
        </div>
      </div>
    </section>
  );
};
