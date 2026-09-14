/**
 * Product photos that shipped with broken filenames: ROCHWOOL for the rockwool
 * panels, Partation for the cleanroom partitions, a doubled .jpg.webp
 * extension, and a handful carrying a literal space that every URL had to
 * encode as %20.
 *
 * The files are renamed. Image search has the old URLs, so each one redirects
 * to the file it became rather than starting to 404.
 */

const ROCKWOOL_DIR = '/images/products/sandwich-panels/RockWool-panel';
const PARTITION_DIR = '/images/products/cleanroom/partition';

/** Extensions by panel number; everything unlisted is .jpg. */
const ROCKWOOL_EXTENSIONS = { 13: 'png', 15: 'webp', 16: 'webp', 17: 'webp' };

const rockwool = Array.from({ length: 17 }, (_, i) => i + 1).map((n) => {
  // 14 was PHOENIXX_ROCHWOOL_PANEL14.jpg.webp, a webp named as if it were a jpg.
  const from = n === 14 ? 'PHOENIXX_ROCHWOOL_PANEL14.jpg.webp' : `PHOENIXX_ROCHWOOL_PANEL${n}.${ROCKWOOL_EXTENSIONS[n] ?? 'jpg'}`;
  const to = `PHOENIXX_ROCKWOOL_PANEL${n}.${n === 14 ? 'webp' : (ROCKWOOL_EXTENSIONS[n] ?? 'jpg')}`;
  return { source: `${ROCKWOOL_DIR}/${from}`, destination: `${ROCKWOOL_DIR}/${to}`, permanent: true };
});

const partitions = Array.from({ length: 12 }, (_, i) => i + 1).map((n) => ({
  source: `${PARTITION_DIR}/Cleanroom-Partation-supplier-Manufacture-in-Gujarat${n}.jpg`,
  destination: `${PARTITION_DIR}/Cleanroom-Partition-supplier-Manufacture-in-Gujarat${n}.jpg`,
  permanent: true,
}));

/**
 * Filenames that held a literal space. Redirect matching runs against the raw
 * pathname, so the source has to carry the %20 a browser actually sends.
 */
const spaced = [
  [
    '/images/products/cleanroom/ceiling/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
    '/images/products/cleanroom/ceiling/Pharma-cleanroom-panel-manufacturers-Phoenixx-infratech-projects26.jpg',
  ],
  [
    '/images/projects/gallery/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects74.jpg',
    '/images/projects/gallery/Pharma-cleanroom-panel-manufacturers-Phoenixx-infratech-projects74.jpg',
  ],
  [
    '/images/solutions/cleanroom/Pharma-clean room-panel-manufacturers-Phoenixx-infratech-projects68.jpeg',
    '/images/solutions/cleanroom/Pharma-cleanroom-panel-manufacturers-Phoenixx-infratech-projects68.jpeg',
  ],
  [
    '/images/industries/food-processing/Food-processing .jpg',
    '/images/industries/food-processing/Food-processing.jpg',
  ],
].map(([source, destination]) => ({
  source: source.replace(/ /g, '%20'),
  destination,
  permanent: true,
}));

export const renamedImageRedirects = [...rockwool, ...partitions, ...spaced];
