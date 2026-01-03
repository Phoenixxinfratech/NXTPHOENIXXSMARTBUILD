import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Suppliers in India | PHOENIXX SmartBuild',
  description: 'Reliable PUF panel suppliers in India. PHOENIXX SmartBuild supplies quality insulated panels with pan-India delivery for industrial & commercial projects.',
  keywords: ['PUF panel suppliers in India', 'PUF panel supply', 'insulated panel suppliers', 'PHOENIXX'],
  alternates: {
    canonical: '/puf-panel-suppliers-in-india',
  },
};

const faqs = [
  {
    question: 'How do I find reliable PUF panel suppliers in India?',
    answer: 'Look for suppliers with: in-house manufacturing capability, established track record (10+ years), quality certifications, technical support team, positive customer references, and reliable delivery network. PHOENIXX SmartBuild meets all these criteria as a trusted supplier.',
  },
  {
    question: 'What should I check before ordering from PUF panel suppliers?',
    answer: 'Verify: foam density (40 kg/m³ recommended), thermal conductivity certification, steel quality and coating options, customization capability, delivery timeline, installation support availability, and warranty terms before placing orders.',
  },
  {
    question: 'Does PHOENIXX supply panels directly or through dealers?',
    answer: 'PHOENIXX operates as both a direct supplier and through authorized channel partners. For large projects, we recommend direct supply for better coordination. For smaller requirements, our dealer network provides convenient local access.',
  },
  {
    question: 'What is the minimum order quantity for PUF panel supply?',
    answer: 'PHOENIXX accommodates orders of various sizes. While we handle large industrial projects, we also supply smaller quantities for commercial and residential applications. Contact us with your requirements for specific MOQ information.',
  },
  {
    question: 'How is pricing determined for PUF panel supply?',
    answer: 'PUF panel pricing depends on: panel thickness, foam type (PUF/PIR), steel thickness, coating type (SMP/SDP/PVDF), quantity ordered, customization requirements, and delivery location. Request a quote for project-specific pricing.',
  },
  {
    question: 'What delivery support do PUF panel suppliers provide?',
    answer: 'PHOENIXX provides comprehensive delivery support including: optimized loading for transport efficiency, weather-protected packaging, delivery scheduling coordination, unloading guidance, and documentation for customs (for export orders).',
  },
  {
    question: 'Can PHOENIXX supply panels for projects outside India?',
    answer: 'Yes, PHOENIXX exports PUF panels to neighboring countries and other international markets. We provide export-quality packaging, necessary documentation, and coordinate with freight forwarders for international deliveries.',
  },
];

export default function PufPanelSuppliersIndiaPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-900 via-pink-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-rose-500/10 px-4 py-2 text-sm font-medium text-rose-400 mb-6">
                🚛 Reliable Supply Chain Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Panel Suppliers in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild is among India&apos;s most reliable PUF panel suppliers, combining 
                manufacturing excellence with efficient logistics to deliver quality insulated panels 
                to project sites across the nation.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Request Supply Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Discuss Requirements
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Supplier Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Choose PHOENIXX as Your PUF Panel Supplier
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Finding reliable <strong>PUF panel suppliers in India</strong> is crucial for project 
                  success. PHOENIXX SmartBuild combines the advantages of being both a manufacturer and 
                  supplier – ensuring quality control from production to delivery while offering the 
                  flexibility and service of a dedicated supply partner.
                </p>
                <p>
                  Our integrated approach eliminates the uncertainties of multi-vendor supply chains. 
                  When you source <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF panels</Link> from 
                  PHOENIXX, you get direct access to manufacturing capability, technical expertise, and 
                  a supply chain optimized for the Indian industrial landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supply Advantages */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              The PHOENIXX Supply Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Direct from Factory',
                  description: 'No middlemen – panels come directly from our manufacturing facility with full quality assurance and documentation.',
                  icon: '🏭',
                },
                {
                  title: 'Consistent Quality',
                  description: 'Every batch undergoes rigorous quality checks ensuring consistent foam density, adhesion, and dimensional accuracy.',
                  icon: '✅',
                },
                {
                  title: 'Flexible Quantities',
                  description: 'Whether you need panels for a small commercial project or a large industrial complex, we accommodate all order sizes.',
                  icon: '📦',
                },
                {
                  title: 'Reliable Delivery',
                  description: 'Efficient logistics network ensures on-time delivery to project sites across India with proper handling and packaging.',
                  icon: '🚛',
                },
                {
                  title: 'Technical Support',
                  description: 'Our technical team assists with specification selection, quantity estimation, and installation guidance.',
                  icon: '👷',
                },
                {
                  title: 'Competitive Pricing',
                  description: 'Factory-direct supply eliminates markup layers, offering competitive pricing without compromising quality.',
                  icon: '💰',
                },
              ].map((adv, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <span className="text-4xl">{adv.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{adv.title}</h3>
                  <p className="mt-2 text-slate-600">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Supply Process */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Supply Process
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: 'Inquiry', desc: 'Share your project requirements' },
                  { step: '2', title: 'Quotation', desc: 'Receive detailed pricing and specs' },
                  { step: '3', title: 'Order', desc: 'Confirm order with advance payment' },
                  { step: '4', title: 'Delivery', desc: 'Receive panels at project site' },
                ].map((step, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-rose-100 rounded-full mx-auto flex items-center justify-center text-2xl font-bold text-rose-600">
                      {step.step}
                    </div>
                    <h3 className="mt-4 font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-slate-600 text-sm">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Supplied */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-rose-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Products We Supply
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'PUF Roof Panels', link: '/products/sandwich-panels/roofing-puf-panel' },
                { name: 'PUF Wall Panels', link: '/products/sandwich-panels/wall-ceiling-panel' },
                { name: 'PIR Panels', link: '/products/sandwich-panels/pir-panel' },
                { name: 'Cold Room Panels', link: '/solutions/cold-storage-construction' },
                { name: 'Cleanroom Panels', link: '/products/cleanroom-solutions' },
                { name: 'Rockwool Panels', link: '/products/sandwich-panels/rockwool-panel' },
                { name: 'Industrial Doors', link: '/products/doors' },
                { name: 'Accessories', link: '/products/sandwich-panels' },
              ].map((product, idx) => (
                <Link
                  key={idx}
                  href={product.link}
                  className="bg-white/10 backdrop-blur rounded-xl p-4 text-center hover:bg-white/20 transition-colors"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery Network */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Pan-India Supply Network
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Major Industrial Hubs</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Gujarat (Ahmedabad, Vadodara, Surat, Rajkot)</li>
                  <li>• Maharashtra (Mumbai, Pune, Nashik, Nagpur)</li>
                  <li>• Tamil Nadu (Chennai, Coimbatore)</li>
                  <li>• Karnataka (Bangalore, Hubli)</li>
                  <li>• Telangana (Hyderabad)</li>
                  <li>• Rajasthan (Jaipur, Jodhpur)</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Delivery Capabilities</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Standard delivery: 7-14 days</li>
                  <li>• Express delivery available</li>
                  <li>• Full truckload optimization</li>
                  <li>• Project site coordination</li>
                  <li>• Unloading assistance guidance</li>
                  <li>• Delivery documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-rose-600 to-pink-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Reliable PUF Panel Supply for Your Project
            </h2>
            <p className="text-xl text-rose-100 mb-10 max-w-2xl mx-auto">
              Quality panels, competitive pricing, and dependable delivery across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-rose-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Supply Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Sales Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

