import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Chhatrapati Sambhajinagar | PHOENIXX',
  description: 'PUF panel manufacturer in Chhatrapati Sambhajinagar (Aurangabad), Maharashtra. Insulated panels for Waluj MIDC, Shendra MIDC & Chikalthana. Get quote!',
  keywords: ['PUF panel manufacturer in Aurangabad', 'PUF panel Chhatrapati Sambhajinagar', 'insulated panel Waluj MIDC', 'cold storage panel Marathwada'],
  alternates: { canonical: '/puf-panel-manufacturer-in-chhatrapati-sambhajinagar' },
};

const faqs = [
  { question: 'Who supplies PUF panels in Chhatrapati Sambhajinagar?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel supplier in Chhatrapati Sambhajinagar (formerly Aurangabad). We serve Waluj MIDC, Shendra MIDC, Chikalthana, and all industrial areas across the Marathwada region.' },
  { question: 'What industries in Aurangabad use PUF panels?', answer: 'Chhatrapati Sambhajinagar industries using PUF panels include automotive component manufacturers, pharmaceutical companies, food processing units, cold storage facilities, and engineering firms in the industrial belt.' },
  { question: 'Do you supply to Waluj and Shendra MIDC?', answer: 'Yes, PHOENIXX directly supplies PUF panels to Waluj MIDC, Shendra MIDC, Chikalthana Industrial Area, Delhi Mumbai Industrial Corridor (DMIC) zones, and all MIDC areas in the district.' },
  { question: 'What is PUF panel delivery time to Aurangabad?', answer: 'Standard delivery to Chhatrapati Sambhajinagar is 8-12 days. Express delivery available for urgent requirements. We have efficient logistics for Marathwada region.' },
  { question: 'What PUF panel thickness is available?', answer: 'PHOENIXX offers PUF panels in 30mm to 150mm thickness for Chhatrapati Sambhajinagar projects. Roofing panels (50-80mm), wall panels (40-60mm), and cold storage panels (100-150mm) are commonly used.' },
  { question: 'What is PUF panel price in Aurangabad region?', answer: 'PUF panel prices in the region range from ₹850 to ₹2,400 per sq. meter. Contact PHOENIXX for project-specific quotations with competitive Marathwada pricing.' },
];

const industrialAreas = ['Waluj MIDC', 'Shendra MIDC', 'Chikalthana Industrial Area', 'AURIC City (DMIC)', 'Paithan Industrial Area', 'Jalna Industrial Area', 'Bidkin Industrial Park', 'Sillod Industrial Zone'];

export default function AurangabadPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-orange-900 via-red-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 mb-6">📍 Serving Marathwada Industrial Region</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Chhatrapati Sambhajinagar</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild delivers premium PUF panels to Chhatrapati Sambhajinagar (Aurangabad) and Marathwada region. From Waluj MIDC to AURIC City, we serve the region&apos;s growing industrial ecosystem.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Aurangabad Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Marathwada&apos;s Industrial Growth</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Chhatrapati Sambhajinagar (formerly Aurangabad), the historic city and industrial hub of Marathwada, is experiencing rapid industrial growth with the Delhi Mumbai Industrial Corridor (DMIC) development. As a reliable <strong>PUF panel manufacturer in Chhatrapati Sambhajinagar</strong>, PHOENIXX SmartBuild supports this transformation with high-quality insulated panels.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> serve the region&apos;s automotive, pharmaceutical, and food processing industries. From established facilities in Waluj MIDC to new developments in AURIC City, our panels deliver reliable thermal insulation and energy efficiency.</p>
                <p>With supply capabilities spanning Shendra MIDC, Chikalthana, Paithan, and the broader Marathwada industrial belt, PHOENIXX is your trusted insulation partner for projects in this emerging industrial region.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for the Region</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'PUF Roofing Panels', description: 'Insulated roofing for MIDC factories and warehouses.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'PUF Wall Panels', description: 'Wall cladding for manufacturing and processing units.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for agri-cold storage.', link: '/solutions/cold-storage-construction' },
                { title: 'Industrial Shed Panels', description: 'Complete insulation for new industrial developments.', link: '/solutions/peb' },
                { title: 'Cleanroom Panels', description: 'GMP-compliant panels for pharma facilities.', link: '/products/cleanroom-solutions' },
                { title: 'PIR Fire-Rated Panels', description: 'Fire-resistant panels for sensitive applications.', link: '/products/sandwich-panels/pir-panel' },
              ].map((product, idx) => (
                <Link key={idx} href={product.link} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{product.title}</h3>
                  <p className="mt-2 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Serving entire Marathwada region including Jalna, Beed, and surrounding districts.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-orange-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose PHOENIXX for Marathwada</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'DMIC Ready', desc: 'Panels for new developments' },
                { title: 'Marathwada Coverage', desc: 'All districts served' },
                { title: 'Reliable Delivery', desc: '8-12 days standard' },
                { title: 'Quality Certified', desc: 'ISO-compliant products' },
                { title: 'Technical Support', desc: 'Expert guidance' },
                { title: 'Competitive Rates', desc: 'Best pricing' },
                { title: 'Greenfield Support', desc: 'New project expertise' },
                { title: '18+ Years', desc: 'Maharashtra experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-orange-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Automotive Component Manufacturing', 'Pharmaceutical Plants', 'Food Processing Units', 'Cold Storage & Warehouses', 'Engineering Factories', 'Textile Industries', 'Commercial Buildings', 'Agricultural Processing'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-orange-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Aurangabad Region</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Aurangabad Projects</h2>
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">Quality panels for Marathwada&apos;s industrial growth.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-700 shadow-lg hover:shadow-xl transition-all">Request Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Aurangabad" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

