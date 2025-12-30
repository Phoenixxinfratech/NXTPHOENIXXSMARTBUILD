import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';

export const metadata: Metadata = {
  title: 'Our Clientele',
  description:
    'Trusted by industry leaders including Coca-Cola, Amul, Torrent Pharmaceuticals, Ford Motors, and 300+ more. View our client list across Food & Beverages, Dairy, Pharma, Automotive, and Cold Chain industries.',
  alternates: {
    canonical: '/clientele',
  },
};

// Client data organized by industry with logos
const clientsByIndustry = [
  {
    category: 'Food, Beverages & Confectionery',
    icon: '🍫',
    gradient: 'from-amber-500 to-orange-600',
    showLogos: true,
    clients: [
      { name: 'Coca-Cola', logo: 'coca-cola' },
      { name: 'Amul Chocolate', logo: 'amul' },
      { name: 'Hershey Syrup', logo: 'hershey' },
      { name: 'Cargill Foods', logo: 'cargill' },
      { name: 'Bunge India', logo: 'bunge' },
      { name: 'Agro Tech Foods Ltd.', logo: 'agro-tech' },
      { name: 'Balaji Wafers Pvt. Ltd.', logo: 'balaji' },
      { name: 'Tirupati Balaji Foods', logo: 'tirupati' },
      { name: 'Iscon Balaji Foods', logo: 'iscon' },
      { name: 'Makson (Confectionery)', logo: 'makson' },
      { name: 'Schmitten Chocolates', logo: 'schmitten' },
      { name: 'Hot & Spicy Namkeen', logo: 'hot-spicy' },
      { name: 'Aero Roast Coffee', logo: 'aero-roast' },
      { name: 'Telaa Coffee & Tea', logo: 'telaa' },
    ],
  },
  {
    category: 'Dairy Processing & Milk Federations',
    icon: '🥛',
    gradient: 'from-sky-500 to-blue-600',
    showLogos: true,
    clients: [
      { name: 'Amul Dairy', logo: 'amul-dairy' },
      { name: 'Mother Dairy', logo: 'mother-dairy' },
      { name: 'NDDB', logo: 'nddb' },
      { name: 'Banas Dairy', logo: 'banas' },
      { name: 'Sumul Dairy', logo: 'sumul' },
      { name: 'Sarhad Dairy', logo: 'sarhad' },
      { name: 'ABC Food Process', logo: 'abc' },
    ],
  },
  {
    category: 'Hospitality, Clubs & Commercial',
    icon: '🏨',
    gradient: 'from-violet-500 to-purple-600',
    showLogos: true,
    clients: [
      { name: 'Fortune Landmark', logo: 'fortune' },
      { name: 'Hotel Fern – Rajkot', logo: 'fern' },
      { name: 'West Inn Hotel', logo: 'west-inn' },
      { name: 'United Yogi LLP', logo: 'united-yogi' },
      { name: 'Info City Club & Resort', logo: 'info-city' },
    ],
  },
  {
    category: 'Pharmaceuticals & Life Sciences',
    icon: '💊',
    gradient: 'from-rose-500 to-pink-600',
    showLogos: true,
    clients: [
      { name: 'Torrent Pharmaceuticals', logo: 'torrent' },
      { name: 'Intas Pharmaceuticals', logo: 'intas' },
      { name: 'Amneal Pharmaceuticals', logo: 'amneal' },
      { name: 'Claris Life Sciences', logo: 'claris' },
      { name: 'Dishman Carbogen Amcis', logo: 'dishman' },
      { name: 'Lincoln Pharmaceuticals', logo: 'lincoln' },
      { name: 'Makson Pharmaceuticals', logo: 'makson-pharma' },
      { name: 'Renown Pharmaceuticals', logo: 'renown' },
      { name: 'Mahalaxmi Pharmaceuticals', logo: 'mahalaxmi' },
      { name: 'Pellucid Lifesciences', logo: 'pellucid' },
      { name: 'Brichem Sciences', logo: 'brichem' },
    ],
  },
  {
    category: 'Packaging, Industrial & Manufacturing',
    icon: '🏭',
    gradient: 'from-slate-500 to-zinc-600',
    showLogos: true,
    clients: [
      { name: 'Uflex Ltd.', logo: 'uflex' },
      { name: 'PGP Glass', logo: 'pgp' },
      { name: 'IFGL Refractories', logo: 'ifgl' },
      { name: 'Jaquar Sanitaryware', logo: 'jaquar' },
      { name: 'Vyara Tiles Limited', logo: 'vyara' },
      { name: 'Prabhu Krupa Packaging', logo: 'prabhu-krupa' },
      { name: 'Aqua Machineries', logo: 'aqua' },
      { name: 'Aaiswarya Dyeing Mills', logo: 'aaiswarya' },
      { name: 'Denasa Buildcon', logo: 'denasa' },
      { name: 'Kalpataru Doors', logo: 'kalpataru' },
    ],
  },
  {
    category: 'Automobile, Engineering & Electrical',
    icon: '🚗',
    gradient: 'from-red-500 to-rose-600',
    showLogos: true,
    clients: [
      { name: 'Ford Motors', logo: 'ford' },
      { name: 'SKF Bearings', logo: 'skf' },
      { name: 'Marelli Motherson', logo: 'marelli' },
      { name: 'L&T', logo: 'lnt' },
      { name: 'Hager Electricals', logo: 'hager' },
      { name: 'Rotomotive Powerdrives', logo: 'rotomotive' },
      { name: 'Rotomag', logo: 'rotomag' },
    ],
  },
  {
    category: 'Agriculture, Seeds & Agro Chemicals',
    icon: '🌾',
    gradient: 'from-green-500 to-emerald-600',
    showLogos: true,
    clients: [
      { name: 'Dinkar Seeds', logo: 'dinkar' },
      { name: 'Dinkal Agro Chemicals', logo: 'dinkal' },
      { name: 'Swan Medicot LLP', logo: 'swan' },
      { name: 'Brahmakumaris', logo: 'brahmakumaris' },
    ],
  },
  {
    category: 'Cold Storage & Cold Chain Infrastructure',
    icon: '❄️',
    gradient: 'from-cyan-500 to-teal-600',
    showLogos: false,
    clients: [
      { name: 'Madhuvan Cold Storage' },
      { name: 'Tirupati Cold Storage' },
      { name: 'Real Cold Storage' },
      { name: 'Tulsi Cold Storage' },
      { name: 'Ronaq Cold Storage' },
      { name: 'Keshav Cold Storage' },
      { name: 'Brahmani Cold Storage' },
      { name: 'Gayatri Cold Storage' },
      { name: 'SKM Cold Storage' },
      { name: 'Tirupati Logistics' },
    ],
  },
];

