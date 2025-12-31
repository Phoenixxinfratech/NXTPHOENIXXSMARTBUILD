import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Industries We Serve | Specialized Infrastructure Solutions',
  description:
    'PHOENIXX delivers tailored infrastructure solutions for Pharmaceuticals, Food Processing, Dairy, Cold Chain, Automotive, Hospitality, and more. Industry-specific compliance and performance.',
  alternates: {
    canonical: '/industries',
  },
};

const industries = [
  {
    slug: 'pharma-chemical',
    title: 'Pharmaceuticals & Life Sciences',
    tagline: 'GMP-Compliant Controlled Environments',
    description: 'Cleanrooms, controlled environments, and specialized facilities for pharmaceutical manufacturing, biotechnology, and healthcare applications.',
    requirements: ['GMP/FDA Compliance', 'ISO Class 5-8 Cleanrooms', 'Temperature Control', 'Contamination Prevention'],
    solutions: ['Cleanroom Systems', 'HVAC Integration', 'Specialized Doors', 'False Ceilings'],
    clients: ['Torrent Pharma', 'Intas Pharma', 'Amneal Pharma', 'Claris Life Sciences'],
    gradient: 'from-rose-500 to-pink-600',
    icon: '💊',
  },
  {
    slug: 'food-processing',
    title: 'Food & Beverage Processing',
    tagline: 'Hygienic Infrastructure for Food Safety',
    description: 'Food-grade facilities designed for hygiene, temperature control, and compliance with FSSAI and international food safety standards.',
    requirements: ['FSSAI Compliance', 'Hygienic Surfaces', 'Temperature Control', 'Pest Prevention'],
    solutions: ['Insulated Panels', 'Cold Rooms', 'Processing Halls', 'Cleanable Surfaces'],
    clients: ['Coca-Cola', 'Balaji Wafers', 'Cargill Foods', 'Bunge India'],
    gradient: 'from-amber-500 to-orange-600',
    icon: '🍽️',
  },
  {
    slug: 'dairy',
    title: 'Dairy Industries',
    tagline: 'Processing & Cold Chain Solutions',
    description: 'Specialized infrastructure for dairy processing, storage, and distribution with strict hygiene and temperature requirements.',
    requirements: ['Temperature Control (+4°C)', 'Hygienic Design', 'Energy Efficiency', 'HACCP Compliance'],
    solutions: ['Cold Storage', 'Processing Plants', 'Insulated Panels', 'Cleanroom Doors'],
    clients: ['Amul Dairy', 'Mother Dairy', 'NDDB', 'Banas Dairy'],
    gradient: 'from-sky-500 to-blue-600',
    icon: '🥛',
  },
  {
    slug: 'cold-chain',
    title: 'Cold Chain & Logistics',
    tagline: 'Temperature-Controlled Infrastructure',
    description: 'End-to-end cold chain facilities from storage to distribution centers, maintaining product integrity throughout the supply chain.',
    requirements: ['-40°C to +15°C Range', 'Energy Efficiency', 'Multi-Chamber Design', '24/7 Monitoring'],
    solutions: ['Cold Rooms', 'Freezers', 'Ripening Chambers', 'Distribution Centers'],
    clients: ['Tirupati Logistics', 'Multiple Cold Storages'],
    gradient: 'from-cyan-500 to-teal-600',
    icon: '🧊',
  },
  {
    slug: 'precision-engineering',
    title: 'Manufacturing & Engineering',
    tagline: 'Controlled Production Environments',
    description: 'Precision manufacturing facilities with contamination control, climate management, and ESD protection.',
    requirements: ['Particle Control', 'Static Prevention', 'Climate Control', 'Vibration Isolation'],
    solutions: ['Cleanrooms', 'Partitions', 'ESD Flooring', 'PEB Structures'],
    clients: ['SKF Bearings', 'Ford Motors', 'Marelli Motherson'],
    gradient: 'from-slate-500 to-zinc-600',
    icon: '⚙️',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality & Commercial',
    tagline: 'Rapid Construction Solutions',
    description: 'Quick-build solutions for hotels, resorts, commercial kitchens, and hospitality infrastructure.',
    requirements: ['Aesthetic Design', 'Sound Insulation', 'Fire Safety', 'Energy Efficiency'],
    solutions: ['Prefab Rooms', 'Kitchen Facilities', 'Cold Storage', 'Partition Systems'],
    clients: ['Fortune Landmark', 'Hotel Fern', 'Info City Club'],
    gradient: 'from-violet-500 to-purple-600',
    icon: '🏨',
  },
  {
    slug: 'automobile',
    title: 'Automotive Industry',
    tagline: 'Large-Scale Industrial Infrastructure',
    description: 'Manufacturing facilities, paint shops, and warehouses for automotive and ancillary industries.',
    requirements: ['Large Spans', 'Heavy Load Capacity', 'Controlled Environments', 'Future Expansion'],
    solutions: ['PEB Structures', 'Paint Shops', 'Warehouses', 'Fire Doors'],
    clients: ['Ford Motors', 'Marelli Motherson', 'SKF Bearings'],
    gradient: 'from-red-500 to-rose-600',
    icon: '🚗',
  },
  {
    slug: 'agri-processing',
    title: 'Agriculture & Agri-Processing',
    tagline: 'Post-Harvest Infrastructure',
    description: 'Storage and processing facilities for agricultural products, seeds, and agri-chemicals.',
    requirements: ['Temperature Control', 'Humidity Management', 'Pest Control', 'Bulk Storage'],
    solutions: ['Cold Storage', 'Pack Houses', 'Seed Storage', 'Processing Units'],
    clients: ['Dinkar Seeds', 'Swan Medicot LLP'],
    gradient: 'from-green-500 to-emerald-600',
    icon: '🌾',
  },
];

