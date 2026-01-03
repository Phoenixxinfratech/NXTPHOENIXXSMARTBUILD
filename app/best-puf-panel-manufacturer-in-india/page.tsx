import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Best PUF Panel Manufacturer in India | PHOENIXX SmartBuild',
  description: 'PHOENIXX SmartBuild is the best PUF panel manufacturer in India. High-quality insulated panels for cold storage, warehouses & industrial buildings.',
  keywords: ['best PUF panel manufacturer in India', 'PUF panel manufacturer', 'insulated panels India', 'PHOENIXX SmartBuild'],
  alternates: {
    canonical: '/best-puf-panel-manufacturer-in-india',
  },
};

const faqs = [
  {
    question: 'Who is the best PUF panel manufacturer in India?',
    answer: 'PHOENIXX SmartBuild is recognized as one of the best PUF panel manufacturers in India, offering high-density polyurethane foam panels with superior thermal insulation, customization options, and pan-India delivery for industrial, commercial, and cold storage applications.',
  },
  {
    question: 'What makes PHOENIXX the best choice for PUF panels?',
    answer: 'PHOENIXX stands out due to in-house manufacturing with strict quality control, high-density foam (40 kg/m³), CFC & HFC-free production, custom thickness options (30-150mm), multiple coating choices, and comprehensive installation support across India.',
  },
  {
    question: 'What is the price range of PUF panels from the best manufacturers?',
    answer: 'PUF panel prices from top manufacturers like PHOENIXX typically range from ₹800 to ₹2,500 per square meter depending on thickness, coating type, and customization requirements. Contact us for project-specific pricing.',
  },
  {
    question: 'How long do PUF panels from quality manufacturers last?',
    answer: 'High-quality PUF panels from reputable manufacturers like PHOENIXX are designed to last 25-30 years with proper installation and minimal maintenance, providing excellent long-term value and energy savings.',
  },
  {
    question: 'Does PHOENIXX provide installation support across India?',
    answer: 'Yes, PHOENIXX provides complete installation support and technical guidance across all major industrial regions in India including Gujarat, Maharashtra, Rajasthan, Tamil Nadu, Karnataka, and more.',
  },
  {
    question: 'What certifications should the best PUF panel manufacturer have?',
    answer: 'The best PUF panel manufacturers should have ISO certification, fire safety compliance, thermal conductivity certifications, and material quality documentation. PHOENIXX provides all necessary compliance certificates for regulatory and insurance requirements.',
  },
];

