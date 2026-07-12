import { NextResponse } from 'next/server';
import { getAllExportUrls } from '@/lib/export-data';

const baseUrl = 'https://phoenixxsmartbuild.com';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  const urls = getAllExportUrls();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (loc) => `  <url>
    <loc>${baseUrl}${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${loc === '/export' ? '0.9' : loc.split('/').length <= 3 ? '0.8' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}
