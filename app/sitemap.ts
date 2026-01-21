import { MetadataRoute } from 'next';

/**
 * Sitemap Index - Points to individual sitemaps
 * /sitemap-core.xml  → Brand, Products, Solutions, Resources
 * /sitemap-shop.xml  → /shop/* pages
 * /sitemap-geo.xml   → All Product + Location pages
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://phoenixxsmartbuild.com';
  
  // Return sitemap index entries pointing to individual sitemaps
  return [
    {
      url: `${baseUrl}/sitemap-core.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-shop.xml`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sitemap-geo.xml`,
      lastModified: new Date(),
    },
  ];
}
