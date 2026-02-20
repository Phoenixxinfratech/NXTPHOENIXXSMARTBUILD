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
  title: 'Which PUF Panel Is Best for Clean Room? — Pharmaceutical & Industrial Guide 2026',
  description:
    'Expert guide to choosing the best PUF panel for cleanroom construction. GMP-compliant PIR panels, ISO Class 5-8 specifications, flush-mount joints, antimicrobial coatings. 100+ cleanrooms built for pharma & electronics.',
  keywords: [
    'best PUF panel for clean room',
    'cleanroom panel manufacturer',
    'GMP panel for pharma',
    'cleanroom insulated panel India',
    'ISO cleanroom panel',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/best-puf-panel-for-clean-room',
  },
  openGraph: {
    title: 'Which PUF Panel Is Best for Clean Room? — Pharmaceutical & Industrial Guide 2026',
    description:
      'Expert guide to choosing the best insulated panel for pharmaceutical and industrial cleanrooms. GMP-compliant PIR panels, ISO 14644 specifications, flush-mount joints. 100+ cleanrooms built across India.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-puf-panel-for-clean-room',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'Which panel type is best for pharmaceutical cleanrooms?',
    answer:
      'PIR (Polyisocyanurate) panels are the preferred choice for pharmaceutical cleanrooms due to superior fire resistance (B1 rating) and smooth, flush surfaces that prevent particle accumulation. For ISO Class 5-7 cleanrooms, PIR panels with food-safe or antimicrobial coatings meet WHO-GMP requirements.',
  },
  {
    question: 'What thickness is needed for cleanroom panels?',
    answer:
      'Standard cleanroom walls use 50-60mm PIR/PUF panels. For temperature-controlled cleanrooms (pharma manufacturing), 80-100mm provides both thermal insulation and structural rigidity. Ceiling panels are typically 50mm with flush joints.',
  },
  {
    question: 'What surface finish is required for cleanroom panels?',
    answer:
      'Cleanroom panels require smooth, non-porous surfaces that are easy to clean and sanitize. Options include standard PPGI with PE coating (ISO 7-8), food-safe coated steel (ISO 5-7), and stainless steel 304/316 facings (ISO 5 and below). All joints must be flush-mounted and sealed.',
  },
  {
    question: 'Can PUF panels achieve ISO Class 5 cleanroom standards?',
    answer:
      'Yes, when combined with proper HEPA filtration, pressure cascade design, and sealed panel joints. The panel surface finish, joint sealing quality, and room pressure management are the key factors. PHOENIXX cleanroom panels are designed for ISO 14644 compliance.',
  },
  {
    question: 'How do cleanroom panels differ from standard PUF panels?',
    answer:
      'Cleanroom panels have flush joints (no exposed fasteners), antimicrobial or food-safe coatings, tighter dimensional tolerances, integrated corner and cove solutions for easy cleaning, and compatibility with cleanroom doors, pass-boxes, and HEPA modules.',
  },
  {
    question: 'What certifications are required for pharmaceutical cleanroom panels?',
    answer:
      'WHO-GMP compliance, IS 14644 (cleanroom classification), fire safety certificates (B1 for PIR), material safety data sheets, and FDA-compatible surface certifications. PHOENIXX provides complete documentation packages for regulatory audits.',
  },
];

