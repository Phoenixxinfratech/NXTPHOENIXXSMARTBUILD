import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Placeholder featured products - will be replaced with Sanity CMS data
const featuredProducts = [
  {
    id: '1',
    title: 'Modular Cleanroom System',
    description: 'Flexible, scalable cleanroom solutions for rapid deployment.',
    category: 'Cleanrooms',
    slug: 'modular-cleanroom-system',
  },
  {
    id: '2',
    title: 'HEPA Air Handling Unit',
    description: 'High-efficiency particulate air filtration for controlled environments.',
    category: 'HVAC',
    slug: 'hepa-air-handling-unit',
  },
  {
    id: '3',
    title: 'Pass-Through Chamber',
    description: 'Material transfer solutions maintaining cleanroom integrity.',
    category: 'Equipment',
    slug: 'pass-through-chamber',
  },
];

export function FeaturedProducts() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover our most popular solutions for controlled environments
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <article
              key={product.id}
              className="group card-base overflow-hidden transition-all hover:shadow-lg"
            >
              {/* Product Image Placeholder */}
              <div className="relative aspect-video bg-muted">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                  {product.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  <Link href={`/products/${product.slug}`}>
                    {product.title}
                  </Link>
                </h3>
                <p className="mt-2 text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

