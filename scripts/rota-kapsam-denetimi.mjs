/**
 * ROTA KAPSAM DENETCISI
 *
 * ⚠️ `vercel.json` ACIKLAMASI BURADA DURUYOR, orada DEGIL. JSON yorum kabul
 * etmiyor ve Vercel'in yapilandirma semasi BILINMEYEN ANAHTARI REDDEDIYOR:
 * dosyaya "$aciklama" diye bir alan konuldu ve dagitim sessizce yapilmadi
 * (24.08.2026; commit gitti, GitHub'a dustu, siteye cikmadi). Yani o dosyaya
 * yalniz semanin tanidigi alanlar yazilabilir; gerekce buraya yazilir.
 *
 * `vercel.json` NE YAPIYOR:
 *   Eskiden { source: '/(.*)', destination: '/' } vardi, yani HER ADRES
 *   uygulamaya gidiyordu. Olculdu: /bu-sayfa-kesinlikle-yok, /blog/olmayan-yazi,
 *   /a/b/c ve /@olmayanklinik adreslerinin DORDU DE "HTTP 200" donuyordu.
 *   Arama motoru acisindan bu "yumusak 404".
 *
 *   Simdi yalniz TANIMLI rotalar yonlendiriliyor. Eslesmeyen adres statik dosya
 *   aramasina dusuyor, bulunamayinca Vercel `404.html` dosyasini GERCEK 404
 *   koduyla veriyor.
 *
 *   /blog/<slug> bilerek listede yok: prerender her yayimlanmis yazi icin gercek
 *   dosya uretiyor ve statik dosya yonlendirmeden once servis ediliyor. Olmayan
 *   slug 404 aliyor, istenen davranis bu.
 *
 * ⚠️ NEDEN VAR: `vercel.json` artik "her adresi uygulamaya yonlendir" demiyor,
 * yalniz TANIMLI rotalari yonlendiriyor (yumusak 404'u bitirmek icin). Bunun
 * bedeli, listenin `App.tsx` ile ayrisabilmesi. Ayrisirsa sonuc sessiz degil
 * ama GEC fark edilir: yeni sayfa canli sitede 404 verir.
 *
 * Bu betik iki tarafi karsilastirir ve ayrisma varsa DERLEMEYI DURDURUR.
 * Derlemeyi kirmak bilincli bir tercih: canli sitede 404 veren bir sayfadan
 * iyidir.
 *
 * Kapsam disi tutulanlar ve sebepleri asagida `HARIC` icinde tek tek yazili;
 * "unuttum" ile "bilerek biraktim" ayrilabilsin diye gerekce zorunlu.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Yonlendirme listesinde OLMAMASI gereken rotalar.
 * Her biri icin gerekce zorunlu; gerekcesiz haric tutma kabul edilmiyor.
 */
const HARIC = new Map([
  ['/', 'Kok adres zaten index.html; yonlendirmeye gerek yok.'],
  ['/blog/:slug', 'Prerender her yayimlanmis yazi icin gercek dosya uretiyor. Yonlendirme eklemek, OLMAYAN slug icin de 200 dondururdu.'],
  ['/:handle', 'Klinik vitrini yalniz "@" ile basliyor; ayri bir kural olarak yazili (/@:handle). Tum tek parcali adresleri yakalamak yumusak 404 demekti.'],
  ['*', 'React tarafindaki yakalayici. Sunucu tarafinda karsiligi 404.html.'],
]);

const appKaynak = readFileSync(join(KOK, 'src/App.tsx'), 'utf8');
const rotalar = [...appKaynak.matchAll(/<Route\s+path="([^"]+)"/g)].map((m) => m[1]);

if (rotalar.length === 0) {
  console.error('rota denetimi: App.tsx icinde hic <Route> bulunamadi.');
  console.error('Bu, kaynagin degistigi anlamina gelir; denetci guncellenmeli.');
  process.exit(1);
}

const vercel = JSON.parse(readFileSync(join(KOK, 'vercel.json'), 'utf8'));
const kaynaklar = (vercel.rewrites ?? []).map((r) => r.source);

/** "/(a|b|c)" bicimindeki kuraldan tek tek adresleri cikarir. */
const kapsanan = new Set();
for (const k of kaynaklar) {
  const grup = k.match(/^\/\(([^)]+)\)$/);
  if (grup) { for (const ad of grup[1].split('|')) kapsanan.add(`/${ad}`); continue; }
  kapsanan.add(k);
}

const eksik = [];
const fazla = [];

for (const rota of rotalar) {
  if (HARIC.has(rota)) continue;
  if (!kapsanan.has(rota)) eksik.push(rota);
}

