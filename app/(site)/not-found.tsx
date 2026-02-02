import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="max-w-2xl">
        {/* 404 Illustration */}
        <div className="mb-6">
          <h1 className="text-8xl font-bold text-primary/20 md:text-9xl">404</h1>
        </div>

        {/* Error message */}
        <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
          Page Not Found
        </h2>
        <p className="mb-8 text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. The page might
          have been moved, deleted, or never existed.
        </p>

        {/* Primary Action buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
          <Button asChild size="lg">
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button asChild size="lg" variant="default" className="bg-green-600 hover:bg-green-700">
            <Link href="/get-a-quote">Get a Quote</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/contact-us">Contact Support</Link>
          </Button>
        </div>

        {/* Quick Links Section */}
        <div className="border-t pt-8">
          <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Search Alternative */}
        <div className="mt-8 text-sm text-muted-foreground">
          <p>
            Looking for something specific?{' '}
            <Link href="/sitemap-page" className="text-primary hover:underline font-medium">
              Browse our sitemap
            </Link>{' '}
            or{' '}
            <Link href="/resources/faq" className="text-primary hover:underline font-medium">
              check our FAQ
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
