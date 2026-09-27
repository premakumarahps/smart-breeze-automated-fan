import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClimateSimulator } from './components/ClimateSimulator';
import { PsychrometricCalc } from './components/PsychrometricCalc';
import { EnergySavingsCalc } from './components/EnergySavingsCalc';
import { HardwareExplorer } from './components/HardwareExplorer';
import { CircuitFirmwareViewer } from './components/CircuitFirmwareViewer';
import { InnovationsShowcase } from './components/InnovationsShowcase';
import { StakeholderMatrix } from './components/StakeholderMatrix';
import { DocumentViewer } from './components/DocumentViewer';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { Sliders, Wind, Cpu, Sparkles, ShieldCheck, FileText, Users, ArrowRight, ArrowLeft } from 'lucide-react';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('simulator');

  const domainTabs = [
    { id: 'simulator', label: 'Climate Simulator', sub: 'Thermodynamics & Radar' },
    { id: 'hardware', label: 'Hardware & CAD', sub: 'Subsystems 1-10 & Photos' },
    { id: 'circuit', label: 'Circuit & Firmware', sub: 'Fritzing & Arduino C++' },
    { id: 'innovations', label: 'Inventions & Peltier', sub: 'The Heat Collector & 9 Designs' },
    { id: 'stakeholders', label: 'Stakeholder Matrix', sub: '2x2 Power-Interest Grid' },
    { id: 'docs', label: 'Report & Slides', sub: '151p Report & 12 Slides' },
    { id: 'team', label: 'Tech Pioneers', sub: '10 Members & 7 Meeting Logs' },
  ];

  const currentTabIndex = domainTabs.findIndex((t) => t.id === activeTab);

  const getPrevTab = () => {
    const idx = (currentTabIndex - 1 + domainTabs.length) % domainTabs.length;
    return domainTabs[idx];
  };

  const getNextTab = () => {
    const idx = (currentTabIndex + 1) % domainTabs.length;
    return domainTabs[idx];
  };

  return (
    <div className="min-h-screen bg-[#0b132b] text-slate-100 flex flex-col selection:bg-teal-500 selection:text-slate-950">
      {/* Auto-Hiding Navbar */}
      <Navbar activeTab={activeTab} onSelectTab={setActiveTab} />

      {/* Hero Section */}
      <Hero onSelectTab={setActiveTab} />

      {/* Interactive Domain Navigation Switcher */}
      <section className="py-4 bg-slate-950/90 border-y border-slate-800/80 sticky top-0 z-40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {domainTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-2.5 rounded-2xl text-left transition-all flex flex-col justify-between hover-lift ${
                    isActive
                      ? 'bg-gradient-to-br from-teal-500/25 to-cyan-500/20 border-2 border-teal-400 text-white shadow-lg'
                      : 'bg-slate-900/60 hover:bg-slate-800/60 border border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="text-xs font-bold truncate block">{tab.label}</span>
                  <span className="text-[10px] text-teal-400/80 truncate block mt-0.5">{tab.sub}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Dynamic Workspace Content */}
      <main className="flex-1">
        {activeTab === 'simulator' && (
          <div className="space-y-4 animate-fade-in">
            <ClimateSimulator />
            <PsychrometricCalc />
            <EnergySavingsCalc />
          </div>
        )}

        {activeTab === 'hardware' && (
          <div className="animate-fade-in">
            <HardwareExplorer />
          </div>
        )}

        {activeTab === 'circuit' && (
          <div className="animate-fade-in">
            <CircuitFirmwareViewer />
          </div>
        )}

        {activeTab === 'innovations' && (
          <div className="animate-fade-in">
            <InnovationsShowcase />
          </div>
        )}

        {activeTab === 'stakeholders' && (
          <div className="animate-fade-in">
            <StakeholderMatrix />
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="animate-fade-in">
            <DocumentViewer />
          </div>
        )}

        {activeTab === 'team' && (
          <div className="animate-fade-in">
            <TeamSection />
          </div>
        )}

        {/* Quick Inter-Domain Footer Switcher */}
        <section className="py-6 bg-slate-950 border-t border-slate-800/80">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => setActiveTab(getPrevTab().id)}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white px-4 py-2 rounded-xl glass-panel border border-slate-800 hover-lift"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-teal-400" />
              <span>Previous: {getPrevTab().label}</span>
            </button>

            <p className="text-[11px] text-slate-400 text-center font-mono">
              Sadun Premakumara (210494D) • Group 4 Tech Pioneers • University of Moratuwa
            </p>

            <button
              onClick={() => setActiveTab(getNextTab().id)}
              className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white px-4 py-2 rounded-xl glass-panel border border-slate-800 hover-lift"
            >
              <span>Next: {getNextTab().label}</span>
              <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
            </button>
          </div>
        </section>
      </main>

      {/* Comprehensive Academic Footer */}
      <Footer />
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
};

export default App;
