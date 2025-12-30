import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { productsData, solutionsData, industriesData } from '@/lib/navigation';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Main pages
  const mainPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/clientele`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/get-a-quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/career`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/become-partner`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/vendor-registration`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ];

  // Product category pages
  const productCategoryPages: MetadataRoute.Sitemap = Object.keys(productsData).map((category) => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Individual product pages
  const productPages: MetadataRoute.Sitemap = Object.entries(productsData).flatMap(([category, data]) =>
    data.products.map((product) => ({
      url: `${baseUrl}/products/${category}/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  // Solution pages
  const solutionPages: MetadataRoute.Sitemap = solutionsData.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Industry pages
  const industryPages: MetadataRoute.Sitemap = industriesData.map((industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Resource pages
  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/resources/blogs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources/project-gallery`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources/technical-sheet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/brochure`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ];

  // Legal/Utility pages
  const utilityPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/return-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/business-terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/sitemap-page`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.4 },
  ];

  return [
    ...mainPages,
    ...productCategoryPages,
    ...productPages,
    ...solutionPages,
    ...industryPages,
    ...resourcePages,
    ...utilityPages,
  ];
}
