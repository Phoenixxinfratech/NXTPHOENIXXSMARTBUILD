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
  title: 'Which PUF Panel Is Best for Cold Storage? — Complete Selection Guide 2026',
  description:
    'Expert guide to selecting the best PUF panel for cold storage construction. Temperature zone table, cam-lock joints, thickness calculator. 200+ cold rooms built. ISO certified manufacturer.',
  keywords: [
    'best PUF panel for cold storage',
    'cold storage insulation panel',
    'cold room panel manufacturer',
    'PUF panel for cold room',
    'cold storage construction panel India',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/best-puf-panel-for-cold-storage',
  },
  openGraph: {
    title: 'Which PUF Panel Is Best for Cold Storage? — Complete Selection Guide 2026',
    description:
      'Expert guide to selecting the best PUF panel for cold storage. Temperature zone table, cam-lock joints, thickness calculator. 200+ cold rooms built across India.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-puf-panel-for-cold-storage',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'What thickness PUF panel is best for cold storage?',
    answer:
      'Depends on target temperature: +2°C to +8°C (dairy/vegetables): 80-100mm. 0°C to -5°C: 100mm. -15°C to -25°C: 120-150mm. -25°C to -40°C (blast freezer): 150-200mm. Correct thickness prevents energy waste and condensation issues.',
  },
  {
    question: 'Why is PUF preferred over Rockwool for cold storage?',
    answer:
      'PUF has zero water absorption in its closed-cell foam structure, preventing moisture-related insulation loss. Rockwool can absorb moisture over time. PUF also has superior thermal conductivity (0.024 vs 0.035 W/mK), requiring less thickness for the same R-value, which means more usable storage space.',
  },
  {
    question: 'What joint system is best for cold storage panels?',
    answer:
      'Cam-lock (tongue and groove with cam mechanism) joints are the gold standard for cold storage. They provide airtight, vapor-tight seals that prevent thermal bridges and moisture ingress. PHOENIXX cold storage panels feature precision cam-lock joints tested for long-term seal integrity.',
  },
  {
    question: 'How much does a cold storage PUF panel installation cost?',
    answer:
      'For a 500 sq.m cold storage facility: panels cost ₹15-30 lakh depending on thickness and temperature requirements. Total turnkey cost including structure, panels, doors, flooring, and refrigeration ranges from ₹50 lakh to ₹1.5 crore depending on size and specifications.',
  },
  {
    question: 'Can PUF panels be used for blast freezer rooms (-35°C to -40°C)?',
    answer:
      'Yes, with 150-200mm thickness. Blast freezers also require vapor barriers on the warm side, heated floor systems to prevent ground heaving, and specialized cold storage doors. PHOENIXX provides complete blast freezer panel solutions.',
  },
  {
    question: 'How long do cold storage PUF panels maintain their insulation?',
    answer:
      'PHOENIXX cold storage PUF panels maintain 95%+ of their original insulation performance for 25-30 years. The closed-cell structure prevents moisture ingress that degrades other insulation types. Proper installation with sealed joints is critical for longevity.',
  },
];

