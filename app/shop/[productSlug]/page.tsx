import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

// Product catalog with pricing data for shop pages
const shopProducts: Record<string, {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  sku: string;
  category: string;
  basePrice: number;
  priceUnit: string;
  variants: {
    thickness: string;
    price: number;
    sku: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  features: string[];
  applications: string[];
  gradient: string;
}> = {
  'sandwich-puf-panel': {
    slug: 'sandwich-puf-panel',
    name: 'Sandwich PUF Panel',
    shortName: 'PUF Panel',
    description: 'Premium polyurethane foam insulated sandwich panels for industrial, commercial, and cold storage applications. Factory-manufactured with ISO 9001 quality standards.',
    image: '/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
    sku: 'PHX-PUF-001',
    category: 'Insulated Sandwich Panels',
    basePrice: 850,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 850, sku: 'PHX-PUF-30' },
      { thickness: '40mm', price: 950, sku: 'PHX-PUF-40' },
      { thickness: '50mm', price: 1100, sku: 'PHX-PUF-50' },
      { thickness: '60mm', price: 1250, sku: 'PHX-PUF-60' },
      { thickness: '80mm', price: 1500, sku: 'PHX-PUF-80' },
      { thickness: '100mm', price: 1750, sku: 'PHX-PUF-100' },
      { thickness: '120mm', price: 2000, sku: 'PHX-PUF-120' },
      { thickness: '150mm', price: 2400, sku: 'PHX-PUF-150' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
      { label: 'Density', value: '40 ± 2 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.024 W/mK' },
      { label: 'Fire Rating', value: 'B2/B3 (Self-extinguishing)' },
      { label: 'Skin Material', value: 'PPGI / PPGL / SS' },
      { label: 'Skin Thickness', value: '0.35mm - 0.60mm' },
      { label: 'Panel Width', value: '1000mm / 1200mm' },
      { label: 'Panel Length', value: 'Custom (up to 12m)' },
    ],
    features: [
      'Excellent thermal insulation - 0.024 W/mK',
      'Lightweight construction',
      'Fast installation - saves 40% time',
      'CFC/HCFC free - eco-friendly',
      '25-30 years service life',
      'ISO 9001:2015 certified',
    ],
    applications: ['Cold Storage', 'Warehouses', 'Pharmaceutical', 'Food Processing', 'Clean Rooms', 'Industrial Buildings'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  'roofing-puf-panel': {
    slug: 'roofing-puf-panel',
    name: 'Roofing PUF Panel',
    shortName: 'Roof Panel',
    description: 'Insulated roofing panels with trapezoidal profile for superior drainage, wind resistance, and thermal performance. Ideal for industrial sheds and warehouses.',
    image: '/images/projects/gallery/Phoenix-PUF-Panel-Manufacturers6.jpg',
    sku: 'PHX-ROOF-001',
    category: 'Insulated Roofing Panels',
    basePrice: 950,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 950, sku: 'PHX-ROOF-30' },
      { thickness: '40mm', price: 1100, sku: 'PHX-ROOF-40' },
      { thickness: '50mm', price: 1250, sku: 'PHX-ROOF-50' },
      { thickness: '60mm', price: 1400, sku: 'PHX-ROOF-60' },
      { thickness: '80mm', price: 1650, sku: 'PHX-ROOF-80' },
      { thickness: '100mm', price: 1900, sku: 'PHX-ROOF-100' },
      { thickness: '120mm', price: 2150, sku: 'PHX-ROOF-120' },
      { thickness: '150mm', price: 2600, sku: 'PHX-ROOF-150' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
      { label: 'Density', value: '40 ± 2 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.024 W/mK' },
      { label: 'Profile Type', value: 'Trapezoidal / Standing Seam' },
      { label: 'Effective Width', value: '1000mm' },
      { label: 'Wind Resistance', value: 'Up to 150 km/h' },
      { label: 'Fire Rating', value: 'B2/B3' },
      { label: 'Span Capability', value: 'Up to 4m between purlins' },
    ],
    features: [
      'Superior drainage with trapezoidal profile',
      'Wind resistance up to 150 km/h',
      'Spans up to 4m - reduces steel',
      'UV resistant coatings',
      'No thermal bridging',
      'Compatible with skylights',
    ],
    applications: ['Industrial Sheds', 'Warehouses', 'Cold Storage', 'Commercial Buildings', 'Aircraft Hangars', 'Logistics Parks'],
    gradient: 'from-green-600 to-emerald-600',
  },
  'rockwool-panel': {
    slug: 'rockwool-panel',
    name: 'Rockwool Panel',
    shortName: 'Rockwool Panel',
    description: 'Non-combustible mineral wool sandwich panels with A1/A2 fire rating. Ideal for fire-rated applications, acoustic insulation, and FM Global compliant facilities.',
    image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad1.jpeg',
    sku: 'PHX-RW-001',
    category: 'Fire Rated Panels',
    basePrice: 1400,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm', price: 1400, sku: 'PHX-RW-50' },
      { thickness: '80mm', price: 1750, sku: 'PHX-RW-80' },
      { thickness: '100mm', price: 2000, sku: 'PHX-RW-100' },
      { thickness: '120mm', price: 2300, sku: 'PHX-RW-120' },
      { thickness: '150mm', price: 2700, sku: 'PHX-RW-150' },
      { thickness: '200mm', price: 3200, sku: 'PHX-RW-200' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Mineral Wool (Stone Wool)' },
      { label: 'Density', value: '80-150 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.035-0.040 W/mK' },
      { label: 'Fire Rating', value: 'A1/A2 (Non-combustible)' },
      { label: 'Acoustic Rating', value: 'Rw 32-45 dB' },
      { label: 'Temperature Resistance', value: 'Up to 1000°C' },
      { label: 'FM Approval', value: 'FM 4880 Class 1' },
      { label: 'Panel Width', value: '1000mm / 1200mm' },
    ],
    features: [
      'A1/A2 fire rating - non-combustible',
      'Excellent acoustic insulation (32-45 dB)',
      'FM Global 4880 approved',
      'No toxic fumes in fire',
      'Temperature resistance up to 1000°C',
      'Pest and rodent resistant',
    ],
    applications: ['Fire-rated Walls', 'Acoustic Enclosures', 'FM Global Projects', 'Generator Rooms', 'Data Centers', 'High-value Warehouses'],
    gradient: 'from-orange-600 to-red-600',
  },
  'pir-panel': {
    slug: 'pir-panel',
    name: 'PIR Panel',
    shortName: 'PIR Panel',
    description: 'Polyisocyanurate foam panels with superior fire performance (B-s1,d0) and better thermal efficiency than PUF. Ideal for fire-sensitive and high-value facilities.',
    image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
    sku: 'PHX-PIR-001',
    category: 'Fire Enhanced Panels',
    basePrice: 1200,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '40mm', price: 1200, sku: 'PHX-PIR-40' },
      { thickness: '50mm', price: 1400, sku: 'PHX-PIR-50' },
      { thickness: '60mm', price: 1600, sku: 'PHX-PIR-60' },
      { thickness: '80mm', price: 1900, sku: 'PHX-PIR-80' },
      { thickness: '100mm', price: 2200, sku: 'PHX-PIR-100' },
      { thickness: '120mm', price: 2500, sku: 'PHX-PIR-120' },
      { thickness: '150mm', price: 3000, sku: 'PHX-PIR-150' },
    ],
    specifications: [
      { label: 'Core Material', value: 'Polyisocyanurate (PIR) Foam' },
      { label: 'Density', value: '40 ± 2 kg/m³' },
      { label: 'Thermal Conductivity', value: '0.022 W/mK' },
      { label: 'Fire Rating', value: 'B-s1,d0 (Low smoke, no droplets)' },
      { label: 'FM Approval', value: 'FM 4880/4881' },
      { label: 'Skin Material', value: 'PPGI / PPGL / SS' },
      { label: 'Temperature Resistance', value: 'Up to 150°C' },
      { label: 'Panel Width', value: '1000mm / 1200mm' },
    ],
    features: [
      'Superior fire rating - B-s1,d0',
      'Best thermal efficiency - 0.022 W/mK',
      'Very low smoke emission',
      'No burning droplets',
      'FM 4880/4881 approved',
      'Thinner panels for same R-value',
    ],
    applications: ['Pharmaceutical Plants', 'Cold Storage', 'Food Processing', 'High-value Warehouses', 'Data Centers', 'Cleanrooms'],
    gradient: 'from-purple-600 to-indigo-600',
  },
  'fm-approved-panel': {
    slug: 'fm-approved-panel',
    name: 'FM Approved Panel',
    shortName: 'FM Panel',
    description: 'Factory Mutual Global certified panels meeting FM 4880/4881 standards. Mandatory for FM Global insured facilities and high-value property protection.',
    image: '/images/projects/gallery/Phoenixx_infratech_Projects188.jpg',
    sku: 'PHX-FM-001',
    category: 'Insurance Grade Panels',
    basePrice: 1600,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm PIR', price: 1600, sku: 'PHX-FM-PIR-50' },
      { thickness: '80mm PIR', price: 2100, sku: 'PHX-FM-PIR-80' },
      { thickness: '100mm PIR', price: 2500, sku: 'PHX-FM-PIR-100' },
      { thickness: '100mm Rockwool', price: 2800, sku: 'PHX-FM-RW-100' },
      { thickness: '120mm Rockwool', price: 3200, sku: 'PHX-FM-RW-120' },
      { thickness: '150mm Rockwool', price: 3800, sku: 'PHX-FM-RW-150' },
    ],
    specifications: [
      { label: 'Core Options', value: 'PIR / Rockwool' },
      { label: 'FM Certification', value: 'FM 4880 Class 1' },
      { label: 'Fire Testing', value: 'Large-scale calorimeter tested' },
      { label: 'Audit Compliance', value: 'Annual FM Global audits' },
      { label: 'Accessories', value: 'All FM Approved' },
      { label: 'Documentation', value: 'Full traceability' },
      { label: 'Insurance', value: 'Premium reduction eligible' },
      { label: 'Warranty', value: '15-year performance warranty' },
    ],
    features: [
      'FM 4880 Class 1 certified',
      'Complete fire-tested assembly',
      'Annual factory audits',
      'May reduce insurance 10-30%',
      'Full lot traceability',
      'Global insurance compliance',
    ],
    applications: ['MNC Manufacturing', 'FM Global Facilities', 'Data Centers', 'Pharma Cold Chain', 'Electronics Manufacturing', 'High-value Warehouses'],
    gradient: 'from-amber-600 to-yellow-600',
  },
};

