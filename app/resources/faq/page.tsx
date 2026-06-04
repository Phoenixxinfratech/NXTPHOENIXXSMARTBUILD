'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

// ============================================================================
// FAQ HUB - SEO & AI OPTIMIZED
// ============================================================================
// 
// FAQ SCHEMA STRATEGY NOTE:
// 
// This page intentionally does NOT include FAQPage schema markup.
// 
// Instead, FAQs should be distributed with schema markup on their native pages:
// - Product FAQs → respective product pages (/products/sandwich-panels/*)
// - Cold storage FAQs → /solutions/cold-storage-construction
// - Location FAQs → city landing pages (/puf-panel-manufacturer-in-ahmedabad)
// - Technical FAQs → relevant blog posts
// 
// This approach:
// 1. Avoids schema dilution from 50+ FAQs on one page
// 2. Helps individual product pages rank for FAQ queries
// 3. Provides better context signals to Google
// 4. Prevents keyword cannibalization
// 
// This page serves as an INDEX and AUTHORITY FEEDER to money pages.
// ============================================================================

// FAQ Interface with internal link support
interface FAQ {
  id: string;
  question: string;
  answer: string;
  linkText: string;
  linkHref: string;
}

// ============================================================================
// SECTION 1: PUF PANEL FAQs
// ============================================================================
const pufPanelFAQs: FAQ[] = [
  {
    id: 'puf-1',
    question: 'What is a PUF panel and how does polyurethane foam insulation work in industrial buildings?',
    answer: 'A PUF panel is a factory-manufactured insulated sandwich panel with a rigid polyurethane foam core between two metal sheets. The closed-cell foam provides thermal conductivity of 0.024 W/mK, significantly reducing heat transfer between indoor and outdoor environments. PUF panels are standard for warehouses, cold storage, and cleanrooms.',
    linkText: 'View PUF panel specifications',
    linkHref: '/products/sandwich-panels/sandwich-puf-panel',
  },
  {
    id: 'puf-2',
    question: 'What is the current price of PUF panels per square foot in India for 2025?',
    answer: 'PUF panel prices in India range from ₹80-180 per square foot depending on thickness (40mm-150mm), steel gauge (0.35mm-0.60mm), and coating type. A standard 50mm PUF wall panel with 0.5mm PPGI costs approximately ₹110-130 per sq.ft. Bulk orders and project-specific requirements affect final pricing.',
    linkText: 'Get current pricing',
    linkHref: '/get-a-quote',
  },
  {
    id: 'puf-3',
    question: 'What thickness of PUF panel is recommended for cold storage at -25 degrees Celsius?',
    answer: 'For frozen storage at -18°C to -25°C, 100-120mm PUF panels are recommended. Chilled storage (+2°C to +8°C) requires 60-80mm, while deep freeze (-35°C to -40°C) needs 120-150mm thickness. Proper thickness prevents condensation, reduces energy consumption, and maintains temperature stability.',
    linkText: 'Cold storage panel guide',
    linkHref: '/solutions/cold-storage-construction',
  },
  {
    id: 'puf-4',
    question: 'What is the expected lifespan of PUF sandwich panels in industrial applications?',
    answer: 'PUF panels have a service life of 25-30 years when properly installed and maintained. Lifespan depends on installation quality, environmental exposure, and coating type—PVDF coatings last longer than polyester. The PUF core maintains insulation properties throughout the panel life with minimal degradation.',
    linkText: 'Panel warranty details',
    linkHref: '/resources/faq#warranty',
  },
  {
    id: 'puf-5',
    question: 'Are PUF panels waterproof and suitable for heavy monsoon regions in India?',
    answer: 'Yes, PUF panels are waterproof when properly installed. The closed-cell polyurethane core has zero water absorption, and factory-applied interlocking joints with sealant create a watertight envelope. Panels withstand heavy monsoons, high humidity, and temperatures from -40°C to +80°C.',
    linkText: 'Roofing panel options',
    linkHref: '/products/sandwich-panels/roofing-puf-panel',
  },
];

