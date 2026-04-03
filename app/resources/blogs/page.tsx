import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { getBlogListings } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Blog – Industry Insights & Technical Guides',
  description:
    'Expert articles on PUF panels, cleanrooms, cold storage, PEB construction. Stay updated with industry trends.',
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/resources/blogs',
  },
};

const blogPosts = getBlogListings().sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const categories = ['All', 'Pricing', 'Comparison', 'How-To Guide', 'Location Guide', 'Industry Guide', 'PUF Panels', 'PEB', 'Cold Storage', 'Cleanroom', 'Panels', 'Safety', 'Doors'];

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
