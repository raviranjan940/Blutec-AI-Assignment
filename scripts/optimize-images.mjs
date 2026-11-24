// Pre-generates resized WebP copies of every photo in public/media, the way
// Next.js <Image> served them on the original site (srcset widths, quality 75).
// Smaller images decode faster, which keeps scroll animations smooth.
// Usage: npm run images
import { readdir, stat, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve('public');
const OUT_ROOT = path.join(ROOT, '_img');
const WIDTHS = [256, 384, 640, 828, 1080, 1200, 1920];
const EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const manifest = {};
for await (const file of walk(path.join(ROOT, 'media'))) {
  if (!EXT.has(path.extname(file).toLowerCase())) continue;
  const url = '/' + path.relative(ROOT, file).split(path.sep).join('/');
  const { width } = await sharp(file).metadata();
  const widths = WIDTHS.filter((w) => w < width);
  widths.push(Math.min(width, 3840));
  const outDir = path.join(OUT_ROOT, path.dirname(path.relative(ROOT, file)));
  await mkdir(outDir, { recursive: true });
  const base = path.parse(file).name;
  for (const w of widths) {
    const out = path.join(outDir, `${base}-w${w}.webp`);
    try {
      await stat(out);
    } catch {
      await sharp(file).resize({ width: w }).webp({ quality: 75 }).toFile(out);
    }
  }
  manifest[url] = widths;
}
await writeFile(path.resolve('src/shims/image-manifest.json'), JSON.stringify(manifest));
console.log(`Optimized ${Object.keys(manifest).length} images`);
