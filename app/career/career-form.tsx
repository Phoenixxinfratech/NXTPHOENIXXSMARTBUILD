'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CareerFormProps {
  position?: string;
}

export function CareerForm({ position = '' }: CareerFormProps) {
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
        router.push('/thank-you?formType=career');
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Failed to submit. Please email hr@phoenixxsmartbuild.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      name="career-application"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Hidden fields for Netlify */}
      <input type="hidden" name="form-name" value="career-application" />
      <input type="hidden" name="subject" value={`Career Application: ${position || 'General'}`} />
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
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Your full name"
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
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
            Position Applied For *
          </label>
          <select
            id="position"
            name="position"
            required
            defaultValue={position}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          >
            <option value="">Select a position</option>
            <option value="Project Manager - EPC">Project Manager - EPC</option>
            <option value="Design Engineer - Structural">Design Engineer - Structural</option>
            <option value="Sales Executive - Industrial Products">Sales Executive - Industrial Products</option>
            <option value="Site Supervisor">Site Supervisor</option>
            <option value="Estimation Engineer">Estimation Engineer</option>
            <option value="General Application">General Application (Open Position)</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
            Total Experience *
          </label>
          <select
            id="experience"
            name="experience"
            required
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          >
            <option value="">Select experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1-2 years">1-2 years</option>
            <option value="2-4 years">2-4 years</option>
            <option value="4-6 years">4-6 years</option>
            <option value="6-10 years">6-10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
        </div>
        <div>
          <label htmlFor="currentCompany" className="block text-sm font-medium text-slate-700 mb-2">
            Current Company
          </label>
          <input
            type="text"
            id="currentCompany"
            name="currentCompany"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Your current employer"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        <div>
          <label htmlFor="currentCTC" className="block text-sm font-medium text-slate-700 mb-2">
            Current CTC (LPA)
          </label>
          <input
            type="text"
            id="currentCTC"
            name="currentCTC"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="e.g., 8"
          />
        </div>
        <div>
          <label htmlFor="expectedCTC" className="block text-sm font-medium text-slate-700 mb-2">
            Expected CTC (LPA)
          </label>
          <input
            type="text"
            id="expectedCTC"
            name="expectedCTC"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="e.g., 12"
          />
        </div>
        <div>
          <label htmlFor="noticePeriod" className="block text-sm font-medium text-slate-700 mb-2">
            Notice Period
          </label>
          <select
            id="noticePeriod"
            name="noticePeriod"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          >
            <option value="">Select notice period</option>
            <option value="Immediate">Immediate</option>
            <option value="15 days">15 days</option>
            <option value="30 days">30 days</option>
            <option value="60 days">60 days</option>
            <option value="90 days">90 days</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
          Current Location *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
          placeholder="City, State"
        />
      </div>

      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-slate-700 mb-2">
          Cover Letter / Why do you want to join PHOENIXX? *
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          required
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
          placeholder="Tell us about yourself and why you want to join our team..."
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="linkedIn" className="block text-sm font-medium text-slate-700 mb-2">
            LinkedIn Profile URL
          </label>
          <input
            type="url"
            id="linkedIn"
            name="linkedIn"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>
        <div>
          <label htmlFor="portfolio" className="block text-sm font-medium text-slate-700 mb-2">
            Portfolio / Resume Link
          </label>
          <input
            type="url"
            id="portfolio"
            name="portfolio"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Google Drive / Dropbox link to your resume"
          />
        </div>
      </div>

      <p className="text-sm text-slate-500">
        💡 Please share your resume via Google Drive or Dropbox link (with view access enabled).
      </p>

      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-center">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
      </button>

      <p className="text-xs text-slate-500 text-center">
        Your application will be sent to our HR team at hr@phoenixxsmartbuild.com. 
        We review all applications and respond within 7 working days.
      </p>
    </form>
  );
}


