/**
 * ROTA DUMAN TESTI — canli (ya da onizleme) dagitimina karsi calisir.
 *
 * ⚠️ NEDEN VAR: `vercel.json` artik "her adresi uygulamaya yonlendir" demiyor.
 * Bu, yumusak 404'u bitiriyor ama yeni bir risk aciyor: listede unutulan ya da
 * yanlis yazilan bir rota CANLI SITEDE 404 verir. `rota-kapsam-denetimi.mjs`
 * bunu derleme aninda yakaliyor, ama o yalniz iki dosyayi karsilastiriyor;
 * Vercel'in yonlendirme motorunun gercekte ne yaptigini yalniz istek atarak
 * ogrenebiliriz.
 *
 * Kullanim:  node scripts/rota-smoke.mjs https://veterito.com
 *
 * ⚠️ KONTROL SATIRLARI SART. Yalniz "200 bekliyorum, 200 aldim" olcen bir test,
 * her seye 200 donen bozuk bir yapilandirmayi da GECER. O yuzden bilerek
 * olmayan adresler de sinaniyor ve onlardan 404 bekleniyor. Ikisi birden
 * tutmuyorsa olcum degil yapilandirma bozuktur.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const taban = (process.argv[2] ?? 'https://veterito.com').replace(/\/$/, '');

const appKaynak = readFileSync(join(KOK, 'src/App.tsx'), 'utf8');
const rotalar = [...appKaynak.matchAll(/<Route\s+path="([^"]+)"/g)]
  .map((m) => m[1])
  .filter((r) => r !== '*' && r !== '/:handle' && !r.includes(':'));

// Yayimlanmis yazi adresleri: site haritasindan okunuyor, elle yazilmiyor.
const harita = readFileSync(join(KOK, 'public/sitemap.xml'), 'utf8');
const haritaAdresleri = [...harita.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((m) => m[1].replace(/^https:\/\/[^/]+/, ''))
  .map((y) => (y === '' ? '/' : y));

const yaziKlasoru = join(KOK, 'src/data/blog');
const { readdirSync } = await import('node:fs');
const yaziSluglari = readdirSync(yaziKlasoru)
  .filter((f) => f.endsWith('.ts') && !['index.ts', 'types.ts', 'gorsel.ts'].includes(f))
  .map((f) => `/blog/${f.replace(/\.ts$/, '')}`);

const beklenen200 = [...new Set([...rotalar, ...haritaAdresleri, ...yaziSluglari])];

// KONTROL SATIRLARI: bunlardan 404 bekleniyor. Gelmezse test bozuktur.
const beklenen404 = [
  '/bu-sayfa-kesinlikle-yok',
  '/blog/olmayan-bir-yazi-slugu',
  '/a/b/c',
  '/features-yanlis',
];

async function durum(yol) {
  try {
    const r = await fetch(taban + yol, { redirect: 'follow' });
    return r.status;
  } catch (e) {
    return `HATA ${e.message}`;
  }
}

let kalan = 0;
console.log(`\nHedef: ${taban}\n`);
console.log(`--- 200 beklenenler (${beklenen200.length}) ---`);
for (const yol of beklenen200.sort()) {
  const k = await durum(yol);
  const ok = k === 200;
  if (!ok) kalan++;
  console.log(`  ${ok ? 'gecti' : 'KALDI'}  ${String(k).padStart(5)}  ${yol}`);
}

console.log(`\n--- KONTROL: 404 beklenenler (${beklenen404.length}) ---`);
for (const yol of beklenen404) {
  const k = await durum(yol);
  const ok = k === 404;
  if (!ok) kalan++;
  console.log(`  ${ok ? 'gecti' : 'KALDI'}  ${String(k).padStart(5)}  ${yol}`);
}

console.log(
  kalan === 0
    ? `\nSONUC: ${beklenen200.length + beklenen404.length} adresin hepsi beklendigi gibi.\n`
    : `\nSONUC: ${kalan} adres BEKLENENDEN FARKLI.\n`,
);
process.exitCode = kalan === 0 ? 0 : 1;
