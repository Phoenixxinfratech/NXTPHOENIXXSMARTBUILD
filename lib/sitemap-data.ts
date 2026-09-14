/**
 * Single source of truth for every URL the site submits to search engines.
 *
 * Previously each sitemap route built its own list, so /sitemap.xml and the
 * per-section sitemaps disagreed on priority for the same URL and the geo
 * priority tiers referenced cities that were never in the locations data.
 * Everything now derives from here, and /sitemap.xml is a plain index of the
 * section sitemaps rather than a fourth, overlapping copy of the URLs.
 */

import { locations } from '@/lib/landing-page-data';
import { getPublishedCombos } from '@/lib/geo-strategy';
import { getAllBlogSlugs } from '@/lib/blog-data';
import { getAllExportUrls } from '@/lib/export-data';
import { generateAllGeoStaticParams } from '@/lib/rajasthan-geo-data';
import { siteConfig } from '@/lib/site-config';

export const baseUrl = siteConfig.url;

export type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface SitemapEntry {
  loc: string;
  changefreq: ChangeFreq;
  priority: string;
}

export const SECTION_SITEMAPS = [
  '/sitemap-core.xml',
  '/sitemap-blogs.xml',
  '/sitemap-shop.xml',
  '/sitemap-geo.xml',
  '/sitemap-export.xml',
  '/sitemap-rajasthan-geo.xml',
] as const;

