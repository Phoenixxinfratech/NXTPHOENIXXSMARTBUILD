import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Ahmedabad | PHOENIXX',
  description: 'Leading PUF panel manufacturer in Ahmedabad, Gujarat. Factory in GIDC Naroda. Same-day delivery across Ahmedabad. Get free quote!',
  keywords: [
    'PUF panel manufacturer in Ahmedabad',
    'PUF panel Ahmedabad',
    'sandwich panel manufacturer Ahmedabad',
    'PUF panel GIDC Naroda',
    'PUF panel Sanand',
    'insulated panel Ahmedabad',
    'cold storage panel Ahmedabad',
    'roofing panel Ahmedabad',
  ],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/puf-panel-manufacturer-in-ahmedabad' },
  openGraph: {
    title: 'PUF Panel Manufacturer in Ahmedabad | PHOENIXX',
    description: 'Leading PUF panel manufacturer in Ahmedabad, Gujarat. Factory in GIDC Naroda. Same-day delivery across Ahmedabad.',
    url: 'https://phoenixxsmartbuild.com/puf-panel-manufacturer-in-ahmedabad',
    siteName: 'PHOENIXX SmartBuild',
    locale: 'en_IN',
    type: 'website',
  },
};

const faqs = [
  {
    question: 'Who is the best PUF panel manufacturer in Ahmedabad?',
    answer: 'PHOENIXX SmartBuild is the leading PUF panel manufacturer headquartered in Ahmedabad with our factory located in GIDC Naroda. We serve all industrial zones including Odhav, Vatva, Changodar, Sanand, and Bavla with premium quality panels and same-day delivery.',
  },
  {
    question: 'What types of PUF panels are available in Ahmedabad?',
    answer: 'PHOENIXX offers a complete range of insulated panels in Ahmedabad: Sandwich PUF panels, Roofing PUF panels, PIR fire-rated panels, Rockwool acoustic panels, and FM Approved panels. Available in 30mm to 200mm thickness with various coating options.',
  },
  {
    question: 'What is the price of PUF panels in Ahmedabad?',
    answer: 'PUF panel prices in Ahmedabad range from ₹85 to ₹200 per sq. ft depending on thickness, density, and coating. As a local manufacturer, PHOENIXX offers competitive factory-direct pricing. Contact us for project-specific quotations.',
  },
  {
    question: 'Do you deliver PUF panels to all GIDC areas in Ahmedabad?',
    answer: 'Yes, PHOENIXX delivers PUF panels to all GIDC industrial zones in Ahmedabad including Naroda, Odhav, Vatva, Changodar, Sanand, Bavla, and Aslali. Same-day delivery available for urgent requirements.',
  },
  {
    question: 'What industries in Ahmedabad use PHOENIXX PUF panels?',
    answer: 'Ahmedabad industries using our PUF panels include pharmaceutical companies, chemical plants, textile units, cold storage operators, food processing facilities, IT data centers, automobile ancillaries, and engineering workshops.',
  },
  {
    question: 'Can I visit the PHOENIXX factory in Ahmedabad?',
    answer: 'Yes, factory visits are welcome at our GIDC Naroda facility. You can see our manufacturing process, quality testing, and finished products. Contact us to schedule a visit.',
  },
  {
    question: 'Do you provide installation support in Ahmedabad?',
    answer: 'PHOENIXX provides comprehensive installation guidance and technical support for all Ahmedabad projects. We can recommend experienced installation contractors familiar with local building requirements.',
  },
  {
    question: 'What certifications do PHOENIXX panels have?',
    answer: 'Our panels are certified to IS 14925:2015, ISO 9001:2015, ISO 14001:2015, and FM 4880 Class 1 (for FM Approved range). All panels meet WHO-GMP requirements for pharmaceutical applications.',
  },
  {
    question: 'How fast is delivery in Ahmedabad?',
    answer: 'Being headquartered in Ahmedabad, we offer same-day delivery for stock items and 3-5 days for custom orders. Express delivery available for urgent requirements across all GIDC areas.',
  },
  {
    question: 'Do you supply panels to nearby cities like Gandhinagar and Sanand?',
    answer: 'Yes, we supply to entire Ahmedabad Metropolitan Region including Gandhinagar, Sanand, Kalol, Mehsana, Nadiad, Kheda, and surrounding areas. GIFT City projects are also served from our Ahmedabad facility.',
  },
];