// ============================================================================
// SECTION 2: PANEL COMPARISON FAQs
// ============================================================================
const comparisonFAQs: FAQ[] = [
  {
    id: 'comp-1',
    question: 'What is the difference between PUF and PIR panels for industrial insulation?',
    answer: 'PIR panels achieve Class B-s1,d0 fire rating versus PUF\'s Class C/D rating, with better thermal performance (0.022 vs 0.024 W/mK). PIR produces 60% less smoke during fire and withstands 150°C versus PUF\'s 100°C. PUF costs 15-20% less. Choose PIR for pharma and fire-sensitive applications.',
    linkText: 'Compare PIR panels',
    linkHref: '/products/sandwich-panels/pir-panel',
  },
  {
    id: 'comp-2',
    question: 'PUF panel vs Rockwool panel - which provides better fire safety and insulation?',
    answer: 'Rockwool panels offer A1 non-combustible fire rating and 45dB acoustic insulation, while PUF provides better thermal performance (0.024 vs 0.035 W/mK) at lower cost. Rockwool is mandatory for FM Global compliance and fire-critical areas. PUF suits general insulation and cold storage applications.',
    linkText: 'Rockwool panel specifications',
    linkHref: '/products/sandwich-panels/rockwool-panel',
  },
  {
    id: 'comp-3',
    question: 'Are PUF panels better than traditional brick walls for factory construction?',
    answer: 'For industrial buildings, PUF panels offer 60-70% faster construction, 10x better thermal insulation (R-value), 90% lighter weight, and 20-30% cost savings compared to brick. Factory-made panels ensure consistent quality. Brick remains suitable for permanent structures requiring mass and traditional aesthetics.',
    linkText: 'PEB building solutions',
    linkHref: '/solutions/peb',
  },
];

// ============================================================================
// SECTION 3: ROOFING PANEL FAQs
// ============================================================================
const roofingFAQs: FAQ[] = [
  {
    id: 'roof-1',
    question: 'What is a PUF roofing panel and how does it differ from wall panels?',
    answer: 'PUF roofing panels have trapezoidal ribbed profiles for water drainage, standing seam joints to prevent leaks, and are designed for minimum 5-7° roof pitch. Wall panels have flat surfaces. Roofing panels can span 3-4 meters between purlins and be manufactured up to 20 meters length.',
    linkText: 'Roofing panel details',
    linkHref: '/products/sandwich-panels/roofing-puf-panel',
  },
  {
    id: 'roof-2',
    question: 'What is the maximum purlin spacing for PUF roofing panels in warehouse construction?',
    answer: 'PUF roofing panels can span 3-4 meters between purlins depending on thickness, design loads, and profile geometry. Thicker panels (100mm) span more than 50mm panels. Longer spans mean fewer purlins and reduced structural steel weight. Engineers calculate project-specific span tables based on loading conditions.',
    linkText: 'Technical specifications',
    linkHref: '/resources/technical-sheet',
  },
  {
    id: 'roof-3',
    question: 'Can PUF roofing panels withstand cyclonic winds and heavy rainfall?',
    answer: 'Yes, PUF roofing panels are tested for wind speeds up to 120 km/h. Trapezoidal profiles ensure quick water drainage, interlocking joints with sealant prevent leaks, and concealed fastening systems prevent wind uplift. UV-resistant coatings and anti-condensation fleece options enhance durability.',
    linkText: 'Installation guidelines',
    linkHref: '/resources/blogs/puf-panel-installation-cost',
  },
];

// ============================================================================
// SECTION 4: ROCKWOOL & FIRE-RATED PANEL FAQs
// ============================================================================
const rockwoolFAQs: FAQ[] = [
  {
    id: 'rock-1',
    question: 'What is a Rockwool panel and what materials is it made from?',
    answer: 'Rockwool panels contain compressed mineral wool insulation from volcanic basalt rock melted at 1500°C and spun into fibers, bonded between metal sheets. Properties include A1/A2 non-combustible fire rating, 45dB sound reduction, and temperature resistance up to 1000°C. Thermal conductivity is 0.035-0.040 W/mK.',
    linkText: 'Rockwool panel range',
    linkHref: '/products/sandwich-panels/rockwool-panel',
  },
  {
    id: 'rock-2',
    question: 'What is the price of Rockwool panels per square foot in India?',
    answer: 'Rockwool panel prices range from ₹150-280 per square foot, 30-50% higher than PUF. Price depends on core density (80-150 kg/m³), thickness (50-150mm), and steel specification. An 80mm panel with 100 kg/m³ density costs approximately ₹180-220/sq.ft. Premium justified for fire-critical applications.',
    linkText: 'Request quotation',
    linkHref: '/get-a-quote',
  },
  {
    id: 'rock-3',
    question: 'When should I choose Rockwool panels instead of PUF panels?',
    answer: 'Use Rockwool for high fire risk areas, FM Global insured facilities, acoustic enclosures (generator rooms), applications near heat sources exceeding 100°C, and buildings requiring non-combustible materials by code. For general cold storage and standard industrial buildings, PUF or PIR offers better thermal value.',
    linkText: 'Fire safety solutions',
    linkHref: '/resources/blogs/fire-safety-industrial-buildings',
  },
];

