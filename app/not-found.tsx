import Link from 'next/link';

const quickLinks = [
  { label: 'Sandwich Panels', href: '/products/sandwich-panels', icon: '🧱' },
  { label: 'Industrial Doors', href: '/products/doors', icon: '🚪' },
  { label: 'Cleanroom Solutions', href: '/products/cleanroom-solutions', icon: '🔬' },
  { label: 'Cold Storage', href: '/solutions/cold-storage-construction', icon: '❄️' },
  { label: 'Pre-Engineered Buildings', href: '/solutions/peb', icon: '🏭' },
  { label: 'All Industries', href: '/industries', icon: '🏢' },
];

export default function NotFound() {
  return (
    <html lang="en">
      <body className="bg-slate-50">
        <section className="flex min-h-screen flex-col items-center justify-center px-4 py-16 text-center">
          <div className="max-w-2xl">
            {/* 404 Illustration */}
            <div className="mb-6">
              <h1 className="text-8xl font-bold text-blue-600/20 md:text-9xl">404</h1>
            </div>

            {/* Error message */}
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Page Not Found
            </h2>
            <p className="mb-8 text-slate-600">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might
              have been moved, deleted, or never existed.
            </p>

            {/* Primary Action buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Go to Homepage
              </Link>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
              >
                Contact Support
              </Link>
            </div>

            {/* Quick Links Section */}
            <div className="border-t border-slate-200 pt-8">
              <h3 className="text-lg font-semibold mb-4 text-slate-500">
                Popular Pages
              </h3>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
                  >
                    <span>{link.icon}</span>
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Search Alternative */}
            <div className="mt-8 text-sm text-slate-500">
              <p>
                Looking for something specific?{' '}
                <Link href="/sitemap-page" className="text-blue-600 hover:underline font-medium">
                  Browse our sitemap
                </Link>{' '}
                or{' '}
                <Link href="/resources/faq" className="text-blue-600 hover:underline font-medium">
                  check our FAQ
                </Link>
              </p>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
