import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, Users, Filter, ArrowUpRight } from 'lucide-react';
import { STAKEHOLDERS_DATA, Stakeholder } from '../core/fanData';

export const StakeholderMatrix: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<string>('All');

  const quadrants = ['All', 'Manage Closely', 'Keep Informed', 'Monitor'];

  const filteredStakeholders = selectedQuadrant === 'All'
    ? STAKEHOLDERS_DATA
    : STAKEHOLDERS_DATA.filter((s) => s.quadrant === selectedQuadrant);

  return (
    <section id="stakeholders" className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-teal text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Chapter 3.0 Stakeholder Impact Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Power–Interest Grid &amp; Societal Ecosystem
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Comprehensive analysis of the 9 institutional, industrial, and public stakeholder groups
            impacted by affordable automated cooling technology in Sri Lanka.
          </p>
        </div>

        {/* 2x2 Power-Interest Grid Visualizer */}
        <div className="glass-panel rounded-3xl p-6 border border-teal-500/30 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4 text-teal-400" />
              <span>Interactive 2x2 Power–Interest Quadrant Matrix</span>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {quadrants.map((q) => (
                <button
                  key={q}
                  onClick={() => setSelectedQuadrant(q)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    selectedQuadrant === q
                      ? 'bg-teal-500 text-white shadow-xs'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* 4 Quadrants Visual Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Quadrant 1: Manage Closely (High Power, High Interest) */}
            <div
              onClick={() => setSelectedQuadrant('Manage Closely')}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                selectedQuadrant === 'Manage Closely'
                  ? 'bg-rose-950/30 border-rose-500 shadow-md ring-1 ring-rose-500'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  Manage Closely (High Power, High Interest)
                </span>
                <span className="badge-amber text-[10px] font-mono px-2 py-0.5 rounded-full">
                  Red Quadrant
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• <strong>Government &amp; Energy Authorities</strong> (Energy efficiency, national carbon targets)</li>
                <li>• <strong>Cooling Manufacturers &amp; Distributors</strong> (Product innovation vs disruption risk)</li>
              </ul>
            </div>

            {/* Quadrant 2: Keep Informed (Low Power, High Interest) */}
            <div
              onClick={() => setSelectedQuadrant('Keep Informed')}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                selectedQuadrant === 'Keep Informed'
                  ? 'bg-amber-950/30 border-amber-500 shadow-md ring-1 ring-amber-500'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Keep Informed (Low Power, High Interest)
                </span>
                <span className="badge-amber text-[10px] font-mono px-2 py-0.5 rounded-full">
                  Yellow Quadrant
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• <strong>Household Residents &amp; Consumers</strong> (Affordability, skin hydration, electric bills)</li>
                <li>• <strong>Repair Workshops &amp; Technicians</strong> (New maintenance and diagnostic jobs)</li>
                <li>• <strong>Logistics &amp; Transport Services</strong> (Compact shipping footprint)</li>
                <li>• <strong>Hotels &amp; Restaurants</strong> (Guest thermal comfort &amp; food preservation)</li>
              </ul>
            </div>

            {/* Quadrant 3: Keep Satisfied (High Power, Low Interest) */}
            <div
              onClick={() => setSelectedQuadrant('All')}
              className="p-4 rounded-2xl border border-slate-800 bg-slate-900/40 text-xs text-slate-400"
            >
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                Keep Satisfied (High Power, Low Interest)
              </div>
              <p className="text-[11px] leading-relaxed">
                National electrical standards bodies and municipal health authorities regulating indoor air quality and vector management.
              </p>
            </div>

            {/* Quadrant 4: Monitor (Low Power, Low Interest) */}
            <div
              onClick={() => setSelectedQuadrant('Monitor')}
              className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                selectedQuadrant === 'Monitor'
                  ? 'bg-emerald-950/30 border-emerald-500 shadow-md ring-1 ring-emerald-500'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Monitor (Low Power, Low Interest)
                </span>
                <span className="badge-emerald text-[10px] font-mono px-2 py-0.5 rounded-full">
                  Green Quadrant
                </span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1">
                <li>• <strong>Industrial Factories</strong> (Workplace spot cooling)</li>
                <li>• <strong>Schools &amp; Universities</strong> (Quiet classroom learning spaces)</li>
                <li>• <strong>Religious Places &amp; Heritage Sites</strong> (Worshipper comfort &amp; artifact preservation)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stakeholder Deep Dive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStakeholders.map((s) => (
            <div
              key={s.id}
              className="glass-panel rounded-3xl p-5 border border-slate-800 flex flex-col justify-between space-y-4 hover-lift"
            >
              <div className="space-y-3">
                {/* Header with Photo & Badge */}
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shrink-0">
                    <img src={s.imageUrl} alt={s.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="badge-teal text-[10px] font-semibold px-2 py-0.5 rounded-md">
                      {s.quadrant}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1 leading-snug">
                      {s.name}
                    </h4>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.position}
                </p>

                {/* Positive vs Risk Analysis */}
                <div className="space-y-2 pt-1 text-[11px]">
                  <div className="p-2.5 rounded-xl bg-teal-950/40 border border-teal-500/30 text-teal-200">
                    <div className="font-bold flex items-center gap-1.5 text-teal-300 mb-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>If Solution Implemented:</span>
                    </div>
                    <p>{s.positiveImpact}</p>
                  </div>

                  <div className="p-2.5 rounded-xl bg-rose-950/30 border border-rose-500/30 text-rose-200">
                    <div className="font-bold flex items-center gap-1.5 text-rose-400 mb-0.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>If Problem Unsolved:</span>
                    </div>
                    <p>{s.negativeImpact}</p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>Assigned Analyst:</span>
                <span className="font-semibold text-teal-300">{s.assignedMember.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
