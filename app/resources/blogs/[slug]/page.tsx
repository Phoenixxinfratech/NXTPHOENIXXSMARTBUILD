import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Placeholder blog data
const blogPosts: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: { name: string; role: string };
}> = {
  'understanding-puf-vs-pir-panels': {
    title: 'Understanding PUF vs PIR Panels: A Comprehensive Guide',
    excerpt: 'Learn the key differences between Polyurethane Foam (PUF) and Polyisocyanurate (PIR) panels.',
    content: `
      <h2>Introduction</h2>
      <p>When selecting insulated panels for your construction project, two options frequently come up: PUF (Polyurethane Foam) and PIR (Polyisocyanurate) panels. Both offer excellent thermal insulation, but they have distinct characteristics that make them suitable for different applications.</p>
      
      <h2>What is PUF?</h2>
      <p>Polyurethane Foam (PUF) panels consist of a rigid foam core made from polyurethane, sandwiched between two metal sheets. PUF provides excellent thermal insulation with a typical thermal conductivity of 0.024 W/mK.</p>
      
      <h2>What is PIR?</h2>
      <p>Polyisocyanurate (PIR) is a derivative of polyurethane with improved fire resistance. PIR panels achieve better fire ratings (typically Class B-s1, d0) and have slightly better thermal performance at 0.022 W/mK.</p>
      
      <h2>Key Differences</h2>
      <ul>
        <li><strong>Fire Performance:</strong> PIR offers superior fire resistance</li>
        <li><strong>Cost:</strong> PUF is generally more cost-effective</li>
        <li><strong>Thermal Performance:</strong> Both are excellent, PIR slightly better</li>
        <li><strong>Applications:</strong> PIR preferred for fire-sensitive environments</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Choose PUF for cost-effective general insulation needs, and PIR where fire safety is paramount. Contact our team for guidance on your specific project requirements.</p>
    `,
    category: 'Technical',
    date: '2024-12-15',
    readTime: '5 min read',
    author: { name: 'Technical Team', role: 'PHOENIXX Engineering' },
  },
  'cleanroom-design-best-practices': {
    title: 'Cleanroom Design Best Practices for Pharmaceutical Facilities',
    excerpt: 'Essential guidelines for designing GMP-compliant cleanrooms.',
    content: `
      <h2>Introduction</h2>
      <p>Designing a cleanroom for pharmaceutical manufacturing requires careful consideration of regulatory requirements, workflow efficiency, and contamination control strategies.</p>
      
      <h2>Key Design Principles</h2>
      <p>Successful cleanroom design starts with understanding the classification requirements (ISO Class 5-8) and regulatory guidelines (GMP, FDA 21 CFR).</p>
      
      <h2>Conclusion</h2>
      <p>Proper cleanroom design ensures product quality, regulatory compliance, and operational efficiency.</p>
    `,
    category: 'Industry Insights',
    date: '2024-12-10',
    readTime: '8 min read',
    author: { name: 'Pharma Solutions Team', role: 'PHOENIXX' },
  },
};

async function getBlogPost(slug: string) {
  return blogPosts[slug] || null;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/blogs/${slug}` },
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
    author: { '@type': 'Person', name: post.author.name },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={articleSchema} />

        <AISummaryBlock
          summary={`${post.title}: ${post.excerpt}`}
          keywords={[post.category, 'blog', post.title]}
        />

        {/* Article Header */}
        <section className="border-b bg-muted/30 py-12 md:py-16">
          <div className="container-custom max-w-4xl">
            <nav className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resources" className="hover:text-primary">Resources</Link>
              <span className="mx-2">/</span>
              <Link href="/resources/blogs" className="hover:text-primary">Blogs</Link>
            </nav>
            
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {post.category}
            </span>
            
            <h1 className="mt-4 text-balance">{post.title}</h1>
            
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span>{post.author.name}</span>
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

        {/* Article Content */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <div
              className="prose-custom"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 border-t pt-8">
              <Link
                href="/resources/blogs"
                className="inline-flex items-center text-sm font-medium text-primary hover:underline"
              >
                ← Back to Blogs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


