import React, { useState, useEffect } from 'react';
import { Wind, Sliders, Cpu, Users, FileText, Download, ShieldCheck, Sparkles } from 'lucide-react';
import { PROJECT_METADATA } from '../core/fanData';

interface NavbarProps {
  activeTab: string;
  onSelectTab: (tabId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // scrolling down
        } else {
          setIsVisible(true); // scrolling up
        }
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'simulator', label: 'Climate Simulator', icon: Sliders },
    { id: 'hardware', label: 'Hardware & CAD', icon: Wind },
    { id: 'circuit', label: 'Circuit & Firmware', icon: Cpu },
    { id: 'innovations', label: 'Inventions', icon: Sparkles },
    { id: 'stakeholders', label: 'Stakeholders', icon: ShieldCheck },
    { id: 'docs', label: 'Report & Slides', icon: FileText },
    { id: 'team', label: 'Tech Pioneers', icon: Users },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-3">
        <div className="glass-panel rounded-2xl px-4 py-2.5 flex items-center justify-between shadow-xl border border-teal-500/20">
          {/* Logo & Brand Identity */}
          <div
            onClick={() => onSelectTab('simulator')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-white p-1 shadow-md ring-1 ring-teal-400/40 group-hover:scale-105 transition-transform">
              <img
                src="/images/smart_breeze_logo.jpg"
                alt="Smart-Breeze Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-white tracking-tight group-hover:text-teal-400 transition-colors">
                  SMART-BREEZE
                </span>
                <span className="badge-teal text-[10px] font-bold px-2 py-0.5 rounded-full hidden sm:inline-block">
                  MT1940
                </span>
              </div>
              <p className="text-[10px] text-teal-300/80 font-mono tracking-wider hidden sm:block">
                University of Moratuwa • Group 4
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-400/40 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-teal-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button: Download Report PDF */}
          <div className="flex items-center gap-2">
            <a
              href="/docs/Smart_Breeze_Project_Report.pdf"
              download="Smart_Breeze_Project_Report.pdf"
              className="btn-primary text-xs px-3.5 py-1.5 flex items-center gap-1.5 hover-lift"
              title="Download Full Project Report PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">PDF Report</span>
            </a>
          </div>
        </div>

        {/* Mobile Navigation Bar */}
        <div className="lg:hidden flex items-center justify-between gap-1 overflow-x-auto py-2 px-1 mt-1 glass-panel rounded-xl text-[11px] no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-lg shrink-0 font-medium ${
                  isActive
                    ? 'bg-teal-500 text-white font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{item.label.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
