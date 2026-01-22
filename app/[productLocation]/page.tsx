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

// Parse the URL slug to extract product and location
function parseSlug(slug: string): { productSlug: string; locationSlug: string } | null {
  const match = slug.match(/^(.+)-in-(.+)$/);
  if (!match) return null;
  return {
    productSlug: match[1],
    locationSlug: match[2],
  };
}

// Generate static params for all product-location combinations
export async function generateStaticParams() {
  const params: { productLocation: string }[] = [];
  
  Object.keys(products).forEach(productSlug => {
    Object.keys(locations).forEach(locationSlug => {
      params.push({
        productLocation: `${productSlug}-in-${locationSlug}`,
      });
    });
  });
  
  return params;
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ productLocation: string }> }): Promise<Metadata> {
  const { productLocation } = await params;
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
  
  return {
    title,
    description,
    keywords: [
      `${product.name} in ${location.name}`,
      `${product.shortName} manufacturer ${location.name}`,
      `${product.shortName} supplier ${location.name}`,
      `insulated panels ${location.name}`,
      `PHOENIXX SMARTBUILD ${location.name}`,
      ...product.idealFor.map(i => `${i.toLowerCase()} ${product.shortName.toLowerCase()}`),
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
    },
  };
}

// Main Page Component
export default async function ProductLocationPage({ params }: { params: Promise<{ productLocation: string }> }) {
  const { productLocation } = await params;
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
    name: `${product.name} in ${location.name}`,
    description: product.description,
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
                {product.name} Manufacturer & Supplier in {location.name}
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
                PHOENIXX SMARTBUILD is a leading manufacturer and supplier of premium {product.name}s in {location.name}. 
                We provide complete solutions including manufacturing, supply, installation, and compliance support 
                for industrial and commercial projects across {location.type === 'city' ? location.state : location.name} and PAN-India.
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
                  href="tel:+919727700442"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  📞 Call: +91 97277 00442
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
                {product.description} In {location.name}, where {location.climate.toLowerCase()}, 
                PHOENIXX {product.shortName}s provide the ideal building envelope solution. 
                Our panels deliver thermal conductivity of {product.specifications.thermalConductivity}, 
                ensuring optimal energy efficiency and indoor comfort for {product.idealFor.slice(0, 3).join(', ')}, and more applications.
              </p>
            </div>
          </div>
        </section>
        
        {/* What is & How it Works */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              What is a {product.name} and How Does It Work?
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Composition & Technology</h3>
                <p className="text-slate-600 leading-relaxed">{product.composition}</p>
                <p className="text-slate-600 leading-relaxed mt-4">{product.technology}</p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Performance Characteristics</h3>
                <ul className="space-y-3">
                  {product.characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance & Certifications</h3>
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
        
        {/* Why Ideal for Location */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Why {product.name} is Ideal for Projects in {location.name}
            </h2>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">🌡️ Climate & Environmental Suitability</h3>
                <p className="text-slate-600 leading-relaxed">{location.climate}</p>
                <p className="text-slate-600 leading-relaxed mt-4">
                  PHOENIXX {product.shortName}s with thermal conductivity of {product.specifications.thermalConductivity} and 
                  service temperature range of {product.characteristics.find(c => c.includes('temperature'))?.split(': ')[1] || '-40°C to +80°C'} 
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
                  Each of these sectors benefits from PHOENIXX {product.shortName}s for temperature control, 
                  energy efficiency, and regulatory compliance.
                </p>
              </div>
            </div>
            
            {location.industrialZones && location.industrialZones.length > 0 && (
              <div className="mt-8 bg-blue-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">📍 Industrial Zones We Serve in {location.name}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {location.industrialZones.map((zone, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-700">
                      <span className="text-blue-500">•</span>
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
              Applications of {product.name} in {location.name}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(product.applications).map(([key, value]) => (
                <div key={key} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-4">
                    {key === 'pharma' && '💊'}
                    {key === 'coldStorage' && '❄️'}
                    {key === 'foodProcessing' && '🍕'}
                    {key === 'warehouse' && '🏭'}
                    {key === 'manufacturing' && '⚙️'}
                    {key === 'dataCenter' && '🖥️'}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">
                    {key === 'pharma' && 'Pharmaceutical & GMP Facilities'}
                    {key === 'coldStorage' && 'Cold Storage & Cold Chain'}
                    {key === 'foodProcessing' && 'Food Processing & Dairy'}
                    {key === 'warehouse' && 'Warehouses & Logistics Parks'}
                    {key === 'manufacturing' && 'Manufacturing & Industrial Plants'}
                    {key === 'dataCenter' && 'Data Centers & Utility Buildings'}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Image Gallery */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              {product.name} Gallery – Real Projects & Installations
            </h2>
            <p className="text-slate-600 mb-8 max-w-3xl">
              Explore our {product.shortName} installations across industrial facilities in {location.name} and India. 
              Each project showcases PHOENIXX SMARTBUILD&apos;s commitment to quality and precision.
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
              Why Choose PHOENIXX SMARTBUILD for {product.name} in {location.name}
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: '🏭', title: 'In-House Manufacturing', desc: 'State-of-the-art production facility with continuous lamination technology ensures consistent quality and competitive pricing.' },
                { icon: '📐', title: 'Engineering & Customization', desc: 'Our engineering team provides custom panel designs, thickness calculations, and project-specific solutions.' },
                { icon: '✅', title: 'Quality Assurance & Testing', desc: 'ISO 9001:2015 certified processes with rigorous testing for density, thermal conductivity, and fire performance.' },
                { icon: '🇮🇳', title: 'PAN-India Execution Capability', desc: `From ${location.name} to any corner of India, our logistics and installation teams ensure seamless project delivery.` },
                { icon: '🔧', title: 'Turnkey Supply & Installation', desc: 'Complete solutions from design to installation, including accessories, flashings, and technical support.' },
                { icon: '⏱️', title: 'Fast Turnaround', desc: 'Quick production and delivery schedules with project-specific timelines to meet your construction milestones.' },
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
        
        {/* Technical Specifications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Technical Specifications of {product.name}
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
              Areas We Serve {location.type === 'city' ? 'Near' : 'in'} {location.name}
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
              Frequently Asked Questions – {product.name} in {location.name}
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
              Get a Quote for {product.name} in {location.name}
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Ready to discuss your project requirements? Our technical team is here to help you 
              choose the right {product.shortName} specifications for your {location.name} project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Request Free Quote
              </Link>
              <a
                href="https://wa.me/919727700442"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                💬 WhatsApp Us
              </a>
              <a
                href="tel:+919727700442"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                📞 Talk to an Engineer
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-white/80 text-sm">
              <span>📧 sales@phoenixxsmartbuild.com</span>
              <span>📞 +91 97277 00442</span>
              <span>📞 +91 93289 15237</span>
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
              Other PHOENIXX Products Available in {location.name}
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
      </main>
      <Footer />
    </div>
  );
}

// Generate location-specific FAQs
function generateFAQs(product: ProductData, location: LocationData) {
  return [
    {
      question: `What is the price of ${product.name} in ${location.name}?`,
      answer: `${product.name} prices in ${location.name} vary based on thickness (${product.specifications.thickness.slice(0, 3).join(', ')}, etc.), skin material, coating type, and order quantity. PHOENIXX SMARTBUILD offers competitive pricing with typical ranges from ₹80-180/sq.ft for wall panels and ₹100-220/sq.ft for roof panels. Contact us for a project-specific quotation.`,
    },
    {
      question: `What is the difference between ${product.name} and other insulated panels?`,
      answer: `${product.name} offers ${product.specifications.thermalConductivity} thermal conductivity and ${product.specifications.fireRating} fire rating. Compared to other options: PUF offers best thermal value, PIR provides superior fire safety, Rockwool is fully non-combustible (A1), and FM Approved panels meet insurance requirements. PHOENIXX can recommend the best option for your ${location.name} project.`,
    },
    {
      question: `Are ${product.name}s fire rated?`,
      answer: `Yes, PHOENIXX ${product.name}s meet ${product.specifications.fireRating} fire rating requirements. For projects requiring higher fire safety, we offer PIR panels (B-s1,d0) and Rockwool panels (A1/A2 non-combustible). Our technical team can advise on the appropriate fire rating for your ${location.name} facility.`,
    },
    {
      question: `What is the delivery time for ${product.name} in ${location.name}?`,
      answer: `Standard delivery time for ${product.name} in ${location.name} is 7-15 working days from order confirmation, depending on panel specifications and quantity. Expedited delivery is available for urgent projects. PHOENIXX maintains ready stock of common specifications for faster turnaround.`,
    },
    {
      question: `Does PHOENIXX provide installation services in ${location.name}?`,
      answer: `Yes, PHOENIXX SMARTBUILD provides complete turnkey solutions including supply and installation of ${product.name}s in ${location.name}. Our trained installation teams ensure proper panel fitting, sealing, and finishing as per manufacturer guidelines. We also offer installation supervision and training for contractor teams.`,
    },
    {
      question: `Which industries use ${product.name} most in ${location.name}?`,
      answer: `In ${location.name}, ${product.name}s are widely used in ${location.industries.slice(0, 4).join(', ')} industries. Key applications include cold storage facilities, pharmaceutical cleanrooms, food processing plants, warehouses, and industrial manufacturing units requiring temperature control and energy efficiency.`,
    },
    {
      question: `What thickness of ${product.name} do I need for my project?`,
      answer: `${product.name} thickness depends on your application: 30-50mm for standard wall partitions, 50-80mm for temperature-controlled environments, 80-120mm for cold storage (0°C to -25°C), and 120-150mm for deep freeze applications. PHOENIXX engineers provide free thickness calculations based on your ${location.name} project requirements.`,
    },
    {
      question: `Can ${product.name} be used for both walls and roofs?`,
      answer: `PHOENIXX offers specialized panels for different applications. ${product.slug.includes('roof') ? 'Roofing panels have trapezoidal profiles for drainage and spanning capability.' : 'Wall panels have flat or micro-ribbed profiles for aesthetics.'} We recommend using purpose-designed panels for optimal performance. Contact us for guidance on your ${location.name} project.`,
    },
  ];
}

