import { NextResponse } from 'next/server';

/**
 * Sitemap Shop - All /shop/* pages with pricing
 * URL: /sitemap-shop.xml
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
    // SHOP INDEX
    // ============================================
    { loc: `${baseUrl}/shop`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    
    // ============================================
    // SANDWICH PANELS
    // ============================================
    { loc: `${baseUrl}/shop/sandwich-puf-panel`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/roofing-puf-panel`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/pir-panel`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/rockwool-panel`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/wall-ceiling-panel`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/fm-approved-panel`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    
    // ============================================
    // DOORS
    // ============================================
    { loc: `${baseUrl}/shop/cleanroom-door`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/fire-door-emergency-exit`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/fire-rated-multipurpose-door`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/cold-storage-door`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/hermetic-door`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    
    // ============================================
    // CLEANROOM SOLUTIONS
    // ============================================
    { loc: `${baseUrl}/shop/cleanroom-partition`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/cleanroom-false-ceiling`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/cleanroom-doors`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
    { loc: `${baseUrl}/shop/cleanroom-flooring`, lastmod: today, changefreq: 'weekly', priority: '0.9' },
  ];

  const xml = generateSitemapXml(urls);
  
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

