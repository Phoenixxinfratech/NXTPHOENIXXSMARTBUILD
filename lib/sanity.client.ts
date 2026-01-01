import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

/**
 * Sanity Client Configuration
 * 
 * Environment Variables Required:
 * - NEXT_PUBLIC_SANITY_PROJECT_ID: Your Sanity project ID
 * - NEXT_PUBLIC_SANITY_DATASET: Dataset name (usually 'production')
 * - NEXT_PUBLIC_SANITY_API_VERSION: API version (e.g., '2024-01-01')
 * - SANITY_API_TOKEN: Read token for server-side queries (optional for public data)
 */

// Sanity configuration
const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
};

// Create the Sanity client
export const sanityClient = createClient(config);

// Create an authenticated client for mutations and drafts
export const sanityWriteClient = createClient({
  ...config,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Image URL builder
const builder = imageUrlBuilder(sanityClient);

/**
 * Generate optimized image URLs from Sanity image references
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

/**
 * Helper to get image URL with default settings
 */
export function getImageUrl(
  source: SanityImageSource,
  width?: number,
  height?: number
): string {
  let imageBuilder = builder.image(source).auto('format').fit('max');
  
  if (width) imageBuilder = imageBuilder.width(width);
  if (height) imageBuilder = imageBuilder.height(height);
  
  return imageBuilder.url();
}

/**
 * Fetch data with caching options
 */
export async function fetchSanity<T>(
  query: string,
  params: Record<string, unknown> = {},
  options: { cache?: RequestCache; tags?: string[] } = {}
): Promise<T> {
  const { cache = 'force-cache', tags = [] } = options;
  
  return sanityClient.fetch<T>(query, params, {
    cache,
    next: tags.length > 0 ? { tags } : undefined,
  });
}

export { config as sanityConfig };




