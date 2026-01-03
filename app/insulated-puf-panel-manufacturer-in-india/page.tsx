import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Insulated PUF Panel Manufacturer in India | PHOENIXX',
  description: 'Insulated PUF panel manufacturer in India. PHOENIXX delivers superior thermal insulation panels for cold storage, industrial & commercial buildings.',
  keywords: ['insulated PUF panel manufacturer in India', 'thermal insulation panels', 'insulated sandwich panels', 'PHOENIXX'],
  alternates: {
    canonical: '/insulated-puf-panel-manufacturer-in-india',
  },
};

const faqs = [
  {
    question: 'What is an insulated PUF panel?',
    answer: 'An insulated PUF panel is a pre-fabricated building material consisting of a rigid polyurethane foam (PUF) core bonded between two metal facings. The closed-cell foam provides excellent thermal insulation with a thermal conductivity as low as 0.024 W/mK, making it ideal for temperature-controlled environments.',
  },
  {
    question: 'How does insulated PUF panel insulation compare to traditional methods?',
    answer: 'PUF insulation offers superior performance: 50% better thermal efficiency than mineral wool, 70% better than fiberglass, integrated vapor barrier, faster installation, no settling or degradation over time, and consistent R-value throughout the panel life.',
  },
  {
    question: 'What R-value do PHOENIXX insulated panels provide?',
    answer: 'PHOENIXX PUF panels provide R-values ranging from R-7.5 (30mm) to R-37.5 (150mm), significantly higher than equivalent thickness of other insulation materials. This translates to better energy efficiency and lower operational costs.',
  },
  {
    question: 'Are insulated PUF panels suitable for cold storage?',
    answer: 'Yes, insulated PUF panels are the preferred choice for cold storage applications. Their excellent thermal conductivity (0.024 W/mK), moisture resistance, and airtight joints make them ideal for maintaining precise temperatures in chillers, freezers, and cold rooms.',
  },
  {
    question: 'How long does insulated PUF panel insulation last?',
    answer: 'High-quality insulated PUF panels from PHOENIXX maintain their thermal performance for 25-30 years. Unlike loose-fill insulation that settles or fiberglass that absorbs moisture, PUF foam retains its insulating properties throughout the building lifetime.',
  },
  {
    question: 'What thickness of insulated panel do I need?',
    answer: 'The required thickness depends on your application: 40-50mm for basic industrial insulation, 60-80mm for warehouses, 80-100mm for cold rooms (+2°C to +8°C), and 120-150mm for freezers (-18°C to -25°C). Our engineers can recommend optimal thickness based on thermal calculations.',
  },
];

export default function InsulatedPufPanelManufacturerPage() {
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
        <section className="relative bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 mb-6">
                🌡️ Superior Thermal Insulation
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Insulated PUF Panel Manufacturer in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild specializes in manufacturing high-performance insulated PUF panels 
                that deliver exceptional thermal efficiency, energy savings, and climate control for 
                industrial and commercial buildings across India.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Insulation Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Technical Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Insulation Excellence */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Excellence in Thermal Insulation Technology
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  As a dedicated <strong>insulated PUF panel manufacturer in India</strong>, PHOENIXX 
                  SmartBuild has mastered the science of thermal insulation. Our panels utilize closed-cell 
                  polyurethane foam technology that delivers the lowest thermal conductivity among common 
                  building insulation materials – ensuring maximum energy efficiency for your facility.
                </p>
                <p>
                  Every insulated panel we manufacture is designed to create a complete thermal envelope, 
                  eliminating thermal bridges and air infiltration that compromise building performance. 
                  Whether you&apos;re building a <Link href="/solutions/cold-storage-construction" className="text-primary hover:underline">cold storage facility</Link> that 
                  requires precise temperature control or an industrial plant seeking energy cost reduction, 
                  our insulated panels deliver measurable results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Insulation Performance */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Insulation Performance Comparison
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-slate-100">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-slate-900">Material</th>
                      <th className="px-6 py-4 text-left font-semibold text-slate-900">Thermal Conductivity</th>
                      <th className="px-6 py-4 text-left font-semibold text-slate-900">Thickness for R-20</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="bg-cyan-50">
                      <td className="px-6 py-4 font-semibold text-cyan-700">PUF Foam (PHOENIXX)</td>
                      <td className="px-6 py-4 text-cyan-700">0.024 W/mK</td>
                      <td className="px-6 py-4 text-cyan-700">80mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">PIR Foam</td>
                      <td className="px-6 py-4 text-slate-600">0.022 W/mK</td>
                      <td className="px-6 py-4 text-slate-600">75mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Mineral Wool</td>
                      <td className="px-6 py-4 text-slate-600">0.035-0.040 W/mK</td>
                      <td className="px-6 py-4 text-slate-600">130mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Fiberglass</td>
                      <td className="px-6 py-4 text-slate-600">0.040-0.045 W/mK</td>
                      <td className="px-6 py-4 text-slate-600">150mm</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">EPS (Thermocol)</td>
                      <td className="px-6 py-4 text-slate-600">0.035-0.038 W/mK</td>
                      <td className="px-6 py-4 text-slate-600">125mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Insulated Panel Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cold Storage & Freezers',
                  description: 'Critical thermal insulation for temperature-controlled facilities maintaining -40°C to +15°C.',
                  icon: '❄️',
                  link: '/solutions/cold-storage-construction',
                },
                {
                  title: 'Industrial Buildings',
                  description: 'Energy-efficient insulation for factories, warehouses, and manufacturing facilities.',
                  icon: '🏭',
                  link: '/solutions/peb',
                },
                {
                  title: 'Cleanroom Facilities',
                  description: 'Thermal stability and hygiene for pharmaceutical and electronics manufacturing.',
                  icon: '💊',
                  link: '/products/cleanroom-solutions',
                },
                {
                  title: 'Food Processing',
                  description: 'Hygienic insulated environments for food manufacturing and storage.',
                  icon: '🍖',
                  link: '/industries/food-processing',
                },
                {
                  title: 'Commercial Buildings',
                  description: 'Climate-controlled offices, retail spaces, and commercial complexes.',
                  icon: '🏢',
                  link: '/solutions/peb',
                },
                {
                  title: 'Dairy & Poultry',
                  description: 'Temperature-controlled facilities for dairy processing and poultry farms.',
                  icon: '🥛',
                  link: '/industries/dairy',
                },
              ].map((app, idx) => (
                <Link
                  key={idx}
                  href={app.link}
                  className="group bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <span className="text-4xl">{app.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{app.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Benefits of PHOENIXX Insulated Panels
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Superior R-Value', desc: 'Highest thermal resistance per inch of thickness' },
                { title: 'Energy Savings', desc: '20-40% reduction in cooling/heating costs' },
                { title: 'Integrated Vapor Barrier', desc: 'Built-in moisture protection' },
                { title: 'Airtight Joints', desc: 'Interlocking design eliminates air leakage' },
                { title: 'Lightweight', desc: 'Reduces structural load requirements' },
                { title: 'Fast Installation', desc: '40-60% faster than traditional methods' },
                { title: 'Long-lasting', desc: '25-30 year insulation performance' },
                { title: 'Eco-Friendly', desc: 'CFC & HFC free manufacturing' },
              ].map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="text-lg font-bold text-cyan-400">{benefit.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{benefit.desc}</p>
                </div>
              ))}
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Superior Insulation for Your Project
            </h2>
            <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">
              Maximize energy efficiency with PHOENIXX insulated PUF panels.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/products/sandwich-panels/sandwich-puf-panel"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                View Specifications
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

