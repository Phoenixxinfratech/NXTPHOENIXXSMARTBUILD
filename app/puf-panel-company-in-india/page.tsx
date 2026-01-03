import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'PUF Panel Company in India | PHOENIXX SmartBuild',
  description: 'PHOENIXX SmartBuild is a trusted PUF panel company in India. Complete insulated panel solutions for industrial, cold storage & commercial buildings.',
  keywords: ['PUF panel company in India', 'insulated panel company', 'PUF panel solutions', 'PHOENIXX SmartBuild'],
  alternates: {
    canonical: '/puf-panel-company-in-india',
  },
};

const faqs = [
  {
    question: 'What services does a PUF panel company provide?',
    answer: 'A comprehensive PUF panel company like PHOENIXX provides: panel manufacturing, technical consultation, design support, customization, delivery logistics, installation guidance, and after-sales service – offering complete insulation solutions for industrial and commercial projects.',
  },
  {
    question: 'How do I choose the right PUF panel company for my project?',
    answer: 'Evaluate companies based on: manufacturing capability, quality certifications, industry experience, project portfolio, technical expertise, customer references, delivery reliability, and after-sales support. PHOENIXX excels in all these parameters.',
  },
  {
    question: 'What is PHOENIXX SmartBuild\'s experience as a PUF panel company?',
    answer: 'PHOENIXX has 18+ years of experience as a PUF panel company in India, successfully completing 150+ projects across pharmaceuticals, food processing, cold storage, warehousing, and industrial sectors with consistent quality and customer satisfaction.',
  },
  {
    question: 'Does PHOENIXX provide turnkey solutions?',
    answer: 'Yes, PHOENIXX offers complete turnkey solutions including design consultation, panel manufacturing, delivery, and installation support. We also integrate with PEB structures and provide complementary products like doors and cleanroom systems.',
  },
  {
    question: 'What industries does PHOENIXX serve as a PUF panel company?',
    answer: 'PHOENIXX serves diverse industries including: pharmaceutical manufacturing, food & beverage processing, cold chain logistics, warehousing & distribution, industrial manufacturing, cleanroom applications, dairy & poultry, and commercial construction.',
  },
  {
    question: 'How can I get a quote from PHOENIXX?',
    answer: 'Request a quote by: visiting our website contact form, calling our sales team at +91 93289 15237, emailing sales@phoenixxsmartbuild.com, or using our WhatsApp support. Our team responds within 24 hours with detailed quotations.',
  },
];

