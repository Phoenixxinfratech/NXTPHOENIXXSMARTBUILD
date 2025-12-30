import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | PHOENIXX SmartBuild',
  description:
    'Privacy Policy for PHOENIXX SmartBuild. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-slate-900 py-16">
          <div className="container-custom">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Privacy Policy</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-4 text-slate-300">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
              <h2>1. Introduction</h2>
              <p>
                NXT PHOENIXX SMARTBUILD LLP (&quot;PHOENIXX,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is 
                committed to protecting your personal data. This privacy policy explains how we collect, use, 
                and safeguard your information when you visit our website or use our services.
              </p>

              <h2>2. Information We Collect</h2>
              <h3>2.1 Information You Provide</h3>
              <ul>
                <li><strong>Contact Information:</strong> Name, email address, phone number, company name</li>
                <li><strong>Project Information:</strong> Project details, requirements, specifications</li>
                <li><strong>Business Information:</strong> GST number, PAN, company registration details (for vendors/partners)</li>
                <li><strong>Communications:</strong> Messages, inquiries, feedback you send us</li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <ul>
                <li><strong>Device Information:</strong> IP address, browser type, operating system</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent, navigation patterns</li>
                <li><strong>Cookies:</strong> Session cookies, analytics cookies, preference cookies</li>
              </ul>

              <h2>3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Process quotes, orders, and service requests</li>
                <li>Send relevant communications about our products and services</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraud and unauthorized access</li>
              </ul>

              <h2>4. Information Sharing</h2>
              <p>We do not sell your personal information. We may share information with:</p>
              <ul>
                <li><strong>Service Providers:</strong> Third parties who help us operate our business</li>
                <li><strong>Business Partners:</strong> When required for project execution (with your consent)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>

              <h2>5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal 
                data against unauthorized access, alteration, disclosure, or destruction. However, no 
                internet transmission is 100% secure.
              </p>

              <h2>6. Data Retention</h2>
              <p>
                We retain your personal data only as long as necessary for the purposes outlined in 
                this policy or as required by law. Project-related data may be retained for warranty 
                and service purposes.
              </p>

              <h2>7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>

              <h2>8. Cookies</h2>
              <p>
                Our website uses cookies to enhance your browsing experience. You can control cookie 
                settings through your browser. Disabling cookies may affect some website functionality.
              </p>

              <h2>9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for 
                their privacy practices. Please review their privacy policies separately.
              </p>

              <h2>10. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under 18. We do not knowingly collect 
                personal information from children.
              </p>

              <h2>11. Changes to This Policy</h2>
              <p>
                We may update this privacy policy periodically. Changes will be posted on this page 
                with an updated effective date.
              </p>

              <h2>12. Contact Us</h2>
              <p>
                For questions about this privacy policy or your personal data, please contact us:
              </p>
              <ul>
                <li><strong>Email:</strong> privacy@phoenixxsmartbuild.com</li>
                <li><strong>Phone:</strong> +91 97277 00442</li>
                <li><strong>Address:</strong> Ahmedabad, Gujarat, India</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
