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
  title: 'Which Insulated Panel Is Best for Warehouse? — Complete Guide 2026',
  description:
    'Find the best insulated panel for warehouse construction. PUF panels cut energy costs 25-30%, reduce structural steel by 30-40%, and cover large spans. ISO certified manufacturer in India. Free quote.',
  keywords: [
    'best insulated panel for warehouse',
    'warehouse wall panel',
    'warehouse roof insulation panel',
    'insulated warehouse construction',
    'PUF panel for warehouse India',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/best-insulated-panel-for-warehouse',
  },
  openGraph: {
    title: 'Which Insulated Panel Is Best for Warehouse? — Complete Guide 2026',
    description:
      'PUF insulated panels for warehouse walls & roofs. 25-30% energy savings, 40-60% faster build, large-span coverage with reduced structural steel.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-insulated-panel-for-warehouse',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'What type of insulated panel is best for warehouse walls?',
    answer:
      'Sandwich PUF panels with 50mm thickness are the most popular choice for warehouse walls. They provide adequate thermal insulation (R-value 2.08), lightweight construction (8-12 kg/m²), and clean industrial aesthetics. For temperature-sensitive warehousing, increase to 80-100mm.',
  },
  {
    question: 'What insulated panel is best for warehouse roofing?',
    answer:
      'Roofing PUF panels with trapezoidal profiles in 50-80mm thickness offer the best combination of structural spanning (3-4m between purlins), thermal insulation, and water drainage. This can reduce structural steel requirements by up to 40%.',
  },
  {
    question: 'How much do insulated panels reduce warehouse energy costs?',
    answer:
      'PUF insulated panels reduce HVAC energy consumption by 25-30% compared to bare metal sheet warehouses. For a 5,000 sq.m warehouse, this translates to annual savings of ₹3-5 lakh on electricity bills, with panel investment payback in 3-4 years.',
  },
  {
    question: 'Can insulated panels support skylights in warehouse roofing?',
    answer:
      'Yes. Skylights and translucent panels can be seamlessly integrated into PUF roofing systems, providing natural daylight and reducing lighting energy costs by 40-50% during daytime operations. PHOENIXX designs roofing layouts with optimal skylight positioning.',
  },
  {
    question: 'What is the cost of insulating a warehouse with PUF panels?',
    answer:
      'For a typical 2,000-5,000 sq.m warehouse: wall panels cost ₹16-50 lakh and roofing panels cost ₹18-55 lakh, depending on thickness and specifications. Turnkey warehouse construction with PEB structure and PUF panels ranges from ₹1,500-₹2,500 per sq.ft.',
  },
  {
    question: 'How long does it take to install PUF panels on a warehouse?',
    answer:
      'PHOENIXX installation teams complete panel cladding for a 3,000 sq.m warehouse in 15-25 days, which is 40-60% faster than conventional construction. Panels arrive pre-fabricated, requiring minimal on-site processing.',
  },
];

const howToSteps = [
  {
    name: 'Define Warehouse Function',
    text: 'Identify whether the warehouse will serve general storage, cold chain operations, e-commerce fulfilment, or food-grade warehousing. Each function dictates different insulation, hygiene, and temperature requirements.',
  },
  {
    name: 'Calculate Wall & Roof Area',
    text: 'Measure total wall cladding area and roof area separately. Walls and roofs use different panel profiles and may require different thicknesses — accurate area calculations prevent material waste and budget surprises.',
  },
  {
    name: 'Select Panel Thickness',
    text: 'Choose 50mm for general warehouses, 80mm for temperature-sensitive storage, and 100-150mm for cold chain or chilled warehousing. Thicker panels cost more upfront but deliver faster energy-cost payback.',
  },
  {
    name: 'Choose Profile Type',
    text: 'Flat or micro-ribbed profiles for wall panels provide clean vertical aesthetics. Trapezoidal profiles for roofing panels ensure water drainage and structural spanning of 3-4 metres between purlins.',
  },
  {
    name: 'Plan Accessories',
    text: 'Specify skylights for natural daylight (reduces lighting costs 40-50%), ridge ventilators for air circulation, dock-leveller openings, personnel doors, and gutter systems for rainwater management.',
  },
  {
    name: 'Get Turnkey Estimate',
    text: 'Request a comprehensive quote covering PEB structure, PUF panels (wall + roof), accessories, and installation. PHOENIXX provides turnkey warehouse construction from ₹1,500-₹2,500 per sq.ft.',
  },
];

