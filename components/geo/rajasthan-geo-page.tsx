import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';
import { JsonLd } from '@/components/seo/json-ld';
import {
  type GeoSlugResult,
  type GeoFAQ,
  coreInternalLinks,
  getImagesForCity,
  getGeoH1,
  getGeoCanonicalSlug,
  generateGeoFAQs,
  getCrossCityLinks,
} from '@/lib/rajasthan-geo-data';
import { AeoContentBlocks, DEFAULT_PUF_SPECS } from '@/components/seo/aeo-content-blocks';
import { RelatedResources } from '@/components/blocks/related-resources';
import { getRelatedLinksForGeoPage } from '@/lib/internal-links';

// ---------------------------------------------------------------------------
// Content generation helpers — produce varied prose per city + page type
// ---------------------------------------------------------------------------

function introBlock(r: GeoSlugResult): string {
  const { city } = r;
  const pt = r.pageType?.id;
  const kw = r.keywordType?.id;

  const base = city.cityIntro;

  if (pt === 'manufacturer') {
    return `${base} As a manufacturer supplying from Beawar — just ${city.distanceFromBeawar} km away — Phoenixx Smart Build delivers factory-direct PUF roofing panels to ${city.name} with consistent quality and no intermediary markups. Industrial contractors, PEB fabricators, and warehouse developers across ${city.name} rely on Phoenixx panels for projects ranging from modest sheds to large-scale logistics facilities.`;
  }
  if (pt === 'supplier') {
    return `${base} Phoenixx maintains ready stock of PUF roofing panels at its Beawar warehouse for fast dispatch to ${city.name}. ${city.logisticsNote} Whether your project needs 500 sq. ft. or 50,000 sq. ft., the Phoenixx supply chain is built to deliver reliably and on schedule.`;
  }
  if (pt === 'price') {
    return `${base} PUF roofing panel prices in ${city.name} depend on thickness, steel grade, coating type, and delivered volume. Phoenixx Smart Build offers competitive factory-direct pricing from Beawar (${city.distanceFromBeawar} km), keeping transport costs transparent and predictable for ${city.name} projects.`;
  }
  if (pt === 'brand') {
    return `${base} The Phoenixx brand represents a commitment to manufacturing precision and supply reliability. Every Phoenixx PUF roofing panel supplied to ${city.name} is produced under ISO-certified processes with a guaranteed core density of 40±2 kg/m³ and thermal conductivity of 0.024 W/mK.`;
  }
  if (kw === 'sandwich-puf-roofing-panel') {
    return `${base} Sandwich PUF roofing panels combine two pre-painted steel skins with a rigid polyurethane foam core in a single, high-performance roofing component. Phoenixx supplies these sandwich panels to ${city.name} from its Beawar facility, providing insulation, structural strength, and weather protection in one installation step.`;
  }
  if (kw === 'insulated-roof-panel') {
    return `${base} Insulated roof panels are essential for energy-efficient industrial buildings in ${city.name}. With thermal conductivity of 0.024 W/mK, Phoenixx PUF-core insulated roof panels reduce heat transfer by up to 85%, cutting HVAC costs and improving worker comfort in Rajasthan's extreme heat.`;
  }
  if (kw === 'puf-sandwich-panel') {
    return `${base} PUF sandwich panels serve dual roles in industrial construction — roofing and wall cladding. Phoenixx supplies these versatile panels to ${city.name}, enabling contractors to use a single panel system for the entire building envelope, simplifying procurement and installation.`;
  }
  if (kw === 'polyurethane-roof-panel') {
    return `${base} Polyurethane (PU) roof panels leverage the superior insulation properties of closed-cell polyurethane foam. Phoenixx polyurethane roof panels supplied to ${city.name} feature zero water absorption, self-extinguishing fire behaviour, and a service life exceeding 25 years.`;
  }

  // General (Type 1) default
  return `${base} Phoenixx Smart Build supplies premium PUF roofing panels from its Beawar warehouse, located just ${city.distanceFromBeawar} km from ${city.name}. Industrial contractors, steel fabricators, warehouse developers, and cold storage builders in ${city.name} benefit from fast delivery, competitive pricing, and consistent panel quality.`;
}

