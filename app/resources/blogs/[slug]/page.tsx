import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { TableOfContents } from '@/components/blog';
import { injectHeadingIds } from '@/lib/blog-utils';
import { blogPosts, getBlogPost } from '@/lib/blog-data';
import { RelatedResources } from '@/components/blocks/related-resources';
import { getRelatedLinksForBlog } from '@/lib/internal-links';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}


export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://phoenixxsmartbuild.com/resources/blogs/${slug}` },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
      ...(post.coverImage ? {
        images: [{
          url: `https://phoenixxsmartbuild.com${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }],
      } : {}),
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Blogs', url: '/resources/blogs' },
    { name: post.title, url: `/resources/blogs/${slug}` },
  ]);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    ...(post.coverImage ? { image: `https://phoenixxsmartbuild.com${post.coverImage}` } : {}),
    author: { '@type': 'Person', name: post.author.name },
    publisher: {
      '@type': 'Organization',
      name: 'PHOENIXX SmartBuild',
      url: 'https://phoenixxsmartbuild.com',
    },
  };

  // FAQ Schema (if FAQs exist)
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={articleSchema} />
        {faqSchema && <JsonLd data={faqSchema} />}

        <AISummaryBlock
          summary={`${post.title}: ${post.excerpt}`}
          keywords={post.keywords}
        />

        {/* Article Header */}
        <section className="border-b bg-gradient-to-b from-slate-50 to-white py-12 md:py-16">
          <div className="container-custom max-w-4xl">
            <nav className="mb-4 text-sm text-slate-500">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resources" className="hover:text-primary">Resources</Link>
              <span className="mx-2">/</span>
              <Link href="/resources/blogs" className="hover:text-primary">Blogs</Link>
            </nav>
            
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {post.category}
            </span>
            
            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              {post.title}
            </h1>
            
            <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
            
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
              <span className="font-medium text-slate-700">{post.author.name}</span>
              <span>•</span>
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </section>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="container-custom max-w-4xl py-8">
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>
        )}

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-[1fr_300px] gap-12">
              {/* Main Content */}
              <div className="max-w-3xl">
                <div
                  className="prose-custom prose prose-slate prose-lg prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: injectHeadingIds(post.content) }}
                />
                
                {/* FAQ Section */}
                {post.faqs && post.faqs.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">
                      Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">
                      {post.faqs.map((faq, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-6">
                          <h3 className="font-semibold text-slate-900 mb-2">
                            {faq.question}
                          </h3>
                          <p className="text-slate-600">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {/* Table of Contents */}
                <TableOfContents content={post.content} className="sticky top-24" />

                {/* Related Products */}
                {post.relatedProducts.length > 0 && (
                  <div className="rounded-xl border border-slate-200 p-6 bg-white">
                    <h3 className="font-bold text-slate-900 mb-4">📦 Related Products</h3>
                    <ul className="space-y-2">
                      {post.relatedProducts.map((product) => (
                        <li key={product.href}>
                          <Link
                            href={product.href}
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            → {product.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Solutions */}
                {post.relatedSolutions.length > 0 && (
                  <div className="rounded-xl border border-slate-200 p-6 bg-white">
                    <h3 className="font-bold text-slate-900 mb-4">🏗️ Related Solutions</h3>
                    <ul className="space-y-2">
                      {post.relatedSolutions.map((solution) => (
                        <li key={solution.href}>
                          <Link
                            href={solution.href}
                            className="text-primary hover:underline text-sm font-medium"
                          >
                            → {solution.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="rounded-xl bg-gradient-to-br from-primary to-secondary p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">Need Expert Advice?</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Our technical team is ready to help with your project requirements.
                  </p>
                  <Link
                    href="/get-a-quote"
                    className="inline-block w-full text-center rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary hover:bg-white/90 transition-colors"
                  >
                    Get Free Consultation
                  </Link>
                </div>
              </aside>
            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t max-w-3xl">
              <Link
                href="/resources/blogs"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                ← Back to All Blogs
              </Link>
            </div>
          </div>
        </section>
        <RelatedResources links={getRelatedLinksForBlog(slug, post.relatedProducts)} />
      </main>
      <Footer />
    </div>
  );
}
