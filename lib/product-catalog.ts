/**
 * Flat, searchable index of every product surface on the site.
 *
 * The category pages each own their own presentation data; this is the
 * cross-category view the product finder and any future search need, so a new
 * product has one place to be registered rather than being reachable only from
 * whichever category template happens to list it.
 */

export type ProductFeature =
  | 'Fire-Rated'
  | 'Energy-Efficient'
  | 'Acoustic'
  | 'Hygienic'
  | 'Custom Sizes';

export type ProductIndustry =
  | 'Pharma'
  | 'Food Processing'
  | 'Dairy'
  | 'Healthcare'
  | 'Manufacturing'
  | 'Logistics';

export type ProductCategory =
  | 'Sandwich Panels'
  | 'Doors'
  | 'Cold Chain Solutions'
  | 'Cleanroom Products';

export interface CatalogProduct {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  href: string;
  keywords: string[];
  features: ProductFeature[];
  industries: ProductIndustry[];
}

export const productCatalog: CatalogProduct[] = [
  {
    slug: 'pir-panel',
    name: 'PIR Sandwich Panel',
    category: 'Sandwich Panels',
    description:
      'Polyisocyanurate core with a B-s1,d0 reaction-to-fire classification, for high-safety applications.',
    href: '/products/sandwich-panels/pir-panel',
    keywords: ['pir panel', 'polyisocyanurate', 'fire rated insulated panel', '0.022 w/mk'],
    features: ['Fire-Rated', 'Energy-Efficient', 'Custom Sizes'],
    industries: ['Pharma', 'Food Processing', 'Manufacturing'],
  },
  {
    slug: 'sandwich-puf-panel',
    name: 'Sandwich PUF Panel',
    category: 'Sandwich Panels',
    description:
      'Polyurethane foam core for general industrial and commercial insulation, at 0.024 W/mK.',
    href: '/products/sandwich-panels/sandwich-puf-panel',
    keywords: ['puf panel', 'sandwich panel', 'polyurethane panel', 'wall panel'],
    features: ['Energy-Efficient', 'Custom Sizes'],
    industries: ['Manufacturing', 'Logistics', 'Food Processing'],
  },
  {
    slug: 'rockwool-panel',
    name: 'Rockwool Panel',
    category: 'Sandwich Panels',
    description:
      'Non-combustible mineral wool core for fire-critical partitions and acoustic separation.',
    href: '/products/sandwich-panels/rockwool-panel',
    keywords: ['rockwool panel', 'mineral wool', 'non combustible', 'acoustic panel'],
    features: ['Fire-Rated', 'Acoustic', 'Custom Sizes'],
    industries: ['Manufacturing', 'Pharma', 'Healthcare'],
  },
  {
    slug: 'roofing-puf-panel',
    name: 'Roofing PUF Panel',
    category: 'Sandwich Panels',
    description:
      'Profiled insulated roofing panel with a drainage-optimised trapezoidal outer sheet.',
    href: '/products/sandwich-panels/roofing-puf-panel',
    keywords: ['roofing panel', 'insulated roof sheet', 'shed roofing', 'trapezoidal'],
    features: ['Energy-Efficient', 'Custom Sizes'],
    industries: ['Manufacturing', 'Logistics', 'Dairy'],
  },
  {
    slug: 'wall-ceiling-panel',
    name: 'Wall & Ceiling Panel',
    category: 'Sandwich Panels',
    description: 'Smooth-finish panels for interior walls and ceilings in GMP environments.',
    href: '/products/sandwich-panels/wall-ceiling-panel',
    keywords: ['wall panel', 'ceiling panel', 'gmp panel', 'false ceiling'],
    features: ['Hygienic', 'Energy-Efficient', 'Custom Sizes'],
    industries: ['Pharma', 'Healthcare', 'Food Processing'],
  },
  {
    slug: 'cleanroom-door',
    name: 'Cleanroom Door',
    category: 'Doors',
    description: 'Flush doors with airtight sealing for contamination-controlled environments.',
    href: '/products/doors/cleanroom-door',
    keywords: ['cleanroom door', 'flush door', 'airtight door', 'iso class door'],
    features: ['Hygienic', 'Custom Sizes'],
    industries: ['Pharma', 'Healthcare', 'Food Processing'],
  },
  {
    slug: 'fire-door-emergency-exit',
    name: 'Fire Door – Emergency Exit',
    category: 'Doors',
    description: 'Fire-rated doors with panic hardware, certified for 30 to 120 minutes.',
    href: '/products/doors/fire-door-emergency-exit',
    keywords: ['fire door', 'emergency exit', 'panic bar', 'fire escape'],
    features: ['Fire-Rated', 'Custom Sizes'],
    industries: ['Manufacturing', 'Pharma', 'Healthcare', 'Logistics'],
  },
  {
    slug: 'fire-rated-multipurpose-door',
    name: 'Fire Rated Multipurpose Door',
    category: 'Doors',
    description: 'Fire-rated industrial doors for plant rooms, corridors, and service areas.',
    href: '/products/doors/fire-rated-multipurpose-door',
    keywords: ['fire rated door', 'metal door', 'industrial door'],
    features: ['Fire-Rated', 'Acoustic', 'Custom Sizes'],
    industries: ['Manufacturing', 'Logistics'],
  },
  {
    slug: 'cold-storage-construction',
    name: 'Cold Storage Construction',
    category: 'Cold Chain Solutions',
    description:
      'Turnkey cold rooms and freezers, from high-density panel envelope through to refrigeration.',
    href: '/solutions/cold-storage-construction',
    keywords: ['cold storage', 'cold room', 'freezer room', 'blast freezer', 'ripening chamber'],
    features: ['Energy-Efficient', 'Hygienic', 'Custom Sizes'],
    industries: ['Food Processing', 'Dairy', 'Pharma', 'Logistics'],
  },
  {
    slug: 'cold-storage-door',
    name: 'Cold Storage Door',
    category: 'Cold Chain Solutions',
    description: 'Insulated sliding and hinged doors rated for sub-zero rooms.',
    href: '/shop/cold-storage-door',
    keywords: ['cold storage door', 'freezer door', 'insulated sliding door'],
    features: ['Energy-Efficient', 'Hygienic', 'Custom Sizes'],
    industries: ['Food Processing', 'Dairy', 'Logistics'],
  },
  {
    slug: 'cleanroom-partition',
    name: 'Cleanroom Partition',
    category: 'Cleanroom Products',
    description: 'Modular flush wall systems for controlled environments.',
    href: '/products/cleanroom-solutions/cleanroom-partition',
    keywords: ['cleanroom partition', 'modular wall', 'gmp partition'],
    features: ['Hygienic', 'Custom Sizes'],
    industries: ['Pharma', 'Healthcare', 'Food Processing'],
  },
  {
    slug: 'cleanroom-false-ceiling',
    name: 'Cleanroom False Ceiling',
    category: 'Cleanroom Products',
    description: 'Walkable and non-walkable ceiling grids with HEPA integration.',
    href: '/products/cleanroom-solutions/cleanroom-false-ceiling',
    keywords: ['false ceiling', 'walkable ceiling', 'hepa ceiling', 'cleanroom ceiling'],
    features: ['Hygienic', 'Custom Sizes'],
    industries: ['Pharma', 'Healthcare'],
  },
  {
    slug: 'cleanroom-doors',
    name: 'Cleanroom Doors',
    category: 'Cleanroom Products',
    description: 'Hermetic and automation-ready doors for ISO 5 to ISO 8 rooms.',
    href: '/products/cleanroom-solutions/cleanroom-doors',
    keywords: ['hermetic door', 'cleanroom door', 'automatic door', 'iso 5'],
    features: ['Hygienic', 'Custom Sizes'],
    industries: ['Pharma', 'Healthcare'],
  },
  {
    slug: 'cleanroom-flooring',
    name: 'Cleanroom Flooring',
    category: 'Cleanroom Products',
    description: 'Seamless epoxy, PU, and ESD flooring systems.',
    href: '/products/cleanroom-solutions/cleanroom-flooring',
    keywords: ['cleanroom flooring', 'epoxy flooring', 'pu flooring', 'esd flooring'],
    features: ['Hygienic', 'Custom Sizes'],
    industries: ['Pharma', 'Healthcare', 'Manufacturing'],
  },
];

export const productCategories: ProductCategory[] = [
  'Sandwich Panels',
  'Doors',
  'Cold Chain Solutions',
  'Cleanroom Products',
];

export const productFeatures: ProductFeature[] = [
  'Fire-Rated',
  'Energy-Efficient',
  'Acoustic',
  'Hygienic',
  'Custom Sizes',
];

export const productIndustries: ProductIndustry[] = [
  'Pharma',
  'Food Processing',
  'Dairy',
  'Healthcare',
  'Manufacturing',
  'Logistics',
];
