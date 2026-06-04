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
  title: 'PUF Panel vs Rockwool Panel — Which Is Better? Complete Comparison 2026',
  description:
    'Unbiased PUF panel vs Rockwool panel comparison on fire safety, thermal insulation, cost, moisture resistance & more. Expert guide from a manufacturer of both.',
  keywords: [
    'PUF panel vs rockwool panel',
    'PUF or rockwool which is better',
    'insulated panel comparison',
    'PUF vs mineral wool panel',
    'sandwich panel comparison guide',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/puf-panel-vs-rockwool-panel',
  },
  openGraph: {
    title: 'PUF Panel vs Rockwool Panel — Which Is Better? Complete Comparison 2026',
    description:
      'Unbiased PUF panel vs Rockwool panel comparison on fire safety, thermal insulation, cost, moisture resistance & more.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/puf-panel-vs-rockwool-panel',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'Which is better for fire safety — PUF or Rockwool?',
    answer:
      'Rockwool is significantly better for fire safety. Rockwool panels are non-combustible (A1/A2 fire class) and can withstand temperatures up to 1000°C. PUF panels are self-extinguishing (B2/B3) but combustible. For fire-critical facilities like chemical plants, choose Rockwool. For enhanced PUF fire resistance, PIR panels (B1 rating) are available.',
  },
  {
    question: 'Which provides better thermal insulation — PUF or Rockwool?',
    answer:
      'PUF provides better thermal insulation. PUF thermal conductivity is 0.024 W/mK vs Rockwool at 0.035-0.040 W/mK. This means a 50mm PUF panel provides equivalent insulation to a 75-80mm Rockwool panel, resulting in thinner walls and more interior space.',
  },
  {
    question: 'Which is cheaper — PUF panels or Rockwool panels?',
    answer:
      'PUF panels are generally 15-25% cheaper than equivalent Rockwool panels. However, PUF requires less thickness for the same R-value, so the installed cost difference narrows. For standard industrial buildings, PUF offers better value. For fire-rated facilities, the Rockwool premium is justified.',
  },
  {
    question: 'Can I use PUF and Rockwool panels in the same building?',
    answer:
      'Yes, this is a common and smart approach. Many projects use Rockwool panels for fire-critical walls (near boilers, electrical rooms) and PUF panels for general walls and roofing. PHOENIXX manufactures both and can provide integrated solutions.',
  },
  {
    question: 'Which panel is better for cold storage?',
    answer:
      'PUF panels are the preferred choice for cold storage due to superior moisture resistance (zero water absorption in closed-cell structure) and better thermal conductivity. Rockwool can absorb moisture over time, reducing insulation performance in cold/humid environments.',
  },
  {
    question: 'Which panel lasts longer?',
    answer:
      'Both PUF and Rockwool panels last 25-30 years with proper installation. PUF maintains consistent thermal performance over its lifespan. Rockwool performance may decrease if exposed to moisture. For dry environments, both are equally durable.',
  },
];

const howToSteps = [
  {
    name: 'Assess Fire Safety Requirements',
    text: 'Check your local fire codes, insurance requirements, and the nature of materials stored or processed in the building. Facilities with flammable materials, boilers, or electrical rooms need Rockwool panels in those zones.',
  },
  {
    name: 'Determine Thermal Insulation Needs',
    text: 'Calculate the target U-value or R-value for your building envelope. PUF achieves the same insulation with 30-40% less thickness than Rockwool, which can save space and structural cost.',
  },
  {
    name: 'Evaluate Moisture Exposure',
    text: 'Assess humidity levels, condensation risk, and water exposure. Cold storage, freezer rooms, and high-humidity areas favor PUF due to its closed-cell, zero water absorption structure.',
  },
  {
    name: 'Compare Installed Cost',
    text: 'Get quotes for both panel types at the required R-value — not just the same thickness. Factor in structural savings from PUF\'s lighter weight and thinner profile, or Rockwool\'s insurance premium reductions.',
  },
  {
    name: 'Check Acoustic Requirements',
    text: 'If noise reduction is important (factories near residential areas, generator rooms, auditoriums), Rockwool offers superior sound absorption with NRC values of 0.90-0.95 vs PUF at 0.25-0.35.',
  },
  {
    name: 'Consult PHOENIXX Technical Team',
    text: 'As a manufacturer of both PUF and Rockwool panels, PHOENIXX provides unbiased recommendations based on your project\'s unique combination of fire, thermal, acoustic, and budget requirements.',
  },
];

