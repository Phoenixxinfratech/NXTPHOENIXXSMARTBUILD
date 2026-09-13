import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { buildSocialMetadata } from '@/lib/seo';

const title = 'Get a Quote – PUF Panels, Cleanrooms & Cold Storage';
const description =
  'Tell us your panel thickness, area, and timeline and get a factory-direct quote from PHOENIXX SMARTBUILD. Ahmedabad manufacturing, pan-India delivery.';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'PUF panel quote',
    'sandwich panel price',
    'cold storage quotation',
    'cleanroom quote India',
  ],
  alternates: { canonical: `${siteConfig.url}/get-a-quote` },
  ...buildSocialMetadata({
    title: `${title} | ${siteConfig.name}`,
    description,
    path: '/get-a-quote',
  }),
};

export default function GetAQuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
