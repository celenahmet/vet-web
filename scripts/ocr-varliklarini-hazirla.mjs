import { copyFile, mkdir, readFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const kok = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const hedef = resolve(kok, 'public/ocr/v7');
const varliklar = [
  ['node_modules/tesseract.js/dist/worker.min.js', 'worker.min.js', 50_000],
  ['node_modules/tesseract.js-core/tesseract-core-lstm.wasm.js', 'tesseract-core-lstm.wasm.js', 1_000_000],
  ['node_modules/@tesseract.js-data/eng/4.0.0_best_int/eng.traineddata.gz', 'eng.traineddata.gz', 1_000_000],
];

const tesseractPaketi = JSON.parse(await readFile(resolve(kok, 'node_modules/tesseract.js/package.json'), 'utf8'));
const dilPaketi = JSON.parse(await readFile(resolve(kok, 'node_modules/@tesseract.js-data/eng/package.json'), 'utf8'));
if (tesseractPaketi.version !== '7.0.0' || dilPaketi.version !== '1.0.0') {
  throw new Error(`OCR varlık sürümü beklenenden farklı: tesseract ${tesseractPaketi.version}, eng ${dilPaketi.version}`);
}

await mkdir(hedef, { recursive: true });
for (const [kaynak, dosya, enAzBayt] of varliklar) {
  const kaynakYolu = resolve(kok, kaynak);
  const bilgi = await stat(kaynakYolu);
  if (bilgi.size < enAzBayt) throw new Error(`OCR varlığı eksik veya bozuk: ${kaynak}`);
  await copyFile(kaynakYolu, resolve(hedef, dosya));
}

console.log('OCR varlıkları: worker, yerel çekirdek ve İngilizce model hazır.');
