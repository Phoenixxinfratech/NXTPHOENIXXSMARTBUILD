/**
 * PHOENIXX Shop Product Pricing Data
 * 
 * This file contains all product pricing information for the /shop section.
 * Prices are fetched from Google Sheets for real-time updates.
 * 
 * HOW TO UPDATE PRICES:
 * 1. Open the Google Sheet: [Your Sheet URL]
 * 2. Find the product SKU in Column A
 * 3. Update the price in Column C
 * 4. Prices update automatically on the website within 5 minutes
 * 
 * For immediate updates, click "Revalidate Prices" in the admin panel.
 */

export interface ProductVariant {
  sku: string;
  thickness: string;
  price: number;
}

export interface ProductPricing {
  productSlug: string;
  productName: string;
  category: string;
  sku: string;
  basePrice: number;
  priceUnit: string;
  variants: ProductVariant[];
}

// Default/fallback pricing data (used when Google Sheets is unavailable)
export const defaultPricing: ProductPricing[] = [
  // ============================================
  // SANDWICH PANELS
  // ============================================
  {
    productSlug: 'sandwich-puf-panel',
    productName: 'Sandwich PUF Panel',
    category: 'Sandwich Panels',
    sku: 'PHX-PUF-001',
    basePrice: 850,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 850, sku: 'PHX-PUF-30' },
      { thickness: '40mm', price: 950, sku: 'PHX-PUF-40' },
      { thickness: '50mm', price: 1100, sku: 'PHX-PUF-50' },
      { thickness: '60mm', price: 1250, sku: 'PHX-PUF-60' },
      { thickness: '80mm', price: 1500, sku: 'PHX-PUF-80' },
      { thickness: '100mm', price: 1750, sku: 'PHX-PUF-100' },
      { thickness: '120mm', price: 2000, sku: 'PHX-PUF-120' },
      { thickness: '150mm', price: 2400, sku: 'PHX-PUF-150' },
    ],
  },
  {
    productSlug: 'roofing-puf-panel',
    productName: 'Roofing PUF Panel',
    category: 'Sandwich Panels',
    sku: 'PHX-ROOF-001',
    basePrice: 950,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 950, sku: 'PHX-ROOF-30' },
      { thickness: '40mm', price: 1100, sku: 'PHX-ROOF-40' },
      { thickness: '50mm', price: 1250, sku: 'PHX-ROOF-50' },
      { thickness: '60mm', price: 1400, sku: 'PHX-ROOF-60' },
      { thickness: '80mm', price: 1650, sku: 'PHX-ROOF-80' },
      { thickness: '100mm', price: 1900, sku: 'PHX-ROOF-100' },
      { thickness: '120mm', price: 2150, sku: 'PHX-ROOF-120' },
      { thickness: '150mm', price: 2600, sku: 'PHX-ROOF-150' },
    ],
  },
  {
    productSlug: 'pir-panel',
    productName: 'PIR Panel',
    category: 'Sandwich Panels',
    sku: 'PHX-PIR-001',
    basePrice: 1200,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '40mm', price: 1200, sku: 'PHX-PIR-40' },
      { thickness: '50mm', price: 1400, sku: 'PHX-PIR-50' },
      { thickness: '60mm', price: 1600, sku: 'PHX-PIR-60' },
      { thickness: '80mm', price: 1900, sku: 'PHX-PIR-80' },
      { thickness: '100mm', price: 2200, sku: 'PHX-PIR-100' },
      { thickness: '120mm', price: 2500, sku: 'PHX-PIR-120' },
      { thickness: '150mm', price: 3000, sku: 'PHX-PIR-150' },
    ],
  },
  {
    productSlug: 'rockwool-panel',
    productName: 'Rockwool Panel',
    category: 'Sandwich Panels',
    sku: 'PHX-RW-001',
    basePrice: 1400,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm', price: 1400, sku: 'PHX-RW-50' },
      { thickness: '80mm', price: 1750, sku: 'PHX-RW-80' },
      { thickness: '100mm', price: 2000, sku: 'PHX-RW-100' },
      { thickness: '120mm', price: 2300, sku: 'PHX-RW-120' },
      { thickness: '150mm', price: 2700, sku: 'PHX-RW-150' },
      { thickness: '200mm', price: 3200, sku: 'PHX-RW-200' },
    ],
  },
  {
    productSlug: 'fm-approved-panel',
    productName: 'FM Approved Panel',
    category: 'Sandwich Panels',
    sku: 'PHX-FM-001',
    basePrice: 1600,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm PIR', price: 1600, sku: 'PHX-FM-PIR-50' },
      { thickness: '80mm PIR', price: 2100, sku: 'PHX-FM-PIR-80' },
      { thickness: '100mm PIR', price: 2500, sku: 'PHX-FM-PIR-100' },
      { thickness: '100mm Rockwool', price: 2800, sku: 'PHX-FM-RW-100' },
      { thickness: '120mm Rockwool', price: 3200, sku: 'PHX-FM-RW-120' },
      { thickness: '150mm Rockwool', price: 3800, sku: 'PHX-FM-RW-150' },
    ],
  },
  {
    productSlug: 'wall-ceiling-panel',
    productName: 'Wall & Ceiling Panel',
    category: 'Sandwich Panels',
    sku: 'PHX-WALL-001',
    basePrice: 750,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '30mm', price: 750, sku: 'PHX-WALL-30' },
      { thickness: '40mm', price: 850, sku: 'PHX-WALL-40' },
      { thickness: '50mm', price: 950, sku: 'PHX-WALL-50' },
      { thickness: '60mm', price: 1100, sku: 'PHX-WALL-60' },
      { thickness: '80mm', price: 1300, sku: 'PHX-WALL-80' },
      { thickness: '100mm', price: 1500, sku: 'PHX-WALL-100' },
    ],
  },

  // ============================================
  // DOORS
  // ============================================
  {
    productSlug: 'cleanroom-door',
    productName: 'Cleanroom Door',
    category: 'Doors',
    sku: 'PHX-CRD-001',
    basePrice: 35000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Single Leaf 900x2100mm', price: 35000, sku: 'PHX-CRD-S90' },
      { thickness: 'Single Leaf 1000x2100mm', price: 38000, sku: 'PHX-CRD-S100' },
      { thickness: 'Double Leaf 1200x2100mm', price: 55000, sku: 'PHX-CRD-D120' },
      { thickness: 'Double Leaf 1500x2100mm', price: 65000, sku: 'PHX-CRD-D150' },
      { thickness: 'Double Leaf 1800x2100mm', price: 75000, sku: 'PHX-CRD-D180' },
      { thickness: 'Sliding Door 1200x2100mm', price: 85000, sku: 'PHX-CRD-SL120' },
    ],
  },
  {
    productSlug: 'fire-door-emergency-exit',
    productName: 'Fire Door – Emergency Exit',
    category: 'Doors',
    sku: 'PHX-FED-001',
    basePrice: 28000,
    priceUnit: 'per unit',
    variants: [
      { thickness: '60 min Single 900x2100mm', price: 28000, sku: 'PHX-FED-60S' },
      { thickness: '60 min Double 1200x2100mm', price: 45000, sku: 'PHX-FED-60D' },
      { thickness: '90 min Single 900x2100mm', price: 35000, sku: 'PHX-FED-90S' },
      { thickness: '90 min Double 1200x2100mm', price: 55000, sku: 'PHX-FED-90D' },
      { thickness: '120 min Single 900x2100mm', price: 42000, sku: 'PHX-FED-120S' },
      { thickness: '120 min Double 1200x2100mm', price: 68000, sku: 'PHX-FED-120D' },
    ],
  },
  {
    productSlug: 'fire-rated-multipurpose-door',
    productName: 'Fire Rated Multipurpose Door',
    category: 'Doors',
    sku: 'PHX-FMD-001',
    basePrice: 25000,
    priceUnit: 'per unit',
    variants: [
      { thickness: '60 min Single 900x2100mm', price: 25000, sku: 'PHX-FMD-60S' },
      { thickness: '60 min Double 1200x2100mm', price: 42000, sku: 'PHX-FMD-60D' },
      { thickness: '90 min Single 900x2100mm', price: 32000, sku: 'PHX-FMD-90S' },
      { thickness: '90 min Double 1200x2100mm', price: 52000, sku: 'PHX-FMD-90D' },
      { thickness: '120 min Single 900x2100mm', price: 38000, sku: 'PHX-FMD-120S' },
      { thickness: '120 min Double 1200x2100mm', price: 62000, sku: 'PHX-FMD-120D' },
    ],
  },
  {
    productSlug: 'cold-storage-door',
    productName: 'Cold Storage Door',
    category: 'Doors',
    sku: 'PHX-CSD-001',
    basePrice: 45000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Hinged 1000x2100mm 100mm', price: 45000, sku: 'PHX-CSD-H100' },
      { thickness: 'Hinged 1200x2100mm 100mm', price: 52000, sku: 'PHX-CSD-H120' },
      { thickness: 'Sliding 1500x2100mm 100mm', price: 75000, sku: 'PHX-CSD-S150' },
      { thickness: 'Sliding 2000x2100mm 120mm', price: 95000, sku: 'PHX-CSD-S200' },
      { thickness: 'Bi-parting 2500x2500mm', price: 125000, sku: 'PHX-CSD-BP250' },
      { thickness: 'Rapid Roll Freezer', price: 185000, sku: 'PHX-CSD-RR' },
    ],
  },
  {
    productSlug: 'hermetic-door',
    productName: 'Hermetic Door',
    category: 'Doors',
    sku: 'PHX-HRM-001',
    basePrice: 125000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Single Leaf 1000x2100mm', price: 125000, sku: 'PHX-HRM-S100' },
      { thickness: 'Single Leaf 1200x2100mm', price: 138000, sku: 'PHX-HRM-S120' },
      { thickness: 'Double Leaf 1500x2100mm', price: 185000, sku: 'PHX-HRM-D150' },
      { thickness: 'Double Leaf 1800x2100mm', price: 215000, sku: 'PHX-HRM-D180' },
      { thickness: 'Lead-lined (X-ray)', price: 195000, sku: 'PHX-HRM-XR' },
      { thickness: 'ICU/OT Interlock System', price: 285000, sku: 'PHX-HRM-ICU' },
    ],
  },

  // ============================================
  // CLEANROOM SOLUTIONS
  // ============================================
  {
    productSlug: 'cleanroom-partition',
    productName: 'Cleanroom Partition',
    category: 'Cleanroom Solutions',
    sku: 'PHX-CRP-001',
    basePrice: 2800,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: '50mm PUF Panel', price: 2800, sku: 'PHX-CRP-50P' },
      { thickness: '50mm PIR Panel', price: 3200, sku: 'PHX-CRP-50R' },
      { thickness: '50mm Rockwool Panel', price: 3800, sku: 'PHX-CRP-50W' },
      { thickness: '60mm PUF Panel', price: 3100, sku: 'PHX-CRP-60P' },
      { thickness: '80mm PUF Panel', price: 3600, sku: 'PHX-CRP-80P' },
      { thickness: 'SS 304 Clad System', price: 4500, sku: 'PHX-CRP-SS' },
    ],
  },
  {
    productSlug: 'cleanroom-false-ceiling',
    productName: 'Cleanroom False Ceiling',
    category: 'Cleanroom Solutions',
    sku: 'PHX-CRC-001',
    basePrice: 3500,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: 'Non-walkable 50mm', price: 3500, sku: 'PHX-CRC-NW50' },
      { thickness: 'Non-walkable 60mm', price: 3900, sku: 'PHX-CRC-NW60' },
      { thickness: 'Walkable 80mm', price: 5500, sku: 'PHX-CRC-W80' },
      { thickness: 'Walkable 100mm', price: 6500, sku: 'PHX-CRC-W100' },
      { thickness: 'T-Grid System', price: 4200, sku: 'PHX-CRC-TG' },
      { thickness: 'SS Clad Walkable', price: 8500, sku: 'PHX-CRC-SSW' },
    ],
  },
  {
    productSlug: 'cleanroom-doors',
    productName: 'Cleanroom Doors (Solutions)',
    category: 'Cleanroom Solutions',
    sku: 'PHX-CRDS-001',
    basePrice: 32000,
    priceUnit: 'per unit',
    variants: [
      { thickness: 'Swing Single 900x2100mm', price: 32000, sku: 'PHX-CRDS-S90' },
      { thickness: 'Swing Double 1500x2100mm', price: 52000, sku: 'PHX-CRDS-D150' },
      { thickness: 'Sliding Single 1000x2100mm', price: 65000, sku: 'PHX-CRDS-SL100' },
      { thickness: 'Sliding Double 1800x2100mm', price: 95000, sku: 'PHX-CRDS-SLD180' },
      { thickness: 'Airtight Swing', price: 48000, sku: 'PHX-CRDS-AT' },
      { thickness: 'Interlocked Pair', price: 85000, sku: 'PHX-CRDS-INT' },
    ],
  },
  {
    productSlug: 'cleanroom-flooring',
    productName: 'Cleanroom Flooring',
    category: 'Cleanroom Solutions',
    sku: 'PHX-CRF-001',
    basePrice: 850,
    priceUnit: 'per sq.mtr',
    variants: [
      { thickness: 'Epoxy Coating 2mm', price: 850, sku: 'PHX-CRF-EP2' },
      { thickness: 'Epoxy Self-leveling 3mm', price: 1200, sku: 'PHX-CRF-EP3' },
      { thickness: 'PU Screed 4mm', price: 1500, sku: 'PHX-CRF-PU4' },
      { thickness: 'ESD Epoxy 3mm', price: 1400, sku: 'PHX-CRF-ESD' },
      { thickness: 'Vinyl Sheet Antistatic', price: 950, sku: 'PHX-CRF-VIN' },
      { thickness: 'Raised Access Floor', price: 3500, sku: 'PHX-CRF-RAF' },
    ],
  },
];