export default function BestPufPanelManufacturerPage() {
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
    description: 'Best PUF panel manufacturer in India specializing in insulated sandwich panels for industrial and commercial applications.',
    url: 'https://phoenixxsmartbuild.com',
    areaServed: 'India',
    knowsAbout: ['PUF Panels', 'Insulated Panels', 'Cold Storage Construction', 'Industrial Buildings'],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />
        <JsonLd data={organizationSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                🏆 India&apos;s Trusted PUF Panel Manufacturer
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Best PUF Panel Manufacturer in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild delivers premium-quality polyurethane foam insulated panels 
                engineered for superior thermal performance, durability, and energy efficiency 
                across industrial, commercial, and cold storage applications in India.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Speak with Technical Team
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                About PHOENIXX SmartBuild – India&apos;s Premier PUF Panel Manufacturer
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  PHOENIXX SmartBuild has established itself as the <strong>best PUF panel manufacturer in India</strong> through 
                  a relentless commitment to quality, innovation, and customer satisfaction. With state-of-the-art manufacturing 
                  facilities and a team of experienced engineers, we produce high-performance insulated sandwich panels that meet 
                  the demanding requirements of modern industrial infrastructure.
                </p>
                <p>
                  Our manufacturing expertise spans over 18 years, during which we have successfully delivered more than 150 projects 
                  across diverse industries including pharmaceuticals, food processing, cold chain logistics, and commercial construction. 
                  With a strong <strong>pan-India presence</strong>, PHOENIXX serves clients from <Link href="/industries/pharma-chemical" className="text-primary hover:underline">Gujarat</Link> to 
                  Tamil Nadu, Maharashtra to West Bengal, ensuring consistent quality and timely delivery nationwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About PUF Panels */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Understanding PUF Insulated Panels
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  Polyurethane Foam (PUF) panels are advanced building materials consisting of a rigid foam core 
                  sandwiched between two metal facings. These <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">insulated sandwich panels</Link> offer 
                  exceptional thermal insulation properties with a thermal conductivity as low as 0.024 W/mK – making them 
                  significantly more efficient than traditional insulation materials.
                </p>
                <p>
                  The closed-cell structure of polyurethane foam provides excellent resistance to moisture, ensuring 
                  long-term performance even in humid environments. Combined with pre-painted galvanized steel facings, 
                  PUF panels deliver a complete building envelope solution that reduces construction time while maximizing 
                  energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Applications & Industries */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Applications & Industries We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Cold Storage & Cold Rooms',
                  description: 'Temperature-controlled facilities requiring precise insulation for food preservation, pharmaceuticals, and perishable goods storage.',
                  icon: '❄️',
                  link: '/solutions/cold-storage-construction',
                },
                {
                  title: 'Warehouses & Logistics',
                  description: 'Large-scale distribution centers and warehousing facilities benefiting from reduced energy costs and stable indoor temperatures.',
                  icon: '🏭',
                  link: '/industries/warehousing',
                },
                {
                  title: 'Cleanrooms & Pharma',
                  description: 'GMP-compliant manufacturing environments for pharmaceutical, biotech, and electronics industries requiring contamination control.',
                  icon: '💊',
                  link: '/products/cleanroom-solutions',
                },
                {
                  title: 'Industrial Sheds & Factories',
                  description: 'Manufacturing plants and industrial facilities requiring thermal comfort, worker productivity, and energy efficiency.',
                  icon: '🏗️',
                  link: '/solutions/peb',
                },
                {
                  title: 'Prefabricated Buildings',
                  description: 'Modular construction projects requiring fast installation, lightweight materials, and excellent insulation performance.',
                  icon: '🏢',
                  link: '/solutions/peb',
                },
                {
                  title: 'Food Processing Units',
                  description: 'Hygienic processing environments for dairy, meat, seafood, and packaged food manufacturing with temperature control.',
                  icon: '🍖',
                  link: '/industries/food-processing',
                },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="group bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose PHOENIXX */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose PHOENIXX SmartBuild?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'In-House Manufacturing',
                  description: 'Complete control over production ensures consistent quality, faster lead times, and competitive pricing.',
                  icon: '🏭',
                },
                {
                  title: 'Strict Quality Control',
                  description: 'Every panel undergoes rigorous testing for density, adhesion, thermal performance, and dimensional accuracy.',
                  icon: '✅',
                },
                {
                  title: 'Custom Solutions',
                  description: 'Panels manufactured to your exact specifications – thickness, length, coating, and performance requirements.',
                  icon: '⚙️',
                },
                {
                  title: 'Installation Support',
                  description: 'Technical guidance and on-site support to ensure proper installation and maximum panel performance.',
                  icon: '🔧',
                },
                {
                  title: 'Pan-India Delivery',
                  description: 'Efficient logistics network ensures timely delivery to project sites across all states in India.',
                  icon: '🚛',
                },
                {
                  title: 'Long-Term Value',
                  description: '25-30 year service life with minimal maintenance delivers excellent return on investment.',
                  icon: '💎',
                },
                {
                  title: 'Compliance Ready',
                  description: 'All documentation for regulatory compliance, insurance, and certification requirements.',
                  icon: '📋',
                },
                {
                  title: 'Technical Expertise',
                  description: 'Experienced engineering team provides design support and thermal calculations for optimal results.',
                  icon: '👷',
                },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Technical Specifications & Highlights
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { label: 'Panel Thickness Range', value: '30mm, 40mm, 50mm, 60mm, 80mm, 100mm, 120mm, 150mm' },
                      { label: 'Foam Density', value: '40 ± 2 kg/m³' },
                      { label: 'Thermal Conductivity', value: '0.024 W/mK' },
                      { label: 'Panel Length', value: 'Up to 20 meters (custom lengths available)' },
                      { label: 'Steel Thickness', value: '0.40mm to 0.60mm (PPGI/PPGL)' },
                      { label: 'Coating Options', value: 'SMP, SDP, PVDF' },
                      { label: 'Fire Rating Options', value: 'B1, B2, B3, PIR (enhanced fire resistance)' },
                      { label: 'Temperature Range', value: '-40°C to +80°C' },
                      { label: 'Service Life', value: '25-30 years with proper installation' },
                      { label: 'Environmental', value: 'CFC & HFC Free' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 font-semibold text-slate-900">{row.label}</td>
                        <td className="px-6 py-4 text-slate-600">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-center text-slate-600">
                View complete specifications: <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline font-medium">PUF Panel Product Page</Link>
              </p>
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
        <section className="py-16 md:py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with India&apos;s Best PUF Panel Manufacturer?
            </h2>
            <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
              Get expert guidance, competitive pricing, and reliable delivery for your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Get Project Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

