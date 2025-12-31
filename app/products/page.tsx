import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'High-Performance Infrastructure Products | Sandwich PUF Panels, Doors, Cold Chain & Cleanroom Solutions',
  description:
    'Explore PHOENIXX\'s complete range of Sandwich PUF Panels, insulated panel systems, Cold Chain solutions, Cleanroom products, and Industrial Doors. Engineered for thermal efficiency, durability, and compliance across industrial environments.',
  keywords: [
    'Sandwich PUF Panels',
    'PUF Sandwich Panel',
    'Insulated PUF Panel',
    'PU Panels',
    'Cold Storage Panels',
    'Cleanroom Panels',
    'Industrial Doors',
    'Fire Rated Doors',
    'Cold Chain Solutions',
    'Insulated Panels India',
  ],
  alternates: {
    canonical: '/products',
  },
};

// Client logos for trust section
const clientLogos = [
  { name: 'Coca-Cola', logo: '/images/clients/coca-cola.jpg' },
  { name: 'Amul', logo: '/images/clients/Amul_official_logo.svg.png' },
  { name: 'Intas Pharma', logo: '/images/clients/Intas pharma.png' },
  { name: 'SKF', logo: '/images/clients/SKF-01.png' },
  { name: 'Uflex', logo: '/images/clients/Uflex.png' },
  { name: 'Hershey', logo: '/images/clients/hershey.webp' },
  { name: 'Cargill', logo: '/images/clients/cargill.jpg' },
  { name: 'Bunge', logo: '/images/clients/bunge.jpg' },
  { name: 'Ford', logo: '/images/clients/ford.png' },
  { name: 'L&T', logo: '/images/clients/lnt.png' },
];

// Product categories with images
const productCategories = [
  {
    slug: 'sandwich-panels',
    title: 'Sandwich Panels',
    tagline: 'Energy-Efficient Insulated Panel Systems',
    description: 'Energy-efficient, durable, and versatile insulated panel systems designed for roofing, walls, and ceilings. Ideal for cold storage, cleanrooms, warehouses, food processing units, and prefabricated industrial buildings.',
    keywords: 'Sandwich PUF Panels | PUF Sandwich Panel | Insulated PUF Panel | PU Panels',
    image: '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL1.jpg',
    gradient: 'from-blue-600 to-cyan-600',
    icon: '🧩',
  },
  {
    slug: 'doors',
    title: 'Doors',
    tagline: 'Industrial & Specialty Doors',
    description: 'High-performance fire-rated, acoustic, cleanroom, and cold storage doors engineered for safety, hygiene, and compliance.',
    keywords: 'Fire Rated Doors | Cleanroom Doors | Cold Storage Doors | Industrial Doors',
    image: '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg',
    gradient: 'from-orange-600 to-red-600',
    icon: '🚪',
  },
  {
    slug: 'cold-chain-solutions',
    title: 'Cold Chain Solutions',
    tagline: 'Temperature-Controlled Infrastructure',
    description: 'End-to-end cold storage and temperature-controlled facility solutions, including insulated panels, cold rooms, freezers, and controlled environments.',
    keywords: 'Cold Storage | Cold Rooms | Freezers | Temperature Controlled Storage',
    image: '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-1.jpg',
    gradient: 'from-cyan-600 to-blue-600',
    icon: '❄️',
    href: '/solutions/cold-storage-construction',
  },
  {
    slug: 'cleanroom-solutions',
    title: 'Cleanroom Products',
    tagline: 'Contamination Control Systems',
    description: 'Modular cleanroom partitions, ceilings, panels, and controlled environment systems for pharma, biotech, electronics, and healthcare industries.',
    keywords: 'Cleanroom Partitions | Cleanroom Ceilings | Cleanroom Panels | GMP Cleanrooms',
    image: '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat1.jpg',
    gradient: 'from-emerald-600 to-teal-600',
    icon: '🧪',
  },
];

