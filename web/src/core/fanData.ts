/**
 * Comprehensive Dataset Extracted from Smart-Breeze Technical Report & Defense Presentation
 * Department of Materials Science & Engineering, University of Moratuwa
 * Course: MT1940 Fundamentals of Engineering Design and Workshop Practice
 */

export interface TeamMember {
  index: string;
  name: string;
  shortName: string;
  role: string;
  photoUrl: string;
  stakeholderAssigned: string;
  isLeader?: boolean;
  isInstructor?: boolean;
}

export interface HardwarePart {
  id: number;
  name: string;
  category: 'Mechanical' | 'Hydraulic' | 'Electrical' | 'Control';
  description: string;
  spec: string;
  costLKR: number;
  highlightCoordinates?: { x: number; y: number }; // percentage on CAD diagram
}

export interface Stakeholder {
  id: string;
  name: string;
  category: 'Government' | 'Industry' | 'Services' | 'Public' | 'Institutional';
  power: 'High' | 'Low';
  interest: 'High' | 'Low';
  quadrant: 'Manage Closely' | 'Keep Informed' | 'Keep Satisfied' | 'Monitor';
  imageUrl: string;
  position: string;
  positiveImpact: string;
  negativeImpact: string;
  assignedMember: string;
}

export interface ConceptualDesign {
  id: string;
  author: string;
  indexNo: string;
  title: string;
  summary: string;
  coolingTechnique: string;
  powerConsumption: string;
  estimatedCostLKR: string;
  images: string[];
  keyFeatures: string[];
  arduinoCodeSnippet?: string;
  isLeaderDesign?: boolean;
}

export interface MeetingMinute {
  meetingNo: number;
  date: string;
  time: string;
  mode: 'Physical Meeting' | 'Zoom Meeting';
  teamLeader: string;
  convener: string;
  attendeesCount: number;
  agenda: string[];
  goals: string[];
  keyDecisions: string[];
  notes?: string;
}

export interface ReportChapter {
  id: string;
  number: string;
  title: string;
  sections: {
    heading: string;
    content: string[];
    equations?: { label: string; latex: string; explanation: string }[];
    callout?: string;
    image?: string;
    caption?: string;
  }[];
}