const comparisonData = [
  { parameter: 'Core Material', puf: 'Polyurethane Foam (PUF)', rockwool: 'Mineral Wool (Basalt Rock Fibre)' },
  { parameter: 'Thermal Conductivity', puf: '0.024 W/mK', rockwool: '0.035–0.040 W/mK' },
  { parameter: 'Fire Rating', puf: 'B2/B3 (Self-extinguishing)', rockwool: 'A1/A2 (Non-combustible)' },
  { parameter: 'Max Temperature Resistance', puf: '120–150°C', rockwool: 'Up to 1000°C' },
  { parameter: 'Density', puf: '40 ± 2 kg/m³', rockwool: '100–150 kg/m³' },
  { parameter: 'Panel Weight (50mm)', puf: '~10 kg/m²', rockwool: '~18–20 kg/m²' },
  { parameter: 'Moisture Absorption', puf: '< 1% (closed-cell)', rockwool: '1–5% (open fibre structure)' },
  { parameter: 'Acoustic Performance (NRC)', puf: '0.25–0.35', rockwool: '0.90–0.95' },
  { parameter: 'Thickness for R-2.0', puf: '~50mm', rockwool: '~75–80mm' },
  { parameter: 'Cost (per sq.m, 50mm)', puf: '₹800–₹1,200', rockwool: '₹1,200–₹1,800' },
  { parameter: 'Installation Speed', puf: 'Fast (lightweight)', rockwool: 'Moderate (heavier panels)' },
  { parameter: 'Environmental Impact', puf: 'CFC/HFC-free available', rockwool: 'Made from natural basalt rock' },
  { parameter: 'Lifespan', puf: '25–30 years', rockwool: '25–30 years' },
  { parameter: 'Best Applications', puf: 'Cold storage, warehouses, general industrial', rockwool: 'Fire-rated buildings, acoustic walls, chemical plants' },
];

const pageUrl = '/puf-panel-vs-rockwool-panel';

