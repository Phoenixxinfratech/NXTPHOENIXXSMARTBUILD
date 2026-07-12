/**
 * Entity glossary for topical authority and AI search optimization.
 */

export interface GlossaryTerm {
  slug: string;
  term: string;
  definition: string;
  relatedTerms: string[];
  relatedLinks: { href: string; label: string }[];
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: 'puf-panel',
    term: 'PUF Panel',
    definition: 'A PUF (Polyurethane Foam) panel is an insulated sandwich panel consisting of a rigid closed-cell polyurethane foam core bonded between two pre-painted metal sheets (PPGI or galvalume). PUF panels deliver thermal conductivity as low as 0.024 W/mK, making them the most energy-efficient insulation choice for industrial walls, roofs, and cold storage applications.',
    relatedTerms: ['sandwich-panel', 'pir-panel', 'cold-room'],
    relatedLinks: [
      { href: '/products/sandwich-panels/sandwich-puf-panel', label: 'Sandwich PUF Panel' },
      { href: '/best-puf-panel-for-cold-storage', label: 'Best PUF Panel for Cold Storage' },
    ],
  },
  {
    slug: 'pir-panel',
    term: 'PIR Panel',
    definition: 'PIR (Polyisocyanurate) panels are advanced insulated sandwich panels with a foam core that offers superior fire performance (B-s1,d0 rating) and even lower thermal conductivity (0.022 W/mK) than standard PUF panels. PIR panels produce minimal smoke and no burning droplets during fire exposure, making them preferred for pharmaceutical, data centre, and high-value industrial facilities.',
    relatedTerms: ['puf-panel', 'sandwich-panel', 'fire-rating'],
    relatedLinks: [
      { href: '/products/sandwich-panels/pir-panel', label: 'PIR Panel Product Page' },
      { href: '/resources/blogs/puf-panel-vs-pir-panel-comparison', label: 'PUF vs PIR Comparison' },
    ],
  },
  {
    slug: 'sandwich-panel',
    term: 'Sandwich Panel',
    definition: 'A sandwich panel is a composite building material with a lightweight insulating core (PUF, PIR, rockwool, or EPS) sandwiched between two rigid facing sheets, typically pre-painted steel. Sandwich panels combine structural strength, thermal insulation, and weather protection in a single factory-manufactured component, enabling 40–60% faster construction than conventional brick-and-mortar methods.',
    relatedTerms: ['puf-panel', 'pir-panel', 'peb'],
    relatedLinks: [
      { href: '/products/sandwich-panels', label: 'All Sandwich Panels' },
      { href: '/best-quality-sandwich-puf-panel', label: 'Best Quality Sandwich PUF Panel' },
    ],
  },
  {
    slug: 'cleanroom',
    term: 'Cleanroom',
    definition: 'A cleanroom is a controlled environment where airborne particle concentration, temperature, humidity, and pressure are regulated to meet specific cleanliness standards (ISO 14644). Cleanrooms are essential for pharmaceutical manufacturing, semiconductor fabrication, biotechnology research, and medical device production. PHOENIXX builds cleanrooms using PUF/PIR partition panels, HEPA-filtered HVAC, and flush-finish doors.',
    relatedTerms: ['cleanroom-panel', 'hvac', 'pharma'],
    relatedLinks: [
      { href: '/solutions/cleanroom-solutions', label: 'Cleanroom Solutions' },
      { href: '/industries/pharma-chemical', label: 'Pharma & Chemical Industry' },
    ],
  },
  {
    slug: 'cold-room',
    term: 'Cold Room',
    definition: 'A cold room is a temperature-controlled insulated enclosure used for storing perishable goods at temperatures ranging from +15°C (chiller) to -40°C (deep freeze). Cold rooms are constructed using high-thickness PUF or PIR sandwich panels (80–150mm) with airtight joints, specialised cold storage doors, and refrigeration systems. Energy-efficient panel insulation can reduce refrigeration costs by 25–35%.',
    relatedTerms: ['puf-panel', 'cold-chain', 'cold-storage'],
    relatedLinks: [
      { href: '/solutions/cold-storage-construction', label: 'Cold Storage Construction' },
      { href: '/industries/cold-chain', label: 'Cold Chain Industry' },
    ],
  },
  {
    slug: 'peb',
    term: 'PEB (Pre-Engineered Building)',
    definition: 'A Pre-Engineered Building (PEB) is a steel structure designed and fabricated in a factory, then assembled on-site. PEB systems use optimised steel framing with insulated sandwich panels for walls and roofing, delivering large clear spans (up to 60m+), rapid erection (weeks vs months), and 20–30% cost savings compared to conventional RCC construction for industrial warehouses, factories, and aircraft hangars.',
    relatedTerms: ['sandwich-panel', 'industrial-shed', 'warehouse'],
    relatedLinks: [
      { href: '/solutions/peb', label: 'PEB Solutions' },
      { href: '/best-puf-panel-for-industrial-shed', label: 'Best PUF Panel for Industrial Shed' },
    ],
  },
  {
    slug: 'gidc',
    term: 'GIDC (Gujarat Industrial Development Corporation)',
    definition: 'GIDC estates are government-developed industrial zones across Gujarat, India, providing plotted land, infrastructure, and utilities for manufacturing units. Major GIDC estates include Vatva (Ahmedabad), Ankleshwar, Dahej, Vapi, and Sanand. PHOENIXX SMARTBUILD supplies PUF panels, doors, and turnkey construction to hundreds of units across Gujarat GIDC estates.',
    relatedTerms: ['industrial-estate', 'ahmedabad', 'gujarat'],
    relatedLinks: [
      { href: '/sandwich-puf-panel-in-ahmedabad', label: 'PUF Panel in Ahmedabad' },
      { href: '/sandwich-puf-panel-in-vapi', label: 'PUF Panel in Vapi' },
    ],
  },
  {
    slug: 'sez',
    term: 'SEZ (Special Economic Zone)',
    definition: 'A Special Economic Zone (SEZ) is a designated area offering tax incentives, simplified customs procedures, and world-class infrastructure to promote export-oriented manufacturing. India has major SEZs in Dahej, Sanand, Mundra, and Sri City. Industrial buildings in SEZs commonly use sandwich PUF panels for rapid construction and energy-efficient operation.',
    relatedTerms: ['gidc', 'export', 'industrial-estate'],
    relatedLinks: [
      { href: '/export/kenya', label: 'Export to Kenya' },
      { href: '/sandwich-puf-panel-in-gandhidham', label: 'PUF Panel in Gandhidham (Mundra SEZ)' },
    ],
  },
  {
    slug: 'hvac',
    term: 'HVAC',
    definition: 'HVAC (Heating, Ventilation, and Air Conditioning) systems control temperature, humidity, and air quality in buildings. In insulated panel buildings, HVAC load is directly reduced by panel R-value — every 10mm of additional PUF thickness can reduce cooling energy by 5–8%. PHOENIXX panels are designed to integrate seamlessly with HVAC ducting, chilled water piping, and refrigeration systems.',
    relatedTerms: ['puf-panel', 'cold-room', 'cleanroom'],
    relatedLinks: [
      { href: '/best-density-puf-panel-for-insulation', label: 'Best Density PUF Panel for Insulation' },
      { href: '/solutions/cold-storage-construction', label: 'Cold Storage Construction' },
    ],
  },
  {
    slug: 'fire-rating',
    term: 'Fire Rating',
    definition: 'Fire rating classifies how building materials behave during fire exposure. PUF panels typically achieve B2/B3 (self-extinguishing). PIR panels achieve B-s1,d0 (low smoke, no droplets). Rockwool panels achieve A1/A2 (non-combustible). Fire rating selection depends on building occupancy, insurance requirements, and local fire safety codes.',
    relatedTerms: ['pir-panel', 'rockwool-panel', 'puf-panel'],
    relatedLinks: [
      { href: '/products/sandwich-panels/rockwool-panel', label: 'Rockwool Panel' },
      { href: '/resources/blogs/fire-resistant-panel-pir-vs-puf', label: 'Fire Resistant Panel: PIR vs PUF' },
    ],
  },
  {
    slug: 'industrial-shed',
    term: 'Industrial Shed',
    definition: 'An industrial shed is a large-span steel-framed building used for manufacturing, warehousing, or processing. Modern industrial sheds use PEB steel structures with PUF roofing and wall panels, achieving clear spans of 20–60 metres without internal columns. Insulated panels reduce heat gain by 60–70% compared to bare metal sheeting in Indian climates.',
    relatedTerms: ['peb', 'puf-panel', 'warehouse'],
    relatedLinks: [
      { href: '/best-puf-panel-for-industrial-shed', label: 'Best PUF Panel for Industrial Shed' },
      { href: '/best-roofing-puf-panel-for-factory', label: 'Best Roofing PUF Panel for Factory' },
    ],
  },
  {
    slug: 'cold-chain',
    term: 'Cold Chain',
    definition: 'The cold chain is a temperature-controlled supply chain maintaining product quality from production through storage, transport, and distribution. Cold chain infrastructure includes cold storage warehouses, refrigerated transport, blast freezers, and processing facilities — all relying on insulated PUF/PIR panel construction to minimise temperature fluctuations and energy costs.',
    relatedTerms: ['cold-room', 'cold-storage', 'puf-panel'],
    relatedLinks: [
      { href: '/industries/cold-chain', label: 'Cold Chain Industry' },
      { href: '/resources/blogs/puf-panels-cold-storage', label: 'PUF Panels for Cold Storage' },
    ],
  },
];

export function getGlossaryTerm(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}
