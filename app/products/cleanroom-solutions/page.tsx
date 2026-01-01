import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';

export const metadata: Metadata = {
  title: 'Cleanroom Solutions Manufacturer India | Partitions, Ceilings, Doors & Flooring | PHOENIXX',
  description: 'PHOENIXX manufactures modular cleanroom solutions: Partitions, False Ceilings (walkable/non-walkable), Cleanroom Doors, and Flooring systems for ISO Class 5-8 environments. GMP/FDA compliant.',
  keywords: [
    'cleanroom solutions', 'cleanroom partitions', 'cleanroom ceilings', 'modular cleanroom',
    'cleanroom manufacturer india', 'pharmaceutical cleanroom', 'GMP cleanroom',
    'cleanroom flooring', 'walkable ceiling', 'ISO cleanroom', 'cleanroom panels',
  ],
  alternates: { canonical: '/products/cleanroom-solutions' },
};

const cleanroomData = {
  aiSummary: 'PHOENIXX manufactures Cleanroom Solutions in India: Modular Partitions, Walkable/Non-walkable Ceilings, Cleanroom Doors, and Epoxy/PU Flooring for ISO Class 5-8 environments. GMP, FDA, WHO compliant. Applications: Pharmaceutical, Biotechnology, Electronics, Healthcare, Food Processing. Location: Ahmedabad, Gujarat.',
  keywords: ['cleanroom solutions', 'cleanroom partitions', 'cleanroom ceilings', 'modular cleanroom', 'pharmaceutical cleanroom'],
  stats: [
    { value: '80+', label: 'Cleanroom Projects' },
    { value: 'ISO 5-8', label: 'Class Range' },
    { value: 'GMP/FDA', label: 'Compliant' },
    { value: '200 kg/m²', label: 'Walkable Load' },
  ],
  benefits: [
    { icon: '🔬', title: 'ISO Compliance', description: 'Designed for ISO Class 5-8 cleanrooms meeting international contamination control standards.' },
    { icon: '💊', title: 'GMP/FDA Ready', description: 'Pharmaceutical-grade finishes compliant with GMP, FDA, and WHO manufacturing guidelines.' },
    { icon: '🧩', title: 'Modular Design', description: 'Pre-engineered components for rapid installation and easy future expansion or modification.' },
    { icon: '✨', title: 'Low Particle Generation', description: 'Flush surfaces, sealed joints, and coved corners minimize particle accumulation.' },
    { icon: '🛠️', title: 'Service Integration', description: 'Designed for HEPA filters, lighting, HVAC, and utility integration without air leakage.' },
  ],
  products: [
    {
      slug: 'cleanroom-partition',
      name: 'Cleanroom Partitions',
      description: 'Modular wall systems with flush surfaces for pharmaceutical, biotech, and electronics cleanrooms. Available in sandwich panel and hollow-core configurations.',
      keywords: 'Cleanroom partitions, modular walls, GMP partitions, cleanroom panels',
      image: '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat1.jpg',
      link: '/products/cleanroom-solutions/cleanroom-partition',
      features: ['50-100mm thickness', 'Coved corners', 'HPL/Steel/Glass finish', 'Cam-lock joints'],
    },
    {
      slug: 'cleanroom-false-ceiling',
      name: 'Cleanroom False Ceiling',
      description: 'Walkable and non-walkable ceiling systems with HEPA filter integration, gel sealing, and maintenance access for ISO 5-8 cleanrooms.',
      keywords: 'Cleanroom ceiling, walkable ceiling, HEPA ceiling, pharmaceutical ceiling',
      image: '/images/products/cleanroom/ceiling/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
      link: '/products/cleanroom-solutions/cleanroom-false-ceiling',
      features: ['200 kg/m² walkable', 'HEPA integration', 'Gel/gasket sealing', 'LED lighting'],
    },
    {
      slug: 'cleanroom-doors',
      name: 'Cleanroom Doors',
      description: 'Flush-finish doors with magnetic/brush sealing for controlled environment applications. Swing, sliding, and hermetic options available.',
      keywords: 'Cleanroom doors, pharmaceutical doors, hermetic doors, GMP doors',
      image: '/images/products/cleanroom/doors/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg',
      link: '/products/cleanroom-solutions/cleanroom-doors',
      features: ['Airtight sealing', 'Interlock compatible', 'SS hardware', 'Automation ready'],
    },
    {
      slug: 'cleanroom-flooring',
      name: 'Cleanroom Flooring',
      description: 'Seamless epoxy, PU, and ESD flooring systems for pharmaceutical, electronics, and healthcare cleanrooms. Chemical and abrasion resistant.',
      keywords: 'Cleanroom flooring, epoxy flooring, PU flooring, ESD flooring, pharmaceutical flooring',
      image: '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-1.jpg',
      link: '/products/cleanroom-solutions/cleanroom-flooring',
      features: ['Seamless finish', 'Chemical resistant', 'ESD options', 'Coved skirting'],
    },
  ],
  specifications: {
    partitions: { thickness: '50/75/100 mm', height: 'Up to 6000 mm', finish: 'HPL/Steel/Glass', joint: 'Cam-lock/H-profile' },
    ceiling: { type: 'Walkable/Non-walkable', load: 'Up to 200 kg/m²', grid: '600x600 / 1200x600 mm', sealing: 'Gel/Gasket' },
    doors: { type: 'Swing/Sliding/Hermetic', sealing: 'Magnetic/Brush/Inflatable', frame: 'SS304/316/Aluminum', glass: 'Full/Half/Vision' },
    flooring: { type: 'Epoxy/PU/ESD', thickness: '2-6 mm', finish: 'Self-leveling/Mortar', curing: '7-14 days' },
  },
  applications: [
    { question: 'What cleanroom class can your products achieve?', answer: 'Our cleanroom products support ISO Class 5 to ISO Class 8 environments. For ISO 5, we recommend walkable ceilings with gel-sealed HEPA filters, flush partitions with coved corners, and hermetic doors. For ISO 7-8, non-walkable ceilings and standard cleanroom doors are suitable.' },
    { question: 'Are your products suitable for pharmaceutical manufacturing?', answer: 'Yes. All our cleanroom products are designed to meet GMP, FDA 21 CFR Part 211, and WHO guidelines. We provide smooth, non-porous surfaces, coved corners, and proper sealing to prevent microbial growth and ensure easy cleaning.' },
    { question: 'Can cleanroom partitions be relocated?', answer: 'Yes. Our modular partition systems use cam-lock or H-profile joints that allow disassembly and reassembly. This is ideal for facilities that need to reconfigure layouts for new production lines or equipment changes.' },
    { question: 'What flooring is recommended for electronics cleanrooms?', answer: 'For electronics manufacturing and semiconductor facilities, we recommend ESD (Electrostatic Dissipative) epoxy or PU flooring with resistance of 10⁶ to 10⁹ ohms. This prevents static discharge that could damage sensitive components.' },
    { question: 'Do you provide turnkey cleanroom construction?', answer: 'Yes. PHOENIXX offers complete cleanroom solutions from design to commissioning including HVAC, electrical, HEPA filtration, and validation support. We can deliver single cleanrooms or multi-room facilities.' },
  ],
  testimonial: {
    quote: 'PHOENIXX built our ISO Class 7 pharmaceutical cleanroom in record time. The modular system allowed us to expand capacity within 3 weeks when demand increased. Excellent quality and support.',
    author: 'Production Head',
    company: 'API Manufacturer, Ahmedabad',
    rating: 4.9,
    reviews: 65,
  },
  industries: ['Pharmaceutical', 'Biotechnology', 'Electronics', 'Semiconductor', 'Healthcare', 'Food Processing', 'Research Labs'],
  faqs: [
    { question: 'What is the difference between ISO Class 5 and ISO Class 8?', answer: 'ISO 14644-1 classifies cleanrooms by particle counts. ISO 5 allows 3,520 particles ≥0.5µm per m³ (most stringent), while ISO 8 allows 3,520,000 particles. Pharmaceutical sterile manufacturing typically requires ISO 5-7, while packaging may use ISO 8.' },
    { question: 'What materials are used in cleanroom partitions?', answer: 'We use sandwich panels (PUF/PIR core with steel/HPL facing), hollow-core panels for non-load-bearing walls, and aluminum framing. All materials are smooth, non-porous, and resistant to cleaning chemicals.' },
    { question: 'How is air leakage prevented in cleanrooms?', answer: 'We use multiple sealing methods: cam-lock joints with gaskets for partitions, gel or gasket sealing for HEPA filters, magnetic/brush seals for doors, and coved corners with sealant. Positive pressure differentials maintain contamination control.' },
    { question: 'What is a walkable ceiling and when is it needed?', answer: 'Walkable ceilings support loads up to 200 kg/m² for maintenance personnel to access HEPA filters, dampers, and utilities from above. Required for larger cleanrooms with frequent filter changes or complex MEP systems.' },
    { question: 'Can cleanroom doors have interlocks?', answer: 'Yes. We provide interlock systems where two doors cannot open simultaneously, maintaining pressure differentials and preventing contamination during personnel/material transfer between areas of different cleanliness levels.' },
    { question: 'What is the curing time for cleanroom flooring?', answer: 'Epoxy flooring requires 7 days minimum cure before light traffic and 14 days for full cure. PU flooring cures faster (5-7 days). We can use fast-cure systems for urgent projects with reduced timelines.' },
    { question: 'Do you provide cleanroom validation support?', answer: 'Yes. We assist with IQ/OQ documentation and coordinate with validation consultants for particle count testing, air velocity, pressure differential, and recovery time measurements as per ISO 14644.' },
    { question: 'What HEPA filter sizes do you support?', answer: 'Standard sizes: 2\'x4\' (610x1220mm), 2\'x2\' (610x610mm), and custom sizes. We support terminal housings for both gel-seal and gasket-seal filters with H13/H14 efficiency (99.95-99.995% @ 0.3µm).' },
    { question: 'Can glass panels be used in cleanroom walls?', answer: 'Yes. We provide flush-glazed and vision panels in cleanroom partitions using toughened glass (8-12mm) or laminated safety glass. Frames are flush-mounted with silicone sealing for cleanroom integrity.' },
    { question: 'What is ESD flooring and where is it used?', answer: 'ESD (Electrostatic Dissipative) flooring has controlled electrical resistance (10⁶-10⁹ ohms) to safely dissipate static charges. Essential for electronics, semiconductor, and explosive atmosphere cleanrooms where static discharge causes defects or hazards.' },
    { question: 'How long does cleanroom construction take?', answer: 'Typical timelines: Small cleanroom (100-500 sq.ft): 4-6 weeks. Medium cleanroom (500-2000 sq.ft): 6-10 weeks. Large facility (2000+ sq.ft): 10-16 weeks. Modular systems reduce time by 30-40% vs conventional construction.' },
    { question: 'What warranty do you provide on cleanroom products?', answer: 'Partitions/Ceilings: 5 years on structural integrity, 2 years on finish. Doors: 2 years on door, 1 year on hardware. Flooring: 2 years on delamination. All warranties cover manufacturing defects under normal use.' },
  ],
};

