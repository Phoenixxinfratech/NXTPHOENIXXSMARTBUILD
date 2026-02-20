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
  title: 'What Is the Best Thickness of PUF Panel for Roofing? — Technical Guide 2026',
  description:
    'Complete PUF panel thickness guide for roofing — R-value chart from 30mm to 150mm, climate zone recommendations, cost analysis. ISO certified manufacturer in India.',
  keywords: [
    'best PUF panel thickness for roofing',
    'PUF panel thickness guide',
    'roof panel thickness selection',
    'PUF panel R-value chart',
    'roofing insulation thickness',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/best-puf-panel-thickness-for-roofing',
  },
  openGraph: {
    title: 'What Is the Best Thickness of PUF Panel for Roofing? — Technical Guide 2026',
    description:
      'Complete PUF panel thickness guide for roofing — R-value chart from 30mm to 150mm, climate zone recommendations, and cost analysis.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-puf-panel-thickness-for-roofing',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'What thickness PUF panel is best for standard factory roofing?',
    answer:
      '50-60mm for standard factory roofing in tropical climates. Provides R-value of 2.08-2.50 m²K/W, adequate for reducing heat gain and HVAC costs by 20-25%.',
  },
  {
    question: 'What thickness is needed for cold storage roofing?',
    answer:
      '100-150mm depending on target temperature. For 0°C to -5°C: 100mm. For -15°C to -25°C: 120-150mm. Thicker panels prevent condensation and ice formation.',
  },
  {
    question: 'Does thicker always mean better for roofing PUF panels?',
    answer:
      'Not necessarily. Over-specifying thickness increases cost without proportional benefit. The ideal thickness is determined by your climate zone, target internal temperature, and energy cost analysis. A 50mm panel provides 80% of the insulation benefit of a 100mm panel for general industrial use.',
  },
  {
    question: 'How does PUF panel thickness affect R-value?',
    answer:
      'R-value increases linearly with thickness. At 0.024 W/mK: 30mm = R1.25, 50mm = R2.08, 80mm = R3.33, 100mm = R4.17, 120mm = R5.00, 150mm = R6.25 m²K/W.',
  },
  {
    question: 'What thickness PUF panel is recommended for residential/commercial roofing?',
    answer:
      '30-40mm for commercial buildings and 40-50mm for residential prefab structures. These provide sufficient insulation for comfort cooling while keeping panel weight and cost minimal.',
  },
  {
    question: 'Can I use different thicknesses for roof and walls?',
    answer:
      'Yes, it\'s common practice. Roofing typically needs 10-20mm more thickness than walls because heat gain through the roof is 2-3x higher than through walls due to direct sun exposure.',
  },
];

const howToSteps = [
  {
    name: 'Identify Climate Zone',
    text: 'Determine whether your project is in a hot-dry zone (Rajasthan, Gujarat interior), warm-humid zone (coastal Gujarat, Maharashtra, Tamil Nadu), or temperate zone (hill stations, north India). Each zone demands a different minimum R-value for roofing insulation.',
  },
  {
    name: 'Define Target Temperature',
    text: 'Establish the desired internal temperature. General factories target 35-38°C (ambient cooling), controlled environments need 22-25°C, and cold storage ranges from +5°C down to -25°C. The greater the difference from outdoor temperature, the thicker the panel required.',
  },
  {
    name: 'Calculate Required R-Value',
    text: 'Use the formula R = Thickness (m) ÷ Thermal Conductivity (W/mK). For PUF with k = 0.024 W/mK: a 50mm panel gives R2.08, 80mm gives R3.33, and 100mm gives R4.17 m²K/W. Match this against your target ΔT and energy cost model.',
  },
  {
    name: 'Select Corresponding Thickness',
    text: 'Map the required R-value to a standard PUF panel thickness: 30mm (R1.25), 40mm (R1.67), 50mm (R2.08), 60mm (R2.50), 80mm (R3.33), 100mm (R4.17), 120mm (R5.00), or 150mm (R6.25). Choose the nearest standard thickness that meets or exceeds the requirement.',
  },
  {
    name: 'Consider Wind Load Impact',
    text: 'Thicker panels have higher wind sail area. Verify that the selected thickness meets IS 875 wind load requirements for your region. Coastal areas with 150+ km/h design wind speeds may need additional fastener density for panels above 80mm.',
  },
  {
    name: 'Get Expert Recommendation',
    text: 'Contact PHOENIXX SMARTBUILD engineering team with your project details — location, building dimensions, target temperature, and budget. We provide free thickness optimization recommendations backed by thermal simulation data.',
  },
];

