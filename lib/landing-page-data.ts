// ============================================================================
// B2B INDUSTRIAL LANDING PAGE DATA - PHOENIXX SMARTBUILD
// ============================================================================

// Product Catalog
export interface ProductData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  composition: string;
  technology: string;
  characteristics: string[];
  certifications: string[];
  applications: {
    pharma: string;
    coldStorage: string;
    foodProcessing: string;
    warehouse: string;
    manufacturing: string;
    dataCenter: string;
  };
  specifications: {
    thickness: string[];
    density: string;
    thermalConductivity: string;
    fireRating: string;
    skinMaterial: string;
    coatings: string[];
    jointProfiles: string[];
  };
  benefits: string[];
  idealFor: string[];
  gradient: string;
}

export const products: Record<string, ProductData> = {
  'sandwich-puf-panel': {
    slug: 'sandwich-puf-panel',
    name: 'Sandwich PUF Panel',
    shortName: 'PUF Panel',
    description: 'Polyurethane Foam (PUF) insulated sandwich panels are high-performance building envelope solutions designed for thermal insulation, structural strength, and rapid construction. These panels consist of a rigid PUF core sandwiched between two pre-painted metal sheets, creating a composite material with exceptional insulating properties.',
    composition: 'PHOENIXX Sandwich PUF Panels feature a closed-cell polyurethane foam core injected between two pre-painted galvanized iron (PPGI) or galvalume steel sheets. The PUF core is manufactured using CFC-free blowing agents, ensuring environmental compliance while delivering superior thermal performance.',
    technology: 'Our continuous lamination technology ensures uniform foam density (40±2 kg/m³) throughout the panel, eliminating air pockets and ensuring consistent R-value across the entire surface. The interlocking joint system provides airtight seals, minimizing thermal bridging.',
    characteristics: [
      'Thermal Conductivity: 0.024 W/mK - Among the lowest in building insulation',
      'Zero water absorption in closed-cell foam structure',
      'Self-extinguishing foam with B2/B3 fire classification',
      'High compressive strength: >0.1 MPa at 10% deformation',
      'Service temperature range: -40°C to +80°C',
      'Lifespan: 25-30 years with proper installation',
    ],
    certifications: [
      'IS 14925:2015 - Indian Standard for Sandwich Panels',
      'FM 4880 Class 1 (optional)',
      'UL certified insulation',
      'ISO 9001:2015 Quality Management',
      'ISO 14001:2015 Environmental Management',
    ],
    applications: {
      pharma: 'PHOENIXX PUF panels meet WHO-GMP requirements for pharmaceutical manufacturing facilities. The smooth, non-porous surface prevents bacterial growth, while excellent thermal insulation maintains controlled environment conditions. Ideal for tablet manufacturing, packaging areas, and secondary processing zones.',
      coldStorage: 'With thermal conductivity of 0.024 W/mK, our PUF panels are the preferred choice for cold storage facilities operating from +15°C to -25°C. The closed-cell structure ensures zero moisture absorption, preventing condensation and ice formation within the panel structure.',
      foodProcessing: 'Food-safe coatings and flush surfaces make PHOENIXX PUF panels ideal for dairy plants, beverage facilities, meat processing units, and FSSAI-compliant food manufacturing. The panels resist mold growth and are easy to clean with standard sanitization protocols.',
      warehouse: 'Large-span warehouses benefit from PUF panels\' lightweight construction (8-15 kg/m² vs 50+ kg/m² for brick) reducing structural steel requirements by up to 30%. Temperature-sensitive goods storage, e-commerce fulfillment centers, and logistics hubs achieve significant energy savings.',
      manufacturing: 'From automotive plants to electronics manufacturing, PUF panels provide dust-free, temperature-controlled environments. Quick installation minimizes production downtime during facility expansion or renovation projects.',
      dataCenter: 'IT facilities require precise temperature control. PHOENIXX PUF panels, combined with proper HVAC design, help maintain server room temperatures within ±1°C tolerance, reducing cooling costs by 20-30%.',
    },
    specifications: {
      thickness: ['30mm', '40mm', '50mm', '60mm', '80mm', '100mm', '120mm', '150mm'],
      density: '40 ± 2 kg/m³',
      thermalConductivity: '0.024 W/mK',
      fireRating: 'B2/B3 (Self-extinguishing), B1 available on request',
      skinMaterial: 'PPGI / PPGL / Stainless Steel 304/316',
      coatings: ['Polyester (PE) - 15-20 microns', 'Silicon Modified Polyester (SMP)', 'PVDF - Premium durability', 'Food-safe coatings'],
      jointProfiles: ['Tongue & Groove', 'Cam-Lock', 'PIR Joint', 'Standing Seam (Roof)'],
    },
    benefits: [
      '40-60% faster construction vs conventional methods',
      '25-30% reduction in HVAC operating costs',
      'Lightweight design reduces structural steel requirements',
      'Factory-manufactured quality consistency',
      'Minimal on-site labor and wastage',
      'Easy future expansion and relocation',
    ],
    idealFor: ['Cold Storage', 'Pharmaceutical', 'Food Processing', 'Warehouses', 'Clean Rooms', 'Industrial Buildings'],
    gradient: 'from-blue-600 to-cyan-600',
  },

  'roofing-puf-panel': {
    slug: 'roofing-puf-panel',
    name: 'Roofing PUF Panel',
    shortName: 'Roof Panel',
    description: 'PHOENIXX Roofing PUF Panels are purpose-engineered insulated roof systems combining weather protection, thermal insulation, and structural performance in a single component. The trapezoidal or standing seam profiles ensure water drainage while the PUF core delivers industry-leading R-values.',
    composition: 'Our roofing panels feature a profiled outer skin (trapezoidal ribs) for strength and drainage, a CFC-free PUF core for insulation, and a flat or micro-ribbed inner skin for aesthetics. The outer profile can span 3-4 meters between purlins, reducing structural steel.',
    technology: 'Continuous double-belt lamination ensures perfect bonding between metal skins and foam core. The trapezoidal profile is roll-formed before foam injection, creating a monolithic panel with superior load-bearing capacity.',
    characteristics: [
      'Effective cover width: 1000mm for efficient coverage',
      'Wind resistance tested up to 150 km/h',
      'Water-tight standing seam options available',
      'UV-resistant outer coatings',
      'Anti-condensation fleece option for high humidity',
      'Service life: 25+ years with proper maintenance',
    ],
    certifications: [
      'IS 14925:2015 compliance',
      'Wind load tested as per IS 875',
      'Fire rating: B2/B3 standard, B1 on request',
      'FM 4471 Roof Assembly (with compatible accessories)',
    ],
    applications: {
      pharma: 'Pharmaceutical facilities require consistent internal conditions. PHOENIXX roof panels maintain temperature stability, prevent condensation drip, and support HEPA-filtered clean room environments beneath.',
      coldStorage: 'Cold storage roofs face extreme temperature differentials. Our 100-150mm roof panels prevent ice dams, condensation, and maintain chamber temperatures efficiently. Compatible with ammonia and Freon refrigeration systems.',
      foodProcessing: 'Hygienic ceiling requirements in food processing are met with our anti-microbial coated inner skins. No exposed fasteners, flush joints, and easy-clean surfaces maintain HACCP compliance.',
      warehouse: 'Large warehouse roofs benefit from the 3-4m span capability, reducing purlins by 40%. Natural skylight integration is seamless with our panel systems, reducing daytime lighting costs.',
      manufacturing: 'Factory roofs need durability against process heat, dust, and vibration. PHOENIXX roof panels withstand harsh industrial environments while maintaining thermal performance.',
      dataCenter: 'Critical facilities require leak-proof roofing. Our standing seam profiles with concealed fasteners eliminate roof penetrations, preventing water ingress that could damage sensitive equipment.',
    },
    specifications: {
      thickness: ['30mm', '40mm', '50mm', '60mm', '80mm', '100mm', '120mm', '150mm'],
      density: '40 ± 2 kg/m³',
      thermalConductivity: '0.024 W/mK',
      fireRating: 'B2/B3 standard, B1 available',
      skinMaterial: 'PPGI / PPGL / Aluminum (Roof-grade)',
      coatings: ['Polyester 25 micron', 'SMP 25 micron', 'PVDF 25 micron', 'HDP (High Durability Polyester)'],
      jointProfiles: ['Trapezoidal', 'Standing Seam', 'Concealed Fix', 'Clip-Lock'],
    },
    benefits: [
      'Single-component roofing solution - no separate insulation needed',
      'Span up to 4m between purlins reducing steel',
      'No thermal bridging at fixing points',
      'Quick installation - 400-600 sqm per day per crew',
      'Factory-fitted skylights and ventilators available',
      'Compatible with solar panel mounting systems',
    ],
    idealFor: ['Industrial Sheds', 'Warehouses', 'Cold Storage', 'Food Plants', 'Commercial Buildings', 'Aircraft Hangars'],
    gradient: 'from-green-600 to-emerald-600',
  },

  'rockwool-panel': {
    slug: 'rockwool-panel',
    name: 'Rockwool Panel',
    shortName: 'Rockwool Panel',
    description: 'PHOENIXX Rockwool Panels are non-combustible insulated sandwich panels featuring mineral wool (stone wool) core derived from volcanic basalt rock. These panels offer A1/A2 fire rating, excellent acoustic insulation, and thermal performance for applications demanding maximum fire safety.',
    composition: 'The core comprises high-density mineral wool (80-150 kg/m³) made from basalt rock fibers. The fibers are oriented perpendicular to the panel surface for optimal compression strength and thermal performance. Metal skins are bonded using high-temperature adhesives.',
    technology: 'Mineral wool is produced by melting basalt at 1500°C and spinning into fine fibers. PHOENIXX panels use lamella-type orientation where fibers run perpendicular to skins, providing higher compression strength than standard parallel-fiber panels.',
    characteristics: [
      'Fire rating: A1/A2 - completely non-combustible',
      'Acoustic insulation: Rw = 32-45 dB',
      'Temperature resistance: up to 1000°C (core)',
      'Thermal conductivity: 0.035-0.040 W/mK',
      'Hydrophobic treatment prevents water absorption',
      'Non-toxic, CFC/HCFC free',
    ],
    certifications: [
      'EN 13501-1 Fire Classification A1/A2',
      'FM 4880 Class 1 Insurance Compliance',
      'IS 3143 Mineral Wool Specification',
      'Acoustic testing per IS 9901',
      'ISO 9001:2015 certified manufacturing',
    ],
    applications: {
      pharma: 'Where fire safety is paramount, such as near boiler rooms, electrical panels, or solvent storage areas within pharma facilities, rockwool panels provide non-combustible separation without compromising cleanroom integrity.',
      coldStorage: 'For insurance-mandated non-combustible construction or high-value inventory storage, rockwool panels offer peace of mind. Typical in FM Global insured facilities and multi-temperature distribution centers.',
      foodProcessing: 'Areas with cooking processes, fryers, or ovens benefit from rockwool\'s heat resistance. The non-combustible core prevents fire spread even under extreme temperatures.',
      warehouse: 'High-value warehouses storing electronics, automotive parts, or finished goods often require FM Global or similar insurance compliance. Rockwool panels meet these stringent requirements.',
      manufacturing: 'Generator enclosures, compressor rooms, and acoustic barriers around noisy equipment use rockwool panels for combined fire safety and sound absorption (up to 45 dB reduction).',
      dataCenter: 'Tier 3/4 data centers require non-combustible construction. Rockwool panels protect critical IT infrastructure while providing thermal mass for temperature stability.',
    },
    specifications: {
      thickness: ['50mm', '80mm', '100mm', '120mm', '150mm', '200mm'],
      density: '80 kg/m³, 100 kg/m³, 120 kg/m³, 150 kg/m³',
      thermalConductivity: '0.035-0.040 W/mK (density dependent)',
      fireRating: 'A1/A2 (Non-combustible)',
      skinMaterial: 'PPGI / PPGL / Stainless Steel',
      coatings: ['Polyester', 'SMP', 'PVDF', 'Food-safe options'],
      jointProfiles: ['Tongue & Groove', 'Cam-Lock', 'Acoustic Seal Joint'],
    },
    benefits: [
      'Complete non-combustibility - A1 fire rating',
      'Superior acoustic insulation (32-45 dB)',
      'FM Global insurance compliance',
      'No toxic fumes during fire',
      'Resistant to rodents and pests',
      'Long-term dimensional stability',
    ],
    idealFor: ['Fire-rated Walls', 'Acoustic Enclosures', 'FM Global Projects', 'Generator Rooms', 'High-value Warehouses', 'Food Processing near Heat Sources'],
    gradient: 'from-orange-600 to-red-600',
  },

  'pir-panel': {
    slug: 'pir-panel',
    name: 'PIR Panel',
    shortName: 'PIR Panel',
    description: 'PHOENIXX PIR (Polyisocyanurate) Panels represent the next generation of insulated sandwich panels, offering superior fire performance and thermal efficiency compared to standard PUF. The modified chemical structure provides Class B-s1,d0 fire rating with minimal smoke emission.',
    composition: 'PIR foam is created by adjusting the ratio of polyol to isocyanate in the foam formulation, creating a more cross-linked, char-forming structure. This results in a self-extinguishing foam that carbonizes rather than melts during fire, limiting fire spread.',
    technology: 'The PIR reaction produces a thermoset foam with higher char yield. During fire exposure, the surface carbonizes to form a protective barrier, limiting heat penetration and preventing dripping. PHOENIXX PIR achieves 0.022 W/mK - superior to standard PUF.',
    characteristics: [
      'Fire rating: B-s1,d0 (limited contribution to fire, very low smoke)',
      'Thermal conductivity: 0.022 W/mK (better than PUF)',
      'Self-extinguishing with minimal smoke',
      'No burning droplets (d0 rating)',
      'Temperature resistance up to 150°C (vs 100°C for PUF)',
      'Same lightweight and easy installation as PUF',
    ],
    certifications: [
      'EN 13501-1 Class B-s1,d0',
      'FM 4880/4881 Approved',
      'UL Listed Insulation',
      'IS 14925:2015 compliance',
      'CE marked for European projects',
    ],
    applications: {
      pharma: 'Pharmaceutical manufacturing facilities increasingly specify PIR for enhanced fire safety without compromising on cleanroom performance. WHO-GMP inspectors appreciate the additional fire protection in high-value API facilities.',
      coldStorage: 'PIR\'s superior thermal efficiency (0.022 W/mK) means thinner panels achieve the same R-value. For deep freeze applications (-40°C), PIR reduces panel thickness by 10-15% vs PUF, saving both material and space.',
      foodProcessing: 'Food processing facilities with cooking, frying, or baking operations benefit from PIR\'s fire resistance. The low smoke emission protects product quality during any fire incident.',
      warehouse: 'E-commerce fulfillment centers, valuable goods storage, and multi-tenant facilities prefer PIR for enhanced safety. Insurance companies may offer premium reductions for PIR construction.',
      manufacturing: 'Process industries with fire risks (chemicals, textiles, paper) choose PIR for additional protection. The B-s1,d0 rating satisfies most industrial fire codes.',
      dataCenter: 'Mission-critical facilities require every fire safety advantage. PIR panels combined with gas suppression systems provide layered protection for IT infrastructure.',
    },
    specifications: {
      thickness: ['40mm', '50mm', '60mm', '80mm', '100mm', '120mm', '150mm'],
      density: '40 ± 2 kg/m³',
      thermalConductivity: '0.022 W/mK',
      fireRating: 'B-s1,d0 (Class B with very low smoke and no droplets)',
      skinMaterial: 'PPGI / PPGL / Stainless Steel',
      coatings: ['Polyester', 'SMP', 'PVDF', 'Food-safe', 'Anti-bacterial'],
      jointProfiles: ['Tongue & Groove', 'Cam-Lock', 'PIR-specific thermal break joints'],
    },
    benefits: [
      'Superior fire safety - Class B-s1,d0',
      'Better thermal performance than PUF (0.022 vs 0.024 W/mK)',
      'Very low smoke emission during fire',
      'No burning droplets - safer evacuation',
      'May reduce insurance premiums',
      'Same easy installation as PUF',
    ],
    idealFor: ['Pharmaceutical Plants', 'Cold Storage', 'Food Processing', 'High-value Warehouses', 'Fire-sensitive Industries', 'Insurance-compliant Projects'],
    gradient: 'from-purple-600 to-indigo-600',
  },

  'fm-approved-panel': {
    slug: 'fm-approved-panel',
    name: 'FM Approved Panel',
    shortName: 'FM Panel',
    description: 'PHOENIXX FM Approved Panels are third-party certified by Factory Mutual Global, meeting the stringent FM 4880/4881 standards for wall and roof assemblies. These panels are mandatory for facilities insured by FM Global and recommended for high-value inventory protection.',
    composition: 'FM Approved panels can feature either PIR or Rockwool cores, depending on specific FM approval requirements. The entire assembly - panels, fasteners, joints, and accessories - must be FM Approved to maintain certification validity.',
    technology: 'FM testing subjects panels to large-scale fire tests, simulating real building fire scenarios. PHOENIXX FM panels pass calorimeter tests, room corner tests, and parallel panel tests, demonstrating limited fire spread and heat release rates.',
    characteristics: [
      'FM 4880 Class 1 - Highest FM rating for insulated panels',
      'Tested for fire, wind uplift, hail resistance',
      'Mandatory use of FM Approved accessories',
      'Annual factory audits by FM Global',
      'Traceable lot numbers for warranty claims',
      'Valid for FM Global insured properties worldwide',
    ],
    certifications: [
      'FM 4880 Class 1 Wall Panel',
      'FM 4881 Roof Panel Assembly',
      'FM Approved accessories included',
      'Annual FM Global audit compliance',
      'UL Listed components',
    ],
    applications: {
      pharma: 'Multi-national pharmaceutical companies with global insurance programs require FM Approved construction. PHOENIXX FM panels ensure compliance across India, reducing insurance complexity for MNC plants.',
      coldStorage: 'Cold storage facilities for MNC food companies, pharma cold chain, or high-value perishables often require FM Approved construction per insurance mandates.',
      foodProcessing: 'Global food brands insist on FM Approved facilities for supply chain reliability. Indian contract manufacturers serving these brands benefit from PHOENIXX FM panels.',
      warehouse: 'Third-party logistics providers serving MNC clients, e-commerce giants, or high-value electronics storage typically need FM Approved construction to maintain insurance coverage.',
      manufacturing: 'Automotive OEMs, electronics manufacturers, and chemical companies with stringent insurance requirements specify FM Approved panels for new facilities.',
      dataCenter: 'Tier 3/4 data centers serving global clients require FM Approved construction as part of their uptime commitments and insurance requirements.',
    },
    specifications: {
      thickness: ['50mm', '80mm', '100mm', '120mm', '150mm', '200mm'],
      density: 'PIR: 40 kg/m³ | Rockwool: 100-150 kg/m³',
      thermalConductivity: 'PIR: 0.022 W/mK | Rockwool: 0.038 W/mK',
      fireRating: 'FM 4880 Class 1 (Wall) | FM 4881 (Roof)',
      skinMaterial: 'FM Approved PPGI / PPGL configurations',
      coatings: ['FM Approved coating systems only'],
      jointProfiles: ['FM Approved joint details', 'Certified fastening systems'],
    },
    benefits: [
      'Mandatory for FM Global insured facilities',
      'May reduce insurance premiums by 10-30%',
      'Internationally recognized certification',
      'Complete fire-tested assembly',
      'Audit trail and documentation',
      'Simplified global insurance compliance',
    ],
    idealFor: ['MNC Manufacturing', 'FM Global Insured Facilities', 'High-value Warehouses', 'Pharma Cold Chain', 'Data Centers', 'Electronics Manufacturing'],
    gradient: 'from-amber-600 to-yellow-600',
  },
};

