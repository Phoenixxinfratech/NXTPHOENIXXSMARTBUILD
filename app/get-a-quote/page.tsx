'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { siteConfig } from '@/lib/site-config';

const productOptions = [
  { value: 'pir-panels', label: 'PIR Panels' },
  { value: 'puf-panels', label: 'PUF Panels' },
  { value: 'roofing-panels', label: 'Roofing Panels' },
  { value: 'wall-panels', label: 'Wall & Ceiling Panels' },
  { value: 'cleanroom-doors', label: 'Cleanroom Doors' },
  { value: 'fire-doors', label: 'Fire Doors' },
  { value: 'cleanroom-partitions', label: 'Cleanroom Partitions' },
  { value: 'cleanroom-ceiling', label: 'Cleanroom False Ceiling' },
];

const solutionOptions = [
  { value: 'peb', label: 'Pre-Engineered Buildings (PEB)' },
  { value: 'cold-storage', label: 'Cold Storage Construction' },
  { value: 'cleanroom', label: 'Cleanroom Project' },
  { value: 'ceiling-systems', label: 'Ceiling Systems' },
  { value: 'partition-systems', label: 'Partition Systems' },
  { value: 'turnkey-epc', label: 'Turnkey EPC Project' },
  { value: 'prefab', label: 'Prefab Structures' },
];

const industryOptions = [
  { value: 'pharma', label: 'Pharmaceuticals' },
  { value: 'food', label: 'Food Processing' },
  { value: 'dairy', label: 'Dairy' },
  { value: 'cold-chain', label: 'Cold Chain & Logistics' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'hospitality', label: 'Hospitality' },
  { value: 'automotive', label: 'Automotive' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'other', label: 'Other' },
];

export default function GetAQuotePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    
    // Collect form data
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      industry: formData.get('industry') as string,
      products: formData.getAll('products') as string[],
      solutions: formData.getAll('solutions') as string[],
      area: formData.get('area') as string,
      location: formData.get('location') as string,
      timeline: formData.get('timeline') as string,
      budget: formData.get('budget') as string,
      details: formData.get('details') as string,
      source: 'Quote Form',
      formType: 'quote',
      timestamp: new Date().toISOString(),
    };

    try {
      // Submit to API
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company,
          message: `
Industry: ${data.industry}
Products: ${data.products.join(', ') || 'None selected'}
Solutions: ${data.solutions.join(', ') || 'None selected'}
Area: ${data.area || 'Not specified'}
Location: ${data.location || 'Not specified'}
Timeline: ${data.timeline || 'Not specified'}
Budget: ${data.budget || 'Not disclosed'}

Details: ${data.details || 'No additional details'}
          `.trim(),
          source: 'Quote Form',
          industry: data.industry,
        }),
      });

      if (response.ok) {
        // Track conversion event
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'generate_lead', {
            event_category: 'Quote',
            event_label: data.industry,
          });
        }
        
        // Redirect to thank you page
        router.push('/thank-you?type=quote&source=Quote%20Form');
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      setError('Something went wrong. Please try again or contact us directly.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 py-16 md:py-20">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-blue-200">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Get a Quote</span>
            </nav>

            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-4">
                Free Consultation
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Request a Free Technical Quote
              </h1>
              <p className="mt-4 text-lg text-blue-100">
                Tell us about your project and receive customized pricing within 48 hours. 
                Our team will review your requirements and provide a detailed proposal.
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

                  {error && (
                    <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="mt-8 space-y-8">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
                        Contact Information
                      </h3>
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
                            Company/Organization *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            placeholder="Company name"
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
                      <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
                        Project Requirements
                      </h3>
                      
                      <div className="space-y-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Industry *
                          </label>
                          <select
                            name="industry"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select your industry</option>
                            {industryOptions.map((opt) => (
                              <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-3">
                            Products Required (select all that apply)
                          </label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {productOptions.map((opt) => (
                              <label key={opt.value} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-blue-300 cursor-pointer transition-colors">
                                <input
                                  type="checkbox"
                                  name="products"
                                  value={opt.value}
                                  className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-slate-700">{opt.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-3">
                            Solutions Required (select all that apply)
                          </label>
                          <div className="grid gap-3 sm:grid-cols-2">
                            {solutionOptions.map((opt) => (
                              <label key={opt.value} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-blue-300 cursor-pointer transition-colors">
                                <input
                                  type="checkbox"
                                  name="solutions"
                                  value={opt.value}
                                  className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
                                />
                                <span className="text-sm text-slate-700">{opt.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label htmlFor="area" className="block text-sm font-medium text-slate-700 mb-2">
                              Approximate Area (sq.ft/sq.m)
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
                              Project Location
                            </label>
                            <input
                              type="text"
                              id="location"
                              name="location"
                              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                              placeholder="City, State"
                            />
                          </div>
                        </div>

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
                            <option value="immediate">Immediate (1-2 weeks)</option>
                            <option value="1-month">Within 1 month</option>
                            <option value="3-months">Within 3 months</option>
                            <option value="6-months">Within 6 months</option>
                            <option value="planning">Just planning</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-slate-700 mb-2">
                            Budget Range (Optional)
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          >
                            <option value="">Prefer not to disclose</option>
                            <option value="under-10">Under ₹10 Lakhs</option>
                            <option value="10-50">₹10-50 Lakhs</option>
                            <option value="50-1cr">₹50 Lakhs - ₹1 Crore</option>
                            <option value="1-5cr">₹1-5 Crores</option>
                            <option value="above-5cr">Above ₹5 Crores</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="details" className="block text-sm font-medium text-slate-700 mb-2">
                            Project Description
                          </label>
                          <textarea
                            id="details"
                            name="details"
                            rows={5}
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                            placeholder="Describe your project requirements, specifications, or any specific needs..."
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        'Submit Quote Request'
                      )}
                    </button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      . We&apos;ll contact you within 48 hours.
                    </p>
                  </form>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* What to Expect */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900">What to Expect</h3>
                  <div className="mt-4 space-y-4">
                    {[
                      { step: '1', title: 'Submission', desc: 'Your request is received and assigned to a project specialist.' },
                      { step: '2', title: 'Review', desc: 'Our team reviews requirements and prepares preliminary analysis.' },
                      { step: '3', title: 'Consultation', desc: 'We contact you to clarify details and understand needs better.' },
                      { step: '4', title: 'Proposal', desc: 'Receive a detailed quote with scope, timeline, and pricing.' },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                          {item.step}
                        </span>
                        <div>
                          <p className="font-medium text-slate-900">{item.title}</p>
                          <p className="text-sm text-slate-500">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-6 text-white">
                  <h3 className="text-lg font-bold">Need Immediate Assistance?</h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    For urgent requirements, reach us directly.
                  </p>
                  <div className="mt-4 space-y-3">
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm hover:text-blue-300 transition-colors">
                      <span>📞</span>
                      {siteConfig.contact.phone}
                    </a>
                    <a href={`mailto:${siteConfig.contact.projects}`} className="flex items-center gap-3 text-sm hover:text-blue-300 transition-colors">
                      <span>📧</span>
                      {siteConfig.contact.projects}
                    </a>
                    <a 
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm hover:text-green-300 transition-colors"
                    >
                      <span>💬</span>
                      WhatsApp Us
                    </a>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-slate-900">Why Choose Us</h3>
                  <div className="mt-4 space-y-3">
                    {[
                      'Free technical consultation',
                      'Detailed itemized quotes',
                      'No hidden charges',
                      'Expert project guidance',
                      'Pan-India service network',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-emerald-500">✓</span>
                        {item}
                      </div>
                    ))}
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
