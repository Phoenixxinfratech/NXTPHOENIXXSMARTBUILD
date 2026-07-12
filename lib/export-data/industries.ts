import type { ExportIndustry } from './types';

export const exportIndustries: Record<string, ExportIndustry> = {
  'cold-storage': {
    slug: 'cold-storage',
    name: 'Cold Storage & Cold Chain',
    metaTitle: 'Cold Storage Panel Export to Africa | PUF & PIR Cold Room Panels',
    metaDescription:
      'PHOENIXX SMARTBUILD exports insulated cold storage panels to Africa — cold rooms, blast freezers, and temperature-controlled warehouses with engineering support from India.',
    definition:
      'Cold storage and cold chain facilities require sandwich panels with high R-value, vapour-tight joints, and hygienic surfaces to maintain stable temperatures from +15°C to -25°C while minimising refrigeration energy consumption.',
    panelFit:
      'PUF panels (80–150mm) for standard cold rooms; PIR panels where enhanced fire performance is required; anti-condensation fleece on roofing in humid coastal zones.',
    applications: [
      'Horticulture and perishable export cold rooms',
      'Dairy and meat blast freezers',
      'Pharmaceutical vaccine storage',
      'Fisheries and seafood processing',
      'E-commerce fulfilment cold hubs',
    ],
    buyerRoles: ['Cold chain developers', 'EPC contractors', 'Food processors', 'Pharma logistics managers', 'Warehouse developers'],
  },
  'food-processing': {
    slug: 'food-processing',
    name: 'Food Processing',
    metaTitle: 'Food Processing Building Panels Export to Africa | Hygienic Insulated Panels',
    metaDescription:
      'Export hygienic sandwich panels for food processing plants in Africa — dairy, beverage, meat, and FSSAI-style compliant facilities from PHOENIXX SMARTBUILD India.',
    definition:
      'Food processing facilities demand flush, cleanable panel surfaces, controlled temperatures, and partition systems that support HACCP-style hygiene protocols and rapid construction.',
    panelFit:
      'Food-safe coated PUF/PIR wall panels with tongue-and-groove joints; 50–80mm for processing halls; dedicated cold room thicknesses for storage zones.',
    applications: [
      'Dairy and beverage plants',
      'Meat and poultry processing',
      'Bakery and confectionery units',
      'Packaging and bottling halls',
      'Raw material storage annexes',
    ],
    buyerRoles: ['Food plant owners', 'Turnkey contractors', 'Equipment suppliers', 'QA/HACCP consultants'],
  },
  pharmaceuticals: {
    slug: 'pharmaceuticals',
    name: 'Pharmaceuticals & Healthcare',
    metaTitle: 'Pharma Cleanroom Panel Export to Africa | GMP-Ready Insulated Systems',
    metaDescription:
      'Export cleanroom and pharma-grade sandwich panels to Africa for tablet manufacturing, packaging, and controlled storage — PHOENIXX SMARTBUILD from India.',
    definition:
      'Pharmaceutical and healthcare buildings require controlled environments with smooth, non-porous surfaces, predictable thermal performance, and partition systems compatible with cleanroom classifications.',
    panelFit:
      'Cleanroom partitions, PIR panels for enhanced fire performance, Rockwool where A1 fire rating is mandated; integrated door and window systems.',
    applications: [
      'Tablet and formulation areas',
      'Packaging and secondary processing',
      'Vaccine and API storage',
      'Hospital ancillary buildings',
      'R&D and QC laboratories',
    ],
    buyerRoles: ['Pharma plant heads', 'Cleanroom consultants', 'EPC pharma contractors', 'Hospital developers'],
  },
  'warehousing-logistics': {
    slug: 'warehousing-logistics',
    name: 'Warehousing & Logistics',
    metaTitle: 'Warehouse Insulated Panel Export to Africa | PEB & Logistics Hubs',
    metaDescription:
      'Export PUF roofing and wall panels for warehouses, distribution centres, and logistics hubs across Africa — fast-build insulated envelopes from PHOENIXX SMARTBUILD.',
    definition:
      'Modern warehouses and logistics hubs need large-span insulated envelopes that reduce HVAC loads, accelerate construction, and support temperature-sensitive inventory where required.',
    panelFit:
      'Roofing PUF panels (80–100mm) for heat reduction; wall panels for conditioned zones; PEB-compatible profiles for rapid erection.',
    applications: [
      'E-commerce fulfilment centres',
      'Port-adjacent logistics warehouses',
      'Bonded and free-zone storage',
      'Temperature-controlled distribution',
      'Cross-dock and trans-shipment hubs',
    ],
    buyerRoles: ['Logistics developers', '3PL operators', 'Industrial real estate investors', 'Port authority contractors'],
  },
  mining: {
    slug: 'mining',
    name: 'Mining & Resources',
    metaTitle: 'Mining Camp & Industrial Panel Export to Africa | Fire-Rated Systems',
    metaDescription:
      'Export insulated panels for mining camps, processing plants, and resource-sector infrastructure in Africa — PIR, Rockwool, and PUF systems from PHOENIXX SMARTBUILD.',
    definition:
      'Mining and extractive industries need durable, rapidly deployable buildings — accommodation, processing plants, and support facilities — often with elevated fire-safety requirements.',
    panelFit:
      'Rockwool panels (A1/A2) and PIR for process areas; standard PUF for accommodation and warehouses; prefab modular compatibility.',
    applications: [
      'Mining accommodation camps',
      'Ore processing plant envelopes',
      'Workshop and maintenance buildings',
      'Explosives and consumables storage (fire-rated)',
      'Site offices and welfare facilities',
    ],
    buyerRoles: ['Mining EPC contractors', 'Camp facility managers', 'Resource company project teams', 'Remote site developers'],
  },
  'agri-processing': {
    slug: 'agri-processing',
    name: 'Agriculture & Agro-Processing',
    metaTitle: 'Agro-Processing Panel Export to Africa | Insulated Processing Buildings',
    metaDescription:
      'Export sandwich panels for agriculture and agro-processing in Africa — coffee, cocoa, cashew, horticulture, and grain storage facilities from India.',
    definition:
      'Agro-processing units combine dry storage, washing/processing halls, and often cold chain segments — requiring flexible insulated building systems that suit rural and peri-urban industrial zones.',
    panelFit:
      '50–80mm PUF for processing halls; thicker panels for cold storage zones; corrosion-resistant coatings in humid regions.',
    applications: [
      'Coffee and tea processing',
      'Cocoa and cashew processing',
      'Horticulture pack-houses',
      'Grain and seed storage',
      'Cotton and textile preprocessing',
    ],
    buyerRoles: ['Agro-industrial investors', 'Cooperative processors', 'Export crop traders', 'Rural industrial developers'],
  },
  'dairy-cold-chain': {
    slug: 'dairy-cold-chain',
    name: 'Dairy & Cold Chain',
    metaTitle: 'Dairy Cold Chain Panel Export to Africa | Insulated Dairy Plants',
    metaDescription:
      'Export insulated panels for dairy plants, milk chilling centres, and cold chain infrastructure across Africa — PHOENIXX SMARTBUILD engineering from India.',
    definition:
      'Dairy operations require temperature-controlled processing, chilling, and cold storage with hygienic surfaces and reliable thermal performance across daily production cycles.',
    panelFit:
      'Hygienic wall panels for processing; 80–120mm cold room panels for chill stores; PIR where fire regulations are strict.',
    applications: [
      'Milk chilling centres',
      'Cheese and yoghurt processing',
      'Ice cream production facilities',
      'Bulk cold storage for cooperatives',
      'Last-mile cold hubs near cities',
    ],
    buyerRoles: ['Dairy cooperatives', 'FMCG dairy brands', 'Rural development agencies', 'Cold chain integrators'],
  },
  'oil-gas': {
    slug: 'oil-gas',
    name: 'Oil, Gas & Energy',
    metaTitle: 'Oil & Gas Facility Panel Export to Africa | Fire-Rated Insulated Panels',
    metaDescription:
      'Export fire-rated PIR and Rockwool sandwich panels for oil, gas, and energy-sector facilities in Africa — HSE-conscious insulated building systems from PHOENIXX SMARTBUILD.',
    definition:
      'Hydrocarbon and energy projects demand fire-rated building envelopes, technical documentation for HSE compliance, and panels suited to coastal and high-temperature environments.',
    panelFit:
      'PIR panels (B-s1,d0) and Rockwool (A1/A2) for process-adjacent buildings; MSDS and fire test certificates bundled with export documentation.',
    applications: [
      'Support facilities for upstream projects',
      'LNG and gas processing ancillaries',
      'Maintenance workshops',
      'Control rooms and substations',
      'Prefab workforce accommodation',
    ],
    buyerRoles: ['Energy EPC contractors', 'HSE managers', 'Oil & gas service companies', 'Industrial park developers'],
  },
};

export const ALL_INDUSTRY_SLUGS = Object.keys(exportIndustries);