export const PROJECT_METADATA = {
  title: "AFFORDABLE AUTOMATED FAN SYSTEM FOR HUMIDITY REGULATION",
  shortTitle: "SMART-BREEZE",
  tagline: "Eco-Friendly Evaporative Climate Regulation with Smart Sonar Proximity & Dual Basin Circulation",
  module: "MT1940 – Fundamentals of Engineering Design and Workshop Practice",
  department: "Department of Materials Science & Engineering",
  university: "University of Moratuwa, Sri Lanka",
  group: "Group 4 – Tech Pioneers",
  submissionDate: "08/07/2023",
  leadAuthor: {
    name: "Sadun Premakumara",
    fullName: "PREMAKUMARA H.P.S.",
    index: "210494D",
    role: "Project Team Leader & Systems Architect",
    portfolioUrl: "https://github.com/premakumarahps"
  },
  instructor: {
    name: "Ms. Hewissage D. (H. Dushani)",
    role: "Academic Instructor & Workshop Supervisor"
  },
  prototypeBOMCost: "Rs. 7,265 LKR",
  operatingPower: "15W – 20W",
  waterConsumption: "1 Liter per 5–6 hours",
  sonarDistanceThreshold: "90 cm",
  autoShutoffDelay: "10 seconds",
  comfortRelativeHumidity: "45% – 60% RH"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    index: "INSTRUCTOR",
    name: "MS. HEWISSAGE D. (H. Dushani)",
    shortName: "Ms. Hewissage D.",
    role: "Academic Instructor & Workshop Practice Supervisor",
    photoUrl: "/members/MS_HEWISSAGE_D_Instructor.png",
    stakeholderAssigned: "Faculty Review & Engineering Standards",
    isInstructor: true
  },
  {
    index: "210494D",
    name: "PREMAKUMARA H.P.S. (Sadun)",
    shortName: "PREMAKUMARA",
    role: "Project Team Leader & Systems Architect",
    photoUrl: "/members/210494D_PREMAKUMARA_HPS.png",
    stakeholderAssigned: "Government & National Energy Regulators",
    isLeader: true
  },
  {
    index: "210533A",
    name: "RATHNAMALALA T.N.S.",
    shortName: "RATHNAMALALA",
    role: "Meeting Convener & Automated Control Design",
    photoUrl: "/members/210533A_RATHNAMALALA_TNS.png",
    stakeholderAssigned: "Commercial Businesses & Offices"
  },
  {
    index: "210496K",
    name: "PREMARATHNE O.D.",
    shortName: "PREMARATHNE",
    role: "Baseline Mechanical Architect (Chassis & Reservoirs)",
    photoUrl: "/members/210496K_PREMARATHNE_OD.png",
    stakeholderAssigned: "Universities & Schools"
  },
  {
    index: "210410U",
    name: "NAVINNA R.R.",
    shortName: "NAVINNA",
    role: "Electronics Integration & Sensor Testing",
    photoUrl: "/members/210410U_NAVINNA_RR.png",
    stakeholderAssigned: "Repair Shops & Service Technicians"
  },
  {
    index: "210447M",
    name: "PATHIRAGE S.S.K.",
    shortName: "PATHIRAGE",
    role: "Thermal Materials & Evaporative Media",
    photoUrl: "/members/210447M_PATHIRAGE_SSK.png",
    stakeholderAssigned: "Transportation & Distribution Logistics"
  },
  {
    index: "210458X",
    name: "PERERA G.D.D.C.",
    shortName: "PERERA",
    role: "Enclosure Fabrication & Ventilation Ducting",
    photoUrl: "/members/210458X_PERERA_GDDC.png",
    stakeholderAssigned: "Religious Places & Cultural Heritage"
  },
  {
    index: "210509G",
    name: "RAJAPAKSHA W.R.A.K.H.",
    shortName: "RAJAPAKSHA",
    role: "Natural Cooling Media & Ergonomics",
    photoUrl: "/members/210509G_RAJAPAKSHA_WRAKH.png",
    stakeholderAssigned: "Residents & Household Consumers"
  },
  {
    index: "210525C",
    name: "RANAWEERA R.K.P.",
    shortName: "RANAWEERA",
    role: "Procurement & Cost Estimation",
    photoUrl: "/members/210525C_RANAWEERA_RKP.png",
    stakeholderAssigned: "Cooling Appliance Manufacturers"
  },
  {
    index: "210564T",
    name: "SANDARU H.W.P.",
    shortName: "SANDARU",
    role: "Safety in Design & Aerosol Misting Review",
    photoUrl: "/members/210561T_SANDARU_HWP.png",
    stakeholderAssigned: "Restaurants & Hospitality"
  }
];

