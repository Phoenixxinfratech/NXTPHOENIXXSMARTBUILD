import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Surat | PHOENIXX SmartBuild',
  description: 'Leading PUF panel manufacturer in Surat, Gujarat. Quality insulated panels for cold storage, warehouses & industrial buildings. Get quote today!',
  keywords: ['PUF panel manufacturer in Surat', 'PUF sandwich panel Surat', 'cold storage panel Surat', 'insulated panel supplier Surat'],
  alternates: {
    canonical: '/puf-panel-manufacturer-in-surat',
  },
};

const faqs = [
  {
    question: 'Who is the best PUF panel manufacturer in Surat?',
    answer: 'PHOENIXX SmartBuild is a leading PUF panel manufacturer serving Surat and South Gujarat region. We supply high-quality insulated panels to industries in Sachin GIDC, Pandesara GIDC, Hazira Industrial Area, and Diamond Nagar with reliable delivery and technical support.',
  },
  {
    question: 'What types of PUF panels are available in Surat?',
    answer: 'PHOENIXX offers a complete range of PUF panels in Surat including roofing panels, wall panels, cold storage panels, and cleanroom panels. All panels are available in thicknesses from 30mm to 150mm with various coating options.',
  },
  {
    question: 'What is the price of PUF panels in Surat?',
    answer: 'PUF panel prices in Surat range from ₹800 to ₹2,500 per square meter depending on thickness, coating type, and quantity. Contact PHOENIXX for project-specific quotations with competitive pricing for Surat industries.',
  },
  {
    question: 'Do you supply PUF panels to Sachin GIDC and Pandesara GIDC?',
    answer: 'Yes, PHOENIXX supplies PUF panels to all industrial areas in Surat including Sachin GIDC, Pandesara GIDC, Hazira Industrial Area, Ichhapore, Kim, and surrounding regions with prompt delivery and installation support.',
  },
  {
    question: 'What industries in Surat use PUF panels?',
    answer: 'PUF panels are widely used by Surat industries including textile processing units, diamond polishing factories, food processing plants, cold storage facilities, pharmaceutical units, and chemical manufacturing plants for insulation and temperature control.',
  },
  {
    question: 'How fast can you deliver PUF panels to Surat?',
    answer: 'Standard PUF panel orders are delivered to Surat within 7-10 days. For urgent requirements, express delivery options are available. Our proximity to Surat ensures efficient logistics and quick turnaround.',
  },
];

const industrialAreas = [
  'Sachin GIDC',
  'Pandesara GIDC',
  'Hazira Industrial Area',
  'Diamond Nagar Industrial Estate',
  'Ichhapore Industrial Area',
  'Kim Industrial Area',
  'Kadodara GIDC',
  'Palsana GIDC',
];