export default function IndustriesPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: '/industries' },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />

        <AISummaryBlock
          summary="PHOENIXX serves 8+ industries: Pharmaceuticals (GMP cleanrooms), Food Processing (FSSAI compliant), Dairy (Amul, Mother Dairy), Cold Chain (-40°C to +15°C), Manufacturing, Hospitality, Automotive (Ford, SKF), and Agriculture. Industry-specific solutions meeting regulatory requirements."
          keywords={['pharmaceutical cleanroom', 'food processing facility', 'cold storage', 'dairy plant', 'PEB manufacturing']}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute top-1/2 -left-32 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Industries</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-orange-500/20 text-orange-300 text-sm font-medium mb-4">
                Specialized Expertise
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Powering Infrastructure Across Industries
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                PHOENIXX delivers specialized solutions for industries with stringent operational, 
                regulatory, and performance requirements. Deep domain knowledge combined with 
                engineering excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-slate-800 border-y border-slate-700">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-white">8+</p>
                <p className="text-sm text-slate-400">Industries Served</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">300+</p>
                <p className="text-sm text-slate-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-slate-400">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-sm text-slate-400">Compliance Rate</p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((industry) => (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Header with Gradient */}
                  <div className={`relative h-44 bg-gradient-to-br ${industry.gradient} p-5`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-2 right-2 w-20 h-20 border border-white/30 rounded-full" />
                    </div>
                    <div className="relative">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl">
                        {industry.icon}
                      </div>
                      <h3 className="mt-3 text-lg font-bold text-white leading-tight">
                        {industry.title}
                      </h3>
                      <p className="mt-1 text-white/80 text-xs">{industry.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {industry.description}
                    </p>

                    {/* Key Requirements */}
                    <div className="mt-3 flex flex-wrap gap-1">
                      {industry.requirements.slice(0, 2).map((req) => (
                        <span
                          key={req}
                          className="inline-block px-2 py-0.5 rounded bg-slate-100 text-slate-600 text-xs"
                        >
                          {req}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 group-hover:text-orange-600 transition-colors">
                        View Solutions
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Industry-Specific Matters */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Why Industry-Specific Expertise Matters
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Each industry has unique requirements—regulatory compliance, operational standards, 
                  and performance criteria. Our domain expertise ensures solutions that meet these 
                  specific needs.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { title: 'Regulatory Compliance', desc: 'GMP, FDA, FSSAI, ISO certifications and standards' },
                    { title: 'Operational Efficiency', desc: 'Solutions optimized for industry-specific workflows' },
                    { title: 'Future-Ready Design', desc: 'Infrastructure that scales with your growth' },
                    { title: 'Technical Support', desc: 'Industry-experienced teams for ongoing support' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                        ✓
                      </span>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {industries.slice(0, 4).map((ind) => (
                      <div
                        key={ind.slug}
                        className={`p-4 rounded-xl bg-gradient-to-br ${ind.gradient} text-white text-center`}
                      >
                        <span className="text-2xl">{ind.icon}</span>
                        <p className="mt-2 text-xs font-medium">{ind.title.split(' ')[0]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Your Industry Not Listed?
            </h2>
            <p className="mt-4 text-orange-100 max-w-2xl mx-auto">
              We work with clients across various sectors. Contact us to discuss 
              how our solutions can meet your specific industry requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="btn-white !text-orange-600"
              >
                Contact Us
              </Link>
              <Link
                href="/get-a-quote"
                className="btn-secondary"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
