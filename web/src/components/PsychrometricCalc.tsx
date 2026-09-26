import React, { useState } from 'react';
import { Thermometer, Droplets, Sparkles, BookOpen, HeartPulse } from 'lucide-react';
import { calculateEvapCooling } from '../core/thermodynamics';
import { MathView } from './MathView';

export const PsychrometricCalc: React.FC = () => {
  const [tDry, setTDry] = useState<number>(32.0);
  const [rh, setRh] = useState<number>(45);

  const result = calculateEvapCooling(tDry, rh, 0.72);

  return (
    <section className="py-12 bg-slate-900/60 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-cyan text-xs font-semibold">
            <Thermometer className="w-3.5 h-3.5" />
            <span>Thermodynamic Psychrometrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Evaporative Thermodynamics &amp; Skin Hydration
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Calculate the exact temperature depression achievable via capillary cotton wicks
            and evaluate biological comfort across varying tropical heat profiles.
          </p>
        </div>

        {/* Interactive Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Sliders and Inputs */}
          <div className="lg:col-span-5 glass-panel rounded-3xl p-6 border border-cyan-500/30 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Droplets className="w-4 h-4 text-cyan-400" />
              <span>Ambient Environmental Parameters</span>
            </h3>

            {/* Dry Bulb Temperature Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">Dry-Bulb Temperature (T_dry):</span>
                <span className="font-mono font-bold text-teal-300 text-sm">{tDry} °C ({Math.round(tDry * 1.8 + 32)} °F)</span>
              </div>
              <input
                type="range"
                min="24"
                max="40"
                step="0.5"
                value={tDry}
                onChange={(e) => setTDry(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>24 °C (Mild)</span>
                <span>32 °C (Colombo Mean Peak)</span>
                <span>40 °C (Dry Zone)</span>
              </div>
            </div>

            {/* Relative Humidity Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-semibold">Relative Humidity (% RH):</span>
                <span className="font-mono font-bold text-cyan-300 text-sm">{rh}% RH</span>
              </div>
              <input
                type="range"
                min="15"
                max="95"
                step="1"
                value={rh}
                onChange={(e) => setRh(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-500">
                <span>15% (Arid)</span>
                <span>45% (Optimal Target)</span>
                <span>95% (Monsoon)</span>
              </div>
            </div>

            {/* Core Thermodynamic Equation Card */}
            <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-xs space-y-2">
              <span className="text-[11px] font-bold text-teal-400 uppercase tracking-wider block">
                Governing Evaporative Equation:
              </span>
              <MathView
                math="T_{\text{out}} = T_{\text{dry}} - \eta_{\text{evap}} \left( T_{\text{dry}} - T_{\text{wet}} \right)"
                block={true}
              />
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Where <MathView math="\eta_{\text{evap}} = 72\%" /> represents the saturation efficiency of the Smart-Breeze capillary cotton wicks, and <MathView math="T_{\text{wet}}" /> is the psychrometric wet-bulb limit.
              </p>
            </div>
          </div>

          {/* Right Column: Computed Thermodynamic Results */}
          <div className="lg:col-span-7 space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glass-panel rounded-2xl p-4 text-center border border-teal-500/20">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Exit Breeze Temp</div>
                <div className="text-2xl font-black text-teal-300 mt-1">{result.tOut} °C</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">-{result.deltaT} °C Cool Drop</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 text-center border border-cyan-500/20">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Wet-Bulb Limit</div>
                <div className="text-2xl font-black text-cyan-300 mt-1">{result.tWet} °C</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Theoretical Min</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 text-center border border-sky-500/20">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Dew Point Temp</div>
                <div className="text-2xl font-black text-sky-300 mt-1">{result.tDew} °C</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Condensation Pt</div>
              </div>

              <div className="glass-panel rounded-2xl p-4 text-center border border-emerald-500/20">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Latent Heat Absorbed</div>
                <div className="text-2xl font-black text-emerald-300 mt-1">2.26</div>
                <div className="text-[10px] text-emerald-400 font-bold mt-0.5">MJ/kg of Water</div>
              </div>
            </div>

            {/* Biological Hydration & Skin Comfort Banner */}
            <div className="glass-panel rounded-3xl p-5 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400">
                <HeartPulse className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  Biological Health &amp; Dry Skin Prevention Impact
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <div className="text-slate-400 font-medium mb-1">Standard Fan Convection:</div>
                  <p className="text-rose-300 leading-relaxed font-medium">
                    ❌ Circulates unmoistened warm air, rapidly pulling water from the stratum corneum (outer skin layer), causing itching, dehydrated eyes, and dry cough.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-teal-950/40 border border-teal-500/40">
                  <div className="text-teal-300 font-medium mb-1">Smart-Breeze Evaporative Vapor:</div>
                  <p className="text-teal-200 leading-relaxed font-medium">
                    ✅ Capillary wicks continuously enrich passing air with micro-vapor particles, maintaining optimal hydration in breathing passages and skin without over-wetting.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1 text-xs text-slate-400">
                <span>Current Skin Hydration Rating:</span>
                <span className="font-bold text-teal-300">{result.skinHydrationRating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
