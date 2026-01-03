'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { siteConfig } from '@/lib/site-config';

// Form type configurations
const formTypes: Record<string, {
  title: string;
  subtitle: string;
  icon: string;
  nextSteps: { title: string; description: string }[];
  relatedLinks: { label: string; href: string }[];
}> = {
  quote: {
    title: 'Quote Request Received!',
    subtitle: 'Our technical team will prepare a detailed quotation for your project.',
    icon: '📋',
    nextSteps: [
      { title: 'Requirement Analysis', description: 'Our engineers will review your specifications within 2-4 hours.' },
      { title: 'Technical Discussion', description: 'We\'ll call to discuss technical details and clarify requirements.' },
      { title: 'Quotation Delivery', description: 'Detailed quote with specifications delivered within 24-48 hours.' },
    ],
    relatedLinks: [
      { label: 'View Our Products', href: '/products' },
      { label: 'Browse Solutions', href: '/solutions' },
      { label: 'Project Gallery', href: '/resources/project-gallery' },
    ],
  },
  contact: {
    title: 'Message Received!',
    subtitle: 'Thank you for reaching out. Our team will respond shortly.',
    icon: '✉️',
    nextSteps: [
      { title: 'Message Review', description: 'Your message has been forwarded to the relevant department.' },
      { title: 'Response Preparation', description: 'We\'ll prepare a detailed response to your inquiry.' },
      { title: 'Follow-up Call', description: 'Expect a call from our team within 24 hours.' },
    ],
    relatedLinks: [
      { label: 'About PHOENIXX', href: '/about-us' },
      { label: 'Our Industries', href: '/industries' },
      { label: 'FAQs', href: '/resources/faq' },
    ],
  },
  career: {
    title: 'Application Submitted!',
    subtitle: 'Thank you for your interest in joining PHOENIXX SmartBuild.',
    icon: '💼',
    nextSteps: [
      { title: 'Application Review', description: 'Our HR team will review your application within 3-5 business days.' },
      { title: 'Shortlisting', description: 'Shortlisted candidates will be contacted for initial discussion.' },
      { title: 'Interview Process', description: 'Selected candidates proceed to technical and HR interviews.' },
    ],
    relatedLinks: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Projects', href: '/resources/project-gallery' },
      { label: 'Back to Careers', href: '/career' },
    ],
  },
  partner: {
    title: 'Partnership Request Received!',
    subtitle: 'Thank you for your interest in becoming a PHOENIXX partner.',
    icon: '🤝',
    nextSteps: [
      { title: 'Application Review', description: 'Our business development team will evaluate your application.' },
      { title: 'Due Diligence', description: 'We\'ll verify company details and assess partnership fit.' },
      { title: 'Partnership Discussion', description: 'Qualified applicants will be invited for detailed discussions.' },
    ],
    relatedLinks: [
      { label: 'Our Products', href: '/products' },
      { label: 'Solutions', href: '/solutions' },
      { label: 'Clientele', href: '/clientele' },
    ],
  },
  vendor: {
    title: 'Vendor Registration Received!',
    subtitle: 'Thank you for your interest in supplying to PHOENIXX.',
    icon: '📦',
    nextSteps: [
      { title: 'Document Review', description: 'Our procurement team will review your registration details.' },
      { title: 'Verification', description: 'We\'ll verify your company credentials and capabilities.' },
      { title: 'Empanelment Decision', description: 'Approved vendors will be added to our supplier database.' },
    ],
    relatedLinks: [
      { label: 'About PHOENIXX', href: '/about-us' },
      { label: 'Our Projects', href: '/resources/project-gallery' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
  },
  newsletter: {
    title: 'Subscribed Successfully!',
    subtitle: 'You\'ll receive our latest insights and industry updates.',
    icon: '📧',
    nextSteps: [
      { title: 'Welcome Email', description: 'Check your inbox for a welcome email from us.' },
      { title: 'Regular Updates', description: 'Receive monthly newsletters with industry insights.' },
      { title: 'Exclusive Content', description: 'Get access to whitepapers and technical guides.' },
    ],
    relatedLinks: [
      { label: 'Read Our Blog', href: '/resources/blogs' },
      { label: 'Download Brochures', href: '/resources/brochure' },
      { label: 'Technical Sheets', href: '/resources/technical-sheet' },
    ],
  },
  default: {
    title: 'Thank You!',
    subtitle: 'Your enquiry has been received successfully.',
    icon: '✅',
    nextSteps: [
      { title: 'Acknowledgment Email', description: 'You\'ll receive a confirmation email shortly.' },
      { title: 'Expert Review', description: 'Our team will review your requirements within 2-4 hours.' },
      { title: 'Personal Call', description: 'A PHOENIXX representative will call within 24 hours.' },
    ],
    relatedLinks: [
      { label: 'Explore Products', href: '/products' },
      { label: 'View Solutions', href: '/solutions' },
      { label: 'Project Gallery', href: '/resources/project-gallery' },
    ],
  },
};

function ThankYouContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || 'default';
  const source = searchParams.get('source') || 'Website';
  
  const config = formTypes[type] || formTypes.default;

  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        {/* Success Icon */}
        <div className="text-center mb-10">
          <div className="mx-auto w-28 h-28 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-xl shadow-green-500/30">
            <span className="text-5xl">{config.icon}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            {config.title}
          </h1>
          <p className="mt-4 text-xl text-slate-600">
            {config.subtitle}
          </p>
          
          {source !== 'Website' && (
            <p className="mt-2 text-sm text-slate-500">
              Submitted from: <span className="font-medium">{source}</span>
            </p>
          )}
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              📌
            </span>
            What Happens Next?
          </h2>
          <div className="space-y-6">
            {config.nextSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-lg">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-100">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-sm text-blue-600 font-medium">Average Response Time</p>
              <p className="text-2xl font-bold text-blue-900">Within 4 Business Hours</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-slate-600">Our team is online</span>
            </div>
          </div>
        </div>

        {/* Urgent Contact */}
        <div className="bg-slate-50 rounded-xl p-6 mb-8">
          <h3 className="font-semibold text-slate-900 mb-4">For Urgent Enquiries</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white border border-slate-200 font-medium text-slate-700 hover:border-blue-300 hover:bg-blue-50 transition-all"
            >
              📞 {siteConfig.contact.phone}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        {/* Related Links */}
        <div className="mb-10">
          <h3 className="font-semibold text-slate-900 mb-4 text-center">While You Wait</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {config.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-700 font-medium hover:border-blue-300 hover:bg-blue-50 transition-all text-sm"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>

        {/* Main CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
          >
            ← Back to Home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50 transition-all"
          >
            Browse Products
          </Link>
        </div>

        {/* Trust Signals */}
        <div className="mt-12 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500 mb-4">Trusted by 300+ Companies Across India</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600">
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
              12+ Years Experience
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
              500+ Projects Delivered
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
              Pan-India Service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-b from-slate-50 to-white">
        <Suspense fallback={
          <div className="container-custom py-24 text-center">
            <div className="animate-pulse">
              <div className="w-24 h-24 bg-slate-200 rounded-full mx-auto mb-6"></div>
              <div className="h-8 bg-slate-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-slate-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        }>
          <ThankYouContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