export const HARDWARE_COMPONENTS: HardwarePart[] = [
  {
    id: 1,
    name: "12V DC Brushless Fan",
    category: "Mechanical",
    description: "High-airflow 120mm brushless DC axial fan providing steady low-turbulence circulation across the wet wicking matrix.",
    spec: "12V DC, 0.2A - 0.3A (15W - 20W power consumption)",
    costLKR: 800,
    highlightCoordinates: { x: 80, y: 55 }
  },
  {
    id: 2,
    name: "Water Container 1 (Upper Reservoir)",
    category: "Hydraulic",
    description: "Sheet metal reservoir mounted at the top of the chassis. Holds incoming water and evenly distributes gravity-fed flow to suspended cotton wicks.",
    spec: "Fabricated from spot-welded galvanized sheet metal (11\" x 6\" x 3.5\")",
    costLKR: 600,
    highlightCoordinates: { x: 50, y: 15 }
  },
  {
    id: 3,
    name: "Water Container 2 (Lower Reservoir)",
    category: "Hydraulic",
    description: "Base drainage basin collecting unevaporated excess water from the wicks to prevent leaks, maintaining stability with water ballast.",
    spec: "Sheet metal construction with drain funnel & pump mount (11\" x 11\" x 3\")",
    costLKR: 700,
    highlightCoordinates: { x: 45, y: 65 }
  },
  {
    id: 4,
    name: "Cotton Wicking Cascade",
    category: "Mechanical",
    description: "Array of high-capillary woven cotton fabric strips that draw moisture from the top reservoir, creating a large evaporative surface area for passing air.",
    spec: "Multiple woven cotton wicks fastened to top wire rack",
    costLKR: 240,
    highlightCoordinates: { x: 55, y: 30 }
  },
  {
    id: 5,
    name: "Submersible Mini Water Pump",
    category: "Hydraulic",
    description: "Compact DC centrifugal pump situated in lower reservoir to recirculate drainage water back up to the upper reservoir.",
    spec: "Submersible 12V DC pump, head height 1.2m, 240 L/h flow",
    costLKR: 1200,
    highlightCoordinates: { x: 55, y: 80 }
  },
  {
    id: 6,
    name: "Float Switch / Limit Switch",
    category: "Control",
    description: "Mechanical float sensor mounted in upper container that trips when water level drops below required depth to trigger pump recharge.",
    spec: "Micro switch with sponge float lever & silicone waterproof seal",
    costLKR: 800,
    highlightCoordinates: { x: 88, y: 25 }
  },
  {
    id: 7,
    name: "Recirculation Delivery Pipe",
    category: "Hydraulic",
    description: "Flexible conduit conveying pumped water from container 2 back into container 1, with integrated overflow return tube.",
    spec: "0.5-inch flexible vinyl tubing with nylon cable ties",
    costLKR: 225,
    highlightCoordinates: { x: 62, y: 22 }
  },
  {
    id: 8,
    name: "DC Microcontroller Brain Box",
    category: "Control",
    description: "Control housing containing Arduino Uno R3 board, HC-SR04 ultrasonic proximity radar, and TM1637 4-digit display.",
    spec: "Arduino Uno ATmega328P CH340 + HC-SR04 Ultrasonic Sonar (90cm range)",
    costLKR: 2810,
    highlightCoordinates: { x: 70, y: 88 }
  },
  {
    id: 9,
    name: "AC / Power Distribution Box",
    category: "Electrical",
    description: "Switching enclosure isolating high-voltage mains from 12V DC power bus. Houses dual 5V optocoupled relay modules.",
    spec: "Dual 5VDC 10A 250VAC Relay Modules + 12V 5A DC adapter",
    costLKR: 650,
    highlightCoordinates: { x: 38, y: 75 }
  },
  {
    id: 10,
    name: "External Water Inlet & Anti-Mosquito Funnel",
    category: "Hydraulic",
    description: "Sealed external filling port permitting ice or water replenishment without disassembling the box, fitted with insect screen.",
    spec: "Plastic screw cap with fine mesh mosquito barrier",
    costLKR: 150,
    highlightCoordinates: { x: 40, y: 10 }
  }
];