const industrialZones = [
  'GIDC Naroda',
  'GIDC Odhav',
  'GIDC Vatva',
  'GIDC Changodar',
  'GIDC Sanand',
  'Bavla Industrial Area',
  'Aslali Industrial Zone',
  'Kathwada GIDC',
];

const products = [
  {
    title: 'Sandwich PUF Panel',
    description: 'High-performance insulated panels for walls and partitions in Ahmedabad industries.',
    link: '/sandwich-puf-panel-in-ahmedabad',
    icon: '🧱',
  },
  {
    title: 'Roofing PUF Panel',
    description: 'Heat-resistant roofing panels perfect for Ahmedabad\'s extreme summers.',
    link: '/roofing-puf-panel-in-ahmedabad',
    icon: '🏭',
  },
  {
    title: 'PIR Fire-Rated Panel',
    description: 'B-s1,d0 fire-rated panels for pharmaceutical and chemical plants.',
    link: '/pir-panel-in-ahmedabad',
    icon: '🔥',
  },
  {
    title: 'Rockwool Panel',
    description: 'Non-combustible A1-rated panels with superior acoustic insulation.',
    link: '/rockwool-panel-in-ahmedabad',
    icon: '🎵',
  },
  {
    title: 'FM Approved Panel',
    description: 'FM 4880 Class 1 certified panels for MNC manufacturing facilities.',
    link: '/fm-approved-panel-in-ahmedabad',
    icon: '✅',
  },
  {
    title: 'Cold Storage Panel',
    description: 'Temperature-controlled panels for Ahmedabad\'s cold chain infrastructure.',
    link: '/solutions/cold-storage-construction',
    icon: '❄️',
  },
];

const whyChooseUs = [
  { title: 'Ahmedabad HQ', desc: 'Factory in GIDC Naroda' },
  { title: 'Same-Day Delivery', desc: 'Across all GIDC areas' },
  { title: '10+ Years', desc: 'Gujarat market experience' },
  { title: 'Factory Visits', desc: 'See our manufacturing' },
  { title: 'ISO Certified', desc: '9001 & 14001 compliant' },
  { title: 'Free Quotes', desc: 'Within 24 hours' },
  { title: '500+ Clients', desc: 'In Gujarat alone' },
  { title: 'Full Range', desc: '30mm to 200mm thickness' },
];

const applications = [
  'Pharmaceutical Manufacturing (WHO-GMP)',
  'Chemical & Petrochemical Plants',
  'Cold Storage & Warehouses',
  'Food Processing Units',
  'Textile Manufacturing',
  'IT Data Centers',
  'Automobile Ancillary Units',
  'Clean Room Facilities',
];

