import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Pune | PHOENIXX SmartBuild',
  description: 'Top PUF panel manufacturer in Pune, Maharashtra. Quality insulated panels for Chakan, Ranjangaon MIDC & Hinjewadi IT parks. Call for best prices!',
  keywords: ['PUF panel manufacturer in Pune', 'PUF panel Chakan MIDC', 'insulated panel Pune', 'cold storage panel Pune'],
  alternates: { canonical: '/puf-panel-manufacturer-in-pune' },
};

const faqs = [
  { question: 'Who is the leading PUF panel manufacturer in Pune?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel manufacturer serving Pune and Western Maharashtra. We supply to Chakan MIDC, Ranjangaon MIDC, Talegaon, Hinjewadi, and all major industrial areas with quality products.' },
  { question: 'What PUF panels are used in Pune automotive industries?', answer: 'Pune\'s automotive sector uses PUF roofing panels (50-60mm) and wall panels (40-50mm) for manufacturing plants, component factories, and warehouses. We also supply cleanroom panels for precision manufacturing.' },
  { question: 'Do you supply PUF panels to Chakan and Ranjangaon MIDC?', answer: 'Yes, PHOENIXX directly supplies to Chakan MIDC, Ranjangaon MIDC, Talegaon Industrial Area, Pirangut, Kurkumbh, and all industrial zones across Pune district.' },
  { question: 'What is PUF panel price in Pune?', answer: 'PUF panel prices in Pune range from ₹850 to ₹2,500 per sq. meter based on specifications. Contact PHOENIXX for project-specific quotations with competitive Pune rates.' },
  { question: 'What industries use PUF panels in Pune?', answer: 'Pune industries using PUF panels include automotive manufacturers, IT parks, pharmaceutical units, food processing plants, cold storage operators, and engineering companies.' },
  { question: 'How fast is delivery to Pune?', answer: 'Standard delivery to Pune is 5-8 days. Express delivery available for urgent requirements. Our efficient logistics ensures reliable supply to all Pune MIDC areas.' },
];

const industrialAreas = ['Chakan MIDC', 'Ranjangaon MIDC', 'Talegaon Industrial Area', 'Hinjewadi IT Park', 'Pirangut Industrial Area', 'Kurkumbh MIDC', 'Pimpri-Chinchwad MIDC', 'Kharadi IT Corridor'];

export default function PunePage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-indigo-900 via-violet-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-400 mb-6">📍 Serving Pune & Western Maharashtra</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Pune</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild powers Pune&apos;s industrial growth with premium PUF panels. From Chakan automotive hub to Hinjewadi IT corridor, we deliver insulation excellence across Maharashtra&apos;s manufacturing capital.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Pune Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Pune&apos;s Manufacturing Excellence</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Pune, known as the &quot;Oxford of the East&quot; and Maharashtra&apos;s automotive capital, hosts a thriving industrial ecosystem spanning automotive, IT, pharmaceuticals, and manufacturing sectors. As a dedicated <strong>PUF panel manufacturer in Pune</strong>, PHOENIXX SmartBuild supports this industrial growth with high-performance insulated panels engineered for diverse applications.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> serve Pune&apos;s automotive giants in Chakan and Ranjangaon, providing optimal thermal environments for precision manufacturing. For IT parks in Hinjewadi and Kharadi, we deliver panels that ensure energy-efficient climate control.</p>
                <p>With direct supply to all major MIDC areas including Chakan, Ranjangaon, Talegaon, and Pimpri-Chinchwad, PHOENIXX is your comprehensive insulation partner for projects across the Pune Metropolitan Region.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Pune</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Automotive Plant Panels', description: 'Insulation for car manufacturing and component facilities.', link: '/solutions/peb' },
                { title: 'PUF Roofing Panels', description: 'Large-span roofing for factories and warehouses.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'IT Park Panels', description: 'Climate control panels for tech campuses.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for food & pharma.', link: '/solutions/cold-storage-construction' },
                { title: 'Cleanroom Panels', description: 'GMP-compliant panels for pharma manufacturing.', link: '/products/cleanroom-solutions' },
                { title: 'PIR Fire-Rated Panels', description: 'Fire-resistant solutions for sensitive facilities.', link: '/products/sandwich-panels/pir-panel' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas We Serve in Pune</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Serving entire Pune Metropolitan Region and Satara, Solapur districts.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-indigo-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Pune Industries Choose PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Automotive Focus', desc: 'Panels for manufacturing' },
                { title: 'IT Park Ready', desc: 'Energy-efficient solutions' },
                { title: 'Fast Delivery', desc: '5-8 days to Pune' },
                { title: 'Quality Assured', desc: 'ISO-certified products' },
                { title: 'MIDC Coverage', desc: 'All zones served' },
                { title: 'Competitive Rates', desc: 'Best pricing for Pune' },
                { title: 'Technical Support', desc: 'Expert guidance' },
                { title: '18+ Years', desc: 'Industry experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-indigo-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Pune</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Automotive Manufacturing Plants', 'Auto Component Factories', 'IT Parks & Tech Campuses', 'Pharmaceutical Units', 'Cold Storage & Warehouses', 'Food Processing Plants', 'Commercial Buildings', 'Data Centers'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-indigo-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Pune</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-indigo-600 to-violet-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Pune Projects</h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto">Quality panels for Maharashtra&apos;s manufacturing capital.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg hover:shadow-xl transition-all">Request Pune Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Pune" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

