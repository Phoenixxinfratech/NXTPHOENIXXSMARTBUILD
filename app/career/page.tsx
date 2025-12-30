import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Careers at PHOENIXX | Join Our Team',
  description:
    'Build your career with PHOENIXX SmartBuild. Join our team of engineers, project managers, and industry experts. Explore current openings and opportunities.',
  alternates: {
    canonical: '/career',
  },
};

const openings = [
  {
    title: 'Project Manager - EPC',
    department: 'Projects',
    location: 'Ahmedabad',
    type: 'Full-time',
    experience: '5-8 years',
    description: 'Lead end-to-end EPC project delivery for industrial infrastructure projects.',
  },
  {
    title: 'Design Engineer - Structural',
    department: 'Engineering',
    location: 'Ahmedabad',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Design and analyze PEB structures using industry-standard software.',
  },
  {
    title: 'Sales Executive - Industrial Products',
    department: 'Sales',
    location: 'Pan India',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Drive sales for insulated panels and industrial building products.',
  },
  {
    title: 'Site Supervisor',
    department: 'Projects',
    location: 'Various Locations',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Supervise on-site construction activities and ensure quality standards.',
  },
  {
    title: 'Estimation Engineer',
    department: 'Engineering',
    location: 'Ahmedabad',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Prepare BOQs, cost estimates, and tender documentation.',
  },
];

const benefits = [
  { icon: '💰', title: 'Competitive Salary', desc: 'Industry-standard compensation with performance bonuses' },
  { icon: '📈', title: 'Growth Opportunities', desc: 'Clear career paths and skill development programs' },
  { icon: '🏥', title: 'Health Benefits', desc: 'Medical insurance for employees and family' },
  { icon: '📚', title: 'Learning & Development', desc: 'Training programs and certification support' },
  { icon: '🏠', title: 'Work-Life Balance', desc: 'Flexible policies and leave benefits' },
  { icon: '🎯', title: 'Challenging Projects', desc: 'Work on diverse, cutting-edge infrastructure projects' },
];

const values = [
  { title: 'Innovation', desc: 'We embrace new ideas and technologies' },
  { title: 'Excellence', desc: 'We strive for the highest standards' },
  { title: 'Collaboration', desc: 'We succeed together as a team' },
  { title: 'Integrity', desc: 'We act with honesty and transparency' },
];

export default function CareerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-purple-200">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Career</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-pink-300 text-sm font-medium mb-4">
                Join Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Build Your Career with PHOENIXX
              </h1>
              <p className="mt-6 text-lg text-purple-100 leading-relaxed">
                Join a team of passionate engineers, designers, and industry experts who are 
                building the infrastructure of tomorrow. Grow with us as we expand across India.
              </p>
              <div className="mt-8">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-purple-700 shadow-lg hover:shadow-xl transition-all"
                >
                  View Open Positions
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our Culture */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4">
                  Our Culture
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Why Work at PHOENIXX?
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  At PHOENIXX, we&apos;re building more than infrastructure—we&apos;re building careers. 
                  Our team works on challenging projects that shape industries, from pharmaceutical 
                  cleanrooms to large-scale cold storage facilities.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  We believe in nurturing talent, rewarding excellence, and creating an environment 
                  where everyone can thrive and contribute their best work.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {values.map((value) => (
                    <div key={value.title} className="p-4 rounded-xl bg-slate-50">
                      <h4 className="font-semibold text-slate-900">{value.title}</h4>
                      <p className="text-sm text-slate-500">{value.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="text-9xl opacity-30">👥</span>
                    <p className="mt-4 text-slate-500">Team Photo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Benefits & Perks
              </h2>
              <p className="mt-4 text-slate-600">
                We take care of our team so they can focus on doing great work
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-3xl">{benefit.icon}</span>
                  <h3 className="mt-4 font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section id="openings" className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Current Openings
              </h2>
              <p className="mt-4 text-slate-600">
                Explore opportunities to join our growing team
              </p>
            </div>

            <div className="space-y-4 max-w-4xl mx-auto">
              {openings.map((job) => (
                <div
                  key={job.title}
                  className="rounded-xl border border-slate-200 bg-white p-6 hover:border-purple-300 hover:shadow-md transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                      <p className="mt-1 text-sm text-slate-600">{job.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-medium">
                          {job.department}
                        </span>
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                          📍 {job.location}
                        </span>
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                          ⏰ {job.type}
                        </span>
                        <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs">
                          💼 {job.experience}
                        </span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a
                        href={`mailto:careers@phoenixxsmartbuild.com?subject=Application for ${job.title}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-2.5 font-semibold text-white text-sm shadow hover:shadow-lg transition-all"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600">
                Don&apos;t see a role that fits? We&apos;re always looking for talented people.
              </p>
              <a
                href="mailto:careers@phoenixxsmartbuild.com?subject=General Application"
                className="mt-4 inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
              >
                Send us your resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Make an Impact?
            </h2>
            <p className="mt-4 text-purple-100 max-w-2xl mx-auto">
              Join PHOENIXX and be part of a team that&apos;s building the future of industrial infrastructure.
            </p>
            <div className="mt-8">
              <a
                href="#openings"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-purple-600 shadow-lg hover:shadow-xl transition-all"
              >
                Explore Opportunities
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