export const STAKEHOLDERS_DATA: Stakeholder[] = [
  {
    id: 'government',
    name: 'Government & National Energy Authorities',
    category: 'Government',
    power: 'High',
    interest: 'High',
    quadrant: 'Manage Closely',
    imageUrl: '/images/stakeholder_government.jpeg',
    position: 'Authority establishing national energy conservation mandates, electricity tariff policies, and COP28 climate targets.',
    positiveImpact: 'Reduces national grid peak load by replacing 1.5kW AC compressors with 18W evaporative fans, directly mitigating carbon emissions and supporting renewable transition.',
    negativeImpact: 'Delayed sustainability goals, public dissatisfaction due to escalating electricity tariffs, and continued dependence on fossil fuel generation.',
    assignedMember: 'PREMAKUMARA H.P.S. (210494D)'
  },
  {
    id: 'manufacturers',
    name: 'Cooling Equipment Manufacturers & Distributors',
    category: 'Industry',
    power: 'High',
    interest: 'High',
    quadrant: 'Manage Closely',
    imageUrl: '/images/stakeholder_manufacturing.jpeg',
    position: 'Produces and distributes domestic appliances; looking for low-cost automated product lines to expand middle-class market share.',
    positiveImpact: 'Opens massive new low-cost consumer segment in developing nations; high-margin assembly using accessible local sheet metal and microcontrollers.',
    negativeImpact: 'Failure to adopt automated climate logic risks market loss to smart imported alternatives and downsizing of traditional fan factories.',
    assignedMember: 'RANAWEERA R.K.P. (210525C)'
  },
  {
    id: 'repair_shops',
    name: 'Repair Workshops & Electronics Technicians',
    category: 'Services',
    power: 'Low',
    interest: 'High',
    quadrant: 'Keep Informed',
    imageUrl: '/images/stakeholder_repair_shops.jpeg',
    position: 'Local workshop technicians who service ceiling fans, refrigerators, and air conditioning units.',
    positiveImpact: 'Creates modern technical service opportunities in sensor calibration, Arduino firmware flashing, and relay replacements.',
    negativeImpact: 'Traditional repairers unable to handle microcontroller automation risk revenue decline as mechanical appliances evolve.',
    assignedMember: 'NAVINNA R.R. (210410U)'
  },
  {
    id: 'transportation',
    name: 'Logistics & Transportation Services',
    category: 'Services',
    power: 'Low',
    interest: 'High',
    quadrant: 'Keep Informed',
    imageUrl: '/images/stakeholder_transportation.jpeg',
    position: 'Freight couriers and distribution networks delivering domestic appliances across the island.',
    positiveImpact: 'Compact, lightweight chassis (480mm x 385mm x 300mm) reduces shipping volume and lowers freight packaging costs compared to heavy AC compressors.',
    negativeImpact: 'Inefficient bulky designs could inflate transportation overhead and increase carton damage during transit.',
    assignedMember: 'PATHIRAGE S.S.K. (210447M)'
  },
  {
    id: 'hospitality',
    name: 'Hotels, Guesthouses & Restaurant Owners',
    category: 'Industry',
    power: 'Low',
    interest: 'High',
    quadrant: 'Keep Informed',
    imageUrl: '/images/stakeholder_hotels_restaurants.jpeg',
    position: 'Commercial dining and lodging venues needing pleasant guest thermal comfort without exorbitant electricity overhead.',
    positiveImpact: 'Slashes dining hall cooling bills by up to 85% compared to central AC while providing gentle, humidified, dust-free breezes.',
    negativeImpact: 'Guest complaints from noisy fans, stuffy dining rooms, or dry throat irritation during outdoor verandah dining.',
    assignedMember: 'SANDARU H.W.P. (210564T)'
  },
  {
    id: 'residents',
    name: 'Residents & Household Consumers',
    category: 'Public',
    power: 'Low',
    interest: 'High',
    quadrant: 'Keep Informed',
    imageUrl: '/images/stakeholder_residents.jpeg',
    position: 'Everyday consumers dealing with oppressive 32°C tropical heat and skyrocketing monthly utility bills.',
    positiveImpact: 'Affordable domestic comfort, dramatic electricity savings (18W vs 1500W), prevents skin drying and respiratory irritation from dry airflow.',
    negativeImpact: 'Financial strain from high electricity tariffs, discomfort, sleepless nights during dry seasons, and risk of Dengue from stagnant DIY water bowls.',
    assignedMember: 'RAJAPAKSHA W.R.A.K.H. (210509G)'
  },
  {
    id: 'factories',
    name: 'Industrial Manufacturing Factories',
    category: 'Industry',
    power: 'Low',
    interest: 'Low',
    quadrant: 'Monitor',
    imageUrl: '/images/stakeholder_factories.jpeg',
    position: 'Factory managers seeking spot cooling for assembly line workers and sensitive electronics.',
    positiveImpact: 'Targeted workstation cooling improves worker productivity, hydration, and reduces absenteeism in hot factory sheds.',
    negativeImpact: 'Worker heat fatigue, thermal stress, and high factory air conditioning capital expenses.',
    assignedMember: 'RATHNAMALALA T.N.S. (210533A)'
  },
  {
    id: 'universities',
    name: 'Schools, Universities & Educational Institutes',
    category: 'Institutional',
    power: 'Low',
    interest: 'Low',
    quadrant: 'Monitor',
    imageUrl: '/images/stakeholder_universities.jpeg',
    position: 'Educational institutions operating large lecture halls, libraries, and laboratories.',
    positiveImpact: 'Low-noise operation ensures lecture audio clarity, creates conducive learning environments with minimal institutional power budgets.',
    negativeImpact: 'Stifling heat causes student lethargy and poor academic concentration; high maintenance budgets for old ceiling fans.',
    assignedMember: 'PREMARATHNE O.D. (210496K)'
  },
  {
    id: 'religious_places',
    name: 'Religious Places & Sacred Cultural Sites',
    category: 'Institutional',
    power: 'Low',
    interest: 'Low',
    quadrant: 'Monitor',
    imageUrl: '/images/stakeholder_religious_places.jpeg',
    position: 'Temples, shrines, and churches hosting large congregations and preserving ancient timber/canvas artifacts.',
    positiveImpact: 'Gentle humidification protects sacred timber carvings and mural frescoes from dry-heat cracking while cooling worshippers.',
    negativeImpact: 'Congregation thermal discomfort during long ceremonies; deterioration of historic artifacts from extreme heat fluctuations.',
    assignedMember: 'PERERA G.D.D.C. (210458X)'
  }
];

