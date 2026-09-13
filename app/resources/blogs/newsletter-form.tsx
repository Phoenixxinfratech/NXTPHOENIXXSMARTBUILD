'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function NewsletterForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        router.push('/thank-you?formType=newsletter');
      } else {
        setError('Subscription failed. Please try again.');
      }
    } catch (err) {
      console.error('Newsletter submission error:', err);
      setError('Failed to subscribe. Please email info@phoenixxsmartbuild.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="newsletter"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input type="hidden" name="form-name" value="newsletter" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        type="email"
        id="newsletter-email"
        name="email"
        required
        autoComplete="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Subscribing...' : 'Subscribe'}
      </button>

      {error && (
        <p className="text-red-400 text-sm sm:absolute sm:mt-14" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