function technicalParagraph(r: GeoSlugResult): string {
  const kw = r.keywordType?.id;
  if (kw === 'sandwich-puf-roofing-panel') {
    return 'The sandwich construction bonds two steel skins to a rigid PUF core through continuous lamination. This creates a composite panel where each layer contributes distinct properties — the outer skin provides weather resistance and structural profile, the PUF core delivers insulation and rigidity, and the inner skin offers a clean, flush finish. The result is a roofing panel that outperforms conventional multi-layer assemblies in thermal efficiency, installation speed, and long-term durability.';
  }
  if (kw === 'insulated-roof-panel') {
    return 'Insulation performance is measured by R-value — the thermal resistance per unit thickness. Phoenixx PUF-core roof panels deliver an R-value of approximately 2.08 m²K/W at 50 mm thickness, significantly outperforming mineral wool (1.28 m²K/W at 50 mm) and EPS (1.39 m²K/W at 50 mm). This superior R-value means thinner Phoenixx panels achieve the same or better insulation as thicker alternatives, reducing structural load and cost.';
  }
  if (kw === 'puf-sandwich-panel') {
    return 'PUF sandwich panels are available in wall and roof configurations. Roof panels feature trapezoidal or standing-seam outer profiles for water drainage and structural spanning, while wall panels use flat or micro-ribbed surfaces for clean aesthetics. Both types share the same PUF core technology, ensuring uniform insulation performance across the building envelope.';
  }
  if (kw === 'polyurethane-roof-panel') {
    return 'Polyurethane foam\u2019s closed-cell structure gives it unique advantages among insulation materials. Over 90% of the foam volume consists of sealed gas-filled cells, creating a thermal barrier that maintains its R-value over decades. Unlike open-cell foams or fibrous insulation, polyurethane absorbs virtually zero moisture — critical in Rajasthan where monsoon humidity and condensation can degrade lesser materials from within.';
  }
  return 'Phoenixx PUF roofing panels use continuous lamination technology to inject CFC-free polyurethane foam between pre-painted steel skins at controlled temperature and pressure. The process achieves a uniform density of 40±2 kg/m³ across every panel, eliminating the air pockets and density gradients that compromise insulation performance. The trapezoidal outer profile spans up to 4 m between purlins, reducing structural steel requirements by up to 30%.';
}

