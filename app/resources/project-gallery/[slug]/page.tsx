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
  'reliance-industries-jamnagar': {
    title: 'Reliance Industries Facility',
    location: 'Jamnagar, Gujarat',
    industry: 'Petrochemical',
    scope: 'Industrial PEB & Insulated Panels',
    area: '50,000 sq.ft',
    description: 'Large-scale industrial facility with pre-engineered building structures and insulated panel systems for petrochemical operations.',
    highlights: ['Fire-Rated Construction', 'Chemical Resistant', 'Large Span Structure', 'Energy Efficient'],
    products: ['PEB Structure', 'Sandwich PUF Panel', 'Fire-Rated Doors'],
  },
  'uflex-sanand': {
    title: 'Uflex Packaging Plant',
    location: 'Sanand, Gujarat',
    industry: 'Manufacturing',
    scope: 'Industrial Warehouse & Cleanroom',
    area: '35,000 sq.ft',
    description: 'State-of-the-art packaging facility with controlled environment areas for flexible packaging production.',
    highlights: ['ISO Class 8 Cleanroom', 'Temperature Controlled', 'Modular Design', 'Quick Installation'],
    products: ['Cleanroom Partition', 'Sandwich PUF Panel', 'Cleanroom Doors'],
  },
  'cargill-gandhidham': {
    title: 'Cargill Food Processing Unit',
    location: 'Gandhidham, Gujarat',
    industry: 'Food Processing',
    scope: 'Food-Grade Facility',
    area: '20,000 sq.ft',
    description: 'Hygienic food processing facility meeting international food safety standards with temperature-controlled storage.',
    highlights: ['FSSAI Compliant', 'Hygienic Design', 'Cold Storage Integration', 'Easy-Clean Surfaces'],
    products: ['PIR Panel', 'Cleanroom Doors', 'Cold Storage Panels'],
  },
  'bunge-gandhidham': {
    title: 'Bunge Agribusiness Facility',
    location: 'Gandhidham, Gujarat',
    industry: 'Food Processing',
    scope: 'Processing & Storage',
    area: '30,000 sq.ft',
    description: 'Integrated processing and storage facility for agricultural commodities with temperature control systems.',
    highlights: ['Multi-Temperature Zones', 'Bulk Storage', 'Energy Efficient', 'Pest-Proof Design'],
    products: ['Sandwich PUF Panel', 'Cold Storage Doors', 'PIR Panel'],
  },
  'vyara-tiles-gangad': {
    title: 'Vyara Tiles Manufacturing',
    location: 'Gangad, Gujarat',
    industry: 'Manufacturing',
    scope: 'Industrial Shed & Warehouse',
    area: '45,000 sq.ft',
    description: 'Large industrial manufacturing facility with pre-engineered building for ceramic tile production.',
    highlights: ['Large Clear Span', 'Natural Ventilation', 'Fire-Rated', 'Heavy Load Capacity'],
    products: ['PEB Structure', 'Roofing PUF Panel', 'Fire-Rated Doors'],
  },
  'motherson-marelli-sanand': {
    title: 'Marelli Motherson Auto Parts',
    location: 'Sanand, Gujarat',
    industry: 'Automotive',
    scope: 'Manufacturing Facility & Cleanroom',
    area: '40,000 sq.ft',
    description: 'Precision manufacturing facility for automotive components with cleanroom areas for sensitive assembly.',
    highlights: ['ISO Class 7 Areas', 'ESD Protection', 'Climate Controlled', 'Modular Expansion'],
    products: ['Cleanroom Partition', 'PEB Structure', 'Cleanroom Doors'],
  },
  'skf-ahmedabad': {
    title: 'SKF Bearings Manufacturing',
    location: 'Ahmedabad, Gujarat',
    industry: 'Manufacturing',
    scope: 'Precision Manufacturing Facility',
    area: '25,000 sq.ft',
    description: 'Controlled environment facility for bearing manufacturing with precision climate control.',
    highlights: ['Vibration Isolation', 'Precision Climate Control', 'Clean Environment', 'ESD Flooring'],
    products: ['Cleanroom Partition', 'Sandwich PUF Panel', 'Cleanroom Doors'],
  },
  'sarhad-dairy-bhuj': {
    title: 'Sarhad Dairy Processing',
    location: 'Bhuj, Gujarat',
    industry: 'Dairy',
    scope: 'Dairy Processing & Cold Storage',
    area: '15,000 sq.ft',
    description: 'Complete dairy processing facility with milk collection, processing, and cold storage infrastructure.',
    highlights: ['HACCP Compliant', 'Multi-Temperature Zones', 'Hygienic Design', 'Energy Efficient'],
    products: ['PIR Panel', 'Cold Storage Doors', 'Cleanroom Panels'],
  },
  'pgp-glass-dahej': {
    title: 'PGP Glass Manufacturing',
    location: 'Dahej, Gujarat',
    industry: 'Manufacturing',
    scope: 'Industrial Manufacturing Facility',
    area: '55,000 sq.ft',
    description: 'Large-scale glass manufacturing facility with temperature control and specialized production areas.',
    highlights: ['Heat Resistant', 'Large Span Structure', 'Controlled Environment', 'Fire Protection'],
    products: ['PEB Structure', 'Rockwool Panel', 'Fire-Rated Doors'],
  },
  'agro-tech-ankleshwar': {
    title: 'Agro Tech Processing Plant',
    location: 'Ankleshwar, Gujarat',
    industry: 'Food Processing',
    scope: 'Food Processing & Storage',
    area: '18,000 sq.ft',
    description: 'Modern food processing facility with integrated cold storage for agricultural products.',
    highlights: ['FSSAI Compliant', 'Cold Chain Integration', 'Hygienic Surfaces', 'Efficient Layout'],
    products: ['Sandwich PUF Panel', 'Cold Storage Doors', 'PIR Panel'],
  },
  'rotomotive-anand': {
    title: 'Rotomotive Powerdrives',
    location: 'Anand, Gujarat',
    industry: 'Manufacturing',
    scope: 'Industrial Manufacturing',
    area: '22,000 sq.ft',
    description: 'Manufacturing facility for automotive electrical components with controlled production environment.',
    highlights: ['Climate Controlled', 'ESD Protected', 'Modular Design', 'Energy Efficient'],
    products: ['Cleanroom Partition', 'PEB Structure', 'Cleanroom Doors'],
  },
  'rajhans-nutriments-surat': {
    title: 'Rajhans Nutriments',
    location: 'Surat, Gujarat',
    industry: 'Food Processing',
    scope: 'Food Production Facility',
    area: '12,000 sq.ft',
    description: 'Food production facility with hygienic processing areas and temperature-controlled storage.',
    highlights: ['Food-Grade Materials', 'FSSAI Compliant', 'Easy-Clean Design', 'Cold Storage'],
    products: ['PIR Panel', 'Cleanroom Doors', 'Sandwich PUF Panel'],
  },
  'fuji-silvertech-ahmedabad': {
    title: 'Fuji Silvertech Facility',
    location: 'Ahmedabad, Gujarat',
    industry: 'Manufacturing',
    scope: 'Electronics Manufacturing',
    area: '20,000 sq.ft',
    description: 'Electronics manufacturing facility with cleanroom environment for precision assembly.',
    highlights: ['ISO Class 7 Cleanroom', 'ESD Protection', 'Climate Control', 'Modular Construction'],
    products: ['Cleanroom Partition', 'Cleanroom False Ceiling', 'Cleanroom Doors'],
  },
  'aishwarya-dyeing-surat': {
    title: 'Aishwarya Dyeing Mills',
    location: 'Surat, Gujarat',
    industry: 'Textile',
    scope: 'Textile Processing Facility',
    area: '28,000 sq.ft',
    description: 'Modern textile dyeing facility with temperature and humidity control for consistent quality.',
    highlights: ['Humidity Control', 'Chemical Resistant', 'Energy Efficient', 'Large Production Area'],
    products: ['PEB Structure', 'Sandwich PUF Panel', 'Fire-Rated Doors'],
  },
  'narmada-biochem-dahej': {
    title: 'Narmada Biochem Facility',
    location: 'Dahej, Gujarat',
    industry: 'Chemical',
    scope: 'Biochemical Processing',
    area: '16,000 sq.ft',
    description: 'Specialized facility for biochemical processing with controlled environment requirements.',
    highlights: ['Chemical Resistant', 'Controlled Environment', 'Safety Compliant', 'Modular Design'],
    products: ['Sandwich PUF Panel', 'Cleanroom Doors', 'Fire-Rated Doors'],
  },
  'bc-foods-mahua': {
    title: 'BC Foods Processing',
    location: 'Mahua, Gujarat',
    industry: 'Food Processing',
    scope: 'Food Processing & Cold Storage',
    area: '14,000 sq.ft',
    description: 'Complete food processing facility with integrated cold storage for processed foods.',
    highlights: ['FSSAI Compliant', 'Multi-Temperature Storage', 'Hygienic Design', 'Energy Efficient'],
    products: ['PIR Panel', 'Cold Storage Doors', 'Sandwich PUF Panel'],
  },
  'edkem-pharma-ahmedabad': {
    title: 'Edkem Pharma Facility',
    location: 'Ahmedabad, Gujarat',
    industry: 'Pharmaceutical',
    scope: 'Pharmaceutical Manufacturing',
    area: '10,000 sq.ft',
    description: 'GMP-compliant pharmaceutical manufacturing facility with ISO Class 7 cleanroom areas.',
    highlights: ['GMP Compliant', 'ISO Class 7', 'HVAC Integration', 'Modular Construction'],
    products: ['Cleanroom Partition', 'Cleanroom False Ceiling', 'Cleanroom Doors'],
  },
  'makson-pharma-surendranagar': {
    title: 'Makson Pharma Manufacturing',
    location: 'Surendranagar, Gujarat',
    industry: 'Pharmaceutical',
    scope: 'Pharmaceutical Production',
    area: '8,000 sq.ft',
    description: 'Pharmaceutical production facility meeting WHO-GMP standards for drug manufacturing.',
    highlights: ['WHO-GMP Compliant', 'Controlled Environment', 'Clean Manufacturing', 'Efficient Layout'],
    products: ['Cleanroom Partition', 'Cleanroom Doors', 'Sandwich PUF Panel'],
  },
  'infocity-club-gandhinagar': {
    title: 'Infocity Club & Resort',
    location: 'Gandhinagar, Gujarat',
    industry: 'Hospitality',
    scope: 'Commercial & Kitchen Facility',
    area: '6,000 sq.ft',
    description: 'Commercial kitchen and cold storage facility for hospitality operations.',
    highlights: ['Commercial Kitchen', 'Cold Storage', 'Fire-Rated', 'Aesthetic Finish'],
    products: ['Sandwich PUF Panel', 'Cold Storage Doors', 'Fire-Rated Doors'],
  },
  'agrawal-metal-vithlapur': {
    title: 'Agrawal Metal Works',
    location: 'Vithlapur, Gujarat',
    industry: 'Manufacturing',
    scope: 'Industrial Warehouse',
    area: '32,000 sq.ft',
    description: 'Large industrial warehouse and manufacturing facility for metal processing.',
    highlights: ['Large Clear Span', 'Heavy Duty', 'Fire Protection', 'Natural Light'],
    products: ['PEB Structure', 'Roofing PUF Panel', 'Fire-Rated Doors'],
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

  const fullDesc = `${project.title} – ${project.scope} in ${project.location}. ${project.description} Built by PHOENIXX SmartBuild.`;
  const metaDesc = fullDesc.length > 160 ? fullDesc.slice(0, 157) + '...' : fullDesc;

  return {
    title: `${project.title} | Project Gallery`,
    description: metaDesc,
    alternates: { canonical: `https://phoenixxsmartbuild.com/resources/project-gallery/${slug}` },
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





