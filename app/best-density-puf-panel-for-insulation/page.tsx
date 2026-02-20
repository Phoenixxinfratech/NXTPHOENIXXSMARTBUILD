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
  title: 'What Density PUF Panel Is Best for Insulation? | Expert Guide 2026',
  description: 'Discover why 40 kg/m³ is the optimal PUF panel density for insulation. Density vs performance data, thermal conductivity comparison, testing methods, and expert recommendations from PHOENIXX SMARTBUILD.',
  keywords: ['best density PUF panel for insulation', 'PUF panel density guide', '40 kg/m3 PUF panel', 'PUF panel density vs performance', 'optimal PUF foam density'],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/best-density-puf-panel-for-insulation' },
  openGraph: {
    title: 'What Density PUF Panel Is Best for Insulation? | Expert Guide 2026',
    description: 'Discover why 40 kg/m³ is the optimal PUF panel density for insulation. Density vs performance data, thermal conductivity comparison, and testing methods.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-density-puf-panel-for-insulation',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'What is the ideal density for PUF insulation panels?',
    answer: '40 ± 2 kg/m³ is the industry standard for optimal thermal performance. This density ensures closed-cell structure, zero water absorption, thermal conductivity of 0.024 W/mK, and 25-30 year service life.',
  },
  {
    question: 'What happens if PUF panel density is too low?',
    answer: 'Panels below 36 kg/m³ develop open cells and air pockets, leading to higher thermal conductivity (poor insulation), moisture absorption, structural weakness, and premature degradation. Always demand density test certificates.',
  },
  {
    question: 'What happens if PUF panel density is too high?',
    answer: 'Density above 45 kg/m³ increases cost without proportional insulation improvement. It also increases panel weight, adding to structural load. The 40 kg/m³ sweet spot offers the best performance-to-cost ratio.',
  },
  {
    question: 'How can I verify PUF panel density?',
    answer: 'Request the manufacturer\'s density test report (tested per IS 3346). You can also cut a small sample and calculate: Density = Mass/Volume. Reputable manufacturers like PHOENIXX provide density certificates with every shipment.',
  },
  {
    question: 'Does higher density mean better fire resistance?',
    answer: 'Not directly. Fire resistance depends primarily on the foam chemistry (PUF vs PIR) and additives, not density alone. PIR panels offer significantly better fire resistance than PUF regardless of density. For fire-critical applications, choose PIR or Rockwool panels.',
  },
  {
    question: 'What density is used for cold storage PUF panels?',
    answer: 'The same 40 kg/m³ density is used for cold storage. The difference is in thickness (100-150mm for cold storage vs 50-80mm for standard). Higher density doesn\'t improve cold storage performance — correct thickness does.',
  },
];

const howToSteps = [
  {
    name: 'Understand Density Standards',
    text: 'Learn that 40 ± 2 kg/m³ is the internationally accepted standard for rigid polyurethane foam in insulated sandwich panels per IS 3346 and ISO 845. This density guarantees a closed-cell structure with over 90% closed cells.',
  },
  {
    name: 'Request Manufacturer Test Reports',
    text: 'Ask the manufacturer for density test certificates generated per IS 3346 testing methodology. Reputable brands like PHOENIXX provide density reports with every shipment, including batch-wise test data.',
  },
  {
    name: 'Compare Density vs Thermal Performance',
    text: 'Evaluate the relationship between density and thermal conductivity. At 40 kg/m³, thermal conductivity reaches the optimal 0.024 W/mK. Below 36 kg/m³, conductivity rises sharply; above 45 kg/m³, improvement is negligible.',
  },
  {
    name: 'Evaluate Cost-Benefit Ratio',
    text: 'Calculate the total cost of ownership, not just panel price. Low-density panels cost less upfront but result in higher energy bills, shorter lifespan, and potential replacement costs within 5-8 years.',
  },
  {
    name: 'Check for Consistency Across Panel',
    text: 'Verify that density is consistent from core to edge and across the full panel length. Reputable continuous lamination manufacturers maintain uniform density; manual or discontinuous processes create density gradients.',
  },
  {
    name: 'Verify with Independent Testing',
    text: 'For critical projects, send panel samples to NABL-accredited laboratories for independent density verification. Compare results against the manufacturer\'s stated specifications to ensure compliance.',
  },
];

