import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Dholera | PHOENIXX SmartBuild',
  description: 'PUF panel manufacturer in Dholera SIR, Gujarat. Insulated panels for smart city projects, industrial parks & greenfield developments. Get quote!',
  keywords: ['PUF panel manufacturer in Dholera', 'PUF panel Dholera SIR', 'insulated panel smart city', 'industrial panel Dholera'],
  alternates: { canonical: '/puf-panel-manufacturer-in-dholera' },
};

const faqs = [
  { question: 'Who supplies PUF panels for Dholera SIR projects?', answer: 'PHOENIXX SmartBuild is a leading PUF panel supplier for Dholera Special Investment Region (SIR) projects. We supply to industrial parks, manufacturing facilities, warehouses, and commercial developments in this emerging smart city.' },
  { question: 'What PUF panels are suitable for Dholera industrial parks?', answer: 'For Dholera\'s greenfield industrial projects, we recommend high-quality PUF roof panels (50-80mm), wall panels (40-60mm), and PIR panels for fire-sensitive applications. All panels meet smart city construction standards.' },
  { question: 'Can you supply large quantities for Dholera mega projects?', answer: 'Yes, PHOENIXX has manufacturing capacity to handle large-scale Dholera projects. We support industrial parks, logistics hubs, and smart manufacturing facilities with bulk supplies and coordinated deliveries.' },
  { question: 'What is the delivery time to Dholera SIR?', answer: 'Delivery to Dholera SIR is typically 4-7 days from Ahmedabad. For large projects, we arrange phased deliveries as per construction schedules. Express delivery available.' },
  { question: 'What applications use PUF panels in Dholera?', answer: 'Dholera projects using PUF panels include smart manufacturing facilities, logistics parks, electronics manufacturing, food processing zones, commercial complexes, and renewable energy installations.' },
  { question: 'Does PHOENIXX support greenfield construction in Dholera?', answer: 'Yes, PHOENIXX provides comprehensive support for greenfield projects in Dholera including design consultation, material specifications, phased delivery, and technical guidance for optimal panel installation.' },
];

const industrialAreas = ['Dholera SIR Activation Zone', 'Dholera Industrial Park', 'TATA Electronics Zone', 'Semiconductor Manufacturing Hub', 'Logistics & Warehousing Zone', 'Renewable Energy Corridor', 'Smart Manufacturing Zone', 'Commercial Development Area'];

export default function DholeraPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400 mb-6">📍 Building India&apos;s First Smart City</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Dholera</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild is your partner for Dholera SIR&apos;s smart industrial infrastructure. We supply premium PUF panels for manufacturing facilities, logistics parks, and commercial developments in India&apos;s first greenfield smart city.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Dholera Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Dholera Smart City Development</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Dholera Special Investment Region (SIR) represents India&apos;s most ambitious smart city project, attracting global investments in manufacturing, electronics, and logistics. As a forward-thinking <strong>PUF panel manufacturer in Dholera</strong>, PHOENIXX SmartBuild is positioned to support this transformational development with world-class insulation solutions.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> are ideal for Dholera&apos;s greenfield industrial parks, offering rapid construction, excellent thermal performance, and energy efficiency aligned with smart city sustainability goals. From electronics manufacturing facilities to large-scale logistics hubs, our panels meet the demanding requirements of modern industrial infrastructure.</p>
                <p>With proximity to Dholera and strong project execution capabilities, PHOENIXX is ready to support mega projects with bulk supplies, phased deliveries, and comprehensive technical support for this emerging industrial powerhouse.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Dholera Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Industrial Park Panels', description: 'Complete insulation solutions for smart manufacturing facilities.', link: '/solutions/peb' },
                { title: 'PUF Roofing Panels', description: 'Energy-efficient roofing for large industrial sheds.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for food & pharma logistics.', link: '/solutions/cold-storage-construction' },
                { title: 'Cleanroom Panels', description: 'Controlled environment panels for electronics manufacturing.', link: '/products/cleanroom-solutions' },
                { title: 'Warehouse Insulation', description: 'Panels for logistics parks and distribution centers.', link: '/products/sandwich-panels/wall-ceiling-panel' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Dholera Development Zones We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Supporting the entire Dholera SIR development spanning 920 sq. km.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-violet-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose PHOENIXX for Dholera Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Mega Project Ready', desc: 'Bulk supply capability' },
                { title: 'Smart City Grade', desc: 'Modern specifications' },
                { title: 'Quick Delivery', desc: '4-7 days from Ahmedabad' },
                { title: 'Greenfield Support', desc: 'Complete project assistance' },
                { title: 'Phased Delivery', desc: 'As per construction schedule' },
                { title: 'Technical Team', desc: 'On-site support available' },
                { title: 'Quality Assured', desc: 'ISO-certified panels' },
                { title: 'Competitive Rates', desc: 'Project-volume pricing' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-violet-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Dholera</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Electronics & Semiconductor Manufacturing', 'Smart Manufacturing Facilities', 'Logistics & Warehousing Parks', 'Renewable Energy Installations', 'Food Processing & Cold Storage', 'Commercial & IT Parks', 'Automotive Component Manufacturing', 'Defense & Aerospace Manufacturing'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-violet-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Dholera</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Partner for Dholera Smart City Projects</h2>
            <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">Premium panels for India&apos;s most ambitious industrial development.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 shadow-lg hover:shadow-xl transition-all">Request Dholera Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20for%20Dholera%20SIR%20project" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

