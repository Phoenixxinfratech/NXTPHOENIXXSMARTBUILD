import Link from 'next/link';

const quickLinks = [
  { label: 'Sandwich Panels', href: '/products/sandwich-panels', icon: '🧱' },
  { label: 'Industrial Doors', href: '/products/doors', icon: '🚪' },
  { label: 'Cleanroom Solutions', href: '/products/cleanroom-solutions', icon: '🔬' },
  { label: 'Cold Storage', href: '/solutions/cold-storage-construction', icon: '❄️' },
  { label: 'Pre-Engineered Buildings', href: '/solutions/peb', icon: '🏭' },
  { label: 'All Industries', href: '/industries', icon: '🏢' },
];

/**
 * Shared by the root and (site) not-found boundaries so a 404 looks the same
 * whichever one catches it.
 */
export function NotFoundContent() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-2xl">
        <p className="mb-6 text-8xl font-bold text-blue-600/20 md:text-9xl">404</p>

        <h1 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
          Page Not Found
        </h1>
        <p className="mb-8 text-slate-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been
          moved, deleted, or never existed.
        </p>

        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
          >
            Go to Homepage
          </Link>
          <Link
            href="/get-a-quote"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            Get a Quote
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
          >
            Contact Support
          </Link>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <h2 className="mb-4 text-lg font-semibold text-slate-500">Popular Pages</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
              >
                <span aria-hidden="true">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Looking for something specific?{' '}
          <Link href="/sitemap-page" className="font-medium text-blue-600 hover:underline">
            Browse our sitemap
          </Link>{' '}
          or{' '}
          <Link href="/resources/faq" className="font-medium text-blue-600 hover:underline">
            check our FAQ
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
