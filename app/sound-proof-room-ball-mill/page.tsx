import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateHowToSchema,
  generateArticleSchema,
  generateOfferSchema,
  generateSpeakableSchema,
} from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sound Proof Room for Ball Milling Machine | Acoustic Enclosure India',
  description:
    'Get industrial soundproof rooms for ball mill machines with high dB noise reduction, ventilation & fire safety. Manufacturer in India. Request quote today.',
  keywords: [
    'sound proof room for ball milling machine',
    'ball mill acoustic enclosure',
    'machine soundproof room',
    'industrial noise control enclosure',
    'ball mill noise reduction solution',
    'acoustic enclosure manufacturer India',
  ],
  alternates: {
    canonical: 'https://phoenixxsmartbuild.com/sound-proof-room-ball-mill',
  },
  openGraph: {
    title: 'Sound Proof Room for Ball Milling Machine | Acoustic Enclosure India',
    description:
      'Get industrial soundproof rooms for ball mill machines with high dB noise reduction, ventilation & fire safety. Manufacturer in India. Request quote today.',
    type: 'website',
    url: 'https://phoenixxsmartbuild.com/sound-proof-room-ball-mill',
  },
  robots: { index: true, follow: true },
};

const faqs = [
  {
    question: 'How much noise reduction is possible?',
    answer:
      'Typically 25–35 dB, depending on design and materials. Well-engineered industrial acoustic enclosures can deliver 15–25 dB (basic), 25–35 dB (high-performance), or up to 40 dB with multi-layer acoustic treatment.',
  },
  {
    question: 'Which material is best for ball mill soundproofing?',
    answer:
      'Rockwool acoustic panels provide the highest absorption and fire safety. For pharma and clean environments, PUF/PIR sandwich panels offer strong thermal insulation with a clean finish. Correct material selection directly impacts dB reduction and safety.',
  },
  {
    question: 'Is ventilation required in soundproof room?',
    answer:
      'Yes, silenced ventilation is essential to remove heat. Ball mills generate significant heat, so enclosure design must ensure forced air ventilation, acoustic silencers on ducts, temperature-resistant insulation, and optional exhaust fans or cooling systems.',
  },
  {
    question: 'Can the enclosure be relocated?',
    answer:
      'Yes, modular prefabricated systems allow relocation. Unlike civil construction, modern PUF or rockwool panel soundproof rooms provide faster installation, higher acoustic efficiency, relocatable structure, and clean industrial finish.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Usually 3–10 days after manufacturing. The process includes site noise study, acoustic design, precision fabrication of insulated panels and doors, on-site modular assembly with sealing, and noise testing for verification.',
  },
];

const installationSteps = [
  { name: 'Site Noise Study', text: 'Measurement of existing dB levels and frequency.' },
  { name: 'Acoustic Design', text: 'Material selection and enclosure layout.' },
  { name: 'Manufacturing', text: 'Precision fabrication of insulated panels and doors.' },
  { name: 'On-Site Installation', text: 'Fast modular assembly with sealing.' },
  { name: 'Noise Testing', text: 'Verification of achieved noise reduction.' },
];

