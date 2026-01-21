import { NextResponse } from 'next/server';

/**
 * Sitemap Core - Brand, Products, Solutions, Industries, Resources
 * URL: /sitemap-core.xml
 */

const baseUrl = 'https://phoenixxsmartbuild.com';

// Generate XML for sitemap
function generateSitemapXml(urls: { loc: string; lastmod: string; changefreq: string; priority: string }[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  
  const urls = [
    // ============================================
    // MAIN PAGES
    // ============================================
    { loc: `${baseUrl}/`, lastmod: today, changefreq: 'weekly', priority: '1.0' },
    { loc: `${baseUrl}/about-us`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/contact-us`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/get-a-quote`, lastmod: today, changefreq: 'monthly', priority: '0.9' },
    { loc: `${baseUrl}/clientele`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/career`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/become-partner`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    
    // ============================================
    // PRODUCTS - MAIN
    // ============================================
    { loc: `${baseUrl}/products`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    
    // Sandwich Panels Category
    { loc: `${baseUrl}/products/sandwich-panels`, lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/products/sandwich-panels/sandwich-puf-panel`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/products/sandwich-panels/roofing-puf-panel`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/products/sandwich-panels/pir-panel`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/products/sandwich-panels/rockwool-panel`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/products/sandwich-panels/wall-ceiling-panel`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    
    // Doors Category
    { loc: `${baseUrl}/products/doors`, lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/products/doors/cleanroom-door`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/products/doors/fire-door-emergency-exit`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/products/doors/fire-rated-multipurpose-door`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    
    // Cleanroom Solutions Category
    { loc: `${baseUrl}/products/cleanroom-solutions`, lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/products/cleanroom-solutions/cleanroom-partition`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/products/cleanroom-solutions/cleanroom-doors`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/products/cleanroom-solutions/cleanroom-false-ceiling`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/products/cleanroom-solutions/cleanroom-flooring`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    
    // ============================================
    // SOLUTIONS
    // ============================================
    { loc: `${baseUrl}/solutions`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/solutions/peb`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/solutions/walkable-ceiling-systems`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/solutions/non-walkable-ceiling-systems`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/solutions/partition-solutions`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/solutions/cold-storage-construction`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/solutions/prefab-house`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    
    // ============================================
    // INDUSTRIES
    // ============================================
    { loc: `${baseUrl}/industries`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/industries/dairy`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/industries/pharma-chemical`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/industries/food-processing`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/industries/cold-chain`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/industries/precision-engineering`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/industries/hospitality`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/industries/automobile`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    { loc: `${baseUrl}/industries/agri-processing`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    
    // ============================================
    // RESOURCES
    // ============================================
    { loc: `${baseUrl}/resources`, lastmod: today, changefreq: 'weekly', priority: '0.8' },
    { loc: `${baseUrl}/resources/blogs`, lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: `${baseUrl}/resources/project-gallery`, lastmod: today, changefreq: 'weekly', priority: '0.7' },
    { loc: `${baseUrl}/resources/technical-sheet`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/brochure`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/faq`, lastmod: today, changefreq: 'monthly', priority: '0.7' },
    
    // Blog Posts
    { loc: `${baseUrl}/resources/blogs/rise-of-sustainable-peb-structures`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/optimizing-cold-storage-energy-efficiency`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/cleanroom-design-best-practices`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/future-of-prefab-construction`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/fire-safety-industrial-buildings`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/choosing-right-insulation-cold-storage`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/puf-panels-food-processing`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/industrial-door-solutions-guide`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/what-is-a-puf-panel`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/puf-panel-vs-traditional-roofing-sheets`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/how-puf-panels-reduce-energy-costs`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/puf-panel-thickness-guide`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/applications-of-puf-panels-in-cold-storage-pharma`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/blogs/puf-vs-pir-vs-rockwool`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    
    // Project Gallery
    { loc: `${baseUrl}/resources/project-gallery/pharma-cleanroom-pune`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    { loc: `${baseUrl}/resources/project-gallery/cold-storage-mumbai`, lastmod: today, changefreq: 'monthly', priority: '0.6' },
    
    // ============================================
    // SEO AUTHORITY PAGES
    // ============================================
    { loc: `${baseUrl}/best-puf-panel-manufacturer-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/industrial-puf-panel-manufacturer-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/insulated-puf-panel-manufacturer-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/leading-puf-panel-company-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/premium-puf-panel-manufacturer-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/puf-panel-company-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/puf-panel-suppliers-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/puf-panels-manufacturer-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    { loc: `${baseUrl}/sandwich-puf-panel-manufacturer-in-india`, lastmod: today, changefreq: 'monthly', priority: '0.8' },
    
    // ============================================
    // LEGAL/UTILITY PAGES
    // ============================================
    { loc: `${baseUrl}/privacy-policy`, lastmod: today, changefreq: 'yearly', priority: '0.3' },
    { loc: `${baseUrl}/return-policy`, lastmod: today, changefreq: 'yearly', priority: '0.3' },
    { loc: `${baseUrl}/business-terms`, lastmod: today, changefreq: 'yearly', priority: '0.3' },
    { loc: `${baseUrl}/thank-you`, lastmod: today, changefreq: 'yearly', priority: '0.2' },
  ];

  const xml = generateSitemapXml(urls);
  
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

