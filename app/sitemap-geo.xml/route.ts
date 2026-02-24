import { NextResponse } from 'next/server';
import { products, locations } from '@/lib/landing-page-data';

const baseUrl = 'https://phoenixxsmartbuild.com';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  
  // Priority locations for better crawl budget allocation
  const highPriorityLocations = [
    'india', 
    'gujarat', 'maharashtra', 'rajasthan', 'tamil-nadu', 'karnataka',
    'ahmedabad', 'surat', 'vadodara', 'rajkot', 'gandhinagar',
    'mumbai', 'pune', 'nashik', 'nagpur', 'aurangabad',
    'jaipur', 'udaipur', 'jodhpur', 'kota',
    'chennai', 'bangalore', 'hyderabad', 'delhi'
  ];
  
  const mediumPriorityLocations = [
    'madhya-pradesh', 'uttar-pradesh', 'chhattisgarh',
    'vapi', 'ankleshwar', 'morbi', 'jamnagar', 'bhavnagar',
    'thane', 'navi-mumbai', 'kolhapur',
    'indore', 'bhopal', 'noida', 'gurgaon', 'raipur', 'bhilai'
  ];
  
  // Generate all product + location combinations with prioritization
  const geoUrls: { loc: string; changefreq: string; priority: string }[] = [];
  
  Object.keys(products).forEach(productSlug => {
    Object.keys(locations).forEach(locationSlug => {
      let priority = '0.5'; // Default low priority
      
      // Assign priority based on location importance
      if (highPriorityLocations.includes(locationSlug)) {
        priority = '0.8';
      } else if (mediumPriorityLocations.includes(locationSlug)) {
        priority = '0.6';
      }
      
      geoUrls.push({
        loc: `/${productSlug}-in-${locationSlug}`,
        changefreq: 'monthly',
        priority: priority,
      });
    });
  });
  
  // Sort by priority (highest first) to help crawlers discover important pages first
  geoUrls.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));

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
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex',
    },
  });
}


