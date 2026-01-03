import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Top PUF Panel Manufacturers in India | PHOENIXX SmartBuild',
  description: 'Discover top PUF panel manufacturers in India. PHOENIXX SmartBuild offers superior quality insulated panels with pan-India delivery & installation.',
  keywords: ['top PUF panel manufacturers in India', 'PUF panel manufacturers', 'insulated panel suppliers', 'PHOENIXX'],
  alternates: {
    canonical: '/top-puf-panel-manufacturers-in-india',
  },
};

const faqs = [
  {
    question: 'What are the top PUF panel manufacturers in India?',
    answer: 'PHOENIXX SmartBuild ranks among the top PUF panel manufacturers in India, known for high-quality manufacturing, consistent product quality, customization capabilities, and reliable pan-India delivery for industrial and commercial projects.',
  },
  {
    question: 'How do I evaluate top PUF panel manufacturers?',
    answer: 'Evaluate manufacturers based on: manufacturing facility quality, foam density (40 kg/m³ recommended), thermal conductivity values, customization options, delivery reliability, installation support, certifications, and customer references from completed projects.',
  },
  {
    question: 'What capacity do top manufacturers like PHOENIXX offer?',
    answer: 'PHOENIXX has substantial manufacturing capacity to handle large-scale industrial projects, with the ability to produce custom panel lengths up to 20 meters, multiple thickness options, and various coating specifications simultaneously.',
  },
  {
    question: 'Do top PUF panel manufacturers provide technical support?',
    answer: 'Yes, reputable manufacturers like PHOENIXX provide comprehensive technical support including design consultation, thermal load calculations, installation guidance, and after-sales service to ensure optimal panel performance.',
  },
  {
    question: 'What industries do top PUF panel manufacturers serve?',
    answer: 'Top manufacturers serve diverse industries including cold storage, food processing, pharmaceuticals, warehousing, industrial manufacturing, cleanrooms, prefabricated buildings, and commercial construction across India.',
  },
  {
    question: 'How quickly can top manufacturers deliver PUF panels?',
    answer: 'Leading manufacturers like PHOENIXX typically deliver standard panels within 7-14 days and custom specifications within 14-21 days, depending on order quantity and project location across India.',
  },
  {
    question: 'What quality certifications should top manufacturers have?',
    answer: 'Top PUF panel manufacturers should have ISO certification, fire safety compliance documentation, thermal performance certificates, and material test reports. PHOENIXX provides complete compliance documentation for all projects.',
  },
];