const coreUrls: SitemapEntry[] = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/about-us', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact-us', changefreq: 'monthly', priority: '0.8' },
  { loc: '/get-a-quote', changefreq: 'monthly', priority: '0.9' },
  { loc: '/clientele', changefreq: 'monthly', priority: '0.7' },
  { loc: '/career', changefreq: 'monthly', priority: '0.6' },
  { loc: '/become-partner', changefreq: 'monthly', priority: '0.6' },
  { loc: '/vendor-registration', changefreq: 'monthly', priority: '0.6' },
  { loc: '/sitemap-page', changefreq: 'monthly', priority: '0.4' },
  { loc: '/door-products-directory', changefreq: 'weekly', priority: '0.8' },
  { loc: '/certifications', changefreq: 'monthly', priority: '0.7' },
  { loc: '/lp/puf-panel-manufacturer-ahmedabad', changefreq: 'monthly', priority: '0.9' },

  { loc: '/products', changefreq: 'weekly', priority: '0.9' },
  { loc: '/products/sandwich-panels', changefreq: 'weekly', priority: '0.8' },
  { loc: '/products/sandwich-panels/sandwich-puf-panel', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/sandwich-panels/roofing-puf-panel', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/sandwich-panels/pir-panel', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/sandwich-panels/rockwool-panel', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/sandwich-panels/wall-ceiling-panel', changefreq: 'monthly', priority: '0.8' },
  { loc: '/products/doors', changefreq: 'weekly', priority: '0.8' },
  { loc: '/products/doors/cleanroom-door', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/doors/fire-door-emergency-exit', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/doors/fire-rated-multipurpose-door', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/cleanroom-solutions', changefreq: 'weekly', priority: '0.8' },
  { loc: '/products/cleanroom-solutions/cleanroom-partition', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/cleanroom-solutions/cleanroom-doors', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/cleanroom-solutions/cleanroom-false-ceiling', changefreq: 'monthly', priority: '0.7' },
  { loc: '/products/cleanroom-solutions/cleanroom-flooring', changefreq: 'monthly', priority: '0.7' },

  { loc: '/solutions', changefreq: 'weekly', priority: '0.9' },
  { loc: '/solutions/peb', changefreq: 'monthly', priority: '0.8' },
  { loc: '/solutions/cold-storage-construction', changefreq: 'monthly', priority: '0.8' },
  { loc: '/solutions/walkable-ceiling-systems', changefreq: 'monthly', priority: '0.7' },
  { loc: '/solutions/non-walkable-ceiling-systems', changefreq: 'monthly', priority: '0.7' },
  { loc: '/solutions/partition-solutions', changefreq: 'monthly', priority: '0.7' },
  { loc: '/solutions/prefab-house', changefreq: 'monthly', priority: '0.7' },
  { loc: '/solutions/cleanroom-solutions', changefreq: 'monthly', priority: '0.7' },
  { loc: '/sound-proof-room-ball-mill', changefreq: 'monthly', priority: '0.8' },

  { loc: '/puf-roofing-panels', changefreq: 'monthly', priority: '0.9' },
  { loc: '/puf-roofing-panel-manufacturer', changefreq: 'monthly', priority: '0.9' },
  { loc: '/puf-roofing-panel-supplier', changefreq: 'monthly', priority: '0.9' },
  { loc: '/puf-roofing-panel-price', changefreq: 'monthly', priority: '0.9' },
  { loc: '/phoenixx-puf-roofing-panels', changefreq: 'monthly', priority: '0.9' },

  { loc: '/best-puf-panel-for-industrial-shed', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-quality-sandwich-puf-panel', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-roofing-puf-panel-for-factory', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-puf-panel-brand-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-puf-panel-thickness-for-roofing', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-density-puf-panel-for-insulation', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-vs-rockwool-panel', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-puf-panel-for-cold-storage', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-puf-panel-for-clean-room', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-insulated-panel-for-warehouse', changefreq: 'monthly', priority: '0.8' },

  { loc: '/industries', changefreq: 'monthly', priority: '0.8' },
  { loc: '/industries/pharma-chemical', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/food-processing', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/dairy', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/cold-chain', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/precision-engineering', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/hospitality', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/automobile', changefreq: 'monthly', priority: '0.7' },
  { loc: '/industries/agri-processing', changefreq: 'monthly', priority: '0.7' },

  { loc: '/resources', changefreq: 'weekly', priority: '0.8' },
  { loc: '/resources/blogs', changefreq: 'weekly', priority: '0.7' },
  { loc: '/resources/project-gallery', changefreq: 'weekly', priority: '0.7' },
  { loc: '/resources/technical-sheet', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/brochure', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/faq', changefreq: 'monthly', priority: '0.7' },
  { loc: '/resources/glossary', changefreq: 'monthly', priority: '0.7' },

  { loc: '/resources/project-gallery/pharma-cleanroom-pune', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/cold-storage-mumbai', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/reliance-industries-jamnagar', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/uflex-sanand', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/cargill-gandhidham', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/bunge-gandhidham', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/vyara-tiles-gangad', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/motherson-marelli-sanand', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/skf-ahmedabad', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/sarhad-dairy-bhuj', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/pgp-glass-dahej', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/agro-tech-ankleshwar', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/rotomotive-anand', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/rajhans-nutriments-surat', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/fuji-silvertech-ahmedabad', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/aishwarya-dyeing-surat', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/narmada-biochem-dahej', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/bc-foods-mahua', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/edkem-pharma-ahmedabad', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/makson-pharma-surendranagar', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/infocity-club-gandhinagar', changefreq: 'monthly', priority: '0.6' },
  { loc: '/resources/project-gallery/agrawal-metal-vithlapur', changefreq: 'monthly', priority: '0.6' },

  { loc: '/top-puf-panel-manufacturers-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/best-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/industrial-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/insulated-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/leading-puf-panel-company-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/premium-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-company-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-suppliers-in-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panels-manufacturer-india', changefreq: 'monthly', priority: '0.8' },
  { loc: '/sandwich-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },

  { loc: '/puf-panel-manufacturer-in-ahmedabad', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-surat', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-vadodara', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-rajkot', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-jamnagar', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-vapi', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-dholera', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-pune', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-nagpur', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-nashik', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-thane', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-mumbai', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-kolhapur', changefreq: 'monthly', priority: '0.8' },
  { loc: '/puf-panel-manufacturer-in-chhatrapati-sambhajinagar', changefreq: 'monthly', priority: '0.8' },

  { loc: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { loc: '/return-policy', changefreq: 'yearly', priority: '0.3' },
  { loc: '/business-terms', changefreq: 'yearly', priority: '0.3' },
];

const shopSlugs = [
  'sandwich-puf-panel',
  'roofing-puf-panel',
  'pir-panel',
  'rockwool-panel',
  'wall-ceiling-panel',
  'fm-approved-panel',
  'cleanroom-door',
  'fire-door-emergency-exit',
  'fire-rated-multipurpose-door',
  'cold-storage-door',
  'hermetic-door',
  'cleanroom-partition',
  'cleanroom-false-ceiling',
  'cleanroom-doors',
  'cleanroom-flooring',
];

// Tiers are intersected with the real locations map, so a slug that is renamed
// or removed can no longer sit here silently inflating nothing.
const highPriorityLocations = new Set(
  [
    'india',
    'gujarat',
    'maharashtra',
    'rajasthan',
    'ahmedabad',
    'surat',
    'vadodara',
    'rajkot',
    'gandhinagar',
    'mumbai',
    'pune',
    'nashik',
    'nagpur',
    'aurangabad',
    'jaipur',
    'udaipur',
    'jodhpur',
    'kota',
  ].filter((slug) => slug in locations)
);

const mediumPriorityLocations = new Set(
  [
    'madhya-pradesh',
    'chhattisgarh',
    'vapi',
    'morbi',
    'jamnagar',
    'bhavnagar',
    'thane',
    'kolhapur',
    'indore',
    'bhopal',
    'raipur',
    'bhilai',
  ].filter((slug) => slug in locations)
);

export function getCoreEntries(): SitemapEntry[] {
  return coreUrls;
}

export function getShopEntries(): SitemapEntry[] {
  return [
    { loc: '/shop', changefreq: 'weekly', priority: '0.9' },
    ...shopSlugs.map<SitemapEntry>((slug) => ({
      loc: `/shop/${slug}`,
      changefreq: 'weekly',
      priority: '0.8',
    })),
  ];
}

export function getBlogEntries(): SitemapEntry[] {
  return getAllBlogSlugs().map<SitemapEntry>((slug) => ({
    loc: `/resources/blogs/${slug}`,
    changefreq: 'monthly',
    priority: '0.7',
  }));
}

export function getExportEntries(): SitemapEntry[] {
  return getAllExportUrls().map<SitemapEntry>((loc) => ({
    loc,
    changefreq: 'monthly',
    priority: loc === '/export' ? '0.9' : loc.split('/').length <= 3 ? '0.8' : '0.7',
  }));
}

export function getGeoEntries(): SitemapEntry[] {
  // Only the combinations we actually publish; the rest redirect and must not
  // be advertised. See lib/geo-strategy.ts.
  const entries = getPublishedCombos().map<SitemapEntry>(({ slug, locationSlug }) => ({
    loc: `/${slug}`,
    changefreq: 'monthly',
    priority: highPriorityLocations.has(locationSlug)
      ? '0.7'
      : mediumPriorityLocations.has(locationSlug)
        ? '0.6'
        : '0.5',
  }));
  return entries.sort((a, b) => Number(b.priority) - Number(a.priority));
}

export function getRajasthanGeoEntries(): SitemapEntry[] {
  // Same rule as the product pages: advertise only the variants we publish.
  return generateAllGeoStaticParams().map<SitemapEntry>((slug) => ({
    loc: `/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));
}

const XML_ESCAPES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&apos;',
};

function escapeXml(value: string) {
  return value.replace(/[&<>"']/g, (char) => XML_ESCAPES[char]);
}

export function renderUrlset(entries: SitemapEntry[]): string {
  const today = new Date().toISOString().split('T')[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(baseUrl + entry.loc)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
}

export function renderSitemapIndex(paths: readonly string[]): string {
  const today = new Date().toISOString().split('T')[0];
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map(
    (p) => `  <sitemap>
    <loc>${escapeXml(baseUrl + p)}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;
}

export const SITEMAP_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
};
