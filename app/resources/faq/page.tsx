import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | PHOENIXX SmartBuild',
  description:
    'Find answers to common questions about PHOENIXX products, services, and processes. Learn about insulated panels, cold storage, cleanrooms, and EPC solutions.',
  alternates: {
    canonical: '/resources/faq',
  },
};

const faqCategories = [
  {
    category: 'Products & Materials',
    faqs: [
      {
        question: 'What is the difference between PIR and PUF panels?',
        answer: 'PIR (Polyisocyanurate) panels offer superior fire resistance (Class B-s1, d0) and better thermal performance. PUF (Polyurethane Foam) panels are more cost-effective and suitable for general applications. Both provide excellent insulation, but PIR is preferred for applications requiring enhanced fire safety.',
      },
      {
        question: 'What panel thickness should I choose?',
        answer: 'Panel thickness depends on your insulation requirements. For cold storage at 0-4°C, we recommend 80-100mm. For freezer applications (-18 to -25°C), 120-150mm is standard. For general building insulation, 50-75mm is usually sufficient. Our team can calculate the optimal thickness based on your specific needs.',
      },
      {
        question: 'What is the lifespan of your insulated panels?',
        answer: 'Our insulated panels are designed for 25+ years of service life when properly installed and maintained. The steel skin is protected with high-quality paint systems, and the insulation core maintains its properties throughout the product life.',
      },
      {
        question: 'Do your products meet fire safety standards?',
        answer: 'Yes. Our PIR panels meet Class B-s1, d0 fire classification. Our fire-rated doors are certified for 30, 60, 90, and 120-minute fire resistance as per IS, BS, and UL standards. We provide all necessary test certificates and compliance documentation.',
      },
    ],
  },
  {
    category: 'Cold Storage & Temperature Control',
    faqs: [
      {
        question: 'What temperature ranges can you achieve?',
        answer: 'Our cold storage solutions cover a wide temperature range: Chilled storage (+2 to +8°C), Cold storage (0 to -5°C), Frozen storage (-18 to -25°C), Deep freeze (-35 to -40°C), and Blast freezers (up to -45°C for rapid freezing).',
      },
      {
        question: 'How energy-efficient are your cold storage solutions?',
        answer: 'Our solutions are designed for optimal energy efficiency through high R-value insulation, thermal bridging prevention, efficient door systems, and proper sealing. Clients typically see 20-30% energy savings compared to older facilities.',
      },
      {
        question: 'Can you build multi-temperature cold storage?',
        answer: 'Yes, we specialize in multi-temperature facilities with separate zones maintained at different temperatures. This is common for food distribution centers handling fresh, chilled, and frozen products.',
      },
    ],
  },
  {
    category: 'Cleanroom Solutions',
    faqs: [
      {
        question: 'What cleanroom classifications do you support?',
        answer: 'We design and build cleanrooms from ISO Class 5 (Class 100) to ISO Class 8 (Class 100,000). The specific class depends on your industry requirements and regulatory standards.',
      },
      {
        question: 'Are your cleanrooms GMP compliant?',
        answer: 'Yes, our cleanroom solutions are designed to meet GMP (Good Manufacturing Practice) and FDA requirements. We provide complete documentation for regulatory compliance including IQ/OQ/PQ protocols.',
      },
      {
        question: 'Do you provide turnkey cleanroom solutions?',
        answer: 'Yes, we offer complete turnkey solutions including design, construction, HVAC integration, flooring, doors, ceilings, and validation support. We coordinate all systems for seamless delivery.',
      },
    ],
  },
  {
    category: 'Pre-Engineered Buildings (PEB)',
    faqs: [
      {
        question: 'What is the advantage of PEB over conventional construction?',
        answer: 'PEB offers 30-50% faster construction, 20-30% cost savings, consistent factory quality, large column-free spans, easier expansion, and reduced foundation requirements. It\'s ideal for warehouses, factories, and large commercial structures.',
      },
      {
        question: 'What span sizes can PEB achieve?',
        answer: 'Our PEB solutions can achieve clear spans up to 90 meters without intermediate columns. Standard economic spans range from 20-40 meters for most industrial applications.',
      },
      {
        question: 'Is PEB suitable for multi-storey buildings?',
        answer: 'Yes, PEB can be designed for multi-storey structures up to 4-5 floors, depending on the application. This is common for commercial buildings, offices, and light industrial facilities.',
      },
    ],
  },
  {
    category: 'Project Execution',
    faqs: [
      {
        question: 'What is your typical project timeline?',
        answer: 'Timelines vary by project scope. Product-only orders: 2-4 weeks. Small projects: 4-8 weeks. Medium EPC projects: 8-16 weeks. Large turnkey projects: 4-12 months. We provide detailed schedules during project planning.',
      },
      {
        question: 'Do you work pan-India?',
        answer: 'Yes, we execute projects across India. We have experience in all major industrial regions and maintain a network of trained installation teams and partners for nationwide service.',
      },
      {
        question: 'Can you work with our existing contractors?',
        answer: 'Yes, we can supply materials and technical supervision while your contractors handle installation. We also provide training for contractors unfamiliar with our systems.',
      },
      {
        question: 'What documentation do you provide?',
        answer: 'We provide comprehensive documentation including shop drawings, material certifications, installation manuals, maintenance guides, warranty certificates, and as-built drawings upon project completion.',
      },
    ],
  },
  {
    category: 'Commercial & Pricing',
    faqs: [
      {
        question: 'How do I get a quote?',
        answer: 'You can request a quote through our website, email (projects@phoenixxsmartbuild.com), or phone (+91 97277 00442). Provide your requirements, approximate area, and project timeline for accurate pricing.',
      },
      {
        question: 'What are your payment terms?',
        answer: 'Standard terms are 50% advance and 50% before dispatch for products. Project payments follow milestone schedules. Credit terms available for established customers with approved credit.',
      },
      {
        question: 'Do you offer warranties?',
        answer: 'Yes, we offer comprehensive warranties: 10-25 years on panel insulation performance, 1-2 years on doors and hardware, and 1 year on workmanship for installation projects.',
      },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((cat) =>
      cat.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      }))
    ),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={faqSchema} />

        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">/</span>
              <span className="text-white">FAQ</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Find answers to common questions about our products, services, and processes. 
                Can&apos;t find what you&apos;re looking for? Contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq) => (
                      <details
                        key={faq.question}
                        className="group rounded-xl border border-slate-200 bg-white overflow-hidden"
                      >
                        <summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                          {faq.question}
                          <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-6">
                          <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-50">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold text-slate-900">Still Have Questions?</h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Our team is here to help. Contact us for personalized assistance with your project requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
              >
                Contact Us
              </Link>
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 hover:border-slate-400 transition-all"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
