import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Solutions | End-to-End EPC & Infrastructure Services',
  description:
    'PHOENIXX delivers complete EPC solutions: Pre-Engineered Buildings (PEB), Cold Storage Construction, Cleanroom Systems, Ceiling & Partition Solutions, and Turnkey Industrial Projects.',
  alternates: {
    canonical: '/solutions',
  },
};

const solutions = [
  {
    slug: 'peb',
    title: 'Pre-Engineered Buildings (PEB)',
    tagline: 'Fast, Cost-Effective & Scalable',
    description: 'Design, supply, and construction of robust steel structures for warehouses, factories, workshops, and multi-storey facilities. Optimized for speed, cost efficiency, and structural strength.',
    benefits: ['30-50% faster construction', 'Cost-effective vs conventional', 'Easily expandable', 'Quality-controlled fabrication'],
    applications: ['Warehouses', 'Factories', 'Workshops', 'Commercial Buildings', 'Aircraft Hangars'],
    gradient: 'from-blue-600 to-indigo-600',
    icon: '🏭',
  },
  {
    slug: 'cold-storage-construction',
    title: 'Cold Storage Construction',
    tagline: 'Temperature-Controlled Excellence',
    description: 'Complete EPC execution of cold storage facilities including cold rooms, freezers, ripening chambers, and temperature-controlled warehouses. From +15°C to -40°C.',
    benefits: ['Turnkey delivery', 'Energy-efficient design', 'Wide temperature range', 'Compliance assured'],
    applications: ['Food Storage', 'Pharma Cold Chain', 'Dairy Processing', 'Frozen Food', 'Seed Storage'],
    gradient: 'from-cyan-600 to-blue-600',
    icon: '❄️',
  },
  {
    slug: 'walkable-ceiling-systems',
    title: 'Ceiling Systems',
    tagline: 'Walkable & Non-Walkable Solutions',
    description: 'Ceiling systems designed for accessibility, acoustic control, and clean aesthetics. Suitable for cleanrooms, offices, and industrial facilities with service access requirements.',
    benefits: ['Load capacity up to 200 kg/m²', 'Easy maintenance access', 'Cleanroom compatible', 'Acoustic control'],
    applications: ['Cleanrooms', 'Pharmaceutical', 'Semiconductor', 'Offices', 'Healthcare'],
    gradient: 'from-violet-600 to-purple-600',
    icon: '📐',
  },
  {
    slug: 'partition-solutions',
    title: 'Partition Solutions',
    tagline: 'Modular & Flexible Space Division',
    description: 'Modular and insulated partition systems for cleanrooms, offices, and industrial spaces. Offering flexibility, thermal control, and fast installation.',
    benefits: ['Quick installation', 'Reconfigurable', 'Thermal insulation', 'Various finishes'],
    applications: ['Cleanrooms', 'Laboratories', 'Offices', 'Industrial Facilities'],
    gradient: 'from-emerald-600 to-teal-600',
    icon: '🧱',
  },
  {
    slug: 'prefab-house',
    title: 'Prefab Structures',
    tagline: 'Rapid Construction Solutions',
    description: 'Prefabricated structures for residential, commercial, and temporary accommodation needs. Factory-built quality with on-site assembly in days.',
    benefits: ['Assembly in days', 'Consistent quality', 'Relocatable', 'Cost-effective'],
    applications: ['Site Offices', 'Labor Camps', 'Temporary Shelters', 'Farm Houses', 'Guard Rooms'],
    gradient: 'from-amber-600 to-orange-600',
    icon: '🏠',
  },
];

const processSteps = [
  { step: 1, title: 'Consultation', desc: 'Understanding your requirements and objectives' },
  { step: 2, title: 'Design', desc: 'Detailed engineering and planning' },
  { step: 3, title: 'Procurement', desc: 'Quality materials sourcing' },
  { step: 4, title: 'Execution', desc: 'Professional construction and installation' },
  { step: 5, title: 'Handover', desc: 'Commissioning and documentation' },
];

export default function SolutionsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: '/solutions' },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />

        <AISummaryBlock
          summary="PHOENIXX provides end-to-end EPC solutions: Pre-Engineered Buildings (PEB) with 30-50% faster construction, Cold Storage Construction (-40°C to +15°C), Walkable/Non-Walkable Ceiling Systems, Modular Partition Solutions, and Prefab Structures. Complete turnkey delivery from design to commissioning."
          keywords={['PEB construction', 'cold storage', 'cleanroom', 'EPC contractor', 'turnkey projects']}
        />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Solutions</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-medium mb-4">
                End-to-End EPC Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Integrated Solutions for Complex Infrastructure
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                PHOENIXX delivers end-to-end solutions combining engineering, manufacturing, and execution—
                tailored to project requirements, site conditions, and regulatory standards.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Schedule Consultation
                </Link>
                <Link
                  href="/resources/project-gallery"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Process Bar */}
        <section className="py-8 bg-slate-800 border-y border-slate-700 overflow-hidden">
          <div className="container-custom">
            <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
              {processSteps.map((step, idx) => (
                <div key={step.step} className="flex items-center gap-3 flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="hidden sm:block">
                    <p className="text-white font-medium text-sm">{step.title}</p>
                    <p className="text-slate-400 text-xs">{step.desc}</p>
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="w-8 h-0.5 bg-slate-600 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Our Solutions Portfolio
              </h2>
              <p className="mt-4 text-slate-600">
                Comprehensive infrastructure solutions for diverse industrial requirements
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {solutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className={`relative h-48 bg-gradient-to-br ${solution.gradient} p-6`}>
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 right-4 w-24 h-24 border border-white/30 rounded-full" />
                      <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/20 rounded-full" />
                    </div>
                    <div className="relative">
                      <span className="text-4xl">{solution.icon}</span>
                      <h3 className="mt-4 text-xl font-bold text-white">{solution.title}</h3>
                      <p className="mt-1 text-white/80 text-sm">{solution.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {solution.description}
                    </p>

                    {/* Benefits */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {solution.benefits.slice(0, 2).map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-block px-2 py-1 rounded bg-slate-100 text-slate-600 text-xs"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-slate-700 group-hover:text-emerald-600 transition-colors">
                        Learn More
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

        {/* Turnkey EPC Section */}
        <section className="section-padding bg-slate-900 text-white">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-4">
                  Turnkey Delivery
                </span>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Complete EPC Project Execution
                </h2>
                <p className="mt-4 text-slate-300 leading-relaxed">
                  End-to-end project delivery—from concept and engineering to construction and commissioning—
                  ensuring seamless coordination, cost control, and predictable outcomes.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    { title: 'Single Point Responsibility', desc: 'One partner for complete delivery' },
                    { title: 'Cost Certainty', desc: 'Fixed pricing with no surprises' },
                    { title: 'Timeline Control', desc: 'Structured execution schedules' },
                    { title: 'Quality Assurance', desc: 'In-house manufacturing control' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                        ✓
                      </span>
                      <div>
                        <p className="font-medium text-white">{item.title}</p>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/get-a-quote"
                  className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Discuss Your Project
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-white/10 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-9xl opacity-20">🔧</span>
                    <p className="mt-4 text-slate-400">Turnkey Project Illustration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">
              Our expert team is ready to help you plan and execute your infrastructure project. 
              Get a free consultation today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-emerald-600 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
