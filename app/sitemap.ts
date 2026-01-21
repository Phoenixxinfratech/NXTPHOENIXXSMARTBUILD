import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { productsData, solutionsData, industriesData } from '@/lib/navigation';
import { products, locations } from '@/lib/landing-page-data';

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

  // Blog posts
  const blogPosts: MetadataRoute.Sitemap = [
    'rise-of-sustainable-peb-structures',
    'optimizing-cold-storage-energy-efficiency',
    'cleanroom-design-best-practices',
    'sandwich-panels-vs-traditional-construction',
    'fire-safety-standards-industrial-buildings',
    'choosing-right-insulation-cold-storage',
    'benefits-of-pre-engineered-buildings',
    'cleanroom-classification-standards',
    'what-is-a-puf-panel',
    'puf-panel-vs-traditional-roofing-sheets',
    'how-puf-panels-reduce-energy-costs',
    'puf-panel-thickness-guide',
    'applications-of-puf-panels-in-cold-storage-pharma',
    'puf-vs-pir-vs-rockwool',
  ].map((slug) => ({
    url: `${baseUrl}/resources/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // SEO Authority Pages (existing)
  const seoAuthorityPages: MetadataRoute.Sitemap = [
    'premium-puf-panel-manufacturer-in-india',
    'leading-puf-panel-company-in-india',
    'top-puf-panel-manufacturers-in-india',
    'industrial-puf-panel-manufacturer-in-india',
    'sandwich-puf-panel-manufacturer-in-india',
    'best-puf-panel-manufacturer-in-india',
    'insulated-puf-panel-manufacturer-in-india',
    'puf-panel-suppliers-in-india',
    'puf-panels-manufacturer-india',
    'puf-panel-company-in-india',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // City Landing Pages (existing)
  const cityLandingPages: MetadataRoute.Sitemap = [
    'puf-panel-manufacturer-in-surat',
    'puf-panel-manufacturer-in-vadodara',
    'puf-panel-manufacturer-in-rajkot',
    'puf-panel-manufacturer-in-jamnagar',
    'puf-panel-manufacturer-in-vapi',
    'puf-panel-manufacturer-in-dholera',
    'puf-panel-manufacturer-in-pune',
    'puf-panel-manufacturer-in-nagpur',
    'puf-panel-manufacturer-in-nashik',
    'puf-panel-manufacturer-in-thane',
    'puf-panel-manufacturer-in-mumbai',
    'puf-panel-manufacturer-in-kolhapur',
    'puf-panel-manufacturer-in-chhatrapati-sambhajinagar',
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // NEW: Product-Location Landing Pages (125 pages)
  const productLocationPages: MetadataRoute.Sitemap = [];
  Object.keys(products).forEach(productSlug => {
    Object.keys(locations).forEach(locationSlug => {
      productLocationPages.push({
        url: `${baseUrl}/${productSlug}-in-${locationSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

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
    ...blogPosts,
    ...seoAuthorityPages,
    ...cityLandingPages,
    ...productLocationPages,
    ...utilityPages,
  ];
}