// Helper functions for pricing
export function getProductPricing(productSlug: string): ProductPricing | undefined {
  return defaultPricing.find((p) => p.productSlug === productSlug);
}

export function getVariantPrice(productSlug: string, variantSku: string): number | undefined {
  const product = getProductPricing(productSlug);
  if (!product) return undefined;
  const variant = product.variants.find((v) => v.sku === variantSku);
  return variant?.price;
}

export function getAllSkus(): { sku: string; productName: string; variant: string; price: number; unit: string }[] {
  const allSkus: { sku: string; productName: string; variant: string; price: number; unit: string }[] = [];
  
  for (const product of defaultPricing) {
    for (const variant of product.variants) {
      allSkus.push({
        sku: variant.sku,
        productName: product.productName,
        variant: variant.thickness,
        price: variant.price,
        unit: product.priceUnit,
      });
    }
  }
  
  return allSkus;
}

// Generate CSV content for Google Sheets template
export function generatePriceSheetCSV(): string {
  const headers = ['SKU', 'Product Name', 'Variant/Thickness', 'Price (INR)', 'Unit', 'Last Updated'];
  const rows = getAllSkus().map((item) => [
    item.sku,
    item.productName,
    item.variant,
    item.price.toString(),
    item.unit,
    new Date().toISOString().split('T')[0],
  ]);
  
  return [headers.join(','), ...rows.map((row) => row.join(','))].join('\n');
}

