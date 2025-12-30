import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Resources | Knowledge Hub | PHOENIXX SmartBuild',
  description:
    'Access PHOENIXX resources: technical articles, project gallery, datasheets, brochures, and FAQs. Expert insights on industrial infrastructure.',
  alternates: {
    canonical: '/resources',
  },
};

const resources = [
  {
    title: 'Blogs & Insights',
    description: 'Expert articles on insulated panels, cold storage, cleanrooms, and EPC best practices.',
    href: '/resources/blogs',
    icon: '📝',
    count: '25+ Articles',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Project Gallery',
    description: 'Browse our completed projects across industries—cold storage, cleanrooms, PEB, and more.',
    href: '/resources/project-gallery',
    icon: '📷',
    count: '100+ Projects',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Technical Datasheets',
    description: 'Download detailed specifications for panels, doors, and building systems.',
    href: '/resources/technical-sheet',
    icon: '📊',
    count: '15+ Datasheets',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Company Brochure',
    description: 'Download our corporate brochure with complete product and solution overview.',
    href: '/resources/brochure',
    icon: '📄',
    count: 'PDF Download',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    title: 'FAQ',
    description: 'Find answers to common questions about products, services, and processes.',
    href: '/resources/faq',
    icon: '❓',
    count: '50+ Answers',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

const featuredInsights = [
  {
    title: 'The Rise of Sustainable PEB Structures in India',
    excerpt: 'How Pre-Engineered Buildings are revolutionizing industrial construction with sustainability at the core.',
    category: 'PEB',
    readTime: '5 min read',
  },
  {
    title: 'Optimizing Cold Storage for Energy Efficiency',
    excerpt: 'Key strategies to reduce energy costs in temperature-controlled facilities without compromising performance.',
    category: 'Cold Storage',
    readTime: '7 min read',
  },
  {
    title: 'Cleanroom Design Trends for Pharma Compliance',
    excerpt: 'Latest developments in cleanroom technology to meet evolving GMP and regulatory requirements.',
    category: 'Cleanroom',
    readTime: '6 min read',
  },
];

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Resources</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                Knowledge Hub
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Resources & Insights
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Access expert knowledge, technical documentation, project showcases, and answers 
                to help you make informed decisions about industrial infrastructure.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Cards */}
        <section className="py-12 bg-white border-b">
          <div className="container-custom">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 -mt-20 relative z-10">
              {resources.map((resource) => (
                <Link
                  key={resource.title}
                  href={resource.href}
                  className="group rounded-2xl bg-white shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`inline-flex w-14 h-14 rounded-xl bg-gradient-to-br ${resource.gradient} items-center justify-center text-2xl`}>
                    {resource.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm">{resource.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{resource.count}</span>
                    <span className="text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Featured Insights</h2>
                <p className="mt-2 text-slate-600">Latest articles and industry perspectives</p>
              </div>
              <Link
                href="/resources/blogs"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View All Articles
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {featuredInsights.map((article) => (
                <article
                  key={article.title}
                  className="group rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="text-5xl opacity-20">📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        {article.category}
                      </span>
                      <span className="text-xs text-slate-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{article.excerpt}</p>
                    <Link
                      href="/resources/blogs"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Downloads */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Quick Downloads</h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Access technical specifications, product brochures, and company information 
                  for your reference and decision-making.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    { name: 'PIR Panel Datasheet', type: 'PDF', size: '2.4 MB' },
                    { name: 'PUF Panel Specifications', type: 'PDF', size: '1.8 MB' },
                    { name: 'Door Product Catalog', type: 'PDF', size: '3.2 MB' },
                    { name: 'Company Brochure', type: 'PDF', size: '5.6 MB' },
                  ].map((doc) => (
                    <div
                      key={doc.name}
                      className="flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span className="w-10 h-10 rounded-lg bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                          PDF
                        </span>
                        <div>
                          <p className="font-medium text-slate-900">{doc.name}</p>
                          <p className="text-xs text-slate-500">{doc.size}</p>
                        </div>
                      </div>
                      <Link
                        href="/resources/technical-sheet"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </Link>
                    </div>
                  ))}
                </div>

                <Link
                  href="/resources/technical-sheet"
                  className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  View All Downloads
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-9xl opacity-30">📚</span>
                    <p className="mt-4 text-slate-500">Resource Library</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-emerald-600">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Need Custom Information?
            </h2>
            <p className="mt-4 text-blue-100 max-w-xl mx-auto">
              Can&apos;t find what you&apos;re looking for? Our team can provide project-specific 
              documentation and technical support.
            </p>
            <Link
              href="/contact-us"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
