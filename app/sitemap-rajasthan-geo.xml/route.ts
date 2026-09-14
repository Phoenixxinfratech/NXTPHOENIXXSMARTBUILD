import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getRajasthanGeoEntries, renderUrlset } from '@/lib/sitemap-data';

export async function GET() {
  return new NextResponse(renderUrlset(getRajasthanGeoEntries()), { headers: SITEMAP_HEADERS });
}