export const CONCEPTUAL_DESIGNS: ConceptualDesign[] = [
  {
    id: 'premakumara_heat_collector',
    author: 'Sadun Premakumara',
    indexNo: '210494D',
    title: 'Dual-Function Thermoelectric "Heat Collector" & Hot Water Generator',
    summary: 'A revolutionary thermodynamic concept combining solid-state Peltier cooling with waste-heat energy recovery to boil water for tea or coffee while cooling the room air.',
    coolingTechnique: 'Thermoelectric Peltier Effect (TEC) + Copper Heat Sink + Liquid Cup Heat Exchanger',
    powerConsumption: '60W Total (9W Cooled Air Output + 45W Recovered Thermal Boiling Power)',
    estimatedCostLKR: 'Rs. 9,000',
    isLeaderDesign: true,
    images: [
      '/images/premakumara_heat_collector_v1.jpeg',
      '/images/premakumara_heat_collector_v2.jpeg',
      '/images/premakumara_heat_collector_v3.jpeg'
    ],
    keyFeatures: [
      'Dual-Chamber Design: Air Cooler Box + Heat Collector Box separated by an insulated thermal partition',
      'Dual 12V DC fans circulating room air across cold Peltier heat sink (Section 1 into Section 2)',
      'Solid copper transfer rod conducting hot-side thermal energy directly into an insulated water cup',
      'Secondary low-voltage Peltier module + copper heating coil directly heating water for tea/coffee',
      'Integrated temperature sensor with flashing LED indicator when hot water is ready for dispensing via tap',
      'Automatic thermal cutoff switch preventing dry overheating if hot water is not drawn'
    ],
    arduinoCodeSnippet: `// Premakumara Heat Collector Thermal Controller
const int TEMP_PIN = A0;
const int HEATER_PELTIER = 5;
const int COOLER_PELTIER = 6;
const int TAP_ALERT_LED = 13;

void loop() {
  int sensorVal = analogRead(TEMP_PIN);
  float cupTemp = (sensorVal * 5.0 / 1024.0) * 100.0;
  
  if (cupTemp >= 85.0) { // Hot water ready for tea
    digitalWrite(TAP_ALERT_LED, HIGH);
    digitalWrite(HEATER_PELTIER, LOW); // Prevent boiling overflow
  } else {
    digitalWrite(TAP_ALERT_LED, LOW);
    digitalWrite(HEATER_PELTIER, HIGH);
  }
}`
  },
  {
    id: 'premarathne_dual_reservoir',
    author: 'Premarathne O.D.',
    indexNo: '210496K',
    title: 'Portable Dual-Reservoir Evaporative Fan (Selected Base Design)',
    summary: 'Selected as the team baseline prototype: dual sheet metal containers with cotton wicking cascade, float switch, and automated return pump.',
    coolingTechnique: 'Capillary Cotton Wicks + Submersible Recirculation Pump + DC Blower',
    powerConsumption: '15W – 20W (Continuous 5–6 hours on 1L water)',
    estimatedCostLKR: 'Rs. 8,500',
    images: [
      '/images/prototype_front_exterior.jpeg',
      '/images/prototype_interior_open.jpeg',
      '/images/cad_3d_assembly_labeled.jpeg'
    ],
    keyFeatures: [
      'Dual metal reservoirs (Upper 11\"x6\"x3.5\", Lower 11\"x11\"x3\")',
      'Capillary cotton wicks suspended across front airflow louvers',
      'Submersible water pump returning drainage to top basin',
      'Limit switch auto-cutoff avoiding overflow spills'
    ]
  },
  {
    id: 'navinna_bottle_retrofit',
    author: 'Navinna R.R.',
    indexNo: '210410U',
    title: 'DIY Bottle Retrofit Stand Fan with DHT22 Control',
    summary: 'A low-cost retrofit utilizing discarded 2L water bottles drilled with 0.25\" holes and mounted inverted behind a standard stand fan with ice cubes.',
    coolingTechnique: 'Ice Melt Convection + Microcontroller Automation',
    powerConsumption: '35W (Existing fan motor)',
    estimatedCostLKR: 'Rs. 3,500',
    images: [
      '/images/stand_fan_diy_front.jpeg',
      '/images/stand_fan_diy_side.jpeg',
      '/images/stand_fan_diy_back.jpeg'
    ],
    keyFeatures: [
      'Recycled disposable PET water bottles with 0.25\" air intake holes',
      'Arduino Uno with DHT22 sensor reading ambient humidity',
      'Relay switches fan ON when relative humidity drops below 45% threshold',
      'Ultra-cheap DIY solution for low-income households'
    ]
  },
  {
    id: 'rajapaksha_clay_pot',
    author: 'Rajapaksha W.R.A.K.H.',
    indexNo: '210509G',
    title: 'Natural Unglazed Clay Pot Thermal Sink Cooler',
    summary: 'Leverages the ancient porous earthenware clay pot cooling principle to naturally chill water without electricity, pumping it up a height-adjustable pole.',
    coolingTechnique: 'Natural Porous Clay Pot Evaporative Chilling + Stand Fan',
    powerConsumption: '25W (Optimus F-1022 fan + mini pump)',
    estimatedCostLKR: 'Rs. 15,000',
    images: [
      '/images/clay_pot_cooler_assembly.jpeg',
      '/images/clay_pot_duct_detail.jpeg',
      '/images/clay_pot_base_pump.jpeg'
    ],
    keyFeatures: [
      'Porous terracotta clay pot naturally lowers water temperature by 4-6°C',
      'High-mass base on castors provides stable low-center-of-gravity ballast',
      'Height-adjustable aluminum pole with spiral water and power conduit',
      '10\"x10\" zig-zag cotton fabric film for maximum air-water interface'
    ]
  },
  {
    id: 'sandaru_ultrasonic_mist',
    author: 'Sandaru H.W.P.',
    indexNo: '210564T',
    title: 'Ultrasonic Piezoelectric "Air Chiller" Fogger',
    summary: 'Employs a high-frequency ultrasonic mist maker transducer submerged in an ice-water compartment with dual 12V fans and directional L-shaped nozzles.',
    coolingTechnique: 'Ultrasonic Piezoelectric Cavitation Mist + Ice Compartment',
    powerConsumption: '28W (Transducer + 2x 12V DC fans)',
    estimatedCostLKR: 'Rs. 8,500',
    images: [
      '/images/air_chiller_mist_box.jpeg',
      '/images/ultrasonic_mist_maker.jpeg',
      '/images/dc_fan_12v.jpeg'
    ],
    keyFeatures: [
      'Ultrasonic vibration creates micro-droplet cold aerosol mist (<5 micron)',
      'Dual 12V DC fans blow dry room air through water-ice mist chamber',
      'Twin directional L-shaped PVC nozzles direct cool breeze precisely',
      'Purifies room air by capturing dust particles in water droplets'
    ]
  }
];

