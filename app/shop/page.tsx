import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Shop Industrial Products | Panels, Doors, Cleanroom Solutions | PHOENIXX',
  description: 'Buy premium industrial infrastructure products online. PUF Panels from ₹750/sqm, Cleanroom Doors from ₹32,000, Fire Doors from ₹25,000. Direct factory pricing. PAN-India delivery.',
  keywords: [
    'buy puf panels online',
    'puf panel price India',
    'cleanroom door price',
    'fire door manufacturer',
    'cold storage door price',
    'cleanroom partition cost',
    'industrial panel manufacturer',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/shop',
  },
};

// All products organized by category
const productCategories = [
  {
    id: 'sandwich-panels',
    name: 'Sandwich Panels',
    description: 'High-performance insulated panels for walls, roofs, and ceilings',
    icon: '🧱',
    products: [
      {
        slug: 'sandwich-puf-panel',
        name: 'Sandwich PUF Panel',
        description: 'Premium polyurethane foam insulated panels for cold storage, warehouses, and cleanrooms.',
        image: '/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
        basePrice: 850,
        priceUnit: '/sq.mtr',
        features: ['0.024 W/mK', 'B2/B3 Fire', '25-30 yr life'],
        gradient: 'from-blue-600 to-cyan-600',
      },
      {
        slug: 'roofing-puf-panel',
        name: 'Roofing PUF Panel',
        description: 'Insulated roofing panels with trapezoidal profile for industrial sheds.',
        image: '/images/projects/gallery/Phoenix-PUF-Panel-Manufacturers6.jpg',
        basePrice: 950,
        priceUnit: '/sq.mtr',
        features: ['150 km/h wind', '4m span', 'UV resistant'],
        gradient: 'from-green-600 to-emerald-600',
      },
      {
        slug: 'pir-panel',
        name: 'PIR Panel',
        description: 'Polyisocyanurate panels with superior fire performance and thermal efficiency.',
        image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
        basePrice: 1200,
        priceUnit: '/sq.mtr',
        features: ['B-s1,d0 fire', '0.022 W/mK', 'Low smoke'],
        gradient: 'from-purple-600 to-indigo-600',
      },
      {
        slug: 'rockwool-panel',
        name: 'Rockwool Panel',
        description: 'Non-combustible mineral wool panels with A1/A2 fire rating.',
        image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad1.jpeg',
        basePrice: 1400,
        priceUnit: '/sq.mtr',
        features: ['A1/A2 fire', 'FM 4880', '32-45 dB'],
        gradient: 'from-orange-600 to-red-600',
      },
      {
        slug: 'wall-ceiling-panel',
        name: 'Wall & Ceiling Panel',
        description: 'Versatile insulated panels for wall and ceiling applications.',
        image: '/images/projects/gallery/PHOENIXX_WALL_PUF_PANEL1.jpg',
        basePrice: 750,
        priceUnit: '/sq.mtr',
        features: ['GMP finish', 'Easy clean', 'Cam-lock'],
        gradient: 'from-cyan-600 to-blue-600',
      },
      {
        slug: 'fm-approved-panel',
        name: 'FM Approved Panel',
        description: 'Factory Mutual certified panels for insurance-compliant facilities.',
        image: '/images/projects/gallery/Phoenixx_infratech_Projects188.jpg',
        basePrice: 1600,
        priceUnit: '/sq.mtr',
        features: ['FM 4880', 'Insurance OK', '15-yr warranty'],
        gradient: 'from-amber-600 to-yellow-600',
      },
    ],
  },
  {
    id: 'doors',
    name: 'Industrial & Specialty Doors',
    description: 'Fire-rated, cleanroom, cold storage, and hermetic doors',
    icon: '🚪',
    products: [
      {
        slug: 'cleanroom-door',
        name: 'Cleanroom Door',
        description: 'Specialized doors for cleanroom and controlled environments.',
        image: '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-2.jpg',
        basePrice: 35000,
        priceUnit: '/unit',
        features: ['GMP compliant', 'Air-tight', 'SS options'],
        gradient: 'from-teal-600 to-cyan-600',
      },
      {
        slug: 'fire-door-emergency-exit',
        name: 'Fire Door – Emergency Exit',
        description: 'Fire-rated emergency exit doors with panic hardware.',
        image: '/images/projects/gallery/Phoenixx_infratech_Projects189.jpg',
        basePrice: 28000,
        priceUnit: '/unit',
        features: ['60-120 min', 'CBRI tested', 'NBC 2016'],
        gradient: 'from-red-600 to-orange-600',
      },
      {
        slug: 'fire-rated-multipurpose-door',
        name: 'Fire Rated Multipurpose Door',
        description: 'Versatile fire-rated doors for general access points.',
        image: '/images/projects/gallery/Phoenix-Infratech-Project-Pics23.jpg',
        basePrice: 25000,
        priceUnit: '/unit',
        features: ['Vision panel', 'RAL colors', 'Heavy duty'],
        gradient: 'from-orange-500 to-red-500',
      },
      {
        slug: 'cold-storage-door',
        name: 'Cold Storage Door',
        description: 'Insulated doors for cold storage and freezer applications.',
        image: '/images/projects/gallery/Industrial-False-Ceiling-PUF-Panel-2.jpg',
        basePrice: 45000,
        priceUnit: '/unit',
        features: ['-40°C rated', 'Heated frame', 'Magnetic seal'],
        gradient: 'from-sky-600 to-blue-600',
      },
      {
        slug: 'hermetic-door',
        name: 'Hermetic Door',
        description: 'Air-tight automatic sliding doors for hospitals and OTs.',
        image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad5.jpg',
        basePrice: 125000,
        priceUnit: '/unit',
        features: ['True hermetic', 'Touchless', 'Lead-lined opt'],
        gradient: 'from-indigo-600 to-purple-600',
      },
    ],
  },
  {
    id: 'cleanroom-solutions',
    name: 'Cleanroom Solutions',
    description: 'Complete cleanroom infrastructure for controlled environments',
    icon: '🧪',
    products: [
      {
        slug: 'cleanroom-partition',
        name: 'Cleanroom Partition',
        description: 'Modular cleanroom partition systems for ISO Class 5-8.',
        image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects73.jpeg',
        basePrice: 2800,
        priceUnit: '/sq.mtr',
        features: ['GMP surfaces', 'Flush design', 'Modular'],
        gradient: 'from-emerald-600 to-teal-600',
      },
      {
        slug: 'cleanroom-false-ceiling',
        name: 'Cleanroom False Ceiling',
        description: 'Cleanroom-grade ceiling systems with HEPA integration.',
        image: '/images/projects/gallery/Sandwich-PUF-Ceiling-Panel-1.jpg',
        basePrice: 3500,
        priceUnit: '/sq.mtr',
        features: ['HEPA ready', 'Walkable opt', 'LED integrated'],
        gradient: 'from-violet-600 to-purple-600',
      },
      {
        slug: 'cleanroom-doors',
        name: 'Cleanroom Doors (Solutions)',
        description: 'Complete cleanroom door solutions for partition integration.',
        image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad6.jpg',
        basePrice: 32000,
        priceUnit: '/unit',
        features: ['Interlock', 'Pass-through', 'GMP docs'],
        gradient: 'from-cyan-500 to-teal-500',
      },
      {
        slug: 'cleanroom-flooring',
        name: 'Cleanroom Flooring',
        description: 'Seamless, anti-static, chemical-resistant flooring systems.',
        image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad7.jpg',
        basePrice: 850,
        priceUnit: '/sq.mtr',
        features: ['ESD options', 'Seamless', 'Chem resistant'],
        gradient: 'from-slate-600 to-gray-700',
      },
    ],
  },
];

