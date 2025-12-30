import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Company Brochure | PHOENIXX SmartBuild',
  description:
    'Download PHOENIXX SmartBuild company brochure. Complete overview of our products, solutions, and capabilities.',
  alternates: {
    canonical: '/resources/brochure',
  },
};

const brochures = [
  {
    title: 'PHOENIXX Corporate Brochure',
    description: 'Complete overview of our company, products, solutions, and capabilities.',
    size: '8.5 MB',
    pages: '24 pages',
    year: '2024',
    featured: true,
  },
  {
    title: 'Product Catalog - Insulated Panels',
    description: 'Detailed product information for PIR, PUF, and specialty panels.',
    size: '5.2 MB',
    pages: '16 pages',
    year: '2024',
    featured: false,
  },
  {
    title: 'Cold Storage Solutions Guide',
    description: 'Complete guide to our cold storage and temperature-controlled solutions.',
    size: '4.8 MB',
    pages: '12 pages',
    year: '2024',
    featured: false,
  },
  {
    title: 'Cleanroom Solutions Brochure',
    description: 'Overview of cleanroom systems, partitions, doors, and ceilings.',
    size: '3.9 MB',
    pages: '10 pages',
    year: '2024',
    featured: false,
  },
  {
    title: 'PEB & EPC Services',
    description: 'Pre-Engineered Buildings and turnkey EPC project capabilities.',
    size: '4.2 MB',
    pages: '12 pages',
    year: '2024',
    featured: false,
  },
];

export default function BrochurePage() {
  const featuredBrochure = brochures.find((b) => b.featured);
  const otherBrochures = brochures.filter((b) => !b.featured);

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
              <span className="text-white">Brochure</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Company Brochure
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Download our brochures for a comprehensive overview of PHOENIXX products, 
                solutions, and capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Brochure */}
        {featuredBrochure && (
          <section className="py-12 bg-white border-b">
            <div className="container-custom">
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-8 md:grid-cols-2 items-center bg-gradient-to-br from-blue-50 to-emerald-50 rounded-3xl p-8 md:p-12">
                  <div className="aspect-[3/4] bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                    <div className="text-center p-8">
                      <span className="text-8xl opacity-30">📄</span>
                      <p className="mt-4 text-slate-400">Brochure Preview</p>
                    </div>
                  </div>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                      Featured
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900">{featuredBrochure.title}</h2>
                    <p className="mt-4 text-slate-600">{featuredBrochure.description}</p>
                    
                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-500">
                      <span className="flex items-center gap-2">
                        📄 {featuredBrochure.pages}
                      </span>
                      <span className="flex items-center gap-2">
                        💾 {featuredBrochure.size}
                      </span>
                      <span className="flex items-center gap-2">
                        📅 {featuredBrochure.year}
                      </span>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                      </button>
                      <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:border-slate-400 transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Online
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Other Brochures */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Product & Solution Brochures</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {otherBrochures.map((brochure) => (
                  <div
                    key={brochure.title}
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-20 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-red-600 font-bold text-sm">PDF</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-900">{brochure.title}</h3>
                        <p className="mt-1 text-sm text-slate-600">{brochure.description}</p>
                        <div className="mt-3 flex items-center gap-4 text-xs text-slate-400">
                          <span>{brochure.pages}</span>
                          <span>{brochure.size}</span>
                        </div>
                        <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Request Physical Copy */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold text-slate-900">Need a Printed Copy?</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              We can send printed brochures and samples to your office. Contact us with your requirements.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-8 py-4 font-semibold text-white shadow-lg hover:bg-slate-800 transition-all"
            >
              Request Physical Copy
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
