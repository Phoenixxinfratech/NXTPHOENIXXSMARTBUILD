import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';
import { generateOrganizationSchema, generateFAQSchema } from '@/lib/schema';
import { FAQBlock } from '@/components/blocks/faq-block';

// Homepage client logos
const homepageClients = [
  { name: 'Coca-Cola', logo: '/images/homepage-clients/coca-cola.jpg' },
  { name: 'Hershey', logo: '/images/homepage-clients/hershey.webp' },
  { name: 'Cargill', logo: '/images/homepage-clients/cargill.jpg' },
  { name: 'Bunge', logo: '/images/homepage-clients/bunge.jpg' },
  { name: 'Balaji Wafers', logo: '/images/homepage-clients/balaji.jpg' },
  { name: 'Sarhad Dairy', logo: '/images/homepage-clients/sarhad-dairy.png' },
  { name: 'Hotel Fern', logo: '/images/homepage-clients/hotel-fern.png' },
  { name: 'Info City Club', logo: '/images/homepage-clients/info-city.png' },
  { name: 'Uflex', logo: '/images/homepage-clients/uflex.png' },
  { name: 'IFGL', logo: '/images/homepage-clients/ifgl.png' },
  { name: 'Vyara Tiles', logo: '/images/homepage-clients/vyara-tiles.png' },
  { name: 'SKF Bearings', logo: '/images/homepage-clients/skf.png' },
];

export const metadata: Metadata = {
  title: 'PHOENIXX | Smart, Sustainable Infrastructure Built for Performance',
  description:
    'PHOENIXX designs and delivers high-performance insulated panels, industrial doors, cleanroom systems, and EPC solutions. From Pre-Engineered Buildings to cold chain and controlled environments.',
};

// Products data
const products = [
  {
    title: 'Wall & Roof Panels',
    description: 'High-performance insulated panels engineered for thermal efficiency, structural strength, and long service life.',
    details: 'Includes PIR Panels, Sandwich PUF Panels, Roofing PUF Panels, and Wall & Ceiling Panels—ideal for energy-efficient industrial and commercial buildings.',
    href: '/products/sandwich-panels',
    icon: '🧱',
  },
  {
    title: 'Industrial & Specialty Doors',
    description: 'Precision-built doors designed for safety, hygiene, fire protection, and controlled environments.',
    details: 'Includes Cleanroom Doors, Fire-Rated Emergency Exit Doors, and Fire-Rated Multipurpose Doors, compliant with relevant standards.',
    href: '/products/doors',
    icon: '🚪',
  },
  {
    title: 'Cold Chain Solutions',
    description: 'Advanced temperature-controlled systems for storage and processing of perishable goods.',
    details: 'Cold Rooms, Freezers, Ripening Chambers, and specialized storage solutions for fruits, dairy, seeds, pharmaceuticals, and frozen products.',
    href: '/solutions/cold-storage-construction',
    icon: '❄️',
  },
  {
    title: 'Cleanroom Solutions',
    description: 'Complete cleanroom building systems engineered for contamination-controlled environments.',
    details: 'Includes partitions, doors, false ceilings, and compatible flooring systems such as Epoxy, PU, and Rubber flooring.',
    href: '/products/cleanroom-solutions',
    icon: '🔬',
  },
];

