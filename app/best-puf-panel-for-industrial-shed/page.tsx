import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateArticleSchema,
  generateOfferSchema,
  generateSpeakableSchema,
  generateQAPageSchema,
  generateImageObjectSchema,
  generateVideoSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Which PUF Panel Is Best for Industrial Shed? | Expert Guide 2026',
  description:
    'Discover the best PUF panel for industrial sheds. Compare thickness, density, fire rating & cost. ISO certified manufacturer in India. Get free quote.',
  keywords: [
    'best PUF panel for industrial shed',
    'PUF panel for factory shed',
    'insulated panel for industrial building',
    'industrial shed roofing panel',
    'PUF panel for warehouse shed',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/best-puf-panel-for-industrial-shed',
  },
  openGraph: {
    title: 'Which PUF Panel Is Best for Industrial Shed? | Expert Guide 2026',
    description:
      'Discover the best PUF panel for industrial sheds. Compare thickness, density, fire rating & cost. ISO certified manufacturer in India.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-puf-panel-for-industrial-shed',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'What is the best PUF panel thickness for an industrial shed?',
    answer:
      'For standard industrial sheds, 50mm PUF panels are most commonly used for walls and 50-80mm for roofing. Cold storage sheds may require 100-150mm. The right thickness depends on your climate zone, internal temperature requirements, and budget.',
  },
  {
    question: 'How long do PUF panels last on an industrial shed?',
    answer:
      'High-quality PUF panels from reputable manufacturers like PHOENIXX last 25-30 years with proper installation. The closed-cell foam structure resists moisture degradation, and pre-painted steel facings provide corrosion protection.',
  },
  {
    question: 'Are PUF panels better than traditional roofing sheets for sheds?',
    answer:
      'Yes. PUF panels provide 40-60% faster construction, built-in thermal insulation (R-value up to 6.25 m²K/W), better weather protection, and 25-30% energy savings on HVAC compared to bare metal sheets that require separate insulation.',
  },
  {
    question: 'What is the cost of PUF panels for an industrial shed?',
    answer:
      'PUF panel prices range from ₹800 to ₹2,500 per sq.m depending on thickness (30-150mm), steel coating type (PE, SMP, PVDF), and quantity. A typical 1,000 sq.m shed costs ₹8-25 lakh for panels alone. Contact us for project-specific pricing.',
  },
  {
    question: 'Can PUF panels be used for both walls and roofing of industrial sheds?',
    answer:
      'Absolutely. Wall PUF panels use flat or micro-ribbed profiles for clean aesthetics, while roofing PUF panels use trapezoidal profiles for water drainage and structural spanning. PHOENIXX manufactures both types with matching specifications.',
  },
  {
    question: 'Do PUF panels meet fire safety standards for industrial buildings?',
    answer:
      'Yes. PHOENIXX PUF panels are available in B1, B2, and B3 fire classifications. For enhanced fire resistance, PIR (Polyisocyanurate) core panels are recommended. All panels comply with IS 14925:2015 and can be paired with fire-rated doors.',
  },
];

const howToSteps = [
  {
    name: 'Assess Your Requirements',
    text: 'Determine shed size, temperature needs, and local climate conditions.',
  },
  {
    name: 'Select Panel Thickness',
    text: 'Choose 50mm for standard sheds, 80mm for temperature-sensitive areas, 100mm+ for cold storage.',
  },
  {
    name: 'Choose Core Material',
    text: 'PUF for general use, PIR for fire-critical areas, Rockwool for extreme fire safety.',
  },
  {
    name: 'Specify Steel Coating',
    text: 'PE for indoor, SMP for standard outdoor, PVDF for coastal or harsh environments.',
  },
  {
    name: 'Verify Certifications',
    text: 'Ensure IS 14925, ISO 9001, and fire rating compliance.',
  },
  {
    name: 'Get Professional Quote',
    text: 'Contact manufacturer for project-specific pricing and technical support.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Industrial Shed PUF Panels',
  description:
    'Premium polyurethane foam insulated sandwich panels for industrial shed roofing and wall applications.',
  brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
  manufacturer: {
    '@type': 'Organization',
    name: 'NXT PHOENIXX SMARTBUILD LLP',
  },
  category: 'Insulated Panels',
  material: 'Polyurethane Foam (PUF) + Pre-painted Steel',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '156',
    bestRating: '5',
  },
  review: {
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: {
      '@type': 'Organization',
      name: 'Industrial Project Consultants',
    },
    reviewBody:
      'Excellent quality PUF panels for our 5,000 sq.m industrial shed project. On-time delivery and superior insulation performance.',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '800',
    highPrice: '2500',
    offerCount: '8',
    availability: 'https://schema.org/InStock',
  },
};

export default function BestPufPanelForIndustrialShedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* ── 14 JSON-LD Schemas ── */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateLocalBusinessSchema()} />
        <JsonLd data={generateWebsiteSchema()} />
        <JsonLd
          data={generateServiceSchema(
            'PUF Panels for Industrial Sheds',
            'Premium insulated sandwich panels for industrial shed construction. PHOENIXX SMARTBUILD manufactures high-density PUF panels with thermal conductivity of 0.024 W/mK, available in 30-150mm thickness for roofing and wall applications.',
            'https://phoenixxsmartbuild.com/best-puf-panel-for-industrial-shed'
          )}
        />
        <JsonLd data={generateFAQSchema(faqs)} />
        <JsonLd
          data={generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            {
              name: 'Best PUF Panel for Industrial Shed',
              url: '/best-puf-panel-for-industrial-shed',
            },
          ])}
        />
        <JsonLd
          data={generateHowToSchema(
            'How to Choose the Right PUF Panel for Your Industrial Shed',
            'Step-by-step guide to selecting the best insulated panel for industrial shed construction.',
            howToSteps
          )}
        />
        <JsonLd
          data={generateArticleSchema({
            title: 'Which PUF Panel Is Best for Industrial Shed?',
            description:
              'Complete guide to choosing the best PUF panel for industrial shed roofing and wall applications, covering thickness, density, fire rating, cost, and installation.',
            url: '/best-puf-panel-for-industrial-shed',
            image:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            datePublished: '2026-01-29',
            dateModified: '2026-01-29',
            author: { name: 'PHOENIXX SMARTBUILD Engineering Team' },
          })}
        />
        <JsonLd
          data={generateOfferSchema({
            name: 'Industrial Shed PUF Panels',
            description: 'Premium PUF insulated panels for industrial sheds',
            priceCurrency: 'INR',
            lowPrice: 800,
            highPrice: 2500,
            priceRange: '₹800-₹2,500 per sq.m',
            url: '/best-puf-panel-for-industrial-shed',
            availability: 'https://schema.org/InStock',
          })}
        />
        <JsonLd data={generateSpeakableSchema(['h1', 'h2', '.faq-answer'])} />
        <JsonLd
          data={generateQAPageSchema(
            'Which PUF panel is best for industrial shed?',
            [
              {
                text: 'For industrial sheds, Sandwich PUF Panels with 40 kg/m³ density and 50-80mm thickness offer the best balance of thermal insulation, structural strength, and cost-effectiveness. PHOENIXX SMARTBUILD manufactures ISO-certified PUF panels with thermal conductivity of 0.024 W/mK, suitable for both roofing and wall applications in industrial shed construction.',
                author: 'PHOENIXX SMARTBUILD',
              },
            ]
          )}
        />
        <JsonLd
          data={generateImageObjectSchema({
            name: 'PUF Panel Industrial Shed Installation',
            description: 'PHOENIXX PUF panels installed on industrial shed',
            contentUrl:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            width: 1200,
            height: 630,
          })}
        />
        <JsonLd
          data={generateVideoSchema({
            name: 'PHOENIXX PUF Panel Manufacturing & Installation',
            description:
              'Watch how PHOENIXX manufactures and installs premium PUF panels for industrial sheds across India.',
            thumbnailUrl:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            uploadDate: '2025-01-01',
            duration: 'PT5M30S',
            contentUrl:
              'https://phoenixxsmartbuild.com/videos/factory-tour',
          })}
        />
        <JsonLd data={productSchema} />

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1 — Trust-First Hero
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[600px] bg-slate-900 py-20 md:py-28">
          <div
            className="absolute inset-0 bg-[url('/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp')] bg-cover bg-center opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-slate-900/90" />
          <div className="container-custom relative z-10">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">
                    Products
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-emerald-400 font-medium">
                  Best PUF Panel for Industrial Shed
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-400 mb-6">
                ISO 9001:2015 Certified | 500+ Projects | 13+ Years Experience
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Which PUF Panel Is Best for Industrial Shed? — Expert Guide 2026
              </h1>

              <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
                Choosing the right PUF (Polyurethane Foam) panel for your industrial shed is one of
                the most important decisions you&apos;ll make during construction. The panel you select
                directly affects thermal efficiency, energy costs, structural durability, worker
                comfort, and long-term maintenance expenses. In this comprehensive guide, our
                engineering team breaks down every factor — thickness, density, fire rating, steel
                coating, and cost — so you can make a confident, informed decision for your
                industrial shed project.
              </p>

              <p className="mt-4 text-sm text-slate-400">
                📍 Manufacturer in Ahmedabad, Gujarat | Pan-India Delivery
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  📞 Call Now — +91 93289 15237
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2 — Problem → Solution
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Problem: Why Industrial Sheds Need Better Insulation
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  India&apos;s industrial sector loses crores of rupees every year due to poorly insulated
                  shed structures. Traditional GI sheet roofing and brick-wall construction may be
                  familiar, but they come with a hidden price tag that compounds over time. If you own
                  or plan to build an industrial shed, understanding these pain points is the first step
                  toward a smarter investment.
                </p>

                <ul className="space-y-3">
                  <li>
                    <strong>Extreme Heat Gain:</strong> Bare metal roofing sheets absorb solar radiation,
                    pushing indoor temperatures 10-15°C above ambient in summer. Workers on the shop
                    floor face heat stress, lowering productivity by up to 20%.
                  </li>
                  <li>
                    <strong>Skyrocketing Energy Costs:</strong> Without insulation, industrial HVAC
                    systems work overtime. A 5,000 sq.m factory shed can spend ₹8-12 lakh annually on
                    cooling alone — an expense that proper insulation can cut by 25-30%.
                  </li>
                  <li>
                    <strong>Worker Discomfort &amp; Safety:</strong> High temperatures and condensation
                    drips cause discomfort, increase accident risk, and contribute to higher employee
                    turnover in manufacturing environments.
                  </li>
                  <li>
                    <strong>Condensation &amp; Corrosion:</strong> Temperature differentials cause
                    moisture to condense on uninsulated metal surfaces, leading to corrosion, mold
                    growth, and premature structural deterioration.
                  </li>
                  <li>
                    <strong>Noise Pollution:</strong> Rain drumming on bare metal sheets creates noise
                    levels exceeding 80 dB, disrupting communication and requiring hearing protection
                    for workers.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  Stop Losing Money to Poor Insulation
                </h3>

                <p>
                  PUF (Polyurethane Foam) sandwich panels solve every one of these problems in a
                  single building component. By combining a rigid closed-cell insulation core with
                  durable pre-painted steel facings, PUF panels deliver thermal protection, weather
                  resistance, acoustic dampening, and structural strength — all without the need for
                  secondary insulation layers, waterproofing membranes, or additional cladding. The
                  result is faster construction, lower lifetime costs, and a dramatically better
                  working environment inside your industrial shed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3 — Product Explanation
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Makes PUF Panels Ideal for Industrial Sheds?
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  A PUF panel is an engineered sandwich structure consisting of two metal skins —
                  typically pre-painted galvanized steel (PPGI) or galvalume (PPGL) — bonded to a
                  rigid polyurethane foam core. The foam is injected at high pressure between the
                  metal faces and expands to form a monolithic bond, creating a composite panel with
                  exceptional strength-to-weight ratio. With a thermal conductivity of just 0.024
                  W/mK, PUF delivers the highest insulation value per millimetre of any commercially
                  available building insulation material.
                </p>
                <p>
                  For industrial shed applications, PUF panels are available in two primary profiles:{' '}
                  <Link
                    href="/products/sandwich-panels/sandwich-puf-panel"
                    className="text-primary hover:underline"
                  >
                    wall sandwich PUF panels
                  </Link>{' '}
                  with flat or micro-ribbed faces for clean vertical installations, and{' '}
                  <Link
                    href="/products/sandwich-panels/roofing-puf-panel"
                    className="text-primary hover:underline"
                  >
                    roofing PUF panels
                  </Link>{' '}
                  with trapezoidal profiles designed for water drainage and structural spanning up to
                  6-8 metres without purlins. This dual capability makes PUF the most versatile panel
                  system for complete industrial shed envelopes.
                </p>
              </div>
            </div>

            {/* Industries Served */}
            <div className="mt-14 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Industries We Serve with Industrial Shed PUF Panels
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: '🏭',
                    title: 'Manufacturing',
                    desc: 'Automobile, engineering, textile, and electronics plants requiring temperature-controlled environments.',
                  },
                  {
                    icon: '📦',
                    title: 'Warehousing & Logistics',
                    desc: 'Distribution centres and storage facilities needing stable indoor climate for goods protection.',
                  },
                  {
                    icon: '🍔',
                    title: 'Food Processing',
                    desc: 'Dairy, meat, seafood, and packaged food units with hygienic wall and ceiling requirements.',
                  },
                  {
                    icon: '💊',
                    title: 'Pharmaceuticals',
                    desc: 'GMP-compliant sheds for API manufacturing, formulation, and packaging operations.',
                  },
                  {
                    icon: '🚗',
                    title: 'Automobile',
                    desc: 'Assembly lines, paint shops, and component manufacturing units with dust-free requirements.',
                  },
                  {
                    icon: '🚚',
                    title: 'Logistics & 3PL',
                    desc: 'Third-party logistics hubs, sortation centres, and cross-dock facilities across India.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Specs Table */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                PUF Panel Specifications at a Glance
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                      <th className="px-6 py-4 text-left font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { label: 'Thickness Options', value: '30mm, 40mm, 50mm, 60mm, 80mm, 100mm, 120mm, 150mm' },
                      { label: 'Foam Density', value: '40 ± 2 kg/m³' },
                      { label: 'Thermal Conductivity', value: '0.024 W/mK (λ)' },
                      { label: 'Fire Rating', value: 'B1, B2, B3 (PIR option available)' },
                      { label: 'Max Span (Roof)', value: 'Up to 6-8 metres without purlins' },
                      { label: 'Steel Thickness', value: '0.40mm – 0.60mm PPGI/PPGL' },
                      { label: 'Coating Options', value: 'PE, SMP, PVDF' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 font-semibold text-slate-900">{row.label}</td>
                        <td className="px-6 py-4 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">
                Also explore:{' '}
                <Link
                  href="/products/sandwich-panels/sandwich-puf-panel"
                  className="text-primary hover:underline"
                >
                  Sandwich PUF Panel
                </Link>{' '}
                |{' '}
                <Link
                  href="/products/sandwich-panels/roofing-puf-panel"
                  className="text-primary hover:underline"
                >
                  Roofing PUF Panel
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4 — Benefits & ROI
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Benefits of Using PUF Panels for Industrial Sheds
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  The decision to use PUF panels over conventional construction methods isn&apos;t just
                  about insulation — it&apos;s a strategic investment that delivers measurable returns
                  across energy efficiency, construction speed, and building longevity. Here are the
                  eight most impactful benefits, backed by real project data from PHOENIXX
                  installations across India.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Superior Thermal Insulation',
                    desc: 'PUF panels deliver an R-value of up to 6.25 m²K/W at 150mm thickness — the highest per-millimetre insulation of any commercial panel. This keeps indoor temperatures stable, reducing HVAC load by 25-30% compared to uninsulated sheds.',
                  },
                  {
                    num: '02',
                    title: '40-60% Faster Construction',
                    desc: 'Prefabricated PUF panels arrive ready to install. A 5,000 sq.m industrial shed can be enclosed in 3-4 weeks versus 8-12 weeks for conventional brick-and-mortar construction, dramatically shortening your project timeline.',
                  },
                  {
                    num: '03',
                    title: '25-30% Energy Savings',
                    desc: 'Reduced thermal transfer means your cooling and heating systems consume significantly less electricity. Over a 25-year lifespan, this translates to savings of ₹50 lakh or more for a mid-sized factory shed.',
                  },
                  {
                    num: '04',
                    title: '30% Less Structural Steel',
                    desc: 'PUF panels are self-spanning up to 6-8 metres, reducing the need for secondary structural members like purlins and girts. This lowers your steel requirement and foundation costs.',
                  },
                  {
                    num: '05',
                    title: 'Weather & Moisture Protection',
                    desc: 'The closed-cell polyurethane core has zero water absorption, while tongue-and-groove joint systems prevent leaks. No condensation drips, no mold, no premature corrosion.',
                  },
                  {
                    num: '06',
                    title: 'Acoustic Performance',
                    desc: 'PUF panels reduce noise transmission by 25-30 dB, creating a quieter working environment. Rain noise, machinery vibration, and external traffic sounds are significantly dampened.',
                  },
                  {
                    num: '07',
                    title: 'Fire Safety Options',
                    desc: 'Available in B1, B2, and B3 fire classifications with PIR core upgrades for enhanced fire resistance. Meets IS 14925:2015 and insurance requirements for industrial occupancies.',
                  },
                  {
                    num: '08',
                    title: '25-30 Year Lifespan',
                    desc: 'Pre-painted steel facings with SMP or PVDF coatings resist UV degradation, chalking, and corrosion. The rigid foam core maintains its insulation properties for the full service life of the building.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
                  >
                    <span className="text-3xl font-black text-emerald-500">{item.num}</span>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Before vs After Grid */}
              <div className="mt-14">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  Before vs After: Conventional Construction vs PUF Panel Construction
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-red-700 mb-4">
                      ❌ Conventional Construction
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm">
                      <li>• Construction time: 8-12 weeks for enclosure</li>
                      <li>• No built-in insulation — separate layers needed</li>
                      <li>• High energy bills — ₹8-12 lakh/year cooling costs</li>
                      <li>• Heavy structural steel requirement</li>
                      <li>• Condensation, corrosion &amp; leakage risks</li>
                      <li>• 80+ dB rain noise on bare metal sheets</li>
                      <li>• Frequent maintenance every 3-5 years</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-emerald-700 mb-4">
                      ✅ PUF Panel Construction
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm">
                      <li>• Construction time: 3-4 weeks (40-60% faster)</li>
                      <li>• Built-in insulation — R-value up to 6.25 m²K/W</li>
                      <li>• 25-30% lower energy bills annually</li>
                      <li>• 30% less structural steel needed</li>
                      <li>• Zero water absorption, no condensation</li>
                      <li>• 25-30 dB noise reduction</li>
                      <li>• Minimal maintenance for 25-30 years</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-slate-600">
                Looking for{' '}
                <Link
                  href="/best-roofing-puf-panel-for-factory"
                  className="text-primary hover:underline font-medium"
                >
                  the best roofing PUF panel specifically for factory buildings
                </Link>
                ? We have a dedicated guide covering roofing-specific considerations.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5 — Real Projects
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Real Projects Delivered by PHOENIXX
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Our industrial shed PUF panel installations span Fortune 500 companies to emerging
              manufacturers. Here are four representative projects showcasing our capability and
              quality.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Reliance Industries — Jamnagar',
                  location: 'Jamnagar, Gujarat',
                  industry: 'Petrochemicals & Manufacturing',
                  scope: '12,000 sq.m industrial shed complex',
                  products: 'Roofing PUF 80mm + Wall PUF 50mm (PVDF coating)',
                  outcome:
                    'Achieved 28% reduction in HVAC costs with superior thermal performance in coastal climate conditions.',
                  slug: 'reliance-industries-jamnagar',
                },
                {
                  name: 'UFlex Limited — Sanand',
                  location: 'Sanand, Gujarat',
                  industry: 'Flexible Packaging',
                  scope: '8,500 sq.m manufacturing unit',
                  products: 'Roofing PUF 60mm + Wall PUF 50mm (SMP coating)',
                  outcome:
                    'Completed installation in 18 days. Maintained ±2°C temperature control for precision packaging processes.',
                  slug: 'uflex-sanand',
                },
                {
                  name: 'Cargill India — Gandhidham',
                  location: 'Gandhidham, Gujarat',
                  industry: 'Food Processing & Storage',
                  scope: '6,000 sq.m warehouse with controlled environment',
                  products: 'Roofing PUF 100mm + Wall PUF 80mm (SMP coating)',
                  outcome:
                    'Met FSSAI-compliant temperature standards for food-grade warehousing. Zero moisture ingress over 3+ years.',
                  slug: 'cargill-gandhidham',
                },
                {
                  name: 'Motherson (Marelli) — Sanand',
                  location: 'Sanand, Gujarat',
                  industry: 'Automobile Components',
                  scope: '10,000 sq.m assembly and testing facility',
                  products: 'Roofing PUF 60mm + Wall PUF 50mm + PIR panels for paint shop',
                  outcome:
                    'Achieved dust-free assembly environment and fire-rated enclosure for the paint shop area. On-time delivery in 22 days.',
                  slug: 'motherson-marelli-sanand',
                },
              ].map((project, idx) => (
                <Link
                  key={idx}
                  href={`/resources/project-gallery/${project.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all border border-slate-100"
                >
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1">{project.location}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-slate-700">Industry:</span>{' '}
                      {project.industry}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Scope:</span> {project.scope}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Products:</span>{' '}
                      {project.products}
                    </p>
                    <p className="text-emerald-700 font-medium mt-3">✓ {project.outcome}</p>
                  </div>
                </Link>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-slate-500">
              Engineered by PHOENIXX Technical Team | 13+ Years Industrial Experience
            </p>

            <p className="mt-4 text-center text-slate-600">
              Need insulated panels specifically for warehouse applications? Read our{' '}
              <Link
                href="/best-insulated-panel-for-warehouse"
                className="text-primary hover:underline font-medium"
              >
                best insulated panel for warehouse
              </Link>{' '}
              guide.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6 — Technical Specifications
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Technical Specifications for Industrial Shed PUF Panels
              </h2>

              <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                PHOENIXX PUF panels are manufactured to meet Indian and international quality
                standards. Below are the detailed technical specifications for our industrial shed
                panel range.
              </p>

              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Specification</th>
                      <th className="px-6 py-4 text-left font-semibold">Value / Range</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { label: 'Panel Thickness', value: '30mm, 40mm, 50mm, 60mm, 80mm, 100mm, 120mm, 150mm' },
                      { label: 'Foam Core Density', value: '40 ± 2 kg/m³ (high-density rigid PUF)' },
                      { label: 'Thermal Conductivity (λ)', value: '0.024 W/mK' },
                      { label: 'R-Value (at 50mm)', value: '2.08 m²K/W' },
                      { label: 'R-Value (at 100mm)', value: '4.17 m²K/W' },
                      { label: 'Fire Classification', value: 'B1 (self-extinguishing), B2, B3; PIR option available' },
                      { label: 'Steel Facing Thickness', value: '0.40mm, 0.45mm, 0.50mm, 0.60mm (PPGI/PPGL)' },
                      { label: 'Coating Options', value: 'PE (Polyester), SMP (Silicone Modified Polyester), PVDF (Polyvinylidene Fluoride)' },
                      { label: 'Panel Width', value: '1000mm (effective coverage)' },
                      { label: 'Panel Length', value: 'Custom — up to 20 metres' },
                      { label: 'Temperature Range', value: '-40°C to +80°C' },
                      { label: 'Water Absorption', value: '< 1.5% by volume (closed-cell structure)' },
                      { label: 'Compressive Strength', value: '≥ 0.15 MPa' },
                      { label: 'Service Life', value: '25-30 years with proper installation' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-3 font-semibold text-slate-900 text-sm">
                          {row.label}
                        </td>
                        <td className="px-6 py-3 text-slate-600 text-sm">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Compliance */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Compliance &amp; Certifications
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { std: 'IS 14925:2015', desc: 'Indian Standard for sandwich panels' },
                    { std: 'ISO 9001:2015', desc: 'Quality Management System' },
                    { std: 'ISO 14001:2015', desc: 'Environmental Management System' },
                    { std: 'FM 4880', desc: 'Factory Mutual approval for insulated panels' },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-emerald-50 rounded-xl p-4"
                    >
                      <span className="text-emerald-600 font-bold text-lg mt-0.5">✓</span>
                      <div>
                        <span className="font-bold text-slate-900">{item.std}</span>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparing core material types */}
              <p className="mt-8 text-slate-600">
                Not sure whether PUF or Rockwool is right for your application? Read our detailed{' '}
                <Link
                  href="/puf-panel-vs-rockwool-panel"
                  className="text-primary hover:underline font-medium"
                >
                  PUF panel vs Rockwool panel comparison
                </Link>{' '}
                guide.
              </p>

              {/* Downloads */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/resources/technical-sheet"
                  className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition-colors text-sm"
                >
                  📄 Download Technical Datasheet
                </Link>
                <Link
                  href="/resources/brochure"
                  className="rounded-xl border-2 border-slate-900 px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100 transition-colors text-sm"
                >
                  📘 Download Product Brochure
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 7 — Pricing Guidance
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                PUF Panel Price Guide for Industrial Sheds in India
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Pricing for PUF panels depends on several project-specific factors. Below are
                  indicative price ranges for 2026 to help you budget your industrial shed project.
                  For exact pricing tailored to your requirements, we recommend requesting a formal
                  quotation from our team.
                </p>
              </div>

              {/* Price Table */}
              <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-700 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Thickness Range</th>
                      <th className="px-6 py-4 text-left font-semibold">
                        Price Range (per sq.m)
                      </th>
                      <th className="px-6 py-4 text-left font-semibold">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-semibold text-slate-900">30-50mm</td>
                      <td className="px-6 py-4 text-emerald-700 font-bold">₹800 – ₹1,200</td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        Standard walls, partitions, mild climates
                      </td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-slate-900">50-80mm</td>
                      <td className="px-6 py-4 text-emerald-700 font-bold">₹1,200 – ₹1,800</td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        Roofing, temperature-sensitive sheds, hot climates
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-6 py-4 font-semibold text-slate-900">80-150mm</td>
                      <td className="px-6 py-4 text-emerald-700 font-bold">₹1,800 – ₹2,500</td>
                      <td className="px-6 py-4 text-slate-600 text-sm">
                        Cold storage, controlled environments, extreme climates
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Factors That Affect PUF Panel Pricing
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      factor: 'Panel Thickness',
                      detail:
                        'Thicker panels use more raw material and cost proportionally more. However, the energy savings from thicker panels often justify the higher upfront cost within 2-3 years.',
                    },
                    {
                      factor: 'Steel Coating Type',
                      detail:
                        'PE coatings are most economical, SMP offers better durability for standard outdoor use, and PVDF provides premium corrosion resistance for coastal and harsh environments.',
                    },
                    {
                      factor: 'Order Quantity',
                      detail:
                        'Larger orders (1,000+ sq.m) benefit from volume discounts and optimized production runs, reducing per-unit costs by 5-15%.',
                    },
                    {
                      factor: 'Customization Requirements',
                      detail:
                        'Non-standard panel lengths, special colours, fire-rated cores (PIR), and specific profile designs may carry a premium over standard specifications.',
                    },
                    {
                      factor: 'Delivery Location',
                      detail:
                        'Freight costs vary by distance from our Ahmedabad manufacturing facility. Pan-India delivery is available with transparent logistics pricing.',
                    },
                    {
                      factor: 'Steel Market Rates',
                      detail:
                        'Steel prices fluctuate quarterly. Locking in pricing early with a confirmed order helps protect against market volatility.',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border border-slate-100">
                      <h4 className="font-bold text-slate-900">{item.factor}</h4>
                      <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-lg"
                >
                  Get Your Custom Quote — Free &amp; No Obligation
                </Link>
                <p className="mt-3 text-sm text-slate-500">
                  Typical response time: within 4 working hours
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 8 — FAQ Accordion
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-semibold text-slate-900 hover:bg-slate-100 transition-colors [&::-webkit-details-marker]:hidden">
                    <span>{faq.question}</span>
                    <span className="ml-4 text-xl text-slate-400 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="faq-answer text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 9 — Conversion Footer
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Industrial Shed with Premium PUF Panels?
            </h2>
            <p className="text-xl text-emerald-100 mb-4 max-w-2xl mx-auto">
              Get expert guidance from PHOENIXX SMARTBUILD — India&apos;s trusted PUF panel
              manufacturer with 13+ years of industrial project experience. From technical design to
              on-site installation, we&apos;re with you at every step.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-lg">
              <a
                href="tel:+919328915237"
                className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
              >
                📞 <span className="font-semibold">+91 93289 15237</span>
              </a>
              <a
                href="https://wa.me/919328915237"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
              >
                💬 <span className="font-semibold">WhatsApp Us</span>
              </a>
              <a
                href="mailto:sales@phoenixxsmartbuild.com"
                className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
              >
                ✉️ <span className="font-semibold">sales@phoenixxsmartbuild.com</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-emerald-200">
              <span className="bg-white/10 rounded-full px-4 py-1.5">ISO 9001:2015</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">500+ Projects</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">Pan-India Delivery</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">13+ Years</span>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href="https://wa.me/919328915237"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                WhatsApp Now
              </a>
              <a
                href="tel:+919328915237"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Call Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
