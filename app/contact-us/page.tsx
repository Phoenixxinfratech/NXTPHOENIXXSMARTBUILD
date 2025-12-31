import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Contact Us | PHOENIXX SmartBuild',
  description:
    'Get in touch with PHOENIXX for your industrial infrastructure needs. Request quotes, schedule consultations, or visit our Ahmedabad office.',
  alternates: {
    canonical: '/contact-us',
  },
};

const contactInfo = [
  {
    icon: '📧',
    title: 'Email Us',
    description: 'Get a response within 24 hours',
    primary: 'projects@phoenixxsmartbuild.com',
    secondary: 'info@phoenixxsmartbuild.com',
    action: 'mailto:projects@phoenixxsmartbuild.com',
  },
  {
    icon: '📞',
    title: 'Call Us',
    description: 'Mon-Sat, 9:00 AM - 6:00 PM',
    primary: '+91 97277 00442',
    secondary: '+91 95126 16169',
    action: 'tel:+919727700442',
  },
  {
    icon: '📍',
    title: 'Visit Us',
    description: 'Head Office',
    primary: 'Ahmedabad, Gujarat',
    secondary: 'India',
    action: 'https://goo.gl/maps/phoenixx',
  },
];

const quickLinks = [
  { title: 'Get a Quote', href: '/get-a-quote', icon: '📝', desc: 'Request pricing for your project' },
  { title: 'Career Opportunities', href: '/career', icon: '💼', desc: 'Join our growing team' },
  { title: 'Become a Partner', href: '/become-partner', icon: '🤝', desc: 'Explore partnership opportunities' },
  { title: 'Vendor Registration', href: '/vendor-registration', icon: '📋', desc: 'Register as a supplier' },
];

export default function ContactUsPage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NXT PHOENIXX SMARTBUILD LLP',
    url: 'https://phoenixxsmartbuild.com',
    logo: 'https://phoenixxsmartbuild.com/images/brand/logos/logo.png',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-97277-00442',
        contactType: 'sales',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://linkedin.com/company/phoenixxsmartbuild',
      'https://facebook.com/phoenixxsmartbuild',
      'https://instagram.com/phoenixxsmartbuild',
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={organizationSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Contact Us</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4">
                Let&apos;s Connect
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Get in Touch
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Have a project in mind? Need technical consultation? Our team is ready to help you 
                build smart, sustainable infrastructure solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-white border-b">
          <div className="container-custom">
            <div className="grid gap-6 md:grid-cols-3 -mt-24 relative z-10">
              {contactInfo.map((contact) => (
                <a
                  key={contact.title}
                  href={contact.action}
                  className="group rounded-2xl bg-white shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="inline-flex w-14 h-14 rounded-xl bg-blue-100 items-center justify-center text-3xl">
                    {contact.icon}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{contact.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{contact.description}</p>
                  <p className="mt-4 text-lg font-semibold text-blue-600 group-hover:text-blue-700">
                    {contact.primary}
                  </p>
                  {contact.secondary && (
                    <p className="text-slate-600">{contact.secondary}</p>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900">Send Us a Message</h2>
                <p className="mt-2 text-slate-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form className="mt-8 space-y-6">
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
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="consultation">Technical Consultation</option>
                      <option value="support">Product Support</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="career">Career Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Quick Links & Map */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">Quick Links</h2>
                  <p className="mt-2 text-slate-600">
                    Looking for something specific? Try these direct links.
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.title}
                        href={link.href}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all group"
                      >
                        <span className="text-2xl">{link.icon}</span>
                        <div>
                          <p className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                            {link.title}
                          </p>
                          <p className="text-sm text-slate-500">{link.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
                  <div className="aspect-video bg-slate-200 flex items-center justify-center">
                    <div className="text-center">
                      <span className="text-6xl">🗺️</span>
                      <p className="mt-4 text-slate-500">Map Integration</p>
                      <p className="text-sm text-slate-400">Ahmedabad, Gujarat</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-900">Visit Our Office</h3>
                    <p className="mt-2 text-slate-600">
                      Ahmedabad, Gujarat, India
                    </p>
                    <p className="mt-1 text-sm text-slate-500">
                      Monday - Saturday: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                  <h3 className="font-bold">Connect With Us</h3>
                  <p className="mt-2 text-slate-300 text-sm">
                    Follow us on social media for updates and insights.
                  </p>
                  <div className="mt-4 flex gap-4">
                    {[
                      { name: 'LinkedIn', icon: 'in', href: 'https://linkedin.com/company/phoenixxsmartbuild' },
                      { name: 'Facebook', icon: 'f', href: 'https://facebook.com/phoenixxsmartbuild' },
                      { name: 'Instagram', icon: 'ig', href: 'https://instagram.com/phoenixxsmartbuild' },
                      { name: 'Google', icon: 'G', href: 'https://g.page/phoenixxsmartbuild' },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-sm font-bold hover:bg-white/20 transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-slate-600">
                Quick answers to common inquiries
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                { q: 'What is your typical project timeline?', a: 'Project timelines vary based on scope. Small projects take 2-4 weeks, while large EPC projects can take 3-6 months.' },
                { q: 'Do you provide pan-India services?', a: 'Yes, we execute projects across India with our network of skilled teams and partners.' },
                { q: 'Can you customize solutions?', a: 'Absolutely. Every project is tailored to your specific requirements, site conditions, and regulatory needs.' },
                { q: 'What warranties do you offer?', a: 'We provide comprehensive warranties on materials and workmanship. Specific terms vary by product and project.' },
              ].map((faq) => (
                <div key={faq.q} className="p-6 rounded-xl bg-slate-50">
                  <h4 className="font-semibold text-slate-900">{faq.q}</h4>
                  <p className="mt-2 text-sm text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/resources/faq"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View All FAQs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
