import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

// Product catalog with pricing data for shop pages
const shopProducts: Record<string, {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  sku: string;
  category: string;
  basePrice: number;
  priceUnit: string;
  variants: {
    thickness: string;
    price: number;
    sku: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  applications: string[];
  gradient: string;
}> = {
  'sandwich-puf-panel': {
    slug: 'sandwich-puf-panel',
    name: 'Sandwich PUF Panel',
    shortName: 'PUF Panel',
    description: 'Premium polyurethane foam insulated sandwich panels for industrial, commercial, and cold storage applications. Factory-manufactured with ISO 9001 quality standards.',
    image: '/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
    sku: 'PHX-PUF-001',
    category: 'Insulated Sandwich Panels',
    basePrice: 850,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 850, sku: 'PHX-PUF-30' },
      { thickness: '40mm', price: 950, sku: 'PHX-PUF-40' },
      { thickness: '50mm', price: 1100, sku: 'PHX-PUF-50' },
      { thickness: '60mm', price: 1250, sku: 'PHX-PUF-60' },
      { thickness: '80mm', price: 1500, sku: 'PHX-PUF-80' },
      { thickness: '100mm', price: 1750, sku: 'PHX-PUF-100' },
      { thickness: '120mm', price: 2000, sku: 'PHX-PUF-120' },
      { thickness: '150mm', price: 2400, sku: 'PHX-PUF-150' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
      { label: 'Density', value: '40 ± 2 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.024 W/mK' },
      { label: 'Fire Rating', value: 'B2/B3 (Self-extinguishing)' },
      { label: 'Skin Material', value: 'PPGI / PPGL / SS' },
      { label: 'Skin Thickness', value: '0.35mm - 0.60mm' },
      { label: 'Panel Width', value: '1000mm / 1200mm' },
      { label: 'Panel Length', value: 'Custom (up to 12m)' },
    ],
    features: [
      'Excellent thermal insulation - 0.024 W/mK',
      'Lightweight construction',
      'Fast installation - saves 40% time',
      'CFC/HCFC free - eco-friendly',
      '25-30 years service life',
      'ISO 9001:2015 certified',
    ],
    applications: ['Cold Storage', 'Warehouses', 'Pharmaceutical', 'Food Processing', 'Clean Rooms', 'Industrial Buildings'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  'roofing-puf-panel': {
    slug: 'roofing-puf-panel',
    name: 'Roofing PUF Panel',
    shortName: 'Roof Panel',
    description: 'Insulated roofing panels with trapezoidal profile for superior drainage, wind resistance, and thermal performance. Ideal for industrial sheds and warehouses.',
    image: '/images/projects/gallery/Phoenix-PUF-Panel-Manufacturers6.jpg',
    sku: 'PHX-ROOF-001',
    category: 'Insulated Roofing Panels',
    basePrice: 950,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 950, sku: 'PHX-ROOF-30' },
      { thickness: '40mm', price: 1100, sku: 'PHX-ROOF-40' },
      { thickness: '50mm', price: 1250, sku: 'PHX-ROOF-50' },
      { thickness: '60mm', price: 1400, sku: 'PHX-ROOF-60' },
      { thickness: '80mm', price: 1650, sku: 'PHX-ROOF-80' },
      { thickness: '100mm', price: 1900, sku: 'PHX-ROOF-100' },
      { thickness: '120mm', price: 2150, sku: 'PHX-ROOF-120' },
      { thickness: '150mm', price: 2600, sku: 'PHX-ROOF-150' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
      { label: 'Density', value: '40 ± 2 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.024 W/mK' },
      { label: 'Profile Type', value: 'Trapezoidal / Standing Seam' },
      { label: 'Effective Width', value: '1000mm' },
      { label: 'Wind Resistance', value: 'Up to 150 km/h' },
      { label: 'Fire Rating', value: 'B2/B3' },
      { label: 'Span Capability', value: 'Up to 4m between purlins' },
    ],
    features: [
      'Superior drainage with trapezoidal profile',
      'Wind resistance up to 150 km/h',
      'Spans up to 4m - reduces steel',
      'UV resistant coatings',
      'No thermal bridging',
      'Compatible with skylights',
    ],
    applications: ['Industrial Sheds', 'Warehouses', 'Cold Storage', 'Commercial Buildings', 'Aircraft Hangars', 'Logistics Parks'],
    gradient: 'from-green-600 to-emerald-600',
  },
  'rockwool-panel': {
    slug: 'rockwool-panel',
    name: 'Rockwool Panel',
    shortName: 'Rockwool Panel',
    description: 'Non-combustible mineral wool sandwich panels with A1/A2 fire rating. Ideal for fire-rated applications, acoustic insulation, and FM Global compliant facilities.',
    image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad1.jpeg',
    sku: 'PHX-RW-001',
    category: 'Fire Rated Panels',
    basePrice: 1400,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm', price: 1400, sku: 'PHX-RW-50' },
      { thickness: '80mm', price: 1750, sku: 'PHX-RW-80' },
      { thickness: '100mm', price: 2000, sku: 'PHX-RW-100' },
      { thickness: '120mm', price: 2300, sku: 'PHX-RW-120' },
      { thickness: '150mm', price: 2700, sku: 'PHX-RW-150' },
      { thickness: '200mm', price: 3200, sku: 'PHX-RW-200' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Mineral Wool (Stone Wool)' },
      { label: 'Density', value: '80-150 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.035-0.040 W/mK' },
      { label: 'Fire Rating', value: 'A1/A2 (Non-combustible)' },
      { label: 'Acoustic Rating', value: 'Rw 32-45 dB' },
      { label: 'Temperature Resistance', value: 'Up to 1000°C' },
      { label: 'FM Approval', value: 'FM 4880 Class 1' },
      { label: 'Panel Width', value: '1000mm / 1200mm' },
    ],
    features: [
      'A1/A2 fire rating - non-combustible',
      'Excellent acoustic insulation (32-45 dB)',
      'FM Global 4880 approved',
      'No toxic fumes in fire',
      'Temperature resistance up to 1000°C',
      'Pest and rodent resistant',
    ],
    applications: ['Fire-rated Walls', 'Acoustic Enclosures', 'FM Global Projects', 'Generator Rooms', 'Data Centers', 'High-value Warehouses'],
    gradient: 'from-orange-600 to-red-600',
  },
  'pir-panel': {
    slug: 'pir-panel',
    name: 'PIR Panel',
    shortName: 'PIR Panel',
    description: 'Polyisocyanurate foam panels with superior fire performance (B-s1,d0) and better thermal efficiency than PUF. Ideal for fire-sensitive and high-value facilities.',
    image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
    sku: 'PHX-PIR-001',
    category: 'Fire Enhanced Panels',
    basePrice: 1200,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '40mm', price: 1200, sku: 'PHX-PIR-40' },
      { thickness: '50mm', price: 1400, sku: 'PHX-PIR-50' },
      { thickness: '60mm', price: 1600, sku: 'PHX-PIR-60' },
      { thickness: '80mm', price: 1900, sku: 'PHX-PIR-80' },
      { thickness: '100mm', price: 2200, sku: 'PHX-PIR-100' },
      { thickness: '120mm', price: 2500, sku: 'PHX-PIR-120' },
      { thickness: '150mm', price: 3000, sku: 'PHX-PIR-150' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Polyisocyanurate (PIR) Foam' },
      { label: 'Density', value: '40 ± 2 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.022 W/mK' },
      { label: 'Fire Rating', value: 'B-s1,d0 (Low smoke, no droplets)' },
      { label: 'FM Approval', value: 'FM 4880/4881' },
      { label: 'Skin Material', value: 'PPGI / PPGL / SS' },
      { label: 'Temperature Resistance', value: 'Up to 150°C' },
      { label: 'Panel Width', value: '1000mm / 1200mm' },
    ],
    features: [
      'Superior fire rating - B-s1,d0',
      'Best thermal efficiency - 0.022 W/mK',
      'Very low smoke emission',
      'No burning droplets',
      'FM 4880/4881 approved',
      'Thinner panels for same R-value',
    ],
    applications: ['Pharmaceutical Plants', 'Cold Storage', 'Food Processing', 'High-value Warehouses', 'Data Centers', 'Cleanrooms'],
    gradient: 'from-purple-600 to-indigo-600',
  },
  'fm-approved-panel': {
    slug: 'fm-approved-panel',
    name: 'FM Approved Panel',
    shortName: 'FM Panel',
    description: 'Factory Mutual Global certified panels meeting FM 4880/4881 standards. Mandatory for FM Global insured facilities and high-value property protection.',
    image: '/images/projects/gallery/Phoenixx_infratech_Projects188.jpg',
    sku: 'PHX-FM-001',
    category: 'Insurance Grade Panels',
    basePrice: 1600,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm PIR', price: 1600, sku: 'PHX-FM-PIR-50' },
      { thickness: '80mm PIR', price: 2100, sku: 'PHX-FM-PIR-80' },
      { thickness: '100mm PIR', price: 2500, sku: 'PHX-FM-PIR-100' },
      { thickness: '100mm Rockwool', price: 2800, sku: 'PHX-FM-RW-100' },
      { thickness: '120mm Rockwool', price: 3200, sku: 'PHX-FM-RW-120' },
      { thickness: '150mm Rockwool', price: 3800, sku: 'PHX-FM-RW-150' },
    ],
    specifications: [
      { label: 'Core Options', value: 'PIR / Rockwool' },
      { label: 'FM Certification', value: 'FM 4880 Class 1' },
      { label: 'Fire Testing', value: 'Large-scale calorimeter tested' },
      { label: 'Audit Compliance', value: 'Annual FM Global audits' },
      { label: 'Accessories', value: 'All FM Approved' },
      { label: 'Documentation', value: 'Full traceability' },
      { label: 'Insurance', value: 'Premium reduction eligible' },
      { label: 'Warranty', value: '15-year performance warranty' },
    ],
    features: [
      'FM 4880 Class 1 certified',
      'Complete fire-tested assembly',
      'Annual factory audits',
      'May reduce insurance 10-30%',
      'Full lot traceability',
      'Global insurance compliance',
    ],
    applications: ['MNC Manufacturing', 'FM Global Facilities', 'Data Centers', 'Pharma Cold Chain', 'Electronics Manufacturing', 'High-value Warehouses'],
    gradient: 'from-amber-600 to-yellow-600',
  },
  
  // ============================================
  // WALL & CEILING PANEL
  // ============================================
  'wall-ceiling-panel': {
    slug: 'wall-ceiling-panel',
    name: 'Wall & Ceiling Panel',
    shortName: 'Wall Panel',
    description: 'Versatile insulated panels for wall and ceiling applications. Clean, hygienic finish ideal for food processing, pharmaceutical facilities, and commercial interiors.',
    image: '/images/projects/gallery/PHOENIXX_WALL_PUF_PANEL1.jpg',
    sku: 'PHX-WALL-001',
    category: 'Wall & Ceiling Panels',
    basePrice: 750,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 750, sku: 'PHX-WALL-30' },
      { thickness: '40mm', price: 850, sku: 'PHX-WALL-40' },
      { thickness: '50mm', price: 950, sku: 'PHX-WALL-50' },
      { thickness: '60mm', price: 1100, sku: 'PHX-WALL-60' },
      { thickness: '80mm', price: 1300, sku: 'PHX-WALL-80' },
      { thickness: '100mm', price: 1500, sku: 'PHX-WALL-100' },
    ],
    specifications: [
      { label: 'Core Material', value: 'PUF / PIR / Rockwool' },
      { label: 'Density', value: '40 ± 2 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.024 W/mK' },
      { label: 'Fire Rating', value: 'B2/B3 or A1/A2 (Rockwool)' },
      { label: 'Surface Finish', value: 'Smooth / Embossed / Stucco' },
      { label: 'Skin Material', value: 'PPGI / PPGL / SS' },
      { label: 'Panel Width', value: '1000mm / 1200mm' },
      { label: 'Joint Type', value: 'Tongue & Groove / Cam-lock' },
    ],
    features: [
      'Clean, hygienic surface finish',
      'Easy to clean and maintain',
      'Quick installation with cam-lock',
      'Multiple surface finishes available',
      'Suitable for GMP environments',
      'Customizable colors',
    ],
    applications: ['Food Processing', 'Pharmaceutical', 'Cold Storage Walls', 'Commercial Interiors', 'Healthcare', 'Cleanrooms'],
    gradient: 'from-cyan-600 to-blue-600',
  },

  // ============================================
  // DOORS CATEGORY
  // ============================================
  'cleanroom-door': {
    slug: 'cleanroom-door',
    name: 'Cleanroom Door',
    shortName: 'Cleanroom Door',
    description: 'Specialized doors for cleanroom and controlled environments. Flush design, air-tight sealing, and GMP compliant for pharmaceutical, electronics, and healthcare facilities.',
    image: '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-2.jpg',
    sku: 'PHX-CRD-001',
    category: 'Cleanroom Doors',
    basePrice: 35000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Single Leaf 900x2100mm', price: 35000, sku: 'PHX-CRD-S90' },
      { thickness: 'Single Leaf 1000x2100mm', price: 38000, sku: 'PHX-CRD-S100' },
      { thickness: 'Double Leaf 1200x2100mm', price: 55000, sku: 'PHX-CRD-D120' },
      { thickness: 'Double Leaf 1500x2100mm', price: 65000, sku: 'PHX-CRD-D150' },
      { thickness: 'Double Leaf 1800x2100mm', price: 75000, sku: 'PHX-CRD-D180' },
      { thickness: 'Sliding Door 1200x2100mm', price: 85000, sku: 'PHX-CRD-SL120' },
    ],
    specifications: [
      { label: 'Door Type', value: 'Swing / Sliding / Hermetic' },
      { label: 'Core Material', value: 'PUF / PIR / Honeycomb' },
      { label: 'Frame Material', value: 'Aluminum / SS 304 / SS 316' },
      { label: 'Panel Thickness', value: '50mm / 60mm' },
      { label: 'Sealing', value: 'EPDM / Silicone gaskets' },
      { label: 'Vision Panel', value: 'Double glazed / Triple glazed' },
      { label: 'Hardware', value: 'SS / Flush handles' },
      { label: 'Compliance', value: 'GMP / FDA 21 CFR' },
    ],
    features: [
      'Air-tight sealing for cleanrooms',
      'Flush design - no dust traps',
      'GMP & FDA compliant',
      'Interlock capability',
      'SS 304/316 options',
      'Auto-closing mechanism',
    ],
    applications: ['Pharmaceutical Cleanrooms', 'Electronics Manufacturing', 'Healthcare OT', 'Food Processing', 'Biotech Labs', 'Semiconductor FABs'],
    gradient: 'from-teal-600 to-cyan-600',
  },
  'fire-door-emergency-exit': {
    slug: 'fire-door-emergency-exit',
    name: 'Fire Door – Emergency Exit',
    shortName: 'Fire Exit Door',
    description: 'Fire-rated emergency exit doors with panic hardware. 60/90/120 minute fire rating, compliant with NBC and IS 3614. Essential for building safety compliance.',
    image: '/images/projects/gallery/Phoenixx_infratech_Projects189.jpg',
    sku: 'PHX-FED-001',
    category: 'Fire Rated Doors',
    basePrice: 28000,
    priceUnit: 'per unit',
    variants: [
      { thickness: '60 min Single 900x2100mm', price: 28000, sku: 'PHX-FED-60S' },
      { thickness: '60 min Double 1200x2100mm', price: 45000, sku: 'PHX-FED-60D' },
      { thickness: '90 min Single 900x2100mm', price: 35000, sku: 'PHX-FED-90S' },
      { thickness: '90 min Double 1200x2100mm', price: 55000, sku: 'PHX-FED-90D' },
      { thickness: '120 min Single 900x2100mm', price: 42000, sku: 'PHX-FED-120S' },
      { thickness: '120 min Double 1200x2100mm', price: 68000, sku: 'PHX-FED-120D' },
    ],
    specifications: [
      { label: 'Fire Rating', value: '60 / 90 / 120 minutes' },
      { label: 'Core Material', value: 'Mineral Wool / Vermiculite' },
      { label: 'Frame Material', value: 'GI / MS Powder Coated' },
      { label: 'Door Thickness', value: '46mm / 54mm / 62mm' },
      { label: 'Hardware', value: 'Panic bar / Push pad' },
      { label: 'Compliance', value: 'IS 3614 / NBC 2016' },
      { label: 'Certification', value: 'CBRI / NABL tested' },
      { label: 'Closer', value: 'Hydraulic door closer' },
    ],
    features: [
      'CBRI/NABL certified fire rating',
      'Panic hardware for quick exit',
      'Self-closing mechanism',
      'Smoke sealed',
      'Durable powder coat finish',
      'NBC 2016 compliant',
    ],
    applications: ['Commercial Buildings', 'Industrial Facilities', 'Hospitals', 'Hotels', 'Schools', 'Malls & Multiplexes'],
    gradient: 'from-red-600 to-orange-600',
  },
  'fire-rated-multipurpose-door': {
    slug: 'fire-rated-multipurpose-door',
    name: 'Fire Rated Multipurpose Door',
    shortName: 'Multipurpose Fire Door',
    description: 'Versatile fire-rated doors for general access points. Combines fire protection with everyday functionality. Ideal for corridors, stairwells, and internal partitions.',
    image: '/images/projects/gallery/Phoenix-Infratech-Project-Pics23.jpg',
    sku: 'PHX-FMD-001',
    category: 'Fire Rated Doors',
    basePrice: 25000,
    priceUnit: 'per unit',
    variants: [
      { thickness: '60 min Single 900x2100mm', price: 25000, sku: 'PHX-FMD-60S' },
      { thickness: '60 min Double 1200x2100mm', price: 42000, sku: 'PHX-FMD-60D' },
      { thickness: '90 min Single 900x2100mm', price: 32000, sku: 'PHX-FMD-90S' },
      { thickness: '90 min Double 1200x2100mm', price: 52000, sku: 'PHX-FMD-90D' },
      { thickness: '120 min Single 900x2100mm', price: 38000, sku: 'PHX-FMD-120S' },
      { thickness: '120 min Double 1200x2100mm', price: 62000, sku: 'PHX-FMD-120D' },
    ],
    specifications: [
      { label: 'Fire Rating', value: '60 / 90 / 120 minutes' },
      { label: 'Core Material', value: 'Mineral Wool / Honeycomb' },
      { label: 'Frame Material', value: 'GI / MS Powder Coated' },
      { label: 'Door Thickness', value: '46mm / 54mm' },
      { label: 'Hardware', value: 'Lever handle / Mortise lock' },
      { label: 'Vision Panel', value: 'Fire-rated glass (optional)' },
      { label: 'Certification', value: 'CBRI / NABL tested' },
      { label: 'Finish', value: 'RAL colors available' },
    ],
    features: [
      'Certified fire protection',
      'Vision panel options',
      'Multiple finish options',
      'Standard hardware compatible',
      'Intumescent seals',
      'Heavy-duty hinges',
    ],
    applications: ['Office Buildings', 'Warehouses', 'Industrial Plants', 'Corridors', 'Stairwells', 'Server Rooms'],
    gradient: 'from-orange-500 to-red-500',
  },
  'cold-storage-door': {
    slug: 'cold-storage-door',
    name: 'Cold Storage Door',
    shortName: 'Cold Room Door',
    description: 'Insulated doors for cold storage and freezer applications. High-density PUF core with heated frame to prevent condensation. Suitable for -40°C to +15°C environments.',
    image: '/images/projects/gallery/Industrial-False-Ceiling-PUF-Panel-2.jpg',
    sku: 'PHX-CSD-001',
    category: 'Cold Storage Doors',
    basePrice: 45000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Hinged 1000x2100mm 100mm', price: 45000, sku: 'PHX-CSD-H100' },
      { thickness: 'Hinged 1200x2100mm 100mm', price: 52000, sku: 'PHX-CSD-H120' },
      { thickness: 'Sliding 1500x2100mm 100mm', price: 75000, sku: 'PHX-CSD-S150' },
      { thickness: 'Sliding 2000x2100mm 120mm', price: 95000, sku: 'PHX-CSD-S200' },
      { thickness: 'Bi-parting 2500x2500mm', price: 125000, sku: 'PHX-CSD-BP250' },
      { thickness: 'Rapid Roll Freezer', price: 185000, sku: 'PHX-CSD-RR' },
    ],
    specifications: [
      { label: 'Core Material', value: 'High-density PUF (50 kg/m³)' },
      { label: 'Core Thickness', value: '80mm / 100mm / 120mm / 150mm' },
      { label: 'Temperature Range', value: '-40°C to +15°C' },
      { label: 'Frame', value: 'SS 304 / Anodized Aluminum' },
      { label: 'Heating', value: 'Frame heater (anti-frost)' },
      { label: 'Sealing', value: 'Magnetic / Inflatable gaskets' },
      { label: 'Vision Panel', value: 'Double/Triple glazed heated' },
      { label: 'Automation', value: 'Electric / Pneumatic' },
    ],
    features: [
      'Heated frame prevents ice buildup',
      'Magnetic sealing for air-tight closure',
      'Suitable for -40°C freezers',
      'Rapid roll options available',
      'Safety features included',
      'Easy-clean surfaces',
    ],
    applications: ['Cold Storage', 'Freezer Rooms', 'Blast Freezers', 'Ice Cream Plants', 'Meat Processing', 'Pharma Cold Chain'],
    gradient: 'from-sky-600 to-blue-600',
  },
  'hermetic-door': {
    slug: 'hermetic-door',
    name: 'Hermetic Door',
    shortName: 'Hermetic Door',
    description: 'Air-tight automatic sliding doors for hospitals, operation theatres, and critical cleanroom applications. Maintains positive/negative pressure differentials.',
    image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad5.jpg',
    sku: 'PHX-HRM-001',
    category: 'Hermetic Doors',
    basePrice: 125000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Single Leaf 1000x2100mm', price: 125000, sku: 'PHX-HRM-S100' },
      { thickness: 'Single Leaf 1200x2100mm', price: 138000, sku: 'PHX-HRM-S120' },
      { thickness: 'Double Leaf 1500x2100mm', price: 185000, sku: 'PHX-HRM-D150' },
      { thickness: 'Double Leaf 1800x2100mm', price: 215000, sku: 'PHX-HRM-D180' },
      { thickness: 'Lead-lined (X-ray)', price: 195000, sku: 'PHX-HRM-XR' },
      { thickness: 'ICU/OT Interlock System', price: 285000, sku: 'PHX-HRM-ICU' },
    ],
    specifications: [
      { label: 'Door Type', value: 'Automatic Sliding Hermetic' },
      { label: 'Core Material', value: 'Aluminum honeycomb / Lead' },
      { label: 'Frame Material', value: 'Aluminum anodized / SS 304' },
      { label: 'Air Tightness', value: 'Class 4 (EN 12207)' },
      { label: 'Motor', value: 'Brushless DC motor' },
      { label: 'Control', value: 'PLC / Touchless sensors' },
      { label: 'Safety', value: 'Infrared sensors / Safety edge' },
      { label: 'Options', value: 'Lead-lined / X-ray proof' },
    ],
    features: [
      'True hermetic seal',
      'Maintains pressure differential',
      'Touchless operation',
      'Interlock compatible',
      'Lead-lined options for X-ray',
      'Quiet operation',
    ],
    applications: ['Hospital OT', 'ICU', 'Cath Labs', 'MRI Rooms', 'Pharmaceutical', 'Semiconductor FAB'],
    gradient: 'from-indigo-600 to-purple-600',
  },

  // ============================================
  // CLEANROOM SOLUTIONS CATEGORY
  // ============================================
  'cleanroom-partition': {
    slug: 'cleanroom-partition',
    name: 'Cleanroom Partition',
    shortName: 'CR Partition',
    description: 'Modular cleanroom partition systems for creating controlled environments. Flush-mounted panels with integrated services. ISO Class 5-8 compatible.',
    image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects73.jpeg',
    sku: 'PHX-CRP-001',
    category: 'Cleanroom Systems',
    basePrice: 2800,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm PUF Panel', price: 2800, sku: 'PHX-CRP-50P' },
      { thickness: '50mm PIR Panel', price: 3200, sku: 'PHX-CRP-50R' },
      { thickness: '50mm Rockwool Panel', price: 3800, sku: 'PHX-CRP-50W' },
      { thickness: '60mm PUF Panel', price: 3100, sku: 'PHX-CRP-60P' },
      { thickness: '80mm PUF Panel', price: 3600, sku: 'PHX-CRP-80P' },
      { thickness: 'SS 304 Clad System', price: 4500, sku: 'PHX-CRP-SS' },
    ],
    specifications: [
      { label: 'Core Material', value: 'PUF / PIR / Rockwool' },
      { label: 'Surface', value: 'PPGI / PPGL / SS 304/316' },
      { label: 'Panel Thickness', value: '50mm / 60mm / 80mm' },
      { label: 'Joint System', value: 'Flush / Cam-lock / H-profile' },
      { label: 'Surface Finish', value: 'PE / PVDF / Antibacterial' },
      { label: 'Cleanroom Class', value: 'ISO Class 5-8' },
      { label: 'Fire Rating', value: 'B1/B2 or A2 (Rockwool)' },
      { label: 'Integration', value: 'Lighting / HVAC / Pass boxes' },
    ],
    features: [
      'Flush design - no ledges',
      'GMP compliant surfaces',
      'Integrated service panels',
      'Easy to clean & disinfect',
      'Modular & relocatable',
      'Various surface finishes',
    ],
    applications: ['Pharmaceutical Cleanrooms', 'Electronics', 'Biotech', 'Food Processing', 'Medical Device Mfg', 'Cosmetics'],
    gradient: 'from-emerald-600 to-teal-600',
  },
  'cleanroom-false-ceiling': {
    slug: 'cleanroom-false-ceiling',
    name: 'Cleanroom False Ceiling',
    shortName: 'CR Ceiling',
    description: 'Cleanroom-grade false ceiling systems with integrated HEPA filter housings and lighting. Walkable and non-walkable options for ISO Class 1-8 environments.',
    image: '/images/projects/gallery/Sandwich-PUF-Ceiling-Panel-1.jpg',
    sku: 'PHX-CRC-001',
    category: 'Cleanroom Ceiling Systems',
    basePrice: 3500,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: 'Non-walkable 50mm', price: 3500, sku: 'PHX-CRC-NW50' },
      { thickness: 'Non-walkable 60mm', price: 3900, sku: 'PHX-CRC-NW60' },
      { thickness: 'Walkable 80mm', price: 5500, sku: 'PHX-CRC-W80' },
      { thickness: 'Walkable 100mm', price: 6500, sku: 'PHX-CRC-W100' },
      { thickness: 'T-Grid System', price: 4200, sku: 'PHX-CRC-TG' },
      { thickness: 'SS Clad Walkable', price: 8500, sku: 'PHX-CRC-SSW' },
    ],
    specifications: [
      { label: 'Panel Type', value: 'Flush / T-grid / Walkable' },
      { label: 'Core Material', value: 'PUF / PIR / Honeycomb' },
      { label: 'Surface', value: 'PPGI / PPGL / SS 304' },
      { label: 'Load Capacity', value: 'Up to 200 kg/m² (walkable)' },
      { label: 'HEPA Integration', value: 'Factory cutouts available' },
      { label: 'Lighting Integration', value: 'LED panel compatible' },
      { label: 'Cleanroom Class', value: 'ISO Class 1-8' },
      { label: 'Access', value: 'Removable panels / Hatches' },
    ],
    features: [
      'Integrated HEPA filter housing',
      'Walkable for maintenance',
      'LED lighting integration',
      'Flush seamless design',
      'Fire retardant options',
      'Easy access panels',
    ],
    applications: ['Pharmaceutical', 'Semiconductor', 'Healthcare', 'Biotech', 'Food Processing', 'Electronics Mfg'],
    gradient: 'from-violet-600 to-purple-600',
  },
  'cleanroom-doors': {
    slug: 'cleanroom-doors',
    name: 'Cleanroom Doors (Solutions)',
    shortName: 'CR Doors',
    description: 'Complete cleanroom door solutions including swing, sliding, and hermetic options. Designed for integration with cleanroom partition systems. GMP compliant.',
    image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad6.jpg',
    sku: 'PHX-CRDS-001',
    category: 'Cleanroom Door Systems',
    basePrice: 32000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Swing Single 900x2100mm', price: 32000, sku: 'PHX-CRDS-S90' },
      { thickness: 'Swing Double 1500x2100mm', price: 52000, sku: 'PHX-CRDS-D150' },
      { thickness: 'Sliding Single 1000x2100mm', price: 65000, sku: 'PHX-CRDS-SL100' },
      { thickness: 'Sliding Double 1800x2100mm', price: 95000, sku: 'PHX-CRDS-SLD180' },
      { thickness: 'Airtight Swing', price: 48000, sku: 'PHX-CRDS-AT' },
      { thickness: 'Interlocked Pair', price: 85000, sku: 'PHX-CRDS-INT' },
    ],
    specifications: [
      { label: 'Door Types', value: 'Swing / Sliding / Hermetic' },
      { label: 'Core Material', value: 'PUF / PIR / Honeycomb' },
      { label: 'Frame Material', value: 'Aluminum / SS 304/316' },
      { label: 'Panel Thickness', value: '50mm / 60mm' },
      { label: 'Sealing', value: 'EPDM / Silicone / Magnetic' },
      { label: 'Vision Panel', value: 'Double/Triple glazed' },
      { label: 'Interlock', value: 'PLC controlled available' },
      { label: 'Cleanroom Class', value: 'ISO Class 1-8' },
    ],
    features: [
      'Matches partition aesthetics',
      'Multiple interlock options',
      'Pass-through integration',
      'Emergency breakout',
      'Touchless operation available',
      'Full GMP documentation',
    ],
    applications: ['Pharma Cleanrooms', 'Biotech Labs', 'Electronics FAB', 'Medical Device Mfg', 'Food Grade Areas', 'Research Labs'],
    gradient: 'from-cyan-500 to-teal-500',
  },
  'cleanroom-flooring': {
    slug: 'cleanroom-flooring',
    name: 'Cleanroom Flooring',
    shortName: 'CR Flooring',
    description: 'Seamless, anti-static, and chemical-resistant flooring systems for cleanroom environments. ESD compliant options for electronics manufacturing.',
    image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad7.jpg',
    sku: 'PHX-CRF-001',
    category: 'Cleanroom Flooring',
    basePrice: 850,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: 'Epoxy Coating 2mm', price: 850, sku: 'PHX-CRF-EP2' },
      { thickness: 'Epoxy Self-leveling 3mm', price: 1200, sku: 'PHX-CRF-EP3' },
      { thickness: 'PU Screed 4mm', price: 1500, sku: 'PHX-CRF-PU4' },
      { thickness: 'ESD Epoxy 3mm', price: 1400, sku: 'PHX-CRF-ESD' },
      { thickness: 'Vinyl Sheet Antistatic', price: 950, sku: 'PHX-CRF-VIN' },
      { thickness: 'Raised Access Floor', price: 3500, sku: 'PHX-CRF-RAF' },
    ],
    specifications: [
      { label: 'Flooring Types', value: 'Epoxy / PU / Vinyl / Raised' },
      { label: 'Thickness', value: '2mm - 6mm' },
      { label: 'ESD Resistance', value: '10⁶ - 10⁹ Ω (ESD versions)' },
      { label: 'Chemical Resistance', value: 'Acids / Alkalis / Solvents' },
      { label: 'Surface Finish', value: 'Matt / Semi-gloss / High-gloss' },
      { label: 'Cove Base', value: 'Integrated wall cove' },
      { label: 'Compliance', value: 'FDA / USDA / GMP' },
      { label: 'Load Rating', value: 'Up to 5 ton/m² (raised)' },
    ],
    features: [
      'Seamless - no joints',
      'Chemical resistant',
      'ESD/Anti-static options',
      'Easy to clean',
      'Integrated cove skirting',
      'Non-slip finishes',
    ],
    applications: ['Pharma Production', 'Electronics FAB', 'Medical Device', 'Food Processing', 'Biotech Labs', 'Data Centers'],
    gradient: 'from-slate-600 to-gray-700',
  },
};

