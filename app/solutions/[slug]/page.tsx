import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';

// Solution images mapping
const solutionImages: Record<string, string[]> = {
  'peb': [
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects2.jpg',
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects3.jpg',
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects15.jpg',
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects17.jpg',
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects24.jpg',
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects27.jpg',
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects30.jpg',
    '/images/solutions/peb/Pre-Engineering-Building-Ahmedabad-Phoenixx-infratech-projects32.jpg',
  ],
  'cold-storage-construction': [
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-1.jpg',
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-2.jpg',
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-10.jpg',
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-11.jpg',
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-12.jpg',
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-13.jpg',
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-15.jpg',
    '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-17.jpg',
  ],
  'walkable-ceiling-systems': [
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-2.jpg',
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-3.jpg',
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-4.jpg',
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-5.jpg',
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-6.jpg',
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-7.jpg',
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-8.jpg',
    '/images/solutions/false-ceiling/Industrial-False-Ceiling-PUF-Panel-10.jpg',
  ],
  'partition-solutions': [
    '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat1.jpg',
    '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat2.jpg',
    '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat3.jpg',
    '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat4.jpg',
    '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat5.jpg',
    '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat6.jpg',
  ],
  'prefab-house': [
    '/images/solutions/prefab-house/phoenixx-pre-fab-house-1.jpg',
    '/images/solutions/prefab-house/phoenixx-pre-fab-house-2.jpg',
    '/images/solutions/prefab-house/phoenixx-pre-fab-house-3.jpg',
    '/images/solutions/prefab-house/phoenixx-pre-fab-house-4.jpg',
    '/images/solutions/prefab-house/phoenixx-pre-fab-house-5.jpg',
    '/images/solutions/prefab-house/phoenixx-pre-fab-house-6.jpg',
  ],
  'cleanroom-solutions': [
    '/images/solutions/cleanroom/cleanroom-Manufacture-Supplier-in-Ahmedabad5.jpg',
    '/images/solutions/cleanroom/cleanroom-Manufacture-Supplier-in-Ahmedabad6.jpg',
    '/images/solutions/cleanroom/cleanroom-Manufacture-Supplier-in-Ahmedabad7.jpg',
    '/images/solutions/cleanroom/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
    '/images/solutions/cleanroom/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects74.jpg',
    '/images/solutions/cleanroom/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects75.jpg',
  ],
};

