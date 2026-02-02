/**
 * SEO Configuration
 * Centralized, optimized SEO metadata for all pages
 * 
 * Guidelines:
 * - Title: 50-60 characters max
 * - Description: 140-160 characters max
 * - Format: Primary Keyword – Value Proposition | Brand
 */

export interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
}

/**
 * Main Pages SEO Configuration
 */
export const pageSEO: Record<string, PageSEO> = {
  // ============================================
  // CORE PAGES
  // ============================================
  home: {
    title: 'PUF Panels & Industrial Infrastructure | PHOENIXX',
    description: 'Leading manufacturer of PUF panels, cleanroom systems, and industrial doors in India. ISO certified. Get a free quote for your project today.',
  },
  aboutUs: {
    title: 'About PHOENIXX – India\'s EPC Infrastructure Partner',
    description: 'PHOENIXX delivers smart EPC solutions: PEB, cold storage, cleanrooms. 10+ years experience. Trusted by 500+ clients. Contact us today.',
  },
  products: {
    title: 'Industrial Products – Panels, Doors & Cleanrooms',
    description: 'Explore PUF panels, fire-rated doors, and cleanroom solutions. Engineered for performance, certified for quality. Request a quote now.',
  },
  contactUs: {
    title: 'Contact PHOENIXX – Get Expert Consultation',
    description: 'Reach PHOENIXX for industrial infrastructure needs. Request quotes, schedule site visits. Based in Ahmedabad, serving all India.',
  },
  getAQuote: {
    title: 'Get a Quote – Free Project Consultation',
    description: 'Request a free quote for PUF panels, PEB, cold storage, or cleanroom projects. Quick response within 24 hours. Contact PHOENIXX today.',
  },
  
  // ============================================
  // SOLUTIONS PAGES
  // ============================================
  solutions: {
    title: 'EPC Solutions – PEB, Cold Storage & Cleanrooms',
    description: 'Turnkey EPC solutions: Pre-Engineered Buildings, cold storage, cleanrooms, ceiling systems. Complete project delivery. Get your quote.',
  },
  solutionsPEB: {
    title: 'Pre-Engineered Buildings (PEB) in India',
    description: 'PEB construction: 30-50% faster, cost-effective steel structures for warehouses, factories. ISO certified. Get PEB quote today.',
  },
  solutionsColdStorage: {
    title: 'Cold Storage Construction – Turnkey Solutions',
    description: 'Complete cold storage construction: -40°C to +15°C. Cold rooms, freezers, ripening chambers. Energy-efficient design. Get quote.',
  },
  solutionsWalkableCeiling: {
    title: 'Walkable Ceiling Systems for Industries',
    description: 'Heavy-duty walkable ceilings for cleanrooms and industrial facilities. Load capacity up to 200 kg/m². Request specifications.',
  },
  solutionsNonWalkableCeiling: {
    title: 'Non-Walkable Ceiling Systems | PHOENIXX',
    description: 'Lightweight ceiling systems for offices, commercial buildings, and cleanrooms. Cost-effective, aesthetic finishes. Get a quote.',
  },
  solutionsPartition: {
    title: 'Partition Solutions – Modular Wall Systems',
    description: 'Modular partition systems for offices, cleanrooms, and industrial spaces. Flexible, quick installation. Contact for quote.',
  },
  solutionsPrefabHouse: {
    title: 'Prefab Houses – Quick Assembly Structures',
    description: 'Prefabricated housing solutions for rapid construction. Durable, cost-effective, customizable. Get prefab house quote.',
  },

  // ============================================
  // PRODUCTS PAGES
  // ============================================
  productsSandwichPanels: {
    title: 'Sandwich PUF Panels – Insulated Wall & Roof',
    description: 'High-performance PUF sandwich panels for roofing and walls. Thermal insulation, fire-rated options. Get panel pricing today.',
  },
  productsDoors: {
    title: 'Industrial Doors – Fire Rated & Cleanroom',
    description: 'Fire-rated doors, cleanroom doors, and industrial specialty doors. IS/ISO compliant. Request door specifications and pricing.',
  },
  productsCleanroomSolutions: {
    title: 'Cleanroom Solutions – GMP Compliant Systems',
    description: 'Complete cleanroom infrastructure: partitions, doors, ceilings, flooring. ISO Class 5-8. Get cleanroom project quote.',
  },

  // ============================================
  // INDUSTRIES PAGES
  // ============================================
  industries: {
    title: 'Industries Served – Pharma, Food & More',
    description: 'Industry-specific infrastructure: pharma cleanrooms, food processing, dairy, cold chain, automotive. Compliance assured.',
  },
  industryPharma: {
    title: 'Pharmaceutical Cleanrooms – GMP Compliant',
    description: 'GMP/FDA compliant cleanrooms for pharma manufacturing. ISO Class 5-8 environments. Trusted by leading pharma companies.',
  },
  industryFood: {
    title: 'Food Processing Infrastructure Solutions',
    description: 'FSSAI compliant facilities for food processing. Hygienic panels, cold rooms, cleanable surfaces. Get industry quote.',
  },
  industryDairy: {
    title: 'Dairy Industry Solutions – Processing & Storage',
    description: 'Dairy processing plants and cold storage solutions. Temperature-controlled, HACCP compliant. Serving top dairy brands.',
  },
  industryColdChain: {
    title: 'Cold Chain Infrastructure – End to End',
    description: 'Complete cold chain solutions: storage, transport, distribution. Temperature mapping, energy-efficient design.',
  },
  industryAutomobile: {
    title: 'Automobile Industry Infrastructure | PHOENIXX',
    description: 'Industrial buildings and controlled environments for automotive manufacturing. Paint booths, assembly facilities.',
  },
  industryHospitality: {
    title: 'Hospitality Infrastructure Solutions',
    description: 'Commercial kitchens, cold rooms, and building solutions for hotels and restaurants. Quality, efficiency, compliance.',
  },
  industryPrecisionEngineering: {
    title: 'Precision Engineering Facilities | PHOENIXX',
    description: 'Controlled environments for precision manufacturing. ESD floors, clean workspaces, climate control solutions.',
  },
  industryAgriProcessing: {
    title: 'Agri Processing – Storage & Infrastructure',
    description: 'Agricultural processing facilities: grain storage, cold rooms, pack houses. Temperature-controlled solutions.',
  },

  // ============================================
  // RESOURCES PAGES
  // ============================================
  resources: {
    title: 'Resources – Guides, Gallery & Downloads',
    description: 'Access technical resources: project gallery, brochures, technical sheets, FAQs. Download product specifications.',
  },
  resourcesBlogs: {
    title: 'Blog – Industry Insights & Technical Guides',
    description: 'Expert articles on PUF panels, cleanrooms, cold storage, PEB construction. Stay updated with industry trends.',
  },
  resourcesProjectGallery: {
    title: 'Project Gallery – Completed Projects',
    description: 'View our completed projects: cold storage, cleanrooms, PEB, industrial facilities. See our work quality firsthand.',
  },
  resourcesTechnicalSheet: {
    title: 'Technical Specifications – Product Data',
    description: 'Download technical specifications for PUF panels, doors, cleanroom systems. Detailed product data sheets available.',
  },
  resourcesBrochure: {
    title: 'Product Brochures – Download Catalog',
    description: 'Download PHOENIXX product brochures and company catalog. Complete product range specifications and capabilities.',
  },
  resourcesFAQ: {
    title: 'FAQ – Frequently Asked Questions',
    description: 'Find answers to common questions about PUF panels, cleanrooms, PEB, cold storage. Expert answers to your queries.',
  },

  // ============================================
  // COMPANY PAGES
  // ============================================
  career: {
    title: 'Careers at PHOENIXX – Join Our Team',
    description: 'Build your career at PHOENIXX SmartBuild. Openings for engineers, project managers, sales. Growth opportunities await.',
  },
  becomePartner: {
    title: 'Become a Partner – Channel Partnership',
    description: 'Partner with PHOENIXX for PUF panels and industrial products. Dealer and distributor opportunities across India.',
  },
  vendorRegistration: {
    title: 'Vendor Registration – Supplier Onboarding',
    description: 'Register as a vendor with PHOENIXX. Supplier opportunities for raw materials, components, and services.',
  },
  clientele: {
    title: 'Our Clients – Trusted by Industry Leaders',
    description: 'PHOENIXX serves 500+ clients: Coca-Cola, Amul, Torrent Pharma, Cargill, and more. See our client portfolio.',
  },
  shop: {
    title: 'Shop – Buy PUF Panels Online',
    description: 'Order PUF panels online with transparent pricing. Calculate project costs instantly. Fast delivery across India.',
  },

  // ============================================
  // LEGAL PAGES
  // ============================================
  privacyPolicy: {
    title: 'Privacy Policy | PHOENIXX SmartBuild',
    description: 'Read our privacy policy. Learn how PHOENIXX protects your personal data and handles information securely.',
  },
  returnPolicy: {
    title: 'Return Policy | PHOENIXX SmartBuild',
    description: 'Understand our return and refund policy for products. Customer satisfaction guaranteed with clear guidelines.',
  },
  businessTerms: {
    title: 'Business Terms & Conditions | PHOENIXX',
    description: 'Review business terms and conditions for PHOENIXX products and services. Transparent policies for all transactions.',
  },
  sitemapPage: {
    title: 'Sitemap | PHOENIXX SmartBuild',
    description: 'Navigate all pages on PHOENIXX SmartBuild. Find products, solutions, industries, and resources easily.',
  },
  thankYou: {
    title: 'Thank You | PHOENIXX SmartBuild',
    description: 'Thank you for contacting PHOENIXX. Our team will respond within 24 hours. Explore more of our solutions.',
  },
};

