import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Sandwich PUF Panel Manufacturer in India | PHOENIXX',
  description: 'Leading sandwich PUF panel manufacturer in India. PHOENIXX offers high-quality composite panels for roofing, walls & cold storage applications nationwide.',
  keywords: ['sandwich PUF panel manufacturer in India', 'sandwich panels', 'composite panels', 'insulated roof panels'],
  alternates: {
    canonical: '/sandwich-puf-panel-manufacturer-in-india',
  },
};

const faqs = [
  {
    question: 'What is a sandwich PUF panel?',
    answer: 'A sandwich PUF panel is a composite building material with a rigid polyurethane foam (PUF) core "sandwiched" between two metal facings (typically pre-painted steel). This three-layer construction provides excellent thermal insulation, structural strength, and weather protection in a single prefabricated component.',
  },
  {
    question: 'What are sandwich PUF panels used for?',
    answer: 'Sandwich PUF panels are used for roofing, wall cladding, partitions, and ceiling applications in industrial buildings, warehouses, cold storage, cleanrooms, food processing plants, and commercial structures where thermal insulation and fast construction are priorities.',
  },
  {
    question: 'What is the difference between PUF and PIR sandwich panels?',
    answer: 'PUF (Polyurethane Foam) panels offer excellent thermal insulation at economical cost. PIR (Polyisocyanurate) panels provide enhanced fire resistance and slightly better thermal performance. Choose PIR for fire-sensitive applications like pharma and cold storage; PUF for general industrial use.',
  },
  {
    question: 'How are sandwich panels installed?',
    answer: 'Sandwich panels are installed on a structural framework (purlins/girts) using concealed or through-fix fasteners. The interlocking tongue-and-groove joints ensure airtight connections. PHOENIXX provides installation guidelines and technical support for proper installation.',
  },
  {
    question: 'What panel thickness should I choose for my project?',
    answer: 'Roofing: 50-80mm for industrial buildings, 100-150mm for cold storage. Walls: 40-60mm for general insulation, 80-120mm for temperature-controlled facilities. Contact PHOENIXX for project-specific thermal calculations and recommendations.',
  },
  {
    question: 'Can sandwich panels be customized?',
    answer: 'Yes, PHOENIXX offers extensive customization: thickness from 30-150mm, lengths up to 20 meters, various coating options (SMP, SDP, PVDF), multiple RAL colors, and different profile configurations to match your project requirements.',
  },
  {
    question: 'What is the lifespan of sandwich PUF panels?',
    answer: 'High-quality sandwich PUF panels from PHOENIXX are designed for 25-30 year service life. The foam maintains its insulation properties, while the metal facings with quality coatings resist corrosion and weathering throughout this period.',
  },
];

export default function SandwichPufPanelManufacturerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-violet-900 via-purple-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400 mb-6">
                🔲 Composite Panel Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sandwich PUF Panel Manufacturer in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild is a leading manufacturer of high-performance sandwich PUF panels, 
                delivering integrated insulation and structural solutions for India&apos;s industrial, 
                commercial, and cold chain infrastructure.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get Panel Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Technical Support
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                About Sandwich PUF Panels
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  As a specialized <strong>sandwich PUF panel manufacturer in India</strong>, PHOENIXX 
                  SmartBuild produces advanced composite building panels that combine thermal insulation, 
                  structural integrity, and aesthetic finish in a single factory-made component. Our 
                  sandwich panels revolutionize building construction by eliminating the need for separate 
                  insulation layers and finish materials.
                </p>
                <p>
                  The &quot;sandwich&quot; construction consists of a high-density PUF core (40 kg/m³) bonded 
                  to pre-painted galvanized steel facings using continuous lamination technology. This 
                  manufacturing process creates a monolithic panel with consistent properties throughout, 
                  ensuring reliable <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">thermal and structural performance</Link> for 
                  decades of service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Panel Construction */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Sandwich Panel Construction
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="p-6 bg-slate-50 rounded-xl">
                    <div className="w-16 h-4 bg-blue-500 rounded mx-auto mb-4"></div>
                    <h3 className="font-bold text-slate-900">External Facing</h3>
                    <p className="text-sm text-slate-600 mt-2">Pre-painted galvanized steel (0.40-0.60mm) with weather-resistant coating</p>
                  </div>
                  <div className="p-6 bg-amber-50 rounded-xl">
                    <div className="w-16 h-12 bg-amber-400 rounded mx-auto mb-4"></div>
                    <h3 className="font-bold text-slate-900">PUF Core</h3>
                    <p className="text-sm text-slate-600 mt-2">Rigid polyurethane foam (40 kg/m³) with 0.024 W/mK thermal conductivity</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-xl">
                    <div className="w-16 h-4 bg-gray-400 rounded mx-auto mb-4"></div>
                    <h3 className="font-bold text-slate-900">Internal Facing</h3>
                    <p className="text-sm text-slate-600 mt-2">Pre-painted steel or aluminum with clean, hygienic finish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panel Types */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Our Sandwich Panel Range
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Roofing Panels',
                  description: 'Trapezoidal profile panels for industrial and commercial roofing',
                  link: '/products/sandwich-panels/roofing-puf-panel',
                },
                {
                  title: 'Wall Panels',
                  description: 'Flat and micro-ribbed panels for external and internal walls',
                  link: '/products/sandwich-panels/wall-ceiling-panel',
                },
                {
                  title: 'Cold Room Panels',
                  description: 'High-thickness panels for cold storage and freezer applications',
                  link: '/solutions/cold-storage-construction',
                },
                {
                  title: 'PIR Panels',
                  description: 'Fire-rated panels for enhanced fire safety applications',
                  link: '/products/sandwich-panels/pir-panel',
                },
              ].map((panel, idx) => (
                <Link
                  key={idx}
                  href={panel.link}
                  className="group bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all text-center"
                >
                  <div className="w-16 h-16 bg-violet-100 rounded-xl mx-auto flex items-center justify-center text-2xl mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {panel.title}
                  </h3>
                  <p className="mt-2 text-slate-600 text-sm">{panel.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-violet-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Sandwich Panel Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Industrial Buildings', desc: 'Factories, workshops, and manufacturing plants' },
                { title: 'Warehouses', desc: 'Storage and distribution centers' },
                { title: 'Cold Storage', desc: 'Temperature-controlled facilities' },
                { title: 'Cleanrooms', desc: 'Pharmaceutical and electronics manufacturing' },
                { title: 'Commercial Buildings', desc: 'Offices, retail, and showrooms' },
                { title: 'Agricultural Structures', desc: 'Poultry farms and dairy facilities' },
              ].map((app, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h3 className="font-bold text-violet-300">{app.title}</h3>
                  <p className="mt-2 text-slate-300 text-sm">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Technical Specifications
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { label: 'Panel Thickness', value: '30, 40, 50, 60, 80, 100, 120, 150 mm' },
                      { label: 'Panel Width', value: '1000mm (effective), 1070mm (total)' },
                      { label: 'Panel Length', value: 'Up to 20,000mm' },
                      { label: 'Core Density', value: '40 ± 2 kg/m³' },
                      { label: 'Thermal Conductivity', value: '0.024 W/mK' },
                      { label: 'Steel Facing', value: '0.40mm - 0.60mm PPGI/PPGL' },
                      { label: 'Coatings Available', value: 'SMP, SDP, PVDF' },
                      { label: 'Fire Rating', value: 'B1, B2, B3 (PIR available)' },
                    ].map((spec, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="px-6 py-4 font-semibold text-slate-900">{spec.label}</td>
                        <td className="px-6 py-4 text-slate-600">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-center">
                <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline font-medium">
                  Download Technical Datasheet →
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-violet-600 to-purple-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get Sandwich Panels for Your Project
            </h2>
            <p className="text-xl text-violet-100 mb-10 max-w-2xl mx-auto">
              High-quality sandwich PUF panels with pan-India delivery and technical support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/contact-us"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Speak with Engineer
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

