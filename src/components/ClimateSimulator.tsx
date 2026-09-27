import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Radar, User, Droplets, Wind, Zap, Gauge, AlertCircle, Clock } from 'lucide-react';
import { calculateEvapCooling } from '../core/thermodynamics';

export const ClimateSimulator: React.FC = () => {
  // Proximity Distance in cm (0 to 180 cm)
  const [distanceCm, setDistanceCm] = useState<number>(65);
  // Auto-cutoff timer in seconds (starts at 10s when user leaves range)
  const [timerRemaining, setTimerRemaining] = useState<number>(10);
  const [isCountingDown, setIsCountingDown] = useState<boolean>(false);
  const [systemActive, setSystemActive] = useState<boolean>(true);
  
  // Microclimate inputs
  const [ambientTemp, setAmbientTemp] = useState<number>(31.5);
  const [ambientRh, setAmbientRh] = useState<number>(50);
  const [wicksSaturated, setWicksSaturated] = useState<boolean>(true);
  const [pumpRunning, setPumpRunning] = useState<boolean>(true);
  const [limitSwitchTripped, setLimitSwitchTripped] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Proximity radar logic
  useEffect(() => {
    let interval: any = null;

    if (distanceCm <= 90) {
      // In range: system turns ON, timer reset
      setSystemActive(true);
      setIsCountingDown(false);
      setTimerRemaining(10);
    } else {
      // Out of range: countdown begins if active
      if (systemActive) {
        setIsCountingDown(true);
        interval = setInterval(() => {
          setTimerRemaining((prev) => {
            if (prev <= 1) {
              setSystemActive(false);
              setIsCountingDown(false);
              clearInterval(interval);
              return 0;
            }
            return prev - 1;
          });
        }, 1000);
      }
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [distanceCm, systemActive]);

  // Canvas airflow & particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: { x: number; y: number; speedX: number; size: number; opacity: number }[] = [];
    const numParticles = 45;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speedX: 1.5 + Math.random() * 3,
        size: 2 + Math.random() * 3,
        opacity: 0.2 + Math.random() * 0.6,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (systemActive) {
        // Draw airflow streamlines
        ctx.strokeStyle = wicksSaturated ? 'rgba(45, 212, 191, 0.25)' : 'rgba(56, 189, 248, 0.15)';
        ctx.lineWidth = 1.5;

        for (let y = 30; y < canvas.height; y += 40) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          for (let x = 0; x < canvas.width; x += 30) {
            const wave = Math.sin((x + Date.now() * 0.05) * 0.02) * 8;
            ctx.lineTo(x, y + wave);
          }
          ctx.stroke();
        }

        // Draw floating evaporative mist particles
        particles.forEach((p) => {
          ctx.fillStyle = wicksSaturated
            ? `rgba(94, 234, 212, ${p.opacity})`
            : `rgba(186, 230, 253, ${p.opacity * 0.5})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();

          p.x += p.speedX;
          if (p.x > canvas.width) {
            p.x = 0;
            p.y = Math.random() * canvas.height;
          }
        });
      } else {
        // Standby idle display
        ctx.fillStyle = 'rgba(148, 163, 184, 0.4)';
        ctx.font = '13px Outfit, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('STANDBY MODE — AIRFLOW PAUSED TO CONSERVE ELECTRICITY', canvas.width / 2, canvas.height / 2);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [systemActive, wicksSaturated]);

  // Compute thermal results
  const thermal = calculateEvapCooling(ambientTemp, ambientRh, wicksSaturated ? 0.72 : 0.05);

  const resetSimulation = () => {
    setDistanceCm(65);
    setTimerRemaining(10);
    setSystemActive(true);
    setIsCountingDown(false);
  };

  return (
    <section id="simulator" className="py-12 bg-slate-950/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-teal text-xs font-semibold">
            <Radar className="w-3.5 h-3.5" />
            <span>Interactive Hardware &amp; Climate Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Virtual Evaporative Cooling &amp; Sonar Radar
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Test the autonomous HC-SR04 ultrasonic proximity detection, 10-second auto-cutoff countdown,
            and psychrometric evaporative cooling response in real-time.
          </p>
        </div>

        {/* Main Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Visual Airflow & Sonar Radar Canvas */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-5 border border-teal-500/30 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${systemActive ? 'bg-teal-400 animate-ping' : 'bg-rose-500'}`} />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Live System State: {systemActive ? (wicksSaturated ? 'Active Evaporative Cooling' : 'Active Dry Fan') : 'Standby Cutoff'}
                </span>
              </div>
              <span className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                systemActive ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40' : 'bg-slate-800 text-slate-400'
              }`}>
                Power: {systemActive ? '18.2 W' : '0.4 W'}
              </span>
            </div>

            {/* Canvas Container */}
            <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
              <canvas
                ref={canvasRef}
                width={640}
                height={260}
                className="w-full h-full object-cover"
              />

              {/* Fan Mock Overlay at Left */}
              <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 bg-slate-950/80 p-2.5 rounded-xl border border-teal-500/30 backdrop-blur-md">
                <Wind className={`w-8 h-8 ${systemActive ? 'text-teal-400 animate-spin' : 'text-slate-600'}`} style={{ animationDuration: '0.8s' }} />
                <span className="text-[10px] font-mono text-teal-300">12V DC Blower</span>
              </div>

              {/* Active Sonar Ping Overlay */}
              <div className="absolute top-3 right-4 flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800 text-xs">
                <Radar className={`w-4 h-4 ${distanceCm <= 90 ? 'text-emerald-400 animate-spin' : 'text-slate-500'}`} />
                <span className="text-slate-300 font-mono text-[11px]">
                  Sonar Range: <strong className={distanceCm <= 90 ? 'text-emerald-400' : 'text-rose-400'}>{distanceCm} cm</strong>
                </span>
              </div>
            </div>

            {/* Ultrasonic Radar Proximity Slider (Drag User Avatar) */}
            <div className="space-y-3 bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <User className="w-4 h-4 text-cyan-400" />
                  User Distance from Fan (Sonar Radar Range):
                </span>
                <span className="font-mono font-bold text-cyan-400 text-sm">
                  {distanceCm} cm {distanceCm <= 90 ? '(Inside 90cm Threshold)' : '(Outside Active Zone)'}
                </span>
              </div>

              <input
                type="range"
                min="10"
                max="180"
                value={distanceCm}
                onChange={(e) => setDistanceCm(Number(e.target.value))}
                className="w-full accent-teal-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />

              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>10 cm (Desk Close)</span>
                <span className="text-teal-400 font-bold">▲ 90 cm Sonar Threshold Trigger</span>
                <span>180 cm (Far Room)</span>
              </div>
            </div>

            {/* Auto-Shutoff Countdown Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className={`p-3 rounded-xl border flex items-center gap-3 transition-colors ${
                isCountingDown
                  ? 'bg-amber-950/30 border-amber-500/40 text-amber-300'
                  : systemActive
                  ? 'bg-teal-950/30 border-teal-500/30 text-teal-300'
                  : 'bg-slate-900 border-slate-800 text-slate-400'
              }`}>
                <Clock className={`w-5 h-5 ${isCountingDown ? 'animate-bounce text-amber-400' : ''}`} />
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider">
                    {isCountingDown ? 'Auto-Cutoff Countdown' : 'Timer Status'}
                  </div>
                  <div className="text-base font-black font-mono">
                    {isCountingDown ? `${timerRemaining}s Remaining` : systemActive ? 'Active (User Present)' : 'Standby (Power Cut)'}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={resetSimulation}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Radar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Climate Telemetry & Evaporative Physics */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live Climate Telemetry Output Card */}
            <div className="glass-panel rounded-3xl p-5 border border-teal-500/30 space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Gauge className="w-4 h-4 text-teal-400" />
                <span>Thermodynamic Output (DHT11 Telemetry)</span>
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Breeze Output Temp</div>
                  <div className="text-2xl font-black text-teal-300 mt-0.5">
                    {systemActive ? `${thermal.tOut} °C` : `${ambientTemp} °C`}
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">
                    {systemActive ? `-${thermal.deltaT} °C Evaporative Drop` : 'Fan in Standby'}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Relative Humidity</div>
                  <div className="text-2xl font-black text-cyan-300 mt-0.5">
                    {ambientRh}% RH
                  </div>
                  <div className="text-[11px] text-cyan-400 font-semibold mt-0.5">
                    Target: 45%–60% RH
                  </div>
                </div>
              </div>

              {/* Skin Hydration & Biological Protection Status */}
              <div className="p-3 rounded-2xl bg-teal-950/40 border border-teal-500/30 flex items-center gap-3">
                <Droplets className="w-5 h-5 text-teal-400 shrink-0" />
                <div className="text-xs">
                  <span className="font-bold text-white">Skin Hydration Protection: </span>
                  <span className="text-teal-300">{wicksSaturated && systemActive ? 'Active Natural Vapor Barrier' : 'Dry Convection Mode'}</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Evaporating water from capillary wicks balances indoor dry air, preventing dry cornea, throat irritation, and skin parching.
                  </p>
                </div>
              </div>

              {/* Climate Control Sliders */}
              <div className="space-y-3 pt-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Ambient Dry-Bulb Temp:</span>
                    <span className="font-mono text-teal-400 font-bold">{ambientTemp} °C</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="38"
                    step="0.5"
                    value={ambientTemp}
                    onChange={(e) => setAmbientTemp(Number(e.target.value))}
                    className="w-full accent-teal-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">Ambient Relative Humidity:</span>
                    <span className="font-mono text-cyan-400 font-bold">{ambientRh}% RH</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="85"
                    step="1"
                    value={ambientRh}
                    onChange={(e) => setAmbientRh(Number(e.target.value))}
                    className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                  />
                </div>
              </div>

              {/* Component Relay State Toggles */}
              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-medium">Cotton Wicking State:</span>
                <button
                  onClick={() => setWicksSaturated(!wicksSaturated)}
                  className={`px-3 py-1 rounded-lg font-bold text-xs transition-colors ${
                    wicksSaturated
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {wicksSaturated ? '💧 Wetted & Saturated' : '🍂 Dry Matrix'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
