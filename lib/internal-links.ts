/**
 * Rule-based internal link selection for Related Resources blocks.
 */
import { products, locations, getLocation } from '@/lib/landing-page-data';
import { getAllBlogSlugs } from '@/lib/blog-data';

export interface RelatedLink {
  href: string;
  label: string;
  category: 'product' | 'industry' | 'city' | 'blog' | 'project' | 'solution' | 'resource';
}

const PROJECT_SLUGS = [
  'pharma-cleanroom-pune', 'cold-storage-mumbai', 'reliance-industries-jamnagar',
  'cargill-gandhidham', 'skf-ahmedabad', 'sarhad-dairy-bhuj',
];

const SOLUTION_LINKS: RelatedLink[] = [
  { href: '/solutions/peb', label: 'PEB Buildings', category: 'solution' },
  { href: '/solutions/cold-storage-construction', label: 'Cold Storage Construction', category: 'solution' },
  { href: '/solutions/cleanroom-solutions', label: 'Cleanroom Solutions', category: 'solution' },
  { href: '/solutions/prefab-house', label: 'Prefab House', category: 'solution' },
];

const INDUSTRY_LINKS: RelatedLink[] = [
  { href: '/industries/pharma-chemical', label: 'Pharma & Chemical', category: 'industry' },
  { href: '/industries/food-processing', label: 'Food Processing', category: 'industry' },
  { href: '/industries/cold-chain', label: 'Cold Chain', category: 'industry' },
  { href: '/industries/automobile', label: 'Automobile', category: 'industry' },
];

// Product slugs that have a /products/sandwich-panels/{slug} detail route
const PRODUCT_DETAIL_SLUGS = new Set([
  'sandwich-puf-panel',
  'roofing-puf-panel',
  'pir-panel',
  'rockwool-panel',
  'wall-ceiling-panel',
]);

const PRODUCT_LINKS: RelatedLink[] = Object.values(products)
  .filter((p) => PRODUCT_DETAIL_SLUGS.has(p.slug))
  .map((p) => ({
    href: `/products/sandwich-panels/${p.slug}`,
    label: p.name,
    category: 'product' as const,
  }));

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function productDetailHref(productSlug: string): string {
  if (PRODUCT_DETAIL_SLUGS.has(productSlug)) {
    return `/products/sandwich-panels/${productSlug}`;
  }
  // Products without a detail route (e.g. fm-approved-panel) live under /shop
  return `/shop/${productSlug}`;
}

function pickNearbyCities(locationSlug: string, productSlug = 'sandwich-puf-panel', count = 4): RelatedLink[] {
  const loc = getLocation(locationSlug);
  if (!loc) return [];

  const cities = Object.values(locations).filter((l) => l.type === 'city' && l.slug !== locationSlug);
  const matched = cities.filter((l) => {
    if (loc.type === 'city') return l.state === loc.state;
    if (loc.type === 'state') return l.parent === loc.slug;
    return true; // country level — any city
  });
  const pool = matched.length > 0 ? matched : cities;

  const sorted = pool.sort((a, b) => hashSlug(a.slug + locationSlug) - hashSlug(b.slug + locationSlug));
  const productLabel = products[productSlug]?.name || 'PUF Panel';
  return sorted.slice(0, count).map((c) => ({
    href: `/${productSlug}-in-${c.slug}`,
    label: `${productLabel} in ${c.name}`,
    category: 'city' as const,
  }));
}

function pickBlogs(seed: string, count = 2): RelatedLink[] {
  const slugs = getAllBlogSlugs();
  const idx = hashSlug(seed) % Math.max(slugs.length - count, 1);
  return slugs.slice(idx, idx + count).map((s) => ({
    href: `/resources/blogs/${s}`,
    label: s.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: 'blog' as const,
  }));
}

function pickProject(seed: string): RelatedLink {
  const slug = PROJECT_SLUGS[hashSlug(seed) % PROJECT_SLUGS.length];
  return {
    href: `/resources/project-gallery/${slug}`,
    label: slug.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
    category: 'project',
  };
}

export function getRelatedLinksForGeoPage(productSlug: string, locationSlug: string): RelatedLink[] {
  const product = products[productSlug];
  const links: RelatedLink[] = [];

  if (product) {
    links.push({
      href: productDetailHref(productSlug),
      label: product.name,
      category: 'product',
    });
  }

  links.push(...pickNearbyCities(locationSlug, productSlug, 3));
  links.push(...pickBlogs(`${productSlug}-${locationSlug}`, 2));
  links.push(pickProject(locationSlug));
  links.push({ href: '/get-a-quote', label: 'Get a Quote', category: 'resource' });
  links.push({ href: '/resources/glossary', label: 'Industrial Glossary', category: 'resource' });

  return links.slice(0, 10);
}

export function getRelatedLinksForIndustry(industrySlug: string): RelatedLink[] {
  const links: RelatedLink[] = [
    ...PRODUCT_LINKS.slice(0, 3),
    ...SOLUTION_LINKS.slice(0, 2),
    ...pickBlogs(industrySlug, 2),
    pickProject(industrySlug),
    { href: '/certifications', label: 'Certifications & Standards', category: 'resource' },
    { href: '/get-a-quote', label: 'Request Consultation', category: 'resource' },
  ];
  return links.slice(0, 10);
}

export function getRelatedLinksForSolution(solutionSlug: string): RelatedLink[] {
  const links: RelatedLink[] = [
    ...PRODUCT_LINKS.slice(0, 2),
    ...INDUSTRY_LINKS.slice(0, 2),
    { href: '/puf-panel-manufacturer-in-ahmedabad', label: 'PUF Panel Manufacturer Ahmedabad', category: 'city' },
    ...pickBlogs(solutionSlug, 2),
    pickProject(solutionSlug),
    { href: '/resources/project-gallery', label: 'Case Studies', category: 'project' },
  ];
  return links.slice(0, 10);
}

export function getRelatedLinksForBlog(blogSlug: string, relatedProducts?: { href: string; name: string }[]): RelatedLink[] {
  const links: RelatedLink[] = [];

  if (relatedProducts?.length) {
    links.push(...relatedProducts.slice(0, 2).map((p) => ({
      href: p.href,
      label: p.name,
      category: 'product' as const,
    })));
  } else {
    links.push(...PRODUCT_LINKS.slice(0, 2));
  }

  links.push(...pickBlogs(blogSlug + '-related', 2));
  links.push({ href: '/puf-panel-manufacturer-in-ahmedabad', label: 'PUF Panel Ahmedabad', category: 'city' });
  links.push(pickProject(blogSlug));
  links.push({ href: '/resources/glossary', label: 'Glossary', category: 'resource' });
  links.push({ href: '/get-a-quote', label: 'Get a Quote', category: 'resource' });

  return links.slice(0, 10);
}
