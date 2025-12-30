import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Return & Refund Policy | PHOENIXX SmartBuild',
  description:
    'Return and Refund Policy for PHOENIXX SmartBuild products and services. Understand our policies for product returns and service cancellations.',
  alternates: {
    canonical: '/return-policy',
  },
};

export default function ReturnPolicyPage() {
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
              <span className="text-white">Return Policy</span>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-white">Return & Refund Policy</h1>
            <p className="mt-4 text-slate-300">Last updated: January 2025</p>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto prose prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600">
              <h2>1. Scope</h2>
              <p>
                This Return & Refund Policy applies to products manufactured and supplied by 
                NXT PHOENIXX SMARTBUILD LLP. Given the custom-manufactured nature of our products, 
                specific terms apply based on product type and order specifications.
              </p>

              <h2>2. Custom-Manufactured Products</h2>
              <h3>2.1 Insulated Panels & Building Products</h3>
              <p>
                As our panels (PIR, PUF, Sandwich Panels) are manufactured to customer specifications:
              </p>
              <ul>
                <li>Orders cannot be cancelled once production has commenced</li>
                <li>Custom-sized panels are non-returnable</li>
                <li>Standard-sized stock items may be returned within 7 days if unused and in original condition</li>
                <li>A restocking fee of 15-25% may apply for accepted returns</li>
              </ul>

              <h3>2.2 Doors & Hardware</h3>
              <ul>
                <li>Standard doors from stock may be returned within 14 days if unused</li>
                <li>Custom-configured doors are non-returnable</li>
                <li>Hardware accessories may be returned within 7 days in original packaging</li>
              </ul>

              <h2>3. Defective Products</h2>
              <p>If you receive defective or damaged products:</p>
              <ul>
                <li>Report within 48 hours of delivery with photographs</li>
                <li>Do not install or modify the product</li>
                <li>We will inspect and provide replacement or repair at no extra cost</li>
                <li>Manufacturing defects are covered under warranty</li>
              </ul>

              <h2>4. Project Services</h2>
              <h3>4.1 Cancellation Before Commencement</h3>
              <ul>
                <li>Full refund of advance (minus processing fee) if cancelled before mobilization</li>
                <li>Material procurement costs will be deducted if materials were ordered</li>
              </ul>

              <h3>4.2 Cancellation After Commencement</h3>
              <ul>
                <li>Payment for completed work and materials used</li>
                <li>Demobilization charges may apply</li>
                <li>Custom-manufactured items cannot be returned</li>
              </ul>

              <h2>5. Return Process</h2>
              <ol>
                <li><strong>Contact Us:</strong> Email returns@phoenixxsmartbuild.com with order details</li>
                <li><strong>Approval:</strong> We will review and provide Return Authorization if applicable</li>
                <li><strong>Shipping:</strong> Return shipping is at buyer&apos;s expense unless product is defective</li>
                <li><strong>Inspection:</strong> Products will be inspected upon receipt</li>
                <li><strong>Refund:</strong> Approved refunds processed within 15 business days</li>
              </ol>

              <h2>6. Refund Methods</h2>
              <ul>
                <li>Refunds will be credited to the original payment method</li>
                <li>Bank transfer refunds may take 5-7 business days to reflect</li>
                <li>Credit notes may be issued for future orders upon request</li>
              </ul>

              <h2>7. Warranty Claims</h2>
              <p>
                Warranty claims are handled separately from returns. Products under warranty will be 
                repaired or replaced as per warranty terms. See our warranty documentation for details.
              </p>

              <h2>8. Exceptions</h2>
              <p>The following are not eligible for return:</p>
              <ul>
                <li>Products installed or modified in any way</li>
                <li>Products damaged due to improper storage or handling</li>
                <li>Products ordered more than 30 days ago</li>
                <li>Clearance or sale items (unless defective)</li>
              </ul>

              <h2>9. Contact for Returns</h2>
              <p>For return inquiries, contact our customer service team:</p>
              <ul>
                <li><strong>Email:</strong> returns@phoenixxsmartbuild.com</li>
                <li><strong>Phone:</strong> +91 97277 00442</li>
                <li><strong>Hours:</strong> Monday-Saturday, 9:00 AM - 6:00 PM IST</li>
              </ul>

              <h2>10. Policy Updates</h2>
              <p>
                We reserve the right to modify this policy. Changes will be effective upon posting 
                on our website. For orders placed before policy changes, the policy at the time of 
                order will apply.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
