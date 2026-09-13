import { NextRequest, NextResponse } from 'next/server';

// The IndexNow key is public by design: it is published at /{key}.txt so search
// engines can verify domain ownership. Keeping it in env only so it can be
// rotated without a code change.
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '2f9deb3c91c64f92b7980e9c2bd6d948';
const HOST = 'phoenixxsmartbuild.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// Submitting URLs on our behalf affects how search engines crawl the domain, so
// the trigger itself must be authenticated even though the key is not secret.
const TRIGGER_SECRET = process.env.INDEXNOW_TRIGGER_SECRET || process.env.REVALIDATION_SECRET;

const MAX_URLS_PER_REQUEST = 100;

const SEARCH_ENGINES = [
  'https://www.bing.com/indexnow',
  'https://api.indexnow.org/indexnow',
  'https://yandex.com/indexnow',
  'https://search.seznam.cz/indexnow',
  'https://searchadvisor.naver.com/indexnow',
];

export async function POST(request: NextRequest) {
  try {
    if (!TRIGGER_SECRET) {
      return NextResponse.json(
        { error: 'IndexNow submission is not configured' },
        { status: 503 }
      );
    }

    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    if (token !== TRIGGER_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { urls } = body;

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'urls array is required. Example: { "urls": ["/about-us", "/products"] }' },
        { status: 400 }
      );
    }

    if (urls.length > MAX_URLS_PER_REQUEST) {
      return NextResponse.json(
        { error: `A maximum of ${MAX_URLS_PER_REQUEST} URLs may be submitted per request` },
        { status: 400 }
      );
    }

    // IndexNow rejects mixed hosts, and accepting arbitrary URLs would let a
    // caller submit someone else's pages under our key.
    const fullUrls: string[] = [];
    for (const url of urls) {
      if (typeof url !== 'string') {
        return NextResponse.json({ error: 'Each URL must be a string' }, { status: 400 });
      }
      const absolute = url.startsWith('http') ? url : `https://${HOST}${url.startsWith('/') ? url : `/${url}`}`;
      let parsed: URL;
      try {
        parsed = new URL(absolute);
      } catch {
        return NextResponse.json({ error: `Invalid URL: ${url}` }, { status: 400 });
      }
      if (parsed.hostname !== HOST) {
        return NextResponse.json(
          { error: `URL must belong to ${HOST}: ${url}` },
          { status: 400 }
        );
      }
      fullUrls.push(parsed.toString());
    }

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
    configured: Boolean(TRIGGER_SECRET),
    engines: SEARCH_ENGINES,
    usage: 'POST /api/indexnow with { "urls": ["/path1", "/path2"] } and an Authorization: Bearer <secret> header',
  });
}
