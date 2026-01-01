import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';

export const metadata: Metadata = {
  title: 'Industrial Doors Manufacturer India | Cleanroom, Fire Rated & Cold Storage Doors | PHOENIXX',
  description: 'PHOENIXX manufactures high-performance industrial doors including Cleanroom Doors, Fire Rated Doors (30-120 min), Cold Storage Doors, and Hermetic Doors. IS/BS/UL certified. Custom sizes available.',
  keywords: [
    'industrial doors', 'cleanroom doors', 'fire rated doors', 'cold storage doors',
    'hermetic doors', 'fire doors manufacturer india', 'cleanroom door supplier',
    'pharmaceutical doors', 'IS fire rated doors', 'emergency exit doors',
  ],
  alternates: { canonical: '/products/doors' },
};

const doorsData = {
  aiSummary: 'PHOENIXX manufactures Industrial Doors in India: Cleanroom Doors (ISO 5-8), Fire Rated Doors (30-120 min, IS/BS/UL certified), Cold Storage Doors (-40°C to +15°C), Hermetic Doors. Applications: Pharmaceutical, Healthcare, Food Processing, Cold Chain, Data Centers. Location: Ahmedabad, Gujarat. Pan-India delivery.',
  keywords: ['industrial doors', 'cleanroom doors', 'fire rated doors', 'cold storage doors', 'hermetic doors'],
  stats: [
    { value: '50+', label: 'Door Projects' },
    { value: '15+', label: 'Door Types' },
    { value: '120', label: 'Min Fire Rating' },
    { value: 'ISO 5-8', label: 'Cleanroom Class' },
  ],
  benefits: [
    { icon: '🔥', title: 'Fire Safety', description: 'Doors rated 30 to 120 minutes fire resistance, IS/BS/UL certified for life safety compliance.' },
    { icon: '🧹', title: 'Hygienic Design', description: 'Flush surfaces, no ledges, easy to clean—ideal for GMP, FDA, and cleanroom environments.' },
    { icon: '❄️', title: 'Thermal Performance', description: 'Insulated doors maintaining temperature integrity for cold storage (-40°C to +15°C).' },
    { icon: '🔒', title: 'Security & Access', description: 'Compatible with access control, interlocks, and emergency panic hardware.' },
    { icon: '⚙️', title: 'Automation Ready', description: 'Integrate with automatic openers, sensors, and building management systems.' },
  ],
  products: [
    {
      slug: 'cleanroom-door',
      name: 'Cleanroom Doors',
      description: 'Flush-finish doors for pharmaceutical, healthcare, and electronics cleanrooms. Available in swing, sliding, and hermetic configurations.',
      keywords: 'Cleanroom doors, GMP doors, pharmaceutical doors, ISO cleanroom doors',
      image: '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg',
      link: '/products/doors/cleanroom-door',
      features: ['ISO Class 5-8 compatible', 'Magnetic/brush seals', 'SS304/316 hardware', 'Interlock ready'],
    },
    {
      slug: 'fire-door-emergency-exit',
      name: 'Fire Door – Emergency Exit',
      description: 'Fire-rated doors with panic bar hardware for emergency evacuation routes. 30-120 minute ratings available.',
      keywords: 'Fire doors, emergency exit doors, panic doors, fire rated doors India',
      image: '/images/products/doors/fire-door/TORDRIX_FIRE_DOOR2.jpg',
      link: '/products/doors/fire-door-emergency-exit',
      features: ['30/60/90/120 min fire rating', 'EN 1125 panic hardware', 'Self-closing mechanism', 'Smoke seals'],
    },
    {
      slug: 'fire-rated-multipurpose-door',
      name: 'Fire Rated Multipurpose Door',
      description: 'Versatile fire-rated doors for industrial, commercial, and institutional buildings with multiple finish options.',
      keywords: 'Fire rated doors, multipurpose doors, industrial fire doors',
      image: '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-1.jpg',
      link: '/products/doors/fire-rated-multipurpose-door',
      features: ['Multiple fire ratings', 'Custom sizes', 'Various finishes', 'Hardware options'],
    },
    {
      slug: 'cold-storage-door',
      name: 'Cold Storage Doors',
      description: 'Insulated doors for cold rooms, freezers, and temperature-controlled facilities. Sliding, swing, and high-speed options.',
      keywords: 'Cold storage doors, freezer doors, cold room doors, insulated doors',
      image: '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-1.jpg',
      link: '/solutions/cold-storage-construction',
      features: ['-40°C to +15°C range', 'Heated frames', 'PUF/PIR insulation', 'Strip curtains'],
    },
    {
      slug: 'hermetic-door',
      name: 'Hermetic Doors',
      description: 'Airtight sliding doors for hospitals, laboratories, and cleanrooms requiring pressure differentials.',
      keywords: 'Hermetic doors, hospital doors, airtight doors, OT doors',
      image: '/images/products/cleanroom/doors/Cleanroom-Door-Manufacturer-in-Ahmedabad-10.jpg',
      link: '/products/cleanroom-solutions/cleanroom-doors',
      features: ['Airtight sealing', 'Automatic operation', 'Foot sensors', 'Lead-lined option'],
    },
  ],
  specifications: {
    types: ['Swing', 'Sliding', 'Hermetic', 'High-Speed', 'Sectional'],
    materials: ['Steel', 'Stainless Steel 304/316', 'Aluminum', 'GI Powder Coated'],
    fireRatings: ['30 min', '60 min', '90 min', '120 min'],
    glazing: ['Full glass', 'Half glass', 'Vision panel', 'Wire glass', 'Fire-rated glass'],
    sealing: ['Magnetic', 'Brush', 'Inflatable', 'Intumescent'],
    hardware: ['SS 304', 'SS 316', 'EN 1125 certified', 'EN 1154 closer'],
  },
  applications: [
    { question: 'Which door is best for pharmaceutical cleanrooms?', answer: 'For pharmaceutical cleanrooms, we recommend Cleanroom Doors with flush surfaces, magnetic sealing, and SS316 hardware. Available in swing, sliding, or hermetic configurations for ISO Class 5-8 environments.' },
    { question: 'What fire rating do I need for my building?', answer: 'Fire rating depends on building codes and occupancy: 30 min for low-risk areas, 60 min for corridors, 90-120 min for high-risk zones. Our doors are IS/BS certified and comply with NBC requirements.' },
    { question: 'Are cold storage doors available for deep freezers?', answer: 'Yes. Our cold storage doors operate from +15°C to -40°C. For deep freezers, we provide heated frames, triple sealing, and 120-150mm insulation to prevent ice formation.' },
    { question: 'Can doors be integrated with access control?', answer: 'Yes. All our doors are automation-ready and compatible with card readers, biometric systems, interlocks, and BMS integration for controlled access and monitoring.' },
    { question: 'Do you provide automatic doors?', answer: 'Yes. We offer automatic swing, sliding, and hermetic doors with sensors, remote controls, and emergency manual override for hospitals, cleanrooms, and high-traffic areas.' },
  ],
  testimonial: {
    quote: 'PHOENIXX delivered 28 fire-rated doors for our new pharmaceutical facility. The quality, certification, and installation were impeccable. Highly recommended for GMP projects.',
    author: 'Project Manager',
    company: 'Leading Pharmaceutical Company, Gujarat',
    rating: 4.8,
    reviews: 45,
  },
  industries: ['Pharmaceutical', 'Healthcare', 'Food Processing', 'Cold Chain', 'Data Centers', 'Hospitality', 'Industrial'],
  faqs: [
    { question: 'What certifications do your fire doors have?', answer: 'Our fire doors are certified to IS 3614, BS 476, and UL standards. We provide test certificates and compliance documentation for all fire-rated products.' },
    { question: 'What is the difference between cleanroom and hermetic doors?', answer: 'Cleanroom doors provide flush surfaces and good sealing for ISO 5-8 environments. Hermetic doors offer airtight sealing with inflatable gaskets for pressure-controlled areas like OTs and BSL labs.' },
    { question: 'Can fire doors have glass panels?', answer: 'Yes. Fire-rated vision panels are available in all ratings (30-120 min). We use certified fire-rated glass with appropriate intumescent seals.' },
    { question: 'What hardware options are available?', answer: 'We offer SS304/316 hardware including handles, hinges, closers (EN 1154), panic devices (EN 1125), magnetic locks, and floor springs. All hardware meets relevant standards.' },
    { question: 'Do you provide door frames also?', answer: 'Yes. We supply complete door assemblies including frames, doors, hardware, and seals. Frames are available in pressed steel, aluminum, or stainless steel.' },
    { question: 'What is the lead time for custom doors?', answer: 'Standard doors: 15-20 days. Fire-rated doors: 20-30 days. Custom specifications: 25-35 days. We can expedite for urgent requirements.' },
    { question: 'Do you offer installation services?', answer: 'Yes. Professional installation by trained teams ensures proper fitting, alignment, and sealing. We provide commissioning certificates and warranty coverage.' },
    { question: 'What warranty do you provide on doors?', answer: 'We offer 2 years warranty on door panels, 1 year on hardware and automation components. Extended warranty available. Fire rating certification is lifelong.' },
    { question: 'Can doors be repaired if damaged?', answer: 'Yes. We provide AMC services and spare parts for all our doors. Minor damages can be repaired; major fire-rated door damages require replacement for safety compliance.' },
    { question: 'Are your doors suitable for coastal areas?', answer: 'Yes. For coastal/corrosive environments, we recommend SS316 hardware, PVDF coating, and marine-grade sealing. Additional corrosion protection measures are available.' },
    { question: 'Do you supply doors pan-India?', answer: 'Yes. We supply and install doors across India with logistics support to 20+ cities. Site survey and installation services available nationwide.' },
    { question: 'Can I get a sample door for approval?', answer: 'We provide door samples and mock-ups for large projects. Alternatively, visit our facility in Ahmedabad to inspect door samples and manufacturing quality.' },
  ],
};

