import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Project Gallery | PHOENIXX SmartBuild',
  description:
    'Browse PHOENIXX completed projects: Cold Storage, Cleanrooms, PEB Structures, and Industrial Facilities across India.',
  alternates: {
    canonical: '/resources/project-gallery',
  },
};

const projects = [
  {
    slug: 'amul-cold-storage-gujarat',
    title: 'Amul Dairy Cold Storage Facility',
    client: 'Amul Dairy',
    location: 'Gujarat',
    category: 'Cold Storage',
    area: '25,000 sq.ft',
    year: '2024',
    description: 'Temperature-controlled storage facility for dairy products with multi-temperature zones.',
  },
  {
    slug: 'torrent-pharma-cleanroom',
    title: 'Torrent Pharma Cleanroom',
    client: 'Torrent Pharmaceuticals',
    location: 'Ahmedabad',
    category: 'Cleanroom',
    area: '15,000 sq.ft',
    year: '2024',
    description: 'ISO Class 7 cleanroom for pharmaceutical manufacturing with complete HVAC integration.',
  },
  {
    slug: 'balaji-wafers-warehouse',
    title: 'Balaji Wafers Distribution Center',
    client: 'Balaji Wafers Pvt. Ltd.',
    location: 'Rajkot',
    category: 'PEB',
    area: '1,00,000 sq.ft',
    year: '2023',
    description: 'Large-scale PEB warehouse for food product storage and distribution.',
  },
  {
    slug: 'intas-pharma-facility',
    title: 'Intas Pharmaceutical Facility',
    client: 'Intas Pharmaceuticals',
    location: 'Ahmedabad',
    category: 'Cleanroom',
    area: '20,000 sq.ft',
    year: '2023',
    description: 'GMP-compliant production facility with multiple cleanroom zones.',
  },
  {
    slug: 'mother-dairy-processing',
    title: 'Mother Dairy Processing Plant',
    client: 'Mother Dairy',
    location: 'Delhi NCR',
    category: 'Cold Storage',
    area: '35,000 sq.ft',
    year: '2023',
    description: 'Integrated cold storage and processing facility for dairy products.',
  },
  {
    slug: 'ford-motors-workshop',
    title: 'Ford Motors Service Center',
    client: 'Ford Motors India',
    location: 'Sanand',
    category: 'PEB',
    area: '50,000 sq.ft',
    year: '2022',
    description: 'Service and maintenance facility with specialized flooring and partition systems.',
  },
  {
    slug: 'coca-cola-warehouse',
    title: 'Coca-Cola Distribution Hub',
    client: 'Coca-Cola India',
    location: 'Ahmedabad',
    category: 'PEB',
    area: '75,000 sq.ft',
    year: '2022',
    description: 'Temperature-controlled distribution center for beverage storage.',
  },
  {
    slug: 'skf-cleanroom',
    title: 'SKF Precision Manufacturing',
    client: 'SKF India Limited',
    location: 'Pune',
    category: 'Cleanroom',
    area: '12,000 sq.ft',
    year: '2022',
    description: 'Controlled environment for precision bearing manufacturing.',
  },
];

const categories = ['All', 'Cold Storage', 'Cleanroom', 'PEB', 'Industrial'];

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: '50L+', label: 'Sq.Ft Built' },
  { value: '300+', label: 'Happy Clients' },
  { value: '25+', label: 'Industries' },
];

export default function ProjectGalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Project Gallery</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Project Gallery
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Explore our portfolio of completed projects across cold storage, cleanrooms, 
                PEB structures, and industrial facilities.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-slate-800 border-y border-slate-700">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-white border-b sticky top-0 z-20">
          <div className="container-custom">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    category === 'All'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.slug}
                  className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all"
                >
                  <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="text-6xl opacity-20">🏗️</span>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 text-slate-700 text-xs font-medium shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{project.description}</p>
                    
                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-slate-400">Client</p>
                        <p className="font-medium text-slate-700">{project.client}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Location</p>
                        <p className="font-medium text-slate-700">{project.location}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Area</p>
                        <p className="font-medium text-slate-700">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Year</p>
                        <p className="font-medium text-slate-700">{project.year}</p>
                      </div>
                    </div>

                    <Link
                      href={`/resources/project-gallery/${project.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      View Project →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <button className="px-8 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-slate-400 hover:bg-slate-50 transition-all">
                Load More Projects
              </button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-emerald-100 max-w-xl mx-auto">
              Let&apos;s discuss how we can bring your infrastructure vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-emerald-600 shadow-lg hover:shadow-xl transition-all"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