export default function TopPufPanelManufacturersPage() {
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
        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 mb-6">
                🏅 Trusted by 100+ Companies Across India
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Top PUF Panel Manufacturers in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild stands among India&apos;s top PUF panel manufacturers, delivering 
                consistent quality, reliable service, and engineering excellence for industrial 
                infrastructure projects nationwide.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Project Quote
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

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                PHOENIXX SmartBuild – Among India&apos;s Top PUF Panel Manufacturers
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  When searching for <strong>top PUF panel manufacturers in India</strong>, industry professionals 
                  consistently recognize PHOENIXX SmartBuild for our unwavering commitment to quality, innovation, 
                  and customer service. With advanced manufacturing infrastructure and a dedicated team of engineers, 
                  we have earned the trust of leading companies across pharmaceuticals, food processing, logistics, 
                  and industrial sectors.
                </p>
                <p>
                  Our manufacturing facility utilizes state-of-the-art continuous lamination technology, ensuring 
                  uniform foam distribution, precise thickness control, and consistent panel quality across every 
                  production batch. This technological edge, combined with our extensive experience across 150+ 
                  successful projects, positions us among the most reliable <Link href="/products/sandwich-panels" className="text-primary hover:underline">insulated panel suppliers</Link> in India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Top Manufacturers Apart */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 text-center">
              What Distinguishes Top PUF Panel Manufacturers
            </h2>
            <p className="text-xl text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Understanding key differentiators helps you select the right manufacturing partner for your project.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Manufacturing Excellence',
                  description: 'Advanced production lines with continuous lamination technology ensure consistent foam density, adhesion quality, and dimensional accuracy in every panel.',
                  icon: '🏭',
                },
                {
                  title: 'Quality Assurance Systems',
                  description: 'Rigorous testing protocols for raw materials, in-process quality checks, and final product verification before dispatch.',
                  icon: '✅',
                },
                {
                  title: 'Technical Expertise',
                  description: 'Experienced engineering teams providing design support, thermal calculations, and application-specific recommendations.',
                  icon: '👷',
                },
                {
                  title: 'Customization Capability',
                  description: 'Flexibility to manufacture panels in custom thicknesses, lengths, coatings, and configurations for project-specific requirements.',
                  icon: '⚙️',
                },
                {
                  title: 'Reliable Supply Chain',
                  description: 'Efficient logistics and inventory management ensuring timely delivery to project sites across India.',
                  icon: '🚛',
                },
                {
                  title: 'After-Sales Support',
                  description: 'Installation guidance, technical troubleshooting, and long-term support for optimal panel performance.',
                  icon: '🤝',
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Industries Served by Top Manufacturers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Cold Storage Facilities', link: '/solutions/cold-storage-construction', desc: 'Temperature-controlled warehouses and cold rooms' },
                { name: 'Pharmaceutical Plants', link: '/industries/pharma-chemical', desc: 'GMP-compliant manufacturing facilities' },
                { name: 'Food Processing Units', link: '/industries/food-processing', desc: 'Hygienic processing environments' },
                { name: 'Warehouse & Logistics', link: '/industries/warehousing', desc: 'Distribution centers and storage facilities' },
                { name: 'Industrial Manufacturing', link: '/solutions/peb', desc: 'Factories and production plants' },
                { name: 'Cleanroom Construction', link: '/products/cleanroom-solutions', desc: 'Controlled environment facilities' },
              ].map((industry, idx) => (
                <Link
                  key={idx}
                  href={industry.link}
                  className="flex items-center gap-4 p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-primary transition-colors">{industry.name}</h3>
                    <p className="text-sm text-slate-600">{industry.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* PHOENIXX Advantage */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              The PHOENIXX Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { stat: '18+', label: 'Years Experience' },
                { stat: '150+', label: 'Projects Completed' },
                { stat: '100+', label: 'Satisfied Clients' },
                { stat: 'Pan-India', label: 'Delivery Network' },
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="text-5xl font-bold text-blue-400">{item.stat}</div>
                  <div className="mt-2 text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Technical Capabilities
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Panel Specifications</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex justify-between"><span>Thickness Range:</span><span className="font-medium">30-150mm</span></li>
                  <li className="flex justify-between"><span>Panel Length:</span><span className="font-medium">Up to 20m</span></li>
                  <li className="flex justify-between"><span>Foam Density:</span><span className="font-medium">40 ± 2 kg/m³</span></li>
                  <li className="flex justify-between"><span>Thermal Conductivity:</span><span className="font-medium">0.024 W/mK</span></li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Available Options</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex justify-between"><span>Steel Thickness:</span><span className="font-medium">0.40-0.60mm</span></li>
                  <li className="flex justify-between"><span>Coatings:</span><span className="font-medium">SMP, SDP, PVDF</span></li>
                  <li className="flex justify-between"><span>Fire Ratings:</span><span className="font-medium">B1, B2, B3, PIR</span></li>
                  <li className="flex justify-between"><span>Colors:</span><span className="font-medium">RAL Standard</span></li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center">
              <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline font-medium">
                View Complete Product Specifications →
              </Link>
            </p>
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with a Top PUF Panel Manufacturer
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Experience the PHOENIXX difference – quality products, reliable delivery, and expert support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Speak with Technical Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

