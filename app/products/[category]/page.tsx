import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import { AISummaryBlock } from '@/components/ai/ai-summary-block';

// Sandwich Panels specific data
const sandwichPanelsData = {
  title: 'Sandwich Panels',
  seoTitle: 'Sandwich Panels — Insulated Panels for Energy-Efficient, Fire-Safe & Durable Infrastructure | PHOENIXX India',
  tagline: 'Premium Insulated Sandwich Panels Manufacturer in India',
  description: 'Leading manufacturer of high-performance Sandwich PUF Panels, PIR Panels, Rockwool Panels, and insulated panel systems in India.',
  seoDescription: 'PHOENIXX manufactures PUF, PIR, Rockwool, Roofing, Wall & Ceiling, Cold Storage & Marine Sandwich Panels in India. ISO certified. 150+ projects. Get free quote.',
  heroImages: [
    '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL1.jpg',
    '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-2.jpg',
    '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL1.jpg',
  ],
  aiSummary: 'PHOENIXX manufactures Sandwich Panels (PUF, PIR, Rockwool, Roofing, Wall & Ceiling, Cold Storage, Marine) in Ahmedabad, India. Thermal conductivity: 0.022 W/mK. Applications: cold storage, cleanrooms, prefab buildings, industrial sheds, warehouses. Stats: 150+ projects, 100+ clients, 18+ years experience, up to 30% energy savings. Thickness: 30-150mm. Fire rating: B3/B2. ISO certified manufacturer.',
  keywords: [
    'sandwich panels',
    'sandwich puf panels',
    'puf sandwich panel',
    'insulated sandwich panels',
    'puf panels',
    'pir panels',
    'rockwool panels',
    'cold storage panels',
    'roofing sandwich panels',
    'wall ceiling sandwich panels',
    'sandwich panel manufacturer india',
    'marine puf panels',
  ],
  gradient: 'from-blue-600 to-cyan-600',
  stats: [
    { value: '150+', label: 'Projects Delivered' },
    { value: '100+', label: 'Happy Clients' },
    { value: '24+', label: 'Product Variants' },
    { value: '20+', label: 'Industries Served' },
    { value: '18+', label: 'Years Experience' },
    { value: '30%', label: 'Energy Savings' },
  ],
  benefits: [
    {
      icon: '⚡',
      title: 'Energy Efficiency',
      description: 'Thermal conductivity as low as 0.022 W/mK delivers up to 30% energy savings on cooling and heating costs.',
    },
    {
      icon: '🛡️',
      title: 'Durability & Long Life',
      description: 'Weather-resistant, corrosion-proof panels with 25+ years service life in demanding environments.',
    },
    {
      icon: '🚀',
      title: 'Quick Installation',
      description: 'Lightweight interlocking system reduces construction time by 40-50% vs conventional methods.',
    },
    {
      icon: '💰',
      title: 'Cost Effectiveness',
      description: 'High ROI with low maintenance costs and reduced operational expenses over the panel lifecycle.',
    },
    {
      icon: '🌿',
      title: 'Eco-Friendly',
      description: 'CFC-free insulation, recyclable materials, and energy efficiency support sustainability goals.',
    },
  ],
  products: [
    {
      slug: 'pir-panel',
      name: 'PIR Sandwich Panel',
      description: 'Premium fire-resistant panels with Class B-s1,d0 rating for high-safety applications.',
      keywords: 'PIR panels, polyisocyanurate panels, fire rated insulated panels',
      image: '/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-2.jpg',
      link: '/products/sandwich-panels/pir-panel',
    },
    {
      slug: 'sandwich-puf-panel',
      name: 'Sandwich PUF Panel',
      description: 'Cost-effective polyurethane foam panels for industrial and commercial insulation.',
      keywords: 'Sandwich PUF panels, PUF sandwich panel, polyurethane panels',
      image: '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL1.jpg',
      link: '/products/sandwich-panels/sandwich-puf-panel',
    },
    {
      slug: 'rockwool-panel',
      name: 'Rockwool Panel',
      description: 'Non-combustible mineral wool panels for fire-critical and acoustic applications.',
      keywords: 'Rockwool panels, mineral wool panels, fire resistant panels',
      image: '/images/products/sandwich-panels/RockWool-panel/PHOENIXX_ROCHWOOL_PANEL1.jpg',
      link: '/products/sandwich-panels/rockwool-panel',
    },
    {
      slug: 'roofing-puf-panel',
      name: 'Roofing PUF Panel',
      description: 'Profiled insulated roofing panels optimized for weather resistance and drainage.',
      keywords: 'Roofing PUF panels, insulated roofing, roof sandwich panels',
      image: '/images/products/sandwich-panels/roofing-panel/PHOENIXX_ROOFING_PANEL5.jpg',
      link: '/products/sandwich-panels/roofing-puf-panel',
    },
    {
      slug: 'wall-ceiling-panel',
      name: 'Wall & Ceiling Panel',
      description: 'Smooth-finish panels for interior walls and ceilings in GMP environments.',
      keywords: 'Wall panels, ceiling panels, cleanroom panels, GMP panels',
      image: '/images/products/sandwich-panels/wall-ceiling-panel/Industrial-False-Ceiling-PUF-Panel-2.jpg',
      link: '/products/sandwich-panels/wall-ceiling-panel',
    },
    {
      slug: 'cold-storage-panel',
      name: 'Cold Storage Panel',
      description: 'High-density insulated panels for cold rooms, freezers, and temperature-controlled storage.',
      keywords: 'Cold storage panels, cold room panels, freezer panels',
      image: '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-1.jpg',
      link: '/solutions/cold-storage-construction',
    },
    {
      slug: 'marine-puf-panel',
      name: 'Marine PUF Panel',
      description: 'Corrosion-resistant panels for marine and coastal applications.',
      keywords: 'Marine PUF panels, coastal panels, corrosion resistant panels',
      image: '/images/products/sandwich-panels/puf-panel/PHOENIXX_WALL_PUF_PANEL3.jpg',
      link: '/products/sandwich-panels/sandwich-puf-panel',
    },
  ],
  features: [
    { title: 'Thermal Insulation', value: 'K value 0.022 W/mK ±0.002 for superior energy efficiency' },
    { title: 'Fire Resistance', value: 'DIN 4102 B3 standard, B2 with PIR core option' },
    { title: 'Sound Insulation', value: 'Acoustic rating up to Rw 30-45 dB' },
    { title: 'Load-Bearing Strength', value: 'High structural integrity for industrial applications' },
    { title: 'Customization', value: 'Custom thickness (30-200mm), coatings, and RAL colors' },
  ],
  specifications: {
    thickness: { wall: '30–150 mm', roofing: '10–150 mm' },
    core: 'PUF / PIR / Rockwool',
    outerSkin: 'PPGI, PPGL, SS304, Aluminum',
    thermalConductivity: '0.022 W/mK ± 0.002',
    strength: { tensile: '150 kPa', compression: '100 kPa', shear: '100 kPa' },
    fireRating: 'B3 (B2/PIR optional)',
    width: '1000 / 1150 mm',
    length: 'Standard 8–20 ft, Custom 3–15 m',
    colors: ['Off-white', 'Sky Blue', 'Mist Green', 'Royal Blue', 'Brick Red', 'Grey'],
  },
  applications: [
    {
      question: 'Can sandwich panels be used in commercial buildings?',
      answer: 'Yes. Sandwich panels are ideal for commercial buildings including offices, showrooms, malls, and retail spaces. They provide excellent thermal insulation, quick installation, and aesthetic finishes.',
    },
    {
      question: 'Are they suitable for industrial sheds and warehouses?',
      answer: 'Absolutely. Our roofing and wall panels are widely used in industrial sheds, factories, and warehouses. They offer weather resistance, thermal efficiency, and large-span capabilities.',
    },
    {
      question: 'Are they ideal for cold storage and freezers?',
      answer: 'Yes. High-density PUF and PIR panels with 80-150mm thickness are specifically designed for cold storage (-40°C to +15°C), maintaining temperature integrity and reducing energy costs.',
    },
    {
      question: 'Can sandwich panels be used in prefab housing?',
      answer: 'Yes. Lightweight sandwich panels are perfect for prefab houses, site offices, and modular buildings. They enable rapid construction with excellent insulation and structural stability.',
    },
    {
      question: 'Are walkable and non-walkable ceiling panels available?',
      answer: 'Yes. We offer both walkable ceiling panels (load capacity up to 200 kg/m²) for maintenance access and non-walkable panels for standard ceiling applications in cleanrooms and industrial facilities.',
    },
  ],
  testimonial: {
    quote: 'PHOENIXX sandwich panels reduced our cold storage energy bills by 28%. The installation was fast, and the quality is exceptional. Highly recommended for any temperature-controlled facility.',
    author: 'Operations Director',
    company: 'Leading Food Processing Company, Gujarat',
    rating: 4.9,
    reviews: 100,
  },
  industries: ['Pharmaceutical', 'Food Processing', 'Automotive', 'Electronics', 'Hospitality', 'Cold Chain', 'Healthcare'],
  faqs: [
    // General
    { question: 'What are sandwich PUF panels?', answer: 'Sandwich PUF panels are insulated building panels consisting of two metal sheets (PPGI/PPGL) bonded to a polyurethane foam (PUF) core. They provide excellent thermal insulation, structural strength, and are used in walls, roofs, and cold storage construction.' },
    { question: 'What is the difference between PUF and PIR panels?', answer: 'PUF (Polyurethane Foam) offers excellent thermal insulation at lower cost. PIR (Polyisocyanurate) provides superior fire resistance with Class B-s1,d0 rating and slightly better thermal performance (0.022 vs 0.024 W/mK). Choose PIR for fire-critical applications.' },
    { question: 'What is the lifespan of sandwich panels?', answer: 'Quality sandwich panels from PHOENIXX have a service life of 25-30 years when properly installed and maintained. The steel skins are protected with high-quality coatings against corrosion and UV damage.' },
    // Technical
    { question: 'What is the thermal conductivity of PUF panels?', answer: 'PHOENIXX PUF panels have a thermal conductivity of 0.024 W/mK, while PIR panels achieve 0.022 W/mK. Lower values mean better insulation. This results in up to 30% energy savings in heating/cooling costs.' },
    { question: 'Are sandwich panels fire resistant?', answer: 'Yes. Standard PUF panels meet DIN 4102 B3 fire rating. For enhanced fire safety, PIR panels achieve Class B-s1,d0 rating with low smoke emission. Rockwool panels are non-combustible (A1/A2 rated).' },
    { question: 'What panel thickness is recommended for cold storage?', answer: 'For cold storage: 80-100mm for +2°C to +8°C (chiller), 100-120mm for -18°C to -25°C (freezer), and 150mm+ for -35°C to -40°C (deep freeze). Thickness depends on ambient conditions and required R-value.' },
    { question: 'Can panels withstand heavy loads?', answer: 'Yes. Our panels have tensile strength of 150 kPa, compression strength of 100 kPa, and shear strength of 100 kPa. Walkable ceiling panels support loads up to 200 kg/m² for maintenance access.' },
    // Applications
    { question: 'Which sandwich panel is best for cold storage?', answer: 'For cold storage, we recommend PIR panels or high-density PUF panels (40-42 kg/m³) in 80-150mm thickness. They provide optimal thermal insulation, moisture resistance, and meet food safety standards.' },
    { question: 'Can sandwich panels be used for residential housing?', answer: 'Yes. Sandwich panels are increasingly used in prefab homes, farmhouses, and affordable housing projects. They offer quick construction, good insulation, and cost-effectiveness compared to traditional building methods.' },
    { question: 'Are these panels suitable for cleanrooms?', answer: 'Yes. Our wall and ceiling panels with smooth, hygienic finishes are ideal for ISO Class 5-8 cleanrooms. They meet GMP/FDA requirements for pharmaceutical, biotech, and food processing facilities.' },
    { question: 'Can panels be used in coastal/marine environments?', answer: 'Yes. We offer marine-grade panels with enhanced corrosion resistance, stainless steel skins, and specialized coatings suitable for coastal areas, shipyards, and offshore applications.' },
    // Buying
    { question: 'What is the price of sandwich PUF panels?', answer: 'Sandwich PUF panel prices range from ₹800-2,500 per sq.m depending on thickness (30-150mm), steel grade, coating type, and quantity. Contact us for a customized quotation based on your project requirements.' },
    { question: 'What is the lead time for delivery?', answer: 'Standard panels: 7-10 working days. Custom specifications: 15-20 working days. Large projects: Schedule-based delivery. We serve pan-India with logistics support to 20+ cities.' },
    { question: 'What warranty do you provide?', answer: 'We provide comprehensive warranty: 10 years on panel insulation performance, 5 years on coating (PE), 15 years on coating (PVDF), and 1 year on workmanship for installation projects.' },
    { question: 'Do you provide installation services?', answer: 'Yes. PHOENIXX offers complete turnkey solutions including design consultation, manufacturing, delivery, and professional installation by trained teams. We ensure proper alignment, sealing, and quality assurance.' },
    { question: 'Can I get samples before ordering?', answer: 'Yes. We provide product samples for evaluation. Contact our sales team to request samples of specific panel types, thicknesses, and finishes for your review.' },
    { question: 'Do you supply to other states outside Gujarat?', answer: 'Yes. We are a pan-India supplier serving 20+ cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Pune, Kolkata, and more. We handle logistics and ensure timely delivery across India.' },
  ],
};

