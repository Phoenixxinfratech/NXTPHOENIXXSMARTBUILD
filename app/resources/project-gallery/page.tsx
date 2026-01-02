import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Project Gallery | PHOENIXX SmartBuild',
  description:
    'Browse PHOENIXX completed projects: Industrial Roofing, Cleanrooms, PUF Panels, and Insulated Wall Systems across Gujarat, India.',
  alternates: {
    canonical: '/resources/project-gallery',
  },
};

const projects = [
  {
    slug: 'reliance-industries-jamnagar',
    title: 'Reliance Industries Limited',
    client: 'Reliance Industries Limited',
    location: 'Jamnagar, Gujarat',
    industry: 'Petrochemical & Refinery',
    category: 'Industrial Roofing',
    projectType: 'Insulated Industrial Enclosures',
    area: '38,000 Sq. Ft.',
    scope: 'Insulated roofing and enclosures for large-scale industrial operations.',
    icon: '🏭',
    image: '/images/projects/gallery/Phoenix-PUF-Panel-Manufacturers6.jpg',
  },
  {
    slug: 'uflex-sanand',
    title: 'Uflex Limited',
    client: 'Uflex Limited',
    location: 'Sanand, Gujarat',
    industry: 'Flexible Packaging',
    category: 'Industrial Roofing',
    projectType: 'Industrial Roofing & Clean Partitions',
    area: '34,000 Sq. Ft.',
    scope: 'Insulated roofing and clean partition systems for packaging production units.',
    icon: '📦',
    image: '/images/projects/gallery/Phoenixx_infratech_Projects188.jpg',
  },
  {
    slug: 'cargill-gandhidham',
    title: 'Cargill India Private Limited',
    client: 'Cargill India Private Limited',
    location: 'Gandhidham, Gujarat',
    industry: 'Agro & Edible Oils',
    category: 'Industrial Roofing',
    projectType: 'Industrial Roofing & Cladding',
    area: '31,200 Sq. Ft.',
    scope: 'Large-span insulated roofing system for processing and storage facilities.',
    icon: '🌾',
    image: '/images/projects/gallery/Phoenixx_infratech_Projects189.jpg',
  },
  {
    slug: 'bunge-gandhidham',
    title: 'Bunge India Private Limited',
    client: 'Bunge India Private Limited',
    location: 'Gandhidham, Gujarat',
    industry: 'Agro Processing',
    category: 'Industrial Roofing',
    projectType: 'PUF Roofing & Wall Panels',
    area: '29,500 Sq. Ft.',
    scope: 'Energy-efficient roofing and wall insulation for industrial operations.',
    icon: '🌻',
    image: '/images/projects/gallery/Phoenix-Infratech-Project-Pics23.jpg',
  },
  {
    slug: 'vyara-tiles-gangad',
    title: 'Vyara Tiles Limited',
    client: 'Vyara Tiles Limited',
    location: 'Gangad, Gujarat',
    industry: 'Ceramic & Building Materials',
    category: 'Industrial Roofing',
    projectType: 'Industrial Roofing & Wall Insulation',
    area: '28,000 Sq. Ft.',
    scope: 'Design, supply & installation of PUF insulated roofing and wall panels for manufacturing facility.',
    icon: '🧱',
    image: '/images/projects/gallery/Industrial-False-Ceiling-PUF-Panel-2.jpg',
  },
  {
    slug: 'motherson-marelli-sanand',
    title: 'Motherson Marelli Systems Limited',
    client: 'Motherson Marelli Systems Limited',
    location: 'Sanand, Gujarat',
    industry: 'Automotive Components',
    category: 'Industrial Roofing',
    projectType: 'Industrial Roofing & Partitions',
    area: '27,500 Sq. Ft.',
    scope: 'Insulated roofing and partition systems for automotive manufacturing plant.',
    icon: '🚗',
    image: '/images/projects/gallery/PHOENIXX_WALL_PUF_PANEL3.jpg',
  },
  {
    slug: 'skf-ahmedabad',
    title: 'SKF India Limited',
    client: 'SKF India Limited',
    location: 'Ahmedabad, Gujarat',
    industry: 'Engineering & Bearings',
    category: 'Wall & Ceiling',
    projectType: 'Wall & Ceiling Panels',
    area: '26,400 Sq. Ft.',
    scope: 'Durable insulated panels for precision manufacturing areas.',
    icon: '⚙️',
    image: '/images/projects/gallery/PUF-Panel-False-Ceiling-1.jpg',
  },
  {
    slug: 'sarhad-dairy-bhuj',
    title: 'Sarhad Dairy',
    client: 'Sarhad Dairy',
    location: 'Bhuj, Gujarat',
    industry: 'Dairy Processing',
    category: 'Cold Storage',
    projectType: 'Cold Area Insulation',
    area: '24,000 Sq. Ft.',
    scope: 'Insulated wall and ceiling panels for temperature-controlled dairy zones.',
    icon: '🥛',
    image: '/images/projects/gallery/Sandwich-PUF-Ceiling-Panel-1.jpg',
  },
  {
    slug: 'pgp-glass-dahej',
    title: 'PGP Glass Private Limited',
    client: 'PGP Glass Private Limited',
    location: 'Dahej, Gujarat',
    industry: 'Glass Packaging',
    category: 'Industrial Roofing',
    projectType: 'Roofing & Cladding',
    area: '23,000 Sq. Ft.',
    scope: 'Industrial roofing and wall cladding for glass packaging plant.',
    icon: '🫙',
    image: '/images/projects/gallery/PHOENIXX_WALL_PUF_PANEL9.jpg',
  },
  {
    slug: 'agro-tech-ankleshwar',
    title: 'Agro Tech Foods Limited',
    client: 'Agro Tech Foods Limited',
    location: 'Ankleshwar, Gujarat',
    industry: 'Food Processing',
    category: 'Hygienic Panels',
    projectType: 'Hygienic Wall & Ceiling Panels',
    area: '22,000 Sq. Ft.',
    scope: 'Food-grade insulated wall and ceiling panels for hygienic processing zones.',
    icon: '🍿',
    image: '/images/projects/gallery/Industrial-False-Ceiling-PUF-Panel-3.jpg',
  },
  {
    slug: 'rotomotive-anand',
    title: 'Rotomotive Powerdrives India Limited',
    client: 'Rotomotive Powerdrives India Limited',
    location: 'Anand, Gujarat',
    industry: 'Industrial Engineering',
    category: 'Industrial Roofing',
    projectType: 'Roofing & Wall Insulation',
    area: '21,600 Sq. Ft.',
    scope: 'Energy-efficient insulated panel systems for manufacturing units.',
    icon: '🔧',
    image: '/images/projects/gallery/PUF-Panel-False-Ceiling-2.jpg',
  },
  {
    slug: 'rajhans-nutriments-surat',
    title: 'Rajhans Nutriments Limited',
    client: 'Rajhans Nutriments Limited',
    location: 'Surat, Gujarat',
    industry: 'Nutraceutical & Food',
    category: 'Hygienic Panels',
    projectType: 'Hygienic Panel Systems',
    area: '20,400 Sq. Ft.',
    scope: 'Clean insulated wall and ceiling panels for food-grade production areas.',
    icon: '💊',
    image: '/images/projects/gallery/Insulated-Ceiling-Panels-1.jpg',
  },
  {
    slug: 'fuji-silvertech-ahmedabad',
    title: 'Fuji Silvertech Concrete Private Limited',
    client: 'Fuji Silvertech Concrete Private Limited',
    location: 'Ahmedabad, Gujarat',
    industry: 'Precast & Infrastructure',
    category: 'Industrial Roofing',
    projectType: 'Insulated Roofing',
    area: '19,000 Sq. Ft.',
    scope: 'High-performance insulated roofing panels for precast manufacturing sheds.',
    icon: '🏗️',
    image: '/images/projects/gallery/Sandwich-PUF-Ceiling-Panel-2.jpg',
  },
  {
    slug: 'aishwarya-dyeing-surat',
    title: 'Aishwarya Dyeing Mills Limited',
    client: 'Aishwarya Dyeing Mills Limited',
    location: 'Surat, Gujarat',
    industry: 'Textile Processing',
    category: 'Industrial Roofing',
    projectType: 'Insulated Roofing & Partitions',
    area: '18,500 Sq. Ft.',
    scope: 'High thermal insulation roofing and internal partitions for controlled production environment.',
    icon: '🧵',
    image: '/images/projects/gallery/PHOENIXX_WALL_PUF_PANEL19.jpg',
  },
  {
    slug: 'narmada-biochem-dahej',
    title: 'Narmada Biochem Limited',
    client: 'Narmada Biochem Limited',
    location: 'Dahej, Gujarat',
    industry: 'Chemicals',
    category: 'Wall & Ceiling',
    projectType: 'Wall & Ceiling Insulation',
    area: '17,500 Sq. Ft.',
    scope: 'Chemical-resistant insulated panel solutions for process areas.',
    icon: '⚗️',
    image: '/images/projects/gallery/Industrial-False-Ceiling-PUF-Panel-4.jpg',
  },
  {
    slug: 'bc-foods-mahua',
    title: 'BC Foods',
    client: 'BC Foods',
    location: 'Mahua, Gujarat',
    industry: 'Food Ingredients',
    category: 'Cleanroom',
    projectType: 'Cleanroom Panels',
    area: '16,800 Sq. Ft.',
    scope: 'Cleanroom wall and ceiling panels for processing and packing areas.',
    icon: '🥫',
    image: '/images/projects/gallery/cleanroom-Manufacture-Supplier-in-Ahmedabad5.jpg',
  },
  {
    slug: 'edkem-pharma-ahmedabad',
    title: 'Edkem Pharmaceuticals Limited',
    client: 'Edkem Pharmaceuticals Limited',
    location: 'Ahmedabad, Gujarat',
    industry: 'Pharmaceuticals',
    category: 'Cleanroom',
    projectType: 'Cleanroom Panels & Doors',
    area: '14,200 Sq. Ft.',
    scope: 'GMP-compliant cleanroom wall, ceiling panels and insulated doors.',
    icon: '💉',
    image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
  },
  {
    slug: 'makson-pharma-surendranagar',
    title: 'Makson Pharmaceuticals',
    client: 'Makson Pharmaceuticals',
    location: 'Surendranagar, Gujarat',
    industry: 'Pharmaceuticals',
    category: 'Cleanroom',
    projectType: 'Cleanroom Panels & Doors',
    area: '13,600 Sq. Ft.',
    scope: 'Turnkey cleanroom envelope including insulated doors.',
    icon: '🏥',
    image: '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects74.jpg',
  },
  {
    slug: 'infocity-club-gandhinagar',
    title: 'Infocity Club & Resort',
    client: 'Infocity Club & Resort',
    location: 'Gandhinagar, Gujarat',
    industry: 'Hospitality',
    category: 'Acoustic Roofing',
    projectType: 'Acoustic & Insulated Roofing',
    area: '12,500 Sq. Ft.',
    scope: 'Thermal and acoustic roofing solutions for enhanced indoor comfort.',
    icon: '🏨',
    image: '/images/projects/gallery/Insulated-Ceiling-Panels-2.jpg',
  },
  {
    slug: 'agrawal-metal-vithlapur',
    title: 'Agrawal Metal Works',
    client: 'Agrawal Metal Works',
    location: 'Vithlapur, Gujarat',
    industry: 'Metal Fabrication',
    category: 'Industrial Roofing',
    projectType: 'Industrial Roofing',
    area: '11,800 Sq. Ft.',
    scope: 'Robust PUF roofing panels for fabrication facility.',
    icon: '🔩',
    image: '/images/projects/gallery/TOP-PUF-PANEL-MANUFACTURE-IN-INDIA.webp',
  },
];