export default function DoorsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://phoenixxsmartbuild.com/products' },
      { '@type': 'ListItem', position: 3, name: 'Doors', item: 'https://phoenixxsmartbuild.com/products/doors' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: doorsData.faqs.map((faq) => ({
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
        <AISummaryBlock summary={doorsData.aiSummary} keywords={doorsData.keywords} />

        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg"
              alt="Industrial Doors"
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
              <span className="text-white">Doors</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Industrial Doors — Cleanroom, Fire Rated & Cold Storage Door Solutions
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                PHOENIXX manufactures <strong className="text-white">Cleanroom Doors, Fire Rated Doors (30-120 min), Cold Storage Doors, and Hermetic Doors</strong> for pharmaceutical, healthcare, food processing, and industrial applications. All doors are IS/BS/UL certified with custom sizes and automation options.
              </p>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {doorsData.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#products" className="btn-primary px-6 py-3">Explore Door Types</Link>
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
              Why Choose PHOENIXX Industrial Doors?
            </h2>
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {doorsData.benefits.map((benefit) => (
                <div key={benefit.title} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-orange-50 transition-colors">
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
              <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">Complete Door Range</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Explore Our Industrial Door Solutions</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {doorsData.products.map((product) => (
                <Link key={product.slug} href={product.link} className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{product.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{product.description}</p>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {product.features.slice(0, 2).map((f) => (
                        <span key={f} className="text-xs px-2 py-1 bg-slate-100 rounded text-slate-600">{f}</span>
                      ))}
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-orange-600">View Details →</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/products/sandwich-panels" className="text-orange-600 font-semibold hover:underline">
                Also explore: Sandwich Panels for your door frame insulation →
              </Link>
            </div>
          </div>
        </section>

        {/* Specifications Table */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Technical Specifications Overview</h2>
            <div className="max-w-4xl mx-auto overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="text-left p-4 font-bold text-slate-900 border-b">Parameter</th>
                    <th className="text-left p-4 font-bold text-slate-900 border-b">Options Available</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="p-4 text-slate-600">Door Types</td>
                    <td className="p-4 font-medium text-slate-900">{doorsData.specifications.types.join(', ')}</td>
                  </tr>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="p-4 text-slate-600">Frame Materials</td>
                    <td className="p-4 font-medium text-slate-900">{doorsData.specifications.materials.join(', ')}</td>
                  </tr>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="p-4 text-slate-600">Fire Ratings</td>
                    <td className="p-4 font-medium text-slate-900">{doorsData.specifications.fireRatings.join(', ')}</td>
                  </tr>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="p-4 text-slate-600">Glazing Options</td>
                    <td className="p-4 font-medium text-slate-900">{doorsData.specifications.glazing.join(', ')}</td>
                  </tr>
                  <tr className="border-b hover:bg-slate-50">
                    <td className="p-4 text-slate-600">Sealing Types</td>
                    <td className="p-4 font-medium text-slate-900">{doorsData.specifications.sealing.join(', ')}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 text-slate-600">Hardware Grade</td>
                    <td className="p-4 font-medium text-slate-900">{doorsData.specifications.hardware.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link href="/resources/technical-sheet" className="btn-primary-sm px-6 py-3">📄 Download Datasheet</Link>
              <Link href="/get-a-quote" className="btn-secondary-sm px-6 py-3">Request Custom Specification</Link>
            </div>
          </div>
        </section>

        {/* Applications Q&A */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-12">Application Guide</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {doorsData.applications.map((app, idx) => (
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              <div className="flex">{[1,2,3,4,5].map((s) => <span key={s} className="text-yellow-500 text-xl">★</span>)}</div>
              <span className="text-slate-600">{doorsData.testimonial.rating}/5 from {doorsData.testimonial.reviews}+ clients</span>
            </div>
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-700 italic">&ldquo;{doorsData.testimonial.quote}&rdquo;</p>
              <footer className="mt-4">
                <p className="font-bold text-slate-900">{doorsData.testimonial.author}</p>
                <p className="text-slate-600">{doorsData.testimonial.company}</p>
              </footer>
            </blockquote>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {doorsData.industries.map((ind) => (
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
              {doorsData.faqs.map((faq, idx) => (
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
        <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Need Industrial Doors for Your Project?</h2>
            <p className="mt-4 text-orange-100 max-w-2xl mx-auto">Contact our team for technical consultation, custom specifications, or competitive quotations.</p>
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



