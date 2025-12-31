import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

// Product images mapping
const productImages: Record<string, Record<string, string[]>> = {
  'sandwich-panels': {
    'pir-panel': [
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-2.jpg',
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-3.jpg',
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-4.jpg',
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-5.jpg',
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-6.jpg',
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-7.jpg',
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-8.jpg',
      '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-9.jpg',
    ],
    'sandwich-puf-panel': [
      '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL1.jpg',
      '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL3.jpg',
      '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL9.jpg',
      '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL19.jpg',
    ],
    'roofing-puf-panel': [
      '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL5.jpg',
      '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL8.jpg',
      '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL16.jpg',
    ],
    'wall-ceiling-panel': [
      '/images/products/sandwich-panels/wall-ceiling-panel/Industrial-False-Ceiling-PUF-Panel-2.jpg',
      '/images/products/sandwich-panels/wall-ceiling-panel/Industrial-False-Ceiling-PUF-Panel-3.jpg',
      '/images/products/sandwich-panels/wall-ceiling-panel/Industrial-False-Ceiling-PUF-Panel-4.jpg',
      '/images/products/sandwich-panels/wall-ceiling-panel/Industrial-False-Ceiling-PUF-Panel-10.jpg',
    ],
    'rockwool-panel': [
      '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL1.jpg',
      '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL2.jpg',
      '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL3.jpg',
      '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL10.jpg',
      '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL11.jpg',
      '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL12.jpg',
    ],
  },
  'doors': {
    'cleanroom-door': [
      '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg',
      '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-2.jpg',
      '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-3.jpg',
      '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-4.jpg',
      '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-5.jpg',
      '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-6.jpg',
    ],
    'fire-rated-multipurpose-door': [
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-1.jpg',
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-2.jpg',
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-3.jpg',
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-5.jpg',
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-6.jpg',
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-7.jpg',
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-8.jpg',
      '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-9.jpg',
    ],
    'fire-door-emergency-exit': [
      '/images/products/doors/fire-door/TORDRIX_FIRE_DOOR2.jpg',
      '/images/products/doors/fire-door/TORDRIX_FIRE_DOOR3.jpg',
      '/images/products/doors/fire-door/TORDRIX_FIRE_DOOR5.jpg',
      '/images/products/doors/fire-door/TORDRIX_FIRE_DOOR7.jpg',
    ],
  },
  'cleanroom-solutions': {
    'cleanroom-partition': [
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat1.jpg',
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat2.jpg',
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat3.jpg',
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat4.jpg',
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat5.jpg',
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat6.jpg',
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat7.jpg',
      '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat8.jpg',
    ],
    'cleanroom-false-ceiling': [
      '/images/products/cleanroom/ceiling/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
      '/images/products/cleanroom/ceiling/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects74.jpg',
      '/images/products/cleanroom/ceiling/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects75.jpg',
      '/images/products/cleanroom/ceiling/cleanroom-Manufacture-Supplier-in-Ahmedabad5.jpg',
    ],
    'cleanroom-doors': [
      '/images/products/cleanroom/doors/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg',
      '/images/products/cleanroom/doors/Cleanroom-Door-Manufacturer-in-Ahmedabad-2.jpg',
      '/images/products/cleanroom/doors/Cleanroom-Door-Manufacturer-in-Ahmedabad-10.jpg',
      '/images/products/cleanroom/doors/Cleanroom-Door-Manufacturer-in-Ahmedabad-12.jpg',
    ],
    'cleanroom-flooring': [
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-1.jpg',
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-2.jpg',
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-3.jpg',
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-4.jpg',
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-5.jpg',
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-6.jpg',
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-7.jpg',
      '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-8.jpg',
    ],
  },
};