export default function BestDensityPufPanelForInsulationPage() {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateServiceSchema(
      'Optimal Density PUF Panels for Insulation',
      'Premium PUF insulated sandwich panels manufactured at guaranteed 40 ± 2 kg/m³ density for optimal thermal performance. ISO 9001:2015 certified, CFC/HFC-free, 25-30 year service life. PHOENIXX SMARTBUILD — Ahmedabad, Gujarat.',
      '/best-density-puf-panel-for-insulation'
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Resources', url: '/resources' },
      { name: 'Best Density PUF Panel for Insulation', url: '/best-density-puf-panel-for-insulation' },
    ]),
    generateHowToSchema(
      'How to Choose the Optimal PUF Panel Density for Insulation',
      'A step-by-step expert guide to selecting the correct PUF panel density for maximum insulation performance, including testing methods, density vs thermal conductivity analysis, and cost-benefit evaluation.',
      howToSteps
    ),
    generateArticleSchema({
      title: 'What Density PUF Panel Is Best for Insulation? — Expert Guide 2026',
      description: 'Comprehensive technical guide on PUF panel density for insulation. Learn why 40 kg/m³ is optimal, how to verify density, and the science behind closed-cell foam performance.',
      url: '/best-density-puf-panel-for-insulation',
      image: '/images/guides/og/puf-panel-density-insulation-guide.jpg',
      datePublished: '2025-03-10',
      dateModified: '2026-02-17',
      author: { name: 'PHOENIXX SMARTBUILD Technical Team', url: 'https://phoenixxsmartbuild.com/about-us' },
    }),
    generateOfferSchema({
      name: 'PHOENIXX 40 kg/m³ Density PUF Panels',
      description: 'Premium PUF insulated sandwich panels with guaranteed 40 ± 2 kg/m³ core density. Available in 30-150mm thickness with SMP, SDP, and PVDF coatings. Density certificate included with every shipment.',
      priceCurrency: 'INR',
      lowPrice: 800,
      highPrice: 2500,
      url: '/best-density-puf-panel-for-insulation',
      availability: 'https://schema.org/InStock',
    }),
    generateSpeakableSchema(['h1', '.ai-summary', '.faq-answer']),
    generateQAPageSchema(
      'What density PUF panel is best for insulation — is 40 kg/m³ the optimal density?',
      [
        {
          text: 'Yes, 40 ± 2 kg/m³ is the internationally accepted optimal density for rigid polyurethane foam (PUF) insulation panels. At this density, the foam achieves over 90% closed-cell structure, thermal conductivity of 0.024 W/mK, zero water absorption, and a service life of 25-30 years. Below 36 kg/m³, insulation performance degrades significantly due to open cells. Above 45 kg/m³, the cost increase outweighs marginal performance gains. PHOENIXX SMARTBUILD guarantees 40 ± 2 kg/m³ density with batch-wise test certificates on every shipment.',
          author: 'PHOENIXX SMARTBUILD Technical Team',
        },
      ]
    ),
    generateImageObjectSchema({
      name: 'PUF Panel Density Cross-Section Analysis',
      description: 'Cross-section view of a 40 kg/m³ PUF panel showing closed-cell structure under magnification at PHOENIXX SMARTBUILD quality laboratory in Ahmedabad.',
      contentUrl: '/images/guides/density/puf-panel-density-cross-section.jpg',
      width: 1200,
      height: 630,
    }),
    generateVideoSchema({
      name: 'PUF Panel Density Testing — How to Verify 40 kg/m³',
      description: 'Watch how PHOENIXX SMARTBUILD tests PUF panel density per IS 3346 standards. Learn how to verify density on-site and interpret density test certificates.',
      thumbnailUrl: 'https://phoenixxsmartbuild.com/images/video/density-testing-thumbnail.jpg',
      uploadDate: '2025-08-15',
      duration: 'PT4M20S',
      contentUrl: 'https://phoenixxsmartbuild.com/videos/puf-panel-density-testing.mp4',
    }),
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'PHOENIXX 40 kg/m³ PUF Insulation Panels',
      description: 'High-performance polyurethane foam insulated sandwich panels with guaranteed 40 ± 2 kg/m³ core density. Thermal conductivity 0.024 W/mK, closed-cell structure >90%, CFC/HFC-free, manufactured on continuous lamination line at PHOENIXX SMARTBUILD, Ahmedabad.',
      brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
      manufacturer: { '@type': 'Organization', name: 'PHOENIXX SMARTBUILD' },
      url: 'https://phoenixxsmartbuild.com/best-density-puf-panel-for-insulation',
      image: 'https://phoenixxsmartbuild.com/images/products/puf-panel-density-40kg.jpg',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        bestRating: '5',
        worstRating: '1',
        reviewCount: '189',
      },
      review: {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Verified Industrial Client' },
        reviewBody: 'PHOENIXX panels consistently delivered 40 kg/m³ density across our entire cold storage project. Thermal performance matched specifications perfectly — no hot spots or condensation issues even after 18 months.',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '800',
        highPrice: '2500',
        offerCount: '8',
        availability: 'https://schema.org/InStock',
      },
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {schemas.map((schema, i) => (
          <JsonLd key={i} data={schema} />
        ))}

        {/* ===== Section 1: Hero — Insulation Science Experts ===== */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                Insulation Science Experts | 40 kg/m³ Guaranteed | ISO Certified
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                What Density PUF Panel Is Best for Insulation? — Expert Guide 2026
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl ai-summary">
                The optimal density for PUF (Polyurethane Foam) insulation panels is <strong className="text-white">40 ± 2 kg/m³</strong>.
                At this density, the rigid foam achieves over 90% closed-cell structure, a thermal conductivity of
                just 0.024 W/mK, zero water absorption, and a proven service life of 25-30 years. Below 36 kg/m³,
                insulation performance collapses. Above 45 kg/m³, you pay more without meaningful improvement.
                This guide explains the science, shows you the data, and helps you make an informed decision.
              </p>
              <p className="mt-4 text-base text-slate-400">
                By PHOENIXX SMARTBUILD Technical Team | Ahmedabad, Gujarat | Updated February 2026
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Quote for 40 kg/m³ Panels
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Speak with Insulation Engineer
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { metric: '40 kg/m³', label: 'Guaranteed Density' },
                  { metric: '0.024', label: 'W/mK Conductivity' },
                  { metric: '90%+', label: 'Closed-Cell Structure' },
                  { metric: '25-30 yr', label: 'Service Life' },
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

        {/* ===== Section 2: Problem — How Low-Density PUF Panels Waste Your Money ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                How Low-Density PUF Panels Waste Your Money
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  PUF panel density is the single most important — and most frequently manipulated — quality parameter
                  in insulated sandwich panels. Unlike visible defects such as dents or discoloration, <strong>density
                  is invisible to the naked eye</strong>. A panel manufactured at 32 kg/m³ looks identical to one at
                  40 kg/m³. The difference only becomes apparent months later when energy bills spike, condensation
                  appears on interior surfaces, and panels begin to sag under their own weight.
                </p>
                <p>
                  This is the core problem: unscrupulous manufacturers exploit the invisibility of density to cut costs.
                  By reducing foam density from 40 to 32 kg/m³, a manufacturer saves roughly 15-20% on raw material
                  costs. They pass this off as a &quot;competitive price&quot; to unsuspecting buyers. The buyer saves
                  a few hundred rupees per square metre upfront — then loses lakhs in energy costs, premature replacement,
                  and operational downtime over the panel&apos;s drastically shortened lifespan.
                </p>
                <p>
                  The physics is unforgiving. Low-density PUF develops an <strong>open-cell structure</strong> — air
                  pockets interconnect instead of remaining sealed. Open cells allow moisture ingress, destroy thermal
                  resistance, and accelerate foam degradation. What was sold as a 25-year insulation solution fails in
                  5-8 years. The cost of re-cladding an entire industrial shed or cold storage facility dwarfs the
                  initial &quot;savings.&quot;
                </p>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Low-Density Panels (&lt;36 kg/m³)</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Open-cell structure — air and moisture pass through the foam core</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Thermal conductivity rises to 0.030+ W/mK — 25% worse insulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Water absorption leads to mould growth, corrosion, and panel delamination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Compressive strength drops — panels sag on long roof spans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Service life collapses to 5-8 years instead of 25-30 years</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">Optimal Density (40 ± 2 kg/m³)</h3>
                  <ul className="space-y-3 text-emerald-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Over 90% closed-cell structure — sealed air pockets trap heat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Thermal conductivity at 0.024 W/mK — industry-best insulation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Zero water absorption — no condensation, no corrosion risk</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>High compressive strength — supports self-weight and live loads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Proven 25-30 year service life with minimal performance degradation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 3: Product Explanation — Density Science ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              The Science of PUF Panel Density — Why 40 kg/m³ Is the Gold Standard
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              Understanding the relationship between <strong>PUF foam density</strong>, cell structure, and thermal
              performance is essential for making an informed insulation decision. Here is the science behind the numbers.
            </p>
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 mb-12">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Closed-Cell vs Open-Cell Structure</h3>
                  <div className="prose prose-slate">
                    <p>
                      Polyurethane foam insulation works by trapping gas within millions of tiny cells. At 40 kg/m³
                      density, these cells form a <strong>closed-cell structure</strong> — each cell is completely
                      sealed, containing low-conductivity blowing gas that provides exceptional thermal resistance.
                      The cell walls are rigid and interconnected, creating a structurally sound matrix.
                    </p>
                    <p>
                      When density drops below 36 kg/m³, the chemical reaction produces insufficient material to form
                      complete cell walls. Cells rupture during foaming, creating an <strong>open-cell structure</strong>
                      where air freely circulates through the foam. Since air has significantly higher thermal conductivity
                      than the blowing gas, the insulation value drops dramatically. Open cells also act as capillary
                      pathways for moisture — once water enters, it accelerates thermal degradation and can cause
                      internal corrosion of the steel facings.
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">How Density Is Measured</h3>
                  <div className="prose prose-slate">
                    <p>
                      PUF panel density is measured per <strong>IS 3346</strong> (Indian Standard) and
                      <strong> ISO 845</strong> (International Standard). The process involves cutting a precisely
                      dimensioned sample from the panel core, weighing it on a calibrated balance, and calculating:
                    </p>
                    <p className="bg-white rounded-xl p-4 text-center font-mono text-lg border border-slate-200">
                      Density (kg/m³) = Mass (kg) / Volume (m³)
                    </p>
                    <p>
                      Critical considerations: samples must be taken from the panel core (not the face-adjacent
                      skin), at least 24 hours after manufacturing to allow complete curing, and from multiple
                      positions across the panel to verify consistency. Reputable manufacturers like PHOENIXX
                      conduct batch-wise density testing and provide certificates with every shipment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '🔬',
                    title: 'Cell Structure Analysis',
                    description: 'At 40 kg/m³, over 90% of cells are closed. This sealed structure is what delivers the 0.024 W/mK thermal conductivity. Each closed cell acts as a miniature insulation unit, trapping low-conductivity blowing gas indefinitely.',
                  },
                  {
                    icon: '🌡️',
                    title: 'Thermal Conductivity Factor',
                    description: 'The k-value (thermal conductivity) is the definitive measure of insulation performance. At 40 kg/m³: k = 0.024 W/mK. At 35 kg/m³: k = 0.028 W/mK. At 30 kg/m³: k = 0.032+ W/mK. Every 0.004 W/mK increase means roughly 15% more heat transfer.',
                  },
                  {
                    icon: '💧',
                    title: 'Moisture Resistance',
                    description: 'Closed-cell foam at 40 kg/m³ absorbs less than 2% water by volume (per IS 3346). Open-cell foam at 30-32 kg/m³ can absorb 15-30% water, which increases effective thermal conductivity by 30-50% and accelerates structural degradation.',
                  },
                  {
                    icon: '🏋️',
                    title: 'Compressive Strength',
                    description: 'Compressive strength at 40 kg/m³ exceeds 200 kPa — sufficient for roof panels spanning 5-6 metres. At 32 kg/m³, compressive strength drops below 130 kPa, causing panel sag under self-weight on longer spans.',
                  },
                  {
                    icon: '⏱️',
                    title: 'Dimensional Stability',
                    description: 'Properly densified foam maintains its dimensions under temperature cycling (-40°C to +80°C). Low-density foam shrinks over time as weak cell walls collapse, creating gaps at panel joints that become thermal bridges.',
                  },
                  {
                    icon: '🧪',
                    title: 'Ageing Performance',
                    description: 'Accelerated ageing tests (per EN 13165) show that 40 kg/m³ foam retains 92-95% of its initial thermal performance after 25 years. Foam at 32 kg/m³ loses 25-40% of performance within the first decade due to cell degradation.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 4: Benefits — Correct Density = Better Everything ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Benefits of Specifying the Correct 40 kg/m³ Density
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                When you specify and verify <strong>40 ± 2 kg/m³ density</strong> in your PUF panels, you unlock the
                full performance potential of polyurethane insulation. Here is what correct density delivers.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: '🌡️', title: 'Superior Thermal Insulation', description: 'Thermal conductivity of 0.024 W/mK — the lowest achievable with PUF. Reduces HVAC energy consumption by 30-40% compared to uninsulated or poorly insulated structures.' },
                  { icon: '📅', title: '25-30 Year Lifespan', description: 'Closed-cell foam retains 92-95% of initial R-value over 25 years. No need for re-cladding or insulation upgrades during the building\'s primary service life.' },
                  { icon: '💧', title: 'Zero Moisture Absorption', description: 'Less than 2% water absorption ensures no condensation damage, no mould growth, and no internal steel corrosion — even in humid coastal environments.' },
                  { icon: '🏗️', title: 'Structural Integrity', description: 'Compressive strength >200 kPa supports roof spans, foot traffic during maintenance, and equipment loads without panel deformation or sagging.' },
                  { icon: '💰', title: 'Lower Lifetime Cost', description: 'While premium 40 kg/m³ panels cost 10-15% more upfront, they save 3-5x that difference through reduced energy bills and eliminated replacement costs over 25 years.' },
                  { icon: '🌿', title: 'Environmental Performance', description: 'PHOENIXX 40 kg/m³ panels are CFC/HFC-free with zero ODP. Reduced energy consumption means lower carbon emissions throughout the building\'s lifecycle.' },
                  { icon: '🛡️', title: 'Standards Compliance', description: 'Meets IS 14925, IS 3346, ISO 845, and EN 13165 requirements. Essential for statutory approvals, insurance compliance, and FM-rated facilities.' },
                  { icon: '📊', title: 'Predictable Performance', description: 'Consistent density means predictable thermal calculations. Architects and MEP engineers can design HVAC systems with confidence — no safety margins needed for quality uncertainty.' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="mt-3 text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 5: Projects ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Where 40 kg/m³ Density Made the Difference — Project Portfolio
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              These projects demanded verified <strong>40 kg/m³ PUF panel density</strong> for thermal performance
              guarantees. PHOENIXX delivered — with density certificates for every batch.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Agro Tech Foods, Ankleshwar',
                  industry: 'Food Processing',
                  description: 'Supplied 80mm PUF insulated panels at verified 40 kg/m³ density for a food processing and storage facility. Consistent density across 4,500+ sq.m ensured uniform thermal performance with zero condensation — critical for food safety compliance and FSSAI requirements.',
                  tag: 'Food Processing',
                  link: '/resources/project-gallery',
                },
                {
                  name: 'Cargill India, Gandhidham',
                  industry: 'Agri-Business',
                  description: 'Delivered high-performance 100mm cold storage panels for one of the world\'s largest agricultural commodity processors. Density verification at 40 ± 1 kg/m³ ensured the cold chain integrity required for perishable commodity storage in Gujarat\'s extreme summer temperatures.',
                  tag: 'Cold Storage',
                  link: '/resources/project-gallery',
                },
                {
                  name: 'SKF India, Ahmedabad',
                  industry: 'Manufacturing',
                  description: 'Precision manufacturing facility requiring strict temperature control for bearing production. 60mm PUF roof and wall panels at guaranteed 40 kg/m³ density provided the thermal envelope necessary to maintain ±2°C temperature consistency across the 8,000 sq.m shop floor.',
                  tag: 'Industrial',
                  link: '/resources/project-gallery',
                },
                {
                  name: 'Edkem Pharma, Ahmedabad',
                  industry: 'Pharmaceutical',
                  description: 'GMP-compliant cleanroom PUF panels for pharmaceutical API manufacturing. Density control at 40 kg/m³ was critical to prevent moisture migration through the panel core — any condensation in a cleanroom compromises the entire sterile environment and batch integrity.',
                  tag: 'Pharma',
                  link: '/resources/project-gallery/edkem-pharma-ahmedabad',
                },
              ].map((project, idx) => (
                <Link
                  key={idx}
                  href={project.link}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 mb-4">
                    {project.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-slate-600">{project.description}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-primary">
                    View Project Details &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Section 6: Density vs Performance Table + Compliance ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF Panel Density vs Performance — Complete Data Table
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              This table presents the relationship between <strong>PUF panel density</strong> and key performance
              parameters. Data is based on IS 3346, ISO 845, and PHOENIXX internal quality laboratory testing.
            </p>
            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm mb-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-5 py-4 font-semibold">Density (kg/m³)</th>
                        <th className="px-5 py-4 font-semibold">Thermal Conductivity (W/mK)</th>
                        <th className="px-5 py-4 font-semibold">Closed-Cell %</th>
                        <th className="px-5 py-4 font-semibold">Water Absorption</th>
                        <th className="px-5 py-4 font-semibold">Compressive Strength</th>
                        <th className="px-5 py-4 font-semibold">Service Life</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        { density: '30 kg/m³', conductivity: '0.032+ W/mK', cells: '<70%', water: '15-30%', strength: '<100 kPa', life: '3-5 years', highlight: 'red' },
                        { density: '32 kg/m³', conductivity: '0.030 W/mK', cells: '70-75%', water: '10-20%', strength: '100-130 kPa', life: '5-8 years', highlight: 'red' },
                        { density: '36 kg/m³', conductivity: '0.027 W/mK', cells: '80-85%', water: '5-10%', strength: '150-170 kPa', life: '10-15 years', highlight: 'yellow' },
                        { density: '38 kg/m³', conductivity: '0.025 W/mK', cells: '85-88%', water: '3-5%', strength: '170-190 kPa', life: '15-20 years', highlight: 'yellow' },
                        { density: '40 kg/m³ ★', conductivity: '0.024 W/mK', cells: '>90%', water: '<2%', strength: '>200 kPa', life: '25-30 years', highlight: 'green' },
                        { density: '42 kg/m³', conductivity: '0.023 W/mK', cells: '>92%', water: '<2%', strength: '>210 kPa', life: '25-30 years', highlight: 'green' },
                        { density: '45 kg/m³', conductivity: '0.023 W/mK', cells: '>93%', water: '<1.5%', strength: '>230 kPa', life: '25-30 years', highlight: 'blue' },
                      ].map((row, idx) => (
                        <tr
                          key={idx}
                          className={
                            row.highlight === 'green'
                              ? 'bg-emerald-50 font-semibold'
                              : row.highlight === 'red'
                              ? 'bg-red-50'
                              : row.highlight === 'yellow'
                              ? 'bg-amber-50'
                              : 'bg-blue-50'
                          }
                        >
                          <td className="px-5 py-4 text-slate-900">{row.density}</td>
                          <td className="px-5 py-4 text-slate-700">{row.conductivity}</td>
                          <td className="px-5 py-4 text-slate-700">{row.cells}</td>
                          <td className="px-5 py-4 text-slate-700">{row.water}</td>
                          <td className="px-5 py-4 text-slate-700">{row.strength}</td>
                          <td className="px-5 py-4 text-slate-700">{row.life}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
                <p className="text-emerald-800 font-medium text-center">
                  ★ <strong>40 kg/m³ is the sweet spot</strong> — it delivers 90%+ closed cells and 0.024 W/mK
                  conductivity at the optimal cost-to-performance ratio. Going to 45 kg/m³ adds 12-15% to panel cost
                  while improving conductivity by only 0.001 W/mK.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Compliance Standards</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li><strong>IS 3346:2017</strong> — Rigid cellular polyurethane thermal insulation</li>
                    <li><strong>IS 14925:2015</strong> — Metal insulated sandwich panel specification</li>
                    <li><strong>ISO 845</strong> — Cellular plastics density determination</li>
                    <li><strong>EN 13165</strong> — Thermal insulation products for buildings</li>
                    <li><strong>FM 4882 / 4880</strong> — Factory Mutual approved insulated panels</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">PHOENIXX Quality Protocol</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>Batch-wise density testing on continuous lamination line</li>
                    <li>Core samples tested within 24 hours of production</li>
                    <li>Density certificate included with every shipment</li>
                    <li>Third-party NABL laboratory verification on request</li>
                    <li>Digital QC reports accessible via project portal</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Downloads & Resources</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/get-a-quote" className="text-primary hover:underline">
                        Request Density Test Report Sample &rarr;
                      </Link>
                    </li>
                    <li>
                      <Link href="/resources/blogs/what-is-puf-panel-how-does-it-work" className="text-primary hover:underline">
                        What Is a PUF Panel — Complete Guide &rarr;
                      </Link>
                    </li>
                    <li>
                      <Link href="/best-puf-panel-thickness-for-roofing" className="text-primary hover:underline">
                        Best PUF Panel Thickness for Roofing &rarr;
                      </Link>
                    </li>
                    <li>
                      <Link href="/best-quality-sandwich-puf-panel" className="text-primary hover:underline">
                        Best Quality Sandwich PUF Panel Guide &rarr;
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 7: Pricing — Premium vs Low-Density Comparison ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Pricing: Premium 40 kg/m³ vs Cheap Low-Density Panels
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                The &quot;cheap&quot; PUF panel is the most expensive decision you can make. Here is the true
                cost comparison over a 25-year building lifecycle for a 5,000 sq.m industrial facility.
              </p>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm mb-8">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 bg-red-50 border-r border-red-100">
                    <h3 className="text-xl font-bold text-red-800 mb-2">Low-Density Panel (32-35 kg/m³)</h3>
                    <p className="text-sm text-red-600 mb-6">&quot;Budget&quot; option from unverified suppliers</p>
                    <ul className="space-y-3 text-red-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Panel cost: ₹650-₹750/sq.m (looks cheaper)</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Energy loss: 25-40% higher cooling/heating costs</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Replacement needed in 5-8 years (₹35-50 lakh)</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> No density certificate or quality assurance</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Condensation damage to stored goods/equipment</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> <strong>25-year total cost: ₹1.2-1.5 Cr+</strong></li>
                    </ul>
                  </div>
                  <div className="p-8 bg-emerald-50">
                    <h3 className="text-xl font-bold text-emerald-800 mb-2">PHOENIXX 40 kg/m³ Panel</h3>
                    <p className="text-sm text-emerald-600 mb-6">Premium quality with guaranteed density</p>
                    <ul className="space-y-3 text-emerald-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> Panel cost: ₹800-₹2,500/sq.m (10-15% more upfront)</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> Energy savings: 30-40% lower HVAC operating costs</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> No replacement for 25-30 years — install once</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> Density certificate with every shipment</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> Zero condensation — product and equipment protected</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> <strong>25-year total cost: ₹55-70 lakh (3-5x savings)</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-700 text-white">
                      <th className="px-6 py-4 text-left font-semibold">PHOENIXX Panel Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Density</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range (per sq.m)</th>
                      <th className="px-6 py-4 text-left font-semibold">Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { type: 'PUF Wall Panel 30-50mm', density: '40 ± 2 kg/m³', range: '₹800 – ₹1,200', app: 'Standard wall insulation' },
                      { type: 'PUF Wall Panel 60-100mm', density: '40 ± 2 kg/m³', range: '₹1,200 – ₹1,800', app: 'Enhanced thermal, industrial' },
                      { type: 'PUF Cold Storage 100-150mm', density: '40 ± 2 kg/m³', range: '₹1,800 – ₹2,500', app: 'Cold storage, freezer rooms' },
                      { type: 'PUF Roofing Panel', density: '40 ± 2 kg/m³', range: '₹900 – ₹1,500', app: 'Industrial roofing' },
                      { type: 'PIR / FM Approved Panel', density: '40 ± 2 kg/m³', range: '₹1,400 – ₹2,500', app: 'Fire-rated applications' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 font-medium text-slate-900">{row.type}</td>
                        <td className="px-6 py-4 text-emerald-700 font-semibold">{row.density}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-700">{row.range}</td>
                        <td className="px-6 py-4 text-slate-600">{row.app}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-slate-500 text-center">
                All PHOENIXX panels are manufactured at guaranteed 40 ± 2 kg/m³ density. Prices vary by thickness,
                coating type (SMP/SDP/PVDF), order volume, and delivery location. Contact our sales team for
                project-specific quotations.
              </p>
              <div className="mt-8 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Custom Pricing — 40 kg/m³ Guaranteed
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 8: FAQ ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions — PUF Panel Density for Insulation
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              Expert answers to the most common questions about <strong>PUF panel density</strong>, testing methods,
              and how density affects insulation performance.
            </p>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 faq-answer">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Cross-Links ===== */}
        <section className="py-10 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Related Guides</h3>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/best-puf-panel-thickness-for-roofing"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Best PUF Panel Thickness for Roofing
                </Link>
                <Link
                  href="/best-quality-sandwich-puf-panel"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Best Quality Sandwich PUF Panel
                </Link>
                <Link
                  href="/resources/blogs/what-is-puf-panel-how-does-it-work"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  What Is PUF Panel — How Does It Work?
                </Link>
                <Link
                  href="/best-puf-panel-brand-in-india"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Best PUF Panel Brand in India
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 9: Conversion Footer ===== */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-700 via-green-700 to-teal-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Insist on 40 kg/m³ — Insist on PHOENIXX SMARTBUILD
            </h2>
            <p className="text-xl text-emerald-100 mb-4 max-w-2xl mx-auto">
              Every PHOENIXX PUF panel ships with a density certificate. No guesswork, no hidden shortcuts —
              just verified 40 ± 2 kg/m³ density that delivers the insulation performance your project demands.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 mb-10 text-sm text-emerald-200">
              <span>40 kg/m³ Guaranteed</span>
              <span className="hidden md:inline">|</span>
              <span>Density Certificate Included</span>
              <span className="hidden md:inline">|</span>
              <span>ISO 9001:2015</span>
              <span className="hidden md:inline">|</span>
              <span>IS 14925 Compliant</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote with Density Guarantee
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Insulation Engineer
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%2C%20I%20need%2040%20kg/m³%20PUF%20panels%20for%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-white shadow-lg hover:bg-green-600 transition-all"
              >
                WhatsApp Us
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto text-sm text-emerald-100">
              <div>
                <div className="font-semibold text-white">Call Us</div>
                <a href="tel:+919328915237" className="hover:text-white transition-colors">+91 93289 15237</a>
              </div>
              <div>
                <div className="font-semibold text-white">Email</div>
                <a href="mailto:sales@phoenixxsmartbuild.com" className="hover:text-white transition-colors">sales@phoenixxsmartbuild.com</a>
              </div>
              <div>
                <div className="font-semibold text-white">Factory</div>
                <span>Ahmedabad, Gujarat, India</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
