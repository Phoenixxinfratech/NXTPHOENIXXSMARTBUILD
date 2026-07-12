import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { generateBreadcrumbSchema } from '@/lib/schema';
import { glossaryTerms } from '@/lib/glossary-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industrial Construction Glossary | PUF Panels, Cleanroom & PEB Terms',
  description: 'Comprehensive glossary of industrial construction terms: PUF panels, PIR panels, sandwich panels, cleanrooms, cold rooms, PEB, GIDC, SEZ, and HVAC explained by PHOENIXX engineers.',
  alternates: { canonical: 'https://phoenixxsmartbuild.com/resources/glossary' },
};

export default function GlossaryPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Glossary', url: '/resources/glossary' },
  ]);

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'PHOENIXX Industrial Construction Glossary',
    itemListElement: glossaryTerms.map((term, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: term.term,
      url: `https://phoenixxsmartbuild.com/resources/glossary#${term.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={itemListSchema} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 to-blue-900 text-white section-padding">
          <div className="container-custom">
            <h1 className="text-3xl font-bold md:text-4xl">Industrial Construction Glossary</h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl">
              Definitions and technical explanations for key terms in insulated panel construction,
              cleanroom engineering, and industrial building — written by PHOENIXX application engineers.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <dl className="space-y-8">
              {glossaryTerms.map((term) => (
                <div key={term.slug} id={term.slug} className="scroll-mt-24 rounded-xl border border-slate-200 bg-white p-6">
                  <dt className="text-xl font-bold text-slate-900">{term.term}</dt>
                  <dd className="mt-3 text-slate-600 leading-relaxed">{term.definition}</dd>
                  {term.relatedLinks.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {term.relatedLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                          {link.label} →
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </dl>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
