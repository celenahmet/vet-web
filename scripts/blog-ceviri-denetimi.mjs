/**
 * BLOG ÇEVİRİ DENETİMİ
 *
 * Türkçe sözlükte anahtar/değer yönü ters dönerse i18next kullanıcıya
 * `post_back_to_blog` gibi ham anahtarı gösterir. Blogun görünür yüzeylerinde
 * kullanılan sabit anahtarları kaynak koddan çıkarır; iki dilde de gerçek metne
 * çözülmeyen veya ters yazılmış kayıt varsa production build'i durdurur.
 */
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const BLOG_DOSYALARI = [
  'src/pages/Blog.tsx',
  'src/pages/BlogPost.tsx',
  'src/components/BlogKenarCubugu.tsx',
  'src/components/ReklamKutusu.tsx',
];
const ANAHTAR_DESENI = /\bt\('((?:blog|post|sidebar|ad)_[^']+)'/g;
const HAM_ANAHTAR_DESENI = /^(blog|post|sidebar|ad)_/;

const sozlukler = {
  tr: JSON.parse(readFileSync(join(KOK, 'src/locales/tr.json'), 'utf8')),
  en: JSON.parse(readFileSync(join(KOK, 'src/locales/en.json'), 'utf8')),
};
const kullanilanAnahtarlar = new Set();

for (const dosya of BLOG_DOSYALARI) {
  const kaynak = readFileSync(join(KOK, dosya), 'utf8');
  for (const eslesme of kaynak.matchAll(ANAHTAR_DESENI)) {
    const anahtar = eslesme[1];
    // `blog_cat_` gibi dinamik önekler gerçek sözlük anahtarı değildir.
    if (!anahtar.endsWith('_')) kullanilanAnahtarlar.add(anahtar);
  }
}

const bulgular = [];
for (const [anahtar, deger] of Object.entries(sozlukler.tr)) {
  if (HAM_ANAHTAR_DESENI.test(String(deger))) {
    bulgular.push(`Türkçe sözlük yönü ters: "${anahtar}": "${deger}"`);
  }
}
for (const anahtar of kullanilanAnahtarlar) {
  for (const [dil, sozluk] of Object.entries(sozlukler)) {
    const deger = sozluk[anahtar];
    if (typeof deger !== 'string' || !deger.trim() || deger === anahtar || HAM_ANAHTAR_DESENI.test(deger)) {
      bulgular.push(`${dil}.${anahtar} kullanıcı metnine çözülmüyor.`);
    }
  }
}

if (bulgular.length) {
  console.error('BLOG ÇEVİRİ DENETİMİ KALDI:');
  for (const bulgu of bulgular) console.error(`  · ${bulgu}`);
  process.exit(1);
}

console.log(`blog çeviri denetimi: ${kullanilanAnahtarlar.size} görünür anahtar, 2 dil, ham anahtar yok.`);
