import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { getDirectorySections, getTotalLinkCount } from '@/lib/directory-data';

const baseUrl = 'https://phoenixxsmartbuild.com';

export const metadata: Metadata = {
  title: 'Phoenixx Smart Build Product Directory | All Pages Index',
  description:
    'Complete product and solution directory for Phoenixx Smart Build. Browse all industrial doors, PUF panels, cleanroom solutions, fire rated doors, and building materials across 750+ pages.',
  alternates: {
    canonical: `${baseUrl}/door-products-directory`,
  },
  openGraph: {
    title: 'Phoenixx Smart Build Product Directory | All Pages Index',
    description:
      'Browse the complete directory of Phoenixx Smart Build — insulated panels, industrial doors, cleanroom solutions, and city-wise availability across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'PHOENIXX SMARTBUILD',
    url: `${baseUrl}/door-products-directory`,
  },
};

export default function ProductDirectoryPage() {
  const sections = getDirectorySections();
  const totalLinks = getTotalLinkCount();

  let globalPosition = 0;
  const allItems = sections.flatMap((section) =>
    section.links.map((link) => {
      globalPosition++;
      return {
        '@type': 'ListItem' as const,
        position: globalPosition,
        url: `${baseUrl}${link.href}`,
        name: link.label,
      };
    }),
  );

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Phoenixx Smart Build Website Directory',
    description:
      'Complete index of all product pages, location pages, solutions, and resources on Phoenixx Smart Build.',
    numberOfItems: totalLinks,
    itemListElement: allItems,
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Product Directory',
        item: `${baseUrl}/door-products-directory`,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={itemListSchema} />
        <JsonLd data={breadcrumbSchema} />

        {/* Hero */}
        <section className="border-b bg-muted/30 py-12">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span>Product Directory</span>
            </nav>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Complete Product &amp; Solution Directory &ndash; Phoenixx Smart Build
            </h1>
            <p className="mt-4 max-w-3xl text-muted-foreground">
              This page lists every product, solution, and location page available on
              the Phoenixx Smart Build website &mdash; including industrial door solutions,
              fire rated doors, cleanroom doors, multipurpose doors, PUF insulated
              sandwich panels, and building material products. Use this directory to
              quickly find what you need.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section className="border-b bg-slate-50 py-4 dark:bg-slate-900/50">
          <div className="container-custom flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium">
            <span>
              Total Pages: <strong>{totalLinks.toLocaleString()}</strong>
            </span>
            <span>
              Sections: <strong>{sections.length}</strong>
            </span>
          </div>
        </section>

        {/* Directory sections */}
        <section className="section-padding">
          <div className="container-custom space-y-8">
            {sections.map((section) => (
              <details
                key={section.id}
                className="group rounded-lg border bg-white shadow-sm dark:bg-slate-900"
                open={section.links.length <= 20}
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-4 select-none">
                  <div>
                    <h2 className="text-lg font-semibold">{section.heading}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {section.description}
                    </p>
                  </div>
                  <span className="ml-4 flex shrink-0 items-center gap-2 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {section.links.length}
                    </span>
                    <svg
                      className="h-5 w-5 transition-transform group-open:rotate-180"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="border-t px-6 py-4">
                  <ul className="grid gap-x-6 gap-y-1.5 text-sm sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
