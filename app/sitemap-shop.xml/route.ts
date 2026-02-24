import { NextResponse } from 'next/server';

const baseUrl = 'https://phoenixxsmartbuild.com';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  
  const shopUrls = [
    { loc: '/shop', changefreq: 'weekly', priority: '0.9' },
    // Sandwich Panels
    { loc: '/shop/sandwich-puf-panel', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/roofing-puf-panel', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/pir-panel', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/rockwool-panel', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/wall-ceiling-panel', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/fm-approved-panel', changefreq: 'weekly', priority: '0.9' },
    // Doors
    { loc: '/shop/cleanroom-door', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/fire-door-emergency-exit', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/fire-rated-multipurpose-door', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/cold-storage-door', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/hermetic-door', changefreq: 'weekly', priority: '0.9' },
    // Cleanroom
    { loc: '/shop/cleanroom-partition', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/cleanroom-false-ceiling', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/cleanroom-doors', changefreq: 'weekly', priority: '0.9' },
    { loc: '/shop/cleanroom-flooring', changefreq: 'weekly', priority: '0.9' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${shopUrls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}