export const MEETING_MINUTES: MeetingMinute[] = [
  {
    meetingNo: 1,
    date: '13th March 2023',
    time: '11:15 AM – 12:15 PM',
    mode: 'Physical Meeting',
    teamLeader: 'PREMAKUMARA H.P.S. (210494D)',
    convener: 'RATHNAMALALA T.N.S. (210533A)',
    attendeesCount: 9,
    agenda: ['Team introductions', 'Election of Team Leader', 'Establishment of team rules & project charter'],
    goals: ['Formalize leadership', 'Agree on communication channels', 'Brainstorm national engineering problems'],
    keyDecisions: [
      'PREMARATHNE O.D. nominated PREMAKUMARA H.P.S. as Team Leader; seconded and confirmed by RANAWEERA R.K.P.',
      'RATHNAMALALA T.N.S. appointed as Meeting Convener & Minute Recorder.',
      'Assigned all 9 members to identify pressing societal challenges due March 17.'
    ]
  },
  {
    meetingNo: 2,
    date: '20th March 2023',
    time: '11:15 AM – 12:15 PM',
    mode: 'Physical Meeting',
    teamLeader: 'PREMAKUMARA H.P.S.',
    convener: 'RATHNAMALALA T.N.S.',
    attendeesCount: 8,
    agenda: ['Review problem statements', 'Evaluate national electricity crisis & cooling costs'],
    goals: ['Select core domain for MT1940 design'],
    keyDecisions: [
      'Team Leader Premakumara presented 6 innovative ideas: hybrid mouse, pedestrian crosswalk automation, laptop cooling pad, stress-ball energy harvesting, zero-electricity vegetable preserver, and affordable cooling systems.',
      'Unanimously agreed: Skyrocketing domestic electricity tariffs and high heat in Sri Lanka make low-cost cooling the top priority.'
    ]
  },
  {
    meetingNo: 3,
    date: '27th March 2023',
    time: '11:15 AM – 12:15 PM',
    mode: 'Physical Meeting',
    teamLeader: 'PREMAKUMARA H.P.S.',
    convener: 'RATHNAMALALA T.N.S.',
    attendeesCount: 9,
    agenda: ['Select project title', 'Draft Gantt chart schedule', 'Assign literature research tasks'],
    goals: ['Finalize project scope and timelines'],
    keyDecisions: [
      'Project title confirmed: "Affordable Automated Fan System for Humidity Regulation (Smart-Breeze)".',
      'Premakumara and Premarathne created the master project Gantt chart.'
    ]
  },
  {
    meetingNo: 4,
    date: '3rd April 2023',
    time: '11:15 AM – 12:15 PM',
    mode: 'Physical Meeting',
    teamLeader: 'PREMAKUMARA H.P.S.',
    convener: 'RATHNAMALALA T.N.S.',
    attendeesCount: 9,
    agenda: ['Review cooling technologies', 'Assign 9 stakeholder sectors'],
    goals: ['Divide research across AC, evaporative, and solar cooling systems'],
    keyDecisions: [
      'Premakumara assigned to investigate Government energy policy and CEB tariff bands.',
      'Premarathne and Navinna assigned to visit AC repair shops to study compressor failure modes and dirty coil maintenance issues.'
    ]
  },
  {
    meetingNo: 5,
    date: '19th April 2023',
    time: '9:00 PM – 10:00 PM',
    mode: 'Zoom Meeting',
    teamLeader: 'PREMAKUMARA H.P.S.',
    convener: 'PREMAKUMARA H.P.S.',
    attendeesCount: 9,
    agenda: ['Stakeholder matrix compilation', 'Review 2x2 Power-Interest grid'],
    goals: ['Complete draft stakeholder report'],
    keyDecisions: [
      'Categorized Government & Manufacturers as "Manage Closely" due to high regulatory and production leverage.',
      'Categorized Residents, Repair Technicians, and Hospitality as "Keep Informed".'
    ]
  },
  {
    meetingNo: 6,
    date: '14th May 2023',
    time: '11:15 AM – 12:15 PM',
    mode: 'Physical Meeting',
    teamLeader: 'PREMAKUMARA H.P.S. (Remote via Phone)',
    convener: 'PREMARATHNE O.D.',
    attendeesCount: 8,
    agenda: ['Peer review 9 individual conceptual designs', 'Apply weighted decision matrix'],
    goals: ['Select winning concept for physical prototyping'],
    keyDecisions: [
      'Note: Team Leader Premakumara was absent due to acute Dengue fever, but coordinated with the group remotely via phone.',
      'Reviewed weighted decision matrix across 6 criteria: Sustainability (10), Cost (20), Materials (20), Ease of Design (20), Benefit (20), Safety (10).',
      'Premarathne O.D. dual-reservoir concept scored highest; agreed to integrate Navinna\'s Arduino automation and Premakumara\'s sensor logic.'
    ]
  },
  {
    meetingNo: 7,
    date: '28th May 2023',
    time: '11:15 AM – 12:15 PM',
    mode: 'Physical Meeting',
    teamLeader: 'PREMAKUMARA H.P.S. (Recovery stage)',
    convener: 'PREMARATHNE O.D.',
    attendeesCount: 9,
    agenda: ['Component procurement list', 'Schedule workshop spot-welding and assembly'],
    goals: ['Prepare for prototype fabrication on May 30-31'],
    keyDecisions: [
      'Sandaru and Ranaweera purchased electronic components from Tronic.lk.',
      'Premarathne led sheet metal frame spot-welding in university mechanical workshop.',
      'Premakumara verified circuit breadboard wiring and ultrasonic distance calibration code.'
    ]
  }
];

