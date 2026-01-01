import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

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

// Enhanced product data with FAQs, benefits, and internal links
interface ProductData {
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  features: { title: string; description: string; icon?: string }[];
  benefits: { title: string; description: string }[];
  specifications: { category: string; items: { label: string; value: string }[] }[];
  applications: { name: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedProducts: { name: string; slug: string; category: string }[];
  relatedSolutions: { name: string; slug: string }[];
  relatedIndustries: { name: string; slug: string }[];
  gradient: string;
}

const productsData: Record<string, Record<string, ProductData>> = {
  'sandwich-panels': {
    'pir-panel': {
      name: 'PIR Panels',
      tagline: 'Superior Fire Resistance & Thermal Performance',
      description: 'Polyisocyanurate (PIR) insulated panels with Class B-s1, d0 fire rating for cold storage, pharma, and industrial buildings.',
      longDescription: 'PHOENIXX PIR Panels are engineered for applications requiring superior fire performance and thermal insulation. The polyisocyanurate core provides excellent fire resistance with minimal smoke emission, making it ideal for buildings with stringent fire safety requirements. Trusted by 500+ clients across India for cold storage, pharmaceutical, and industrial applications.',
      metaTitle: 'PIR Sandwich Panels | Fire-Rated Insulated Panels | PHOENIXX',
      metaDescription: 'Premium PIR sandwich panels with Class B-s1, d0 fire rating & 0.022 W/mK thermal conductivity. Ideal for cold storage, pharma & industrial buildings. Get quote now!',
      features: [
        { title: 'Class B-s1, d0 Fire Rating', description: 'Meets the highest fire safety standards with limited contribution to fire and very low smoke production.', icon: '🔥' },
        { title: 'Superior Thermal Insulation', description: 'Thermal conductivity of 0.022 W/mK provides excellent energy efficiency and temperature control.', icon: '❄️' },
        { title: 'Lightweight Construction', description: 'Reduces structural load and installation time while maintaining excellent strength.', icon: '⚡' },
        { title: 'Long Service Life', description: '25+ years durability with proper installation and maintenance.', icon: '🛡️' },
      ],
      benefits: [
        { title: '30% Energy Savings', description: 'Superior thermal performance reduces HVAC costs significantly compared to traditional construction.' },
        { title: 'Fastest Installation', description: 'Pre-fabricated panels reduce construction time by up to 50% vs conventional methods.' },
        { title: 'Insurance-Friendly', description: 'FM Approved options available that can reduce insurance premiums for your facility.' },
        { title: 'Zero Maintenance', description: 'No painting or repairs needed for decades with proper installation.' },
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
      applications: [
        { name: 'Cold Storage Facilities', description: 'Maintains -25°C to +15°C temperatures efficiently for frozen and chilled storage.' },
        { name: 'Food Processing Plants', description: 'HACCP-compliant surfaces for hygienic food manufacturing environments.' },
        { name: 'Pharmaceutical Buildings', description: 'GMP-compliant panels for controlled environment manufacturing.' },
        { name: 'Data Centers', description: 'Fire-safe construction with excellent thermal management for server rooms.' },
        { name: 'Industrial Warehouses', description: 'Energy-efficient building envelopes for large-span structures.' },
        { name: 'Commercial Buildings', description: 'Aesthetic and functional cladding for modern commercial architecture.' },
      ],
      faqs: [
        { question: 'What is a PIR panel?', answer: 'A PIR (Polyisocyanurate) panel is a type of insulated sandwich panel consisting of two metal facings bonded to a rigid PIR foam core. It offers superior fire resistance (Class B-s1, d0) and thermal insulation (0.022 W/mK) compared to standard PUF panels.' },
        { question: 'What is the difference between PIR and PUF panels?', answer: 'PIR panels have a modified polyurethane chemistry that provides better fire performance (Class B-s1, d0 vs Class E for PUF) and slightly better thermal conductivity (0.022 vs 0.024 W/mK). PIR is recommended for applications requiring fire safety compliance.' },
        { question: 'Are PIR panels FM Approved?', answer: 'Yes, PHOENIXX offers FM Approved PIR panels that meet Factory Mutual insurance requirements. FM Approved panels can help reduce insurance premiums for cold storage and industrial facilities.' },
        { question: 'What thickness of PIR panel do I need for cold storage?', answer: 'For cold storage at -20°C to -25°C, we recommend 100-150mm PIR panels. For chilled storage (+2°C to +8°C), 60-80mm is typically sufficient. Our engineers can calculate exact requirements based on your location and temperature needs.' },
        { question: 'How long do PIR panels last?', answer: 'PHOENIXX PIR panels have a service life of 25+ years with proper installation and maintenance. The panels maintain their thermal and structural properties throughout their lifespan.' },
        { question: 'Can PIR panels be used for roofing?', answer: 'Yes, PIR panels are available in trapezoidal profiles specifically designed for roofing applications. They provide excellent weatherproofing along with thermal insulation.' },
        { question: 'What is the fire rating of PIR panels?', answer: 'PHOENIXX PIR panels achieve Class B-s1, d0 fire classification, meaning limited contribution to fire, very low smoke production, and no flaming droplets. Some variants can achieve up to 2-hour fire resistance ratings.' },
        { question: 'Are PIR panels suitable for cleanrooms?', answer: 'Yes, PIR panels with appropriate facings (stainless steel, PVC film, or PVDF coated) are ideal for cleanroom construction. They provide smooth, non-porous surfaces that meet GMP and ISO cleanliness standards.' },
        { question: 'What is the R-value of PIR panels?', answer: 'PIR panels offer R-values ranging from R-7 (30mm) to R-45 (200mm). The thermal conductivity of 0.022 W/mK provides approximately 15% better insulation than standard PUF panels at the same thickness.' },
        { question: 'How are PIR panels installed?', answer: 'PIR panels are installed using cam-lock or tongue-and-groove joints. Wall panels are typically installed vertically with concealed fixings, while roof panels use through-fixings with proper sealants. Installation is 50% faster than conventional construction.' },
        { question: 'Can PIR panels be curved?', answer: 'Standard PIR panels are flat, but curved panels can be manufactured for architectural applications with minimum radius requirements. Contact our technical team for curved panel specifications.' },
        { question: 'What colors are available for PIR panels?', answer: 'PIR panels are available in all RAL standard colors. Popular choices include Off-White (RAL 9002), Grey (RAL 7035), and Blue (RAL 5010). Custom colors are available for orders above 500 sqm.' },
        { question: 'Do PIR panels need maintenance?', answer: 'PIR panels require minimal maintenance. Annual cleaning with mild detergent and inspection of joints and sealants is recommended. The panels do not need painting or waterproofing treatments.' },
        { question: 'What is the cost of PIR panels per sqm?', answer: 'PIR panel pricing varies based on thickness, facing material, and order quantity. Contact our sales team for competitive quotes. PIR panels typically cost 10-15% more than PUF panels but offer superior performance.' },
        { question: 'Are PIR panels environmentally friendly?', answer: 'Yes, PHOENIXX PIR panels use zero-ODP (Ozone Depletion Potential) blowing agents and are fully recyclable. The energy savings over the building lifecycle significantly offset the embodied carbon.' },
      ],
      relatedProducts: [
        { name: 'Sandwich PUF Panels', slug: 'sandwich-puf-panel', category: 'sandwich-panels' },
        { name: 'Rockwool Panels', slug: 'rockwool-panel', category: 'sandwich-panels' },
        { name: 'Cleanroom Doors', slug: 'cleanroom-door', category: 'doors' },
      ],
      relatedSolutions: [
        { name: 'Cold Storage Construction', slug: 'cold-storage-construction' },
        { name: 'Pre-Engineered Buildings', slug: 'peb' },
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
      ],
      relatedIndustries: [
        { name: 'Food Processing', slug: 'food-processing' },
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Cold Chain & Logistics', slug: 'dairy' },
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'sandwich-puf-panel': {
      name: 'Sandwich PUF Panels',
      tagline: 'Cost-Effective Thermal Insulation',
      description: 'High-quality polyurethane foam sandwich panels for industrial walls, roofs, and cold rooms at competitive prices.',
      longDescription: 'PHOENIXX Sandwich PUF Panels offer excellent thermal insulation at competitive pricing. The polyurethane foam core provides reliable temperature control for a wide range of industrial and commercial applications. With over 2 million sqm installed across India, our PUF panels are the preferred choice for budget-conscious projects without compromising quality.',
      metaTitle: 'PUF Sandwich Panels | Insulated Wall & Roof Panels | PHOENIXX',
      metaDescription: 'Premium PUF sandwich panels with 0.024 W/mK thermal conductivity. Best prices for industrial buildings, warehouses & cold rooms. ISO certified manufacturer.',
      features: [
        { title: 'Cost-Effective Solution', description: 'Optimal balance of performance and pricing for budget-conscious projects.', icon: '💰' },
        { title: 'Good Thermal Insulation', description: 'Thermal conductivity of 0.024 W/mK ensures effective temperature control.', icon: '🌡️' },
        { title: 'Versatile Applications', description: 'Suitable for walls, roofs, and partitions across various industries.', icon: '🏭' },
        { title: 'Easy Installation', description: 'Interlocking joint systems enable fast, efficient installation.', icon: '⚡' },
      ],
      benefits: [
        { title: 'Best Value for Money', description: 'Get premium insulation performance at 15-20% lower cost than PIR panels.' },
        { title: '40% Faster Construction', description: 'Pre-fabricated panels with interlocking joints speed up project completion.' },
        { title: 'Energy Efficient', description: 'Reduce HVAC costs by up to 25% with superior thermal insulation.' },
        { title: 'Customizable', description: 'Available in any length up to 12m, multiple thicknesses and colors.' },
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
      applications: [
        { name: 'Industrial Buildings', description: 'Complete building envelopes for factories and manufacturing units.' },
        { name: 'Warehouses', description: 'Large-span structures with excellent thermal management.' },
        { name: 'Cold Rooms', description: 'Walk-in coolers and freezers for commercial applications.' },
        { name: 'Commercial Buildings', description: 'Office complexes and retail spaces with energy efficiency.' },
        { name: 'Agricultural Buildings', description: 'Poultry farms, dairy sheds, and storage facilities.' },
      ],
      faqs: [
        { question: 'What is PUF panel?', answer: 'PUF (Polyurethane Foam) panel is an insulated sandwich panel with two metal facings and a rigid polyurethane foam core. It provides excellent thermal insulation with a conductivity of 0.024 W/mK and is widely used for industrial and commercial buildings.' },
        { question: 'What is the price of PUF panels per sqm?', answer: 'PUF panel prices vary based on thickness, facing material, and quantity. Typically ranges from ₹800-1800 per sqm. Contact us for exact quotes based on your project requirements.' },
        { question: 'What thickness of PUF panel is best for walls?', answer: 'For general industrial walls, 40-60mm PUF panels are recommended. For temperature-controlled environments, 80-120mm provides better insulation. Our team can recommend optimal thickness based on your specific needs.' },
        { question: 'How long do PUF panels last?', answer: 'Quality PUF panels like PHOENIXX last 20-25 years with proper installation and maintenance. The foam core maintains its insulation properties throughout its lifespan.' },
        { question: 'Can PUF panels be used for roofing?', answer: 'Yes, PHOENIXX offers roofing-specific PUF panels with trapezoidal profiles for water drainage and added structural strength. They provide both insulation and weatherproofing.' },
        { question: 'Are PUF panels fire resistant?', answer: 'Standard PUF panels have Class E fire rating with self-extinguishing properties. For higher fire resistance, we recommend PIR or Rockwool panels.' },
        { question: 'What is the R-value of PUF panels?', answer: 'PUF panels provide R-values from R-5.5 (30mm) to R-35 (150mm). The 0.024 W/mK thermal conductivity offers excellent insulation per thickness.' },
        { question: 'How are PUF panels installed?', answer: 'PUF panels install quickly using cam-lock or tongue-and-groove joints. Vertical installation for walls with concealed fixings, horizontal for roofs with through-fixings. Typical installation rate is 200-300 sqm per day.' },
        { question: 'Can PUF panels be cut on site?', answer: 'Yes, PUF panels can be cut on site using circular saws or jigsaws. However, factory cutting is recommended for clean edges and proper sealing.' },
        { question: 'What colors are available?', answer: 'All RAL standard colors are available. Popular choices: Off-white (RAL 9002), Signal white (RAL 9003), Grey (RAL 7035). Custom colors available for larger orders.' },
        { question: 'Do PUF panels need maintenance?', answer: 'Minimal maintenance required. Annual cleaning and joint inspection is recommended. No painting or waterproofing treatments needed.' },
        { question: 'What is the difference between continuous and discontinuous PUF panels?', answer: 'Continuous panels are made on continuous production lines offering consistent quality and unlimited lengths. Discontinuous panels are made in fixed molds. PHOENIXX uses continuous technology for superior quality.' },
        { question: 'Are PHOENIXX PUF panels certified?', answer: 'Yes, our PUF panels are ISO 9001 certified, tested as per IS 14925, and comply with NBC 2016 requirements.' },
        { question: 'Can PUF panels be used for cold storage?', answer: 'Yes, PUF panels are excellent for cold rooms and small cold storage. For large cold storage facilities requiring fire compliance, PIR panels are recommended.' },
        { question: 'What is the lead time for PUF panels?', answer: 'Standard panels: 7-10 days. Custom specifications: 15-20 days. Express delivery available for urgent requirements.' },
      ],
      relatedProducts: [
        { name: 'PIR Panels', slug: 'pir-panel', category: 'sandwich-panels' },
        { name: 'Roofing PUF Panels', slug: 'roofing-puf-panel', category: 'sandwich-panels' },
        { name: 'Wall & Ceiling Panels', slug: 'wall-ceiling-panel', category: 'sandwich-panels' },
      ],
      relatedSolutions: [
        { name: 'Pre-Engineered Buildings', slug: 'peb' },
        { name: 'Cold Storage Construction', slug: 'cold-storage-construction' },
        { name: 'False Ceiling Systems', slug: 'false-ceiling-partition' },
      ],
      relatedIndustries: [
        { name: 'Food Processing', slug: 'food-processing' },
        { name: 'Warehousing', slug: 'automotive' },
        { name: 'Agriculture', slug: 'dairy' },
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'roofing-puf-panel': {
      name: 'PUF Sandwich Roof Panels',
      tagline: 'Seamless Design. Superior Strength. Smarter Roofing by PHOENIXX.',
      description: 'PHOENIXX PUF Sandwich Roof Panels are engineered to meet the growing demand for energy-efficient, high-strength, and long-lasting roofing solutions across industrial, commercial, and prefabricated buildings in India.',
      longDescription: `A PUF sandwich roof panel is an insulated roofing system made by injecting rigid Polyurethane Foam (PUF) between two pre-painted metal sheets. This creates a strong composite panel that combines lightweight construction with superior insulation and load-bearing capacity. PUF roof panels are widely used where temperature control, energy efficiency, and long service life are critical.

Unlike conventional roofing sheets, PHOENIXX panels are engineered to achieve a load-bearing capacity far greater than the combined strength of individual layers. This allows panels to safely bridge wide spans while remaining lightweight.

PHOENIXX PUF sandwich roof panels are specially designed to perform reliably in Indian weather conditions, including high ambient temperatures, heavy rainfall and humidity, strong winds (up to 120 km/h), industrial pollution and UV exposure. This makes them ideal for projects across all regions of India.`,
      metaTitle: 'PUF Sandwich Roof Panel Manufacturer in India | PHOENIXX SMARTBUILD',
      metaDescription: 'Leading PUF sandwich roof panel manufacturer in India. Energy-efficient insulated roofing with 25-30 year lifespan, 40-60% faster installation. CFC & HFC free. Get quote!',
      features: [
        { title: 'Excellent Thermal Insulation', description: 'Low thermal conductivity (0.024-0.030 W/mK) reduces heat transfer, minimizing dependency on air-conditioning and cooling systems.', icon: '🌡️' },
        { title: 'Lightweight Yet Strong', description: 'Engineered to achieve load-bearing capacity far greater than combined strength of individual layers while remaining lightweight.', icon: '💪' },
        { title: '40-60% Faster Installation', description: 'Large effective cover width, interlocking design, and no secondary insulation needed enables rapid installation.', icon: '⚡' },
        { title: 'Weather Resistant', description: 'Designed for Indian conditions - withstands high temperatures, heavy rainfall, humidity, winds up to 120 km/h, and UV exposure.', icon: '🌦️' },
        { title: 'Fire-Retardant Options', description: 'Available in B1, B2, B3, and PIR foam types for enhanced fire safety compliance.', icon: '🔥' },
        { title: 'CFC & HFC Free', description: 'Environmentally friendly manufacturing - supports green building initiatives and reduces carbon footprint.', icon: '🌱' },
      ],
      benefits: [
        { title: 'Significant Energy Savings', description: 'Low thermal conductivity minimizes heat gain, reducing electricity consumption and operating costs over time.' },
        { title: 'Reduced Structural Steel', description: 'Longer spans mean fewer purlins and reduced structural steel weight, lowering overall project costs.' },
        { title: 'Year-Round Indoor Comfort', description: 'Consistent indoor temperature maintained regardless of external weather conditions.' },
        { title: 'Low Maintenance', description: 'Long service life of 25-30 years with proper installation. No painting or regular repairs required.' },
        { title: 'Custom Manufacturing', description: 'Panels manufactured to exact sizes up to 20 meters length with custom thickness, color, and coatings.' },
        { title: 'Pan-India Delivery', description: 'Faster delivery timelines with dedicated technical and after-sales support across India.' },
      ],
      specifications: [
        {
          category: 'Panel Dimensions',
          items: [
            { label: 'Available Thickness', value: '30mm | 40mm | 50mm | 80mm | 100mm | 120mm' },
            { label: 'Total Width', value: '1070 mm' },
            { label: 'Effective Cover Width', value: '1000 mm' },
            { label: 'Panel Length', value: '1000 mm – 20,000 mm (custom)' },
          ],
        },
        {
          category: 'Core Properties',
          items: [
            { label: 'PUF Density', value: '40 ± 2 kg/m³' },
            { label: 'Thermal Conductivity', value: '0.024 – 0.030 W/mK' },
            { label: 'Operating Temp Range', value: '-40°C to +80°C' },
            { label: 'Foam Types Available', value: 'B1 | B2 | B3 | PIR' },
          ],
        },
        {
          category: 'Performance',
          items: [
            { label: 'Wind Resistance', value: 'Up to 120 km/h' },
            { label: 'Paint Coatings', value: 'SMP | SDP | PVDF (Internal & External)' },
            { label: 'Environment Friendly', value: 'CFC & HFC Free' },
            { label: 'Minimum Roof Slope', value: '5-7 degrees recommended' },
          ],
        },
      ],
      applications: [
        { name: 'Industrial Sheds & Manufacturing Plants', description: 'Temperature-controlled manufacturing environments with consistent indoor comfort.' },
        { name: 'Warehouses & Logistics Parks', description: 'Large-span roofing for storage facilities with energy-efficient climate control.' },
        { name: 'Cold Storage & Food Processing Units', description: 'Excellent thermal insulation ideal for refrigerated warehouses and food-grade environments.' },
        { name: 'Pharmaceutical & Cleanroom Facilities', description: 'GMP-compliant roofing solutions for controlled environment manufacturing.' },
        { name: 'Commercial Buildings', description: 'Energy-efficient roofing for offices, retail spaces, and showrooms.' },
        { name: 'Prefabricated & Modular Structures', description: 'Fast-installation roofing for prefab buildings, site offices, and temporary structures.' },
      ],
      faqs: [
        { question: 'What is a PUF sandwich roof panel?', answer: 'A PUF sandwich roof panel is an insulated roofing system made by injecting rigid Polyurethane Foam (PUF) between two pre-painted metal sheets. This creates a strong composite panel that combines lightweight construction with superior insulation and load-bearing capacity.' },
        { question: 'What is the life span of a PUF sandwich roof panel?', answer: 'PHOENIXX PUF sandwich roof panels typically last 25-30 years or more with proper installation and maintenance. PVDF-coated panels can last even longer with superior UV resistance.' },
        { question: 'Are PUF roof panels suitable for cold storage buildings?', answer: 'Yes, PUF roof panels are ideal for cold storage due to their excellent thermal insulation properties. The low thermal conductivity (0.024-0.030 W/mK) maintains consistent temperatures and reduces energy consumption.' },
        { question: 'Do PUF roofing panels require additional insulation?', answer: 'No, PUF sandwich roof panels are pre-insulated roofing systems. The rigid polyurethane foam core provides built-in thermal insulation, eliminating the need for secondary insulation.' },
        { question: 'Are PHOENIXX panels customizable?', answer: 'Yes, PHOENIXX panels are fully customizable. Thickness (30-120mm), length (up to 20m), colors (RAL standard), and coatings (SMP/SDP/PVDF) can all be specified based on project requirements.' },
        { question: 'How do PUF panels compare with metal roofing sheets?', answer: 'PUF sandwich panels provide built-in insulation, better energy efficiency, noise reduction, and longer service life compared to plain metal roofing sheets. They also reduce HVAC costs significantly.' },
        { question: 'What is the difference between PUF and PIR roof panels?', answer: 'PUF panels offer excellent insulation at economical cost, ideal for warehouses and factories. PIR panels provide enhanced fire resistance and are recommended for pharma, cold storage, and high-compliance projects.' },
        { question: 'What factors affect PUF roof panel price?', answer: 'The cost depends on panel thickness, foam type (PUF or PIR), steel thickness, paint coating (SMP/SDP/PVDF), quantity, and project location. PHOENIXX offers competitive pricing with custom manufacturing flexibility.' },
        { question: 'How fast can PUF sandwich roof panels be installed?', answer: 'PUF sandwich roof panels can be installed 40-60% faster than traditional roofing systems due to large effective cover width (1000mm), interlocking panel design, and no requirement for secondary insulation.' },
        { question: 'What slope is required for PUF roofing?', answer: 'A minimum roof slope of 5-7 degrees is recommended for proper water drainage. Higher slopes improve drainage and reduce the risk of water ponding.' },
        { question: 'Can PUF roofing panels withstand Indian weather conditions?', answer: 'Yes, PHOENIXX panels are specifically designed for Indian conditions including high ambient temperatures, heavy rainfall, humidity, strong winds (up to 120 km/h), industrial pollution, and UV exposure.' },
        { question: 'Are PHOENIXX PUF panels environmentally friendly?', answer: 'Yes, PHOENIXX PUF roof panels are CFC & HFC free, energy-efficient, and designed to reduce carbon footprint. They support green building initiatives and sustainable construction practices.' },
        { question: 'Can solar panels be installed on PUF roofing?', answer: 'Yes, solar panels can be installed using non-penetrating mounting systems or with proper flashing and sealing for through-fixings. The structural strength of PUF panels supports solar installations.' },
        { question: 'What is the manufacturing process for PUF roof panels?', answer: 'Pre-treated steel/aluminum sheets are roll-formed into roofing profiles, rigid PUF is injected between sheets, foam expands and cures bonding permanently to metal skins, panels are cut to size, coatings applied, and quality checked before dispatch.' },
        { question: 'Why choose PHOENIXX over other PUF panel manufacturers?', answer: 'PHOENIXX offers engineering optimized for Indian conditions, faster delivery timelines, custom panel sizes up to 20 meters, competitive pricing, and dedicated technical and after-sales support.' },
      ],
      relatedProducts: [
        { name: 'Sandwich PUF Panels', slug: 'sandwich-puf-panel', category: 'sandwich-panels' },
        { name: 'PIR Panels', slug: 'pir-panel', category: 'sandwich-panels' },
        { name: 'Wall & Ceiling Panels', slug: 'wall-ceiling-panel', category: 'sandwich-panels' },
        { name: 'Rockwool Panels', slug: 'rockwool-panel', category: 'sandwich-panels' },
      ],
      relatedSolutions: [
        { name: 'Pre-Engineered Buildings', slug: 'peb' },
        { name: 'Cold Storage Construction', slug: 'cold-storage-construction' },
        { name: 'Cleanroom Solutions', slug: 'cleanroom-construction' },
      ],
      relatedIndustries: [
        { name: 'Warehousing & Logistics', slug: 'automotive' },
        { name: 'Manufacturing', slug: 'textile' },
        { name: 'Food & Beverage', slug: 'dairy' },
        { name: 'Pharmaceutical', slug: 'pharma' },
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'wall-ceiling-panel': {
      name: 'Wall & Ceiling Panels',
      tagline: 'Versatile Interior & Exterior Cladding',
      description: 'Multi-purpose PUF panels for industrial false ceilings, partition walls, and interior cladding applications.',
      longDescription: 'PHOENIXX Wall & Ceiling Panels offer versatile solutions for both interior and exterior applications. Ideal for industrial false ceilings, partition walls, and exterior cladding, these panels combine aesthetic appeal with excellent thermal and acoustic insulation properties. The smooth, hygienic surfaces make them perfect for food processing and pharmaceutical environments.',
      metaTitle: 'Wall & Ceiling PUF Panels | False Ceiling Panels | PHOENIXX',
      metaDescription: 'Premium wall & ceiling PUF panels for industrial false ceilings, partitions & cladding. Smooth hygienic finish, thermal insulation. Manufacturer in India.',
      features: [
        { title: 'Dual Application', description: 'Suitable for both wall cladding and ceiling installations in single product.', icon: '🏗️' },
        { title: 'Aesthetic Finish', description: 'Smooth, flat surfaces with multiple color options for modern interiors.', icon: '✨' },
        { title: 'Acoustic Insulation', description: 'Excellent sound absorption for noise-sensitive environments.', icon: '🔇' },
        { title: 'Easy Maintenance', description: 'Smooth surfaces enable easy cleaning and long-term maintenance.', icon: '🧹' },
      ],
      benefits: [
        { title: 'Hygienic Surfaces', description: 'Non-porous, washable surfaces ideal for food and pharma applications.' },
        { title: 'Bright Interiors', description: 'White/off-white finishes improve lighting and reduce energy costs.' },
        { title: 'Quick Installation', description: 'Modular panels install in hours, not days like conventional systems.' },
        { title: 'Space Saving', description: 'Thin profiles (25-50mm) maximize usable floor and ceiling space.' },
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
      applications: [
        { name: 'Industrial False Ceilings', description: 'Insulated ceiling systems for factories and warehouses.' },
        { name: 'Clean Room Partitions', description: 'Hygienic wall systems for controlled environments.' },
        { name: 'Cold Storage Interiors', description: 'Interior lining for cold rooms and freezers.' },
        { name: 'Commercial Interiors', description: 'Modern aesthetics for offices and retail spaces.' },
        { name: 'Food Processing Units', description: 'HACCP-compliant surfaces for food manufacturing.' },
      ],
      faqs: [
        { question: 'What is the difference between wall and ceiling PUF panels?', answer: 'Wall and ceiling panels have similar construction but ceiling panels are typically thinner (25-40mm) and lighter. Wall panels are available in thicker options (40-50mm) for better thermal performance. Both use flat profiles for clean aesthetics.' },
        { question: 'Can these panels be used in food processing areas?', answer: 'Yes, PHOENIXX wall and ceiling panels with food-grade coatings are ideal for food processing. The smooth, non-porous surfaces are easy to clean and meet HACCP requirements.' },
        { question: 'What ceiling height can be achieved?', answer: 'Ceiling panels can be installed at any height using appropriate suspension systems. For heights above 6m, additional support structures may be required.' },
        { question: 'Are these panels suitable for humid environments?', answer: 'Yes, with proper sealing and stainless steel facings, these panels perform well in high-humidity environments like food processing and cold storage.' },
        { question: 'How are ceiling panels installed?', answer: 'Ceiling panels are installed on a grid suspension system using T-bars or concealed clips. Installation is quick with rates of 100-150 sqm per day.' },
        { question: 'Can lights be integrated into ceiling panels?', answer: 'Yes, panels can be cut to accommodate recessed lights, diffusers, and other ceiling fixtures. We recommend factory cutting for clean edges.' },
        { question: 'What is the acoustic performance?', answer: 'PUF panels provide sound absorption of NRC 0.15-0.25 depending on thickness. For enhanced acoustics, perforated facings or acoustic inserts are available.' },
        { question: 'Are panels fire resistant?', answer: 'Standard panels have B2 (self-extinguishing) rating. For higher fire ratings, we offer PIR or Rockwool panels for ceiling applications.' },
        { question: 'Can panels be painted?', answer: 'The factory-applied coatings do not require painting. If custom colors are needed, panels can be powder-coated or painted with compatible paints.' },
        { question: 'What maintenance is required?', answer: 'Regular cleaning with damp cloth and mild detergent is sufficient. Avoid abrasive cleaners that may scratch the surface.' },
        { question: 'Can panels be removed and reinstalled?', answer: 'Yes, panels with cam-lock joints can be easily removed and reinstalled for maintenance access or facility modifications.' },
        { question: 'What is the cost comparison with gypsum ceilings?', answer: 'PUF ceiling panels cost more initially but provide better insulation, durability, and lower maintenance costs over time. ROI is typically 3-5 years through energy savings.' },
        { question: 'Are panels suitable for cleanrooms?', answer: 'Yes, with appropriate facings and sealing, these panels are suitable for ISO Class 7-8 cleanrooms. For higher classes, dedicated cleanroom panels are recommended.' },
        { question: 'What warranty is provided?', answer: 'PHOENIXX provides 10-year warranty on panel core and structure, 5-year warranty on coating against peeling and fading.' },
        { question: 'Can panels span long distances without support?', answer: 'Ceiling panels require support grid at 1200mm centers maximum. For longer spans, additional structural support is needed.' },
      ],
      relatedProducts: [
        { name: 'Sandwich PUF Panels', slug: 'sandwich-puf-panel', category: 'sandwich-panels' },
        { name: 'Cleanroom False Ceiling', slug: 'cleanroom-false-ceiling', category: 'cleanroom-solutions' },
        { name: 'Cleanroom Partitions', slug: 'cleanroom-partition', category: 'cleanroom-solutions' },
      ],
      relatedSolutions: [
        { name: 'False Ceiling & Partition', slug: 'false-ceiling-partition' },
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
        { name: 'Cold Storage Construction', slug: 'cold-storage-construction' },
      ],
      relatedIndustries: [
        { name: 'Food Processing', slug: 'food-processing' },
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Commercial', slug: 'hospitality' },
      ],
      gradient: 'from-blue-600 to-cyan-600',
    },
    'rockwool-panel': {
      name: 'Rockwool Panels',
      tagline: 'Premium Fire-Resistant Insulation',
      description: 'A1 fire-rated mineral wool sandwich panels with 4-hour fire resistance and superior acoustic properties.',
      longDescription: 'PHOENIXX Rockwool Panels feature a mineral wool core that provides exceptional fire resistance up to 4 hours. Ideal for applications requiring the highest fire safety standards, these panels also offer excellent acoustic insulation making them perfect for industrial and commercial buildings. The non-combustible core is made from natural basalt rock, ensuring sustainable construction.',
      metaTitle: 'Rockwool Sandwich Panels | A1 Fire Rated Panels | PHOENIXX',
      metaDescription: 'A1 non-combustible Rockwool panels with 4-hour fire rating & excellent acoustic insulation. Ideal for data centers, fire-rated buildings. Manufacturer India.',
      features: [
        { title: 'A1 Fire Rating', description: 'Non-combustible mineral wool core provides up to 4-hour fire resistance.', icon: '🔥' },
        { title: 'Superior Acoustics', description: 'Excellent sound absorption coefficient for noise control applications.', icon: '🔇' },
        { title: 'Temperature Stability', description: 'Maintains properties at temperatures up to 1000°C.', icon: '🌡️' },
        { title: 'Eco-Friendly', description: 'Made from natural basalt rock, recyclable and sustainable.', icon: '♻️' },
      ],
      benefits: [
        { title: 'Ultimate Fire Safety', description: 'A1 non-combustible rating - the highest possible fire classification.' },
        { title: 'Lower Insurance Costs', description: 'Fire-rated construction can reduce insurance premiums significantly.' },
        { title: 'Noise Control', description: 'NRC up to 0.95 - ideal for industrial noise reduction.' },
        { title: 'Regulatory Compliance', description: 'Meets NBC 2016, IS 3809, and international fire codes.' },
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
      applications: [
        { name: 'Fire-Rated Buildings', description: 'Buildings requiring 2-4 hour fire barriers and compartmentation.' },
        { name: 'Acoustic Studios', description: 'Recording studios and broadcast facilities needing sound isolation.' },
        { name: 'Data Centers', description: 'Critical infrastructure requiring fire protection and cooling efficiency.' },
        { name: 'Industrial Facilities', description: 'Manufacturing plants with fire hazard processes.' },
        { name: 'High-Rise Buildings', description: 'Multi-story buildings with strict fire code requirements.' },
      ],
      faqs: [
        { question: 'What is the fire rating of Rockwool panels?', answer: 'PHOENIXX Rockwool panels achieve A1 non-combustible classification - the highest fire rating possible. They can provide fire resistance from 30 minutes to 4 hours depending on thickness and construction.' },
        { question: 'How does Rockwool compare to PIR/PUF for fire resistance?', answer: 'Rockwool is A1 (non-combustible) while PIR is B-s1,d0 and PUF is Class E. For applications requiring non-combustible materials, Rockwool is the only choice among sandwich panels.' },
        { question: 'What is the thermal performance of Rockwool panels?', answer: 'Rockwool has thermal conductivity of 0.038-0.040 W/mK, which is lower than PIR/PUF (0.022-0.024 W/mK). However, slightly thicker panels compensate for this while providing superior fire performance.' },
        { question: 'Are Rockwool panels suitable for cold storage?', answer: 'While Rockwool provides thermal insulation, PIR panels are more efficient for cold storage due to better thermal conductivity. Rockwool is preferred where fire safety is the primary concern.' },
        { question: 'What is the acoustic performance?', answer: 'Rockwool panels offer excellent sound absorption with NRC (Noise Reduction Coefficient) up to 0.95 for perforated facings. Standard panels provide NRC 0.65-0.75.' },
        { question: 'Is Rockwool safe to handle?', answer: 'Yes, modern Rockwool is bio-soluble and safe to handle. Standard PPE (gloves, masks) during installation is recommended. PHOENIXX Rockwool meets all safety standards.' },
        { question: 'What is the weight of Rockwool panels?', answer: 'Rockwool panels are heavier than PUF/PIR, weighing 15-25 kg/sqm depending on thickness. Structural design must account for this additional load.' },
        { question: 'Can Rockwool panels be used outdoors?', answer: 'Yes, with proper facings and sealing, Rockwool panels are suitable for external walls. The mineral wool core is water-resistant and does not absorb moisture.' },
        { question: 'What certifications do Rockwool panels have?', answer: 'PHOENIXX Rockwool panels are tested as per IS 3809, comply with NBC 2016, and are certified for fire performance by accredited laboratories.' },
        { question: 'How long do Rockwool panels last?', answer: 'Rockwool panels have an expected service life of 30+ years. The mineral wool core does not degrade over time and maintains its fire and thermal properties.' },
        { question: 'Can Rockwool panels be recycled?', answer: 'Yes, Rockwool is made from natural basalt rock and is fully recyclable. Steel facings are also recyclable, making these panels environmentally friendly.' },
        { question: 'What thickness is required for fire walls?', answer: 'For 2-hour fire rating: 100mm, for 4-hour fire rating: 150mm typically. Exact requirements depend on building codes and specific applications.' },
        { question: 'Are Rockwool panels more expensive than PUF?', answer: 'Yes, Rockwool panels cost approximately 30-50% more than PUF panels due to the specialized core material. However, they may reduce insurance costs and are required for certain applications.' },
        { question: 'Can utilities be routed through Rockwool panels?', answer: 'Yes, but fire-stopping must be maintained around penetrations. Fire-rated sleeves and sealants are required for maintaining the fire rating.' },
        { question: 'What industries commonly use Rockwool panels?', answer: 'Data centers, oil & gas facilities, chemical plants, high-rise buildings, hospitals, and any application requiring non-combustible construction or superior acoustic performance.' },
      ],
      relatedProducts: [
        { name: 'PIR Panels', slug: 'pir-panel', category: 'sandwich-panels' },
        { name: 'Fire Doors', slug: 'fire-door-emergency-exit', category: 'doors' },
        { name: 'Cleanroom Partitions', slug: 'cleanroom-partition', category: 'cleanroom-solutions' },
      ],
      relatedSolutions: [
        { name: 'Pre-Engineered Buildings', slug: 'peb' },
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
      ],
      relatedIndustries: [
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Oil & Gas', slug: 'pharma-chemical' },
      ],
      gradient: 'from-orange-500 to-red-600',
    },
  },
  'doors': {
    'cleanroom-door': {
      name: 'Cleanroom Doors',
      tagline: 'Contamination Control Door Systems',
      description: 'GMP-compliant cleanroom doors with airtight sealing for pharmaceutical, electronics, and food processing environments.',
      longDescription: 'PHOENIXX Cleanroom Doors are designed specifically for pharmaceutical, healthcare, electronics, and food processing cleanrooms. Features include airtight sealing, flush surfaces, and compatibility with interlock systems. Our doors meet ISO 14644 standards and are trusted by leading pharmaceutical companies across India.',
      metaTitle: 'Cleanroom Doors | GMP Compliant Doors | PHOENIXX',
      metaDescription: 'Premium cleanroom doors with airtight sealing for pharma, electronics & food processing. ISO 14644 compliant, swing/sliding/hermetic types. Get quote!',
      features: [
        { title: 'Airtight Sealing', description: 'Magnetic or brush seals ensure contamination prevention.', icon: '🔒' },
        { title: 'Flush Design', description: 'Smooth surfaces prevent particle accumulation and enable easy cleaning.', icon: '✨' },
        { title: 'Interlock Compatible', description: 'Can be integrated with airlock interlock systems for cleanroom protocols.', icon: '🔗' },
        { title: 'Automation Ready', description: 'Compatible with various automatic opening systems.', icon: '🤖' },
      ],
      benefits: [
        { title: 'GMP Compliant', description: 'Meets WHO GMP, US FDA, and EU GMP requirements for pharmaceutical facilities.' },
        { title: 'Pressure Integrity', description: 'Maintains cleanroom pressure differential with airtight construction.' },
        { title: 'Easy Validation', description: 'Designed for easy IQ/OQ documentation and qualification.' },
        { title: 'Low Maintenance', description: 'SS 304/316 construction ensures decades of trouble-free operation.' },
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
      applications: [
        { name: 'Pharmaceutical Cleanrooms', description: 'GMP-compliant doors for drug manufacturing facilities.' },
        { name: 'Electronics Manufacturing', description: 'ESD-safe doors for semiconductor and electronics cleanrooms.' },
        { name: 'Food Processing', description: 'Hygienic doors for food and beverage manufacturing.' },
        { name: 'Hospitals', description: 'Doors for operating theaters and isolation rooms.' },
        { name: 'Laboratories', description: 'BSL-rated doors for research and testing facilities.' },
      ],
      faqs: [
        { question: 'What types of cleanroom doors are available?', answer: 'PHOENIXX offers swing doors (single/double leaf), sliding doors (manual/automatic), and hermetic doors with inflatable seals. Each type is designed for specific cleanroom applications and traffic patterns.' },
        { question: 'What ISO classes are cleanroom doors suitable for?', answer: 'Our cleanroom doors are suitable for ISO Class 5 to Class 8 cleanrooms. Hermetic doors with inflatable seals are recommended for ISO 5-6, while swing doors with magnetic seals work well for ISO 7-8.' },
        { question: 'What frame materials are available?', answer: 'Frames are available in SS 304, SS 316, anodized aluminum, or powder-coated steel. SS 316 is recommended for pharmaceutical and corrosive environments.' },
        { question: 'Can doors be integrated with interlock systems?', answer: 'Yes, all our doors can be integrated with airlock interlock systems to prevent simultaneous opening. We provide compatible sensors, controllers, and visual indicators.' },
        { question: 'What vision panel options are available?', answer: 'Full-height glazing, half-height glazing, round porthole, and no-vision (solid) options are available. Double-glazed panels provide better insulation and reduced condensation.' },
        { question: 'Are automatic door operators available?', answer: 'Yes, we offer automatic operators for both swing and sliding doors. Options include touchless sensors, foot switches, and push-button activation.' },
        { question: 'What sealing systems are used?', answer: 'Brush seals for general applications, magnetic seals for ISO 7-8, and inflatable seals for ISO 5-6. Drop seals are available for bottom sealing.' },
        { question: 'Can doors be fire-rated?', answer: 'Yes, cleanroom doors are available with 30-60 minute fire rating while maintaining cleanroom functionality. Fire-rated hermetic doors are also available.' },
        { question: 'What is the lead time for cleanroom doors?', answer: 'Standard doors: 2-3 weeks. Custom sizes and specifications: 3-4 weeks. Emergency requirements can be accommodated with express manufacturing.' },
        { question: 'What certifications do doors have?', answer: 'PHOENIXX cleanroom doors comply with ISO 14644, WHO GMP guidelines, and are tested for airtightness. Fire-rated versions have IS/BS certifications.' },
        { question: 'How is airtightness tested?', answer: 'Doors are tested for air leakage at specified pressure differentials (typically 15-50 Pa). Test certificates are provided with each door.' },
        { question: 'Can existing doors be retrofitted?', answer: 'In most cases, yes. We offer retrofit solutions with new frames, seals, and hardware to upgrade existing openings to cleanroom standards.' },
        { question: 'What warranty is provided?', answer: 'PHOENIXX provides 2-year warranty on door structure and 1-year on electrical/automation components. Extended warranty options available.' },
        { question: 'What maintenance is required?', answer: 'Regular cleaning with approved cleaners, inspection of seals and hardware quarterly, and annual calibration of automatic operators is recommended.' },
        { question: 'Can doors be provided with IQ/OQ documentation?', answer: 'Yes, we provide complete IQ/OQ documentation packages including specifications, test certificates, installation records, and operational qualification protocols.' },
      ],
      relatedProducts: [
        { name: 'Fire Doors', slug: 'fire-door-emergency-exit', category: 'doors' },
        { name: 'Cleanroom Partitions', slug: 'cleanroom-partition', category: 'cleanroom-solutions' },
        { name: 'Cleanroom False Ceiling', slug: 'cleanroom-false-ceiling', category: 'cleanroom-solutions' },
      ],
      relatedSolutions: [
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
        { name: 'Pharmaceutical Cleanrooms', slug: 'cleanroom-construction' },
      ],
      relatedIndustries: [
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Healthcare', slug: 'healthcare' },
      ],
      gradient: 'from-orange-600 to-red-600',
    },
    'fire-door-emergency-exit': {
      name: 'Fire Door – Emergency Exit',
      tagline: 'Fire-Rated Emergency Egress Doors',
      description: 'Certified fire-rated doors with panic hardware for safe emergency evacuation, tested up to 120 minutes.',
      longDescription: 'PHOENIXX Fire Doors provide critical fire protection and safe emergency egress. Certified fire ratings from 30 to 120 minutes with panic bar hardware and self-closing mechanisms. Our fire doors comply with NBC 2016, IS 3614, and international standards for complete regulatory compliance.',
      metaTitle: 'Fire Doors | Emergency Exit Doors | Fire Rated Doors | PHOENIXX',
      metaDescription: 'Certified fire doors with 30-120 min fire rating & panic hardware. NBC 2016 compliant emergency exit doors. IS/BS certified manufacturer in India.',
      features: [
        { title: 'Fire Rated 30-120 Minutes', description: 'Certified fire resistance to protect evacuation routes.', icon: '🔥' },
        { title: 'Panic Bar Hardware', description: 'Easy-push panic bars for quick emergency exit.', icon: '🚪' },
        { title: 'Self-Closing Mechanism', description: 'Automatic closing ensures door seals during fire.', icon: '🔄' },
        { title: 'Smoke Seals', description: 'Intumescent seals expand to block smoke spread.', icon: '💨' },
      ],
      benefits: [
        { title: 'Life Safety Compliance', description: 'Meets NBC 2016 and local fire safety regulations.' },
        { title: 'Insurance Approved', description: 'Certified doors can reduce insurance premiums.' },
        { title: 'Quick Evacuation', description: 'Panic hardware allows instant exit without key or handle operation.' },
        { title: 'Tested & Certified', description: 'Third-party tested and certified for fire performance.' },
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
      applications: [
        { name: 'Industrial Buildings', description: 'Factory emergency exits and fire escape routes.' },
        { name: 'Commercial Complexes', description: 'Office buildings, malls, and multi-story structures.' },
        { name: 'Hospitals', description: 'Critical care areas and patient evacuation routes.' },
        { name: 'Hotels', description: 'Guest room corridors and stairwell access.' },
        { name: 'Educational Institutions', description: 'Schools, colleges, and training centers.' },
      ],
      faqs: [
        { question: 'What fire ratings are available?', answer: 'PHOENIXX fire doors are available in 30, 60, 90, and 120 minute fire ratings. The rating indicates how long the door can withstand fire exposure while maintaining integrity and insulation.' },
        { question: 'What certifications do fire doors have?', answer: 'Our fire doors are tested and certified as per IS 3614, BS 476, and EN 1634. Certificates from CBRI, NABL-accredited labs are provided with each door.' },
        { question: 'Is panic hardware mandatory for fire doors?', answer: 'Panic hardware is mandatory for doors on emergency exit routes as per NBC 2016. It allows instant egress without fumbling with handles or keys.' },
        { question: 'What is an intumescent seal?', answer: 'Intumescent seals expand when exposed to heat (typically at 200°C), filling gaps between door and frame to prevent fire and smoke passage. They are essential for maintaining fire rating.' },
        { question: 'How often should fire doors be inspected?', answer: 'Fire doors should be inspected monthly for basic functionality and annually by qualified inspectors. Closers, seals, and hardware should be checked and maintained.' },
        { question: 'Can fire doors have vision panels?', answer: 'Yes, fire-rated glazing is available for vision panels. The glass must be fire-rated to match the door rating, typically using Georgian wired glass or ceramic glass.' },
        { question: 'What size fire doors are available?', answer: 'Standard sizes from 900x2100mm to 1800x2400mm. Custom sizes available. Double-leaf doors for wider openings up to 3000mm.' },
        { question: 'Are automatic closers required?', answer: 'Yes, fire doors must be self-closing to ensure they close automatically after use. Hold-open devices connected to fire alarm are permitted in some applications.' },
        { question: 'What happens if fire doors are propped open?', answer: 'Propped-open fire doors are a major safety violation. If doors need to remain open, magnetic hold-open devices with fire alarm release must be used.' },
        { question: 'How is smoke-tight performance achieved?', answer: 'Smoke seals (brush seals at edges, drop seals at bottom, intumescent at stops) create a smoke-tight barrier. Doors can be certified to S200 or Sa smoke ratings.' },
        { question: 'Can existing doors be upgraded to fire doors?', answer: 'Generally no - fire doors must be complete assemblies (door, frame, seals, hardware) tested together. Retrofitting individual components invalidates fire rating.' },
        { question: 'What is the difference between FD30 and FD60?', answer: 'FD30 provides 30-minute fire resistance, suitable for internal doors. FD60 provides 60-minute resistance, required for stairwells and protected corridors.' },
        { question: 'What maintenance is required?', answer: 'Monthly: Check operation, seals, glazing, signage. Quarterly: Test closer adjustment, check hinges. Annually: Full inspection by qualified person with documentation.' },
        { question: 'Are fire doors required in all buildings?', answer: 'NBC 2016 mandates fire doors in stairwells, lift lobbies, fire compartments, and specific occupancies. Requirements vary by building type and height.' },
        { question: 'What warranty is provided?', answer: 'PHOENIXX provides 5-year warranty on door structure and 2-year on hardware components. Fire rating certification remains valid throughout door life with proper maintenance.' },
      ],
      relatedProducts: [
        { name: 'Multipurpose Doors', slug: 'fire-rated-multipurpose-door', category: 'doors' },
        { name: 'Cleanroom Doors', slug: 'cleanroom-door', category: 'doors' },
        { name: 'Rockwool Panels', slug: 'rockwool-panel', category: 'sandwich-panels' },
      ],
      relatedSolutions: [
        { name: 'Pre-Engineered Buildings', slug: 'peb' },
        { name: 'Cold Storage Construction', slug: 'cold-storage-construction' },
      ],
      relatedIndustries: [
        { name: 'Commercial', slug: 'hospitality' },
        { name: 'Healthcare', slug: 'healthcare' },
        { name: 'Industrial', slug: 'automotive' },
      ],
      gradient: 'from-orange-600 to-red-600',
    },
    'fire-rated-multipurpose-door': {
      name: 'Fire-Rated Multipurpose Doors',
      tagline: 'Versatile Industrial & Commercial Doors',
      description: 'Heavy-duty steel doors with optional fire ratings for industrial warehouses, factories, and commercial facilities.',
      longDescription: 'PHOENIXX Fire-Rated Multipurpose Doors are engineered for demanding industrial and commercial environments. These robust metal doors offer optional fire ratings, superior security, and long-lasting durability for warehouses, factories, and commercial buildings. Ideal as service doors, dock doors, and general industrial access.',
      metaTitle: 'Multipurpose Metal Doors | Industrial Doors | Fire Rated | PHOENIXX',
      metaDescription: 'Heavy-duty multipurpose steel doors with optional fire rating for warehouses & factories. Single/double leaf, insulated options. Manufacturer in India.',
      features: [
        { title: 'Heavy-Duty Construction', description: 'Reinforced steel frame and panel for maximum durability and security.', icon: '🛡️' },
        { title: 'Optional Fire Rating', description: 'Available with fire ratings from 30 to 120 minutes as per requirement.', icon: '🔥' },
        { title: 'Weather Sealed', description: 'Comprehensive sealing system for weather protection and energy efficiency.', icon: '🌧️' },
        { title: 'Multiple Configurations', description: 'Single, double leaf, and wicket door options available.', icon: '🚪' },
      ],
      benefits: [
        { title: 'Security & Safety', description: 'Heavy-gauge steel construction deters unauthorized access.' },
        { title: 'Energy Efficient', description: 'Insulated core options reduce heat transfer and HVAC costs.' },
        { title: 'Long Service Life', description: 'Galvanized/powder-coated finish resists corrosion for decades.' },
        { title: 'Low Maintenance', description: 'Simple design with minimal maintenance requirements.' },
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
      applications: [
        { name: 'Industrial Warehouses', description: 'Service doors and personnel access in logistics facilities.' },
        { name: 'Factory Buildings', description: 'Entry doors for production and utility areas.' },
        { name: 'Commercial Complexes', description: 'Back-of-house and service area access.' },
        { name: 'Cold Storage', description: 'Insulated personnel doors for temperature-controlled facilities.' },
        { name: 'Service Areas', description: 'Mechanical rooms, electrical rooms, and utility access.' },
      ],
      faqs: [
        { question: 'What door configurations are available?', answer: 'Single leaf (up to 1200mm wide), double leaf (up to 2400mm wide), and wicket doors (personnel door within larger door). Each can be insulated or non-insulated.' },
        { question: 'What core materials are used?', answer: 'PUF core for thermal insulation, honeycomb for lightweight non-insulated doors, and Rockwool for fire-rated applications.' },
        { question: 'What is the maximum door size?', answer: 'Single leaf: 1200x2400mm. Double leaf: 3000x3000mm. Larger sizes available with reinforced construction.' },
        { question: 'Are doors suitable for forklift traffic areas?', answer: 'Yes, doors can be reinforced with kick plates and guards for areas with forklift traffic. Impact-resistant frames are available.' },
        { question: 'What hardware options are available?', answer: 'Standard lever handles, pull handles, panic hardware, magnetic locks, access control compatible locks, and industrial-grade hinges.' },
        { question: 'Can doors be automated?', answer: 'Yes, swing door operators can be installed for automatic operation. Sensors, push buttons, and remote controls are available.' },
        { question: 'What finish options are available?', answer: 'Hot-dip galvanized, powder-coated in RAL colors, or stainless steel for corrosive environments.' },
        { question: 'Are doors suitable for external use?', answer: 'Yes, with proper sealing and finish, doors are suitable for external applications. Weather stripping and threshold seals prevent water ingress.' },
        { question: 'What is the thermal performance?', answer: 'PUF-filled doors provide U-value of approximately 0.8-1.0 W/m²K depending on thickness. Non-insulated doors have higher heat transfer.' },
        { question: 'Can doors be supplied with vision panels?', answer: 'Yes, glazing options include toughened glass, wired glass, and fire-rated glass. Various sizes and positions available.' },
        { question: 'What security ratings are available?', answer: 'Doors can be specified to resist forced entry to various security standards with multipoint locking and reinforced frames.' },
        { question: 'What is the lead time?', answer: 'Standard doors: 2-3 weeks. Fire-rated and custom specifications: 3-4 weeks. Express options available.' },
        { question: 'Can existing openings be retrofitted?', answer: 'Yes, doors can be manufactured to fit existing openings. Site survey recommended for accurate measurements.' },
        { question: 'What warranty is provided?', answer: 'PHOENIXX provides 5-year warranty on door structure and 2-year on hardware. Powder coating warranted against peeling for 5 years.' },
        { question: 'Are acoustic doors available?', answer: 'Yes, doors can be specified with acoustic seals and appropriate core for sound reduction ratings up to STC 45.' },
      ],
      relatedProducts: [
        { name: 'Fire Doors', slug: 'fire-door-emergency-exit', category: 'doors' },
        { name: 'Cleanroom Doors', slug: 'cleanroom-door', category: 'doors' },
        { name: 'Sandwich PUF Panels', slug: 'sandwich-puf-panel', category: 'sandwich-panels' },
      ],
      relatedSolutions: [
        { name: 'Pre-Engineered Buildings', slug: 'peb' },
        { name: 'Cold Storage Construction', slug: 'cold-storage-construction' },
      ],
      relatedIndustries: [
        { name: 'Warehousing', slug: 'automotive' },
        { name: 'Manufacturing', slug: 'textile' },
        { name: 'Cold Chain', slug: 'dairy' },
      ],
      gradient: 'from-orange-600 to-red-600',
    },
  },
  'cleanroom-solutions': {
    'cleanroom-partition': {
      name: 'Cleanroom Partitions',
      tagline: 'Modular Wall Systems for Controlled Environments',
      description: 'GMP-compliant modular wall systems for pharmaceutical, electronics, and food processing cleanrooms.',
      longDescription: 'PHOENIXX Cleanroom Partitions provide modular, flexible wall systems for constructing controlled environments. Designed for easy installation, future expansion, and compliance with GMP standards. Our partitions are used in over 200 pharmaceutical facilities across India, meeting WHO GMP and US FDA requirements.',
      metaTitle: 'Cleanroom Partitions | Modular Wall Systems | GMP Compliant | PHOENIXX',
      metaDescription: 'Modular cleanroom partition systems for pharma, electronics & food processing. GMP compliant, flush surfaces, easy expansion. Leading manufacturer India.',
      features: [
        { title: 'Modular Design', description: 'Pre-engineered modules for fast installation and easy modification.', icon: '🧩' },
        { title: 'Flush Surfaces', description: 'Smooth, crevice-free surfaces minimize particle accumulation.', icon: '✨' },
        { title: 'Future Expansion', description: 'Easy to relocate or expand without major construction.', icon: '📐' },
        { title: 'GMP Compliant', description: 'Meets pharmaceutical and food industry standards.', icon: '✅' },
      ],
      benefits: [
        { title: 'Faster Project Completion', description: 'Modular construction reduces build time by 40-50% vs conventional walls.' },
        { title: 'Easy Validation', description: 'Consistent factory-made components simplify IQ/OQ documentation.' },
        { title: 'Relocatable', description: 'Partitions can be dismantled and reinstalled for facility changes.' },
        { title: 'Lower Lifecycle Cost', description: 'No painting, no cracks, no maintenance for 20+ years.' },
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
      applications: [
        { name: 'Pharmaceutical Manufacturing', description: 'GMP-compliant walls for drug production facilities.' },
        { name: 'Biotechnology', description: 'Containment walls for biotech research and production.' },
        { name: 'Electronics', description: 'ESD-safe partitions for semiconductor manufacturing.' },
        { name: 'Food Processing', description: 'Hygienic walls for food and beverage production.' },
        { name: 'Healthcare', description: 'Hospital cleanrooms and isolation areas.' },
      ],
      faqs: [
        { question: 'What cleanroom classes are partitions suitable for?', answer: 'PHOENIXX cleanroom partitions are suitable for ISO Class 5 to Class 8 cleanrooms. Panel type, joints, and finishes are selected based on cleanliness requirements.' },
        { question: 'What panel types are available?', answer: 'Sandwich panels (PUF/PIR/Rockwool core), hollow-core panels for utilities, and solid steel panels. Each has specific applications based on thermal, acoustic, and fire requirements.' },
        { question: 'How are partition joints sealed?', answer: 'Cam-lock systems with gaskets for standard applications, flush H-profiles for aesthetic finish, and silicone-sealed joints for higher cleanliness levels.' },
        { question: 'Can utilities be integrated into partitions?', answer: 'Yes, hollow-core panels can house electrical conduits, data cables, and small utilities. Larger utilities require dedicated service panels or corridors.' },
        { question: 'What corner treatments are available?', answer: 'Coved corners (R50/R75) eliminate particle traps and are GMP-recommended. Square corners with cover strips are economical options for lower-class cleanrooms.' },
        { question: 'Are partitions fire-rated?', answer: 'Yes, partitions with Rockwool core achieve up to 2-hour fire rating. PIR panels provide B-s1,d0 rating. Fire ratings are tested as per IS 3614.' },
        { question: 'Can glass panels be incorporated?', answer: 'Yes, single and double-glazed vision panels are available. Full-height glass walls possible with aluminum framing. Fire-rated glazing also available.' },
        { question: 'What is the installation process?', answer: 'Floor/ceiling tracks installed first, then panels erected and locked. Windows, doors integrated next, followed by sealing and finishing. Typical rate: 50-80 sqm per day.' },
        { question: 'Can existing cleanrooms be modified?', answer: 'Yes, modular partitions can be relocated, extended, or reconfigured. This flexibility is a key advantage over conventional construction.' },
        { question: 'What documentation is provided?', answer: 'Material certificates, test reports, installation records, and IQ/OQ protocols. As-built drawings and maintenance manuals included.' },
        { question: 'How are partitions cleaned?', answer: 'Regular cleaning with approved cleanroom wipes and disinfectants. Surfaces resistant to common cleaning agents including hydrogen peroxide and IPA.' },
        { question: 'What warranty is provided?', answer: 'PHOENIXX provides 10-year warranty on partition structure and 5-year on surface finishes against peeling, fading, and delamination.' },
        { question: 'Can partitions be used in wet areas?', answer: 'Yes, with appropriate facing materials (SS 316, PVC-coated) and sealed joints, partitions are suitable for wash-down areas.' },
        { question: 'What is the cost comparison with brick walls?', answer: 'Initial cost is higher but total project cost is often lower due to faster installation. Lifecycle cost is significantly lower due to zero maintenance.' },
        { question: 'Are partitions earthquake-resistant?', answer: 'Yes, properly designed partition systems meet seismic requirements. Flexible connections allow movement without damage.' },
      ],
      relatedProducts: [
        { name: 'Cleanroom False Ceiling', slug: 'cleanroom-false-ceiling', category: 'cleanroom-solutions' },
        { name: 'Cleanroom Doors', slug: 'cleanroom-doors', category: 'cleanroom-solutions' },
        { name: 'Cleanroom Flooring', slug: 'cleanroom-flooring', category: 'cleanroom-solutions' },
      ],
      relatedSolutions: [
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
        { name: 'Pharmaceutical Cleanrooms', slug: 'cleanroom-construction' },
      ],
      relatedIndustries: [
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Food Processing', slug: 'food-processing' },
      ],
      gradient: 'from-emerald-600 to-teal-600',
    },
    'cleanroom-false-ceiling': {
      name: 'Cleanroom False Ceiling',
      tagline: 'Walkable & Non-Walkable Ceiling Systems',
      description: 'Modular cleanroom ceiling systems with HEPA filter integration for pharmaceutical and electronics cleanrooms.',
      longDescription: 'PHOENIXX Cleanroom Ceiling Systems provide accessible platforms for maintenance while maintaining cleanroom integrity. Options include walkable systems for mechanical floors and non-walkable systems for standard applications. Our ceiling systems are designed for seamless HEPA/ULPA filter integration and comply with ISO 14644 standards.',
      metaTitle: 'Cleanroom False Ceiling | Walkable Ceiling Systems | PHOENIXX',
      metaDescription: 'Modular cleanroom ceiling systems with HEPA integration. Walkable & non-walkable options for pharma & semiconductor cleanrooms. Manufacturer India.',
      features: [
        { title: 'HEPA Filter Integration', description: 'Designed for seamless HEPA/ULPA filter installation.', icon: '🌬️' },
        { title: 'Service Access', description: 'Walkable versions support maintenance access up to 200 kg/m².', icon: '🚶' },
        { title: 'Airtight Sealing', description: 'Gel or gasket sealing prevents contamination.', icon: '🔒' },
        { title: 'Light Integration', description: 'Flush-mounted cleanroom light fixtures.', icon: '💡' },
      ],
      benefits: [
        { title: 'Easy Filter Replacement', description: 'Quick filter change without disrupting cleanroom operations.' },
        { title: 'Service Accessibility', description: 'Walkable ceiling provides safe access for maintenance.' },
        { title: 'Laminar Flow Ready', description: 'Designed for uniform air distribution in LAF zones.' },
        { title: 'Modular Design', description: 'Easy expansion and modification without major construction.' },
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
      applications: [
        { name: 'Pharmaceutical Cleanrooms', description: 'Aseptic filling lines and manufacturing areas.' },
        { name: 'Semiconductor Fabs', description: 'Wafer processing and lithography areas.' },
        { name: 'Hospitals', description: 'Operating theaters and isolation rooms.' },
        { name: 'Research Labs', description: 'BSL facilities and research cleanrooms.' },
        { name: 'Food Processing', description: 'High-hygiene production areas.' },
      ],
      faqs: [
        { question: 'What is a walkable cleanroom ceiling?', answer: 'A walkable ceiling is a structural ceiling system that supports technician weight (typically 200 kg/m²) for maintenance access. It includes reinforced grid and panels, allowing filter replacement and equipment servicing from above.' },
        { question: 'What filter sealing methods are available?', answer: 'Gel seal (fluid seal), gasket seal (compression seal), and knife-edge seal. Gel seal provides best performance for ISO 5 and better, gasket is cost-effective for ISO 6-8.' },
        { question: 'What grid sizes are standard?', answer: '1200x600mm is most common (matches standard filter sizes). 600x600mm available for higher filter coverage. Custom sizes for specific requirements.' },
        { question: 'Can existing ceilings be upgraded?', answer: 'Yes, we offer retrofit solutions to upgrade conventional ceilings to cleanroom standards with proper filter integration and sealing.' },
        { question: 'How is lighting integrated?', answer: 'LED cleanroom fixtures are flush-mounted in ceiling grid. Teardrop and recessed fixtures available. All fixtures sealed to prevent contamination.' },
        { question: 'What is the filter coverage for ISO 5?', answer: 'ISO 5 typically requires 25-35% filter coverage with laminar flow. Coverage calculated based on air change rate and particle generation requirements.' },
        { question: 'Are sprinklers compatible?', answer: 'Yes, flush-mounted and recessed sprinkler options available that maintain ceiling cleanliness while meeting fire codes.' },
        { question: 'What panel materials are available?', answer: 'Steel (powder-coated/SS), aluminum, and specialized materials for specific applications. Panels can be solid or perforated for return air.' },
        { question: 'How is airtightness achieved?', answer: 'Perimeter sealing with gaskets, panel-to-grid sealing with pressure clips, and filter sealing with gel/gaskets create airtight ceiling plenum.' },
        { question: 'Can utilities be run above ceiling?', answer: 'Yes, the plenum space accommodates HVAC ducts, utilities, and filter systems. Walkable versions allow easy access for maintenance.' },
        { question: 'What maintenance is required?', answer: 'Regular filter replacement per SOP, periodic inspection of seals and gaskets, and cleaning of ceiling surfaces as part of cleanroom maintenance.' },
        { question: 'What certification is provided?', answer: 'Material certificates, filter leak test reports, and as-built documentation. Support for IQ/OQ qualification included.' },
        { question: 'What is the typical installation time?', answer: 'Installation rate is typically 30-50 sqm per day depending on complexity. Coordination with HVAC installation is critical.' },
        { question: 'Are acoustic ceilings available?', answer: 'Yes, perforated panels with acoustic backing provide sound absorption while maintaining cleanroom performance.' },
        { question: 'What warranty is provided?', answer: 'PHOENIXX provides 10-year warranty on ceiling structure and 5-year on finishes. Filter warranty per manufacturer.' },
      ],
      relatedProducts: [
        { name: 'Cleanroom Partitions', slug: 'cleanroom-partition', category: 'cleanroom-solutions' },
        { name: 'Cleanroom Doors', slug: 'cleanroom-doors', category: 'cleanroom-solutions' },
        { name: 'Wall & Ceiling Panels', slug: 'wall-ceiling-panel', category: 'sandwich-panels' },
      ],
      relatedSolutions: [
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
        { name: 'Walkable Ceiling Systems', slug: 'walkable-ceiling-systems' },
      ],
      relatedIndustries: [
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Healthcare', slug: 'healthcare' },
      ],
      gradient: 'from-emerald-600 to-teal-600',
    },
    'cleanroom-doors': {
      name: 'Cleanroom Doors',
      tagline: 'Contamination Control Door Systems',
      description: 'GMP-compliant doors with airtight sealing for ISO-classified pharmaceutical and electronics cleanrooms.',
      longDescription: 'PHOENIXX Cleanroom Doors are designed specifically for pharmaceutical, healthcare, electronics, and food processing cleanrooms. Features include airtight sealing, flush surfaces, and compatibility with interlock systems to maintain cleanroom integrity. Available in swing, sliding, and hermetic configurations to meet specific requirements.',
      metaTitle: 'Cleanroom Doors | Hermetic Doors | Pharmaceutical Doors | PHOENIXX',
      metaDescription: 'GMP-compliant cleanroom doors with airtight sealing. Swing, sliding, hermetic options for pharma & electronics. ISO 14644 compliant. Manufacturer India.',
      features: [
        { title: 'Airtight Sealing', description: 'Magnetic or brush seals ensure contamination prevention and pressure integrity.', icon: '🔒' },
        { title: 'Flush Design', description: 'Smooth, crevice-free surfaces prevent particle accumulation and enable easy cleaning.', icon: '✨' },
        { title: 'Interlock Compatible', description: 'Can be integrated with airlock interlock systems for cleanroom protocols.', icon: '🔗' },
        { title: 'Automation Ready', description: 'Compatible with various automatic opening systems including touchless sensors.', icon: '🤖' },
      ],
      benefits: [
        { title: 'Pressure Maintenance', description: 'Airtight construction maintains cleanroom pressure cascade.' },
        { title: 'GMP Ready', description: 'Meets WHO GMP, US FDA, and EU GMP requirements.' },
        { title: 'Easy Cleaning', description: 'Flush surfaces enable effective cleaning and disinfection.' },
        { title: 'Validation Support', description: 'Complete IQ/OQ documentation provided.' },
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
      applications: [
        { name: 'Pharmaceutical Cleanrooms', description: 'Manufacturing and packaging areas for drugs.' },
        { name: 'Electronics Manufacturing', description: 'Semiconductor fabs and assembly cleanrooms.' },
        { name: 'Food Processing', description: 'Hygienic production and packaging areas.' },
        { name: 'Hospitals', description: 'OT complexes and isolation rooms.' },
        { name: 'Research Laboratories', description: 'BSL and research cleanroom facilities.' },
      ],
      faqs: [
        { question: 'What door types are best for different cleanroom classes?', answer: 'ISO 5-6: Hermetic doors with inflatable seals. ISO 7: Swing/sliding with magnetic seals. ISO 8: Standard doors with brush seals. Selection based on pressure requirements and traffic.' },
        { question: 'What is a hermetic door?', answer: 'Hermetic doors use inflatable gaskets that inflate when closed to create airtight seal. They are used in critical areas requiring highest pressure integrity and contamination control.' },
        { question: 'Can doors be fire-rated?', answer: 'Yes, cleanroom doors available with 30-60 minute fire rating. Fire-rated hermetic doors also available for critical applications.' },
        { question: 'How are interlocks implemented?', answer: 'Magnetic switches on doors connected to interlock controller. When one door opens, others in the airlock remain locked. Visual and audible indicators included.' },
        { question: 'What automation options are available?', answer: 'Touchless sensors, foot switches, push buttons, card readers, and integration with BMS/access control systems.' },
        { question: 'What is the airtightness specification?', answer: 'Typical specification: <3 L/s/m² at 50 Pa for magnetic seal doors, <1 L/s/m² at 50 Pa for hermetic doors.' },
        { question: 'Can existing openings be retrofitted?', answer: 'Yes, we offer retrofit frames and doors for existing openings. Site survey required for accurate measurements.' },
        { question: 'What maintenance is required?', answer: 'Monthly: Check seals and operation. Quarterly: Adjust closers and hardware. Annually: Full inspection and air leakage testing.' },
        { question: 'Are pass-through options available?', answer: 'Yes, cleanroom pass boxes (dynamic and static) are available for material transfer without personnel entry.' },
        { question: 'What certifications are provided?', answer: 'Air leakage test certificate, material certificates, and IQ/OQ documentation support.' },
        { question: 'What is the lead time?', answer: 'Standard doors: 2-3 weeks. Hermetic and custom specifications: 4-5 weeks.' },
        { question: 'Can doors withstand frequent cleaning?', answer: 'Yes, all doors are designed to withstand frequent cleaning with common disinfectants including hydrogen peroxide, IPA, and quaternary ammonium.' },
        { question: 'What warranty is provided?', answer: '2-year warranty on door structure, 1-year on automation components. Extended warranty available.' },
        { question: 'Are vision panels mandatory?', answer: 'Not mandatory but recommended for safety and visibility. Size and type based on door function and cleanroom requirements.' },
        { question: 'How is ESD protection provided?', answer: 'ESD-safe versions available with conductive frames and grounding provisions for electronics manufacturing cleanrooms.' },
      ],
      relatedProducts: [
        { name: 'Cleanroom Partitions', slug: 'cleanroom-partition', category: 'cleanroom-solutions' },
        { name: 'Cleanroom False Ceiling', slug: 'cleanroom-false-ceiling', category: 'cleanroom-solutions' },
        { name: 'Cleanroom Door (Doors Category)', slug: 'cleanroom-door', category: 'doors' },
      ],
      relatedSolutions: [
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
        { name: 'Pharmaceutical Cleanrooms', slug: 'cleanroom-construction' },
      ],
      relatedIndustries: [
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Healthcare', slug: 'healthcare' },
      ],
      gradient: 'from-emerald-600 to-teal-600',
    },
    'cleanroom-flooring': {
      name: 'Cleanroom Flooring',
      tagline: 'High-Performance Epoxy & PU Flooring Systems',
      description: 'Seamless, anti-static epoxy and PU flooring for pharmaceutical, electronics, and food processing cleanrooms.',
      longDescription: 'PHOENIXX Cleanroom Flooring systems provide seamless, non-porous surfaces that meet the stringent requirements of pharmaceutical, electronics, and food processing industries. Options include epoxy, polyurethane, and ESD-safe flooring with coved skirting for complete contamination control. Our flooring systems are applied by trained applicators with decades of experience.',
      metaTitle: 'Cleanroom Flooring | Epoxy Flooring | ESD Flooring | PHOENIXX',
      metaDescription: 'Seamless cleanroom flooring - epoxy, PU, ESD options for pharma & electronics. Chemical resistant, easy clean. Professional installation across India.',
      features: [
        { title: 'Seamless Surface', description: 'Monolithic, joint-free finish eliminates particle traps and enables easy cleaning.', icon: '✨' },
        { title: 'Chemical Resistance', description: 'Resistant to acids, alkalis, solvents, and cleaning agents.', icon: '🧪' },
        { title: 'ESD Options', description: 'Anti-static and conductive variants for electronics manufacturing.', icon: '⚡' },
        { title: 'Coved Skirting', description: 'Integrated wall-to-floor coving prevents dust accumulation.', icon: '📐' },
      ],
      benefits: [
        { title: 'Zero Particle Generation', description: 'Seamless surface does not shed particles or harbor contaminants.' },
        { title: 'Easy Cleaning', description: 'Non-porous surface enables thorough cleaning and disinfection.' },
        { title: 'Long Service Life', description: '10-15 year lifespan with proper maintenance.' },
        { title: 'GMP Compliant', description: 'Meets pharmaceutical and food industry hygiene standards.' },
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
      applications: [
        { name: 'Pharmaceutical Manufacturing', description: 'GMP production areas and packaging zones.' },
        { name: 'Electronics Cleanrooms', description: 'ESD-safe floors for semiconductor manufacturing.' },
        { name: 'Food Processing', description: 'HACCP-compliant hygienic flooring.' },
        { name: 'Hospitals', description: 'Operating theaters and sterile areas.' },
        { name: 'Laboratories', description: 'Chemical-resistant flooring for research facilities.' },
      ],
      faqs: [
        { question: 'What flooring system is best for cleanrooms?', answer: 'Epoxy flooring for general cleanrooms, polyurethane for areas with thermal cycling or flexibility needs, ESD flooring for electronics, and MMA for fast-cure requirements.' },
        { question: 'What is the recommended thickness?', answer: 'General cleanrooms: 2-3mm. Heavy traffic areas: 4-6mm. Self-leveling systems for smooth surfaces, mortar systems for repairs and heavy-duty applications.' },
        { question: 'How long does installation take?', answer: 'Typical installation: 3-5 days including surface preparation, primer, base coat, top coat, and curing. Fast-cure MMA systems can be completed in 24 hours.' },
        { question: 'What surface preparation is required?', answer: 'Shot blasting or diamond grinding to achieve proper profile. Surface must be clean, dry, and free of contaminants. Moisture testing essential for new concrete.' },
        { question: 'Can flooring be applied over existing floors?', answer: 'Yes, with proper surface preparation. Compatibility testing required for application over existing coatings.' },
        { question: 'What is ESD flooring?', answer: 'ESD (Electrostatic Dissipative) flooring provides controlled conductivity (10⁴-10⁹ ohms) to safely dissipate static charges, essential for electronics manufacturing.' },
        { question: 'How is coved skirting created?', answer: 'Integral coving is formed using the same flooring material, creating seamless transition from floor to wall. Typical cove radius is 50-100mm.' },
        { question: 'What chemical resistance is provided?', answer: 'Resistant to common cleaning agents, disinfectants, dilute acids and alkalis. Chemical resistance chart available for specific substances.' },
        { question: 'How long does curing take?', answer: 'Epoxy: 7 days full cure, light traffic after 24-48 hours. PU: 5-7 days full cure. MMA: 1-2 hours to traffic.' },
        { question: 'What maintenance is required?', answer: 'Daily cleaning with approved cleaners. Periodic deep cleaning and recoating every 5-7 years to maintain appearance and performance.' },
        { question: 'Can damaged areas be repaired?', answer: 'Yes, localized repairs possible without replacing entire floor. Color matching available for seamless repairs.' },
        { question: 'What certifications are available?', answer: 'Material certificates, test reports for chemical resistance, ESD testing certificates, and compliance documentation for GMP requirements.' },
        { question: 'What is the cost per sqm?', answer: 'Varies by system type and thickness. Epoxy: ₹400-800/sqm, ESD: ₹600-1200/sqm, PU: ₹500-1000/sqm. Site survey required for accurate quotation.' },
        { question: 'Can flooring be applied in occupied facilities?', answer: 'Yes, with proper containment and ventilation. Low-odor and solvent-free systems available for sensitive environments.' },
        { question: 'What warranty is provided?', answer: 'PHOENIXX provides 5-year warranty on flooring systems against delamination, peeling, and defects. Extended warranty available.' },
      ],
      relatedProducts: [
        { name: 'Cleanroom Partitions', slug: 'cleanroom-partition', category: 'cleanroom-solutions' },
        { name: 'Cleanroom False Ceiling', slug: 'cleanroom-false-ceiling', category: 'cleanroom-solutions' },
        { name: 'Cleanroom Doors', slug: 'cleanroom-doors', category: 'cleanroom-solutions' },
      ],
      relatedSolutions: [
        { name: 'Cleanroom Construction', slug: 'cleanroom-construction' },
        { name: 'Pharmaceutical Cleanrooms', slug: 'cleanroom-construction' },
      ],
      relatedIndustries: [
        { name: 'Pharmaceutical', slug: 'pharma-chemical' },
        { name: 'Electronics', slug: 'electronics' },
        { name: 'Food Processing', slug: 'food-processing' },
      ],
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
    title: data.metaTitle || `${data.name} | PHOENIXX Products`,
    description: data.metaDescription || data.description,
    alternates: { canonical: `/products/${category}/${product}` },
    keywords: [data.name, category.replace(/-/g, ' '), 'PHOENIXX', 'manufacturer', 'India', 'insulated panels', 'industrial building'],
    openGraph: {
      title: data.metaTitle || data.name,
      description: data.metaDescription || data.description,
      url: `/products/${category}/${product}`,
      siteName: siteConfig.name,
      type: 'website',
    },
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

  const categoryName = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // Enhanced Schema Markup
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'NXT PHOENIXX SMARTBUILD LLP' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@type': 'Organization', name: 'NXT PHOENIXX SMARTBUILD LLP' },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${siteConfig.url}/products` },
      { '@type': 'ListItem', position: 3, name: categoryName, item: `${siteConfig.url}/products/${category}` },
      { '@type': 'ListItem', position: 4, name: data.name, item: `${siteConfig.url}/products/${category}/${product}` },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.slice(0, 10).map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={productSchema} />
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />

        {/* Hero */}
        <section className={`relative bg-gradient-to-br ${data.gradient} py-20 md:py-28`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-white/70" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <Link href={`/products/${category}`} className="hover:text-white transition-colors capitalize">
                {categoryName}
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
              
              {/* Achievement Counters */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/70">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">12+</div>
                  <div className="text-sm text-white/70">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/70">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">Pan India</div>
                  <div className="text-sm text-white/70">Delivery Network</div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quote →
                </Link>
                <Link
                  href={`tel:${siteConfig.contact.phone}`}
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  📞 Call Now
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

        {/* Why Choose - Benefits */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Why Choose PHOENIXX {data.name}?</h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                Industry-leading quality backed by engineering excellence and customer trust.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {data.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-2xl mb-4`}>
                    {idx === 0 ? '💰' : idx === 1 ? '⚡' : idx === 2 ? '🛡️' : '✅'}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg">{benefit.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Features & Specifications</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {data.features.map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-6 bg-slate-50 rounded-2xl">
                  <span className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-2xl`}>
                    {feature.icon || '✓'}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">{feature.title}</h3>
                    <p className="mt-2 text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Table */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Technical Specifications</h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={`bg-gradient-to-r ${data.gradient} text-white`}>
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Category</th>
                      <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                      <th className="px-6 py-4 text-left font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.specifications.map((spec, specIdx) => (
                      spec.items.map((item, itemIdx) => (
                        <tr key={`${specIdx}-${itemIdx}`} className={itemIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                          {itemIdx === 0 && (
                            <td className="px-6 py-4 font-semibold text-slate-900 border-r" rowSpan={spec.items.length}>
                              {spec.category}
                            </td>
                          )}
                          <td className="px-6 py-4 text-slate-600">{item.label}</td>
                          <td className="px-6 py-4 font-medium text-slate-900">{item.value}</td>
                        </tr>
                      ))
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Applications & Industries</h2>
            <p className="text-lg text-slate-600 mb-8">Where are {data.name} used? Discover the diverse applications across industries.</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.applications.map((app, idx) => (
                <div key={idx} className="p-6 border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-sm`}>
                      {idx + 1}
                    </span>
                    {app.name}
                  </h3>
                  <p className="mt-3 text-slate-600">{app.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products & Internal Links */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Explore More</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Related Products */}
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
                  📦 Related Products
                </h3>
                <ul className="space-y-3">
                  {data.relatedProducts.map((p, idx) => (
                    <li key={idx}>
                      <Link 
                        href={`/products/${p.category}/${p.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                      >
                        → {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Related Solutions */}
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
                  🏗️ Related Solutions
                </h3>
                <ul className="space-y-3">
                  {data.relatedSolutions.map((s, idx) => (
                    <li key={idx}>
                      <Link 
                        href={`/solutions/${s.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                      >
                        → {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Related Industries */}
              <div>
                <h3 className="font-bold text-slate-900 text-xl mb-4 flex items-center gap-2">
                  🏭 Industries Served
                </h3>
                <ul className="space-y-3">
                  {data.relatedIndustries.map((i, idx) => (
                    <li key={idx}>
                      <Link 
                        href={`/industries/${i.slug}`}
                        className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
                      >
                        → {i.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-slate-600">
                Everything you need to know about {data.name}
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {data.faqs.map((faq, idx) => (
                  <details key={idx} className="group bg-slate-50 rounded-xl overflow-hidden">
                    <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-2xl text-slate-400 group-open:rotate-45 transition-transform">+</span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 bg-gradient-to-r ${data.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Order {data.name}?
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Get competitive pricing, technical consultation, and fast delivery across India. 
              Our experts are ready to help with your project requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Quote →
              </Link>
              <Link
                href={`tel:${siteConfig.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                📞 {siteConfig.contact.phone}
              </Link>
            </div>
            <p className="mt-6 text-white/70 text-sm">
              ✓ Same-day response &nbsp; ✓ Competitive pricing &nbsp; ✓ Pan-India delivery
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
