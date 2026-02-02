import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - PUF Panel, Cold Storage & Cleanroom Questions | PHOENIXX',
  description: 'Technical FAQs about PUF panels, PIR panels, rockwool insulation, cold storage construction, cleanroom systems, and industrial building solutions in India.',
  keywords: [
    'PUF panel FAQ',
    'sandwich panel questions',
    'cold storage FAQ',
    'cleanroom FAQ',
    'PIR panel FAQ',
    'rockwool panel questions',
    'insulated panel guide',
    'industrial building FAQ',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/resources/faq',
  },
  openGraph: {
    title: 'FAQ - Industrial Panel & Building Solutions | PHOENIXX',
    description: 'Technical answers to common questions about PUF panels, cold storage, cleanrooms, and industrial construction.',
    url: 'https://phoenixxsmartbuild.com/resources/faq',
    siteName: 'PHOENIXX SmartBuild',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
