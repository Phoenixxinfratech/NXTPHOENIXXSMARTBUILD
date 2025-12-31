import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';
import { JsonLd } from '@/components/seo/json-ld';
import { generateOrganizationSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Us | Engineering Tomorrow\'s Infrastructure, Today',
  description:
    'PHOENIXX delivers smart, sustainable, and future-ready EPC solutions. From Pre-Engineered Buildings to cold storage and cleanroom solutions, we are India\'s trusted industrial infrastructure partner.',
  alternates: {
    canonical: '/about-us',
  },
};

// Timeline milestones
const milestones = [
  { year: '2013', title: 'Foundation', description: 'PHOENIXX established (formerly KP Cold Chain Solutions)' },
  { year: '2017', title: 'First Turnkey Project', description: 'First turnkey cold storage project delivered successfully' },
  { year: '2020', title: 'Multi-Sector Expansion', description: 'Expansion into multi-sector EPC solutions' },
  { year: '2024', title: 'Industry Recognition', description: 'Recognized as a future-ready EPC infrastructure partner' },
];

// Core values
const values = [
  {
    title: 'Integrity',
    description: 'We operate with honesty, ethics, and accountability in every engagement.',
    icon: '🛡️',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Excellence',
    description: 'We continuously raise benchmarks in design quality, execution, and innovation.',
    icon: '⭐',
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Trust',
    description: 'We deliver on our commitments and build partnerships that last beyond projects.',
    icon: '🤝',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Transparency',
    description: 'Clear communication and accountability guide our decisions and processes.',
    icon: '💎',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Relationships',
    description: 'We believe long-term success is built through collaboration and mutual growth.',
    icon: '❤️',
    color: 'from-rose-500 to-pink-600',
  },
];

// Core strengths
const strengths = [
  { title: 'Complete EPC Solutions', description: 'From concept and design to execution and commissioning', icon: '🏗️' },
  { title: 'Custom Industrial Design', description: 'Facilities tailored for cold chain, healthcare, manufacturing, and regulated environments', icon: '📐' },
  { title: 'In-House Manufacturing', description: 'High-quality Sandwich PUF & PIR panels ensuring consistency and performance', icon: '🏭' },
  { title: 'Efficient Project Execution', description: 'Strong control on timelines, budgets, and resources', icon: '⏱️' },
  { title: 'Safety & Compliance', description: 'Adherence to applicable national and international standards', icon: '✅' },
  { title: 'Sustainability Focus', description: 'Energy-efficient systems designed for long-term operational savings', icon: '🌱' },
];

// Process steps
const processSteps = [
  { step: 1, title: 'Feasibility Study & Analysis', description: 'Technical evaluation, site assessment, and budget alignment' },
  { step: 2, title: 'Tailored Planning & Design', description: 'Industry-specific solutions optimized for efficiency and sustainability' },
  { step: 3, title: 'Engineering & Procurement', description: 'Precision engineering supported by reliable material sourcing' },
  { step: 4, title: 'Shop Drawings & Estimation', description: 'Detailed drawings, accurate BOQs, and execution planning' },
  { step: 5, title: 'Installation & Commissioning', description: 'Supervised execution with strict quality and safety controls' },
];

