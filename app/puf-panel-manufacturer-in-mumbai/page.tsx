import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Mumbai | PHOENIXX',
  description: 'Leading PUF panel manufacturer in Mumbai. Quality insulated panels for cold storage, warehouses & industries. Get free quote!',
  keywords: ['PUF panel manufacturer in Mumbai', 'PUF sandwich panel Mumbai', 'cold storage panel Mumbai'],
  alternates: { canonical: 'https://phoenixxsmartbuild.com/puf-panel-manufacturer-in-mumbai' },
};

const faqs = [
  { question: 'Who is the best PUF panel manufacturer in Mumbai?', answer: 'PHOENIXX SmartBuild is a trusted PUF panel manufacturer serving Mumbai and MMR region. We supply to industries across Bhiwandi, Taloja MIDC, TTC Industrial Area, Navi Mumbai, and Greater Mumbai with quality products and reliable delivery.' },
  { question: 'What types of PUF panels are available in Mumbai?', answer: 'PHOENIXX offers a complete range in Mumbai: roofing panels, wall panels, cold storage panels, cleanroom panels, and PIR fire-rated panels. Available in 30mm to 150mm thickness with various coating options.' },
  { question: 'Do you supply PUF panels to Bhiwandi and Taloja MIDC?', answer: 'Yes, PHOENIXX supplies PUF panels throughout MMR including Bhiwandi industrial area, Taloja MIDC, TTC Navi Mumbai, Panvel, Kalyan-Dombivli, and all major industrial zones in Greater Mumbai.' },
  { question: 'What is the cost of PUF panels in Mumbai?', answer: 'PUF panel prices in Mumbai range from ₹900 to ₹2,600 per sq. meter depending on specifications. Contact PHOENIXX for project-specific quotations with competitive Mumbai pricing.' },
  { question: 'What industries use PUF panels in Mumbai?', answer: 'Mumbai industries using PUF panels include pharmaceutical companies, food processing units, cold storage operators, logistics warehouses, IT parks, commercial buildings, and manufacturing facilities.' },
  { question: 'How fast is delivery to Mumbai?', answer: 'Standard delivery to Mumbai/MMR is 7-10 days. Express delivery available for urgent requirements. We have efficient logistics for the entire Mumbai Metropolitan Region.' },
  { question: 'Do you provide installation support in Mumbai?', answer: 'Yes, PHOENIXX provides installation guidance and technical support for Mumbai projects. We can recommend experienced installation contractors familiar with Mumbai building requirements.' },
];

const industrialAreas = ['Bhiwandi Industrial Area', 'Taloja MIDC', 'TTC Industrial Area', 'Navi Mumbai', 'Panvel Industrial Zone', 'Kalyan-Dombivli MIDC', 'Vasai-Virar Industrial Belt', 'Thane-Belapur Industrial Area'];

// Climate relevance for Mumbai - SEO optimized
const climateReasons = [
  {
    title: 'High Humidity (85%+)',
    description: 'Mumbai\'s coastal location means year-round humidity above 85%. PUF panels with PVDF/PE coatings resist moisture damage and prevent corrosion in marine environments.',
    icon: '💧',
  },
  {
    title: 'Monsoon Protection (3000mm Rain)',
    description: 'With 3000mm annual rainfall, waterproof construction is critical. PUF panels provide seamless, leak-proof building envelopes with factory-sealed joints.',
    icon: '🌧️',
  },
  {
    title: 'Salt Air Corrosion',
    description: 'Sea salt accelerates metal corrosion. PHOENIXX panels use corrosion-resistant coatings specifically designed for coastal Maharashtra applications.',
    icon: '🌊',
  },
  {
    title: 'Energy Savings',
    description: 'With year-round cooling needs, PUF panels reduce AC costs by 25-30%. Essential for warehouses, cold storage, and manufacturing facilities in MMR.',
    icon: '⚡',
  },
];

