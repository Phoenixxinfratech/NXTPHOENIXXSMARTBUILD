import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Phoenixx PUF Roofing Panels — Premium Industrial Brand',
  description:
    'Phoenixx PUF roofing panels — premium insulated sandwich roof panels for factories and warehouses in Rajasthan. Supplied from Beawar. Get a quote.',
  keywords: [
    'Phoenixx PUF roofing panels',
    'Phoenixx insulated panels',
    'Phoenixx sandwich roofing',
    'Phoenixx panel Rajasthan',
    'Phoenixx Smart Build PUF',
    'premium PUF roofing panel',
  ],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/phoenixx-puf-roofing-panels' },
  openGraph: {
    title: 'Phoenixx PUF Roofing Panels — Premium Industrial Brand',
    description: 'Phoenixx PUF roofing panels — premium insulated sandwich roof panels for factories and warehouses in Rajasthan. Supplied from Beawar. Get a quote.',
    url: 'https://phoenixxsmartbuild.com/phoenixx-puf-roofing-panels',
    siteName: 'PHOENIXX SMARTBUILD',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PhoenixxPufRoofingPanelsPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Phoenixx Smart Build',
    description: 'Phoenixx — premium PUF roofing panel brand manufactured and supplied from Beawar, Rajasthan.',
    url: 'https://phoenixxsmartbuild.com/phoenixx-puf-roofing-panels',
    logo: 'https://phoenixxsmartbuild.com/images/brand/logos/logo.png',
    address: { '@type': 'PostalAddress', addressLocality: 'Beawar', addressRegion: 'Rajasthan', addressCountry: 'IN' },
    telephone: '+91-88665-56879',
    priceRange: '₹₹',
    areaServed: { '@type': 'State', name: 'Rajasthan' },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Phoenixx PUF Roofing Panel',
    description: 'Premium-brand polyurethane foam insulated roofing panels for industrial applications across Rajasthan.',
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'Phoenixx Smart Build', url: 'https://phoenixxsmartbuild.com' },
    category: 'Industrial Insulated Roofing Panels',
    material: 'Polyurethane Foam',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '156', bestRating: '5', worstRating: '1' },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={productSchema} />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400 mb-6">
                Premium Brand — Phoenixx Smart Build
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Phoenixx PUF Roofing Panels
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Phoenixx is the premium PUF roofing panel brand engineered for
                Rajasthan&apos;s demanding industrial environment. From the Beawar
                manufacturing hub, Phoenixx insulated sandwich roofing systems protect
                factories, warehouses, and cold storage across the state.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Phoenixx Quote
                </Link>
                <a
                  href="tel:+918866556879"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Call: +91 88665 56879
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction — Brand Focus */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Phoenixx Difference in Industrial Roofing
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  In a market where PUF roofing panels are often treated as commodities,
                  Phoenixx stands apart. Every Phoenixx insulated panel is manufactured with
                  a commitment to consistent quality — from raw material selection through
                  final dispatch. The brand represents a promise: that the panel installed on
                  your roof today will perform at its rated specification for 25+ years.
                </p>
                <p>
                  Phoenixx Smart Build operates from Beawar, the geographic heart of
                  Rajasthan, enabling the brand to serve 23 industrial cities within a
                  300 km radius. This central positioning means Phoenixx PUF roofing panels
                  reach your project site faster and at lower transport cost than panels
                  shipped from distant manufacturing centres in Gujarat or Maharashtra.
                </p>
                <p>
                  The Phoenixx sandwich roofing system combines a trapezoidal or standing-seam
                  profiled outer skin, a{' '}
                  <Link href="/puf-roofing-panels" className="text-primary hover:underline">
                    high-density PUF core
                  </Link>{' '}
                  (40±2 kg/m³), and a flat inner skin — all bonded under controlled
                  conditions. The result is a monolithic roofing panel that resists heat,
                  rain, dust, and corrosion while delivering thermal conductivity of just
                  0.024 W/mK.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Image Showcase */}
        <section className="py-12 bg-slate-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL1.png"
                  alt="Phoenixx brand PUF roofing panel for industrial use"
                  width={400} height={300} className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL2.png"
                  alt="Phoenixx insulated sandwich roofing panel cross section"
                  width={400} height={300} className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL5.jpg"
                  alt="Phoenixx PUF roofing panels installed on warehouse"
                  width={400} height={300} className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL10.jpeg"
                  alt="Phoenixx industrial roofing panel system"
                  width={400} height={300} className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Phoenixx Brand */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Industrial Buyers Choose the Phoenixx Brand
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              A brand built on manufacturing precision, supply reliability, and
              performance consistency.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Manufactured Quality', desc: 'Every panel produced under ISO 9001:2015 controlled processes — not procured from third parties' },
                { title: 'Beawar Warehouse', desc: 'Ready stock of Phoenixx panels for same-day dispatch to Rajasthan industrial sites' },
                { title: 'Consistent Density', desc: '40±2 kg/m³ PUF core density guaranteed through continuous lamination technology' },
                { title: 'IS 14925 Compliant', desc: 'Full compliance with Indian Standard for insulated sandwich panels' },
                { title: 'Premium Coatings', desc: 'Polyester, SMP, and PVDF coating options for UV and corrosion protection' },
                { title: 'Project Support', desc: 'Technical guidance from specification through installation for every Phoenixx project' },
                { title: 'Competitive Pricing', desc: 'Factory-direct Phoenixx pricing — no distributor or dealer margins' },
                { title: '25+ Year Life', desc: 'Engineered for decades of performance in Rajasthan extreme heat and monsoon conditions' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-xl text-green-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phoenixx Product Range */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Phoenixx PUF Roofing Panel Range
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              A complete range of insulated roofing panels to match every industrial
              requirement and budget.
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Specifications</h3>
                <ul className="space-y-3 text-slate-600">
                  <li><strong>Thickness:</strong> 30 mm, 40 mm, 50 mm, 60 mm, 80 mm, 100 mm, 120 mm, 150 mm</li>
                  <li><strong>PUF Density:</strong> 40 ± 2 kg/m³ (CFC-free)</li>
                  <li><strong>Thermal Conductivity:</strong> 0.024 W/mK</li>
                  <li><strong>Fire Rating:</strong> B2/B3 standard; B1 available</li>
                  <li><strong>Cover Width:</strong> 1000 mm effective</li>
                  <li><strong>Max Length:</strong> Up to 12 m per panel</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Options & Profiles</h3>
                <ul className="space-y-3 text-slate-600">
                  <li><strong>Outer Skin:</strong> PPGI / PPGL (0.35–0.60 mm)</li>
                  <li><strong>Coatings:</strong> Polyester, SMP, PVDF, HDP</li>
                  <li><strong>Profiles:</strong> Trapezoidal, Standing Seam, Concealed Fix, Clip-Lock</li>
                  <li><strong>Inner Skin:</strong> Flat or micro-ribbed</li>
                  <li><strong>Accessories:</strong> Ridge caps, flashings, fasteners, sealants</li>
                  <li><strong>Custom Lengths:</strong> Cut to project specification</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Phoenixx Across Rajasthan */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Phoenixx PUF Roofing Panels Across Rajasthan
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              The Phoenixx brand serves industrial projects in every major Rajasthan city.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {[
                'Ajmer', 'Kishangarh', 'Bhilwara', 'Pali', 'Jodhpur', 'Udaipur',
                'Chittorgarh', 'Rajsamand', 'Nagaur', 'Sikar', 'Jhunjhunu', 'Alwar',
                'Neemrana', 'Kota', 'Bundi', 'Barmer', 'Abu Road', 'Bikaner',
                'Sri Ganganagar', 'Tonk', 'Jhalawar', 'Pratapgarh', 'Sirohi',
              ].map((city) => {
                const slug = city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={slug}
                    href={`/phoenixx-puf-roofing-panel-${slug}/`}
                    className="bg-white rounded-xl p-4 text-center hover:bg-blue-50 hover:shadow-md transition-all border border-slate-200"
                  >
                    <span className="font-bold text-slate-900">{city}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Explore More
            </h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                <li><Link href="/puf-roofing-panels" className="text-primary hover:underline">PUF Roofing Panels — Overview</Link></li>
                <li><Link href="/puf-roofing-panel-manufacturer" className="text-primary hover:underline">PUF Roofing Panel Manufacturer</Link></li>
                <li><Link href="/puf-roofing-panel-supplier" className="text-primary hover:underline">PUF Roofing Panel Supplier</Link></li>
                <li><Link href="/puf-roofing-panel-price" className="text-primary hover:underline">PUF Roofing Panel Price Guide</Link></li>
                <li><Link href="/products/sandwich-panels/roofing-puf-panel" className="text-primary hover:underline">Roofing PUF Panel — Product Details</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose Phoenixx for Your Industrial Roofing
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Phoenixx PUF roofing panels deliver premium performance at competitive
              pricing. Contact the Phoenixx Smart Build panel supply network for your
              next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Phoenixx Quote
              </Link>
              <a
                href="https://wa.me/918866556879?text=Hi%20Phoenixx,%20I%20want%20Phoenixx%20PUF%20roofing%20panels"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
