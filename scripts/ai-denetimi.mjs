/**
 * YAPAY ZEKA YUZEYI DENETIMI — derleme ciktisini olcer, tahmin etmez.
 *
 * Ahmet (16.09.2026): *"testlerimizi de yapalim ai konusunda"*.
 *
 * ⚠️ NEDEN BEKCI GEREKIYOR: bu yuzey UC parcali (robots.txt, llms dosyalari,
 * yazi sayfalarindaki yapisal veri) ve parcalar AYRI yerlerde uretiliyor. Biri
 * geride kalirsa ariza SESSIZ olur: robots izin verir ama llms.txt eski kalir;
 * ya da yazi yayina girer, statik HTML uretilir, llms dosyasina girmez. Hicbiri
 * ekranda hata vermez, yalnizca model yaziyi bulamaz.
 *
 * Olculenler:
 *   1. robots.txt'te beklenen yapay zeka botlarinin hepsi var ve Allow: /
 *   2. llms.txt + llms-full.txt uretilmis ve bos degil
 *   3. YAYINDAKI her yazi llms.txt'te ve llms-full.txt'te geciyor
 *   4. YAYINDA OLMAYAN yazi hicbir dosyaya sizmamis (kapaksiz ya da tarihi gelmemis)
 *   5. Her yazi sayfasinda Article yapisal verisi var; kaynakli yazida `citation`
 *      da var (uzmanlik kaniti makineye gorunur olsun)
 *   6. SSS'si olan yazida FAQPage var
 *   7. Statik HTML govde metni tasiyor (bot JS calistirmadan okuyabiliyor)
 */
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIST = join(KOK, 'dist');
const YAZI_KLASORU = join(KOK, 'src/data/blog');
const KAPAK_KLASORU = join(KOK, 'src/assets/blog');
const HARIC = new Set(['index.ts', 'types.ts', 'gorsel.ts']);
const bugun = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Istanbul' }).format(new Date());

const BEKLENEN_BOTLAR = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'anthropic-ai',
  'Google-Extended', 'PerplexityBot', 'Applebot-Extended',
];

const hatalar = [];
const not = (ok, mesaj) => { if (!ok) hatalar.push(mesaj); };

if (!existsSync(DIST)) {
  console.error('ai-denetimi: dist yok, once `npm run build`.');
  process.exit(1);
}

// ── yazılar ────────────────────────────────────────────────────────────────
const tum = [];
for (const d of readdirSync(YAZI_KLASORU).filter((f) => f.endsWith('.ts') && !HARIC.has(f))) {
  const mod = await import(pathToFileURL(join(YAZI_KLASORU, d)).href);
  for (const v of Object.values(mod)) {
    if (v && typeof v === 'object' && 'slug' in v && 'bloklar' in v) tum.push(v);
  }
}
const yayinda = tum.filter((y) => existsSync(join(KAPAK_KLASORU, `${y.slug}.webp`)) && y.tarih <= bugun);
const yayindaDegil = tum.filter((y) => !yayinda.includes(y));

// ── 1) robots.txt ──────────────────────────────────────────────────────────
const robots = readFileSync(join(DIST, 'robots.txt'), 'utf8');
for (const bot of BEKLENEN_BOTLAR) {
  const blok = new RegExp(`User-agent:\\s*${bot}\\s*\\n(?:[^\\n]*\\n)*?Allow:\\s*/`, 'i');
  not(blok.test(robots), `robots.txt: ${bot} icin "Allow: /" yok`);
}
not(/Sitemap:\s*https:\/\/veterito\.com\/sitemap\.xml/.test(robots), 'robots.txt: sitemap satiri yok');

// ── 2-4) llms dosyaları ────────────────────────────────────────────────────
for (const dosya of ['llms.txt', 'llms-full.txt']) {
  not(existsSync(join(DIST, dosya)), `${dosya} uretilmemis`);
}
const llms = existsSync(join(DIST, 'llms.txt')) ? readFileSync(join(DIST, 'llms.txt'), 'utf8') : '';
const llmsFull = existsSync(join(DIST, 'llms-full.txt')) ? readFileSync(join(DIST, 'llms-full.txt'), 'utf8') : '';
not(llms.length > 500, 'llms.txt cok kisa, uretim bozulmus olabilir');
not(llmsFull.length > 5000, 'llms-full.txt cok kisa, govdeler yazilmamis olabilir');

