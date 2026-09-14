import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getBlogEntries, renderUrlset } from '@/lib/sitemap-data';

export async function GET() {
  return new NextResponse(renderUrlset(getBlogEntries()), { headers: SITEMAP_HEADERS });
}
