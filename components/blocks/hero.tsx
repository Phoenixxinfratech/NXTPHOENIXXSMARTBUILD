import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function Hero({
  title,
  subtitle,
  ctaText,
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  className,
  align = 'center',
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

      {/* Background Image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}

      {/* Content */}
      <div className="container-custom relative py-24 md:py-32 lg:py-40">
        <div
          className={cn(
            'max-w-3xl',
            align === 'center' ? 'mx-auto text-center' : 'text-left'
          )}
        >
          {/* Title */}
          <h1 className="text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-6 text-lg text-slate-300 md:text-xl">
              {subtitle}
            </p>
          )}

          {/* CTA Buttons */}
          {(ctaText || secondaryCtaText) && (
            <div
              className={cn(
                'mt-10 flex flex-col gap-4 sm:flex-row',
                align === 'center' ? 'justify-center' : 'justify-start'
              )}
            >
              {ctaText && (
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                >
                  <Link href={ctaLink}>{ctaText}</Link>
                </Button>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
    </section>
  );
}

// Page-level hero variant for inner pages
export function PageHero({
  title,
  description,
  breadcrumbs,
}: {
  title: string;
  description?: string;
  breadcrumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="border-b bg-muted/30 py-12 md:py-16">
      <div className="container-custom">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-4 text-sm text-muted-foreground">
            {breadcrumbs.map((crumb, index) => (
              <span key={crumb.href}>
                {index > 0 && <span className="mx-2">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href} className="hover:text-primary">
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1 className="text-balance">{title}</h1>

        {/* Description */}
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}




