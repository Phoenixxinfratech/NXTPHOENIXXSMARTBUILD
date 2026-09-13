import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { VendorForm } from './vendor-form';

export const metadata: Metadata = {
  title: 'Vendor Registration – Supplier Onboarding',
  description:
    'Register as a vendor with PHOENIXX. Supplier opportunities for raw materials, components, and services.',
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/vendor-registration',
  },
};

const requirements = [
  { icon: '📋', title: 'Business Registration', desc: 'Valid GST registration and business license' },
  { icon: '📊', title: 'Quality Standards', desc: 'ISO certification or equivalent quality systems' },
  { icon: '📦', title: 'Delivery Capability', desc: 'Ability to deliver pan-India or specific regions' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Market-competitive rates with transparent terms' },
  { icon: '⏰', title: 'Reliability', desc: 'Consistent supply and timeline adherence' },
  { icon: '📝', title: 'Documentation', desc: 'Test certificates, compliance documents as required' },
];

export default function VendorRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Vendor Registration</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4">
                Supplier Registration
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Become a PHOENIXX Vendor
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Join our network of suppliers and grow your business with consistent orders, 
                transparent processes, and timely payments.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-12 bg-white border-b">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Vendor Requirements
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {requirements.map((req) => (
                <div
                  key={req.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50"
                >
                  <span className="text-2xl">{req.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900">{req.title}</h4>
                    <p className="text-sm text-slate-600">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900">Vendor Registration Form</h2>
                <p className="mt-2 text-slate-600">
                  Complete all required fields. We&apos;ll review your application within 5 business days.
                </p>

                <VendorForm />
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold">Questions About Vendor Registration?</h2>
            <p className="mt-2 text-slate-300">Contact our procurement team</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:procurement@phoenixxsmartbuild.com"
                className="inline-flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                📧 procurement@phoenixxsmartbuild.com
              </a>
              <a
                href="tel:+918866556879"
                className="inline-flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                📞 +91 88665 56879
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
