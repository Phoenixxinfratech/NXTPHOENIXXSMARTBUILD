import { NextResponse } from 'next/server';
import { fetchPricesFromSheet, getUpdatedProductPricing, getAllUpdatedPricing, clearPriceCache } from '@/lib/google-sheets';

/**
 * GET /api/prices - Get all product prices
 * GET /api/prices?product=sandwich-puf-panel - Get specific product prices
 * GET /api/prices?sku=PHX-PUF-30 - Get specific SKU price
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const productSlug = searchParams.get('product');
    const sku = searchParams.get('sku');
    
    // Get specific SKU price
    if (sku) {
      const prices = await fetchPricesFromSheet();
      const price = prices.get(sku);
      
      if (price === undefined) {
        return NextResponse.json(
          { error: 'SKU not found', sku },
          { status: 404 }
        );
      }
      
      return NextResponse.json({
        sku,
        price,
        currency: 'INR',
        lastUpdated: new Date().toISOString(),
      });
    }
    
    // Get specific product prices
    if (productSlug) {
      const product = await getUpdatedProductPricing(productSlug);
      
      if (!product) {
        return NextResponse.json(
          { error: 'Product not found', productSlug },
          { status: 404 }
        );
      }
      
      return NextResponse.json({
        product,
        currency: 'INR',
        lastUpdated: new Date().toISOString(),
      });
    }
    
    // Get all prices
    const allProducts = await getAllUpdatedPricing();
    
    return NextResponse.json({
      products: allProducts,
      currency: 'INR',
      lastUpdated: new Date().toISOString(),
      count: allProducts.length,
    });
  } catch (error) {
    console.error('Error fetching prices:', error);
    return NextResponse.json(
      { error: 'Failed to fetch prices' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/prices/refresh - Force refresh prices from Google Sheet
 * This clears the cache and fetches fresh data
 */
export async function POST(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get('action');
    
    if (action === 'refresh') {
      clearPriceCache();
      const prices = await fetchPricesFromSheet();
      
      return NextResponse.json({
        success: true,
        message: 'Price cache cleared and refreshed',
        priceCount: prices.size,
        lastUpdated: new Date().toISOString(),
      });
    }
    
    return NextResponse.json(
      { error: 'Invalid action. Use ?action=refresh' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error refreshing prices:', error);
    return NextResponse.json(
      { error: 'Failed to refresh prices' },
      { status: 500 }
    );
  }
}

