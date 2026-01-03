import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Rajkot | PHOENIXX SmartBuild',
  description: 'Top PUF panel manufacturer in Rajkot, Gujarat. Insulated panels for engineering industries, Metoda GIDC & Shapar Veraval. Call for best prices!',
  keywords: ['PUF panel manufacturer in Rajkot', 'PUF sandwich panel Rajkot', 'insulated panel Rajkot', 'cold storage panel Saurashtra'],
  alternates: { canonical: '/puf-panel-manufacturer-in-rajkot' },
};

const faqs = [
  { question: 'Which is the best PUF panel manufacturer in Rajkot?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel manufacturer serving Rajkot and Saurashtra region. We supply to Metoda GIDC, Shapar Veraval Industrial Area, Lodhika GIDC, and all major engineering clusters with quality products and competitive pricing.' },
  { question: 'What PUF panels are suitable for Rajkot engineering industries?', answer: 'For Rajkot\'s engineering and manufacturing industries, we recommend 50-60mm PUF roofing panels and 40-50mm wall panels. These provide optimal thermal insulation for machine shops, foundries, and assembly plants.' },
  { question: 'Do you supply PUF panels to Metoda and Shapar GIDC?', answer: 'Yes, PHOENIXX directly supplies PUF panels to Metoda GIDC, Shapar Veraval Industrial Area, Lodhika GIDC, Aji GIDC, and other industrial zones across Rajkot and Saurashtra region.' },
  { question: 'What is the delivery time for PUF panels to Rajkot?', answer: 'Standard delivery to Rajkot is 7-10 days. Express delivery options available for urgent requirements. We have efficient logistics for the entire Saurashtra region.' },
  { question: 'What applications use PUF panels in Rajkot?', answer: 'Rajkot industries use PUF panels for engineering workshops, auto parts manufacturing, foundries, ceramic units, food processing plants, cold storage facilities, and commercial buildings.' },
  { question: 'What is PUF panel price in Rajkot?', answer: 'PUF panel prices in Rajkot range from ₹800 to ₹2,300 per sq. meter based on thickness and specifications. Contact PHOENIXX for project-specific quotations with Saurashtra-competitive rates.' },
];

const industrialAreas = ['Metoda GIDC', 'Shapar Veraval Industrial Area', 'Lodhika GIDC', 'Aji GIDC', 'Bhaktinagar Industrial Estate', 'Kothariya GIDC', 'Gondal GIDC', 'Morbi Ceramic Belt'];

export default function RajkotPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 mb-6">📍 Serving Rajkot & Saurashtra Region</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Rajkot</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild serves Rajkot&apos;s renowned engineering industry with premium PUF panels. From Metoda GIDC to Morbi ceramic belt, we deliver insulation excellence across Saurashtra.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Rajkot Quote</Link>
                <a href="tel:+919328915237" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 93289 15237</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Rajkot&apos;s Engineering Hub</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Rajkot, the industrial heartland of Saurashtra, is known globally for its engineering excellence and manufacturing prowess. As a leading <strong>PUF panel manufacturer in Rajkot</strong>, PHOENIXX SmartBuild supplies high-quality insulated panels to the city&apos;s diverse manufacturing ecosystem – from precision engineering units to large foundries.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> are engineered to meet the specific needs of Rajkot industries, providing excellent thermal insulation for machine shops, helping maintain optimal working temperatures in manufacturing facilities, and reducing energy costs in the hot Saurashtra climate.</p>
                <p>With direct supply to Metoda GIDC, Shapar Veraval Industrial Area, Lodhika GIDC, and the Morbi ceramic belt, PHOENIXX is your trusted insulation partner for all industrial projects in the Rajkot region.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Products for Rajkot</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'PUF Roofing Panels', description: 'Heat-resistant roofing for engineering workshops and foundries.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'PUF Wall Panels', description: 'Thermal insulation for manufacturing plants and warehouses.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'Cold Storage Panels', description: 'Insulated panels for agri-cold storage and food processing.', link: '/solutions/cold-storage-construction' },
                { title: 'Industrial Shed Panels', description: 'Complete insulation for factory buildings and workshops.', link: '/solutions/peb' },
                { title: 'PIR Fire-Rated Panels', description: 'Fire-resistant panels for foundries and heat-intensive industries.', link: '/products/sandwich-panels/pir-panel' },
                { title: 'Commercial Building Panels', description: 'Insulation solutions for offices and commercial complexes.', link: '/products/sandwich-panels' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas in Rajkot We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Also serving Jamnagar, Junagadh, Bhavnagar, and entire Saurashtra region.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Rajkot Chooses PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Engineering Focus', desc: 'Panels for manufacturing needs' },
                { title: 'Saurashtra Coverage', desc: 'Delivery across the region' },
                { title: 'Competitive Pricing', desc: 'Best rates for Rajkot' },
                { title: 'Technical Support', desc: 'Expert guidance available' },
                { title: 'Quality Assured', desc: 'High-density 40 kg/m³ foam' },
                { title: 'Fast Delivery', desc: '7-10 days to Rajkot' },
                { title: 'All Applications', desc: 'Roof, wall, cold room panels' },
                { title: '18+ Years', desc: 'Gujarat market experience' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-blue-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Rajkot</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Engineering & Machine Tool Factories', 'Auto Parts Manufacturing Units', 'Foundries & Casting Units', 'Ceramic & Tile Industries (Morbi)', 'Oil Mill & Food Processing', 'Cold Storage & Warehouses', 'Commercial & Office Buildings', 'Agricultural Processing Units'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-blue-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Rajkot</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels for Rajkot Industries</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Quality insulation for Saurashtra&apos;s engineering excellence.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg hover:shadow-xl transition-all">Request Rajkot Quote</Link>
              <a href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Rajkot" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