// Flatten all products for schema
const allProducts = productCategories.flatMap(cat => cat.products);

export default function ShopPage() {
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PHOENIXX Industrial Products',
    description: 'Premium industrial infrastructure products - Panels, Doors, and Cleanroom Solutions',
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((product, index) => ({
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
                Shop Industrial Products
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Premium industrial infrastructure products at factory-direct pricing. 
                Panels, Doors, and Cleanroom Solutions with PAN-India delivery.
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
              
              {/* Quick Category Links */}
              <div className="mt-8 flex flex-wrap gap-3">
                {productCategories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition-colors"
                  >
                    <span>{cat.icon}</span>
                    {cat.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Products by Category */}
        {productCategories.map((category) => (
          <section key={category.id} id={category.id} className="section-padding bg-slate-50 border-b">
            <div className="container-custom">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl">{category.icon}</span>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {category.name}
                  </h2>
                  <p className="text-slate-600 mt-1">{category.description}</p>
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
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
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-slate-600 text-sm line-clamp-2">
                        {product.description}
                      </p>
                      
                      {/* Features */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* Price */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div>
                          <span className="text-xs text-slate-500">Starting from</span>
                          <div className="flex items-baseline gap-0.5">
                            <span className="text-xl font-bold text-slate-900">₹{product.basePrice.toLocaleString('en-IN')}</span>
                            <span className="text-slate-500 text-xs">{product.priceUnit}</span>
                          </div>
                        </div>
                        <span className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r ${product.gradient} text-white text-xs font-medium`}>
                          View
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        ))}
        
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
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Our technical team can recommend the best product based on your application, 
              compliance requirements, and budget.
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