/**
 * Location-based Pages SEO Configuration
 * Format: PUF Panel Manufacturer in {City} | PHOENIXX (under 60 chars)
 */
export const locationSEO: Record<string, PageSEO> = {
  mumbai: {
    title: 'PUF Panel Manufacturer in Mumbai | PHOENIXX',
    description: 'Leading PUF panel manufacturer in Mumbai. Quality insulated panels for cold storage, warehouses & industries. Get free quote!',
    keywords: ['PUF panel Mumbai', 'PUF manufacturer Mumbai', 'insulated panels Mumbai'],
  },
  pune: {
    title: 'PUF Panel Manufacturer in Pune | PHOENIXX',
    description: 'Top PUF panel supplier in Pune, Maharashtra. Industrial panels for warehouses, cold storage. Competitive pricing. Get quote!',
    keywords: ['PUF panel Pune', 'PUF manufacturer Pune', 'insulated panels Pune'],
  },
  nashik: {
    title: 'PUF Panel Manufacturer in Nashik | PHOENIXX',
    description: 'Quality PUF panels in Nashik for industrial and cold storage applications. Fast delivery to Nashik MIDC. Contact now!',
    keywords: ['PUF panel Nashik', 'PUF manufacturer Nashik', 'insulated panels Nashik'],
  },
  nagpur: {
    title: 'PUF Panel Manufacturer in Nagpur | PHOENIXX',
    description: 'PUF panel supplier serving Nagpur and Vidarbha. Industrial insulated panels for all applications. Get a free quote today!',
    keywords: ['PUF panel Nagpur', 'PUF manufacturer Nagpur', 'insulated panels Nagpur'],
  },
  thane: {
    title: 'PUF Panel Manufacturer in Thane | PHOENIXX',
    description: 'Premium PUF panels in Thane for cold storage and industrial use. Serving Thane-Belapur industrial belt. Request quote!',
    keywords: ['PUF panel Thane', 'PUF manufacturer Thane', 'insulated panels Thane'],
  },
  surat: {
    title: 'PUF Panel Manufacturer in Surat | PHOENIXX',
    description: 'Leading PUF panel manufacturer in Surat, Gujarat. High-quality insulated panels for industries. Get competitive pricing!',
    keywords: ['PUF panel Surat', 'PUF manufacturer Surat', 'insulated panels Surat'],
  },
  vadodara: {
    title: 'PUF Panel Manufacturer in Vadodara | PHOENIXX',
    description: 'Quality PUF panels in Vadodara for industrial and commercial projects. Serving Vadodara GIDC. Contact for quote!',
    keywords: ['PUF panel Vadodara', 'PUF manufacturer Vadodara', 'insulated panels Vadodara'],
  },
  rajkot: {
    title: 'PUF Panel Manufacturer in Rajkot | PHOENIXX',
    description: 'Top PUF panel supplier in Rajkot, Gujarat. Industrial insulated panels for warehouses and cold storage. Get quote!',
    keywords: ['PUF panel Rajkot', 'PUF manufacturer Rajkot', 'insulated panels Rajkot'],
  },
  jamnagar: {
    title: 'PUF Panel Manufacturer in Jamnagar | PHOENIXX',
    description: 'PUF panels for Jamnagar industries. Quality insulated panels for industrial and cold storage. Request pricing today!',
    keywords: ['PUF panel Jamnagar', 'PUF manufacturer Jamnagar', 'insulated panels Jamnagar'],
  },
  vapi: {
    title: 'PUF Panel Manufacturer in Vapi | PHOENIXX',
    description: 'Premium PUF panels in Vapi for chemical and industrial applications. Serving Vapi GIDC industries. Get quote!',
    keywords: ['PUF panel Vapi', 'PUF manufacturer Vapi', 'insulated panels Vapi'],
  },
  kolhapur: {
    title: 'PUF Panel Manufacturer in Kolhapur | PHOENIXX',
    description: 'Quality PUF panels in Kolhapur for industrial and cold storage projects. Fast delivery to Kolhapur region. Contact us!',
    keywords: ['PUF panel Kolhapur', 'PUF manufacturer Kolhapur', 'insulated panels Kolhapur'],
  },
  dholera: {
    title: 'PUF Panel Manufacturer in Dholera | PHOENIXX',
    description: 'PUF panels for Dholera SIR industrial projects. Premium insulated panels for modern infrastructure. Get quote!',
    keywords: ['PUF panel Dholera', 'PUF manufacturer Dholera', 'insulated panels Dholera'],
  },
  chhatrapatiSambhajinagar: {
    title: 'PUF Panels in Chhatrapati Sambhajinagar',
    description: 'Leading PUF panel manufacturer in Chhatrapati Sambhajinagar. Quality panels for industries and cold storage. Get quote!',
    keywords: ['PUF panel Aurangabad', 'PUF manufacturer Sambhajinagar', 'insulated panels'],
  },
};

