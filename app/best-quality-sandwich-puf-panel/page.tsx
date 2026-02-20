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
  title: 'Which Sandwich PUF Panel Is Best Quality? | Buyer Guide 2026',
  description: 'Learn how to identify the best quality sandwich PUF panel. Compare density, thermal conductivity, steel thickness & coatings. ISO certified manufacturer India.',
  keywords: ['best quality sandwich PUF panel', 'high-density PUF panel', 'premium PUF panel manufacturer', 'PUF panel quality parameters', 'sandwich panel quality guide'],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/best-quality-sandwich-puf-panel' },
  openGraph: {
    title: 'Which Sandwich PUF Panel Is Best Quality? | Buyer Guide 2026',
    description: 'Learn how to identify the best quality sandwich PUF panel. Compare density, thermal conductivity, steel thickness & coatings.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-quality-sandwich-puf-panel',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'What density indicates the best quality PUF panel?',
    answer: 'The optimal density for high-quality PUF panels is 40 ± 2 kg/m³. Panels below 36 kg/m³ may have air pockets and inconsistent insulation. PHOENIXX maintains strict density control at 40 kg/m³ through continuous lamination technology.',
  },
  {
    question: 'How do I check if a PUF panel is genuinely high quality?',
    answer: 'Check these 5 parameters: foam density (should be 40 kg/m³), thermal conductivity (should be 0.024 W/mK or lower), steel thickness (minimum 0.40mm), adhesion strength between foam and steel, and certification compliance (IS 14925:2015, ISO 9001).',
  },
  {
    question: 'What steel thickness is best for sandwich PUF panels?',
    answer: 'For standard industrial applications, 0.45-0.50mm PPGI/PPGL steel is recommended. For corrosive environments or heavy-duty use, 0.60mm stainless steel 304/316 provides maximum durability. Thinner steel (0.35mm) compromises dent resistance and longevity.',
  },
  {
    question: 'Which coating gives the best durability on PUF panels?',
    answer: 'PVDF (Polyvinylidene Fluoride) provides the highest UV resistance and color retention (25+ year warranty). SMP (Silicon Modified Polyester) is the best mid-range option. Standard PE (Polyester) is suitable for indoor or covered applications only.',
  },
  {
    question: 'How much do premium quality PUF panels cost compared to standard ones?',
    answer: 'Premium PUF panels with 40 kg/m³ density, PVDF coating, and 0.50mm steel cost approximately 20-30% more than standard panels. However, the 25-30 year lifespan and lower maintenance costs provide better long-term ROI.',
  },
  {
    question: 'Does PHOENIXX provide quality test certificates with panels?',
    answer: 'Yes. Every PHOENIXX panel shipment includes density test reports, thermal conductivity certificates, steel coating thickness verification, fire test certificates, and IS 14925 compliance documentation.',
  },
];

const howToSteps = [
  { name: 'Check Foam Density', text: 'Request density test report. Must be 40 ± 2 kg/m³ for consistent insulation.' },
  { name: 'Verify Thermal Conductivity', text: 'Should be 0.024 W/mK or lower. Higher values indicate poor foam quality.' },
  { name: 'Inspect Steel Thickness', text: 'Measure with micrometer. Minimum 0.40mm for walls, 0.45mm for roofing.' },
  { name: 'Evaluate Coating Quality', text: 'Check coating thickness (15-25 microns). PVDF for outdoor, SMP for standard.' },
  { name: 'Test Adhesion Strength', text: 'Foam should not separate from steel under moderate force. Indicates proper bonding.' },
  { name: 'Verify Certifications', text: 'Demand IS 14925:2015, ISO 9001, and fire rating certificates from manufacturer.' },
];

