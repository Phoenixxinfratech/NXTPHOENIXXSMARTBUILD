import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { productsData, solutionsData, industriesData } from '@/lib/navigation';

export const metadata: Metadata = {
  title: 'Sitemap',
  description:
    'Complete sitemap of PHOENIXX website. Navigate to all pages including products, solutions, industries, and resources.',
  alternates: {
    canonical: '/sitemap',
  },
};

export default function SitemapPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Sitemap', item: '/sitemap' },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />

        <section className="border-b bg-muted/30 py-12">
          <div className="container-custom">
            <nav className="mb-4 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span>Sitemap</span>
            </nav>
            <h1>Sitemap</h1>
            <p className="mt-2 text-muted-foreground">
              Complete navigation map of our website
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Main Pages */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Main Pages</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
                  <li><Link href="/about-us" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                  <li><Link href="/clientele" className="text-muted-foreground hover:text-primary">Clientele</Link></li>
                  <li><Link href="/contact-us" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
                  <li><Link href="/get-a-quote" className="text-muted-foreground hover:text-primary">Get a Quote</Link></li>
                  <li><Link href="/career" className="text-muted-foreground hover:text-primary">Career</Link></li>
                  <li><Link href="/become-partner" className="text-muted-foreground hover:text-primary">Become Partner</Link></li>
                  <li><Link href="/vendor-registration" className="text-muted-foreground hover:text-primary">Vendor Registration</Link></li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Products</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/products" className="text-muted-foreground hover:text-primary">All Products</Link></li>
                  {Object.entries(productsData).map(([slug, category]) => (
                    <li key={slug}>
                      <Link href={`/products/${slug}`} className="text-muted-foreground hover:text-primary">
                        {category.title}
                      </Link>
                      <ul className="ml-4 mt-1 space-y-1">
                        {category.products.map((product) => (
                          <li key={product.slug}>
                            <Link
                              href={`/products/${slug}/${product.slug}`}
                              className="text-xs text-muted-foreground hover:text-primary"
                            >
                              {product.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Solutions</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/solutions" className="text-muted-foreground hover:text-primary">All Solutions</Link></li>
                  {solutionsData.map((solution) => (
                    <li key={solution.slug}>
                      <Link href={`/solutions/${solution.slug}`} className="text-muted-foreground hover:text-primary">
                        {solution.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Industries</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/industries" className="text-muted-foreground hover:text-primary">All Industries</Link></li>
                  {industriesData.map((industry) => (
                    <li key={industry.slug}>
                      <Link href={`/industries/${industry.slug}`} className="text-muted-foreground hover:text-primary">
                        {industry.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Resources</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/resources" className="text-muted-foreground hover:text-primary">All Resources</Link></li>
                  <li><Link href="/resources/blogs" className="text-muted-foreground hover:text-primary">Blogs</Link></li>
                  <li><Link href="/resources/project-gallery" className="text-muted-foreground hover:text-primary">Project Gallery</Link></li>
                  <li><Link href="/resources/technical-sheet" className="text-muted-foreground hover:text-primary">Technical Sheets</Link></li>
                  <li><Link href="/resources/brochure" className="text-muted-foreground hover:text-primary">Brochures</Link></li>
                  <li><Link href="/resources/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h2 className="text-lg font-semibold mb-4">Legal</h2>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                  <li><Link href="/return-policy" className="text-muted-foreground hover:text-primary">Return Policy</Link></li>
                  <li><Link href="/business-terms" className="text-muted-foreground hover:text-primary">Business Terms</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

