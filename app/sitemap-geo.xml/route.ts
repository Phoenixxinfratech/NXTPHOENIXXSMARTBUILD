import { NextResponse } from 'next/server';
import { products, locations } from '@/lib/landing-page-data';

const baseUrl = 'https://phoenixxsmartbuild.com';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  
  // Generate all product + location combinations
  const geoUrls: { loc: string; changefreq: string; priority: string }[] = [];
  
  Object.keys(products).forEach(productSlug => {
    Object.keys(locations).forEach(locationSlug => {
      geoUrls.push({
        loc: `/${productSlug}-in-${locationSlug}`,
        changefreq: 'monthly',
        priority: '0.7',
      });
    });
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${geoUrls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}


