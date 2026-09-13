import { NextResponse } from 'next/server';
import { SITEMAP_HEADERS, getExportEntries, renderUrlset } from '@/lib/sitemap-data';

export async function GET() {
  return new NextResponse(renderUrlset(getExportEntries()), { headers: SITEMAP_HEADERS });
}
