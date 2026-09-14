import type { Metadata } from 'next';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { NotFoundContent } from '@/components/blocks/not-found-content';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <NotFoundContent />
      </main>
      <Footer />
    </div>
  );
}
