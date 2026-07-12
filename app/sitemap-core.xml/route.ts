import { NextResponse } from 'next/server';
import { getAllBlogSlugs } from '@/lib/blog-data';

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
    { loc: '/vendor-registration', changefreq: 'monthly', priority: '0.6' },
    { loc: '/sitemap-page', changefreq: 'monthly', priority: '0.4' },
    { loc: '/door-products-directory', changefreq: 'weekly', priority: '0.8' },
    { loc: '/lp/puf-panel-manufacturer-ahmedabad', changefreq: 'monthly', priority: '0.9' },
    
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
    { loc: '/solutions/cleanroom-solutions', changefreq: 'monthly', priority: '0.7' },
    { loc: '/sound-proof-room-ball-mill', changefreq: 'monthly', priority: '0.8' },
    
    // PUF Roofing Panel Core Pages (Rajasthan Geo SEO Hub)
    { loc: '/puf-roofing-panels', changefreq: 'monthly', priority: '0.9' },
    { loc: '/puf-roofing-panel-manufacturer', changefreq: 'monthly', priority: '0.9' },
    { loc: '/puf-roofing-panel-supplier', changefreq: 'monthly', priority: '0.9' },
    { loc: '/puf-roofing-panel-price', changefreq: 'monthly', priority: '0.9' },
    { loc: '/phoenixx-puf-roofing-panels', changefreq: 'monthly', priority: '0.9' },

    // SEO Authority Pages - High-Intent Question Pages
    { loc: '/best-puf-panel-for-industrial-shed', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-quality-sandwich-puf-panel', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-roofing-puf-panel-for-factory', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-puf-panel-brand-in-india', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-puf-panel-thickness-for-roofing', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-density-puf-panel-for-insulation', changefreq: 'monthly', priority: '0.8' },
    { loc: '/puf-panel-vs-rockwool-panel', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-puf-panel-for-cold-storage', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-puf-panel-for-clean-room', changefreq: 'monthly', priority: '0.8' },
    { loc: '/best-insulated-panel-for-warehouse', changefreq: 'monthly', priority: '0.8' },
    
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
    { loc: '/resources/glossary', changefreq: 'monthly', priority: '0.7' },
    { loc: '/certifications', changefreq: 'monthly', priority: '0.7' },
    { loc: '/export', changefreq: 'weekly', priority: '0.9' },
    
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
    { loc: '/top-puf-panel-manufacturers-in-india', changefreq: 'monthly', priority: '0.8' },
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
    { loc: '/puf-panel-manufacturer-in-ahmedabad', changefreq: 'monthly', priority: '0.8' },
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

  const blogUrls = getAllBlogSlugs().map(slug => ({
    loc: `/resources/blogs/${slug}`,
    changefreq: 'monthly',
    priority: '0.8',
  }));

  const allUrls = [...coreUrls, ...blogUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
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

