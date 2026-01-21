'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import Script from 'next/script';

// ============================================================================
// COMPREHENSIVE FAQ DATA - CENTRAL KNOWLEDGE HUB
// ============================================================================

// Product filters
const productFilters = [
  { id: 'all', label: 'All Products', icon: '📦' },
  { id: 'puf-panels', label: 'PUF Panels', icon: '🧱' },
  { id: 'pir-panels', label: 'PIR Panels', icon: '🔥' },
  { id: 'rockwool-panels', label: 'Rockwool Panels', icon: '🪨' },
  { id: 'roofing-panels', label: 'Roofing Panels', icon: '🏠' },
  { id: 'cold-storage', label: 'Cold Storage', icon: '❄️' },
  { id: 'cleanroom', label: 'Cleanroom Solutions', icon: '🧪' },
  { id: 'doors', label: 'Industrial Doors', icon: '🚪' },
  { id: 'peb', label: 'PEB Buildings', icon: '🏭' },
  { id: 'turnkey', label: 'Turnkey Projects', icon: '🔑' },
];

// Category filters
const categoryFilters = [
  { id: 'all', label: 'All Categories', icon: '📋' },
  { id: 'pricing', label: 'Pricing & Cost', icon: '💰' },
  { id: 'technical', label: 'Technical Specs', icon: '⚙️' },
  { id: 'installation', label: 'Installation', icon: '🔧' },
  { id: 'fire-rating', label: 'Fire Rating', icon: '🔥' },
  { id: 'comparison', label: 'Comparisons', icon: '⚖️' },
  { id: 'compliance', label: 'Compliance & Standards', icon: '✅' },
  { id: 'warranty', label: 'Warranty & Support', icon: '🛡️' },
  { id: 'logistics', label: 'Logistics & Delivery', icon: '🚛' },
  { id: 'use-cases', label: 'Applications', icon: '🏗️' },
];

// Comprehensive FAQ data structure
interface FAQ {
  id: string;
  question: string;
  answer: string;
  products: string[];
  categories: string[];
  keywords: string[];
}

