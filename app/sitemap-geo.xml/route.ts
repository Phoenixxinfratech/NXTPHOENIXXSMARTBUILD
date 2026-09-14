import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getGeoEntries, renderUrlset } from '@/lib/sitemap-data';

export async function GET() {
  return new NextResponse(renderUrlset(getGeoEntries()), { headers: SITEMAP_HEADERS });
}