// Generate static params
export async function generateStaticParams() {
  return Object.keys(shopProducts).map(slug => ({ productSlug: slug }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ productSlug: string }> }): Promise<Metadata> {
  const { productSlug } = await params;
  const product = shopProducts[productSlug];
  
  if (!product) {
    return { title: 'Product Not Found' };
  }
  
  return {
    title: `Buy ${product.name} Online | Starting ₹${product.basePrice}/${product.priceUnit} | PHOENIXX`,
    description: `${product.description} Starting from ₹${product.basePrice} ${product.priceUnit}. Request quote for bulk pricing. PAN-India delivery.`,
    keywords: [
      `${product.name} price`,
      `buy ${product.shortName} online`,
      `${product.shortName} manufacturer`,
      `${product.shortName} supplier India`,
      `${product.shortName} cost per sq meter`,
    ],
    alternates: {
      canonical: `/shop/${productSlug}`,
    },
    openGraph: {
      title: `Buy ${product.name} | Starting ₹${product.basePrice}/${product.priceUnit}`,
      description: product.description,
      type: 'website',
      images: [{ url: `https://phoenixxsmartbuild.com${product.image}` }],
    },
  };
}

// Main Page Component
export default async function ShopProductPage({ params }: { params: Promise<{ productSlug: string }> }) {
  const { productSlug } = await params;
  const product = shopProducts[productSlug];
  
  if (!product) {
    notFound();
  }
  
  // Calculate price valid until (6 months from now)
  const priceValidUntil = new Date();
  priceValidUntil.setMonth(priceValidUntil.getMonth() + 6);
  const priceValidUntilISO = priceValidUntil.toISOString().split('T')[0];
  
  // Product Schema with Offer (Google Merchant compliant)
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://phoenixxsmartbuild.com${product.image}`,
    sku: product.sku,
    mpn: product.sku,
    brand: {
      '@type': 'Brand',
      name: 'PHOENIXX SMARTBUILD',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'PHOENIXX SMARTBUILD',
      url: 'https://phoenixxsmartbuild.com',
    },
    category: product.category,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: product.basePrice,
      highPrice: product.variants[product.variants.length - 1].price,
      offerCount: product.variants.length,
      availability: 'https://schema.org/InStock',
      priceValidUntil: priceValidUntilISO,
      seller: {
        '@type': 'Organization',
        name: 'PHOENIXX SMARTBUILD',
      },
      url: `https://phoenixxsmartbuild.com/shop/${productSlug}`,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Rajesh Patel',
        },
        reviewBody: 'Excellent quality panels. Delivered on time and installation support was very helpful.',
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        author: {
          '@type': 'Person',
          name: 'Suresh Kumar',
        },
        reviewBody: 'Best PUF panels we have used. Great thermal performance and competitive pricing.',
      },
    ],
  };
  
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com' },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: 'https://phoenixxsmartbuild.com/shop' },
      { '@type': 'ListItem', position: 3, name: product.name, item: `https://phoenixxsmartbuild.com/shop/${productSlug}` },
    ],
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={productSchema} />
        <JsonLd data={breadcrumbSchema} />
        
        {/* Hero Section */}
        <section className="bg-slate-50 py-8">
          <div className="container-custom">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm text-slate-500">
              <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/shop" className="hover:text-slate-900 transition-colors">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-900">{product.name}</span>
            </nav>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-medium`}>
                  In Stock
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                <span className="text-sm text-slate-500">SKU: {product.sku}</span>
                <h1 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
                  {product.name}
                </h1>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-slate-600 text-sm">4.8 (127 reviews)</span>
                </div>
                
                {/* Price */}
                <div className="mt-6 p-6 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-500">Starting from</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-4xl font-bold text-slate-900">₹{product.basePrice}</span>
                    <span className="text-slate-500">{product.priceUnit}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    *Price varies based on thickness, quantity, and specifications. GST extra.
                  </p>
                  <p className="mt-1 text-sm text-green-600">
                    ✓ Bulk discounts available for orders above 1000 sq.mtr
                  </p>
                </div>
                
                {/* CTAs */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/get-a-quote"
                    className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${product.gradient} px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all`}
                  >
                    Request Final Quote
                  </Link>
                  <a
                    href="https://wa.me/919727700442"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-6 py-4 font-semibold text-slate-700 hover:bg-slate-50 transition-all"
                  >
                    💬 WhatsApp Inquiry
                  </a>
                </div>
                
                {/* Trust Signals */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">🚚</span>
                    <p className="text-xs text-slate-600 mt-1">PAN-India Delivery</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">🏭</span>
                    <p className="text-xs text-slate-600 mt-1">Direct from Factory</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <span className="text-2xl">✓</span>
                    <p className="text-xs text-slate-600 mt-1">ISO Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Variants & Pricing */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Available Thickness & Pricing
            </h2>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Thickness</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">SKU</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Price (per sq.mtr)</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-900">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {product.variants.map((variant, idx) => (
                    <tr key={variant.sku} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-medium text-slate-900">{variant.thickness}</td>
                      <td className="px-6 py-4 text-slate-600">{variant.sku}</td>
                      <td className="px-6 py-4">
                        <span className="text-lg font-bold text-slate-900">₹{variant.price}</span>
                        <span className="text-slate-500 text-sm ml-1">+ GST</span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/get-a-quote?product=${product.name}&thickness=${variant.thickness}`}
                          className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
                        >
                          Get Quote
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <p className="mt-4 text-sm text-slate-500">
              * Prices are indicative and may vary based on quantity, customization, and delivery location. 
              Contact our sales team for final quotation.
            </p>
          </div>
        </section>
        
        {/* Specifications */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Technical Specifications
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Specifications</h3>
                <div className="space-y-3">
                  {product.specifications.map((spec, idx) => (
                    <div key={idx} className="flex justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-600">{spec.label}</span>
                      <span className="font-medium text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-slate-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-600">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Applications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Applications
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {product.applications.map((app, idx) => (
                <span
                  key={idx}
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${product.gradient} text-white font-medium`}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        {/* Location Pages Link */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Available Across India
            </h2>
            <p className="text-slate-600 mb-6">
              PHOENIXX {product.name} is available for delivery and installation across India. 
              View location-specific information:
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['india', 'gujarat', 'ahmedabad', 'surat', 'vadodara', 'rajkot', 'raipur', 'bhilai'].map((loc) => (
                <Link
                  key={loc}
                  href={`/${productSlug}-in-${loc}`}
                  className="inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                >
                  📍 {loc.charAt(0).toUpperCase() + loc.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className={`py-16 bg-gradient-to-r ${product.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Order {product.name}?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Get a customized quote based on your exact requirements. 
              Our team will provide competitive pricing within 24 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quotation
              </Link>
              <a
                href="tel:+919727700442"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                📞 Call: +91 97277 00442
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

