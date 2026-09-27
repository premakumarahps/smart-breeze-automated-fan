import React, { useState } from 'react';
import { Cpu, Code2, Copy, Check, Terminal, Zap, ShieldAlert, BookOpen } from 'lucide-react';

export const CircuitFirmwareViewer: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const arduinoSourceCode = `// SMART-BREEZE AUTOMATED CLIMATE REGULATION FIRMWARE
// University of Moratuwa | Department of Materials Science & Engineering
// MT1940 Fundamentals of Engineering Design - Group 4 (Tech Pioneers)
// Project Team Leader: PREMAKUMARA H.P.S. (Index: 210494D)

#include <DHT.h>
#include <TM1637Display.h>

// Sensor & Actuator Pin Configuration
#define DHTPIN 2             // DHT11/DHT22 Temperature & Humidity Pin
#define DHTTYPE DHT11        // Climate Sensor Type
#define LIMIT_SWITCH_PIN 3   // Upper Reservoir Water Level Float Switch (Active LOW)
#define FAN_RELAY_PIN 4      // Relay 1 Control: 12V DC Brushless Fan
#define PUMP_RELAY_PIN 5     // Relay 2 Control: 12V DC Submersible Water Pump
#define TRIG_PIN 7           // HC-SR04 Ultrasonic Sonar Trigger
#define ECHO_PIN 8           // HC-SR04 Ultrasonic Sonar Echo
#define CLK_PIN 9            // TM1637 4-Digit Display Clock
#define DIO_PIN 10           // TM1637 4-Digit Display Data I/O

// Thermodynamic & Operational Thresholds
const int DISTANCE_THRESHOLD_CM = 90;     // Autonomous detection boundary (90cm)
const unsigned long AUTO_CUTOFF_MS = 10000; // 10-Second energy saving timeout
const float COMFORT_HUMIDITY_MIN = 45.0; // Target minimum relative humidity (%)

DHT dht(DHTPIN, DHTTYPE);
TM1637Display display(CLK_PIN, DIO_PIN);

unsigned long lastPresenceTimestamp = 0;
bool isSystemActive = false;

void setup() {
  Serial.begin(115200);
  Serial.println(F("[INIT] Smart-Breeze Microcontroller Booting..."));

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(FAN_RELAY_PIN, OUTPUT);
  pinMode(PUMP_RELAY_PIN, OUTPUT);
  pinMode(LIMIT_SWITCH_PIN, INPUT_PULLUP);

  // Default state: Relays Open (De-energized for safety)
  digitalWrite(FAN_RELAY_PIN, LOW);
  digitalWrite(PUMP_RELAY_PIN, LOW);

  dht.begin();
  display.setBrightness(0x0f); // Maximum display brightness
  Serial.println(F("[INIT] Hardware Peripherals Ready."));
}

void loop() {
  long distanceCm = getUltrasonicDistance();
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  // Validate sensor telemetry
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println(F("[WARN] DHT Telemetry Error, retrying..."));
    humidity = 50.0; // Fallback default
  }

  // Evaluate Sonar Presence Radar
  if (distanceCm > 0 && distanceCm <= DISTANCE_THRESHOLD_CM) {
    lastPresenceTimestamp = millis();
    isSystemActive = true;
  } else if (millis() - lastPresenceTimestamp > AUTO_CUTOFF_MS) {
    // User absent for > 10 seconds: Enter power-saving standby
    isSystemActive = false;
  }

  // Actuator Control Loop
  if (isSystemActive) {
    // Fan is active to circulate comfortable air
    digitalWrite(FAN_RELAY_PIN, HIGH);

    // Limit switch verifies upper water reservoir depth
    // LOW = water level dropped below wicks threshold -> Run pump to refill
    bool basinNeedsWater = (digitalRead(LIMIT_SWITCH_PIN) == LOW);
    digitalWrite(PUMP_RELAY_PIN, basinNeedsWater ? HIGH : LOW);
  } else {
    // Standby: Disengage both relays to consume only 0.4W quiescent power
    digitalWrite(FAN_RELAY_PIN, LOW);
    digitalWrite(PUMP_RELAY_PIN, LOW);
  }

  // Output current Relative Humidity to TM1637 4-digit display
  display.showNumberDec((int)humidity, false, 2, 2);

  // Serial Telemetry Log
  Serial.print(F("Dist: ")); Serial.print(distanceCm); Serial.print(F("cm | "));
  Serial.print(F("RH: ")); Serial.print(humidity); Serial.print(F("% | "));
  Serial.print(F("State: ")); Serial.println(isSystemActive ? "ACTIVE" : "STANDBY");

  delay(100); // 10Hz control loop frequency
}

long getUltrasonicDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long durationUs = pulseIn(ECHO_PIN, HIGH, 30000); // 30ms timeout (max ~5 meters)
  if (durationUs == 0) return 999;                   // No echo returned
  return durationUs * 0.034 / 2;                     // Speed of sound = 340 m/s
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(arduinoSourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pinouts = [
    { pin: 'D2', function: 'DHT11 Data Bus', device: 'Temperature & Humidity Sensor', type: 'Digital I/O' },
    { pin: 'D3', function: 'Limit/Float Switch', device: 'Upper Reservoir Water Sump', type: 'Digital Input (Pullup)' },
    { pin: 'D4', function: 'Relay 1 Trigger', device: '12V DC Blower Fan Actuation', type: 'Digital Output' },
    { pin: 'D5', function: 'Relay 2 Trigger', device: '12V DC Submersible Pump', type: 'Digital Output' },
    { pin: 'D7', function: 'Ultrasonic Trigger', device: 'HC-SR04 40kHz Sonar Pulse', type: 'Digital Output' },
    { pin: 'D8', function: 'Ultrasonic Echo', device: 'HC-SR04 Return Time-of-Flight', type: 'Digital Input' },
    { pin: 'D9', function: 'TM1637 CLK', device: '4-Digit Display Serial Clock', type: 'Digital Output' },
    { pin: 'D10', function: 'TM1637 DIO', device: '4-Digit Display Data Line', type: 'Digital I/O' },
    { pin: '5V/GND', function: 'Logic Power Bus', device: 'Arduino Uno ATmega328P', type: 'Power' },
    { pin: '12V DC', function: 'Load Power Bus', device: 'Switched Fan & Pump Rail', type: 'External Power' },
  ];

  return (
    <section id="circuit" className="py-12 bg-slate-950 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full badge-cyan text-xs font-semibold">
            <Cpu className="w-3.5 h-3.5" />
            <span>Embedded Electronics &amp; Microcontroller Firmware</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Circuit Architecture &amp; C++ Control Logic
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Inspect the Fritzing breadboard wiring diagram and full non-blocking Arduino Uno
            firmware orchestrating sonar distance thresholding and dual relay actuation.
          </p>
        </div>

        {/* Circuit Diagram Visual Card */}
        <div className="glass-panel rounded-3xl p-6 border border-cyan-500/30 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Fritzing Breadboard Wiring Schematic</span>
            </span>
            <span className="badge-teal text-[10px] font-mono px-2 py-0.5 rounded-full">
              Optocoupled Isolation
            </span>
          </div>

          <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 p-2 flex items-center justify-center">
            <img
              src="/images/circuit_fritzing_schematic.jpeg"
              alt="Fritzing Circuit Schematic Diagram"
              className="w-full max-h-[460px] object-contain rounded-xl"
            />
          </div>

          <p className="text-xs text-slate-400 text-center">
            Figure 5.2: Schematic demonstrating the 5V low-voltage logic isolation connecting the Arduino Uno,
            HC-SR04 sonar, DHT11 sensor, TM1637 display, and dual 10A 250VAC optocoupled relay modules.
          </p>
        </div>

        {/* Pinout Table & Firmware Editor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Microcontroller Pinout Table */}
          <div className="lg:col-span-4 glass-panel rounded-3xl p-5 border border-slate-800 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4 text-teal-400" />
              <span>Arduino Uno I/O Pin Map</span>
            </h3>

            <div className="space-y-2 max-h-[440px] overflow-y-auto pr-1">
              {pinouts.map((p, i) => (
                <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-teal-300">{p.pin}</span>
                    <span className="text-[10px] text-slate-400 font-mono">{p.type}</span>
                  </div>
                  <div className="font-semibold text-white">{p.function}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{p.device}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Arduino C++ Firmware Code Viewer */}
          <div className="lg:col-span-8 glass-panel rounded-3xl p-5 border border-teal-500/30 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <Code2 className="w-4 h-4 text-teal-400" />
                <span>SmartBreeze_Controller.ino (Arduino C++)</span>
              </div>

              <button
                onClick={copyCode}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold glass-panel text-teal-300 hover:text-white hover:bg-teal-500/20 transition-all flex items-center gap-1.5 border border-teal-500/30"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-4 font-mono text-[11px] text-slate-300 max-h-[440px] overflow-y-auto">
              <pre className="whitespace-pre-wrap leading-relaxed">
                {arduinoSourceCode}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