// Featured clients for the top section
const featuredClients = [
  { name: 'Coca-Cola', initials: 'CC', color: 'bg-red-500' },
  { name: 'Amul', initials: 'AM', color: 'bg-yellow-500' },
  { name: 'Ford Motors', initials: 'FM', color: 'bg-blue-600' },
  { name: 'Torrent Pharma', initials: 'TP', color: 'bg-rose-500' },
  { name: 'Mother Dairy', initials: 'MD', color: 'bg-sky-500' },
  { name: 'SKF', initials: 'SKF', color: 'bg-blue-800' },
  { name: 'Intas Pharma', initials: 'IP', color: 'bg-pink-500' },
  { name: 'Uflex', initials: 'UF', color: 'bg-slate-700' },
  { name: 'Hershey', initials: 'HS', color: 'bg-amber-700' },
  { name: 'L&T', initials: 'L&T', color: 'bg-indigo-600' },
  { name: 'Jaquar', initials: 'JQ', color: 'bg-emerald-600' },
  { name: 'NDDB', initials: 'ND', color: 'bg-cyan-600' },
];

const testimonials = [
  {
    quote: 'PHOENIXX delivered our cleanroom project on time and within budget. Their expertise in pharmaceutical facility construction is unmatched.',
    author: 'Dr. Rajesh Kumar',
    role: 'Director',
    company: 'Torrent Pharmaceuticals',
  },
  {
    quote: 'The cold storage facility built by PHOENIXX has significantly improved our supply chain efficiency. Excellent quality and service.',
    author: 'Amit Sharma',
    role: 'Operations Head',
    company: 'Amul Dairy',
  },
  {
    quote: 'We have been working with PHOENIXX for over 5 years. Their consistent quality and reliability make them our preferred partner.',
    author: 'Priya Patel',
    role: 'Plant Manager',
    company: 'Balaji Wafers Pvt. Ltd.',
  },
];

