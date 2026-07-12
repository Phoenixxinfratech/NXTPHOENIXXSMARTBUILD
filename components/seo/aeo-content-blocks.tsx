/**
 * Reusable GEO/AEO content blocks — comparison tables, voice-search FAQs, pros/cons.
 */

interface SpecRow {
  property: string;
  value: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

interface AeoContentBlocksProps {
  voiceSearchHeading?: string;
  definition?: string;
  specs?: SpecRow[];
  pros?: string[];
  cons?: string[];
  faqs?: FaqItem[];
  comparisonTitle?: string;
}

export function AeoContentBlocks({
  voiceSearchHeading,
  definition,
  specs,
  pros,
  cons,
  faqs,
  comparisonTitle = 'Technical Specifications at a Glance',
}: AeoContentBlocksProps) {
  return (
    <div className="space-y-10">
      {definition && (
        <div className="rounded-xl border border-blue-100 bg-blue-50/50 p-6">
          <h2 className="text-xl font-bold text-slate-900">What is it?</h2>
          <p className="mt-3 text-slate-700 leading-relaxed">{definition}</p>
        </div>
      )}

      {voiceSearchHeading && specs && specs.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">{voiceSearchHeading}</h2>
          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-sm">
              <caption className="sr-only">{comparisonTitle}</caption>
              <thead className="bg-slate-100">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900">Property</th>
                  <th scope="col" className="px-4 py-3 text-left font-semibold text-slate-900">Specification</th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row) => (
                  <tr key={row.property} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-800">{row.property}</td>
                    <td className="px-4 py-3 text-slate-600">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {(pros?.length || cons?.length) && (
        <div className="grid gap-6 md:grid-cols-2">
          {pros && pros.length > 0 && (
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-6">
              <h3 className="text-lg font-bold text-emerald-900">Advantages</h3>
              <ul className="mt-3 space-y-2">
                {pros.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-emerald-800">
                    <span aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {cons && cons.length > 0 && (
            <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-6">
              <h3 className="text-lg font-bold text-amber-900">Considerations</h3>
              <ul className="mt-3 space-y-2">
                {cons.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-amber-800">
                    <span aria-hidden="true">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {faqs && faqs.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-slate-900 md:text-2xl">Frequently Asked Questions</h2>
          <dl className="mt-4 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-slate-200 bg-white p-5">
                <dt className="font-semibold text-slate-900">{faq.question}</dt>
                <dd className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}

export const DEFAULT_PUF_SPECS: SpecRow[] = [
  { property: 'Thermal Conductivity', value: '0.024 W/mK (PUF) / 0.022 W/mK (PIR)' },
  { property: 'Panel Thickness', value: '30mm to 150mm' },
  { property: 'Foam Density', value: '40 ± 2 kg/m³' },
  { property: 'Fire Rating', value: 'B2/B3 (PUF), B-s1,d0 (PIR), A1/A2 (Rockwool)' },
  { property: 'Service Temperature', value: '-40°C to +80°C' },
  { property: 'Panel Lifespan', value: '25–30 years with proper installation' },
];

export const DEFAULT_PUF_FAQS: FaqItem[] = [
  {
    question: 'Which PUF panel thickness is best for cold storage?',
    answer: 'For cold storage operating at 0°C to -25°C, 100–120mm PUF panels are typically recommended. Deep freeze applications below -25°C may require 120–150mm panels. PHOENIXX engineers calculate exact thickness based on your chamber temperature, ambient conditions, and energy cost targets.',
  },
  {
    question: 'How much does a PUF panel cost in India?',
    answer: 'PUF panel pricing depends on thickness, skin material, coating grade, and order volume. Factory-direct pricing from PHOENIXX typically ranges from ₹80–220 per sq.ft depending on specifications. Contact us for a project-specific quotation.',
  },
  {
    question: 'Which industries use sandwich panels most?',
    answer: 'Sandwich panels are widely used in cold storage, pharmaceutical manufacturing, food processing, warehouses, automotive plants, data centres, and cleanroom facilities across India. Their combination of insulation, speed of construction, and structural performance makes them the preferred envelope solution for industrial buildings.',
  },
];
