import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Standard industries data (from memory)
const industries = [
  { name: 'Pharmaceuticals', image: '/industries/pharmaceuticals.jpg', icon: '💊', slug: 'pharmaceuticals' },
  { name: 'Biotechnology', image: '/industries/biotechnology.jpg', icon: '🧬', slug: 'biotechnology' },
  { name: 'Medical Devices', image: '/industries/medical-devices.jpg', icon: '🩺', slug: 'medical-devices' },
  { name: 'Healthcare', image: '/industries/healthcare.jpg', icon: '⚕️', slug: 'healthcare' },
  { name: 'Hospitals', image: '/industries/hospitals.jpg', icon: '🏥', slug: 'hospitals' },
  { name: 'Precision Engineering', image: '/industries/precision-engineering.jpg', icon: '⚙️', slug: 'precision-engineering' },
  { name: 'Electronics Manufacturing', image: '/industries/electronics.jpg', icon: '⚡', slug: 'electronics-manufacturing' },
  { name: 'Cosmetics Manufacturing', image: '/industries/cosmetics.jpg', icon: '💄', slug: 'cosmetics-manufacturing' },
  { name: 'Automotive Manufacturing', image: '/industries/automotive.jpg', icon: '🚗', slug: 'automotive-manufacturing' },
  { name: 'Aerospace Industry', image: '/industries/aerospace.jpg', icon: '✈️', slug: 'aerospace-industry' },
  { name: 'Solar Panel Manufacturing', image: '/industries/solar-panel.jpg', icon: '☀️', slug: 'solar-panel-manufacturing' },
  { name: 'Semiconductor Manufacturing', image: '/industries/semiconductor.jpg', icon: '💾', slug: 'semiconductor-manufacturing' },
  { name: 'Food Processing', image: '/industries/food-processing.jpg', icon: '🍽️', slug: 'food-processing' },
  { name: 'Dairy Industry', image: '/industries/dairy.jpg', icon: '🥛', slug: 'dairy-industry' },
  { name: 'Hospitality & Hotels', image: '/industries/hospitality.jpg', icon: '🏨', slug: 'hospitality-hotels' },
  { name: 'Textile Industry', image: '/industries/textile.jpg', icon: '🧵', slug: 'textile-industry' },
  { name: 'Chemical Processing Plants', image: '/industries/chemical.jpg', icon: '⚗️', slug: 'chemical-processing' },
  { name: 'Research & Development (R&D) Facilities', image: '/industries/research.jpg', icon: '🔬', slug: 'research-development' },
];

export function IndustriesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Building the Future Across Industries
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We deliver tailored infrastructure solutions for diverse industries,
            ensuring excellence and compliance at every step.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                <div className="absolute inset-0 bg-muted transition-transform duration-300 group-hover:scale-110" />
                {/* Icon */}
                <div className="absolute bottom-2 left-2 z-20 text-xl">
                  {industry.icon}
                </div>
              </div>

              {/* Name */}
              <div className="p-3">
                <h3 className="text-xs font-medium text-center min-h-[32px] flex items-center justify-center group-hover:text-blue-700 transition-colors">
                  {industry.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/industries">Explore Industry Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}





