import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Vadodara | PHOENIXX SmartBuild',
  description: 'Trusted PUF panel manufacturer in Vadodara, Gujarat. High-quality insulated panels for Makarpura GIDC, Savli & Waghodia industries. Get free quote!',
  keywords: ['PUF panel manufacturer in Vadodara', 'PUF sandwich panel Vadodara', 'cold storage panel Vadodara', 'insulated panel Baroda'],
  alternates: {
    canonical: '/puf-panel-manufacturer-in-vadodara',
  },
};

const faqs = [
  {
    question: 'Who is the leading PUF panel manufacturer in Vadodara?',
    answer: 'PHOENIXX SmartBuild is a leading PUF panel manufacturer serving Vadodara (Baroda) and Central Gujarat. We supply to industries in Makarpura GIDC, Savli Industrial Area, Waghodia GIDC, and Halol with quality assurance and timely delivery.',
  },
  {
    question: 'What PUF panel products are available in Vadodara?',
    answer: 'PHOENIXX offers roofing panels, wall panels, cold storage panels, cleanroom panels, and PIR fire-rated panels in Vadodara. Thickness options range from 30mm to 150mm with multiple coating choices including SMP, SDP, and PVDF.',
  },
  {
    question: 'What industries use PUF panels in Vadodara?',
    answer: 'Vadodara industries using PUF panels include pharmaceutical companies, chemical manufacturers, engineering firms, food processing units, cold storage facilities, and automotive component manufacturers in the industrial belt.',
  },
  {
    question: 'Do you deliver PUF panels to Makarpura and Savli GIDC?',
    answer: 'Yes, PHOENIXX delivers PUF panels to all industrial areas in Vadodara including Makarpura GIDC, Savli Industrial Area, Waghodia GIDC, Halol Industrial Area, and the Vadodara-Halol industrial corridor.',
  },
  {
    question: 'What is the cost of PUF panels in Vadodara?',
    answer: 'PUF panel prices in Vadodara depend on thickness, coating, and quantity. Prices typically range from ₹850 to ₹2,400 per sq. meter. Contact PHOENIXX for detailed quotations specific to your Vadodara project.',
  },
  {
    question: 'How long does PUF panel delivery take to Vadodara?',
    answer: 'Standard delivery to Vadodara is 5-8 days for stock items. Custom specifications may take 10-14 days. Express delivery options are available for urgent industrial requirements.',
  },
];

const industrialAreas = [
  'Makarpura GIDC',
  'Savli Industrial Area',
  'Waghodia GIDC',
  'Halol Industrial Area',
  'Nandesari GIDC',
  'Padra Industrial Area',
  'Manjusar GIDC',
  'Por Industrial Area',
];

export default function VadodaraPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-900 via-rose-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-red-500/10 px-4 py-2 text-sm font-medium text-red-400 mb-6">
                📍 Serving Vadodara & Central Gujarat
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Panel Manufacturer in Vadodara
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild delivers premium PUF panels to Vadodara&apos;s thriving industrial sector. 
                From Makarpura GIDC to Halol corridor, we serve Central Gujarat&apos;s pharmaceutical, chemical, 
                and manufacturing industries with superior insulation solutions.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-red-500 to-rose-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">
                  Get Vadodara Quote
                </Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">
                  📞 Call: +91 93289 15237
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Quality PUF Panels for Vadodara&apos;s Industrial Growth
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Vadodara (Baroda), the cultural capital of Gujarat, has emerged as a major industrial hub 
                  with a strong presence of pharmaceutical, chemical, and engineering companies. As a 
                  reliable <strong>PUF panel manufacturer in Vadodara</strong>, PHOENIXX SmartBuild supports 
                  this industrial growth by providing high-quality insulated panels designed for optimal 
                  thermal performance.
                </p>
                <p>
                  Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> serve 
                  Vadodara&apos;s diverse industrial needs – from temperature-controlled pharmaceutical manufacturing 
                  facilities to large warehousing complexes along the Mumbai-Delhi industrial corridor. We understand 
                  the specific requirements of Central Gujarat industries and deliver solutions that enhance 
                  operational efficiency.
                </p>
                <p>
                  With proximity to Vadodara and direct supply to Makarpura GIDC, Savli, Waghodia, and Halol 
                  industrial areas, PHOENIXX ensures reliable delivery and comprehensive support for all your 
                  insulation projects in the Baroda region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              PUF Panel Solutions for Vadodara
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'PUF Roofing Panels', description: 'Insulated roofing for factories and warehouses in Vadodara industrial belt.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'PUF Wall Panels', description: 'Wall cladding solutions for pharmaceutical and chemical plants.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Cold Storage Panels', description: 'High-performance panels for cold chain facilities in Vadodara.', link: '/solutions/cold-storage-construction' },
                { title: 'Cleanroom Panels', description: 'GMP-compliant panels for pharma manufacturing units.', link: '/products/cleanroom-solutions' },
                { title: 'PIR Fire-Rated Panels', description: 'Fire-resistant panels for chemical and hazardous material facilities.', link: '/products/sandwich-panels/pir-panel' },
                { title: 'Warehouse Insulation', description: 'Complete insulation solutions for logistics hubs.', link: '/solutions/peb' },
              ].map((product, idx) => (
                <Link key={idx} href={product.link} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="mt-2 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Areas */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Industrial Areas We Serve in Vadodara
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-4 text-center">
                  <span className="font-medium text-slate-700">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate-600">
              Also serving Anand, Kheda, Dahod, and Panchmahal districts.
            </p>
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-red-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Vadodara Industries Trust PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Fast Delivery', desc: '5-8 days to Vadodara' },
                { title: 'Pharma Expertise', desc: 'GMP-compliant solutions' },
                { title: 'Local Support', desc: 'Technical team for Central Gujarat' },
                { title: 'Quality Certified', desc: 'ISO-compliant manufacturing' },
                { title: 'Custom Panels', desc: 'As per project specifications' },
                { title: 'Competitive Rates', desc: 'Best pricing for Baroda' },
                { title: '18+ Years', desc: 'Gujarat market experience' },
                { title: 'Complete Range', desc: '30mm to 150mm thickness' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-red-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Vadodara</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                'Pharmaceutical Manufacturing Plants',
                'Chemical Processing Units',
                'Engineering & Auto Component Factories',
                'Food & Beverage Processing',
                'Cold Storage & Warehouses',
                'Cleanroom & Controlled Environments',
                'Textile & Garment Industries',
                'Commercial & IT Buildings',
              ].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <span className="text-red-500">✓</span>
                  <span className="text-slate-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Vadodara</h2>
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

        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-red-600 to-rose-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Order PUF Panels for Vadodara Projects</h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">Premium quality panels with reliable delivery across Central Gujarat.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-red-700 shadow-lg hover:shadow-xl transition-all">Request Vadodara Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Vadodara" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

