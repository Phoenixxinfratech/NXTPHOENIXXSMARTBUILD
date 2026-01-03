import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Industrial PUF Panel Manufacturer in India | PHOENIXX',
  description: 'Industrial PUF panel manufacturer in India. PHOENIXX provides heavy-duty insulated panels for factories, warehouses, manufacturing plants & industrial sheds.',
  keywords: ['industrial PUF panel manufacturer in India', 'factory insulation panels', 'industrial shed panels', 'warehouse panels'],
  alternates: {
    canonical: '/industrial-puf-panel-manufacturer-in-india',
  },
};

const faqs = [
  {
    question: 'What are industrial PUF panels used for?',
    answer: 'Industrial PUF panels are used for constructing factory buildings, manufacturing plants, warehouses, industrial sheds, processing facilities, and logistics centers. They provide thermal insulation, structural support, and weather protection for industrial infrastructure.',
  },
  {
    question: 'Why choose PUF panels for industrial buildings?',
    answer: 'PUF panels offer 40-60% faster construction compared to conventional methods, excellent thermal insulation for worker comfort and energy savings, lightweight yet strong structure, low maintenance, and 25-30 year service life – making them ideal for industrial applications.',
  },
  {
    question: 'What thickness is recommended for industrial applications?',
    answer: 'For industrial buildings in India, 50-60mm PUF panels are typically recommended for roofing and 40-50mm for walls. Higher thicknesses (80-100mm) are recommended for temperature-sensitive applications or regions with extreme climates.',
  },
  {
    question: 'Can industrial PUF panels withstand harsh environments?',
    answer: 'Yes, PHOENIXX industrial PUF panels are designed for harsh Indian industrial environments with features like corrosion-resistant coatings, UV stability, wind resistance (up to 120 km/h), and temperature tolerance from -40°C to +80°C.',
  },
  {
    question: 'How much can industrial PUF panels reduce energy costs?',
    answer: 'Industrial buildings with PUF panel insulation typically see 20-40% reduction in cooling/heating costs compared to non-insulated structures, resulting in significant operational savings over the building lifetime.',
  },
  {
    question: 'Does PHOENIXX handle large industrial projects?',
    answer: 'Yes, PHOENIXX has extensive experience handling large-scale industrial projects across India. Our manufacturing capacity, logistics network, and project management capabilities support projects of any scale with reliable delivery and technical support.',
  },
  {
    question: 'What fire safety options are available for industrial panels?',
    answer: 'PHOENIXX offers multiple fire safety options including standard PUF panels (Class E), PIR panels with enhanced fire resistance (Class B), and Rockwool panels for non-combustible applications – meeting various industrial fire safety requirements.',
  },
];

export default function IndustrialPufPanelManufacturerPage() {
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
        <section className="relative bg-gradient-to-br from-slate-800 via-zinc-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-zinc-500/10 px-4 py-2 text-sm font-medium text-zinc-400 mb-6">
                🏭 Heavy-Duty Industrial Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Industrial PUF Panel Manufacturer in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild manufactures robust PUF panels designed specifically for industrial 
                applications – from large-scale factories and warehouses to manufacturing plants and 
                processing facilities across India.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-zinc-500 to-slate-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Industrial Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Speak with Engineer
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Focus */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Purpose-Built Panels for Indian Industry
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  As a specialized <strong>industrial PUF panel manufacturer in India</strong>, PHOENIXX 
                  SmartBuild understands the unique demands of industrial construction. Our panels are 
                  engineered to withstand the rigors of factory environments, provide reliable thermal 
                  performance, and deliver the durability that industrial operations require.
                </p>
                <p>
                  From sprawling manufacturing facilities in <Link href="/industries/warehousing" className="text-primary hover:underline">Gujarat&apos;s industrial corridors</Link> to 
                  processing plants in Maharashtra, our industrial PUF panels have proven their worth in 
                  some of India&apos;s most demanding environments. We combine heavy-duty construction with 
                  advanced insulation technology to deliver panels that perform reliably for decades.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Applications */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Industrial Applications We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Manufacturing Plants',
                  description: 'Heavy machinery facilities requiring thermal comfort, noise reduction, and energy efficiency.',
                  icon: '🏭',
                  link: '/solutions/peb',
                },
                {
                  title: 'Warehouses & Logistics',
                  description: 'Large-span storage facilities with climate control and operational efficiency requirements.',
                  icon: '📦',
                  link: '/industries/warehousing',
                },
                {
                  title: 'Industrial Sheds',
                  description: 'Production workshops and assembly areas needing weather protection and worker comfort.',
                  icon: '🔧',
                  link: '/solutions/peb',
                },
                {
                  title: 'Processing Facilities',
                  description: 'Chemical, textile, and industrial processing units with specific temperature requirements.',
                  icon: '⚗️',
                  link: '/industries/pharma-chemical',
                },
                {
                  title: 'Automotive Plants',
                  description: 'Vehicle manufacturing and component assembly facilities with quality environment needs.',
                  icon: '🚗',
                  link: '/solutions/peb',
                },
                {
                  title: 'Heavy Engineering',
                  description: 'Large-scale fabrication and engineering workshops with specialized requirements.',
                  icon: '⚙️',
                  link: '/solutions/peb',
                },
              ].map((app, idx) => (
                <Link
                  key={idx}
                  href={app.link}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
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

        {/* Industrial Benefits */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-zinc-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Industry Leaders Choose PHOENIXX
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { stat: '40-60%', label: 'Faster Construction' },
                { stat: '20-40%', label: 'Energy Savings' },
                { stat: '25-30', label: 'Year Service Life' },
                { stat: '120 km/h', label: 'Wind Resistance' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-zinc-400">{item.stat}</div>
                  <div className="mt-2 text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Specifications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Industrial Panel Specifications
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Roofing Panels</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex justify-between"><span>Recommended Thickness:</span><span className="font-medium">50-80mm</span></li>
                  <li className="flex justify-between"><span>Profile:</span><span className="font-medium">Trapezoidal</span></li>
                  <li className="flex justify-between"><span>Max Span:</span><span className="font-medium">3-4 meters</span></li>
                  <li className="flex justify-between"><span>Slope Requirement:</span><span className="font-medium">5-7°</span></li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Wall Panels</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex justify-between"><span>Recommended Thickness:</span><span className="font-medium">40-60mm</span></li>
                  <li className="flex justify-between"><span>Profile:</span><span className="font-medium">Flat/Micro-rib</span></li>
                  <li className="flex justify-between"><span>Joint Type:</span><span className="font-medium">Tongue & Groove</span></li>
                  <li className="flex justify-between"><span>Fire Options:</span><span className="font-medium">B1/B2/PIR</span></li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-center">
              <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline font-medium">
                View Complete Technical Specifications →
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-zinc-700 to-slate-800 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Build Your Industrial Facility with PHOENIXX
            </h2>
            <p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto">
              Get expert engineering support and competitive pricing for your industrial project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-800 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Technical Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

