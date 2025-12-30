import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

const solutionsData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  applications: string[];
  gradient: string;
}> = {
  'peb': {
    title: 'Pre-Engineered Buildings (PEB)',
    tagline: 'Fast, Cost-Effective & Scalable',
    description: 'Design, supply, and construction of robust steel structures for warehouses, factories, and commercial buildings.',
    longDescription: 'PHOENIXX Pre-Engineered Buildings (PEB) offer a modern approach to industrial construction with 30-50% faster completion times compared to conventional construction. Our PEB solutions are designed, fabricated, and erected with precision for optimal performance and cost efficiency.',
    benefits: [
      { title: '30-50% Faster Construction', description: 'Factory-controlled fabrication and systematic erection reduces project timelines significantly.' },
      { title: 'Cost-Effective', description: 'Optimized material usage and reduced labor requirements lower overall project costs.' },
      { title: 'Easily Expandable', description: 'Modular design allows for future expansion with minimal disruption.' },
      { title: 'Quality Controlled', description: 'Factory fabrication ensures consistent quality and dimensional accuracy.' },
    ],
    process: [
      { step: 1, title: 'Consultation & Design', description: 'Understanding requirements and preparing structural design.' },
      { step: 2, title: 'Engineering & Detailing', description: 'Detailed engineering drawings and connection designs.' },
      { step: 3, title: 'Fabrication', description: 'Factory fabrication with quality control.' },
      { step: 4, title: 'Erection', description: 'Systematic on-site erection by trained teams.' },
      { step: 5, title: 'Handover', description: 'Final inspection and documentation.' },
    ],
    applications: ['Industrial Warehouses', 'Manufacturing Plants', 'Commercial Buildings', 'Aircraft Hangars', 'Sports Facilities', 'Multi-storey Buildings'],
    gradient: 'from-blue-600 to-indigo-600',
  },
  'cold-storage-construction': {
    title: 'Cold Storage Construction',
    tagline: 'Temperature-Controlled Excellence',
    description: 'Complete EPC execution of cold storage facilities for various temperature requirements.',
    longDescription: 'PHOENIXX provides turnkey cold storage construction services covering the entire spectrum from +15°C to -40°C. Our solutions include cold rooms, freezers, ripening chambers, and distribution centers designed for optimal energy efficiency and operational performance.',
    benefits: [
      { title: 'Turnkey Delivery', description: 'Complete project execution from design to commissioning.' },
      { title: 'Energy Efficient', description: 'Optimized insulation and systems for minimal energy consumption.' },
      { title: 'Wide Temperature Range', description: 'Solutions for +15°C to -40°C requirements.' },
      { title: 'Compliance Assured', description: 'Meeting FSSAI, GMP, and industry-specific standards.' },
    ],
    process: [
      { step: 1, title: 'Requirement Analysis', description: 'Understanding storage needs, products, and volumes.' },
      { step: 2, title: 'Design & Engineering', description: 'Thermal calculations and system design.' },
      { step: 3, title: 'Civil & Structure', description: 'Foundation and structural work.' },
      { step: 4, title: 'Panel Installation', description: 'Insulated panel erection and sealing.' },
      { step: 5, title: 'MEP & Commissioning', description: 'Refrigeration, electrical, and testing.' },
    ],
    applications: ['Food Storage', 'Pharmaceutical Cold Chain', 'Dairy Processing', 'Frozen Food', 'Seed Storage', 'Fruit Ripening'],
    gradient: 'from-cyan-600 to-blue-600',
  },
  'walkable-ceiling-systems': {
    title: 'Ceiling Systems',
    tagline: 'Walkable & Non-Walkable Solutions',
    description: 'Ceiling systems designed for accessibility, acoustic control, and clean aesthetics.',
    longDescription: 'PHOENIXX Ceiling Systems provide complete solutions for industrial, commercial, and cleanroom applications. Our walkable systems support maintenance access while non-walkable systems offer cost-effective ceiling solutions for general applications.',
    benefits: [
      { title: 'Load Capacity up to 200 kg/m²', description: 'Walkable systems support maintenance personnel and equipment.' },
      { title: 'Easy Maintenance Access', description: 'Service access for HVAC, lighting, and utilities.' },
      { title: 'Cleanroom Compatible', description: 'Designed for ISO Class 5-8 environments.' },
      { title: 'Acoustic Control', description: 'Options for sound absorption and insulation.' },
    ],
    process: [
      { step: 1, title: 'Assessment', description: 'Evaluating load requirements and access needs.' },
      { step: 2, title: 'Design', description: 'Grid layout and structural support design.' },
      { step: 3, title: 'Fabrication', description: 'Manufacturing ceiling components.' },
      { step: 4, title: 'Installation', description: 'Grid and panel installation.' },
      { step: 5, title: 'Integration', description: 'Lighting, HVAC, and services integration.' },
    ],
    applications: ['Cleanrooms', 'Pharmaceutical Facilities', 'Semiconductor Plants', 'Offices', 'Healthcare', 'Data Centers'],
    gradient: 'from-violet-600 to-purple-600',
  },
  'partition-solutions': {
    title: 'Partition Solutions',
    tagline: 'Modular & Flexible Space Division',
    description: 'Modular partition systems for cleanrooms, offices, and industrial spaces.',
    longDescription: 'PHOENIXX Partition Solutions provide flexible space division for various applications. Our modular systems offer quick installation, easy reconfiguration, and thermal insulation options to meet diverse requirements.',
    benefits: [
      { title: 'Quick Installation', description: 'Pre-fabricated systems reduce on-site installation time.' },
      { title: 'Reconfigurable', description: 'Easy to modify layouts as requirements change.' },
      { title: 'Thermal Insulation', description: 'Insulated options for temperature-controlled areas.' },
      { title: 'Various Finishes', description: 'Multiple surface and color options available.' },
    ],
    process: [
      { step: 1, title: 'Space Planning', description: 'Layout design and optimization.' },
      { step: 2, title: 'Selection', description: 'Choosing panel type and finish.' },
      { step: 3, title: 'Fabrication', description: 'Custom fabrication to specifications.' },
      { step: 4, title: 'Installation', description: 'Professional installation.' },
      { step: 5, title: 'Finishing', description: 'Doors, windows, and accessories.' },
    ],
    applications: ['Cleanrooms', 'Laboratories', 'Offices', 'Industrial Facilities', 'Healthcare', 'Retail'],
    gradient: 'from-emerald-600 to-teal-600',
  },
  'prefab-house': {
    title: 'Prefab Structures',
    tagline: 'Rapid Construction Solutions',
    description: 'Prefabricated structures for residential, commercial, and temporary needs.',
    longDescription: 'PHOENIXX Prefab Structures offer quick-build solutions with factory-controlled quality. Ideal for site offices, labor accommodations, temporary facilities, and permanent buildings requiring fast delivery.',
    benefits: [
      { title: 'Assembly in Days', description: 'Pre-fabricated components enable rapid on-site assembly.' },
      { title: 'Consistent Quality', description: 'Factory manufacturing ensures uniform quality.' },
      { title: 'Relocatable', description: 'Can be disassembled and moved to new locations.' },
      { title: 'Cost-Effective', description: 'Lower construction costs and faster occupancy.' },
    ],
    process: [
      { step: 1, title: 'Design', description: 'Layout and specification finalization.' },
      { step: 2, title: 'Foundation', description: 'Site preparation and foundation work.' },
      { step: 3, title: 'Manufacturing', description: 'Factory production of modules.' },
      { step: 4, title: 'Transport', description: 'Delivery to site.' },
      { step: 5, title: 'Assembly', description: 'On-site assembly and finishing.' },
    ],
    applications: ['Site Offices', 'Labor Camps', 'Temporary Shelters', 'Farm Houses', 'Guard Rooms', 'Canteens'],
    gradient: 'from-amber-600 to-orange-600',
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) return {};
  return {
    title: `${data.title} | PHOENIXX Solutions`,
    description: data.description,
    alternates: { canonical: `/solutions/${slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({ slug }));
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = solutionsData[slug];
  if (!data) notFound();

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.title,
    description: data.description,
    provider: { '@type': 'Organization', name: 'NXT PHOENIXX SMARTBUILD LLP' },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={serviceSchema} />

        {/* Hero */}
        <section className={`relative bg-gradient-to-br ${data.gradient} py-20 md:py-28`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{data.title}</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">
                {data.tagline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {data.title}
              </h1>
              <p className="mt-6 text-lg text-white/90 leading-relaxed">
                {data.longDescription}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
                >
                  Request Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 rounded-lg border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Key Benefits</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {data.benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <span className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-xl`}>
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{benefit.title}</h3>
                    <p className="mt-1 text-slate-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Process</h2>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />
                <div className="space-y-8">
                  {data.process.map((step) => (
                    <div key={step.step} className="relative flex gap-6 md:items-center">
                      <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg relative z-10`}>
                        {step.step}
                      </div>
                      <div className="flex-1 bg-white rounded-xl p-6 shadow-sm">
                        <h3 className="font-bold text-slate-900">{step.title}</h3>
                        <p className="mt-1 text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Applications</h2>
            <div className="flex flex-wrap gap-3">
              {data.applications.map((app) => (
                <span
                  key={app}
                  className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${data.gradient} text-white font-medium`}
                >
                  {app}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 bg-gradient-to-r ${data.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Our team is ready to help you plan and execute your infrastructure project.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
