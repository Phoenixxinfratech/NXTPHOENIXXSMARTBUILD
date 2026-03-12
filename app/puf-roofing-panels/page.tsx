import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Roofing Panels for Industrial Roofing | Phoenixx',
  description:
    'Premium PUF roofing panels for factories, warehouses & cold storage. Phoenixx Smart Build supplies insulated sandwich roof panels across Rajasthan from Beawar.',
  keywords: [
    'PUF roofing panel',
    'PUF roofing panels',
    'insulated roof panel',
    'sandwich PUF roofing panel',
    'polyurethane roof panel',
    'industrial roofing panel Rajasthan',
    'Phoenixx PUF panel',
  ],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/puf-roofing-panels' },
  openGraph: {
    title: 'PUF Roofing Panels for Industrial Roofing | Phoenixx',
    description:
      'Premium PUF roofing panels for factories, warehouses & cold storage. Phoenixx Smart Build supplies insulated sandwich roof panels across Rajasthan from Beawar.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panels',
    siteName: 'PHOENIXX SMARTBUILD',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function PufRoofingPanelsPage() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Phoenixx Smart Build — PUF Roofing Panels',
    description:
      'Manufacturer and supplier of premium PUF roofing panels for industrial buildings across Rajasthan.',
    url: 'https://phoenixxsmartbuild.com/puf-roofing-panels',
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
    description:
      'High-performance polyurethane foam insulated roofing panels with PPGI/PPGL steel skins for industrial applications.',
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Phoenixx Smart Build',
      url: 'https://phoenixxsmartbuild.com',
    },
    category: 'Industrial Insulated Roofing Panels',
    material: 'Polyurethane Foam',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '142',
      bestRating: '5',
      worstRating: '1',
    },
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
                Phoenixx Smart Build — Beawar, Rajasthan
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Roofing Panels
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Phoenixx PUF roofing panels are high-performance insulated sandwich roof
                panels engineered for factories, warehouses, cold storage facilities, and
                industrial sheds. Supplied across Rajasthan from the Phoenixx warehouse in Beawar.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get a Free Quote
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
                What Are PUF Roofing Panels?
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  PUF roofing panels — also called{' '}
                  <Link href="/phoenixx-puf-roofing-panels" className="text-primary hover:underline">
                    insulated sandwich roof panels
                  </Link>{' '}
                  — consist of a rigid polyurethane foam (PUF) core bonded between two
                  pre-painted galvanised steel skins. The closed-cell PUF core delivers a
                  thermal conductivity of just 0.024 W/mK, making it one of the most
                  effective insulation materials available for industrial roofing.
                </p>
                <p>
                  Phoenixx Smart Build manufactures PUF roofing panels at its facility and
                  maintains ready stock at the Beawar warehouse for rapid supply across
                  Rajasthan. Whether you are constructing a new warehouse in Jodhpur,
                  upgrading a factory roof in Ajmer, or building cold storage in Udaipur,
                  Phoenixx panels reach your site quickly and perform reliably in
                  Rajasthan&apos;s extreme climate.
                </p>
                <p>
                  The trapezoidal or standing-seam outer profile provides structural
                  strength and efficient water drainage, while the PUF core eliminates the
                  need for separate insulation layers. This single-component roofing system
                  accelerates construction timelines by 40–60% compared with conventional
                  methods and reduces long-term HVAC operating costs by 25–30%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 bg-slate-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL1.png"
                  alt="Phoenixx PUF roofing panel for industrial warehouse roof"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL5.jpg"
                  alt="Insulated sandwich roof panel installation for factory"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL7.webp"
                  alt="PUF insulated roofing panel system for steel shed"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Applications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Industrial Applications of PUF Roofing Panels
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Phoenixx PUF roofing panels serve a wide range of industrial and commercial
              roofing requirements across Rajasthan.
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Factories & Manufacturing Plants',
                  desc: 'Temperature-controlled roofing for production facilities, engineering workshops, and assembly lines. Reduces internal heat gain by up to 15°C without mechanical cooling.',
                },
                {
                  title: 'Warehouses & Logistics Hubs',
                  desc: 'Lightweight PUF roof panels span up to 4 m between purlins, reducing structural steel by 30%. Ideal for large-span warehouses storing temperature-sensitive goods.',
                },
                {
                  title: 'Cold Storage Facilities',
                  desc: 'Panels in 100–150 mm thickness maintain chamber temperatures from +15°C to -25°C. Zero moisture absorption prevents condensation and ice formation.',
                },
                {
                  title: 'Industrial Sheds & Steel Structures',
                  desc: 'Quick-install roofing for PEB structures and industrial sheds. A crew can install 400–600 sq. m per day, keeping project timelines tight.',
                },
                {
                  title: 'Food Processing Units',
                  desc: 'Hygienic, flush-surface panels that meet FSSAI requirements. Anti-microbial coatings available for dairy, beverage, and meat processing applications.',
                },
                {
                  title: 'Pharmaceutical & Clean Rooms',
                  desc: 'WHO-GMP compliant panels supporting HEPA-filtered environments. Consistent thermal performance protects sensitive manufacturing processes.',
                },
              ].map((app, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-slate-600">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Phoenixx */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Choose Phoenixx PUF Roofing Panels
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              Manufactured to national standards and supplied from the Beawar warehouse
              for rapid delivery across Rajasthan.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Ready Stock', desc: 'Panels available at Beawar warehouse for fast dispatch' },
                { title: 'Premium PUF Core', desc: '40±2 kg/m³ density, 0.024 W/mK conductivity' },
                { title: 'Fast Delivery', desc: 'Same-day to next-day supply across Rajasthan' },
                { title: 'Contractor Friendly', desc: 'Easy installation — 400–600 sq. m/day per crew' },
                { title: 'Competitive Pricing', desc: 'Factory-direct rates with volume discounts' },
                { title: 'IS 14925:2015', desc: 'Compliant with Indian Standard for sandwich panels' },
                { title: 'ISO Certified', desc: '9001:2015 & 14001:2015 quality and environmental' },
                { title: 'Full Range', desc: '30 mm to 150 mm thickness in multiple profiles' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-xl text-green-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Technical Overview
            </h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Sandwich Panel Structure
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Each panel comprises a profiled outer steel skin (trapezoidal or standing
                  seam), a rigid closed-cell PUF core injected using CFC-free blowing
                  agents, and a flat or micro-ribbed inner steel skin. The continuous
                  lamination process ensures uniform foam density throughout, eliminating
                  air pockets and delivering consistent R-values across the entire roof area.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Insulation Performance
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  With thermal conductivity of 0.024 W/mK, Phoenixx PUF roofing panels
                  deliver the highest insulation performance among commonly used industrial
                  roofing materials. A 50 mm panel provides an R-value of approximately
                  2.08 m²K/W, reducing cooling loads significantly in Rajasthan&apos;s hot
                  climate where ambient temperatures routinely exceed 45°C.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Durability & Corrosion Resistance
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Pre-painted galvanised steel skins with polyester, SMP, or PVDF coatings
                  resist UV radiation, chemical exposure, and moisture. The closed-cell PUF
                  core absorbs zero water, preventing internal corrosion. Service life
                  exceeds 25 years with proper installation and minimal maintenance.
                </p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Energy Efficiency
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  By reducing heat transfer through the roof — the largest heat-gain surface
                  in any industrial building — PUF panels cut HVAC operating costs by
                  25–30%. In Rajasthan&apos;s 8-month summer, this translates to substantial
                  electricity savings. Most industrial projects achieve insulation ROI
                  within 2–3 years.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Coverage */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF Roofing Panel Supply Across Rajasthan
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              From the Beawar warehouse, Phoenixx supplies PUF roofing panels to all major
              industrial cities within a 300 km radius.
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
                    href={`/puf-roofing-panel-${slug}/`}
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
              Explore Phoenixx PUF Roofing Panel Resources
            </h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-4">By Topic</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/puf-roofing-panel-manufacturer" className="text-primary hover:underline">
                      PUF Roofing Panel Manufacturer
                    </Link>
                  </li>
                  <li>
                    <Link href="/puf-roofing-panel-supplier" className="text-primary hover:underline">
                      PUF Roofing Panel Supplier
                    </Link>
                  </li>
                  <li>
                    <Link href="/puf-roofing-panel-price" className="text-primary hover:underline">
                      PUF Roofing Panel Price Guide
                    </Link>
                  </li>
                  <li>
                    <Link href="/phoenixx-puf-roofing-panels" className="text-primary hover:underline">
                      Phoenixx PUF Roofing Panels
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Product Pages</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products/sandwich-panels/roofing-puf-panel" className="text-primary hover:underline">
                      Roofing PUF Panel — Product Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">
                      Sandwich PUF Panel — Full Range
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-a-quote" className="text-primary hover:underline">
                      Request a Project Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-primary hover:underline">
                      Contact Phoenixx Smart Build
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a PUF Roofing Panel Quote
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Phoenixx Smart Build delivers premium PUF roofing panels across Rajasthan.
              Get competitive project pricing with fast dispatch from Beawar.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%20Phoenixx,%20I%20need%20PUF%20roofing%20panels"
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
