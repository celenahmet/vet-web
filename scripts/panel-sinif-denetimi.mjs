/**
 * PANEL SINIF ADI CAKISMA DENETCISI
 *
 * ⚠️ NEDEN VAR (25.08.2026): `panel.css` icinde `.pnl-halka` IKI KEZ
 * tanimlanmisti — biri yuklenme gostergesi (donen, kenarlikli), digeri rapor
 * grafigi. Grafik, gostergenin `animation: pnl-don infinite` ve
 * `border-top-color` degerlerini miras aldi: randevu dagilimi panoda SUREKLI
 * DONDU ve halkanin disinda kacak bir yay cikti. Ahmet ekran goruntusuyle
 * gosterdi: "bu boyle donuyo, boyle donen istatistik kabul edilmez".
 *
 * `pnl-` on eki dosyayi SITEDEN ayirdi ama DOSYA ICINDE ayirmadi.
 *
 * ⚠️ MESAFE ESIGI VAR ve gerekli. `.a, .b { ortak }` yazip hemen altina
 * `.a { ozel }` yazmak okunabilir ve yaygin bir kalip; bunu hata saymak
 * denetimi gurultuye bogar, gurultulu denetim de kapatilir. Asil tehlike
 * UZAKTAKI tekrar: ilk tanimi kimsenin gormedigi bir yerde ikinci kez
 * tanimlamak. Gercek hatada iki tanim ~500 satir uzaktaydi.
 *
 * ⚠️ AYRISTIRMA ELDE YAZILDI ve ilk hali YANLISTI. Kalip, seciciden once `}`
 * ya da dize basi ariyordu; oysa gercek kurallarin cogunun onunde YORUM var
 * (`*​/` ile biten). Sonuc: denetim, yakalamasi gereken cakismayi bulamadi ve
 * YESIL dedi. Yalan soyleyen bekci bekcisizlikten kotudur, cunku kimse
 * bakmayi birakir. Bu yuzden asagida NEGATIF TEST var: denetim kendi kendini
 * sinamadan sonuc bildirmiyor.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

/** Bu satirdan yakin tekrarlar mesru sayiliyor. */
const YAKINLIK_SATIR = 40;

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const ham = readFileSync(join(KOK, 'src/panel/panel.css'), 'utf8');

/**
 * Ust duzey kural secicilerini satir numarasiyla dondurur.
 * Sira: yorumlari sil, at-kurallarini blok olarak atla, derinlik 0'da topla.
 */
function ustDuzeySeciciler(kaynak) {
  /* Yorumun yerine bosluk konuyor ki satir sayilari kaymasin. */
  const yorumsuz = kaynak.replace(/\/\*[\s\S]*?\*\//g, (y) => y.replace(/[^\n]/g, ' '));

  const bulunan = [];
  let i = 0;
  let secici = '';

  const bloguAtla = (acilis) => {
    let d = 1;
    let j = acilis + 1;
    while (j < yorumsuz.length && d > 0) {
      if (yorumsuz[j] === '{') d++;
      else if (yorumsuz[j] === '}') d--;
      j++;
    }
    return j;
  };

  while (i < yorumsuz.length) {
    const c = yorumsuz[i];

    if (c === '@') {
      const acilis = yorumsuz.indexOf('{', i);
      const noktali = yorumsuz.indexOf(';', i);
      if (acilis === -1 || (noktali !== -1 && noktali < acilis)) {
        i = noktali === -1 ? yorumsuz.length : noktali + 1;
      } else {
        i = bloguAtla(acilis);
      }
      secici = '';
      continue;
    }

    if (c === '{') {
      bulunan.push({ secici: secici.trim(), satir: yorumsuz.slice(0, i).split('\n').length });
      i = bloguAtla(i);
      secici = '';
      continue;
    }

    if (c === '}') { secici = ''; i++; continue; }

    secici += c;
    i++;
  }
  return bulunan;
}

/* ── NEGATIF TEST: bilerek bozulmus girdide cakisma bulunmali ── */
const deneyKaynak = [
  '/* yorumdan sonra gelen kural: ilk surumun kacirdigi durum */',
  '.pnl-deney { color: red; }',
  ...Array(60).fill('.pnl-dolgu { color: blue; }'),
  '.pnl-deney { color: green; }',
].join('\n');
const deney = ustDuzeySeciciler(deneyKaynak).filter((k) => k.secici === '.pnl-deney');
if (deney.length !== 2) {
  console.error('panel sinif denetimi: NEGATIF TEST DUSTU.');
  console.error(`  Bilerek iki kez yazilan sinif ${deney.length} kez bulundu, 2 bekleniyordu.`);
  console.error('  Ayristirma bozuk; gercek sonuclara guvenilmez.');
  process.exit(1);
}

/* ── GERCEK DOSYA ── */
const yerler = new Map();
for (const { secici, satir } of ustDuzeySeciciler(ham)) {
  for (const parca of secici.split(',')) {
    const s = parca.trim();
    /* Yalnizca ".pnl-xxx" bicimindeki SADE seciciler; birlesikler
       (".a .b", ".a:hover", ".a.b") bilerek disarida. */
    if (/^\.pnl-[a-z0-9-]+$/.test(s)) {
      if (!yerler.has(s)) yerler.set(s, []);
      yerler.get(s).push(satir);
    }
  }
}

const cakisan = [...yerler.entries()].filter(
  ([, satirlar]) => satirlar.length > 1 && Math.max(...satirlar) - Math.min(...satirlar) > YAKINLIK_SATIR,
);

if (cakisan.length) {
  console.error('\n!!! PANEL SINIF ADI CAKISMASI — DERLEME DURDURULDU !!!\n');
  for (const [ad, satirlar] of cakisan) {
    console.error(`  ${ad} — ${satirlar.length} kez: satir ${satirlar.join(', ')}`);
  }
  console.error('\nAyni sinif iki farkli amacla tanimlanirsa biri digerinin degerlerini');
  console.error('miras alir. 25.08.2026: rapor grafigi, yuklenme gostergesinin donme');
  console.error('animasyonunu aldi ve pano surekli dondu.');
  console.error('Cozum: birine ayri bir ad ver.\n');
  process.exit(1);
}

console.log(`panel sinif denetimi: ${yerler.size} sinif, uzak tekrar yok.`);
