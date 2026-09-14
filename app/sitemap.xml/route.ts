import { NextResponse } from 'next/server';
import { SECTION_SITEMAPS, SITEMAP_HEADERS, renderSitemapIndex } from '@/lib/sitemap-data';

/**
 * /sitemap.xml is the one entry point submitted in robots.txt. It is an index
 * of the section sitemaps rather than a flat list, so no URL is submitted twice
 * with two different priorities.
 */
export async function GET() {
  return new NextResponse(renderSitemapIndex(SECTION_SITEMAPS), { headers: SITEMAP_HEADERS });
}