export default function CleanroomSolutionsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://phoenixxsmartbuild.com/products' },
      { '@type': 'ListItem', position: 3, name: 'Cleanroom Solutions', item: 'https://phoenixxsmartbuild.com/products/cleanroom-solutions' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cleanroomData.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />
        <AISummaryBlock summary={cleanroomData.aiSummary} keywords={cleanroomData.keywords} />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat1.jpg"
              alt="Cleanroom Solutions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          </div>

          <div className="container-custom relative z-10 py-16 md:py-24">
            <nav className="mb-6 text-sm text-white/60">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Cleanroom Solutions</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Cleanroom Solutions — Modular Partitions, Ceilings, Doors & Flooring for GMP Environments
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                PHOENIXX manufactures complete <strong className="text-white">Cleanroom Systems</strong> including <Link href="/products/cleanroom-solutions/cleanroom-partition" className="text-emerald-400 hover:underline">Modular Partitions</Link>, <Link href="/products/cleanroom-solutions/cleanroom-false-ceiling" className="text-emerald-400 hover:underline">Walkable Ceilings</Link>, <Link href="/products/cleanroom-solutions/cleanroom-doors" className="text-emerald-400 hover:underline">Cleanroom Doors</Link>, and <Link href="/products/cleanroom-solutions/cleanroom-flooring" className="text-emerald-400 hover:underline">Epoxy/PU Flooring</Link> for ISO Class 5-8 environments. GMP, FDA, and WHO compliant.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {cleanroomData.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#products" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl">
                  Explore Cleanroom Products
                </Link>
                <Link href="/get-a-quote" className="btn-white px-6 py-3">Request Quote</Link>
                <Link href="/resources/brochure" className="btn-secondary px-6 py-3">📄 Download Catalogue</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">
              Why Choose PHOENIXX Cleanroom Solutions?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {cleanroomData.benefits.map((benefit) => (
                <div key={benefit.title} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-emerald-50 transition-colors">
                  <span className="text-4xl">{benefit.icon}</span>
                  <h3 className="mt-4 font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="products" className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">Complete Cleanroom Range</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore Our Cleanroom Product Portfolio</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {cleanroomData.products.map((product) => (
                <Link key={product.slug} href={product.link} className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{product.name}</h3>
                      <p className="mt-3 text-slate-600">{product.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {product.features.map((f) => (
                          <span key={f} className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded">{f}</span>
                        ))}
                      </div>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600">View Details →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center space-x-4">
              <Link href="/solutions/cleanroom-solutions" className="text-emerald-600 font-semibold hover:underline">
                View Complete Cleanroom Construction Services →
              </Link>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Technical Specifications</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 pb-3 border-b">Partitions</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Thickness</span><span className="text-slate-900">{cleanroomData.specifications.partitions.thickness}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Height</span><span className="text-slate-900">{cleanroomData.specifications.partitions.height}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Finish</span><span className="text-slate-900">{cleanroomData.specifications.partitions.finish}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Joint</span><span className="text-slate-900">{cleanroomData.specifications.partitions.joint}</span></div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 pb-3 border-b">Ceilings</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="text-slate-900">{cleanroomData.specifications.ceiling.type}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Load</span><span className="text-slate-900">{cleanroomData.specifications.ceiling.load}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Grid</span><span className="text-slate-900">{cleanroomData.specifications.ceiling.grid}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Sealing</span><span className="text-slate-900">{cleanroomData.specifications.ceiling.sealing}</span></div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 pb-3 border-b">Doors</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="text-slate-900">{cleanroomData.specifications.doors.type}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Sealing</span><span className="text-slate-900">{cleanroomData.specifications.doors.sealing}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Frame</span><span className="text-slate-900">{cleanroomData.specifications.doors.frame}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Glass</span><span className="text-slate-900">{cleanroomData.specifications.doors.glass}</span></div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="font-bold text-slate-900 mb-4 pb-3 border-b">Flooring</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-slate-500">Type</span><span className="text-slate-900">{cleanroomData.specifications.flooring.type}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Thickness</span><span className="text-slate-900">{cleanroomData.specifications.flooring.thickness}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Finish</span><span className="text-slate-900">{cleanroomData.specifications.flooring.finish}</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Curing</span><span className="text-slate-900">{cleanroomData.specifications.flooring.curing}</span></div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/resources/technical-sheet" className="btn-primary-sm px-6 py-3">📄 Download Specifications</Link>
              <Link href="/get-a-quote" className="btn-secondary-sm px-6 py-3">Request Custom Configuration</Link>
            </div>
          </div>
        </section>

        {/* Applications Q&A */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Application Guide</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {cleanroomData.applications.map((app, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">{app.question}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{app.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Pharma & Biotech Leaders</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-500 text-xl">★</span>)}</div>
              <span className="text-slate-600">{cleanroomData.testimonial.rating}/5 from {cleanroomData.testimonial.reviews}+ projects</span>
            </div>
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-700 italic">&ldquo;{cleanroomData.testimonial.quote}&rdquo;</p>
              <footer className="mt-4">
                <p className="font-bold text-slate-900">{cleanroomData.testimonial.author}</p>
                <p className="text-slate-600">{cleanroomData.testimonial.company}</p>
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {cleanroomData.industries.map((ind) => (
                <span key={ind} className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">{ind}</span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-3">
              {cleanroomData.faqs.map((faq, idx) => (
                <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                    <h3 className="font-semibold text-slate-900 pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-180 transition-transform">
                      <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Build Your Cleanroom?</h2>
            <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">Contact our team for design consultation, technical specifications, or competitive quotations.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/919727700442" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600">💬 WhatsApp Us</Link>
              <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 hover:shadow-xl">📩 Request Quote</Link>
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10">Talk to Expert</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



