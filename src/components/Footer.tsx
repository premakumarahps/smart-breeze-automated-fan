import React from 'react';
import { Download, ExternalLink, ShieldCheck, ArrowUp } from 'lucide-react';
import { TEAM_MEMBERS } from '../core/fanData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Column 1: Academic Department & Project Identity */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white p-1 shrink-0 ring-1 ring-teal-400/40 shadow-md">
                <img
                  src="/images/smart_breeze_logo.jpg"
                  alt="Smart-Breeze Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-sm font-extrabold text-white tracking-tight">
                  SMART-BREEZE PLATFORM
                </h4>
                <p className="text-[11px] text-teal-400 font-mono">
                  University of Moratuwa • Sri Lanka
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-[11px]">
              Academic research project developing an automated evaporative climate regulator
              combining capillary cotton wicking, dual recirculating basins, and autonomous ultrasonic
              sonar proximity tracking to solve indoor heat and dry skin at under 20 Watts.
            </p>

            <div className="pt-1">
              <span className="badge-teal text-[10px] font-bold px-2.5 py-1 rounded-full">
                Module: MT1940 Fundamentals of Engineering Design
              </span>
            </div>
          </div>

          {/* Column 2: Tech Pioneers Research Group (Group 4) */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Project Research Group (Group 4 – Tech Pioneers)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-xs">
              {TEAM_MEMBERS.filter((m) => !m.isInstructor).map((member) => (
                <div key={member.index} className="flex items-center gap-1.5">
                  <span
                    className={`font-mono text-[11px] ${
                      member.isLeader ? 'text-teal-400 font-bold' : 'text-slate-500'
                    }`}
                  >
                    {member.index}
                  </span>
                  <span
                    className={
                      member.isLeader ? 'text-teal-300 font-bold' : 'text-slate-300'
                    }
                  >
                    {member.shortName} {member.isLeader ? '(Leader)' : ''}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-[11px] text-teal-300">
              ★ <strong>Sadun Premakumara (Premakumara H.P.S. • 210494D)</strong> — Project Team Leader &amp; Systems Architect
            </div>
          </div>

          {/* Column 3: Academic Downloads & Fast Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Deliverables &amp; Navigation
            </h4>

            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="/docs/Smart_Breeze_Project_Report.pdf"
                  download="Smart_Breeze_Project_Report.pdf"
                  className="hover:text-teal-300 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-teal-400" />
                  <span>Full 151-Page Report PDF</span>
                </a>
              </li>
              <li>
                <a
                  href="/docs/Smart_Breeze_Presentation_Slides.pdf"
                  download="Smart_Breeze_Presentation_Slides.pdf"
                  className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-400" />
                  <span>12-Slide Defense Presentation</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to Top</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <div>
            © 2023–2026 Department of Materials Science &amp; Engineering, University of Moratuwa.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="https://github.com/premakumarahps/smart-breeze-automated-fan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://premakumarahps.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <span>Main Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
