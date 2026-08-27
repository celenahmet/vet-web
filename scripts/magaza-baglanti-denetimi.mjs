/**
 * MAGAZA BAGLANTI DENETCISI
 *
 * ⚠️ NEDEN VAR (olculdu 27.08.2026). Indirme sayfasindaki iki magaza dugmesi
 * aylardir magazanin ANA SAYFASINA gidiyordu:
 *     appStoreUrl:  "https://apps.apple.com/"
 *     playStoreUrl: "https://play.google.com/store/apps/"
 * Rozetin ustunde "Cok yakinda" yazdigi icin YALAN degildi; ama dugme
 * tiklaniyor ve kullaniciyi Veterito'ya degil App Store'un kendisine
 * goturuyordu. Hicbir yere goturmeyen dugme, olmayan dugmeden kotudur.
 *
 * Ayni gun ikinci bir sey daha ortaya cikti: gercekten indirilebilen TEK
 * magaza (AppGallery, 26.08'de onaylandi) sayfada HIC YOKTU. Yani sayfa hem
 * calismayan iki dugme gosteriyor hem de calisan tek yolu gizliyordu.
 *
 * ⚠️ BU BETIK YER TUTUCUYU YAKALAR, "yayinda mi" SORMAZ. Durum zaten adresten
 * turetiliyor (`url === null` -> tiklanamaz "Cok yakinda" rozeti). Denetlenen
 * tek sey: DOLU bir adres gercekten bir UYGULAMA sayfasina mi gidiyor.
 *
 * Kural: adres ya `null` olacak ya da magazanin uygulama sayfasi bicimine
 * uyacak. Arasi yok — cunku "arasi" tam olarak bu hatanin kendisiydi.
 *
 * ⚠️ BICIM DENETLENIYOR, KIMLIK DENETLENMIYOR — ve denetlenemiyor da.
 * 27.08.2026'da AppGallery adresi girilirken olculdu:
 *   · `curl` sahte bir uygulama kimligine (C999999999) de **HTTP 200** donuyor
 *   · sayfada sunucu tarafi meta yok (`<title>` bos), her sey istemcide ciziliyor
 *   · web istemcisinin veri ucu imza istiyor (`rtnCode 1002`, HTTP 403)
 * Yani "adres aciliyor mu" diye bakmak HICBIR SEY kanitlamaz. Bir sonraki
 * oturum `curl` ile 200 gorup "dogrulandi" DEMESIN. Kimligin dogrulugunun tek
 * kaynagi magaza konsolu, yani Ahmet.
 *
 * Ayni tuzak Apple ve Play icin yok: onlarin uygulama sayfalari olmayan bir
 * kimlikte 404 donuyor. Yani oradaki adres GERCEKTEN olculebilir.
 */
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const { brandConfig } = await import(pathToFileURL(join(KOK, 'src/config/brand.ts')).href);

/** Her magaza icin UYGULAMA SAYFASI bicimi. Ana sayfa bu kaliplara uymaz. */
const KURALLAR = [
  {
    alan: 'appStoreUrl',
    ad: 'App Store',
    gecerli: (u) => /^https:\/\/apps\.apple\.com\/.+\/app\/.+\/id\d+/.test(u),
    ornek: 'https://apps.apple.com/tr/app/veterito/id1234567890',
  },
  {
    alan: 'playStoreUrl',
    ad: 'Google Play',
    gecerli: (u) => /^https:\/\/play\.google\.com\/store\/apps\/details\?id=[\w.]+/.test(u),
    ornek: 'https://play.google.com/store/apps/details?id=com.veterito.app',
  },
  {
    alan: 'appGalleryUrl',
    ad: 'AppGallery',
    gecerli: (u) => /^https:\/\/appgallery\.huawei\.com\/.*app\/C\d+/.test(u),
    ornek: 'https://appgallery.huawei.com/app/C123456789',
  },
];

const hatalar = [];
let denetlenen = 0;

for (const k of KURALLAR) {
  const url = brandConfig[k.alan];
  if (url === null || url === undefined) continue; // yayinda degil, rozet "Cok yakinda"
  denetlenen++;
  if (typeof url !== 'string' || !k.gecerli(url)) {
    hatalar.push(
      `${k.ad} (${k.alan}) bir UYGULAMA sayfasi degil: ${url}\n` +
        `      Beklenen bicim: ${k.ornek}\n` +
        `      Adres yoksa deger "null" olmali; rozet o zaman tiklanamaz "Cok yakinda" olur.`,
    );
  }
}

// Adresler TEK KAYNAKTAN gelmeli. Sayfaya elle yazilan bir magaza adresi bu
// denetimin tamamen disinda kalirdi.
const SAYFALAR = join(KOK, 'src/pages');
for (const dosya of readdirSync(SAYFALAR).filter((f) => f.endsWith('.tsx'))) {
  const kaynak = readFileSync(join(SAYFALAR, dosya), 'utf8');
  for (const m of kaynak.matchAll(/href=\{?["'](https:\/\/(?:apps\.apple\.com|play\.google\.com|appgallery\.huawei\.com)[^"']*)["']/g)) {
    hatalar.push(
      `src/pages/${dosya}: magaza adresi ELLE yazilmis -> ${m[1]}\n` +
        `      Adres yalniz config/brand.ts icinde durur; denetim orayi okuyor.`,
    );
  }
}

// KONTROL SATIRI: kurallar gercekten ayirt ediyor mu? Bilerek bir ana sayfa ve
// bir gercek uygulama adresi veriliyor. Bu satir duserse denetim bozuktur:
// her adresi "gecerli" sayan bir denetci, denetim degildir.
for (const k of KURALLAR) {
  const anaSayfa = k.ornek.replace(/(https:\/\/[^/]+\/).*/, '$1');
  if (k.gecerli(anaSayfa)) {
    console.error(`magaza denetimi: KONTROL SATIRI DUSTU — ${k.ad} ana sayfasini gecerli sayiyor.`);
    process.exit(1);
  }
  if (!k.gecerli(k.ornek)) {
    console.error(`magaza denetimi: KONTROL SATIRI DUSTU — ${k.ad} kendi ornegini reddediyor.`);
    process.exit(1);
  }
}

if (hatalar.length) {
  console.error('\n!!! MAGAZA BAGLANTI DENETIMI DUSTU !!!\n');
  for (const h of hatalar) console.error(`  ${h}`);
  console.error('');
  process.exit(1);
}

const yakinda = KURALLAR.length - denetlenen;
console.log(
  `magaza denetimi: ${denetlenen} adres dogrulandi, ${yakinda} magaza "Cok yakinda" (adres yok).`,
);
