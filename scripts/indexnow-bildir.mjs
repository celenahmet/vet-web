/**
 * INDEXNOW BILDIRIMI — Bing, Yandex, DuckDuckGo, Seznam ve Bing'i kullanan
 * yapay zeka aramalari (ChatGPT search, Copilot) icin.
 *
 * Ahmet (16.09.2026): *"ai botlari, robotlar, ajanlar ve insanlar da erisebilsin
 * her sekilde, taninsin"*. Google IndexNow'a katilmiyor; onun yolu Search
 * Console + sitemap. Bing tarafi ise TEK ISTEKLE bildirilebiliyor ve ChatGPT'nin
 * web aramasi Bing dizinini kullaniyor: bu betik o kapiyi aciyor.
 *
 * NASIL CALISIR: `public/<anahtar>.txt` dosyasi sitede duruyor (sahiplik
 * kaniti). Betik sitemap'teki TUM adresleri tek POST ile api.indexnow.org'a
 * yolluyor; IndexNow bunu katilan butun motorlara dagitiyor.
 *
 * ⚠️ 200 ya da 202 = kabul edildi. 422 = adresler alan adiyla uyusmuyor,
 * 403 = anahtar dosyasi okunamiyor (deploy henuz bitmemis olabilir).
 *
 * Kullanim (deploy BITTIKTEN sonra):  node scripts/indexnow-bildir.mjs
 * Tek adres:  node scripts/indexnow-bildir.mjs https://veterito.com/blog/yeni-yazi
 */
import { readFileSync, existsSync } from 'node:fs';

const SITE = 'https://veterito.com';
const ANAHTAR = '202f8473368962df98b5a7bda3f861b1';
const ANAHTAR_ADRESI = `${SITE}/${ANAHTAR}.txt`;

let adresler = process.argv.slice(2).filter((a) => a.startsWith('http'));
if (!adresler.length) {
  const yol = ['dist/sitemap.xml', 'public/sitemap.xml'].find(existsSync);
  if (!yol) { console.error('sitemap bulunamadi'); process.exit(1); }
  adresler = [...readFileSync(yol, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

// Once anahtar dosyasi canlida mi? Degilse istek 403 alir ve bosa gider.
const kontrol = await fetch(ANAHTAR_ADRESI).catch(() => null);
if (!kontrol || !kontrol.ok || (await kontrol.text()).trim() !== ANAHTAR) {
  console.error(`anahtar dosyasi canlida degil: ${ANAHTAR_ADRESI} — once deploy bitsin`);
  process.exit(1);
}

const yanit = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: 'veterito.com', key: ANAHTAR, keyLocation: ANAHTAR_ADRESI, urlList: adresler }),
});
console.log(`IndexNow: ${adresler.length} adres bildirildi -> HTTP ${yanit.status} ${yanit.status === 200 || yanit.status === 202 ? '(kabul)' : '(SORUN)'}`);
process.exit(yanit.status === 200 || yanit.status === 202 ? 0 : 1);