export default function ClientelePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Clientele', item: '/clientele' },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />

        <AISummaryBlock
          summary="PHOENIXX is trusted by 300+ clients across industries including Coca-Cola, Amul, Torrent Pharmaceuticals, Ford Motors, Intas Pharmaceuticals, Mother Dairy, Uflex, SKF Bearings, and many more. We serve Food & Beverages, Dairy Processing, Pharmaceuticals, Automobile, Industrial Manufacturing, and Cold Storage sectors."
          keywords={['clients', 'Coca-Cola', 'Amul', 'Torrent Pharmaceuticals', 'Ford Motors', 'cold storage']}
        />

        {/* Page Header */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          <div className="container-custom relative">
            <nav className="mb-4 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Clientele</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Our Clientele</h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Trusted by industry leaders across sectors. Our success is 
              measured by the success of our clients.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-b bg-slate-50">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-600">300+</p>
                <p className="mt-2 text-sm text-slate-600">Happy Clients</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">8+</p>
                <p className="mt-2 text-sm text-slate-600">Industries Served</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">25+</p>
                <p className="mt-2 text-sm text-slate-600">Years of Trust</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-600">100%</p>
                <p className="mt-2 text-sm text-slate-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Client Logos */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Trusted By Industry Leaders</h2>
            <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
              Leading manufacturers, processors, and infrastructure developers rely on PHOENIXX 
              for mission-critical projects where performance, compliance, and timelines matter.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {featuredClients.map((client) => (
                <div
                  key={client.name}
                  className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                >
                  {/* Logo placeholder with brand color */}
                  <div className={`w-20 h-20 rounded-xl ${client.color} flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform`}>
                    {client.initials}
                  </div>
                  <span className="text-sm font-medium text-slate-700 text-center group-hover:text-blue-600 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 mt-8 text-sm italic">
              Logo images can be added at: <code className="bg-slate-100 px-2 py-1 rounded">/public/images/clients/</code>
            </p>
          </div>
        </section>

        {/* Clients by Industry */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Clients Across Industries</h2>
              <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
                Key Customers Who Have Trusted Us Since Inception
              </p>
            </div>

            <div className="space-y-8">
              {clientsByIndustry.map((industry) => (
                <div key={industry.category} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  {/* Category Header */}
                  <div className={`bg-gradient-to-r ${industry.gradient} px-6 py-4`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{industry.icon}</span>
                      <h3 className="text-xl font-bold text-white">{industry.category}</h3>
                    </div>
                  </div>

                  {/* Clients Grid */}
                  <div className="p-6">
                    {industry.showLogos ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                        {industry.clients.map((client) => (
                          <div
                            key={client.name}
                            className="group flex flex-col items-center gap-3 p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md hover:border-blue-300 transition-all duration-200"
                          >
                            {/* Logo placeholder */}
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.gradient} bg-opacity-10 flex items-center justify-center text-2xl font-bold text-white shadow group-hover:scale-105 transition-transform`}>
                              {client.name.charAt(0)}
                            </div>
                            <span className="text-xs font-medium text-slate-700 text-center leading-tight group-hover:text-blue-600 transition-colors">
                              {client.name}
                            </span>
                          </div>
                        ))}
                        {/* And many more */}
                        <div className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50/50">
                          <span className="text-2xl text-slate-400">+</span>
                          <span className="text-xs font-medium text-slate-500 text-center">
                            And many more...
                          </span>
                        </div>
                      </div>
                    ) : (
                      /* Text-only list for Cold Storage */
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {industry.clients.map((client) => (
                          <div
                            key={client.name}
                            className="px-4 py-3 rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 hover:from-cyan-50 hover:to-cyan-100 transition-colors border border-slate-200 hover:border-cyan-300"
                          >
                            <span className="text-sm font-medium text-slate-700">{client.name}</span>
                          </div>
                        ))}
                        <div className="px-4 py-3 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300">
                          <span className="text-sm font-medium text-slate-500">And many more...</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">What Our Clients Say</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, idx) => (
                <blockquote key={idx} className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg relative border border-slate-100">
                  <div className="absolute -top-4 left-6 text-7xl text-blue-200 font-serif">&ldquo;</div>
                  <p className="relative text-slate-600 pt-4 leading-relaxed">{testimonial.quote}</p>
                  <footer className="mt-6 pt-6 border-t border-slate-200">
                    <cite className="not-italic font-bold text-slate-900">{testimonial.author}</cite>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Join Our Growing List of Satisfied Clients</h2>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Let us show you why leading organizations trust PHOENIXX for their 
              infrastructure needs.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/get-a-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white text-blue-600 px-8 py-4 font-semibold hover:bg-white/90 shadow-lg hover:shadow-xl transition-all"
              >
                Get a Quote
              </Link>
              <Link
                href="/resources/project-gallery"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-transparent px-8 py-4 font-semibold hover:bg-white/10 transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
