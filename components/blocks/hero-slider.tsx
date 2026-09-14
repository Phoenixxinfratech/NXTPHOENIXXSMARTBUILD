'use client';

import { useEffect, useState } from 'react';
import { heroImages, type HeroCollection, type HeroSlide } from '@/lib/hero-images.generated';

/** One place to change timing for every hero on the site. */
const SLIDE_DURATION_MS = 6000;
const CROSSFADE_MS = 1600;
/** Grace period before the second slide starts loading, so the first owns LCP. */
const FIRST_WARM_DELAY_MS = 2500;

interface HeroSliderProps {
  collection: HeroCollection;
  /**
   * Scrim over the photography. The default is tuned for white headline copy
   * sitting on the left of a dark hero.
   */
  overlayClassName?: string;
  className?: string;
}

function srcSet(slide: HeroSlide, format: 'avif' | 'webp') {
  return slide.sources
    .map((s) => (s[format] ? `${s[format]} ${s.width}w` : null))
    .filter(Boolean)
    .join(', ');
}

function widestSrc(slide: HeroSlide) {
  const widest = slide.sources[slide.sources.length - 1];
  return widest.webp ?? widest.avif ?? '';
}

/**
 * Full-bleed crossfading background for a hero section.
 *
 * Sits at the bottom of the stacking order inside an existing `relative`
 * section, so it adds no layout of its own and cannot shift the page.
 *
 * next/image is deliberately not used: images.unoptimized is on in
 * next.config.mjs, so it would emit no srcset and ship a desktop-sized file to
 * phones. The <picture> below carries AVIF and WebP at three widths.
 *
 * Decorative by design. The container is hidden from assistive technology
 * because the hero heading already carries the message.
 */
export function HeroSlider({
  collection,
  overlayClassName = 'bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/60',
  className = '',
}: HeroSliderProps) {
  const slides: HeroSlide[] = heroImages[collection] ?? [];
  const [active, setActive] = useState(0);
  const [animate, setAnimate] = useState(false);
  /**
   * Every slide occupies the viewport, so loading="lazy" would not defer any of
   * them. Withholding the <img> entirely is what actually staggers the loading.
   */
  const [loaded, setLoaded] = useState<Set<number>>(() => new Set([0]));

  useEffect(() => {
    if (slides.length < 2) return;
    // Hold on the first slide: no cycling, no pan.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setAnimate(true);
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  // Pull the next slide in ahead of its turn so a fade never reveals a gap.
  useEffect(() => {
    if (!animate || slides.length < 2) return;
    const next = (active + 1) % slides.length;
    const id = window.setTimeout(
      () => setLoaded((prev) => (prev.has(next) ? prev : new Set(prev).add(next))),
      active === 0 ? FIRST_WARM_DELAY_MS : 0
    );
    return () => window.clearTimeout(id);
  }, [active, animate, slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0 transition-opacity ease-in-out motion-reduce:transition-none"
          style={{ opacity: index === active ? 1 : 0, transitionDuration: `${CROSSFADE_MS}ms` }}
        >
          {loaded.has(index) && (
            <picture>
              <source type="image/avif" srcSet={srcSet(slide, 'avif')} sizes="100vw" />
              <source type="image/webp" srcSet={srcSet(slide, 'webp')} sizes="100vw" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={widestSrc(slide)}
                alt=""
                decoding={index === 0 ? 'sync' : 'async'}
                fetchPriority={index === 0 ? 'high' : 'low'}
                className={`h-full w-full object-cover ${animate ? 'animate-hero-pan' : ''}`}
                style={{ objectPosition: slide.focal }}
              />
            </picture>
          )}
        </div>
      ))}

      <div className={`absolute inset-0 ${overlayClassName}`} />
    </div>
  );
}