for (const y of yayinda) {
  not(llms.includes(`/blog/${y.slug}`), `llms.txt: yayindaki yazi eksik -> ${y.slug}`);
  not(llmsFull.includes(y.baslik), `llms-full.txt: yayindaki yazinin govdesi eksik -> ${y.slug}`);
}
for (const y of yayindaDegil) {
  not(!llms.includes(`/blog/${y.slug}`), `llms.txt: YAYINDA OLMAYAN yazi sizmis -> ${y.slug}`);
  not(!llmsFull.includes(`/blog/${y.slug}`), `llms-full.txt: YAYINDA OLMAYAN yazi sizmis -> ${y.slug}`);
}

// ── 5-7) yazı sayfaları ────────────────────────────────────────────────────
for (const y of yayinda) {
  const yol = join(DIST, 'blog', y.slug, 'index.html');
  if (!existsSync(yol)) { hatalar.push(`statik sayfa yok -> ${y.slug}`); continue; }
  const html = readFileSync(yol, 'utf8');

  // ⚠️ Etikette nitelik olabiliyor (`data-onceden="1"`); desen nitelikleri de kabul
  // etmeli. Ilk yazimda etmiyordu ve denetim "Article yok" diye 28 yanlis bulgu verdi.
  const bloklar = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)]
    .map((m) => { try { return JSON.parse(m[1]); } catch { return null; } })
    .filter(Boolean);
  const makale = bloklar.find((b) => b['@type'] === 'Article');
  if (!makale) { hatalar.push(`Article yapisal verisi yok -> ${y.slug}`); continue; }
  not(makale.headline === y.baslik, `Article headline yaziyla tutmuyor -> ${y.slug}`);
  not(makale.inLanguage === 'tr-TR', `Article inLanguage eksik -> ${y.slug}`);
  not(Array.isArray(makale.image) && makale.image.length > 0, `Article image eksik -> ${y.slug}`);

  if (y.kaynaklar?.length) {
    not(Array.isArray(makale.citation) && makale.citation.length === y.kaynaklar.length,
      `citation sayisi kaynak sayisiyla tutmuyor -> ${y.slug} (${makale.citation?.length ?? 0}/${y.kaynaklar.length})`);
  }
  if (y.sss?.length) {
    not(bloklar.some((b) => b['@type'] === 'FAQPage'), `FAQPage yok ama SSS var -> ${y.slug}`);
  }

  /*
   * Bot JS calistirmadan govdeyi gorebiliyor mu?
   *
   * ⚠️ HAM HTML'DE ARAMAK YANLIS OLCUM (ilk yazimda oyleydi, 4 yanlis bulgu verdi):
   * kalin yazilan kelime `<strong>` ile bolunuyor, cumle HTML'de tek parca degil.
   * Once etiketler temizlenip DUZ METIN cikariliyor, karsilastirma onun uzerinde.
   */
  const duz = html
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ');
  const ilkParagraf = y.bloklar.find((b) => b.kind === 'paragraf');
  if (ilkParagraf) {
    const parca = ilkParagraf.metin
      .replace(/\*\*/g, '')
      .replace(/\[\[[^|\]]+\|([^\]]+)\]\]/g, '$1')
      .replace(/\s+/g, ' ')
      .slice(0, 45);
    not(duz.includes(parca), `statik HTML govde tasimiyor -> ${y.slug}`);
  }
}

console.log(`ai-denetimi: ${yayinda.length} yayindaki yazi · ${yayindaDegil.length} bekleyen · ${BEKLENEN_BOTLAR.length} bot kurali`);
if (hatalar.length) {
  console.error(`\nAI YUZEYI DENETIMI: ${hatalar.length} BULGU`);
  for (const h of hatalar.slice(0, 25)) console.error('  ✗ ' + h);
  process.exit(1);
}
console.log('ai-denetimi: TEMIZ');
