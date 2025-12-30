const features = [
  {
    title: 'Industry Expertise',
    description: 'Over 25 years of experience serving diverse industries with specialized solutions.',
    icon: '🏆',
  },
  {
    title: 'Quality Assurance',
    description: 'ISO certified processes ensuring consistent quality and compliance standards.',
    icon: '✅',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored designs to meet your specific requirements and industry regulations.',
    icon: '🎯',
  },
  {
    title: 'Global Reach',
    description: 'Serving clients in 30+ countries with local support and global expertise.',
    icon: '🌍',
  },
  {
    title: 'End-to-End Service',
    description: 'From design to installation and maintenance, we handle everything.',
    icon: '🔧',
  },
  {
    title: 'Technical Support',
    description: '24/7 technical support and comprehensive training for your team.',
    icon: '💡',
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We combine decades of experience with cutting-edge technology to
            deliver exceptional results for every project.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>

              {/* Decorative accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full rounded-b-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