const projects = [
  {
    name: 'UFlex Limited — Sanand',
    location: 'Sanand, Gujarat',
    industry: 'Packaging & Warehousing',
    scope: '8,500 sq.m warehouse and distribution centre',
    products: 'Wall PUF 50mm + Roofing PUF 60mm (SMP coating)',
    outcome: 'Completed cladding in 18 days. Maintained ±2°C temperature stability for packaging material storage.',
  },
  {
    name: 'Reliance Industries — Jamnagar',
    location: 'Jamnagar, Gujarat',
    industry: 'Petrochemicals & Logistics',
    scope: '12,000 sq.m warehouse complex with multiple bays',
    products: 'Wall PUF 50mm + Roofing PUF 80mm (PVDF coating)',
    outcome: 'Achieved 28% HVAC cost reduction in coastal climate. Zero moisture ingress across two monsoon seasons.',
  },
  {
    name: 'Agrawal Metal Works — Vithlapur',
    location: 'Vithlapur, Gujarat',
    industry: 'Metal Fabrication & Storage',
    scope: '3,200 sq.m finished goods warehouse',
    products: 'Wall PUF 50mm + Standing Seam Roofing PUF 50mm',
    outcome: 'Leak-proof standing seam roofing eliminated product damage from monsoon exposure. 35% steel savings on secondary structure.',
  },
  {
    name: 'Rajhans Nutriments — Surat',
    location: 'Surat, Gujarat',
    industry: 'Food Processing & Cold Chain',
    scope: '4,800 sq.m food-grade warehouse with temperature zones',
    products: 'Wall PUF 80mm + Roofing PUF 100mm (SMP coating)',
    outcome: 'Met FSSAI-compliant temperature standards. Integrated skylights reduced daytime lighting costs by 45%.',
  },
];

const pageUrl = 'https://phoenixxsmartbuild.com/best-insulated-panel-for-warehouse';