// Detailed product data
const productsData: Record<string, Record<string, {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: { title: string; description: string }[];
  specifications: { category: string; items: { label: string; value: string }[] }[];
  applications: string[];
  gradient: string;
}>> = {
  'sandwich-panels': {
    'pir-panel': {
      name: 'PIR Panels',
      tagline: 'Superior Fire Resistance & Thermal Performance',
      description: 'Polyisocyanurate (PIR) insulated panels with Class B-s1, d0 fire rating.',
      longDescription: 'PHOENIXX PIR Panels are engineered for applications requiring superior fire performance and thermal insulation. The polyisocyanurate core provides excellent fire resistance with minimal smoke emission, making it ideal for buildings with stringent fire safety requirements.',
      features: [
        { title: 'Class B-s1, d0 Fire Rating', description: 'Meets the highest fire safety standards with limited contribution to fire and very low smoke production.' },
        { title: 'Superior Thermal Insulation', description: 'Thermal conductivity of 0.022 W/mK provides excellent energy efficiency and temperature control.' },
        { title: 'Lightweight Construction', description: 'Reduces structural load and installation time while maintaining excellent strength.' },
        { title: 'Long Service Life', description: '25+ years durability with proper installation and maintenance.' },
      ],
      specifications: [
        {
          category: 'Core Properties',
          items: [
            { label: 'Core Material', value: 'Polyisocyanurate (PIR)' },
            { label: 'Density', value: '38-42 kg/m³' },
            { label: 'Thermal Conductivity', value: '0.022 W/mK' },
            { label: 'Fire Classification', value: 'Class B-s1, d0' },
          ],
        },
        {
          category: 'Panel Dimensions',
          items: [
            { label: 'Thickness', value: '30, 40, 50, 60, 80, 100, 120, 150, 200 mm' },
            { label: 'Width', value: '1000 mm (effective)' },
            { label: 'Length', value: 'Up to 12,000 mm' },
            { label: 'Weight', value: '8-15 kg/m² (varies by thickness)' },
          ],
        },
        {
          category: 'Facing Options',
          items: [
            { label: 'Steel Thickness', value: '0.35-0.70 mm' },
            { label: 'Coating', value: 'PE/PVDF/PVC/Stainless Steel' },
            { label: 'Colors', value: 'RAL standard colors' },
            { label: 'Surface', value: 'Flat/Micro-rib/Trapezoidal' },
          ],
        },
      ],
      applications: ['Cold Storage Facilities', 'Food Processing Plants', 'Pharmaceutical Buildings', 'Data Centers', 'Industrial Warehouses', 'Commercial Buildings'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'sandwich-puf-panel': {
      name: 'Sandwich PUF Panels',
      tagline: 'Cost-Effective Thermal Insulation',
      description: 'Polyurethane foam panels for general insulation applications.',
      longDescription: 'PHOENIXX Sandwich PUF Panels offer excellent thermal insulation at competitive pricing. The polyurethane foam core provides reliable temperature control for a wide range of industrial and commercial applications.',
      features: [
        { title: 'Cost-Effective Solution', description: 'Optimal balance of performance and pricing for budget-conscious projects.' },
        { title: 'Good Thermal Insulation', description: 'Thermal conductivity of 0.024 W/mK ensures effective temperature control.' },
        { title: 'Versatile Applications', description: 'Suitable for walls, roofs, and partitions across various industries.' },
        { title: 'Easy Installation', description: 'Interlocking joint systems enable fast, efficient installation.' },
      ],
      specifications: [
        {
          category: 'Core Properties',
          items: [
            { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
            { label: 'Density', value: '38-42 kg/m³' },
            { label: 'Thermal Conductivity', value: '0.024 W/mK' },
            { label: 'Closed Cell', value: '>90%' },
          ],
        },
        {
          category: 'Panel Dimensions',
          items: [
            { label: 'Thickness', value: '30, 40, 50, 60, 80, 100, 120, 150 mm' },
            { label: 'Width', value: '1000 mm (effective)' },
            { label: 'Length', value: 'Up to 12,000 mm' },
            { label: 'Weight', value: '9-16 kg/m²' },
          ],
        },
        {
          category: 'Facing Options',
          items: [
            { label: 'Steel Thickness', value: '0.35-0.60 mm' },
            { label: 'Coating', value: 'PE/PVDF' },
            { label: 'Colors', value: 'RAL standard colors' },
            { label: 'Surface', value: 'Flat/Micro-rib' },
          ],
        },
      ],
      applications: ['Industrial Buildings', 'Warehouses', 'Cold Rooms', 'Commercial Buildings', 'Agricultural Buildings'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'roofing-puf-panel': {
      name: 'Roofing PUF Panels',
      tagline: 'Weather-Resistant Insulated Roofing',
      description: 'High-performance PUF roofing panels with superior weather resistance and thermal insulation.',
      longDescription: 'PHOENIXX Roofing PUF Panels are specifically designed for industrial and commercial roofing applications. The trapezoidal profile provides excellent structural strength and water drainage, while the PUF core ensures superior thermal insulation and energy efficiency.',
      features: [
        { title: 'Trapezoidal Profile', description: 'Optimized shape for superior structural strength and efficient water drainage.' },
        { title: 'Weather Resistance', description: 'UV-stabilized coatings and sealed joints protect against harsh weather conditions.' },
        { title: 'Thermal Performance', description: 'PUF core provides excellent thermal insulation reducing HVAC costs.' },
        { title: 'Long Span Capability', description: 'Supports longer spans reducing structural steel requirements.' },
      ],
      specifications: [
        {
          category: 'Core Properties',
          items: [
            { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
            { label: 'Density', value: '38-42 kg/m³' },
            { label: 'Thermal Conductivity', value: '0.024 W/mK' },
            { label: 'Closed Cell', value: '>90%' },
          ],
        },
        {
          category: 'Panel Dimensions',
          items: [
            { label: 'Thickness', value: '30, 40, 50, 60, 80, 100 mm' },
            { label: 'Width', value: '1000 mm (effective)' },
            { label: 'Length', value: 'Up to 14,000 mm' },
            { label: 'Profile', value: 'Trapezoidal/Corrugated' },
          ],
        },
        {
          category: 'Facing Options',
          items: [
            { label: 'Steel Thickness', value: '0.40-0.60 mm' },
            { label: 'Coating', value: 'PPGI/PPGL/PVDF' },
            { label: 'Colors', value: 'RAL standard colors' },
            { label: 'Surface', value: 'Trapezoidal ribbed' },
          ],
        },
      ],
      applications: ['Industrial Warehouses', 'Factory Buildings', 'Cold Storage Roofs', 'Commercial Buildings', 'Agricultural Sheds'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'wall-ceiling-panel': {
      name: 'Wall & Ceiling Panels',
      tagline: 'Versatile Interior & Exterior Cladding',
      description: 'Multi-purpose PUF panels for wall cladding, false ceilings, and partition systems.',
      longDescription: 'PHOENIXX Wall & Ceiling Panels offer versatile solutions for both interior and exterior applications. Ideal for industrial false ceilings, partition walls, and exterior cladding, these panels combine aesthetic appeal with excellent thermal and acoustic insulation properties.',
      features: [
        { title: 'Dual Application', description: 'Suitable for both wall cladding and ceiling installations in single product.' },
        { title: 'Aesthetic Finish', description: 'Smooth, flat surfaces with multiple color options for modern interiors.' },
        { title: 'Acoustic Insulation', description: 'Excellent sound absorption for noise-sensitive environments.' },
        { title: 'Easy Maintenance', description: 'Smooth surfaces enable easy cleaning and long-term maintenance.' },
      ],
      specifications: [
        {
          category: 'Core Properties',
          items: [
            { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
            { label: 'Density', value: '38-42 kg/m³' },
            { label: 'Thermal Conductivity', value: '0.024 W/mK' },
            { label: 'Fire Class', value: 'B2 (Self-extinguishing)' },
          ],
        },
        {
          category: 'Panel Dimensions',
          items: [
            { label: 'Thickness', value: '25, 30, 40, 50 mm' },
            { label: 'Width', value: '1000/1200 mm' },
            { label: 'Length', value: 'Up to 6,000 mm' },
            { label: 'Weight', value: '6-12 kg/m²' },
          ],
        },
        {
          category: 'Facing Options',
          items: [
            { label: 'Steel Thickness', value: '0.35-0.50 mm' },
            { label: 'Coating', value: 'PE/PVDF/PVC Film' },
            { label: 'Colors', value: 'White/Off-white/Custom RAL' },
            { label: 'Surface', value: 'Flat smooth finish' },
          ],
        },
      ],
      applications: ['Industrial False Ceilings', 'Clean Room Partitions', 'Cold Storage Interiors', 'Commercial Interiors', 'Food Processing Units'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'rockwool-panel': {
      name: 'Rockwool Panels',
      tagline: 'Premium Fire-Resistant Insulation',
      description: 'Mineral wool sandwich panels with superior fire resistance and acoustic properties.',
      longDescription: 'PHOENIXX Rockwool Panels feature a mineral wool core that provides exceptional fire resistance up to 4 hours. Ideal for applications requiring the highest fire safety standards, these panels also offer excellent acoustic insulation making them perfect for industrial and commercial buildings.',
      features: [
        { title: 'A1 Fire Rating', description: 'Non-combustible mineral wool core provides up to 4-hour fire resistance.' },
        { title: 'Superior Acoustics', description: 'Excellent sound absorption coefficient for noise control applications.' },
        { title: 'Temperature Stability', description: 'Maintains properties at temperatures up to 1000°C.' },
        { title: 'Eco-Friendly', description: 'Made from natural basalt rock, recyclable and sustainable.' },
      ],
      specifications: [
        {
          category: 'Core Properties',
          items: [
            { label: 'Core Material', value: 'Mineral Wool (Rockwool)' },
            { label: 'Density', value: '100-150 kg/m³' },
            { label: 'Thermal Conductivity', value: '0.038-0.040 W/mK' },
            { label: 'Fire Classification', value: 'A1 (Non-combustible)' },
          ],
        },
        {
          category: 'Panel Dimensions',
          items: [
            { label: 'Thickness', value: '50, 75, 100, 120, 150 mm' },
            { label: 'Width', value: '1000 mm (effective)' },
            { label: 'Length', value: 'Up to 10,000 mm' },
            { label: 'Weight', value: '15-25 kg/m²' },
          ],
        },
        {
          category: 'Facing Options',
          items: [
            { label: 'Steel Thickness', value: '0.40-0.70 mm' },
            { label: 'Coating', value: 'PE/PVDF/Stainless Steel' },
            { label: 'Colors', value: 'RAL standard colors' },
            { label: 'Surface', value: 'Flat/Micro-rib' },
          ],
        },
      ],
      applications: ['Fire-Rated Buildings', 'Acoustic Studios', 'Data Centers', 'Industrial Facilities', 'High-Rise Buildings'],
      gradient: 'from-orange-500 to-red-600',
    },
  },
  'doors': {
    'cleanroom-door': {
      name: 'Cleanroom Doors',
      tagline: 'Contamination Control Door Systems',
      description: 'Doors engineered for controlled environment applications.',
      longDescription: 'PHOENIXX Cleanroom Doors are designed specifically for pharmaceutical, healthcare, electronics, and food processing cleanrooms. Features include airtight sealing, flush surfaces, and compatibility with interlock systems.',
      features: [
        { title: 'Airtight Sealing', description: 'Magnetic or brush seals ensure contamination prevention.' },
        { title: 'Flush Design', description: 'Smooth surfaces prevent particle accumulation and enable easy cleaning.' },
        { title: 'Interlock Compatible', description: 'Can be integrated with airlock interlock systems for cleanroom protocols.' },
        { title: 'Automation Ready', description: 'Compatible with various automatic opening systems.' },
      ],
      specifications: [
        {
          category: 'Door Specifications',
          items: [
            { label: 'Type', value: 'Swing/Sliding/Hermetic' },
            { label: 'Frame Material', value: 'Stainless Steel/Aluminum' },
            { label: 'Panel Thickness', value: '40-60 mm' },
            { label: 'Cleanroom Class', value: 'ISO 5-8 compatible' },
          ],
        },
        {
          category: 'Features',
          items: [
            { label: 'Vision Panel', value: 'Full/Half/Round glazing' },
            { label: 'Sealing', value: 'Magnetic/Brush/Inflatable' },
            { label: 'Finish', value: 'Powder coated/SS finish' },
            { label: 'Hardware', value: 'SS 304/316 grade' },
          ],
        },
      ],
      applications: ['Pharmaceutical Cleanrooms', 'Electronics Manufacturing', 'Food Processing', 'Hospitals', 'Laboratories'],
      gradient: 'from-orange-600 to-red-600',
    },
    'fire-door-emergency-exit': {
      name: 'Fire Door – Emergency Exit',
      tagline: 'Fire-Rated Emergency Egress Doors',
      description: 'Fire-rated doors with panic hardware for emergency evacuation.',
      longDescription: 'PHOENIXX Fire Doors provide critical fire protection and safe emergency egress. Certified fire ratings from 30 to 120 minutes with panic bar hardware and self-closing mechanisms.',
      features: [
        { title: 'Fire Rated 30-120 Minutes', description: 'Certified fire resistance to protect evacuation routes.' },
        { title: 'Panic Bar Hardware', description: 'Easy-push panic bars for quick emergency exit.' },
        { title: 'Self-Closing Mechanism', description: 'Automatic closing ensures door seals during fire.' },
        { title: 'Smoke Seals', description: 'Intumescent seals expand to block smoke spread.' },
      ],
      specifications: [
        {
          category: 'Fire Performance',
          items: [
            { label: 'Fire Rating', value: '30/60/90/120 minutes' },
            { label: 'Certification', value: 'IS/BS/UL certified' },
            { label: 'Core', value: 'Mineral wool/Honeycomb' },
            { label: 'Smoke Rating', value: 'S200/Sa certified' },
          ],
        },
        {
          category: 'Construction',
          items: [
            { label: 'Frame', value: 'Steel pressed/Aluminum' },
            { label: 'Hardware', value: 'SS 304/316' },
            { label: 'Panic Device', value: 'EN 1125 certified' },
            { label: 'Closer', value: 'EN 1154 certified' },
          ],
        },
      ],
      applications: ['Industrial Buildings', 'Commercial Complexes', 'Hospitals', 'Hotels', 'Educational Institutions'],
      gradient: 'from-orange-600 to-red-600',
    },
    'fire-rated-multipurpose-door': {
      name: 'Fire-Rated Multipurpose Doors',
      tagline: 'Versatile Industrial & Commercial Doors',
      description: 'Heavy-duty metal doors with fire rating options for industrial and commercial applications.',
      longDescription: 'PHOENIXX Fire-Rated Multipurpose Doors are engineered for demanding industrial and commercial environments. These robust metal doors offer optional fire ratings, superior security, and long-lasting durability for warehouses, factories, and commercial buildings.',
      features: [
        { title: 'Heavy-Duty Construction', description: 'Reinforced steel frame and panel for maximum durability and security.' },
        { title: 'Optional Fire Rating', description: 'Available with fire ratings from 30 to 120 minutes as per requirement.' },
        { title: 'Weather Sealed', description: 'Comprehensive sealing system for weather protection and energy efficiency.' },
        { title: 'Multiple Configurations', description: 'Single, double leaf, and wicket door options available.' },
      ],
      specifications: [
        {
          category: 'Door Specifications',
          items: [
            { label: 'Type', value: 'Single/Double Leaf' },
            { label: 'Material', value: 'MS/GI Steel' },
            { label: 'Thickness', value: '46-60 mm' },
            { label: 'Fire Rating', value: 'Optional 30-120 min' },
          ],
        },
        {
          category: 'Construction',
          items: [
            { label: 'Frame', value: 'Pressed steel 1.6-2.0 mm' },
            { label: 'Skin', value: 'GI/PPGI 0.6-1.0 mm' },
            { label: 'Core', value: 'PUF/Honeycomb/Rockwool' },
            { label: 'Hardware', value: 'Heavy-duty SS/MS' },
          ],
        },
      ],
      applications: ['Industrial Warehouses', 'Factory Buildings', 'Commercial Complexes', 'Cold Storage', 'Service Areas'],
      gradient: 'from-orange-600 to-red-600',
    },
  },
  'cleanroom-solutions': {
    'cleanroom-partition': {
      name: 'Cleanroom Partitions',
      tagline: 'Modular Wall Systems for Controlled Environments',
      description: 'Flexible partition systems for cleanroom construction.',
      longDescription: 'PHOENIXX Cleanroom Partitions provide modular, flexible wall systems for constructing controlled environments. Designed for easy installation, future expansion, and compliance with GMP standards.',
      features: [
        { title: 'Modular Design', description: 'Pre-engineered modules for fast installation and easy modification.' },
        { title: 'Flush Surfaces', description: 'Smooth, crevice-free surfaces minimize particle accumulation.' },
        { title: 'Future Expansion', description: 'Easy to relocate or expand without major construction.' },
        { title: 'GMP Compliant', description: 'Meets pharmaceutical and food industry standards.' },
      ],
      specifications: [
        {
          category: 'Panel Specifications',
          items: [
            { label: 'Type', value: 'Sandwich/Hollow core' },
            { label: 'Thickness', value: '50/75/100 mm' },
            { label: 'Height', value: 'Up to 6000 mm' },
            { label: 'Joint', value: 'Cam lock/H-profile' },
          ],
        },
        {
          category: 'Finish Options',
          items: [
            { label: 'Surface', value: 'HPL/Steel/Glass' },
            { label: 'Coating', value: 'PVDF/PE/PVC' },
            { label: 'Corner', value: 'Coved/Square' },
            { label: 'Skirting', value: 'Integrated/Separate' },
          ],
        },
      ],
      applications: ['Pharmaceutical Manufacturing', 'Biotechnology', 'Electronics', 'Food Processing', 'Healthcare'],
      gradient: 'from-emerald-600 to-teal-600',
    },
    'cleanroom-false-ceiling': {
      name: 'Cleanroom False Ceiling',
      tagline: 'Walkable & Non-Walkable Ceiling Systems',
      description: 'Ceiling systems designed for cleanroom service access.',
      longDescription: 'PHOENIXX Cleanroom Ceiling Systems provide accessible platforms for maintenance while maintaining cleanroom integrity. Options include walkable systems for mechanical floors and non-walkable systems for standard applications.',
      features: [
        { title: 'HEPA Filter Integration', description: 'Designed for seamless HEPA/ULPA filter installation.' },
        { title: 'Service Access', description: 'Walkable versions support maintenance access up to 200 kg/m².' },
        { title: 'Airtight Sealing', description: 'Gel or gasket sealing prevents contamination.' },
        { title: 'Light Integration', description: 'Flush-mounted cleanroom light fixtures.' },
      ],
      specifications: [
        {
          category: 'System Specifications',
          items: [
            { label: 'Type', value: 'Walkable/Non-walkable' },
            { label: 'Load Capacity', value: 'Up to 200 kg/m² (walkable)' },
            { label: 'Grid Size', value: '1200x600/600x600 mm' },
            { label: 'Panel Thickness', value: '50/75 mm' },
          ],
        },
        {
          category: 'Sealing & Integration',
          items: [
            { label: 'Filter Seal', value: 'Gel/Gasket/Knife-edge' },
            { label: 'Lighting', value: 'LED cleanroom fixtures' },
            { label: 'Sprinkler', value: 'Flush/Recessed' },
            { label: 'HEPA Size', value: '2x4/2x2 ft standard' },
          ],
        },
      ],
      applications: ['Pharmaceutical Cleanrooms', 'Semiconductor Fabs', 'Hospitals', 'Research Labs', 'Food Processing'],
      gradient: 'from-emerald-600 to-teal-600',
    },
    'cleanroom-doors': {
      name: 'Cleanroom Doors',
      tagline: 'Contamination Control Door Systems',
      description: 'High-performance doors engineered for ISO-classified cleanroom environments.',
      longDescription: 'PHOENIXX Cleanroom Doors are designed specifically for pharmaceutical, healthcare, electronics, and food processing cleanrooms. Features include airtight sealing, flush surfaces, and compatibility with interlock systems to maintain cleanroom integrity.',
      features: [
        { title: 'Airtight Sealing', description: 'Magnetic or brush seals ensure contamination prevention and pressure integrity.' },
        { title: 'Flush Design', description: 'Smooth, crevice-free surfaces prevent particle accumulation and enable easy cleaning.' },
        { title: 'Interlock Compatible', description: 'Can be integrated with airlock interlock systems for cleanroom protocols.' },
        { title: 'Automation Ready', description: 'Compatible with various automatic opening systems including touchless sensors.' },
      ],
      specifications: [
        {
          category: 'Door Specifications',
          items: [
            { label: 'Type', value: 'Swing/Sliding/Hermetic' },
            { label: 'Frame Material', value: 'Stainless Steel/Aluminum' },
            { label: 'Panel Thickness', value: '40-60 mm' },
            { label: 'Cleanroom Class', value: 'ISO 5-8 compatible' },
          ],
        },
        {
          category: 'Features',
          items: [
            { label: 'Vision Panel', value: 'Full/Half/Round glazing' },
            { label: 'Sealing', value: 'Magnetic/Brush/Inflatable' },
            { label: 'Finish', value: 'Powder coated/SS finish' },
            { label: 'Hardware', value: 'SS 304/316 grade' },
          ],
        },
      ],
      applications: ['Pharmaceutical Cleanrooms', 'Electronics Manufacturing', 'Food Processing', 'Hospitals', 'Research Laboratories'],
      gradient: 'from-emerald-600 to-teal-600',
    },
    'cleanroom-flooring': {
      name: 'Cleanroom Flooring',
      tagline: 'High-Performance Epoxy & PU Flooring Systems',
      description: 'Seamless, anti-static flooring solutions for cleanroom and controlled environments.',
      longDescription: 'PHOENIXX Cleanroom Flooring systems provide seamless, non-porous surfaces that meet the stringent requirements of pharmaceutical, electronics, and food processing industries. Options include epoxy, polyurethane, and ESD-safe flooring with coved skirting for complete contamination control.',
      features: [
        { title: 'Seamless Surface', description: 'Monolithic, joint-free finish eliminates particle traps and enables easy cleaning.' },
        { title: 'Chemical Resistance', description: 'Resistant to acids, alkalis, solvents, and cleaning agents.' },
        { title: 'ESD Options', description: 'Anti-static and conductive variants for electronics manufacturing.' },
        { title: 'Coved Skirting', description: 'Integrated wall-to-floor coving prevents dust accumulation.' },
      ],
      specifications: [
        {
          category: 'Flooring Types',
          items: [
            { label: 'Systems', value: 'Epoxy/PU/ESD/MMA' },
            { label: 'Thickness', value: '2-6 mm' },
            { label: 'Surface Finish', value: 'Smooth/Textured/Matt' },
            { label: 'ESD Rating', value: '10⁴-10⁹ Ohms' },
          ],
        },
        {
          category: 'Performance',
          items: [
            { label: 'Compressive Strength', value: '>50 N/mm²' },
            { label: 'Abrasion Resistance', value: '<30 mg (CS17 wheel)' },
            { label: 'Chemical Resistance', value: 'Excellent' },
            { label: 'Cleanability', value: 'Easy to clean, non-porous' },
          ],
        },
      ],
      applications: ['Pharmaceutical Manufacturing', 'Electronics Cleanrooms', 'Food Processing', 'Hospitals', 'Laboratories'],
      gradient: 'from-emerald-600 to-teal-600',
    },
  },
};

type Props = {
  params: Promise<{ category: string; product: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, product } = await params;
  const data = productsData[category]?.[product];
  if (!data) return {};
  return {
    title: `${data.name} | PHOENIXX Products`,
    description: data.description,
    alternates: { canonical: `/products/${category}/${product}` },
  };
}

export async function generateStaticParams() {
  const params: { category: string; product: string }[] = [];
  for (const [category, products] of Object.entries(productsData)) {
    for (const product of Object.keys(products)) {
      params.push({ category, product });
    }
  }
  return params;
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, product } = await params;
  const data = productsData[category]?.[product];
  if (!data) notFound();

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'NXT PHOENIXX SMARTBUILD LLP' },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={productSchema} />

        {/* Hero */}
        <section className={`relative bg-gradient-to-br ${data.gradient} py-20 md:py-28`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <Link href={`/products/${category}`} className="hover:text-white transition-colors capitalize">
                {category.replace(/-/g, ' ')}
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">{data.name}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                {data.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {data.name}
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                {data.longDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quote
                </Link>
                <Link
                  href="/resources/technical-sheet"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Download Datasheet
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        {productImages[category]?.[product] && productImages[category][product].length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Product Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productImages[category][product].map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-lg">
                    <Image
                      src={img}
                      alt={`${data.name} - Image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Features */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Features</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {data.features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-xl`}>
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{feature.title}</h3>
                    <p className="mt-1 text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Technical Specifications</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {data.specifications.map((spec) => (
                <div key={spec.category} className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-4 pb-3 border-b">{spec.category}</h3>
                  <div className="space-y-3">
                    {spec.items.map((item) => (
                      <div key={item.label} className="flex justify-between text-sm">
                        <span className="text-slate-500">{item.label}</span>
                        <span className="font-medium text-slate-900">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Applications</h2>
            <div className="flex flex-wrap gap-3">
              {data.applications.map((app) => (
                <span
                  key={app}
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${data.gradient} text-white font-medium`}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 bg-gradient-to-r ${data.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Contact us for pricing, custom specifications, or technical consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
