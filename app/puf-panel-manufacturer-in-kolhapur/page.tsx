import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Kolhapur | PHOENIXX SmartBuild',
  description: 'Leading PUF panel manufacturer in Kolhapur, Maharashtra. Quality insulated panels for foundries, Shiroli MIDC & Kagal industries. Get best prices!',
  keywords: ['PUF panel manufacturer in Kolhapur', 'PUF panel Shiroli MIDC', 'insulated panel Kolhapur', 'cold storage panel Western Maharashtra'],
  alternates: { canonical: '/puf-panel-manufacturer-in-kolhapur' },
};

const faqs = [
  { question: 'Who is the best PUF panel manufacturer in Kolhapur?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel manufacturer serving Kolhapur and Western Maharashtra. We supply to Shiroli MIDC, Kagal MIDC, Gokul Shirgaon, and all industrial areas with quality products and reliable delivery.' },
  { question: 'What industries in Kolhapur use PUF panels?', answer: 'Kolhapur industries using PUF panels include foundries, sugar factories, jaggery units, dairy processing plants, food processing facilities, auto component manufacturers, and commercial building developers.' },
  { question: 'Are PUF panels suitable for Kolhapur foundries?', answer: 'Yes, we supply heat-resistant PIR panels and standard PUF panels for foundry buildings. Our panels help maintain comfortable working temperatures and reduce cooling costs in the hot foundry environment.' },
  { question: 'Do you supply to Shiroli and Kagal MIDC?', answer: 'Yes, PHOENIXX directly supplies to Shiroli MIDC, Kagal MIDC, Gokul Shirgaon Industrial Area, Ichalkaranji, and all industrial zones across Kolhapur district.' },
  { question: 'What is delivery time to Kolhapur?', answer: 'Standard delivery to Kolhapur is 8-12 days. Express delivery available for urgent requirements. Efficient logistics for Western Maharashtra region.' },
  { question: 'What is PUF panel price in Kolhapur?', answer: 'PUF panel prices in Kolhapur range from ₹850 to ₹2,400 per sq. meter. Contact PHOENIXX for competitive Western Maharashtra pricing based on project requirements.' },
];

const industrialAreas = ['Shiroli MIDC', 'Kagal MIDC', 'Gokul Shirgaon Industrial Area', 'Ichalkaranji Industrial Zone', 'Hatkanangale MIDC', 'Jaysingpur Industrial Area', 'Sangli MIDC', 'Satara Industrial Zone'];

export default function KolhapurPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-rose-900 via-pink-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-400 mb-6">📍 Serving Kolhapur & Western Maharashtra</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Kolhapur</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild delivers premium PUF panels to Kolhapur&apos;s thriving industrial base. From foundry clusters to dairy processing plants, we serve Western Maharashtra with quality insulation solutions.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Kolhapur Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Kolhapur&apos;s Diverse Industries</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Kolhapur, renowned for its foundry industry and dairy sector, has a rich industrial heritage that continues to grow with modern manufacturing. As a dedicated <strong>PUF panel manufacturer in Kolhapur</strong>, PHOENIXX SmartBuild supports this industrial ecosystem with high-quality insulated panels tailored for the region&apos;s unique requirements.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> serve Kolhapur&apos;s diverse needs – from temperature control in dairy processing plants to comfortable working environments in foundry buildings. For sugar and jaggery industries, our panels help maintain optimal processing conditions while reducing energy costs.</p>
                <p>With supply capabilities spanning Shiroli MIDC, Kagal, Gokul Shirgaon, Ichalkaranji, and extending to Sangli and Satara, PHOENIXX is your complete insulation partner for Western Maharashtra projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Kolhapur</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Foundry Building Panels', description: 'Heat-resistant panels for foundry and casting units.', link: '/products/sandwich-panels/pir-panel' },
                { title: 'Dairy Processing Panels', description: 'Temperature-controlled panels for milk and dairy facilities.', link: '/solutions/cold-storage-construction' },
                { title: 'Cold Storage Panels', description: 'Insulated panels for agri-produce and sugar storage.', link: '/solutions/cold-storage-construction' },
                { title: 'PUF Roofing Panels', description: 'Large-span roofing for industrial sheds.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'PUF Wall Panels', description: 'Wall cladding for factories and warehouses.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Industrial Shed Panels', description: 'Complete insulation for manufacturing facilities.', link: '/solutions/peb' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas in Kolhapur We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Serving entire Western Maharashtra including Sangli, Satara, and Solapur districts.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-rose-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Kolhapur Industries Choose PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Foundry Expertise', desc: 'Heat-resistant solutions' },
                { title: 'Dairy Focus', desc: 'Temperature control panels' },
                { title: 'Reliable Delivery', desc: '8-12 days to Kolhapur' },
                { title: 'Quality Assured', desc: 'ISO-certified products' },
                { title: 'Regional Coverage', desc: 'Western Maharashtra served' },
                { title: 'Competitive Rates', desc: 'Best regional pricing' },
                { title: 'Technical Support', desc: 'Expert guidance' },
                { title: '18+ Years', desc: 'Industry experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-rose-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Kolhapur</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Foundry & Casting Units', 'Dairy Processing Plants', 'Sugar & Jaggery Industries', 'Cold Storage Facilities', 'Auto Component Manufacturing', 'Textile Industries (Ichalkaranji)', 'Food Processing Units', 'Commercial Buildings'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-rose-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Kolhapur</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-rose-600 to-pink-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Kolhapur Projects</h2>
            <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">Quality panels for Western Maharashtra&apos;s industrial growth.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-rose-700 shadow-lg hover:shadow-xl transition-all">Request Kolhapur Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Kolhapur" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

