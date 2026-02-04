import { NextRequest, NextResponse } from 'next/server';

/**
 * IndexNow API Endpoint
 * Manually trigger URL submission to search engines
 * POST /api/indexnow with { urls: string[] }
 */

const INDEXNOW_KEY = '1e274df09718c048e4e12042b6dde8d4';
const HOST = 'phoenixxsmartbuild.com';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'URLs array is required' },
        { status: 400 }
      );
    }

    // Submit to IndexNow (Bing, Yandex, etc.)
    const indexNowResponse = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        host: HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
        urlList: urls.map(url => url.startsWith('http') ? url : `https://${HOST}${url}`),
      }),
    });

    if (indexNowResponse.ok) {
      return NextResponse.json({
        success: true,
        message: `Successfully submitted ${urls.length} URLs to IndexNow`,
        urls: urls,
      });
    } else {
      const errorText = await indexNowResponse.text();
      return NextResponse.json(
        { error: 'IndexNow submission failed', details: errorText },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('IndexNow error:', error);
    return NextResponse.json(
      { error: 'Failed to submit URLs' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    usage: 'POST /api/indexnow with { urls: ["/path1", "/path2"] }',
  });
}


