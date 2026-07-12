import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { AeoContentBlocks } from '@/components/seo/aeo-content-blocks';
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import {
  getCountriesByRegion,
  EXPORT_REGION_LABELS,
  getTier1Cities,
  getExportHubFAQs,
  exportIndustries,
  getExportCountry,
} from '@/lib/export-data';

export const metadata: Metadata = {
  title: 'Global Export to Africa | PUF Panels & Industrial Building Systems',
  description:
    'PHOENIXX SMARTBUILD exports sandwich PUF panels, PIR panels, cold storage systems, and PEB solutions to 16 African markets. Africa\'s trusted engineering partner for industrial building infrastructure.',
  alternates: { canonical: 'https://phoenixxsmartbuild.com/export' },
};

const exportProcess = [
  { step: '1', title: 'Technical Consultation', desc: 'Share building use, dimensions, climate zone, and target port. Our engineers recommend panel type, thickness, and profile.' },
  { step: '2', title: 'Quotation & Documentation', desc: 'Receive export pricing, container loading plan, and technical datasheets for import clearance.' },
  { step: '3', title: 'Manufacturing', desc: 'ISO 9001 certified production at our Gujarat facility. Typical lead time 2–3 weeks for standard orders.' },
  { step: '4', title: 'Container Loading & Dispatch', desc: 'Optimised stacking with edge protection, moisture barriers, and bundled accessories.' },
  { step: '5', title: 'Shipping & Support', desc: 'Commercial invoice, packing list, certificate of origin, and bill of lading. Post-delivery installation guidance available.' },
];

const trustAssets = [
  { title: 'ISO 9001 Manufacturing', desc: 'Certified quality management processes for consistent panel performance.' },
  { title: 'Export Documentation', desc: 'Commercial invoice, packing list, COO, test certificates, and MSDS where applicable.' },
  { title: 'Container Optimisation', desc: 'Loading drawings maximise sqm per container — reducing landed cost per square metre.' },
  { title: 'Engineering Support', desc: 'Thickness selection, profile matching, and installation guidance from our technical team.' },
  { title: 'Certifications Hub', desc: 'IS 14925, fire test reports, and optional FM-approved specifications.', href: '/certifications' },
  { title: 'Case Studies', desc: 'Real-world cold storage, cleanroom, and industrial projects across India.', href: '/resources/project-gallery' },
];

export default function ExportHubPage() {
  const byRegion = getCountriesByRegion();
  const tier1 = getTier1Cities();
  const faqs = getExportHubFAQs();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Global Export', url: '/export' },
  ]);
  const serviceSchema = generateServiceSchema(
    'PUF Panel & Industrial Building Export to Africa',
    'PHOENIXX SMARTBUILD exports insulated sandwich panels, cold storage systems, and PEB solutions to 16 African markets.',
    '/export',
    { type: 'AdministrativeArea', name: 'Africa' }
  );
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white section-padding">
          <div className="container-custom">
            <p className="text-sm font-medium text-emerald-300 uppercase tracking-wider">Global Export</p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl leading-tight">
              Africa&apos;s Trusted Engineering &amp; Export Partner for Industrial Building Solutions
            </h1>
            <p className="mt-4 text-lg text-emerald-100 max-w-3xl leading-relaxed">
              PHOENIXX SMARTBUILD LLP exports premium sandwich PUF panels, PIR panels, Rockwool panels,
              cold storage systems, cleanroom partitions, and pre-engineered buildings to 16 African markets —
              with factory-direct manufacturing from Gujarat, India and engineering support at every stage.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/get-a-quote" className="btn-primary">Request Export Quote</Link>
              <Link href="/contact-us" className="btn-secondary">Speak to Export Team</Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900">How We Export</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
              {exportProcess.map((item) => (
                <div key={item.step} className="rounded-xl border border-slate-200 bg-white p-6">
                  <span className="text-2xl font-bold text-emerald-600">{item.step}</span>
                  <h3 className="mt-2 font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900">Export Markets by Region</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Select a country for climate guidance, shipping routes, city hubs, and industry-specific export information.</p>
            <div className="mt-10 space-y-10">
              {Object.entries(byRegion).map(([region, countries]) => (
                <div key={region}>
                  <h3 className="text-lg font-semibold text-slate-800">{EXPORT_REGION_LABELS[region] ?? region}</h3>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {countries.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/export/${c.slug}`}
                        className="text-sm font-medium px-4 py-2 rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 transition-colors"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900">Priority City Hubs</h2>
            <p className="mt-2 text-slate-600">High-concentration industrial zones where procurement decisions happen.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {tier1.map((city) => (
                <Link
                  key={`${city.countrySlug}-${city.slug}`}
                  href={`/export/${city.countrySlug}/${city.slug}`}
                  className="text-sm font-medium px-3 py-1.5 rounded-lg border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"
                >
                  {city.name}, {getExportCountry(city.countrySlug)?.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900">Industries We Serve Across Africa</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {Object.values(exportIndustries).map((ind) => (
                <div key={ind.slug} className="rounded-xl border border-slate-200 p-5">
                  <h3 className="font-semibold text-slate-900">{ind.name}</h3>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{ind.definition}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900">Trust &amp; Export Support</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trustAssets.map((item) => (
                <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-6">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  {'href' in item && item.href && (
                    <Link href={item.href} className="mt-3 inline-block text-sm text-emerald-600 font-medium hover:text-emerald-800">
                      Learn more →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <AeoContentBlocks
              voiceSearchHeading="Who exports PUF panels to Africa from India?"
              definition="PHOENIXX SMARTBUILD LLP is India's premium manufacturer and exporter of sandwich insulated panels, cold storage systems, cleanroom solutions, and pre-engineered buildings — positioned as Africa's trusted engineering partner for industrial infrastructure."
              faqs={faqs}
            />
            <div className="mt-10 rounded-xl bg-emerald-50 border border-emerald-100 p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900">Start Your Africa Export Project</h2>
              <p className="mt-3 text-slate-600">Share your specifications for a detailed export quotation within 24–48 hours.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/get-a-quote" className="btn-primary">Get Export Quote</Link>
                <Link href="/resources/blogs/export-puf-panels-africa-guide" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-white transition-colors">Read Export Guide</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
