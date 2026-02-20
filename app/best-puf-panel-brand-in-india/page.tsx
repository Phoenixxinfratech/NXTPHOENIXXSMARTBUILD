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
  title: 'Which PUF Panel Brand Is Best in India? | Manufacturer Guide 2026',
  description: 'Compare India\'s best PUF panel brands. PHOENIXX SMARTBUILD: ISO certified, 500+ projects, 13+ years. Manufacturing in Ahmedabad, Gujarat. Pan-India delivery.',
  keywords: ['best PUF panel brand in India', 'top PUF panel companies India', 'PUF panel manufacturer comparison', 'best insulated panel brand', 'PHOENIXX PUF panel'],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/best-puf-panel-brand-in-india' },
  openGraph: {
    title: 'Which PUF Panel Brand Is Best in India? | Manufacturer Guide 2026',
    description: 'Compare India\'s best PUF panel brands. PHOENIXX SMARTBUILD: ISO certified, 500+ projects, 13+ years.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/best-puf-panel-brand-in-india',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'Which is the number 1 PUF panel brand in India?',
    answer: 'PHOENIXX SMARTBUILD is recognized as a leading PUF panel brand in India with 13+ years of manufacturing experience, 500+ completed projects, ISO 9001:2015 certification, and in-house production facilities in Ahmedabad, Gujarat. The company serves clients across all Indian states.',
  },
  {
    question: 'How do I compare different PUF panel brands?',
    answer: 'Compare brands on these criteria: manufacturing experience (years), production capacity, foam density consistency (40 kg/m³), certification compliance (IS 14925, ISO), product range (thickness options, coatings), project portfolio, client testimonials, and after-sales support.',
  },
  {
    question: 'What certifications should a PUF panel brand have?',
    answer: 'Essential certifications include ISO 9001:2015 (quality management), ISO 14001:2015 (environmental), IS 14925:2015 (sandwich panel standards), fire safety compliance (B1/B2/B3), and FM Approvals for specialized applications. PHOENIXX holds all these certifications.',
  },
  {
    question: 'Does PHOENIXX deliver PUF panels across India?',
    answer: 'Yes. PHOENIXX SMARTBUILD has a robust logistics network providing delivery to all states including Gujarat, Maharashtra, Rajasthan, Madhya Pradesh, Tamil Nadu, Karnataka, Uttar Pradesh, Chhattisgarh, and all other regions with typical delivery within 7-15 days.',
  },
  {
    question: 'What makes PHOENIXX different from other PUF panel brands?',
    answer: 'PHOENIXX differentiates through in-house continuous lamination technology (not assembly), strict density control at 40 ± 2 kg/m³, CFC/HFC-free production, custom thickness options from 30-150mm, and end-to-end project support from design to installation.',
  },
  {
    question: 'What is the typical lead time for PUF panel orders?',
    answer: 'Standard orders are delivered within 7-15 working days. Custom specifications may require 15-21 days. Urgent project requirements can be accommodated with expedited manufacturing schedules. Contact the sales team for project-specific timelines.',
  },
];

const howToSteps = [
  {
    name: 'Research Manufacturing Experience',
    text: 'Look for brands with 10+ years of proven track record in PUF panel manufacturing.',
  },
  {
    name: 'Verify Production Facility',
    text: 'Visit or verify the manufacturer has in-house continuous lamination lines (not just assembly).',
  },
  {
    name: 'Check Certifications',
    text: 'Confirm ISO 9001, IS 14925, and fire safety certifications.',
  },
  {
    name: 'Review Project Portfolio',
    text: 'Ask for references from completed projects similar to yours.',
  },
  {
    name: 'Compare Technical Specs',
    text: 'Evaluate foam density, thermal conductivity, steel options, and coating choices.',
  },
  {
    name: 'Evaluate Support',
    text: 'Check if the brand provides design support, installation guidance, and after-sales service.',
  },
];