// Solutions data
const solutions = [
  {
    title: 'Pre-Engineered Buildings (PEB)',
    description: 'Design, supply, and construction of robust steel structures for warehouses, factories, workshops, and multi-storey facilities—optimized for speed, cost efficiency, and strength.',
    href: '/solutions/peb',
    icon: '🏭',
  },
  {
    title: 'PEB Erection Services',
    description: 'Specialized erection teams and equipment ensure safe, accurate, and time-bound assembly of PEB structures with minimal site disruption.',
    href: '/solutions/peb',
    icon: '🏗️',
  },
  {
    title: 'False Ceiling Systems',
    description: 'Walkable and non-walkable ceiling systems designed for accessibility, acoustic control, and clean aesthetics—suitable for offices, industries, and cleanrooms.',
    href: '/solutions/walkable-ceiling-systems',
    icon: '📐',
  },
  {
    title: 'Partition Solutions',
    description: 'Modular and insulated partition systems for cleanrooms, offices, and industrial spaces—offering flexibility, thermal control, and fast installation.',
    href: '/solutions/partition-solutions',
    icon: '🧱',
  },
  {
    title: 'Cold Storage Construction',
    description: 'Complete EPC execution of cold storage facilities including cold rooms, freezers, ripening chambers, and temperature-controlled warehouses.',
    href: '/solutions/cold-storage-construction',
    icon: '🧊',
  },
  {
    title: 'Turnkey Industrial EPC Projects',
    description: 'End-to-end project delivery—from concept and engineering to construction and commissioning—ensuring seamless coordination, cost control, and predictable outcomes.',
    href: '/contact-us',
    icon: '🔧',
  },
];

// Value propositions
const valueProps = [
  {
    title: 'Engineering-Driven Execution',
    description: 'Every solution is engineered for performance, compliance, and durability—reducing lifecycle costs and operational risks.',
    icon: '⚙️',
  },
  {
    title: 'Sustainability by Design',
    description: 'Energy-efficient materials, insulated systems, and responsible construction practices support ESG goals and long-term efficiency.',
    icon: '🌱',
  },
  {
    title: 'Financial & Operational Reliability',
    description: 'Strong execution capability ensures projects are delivered on time, within scope, and without compromise.',
    icon: '📊',
  },
  {
    title: 'Innovation with Practical Impact',
    description: 'From advanced insulated panels to optimized cold chain systems, our solutions are built for today\'s needs and tomorrow\'s demands.',
    icon: '💡',
  },
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: 'Consultation & Site Assessment',
    description: 'Understanding requirements, constraints, and performance objectives.',
  },
  {
    step: 2,
    title: 'Design & Engineering',
    description: 'Detailed engineering with compliance, efficiency, and scalability at the core.',
  },
  {
    step: 3,
    title: 'Procurement & Construction',
    description: 'Quality-controlled materials and skilled execution teams ensure smooth delivery.',
  },
  {
    step: 4,
    title: 'Handover & Support',
    description: 'Final commissioning, documentation, and post-handover support.',
  },
];

// Industries
const industries = [
  {
    category: 'Life Sciences & Healthcare',
    items: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices', 'Hospitals'],
    image: '/images/industries/life-sciences.jpg',
    gradient: 'from-rose-500 via-red-500 to-pink-600',
    bgPattern: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    icon: '💊',
    href: '/industries/pharma-chemical',
  },
  {
    category: 'Manufacturing & Engineering',
    items: ['Precision Engineering', 'Electronics', 'Automotive', 'Aerospace', 'Solar & Semiconductor'],
    image: '/images/industries/manufacturing.jpg',
    gradient: 'from-amber-500 via-orange-500 to-yellow-600',
    bgPattern: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    icon: '⚙️',
    href: '/industries/precision-engineering',
  },
  {
    category: 'Food & Hospitality',
    items: ['Food Processing', 'Dairy', 'Cold Chain', 'Hospitality'],
    image: '/images/industries/food-hospitality.jpg',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    bgPattern: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    icon: '🍽️',
    href: '/industries/food-processing',
  },
  {
    category: 'Industrial & Research Facilities',
    items: ['Textiles', 'Chemicals', 'R&D Facilities', 'Process Industries'],
    image: '/images/industries/research.jpg',
    gradient: 'from-blue-500 via-indigo-500 to-violet-600',
    bgPattern: 'radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    icon: '🔬',
    href: '/industries',
  },
];

// Blog insights
const insights = [
  { title: 'The Rise of Sustainable PEB Structures', slug: 'sustainable-peb-structures' },
  { title: 'Optimizing Cold Storage for Energy Efficiency', slug: 'cold-storage-energy-efficiency' },
  { title: 'Cleanroom Design Trends for Pharma Compliance', slug: 'cleanroom-design-best-practices' },
  { title: 'Delivering Turnkey EPC Projects Without Delays', slug: 'turnkey-epc-projects' },
];

