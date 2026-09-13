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
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