// ============================================================================
// SECTION 5: PIR & FM APPROVED PANEL FAQs
// ============================================================================
const pirFAQs: FAQ[] = [
  {
    id: 'pir-1',
    question: 'What is a PIR panel and why is it considered fire-rated for pharmaceutical facilities?',
    answer: 'PIR (Polyisocyanurate) panels achieve Class B-s1,d0 European fire classification with self-extinguishing properties, very low smoke emission (s1), and no flaming droplets (d0). The modified chemical structure creates protective carbon layers during fire. PIR is mandatory for pharma, food processing, and cold storage.',
    linkText: 'PIR panel specifications',
    linkHref: '/products/sandwich-panels/pir-panel',
  },
  {
    id: 'pir-2',
    question: 'What is the price difference between PIR panels and standard PUF panels?',
    answer: 'PIR panels cost ₹120-220 per square foot, approximately 15-25% higher than equivalent PUF panels. An 80mm PIR panel with 0.5mm PPGI costs ₹150-180/sq.ft. The premium is justified by superior fire safety, potential insurance benefits, and compliance with pharmaceutical facility requirements.',
    linkText: 'Compare panel pricing',
    linkHref: '/shop',
  },
  {
    id: 'pir-3',
    question: 'What does FM Approval mean for insulated panels and is it mandatory?',
    answer: 'FM Approval (Factory Mutual) indicates panels passed rigorous fire testing by FM Global. It is mandatory for FM Global insured facilities and may reduce insurance premiums by 10-30%. FM Approved panels are recommended for pharmaceutical plants, food processing, data centers, and high-value warehouses.',
    linkText: 'FM Approved options',
    linkHref: '/products/sandwich-panels/pir-panel',
  },
];

// ============================================================================
// SECTION 6: COLD STORAGE FAQs
// ============================================================================
const coldStorageFAQs: FAQ[] = [
  {
    id: 'cold-1',
    question: 'What is the total cost of building a cold storage facility in India per cubic foot?',
    answer: 'Cold storage construction costs ₹2,500-5,000 per cubic foot depending on temperature (-40°C costs 40-50% more than +4°C), size, structure type, refrigeration system, and flooring. A 5,000 MT capacity facility typically costs ₹8-15 crores including civil, panels, refrigeration, and electrical systems.',
    linkText: 'Cold storage solutions',
    linkHref: '/solutions/cold-storage-construction',
  },
  {
    id: 'cold-2',
    question: 'What temperature ranges can cold storage facilities achieve for different products?',
    answer: 'Cold storage covers: ambient controlled (+15°C to +25°C) for dry goods, chilled (+2°C to +8°C) for dairy and vegetables, frozen (-18°C to -25°C) for frozen foods, deep freeze (-35°C to -40°C) for seafood, and blast freezers (-35°C to -45°C) for rapid freezing applications.',
    linkText: 'Temperature zone guide',
    linkHref: '/solutions/cold-storage-construction',
  },
  {
    id: 'cold-3',
    question: 'How much electricity does a cold storage facility consume per metric ton?',
    answer: 'Electricity consumption varies by temperature: chilled storage (+4°C) uses 15-25 kWh per MT per day, frozen storage (-25°C) uses 40-60 kWh per MT per day. Better insulation (thicker panels) reduces power bills. Properly designed facilities achieve 20-30% lower energy costs than older installations.',
    linkText: 'Energy efficiency guide',
    linkHref: '/resources/blogs/optimizing-cold-storage-energy-efficiency',
  },
  {
    id: 'cold-4',
    question: 'What is the difference between a cold room and a cold storage warehouse?',
    answer: 'Cold rooms are smaller (under 500 MT), single-temperature walk-in units for hotels and retailers. Cold storage warehouses are large-scale (500-50,000+ MT) commercial facilities with multiple temperature zones, racking systems, and dock infrastructure for food processing and logistics operations.',
    linkText: 'Cold room solutions',
    linkHref: '/solutions/cold-storage-construction',
  },
  {
    id: 'cold-5',
    question: 'Which type of insulated panel is best for cold storage construction?',
    answer: 'PIR panels are recommended for most cold storage (+4°C to -25°C) due to excellent insulation and fire safety. For pharma cold chain, use PIR with SS inner face. Deep freeze (-40°C) requires 150mm+ PIR with vapor barrier. FM Approved PIR is mandatory for FM Global insured facilities.',
    linkText: 'Panel selection guide',
    linkHref: '/resources/blogs/choosing-right-insulated-panel',
  },
];