const comprehensiveFAQs: FAQ[] = [
  // ========== PUF PANELS - GENERAL ==========
  {
    id: 'puf-1',
    question: 'What is a PUF panel and how does it work?',
    answer: 'A PUF (Polyurethane Foam) panel is a factory-manufactured insulated sandwich panel made by injecting rigid polyurethane foam between two pre-painted metal sheets (GI/PPGI/SS). The foam core acts as a high-performance thermal barrier with thermal conductivity of 0.024 W/mK, while the metal sheets provide structural strength. PUF panels work on the principle of thermal resistance—the closed-cell foam significantly reduces heat transfer between inside and outside environments, making them ideal for temperature-controlled facilities like cold storage, warehouses, and cleanrooms.',
    products: ['puf-panels'],
    categories: ['technical'],
    keywords: ['what is puf panel', 'puf panel meaning', 'polyurethane foam panel', 'how puf panels work'],
  },
  {
    id: 'puf-2',
    question: 'What is the price of PUF panels per square foot in India?',
    answer: 'PUF panel prices in India typically range from ₹80-180 per square foot depending on several factors: (1) Thickness: 40mm panels cost less than 100mm panels, (2) Steel thickness: 0.35mm to 0.60mm options, (3) Coating type: Standard polyester vs PVDF coatings, (4) Quantity: Bulk orders get better pricing, (5) Customization: Special colors or sizes may cost extra. For a 50mm PUF wall panel with 0.5mm PPGI both sides, expect approximately ₹110-130/sq.ft. Contact PHOENIXX for project-specific quotations with competitive pricing.',
    products: ['puf-panels'],
    categories: ['pricing'],
    keywords: ['puf panel price', 'puf panel cost', 'puf panel rate per sq ft', 'sandwich panel price india'],
  },
  {
    id: 'puf-3',
    question: 'What thickness of PUF panel should I use for cold storage?',
    answer: 'PUF panel thickness for cold storage depends on the target temperature: (1) Chilled storage (+2°C to +8°C): 60-80mm panels, (2) Cold storage (0°C to -5°C): 80-100mm panels, (3) Frozen storage (-18°C to -25°C): 100-120mm panels, (4) Deep freeze (-35°C to -40°C): 120-150mm panels. Proper thickness selection prevents condensation, reduces energy consumption, and maintains consistent temperatures. PHOENIXX engineers calculate optimal thickness using heat load analysis for your specific requirements.',
    products: ['puf-panels', 'cold-storage'],
    categories: ['technical', 'use-cases'],
    keywords: ['puf panel thickness cold storage', 'cold room panel thickness', 'insulation thickness calculator'],
  },
  {
    id: 'puf-4',
    question: 'How long do PUF panels last? What is the lifespan?',
    answer: 'PHOENIXX PUF panels have a service life of 25-30 years or more when properly installed and maintained. The lifespan depends on: (1) Quality of installation and sealing, (2) Environmental exposure (coastal areas may reduce life), (3) Maintenance practices, (4) Steel coating quality—PVDF coatings last longer than polyester. The PUF core maintains its insulation properties throughout the panel life. We provide 10-15 year warranty on core performance and 5-10 years on surface coating depending on the product grade.',
    products: ['puf-panels'],
    categories: ['warranty', 'technical'],
    keywords: ['puf panel lifespan', 'how long do puf panels last', 'sandwich panel durability', 'puf panel warranty'],
  },
  {
    id: 'puf-5',
    question: 'Are PUF panels waterproof and weatherproof?',
    answer: 'Yes, PHOENIXX PUF panels are both waterproof and weatherproof when properly installed. The closed-cell polyurethane foam core has zero water absorption, while the factory-applied interlocking joints with sealant create a watertight envelope. Our roofing panels withstand wind speeds up to 120 km/h and perform excellently in Indian conditions including heavy monsoons, high humidity, extreme temperatures (from -40°C to +80°C), and UV exposure. Proper installation with recommended sealants and accessories is critical for long-term weather resistance.',
    products: ['puf-panels', 'roofing-panels'],
    categories: ['technical'],
    keywords: ['puf panel waterproof', 'are sandwich panels waterproof', 'puf panel weatherproof'],
  },

  // ========== PUF VS PIR COMPARISON ==========
  {
    id: 'comp-1',
    question: 'What is the difference between PUF and PIR panels?',
    answer: 'The key differences are: (1) FIRE RESISTANCE: PIR (Polyisocyanurate) achieves Class B-s1,d0 fire rating vs PUF\'s Class C/D rating—PIR is significantly safer in fire scenarios. (2) THERMAL PERFORMANCE: PIR has slightly better insulation (0.022 W/mK) vs PUF (0.024 W/mK). (3) COST: PUF is 15-20% cheaper than PIR. (4) SMOKE EMISSION: PIR produces 60% less smoke during fire. (5) TEMPERATURE RESISTANCE: PIR withstands up to 150°C vs PUF\'s 100°C. Choose PIR for pharma, cold storage, and fire-sensitive applications. Choose PUF for general industrial buildings, warehouses, and budget-conscious projects.',
    products: ['puf-panels', 'pir-panels'],
    categories: ['comparison', 'fire-rating'],
    keywords: ['puf vs pir panels', 'difference between puf and pir', 'pir vs puf fire rating', 'which is better puf or pir'],
  },
  {
    id: 'comp-2',
    question: 'PUF panel vs Rockwool panel - which is better?',
    answer: 'Both have distinct advantages: ROCKWOOL PANELS: (1) Non-combustible, A1 fire rating—best fire safety, (2) Excellent acoustic insulation (up to 45dB reduction), (3) Required for FM Global/insurance compliance in some facilities, (4) Higher weight and cost. PUF PANELS: (1) Better thermal insulation (0.024 vs 0.035 W/mK), (2) Lightweight—easier installation, (3) More cost-effective, (4) Better moisture resistance. Choose Rockwool for: fire-critical applications, acoustic requirements, high-value warehouses. Choose PUF for: cold storage, general insulation, cost-optimized projects.',
    products: ['puf-panels', 'rockwool-panels'],
    categories: ['comparison', 'fire-rating'],
    keywords: ['puf vs rockwool', 'rockwool vs puf panel', 'mineral wool vs puf', 'fire rated panels comparison'],
  },
  {
    id: 'comp-3',
    question: 'Are PUF panels better than traditional brick walls?',
    answer: 'For industrial and commercial buildings, PUF panels offer significant advantages over brick: (1) SPEED: 60-70% faster construction, (2) INSULATION: 10x better thermal performance (R-value), (3) WEIGHT: 90% lighter—reduces structural steel costs, (4) COST: 20-30% savings on total construction, (5) QUALITY: Factory-made consistency vs site-dependent brick quality, (6) FLEXIBILITY: Easy to relocate or expand. Brick walls remain suitable for permanent structures requiring mass and aesthetic appeal. For warehouses, factories, cold storage, and cleanrooms—PUF panels are the industry standard choice.',
    products: ['puf-panels'],
    categories: ['comparison'],
    keywords: ['puf panel vs brick wall', 'sandwich panel vs conventional construction', 'puf panel advantages'],
  },

  // ========== PIR PANELS ==========
  {
    id: 'pir-1',
    question: 'What is PIR panel? Why is it called fire-rated?',
    answer: 'PIR (Polyisocyanurate) panel is an advanced insulated sandwich panel with enhanced fire resistance. It\'s called "fire-rated" because: (1) Achieves Class B-s1,d0 European fire classification—limited contribution to fire spread, (2) Self-extinguishing—stops burning when flame source is removed, (3) Produces very low smoke (s1 rating), (4) No flaming droplets (d0 rating). The PIR core has a modified chemical structure with higher char-forming tendency, creating a protective carbon layer during fire. This makes PIR mandatory for pharma facilities, food processing, cold storage, and any building requiring strict fire compliance.',
    products: ['pir-panels'],
    categories: ['technical', 'fire-rating'],
    keywords: ['what is pir panel', 'pir panel fire rating', 'fire rated sandwich panel', 'class b-s1-d0 meaning'],
  },
  {
    id: 'pir-2',
    question: 'What is the price of PIR panels in India?',
    answer: 'PIR panel prices in India range from ₹120-220 per square foot, approximately 15-25% higher than equivalent PUF panels. Pricing factors include: (1) Panel thickness: 50mm to 150mm options, (2) Steel specification: 0.4mm to 0.6mm PPGI/PPGL, (3) Coating system: Polyester, SMP, or PVDF, (4) FM Approval requirement: FM-approved PIR costs 10-15% more, (5) Order quantity and project location. For a standard 80mm PIR panel with 0.5mm PPGI both sides, expect approximately ₹150-180/sq.ft. The premium is justified by superior fire safety and potential insurance benefits.',
    products: ['pir-panels'],
    categories: ['pricing'],
    keywords: ['pir panel price', 'pir panel cost india', 'fire rated panel price', 'fm approved panel price'],
  },
  {
    id: 'pir-3',
    question: 'Is PIR panel FM Approved? What does FM Approval mean?',
    answer: 'Yes, PHOENIXX offers FM Approved PIR panels. FM Approval (Factory Mutual) is an internationally recognized certification indicating the product has passed rigorous fire testing by FM Global. Benefits include: (1) Mandatory for facilities insured by FM Global, (2) May reduce insurance premiums by 10-30%, (3) Required by many MNC clients and international companies, (4) Recognized globally for fire safety compliance, (5) Tested for fire spread, structural integrity, and combustibility. FM Approved panels are recommended for pharmaceutical plants, food processing, data centers, and high-value warehouses.',
    products: ['pir-panels'],
    categories: ['compliance', 'fire-rating'],
    keywords: ['fm approved panels', 'fm global certification', 'factory mutual panels', 'fm approved pir panel india'],
  },

  // ========== ROCKWOOL PANELS ==========
  {
    id: 'rock-1',
    question: 'What is Rockwool panel? What is it made of?',
    answer: 'Rockwool panel (also called mineral wool or stone wool panel) is a non-combustible insulated sandwich panel made by bonding compressed mineral wool insulation between two metal sheets. The Rockwool core is manufactured from volcanic rock (basalt) melted at 1500°C and spun into fibers. Key properties: (1) A1/A2 fire rating—completely non-combustible, (2) Excellent acoustic insulation—up to 45dB sound reduction, (3) Temperature resistance up to 1000°C, (4) Thermal conductivity: 0.035-0.040 W/mK. Ideal for fire-sensitive areas, acoustic enclosures, and buildings requiring maximum fire safety compliance.',
    products: ['rockwool-panels'],
    categories: ['technical'],
    keywords: ['what is rockwool panel', 'mineral wool panel', 'stone wool sandwich panel', 'non combustible panel'],
  },
  {
    id: 'rock-2',
    question: 'What is the price of Rockwool panels per sq ft?',
    answer: 'Rockwool panel prices in India typically range from ₹150-280 per square foot, making them 30-50% more expensive than PUF panels. Price factors: (1) Core density: 80-150 kg/m³ options—higher density costs more, (2) Panel thickness: 50mm to 150mm, (3) Steel thickness and coating: 0.4mm to 0.6mm PPGI/SS, (4) Quantity and delivery location. For a standard 80mm Rockwool panel with 100 kg/m³ density and 0.5mm PPGI, expect approximately ₹180-220/sq.ft. The premium is justified for fire-critical applications and facilities requiring FM Global or insurance compliance.',
    products: ['rockwool-panels'],
    categories: ['pricing'],
    keywords: ['rockwool panel price', 'mineral wool panel cost', 'fire resistant panel price india'],
  },
  {
    id: 'rock-3',
    question: 'Where should I use Rockwool panels instead of PUF?',
    answer: 'Use Rockwool panels in these scenarios: (1) HIGH FIRE RISK: Warehouses storing flammable goods, industrial kitchens, areas near furnaces, (2) INSURANCE REQUIREMENTS: FM Global insured facilities, high-value inventory storage, (3) ACOUSTIC NEEDS: Generator rooms, compressor enclosures, noise barriers, (4) EXTREME TEMPERATURES: Applications near heat sources exceeding 100°C, (5) REGULATORY COMPLIANCE: Buildings requiring non-combustible materials by code, (6) SENSITIVE FACILITIES: Server rooms, data centers, archives. For general cold storage and standard industrial buildings, PUF/PIR offers better value.',
    products: ['rockwool-panels', 'puf-panels'],
    categories: ['use-cases', 'comparison'],
    keywords: ['when to use rockwool panel', 'rockwool panel applications', 'acoustic panels industrial'],
  },

  // ========== ROOFING PANELS ==========
  {
    id: 'roof-1',
    question: 'What is PUF roofing panel? How is it different from wall panels?',
    answer: 'PUF roofing panels are specifically designed for roof applications with key differences from wall panels: (1) PROFILE: Trapezoidal ribbed top surface for water drainage vs flat wall panels, (2) JOINTS: Standing seam or concealed fix systems to prevent leaks, (3) SLOPE: Designed for minimum 5-7° roof pitch, (4) WIDTH: Typically 1000mm effective cover width, (5) LENGTH: Can be manufactured up to 20 meters for fewer joints, (6) LOAD CAPACITY: Engineered to span 3-4 meters between purlins. PHOENIXX roofing panels combine excellent thermal insulation with proven waterproofing for industrial roofs.',
    products: ['roofing-panels', 'puf-panels'],
    categories: ['technical'],
    keywords: ['puf roofing panel', 'insulated roof panel', 'sandwich roof panel', 'roofing puf sheet'],
  },
  {
    id: 'roof-2',
    question: 'What is the maximum span for PUF roofing panels?',
    answer: 'PHOENIXX PUF roofing panels can span up to 3-4 meters between purlins depending on: (1) Panel thickness: Thicker panels span more—100mm spans more than 50mm, (2) Design loads: Wind, snow, and maintenance loads affect span, (3) Profile geometry: Deeper ribs provide more strength, (4) Support conditions: Single span vs continuous spans. For optimal design, our engineers calculate span tables based on your specific loading conditions. Longer spans mean fewer purlins, reduced structural steel weight, and lower overall costs. Contact us for project-specific span calculations.',
    products: ['roofing-panels'],
    categories: ['technical', 'installation'],
    keywords: ['puf panel span', 'roofing panel purlin spacing', 'sandwich panel span table'],
  },
  {
    id: 'roof-3',
    question: 'Can PUF roofing panels withstand heavy rain and wind?',
    answer: 'Yes, PHOENIXX PUF roofing panels are engineered for Indian weather conditions: (1) RAIN RESISTANCE: Trapezoidal profile ensures quick water drainage, interlocking joints with sealant prevent leaks, zero water absorption in PUF core, (2) WIND RESISTANCE: Tested for wind speeds up to 120 km/h, concealed fastening systems prevent wind uplift, (3) ADDITIONAL FEATURES: UV-resistant coatings, anti-condensation fleece option for humidity control, compatible with skylights and ventilators. Proper installation with recommended accessories is critical—we provide detailed installation guidance and supervision.',
    products: ['roofing-panels'],
    categories: ['technical'],
    keywords: ['puf panel rain resistance', 'roofing panel for heavy rain', 'wind resistant roof panels'],
  },

  // ========== COLD STORAGE ==========
  {
    id: 'cold-1',
    question: 'What is the cost of building a cold storage in India?',
    answer: 'Cold storage construction cost in India ranges from ₹2,500-5,000 per cubic foot depending on: (1) TEMPERATURE: -40°C deep freeze costs 40-50% more than +4°C chilled storage, (2) SIZE: Economies of scale—larger facilities cost less per unit, (3) STRUCTURE: PEB structure vs conventional construction, (4) EQUIPMENT: Refrigeration system brand and capacity, (5) FLOORING: Insulated floor for frozen storage vs standard floor, (6) AUTOMATION: Racking, material handling equipment. A 5,000 MT capacity cold storage typically costs ₹8-15 crores including civil, panels, refrigeration, and electrical. Contact PHOENIXX for detailed project estimation.',
    products: ['cold-storage'],
    categories: ['pricing'],
    keywords: ['cold storage cost india', 'cold storage construction cost', 'cold room price', 'cold storage project cost'],
  },
  {
    id: 'cold-2',
    question: 'What temperature ranges can cold storage achieve?',
    answer: 'PHOENIXX cold storage solutions cover the complete temperature spectrum: (1) AMBIENT CONTROLLED: +15°C to +25°C for dry goods, (2) CHILLED: +2°C to +8°C for dairy, vegetables, fruits, (3) COLD: 0°C to -5°C for fresh meat, seafood, (4) FROZEN: -18°C to -25°C for frozen foods, ice cream, (5) DEEP FREEZE: -35°C to -40°C for seafood, specialty products, (6) BLAST FREEZER: -35°C to -45°C for rapid freezing. We design multi-temperature facilities with separate zones, airlocks, and independent refrigeration for each temperature requirement.',
    products: ['cold-storage'],
    categories: ['technical', 'use-cases'],
    keywords: ['cold storage temperature', 'cold room temperature range', 'deep freeze temperature', 'blast freezer temperature'],
  },
  {
    id: 'cold-3',
    question: 'How much electricity does a cold storage consume?',
    answer: 'Cold storage electricity consumption depends on several factors: (1) TEMPERATURE: -25°C storage uses 3-4x more power than +4°C storage, (2) SIZE: Larger facilities are more efficient per unit volume, (3) INSULATION: Better insulation (thicker panels) = lower power bills, (4) DOOR OPERATIONS: Frequent door opening increases load, (5) PRODUCT LOAD: Heat from incoming warm products. Typical consumption: Chilled (+4°C): 15-25 kWh per MT per day, Frozen (-25°C): 40-60 kWh per MT per day. PHOENIXX designs for optimal energy efficiency—clients report 20-30% lower power bills compared to older facilities.',
    products: ['cold-storage'],
    categories: ['technical', 'pricing'],
    keywords: ['cold storage electricity consumption', 'cold storage power requirement', 'cold storage running cost'],
  },
  {
    id: 'cold-4',
    question: 'What is the difference between cold room and cold storage?',
    answer: 'The terms are often used interchangeably, but technically: COLD ROOM: (1) Smaller capacity—typically under 500 MT, (2) Single temperature zone, (3) Walk-in or small forklift access, (4) Used by hotels, restaurants, small retailers. COLD STORAGE/WAREHOUSE: (1) Large capacity—500 MT to 50,000+ MT, (2) Multiple temperature zones possible, (3) Racking systems, forklifts, dock levelers, (4) Commercial scale for food processing, logistics. PHOENIXX provides turnkey solutions for both—from 10 MT cold rooms for restaurants to 10,000 MT+ cold storage warehouses for food processors.',
    products: ['cold-storage'],
    categories: ['technical', 'use-cases'],
    keywords: ['cold room vs cold storage', 'difference between cold room and cold storage', 'walk-in cold room'],
  },
  {
    id: 'cold-5',
    question: 'Which panels are best for cold storage construction?',
    answer: 'Panel selection for cold storage depends on temperature and compliance requirements: (1) FOR +4°C TO -25°C (Most applications): PIR Panels recommended—excellent insulation with fire safety, 80-120mm thickness. (2) FOR PHARMA COLD CHAIN: PIR with SS inner face for hygiene and GMP compliance. (3) FOR DEEP FREEZE (-40°C): PIR 150mm or higher thickness with vapor barrier. (4) FOR FM GLOBAL COMPLIANCE: FM Approved PIR panels mandatory. (5) FOR BUDGET PROJECTS: PUF panels acceptable for chilled storage (+4°C). PHOENIXX engineers recommend the optimal panel specification based on your specific temperature, compliance, and budget requirements.',
    products: ['cold-storage', 'pir-panels', 'puf-panels'],
    categories: ['technical', 'comparison', 'use-cases'],
    keywords: ['best panels for cold storage', 'cold storage panel selection', 'insulated panels for cold room'],
  },

  // ========== CLEANROOM ==========
  {
    id: 'clean-1',
    question: 'What is a cleanroom? What industries need cleanrooms?',
    answer: 'A cleanroom is a controlled environment with regulated airborne particle counts, temperature, humidity, and pressure. Industries requiring cleanrooms: (1) PHARMACEUTICAL: Drug manufacturing, API production, sterile filling—ISO 5-7, (2) BIOTECHNOLOGY: Cell culture, vaccine production—ISO 5-6, (3) ELECTRONICS/SEMICONDUCTOR: Chip fabrication, PCB assembly—ISO 4-6, (4) HEALTHCARE: Operating theaters, compounding pharmacies—ISO 5-7, (5) AEROSPACE: Satellite assembly, precision manufacturing—ISO 6-8, (6) FOOD: Aseptic packaging, probiotic production—ISO 7-8. PHOENIXX provides complete cleanroom solutions from design through validation.',
    products: ['cleanroom'],
    categories: ['technical', 'use-cases'],
    keywords: ['what is cleanroom', 'cleanroom applications', 'which industries need cleanroom', 'cleanroom purpose'],
  },
  {
    id: 'clean-2',
    question: 'What is the cost of cleanroom construction in India?',
    answer: 'Cleanroom construction costs vary significantly by classification: (1) ISO CLASS 8 (100,000): ₹3,000-5,000 per sq.ft—general manufacturing, packaging, (2) ISO CLASS 7 (10,000): ₹5,000-8,000 per sq.ft—pharma secondary areas, electronics, (3) ISO CLASS 6 (1,000): ₹8,000-12,000 per sq.ft—pharma production, biotech, (4) ISO CLASS 5 (100): ₹12,000-20,000 per sq.ft—sterile filling, semiconductor. Costs include: panels, HVAC, HEPA/ULPA filters, flooring, doors, pass boxes, interlocks, and basic validation. Specialized equipment, process utilities, and regulatory documentation are additional.',
    products: ['cleanroom'],
    categories: ['pricing'],
    keywords: ['cleanroom cost india', 'cleanroom construction cost', 'pharma cleanroom price', 'iso 7 cleanroom cost'],
  },
  {
    id: 'clean-3',
    question: 'What is ISO classification for cleanrooms? What is ISO 7 cleanroom?',
    answer: 'ISO 14644-1 classifies cleanrooms by maximum allowable particles per cubic meter at 0.5 micron size: ISO 5 (Class 100): 3,520 particles—sterile manufacturing, ISO 6 (Class 1,000): 35,200 particles—aseptic processing, ISO 7 (Class 10,000): 352,000 particles—pharma production, compounding, ISO 8 (Class 100,000): 3,520,000 particles—packaging, gowning. ISO 7 cleanroom is the most common for pharmaceutical manufacturing—suitable for oral solid dosage, topicals, and many injectable operations. PHOENIXX designs cleanrooms from ISO 5 to ISO 8 with complete HVAC and validation support.',
    products: ['cleanroom'],
    categories: ['technical', 'compliance'],
    keywords: ['iso cleanroom classification', 'iso 7 cleanroom', 'cleanroom class 10000', 'cleanroom particle count'],
  },
  {
    id: 'clean-4',
    question: 'Are PHOENIXX cleanrooms GMP and FDA compliant?',
    answer: 'Yes, PHOENIXX cleanroom solutions are designed for GMP (Good Manufacturing Practice) and FDA compliance: (1) DESIGN: cGMP-compliant layouts with proper zoning, airlocks, material/personnel flows, (2) MATERIALS: Smooth, non-porous surfaces—flush panels, coved corners, seamless flooring, (3) DOCUMENTATION: Design Qualification (DQ), IQ/OQ/PQ protocols, as-built drawings, (4) FINISHES: Pharmaceutical-grade panels with food-safe coatings, SS options for wet areas, (5) HVAC: Validated HEPA filtration, pressure cascades, temperature/humidity control. We support regulatory inspections with complete documentation packages.',
    products: ['cleanroom'],
    categories: ['compliance'],
    keywords: ['gmp cleanroom', 'fda approved cleanroom', 'pharma cleanroom compliance', 'cgmp cleanroom design'],
  },
  {
    id: 'clean-5',
    question: 'What is the difference between cleanroom partition and cleanroom panel?',
    answer: 'Both terms are often used interchangeably, but technically: CLEANROOM PARTITION: (1) Modular wall system creating cleanroom boundaries, (2) May include windows, pass-throughs, door frames, (3) Demountable for future reconfiguration, (4) Typically 50-80mm thickness. CLEANROOM PANEL: (1) Individual panel units that form partitions, (2) Can be wall panels, ceiling panels, or door panels, (3) Various cores: PUF, PIR, honeycomb, (4) Different finishes: PPGI, SS, HPL. PHOENIXX supplies both modular partition systems and individual panels based on project requirements—modular systems offer faster installation and future flexibility.',
    products: ['cleanroom'],
    categories: ['technical'],
    keywords: ['cleanroom partition', 'cleanroom panel', 'modular cleanroom', 'cleanroom wall system'],
  },

  // ========== INDUSTRIAL DOORS ==========
  {
    id: 'door-1',
    question: 'What types of industrial doors does PHOENIXX manufacture?',
    answer: 'PHOENIXX manufactures comprehensive industrial door solutions: (1) CLEANROOM DOORS: Flush design, GMP-compliant, manual/automatic, SS or painted finish, (2) FIRE-RATED DOORS: 30/60/90/120-minute ratings, IS/BS/UL certified, emergency exit certified, (3) COLD STORAGE DOORS: Insulated sliding/hinged doors, -40°C to +15°C, with heater frames, (4) HERMETIC DOORS: Airtight sealing for operating theaters, cleanrooms, pressure zones, (5) RAPID ROLL DOORS: High-speed operation for logistics, temperature control, (6) SECTIONAL DOORS: Overhead doors for loading docks, large openings. All doors include hardware, frames, and installation support.',
    products: ['doors'],
    categories: ['technical'],
    keywords: ['industrial doors types', 'phoenixx doors', 'cleanroom doors', 'fire rated doors', 'cold storage doors'],
  },
  {
    id: 'door-2',
    question: 'What is fire-rated door? What does 120-minute fire rating mean?',
    answer: 'A fire-rated door is tested and certified to prevent fire spread for a specified duration. The rating (30/60/90/120 minutes) indicates how long the door maintains integrity during fire: (1) 30-MINUTE: Suitable for internal corridors, low-risk areas, (2) 60-MINUTE: Standard for most commercial/industrial applications, (3) 90-MINUTE: Stairwells, higher risk areas, (4) 120-MINUTE: Maximum protection for critical escape routes, high-risk facilities. A 120-minute door prevents fire and smoke passage for 2 hours, allowing evacuation and firefighter access. PHOENIXX fire doors are tested per IS 3614, BS 476, and UL standards.',
    products: ['doors'],
    categories: ['fire-rating', 'compliance'],
    keywords: ['fire rated door', 'fire door rating meaning', '120 minute fire door', 'fire door certification'],
  },
  {
    id: 'door-3',
    question: 'What is the price of fire-rated doors in India?',
    answer: 'Fire-rated door prices in India vary by rating and size: (1) 30-MINUTE RATED: ₹15,000-25,000 per door, (2) 60-MINUTE RATED: ₹25,000-40,000 per door, (3) 90-MINUTE RATED: ₹35,000-55,000 per door, (4) 120-MINUTE RATED: ₹50,000-80,000 per door. Factors affecting price: door size (standard vs oversized), single vs double leaf, vision panel requirement, hardware specification, finish (painted vs SS). Prices include door, frame, and standard hardware. Installation, panic bars, automatic closers, and access control are additional.',
    products: ['doors'],
    categories: ['pricing'],
    keywords: ['fire door price india', 'fire rated door cost', 'emergency exit door price'],
  },
  {
    id: 'door-4',
    question: 'What is the price of cleanroom doors?',
    answer: 'Cleanroom door prices depend on specification and automation: (1) MANUAL HINGED (GI/Painted): ₹20,000-35,000 per door, (2) MANUAL HINGED (SS 304): ₹40,000-65,000 per door, (3) MANUAL SLIDING (GI): ₹35,000-50,000 per door, (4) AUTOMATIC SLIDING (GI): ₹80,000-1,20,000 per door, (5) AUTOMATIC SLIDING (SS): ₹1,20,000-1,80,000 per door, (6) HERMETIC/AIRTIGHT: ₹1,50,000-2,50,000 per door. Prices include door leaf, frame, hardware, and interlocks. Vision panels, access control, and emergency releases are additional. Bulk orders receive project-specific discounts.',
    products: ['doors', 'cleanroom'],
    categories: ['pricing'],
    keywords: ['cleanroom door price', 'pharma door cost', 'automatic sliding door price', 'hermetic door price'],
  },
  {
    id: 'door-5',
    question: 'What is the difference between cleanroom door and hermetic door?',
    answer: 'Key differences: CLEANROOM DOOR: (1) Flush, smooth surfaces for easy cleaning, (2) Minimal air leakage—suitable for ISO 7/8 cleanrooms, (3) Optional interlocks with adjacent doors, (4) Cost-effective for general cleanroom use. HERMETIC DOOR: (1) Complete airtight sealing with inflatable gaskets, (2) Maintains strict pressure differentials (±50 Pa or more), (3) Required for ISO 5/6 cleanrooms, operating theaters, BSL labs, (4) Often automatic with sensor-controlled operation, (5) Higher cost but essential for critical applications. PHOENIXX supplies both—hermetic doors for pressure-critical zones, standard cleanroom doors elsewhere.',
    products: ['doors', 'cleanroom'],
    categories: ['comparison', 'technical'],
    keywords: ['cleanroom door vs hermetic door', 'airtight door', 'ot door', 'pressure rated door'],
  },

  // ========== PEB BUILDINGS ==========
  {
    id: 'peb-1',
    question: 'What is PEB? What is Pre-Engineered Building?',
    answer: 'PEB (Pre-Engineered Building) is a modern construction system where structural steel components are factory-designed, fabricated, and then assembled on site. Key features: (1) DESIGN: Computer-engineered for optimal material use, (2) FABRICATION: Factory-controlled quality, no site welding, (3) ASSEMBLY: Bolt-together construction—fast erection, (4) CLADDING: Typically uses insulated sandwich panels for walls/roof. PEB advantages: 30-50% faster construction, 20-30% cost savings, large column-free spans up to 90m, easy future expansion. Ideal for warehouses, factories, showrooms, aircraft hangars, and sports facilities.',
    products: ['peb'],
    categories: ['technical'],
    keywords: ['what is peb', 'pre engineered building', 'peb structure', 'peb construction'],
  },
  {
    id: 'peb-2',
    question: 'What is the cost of PEB construction per sq ft in India?',
    answer: 'PEB construction costs in India range from ₹1,000-2,500 per sq.ft for a complete building: (1) BASIC SHED (No insulation): ₹1,000-1,400/sq.ft—simple warehouses, (2) INSULATED BUILDING (PUF cladding): ₹1,400-1,800/sq.ft—general industrial, (3) COLD STORAGE/CLEANROOM GRADE: ₹1,800-2,500/sq.ft—temperature/contamination controlled. Factors affecting cost: span width, eave height, crane capacity, soil conditions, location. PHOENIXX provides complete turnkey PEB solutions—design, fabrication, panels, and erection with single-point responsibility.',
    products: ['peb'],
    categories: ['pricing'],
    keywords: ['peb cost per sq ft', 'peb construction cost india', 'pre engineered building cost', 'peb shed price'],
  },
  {
    id: 'peb-3',
    question: 'What is the maximum span of PEB without columns?',
    answer: 'PHOENIXX PEB structures can achieve column-free spans up to 90 meters for special applications. Standard economical spans: (1) 20-30 METERS: Most cost-effective for general warehouses, (2) 30-45 METERS: Large manufacturing, logistics hubs, (3) 45-60 METERS: Aircraft hangars, indoor sports facilities, (4) 60-90 METERS: Special structures with optimized design. Span affects cost—wider spans require heavier sections. Our design team optimizes span vs cost based on your operational requirements. Multi-span buildings with internal columns are more economical for very large facilities.',
    products: ['peb'],
    categories: ['technical'],
    keywords: ['peb span', 'peb clear span', 'column free span', 'peb maximum span'],
  },
  {
    id: 'peb-4',
    question: 'How long does it take to construct a PEB building?',
    answer: 'PEB construction timelines are significantly faster than conventional: (1) DESIGN & ENGINEERING: 2-4 weeks, (2) FABRICATION: 4-8 weeks depending on tonnage, (3) SITE ERECTION: 4-12 weeks depending on size. Total project timeline examples: 5,000 sq.ft shed: 8-10 weeks, 20,000 sq.ft warehouse: 12-16 weeks, 50,000 sq.ft facility: 16-24 weeks. PEB is 40-60% faster than conventional construction because foundation work can proceed while fabrication happens, and site assembly is bolt-together without welding delays.',
    products: ['peb'],
    categories: ['logistics'],
    keywords: ['peb construction time', 'peb building timeline', 'how long to build peb'],
  },

  // ========== INSTALLATION ==========
  {
    id: 'inst-1',
    question: 'How are PUF panels installed? What is the installation process?',
    answer: 'PUF panel installation follows these steps: (1) PREPARATION: Structure ready, clean, level surfaces, accessories staged, (2) WALL PANELS: Start from corner, install first panel plumb, subsequent panels interlock with sealant in joints, (3) ROOF PANELS: Install from eave to ridge, maintain alignment, seal all joints, (4) ACCESSORIES: Install flashings, trims, gutters, downpipes, (5) SEALING: Apply sealant at all joints, penetrations, and edges, (6) FINISHING: Install doors, windows, ventilators. PHOENIXX provides detailed installation manuals, on-site training, and technical supervision. Typical installation rate: 200-400 sq.m per day with trained crew.',
    products: ['puf-panels', 'pir-panels', 'roofing-panels'],
    categories: ['installation'],
    keywords: ['puf panel installation', 'how to install sandwich panel', 'panel installation process'],
  },
  {
    id: 'inst-2',
    question: 'Can I install PUF panels myself or do I need specialists?',
    answer: 'While PUF panel installation is straightforward, we strongly recommend trained installers: (1) WHY SPECIALISTS: Proper sealing prevents leaks, correct fastening prevents wind damage, warranty requires proper installation, (2) PHOENIXX OPTIONS: We provide trained installation teams pan-India, we train your contractors on our systems, we provide supervision while you install. (3) TYPICAL CREW: 4-6 skilled workers can install 200-400 sq.m/day. (4) TOOLS NEEDED: Lifting equipment, sealant guns, drilling machines, safety equipment. Contact us for installation support options and contractor training programs.',
    products: ['puf-panels', 'pir-panels'],
    categories: ['installation'],
    keywords: ['puf panel installation team', 'sandwich panel installer', 'do i need specialist installer'],
  },
  {
    id: 'inst-3',
    question: 'How long does cold storage construction take?',
    answer: 'Cold storage construction timeline depends on size and complexity: (1) SMALL COLD ROOM (Under 500 sq.ft): 2-4 weeks, (2) MEDIUM COLD STORAGE (500-5,000 sq.ft): 6-10 weeks, (3) LARGE COLD WAREHOUSE (5,000-20,000 sq.ft): 12-20 weeks, (4) MEGA COLD STORAGE (20,000+ sq.ft): 20-40 weeks. Timeline includes: civil work, panel installation, refrigeration installation, electrical, insulated doors, commissioning, and temperature validation. PHOENIXX manages complete EPC projects with single-point accountability. We provide detailed project schedules with milestone tracking.',
    products: ['cold-storage'],
    categories: ['installation', 'logistics'],
    keywords: ['cold storage construction time', 'cold room installation time', 'how long to build cold storage'],
  },

  // ========== COMPLIANCE & CERTIFICATIONS ==========
  {
    id: 'comp-cert-1',
    question: 'What certifications do PHOENIXX panels have?',
    answer: 'PHOENIXX panels carry comprehensive certifications: (1) FIRE TESTING: Class B-s1,d0 (PIR), tested per EN 13501-1, IS 3837, (2) FM APPROVAL: FM 4880/4881 approved panels for insurance compliance, (3) THERMAL TESTING: Thermal conductivity tested per IS 3346, ASTM C518, (4) STRUCTURAL: Load testing per EN 14509 for span tables, (5) ENVIRONMENTAL: CFC/HCFC free, RoHS compliant, (6) QUALITY SYSTEMS: ISO 9001:2015 certified manufacturing. We provide test certificates, material certificates, and compliance documentation for all projects.',
    products: ['puf-panels', 'pir-panels', 'rockwool-panels'],
    categories: ['compliance'],
    keywords: ['puf panel certification', 'sandwich panel testing', 'fm approved panels', 'panel compliance'],
  },
  {
    id: 'comp-cert-2',
    question: 'Are PHOENIXX products ISO certified?',
    answer: 'Yes, PHOENIXX maintains comprehensive ISO certifications: (1) ISO 9001:2015: Quality Management System—ensures consistent product quality, (2) ISO 14001:2015: Environmental Management—sustainable manufacturing practices, (3) ISO 45001:2018: Occupational Health & Safety—safe working conditions. Our manufacturing processes follow documented procedures with regular internal audits and third-party surveillance. We also support client projects requiring specific certifications like LEED (green building), IGBC, and GRIHA with appropriate documentation.',
    products: ['puf-panels', 'pir-panels', 'cleanroom', 'doors'],
    categories: ['compliance'],
    keywords: ['phoenixx iso certification', 'iso 9001 panels', 'quality certification'],
  },

  // ========== WARRANTY & SUPPORT ==========
  {
    id: 'warr-1',
    question: 'What warranty does PHOENIXX provide on panels?',
    answer: 'PHOENIXX provides comprehensive warranties: (1) INSULATION CORE: 10-15 years warranty on thermal performance—core maintains R-value, (2) SURFACE COATING: 5-10 years on paint finish depending on coating type (longer for PVDF), (3) STRUCTURAL: 5 years on panel integrity and joint systems, (4) MANUFACTURING DEFECTS: Covered under standard warranty. Warranty conditions: proper installation per our guidelines, normal use and maintenance, no physical damage or chemical exposure. Extended warranties available for premium projects. We maintain warranty records and respond to claims within 7 days.',
    products: ['puf-panels', 'pir-panels', 'rockwool-panels'],
    categories: ['warranty'],
    keywords: ['puf panel warranty', 'sandwich panel guarantee', 'insulation warranty'],
  },
  {
    id: 'warr-2',
    question: 'Does PHOENIXX provide after-sales support?',
    answer: 'Yes, PHOENIXX provides comprehensive after-sales support: (1) TECHNICAL HELPLINE: Dedicated support for installation queries and troubleshooting, (2) SITE VISITS: Technical team available for on-site assessment when needed, (3) SPARE PARTS: Replacement panels, accessories, and hardware readily available, (4) MAINTENANCE GUIDANCE: Detailed maintenance manuals and recommended schedules, (5) WARRANTY SERVICE: Prompt response to warranty claims with replacement/repair, (6) DOCUMENTATION: As-built drawings, test certificates, O&M manuals provided. Contact us at +91 97277 00442 or projects@phoenixxsmartbuild.com for support.',
    products: ['puf-panels', 'pir-panels', 'cold-storage', 'cleanroom'],
    categories: ['warranty'],
    keywords: ['phoenixx support', 'after sales service', 'panel maintenance support'],
  },

  // ========== LOGISTICS & DELIVERY ==========
  {
    id: 'log-1',
    question: 'What is the delivery time for PUF panels?',
    answer: 'PHOENIXX panel delivery times: (1) STANDARD PRODUCTS (Stock colors/sizes): 7-14 days from order confirmation, (2) CUSTOM ORDERS (Special colors/lengths): 14-21 days, (3) LARGE PROJECTS (>5000 sq.m): Scheduled deliveries per project plan, (4) URGENT REQUIREMENTS: Fast-track available at premium. Delivery factors: order quantity, customization level, current production load, destination. We deliver pan-India with our logistics network. For project orders, we provide delivery schedules matching your installation plan to avoid site storage issues.',
    products: ['puf-panels', 'pir-panels', 'rockwool-panels'],
    categories: ['logistics'],
    keywords: ['puf panel delivery time', 'sandwich panel lead time', 'panel delivery'],
  },
  {
    id: 'log-2',
    question: 'Does PHOENIXX deliver panels across India?',
    answer: 'Yes, PHOENIXX delivers pan-India from our manufacturing facility in Gujarat. Delivery coverage: (1) GUJARAT, MAHARASHTRA, RAJASTHAN: 2-4 days, (2) NORTH INDIA (Delhi NCR, UP, Punjab): 4-6 days, (3) SOUTH INDIA (Karnataka, Tamil Nadu, Kerala): 5-8 days, (4) EAST INDIA (West Bengal, Odisha): 5-7 days, (5) NORTHEAST: 7-10 days. We use dedicated trucks for panel transport to prevent damage. Delivery includes unloading assistance and material verification. Freight charges depend on destination and quantity—included in project quotations.',
    products: ['puf-panels', 'pir-panels', 'doors', 'cold-storage'],
    categories: ['logistics'],
    keywords: ['pan india delivery', 'puf panel delivery all india', 'phoenixx delivery'],
  },
  {
    id: 'log-3',
    question: 'How are panels transported without damage?',
    answer: 'PHOENIXX ensures damage-free delivery through: (1) PACKAGING: Panels bundled with protective interleaving, edges protected, wrapped in plastic, (2) LOADING: Horizontal stacking with dunnage, maximum stack heights followed, (3) TRANSPORT: Dedicated closed trucks, air-ride suspension for long distance, (4) ROUTE PLANNING: Avoid rough roads where possible, (5) UNLOADING: Proper lifting equipment required—cranes/forklifts, no dragging. (6) INSPECTION: Joint verification at delivery with photographic documentation. Minor transit damage is rare (<1% of deliveries) and covered under our transit insurance.',
    products: ['puf-panels', 'pir-panels'],
    categories: ['logistics'],
    keywords: ['panel transport', 'sandwich panel shipping', 'panel packaging'],
  },

  // ========== PRICING & COMMERCIAL ==========
  {
    id: 'price-1',
    question: 'How do I get a quotation from PHOENIXX?',
    answer: 'Getting a PHOENIXX quotation is easy: (1) ONLINE: Fill the "Get a Quote" form on our website with project details, (2) EMAIL: Send requirements to projects@phoenixxsmartbuild.com, (3) PHONE: Call +91 97277 00442 or +91 93289 15237, (4) WHATSAPP: Message us at +91 97277 00442. Information needed for accurate quote: project type, approximate area (sq.m/sq.ft), panel type required, desired thickness, any specific requirements (fire rating, color, etc.), project location, timeline. We typically respond with quotations within 24-48 hours.',
    products: ['puf-panels', 'pir-panels', 'cold-storage', 'cleanroom', 'peb'],
    categories: ['pricing'],
    keywords: ['get quote', 'phoenixx quotation', 'request quote', 'panel pricing'],
  },
  {
    id: 'price-2',
    question: 'What are the payment terms for PHOENIXX products?',
    answer: 'PHOENIXX offers flexible payment terms: (1) PRODUCT ORDERS: 50% advance with order, 50% before dispatch (standard), (2) PROJECT ORDERS: Milestone-based payments—typically 30% mobilization, progress payments, 10% retention, (3) CREDIT TERMS: 15-30 day credit available for established customers with approved credit limits, (4) BANK GUARANTEE: Accepted in lieu of advance for large projects. All payments via bank transfer/NEFT/RTGS. GST invoices provided. We discuss payment terms during quotation finalization to match your project cash flow requirements.',
    products: ['puf-panels', 'pir-panels', 'cold-storage', 'cleanroom'],
    categories: ['pricing'],
    keywords: ['payment terms', 'phoenixx payment', 'advance payment', 'credit terms'],
  },

  // ========== TURNKEY PROJECTS ==========
  {
    id: 'turn-1',
    question: 'Does PHOENIXX execute turnkey projects?',
    answer: 'Yes, PHOENIXX is a complete EPC (Engineering, Procurement, Construction) solutions provider: (1) COLD STORAGE: Complete facility from civil to commissioning, (2) CLEANROOMS: Design through validation, (3) PEB BUILDINGS: Structure plus cladding, (4) FOOD PROCESSING UNITS: Temperature-controlled production facilities, (5) PHARMA FACILITIES: GMP-compliant manufacturing infrastructure. Turnkey scope includes: design, civil works, structural steel, insulated panels, doors, HVAC/refrigeration, electrical, flooring, and commissioning. Single-point responsibility with guaranteed timelines and performance.',
    products: ['turnkey', 'cold-storage', 'cleanroom', 'peb'],
    categories: ['use-cases'],
    keywords: ['turnkey project', 'epc contractor', 'design build', 'complete solution'],
  },
  {
    id: 'turn-2',
    question: 'What industries does PHOENIXX serve?',
    answer: 'PHOENIXX serves diverse industries with specialized solutions: (1) PHARMACEUTICAL: Cleanrooms, cold chain, GMP facilities, (2) FOOD PROCESSING: Cold storage, hygienic processing areas, (3) DAIRY: Milk chilling, processing plants, cold storage, (4) LOGISTICS: Warehouses, distribution centers, cold chain hubs, (5) AGRICULTURE: Pack houses, ripening chambers, seed storage, (6) HEALTHCARE: Operation theaters, laboratories, blood banks, (7) ELECTRONICS: ESD-safe cleanrooms, controlled environments, (8) MANUFACTURING: Factory buildings, process areas. Our cross-industry experience enables optimized solutions for specific requirements.',
    products: ['turnkey', 'cold-storage', 'cleanroom', 'peb'],
    categories: ['use-cases'],
    keywords: ['phoenixx industries', 'sectors served', 'industrial solutions'],
  },

  // ========== ADDITIONAL TECHNICAL ==========
  {
    id: 'tech-1',
    question: 'What is the R-value and U-value of insulated panels?',
    answer: 'R-value (thermal resistance) and U-value (thermal transmittance) measure insulation performance—higher R-value and lower U-value mean better insulation. PHOENIXX panel values: PUF 50mm: R-2.08 m²K/W, U-0.48 W/m²K, PUF 80mm: R-3.33 m²K/W, U-0.30 W/m²K, PUF 100mm: R-4.17 m²K/W, U-0.24 W/m²K, PIR 100mm: R-4.55 m²K/W, U-0.22 W/m²K. These values help HVAC engineers calculate heat load and specify refrigeration/air conditioning capacity. We provide detailed thermal calculations for project-specific requirements.',
    products: ['puf-panels', 'pir-panels'],
    categories: ['technical'],
    keywords: ['r value', 'u value', 'thermal resistance', 'insulation value', 'k value'],
  },
  {
    id: 'tech-2',
    question: 'What is the density of PUF panel core?',
    answer: 'PHOENIXX PUF panel core density is 40 ± 2 kg/m³, which is the optimal density for insulation performance. Density significance: (1) TOO LOW (<35 kg/m³): Poor compressive strength, may deform under load, (2) OPTIMAL (38-42 kg/m³): Best balance of insulation, strength, and cost, (3) TOO HIGH (>45 kg/m³): Marginally better strength but higher cost, no insulation benefit. Our manufacturing process ensures consistent density throughout the panel. Density is tested per IS 3346 and certified for each production batch.',
    products: ['puf-panels'],
    categories: ['technical'],
    keywords: ['puf density', 'foam density', 'panel core density'],
  },
  {
    id: 'tech-3',
    question: 'Can PUF panels be used for external walls exposed to sun?',
    answer: 'Yes, PHOENIXX PUF panels are excellent for external sun-exposed walls: (1) HEAT REFLECTION: Light colors (white, off-white) reflect solar radiation, (2) INSULATION: PUF core prevents heat transfer to interior, (3) UV PROTECTION: PVDF or SMP coatings resist UV degradation, (4) TEMPERATURE RANGE: Panels withstand -40°C to +80°C ambient. For best performance in hot climates: choose light colors, specify PVDF coating for longevity, ensure adequate ventilation behind panels, use proper flashings. Our thermal calculations account for solar heat gain for HVAC sizing.',
    products: ['puf-panels', 'pir-panels'],
    categories: ['technical', 'use-cases'],
    keywords: ['external wall panel', 'sun exposed panel', 'heat resistant panel', 'outdoor panel'],
  },
  {
    id: 'tech-4',
    question: 'What is the sound insulation value of sandwich panels?',
    answer: 'Sandwich panel acoustic performance varies by type: (1) PUF PANELS: Sound reduction of 25-28 dB—adequate for general industrial use, (2) PIR PANELS: Similar to PUF—25-28 dB, (3) ROCKWOOL PANELS: Excellent at 32-45 dB—best for acoustic applications. For enhanced sound insulation with PUF/PIR: use thicker panels (more mass), add acoustic underlays, double-wall construction for critical areas. Rockwool panels are recommended for generator rooms, compressor enclosures, and noise-sensitive facilities. We provide acoustic calculations for specific requirements.',
    products: ['puf-panels', 'rockwool-panels'],
    categories: ['technical'],
    keywords: ['sound insulation', 'acoustic panel', 'noise reduction', 'db rating panel'],
  },
  {
    id: 'tech-5',
    question: 'Are PUF panels environmentally friendly?',
    answer: 'PHOENIXX PUF panels have strong environmental credentials: (1) BLOWING AGENTS: CFC and HCFC free—zero ozone depletion potential, (2) ENERGY SAVINGS: Reduced HVAC energy consumption over building life, (3) LONGEVITY: 25-30 year lifespan reduces replacement cycles, (4) RECYCLABILITY: Steel skins are 100% recyclable, core can be used for lower-grade insulation, (5) MANUFACTURING: ISO 14001 certified environmental management. PUF panels contribute to green building certifications (LEED, IGBC, GRIHA) through energy efficiency credits. We provide environmental documentation for sustainable building projects.',
    products: ['puf-panels', 'pir-panels'],
    categories: ['compliance', 'technical'],
    keywords: ['eco friendly panels', 'green building panel', 'sustainable insulation', 'leed panels'],
  },
];

