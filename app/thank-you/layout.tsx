import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your enquiry has been received. Our team will be in touch shortly.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: 'Thank You | PHOENIXX SMARTBUILD',
    description: 'Your enquiry has been received. Our team will be in touch shortly.',
    url: 'https://phoenixxsmartbuild.com/thank-you',
    siteName: 'PHOENIXX SMARTBUILD',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thank You | PHOENIXX SMARTBUILD',
    description: 'Your enquiry has been received. Our team will be in touch shortly.',
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
