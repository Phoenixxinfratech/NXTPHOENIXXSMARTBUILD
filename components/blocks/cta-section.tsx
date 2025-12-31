import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
}

export function CTASection({
  title,
  description,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  variant = 'default',
  className,
}: CTASectionProps) {
  const variants = {
    default: 'bg-muted/50',
    dark: 'bg-slate-900 text-white',
    gradient: 'bg-gradient-to-r from-primary to-blue-600 text-white',
  };

  return (
    <section className={cn('py-16 md:py-24', variants[variant], className)}>
      <div className="container-custom text-center">
        <h2
          className={cn(
            'text-3xl font-bold md:text-4xl',
            variant === 'default' ? 'text-foreground' : 'text-white'
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              'mt-4 max-w-2xl mx-auto text-lg',
              variant === 'default' ? 'text-muted-foreground' : 'text-white/80'
            )}
          >
            {description}
          </p>
        )}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            variant={variant === 'default' ? 'default' : 'secondary'}
          >
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>

          {secondaryCtaText && secondaryCtaLink && (
            <Button
              asChild
              size="lg"
              variant={variant === 'default' ? 'outline' : 'ghost'}
              className={cn(
                variant !== 'default' && 'border-white/30 text-white hover:bg-white/20'
              )}
            >
              <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}

// Compact CTA for use within content
export function CTAInline({
  text,
  link,
  buttonText,
}: {
  text: string;
  link: string;
  buttonText: string;
}) {
  return (
    <div className="rounded-lg border bg-muted/50 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="font-medium">{text}</p>
      <Button asChild>
        <Link href={link}>{buttonText}</Link>
      </Button>
    </div>
  );
}


