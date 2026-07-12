import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { RelatedResources } from '@/components/blocks/related-resources';
import { AeoContentBlocks, DEFAULT_PUF_SPECS } from '@/components/seo/aeo-content-blocks';
import { generateBreadcrumbSchema, generateFAQSchema, generateServiceSchema } from '@/lib/schema';
import { getRelatedLinksForExport } from '@/lib/internal-links';
import {
  getExportCountry,
  getAllExportCountrySlugs,
  getCitiesForCountry,
  getIndustriesForCountry,
  generateExportCountryFAQs,
  EXPORT_REGION_LABELS,
  getCountriesByRegion,
} from '@/lib/export-data';

interface ExportPageProps {
  params: Promise<{ country: string }>;
}

export async function generateStaticParams() {
  return getAllExportCountrySlugs().map((country) => ({ country }));
}

export async function generateMetadata({ params }: ExportPageProps): Promise<Metadata> {
  const { country } = await params;
  const data = getExportCountry(country);
  if (!data) return { title: 'Export Market Not Found' };
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `https://phoenixxsmartbuild.com/export/${country}` },
  };
}

const exportProducts = [
  { href: '/products/sandwich-panels/sandwich-puf-panel', label: 'Sandwich PUF Panel' },
  { href: '/products/sandwich-panels/pir-panel', label: 'PIR Panel' },
  { href: '/products/sandwich-panels/roofing-puf-panel', label: 'Roofing PUF Panel' },
  { href: '/products/sandwich-panels/rockwool-panel', label: 'Rockwool Panel' },
  { href: '/solutions/cold-storage-construction', label: 'Cold Storage Construction' },
  { href: '/solutions/peb', label: 'PEB Buildings' },
];

export default async function ExportCountryPage({ params }: ExportPageProps) {
  const { country } = await params;
  const data = getExportCountry(country);
  if (!data) notFound();

  const cities = getCitiesForCountry(country);
  const industries = getIndustriesForCountry(country);
  const faqs = generateExportCountryFAQs(data);
  const byRegion = getCountriesByRegion();
  const otherInRegion = (byRegion[data.region] ?? []).filter((c) => c.slug !== country);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Global Export', url: '/export' },
    { name: data.name, url: `/export/${country}` },
  ]);
  const serviceSchema = generateServiceSchema(
    `PUF Panel Export to ${data.name}`,
    data.metaDescription,
    `/export/${country}`,
    { type: 'Country', name: data.name }
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
            <nav className="text-sm text-emerald-200 mb-4">
              <Link href="/export" className="hover:text-white">Global Export</Link>
              <span className="mx-2">/</span>
              <span>{data.name}</span>
            </nav>
            <p className="text-sm font-medium text-emerald-300 uppercase tracking-wider">
              {EXPORT_REGION_LABELS[data.region]} · Global Export
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              PUF Panel Export to {data.name}
            </h1>
            <p className="mt-4 text-lg text-emerald-100 max-w-3xl leading-relaxed">
              PHOENIXX SMARTBUILD exports premium sandwich PUF panels, PIR panels, roofing panels,
              and cold storage solutions to {data.name}. Factory-direct manufacturing from Gujarat, India
              with container shipping to {data.capital} and major industrial centres.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl space-y-10">
            <article>
              <h2 className="text-2xl font-bold text-slate-900">Climate Suitability</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.climate}</p>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.climateSuitability}</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Ports &amp; Logistics Corridors</h2>
              <p className="mt-3 text-slate-600"><strong>Ports:</strong> {data.ports.join(' · ')}</p>
              <p className="mt-2 text-slate-600"><strong>Corridors:</strong> {data.corridors.join(' · ')}</p>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.shippingNotes}</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Key Industries in {data.name}</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {data.industries.map((ind) => (
                  <li key={ind} className="flex gap-2 text-slate-600">
                    <span className="text-emerald-600" aria-hidden="true">✓</span>
                    {ind}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Applications</h2>
              <ul className="mt-4 space-y-2">
                {data.applications.map((app) => (
                  <li key={app} className="text-slate-600">• {app}</li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">City Export Hubs in {data.name}</h2>
              <p className="mt-2 text-slate-600">Targeted support for major industrial cities and SEZs.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {cities.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/export/${country}/${c.slug}`}
                    className={`text-sm font-medium px-3 py-1.5 rounded-lg border transition-colors ${
                      c.priority === 'tier1'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Industry Export Pages — {data.name}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/export/${country}/${ind.slug}`}
                    className="text-sm font-medium px-3 py-1.5 rounded-lg border border-blue-100 bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors"
                  >
                    {ind.name}
                  </Link>
                ))}
              </div>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Panels &amp; Systems We Export to {data.name}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {exportProducts.map((p) => (
                  <Link key={p.href} href={p.href} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                    {p.label} →
                  </Link>
                ))}
              </div>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Building &amp; Import Considerations</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.buildingConsiderations}</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Export Capability</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.exportCapability}</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Container Loading</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.containerLoading}</p>
            </article>

            <AeoContentBlocks
              voiceSearchHeading={`How to import PUF panels into ${data.name} from India?`}
              definition={`PHOENIXX SMARTBUILD is Africa's trusted engineering partner for ${data.name} — exporting insulated panels with technical documentation, container optimisation, and honest consulting on thickness and profile selection.`}
              specs={DEFAULT_PUF_SPECS}
              pros={[
                'Factory-direct pricing without intermediary markup',
                'Full export documentation package',
                'Mixed container loads supported',
                'Engineering team available for specification review',
              ]}
              cons={[
                'Import duties and local standards vary — verify with local agents',
                'Overland transit from port adds time for inland destinations',
                '[VERIFY] Confirm project-specific compliance claims with export team',
              ]}
              faqs={faqs}
            />

            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900">Request Export Quotation for {data.name}</h2>
              <p className="mt-3 text-slate-600">Share your panel specifications, quantities, and delivery port for a detailed export quote.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/get-a-quote" className="btn-primary">Get Export Quote</Link>
                <Link href="/contact-us" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-white transition-colors">Contact Us</Link>
              </div>
            </div>

            {otherInRegion.length > 0 && (
              <article>
                <h2 className="text-xl font-bold text-slate-900">Other Markets in {EXPORT_REGION_LABELS[data.region]}</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {otherInRegion.map((c) => (
                    <Link key={c.slug} href={`/export/${c.slug}`} className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1.5 rounded-lg border border-blue-100 bg-blue-50">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </article>
            )}
          </div>
        </section>

        <RelatedResources links={getRelatedLinksForExport(country)} title="Related Products & Resources" />
      </main>
      <Footer />
    </div>
  );
}
