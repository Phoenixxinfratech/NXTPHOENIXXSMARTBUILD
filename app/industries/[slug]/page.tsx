import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

const industriesData: Record<string, {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  requirements: { title: string; description: string }[];
  solutions: { name: string; description: string }[];
  clients: string[];
  gradient: string;
}> = {
  'pharma-chemical': {
    title: 'Pharmaceuticals & Life Sciences',
    tagline: 'GMP-Compliant Controlled Environments',
    description: 'Infrastructure solutions for pharmaceutical, biotech, and healthcare facilities.',
    longDescription: 'PHOENIXX delivers comprehensive infrastructure solutions for the pharmaceutical and life sciences industry. Our cleanrooms, controlled environments, and specialized facilities meet GMP, FDA, and WHO standards for drug manufacturing and healthcare applications.',
    requirements: [
      { title: 'GMP/FDA Compliance', description: 'All facilities designed to meet current Good Manufacturing Practices and FDA requirements.' },
      { title: 'ISO Class 5-8 Cleanrooms', description: 'Controlled environments with particle counts meeting ISO 14644-1 standards.' },
      { title: 'Temperature & Humidity Control', description: 'Precise environmental control for process requirements.' },
      { title: 'Contamination Prevention', description: 'Systems and materials designed to minimize contamination risks.' },
    ],
    solutions: [
      { name: 'Cleanroom Systems', description: 'Complete modular cleanroom construction with HVAC integration.' },
      { name: 'Cold Chain Facilities', description: 'Temperature-controlled storage for pharmaceuticals and vaccines.' },
      { name: 'Specialized Doors', description: 'Hermetic, airlocks, and fire-rated doors for controlled areas.' },
      { name: 'False Ceiling Systems', description: 'Walkable ceilings with HEPA filter integration.' },
    ],
    clients: ['Torrent Pharmaceuticals', 'Intas Pharmaceuticals', 'Amneal Pharmaceuticals', 'Claris Life Sciences'],
    gradient: 'from-rose-500 to-pink-600',
  },
  'food-processing': {
    title: 'Food & Beverage Processing',
    tagline: 'Hygienic Infrastructure for Food Safety',
    description: 'Food-grade facilities for processing, packaging, and storage.',
    longDescription: 'PHOENIXX provides hygienic infrastructure solutions for the food and beverage industry. Our facilities meet FSSAI standards and international food safety requirements, ensuring product integrity throughout the supply chain.',
    requirements: [
      { title: 'FSSAI Compliance', description: 'All facilities designed to meet Food Safety and Standards Authority requirements.' },
      { title: 'Hygienic Surfaces', description: 'Easy-to-clean surfaces that prevent bacterial growth.' },
      { title: 'Temperature Control', description: 'Cold storage and processing at required temperatures.' },
      { title: 'Pest Prevention', description: 'Design features to prevent pest entry and harborage.' },
    ],
    solutions: [
      { name: 'Insulated Panels', description: 'Food-grade panels for processing areas and cold storage.' },
      { name: 'Cold Rooms', description: 'Chilled and frozen storage for ingredients and finished products.' },
      { name: 'Processing Halls', description: 'Hygienic environments for food processing operations.' },
      { name: 'Cleanable Surfaces', description: 'Coated panels and flooring for easy sanitation.' },
    ],
    clients: ['Coca-Cola', 'Balaji Wafers', 'Cargill Foods', 'Bunge India'],
    gradient: 'from-amber-500 to-orange-600',
  },
  'dairy': {
    title: 'Dairy Industries',
    tagline: 'Processing & Cold Chain Solutions',
    description: 'Specialized infrastructure for dairy processing and storage.',
    longDescription: 'PHOENIXX serves the dairy industry with specialized processing and cold chain infrastructure. From milk collection centers to processing plants and cold storage, our solutions maintain product quality and safety.',
    requirements: [
      { title: 'Temperature Control (+4°C)', description: 'Maintaining optimal temperatures for milk and dairy products.' },
      { title: 'Hygienic Design', description: 'Surfaces and systems designed for dairy hygiene standards.' },
      { title: 'Energy Efficiency', description: 'Optimized systems to reduce operational costs.' },
      { title: 'HACCP Compliance', description: 'Facilities supporting HACCP food safety systems.' },
    ],
    solutions: [
      { name: 'Cold Storage', description: 'Bulk milk coolers and cold rooms for dairy storage.' },
      { name: 'Processing Plants', description: 'Hygienic processing environments for dairy operations.' },
      { name: 'Insulated Panels', description: 'Food-grade panels for temperature control.' },
      { name: 'Cleanroom Doors', description: 'Hygienic doors for processing areas.' },
    ],
    clients: ['Amul Dairy', 'Mother Dairy', 'NDDB', 'Banas Dairy'],
    gradient: 'from-sky-500 to-blue-600',
  },
  'cold-chain': {
    title: 'Cold Chain & Logistics',
    tagline: 'Temperature-Controlled Infrastructure',
    description: 'End-to-end cold chain facilities for storage and distribution.',
    longDescription: 'PHOENIXX provides comprehensive cold chain infrastructure from storage to distribution. Our facilities maintain product integrity across the supply chain with temperature ranges from +15°C to -40°C.',
    requirements: [
      { title: '-40°C to +15°C Range', description: 'Facilities for various temperature requirements.' },
      { title: 'Energy Efficiency', description: 'Optimized insulation and refrigeration systems.' },
      { title: 'Multi-Chamber Design', description: 'Separate zones for different temperature needs.' },
      { title: '24/7 Monitoring', description: 'Temperature monitoring and alert systems.' },
    ],
    solutions: [
      { name: 'Cold Rooms', description: 'Storage facilities for chilled products.' },
      { name: 'Freezers', description: 'Deep freeze storage for frozen products.' },
      { name: 'Ripening Chambers', description: 'Controlled atmosphere for fruit ripening.' },
      { name: 'Distribution Centers', description: 'Temperature-controlled logistics facilities.' },
    ],
    clients: ['Tirupati Logistics', 'Various Cold Storages'],
    gradient: 'from-cyan-500 to-teal-600',
  },
  'precision-engineering': {
    title: 'Manufacturing & Engineering',
    tagline: 'Controlled Production Environments',
    description: 'Facilities for precision manufacturing with contamination control.',
    longDescription: 'PHOENIXX serves precision manufacturing with controlled environments for electronics, automotive, and aerospace industries. Our facilities provide particle control, ESD protection, and climate management.',
    requirements: [
      { title: 'Particle Control', description: 'Cleanroom environments for sensitive manufacturing.' },
      { title: 'Static Prevention', description: 'ESD-safe flooring and grounding systems.' },
      { title: 'Climate Control', description: 'Temperature and humidity management.' },
      { title: 'Vibration Isolation', description: 'Design considerations for sensitive equipment.' },
    ],
    solutions: [
      { name: 'Cleanrooms', description: 'ISO Class 5-8 environments for precision work.' },
      { name: 'Partitions', description: 'Modular systems for production area separation.' },
      { name: 'ESD Flooring', description: 'Anti-static flooring solutions.' },
      { name: 'PEB Structures', description: 'Large-span buildings for manufacturing.' },
    ],
    clients: ['SKF Bearings', 'Ford Motors', 'Marelli Motherson'],
    gradient: 'from-slate-500 to-zinc-600',
  },
  'hospitality': {
    title: 'Hospitality & Commercial',
    tagline: 'Rapid Construction Solutions',
    description: 'Quick-build solutions for hotels, resorts, and commercial facilities.',
    longDescription: 'PHOENIXX provides fast-track construction solutions for the hospitality industry. From prefab structures to cold storage for commercial kitchens, our solutions help hotels and resorts become operational quickly.',
    requirements: [
      { title: 'Aesthetic Design', description: 'Visually appealing finishes for guest areas.' },
      { title: 'Sound Insulation', description: 'Acoustic solutions for guest comfort.' },
      { title: 'Fire Safety', description: 'Fire-rated materials and emergency systems.' },
      { title: 'Energy Efficiency', description: 'Sustainable building solutions.' },
    ],
    solutions: [
      { name: 'Prefab Rooms', description: 'Quick-assembly accommodation modules.' },
      { name: 'Kitchen Facilities', description: 'Commercial kitchen infrastructure.' },
      { name: 'Cold Storage', description: 'Food storage for hotels and restaurants.' },
      { name: 'Partition Systems', description: 'Flexible space division solutions.' },
    ],
    clients: ['Fortune Landmark', 'Hotel Fern', 'Info City Club'],
    gradient: 'from-violet-500 to-purple-600',
  },
  'automobile': {
    title: 'Automotive Industry',
    tagline: 'Large-Scale Industrial Infrastructure',
    description: 'Manufacturing facilities and warehouses for automotive sector.',
    longDescription: 'PHOENIXX serves the automotive industry with large-scale infrastructure solutions. From manufacturing plants to paint shops and warehouses, our facilities support automotive production and logistics.',
    requirements: [
      { title: 'Large Spans', description: 'Clear-span buildings for assembly lines.' },
      { title: 'Heavy Load Capacity', description: 'Floors designed for equipment and vehicles.' },
      { title: 'Controlled Environments', description: 'Clean areas for paint and assembly.' },
      { title: 'Future Expansion', description: 'Design allowing for capacity increases.' },
    ],
    solutions: [
      { name: 'PEB Structures', description: 'Large manufacturing and warehouse buildings.' },
      { name: 'Paint Shops', description: 'Controlled environments for painting operations.' },
      { name: 'Warehouses', description: 'Parts and finished goods storage.' },
      { name: 'Fire Doors', description: 'Fire-rated doors for safety compliance.' },
    ],
    clients: ['Ford Motors', 'Marelli Motherson', 'SKF Bearings'],
    gradient: 'from-red-500 to-rose-600',
  },
  'agri-processing': {
    title: 'Agriculture & Agri-Processing',
    tagline: 'Post-Harvest Infrastructure',
    description: 'Storage and processing facilities for agricultural products.',
    longDescription: 'PHOENIXX provides post-harvest infrastructure for the agricultural sector. From seed storage to processing units, our facilities help preserve agricultural products and reduce post-harvest losses.',
    requirements: [
      { title: 'Temperature Control', description: 'Cold storage for perishable products.' },
      { title: 'Humidity Management', description: 'Controlled humidity for seeds and grains.' },
      { title: 'Pest Control', description: 'Design features preventing pest entry.' },
      { title: 'Bulk Storage', description: 'Large capacity storage solutions.' },
    ],
    solutions: [
      { name: 'Cold Storage', description: 'Temperature-controlled storage for produce.' },
      { name: 'Pack Houses', description: 'Sorting, grading, and packing facilities.' },
      { name: 'Seed Storage', description: 'Controlled environments for seed preservation.' },
      { name: 'Processing Units', description: 'Facilities for agricultural processing.' },
    ],
    clients: ['Dinkar Seeds', 'Swan Medicot LLP'],
    gradient: 'from-green-500 to-emerald-600',
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = industriesData[slug];
  if (!data) return {};
  return {
    title: `${data.title} | PHOENIXX Industries`,
    description: data.description,
    alternates: { canonical: `/industries/${slug}` },
  };
}

export async function generateStaticParams() {
  return Object.keys(industriesData).map((slug) => ({ slug }));
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const data = industriesData[slug];
  if (!data) notFound();

  const industrySchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${data.title} Solutions`,
    description: data.description,
    provider: { '@type': 'Organization', name: 'NXT PHOENIXX SMARTBUILD LLP' },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={industrySchema} />

        {/* Hero */}
        <section className={`relative bg-gradient-to-br ${data.gradient} py-20 md:py-28`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
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
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Industry Requirements</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {data.requirements.map((req) => (
                <div key={req.title} className="flex gap-4">
                  <span className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-xl`}>
                    ✓
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{req.title}</h3>
                    <p className="mt-1 text-slate-600">{req.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Solutions</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {data.solutions.map((solution) => (
                <div key={solution.name} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-slate-900">{solution.name}</h3>
                  <p className="mt-2 text-sm text-slate-600">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Clients */}
        {data.clients.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Trusted By</h2>
              <div className="flex flex-wrap gap-4">
                {data.clients.map((client) => (
                  <span
                    key={client}
                    className="inline-block px-4 py-2 rounded-lg bg-slate-100 text-slate-700 font-medium"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={`py-20 bg-gradient-to-r ${data.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Discuss Your Project?
            </h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Our team has deep expertise in {data.title.toLowerCase()} infrastructure.
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
