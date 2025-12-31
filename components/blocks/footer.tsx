import Link from 'next/link';
import Image from 'next/image';
import { footerNavigation } from '@/lib/navigation';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/phoenixxsmartbuild',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/phoenixxsmartbuild',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/phoenixxsmartbuild',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: 'Google Business',
    href: 'https://g.page/phoenixxsmartbuild',
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/brand/logos/logo-white.png"
                alt="PHOENIXX"
                width={200}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-2 text-lg font-medium text-white">
              Building Tomorrow&apos;s Infrastructure Today
            </p>
            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
              Smart, sustainable infrastructure built for performance. From PEB structures to 
              cleanroom systems, we engineer spaces that are efficient, durable, and future-ready.
            </p>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a
                href="mailto:projects@phoenixxsmartbuild.com"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  📧
                </span>
                projects@phoenixxsmartbuild.com
              </a>
              <a
                href="tel:+919727700442"
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  📞
                </span>
                +91 97277 00442 | +91 95126 16169
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-400">
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  📍
                </span>
                <span>Ahmedabad, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <p className="text-sm font-medium text-white mb-4">Connect With Us</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {/* Products */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Products</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.products.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/products" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      View All →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Solutions</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.solutions.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/solutions" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                      View All →
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/about-us" className="text-sm text-slate-400 hover:text-white transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/industries" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link href="/clientele" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Clientele
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/project-gallery" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Resources</h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <Link href="/resources/blogs" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Insights & Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/technical-sheet" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Technical Sheets
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/brochure" className="text-sm text-slate-400 hover:text-white transition-colors">
                      Brochures
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/faq" className="text-sm text-slate-400 hover:text-white transition-colors">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-a-quote" className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                      Get a Quote →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {currentYear} NXT PHOENIXX SMARTBUILD LLP. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/business-terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/career" className="hover:text-white transition-colors">
                Careers
              </Link>
              <Link href="/resources/project-gallery" className="hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/about-us" className="hover:text-white transition-colors">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
