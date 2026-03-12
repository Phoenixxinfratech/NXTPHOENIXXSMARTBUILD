import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Roofing Panel Manufacturer in Rajasthan | Phoenixx',
  description:
    'Phoenixx Smart Build — trusted PUF roofing panel manufacturer in Rajasthan. Insulated sandwich roof panels from Beawar. Get a factory-direct quote.',
  keywords: [
    'PUF roofing panel manufacturer',
    'PUF panel manufacturer Rajasthan',
    'insulated roof panel manufacturer',
    'sandwich PUF panel manufacturer',
    'Phoenixx PUF manufacturer',
    'roofing panel factory Beawar',
  ],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/puf-roofing-panel-manufacturer' },
  openGraph: {
    title: 'PUF Roofing Panel Manufacturer in Rajasthan | Phoenixx',
    description:
      'Phoenixx Smart Build — trusted PUF roofing panel manufacturer in Rajasthan. Insulated sandwich roof panels from Beawar. Get a factory-direct quote.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panel-manufacturer',
    siteName: 'PHOENIXX SMARTBUILD',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PufRoofingPanelManufacturerPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Phoenixx Smart Build — PUF Roofing Panel Manufacturer',
    description: 'Leading PUF roofing panel manufacturer supplying industrial insulated roof panels across Rajasthan from Beawar.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panel-manufacturer',
    logo: 'https://phoenixxsmartbuild.com/images/brand/logos/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beawar',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    telephone: '+91-93289-15237',
    priceRange: '₹₹',
    areaServed: { '@type': 'State', name: 'Rajasthan' },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Phoenixx PUF Roofing Panel',
    description: 'Factory-manufactured polyurethane foam insulated roofing panels with PPGI/PPGL steel skins.',
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'Phoenixx Smart Build', url: 'https://phoenixxsmartbuild.com' },
    category: 'Industrial Insulated Roofing Panels',
    material: 'Polyurethane Foam',
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
              <span className="inline-block rounded-full bg-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400 mb-6">
                Manufacturer — Beawar, Rajasthan
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Roofing Panel Manufacturer
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Phoenixx Smart Build is a PUF roofing panel manufacturer based in Beawar,
                Rajasthan. From raw material to finished insulated sandwich roof panel,
                every step is quality-controlled to deliver consistent performance for
                industrial roofing projects across the state.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get a Factory-Direct Quote
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
                Why Manufacturing Matters for PUF Roofing Panels
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  The quality of a PUF roofing panel is determined during manufacturing —
                  not on the construction site. Core density uniformity, steel-to-foam
                  bonding strength, profile accuracy, and coating adhesion all depend on
                  precise factory processes. Choosing a{' '}
                  <Link href="/puf-roofing-panels" className="text-primary hover:underline">
                    PUF roofing panel
                  </Link>{' '}
                  from a genuine manufacturer rather than a trader ensures you get panels
                  that meet their stated specifications.
                </p>
                <p>
                  Phoenixx Smart Build operates a continuous lamination line that injects
                  CFC-free polyurethane foam at controlled temperature and pressure between
                  pre-painted galvanised steel skins. This process achieves a consistent
                  density of 40±2 kg/m³ across every panel — eliminating the air pockets
                  and density variations common in batch-produced alternatives.
                </p>
                <p>
                  The Beawar manufacturing hub is strategically located in central
                  Rajasthan, enabling Phoenixx to supply panels to 23 major industrial
                  cities within a 300 km radius. Factory-direct supply eliminates
                  intermediary margins, giving industrial contractors and project developers
                  access to premium panels at competitive rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Row */}
        <section className="py-12 bg-slate-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL2.png"
                  alt="Phoenixx PUF roofing panel manufacturing process"
                  width={600} height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL10.jpeg"
                  alt="Industrial PUF roofing panel from Phoenixx manufacturer"
                  width={600} height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL7.webp"
                  alt="Finished Phoenixx PUF roofing panels ready for dispatch"
                  width={600} height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Every Phoenixx PUF roofing panel goes through a rigorous production and
              quality assurance pipeline.
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Steel Coil Selection', desc: 'PPGI/PPGL coils from certified mills — 0.35 to 0.60 mm thickness with polyester, SMP, or PVDF coating verified before decoiling.' },
                { title: 'Roll Forming & Profiling', desc: 'Outer skin is roll-formed into trapezoidal or standing-seam profiles. Inner skin is kept flat or micro-ribbed for clean aesthetics.' },
                { title: 'Continuous PUF Injection', desc: 'Polyol and isocyanate are mixed and injected between moving steel skins on a double-belt laminator. Foam rises and cures under controlled pressure.' },
                { title: 'Density & Bonding QC', desc: 'In-line sensors verify core density (40±2 kg/m³). Random samples are tested for peel strength, dimensional accuracy, and thermal conductivity.' },
                { title: 'Cutting & Stacking', desc: 'Panels are cut to specified lengths (up to 12 m) with CNC precision. Protective film is applied before stacking for dispatch.' },
                { title: 'Warehouse & Dispatch', desc: 'Finished panels are stored at the Beawar warehouse. Ready stock in standard thicknesses enables same-day dispatch for urgent orders.' },
              ].map((step, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <div className="text-sm font-bold text-primary mb-2">Step {idx + 1}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Phoenixx */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Choose Phoenixx as Your PUF Roofing Panel Manufacturer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-12">
              {[
                { title: 'Factory-Direct', desc: 'No intermediaries — buy directly from the manufacturer' },
                { title: 'IS 14925 Compliant', desc: 'Panels meet Indian Standard for sandwich panels' },
                { title: 'Central Rajasthan', desc: 'Beawar location for optimal delivery to 23+ cities' },
                { title: 'Custom Lengths', desc: 'Panels manufactured to project-specific dimensions' },
                { title: '40±2 kg/m³', desc: 'Consistent PUF density with zero air pockets' },
                { title: 'Multiple Profiles', desc: 'Trapezoidal, standing seam, concealed fix, clip-lock' },
                { title: 'Ready Stock', desc: 'Standard sizes stocked for same-day dispatch' },
                { title: 'Project Support', desc: 'Technical guidance and contractor recommendations' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-xl text-green-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supply Reach */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Manufacturing Hub Serving All of Rajasthan
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Panels manufactured at Beawar reach every major industrial city within one
              business day.
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
                    href={`/puf-roofing-panel-manufacturer-${slug}/`}
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
              Related PUF Roofing Panel Pages
            </h2>
            <div className="max-w-2xl mx-auto">
              <ul className="space-y-3">
                <li><Link href="/puf-roofing-panels" className="text-primary hover:underline">PUF Roofing Panels — Overview</Link></li>
                <li><Link href="/puf-roofing-panel-supplier" className="text-primary hover:underline">PUF Roofing Panel Supplier</Link></li>
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
              Get Factory-Direct PUF Roofing Panels
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Buy directly from the manufacturer. Competitive pricing, consistent quality,
              and fast delivery from the Phoenixx Smart Build Beawar facility.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Manufacturer Quote
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%20Phoenixx,%20I%20want%20factory-direct%20PUF%20roofing%20panels"
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