export default function AhmedabadPage() {
  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PHOENIXX SmartBuild - Ahmedabad',
    description: 'Leading PUF panel manufacturer in Ahmedabad, Gujarat. Premium insulated sandwich panels for industrial, pharmaceutical, and cold storage applications.',
    url: 'https://phoenixxsmartbuild.com/puf-panel-manufacturer-in-ahmedabad',
    logo: 'https://phoenixxsmartbuild.com/images/logo.png',
    image: 'https://phoenixxsmartbuild.com/images/factory-ahmedabad.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GIDC Naroda, Phase II',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '382330',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 23.0733,
      longitude: 72.6486,
    },
    telephone: '+91-93289-15237',
    email: 'info@phoenixxsmartbuild.com',
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'City', name: 'Gandhinagar' },
      { '@type': 'City', name: 'Sanand' },
      { '@type': 'City', name: 'Kalol' },
      { '@type': 'City', name: 'Mehsana' },
    ],
    sameAs: [
      'https://www.linkedin.com/company/phoenixx-smartbuild',
      'https://www.facebook.com/phoenixxsmartbuild',
    ],
  };

  // FAQ Schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  // Product Schema
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PUF Sandwich Panels',
    description: 'Premium quality PUF insulated sandwich panels manufactured in Ahmedabad for industrial applications.',
    brand: {
      '@type': 'Brand',
      name: 'PHOENIXX SMARTBUILD',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'PHOENIXX SMARTBUILD',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ahmedabad',
        addressRegion: 'Gujarat',
        addressCountry: 'IN',
      },
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '85',
      highPrice: '200',
      priceValidUntil: '2025-12-31',
      availability: 'https://schema.org/InStock',
      offerCount: '6',
      areaServed: {
        '@type': 'City',
        name: 'Ahmedabad',
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={productSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
                  🏭 PHOENIXX Headquarters
                </span>
                <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  📍 Factory in GIDC Naroda
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Panel Manufacturer in Ahmedabad
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild is Ahmedabad&apos;s leading PUF panel manufacturer with our factory located in GIDC Naroda. Serving Gujarat&apos;s pharmaceutical, chemical, and industrial sectors with premium insulated panels since 2012.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Ahmedabad Quote
                </Link>
                <a
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  📞 Call: +91 93289 15237
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
                Ahmedabad&apos;s Trusted PUF Panel Manufacturer Since 2012
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Ahmedabad, Gujarat&apos;s commercial capital and a thriving industrial hub, is home to <strong>PHOENIXX SmartBuild&apos;s headquarters and manufacturing facility</strong>. Our factory in GIDC Naroda produces high-quality PUF panels that serve the diverse needs of Gujarat&apos;s pharmaceutical, chemical, textile, and food processing industries.
                </p>
                <p>
                  As a local manufacturer, we understand Ahmedabad&apos;s extreme climate challenges – scorching summers reaching 48°C and unpredictable monsoons. Our{' '}
                  <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">
                    PUF sandwich panels
                  </Link>{' '}
                  are engineered specifically for these conditions, featuring superior thermal insulation (0.024 W/mK) and corrosion-resistant coatings.
                </p>
                <p>
                  Being headquartered in Ahmedabad means <strong>same-day delivery</strong> to all GIDC industrial zones, factory visits for quality assurance, and dedicated local support. We&apos;ve served 500+ clients across Gujarat, including pharmaceutical giants, FMCG companies, and logistics operators.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF Panel Products Available in Ahmedabad
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Complete range of insulated panels manufactured locally and delivered same-day across Ahmedabad.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, idx) => (
                <Link
                  key={idx}
                  href={product.link}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-slate-100"
                >
                  <span className="text-4xl mb-4 block">{product.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{product.description}</p>
                  <span className="mt-4 inline-flex items-center text-primary font-medium">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Zones */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Industrial Zones We Serve in Ahmedabad
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Same-day delivery available to all GIDC industrial areas across Ahmedabad and nearby districts.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {industrialZones.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-5 text-center border border-slate-200"
                >
                  <span className="text-lg font-semibold text-slate-800">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate-600">
              Also serving: <strong>Gandhinagar, Sanand, Kalol, Mehsana, Nadiad, Kheda, GIFT City</strong>
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Ahmedabad Industries Choose PHOENIXX
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              Local manufacturing advantage with national quality standards.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-xl text-green-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF Panel Applications in Ahmedabad
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Serving diverse industries across Gujarat with specialized insulation solutions.
            </p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {applications.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-5 bg-gradient-to-r from-slate-50 to-white rounded-xl border border-slate-100"
                >
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="text-lg text-slate-700 font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Explore More PUF Panel Solutions
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">By Product Type</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/sandwich-puf-panel-in-ahmedabad" className="text-primary hover:underline">
                        → Sandwich PUF Panel in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/roofing-puf-panel-in-ahmedabad" className="text-primary hover:underline">
                        → Roofing PUF Panel in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/pir-panel-in-ahmedabad" className="text-primary hover:underline">
                        → PIR Panel in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/rockwool-panel-in-ahmedabad" className="text-primary hover:underline">
                        → Rockwool Panel in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/fm-approved-panel-in-ahmedabad" className="text-primary hover:underline">
                        → FM Approved Panel in Ahmedabad
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-slate-900 mb-4">Related Resources</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/resources/blogs/puf-panel-manufacturers-in-ahmedabad" className="text-primary hover:underline">
                        → Blog: PUF Panel Manufacturers in Ahmedabad
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop" className="text-primary hover:underline">
                        → View Panel Prices Online
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/technical-sheet" className="text-primary hover:underline">
                        → Download Technical Specifications
                      </Link>
                    </li>
                    <li>
                      <Link href="/solutions/cold-storage-construction" className="text-primary hover:underline">
                        → Cold Storage Construction
                      </Link>
                    </li>
                    <li>
                      <Link href="/industries/pharma-chemical" className="text-primary hover:underline">
                        → Pharma Industry Solutions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              FAQs – PUF Panels in Ahmedabad
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Common questions about PUF panel manufacturing, pricing, and delivery in Ahmedabad.
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get PUF Panels Delivered in Ahmedabad Today
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Factory-direct pricing from Ahmedabad&apos;s leading PUF panel manufacturer. Same-day delivery available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Free Quote
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                💬 WhatsApp Enquiry
              </a>
              <Link
                href="/shop"
                className="rounded-xl border-2 border-white/50 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                View Prices Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
