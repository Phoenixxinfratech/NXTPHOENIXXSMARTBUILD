import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Business Terms & Conditions | PHOENIXX SmartBuild',
  description:
    'Terms and Conditions for business with PHOENIXX SmartBuild. Understand our policies for quotes, orders, payments, and project execution.',
  alternates: {
    canonical: '/business-terms',
  },
};

export default function BusinessTermsPage() {
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
              <span className="text-white">Business Terms</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Business Terms & Conditions</h1>
            <p className="mt-4 text-slate-300">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
              <h2>1. General Terms</h2>
              <p>
                These Terms and Conditions govern all business transactions between NXT PHOENIXX 
                SMARTBUILD LLP (&quot;PHOENIXX,&quot; &quot;we,&quot; &quot;us&quot;) and our customers, partners, and vendors. 
                By engaging in business with us, you agree to these terms.
              </p>

              <h2>2. Quotations & Orders</h2>
              <h3>2.1 Quotations</h3>
              <ul>
                <li>Quotations are valid for 30 days unless otherwise specified</li>
                <li>Prices are subject to change based on material cost fluctuations</li>
                <li>GST and transportation charges are extra unless included in quote</li>
                <li>Technical specifications in quotes are indicative and subject to final engineering</li>
              </ul>

              <h3>2.2 Order Confirmation</h3>
              <ul>
                <li>Orders are confirmed upon receipt of Purchase Order and advance payment</li>
                <li>Any changes after confirmation may affect pricing and timeline</li>
                <li>We reserve the right to reject orders that don&apos;t meet our terms</li>
              </ul>

              <h2>3. Payment Terms</h2>
              <h3>3.1 Standard Payment Terms</h3>
              <ul>
                <li><strong>Products:</strong> 50% advance with order, balance before dispatch</li>
                <li><strong>Projects:</strong> As per agreed milestone schedule in contract</li>
                <li><strong>Standard Terms:</strong> 30 days from invoice date (for approved credit)</li>
              </ul>

              <h3>3.2 Late Payment</h3>
              <ul>
                <li>Interest of 2% per month may be charged on overdue amounts</li>
                <li>Deliveries may be held for accounts with outstanding payments</li>
                <li>Credit facilities may be suspended for repeated delays</li>
              </ul>

              <h2>4. Delivery & Risk Transfer</h2>
              <h3>4.1 Delivery Terms</h3>
              <ul>
                <li>Ex-works unless otherwise specified</li>
                <li>Delivery timelines are indicative and subject to confirmation</li>
                <li>Force majeure events may extend delivery timelines</li>
              </ul>

              <h3>4.2 Risk Transfer</h3>
              <ul>
                <li>Risk transfers to buyer upon dispatch from our facility</li>
                <li>Buyer must arrange adequate transit insurance</li>
                <li>Claims for transit damage must be filed with carrier</li>
              </ul>

              <h2>5. Warranty</h2>
              <h3>5.1 Product Warranty</h3>
              <ul>
                <li><strong>Insulated Panels:</strong> 10-25 years (varies by product type)</li>
                <li><strong>Doors:</strong> 1-2 years against manufacturing defects</li>
                <li><strong>Accessories:</strong> 1 year standard warranty</li>
              </ul>

              <h3>5.2 Warranty Exclusions</h3>
              <ul>
                <li>Damage due to improper installation or handling</li>
                <li>Normal wear and tear</li>
                <li>Modifications by unauthorized parties</li>
                <li>Use in conditions beyond specified parameters</li>
              </ul>

              <h2>6. Intellectual Property</h2>
              <p>
                All designs, drawings, specifications, and technical information provided by PHOENIXX 
                remain our intellectual property. Use without permission is prohibited.
              </p>

              <h2>7. Limitation of Liability</h2>
              <ul>
                <li>Our liability is limited to the value of goods/services supplied</li>
                <li>We are not liable for indirect, consequential, or punitive damages</li>
                <li>Claims must be filed within 30 days of discovery</li>
              </ul>

              <h2>8. Confidentiality</h2>
              <p>
                Both parties agree to maintain confidentiality of proprietary information shared 
                during the course of business. This obligation survives termination of business 
                relationship.
              </p>

              <h2>9. Dispute Resolution</h2>
              <ul>
                <li>Disputes shall first be attempted to resolve through negotiation</li>
                <li>Unresolved disputes shall be referred to arbitration in Ahmedabad</li>
                <li>Courts in Ahmedabad shall have exclusive jurisdiction</li>
              </ul>

              <h2>10. Force Majeure</h2>
              <p>
                Neither party shall be liable for delays due to events beyond reasonable control 
                including natural disasters, pandemics, government actions, or civil unrest.
              </p>

              <h2>11. Termination</h2>
              <ul>
                <li>Either party may terminate with 30 days written notice</li>
                <li>Outstanding payments become due upon termination</li>
                <li>Work in progress and materials ordered shall be paid for</li>
              </ul>

              <h2>12. Amendments</h2>
              <p>
                These terms may be amended by PHOENIXX with reasonable notice. Continued business 
                after notification constitutes acceptance of amended terms.
              </p>

              <h2>13. Contact</h2>
              <p>For questions regarding these terms:</p>
              <ul>
                <li><strong>Email:</strong> legal@phoenixxsmartbuild.com</li>
                <li><strong>Phone:</strong> +91 97277 00442</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
