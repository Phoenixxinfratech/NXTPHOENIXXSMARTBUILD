import { NextResponse } from 'next/server';
import {
  geoCities,
  geoPageTypes,
  geoKeywordTypes,
} from '@/lib/rajasthan-geo-data';

const baseUrl = 'https://phoenixxsmartbuild.com';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const citySlugs = Object.keys(geoCities);

  const urls: { loc: string; changefreq: string; priority: string }[] = [];

  // Core pages are in sitemap-core.xml — only city and keyword pages here

  // 115 city pages (5 types x 23 cities)
  for (const pt of Object.values(geoPageTypes)) {
    for (const cs of citySlugs) {
      urls.push({
        loc: `/${pt.urlPrefix}-${cs}`,
        changefreq: 'monthly',
        priority: '0.8',
      });
    }
  }

  // 92 keyword expansion pages (4 keywords x 23 cities)
  for (const kt of Object.values(geoKeywordTypes)) {
    for (const cs of citySlugs) {
      urls.push({
        loc: `/${kt.urlPrefix}-${cs}`,
        changefreq: 'monthly',
        priority: '0.7',
      });
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