const howToSteps = [
  {
    name: 'Define Temperature Requirements',
    text: 'Determine the exact operating temperature for your cold storage — ranging from +15°C for cool rooms to -40°C for blast freezers. This single decision drives every subsequent specification including panel thickness, joint system, vapor barrier, and refrigeration capacity.',
  },
  {
    name: 'Calculate Panel Thickness',
    text: 'Match panel thickness to temperature: 80-100mm for +2°C to +8°C dairy/vegetable storage, 100mm for 0°C to -5°C, 120-150mm for -15°C to -25°C frozen storage, and 150-200mm for blast freezers at -25°C to -40°C.',
  },
  {
    name: 'Specify Joint System',
    text: 'Select cam-lock (tongue and groove with cam mechanism) joints for cold storage applications. These provide airtight, vapor-tight seals critical for preventing thermal bridges and moisture ingress at sub-zero temperatures.',
  },
  {
    name: 'Plan Vapor Barrier',
    text: 'Install a continuous vapor barrier on the warm side of the insulation. This prevents moisture migration into the panel core, which is especially critical for freezer and blast freezer applications where condensation can compromise insulation performance.',
  },
  {
    name: 'Select Door Specifications',
    text: 'Choose insulated cold storage doors rated for your target temperature. Sliding doors for standard cold rooms, rapid roll doors for high-traffic areas, and heavy-duty insulated doors for blast freezers. Include door heaters to prevent icing.',
  },
  {
    name: 'Get Turnkey Quote',
    text: 'Contact PHOENIXX SMARTBUILD for a complete turnkey cold storage quote covering panels, structure, doors, flooring, vapor barriers, and refrigeration coordination. Our 200+ cold room experience ensures nothing is overlooked.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cold Storage PUF Panels',
  description:
    'Premium polyurethane foam insulated sandwich panels engineered for cold storage, cold rooms, and blast freezer construction. Cam-lock joints, zero moisture absorption, -40°C to +15°C range.',
  brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
  manufacturer: {
    '@type': 'Organization',
    name: 'NXT PHOENIXX SMARTBUILD LLP',
  },
  category: 'Cold Storage Insulated Panels',
  material: 'Polyurethane Foam (PUF) + Pre-painted Steel + Cam-Lock Joints',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '198',
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
      name: 'Cold Chain Infrastructure Consultants',
    },
    reviewBody:
      'Exceptional cold storage panels for our multi-temperature facility. Cam-lock joints provided perfect seal integrity at -25°C. Zero energy loss after 3 years of operation.',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '1200',
    highPrice: '3000',
    offerCount: '10',
    availability: 'https://schema.org/InStock',
  },
};