// Other categories data (simplified)
const otherCategoriesData: Record<string, {
  title: string;
  seoTitle: string;
  tagline: string;
  description: string;
  seoDescription: string;
  aiSummary: string;
  keywords: string[];
  gradient: string;
  heroImage: string;
  products: { slug: string; name: string; description: string; image: string; keywords: string[]; features: string[]; specs: { label: string; value: string }[] }[];
  benefits: { icon: string; title: string; description: string }[];
  applications: string[];
  whyChoose: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}> = {
  'doors': {
    title: 'Industrial & Specialty Doors',
    seoTitle: 'Industrial Doors Manufacturer | Cleanroom, Fire Rated, Cold Storage Doors',
    tagline: 'Precision-Built Doors for Safety, Hygiene & Performance',
    description: 'High-performance industrial doors including cleanroom doors, fire-rated doors, and cold storage doors.',
    seoDescription: 'PHOENIXX manufactures industrial doors - cleanroom doors, fire rated doors (30-120 min), cold storage doors. IS/BS/UL certified.',
    aiSummary: 'PHOENIXX manufactures industrial doors: Cleanroom Doors, Fire Doors (30-120 min rating), Cold Storage Doors. IS/BS/UL certified.',
    keywords: ['industrial doors', 'cleanroom doors', 'fire rated doors', 'cold storage doors'],
    gradient: 'from-orange-600 to-red-600',
    heroImage: '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg',
    products: [
      { slug: 'cleanroom-door', name: 'Cleanroom Doors', description: 'Flush doors for contamination-controlled environments.', features: ['Airtight sealing', 'Flush design', 'Easy to clean'], specs: [{ label: 'Type', value: 'Swing/Sliding' }, { label: 'Frame', value: 'SS/Aluminum' }], image: '/images/products/doors/Cleanroom-door/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg', keywords: ['cleanroom doors'] },
      { slug: 'fire-door-emergency-exit', name: 'Fire Door – Emergency Exit', description: 'Fire-rated doors with panic hardware.', features: ['Fire rated 30-120 min', 'Panic bar hardware'], specs: [{ label: 'Fire Rating', value: '30/60/90/120 min' }], image: '/images/products/doors/fire-door/TORDRIX_FIRE_DOOR2.jpg', keywords: ['fire doors'] },
      { slug: 'fire-rated-multipurpose-door', name: 'Fire Rated Multipurpose Door', description: 'Versatile fire-rated doors for industrial applications.', features: ['Multiple ratings', 'Customizable'], specs: [{ label: 'Fire Rating', value: '30-120 min' }], image: '/images/products/doors/multipurpose-door/Metal-Door-Manufacturer-Ahmedabad-1.jpg', keywords: ['fire rated doors'] },
    ],
    benefits: [
      { icon: '🔥', title: 'Fire Safety', description: 'Doors rated up to 120 minutes fire resistance' },
      { icon: '🧹', title: 'Hygienic Design', description: 'Flush surfaces for cleanroom environments' },
      { icon: '🔒', title: 'Security', description: 'Heavy-duty construction' },
      { icon: '⚙️', title: 'Automation Ready', description: 'Compatible with access control' },
    ],
    applications: ['Pharmaceutical', 'Food Processing', 'Cold Storage', 'Hospitals', 'Industrial', 'Data Centers'],
    whyChoose: [
      { title: 'Certified Quality', description: 'IS/BS/UL certified' },
      { title: 'Custom Solutions', description: 'Tailored to specifications' },
    ],
    faqs: [
      { question: 'What fire ratings are available?', answer: 'Our fire doors are available in 30, 60, 90, and 120 minute ratings.' },
    ],
  },
  'cleanroom-solutions': {
    title: 'Cleanroom Solutions',
    seoTitle: 'Cleanroom Solutions Manufacturer India | Partitions, Ceilings, Doors',
    tagline: 'Complete Contamination Control Systems',
    description: 'Comprehensive cleanroom building systems for pharmaceutical, healthcare, and electronics industries.',
    seoDescription: 'PHOENIXX manufactures modular cleanroom solutions - partitions, ceilings, doors for ISO 5-8 cleanrooms.',
    aiSummary: 'PHOENIXX cleanroom solutions: Partitions, Ceilings, Doors. ISO Class 5-8 compliant. GMP/FDA suitable.',
    keywords: ['cleanroom solutions', 'cleanroom partitions', 'cleanroom ceilings', 'modular cleanroom'],
    gradient: 'from-emerald-600 to-teal-600',
    heroImage: '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat1.jpg',
    products: [
      { slug: 'cleanroom-partition', name: 'Cleanroom Partitions', description: 'Modular wall systems for controlled environments.', features: ['Modular design', 'Flush surfaces'], specs: [{ label: 'Thickness', value: '50-100 mm' }], image: '/images/products/cleanroom/partition/Cleanroom-Partation-supplier-Manufacture-in-Gujarat1.jpg', keywords: ['cleanroom partitions'] },
      { slug: 'cleanroom-doors', name: 'Cleanroom Doors', description: 'Doors for cleanroom applications.', features: ['Hermetic sealing', 'Automation ready'], specs: [{ label: 'Class', value: 'ISO 5-8' }], image: '/images/products/cleanroom/doors/Cleanroom-Door-Manufacturer-in-Ahmedabad-1.jpg', keywords: ['cleanroom doors'] },
      { slug: 'cleanroom-false-ceiling', name: 'Cleanroom False Ceiling', description: 'Walkable and non-walkable ceiling systems.', features: ['HEPA integration', 'Service access'], specs: [{ label: 'Load', value: 'Up to 200 kg/m²' }], image: '/images/products/cleanroom/ceiling/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg', keywords: ['cleanroom ceiling'] },
      { slug: 'cleanroom-flooring', name: 'Cleanroom Flooring', description: 'Epoxy and PU flooring systems.', features: ['Seamless finish', 'Chemical resistant'], specs: [{ label: 'Type', value: 'Epoxy/PU/ESD' }], image: '/images/products/cleanroom/flooring/Cleanroom-Epoxy-PU-Flooring-1.jpg', keywords: ['cleanroom flooring'] },
    ],
    benefits: [
      { icon: '🔬', title: 'ISO Compliant', description: 'ISO Class 5-8 cleanrooms' },
      { icon: '💊', title: 'GMP Ready', description: 'FDA/GMP compliant' },
      { icon: '🧩', title: 'Modular Design', description: 'Easy expansion' },
      { icon: '✨', title: 'Low Particle', description: 'Minimized particle generation' },
    ],
    applications: ['Pharmaceutical', 'Biotechnology', 'Electronics', 'Healthcare', 'Food Processing', 'Research Labs'],
    whyChoose: [
      { title: 'Turnkey Solutions', description: 'Complete design to installation' },
      { title: 'Compliance Assured', description: 'GMP, FDA, ISO compliant' },
    ],
    faqs: [
      { question: 'What ISO classes do you support?', answer: 'We design cleanrooms from ISO Class 5 to ISO Class 8.' },
    ],
  },
};