// Industries served
const industries = [
  {
    category: 'Life Sciences & Healthcare',
    items: ['Pharmaceuticals', 'Biotechnology', 'Medical Devices', 'Hospitals', 'R&D & Cleanroom Labs'],
    image: '/images/industries/pharmaceuticals/cleanroom.jpg',
    gradient: 'from-rose-500 to-pink-600',
    icon: '💊',
    href: '/industries/pharma-chemical',
  },
  {
    category: 'Manufacturing & Engineering',
    items: ['Precision Engineering', 'Electronics', 'Automotive', 'Aerospace', 'Defence Manufacturing'],
    image: '/images/industries/automotive/Assembly-Line-Best-Practices.jpg',
    gradient: 'from-amber-500 to-orange-600',
    icon: '⚙️',
    href: '/industries/precision-engineering',
  },
  {
    category: 'Energy & Future Technologies',
    items: ['Solar Manufacturing', 'Semiconductor FABs', 'EV Battery Plants', 'Space Technology Facilities'],
    image: '/images/industries/semiconductor/semiconductor-cleanroom-1080x675.jpg',
    gradient: 'from-violet-500 to-purple-600',
    icon: '⚡',
    href: '/industries/semiconductor',
  },
  {
    category: 'Food & Hospitality',
    items: ['Food Processing', 'Dairy Industry', 'Hospitality & Hotels', 'Cold Chain Logistics'],
    image: '/images/industries/food-processing/Food-processing-industries-phoenixx-work.jpg',
    gradient: 'from-emerald-500 to-teal-600',
    icon: '🍽️',
    href: '/industries/food-processing',
  },
  {
    category: 'Industrial & Research Facilities',
    items: ['Textile Industry', 'Chemical Plants', 'R&D Facilities', 'Industrial Warehouses'],
    image: '/images/industries/research-development/rd_banniere_photo1-1800x1200.jpg',
    gradient: 'from-blue-500 to-indigo-600',
    icon: '🔬',
    href: '/industries/research-development',
  },
];

// Why choose PHOENIXX
const whyChoose = [
  {
    icon: '🚀',
    title: 'Innovation-First Engineering',
    description: 'Advanced technology and precision-driven design across all insulated products.',
  },
  {
    icon: '⚡',
    title: 'Energy-Smart Solutions',
    description: 'High-performance PUF panels and insulated systems that help reduce energy consumption by up to 30%.',
  },
  {
    icon: '🌍',
    title: 'Future-Ready Infrastructure',
    description: 'Globally compliant, scalable, fire-safe, and sustainable solutions.',
  },
  {
    icon: '🤝',
    title: 'Trusted Execution Partner',
    description: 'On-time delivery, transparent execution, and long-term reliability across India.',
  },
];

// Stats
const stats = [
  { value: '14+', label: 'Years Experience' },
  { value: '210+', label: 'Projects Delivered' },
  { value: '20+', label: 'Cities Served Across India' },
];

