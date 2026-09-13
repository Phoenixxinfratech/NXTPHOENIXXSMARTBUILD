'use client';

import { useEffect, type RefObject } from 'react';

/**
 * Publishes the measured height of a fixed bottom-anchored element as a CSS
 * variable on :root, so the other bottom-anchored elements can stack above it
 * instead of covering it. Without this the sticky CTA bar, the cookie banner
 * and the WhatsApp float all occupy the same corner on mobile.
 */
export function useBottomBarOffset(
  ref: RefObject<HTMLElement>,
  variable: '--sticky-cta-height' | '--cookie-banner-height',
  active = true
) {
  useEffect(() => {
    const element = active ? ref.current : null;
    const root = document.documentElement;
    if (!element) {
      root.style.setProperty(variable, '0px');
      return;
    }

    const publish = () => root.style.setProperty(variable, `${element.offsetHeight}px`);
    publish();

    const observer = new ResizeObserver(publish);
    observer.observe(element);

    return () => {
      observer.disconnect();
      root.style.setProperty(variable, '0px');
    };
  }, [ref, variable, active]);
}
