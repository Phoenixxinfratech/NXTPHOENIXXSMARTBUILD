// Placeholder testimonials - will be replaced with Sanity CMS data
const testimonials = [
  {
    id: '1',
    content:
      'The team delivered an exceptional cleanroom facility that exceeded our expectations. Their expertise and attention to detail made all the difference.',
    author: 'Dr. Sarah Chen',
    role: 'Director of Operations',
    company: 'PharmaTech Inc.',
    image: '/testimonials/sarah-chen.jpg',
  },
  {
    id: '2',
    content:
      'Working with them was a seamless experience. They understood our complex requirements and delivered on time and within budget.',
    author: 'Michael Rodriguez',
    role: 'Facility Manager',
    company: 'BioGen Labs',
    image: '/testimonials/michael-rodriguez.jpg',
  },
  {
    id: '3',
    content:
      'Their turnkey solution saved us months of project management headaches. Highly recommend for any controlled environment project.',
    author: 'Jennifer Park',
    role: 'VP Engineering',
    company: 'MedDevice Corp',
    image: '/testimonials/jennifer-park.jpg',
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Trusted by leading organizations across industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.id}
              className="relative rounded-lg border bg-card p-6 shadow-sm"
            >
              {/* Quote Mark */}
              <div className="absolute -top-4 left-6 text-6xl text-primary/20">
                &ldquo;
              </div>

              {/* Content */}
              <p className="relative text-muted-foreground pt-4">
                {testimonial.content}
              </p>

              {/* Author */}
              <footer className="mt-6 flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="h-12 w-12 rounded-full bg-muted" />
                <div>
                  <cite className="not-italic font-semibold">
                    {testimonial.author}
                  </cite>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}




