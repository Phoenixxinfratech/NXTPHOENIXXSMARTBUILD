import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound, permanentRedirect } from 'next/navigation';
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
  isPublishedGeoPage,
} from '@/lib/rajasthan-geo-data';
import {
  canonicalComboSlug,
  getPublishedCombos,
  getPublishedProductsFor,
  isPublishedCombo,
  FLAGSHIP_PRODUCT_SLUG,
} from '@/lib/geo-strategy';
import { RajasthanGeoPage } from '@/components/geo/rajasthan-geo-page';
import { RelatedResources } from '@/components/blocks/related-resources';
import { getRelatedLinksForGeoPage } from '@/lib/internal-links';

// Parse the URL slug to extract product and location
function parseSlug(slug: string): { productSlug: string; locationSlug: string } | null {
  const match = slug.match(/^(.+)-in-(.+)$/);
  if (!match) return null;
  return {
    productSlug: match[1],
    locationSlug: match[2],
  };
}

// Generate static params for every published product-location page + Rajasthan geo pages
export async function generateStaticParams() {
  const params: { productLocation: string }[] = [];

  for (const combo of getPublishedCombos()) {
    params.push({ productLocation: combo.slug });
  }

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
    if (!isPublishedGeoPage(geoResult)) {
      return { title: getGeoH1(geoResult), robots: { index: false, follow: true } };
    }
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

  // Collapsed combinations redirect in the page body; keep them out of the index.
  if (!isPublishedCombo(parsed.productSlug, parsed.locationSlug)) {
    return { title: product.name, robots: { index: false, follow: true } };
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
    // Synonym and near-duplicate variants fold into the page they duplicate.
    if (!isPublishedGeoPage(geoResult)) {
      permanentRedirect(`/${getGeoCanonicalSlug(geoResult)}`);
    }
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

  // Only locations with real local material carry a page per product. Everywhere
  // else the four secondary panels fold into the flagship page for that location.
  if (!isPublishedCombo(parsed.productSlug, parsed.locationSlug)) {
    permanentRedirect(`/${canonicalComboSlug(parsed.productSlug, parsed.locationSlug)}`);
  }
  
  const parentLocation = getParentLocation(location);
  const childLocations = getChildLocations(location.slug);

  // Cross-location links have to respect the same collapsing rule, otherwise
  // they point at URLs that only exist to redirect.
  const comboFor = (targetLocationSlug: string) => {
    const targetProductSlug = isPublishedCombo(parsed.productSlug, targetLocationSlug)
      ? parsed.productSlug
      : FLAGSHIP_PRODUCT_SLUG;
    return {
      href: `/${targetProductSlug}-in-${targetLocationSlug}`,
      shortName: products[targetProductSlug].shortName,
    };
  };
  const siblingProducts = getPublishedProductsFor(location.slug)
    .filter((slug) => slug !== product.slug)
    .map((slug) => products[slug]);
  
  // Generate FAQs
  const faqs = generateFAQs(product, location);
  
  // Product schema uses offers rather than ratings: pricing is quoted per project
  // and we do not collect on-page reviews, so review markup would be fabricated.
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
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      url: `https://phoenixxsmartbuild.com/${productLocation}`,
      seller: { '@type': 'Organization', name: 'NXT PHOENIXX SMARTBUILD LLP' },
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
      <main id="main-content" className="flex-1">
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
                  if (!locations[areaSlug]) return null;
                  const combo = comboFor(areaSlug);
                  return (
                    <Link key={areaSlug} href={combo.href} className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
                      → {combo.shortName} in {area}
                    </Link>
                  );
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
                  A rigid polyurethane foam core bonded between pre-painted metal sheets, giving a thermal
                  conductivity of {product.specifications.thermalConductivity}. That is what makes the panel
                  worth specifying for anything temperature-sensitive in {location.name}.
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
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span><strong>Thermal Insulation:</strong> {product.specifications.thermalConductivity} conductivity</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span><strong>Fire Resistance:</strong> PIR panels offer B-s1,d0 rating with minimal smoke</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span><strong>Energy Efficiency:</strong> 25-30% reduction in HVAC operating costs</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span><strong>Durability:</strong> 25-30 year lifespan with proper installation</span>
                  </li>
                  <li className="flex items-start gap-2 text-slate-600">
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span><strong>Lightweight Structure:</strong> 8-15 kg/m&sup2; reduces structural steel needs by up to 30%</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Certifications &amp; Compliance</h3>
                <ul className="space-y-3">
                  {product.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-blue-500" aria-hidden="true">🏆</span>
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
                {location.localPainPoint && (
                  <p className="text-slate-600 mt-4">{location.localPainPoint}</p>
                )}
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 mt-8">
              <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🔧 Installation</h3>
                <p className="text-slate-600 leading-relaxed">
                  Our crews handle erection, sealing, flashing, and finishing to IS 14925:2015. Most leak
                  complaints on panel buildings trace back to joints and flashing rather than the panel itself,
                  which is why we would rather do that work than hand it over. Roofing, wall cladding, or a full
                  envelope for a factory, warehouse, cold store, or cleanroom.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">❄️ Cold Storage Construction</h3>
                <p className="text-slate-600 leading-relaxed">
                  Design consultation through panel supply and installation, for chambers holding +15&deg;C down
                  to &minus;40&deg;C. Typical work across {location.type === 'city' ? location.state : location.name} covers
                  agriculture, dairy, pharmaceutical cold chain, and frozen food. If you already have a
                  refrigeration contractor, we can build the envelope only.
                </p>
              </div>
            </div>

            {(location.uniqueFacts?.length || location.localProjects?.length) && (
              <div className="mt-8 grid gap-8 lg:grid-cols-2">
                {location.uniqueFacts && location.uniqueFacts.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">What&apos;s specific to {location.name}</h3>
                    <ul className="space-y-3">
                      {location.uniqueFacts.map((fact, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                          <span className="text-emerald-500 mt-1">&bull;</span>
                          <span>{fact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {location.localProjects && location.localProjects.length > 0 && (
                  <div className="bg-white rounded-2xl p-8 border border-slate-200">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Work we&apos;ve done nearby</h3>
                    <ul className="space-y-3">
                      {location.localProjects.map((project, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                          <span className="text-blue-500 mt-1">&bull;</span>
                          <span>{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
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
                { key: 'warehouse', icon: '🏭', title: 'Warehouses & Factories', desc: 'Insulated wall and roofing panels cut structural steel by up to 30%, because the panel spans further than sheeting and carries its own insulation. Light enough to install quickly over a large span.' },
                { key: 'coldStorage', icon: '❄️', title: 'Cold Storage', desc: 'Holds anywhere from +15°C to −40°C. The closed-cell core absorbs effectively no moisture, which is what stops a cold store losing performance after a few seasons of dairy, pharma, or frozen food duty.' },
                { key: 'pharma', icon: '💊', title: 'Cleanrooms & Pharma', desc: 'WHO-GMP compliant panels with smooth, non-porous faces that will not harbour bacteria and wipe down without shedding. Holds controlled temperature and humidity.' },
                { key: 'manufacturing', icon: '⚙️', title: 'Industrial Buildings', desc: 'Dust-free, temperature-controlled process halls. The main draw is speed: panels go up fast enough that expansion or renovation need not shut production down for long.' },
                { key: 'foodProcessing', icon: '🍕', title: 'Food Processing', desc: 'Food-safe coated panels for dairy plants, beverage lines, and FSSAI-compliant units. Resists mould and takes repeated sanitation without degrading.' },
                { key: 'dataCenter', icon: '🖥️', title: 'Data Centres & Utilities', desc: 'Precision climate control, holding server room temperature within ±1°C while cutting cooling costs 20-30%. Worth the specification where downtime is expensive.' },
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
                { src: '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL1.jpg', alt: `${product.name} wall installation in ${location.name}` },
                { src: '/images/projects/gallery/PUF-Panel-False-Ceiling-1.jpg', alt: `${product.name} ceiling application` },
                { src: '/images/products/sandwich-panels/wall-ceiling-panel/Industrial-False-Ceiling-PUF-Panel-2.jpg', alt: `Industrial ${product.shortName} installation` },
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
                { icon: '🔧', title: 'PUF Panel Installation Support', desc: `Complete turnkey PUF panel installation services in ${location.name}, from design and supply to erection, sealing, and finishing, including accessories, flashings, and technical support.` },
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
                    <span className="text-3xl" aria-hidden="true">🏗️</span>
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
                    <span className="text-3xl" aria-hidden="true">🎯</span>
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
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span className="text-slate-700">
                      <strong>Faster Delivery:</strong> Proximity means quicker turnaround on PUF panel orders and emergencies
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span className="text-slate-700">
                      <strong>Lower Logistics Cost:</strong> Reduced freight charges for sandwich panel shipments to {location.name}
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
                    <span className="text-slate-700">
                      <strong>On-Site Support:</strong> Our PUF panel installation engineers can visit your {location.name} site
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 mt-1" aria-hidden="true">✓</span>
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
                {childLocations.map((child) => {
                  const combo = comboFor(child.slug);
                  return (
                    <Link
                      key={child.slug}
                      href={combo.href}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-300 border border-transparent"
                    >
                      <span className="text-blue-500" aria-hidden="true">📍</span>
                      <span className="font-medium text-slate-900">{combo.shortName} in {child.name}</span>
                    </Link>
                  );
                })}
              </div>
            ) : location.nearbyAreas ? (
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {location.nearbyAreas.map((area, idx) => {
                  const areaSlug = area.toLowerCase().replace(/\s+/g, '-');
                  const areaExists = locations[areaSlug];
                  const combo = areaExists ? comboFor(areaSlug) : null;
                  return combo ? (
                    <Link
                      key={idx}
                      href={combo.href}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:border-blue-300 border border-transparent"
                    >
                      <span className="text-blue-500" aria-hidden="true">📍</span>
                      <span className="font-medium text-slate-900">{combo.shortName} in {area}</span>
                    </Link>
                  ) : (
                    <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-transparent">
                      <span className="text-slate-500" aria-hidden="true">📍</span>
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
                  href={comboFor(parentLocation.slug).href}
                  className="inline-flex items-center gap-2 mt-3 text-blue-600 font-semibold hover:underline"
                >
                  View {comboFor(parentLocation.slug).shortName} in {parentLocation.name}
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
              {siblingProducts.length > 0
                ? `Other PUF & Insulated Panel Products in ${location.name}`
                : `Other Panels We Supply to ${location.name}`}
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
              {(siblingProducts.length > 0
                ? siblingProducts
                : Object.values(products).filter(p => p.slug !== product.slug)
              ).map((p) => {
                const local = siblingProducts.length > 0;
                return (
                  <Link
                    key={p.slug}
                    href={local ? `/${p.slug}-in-${location.slug}` : `/products/sandwich-panels/${p.slug}`}
                    className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} mb-3 flex items-center justify-center text-white text-lg`}>
                      {p.slug.includes('roof') ? '🏠' : p.slug.includes('rock') ? '🪨' : p.slug.includes('pir') ? '🔥' : p.slug.includes('fm') ? '🏆' : '🧱'}
                    </div>
                    <h3 className="font-semibold text-slate-900">{p.name}</h3>
                    <p className="text-sm text-slate-500 mt-1">
                      {local ? `in ${location.name}` : 'Specs & datasheet'}
                    </p>
                  </Link>
                );
              })}
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
                        <Link href="/resources/blogs/puf-panel-price-ahmedabad" className="text-primary hover:underline flex items-center gap-2">
                          <span className="text-orange-500">→</span> PUF Panel Price Guide
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
        <RelatedResources
          links={getRelatedLinksForGeoPage(product.slug, location.slug)}
        />
      </main>
      <Footer />
    </div>
  );
}

function generateIntroContent(product: ProductData, location: LocationData): string {
  const topIndustries = location.industries.slice(0, 3).join(', ');
  const zone = location.primaryIndustrialEstate || location.industrialZones?.[0] || '';
  const stateOrRegion = location.state || (location.type === 'state' ? location.name : 'India');
  const thermalValue = product.specifications.thermalConductivity;
  const painPoint = location.localPainPoint || '';
  const variation = location.slug.length % 3;

  const openings = [
    `PHOENIXX SMARTBUILD is a leading ${product.shortName} manufacturer in ${location.name}, ${stateOrRegion}, delivering premium insulated sandwich panels with ${thermalValue} thermal conductivity for industrial and commercial applications.`,
    `For businesses in ${location.name} seeking a trusted ${product.shortName} supplier, PHOENIXX SMARTBUILD offers factory-engineered sandwich panels with ${thermalValue} thermal performance and ISO-certified manufacturing.`,
    `Industrial projects across ${location.name} rely on PHOENIXX SMARTBUILD for ${product.name} systems that combine structural strength, thermal insulation, and rapid installation, backed by ${thermalValue} conductivity ratings.`,
  ];

  const base = openings[variation];

  if (location.type === 'city') {
    return `${base} As a trusted PUF panel supplier in ${location.name}, we deliver PUF insulated roofing panels, PUF insulated wall panels, and advanced PIR panels to sectors including ${topIndustries}.${zone ? ` We serve key industrial areas such as ${zone} and beyond.` : ''}${painPoint ? ` ${painPoint}` : ''} Our services include professional PUF panel installation and turnkey cold storage construction for businesses that demand energy efficiency, thermal insulation, and fire resistance. Whether you need sandwich panels for a new warehouse or insulated panels for a cleanroom, PHOENIXX delivers quality, speed, and reliability across ${location.name}.`;
  }

  if (location.type === 'state') {
    return `${base} Industries across ${location.name}, including ${topIndustries}, rely on our PUF insulated roofing panels and wall panels for thermal insulation, fire safety, and energy efficiency.${painPoint ? ` ${painPoint}` : ''} We provide end-to-end PUF panel installation and cold storage construction services throughout the state, backed by ISO-certified manufacturing and a dedicated engineering team. From warehouses and factories to cleanrooms and cold chain facilities, PHOENIXX is ${location.name}'s preferred partner for high-performance building envelope solutions.`;
  }

  return `${base} Our product range includes PUF insulated roofing panels and PUF insulated wall panels engineered for superior thermal insulation, fire resistance, and durability across industries spanning ${topIndustries}. With comprehensive PUF panel installation and cold storage construction services, PHOENIXX serves warehouses, factories, cleanrooms, and industrial facilities across the country. Choose PHOENIXX for quality manufacturing, fast delivery, and turnkey execution.`;
}

/**
 * Build the FAQ set for a product-in-location page.
 *
 * These pages are generated for every product/location pair, so the answers
 * have to draw on the location record (industrial estates, local climate
 * pressure, nearby supply areas, state regulations) rather than dropping the
 * place name into the same boilerplate. Questions whose supporting data is
 * missing are skipped instead of falling back to filler.
 */
function generateFAQs(product: ProductData, location: LocationData) {
  const isCity = location.type === 'city';
  const region = location.state || location.name;
  const estate = location.primaryIndustrialEstate || location.industrialZones?.[0];
  const topIndustries = location.industries.slice(0, 3).join(', ');

  const faqs: { question: string; answer: string }[] = [];

  faqs.push({
    question: `What does ${product.name.toLowerCase()} cost in ${location.name}?`,
    answer: `Cost comes down to thickness (${product.specifications.thickness.slice(0, 3).join(', ')} are the common options), skin material, coating, and how much you order. As a rough guide, insulated wall panels run ₹80–180 per sq.ft and insulated roofing panels ₹100–220 per sq.ft, factory-direct. Send us the building dimensions and target internal temperature and we will price the actual job rather than quote a range.`,
  });

  if (estate) {
    faqs.push({
      question: `Do you supply to ${estate}?`,
      answer: `Yes. ${estate} is one of the areas we deliver to regularly${isCity ? '' : ` across ${location.name}`}, and repeat work there means our team already knows the site access and unloading constraints. Standard despatch is 7–15 working days from order confirmation; we hold stock of common specifications to shorten that where a project is running tight.`,
    });
  }

  if (location.localPainPoint) {
    faqs.push({
      question: `Why do buildings in ${location.name} need insulated panels?`,
      answer: `${location.localPainPoint} ${product.name} addresses that directly, since the insulation sits inside the panel rather than being added as a separate layer that can sag or gap over time.`,
    });
  }

  faqs.push({
    question: `Which is better for my project, PUF or PIR?`,
    answer: `PUF is the cost-effective choice for most buildings: 0.024 W/mK thermal conductivity, rated B3 under DIN 4102 (Class E under EN 13501-1) and self-extinguishing. PIR costs more but performs better on both counts, at 0.022 W/mK and B-s1,d0, meaning very low smoke and no flaming droplets. Choose PIR where fire compliance drives the specification${topIndustries ? `, which in ${location.name} usually means ${topIndustries.toLowerCase()} work` : ''}. Where the material must not burn at all, Rockwool is Class A1 non-combustible. We make all three.`,
  });

  faqs.push({
    question: `What thickness should I specify?`,
    answer: `Work back from the internal temperature you need to hold. Partitions and general walling are fine at 30–50mm. Temperature-controlled rooms usually need 50–80mm. Cold storage between 0°C and −25°C calls for 80–120mm, and deep freeze for 120–150mm. Our engineers will run the calculation against local ambient conditions at no cost if you send the brief.`,
  });

  if (location.regulations?.length) {
    faqs.push({
      question: `What approvals apply in ${region}?`,
      answer: `Projects here typically have to satisfy ${location.regulations.slice(0, 3).join(', ')}. We supply the test certificates, material datasheets, and declarations needed for those submissions, which is usually what holds up approval when panels are bought from a trader rather than a manufacturer.`,
    });
  }

  faqs.push({
    question: `Do you install, or only supply?`,
    answer: `Both. Our crews handle erection, sealing, flashing, and finishing to IS 14925:2015. If you already have a contractor, we can supply only, or send a supervisor to train your team on the first bay and leave them to it. Which route makes sense usually depends on how much panel work your contractor has done before.`,
  });

  faqs.push({
    question: `Which industries buy these panels in ${location.name}?`,
    answer: `Mostly ${location.industries.slice(0, 4).join(', ')}. The building types repeat even when the industry does not: cold stores, cleanrooms, process halls, warehouses, and factory sheds all need a skin that insulates and cleans down easily.`,
  });

  if (location.nearbyAreas?.length) {
    faqs.push({
      question: `Do you cover areas around ${location.name}?`,
      answer: `Yes, including ${location.nearbyAreas.slice(0, 5).join(', ')}. Being within a single despatch radius matters more than it sounds: panels are long, light, and easy to damage, so fewer transfers between vehicles means fewer dented edges arriving on site.`,
    });
  }

  faqs.push({
    question: `Can the same panel be used on walls and the roof?`,
    answer: `It is better not to. Roofing panels are made with a trapezoidal profile so water drains and the sheet spans between purlins; wall panels are flat or micro-ribbed because appearance matters more than drainage. Using a wall panel on a roof is where most leak complaints start.`,
  });

  faqs.push({
    question: `Do you build complete cold storage, or just supply the panels?`,
    answer: `We do complete cold storage, from design through panel supply, installation, and commissioning, holding anywhere from +15°C down to −40°C. Typical work in ${region} covers agriculture, dairy, pharma cold chain, frozen food, and logistics. If you only need the envelope and have your own refrigeration contractor, that works too.`,
  });

  return faqs;
}