// Generate static params
export async function generateStaticParams() {
  return Object.keys(shopProducts).map(slug => ({ productSlug: slug }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ productSlug: string }> }): Promise<Metadata> {
  const { productSlug } = await params;
  const product = shopProducts[productSlug];
  
  if (!product) {
    return { title: 'Product Not Found' };
  }
  
  return {
    title: `Buy ${product.name} Online | Starting ₹${product.basePrice}/${product.priceUnit} | PHOENIXX`,
    description: `${product.description} Starting from ₹${product.basePrice} ${product.priceUnit}. Request quote for bulk pricing. PAN-India delivery.`,
    keywords: [
      `${product.name} price`,
      `buy ${product.shortName} online`,
      `${product.shortName} manufacturer`,
      `${product.shortName} supplier India`,
      `${product.shortName} cost per sq meter`,
    ],
    alternates: {
      canonical: `/shop/${productSlug}`,
    },
    openGraph: {
      title: `Buy ${product.name} | Starting ₹${product.basePrice}/${product.priceUnit}`,
      description: product.description,
      type: 'website',
      images: [{ url: `https://phoenixxsmartbuild.com${product.image}` }],
    },
  };
}

// Main Page Component
export default async function ShopProductPage({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;
  const product = shopProducts[productSlug];
  
  if (!product) {
    notFound();
  }
  
  // Calculate price valid until (6 months from now)
  const priceValidUntil = new Date();
  priceValidUntil.setMonth(priceValidUntil.getMonth() + 6);
  const priceValidUntilISO = priceValidUntil.toISOString().split('T')[0];
  
  // Product Schema with Offer (Google Merchant compliant)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://phoenixxsmartbuild.com${product.image}`,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'PHOENIXX SMARTBUILD',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'PHOENIXX SMARTBUILD',
      url: 'https://phoenixxsmartbuild.com',
    },
    category: product.category,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: product.basePrice,
      highPrice: product.variants[product.variants.length - 1].price,
      offerCount: product.variants.length,
      availability: 'https://schema.org/InStock',
      priceValidUntil: priceValidUntilISO,
      seller: {
        '@type': 'Organization',
        name: 'PHOENIXX SMARTBUILD',
      },
      url: `https://phoenixxsmartbuild.com/shop/${productSlug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Rajesh Patel',
        },
        reviewBody: 'Excellent quality panels. Delivered on time and installation support was very helpful.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Suresh Kumar',
        },
        reviewBody: 'Best PUF panels we have used. Great thermal performance and competitive pricing.',
      },
    ],
  };
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com' },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://phoenixxsmartbuild.com/shop' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://phoenixxsmartbuild.com/shop/${productSlug}` },
    ],
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={productSchema} />
        <JsonLd data={breadcrumbSchema} />
        
        {/* Hero Section */}
        <section className="bg-slate-50 py-8">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/shop" className="hover:text-slate-900 transition-colors">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-900">{product.name}</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-medium`}>
                  In Stock
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <span className="text-sm text-slate-500">SKU: {product.sku}</span>
                <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  {product.name}
                </h1>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate-600 text-sm">4.8 (127 reviews)</span>
                </div>
                
                {/* Price */}
                <div className="mt-6 p-6 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-500">Starting from</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-bold text-slate-900">₹{product.basePrice}</span>
                    <span className="text-slate-500">{product.priceUnit}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    *Price varies based on thickness, quantity, and specifications. GST extra.
                  </p>
                  <p className="mt-1 text-sm text-green-600">
                    ✓ Bulk discounts available for orders above 1000 sq.mtr
                  </p>
                </div>
                
                {/* CTAs */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-a-quote"
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${product.gradient} px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all`}
                  >
                    Request Final Quote
                  </Link>
                  <a
                    href="https://wa.me/919727700442"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-4 font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    💬 WhatsApp Inquiry
                  </a>
                </div>
                
                {/* Trust Signals */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">🚚</span>
                    <p className="text-xs text-slate-600 mt-1">PAN-India Delivery</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">🏭</span>
                    <p className="text-xs text-slate-600 mt-1">Direct from Factory</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">✓</span>
                    <p className="text-xs text-slate-600 mt-1">ISO Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Variants & Pricing */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Available Thickness & Pricing
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Thickness</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">SKU</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Price (per sq.mtr)</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {product.variants.map((variant, idx) => (
                    <tr key={variant.sku} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-medium text-slate-900">{variant.thickness}</td>
                      <td className="px-6 py-4 text-slate-600">{variant.sku}</td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-slate-900">₹{variant.price}</span>
                        <span className="text-slate-500 text-sm ml-1">+ GST</span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/get-a-quote?product=${product.name}&thickness=${variant.thickness}`}
                          className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
                        >
                          Get Quote
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-sm text-slate-500">
              * Prices are indicative and may vary based on quantity, customization, and delivery location. 
              Contact our sales team for final quotation.
            </p>
          </div>
        </section>
        
        {/* Specifications */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Technical Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-600">{spec.label}</span>
                      <span className="font-medium text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Applications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Applications
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white font-medium`}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location Pages Link */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Available Across India
            </h2>
            <p className="text-slate-600 mb-6">
              PHOENIXX {product.name} is available for delivery and installation across India. 
              View location-specific information:
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['india', 'gujarat', 'ahmedabad', 'surat', 'vadodara', 'rajkot', 'raipur', 'bhilai'].map((loc) => (
                <Link
                  key={loc}
                  href={`/${productSlug}-in-${loc}`}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  📍 {loc.charAt(0).toUpperCase() + loc.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className={`py-16 bg-gradient-to-r ${product.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Order {product.name}?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Get a customized quote based on your exact requirements. 
              Our team will provide competitive pricing within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quotation
              </Link>
              <a
                href="tel:+919727700442"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                📞 Call: +91 97277 00442
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

