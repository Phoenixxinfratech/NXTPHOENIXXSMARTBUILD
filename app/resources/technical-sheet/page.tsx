import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Technical Datasheets | PHOENIXX SmartBuild',
  description:
    'Download technical specifications and datasheets for PHOENIXX products: PIR panels, PUF panels, cleanroom doors, fire doors, and more.',
  alternates: {
    canonical: '/resources/technical-sheet',
  },
};

const datasheets = [
  {
    category: 'Insulated Panels',
    items: [
      { name: 'PIR Sandwich Panel - Technical Datasheet', size: '2.4 MB', type: 'PDF' },
      { name: 'PUF Sandwich Panel - Technical Datasheet', size: '2.1 MB', type: 'PDF' },
      { name: 'Roofing PUF Panel - Technical Datasheet', size: '1.8 MB', type: 'PDF' },
      { name: 'Wall & Ceiling Panel - Technical Datasheet', size: '1.6 MB', type: 'PDF' },
      { name: 'Panel Installation Guide', size: '3.2 MB', type: 'PDF' },
    ],
  },
  {
    category: 'Doors',
    items: [
      { name: 'Cleanroom Door - Technical Datasheet', size: '1.5 MB', type: 'PDF' },
      { name: 'Fire Door (Emergency Exit) - Technical Datasheet', size: '1.8 MB', type: 'PDF' },
      { name: 'Fire Rated Multipurpose Door - Technical Datasheet', size: '1.7 MB', type: 'PDF' },
      { name: 'Door Hardware Specifications', size: '0.9 MB', type: 'PDF' },
    ],
  },
  {
    category: 'Cleanroom Systems',
    items: [
      { name: 'Cleanroom Partition System - Technical Datasheet', size: '2.0 MB', type: 'PDF' },
      { name: 'Cleanroom False Ceiling - Technical Datasheet', size: '1.9 MB', type: 'PDF' },
      { name: 'Cleanroom Design Guidelines', size: '4.5 MB', type: 'PDF' },
    ],
  },
  {
    category: 'Cold Storage',
    items: [
      { name: 'Cold Room Design Specifications', size: '3.1 MB', type: 'PDF' },
      { name: 'Freezer Room Technical Guide', size: '2.8 MB', type: 'PDF' },
      { name: 'Ripening Chamber Specifications', size: '1.5 MB', type: 'PDF' },
    ],
  },
];

export default function TechnicalSheetPage() {
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
              <span className="text-white">Technical Datasheets</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Technical Datasheets
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Download detailed technical specifications for our products. All datasheets 
                include material properties, dimensions, and application guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Datasheets */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              {datasheets.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                    {category.category}
                  </h2>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors group"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-12 h-12 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                            {item.type}
                          </span>
                          <div>
                            <p className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                            </p>
                            <p className="text-xs text-slate-500">{item.size}</p>
                          </div>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-50">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold text-slate-900">Need Custom Specifications?</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Our technical team can provide project-specific documentation and specifications.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
            >
              Request Custom Specs
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
