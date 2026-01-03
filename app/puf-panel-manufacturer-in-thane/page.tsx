import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Thane | PHOENIXX SmartBuild',
  description: 'Trusted PUF panel manufacturer in Thane, Maharashtra. Quality insulated panels for Wagle Estate, Bhiwandi & Kalyan-Dombivli industries. Get quote!',
  keywords: ['PUF panel manufacturer in Thane', 'PUF panel Wagle Estate', 'insulated panel Bhiwandi', 'cold storage panel Thane'],
  alternates: { canonical: '/puf-panel-manufacturer-in-thane' },
};

const faqs = [
  { question: 'Who supplies PUF panels in Thane district?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel supplier serving Thane and the greater Mumbai Metropolitan Region. We supply to Wagle Estate, Bhiwandi, Kalyan-Dombivli, Ambernath, and all industrial areas.' },
  { question: 'What industries in Thane use PUF panels?', answer: 'Thane industries using PUF panels include warehousing & logistics companies, pharmaceutical manufacturers, food processing units, engineering firms, and commercial building developers.' },
  { question: 'Do you supply PUF panels to Bhiwandi warehouses?', answer: 'Yes, PHOENIXX is a major supplier to Bhiwandi\'s large warehousing cluster. We provide roofing and wall panels for logistics centers, fulfillment hubs, and distribution warehouses.' },
  { question: 'What is delivery time to Thane?', answer: 'Standard delivery to Thane is 5-8 days. Express delivery available for urgent requirements. Proximity to Thane ensures efficient logistics and quick turnaround.' },
  { question: 'What PUF panel thickness is recommended for warehouses?', answer: 'For Thane warehouses, we recommend 50-60mm roofing panels and 40-50mm wall panels. For cold storage applications, 80-120mm panels are recommended based on temperature requirements.' },
  { question: 'What is PUF panel price in Thane?', answer: 'PUF panel prices in Thane range from ₹900 to ₹2,500 per sq. meter. Contact PHOENIXX for project-specific quotations with competitive MMR pricing.' },
];

const industrialAreas = ['Wagle Estate MIDC', 'Bhiwandi Warehouse Hub', 'Kalyan-Dombivli MIDC', 'Ambernath MIDC', 'Badlapur Industrial Area', 'Ulhasnagar Industrial Zone', 'Mira-Bhayander Industrial Belt', 'Vasai Industrial Area'];

export default function ThanePage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-cyan-900 via-teal-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400 mb-6">📍 Serving Thane & MMR Industrial Belt</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Thane</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild delivers premium PUF panels to Thane&apos;s industrial ecosystem. From Wagle Estate factories to Bhiwandi warehouse clusters, we serve the region&apos;s diverse insulation needs.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Thane Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Thane&apos;s Industrial Growth</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Thane district, spanning from Wagle Estate to Bhiwandi&apos;s massive warehousing hub, represents one of India&apos;s most dynamic industrial regions. As a reliable <strong>PUF panel manufacturer in Thane</strong>, PHOENIXX SmartBuild supports this growth with high-quality insulated panels for manufacturing, logistics, and commercial applications.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> are ideal for Thane&apos;s diverse industrial landscape – from large warehouse complexes in Bhiwandi to pharmaceutical facilities in Wagle Estate. With Mumbai&apos;s humid coastal climate, our corrosion-resistant coatings ensure long-term panel performance.</p>
                <p>With supply capabilities spanning Wagle Estate, Bhiwandi, Kalyan-Dombivli, Ambernath, and the extended MMR industrial belt, PHOENIXX is your trusted insulation partner for the region.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Solutions for Thane</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Warehouse Panels', description: 'Insulation for Bhiwandi logistics and e-commerce centers.', link: '/solutions/peb' },
                { title: 'PUF Roofing Panels', description: 'Large-span roofing for industrial buildings.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for food & pharma.', link: '/solutions/cold-storage-construction' },
                { title: 'PUF Wall Panels', description: 'Wall cladding for factories and warehouses.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Cleanroom Panels', description: 'GMP-compliant panels for pharmaceutical units.', link: '/products/cleanroom-solutions' },
                { title: 'Commercial Panels', description: 'Insulation for IT parks and office buildings.', link: '/products/sandwich-panels' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas in Thane We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Serving entire Thane district and extended Mumbai Metropolitan Region.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-cyan-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Thane Industries Trust PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Warehouse Focus', desc: 'Bhiwandi hub specialist' },
                { title: 'Coastal Climate', desc: 'Corrosion-resistant coatings' },
                { title: 'Fast Delivery', desc: '5-8 days to Thane' },
                { title: 'Quality Assured', desc: 'ISO-certified products' },
                { title: 'MMR Coverage', desc: 'All zones served' },
                { title: 'Competitive Rates', desc: 'Best pricing for volume' },
                { title: 'Technical Support', desc: 'Expert guidance' },
                { title: '18+ Years', desc: 'Maharashtra experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-cyan-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Thane</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Warehousing & Logistics Centers', 'E-commerce Fulfillment Hubs', 'Pharmaceutical Manufacturing', 'Food Processing Plants', 'Engineering & Manufacturing', 'Cold Storage Facilities', 'IT Parks & Commercial Buildings', 'Retail Distribution Centers'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-cyan-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Thane</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-cyan-600 to-teal-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Thane Projects</h2>
            <p className="text-xl text-cyan-100 mb-10 max-w-2xl mx-auto">Quality panels for MMR&apos;s industrial and logistics hub.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-cyan-700 shadow-lg hover:shadow-xl transition-all">Request Thane Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Thane" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

