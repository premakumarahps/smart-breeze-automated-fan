import React, { useState } from 'react';
import { Zap, DollarSign, Leaf, TrendingDown, Clock, ShieldCheck } from 'lucide-react';
import { calculateCEBMonthlyBill } from '../core/thermodynamics';

export const EnergySavingsCalc: React.FC = () => {
  const [dailyHours, setDailyHours] = useState<number>(8);

  const smartBreeze = calculateCEBMonthlyBill(18, dailyHours);
  const standardFan = calculateCEBMonthlyBill(45, dailyHours);
  const airConditioner = calculateCEBMonthlyBill(1500, dailyHours);

  const monthlySavingsVsAC = Math.max(0, airConditioner.billLKR - smartBreeze.billLKR);
  const monthlySavingsVsFan = Math.max(0, standardFan.billLKR - smartBreeze.billLKR);
  const annualSavingsVsAC = monthlySavingsVsAC * 12;

  return (
    <section className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-emerald text-xs font-semibold">
            <Zap className="w-3.5 h-3.5" />
            <span>National Grid &amp; Domestic Utility Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Energy Consumption &amp; CEB Bill Savings Calculator
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Compare real monthly electricity costs in Sri Lankan Rupees (LKR) across the
            Ceylon Electricity Board (CEB) domestic tariff structure.
          </p>
        </div>

        {/* Daily Usage Slider */}
        <div className="max-w-2xl mx-auto glass-panel p-5 rounded-3xl border border-teal-500/30 space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-white flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              Daily Operational Hours:
            </span>
            <span className="font-mono font-bold text-teal-300 text-sm">
              {dailyHours} Hours / Day ({dailyHours * 30} hrs/month)
            </span>
          </div>
          <input
            type="range"
            min="2"
            max="24"
            step="1"
            value={dailyHours}
            onChange={(e) => setDailyHours(Number(e.target.value))}
            className="w-full accent-teal-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
          />
          <div className="flex justify-between text-[11px] text-slate-500">
            <span>2 hrs (Evening only)</span>
            <span>8 hrs (Work/Sleep)</span>
            <span>24 hrs (Continuous)</span>
          </div>
        </div>

        {/* 3-Way Comparative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Smart-Breeze (Winning Eco-Tech) */}
          <div className="glass-panel rounded-3xl p-6 border-2 border-teal-500/60 shadow-xl relative overflow-hidden flex flex-col justify-between hover-lift">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-teal-500 to-emerald-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md">
              ★ Smart-Breeze Innovation
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-teal-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Smart-Breeze</h3>
                  <p className="text-xs text-teal-300 font-mono">18W Automated Fan</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-800 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Monthly Energy:</span>
                  <span className="font-mono font-bold text-teal-300">{smartBreeze.kwh} kWh</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Carbon Footprint:</span>
                  <span className="font-mono font-bold text-slate-300">{smartBreeze.co2Kg} kg CO₂</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Proximity Auto-Cutoff:</span>
                  <span className="font-bold text-emerald-400">Included (Sonar Radar)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-4 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Estimated CEB Monthly Bill</div>
              <div className="text-3xl font-black text-teal-300 mt-1">
                Rs. {smartBreeze.billLKR.toLocaleString()}
              </div>
              <span className="badge-teal text-[10px] font-bold px-2 py-0.5 rounded-full mt-2 inline-block">
                Ultra-Affordable Domestic Tier
              </span>
            </div>
          </div>

          {/* 2. Standard Electric Fan */}
          <div className="glass-panel rounded-3xl p-6 border border-slate-800 flex flex-col justify-between hover-lift">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Traditional Fan</h3>
                  <p className="text-xs text-slate-400 font-mono">45W Ceiling/Stand</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-800 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Monthly Energy:</span>
                  <span className="font-mono font-bold text-slate-200">{standardFan.kwh} kWh</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Carbon Footprint:</span>
                  <span className="font-mono font-bold text-slate-300">{standardFan.co2Kg} kg CO₂</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Presence Detection:</span>
                  <span className="font-bold text-rose-400">None (Wastes power)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-4 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Estimated CEB Monthly Bill</div>
              <div className="text-3xl font-black text-slate-200 mt-1">
                Rs. {standardFan.billLKR.toLocaleString()}
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Blows unmoistened warm air</p>
            </div>
          </div>

          {/* 3. Commercial Air Conditioner */}
          <div className="glass-panel rounded-3xl p-6 border border-rose-500/30 flex flex-col justify-between hover-lift">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Air Conditioner</h3>
                  <p className="text-xs text-rose-300 font-mono">1,500W Inverter Compressor</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-800 pt-3">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Monthly Energy:</span>
                  <span className="font-mono font-bold text-rose-300">{airConditioner.kwh} kWh</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Carbon Footprint:</span>
                  <span className="font-mono font-bold text-rose-300">{airConditioner.co2Kg} kg CO₂</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Capital Equipment Cost:</span>
                  <span className="font-bold text-rose-400">Rs. 160k – 500k</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-4 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-semibold">Estimated CEB Monthly Bill</div>
              <div className="text-3xl font-black text-rose-400 mt-1">
                Rs. {airConditioner.billLKR.toLocaleString()}
              </div>
              <span className="badge-amber text-[10px] font-bold px-2 py-0.5 rounded-full mt-2 inline-block">
                High Tariff Surcharge Band
              </span>
            </div>
          </div>
        </div>

        {/* Net Financial Savings Highlights */}
        <div className="glass-panel rounded-3xl p-6 border border-teal-500/30 bg-gradient-to-r from-teal-950/40 via-slate-900 to-cyan-950/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider">
              <TrendingDown className="w-4 h-4" />
              <span>Direct Household Economic Relief</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Save up to <span className="text-teal-300">Rs. {annualSavingsVsAC.toLocaleString()} LKR</span> Every Year
            </h4>
            <p className="text-xs text-slate-400">
              Compared to running an air conditioning unit for {dailyHours} hours daily under typical domestic usage.
            </p>
          </div>

          <div className="shrink-0 text-center sm:text-right">
            <div className="text-xs text-slate-400">Payback Period of Smart-Breeze BOM:</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-0.5">
              Less Than 1 Month!
            </div>
            <p className="text-[11px] text-slate-500">
              Total BOM: Rs. 7,265 LKR • Monthly AC Savings: Rs. {monthlySavingsVsAC.toLocaleString()} LKR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
