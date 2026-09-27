/**
 * 8 Detailed Technical Report Chapters Extracted from the 151-Page Project Thesis
 * Tech Pioneers | University of Moratuwa
 */

import { ReportChapter } from './fanData';

export const REPORT_CHAPTERS_FULL: ReportChapter[] = [
  {
    id: 'ch1',
    number: '1.0',
    title: 'Executive Summary & The Tropical Cooling Crisis',
    sections: [
      {
        heading: '1.1 Problem Context & The Trilemma of Indoor Cooling',
        content: [
          'In tropical lowlands like Sri Lanka, ambient dry-bulb temperatures consistently hover between 26.5°C and 28.5°C, with hot dry-season peaks exceeding 32.0°C (89.6°F). Maintaining optimal physiological thermal comfort requires maintaining temperatures between 23.0°C and 25.5°C (73.4°F – 77.9°F) at a relative humidity of 45% to 60%.',
          'Modern consumers are constrained by two diametrically opposed, flawed options: low-cost desk fans (Rs. 7,000 – 50,000) that merely circulate hot room air and accelerate skin surface evaporation—causing acute dry skin, dehydrated eyes, and throat irritation—or commercial compressor air conditioning (Rs. 160,000 – 500,000) whose 1,500W power draw results in crippling electricity bills under Ceylon Electricity Board (CEB) tariff structures.',
          'Commercial store-bought evaporative coolers (Rs. 20,000 – 80,000) present hazardous drawbacks: non-removable cooling pads that harbor pathogenic fungal mold and dust, and stagnant open water reservoirs that become lethal breeding grounds for Aedes aegypti mosquitoes (the primary vector of Dengue fever in Sri Lanka).'
        ]
      },
      {
        heading: '1.2 The Smart-Breeze Automated Solution',
        content: [
          'The Tech Pioneers team engineered the "Smart-Breeze": an automated, low-power (15W–20W) evaporative climate conditioning fan. By combining vertical capillary cotton wicks, dual recirculating metal reservoirs, and an Arduino Uno microcontroller connected to an ultrasonic sonar sensor and DHT climate telemetry, the system provides comfortable humidified air while cutting energy consumption to a fraction of traditional appliances.'
        ],
        callout: 'Operating Power: 18W (Saves >98% energy compared to a 1,500W Air Conditioner; saves 55% compared to a 45W standard ceiling fan).'
      }
    ]
  },
  {
    id: 'ch2',
    number: '2.0',
    title: 'Market Analysis & Maintenance Engineering of Cooling Systems',
    sections: [
      {
        heading: '2.1 Comparative Lifespan and Economic Assessment',
        content: [
          'Air conditioning systems feature operational lifespans of 10 to 20 years, highly contingent upon routine chemical coil servicing and refrigerant pressure recharges. Traditional electric fans endure 5 to 15 years on average, though their mechanical bushings and oscillating gearboxes degrade quickly in humid environments.',
          'Price spectrum benchmarks in Sri Lanka: Air Conditioners span Rs. 160,000 to Rs. 500,000; Stand and Ceiling Fans span Rs. 7,000 to Rs. 50,000; Portable Evaporative Coolers span Rs. 20,000 to Rs. 80,000. In contrast, the Smart-Breeze prototype achieved functional operation at a direct Bill of Materials (BOM) cost of just Rs. 7,265 LKR.'
        ]
      },
      {
        heading: '2.2 Thermodynamic Sizing of Indoor Living Spaces',
        content: [
          'Conventional HVAC engineering stipulates approximately 80 BTU (British Thermal Units) per cubic meter of residential volume to remove sensible and latent room heat. A typical 3m x 4m x 3m bedroom (36 m³) demands approximately 2,880 BTU/hr of cooling capacity.'
        ],
        equations: [
          {
            label: 'Eq. 2.1',
            latex: 'Q_{\\text{BTU}} = V_{\\text{room}} \\times 80 \\text{ BTU/m}^3',
            explanation: 'Sizing rule of thumb for standard residential spaces in tropical maritime climates.'
          }
        ]
      },
      {
        heading: '2.3 Common AC Failure Modes and Maintenance Burdens',
        content: [
          'Clogged Air Filters: Impeded airflow reduces evaporator heat transfer efficiency, forcing continuous compressor run-time and increasing electricity bills by up to 30%.',
          'Refrigerant Leaks & Compressor Overload: Low gas pressure results in ice formation across the indoor evaporator coil and eventual burnout of the compressor motor due to lack of lubricating compressor oil.',
          'Electrical Overloads: Heavy inrush current on compressor startup frequently trips domestic circuit breakers and risks wiring fires.'
        ]
      }
    ]
  },
  {
    id: 'ch3',
    number: '3.0',
    title: 'Comprehensive Stakeholder Analysis & Power-Interest Matrix',
    sections: [
      {
        heading: '3.1 Evaluation of the 9 Key Societal Stakeholder Groups',
        content: [
          '1. Government & Energy Regulators: Key stakeholder establishing national energy conservation mandates, electricity tariff schedules, and carbon reduction initiatives.',
          '2. Manufacturing & Distributing Companies: Appliance manufacturers seeking affordable consumer product lines; face potential obsolescence of traditional fans if smart alternatives dominate.',
          '3. Repair Workshops: Local technicians requiring training in microcontroller and sensor diagnostics, opening high-value technical service businesses.',
          '4. Transportation & Logistics: Benefit from lightweight flat-pack sheet metal chassis (480mm x 385mm x 300mm), reducing freight shipping volume compared to heavy cast-iron compressors.',
          '5. Hotel & Restaurant Owners: Commercial dining venues seeking pleasant guest thermal comfort without high air conditioning expenses during outdoor verandah dining.',
          '6. Household Residents: The primary beneficiaries, saving thousands of rupees in monthly electricity tariffs while preventing skin drying and respiratory distress.',
          '7. Industrial Factories: Workstation spot cooling for assembly line workers, reducing heat exhaustion and improving labor productivity.',
          '8. Educational Institutions: Schools and universities requiring quiet, whisper-level airflow in lecture halls without compressor hum.',
          '9. Religious Places: Buddhist temples, churches, and historic shrines seeking gentle humidification to preserve sacred woodwork, mural paintings, and ancient frescoes from dry-heat cracking.'
        ],
        image: '/images/power_interest_grid.png',
        caption: 'Figure 3.1: 2x2 Power-Interest Grid mapping the 9 stakeholder groups.'
      }
    ]
  },
  {
    id: 'ch4',
    number: '4.0',
    title: 'Design Requirements & 6-Criteria Weighted Decision Matrix',
    sections: [
      {
        heading: '4.1 Criteria and Constraints Formulation',
        content: [
          'The engineering specifications were bounded by six core pillars: Sustainability (10 marks), Cost Effectiveness (20 marks), Material Suitability (20 marks), Ease of Design (20 marks), Practical Benefit (20 marks), and Safety in Design (10 marks).',
          'Strict constraints required: (a) Zero use of hazardous or toxic materials, (b) 100% insect-proof sealed water reservoirs to eliminate Dengue mosquito larvae breeding, (c) 12V DC extra-low voltage operation within wet chambers to prevent electric shock hazards, and (d) Total prototype budget ceiling of Rs. 15,000 LKR.'
        ]
      }
    ]
  },
  {
    id: 'ch5',
    number: '5.0',
    title: 'Prototype Specification & Technical Manufacturing',
    sections: [
      {
        heading: '5.1 Mechanical Frame & Spot-Welded Chassis',
        content: [
          'The interior skeleton was constructed from 0.8mm galvanized sheet metal panels joined by resistance spot welding in the university workshop. The external enclosure was fabricated from rigid hardboard featuring angled front louvers for directed horizontal airflow and rear ventilation perforations covered with fine nylon mesh.',
          'The upper reservoir (Container 1: 11" x 6" x 3.5") holds incoming water and suspends the capillary cotton wicking elements. The bottom reservoir (Container 2: 11" x 11" x 3") acts as the drainage basin and pump sump, providing ballast weight to maintain structural equilibrium.'
        ],
        image: '/images/prototype_interior_open.jpeg',
        caption: 'Figure 5.1: Internal view showing spot-welded chassis, cotton wicks array, limit switch, and blue return hose.'
      },
      {
        heading: '5.2 Electrical & Microcontroller Circuit Architecture',
        content: [
          'The control circuitry integrates an Arduino Uno R3 (ATmega328P) board with an HC-SR04 ultrasonic sonar proximity sensor. The sensor pulses a 40 kHz acoustic burst to measure user presence. When a user is detected within 90 cm, the fan activates and an internal timer is continually refreshed. When the user vacates the chair, a 10-second countdown timer begins, shutting off relays when elapsed to conserve power.',
          'A DHT11 temperature/humidity sensor monitors the microclimate, outputting current room relative humidity to a TM1637 4-digit 7-segment display. Two 5V optocoupled relays isolate the microcontroller from the 12V DC brushless fan and submersible pump circuits.'
        ],
        image: '/images/circuit_fritzing_schematic.jpeg',
        caption: 'Figure 5.2: Fritzing circuit diagram of the Arduino Uno, HC-SR04 sonar, DHT sensor, relays, and display.'
      },
      {
        heading: '5.3 Bill of Materials (BOM) & Direct Cost Breakdown',
        content: [
          '12V DC Brushless Fan: Rs. 800; Plug top: Rs. 350; Humidity Sensor: Rs. 320; TT & Binding Wire: Rs. 130; Rocker Switch: Rs. 50; 0.5" Vinyl Hose: Rs. 225; Hot Glue: Rs. 40; Cotton Wicks: Rs. 240; Water Pump: Rs. 1,200; Limit Switch: Rs. 800; Dual Relay Module: Rs. 300; DHT11: Rs. 330; Arduino Uno R3: Rs. 2,100; Ultrasonic Sensor: Rs. 310; 4-Digit Display: Rs. 400.',
          'Total direct expenditure: Rs. 7,265 LKR (under $25 USD).'
        ]
      }
    ]
  },
  {
    id: 'ch6',
    number: '6.0',
    title: 'Thermodynamic Principles & Evaporative Physics',
    sections: [
      {
        heading: '6.1 Latent Heat of Vaporization & Psychrometric Cooling',
        content: [
          'Evaporative cooling functions through the endothermic phase change of liquid water into gaseous water vapor. As air moves past the saturated capillary cotton wicks, sensible heat from the air provides the energy required to overcome intermolecular hydrogen bonding in the liquid water.'
        ],
        equations: [
          {
            label: 'Eq. 6.1',
            latex: '\\Delta Q = m_w \\times \\lambda_v',
            explanation: 'Latent heat absorbed by mass m_w of evaporated water (where \\lambda_v \\approx 2,260 \\text{ kJ/kg}).'
          },
          {
            label: 'Eq. 6.2',
            latex: 'T_{\\text{out}} = T_{\\text{dry}} - \\eta_{\\text{evap}} \\left( T_{\\text{dry}} - T_{\\text{wet}} \\right)',
            explanation: 'Calculates the exit air temperature based on cotton wicking saturation effectiveness (\\eta_{\\text{evap}} \\approx 0.72).'
          }
        ]
      },
      {
        heading: '6.2 Water & Power Efficiency Measurements',
        content: [
          'Operational testing demonstrated that the Smart-Breeze consumes between 15W and 20W of electrical power. The water reservoir holds approximately 1 liter of water, supporting continuous operation for 5 to 6 hours before requiring a refill, providing a steady temperature drop of 2.5°C to 4.5°C.'
        ]
      }
    ]
  },
  {
    id: 'ch7',
    number: '7.0',
    title: 'Alternative Conceptual Designs & "The Heat Collector"',
    sections: [
      {
        heading: '7.1 Sadun Premakumara (210494D) – "The Heat Collector" (Table Cooler)',
        content: [
          'Team Leader Sadun Premakumara proposed a groundbreaking thermodynamic dual-appliance called "The Heat Collector". Rather than rejecting hot-side thermal energy into the atmosphere, this device combines a Thermoelectric Peltier Cooler (TEC) with a Waste-Heat Water Boiling Chamber!',
          'As room air is pulled across the cold side of Peltier Module 1 via twin 12V fans, heat is transferred through a solid 90-degree bent copper conduction rod to Peltier Module 2 located inside an insulated thermal cup. The hot plate of Module 2 is connected to a submerged copper heating coil, boiling water for drinking, tea, or coffee.',
          'A temperature sensor in the cup flashes an external red LED when boiling temperature is reached and dispenses water through a front tap. An automated thermal cutoff prevents dry burning.'
        ],
        image: '/images/premakumara_heat_collector_v1.jpeg',
        caption: 'Figure 7.1: Sadun Premakumara\'s conceptual design of "The Heat Collector" desk cooler and beverage boiler.'
      },
      {
        heading: '7.2 Other Conceptual Innovations Developed by the Team',
        content: [
          'Navinna R.R. (210410U): DIY Stand Fan Retrofit with inverted recycled water bottles and ice chamber.',
          'Pathirage S.S.K. (210447M): Clay-coated aluminum conduction plate cooler with iron mesh droplet catcher.',
          'Perera G.D.D.C. (210458X): Dual-zone residential pipeline HVAC ducting with PWM microcontroller fan speed control.',
          'Rajapaksha W.R.A.K.H. (210509G): Stand fan with porous earthenware terracotta clay pot for natural zero-electricity water chilling.',
          'Ranaweera R.K.P. (210525C): Dual-sided solid-state Peltier box cooler with insulated heat exhaust conduit.',
          'Rathnamalala T.N.S. (210533A): Smart Green Cooler with PIR motion detection and ambient temperature tracking.',
          'Sandaru H.W.P. (210564T): Ultrasonic piezoelectric mist maker ("Air Chiller") with directional L-ducts.'
        ]
      }
    ]
  },
  {
    id: 'ch8',
    number: '8.0',
    title: 'Project Governance, Chronological Meeting Minutes & Verification',
    sections: [
      {
        heading: '8.1 Meeting Logs (March – June 2023)',
        content: [
          'Meeting 1 (13 March 2023): Premarathne O.D. nominated PREMAKUMARA H.P.S. as Team Leader; unanimously confirmed by Ranaweera and the team. Rathnamalala appointed as Convener.',
          'Meeting 2 (20 March 2023): Leader Premakumara pitched 6 innovative engineering projects; team selected low-cost automated cooling as the most vital societal need.',
          'Meeting 3 (27 March 2023): Confirmed title "Smart-Breeze" and formulated master Gantt chart.',
          'Meeting 6 (14 May 2023): Team Leader Premakumara was absent due to acute Dengue fever, but coordinated with the team remotely via telephone as the weighted decision matrix peer review was conducted.',
          'Meeting 7 (28 May 2023): Assembly planning for workshop spot welding, frame cutting, and circuit testing on 30–31 May 2023.'
        ]
      }
    ]
  }
];