// Cross-city internal links for Maharashtra - SEO optimized
const maharashtraLocations = [
  { name: 'Pune', href: '/puf-panel-manufacturer-in-pune', distance: '150 km' },
  { name: 'Thane', href: '/puf-panel-manufacturer-in-thane', distance: '25 km' },
  { name: 'Nashik', href: '/puf-panel-manufacturer-in-nashik', distance: '165 km' },
  { name: 'Nagpur', href: '/puf-panel-manufacturer-in-nagpur', distance: '840 km' },
  { name: 'Kolhapur', href: '/puf-panel-manufacturer-in-kolhapur', distance: '375 km' },
  { name: 'Aurangabad', href: '/puf-panel-manufacturer-in-chhatrapati-sambhajinagar', distance: '340 km' },
];

// Related resources for internal linking
const relatedResources = [
  { title: 'PUF vs PIR vs Rockwool Comparison', href: '/resources/blogs/puf-vs-pir-vs-rockwool', type: 'blog' },
  { title: 'Cold Storage Panel Guide', href: '/resources/blogs/puf-panels-cold-storage-pharma-applications', type: 'blog' },
  { title: 'Fire Safety in Industrial Buildings', href: '/resources/blogs/fire-safety-industrial-buildings', type: 'blog' },
  { title: 'Industrial Doors Selection Guide', href: '/resources/blogs/industrial-doors-selection-guide', type: 'blog' },
  { title: 'PUF Panel Installation Cost', href: '/resources/blogs/puf-panel-installation-cost', type: 'blog' },
  { title: 'View Panel Prices Online', href: '/shop', type: 'shop' },
];