export default function SoundProofRoomBallMillPage() {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema(
    'Ball Mill Acoustic Enclosure',
    'Industrial soundproof rooms for ball milling machines with high dB noise reduction, ventilation, and fire safety. Custom acoustic enclosures for cement, mineral processing, chemical, and pharmaceutical industries.',
    'https://phoenixxsmartbuild.com/sound-proof-room-ball-mill'
  );
  const faqSchema = generateFAQSchema(faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Sound Proof Room for Ball Milling Machine', url: '/sound-proof-room-ball-mill' },
  ]);
  const howToSchema = generateHowToSchema(
    'Installation Process for Ball Mill Soundproof Room',
    'Professional installation of industrial acoustic enclosure for ball milling machines.',
    installationSteps
  );
  const articleSchema = generateArticleSchema({
    title: 'Sound Proof Room for Ball Milling Machine – Industrial Acoustic Enclosure Solution in India',
    description:
      'Complete guide to industrial soundproof rooms for ball mill machines: design, materials, noise reduction levels, pricing, and installation.',
    url: '/sound-proof-room-ball-mill',
    image: 'https://phoenixxsmartbuild.com/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
    datePublished: '2026-01-29',
    dateModified: '2026-01-29',
    author: { name: 'PHOENIXX SMARTBUILD' },
  });
  const offerSchema = generateOfferSchema({
    name: 'Ball Mill Soundproof Room',
    description: 'Industrial acoustic enclosure for ball milling machines with 25-35 dB noise reduction.',
    priceCurrency: 'INR',
    lowPrice: 250000,
    highPrice: 2500000,
    priceRange: '₹2.5 – ₹25 lakh',
    url: '/sound-proof-room-ball-mill',
    availability: 'https://schema.org/InStock',
  });
  const speakableSchema = generateSpeakableSchema(['h1', 'h2', '.faq-answer']);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={serviceSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={howToSchema} />
        <JsonLd data={articleSchema} />
        <JsonLd data={offerSchema} />
        <JsonLd data={speakableSchema} />

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/solutions" className="hover:text-white transition-colors">
                Solutions
              </Link>
              <span className="mx-2">/</span>
              <span className="text-white">Sound Proof Room</span>
            </nav>
            <div className="max-w-4xl">
              <span className="inline-block rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-400 mb-6">
                Industrial Acoustic Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Sound Proof Room for Ball Milling Machine – Industrial Acoustic Enclosure Solution in India
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                Industrial ball milling machines generate extremely high noise levels that can exceed safe working limits.
                A professionally engineered sound proof room for ball milling machine is the most effective solution to
                reduce noise, improve workplace comfort, and meet statutory norms without interrupting production.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote?interest=soundproof-room"
                  className="rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Request Free Noise Assessment
                </Link>
                <Link
                  href="/contact-us"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
              <p>
                Industrial ball milling machines generate extremely high noise levels that can exceed safe working limits
                and create serious challenges for worker safety compliance, factory productivity, environmental
                regulations, and equipment monitoring.
              </p>
              <p>
                A professionally engineered <strong>sound proof room for ball milling machine</strong> is the most
                effective solution to reduce noise, improve workplace comfort, and meet statutory norms without
                interrupting production. This page explains design, materials, noise reduction levels, pricing, and
                installation so you can choose the right industrial acoustic enclosure for your facility.
              </p>
            </div>
          </div>
        </section>

        {/* Why Noise Control Is Critical */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why Noise Control Is Critical for Ball Milling Machines
              </h2>
              <p className="text-slate-700 mb-6">
                Ball mills used in cement plants, mineral processing, chemical industries, and pharmaceuticals often
                produce continuous sound levels between <strong>90 dB to 120 dB</strong>. Such exposure can lead to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
                <li>Hearing damage risks</li>
                <li>Worker fatigue and reduced efficiency</li>
                <li>Regulatory penalties</li>
                <li>Poor communication on the shop floor</li>
              </ul>
              <p className="text-slate-700 mb-4">
                Installing a <strong>machine soundproof room</strong> ensures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Safe working environment</li>
                <li>Compliance with industrial noise standards</li>
                <li>Controlled acoustic performance</li>
                <li>Improved operational focus</li>
              </ul>
            </div>
          </div>
        </section>

        {/* What Is a Sound Proof Room */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                What Is a Sound Proof Room for Ball Milling Machine?
              </h2>
              <p className="text-slate-700 mb-6">
                A <strong>ball mill acoustic enclosure</strong> is a specially designed prefabricated or modular
                sound-insulated chamber built around the machine to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
                <li>Contain airborne noise</li>
                <li>Absorb vibration-induced sound</li>
                <li>Maintain ventilation and heat dissipation</li>
                <li>Allow maintenance access</li>
              </ul>
              <p className="text-slate-700">
                Unlike civil construction, modern PUF or rockwool panel soundproof rooms provide faster installation,
                higher acoustic efficiency, relocatable structure, and clean industrial finish.
              </p>
            </div>
          </div>
        </section>

        {/* Typical Noise Reduction */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Typical Noise Reduction Achieved
              </h2>
              <p className="text-slate-700 mb-6">
                Well-engineered industrial acoustic enclosures can deliver:
              </p>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  15–25 dB reduction (basic enclosure)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  25–35 dB reduction (high-performance design)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Up to 40 dB with multi-layer acoustic treatment
                </li>
              </ul>
              <p className="text-slate-700">
                Actual performance depends on panel thickness, insulation material, sealing quality, and ventilation
                silencer design.
              </p>
            </div>
          </div>
        </section>

        {/* Best Materials */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Best Materials for Ball Mill Soundproof Room
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. Rockwool Acoustic Panels</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>Excellent sound absorption</li>
                    <li>High fire resistance</li>
                    <li>Suitable for heavy industries</li>
                  </ul>
                  <Link
                    href="/products/sandwich-panels/rockwool-panel"
                    className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                  >
                    View Rockwool Panels →
                  </Link>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. PUF / PIR Sandwich Panels</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>Strong thermal insulation</li>
                    <li>Lightweight modular structure</li>
                    <li>Clean finish for pharma & chemical plants</li>
                  </ul>
                  <Link
                    href="/products/sandwich-panels/sandwich-puf-panel"
                    className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                  >
                    View PUF Panels →
                  </Link>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Perforated Acoustic Liners</h3>
                  <ul className="text-slate-700 space-y-2">
                    <li>Internal echo reduction</li>
                    <li>Improved speech clarity outside enclosure</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 text-slate-600">
                Correct material selection directly impacts dB reduction and safety.
              </p>
            </div>
          </div>
        </section>

        {/* Key Design Features */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Key Design Features of Industrial Soundproof Enclosure
              </h2>
              <p className="text-slate-700 mb-6">
                A professional ball mill noise control enclosure must include:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    title: 'Acoustic Wall & Roof Panels',
                    desc: 'Multi-layer insulated construction for maximum absorption.',
                  },
                  {
                    title: 'Anti-Vibration Base Isolation',
                    desc: 'Prevents structure-borne noise transmission.',
                  },
                  {
                    title: 'Acoustic Doors with Seals',
                    desc: 'Maintains airtight sound containment.',
                  },
                  {
                    title: 'Silenced Ventilation System',
                    desc: 'Allows airflow while blocking noise escape.',
                  },
                  {
                    title: 'Observation Windows',
                    desc: 'Laminated acoustic glass for safe monitoring.',
                  },
                  {
                    title: 'Fire-Safe Construction',
                    desc: 'Non-combustible insulation and compliant materials.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 flex gap-4">
                    <span className="text-2xl">✓</span>
                    <div>
                      <h3 className="font-bold text-slate-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ventilation & Heat Management */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Ventilation & Heat Management Inside Soundproof Room
              </h2>
              <p className="text-slate-700 mb-6">
                Ball mills generate significant heat, so enclosure design must ensure:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
                <li>Forced air ventilation</li>
                <li>Acoustic silencers on ducts</li>
                <li>Temperature-resistant insulation</li>
                <li>Optional exhaust fans or cooling systems</li>
              </ul>
              <p className="text-slate-700 mb-4">Proper ventilation prevents:</p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Machine overheating</li>
                <li>Reduced equipment life</li>
                <li>Safety hazards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Applications Across Industries
              </h2>
              <p className="text-slate-700 mb-6">
                Soundproof rooms for ball milling machines are widely used in:
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Cement manufacturing plants',
                  'Mineral grinding units',
                  'Ceramic industries',
                  'Chemical processing factories',
                  'Pharmaceutical powder processing',
                  'Paint & pigment production',
                ].map((industry, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-4 py-2 rounded-full bg-white text-slate-700 font-medium border border-slate-200"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-slate-600">
                Each industry requires custom acoustic engineering based on machine size, noise frequency, and production
                environment.
              </p>
            </div>
          </div>
        </section>

        {/* PUF vs Rockwool Table */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                PUF vs Rockwool Soundproof Room – Which Is Better?
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Feature</th>
                      <th className="px-6 py-4 text-left font-semibold">PUF Panel</th>
                      <th className="px-6 py-4 text-left font-semibold">Rockwool Panel</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: 'Noise absorption', puf: 'Medium', rock: 'High' },
                      { feature: 'Fire resistance', puf: 'Moderate', rock: 'Excellent' },
                      { feature: 'Weight', puf: 'Lightweight', rock: 'Heavy' },
                      { feature: 'Thermal insulation', puf: 'Very good', rock: 'Good' },
                      { feature: 'Best use', puf: 'Pharma / clean', rock: 'Heavy industry' },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-slate-900">{row.feature}</td>
                        <td className="px-6 py-4 text-slate-600">{row.puf}</td>
                        <td className="px-6 py-4 text-slate-600">{row.rock}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-6 text-slate-700">
                For ball milling machines, <strong>rockwool acoustic systems</strong> are generally preferred due to
                superior sound absorption and fire safety. View our{' '}
                <Link href="/products/sandwich-panels/rockwool-panel" className="text-blue-600 hover:underline">
                  Rockwool Panel
                </Link>{' '}
                and{' '}
                <Link href="/products/sandwich-panels/pir-panel" className="text-blue-600 hover:underline">
                  PIR Panel
                </Link>{' '}
                options.
              </p>
            </div>
          </div>
        </section>

        {/* Customization Options */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Customization Options Available
              </h2>
              <p className="text-slate-700 mb-6">
                Every industrial soundproof enclosure can be tailored for:
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                {[
                  'Machine dimensions',
                  'Required dB reduction',
                  'Door locations',
                  'Crane access',
                  'Electrical & piping openings',
                  'Maintenance clearance',
                ].map((opt, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white rounded-lg px-4 py-3">
                    <span className="text-emerald-500">✓</span>
                    <span className="text-slate-700">{opt}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-slate-600">
                Custom engineering ensures maximum performance and usability.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Installation Process
              </h2>
              <div className="space-y-6">
                {installationSteps.map((step, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg">{step.name}</h3>
                      <p className="text-slate-600 mt-1">{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Soundproof Room Price for Ball Milling Machine in India
              </h2>
              <p className="text-slate-700 mb-6">
                Typical 2026 price range:
              </p>
              <ul className="space-y-3 text-slate-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Small enclosure: ₹2.5 – ₹5 lakh
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Medium industrial room: ₹5 – ₹12 lakh
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">•</span>
                  Heavy-duty acoustic chamber: ₹12 – ₹25 lakh+
                </li>
              </ul>
              <p className="text-slate-600">
                Price depends on size of machine, target dB reduction, material type, ventilation complexity, and
                installation location. <Link href="/get-a-quote" className="text-blue-600 hover:underline font-medium">Request a custom quote</Link> for your project.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Benefits of Installing Ball Mill Acoustic Enclosure
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  'Meets industrial noise compliance',
                  'Protects worker hearing health',
                  'Improves shop-floor communication',
                  'Enhances machine monitoring',
                  'Reduces external noise pollution',
                  'Creates professional factory environment',
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                    <span className="text-2xl">✓</span>
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Professional Manufacturer */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                Why Choose a Professional Manufacturer in India
              </h2>
              <p className="text-slate-700 mb-6">
                Working with an experienced acoustic enclosure manufacturer ensures:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700 mb-6">
                <li>Accurate noise engineering</li>
                <li>Certified insulation materials</li>
                <li>Strong structural fabrication</li>
                <li>Reliable installation support</li>
                <li>Long service life</li>
              </ul>
              <p className="text-slate-700">
                Improperly designed enclosures often fail to deliver real dB reduction, causing wasted investment.
                PHOENIXX SMARTBUILD provides turnkey acoustic solutions with{' '}
                <Link href="/products/sandwich-panels/rockwool-panel" className="text-blue-600 hover:underline">
                  Rockwool
                </Link>{' '}
                and{' '}
                <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-blue-600 hover:underline">
                  PUF panels
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-slate-900 pr-4 faq-answer">{faq.question}</h3>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed faq-answer">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Get Expert Design for Your Ball Mill Soundproof Room
              </h2>
              <p className="text-xl text-emerald-100 mb-8">
                If your factory is facing high noise from ball milling machines, the right industrial soundproof
                enclosure can dramatically improve safety, compliance, productivity, and working comfort.
              </p>
              <p className="text-emerald-100 mb-8">
                Our engineering team provides site noise analysis, custom acoustic design, manufacturing & installation
                across India, and guaranteed performance solutions.
              </p>
              <div className="bg-white/10 rounded-xl p-8 mb-10 text-left">
                <h3 className="font-bold text-white mb-4">Request a Free Noise Assessment & Quotation</h3>
                <p className="text-emerald-100 mb-4">Share your:</p>
                <ul className="list-disc list-inside text-emerald-100 mb-6">
                  <li>Machine size</li>
                  <li>Current noise issue</li>
                  <li>Factory location</li>
                </ul>
                <p className="text-emerald-100 mb-4">and receive a custom soundproof room proposal with:</p>
                <ul className="list-disc list-inside text-emerald-100">
                  <li>Expected dB reduction</li>
                  <li>Design layout</li>
                  <li>Budget estimate</li>
                </ul>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/get-a-quote?interest=soundproof-room"
                  className="rounded-xl bg-white px-8 py-4 font-semibold text-emerald-700 shadow-lg hover:shadow-xl transition-all"
                >
                  Request Free Noise Assessment & Quotation
                </Link>
                <a
                  href="https://wa.me/919328915237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Contact on WhatsApp
                </a>
                <a
                  href="tel:+919328915237"
                  className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Call: +91 93289 15237
                </a>
              </div>
              <p className="mt-8 text-emerald-200 text-sm">
                Contact now to create a safer, quieter industrial environment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
