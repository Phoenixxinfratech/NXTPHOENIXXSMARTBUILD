import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { RelatedResources } from '@/components/blocks/related-resources';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { getExportCountry, getAllExportCountrySlugs } from '@/lib/export-data';

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

const exportRelatedLinks = [
  { href: '/products/sandwich-panels/sandwich-puf-panel', label: 'Sandwich PUF Panel', category: 'product' as const },
  { href: '/products/sandwich-panels/pir-panel', label: 'PIR Panel', category: 'product' as const },
  { href: '/solutions/cold-storage-construction', label: 'Cold Storage Construction', category: 'solution' as const },
  { href: '/solutions/peb', label: 'PEB Buildings', category: 'solution' as const },
  { href: '/certifications', label: 'Certifications & Standards', category: 'resource' as const },
  { href: '/get-a-quote', label: 'Request Export Quote', category: 'resource' as const },
  { href: '/contact-us', label: 'Contact Export Team', category: 'resource' as const },
  { href: '/resources/blogs/export-puf-panels-africa-guide', label: 'Export Guide Blog', category: 'blog' as const },
];

export default async function ExportCountryPage({ params }: ExportPageProps) {
  const { country } = await params;
  const data = getExportCountry(country);
  if (!data) notFound();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: `PUF Panel Export to ${data.name}`, url: `/export/${country}` },
  ]);

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `PUF Panel Export to ${data.name}`,
    description: data.metaDescription,
    provider: { '@type': 'Organization', name: 'PHOENIXX SMARTBUILD', url: 'https://phoenixxsmartbuild.com' },
    areaServed: { '@type': 'Country', name: data.name },
  };

  const otherCountries = getAllExportCountrySlugs().filter((s) => s !== country);

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white section-padding">
          <div className="container-custom">
            <p className="text-sm font-medium text-emerald-300 uppercase tracking-wider">Global Export</p>
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
              <h2 className="text-2xl font-bold text-slate-900">Building &amp; Import Considerations</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.buildingConsiderations}</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Export Capability</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.exportCapability}</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Shipping &amp; Logistics</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.shippingNotes}</p>
              <p className="mt-3 text-slate-600 leading-relaxed">{data.containerLoading}</p>
            </article>

            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900">Request Export Quotation for {data.name}</h2>
              <p className="mt-3 text-slate-600">Share your panel specifications, quantities, and delivery port for a detailed export quote.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/get-a-quote" className="btn-primary">Get Export Quote</Link>
                <Link href="/contact-us" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-white transition-colors">Contact Us</Link>
              </div>
            </div>

            <article>
              <h2 className="text-xl font-bold text-slate-900">Other Export Markets</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {otherCountries.map((slug) => {
                  const c = getExportCountry(slug);
                  return c ? (
                    <Link key={slug} href={`/export/${slug}`} className="text-sm text-blue-600 hover:text-blue-800 font-medium px-3 py-1.5 rounded-lg border border-blue-100 bg-blue-50">
                      {c.name}
                    </Link>
                  ) : null;
                })}
              </div>
            </article>
          </div>
        </section>

        <RelatedResources links={exportRelatedLinks} title="Related Products & Resources" />
      </main>
      <Footer />
    </div>
  );
}