// ============================================================================
// SECTION 7: CLEANROOM FAQs
// ============================================================================
const cleanroomFAQs: FAQ[] = [
  {
    id: 'clean-1',
    question: 'What is a cleanroom and which industries require cleanroom facilities?',
    answer: 'A cleanroom is a controlled environment with regulated airborne particles, temperature, humidity, and pressure. Required industries: pharmaceutical (ISO 5-7), biotechnology (ISO 5-6), electronics/semiconductor (ISO 4-6), healthcare (ISO 5-7), aerospace (ISO 6-8), and aseptic food packaging (ISO 7-8).',
    linkText: 'Cleanroom solutions',
    linkHref: '/products/cleanroom-solutions',
  },
  {
    id: 'clean-2',
    question: 'What is the cost of cleanroom construction per square foot by ISO classification?',
    answer: 'Cleanroom costs vary by classification: ISO 8 costs ₹3,000-5,000/sq.ft, ISO 7 costs ₹5,000-8,000/sq.ft, ISO 6 costs ₹8,000-12,000/sq.ft, ISO 5 costs ₹12,000-20,000/sq.ft. Includes panels, HVAC, HEPA filters, flooring, doors, and basic validation. Process equipment is additional.',
    linkText: 'Get cleanroom quote',
    linkHref: '/get-a-quote',
  },
  {
    id: 'clean-3',
    question: 'What does ISO 7 cleanroom classification mean for pharmaceutical manufacturing?',
    answer: 'ISO 7 (Class 10,000) allows maximum 352,000 particles of 0.5 micron per cubic meter. It is the most common classification for pharmaceutical manufacturing, suitable for oral solid dosage, topicals, and many injectable operations. Lower ISO numbers indicate stricter particle limits.',
    linkText: 'Cleanroom design guide',
    linkHref: '/resources/blogs/cleanroom-design-best-practices',
  },
  {
    id: 'clean-4',
    question: 'Are cleanroom panels compliant with WHO-GMP and FDA requirements?',
    answer: 'Cleanroom panels meeting GMP/FDA requirements feature smooth non-porous surfaces, flush joints, coved corners, and seamless construction. Pharmaceutical-grade panels include food-safe coatings and stainless steel options for wet areas. Documentation includes Design Qualification and IQ/OQ/PQ protocols.',
    linkText: 'GMP-compliant panels',
    linkHref: '/products/cleanroom-solutions/cleanroom-partition',
  },
  {
    id: 'clean-5',
    question: 'What is the difference between cleanroom partitions and modular cleanroom systems?',
    answer: 'Cleanroom partitions are individual panel units forming walls. Modular cleanroom systems are complete wall assemblies including windows, pass-throughs, and door frames that are demountable for reconfiguration. Modular systems offer faster installation and future flexibility for changing production needs.',
    linkText: 'Partition options',
    linkHref: '/products/cleanroom-solutions/cleanroom-partition',
  },
];

