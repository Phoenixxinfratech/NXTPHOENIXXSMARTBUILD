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

const PRODUCT_LINKS: RelatedLink[] = Object.values(products).map((p) => ({
  href: `/products/sandwich-panels/${p.slug}`,
  label: p.name,
  category: 'product' as const,
}));

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function pickNearbyCities(locationSlug: string, count = 4): RelatedLink[] {
  const loc = getLocation(locationSlug);
  if (!loc) return [];
  const state = loc.state || loc.slug;
  const sameState = Object.values(locations).filter(
    (l) => l.type === 'city' && (l.state === state || l.parent === loc.parent) && l.slug !== locationSlug
  );
  const sorted = sameState.sort((a, b) => hashSlug(a.slug + locationSlug) - hashSlug(b.slug + locationSlug));
  return sorted.slice(0, count).map((c) => ({
    href: `/sandwich-puf-panel-in-${c.slug}`,
    label: `PUF Panel in ${c.name}`,
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
      href: `/products/sandwich-panels/${productSlug}`,
      label: product.name,
      category: 'product',
    });
  }

  links.push(...pickNearbyCities(locationSlug, 3));
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
