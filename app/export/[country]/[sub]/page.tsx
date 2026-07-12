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
  getExportCity,
  getExportIndustry,
  getAllExportSubParams,
  resolveExportSub,
  generateExportCityIntro,
  generateExportCityFAQs,
  generateExportIndustryIntro,
  generateExportIndustryFAQs,
} from '@/lib/export-data';

interface ExportSubPageProps {
  params: Promise<{ country: string; sub: string }>;
}

export async function generateStaticParams() {
  return getAllExportSubParams();
}

export async function generateMetadata({ params }: ExportSubPageProps): Promise<Metadata> {
  const { country, sub } = await params;
  const resolved = resolveExportSub(country, sub);
  if (!resolved) return { title: 'Export Page Not Found' };

  if (resolved.type === 'city') {
    const city = getExportCity(country, sub);
    if (!city) return { title: 'City Not Found' };
    return {
      title: city.metaTitle,
      description: city.metaDescription,
      alternates: { canonical: `https://phoenixxsmartbuild.com/export/${country}/${sub}` },
    };
  }

  const industry = getExportIndustry(sub);
  const countryData = getExportCountry(country);
  if (!industry || !countryData) return { title: 'Industry Not Found' };
  return {
    title: `${industry.name} Panel Export to ${countryData.name} | PHOENIXX SMARTBUILD`,
    description: `${industry.metaDescription} Focused on ${countryData.name} export projects.`,
    alternates: { canonical: `https://phoenixxsmartbuild.com/export/${country}/${sub}` },
  };
}

