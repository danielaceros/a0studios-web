import sharp from "sharp";
import { readdir, copyFile } from "fs/promises";
import { join, extname } from "path";

const INPUT = "./public/images";
const OUTPUT = "./public/optimized";

// Clean name mapping
const fileMap = {
  "logo.png": { out: "logo.webp", width: 400 },
  "Copia de Copia de DANIEL ACERO©.png": { out: "og-image.webp", width: 1200 },
  "ChatGPT Image 22 feb 2026, 19_24_29.png": { out: "studio-setup.webp", width: 1200 },
  "ChatGPT Image 22 feb 2026, 20_07_23.png": { out: "studio-equipment.webp", width: 1200 },
  "ChatGPT Image 22 feb 2026, 20_12_25.png": { out: "studio-talent.webp", width: 1200 },
  "ChatGPT Image 22 feb 2026, 20_25_02.png": { out: "studio-greenscreen.webp", width: 1200 },
  "9b2394ef-5f8f-4680-88f1-d4e6bea1b0f5.png": { out: "studio-recording.webp", width: 1200 },
  "IMG_5326.jpg": { out: "studio-space.webp", width: 1200 },
};

// Also create a smaller hero version of og-image
const extraOutputs = [
  { src: "Copia de Copia de DANIEL ACERO©.png", out: "hero-bg.webp", width: 1920, quality: 80 },
  { src: "logo.png", out: "logo-small.webp", width: 200 },
];

import { mkdir } from "fs/promises";
await mkdir(OUTPUT, { recursive: true });

// Convert images to WebP
for (const [filename, config] of Object.entries(fileMap)) {
  const inputPath = join(INPUT, filename);
  const outputPath = join(OUTPUT, config.out);

  try {
    await sharp(inputPath)
      .resize(config.width, null, { withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outputPath);

    const inputStat = await sharp(inputPath).metadata();
    const outputStat = await sharp(outputPath).metadata();
    console.log(`✓ ${filename} → ${config.out} (${inputStat.width}→${config.width}px)`);
  } catch (err) {
    console.error(`✗ ${filename}: ${err.message}`);
  }
}

// Extra outputs
for (const config of extraOutputs) {
  const inputPath = join(INPUT, config.src);
  const outputPath = join(OUTPUT, config.out);

  try {
    await sharp(inputPath)
      .resize(config.width, null, { withoutEnlargement: true })
      .webp({ quality: config.quality || 82 })
      .toFile(outputPath);
    console.log(`✓ ${config.src} → ${config.out} (${config.width}px)`);
  } catch (err) {
    console.error(`✗ ${config.src}: ${err.message}`);
  }
}

// Copy videos as-is (MP4 is already web-optimized, no ffmpeg available)
const videos = ["banner.mp4", "BROLL.mp4"];
for (const v of videos) {
  await copyFile(join(INPUT, v), join(OUTPUT, v));
  console.log(`✓ ${v} → copied (MP4 already web-compatible)`);
}

// Summary
const files = await readdir(OUTPUT);
console.log(`\n✅ Done! ${files.length} files in ${OUTPUT}`);
for (const f of files.sort()) {
  const stat = await import("fs").then(fs => fs.statSync(join(OUTPUT, f)));
  console.log(`   ${f} — ${(stat.size / 1024).toFixed(0)} KB`);
}