// Ters yon: yonlendirmede olup App.tsx'te olmayan adres. Olu kural birakmak,
// silinmis bir sayfayi 404 yerine bos uygulamaya goturur.
for (const k of kapsanan) {
  if (k === '/@:handle') continue; // App.tsx'te "/:handle" olarak duruyor
  if (!rotalar.includes(k)) fazla.push(k);
}

// ── YONLENDIRME HEDEFLERI ────────────────────────────────────────────────
// 27.08.2026: uc Turkce es adres (/gizlilik, /cerez, /kvkk-aydinlatma) kalici
// yonlendirmeye cevrildi (Ahmet: "ayni seyi neden iki defa aciyoruz").
//
// ⚠️ YONLENDIRMENIN KENDI TEHLIKESI VAR. Hedef adres yoksa kullanici yine
// 404 gorur ve bu, eski adrese hic dokunmamaktan KOTUDUR: eskiden calisan bir
// bagalanti simdi kiriktir. Bu yuzden her hedef App.tsx'te gercek bir rota
// olmak zorunda.
//
// ⚠️ KAYNAK AYNI ZAMANDA ROTA OLAMAZ. Vercel yonlendirmeyi rewrite'tan ONCE
// isliyor; ikisi de tanimliysa sayfa asla acilmaz, sessizce erisilmez olur.
const yonlendirmeler = vercel.redirects ?? [];
// Host koşullu kanonik alan yönlendirmesi uygulama rotası değildir. Hedefi mutlak
// HTTPS adresidir ve aynı path parametresini korur; App.tsx rota listesine karşı
// sınamak bu geçerli Vercel kuralını yanlışlıkla “kırık” sayardı.
const uygulamaYonlendirmeleri = yonlendirmeler.filter((y) =>
  !y.has?.some((kosul) => kosul.type === 'host') && !/^https:\/\//.test(y.destination),
);
const kirikHedef = uygulamaYonlendirmeleri.filter((y) => !rotalar.includes(y.destination));
const golgeliKaynak = uygulamaYonlendirmeleri.filter((y) => rotalar.includes(y.source));

if (kirikHedef.length || golgeliKaynak.length) {
  console.error('\n!!! YONLENDIRME BOZUK — DERLEME DURDURULDU !!!\n');
  for (const y of kirikHedef) {
    console.error(`  ${y.source} -> ${y.destination}  (hedef App.tsx'te yok, 404 verir)`);
  }
  for (const y of golgeliKaynak) {
    console.error(`  ${y.source}  (hem rota hem yonlendirme kaynagi; sayfa erisilmez)`);
  }
  console.error('');
  process.exit(1);
}

// KONTROL SATIRI: denetci gercekten calisiyor mu? Kesinlikle kapsanmasi gereken
// bir rota secilip elle dogrulaniyor. Bu satir duserse denetim bozuktur.
if (!kapsanan.has('/blog')) {
  console.error('rota denetimi: KONTROL SATIRI DUSTU — "/blog" kapsanan kumesinde yok.');
  console.error('Ayristirma bozuk; sonuclarin hicbirine guvenilmez.');
  process.exit(1);
}

if (eksik.length || fazla.length) {
  console.error('\n!!! ROTA KAPSAMI AYRISMIS — DERLEME DURDURULDU !!!\n');
  if (eksik.length) {
    console.error('App.tsx tanimliyor ama vercel.json yonlendirmiyor');
    console.error('(canli sitede bu adresler 404 verir):');
    for (const r of eksik) console.error(`  ${r}`);
  }
  if (fazla.length) {
    console.error('\nvercel.json yonlendiriyor ama App.tsx tanimlamiyor');
    console.error('(silinmis sayfa 404 yerine bos uygulama gosterir):');
    for (const r of fazla) console.error(`  ${r}`);
  }
  console.error('\nDuzeltme: vercel.json icindeki listeyi App.tsx ile esitle.');
  console.error('Bilerek disarida birakiyorsan bu betikteki HARIC listesine');
  console.error('GEREKCESIYLE ekle.\n');
  process.exit(1);
}

// KONTROL SATIRI (yonlendirme): olmayan bir hedef GERCEKTEN yakalaniyor mu?
// Yukaridaki kontrol sessizce hep bos donebilirdi; burada bilerek kirik bir
// ornek verilip yakalandigi dogrulaniyor.
const ornek = { source: '/bu-kaynak-yok', destination: '/bu-hedef-asla-var-olmayacak' };
if (rotalar.includes(ornek.destination)) {
  console.error('rota denetimi: KONTROL SATIRI DUSTU — ornek hedef gercekten var.');
  process.exit(1);
}

console.log(
  `rota denetimi: ${rotalar.length} rota, ${kapsanan.size} yonlendirme, ` +
    `${yonlendirmeler.length} kalici yonlendirme, ayrisma yok.`,
);
