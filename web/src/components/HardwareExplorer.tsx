import React, { useState } from 'react';
import { Layers, Eye, Tag, DollarSign, Search, CheckCircle2, ChevronRight, Camera } from 'lucide-react';
import { HARDWARE_COMPONENTS, HardwarePart } from '../core/fanData';

export const HardwareExplorer: React.FC = () => {
  const [selectedPartId, setSelectedPartId] = useState<number>(1);
  const [activeViewMode, setActiveViewMode] = useState<'cad' | 'photos'>('cad');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const selectedPart = HARDWARE_COMPONENTS.find((p) => p.id === selectedPartId) || HARDWARE_COMPONENTS[0];

  const filteredBOM = HARDWARE_COMPONENTS.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.spec.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalBOMCost = HARDWARE_COMPONENTS.reduce((acc, curr) => acc + curr.costLKR, 0);

  return (
    <section id="hardware" className="py-12 bg-slate-900 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-teal text-xs font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>3D CAD &amp; Workshop Prototyping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mechanical Assembly &amp; Prototype Anatomy
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Explore the 10 core functional subsystems of the Smart-Breeze, from the spot-welded
            metal frame and capillary cotton wicks to the working laboratory prototype.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="flex justify-center">
          <div className="inline-flex p-1 rounded-2xl glass-panel border border-slate-800">
            <button
              onClick={() => setActiveViewMode('cad')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeViewMode === 'cad'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>3D CAD Exploded Model</span>
            </button>

            <button
              onClick={() => setActiveViewMode('photos')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeViewMode === 'photos'
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Physical Working Prototype</span>
            </button>
          </div>
        </div>

        {/* CAD & Callout Interactive Section */}
        {activeViewMode === 'cad' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Visual CAD Image Display */}
            <div className="lg:col-span-7 glass-panel rounded-3xl p-5 border border-teal-500/30 flex flex-col justify-between">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  <span>CAD Model Callout Diagram</span>
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Part #{selectedPart.id} Selected
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center p-3">
                <img
                  src="/images/cad_3d_exploded_schematic.jpeg"
                  alt="3D CAD Exploded Diagram with Callouts"
                  className="w-full max-h-[460px] object-contain rounded-xl"
                />
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                Engineering schematic highlighting subsystems (1) to (10): Blower fan, dual reservoirs, wicks, submersible pump, float switch, and electronics enclosures.
              </p>
            </div>

            {/* Subsystems List & Detail Inspector */}
            <div className="lg:col-span-5 space-y-4">
              {/* Selected Part Detail Card */}
              <div className="glass-panel rounded-3xl p-5 border border-teal-500/40 bg-gradient-to-b from-teal-950/20 to-slate-900 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="badge-teal text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                    {selectedPart.category} Subsystem
                  </span>
                  <span className="font-mono text-xs font-bold text-teal-300">
                    Rs. {selectedPart.costLKR.toLocaleString()} LKR
                  </span>
                </div>

                <h3 className="text-lg font-black text-white">
                  {selectedPart.id}. {selectedPart.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedPart.description}
                </p>

                <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] space-y-1">
                  <div className="text-slate-400 font-semibold">Engineering Specification:</div>
                  <div className="text-teal-300 font-mono">{selectedPart.spec}</div>
                </div>
              </div>

              {/* Subsystems Quick Select Buttons */}
              <div className="glass-panel rounded-3xl p-4 border border-slate-800 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block px-1">
                  Select Subsystem (1 - 10):
                </span>
                <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1">
                  {HARDWARE_COMPONENTS.map((part) => {
                    const isSelected = part.id === selectedPartId;
                    return (
                      <button
                        key={part.id}
                        onClick={() => setSelectedPartId(part.id)}
                        className={`text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-teal-500/20 border border-teal-500/60 text-white font-bold'
                            : 'bg-slate-950/50 hover:bg-slate-800/80 text-slate-300 border border-slate-800/80'
                        }`}
                      >
                        <span className="truncate">{part.id}. {part.name}</span>
                        {isSelected && <ChevronRight className="w-3.5 h-3.5 text-teal-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Physical Prototype Real Photos Gallery */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-panel rounded-3xl p-5 border border-slate-800 space-y-3">
              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src="/images/prototype_front_exterior.jpeg"
                  alt="Physical Prototype Front Exterior"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Assembled Prototype Exterior</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Rigid hardboard outer casing featuring horizontal directional louvers,
                  flush-mounted HC-SR04 ultrasonic sonar eyes detecting user occupancy at 90cm,
                  and side-mounted Arduino breadboard circuit housing.
                </p>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-5 border border-slate-800 space-y-3">
              <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <img
                  src="/images/prototype_interior_open.jpeg"
                  alt="Physical Prototype Open Top Interior"
                  className="w-full h-80 object-cover object-center"
                />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Internal Mechanical Architecture</h4>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Open-top view revealing the spot-welded galvanized sheet metal chassis,
                  capillary cotton wicking cascade hanging from upper container 1,
                  submersible return pump, blue vinyl delivery hose, and safety limit switch.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bill of Materials (BOM) Table */}
        <div className="glass-panel rounded-3xl p-6 border border-slate-800 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Bill of Materials (BOM) &amp; Procurement Registry</span>
              </h3>
              <p className="text-xs text-slate-400">
                Direct component expenditure sourced from Tronic.lk, Nilambara Electronics, and Moratuwa hardware markets.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter parts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl bg-slate-950 text-xs text-white border border-slate-800 focus:outline-none focus:border-teal-500 w-44"
                />
              </div>
              <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold shrink-0">
                Total: Rs. {totalBOMCost.toLocaleString()} LKR
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 text-slate-400 uppercase font-mono text-[10px]">
                <tr>
                  <th className="py-2.5 px-3 rounded-l-lg">#</th>
                  <th className="py-2.5 px-3">Component Name</th>
                  <th className="py-2.5 px-3">Category</th>
                  <th className="py-2.5 px-3">Technical Specification</th>
                  <th className="py-2.5 px-3 text-right rounded-r-lg">Price (LKR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredBOM.map((part) => (
                  <tr key={part.id} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-2.5 px-3 font-mono text-slate-500">{part.id}</td>
                    <td className="py-2.5 px-3 font-bold text-white">{part.name}</td>
                    <td className="py-2.5 px-3">
                      <span className="badge-teal text-[10px] px-2 py-0.5 rounded-md font-semibold">
                        {part.category}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-slate-300 font-mono text-[11px]">{part.spec}</td>
                    <td className="py-2.5 px-3 text-right font-mono font-bold text-teal-300">
                      Rs. {part.costLKR.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
