import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Products | High-Performance Building Solutions',
  description:
    'Explore PHOENIXX\'s complete range of insulated panels, industrial doors, and cleanroom solutions. PIR panels, PUF panels, fire-rated doors, and cold chain products.',
  alternates: {
    canonical: '/products',
  },
};

const productCategories = [
  {
    slug: 'sandwich-panels',
    title: 'Wall & Roof Panels',
    tagline: 'High-Performance Insulated Panels',
    description: 'Engineered for thermal efficiency, structural strength, and long service life. Our insulated panels are the foundation of energy-efficient industrial and commercial buildings.',
    products: [
      { name: 'PIR Panels', desc: 'Superior fire resistance with Class B-s1, d0 rating' },
      { name: 'Sandwich PUF Panels', desc: 'Excellent thermal insulation for diverse applications' },
      { name: 'Roofing PUF Panels', desc: 'Weather-resistant with optimized drainage profiles' },
      { name: 'Wall & Ceiling Panels', desc: 'Versatile panels for interior and exterior use' },
    ],
    features: ['Thermal Conductivity: 0.022-0.024 W/mK', 'Thickness: 30mm to 200mm', 'Fire Rated Options Available'],
    gradient: 'from-blue-600 to-cyan-600',
    icon: '🧱',
  },
  {
    slug: 'doors',
    title: 'Industrial & Specialty Doors',
    tagline: 'Precision-Built for Safety & Performance',
    description: 'Doors designed for safety, hygiene, fire protection, and controlled environments. Compliant with national and international standards.',
    products: [
      { name: 'Cleanroom Doors', desc: 'Flush design with airtight sealing for controlled environments' },
      { name: 'Fire Door – Emergency Exit', desc: 'Fire-rated up to 120 minutes with panic hardware' },
      { name: 'Fire Rated Multipurpose Door', desc: 'Versatile fire protection for various applications' },
    ],
    features: ['Fire Rating: 30/60/90/120 minutes', 'IS/BS/UL Certified', 'Automation Ready'],
    gradient: 'from-orange-600 to-red-600',
    icon: '🚪',
  },
  {
    slug: 'cleanroom-solutions',
    title: 'Cleanroom Solutions',
    tagline: 'Complete Contamination Control Systems',
    description: 'Comprehensive cleanroom building systems for pharmaceutical, healthcare, electronics, and food processing industries. GMP compliant designs.',
    products: [
      { name: 'Cleanroom Partitions', desc: 'Modular wall systems with flush surfaces' },
      { name: 'Cleanroom Doors', desc: 'Hermetic and sliding doors for airlocks' },
      { name: 'Cleanroom False Ceiling', desc: 'Walkable and non-walkable ceiling systems' },
    ],
    features: ['ISO Class 5-8 Compatible', 'GMP/FDA Compliant', 'HEPA Filter Integration'],
    gradient: 'from-emerald-600 to-teal-600',
    icon: '🔬',
  },
];

const stats = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '25+', label: 'Years Experience' },
  { value: '100%', label: 'Quality Assured' },
  { value: '24/7', label: 'Support Available' },
];

export default function ProductsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />

        <AISummaryBlock
          summary="PHOENIXX manufactures high-performance building products: Wall & Roof Panels (PIR, PUF, Roofing panels with thermal conductivity 0.022-0.024 W/mK), Industrial Doors (Cleanroom doors, Fire-rated doors up to 120 minutes), and Cleanroom Solutions (Partitions, Ceilings for ISO Class 5-8). All products are manufactured in-house ensuring quality and consistency."
          keywords={['PIR panels', 'PUF panels', 'cleanroom doors', 'fire doors', 'sandwich panels', 'insulated panels']}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Products</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                Engineered for Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                High-Performance Building Solutions
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                PHOENIXX offers a complete portfolio of insulated building products designed to meet 
                demanding industrial, cleanroom, and cold chain requirements. Every product is 
                manufactured in-house for uncompromising quality.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Request Technical Quote
                </Link>
                <Link
                  href="/resources/technical-sheet"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Download Datasheets
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-slate-800 border-y border-slate-700">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Product Range
              </h2>
              <p className="mt-4 text-slate-600">
                From insulated panels to specialized doors and complete cleanroom systems—
                everything you need for high-performance industrial infrastructure.
              </p>
            </div>

            <div className="space-y-16">
              {productCategories.map((category, idx) => (
                <div
                  key={category.slug}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} items-center justify-center text-3xl shadow-lg mb-6`}>
                      {category.icon}
                    </div>
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      {category.tagline}
                    </p>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                    <p className="mt-4 text-slate-600 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Products List */}
                    <div className="mt-6 space-y-3">
                      {category.products.map((product) => (
                        <div key={product.name} className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white text-xs`}>
                            ✓
                          </span>
                          <div>
                            <p className="font-medium text-slate-900">{product.name}</p>
                            <p className="text-sm text-slate-500">{product.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {category.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/products/${category.slug}`}
                      className={`mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${category.gradient} px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all`}
                    >
                      Explore {category.title}
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${category.gradient} p-1`}>
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <div className="text-center p-8">
                          <span className="text-8xl opacity-20">{category.icon}</span>
                          <p className="mt-4 text-slate-400 text-sm">Product visualization</p>
                        </div>
                      </div>
                    </div>
                    {/* Decorative */}
                    <div className={`absolute -z-10 -bottom-4 ${idx % 2 === 1 ? '-left-4' : '-right-4'} w-full h-full rounded-2xl bg-gradient-to-br ${category.gradient} opacity-20 blur-xl`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Products */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Why Choose PHOENIXX Products?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: '🏭', title: 'In-House Manufacturing', desc: 'Complete control over quality and consistency' },
                { icon: '🔬', title: 'Engineered Performance', desc: 'Products designed for demanding applications' },
                { icon: '📋', title: 'Certified Compliance', desc: 'Meeting national and international standards' },
                { icon: '🤝', title: 'Technical Support', desc: 'Expert guidance from selection to installation' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need Custom Specifications?
            </h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Our engineering team can customize products to meet your specific project requirements. 
              Contact us for technical consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg hover:shadow-xl transition-all"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
