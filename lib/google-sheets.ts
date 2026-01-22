/**
 * Google Sheets Integration for Price Management
 * 
 * This module fetches product prices from a published Google Sheet.
 * The sheet must be published to the web as CSV for this to work.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a Google Sheet with columns: SKU, Product Name, Variant, Price, Unit
 * 2. Go to File > Share > Publish to web
 * 3. Select "Comma-separated values (.csv)" format
 * 4. Copy the published URL and set it in GOOGLE_SHEET_CSV_URL env variable
 * 
 * Sheet Format:
 * | SKU          | Product Name     | Variant      | Price | Unit        |
 * |--------------|------------------|--------------|-------|-------------|
 * | PHX-PUF-30   | Sandwich PUF     | 30mm         | 850   | per sq.mtr  |
 * | PHX-PUF-40   | Sandwich PUF     | 40mm         | 950   | per sq.mtr  |
 */

import { defaultPricing, ProductPricing, ProductVariant } from './shop-prices';

// Cache for prices to avoid frequent API calls
interface PriceCache {
  data: Map<string, number>;
  lastFetched: number;
}

let priceCache: PriceCache = {
  data: new Map(),
  lastFetched: 0,
};

// Cache duration in milliseconds (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

/**
 * Parses CSV content into price data
 */
function parseCSV(csvContent: string): Map<string, number> {
  const prices = new Map<string, number>();
  const lines = csvContent.split('\n');
  
  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    
    // Parse CSV line (handles quoted values)
    const values = line.split(',').map(v => v.trim().replace(/^"|"$/g, ''));
    
    if (values.length >= 4) {
      const sku = values[0];
      const price = parseFloat(values[3]);
      
      if (sku && !isNaN(price)) {
        prices.set(sku, price);
      }
    }
  }
  
  return prices;
}

/**
 * Fetches prices from Google Sheet (published as CSV)
 */
export async function fetchPricesFromSheet(): Promise<Map<string, number>> {
  const sheetUrl = process.env.GOOGLE_SHEET_CSV_URL;
  
  if (!sheetUrl) {
    console.warn('GOOGLE_SHEET_CSV_URL not set, using default prices');
    return getDefaultPricesMap();
  }
  
  // Check cache
  const now = Date.now();
  if (priceCache.data.size > 0 && (now - priceCache.lastFetched) < CACHE_DURATION) {
    return priceCache.data;
  }
  
  try {
    const response = await fetch(sheetUrl, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch sheet: ${response.status}`);
    }
    
    const csvContent = await response.text();
    const prices = parseCSV(csvContent);
    
    // Update cache
    priceCache = {
      data: prices,
      lastFetched: now,
    };
    
    return prices;
  } catch (error) {
    console.error('Error fetching prices from Google Sheet:', error);
    // Return cached data if available, otherwise default prices
    if (priceCache.data.size > 0) {
      return priceCache.data;
    }
    return getDefaultPricesMap();
  }
}

/**
 * Gets default prices as a Map for fallback
 */
function getDefaultPricesMap(): Map<string, number> {
  const prices = new Map<string, number>();
  
  for (const product of defaultPricing) {
    for (const variant of product.variants) {
      prices.set(variant.sku, variant.price);
    }
  }
  
  return prices;
}

/**
 * Gets the current price for a SKU (with Google Sheets integration)
 */
export async function getPrice(sku: string): Promise<number | undefined> {
  const prices = await fetchPricesFromSheet();
  return prices.get(sku);
}

/**
 * Gets updated product pricing by merging Google Sheet data with defaults
 */
export async function getUpdatedProductPricing(productSlug: string): Promise<ProductPricing | undefined> {
  const defaultProduct = defaultPricing.find(p => p.productSlug === productSlug);
  if (!defaultProduct) return undefined;
  
  const sheetPrices = await fetchPricesFromSheet();
  
  // Update variants with sheet prices
  const updatedVariants: ProductVariant[] = defaultProduct.variants.map(variant => ({
    ...variant,
    price: sheetPrices.get(variant.sku) ?? variant.price,
  }));
  
  // Find the lowest price for basePrice
  const basePrice = Math.min(...updatedVariants.map(v => v.price));
  
  return {
    ...defaultProduct,
    basePrice,
    variants: updatedVariants,
  };
}

/**
 * Gets all product pricing with Google Sheet updates
 */
export async function getAllUpdatedPricing(): Promise<ProductPricing[]> {
  const sheetPrices = await fetchPricesFromSheet();
  
  return defaultPricing.map(product => {
    const updatedVariants: ProductVariant[] = product.variants.map(variant => ({
      ...variant,
      price: sheetPrices.get(variant.sku) ?? variant.price,
    }));
    
    const basePrice = Math.min(...updatedVariants.map(v => v.price));
    
    return {
      ...product,
      basePrice,
      variants: updatedVariants,
    };
  });
}

/**
 * Clears the price cache (useful for manual refresh)
 */
export function clearPriceCache(): void {
  priceCache = {
    data: new Map(),
    lastFetched: 0,
  };
}