// ============================================================================
// FAQ PAGE COMPONENT
// ============================================================================

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());

  // Filter FAQs based on search and filters
  const filteredFAQs = useMemo(() => {
    return comprehensiveFAQs.filter((faq) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = searchQuery === '' ||
        faq.question.toLowerCase().includes(searchLower) ||
        faq.answer.toLowerCase().includes(searchLower) ||
        faq.keywords.some(k => k.toLowerCase().includes(searchLower));

      // Product filter
      const matchesProduct = selectedProduct === 'all' ||
        faq.products.includes(selectedProduct);

      // Category filter
      const matchesCategory = selectedCategory === 'all' ||
        faq.categories.includes(selectedCategory);

      return matchesSearch && matchesProduct && matchesCategory;
    });
  }, [searchQuery, selectedProduct, selectedCategory]);

  // Group FAQs by category for display
  const groupedFAQs = useMemo(() => {
    const groups: Record<string, FAQ[]> = {};
    
    filteredFAQs.forEach((faq) => {
      const primaryCategory = faq.categories[0] || 'general';
      if (!groups[primaryCategory]) {
        groups[primaryCategory] = [];
      }
      groups[primaryCategory].push(faq);
    });

    return groups;
  }, [filteredFAQs]);

  // Get category display name
  const getCategoryDisplayName = (categoryId: string): string => {
    const category = categoryFilters.find(c => c.id === categoryId);
    return category ? category.label : categoryId;
  };

  // Toggle FAQ expansion
  const toggleFAQ = (id: string) => {
    setExpandedFAQs(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Expand all
  const expandAll = () => {
    setExpandedFAQs(new Set(filteredFAQs.map(f => f.id)));
  };

  // Collapse all
  const collapseAll = () => {
    setExpandedFAQs(new Set());
  };

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedProduct('all');
    setSelectedCategory('all');
  };

  // Generate FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comprehensiveFAQs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* FAQ Schema */}
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">/</span>
              <span className="text-white">FAQ</span>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                📚 Knowledge Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl">
                Your comprehensive guide to industrial insulation, cold storage, cleanrooms, and pre-engineered buildings. 
                Find expert answers to {comprehensiveFAQs.length}+ questions from India&apos;s leading SmartBuild manufacturer.
              </p>

              {/* Quick Stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-2xl">📋</span>
                  <span><strong className="text-white">{comprehensiveFAQs.length}</strong> Expert FAQs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-2xl">📦</span>
                  <span><strong className="text-white">{productFilters.length - 1}</strong> Product Categories</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-2xl">🏷️</span>
                  <span><strong className="text-white">{categoryFilters.length - 1}</strong> Topic Areas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="container-custom py-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-4">
              <input
                type="text"
                placeholder="Search FAQs... (e.g., 'PUF panel price', 'cold storage temperature', 'fire rating')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-4 pl-12 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 outline-none transition-all text-lg"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Filter Tabs - Product */}
            <div className="mb-3">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate-600">Filter by Product:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {productFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedProduct(filter.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedProduct === filter.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span className="mr-1">{filter.icon}</span>
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filter Tabs - Category */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-slate-600">Filter by Topic:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedCategory(filter.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === filter.id
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    <span className="mr-1">{filter.icon}</span>
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results Summary & Actions */}
        <section className="bg-slate-50 border-b border-slate-200">
          <div className="container-custom py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="text-slate-600">
                Showing <strong className="text-slate-900">{filteredFAQs.length}</strong> of {comprehensiveFAQs.length} FAQs
                {(selectedProduct !== 'all' || selectedCategory !== 'all' || searchQuery) && (
                  <button
                    onClick={clearFilters}
                    className="ml-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Clear filters ×
                  </button>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-white rounded-lg border border-slate-200 hover:border-slate-300 transition-all"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">No FAQs Found</h3>
                  <p className="text-slate-600 mb-6">
                    Try adjusting your search or filters to find what you&apos;re looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="space-y-10">
                  {Object.entries(groupedFAQs).map(([categoryId, faqs]) => (
                    <div key={categoryId} id={categoryId}>
                      <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b-2 border-slate-200 flex items-center gap-3">
                        <span className="text-2xl">
                          {categoryFilters.find(c => c.id === categoryId)?.icon || '📋'}
                        </span>
                        {getCategoryDisplayName(categoryId)}
                        <span className="text-sm font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                          {faqs.length} questions
                        </span>
                      </h2>
                      <div className="space-y-3">
                        {faqs.map((faq) => (
                          <div
                            key={faq.id}
                            className="rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-slate-300 hover:shadow-md transition-all"
                          >
                            <button
                              onClick={() => toggleFAQ(faq.id)}
                              className="w-full flex items-start justify-between cursor-pointer p-5 md:p-6 text-left"
                            >
                              <h3 className="font-semibold text-slate-900 pr-4 text-base md:text-lg leading-snug">
                                {faq.question}
                              </h3>
                              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                                expandedFAQs.has(faq.id) 
                                  ? 'bg-blue-600 text-white rotate-180' 
                                  : 'bg-slate-100 text-slate-500'
                              }`}>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </span>
                            </button>
                            {expandedFAQs.has(faq.id) && (
                              <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-2">
                                <div className="pt-4 border-t border-slate-100">
                                  <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                                    {faq.answer}
                                  </p>
                                  {/* Tags */}
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {faq.products.map(p => (
                                      <span 
                                        key={p} 
                                        className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-full cursor-pointer hover:bg-blue-100"
                                        onClick={() => setSelectedProduct(p)}
                                      >
                                        {productFilters.find(pf => pf.id === p)?.label || p}
                                      </span>
                                    ))}
                                    {faq.categories.map(c => (
                                      <span 
                                        key={c} 
                                        className="px-2 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 rounded-full cursor-pointer hover:bg-emerald-100"
                                        onClick={() => setSelectedCategory(c)}
                                      >
                                        {categoryFilters.find(cf => cf.id === c)?.label || c}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Browse by Topic
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {categoryFilters.filter(c => c.id !== 'all').map((category) => {
                const count = comprehensiveFAQs.filter(f => f.categories.includes(category.id)).length;
                return (
                  <button
                    key={category.id}
                    onClick={() => {
                      setSelectedCategory(category.id);
                      window.scrollTo({ top: 400, behavior: 'smooth' });
                    }}
                    className="p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all text-center group"
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {category.icon}
                    </div>
                    <div className="font-semibold text-slate-900 text-sm">{category.label}</div>
                    <div className="text-xs text-slate-500 mt-1">{count} FAQs</div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Products Quick Links */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Explore Our Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Link
                href="/products/sandwich-panels/sandwich-puf-panel"
                className="p-5 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-3xl mb-2">🧱</div>
                <div className="font-semibold text-slate-900">PUF Panels</div>
                <div className="text-xs text-blue-600 mt-1 group-hover:underline">View Product →</div>
              </Link>
              <Link
                href="/products/sandwich-panels/pir-panel"
                className="p-5 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-3xl mb-2">🔥</div>
                <div className="font-semibold text-slate-900">PIR Panels</div>
                <div className="text-xs text-orange-600 mt-1 group-hover:underline">View Product →</div>
              </Link>
              <Link
                href="/solutions/cold-storage-construction"
                className="p-5 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-xl border border-cyan-200 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-3xl mb-2">❄️</div>
                <div className="font-semibold text-slate-900">Cold Storage</div>
                <div className="text-xs text-cyan-600 mt-1 group-hover:underline">View Solution →</div>
              </Link>
              <Link
                href="/products/cleanroom-solutions"
                className="p-5 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl border border-emerald-200 hover:shadow-lg transition-all text-center group"
              >
                <div className="text-3xl mb-2">🧪</div>
                <div className="font-semibold text-slate-900">Cleanrooms</div>
                <div className="text-xs text-emerald-600 mt-1 group-hover:underline">View Products →</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
                💬 Still Have Questions?
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Can&apos;t Find What You&apos;re Looking For?
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Our technical experts are ready to help. Get personalized assistance for your specific project requirements.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all"
                >
                  📞 Contact Our Experts
                </Link>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  📋 Get a Free Quote
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <span className="text-lg">📱</span>
                  <a href="tel:+919727700442" className="hover:text-white transition-colors">+91 97277 00442</a>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">📧</span>
                  <a href="mailto:projects@phoenixxsmartbuild.com" className="hover:text-white transition-colors">projects@phoenixxsmartbuild.com</a>
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-lg">💬</span>
                  <a href="https://wa.me/919727700442" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