const howToSteps = [
  {
    name: 'Define ISO Class Requirement',
    text: 'Determine the cleanroom classification your facility requires — ISO Class 5 (semiconductor, injectable pharma), ISO Class 6 (sterile manufacturing), ISO Class 7 (oral dosage, medical devices), or ISO Class 8 (packaging, general pharma). This single decision drives panel surface finish, joint system, and accessory specifications.',
  },
  {
    name: 'Select Panel Core (PIR recommended for pharma)',
    text: 'Choose PIR (Polyisocyanurate) for pharmaceutical and high-grade cleanrooms due to its B1 fire rating and superior dimensional stability. Standard PUF is suitable for ISO Class 7-8 where fire rating requirements are less stringent. Core density should be 40-45 kg/m³ for structural integrity.',
  },
  {
    name: 'Specify Surface Finish',
    text: 'Match surface finish to your ISO class: standard PPGI with PE coating for ISO 7-8, food-safe coated steel for ISO 5-7, and stainless steel 304/316 for ISO 5 and below or corrosive chemical environments. All surfaces must be smooth, non-porous, and compatible with cleaning agents.',
  },
  {
    name: 'Plan Joint System (flush-mount)',
    text: 'Specify flush-mount concealed-fix joints that eliminate exposed fasteners and crevices where particles accumulate. For ISO Class 5-6, joints must be sealed with pharma-grade silicone sealant and validated for particle generation. Avoid any tongue-and-groove profiles with visible gaps.',
  },
  {
    name: 'Integrate Cleanroom Accessories (doors, pass-boxes, HEPA)',
    text: 'Plan panel openings for flush-mounted cleanroom doors, pass-through boxes, HEPA filter modules, return air grilles, and viewing windows. All penetrations must maintain the room pressure cascade and particle containment. PHOENIXX provides pre-cut panel openings with sealed frames.',
  },
  {
    name: 'Ensure GMP Documentation',
    text: 'Request complete documentation including material certificates, fire test reports, surface finish specifications, IQ/OQ validation support documents, and cleaning procedure recommendations. PHOENIXX provides turnkey documentation packages that satisfy WHO-GMP, USFDA, and CDSCO audit requirements.',
  },
];

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Cleanroom PIR/PUF Insulated Panels',
  description:
    'GMP-compliant insulated sandwich panels engineered for pharmaceutical and industrial cleanroom construction. Flush-mount joints, antimicrobial coatings, ISO 14644 certified, available for ISO Class 5-8 cleanrooms.',
  brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
  manufacturer: {
    '@type': 'Organization',
    name: 'NXT PHOENIXX SMARTBUILD LLP',
  },
  category: 'Cleanroom Insulated Panels',
  material: 'PIR/PUF Core + Pre-painted / Stainless Steel Facings + Flush-Mount Joints',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
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
      name: 'Pharmaceutical Facility Consultants India',
    },
    reviewBody:
      'Outstanding cleanroom panel quality for our WHO-GMP pharmaceutical facility. Flush joints passed particle count validation on the first attempt. Complete documentation package simplified our regulatory audit.',
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'INR',
    lowPrice: '1500',
    highPrice: '4000',
    offerCount: '8',
    availability: 'https://schema.org/InStock',
  },
};

