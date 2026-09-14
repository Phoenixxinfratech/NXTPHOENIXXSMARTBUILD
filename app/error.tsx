'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="main-content" className="flex-1">
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-16 text-center">
          <div className="max-w-xl">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Something went wrong on our side
            </h1>
            <p className="mt-4 text-slate-600">
              This page failed to load. Trying again usually fixes it. If it doesn&apos;t,
              our team can help you directly.
            </p>
            {error.digest && (
              <p className="mt-3 text-xs text-slate-500">Reference: {error.digest}</p>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
              >
                Try again
              </button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                Go to Homepage
              </Link>
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
