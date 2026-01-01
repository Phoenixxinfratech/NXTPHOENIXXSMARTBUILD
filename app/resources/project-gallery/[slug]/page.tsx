import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';
import { generateBreadcrumbSchema } from '@/lib/schema';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const projectDetails: Record<string, {
  title: string;
  location: string;
  industry: string;
  scope: string;
  area: string;
  description: string;
  highlights: string[];
  products: string[];
}> = {
  'pharma-cleanroom-pune': {
    title: 'Pharmaceutical Cleanroom Facility',
    location: 'Pune, Maharashtra',
    industry: 'Pharmaceutical',
    scope: 'ISO Class 7 Cleanroom',
    area: '5,000 sq.ft',
    description: 'Complete cleanroom facility for pharmaceutical manufacturing with ISO Class 7 classification, including HVAC systems, partitions, and specialized doors.',
    highlights: ['GMP Compliant Design', 'ISO Class 7 Certified', 'Integrated HVAC', 'Modular Construction'],
    products: ['Cleanroom Partition', 'Cleanroom Doors', 'Cleanroom False Ceiling'],
  },
  'cold-storage-mumbai': {
    title: 'Multi-Temperature Cold Storage',
    location: 'Mumbai, Maharashtra',
    industry: 'Cold Chain',
    scope: 'Cold Storage Construction',
    area: '25,000 sq.ft',
    description: 'Multi-chamber cold storage facility with different temperature zones for diverse product storage requirements.',
    highlights: ['Multiple Temperature Zones', 'Energy Efficient', 'Quick Construction', 'High-Quality Insulation'],
    products: ['PIR Panel', 'Sandwich PUF Panel', 'Cleanroom Doors'],
  },
};

async function getProject(slug: string) {
  return projectDetails[slug] || null;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Project Gallery`,
    description: project.description,
    alternates: { canonical: `/resources/project-gallery/${slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(projectDetails).map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Project Gallery', url: '/resources/project-gallery' },
    { name: project.title, url: `/resources/project-gallery/${slug}` },
  ]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />

        <AISummaryBlock
          summary={`${project.title} in ${project.location}: ${project.description} Products used: ${project.products.join(', ')}.`}
          keywords={[project.industry, project.title, ...project.products]}
        />

        {/* Header */}
        <section className="border-b bg-muted/30 py-12 md:py-16">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resources" className="hover:text-primary">Resources</Link>
              <span className="mx-2">/</span>
              <Link href="/resources/project-gallery" className="hover:text-primary">Project Gallery</Link>
            </nav>
            
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {project.industry}
            </span>
            
            <h1 className="mt-4">{project.title}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{project.location}</p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                {/* Image Placeholder */}
                <div className="aspect-video rounded-lg bg-muted mb-8 flex items-center justify-center">
                  <span className="text-8xl opacity-20">🏗️</span>
                </div>

                <div className="prose-custom">
                  <h2>Project Overview</h2>
                  <p>{project.description}</p>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Project Highlights</h2>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h2 className="text-2xl font-bold mb-4">Products Used</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.products.map((product, idx) => (
                      <span key={idx} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside>
                <div className="sticky top-24 space-y-6">
                  <div className="card-base p-6">
                    <h3 className="font-semibold">Project Details</h3>
                    <dl className="mt-4 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Industry</dt>
                        <dd className="font-medium">{project.industry}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Scope</dt>
                        <dd className="font-medium">{project.scope}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Area</dt>
                        <dd className="font-medium">{project.area}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Location</dt>
                        <dd className="font-medium">{project.location}</dd>
                      </div>
                    </dl>
                  </div>

                  <div className="card-base p-6">
                    <h3 className="font-semibold">Similar Project?</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Contact us to discuss your requirements.
                    </p>
                    <Link
                      href="/get-a-quote"
                      className="btn-base mt-4 w-full bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
                    >
                      Get a Quote
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