/**
 * Keyword-focused Landing Pages SEO
 * For pages targeting specific keywords like "best", "top", "leading"
 */
export const keywordPageSEO: Record<string, PageSEO> = {
  bestPufPanelManufacturer: {
    title: 'Best PUF Panel Manufacturer in India | PHOENIXX',
    description: 'Choose India\'s best PUF panel manufacturer. ISO certified, 10+ years experience, 500+ clients. Premium quality guaranteed.',
  },
  topPufPanelManufacturers: {
    title: 'Top PUF Panel Manufacturers in India',
    description: 'PHOENIXX ranks among top PUF panel manufacturers in India. Quality products, competitive pricing, nationwide delivery.',
  },
  leadingPufPanelCompany: {
    title: 'Leading PUF Panel Company in India | PHOENIXX',
    description: 'India\'s leading PUF panel company for industrial infrastructure. Complete panel solutions for all applications.',
  },
  pufPanelCompanyIndia: {
    title: 'PUF Panel Company in India – PHOENIXX',
    description: 'Trusted PUF panel company serving industries across India. Quality insulated panels for diverse applications.',
  },
  pufPanelSuppliersIndia: {
    title: 'PUF Panel Suppliers in India | PHOENIXX',
    description: 'Reliable PUF panel suppliers in India. Wide range of insulated panels for cold storage, cleanrooms, warehouses.',
  },
  pufPanelsManufacturerIndia: {
    title: 'PUF Panels Manufacturer India | PHOENIXX',
    description: 'Premier PUF panels manufacturer in India. High-quality sandwich panels for roofing, walls, cold storage applications.',
  },
  sandwichPufPanelManufacturer: {
    title: 'Sandwich PUF Panel Manufacturer in India',
    description: 'Top sandwich PUF panel manufacturer in India. Premium insulated panels for industrial and commercial buildings.',
  },
  insulatedPufPanelManufacturer: {
    title: 'Insulated PUF Panel Manufacturer in India',
    description: 'Quality insulated PUF panels for thermal efficiency. Wall, roof, and cold storage panels. ISO certified manufacturer.',
  },
  industrialPufPanelManufacturer: {
    title: 'Industrial PUF Panel Manufacturer in India',
    description: 'Industrial-grade PUF panels for factories, warehouses, cold storage. Durable, energy-efficient solutions.',
  },
  premiumPufPanelManufacturer: {
    title: 'Premium PUF Panel Manufacturer in India',
    description: 'Premium quality PUF panels with superior insulation. Fire-rated options available. Request premium panel quote.',
  },
};

/**
 * Helper function to get SEO config for a page
 */
export function getSEOConfig(pageKey: string): PageSEO | undefined {
  return pageSEO[pageKey] || locationSEO[pageKey] || keywordPageSEO[pageKey];
}

/**
 * Helper to validate title length
 */
export function validateTitleLength(title: string): boolean {
  return title.length <= 60;
}

/**
 * Helper to validate description length
 */
export function validateDescriptionLength(description: string): boolean {
  return description.length >= 140 && description.length <= 160;
}
