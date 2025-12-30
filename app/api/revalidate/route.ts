import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath, revalidateTag } from 'next/cache';

/**
 * On-Demand Revalidation API Endpoint
 * Triggered by Sanity CMS webhooks to revalidate content
 */

// Secret token for webhook authentication
const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET;

interface RevalidationPayload {
  _type: string;
  _id: string;
  slug?: { current: string };
}

// Map Sanity document types to paths
const typeToPath: Record<string, (slug?: string) => string[]> = {
  product: (slug) => ['/products', slug ? `/products/${slug}` : ''],
  solution: (slug) => ['/solutions', slug ? `/solutions/${slug}` : ''],
  industry: (slug) => ['/industries', slug ? `/industries/${slug}` : ''],
  cleanroom: (slug) => ['/cleanroom-solutions', slug ? `/cleanroom-solutions/${slug}` : ''],
  post: (slug) => ['/blog', slug ? `/blog/${slug}` : ''],
  resource: (slug) => ['/resources', slug ? `/resources/${slug}` : ''],
  faq: () => ['/faqs'],
  page: (slug) => [slug === 'home' ? '/' : `/${slug}`],
  siteSettings: () => ['/'],
};

export async function POST(request: NextRequest) {
  try {
    // Verify the revalidation secret
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.replace('Bearer ', '');

    if (!REVALIDATION_SECRET) {
      console.warn('REVALIDATION_SECRET not set - skipping auth check');
    } else if (token !== REVALIDATION_SECRET) {
      return NextResponse.json(
        { error: 'Invalid revalidation token' },
        { status: 401 }
      );
    }

    const body: RevalidationPayload = await request.json();
    const { _type, slug } = body;
    const slugValue = slug?.current;

    // Get paths to revalidate based on document type
    const pathGenerator = typeToPath[_type];
    
    if (!pathGenerator) {
      // Revalidate homepage as fallback
      revalidatePath('/');
      return NextResponse.json({
        revalidated: true,
        message: `Unknown type ${_type}, revalidated homepage`,
      });
    }

    const paths = pathGenerator(slugValue).filter(Boolean);

    // Revalidate all relevant paths
    for (const path of paths) {
      revalidatePath(path);
    }

    // Also revalidate by tag if needed
    if (_type) {
      revalidateTag(_type);
    }

    return NextResponse.json({
      revalidated: true,
      paths,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { error: 'Error revalidating content' },
      { status: 500 }
    );
  }
}

// GET endpoint for manual revalidation (protected)
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get('secret');
  const path = searchParams.get('path');

  if (!REVALIDATION_SECRET) {
    return NextResponse.json(
      { error: 'Revalidation not configured' },
      { status: 500 }
    );
  }

  if (secret !== REVALIDATION_SECRET) {
    return NextResponse.json(
      { error: 'Invalid secret' },
      { status: 401 }
    );
  }

  if (!path) {
    return NextResponse.json(
      { error: 'Path parameter required' },
      { status: 400 }
    );
  }

  try {
    revalidatePath(path);
    return NextResponse.json({
      revalidated: true,
      path,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error revalidating' },
      { status: 500 }
    );
  }
}

