import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/lib/site-config';

// Lazy load non-critical components to improve initial load time
const AnalyticsProvider = dynamic(
  () => import('@/components/tracking/analytics').then(mod => ({ default: mod.AnalyticsProvider })),
  { ssr: false }
);

const WhatsAppButton = dynamic(
  () => import('@/components/ui/whatsapp-button').then(mod => ({ default: mod.WhatsAppButton })),
  { ssr: false }
);

const CookieConsent = dynamic(
  () => import('@/components/ui/cookie-consent').then(mod => ({ default: mod.CookieConsent })),
  { ssr: false }
);

const ImageProtection = dynamic(
  () => import('@/components/ui/image-protection').then(mod => ({ default: mod.ImageProtection })),
  { ssr: false }
);

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Industrial Infrastructure Solutions`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: siteConfig.twitterHandle,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    // Add your verification codes here
    // google: 'YOUR_GOOGLE_VERIFICATION_CODE',
    // other: { 'msvalidate.01': 'YOUR_BING_VERIFICATION_CODE' },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Preload critical assets */}
        <link 
          rel="preload" 
          href="/images/brand/logos/logo.png" 
          as="image"
          type="image/png"
        />
        
        {/* Geo and business verification meta tags */}
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.0225;72.5714" />
        <meta name="ICBM" content="23.0225, 72.5714" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        {/* Analytics & Tracking */}
        <AnalyticsProvider />
        
        {/* Image Protection */}
        <ImageProtection />
        
        {/* Main Content */}
        {children}
        
        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
        
        {/* Cookie Consent Banner */}
        <CookieConsent />
      </body>
    </html>
  );
}