const projects = [
  {
    name: 'Narmada Biochem – Dahej',
    area: '6,200 sq.m',
    thickness: '80mm Roofing PUF',
    detail: 'Chemical processing facility requiring enhanced thermal insulation due to heat-sensitive product storage. R3.33 specification reduced HVAC load by 28%.',
  },
  {
    name: 'Sarhad Dairy – Bhuj',
    area: '4,800 sq.m',
    thickness: '120mm Roofing PUF',
    detail: 'Dairy cold chain facility with chilling room roofing at -5°C. 120mm thickness selected to prevent condensation and maintain R5.00 insulation barrier.',
  },
  {
    name: 'Aishwarya Dyeing – Surat',
    area: '3,500 sq.m',
    thickness: '60mm Roofing PUF',
    detail: 'Textile dyeing unit in warm-humid climate. 60mm panels chosen to balance insulation (R2.50) with budget optimization for steam-intensive operations.',
  },
  {
    name: 'Makson Pharma – Surendranagar',
    area: '2,900 sq.m',
    thickness: '100mm Roofing PUF',
    detail: 'Pharmaceutical manufacturing facility requiring controlled environment. 100mm roofing panels maintain stable 22°C internal temperature with R4.17 insulation.',
  },
];

const pageUrl = 'https://phoenixxsmartbuild.com/best-puf-panel-thickness-for-roofing';

