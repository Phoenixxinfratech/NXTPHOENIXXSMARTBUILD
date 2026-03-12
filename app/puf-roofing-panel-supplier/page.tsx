import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Roofing Panel Supplier in Rajasthan | Phoenixx',
  description:
    'Reliable PUF roofing panel supplier in Rajasthan. Phoenixx delivers insulated sandwich roof panels from Beawar with ready stock and fast dispatch to 23 cities.',
  keywords: [
    'PUF roofing panel supplier',
    'PUF panel supplier Rajasthan',
    'insulated roof panel supplier',
    'sandwich PUF panel supply',
    'Phoenixx PUF supplier',
    'roofing panel Beawar',
  ],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/puf-roofing-panel-supplier' },
  openGraph: {
    title: 'PUF Roofing Panel Supplier in Rajasthan | Phoenixx',
    description: 'Reliable PUF roofing panel supplier in Rajasthan. Phoenixx delivers insulated sandwich roof panels from Beawar with ready stock and fast dispatch to 23 cities.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panel-supplier',
    siteName: 'PHOENIXX SMARTBUILD',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PufRoofingPanelSupplierPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Phoenixx Smart Build — PUF Roofing Panel Supplier',
    description: 'Ready-stock PUF roofing panel supplier delivering across Rajasthan from Beawar warehouse.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panel-supplier',
    logo: 'https://phoenixxsmartbuild.com/images/brand/logos/logo.png',
    address: { '@type': 'PostalAddress', addressLocality: 'Beawar', addressRegion: 'Rajasthan', addressCountry: 'IN' },
    telephone: '+91-93289-15237',
    priceRange: '₹₹',
    areaServed: { '@type': 'State', name: 'Rajasthan' },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Phoenixx PUF Roofing Panel',
    description: 'Ready-stock polyurethane foam insulated roofing panels supplied across Rajasthan.',
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'Phoenixx Smart Build', url: 'https://phoenixxsmartbuild.com' },
    category: 'Industrial Insulated Roofing Panels',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '142', bestRating: '5', worstRating: '1' },
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
                Ready Stock — Beawar Warehouse
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Roofing Panel Supplier
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Phoenixx Smart Build maintains ready stock of PUF roofing panels at its
                Beawar warehouse for rapid supply across Rajasthan. Whether your project
                needs 500 sq. ft. or 50,000 sq. ft., we deliver on time and on spec.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Supply Quote
                </Link>
                <a
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Call: +91 93289 15237
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Reliable PUF Roofing Panel Supply from Beawar
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Industrial construction projects run on tight schedules. Delayed material
                  supply can cascade into missed deadlines, cost overruns, and contract
                  penalties. Phoenixx Smart Build addresses this by maintaining a
                  well-stocked warehouse of{' '}
                  <Link href="/puf-roofing-panels" className="text-primary hover:underline">
                    PUF roofing panels
                  </Link>{' '}
                  in Beawar — centrally located to serve all major industrial cities in
                  Rajasthan within a single day.
                </p>
                <p>
                  Our supply model combines manufacturer-direct pricing with distributor-level
                  availability. Standard panel thicknesses (30 mm, 40 mm, 50 mm, 60 mm, 80 mm,
                  and 100 mm) in trapezoidal profile are kept in ready stock. Custom lengths,
                  coatings, and profiles are produced to order with a 5–7 day lead time.
                </p>
                <p>
                  As both{' '}
                  <Link href="/puf-roofing-panel-manufacturer" className="text-primary hover:underline">
                    manufacturer
                  </Link>{' '}
                  and supplier, Phoenixx eliminates the quality risks and price inflation
                  associated with multi-tier distribution. Every panel shipped from Beawar
                  carries the same quality assurance as a factory-gate product.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Images */}
        <section className="py-12 bg-slate-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL1.png"
                  alt="Phoenixx PUF roofing panels stacked at Beawar warehouse"
                  width={600} height={400} className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL5.jpg"
                  alt="PUF roofing panel supply and delivery truck"
                  width={600} height={400} className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL10.jpeg"
                  alt="Industrial roofing panel supplied by Phoenixx"
                  width={600} height={400} className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Supply Advantages */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Supply Advantages of Phoenixx PUF Roofing Panels
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {[
                { title: 'Ready Stock at Beawar', desc: 'Standard thicknesses (30–100 mm) in trapezoidal profile maintained in warehouse inventory. No waiting for production batches.' },
                { title: 'Same-Day Dispatch', desc: 'Orders confirmed before noon are dispatched the same business day. Nearby cities like Ajmer and Kishangarh receive panels within hours.' },
                { title: 'Full Rajasthan Coverage', desc: 'Established logistics routes to 23 industrial cities from Jodhpur in the west to Kota in the east and Sri Ganganagar in the north.' },
                { title: 'Custom Orders in 5–7 Days', desc: 'Non-standard thicknesses, coatings, profiles, or cut-to-length requirements produced and shipped within one week.' },
                { title: 'Bulk Project Supply', desc: 'Capacity to supply large-scale projects (50,000+ sq. ft.) with phased delivery schedules aligned to site progress.' },
                { title: 'Complete Documentation', desc: 'Material test certificates, IS compliance reports, and installation guidelines provided with every consignment.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Supply */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Who We Supply
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              Phoenixx PUF roofing panels serve the entire industrial construction ecosystem.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                'PEB contractors and fabricators',
                'Industrial shed builders',
                'Warehouse developers and operators',
                'Cold storage construction firms',
                'Steel structure fabricators',
                'EPC and turnkey project contractors',
              ].map((buyer, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white/5 rounded-xl p-5 border border-white/10">
                  <span className="text-green-400 text-xl">&#10003;</span>
                  <span className="text-white font-medium">{buyer}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Grid */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF Roofing Panel Supply Network
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Explore city-specific supply information for Phoenixx PUF roofing panels.
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
                    href={`/puf-roofing-panel-supplier-${slug}/`}
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
              Related Pages
            </h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                <li><Link href="/puf-roofing-panels" className="text-primary hover:underline">PUF Roofing Panels — Overview</Link></li>
                <li><Link href="/puf-roofing-panel-manufacturer" className="text-primary hover:underline">PUF Roofing Panel Manufacturer</Link></li>
                <li><Link href="/puf-roofing-panel-price" className="text-primary hover:underline">PUF Roofing Panel Price Guide</Link></li>
                <li><Link href="/phoenixx-puf-roofing-panels" className="text-primary hover:underline">Phoenixx PUF Roofing Panels</Link></li>
                <li><Link href="/products/sandwich-panels/roofing-puf-panel" className="text-primary hover:underline">Roofing PUF Panel — Product Details</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Order PUF Roofing Panels from Phoenixx
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Ready stock at Beawar warehouse. Fast dispatch across Rajasthan. Competitive
              project pricing from the Phoenixx Smart Build supply network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Supply Quote
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%20Phoenixx,%20I%20need%20PUF%20roofing%20panels%20supplied"
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