// Location Data
export interface LocationData {
  slug: string;
  name: string;
  type: 'country' | 'state' | 'city';
  parent?: string;
  state?: string;
  industrialZones?: string[];
  climate: string;
  industries: string[];
  regulations?: string[];
  nearbyAreas?: string[];
  uniqueFacts?: string[]; // Location-specific unique facts for differentiation
  localProjects?: string[]; // Example projects completed in the area
  testimonials?: { quote: string; client: string }[]; // Location-specific testimonials
}

export const locations: Record<string, LocationData> = {
  // Country Level
  'india': {
    slug: 'india',
    name: 'India',
    type: 'country',
    climate: 'India\'s diverse climate ranges from tropical in the south to temperate in the north, with extreme summers (45°C+), heavy monsoons, and cold winters in some regions. This diversity demands versatile building solutions that perform across all conditions.',
    industries: ['Pharmaceuticals', 'Food Processing', 'Automotive', 'IT & Data Centers', 'Cold Chain Logistics', 'Textiles', 'Chemicals', 'Electronics'],
    regulations: ['IS 14925:2015', 'National Building Code 2016', 'FSSAI for Food', 'WHO-GMP for Pharma', 'PESO for Hazardous Areas'],
    nearbyAreas: ['Gujarat', 'Maharashtra', 'Tamil Nadu', 'Karnataka', 'Rajasthan', 'Madhya Pradesh', 'Uttar Pradesh', 'Chhattisgarh'],
  },

  // State Level - Gujarat
  'gujarat': {
    slug: 'gujarat',
    name: 'Gujarat',
    type: 'state',
    parent: 'india',
    climate: 'Gujarat experiences hot semi-arid climate with temperatures reaching 45°C in summer, moderate winters, and erratic monsoons. Coastal areas face humidity and salt-laden air, demanding corrosion-resistant building solutions.',
    industries: ['Pharmaceuticals (30% of India\'s production)', 'Chemicals & Petrochemicals', 'Textiles', 'Ceramics', 'Engineering', 'Food Processing', 'Diamond Processing', 'Renewable Energy'],
    regulations: ['GPCB Environmental Clearance', 'Gujarat Industrial Policy', 'GIDC Development Norms', 'GFDA for Food Industries'],
    nearbyAreas: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Jamnagar', 'Bhavnagar', 'Vapi', 'Ankleshwar', 'Morbi'],
    industrialZones: ['GIDC Sanand', 'GIDC Vatva', 'GIDC Naroda', 'GIDC Ankleshwar', 'GIDC Vapi', 'GIFT City', 'Dholera SIR', 'Mundra SEZ'],
  },

  // State Level - Chhattisgarh
  'chhattisgarh': {
    slug: 'chhattisgarh',
    name: 'Chhattisgarh',
    type: 'state',
    parent: 'india',
    climate: 'Chhattisgarh has tropical wet and dry climate with hot summers (up to 45°C), heavy monsoons, and mild winters. The mineral-rich region\'s industrial facilities require protection from heat, humidity, and dust.',
    industries: ['Steel & Iron', 'Power Generation', 'Mining', 'Cement', 'Aluminum', 'Food Processing', 'Rice Mills', 'Agro-Processing'],
    regulations: ['CSIDC Industrial Norms', 'CSEB Power Requirements', 'Chhattisgarh Industrial Policy', 'Environmental Clearance from CECB'],
    nearbyAreas: ['Raipur', 'Bhilai', 'Bilaspur', 'Durg', 'Korba', 'Raigarh'],
    industrialZones: ['Urla Industrial Area', 'Siltara Industrial Area', 'Bhilai Industrial Estate', 'Bilaspur Industrial Area'],
  },

  // Gujarat Cities
  'ahmedabad': {
    slug: 'ahmedabad',
    name: 'Ahmedabad',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Ahmedabad experiences extreme heat (up to 48°C in May), dry winters, and unpredictable monsoons. The semi-arid climate demands high-performance thermal insulation for year-round comfort and energy efficiency.',
    industries: ['Pharmaceuticals', 'Chemicals', 'Textiles', 'Engineering', 'IT Services', 'Food Processing', 'Automotive Ancillaries'],
    industrialZones: ['GIDC Naroda (PHOENIXX HQ)', 'GIDC Odhav', 'GIDC Vatva', 'GIDC Changodar', 'GIDC Sanand', 'Bavla Industrial Area', 'Aslali Industrial Zone', 'Kathwada GIDC'],
    nearbyAreas: ['Gandhinagar', 'Sanand', 'Kalol', 'Mehsana', 'Nadiad', 'Kheda', 'Bavla', 'Changodar', 'GIFT City'],
    uniqueFacts: [
      'PHOENIXX SMARTBUILD headquarters located in GIDC Naroda with 50,000+ sq.ft manufacturing facility',
      'Ahmedabad produces 30% of India\'s pharmaceutical output with 3000+ pharma units in GIDC estates',
      'Same-day delivery available for stock items within Ahmedabad city limits',
      'Only manufacturer in Gujarat offering factory visits and live production demonstrations',
      'Local technical support team available for on-site consultations within 24 hours',
    ],
    localProjects: [
      'Zydus Cadila - Cold storage facility with 10,000 sq.m PUF panel installation (GIDC Sanand)',
      'Torrent Pharma - GMP-compliant cleanroom panels (Changodar)',
      'Adani Wilmar - Food processing plant roofing and wall systems (Mundra Port)',
      '50+ warehouse projects across Adalaj, Narol, and Kathwada industrial areas',
      'Multiple cold storage facilities in APMC Market and Khodiyar area',
    ],
    testimonials: [
      { quote: 'PHOENIXX delivered our 8,000 sq.m cold storage project 15 days ahead of schedule. Their local presence meant immediate support during installation.', client: 'Logistics Director, Leading Cold Chain Company, GIDC Narol' },
      { quote: 'As an Ahmedabad-based pharma company, having PHOENIXX factory nearby ensures consistent quality and eliminates logistics delays. Best decision for our cleanroom project.', client: 'Project Manager, Pharmaceutical Manufacturing Unit, GIDC Vatva' },
    ],
    // PHOENIXX Headquarters - Special Ahmedabad data
    factoryLocation: 'GIDC Naroda, Phase II, Ahmedabad - 382330',
    deliveryTime: 'Same-day delivery available for stock items, 3-5 days for custom orders',
    localAdvantage: 'Factory-direct pricing, factory visits welcome, dedicated local support team',
    majorClients: ['Zydus Cadila', 'Torrent Pharma', 'Intas Pharma', 'Adani Group', 'Reliance Industries'],
  } as LocationData & { factoryLocation?: string; deliveryTime?: string; localAdvantage?: string; majorClients?: string[] },

  'gandhinagar': {
    slug: 'gandhinagar',
    name: 'Gandhinagar',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'As Gujarat\'s capital, Gandhinagar has similar climate to Ahmedabad with planned green spaces providing slightly milder summers. GIFT City\'s high-rise developments demand premium building envelope solutions.',
    industries: ['IT & ITES', 'Government Facilities', 'Financial Services (GIFT City)', 'Education', 'Healthcare', 'Data Centers'],
    industrialZones: ['GIFT City SEZ', 'Infocity', 'GIDC Gandhinagar', 'Electronics Park'],
    nearbyAreas: ['Ahmedabad', 'Kalol', 'Mehsana', 'Sector-based Industrial Pockets'],
  },

  'surat': {
    slug: 'surat',
    name: 'Surat',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Surat\'s coastal location brings hot, humid summers and significant monsoon rainfall. Industrial facilities need protection from humidity, salt air, and flooding risks.',
    industries: ['Diamond Processing', 'Textiles', 'Chemicals', 'Petrochemicals', 'Engineering', 'Food Processing', 'Logistics'],
    industrialZones: ['GIDC Sachin', 'GIDC Pandesara', 'GIDC Ichhapore', 'Hazira Industrial Area', 'Surat SEZ', 'Diamond Research Park'],
    nearbyAreas: ['Hazira', 'Sachin', 'Bardoli', 'Navsari', 'Valsad', 'Bharuch'],
    uniqueFacts: [
      'Surat is India\'s diamond cutting capital processing 90% of world\'s diamonds, requiring precise climate control',
      'GIDC Sachin houses 1000+ textile and chemical units with high demand for insulated infrastructure',
      'Coastal location requires corrosion-resistant coatings - PHOENIXX provides marine-grade PVDF options',
      'Hazira port proximity enables cost-effective logistics for large-scale industrial projects',
      '150+ km from PHOENIXX Ahmedabad factory with 24-hour delivery service',
    ],
    localProjects: [
      'Diamond processing units - Temperature-controlled storage and processing areas (Diamond Research Park)',
      'Textile manufacturing plants - Climate-controlled weaving and dyeing units (GIDC Pandesara)',
      'Food processing facilities - Cold storage and blast freezing units (GIDC Sachin)',
      'Petrochemical warehouses - Fire-rated PIR panel installations (Hazira Industrial Area)',
    ],
    testimonials: [
      { quote: 'Our diamond processing unit requires precise 22°C temperature control year-round. PHOENIXX PUF panels reduced our cooling costs by 35% compared to our previous facility.', client: 'Operations Head, Diamond Processing Company, Surat' },
    ],
  },

  'vadodara': {
    slug: 'vadodara',
    name: 'Vadodara',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Vadodara has hot semi-arid climate with temperatures reaching 45°C. The industrial hub hosts major chemical and pharmaceutical companies requiring controlled environment facilities.',
    industries: ['Chemicals', 'Pharmaceuticals', 'Engineering', 'Steel', 'Plastics', 'IT Services', 'Food Processing'],
    industrialZones: ['GIDC Makarpura', 'GIDC Nandesari', 'GIDC Savli', 'PCPIR (Petroleum, Chemicals)', 'Waghodia Industrial Area'],
    nearbyAreas: ['Anand', 'Bharuch', 'Dahej', 'Savli', 'Halol', 'Padra'],
  },

  'rajkot': {
    slug: 'rajkot',
    name: 'Rajkot',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Rajkot experiences hot, dry summers and mild winters. The Saurashtra region\'s industrial growth demands quality infrastructure with thermal efficiency.',
    industries: ['Engineering', 'Auto Components', 'Ceramics', 'Food Processing', 'Casting & Forging', 'Diesel Engines'],
    industrialZones: ['GIDC Metoda', 'GIDC Lodhika', 'GIDC Shapar-Veraval', 'Bhaktinagar Industrial Area', 'Aji Industrial Area'],
    nearbyAreas: ['Morbi', 'Jamnagar', 'Junagadh', 'Surendranagar', 'Gondal'],
  },

  'jamnagar': {
    slug: 'jamnagar',
    name: 'Jamnagar',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Jamnagar\'s coastal climate brings humidity and salt air challenges. Home to the world\'s largest refinery, the region requires corrosion-resistant industrial building solutions.',
    industries: ['Refineries & Petrochemicals', 'Brass Parts', 'Marine Industries', 'Salt Production', 'Cement', 'Power Generation'],
    industrialZones: ['Reliance SEZ', 'GIDC Dared', 'GIDC Hapa', 'Sikka Industrial Area', 'Motikhavdi Industrial Zone'],
    nearbyAreas: ['Rajkot', 'Dwarka', 'Porbandar', 'Sikka', 'Khambhalia'],
  },

  'bhavnagar': {
    slug: 'bhavnagar',
    name: 'Bhavnagar',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Bhavnagar\'s coastal location brings moderate climate with humidity. The ship-breaking industry and diamond processing require specialized facilities.',
    industries: ['Ship Breaking', 'Diamond Processing', 'Plastics', 'Chemicals', 'Food Processing', 'Cotton Textiles'],
    industrialZones: ['GIDC Bhavnagar', 'Alang Ship Breaking Yard', 'Chitra Industrial Area', 'GIDC Vitthal Udyognagar'],
    nearbyAreas: ['Palitana', 'Mahuva', 'Alang', 'Sihor', 'Botad'],
  },

  'junagadh': {
    slug: 'junagadh',
    name: 'Junagadh',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Junagadh has semi-arid climate with agricultural focus. Agro-processing and food industries dominate, requiring temperature-controlled facilities.',
    industries: ['Agro-Processing', 'Food Processing', 'Mango & Groundnut Processing', 'Cement', 'Tourism-related'],
    industrialZones: ['GIDC Junagadh', 'GIDC Veraval', 'Food Processing Zone'],
    nearbyAreas: ['Veraval', 'Somnath', 'Keshod', 'Una', 'Visavadar'],
  },

  'morbi': {
    slug: 'morbi',
    name: 'Morbi',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Morbi has semi-arid climate suitable for ceramic manufacturing. The ceramic hub requires energy-efficient facilities for kilns and warehousing.',
    industries: ['Ceramics (70% of India\'s tiles)', 'Wall Clocks', 'Sanitary Ware', 'Engineering', 'Food Processing'],
    industrialZones: ['GIDC Morbi', 'Ceramic Zone', 'Tankara Industrial Area', 'Halvad Industrial Belt'],
    nearbyAreas: ['Rajkot', 'Wankaner', 'Tankara', 'Halvad', 'Surendranagar'],
  },

  'mehsana': {
    slug: 'mehsana',
    name: 'Mehsana',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Mehsana has hot semi-arid climate. The dairy capital of India requires extensive cold chain infrastructure for milk processing and storage.',
    industries: ['Dairy (Dudhsagar Dairy)', 'Food Processing', 'Oil & Gas', 'Engineering', 'Agro-Processing'],
    industrialZones: ['GIDC Mehsana', 'GIDC Kadi', 'ONGC Industrial Area', 'Dudhsagar Cooperative Complex'],
    nearbyAreas: ['Ahmedabad', 'Kalol', 'Visnagar', 'Kadi', 'Patan', 'Unjha'],
  },

  'anand': {
    slug: 'anand',
    name: 'Anand',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Anand has tropical wet and dry climate with moderate temperatures. Home to Amul, the dairy industry requires extensive cold storage networks.',
    industries: ['Dairy (Amul)', 'Food Processing', 'Tobacco', 'Pharmaceuticals', 'Education', 'Agro-Industry'],
    industrialZones: ['GIDC Anand', 'GIDC Vitthal Udyognagar', 'Amul Dairy Complex', 'V.V.Nagar Industrial Area'],
    nearbyAreas: ['Vadodara', 'Nadiad', 'Kheda', 'Borsad', 'Petlad', 'V.V.Nagar'],
  },

  'nadiad': {
    slug: 'nadiad',
    name: 'Nadiad',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Nadiad experiences hot summers and mild winters typical of central Gujarat. The pharmaceutical hub requires controlled environment manufacturing facilities.',
    industries: ['Pharmaceuticals', 'Healthcare', 'Tobacco', 'Food Processing', 'Education'],
    industrialZones: ['GIDC Nadiad', 'Pharmaceutical Park', 'Kheda Industrial Belt'],
    nearbyAreas: ['Anand', 'Ahmedabad', 'Kheda', 'Mehmadabad', 'Mahemdavad'],
  },

  'bharuch': {
    slug: 'bharuch',
    name: 'Bharuch',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Bharuch has hot semi-arid climate with Narmada River influence. The chemical hub requires specialized fire-rated and chemical-resistant building solutions.',
    industries: ['Chemicals', 'Petrochemicals', 'Pharmaceuticals', 'Dyes & Intermediates', 'Paper', 'Textiles'],
    industrialZones: ['GIDC Ankleshwar', 'GIDC Dahej', 'Dahej PCPIR', 'Jhagadia Industrial Estate', 'Ankleshwar GIDC'],
    nearbyAreas: ['Ankleshwar', 'Dahej', 'Jambusar', 'Amod', 'Vagra'],
  },

  'vapi': {
    slug: 'vapi',
    name: 'Vapi',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Vapi has humid subtropical climate influenced by Arabian Sea proximity. The industrial belt requires humidity-resistant and chemical-grade building solutions.',
    industries: ['Chemicals', 'Pharmaceuticals', 'Textiles', 'Paper', 'Engineering', 'Dyes & Pigments'],
    industrialZones: ['GIDC Vapi', 'GIDC Sarigam', 'GIDC Umbergaon', 'Vapi SEZ', 'Silvassa Industrial Area'],
    nearbyAreas: ['Daman', 'Silvassa', 'Valsad', 'Sarigam', 'Umbergaon', 'Pardi'],
  },

  'navsari': {
    slug: 'navsari',
    name: 'Navsari',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Navsari has tropical monsoon climate with high humidity and rainfall. Agricultural processing and textiles dominate the industrial landscape.',
    industries: ['Textiles', 'Sugar', 'Food Processing', 'Agriculture', 'Diamond Processing'],
    industrialZones: ['GIDC Navsari', 'GIDC Bilimora', 'Agro-Processing Zone'],
    nearbyAreas: ['Surat', 'Valsad', 'Bilimora', 'Gandevi', 'Chikhli'],
  },

  'palanpur': {
    slug: 'palanpur',
    name: 'Palanpur',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Palanpur has semi-arid climate with hot summers. The diamond and mining industries require controlled environment facilities.',
    industries: ['Diamond Processing', 'Mining', 'Marble', 'Food Processing', 'Dairy'],
    industrialZones: ['GIDC Palanpur', 'Diamond Park', 'Mining Industrial Zone'],
    nearbyAreas: ['Mehsana', 'Patan', 'Deesa', 'Abu Road', 'Ambaji'],
  },

  'himmatnagar': {
    slug: 'himmatnagar',
    name: 'Himmatnagar',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Himmatnagar has semi-arid climate with hot summers. The ceramic and engineering industries drive industrial demand.',
    industries: ['Ceramics', 'Engineering', 'Food Processing', 'Dairy', 'Mining'],
    industrialZones: ['GIDC Himmatnagar', 'GIDC Idar', 'Ceramics Industrial Area'],
    nearbyAreas: ['Ahmedabad', 'Mehsana', 'Idar', 'Modasa', 'Prantij'],
  },

  'godhra': {
    slug: 'godhra',
    name: 'Godhra',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Godhra has tropical wet and dry climate. The emerging industrial hub requires modern infrastructure for manufacturing growth.',
    industries: ['Dairy', 'Food Processing', 'Engineering', 'Textiles', 'Agro-Industry'],
    industrialZones: ['GIDC Godhra', 'GIDC Halol', 'Food Processing Park'],
    nearbyAreas: ['Vadodara', 'Dahod', 'Halol', 'Lunawada', 'Santrampur'],
  },

  'dahod': {
    slug: 'dahod',
    name: 'Dahod',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Dahod has tropical wet and dry climate with tribal belt influences. The developing industrial area focuses on agro-processing.',
    industries: ['Agro-Processing', 'Food Processing', 'Dairy', 'Engineering', 'Mining'],
    industrialZones: ['GIDC Dahod', 'Agro-Food Park', 'Devgadh Baria Industrial Area'],
    nearbyAreas: ['Godhra', 'Limkheda', 'Jhalod', 'Devgadh Baria', 'Garbada'],
  },

  // Chhattisgarh Cities
  'raipur': {
    slug: 'raipur',
    name: 'Raipur',
    type: 'city',
    parent: 'chhattisgarh',
    state: 'Chhattisgarh',
    climate: 'Raipur has tropical wet and dry climate with extreme summers (up to 47°C), heavy monsoons, and mild winters. Steel and power industries demand heat-resistant building solutions.',
    industries: ['Steel', 'Power', 'Rice Mills', 'Food Processing', 'Engineering', 'IT Services', 'Logistics'],
    industrialZones: ['Urla Industrial Area', 'Siltara Industrial Area', 'Rawabhata Industrial Growth Centre', 'Naya Raipur Industrial Zone'],
    nearbyAreas: ['Bhilai', 'Durg', 'Bilaspur', 'Naya Raipur', 'Mahasamund', 'Dhamtari'],
  },

  'bhilai': {
    slug: 'bhilai',
    name: 'Bhilai',
    type: 'city',
    parent: 'chhattisgarh',
    state: 'Chhattisgarh',
    climate: 'Bhilai, home to the Steel Authority of India Limited (SAIL) plant, experiences extreme industrial heat combined with hot summers. Building solutions must withstand process heat and ambient temperatures.',
    industries: ['Steel (SAIL Bhilai Steel Plant)', 'Engineering', 'Ancillary Industries', 'Logistics', 'Education'],
    industrialZones: ['Bhilai Industrial Estate', 'Bhilai-3 Industrial Area', 'Kumhari Growth Centre', 'Steel Plant Ancillary Zone'],
    nearbyAreas: ['Durg', 'Raipur', 'Rajnandgaon', 'Nandini Road', 'Supela'],
  },

  'bilaspur': {
    slug: 'bilaspur',
    name: 'Bilaspur',
    type: 'city',
    parent: 'chhattisgarh',
    state: 'Chhattisgarh',
    climate: 'Bilaspur has tropical climate with hot summers and monsoons. The railway hub and emerging industrial center requires modern building infrastructure.',
    industries: ['Railways', 'Power', 'Aluminum', 'Rice Mills', 'Food Processing', 'Engineering'],
    industrialZones: ['Bilaspur Industrial Area', 'CSIDC Industrial Estate', 'Railway Workshop Zone'],
    nearbyAreas: ['Raipur', 'Korba', 'Raigarh', 'Champa', 'Akaltara', 'Mungeli'],
  },

  // State Level - Maharashtra
  'maharashtra': {
    slug: 'maharashtra',
    name: 'Maharashtra',
    type: 'state',
    parent: 'india',
    climate: 'Maharashtra has diverse climate from coastal humidity in Mumbai to semi-arid conditions in Vidarbha. Industrial facilities require solutions for varying temperature and humidity conditions.',
    industries: ['Automobiles', 'Pharmaceuticals', 'IT & ITES', 'Textiles', 'Food Processing', 'Chemicals', 'Engineering', 'Petrochemicals'],
    regulations: ['MPCB Environmental Clearance', 'Maharashtra Industrial Policy', 'MIDC Development Norms', 'FDA Maharashtra for Food'],
    nearbyAreas: ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane', 'Kolhapur'],
    industrialZones: ['MIDC Pune', 'MIDC Nashik', 'MIDC Aurangabad', 'MIDC Nagpur', 'JNPT SEZ', 'Talegaon Industrial Area'],
  },

  // Maharashtra Cities
  'mumbai': {
    slug: 'mumbai',
    name: 'Mumbai',
    type: 'city',
    parent: 'maharashtra',
    state: 'Maharashtra',
    climate: 'Mumbai has tropical monsoon climate with high humidity year-round. Coastal salt air and heavy monsoons demand corrosion-resistant building solutions.',
    industries: ['Financial Services', 'IT & ITES', 'Pharmaceuticals', 'Entertainment', 'Logistics', 'Food Processing', 'Textiles'],
    industrialZones: ['MIDC Andheri', 'MIDC Taloja', 'JNPT SEZ', 'Navi Mumbai Industrial Area', 'Thane-Belapur Industrial Belt'],
    nearbyAreas: ['Thane', 'Navi Mumbai', 'Panvel', 'Vasai', 'Bhiwandi'],
    uniqueFacts: [
      'India\'s financial capital with 40% of India\'s pharma manufacturing concentrated in Mumbai-Thane belt',
      'JNPT port handles 50%+ of India\'s containerized cargo - ideal logistics hub for panel supply',
      'High humidity and salt air demand marine-grade PVDF coatings - PHOENIXX specialty',
      'Space constraints make fast-track construction critical - PUF panels reduce project time by 40%',
      'Regular deliveries to Navi Mumbai, Thane, and JNPT within 48 hours from Gujarat factory',
    ],
    localProjects: [
      'Pharmaceutical cold chain facility - 15,000 sq.m installation (MIDC Taloja)',
      'Food processing plant - FM Approved panel system (Panvel)',
      'E-commerce fulfillment center - Climate-controlled warehousing (Bhiwandi)',
      'Data center infrastructure - Precision climate control (Navi Mumbai)',
    ],
    testimonials: [
      { quote: 'Mumbai\'s humidity was ruining our warehouse inventory. PHOENIXX PUF panels brought humidity under control and cut AC costs by 30%.', client: 'Warehouse Manager, Logistics Company, Bhiwandi' },
    ],
  },

  'pune': {
    slug: 'pune',
    name: 'Pune',
    type: 'city',
    parent: 'maharashtra',
    state: 'Maharashtra',
    climate: 'Pune has tropical wet and dry climate with pleasant winters and moderate summers. The automotive and IT hub requires modern industrial infrastructure.',
    industries: ['Automobiles', 'IT & Software', 'Engineering', 'Food Processing', 'Pharmaceuticals', 'Defense', 'Education'],
    industrialZones: ['MIDC Chakan', 'MIDC Ranjangaon', 'MIDC Pimpri-Chinchwad', 'Hinjewadi IT Park', 'Talegaon Industrial Area'],
    nearbyAreas: ['Chakan', 'Talegaon', 'Lonavala', 'Satara', 'Solapur'],
    uniqueFacts: [
      'India\'s largest automotive manufacturing hub with 30+ OEMs and 2000+ ancillary units',
      'Chakan-Talegaon corridor has 50+ cold storage facilities serving agriculture and pharma sectors',
      'Hinjewadi IT Park houses 1000+ companies requiring energy-efficient data center infrastructure',
      'Pleasant climate reduces HVAC load but monsoons demand superior waterproofing - PUF panels ideal',
      'Strategic location on Mumbai-Bangalore corridor enables efficient logistics',
    ],
    localProjects: [
      'Automotive component manufacturing - Temperature-controlled paint booths (Chakan MIDC)',
      'Pharma API manufacturing - GMP cleanroom panels (Ranjangaon)',
      'Food processing plant - 12,000 sq.m cold storage (Talegaon)',
      'IT campus - Energy-efficient building envelope (Hinjewadi)',
    ],
    testimonials: [
      { quote: 'Our automotive paint booth required precise temperature control. PHOENIXX panels delivered consistent performance and reduced our rejection rate by 15%.', client: 'Quality Manager, Auto Ancillary Company, Chakan' },
    ],
  },

  'nagpur': {
    slug: 'nagpur',
    name: 'Nagpur',
    type: 'city',
    parent: 'maharashtra',
    state: 'Maharashtra',
    climate: 'Nagpur has tropical savanna climate with extreme summers (up to 48°C). Central India\'s logistics hub requires heat-resistant building solutions.',
    industries: ['Logistics', 'Textiles', 'Food Processing', 'Engineering', 'Mining', 'Power', 'IT Services'],
    industrialZones: ['MIDC Hingna', 'MIDC Butibori', 'MIHAN SEZ', 'Nagpur Dry Port'],
    nearbyAreas: ['Wardha', 'Chandrapur', 'Amravati', 'Gondia', 'Bhandara'],
  },

  'nashik': {
    slug: 'nashik',
    name: 'Nashik',
    type: 'city',
    parent: 'maharashtra',
    state: 'Maharashtra',
    climate: 'Nashik has semi-arid climate with moderate temperatures. The wine capital and industrial hub requires controlled environment facilities.',
    industries: ['Wine & Beverages', 'Food Processing', 'Engineering', 'Pharmaceuticals', 'Defense', 'Textiles'],
    industrialZones: ['MIDC Ambad', 'MIDC Satpur', 'MIDC Sinnar', 'Defense Industrial Corridor'],
    nearbyAreas: ['Sinnar', 'Igatpuri', 'Trimbakeshwar', 'Malegaon', 'Dhule'],
  },

  'aurangabad': {
    slug: 'aurangabad',
    name: 'Aurangabad',
    type: 'city',
    parent: 'maharashtra',
    state: 'Maharashtra',
    climate: 'Aurangabad has semi-arid climate with hot summers. The emerging industrial hub focuses on automobiles and engineering.',
    industries: ['Automobiles', 'Engineering', 'Pharmaceuticals', 'Food Processing', 'Textiles', 'Tourism'],
    industrialZones: ['MIDC Waluj', 'MIDC Chikalthana', 'MIDC Shendra', 'AURIC City'],
    nearbyAreas: ['Jalna', 'Parbhani', 'Beed', 'Ahmednagar'],
  },

  'thane': {
    slug: 'thane',
    name: 'Thane',
    type: 'city',
    parent: 'maharashtra',
    state: 'Maharashtra',
    climate: 'Thane has tropical monsoon climate similar to Mumbai. The industrial satellite city requires modern infrastructure solutions.',
    industries: ['Chemicals', 'Pharmaceuticals', 'Engineering', 'Textiles', 'IT Services', 'Logistics'],
    industrialZones: ['MIDC Wagle Estate', 'MIDC Dombivli', 'Thane-Belapur Industrial Belt', 'Bhiwandi Logistics Hub'],
    nearbyAreas: ['Mumbai', 'Navi Mumbai', 'Kalyan', 'Dombivli', 'Bhiwandi'],
  },

  'kolhapur': {
    slug: 'kolhapur',
    name: 'Kolhapur',
    type: 'city',
    parent: 'maharashtra',
    state: 'Maharashtra',
    climate: 'Kolhapur has tropical monsoon climate with pleasant weather. The foundry hub requires heat-resistant industrial solutions.',
    industries: ['Foundry', 'Sugar', 'Dairy', 'Engineering', 'Textiles', 'Food Processing'],
    industrialZones: ['MIDC Shiroli', 'MIDC Gokul Shirgaon', 'Five Star MIDC', 'Kagal Industrial Area'],
    nearbyAreas: ['Sangli', 'Satara', 'Ratnagiri', 'Belgaum'],
  },

  'porbandar': {
    slug: 'porbandar',
    name: 'Porbandar',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Porbandar has coastal climate with high humidity and salt air. The port city requires corrosion-resistant building solutions.',
    industries: ['Fishing', 'Marine', 'Cement', 'Chemicals', 'Salt Production', 'Tourism'],
    industrialZones: ['GIDC Porbandar', 'Port Industrial Area', 'Fishing Harbor Zone'],
    nearbyAreas: ['Jamnagar', 'Junagadh', 'Dwarka', 'Veraval'],
  },

  'bhuj': {
    slug: 'bhuj',
    name: 'Bhuj',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Bhuj has hot semi-arid climate with extreme summers. The Kutch region\'s industrial hub serves ports and special economic zones.',
    industries: ['Port & Logistics', 'Wind Energy', 'Salt Production', 'Handicrafts', 'Tourism', 'Mining'],
    industrialZones: ['GIDC Bhuj', 'Kandla SEZ', 'Mundra SEZ', 'Gandhidham Industrial Area'],
    nearbyAreas: ['Gandhidham', 'Kandla', 'Mundra', 'Mandvi', 'Anjar'],
  },

  'gandhidham': {
    slug: 'gandhidham',
    name: 'Gandhidham',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Gandhidham has hot desert climate with extreme summers. The port city requires durable industrial building solutions.',
    industries: ['Port & Logistics', 'Warehousing', 'Trading', 'Salt', 'Wind Energy', 'Food Processing'],
    industrialZones: ['GIDC Gandhidham', 'Kandla Port Zone', 'Free Trade Zone', 'Adipur Industrial Area'],
    nearbyAreas: ['Bhuj', 'Kandla', 'Adipur', 'Anjar', 'Mundra'],
  },

  'valsad': {
    slug: 'valsad',
    name: 'Valsad',
    type: 'city',
    parent: 'gujarat',
    state: 'Gujarat',
    climate: 'Valsad has humid subtropical climate influenced by Arabian Sea. The industrial district requires humidity-resistant solutions.',
    industries: ['Chemicals', 'Pharmaceuticals', 'Textiles', 'Paper', 'Food Processing', 'Engineering'],
    industrialZones: ['GIDC Valsad', 'GIDC Sarigam', 'GIDC Umbergaon', 'Atul Industrial Area'],
    nearbyAreas: ['Vapi', 'Navsari', 'Surat', 'Daman', 'Dharampur'],
  },

  // State Level - Madhya Pradesh
  'madhya-pradesh': {
    slug: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    type: 'state',
    parent: 'india',
    climate: 'Madhya Pradesh has tropical and subtropical climate with hot summers (up to 46°C) and mild winters. Central location makes it logistics hub.',
    industries: ['Automobiles', 'IT & ITES', 'Food Processing', 'Textiles', 'Pharmaceuticals', 'Cement', 'Mining'],
    regulations: ['MPPCB Environmental Clearance', 'Madhya Pradesh Industrial Policy', 'MPIDC Development Norms'],
    nearbyAreas: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain'],
    industrialZones: ['Pithampur Industrial Area', 'Mandideep Industrial Area', 'Indore SEZ', 'Bhopal Industrial Park'],
  },

  'indore': {
    slug: 'indore',
    name: 'Indore',
    type: 'city',
    parent: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    climate: 'Indore has subtropical climate with hot summers and mild winters. The commercial capital requires modern industrial infrastructure.',
    industries: ['Automobiles', 'IT & Software', 'Pharmaceuticals', 'Food Processing', 'Textiles', 'Engineering'],
    industrialZones: ['Pithampur Industrial Area', 'Indore SEZ', 'Crystal IT Park', 'Sanwer Road Industrial Area'],
    nearbyAreas: ['Dewas', 'Ujjain', 'Ratlam', 'Mhow', 'Pithampur'],
  },

  'bhopal': {
    slug: 'bhopal',
    name: 'Bhopal',
    type: 'city',
    parent: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    climate: 'Bhopal has subtropical climate with hot summers and pleasant winters. The state capital requires diverse industrial solutions.',
    industries: ['IT & ITES', 'Heavy Electrical', 'Textiles', 'Food Processing', 'Pharmaceuticals', 'Engineering'],
    industrialZones: ['Mandideep Industrial Area', 'Govindpura Industrial Area', 'Bhopal SEZ', 'BHEL Township'],
    nearbyAreas: ['Vidisha', 'Raisen', 'Sehore', 'Hoshangabad', 'Mandideep'],
  },

  'jabalpur': {
    slug: 'jabalpur',
    name: 'Jabalpur',
    type: 'city',
    parent: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    climate: 'Jabalpur has humid subtropical climate with hot summers. The defense and engineering hub requires quality infrastructure.',
    industries: ['Defense', 'Engineering', 'Mining', 'Food Processing', 'Textiles', 'IT Services'],
    industrialZones: ['MPIDC Jabalpur', 'Ordnance Factory Area', 'Richhai Industrial Zone'],
    nearbyAreas: ['Katni', 'Mandla', 'Narsinghpur', 'Seoni'],
  },

  'gwalior': {
    slug: 'gwalior',
    name: 'Gwalior',
    type: 'city',
    parent: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    climate: 'Gwalior has semi-arid climate with extreme summers and cold winters. The industrial city requires versatile building solutions.',
    industries: ['Engineering', 'Food Processing', 'Textiles', 'Chemicals', 'IT Services', 'Tourism'],
    industrialZones: ['MPIDC Malanpur', 'Sithouli Industrial Area', 'Banmore Industrial Zone'],
    nearbyAreas: ['Morena', 'Shivpuri', 'Datia', 'Bhind'],
  },

  'ujjain': {
    slug: 'ujjain',
    name: 'Ujjain',
    type: 'city',
    parent: 'madhya-pradesh',
    state: 'Madhya Pradesh',
    climate: 'Ujjain has semi-arid climate with hot summers. The textile hub requires temperature-controlled facilities.',
    industries: ['Textiles', 'Food Processing', 'Engineering', 'Pharmaceuticals', 'Tourism'],
    industrialZones: ['MPIDC Ujjain', 'Nagda Industrial Area', 'Vikram Cement Zone'],
    nearbyAreas: ['Indore', 'Dewas', 'Ratlam', 'Nagda'],
  },

  // State Level - Rajasthan
  'rajasthan': {
    slug: 'rajasthan',
    name: 'Rajasthan',
    type: 'state',
    parent: 'india',
    climate: 'Rajasthan has hot desert to semi-arid climate with extreme summers (up to 50°C) and cold winters. Buildings require superior thermal insulation.',
    industries: ['Mining & Minerals', 'Textiles', 'Handicrafts', 'Cement', 'Chemicals', 'Engineering', 'IT & ITES', 'Automobiles'],
    regulations: ['RPCB Environmental Clearance', 'Rajasthan Industrial Policy', 'RIICO Development Norms'],
    nearbyAreas: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer', 'Bhilwara'],
    industrialZones: ['RIICO Jaipur', 'Bhiwadi Industrial Area', 'Neemrana Japanese Zone', 'Sitapura Industrial Area'],
  },

  'jaipur': {
    slug: 'jaipur',
    name: 'Jaipur',
    type: 'city',
    parent: 'rajasthan',
    state: 'Rajasthan',
    climate: 'Jaipur has semi-arid climate with extreme temperatures - hot summers (up to 45°C) and cold winters. Superior thermal insulation is essential.',
    industries: ['Gems & Jewelry', 'Textiles', 'IT & Software', 'Engineering', 'Tourism', 'Handicrafts', 'Automobiles'],
    industrialZones: ['RIICO Sitapura', 'RIICO Mansarovar', 'Mahindra World City', 'Jaipur SEZ'],
    nearbyAreas: ['Ajmer', 'Alwar', 'Sikar', 'Tonk', 'Dausa'],
    uniqueFacts: [
      'Rajasthan\'s capital with extreme 40°C+ temperature swings - superior insulation reduces energy costs by 40%',
      'RIICO Sitapura hosts 500+ manufacturing units including automotive, engineering, and textiles',
      'Gems & jewelry sector requires precise humidity and temperature control for quality assurance',
      'Growing IT/ITES sector in Mahindra World City needs modern, energy-efficient infrastructure',
      'Direct highway connectivity to Delhi (280 km) and Ahmedabad (650 km) ensures smooth logistics',
    ],
    localProjects: [
      'Automotive manufacturing facility - Climate-controlled assembly lines (RIICO Sitapura)',
      'Gems processing unit - Humidity-controlled storage and processing areas (Sitapura)',
      'Textile manufacturing plant - Temperature-controlled weaving units (RIICO Mansarovar)',
      'Cold storage facility - Agricultural produce preservation (Jaipur SEZ)',
    ],
    testimonials: [
      { quote: 'Jaipur summers are brutal. PHOENIXX PUF panels keep our textile facility at comfortable 25°C while cutting electricity bills by 35%.', client: 'Operations Head, Textile Manufacturing, Jaipur' },
    ],
  },

  'jodhpur': {
    slug: 'jodhpur',
    name: 'Jodhpur',
    type: 'city',
    parent: 'rajasthan',
    state: 'Rajasthan',
    climate: 'Jodhpur has hot desert climate with extreme summers (up to 48°C). Buildings require maximum thermal protection and dust resistance.',
    industries: ['Textiles', 'Handicrafts', 'Food Processing', 'Engineering', 'Mining', 'Tourism'],
    industrialZones: ['RIICO Boranada', 'RIICO Basni', 'Jodhpur Industrial Area'],
    nearbyAreas: ['Pali', 'Nagaur', 'Barmer', 'Jaisalmer'],
  },

  'udaipur': {
    slug: 'udaipur',
    name: 'Udaipur',
    type: 'city',
    parent: 'rajasthan',
    state: 'Rajasthan',
    climate: 'Udaipur has semi-arid climate with moderate temperatures compared to other Rajasthan cities. The tourism and mining hub requires quality infrastructure.',
    industries: ['Mining & Minerals', 'Tourism', 'Handicrafts', 'Food Processing', 'Engineering'],
    industrialZones: ['RIICO Udaipur', 'RIICO Debari', 'Zinc Smelter Industrial Zone'],
    nearbyAreas: ['Chittorgarh', 'Rajsamand', 'Dungarpur', 'Banswara'],
  },

  'kota': {
    slug: 'kota',
    name: 'Kota',
    type: 'city',
    parent: 'rajasthan',
    state: 'Rajasthan',
    climate: 'Kota has semi-arid climate with extreme summers. The education and industrial hub requires modern building solutions.',
    industries: ['Education', 'Engineering', 'Chemicals', 'Textiles', 'Power', 'Food Processing'],
    industrialZones: ['RIICO Kota', 'DCM Industrial Area', 'Chambal Fertilizers Zone'],
    nearbyAreas: ['Bundi', 'Baran', 'Jhalawar', 'Sawai Madhopur'],
  },

  'ajmer': {
    slug: 'ajmer',
    name: 'Ajmer',
    type: 'city',
    parent: 'rajasthan',
    state: 'Rajasthan',
    climate: 'Ajmer has semi-arid climate with hot summers and mild winters. The tourist and industrial city requires diverse building solutions.',
    industries: ['Engineering', 'Textiles', 'Food Processing', 'Tourism', 'Handicrafts'],
    industrialZones: ['RIICO Ajmer', 'Makrana Marble Zone', 'Industrial Estate Ajmer'],
    nearbyAreas: ['Jaipur', 'Pushkar', 'Kishangarh', 'Beawar'],
  },

  'bhilwara': {
    slug: 'bhilwara',
    name: 'Bhilwara',
    type: 'city',
    parent: 'rajasthan',
    state: 'Rajasthan',
    climate: 'Bhilwara has semi-arid climate with textile-focused industries. The textile city requires controlled environment facilities.',
    industries: ['Textiles (Largest in Rajasthan)', 'Engineering', 'Mining', 'Food Processing'],
    industrialZones: ['RIICO Bhilwara', 'Textile Park', 'Hamirgarh Industrial Area'],
    nearbyAreas: ['Udaipur', 'Chittorgarh', 'Ajmer', 'Rajsamand'],
  },
};

