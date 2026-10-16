// Генерирует крошечные размытые превью (blur-заглушки) для фото из public/.
// Они показываются мгновенно, пока грузится настоящая картинка.
// Запускается автоматически перед `npm run build` (prebuild), результат — lib/blur-data.json.
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = path.resolve("public");
const OUT_FILE = path.resolve("lib/blur-data.json");
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
for await (const file of walk(PUBLIC_DIR)) {
  if (!IMAGE_EXT.test(file) || SKIP.test(path.basename(file))) continue;
  const buf = await sharp(file).resize(8, 8, { fit: "inside" }).webp({ quality: 40 }).toBuffer();
  const url = "/" + path.relative(PUBLIC_DIR, file).split(path.sep).join("/");
  data[url] = `data:image/webp;base64,${buf.toString("base64")}`;
}

await writeFile(OUT_FILE, JSON.stringify(data, Object.keys(data).sort(), 0) + "\n");
console.log(`blur placeholders: ${Object.keys(data).length} images -> ${path.relative(process.cwd(), OUT_FILE)}`);
