import { MetadataRoute } from 'next';
import { products, locations } from '@/lib/landing-page-data';

/**
 * Main Sitemap Generator
 * Generates a comprehensive sitemap with all URLs
 */

const baseUrl = 'https://phoenixxsmartbuild.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  
  // ============================================
  // CORE PAGES - Brand, Products, Solutions
  // ============================================
  const corePages: MetadataRoute.Sitemap = [
    // Main
    { url: `${baseUrl}/`, lastModified: today, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/about-us`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/get-a-quote`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/clientele`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/career`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/become-partner`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    
    // Products Main
    { url: `${baseUrl}/products`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    
    // Sandwich Panels
    { url: `${baseUrl}/products/sandwich-panels`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/sandwich-panels/sandwich-puf-panel`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products/sandwich-panels/roofing-puf-panel`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products/sandwich-panels/pir-panel`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products/sandwich-panels/rockwool-panel`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/products/sandwich-panels/wall-ceiling-panel`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    
    // Doors
    { url: `${baseUrl}/products/doors`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/doors/cleanroom-door`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/doors/fire-door-emergency-exit`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/doors/fire-rated-multipurpose-door`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    
    // Cleanroom Solutions
    { url: `${baseUrl}/products/cleanroom-solutions`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/products/cleanroom-solutions/cleanroom-partition`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/cleanroom-solutions/cleanroom-doors`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/cleanroom-solutions/cleanroom-false-ceiling`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/products/cleanroom-solutions/cleanroom-flooring`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    
    // Solutions
    { url: `${baseUrl}/solutions`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/solutions/peb`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/walkable-ceiling-systems`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/solutions/non-walkable-ceiling-systems`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/solutions/partition-solutions`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/solutions/cold-storage-construction`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/solutions/prefab-house`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    
    // Industries
    { url: `${baseUrl}/industries`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industries/dairy`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/pharma-chemical`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/food-processing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/cold-chain`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/precision-engineering`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/hospitality`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/automobile`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/industries/agri-processing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    
    // Resources
    { url: `${baseUrl}/resources`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/blogs`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources/project-gallery`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/resources/technical-sheet`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/brochure`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/faq`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    
    // Blog Posts (all actual blog slugs)
    { url: `${baseUrl}/resources/blogs/rise-of-sustainable-peb-structures`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/optimizing-cold-storage-energy-efficiency`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/cleanroom-design-best-practices`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/choosing-right-insulated-panel`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/fire-safety-industrial-buildings`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/cold-chain-logistics-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/turnkey-epc-project-delivery`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/industrial-doors-selection-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/what-is-puf-panel-how-does-it-work`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/puf-panel-vs-traditional-roofing-sheets`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/how-puf-panels-reduce-energy-costs-factories`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/puf-panel-thickness-guide-industrial-buildings`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/puf-panels-cold-storage-pharma-applications`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/blogs/puf-vs-pir-vs-rockwool`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    
    // Project Gallery
    { url: `${baseUrl}/resources/project-gallery/pharma-cleanroom-pune`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/resources/project-gallery/cold-storage-mumbai`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    
    // SEO Authority Pages
    { url: `${baseUrl}/best-puf-panel-manufacturer-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/industrial-puf-panel-manufacturer-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/insulated-puf-panel-manufacturer-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/leading-puf-panel-company-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/premium-puf-panel-manufacturer-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-company-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-suppliers-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panels-manufacturer-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/sandwich-puf-panel-manufacturer-in-india`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    
    // Ahmedabad Pages (Company Headquarters - High Priority)
    { url: `${baseUrl}/puf-panel-manufacturer-in-ahmedabad`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/sandwich-puf-panel-in-ahmedabad`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/roofing-puf-panel-in-ahmedabad`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/rockwool-panel-in-ahmedabad`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/pir-panel-in-ahmedabad`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/fm-approved-panel-in-ahmedabad`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    
    // Ahmedabad Blog Posts
    { url: `${baseUrl}/resources/blogs/puf-panel-manufacturers-in-ahmedabad`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/blogs/cold-storage-panel-manufacturers-ahmedabad`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/resources/blogs/cleanroom-panel-solutions-ahmedabad-pharma`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/resources/blogs/puf-panel-price-ahmedabad-2025-guide`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources/blogs/industrial-roofing-solutions-ahmedabad-gidc`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/resources/blogs/puf-vs-pir-vs-rockwool-ahmedabad-climate`, lastModified: today, changeFrequency: 'monthly', priority: 0.75 },
    
    // City Landing Pages
    { url: `${baseUrl}/puf-panel-manufacturer-in-surat`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-vadodara`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-rajkot`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-jamnagar`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-vapi`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-dholera`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-pune`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-nagpur`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-nashik`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-thane`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-mumbai`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-kolhapur`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/puf-panel-manufacturer-in-chhatrapati-sambhajinagar`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    
    // Shop Pages
    { url: `${baseUrl}/shop`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/sandwich-puf-panel`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/roofing-puf-panel`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/pir-panel`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/rockwool-panel`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/wall-ceiling-panel`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/fm-approved-panel`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/cleanroom-door`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/fire-door-emergency-exit`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/fire-rated-multipurpose-door`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/cold-storage-door`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/hermetic-door`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/cleanroom-partition`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/cleanroom-false-ceiling`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/cleanroom-doors`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/shop/cleanroom-flooring`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    
    // Legal
    { url: `${baseUrl}/privacy-policy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/return-policy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/business-terms`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
  ];
  
  // ============================================
  // GEO PAGES - Product + Location
  // ============================================
  const geoPages: MetadataRoute.Sitemap = [];
  Object.keys(products).forEach(productSlug => {
    Object.keys(locations).forEach(locationSlug => {
      geoPages.push({
        url: `${baseUrl}/${productSlug}-in-${locationSlug}`,
        lastModified: today,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  return [...corePages, ...geoPages];
}
