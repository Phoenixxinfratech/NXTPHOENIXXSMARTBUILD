import Link from 'next/link';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

export interface Crumb {
  label: string;
  /** Omit on the current page, which renders as plain text rather than a link. */
  href?: string;
}

interface BreadcrumbsProps {
  /** The trail after Home. */
  items: Crumb[];
  /** 'dark' sits on the hero gradients, 'light' on a white background. */
  tone?: 'dark' | 'light';
  className?: string;
  /**
   * Emit the matching BreadcrumbList. Leave off where the page already builds
   * its own, so a page never ships two competing trails.
   */
  withSchema?: boolean;
}

const TONES = {
  dark: {
    list: 'text-slate-300',
    link: 'hover:text-white transition-colors',
    current: 'text-white',
  },
  light: {
    list: 'text-slate-600',
    link: 'hover:text-blue-700 transition-colors',
    current: 'text-slate-900',
  },
} as const;

/**
 * A breadcrumb trail that screen readers can actually use: a labelled nav
 * wrapping an ordered list, with the separators hidden from the accessibility
 * tree and the current page marked. Pages previously hand-rolled this as a
 * bare <nav> of links and slashes, which announced as an unlabelled landmark.
 */
export function Breadcrumbs({
  items,
  tone = 'dark',
  className = 'mb-6',
  withSchema = false,
}: BreadcrumbsProps) {
  const styles = TONES[tone];
  const trail: Crumb[] = [{ label: 'Home', href: '/' }, ...items];

  // Google drops the URL on the final entry, which is the page being viewed.
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      ...(crumb.href ? { item: `${siteConfig.url}${crumb.href === '/' ? '' : crumb.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className={className}>
      {withSchema && <JsonLd data={schema} />}
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${styles.list}`}>
        {trail.map((crumb, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
              {crumb.href ? (
                <Link href={crumb.href} className={styles.link}>
                  {crumb.label}
                </Link>
              ) : (
                <span className={styles.current} aria-current="page">
                  {crumb.label}
                </span>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
