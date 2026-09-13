import { products, locations, type LocationData } from './landing-page-data';

/**
 * Which of the 250 possible product-in-location URLs we are willing to publish.
 *
 * The template can render any of the five panel products against any of the
 * fifty locations, but the product specs are identical everywhere, so five
 * pages for one city differ only by the panel name. Publishing all 250 is a
 * doorway-page pattern: lots of URLs, one destination, almost no unique value.
 *
 * So the product axis is collapsed everywhere we cannot write genuinely
 * different pages. A location keeps the full product set only when the data
 * holds enough local material — named estates, verified local facts, delivered
 * projects — to make each page say something different. Every other location
 * keeps a single page built around the flagship panel, and the other four
 * combinations redirect into it.
 */

export const FLAGSHIP_PRODUCT_SLUG = 'sandwich-puf-panel';

export function hasLocalDepth(location: LocationData): boolean {
  return (
    (location.uniqueFacts?.length ?? 0) >= 3 &&
    (location.localProjects?.length ?? 0) >= 2 &&
    (location.industrialZones?.length ?? 0) >= 3
  );
}

export function locationHasFullProductSet(locationSlug: string): boolean {
  const location = locations[locationSlug];
  return Boolean(location && hasLocalDepth(location));
}

export function isGeoProduct(productSlug: string): boolean {
  return productSlug in products;
}

export function isPublishedCombo(productSlug: string, locationSlug: string): boolean {
  if (!isGeoProduct(productSlug) || !(locationSlug in locations)) return false;
  if (productSlug === FLAGSHIP_PRODUCT_SLUG) return true;
  return locationHasFullProductSet(locationSlug);
}

/**
 * The URL a given product-and-location pair should resolve to. Collapsed
 * combinations point at the flagship page for the same location, which is the
 * closest page that actually serves the searcher's intent.
 */
export function canonicalComboSlug(productSlug: string, locationSlug: string): string {
  return isPublishedCombo(productSlug, locationSlug)
    ? `${productSlug}-in-${locationSlug}`
    : `${FLAGSHIP_PRODUCT_SLUG}-in-${locationSlug}`;
}

export interface PublishedCombo {
  productSlug: string;
  locationSlug: string;
  slug: string;
}

export function getPublishedCombos(): PublishedCombo[] {
  const combos: PublishedCombo[] = [];
  for (const locationSlug of Object.keys(locations)) {
    const productSlugs = locationHasFullProductSet(locationSlug)
      ? Object.keys(products)
      : [FLAGSHIP_PRODUCT_SLUG];
    for (const productSlug of productSlugs) {
      combos.push({ productSlug, locationSlug, slug: `${productSlug}-in-${locationSlug}` });
    }
  }
  return combos;
}

/** Products that still have their own page in a given location. */
export function getPublishedProductsFor(locationSlug: string): string[] {
  return Object.keys(products).filter((productSlug) => isPublishedCombo(productSlug, locationSlug));
}
