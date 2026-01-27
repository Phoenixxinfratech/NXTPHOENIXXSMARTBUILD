import { NextResponse } from 'next/server';

const baseUrl = 'https://phoenixxsmartbuild.com';

export async function GET() {
  const today = new Date().toISOString().split('T')[0];
  
  const coreUrls = [
    // Main
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/about-us', changefreq: 'monthly', priority: '0.8' },
    { loc: '/contact-us', changefreq: 'monthly', priority: '0.8' },
    { loc: '/get-a-quote', changefreq: 'monthly', priority: '0.9' },
    { loc: '/clientele', changefreq: 'monthly', priority: '0.7' },
    { loc: '/career', changefreq: 'monthly', priority: '0.6' },
    { loc: '/become-partner', changefreq: 'monthly', priority: '0.6' },
    
    // Products Main
    { loc: '/products', changefreq: 'weekly', priority: '0.9' },
    
    // Sandwich Panels
    { loc: '/products/sandwich-panels', changefreq: 'weekly', priority: '0.8' },
    { loc: '/products/sandwich-panels/sandwich-puf-panel', changefreq: 'monthly', priority: '0.8' },
    { loc: '/products/sandwich-panels/roofing-puf-panel', changefreq: 'monthly', priority: '0.8' },
    { loc: '/products/sandwich-panels/pir-panel', changefreq: 'monthly', priority: '0.8' },
    { loc: '/products/sandwich-panels/rockwool-panel', changefreq: 'monthly', priority: '0.8' },
    { loc: '/products/sandwich-panels/wall-ceiling-panel', changefreq: 'monthly', priority: '0.8' },
    
    // Doors
    { loc: '/products/doors', changefreq: 'weekly', priority: '0.8' },
    { loc: '/products/doors/cleanroom-door', changefreq: 'monthly', priority: '0.7' },
    { loc: '/products/doors/fire-door-emergency-exit', changefreq: 'monthly', priority: '0.7' },
    { loc: '/products/doors/fire-rated-multipurpose-door', changefreq: 'monthly', priority: '0.7' },
    
    // Cleanroom Solutions
    { loc: '/products/cleanroom-solutions', changefreq: 'weekly', priority: '0.8' },
    { loc: '/products/cleanroom-solutions/cleanroom-partition', changefreq: 'monthly', priority: '0.7' },
    { loc: '/products/cleanroom-solutions/cleanroom-doors', changefreq: 'monthly', priority: '0.7' },
    { loc: '/products/cleanroom-solutions/cleanroom-false-ceiling', changefreq: 'monthly', priority: '0.7' },
    { loc: '/products/cleanroom-solutions/cleanroom-flooring', changefreq: 'monthly', priority: '0.7' },
    
    // Solutions (all existing solution pages)
    { loc: '/solutions', changefreq: 'weekly', priority: '0.9' },
    { loc: '/solutions/peb', changefreq: 'monthly', priority: '0.8' },
    { loc: '/solutions/cold-storage-construction', changefreq: 'monthly', priority: '0.8' },
    { loc: '/solutions/walkable-ceiling-systems', changefreq: 'monthly', priority: '0.7' },
    { loc: '/solutions/non-walkable-ceiling-systems', changefreq: 'monthly', priority: '0.7' },
    { loc: '/solutions/partition-solutions', changefreq: 'monthly', priority: '0.7' },
    { loc: '/solutions/prefab-house', changefreq: 'monthly', priority: '0.7' },
    
    // Industries (only pages that exist in industriesData)
    { loc: '/industries', changefreq: 'monthly', priority: '0.8' },
    { loc: '/industries/pharma-chemical', changefreq: 'monthly', priority: '0.7' },
    { loc: '/industries/food-processing', changefreq: 'monthly', priority: '0.7' },
    { loc: '/industries/dairy', changefreq: 'monthly', priority: '0.7' },
    { loc: '/industries/cold-chain', changefreq: 'monthly', priority: '0.7' },
    { loc: '/industries/precision-engineering', changefreq: 'monthly', priority: '0.7' },
    { loc: '/industries/hospitality', changefreq: 'monthly', priority: '0.7' },
    { loc: '/industries/automobile', changefreq: 'monthly', priority: '0.7' },
    { loc: '/industries/agri-processing', changefreq: 'monthly', priority: '0.7' },
    
    // Resources
    { loc: '/resources', changefreq: 'weekly', priority: '0.8' },
    { loc: '/resources/blogs', changefreq: 'weekly', priority: '0.7' },
    { loc: '/resources/project-gallery', changefreq: 'weekly', priority: '0.7' },
    { loc: '/resources/technical-sheet', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/brochure', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/faq', changefreq: 'monthly', priority: '0.7' },
    
    // Blog Posts (all actual blog slugs)
    { loc: '/resources/blogs/rise-of-sustainable-peb-structures', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/optimizing-cold-storage-energy-efficiency', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/cleanroom-design-best-practices', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/choosing-right-insulated-panel', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/fire-safety-industrial-buildings', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/cold-chain-logistics-india', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/turnkey-epc-project-delivery', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/industrial-doors-selection-guide', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/what-is-puf-panel-how-does-it-work', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/puf-panel-vs-traditional-roofing-sheets', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/how-puf-panels-reduce-energy-costs-factories', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/puf-panel-thickness-guide-industrial-buildings', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/puf-panels-cold-storage-pharma-applications', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/blogs/puf-vs-pir-vs-rockwool', changefreq: 'monthly', priority: '0.6' },
    
    // New SEO Blog Pages (Authority Content)
    { loc: '/resources/blogs/puf-panel-installation-accessories', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/puf-panel-installation-near-me', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/puf-panel-manufacturers-in-ahmedabad', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/puf-panel-manufacturers-in-gujarat', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/jindal-puf-panel-price-list', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/puf-panel-installation-contractors', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/puf-panel-wall-installation', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/puf-panel-installation-cost', changefreq: 'monthly', priority: '0.7' },
    { loc: '/resources/blogs/puf-panel-house', changefreq: 'monthly', priority: '0.7' },
    
    // Project Gallery (all project pages)
    { loc: '/resources/project-gallery/pharma-cleanroom-pune', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/cold-storage-mumbai', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/reliance-industries-jamnagar', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/uflex-sanand', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/cargill-gandhidham', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/bunge-gandhidham', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/vyara-tiles-gangad', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/motherson-marelli-sanand', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/skf-ahmedabad', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/sarhad-dairy-bhuj', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/pgp-glass-dahej', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/agro-tech-ankleshwar', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/rotomotive-anand', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/rajhans-nutriments-surat', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/fuji-silvertech-ahmedabad', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/aishwarya-dyeing-surat', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/narmada-biochem-dahej', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/bc-foods-mahua', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/edkem-pharma-ahmedabad', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/makson-pharma-surendranagar', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/infocity-club-gandhinagar', changefreq: 'monthly', priority: '0.6' },
    { loc: '/resources/project-gallery/agrawal-metal-vithlapur', changefreq: 'monthly', priority: '0.6' },
    
    // SEO Authority Pages
    { loc: '/best-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/industrial-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/insulated-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/leading-puf-panel-company-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/premium-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-company-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-suppliers-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panels-manufacturer-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/sandwich-puf-panel-manufacturer-in-india', changefreq: 'monthly', priority: '0.8' },
    
    // City Landing Pages
    { loc: '/puf-panel-manufacturer-in-surat', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-vadodara', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-rajkot', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-jamnagar', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-vapi', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-dholera', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-pune', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-nagpur', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-nashik', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-thane', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-mumbai', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-kolhapur', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-manufacturer-in-chhatrapati-sambhajinagar', changefreq: 'monthly', priority: '0.8' },
    
    // Legal
    { loc: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
    { loc: '/return-policy', changefreq: 'yearly', priority: '0.3' },
    { loc: '/business-terms', changefreq: 'yearly', priority: '0.3' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${coreUrls.map(url => `  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}

