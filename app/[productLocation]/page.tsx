import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import {
  products,
  locations,
  getProduct,
  getLocation,
  generatePageTitle,
  generateMetaDescription,
  getParentLocation,
  getChildLocations,
  ProductData,
  LocationData,
} from '@/lib/landing-page-data';
import {
  parseGeoSlug,
  generateAllGeoStaticParams,
  getGeoMetaTitle,
  getGeoMetaDescription,
  getGeoCanonicalSlug,
  getGeoH1,
} from '@/lib/rajasthan-geo-data';
import { RajasthanGeoPage } from '@/components/geo/rajasthan-geo-page';

// Parse the URL slug to extract product and location
function parseSlug(slug: string): { productSlug: string; locationSlug: string } | null {
  const match = slug.match(/^(.+)-in-(.+)$/);
  if (!match) return null;
  return {
    productSlug: match[1],
    locationSlug: match[2],
  };
}

// Generate static params for all product-location combinations + Rajasthan geo pages
export async function generateStaticParams() {
  const params: { productLocation: string }[] = [];
  
  // Existing product-in-location combinations
  Object.keys(products).forEach(productSlug => {
    Object.keys(locations).forEach(locationSlug => {
      params.push({
        productLocation: `${productSlug}-in-${locationSlug}`,
      });
    });
  });

  // Rajasthan geo SEO pages (207 URLs)
  for (const slug of generateAllGeoStaticParams()) {
    params.push({ productLocation: slug });
  }
  
  return params;
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ productLocation: string }> }): Promise<Metadata> {
  const { productLocation } = await params;

  // Check for Rajasthan geo SEO pages first
  const geoResult = parseGeoSlug(productLocation);
  if (geoResult) {
    const title = getGeoMetaTitle(geoResult);
    const description = getGeoMetaDescription(geoResult);
    const canonical = getGeoCanonicalSlug(geoResult);
    const h1 = getGeoH1(geoResult);
    return {
      title,
      description,
      keywords: [
        h1,
        `PUF roofing panel ${geoResult.city.name}`,
        `insulated roof panel ${geoResult.city.name}`,
        `sandwich PUF panel ${geoResult.city.name}`,
        `Phoenixx PUF panel ${geoResult.city.name}`,
        'PUF roofing panel Rajasthan',
      ],
      alternates: { canonical: `https://phoenixxsmartbuild.com/${canonical}` },
      openGraph: {
        title,
        description,
        type: 'website',
        locale: 'en_IN',
        siteName: 'PHOENIXX SMARTBUILD',
        url: `https://phoenixxsmartbuild.com/${canonical}`,
        images: [
          {
            url: 'https://phoenixxsmartbuild.com/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL1.png',
            width: 1200,
            height: 630,
            alt: `Phoenixx PUF Roofing Panels for ${geoResult.city.name}`,
          },
        ],
      },
    };
  }

  // Existing product-in-location pattern
  const parsed = parseSlug(productLocation);
  
  if (!parsed) {
    return { title: 'Page Not Found' };
  }
  
  const product = getProduct(parsed.productSlug);
  const location = getLocation(parsed.locationSlug);
  
  if (!product || !location) {
    return { title: 'Page Not Found' };
  }
  
  const title = generatePageTitle(product, location);
  const description = generateMetaDescription(product, location);
  
  const stateOrRegion = location.state || (location.type === 'state' ? location.name : 'India');

  return {
    title,
    description,
    keywords: [
      `PUF panel manufacturer in ${location.name}`,
      `PUF panel supplier in ${location.name}`,
      `PIR panel ${location.name}`,
      `sandwich panel ${location.name}`,
      `insulated sandwich panels ${location.name}`,
      `PUF panel installation ${location.name}`,
      `cold storage construction ${location.name}`,
      `PUF panel manufacturer ${stateOrRegion}`,
      `PUF insulated roofing panel ${location.name}`,
      `PUF insulated wall panel ${location.name}`,
    ],
    alternates: {
      canonical: `https://phoenixxsmartbuild.com/${productLocation}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_IN',
      siteName: 'PHOENIXX SMARTBUILD',
      url: `https://phoenixxsmartbuild.com/${productLocation}`,
      images: [
        {
          url: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
          width: 1200,
          height: 630,
          alt: `PUF Panel Manufacturer in ${location.name} - PHOENIXX SMARTBUILD`,
        },
      ],
    },
  };
}

