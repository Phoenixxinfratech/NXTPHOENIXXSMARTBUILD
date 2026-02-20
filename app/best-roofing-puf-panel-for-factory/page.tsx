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
  title: 'Which Roofing PUF Panel Is Best for Factory? | Guide 2026',
  description:
    'Find the best roofing PUF panel for your factory. Compare profiles, thickness, wind resistance & costs. ISO certified manufacturer in India. Free quote.',
  keywords: [
    'best roofing PUF panel for factory',
    'factory roof insulation panel',
    'roofing sandwich panel',
    'insulated roof panel manufacturer',
    'factory roofing solution India',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/best-roofing-puf-panel-for-factory',
  },
  openGraph: {
    title: 'Which Roofing PUF Panel Is Best for Factory? | Guide 2026',
    description:
      'Find the best roofing PUF panel for your factory. Compare profiles, thickness, wind resistance & costs.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-roofing-puf-panel-for-factory',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'What profile is best for factory roofing PUF panels?',
    answer:
      'Trapezoidal profiles are the industry standard for factory roofing. They provide excellent water drainage, structural rigidity, and can span 3-4 meters between purlins. Standing seam profiles are preferred for leak-proof installations in critical facilities.',
  },
  {
    question: 'What thickness should I choose for factory roof PUF panels?',
    answer:
      'For standard factories in tropical climates, 50-60mm provides adequate insulation. For temperature-controlled facilities, 80-100mm is recommended. Cold storage roofs require 100-150mm for optimal performance.',
  },
  {
    question: 'Can roofing PUF panels withstand heavy rain and wind?',
    answer:
      'Yes. PHOENIXX roofing panels are wind-load tested as per IS 875 and can withstand winds up to 150 km/h. The interlocking joint system prevents water ingress even during heavy monsoon rainfall.',
  },
  {
    question: 'Do roofing PUF panels prevent condensation in factories?',
    answer:
      'Yes. The insulated PUF core creates a thermal barrier that prevents condensation forming on the underside of the roof — a common problem with bare metal roofing sheets. Anti-condensation fleece can be added for high-humidity environments.',
  },
  {
    question: 'How long do factory roofing PUF panels last?',
    answer:
      'With proper installation and maintenance, PHOENIXX roofing PUF panels last 25+ years. UV-resistant outer coatings protect against color fading and degradation from prolonged sun exposure.',
  },
  {
    question: 'What is the cost of roofing PUF panels for a factory?',
    answer:
      'Factory roofing PUF panel costs range from ₹900 to ₹2,200 per sq.m depending on thickness (40-120mm), profile type, and coating. A 2,000 sq.m factory roof typically costs ₹18-44 lakh for panels.',
  },
];

const howToSteps = [
  {
    name: 'Determine Roof Area & Slope',
    text: 'Calculate total roof area and design slope for proper drainage. A minimum 5° slope is recommended for PUF roofing panels to ensure efficient rainwater runoff.',
  },
  {
    name: 'Choose Profile Type',
    text: 'Select trapezoidal profile for standard factory roofing or standing seam profile for critical facilities requiring zero-leak guarantees.',
  },
  {
    name: 'Select Panel Thickness',
    text: 'Choose thickness based on climate zone and internal temperature requirements. 50-60mm for general factories, 80-100mm for temperature-controlled, 100-150mm for cold storage.',
  },
  {
    name: 'Specify Wind & Load Rating',
    text: 'Ensure compliance with IS 875 for your region\'s wind speed zone. Coastal and high-wind areas require additional fastener density and load calculations.',
  },
  {
    name: 'Choose Coating Type',
    text: 'Select SMP coating for standard outdoor applications or PVDF coating for coastal areas and harsh weather environments requiring superior UV and corrosion resistance.',
  },
  {
    name: 'Plan Accessories',
    text: 'Specify skylights, ridge caps, flashing, gutter integration, and ventilation accessories. Proper accessory planning ensures a watertight and maintenance-free roofing system.',
  },
];

