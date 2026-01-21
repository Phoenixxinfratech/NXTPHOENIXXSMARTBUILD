import { NextResponse } from 'next/server';

/**
 * Sitemap Geo - All Product + Country/State/City pages
 * URL: /sitemap-geo.xml
 */

const baseUrl = 'https://phoenixxsmartbuild.com';

// Products
const products = [
  'sandwich-puf-panel',
  'roofing-puf-panel',
  'rockwool-panel',
  'pir-panel',
  'fm-approved-panel',
];

// Locations
const locations = {
  // Country
  countries: ['india'],
  
  // States
  states: ['gujarat', 'maharashtra', 'chhattisgarh', 'madhya-pradesh', 'rajasthan'],
  
  // Cities - Gujarat
  gujaratCities: [
    'ahmedabad', 'surat', 'vadodara', 'rajkot', 'bhavnagar', 'jamnagar',
    'junagadh', 'gandhinagar', 'anand', 'nadiad', 'morbi', 'gandhidham',
    'vapi', 'navsari', 'bharuch', 'mehsana', 'bhuj', 'porbandar',
    'palanpur', 'valsad', 'godhra',
  ],
  
  // Cities - Maharashtra
  maharashtraCities: ['mumbai', 'pune', 'nagpur', 'nashik', 'aurangabad', 'thane', 'kolhapur'],
  
  // Cities - Chhattisgarh
  chhattisgarhCities: ['raipur', 'bhilai', 'bilaspur'],
  
  // Cities - Madhya Pradesh
  mpCities: ['indore', 'bhopal'],
  
  // Cities - Rajasthan
  rajasthanCities: ['jaipur', 'udaipur'],
};

// All locations combined
const allLocations = [
  ...locations.countries,
  ...locations.states,
  ...locations.gujaratCities,
  ...locations.maharashtraCities,
  ...locations.chhattisgarhCities,
  ...locations.mpCities,
  ...locations.rajasthanCities,
];

// City-specific SEO pages
const cityLandingPages = [
  'puf-panel-manufacturer-in-surat',
  'puf-panel-manufacturer-in-vadodara',
  'puf-panel-manufacturer-in-rajkot',
  'puf-panel-manufacturer-in-jamnagar',
  'puf-panel-manufacturer-in-vapi',
  'puf-panel-manufacturer-in-dholera',
  'puf-panel-manufacturer-in-pune',
  'puf-panel-manufacturer-in-nagpur',
  'puf-panel-manufacturer-in-nashik',
  'puf-panel-manufacturer-in-thane',
  'puf-panel-manufacturer-in-mumbai',
  'puf-panel-manufacturer-in-kolhapur',
  'puf-panel-manufacturer-in-chhatrapati-sambhajinagar',
];

// Generate XML for sitemap
function generateSitemapXml(urls: { loc: string; lastmod: string; changefreq: string; priority: string }[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;
}

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  
  const urls: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [];
  
  // ============================================
  // PRODUCT + LOCATION PAGES (125+ pages)
  // Format: /{product}-in-{location}
  // ============================================
  products.forEach(product => {
    allLocations.forEach(location => {
      // Determine priority based on location type
      let priority = '0.7';
      if (locations.countries.includes(location)) {
        priority = '0.9'; // Country pages higher priority
      } else if (locations.states.includes(location)) {
        priority = '0.8'; // State pages medium-high priority
      }
      
      urls.push({
        loc: `${baseUrl}/${product}-in-${location}`,
        lastmod: today,
        changefreq: 'monthly',
        priority,
      });
    });
  });
  
  // ============================================
  // CITY-SPECIFIC SEO LANDING PAGES
  // Format: /puf-panel-manufacturer-in-{city}
  // ============================================
  cityLandingPages.forEach(page => {
    urls.push({
      loc: `${baseUrl}/${page}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.8',
    });
  });

  const xml = generateSitemapXml(urls);
  
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

