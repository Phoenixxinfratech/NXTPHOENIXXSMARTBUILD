import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Jamnagar | PHOENIXX SmartBuild',
  description: 'Leading PUF panel manufacturer in Jamnagar, Gujarat. Insulated panels for refinery contractors, GIDC industries & cold storage. Get quote now!',
  keywords: ['PUF panel manufacturer in Jamnagar', 'PUF panel Jamnagar', 'insulated panel refinery', 'cold storage panel Jamnagar'],
  alternates: { canonical: '/puf-panel-manufacturer-in-jamnagar' },
};

const faqs = [
  { question: 'Who supplies PUF panels in Jamnagar?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel supplier in Jamnagar, serving the refinery corridor, Dared GIDC, Hapa Industrial Area, and surrounding regions with high-quality insulated panels for industrial and commercial applications.' },
  { question: 'What PUF panels are used in Jamnagar refineries?', answer: 'Refinery contractors in Jamnagar use PIR fire-rated panels for enhanced safety, along with standard PUF panels for non-critical areas. PHOENIXX supplies both PUF and PIR panels meeting refinery specifications.' },
  { question: 'Do you supply to Jamnagar SEZ and refinery projects?', answer: 'Yes, PHOENIXX supplies PUF and PIR panels to Jamnagar SEZ, refinery contractor projects, Essar area, and all major industrial zones with proper documentation and quality certifications.' },
  { question: 'What industries use PUF panels in Jamnagar?', answer: 'Jamnagar industries using PUF panels include refinery contractors, brass parts manufacturers, oil & gas facilities, cold storage operators, food processing units, and commercial building developers.' },
  { question: 'What is the cost of PUF panels in Jamnagar?', answer: 'PUF panel prices in Jamnagar range from ₹850 to ₹2,500 per sq. meter depending on specifications. PIR panels for refinery applications cost slightly more. Contact PHOENIXX for project-specific quotations.' },
  { question: 'How fast is delivery to Jamnagar?', answer: 'Standard delivery to Jamnagar is 8-12 days. For refinery and large industrial projects, we coordinate delivery schedules as per project requirements.' },
];

const industrialAreas = ['Dared GIDC', 'Hapa Industrial Area', 'Jamnagar SEZ', 'Reliance Refinery Corridor', 'Essar Industrial Area', 'Sikka Industrial Zone', 'Khambhalia Industrial Area', 'Bet Dwarka'];

export default function JamnagarPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-amber-900 via-yellow-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 mb-6">📍 Serving Jamnagar & Refinery Belt</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Jamnagar</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild supplies premium PUF and PIR panels to Jamnagar&apos;s industrial ecosystem – from world&apos;s largest refinery complex to brass industries and cold storage facilities.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-amber-500 to-yellow-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Jamnagar Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Jamnagar&apos;s Industrial Landscape</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Jamnagar, home to the world&apos;s largest oil refinery complex, represents a unique industrial ecosystem requiring specialized insulation solutions. As a reliable <strong>PUF panel manufacturer in Jamnagar</strong>, PHOENIXX SmartBuild serves the diverse needs of this industrial hub – from refinery contractor requirements to traditional brass industries.</p>
                <p>Our <Link href="/products/sandwich-panels/pir-panel" className="text-primary hover:underline">PIR fire-rated panels</Link> are particularly suited for Jamnagar&apos;s oil & gas sector, providing enhanced fire safety for refinery ancillary buildings. For general industrial applications, our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> deliver excellent thermal insulation for workshops, warehouses, and commercial buildings.</p>
                <p>With supply capability to Dared GIDC, Hapa Industrial Area, the refinery corridor, and Jamnagar SEZ, PHOENIXX is your complete insulation partner for projects in this strategic industrial region.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Jamnagar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'PIR Fire-Rated Panels', description: 'Enhanced fire safety panels for refinery and oil & gas applications.', link: '/products/sandwich-panels/pir-panel' },
                { title: 'PUF Roofing Panels', description: 'Insulated roofing for industrial sheds and warehouses.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for seafood and agri-storage.', link: '/solutions/cold-storage-construction' },
                { title: 'PUF Wall Panels', description: 'Wall cladding for manufacturing plants and workshops.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Industrial Building Panels', description: 'Complete insulation for factory buildings.', link: '/solutions/peb' },
                { title: 'Commercial Panels', description: 'Insulation for offices and commercial complexes.', link: '/products/sandwich-panels' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas in Jamnagar</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Also serving Dwarka, Porbandar, and coastal Gujarat region.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-amber-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Jamnagar Industries Trust PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Refinery Grade', desc: 'PIR panels for oil & gas' },
                { title: 'Fire Safety', desc: 'Enhanced fire-rated options' },
                { title: 'Certifications', desc: 'Documentation for projects' },
                { title: 'Coastal Climate', desc: 'Corrosion-resistant coatings' },
                { title: 'Large Projects', desc: 'Bulk supply capability' },
                { title: 'Timely Delivery', desc: '8-12 days to Jamnagar' },
                { title: 'Technical Support', desc: 'Expert guidance available' },
                { title: '18+ Years', desc: 'Gujarat market presence' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-amber-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Jamnagar</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Refinery Contractor Buildings', 'Oil & Gas Ancillary Facilities', 'Brass Parts Manufacturing Units', 'Cold Storage & Seafood Processing', 'Marine & Port Facilities', 'Commercial & Office Buildings', 'Warehouses & Logistics', 'Food Processing Plants'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-amber-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Jamnagar</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-amber-600 to-yellow-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Order PUF Panels for Jamnagar Projects</h2>
            <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">Quality panels for refinery, industrial, and commercial applications.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-amber-700 shadow-lg hover:shadow-xl transition-all">Request Jamnagar Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Jamnagar" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

