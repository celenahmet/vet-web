// scripts/prerender-denetimi.mjs
//
// Hazir (prerender) sayfalarda etiket dengesi ve sabit altbilginin yeri.
//
// ⚠️ NEDEN (30.10.2026): 29.10'da yazi sablonunda sutunlar ve makale yazi
// sonundan sonra kapatildi ama en alttaki eski kapanislar silinmedi. Fazla
// `</div></div></article>` #root'u erken kapatti; botlar icin eklenen sabit
// altbilgi (`.statik-altbilgi`) kokun DISINA dustu. createRoot yalniz kokun
// icini temizledigi icin her blog yazisinin altinda stilsiz bir baglanti listesi
// kaldi (Ahmet ekran goruntusuyle buldu). Derleme gecti, kimse fark etmedi.
//
// Kural: her dist/**/*.html icin
//   1) .statik-altbilgi varsa #root'un ICINDE olmali
//   2) #root icinde fazla ya da eksik kapanis olmamali
// Bagimlilik yok: kucuk bir etiket yigini yeterli (script/style icerigi atlanir).
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const KOK = join(import.meta.dirname, '..', 'dist');
const BOS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

function* htmller(dizin) {
  for (const ad of readdirSync(dizin)) {
    const yol = join(dizin, ad);
    if (statSync(yol).isDirectory()) yield* htmller(yol);
    else if (ad.endsWith('.html')) yield yol;
  }
}

function denetle(html) {
  const temiz = html.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, '').replace(/<!--[\s\S]*?-->/g, '');
  const yigin = [];
  let altbilgiKokte = null;
  const hatalar = [];
  for (const m of temiz.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9-]*)([^>]*)>/g)) {
    const [, kapanis, adHam, nitelik] = m;
    const ad = adHam.toLowerCase();
    if (BOS.has(ad) || nitelik.trim().endsWith('/')) continue;
    if (!kapanis) {
      const id = /\bid="([^"]*)"/.exec(nitelik)?.[1] ?? '';
      const sinif = /\bclass="([^"]*)"/.exec(nitelik)?.[1] ?? '';
      if (altbilgiKokte === null && /\bstatik-altbilgi\b/.test(sinif)) {
        altbilgiKokte = yigin.some((e) => e.id === 'root');
      }
      yigin.push({ ad, id });
      continue;
    }
    const i = yigin.map((e) => e.ad).lastIndexOf(ad);
    if (i === -1) { hatalar.push(`fazla </${ad}>`); continue; }
    if (i !== yigin.length - 1) hatalar.push(`</${ad}> kapanmamis: ${yigin.slice(i + 1).map((e) => e.ad).join(',')}`);
    yigin.length = i;
  }
  if (altbilgiKokte === false) hatalar.unshift('statik altbilgi #root disinda (React acilinca silinmez, sayfada gorunur)');
  return hatalar;
}

let sayfa = 0;
const sorunlu = [];
for (const yol of htmller(KOK)) {
  sayfa += 1;
  const h = denetle(readFileSync(yol, 'utf8'));
  if (h.length) sorunlu.push(`${yol.slice(KOK.length)}: ${h.slice(0, 3).join(' | ')}`);
}
if (sorunlu.length) {
  console.error(`prerender denetimi: ${sorunlu.length}/${sayfa} sayfada etiket sorunu`);
  for (const s of sorunlu.slice(0, 15)) console.error('  ' + s);
  process.exit(1);
}
console.log(`prerender denetimi: ${sayfa} sayfa, etiketler dengeli, sabit altbilgi kokte.`);
