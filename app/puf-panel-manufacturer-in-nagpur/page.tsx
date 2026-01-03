import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Nagpur | PHOENIXX SmartBuild',
  description: 'Trusted PUF panel manufacturer in Nagpur, Maharashtra. Quality insulated panels for Butibori MIDC, MIHAN & Vidarbha industries. Get best prices!',
  keywords: ['PUF panel manufacturer in Nagpur', 'PUF panel Butibori MIDC', 'insulated panel Vidarbha', 'cold storage panel Nagpur'],
  alternates: { canonical: '/puf-panel-manufacturer-in-nagpur' },
};

const faqs = [
  { question: 'Who is the leading PUF panel manufacturer in Nagpur?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel manufacturer serving Nagpur and Vidarbha region. We supply to Butibori MIDC, MIHAN SEZ, Hingna MIDC, and all industrial areas across Central India.' },
  { question: 'What industries use PUF panels in Nagpur?', answer: 'Nagpur industries using PUF panels include logistics & warehousing companies, food processing units, cold storage operators, pharmaceutical manufacturers, and engineering firms in the Vidarbha industrial belt.' },
  { question: 'Do you supply PUF panels to Butibori and MIHAN?', answer: 'Yes, PHOENIXX directly supplies to Butibori MIDC, MIHAN SEZ, Hingna MIDC, Kalmeshwar Industrial Area, and all MIDC zones in and around Nagpur.' },
  { question: 'What is delivery time to Nagpur?', answer: 'Standard delivery to Nagpur is 10-14 days. Express delivery available for urgent requirements. We have established logistics for Vidarbha region.' },
  { question: 'What PUF panel applications are common in Nagpur?', answer: 'Common applications include warehousing for e-commerce hubs, cold storage for oranges and agri-produce, manufacturing facilities, and commercial buildings in the MIHAN development zone.' },
  { question: 'What is PUF panel price in Nagpur?', answer: 'PUF panel prices in Nagpur range from ₹850 to ₹2,400 per sq. meter depending on specifications. Contact PHOENIXX for competitive Vidarbha region pricing.' },
];

const industrialAreas = ['Butibori MIDC', 'MIHAN SEZ', 'Hingna MIDC', 'Kalmeshwar Industrial Area', 'Wardha Road Industrial Belt', 'Kamptee Industrial Zone', 'Nagpur IT Park', 'Umred Industrial Area'];

export default function NagpurPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400 mb-6">📍 Serving Nagpur & Central India</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Nagpur</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild delivers premium PUF panels to India&apos;s geographic center. From Butibori MIDC to MIHAN SEZ, we serve Nagpur and Vidarbha region with quality insulation solutions.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Nagpur Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Central India&apos;s Logistics Hub</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Nagpur, the orange city and India&apos;s geographic center, has emerged as a major logistics and warehousing hub connecting North and South India. As a dedicated <strong>PUF panel manufacturer in Nagpur</strong>, PHOENIXX SmartBuild supports this strategic growth with high-quality insulated panels for warehousing, cold storage, and manufacturing applications.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> are ideal for Nagpur&apos;s large warehousing complexes, providing excellent thermal insulation in the region&apos;s extreme temperature variations. From e-commerce fulfillment centers in MIHAN to agri-cold storage in Butibori, our panels deliver reliable performance.</p>
                <p>With supply capabilities spanning Butibori MIDC, Hingna MIDC, MIHAN SEZ, and the broader Vidarbha industrial region, PHOENIXX is your trusted insulation partner for Central India projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Nagpur</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Warehouse Panels', description: 'Insulation for logistics and e-commerce fulfillment centers.', link: '/solutions/peb' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for agri-produce storage.', link: '/solutions/cold-storage-construction' },
                { title: 'PUF Roofing Panels', description: 'Large-span roofing for industrial buildings.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'PUF Wall Panels', description: 'Wall cladding for factories and warehouses.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Cleanroom Panels', description: 'Controlled environment panels for manufacturing.', link: '/products/cleanroom-solutions' },
                { title: 'Commercial Panels', description: 'Insulation for IT parks and offices.', link: '/products/sandwich-panels' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas in Nagpur We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Serving entire Vidarbha region including Wardha, Chandrapur, and Amravati districts.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-green-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Nagpur Industries Trust PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Logistics Focus', desc: 'Warehouse solutions' },
                { title: 'Vidarbha Coverage', desc: 'Complete regional supply' },
                { title: 'Climate Suitable', desc: 'For extreme temperatures' },
                { title: 'Quality Assured', desc: 'ISO-certified products' },
                { title: 'Technical Support', desc: 'Expert guidance' },
                { title: 'Competitive Rates', desc: 'Best Central India pricing' },
                { title: 'Reliable Delivery', desc: '10-14 days standard' },
                { title: '18+ Years', desc: 'Industry experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-green-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Nagpur</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Logistics & Warehousing Centers', 'E-commerce Fulfillment Hubs', 'Agri-Cold Storage Facilities', 'Food Processing Plants', 'Manufacturing Units', 'IT Parks & Commercial Buildings', 'Pharmaceutical Units', 'Textile & Engineering Factories'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-green-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Nagpur</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Nagpur Projects</h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">Quality panels for Central India&apos;s strategic hub.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all">Request Nagpur Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Nagpur" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

