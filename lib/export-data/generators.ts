import type { ExportCity, ExportCountry, ExportFAQ, ExportIndustry } from './types';

function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function generateExportCityIntro(city: ExportCity, country: ExportCountry): string {
  const estate =
    city.industrialZones.length > 0
      ? ` Key industrial zones include ${city.industrialZones.slice(0, 3).join(', ')}.`
      : '';
  const port = city.port ? ` ${city.name} connects via ${city.port} for import logistics.` : '';
  const variants = [
    `PHOENIXX SMARTBUILD exports sandwich PUF panels, PIR panels, roofing systems, and cold storage solutions to ${city.name}, ${country.name} — supporting ${city.keyIndustries.slice(0, 3).join(', ').toLowerCase()} projects with factory-direct engineering from India.${estate}${port} ${city.localPainPoint}`,
    `Industrial buyers in ${city.name} choose PHOENIXX for insulated building envelopes that reduce HVAC costs, accelerate construction, and meet export documentation requirements for ${country.name}.${estate} ${city.localPainPoint}`,
    `From ${city.name} warehouses to cold chain and processing plants, PHOENIXX delivers premium sandwich panels with container shipping, technical datasheets, and installation guidance.${port}${estate} ${city.localPainPoint}`,
  ];
  return variants[hashSlug(city.slug + country.slug) % variants.length];
}

export function generateExportCityFAQs(city: ExportCity, country: ExportCountry): ExportFAQ[] {
  const base: ExportFAQ[] = [
    {
      question: `Does PHOENIXX SMARTBUILD export PUF panels to ${city.name}, ${country.name}?`,
      answer: `Yes. PHOENIXX SMARTBUILD exports sandwich PUF panels, PIR panels, roofing panels, and cold storage systems to ${city.name} and across ${country.name}. We provide technical datasheets, container loading plans, and export documentation to support import clearance.`,
    },
    {
      question: `What industries in ${city.name} use insulated sandwich panels?`,
      answer: `Key industries in ${city.name} include ${city.keyIndustries.join(', ')}. Applications include ${city.applications.slice(0, 4).join(', ')}. ${city.localPainPoint}`,
    },
    {
      question: `How long does shipping to ${city.name} take from India?`,
      answer: `${country.shippingNotes} For ${city.name} specifically, allow manufacturing lead time of 2–3 weeks plus transit. [VERIFY: Confirm project-specific lead times with the export team.]`,
    },
    {
      question: `Which panel thickness is recommended for warehouses in ${city.name}?`,
      answer: `For unconditioned warehouses in ${city.name}, 80–100mm PUF roofing panels typically reduce internal temperatures by 8–12°C versus uninsulated metal sheeting. Cold storage applications require 80–150mm depending on target temperature. PHOENIXX engineers recommend specifications based on your building use and ${country.name} climate conditions.`,
    },
  ];

  if (city.industrialZones.length > 0) {
    base.push({
      question: `Which industrial zones in ${city.name} does PHOENIXX serve?`,
      answer: `PHOENIXX supports projects in ${city.industrialZones.join(', ')} and surrounding industrial corridors. We coordinate delivery to site or port based on your logistics plan.`,
    });
  }

  return base;
}

export function generateExportIndustryIntro(
  industry: ExportIndustry,
  country: ExportCountry
): string {
  const variants = [
    `${industry.definition} In ${country.name}, ${industry.name.toLowerCase()} projects benefit from PHOENIXX SMARTBUILD's export capability: ${industry.panelFit} Our team supports EPC contractors, developers, and plant owners with technical documentation for import and project approval.`,
    `PHOENIXX SMARTBUILD is Africa's trusted engineering partner for ${industry.name.toLowerCase()} in ${country.name}. ${industry.panelFit} We export from Gujarat, India with container shipping via ${country.ports.slice(0, 2).join(' and ')}.`,
    `For ${industry.name.toLowerCase()} facilities in ${country.name}, insulated sandwich panels from PHOENIXX reduce build time and operating costs. ${industry.definition} ${country.climateSuitability}`,
  ];
  return variants[hashSlug(industry.slug + country.slug) % variants.length];
}

