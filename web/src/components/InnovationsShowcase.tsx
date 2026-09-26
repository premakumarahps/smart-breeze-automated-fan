import React, { useState } from 'react';
import { Sparkles, Coffee, Flame, Droplets, Wind, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';
import { CONCEPTUAL_DESIGNS, ConceptualDesign } from '../core/fanData';
import { MathView } from './MathView';

export const InnovationsShowcase: React.FC = () => {
  const [selectedDesignId, setSelectedDesignId] = useState<string>('premakumara_heat_collector');

  const selectedDesign =
    CONCEPTUAL_DESIGNS.find((d) => d.id === selectedDesignId) || CONCEPTUAL_DESIGNS[0];

  const leaderDesign = CONCEPTUAL_DESIGNS.find((d) => d.isLeaderDesign)!;

  return (
    <section id="innovations" className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-emerald text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Appendix 8.1 Inventions &amp; Conceptual Designs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Engineering Alternatives &amp; "The Heat Collector"
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Discover the 9 unique conceptual innovations developed and peer-reviewed by the Tech Pioneers
            team, spotlighting Sadun Premakumara's dual-action cooling and beverage boiling appliance.
          </p>
        </div>

        {/* FEATURED SPOTLIGHT: Sadun Premakumara's "The Heat Collector" */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-2 border-teal-500/60 bg-gradient-to-br from-teal-950/30 via-slate-900 to-cyan-950/30 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-teal-500/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-teal-500 to-emerald-400 flex items-center justify-center text-slate-950 shadow-lg">
                <Coffee className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="badge-teal text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    Team Leader Innovation
                  </span>
                  <span className="text-xs text-teal-300 font-mono">Appendix 8.1.4</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                  Sadun Premakumara's "The Heat Collector" Table Cooler
                </h3>
              </div>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-400">Author &amp; Architect:</div>
              <div className="text-sm font-bold text-teal-300">PREMAKUMARA H.P.S. (210494D)</div>
            </div>
          </div>

          {/* Three Hand-Drawn Concept Views */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-teal-500/30 p-2 flex flex-col items-center hover-lift">
              <img
                src="/images/premakumara_heat_collector_v1.jpeg"
                alt="View 1: Table Cooler Isometric"
                className="w-full h-56 object-contain rounded-xl"
              />
              <span className="text-[11px] font-bold text-teal-400 mt-2">
                View 1: External Isometric Table Cooler
              </span>
              <p className="text-[10px] text-slate-400 text-center px-1">
                Dual box layout with front cooling fan and top LED status indicator.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-teal-500/30 p-2 flex flex-col items-center hover-lift">
              <img
                src="/images/premakumara_heat_collector_v2.jpeg"
                alt="View 2: Air Cooler Box Section"
                className="w-full h-56 object-contain rounded-xl"
              />
              <span className="text-[11px] font-bold text-teal-400 mt-2">
                View 2: Air-Cooling Box (Section 1 &amp; 2)
              </span>
              <p className="text-[10px] text-slate-400 text-center px-1">
                Cold-side Peltier heat sink drawing hot room air and expelling cold air via Fan 2.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden bg-slate-950 border border-teal-500/30 p-2 flex flex-col items-center hover-lift">
              <img
                src="/images/premakumara_heat_collector_v3.jpeg"
                alt="View 3: Heat Collector Box Section"
                className="w-full h-56 object-contain rounded-xl"
              />
              <span className="text-[11px] font-bold text-teal-400 mt-2">
                View 3: Heat Recovery Boiler Cup
              </span>
              <p className="text-[10px] text-slate-400 text-center px-1">
                Copper rod and secondary Peltier coil transferring heat to water cup with tap.
              </p>
            </div>
          </div>

          {/* Engineering Mechanism Narrative & COP Formula */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            <div className="lg:col-span-7 space-y-3 text-xs text-slate-300 leading-relaxed">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <span>The Dual-Function Thermodynamics</span>
              </h4>
              <p>
                In conventional thermoelectric coolers, the hot-side heat of the Peltier module is wastefully
                vented into the atmosphere. Sadun Premakumara conceived a thermodynamic cycle that captures
                this concentrated heat through a solid 90-degree bent copper conduction rod.
              </p>
              <p>
                The copper rod conducts the rejected thermal energy to a secondary low-voltage Peltier module
                submerged in an insulated water cup, energizing a copper heating coil. This heats water up to boiling
                temperatures for tea or coffee while simultaneously providing clean, refrigerated air to the user's desk!
              </p>
              <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] space-y-1">
                <div className="text-teal-400 font-bold">Automatic Safety Features:</div>
                <div className="text-slate-300">
                  • Red temperature alert LED flashes when water in cup reaches boiling point.<br />
                  • Integrated thermal limit sensor shuts off system to prevent dry-burning if water is unconsumed.
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 glass-panel rounded-2xl p-4 border border-teal-500/30 space-y-3 text-center">
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block">
                Energy Balance &amp; Efficiency Equation
              </span>
              <MathView
                math="\eta_{\text{efficiency}} = \frac{\text{Output Cooling Energy}}{\text{Input Electrical Energy}} \approx \frac{9\text{W}}{60\text{W}} = 15\%"
                block={true}
              />
              <p className="text-[11px] text-slate-400 leading-relaxed text-left">
                While standard Peltier COP is 15% for cooling alone, harvesting the remaining <strong className="text-white">45W of heat dissipation</strong> for beverage preparation elevates total appliance thermal utility to <strong className="text-emerald-300">&gt;85%</strong>!
              </p>
              <div className="pt-2 border-t border-slate-800 flex justify-between text-xs font-mono">
                <span className="text-slate-400">Total Input Power:</span>
                <span className="text-teal-300 font-bold">60W (12V 5A)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Other Conceptual Designs Selector & Carousel */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Explore Other Team Innovations</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">
              9 Concepts Peer-Reviewed
            </span>
          </div>

          {/* Innovation Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONCEPTUAL_DESIGNS.filter((d) => !d.isLeaderDesign).map((design) => {
              const isSelected = design.id === selectedDesignId;
              return (
                <div
                  key={design.id}
                  onClick={() => setSelectedDesignId(design.id)}
                  className={`glass-panel rounded-2xl p-4 border cursor-pointer transition-all flex flex-col justify-between hover-lift ${
                    isSelected
                      ? 'border-teal-400 bg-teal-950/30 shadow-lg'
                      : 'border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="badge-teal text-[10px] font-mono px-2 py-0.5 rounded-md">
                        {design.indexNo}
                      </span>
                      <span className="text-[11px] text-slate-400 font-semibold font-mono">
                        {design.powerConsumption.split(' ')[0]}
                      </span>
                    </div>

                    <h4 className="text-xs font-bold text-white leading-snug">
                      {design.title}
                    </h4>

                    <p className="text-[11px] text-slate-400 line-clamp-3">
                      {design.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 mt-3 flex items-center justify-between text-[11px]">
                    <span className="text-teal-400 font-medium">{design.author}</span>
                    <span className="font-mono text-slate-300 font-bold">{design.estimatedCostLKR}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Detail Modal / Card for Non-Leader Design */}
          {selectedDesign && !selectedDesign.isLeaderDesign && (
            <div className="glass-panel rounded-3xl p-6 border border-cyan-500/40 space-y-4 animate-fade-in-up">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <span className="badge-cyan text-[10px] font-mono px-2.5 py-0.5 rounded-full uppercase">
                    {selectedDesign.indexNo} • {selectedDesign.author}
                  </span>
                  <h4 className="text-lg font-black text-white mt-1">
                    {selectedDesign.title}
                  </h4>
                </div>
                <div className="text-xs text-cyan-300 font-mono">
                  Estimated Cost: <strong className="text-white">{selectedDesign.estimatedCostLKR}</strong>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
                  <p>{selectedDesign.summary}</p>
                  <div className="space-y-1.5 pt-2">
                    <span className="font-bold text-white text-xs block">Key Engineering Features:</span>
                    {selectedDesign.keyFeatures.map((kf, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                        <span>{kf}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {selectedDesign.images.slice(0, 2).map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-1 flex items-center justify-center">
                      <img src={img} alt="Concept Design Sketch" className="max-h-48 object-contain rounded-lg" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