function priceParagraph(city: GeoSlugResult['city']): string {
  return `PUF roofing panel prices for ${city.name} projects start from approximately ₹90 per sq. ft. for 30 mm standard panels and range up to ₹250+ per sq. ft. for 150 mm heavy-duty cold storage panels. Key pricing factors include panel thickness, PUF core density, steel skin grade (PPGI vs PPGL), coating type (polyester, SMP, or PVDF), profile specification, order volume, and delivery distance from Beawar (${city.distanceFromBeawar} km). Phoenixx offers volume-based pricing tiers and project-specific quotations — contact our team with your specifications for an accurate delivered price.`;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface Props {
  result: GeoSlugResult;
}

export function RajasthanGeoPage({ result }: Props) {
  const { city } = result;
  const isPrice = result.pageType?.id === 'price';
  const isBrand = result.pageType?.id === 'brand';

  const h1 = getGeoH1(result);
  const canonicalSlug = getGeoCanonicalSlug(result);
  const images = getImagesForCity(city);
  const faqs = generateGeoFAQs(result);
  const crossCityLinks = getCrossCityLinks(city);

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Phoenixx Smart Build — ${city.name}`,
    description: `PUF roofing panel supply for industrial projects in ${city.name}, Rajasthan. Supplied from Beawar warehouse.`,
    url: `https://phoenixxsmartbuild.com/${canonicalSlug}`,
    logo: 'https://phoenixxsmartbuild.com/images/brand/logos/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Beawar',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
    },
    geo: { '@type': 'GeoCoordinates', latitude: city.lat, longitude: city.lng },
    telephone: '+91-88665-56879',
    priceRange: '₹₹',
    areaServed: [
      { '@type': 'City', name: city.name },
      ...city.nearbyAreas.slice(0, 3).map((a) => ({ '@type': 'City', name: a })),
    ],
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `Phoenixx PUF Roofing Panel in ${city.name}`,
    description: `High-performance PUF insulated roofing panels supplied to ${city.name} from Beawar warehouse.`,
    brand: { '@type': 'Brand', name: 'PHOENIXX' },
    manufacturer: { '@type': 'Organization', name: 'Phoenixx Smart Build', url: 'https://phoenixxsmartbuild.com' },
    category: 'Industrial Insulated Roofing Panels',
    material: 'Polyurethane Foam',
    aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', reviewCount: '142', bestRating: '5', worstRating: '1' },
    ...(isPrice && {
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '90',
        highPrice: '250',
        priceValidUntil: '2026-12-31',
        availability: 'https://schema.org/InStock',
        areaServed: { '@type': 'City', name: city.name },
      },
    }),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f: GeoFAQ) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phoenixxsmartbuild.com' },
      { '@type': 'ListItem', position: 2, name: 'PUF Roofing Panels', item: 'https://phoenixxsmartbuild.com/puf-roofing-panels' },
      { '@type': 'ListItem', position: 3, name: h1, item: `https://phoenixxsmartbuild.com/${canonicalSlug}` },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={productSchema} />
        <JsonLd data={faqSchema} />
        <JsonLd data={breadcrumbSchema} />

        {/* ── Hero ── */}
        <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 py-20 md:py-28">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-white/80">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/puf-roofing-panels" className="hover:text-white transition-colors">PUF Roofing Panels</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{city.name}</span>
            </nav>
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="inline-block rounded-full bg-green-500/20 px-4 py-2 text-sm font-medium text-green-400">
                  Phoenixx Smart Build
                </span>
                <span className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                  {city.distanceFromBeawar} km from Beawar
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {h1}
              </h1>
              <p className="mt-6 text-xl text-slate-300 max-w-3xl">
                {introBlock(result)}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/get-a-quote"
                  className="rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                >
                  Get {city.name} Quote
                </Link>
                <a
                  href="tel:+918866556879"
                  className="rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
                >
                  Call: +91 88665 56879
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Image Row ── */}
        <section className="py-12 bg-slate-50">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {images.slice(0, 3).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Industrial Applications ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Industrial Applications in {city.name}
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              Phoenixx PUF roofing panels serve the diverse industrial base in and around{' '}
              {city.name}, {city.state}.
            </p>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Factories & Manufacturing',
                  desc: `Manufacturing units in ${city.name} benefit from Phoenixx PUF roofing panels that reduce internal temperatures by up to 15°C, improving worker productivity and protecting heat-sensitive processes.`,
                },
                {
                  title: 'Warehouses & Logistics',
                  desc: `Warehouse developers in ${city.name} use Phoenixx PUF roof panels for large-span coverage — panels span up to 4 m between purlins, reducing structural steel by 30% while maintaining insulated storage conditions.`,
                },
                {
                  title: 'Cold Storage Facilities',
                  desc: `${city.name}'s cold storage projects require PUF panels in 80–150 mm thickness to maintain chamber temperatures. Phoenixx panels with zero moisture absorption prevent condensation and ice buildup.`,
                },
                {
                  title: 'Industrial Sheds & PEB',
                  desc: `PEB contractors in ${city.name} rely on Phoenixx PUF roofing panels for fast-erect industrial sheds. Installation speed of 400–600 sq. m per day per crew keeps project timelines on track.`,
                },
                {
                  title: 'Food Processing & Dairy',
                  desc: `Food processing units near ${city.name} require hygienic, FSSAI-compliant roofing. Phoenixx panels with flush surfaces and anti-microbial coating options meet these stringent requirements.`,
                },
                {
                  title: 'Steel Structures & Fabrication',
                  desc: `Steel fabrication workshops in ${city.name} use Phoenixx insulated roofing to maintain comfortable working conditions despite external temperatures exceeding 45°C during Rajasthan summers.`,
                },
              ].map((app, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{app.title}</h3>
                  <p className="text-slate-600">{app.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Why Choose Phoenixx ── */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Why Choose Phoenixx PUF Roofing Panels{isBrand ? '' : ` for ${city.name}`}
            </h2>
            <p className="text-lg text-slate-300 text-center mb-12 max-w-2xl mx-auto">
              {isBrand
                ? 'The Phoenixx brand delivers manufacturing precision and supply reliability to every project.'
                : `Phoenixx supplies premium PUF roofing panels to ${city.name} from its Beawar warehouse.`}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { title: 'Ready Stock at Beawar', desc: 'Standard panels dispatched same-day from warehouse' },
                { title: 'Premium PUF Core', desc: '40±2 kg/m³ density, 0.024 W/mK conductivity' },
                { title: `${city.distanceFromBeawar} km to ${city.name}`, desc: 'Fast delivery via established transport routes' },
                { title: 'Contractor Friendly', desc: 'Easy installation — 400–600 sq. m per day per crew' },
                { title: 'Competitive Pricing', desc: 'Factory-direct rates with volume discounts' },
                { title: 'IS 14925 Compliant', desc: 'Indian Standard for insulated sandwich panels' },
                { title: 'ISO 9001 & 14001', desc: 'Quality and environmental management certified' },
                { title: '30–150 mm Range', desc: 'Complete thickness range for every application' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <h3 className="font-bold text-xl text-green-400">{item.title}</h3>
                  <p className="mt-2 text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Technical Overview ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Technical Overview
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg prose-slate max-w-none">
                <p>{technicalParagraph(result)}</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-10">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Panel Specifications</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li><strong>Thickness:</strong> 30–150 mm</li>
                    <li><strong>Density:</strong> 40 ± 2 kg/m³</li>
                    <li><strong>Conductivity:</strong> 0.024 W/mK</li>
                    <li><strong>Fire Rating:</strong> B2/B3 (B1 on request)</li>
                    <li><strong>Cover Width:</strong> 1000 mm</li>
                  </ul>
                </div>
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">Durability & Efficiency</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li><strong>Service Life:</strong> 25+ years</li>
                    <li><strong>Moisture Absorption:</strong> Zero (closed-cell)</li>
                    <li><strong>HVAC Savings:</strong> 25–30%</li>
                    <li><strong>Installation Speed:</strong> 400–600 sq. m/day</li>
                    <li><strong>Coatings:</strong> PE, SMP, PVDF, HDP</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Price Section (only for price page type) ── */}
        {isPrice && (
          <section className="py-16 md:py-20 bg-gradient-to-br from-amber-50 to-orange-50">
            <div className="container-custom">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
                PUF Roofing Panel Pricing for {city.name}
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="prose prose-lg prose-slate max-w-none mb-10">
                  <p>{priceParagraph(city)}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-2xl overflow-hidden shadow-md">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="px-6 py-4 text-left font-semibold">Thickness</th>
                        <th className="px-6 py-4 text-left font-semibold">Approx. Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { t: '30 mm', p: '₹90 – ₹110 / sq ft' },
                        { t: '40 mm', p: '₹105 – ₹130 / sq ft' },
                        { t: '50 mm', p: '₹120 – ₹150 / sq ft' },
                        { t: '80 mm', p: '₹155 – ₹190 / sq ft' },
                        { t: '100 mm', p: '₹175 – ₹220 / sq ft' },
                        { t: '150 mm', p: '₹220 – ₹270 / sq ft' },
                      ].map((row, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                          <td className="px-6 py-4 font-semibold text-slate-900">{row.t}</td>
                          <td className="px-6 py-4 text-slate-700">{row.p}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-slate-500 text-center mt-6">
                  Prices are indicative (ex-Beawar) and vary with coating, profile, volume, and delivery.
                  Contact Phoenixx for a binding quote.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── Supply Coverage ── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Supply Coverage Near {city.name}
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              {city.logisticsNote}
            </p>

            {city.industrialZones.length > 0 && (
              <div className="mb-10">
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
                  Industrial Zones Served in {city.name}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {city.industrialZones.map((zone, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 text-center border border-slate-200"
                    >
                      <span className="text-slate-800 font-medium">{zone}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {city.nearbyAreas.length > 0 && (
              <p className="text-center text-slate-600">
                Also serving:{' '}
                <strong>{city.nearbyAreas.join(', ')}</strong>
              </p>
            )}
          </div>
        </section>

        {/* ── Additional Images ── */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {images.slice(3, 5).map((img, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Cross-City Links ── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              PUF Roofing Panels in Nearby Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {crossCityLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="bg-white rounded-xl p-4 text-center hover:bg-blue-50 hover:shadow-md transition-all border border-slate-200"
                >
                  <span className="font-bold text-slate-900">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Internal Links to Core Pages ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Explore Phoenixx PUF Roofing Panel Resources
            </h2>
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Core Pages</h3>
                <ul className="space-y-3">
                  {coreInternalLinks.map((link, idx) => (
                    <li key={idx}>
                      <Link href={link.href} className="text-primary hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Product & Contact</h3>
                <ul className="space-y-3">
                  <li>
                    <Link href="/products/sandwich-panels/roofing-puf-panel" className="text-primary hover:underline">
                      Roofing PUF Panel — Product Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/sandwich-panels/sandwich-puf-panel" className="text-primary hover:underline">
                      Sandwich PUF Panel — Full Range
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-a-quote" className="text-primary hover:underline">
                      Request a Project Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-primary hover:underline">
                      Contact Phoenixx Smart Build
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Specs / AEO ── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container-custom max-w-4xl">
            <AeoContentBlocks
              voiceSearchHeading={`What thickness of PUF roofing panel should I choose in ${city.name}?`}
              definition={`Phoenixx Smart Build supplies PUF roofing panels to ${city.name} from Beawar (${city.distanceFromBeawar} km). ${city.cityIntro}${city.localPainPoint ? ` ${city.localPainPoint}` : ''} Panels serve ${city.keyIndustries.slice(0, 3).join(', ')} and other industrial applications across ${city.industrialZones.slice(0, 2).join(' and ')}.`}
              specs={DEFAULT_PUF_SPECS}
              pros={[
                `Fast logistics from Beawar warehouse to ${city.name}`,
                'High R-value insulation for Rajasthan heat loads',
                'Trapezoidal and standing seam profiles for industrial roofs',
                'UV-resistant coatings suitable for semi-arid climate',
              ]}
              cons={[
                'Longer custom lengths may need special transport planning',
                'Fire-rated cores (PIR/Rockwool) should be specified when required by occupancy',
              ]}
            />
            <p className="mt-4 text-sm text-slate-500">
              <Link href="/resources/glossary#puf-panel" className="text-blue-600 hover:underline">PUF Panel</Link>
              {' · '}
              <Link href="/resources/glossary#industrial-shed" className="text-blue-600 hover:underline">Industrial Shed</Link>
              {' · '}
              <Link href="/certifications" className="text-blue-600 hover:underline">Certifications</Link>
            </p>
          </div>
        </section>

        {/* ── FAQs ── */}
        <section className="py-16 md:py-20 bg-slate-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              FAQs — PUF Roofing Panels in {city.name}
            </h2>
            <div className="max-w-3xl mx-auto space-y-6 mt-10">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 border border-slate-100">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a PUF Roofing Panel Quote for {city.name}
            </h2>
            <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
              Phoenixx Smart Build delivers premium PUF roofing panels to {city.name}{' '}
              from its Beawar warehouse. Get competitive project pricing with fast dispatch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-a-quote"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg hover:shadow-xl transition-all"
              >
                Get Free Quote
              </Link>
              <a
                href={`https://wa.me/918866556879?text=Hi%20Phoenixx,%20I%20need%20PUF%20roofing%20panels%20in%20${encodeURIComponent(city.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </div>
        </section>
      </main>
      <RelatedResources links={getRelatedLinksForGeoPage('roofing-puf-panel', city.slug)} />
      <Footer />
    </div>
  );
}