// Get all product-location combinations
export function getAllProductLocationSlugs(): { product: string; location: string }[] {
  const slugs: { product: string; location: string }[] = [];
  
  Object.keys(products).forEach(productSlug => {
    Object.keys(locations).forEach(locationSlug => {
      slugs.push({
        product: productSlug,
        location: locationSlug,
      });
    });
  });
  
  return slugs;
}

// Get product by slug
export function getProduct(slug: string): ProductData | undefined {
  return products[slug];
}

// Get location by slug
export function getLocation(slug: string): LocationData | undefined {
  return locations[slug];
}

// Generate page title
export function generatePageTitle(product: ProductData, location: LocationData): string {
  return `${product.name} Manufacturer & Supplier in ${location.name} | PHOENIXX SMARTBUILD`;
}

// Generate meta description
export function generateMetaDescription(product: ProductData, location: LocationData): string {
  return `Leading ${product.name} manufacturer in ${location.name}. PHOENIXX SMARTBUILD offers premium insulated panels with ${product.specifications.fireRating} fire rating, ${product.specifications.thermalConductivity} thermal conductivity. Get quote now!`;
}

// Get parent location
export function getParentLocation(location: LocationData): LocationData | undefined {
  if (location.parent) {
    return locations[location.parent];
  }
  return undefined;
}

// Get child locations
export function getChildLocations(locationSlug: string): LocationData[] {
  return Object.values(locations).filter(loc => loc.parent === locationSlug);
}

