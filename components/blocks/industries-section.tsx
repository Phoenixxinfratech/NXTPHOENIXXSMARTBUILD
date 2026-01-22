import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Industries data - slugs match actual pages in /industries/[slug]
const industries = [
  { name: 'Pharma & Chemical', image: '/images/industries/pharmaceuticals/cleanroom.jpg', icon: '💊', slug: 'pharma-chemical' },
  { name: 'Food Processing', image: '/images/industries/food-processing/Food-processing-industries-phoenixx-work.jpg', icon: '🍽️', slug: 'food-processing' },
  { name: 'Dairy Industry', image: '/images/industries/dairy/epub_dairy-processing-equipment-milk-tanks-facility-plant_1200x635.jpg', icon: '🥛', slug: 'dairy' },
  { name: 'Cold Chain & Logistics', image: '/images/solutions/cold-storage/Cold-Storage-Warehouse-manufacture-1.jpg', icon: '❄️', slug: 'cold-chain' },
  { name: 'Manufacturing & Engineering', image: '/images/industries/precision-engineering/precision-engineering-1.jpg', icon: '⚙️', slug: 'precision-engineering' },
  { name: 'Hospitality & Hotels', image: '/images/industries/hospitality/Hotel-design.webp', icon: '🏨', slug: 'hospitality' },
  { name: 'Automotive Industry', image: '/images/industries/automotive/Assembly-Line-Best-Practices.jpg', icon: '🚗', slug: 'automobile' },
  { name: 'Agriculture & Agri-Processing', image: '/images/industries/food-processing/Food-processing .jpg', icon: '🌾', slug: 'agri-processing' },
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