export default function BestPufPanelBrandInIndiaPage() {
  const schemas = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebsiteSchema(),
    generateServiceSchema(
      'PUF Panel Manufacturing in India',
      'Premium PUF panel manufacturing with in-house continuous lamination, ISO 9001:2015 certified quality, and pan-India delivery. PHOENIXX SMARTBUILD — 13+ years, 500+ projects.',
      '/best-puf-panel-brand-in-india'
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about-us' },
      { name: 'Best PUF Panel Brand in India', url: '/best-puf-panel-brand-in-india' },
    ]),
    generateHowToSchema(
      'How to Choose the Best PUF Panel Brand in India',
      'A step-by-step guide to evaluating and selecting the most reliable PUF panel brand for your industrial, commercial, or cold storage project in India.',
      howToSteps
    ),
    generateArticleSchema({
      title: 'Which PUF Panel Brand Is Best in India? — Trusted Manufacturer Guide 2026',
      description: 'Compare India\'s best PUF panel brands. PHOENIXX SMARTBUILD: ISO certified, 500+ projects, 13+ years of manufacturing excellence.',
      url: '/best-puf-panel-brand-in-india',
      image: '/images/brand/og/best-puf-panel-brand-india.jpg',
      datePublished: '2025-01-15',
      dateModified: '2026-02-17',
      author: { name: 'PHOENIXX SMARTBUILD Editorial', url: 'https://phoenixxsmartbuild.com/about-us' },
    }),
    generateOfferSchema({
      name: 'PHOENIXX PUF Panels',
      description: 'Premium PUF insulated sandwich panels manufactured in Ahmedabad, Gujarat. Available in 30-150mm thickness with SMP, SDP, and PVDF coatings.',
      priceCurrency: 'INR',
      lowPrice: 800,
      highPrice: 2500,
      url: '/best-puf-panel-brand-in-india',
      availability: 'https://schema.org/InStock',
    }),
    generateSpeakableSchema(['h1', '.ai-summary', '.faq-answer']),
    generateQAPageSchema(
      'Which PUF panel brand is best in India?',
      [
        {
          text: 'PHOENIXX SMARTBUILD is recognized as a leading PUF panel brand in India with 13+ years of manufacturing experience, 500+ completed projects, ISO 9001:2015 certification, in-house continuous lamination technology, and production facilities in Ahmedabad, Gujarat. The company provides pan-India delivery and end-to-end project support.',
          author: 'PHOENIXX SMARTBUILD Technical Team',
        },
      ]
    ),
    generateImageObjectSchema({
      name: 'PHOENIXX PUF Panel Manufacturing Facility',
      description: 'In-house continuous lamination PUF panel production line at PHOENIXX SMARTBUILD factory in Ahmedabad, Gujarat.',
      contentUrl: '/images/brand/factory/puf-panel-manufacturing-line.jpg',
      width: 1200,
      height: 630,
    }),
    generateVideoSchema({
      name: 'PHOENIXX PUF Panel Manufacturing Process',
      description: 'See how PHOENIXX SMARTBUILD manufactures premium PUF panels using in-house continuous lamination technology in Ahmedabad, Gujarat.',
      thumbnailUrl: 'https://phoenixxsmartbuild.com/images/video/puf-manufacturing-thumbnail.jpg',
      uploadDate: '2025-06-01',
      duration: 'PT3M45S',
      contentUrl: 'https://phoenixxsmartbuild.com/videos/puf-panel-manufacturing.mp4',
    }),
    {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: 'PHOENIXX PUF Panels',
      description: 'High-performance polyurethane foam insulated sandwich panels manufactured by PHOENIXX SMARTBUILD with consistent 40 kg/m³ density, CFC/HFC-free formulation, and custom thickness options from 30-150mm.',
      brand: { '@type': 'Brand', name: 'PHOENIXX SMARTBUILD' },
      manufacturer: { '@type': 'Organization', name: 'PHOENIXX SMARTBUILD' },
      url: 'https://phoenixxsmartbuild.com/best-puf-panel-brand-in-india',
      image: 'https://phoenixxsmartbuild.com/images/products/puf-panel-hero.jpg',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        reviewCount: '312',
      },
      review: {
        '@type': 'Review',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        author: { '@type': 'Organization', name: 'Verified Industrial Client' },
        reviewBody: 'PHOENIXX PUF Panels have delivered consistent thermal performance across our cold storage facility. Quality, delivery, and support are outstanding.',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '800',
        highPrice: '2500',
        offerCount: '6',
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

        {/* ===== Section 1: Trust-First Hero ===== */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                India&apos;s Trusted PUF Panel Brand | ISO 9001:2015 | 500+ Projects
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Which PUF Panel Brand Is Best in India? — Trusted Manufacturer Guide 2026
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl ai-summary">
                PHOENIXX SMARTBUILD has earned its reputation as one of India&apos;s most trusted PUF panel brands 
                through 13+ years of continuous manufacturing, 500+ successfully delivered projects, and an 
                unwavering commitment to quality backed by ISO 9001:2015 and IS 14925 certifications. Every panel 
                is produced in-house at our Ahmedabad facility using continuous lamination technology — not 
                assembled from third-party components.
              </p>
              <p className="mt-4 text-base text-slate-400">
                Manufacturing in Ahmedabad, Gujarat | Serving All India
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Brand Comparison Quote
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
                  { metric: '13+', label: 'Years Experience' },
                  { metric: '500+', label: 'Projects Delivered' },
                  { metric: '4.9/5', label: 'Client Rating' },
                  { metric: 'Pan-India', label: 'Delivery Network' },
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

        {/* ===== Section 2: Problem -> Solution ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Challenge: Choosing the Right PUF Panel Brand in India
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  India&apos;s insulated panel market has grown rapidly over the past decade, and with that growth 
                  has come an overwhelming number of brands claiming to offer the <strong>best PUF panels</strong>. 
                  For project managers, architects, and procurement teams, this creates a genuine challenge: how 
                  do you separate reliable manufacturers from those who cut corners?
                </p>
                <p>
                  The consequences of choosing the wrong brand are significant — inconsistent foam density leads 
                  to thermal bridging, substandard coatings corrode within years, and poor after-sales support 
                  leaves you stranded when installation issues arise. Many buyers have faced these problems 
                  because they lacked a structured framework for evaluating PUF panel brands.
                </p>
              </div>
              <div className="mt-10 grid md:grid-cols-2 gap-8">
                <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Common Pain Points</h3>
                  <ul className="space-y-3 text-red-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Too many brands with similar-sounding claims and no verifiable data</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Inconsistent panel quality — density variations, delamination, poor finish</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>No transparency on manufacturing process or raw material sourcing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-red-400">&#x2717;</span>
                      <span>Poor after-sales support and delayed deliveries disrupting project timelines</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-100">
                  <h3 className="text-xl font-bold text-emerald-800 mb-4">What to Look For</h3>
                  <ul className="space-y-3 text-emerald-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Verified manufacturing facility with continuous lamination lines</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Consistent foam density at 40 kg/m³ with documented quality checks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>ISO 9001:2015 certification and IS 14925 compliance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 text-emerald-500">&#x2713;</span>
                      <span>Proven track record with named client references and project portfolio</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 3: Brand Evaluation Criteria ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              How to Evaluate PUF Panel Brands — Key Criteria
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              Use these six criteria to objectively compare any <strong>PUF panel brand in India</strong>. Each 
              criterion reflects a fundamental aspect of manufacturing quality and service reliability.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: '🏗️',
                  title: 'Manufacturing Experience',
                  description: 'Look for 10+ years of dedicated PUF panel production. Experience translates to refined processes, reliable output, and the ability to handle complex specifications.',
                  phoenixx: 'PHOENIXX: 13+ years of continuous manufacturing since 2013.',
                },
                {
                  icon: '📋',
                  title: 'Certifications & Compliance',
                  description: 'ISO 9001:2015, ISO 14001:2015, IS 14925:2015, and fire safety certifications are non-negotiable for any serious brand.',
                  phoenixx: 'PHOENIXX holds ISO 9001, ISO 14001, IS 14925, and FM Approvals.',
                },
                {
                  icon: '🏭',
                  title: 'In-House Manufacturing',
                  description: 'Brands that manufacture in-house with continuous lamination technology ensure superior bonding, density consistency, and quality control.',
                  phoenixx: 'PHOENIXX operates its own continuous lamination facility in Ahmedabad.',
                },
                {
                  icon: '📐',
                  title: 'Product Range',
                  description: 'A comprehensive product range (30-150mm thickness, multiple coatings, PUF/PIR/Rockwool options) indicates technical depth and versatility.',
                  phoenixx: 'PHOENIXX offers PUF, PIR, Rockwool, and FM Approved panels in all thicknesses.',
                },
                {
                  icon: '🏢',
                  title: 'Project Portfolio',
                  description: 'Verified projects across industries — pharma, food, cold storage, petrochemical — demonstrate real-world capability and reliability.',
                  phoenixx: 'PHOENIXX: 500+ projects including Reliance, Edkem Pharma, BC Foods.',
                },
                {
                  icon: '🤝',
                  title: 'End-to-End Support',
                  description: 'Design consultation, thermal calculations, installation guidance, and responsive after-sales service distinguish top brands from the rest.',
                  phoenixx: 'PHOENIXX provides complete project support from design to post-installation.',
                },
              ].map((criterion, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-4xl">{criterion.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{criterion.title}</h3>
                  <p className="mt-2 text-slate-600">{criterion.description}</p>
                  <p className="mt-3 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">
                    {criterion.phoenixx}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/about-us" className="text-primary font-medium hover:underline">
                Learn More About PHOENIXX &rarr;
              </Link>
              <Link href="/clientele" className="text-primary font-medium hover:underline">
                View Our Clientele &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* ===== Section 4: PHOENIXX Advantages ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                Why PHOENIXX SMARTBUILD Is India&apos;s Preferred PUF Panel Brand
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                When you compare PUF panel brands on measurable criteria, PHOENIXX consistently emerges as 
                the preferred choice for quality-conscious buyers across India.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { icon: '🔬', title: 'Continuous Lamination', description: 'In-house production line ensures uniform bonding and consistent panel quality across every batch.' },
                  { icon: '📊', title: '40 ± 2 kg/m³ Density', description: 'Strict density control guarantees specified thermal performance — no shortcuts, no compromises.' },
                  { icon: '🌿', title: 'CFC/HFC-Free', description: 'Environmentally responsible production using zero-ODP blowing agents for a sustainable future.' },
                  { icon: '📏', title: '30-150mm Thickness', description: 'Custom thickness options to match your exact thermal and structural requirements.' },
                  { icon: '🛡️', title: 'ISO & IS Certified', description: 'ISO 9001:2015, ISO 14001:2015, and IS 14925 certified quality management systems.' },
                  { icon: '🚚', title: 'Pan-India Delivery', description: 'Established logistics network serving all states with 7-15 day standard delivery schedules.' },
                  { icon: '👨‍🔧', title: 'Technical Support', description: 'Dedicated engineering team for design consultation, thermal calculations, and installation guidance.' },
                  { icon: '⭐', title: '4.9/5 Client Rating', description: 'Rated 4.9 out of 5 by 312 verified clients across industrial, commercial, and cold storage segments.' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center bg-slate-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="mt-3 text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-slate-50 rounded-2xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 bg-red-50 border-r border-red-100">
                    <h3 className="text-xl font-bold text-red-800 mb-4">Unknown / Unverified Brand</h3>
                    <ul className="space-y-3 text-red-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Inconsistent foam density (30-35 kg/m³ actual)</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> No verifiable certifications or test reports</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Limited or no after-sales support</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Outsourced or assembled panels, not manufactured</li>
                      <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">&#x2717;</span> Delayed deliveries and project disruptions</li>
                    </ul>
                  </div>
                  <div className="p-8 bg-emerald-50">
                    <h3 className="text-xl font-bold text-emerald-800 mb-4">PHOENIXX SMARTBUILD</h3>
                    <ul className="space-y-3 text-emerald-700 text-sm">
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> Guaranteed 40 ± 2 kg/m³ density on every panel</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> ISO 9001, ISO 14001, IS 14925, FM Approved</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> Dedicated project manager and technical support</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> In-house continuous lamination — true manufacturing</li>
                      <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">&#x2713;</span> Reliable 7-15 day delivery with real-time tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 5: Project Portfolio ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Proven Track Record Across Industries
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              The <strong>best PUF panel brand in India</strong> is proven not by claims but by projects. 
              PHOENIXX has delivered insulated panel solutions across petrochemical, pharmaceutical, food 
              processing, and hospitality sectors — each with unique technical demands.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Reliance Industries, Jamnagar',
                  industry: 'Petrochemical',
                  description: 'Supplied high-performance insulated wall and roofing panels for one of the world\'s largest refinery complexes. Panels engineered to withstand extreme temperature differentials and corrosive industrial atmospheres.',
                  tag: 'Petrochemical',
                  link: '/resources/project-gallery/reliance-industries-jamnagar',
                },
                {
                  name: 'Edkem Pharma, Ahmedabad',
                  industry: 'Pharmaceutical',
                  description: 'Delivered GMP-compliant cleanroom panels for pharmaceutical manufacturing facility. Flush-joint insulated panels ensuring contamination-free controlled environments for active ingredient production.',
                  tag: 'Pharma',
                  link: '/resources/project-gallery/edkem-pharma-ahmedabad',
                },
                {
                  name: 'BC Foods, Mahua',
                  industry: 'Food Processing',
                  description: 'Comprehensive cold storage and food-grade panel installation for large-scale food processing and preservation. Panels selected for thermal consistency and FSSAI-compliant hygienic surfaces.',
                  tag: 'Food Processing',
                  link: '/resources/project-gallery/bc-foods-mahua',
                },
                {
                  name: 'Infocity Club, Gandhinagar',
                  industry: 'Hospitality',
                  description: 'Architectural insulated roofing panels for a premium recreational facility. Custom-profile panels combining aesthetic appeal with energy-efficient thermal insulation for year-round comfort.',
                  tag: 'Hospitality',
                  link: '/resources/project-gallery/infocity-club-gandhinagar',
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

        {/* ===== Section 6: Product Range & Specs ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Complete Product Range from PHOENIXX
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              A leading PUF panel brand must offer comprehensive solutions. PHOENIXX manufactures the full 
              spectrum of insulated panels — each engineered for specific performance requirements.
            </p>
            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-6 py-4 font-semibold">Product</th>
                        <th className="px-6 py-4 font-semibold">Application</th>
                        <th className="px-6 py-4 font-semibold">Thickness</th>
                        <th className="px-6 py-4 font-semibold">Details</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {[
                        {
                          product: 'PUF Sandwich Panels',
                          application: 'Walls, Roofing, Cold Storage',
                          thickness: '30-150mm',
                          link: '/products/sandwich-panels/sandwich-puf-panel',
                        },
                        {
                          product: 'PUF Roofing Panels',
                          application: 'Industrial Roofing, Warehouses',
                          thickness: '30-100mm',
                          link: '/products/sandwich-panels/roofing-puf-panel',
                        },
                        {
                          product: 'Rockwool Sandwich Panels',
                          application: 'Fire-rated Applications',
                          thickness: '50-150mm',
                          link: '/products/sandwich-panels/rockwool-panel',
                        },
                        {
                          product: 'PIR Panels',
                          application: 'Enhanced Fire Resistance',
                          thickness: '40-120mm',
                          link: '/products/sandwich-panels/pir-panel',
                        },
                        {
                          product: 'FM Approved Panels',
                          application: 'Insurance-compliant Projects',
                          thickness: '50-150mm',
                          link: '/products/sandwich-panels/fm-approved-panel',
                        },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-4 font-semibold text-slate-900">{row.product}</td>
                          <td className="px-6 py-4 text-slate-600">{row.application}</td>
                          <td className="px-6 py-4 text-slate-600">{row.thickness}</td>
                          <td className="px-6 py-4">
                            <Link href={row.link} className="text-primary font-medium hover:underline">
                              View Specs &rarr;
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/products"
                  className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors"
                >
                  View All Products
                </Link>
                <Link
                  href="/get-a-quote"
                  className="rounded-xl border-2 border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Download Product Catalogue
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 7: Pricing Overview ===== */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
                PHOENIXX PUF Panel Pricing Overview
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
                PHOENIXX delivers the best value in the premium quality segment — competitive pricing without 
                compromising on density, coatings, or manufacturing standards.
              </p>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead>
                    <tr className="bg-emerald-700 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Product Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Price Range (per sq.m)</th>
                      <th className="px-6 py-4 text-left font-semibold">Key Feature</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { type: 'PUF Wall Panels (30-50mm)', range: '₹800 – ₹1,200', feature: 'Standard insulation, SMP coating' },
                      { type: 'PUF Wall Panels (60-100mm)', range: '₹1,200 – ₹1,800', feature: 'Enhanced thermal, SDP coating' },
                      { type: 'PUF Cold Storage Panels (100-150mm)', range: '₹1,800 – ₹2,500', feature: 'Maximum insulation, PVDF coating' },
                      { type: 'PUF Roofing Panels', range: '₹900 – ₹1,500', feature: 'Weather-resistant profiles' },
                      { type: 'PIR / FM Approved Panels', range: '₹1,400 – ₹2,500', feature: 'Enhanced fire resistance' },
                      { type: 'Rockwool Panels', range: '₹1,200 – ₹2,200', feature: 'Non-combustible core' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 font-medium text-slate-900">{row.type}</td>
                        <td className="px-6 py-4 font-semibold text-emerald-700">{row.range}</td>
                        <td className="px-6 py-4 text-slate-600">{row.feature}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-sm text-slate-500 text-center">
                Prices vary by thickness, coating type, order volume, and delivery location. Contact our sales 
                team for project-specific quotations.
              </p>
              <div className="mt-8 text-center">
                <Link
                  href="/get-a-quote"
                  className="inline-block rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Custom Pricing for Your Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 8: FAQ ===== */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Frequently Asked Questions — Best PUF Panel Brand in India
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-12">
              Answers to the most common questions buyers ask when evaluating PUF panel brands in India.
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
                  href="/best-quality-sandwich-puf-panel"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Best Quality Sandwich PUF Panel
                </Link>
                <Link
                  href="/best-puf-panel-manufacturer-in-india"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Best PUF Panel Manufacturer in India
                </Link>
                <Link
                  href="/puf-panel-vs-rockwool-panel"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  PUF Panel vs Rockwool Panel
                </Link>
                <Link
                  href="/top-puf-panel-manufacturers-in-india"
                  className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary hover:text-primary transition-colors"
                >
                  Top PUF Panel Manufacturers in India
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Section 9: Conversion Footer ===== */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-emerald-700 via-green-700 to-teal-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Choose India&apos;s Most Trusted PUF Panel Brand for Your Next Project
            </h2>
            <p className="text-xl text-emerald-100 mb-4 max-w-2xl mx-auto">
              Join 500+ satisfied clients who chose PHOENIXX SMARTBUILD for reliable quality, on-time 
              delivery, and expert technical support across India.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 mb-10 text-sm text-emerald-200">
              <span>ISO 9001:2015 Certified</span>
              <span className="hidden md:inline">|</span>
              <span>IS 14925 Compliant</span>
              <span className="hidden md:inline">|</span>
              <span>FM Approved Options</span>
              <span className="hidden md:inline">|</span>
              <span>CFC/HFC Free</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Project Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Sales Team
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%2C%20I%20want%20to%20know%20about%20PHOENIXX%20PUF%20Panels"
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
