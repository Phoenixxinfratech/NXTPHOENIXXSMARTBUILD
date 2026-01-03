import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Vapi | PHOENIXX SmartBuild',
  description: 'Trusted PUF panel manufacturer in Vapi, Gujarat. Quality insulated panels for Vapi GIDC, chemical industries & pharma units. Best prices guaranteed!',
  keywords: ['PUF panel manufacturer in Vapi', 'PUF panel Vapi GIDC', 'insulated panel Vapi', 'cold storage panel South Gujarat'],
  alternates: { canonical: '/puf-panel-manufacturer-in-vapi' },
};

const faqs = [
  { question: 'Who is the best PUF panel manufacturer for Vapi GIDC?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel manufacturer serving Vapi GIDC and South Gujarat chemical belt. We supply to pharmaceutical, chemical, and food processing industries with panels meeting stringent quality requirements.' },
  { question: 'What PUF panels are suitable for Vapi chemical industries?', answer: 'For Vapi\'s chemical and pharma industries, we recommend PIR panels for fire safety, chemical-resistant coatings, and cleanroom-grade panels for pharmaceutical applications. Standard PUF panels work well for warehousing and general industrial use.' },
  { question: 'Do you supply PUF panels to Vapi, Valsad, and Silvassa?', answer: 'Yes, PHOENIXX supplies PUF panels throughout the South Gujarat industrial belt including Vapi GIDC, Valsad industrial areas, Silvassa, Daman, Sarigam, Umbergaon, and Pardi.' },
  { question: 'What is the delivery time to Vapi?', answer: 'Delivery to Vapi and South Gujarat is typically 5-7 days for standard panels. Express delivery available for urgent requirements. Our proximity ensures efficient logistics.' },
  { question: 'What is PUF panel price in Vapi?', answer: 'PUF panel prices in Vapi range from ₹850 to ₹2,400 per sq. meter based on specifications. Contact PHOENIXX for competitive quotations tailored to Vapi GIDC projects.' },
  { question: 'Which industries in Vapi use PUF panels?', answer: 'Vapi industries using PUF panels include pharmaceutical manufacturers, chemical processors, dye and pigment units, food processing plants, cold storage operators, and paper & packaging industries.' },
];

const industrialAreas = ['Vapi GIDC Phase 1', 'Vapi GIDC Phase 2', 'Vapi GIDC Extension', 'Sarigam GIDC', 'Umbergaon GIDC', 'Pardi Industrial Area', 'Silvassa Industrial Zone', 'Valsad Industrial Area'];

export default function VapiPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-400 mb-6">📍 Serving Vapi & South Gujarat Chemical Belt</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Vapi</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild delivers specialized PUF panels to Vapi&apos;s pharmaceutical and chemical industries. From Vapi GIDC to Silvassa, we serve South Gujarat&apos;s industrial hub with quality insulation solutions.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Vapi Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Vapi&apos;s Chemical & Pharma Hub</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Vapi, the heart of South Gujarat&apos;s chemical and pharmaceutical industry, requires specialized building materials that can withstand demanding industrial environments. As a dedicated <strong>PUF panel manufacturer in Vapi</strong>, PHOENIXX SmartBuild provides insulated panels engineered for the unique requirements of chemical processing, pharmaceutical manufacturing, and related industries.</p>
                <p>Our <Link href="/products/sandwich-panels/pir-panel" className="text-primary hover:underline">PIR panels</Link> offer enhanced fire safety for chemical plants, while <Link href="/products/cleanroom-solutions" className="text-primary hover:underline">cleanroom panels</Link> meet GMP requirements for pharmaceutical facilities. For general industrial use, our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> provide reliable thermal insulation.</p>
                <p>With direct supply to Vapi GIDC, Sarigam, Umbergaon, Silvassa, and the entire South Gujarat-Daman-Dadra industrial corridor, PHOENIXX ensures comprehensive coverage for your insulation needs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Vapi Industries</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Cleanroom Panels', description: 'GMP-compliant panels for pharmaceutical manufacturing facilities.', link: '/products/cleanroom-solutions' },
                { title: 'PIR Fire-Rated Panels', description: 'Enhanced fire safety for chemical processing plants.', link: '/products/sandwich-panels/pir-panel' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for pharma & food storage.', link: '/solutions/cold-storage-construction' },
                { title: 'PUF Roofing Panels', description: 'Insulated roofing for industrial sheds and warehouses.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'PUF Wall Panels', description: 'Wall cladding for factories and processing units.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Warehouse Panels', description: 'Complete insulation for logistics facilities.', link: '/solutions/peb' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas We Serve near Vapi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Also serving Daman, Dadra Nagar Haveli, and the Mumbai-Ahmedabad industrial corridor.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Vapi Industries Choose PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Pharma Expertise', desc: 'GMP-compliant solutions' },
                { title: 'Chemical Resistant', desc: 'Specialized coatings available' },
                { title: 'Fast Delivery', desc: '5-7 days to Vapi' },
                { title: 'Fire Safety', desc: 'PIR panels for chemicals' },
                { title: 'Quality Certified', desc: 'Documentation for audits' },
                { title: 'Competitive Rates', desc: 'Best pricing for GIDC' },
                { title: 'Technical Support', desc: 'Expert guidance team' },
                { title: '18+ Years', desc: 'Industry experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-teal-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Vapi</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Pharmaceutical Manufacturing Plants', 'Chemical Processing Units', 'Dye & Pigment Industries', 'Food Processing & Cold Storage', 'Paper & Packaging Industries', 'Warehouses & Logistics Centers', 'Textile Processing Units', 'Commercial & Office Buildings'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-teal-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Vapi</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Vapi GIDC Projects</h2>
            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">Quality panels for pharmaceutical, chemical, and industrial applications.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-teal-700 shadow-lg hover:shadow-xl transition-all">Request Vapi Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Vapi" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

