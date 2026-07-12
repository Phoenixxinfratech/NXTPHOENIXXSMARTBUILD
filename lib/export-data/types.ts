/**
 * Export market types for African expansion.
 * [VERIFY] markers in content indicate fields requiring client confirmation.
 */

export type ExportRegion =
  | 'east-africa'
  | 'west-africa'
  | 'southern-africa'
  | 'central-africa'
  | 'indian-ocean';

export type ExportPriority = 'tier1' | 'tier2' | 'tier3';

export interface ExportCountry {
  slug: string;
  name: string;
  capital: string;
  region: ExportRegion;
  priority: 'high' | 'medium';
  metaTitle: string;
  metaDescription: string;
  climate: string;
  industries: string[];
  applications: string[];
  climateSuitability: string;
  buildingConsiderations: string;
  exportCapability: string;
  shippingNotes: string;
  containerLoading: string;
  ports: string[];
  corridors: string[];
  citySlugs: string[];
  industrySlugs: string[];
}

export interface ExportCity {
  slug: string;
  name: string;
  countrySlug: string;
  priority: ExportPriority;
  metaTitle: string;
  metaDescription: string;
  industrialZones: string[];
  port?: string;
  keyIndustries: string[];
  applications: string[];
  localPainPoint: string;
}

export interface ExportIndustry {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  definition: string;
  panelFit: string;
  applications: string[];
  buyerRoles: string[];
}

export interface ExportSubPage {
  type: 'city' | 'industry';
  countrySlug: string;
  sub: string;
}

export interface ExportFAQ {
  question: string;
  answer: string;
}