export default async function ExportSubPage({ params }: ExportSubPageProps) {
  const { country, sub } = await params;
  const countryData = getExportCountry(country);
  const resolved = resolveExportSub(country, sub);
  if (!countryData || !resolved) notFound();

  if (resolved.type === 'city') {
    const city = getExportCity(country, sub);
    if (!city) notFound();

    const intro = generateExportCityIntro(city, countryData);
    const faqs = generateExportCityFAQs(city, countryData);
    const pageUrl = `/export/${country}/${sub}`;

    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Global Export', url: '/export' },
      { name: countryData.name, url: `/export/${country}` },
      { name: city.name, url: pageUrl },
    ]);
    const serviceSchema = generateServiceSchema(
      `PUF Panel Export to ${city.name}, ${countryData.name}`,
      city.metaDescription,
      pageUrl,
      { type: 'City', name: `${city.name}, ${countryData.name}` }
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
                <Link href="/export" className="hover:text-white">Export</Link>
                <span className="mx-2">/</span>
                <Link href={`/export/${country}`} className="hover:text-white">{countryData.name}</Link>
                <span className="mx-2">/</span>
                <span>{city.name}</span>
              </nav>
              <p className="text-sm font-medium text-emerald-300 uppercase tracking-wider">City Export Hub</p>
              <h1 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">
                PUF Panel Export to {city.name}, {countryData.name}
              </h1>
              <p className="mt-4 text-lg text-emerald-100 max-w-3xl leading-relaxed">{intro}</p>
            </div>
          </section>

          <section className="section-padding">
            <div className="container-custom max-w-4xl space-y-10">
              {city.industrialZones.length > 0 && (
                <article>
                  <h2 className="text-2xl font-bold text-slate-900">Industrial Zones &amp; Clusters in {city.name}</h2>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {city.industrialZones.map((zone) => (
                      <li key={zone} className="flex gap-2 text-slate-600">
                        <span className="text-emerald-600" aria-hidden="true">✓</span>
                        {zone}
                      </li>
                    ))}
                  </ul>
                </article>
              )}

              <article>
                <h2 className="text-2xl font-bold text-slate-900">Key Industries &amp; Applications</h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {city.keyIndustries.join(' · ')}
                </p>
                <ul className="mt-4 space-y-2">
                  {city.applications.map((app) => (
                    <li key={app} className="text-slate-600">• {app}</li>
                  ))}
                </ul>
              </article>

              {city.port && (
                <article>
                  <h2 className="text-2xl font-bold text-slate-900">Port &amp; Logistics</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    Primary port: <strong>{city.port}</strong>. {countryData.shippingNotes}
                  </p>
                </article>
              )}

              <AeoContentBlocks
                voiceSearchHeading={`Which PUF panel thickness is best for industrial buildings in ${city.name}?`}
                definition={`PHOENIXX SMARTBUILD is Africa's trusted engineering partner for insulated building systems in ${city.name}. ${city.localPainPoint}`}
                specs={DEFAULT_PUF_SPECS}
                pros={[
                  `Factory-direct export from India to ${city.name}`,
                  'ISO 9001 manufacturing with export documentation',
                  'Mixed container loads — panels, doors, accessories',
                  'Engineering support for thickness and profile selection',
                ]}
                cons={[
                  'Import duties and local standards vary — verify with local agents',
                  'Overland transit from port may add lead time for inland cities',
                  'Long-length roofing may require custom container configuration',
                ]}
                faqs={faqs}
              />

              <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-8 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Request Export Quote for {city.name}</h2>
                <p className="mt-3 text-slate-600">Share specifications, quantities, and delivery port for a detailed export quotation.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-4">
                  <Link href="/get-a-quote" className="btn-primary">Get Export Quote</Link>
                  <Link href="/contact-us" className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-white transition-colors">Contact Export Team</Link>
                </div>
              </div>
            </div>
          </section>

          <RelatedResources links={getRelatedLinksForExport(country, sub, 'city')} title="Related Export Resources" />
        </main>
        <Footer />
      </div>
    );
  }

  // Industry page
  const industry = getExportIndustry(sub);
  if (!industry) notFound();

  const intro = generateExportIndustryIntro(industry, countryData);
  const faqs = generateExportIndustryFAQs(industry, countryData);
  const pageUrl = `/export/${country}/${sub}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Global Export', url: '/export' },
    { name: countryData.name, url: `/export/${country}` },
    { name: industry.name, url: pageUrl },
  ]);
  const serviceSchema = generateServiceSchema(
    `${industry.name} Export to ${countryData.name}`,
    intro,
    pageUrl,
    { type: 'Country', name: countryData.name }
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
              <Link href="/export" className="hover:text-white">Export</Link>
              <span className="mx-2">/</span>
              <Link href={`/export/${country}`} className="hover:text-white">{countryData.name}</Link>
              <span className="mx-2">/</span>
              <span>{industry.name}</span>
            </nav>
            <p className="text-sm font-medium text-emerald-300 uppercase tracking-wider">Industry Export</p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl lg:text-5xl">
              {industry.name} — Panel Export to {countryData.name}
            </h1>
            <p className="mt-4 text-lg text-emerald-100 max-w-3xl leading-relaxed">{intro}</p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl space-y-10">
            <article>
              <h2 className="text-2xl font-bold text-slate-900">Panel Fit for {industry.name}</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{industry.panelFit}</p>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Applications in {countryData.name}</h2>
              <ul className="mt-4 space-y-2">
                {industry.applications.map((app) => (
                  <li key={app} className="text-slate-600">• {app}</li>
                ))}
              </ul>
            </article>

            <article>
              <h2 className="text-2xl font-bold text-slate-900">Who Buys These Panels?</h2>
              <p className="mt-3 text-slate-600 leading-relaxed">{industry.buyerRoles.join(' · ')}</p>
            </article>

            <AeoContentBlocks
              voiceSearchHeading={`Why choose PHOENIXX for ${industry.name.toLowerCase()} in ${countryData.name}?`}
              definition={industry.definition}
              specs={DEFAULT_PUF_SPECS}
              pros={[
                'Export documentation and fire test certificates included',
                'Mixed product portfolio — PUF, PIR, Rockwool',
                'Engineering consultation before specification',
                `Shipping support via ${countryData.ports[0] ?? 'regional ports'}`,
              ]}
              cons={[
                'Local building codes must be verified per project',
                'Fire-rated specifications may extend manufacturing lead time',
                '[VERIFY] Confirm country-specific compliance with export team',
              ]}
              faqs={faqs}
            />

            <div className="rounded-xl bg-emerald-50 border border-emerald-100 p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900">Export Consultation — {industry.name}</h2>
              <p className="mt-3 text-slate-600">Tell us about your {industry.name.toLowerCase()} project in {countryData.name}.</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/get-a-quote" className="btn-primary">Get Export Quote</Link>
                <Link href={`/export/${country}`} className="inline-flex items-center px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-white transition-colors">All {countryData.name} Export Info</Link>
              </div>
            </div>
          </div>
        </section>

        <RelatedResources links={getRelatedLinksForExport(country, sub, 'industry')} title="Related Export Resources" />
      </main>
      <Footer />
    </div>
  );
}
