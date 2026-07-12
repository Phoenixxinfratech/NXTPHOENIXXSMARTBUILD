/**
 * Heuristic Technical SEO Audit
 * Run: npx tsx scripts/seo-audit.ts
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.join(ROOT, 'app');
const COMPONENTS_DIR = path.join(ROOT, 'components');
const LIB_DIR = path.join(ROOT, 'lib');
const DOCS_DIR = path.join(ROOT, 'docs');

interface AuditResult {
  generatedAt: string;
  summary: {
    totalUrls: number;
    totalFilesScanned: number;
    orphanPages: number;
    duplicateTitles: number;
    duplicateDescriptions: number;
    thinPages: number;
    missingH1: number;
    multipleH1: number;
    headingSkips: number;
    imagesMissingAlt: number;
    rawImgTags: number;
    jsonLdIssues: number;
  };
  urls: string[];
  orphanPages: string[];
  duplicateTitles: { title: string; urls: string[] }[];
  duplicateDescriptions: { description: string; urls: string[] }[];
  thinPages: { file: string; wordCount: number }[];
  headingIssues: { file: string; issues: string[] }[];
  imageIssues: { file: string; issues: string[] }[];
  jsonLdIssues: { file: string; issues: string[] }[];
  inboundLinkCounts: Record<string, number>;
}

function walkDir(dir: string, ext: string[]): string[] {
  const results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...walkDir(full, ext));
    } else if (entry.isFile() && ext.some((e) => entry.name.endsWith(e))) {
      results.push(full);
    }
  }
  return results;
}

function normalizeHref(href: string): string {
  let h = href.split('?')[0].split('#')[0];
  if (h.endsWith('/') && h.length > 1) h = h.slice(0, -1);
  return h || '/';
}

function extractLinks(content: string): string[] {
  const links: string[] = [];
  const patterns = [
    /href=["']([^"']+)["']/g,
    /href=\{[`'"]([^`'"{}]+)[`'"]\}/g,
    /href=\{`([^`]+)`\}/g,
  ];
  for (const pattern of patterns) {
    let m;
    while ((m = pattern.exec(content)) !== null) {
      const href = m[1];
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('#')) continue;
      links.push(normalizeHref(href.startsWith('/') ? href : `/${href}`));
    }
  }
  return links;
}

function countWords(text: string): number {
  return text.replace(/<[^>]+>/g, ' ').replace(/\{[^}]+\}/g, ' ').split(/\s+/).filter(Boolean).length;
}

function extractMetadata(content: string): { title?: string; description?: string } {
  const titleMatch = content.match(/title:\s*[`'"]([^`'"]+)[`'"]/);
  const descMatch = content.match(/description:\s*[`'"]([^`'"]+)[`'"]/);
  const titleTemplate = content.match(/title:\s*`([^`]+)`/s);
  const descTemplate = content.match(/description:\s*`([^`]+)`/s) || content.match(/description:\s*\n?\s*[`'"]([^`'"]+)[`'"]/s);
  return {
    title: titleMatch?.[1] || titleTemplate?.[1],
    description: descMatch?.[1] || descTemplate?.[1],
  };
}

function checkHeadings(content: string, file: string): string[] {
  const issues: string[] = [];
  const h1Count = (content.match(/<h1[\s>]/gi) || []).length;
  const h1Jsx = (content.match(/className=.*text-.*>[\s\S]*?<\/h1>/gi) || []).length;
  const totalH1 = h1Count + (content.match(/<h1/gi) || []).length;

  if (totalH1 === 0 && !content.includes('RajasthanGeoPage') && !file.includes('[slug]') && !file.includes('[productLocation]')) {
    issues.push('missing_h1');
  }
  if (totalH1 > 1) issues.push(`multiple_h1:${totalH1}`);

  const levels: number[] = [];
  const headingRegex = /<h([1-6])[\s>]/gi;
  let hm;
  while ((hm = headingRegex.exec(content)) !== null) {
    levels.push(parseInt(hm[1], 10));
  }
  for (let i = 1; i < levels.length; i++) {
    if (levels[i] - levels[i - 1] > 1) {
      issues.push(`heading_skip:h${levels[i - 1]}_to_h${levels[i]}`);
      break;
    }
  }
  return issues;
}

function checkImages(content: string): string[] {
  const issues: string[] = [];
  const rawImg = (content.match(/<img[\s>]/gi) || []).length;
  if (rawImg > 0) issues.push(`raw_img_tags:${rawImg}`);

  const imageTags = content.match(/<Image[^>]*>/gi) || [];
  for (const tag of imageTags) {
    if (!tag.includes('alt=') && !tag.includes('alt ')) {
      issues.push('image_missing_alt');
      break;
    }
  }
  return issues;
}

function checkJsonLd(content: string): string[] {
  const issues: string[] = [];
  const blocks = content.match(/dangerouslySetInnerHTML:\s*\{\s*__html:\s*JSON\.stringify\(([^)]+)\)/g);
  const schemaBlocks = content.match(/const\s+\w+Schema\s*=\s*\{[\s\S]*?'@type':\s*'[^']+'/g) || [];

  for (const block of schemaBlocks) {
    if (!block.includes("'@context'")) issues.push('schema_missing_context');
    if (!block.includes("'@type'")) issues.push('schema_missing_type');
  }

  const jsonLdRegex = /type="application\/ld\+json"[^>]*dangerouslySetInnerHTML=\{\{[^}]*__html:\s*JSON\.stringify\(([\s\S]*?)\)/g;
  return issues;
}

function fileToUrl(filePath: string): string | null {
  const rel = path.relative(APP_DIR, filePath).replace(/\\/g, '/');
  if (!rel.endsWith('page.tsx') && !rel.endsWith('route.ts')) return null;
  if (rel === '(site)/page.tsx') return '/';
  if (rel.startsWith('api/')) return null;
  if (rel.includes('sitemap')) return null;

  let urlPath = rel.replace(/\/page\.tsx$/, '').replace(/\/route\.ts$/, '');
  urlPath = urlPath.replace(/\(site\)\/?/, '');
  urlPath = urlPath.replace(/\[[\w]+\]/g, '*');

  if (!urlPath || urlPath === 'page.tsx') return '/';
  return `/${urlPath}`;
}

async function loadDirectoryUrls(): Promise<string[]> {
  // Dynamic import with tsx path resolution
  const { getDirectorySections } = await import('../lib/directory-data');
  const sections = getDirectorySections();
  const urls = new Set<string>();
  for (const section of sections) {
    for (const link of section.links) {
      urls.add(normalizeHref(link.href));
    }
  }
  urls.add('/door-products-directory');
  urls.add('/lp/puf-panel-manufacturer-ahmedabad');
  urls.add('/phoenixx-puf-roofing-panels');
  urls.add('/puf-roofing-panels');
  urls.add('/puf-roofing-panel-manufacturer');
  urls.add('/puf-roofing-panel-price');
  urls.add('/puf-roofing-panel-supplier');
  return Array.from(urls).sort();
}

async function main() {
  const tsxFiles = [
    ...walkDir(APP_DIR, ['.tsx', '.ts']),
    ...walkDir(COMPONENTS_DIR, ['.tsx']),
    ...walkDir(LIB_DIR, ['.tsx', '.ts']),
  ];

  const allLinks: string[] = [];
  const metadataByFile: { file: string; url: string | null; title?: string; description?: string }[] = [];
  const thinPages: AuditResult['thinPages'] = [];
  const headingIssues: AuditResult['headingIssues'] = [];
  const imageIssues: AuditResult['imageIssues'] = [];
  const jsonLdIssues: AuditResult['jsonLdIssues'] = [];

  for (const file of tsxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    allLinks.push(...extractLinks(content));

    if (file.endsWith('page.tsx')) {
      const rel = path.relative(ROOT, file);
      const url = fileToUrl(file);
      const meta = extractMetadata(content);
      metadataByFile.push({ file: rel, url, ...meta });

      const wc = countWords(content);
      if (wc < 300 && !file.includes('[slug]') && !file.includes('[productLocation]') && !file.includes('[productSlug]')) {
        thinPages.push({ file: rel, wordCount: wc });
      }

      const hIssues = checkHeadings(content, rel);
      if (hIssues.length) headingIssues.push({ file: rel, issues: hIssues });

      const iIssues = checkImages(content);
      if (iIssues.length) imageIssues.push({ file: rel, issues: iIssues });

      const jIssues = checkJsonLd(content);
      if (jIssues.length) jsonLdIssues.push({ file: rel, issues: jIssues });
    }
  }

  const urls = await loadDirectoryUrls();
  const inboundCounts: Record<string, number> = {};
  for (const u of urls) inboundCounts[u] = 0;
  inboundCounts['/'] = 0;

  for (const link of allLinks) {
  const norm = normalizeHref(link);
    if (inboundCounts[norm] !== undefined) inboundCounts[norm]++;
    else if (urls.some((u) => u.includes('*') && norm.match(u.replace(/\*/g, '[^/]+')))) {
      // dynamic route match - skip
    }
  }

  const orphanPages = urls.filter((u) => !u.includes('*') && (inboundCounts[u] || 0) < 2);

  const titleMap = new Map<string, string[]>();
  const descMap = new Map<string, string[]>();
  for (const m of metadataByFile) {
    if (m.title) {
      const arr = titleMap.get(m.title) || [];
      arr.push(m.file);
      titleMap.set(m.title, arr);
    }
    if (m.description) {
      const arr = descMap.get(m.description) || [];
      arr.push(m.file);
      descMap.set(m.description, arr);
    }
  }

  const duplicateTitles = [...titleMap.entries()]
    .filter(([, files]) => files.length > 1)
    .map(([title, files]) => ({ title, urls: files }));

  const duplicateDescriptions = [...descMap.entries()]
    .filter(([, files]) => files.length > 1)
    .map(([description, urls]) => ({ description, urls }));

  const result: AuditResult = {
    generatedAt: new Date().toISOString(),
    summary: {
      totalUrls: urls.length,
      totalFilesScanned: tsxFiles.length,
      orphanPages: orphanPages.length,
      duplicateTitles: duplicateTitles.length,
      duplicateDescriptions: duplicateDescriptions.length,
      thinPages: thinPages.length,
      missingH1: headingIssues.filter((h) => h.issues.includes('missing_h1')).length,
      multipleH1: headingIssues.filter((h) => h.issues.some((i) => i.startsWith('multiple_h1'))).length,
      headingSkips: headingIssues.filter((h) => h.issues.some((i) => i.startsWith('heading_skip'))).length,
      imagesMissingAlt: imageIssues.filter((i) => i.issues.includes('image_missing_alt')).length,
      rawImgTags: imageIssues.reduce((s, i) => s + (parseInt(i.issues.find((x) => x.startsWith('raw_img'))?.split(':')[1] || '0', 10)), 0),
      jsonLdIssues: jsonLdIssues.length,
    },
    urls,
    orphanPages: orphanPages.slice(0, 100),
    duplicateTitles,
    duplicateDescriptions,
    thinPages: thinPages.slice(0, 50),
    headingIssues: headingIssues.slice(0, 50),
    imageIssues: imageIssues.slice(0, 50),
    jsonLdIssues,
    inboundLinkCounts: Object.fromEntries(
      Object.entries(inboundCounts).filter(([, c]) => c < 2).slice(0, 100)
    ),
  };

  if (!fs.existsSync(DOCS_DIR)) fs.mkdirSync(DOCS_DIR, { recursive: true });
  fs.writeFileSync(path.join(DOCS_DIR, 'seo-audit-results.json'), JSON.stringify(result, null, 2));

  console.log('SEO Audit Complete');
  console.log(JSON.stringify(result.summary, null, 2));
  console.log(`\nFull results: docs/seo-audit-results.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