export default function BestQualitySandwichPufPanelPage() {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Premium Quality Sandwich PUF Panel',
    description: 'High-density 40 kg/m³ polyurethane foam insulated sandwich panel with PPGI/PPGL steel facings. Thermal conductivity 0.024 W/mK. IS 14925:2015 certified. Manufactured by PHOENIXX SMARTBUILD.',
    image: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
    brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
    manufacturer: { '@type': 'Organization', name: 'PHOENIXX SMARTBUILD' },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '203',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'SKF India Ltd.' },
      reviewBody: 'Exceptional PUF panel quality with consistent 40 kg/m³ density and excellent thermal performance. PHOENIXX delivered on time with full documentation.',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '1000',
      highPrice: '2500',
      offerCount: '12',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* JSON-LD Schemas */}
        <JsonLd data={generateOrganizationSchema()} />
        <JsonLd data={generateLocalBusinessSchema()} />
        <JsonLd data={generateWebsiteSchema()} />
        <JsonLd data={generateServiceSchema(
          'Premium Quality Sandwich PUF Panels',
          'High-density polyurethane foam insulated sandwich panels with strict quality control, 40 kg/m³ guaranteed density, IS 14925:2015 certification, and PPGI/PPGL steel facings for industrial, commercial, and cold storage applications.',
          'https://phoenixxsmartbuild.com/best-quality-sandwich-puf-panel'
        )} />
        <JsonLd data={generateFAQSchema(faqs)} />
        <JsonLd data={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Best Quality Sandwich PUF Panel', url: '/best-quality-sandwich-puf-panel' },
        ])} />
        <JsonLd data={generateHowToSchema(
          'How to Identify High-Quality Sandwich PUF Panels',
          'Step-by-step guide to evaluating PUF panel quality before purchase.',
          howToSteps
        )} />
        <JsonLd data={generateArticleSchema({
          title: 'Which Sandwich PUF Panel Is Best Quality?',
          description: 'Complete guide to identifying premium quality sandwich PUF panels with quality parameters, comparison tables, and expert buying advice.',
          url: '/best-quality-sandwich-puf-panel',
          image: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
          datePublished: '2026-01-29',
          dateModified: '2026-01-29',
          author: { name: 'PHOENIXX SMARTBUILD Engineering Team' },
        })} />
        <JsonLd data={generateOfferSchema({
          name: 'Premium Sandwich PUF Panels',
          description: 'High-density 40 kg/m³ PUF insulated sandwich panels',
          priceCurrency: 'INR',
          lowPrice: 1000,
          highPrice: 2500,
          priceRange: '\u20B91,000-\u20B92,500 per sq.m',
          url: '/best-quality-sandwich-puf-panel',
          availability: 'https://schema.org/InStock',
        })} />
        <JsonLd data={generateSpeakableSchema(['h1', 'h2', '.faq-answer'])} />
        <JsonLd data={generateQAPageSchema(
          'Which sandwich PUF panel is best quality?',
          [{
            text: 'The best quality sandwich PUF panel has 40 ± 2 kg/m³ foam density, thermal conductivity of 0.024 W/mK, minimum 0.45mm pre-painted steel facings, and IS 14925:2015 certification. PHOENIXX SMARTBUILD manufactures premium PUF panels with continuous lamination technology ensuring uniform density and zero air pockets.',
            author: 'PHOENIXX SMARTBUILD',
          }]
        )} />
        <JsonLd data={generateImageObjectSchema({
          name: 'Premium Quality Sandwich PUF Panel Cross-Section',
          description: 'PHOENIXX high-density PUF panel showing foam core and steel facings',
          contentUrl: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
          width: 1200,
          height: 630,
        })} />
        <JsonLd data={generateVideoSchema({
          name: 'PHOENIXX PUF Panel Quality Control Process',
          description: 'See how PHOENIXX ensures premium quality in every PUF panel through rigorous testing and continuous lamination technology.',
          thumbnailUrl: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
          uploadDate: '2025-01-01',
          duration: 'PT4M45S',
          contentUrl: 'https://phoenixxsmartbuild.com/videos/quality-control',
        })} />
        <JsonLd data={productSchema} />

        {/* ============================================================
            SECTION 1: Trust-First Hero
        ============================================================ */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-900/95" />
          <div className="container-custom relative z-10">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400">
                  ISO 9001:2015 Certified
                </span>
                <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400">
                  40 kg/m&sup3; Guaranteed Density
                </span>
                <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400">
                  13+ Years Experience
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Which Sandwich PUF Panel Is Best Quality? &mdash; Complete Buyer&apos;s Guide 2026
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Not all sandwich PUF panels are equal. The difference between a panel that lasts 10 years and one that
                lasts 30 years comes down to five measurable quality parameters. This guide helps you identify, evaluate,
                and procure genuinely high-quality PUF panels &mdash; so you never overpay for underperformance again.
              </p>
              <p className="mt-4 text-sm text-slate-400 flex items-center gap-2">
                <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Manufactured in Ahmedabad, Gujarat | Pan-India Supply &amp; Installation
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Get Free Quote
                </Link>
                <Link
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Call Now: +91 93289 15237
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 2: Problem -> Solution
        ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Problem: How Poor Quality PUF Panels Cost You More
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Every year, thousands of industrial projects in India suffer from premature panel failure, escalating
                  energy bills, and unplanned replacement costs &mdash; all because the original panels were selected
                  on price alone. The consequences of installing substandard <strong>sandwich PUF panels</strong> are
                  not immediately visible, but they compound rapidly over 3-5 years.
                </p>
                <p>
                  Here are the most common quality failures we encounter during panel audits and replacement projects:
                </p>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-6">
                {[
                  {
                    problem: 'Low-Density Foam (Below 36 kg/m³)',
                    impact: 'Creates air pockets, uneven insulation, and up to 40% higher energy costs. Panels sag and deform within 3-5 years.',
                  },
                  {
                    problem: 'Air Pockets & Voids in Foam Core',
                    impact: 'Result of batch-pour manufacturing. Causes thermal bridges, condensation, and mold growth inside the panel.',
                  },
                  {
                    problem: 'Thin Steel Facings (Below 0.40mm)',
                    impact: 'Dents easily during installation and operation. Corrodes faster, especially in coastal or chemical environments.',
                  },
                  {
                    problem: 'Premature Coating Degradation',
                    impact: 'Cheap PE coatings fade and chalk within 2-3 years under UV exposure. Leads to rust and structural weakness.',
                  },
                  {
                    problem: 'Poor Adhesion Between Foam & Steel',
                    impact: 'Delamination allows moisture ingress, destroys insulation value, and compromises structural integrity.',
                  },
                  {
                    problem: 'No Quality Certifications',
                    impact: 'Panels without IS 14925 or ISO certification often fail fire safety audits, insurance inspections, and regulatory compliance.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="rounded-xl border border-red-100 bg-red-50/50 p-6">
                    <h3 className="font-bold text-red-800 text-lg">{item.problem}</h3>
                    <p className="mt-2 text-slate-700 text-sm">{item.impact}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-emerald-50 border border-emerald-200 p-8">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">
                  The Solution: Know What to Measure Before You Buy
                </h3>
                <p className="text-slate-700">
                  The good news is that PUF panel quality is fully measurable. Unlike many building materials where
                  quality is subjective, every critical parameter of a sandwich PUF panel can be tested, verified, and
                  documented. In the sections below, we break down exactly what to look for, what numbers to demand,
                  and how PHOENIXX SMARTBUILD ensures every panel meets the highest standards through{' '}
                  <strong>continuous lamination technology</strong> and rigorous third-party testing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 3: Product Explanation — Quality Parameters
        ============================================================ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What Defines a High-Quality Sandwich PUF Panel?
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                Quality in a sandwich PUF panel is determined by five measurable parameters. Understanding each one
                empowers you to make informed purchasing decisions and avoid costly mistakes.
              </p>

              <div className="space-y-8">
                {[
                  {
                    number: '01',
                    title: 'Foam Density — The Core Quality Indicator',
                    description: 'Foam density is the single most important quality parameter. It directly determines insulation effectiveness, compressive strength, and service life. The ideal density for commercial and industrial applications is 40 ± 2 kg/m³. Panels with density below 36 kg/m³ contain air pockets from batch-pour processes that create thermal bridges — invisible weak points where heat transfers through the panel. PHOENIXX uses continuous lamination technology that injects polyurethane at precisely calibrated pressure, ensuring uniform 40 kg/m³ density across the entire panel length with zero voids.',
                    metric: '40 ± 2 kg/m³',
                  },
                  {
                    number: '02',
                    title: 'Thermal Conductivity — Insulation Efficiency',
                    description: 'Thermal conductivity (k-value) measures how readily heat passes through the foam core. Lower values mean better insulation. Premium PUF panels achieve 0.024 W/mK or below — the lowest k-value among common insulation materials. For context, mineral wool has a k-value of 0.035-0.040 W/mK, meaning PUF provides 40-50% better insulation in the same thickness. This translates directly to energy savings: a 80mm premium PUF panel can replace a 120mm mineral wool panel while delivering identical or superior thermal resistance.',
                    metric: '≤ 0.024 W/mK',
                  },
                  {
                    number: '03',
                    title: 'Steel Thickness & Grade — Structural Durability',
                    description: 'The metal facings protect the foam core and provide structural rigidity. Minimum recommended steel thickness is 0.40mm for internal walls and 0.45mm for roofing and external cladding. For corrosive environments (chemical plants, coastal zones, food processing), 0.50-0.60mm PPGL (Galvalume) or stainless steel 304/316 facings are essential. Critically, steel grade matters as much as thickness — AZ150 Galvalume coating provides three times the corrosion resistance of standard GI coatings.',
                    metric: '0.45-0.60mm PPGI/PPGL',
                  },
                  {
                    number: '04',
                    title: 'Coating Quality — Weather & UV Protection',
                    description: 'The exterior coating determines color retention, chalking resistance, and long-term aesthetics. Three tiers exist: PE (Polyester) is the most economical but only suitable for indoor or sheltered applications with a 5-8 year color life. SMP (Silicon Modified Polyester) offers the best value for standard outdoor use with a 15-20 year performance window. PVDF (Polyvinylidene Fluoride) is the premium choice with 25+ year color retention, maximum UV resistance, and the lowest chalking index — ideal for architectural and long-service-life applications.',
                    metric: 'PVDF / SMP / PE',
                  },
                  {
                    number: '05',
                    title: 'Certification Compliance — Verified Quality',
                    description: 'Certifications are not just paperwork — they represent independent verification of manufacturing quality. The essential certifications for PUF panels in India include IS 14925:2015 (the Bureau of Indian Standards specification for sandwich panels), ISO 9001:2015 (quality management systems), and fire rating classifications (B1/B2 as per DIN 4102). Always request the original test certificates, not just the manufacturer\'s claim. PHOENIXX provides complete documentation packages including density reports, thermal conductivity tests, and fire certification with every shipment.',
                    metric: 'IS 14925 / ISO 9001',
                  },
                ].map((param, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 font-bold text-lg">
                        {param.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <h3 className="text-xl font-bold text-slate-900">{param.title}</h3>
                          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800">
                            Target: {param.metric}
                          </span>
                        </div>
                        <p className="text-slate-600 leading-relaxed">{param.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quality Comparison Table */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Quality Tier Comparison: Premium vs Standard vs Low-Quality
                </h3>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="px-6 py-4 text-left font-semibold">Parameter</th>
                          <th className="px-6 py-4 text-center font-semibold text-emerald-300">Premium (PHOENIXX)</th>
                          <th className="px-6 py-4 text-center font-semibold text-amber-300">Standard</th>
                          <th className="px-6 py-4 text-center font-semibold text-red-300">Low Quality</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {[
                          { param: 'Foam Density', premium: '40 ± 2 kg/m³', standard: '36-38 kg/m³', low: '30-34 kg/m³' },
                          { param: 'Thermal Conductivity', premium: '0.022-0.024 W/mK', standard: '0.026-0.028 W/mK', low: '0.030+ W/mK' },
                          { param: 'Steel Thickness', premium: '0.45-0.60mm', standard: '0.40-0.45mm', low: '0.35mm or less' },
                          { param: 'Coating System', premium: 'PVDF / SMP', standard: 'SMP / PE', low: 'PE or uncoated' },
                          { param: 'Manufacturing', premium: 'Continuous Lamination', standard: 'Semi-continuous', low: 'Batch Pour' },
                          { param: 'Certifications', premium: 'IS 14925, ISO 9001, Fire', standard: 'Partial', low: 'None / Self-declared' },
                          { param: 'Expected Life', premium: '25-30 years', standard: '15-20 years', low: '5-10 years' },
                          { param: 'Warranty', premium: 'Up to 25 years', standard: '5-10 years', low: 'None or 1 year' },
                        ].map((row, idx) => (
                          <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                            <td className="px-6 py-3 font-semibold text-slate-900">{row.param}</td>
                            <td className="px-6 py-3 text-center text-emerald-700 font-medium">{row.premium}</td>
                            <td className="px-6 py-3 text-center text-amber-700">{row.standard}</td>
                            <td className="px-6 py-3 text-center text-red-600">{row.low}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/products/sandwich-panels/sandwich-puf-panel"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  View PUF Panel Specifications
                </Link>
                <Link
                  href="/shop/sandwich-puf-panel"
                  className="rounded-xl border-2 border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  Shop Sandwich PUF Panels
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 4: Benefits & ROI
        ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Investing in Quality PUF Panels Saves Money Long-Term
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                The upfront cost of premium PUF panels is 20-30% higher &mdash; but the total cost of ownership over
                a building&apos;s lifecycle is dramatically lower. Here&apos;s the math behind the value.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { metric: '40-50%', label: 'Lower Energy Bills', detail: 'Superior k-value of 0.024 W/mK reduces HVAC load significantly compared to low-density alternatives.' },
                  { metric: '25-30 Yrs', label: 'Panel Lifespan', detail: 'Premium panels with PVDF coating and 40 kg/m³ density last 3x longer than budget options.' },
                  { metric: '80% Less', label: 'Maintenance Cost', detail: 'No repainting for 20+ years. No delamination repairs. No foam degradation replacements.' },
                  { metric: '₹0', label: 'Hidden Replacement Cost', detail: 'Cheap panels need full replacement at year 8-10. Premium panels are still performing at year 25.' },
                  { metric: '3-5x', label: 'Better Fire Safety', detail: 'B1-rated premium panels resist flame spread. Critical for insurance compliance and worker safety.' },
                  { metric: '99%', label: 'Moisture Barrier', detail: 'Closed-cell PUF at proper density blocks virtually all moisture ingress, preventing mold and corrosion.' },
                  { metric: '30 dB', label: 'Noise Reduction', detail: 'Dense foam core combined with thick steel facings provides excellent acoustic insulation for industrial environments.' },
                  { metric: '15 Min', label: 'Faster Installation', detail: 'Precision-manufactured panels with consistent dimensions reduce on-site fitting time per panel.' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-slate-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
                    <span className="block text-3xl font-bold text-emerald-600">{item.metric}</span>
                    <span className="block mt-1 text-lg font-semibold text-slate-900">{item.label}</span>
                    <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Before vs After Table */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  10-Year Total Cost: Cheap Panels vs Premium Panels
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-8">
                    <h4 className="text-xl font-bold text-red-800 mb-4">Cheap Panels (30-34 kg/m³)</h4>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex justify-between"><span>Initial Cost (1000 sqm)</span><span className="font-semibold">₹8,00,000</span></li>
                      <li className="flex justify-between"><span>Extra Energy (10 yrs)</span><span className="font-semibold">₹6,00,000</span></li>
                      <li className="flex justify-between"><span>Maintenance &amp; Repairs</span><span className="font-semibold">₹3,50,000</span></li>
                      <li className="flex justify-between"><span>Replacement at Year 8</span><span className="font-semibold">₹9,00,000</span></li>
                      <li className="flex justify-between border-t border-red-300 pt-3 text-lg font-bold text-red-900"><span>Total 10-Year Cost</span><span>₹26,50,000</span></li>
                    </ul>
                  </div>
                  <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/50 p-8">
                    <h4 className="text-xl font-bold text-emerald-800 mb-4">Premium Panels (40 kg/m³ PHOENIXX)</h4>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex justify-between"><span>Initial Cost (1000 sqm)</span><span className="font-semibold">₹12,00,000</span></li>
                      <li className="flex justify-between"><span>Energy Savings (10 yrs)</span><span className="font-semibold text-emerald-700">-₹3,00,000</span></li>
                      <li className="flex justify-between"><span>Maintenance</span><span className="font-semibold">₹50,000</span></li>
                      <li className="flex justify-between"><span>Replacement</span><span className="font-semibold text-emerald-700">₹0</span></li>
                      <li className="flex justify-between border-t border-emerald-300 pt-3 text-lg font-bold text-emerald-900"><span>Total 10-Year Cost</span><span>₹9,50,000</span></li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-center text-sm text-slate-500">
                  * Estimates based on average industrial facility in Gujarat. Actual savings vary by project size and climate zone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 5: Real Projects
        ============================================================ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Quality Proven in Real Projects
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                Our premium PUF panels have been tested and validated in demanding real-world applications across
                India&apos;s leading industrial facilities. Here are projects where quality made the difference.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    client: 'SKF India Ltd.',
                    location: 'Ahmedabad, Gujarat',
                    scope: 'Precision manufacturing cleanroom with 80mm PUF wall panels and 100mm roof panels. Required tight thermal control for bearing production facility.',
                    result: 'Achieved ±1°C temperature stability. Zero panel defects reported in 3+ years of operation.',
                    link: '/projects',
                  },
                  {
                    client: 'Fuji Silvertech Concrete Pvt. Ltd.',
                    location: 'Ahmedabad, Gujarat',
                    scope: 'Large-scale warehouse cladding using 60mm PPGL PUF panels. Corrosion-resistant specification for concrete product storage environment.',
                    result: 'Panels performing flawlessly under high-dust, humid conditions. No delamination or coating degradation.',
                    link: '/projects',
                  },
                  {
                    client: 'PGP Glass Pvt. Ltd.',
                    location: 'Dahej, Gujarat',
                    scope: 'High-temperature industrial facility requiring fire-rated PUF panels with B1 classification and 0.50mm Galvalume facings.',
                    result: 'Passed all fire safety audits. Superior thermal resistance reduced cooling costs by an estimated 35%.',
                    link: '/projects',
                  },
                  {
                    client: 'Rajhans Nutriments Pvt. Ltd.',
                    location: 'Surat, Gujarat',
                    scope: 'Food-grade cold storage facility with 120mm PUF panels. Required IS 14925 compliance and hygiene-grade coatings for food processing.',
                    result: 'Maintained -18°C consistently. Full compliance with FSSAI and BIS requirements for food storage.',
                    link: '/projects',
                  },
                ].map((project, idx) => (
                  <Link
                    key={idx}
                    href={project.link}
                    className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                          {project.client}
                        </h3>
                        <p className="text-sm text-slate-500">{project.location}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{project.scope}</p>
                    <p className="text-emerald-700 text-sm font-medium">{project.result}</p>
                  </Link>
                ))}
              </div>

              <p className="mt-8 text-center text-slate-600">
                <em>
                  Content authored by the <strong>PHOENIXX SMARTBUILD Engineering Team</strong> — 13+ years of
                  hands-on experience in insulated panel manufacturing, installation, and quality assurance across
                  150+ industrial projects in India.
                </em>
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 6: Technical Specifications
        ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Complete Quality Parameter Specifications
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                Full technical specifications for PHOENIXX premium sandwich PUF panels. Use this table as your
                quality benchmark when evaluating any manufacturer.
              </p>

              <div className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-800 text-white">
                        <th className="px-6 py-4 text-left font-semibold">Quality Parameter</th>
                        <th className="px-6 py-4 text-left font-semibold">PHOENIXX Specification</th>
                        <th className="px-6 py-4 text-left font-semibold">Test Method / Standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        { param: 'Foam Core Density', spec: '40 ± 2 kg/m³', standard: 'IS 14925:2015 / ISO 845' },
                        { param: 'Thermal Conductivity', spec: '0.022 - 0.024 W/mK', standard: 'ISO 8301 / ASTM C518' },
                        { param: 'Compressive Strength', spec: '≥ 0.15 MPa', standard: 'ISO 844' },
                        { param: 'Closed Cell Content', spec: '≥ 95%', standard: 'ISO 4590' },
                        { param: 'Steel Grade (Outer)', spec: 'AZ150 Galvalume / PPGI 275 GSM', standard: 'IS 15961 / JIS G3312' },
                        { param: 'Steel Thickness', spec: '0.40mm - 0.60mm', standard: 'Micrometer Verification' },
                        { param: 'Coating Thickness', spec: '15-25 microns (top), 5-7 microns (back)', standard: 'IS 15965 / ASTM D7091' },
                        { param: 'Adhesion Strength', spec: '≥ 0.08 MPa (foam-to-steel)', standard: 'EN 14509 Pull Test' },
                        { param: 'Fire Classification', spec: 'B1 / B2 (Class 1/Class 2)', standard: 'DIN 4102 / IS 3808' },
                        { param: 'Panel Width', spec: '1000mm / 1100mm (effective)', standard: 'Custom widths available' },
                        { param: 'Panel Length', spec: 'Up to 20,000mm', standard: 'Project-specific' },
                        { param: 'Thickness Range', spec: '30mm to 200mm', standard: 'IS 14925:2015' },
                        { param: 'Temperature Range', spec: '-40°C to +80°C', standard: 'Application dependent' },
                        { param: 'Environmental', spec: 'CFC-free, HCFC-free, Zero ODP', standard: 'Montreal Protocol compliant' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-3 font-semibold text-slate-900">{row.param}</td>
                          <td className="px-6 py-3 text-slate-700">{row.spec}</td>
                          <td className="px-6 py-3 text-slate-500">{row.standard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/resources/technical-sheet"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  Download Technical Data Sheet
                </Link>
                <Link
                  href="/resources/brochure"
                  className="rounded-xl border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Download Product Brochure
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-slate-500">
                  Compliance: IS 14925:2015 | ISO 9001:2015 | DIN 4102 Fire Testing | EN 14509 | ASTM Standards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 7: Pricing
        ============================================================ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Premium Quality PUF Panel Pricing in India
              </h2>
              <p className="text-lg text-slate-600 mb-10 max-w-3xl">
                Transparent pricing by quality tier. Remember: the cheapest panel is rarely the most economical
                over a building&apos;s 25-year lifecycle.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    tier: 'Standard',
                    range: '₹800 - ₹1,200',
                    unit: 'per sq.m',
                    features: ['36-38 kg/m³ density', '0.40mm PPGI steel', 'PE coating', 'Basic fire rating', '10-15 year expected life'],
                    recommended: false,
                  },
                  {
                    tier: 'Premium (PHOENIXX)',
                    range: '₹1,200 - ₹1,800',
                    unit: 'per sq.m',
                    features: ['40 kg/m³ density guaranteed', '0.45-0.50mm PPGL steel', 'SMP / PVDF coating', 'B1 fire rated', '25-30 year expected life', 'Full test certificates'],
                    recommended: true,
                  },
                  {
                    tier: 'Heavy-Duty',
                    range: '₹1,800 - ₹2,500',
                    unit: 'per sq.m',
                    features: ['40 kg/m³ density', '0.50-0.60mm SS 304/316', 'PVDF coating', 'B1 fire rated + PIR option', '30+ year expected life', 'Full documentation + warranty'],
                    recommended: false,
                  },
                ].map((plan, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl p-8 ${
                      plan.recommended
                        ? 'bg-emerald-600 text-white ring-4 ring-emerald-200 scale-[1.02]'
                        : 'bg-white border border-slate-200'
                    }`}
                  >
                    {plan.recommended && (
                      <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide mb-4">
                        Most Popular
                      </span>
                    )}
                    <h3 className={`text-xl font-bold ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
                      {plan.tier}
                    </h3>
                    <p className={`text-3xl font-bold mt-2 ${plan.recommended ? 'text-white' : 'text-slate-900'}`}>
                      {plan.range}
                    </p>
                    <p className={`text-sm ${plan.recommended ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {plan.unit}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className={`flex items-start gap-2 text-sm ${plan.recommended ? 'text-emerald-50' : 'text-slate-600'}`}>
                          <svg className={`h-5 w-5 flex-shrink-0 ${plan.recommended ? 'text-emerald-200' : 'text-emerald-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-10 prose prose-lg prose-slate max-w-3xl mx-auto">
                <h3>Factors That Affect PUF Panel Pricing</h3>
                <p>
                  Panel thickness is the primary cost driver — a 100mm panel costs roughly 60% more than a 50mm panel
                  due to increased foam volume. Steel grade and thickness add 10-25% depending on specification. Coating
                  type (PE vs SMP vs PVDF) impacts cost by 5-15%. Order volume, custom profiling, and delivery distance
                  also influence final pricing. For accurate project-specific pricing, we recommend requesting a detailed
                  quotation with all specifications included.
                </p>
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Get Project-Specific Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 8: FAQ Accordion
        ============================================================ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Frequently Asked Questions About PUF Panel Quality
              </h2>
              <p className="text-lg text-slate-600 mb-10 text-center">
                Expert answers to the most common questions buyers ask when evaluating sandwich PUF panel quality.
              </p>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group rounded-xl border border-slate-200 bg-white overflow-hidden"
                    {...(idx === 0 ? { open: true } : {})}
                  >
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-lg font-semibold text-slate-900 hover:bg-slate-50 transition-colors">
                      {faq.question}
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-6 pb-5">
                      <p className="faq-answer text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                ))}
              </div>

              {/* Cross-links */}
              <div className="mt-12 rounded-2xl bg-slate-50 p-8">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Related Guides You May Find Useful</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/best-puf-panel-brand-in-india" className="text-emerald-700 hover:text-emerald-800 font-medium hover:underline">
                      Best PUF Panel Brand in India &mdash; Brand Comparison Guide 2026
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-density-puf-panel-for-insulation" className="text-emerald-700 hover:text-emerald-800 font-medium hover:underline">
                      Best Density PUF Panel for Insulation &mdash; Technical Deep Dive
                    </Link>
                  </li>
                  <li>
                    <Link href="/best-puf-panel-manufacturer-in-india" className="text-emerald-700 hover:text-emerald-800 font-medium hover:underline">
                      Best PUF Panel Manufacturer in India &mdash; Complete Ranking &amp; Guide
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            SECTION 9: Conversion Footer
        ============================================================ */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-green-800 text-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Source the Best Quality Sandwich PUF Panels?
              </h2>
              <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
                Get expert guidance, certified quality, competitive pricing, and reliable pan-India delivery.
                Our engineering team is ready to help you specify the right panel for your project.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Get Free Project Quote
                </Link>
                <Link
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Call: +91 93289 15237
                </Link>
                <Link
                  href="https://wa.me/919328915237?text=Hi%2C%20I%20need%20premium%20quality%20PUF%20panels.%20Please%20share%20details."
                  className="rounded-xl border-2 border-white/60 bg-white/10 px-8 py-4 font-semibold text-white hover:bg-white/20 transition-all"
                >
                  WhatsApp Us
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-center mb-10">
                <div>
                  <p className="text-3xl font-bold">13+</p>
                  <p className="text-emerald-200 text-sm">Years in Business</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">150+</p>
                  <p className="text-emerald-200 text-sm">Projects Delivered</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">500+</p>
                  <p className="text-emerald-200 text-sm">Satisfied Clients</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">40 kg/m&sup3;</p>
                  <p className="text-emerald-200 text-sm">Guaranteed Density</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-emerald-100">
                  ISO 9001:2015 Certified
                </span>
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-emerald-100">
                  IS 14925:2015 Compliant
                </span>
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-emerald-100">
                  CFC &amp; HCFC Free
                </span>
                <span className="inline-block rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm text-emerald-100">
                  Made in India
                </span>
              </div>

              <div className="mt-8 text-sm text-emerald-200">
                <p>
                  <strong>PHOENIXX SMARTBUILD</strong> &mdash; Ahmedabad, Gujarat, India |{' '}
                  <a href="mailto:info@phoenixxsmartbuild.com" className="underline hover:text-white">info@phoenixxsmartbuild.com</a> |{' '}
                  <a href="mailto:sales@phoenixxsmartbuild.com" className="underline hover:text-white">sales@phoenixxsmartbuild.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
