import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/blocks/header';
import { Footer } from '@/components/blocks/footer';

export const metadata: Metadata = {
  title: 'Vendor Registration | PHOENIXX SmartBuild',
  description:
    'Register as a vendor or supplier with PHOENIXX SmartBuild. Supply raw materials, equipment, and services for industrial infrastructure projects.',
  alternates: {
    canonical: '/vendor-registration',
  },
};

const categories = [
  'Raw Materials (Steel, Insulation, Chemicals)',
  'Steel & Structural Components',
  'HVAC & Refrigeration Equipment',
  'Electrical & Automation',
  'Fire Safety Equipment',
  'Flooring & Coating Materials',
  'Hardware & Fasteners',
  'Logistics & Transportation',
  'Manpower Supply',
  'Testing & Inspection Services',
  'Other',
];

const requirements = [
  { icon: '📋', title: 'Business Registration', desc: 'Valid GST registration and business license' },
  { icon: '📊', title: 'Quality Standards', desc: 'ISO certification or equivalent quality systems' },
  { icon: '📦', title: 'Delivery Capability', desc: 'Ability to deliver pan-India or specific regions' },
  { icon: '💰', title: 'Competitive Pricing', desc: 'Market-competitive rates with transparent terms' },
  { icon: '⏰', title: 'Reliability', desc: 'Consistent supply and timeline adherence' },
  { icon: '📝', title: 'Documentation', desc: 'Test certificates, compliance documents as required' },
];

