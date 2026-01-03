import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Nashik | PHOENIXX SmartBuild',
  description: 'Leading PUF panel manufacturer in Nashik, Maharashtra. Quality insulated panels for Ambad MIDC, Sinnar & wine industry cold storage. Get quote!',
  keywords: ['PUF panel manufacturer in Nashik', 'PUF panel Ambad MIDC', 'cold storage panel Nashik', 'insulated panel wine industry'],
  alternates: { canonical: '/puf-panel-manufacturer-in-nashik' },
};

const faqs = [
  { question: 'Who supplies PUF panels in Nashik?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel supplier in Nashik and North Maharashtra. We serve Ambad MIDC, Sinnar MIDC, Satpur MIDC, and all industrial areas with quality insulated panels.' },
  { question: 'What industries use PUF panels in Nashik?', answer: 'Nashik industries using PUF panels include wineries (cold storage), automotive component manufacturers, food & beverage processors, pharmaceutical units, and agricultural processing facilities.' },
  { question: 'Are PUF panels suitable for wine industry cold storage?', answer: 'Yes, PHOENIXX PUF panels are ideal for wine storage requiring precise temperature control (12-18°C). We supply 80-120mm panels for wine cellars and aging rooms with consistent thermal performance.' },
  { question: 'Do you supply to Ambad and Sinnar MIDC?', answer: 'Yes, PHOENIXX directly supplies to Ambad MIDC, Satpur MIDC, Sinnar MIDC, Malegaon Industrial Area, and all MIDC zones across Nashik district.' },
  { question: 'What is delivery time to Nashik?', answer: 'Standard delivery to Nashik is 6-9 days. Express delivery available for urgent requirements. Efficient logistics for entire North Maharashtra region.' },
  { question: 'What is PUF panel price in Nashik?', answer: 'PUF panel prices in Nashik range from ₹850 to ₹2,400 per sq. meter. Contact PHOENIXX for project-specific quotations with competitive North Maharashtra pricing.' },
];

const industrialAreas = ['Ambad MIDC', 'Satpur MIDC', 'Sinnar MIDC', 'Malegaon Industrial Area', 'Igatpuri Industrial Zone', 'Ozar Industrial Area', 'Dindori MIDC', 'Wine Belt Corridor'];

export default function NashikPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-purple-900 via-fuchsia-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 mb-6">📍 Serving Nashik & Wine Country</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Nashik</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild delivers premium PUF panels to Nashik&apos;s diverse industrial landscape. From wine cellars to automotive plants, we serve Maharashtra&apos;s wine capital with quality insulation solutions.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-purple-500 to-fuchsia-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Nashik Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Nashik&apos;s Growing Industries</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Nashik, known as India&apos;s wine capital and a major automotive manufacturing hub, requires specialized insulation solutions for its diverse industrial applications. As a dedicated <strong>PUF panel manufacturer in Nashik</strong>, PHOENIXX SmartBuild serves the region&apos;s unique needs from temperature-controlled wine storage to high-volume manufacturing facilities.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> are particularly suited for Nashik&apos;s wine industry, providing precise temperature control for wine cellars and aging rooms. For the automotive sector in Ambad and Satpur MIDC, our panels deliver reliable thermal insulation for manufacturing plants.</p>
                <p>With established supply to Ambad MIDC, Sinnar, Satpur, and the wine belt corridor, PHOENIXX is your complete insulation partner for projects across North Maharashtra.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Nashik</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Wine Storage Panels', description: 'Precise temperature control panels for wineries and cellars.', link: '/solutions/cold-storage-construction' },
                { title: 'Automotive Plant Panels', description: 'Insulation for car component manufacturing facilities.', link: '/solutions/peb' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for grapes and agri-produce.', link: '/solutions/cold-storage-construction' },
                { title: 'PUF Roofing Panels', description: 'Large-span roofing for industrial sheds.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'PUF Wall Panels', description: 'Wall cladding for factories and warehouses.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Cleanroom Panels', description: 'GMP-compliant panels for pharma facilities.', link: '/products/cleanroom-solutions' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas in Nashik We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Serving entire North Maharashtra including Dhule, Jalgaon, and Ahmednagar districts.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Nashik Industries Choose PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Wine Industry', desc: 'Cellar-grade panels' },
                { title: 'Automotive Focus', desc: 'Manufacturing solutions' },
                { title: 'Fast Delivery', desc: '6-9 days to Nashik' },
                { title: 'Quality Assured', desc: 'ISO-certified products' },
                { title: 'Temperature Control', desc: 'Precise insulation' },
                { title: 'Competitive Rates', desc: 'Best North MH pricing' },
                { title: 'Technical Support', desc: 'Expert guidance' },
                { title: '18+ Years', desc: 'Industry experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-purple-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Nashik</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Wineries & Wine Cellars', 'Automotive Component Factories', 'Grape Cold Storage', 'Food & Beverage Processing', 'Pharmaceutical Units', 'Agricultural Processing', 'Warehouses & Logistics', 'Commercial Buildings'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-purple-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Nashik</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-purple-600 to-fuchsia-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Nashik Projects</h2>
            <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto">Quality panels for wine country&apos;s diverse industries.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-purple-700 shadow-lg hover:shadow-xl transition-all">Request Nashik Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Nashik" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