export default function PufPanelCompanyIndiaPage() {
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

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'PHOENIXX SmartBuild',
    description: 'Leading PUF panel company in India providing insulated panel solutions for industrial and commercial buildings.',
    url: 'https://phoenixxsmartbuild.com',
    telephone: '+91-93289-15237',
    email: 'info@phoenixxsmartbuild.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    areaServed: 'India',
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />
        <JsonLd data={organizationSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-400 mb-6">
                🏢 Your Complete Insulation Partner
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                PUF Panel Company in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild is a trusted PUF panel company in India, delivering comprehensive 
                insulated panel solutions that combine manufacturing excellence, technical expertise, 
                and reliable service for industrial and commercial infrastructure projects.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Project Quote
                </Link>
                <Link
                  href="/about-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                PHOENIXX SmartBuild – Your Trusted PUF Panel Company
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  When you partner with a <strong>PUF panel company in India</strong> like PHOENIXX SmartBuild, 
                  you gain access to more than just a product supplier – you get a comprehensive infrastructure 
                  solutions partner. Our company is built on the foundation of engineering excellence, quality 
                  manufacturing, and unwavering commitment to customer success.
                </p>
                <p>
                  Since our inception, we have been dedicated to building the next-generation industrial 
                  infrastructure ecosystem in India. Our <Link href="/products/sandwich-panels" className="text-primary hover:underline">insulated panel solutions</Link> have 
                  helped companies across <Link href="/industries/pharma-chemical" className="text-primary hover:underline">pharmaceuticals</Link>, 
                  <Link href="/industries/food-processing" className="text-primary hover:underline"> food processing</Link>, 
                  <Link href="/solutions/cold-storage-construction" className="text-primary hover:underline"> cold chain</Link>, and industrial 
                  sectors achieve their facility goals efficiently and cost-effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: '18+', label: 'Years in Business' },
                { value: '150+', label: 'Projects Delivered' },
                { value: '100+', label: 'Happy Clients' },
                { value: 'Pan-India', label: 'Service Coverage' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <div className="text-4xl md:text-5xl font-bold text-sky-600">{stat.value}</div>
                  <div className="mt-2 text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Solutions */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Complete Insulation Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'PUF Sandwich Panels',
                  description: 'High-performance insulated panels for roofing, walls, and ceilings with excellent thermal properties.',
                  link: '/products/sandwich-panels/sandwich-puf-panel',
                  icon: '🔲',
                },
                {
                  title: 'PIR Fire-Rated Panels',
                  description: 'Enhanced fire resistance panels for applications requiring superior safety compliance.',
                  link: '/products/sandwich-panels/pir-panel',
                  icon: '🔥',
                },
                {
                  title: 'Cold Storage Solutions',
                  description: 'Complete cold room and freezer panel systems for temperature-controlled facilities.',
                  link: '/solutions/cold-storage-construction',
                  icon: '❄️',
                },
                {
                  title: 'Cleanroom Panels',
                  description: 'GMP-compliant panel systems for pharmaceutical and controlled environment applications.',
                  link: '/products/cleanroom-solutions',
                  icon: '💊',
                },
                {
                  title: 'Industrial Doors',
                  description: 'Complementary door solutions including cleanroom doors and fire-rated doors.',
                  link: '/products/doors',
                  icon: '🚪',
                },
                {
                  title: 'Turnkey Projects',
                  description: 'End-to-end project execution from design to installation for complete facility solutions.',
                  link: '/solutions/peb',
                  icon: '🏗️',
                },
              ].map((solution, idx) => (
                <Link
                  key={idx}
                  href={solution.link}
                  className="group bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <span className="text-4xl">{solution.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{solution.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why PHOENIXX */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-sky-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Partner with PHOENIXX
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Manufacturing Excellence', desc: 'Advanced production with quality control' },
                { title: 'Technical Expertise', desc: 'Experienced engineering support team' },
                { title: 'Custom Solutions', desc: 'Panels tailored to your specifications' },
                { title: 'Reliable Delivery', desc: 'Pan-India logistics network' },
                { title: 'Competitive Pricing', desc: 'Factory-direct value proposition' },
                { title: 'Quality Assurance', desc: 'Rigorous testing at every stage' },
                { title: 'Project Support', desc: 'From design to installation' },
                { title: 'After-Sales Service', desc: 'Long-term partnership approach' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-sky-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Industries We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Pharmaceutical', link: '/industries/pharma-chemical' },
                { name: 'Food & Beverage', link: '/industries/food-processing' },
                { name: 'Cold Chain', link: '/solutions/cold-storage-construction' },
                { name: 'Warehousing', link: '/industries/warehousing' },
                { name: 'Manufacturing', link: '/solutions/peb' },
                { name: 'Dairy', link: '/industries/dairy' },
                { name: 'Healthcare', link: '/products/cleanroom-solutions' },
                { name: 'Commercial', link: '/solutions/peb' },
              ].map((industry, idx) => (
                <Link
                  key={idx}
                  href={industry.link}
                  className="bg-slate-50 rounded-xl p-6 text-center hover:bg-slate-100 transition-colors"
                >
                  <span className="font-semibold text-slate-900">{industry.name}</span>
                </Link>
              ))}
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-sky-600 to-blue-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Partner with India&apos;s Trusted PUF Panel Company
            </h2>
            <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
              Experience the PHOENIXX difference – quality products, expert support, and reliable service.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-sky-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

