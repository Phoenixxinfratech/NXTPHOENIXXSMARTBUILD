#!/usr/bin/env node
/**
 * Turns a dropped-in hero photo into the responsive set the slider serves.
 *
 * Drop cold-storage-06.jpg into public/images/product-hero/cold-storage/ and
 * run `npm run hero:optimize`. It produces AVIF and WebP at three widths and
 * deletes the original, because the derivatives are what ships.
 *
 * Re-running is safe: anything already derived is skipped unless the source is
 * newer, so this can sit in front of a build without costing anything.
 */

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.join(process.cwd(), 'public', 'images', 'product-hero');

/** Widths chosen to cover phone, tablet/laptop and full-bleed desktop. */
export const HERO_WIDTHS = [768, 1280, 1920];

const SOURCE_RE = /\.(jpe?g|png|tiff?)$/i;
/** e.g. cold-storage-01-1280.webp */
const DERIVED_RE = /-(\d+)\.(avif|webp)$/i;

const args = new Set(process.argv.slice(2));
const FORCE = args.has('--force');

async function derive(sourcePath, collectionDir) {
  const base = path.basename(sourcePath).replace(SOURCE_RE, '');
  const image = sharp(sourcePath);
  const meta = await image.metadata();

  if (!meta.width || meta.width < 1600) {
    console.warn(
      `  ! ${base}: ${meta.width ?? '?'}px wide. A full-bleed hero wants 1920px; it will be upscaled on large screens.`
    );
  }

  const written = [];
  for (const width of HERO_WIDTHS) {
    // Never upscale: a 1600px source should not be stretched to a 1920px file.
    const targetWidth = Math.min(width, meta.width ?? width);

    for (const format of ['avif', 'webp']) {
      const out = path.join(collectionDir, `${base}-${width}.${format}`);
      if (!FORCE && fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(sourcePath).mtimeMs) {
        continue;
      }
      const pipeline = sharp(sourcePath).resize({ width: targetWidth, withoutEnlargement: true });
      // AVIF is slower to encode but lands roughly 30% under WebP at equal quality.
      const buf = await (format === 'avif'
        ? pipeline.avif({ quality: 58, effort: 4 })
        : pipeline.webp({ quality: 78 })
      ).toBuffer();
      fs.writeFileSync(out, buf);
      written.push(`${path.basename(out)} ${(buf.length / 1024).toFixed(0)}KB`);
    }
  }
  return written;
}

async function main() {
  if (!fs.existsSync(ROOT)) {
    console.log(`No ${path.relative(process.cwd(), ROOT)} yet, nothing to optimise.`);
    return;
  }

  const collections = fs
    .readdirSync(ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .sort();

  let total = 0;
  for (const collection of collections) {
    const dir = path.join(ROOT, collection);
    const sources = fs
      .readdirSync(dir)
      .filter((f) => SOURCE_RE.test(f) && !DERIVED_RE.test(f))
      .sort();
    if (sources.length === 0) continue;

    console.log(`${collection}/`);
    for (const file of sources) {
      const sourcePath = path.join(dir, file);
      const written = await derive(sourcePath, dir);
      if (written.length) {
        console.log(`  ${file} -> ${written.length} files`);
        written.forEach((w) => console.log(`      ${w}`));
        total += written.length;
      }
      fs.unlinkSync(sourcePath);
    }
  }

  console.log(total ? `\n${total} derivatives written.` : '\nNothing to do.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