// ============================================================================
// SECTION 8: INDUSTRIAL DOOR FAQs
// ============================================================================
const doorFAQs: FAQ[] = [
  {
    id: 'door-1',
    question: 'What types of industrial doors are available for cleanrooms and cold storage?',
    answer: 'Industrial door types include cleanroom doors (flush, GMP-compliant), fire-rated doors (30-120 minute ratings), cold storage doors (insulated, -40°C to +15°C), hermetic doors (airtight for pressure zones), rapid roll doors (high-speed logistics), and sectional overhead doors (loading docks).',
    linkText: 'Door product range',
    linkHref: '/products/doors',
  },
  {
    id: 'door-2',
    question: 'What does 120-minute fire rating mean for industrial fire doors?',
    answer: 'A 120-minute fire-rated door prevents fire and smoke passage for 2 hours during fire, allowing evacuation and firefighter access. Ratings indicate integrity duration: 30-minute for corridors, 60-minute for commercial use, 90-minute for stairwells, 120-minute for critical escape routes.',
    linkText: 'Fire door options',
    linkHref: '/products/doors/fire-door-emergency-exit',
  },
  {
    id: 'door-3',
    question: 'What is the price range for fire-rated doors in India by rating?',
    answer: 'Fire door prices: 30-minute rated ₹15,000-25,000, 60-minute rated ₹25,000-40,000, 90-minute rated ₹35,000-55,000, 120-minute rated ₹50,000-80,000 per door. Price varies by size, single vs double leaf, vision panel, and hardware specification. Installation is additional.',
    linkText: 'Request door pricing',
    linkHref: '/get-a-quote',
  },
  {
    id: 'door-4',
    question: 'What is the cost of automatic cleanroom doors for pharmaceutical facilities?',
    answer: 'Cleanroom door prices: manual hinged (GI) ₹20,000-35,000, manual SS304 ₹40,000-65,000, automatic sliding (GI) ₹80,000-1,20,000, automatic SS ₹1,20,000-1,80,000, hermetic airtight ₹1,50,000-2,50,000. Includes door, frame, hardware, and interlocks.',
    linkText: 'Cleanroom door options',
    linkHref: '/products/doors/cleanroom-door',
  },
  {
    id: 'door-5',
    question: 'What is the difference between cleanroom doors and hermetic doors?',
    answer: 'Cleanroom doors have flush surfaces with minimal air leakage for ISO 7/8 areas. Hermetic doors provide complete airtight sealing with inflatable gaskets maintaining strict pressure differentials (±50 Pa+), required for ISO 5/6 cleanrooms, operating theaters, and BSL laboratories.',
    linkText: 'Hermetic door specs',
    linkHref: '/products/doors/cleanroom-door',
  },
];

// ============================================================================
// SECTION 9: PEB BUILDING FAQs
// ============================================================================
const pebFAQs: FAQ[] = [
  {
    id: 'peb-1',
    question: 'What is a Pre-Engineered Building (PEB) and how is it constructed?',
    answer: 'PEB is a construction system where structural steel components are factory-designed, fabricated, and bolt-assembled on site without welding. Features include computer-optimized design, factory-controlled quality, 30-50% faster construction, 20-30% cost savings, and column-free spans up to 90 meters.',
    linkText: 'PEB solutions',
    linkHref: '/solutions/peb',
  },
  {
    id: 'peb-2',
    question: 'What is the cost of PEB construction per square foot for warehouses in India?',
    answer: 'PEB costs: basic shed (no insulation) ₹1,000-1,400/sq.ft, insulated building (PUF cladding) ₹1,400-1,800/sq.ft, cold storage/cleanroom grade ₹1,800-2,500/sq.ft. Price depends on span width, eave height, crane capacity, soil conditions, and location.',
    linkText: 'Get PEB estimate',
    linkHref: '/get-a-quote',
  },
  {
    id: 'peb-3',
    question: 'What is the maximum column-free span achievable with PEB structures?',
    answer: 'PEB structures achieve column-free spans up to 90 meters for special applications. Economical spans: 20-30m for warehouses, 30-45m for manufacturing, 45-60m for aircraft hangars, 60-90m for special structures. Wider spans require heavier sections affecting cost.',
    linkText: 'PEB engineering',
    linkHref: '/solutions/peb',
  },
  {
    id: 'peb-4',
    question: 'How long does PEB warehouse construction take compared to conventional building?',
    answer: 'PEB construction is 40-60% faster: design 2-4 weeks, fabrication 4-8 weeks, erection 4-12 weeks. A 5,000 sq.ft shed takes 8-10 weeks, 20,000 sq.ft warehouse 12-16 weeks, 50,000 sq.ft facility 16-24 weeks. Foundation work proceeds during fabrication.',
    linkText: 'Project timeline guide',
    linkHref: '/solutions/peb',
  },
];

