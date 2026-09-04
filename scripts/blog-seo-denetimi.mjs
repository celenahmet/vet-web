/**
 * BLOG SEO DENETCISI — her yazi tek tek gecer.
 *
 * ⚠️ NEDEN VAR (Ahmet, 24.08.2026): *"blog ayri ilgilenmemiz lazim, tum yazilar
 * ozel seo denetiminden gececek"*. Lighthouse'un SEO puani sayfa duzeyinde
 * teknik hijyen olcuyor ve 100 aliyoruz; ama bir YAZININ arama karsiligini
 * olcmuyor. Baslik uzunlugu, aciklama uzunlugu, ic baglanti, kaynak, SSS,
 * kapak, slug bicimi — hicbiri Lighthouse'un konusu degil.
 *
 * ⚠️ NE OLCMEZ: yazinin iyi olup olmadigini. Bu betik bicim denetler, kalite
 * degil. "Gecti" demesi yazinin ise yaradigi anlamina gelmez.
 *
 * Kural kaynagi: `veteriner/docs/BLOG_HAZIRLAMA_BRIEFI.md`. Orada bir kural
 * degisirse buradaki esik de degisir; iki yer ayrisirsa brief kazanir.
 *
 * Calistirma: `npm run blog-seo`
 */
import { readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const KLASOR = join(KOK, 'src/data/blog');
const HARIC = new Set(['index.ts', 'types.ts', 'gorsel.ts']);
const SITE = 'https://veterito.com';

/**
 * Esikler ve NEDEN o deger oldugu. Sayi yazip gecmek, bir sonraki turda
 * "bu 60 nereden geliyor" sorusunu doguruyor.
 */
const ESIK = {
  // Google masaustunde ~580-600 px basligi kesiyor; 60 karakter guvenli sinir.
  baslikEnFazla: 65,
  baslikEnAz: 25,
  // Meta aciklamada ~155-160 karakterden sonrasi kesiliyor.
  aciklamaEnAz: 110,
  aciklamaEnFazla: 165,
  // Brief: 1000-2500 kelime.
  kelimeEnAz: 1000,
  kelimeEnFazla: 2500,
  sssEnAz: 5,
  sssEnFazla: 8,
  // SSS cevabi: ilk cumle alintilanabilsin, 40-70 kelime.
  sssCevapEnAz: 25,
  sssCevapEnFazla: 90,
  kontrolEnAz: 5,
  kontrolEnFazla: 6,
  kontrolMaddeEnFazla: 38,
  kaynakEnAz: 1,
  // Ic baglanti agi tek tek yazilarin degil blogun butununun siralanmasini etkiliyor.
  icBaglantiEnAz: 1,
};

/**
 * Kaynak zorunlulugu SAGLIK ICERIGI icin (brief §8: "Saglik icerikli her yazida
 * en az bir dogrulanmis kaynak bulunur"). Klinik yonetimi ve benzeri yazilar
 * tibbi iddia tasimiyor; onlara hakemli kaynak aratmak, zorlanan kaynak uretir
 * ve zorlanan kaynak yanlis kaynaktir. `kaynak-denetimi.mjs` ile ayni kume.
 */
const SAGLIK_KATEGORILERI = new Set(['Kedi', 'Köpek', 'Beslenme', 'Sağlık']);

const yazilar = [];
for (const d of readdirSync(KLASOR).filter((f) => f.endsWith('.ts') && !HARIC.has(f))) {
  const mod = await import(pathToFileURL(join(KLASOR, d)).href);
  for (const deger of Object.values(mod)) {
    if (deger && typeof deger === 'object' && 'slug' in deger && 'bloklar' in deger) yazilar.push(deger);
  }
}
if (yazilar.length === 0) {
  console.error('blog seo: hic yazi bulunamadi — ayristirma bozuk, sonuclara guvenilmez.');
  process.exit(1);
}

/**
 * Yazinin duz metni.
 *
 * ⚠️ OLCU `okumaSuresi()` ILE AYNI TABANDA (types.ts): bloklar + SSS. Ilk halinde
 * yalniz bloklar sayiliyordu ve brief'in "1000-2500 kelime" kurali baska bir sey
 * olcuyordu; iki olcu ayrisinca denetim haksiz yere "kisa" diyordu. Ayni kurali
 * iki farkli cetvelle olcmek, denetimi degersizlestirir.
 */
function duzMetin(y) {
  const parcalar = [];
  for (const b of y.bloklar) {
    if (b.kind === 'liste') parcalar.push(...b.maddeler);
    else if (b.kind === 'tablo') parcalar.push(...b.basliklar, ...b.satirlar.flat());
    else {
      if (b.baslik) parcalar.push(b.baslik);
      if (b.metin) parcalar.push(b.metin);
    }
  }
  for (const s of (y.sss ?? [])) parcalar.push(s.soru, s.cevap);
  return parcalar.join(' ').replace(/\*\*/g, '');
}
const kelimeSay = (s) => s.split(/\s+/).filter(Boolean).length;

const bulgular = [];   // objektif bozukluk: derlemeyi durdurur
const uyarilar = [];   // bicimsel uyari
const editoryal = [];  // icerik derinligi: yazarin isi, derlemeyi durdurmaz
const sluglar = new Set(yazilar.map((y) => y.slug));
const basliklar = new Map();

for (const y of yazilar) {
  const yer = y.slug;
  const hata = (m) => bulgular.push(`${yer}: ${m}`);
  const uyari = (m) => uyarilar.push(`${yer}: ${m}`);
  /*
   * ⚠️ ICERIK DERINLIGI AYRI KUMEDE. Kelime sayisi, H2 sayisi, SSS cevap uzunlugu
   * ve ic baglanti YAZARIN isi; bunlar icin derlemeyi durdurmak, iyi calisan bir
   * siteyi yayindan alikoymak olurdu. Ama sessizce gecilmiyorlar da: ayri baslik
   * altinda ve sayiyla raporlaniyorlar.
   */
  const icerik = (m) => editoryal.push(`${yer}: ${m}`);

  // --- Slug ---
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(y.slug)) {
    hata(`slug bicimi bozuk. Yalniz kucuk harf, rakam ve tire olmali (Turkce karakter YOK, adres bozulur).`);
  }
  if (y.slug.length > 60) uyari(`slug ${y.slug.length} karakter, uzun. Kisa adres hem paylasilir hem hatirlanir.`);

  // --- Baslik ---
  const bUzun = y.baslik.length;
  if (bUzun > ESIK.baslikEnFazla) hata(`baslik ${bUzun} karakter (en fazla ${ESIK.baslikEnFazla}). Google sonuc sayfasinda kesilir.`);
  if (bUzun < ESIK.baslikEnAz) hata(`baslik ${bUzun} karakter (en az ${ESIK.baslikEnAz}). Cok kisa baslik arama niyetini karsilamiyor.`);
  const oncekiBaslik = basliklar.get(y.baslik.toLocaleLowerCase('tr'));
  if (oncekiBaslik) hata(`baslik "${oncekiBaslik}" ile AYNI. Iki yazi ayni baslikla birbirinin sirasini yiyor.`);
  basliklar.set(y.baslik.toLocaleLowerCase('tr'), y.slug);

  // --- Ozet (meta aciklama) ---
  const oUzun = y.ozet.length;
  if (oUzun > ESIK.aciklamaEnFazla) hata(`ozet ${oUzun} karakter (en fazla ${ESIK.aciklamaEnFazla}). Meta aciklama kesilir.`);
  if (oUzun < ESIK.aciklamaEnAz) uyari(`ozet ${oUzun} karakter (en az ${ESIK.aciklamaEnAz}). Kisa aciklama tiklama oranini dusuruyor.`);

  // --- Govde ---
  const metin = duzMetin(y);
  const kelime = kelimeSay(metin);
  if (kelime < ESIK.kelimeEnAz) icerik(`govde ${kelime} kelime (en az ${ESIK.kelimeEnAz}). Kisa yazi arama karsiligi uretmiyor.`);
  if (kelime > ESIK.kelimeEnFazla) icerik(`govde ${kelime} kelime (en fazla ${ESIK.kelimeEnFazla}). Uzun yazi okunmadan kapaniyor.`);

  const h2 = y.bloklar.filter((b) => b.kind === 'baslik').length;
  if (h2 < 6) icerik(`${h2} adet H2 basligi var, brief 6-10 istiyor.`);

  // --- SSS ---
  const sss = y.sss ?? [];
  if (sss.length < ESIK.sssEnAz) hata(`${sss.length} SSS var (en az ${ESIK.sssEnAz}). FAQPage verisi bu bolumden uretiliyor.`);
  if (sss.length > ESIK.sssEnFazla) uyari(`${sss.length} SSS var (en fazla ${ESIK.sssEnFazla}). Cok soru bolumu seyreltiyor.`);
  for (const [i, s] of sss.entries()) {
    if (!s.soru.trim().endsWith('?')) hata(`SSS ${i + 1} soru isaretiyle bitmiyor: "${s.soru.slice(0, 45)}"`);
    const k = kelimeSay(s.cevap);
    if (k < ESIK.sssCevapEnAz) icerik(`SSS ${i + 1} cevabi ${k} kelime (en az ${ESIK.sssCevapEnAz}). Kisa cevap alintilanmiyor.`);
    if (k > ESIK.sssCevapEnFazla) icerik(`SSS ${i + 1} cevabi ${k} kelime (en fazla ${ESIK.sssCevapEnFazla}). Uzun cevap kesiliyor.`);
    // Brief: ilk cumle cevabin KENDISI olmali, giris cumlesi degil.
    if (/^(bu konuda|yukarida|yazinin|once|oncelikle|bilindigi gibi)/i.test(s.cevap.trim())) {
      hata(`SSS ${i + 1} cevabi giris cumlesiyle basliyor. Ilk cumle cevabin kendisi olmali, yoksa alintilanamaz.`);
    }
  }

  // --- Kontrol listesi ---
  const kl = y.kontrolListesi ?? [];
  if (kl.length < ESIK.kontrolEnAz || kl.length > ESIK.kontrolEnFazla) {
    hata(`kontrol listesi ${kl.length} madde (${ESIK.kontrolEnAz}-${ESIK.kontrolEnFazla} olmali).`);
  }
  for (const m of kl) {
    if (m.length > ESIK.kontrolMaddeEnFazla) {
      hata(`kontrol maddesi ${m.length} karakter, telefonda iki satira dusuyor: "${m}"`);
    }
  }

  // --- Kaynak ---
  const kaynaklar = y.kaynaklar ?? [];
  if (kaynaklar.length < ESIK.kaynakEnAz && SAGLIK_KATEGORILERI.has(y.kategori)) {
    hata(`hic kaynak yok. Saglik iceriginde en az bir dogrulanmis kaynak zorunlu.`);
  }
  const kurumlar = new Set(kaynaklar.map((k) => k.kurum));
  if (kaynaklar.length > 1 && kurumlar.size === 1) {
    uyari(`butun kaynaklar tek kurumdan (${[...kurumlar][0].slice(0, 40)}). Tek kaynaga bagli kalinmiyor.`);
  }
  if (kaynaklar.length && !kaynaklar.some((k) => k.dergi)) {
    uyari(`hakemli calisma yok, yalniz kurum sayfasi var. En az bir hakemli kaynak daha guclu.`);
  }

  // --- Ic baglanti ---
  // ⚠️ Yazi govdesinde baska yazilara metin icinde atif ariyoruz; prerender'in
  // otomatik ekledigi "Diger yazilar" listesi SAYILMIYOR, o her yazida var ve
  // olcumu anlamsizlastirirdi.
  const icBaglanti = [...sluglar].filter((s) => s !== y.slug && metin.includes(s)).length;
  if (icBaglanti < ESIK.icBaglantiEnAz && sluglar.size > 3) {
    icerik(`govdede baska yaziya atif yok. Ic baglanti agi blogun butununu tasiyor.`);
  }

  // --- Kapak ---
  /*
   * ⚠️ KAPAK EKSIKLIGI ENGEL DEGIL, ICERIK NOTU (duzeltme 24.08.2026).
   *
   * Ilk halinde derlemeyi durduruyordu. Ama urunun KENDI karari kapaksiz yaziyi
   * destekliyor: `BlogKapak` kapak yoksa notr bir marka blogu ciziyor ve bunun
   * gerekcesi dosyasinda yazili — "kapagi olmayan yaziya BASKA bir yazinin
   * afisini koymak, okuyucuya yanlis basligi gosterir".
   *
   * Yani kapaksiz yayin bilincli olarak mumkun. Denetimin urun kararini
   * gecersiz kilmasi yanlis olurdu; eksiklik raporlaniyor ama yayini
   * durdurmuyor.
   */
  if (!existsSync(join(KOK, 'src/assets/blog', `${y.slug}.webp`))) {
    icerik(`kapak gorseli yok: src/assets/blog/${y.slug}.webp. Kartta ve paylasimda notr blok gorunuyor.`);
  } else {
    for (const en of [400, 800]) {
      if (!existsSync(join(KOK, 'src/assets/blog', `${y.slug}-${en}.webp`))) {
        uyari(`${en}px kapak surumu yok. \`npm run kapaklar\` calistirilmali.`);
      }
    }
  }

  // --- Tarih ---
  if (!/^\d{4}-\d{2}-\d{2}$/.test(y.tarih)) hata(`tarih ISO bicimde degil: "${y.tarih}". Yapilandirilmis veri bunu okuyor.`);
}

