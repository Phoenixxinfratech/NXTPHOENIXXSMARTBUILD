import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Thank You | PHOENIXX SmartBuild',
  description: 'Thank you for contacting PHOENIXX. Our team will get back to you within 24 hours.',
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-b from-slate-50 to-white">
        <div className="container-custom py-20 text-center">
          <div className="max-w-2xl mx-auto">
            {/* Success Icon */}
            <div className="mx-auto w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mb-8 shadow-lg shadow-green-500/25">
              <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Thank You!
            </h1>
            <p className="mt-4 text-xl text-slate-600">
              Your enquiry has been received successfully.
            </p>

            {/* What happens next */}
            <div className="mt-10 bg-white rounded-2xl shadow-lg p-8 text-left">
              <h2 className="text-xl font-bold text-slate-900 mb-6">What Happens Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <h3 className="font-semibold text-slate-900">Acknowledgment Email</h3>
                    <p className="text-slate-600 text-sm">You&apos;ll receive a confirmation email shortly with your enquiry details.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <h3 className="font-semibold text-slate-900">Expert Review</h3>
                    <p className="text-slate-600 text-sm">Our technical team will review your requirements within 2-4 hours.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <h3 className="font-semibold text-slate-900">Personal Call</h3>
                    <p className="text-slate-600 text-sm">A PHOENIXX representative will call you within 24 hours to discuss your project.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl">
              <p className="text-slate-700">
                <strong className="text-slate-900">Average Response Time:</strong> Within 4 business hours
              </p>
            </div>

            {/* Contact for urgent */}
            <div className="mt-8 text-slate-600">
              <p className="mb-2">For urgent enquiries, contact us directly:</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919727700442" className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:underline">
                  📞 +91 97277 00442
                </a>
                <a href="https://wa.me/919727700442" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-green-600 font-semibold hover:underline">
                  💬 WhatsApp
                </a>
              </div>
            </div>

            {/* Navigation Options */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                ← Back to Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50 transition-all"
              >
                Explore Products
              </Link>
              <Link
                href="/resources/project-gallery"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50 transition-all"
              >
                View Projects
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500 mb-4">Trusted by 100+ companies across India</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
                <span className="flex items-center gap-1">✓ 18+ Years Experience</span>
                <span className="flex items-center gap-1">✓ 150+ Projects Delivered</span>
                <span className="flex items-center gap-1">✓ Pan-India Service</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}