const projects = [
  {
    name: 'Bunge India – Gandhidham',
    area: '4,500 sq.m',
    panels: 'Trapezoidal Roofing PUF 60mm',
    detail: 'Edible oil processing facility roofing with SMP coating for coastal climate protection.',
  },
  {
    name: 'Agrawal Metal Works – Vithlapur',
    area: '3,200 sq.m',
    panels: 'Standing Seam Roofing PUF 50mm',
    detail: 'Metal fabrication unit with high-span roofing eliminating intermediate purlins.',
  },
  {
    name: 'Vyara Tiles – Gangad',
    area: '5,800 sq.m',
    panels: 'Trapezoidal Roofing PUF 80mm',
    detail: 'Ceramic tile manufacturing facility requiring superior heat insulation from kiln operations.',
  },
  {
    name: 'Rotomotive Powerdrives – Anand',
    area: '2,800 sq.m',
    panels: 'Concealed Fix Roofing PUF 60mm',
    detail: 'Precision engineering facility with leak-proof concealed fastener roofing system.',
  },
];

const pageUrl = 'https://phoenixxsmartbuild.com/best-roofing-puf-panel-for-factory';

export default function BestRoofingPufPanelForFactoryPage() {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateServiceSchema(
      'Factory Roofing PUF Panels',
      'Insulated roofing sandwich panels for factory construction. Trapezoidal, standing seam, and concealed fix profiles with 40-120mm PUF core, wind-load tested to IS 875, UV-resistant coatings, and 25+ year service life. Delivered and installed across India.',
      pageUrl
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Best Roofing PUF Panel for Factory', url: '/best-roofing-puf-panel-for-factory' },
    ]),
    generateHowToSchema(
      'How to Select the Best Roofing PUF Panel for Your Factory',
      'A step-by-step guide to choosing the right roofing PUF panel profile, thickness, coating, and accessories for factory construction in India.',
      howToSteps
    ),
    generateArticleSchema({
      title: 'Which Roofing PUF Panel Is Best for Factory? — Selection Guide 2026',
      description:
        'Comprehensive guide to selecting the best roofing PUF panel for factory construction. Compare profiles, thickness options, wind ratings, coatings, and costs.',
      url: pageUrl,
      image: 'https://phoenixxsmartbuild.com/images/roofing-puf-panel-factory.jpg',
      datePublished: '2025-01-15',
      dateModified: '2026-01-10',
      author: { name: 'PHOENIXX SMARTBUILD Engineering Team', url: 'https://phoenixxsmartbuild.com/about' },
    }),
    generateOfferSchema({
      name: 'Factory Roofing PUF Panels',
      description: 'Insulated roofing PUF panels for factory construction — trapezoidal, standing seam, and concealed fix profiles.',
      priceCurrency: 'INR',
      lowPrice: 900,
      highPrice: 2200,
      priceRange: '₹900-₹2,200 per sq.m',
      url: pageUrl,
    }),
    generateSpeakableSchema(['h1', '.ai-summary', '.faq-answer']),
    generateQAPageSchema('Which roofing PUF panel is best for factory?', [
      {
        text: 'Trapezoidal profile PUF panels with 50-80mm thickness are optimal for most factory roofing applications. They offer the best combination of structural rigidity, water drainage, long span capability (3-4m between purlins), and thermal insulation. For critical facilities, standing seam profiles provide a completely leak-proof solution. Choose SMP coating for inland locations and PVDF for coastal or harsh environments.',
        author: 'PHOENIXX SMARTBUILD Engineering Team',
      },
    ]),
    generateImageObjectSchema({
      name: 'Factory Roofing PUF Panel Installation by PHOENIXX',
      description:
        'Trapezoidal roofing PUF panel installation on an industrial factory showing interlocking joints and ridge cap detailing.',
      contentUrl: '/images/roofing-puf-panel-factory.jpg',
      width: 1200,
      height: 630,
    }),
    generateVideoSchema({
      name: 'PHOENIXX Factory Roofing Installation',
      description:
        'Watch a complete factory roofing PUF panel installation by PHOENIXX SMARTBUILD — from purlin layout to ridge cap finishing on a 5,000 sq.m industrial facility.',
      thumbnailUrl: 'https://phoenixxsmartbuild.com/images/video-thumb-roofing.jpg',
      uploadDate: '2025-01-01',
      duration: 'PT6M15S',
    }),
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PHOENIXX Factory Roofing PUF Panel',
    description:
      'Premium insulated roofing PUF panels for industrial factory construction with trapezoidal, standing seam, and concealed fix profiles.',
    brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
    manufacturer: {
      '@type': 'Organization',
      name: 'PHOENIXX SMARTBUILD',
      address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
    },
    image: 'https://phoenixxsmartbuild.com/images/roofing-puf-panel-factory.jpg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '142',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'Verified Industrial Client' },
      reviewBody: 'Excellent roofing PUF panels — zero leakage after two monsoon seasons and noticeable drop in factory temperature.',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '900',
      highPrice: '2200',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {schemas.map((schema, idx) => (
          <JsonLd key={idx} data={schema} />
        ))}
        <JsonLd data={productSchema} />

        {/* ─── Section 1: Trust-First Hero ─── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                  ISO Certified
                </span>
                <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  Wind Tested to 150 km/h
                </span>
                <span className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
                  500+ Roofing Projects
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Which Roofing PUF Panel Is Best for Factory? — Selection Guide 2026
              </h1>
              <p className="ai-summary mt-6 text-xl text-slate-300 max-w-3xl">
                The right roofing PUF panel can cut your factory&apos;s cooling costs by up to 30%, eliminate roof
                condensation, and slash construction time in half. This guide helps you choose the ideal profile,
                thickness, and coating for your factory — backed by 500+ roofing projects delivered across India.
              </p>
              <p className="mt-4 text-slate-400 text-sm">
                Trusted by factory owners in Gujarat, Maharashtra, Rajasthan &amp; Tamil Nadu
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Free Roofing Quote
                </Link>
                <a
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Call Now: +91 93289 15237
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 2: Problem → Solution ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Your Factory Roof Is Costing You More Than It Should
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Most factory owners don&apos;t realize that their roof is the single largest source of heat gain in an
                  industrial building. Bare metal roofing sheets — the default choice in most Indian factories — absorb
                  solar radiation all day long, turning the factory floor into an oven by mid-afternoon. The
                  consequences are far-reaching: workers become less productive in temperatures exceeding 38°C, machinery
                  runs hotter and requires more frequent maintenance, and air conditioning systems work overtime trying
                  to compensate for the relentless heat pouring through the roof.
                </p>
                <p>
                  Condensation is another silent problem. When hot, humid air meets a cold metal surface at night, water
                  droplets form on the underside of your roof. Over months and years, this condensation leads to
                  corrosion, dripping onto products and equipment, mold growth in storage areas, and eventual structural
                  weakening of the roofing system. Add monsoon leaks from poorly sealed joints, and you have a roofing
                  system that actively works against your business.
                </p>
                <p>
                  <strong>Insulated roofing PUF panels solve every one of these problems in a single product.</strong>{' '}
                  A roofing PUF panel is a factory-engineered sandwich — a rigid polyurethane foam core bonded between
                  two profiled metal sheets. The PUF core provides outstanding thermal insulation (thermal conductivity
                  as low as 0.024 W/mK), the profiled outer sheet sheds water efficiently, and the inner lining creates
                  a clean, condensation-free ceiling. The result is a factory that stays 8-12°C cooler in summer,
                  remains completely dry during monsoons, and costs 25-30% less to air-condition.
                </p>
                <p>
                  Whether you are building a new factory or replacing an ageing roof, choosing the right{' '}
                  <Link href="/products/sandwich-panels/roofing-puf-panel" className="text-primary hover:underline">
                    roofing PUF panel
                  </Link>{' '}
                  is one of the most impactful decisions you will make for your facility&apos;s long-term performance
                  and operating costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Product Explanation ─── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Understanding Roofing PUF Panel Profiles &amp; Performance
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Not all roofing PUF panels are the same. The <strong>profile type</strong> — the shape pressed into the
                  outer metal sheet — determines how the panel drains water, how far it can span between purlins, and how
                  it handles wind uplift. Choosing the correct profile is just as important as choosing the right
                  thickness or coating.
                </p>
                <h3>Trapezoidal Profile</h3>
                <p>
                  The most widely used profile for factory roofing. Trapezoidal ribs provide a deep, strong cross-section
                  that handles heavy rain loads and spans 3-4 meters between purlins. This longer span means fewer
                  structural supports, reducing your steel consumption by up to 40% compared to single-skin roofing.
                  Trapezoidal roofing PUF panels are the go-to choice for general manufacturing plants, warehouses, and
                  logistics centers.
                </p>
                <h3>Standing Seam Profile</h3>
                <p>
                  Designed for zero-leak performance. The raised seam joint sits above the water line, so even during
                  torrential rainfall the joints remain completely dry. Standing seam roofing PUF panels are preferred for
                  pharmaceutical factories, food processing units, electronics assembly plants, and any facility where
                  even minor leakage is unacceptable. The concealed fastener system also eliminates screw-hole weathering
                  over time.
                </p>
                <h3>Concealed Fix Profile</h3>
                <p>
                  A middle-ground option where fasteners are hidden beneath overlapping ribs, giving a cleaner appearance
                  while still providing reliable weather protection. Concealed fix panels work well for light industrial
                  facilities, commercial buildings, and factories where aesthetics matter alongside performance.
                </p>
              </div>

              <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="px-6 py-4 bg-slate-800 text-white">
                  <h3 className="font-bold text-lg">Profile Comparison — Factory Roofing PUF Panels</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-6 py-3 font-semibold text-slate-700">Feature</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Trapezoidal</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Standing Seam</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Concealed Fix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['Max Span', '3-4 m', '2.5-3.5 m', '2-3 m'],
                        ['Water Tightness', 'Very Good', 'Excellent', 'Good'],
                        ['Fastener Type', 'Through-fix', 'Concealed clip', 'Hidden overlap'],
                        ['Wind Uplift Rating', 'High', 'Very High', 'Medium-High'],
                        ['Recommended For', 'General factories', 'Critical facilities', 'Light industrial'],
                        ['Cost (relative)', 'Moderate', 'Higher', 'Moderate'],
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-3 font-medium text-slate-800">{row[0]}</td>
                          <td className="px-6 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-6 py-3 text-slate-600">{row[2]}</td>
                          <td className="px-6 py-3 text-slate-600">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-6 text-center">
                <Link
                  href="/products/sandwich-panels/roofing-puf-panel"
                  className="text-primary hover:underline font-medium"
                >
                  View Full Roofing PUF Panel Specifications →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ─── Section 4: Benefits & ROI ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Benefits of Roofing PUF Panels for Factory Construction
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Every benefit below translates directly into measurable savings or productivity gains for your factory.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Up to 30% Energy Savings',
                    desc: 'The PUF core blocks solar heat gain through the roof, reducing HVAC load by 25-30%. For a 5,000 sq.m factory spending ₹8 lakh/year on cooling, that translates to ₹2-2.4 lakh annual savings.',
                  },
                  {
                    num: '02',
                    title: '50% Faster Construction',
                    desc: 'Pre-engineered roofing PUF panels install 2x faster than traditional multi-layer roofing systems. A 3,000 sq.m roof can be completed in 7-10 days versus 20+ days for conventional insulation.',
                  },
                  {
                    num: '03',
                    title: '40% Less Structural Steel',
                    desc: 'Trapezoidal PUF panels span 3-4 meters between purlins, reducing the number of secondary steel members by up to 40% — a significant cost saving on large factory roofs.',
                  },
                  {
                    num: '04',
                    title: 'Zero Condensation',
                    desc: 'The thermal barrier prevents warm moist air from contacting cold surfaces, eliminating under-roof condensation — protecting products, equipment, and structural integrity.',
                  },
                  {
                    num: '05',
                    title: 'Monsoon-Proof Joints',
                    desc: 'Interlocking panel joints and factory-applied sealant create a watertight envelope that resists heavy monsoon rainfall. Standing seam profiles offer zero-penetration joints.',
                  },
                  {
                    num: '06',
                    title: '8-12°C Cooler Interiors',
                    desc: 'Factories with PUF roofing panels report 8-12°C lower interior temperatures compared to single-skin metal roofs — directly improving worker comfort and productivity.',
                  },
                  {
                    num: '07',
                    title: '25+ Year Service Life',
                    desc: 'UV-resistant coatings protect against colour fading and surface degradation. The closed-cell PUF core resists moisture absorption, maintaining insulation performance for decades.',
                  },
                  {
                    num: '08',
                    title: 'Lightweight Load',
                    desc: 'Roofing PUF panels weigh just 8-15 kg/sq.m depending on thickness — significantly lighter than brick-and-mortar or concrete roofing, reducing foundation and structural requirements.',
                  },
                ].map((benefit) => (
                  <div key={benefit.num} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-3xl font-black text-emerald-500/30 shrink-0">{benefit.num}</span>
                    <div>
                      <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                      <p className="mt-1 text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">Traditional Metal Roof</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Interior temp 50°C+ in summer</li>
                    <li>• Heavy condensation &amp; dripping</li>
                    <li>• Joint leaks during monsoon</li>
                    <li>• High AC energy bills</li>
                    <li>• Worker discomfort &amp; reduced output</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <h3 className="font-bold text-emerald-800 mb-3">PUF Panel Roof</h3>
                  <ul className="space-y-2 text-emerald-700 text-sm">
                    <li>• Interior 8-12°C cooler</li>
                    <li>• Zero condensation</li>
                    <li>• Leak-proof interlocking joints</li>
                    <li>• 25-30% lower cooling costs</li>
                    <li>• Improved worker productivity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 5: Real Projects ─── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Factory Roofing Projects Delivered by PHOENIXX
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Real installations across Gujarat — each project engineered for the client&apos;s specific requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                      {project.area}
                    </span>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      {project.panels}
                    </span>
                  </div>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{project.detail}</p>
                  <Link
                    href="/projects"
                    className="mt-4 inline-flex items-center text-primary text-sm font-medium hover:underline"
                  >
                    View Project Gallery →
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/best-puf-panel-for-industrial-shed"
                className="text-primary hover:underline font-medium"
              >
                Related: Best PUF Panel for Industrial Shed →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section 6: Technical Specs ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Roofing PUF Panel — Technical Specifications
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Complete engineering data for architects, structural consultants, and procurement teams.
            </p>
            <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <table className="w-full">
                <tbody className="divide-y divide-slate-200">
                  {[
                    { label: 'Profile Types', value: 'Trapezoidal, Standing Seam, Concealed Fix' },
                    { label: 'Panel Thickness', value: '40mm, 50mm, 60mm, 80mm, 100mm, 120mm' },
                    { label: 'PUF Density', value: '40 ± 2 kg/m³ (CFC & HFC Free)' },
                    { label: 'Thermal Conductivity', value: '0.024 W/mK @ 25°C' },
                    { label: 'Panel Width (effective)', value: '1000mm standard' },
                    { label: 'Panel Length', value: 'Up to 16 meters (custom lengths available)' },
                    { label: 'Steel Thickness', value: '0.45mm – 0.60mm (PPGI / PPGL / SS)' },
                    { label: 'Coating Options', value: 'SMP (standard), PVDF (coastal/harsh), SDP' },
                    { label: 'Wind Load Rating', value: 'Tested as per IS 875 — up to 150 km/h' },
                    { label: 'Purlin Span', value: '3-4m (trapezoidal), 2.5-3.5m (standing seam)' },
                    { label: 'Fire Rating', value: 'B2 standard, B1 / PIR options available' },
                    { label: 'Accessories', value: 'Ridge caps, valley gutters, flashing, skylights, ventilators' },
                    { label: 'Service Life', value: '25+ years with proper installation' },
                    { label: 'Compliance', value: 'IS 14925:2015, ISO 9001:2015, ISO 14001:2015' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-4 font-semibold text-slate-900 w-2/5">{row.label}</td>
                      <td className="px-6 py-4 text-slate-600">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
              <Link
                href="/resources/technical-sheet"
                className="text-primary hover:underline font-medium"
              >
                Download Technical Data Sheet (PDF) →
              </Link>
              <Link
                href="/best-puf-panel-thickness-for-roofing"
                className="text-primary hover:underline font-medium"
              >
                Related: Best PUF Panel Thickness for Roofing →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section 7: Pricing ─── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Factory Roofing PUF Panel Pricing — 2026
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Indicative pricing per square meter. Final rates depend on order quantity, profile, coating, and delivery location.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white text-left">
                        <th className="px-6 py-3 font-semibold">Thickness</th>
                        <th className="px-6 py-3 font-semibold">Price Range (₹/sq.m)</th>
                        <th className="px-6 py-3 font-semibold">Recommended For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['40mm', '₹900 – ₹1,100', 'Sheds, canopies, low-budget roofing'],
                        ['50mm', '₹1,050 – ₹1,350', 'Standard factory roofing (most popular)'],
                        ['60mm', '₹1,200 – ₹1,500', 'Improved insulation for tropical climates'],
                        ['80mm', '₹1,450 – ₹1,800', 'Temperature-controlled manufacturing'],
                        ['100mm', '₹1,700 – ₹2,000', 'Cold storage, pharma, food processing'],
                        ['120mm', '₹1,900 – ₹2,200', 'Deep-freeze, critical environment roofing'],
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-3 font-medium text-slate-800">{row[0]}</td>
                          <td className="px-6 py-3 text-emerald-700 font-semibold">{row[1]}</td>
                          <td className="px-6 py-3 text-slate-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 prose prose-slate max-w-none text-sm">
                <p>
                  <strong>Key cost factors:</strong> Profile type (standing seam costs 10-15% more than trapezoidal),
                  coating grade (PVDF adds 8-12% over SMP), steel thickness (0.50mm vs 0.45mm), order volume, and
                  delivery distance from our Ahmedabad manufacturing facility. Bulk orders over 2,000 sq.m receive
                  preferential pricing — contact our sales team for a project-specific quotation.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Custom Factory Roofing Quote
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  href="/puf-panel-vs-rockwool-panel"
                  className="text-primary hover:underline font-medium"
                >
                  Compare: PUF Panel vs Rockwool Panel →
                </Link>
                <Link href="/shop" className="text-primary hover:underline font-medium">
                  View All Panel Prices Online →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 8: FAQ ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions — Factory Roofing PUF Panels
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Answers to the most common questions from factory owners and project engineers.
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="faq-answer text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">How to Select the Best Roofing PUF Panel for Your Factory</h3>
              <div className="space-y-4">
                {howToSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-slate-900">{step.name}</h4>
                      <p className="text-slate-600 text-sm mt-1">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 9: Conversion Footer ─── */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Roof Your Factory with the Best PUF Panels?
            </h2>
            <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
              Get expert engineering support, competitive factory-direct pricing, and on-time delivery for your
              factory roofing project — anywhere in India.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-slate-400">
              <span>ISO 9001:2015</span>
              <span>•</span>
              <span>IS 14925 Compliant</span>
              <span>•</span>
              <span>Wind Tested to 150 km/h</span>
              <span>•</span>
              <span>500+ Factory Roofs Delivered</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Request Free Roofing Quote
              </Link>
              <a
                href="tel:+919328915237"
                className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Call: +91 93289 15237
              </a>
              <a
                href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20roofing%20PUF%20panels%20for%20my%20factory"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                WhatsApp Enquiry
              </a>
            </div>
            <div className="text-slate-400 text-sm space-y-1">
              <p>
                Email:{' '}
                <a href="mailto:sales@phoenixxsmartbuild.com" className="text-slate-300 hover:underline">
                  sales@phoenixxsmartbuild.com
                </a>{' '}
                |{' '}
                <a href="mailto:engineering@phoenixxsmartbuild.com" className="text-slate-300 hover:underline">
                  engineering@phoenixxsmartbuild.com
                </a>
              </p>
              <p>PHOENIXX SMARTBUILD — Ahmedabad, Gujarat, India</p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/best-puf-panel-thickness-for-roofing" className="text-blue-400 hover:underline">
                Best PUF Panel Thickness for Roofing
              </Link>
              <Link href="/best-puf-panel-for-industrial-shed" className="text-blue-400 hover:underline">
                Best PUF Panel for Industrial Shed
              </Link>
              <Link href="/puf-panel-vs-rockwool-panel" className="text-blue-400 hover:underline">
                PUF Panel vs Rockwool Panel
              </Link>
              <Link href="/products/sandwich-panels/roofing-puf-panel" className="text-blue-400 hover:underline">
                Roofing PUF Panel Product Page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
