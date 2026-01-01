'use client';

import Link from 'next/link';
import { trackEvent } from './analytics';

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  trackingLabel: string;
  trackingLocation?: string;
  className?: string;
  target?: string;
  rel?: string;
}

/**
 * Tracked Link Component
 * Automatically tracks clicks with GA4
 */
export function TrackedLink({
  href,
  children,
  trackingLabel,
  trackingLocation = 'page',
  className,
  target,
  rel,
}: TrackedLinkProps) {
  const handleClick = () => {
    trackEvent.ctaClick(trackingLabel, href, trackingLocation);
  };

  // External links
  if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={className}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  // Internal links
  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}

/**
 * Tracked Phone Link
 */
export function TrackedPhoneLink({
  phone,
  children,
  className,
  location = 'page',
}: {
  phone: string;
  children: React.ReactNode;
  className?: string;
  location?: string;
}) {
  const handleClick = () => {
    trackEvent.phoneClick(phone, location);
  };

  return (
    <a
      href={`tel:${phone.replace(/\s/g, '')}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

/**
 * Tracked Email Link
 */
export function TrackedEmailLink({
  email,
  children,
  className,
}: {
  email: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    trackEvent.emailClick(email);
  };

  return (
    <a
      href={`mailto:${email}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}

/**
 * Tracked Social Link
 */
export function TrackedSocialLink({
  platform,
  href,
  children,
  className,
}: {
  platform: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    trackEvent.socialClick(platform);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

/**
 * Tracked Download Link
 */
export function TrackedDownloadLink({
  href,
  fileName,
  fileType,
  children,
  className,
}: {
  href: string;
  fileName: string;
  fileType: 'brochure' | 'technical_sheet' | 'catalog' | 'other';
  children: React.ReactNode;
  className?: string;
}) {
  const handleClick = () => {
    if (fileType === 'brochure') {
      trackEvent.brochureDownload(fileName);
    } else if (fileType === 'technical_sheet') {
      trackEvent.techSheetDownload(fileName);
    } else if (fileType === 'catalog') {
      trackEvent.catalogDownload();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      download
    >
      {children}
    </a>
  );
}

/**
 * Tracked WhatsApp Link
 */
export function TrackedWhatsAppLink({
  phone,
  message,
  children,
  className,
  location = 'page',
}: {
  phone: string;
  message?: string;
  children: React.ReactNode;
  className?: string;
  location?: string;
}) {
  const handleClick = () => {
    trackEvent.whatsappClick(location);
  };

  const url = message
    ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${phone}`;

  return (
    <a
      href={url}
      onClick={handleClick}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}



