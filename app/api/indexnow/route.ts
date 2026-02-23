import { NextRequest, NextResponse } from 'next/server';

const INDEXNOW_KEY = '2f9deb3c91c64f92b7980e9c2bd6d948';
const HOST = 'phoenixxsmartbuild.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

const SEARCH_ENGINES = [
  'https://www.bing.com/indexnow',
  'https://api.indexnow.org/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow',
  'https://searchadvisor.naver.com/indexnow',
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'urls array is required. Example: { "urls": ["/about-us", "/products"] }' },
        { status: 400 }
      );
    }

    const fullUrls = urls.map((url: string) =>
      url.startsWith('http') ? url : `https://${HOST}${url}`
    );

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: fullUrls,
    };

    const results = await Promise.allSettled(
      SEARCH_ENGINES.map(async (engine) => {
        const res = await fetch(engine, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
          body: JSON.stringify(payload),
        });
        return { engine, status: res.status, ok: res.ok };
      })
    );

    const summary = results.map((r, i) => {
      if (r.status === 'fulfilled') {
        return { engine: SEARCH_ENGINES[i], httpStatus: r.value.status, success: r.value.ok };
      }
      return { engine: SEARCH_ENGINES[i], httpStatus: 0, success: false, error: String(r.reason) };
    });

    const allSuccess = summary.every((s) => s.success);

    return NextResponse.json({
      success: allSuccess,
      message: `Submitted ${fullUrls.length} URLs to ${SEARCH_ENGINES.length} search engines`,
      urlCount: fullUrls.length,
      engines: summary,
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit URLs', details: String(error) },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    service: 'IndexNow API',
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    engines: SEARCH_ENGINES,
    usage: 'POST /api/indexnow with { "urls": ["/path1", "/path2"] }',
  });
}
