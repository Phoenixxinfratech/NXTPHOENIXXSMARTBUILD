import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getCoreEntries, renderUrlset } from '@/lib/sitemap-data';

export async function GET() {
  return new NextResponse(renderUrlset(getCoreEntries()), { headers: SITEMAP_HEADERS });
}
