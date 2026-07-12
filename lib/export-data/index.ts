/**
 * Export market data for African countries.
 * Re-exports from modular data layer — import via @/lib/export-data
 */
export type {
  ExportCountry,
  ExportCity,
  ExportIndustry,
  ExportRegion,
  ExportPriority,
  ExportSubPage,
  ExportFAQ,
} from './types';

export { exportCountries, EXPORT_REGION_LABELS } from './countries';
export { exportCities, getCitiesForCountry } from './cities';
export { exportIndustries, ALL_INDUSTRY_SLUGS } from './industries';
export {
  generateExportCityIntro,
  generateExportCityFAQs,
  generateExportIndustryIntro,
  generateExportIndustryFAQs,
  generateExportCountryFAQs,
  getExportHubFAQs,
} from './generators';

import { exportCountries } from './countries';
import { exportCities } from './cities';
import { exportIndustries } from './industries';
import type { ExportSubPage } from './types';

export function getExportCountry(slug: string) {
  return exportCountries[slug];
}

export function getAllExportCountrySlugs(): string[] {
  return Object.keys(exportCountries);
}

export function getExportCity(countrySlug: string, citySlug: string) {
  const city = Object.values(exportCities).find(
    (c) => c.countrySlug === countrySlug && c.slug === citySlug
  );
  return city;
}

export function getExportIndustry(slug: string) {
  return exportIndustries[slug];
}

export function getIndustriesForCountry(countrySlug: string) {
  const country = exportCountries[countrySlug];
  if (!country) return [];
  return Array.from(new Set(country.industrySlugs))
    .map((s) => exportIndustries[s])
    .filter(Boolean);
}

export function resolveExportSub(countrySlug: string, sub: string): ExportSubPage | null {
  const country = exportCountries[countrySlug];
  if (!country) return null;

  if (country.citySlugs.includes(sub)) {
    const city = getExportCity(countrySlug, sub);
    if (city) return { type: 'city', countrySlug, sub };
  }

  if (country.industrySlugs.includes(sub) && exportIndustries[sub]) {
    return { type: 'industry', countrySlug, sub };
  }

  return null;
}

export function getAllExportSubParams(): { country: string; sub: string }[] {
  const params: { country: string; sub: string }[] = [];
  for (const country of Object.values(exportCountries)) {
    for (const citySlug of country.citySlugs) {
      params.push({ country: country.slug, sub: citySlug });
    }
    for (const industrySlug of Array.from(new Set(country.industrySlugs))) {
      params.push({ country: country.slug, sub: industrySlug });
    }
  }
  return params;
}

export function getAllExportUrls(): string[] {
  const urls = ['/export'];
  for (const slug of getAllExportCountrySlugs()) {
    urls.push(`/export/${slug}`);
    const country = exportCountries[slug];
    for (const citySlug of country.citySlugs) {
      urls.push(`/export/${slug}/${citySlug}`);
    }
    for (const industrySlug of Array.from(new Set(country.industrySlugs))) {
      urls.push(`/export/${slug}/${industrySlug}`);
    }
  }
  return urls;
}

export function getCountriesByRegion() {
  const grouped: Record<string, typeof exportCountries[string][]> = {};
  for (const country of Object.values(exportCountries)) {
    if (!grouped[country.region]) grouped[country.region] = [];
    grouped[country.region].push(country);
  }
  return grouped;
}

export function getTier1Cities() {
  return Object.values(exportCities).filter((c) => c.priority === 'tier1');
}
