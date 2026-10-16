// Генерирует крошечные размытые превью (blur-заглушки) для фото из public/.
// Они показываются мгновенно, пока грузится настоящая картинка.
// Запускается автоматически перед `npm run build` (prebuild), результат — lib/blur-data.json.
// Для фонов первого экрана (*_bg.*) — отдельные, более детальные превью в lib/blur-bg.json.
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const OUT_FILE = path.resolve("lib/blur-data.json");
const OUT_BG_FILE = path.resolve("lib/blur-bg.json");
const BG_IMAGE = /_bg\.(jpe?g|png)$/i;
const IMAGE_EXT = /\.(jpe?g|png)$/i;
// Логотипы и иконки с прозрачностью — без заглушки.
const SKIP = /(logo|icon|favicon|diamond)/i;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const data = {};
const bgData = {};
for await (const file of walk(PUBLIC_DIR)) {
  if (!IMAGE_EXT.test(file) || SKIP.test(path.basename(file))) continue;
  const buf = await sharp(file).resize(8, 8, { fit: "inside" }).webp({ quality: 40 }).toBuffer();
  const url = "/" + path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
  data[url] = `data:image/webp;base64,${buf.toString("base64")}`;
  if (BG_IMAGE.test(file)) {
    const bgBuf = await sharp(file).resize(32, 32, { fit: "inside" }).webp({ quality: 50 }).toBuffer();
    bgData[url] = `data:image/webp;base64,${bgBuf.toString("base64")}`;
  }
}

await writeFile(OUT_FILE, JSON.stringify(data, Object.keys(data).sort(), 0) + "\n");
await writeFile(OUT_BG_FILE, JSON.stringify(bgData, Object.keys(bgData).sort(), 0) + "\n");
console.log(
  `blur placeholders: ${Object.keys(data).length} images, ${Object.keys(bgData).length} backgrounds -> lib/blur-data.json, lib/blur-bg.json`
);
