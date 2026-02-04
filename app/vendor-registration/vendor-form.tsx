'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const categories = [
  'Raw Materials (Steel, Insulation, Chemicals)',
  'Steel & Structural Components',
  'HVAC & Refrigeration Equipment',
  'Electrical & Automation',
  'Fire Safety Equipment',
  'Flooring & Coating Materials',
  'Hardware & Fasteners',
  'Logistics & Transportation',
  'Manpower Supply',
  'Testing & Inspection Services',
  'Other',
];

export function VendorForm() {
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
        router.push('/thank-you?formType=vendor');
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please email accounts@phoenixxsmartbuild.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="vendor-registration"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="vendor-registration" />
      <input type="hidden" name="subject" value="New Vendor Registration from Website" />
      <p className="hidden">
        <label>
          Don&apos;t fill this out: <input name="bot-field" />
        </label>
      </p>

      {/* Company Information */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
          Company Information
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Legal company name"
            />
          </div>
          <div>
            <label htmlFor="gstNumber" className="block text-sm font-medium text-slate-700 mb-2">
              GST Number *
            </label>
            <input
              type="text"
              id="gstNumber"
              name="gstNumber"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="GST registration number"
            />
          </div>
          <div>
            <label htmlFor="pan" className="block text-sm font-medium text-slate-700 mb-2">
              PAN Number *
            </label>
            <input
              type="text"
              id="pan"
              name="pan"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Company PAN"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
              Registered Address *
            </label>
            <textarea
              id="address"
              name="address"
              required
              rows={2}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              placeholder="Complete registered address"
            />
          </div>
        </div>
      </div>

      {/* Contact Person */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
          Contact Person
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contactPerson" className="block text-sm font-medium text-slate-700 mb-2">
              Contact Person Name *
            </label>
            <input
              type="text"
              id="contactPerson"
              name="contactPerson"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Primary contact name"
            />
          </div>
          <div>
            <label htmlFor="designation" className="block text-sm font-medium text-slate-700 mb-2">
              Designation
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="Job title"
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
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="company@email.com"
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
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>
      </div>

      {/* Business Details */}
      <div>
        <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
          Business Details
        </h3>
        <div className="grid gap-6">
          <div>
            <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 mb-2">
              Business Type *
            </label>
            <select
              id="businessType"
              name="businessType"
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            >
              <option value="">Select business type</option>
              <option value="Manufacturer">Manufacturer</option>
              <option value="Distributor">Distributor</option>
              <option value="Importer">Importer</option>
              <option value="Trader">Trader</option>
              <option value="Service Provider">Service Provider</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Product/Service Categories *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="products"
                    value={category}
                    className="w-4 h-4 text-amber-600 border-slate-300 rounded focus:ring-amber-500"
                  />
                  <span className="text-sm text-slate-600">{category}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
              Description of Products/Services *
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
              placeholder="Describe your main products/services, specializations, and capabilities..."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-slate-700 mb-2">
                Years in Business
              </label>
              <select
                id="yearsInBusiness"
                name="yearsInBusiness"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              >
                <option value="">Select</option>
                <option value="0-2 years">0-2 years</option>
                <option value="2-5 years">2-5 years</option>
                <option value="5-10 years">5-10 years</option>
                <option value="10+ years">10+ years</option>
              </select>
            </div>
            <div>
              <label htmlFor="annualTurnover" className="block text-sm font-medium text-slate-700 mb-2">
                Annual Turnover
              </label>
              <select
                id="annualTurnover"
                name="annualTurnover"
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
              >
                <option value="">Select</option>
                <option value="Under 50 Lakhs">Under 50 Lakhs</option>
                <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                <option value="1-5 Crores">1-5 Crores</option>
                <option value="5-10 Crores">5-10 Crores</option>
                <option value="10+ Crores">10+ Crores</option>
              </select>
            </div>
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
        className="w-full rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Vendor Registration'}
      </button>

      <p className="text-xs text-slate-500 text-center">
        By submitting this form, you agree to our{' '}
        <Link href="/privacy-policy" className="text-amber-600 hover:underline">
          Privacy Policy
        </Link>
        {' '}and{' '}
        <Link href="/business-terms" className="text-amber-600 hover:underline">
          Business Terms
        </Link>
        . We&apos;ll review your application within 5-7 business days.
      </p>
    </form>
  );
}


