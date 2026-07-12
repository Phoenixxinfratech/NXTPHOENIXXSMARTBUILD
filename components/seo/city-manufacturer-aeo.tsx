import Link from 'next/link';
import { AeoContentBlocks, DEFAULT_PUF_SPECS } from '@/components/seo/aeo-content-blocks';

interface CityManufacturerAeoProps {
  cityName: string;
  industrialEstate?: string;
  painPoint?: string;
}

export function CityManufacturerAeo({ cityName, industrialEstate, painPoint }: CityManufacturerAeoProps) {
  return (
    <section className="section-padding bg-white border-t border-slate-100">
      <div className="container-custom max-w-4xl">
        <AeoContentBlocks
          voiceSearchHeading={`Which PUF panel is best for industrial buildings in ${cityName}?`}
          definition={`PHOENIXX SMARTBUILD manufactures and supplies sandwich PUF panels, PIR panels, roofing panels, and cold room panels for industrial projects in ${cityName}.${industrialEstate ? ` We serve units across ${industrialEstate} and nearby industrial clusters.` : ''} As India's premium insulated panel manufacturer, we combine factory-direct pricing with engineering support for warehouses, factories, cleanrooms, and cold storage.${painPoint ? ` ${painPoint}` : ''}`}
          specs={DEFAULT_PUF_SPECS}
          pros={[
            `Factory-direct supply to ${cityName} with competitive delivered pricing`,
            'Thickness options from 30mm to 150mm for walls, roofs, and cold storage',
            'Fire-rated PIR and Rockwool options for process-adjacent facilities',
            'ISO-certified manufacturing with IS 14925:2015 compliance',
            'Installation guidance and turnkey cold storage construction support',
          ]}
          cons={[
            'Custom lengths and special coatings may require 5–10 day manufacturing lead time',
            'Fire rating selection must match local occupancy and insurance requirements',
            'Professional installation is recommended for airtight joint performance',
          ]}
          faqs={[
            {
              question: `How much does a PUF panel cost in ${cityName}?`,
              answer: `PUF panel prices in ${cityName} typically range from ₹80–220 per sq.ft depending on thickness, skin material, and coating. Contact PHOENIXX for a project-specific factory quotation.`,
            },
            {
              question: `What thickness should I choose for a warehouse roof in ${cityName}?`,
              answer: `Most industrial warehouses in ${cityName} use 50–80mm PUF roofing panels. Temperature-controlled storage may need 80–120mm. Our engineers calculate thickness based on your ambient conditions and energy targets.`,
            },
            {
              question: `Which industries in ${cityName} use sandwich panels?`,
              answer: `Pharmaceutical, food processing, cold chain, automotive, chemical, textile, and warehouse logistics facilities across ${cityName} commonly specify PUF and PIR sandwich panels for thermal efficiency and rapid construction.`,
            },
          ]}
        />
        <p className="mt-6 text-sm text-slate-500">
          Learn more in our{' '}
          <Link href="/resources/glossary#puf-panel" className="text-blue-600 font-medium hover:underline">PUF panel glossary</Link>
          {' '}and{' '}
          <Link href="/certifications" className="text-blue-600 font-medium hover:underline">certifications guide</Link>.
        </p>
      </div>
    </section>
  );
}