type Props = {
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  if (category === 'sandwich-panels') {
    return {
      title: sandwichPanelsData.seoTitle,
      description: sandwichPanelsData.seoDescription,
      keywords: sandwichPanelsData.keywords,
      alternates: { canonical: `/products/${category}` },
    };
  }
  const data = otherCategoriesData[category];
  if (!data) return {};
  return {
    title: data.seoTitle,
    description: data.seoDescription,
    keywords: data.keywords,
    alternates: { canonical: `/products/${category}` },
  };
}

export async function generateStaticParams() {
  return ['sandwich-panels', 'doors', 'cleanroom-solutions'].map((category) => ({ category }));
}

export default async function ProductCategoryPage({ params }: Props) {
  const { category } = await params;

  // Special handling for sandwich-panels with enhanced content
  if (category === 'sandwich-panels') {
    return <SandwichPanelsPage />;
  }

  // Other categories
  const data = otherCategoriesData[category];
  if (!data) notFound();

  return <OtherCategoryPage data={data} category={category} />;
}

// ========== SANDWICH PANELS PAGE COMPONENT ==========
function SandwichPanelsPage() {
  const data = sandwichPanelsData;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://phoenixxsmartbuild.com/products' },
      { '@type': 'ListItem', position: 3, name: 'Sandwich Panels', item: 'https://phoenixxsmartbuild.com/products/sandwich-panels' },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Sandwich Panels',
    description: 'High-performance insulated sandwich panels for industrial and commercial applications',
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'PHOENIXX Infratech Projects', address: { '@type': 'PostalAddress', addressLocality: 'Ahmedabad', addressCountry: 'IN' } },
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '100' },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={productSchema} />

        <AISummaryBlock summary={data.aiSummary} keywords={data.keywords} />

        {/* ========== HERO SECTION ========== */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          {/* Background Images Grid */}
          <div className="absolute inset-0 grid grid-cols-3">
            {data.heroImages.map((img, idx) => (
              <div key={idx} className="relative overflow-hidden">
                <Image src={img} alt={`Sandwich Panel ${idx + 1}`} fill className="object-cover" priority={idx === 0} />
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/70" />
          </div>

          <div className="container-custom relative z-10 py-16 md:py-24">
            <nav className="mb-6 text-sm text-white/60">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Sandwich Panels</span>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Sandwich Panels — Insulated Panels for Energy-Efficient, Fire-Safe & Durable Infrastructure
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                PHOENIXX designs and manufactures <strong className="text-white">PUF, PIR, Rockwool, Roofing, Wall & Ceiling, Cold Storage, and Marine Sandwich Panels</strong>. 
                Our panels are engineered for <Link href="/solutions/cold-storage-construction" className="text-blue-400 hover:underline">cold storage</Link>, 
                <Link href="/products/cleanroom-solutions" className="text-blue-400 hover:underline"> cleanrooms</Link>, prefab buildings, industrial sheds, warehouses, and commercial projects across India.
              </p>

              {/* Stats Strip */}
              <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
                {data.stats.map((stat) => (
                  <div key={stat.label} className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="#products" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all">
                  Explore All Panel Types
                </Link>
                <Link href="/get-a-quote" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all">
                  Request Free Quote
                </Link>
                <Link href="/resources/brochure" className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-all">
                  📄 Download Catalogue
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== BENEFITS SECTION ========== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Why Choose PHOENIXX Sandwich Panels?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
              {data.benefits.map((benefit) => (
                <div key={benefit.title} className="text-center p-6 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-colors">
                  <span className="text-4xl">{benefit.icon}</span>
                  <h3 className="mt-4 font-bold text-slate-900">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== PRODUCT GRID SECTION ========== */}
        <section id="products" className="section-padding bg-gradient-to-b from-slate-50 to-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
                Complete Product Range
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Explore Our Complete Sandwich Panel Range
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {data.products.map((product) => (
                <Link
                  key={product.slug}
                  href={product.link}
                  className="group rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{product.name}</h3>
                    <p className="mt-2 text-sm text-slate-600 line-clamp-2">{product.description}</p>
                    <p className="mt-2 text-xs text-slate-400">{product.keywords}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600">
                      View Details →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/resources/blogs/puf-vs-pir-vs-rockwool" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
                📊 Compare PUF vs PIR vs Rockwool Panels →
              </Link>
            </div>
          </div>
        </section>

        {/* ========== ADVANCED FEATURES SECTION ========== */}
        <section className="section-padding bg-slate-900 text-white">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Advanced Features of PHOENIXX Sandwich Panels
                </h2>
                <p className="mt-4 text-slate-400">
                  Our sandwich panels feature a three-layer construction: outer metal sheet + insulating core + inner metal sheet — engineered for optimal performance.
                </p>

                <div className="mt-8 space-y-4">
                  {data.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-white">{feature.title}</h3>
                        <p className="text-sm text-slate-400">{feature.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="#" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:underline">
                    🎬 Watch: How Sandwich Panels Save Energy →
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  src="/images/products/sandwich-panels/pir-panel/PIR-Sandwich-FM-approved-Panel-3.jpg"
                  alt="Sandwich Panel Structure"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========== TECHNICAL SPECIFICATIONS TABLE ========== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Technical Specifications
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="text-left p-4 font-bold text-slate-900 border-b">Parameter</th>
                      <th className="text-left p-4 font-bold text-slate-900 border-b">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Panel Thickness (Wall/Ceiling)</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.thickness.wall}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Panel Thickness (Roofing)</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.thickness.roofing}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Core Material</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.core}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Outer Skin Options</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.outerSkin}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Thermal Conductivity</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.thermalConductivity}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Strength (Tensile/Compression/Shear)</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.strength.tensile} / {data.specifications.strength.compression} / {data.specifications.strength.shear}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Fire Rating</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.fireRating}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Panel Width</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.width}</td>
                    </tr>
                    <tr className="border-b hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Panel Length</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.length}</td>
                    </tr>
                    <tr className="hover:bg-slate-50">
                      <td className="p-4 text-slate-600">Available Colors</td>
                      <td className="p-4 font-medium text-slate-900">{data.specifications.colors.join(', ')}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link href="/resources/technical-sheet" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-blue-700 transition-all">
                  📄 Download Datasheet
                </Link>
                <Link href="/resources/technical-sheet" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-all">
                  🏗️ Download CAD/BIM
                </Link>
                <Link href="/get-a-quote" className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-50 transition-all">
                  Request Custom Specification
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========== APPLICATIONS Q&A SECTION ========== */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Where Sandwich Panels Are Used
              </h2>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {data.applications.map((app, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">{app.question}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{app.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS SECTION ========== */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Trusted by Leading Companies Across India
              </h2>
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-500 text-xl">★</span>
                  ))}
                </div>
                <span className="text-slate-600">{data.testimonial.rating}/5 from {data.testimonial.reviews}+ reviews</span>
              </div>
            </div>

            <div className="max-w-3xl mx-auto">
              <blockquote className="text-center">
                <p className="text-xl md:text-2xl text-slate-700 italic leading-relaxed">
                  &ldquo;{data.testimonial.quote}&rdquo;
                </p>
                <footer className="mt-6">
                  <p className="font-bold text-slate-900">{data.testimonial.author}</p>
                  <p className="text-slate-600">{data.testimonial.company}</p>
                </footer>
              </blockquote>
            </div>

            {/* Industry Logos */}
            <div className="mt-12">
              <p className="text-center text-sm text-slate-500 mb-6">Industries We Serve</p>
              <div className="flex flex-wrap justify-center gap-4">
                {data.industries.map((industry) => (
                  <span key={industry} className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 text-center">
              <Link href="/get-a-quote" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all">
                Request Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FAQ SECTION ========== */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                Frequently Asked Questions About Sandwich Panels
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* FAQ Categories */}
              <div className="space-y-8">
                {/* General */}
                <div>
                  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">📌</span>
                    General Questions
                  </h3>
                  <div className="space-y-3">
                    {data.faqs.slice(0, 3).map((faq, idx) => (
                      <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <h4 className="font-semibold text-slate-900 pr-4">{faq.question}</h4>
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-180 transition-transform">
                            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Technical */}
                <div>
                  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">⚙️</span>
                    Technical Questions
                  </h3>
                  <div className="space-y-3">
                    {data.faqs.slice(3, 7).map((faq, idx) => (
                      <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <h4 className="font-semibold text-slate-900 pr-4">{faq.question}</h4>
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-180 transition-transform">
                            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm">🏭</span>
                    Application Questions
                  </h3>
                  <div className="space-y-3">
                    {data.faqs.slice(7, 11).map((faq, idx) => (
                      <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <h4 className="font-semibold text-slate-900 pr-4">{faq.question}</h4>
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-180 transition-transform">
                            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>

                {/* Buying */}
                <div>
                  <h3 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm">🛒</span>
                    Buying & Delivery
                  </h3>
                  <div className="space-y-3">
                    {data.faqs.slice(11).map((faq, idx) => (
                      <details key={idx} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                        <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                          <h4 className="font-semibold text-slate-900 pr-4">{faq.question}</h4>
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center group-open:rotate-180 transition-transform">
                            <svg className="w-3 h-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </span>
                        </summary>
                        <div className="px-5 pb-5 text-slate-600">{faq.answer}</div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== CTA SECTION ========== */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
              Contact our team for technical consultation, custom specifications, or a competitive quotation for your sandwich panel requirements.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/919727700442" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-8 py-4 font-semibold text-white shadow-lg hover:bg-green-600 transition-all">
                💬 WhatsApp Us
              </Link>
              <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all">
                📩 Request Free Quote
              </Link>
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">
                Talk to Expert
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

// ========== OTHER CATEGORIES PAGE COMPONENT ==========
function OtherCategoryPage({ data, category }: { data: typeof otherCategoriesData['doors']; category: string }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://phoenixxsmartbuild.com/products' },
      { '@type': 'ListItem', position: 3, name: data.title, item: `https://phoenixxsmartbuild.com/products/${category}` },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={breadcrumbSchema} />
        <AISummaryBlock summary={data.aiSummary} keywords={data.keywords} />

        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src={data.heroImage} alt={data.title} fill className="object-cover" priority />
            <div className={`absolute inset-0 bg-gradient-to-r ${data.gradient} opacity-80`} />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          <div className="container-custom relative z-10 py-20">
            <nav className="mb-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{data.title}</span>
            </nav>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-4">{data.tagline}</span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{data.title}</h1>
              <p className="mt-6 text-lg text-white/90">{data.description}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/get-a-quote" className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all">Get Quote Now</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="space-y-12">
              {data.products.map((product, idx) => (
                <div key={product.slug} className={`grid gap-8 lg:grid-cols-2 lg:items-center ${idx % 2 === 1 ? '' : ''}`}>
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                  </div>
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{product.name}</h2>
                    <p className="mt-4 text-slate-600">{product.description}</p>
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2 text-sm text-slate-700">
                          <span className={`w-5 h-5 rounded-full bg-gradient-to-br ${data.gradient} flex items-center justify-center text-white text-xs`}>✓</span>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <Link href={`/products/${category}/${product.slug}`} className={`mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r ${data.gradient} px-6 py-3 font-semibold text-white shadow-lg hover:shadow-xl transition-all`}>
                      View Details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={`py-20 bg-gradient-to-r ${data.gradient}`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Need Custom Specifications?</h2>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">Contact our team for technical consultation and competitive quotations.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-a-quote" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg hover:shadow-xl transition-all">Get Custom Quote</Link>
              <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all">Talk to Expert</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