// Leadership team
const leadership = [
  {
    name: 'Piyush Gupta',
    role: 'Chief Executive Officer',
    bio: 'A visionary leader with extensive experience in industrial infrastructure and EPC delivery. Piyush drives PHOENIXX\'s mission of building smart, sustainable, and scalable infrastructure solutions.',
    quote: 'We don\'t just deliver projects; we deliver trust.',
    image: '/images/team/piyush-gupta.jpg',
  },
  {
    name: 'Harshad Gupta',
    role: 'Head of Operations',
    bio: 'An execution specialist focused on precision project delivery, operational efficiency, and customer satisfaction across diverse industrial sectors.',
    quote: 'Execution with precision defines who we are.',
    image: '/images/team/harshad-gupta.jpg',
  },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: '/about-us' },
    ],
  };

  const organizationSchema = generateOrganizationSchema();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={organizationSchema} />

        <AISummaryBlock
          summary="PHOENIXX (formerly KP Cold Chain Solutions, founded 2013) is India's trusted EPC partner for Pre-Engineered Buildings (PEB), Cold Storage Facilities, Cleanroom Solutions, and Turnkey Industrial Projects. Led by CEO Piyush Gupta and Operations Head Harshad Gupta, PHOENIXX delivers smart, sustainable infrastructure with complete EPC solutions, in-house manufacturing of PUF & PIR panels, and strong focus on safety, compliance, and sustainability."
          keywords={['about PHOENIXX', 'EPC partner', 'industrial infrastructure', 'PEB', 'cold storage', 'cleanroom']}
        />

        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-1/3 -left-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Video Placeholder Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />

          <div className="container-custom relative z-10 py-20">
            <nav className="mb-8 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About Us</span>
            </nav>

            <div className="max-w-4xl">
              {/* Tagline */}
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-400 mb-6">
                <span className="font-semibold">Smart. Sustainable. Trusted.</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                Engineering Tomorrow&apos;s Infrastructure,{' '}
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Today
                </span>
              </h1>

              <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed">
                PHOENIXX delivers smart, sustainable, and future-ready EPC solutions that enable 
                industries to scale with confidence, efficiency, and compliance.
              </p>

              <div className="mt-10">
                <a
                  href="#who-we-are"
                  className="btn-primary"
                >
                  Explore Our Journey
                  <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Gradient Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        </section>

        {/* ========== WHO WE ARE SECTION ========== */}
        <section id="who-we-are" className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                  Who We Are
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Building Foundations for Progress & Growth
                </h2>
                <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    At <strong className="text-slate-900">PHOENIXX Infratech Projects</strong>, infrastructure is more than 
                    construction—it is a foundation for progress, performance, and long-term growth.
                  </p>
                  <p>
                    Founded with a vision to redefine industrial infrastructure delivery, PHOENIXX has evolved into a 
                    trusted EPC partner for <strong>Pre-Engineered Buildings (PEB)</strong>, <strong>Cold Storage Facilities</strong>, 
                    <strong> Cleanroom Solutions</strong>, <strong>Ceiling & Partition Systems</strong>, and 
                    <strong> Turnkey Industrial Projects</strong> across India.
                  </p>
                  <p>
                    Our growth has been guided by three core principles: <em>engineering precision</em>, 
                    <em> sustainable design</em>, and <em>uncompromising trust</em>. From our early cold chain projects 
                    to complex multi-sector EPC assignments, we have consistently delivered solutions that balance 
                    speed, quality, and lifecycle performance.
                  </p>
                </div>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-emerald-500 to-teal-500" />
                <div className="space-y-8">
                  {milestones.map((milestone) => (
                    <div key={milestone.year} className="relative pl-20">
                      <div className="absolute left-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/30">
                        {milestone.year}
                      </div>
                      <div className="pt-2">
                        <h3 className="text-lg font-bold text-slate-900">{milestone.title}</h3>
                        <p className="mt-1 text-slate-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== VISION & MISSION SECTION ========== */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Vision */}
              <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-3xl mb-6 shadow-lg">
                    🎯
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Our Vision</h2>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    To be India&apos;s leading provider of industrial and cold chain infrastructure solutions—recognized 
                    for sustainable practices, advanced engineering, and the ability to transform complex challenges 
                    into reliable, future-ready facilities.
                  </p>
                </div>
              </div>

              {/* Mission */}
              <div className="relative rounded-2xl bg-white/5 border border-white/10 p-8 md:p-10 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-3xl mb-6 shadow-lg">
                    🚀
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Our Mission</h2>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    To empower businesses with high-performance, eco-conscious infrastructure solutions that enhance 
                    efficiency, resilience, and long-term value—through engineering excellence, customer focus, 
                    and continuous innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== VALUES SECTION ========== */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-medium mb-4">
                Our Values
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                The Principles That Define PHOENIXX
              </h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group relative rounded-2xl bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-2xl shadow-lg mb-4`}>
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== STRENGTHS SECTION ========== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              <div className="lg:sticky lg:top-24">
                <span className="inline-block px-4 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                  Core Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Your Trusted EPC Partner for Industrial Infrastructure
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  PHOENIXX brings together engineering expertise, execution capability, and domain knowledge 
                  to deliver dependable infrastructure solutions.
                </p>

                {/* Commitment Cards */}
                <div className="mt-8 grid gap-4">
                  {[
                    { title: 'Timeliness', desc: 'Structured planning and disciplined execution' },
                    { title: 'Cost Efficiency', desc: 'Optimized solutions without compromising quality' },
                    { title: 'Technical Reliability', desc: 'Infrastructure built to perform over its full lifecycle' },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                      <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                        ✓
                      </span>
                      <div>
                        <h4 className="font-semibold text-slate-900">{item.title}</h4>
                        <p className="text-sm text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strengths Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                {strengths.map((strength) => (
                  <div
                    key={strength.title}
                    className="rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg hover:border-emerald-200 transition-all"
                  >
                    <span className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-2xl mb-4">
                      {strength.icon}
                    </span>
                    <h3 className="font-bold text-slate-900">{strength.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{strength.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROCESS SECTION ========== */}
        <section className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-violet-100 text-violet-700 text-sm font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Excellence in Execution
              </h2>
              <p className="mt-4 text-slate-600">
                Every PHOENIXX project follows a proven methodology designed to reduce risk, 
                ensure compliance, and deliver predictable outcomes.
              </p>
            </div>

            {/* Process Steps - Horizontal */}
            <div className="relative">
              {/* Connector Line */}
              <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500" />
              
              <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
                {processSteps.map((step) => (
                  <div key={step.step} className="relative text-center">
                    <div className="inline-flex w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 items-center justify-center text-2xl font-bold text-white shadow-lg shadow-violet-500/30 mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========== LEADERSHIP SECTION ========== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                The People Behind PHOENIXX
              </h2>
              <p className="mt-4 text-slate-600">
                PHOENIXX is led by professionals who combine strategic vision with hands-on execution expertise.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {leadership.map((leader) => (
                <div
                  key={leader.name}
                  className="relative rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 p-8 overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-2xl" />
                  
                  {/* Photo Placeholder */}
                  <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-4xl text-white shadow-lg mb-6">
                    👤
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-amber-600 font-medium">{leader.role}</p>
                  
                  <p className="mt-4 text-slate-600 leading-relaxed">{leader.bio}</p>
                  
                  {/* Quote */}
                  <blockquote className="mt-6 relative">
                    <div className="absolute -left-2 -top-2 text-4xl text-amber-200">&ldquo;</div>
                    <p className="pl-6 text-slate-700 italic font-medium">{leader.quote}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="relative py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Let&apos;s Build the Future, Together
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
              Whether you&apos;re planning a cold storage facility, a cleanroom, or a large-scale industrial project, 
              PHOENIXX is your partner for smart, sustainable, and future-ready infrastructure.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact-us"
                className="btn-primary"
              >
                Contact Us
              </Link>
              <Link
                href="/resources/project-gallery"
                className="btn-secondary"
              >
                Explore Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
