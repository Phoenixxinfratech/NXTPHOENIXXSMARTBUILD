import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panels Manufacturer India | PHOENIXX SmartBuild',
  description: 'PUF panels manufacturer India. PHOENIXX SmartBuild delivers quality polyurethane foam panels for industrial, commercial & cold storage applications.',
  keywords: ['PUF panels manufacturer India', 'polyurethane panels', 'PUF panel supplier', 'PHOENIXX SmartBuild'],
  alternates: {
    canonical: '/puf-panels-manufacturer-india',
  },
};

const faqs = [
  {
    question: 'Who is the reliable PUF panels manufacturer in India?',
    answer: 'PHOENIXX SmartBuild is a trusted PUF panels manufacturer in India with 18+ years of experience, 150+ completed projects, and manufacturing facilities equipped with advanced continuous lamination technology for consistent quality production.',
  },
  {
    question: 'What types of PUF panels does PHOENIXX manufacture?',
    answer: 'PHOENIXX manufactures a comprehensive range including roofing panels, wall panels, cold room panels, cleanroom panels, and fire-rated PIR panels. All panels are available in various thicknesses from 30mm to 150mm with customization options.',
  },
  {
    question: 'What is the manufacturing process for PUF panels?',
    answer: 'PUF panels are manufactured using continuous lamination technology: pre-treated steel coils are fed into the line, polyurethane foam is injected between the metal facings, the foam expands and cures, panels are cut to length, and quality checks are performed before packaging.',
  },
  {
    question: 'What quality standards does PHOENIXX follow?',
    answer: 'PHOENIXX follows strict quality standards including ISO certification, high-density foam (40 kg/m³), thermal conductivity testing, adhesion strength verification, dimensional accuracy checks, and CFC/HFC-free manufacturing for environmental compliance.',
  },
  {
    question: 'Does PHOENIXX deliver PUF panels across India?',
    answer: 'Yes, PHOENIXX has an established pan-India delivery network serving all major industrial regions including Gujarat, Maharashtra, Rajasthan, Tamil Nadu, Karnataka, Telangana, West Bengal, and other states with reliable logistics.',
  },
  {
    question: 'What is the lead time for PUF panel orders?',
    answer: 'Standard panel specifications are typically delivered within 7-14 days. Custom specifications may require 14-21 days depending on complexity and quantity. Contact us for project-specific delivery schedules.',
  },
];

export default function PufPanelsManufacturerIndiaPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 mb-6">
                🇮🇳 Made in India | For India
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Panels Manufacturer India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild is your trusted PUF panels manufacturer in India, delivering 
                high-quality insulated panels engineered for Indian climate conditions and industrial 
                requirements with nationwide manufacturing and delivery capabilities.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Contact Factory
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About PHOENIXX */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                PHOENIXX SmartBuild – Your PUF Panels Partner in India
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  PHOENIXX SmartBuild has established itself as a premier <strong>PUF panels manufacturer in India</strong>, 
                  serving the growing demand for high-performance insulated building materials across the nation. 
                  Our manufacturing facility combines advanced technology with skilled craftsmanship to produce 
                  panels that meet international quality standards while being optimized for Indian conditions.
                </p>
                <p>
                  With over 18 years of industry experience, we have developed deep expertise in understanding 
                  the unique requirements of Indian industries – from the extreme heat of Rajasthan to the 
                  humidity of coastal regions. Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF panels</Link> are 
                  engineered to perform reliably across all Indian climate zones, delivering consistent thermal 
                  performance and durability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Capabilities */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Manufacturing Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Advanced Production Line',
                  description: 'Continuous lamination technology ensures uniform foam distribution and consistent panel quality throughout production runs.',
                  icon: '🏭',
                },
                {
                  title: 'Quality Raw Materials',
                  description: 'Premium-grade polyurethane foam systems and high-quality pre-painted galvanized steel from certified suppliers.',
                  icon: '✅',
                },
                {
                  title: 'Customization Flexibility',
                  description: 'Ability to produce panels in custom thicknesses, lengths, colors, and coating specifications for diverse project needs.',
                  icon: '⚙️',
                },
                {
                  title: 'Large Production Capacity',
                  description: 'High-volume manufacturing capability to handle large industrial projects with reliable delivery schedules.',
                  icon: '📊',
                },
                {
                  title: 'Quality Testing Lab',
                  description: 'In-house testing facilities for foam density, thermal conductivity, adhesion strength, and dimensional accuracy.',
                  icon: '🔬',
                },
                {
                  title: 'Pan-India Logistics',
                  description: 'Efficient distribution network ensuring timely delivery to project sites across all Indian states.',
                  icon: '🚛',
                },
              ].map((cap, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <span className="text-4xl">{cap.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{cap.title}</h3>
                  <p className="mt-2 text-slate-600">{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Range */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our PUF Panel Product Range
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'PUF Roof Panels', link: '/products/sandwich-panels/roofing-puf-panel', desc: 'Trapezoidal profile for roofing' },
                { title: 'PUF Wall Panels', link: '/products/sandwich-panels/wall-ceiling-panel', desc: 'Flat profile for walls & ceilings' },
                { title: 'PIR Fire Panels', link: '/products/sandwich-panels/pir-panel', desc: 'Enhanced fire resistance' },
                { title: 'Cold Room Panels', link: '/solutions/cold-storage-construction', desc: 'High-thickness for cold storage' },
              ].map((product, idx) => (
                <Link
                  key={idx}
                  href={product.link}
                  className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all text-center"
                >
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm">{product.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Regions Served */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Serving Industries Across India
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {[
                { region: 'Western India', states: 'Gujarat, Maharashtra, Rajasthan, Goa' },
                { region: 'Southern India', states: 'Tamil Nadu, Karnataka, Kerala, Telangana, AP' },
                { region: 'Northern India', states: 'Delhi NCR, Haryana, Punjab, UP' },
                { region: 'Eastern India', states: 'West Bengal, Odisha, Bihar, Jharkhand' },
              ].map((region, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-bold text-green-400">{region.region}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{region.states}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Technical Specifications
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { label: 'Thickness Range', value: '30mm – 150mm' },
                  { label: 'Panel Length', value: 'Up to 20 meters' },
                  { label: 'Foam Density', value: '40 ± 2 kg/m³' },
                  { label: 'Thermal Conductivity', value: '0.024 W/mK' },
                  { label: 'Steel Options', value: '0.40 – 0.60mm PPGI' },
                  { label: 'Coatings', value: 'SMP, SDP, PVDF' },
                ].map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-200">
                    <span className="text-slate-600">{spec.label}</span>
                    <span className="font-semibold text-slate-900">{spec.value}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center">
                <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline font-medium">
                  View Complete Specifications →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Quality PUF Panels from India&apos;s Trusted Manufacturer
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Reliable quality, competitive pricing, and pan-India delivery for your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Factory
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