export default function BestPufPanelForColdStoragePage() {
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
            'PUF Panels for Cold Storage Construction',
            'Premium insulated sandwich panels engineered for cold storage, cold rooms, and blast freezer construction. PHOENIXX SMARTBUILD manufactures cam-lock joint PUF panels with zero moisture absorption, available in 80-200mm thickness for -40°C to +15°C temperature range.',
            'https://phoenixxsmartbuild.com/best-puf-panel-for-cold-storage'
          )}
        />
        <JsonLd data={generateFAQSchema(faqs)} />
        <JsonLd
          data={generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            {
              name: 'Best PUF Panel for Cold Storage',
              url: '/best-puf-panel-for-cold-storage',
            },
          ])}
        />
        <JsonLd
          data={generateHowToSchema(
            'How to Select the Best PUF Panel for Cold Storage Construction',
            'Step-by-step guide to selecting the right insulated panel for cold storage, cold rooms, and blast freezer facilities in India.',
            howToSteps
          )}
        />
        <JsonLd
          data={generateArticleSchema({
            title: 'Which PUF Panel Is Best for Cold Storage?',
            description:
              'Complete guide to choosing the best PUF panel for cold storage construction, covering temperature zones, thickness requirements, cam-lock joints, vapor barriers, and turnkey costs.',
            url: '/best-puf-panel-for-cold-storage',
            image:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            datePublished: '2026-02-17',
            dateModified: '2026-02-17',
            author: { name: 'PHOENIXX SMARTBUILD Engineering Team' },
          })}
        />
        <JsonLd
          data={generateOfferSchema({
            name: 'Cold Storage PUF Panels',
            description: 'Premium PUF insulated panels for cold storage and blast freezer construction',
            priceCurrency: 'INR',
            lowPrice: 1200,
            highPrice: 3000,
            priceRange: '₹1,200-₹3,000 per sq.m',
            url: '/best-puf-panel-for-cold-storage',
            availability: 'https://schema.org/InStock',
          })}
        />
        <JsonLd data={generateSpeakableSchema(['h1', 'h2', '.faq-answer'])} />
        <JsonLd
          data={generateQAPageSchema(
            'Which PUF panel is best for cold storage?',
            [
              {
                text: 'PUF (Polyurethane Foam) panels are the best insulation choice for cold storage due to their zero moisture absorption in the closed-cell foam structure and superior thermal conductivity of 0.024 W/mK — 30% better than Rockwool. PHOENIXX SMARTBUILD manufactures cold storage PUF panels with precision cam-lock joints in 80-200mm thickness, covering the full -40°C to +15°C temperature range for dairy, frozen food, pharma cold chain, and blast freezer applications.',
                author: 'PHOENIXX SMARTBUILD',
              },
            ]
          )}
        />
        <JsonLd
          data={generateImageObjectSchema({
            name: 'PUF Panel Cold Storage Installation',
            description: 'PHOENIXX PUF panels installed in cold storage facility with cam-lock joints',
            contentUrl:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            width: 1200,
            height: 630,
          })}
        />
        <JsonLd
          data={generateVideoSchema({
            name: 'PHOENIXX Cold Storage PUF Panel Manufacturing & Installation',
            description:
              'Watch how PHOENIXX manufactures and installs premium PUF panels for cold storage facilities across India. Cam-lock joints, vapor barriers, and blast freezer solutions.',
            thumbnailUrl:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            uploadDate: '2025-01-01',
            duration: 'PT6M45S',
            contentUrl:
              'https://phoenixxsmartbuild.com/videos/cold-storage-installation',
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
                  Best PUF Panel for Cold Storage
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-400 mb-6">
                Cold Storage Specialists | 200+ Cold Rooms Built | -40°C to +15°C Range
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Which PUF Panel Is Best for Cold Storage? — Complete Selection Guide 2026
              </h1>

              <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
                Building a cold storage facility is one of the most technically demanding construction
                projects in India&apos;s food, pharmaceutical, and logistics sectors. The insulation
                panel you select determines everything — from energy consumption and product safety to
                long-term operational costs and regulatory compliance. A wrong choice means condensation
                on walls, temperature fluctuations that spoil inventory, skyrocketing electricity bills,
                and a cold room that fails its first FSSAI or WHO-GMP audit. In this guide, our
                engineering team — with 200+ cold room projects delivered — breaks down every factor you
                need to choose the right PUF panel for your cold storage application.
              </p>

              <p className="mt-4 text-sm text-slate-400">
                📍 Manufacturer in Ahmedabad, Gujarat | Pan-India Cold Storage Projects
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Get Cold Storage Quote
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
            SECTION 2 — Problem: Why Most Cold Storage Facilities Lose Energy
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Most Cold Storage Facilities Lose 20-30% Energy Through Poor Insulation
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  India&apos;s cold chain infrastructure is expanding at over 15% annually, yet a
                  staggering number of cold storage facilities operate far below their designed
                  efficiency. The root cause isn&apos;t refrigeration capacity — it&apos;s insulation
                  failure. When insulation panels absorb moisture, develop thermal bridges at joints, or
                  degrade over time, the refrigeration system works overtime to compensate, consuming
                  20-30% more electricity than it should. For a facility spending ₹30-50 lakh per year
                  on electricity, that&apos;s ₹6-15 lakh wasted annually — enough to recoup the cost
                  difference between cheap panels and premium ones within the first year.
                </p>

                <ul className="space-y-3">
                  <li>
                    <strong>Moisture Absorption:</strong> The single biggest killer of cold storage
                    insulation. When panels absorb even 1-2% moisture by volume, their thermal
                    conductivity degrades by 15-25%. In sub-zero environments, absorbed moisture
                    freezes and thaws repeatedly, physically destroying the insulation core from
                    within. This is why closed-cell PUF (zero water absorption) outperforms open-cell
                    materials like Rockwool in cold storage.
                  </li>
                  <li>
                    <strong>Thermal Bridges at Joints:</strong> Cold storage panels operate under extreme
                    temperature differentials — often 50-70°C between the warm exterior and the
                    freezer interior. Any gap or poorly sealed joint becomes a thermal bridge where
                    warm, humid air penetrates, causing ice formation on interior surfaces and energy
                    loss that compounds over the building&apos;s lifetime.
                  </li>
                  <li>
                    <strong>Insufficient Thickness:</strong> Many cold storage operators under-specify
                    panel thickness to save upfront costs. A cold room designed for -20°C with 80mm
                    panels instead of the correct 120-150mm will never reach its target temperature
                    efficiently, forcing the compressor to run 30-40% longer and shortening its
                    lifespan by years.
                  </li>
                  <li>
                    <strong>Missing Vapor Barriers:</strong> Without a continuous vapor barrier on the
                    warm side, moisture migrates through the building envelope into the insulation
                    core. Over 3-5 years, this silent degradation can reduce insulation performance by
                    40-50%, a damage that is invisible until energy bills become unbearable.
                  </li>
                  <li>
                    <strong>Non-Compliant Construction:</strong> FSSAI, WHO-GMP, and HACCP auditors
                    increasingly scrutinize cold storage insulation quality. Facilities built with
                    substandard panels face compliance failures, product recalls, and loss of
                    contracts with major FMCG and pharmaceutical companies.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  The Solution: Engineering-Grade PUF Panels with Cam-Lock Joints
                </h3>

                <p>
                  PHOENIXX cold storage PUF panels are specifically engineered to eliminate every one
                  of these failure modes. Our closed-cell rigid polyurethane foam core provides zero
                  moisture absorption, while precision cam-lock joints create airtight, vapor-tight
                  seals at every panel connection. Combined with the right thickness for your
                  temperature zone and a properly designed vapor barrier system, PHOENIXX panels
                  deliver cold rooms that maintain their insulation performance for 25-30 years — with
                  energy consumption exactly as designed from day one.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3 — Product: Temperature Zone Table & Technical Deep-Dive
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Cold Storage PUF Panel Selection: Temperature Zone Guide
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Every cold storage application has unique temperature requirements that directly
                  dictate panel specifications. The table below maps common cold storage types to their
                  required PUF panel thickness, ensuring you specify the correct insulation for your
                  facility. PHOENIXX panels feature a thermal conductivity of 0.024 W/mK — the
                  industry&apos;s best — which means you get maximum insulation in minimum thickness,
                  preserving valuable interior storage space.
                </p>
              </div>
            </div>

            {/* Temperature Zone Table */}
            <div className="mt-10 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Temperature Zone × Panel Thickness Matrix
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-4 py-4 text-left font-semibold">Cold Storage Type</th>
                      <th className="px-4 py-4 text-left font-semibold">Temp Range</th>
                      <th className="px-4 py-4 text-left font-semibold">Panel Thickness</th>
                      <th className="px-4 py-4 text-left font-semibold">Energy Saving vs Under-Spec</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      {
                        type: 'Dairy / Vegetable Cool Room',
                        temp: '+2°C to +8°C',
                        thickness: '80 – 100mm',
                        saving: '15-20% vs 50mm panels',
                      },
                      {
                        type: 'Meat / Seafood Chiller',
                        temp: '0°C to -5°C',
                        thickness: '100mm',
                        saving: '20-25% vs 80mm panels',
                      },
                      {
                        type: 'Frozen Food Storage',
                        temp: '-15°C to -25°C',
                        thickness: '120 – 150mm',
                        saving: '25-30% vs 100mm panels',
                      },
                      {
                        type: 'Blast Freezer',
                        temp: '-25°C to -40°C',
                        thickness: '150 – 200mm',
                        saving: '30-40% vs 120mm panels',
                      },
                      {
                        type: 'Pharma Cold Chain (2-8°C)',
                        temp: '+2°C to +8°C',
                        thickness: '100mm (WHO-GMP)',
                        saving: '18-22% vs 80mm panels',
                      },
                      {
                        type: 'Ice Cream Hardening',
                        temp: '-28°C to -35°C',
                        thickness: '150 – 180mm',
                        saving: '28-35% vs 120mm panels',
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 font-semibold text-slate-900 text-sm">{row.type}</td>
                        <td className="px-4 py-3 text-blue-700 font-bold text-sm">{row.temp}</td>
                        <td className="px-4 py-3 text-emerald-700 font-bold text-sm">{row.thickness}</td>
                        <td className="px-4 py-3 text-slate-600 text-sm">{row.saving}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-center text-sm text-slate-500">
                All thickness recommendations based on PHOENIXX PUF panels with λ = 0.024 W/mK and
                40 ± 2 kg/m³ foam density
              </p>
            </div>

            {/* Cam-Lock Joint System */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Cam-Lock Joint System: The Gold Standard for Cold Storage
              </h3>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Unlike standard tongue-and-groove joints used in industrial sheds, cold storage
                  demands cam-lock joints — a precision mechanical fastening system where a rotating cam
                  mechanism draws adjacent panels together with controlled force, creating a compression
                  seal that is both airtight and vapor-tight. This eliminates the thermal bridges and
                  moisture ingress paths that plague conventional joint systems in sub-zero environments.
                </p>
                <p>
                  PHOENIXX cold storage panels feature factory-installed cam-lock mechanisms with
                  stainless steel hardware that resists corrosion in high-humidity environments. Each
                  joint is engineered to maintain seal integrity through thousands of thermal expansion
                  and contraction cycles, ensuring your cold room performs consistently across seasons
                  and years.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: '🔒',
                    title: 'Airtight Seal',
                    desc: 'Mechanical cam compression creates a gas-tight barrier that prevents warm air infiltration — critical for maintaining -40°C in blast freezers.',
                  },
                  {
                    icon: '💧',
                    title: 'Vapor-Tight',
                    desc: 'Sealed joints block moisture migration from the warm exterior, preventing ice formation inside panel cores that degrades insulation over time.',
                  },
                  {
                    icon: '⚡',
                    title: 'No Thermal Bridges',
                    desc: 'Unlike bolted or riveted connections, cam-lock joints eliminate metal-to-metal contact paths that conduct heat through the building envelope.',
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

            {/* PUF vs Rockwool for Cold Storage */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Why PUF Outperforms Rockwool in Cold Storage Applications
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Property</th>
                      <th className="px-6 py-4 text-left font-semibold">PUF Panel</th>
                      <th className="px-6 py-4 text-left font-semibold">Rockwool Panel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { property: 'Thermal Conductivity', puf: '0.024 W/mK', rockwool: '0.035 W/mK' },
                      { property: 'Water Absorption', puf: 'Zero (closed-cell)', rockwool: 'Up to 5% by volume' },
                      { property: 'Thickness for -25°C', puf: '120-150mm', rockwool: '180-200mm' },
                      { property: 'Space Lost to Walls', puf: 'Minimal', rockwool: '20-30% more wall thickness' },
                      { property: 'Joint System', puf: 'Cam-lock (airtight)', rockwool: 'Standard T&G' },
                      { property: 'Long-Term Performance', puf: '95%+ after 25 years', rockwool: 'Degrades with moisture' },
                      { property: 'Cold Storage Suitability', puf: '★★★★★', rockwool: '★★★☆☆' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-3 font-semibold text-slate-900 text-sm">{row.property}</td>
                        <td className="px-6 py-3 text-emerald-700 font-medium text-sm">{row.puf}</td>
                        <td className="px-6 py-3 text-slate-500 text-sm">{row.rockwool}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">
                For a detailed side-by-side analysis:{' '}
                <Link
                  href="/puf-panel-vs-rockwool-panel"
                  className="text-primary hover:underline"
                >
                  PUF Panel vs Rockwool Panel — Complete Comparison
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4 — Benefits: Energy, Space, Moisture, Compliance
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Benefits of PHOENIXX PUF Panels for Cold Storage
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  When you invest in PHOENIXX cold storage PUF panels, you&apos;re not just buying
                  insulation — you&apos;re securing decades of predictable energy costs, regulatory
                  compliance, and product safety. Every panel is engineered to address the unique
                  challenges of sub-zero environments where ordinary building materials fail.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: 'Maximum Energy Savings',
                    desc: 'Correctly specified PUF panels reduce refrigeration energy consumption by 25-40% compared to under-specified or moisture-damaged insulation. For a 1,000 sq.m cold storage spending ₹40 lakh/year on electricity, that translates to ₹10-16 lakh in annual savings — paying for the panel upgrade within 1-2 years.',
                  },
                  {
                    num: '02',
                    title: 'More Usable Storage Space',
                    desc: 'PUF\'s superior thermal conductivity (0.024 vs 0.035 W/mK for Rockwool) means thinner walls for the same insulation value. A 1,000 sq.m cold storage with PUF panels gains 30-50 sq.m of additional usable space compared to Rockwool — space that translates directly to revenue.',
                  },
                  {
                    num: '03',
                    title: 'Zero Moisture Absorption',
                    desc: 'The closed-cell PUF structure provides a permanent moisture barrier within the insulation core itself. Unlike Rockwool or EPS, which can absorb water and lose insulation value, PUF maintains its thermal performance even in the extreme humidity differentials of cold storage environments.',
                  },
                  {
                    num: '04',
                    title: 'FSSAI & WHO-GMP Compliance',
                    desc: 'PHOENIXX cold storage panels meet all FSSAI food safety standards, WHO-GMP pharmaceutical storage requirements, and HACCP criteria. Food-grade interior finishes, sealed cam-lock joints, and hygienic panel surfaces pass even the most stringent third-party audits.',
                  },
                  {
                    num: '05',
                    title: 'Rapid Construction Timeline',
                    desc: 'Prefabricated cam-lock panels install 50-60% faster than site-built cold rooms. A 500 sq.m cold storage can be enclosed in 10-15 days versus 4-6 weeks for conventional construction, getting your facility operational and revenue-generating weeks earlier.',
                  },
                  {
                    num: '06',
                    title: 'Temperature Stability',
                    desc: 'Airtight cam-lock joints and high-density PUF core maintain rock-steady temperatures with minimal fluctuation. This prevents the thermal cycling that damages frozen goods, extends product shelf life, and reduces compressor wear and maintenance costs.',
                  },
                  {
                    num: '07',
                    title: 'Modular & Expandable',
                    desc: 'PHOENIXX cold storage panel systems are fully modular. As your business grows, you can add chambers, extend existing rooms, or reconfigure layouts without demolishing existing structures. Cam-lock panels can be disassembled and relocated if needed.',
                  },
                  {
                    num: '08',
                    title: '25-30 Year Insulation Lifespan',
                    desc: 'PHOENIXX cold storage PUF panels maintain 95%+ of their original insulation performance for 25-30 years. The combination of closed-cell foam, sealed cam-lock joints, and proper vapor barriers ensures your cold room performs as designed for its entire service life.',
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

              {/* Energy Savings Calculation */}
              <div className="mt-14">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  Energy Savings: Correct vs Under-Specified PUF Panel Thickness
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-red-700 mb-4">
                      ❌ Under-Specified Cold Storage (80mm at -25°C)
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm">
                      <li>• Compressor runs 18-20 hours/day to compensate</li>
                      <li>• Annual electricity: ₹45-55 lakh</li>
                      <li>• Condensation on interior walls and ceiling</li>
                      <li>• Ice buildup at panel joints within 6-12 months</li>
                      <li>• Compressor lifespan reduced by 3-5 years</li>
                      <li>• FSSAI audit risk: temperature excursion logs</li>
                      <li>• Panel replacement needed within 8-10 years</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-emerald-700 mb-4">
                      ✅ Correctly Specified (150mm at -25°C with Cam-Lock)
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm">
                      <li>• Compressor runs 12-14 hours/day (optimal load)</li>
                      <li>• Annual electricity: ₹28-35 lakh (35-40% savings)</li>
                      <li>• Dry interior surfaces — zero condensation</li>
                      <li>• Sealed cam-lock joints prevent ice formation</li>
                      <li>• Compressor operates within design life (15+ years)</li>
                      <li>• FSSAI/WHO-GMP compliant temperature logs</li>
                      <li>• Panel performance maintained for 25-30 years</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-slate-600">
                Planning a clean room with temperature control requirements? Read our{' '}
                <Link
                  href="/best-puf-panel-for-clean-room"
                  className="text-primary hover:underline font-medium"
                >
                  best PUF panel for clean room
                </Link>{' '}
                guide for GMP-compliant panel specifications.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5 — Real Cold Storage Projects
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Cold Storage Projects Delivered by PHOENIXX
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              From dairy cold chains to blast freezers, PHOENIXX has delivered 200+ cold storage
              projects across India. Here are four representative installations showcasing our
              cold storage expertise.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Sarhad Dairy — Bhuj',
                  location: 'Bhuj, Gujarat',
                  industry: 'Dairy Cold Chain',
                  scope: '3,500 sq.m multi-temperature dairy cold storage',
                  products: 'Wall & Ceiling PUF 100mm + Freezer Zone 150mm (Cam-Lock)',
                  outcome:
                    'Multi-zone facility maintaining +4°C for fresh dairy and -18°C for frozen products. 32% energy savings versus previous facility design.',
                  slug: 'sarhad-dairy-bhuj',
                },
                {
                  name: 'BC Foods — Mahua',
                  location: 'Mahua, Gujarat',
                  industry: 'Frozen Vegetables & IQF Processing',
                  scope: '5,000 sq.m frozen food processing & storage complex',
                  products: 'Processing Area PUF 120mm + Blast Freezer 200mm (Cam-Lock)',
                  outcome:
                    'Blast freezer achieving -38°C with stable temperature holding. FSSAI and BRC certified facility. Completed installation in 21 days.',
                  slug: 'bc-foods-mahua',
                },
                {
                  name: 'Cold Storage Facility — Mumbai',
                  location: 'Mumbai, Maharashtra',
                  industry: 'Multi-Product Cold Storage & 3PL',
                  scope: '8,000 sq.m multi-chamber cold storage complex',
                  products: 'Chiller Zones PUF 100mm + Freezer Zones PUF 150mm (Cam-Lock)',
                  outcome:
                    'Six independently controlled chambers from +2°C to -25°C serving FMCG, pharma, and seafood clients. 28% lower operating costs than comparable facilities.',
                  slug: 'cold-storage-mumbai',
                },
                {
                  name: 'Cargill India — Gandhidham',
                  location: 'Gandhidham, Gujarat',
                  industry: 'Food Processing & Cold Chain',
                  scope: '6,000 sq.m temperature-controlled warehouse',
                  products: 'Wall PUF 100mm + Ceiling PUF 120mm (Cam-Lock + Vapor Barrier)',
                  outcome:
                    'WHO-GMP compliant cold chain facility for food ingredients. Zero moisture ingress over 4+ years of operation. Passed international audit standards.',
                  slug: 'cargill-gandhidham',
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
              Engineered by PHOENIXX Cold Storage Division | 200+ Cold Room Projects Nationwide
            </p>

            <p className="mt-4 text-center text-slate-600">
              Explore our complete cold chain solutions:{' '}
              <Link
                href="/solutions/cold-storage-construction"
                className="text-primary hover:underline font-medium"
              >
                Cold Storage Construction Services
              </Link>{' '}
              |{' '}
              <Link
                href="/industries/cold-chain"
                className="text-primary hover:underline font-medium"
              >
                Cold Chain Industry Solutions
              </Link>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6 — Technical Specifications + Compliance + Downloads
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Cold Storage PUF Panel Technical Specifications
              </h2>

              <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                PHOENIXX cold storage panels are manufactured to meet the stringent requirements of
                sub-zero environments. Below are the detailed technical specifications for our cold
                storage panel range.
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
                      { label: 'Panel Thickness', value: '80mm, 100mm, 120mm, 150mm, 180mm, 200mm' },
                      { label: 'Foam Core Density', value: '40 ± 2 kg/m³ (high-density rigid PUF)' },
                      { label: 'Thermal Conductivity (λ)', value: '0.024 W/mK' },
                      { label: 'R-Value (at 100mm)', value: '4.17 m²K/W' },
                      { label: 'R-Value (at 150mm)', value: '6.25 m²K/W' },
                      { label: 'R-Value (at 200mm)', value: '8.33 m²K/W' },
                      { label: 'Joint System', value: 'Cam-Lock (tongue & groove with cam mechanism)' },
                      { label: 'Temperature Range', value: '-40°C to +15°C (operating)' },
                      { label: 'Fire Classification', value: 'B1 (self-extinguishing), B2; PIR option available' },
                      { label: 'Steel Facing Thickness', value: '0.45mm, 0.50mm, 0.60mm (PPGI/PPGL/Stainless)' },
                      { label: 'Interior Finish', value: 'Food-grade PPGI / Stainless Steel 304 option' },
                      { label: 'Water Absorption', value: 'Zero (closed-cell structure)' },
                      { label: 'Compressive Strength', value: '≥ 0.15 MPa' },
                      { label: 'Panel Width', value: '1000mm / 1150mm (effective coverage)' },
                      { label: 'Panel Length', value: 'Custom — up to 12 metres' },
                      { label: 'Service Life', value: '25-30 years (95%+ insulation retention)' },
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
                  Cold Storage Compliance &amp; Certifications
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { std: 'IS 14925:2015', desc: 'Indian Standard for sandwich panels' },
                    { std: 'ISO 9001:2015', desc: 'Quality Management System' },
                    { std: 'FSSAI Compliant', desc: 'Food Safety and Standards Authority of India' },
                    { std: 'WHO-GMP', desc: 'Pharmaceutical cold chain compliance' },
                    { std: 'HACCP Compatible', desc: 'Hazard Analysis Critical Control Points' },
                    { std: 'ISO 14001:2015', desc: 'Environmental Management System' },
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

              <p className="mt-8 text-slate-600">
                Looking for food processing facility panels? Explore our{' '}
                <Link
                  href="/industries/food-processing"
                  className="text-primary hover:underline font-medium"
                >
                  food processing industry solutions
                </Link>{' '}
                for FSSAI-compliant installations.
              </p>

              {/* Downloads */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/resources/technical-sheet"
                  className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition-colors text-sm"
                >
                  📄 Download Cold Storage Datasheet
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
            SECTION 7 — Pricing by Temperature Zone
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Cold Storage PUF Panel Pricing Guide — By Temperature Zone
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Cold storage PUF panel pricing is driven primarily by thickness (which is
                  dictated by your target temperature) and the joint system required. Below are
                  indicative price ranges for 2026 across common cold storage temperature zones.
                  For exact pricing tailored to your specific project, request a formal quotation
                  from our cold storage engineering team.
                </p>
              </div>

              {/* Price Table by Temperature Zone */}
              <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-700 text-white">
                      <th className="px-5 py-4 text-left font-semibold">Temperature Zone</th>
                      <th className="px-5 py-4 text-left font-semibold">Thickness</th>
                      <th className="px-5 py-4 text-left font-semibold">Price (per sq.m)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="px-5 py-4 font-semibold text-slate-900">Cool Room (+2°C to +8°C)</td>
                      <td className="px-5 py-4 text-slate-600">80 – 100mm</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹1,200 – ₹1,600</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-semibold text-slate-900">Chiller (0°C to -5°C)</td>
                      <td className="px-5 py-4 text-slate-600">100mm</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹1,500 – ₹1,800</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-5 py-4 font-semibold text-slate-900">Frozen Storage (-15°C to -25°C)</td>
                      <td className="px-5 py-4 text-slate-600">120 – 150mm</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹1,800 – ₹2,400</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-semibold text-slate-900">Blast Freezer (-25°C to -40°C)</td>
                      <td className="px-5 py-4 text-slate-600">150 – 200mm</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹2,400 – ₹3,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-center text-sm text-slate-500">
                Prices include cam-lock joint system. Stainless steel interior finish, vapor
                barriers, and cold storage doors quoted separately.
              </p>

              {/* Turnkey Cost Breakdown */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Turnkey Cold Storage Cost Breakdown (500 sq.m Facility)
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      component: 'PUF Panels (Cam-Lock)',
                      cost: '₹15-30 lakh',
                      note: 'Varies by thickness and temperature zone',
                    },
                    {
                      component: 'Structure & Civil Works',
                      cost: '₹10-20 lakh',
                      note: 'Foundation, steel structure, flooring',
                    },
                    {
                      component: 'Insulated Doors',
                      cost: '₹3-8 lakh',
                      note: 'Sliding, hinged, or rapid roll (per opening)',
                    },
                    {
                      component: 'Refrigeration System',
                      cost: '₹15-40 lakh',
                      note: 'Compressors, evaporators, controls',
                    },
                    {
                      component: 'Electrical & Controls',
                      cost: '₹5-12 lakh',
                      note: 'Wiring, lighting, temperature monitoring',
                    },
                    {
                      component: 'Vapor Barrier & Accessories',
                      cost: '₹2-5 lakh',
                      note: 'Vapor barrier, floor heating (freezers), sealants',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-5 border border-slate-100">
                      <h4 className="font-bold text-slate-900">{item.component}</h4>
                      <p className="text-emerald-700 font-bold text-lg mt-1">{item.cost}</p>
                      <p className="mt-1 text-sm text-slate-600">{item.note}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-slate-700 font-medium">
                  Total Turnkey Range: ₹50 lakh – ₹1.5 crore (depending on size, temperature, and specifications)
                </p>
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-lg"
                >
                  Get Your Cold Storage Quote — Free &amp; No Obligation
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
              Cold Storage PUF Panel — Frequently Asked Questions
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
              Ready to Build Your Cold Storage with India&apos;s Trusted Panel Manufacturer?
            </h2>
            <p className="text-xl text-emerald-100 mb-4 max-w-2xl mx-auto">
              From temperature zone engineering to turnkey installation, PHOENIXX SMARTBUILD delivers
              cold storage projects that perform as designed — for 25+ years. 200+ cold rooms built.
              Dairy, frozen food, pharma cold chain, blast freezers. Get expert guidance today.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-lg">
              <a
                href="tel:+918866556879"
                className="flex items-center gap-2 hover:text-emerald-200 transition-colors"
              >
                📞 <span className="font-semibold">+91 88665 56879</span>
              </a>
              <a
                href="https://wa.me/918866556879"
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
              <span className="bg-white/10 rounded-full px-4 py-1.5">200+ Cold Rooms</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">-40°C to +15°C</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">Cam-Lock Joints</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">ISO 9001:2015</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">FSSAI Compliant</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">Pan-India Delivery</span>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Get Cold Storage Quote
              </Link>
              <a
                href="https://wa.me/918866556879"
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