export default function MumbaiPage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 mb-6">📍 Serving Mumbai & Maharashtra Industries</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">PUF Panel Manufacturer in Mumbai</h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">PHOENIXX SmartBuild delivers premium PUF panels to India&apos;s financial capital. From Bhiwandi warehouses to Navi Mumbai MIDC, we serve Mumbai Metropolitan Region with world-class insulation solutions.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">Get Mumbai Quote</Link>
                <a href="tel:+918866556879" className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all">📞 Call: +91 88665 56879</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">PUF Panels for Mumbai&apos;s Dynamic Industrial Landscape</h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>Mumbai, India&apos;s commercial capital and the heart of Maharashtra&apos;s industrial ecosystem, demands high-quality building materials for its diverse infrastructure needs. As a reliable <strong>PUF panel manufacturer in Mumbai</strong>, PHOENIXX SmartBuild serves the city&apos;s pharmaceutical, logistics, food processing, and commercial sectors with premium insulated panels.</p>
                <p>Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> are engineered for Mumbai&apos;s humid coastal climate, featuring corrosion-resistant coatings and excellent thermal performance. From massive warehouse complexes in Bhiwandi to cleanroom facilities in Taloja MIDC, our panels deliver reliable insulation for all applications.</p>
                <p>With established supply channels to TTC Industrial Area, Navi Mumbai, Panvel, and the entire Mumbai Metropolitan Region, PHOENIXX ensures timely delivery and comprehensive technical support for your projects.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Products for Mumbai</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'PUF Roofing Panels', description: 'Insulated roofing for warehouses and industrial buildings in MMR.', link: '/products/sandwich-panels/roofing-puf-panel' },
                { title: 'Cold Storage Panels', description: 'Temperature-controlled panels for Mumbai\'s cold chain infrastructure.', link: '/solutions/cold-storage-construction' },
                { title: 'Cleanroom Panels', description: 'GMP-compliant panels for pharma facilities in MIDC areas.', link: '/products/cleanroom-solutions' },
                { title: 'PUF Wall Panels', description: 'Wall cladding solutions for factories and commercial buildings.', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { title: 'PIR Fire-Rated Panels', description: 'Fire-resistant panels for high-rises and sensitive applications.', link: '/products/sandwich-panels/pir-panel' },
                { title: 'Warehouse Insulation', description: 'Complete solutions for Bhiwandi logistics hub.', link: '/solutions/peb' },
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">Industrial Areas We Serve in Mumbai</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (<div key={idx} className="bg-slate-50 rounded-xl p-4 text-center"><span className="font-medium text-slate-700">{area}</span></div>))}
            </div>
            <p className="mt-8 text-center text-slate-600">Serving entire Mumbai Metropolitan Region and Western Maharashtra.</p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Mumbai Industries Trust PHOENIXX</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Coastal Climate', desc: 'Corrosion-resistant coatings' },
                { title: 'MMR Coverage', desc: 'All industrial zones served' },
                { title: 'Reliable Delivery', desc: '7-10 days to Mumbai' },
                { title: 'Quality Certified', desc: 'ISO-compliant products' },
                { title: 'Technical Support', desc: 'Expert guidance available' },
                { title: 'Competitive Rates', desc: 'Best pricing for volume' },
                { title: '18+ Years', desc: 'Maharashtra market experience' },
                { title: 'Full Range', desc: '30mm to 150mm thickness' },
              ].map((item, idx) => (<div key={idx} className="text-center"><h3 className="font-bold text-blue-400">{item.title}</h3><p className="mt-2 text-slate-300 text-sm">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">PUF Panel Applications in Mumbai</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {['Pharmaceutical Manufacturing Plants', 'Cold Storage & Logistics Warehouses', 'Food Processing & Packaging Units', 'IT Parks & Commercial Buildings', 'E-commerce Fulfillment Centers', 'Industrial Manufacturing Units', 'Data Centers & Server Rooms', 'Retail & Cold Chain Infrastructure'].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg"><span className="text-blue-500">✓</span><span className="text-slate-700">{app}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* Climate Relevance Section - SEO Optimized for Mumbai */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Why PUF Panels Are Essential for Mumbai&apos;s Coastal Climate
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Mumbai&apos;s unique coastal environment demands specialized building materials. Here&apos;s why PUF panels outperform alternatives.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {climateReasons.map((reason, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-blue-100">
                  <span className="text-4xl block mb-4">{reason.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Maharashtra Locations - Cross-City SEO Links */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF Panel Delivery Across Maharashtra
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              We supply PUF panels throughout Maharashtra. Explore our location-specific pages for regional information.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {maharashtraLocations.map((location, idx) => (
                <Link
                  key={idx}
                  href={location.href}
                  className="bg-slate-50 rounded-xl p-4 text-center hover:bg-blue-50 hover:shadow-md transition-all border border-slate-200"
                >
                  <span className="font-bold text-slate-900">{location.name}</span>
                  <span className="block text-sm text-slate-500">{location.distance}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Resources Section - Internal Linking */}
        <section className="py-16 md:py-20 bg-slate-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              PUF Panel Resources & Guides
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              Learn more about PUF panels through our detailed guides and resources.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {relatedResources.map((resource, idx) => (
                <Link
                  key={idx}
                  href={resource.href}
                  className="bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors border border-white/10"
                >
                  <span className={`text-sm font-medium ${resource.type === 'blog' ? 'text-blue-400' : 'text-green-400'}`}>
                    {resource.type === 'blog' ? '📖 Blog' : '🛒 Shop'}
                  </span>
                  <h3 className="mt-2 font-semibold text-white">{resource.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">FAQs – PUF Panels in Mumbai</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (<div key={idx} className="bg-white rounded-xl p-6 shadow-sm"><h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get PUF Panels Delivered to Mumbai</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Premium quality panels for India&apos;s financial capital.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-a-quote" className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 shadow-lg hover:shadow-xl transition-all">Request Mumbai Quote</Link>
              <a href="https://wa.me/918866556879?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Mumbai" target="_blank" rel="noopener noreferrer" className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">💬 WhatsApp Enquiry</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



