import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { getBlogListings } from '@/lib/blog-data';
import { BlogList } from './blog-list';
import { NewsletterForm } from './newsletter-form';

export const metadata: Metadata = {
  title: 'Blog – Industry Insights & Technical Guides',
  description:
    'Expert articles on PUF panels, cleanrooms, cold storage, PEB construction. Stay updated with industry trends.',
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/resources/blogs',
  },
  openGraph: {
    title: 'Blog – Industry Insights & Technical Guides | PHOENIXX SMARTBUILD',
    description: 'Expert articles on PUF panels, cleanrooms, cold storage, PEB construction. Stay updated with industry trends.',
    url: 'https://phoenixxsmartbuild.com/resources/blogs',
    siteName: 'PHOENIXX SMARTBUILD',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog – Industry Insights & Technical Guides | PHOENIXX SMARTBUILD',
    description: 'Expert articles on PUF panels, cleanrooms, cold storage, PEB construction. Stay updated with industry trends.',
  },
};

const blogPosts = getBlogListings().sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
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

        <BlogList posts={blogPosts} />

        {/* Newsletter */}
        <section className="py-16 bg-slate-900">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-slate-300">
                Get the latest insights on industrial infrastructure delivered to your inbox.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
