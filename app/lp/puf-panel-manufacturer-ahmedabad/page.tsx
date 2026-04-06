import type { Metadata } from 'next';
import LandingPageClient from './landing-page-client';

export const metadata: Metadata = {
  title: 'PUF Panel Manufacturer in Ahmedabad | Ready Stock + Factory Price',
  description:
    'Buy premium roofing & sandwich PUF panels in Ahmedabad. Ready stock available, factory direct pricing, fast delivery across Gujarat. Get instant quote now.',
  keywords: [
    'PUF panel manufacturer Ahmedabad',
    'PUF panel price Ahmedabad',
    'sandwich PUF panel Ahmedabad',
    'roofing PUF panel Gujarat',
    'PUF panel supplier Ahmedabad',
    'cold storage panel Ahmedabad',
  ],
  openGraph: {
    title: 'PUF Panel Manufacturer in Ahmedabad | Ready Stock + Factory Price',
    description:
      'Buy premium roofing & sandwich PUF panels in Ahmedabad. Ready stock, factory direct pricing, fast delivery across Gujarat.',
    url: 'https://phoenixxsmartbuild.com/lp/puf-panel-manufacturer-ahmedabad',
    siteName: 'PHOENIXX SMARTBUILD',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://phoenixxsmartbuild.com/images/products/sandwich-panels/puf-panel/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
        width: 1200,
        height: 630,
        alt: 'PUF Panel Manufacturer in Ahmedabad - PHOENIXX SMARTBUILD',
      },
    ],
  },
};

export default function PufPanelAhmedabadLP() {
  return <LandingPageClient />;
}