// ============================================================================
// SECTION 10: PRICING, SUPPLY & INSTALLATION FAQs
// ============================================================================
const commercialFAQs: FAQ[] = [
  {
    id: 'inst-1',
    question: 'What is the installation process for PUF sandwich panels on industrial buildings?',
    answer: 'Installation steps: structure preparation, wall panels from corner with sealant in joints, roof panels from eave to ridge, accessories (flashings, trims, gutters), sealing at joints and penetrations, door/window installation. Typical rate: 200-400 sq.m per day with trained crew.',
    linkText: 'Installation guide',
    linkHref: '/resources/blogs/puf-panel-installation-cost',
  },
  {
    id: 'inst-2',
    question: 'Do I need specialized installers for PUF panel installation or can general contractors do it?',
    answer: 'Trained installers are recommended. Proper sealing prevents leaks, correct fastening prevents wind damage, and warranty requires proper installation. Options include manufacturer installation teams, contractor training programs, or supervised installation. A 4-6 person crew installs 200-400 sq.m daily.',
    linkText: 'Installation support',
    linkHref: '/contact-us',
  },
  {
    id: 'log-1',
    question: 'What is the delivery lead time for PUF panels across India?',
    answer: 'Delivery times: stock items 7-14 days, custom orders 14-21 days, large projects on scheduled basis. Gujarat/Maharashtra 2-4 days, North India 4-6 days, South India 5-8 days, East India 5-7 days, Northeast 7-10 days. Dedicated trucks prevent transit damage.',
    linkText: 'Delivery information',
    linkHref: '/contact-us',
  },
  {
    id: 'price-1',
    question: 'How do I request a quotation for PUF panels and what information is needed?',
    answer: 'Submit requirements via website form, email (projects@phoenixxsmartbuild.com), or call (+91 88665 56879). Provide: project type, area (sq.m/sq.ft), panel type, thickness, specific requirements (fire rating, color), location, and timeline. Quotations typically delivered within 24-48 hours.',
    linkText: 'Request quote now',
    linkHref: '/get-a-quote',
  },
  {
    id: 'price-2',
    question: 'What are the standard payment terms for industrial panel projects?',
    answer: 'Standard terms: 50% advance with order, 50% before dispatch. Project orders: 30% mobilization, progress payments, 10% retention. Credit terms (15-30 days) available for established customers. Bank guarantees accepted for large projects. GST invoices provided.',
    linkText: 'Contact sales team',
    linkHref: '/contact-us',
  },
  {
    id: 'warr-1',
    question: 'What warranty coverage is provided on insulated sandwich panels?',
    answer: 'Warranty coverage: insulation core 10-15 years on thermal performance, surface coating 5-10 years depending on type (longer for PVDF), structural integrity 5 years. Conditions: proper installation, normal use, no physical damage. Extended warranties available for premium projects.',
    linkText: 'Warranty policy',
    linkHref: '/business-terms',
  },
  {
    id: 'cert-1',
    question: 'What certifications and test reports are available for industrial panels?',
    answer: 'Available certifications: fire testing (Class B-s1,d0, EN 13501-1, IS 3837), FM 4880/4881 approval, thermal conductivity (IS 3346, ASTM C518), structural load testing (EN 14509), ISO 9001:2015, ISO 14001:2015. Test certificates provided for all projects.',
    linkText: 'Technical documentation',
    linkHref: '/resources/technical-sheet',
  },
];

// Section definitions for rendering
const faqSections = [
  { id: 'puf-panels', title: 'PUF Panel FAQs', subtitle: 'Polyurethane foam insulated sandwich panels', faqs: pufPanelFAQs },
  { id: 'panel-comparison', title: 'Panel Comparison FAQs', subtitle: 'PUF vs PIR vs Rockwool vs Brick', faqs: comparisonFAQs },
  { id: 'roofing-panels', title: 'Roofing Panel FAQs', subtitle: 'Insulated roofing systems for industrial buildings', faqs: roofingFAQs },
  { id: 'rockwool-fire-rated', title: 'Rockwool and Fire-Rated Panel FAQs', subtitle: 'Non-combustible and acoustic insulation', faqs: rockwoolFAQs },
  { id: 'pir-fm-approved', title: 'PIR and FM Approved Panel FAQs', subtitle: 'Premium fire-rated insulation solutions', faqs: pirFAQs },
  { id: 'cold-storage', title: 'Cold Storage Panel FAQs', subtitle: 'Temperature-controlled facility construction', faqs: coldStorageFAQs },
  { id: 'cleanroom', title: 'Cleanroom Panel FAQs', subtitle: 'Pharmaceutical and controlled environment solutions', faqs: cleanroomFAQs },
  { id: 'industrial-doors', title: 'Industrial Door FAQs', subtitle: 'Fire-rated, cleanroom, and cold storage doors', faqs: doorFAQs },
  { id: 'peb-buildings', title: 'PEB Building FAQs', subtitle: 'Pre-engineered steel building construction', faqs: pebFAQs },
  { id: 'pricing-supply', title: 'Pricing, Supply and Installation FAQs', subtitle: 'Commercial terms, delivery, and support', faqs: commercialFAQs },
];

