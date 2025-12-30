import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Blog & Insights | PHOENIXX SmartBuild',
  description:
    'Expert articles on industrial infrastructure, insulated panels, cold storage, cleanrooms, PEB, and EPC solutions. Stay informed with PHOENIXX insights.',
  alternates: {
    canonical: '/resources/blogs',
  },
};

const blogPosts = [
  {
    slug: 'rise-of-sustainable-peb-structures',
    title: 'The Rise of Sustainable PEB Structures in India',
    excerpt: 'How Pre-Engineered Buildings are revolutionizing industrial construction with sustainability at the core. Discover the environmental and economic benefits driving adoption.',
    category: 'PEB',
    date: 'Dec 28, 2024',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'optimizing-cold-storage-energy-efficiency',
    title: 'Optimizing Cold Storage for Energy Efficiency',
    excerpt: 'Key strategies to reduce energy costs in temperature-controlled facilities without compromising performance. From insulation to automation.',
    category: 'Cold Storage',
    date: 'Dec 20, 2024',
    readTime: '7 min read',
    featured: true,
  },
  {
    slug: 'cleanroom-design-trends-pharma-compliance',
    title: 'Cleanroom Design Trends for Pharma Compliance',
    excerpt: 'Latest developments in cleanroom technology to meet evolving GMP and regulatory requirements in pharmaceutical manufacturing.',
    category: 'Cleanroom',
    date: 'Dec 15, 2024',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'choosing-right-insulated-panel',
    title: 'Choosing the Right Insulated Panel for Your Project',
    excerpt: 'A comprehensive guide to selecting between PIR, PUF, and other insulation types based on your application requirements.',
    category: 'Panels',
    date: 'Dec 10, 2024',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'fire-safety-industrial-buildings',
    title: 'Fire Safety in Industrial Buildings: Best Practices',
    excerpt: 'Understanding fire-rated materials, emergency exits, and compliance requirements for industrial facilities.',
    category: 'Safety',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'cold-chain-logistics-india',
    title: 'Cold Chain Logistics in India: Challenges & Solutions',
    excerpt: 'Addressing infrastructure gaps in India\'s cold chain sector and emerging solutions for better food preservation.',
    category: 'Cold Chain',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'turnkey-epc-project-delivery',
    title: 'Delivering Turnkey EPC Projects Without Delays',
    excerpt: 'Project management best practices for timely EPC delivery in industrial construction.',
    category: 'EPC',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'industrial-doors-selection-guide',
    title: 'Industrial Doors: A Complete Selection Guide',
    excerpt: 'From cleanroom doors to fire exits—understanding door types, ratings, and applications for industrial facilities.',
    category: 'Doors',
    date: 'Nov 15, 2024',
    readTime: '6 min read',
    featured: false,
  },
];

const categories = ['All', 'PEB', 'Cold Storage', 'Cleanroom', 'Panels', 'Safety', 'EPC', 'Doors'];

export default function BlogsPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

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
              <span className="text-white">Blog</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Insights & Articles
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Expert perspectives on industrial infrastructure, sustainable construction, 
                and EPC best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 bg-white border-b sticky top-0 z-20">
          <div className="container-custom">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Featured Articles</h2>
            <div className="grid gap-8 lg:grid-cols-3">
              {featuredPosts.map((post, idx) => (
                <article
                  key={post.slug}
                  className={`group rounded-2xl bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                    idx === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                  }`}
                >
                  <div className={`bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center ${
                    idx === 0 ? 'h-64 lg:h-80' : 'h-48'
                  }`}>
                    <span className={`opacity-20 ${idx === 0 ? 'text-8xl' : 'text-5xl'}`}>📝</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">{post.date}</span>
                      <span className="text-xs text-slate-400">• {post.readTime}</span>
                    </div>
                    <h3 className={`font-bold text-slate-900 group-hover:text-blue-600 transition-colors ${
                      idx === 0 ? 'text-2xl' : 'text-lg'
                    }`}>
                      {post.title}
                    </h3>
                    <p className={`mt-2 text-slate-600 ${idx === 0 ? '' : 'text-sm line-clamp-2'}`}>
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/resources/blogs/${post.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Read Article →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recent Posts */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Recent Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {recentPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group rounded-xl border border-slate-200 bg-white overflow-hidden hover:border-blue-200 hover:shadow-md transition-all"
                >
                  <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="text-4xl opacity-20">📝</span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-xs">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-400">{post.readTime}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">{post.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-slate-900">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-slate-300">
                Get the latest insights on industrial infrastructure delivered to your inbox.
              </p>
              <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