export default function BestInsulatedPanelForWarehousePage() {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateServiceSchema(
      'Insulated Panels for Warehouse Construction',
      'Premium PUF insulated sandwich panels for warehouse walls and roofing. PHOENIXX SMARTBUILD delivers turnkey warehouse cladding with thermal conductivity of 0.024 W/mK, 25-30% energy savings, and 40-60% faster construction. Available in 30-150mm thickness with PEB structure integration.',
      pageUrl
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Products', url: '/products' },
      { name: 'Best Insulated Panel for Warehouse', url: '/best-insulated-panel-for-warehouse' },
    ]),
    generateHowToSchema(
      'How to Choose the Best Insulated Panel for Warehouse Construction',
      'Step-by-step guide to selecting the right insulated panel type, thickness, and profile for warehouse walls and roofing in India.',
      howToSteps
    ),
    generateArticleSchema({
      title: 'Which Insulated Panel Is Best for Warehouse? — Complete Guide 2026',
      description:
        'Comprehensive guide to choosing the best insulated panel for warehouse construction. Compare wall vs roof panels, PUF thickness options, PEB integration, costs, and real project case studies.',
      url: pageUrl,
      image: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
      datePublished: '2026-02-01',
      dateModified: '2026-02-18',
      author: { name: 'PHOENIXX SMARTBUILD Engineering Team', url: 'https://phoenixxsmartbuild.com/about' },
    }),
    generateOfferSchema({
      name: 'Warehouse Insulated PUF Panels',
      description: 'PUF insulated sandwich panels for warehouse wall and roofing applications — flat, micro-ribbed, and trapezoidal profiles.',
      priceCurrency: 'INR',
      lowPrice: 800,
      highPrice: 2200,
      priceRange: '₹800-₹2,200 per sq.m',
      url: pageUrl,
    }),
    generateSpeakableSchema(['h1', '.ai-summary', '.faq-answer']),
    generateQAPageSchema('Which insulated panel is best for warehouse?', [
      {
        text: 'PUF (Polyurethane Foam) sandwich panels are the optimal insulated panel for warehouse construction. With thermal conductivity of 0.024 W/mK and density of 40 kg/m³, they deliver the highest insulation value per millimetre of any commercial building panel. For warehouse walls, 50mm flat-profile PUF panels provide clean aesthetics and R-value 2.08. For roofing, 50-80mm trapezoidal PUF panels span 3-4 metres between purlins, reducing structural steel by up to 40%. Combined with PEB structures, PUF panels enable turnkey warehouse construction that is 40-60% faster than conventional methods.',
        author: 'PHOENIXX SMARTBUILD Engineering Team',
      },
    ]),
    generateImageObjectSchema({
      name: 'PUF Insulated Panel Warehouse Installation',
      description: 'PHOENIXX PUF insulated sandwich panels installed on a large-span warehouse showing wall and roofing integration.',
      contentUrl: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
      width: 1200,
      height: 630,
    }),
    generateVideoSchema({
      name: 'PHOENIXX Warehouse PUF Panel Installation',
      description:
        'Watch a complete warehouse insulated panel installation by PHOENIXX SMARTBUILD — from PEB erection to final PUF panel cladding on a 5,000 sq.m logistics warehouse.',
      thumbnailUrl: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
      uploadDate: '2025-06-01',
      duration: 'PT7M20S',
    }),
  ];

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'PHOENIXX Warehouse Insulated PUF Panels',
    description:
      'Premium PUF insulated sandwich panels for warehouse wall and roofing applications. Available in flat, micro-ribbed, and trapezoidal profiles with 30-150mm thickness.',
    brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
    manufacturer: {
      '@type': 'Organization',
      name: 'NXT PHOENIXX SMARTBUILD LLP',
      address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressRegion: 'Gujarat', addressCountry: 'IN' },
    },
    image: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '214',
      bestRating: '5',
      worstRating: '1',
    },
    review: {
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Organization', name: 'Verified Warehouse Client' },
      reviewBody: 'Outstanding quality PUF panels for our 6,000 sq.m warehouse project. On-time delivery, professional installation, and noticeable temperature improvement from day one.',
    },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '800',
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

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1 — Trust-First Hero
        ═══════════════════════════════════════════════════════════ */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp')] bg-cover bg-center opacity-15" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent" />
          <div className="container-custom relative">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/products" className="hover:text-white transition-colors">Products</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-emerald-400 font-medium">Best Insulated Panel for Warehouse</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-400">
                  Warehouse Construction Specialists
                </span>
                <span className="inline-block rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-sm font-medium text-blue-400">
                  500+ Projects Delivered
                </span>
                <span className="inline-block rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-2 text-sm font-medium text-amber-400">
                  40-60% Faster Build
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Which Insulated Panel Is Best for Warehouse? — Complete Guide 2026
              </h1>

              <p className="ai-summary mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
                Building or upgrading a warehouse? The insulated panel you choose determines your energy
                costs for the next 25 years, your construction timeline, your structural steel budget,
                and the working conditions inside your facility. This guide — written by engineers who
                have delivered 500+ warehouse projects across India — covers everything you need to know
                about selecting the right insulated panel for warehouse walls, roofing, and complete
                building envelopes.
              </p>

              <p className="mt-4 text-sm text-slate-400">
                📍 Manufacturer in Ahmedabad, Gujarat | Pan-India Delivery &amp; Installation
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Get Free Warehouse Quote
                </Link>
                <a
                  href="tel:+918866556879"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  📞 Call Now — +91 88665 56879
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2 — Problem Statement
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Your Warehouse Design Is Costing More Than It Should
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Warehouses are deceptively simple structures — large open spans, tall walls, expansive roofs.
                  But that simplicity hides enormous inefficiency when conventional construction methods are
                  used. Across India, thousands of warehouses operate with bare metal sheets, brick walls, and
                  no integrated insulation — bleeding money through four critical failure points that compound
                  every single year of operation.
                </p>

                <ul className="space-y-3">
                  <li>
                    <strong>Excess Structural Steel:</strong> Traditional roofing systems with single-skin
                    metal sheets require closely spaced purlins (1.2-1.5m apart), driving up structural steel
                    tonnage by 30-40% compared to self-spanning insulated panel systems. For a 5,000 sq.m
                    warehouse, this excess steel alone can add ₹15-25 lakh to your construction budget.
                  </li>
                  <li>
                    <strong>Runaway Energy Costs:</strong> Uninsulated warehouses in tropical India experience
                    indoor temperatures of 45-50°C during summer. Cooling these spaces — or even maintaining
                    basic worker comfort — requires HVAC systems running at full capacity. Annual energy bills
                    for a mid-sized warehouse routinely exceed ₹6-10 lakh, with 25-30% of that spend directly
                    attributable to poor envelope insulation.
                  </li>
                  <li>
                    <strong>Slow Construction Timelines:</strong> Conventional brick-and-mortar warehouse walls
                    take 8-12 weeks to complete. Add separate insulation, waterproofing, and cladding layers,
                    and you lose months of productive warehouse time. Every week of construction delay costs the
                    business in lost revenue and increased project financing charges.
                  </li>
                  <li>
                    <strong>Poor Working Environment:</strong> Heat stress, condensation drips, rain noise
                    exceeding 80 dB, and moisture-driven corrosion create an environment that reduces worker
                    productivity, increases accident risk, damages stored inventory, and accelerates structural
                    deterioration.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  The Solution: Insulated PUF Sandwich Panels
                </h3>

                <p>
                  PUF (Polyurethane Foam) insulated sandwich panels address every one of these problems in a
                  single engineered building component. A rigid closed-cell PUF core bonded between two
                  pre-painted steel skins delivers thermal insulation, structural spanning, weather protection,
                  and acoustic dampening — all without secondary layers, separate waterproofing, or additional
                  cladding. When combined with a{' '}
                  <Link href="/solutions/peb" className="text-primary hover:underline">
                    Pre-Engineered Building (PEB) structure
                  </Link>
                  , PUF panels enable warehouse construction that is 40-60% faster, 25-30% more energy-efficient,
                  and 30-40% lighter on structural steel than conventional approaches.
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
                Understanding Insulated Panels for Warehouse Applications
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Warehouse construction demands two distinct panel types — wall panels and roofing panels —
                  each engineered for different structural and environmental loads. Choosing the wrong profile
                  or thickness for either application can undermine the entire building envelope. Here&apos;s how
                  they differ and which configurations work best for each warehouse type.
                </p>

                <h3>Wall Panels: Flat &amp; Micro-Ribbed Profiles</h3>
                <p>
                  <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">
                    Sandwich PUF wall panels
                  </Link>{' '}
                  use flat or micro-ribbed steel facings for clean vertical installation. At 50mm thickness,
                  they deliver an R-value of 2.08 m²K/W — sufficient for most general warehousing in Indian
                  climates. The panels weigh just 8-12 kg/m², making them easy to handle and fast to install
                  even on tall warehouse walls up to 12-15 metres. Tongue-and-groove joints create an airtight,
                  moisture-proof barrier that eliminates the need for separate waterproofing membranes.
                </p>

                <h3>Roofing Panels: Trapezoidal Profiles</h3>
                <p>
                  <Link href="/products/sandwich-panels/roofing-puf-panel" className="text-primary hover:underline">
                    Roofing PUF panels
                  </Link>{' '}
                  feature trapezoidal outer profiles engineered for water drainage and structural load-bearing.
                  In 50-80mm thickness, they span 3-4 metres between purlins — meaning fewer purlins, less
                  structural steel, and faster roof installation. For warehouses in high-rainfall zones, the
                  interlocking joint system prevents water ingress even during sustained heavy monsoon
                  downpours. Skylights and polycarbonate translucent panels integrate directly into the roofing
                  grid, bringing natural daylight into the warehouse floor without compromising weatherproofing.
                </p>
              </div>
            </div>

            {/* Warehouse Types */}
            <div className="mt-14 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Panel Configurations by Warehouse Type
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    icon: '📦',
                    title: 'General Storage',
                    wall: '50mm PUF Wall',
                    roof: '50mm PUF Roof',
                    desc: 'Dry goods, finished products, raw material warehousing with standard environmental protection.',
                  },
                  {
                    icon: '❄️',
                    title: 'Temperature-Controlled',
                    wall: '80-100mm PUF Wall',
                    roof: '80-100mm PUF Roof',
                    desc: 'FMCG, pharma, chemicals — maintaining 15-25°C year-round for product integrity.',
                  },
                  {
                    icon: '🛒',
                    title: 'E-Commerce Fulfilment',
                    wall: '50mm PUF Wall',
                    roof: '60mm PUF Roof + Skylights',
                    desc: 'High-throughput centres with dock levellers, mezzanines, and daylight integration.',
                  },
                  {
                    icon: '🍱',
                    title: 'Food-Grade',
                    wall: '80-100mm PUF Wall',
                    roof: '100mm PUF Roof',
                    desc: 'FSSAI-compliant warehousing with hygienic finishes, pest-proof joints, and cold zones.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
                    <div className="mt-4 space-y-1 text-xs">
                      <span className="block rounded-full bg-blue-50 px-3 py-1 text-blue-700 font-medium">{item.wall}</span>
                      <span className="block rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">{item.roof}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PUF vs Alternatives */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                PUF Panels vs Other Insulation Options for Warehouses
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-900 text-white text-left">
                        <th className="px-6 py-3 font-semibold">Parameter</th>
                        <th className="px-6 py-3 font-semibold">PUF Panel</th>
                        <th className="px-6 py-3 font-semibold">Rockwool Panel</th>
                        <th className="px-6 py-3 font-semibold">EPS Panel</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['Thermal Conductivity', '0.024 W/mK', '0.040 W/mK', '0.035 W/mK'],
                        ['Weight (50mm)', '8-12 kg/m²', '18-22 kg/m²', '7-10 kg/m²'],
                        ['Fire Rating', 'B1-B3 (PIR option)', 'A1 Non-combustible', 'B3 (flammable)'],
                        ['Water Absorption', '< 1.5%', '< 3%', '2-5%'],
                        ['Cost (relative)', 'Moderate', 'Higher (+20-30%)', 'Lower (-15-20%)'],
                        ['Best For Warehouse', '✅ Recommended', 'Fire-critical areas', 'Budget partitions'],
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-3 font-medium text-slate-800">{row[0]}</td>
                          <td className="px-6 py-3 text-emerald-700 font-medium">{row[1]}</td>
                          <td className="px-6 py-3 text-slate-600">{row[2]}</td>
                          <td className="px-6 py-3 text-slate-600">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">
                Need a detailed comparison?{' '}
                <Link href="/puf-panel-vs-rockwool-panel" className="text-primary hover:underline font-medium">
                  PUF Panel vs Rockwool Panel — Full Analysis →
                </Link>
              </p>
            </div>

            {/* PEB Integration */}
            <div className="mt-14 max-w-4xl mx-auto bg-blue-50 border border-blue-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                PEB + PUF Panel: The Modern Warehouse Formula
              </h3>
              <p className="text-slate-700 leading-relaxed">
                The most efficient warehouse construction in India today combines a{' '}
                <Link href="/solutions/peb" className="text-primary hover:underline font-medium">
                  Pre-Engineered Building (PEB) steel structure
                </Link>{' '}
                with PUF insulated panel cladding. The PEB frame provides column-free spans up to 90 metres —
                ideal for warehouse racking layouts — while PUF panels form the complete thermal envelope. This
                combination eliminates brick walls, separate insulation, and waterproofing layers, reducing total
                construction time by 40-60% and structural weight by 30-40% compared to conventional RCC framed
                warehouses. PHOENIXX delivers both PEB structures and PUF panels as a turnkey solution.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                8 Measurable Benefits of PUF Panels for Warehouse Construction
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Every benefit below is backed by real project data from PHOENIXX warehouse installations
                across India.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: '40-60% Faster Construction',
                    desc: 'Pre-fabricated PUF panels install directly onto the PEB frame — no bricklaying, no plastering, no curing time. A 5,000 sq.m warehouse envelope completes in 20-30 days versus 10-16 weeks for conventional construction.',
                  },
                  {
                    num: '02',
                    title: '25-30% Energy Savings',
                    desc: 'PUF insulation blocks 97% of thermal transfer through walls and roof. For a 5,000 sq.m warehouse, this reduces annual HVAC costs by ₹3-5 lakh. Over 25 years, cumulative savings exceed ₹75 lakh.',
                  },
                  {
                    num: '03',
                    title: '30-40% Less Structural Steel',
                    desc: 'Roofing PUF panels span 3-4m between purlins — twice the span of single-skin sheets. Fewer purlins and girts mean 30-40% less secondary steel, directly reducing material cost and foundation loading.',
                  },
                  {
                    num: '04',
                    title: 'Natural Lighting Integration',
                    desc: 'Skylights and translucent panels integrate seamlessly into PUF roofing layouts, bringing natural daylight to the warehouse floor and reducing artificial lighting costs by 40-50% during daytime.',
                  },
                  {
                    num: '05',
                    title: '25-30 Year Service Life',
                    desc: 'Pre-painted steel with SMP or PVDF coatings resists UV degradation and corrosion. The closed-cell PUF core maintains insulation properties without sagging, settling, or moisture degradation.',
                  },
                  {
                    num: '06',
                    title: 'Modular Expansion Ready',
                    desc: 'Warehouse expansion is as simple as extending the PEB frame and adding more panels. No demolition, no wet work — just bolt on additional bays and clad with matching PUF panels.',
                  },
                  {
                    num: '07',
                    title: 'Better Working Environment',
                    desc: 'Interior temperatures stay 8-12°C cooler than uninsulated warehouses. Noise reduction of 25-30 dB makes communication easier. Zero condensation protects inventory and prevents slip hazards.',
                  },
                  {
                    num: '08',
                    title: 'Faster Return on Investment',
                    desc: 'Lower construction cost + energy savings + reduced maintenance = full panel investment payback in 3-4 years. After payback, every year of savings flows directly to the bottom line.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-5 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-3xl font-black text-emerald-500/30 shrink-0">{item.num}</span>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-1 text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Before vs After */}
              <div className="mt-14 grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-red-700 mb-4">❌ Conventional Warehouse</h4>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li>• Construction time: 10-16 weeks for enclosure</li>
                    <li>• No built-in insulation — indoor temp 45-50°C</li>
                    <li>• High energy bills: ₹6-10 lakh/year HVAC</li>
                    <li>• Heavy steel requirement with close purlin spacing</li>
                    <li>• Condensation, corrosion &amp; monsoon leakage risks</li>
                    <li>• 80+ dB rain noise on bare metal sheets</li>
                    <li>• Expansion requires partial demolition</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-emerald-700 mb-4">✅ PUF Panel Warehouse</h4>
                  <ul className="space-y-3 text-slate-700 text-sm">
                    <li>• Construction time: 20-30 days (40-60% faster)</li>
                    <li>• Built-in insulation — 8-12°C cooler interiors</li>
                    <li>• 25-30% lower energy costs annually</li>
                    <li>• 30-40% less structural steel (3-4m span)</li>
                    <li>• Zero water absorption, leak-proof joints</li>
                    <li>• 25-30 dB noise reduction</li>
                    <li>• Modular bolt-on expansion anytime</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8 text-slate-600">
                Looking for panel guidance for factory sheds specifically?{' '}
                <Link
                  href="/best-puf-panel-for-industrial-shed"
                  className="text-primary hover:underline font-medium"
                >
                  Best PUF Panel for Industrial Shed →
                </Link>
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
              Warehouse Projects Delivered by PHOENIXX
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              From Fortune 500 logistics hubs to regional food storage facilities — each warehouse
              engineered for the client&apos;s specific operational requirements.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold text-slate-900">{project.name}</h3>
                  <p className="text-sm text-slate-500 mt-1">{project.location}</p>
                  <div className="mt-4 space-y-2 text-sm">
                    <p>
                      <span className="font-semibold text-slate-700">Industry:</span>{' '}
                      {project.industry}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Scope:</span>{' '}
                      {project.scope}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-700">Products:</span>{' '}
                      {project.products}
                    </p>
                    <p className="text-emerald-700 font-medium mt-3">✓ {project.outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-center text-sm text-slate-500">
              Engineered by PHOENIXX Technical Team | 13+ Years Warehouse Construction Experience
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6 — Technical Specifications
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Warehouse PUF Panel — Technical Specifications
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Combined wall and roof panel specifications for architects, structural consultants, and
              warehouse developers.
            </p>

            <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl overflow-hidden border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Specification</th>
                    <th className="px-6 py-4 text-left font-semibold">Wall Panels</th>
                    <th className="px-6 py-4 text-left font-semibold">Roofing Panels</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {[
                    { label: 'Profile', wall: 'Flat / Micro-ribbed', roof: 'Trapezoidal / Standing Seam' },
                    { label: 'Thickness Options', wall: '30-150mm', roof: '40-120mm' },
                    { label: 'Recommended Thickness', wall: '50mm (general), 80-100mm (cold chain)', roof: '50-80mm (general), 100mm+ (cold chain)' },
                    { label: 'PUF Density', wall: '40 ± 2 kg/m³', roof: '40 ± 2 kg/m³' },
                    { label: 'Thermal Conductivity', wall: '0.024 W/mK', roof: '0.024 W/mK' },
                    { label: 'R-Value (at 50mm)', wall: '2.08 m²K/W', roof: '2.08 m²K/W' },
                    { label: 'Panel Width', wall: '1000mm effective', roof: '1000mm effective' },
                    { label: 'Max Length', wall: 'Up to 20 metres', roof: 'Up to 16 metres' },
                    { label: 'Weight (50mm)', wall: '8-12 kg/m²', roof: '10-14 kg/m²' },
                    { label: 'Steel Thickness', wall: '0.40-0.60mm PPGI/PPGL', roof: '0.45-0.60mm PPGI/PPGL' },
                    { label: 'Coating', wall: 'PE, SMP, PVDF', roof: 'SMP, PVDF' },
                    { label: 'Max Span', wall: 'N/A (supported by girts)', roof: '3-4m between purlins' },
                    { label: 'Fire Rating', wall: 'B1, B2, B3; PIR option', roof: 'B2 standard; B1/PIR option' },
                    { label: 'Service Life', wall: '25-30 years', roof: '25-30 years' },
                    { label: 'Compliance', wall: 'IS 14925, ISO 9001', roof: 'IS 14925, ISO 9001, IS 875 (wind)' },
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-6 py-3 font-semibold text-slate-900 text-sm">{row.label}</td>
                      <td className="px-6 py-3 text-slate-600 text-sm">{row.wall}</td>
                      <td className="px-6 py-3 text-slate-600 text-sm">{row.roof}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 7 — Pricing
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Warehouse PUF Panel Pricing — 2026 Guide
              </h2>
              <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                Panel pricing by warehouse size tier, plus turnkey construction cost per sq.ft. Final
                rates depend on specifications, order volume, and delivery location.
              </p>

              {/* Panel Cost by Warehouse Size */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="px-6 py-4 bg-emerald-700 text-white">
                  <h3 className="font-bold text-lg">Panel Cost by Warehouse Size</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-6 py-3 font-semibold text-slate-700">Warehouse Size</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Wall Panels (est.)</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Roof Panels (est.)</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Combined Range</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white">
                        <td className="px-6 py-3 font-medium text-slate-800">1,000-2,000 sq.m</td>
                        <td className="px-6 py-3 text-slate-600">₹8-20 lakh</td>
                        <td className="px-6 py-3 text-slate-600">₹9-22 lakh</td>
                        <td className="px-6 py-3 text-emerald-700 font-semibold">₹17-42 lakh</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-3 font-medium text-slate-800">2,000-5,000 sq.m</td>
                        <td className="px-6 py-3 text-slate-600">₹16-50 lakh</td>
                        <td className="px-6 py-3 text-slate-600">₹18-55 lakh</td>
                        <td className="px-6 py-3 text-emerald-700 font-semibold">₹34-105 lakh</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-3 font-medium text-slate-800">5,000-10,000 sq.m</td>
                        <td className="px-6 py-3 text-slate-600">₹40-100 lakh</td>
                        <td className="px-6 py-3 text-slate-600">₹45-110 lakh</td>
                        <td className="px-6 py-3 text-emerald-700 font-semibold">₹85-210 lakh</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-3 font-medium text-slate-800">10,000+ sq.m</td>
                        <td className="px-6 py-3 text-slate-600">Custom pricing</td>
                        <td className="px-6 py-3 text-slate-600">Custom pricing</td>
                        <td className="px-6 py-3 text-emerald-700 font-semibold">Volume discounts apply</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Turnkey Cost */}
              <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                <div className="px-6 py-4 bg-slate-800 text-white">
                  <h3 className="font-bold text-lg">Turnkey Warehouse Construction Cost (PEB + PUF)</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-slate-100 text-left">
                        <th className="px-6 py-3 font-semibold text-slate-700">Specification</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Cost per Sq.Ft</th>
                        <th className="px-6 py-3 font-semibold text-slate-700">Includes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="bg-white">
                        <td className="px-6 py-3 font-medium text-slate-800">Standard (50mm panels)</td>
                        <td className="px-6 py-3 text-emerald-700 font-bold">₹1,500-₹1,800/sq.ft</td>
                        <td className="px-6 py-3 text-slate-600">PEB structure + PUF wall/roof + accessories</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-6 py-3 font-medium text-slate-800">Enhanced (80mm panels)</td>
                        <td className="px-6 py-3 text-emerald-700 font-bold">₹1,800-₹2,100/sq.ft</td>
                        <td className="px-6 py-3 text-slate-600">PEB + thicker insulation + skylights + ventilation</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-6 py-3 font-medium text-slate-800">Premium (100mm+ panels)</td>
                        <td className="px-6 py-3 text-emerald-700 font-bold">₹2,100-₹2,500/sq.ft</td>
                        <td className="px-6 py-3 text-slate-600">PEB + high insulation + cold chain ready + full accessories</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-lg"
                >
                  Get Your Warehouse Quote — Free &amp; No Obligation
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions — Warehouse Insulated Panels
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Answers to the most common questions from warehouse developers, logistics companies, and
              project engineers.
            </p>
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

            {/* HowTo Steps */}
            <div className="mt-16 max-w-3xl mx-auto">
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
                How to Choose the Best Insulated Panel for Warehouse Construction
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

        {/* ═══════════════════════════════════════════════════════════
            SECTION 9 — Conversion Footer
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Warehouse with Premium Insulated Panels?
            </h2>
            <p className="text-xl text-slate-300 mb-4 max-w-2xl mx-auto">
              Get turnkey warehouse construction from PHOENIXX SMARTBUILD — India&apos;s trusted
              manufacturer of PUF insulated panels with 13+ years of project experience. From PEB
              design to final panel installation, we deliver end-to-end.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm text-slate-400">
              <span>ISO 9001:2015</span>
              <span>•</span>
              <span>500+ Warehouse Projects</span>
              <span>•</span>
              <span>Pan-India Delivery</span>
              <span>•</span>
              <span>13+ Years Experience</span>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-lg">
              <a
                href="tel:+918866556879"
                className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
              >
                📞 <span className="font-semibold">+91 88665 56879</span>
              </a>
              <a
                href="https://wa.me/918866556879?text=Hi%20PHOENIXX,%20I%20need%20insulated%20panels%20for%20my%20warehouse"
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

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Get Free Warehouse Quote
              </Link>
              <a
                href="https://wa.me/918866556879?text=Hi%20PHOENIXX,%20I%20need%20insulated%20panels%20for%20my%20warehouse"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                WhatsApp Now
              </a>
              <a
                href="tel:+918866556879"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Call Us
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-6 text-sm">
              <Link href="/best-puf-panel-for-industrial-shed" className="text-blue-400 hover:underline">
                Best PUF Panel for Industrial Shed
              </Link>
              <Link href="/best-roofing-puf-panel-for-factory" className="text-blue-400 hover:underline">
                Best Roofing PUF Panel for Factory
              </Link>
              <Link href="/solutions/peb" className="text-blue-400 hover:underline">
                PEB Solutions
              </Link>
              <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-blue-400 hover:underline">
                Sandwich PUF Panel
              </Link>
              <Link href="/products/sandwich-panels/roofing-puf-panel" className="text-blue-400 hover:underline">
                Roofing PUF Panel
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