export default function VendorRegistrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 md:py-24">
          <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-[0.05]" />
          
          <div className="container-custom relative">
            <nav className="mb-6 text-sm text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Vendor Registration</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1 rounded-full bg-amber-500/20 text-amber-300 text-sm font-medium mb-4">
                Supplier Registration
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Become a PHOENIXX Vendor
              </h1>
              <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                Join our network of suppliers and grow your business with consistent orders, 
                transparent processes, and timely payments.
              </p>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-12 bg-white border-b">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Vendor Requirements
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {requirements.map((req) => (
                <div
                  key={req.title}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50"
                >
                  <span className="text-2xl">{req.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-900">{req.title}</h4>
                    <p className="text-sm text-slate-600">{req.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section className="section-padding bg-slate-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl font-bold text-slate-900">Vendor Registration Form</h2>
                <p className="mt-2 text-slate-600">
                  Complete all required fields. We&apos;ll review your application within 5 business days.
                </p>

                <form className="mt-8 space-y-8">
                  {/* Company Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
                      Company Information
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Legal company name"
                        />
                      </div>
                      <div>
                        <label htmlFor="gst" className="block text-sm font-medium text-slate-700 mb-2">
                          GST Number *
                        </label>
                        <input
                          type="text"
                          id="gst"
                          name="gst"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="GST registration number"
                        />
                      </div>
                      <div>
                        <label htmlFor="pan" className="block text-sm font-medium text-slate-700 mb-2">
                          PAN Number *
                        </label>
                        <input
                          type="text"
                          id="pan"
                          name="pan"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Company PAN"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">
                          Registered Address *
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          required
                          rows={3}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                          placeholder="Complete address"
                        />
                      </div>
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-slate-700 mb-2">
                          State *
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="State"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Contact Person */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
                      Contact Person
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-slate-700 mb-2">
                          Contact Person Name *
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="designation" className="block text-sm font-medium text-slate-700 mb-2">
                          Designation *
                        </label>
                        <input
                          type="text"
                          id="designation"
                          name="designation"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Job title"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Product/Service Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
                      Product/Service Information
                    </h3>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">
                          Category of Products/Services *
                        </label>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {categories.map((category) => (
                            <label key={category} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:border-amber-300 cursor-pointer transition-colors">
                              <input
                                type="checkbox"
                                name="categories"
                                value={category}
                                className="w-5 h-5 rounded text-amber-600 focus:ring-amber-500"
                              />
                              <span className="text-sm text-slate-700">{category}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="products" className="block text-sm font-medium text-slate-700 mb-2">
                          Products/Services Offered *
                        </label>
                        <textarea
                          id="products"
                          name="products"
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                          placeholder="List the specific products or services you can supply..."
                        />
                      </div>

                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label htmlFor="turnover" className="block text-sm font-medium text-slate-700 mb-2">
                            Annual Turnover
                          </label>
                          <select
                            id="turnover"
                            name="turnover"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select range</option>
                            <option value="under-50L">Under ₹50 Lakhs</option>
                            <option value="50L-1Cr">₹50 Lakhs - ₹1 Crore</option>
                            <option value="1-5Cr">₹1-5 Crores</option>
                            <option value="5-10Cr">₹5-10 Crores</option>
                            <option value="above-10Cr">Above ₹10 Crores</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-slate-700 mb-2">
                            Years in Business
                          </label>
                          <select
                            id="experience"
                            name="experience"
                            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          >
                            <option value="">Select range</option>
                            <option value="0-2">0-2 years</option>
                            <option value="2-5">2-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="certifications" className="block text-sm font-medium text-slate-700 mb-2">
                          Certifications (ISO, etc.)
                        </label>
                        <input
                          type="text"
                          id="certifications"
                          name="certifications"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="List any certifications"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bank Details */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
                      Bank Details (for payment processing)
                    </h3>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="bankName" className="block text-sm font-medium text-slate-700 mb-2">
                          Bank Name
                        </label>
                        <input
                          type="text"
                          id="bankName"
                          name="bankName"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Bank name"
                        />
                      </div>
                      <div>
                        <label htmlFor="accountNumber" className="block text-sm font-medium text-slate-700 mb-2">
                          Account Number
                        </label>
                        <input
                          type="text"
                          id="accountNumber"
                          name="accountNumber"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Account number"
                        />
                      </div>
                      <div>
                        <label htmlFor="ifsc" className="block text-sm font-medium text-slate-700 mb-2">
                          IFSC Code
                        </label>
                        <input
                          type="text"
                          id="ifsc"
                          name="ifsc"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="IFSC code"
                        />
                      </div>
                      <div>
                        <label htmlFor="branch" className="block text-sm font-medium text-slate-700 mb-2">
                          Branch Name
                        </label>
                        <input
                          type="text"
                          id="branch"
                          name="branch"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                          placeholder="Branch name"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Documents Upload */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b">
                      Upload Documents
                    </h3>
                    <div className="space-y-4">
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-amber-400 transition-colors cursor-pointer">
                        <input
                          type="file"
                          id="documents"
                          name="documents"
                          className="hidden"
                          multiple
                          accept=".pdf,.doc,.docx,.jpg,.png"
                        />
                        <label htmlFor="documents" className="cursor-pointer">
                          <span className="text-4xl">📁</span>
                          <p className="mt-2 text-sm text-slate-600">
                            Click to upload GST Certificate, PAN Card, Company Profile, Certifications
                          </p>
                          <p className="text-xs text-slate-400">
                            PDF, DOC, JPG, PNG (max 5MB each)
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        required
                        className="w-5 h-5 rounded text-amber-600 focus:ring-amber-500 mt-0.5"
                      />
                      <span className="text-sm text-slate-600">
                        I confirm that the information provided is accurate and agree to the{' '}
                        <Link href="/business-terms" className="text-amber-600 hover:underline">
                          Business Terms
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy-policy" className="text-amber-600 hover:underline">
                          Privacy Policy
                        </Link>.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-to-r from-amber-600 to-orange-600 px-6 py-4 font-semibold text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    Submit Registration
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container-custom text-center">
            <h2 className="text-2xl font-bold">Questions About Vendor Registration?</h2>
            <p className="mt-2 text-slate-300">Contact our procurement team</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:procurement@phoenixxsmartbuild.com"
                className="inline-flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                📧 procurement@phoenixxsmartbuild.com
              </a>
              <a
                href="tel:+919727700442"
                className="inline-flex items-center justify-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                📞 +91 97277 00442
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