export default function BestPufPanelForCleanRoomPage() {
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
            'Insulated Panels for Cleanroom Construction',
            'GMP-compliant PIR and PUF insulated sandwich panels engineered for pharmaceutical and industrial cleanroom construction. PHOENIXX SMARTBUILD manufactures flush-mount joint cleanroom panels with antimicrobial coatings for ISO Class 5-8 facilities, meeting WHO-GMP, USFDA, and CDSCO requirements.',
            'https://phoenixxsmartbuild.com/best-puf-panel-for-clean-room'
          )}
        />
        <JsonLd data={generateFAQSchema(faqs)} />
        <JsonLd
          data={generateBreadcrumbSchema([
            { name: 'Home', url: '/' },
            { name: 'Products', url: '/products' },
            {
              name: 'Best PUF Panel for Clean Room',
              url: '/best-puf-panel-for-clean-room',
            },
          ])}
        />
        <JsonLd
          data={generateHowToSchema(
            'How to Choose the Best Insulated Panel for Cleanroom Construction',
            'Step-by-step guide to selecting the right insulated panel for pharmaceutical and industrial cleanroom facilities in India, covering ISO classification, panel core, surface finish, joint systems, and GMP documentation.',
            howToSteps
          )}
        />
        <JsonLd
          data={generateArticleSchema({
            title: 'Which PUF Panel Is Best for Clean Room?',
            description:
              'Complete guide to choosing the best insulated panel for pharmaceutical and industrial cleanroom construction, covering ISO classes, PIR vs PUF, surface finishes, flush-mount joints, and GMP compliance.',
            url: '/best-puf-panel-for-clean-room',
            image:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            datePublished: '2026-02-18',
            dateModified: '2026-02-18',
            author: { name: 'PHOENIXX SMARTBUILD Engineering Team' },
          })}
        />
        <JsonLd
          data={generateOfferSchema({
            name: 'Cleanroom PIR/PUF Insulated Panels',
            description: 'GMP-compliant insulated panels for pharmaceutical and industrial cleanroom construction',
            priceCurrency: 'INR',
            lowPrice: 1500,
            highPrice: 4000,
            priceRange: '₹1,500-₹4,000 per sq.m',
            url: '/best-puf-panel-for-clean-room',
            availability: 'https://schema.org/InStock',
          })}
        />
        <JsonLd data={generateSpeakableSchema(['h1', 'h2', '.faq-answer'])} />
        <JsonLd
          data={generateQAPageSchema(
            'Which PUF panel is best for pharmaceutical cleanrooms?',
            [
              {
                text: 'PIR (Polyisocyanurate) insulated panels are the best choice for pharmaceutical cleanrooms due to their B1 fire rating, dimensional stability, and smooth flush surfaces that prevent particle accumulation. PHOENIXX SMARTBUILD manufactures GMP-compliant cleanroom panels with flush-mount concealed-fix joints, antimicrobial coatings, and stainless steel facing options for ISO Class 5-8 facilities. Our panels meet WHO-GMP, USFDA, and ISO 14644 requirements for pharmaceutical manufacturing, medical device production, and electronics cleanrooms.',
                author: 'PHOENIXX SMARTBUILD',
              },
            ]
          )}
        />
        <JsonLd
          data={generateImageObjectSchema({
            name: 'Cleanroom PUF Panel Installation — Pharmaceutical Facility',
            description: 'PHOENIXX PIR cleanroom panels installed in a WHO-GMP pharmaceutical manufacturing facility with flush-mount joints and antimicrobial coating',
            contentUrl:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            width: 1200,
            height: 630,
          })}
        />
        <JsonLd
          data={generateVideoSchema({
            name: 'PHOENIXX Cleanroom Panel Manufacturing & Installation Process',
            description:
              'Watch how PHOENIXX manufactures and installs GMP-compliant insulated panels for pharmaceutical cleanrooms across India. Flush-mount joints, antimicrobial coatings, and ISO 14644 validated installations.',
            thumbnailUrl:
              'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
            uploadDate: '2025-01-01',
            duration: 'PT7M30S',
            contentUrl:
              'https://phoenixxsmartbuild.com/videos/cleanroom-panel-installation',
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
                  Best PUF Panel for Clean Room
                </li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-5 py-2 text-sm font-semibold text-emerald-400 mb-6">
                Cleanroom Specialists | GMP Compliant | ISO 14644 Certified | 100+ Cleanrooms Built
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Which PUF Panel Is Best for Clean Room? — Pharmaceutical &amp; Industrial Guide 2026
              </h1>

              <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
                Cleanroom construction in India&apos;s pharmaceutical, biotech, semiconductor, and
                medical device sectors demands insulated panels that go far beyond standard
                industrial specifications. A single particle on a surface, an improperly sealed
                joint, or a panel that off-gasses volatile compounds can contaminate an entire batch,
                trigger regulatory shutdown, and cost crores in lost production. In this
                comprehensive guide, our cleanroom engineering team — with 100+ validated cleanroom
                projects — explains exactly how to select the right insulated panel for your ISO
                class, GMP tier, and industry requirements.
              </p>

              <p className="mt-4 text-sm text-slate-400">
                📍 Manufacturer in Ahmedabad, Gujarat | Pan-India Cleanroom Projects
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                  Get Cleanroom Panel Quote
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
            SECTION 2 — Problem: Why Standard Panels Fail in Cleanroom Environments
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Standard Panels Fail in Cleanroom Environments
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Every year, pharmaceutical companies across India invest heavily in HVAC
                  systems, HEPA filters, and air handling units for their cleanrooms — only to
                  fail WHO-GMP audits because the wall and ceiling panels themselves are the
                  contamination source. Standard industrial PUF panels, designed for warehouses
                  and factory roofs, introduce failure modes that are invisible until an auditor
                  arrives or a batch fails microbial testing. Understanding these failure modes is
                  the first step toward specifying the right cleanroom panel.
                </p>

                <ul className="space-y-3">
                  <li>
                    <strong>Particle-Generating Joints:</strong> Standard tongue-and-groove PUF
                    panels have exposed fasteners, visible joint lines, and micro-gaps where
                    particles accumulate and become airborne during pressure fluctuations. In an
                    ISO Class 5 cleanroom where the limit is 3,520 particles per cubic metre at
                    0.5 microns, a single poorly sealed joint can push the entire room out of
                    specification.
                  </li>
                  <li>
                    <strong>Non-Flush Surfaces:</strong> Industrial panels with raised ribs,
                    corrugated profiles, or protruding fastener heads create surfaces that are
                    impossible to clean and sanitize to pharmaceutical standards. Biofilm formation
                    in crevices and around screw heads is a leading cause of environmental
                    monitoring failures in Indian pharma facilities.
                  </li>
                  <li>
                    <strong>Outgassing from Panel Core:</strong> Low-quality PUF foam can release
                    volatile organic compounds (VOCs) over time, especially under the positive
                    pressure conditions of a cleanroom. These VOCs contaminate sensitive products
                    in pharmaceutical, semiconductor, and biotech environments, leading to
                    unexplained batch failures.
                  </li>
                  <li>
                    <strong>Failed GMP Audits:</strong> WHO-GMP, USFDA, and CDSCO auditors
                    evaluate cleanroom panel quality as a critical parameter. Facilities built with
                    standard industrial panels frequently receive observations for non-smooth
                    surfaces, non-cleanable joints, missing documentation, and inadequate fire
                    rating — each observation delaying product approvals by months.
                  </li>
                  <li>
                    <strong>Incompatible with Cleanroom Accessories:</strong> Standard panels
                    lack provisions for flush-mounted HEPA modules, pass-through boxes, viewing
                    windows, and interlocked cleanroom doors. Retrofitting these accessories into
                    industrial panels creates more joints, more gaps, and more contamination risk.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                  The Solution: Purpose-Built Cleanroom Panels with Flush-Mount Joints
                </h3>

                <p>
                  PHOENIXX cleanroom panels are engineered from the ground up for controlled
                  environments. Every aspect — from the PIR/PUF core formulation that minimizes
                  outgassing, to the concealed-fix flush-mount joint system that eliminates particle
                  traps, to the antimicrobial surface coatings that resist biofilm formation — is
                  designed to meet the demands of ISO 14644 classified cleanrooms. Combined with
                  integrated accessories and complete GMP documentation packages, PHOENIXX panels
                  help your facility pass regulatory audits the first time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3 — Product: ISO Class Table & Technical Deep-Dive
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Cleanroom Panel Selection: ISO Class Requirements Guide
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  The ISO 14644-1 cleanroom classification directly determines your panel
                  specifications. Higher cleanliness classes require smoother surfaces, tighter
                  joints, and more stringent material certifications. The table below maps each
                  ISO class to the panel specifications PHOENIXX recommends based on 100+
                  validated cleanroom installations across pharmaceutical, biotech, electronics,
                  and medical device facilities.
                </p>
              </div>
            </div>

            {/* ISO Class vs Panel Requirements Table */}
            <div className="mt-10 max-w-5xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                ISO Class × Panel Specification Matrix
              </h3>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-4 py-4 text-left font-semibold">ISO Class</th>
                      <th className="px-4 py-4 text-left font-semibold">Application</th>
                      <th className="px-4 py-4 text-left font-semibold">Surface Finish</th>
                      <th className="px-4 py-4 text-left font-semibold">Joint System</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      {
                        iso: 'ISO Class 5',
                        application: 'Injectable pharma, semiconductor fab',
                        surface: 'Stainless Steel 304/316',
                        joint: 'Flush-mount + pharma-grade sealant',
                      },
                      {
                        iso: 'ISO Class 6',
                        application: 'Sterile manufacturing, biotech',
                        surface: 'SS 304 or food-safe coated steel',
                        joint: 'Flush-mount concealed-fix',
                      },
                      {
                        iso: 'ISO Class 7',
                        application: 'Oral dosage, medical devices, API',
                        surface: 'Food-safe coated PPGI',
                        joint: 'Flush-mount concealed-fix',
                      },
                      {
                        iso: 'ISO Class 8',
                        application: 'Packaging, general pharma, cosmetics',
                        surface: 'Standard PPGI with PE coating',
                        joint: 'Concealed-fix (standard)',
                      },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-4 py-3 font-bold text-blue-700 text-sm">{row.iso}</td>
                        <td className="px-4 py-3 text-slate-900 font-semibold text-sm">{row.application}</td>
                        <td className="px-4 py-3 text-emerald-700 font-medium text-sm">{row.surface}</td>
                        <td className="px-4 py-3 text-slate-600 text-sm">{row.joint}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-center text-sm text-slate-500">
                All recommendations validated against ISO 14644-1:2015 and WHO-GMP Annex 2 requirements
              </p>
            </div>

            {/* PIR vs PUF for Cleanrooms */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                PIR vs PUF for Cleanroom Applications
              </h3>
              <div className="prose prose-lg prose-slate max-w-none mb-8">
                <p>
                  While both PIR and PUF cores provide excellent thermal insulation, PIR
                  (Polyisocyanurate) is the preferred choice for pharmaceutical cleanrooms due to
                  its superior fire performance, lower smoke generation, and better dimensional
                  stability at elevated temperatures. Standard PUF panels remain suitable for ISO
                  Class 7-8 applications where fire rating requirements are less stringent.
                </p>
              </div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Property</th>
                      <th className="px-6 py-4 text-left font-semibold">PIR Panel</th>
                      <th className="px-6 py-4 text-left font-semibold">Standard PUF Panel</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { property: 'Fire Classification', pir: 'B1 (self-extinguishing)', puf: 'B2 (normally flammable)' },
                      { property: 'Smoke Generation', pir: 'Very low', puf: 'Moderate' },
                      { property: 'Thermal Conductivity', pir: '0.022-0.024 W/mK', puf: '0.024 W/mK' },
                      { property: 'Max Service Temp', pir: '120°C', puf: '80°C' },
                      { property: 'VOC Outgassing', pir: 'Minimal (pharma-grade)', puf: 'Low (standard-grade)' },
                      { property: 'WHO-GMP Compliance', pir: 'Preferred / Required', puf: 'ISO 7-8 only' },
                      { property: 'Cleanroom Suitability', pir: '★★★★★', puf: '★★★★☆' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-3 font-semibold text-slate-900 text-sm">{row.property}</td>
                        <td className="px-6 py-3 text-emerald-700 font-medium text-sm">{row.pir}</td>
                        <td className="px-6 py-3 text-slate-500 text-sm">{row.puf}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">
                For fire-rating comparisons with other materials:{' '}
                <Link
                  href="/puf-panel-vs-rockwool-panel"
                  className="text-primary hover:underline"
                >
                  PUF Panel vs Rockwool Panel — Complete Comparison
                </Link>
              </p>
            </div>

            {/* Surface Finish Options */}
            <div className="mt-14 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Cleanroom Surface Finish Options
              </h3>
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  {
                    icon: '🔬',
                    title: 'Stainless Steel 304/316',
                    iso: 'ISO Class 5 and below',
                    desc: 'Pharma-grade stainless steel facings with electropolished or #4 brush finish. Fully resistant to aggressive cleaning agents including H₂O₂ VHP decontamination. Required for aseptic and injectable manufacturing areas.',
                  },
                  {
                    icon: '🧪',
                    title: 'Food-Safe Coated Steel',
                    iso: 'ISO Class 5-7',
                    desc: 'Pre-painted galvanized steel with FDA-compatible polyester coating. Smooth, non-porous surface resists most pharmaceutical cleaning agents. Cost-effective alternative to stainless steel for oral dosage and API manufacturing.',
                  },
                  {
                    icon: '🏭',
                    title: 'Standard PPGI with PE Coating',
                    iso: 'ISO Class 7-8',
                    desc: 'Standard polyester-coated pre-painted steel suitable for general pharmaceutical areas, packaging zones, and cosmetics manufacturing. Smooth finish with good chemical resistance at an economical price point.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <h4 className="mt-3 text-lg font-bold text-slate-900">{item.title}</h4>
                    <p className="mt-1 text-xs font-semibold text-blue-600">{item.iso}</p>
                    <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4 — Benefits: GMP, Audit-Ready, Antimicrobial, Modular
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Benefits of PHOENIXX Cleanroom Panels
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  When your facility&apos;s regulatory approval, product quality, and patient safety
                  depend on the cleanroom envelope, every panel specification matters. PHOENIXX
                  cleanroom panels are purpose-built to deliver the controlled environment your
                  process demands — and the documentation your auditors require.
                </p>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {[
                  {
                    num: '01',
                    title: 'WHO-GMP Compliance Built In',
                    desc: 'Every PHOENIXX cleanroom panel is manufactured to meet WHO-GMP Annex 2 and Annex 6 requirements for pharmaceutical manufacturing areas. Flush surfaces, sealed joints, and antimicrobial options ensure your facility satisfies the most stringent regulatory expectations from day one — not as a costly retrofit after a failed inspection.',
                  },
                  {
                    num: '02',
                    title: 'Audit-Ready Documentation',
                    desc: 'PHOENIXX provides complete documentation packages including material certificates, fire test reports (B1 for PIR), surface finish specifications, MSDS sheets, and IQ/OQ validation support documents. When CDSCO, WHO, or USFDA auditors request panel documentation, everything is ready — organized and referenced.',
                  },
                  {
                    num: '03',
                    title: 'Antimicrobial Surface Technology',
                    desc: 'Optional antimicrobial coatings integrated into the panel surface inhibit bacterial and fungal growth between cleaning cycles. This is particularly critical for pharmaceutical facilities where environmental monitoring for viable organisms is a continuous regulatory requirement.',
                  },
                  {
                    num: '04',
                    title: 'Energy Efficient Thermal Envelope',
                    desc: 'PIR/PUF core insulation with λ = 0.022-0.024 W/mK reduces HVAC energy consumption by 20-35% compared to uninsulated or poorly insulated cleanroom partitions. For facilities running 24/7 air handling units, this translates to ₹5-15 lakh in annual energy savings depending on cleanroom size.',
                  },
                  {
                    num: '05',
                    title: 'Rapid Modular Construction',
                    desc: 'Prefabricated cleanroom panels reduce construction time by 40-60% compared to conventional plastered drywall cleanrooms. A 500 sq.m cleanroom suite can be enclosed in 12-18 days. Faster construction means earlier revenue generation and reduced facility downtime during expansions.',
                  },
                  {
                    num: '06',
                    title: 'Fully Modular & Reconfigurable',
                    desc: 'As product lines change and production scales, PHOENIXX modular cleanroom panels can be disassembled, reconfigured, and relocated without compromising cleanliness classification. This future-proofs your facility investment against changing regulatory requirements and production needs.',
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

              {/* Standard Panel vs Cleanroom Panel Comparison */}
              <div className="mt-14">
                <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                  Standard Industrial Panel vs PHOENIXX Cleanroom Panel
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-red-700 mb-4">
                      ❌ Standard Industrial PUF Panel in Cleanroom
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm">
                      <li>• Exposed fasteners and visible joint lines</li>
                      <li>• Particle accumulation in ribs and screw heads</li>
                      <li>• Biofilm formation in non-smooth crevices</li>
                      <li>• VOC outgassing from low-grade foam</li>
                      <li>• No provisions for HEPA modules or pass-boxes</li>
                      <li>• WHO-GMP audit observations on panel quality</li>
                      <li>• Costly retrofit required within 2-3 years</li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-emerald-700 mb-4">
                      ✅ PHOENIXX Cleanroom Panel (Flush-Mount)
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-sm">
                      <li>• Concealed-fix flush-mount joints — zero exposed fasteners</li>
                      <li>• Smooth, non-porous surfaces validated for particle counts</li>
                      <li>• Antimicrobial coating resists biofilm formation</li>
                      <li>• Pharma-grade PIR core with minimal outgassing</li>
                      <li>• Pre-engineered openings for HEPA, doors, pass-boxes</li>
                      <li>• WHO-GMP compliant with full documentation package</li>
                      <li>• 25+ year service life with consistent classification</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="mt-8 text-slate-600">
                Need cold storage panels alongside your cleanroom? Read our{' '}
                <Link
                  href="/best-puf-panel-for-cold-storage"
                  className="text-primary hover:underline font-medium"
                >
                  best PUF panel for cold storage
                </Link>{' '}
                guide for temperature-zone specifications and cam-lock joint details.
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5 — Real Cleanroom Projects
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Cleanroom Projects Delivered by PHOENIXX
            </h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              From oral dosage facilities to injectable manufacturing suites, PHOENIXX has
              delivered 100+ validated cleanroom projects across India. Here are four
              representative installations showcasing our pharmaceutical cleanroom expertise.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: 'Pharma Cleanroom — Pune',
                  location: 'Pune, Maharashtra',
                  industry: 'Pharmaceutical Manufacturing (Oral Dosage)',
                  scope: '2,800 sq.m ISO Class 7 cleanroom suite — 12 rooms',
                  products: 'PIR 60mm walls + 50mm ceiling panels, food-safe coating, flush-mount joints',
                  outcome:
                    'WHO-GMP certified on first inspection. Zero audit observations on panel quality. Environmental monitoring consistently within specification across all 12 rooms.',
                  slug: 'pharma-cleanroom-pune',
                },
                {
                  name: 'Edkem Pharma — Ahmedabad',
                  location: 'Ahmedabad, Gujarat',
                  industry: 'API Manufacturing & Processing',
                  scope: '1,500 sq.m ISO Class 7-8 production area with controlled corridors',
                  products: 'PIR 80mm panels with chemical-resistant coating, integrated pass-boxes',
                  outcome:
                    'CDSCO approval secured within timeline. Modular design allowed Phase 2 expansion without disrupting existing production. 30% HVAC energy savings.',
                  slug: 'edkem-pharma-ahmedabad',
                },
                {
                  name: 'Makson Pharma — Surendranagar',
                  location: 'Surendranagar, Gujarat',
                  industry: 'Sterile Manufacturing (Injectable)',
                  scope: '900 sq.m ISO Class 5-6 aseptic processing suite',
                  products: 'PIR 60mm with SS 304 interior facing, pharma-grade sealed joints, HEPA integration',
                  outcome:
                    'USFDA-ready facility. Particle count validation passed on first attempt. Stainless steel panels withstand daily VHP decontamination cycles without degradation.',
                  slug: 'makson-pharma-surendranagar',
                },
                {
                  name: 'Fuji Silvertech — Ahmedabad',
                  location: 'Ahmedabad, Gujarat',
                  industry: 'Electronics & Semiconductor Cleanroom',
                  scope: '2,200 sq.m ISO Class 6-7 electronics manufacturing cleanroom',
                  products: 'PIR 50mm panels with anti-static coating, flush-mount joints, integrated lighting',
                  outcome:
                    'Achieved ISO Class 6 at rest and Class 7 operational — both targets met. Anti-static panel surfaces eliminated ESD concerns. Completed in 16 working days.',
                  slug: 'fuji-silvertech-ahmedabad',
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
              Engineered by PHOENIXX Cleanroom Division | 100+ Validated Cleanroom Projects Nationwide
            </p>

            <p className="mt-4 text-center text-slate-600">
              Explore our cleanroom and pharma solutions:{' '}
              <Link
                href="/products/cleanroom-solutions"
                className="text-primary hover:underline font-medium"
              >
                Cleanroom Panel Solutions
              </Link>{' '}
              |{' '}
              <Link
                href="/industries/pharma-chemical"
                className="text-primary hover:underline font-medium"
              >
                Pharma &amp; Chemical Industry Solutions
              </Link>
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6 — Technical Specifications + Certifications + Downloads
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Cleanroom Panel Technical Specifications
              </h2>

              <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                PHOENIXX cleanroom panels are manufactured to meet the stringent requirements of
                pharmaceutical, biotech, and electronics controlled environments. Below are the
                detailed specifications for our cleanroom panel range.
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
                      { label: 'Panel Thickness', value: '50mm, 60mm, 80mm, 100mm' },
                      { label: 'Core Material', value: 'PIR (B1 rated) or PUF (B2 rated)' },
                      { label: 'Foam Core Density', value: '40-45 kg/m³ (high-density rigid)' },
                      { label: 'Thermal Conductivity (λ)', value: '0.022-0.024 W/mK' },
                      { label: 'R-Value (at 50mm)', value: '2.27 m²K/W' },
                      { label: 'R-Value (at 80mm)', value: '3.64 m²K/W' },
                      { label: 'Joint System', value: 'Flush-mount concealed-fix (no exposed fasteners)' },
                      { label: 'Fire Classification', value: 'B1 self-extinguishing (PIR) / B2 (PUF)' },
                      { label: 'Exterior Facing', value: '0.50mm PPGI / SS 304 / SS 316 options' },
                      { label: 'Interior Facing', value: 'Food-safe coated steel / SS 304 / SS 316 (by ISO class)' },
                      { label: 'Surface Finish', value: 'Smooth, non-porous, Ra ≤ 0.8μm (SS option)' },
                      { label: 'Antimicrobial Coating', value: 'Optional — silver-ion or copper-based' },
                      { label: 'VOC Emission', value: 'Low outgassing certified (pharma-grade PIR)' },
                      { label: 'Cleanroom Compatibility', value: 'ISO Class 5 to ISO Class 8 (ISO 14644-1)' },
                      { label: 'Panel Width', value: '1000mm / 1150mm (effective coverage)' },
                      { label: 'Panel Length', value: 'Custom — up to 12 metres' },
                      { label: 'Integrated Accessories', value: 'HEPA modules, pass-boxes, doors, viewing windows, returns' },
                      { label: 'Service Life', value: '25+ years (with proper maintenance)' },
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

              {/* Certifications */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Cleanroom Compliance &amp; Certifications
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { std: 'WHO-GMP (Annex 2 & 6)', desc: 'Pharmaceutical manufacturing compliance' },
                    { std: 'ISO 14644-1:2015', desc: 'Cleanroom classification standard' },
                    { std: 'IS 14925:2015', desc: 'Indian Standard for sandwich panels' },
                    { std: 'ISO 9001:2015', desc: 'Quality Management System' },
                    { std: 'Fire Safety B1 (PIR)', desc: 'Self-extinguishing fire classification' },
                    { std: 'FDA-Compatible Surfaces', desc: 'Surface coatings compatible with FDA requirements' },
                    { std: 'CDSCO Audit Ready', desc: 'Documentation for Indian drug authority audits' },
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
                Explore our dedicated PIR panel range for fire-rated applications:{' '}
                <Link
                  href="/products/sandwich-panels/pir-panel"
                  className="text-primary hover:underline font-medium"
                >
                  PIR Insulated Sandwich Panels
                </Link>
              </p>

              {/* Downloads */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/resources/technical-sheet"
                  className="rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition-colors text-sm"
                >
                  📄 Download Cleanroom Panel Datasheet
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
            SECTION 7 — Pricing by ISO Class
        ═══════════════════════════════════════════════════════════ */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
                Cleanroom Panel Pricing Guide — By ISO Class
              </h2>

              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Cleanroom panel pricing varies significantly based on ISO classification, which
                  drives surface finish requirements and joint system complexity. Higher ISO classes
                  require stainless steel facings, pharma-grade sealants, and more precise
                  manufacturing tolerances. Below are indicative price ranges for 2026 across
                  common cleanroom classifications. For exact pricing tailored to your facility
                  layout and specifications, request a formal quotation from our cleanroom
                  engineering team.
                </p>
              </div>

              {/* Price Table by ISO Class */}
              <div className="mt-10 bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-700 text-white">
                      <th className="px-5 py-4 text-left font-semibold">ISO Class</th>
                      <th className="px-5 py-4 text-left font-semibold">Surface Finish</th>
                      <th className="px-5 py-4 text-left font-semibold">Price (per sq.m)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr className="bg-white">
                      <td className="px-5 py-4 font-semibold text-slate-900">ISO Class 8 (Packaging / General)</td>
                      <td className="px-5 py-4 text-slate-600">PPGI with PE coating</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹1,500 – ₹2,000</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-semibold text-slate-900">ISO Class 7 (Oral Dosage / API)</td>
                      <td className="px-5 py-4 text-slate-600">Food-safe coated PPGI</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹2,000 – ₹2,800</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-5 py-4 font-semibold text-slate-900">ISO Class 6 (Sterile / Biotech)</td>
                      <td className="px-5 py-4 text-slate-600">SS 304 or food-safe steel</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹2,800 – ₹3,500</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-5 py-4 font-semibold text-slate-900">ISO Class 5 (Injectable / Semiconductor)</td>
                      <td className="px-5 py-4 text-slate-600">SS 304/316 electropolished</td>
                      <td className="px-5 py-4 text-emerald-700 font-bold">₹3,500 – ₹4,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-center text-sm text-slate-500">
                Prices include flush-mount joint system. HEPA modules, cleanroom doors,
                pass-boxes, and HVAC integration quoted separately.
              </p>

              {/* Turnkey Cost Breakdown */}
              <div className="mt-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Turnkey Cleanroom Cost Breakdown (500 sq.m Facility)
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      component: 'Cleanroom Panels (Flush-Mount)',
                      cost: '₹12-25 lakh',
                      note: 'Varies by ISO class and surface finish',
                    },
                    {
                      component: 'HVAC & Air Handling Units',
                      cost: '₹20-45 lakh',
                      note: 'AHU, ducting, HEPA filters, controls',
                    },
                    {
                      component: 'Cleanroom Doors & Pass-Boxes',
                      cost: '₹5-12 lakh',
                      note: 'Interlocked doors, air showers, pass-through',
                    },
                    {
                      component: 'Flooring (Epoxy / PU / Vinyl)',
                      cost: '₹4-10 lakh',
                      note: 'Self-levelling epoxy or pharma-grade vinyl',
                    },
                    {
                      component: 'Electrical & BMS',
                      cost: '₹5-15 lakh',
                      note: 'Lighting, controls, environmental monitoring',
                    },
                    {
                      component: 'Validation & Documentation',
                      cost: '₹3-8 lakh',
                      note: 'IQ/OQ protocols, particle counts, certification',
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
                  Total Turnkey Range: ₹50 lakh – ₹1.5 crore (depending on ISO class, size, and HVAC complexity)
                </p>
              </div>

              <div className="mt-10 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-10 py-4 font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all text-lg"
                >
                  Get Your Cleanroom Panel Quote — Free &amp; No Obligation
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
              Cleanroom PUF Panel — Frequently Asked Questions
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
              Ready to Build Your Cleanroom with India&apos;s Trusted Panel Manufacturer?
            </h2>
            <p className="text-xl text-emerald-100 mb-4 max-w-2xl mx-auto">
              From ISO classification consulting to turnkey cleanroom installation, PHOENIXX
              SMARTBUILD delivers validated cleanroom projects that pass regulatory audits the
              first time. 100+ cleanrooms built. Pharmaceutical, biotech, semiconductor,
              medical devices. Get expert guidance today.
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
              <span className="bg-white/10 rounded-full px-4 py-1.5">100+ Cleanrooms</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">ISO Class 5-8</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">WHO-GMP Compliant</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">PIR B1 Fire Rated</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">Flush-Mount Joints</span>
              <span className="bg-white/10 rounded-full px-4 py-1.5">Pan-India Delivery</span>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                Get Cleanroom Panel Quote
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
