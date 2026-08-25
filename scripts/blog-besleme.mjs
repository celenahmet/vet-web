// scripts/blog-besleme.mjs
/**
 * MOBIL UYGULAMA ICIN BLOG BESLEMESI URETIR.
 *
 * Ahmet: *"Uygulama icerisine blog kismini entegre etmemiz lazim. Bunu bence
 * rehber bolumune entegre edebiliriz."*
 *
 * Ne yapiyor: `dist/blog-feed.json` uretiyor. Mobil uygulama bu dosyayi cekip
 * yazilari YERLI olarak ciziyor (webview degil).
 *
 * ⚠️ NEDEN VERITABANI DEGIL. Yazilari Supabase'e tasimak akla geliyor ama uc
 * sebeple yapilmadi:
 *   1. Icerik zaten burada, tipli ve denetimli (kaynak denetimi, SEO denetimi).
 *      Ikinci bir kopya iki gercek kaynak demek.
 *   2. Ucretsiz plan kotasi: besleme Vercel'den geliyor, Supabase'e hic dokunmuyor.
 *   3. Site zaten her yazida yeniden derleniyor; besleme o derlemenin ciktisi.
 *
 * ⚠️ UYGULAMA GUNCELLEMESI GEREKMIYOR. Yeni yazi siteye cikinca uygulamada da
 * gorunuyor. Yazilari uygulamanin icine gomseydik her yazi icin magaza
 * guncellemesi gerekirdi.
 *
 * ⚠️ YALNIZ YAYINDAKILER. `YAZILAR` kapagi olmayanlari zaten eliyor; besleme de
 * ondan besleniyor, yani yarim yazi uygulamaya dusmuyor.
 */
import { writeFileSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://veterito.com';

/**
 * ⚠️ `index.ts` ICE AKTARILAMIYOR: `gorsel.ts` uzerinden `import.meta.glob`
 * kullaniyor, o da yalniz Vite icinde var. Node'da cagrilinca patliyor.
 * `prerender.mjs` ayni sebeple yazi dosyalarini TEK TEK okuyor; ayni desen
 * burada da izleniyor.
 */
const YAZI_KLASORU = join(KOK, 'src/data/blog');
const HARIC = new Set(['index.ts', 'types.ts', 'gorsel.ts']);
const tumYazilar = [];
for (const d of readdirSync(YAZI_KLASORU).filter((f) => f.endsWith('.ts') && !HARIC.has(f))) {
  const mod = await import(pathToFileURL(join(YAZI_KLASORU, d)).href);
  for (const deger of Object.values(mod)) {
    if (deger && typeof deger === 'object' && 'slug' in deger && 'bloklar' in deger) tumYazilar.push(deger);
  }
}

/**
 * ⚠️ KAPAKSIZ YAZI BESLEMEYE GIRMIYOR. Ayni kural sitede de var (index.ts) ve
 * prerender'da da; ucu de aynisini uygulamak zorunda, yoksa "sitede yok ama
 * uygulamada var" gibi yarim bir durum cikar.
 */
const KAPAK_KLASORU = join(KOK, 'src/assets/blog');
const kapakliMi = (slug) => existsSync(join(KAPAK_KLASORU, `${slug}.webp`));
const YAZILAR = tumYazilar
  .filter((y) => kapakliMi(y.slug))
  .sort((a, b) => b.tarih.localeCompare(a.tarih));

/**
 * ⚠️ KAPAK ADRESI TAHMIN EDILMIYOR, DERLEME CIKTISINDAN OKUNUYOR. Ilk yazimda
 * `/blog-kapak/<slug>-800.webp` diye sabit bir yol uydurmustum; oysa Vite
 * gorselleri karmali adlarla uretiyor (`<slug>-800-Bp7xQ2.webp`) ve o adres
 * hicbir zaman var olmazdi. Besleme sessizce kirik kapaklarla dolardi.
 *
 * Mobil 800 px'lik dar surumu tercih ediyor: telefonda 1200 px gereksiz veri,
 * gereksiz veri de kullanicinin kotasi demek.
 */
const varliklar = existsSync(join(KOK, 'dist/assets'))
  ? readdirSync(join(KOK, 'dist/assets')).filter((f) => f.endsWith('.webp'))
  : [];

function kapak(slug) {
  let asil = null;
  let sekizYuz = null;
  for (const dosya of varliklar) {
    const m = dosya.match(new RegExp(`^${slug}-(\\d+)-(.+)\\.webp$`));
    if (m) { if (Number(m[1]) === 800) sekizYuz = `${SITE}/assets/${dosya}`; continue; }
    if (new RegExp(`^${slug}-(.+)\\.webp$`).test(dosya)) asil = `${SITE}/assets/${dosya}`;
  }
  return sekizYuz ?? asil;
}

const besleme = {
  surum: 1,
  // ⚠️ Tarih derleme aninda damgalaniyor; mobil bunu "en son ne zaman guncellendi"
  // diye gosterebilir ve onbellek tazeligini buna gore olcebilir.
  uretildi: new Date().toISOString(),
  yazilar: YAZILAR.map((y) => ({
    slug: y.slug,
    baslik: y.baslik,
    ozet: y.ozet,
    kategori: y.kategori,
    tarih: y.tarih,
    kapak: kapak(y.slug),
    adres: `${SITE}/blog/${y.slug}`,
    bloklar: y.bloklar,
    sss: y.sss ?? [],
    kontrolListesi: y.kontrolListesi ?? [],
    kaynaklar: y.kaynaklar ?? [],
  })),
};

const cikti = join(KOK, 'dist');
if (!existsSync(cikti)) mkdirSync(cikti, { recursive: true });
const yol = join(cikti, 'blog-feed.json');
writeFileSync(yol, JSON.stringify(besleme), 'utf8');

const kb = Math.round(Buffer.byteLength(JSON.stringify(besleme)) / 1024);
console.log(`blog beslemesi: ${besleme.yazilar.length} yazi, ${kb} KB -> dist/blog-feed.json`);

// ⚠️ BOS BESLEME SESSIZCE GECMEZ: uygulamada blog bolumu bos gorunur ve sebebi
// aylarca fark edilmezdi.
if (besleme.yazilar.length === 0) {
  console.error('BESLEME BOS — derleme durduruluyor.');
  process.exit(1);
}
