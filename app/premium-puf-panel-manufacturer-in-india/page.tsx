import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Premium PUF Panel Manufacturer in India | PHOENIXX',
  description: 'Premium PUF panel manufacturer in India. PHOENIXX delivers high-quality insulated panels with superior foam density & coatings for demanding applications.',
  keywords: ['premium PUF panel manufacturer in India', 'high-quality PUF panels', 'premium insulated panels', 'PHOENIXX'],
  alternates: {
    canonical: '/premium-puf-panel-manufacturer-in-india',
  },
};

const faqs = [
  {
    question: 'What defines a premium PUF panel manufacturer?',
    answer: 'Premium PUF panel manufacturers like PHOENIXX are distinguished by high-density foam cores (40+ kg/m³), superior coating options (PVDF, SDP), strict quality control, advanced manufacturing technology, and comprehensive customer support that ensures optimal panel performance.',
  },
  {
    question: 'Why choose premium PUF panels over standard options?',
    answer: 'Premium PUF panels offer superior thermal insulation, longer service life (25-30 years), better weather resistance, enhanced aesthetics, and lower long-term costs through energy savings and reduced maintenance requirements.',
  },
  {
    question: 'What premium coating options does PHOENIXX offer?',
    answer: 'PHOENIXX offers premium coating options including PVDF (Polyvinylidene Fluoride) for maximum durability and UV resistance, SDP (Super Durable Polyester) for excellent color retention, and SMP (Silicone Modified Polyester) for balanced performance and value.',
  },
  {
    question: 'How does premium foam density affect panel performance?',
    answer: 'Higher foam density (40 kg/m³ vs standard 35 kg/m³) provides better thermal insulation, improved compressive strength, enhanced structural integrity, and longer service life – making premium panels ideal for demanding industrial applications.',
  },
  {
    question: 'What warranty do premium PUF panel manufacturers provide?',
    answer: 'PHOENIXX provides comprehensive warranty coverage on premium PUF panels, including foam performance warranty and coating warranty (varies by coating type: PVDF up to 20 years, SDP up to 15 years). Contact us for detailed warranty terms.',
  },
  {
    question: 'Are premium PUF panels worth the investment?',
    answer: 'Yes, premium PUF panels deliver superior ROI through better energy efficiency (20-40% savings), longer lifespan, lower maintenance costs, and enhanced building performance – especially important for cold storage, pharma, and high-value applications.',
  },
];

export default function PremiumPufPanelManufacturerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-10" />
          <div className="container-custom relative">
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 mb-6">
                ⭐ Premium Quality Guaranteed
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Premium PUF Panel Manufacturer in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                PHOENIXX SmartBuild delivers premium-grade PUF panels engineered for superior performance, 
                featuring high-density foam cores, advanced coatings, and meticulous quality control for 
                India&apos;s most demanding industrial applications.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Request Premium Quote
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Technical Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Quality Introduction */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What Makes PHOENIXX a Premium PUF Panel Manufacturer
              </h2>
              <div className="prose prose-lg prose-slate max-w-none">
                <p>
                  In the world of insulated panels, &quot;premium&quot; is not just a marketing term – it represents 
                  a fundamental commitment to excellence in materials, manufacturing, and service. As a 
                  <strong> premium PUF panel manufacturer in India</strong>, PHOENIXX SmartBuild has invested 
                  significantly in advanced production technology, quality materials, and skilled engineering 
                  talent to deliver panels that exceed industry standards.
                </p>
                <p>
                  Our premium PUF panels feature high-density polyurethane foam cores (40 kg/m³), superior 
                  pre-painted steel facings with advanced coating systems, and precision manufacturing that 
                  ensures consistent quality in every panel. This attention to detail translates into better 
                  thermal performance, longer service life, and lower total cost of ownership for our clients 
                  across <Link href="/industries/pharma-chemical" className="text-primary hover:underline">pharmaceutical</Link>, 
                  <Link href="/solutions/cold-storage-construction" className="text-primary hover:underline"> cold storage</Link>, and industrial sectors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Premium Features That Set Us Apart
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'High-Density Foam Core',
                  description: '40 kg/m³ foam density provides superior insulation, compressive strength, and long-term structural integrity compared to standard panels.',
                  icon: '🔷',
                },
                {
                  title: 'Advanced Coating Systems',
                  description: 'PVDF and SDP coatings offer exceptional UV resistance, color retention, and corrosion protection for 20+ year performance.',
                  icon: '🛡️',
                },
                {
                  title: 'Precision Manufacturing',
                  description: 'Continuous lamination technology ensures uniform foam distribution, consistent thickness, and tight dimensional tolerances.',
                  icon: '⚙️',
                },
                {
                  title: 'Premium Steel Grades',
                  description: 'High-quality galvanized steel (0.50-0.60mm) with superior zinc coating for enhanced durability and corrosion resistance.',
                  icon: '🏗️',
                },
                {
                  title: 'CFC & HFC Free',
                  description: 'Environmentally responsible manufacturing using zero-ODP (Ozone Depleting Potential) blowing agents.',
                  icon: '🌿',
                },
                {
                  title: 'Rigorous Quality Control',
                  description: 'Multi-stage testing including foam density, adhesion strength, thermal conductivity, and dimensional verification.',
                  icon: '✅',
                },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm">
                  <span className="text-4xl">{feature.icon}</span>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-2 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Applications */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Applications Demanding Premium Quality
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: 'Pharmaceutical Manufacturing',
                  description: 'GMP-compliant cleanrooms and controlled environments requiring pristine surfaces and precise temperature control.',
                  link: '/industries/pharma-chemical',
                },
                {
                  title: 'Deep Freeze Cold Storage',
                  description: 'Sub-zero storage facilities where superior insulation directly impacts energy costs and product quality.',
                  link: '/solutions/cold-storage-construction',
                },
                {
                  title: 'High-End Food Processing',
                  description: 'Premium food manufacturing facilities requiring hygienic, temperature-controlled environments.',
                  link: '/industries/food-processing',
                },
                {
                  title: 'Data Centers',
                  description: 'Critical infrastructure requiring precise climate control and fire safety compliance.',
                  link: '/solutions/peb',
                },
              ].map((app, idx) => (
                <Link
                  key={idx}
                  href={app.link}
                  className="group bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{app.title}</h3>
                  <p className="mt-2 text-slate-600">{app.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Premium Specifications */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-amber-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Premium Panel Specifications
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-white/10">
                    {[
                      { label: 'Foam Density', standard: '35-38 kg/m³', premium: '40 ± 2 kg/m³' },
                      { label: 'Thermal Conductivity', standard: '0.026-0.028 W/mK', premium: '0.024 W/mK' },
                      { label: 'Steel Thickness', standard: '0.35-0.45mm', premium: '0.50-0.60mm' },
                      { label: 'Coating Options', standard: 'PE, SMP', premium: 'SMP, SDP, PVDF' },
                      { label: 'Color Retention', standard: '5-10 years', premium: '15-20 years' },
                      { label: 'Service Life', standard: '15-20 years', premium: '25-30 years' },
                    ].map((row, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 font-semibold">{row.label}</td>
                        <td className="px-6 py-4 text-slate-300">{row.standard}</td>
                        <td className="px-6 py-4 text-amber-400 font-medium">{row.premium}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Experience Premium Quality with PHOENIXX
            </h2>
            <p className="text-xl text-amber-100 mb-10 max-w-2xl mx-auto">
              Invest in premium panels that deliver superior performance and long-term value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-amber-700 shadow-lg hover:shadow-xl transition-all"
              >
                Request Quote
              </Link>
              <Link
                href="/products/sandwich-panels/sandwich-puf-panel"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                View Product Specs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

