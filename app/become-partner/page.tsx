import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Become a Partner | PHOENIXX SmartBuild',
  description:
    'Partner with PHOENIXX for industrial infrastructure solutions. Dealers, distributors, contractors, and consultants welcome. Grow together with us.',
  alternates: {
    canonical: '/become-partner',
  },
};

const partnerTypes = [
  {
    title: 'Dealer / Distributor',
    icon: '🏪',
    description: 'Sell PHOENIXX products in your region with exclusive territory rights and comprehensive support.',
    benefits: ['Exclusive territory rights', 'Marketing support', 'Product training', 'Technical assistance', 'Attractive margins'],
    ideal: 'Established building material businesses',
  },
  {
    title: 'Project Contractor',
    icon: '🔧',
    description: 'Execute PHOENIXX projects as an authorized installation partner with full training and support.',
    benefits: ['Project referrals', 'Technical training', 'Quality certification', 'Ongoing support', 'Priority payments'],
    ideal: 'Construction and erection contractors',
  },
  {
    title: 'Consultant / Architect',
    icon: '📐',
    description: 'Recommend PHOENIXX solutions to your clients with technical backup and specification support.',
    benefits: ['Technical specifications', 'Project support', 'Design assistance', 'Referral benefits', 'Joint marketing'],
    ideal: 'Architects, MEP consultants, PMCs',
  },
  {
    title: 'Channel Partner',
    icon: '🤝',
    description: 'Refer leads and earn commissions while we handle execution and delivery.',
    benefits: ['Referral commissions', 'Lead tracking', 'Updates on progress', 'Long-term relationship', 'Growth incentives'],
    ideal: 'Business developers, industry contacts',
  },
];

const advantages = [
  { title: 'Quality Products', desc: 'In-house manufactured products with consistent quality' },
  { title: 'Pan-India Reach', desc: 'Strong presence across India with growing market share' },
  { title: 'Technical Support', desc: 'Dedicated team for specifications and project assistance' },
  { title: 'Training Programs', desc: 'Regular product and installation training' },
  { title: 'Marketing Support', desc: 'Branding materials and joint marketing initiatives' },
  { title: 'Transparent Terms', desc: 'Clear policies and timely payments' },
];

export default function BecomePartnerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-teal-200">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Become a Partner</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-emerald-300 text-sm font-medium mb-4">
                Partnership Opportunities
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Grow With PHOENIXX
              </h1>
              <p className="mt-6 text-lg text-teal-100 leading-relaxed">
                Join our network of partners and grow your business with high-quality industrial 
                infrastructure products and solutions. Multiple partnership models to suit your business.
              </p>
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Partnership Models
              </h2>
              <p className="mt-4 text-slate-600">
                Choose a partnership model that aligns with your business
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {partnerTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 hover:shadow-xl hover:border-emerald-200 transition-all"
                >
                  <span className="text-4xl">{type.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{type.title}</h3>
                  <p className="mt-2 text-slate-600">{type.description}</p>
                  
                  <div className="mt-4">
                    <p className="text-sm font-medium text-slate-700">Benefits:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {type.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="inline-block px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs"
                        >
                          ✓ {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-500">
                      <span className="font-medium">Ideal for:</span> {type.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Why Partner with PHOENIXX?
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  PHOENIXX is one of India&apos;s growing industrial infrastructure companies. 
                  Partnering with us gives you access to quality products, technical expertise, 
                  and a supportive ecosystem designed for mutual growth.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {advantages.map((adv) => (
                    <div key={adv.title} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                        ✓
                      </span>
                      <div>
                        <p className="font-medium text-slate-900">{adv.title}</p>
                        <p className="text-sm text-slate-500">{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-9xl opacity-30">🤝</span>
                    <p className="mt-4 text-slate-500">Partnership Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Application Form */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Apply for Partnership
                </h2>
                <p className="mt-4 text-slate-600">
                  Fill out the form below and our partnership team will get in touch
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <form className="space-y-6">
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
                        placeholder="Your name"
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
                        placeholder="Company name"
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
                      <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-2">
                        Location / Territory *
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                        placeholder="City, State"
                      />
                    </div>
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
                        <option value="">Select type</option>
                        <option value="dealer">Dealer / Distributor</option>
                        <option value="contractor">Project Contractor</option>
                        <option value="consultant">Consultant / Architect</option>
                        <option value="channel">Channel Partner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                      Business Experience *
                    </label>
                    <textarea
                      id="experience"
                      name="experience"
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your business, experience, and why you want to partner with PHOENIXX..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Partnership Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Questions About Partnership?
            </h2>
            <p className="mt-4 text-emerald-100 max-w-2xl mx-auto">
              Our partnership team is ready to discuss opportunities and answer your questions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919727700442"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-emerald-600 shadow-lg hover:shadow-xl transition-all"
              >
                📞 Call Us
              </a>
              <a
                href="mailto:partners@phoenixxsmartbuild.com"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                📧 Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
