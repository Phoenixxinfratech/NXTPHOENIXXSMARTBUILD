/**
 * Canonical panel specifications.
 *
 * These figures were previously retyped into page copy and had drifted: PUF
 * thermal conductivity appeared as both 0.022 and 0.024 W/mK, sometimes within
 * a single file. Buyers compare datasheets across pages, so quote these
 * constants rather than writing a number inline.
 *
 * Fire ratings cite two standards. DIN 4102 grades (B1/B2/B3) and EN 13501-1
 * classes (A1/A2/B-s1,d0/E) are different scales, not competing claims: standard
 * PUF is B3 under DIN 4102 and Class E under EN 13501-1. Always name the
 * standard, otherwise the two look like a contradiction.
 *
 * Values match the product data in `lib/landing-page-data.ts`.
 */

export const panelSpecs = {
  puf: {
    label: 'PUF (Polyurethane Foam)',
    thermalConductivity: '0.024 W/mK',
    density: '40 ± 2 kg/m³',
    fireRating: 'B3 (DIN 4102) / Class E (EN 13501-1), self-extinguishing; B2 and B1 grades available on request',
  },
  pir: {
    label: 'PIR (Polyisocyanurate)',
    thermalConductivity: '0.022 W/mK',
    density: '40 ± 2 kg/m³',
    fireRating: 'B-s1,d0 (EN 13501-1) / B2 (DIN 4102), very low smoke, no flaming droplets',
  },
  rockwool: {
    label: 'Rockwool (Mineral Wool)',
    thermalConductivity: '0.035-0.040 W/mK (density dependent)',
    density: '80 kg/m³, 100 kg/m³, 120 kg/m³, 150 kg/m³',
    fireRating: 'A1 (EN 13501-1), non-combustible',
  },
} as const;

/** Shared across all panel types. */
export const panelGeometry = {
  effectiveCoverWidth: '1000mm',
  thicknessRange: '30-150mm',
} as const;

export type PanelType = keyof typeof panelSpecs;
