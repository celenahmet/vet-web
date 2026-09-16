/**
 * PAZARLAMA SAYFALARINI STATIK URET — `scripts/ssr-giris.tsx` ciktisini
 * `dist/<rota>/index.html` olarak yazar. Gerekce o dosyanin basinda.
 *
 * SIRA ONEMLI: `vite build` -> `prerender` (blog, hukuki, 404; temiz kabuktan
 * okur) -> BU BETIK. Bu betik en son kosuyor cunku `dist/index.html`'i (ana
 * sayfa) UZERINE YAZIYOR; ondan once temiz kabugu `dist/kabuk.html` olarak
 * kopyaliyor. Uygulama rotalari (/panel, /@klinik) artik `vercel.json` ile bu
 * temiz kabuga yonleniyor; yoksa klinik sayfasi acilirken bir an ana sayfa
 * metni gorunurdu.
 *
 * ⚠️ FAIL-OPEN: bir rota cizilemezse o rota ATLANIR ve mevcut davranis (JS ile
 * cizim) kalir; derleme DURMAZ. Statik HTML iyilestirme, on kosul degil.
 * Ama hicbir rota cizilemediyse bu bir kurulum hatasidir ve derleme durur.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, copyFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(KOK, 'dist');
const SSR_DIST = join(KOK, 'dist-ssr');

/*
 * Hangi rotalar? Yalniz HERKESE ACIK pazarlama sayfalari. /panel oturum
 * istiyor, /@klinik kullanici verisi, /blog ve hukuki sayfalar zaten
 * prerender'da. Yeni pazarlama sayfasi acilinca buraya da eklenir.
 */
const ROTALAR = ['/', '/features', '/pets', '/clinics', '/pricing', '/download', '/about', '/contact'];

const giris = readdirSync(SSR_DIST).find((f) => /^ssr-giris.*\.js$/.test(f));
if (!giris) { console.error('ssr-uret: dist-ssr/ssr-giris*.js yok — once `vite build --ssr`'); process.exit(1); }
const { render } = await import(pathToFileURL(join(SSR_DIST, giris)).href);

const kabukYolu = join(DIST, 'index.html');
const sablon = readFileSync(kabukYolu, 'utf8');
if (!sablon.includes('<div id="root"></div>')) {
  console.error('ssr-uret: dist/index.html temiz kabuk degil (root dolu). Sira bozulmus olabilir.');
  process.exit(1);
}
// Temiz kabuk, uygulama rotalari icin saklaniyor.
copyFileSync(kabukYolu, join(DIST, 'kabuk.html'));

/* Kabuktaki varsayilan baslik/aciklama/og/twitter etiketleri sokuluyor; Helmet'in
   sayfaya ozel ettiketleri (data-rh) geliyor. Prerender ile ayni gerekce:
   iki og:title kalirsa hangisinin kazandigi tarayiciya gore degisir. */
function kafayiDegistir(html, kafa) {
  let cikti = html
    .replace(/\n?\s*<meta[^>]*(?:property="og:(?:type|title|description|url|image|image:width|image:height|locale|site_name)"|name="twitter:(?:card|image|creator)")[^>]*\/>/g, '')
    .replace(/<title[^>]*>[^<]*<\/title>/, '')
    .replace(/\n?\s*<meta[^>]*name="description"[^>]*\/>/, '');
  return cikti.replace('</head>', `    ${kafa}\n  </head>`);
}

/* SSR paketinin kendi varlik dosyalari (gorsel vb.) istemci paketinde yoksa
   kopyalanir: adlar icerik ozetli, ayni icerik ayni ad. */
const ssrVarlik = join(SSR_DIST, 'assets'), distVarlik = join(DIST, 'assets');
let kopyalanan = 0;
if (existsSync(ssrVarlik)) {
  for (const f of readdirSync(ssrVarlik)) {
    if (/\.(js|css|map)$/.test(f)) continue;
    const hedef = join(distVarlik, f);
    if (!existsSync(hedef)) { copyFileSync(join(ssrVarlik, f), hedef); kopyalanan += 1; }
  }
}

let uretilen = 0; const atlanan = [];
for (const rota of ROTALAR) {
  try {
    const { govde, kafa } = await render(rota);
    if (!govde || govde.length < 500) throw new Error(`govde cok kisa (${govde?.length ?? 0})`);
    if (!/<title[\s>]/.test(kafa)) throw new Error('sayfa basligi yok');
    // Kabuktaki JS ve CSS baglantilari aynen kaliyor; yalniz kafa ve govde degisiyor.
    const html = kafayiDegistir(sablon, kafa).replace('<div id="root"></div>', `<div id="root">${govde}</div>`);
    const yol = rota === '/' ? kabukYolu : join(DIST, rota.replace(/^\//, ''), 'index.html');
    mkdirSync(dirname(yol), { recursive: true });
    writeFileSync(yol, html, 'utf8');
    uretilen += 1;
  } catch (hata) {
    atlanan.push(`${rota}: ${String(hata?.message ?? hata).slice(0, 120)}`);
  }
}
if (atlanan.length) console.warn('ssr-uret: ATLANAN rotalar (JS ile cizilmeye devam eder):\n  ' + atlanan.join('\n  '));
if (!uretilen) { console.error('ssr-uret: hicbir rota cizilemedi — kurulum hatasi'); process.exit(1); }
console.log(`ssr-uret: ${uretilen}/${ROTALAR.length} pazarlama sayfasi statik uretildi${kopyalanan ? `, ${kopyalanan} varlik kopyalandi` : ''}; kabuk -> dist/kabuk.html`);