export default function BestPufPanelThicknessForRoofingPage() {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateServiceSchema(
      'PUF Panel Thickness Consultation for Roofing',
      'Expert thickness selection and R-value optimization for roofing PUF panels. Climate-specific recommendations from 30mm to 150mm with thermal simulation support. Covers factory roofing, cold storage, commercial, and residential applications across India.',
      pageUrl
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Best PUF Panel Thickness for Roofing', url: '/best-puf-panel-thickness-for-roofing' },
    ]),
    generateHowToSchema(
      'How to Determine the Right PUF Panel Thickness for Roofing',
      'A step-by-step engineering guide to selecting the optimal PUF panel thickness for your roofing application — from climate zone identification through R-value calculation to final specification.',
      howToSteps
    ),
    generateArticleSchema({
      title: 'What Is the Best Thickness of PUF Panel for Roofing? — Technical Guide 2026',
      description:
        'Complete thickness vs R-value guide for roofing PUF panels. Covers 30mm to 150mm options with climate zone recommendations, application matrix, and cost analysis.',
      url: pageUrl,
      image: 'https://phoenixxsmartbuild.com/images/puf-panel-thickness-roofing.jpg',
      datePublished: '2025-02-10',
      dateModified: '2026-02-15',
      author: { name: 'PHOENIXX SMARTBUILD Engineering Team', url: 'https://phoenixxsmartbuild.com/about' },
    }),
    generateOfferSchema({
      name: 'Roofing PUF Panels — All Thickness Options',
      description: 'Insulated roofing PUF panels from 30mm to 150mm thickness for factory, cold storage, commercial, and residential roofing applications.',
      priceCurrency: 'INR',
      lowPrice: 800,
      highPrice: 2500,
      priceRange: '₹800-₹2,500 per sq.m',
      url: pageUrl,
    }),
    generateSpeakableSchema(['h1', '.ai-summary', '.faq-answer']),
    generateQAPageSchema('What is the best thickness of PUF panel for roofing?', [
      {
        text: '50-80mm is optimal for most factory roofing in India. At 0.024 W/mK thermal conductivity, a 50mm panel delivers R2.08 m²K/W and an 80mm panel delivers R3.33 m²K/W — sufficient for 20-30% HVAC cost reduction in tropical climates. For cold storage roofing, 100-150mm is required. The ideal thickness depends on your climate zone, target internal temperature, and energy cost model. Over-specifying thickness wastes budget; under-specifying wastes energy.',
        author: 'PHOENIXX SMARTBUILD Engineering Team',
      },
    ]),
    generateImageObjectSchema({
      name: 'PUF Panel Thickness Comparison Chart for Roofing',
      description:
        'Visual comparison of PUF panel thicknesses from 30mm to 150mm showing cross-section, R-value, and recommended roofing applications.',
      contentUrl: '/images/puf-panel-thickness-roofing.jpg',
      width: 1200,
      height: 630,
    }),
    generateVideoSchema({
      name: 'PHOENIXX PUF Panel Thickness Selection Guide',
      description:
        'Watch our engineering team explain how to choose the right PUF panel thickness for your roofing project — with live R-value calculations and climate zone mapping.',
      thumbnailUrl: 'https://phoenixxsmartbuild.com/images/video-thumb-thickness-guide.jpg',
      uploadDate: '2025-02-01',
      duration: 'PT8M30S',
    }),
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PHOENIXX Roofing PUF Panels — Multi-Thickness Range',
    description:
      'Premium insulated roofing PUF panels available in 30mm to 150mm thickness options for factory, cold storage, commercial, and residential roofing applications.',
    brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
    manufacturer: {
      '@type': 'Organization',
      name: 'PHOENIXX SMARTBUILD',
      address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
    },
    image: 'https://phoenixxsmartbuild.com/images/puf-panel-thickness-roofing.jpg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '178',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'Verified Industrial Client' },
      reviewBody: 'PHOENIXX team recommended 80mm for our factory roof based on thermal analysis. Perfect thickness — cool interiors and excellent cost-to-performance ratio.',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '800',
      highPrice: '2500',
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
                  Technical Roofing Experts
                </span>
                <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  R-Value Specialists
                </span>
                <span className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
                  500+ Projects
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                What Is the Best Thickness of PUF Panel for Roofing? — Technical Guide 2026
              </h1>
              <p className="ai-summary mt-6 text-xl text-slate-300 max-w-3xl">
                Choosing the right PUF panel thickness is the single most important decision for your roofing
                insulation. Too thin and you waste energy. Too thick and you waste money. This engineering guide
                gives you the exact thickness-to-R-value calculations, climate zone recommendations, and
                application matrix — so you specify the perfect panel for your project, every time.
              </p>
              <p className="mt-4 text-slate-400 text-sm">
                Trusted by engineers &amp; architects across Gujarat, Maharashtra, Rajasthan &amp; pan-India
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Free Thickness Recommendation
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

        {/* ─── Section 2: Problem — Wrong Thickness Costs Money ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Choosing the Wrong Thickness Costs You Money
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Every year, thousands of factory owners across India either over-specify or under-specify their
                  roofing PUF panel thickness — and both mistakes are expensive. The problem is that most buyers
                  treat thickness as a simple &quot;thicker is better&quot; decision when, in reality, it&apos;s an
                  engineering calculation that depends on climate, building use, energy costs, and structural
                  constraints.
                </p>
                <p>
                  <strong>Under-specification</strong> is the more common error. A factory in Ahmedabad using 30mm
                  roofing PUF panels gets an R-value of just 1.25 m²K/W — barely enough to make a noticeable
                  difference in internal temperature. The roof still radiates heat throughout the day, HVAC systems
                  run at near-full capacity, and the promised &quot;insulation savings&quot; never materialize. The
                  owner saved ₹200/sq.m on thinner panels but spends ₹3-4 lakh more per year on electricity. Over
                  a 10-year period, that&apos;s a ₹30-40 lakh loss — far exceeding the initial panel cost savings.
                </p>
                <p>
                  <strong>Over-specification</strong> is equally wasteful, just in a different way. A general
                  manufacturing unit in Surat doesn&apos;t need 120mm roofing panels. The R5.00 insulation value is
                  engineered for cold storage at -15°C, not a factory where 35°C internal temperature is perfectly
                  acceptable. The owner pays ₹600-800/sq.m extra for insulation capacity they will never use — money
                  that could have been invested in better ventilation, skylights, or structural upgrades.
                </p>
                <p>
                  The right approach is <strong>engineering-led thickness selection</strong> — matching your specific
                  climate zone, target temperature differential, and energy cost profile to the exact PUF panel
                  thickness that delivers maximum return on investment. That&apos;s what this guide helps you do.
                </p>
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">Under-Specifying Thickness</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• Inadequate R-value for climate zone</li>
                    <li>• Minimal temperature reduction inside</li>
                    <li>• HVAC runs at near-full capacity</li>
                    <li>• Energy savings never materialize</li>
                    <li>• ₹30-40 lakh wasted over 10 years</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-3">Over-Specifying Thickness</h3>
                  <ul className="space-y-2 text-red-700 text-sm">
                    <li>• ₹600-800/sq.m wasted on excess insulation</li>
                    <li>• Heavier panels = more structural steel</li>
                    <li>• Higher wind sail area = more fasteners</li>
                    <li>• Longer lead time for thicker panels</li>
                    <li>• Budget diverted from other improvements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 3: Thickness vs R-Value Chart (Centerpiece) ─── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                PUF Panel Thickness vs R-Value — Complete Reference Chart
              </h2>
              <p className="text-lg text-slate-600 text-center mb-4 max-w-3xl mx-auto">
                The definitive thickness selection matrix for roofing PUF panels. All values calculated at thermal
                conductivity k = 0.024 W/mK (standard PUF density 40 ± 2 kg/m³).
              </p>
              <p className="text-sm text-slate-500 text-center mb-10">
                Formula: R-value (m²K/W) = Panel Thickness (m) ÷ Thermal Conductivity (W/mK)
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="px-6 py-4 bg-slate-800 text-white">
                  <h3 className="font-bold text-lg">Thickness → R-Value → Application → Price Matrix</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-5 py-3 font-semibold text-slate-700">Thickness</th>
                        <th className="px-5 py-3 font-semibold text-slate-700">R-Value (m²K/W)</th>
                        <th className="px-5 py-3 font-semibold text-slate-700">U-Value (W/m²K)</th>
                        <th className="px-5 py-3 font-semibold text-slate-700">Recommended Application</th>
                        <th className="px-5 py-3 font-semibold text-slate-700">Price (₹/sq.m)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['30mm', 'R1.25', '0.80', 'Commercial canopies, shed roofing, carports', '₹800 – ₹1,000'],
                        ['40mm', 'R1.67', '0.60', 'Commercial buildings, light industrial sheds', '₹950 – ₹1,150'],
                        ['50mm', 'R2.08', '0.48', 'Standard factory roofing (most popular)', '₹1,050 – ₹1,350'],
                        ['60mm', 'R2.50', '0.40', 'Enhanced factory roofing, tropical climate zones', '₹1,200 – ₹1,500'],
                        ['80mm', 'R3.33', '0.30', 'Temperature-controlled manufacturing, pharma', '₹1,450 – ₹1,800'],
                        ['100mm', 'R4.17', '0.24', 'Cold storage (0°C to -5°C), food processing', '₹1,700 – ₹2,050'],
                        ['120mm', 'R5.00', '0.20', 'Deep-freeze cold storage (-15°C to -25°C)', '₹1,950 – ₹2,300'],
                        ['150mm', 'R6.25', '0.16', 'Ultra-low temp cold storage (-25°C to -40°C)', '₹2,200 – ₹2,500'],
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-5 py-3 font-bold text-slate-900">{row[0]}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row[1]}</td>
                          <td className="px-5 py-3 text-slate-600">{row[2]}</td>
                          <td className="px-5 py-3 text-slate-600">{row[3]}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">{row[4]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 prose prose-slate max-w-none">
                <h3>Climate Zone Recommendations</h3>
                <p>
                  India&apos;s diverse climate zones demand different minimum R-values for effective roofing
                  insulation. The Bureau of Energy Efficiency (BEE) and National Building Code (NBC) provide
                  guidelines, but practical experience across 500+ projects gives us sharper recommendations:
                </p>
              </div>

              <div className="mt-6 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-800 text-white text-left">
                        <th className="px-5 py-3 font-semibold">Climate Zone</th>
                        <th className="px-5 py-3 font-semibold">Regions</th>
                        <th className="px-5 py-3 font-semibold">Min R-Value</th>
                        <th className="px-5 py-3 font-semibold">Recommended Thickness</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['Hot-Dry', 'Rajasthan, Gujarat interior, central India', 'R2.08+', '50-60mm'],
                        ['Warm-Humid', 'Coastal Gujarat, Maharashtra, Tamil Nadu, Kerala', 'R2.50+', '60-80mm'],
                        ['Composite', 'Delhi NCR, UP, MP, Bihar', 'R2.08+', '50-60mm'],
                        ['Temperate', 'Bangalore, Pune, hill stations', 'R1.67+', '40-50mm'],
                        ['Cold', 'Jammu & Kashmir, Himachal, NE India', 'R3.33+', '80-100mm'],
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-5 py-3 font-medium text-slate-900">{row[0]}</td>
                          <td className="px-5 py-3 text-slate-600">{row[1]}</td>
                          <td className="px-5 py-3 font-semibold text-blue-700">{row[2]}</td>
                          <td className="px-5 py-3 font-semibold text-emerald-700">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 prose prose-slate max-w-none">
                <p>
                  These recommendations assume general industrial/commercial use. For temperature-controlled
                  environments (pharmaceuticals, food processing, electronics), add 20-40mm to the base
                  recommendation. For{' '}
                  <Link href="/best-puf-panel-for-cold-storage" className="text-primary hover:underline">
                    cold storage applications
                  </Link>
                  , thickness is determined entirely by target storage temperature rather than climate zone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 4: Benefits of Right Thickness ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Benefits of Choosing the Right PUF Panel Thickness
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                When thickness is engineered correctly — not guessed — every rupee spent on insulation delivers
                measurable returns.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Optimized Cost-to-Performance Ratio',
                    desc: 'Engineering the exact thickness eliminates waste. A 50mm panel at ₹1,100/sq.m delivers 80% of the insulation of a 100mm panel at ₹1,800/sq.m — but at 40% lower cost. For a 5,000 sq.m roof, that\'s ₹35 lakh saved.',
                  },
                  {
                    num: '02',
                    title: '20-30% Energy Savings',
                    desc: 'Correctly specified thickness reduces HVAC load proportionally. A factory switching from bare metal roofing to 60mm PUF panels (R2.50) typically saves 20-25% on cooling costs — ₹2-3 lakh annually for mid-size facilities.',
                  },
                  {
                    num: '03',
                    title: 'NBC & BEE Compliance',
                    desc: 'India\'s Energy Conservation Building Code (ECBC) mandates minimum roof U-values. Selecting the right thickness ensures compliance without over-investment — critical for green building certifications like IGBC and GRIHA.',
                  },
                  {
                    num: '04',
                    title: 'Structural Load Optimization',
                    desc: 'Each 10mm of PUF adds approximately 0.4 kg/sq.m to roof weight. Over-specifying by 40mm on a 5,000 sq.m roof adds 2,000 kg of dead load — requiring heavier purlins, rafters, and columns. Right-sizing thickness keeps structural steel costs down.',
                  },
                  {
                    num: '05',
                    title: 'Condensation Prevention',
                    desc: 'The minimum thickness for condensation prevention depends on dew point temperature. In humid coastal zones (Mumbai, Chennai), 50mm minimum is essential. In cold storage, 100mm+ prevents ice crystal formation on internal surfaces.',
                  },
                  {
                    num: '06',
                    title: 'Future-Proofed Investment',
                    desc: 'Slightly over-engineering by one standard step (e.g., 60mm instead of 50mm) adds 5-8% cost but provides a buffer for climate warming, production changes, or energy price increases — a smart long-term hedge.',
                  },
                  {
                    num: '07',
                    title: 'Faster Payback Period',
                    desc: 'Correctly matched thickness delivers the shortest payback. A 50mm panel on a standard factory roof pays back in 2.5-3 years through energy savings. Over-specified 100mm panels on the same factory take 5-6 years — double the payback.',
                  },
                  {
                    num: '08',
                    title: 'Worker Comfort & Productivity',
                    desc: 'The right thickness reduces internal roof surface temperature from 65°C (bare metal) to 35-38°C (insulated PUF). This 25-30°C drop directly impacts worker comfort, reducing heat-related fatigue and improving productivity by 10-15%.',
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
            </div>
          </div>
        </section>

        {/* ─── Section 5: Real Projects ─── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Thickness-Optimized Roofing Projects by PHOENIXX
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Real installations where engineering-led thickness selection delivered measurable performance gains.
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
                      {project.thickness}
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
                href="/best-roofing-puf-panel-for-factory"
                className="text-primary hover:underline font-medium"
              >
                Related: Best Roofing PUF Panel for Factory →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section 6: Technical Specs ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Roofing PUF Panel — Full Technical Specifications
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Complete engineering data for architects, structural consultants, and procurement teams.
            </p>
            <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <table className="w-full">
                <tbody className="divide-y divide-slate-200">
                  {[
                    { label: 'Available Thickness', value: '30mm, 40mm, 50mm, 60mm, 80mm, 100mm, 120mm, 150mm' },
                    { label: 'PUF Core Density', value: '40 ± 2 kg/m³ (CFC & HFC Free)' },
                    { label: 'Thermal Conductivity (k)', value: '0.024 W/mK @ 25°C mean temperature' },
                    { label: 'R-Value Range', value: 'R1.25 (30mm) to R6.25 (150mm) m²K/W' },
                    { label: 'U-Value Range', value: '0.16 (150mm) to 0.80 (30mm) W/m²K' },
                    { label: 'Panel Width (effective)', value: '1000mm standard' },
                    { label: 'Panel Length', value: 'Up to 16 meters (custom lengths available)' },
                    { label: 'Steel Thickness', value: '0.45mm – 0.60mm (PPGI / PPGL / SS)' },
                    { label: 'Profile Types', value: 'Trapezoidal, Standing Seam, Concealed Fix' },
                    { label: 'Coating Options', value: 'SMP (standard), PVDF (coastal/harsh), SDP' },
                    { label: 'Panel Weight', value: '8 kg/sq.m (30mm) to 16 kg/sq.m (150mm)' },
                    { label: 'Wind Load Rating', value: 'Tested as per IS 875 — up to 150 km/h' },
                    { label: 'Fire Rating', value: 'B2 standard, B1 / PIR options available' },
                    { label: 'Compliance', value: 'IS 14925:2015, ISO 9001:2015, ISO 14001:2015, ECBC' },
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
                href="/best-density-puf-panel-for-insulation"
                className="text-primary hover:underline font-medium"
              >
                Related: Best Density PUF Panel for Insulation →
              </Link>
            </div>
          </div>
        </section>

        {/* ─── Section 7: Pricing by Thickness Tier ─── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Roofing PUF Panel Pricing by Thickness — 2026
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Indicative pricing per square meter. Final rates depend on order quantity, profile, coating, and
                delivery location.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white text-left">
                        <th className="px-6 py-3 font-semibold">Thickness</th>
                        <th className="px-6 py-3 font-semibold">R-Value</th>
                        <th className="px-6 py-3 font-semibold">Price (₹/sq.m)</th>
                        <th className="px-6 py-3 font-semibold">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['30mm', 'R1.25', '₹800 – ₹1,000', 'Canopies, carports, shed roofing'],
                        ['40mm', 'R1.67', '₹950 – ₹1,150', 'Commercial buildings, light industrial'],
                        ['50mm', 'R2.08', '₹1,050 – ₹1,350', 'Standard factory roofing (most popular)'],
                        ['60mm', 'R2.50', '₹1,200 – ₹1,500', 'Tropical climate factory roofing'],
                        ['80mm', 'R3.33', '₹1,450 – ₹1,800', 'Controlled-environment manufacturing'],
                        ['100mm', 'R4.17', '₹1,700 – ₹2,050', 'Cold storage roofing (0°C to -5°C)'],
                        ['120mm', 'R5.00', '₹1,950 – ₹2,300', 'Freezer rooms (-15°C to -25°C)'],
                        ['150mm', 'R6.25', '₹2,200 – ₹2,500', 'Ultra-cold storage (-25°C to -40°C)'],
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-3 font-medium text-slate-800">{row[0]}</td>
                          <td className="px-6 py-3 font-semibold text-blue-700">{row[1]}</td>
                          <td className="px-6 py-3 font-semibold text-emerald-700">{row[2]}</td>
                          <td className="px-6 py-3 text-slate-600">{row[3]}</td>
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
                  preferential pricing. Each step up in thickness adds approximately ₹150-250/sq.m — but energy
                  savings often offset this within 2-4 years for correctly specified projects.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Custom Thickness &amp; Pricing Quote
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
                <Link href="/shop" className="text-primary hover:underline font-medium">
                  View All Panel Prices Online →
                </Link>
                <Link
                  href="/best-puf-panel-for-cold-storage"
                  className="text-primary hover:underline font-medium"
                >
                  Cold Storage PUF Panel Guide →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Section 8: FAQ ─── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions — PUF Panel Thickness for Roofing
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Answers to the most common thickness selection questions from engineers, architects, and factory owners.
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
              <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                How to Determine the Right PUF Panel Thickness for Roofing
              </h3>
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
              Get the Right Thickness for Your Roofing Project — Free Engineering Support
            </h2>
            <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
              Share your project details and our engineering team will recommend the optimal PUF panel thickness
              backed by thermal simulation data — at no cost and no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-slate-400">
              <span>ISO 9001:2015</span>
              <span>•</span>
              <span>IS 14925 Compliant</span>
              <span>•</span>
              <span>ECBC Thickness Guidance</span>
              <span>•</span>
              <span>500+ Roofing Projects</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Request Free Thickness Recommendation
              </Link>
              <a
                href="tel:+919328915237"
                className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Call: +91 93289 15237
              </a>
              <a
                href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20help%20selecting%20the%20right%20PUF%20panel%20thickness%20for%20my%20roofing%20project"
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
              <Link href="/best-roofing-puf-panel-for-factory" className="text-blue-400 hover:underline">
                Best Roofing PUF Panel for Factory
              </Link>
              <Link href="/best-density-puf-panel-for-insulation" className="text-blue-400 hover:underline">
                Best Density PUF Panel for Insulation
              </Link>
              <Link href="/best-puf-panel-for-cold-storage" className="text-blue-400 hover:underline">
                Best PUF Panel for Cold Storage
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