const solutionsData: Record<string, {
  title: string;
  seoTitle: string;
  tagline: string;
  description: string;
  seoDescription: string;
  longDescription: string;
  aiSummary: string;
  keywords: string[];
  gradient: string;
  stats: { value: string; label: string }[];
  benefits: { icon: string; title: string; description: string }[];
  productsUsed: { name: string; description: string; link: string }[];
  process: { step: number; title: string; description: string }[];
  applications: { question: string; answer: string }[];
  industries: string[];
  testimonial: { quote: string; author: string; company: string; rating: number; reviews: number };
  faqs: { question: string; answer: string }[];
}> = {
  'peb': {
    title: 'Pre-Engineered Buildings (PEB)',
    seoTitle: 'PEB Construction Company India | Pre-Engineered Building Manufacturer | PHOENIXX',
    tagline: 'Fast, Cost-Effective & Scalable Steel Structures',
    description: 'Design, supply, and construction of robust steel structures for warehouses, factories, and commercial buildings.',
    seoDescription: 'PHOENIXX is a leading PEB construction company in India. We design, manufacture & erect Pre-Engineered Buildings for warehouses, factories, industrial sheds. 30-50% faster construction. Get free quote.',
    longDescription: 'PHOENIXX Pre-Engineered Buildings (PEB) offer a modern approach to industrial construction with 30-50% faster completion times compared to conventional construction. Our PEB solutions are designed using advanced software, manufactured in controlled factory conditions, and erected with precision by trained teams.',
    aiSummary: 'PHOENIXX is a PEB construction company in India. Services: Design, manufacturing, erection of Pre-Engineered Buildings. Applications: Warehouses, factories, industrial sheds, commercial buildings, multi-storey structures. Benefits: 30-50% faster construction, cost-effective, expandable. Location: Ahmedabad, Gujarat. Pan-India service.',
    keywords: ['peb construction', 'pre-engineered buildings', 'peb manufacturer india', 'steel building construction', 'industrial shed construction', 'warehouse construction'],
    gradient: 'from-blue-600 to-indigo-600',
    stats: [
      { value: '50+', label: 'PEB Projects' },
      { value: '30-50%', label: 'Faster Construction' },
      { value: '25+', label: 'Years Durability' },
      { value: '20+', label: 'Cities Served' },
    ],
    benefits: [
      { icon: '⚡', title: '30-50% Faster Construction', description: 'Factory-controlled fabrication and systematic erection reduces project timelines significantly vs conventional construction.' },
      { icon: '💰', title: 'Cost-Effective', description: 'Optimized material usage, reduced labor, and faster occupancy lower overall project costs by 15-25%.' },
      { icon: '📐', title: 'Design Flexibility', description: 'Clear spans up to 90m, multiple bays, and customizable layouts for any industrial requirement.' },
      { icon: '🔄', title: 'Easily Expandable', description: 'Modular design allows future expansion with minimal disruption to existing operations.' },
      { icon: '✅', title: 'Quality Controlled', description: 'Factory fabrication ensures consistent quality, dimensional accuracy, and compliance with IS standards.' },
    ],
    productsUsed: [
      { name: 'Sandwich PUF Panels', description: 'Insulated roofing and wall cladding for thermal efficiency', link: '/products/sandwich-panels/sandwich-puf-panel' },
      { name: 'Roofing PUF Panels', description: 'Profiled insulated roofing panels for weather protection', link: '/products/sandwich-panels/roofing-puf-panel' },
      { name: 'Industrial Doors', description: 'Rolling shutters, sectional doors for access points', link: '/products/doors' },
      { name: 'Fire Doors', description: 'Fire-rated doors for safety compliance', link: '/products/doors/fire-door-emergency-exit' },
    ],
    process: [
      { step: 1, title: 'Consultation & Site Assessment', description: 'Understanding requirements, site conditions, and preparing preliminary design.' },
      { step: 2, title: 'Design & Engineering', description: 'Structural design using STAAD.Pro, connection design, and drawing preparation.' },
      { step: 3, title: 'Fabrication', description: 'Factory fabrication with quality control, surface treatment, and painting.' },
      { step: 4, title: 'Erection', description: 'Systematic on-site erection by trained teams with safety protocols.' },
      { step: 5, title: 'Handover & Support', description: 'Final inspection, documentation, and post-handover support.' },
    ],
    applications: [
      { question: 'What industries use PEB construction?', answer: 'PEB is widely used in manufacturing, warehousing, logistics, automotive, pharmaceuticals, food processing, textiles, and commercial retail. Any industry needing large clear-span buildings benefits from PEB construction.' },
      { question: 'What is the maximum span possible in PEB?', answer: 'Single-span PEB buildings can achieve clear spans up to 90 meters without intermediate columns. For larger facilities, multi-span designs with interior columns are used. Most industrial applications use 20-40m spans.' },
      { question: 'Can PEB buildings have multiple floors?', answer: 'Yes. Multi-storey PEB buildings up to G+4 floors are common for offices, malls, and mixed-use facilities. Mezzanine floors within industrial sheds are also possible for additional usable area.' },
      { question: 'How does PEB compare to RCC construction?', answer: 'PEB is 30-50% faster, 15-25% more cost-effective, lighter (reduces foundation costs), and easily expandable. RCC is preferred for high-rise buildings (>5 floors) or where fire ratings above 2 hours are mandatory.' },
      { question: 'Is PEB suitable for cold storage facilities?', answer: 'Yes. PEB structures combined with insulated sandwich panels create excellent cold storage facilities. The quick construction time minimizes business disruption and the insulated envelope ensures energy efficiency.' },
    ],
    industries: ['Manufacturing', 'Warehousing', 'Logistics', 'Automotive', 'Pharmaceuticals', 'Food Processing', 'Textiles', 'Commercial'],
    testimonial: {
      quote: 'PHOENIXX delivered our 25,000 sq.ft warehouse in just 12 weeks from design to handover. The quality and professionalism were outstanding. Already planning our next expansion with them.',
      author: 'Operations Director',
      company: 'Logistics Company, Gujarat',
      rating: 4.9,
      reviews: 35,
    },
    faqs: [
      { question: 'What is the lifespan of a PEB building?', answer: 'Well-designed and maintained PEB buildings last 25-50 years. Galvanized or painted steel with proper maintenance (periodic repainting every 5-7 years) ensures long service life.' },
      { question: 'Do you provide PEB design services?', answer: 'Yes. We provide complete design services using STAAD.Pro and Tekla. Our in-house team handles structural design, connection design, foundation design, and shop drawings.' },
      { question: 'What foundation is required for PEB?', answer: 'PEB requires isolated footings at column locations—much simpler than RCC raft foundations. This reduces civil work cost and time. We provide foundation design as part of our service.' },
      { question: 'Can existing RCC buildings be extended with PEB?', answer: 'Yes. PEB can be integrated with existing RCC structures for extensions. Proper interface detailing ensures structural integrity and weather sealing at the junction.' },
      { question: 'What is the cost of PEB construction per sq.ft?', answer: 'PEB costs range from ₹800-1,500 per sq.ft depending on span, height, loads, and specifications. Complete turnkey projects including civil, MEP, and finishes range from ₹1,200-2,500 per sq.ft.' },
      { question: 'Do you handle government approvals?', answer: 'Yes. We assist with building plan approvals, structural stability certificates, and compliance documentation. Our designs comply with IS 800, IS 875, and local building bylaws.' },
      { question: 'What safety measures are followed during erection?', answer: 'We follow strict safety protocols: safety harnesses, safety nets, toolbox talks, PPE compliance, and trained erection teams. All work complies with OSHA and Indian safety regulations.' },
      { question: 'Can PEB buildings be relocated?', answer: 'Yes. PEB structures can be disassembled and re-erected at new locations with 70-80% material reuse. This makes them ideal for temporary facilities or businesses that may relocate.' },
      { question: 'What warranties do you provide?', answer: 'We provide 10-year warranty on structural integrity, 5-year warranty on panels, and 1-year warranty on workmanship. Maintenance contracts available for extended support.' },
      { question: 'Do you provide crane beam structures?', answer: 'Yes. We design and supply PEB with integrated crane beams for material handling. EOT cranes up to 20T capacity are commonly integrated. Heavier cranes possible with special design.' },
    ],
  },
  'cold-storage-construction': {
    title: 'Cold Storage Construction',
    seoTitle: 'Cold Storage Construction Company India | Cold Room & Freezer Builder | PHOENIXX',
    tagline: 'Temperature-Controlled Excellence from +15°C to -40°C',
    description: 'Complete EPC execution of cold storage facilities for various temperature requirements.',
    seoDescription: 'PHOENIXX builds cold storage facilities in India: Cold rooms, freezers, ripening chambers (+15°C to -40°C). Turnkey EPC execution. FSSAI compliant. Energy-efficient design. Get free consultation.',
    longDescription: 'PHOENIXX provides turnkey cold storage construction services covering the entire spectrum from +15°C to -40°C. Our solutions include cold rooms, freezers, ripening chambers, and distribution centers designed for optimal energy efficiency and operational performance with FSSAI and GMP compliance.',
    aiSummary: 'PHOENIXX is a cold storage construction company in India. Services: Cold rooms, freezers, ripening chambers, distribution centers. Temperature range: +15°C to -40°C. Turnkey EPC execution including structure, panels, refrigeration, MEP. FSSAI and GMP compliant. Location: Ahmedabad, Gujarat.',
    keywords: ['cold storage construction', 'cold room construction', 'freezer room builder', 'cold storage manufacturer', 'ripening chamber', 'cold chain infrastructure'],
    gradient: 'from-cyan-600 to-blue-600',
    stats: [
      { value: '40+', label: 'Cold Storage Projects' },
      { value: '+15 to -40°C', label: 'Temperature Range' },
      { value: '30%', label: 'Energy Savings' },
      { value: 'FSSAI', label: 'Compliant' },
    ],
    benefits: [
      { icon: '🔧', title: 'Turnkey Delivery', description: 'Complete project execution from design to commissioning including structure, panels, refrigeration, and MEP.' },
      { icon: '⚡', title: 'Energy Efficient', description: 'Optimized insulation (PIR/PUF panels) and refrigeration systems reduce energy consumption by up to 30%.' },
      { icon: '🌡️', title: 'Wide Temperature Range', description: 'Solutions for chilled storage (+15°C), freezer (-18 to -25°C), and deep freeze (-35 to -40°C) applications.' },
      { icon: '✅', title: 'Compliance Assured', description: 'Meeting FSSAI, GMP, HACCP, and industry-specific standards for food and pharma cold chain.' },
      { icon: '📊', title: 'Monitoring Systems', description: 'Temperature monitoring, alerts, and data logging for compliance and quality assurance.' },
    ],
    productsUsed: [
      { name: 'PIR Sandwich Panels', description: 'High-density insulated panels for optimal thermal efficiency', link: '/products/sandwich-panels/pir-panel' },
      { name: 'Cold Storage Doors', description: 'Insulated sliding/hinged doors with heated frames', link: '/products/doors' },
      { name: 'PUF Panels', description: 'Cost-effective insulation for chilled storage areas', link: '/products/sandwich-panels/sandwich-puf-panel' },
      { name: 'Cleanroom Solutions', description: 'GMP-compliant partitions for pharma cold storage', link: '/products/cleanroom-solutions' },
    ],
    process: [
      { step: 1, title: 'Requirement Analysis', description: 'Understanding storage needs, products, volumes, temperature requirements, and throughput.' },
      { step: 2, title: 'Design & Engineering', description: 'Thermal calculations, refrigeration sizing, and system design for optimal performance.' },
      { step: 3, title: 'Civil & Structure', description: 'Foundation work, PEB structure erection, and floor insulation installation.' },
      { step: 4, title: 'Panel Installation', description: 'Insulated panel erection for walls, ceiling, and floor with proper sealing.' },
      { step: 5, title: 'MEP & Commissioning', description: 'Refrigeration installation, electrical work, testing, and temperature validation.' },
    ],
    applications: [
      { question: 'What types of cold storage do you build?', answer: 'We build: Chilled rooms (+2 to +8°C) for dairy/fresh produce, Freezer rooms (-18 to -25°C) for frozen food, Deep freezers (-35 to -40°C) for ice cream/seafood, Ripening chambers for fruits, and Blast freezers for rapid cooling.' },
      { question: 'What panel thickness is recommended?', answer: 'Panel thickness depends on temperature: 80mm for +2 to +8°C, 100mm for -18 to -25°C, 150mm for -35°C and below. We use PIR panels for better thermal performance and fire safety.' },
      { question: 'How do you ensure energy efficiency?', answer: 'Through optimized insulation (K-value 0.022 W/mK), efficient refrigeration systems (COP >2.5), LED lighting, VFD-driven compressors, and proper door management protocols to minimize air infiltration.' },
      { question: 'Do you provide refrigeration systems?', answer: 'Yes. We provide complete refrigeration including compressors, condensers, evaporators, controls, and piping. We work with leading brands like Bitzer, Danfoss, and Kirloskar for reliable performance.' },
      { question: 'What compliance standards do you meet?', answer: 'Our cold storage facilities comply with FSSAI, GMP, HACCP, and specific requirements for pharma (WHO), dairy (NDDB), and export (EIA) applications. We provide compliance documentation.' },
    ],
    industries: ['Food Processing', 'Dairy', 'Pharmaceuticals', 'Frozen Food', 'Seafood', 'Agriculture', 'Logistics', 'Retail'],
    testimonial: {
      quote: 'PHOENIXX built our 5000 MT frozen food facility with excellent attention to detail. Energy costs are 25% lower than our older facility. The temperature uniformity is exceptional.',
      author: 'CEO',
      company: 'Frozen Food Company, Gujarat',
      rating: 4.9,
      reviews: 28,
    },
    faqs: [
      { question: 'How long does cold storage construction take?', answer: 'Small cold rooms (100-500 sq.ft): 4-6 weeks. Medium facilities (500-5000 sq.ft): 8-12 weeks. Large cold storage (5000+ sq.ft): 12-20 weeks. Timelines include design, civil, panels, and MEP.' },
      { question: 'What is the cost of cold storage construction?', answer: 'Costs range from ₹2,500-5,000 per sq.ft depending on temperature, size, and specifications. Chilled rooms are lower cost; deep freeze facilities with blast freezers are higher.' },
      { question: 'Do you provide floor insulation?', answer: 'Yes. For freezer applications, we provide floor insulation with heater cables to prevent frost heave. Floor systems include VCI barrier, insulation, and reinforced concrete topping.' },
      { question: 'What door options are available?', answer: 'We provide hinged doors, sliding doors, high-speed doors, and dock shelters. All doors have PUF/PIR insulation, heated frames (for freezers), and appropriate sealing systems.' },
      { question: 'Can existing buildings be converted to cold storage?', answer: 'Yes. We retrofit existing buildings with insulated panels, refrigeration systems, and required infrastructure. Structural assessment ensures the building can support additional loads.' },
      { question: 'What monitoring systems do you provide?', answer: 'We provide temperature monitoring with sensors, data loggers, SMS/email alerts, and cloud-based monitoring dashboards. This ensures compliance documentation and quick response to any issues.' },
      { question: 'Do you provide AMC for cold storage?', answer: 'Yes. We offer Annual Maintenance Contracts covering preventive maintenance, refrigeration servicing, panel repairs, and emergency support. AMC ensures optimal performance and longevity.' },
      { question: 'What power backup is recommended?', answer: 'We recommend DG backup for critical cold storage. For smaller facilities, automatic transfer switches ensure seamless power switchover. UPS for control systems is essential.' },
      { question: 'Can cold storage be built in multi-storey format?', answer: 'Yes. Multi-level cold storage with goods lifts optimizes land use. We design appropriate structural systems and vertical material handling for efficient operations.' },
      { question: 'Do you handle cold storage for pharma products?', answer: 'Yes. Pharma cold storage requires additional compliance (GDP, WHO). We provide validated storage with mapping, calibrated monitoring, and documentation for regulatory audits.' },
    ],
  },
  'walkable-ceiling-systems': {
    title: 'Ceiling Systems',
    seoTitle: 'Industrial False Ceiling Manufacturer | Walkable & Non-Walkable Ceilings | PHOENIXX',
    tagline: 'Walkable & Non-Walkable Ceiling Solutions',
    description: 'Ceiling systems designed for accessibility, acoustic control, and clean aesthetics.',
    seoDescription: 'PHOENIXX manufactures industrial false ceilings: Walkable ceilings (200 kg/m² load), non-walkable ceilings, cleanroom ceilings with HEPA integration. For pharma, food, industrial applications.',
    longDescription: 'PHOENIXX Ceiling Systems provide complete solutions for industrial, commercial, and cleanroom applications. Our walkable systems support maintenance access up to 200 kg/m² while non-walkable systems offer cost-effective ceiling solutions for general applications.',
    aiSummary: 'PHOENIXX manufactures Industrial Ceiling Systems: Walkable ceilings (200 kg/m² load capacity), non-walkable ceilings, cleanroom ceilings with HEPA integration. Applications: Pharmaceutical, food processing, cleanrooms, industrial facilities. Features: Acoustic control, thermal insulation, easy maintenance access.',
    keywords: ['industrial false ceiling', 'walkable ceiling', 'cleanroom ceiling', 'ceiling panels', 'HEPA ceiling', 'acoustic ceiling'],
    gradient: 'from-violet-600 to-purple-600',
    stats: [
      { value: '200', label: 'kg/m² Load Capacity' },
      { value: '60+', label: 'Ceiling Projects' },
      { value: 'ISO 5-8', label: 'Cleanroom Class' },
      { value: 'Rw 30-45', label: 'Acoustic Rating (dB)' },
    ],
    benefits: [
      { icon: '🚶', title: 'Walkable Access', description: 'Walkable systems support up to 200 kg/m² for maintenance personnel to service HVAC, filters, and utilities.' },
      { icon: '🔧', title: 'Easy Maintenance', description: 'Removable panels and access hatches enable quick service access without disrupting operations below.' },
      { icon: '🔬', title: 'Cleanroom Compatible', description: 'Designed for ISO Class 5-8 with HEPA filter integration, gel sealing, and flush-mounted services.' },
      { icon: '🔇', title: 'Acoustic Control', description: 'Sound absorption options (Rw 30-45 dB) for noise control in industrial and office environments.' },
    ],
    productsUsed: [
      { name: 'PUF Ceiling Panels', description: 'Insulated panels for thermal and acoustic performance', link: '/products/sandwich-panels/wall-ceiling-panel' },
      { name: 'Cleanroom Partitions', description: 'Integrated wall-ceiling systems for cleanrooms', link: '/products/cleanroom-solutions/cleanroom-partition' },
      { name: 'Cleanroom Doors', description: 'Complementary door systems for controlled environments', link: '/products/cleanroom-solutions/cleanroom-doors' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluating load requirements, service access needs, and environmental conditions.' },
      { step: 2, title: 'Design', description: 'Grid layout, structural support design, and service integration planning.' },
      { step: 3, title: 'Fabrication', description: 'Manufacturing ceiling panels, grid systems, and support structures.' },
      { step: 4, title: 'Installation', description: 'Grid erection, panel installation, and sealing.' },
      { step: 5, title: 'Integration', description: 'Lighting, HVAC diffusers, HEPA filters, and services installation.' },
    ],
    applications: [
      { question: 'When is a walkable ceiling required?', answer: 'Walkable ceilings are needed when regular maintenance access is required above the ceiling—for HEPA filter changes, HVAC servicing, or electrical work. Common in pharma cleanrooms, semiconductor fabs, and hospitals.' },
      { question: 'What is the difference between cleanroom and industrial ceilings?', answer: 'Cleanroom ceilings require flush surfaces, sealed joints, and HEPA filter integration for particle control. Industrial ceilings focus on thermal insulation, acoustic control, and cost-effectiveness without stringent cleanliness requirements.' },
      { question: 'Can existing ceilings be upgraded to walkable systems?', answer: 'Yes, if structural capacity permits. We assess existing support structures and either reinforce them or install independent support systems for walkable ceiling loads.' },
      { question: 'What lighting options are available?', answer: 'We integrate flush-mounted LED panels, cleanroom fixtures (IP65/IP67), emergency lighting, and task lighting. All fixtures are designed for easy maintenance access from above.' },
      { question: 'How is acoustic performance achieved?', answer: 'Using perforated panels with mineral wool backing, we achieve Rw 30-45 dB sound absorption. This is ideal for reducing noise transmission between floors or controlling reverberation in open spaces.' },
    ],
    industries: ['Pharmaceutical', 'Food Processing', 'Cleanrooms', 'Healthcare', 'Electronics', 'Commercial Offices'],
    testimonial: {
      quote: 'The walkable ceiling system from PHOENIXX made our HVAC maintenance so much easier. Filter changes that took 4 hours now take 45 minutes. Excellent investment.',
      author: 'Maintenance Manager',
      company: 'Pharmaceutical Company, Gujarat',
      rating: 4.8,
      reviews: 22,
    },
    faqs: [
      { question: 'What load can walkable ceilings support?', answer: 'Our walkable ceilings support distributed loads up to 200 kg/m² and point loads of 100 kg on any tile. This accommodates maintenance personnel with tools and equipment.' },
      { question: 'What grid sizes are available?', answer: 'Standard grids: 600x600mm, 1200x600mm. Custom sizes available for specific HEPA filter requirements or architectural needs. Grid systems use galvanized or powder-coated steel.' },
      { question: 'How is air leakage prevented?', answer: 'Gaskets between panels, perimeter sealing, and gel-seal HEPA housings ensure minimal air leakage. We achieve less than 1% air leakage for cleanroom applications.' },
      { question: 'Can sprinklers be integrated?', answer: 'Yes. Recessed and flush-mounted sprinkler heads are integrated with appropriate fire-rated ceiling tiles. We coordinate with fire system contractors for proper coverage.' },
      { question: 'What is the installation timeline?', answer: 'Installation rates: 50-100 sq.ft/day for walkable systems, 100-200 sq.ft/day for non-walkable. A 10,000 sq.ft cleanroom ceiling typically takes 3-4 weeks including services.' },
      { question: 'Do you provide ceiling maintenance services?', answer: 'Yes. We offer AMC covering panel replacement, grid repairs, sealing touch-ups, and coordination with HVAC contractors for filter changes and balancing.' },
    ],
  },
  'partition-solutions': {
    title: 'Partition Solutions',
    seoTitle: 'Modular Partition Systems Manufacturer | Cleanroom & Office Partitions | PHOENIXX',
    tagline: 'Modular & Flexible Space Division',
    description: 'Modular partition systems for cleanrooms, offices, and industrial spaces.',
    seoDescription: 'PHOENIXX manufactures modular partition systems: Cleanroom partitions, office partitions, insulated industrial partitions. Quick installation, reconfigurable, GMP compliant.',
    longDescription: 'PHOENIXX Partition Solutions provide flexible space division for various applications. Our modular systems offer quick installation, easy reconfiguration, and thermal insulation options to meet diverse requirements from cleanrooms to commercial offices.',
    aiSummary: 'PHOENIXX manufactures Modular Partition Systems: Cleanroom partitions (GMP/FDA compliant), office partitions, insulated industrial partitions. Features: Quick installation, reconfigurable, sound insulation. Applications: Pharmaceutical, offices, industrial facilities.',
    keywords: ['modular partitions', 'cleanroom partitions', 'office partitions', 'industrial partitions', 'insulated partitions', 'demountable walls'],
    gradient: 'from-emerald-600 to-teal-600',
    stats: [
      { value: '70+', label: 'Partition Projects' },
      { value: '40%', label: 'Faster Installation' },
      { value: '100%', label: 'Reusable' },
      { value: 'Rw 45', label: 'Acoustic Rating (dB)' },
    ],
    benefits: [
      { icon: '⚡', title: 'Quick Installation', description: 'Pre-fabricated systems reduce on-site installation time by 40% compared to conventional construction.' },
      { icon: '🔄', title: 'Reconfigurable', description: 'Demountable systems allow easy layout modifications as business requirements change.' },
      { icon: '🌡️', title: 'Thermal Insulation', description: 'Insulated options with PUF/PIR cores for temperature-controlled areas and energy efficiency.' },
      { icon: '🎨', title: 'Design Flexibility', description: 'Multiple finishes (HPL, steel, glass), colors, and configurations to match any environment.' },
    ],
    productsUsed: [
      { name: 'Sandwich PUF Panels', description: 'Insulated core for thermal partitions', link: '/products/sandwich-panels/sandwich-puf-panel' },
      { name: 'Cleanroom Partitions', description: 'GMP-compliant partition systems', link: '/products/cleanroom-solutions/cleanroom-partition' },
      { name: 'Cleanroom Doors', description: 'Integrated door systems', link: '/products/cleanroom-solutions/cleanroom-doors' },
    ],
    process: [
      { step: 1, title: 'Space Planning', description: 'Layout design, workflow optimization, and requirement finalization.' },
      { step: 2, title: 'Selection', description: 'Choosing panel type, finish, and accessories based on application needs.' },
      { step: 3, title: 'Fabrication', description: 'Custom fabrication to exact specifications.' },
      { step: 4, title: 'Installation', description: 'Professional installation with minimal disruption.' },
      { step: 5, title: 'Finishing', description: 'Doors, windows, electrical integration, and final touches.' },
    ],
    applications: [
      { question: 'What types of partitions do you offer?', answer: 'We offer: Cleanroom partitions (GMP), Insulated industrial partitions (PUF/PIR), Office partitions (glass/solid), Acoustic partitions, and Fire-rated partitions. Each type is customized for specific applications.' },
      { question: 'Can partitions be moved to a new location?', answer: 'Yes. Our demountable partition systems can be disassembled, transported, and reinstalled with 90%+ reusability. This is ideal for leased spaces or evolving business needs.' },
      { question: 'What sound insulation is possible?', answer: 'Standard partitions achieve Rw 35-40 dB. High-performance acoustic partitions with double panels and insulation can achieve Rw 45-50 dB for privacy-sensitive applications.' },
      { question: 'Can glass be integrated into partitions?', answer: 'Yes. We provide full-height glazing, vision panels, and clerestory options using toughened or laminated safety glass. Frameless glazing creates modern, open aesthetics.' },
      { question: 'Are fire-rated partitions available?', answer: 'Yes. Fire-rated partitions with 30/60/90/120 minute ratings are available for compartmentalization and escape route protection. All are certified to IS/BS standards.' },
    ],
    industries: ['Pharmaceutical', 'Offices', 'Healthcare', 'Industrial', 'Retail', 'Education'],
    testimonial: {
      quote: 'We reconfigured our entire production floor using PHOENIXX partitions over a weekend. Zero downtime and excellent finish quality. Already planning our R&D expansion with same system.',
      author: 'Plant Head',
      company: 'Electronics Manufacturer, Gujarat',
      rating: 4.7,
      reviews: 18,
    },
    faqs: [
      { question: 'How long does partition installation take?', answer: 'Installation rates: 100-200 sq.ft/day depending on complexity. A 5000 sq.ft office partition project typically takes 2-3 weeks including doors and electrical integration.' },
      { question: 'What heights are possible?', answer: 'Standard heights up to 4000mm for single-span partitions. For higher ceilings, we provide support systems for floor-to-ceiling installations up to 6000mm or more.' },
      { question: 'Can electrical points be integrated?', answer: 'Yes. We provide cable management channels, power outlets, data ports, and switch integration within partition systems. This maintains clean aesthetics while ensuring functionality.' },
      { question: 'What maintenance is required?', answer: 'Minimal maintenance—periodic cleaning of surfaces and checking of joints. We recommend annual inspection of hardware and gaskets for cleanroom partitions.' },
      { question: 'Do you provide design services?', answer: 'Yes. Our team provides space planning, 3D visualization, and detailed drawings. We work with architects and interior designers for integrated solutions.' },
      { question: 'What warranty do you provide?', answer: '5 years on panels and structure, 2 years on finish, 1 year on hardware. Extended warranties available with AMC.' },
    ],
  },
  'prefab-house': {
    title: 'Prefab Structures',
    seoTitle: 'Prefab House Manufacturer India | Portable Cabins & Site Offices | PHOENIXX',
    tagline: 'Rapid Construction Solutions',
    description: 'Prefabricated structures for residential, commercial, and temporary needs.',
    seoDescription: 'PHOENIXX manufactures prefab houses, portable cabins, site offices in India. Quick assembly in days. Relocatable. Cost-effective. Insulated for all climates.',
    longDescription: 'PHOENIXX Prefab Structures offer quick-build solutions with factory-controlled quality. Ideal for site offices, labor accommodations, temporary facilities, and permanent buildings requiring fast delivery and cost-effectiveness.',
    aiSummary: 'PHOENIXX manufactures Prefab Structures in India: Portable cabins, site offices, prefab houses, labor camps. Features: Assembly in 3-7 days, relocatable, insulated, cost-effective. Applications: Construction sites, farms, temporary facilities, affordable housing.',
    keywords: ['prefab house', 'portable cabin', 'site office', 'prefabricated building', 'modular building', 'labor camp'],
    gradient: 'from-amber-600 to-orange-600',
    stats: [
      { value: '100+', label: 'Prefab Units Delivered' },
      { value: '3-7', label: 'Days Assembly' },
      { value: '70%', label: 'Reusable' },
      { value: '25+', label: 'Year Lifespan' },
    ],
    benefits: [
      { icon: '⚡', title: 'Assembly in Days', description: 'Pre-fabricated components enable rapid on-site assembly—typically 3-7 days for standard units.' },
      { icon: '✅', title: 'Consistent Quality', description: 'Factory manufacturing ensures uniform quality regardless of site conditions or weather.' },
      { icon: '🚚', title: 'Relocatable', description: 'Can be disassembled and moved to new locations with 70%+ material reuse.' },
      { icon: '💰', title: 'Cost-Effective', description: 'Lower construction costs, faster occupancy, and reduced site labor requirements.' },
    ],
    productsUsed: [
      { name: 'Sandwich PUF Panels', description: 'Insulated walls and roofing for thermal comfort', link: '/products/sandwich-panels/sandwich-puf-panel' },
      { name: 'Industrial Doors', description: 'Entry doors for prefab units', link: '/products/doors' },
    ],
    process: [
      { step: 1, title: 'Design', description: 'Layout and specification finalization based on requirements.' },
      { step: 2, title: 'Foundation', description: 'Simple foundation preparation—often just leveled ground with blocks.' },
      { step: 3, title: 'Manufacturing', description: 'Factory production of wall, roof, and floor modules.' },
      { step: 4, title: 'Transport', description: 'Delivery to site on standard trucks.' },
      { step: 5, title: 'Assembly', description: 'On-site assembly by our trained team.' },
    ],
    applications: [
      { question: 'What types of prefab structures do you build?', answer: 'Site offices, labor accommodations, security cabins, canteens, toilets, farm houses, resorts, and affordable housing. Custom designs for specific needs.' },
      { question: 'How long do prefab structures last?', answer: 'With proper maintenance, our prefab structures last 20-30 years. The steel frame and insulated panels are durable and weather-resistant for all Indian climates.' },
      { question: 'Can prefab units be customized?', answer: 'Yes. We customize sizes, layouts, windows, doors, electrical, plumbing, and finishes. From basic site offices to fully-equipped accommodation units.' },
      { question: 'Are prefab structures suitable for permanent use?', answer: 'Yes. Many customers use our prefab units as permanent offices, residences, and facilities. Building approvals are possible depending on local regulations.' },
      { question: 'What insulation is provided?', answer: 'Standard units use 50mm PUF panels (R-value ~2.3 m²K/W). For extreme climates, we provide 75-100mm panels for enhanced thermal comfort and energy savings.' },
    ],
    industries: ['Construction', 'Mining', 'Agriculture', 'Infrastructure', 'Hospitality', 'Residential'],
    testimonial: {
      quote: 'Delivered 20 site office units across 3 project sites in just 6 weeks. Quality is excellent and our teams are comfortable even in summer heat. Great value for money.',
      author: 'Project Manager',
      company: 'Construction Company, Maharashtra',
      rating: 4.6,
      reviews: 15,
    },
    faqs: [
      { question: 'What is the cost of a prefab cabin?', answer: 'Standard site office (10x12 ft): ₹1.5-2.5 lakhs. Labor accommodation (20x40 ft): ₹4-6 lakhs. Prices depend on size, specifications, and accessories included.' },
      { question: 'What foundation is required?', answer: 'Simple leveled ground with concrete blocks is sufficient for temporary installations. Permanent structures may require strip foundations depending on soil conditions.' },
      { question: 'Can AC be installed in prefab units?', answer: 'Yes. Our insulated panels support AC loads. We provide provisions for split AC units with proper sealing to maintain thermal efficiency.' },
      { question: 'Are prefab units fire-resistant?', answer: 'Standard PUF panels are B3 rated. For enhanced fire safety, we offer PIR panels with B2 rating. Fire extinguishers and smoke detectors are recommended.' },
      { question: 'Do you provide toilet and bathroom fittings?', answer: 'Yes. We supply prefab units with integrated toilets, bathrooms, plumbing, and fixtures. Portable toilet units are also available for construction sites.' },
      { question: 'Can multiple units be connected?', answer: 'Yes. Units can be joined to create larger facilities. Corridors, common areas, and multi-room configurations are possible with proper connection details.' },
    ],
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.keywords,
    alternates: { canonical: `/solutions/${slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }));
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://phoenixxsmartbuild.com/solutions' },
      { '@type': 'ListItem', position: 3, name: data.title, item: `https://phoenixxsmartbuild.com/solutions/${slug}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.description,
    provider: {
      '@type': 'Organization',
      name: 'PHOENIXX Infratech Projects',
      address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressCountry: 'IN' },
    },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: data.testimonial.rating.toString(), reviewCount: data.testimonial.reviews.toString() },
  };

  const images = solutionImages[slug] || [];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={serviceSchema} />
        <AISummaryBlock summary={data.aiSummary} keywords={data.keywords} />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            {images[0] && <Image src={images[0]} alt={data.title} fill className="object-cover" priority />}
            <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60`} />
          </div>

          <div className="container-custom relative z-10 py-16 md:py-24">
            <nav className="mb-6 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/solutions" className="hover:text-white">Solutions</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{data.title}</span>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">{data.tagline}</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">{data.title}</h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">{data.longDescription}</p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className={`inline-flex items-center gap-2 rounded-xl bg-gradient-to-r ${data.gradient} px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl`}>
                  Request Quote
                </Link>
                <Link href="/contact-us" className="btn-secondary px-6 py-3">Schedule Consultation</Link>
                <Link href="/resources/brochure" className="btn-secondary px-6 py-3">📄 Download Brochure</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Why Choose PHOENIXX {data.title}?</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {data.benefits.map((benefit) => (
                <div key={benefit.title} className="text-center p-6 rounded-2xl bg-slate-50 hover:shadow-lg transition-shadow">
                  <span className="text-4xl">{benefit.icon}</span>
                  <h3 className="mt-4 font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Used */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">Products Used in This Solution</h2>
            <p className="text-center text-slate-600 max-w-2xl mx-auto mb-12">Our integrated approach combines multiple PHOENIXX products for comprehensive solutions.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {data.productsUsed.map((product) => (
                <Link key={product.name} href={product.link} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                  <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{product.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Project Gallery */}
        {images.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Project Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group shadow-lg">
                    <Image src={img} alt={`${data.title} - Project ${idx + 1}`} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Our Delivery Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
                <div className="space-y-8">
                  {data.process.map((step) => (
                    <div key={step.step} className="relative flex gap-6 md:items-center">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10`}>
                        {step.step}
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="font-bold text-slate-900">{step.title}</h3>
                        <p className="mt-1 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications Q&A */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Application Guide</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {data.applications.map((app, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate-900">{app.question}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{app.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-500 text-xl">★</span>)}</div>
              <span className="text-slate-600">{data.testimonial.rating}/5 from {data.testimonial.reviews}+ projects</span>
            </div>
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-700 italic">&ldquo;{data.testimonial.quote}&rdquo;</p>
              <footer className="mt-4">
                <p className="font-bold text-slate-900">{data.testimonial.author}</p>
                <p className="text-slate-600">{data.testimonial.company}</p>
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {data.industries.map((ind) => (
                <span key={ind} className="px-4 py-2 rounded-full bg-white text-slate-700 text-sm font-medium shadow-sm">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-3">
              {data.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white flex items-center justify-center group-open:rotate-180 transition-transform shadow-sm">
                      <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 bg-gradient-to-r ${data.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Start Your Project?</h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">Our team is ready to help you plan and execute your infrastructure project with precision and reliability.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/919727700442" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600">💬 WhatsApp Us</Link>
              <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:shadow-xl">📩 Get Free Quote</Link>
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10">Talk to Expert</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
