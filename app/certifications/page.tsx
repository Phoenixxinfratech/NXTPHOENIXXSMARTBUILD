import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { generateBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications & Quality Standards | PHOENIXX SMARTBUILD',
  description: 'PHOENIXX SMARTBUILD certifications: ISO 9001, ISO 14001, IS 14925:2015 sandwich panel standards, fire ratings, and quality testing. Trusted manufacturing excellence.',
  alternates: { canonical: 'https://phoenixxsmartbuild.com/certifications' },
};

const certifications = [
  {
    name: 'ISO 9001:2015',
    category: 'Quality Management',
    description: 'Our quality management system ensures consistent manufacturing processes, documented procedures, and continuous improvement across all panel production lines. Every batch undergoes density, adhesion, and dimensional checks before dispatch.',
    relevance: 'Buyers benefit from traceable quality records, reduced defect rates, and reliable panel performance across projects.',
  },
  {
    name: 'ISO 14001:2015',
    category: 'Environmental Management',
    description: 'PHOENIXX uses CFC-free blowing agents in PUF foam production and maintains waste management protocols aligned with environmental standards. Our manufacturing minimises VOC emissions and optimises raw material utilisation.',
    relevance: 'Essential for clients with sustainability mandates, green building certifications, and corporate ESG reporting requirements.',
  },
  {
    name: 'IS 14925:2015',
    category: 'Indian Standard for Sandwich Panels',
    description: 'India\'s national standard for insulated sandwich panels covering material properties, dimensional tolerances, thermal performance, and test methods. PHOENIXX panels are manufactured to meet or exceed IS 14925 requirements for density, thermal conductivity, and shear strength.',
    relevance: 'Required for government projects, PSUs, and any construction where Indian Standards compliance is mandatory.',
  },
  {
    name: 'B2/B3 Fire Rating (PUF)',
    category: 'Fire Performance — PUF Panels',
    description: 'Standard PUF panels achieve B2/B3 classification (self-extinguishing) per EN 13501. The closed-cell foam does not sustain flame after the ignition source is removed, providing adequate fire performance for warehouses, factories, and commercial buildings.',
    relevance: 'Suitable for most industrial applications. Fire safety officers should review specific occupancy requirements.',
  },
  {
    name: 'B-s1,d0 Fire Rating (PIR)',
    category: 'Fire Performance — PIR Panels',
    description: 'PIR panels deliver enhanced fire performance with B-s1,d0 rating: very low smoke production and no burning droplets. This makes PIR the preferred choice for pharmaceutical plants, data centres, and facilities where fire safety is critical.',
    relevance: 'Recommended for pharma, chemical, electronics, and high-value storage facilities.',
  },
  {
    name: 'A1/A2 Fire Rating (Rockwool)',
    category: 'Fire Performance — Rockwool Panels',
    description: 'Rockwool (mineral wool) panels are completely non-combustible with A1/A2 fire classification. The basalt-derived core withstands temperatures up to 1,000°C without melting, providing maximum fire safety for process industries and fire-rated compartmentation.',
    relevance: 'Mandatory for fire-rated walls, furnace-adjacent structures, and buildings requiring non-combustible materials.',
  },
  {
    name: 'FM 4880 / FM 4471 (Optional)',
    category: 'International Fire Approval',
    description: 'Factory Mutual (FM) approved panel assemblies are available for projects requiring international insurance compliance. FM 4880 covers insulated panel assemblies; FM 4471 covers roof assemblies with specific fixing and flashing details.',
    relevance: 'Required for multinational corporations, insurance-mandated projects, and export-oriented facilities.',
  },
  {
    name: 'WHO-GMP Compliance Support',
    category: 'Pharmaceutical Standards',
    description: 'PHOENIXX cleanroom panels and doors are designed to support WHO-GMP and Schedule M compliance for pharmaceutical manufacturing. Smooth, non-porous surfaces, flush joints, and coved floor transitions prevent contamination accumulation.',
    relevance: 'Essential for tablet manufacturing, API production, vaccine facilities, and sterile processing areas.',
  },
];

export default function CertificationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Certifications', url: '/certifications' },
  ]);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What certifications does PHOENIXX SMARTBUILD hold?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'PHOENIXX SMARTBUILD holds ISO 9001:2015 (Quality Management) and ISO 14001:2015 (Environmental Management) certifications. Our panels comply with IS 14925:2015 Indian Standard for sandwich panels, with optional FM 4880/4471 international fire approvals.',
        },
      },
      {
        '@type': 'Question',
        name: 'What fire rating do PHOENIXX PUF panels have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Standard PUF panels achieve B2/B3 (self-extinguishing) fire rating. PIR panels offer enhanced B-s1,d0 rating with minimal smoke. Rockwool panels provide A1/A2 non-combustible rating for maximum fire safety.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white section-padding">
          <div className="container-custom">
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
              Certifications &amp; Quality Standards
            </h1>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl leading-relaxed">
              PHOENIXX SMARTBUILD maintains rigorous quality and compliance standards across every panel we manufacture.
              Our certifications demonstrate engineering discipline, manufacturing consistency, and commitment to building safety.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.map((cert) => (
                <article key={cert.name} className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md transition-shadow">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{cert.category}</span>
                  <h2 className="mt-2 text-xl font-bold text-slate-900">{cert.name}</h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">{cert.description}</p>
                  <p className="mt-3 text-sm text-slate-500">
                    <strong className="text-slate-700">Why it matters:</strong> {cert.relevance}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-xl bg-blue-50 border border-blue-100 p-8 text-center">
              <h2 className="text-2xl font-bold text-slate-900">Need Certification Documents for Your Project?</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                We provide test reports, material certificates, and compliance documentation with every project quotation.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link href="/get-a-quote" className="btn-primary">Request Documentation</Link>
                <Link href="/contact-us" className="btn-secondary bg-white text-slate-900 border border-slate-200">Contact Engineering Team</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
