'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const PHONE = '8866556879';
const PHONE_DISPLAY = '88665 56879';
const WHATSAPP_URL = `https://wa.me/91${PHONE}`;
const EMAIL = 'sales@phoenixxsmartbuild.com';

const productInterestOptions = [
  'Roofing PUF Panels',
  'Sandwich PUF Panels (Wall)',
  'Cold Storage Panels',
  'Ceiling PUF Panels',
  'PIR / FM Approved Panels',
  'Other',
];

const faqs = [
  {
    q: 'What is the price of PUF panels in Ahmedabad?',
    a: 'PUF panel price varies based on thickness (30mm to 150mm), density, coating, and order quantity. Contact us for the latest factory-direct pricing with no middleman markup.',
  },
  {
    q: 'Do you have ready stock available?',
    a: 'Yes, we maintain ready stock of roofing and sandwich PUF panels at our facility. Most standard sizes ship within 24 to 72 hours across Ahmedabad and Gujarat.',
  },
  {
    q: 'What thickness options are available?',
    a: 'We offer PUF panels from 30mm to 150mm thickness. Common options include 40mm, 50mm, 60mm, 80mm, 100mm, and 120mm for various applications.',
  },
  {
    q: 'Where are PUF panels used?',
    a: 'PUF panels are used in industrial warehouses, factory sheds, cold storage rooms, food processing units, commercial buildings, cleanrooms, and prefabricated structures.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PHOENIXX SMARTBUILD',
  description:
    'PUF panel manufacturer in Ahmedabad offering roofing, sandwich, and cold storage panels with ready stock and factory direct pricing.',
  url: 'https://phoenixxsmartbuild.com',
  telephone: `+91${PHONE}`,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ahmedabad',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  priceRange: '\u20B9\u20B9',
  image:
    'https://phoenixxsmartbuild.com/images/products/sandwich-panels/puf-panel/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
};

export default function LandingPageClient() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        router.push('/thank-you?formType=ads');
      } else {
        setError('Submission failed. Please try again or call us directly.');
      }
    } catch {
      setError('Network error. Please call us directly at ' + PHONE_DISPLAY);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="flex min-h-screen flex-col bg-white">
        {/* Minimal Header */}
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" aria-label="PHOENIXX SMARTBUILD Home">
              <Image
                src="/images/brand/logos/logo.png"
                alt="PHOENIXX SMARTBUILD"
                width={160}
                height={40}
                className="h-9 w-auto"
                priority
              />
            </Link>
            <a
              href={`tel:+91${PHONE}`}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="hidden sm:inline">Call Now:</span> {PHONE_DISPLAY}
            </a>
          </div>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-24">
            <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative mx-auto max-w-6xl px-4">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-1.5 text-sm font-medium text-emerald-300">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    Ready Stock Available
                  </div>
                  <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
                    PUF Panel Manufacturer{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                      in Ahmedabad
                    </span>
                  </h1>
                  <p className="mt-5 text-lg leading-relaxed text-slate-300 md:text-xl">
                    Premium roofing &amp; sandwich PUF panels with <strong className="text-white">factory direct pricing</strong>,{' '}
                    <strong className="text-white">ready stock</strong>, and{' '}
                    <strong className="text-white">fast delivery</strong> across Ahmedabad &amp; Gujarat.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={scrollToForm}
                      className="rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:shadow-emerald-500/25 hover:scale-105"
                    >
                      Get Instant Quote
                    </button>
                    <a
                      href={`tel:+91${PHONE}`}
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10"
                    >
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                    <Image
                      src="/images/products/sandwich-panels/puf-panel/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp"
                      alt="PUF panel manufacturing facility in Ahmedabad - PHOENIXX SMARTBUILD"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Trust Bar */}
          <section className="border-b border-slate-100 bg-slate-50 py-6">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
                {[
                  { icon: '\uD83D\uDCE6', text: 'Ready Stock Available' },
                  { icon: '\uD83C\uDFED', text: 'Factory Direct Pricing' },
                  { icon: '\uD83C\uDFC5', text: 'Premium Quality' },
                  { icon: '\uD83D\uDE9A', text: 'Fast Delivery Gujarat' },
                  { icon: '\uD83D\uDCD0', text: 'Custom Sizes Available' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-sm font-semibold text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Products Section */}
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                  Our PUF Panel Products
                </h2>
                <p className="mt-3 text-lg text-slate-600">
                  High-performance insulated panels for every industrial application
                </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {[
                  {
                    title: 'Roofing PUF Panels',
                    desc: 'High-strength insulated roofing panels ideal for industrial sheds, warehouses, and factories. Superior thermal insulation reduces energy costs by up to 40%.',
                    img: '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL5.jpg',
                    alt: 'Roofing PUF panel installation on industrial warehouse in Ahmedabad',
                  },
                  {
                    title: 'Sandwich PUF Panels',
                    desc: 'Perfect for walls, partitions, and prefab structures. Available in 30mm to 150mm thickness with steel-PUF-steel construction for maximum durability.',
                    img: '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL1.jpg',
                    alt: 'Sandwich PUF wall panel by PHOENIXX SMARTBUILD Ahmedabad',
                  },
                  {
                    title: 'Cold Storage Panels',
                    desc: 'Designed for temperature-controlled environments from -40\u00B0C to +15\u00B0C. FSSAI-compliant insulation for food and pharma cold chain.',
                    img: '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL9.jpg',
                    alt: 'Cold storage PUF insulated panel for temperature controlled rooms Gujarat',
                  },
                ].map((product) => (
                  <div
                    key={product.title}
                    className="group overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-100 transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={product.img}
                        alt={product.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">{product.desc}</p>
                      <button
                        onClick={scrollToForm}
                        className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-emerald-600 transition-colors"
                      >
                        Get Quote
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technical Specs */}
          <section className="bg-slate-900 py-14 md:py-16">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-center text-3xl font-extrabold text-white md:text-4xl">
                Technical Specifications
              </h2>
              <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  { label: 'Thickness', value: '30mm to 150mm', icon: '\uD83D\uDCCF' },
                  { label: 'Density', value: '40 \u00B1 2 kg/m\u00B3', icon: '\uD83E\uDDF1' },
                  { label: 'Width', value: '1000 to 1200 mm', icon: '\u2194\uFE0F' },
                  { label: 'Length', value: 'Custom Available', icon: '\uD83D\uDCD0' },
                ].map((spec) => (
                  <div
                    key={spec.label}
                    className="rounded-xl bg-white/5 p-6 text-center ring-1 ring-white/10 backdrop-blur-sm"
                  >
                    <span className="text-3xl">{spec.icon}</span>
                    <div className="mt-3 text-2xl font-bold text-white">{spec.value}</div>
                    <div className="mt-1 text-sm text-slate-400">{spec.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4">
              <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
                Applications
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-lg text-slate-600">
                Trusted across industries for thermal insulation, energy savings, and rapid construction
              </p>
              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-5">
                {[
                  { icon: '\uD83C\uDFED', label: 'Industrial Sheds' },
                  { icon: '\uD83C\uDFE2', label: 'Warehouses' },
                  { icon: '\u2744\uFE0F', label: 'Cold Storage' },
                  { icon: '\uD83C\uDF55', label: 'Food Processing' },
                  { icon: '\uD83C\uDFD7\uFE0F', label: 'Commercial Buildings' },
                ].map((app) => (
                  <div
                    key={app.label}
                    className="flex flex-col items-center gap-3 rounded-xl bg-slate-50 p-6 text-center ring-1 ring-slate-100 transition-all hover:ring-blue-200 hover:shadow-md"
                  >
                    <span className="text-4xl">{app.icon}</span>
                    <span className="text-sm font-semibold text-slate-700">{app.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing CTA Banner */}
          <section className="bg-gradient-to-r from-blue-600 to-emerald-600 py-12 md:py-16">
            <div className="mx-auto max-w-4xl px-4 text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                PUF Panel Price in Ahmedabad
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                Price depends on thickness, density, coating, and quantity.{' '}
                <strong className="text-white">Get the best factory-direct price</strong> with no middleman.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/25"
                >
                  Get Best Factory Price
                </button>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-white/10 hover:border-white"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Quote
                </a>
              </div>
            </div>
          </section>

          {/* Ready Stock */}
          <section className="bg-emerald-50 py-10">
            <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-3xl">
                {'\uD83D\uDCE6'}
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-900">Ready Stock Available Near You</h3>
                <p className="mt-1 text-emerald-700">
                  We maintain ready stock of roofing and sandwich PUF panels to ensure{' '}
                  <strong>fast delivery within 24 to 72 hours</strong> across Ahmedabad, Vadodara, Surat, Rajkot &amp; all of Gujarat.
                </p>
              </div>
            </div>
          </section>

          {/* Lead Capture Form */}
          <section id="quote-form" className="scroll-mt-20 bg-slate-50 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid items-start gap-12 lg:grid-cols-5">
                <div className="lg:col-span-3">
                  <h2 className="text-3xl font-extrabold text-slate-900 md:text-4xl">
                    Get Instant Quote
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Fill in your details below. Our team responds within 24 hours with detailed pricing.
                  </p>

                  <div className="mt-8 rounded-2xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
                    <form
                      name="google-ads-lp"
                      method="POST"
                      data-netlify="true"
                      netlify-honeypot="bot-field"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <input type="hidden" name="form-name" value="google-ads-lp" />
                      <input type="hidden" name="subject" value="Google Ads LP - PUF Panel Enquiry Ahmedabad" />
                      <p className="hidden">
                        <label>
                          Don&apos;t fill this out: <input name="bot-field" />
                        </label>
                      </p>

                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label htmlFor="lp-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="lp-name"
                            name="name"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="lp-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="lp-phone"
                            name="phone"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="lp-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="lp-email"
                          name="email"
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="lp-product" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Product Interest *
                        </label>
                        <select
                          id="lp-product"
                          name="product-interest"
                          required
                          className="w-full rounded-lg border border-slate-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="">Select product</option>
                          {productInterestOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="lp-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Message / Requirements
                        </label>
                        <textarea
                          id="lp-message"
                          name="message"
                          rows={3}
                          className="w-full resize-none rounded-lg border border-slate-300 px-4 py-3 transition-all focus:border-transparent focus:ring-2 focus:ring-blue-500"
                          placeholder="Thickness, quantity, project details..."
                        />
                      </div>

                      {error && (
                        <div className="rounded-lg border border-red-200 bg-red-50 p-3">
                          <p className="text-center text-sm text-red-600">{error}</p>
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-6 py-4 text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Free Quote \u2192'}
                      </button>

                      <p className="text-center text-xs text-slate-500">
                        By submitting, you agree to our{' '}
                        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>
                        . We respond within 24 hours.
                      </p>
                    </form>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6 lg:col-span-2">
                  <div className="rounded-xl bg-white p-6 shadow-lg ring-1 ring-slate-100">
                    <h3 className="text-lg font-bold text-slate-900">Why Choose PHOENIXX?</h3>
                    <ul className="mt-4 space-y-3">
                      {[
                        'Ready Stock - Immediate Dispatch',
                        'Factory Direct Pricing - No Middlemen',
                        'Premium Quality Materials',
                        'Fast Delivery Across Gujarat',
                        'Custom Sizes & Specifications',
                        '500+ Projects Delivered',
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <svg className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 p-6 text-white shadow-lg">
                    <h3 className="text-lg font-bold">Need Immediate Help?</h3>
                    <div className="mt-4 space-y-4">
                      <a
                        href={`tel:+91${PHONE}`}
                        className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
                          {'\uD83D\uDCDE'}
                        </span>
                        <div>
                          <div className="text-xs text-blue-100">Call / WhatsApp</div>
                          <div className="font-semibold">{PHONE_DISPLAY}</div>
                        </div>
                      </a>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
                          {'\uD83D\uDCAC'}
                        </span>
                        <div>
                          <div className="text-xs text-blue-100">Chat on</div>
                          <div className="font-semibold">WhatsApp Now</div>
                        </div>
                      </a>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-lg">
                          {'\uD83D\uDCE7'}
                        </span>
                        <div>
                          <div className="text-xs text-blue-100">Email</div>
                          <div className="font-semibold">{EMAIL}</div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{'\u23F1\uFE0F'}</span>
                      <div>
                        <h4 className="font-semibold text-amber-900">24-Hour Response</h4>
                        <p className="mt-1 text-sm text-amber-700">
                          Get a detailed quotation with technical specs within 24 hours of your enquiry.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 md:py-20">
            <div className="mx-auto max-w-3xl px-4">
              <h2 className="text-center text-3xl font-extrabold text-slate-900 md:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-10 space-y-4">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="flex w-full items-center justify-between px-6 py-5 text-left"
                    >
                      <span className="pr-4 font-semibold text-slate-900">{faq.q}</span>
                      <svg
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${openFaq === idx ? 'max-h-40 pb-5' : 'max-h-0'}`}
                    >
                      <p className="px-6 text-slate-600 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 md:py-20">
            <div className="mx-auto max-w-4xl px-4 text-center">
              <h2 className="text-3xl font-extrabold text-white md:text-4xl">
                Build Faster with PHOENIXX SMARTBUILD
              </h2>
              <p className="mt-4 text-lg text-slate-300">
                No delays. No compromise on quality. Factory direct PUF panels in Ahmedabad.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={scrollToForm}
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition-all hover:scale-105"
                >
                  Get Your Project Moving
                </button>
                <a
                  href={`tel:+91${PHONE}`}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-bold text-white transition-all hover:border-white hover:bg-white/10"
                >
                  {'\uD83D\uDCDE'} Call {PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-400/40 px-8 py-4 text-lg font-bold text-emerald-300 transition-all hover:border-emerald-400 hover:bg-emerald-400/10"
                >
                  {'\uD83D\uDCAC'} WhatsApp Us
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* Minimal Footer */}
        <footer className="border-t border-slate-200 bg-white py-6">
          <div className="mx-auto max-w-6xl px-4 text-center text-sm text-slate-500">
            <p>
              &copy; {new Date().getFullYear()} PHOENIXX SMARTBUILD (NXT PHOENIXX SMARTBUILD LLP). All rights reserved.
            </p>
            <p className="mt-1">
              <Link href="/privacy-policy" className="hover:text-slate-700 transition-colors">
                Privacy Policy
              </Link>
              {' \u00B7 '}
              <Link href="/terms-and-conditions" className="hover:text-slate-700 transition-colors">
                Terms &amp; Conditions
              </Link>
            </p>
          </div>
        </footer>

        {/* Sticky Mobile CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden">
          <div className="flex gap-3">
            <a
              href={`tel:+91${PHONE}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 py-3 text-sm font-bold text-white"
            >
              {'\uD83D\uDCDE'} Call Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] py-3 text-sm font-bold text-white"
            >
              {'\uD83D\uDCAC'} WhatsApp
            </a>
            <button
              onClick={scrollToForm}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-slate-900 py-3 text-sm font-bold text-white"
            >
              {'\uD83D\uDCCB'} Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