const categories = ['All', 'Industrial Roofing', 'Cleanroom', 'Cold Storage', 'Wall & Ceiling', 'Hygienic Panels'];

// Calculate total area
const totalArea = projects.reduce((sum, p) => {
  const area = parseInt(p.area.replace(/,/g, '').replace(' Sq. Ft.', ''));
  return sum + area;
}, 0);

const stats = [
  { value: '500+', label: 'Projects Completed' },
  { value: `${(totalArea / 100000).toFixed(1)}L+`, label: 'Sq.Ft Built' },
  { value: '300+', label: 'Happy Clients' },
  { value: '20+', label: 'Industries Served' },
];

export default function ProjectGalleryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.03]" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/resources" className="hover:text-white transition-colors">Resources</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Project Gallery</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Project Gallery
              </h1>
              <p className="mt-6 text-lg text-slate-300">
                Explore our portfolio of completed projects across industrial roofing, cleanrooms, 
                cold storage, and insulated panel systems throughout Gujarat.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 bg-slate-800 border-y border-slate-700">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-white border-b sticky top-0 z-20">
          <div className="container-custom">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    category === 'All'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <article
                  key={project.slug}
                  className="group rounded-2xl bg-white border border-slate-200 overflow-hidden hover:shadow-xl hover:border-emerald-200 transition-all"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} - ${project.projectType}`}
                      fill
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={idx < 6}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-medium shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-sm">
                        {project.area}
                      </span>
                    </div>
                    <span className="absolute bottom-4 left-4 w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center text-xl shadow-lg">
                      {project.icon}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-emerald-600 font-medium">{project.projectType}</p>
                    <p className="mt-3 text-sm text-slate-600 line-clamp-2">{project.scope}</p>
                    
                    <div className="mt-4 pt-4 border-t border-slate-100 grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-slate-400 text-xs">Location</p>
                        <p className="font-medium text-slate-700">{project.location}</p>
                      </div>
                      <div>
                        <p className="text-slate-400 text-xs">Industry</p>
                        <p className="font-medium text-slate-700">{project.industry}</p>
                      </div>
                    </div>

                    <Link
                      href={`/resources/project-gallery/${project.slug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Total Projects Info */}
            <div className="mt-12 text-center">
              <p className="text-slate-500">
                Showing {projects.length} featured projects • Total area: <strong className="text-emerald-600">{totalArea.toLocaleString()} Sq. Ft.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="container-custom text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Start Your Project?
            </h2>
            <p className="mt-4 text-emerald-100 max-w-xl mx-auto">
              Let&apos;s discuss how we can bring your infrastructure vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/get-a-quote"
                className="btn-white !text-emerald-600"
              >
                Get a Quote
              </Link>
              <Link
                href="/contact-us"
                className="btn-secondary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
