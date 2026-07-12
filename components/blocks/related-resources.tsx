import Link from 'next/link';
import type { RelatedLink } from '@/lib/internal-links';

interface RelatedResourcesProps {
  links: RelatedLink[];
  title?: string;
}

const categoryLabels: Record<RelatedLink['category'], string> = {
  product: 'Products',
  industry: 'Industries',
  city: 'Locations',
  blog: 'Insights',
  project: 'Projects',
  solution: 'Solutions',
  resource: 'Resources',
};

export function RelatedResources({ links, title = 'Related Resources' }: RelatedResourcesProps) {
  if (!links.length) return null;

  const grouped = links.reduce<Record<string, RelatedLink[]>>((acc, link) => {
    const key = link.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(link);
    return acc;
  }, {});

  return (
    <section className="section-padding bg-slate-50 border-t border-slate-200" aria-labelledby="related-resources-heading">
      <div className="container-custom">
        <h2 id="related-resources-heading" className="text-2xl font-bold text-slate-900 md:text-3xl">
          {title}
        </h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Explore related products, locations, case studies, and technical guides from PHOENIXX SMARTBUILD.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(grouped).map(([category, categoryLinks]) => (
            <div key={category} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                {categoryLabels[category as RelatedLink['category']] || category}
              </h3>
              <ul className="mt-3 space-y-2">
                {categoryLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-700 hover:text-blue-600 transition-colors line-clamp-2"
                    >
                      {link.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
