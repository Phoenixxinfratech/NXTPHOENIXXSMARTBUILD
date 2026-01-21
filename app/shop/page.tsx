import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Shop Industrial Panels | PUF, PIR, Rockwool, FM Approved | PHOENIXX',
  description: 'Buy premium insulated sandwich panels online. PUF Panels from ₹850/sqm, PIR Panels from ₹1200/sqm, Rockwool from ₹1400/sqm. Direct factory pricing. PAN-India delivery.',
  keywords: [
    'buy puf panels online',
    'puf panel price',
    'pir panel cost',
    'rockwool panel price India',
    'fm approved panel manufacturer',
    'insulated panel price list',
  ],
  alternates: {
    canonical: '/shop',
  },
};

const products = [
  {
    slug: 'sandwich-puf-panel',
    name: 'Sandwich PUF Panel',
    description: 'Premium polyurethane foam insulated panels for cold storage, warehouses, and cleanrooms.',
    image: '/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
    basePrice: 850,
    features: ['0.024 W/mK thermal', 'B2/B3 fire rating', '25-30 year life'],
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    slug: 'roofing-puf-panel',
    name: 'Roofing PUF Panel',
    description: 'Insulated roofing panels with trapezoidal profile for industrial sheds and warehouses.',
    image: '/images/projects/gallery/Phoenix-PUF-Panel-Manufacturers6.jpg',
    basePrice: 950,
    features: ['Wind resistance 150 km/h', '4m span capability', 'UV resistant'],
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    slug: 'rockwool-panel',
    name: 'Rockwool Panel',
    description: 'Non-combustible mineral wool panels with A1/A2 fire rating for fire-sensitive applications.',
    image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad1.jpeg',
    basePrice: 1400,
    features: ['A1/A2 fire rating', 'FM 4880 approved', 'Acoustic 32-45 dB'],
    gradient: 'from-orange-600 to-red-600',
  },
  {
    slug: 'pir-panel',
    name: 'PIR Panel',
    description: 'Polyisocyanurate panels with superior fire performance and thermal efficiency.',
    image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
    basePrice: 1200,
    features: ['B-s1,d0 fire rating', '0.022 W/mK thermal', 'Low smoke'],
    gradient: 'from-purple-600 to-indigo-600',
  },
  {
    slug: 'fm-approved-panel',
    name: 'FM Approved Panel',
    description: 'Factory Mutual certified panels for insurance-compliant and high-value facilities.',
    image: '/images/projects/gallery/Phoenixx_infratech_Projects188.jpg',
    basePrice: 1600,
    features: ['FM 4880 Class 1', 'Insurance compliant', '15-year warranty'],
    gradient: 'from-amber-600 to-yellow-600',
  },
];

export default function ShopPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PHOENIXX Industrial Panels',
    description: 'Premium insulated sandwich panels for industrial applications',
    numberOfItems: products.length,
    itemListElement: products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        image: `https://phoenixxsmartbuild.com${product.image}`,
        url: `https://phoenixxsmartbuild.com/shop/${product.slug}`,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: product.basePrice,
          availability: 'https://schema.org/InStock',
        },
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={itemListSchema} />
        
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-20">
          <div className="container-custom">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Shop</span>
            </nav>
            
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Shop Industrial Panels
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Premium insulated sandwich panels at factory-direct pricing. 
                PAN-India delivery with installation support.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Direct from Manufacturer
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> ISO 9001 Certified
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Bulk Discounts Available
                </span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <Link
                  key={product.slug}
                  href={`/shop/${product.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r ${product.gradient} text-white text-sm font-medium`}>
                      In Stock
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h2>
                    <p className="mt-2 text-slate-600 text-sm line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Price */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <span className="text-sm text-slate-500">Starting from</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-bold text-slate-900">₹{product.basePrice}</span>
                          <span className="text-slate-500 text-sm">/sq.mtr</span>
                        </div>
                      </div>
                      <span className={`inline-flex items-center gap-1 px-4 py-2 rounded-lg bg-gradient-to-r ${product.gradient} text-white text-sm font-medium`}>
                        View Details
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* Trust Section */}
        <section className="py-12 bg-white border-t">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="text-4xl font-bold text-blue-600">500+</span>
                <p className="text-slate-600 mt-1">Projects Delivered</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-green-600">18+</span>
                <p className="text-slate-600 mt-1">Years Experience</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-purple-600">50L+</span>
                <p className="text-slate-600 mt-1">Sq.Mtr Manufactured</p>
              </div>
              <div>
                <span className="text-4xl font-bold text-orange-600">100+</span>
                <p className="text-slate-600 mt-1">Happy Clients</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need Help Choosing the Right Panel?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Our technical team can recommend the best panel type and thickness based on your application, 
              climate, and budget requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Get Expert Recommendation
              </Link>
              <a
                href="tel:+919727700442"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                📞 Talk to Engineer
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

