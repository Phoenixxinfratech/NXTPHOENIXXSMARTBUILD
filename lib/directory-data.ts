import { products, locations } from '@/lib/landing-page-data';
import {
  geoCities,
  geoPageTypes,
  geoKeywordTypes,
  coreInternalLinks,
} from '@/lib/rajasthan-geo-data';
import { getAllBlogSlugs } from '@/lib/blog-data';

export interface DirectoryLink {
  href: string;
  label: string;
}

export interface DirectorySection {
  id: string;
  heading: string;
  description: string;
  links: DirectoryLink[];
}

function slugToLabel(slug: string): string {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function buildAllSections(): DirectorySection[] {
  const sections: DirectorySection[] = [];

  // ── Core Pages ──
  sections.push({
    id: 'core',
    heading: 'Main Pages',
    description: 'Primary navigation pages of Phoenixx Smart Build.',
    links: [
      { href: '/', label: 'Home' },
      { href: '/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' },
      { href: '/get-a-quote', label: 'Get a Quote' },
      { href: '/clientele', label: 'Clientele' },
      { href: '/career', label: 'Career' },
      { href: '/become-partner', label: 'Become Partner' },
      { href: '/vendor-registration', label: 'Vendor Registration' },
      { href: '/sitemap-page', label: 'Sitemap' },
    ],
  });

  // ── Products ──
  sections.push({
    id: 'products',
    heading: 'Products',
    description: 'Sandwich panels, industrial doors, and cleanroom solutions from Phoenixx Smart Build.',
    links: [
      { href: '/products', label: 'All Products' },
      { href: '/products/sandwich-panels', label: 'Sandwich Panels' },
      { href: '/products/sandwich-panels/sandwich-puf-panel', label: 'Sandwich PUF Panel' },
      { href: '/products/sandwich-panels/roofing-puf-panel', label: 'Roofing PUF Panel' },
      { href: '/products/sandwich-panels/pir-panel', label: 'PIR Panel' },
      { href: '/products/sandwich-panels/rockwool-panel', label: 'Rockwool Panel' },
      { href: '/products/sandwich-panels/wall-ceiling-panel', label: 'Wall & Ceiling Panel' },
      { href: '/products/doors', label: 'Doors' },
      { href: '/products/doors/cleanroom-door', label: 'Cleanroom Door' },
      { href: '/products/doors/fire-door-emergency-exit', label: 'Fire Door Emergency Exit' },
      { href: '/products/doors/fire-rated-multipurpose-door', label: 'Fire Rated Multipurpose Door' },
      { href: '/products/cleanroom-solutions', label: 'Cleanroom Solutions' },
      { href: '/products/cleanroom-solutions/cleanroom-partition', label: 'Cleanroom Partition' },
      { href: '/products/cleanroom-solutions/cleanroom-doors', label: 'Cleanroom Doors' },
      { href: '/products/cleanroom-solutions/cleanroom-false-ceiling', label: 'Cleanroom False Ceiling' },
      { href: '/products/cleanroom-solutions/cleanroom-flooring', label: 'Cleanroom Flooring' },
    ],
  });

  // ── Solutions ──
  sections.push({
    id: 'solutions',
    heading: 'Solutions',
    description: 'Turnkey construction and building solutions for industrial facilities.',
    links: [
      { href: '/solutions', label: 'All Solutions' },
      { href: '/solutions/peb', label: 'PEB (Pre-Engineered Buildings)' },
      { href: '/solutions/cold-storage-construction', label: 'Cold Storage Construction' },
      { href: '/solutions/walkable-ceiling-systems', label: 'Walkable Ceiling Systems' },
      { href: '/solutions/non-walkable-ceiling-systems', label: 'Non-Walkable Ceiling Systems' },
      { href: '/solutions/partition-solutions', label: 'Partition Solutions' },
      { href: '/solutions/prefab-house', label: 'Prefab House' },
      { href: '/solutions/cleanroom-solutions', label: 'Cleanroom Solutions' },
      { href: '/sound-proof-room-ball-mill', label: 'Sound Proof Room for Ball Mill' },
    ],
  });

  // ── Industries ──
  sections.push({
    id: 'industries',
    heading: 'Industries We Serve',
    description: 'Specialized industrial insulation and construction solutions by sector.',
    links: [
      { href: '/industries', label: 'All Industries' },
      { href: '/industries/pharma-chemical', label: 'Pharma & Chemical' },
      { href: '/industries/food-processing', label: 'Food Processing' },
      { href: '/industries/dairy', label: 'Dairy Industries' },
      { href: '/industries/cold-chain', label: 'Cold Chain' },
      { href: '/industries/precision-engineering', label: 'Precision Engineering' },
      { href: '/industries/hospitality', label: 'Hospitality' },
      { href: '/industries/automobile', label: 'Automobile' },
      { href: '/industries/agri-processing', label: 'Agri Processing' },
    ],
  });

  // ── Shop ──
  sections.push({
    id: 'shop',
    heading: 'Shop',
    description: 'Buy insulated panels, doors, and cleanroom products online from Phoenixx.',
    links: [
      { href: '/shop', label: 'All Products Shop' },
      { href: '/shop/sandwich-puf-panel', label: 'Buy Sandwich PUF Panel' },
      { href: '/shop/roofing-puf-panel', label: 'Buy Roofing PUF Panel' },
      { href: '/shop/pir-panel', label: 'Buy PIR Panel' },
      { href: '/shop/rockwool-panel', label: 'Buy Rockwool Panel' },
      { href: '/shop/wall-ceiling-panel', label: 'Buy Wall Ceiling Panel' },
      { href: '/shop/fm-approved-panel', label: 'Buy FM Approved Panel' },
      { href: '/shop/cleanroom-door', label: 'Buy Cleanroom Door' },
      { href: '/shop/fire-door-emergency-exit', label: 'Buy Fire Door Emergency Exit' },
      { href: '/shop/fire-rated-multipurpose-door', label: 'Buy Fire Rated Multipurpose Door' },
      { href: '/shop/cold-storage-door', label: 'Buy Cold Storage Door' },
      { href: '/shop/hermetic-door', label: 'Buy Hermetic Door' },
      { href: '/shop/cleanroom-partition', label: 'Buy Cleanroom Partition' },
      { href: '/shop/cleanroom-false-ceiling', label: 'Buy Cleanroom False Ceiling' },
      { href: '/shop/cleanroom-doors', label: 'Buy Cleanroom Doors' },
      { href: '/shop/cleanroom-flooring', label: 'Buy Cleanroom Flooring' },
    ],
  });

  // ── SEO Authority Pages ──
  sections.push({
    id: 'seo-guides',
    heading: 'PUF Panel Buying Guides',
    description: 'In-depth guides comparing PUF panel types, thickness, density, and applications.',
    links: [
      { href: '/best-puf-panel-for-industrial-shed', label: 'Best PUF Panel for Industrial Shed' },
      { href: '/best-quality-sandwich-puf-panel', label: 'Best Quality Sandwich PUF Panel' },
      { href: '/best-roofing-puf-panel-for-factory', label: 'Best Roofing PUF Panel for Factory' },
      { href: '/best-puf-panel-brand-in-india', label: 'Best PUF Panel Brand in India' },
      { href: '/best-puf-panel-thickness-for-roofing', label: 'Best PUF Panel Thickness for Roofing' },
      { href: '/best-density-puf-panel-for-insulation', label: 'Best Density PUF Panel for Insulation' },
      { href: '/puf-panel-vs-rockwool-panel', label: 'PUF Panel vs Rockwool Panel' },
      { href: '/best-puf-panel-for-cold-storage', label: 'Best PUF Panel for Cold Storage' },
      { href: '/best-puf-panel-for-clean-room', label: 'Best PUF Panel for Clean Room' },
      { href: '/best-insulated-panel-for-warehouse', label: 'Best Insulated Panel for Warehouse' },
    ],
  });

  // ── National SEO Pages ──
  sections.push({
    id: 'national-seo',
    heading: 'PUF Panel Manufacturer & Supplier in India',
    description: 'Phoenixx Smart Build is a leading PUF panel manufacturer and supplier across India.',
    links: [
      { href: '/top-puf-panel-manufacturers-in-india', label: 'Top PUF Panel Manufacturers in India' },
      { href: '/best-puf-panel-manufacturer-in-india', label: 'Best PUF Panel Manufacturer in India' },
      { href: '/industrial-puf-panel-manufacturer-in-india', label: 'Industrial PUF Panel Manufacturer in India' },
      { href: '/insulated-puf-panel-manufacturer-in-india', label: 'Insulated PUF Panel Manufacturer in India' },
      { href: '/leading-puf-panel-company-in-india', label: 'Leading PUF Panel Company in India' },
      { href: '/premium-puf-panel-manufacturer-in-india', label: 'Premium PUF Panel Manufacturer in India' },
      { href: '/puf-panel-company-in-india', label: 'PUF Panel Company in India' },
      { href: '/puf-panel-suppliers-in-india', label: 'PUF Panel Suppliers in India' },
      { href: '/puf-panels-manufacturer-india', label: 'PUF Panels Manufacturer India' },
      { href: '/sandwich-puf-panel-manufacturer-in-india', label: 'Sandwich PUF Panel Manufacturer in India' },
    ],
  });

  // ── City Manufacturer Pages ──
  const cityMfgSlugs = [
    'ahmedabad', 'surat', 'vadodara', 'rajkot', 'jamnagar', 'vapi', 'dholera',
    'pune', 'nagpur', 'nashik', 'thane', 'mumbai', 'kolhapur', 'chhatrapati-sambhajinagar',
  ];
  sections.push({
    id: 'city-manufacturer',
    heading: 'PUF Panel Manufacturer by City',
    description: 'Find Phoenixx PUF panel manufacturing and supply across major industrial cities.',
    links: cityMfgSlugs.map((slug) => ({
      href: `/puf-panel-manufacturer-in-${slug}`,
      label: `PUF Panel Manufacturer in ${slugToLabel(slug)}`,
    })),
  });

  // ── Blogs (dynamically pulls all 78+ blogs, auto-includes future additions) ──
  const blogSlugs = getAllBlogSlugs();
  sections.push({
    id: 'blogs',
    heading: 'Insights & Blog',
    description: 'Technical articles, pricing guides, comparison guides, how-to guides, and industry insights from Phoenixx Smart Build.',
    links: [
      { href: '/resources/blogs', label: 'All Blog Posts' },
      ...blogSlugs.map((slug) => ({
        href: `/resources/blogs/${slug}`,
        label: slugToLabel(slug),
      })),
    ],
  });

  // ── Project Gallery ──
  const projectSlugs = [
    'pharma-cleanroom-pune', 'cold-storage-mumbai', 'reliance-industries-jamnagar',
    'uflex-sanand', 'cargill-gandhidham', 'bunge-gandhidham', 'vyara-tiles-gangad',
    'motherson-marelli-sanand', 'skf-ahmedabad', 'sarhad-dairy-bhuj', 'pgp-glass-dahej',
    'agro-tech-ankleshwar', 'rotomotive-anand', 'rajhans-nutriments-surat',
    'fuji-silvertech-ahmedabad', 'aishwarya-dyeing-surat', 'narmada-biochem-dahej',
    'bc-foods-mahua', 'edkem-pharma-ahmedabad', 'makson-pharma-surendranagar',
    'infocity-club-gandhinagar', 'agrawal-metal-vithlapur',
  ];
  sections.push({
    id: 'projects',
    heading: 'Project Gallery',
    description: 'Real-world installations and completed projects by Phoenixx Smart Build across India.',
    links: [
      { href: '/resources/project-gallery', label: 'All Projects' },
      ...projectSlugs.map((slug) => ({
        href: `/resources/project-gallery/${slug}`,
        label: slugToLabel(slug),
      })),
    ],
  });

  // ── Resources ──
  sections.push({
    id: 'resources',
    heading: 'Resources',
    description: 'Technical sheets, brochures, FAQs, glossary, and reference materials.',
    links: [
      { href: '/resources', label: 'Resources Hub' },
      { href: '/resources/technical-sheet', label: 'Technical Sheets' },
      { href: '/resources/brochure', label: 'Brochures' },
      { href: '/resources/faq', label: 'FAQ' },
      { href: '/resources/glossary', label: 'Industrial Glossary' },
      { href: '/certifications', label: 'Certifications & Standards' },
    ],
  });

  // ── Export Markets ──
  const exportSlugs = ['kenya', 'tanzania', 'uganda', 'rwanda', 'ghana', 'zambia', 'botswana', 'namibia', 'mozambique', 'angola'];
  sections.push({
    id: 'export',
    heading: 'Export Markets — Africa',
    description: 'PHOENIXX SMARTBUILD exports PUF panels and insulated building solutions to African markets.',
    links: exportSlugs.map((slug) => ({
      href: `/export/${slug}`,
      label: `PUF Panel Export to ${slug.charAt(0).toUpperCase() + slug.slice(1)}`,
    })),
  });

  // ── Product-in-Location Pages (5 products x 48 locations = 240) ──
  const productKeys = Object.keys(products);
  const locationKeys = Object.keys(locations);

  for (const productSlug of productKeys) {
    const product = products[productSlug];
    const links: DirectoryLink[] = locationKeys.map((locSlug) => {
      const loc = locations[locSlug];
      return {
        href: `/${productSlug}-in-${locSlug}`,
        label: `${product.name} in ${loc.name}`,
      };
    });

    sections.push({
      id: `geo-${productSlug}`,
      heading: `${product.name} by Location`,
      description: `Find ${product.name} availability, pricing, and supply details for ${locationKeys.length} cities and states across India.`,
      links,
    });
  }

  // ── PUF Roofing Panel Core Pages ──
  sections.push({
    id: 'puf-roofing-core',
    heading: 'PUF Roofing Panels (Rajasthan Hub)',
    description: 'Phoenixx PUF roofing panel hub pages covering manufacturing, supply, pricing, and the Phoenixx brand.',
    links: coreInternalLinks.map((l) => ({ href: l.href, label: l.label })),
  });

  // ── PUF Roofing Panel City Pages (5 types x 23 cities = 115) ──
  const cityKeys = Object.keys(geoCities);
  for (const [, pt] of Object.entries(geoPageTypes)) {
    const links: DirectoryLink[] = cityKeys.map((citySlug) => {
      const city = geoCities[citySlug];
      return {
        href: `/${pt.urlPrefix}-${citySlug}`,
        label: pt.h1Template.replace('{city}', city.name),
      };
    });
    sections.push({
      id: `rajasthan-${pt.id}`,
      heading: pt.h1Template.replace(' in {city}', ' by City'),
      description: `${pt.focusDescription} Covers 23 Rajasthan cities.`,
      links,
    });
  }

  // ── PUF Roofing Keyword Expansion (4 types x 23 cities = 92) ──
  for (const [, kt] of Object.entries(geoKeywordTypes)) {
    const links: DirectoryLink[] = cityKeys.map((citySlug) => {
      const city = geoCities[citySlug];
      return {
        href: `/${kt.urlPrefix}-${citySlug}`,
        label: kt.h1Template.replace('{city}', city.name),
      };
    });
    sections.push({
      id: `rajasthan-kw-${kt.id}`,
      heading: kt.h1Template.replace(' in {city}', ' by City'),
      description: `${kt.focusDescription} Covers 23 Rajasthan cities.`,
      links,
    });
  }

  // ── Legal ──
  sections.push({
    id: 'legal',
    heading: 'Legal & Policies',
    description: 'Privacy policy, return policy, and business terms.',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy' },
      { href: '/return-policy', label: 'Return Policy' },
      { href: '/business-terms', label: 'Business Terms' },
    ],
  });

  return sections;
}

let _cached: DirectorySection[] | null = null;

export function getDirectorySections(): DirectorySection[] {
  if (!_cached) _cached = buildAllSections();
  return _cached;
}

export function getTotalLinkCount(): number {
  return getDirectorySections().reduce((sum, s) => sum + s.links.length, 0);
}