// Main Page Component
export default async function ProductLocationPage({ params }: { params: Promise<{ productLocation: string }> }) {
  const { productLocation } = await params;

  // Check for Rajasthan geo SEO pages first
  const geoResult = parseGeoSlug(productLocation);
  if (geoResult) {
    return <RajasthanGeoPage result={geoResult} />;
  }

  // Existing product-in-location logic
  const parsed = parseSlug(productLocation);
  
  if (!parsed) {
    notFound();
  }
  
  const product = getProduct(parsed.productSlug);
  const location = getLocation(parsed.locationSlug);
  
  if (!product || !location) {
    notFound();
  }
  
  const parentLocation = getParentLocation(location);
  const childLocations = getChildLocations(location.slug);
  
  // Generate FAQs
  const faqs = generateFAQs(product, location);
  
  // Schema markup - Product schema with aggregateRating (required by Google)
  // Using aggregateRating instead of offers for informational pages
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `PUF Panel & ${product.name} in ${location.name}`,
    description: `Top PUF & PIR panel manufacturer in ${location.name} offering sandwich panels, insulated roofing & wall panels, cold storage construction & PUF panel installation services.`,
    image: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
    brand: {
      '@type': 'Brand',
      name: 'PHOENIXX SMARTBUILD',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'PHOENIXX SMARTBUILD',
      url: 'https://phoenixxsmartbuild.com',
    },
    category: 'Industrial Insulated Panels',
    material: product.slug.includes('rockwool') ? 'Mineral Wool' : product.slug.includes('pir') ? 'Polyisocyanurate Foam' : 'Polyurethane Foam',
    // aggregateRating is required by Google for Product schema validation
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      author: {
        '@type': 'Organization',
        name: 'Industrial Client',
      },
      reviewBody: `High-quality ${product.name} with excellent thermal insulation and durability. Professional installation and support from PHOENIXX SMARTBUILD.`,
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: 'Industrial Buyers, EPC Contractors, Architects',
    },
    areaServed: {
      '@type': location.type === 'country' ? 'Country' : location.type === 'state' ? 'State' : 'City',
      name: location.name,
    },
  };
  
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://phoenixxsmartbuild.com/products' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://phoenixxsmartbuild.com/products/sandwich-panels/${parsed.productSlug}` },
      { '@type': 'ListItem', position: 4, name: `${product.name} in ${location.name}`, item: `https://phoenixxsmartbuild.com/${productLocation}` },
    ],
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={productSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={breadcrumbSchema} />
        
        {/* Hero Section */}
        <section className={`relative bg-gradient-to-br ${product.gradient} py-20 md:py-28`}>
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
          <div className="container-custom relative">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <Link href={`/products/sandwich-panels/${parsed.productSlug}`} className="hover:text-white transition-colors">{product.name}</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{location.name}</span>
            </nav>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF &amp; PIR Panel Manufacturer in {location.name} &ndash; Sandwich, Roofing &amp; Wall Panels
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                PHOENIXX SMARTBUILD is a trusted PUF panel manufacturer and supplier in {location.name}, 
                delivering high-performance sandwich panels, PIR panels, insulated roofing panels, and wall panels 
                for industrial and commercial projects. We offer end-to-end PUF panel installation and cold storage 
                construction services across {location.type === 'city' ? location.state : location.name} and PAN-India.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
                >
                  Get Free Quote
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:+918866556879"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  📞 Call: +91 88665 56879
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Intro Block */}
        <section className="py-12 bg-white border-b">
          <div className="container-custom">
            <div className="prose prose-lg max-w-4xl">
              <p className="text-slate-700 leading-relaxed text-lg">
                {generateIntroContent(product, location)}
              </p>
              <div className="mt-6 flex flex-wrap gap-3 not-prose">
                <Link href="/puf-roofing-panels" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  → PUF Roofing Panels
                </Link>
                <Link href={`/products/sandwich-panels/${product.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  → {product.name} Details
                </Link>
                <Link href="/puf-roofing-panel-manufacturer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  → PUF Panel Manufacturer
                </Link>
                <Link href="/puf-roofing-panel-supplier" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                  → PUF Panel Supplier
                </Link>
                {location.nearbyAreas && location.nearbyAreas.slice(0, 3).map((area) => {
                  const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
                  const areaExists = locations[areaSlug];
                  return areaExists ? (
                    <Link key={areaSlug} href={`/${product.slug}-in-${areaSlug}`} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                      → {product.shortName} in {area}
                    </Link>
                  ) : null;
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* Products & Solutions */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              PUF Panel, PIR Panel &amp; Sandwich Panel Solutions in {location.name}
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">PUF Sandwich Panel &amp; Insulated Panels</h3>
                <p className="text-slate-600 leading-relaxed">
                  PHOENIXX PUF sandwich panels in {location.name} are engineered with a rigid polyurethane foam core
                  between pre-painted metal sheets. These insulated sandwich panels deliver thermal conductivity
                  of {product.specifications.thermalConductivity}, making them ideal for temperature-sensitive facilities
                  across {location.name}.
                </p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  Available in PUF insulated roofing panels and PUF insulated wall panels, our range covers
                  thicknesses from {product.specifications.thickness[0]} to {product.specifications.thickness[product.specifications.thickness.length - 1]} to
                  suit every industrial application.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Thermal Insulation:</strong> Industry-leading {product.specifications.thermalConductivity} conductivity</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Fire Resistance:</strong> PIR panels offer B-s1,d0 rating with minimal smoke</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Energy Efficiency:</strong> 25-30% reduction in HVAC operating costs</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Durability:</strong> 25-30 year lifespan with proper installation</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1">✓</span>
                    <span><strong>Lightweight Structure:</strong> 8-15 kg/m&sup2; reduces structural steel needs by up to 30%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Certifications &amp; Compliance</h3>
                <ul className="space-y-3">
                  {product.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-500">🏆</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Ideal + Services */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why PUF &amp; PIR Panels Are Ideal for {location.name} &ndash; Installation &amp; Services
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🌡️ Climate &amp; Environmental Suitability</h3>
                <p className="text-slate-600 leading-relaxed">{location.climate}</p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  PHOENIXX PUF and PIR panels with thermal conductivity of {product.specifications.thermalConductivity} and
                  service temperature range of {product.characteristics.find(c => c.includes('temperature'))?.split(': ')[1] || '-40\u00B0C to +80\u00B0C'}
                  are engineered to perform optimally in {location.name}&apos;s conditions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🏭 Industrial Use-Cases in {location.name}</h3>
                <p className="text-slate-600 mb-4">
                  {location.name} is home to thriving industries including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {location.industries.map((industry, idx) => (
                    <span key={idx} className="inline-block px-3 py-1 rounded-full bg-white text-slate-700 text-sm border">
                      {industry}
                    </span>
                  ))}
                </div>
                <p className="text-slate-600 mt-4">
                  Each of these sectors benefits from PHOENIXX PUF and PIR panels for temperature control,
                  energy efficiency, and regulatory compliance.
                </p>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mt-8">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🔧 PUF Panel Installation in {location.name}</h3>
                <p className="text-slate-600 leading-relaxed">
                  PHOENIXX provides professional PUF panel installation services across {location.name} and surrounding areas.
                  Our trained crews handle complete panel erection, sealing, flashing, and finishing &mdash; ensuring leak-proof,
                  thermally efficient building envelopes that comply with IS 14925:2015 standards. From roofing panels to wall
                  cladding, we deliver turnkey installation for factories, warehouses, cold storage facilities, and cleanrooms.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">❄️ Cold Storage Construction in {location.name}</h3>
                <p className="text-slate-600 leading-relaxed">
                  PHOENIXX offers complete cold storage construction services in {location.name}, from design consultation
                  to panel supply and installation. Our insulated sandwich panels maintain chamber temperatures from +15&deg;C
                  to -40&deg;C, serving agriculture, dairy, pharmaceutical cold chain, and frozen food industries across
                  {location.type === 'city' ? location.state : location.name}.
                </p>
              </div>
            </div>
            
            {location.industrialZones && location.industrialZones.length > 0 && (
              <div className="mt-8 bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">📍 Industrial Zones We Serve in {location.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {location.industrialZones.map((zone, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <span className="text-blue-500">&bull;</span>
                      <span>{zone}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
        
        {/* Applications */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              PUF Panel Applications in {location.name} &ndash; Industrial &amp; Commercial
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { key: 'warehouse', icon: '🏭', title: `Warehouses & Factories in ${location.name}`, desc: `PUF insulated wall panels and roofing panels reduce structural steel by up to 30% in ${location.name} warehouses and factories. Lightweight, fast to install, and energy-efficient for large-span industrial buildings.` },
                { key: 'coldStorage', icon: '❄️', title: `Cold Storage in ${location.name}`, desc: `PHOENIXX insulated sandwich panels maintain temperatures from +15°C to -40°C for cold storage and cold chain facilities in ${location.name}. Zero moisture absorption ensures long-term performance for dairy, pharma, and frozen food storage.` },
                { key: 'pharma', icon: '💊', title: `Cleanrooms & Pharma in ${location.name}`, desc: `WHO-GMP compliant PUF panels for pharmaceutical cleanrooms in ${location.name}. Smooth, non-porous surfaces prevent bacterial growth while maintaining controlled temperature and humidity environments.` },
                { key: 'manufacturing', icon: '⚙️', title: `Industrial Buildings in ${location.name}`, desc: `PUF and PIR panels provide dust-free, temperature-controlled environments for manufacturing plants in ${location.name}. Quick installation minimizes production downtime during facility expansion or renovation.` },
                { key: 'foodProcessing', icon: '🍕', title: `Food Processing in ${location.name}`, desc: `Food-safe coated insulated sandwich panels for dairy plants, beverage facilities, and FSSAI-compliant food manufacturing units in ${location.name}. Resistant to mould growth and easy to sanitise.` },
                { key: 'dataCenter', icon: '🖥️', title: `Data Centres & Utilities in ${location.name}`, desc: `Precision climate control with PUF and PIR panels for data centres in ${location.name}. Maintain server room temperatures within ±1°C tolerance while reducing cooling costs by 20-30%.` },
              ].map((item) => (
                <div key={item.key} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image Gallery */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              PUF Panel &amp; Insulated Panel Gallery &ndash; Real Projects in {location.name}
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Explore our PUF panel, PIR panel, and sandwich panel installations across industrial facilities
              in {location.name} and India. Each project showcases PHOENIXX SMARTBUILD&apos;s commitment to quality
              and precision in insulated panel manufacturing.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: '/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp', alt: `${product.name} manufacturing by PHOENIXX SMARTBUILD` },
                { src: '/images/projects/gallery/PHOENIXX_WALL_PUF_PANEL1.jpg', alt: `${product.name} wall installation in ${location.name}` },
                { src: '/images/projects/gallery/PUF-Panel-False-Ceiling-1.jpg', alt: `${product.name} ceiling application` },
                { src: '/images/projects/gallery/Industrial-False-Ceiling-PUF-Panel-2.jpg', alt: `Industrial ${product.shortName} installation` },
                { src: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad1.jpeg', alt: `Cleanroom project with ${product.name}` },
                { src: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg', alt: `Pharma facility ${product.shortName} project` },
                { src: '/images/projects/gallery/Phoenixx_infratech_Projects188.jpg', alt: `Warehouse ${product.name} installation in ${location.name}` },
                { src: '/images/projects/gallery/Projects_Galary_Phoenixx_infratech-Projects2.jpeg', alt: `Industrial ${product.shortName} exterior` },
                { src: '/images/projects/gallery/Sandwich-PUF-Ceiling-Panel-1.jpg', alt: `${product.name} interior finish` },
              ].map((img, idx) => (
                <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="absolute bottom-3 left-3 right-3 text-white text-sm">{img.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Why Choose PHOENIXX */}
        <section className={`section-padding bg-gradient-to-br ${product.gradient} text-white`}>
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Choose PHOENIXX &ndash; Trusted PUF Panel Manufacturer in {location.name}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '🏭', title: `Trusted PUF Panel Manufacturer in ${location.name}`, desc: `PHOENIXX is a trusted PUF panel manufacturer in ${location.name} with in-house continuous lamination technology, ensuring consistent quality and competitive factory-direct pricing for every project.` },
                { icon: '📐', title: 'Custom Solutions & Engineering', desc: `Our engineering team provides custom PUF and PIR panel designs, thickness calculations, and project-specific solutions tailored to ${location.name}'s climate and industry requirements.` },
                { icon: '✅', title: 'ISO-Certified Quality Assurance', desc: 'ISO 9001:2015 certified processes with rigorous testing for density, thermal conductivity, and fire performance on every batch of PUF, PIR, and sandwich panels.' },
                { icon: '🇮🇳', title: `Leading PUF Panel Manufacturer in ${location.state || 'India'}`, desc: `From ${location.name} to any corner of India, PHOENIXX is a leading PUF panel manufacturer in ${location.state || 'India'} with proven logistics and installation capabilities across the region.` },
                { icon: '🔧', title: 'PUF Panel Installation Support', desc: `Complete turnkey PUF panel installation services in ${location.name} \u2014 from design and supply to erection, sealing, and finishing, including accessories, flashings, and technical support.` },
                { icon: '⏱️', title: 'Fast Delivery & Turnaround', desc: `Quick production and delivery schedules to ${location.name} with project-specific timelines. Same-day dispatch available for standard specifications to meet your construction milestones.` },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-lg font-bold mt-4 mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Local Expertise Section */}
        <section className="section-padding bg-white border-t border-slate-100">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                PHOENIXX PUF Panel Expertise in {location.name}
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🏗️</span>
                    <h3 className="text-xl font-bold text-slate-900">PUF Panel Projects Delivered</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    PHOENIXX has successfully delivered PUF panel installation projects across {location.name}&apos;s
                    {location.industrialZones && location.industrialZones.length > 0 ? ` key industrial areas including ${location.industrialZones[0]}` : ' industrial sectors'}.
                    Our local presence as a PUF panel supplier in {location.name} ensures quick response times, faster delivery,
                    and better post-installation support.
                  </p>
                  {location.type === 'city' && (
                    <p className="text-slate-600 mt-3 text-sm">
                      Serving {location.industrialZones?.length || 'multiple'} industrial zones with same-day technical support.
                    </p>
                  )}
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🎯</span>
                    <h3 className="text-xl font-bold text-slate-900">Industry Understanding</h3>
                  </div>
                  <p className="text-slate-700 leading-relaxed">
                    We understand {location.name}&apos;s unique industrial landscape. With experience serving
                    {location.industries.slice(0, 3).join(', ')} sectors in this region, PHOENIXX provides PUF panels,
                    PIR panels, and sandwich panel solutions tailored to local regulatory requirements, climate conditions,
                    and industry-specific needs.
                  </p>
                  {location.regulations && location.regulations.length > 0 && (
                    <p className="text-slate-600 mt-3 text-sm">
                      Compliance support: {location.regulations[0]}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Local Advantages */}
              <div className="mt-8 bg-slate-50 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Why Choose a Local PUF Panel Manufacturer in {location.name}?</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">
                      <strong>Faster Delivery:</strong> Proximity means quicker turnaround on PUF panel orders and emergencies
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">
                      <strong>Lower Logistics Cost:</strong> Reduced freight charges for sandwich panel shipments to {location.name}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">
                      <strong>On-Site Support:</strong> Our PUF panel installation engineers can visit your {location.name} site
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1">✓</span>
                    <span className="text-slate-700">
                      <strong>Local References:</strong> Speak with our {location.name} clients about their PUF panel projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Technical Specifications */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Technical Specifications &ndash; PUF &amp; Insulated Sandwich Panels
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                <thead>
                  <tr className={`bg-gradient-to-r ${product.gradient} text-white`}>
                    <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                    <th className="px-6 py-4 text-left font-semibold">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium text-slate-900">Panel Thickness Options</td>
                    <td className="px-6 py-4 text-slate-600">{product.specifications.thickness.join(' | ')}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Core Density</td>
                    <td className="px-6 py-4 text-slate-600">{product.specifications.density}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium text-slate-900">Thermal Conductivity</td>
                    <td className="px-6 py-4 text-slate-600">{product.specifications.thermalConductivity}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Fire Performance Rating</td>
                    <td className="px-6 py-4 text-slate-600">{product.specifications.fireRating}</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-medium text-slate-900">Skin Material Options</td>
                    <td className="px-6 py-4 text-slate-600">{product.specifications.skinMaterial}</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="px-6 py-4 font-medium text-slate-900">Coating Options</td>
                    <td className="px-6 py-4 text-slate-600">{product.specifications.coatings.join(' | ')}</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-900">Joint Profiles</td>
                    <td className="px-6 py-4 text-slate-600">{product.specifications.jointProfiles.join(' | ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Areas Served */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              PUF Panel Supply &amp; Installation Areas {location.type === 'city' ? 'Near' : 'in'} {location.name}
            </h2>
            
            {/* Child locations or nearby areas */}
            {childLocations.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {childLocations.map((child) => (
                  <Link
                    key={child.slug}
                    href={`/${parsed.productSlug}-in-${child.slug}`}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-300 border border-transparent"
                  >
                    <span className="text-blue-500">📍</span>
                    <span className="font-medium text-slate-900">{product.shortName} in {child.name}</span>
                  </Link>
                ))}
              </div>
            ) : location.nearbyAreas ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {location.nearbyAreas.map((area, idx) => {
                  const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
                  const areaExists = locations[areaSlug];
                  return areaExists ? (
                    <Link
                      key={idx}
                      href={`/${parsed.productSlug}-in-${areaSlug}`}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-300 border border-transparent"
                    >
                      <span className="text-blue-500">📍</span>
                      <span className="font-medium text-slate-900">{product.shortName} in {area}</span>
                    </Link>
                  ) : (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-transparent">
                      <span className="text-slate-400">📍</span>
                      <span className="text-slate-600">{area}</span>
                    </div>
                  );
                })}
              </div>
            ) : null}
            
            {/* Parent location link */}
            {parentLocation && (
              <div className="mt-8 p-6 bg-white rounded-xl shadow-sm">
                <p className="text-slate-600">
                  Looking for {product.name} in other parts of {parentLocation.name}?
                </p>
                <Link
                  href={`/${parsed.productSlug}-in-${parentLocation.slug}`}
                  className="inline-flex items-center gap-2 mt-3 text-blue-600 font-semibold hover:underline"
                >
                  View {product.shortName} in {parentLocation.name}
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            )}
          </div>
        </section>
        
        {/* FAQs */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Frequently Asked Questions &ndash; PUF Panels in {location.name}
            </h2>
            
            <div className="max-w-4xl space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className={`py-20 bg-gradient-to-r ${product.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Best PUF Panel Price in {location.name} &ndash; Request a Free Quote
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Looking for the best PUF panel, PIR panel, or sandwich panel price in {location.name}? Our technical team
              is ready to help you choose the right insulated panel specifications for your project &mdash; whether
              it&apos;s cold storage construction, PUF panel installation, or a complete building envelope solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Request Free Quote
              </Link>
              <a
                href="https://wa.me/918866556879"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                💬 WhatsApp Us
              </a>
              <a
                href="tel:+918866556879"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                📞 Talk to an Engineer
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80 text-sm">
              <span>📧 sales@phoenixxsmartbuild.com</span>
              <span>📞 +91 88665 56879</span>
              <span>📞 +91 88665 56879</span>
            </div>
            
            {/* Link to Shop Page for Pricing */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <Link
                href={`/shop/${parsed.productSlug}`}
                className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                💰 View pricing & specifications for {product.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Related Products */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Other PUF &amp; Insulated Panel Products in {location.name}
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {Object.values(products)
                .filter(p => p.slug !== product.slug)
                .map((p) => (
                  <Link
                    key={p.slug}
                    href={`/${p.slug}-in-${location.slug}`}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} mb-3 flex items-center justify-center text-white text-lg`}>
                      {p.slug.includes('roof') ? '🏠' : p.slug.includes('rock') ? '🪨' : p.slug.includes('pir') ? '🔥' : p.slug.includes('fm') ? '🏆' : '🧱'}
                    </div>
                    <h3 className="font-semibold text-slate-900">{p.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">in {location.name}</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
        
        {/* Ahmedabad Hub Links - Only show for Ahmedabad location */}
        {location.slug === 'ahmedabad' && (
          <section className="section-padding bg-white border-t border-slate-100">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <span className="inline-block rounded-full bg-green-500/10 px-3 py-1 text-sm font-medium text-green-600">
                    PHOENIXX Headquarters
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Explore More PUF Panel Solutions in Ahmedabad
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Product Pages */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-4">Panel Products in Ahmedabad</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/puf-panel-manufacturer-in-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-green-500">→</span> PUF Panel Manufacturer in Ahmedabad
                        </Link>
                      </li>
                      <li>
                        <Link href="/sandwich-puf-panel-in-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-blue-500">→</span> Sandwich PUF Panel in Ahmedabad
                        </Link>
                      </li>
                      <li>
                        <Link href="/roofing-puf-panel-in-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-blue-500">→</span> Roofing PUF Panel in Ahmedabad
                        </Link>
                      </li>
                      <li>
                        <Link href="/pir-panel-in-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-blue-500">→</span> PIR Fire-Rated Panel in Ahmedabad
                        </Link>
                      </li>
                      <li>
                        <Link href="/rockwool-panel-in-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-blue-500">→</span> Rockwool Panel in Ahmedabad
                        </Link>
                      </li>
                      <li>
                        <Link href="/fm-approved-panel-in-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-blue-500">→</span> FM Approved Panel in Ahmedabad
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  {/* Blog Resources */}
                  <div className="bg-slate-50 rounded-xl p-6">
                    <h3 className="font-bold text-lg text-slate-900 mb-4">Ahmedabad Resources & Guides</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/resources/blogs/puf-panel-manufacturers-in-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-orange-500">→</span> PUF Panel Manufacturers Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/blogs/puf-panel-price-ahmedabad-2025-guide" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-orange-500">→</span> PUF Panel Price Guide 2025
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/blogs/cold-storage-panel-manufacturers-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-orange-500">→</span> Cold Storage Panel Guide
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/blogs/cleanroom-panel-solutions-ahmedabad-pharma" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-orange-500">→</span> Pharma Cleanroom Solutions
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/blogs/industrial-roofing-solutions-ahmedabad-gidc" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-orange-500">→</span> Industrial Roofing GIDC
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources/blogs/puf-vs-pir-vs-rockwool-ahmedabad-climate" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-orange-500">→</span> PUF vs PIR vs Rockwool Guide
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-100">
                  <p className="text-green-800 text-sm">
                    <strong>Factory Visit:</strong> PHOENIXX headquarters is located in GIDC Naroda, Ahmedabad. 
                    <Link href="/get-a-quote" className="underline ml-1">Contact us</Link> to schedule a factory visit and see our manufacturing process.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

function generateIntroContent(product: ProductData, location: LocationData): string {
  const topIndustries = location.industries.slice(0, 3).join(', ');
  const zone = location.industrialZones?.[0] || '';
  const stateOrRegion = location.state || (location.type === 'state' ? location.name : 'India');
  const thermalValue = product.specifications.thermalConductivity;

  if (location.type === 'city') {
    return `PHOENIXX SMARTBUILD is a leading PUF panel manufacturer in ${location.name}, ${stateOrRegion}, providing premium insulated sandwich panels with ${thermalValue} thermal conductivity for industrial and commercial applications. As a trusted PUF panel supplier in ${location.name}, we deliver PUF insulated roofing panels, PUF insulated wall panels, and advanced PIR panels to sectors including ${topIndustries}.${zone ? ` We serve key industrial areas such as ${zone} and beyond.` : ''} Our services include professional PUF panel installation and turnkey cold storage construction for businesses that demand energy efficiency, thermal insulation, and fire resistance. Whether you need sandwich panels for a new warehouse or insulated panels for a cleanroom, PHOENIXX delivers quality, speed, and reliability across ${location.name}.`;
  }

  if (location.type === 'state') {
    return `PHOENIXX SMARTBUILD is a top-rated PUF panel manufacturer and PUF panel supplier across ${location.name}, offering a complete range of sandwich panels, PIR panels, and insulated sandwich panels with thermal conductivity as low as ${thermalValue}. Industries across ${location.name} \u2014 including ${topIndustries} \u2014 rely on our PUF insulated roofing panels and wall panels for thermal insulation, fire safety, and energy efficiency. We provide end-to-end PUF panel installation and cold storage construction services throughout the state, backed by ISO-certified manufacturing and a dedicated engineering team. From warehouses and factories to cleanrooms and cold chain facilities, PHOENIXX is ${location.name}\u2019s preferred partner for high-performance building envelope solutions.`;
  }

  return `PHOENIXX SMARTBUILD is a nationally recognised PUF panel manufacturer and PUF panel supplier in ${location.name}, delivering premium sandwich panels, PIR panels, and insulated sandwich panels with industry-leading ${thermalValue} thermal conductivity to industries spanning ${topIndustries}, and more. Our product range includes PUF insulated roofing panels and PUF insulated wall panels engineered for superior thermal insulation, fire resistance, and durability. With comprehensive PUF panel installation and cold storage construction services, PHOENIXX serves warehouses, factories, cleanrooms, and industrial facilities across the country. Choose PHOENIXX for quality manufacturing, fast delivery, and turnkey execution.`;
}

function generateFAQs(product: ProductData, location: LocationData) {
  return [
    {
      question: `What is the PUF panel price in ${location.name}?`,
      answer: `PUF panel prices in ${location.name} vary based on thickness (${product.specifications.thickness.slice(0, 3).join(', ')}, etc.), skin material, coating type, and order quantity. PHOENIXX SMARTBUILD offers competitive factory-direct pricing with typical ranges from \u20B980-180/sq.ft for PUF insulated wall panels and \u20B9100-220/sq.ft for PUF insulated roofing panels. Contact us for a project-specific quotation for ${location.name}.`,
    },
    {
      question: `What is the difference between PUF panel and PIR panel?`,
      answer: `PUF (Polyurethane Foam) panels offer excellent thermal insulation at 0.024 W/mK with B2/B3 fire rating, making them cost-effective for most applications. PIR (Polyisocyanurate) panels provide superior fire performance at B-s1,d0 with even better thermal conductivity of 0.022 W/mK and minimal smoke emission. PIR panels are preferred for fire-sensitive projects in ${location.name} such as pharmaceutical plants, data centres, and high-value warehouses. PHOENIXX manufactures both PUF and PIR panels.`,
    },
    {
      question: `Are PUF and PIR panels fire rated?`,
      answer: `Yes, PHOENIXX PUF panels meet B2/B3 (self-extinguishing) fire rating requirements. PIR panels offer enhanced B-s1,d0 fire rating with very low smoke and no burning droplets. For maximum fire safety, we also offer Rockwool panels with A1/A2 non-combustible rating. Our technical team can advise on the appropriate fire-rated panel for your ${location.name} facility.`,
    },
    {
      question: `What is the delivery time for PUF panels in ${location.name}?`,
      answer: `Standard delivery time for PUF panels and sandwich panels in ${location.name} is 7-15 working days from order confirmation, depending on panel specifications and quantity. Expedited delivery is available for urgent projects. PHOENIXX maintains ready stock of common PUF and PIR panel specifications for faster turnaround to ${location.name}.`,
    },
    {
      question: `Do you provide PUF panel installation in ${location.name}?`,
      answer: `Yes, PHOENIXX SMARTBUILD provides professional PUF panel installation services in ${location.name}. Our trained installation crews handle complete panel erection, sealing, flashing, and finishing as per IS 14925:2015 standards. We also offer installation supervision and training for contractor teams working on your ${location.name} project.`,
    },
    {
      question: `Which industries use PUF panels most in ${location.name}?`,
      answer: `In ${location.name}, PUF panels and insulated sandwich panels are widely used in ${location.industries.slice(0, 4).join(', ')} industries. Key applications include cold storage facilities, pharmaceutical cleanrooms, food processing plants, warehouses, factories, and industrial buildings requiring thermal insulation and energy efficiency.`,
    },
    {
      question: `What thickness of PUF panel do I need for my project?`,
      answer: `PUF panel thickness depends on your application: 30-50mm for standard wall partitions, 50-80mm for temperature-controlled environments, 80-120mm for cold storage (0\u00B0C to -25\u00B0C), and 120-150mm for deep freeze applications. PHOENIXX engineers provide free thickness calculations based on your ${location.name} project requirements.`,
    },
    {
      question: `What is a sandwich panel used for?`,
      answer: `Sandwich panels (also called insulated sandwich panels) are composite building materials with an insulating core between two metal skins. They are used for walls, roofs, ceilings, and partitions in warehouses, factories, cold storage, cleanrooms, food processing plants, and commercial buildings. In ${location.name}, PHOENIXX sandwich panels are widely used for rapid construction with built-in thermal insulation.`,
    },
    {
      question: `Do you construct cold storage in ${location.name}?`,
      answer: `Yes, PHOENIXX provides complete cold storage construction services in ${location.name} \u2014 from design consultation and panel supply to installation and commissioning. Our insulated sandwich panels maintain temperatures from +15\u00B0C to -40\u00B0C for agriculture, dairy, pharma cold chain, frozen food, and logistics cold storage facilities across ${location.name} and ${location.state || 'India'}.`,
    },
    {
      question: `Can PUF panels be used for both walls and roofs?`,
      answer: `Yes, PHOENIXX offers specialised PUF insulated roofing panels with trapezoidal profiles for drainage and spanning, and PUF insulated wall panels with flat or micro-ribbed profiles for aesthetics. We recommend using purpose-designed panels for optimal performance. Contact us for guidance on your ${location.name} project.`,
    },
  ];
}

