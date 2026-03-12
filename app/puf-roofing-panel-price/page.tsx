import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Roofing Panel Price Guide 2026 | Phoenixx Beawar',
  description:
    'PUF roofing panel price in 2026 from ₹90/sq ft. Compare rates by thickness, coating & profile. Get a project quote from Phoenixx Smart Build, Beawar.',
  keywords: [
    'PUF roofing panel price',
    'PUF panel price per sq ft',
    'insulated roof panel price',
    'sandwich PUF panel rate',
    'PUF roofing panel cost Rajasthan',
    'Phoenixx PUF panel price',
  ],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/puf-roofing-panel-price' },
  openGraph: {
    title: 'PUF Roofing Panel Price Guide 2026 | Phoenixx Beawar',
    description: 'PUF roofing panel price in 2026 from ₹90/sq ft. Compare rates by thickness, coating & profile. Get a project quote from Phoenixx Smart Build, Beawar.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panel-price',
    siteName: 'PHOENIXX SMARTBUILD',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PufRoofingPanelPricePage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Phoenixx Smart Build — PUF Roofing Panel Pricing',
    description: 'Competitive PUF roofing panel pricing from manufacturer-supplier in Beawar, Rajasthan.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panel-price',
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
    description: 'Polyurethane foam insulated roofing panels for industrial buildings.',
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'Phoenixx Smart Build' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '90',
      highPrice: '250',
      priceValidUntil: '2026-12-31',
      availability: 'https://schema.org/InStock',
      offerCount: '8',
      areaServed: { '@type': 'State', name: 'Rajasthan' },
    },
  };

  const priceTiers = [
    { thickness: '30 mm', approxRange: '₹90 – ₹110 / sq ft', use: 'Light-duty roofing, sheds' },
    { thickness: '40 mm', approxRange: '₹105 – ₹130 / sq ft', use: 'Standard industrial roofing' },
    { thickness: '50 mm', approxRange: '₹120 – ₹150 / sq ft', use: 'Warehouses, factories' },
    { thickness: '60 mm', approxRange: '₹135 – ₹165 / sq ft', use: 'Temperature-sensitive storage' },
    { thickness: '80 mm', approxRange: '₹155 – ₹190 / sq ft', use: 'Cold storage, food processing' },
    { thickness: '100 mm', approxRange: '₹175 – ₹220 / sq ft', use: 'Heavy-duty cold storage' },
    { thickness: '120 mm', approxRange: '₹195 – ₹240 / sq ft', use: 'Sub-zero storage facilities' },
    { thickness: '150 mm', approxRange: '₹220 – ₹270 / sq ft', use: 'Deep-freeze applications' },
  ];

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
              <span className="inline-block rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400 mb-6">
                Price Guide — Updated 2026
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Roofing Panel Price
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Understand what drives PUF roofing panel pricing and get competitive rates
                from Phoenixx Smart Build. Factory-direct pricing from Beawar with
                transparent cost breakdowns for your industrial roofing project.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Instant Price Quote
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
                Understanding PUF Roofing Panel Pricing
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  PUF roofing panel pricing is not a single number — it depends on a
                  combination of technical specifications, order parameters, and delivery
                  logistics.{' '}
                  <Link href="/puf-roofing-panel-manufacturer" className="text-primary hover:underline">
                    Phoenixx Smart Build
                  </Link>{' '}
                  offers transparent, factory-direct pricing from its Beawar facility,
                  eliminating intermediary markups that inflate project costs.
                </p>
                <p>
                  As a general guide, Phoenixx{' '}
                  <Link href="/puf-roofing-panels" className="text-primary hover:underline">
                    PUF roofing panels
                  </Link>{' '}
                  range from approximately ₹90 per sq. ft. for 30 mm standard panels to
                  ₹250+ per sq. ft. for 150 mm heavy-duty cold storage panels. The final
                  delivered price for your project depends on the factors detailed below.
                </p>
                <p>
                  We encourage project managers and contractors to request a custom
                  quotation rather than relying solely on general price lists. Every
                  industrial roofing project has unique requirements that affect the
                  optimal panel specification and therefore the unit cost.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Price Table */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Indicative PUF Roofing Panel Prices
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Approximate price ranges for Phoenixx PUF roofing panels (ex-Beawar). Final
              pricing varies by coating, profile, and order volume.
            </p>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Thickness</th>
                    <th className="px-6 py-4 text-left font-semibold">Approx. Price Range</th>
                    <th className="px-6 py-4 text-left font-semibold">Typical Use</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTiers.map((tier, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-semibold text-slate-900">{tier.thickness}</td>
                      <td className="px-6 py-4 text-slate-700">{tier.approxRange}</td>
                      <td className="px-6 py-4 text-slate-600">{tier.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-500 text-center mt-6 max-w-2xl mx-auto">
              Prices are indicative and subject to change based on raw material costs, coating selection,
              order quantity, and delivery location. Contact Phoenixx for a binding project quotation.
            </p>
          </div>
        </section>

        {/* Images */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL2.png"
                  alt="Phoenixx PUF roofing panel with competitive pricing"
                  width={600} height={400} className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL1.png"
                  alt="PUF insulated roofing panel price comparison"
                  width={600} height={400} className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL7.webp"
                  alt="Industrial PUF roofing panel cost-effective solution"
                  width={600} height={400} className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Factors */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Factors That Affect PUF Roofing Panel Price
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mt-12">
              {[
                { title: 'Panel Thickness', desc: 'Thicker panels (80–150 mm) cost more due to additional PUF material but deliver higher R-values. Match thickness to your insulation requirement rather than defaulting to the cheapest option.' },
                { title: 'PUF Core Density', desc: 'Standard density is 40 kg/m³. Higher density (45+ kg/m³) increases compressive strength and slightly improves insulation but raises material cost. Most industrial roofing performs well at standard density.' },
                { title: 'Steel Skin Grade & Coating', desc: 'PPGI with polyester coating is the most economical. SMP and PVDF coatings cost more but offer superior UV and corrosion resistance — worthwhile for facilities in harsh environments.' },
                { title: 'Profile Type', desc: 'Trapezoidal profile is standard and most affordable. Standing seam and clip-lock profiles add cost but eliminate through-fastener penetrations, improving weather-tightness.' },
                { title: 'Order Volume', desc: 'Larger orders qualify for volume discounts. Phoenixx offers tiered pricing based on total project area — discuss your full requirement for the best rate.' },
                { title: 'Delivery Distance', desc: 'Transport cost from Beawar varies by destination. Nearby cities (Ajmer, Kishangarh, Pali) have minimal transport surcharge. Distant locations (Bikaner, Sri Ganganagar) have higher freight.' },
              ].map((factor, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{factor.title}</h3>
                  <p className="text-slate-600">{factor.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* City Price Pages */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              City-Specific PUF Roofing Panel Prices
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Delivered pricing varies by location. Explore city-specific price information.
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
                    href={`/puf-roofing-panel-price-${slug}/`}
                    className="bg-slate-50 rounded-xl p-4 text-center hover:bg-blue-50 hover:shadow-md transition-all border border-slate-200"
                  >
                    <span className="font-bold text-slate-900">{city}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Related Pages
            </h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                <li><Link href="/puf-roofing-panels" className="text-primary hover:underline">PUF Roofing Panels — Overview</Link></li>
                <li><Link href="/puf-roofing-panel-manufacturer" className="text-primary hover:underline">PUF Roofing Panel Manufacturer</Link></li>
                <li><Link href="/puf-roofing-panel-supplier" className="text-primary hover:underline">PUF Roofing Panel Supplier</Link></li>
                <li><Link href="/phoenixx-puf-roofing-panels" className="text-primary hover:underline">Phoenixx PUF Roofing Panels</Link></li>
                <li><Link href="/shop" className="text-primary hover:underline">View Panel Prices Online</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Your Project-Specific Price Quote
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Factory-direct pricing from Phoenixx Smart Build. Share your project
              requirements and receive a detailed quotation within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Price Quote
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%20Phoenixx,%20I%20need%20PUF%20roofing%20panel%20pricing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                WhatsApp for Price
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
