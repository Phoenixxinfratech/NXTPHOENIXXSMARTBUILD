import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getShopEntries, renderUrlset } from '@/lib/sitemap-data';

export async function GET() {
  return new NextResponse(renderUrlset(getShopEntries()), { headers: SITEMAP_HEADERS });
}