// FAQs
const faqs = [
  {
    question: 'What makes PHOENIXX solutions different?',
    answer: 'Our solutions combine engineering precision, compliant materials, and on-ground execution experience—ensuring predictable performance.',
  },
  {
    question: 'Do you deliver turnkey EPC projects?',
    answer: 'Yes. We manage projects end-to-end, from planning to commissioning.',
  },
  {
    question: 'Can solutions be customized?',
    answer: 'Every project is tailored to site conditions, industry regulations, and client objectives.',
  },
  {
    question: 'How do you ensure energy efficiency?',
    answer: 'By using high-performance insulated panels, optimized designs, and proven construction methods.',
  },
];

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faqSchema} />

      <AISummaryBlock
        summary="PHOENIXX designs and delivers high-performance insulated panels, industrial doors, cleanroom systems, and EPC solutions for modern infrastructure. Products include PIR Panels, Sandwich PUF Panels, Cleanroom Doors, Fire-Rated Doors. Solutions include Pre-Engineered Buildings (PEB), Cold Storage Construction, Cleanroom Systems, and Turnkey EPC Projects. Serving pharmaceuticals, food processing, dairy, cold chain, automotive, aerospace, and hospitality industries."
        keywords={['insulated panels', 'PEB', 'cleanroom', 'cold storage', 'EPC', 'PIR panels', 'PUF panels']}
      />

      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Engineering Excellence Since 2013
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Smart, Sustainable Infrastructure{' '}
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Built for Performance
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed">
              PHOENIXX designs and delivers high-performance insulated panels, industrial doors, 
              cleanroom systems, and EPC solutions for modern infrastructure.
            </p>
            <p className="mt-4 text-base md:text-lg text-slate-500 max-w-3xl">
              From Pre-Engineered Buildings to cold chain and controlled environments, we engineer 
              spaces that are efficient, durable, compliant, and future-ready.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/get-a-quote"
                className="btn-primary group"
              >
                Request a Free Technical Quote
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/solutions"
                className="btn-secondary"
              >
                Explore Our Solutions
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '12+', label: 'Years Experience' },
                { value: '500+', label: 'Projects Delivered' },
                { value: '8+', label: 'Industries Served' },
                { value: '100%', label: 'On-Time Delivery' },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <p className="text-3xl md:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
      </section>

      {/* ========== TRUST & CREDIBILITY SECTION ========== */}
      <section className="py-16 border-b border-slate-200 bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              Trusted by Forward-Thinking Industries
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Leading manufacturers, processors, and infrastructure developers rely on PHOENIXX 
              for mission-critical projects where performance, compliance, and timelines matter.
            </p>
          </div>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 items-center justify-items-center">
            {homepageClients.map((client) => (
              <div
                key={client.name}
                className="group w-full h-20 md:h-24 rounded-xl bg-white border border-slate-200 flex items-center justify-center p-4 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 hover:shadow-lg hover:border-blue-300"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={60}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-slate-500 max-w-2xl mx-auto">
            From fast-growing enterprises to established industrial leaders, our clients trust 
            PHOENIXX for reliable execution, technical clarity, and long-term value.
          </p>
        </div>
      </section>

      {/* ========== PRODUCTS OVERVIEW SECTION ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Engineered Products for High-Performance Buildings
            </h2>
            <p className="mt-4 text-slate-600">
              PHOENIXX offers a complete portfolio of insulated building products designed to 
              meet demanding industrial, cleanroom, and cold chain requirements.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="flex items-start gap-5">
                  <span className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-emerald-100 flex items-center justify-center text-3xl">
                    {product.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{product.description}</p>
                    <p className="mt-2 text-sm text-slate-500">{product.details}</p>
                    <Link
                      href={product.href}
                      className="mt-4 inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all"
                    >
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-slate-800"
            >
              Browse All Products
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SOLUTIONS OVERVIEW SECTION ========== */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Integrated Solutions for Complex Infrastructure Needs
            </h2>
            <p className="mt-4 text-slate-600">
              PHOENIXX delivers end-to-end solutions that combine engineering, manufacturing, 
              and execution—tailored to project requirements, site conditions, and regulatory standards.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group relative rounded-xl border border-slate-200 bg-white p-6 transition-all hover:shadow-lg hover:border-emerald-200"
              >
                <span className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center text-2xl mb-4">
                  {solution.icon}
                </span>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {solution.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact-us"
              className="btn-primary"
            >
              Schedule a Technical Consultation
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== VALUE PROPOSITION SECTION ========== */}
      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-blue-300 text-sm font-medium mb-4">
              Why PHOENIXX
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why PHOENIXX is the Preferred Choice
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <span className="inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20 items-center justify-center text-3xl mb-4">
                  {prop.icon}
                </span>
                <h3 className="text-lg font-bold text-white">{prop.title}</h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about-us"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Discover How PHOENIXX Adds Value
            </Link>
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Our Proven Project Delivery Process
            </h2>
            <p className="mt-4 text-slate-600">
              At PHOENIXX, we simplify complex infrastructure projects through a structured, 
              transparent, and client-focused approach.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, idx) => (
              <div key={step.step} className="relative">
                {/* Connector Line */}
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-violet-300 to-transparent -translate-x-4" />
                )}
                
                <div className="text-center p-6">
                  <div className="inline-flex w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg shadow-violet-500/30">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/get-a-quote"
              className="btn-primary"
            >
              Start Your Project with PHOENIXX
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== INDUSTRIES SECTION ========== */}
      <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Powering Infrastructure Across Diverse Industries
            </h2>
            <p className="mt-4 text-slate-600">
              PHOENIXX delivers specialized solutions for industries with stringent operational, 
              regulatory, and performance requirements.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry.category}
                href={industry.href}
                className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Industry Image/Gradient Header */}
                <div className="relative h-52 overflow-hidden">
                  {/* Gradient Background */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${industry.gradient}`}
                    style={{ backgroundImage: industry.bgPattern }}
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-4 right-4 w-32 h-32 border border-white/20 rounded-full" />
                    <div className="absolute -bottom-8 -left-8 w-40 h-40 border border-white/10 rounded-full" />
                  </div>
                  
                  {/* Icon */}
                  <div className="absolute top-5 left-5 w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl shadow-lg">
                    {industry.icon}
                  </div>
                  
                  {/* Category title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/50 to-transparent">
                    <h3 className="text-xl font-bold text-white drop-shadow-lg leading-tight">
                      {industry.category}
                    </h3>
                  </div>
                </div>

                {/* Items list */}
                <div className="p-5 bg-white">
                  <ul className="space-y-2">
                    {industry.items.map((item) => (
                      <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">
                      Explore Solutions
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
            >
              View All Industries
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== INSIGHTS SECTION ========== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium mb-4">
                PHOENIXX Insights
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Knowledge & Expertise
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl">
                Stay informed with expert perspectives on insulated construction, cleanrooms, 
                cold chain infrastructure, and EPC best practices.
              </p>
            </div>
            <Link
              href="/resources/blogs"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 text-cyan-600 font-semibold hover:gap-3 transition-all"
            >
              View All Insights
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {insights.map((insight) => (
              <Link
                key={insight.slug}
                href={`/resources/blogs/${insight.slug}`}
                className="group rounded-xl border border-slate-200 bg-white overflow-hidden transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center">
                  <span className="text-4xl opacity-30">📝</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-600 font-medium">
                    Read More
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-slate-200 text-slate-700 text-sm font-medium mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <FAQBlock faqs={faqs} />

            <div className="mt-10 text-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-slate-800"
              >
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA SECTION ========== */}
      <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Build Something Great?
          </h2>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and discover how PHOENIXX can deliver 
            infrastructure that performs, complies, and endures.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-a-quote"
              className="btn-primary"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