// KONTROL SATIRI: denetci gercekten kural isletiyor mu? Bilerek bozuk bir yazi
// uydurulup ayni kurallardan geciriliyor.
const denek = { slug: 'Bozuk_Slug', baslik: 'kisa', ozet: 'x', sss: [], kontrolListesi: [], kaynaklar: [], tarih: '24/08/2026' };
let denekBulgu = 0;
if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(denek.slug)) denekBulgu++;
if (denek.baslik.length < ESIK.baslikEnAz) denekBulgu++;
if (denek.ozet.length > ESIK.aciklamaEnFazla === false && denek.ozet.length < ESIK.aciklamaEnAz) denekBulgu++;
if (denek.sss.length < ESIK.sssEnAz) denekBulgu++;
if (denek.kontrolListesi.length < ESIK.kontrolEnAz) denekBulgu++;
if (denek.kaynaklar.length < ESIK.kaynakEnAz) denekBulgu++;
if (!/^\d{4}-\d{2}-\d{2}$/.test(denek.tarih)) denekBulgu++;
if (denekBulgu !== 7) {
  console.error(`blog seo: KONTROL SATIRI DUSTU — bozuk denek yazida 7 bulgu bekleniyordu, ${denekBulgu} cikti.`);
  console.error('Kural mantigi bozuk; gercek sonuclara guvenilmez.');
  process.exit(1);
}

console.log(`\nblog seo denetimi — ${yazilar.length} yazi, adres tabani ${SITE}\n`);
if (editoryal.length) {
  console.log('ICERIK DERINLIGI (yazarin isi, derlemeyi durdurmuyor):');
  for (const e of editoryal) console.log(`  · ${e}`);
  console.log('');
}
if (uyarilar.length) {
  console.log('UYARI (derlemeyi durdurmuyor):');
  for (const u of uyarilar) console.log(`  · ${u}`);
  console.log('');
}
if (bulgular.length) {
  console.error('!!! SEO DENETIMI KALDI — DERLEME DURDURULDU !!!\n');
  for (const b of bulgular) console.error(`  ${b}`);
  console.error('\nEsikler ve gerekceleri bu betigin basinda; kural kaynagi');
  console.error('veteriner/docs/BLOG_HAZIRLAMA_BRIEFI.md.\n');
  process.exit(1);
}
console.log(`gecti: ${yazilar.length} yazi, ${editoryal.length} icerik notu, ${uyarilar.length} uyari, 0 engel.`);