export default function ProductsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://phoenixxsmartbuild.com/products' },
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PHOENIXX Infrastructure Products',
    description: 'High-performance Sandwich PUF Panels, Industrial Doors, Cold Chain Solutions, and Cleanroom Products',
    itemListElement: productCategories.map((cat, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: cat.title,
      url: `https://phoenixxsmartbuild.com/products/${cat.slug}`,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={productSchema} />

        <AISummaryBlock
          summary="PHOENIXX manufactures high-performance infrastructure products including Sandwich PUF Panels (PIR, PUF, Roofing panels with thermal conductivity 0.022-0.024 W/mK), Industrial Doors (Cleanroom, Fire-rated up to 120 minutes), Cold Chain Solutions (Cold rooms, Freezers, Temperature-controlled storage), and Cleanroom Products (Partitions, Ceilings for ISO Class 5-8). With 14+ years experience and 210+ projects delivered across 20+ cities in India."
          keywords={['Sandwich PUF Panels', 'PUF panels', 'cleanroom doors', 'fire doors', 'cold storage', 'insulated panels', 'cold chain solutions']}
        />

        {/* ========== FOLD 1: HERO SECTION ========== */}
        <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Products</span>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-emerald-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/20">
                Engineered for Excellence
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                High-Performance Infrastructure Products for Every Industry
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-3xl">
                From energy-efficient <strong className="text-white">Sandwich PUF Panels</strong> and insulated panel systems to advanced <strong className="text-white">Cold Chain</strong>, <strong className="text-white">Cleanroom</strong>, and <strong className="text-white">Industrial Door</strong> solutions, PHOENIXX designs and delivers products engineered for thermal efficiency, durability, compliance, and long-term performance across industrial and commercial environments.
              </p>
              
              {/* Stats Strip */}
              <div className="mt-10 flex flex-wrap gap-8 py-6 px-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#categories"
                  className="btn-primary"
                >
                  👉 Explore Product Categories
                </Link>
                <Link
                  href="/get-a-quote"
                  className="btn-secondary"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FOLD 1.5: CLIENTELE LOGO SLIDER ========== */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-slate-900">
                Trusted by Industry Leaders Across India
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
                We proudly partner with organizations across pharmaceuticals, food processing, dairy, healthcare, cold storage, manufacturing, logistics, and cleanroom-driven industries.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {clientLogos.map((client) => (
                <div key={client.name} className="relative w-20 h-12 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FOLD 2: SMART PRODUCT FINDER ========== */}
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                🔍 Smart Discovery
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Find the Right Product in Seconds
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Our intelligent product finder helps you quickly discover the most suitable solution from our complete portfolio of <strong>Sandwich PUF Panels</strong>, insulated panels, cold storage systems, cleanroom products, and industrial doors. Whether you&apos;re planning a cold storage facility, pharma cleanroom, warehouse, or industrial shed, we help you match the right product to your exact requirement.
              </p>
            </div>

            {/* Search & Filters */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-slate-200">
                {/* Search Input */}
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by product name, category, thickness, or feature..."
                    className="w-full px-5 py-4 pl-12 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-slate-900"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                {/* Filter Tags */}
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">By Category</p>
                    <div className="flex flex-wrap gap-2">
                      {['Sandwich Panels', 'Doors', 'Cold Chain Solutions', 'Cleanroom Products'].map((filter) => (
                        <button
                          key={filter}
                          className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors"
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">By Feature</p>
                    <div className="flex flex-wrap gap-2">
                      {['Fire-Rated', 'Energy-Efficient', 'Acoustic', 'Hygienic', 'Custom Sizes'].map((filter) => (
                        <button
                          key={filter}
                          className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">By Industry</p>
                    <div className="flex flex-wrap gap-2">
                      {['Pharma', 'Food Processing', 'Dairy', 'Healthcare', 'Manufacturing', 'Logistics'].map((filter) => (
                        <button
                          key={filter}
                          className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors"
                        >
                          {filter}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-sm text-slate-500">
                  Start typing or apply filters to explore our most in-demand insulated infrastructure products.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FOLD 3: CATEGORY NAVIGATION GRID ========== */}
        <section id="categories" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                Product Portfolio
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Explore Our Product Categories
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={category.href || `/products/${category.slug}`}
                  className="group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent`} />
                    
                    {/* Icon Badge */}
                    <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-lg`}>
                      {category.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-6 bg-white">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {category.tagline}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {category.description}
                    </p>
                    <p className="mt-3 text-xs text-slate-400">
                      {category.keywords}
                    </p>
                    <div className={`mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r ${category.gradient} text-white font-semibold shadow-md group-hover:shadow-lg transition-all`}>
                      View {category.title}
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FOLD 4: INDUSTRIES WE SERVE ========== */}
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium mb-4">
                Industries We Serve
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Powering Diverse Industries with Tailored Infrastructure Solutions
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                At PHOENIXX, we deliver custom-engineered infrastructure solutions that support the operational, regulatory, and energy-efficiency needs of modern industries. From <strong>Sandwich PUF Panels</strong> for cold storage and warehouses to cleanroom-grade insulated systems for pharmaceutical and life-science facilities, our products are designed to perform under the most demanding conditions.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {industries.map((industry) => (
                <Link
                  key={industry.category}
                  href={industry.href}
                  className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image Header */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={industry.image}
                      alt={industry.category}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-70`} />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-xl">
                      {industry.icon}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                      <h3 className="text-sm font-bold text-white leading-tight">
                        {industry.category}
                      </h3>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="p-4">
                    <ul className="space-y-1">
                      {industry.items.slice(0, 4).map((item) => (
                        <li key={item} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${industry.gradient}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/industries"
                className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
              >
                Explore Solutions by Industry
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FOLD 6: WHY CHOOSE PHOENIXX ========== */}
        <section className="section-padding bg-slate-900 text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-blue-300 text-sm font-medium mb-4">
                The PHOENIXX Advantage
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why Industry Leaders Choose PHOENIXX
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {whyChoose.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 transition-colors"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FOLD 7: TRUST SIGNALS ========== */}
        <section className="py-12 bg-white border-y border-slate-100">
          <div className="container-custom">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">
                Built on Standards You Can Trust
              </h2>
              <p className="mt-2 text-slate-600">
                Certifications & Compliance: ISO | BIS | CE | Fire-Safety | Energy-Efficiency Standards
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8">
              {['ISO 9001:2015', 'BIS Certified', 'CE Marked', 'Fire Safety Compliant', 'Energy Efficiency Standards'].map((cert) => (
                <div key={cert} className="px-6 py-3 rounded-full bg-slate-100 text-slate-700 font-medium text-sm">
                  ✓ {cert}
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="mt-10 max-w-2xl mx-auto text-center">
              <blockquote className="text-lg text-slate-700 italic">
                &ldquo;PHOENIXX delivered beyond expectations — on time, on budget, and with exceptional quality.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-slate-500">— CEO, Manufacturing Client</p>
            </div>
          </div>
        </section>

        {/* ========== FOLD 8: CTA SECTION ========== */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Whether you&apos;re evaluating <strong className="text-white">Sandwich PUF Panels</strong>, planning a cold storage project, or designing a cleanroom facility, our experts are ready to guide you from concept to execution.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://wa.me/919727700442"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white shadow-lg hover:bg-green-600 hover:shadow-xl transition-all"
              >
                💬 WhatsApp Us Now
              </Link>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                📩 Request a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
