'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const partnerTypes = [
  'Dealer / Distributor',
  'Project Contractor',
  'Consultant / Architect',
  'Channel Partner',
];

const regions = [
  'Gujarat',
  'Maharashtra',
  'Rajasthan',
  'Madhya Pradesh',
  'Delhi NCR',
  'Punjab / Haryana',
  'Karnataka',
  'Tamil Nadu',
  'Andhra Pradesh / Telangana',
  'West Bengal',
  'Other North India',
  'Other South India',
  'Pan India',
];

export function PartnerForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Submit to Netlify Forms
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        router.push('/thank-you?formType=partner');
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please email sales@phoenixxsmartbuild.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="partner-application"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="partner-application" />
      <input type="hidden" name="subject" value="New Partner Application from Website" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="Your company"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="you@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="partnerType" className="block text-sm font-medium text-slate-700 mb-2">
            Partnership Type *
          </label>
          <select
            id="partnerType"
            name="partnerType"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          >
            <option value="">Select partnership type</option>
            {partnerTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-slate-700 mb-2">
            Region of Interest *
          </label>
          <select
            id="region"
            name="region"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          >
            <option value="">Select region</option>
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
          Relevant Experience *
        </label>
        <select
          id="experience"
          name="experience"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
        >
          <option value="">Select experience level</option>
          <option value="New to this industry">New to this industry</option>
          <option value="1-3 years">1-3 years in related field</option>
          <option value="3-5 years">3-5 years in related field</option>
          <option value="5-10 years">5-10 years in related field</option>
          <option value="10+ years">10+ years in related field</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          Tell us about your business and interest in partnering with PHOENIXX *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
          placeholder="Describe your business, current operations, and why you want to partner with PHOENIXX..."
        />
      </div>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-center">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Partnership Application'}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to our{' '}
        <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
          Privacy Policy
        </Link>
        . We&apos;ll review your application within 5 business days.
      </p>
    </form>
  );
}

