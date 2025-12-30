import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

const categoryData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  gradient: string;
  products: {
    slug: string;
    name: string;
    description: string;
    features: string[];
    specs: { label: string; value: string }[];
  }[];
}> = {
  'sandwich-panels': {
    title: 'Wall & Roof Panels',
    tagline: 'High-Performance Insulated Panels',
    description: 'Our insulated panel range delivers superior thermal efficiency, structural integrity, and long-term durability for industrial, commercial, and cold chain applications.',
    gradient: 'from-blue-600 to-cyan-600',
    products: [
      {
        slug: 'pir-panel',
        name: 'PIR Panels',
        description: 'Polyisocyanurate (PIR) panels with superior fire resistance and thermal performance.',
        features: ['Class B-s1, d0 fire rating', 'Excellent thermal insulation', 'Lightweight construction', 'Low smoke emission'],
        specs: [
          { label: 'Thermal Conductivity', value: '0.022 W/mK' },
          { label: 'Thickness', value: '30-200 mm' },
          { label: 'Width', value: '1000 mm standard' },
          { label: 'Length', value: 'Up to 12,000 mm' },
        ],
      },
      {
        slug: 'sandwich-puf-panel',
        name: 'Sandwich PUF Panels',
        description: 'Polyurethane foam panels ideal for general insulation and cost-effective construction.',
        features: ['Cost-effective solution', 'Good thermal insulation', 'Versatile applications', 'Easy installation'],
        specs: [
          { label: 'Thermal Conductivity', value: '0.024 W/mK' },
          { label: 'Thickness', value: '30-150 mm' },
          { label: 'Density', value: '38-42 kg/m³' },
          { label: 'Width', value: '1000 mm standard' },
        ],
      },
      {
        slug: 'roofing-puf-panel',
        name: 'Roofing PUF Panels',
        description: 'Profiled roofing panels optimized for weather resistance and drainage.',
        features: ['Weather resistant', 'Optimized profiles', 'Self-drilling fasteners', 'Leak-proof joints'],
        specs: [
          { label: 'Profile Height', value: '35-50 mm' },
          { label: 'Thickness', value: '30-120 mm' },
          { label: 'Slope', value: 'Min 5°' },
          { label: 'Overhang', value: 'Up to 200 mm' },
        ],
      },
      {
        slug: 'wall-ceiling-panel',
        name: 'Wall & Ceiling Panels',
        description: 'Flat panels for interior walls, ceilings, and partitions.',
        features: ['Smooth finish', 'Easy cleaning', 'Various coatings', 'GMP suitable'],
        specs: [
          { label: 'Surface', value: 'Flat/Micro-rib' },
          { label: 'Thickness', value: '30-100 mm' },
          { label: 'Coating', value: 'PE/PVDF/PVC' },
          { label: 'Joint', value: 'Cam lock/Tongue & groove' },
        ],
      },
    ],
  },
  'doors': {
    title: 'Industrial & Specialty Doors',
    tagline: 'Precision-Built for Safety & Performance',
    description: 'Our range of industrial doors meets the highest standards for safety, hygiene, fire protection, and controlled environment applications.',
    gradient: 'from-orange-600 to-red-600',
    products: [
      {
        slug: 'cleanroom-door',
        name: 'Cleanroom Doors',
        description: 'Flush doors designed for contamination-controlled environments.',
        features: ['Airtight sealing', 'Flush design', 'Easy to clean', 'Interlocking options'],
        specs: [
          { label: 'Type', value: 'Swing/Sliding' },
          { label: 'Frame', value: 'SS/Aluminum' },
          { label: 'Glazing', value: 'Double/Single' },
          { label: 'Finish', value: 'Powder coated' },
        ],
      },
      {
        slug: 'fire-door-emergency-exit',
        name: 'Fire Door – Emergency Exit',
        description: 'Fire-rated doors with panic hardware for emergency egress.',
        features: ['Fire rated 30-120 min', 'Panic bar hardware', 'Self-closing', 'Smoke seals'],
        specs: [
          { label: 'Fire Rating', value: '30/60/90/120 min' },
          { label: 'Certification', value: 'IS/BS/UL' },
          { label: 'Core', value: 'Mineral/Honeycomb' },
          { label: 'Hardware', value: 'SS 304/316' },
        ],
      },
      {
        slug: 'fire-rated-multipurpose-door',
        name: 'Fire Rated Multipurpose Door',
        description: 'Versatile fire-rated doors for various industrial applications.',
        features: ['Multiple ratings', 'Customizable', 'Heavy-duty', 'Long lifespan'],
        specs: [
          { label: 'Fire Rating', value: '30-120 min' },
          { label: 'Size', value: 'Custom' },
          { label: 'Operation', value: 'Manual/Auto' },
          { label: 'Insulation', value: 'Mineral wool' },
        ],
      },
    ],
  },
  'cleanroom-solutions': {
    title: 'Cleanroom Solutions',
    tagline: 'Complete Contamination Control Systems',
    description: 'Comprehensive cleanroom building systems engineered for pharmaceutical, healthcare, electronics, and food processing industries.',
    gradient: 'from-emerald-600 to-teal-600',
    products: [
      {
        slug: 'cleanroom-partition',
        name: 'Cleanroom Partitions',
        description: 'Modular wall systems for controlled environment construction.',
        features: ['Modular design', 'Flush surfaces', 'Easy installation', 'Future expansion'],
        specs: [
          { label: 'Panel Type', value: 'Sandwich/Hollow' },
          { label: 'Thickness', value: '50-100 mm' },
          { label: 'Height', value: 'Up to 6000 mm' },
          { label: 'Finish', value: 'HPL/Steel/Glass' },
        ],
      },
      {
        slug: 'cleanroom-doors',
        name: 'Cleanroom Doors',
        description: 'Doors specifically designed for cleanroom applications.',
        features: ['Hermetic sealing', 'Automation ready', 'Interlock compatible', 'Low particle'],
        specs: [
          { label: 'Type', value: 'Swing/Sliding/Hermetic' },
          { label: 'Sealing', value: 'Magnetic/Brush' },
          { label: 'Vision', value: 'Full/Half/Round' },
          { label: 'Class', value: 'ISO 5-8' },
        ],
      },
      {
        slug: 'cleanroom-false-ceiling',
        name: 'Cleanroom False Ceiling',
        description: 'Walkable and non-walkable ceiling systems for cleanrooms.',
        features: ['HEPA integration', 'Service access', 'Light fixtures', 'Airtight'],
        specs: [
          { label: 'Type', value: 'Walkable/Non-walkable' },
          { label: 'Load', value: 'Up to 200 kg/m²' },
          { label: 'Grid', value: '1200x600/600x600' },
          { label: 'Seal', value: 'Gel/Gasket' },
        ],
      },
    ],
  },
};

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) return {};
  return {
    title: `${data.title} | PHOENIXX Products`,
    description: data.description,
    alternates: { canonical: `/products/${category}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(categoryData).map((category) => ({ category }));
}

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;
  const data = categoryData[category];
  if (!data) notFound();

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: '/products' },
      { '@type': 'ListItem', position: 3, name: data.title, item: `/products/${category}` },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />

        {/* Hero */}
        <section className={`relative bg-gradient-to-br ${data.gradient} py-20 md:py-28`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{data.title}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                {data.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {data.title}
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                {data.description}
              </p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-16">
              {data.products.map((product, idx) => (
                <div
                  key={product.slug}
                  id={product.slug}
                  className={`grid gap-8 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Visual */}
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${data.gradient} p-1`}>
                      <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
                        <div className="text-center p-8">
                          <span className="text-8xl opacity-20">🏗️</span>
                          <p className="mt-4 text-slate-400 text-sm">{product.name} visualization</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{product.name}</h2>
                    <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>

                    {/* Features */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Key Features
                      </h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {product.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                            <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-xs`}>✓</span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">
                        Technical Specifications
                      </h4>
                      <div className="grid gap-2 sm:grid-cols-2">
                        {product.specs.map((spec) => (
                          <div key={spec.label} className="flex justify-between p-2 bg-slate-50 rounded-lg text-sm">
                            <span className="text-slate-500">{spec.label}</span>
                            <span className="font-medium text-slate-900">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={`/products/${category}/${product.slug}`}
                      className={`mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${data.gradient} px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all`}
                    >
                      View Details
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 bg-gradient-to-r ${data.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Need Custom Specifications?
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Our engineering team can customize products to meet your specific requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Get Custom Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Talk to Expert
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
