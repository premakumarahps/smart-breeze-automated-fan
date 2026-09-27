# SMART-BREEZE: Affordable Automated Fan System for Humidity Regulation
## Master Engineering Architecture & Web Experience Blueprint

> **Academic Credentials & Context**
> - **Institution**: Department of Materials Science & Engineering, University of Moratuwa, Sri Lanka
> - **Module**: MT1940 – Fundamentals of Engineering Design and Workshop Practice
> - **Project Title**: Affordable Automated Fan System for Humidity Regulation ("SMART-BREEZE")
> - **Team**: Group 4 – **Tech Pioneers**
> - **Team Leader**: **PREMAKUMARA H.P.S. (Sadun Premakumara • Index: 210494D)**
> - **Convener**: **RATHNAMALALA T.N.S. (Index: 210533A)**
> - **Academic Instructor**: **Ms. Hewissage D. (H. Dushani)**
> - **Submission Date**: July 8, 2023

---

## 1. Executive Summary & Problem Space

### 1.1 The Tropical Cooling Dilemma
In tropical island climates like Sri Lanka, ambient lowland temperatures routinely hover between **26.5°C and 28.5°C** (mean **27.5°C**) and escalate past **32°C (90°F)** during dry peak seasons. Optimal human thermal comfort requires **23.0°C – 25.5°C (73°F – 78°F)** at **45% – 60% Relative Humidity (RH)**.

Modern consumers face two unsatisfactory extremes:
1. **Traditional Ceiling & Desk Fans (Rs. 7,000 – 50,000)**:
   - Only circulate existing ambient warm air without reducing temperature.
   - High air velocity accelerates skin surface evaporation, causing **excessive skin drying, eye irritation, and dehydration**.
   - Lack presence awareness, continuously wasting electricity when rooms are vacated.
2. **Compressor Air Conditioning (Rs. 160,000 – 500,000)**:
   - High capital expenditure and prohibitive ongoing power consumption (**1,200W – 2,000W**), inflating electricity bills beyond middle-class affordability.
   - Complex maintenance (refrigerant leaks, chemical coil cleaning, compressor oil replacement).
   - High environmental impact (GWP refrigerants, high grid carbon emissions).
3. **Commercial Portable Evaporative Coolers (Rs. 20,000 – 80,000)**:
   - Non-removable, dirty cooling pads that harbor dust, mold, and pathogens.
   - Stagnant water reservoirs that pose severe **mosquito breeding risks (Dengue vectors)**.
   - Continuous uncontrolled moisture injection leading to indoor stuffiness and over-saturation.

### 1.2 The Smart-Breeze Innovation
The **Smart-Breeze** automated fan system fills this critical market gap:
- **Natural Evaporative Humidification**: Uses capillary cotton wicks to evaporate water into passing airflow, lowering air temperature via latent heat of vaporization while preventing skin dryness.
- **Smart Ultrasonic Radar (HC-SR04)**: Measures user proximity up to **90 cm**. If the user steps away, an integrated **10-second countdown timer** automatically powers down the fan and pump to eliminate wasted standby electricity.
- **Atmospheric Climate Feedback (DHT11/DHT22)**: Continuously senses ambient temperature and relative humidity, maintaining comfort around **45% RH**.
- **Automated Anti-Overflow & Safety Loop**: Float/limit switch detects water level drop in upper reservoir and activates return pump; safety overflow bypass channel and sponge dampener prevent flooding.
- **Radical Affordability**: Built with a total prototype Bill of Materials (BOM) cost of just **~Rs. 7,300 – Rs. 8,500 LKR ($25 – $30 USD)**!

---

## 2. Scientific & Thermodynamic Principles

### 2.1 Latent Heat of Evaporative Cooling
When air flows over wet surfaces (cotton wicks), liquid water absorbs heat energy from the air to undergo phase transformation to vapor:
$$\Delta Q = m_w \cdot \lambda_v$$
Where $\lambda_v \approx 2,260 \text{ kJ/kg}$ (Latent heat of vaporization of water).
The dry-bulb temperature of the air drops towards the wet-bulb temperature:
$$T_{\text{out}} = T_{\text{in}} - \eta_{\text{evap}} (T_{\text{dry}} - T_{\text{wet}})$$
The Smart-Breeze prototype achieves a steady temperature drop of **$2.5^\circ\text{C} – 4.5^\circ\text{C}$** while maintaining relative humidity within the optimal biological comfort zone ($45\% \le \text{RH} \le 60\%$).

### 2.2 Proximity Detection & Timer Logic
Using time-of-flight ultrasonic echolocation:
$$d = \frac{v_{\text{sound}} \cdot \Delta t}{2} = \frac{343 \text{ m/s} \cdot \Delta t}{2}$$
If $d \le 90\text{ cm}$: State = `ACTIVE` (Reset countdown timer $t_{\text{timer}} = 10\text{s}$, Fan = ON, Pump = ON if wicks dry).
If $d > 90\text{ cm}$: State = `COUNTDOWN` ($t_{\text{timer}}$ ticks from $10\text{s} \to 0\text{s}$). When $t_{\text{timer}} = 0$: State = `STANDBY` (Relays opened, Fan = OFF, Pump = OFF).