export default function PufPanelVsRockwoolPanelPage() {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateServiceSchema(
      'PUF Panel and Rockwool Panel Manufacturing',
      'Complete range of PUF and Rockwool insulated sandwich panels manufactured in-house. Unbiased expert guidance on panel selection for fire safety, thermal insulation, acoustic performance, and cost optimization.',
      pageUrl
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'PUF Panel vs Rockwool Panel', url: pageUrl },
    ]),
    generateHowToSchema(
      'How to Decide Between PUF Panel and Rockwool Panel',
      'A step-by-step guide to choosing between PUF and Rockwool sandwich panels based on fire safety, thermal performance, moisture exposure, cost, and acoustic requirements.',
      howToSteps
    ),
    generateArticleSchema({
      title: 'PUF Panel vs Rockwool Panel — Which Is Better? Complete Comparison 2026',
      description:
        'Unbiased, engineer-authored comparison of PUF and Rockwool insulated sandwich panels across 14 performance parameters including fire rating, thermal conductivity, cost, and applications.',
      url: pageUrl,
      image: 'https://phoenixxsmartbuild.com/images/comparison/puf-vs-rockwool-panel.jpg',
      datePublished: '2025-03-01',
      dateModified: '2026-02-17',
      author: { name: 'PHOENIXX SMARTBUILD Engineering Team', url: 'https://phoenixxsmartbuild.com/about-us' },
    }),
    generateOfferSchema({
      name: 'PHOENIXX PUF Sandwich Panels',
      description:
        'Premium polyurethane foam insulated sandwich panels. 30–150mm thickness, SMP/SDP/PVDF coatings, CFC/HFC-free, manufactured in Ahmedabad.',
      priceCurrency: 'INR',
      lowPrice: 800,
      highPrice: 2500,
      url: '/products/sandwich-panels/sandwich-puf-panel',
      availability: 'https://schema.org/InStock',
    }),
    generateOfferSchema({
      name: 'PHOENIXX Rockwool Sandwich Panels',
      description:
        'Non-combustible mineral wool insulated sandwich panels with A1/A2 fire rating. 50–150mm thickness, ideal for fire-rated and acoustic applications.',
      priceCurrency: 'INR',
      lowPrice: 1200,
      highPrice: 2800,
      url: '/products/sandwich-panels/rockwool-panel',
      availability: 'https://schema.org/InStock',
    }),
    generateSpeakableSchema(['h1', '.ai-summary', '.faq-answer']),
    generateQAPageSchema(
      'When should I choose PUF panel vs Rockwool panel?',
      [
        {
          text: 'Choose PUF panels when thermal insulation efficiency, moisture resistance, lightweight construction, and cost-effectiveness are priorities — ideal for cold storage, warehouses, and general industrial buildings. Choose Rockwool panels when fire safety, acoustic insulation, and high-temperature resistance are critical — essential for chemical plants, electrical rooms, and fire-rated facilities. Many projects benefit from using both: Rockwool in fire-critical zones and PUF for general walls and roofing.',
          author: 'PHOENIXX SMARTBUILD Engineering Team',
        },
      ]
    ),
    generateImageObjectSchema({
      name: 'PUF Panel vs Rockwool Panel Comparison',
      description:
        'Side-by-side visual comparison of PUF and Rockwool sandwich panel cross-sections showing core structure, density, and thickness differences.',
      contentUrl: '/images/comparison/puf-vs-rockwool-panel.jpg',
      width: 1200,
      height: 630,
    }),
    generateVideoSchema({
      name: 'PUF Panel vs Rockwool Panel — Which Should You Choose?',
      description:
        'Expert video comparison of PUF and Rockwool insulated panels covering fire safety, thermal performance, moisture resistance, acoustic properties, and cost analysis.',
      thumbnailUrl: 'https://phoenixxsmartbuild.com/images/video/puf-vs-rockwool-thumbnail.jpg',
      uploadDate: '2025-06-15',
      duration: 'PT8M30S',
      contentUrl: 'https://phoenixxsmartbuild.com/videos/puf-vs-rockwool-comparison.mp4',
    }),
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PHOENIXX Insulated Sandwich Panels',
    description:
      'High-performance insulated sandwich panels available in PUF (polyurethane) and Rockwool (mineral wool) cores. Manufactured in-house by PHOENIXX SMARTBUILD with ISO 9001:2015 certification, custom thickness from 30–150mm, and pan-India delivery.',
    brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
    manufacturer: {
      '@type': 'Organization',
      name: 'PHOENIXX SMARTBUILD',
      address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
    },
    url: 'https://phoenixxsmartbuild.com/puf-panel-vs-rockwool-panel',
    image: 'https://phoenixxsmartbuild.com/images/comparison/puf-vs-rockwool-panel.jpg',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      bestRating: '5',
      worstRating: '1',
      reviewCount: '267',
    },
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'Verified Industrial Client' },
      reviewBody:
        'PHOENIXX helped us select the right combination of PUF and Rockwool panels for our facility. Their unbiased advice saved us cost on general walls while ensuring fire compliance in critical zones.',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '800',
      highPrice: '2800',
      offerCount: '10',
      availability: 'https://schema.org/InStock',
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

        {/* ===== Section 1: Hero ===== */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400">
                  PUF &amp; Rockwool Experts
                </span>
                <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  Both Manufactured In-House
                </span>
                <span className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400">
                  Unbiased Comparison
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Panel vs Rockwool Panel — Which Is Better? Complete Comparison 2026
              </h1>
              <p className="ai-summary mt-6 text-xl text-slate-300 max-w-3xl">
                PUF and Rockwool are both excellent insulated panel cores — but they excel in different areas.
                PUF wins on thermal efficiency, moisture resistance, and cost. Rockwool wins on fire safety,
                acoustic performance, and high-temperature applications. As a manufacturer of both, PHOENIXX
                SMARTBUILD provides this unbiased, engineer-authored comparison to help you make the right
                choice for your specific project.
              </p>
              <p className="mt-4 text-slate-400 text-sm">
                13+ Years Manufacturing Both Panel Types | 500+ Projects | ISO 9001:2015
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Expert Panel Recommendation
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Speak with Technical Team
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { metric: '2 Core Types', label: 'PUF & Rockwool' },
                  { metric: '500+', label: 'Projects Delivered' },
                  { metric: '4.8/5', label: 'Client Rating' },
                  { metric: '14+', label: 'Parameters Compared' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-emerald-400">{stat.metric}</div>
                    <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 2: Problem ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Confused Between PUF and Rockwool? You&apos;re Not Alone
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Every week, project managers, architects, and procurement teams face the same dilemma: should we use{' '}
                  <strong>PUF panels</strong> or <strong>Rockwool panels</strong> for our building envelope? The answer
                  is rarely straightforward because both panel types have genuine strengths — and choosing the wrong one
                  can cost you significantly in terms of safety, performance, and budget.
                </p>
                <p>
                  Here&apos;s the real problem: most comparison information online is written by companies that only
                  manufacture one type of panel, creating inherently biased content that pushes you toward their product.
                  A PUF-only manufacturer will downplay fire concerns, while a Rockwool-only company will overstate thermal
                  performance gaps. Neither gives you the full picture.
                </p>
                <p>
                  The consequences of making the wrong choice are tangible. Specifying PUF where Rockwool is required means
                  failing fire audits, voiding insurance, and potentially endangering lives. Conversely, using Rockwool
                  where PUF would suffice means overspending by 15–25% per square meter, adding unnecessary weight to
                  your structure, and getting less thermal efficiency per millimeter of thickness.
                </p>
                <p>
                  <strong>PHOENIXX SMARTBUILD manufactures both PUF and Rockwool panels in-house</strong> — which means
                  we have no incentive to push one over the other. This guide presents an honest, data-backed comparison
                  to help you select the right panel for your specific application.
                </p>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Wrong Panel Choice = Real Costs</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Failed fire audits and insurance non-compliance when PUF is used in fire-critical zones</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>15–25% overspend when Rockwool is specified where PUF would have been sufficient</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Moisture-related thermal degradation when Rockwool is used in humid or cold-storage environments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Unnecessary structural cost from heavier Rockwool panels where lightweight PUF would work</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Right Panel Choice = Smart Investment</h3>
                  <ul className="space-y-3 text-emerald-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Full fire compliance with Rockwool in critical zones, cost savings with PUF elsewhere</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Optimized thermal performance using PUF&apos;s superior conductivity where fire codes allow</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Long-term moisture resistance in cold storage with PUF&apos;s closed-cell structure</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Superior acoustic insulation with Rockwool where noise control matters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 3: Detailed Comparison Table ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF vs Rockwool — Complete Parameter-by-Parameter Comparison
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              This is the most comprehensive <strong>PUF panel vs Rockwool panel</strong> comparison table
              available — covering 14 critical parameters that engineers, architects, and buyers evaluate
              when selecting insulated sandwich panels.
            </p>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
              <div className="px-6 py-4 bg-slate-800 text-white">
                <h3 className="font-bold text-lg">Head-to-Head Comparison — 14 Parameters</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-left">
                      <th className="px-6 py-4 font-semibold text-slate-700 w-1/4">Parameter</th>
                      <th className="px-6 py-4 font-semibold text-blue-700 w-5/12">PUF Panel</th>
                      <th className="px-6 py-4 font-semibold text-orange-700 w-5/12">Rockwool Panel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {comparisonData.map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-3 font-semibold text-slate-900">{row.parameter}</td>
                        <td className="px-6 py-3 text-slate-700">{row.puf}</td>
                        <td className="px-6 py-3 text-slate-700">{row.rockwool}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Application-Specific Recommendations</h3>
                <p className="text-blue-700 text-sm mb-4">Where each panel type delivers the best results.</p>
                <div className="space-y-3">
                  {[
                    { app: 'Cold Storage / Freezer Rooms', rec: 'PUF', reason: 'Moisture-proof, better R-value per mm' },
                    { app: 'Chemical / Petrochemical Plants', rec: 'Rockwool', reason: 'Non-combustible, 1000°C resistant' },
                    { app: 'Pharmaceutical Clean Rooms', rec: 'PUF', reason: 'Smooth finish, zero fibre shedding' },
                    { app: 'Electrical / Generator Rooms', rec: 'Rockwool', reason: 'Fire safety, acoustic insulation' },
                    { app: 'Standard Warehouses', rec: 'PUF', reason: 'Best cost-to-insulation ratio' },
                    { app: 'Auditoriums / Studios', rec: 'Rockwool', reason: 'NRC 0.90–0.95 sound absorption' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <span className={`mt-0.5 shrink-0 rounded-full px-2 py-0.5 text-xs font-bold text-white ${
                        item.rec === 'PUF' ? 'bg-blue-600' : 'bg-orange-600'
                      }`}>
                        {item.rec}
                      </span>
                      <div>
                        <span className="font-semibold text-slate-900">{item.app}</span>
                        <span className="text-slate-500"> — {item.reason}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-2">Hybrid Approach — Best of Both</h3>
                <p className="text-purple-700 text-sm mb-4">
                  Many smart projects combine PUF and Rockwool panels in the same building for optimal
                  performance and cost balance.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="bg-white rounded-xl p-4 border border-purple-100">
                    <h4 className="font-bold text-slate-900">Manufacturing Plant Example</h4>
                    <ul className="mt-2 space-y-1 text-slate-600">
                      <li>• General exterior walls &amp; roofing: <strong>PUF 50mm</strong></li>
                      <li>• Boiler room &amp; electrical panel area: <strong>Rockwool 80mm</strong></li>
                      <li>• Cold storage section: <strong>PUF 100mm</strong></li>
                      <li>• Generator enclosure: <strong>Rockwool 60mm</strong></li>
                    </ul>
                  </div>
                  <p className="text-purple-700">
                    This approach achieves fire compliance where needed, optimal insulation everywhere,
                    and 10–15% overall cost savings compared to using Rockwool throughout.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 4: When Each Wins ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                When to Choose PUF, When to Choose Rockwool, and When to Use Both
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                Neither panel is universally &ldquo;better.&rdquo; The right choice depends entirely on your
                project&apos;s specific requirements. Here is a clear framework for making that decision.
              </p>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* When PUF Wins */}
                <div className="bg-blue-50 rounded-2xl p-8 border-2 border-blue-200">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Choose PUF When</h3>
                  <ul className="space-y-3 text-blue-800 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Thermal insulation efficiency is the top priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Cold storage, freezer, or high-humidity application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Budget-conscious project with standard fire requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Lightweight construction is needed to reduce structural steel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Thinner walls desired to maximize usable interior space</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Clean room / pharma where fibre shedding is unacceptable</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/products/sandwich-panels/sandwich-puf-panel"
                      className="text-blue-700 font-medium text-sm hover:underline"
                    >
                      View PUF Panel Specs &rarr;
                    </Link>
                  </div>
                </div>

                {/* When Rockwool Wins */}
                <div className="bg-orange-50 rounded-2xl p-8 border-2 border-orange-200">
                  <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">R</span>
                  </div>
                  <h3 className="text-xl font-bold text-orange-900 mb-4">Choose Rockwool When</h3>
                  <ul className="space-y-3 text-orange-800 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Fire safety is the primary concern (A1/A2 rating required)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Chemical plants, refineries, or high-temperature zones</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Acoustic insulation is critical (NRC 0.90+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Insurance or regulatory mandate requires non-combustible core</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Building is near boilers, furnaces, or heat-generating equipment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Project requires FM Global or equivalent fire certification</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/products/sandwich-panels/rockwool-panel"
                      className="text-orange-700 font-medium text-sm hover:underline"
                    >
                      View Rockwool Panel Specs &rarr;
                    </Link>
                  </div>
                </div>

                {/* When Both */}
                <div className="bg-emerald-50 rounded-2xl p-8 border-2 border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">+</span>
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-4">Use Both When</h3>
                  <ul className="space-y-3 text-emerald-800 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Building has mixed-use zones with varying fire requirements</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>You want fire compliance in critical zones + cost savings elsewhere</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Cold storage + production area under one roof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Some areas need acoustic barriers while others need thermal barriers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Budget optimization across a large industrial campus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 mt-0.5 font-bold">&#x2713;</span>
                      <span>Architect wants to optimize each wall section independently</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Link
                      href="/get-a-quote"
                      className="text-emerald-700 font-medium text-sm hover:underline"
                    >
                      Get Hybrid Panel Quote &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-12 prose prose-lg prose-slate max-w-4xl mx-auto">
                <p>
                  The choice between PUF and Rockwool is not about which panel is &ldquo;better&rdquo; in absolute
                  terms — it is about which panel is better <em>for your specific application</em>. PUF delivers
                  unmatched thermal efficiency at 0.024 W/mK, making it the clear winner for cold storage, clean
                  rooms, and general industrial buildings where standard fire ratings suffice. Its closed-cell
                  structure means zero moisture absorption — a critical advantage in humid climates and refrigerated
                  environments where Rockwool&apos;s open-fibre structure can absorb water and lose insulating
                  capacity over time.
                </p>
                <p>
                  Rockwool, on the other hand, is irreplaceable when fire safety is non-negotiable. With A1/A2 fire
                  classification and the ability to withstand temperatures up to 1000°C, Rockwool panels provide a
                  level of passive fire protection that no PUF panel can match. Add to that superior acoustic
                  performance (NRC 0.90–0.95 vs PUF&apos;s 0.25–0.35), and Rockwool becomes the only sensible
                  choice for electrical rooms, boiler enclosures, chemical storage, and noise-sensitive applications.
                </p>
                <p>
                  For projects that require enhanced fire performance beyond standard PUF but don&apos;t need full
                  Rockwool specification, <Link href="/resources/blogs/puf-vs-pir-vs-rockwool" className="text-primary hover:underline">PIR (Polyisocyanurate) panels</Link> offer a middle ground with
                  B1 fire rating and thermal conductivity closer to PUF.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 5: Projects Using Each ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Real Projects — PUF and Rockwool in Action
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              PHOENIXX has delivered both PUF and Rockwool panel projects across diverse industries —
              each selected based on the application&apos;s specific technical demands.
            </p>
            <div className="max-w-5xl mx-auto">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">P</span>
                PUF Panel Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    name: 'BC Foods Cold Storage — Mahua',
                    panels: 'PUF 120mm Wall + 150mm Ceiling',
                    description:
                      'Large-scale food processing cold storage facility requiring -25°C internal temperature. PUF selected for superior moisture resistance and thermal efficiency — achieving target temperature with minimal energy consumption.',
                    tag: 'Cold Storage',
                  },
                  {
                    name: 'Edkem Pharma Clean Room — Ahmedabad',
                    panels: 'PUF 50mm Flush-Joint Panels',
                    description:
                      'GMP-compliant pharmaceutical clean room requiring ISO Class 7 particle control. PUF chosen for its smooth, non-fibre-shedding surface and superior joint sealing — critical for contamination-free manufacturing.',
                    tag: 'Pharmaceutical',
                  },
                ].map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                        {project.tag}
                      </span>
                      <span className="text-xs text-slate-500">{project.panels}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{project.name}</h4>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-bold text-orange-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center text-sm font-bold">R</span>
                Rockwool Panel Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    name: 'Reliance Industries — Jamnagar',
                    panels: 'Rockwool 80mm Fire-Rated Walls',
                    description:
                      'Petrochemical refinery requiring non-combustible building envelope near high-temperature processing units. Rockwool panels provided A1 fire rating and 1000°C resistance — meeting stringent safety standards for hazardous environments.',
                    tag: 'Petrochemical',
                  },
                  {
                    name: 'Power Utility Substation — Gujarat',
                    panels: 'Rockwool 60mm Acoustic + Fire Walls',
                    description:
                      'High-voltage electrical substation enclosure requiring both fire safety (non-combustible) and noise reduction (transformer hum). Rockwool delivered A2 fire rating with NRC 0.92 acoustic performance — meeting both requirements in a single panel.',
                    tag: 'Power / Electrical',
                  },
                ].map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                        {project.tag}
                      </span>
                      <span className="text-xs text-slate-500">{project.panels}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{project.name}</h4>
                    <p className="mt-2 text-slate-600 text-sm leading-relaxed">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 6: Technical Specs Side-by-Side ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Technical Specifications — Side by Side
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              Complete engineering data for architects, structural consultants, and procurement teams evaluating
              both panel types for project specifications.
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* PUF Specs */}
              <div className="bg-blue-50 rounded-2xl overflow-hidden border border-blue-200">
                <div className="px-6 py-4 bg-blue-700 text-white">
                  <h3 className="font-bold text-lg">PUF Panel Specifications</h3>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-blue-100">
                    {[
                      { label: 'Core Material', value: 'Polyurethane Foam (PUF)' },
                      { label: 'Density', value: '40 ± 2 kg/m³' },
                      { label: 'Thermal Conductivity', value: '0.024 W/mK @ 25°C' },
                      { label: 'Fire Class', value: 'B2/B3 (B1 with PIR)' },
                      { label: 'Thickness Range', value: '30–150mm' },
                      { label: 'Panel Weight (50mm)', value: '~10 kg/m²' },
                      { label: 'Water Absorption', value: '< 1%' },
                      { label: 'NRC Value', value: '0.25–0.35' },
                      { label: 'Max Temp Resistance', value: '120–150°C' },
                      { label: 'Steel Options', value: '0.35–0.60mm PPGI/PPGL/SS' },
                      { label: 'Coatings', value: 'SMP, SDP, PVDF' },
                      { label: 'Blowing Agent', value: 'CFC/HFC-free (Zero ODP)' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}>
                        <td className="px-4 py-2.5 font-semibold text-slate-900">{row.label}</td>
                        <td className="px-4 py-2.5 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-4 text-center">
                  <Link
                    href="/products/sandwich-panels/sandwich-puf-panel"
                    className="text-blue-700 font-medium text-sm hover:underline"
                  >
                    Full PUF Panel Details &rarr;
                  </Link>
                </div>
              </div>

              {/* Rockwool Specs */}
              <div className="bg-orange-50 rounded-2xl overflow-hidden border border-orange-200">
                <div className="px-6 py-4 bg-orange-700 text-white">
                  <h3 className="font-bold text-lg">Rockwool Panel Specifications</h3>
                </div>
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-orange-100">
                    {[
                      { label: 'Core Material', value: 'Mineral Wool (Basalt Rock)' },
                      { label: 'Density', value: '100–150 kg/m³' },
                      { label: 'Thermal Conductivity', value: '0.035–0.040 W/mK' },
                      { label: 'Fire Class', value: 'A1/A2 (Non-combustible)' },
                      { label: 'Thickness Range', value: '50–150mm' },
                      { label: 'Panel Weight (50mm)', value: '~18–20 kg/m²' },
                      { label: 'Water Absorption', value: '1–5%' },
                      { label: 'NRC Value', value: '0.90–0.95' },
                      { label: 'Max Temp Resistance', value: 'Up to 1000°C' },
                      { label: 'Steel Options', value: '0.40–0.60mm PPGI/PPGL/SS' },
                      { label: 'Coatings', value: 'SMP, SDP, PVDF' },
                      { label: 'Core Material Origin', value: 'Natural Basalt Rock Fibre' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-orange-50/50'}>
                        <td className="px-4 py-2.5 font-semibold text-slate-900">{row.label}</td>
                        <td className="px-4 py-2.5 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="p-4 text-center">
                  <Link
                    href="/products/sandwich-panels/rockwool-panel"
                    className="text-orange-700 font-medium text-sm hover:underline"
                  >
                    Full Rockwool Panel Details &rarr;
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/resources/technical-sheet" className="text-primary hover:underline font-medium">
                Download Technical Data Sheets (PDF) &rarr;
              </Link>
              <Link href="/resources/blogs/puf-vs-pir-vs-rockwool" className="text-primary hover:underline font-medium">
                Related: PUF vs PIR vs Rockwool Deep-Dive &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Section 7: Pricing Comparison ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                PUF vs Rockwool Panel Pricing — 2026 Comparison
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                Indicative pricing per square meter from PHOENIXX SMARTBUILD. Final rates depend on order
                quantity, coating, steel thickness, and delivery location.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white text-left">
                        <th className="px-6 py-4 font-semibold">Thickness</th>
                        <th className="px-6 py-4 font-semibold text-blue-300">PUF Price (₹/m²)</th>
                        <th className="px-6 py-4 font-semibold text-orange-300">Rockwool Price (₹/m²)</th>
                        <th className="px-6 py-4 font-semibold">Difference</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        { thickness: '50mm', puf: '₹800–₹1,200', rw: '₹1,200–₹1,600', diff: 'Rockwool 30–40% higher' },
                        { thickness: '60mm', puf: '₹950–₹1,350', rw: '₹1,350–₹1,800', diff: 'Rockwool 35–40% higher' },
                        { thickness: '80mm', puf: '₹1,150–₹1,600', rw: '₹1,600–₹2,100', diff: 'Rockwool 30–35% higher' },
                        { thickness: '100mm', puf: '₹1,400–₹1,900', rw: '₹1,900–₹2,500', diff: 'Rockwool 25–35% higher' },
                        { thickness: '120mm', puf: '₹1,650–₹2,200', rw: '₹2,200–₹2,800', diff: 'Rockwool 25–30% higher' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-3 font-medium text-slate-900">{row.thickness}</td>
                          <td className="px-6 py-3 text-blue-700 font-semibold">{row.puf}</td>
                          <td className="px-6 py-3 text-orange-700 font-semibold">{row.rw}</td>
                          <td className="px-6 py-3 text-slate-500 text-xs">{row.diff}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 prose prose-slate max-w-none text-sm">
                <p>
                  <strong>Important pricing note:</strong> When comparing costs, don&apos;t compare at the same
                  thickness — compare at the same <em>R-value</em>. A 50mm PUF panel (R ≈ 2.08) provides
                  equivalent insulation to approximately 75–80mm of Rockwool. At equivalent thermal performance,
                  the cost gap narrows to 10–15% rather than the 25–40% suggested by same-thickness comparisons.
                  Additionally, PUF&apos;s lighter weight can reduce structural steel costs by 5–10%, further
                  narrowing the total installed cost difference.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Customized Pricing for Both Panel Types
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 8: FAQ ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions — PUF Panel vs Rockwool Panel
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              Straight answers to the most common questions engineers and buyers ask when comparing
              PUF and Rockwool insulated sandwich panels.
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
                How to Decide Between PUF Panel and Rockwool Panel
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

        {/* ===== Cross-Links ===== */}
        <section className="py-10 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Related Guides &amp; Products</h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/best-puf-panel-for-cold-storage"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Best PUF Panel for Cold Storage
                </Link>
                <Link
                  href="/best-puf-panel-for-clean-room"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Best PUF Panel for Clean Room
                </Link>
                <Link
                  href="/products/sandwich-panels/sandwich-puf-panel"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Sandwich PUF Panel
                </Link>
                <Link
                  href="/products/sandwich-panels/rockwool-panel"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Rockwool Panel
                </Link>
                <Link
                  href="/resources/blogs/puf-vs-pir-vs-rockwool"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  PUF vs PIR vs Rockwool
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 9: Conversion Footer ===== */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Still Unsure? Let Our Engineers Recommend the Right Panel for Your Project
            </h2>
            <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
              As a manufacturer of both PUF and Rockwool panels, PHOENIXX SMARTBUILD provides genuinely
              unbiased recommendations — we manufacture what your project needs, not what we want to sell.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-slate-400">
              <span>ISO 9001:2015</span>
              <span>•</span>
              <span>Both PUF &amp; Rockwool In-House</span>
              <span>•</span>
              <span>500+ Projects</span>
              <span>•</span>
              <span>Free Technical Consultation</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Get Expert Panel Recommendation
              </Link>
              <a
                href="tel:+918866556879"
                className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Call: +91 88665 56879
              </a>
              <a
                href="https://wa.me/918866556879?text=Hi%20PHOENIXX,%20I%20need%20help%20choosing%20between%20PUF%20and%20Rockwool%20panels"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                WhatsApp Enquiry
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm text-slate-300">
              <div>
                <div className="font-semibold text-white">Call Us</div>
                <a href="tel:+918866556879" className="hover:text-white transition-colors">+91 88665 56879</a>
              </div>
              <div>
                <div className="font-semibold text-white">Email</div>
                <a href="mailto:sales@phoenixxsmartbuild.com" className="hover:text-white transition-colors">
                  sales@phoenixxsmartbuild.com
                </a>
              </div>
              <div>
                <div className="font-semibold text-white">Factory</div>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/best-puf-panel-for-cold-storage" className="text-blue-400 hover:underline">
                Best PUF Panel for Cold Storage
              </Link>
              <Link href="/best-puf-panel-for-clean-room" className="text-blue-400 hover:underline">
                Best PUF Panel for Clean Room
              </Link>
              <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-blue-400 hover:underline">
                PUF Panel Product Page
              </Link>
              <Link href="/products/sandwich-panels/rockwool-panel" className="text-blue-400 hover:underline">
                Rockwool Panel Product Page
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