export const PRESENTATION_SLIDES_DATA = [
  { slideNo: 1, title: "SMART-BREEZE: An Automated Fan", category: "Title & Group", image: "/slides/slide_01.png" },
  { slideNo: 2, title: "Problem Definition: Electricity & Dry Skin", category: "Problem Statement", image: "/slides/slide_02.png" },
  { slideNo: 3, title: "Introduction: Efficiency & Humidity Control", category: "Solution Overview", image: "/slides/slide_03.png" },
  { slideNo: 4, title: "Design Requirements & Evaluation Criteria", category: "Requirements", image: "/slides/slide_04.png" },
  { slideNo: 5, title: "Safety in Design: Manufacturing & Usage", category: "Safety", image: "/slides/slide_05.png" },
  { slideNo: 6, title: "Conceptual 3D Mechanical CAD Model", category: "Engineering CAD", image: "/slides/slide_06.png" },
  { slideNo: 7, title: "Circuit Architecture & Breadboard Wiring", category: "Electronics", image: "/slides/slide_07.png" },
  { slideNo: 8, title: "Working Physical Prototype Photographs", category: "Physical Build", image: "/slides/slide_08.png" },
  { slideNo: 9, title: "Core Innovations: Radar Sonar & Wicks", category: "Innovations", image: "/slides/slide_09.png" },
  { slideNo: 10, title: "Orthographic Engineering Projections", category: "Drawings", image: "/slides/slide_10.png" },
  { slideNo: 11, title: "Tech Pioneers Research Team & Supervisor", category: "Authors", image: "/slides/slide_11.png" },
  { slideNo: 12, title: "Academic Defense Conclusion", category: "Closing", image: "/slides/slide_12.png" }
];