---

## 3. Engineering Hardware & Bill of Materials (BOM)

### 3.1 Prototype Callout Subsystems (10 Core Parts)
1. **12V DC Brushless Blower Fan (120mm)**: Low power (15W–20W), quiet airflow circulation.
2. **Water Container 1 (Upper Reservoir)**: Metal sheet reservoir feeding the cotton wicks.
3. **Water Container 2 (Lower Reservoir)**: Metal drainage basin capturing unevaporated droplets.
4. **Cotton Wicking Cascade**: Array of cotton fabric wicks suspended across the airflow stream.
5. **Submersible Mini Water Pump (12V DC / 5V DC)**: Returns water from lower basin to upper basin.
6. **Float Switch / Limit Switch**: Automatically trips when upper water level drops below set threshold.
7. **Delivery Water Pipe (0.5" flexible vinyl hose)**: Feeds recirculated water to top wicking tray.
8. **DC Brain Box**: Housing the Arduino Uno R3 board, breadboard, HC-SR04 ultrasonic sensor, and TM1637 4-digit display.
9. **AC / Power Distribution Box**: Housing dual optocoupled 5V relays and 12V 5A power adapter.
10. **External Water Inlet / Refill Port**: Allows adding fresh water or ice cubes with protective seal to eliminate mosquito entry.

### 3.2 Direct Prototype Cost: Rs. 7,265 (~$25 USD)
Compared to Rs. 160,000+ for commercial air conditioning units.

---

## 4. Alternative Conceptual Designs & Special Innovations

The report features 9 unique conceptual alternatives designed by each group member, peer-reviewed via a weighted decision matrix:

1. **Appendix 8.1.4: Sadun Premakumara (210494D) – "The Heat Collector" (Table Cooler)**:
   - **Concept**: A revolutionary dual-function appliance combining **Thermoelectric Peltier Cooling** with a **Waste-Heat Recovery Water Boiler**!
   - **Mechanism**: Peltier module 1 cold side cools room air via an aluminum heat sink and dual 12V fans. The hot side transfers concentrated heat through a solid copper rod to Peltier module 2, which drives a copper heating coil inside an insulated water cup.
   - **Dual Utility**: Provides crisp cool air for study/work desks while simultaneously boiling water for **tea, coffee, or hot drinking water** using energy that would otherwise be discarded!
   - **Thermodynamic Analysis**:
     $$\text{Input Power} = 60\text{W}, \quad \text{Cooling Output} = 9\text{W}, \quad \eta_{\text{cooling}} = 15\%$$
     Plus waste heat recovery elevates water cup temperature with automated flashing temperature indicator and auto-shutoff safety cutoff!

2. **Appendix 8.1.1: Navinna R.R. (210410U) – Stand Fan Bottle Retrofit**
3. **Appendix 8.1.2: Pathirage S.S.K. (210447M) – Clay-Coated Aluminum Cooler**
4. **Appendix 8.1.3: Perera G.D.D.C. (210458X) – Dual-Zone Pipeline Ventilation**
5. **Appendix 8.1.5: Premarathne O.D. (210496K) – Portable Dual-Reservoir Evaporative Fan**
6. **Appendix 8.1.6: Rajapaksha W.R.A.K.H. (210509G) – Clay Pot Natural Thermal Sink**
7. **Appendix 8.1.7: Ranaweera R.K.P. (210525C) – Dual-Sided Peltier Box Cooler**
8. **Appendix 8.1.8: Rathnamalala T.N.S. (210533A) – Smart Green Cooler**
9. **Appendix 8.1.9: Sandaru H.W.P. (210564T) – Ultrasonic Mist Fogger "Air Chiller"**

---

## 5. Next-Level Web Experience Architecture ("Difference Vibe")

- **Theme**: **Aerodynamic Hydro-Breeze & Clean-Tech Innovation**.
- **Color Palette**: Crisp Teal (`#0D9488`), Glacier Cyan (`#0284C7`), Mint Accent (`#10B981`), Frosted Glass Acrylic.
- **Dynamic Animations**:
  - Real-time HTML5 Canvas Airflow & Floating Mist Particles with interactive wind velocity.
  - Proximity Radar visualizer responding to mouse movement or avatar dragging.
  - 10-second auto-cutoff countdown simulation.
- **Core Modules**:
  1. Interactive Virtual Climate & Proximity Radar Simulator
  2. Psychrometric Evaporative Cooling Calculator
  3. Energy & Monthly CEB Electricity Bill Calculator
  4. 3D Hardware Anatomy Explorer (10 Subsystems) & Photo Gallery
  5. Arduino Firmware & Circuit Studio (Fritzing schematic + code inspector)
  6. 9 Conceptual Innovations & Sadun Premakumara's Peltier "Heat Collector"
  7. Interactive 2x2 Stakeholder Power-Interest Matrix (9 Segments)
  8. Full 12-Slide Presentation Deck & 8-Chapter Technical Report Reader (PDF downloads)
  9. Tech Pioneers Team Hub & 7 Chronological Meeting Archives