// Calculate total FAQs
const totalFAQs = faqSections.reduce((acc, section) => acc + section.faqs.length, 0);

// ============================================================================
// FAQ HUB PAGE COMPONENT
// ============================================================================

export default function FAQPage() {
  const [expandedFAQs, setExpandedFAQs] = useState<Set<string>>(new Set());

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

  const expandAll = () => {
    const allIds = faqSections.flatMap(section => section.faqs.map(faq => faq.id));
    setExpandedFAQs(new Set(allIds));
  };

  const collapseAll = () => {
    setExpandedFAQs(new Set());
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl">
                Technical answers to common questions about PUF panels, PIR panels, rockwool insulation, 
                cold storage construction, cleanroom systems, and industrial building solutions in India.
              </p>

              {/* Quick Stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <span><strong className="text-white">{totalFAQs}</strong> Technical FAQs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span><strong className="text-white">{faqSections.length}</strong> Product Categories</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
          <div className="container-custom py-4">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {faqSections.slice(0, 6).map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-700 transition-all"
                  >
                    {section.title.replace(' FAQs', '')}
                  </a>
                ))}
                <span className="px-3 py-1.5 text-sm text-slate-400">+{faqSections.length - 6} more</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={expandAll}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all"
                >
                  Expand All
                </button>
                <button
                  onClick={collapseAll}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all"
                >
                  Collapse All
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-16">
              {faqSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  {/* Section Header */}
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-slate-600">{section.subtitle}</p>
                  </div>

                  {/* FAQs */}
                  <div className="space-y-4">
                    {section.faqs.map((faq) => (
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
                              <p className="text-slate-600 leading-relaxed">
                                {faq.answer}
                              </p>
                              {/* Internal Link */}
                              <div className="mt-4">
                                <Link
                                  href={faq.linkHref}
                                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium text-sm"
                                >
                                  {faq.linkText}
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </Link>
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
          </div>
        </section>

        {/* Product Navigation */}
        <section className="py-12 bg-slate-50 border-t border-slate-200">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Explore Products
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              <Link href="/products/sandwich-panels/sandwich-puf-panel" className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all text-center group">
                <div className="font-semibold text-slate-900 text-sm">PUF Panels</div>
                <div className="text-xs text-blue-600 mt-1 group-hover:underline">View specs</div>
              </Link>
              <Link href="/products/sandwich-panels/pir-panel" className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all text-center group">
                <div className="font-semibold text-slate-900 text-sm">PIR Panels</div>
                <div className="text-xs text-blue-600 mt-1 group-hover:underline">View specs</div>
              </Link>
              <Link href="/products/sandwich-panels/rockwool-panel" className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all text-center group">
                <div className="font-semibold text-slate-900 text-sm">Rockwool</div>
                <div className="text-xs text-blue-600 mt-1 group-hover:underline">View specs</div>
              </Link>
              <Link href="/products/sandwich-panels/roofing-puf-panel" className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all text-center group">
                <div className="font-semibold text-slate-900 text-sm">Roofing</div>
                <div className="text-xs text-blue-600 mt-1 group-hover:underline">View specs</div>
              </Link>
              <Link href="/solutions/cold-storage-construction" className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all text-center group">
                <div className="font-semibold text-slate-900 text-sm">Cold Storage</div>
                <div className="text-xs text-blue-600 mt-1 group-hover:underline">View solution</div>
              </Link>
              <Link href="/products/cleanroom-solutions" className="p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all text-center group">
                <div className="font-semibold text-slate-900 text-sm">Cleanrooms</div>
                <div className="text-xs text-blue-600 mt-1 group-hover:underline">View solution</div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
          <div className="container-custom text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">
                Need Project-Specific Technical Guidance?
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                Our engineers provide detailed specifications, thermal calculations, and panel selection assistance for your project requirements.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all"
                >
                  Contact Technical Team
                </Link>
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quotation
                </Link>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <a href="tel:+918866556879" className="hover:text-white transition-colors">+91 88665 56879</a>
                <a href="mailto:projects@phoenixxsmartbuild.com" className="hover:text-white transition-colors">projects@phoenixxsmartbuild.com</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
