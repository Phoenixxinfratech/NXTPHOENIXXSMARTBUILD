'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

const productOptions = [
  'PUF Panels',
  'PIR Panels',
  'Rockwool Panels',
  'Roofing Panels',
  'Wall & Ceiling Panels',
  'Cleanroom Doors',
  'Fire-Rated Doors',
  'Cold Storage Doors',
  'Hermetic Doors',
];

const solutionOptions = [
  'Cold Storage Construction',
  'Cleanroom Solutions',
  'Pre-Engineered Buildings (PEB)',
  'Turnkey Projects',
  'Modular Construction',
];

const industryOptions = [
  'Pharmaceutical',
  'Food Processing',
  'Cold Chain & Logistics',
  'Healthcare',
  'Manufacturing',
  'Agriculture',
  'Data Centers',
  'Other',
];

export default function GetAQuotePage() {
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
        router.push('/thank-you?formType=quote');
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Get a Quote</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Request a Free Quote
              </h1>
              <p className="mt-4 text-lg text-slate-300">
                Get a customized quotation for your project. Our team responds within 24-48 hours with detailed pricing and technical recommendations.
              </p>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-3">
              {/* Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                  <h2 className="text-2xl font-bold text-slate-900">Project Details</h2>
                  <p className="mt-2 text-slate-600">
                    Fill in the details below. Fields marked with * are required.
                  </p>

                  <form 
                    name="quote-request"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-8"
                  >
                    {/* Hidden fields for Netlify */}
                    <input type="hidden" name="form-name" value="quote-request" />
                    <input type="hidden" name="subject" value="New Quote Request from Website" />
                    <p className="hidden">
                      <label>
                        Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                      </label>
                    </p>

                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact Information</h3>
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
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Your company"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4">Project Requirements</h3>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-2">
                            Industry *
                          </label>
                          <select
                            id="industry"
                            name="industry"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select your industry</option>
                            {industryOptions.map((option) => (
                              <option key={option} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-3">
                            Products Interested In
                          </label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                            {productOptions.map((product) => (
                              <label key={product} className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  name="products"
                                  value={product}
                                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-slate-600">{product}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-3">
                            Solutions Required
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {solutionOptions.map((solution) => (
                              <label key={solution} className="flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  name="solutions"
                                  value={solution}
                                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-slate-600">{solution}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-2">
                              Approximate Area (sq.ft)
                            </label>
                            <input
                              type="text"
                              id="area"
                              name="area"
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              placeholder="e.g., 10,000 sq.ft"
                            />
                          </div>
                          <div>
                            <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                              Project Location *
                            </label>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              required
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              placeholder="City, State"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="timeline" className="block text-sm font-medium text-slate-700 mb-2">
                              Expected Timeline
                            </label>
                            <select
                              id="timeline"
                              name="timeline"
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            >
                              <option value="">Select timeline</option>
                              <option value="immediate">Immediate (within 1 month)</option>
                              <option value="1-3-months">1-3 months</option>
                              <option value="3-6-months">3-6 months</option>
                              <option value="6-12-months">6-12 months</option>
                              <option value="planning">Just planning</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                              Budget Range
                            </label>
                            <select
                              id="budget"
                              name="budget"
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            >
                              <option value="">Select budget range</option>
                              <option value="under-10L">Under ₹10 Lakhs</option>
                              <option value="10-25L">₹10-25 Lakhs</option>
                              <option value="25-50L">₹25-50 Lakhs</option>
                              <option value="50L-1Cr">₹50 Lakhs - 1 Crore</option>
                              <option value="1-5Cr">₹1-5 Crores</option>
                              <option value="above-5Cr">Above ₹5 Crores</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-2">
                            Project Details *
                          </label>
                          <textarea
                            id="details"
                            name="details"
                            required
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Describe your project requirements, specifications, or any specific needs..."
                          />
                        </div>
                      </div>
                    </div>

                    {error && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-center">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Quote Request'}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      . We&apos;ll respond within 24-48 hours.
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Why Choose Us */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose PHOENIXX?</h3>
                  <ul className="space-y-3">
                    {[
                      '18+ years of industry experience',
                      '500+ successful projects delivered',
                      'Pan-India service network',
                      'Competitive pricing',
                      'Technical consultation included',
                      'Fast turnaround times',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-green-500 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-blue-600 to-emerald-600 rounded-xl shadow-lg p-6 text-white">
                  <h3 className="text-lg font-bold mb-4">Need Immediate Help?</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+919727700442"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                    >
                      <span className="text-xl">📞</span>
                      <span>+91 97277 00442</span>
                    </a>
                    <a
                      href="https://wa.me/919727700442"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                    >
                      <span className="text-xl">💬</span>
                      <span>WhatsApp Us</span>
                    </a>
                    <a
                      href="mailto:sales@phoenixxsmartbuild.com"
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                    >
                      <span className="text-xl">📧</span>
                      <span>sales@phoenixxsmartbuild.com</span>
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Quick Response</h4>
                      <p className="text-sm text-amber-700 mt-1">
                        Our team responds to all inquiries within 24-48 business hours with detailed quotations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