export default function SuratPage() {
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

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'PHOENIXX SmartBuild - Surat',
    description: 'PUF panel manufacturer and supplier serving Surat and South Gujarat region.',
    url: 'https://phoenixxsmartbuild.com/puf-panel-manufacturer-in-surat',
    telephone: '+91-93289-15237',
    areaServed: {
      '@type': 'City',
      name: 'Surat',
      containedInPlace: {
        '@type': 'State',
        name: 'Gujarat',
      },
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />
        <JsonLd data={localBusinessSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-900 via-amber-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400 mb-6">
                📍 Serving Surat & South Gujarat Industries
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Panel Manufacturer in Surat
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild is your trusted PUF panel manufacturer in Surat, delivering 
                high-performance insulated panels to the textile capital of India. We serve industries 
                across Sachin GIDC, Pandesara GIDC, Hazira, and all major industrial zones in South Gujarat.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Quote for Surat
                </Link>
                <a
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  📞 Call: +91 93289 15237
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Trusted PUF Panel Supplier for Surat Industries
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Surat, known as the Diamond City and India&apos;s textile hub, is home to thousands of 
                  manufacturing units that require reliable insulation solutions. As a leading 
                  <strong> PUF panel manufacturer in Surat</strong>, PHOENIXX SmartBuild has been serving 
                  the city&apos;s diverse industrial landscape with high-quality insulated panels that deliver 
                  exceptional thermal performance and energy efficiency.
                </p>
                <p>
                  Our <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">PUF sandwich panels</Link> are 
                  specifically engineered to meet the demanding requirements of Surat&apos;s industries – from 
                  textile processing units requiring temperature-controlled environments to diamond polishing 
                  factories needing dust-free clean spaces. We understand the unique challenges faced by 
                  South Gujarat industries and provide customized panel solutions accordingly.
                </p>
                <p>
                  With direct supply to Sachin GIDC, Pandesara GIDC, Hazira Industrial Area, and other 
                  major industrial zones, PHOENIXX ensures quick delivery and comprehensive technical 
                  support for all your insulation needs in the Surat region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products for Surat */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              PUF Panel Solutions for Surat Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'PUF Roofing Panels',
                  description: 'Trapezoidal profile roofing panels ideal for Surat\'s hot climate, reducing indoor temperatures and cooling costs.',
                  link: '/products/sandwich-panels/roofing-puf-panel',
                },
                {
                  title: 'PUF Wall Panels',
                  description: 'Flat and micro-ribbed wall panels for textile units, warehouses, and manufacturing facilities.',
                  link: '/products/sandwich-panels/wall-ceiling-panel',
                },
                {
                  title: 'Cold Storage Panels',
                  description: 'High-thickness insulated panels for cold rooms serving Surat\'s food processing and export industries.',
                  link: '/solutions/cold-storage-construction',
                },
                {
                  title: 'Cleanroom Panels',
                  description: 'GMP-compliant panels for pharmaceutical units and diamond processing cleanrooms.',
                  link: '/products/cleanroom-solutions',
                },
                {
                  title: 'PIR Fire-Rated Panels',
                  description: 'Enhanced fire safety panels for chemical plants and high-risk industrial applications.',
                  link: '/products/sandwich-panels/pir-panel',
                },
                {
                  title: 'Industrial Doors',
                  description: 'Complementary door solutions for complete facility insulation.',
                  link: '/products/doors',
                },
              ].map((product, idx) => (
                <Link
                  key={idx}
                  href={product.link}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{product.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Industrial Areas Served */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Industrial Areas We Serve in Surat
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {industrialAreas.map((area, idx) => (
                <div key={idx} className="bg-slate-50 rounded-xl p-4 text-center">
                  <span className="font-medium text-slate-700">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-slate-600">
              We also serve Navsari, Valsad, Bharuch, and surrounding South Gujarat districts.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-orange-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Surat Industries Choose PHOENIXX
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Quick Delivery', desc: '7-10 days delivery to Surat' },
                { title: 'Local Support', desc: 'Technical team for South Gujarat' },
                { title: 'Custom Solutions', desc: 'Panels for textile & diamond industries' },
                { title: 'Competitive Pricing', desc: 'Factory-direct rates for Surat' },
                { title: 'Quality Assured', desc: '40 kg/m³ high-density foam' },
                { title: 'Installation Help', desc: 'Guidance for GIDC projects' },
                { title: '18+ Years', desc: 'Experience in Gujarat market' },
                { title: 'All Thicknesses', desc: '30mm to 150mm available' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-orange-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications in Surat */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              PUF Panel Applications in Surat
            </h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
              {[
                'Textile Processing Units & Dyeing Mills',
                'Diamond Polishing & Processing Factories',
                'Cold Storage for Seafood Export',
                'Food Processing & Packaging Plants',
                'Pharmaceutical Manufacturing Units',
                'Chemical & Petrochemical Plants (Hazira)',
                'Warehouse & Logistics Centers',
                'Commercial & Office Buildings',
              ].map((app, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                  <span className="text-orange-500">✓</span>
                  <span className="text-slate-700">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              FAQs – PUF Panels in Surat
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-amber-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get PUF Panels Delivered to Surat
            </h2>
            <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
              Quality panels, competitive pricing, and reliable delivery for Surat industries.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Surat Quote
              </Link>
              <a
                href="https://wa.me/919328915237?text=Hi%20PHOENIXX,%20I%20need%20PUF%20panels%20in%20Surat"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                💬 WhatsApp Enquiry
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

