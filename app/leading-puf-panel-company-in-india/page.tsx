import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Leading PUF Panel Company in India | PHOENIXX SmartBuild',
  description: 'PHOENIXX SmartBuild is a leading PUF panel company in India. Premium insulated panels for industrial buildings, cold storage & warehouses nationwide.',
  keywords: ['leading PUF panel company in India', 'PUF panel company', 'insulated panels', 'industrial panels India'],
  alternates: {
    canonical: '/leading-puf-panel-company-in-india',
  },
};

const faqs = [
  {
    question: 'What makes PHOENIXX a leading PUF panel company in India?',
    answer: 'PHOENIXX SmartBuild has earned its position as a leading PUF panel company through 18+ years of industry experience, advanced manufacturing capabilities, consistent product quality, pan-India delivery network, and successful completion of 150+ industrial projects across diverse sectors.',
  },
  {
    question: 'What products does a leading PUF panel company offer?',
    answer: 'Leading companies like PHOENIXX offer a comprehensive range including PUF sandwich panels, PIR panels for enhanced fire safety, roofing panels, wall panels, cold room panels, and cleanroom panels – all manufactured with high-density foam and quality metal facings.',
  },
  {
    question: 'How does PHOENIXX ensure consistent quality as a leading company?',
    answer: 'PHOENIXX maintains quality through in-house manufacturing with continuous lamination technology, rigorous quality control at every stage, high-density foam (40 kg/m³), certified raw materials, and comprehensive testing before dispatch.',
  },
  {
    question: 'Does PHOENIXX serve all regions in India?',
    answer: 'Yes, as a leading PUF panel company, PHOENIXX serves clients across all major industrial regions in India including Gujarat, Maharashtra, Rajasthan, Tamil Nadu, Karnataka, Telangana, Andhra Pradesh, and more with reliable delivery and support.',
  },
  {
    question: 'What support does a leading PUF panel company provide?',
    answer: 'Leading companies provide comprehensive support including technical consultation, custom design assistance, thermal calculations, installation guidance, compliance documentation, and after-sales service for optimal panel performance.',
  },
];

export default function LeadingPufPanelCompanyPage() {
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
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                🌟 Trusted Industrial Infrastructure Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Leading PUF Panel Company in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild has established itself as a leading PUF panel company in India, 
                delivering innovative insulation solutions that power modern industrial infrastructure 
                from manufacturing plants to cold storage facilities.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Project Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                PHOENIXX SmartBuild – A Leading PUF Panel Company Transforming Indian Industry
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  As a <strong>leading PUF panel company in India</strong>, PHOENIXX SmartBuild has been at the 
                  forefront of the insulated panel industry, driving innovation and setting quality benchmarks 
                  that others aspire to match. Our journey began with a vision to provide Indian industries with 
                  world-class insulation solutions, and today we serve as trusted partners to some of the country&apos;s 
                  most prominent corporations.
                </p>
                <p>
                  What distinguishes PHOENIXX from other companies is our holistic approach to industrial infrastructure. 
                  We don&apos;t just manufacture panels – we provide complete solutions encompassing design consultation, 
                  technical engineering, manufacturing, delivery, and installation support. This end-to-end capability 
                  makes us the preferred choice for <Link href="/solutions/cold-storage-construction" className="text-primary hover:underline">cold storage projects</Link>, 
                  pharmaceutical facilities, and large-scale industrial developments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Areas of Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'PUF Sandwich Panels', desc: 'High-performance wall and roof panels', link: '/products/sandwich-panels/sandwich-puf-panel' },
                { title: 'PIR Fire-Rated Panels', desc: 'Enhanced fire safety solutions', link: '/products/sandwich-panels/pir-panel' },
                { title: 'Cold Storage Panels', desc: 'Temperature-controlled solutions', link: '/solutions/cold-storage-construction' },
                { title: 'Cleanroom Systems', desc: 'GMP-compliant environments', link: '/products/cleanroom-solutions' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What Drives Our Leadership
            </h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: 'Innovation',
                  description: 'Continuously investing in advanced manufacturing technology and product development to deliver superior insulation solutions.',
                  icon: '💡',
                },
                {
                  title: 'Quality First',
                  description: 'Uncompromising commitment to quality at every stage – from raw material selection to final product delivery.',
                  icon: '🎯',
                },
                {
                  title: 'Customer Success',
                  description: 'Dedicated to ensuring every project succeeds through technical expertise, reliable delivery, and responsive support.',
                  icon: '🤝',
                },
              ].map((value, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-5xl">{value.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-slate-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries & Applications */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Industries We Transform
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Pharmaceutical', desc: 'Cleanroom-grade panels for GMP facilities', link: '/industries/pharma-chemical' },
                { title: 'Food & Beverage', desc: 'Hygienic solutions for processing plants', link: '/industries/food-processing' },
                { title: 'Cold Chain', desc: 'Insulated panels for cold storage', link: '/solutions/cold-storage-construction' },
                { title: 'Warehousing', desc: 'Energy-efficient warehouse solutions', link: '/industries/warehousing' },
                { title: 'Manufacturing', desc: 'Industrial shed insulation', link: '/solutions/peb' },
                { title: 'Dairy Industry', desc: 'Temperature-controlled dairy facilities', link: '/industries/dairy' },
              ].map((industry, idx) => (
                <Link key={idx} href={industry.link} className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <h3 className="text-lg font-bold">{industry.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{industry.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Excellence */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Technical Excellence
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { label: 'Panel Thickness', value: '30mm – 150mm' },
                    { label: 'Foam Density', value: '40 ± 2 kg/m³' },
                    { label: 'Thermal Conductivity', value: '0.024 W/mK' },
                    { label: 'Max Panel Length', value: '20 meters' },
                    { label: 'Fire Rating Options', value: 'B1, B2, B3, PIR' },
                    { label: 'Service Life', value: '25-30 years' },
                  ].map((spec, idx) => (
                    <div key={idx} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                      <span className="text-slate-600">{spec.label}</span>
                      <span className="font-semibold text-slate-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-6 text-center">
                <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline font-medium">
                  View Complete Technical Specifications →
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with India&apos;s Leading PUF Panel Company
            </h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Experience industry-leading quality, innovation, and service for your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Get Project Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