export function generateExportIndustryFAQs(
  industry: ExportIndustry,
  country: ExportCountry
): ExportFAQ[] {
  return [
    {
      question: `Why use PHOENIXX panels for ${industry.name.toLowerCase()} in ${country.name}?`,
      answer: `${industry.panelFit} PHOENIXX provides export documentation, fire test reports where applicable, and engineering support for ${country.name} import processes.`,
    },
    {
      question: `Who typically procures panels for ${industry.name.toLowerCase()} projects?`,
      answer: `Buyers include ${industry.buyerRoles.join(', ')}. PHOENIXX works directly with project owners and through EPC contractors across ${country.name}.`,
    },
    {
      question: `What applications suit ${industry.name.toLowerCase()} in ${country.name}?`,
      answer: `Common applications: ${industry.applications.join(', ')}. ${country.buildingConsiderations}`,
    },
    {
      question: `How do I request an export quote for ${industry.name.toLowerCase()} in ${country.name}?`,
      answer: `Submit panel thickness, quantities, delivery port, and project timeline via our export quotation form. PHOENIXX responds with pricing, shipping options, and technical recommendations.`,
    },
  ];
}

export function generateExportCountryFAQs(country: ExportCountry): ExportFAQ[] {
  return [
    {
      question: `Does PHOENIXX SMARTBUILD export to ${country.name}?`,
      answer: `Yes. PHOENIXX SMARTBUILD exports sandwich PUF panels, PIR panels, Rockwool panels, roofing systems, doors, and cold storage solutions to ${country.name} from its Gujarat manufacturing facility.`,
    },
    {
      question: `What is the shipping route to ${country.name}?`,
      answer: country.shippingNotes,
    },
    {
      question: `Which industries in ${country.name} use PUF panels?`,
      answer: `Key sectors include ${country.industries.join(', ')}. Applications: ${country.applications.slice(0, 5).join(', ')}.`,
    },
    {
      question: `What import documentation does PHOENIXX provide for ${country.name}?`,
      answer: `Standard export documentation includes commercial invoice, packing list, certificate of origin, bill of lading, and product test certificates. ${country.buildingConsiderations}`,
    },
  ];
}

export function getExportHubFAQs(): ExportFAQ[] {
  return [
    {
      question: 'Who is PHOENIXX SMARTBUILD\'s export partner for Africa?',
      answer:
        'PHOENIXX SMARTBUILD LLP is India\'s premium manufacturer and exporter of sandwich PUF panels, PIR panels, cold storage systems, cleanroom panels, and PEB solutions — positioned as Africa\'s trusted engineering partner for industrial building infrastructure.',
    },
    {
      question: 'Which African countries does PHOENIXX export to?',
      answer:
        'PHOENIXX exports to 16 African markets including Kenya, Tanzania, Uganda, Rwanda, Ghana, Zambia, Botswana, Namibia, Mozambique, Angola, South Africa, Nigeria, Zimbabwe, Ethiopia, Mauritius, and the Democratic Republic of Congo — with city-specific support for major industrial hubs.',
    },
    {
      question: 'What products can be exported in a single container?',
      answer:
        'Mixed container loads are supported — wall panels, roofing panels, doors, flashings, and accessories can ship together. A 40ft container typically holds 800–1,200 sqm of 50mm wall panels depending on profile. [VERIFY: Confirm loading plans per order.]',
    },
    {
      question: 'How do I get an export quotation?',
      answer:
        'Share panel specifications, quantities, target port or city, and project timeline via the export quotation form. PHOENIXX provides pricing, shipping options, and technical recommendations within 24–48 business hours.',
    },
  ];
}
