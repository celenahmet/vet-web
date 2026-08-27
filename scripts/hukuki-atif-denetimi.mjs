/**
 * HUKUKI ATIF DENETCISI
 *
 * Iki kurali birlikte koruyor, cunku ikisi de ayni endiseden geliyor:
 * "sozlesmedeki bir yer gosterme, okunabilir ve DOGRU olmali".
 *
 * ── 1) SOZLESMELERDE "§" YASAK (ISTEK: Ahmet, 27.08.2026) ──────────────────
 * Sozlesme metni sirkete degil KULLANICIYA yazilir. "§" hukukcu isareti; okuyan
 * kisi icin bir sey ifade etmiyor ve metni oldugundan daha kapali gosteriyor.
 *
 * ⚠️ YASAK YALNIZ BELGE METNINDE. Kod yorumlarinda ve ic belgelerde ("Anayasa
 * §5.1") serbest: orasi ekip icidir, sozlesme degildir. Bu betik yalniz
 * `src/data/legal/{tr,en}.ts` icindeki BELGE ALANLARINI tariyor.
 *
 * ── 2) BOLUM ATIFLARI GERCEK OLMALI ────────────────────────────────────────
 * ⚠️ NEDEN VAR: 27.08.2026'da "§" temizlenirken ORTAYA CIKTI ki atiflar zaten
 * yanlisti. Ayni cumle Turkcede "§6", Ingilizcede "§7" gosteriyordu:
 *   TR §6 = "Saklama sureleri"  -> cumle "hukuki dayanak VE sureler" diyordu,
 *                                  hukuki dayanak aslinda §5'te
 *   EN §7 = "Your rights"       -> cumle "legal basis and timeframes" diyordu,
 *                                  yani TAMAMEN baska bir bolum
 * Kimse fark etmemisti cunku kimse kontrol etmiyordu. Hukuki bir belgede
 * okuyucuyu yanlis bolume yollamak, bilgi vermemekten kotudur: okuyan kisi
 * baktigini sanip vazgecer.
 *
 * ⚠️ NUMARA DEGIL AD KULLANILIYOR. Atif "§6" degil "Saklama sureleri bolumu"
 * diye yaziliyor. Numara, araya bir bolum eklendigi anda SESSIZCE yanlisa
 * doner ve hicbir denetim bunu yakalayamaz; ad donmez, degisirse bu betik
 * bagirir.
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const hukuki = await import(pathToFileURL(join(KOK, 'src/data/legal/index.ts')).href);

/** Baslik sonundaki parantezli atif ("(KVKK Md. 8-9)") eslesmeye girmiyor. */
const sadelestir = (s) =>
  s.replace(/\s*\([^)]*\)\s*$/, '').replace(/\s+/g, ' ').trim().toLocaleLowerCase('tr');

/** Bir belgedeki tum metin parcalarini (blok turu ne olursa olsun) toplar. */
function metinler(belge) {
  const cikti = [];
  const blok = (b) => {
    if (!b) return;
    if (b.value) cikti.push(b.value);
    if (b.items) cikti.push(...b.items);
    if (b.columns) cikti.push(...b.columns);
    if (b.rows) for (const satir of b.rows) cikti.push(...satir);
  };
  cikti.push(belge.title, belge.summary);
  for (const b of belge.intro ?? []) blok(b);
  for (const bolum of belge.sections ?? []) {
    cikti.push(bolum.title);
    for (const b of bolum.blocks ?? []) blok(b);
  }
  for (const b of belge.closing ?? []) blok(b);
  return cikti.filter((s) => typeof s === 'string');
}

const DILLER = ['tr', 'en'];
/** Atif oldugunu ele veren sozcukler; bold ifadenin YAKININDA arantiyor. */
const ATIF_IZI = { tr: /bölüm/i, en: /section/i };

const hatalar = [];
let atifSayaci = 0;

for (const dil of DILLER) {
  const set = hukuki.getLegalDocuments(dil);
  const belgeler = Object.values(set);

  // Gecerli hedefler: her bolum basligi + her belge basligi.
  const hedefler = new Set();
  for (const belge of belgeler) {
    hedefler.add(sadelestir(belge.title));
    for (const bolum of belge.sections ?? []) hedefler.add(sadelestir(bolum.title));
  }

  for (const belge of belgeler) {
    for (const metin of metinler(belge)) {
      if (metin.includes('§')) {
        hatalar.push(`[${dil}] ${belge.id}: sozlesme metninde "§" var -> ${metin.slice(0, 70)}`);
      }

      for (const m of metin.matchAll(/\*\*([^*]+)\*\*/g)) {
        // Bold ifadenin cevresinde "bolum"/"section" geciyorsa bu bir ATIFTIR.
        const cevre = metin.slice(Math.max(0, m.index - 40), m.index + m[0].length + 40);
        if (!ATIF_IZI[dil].test(cevre)) continue;
        atifSayaci++;
        if (!hedefler.has(sadelestir(m[1]))) {
          hatalar.push(
            `[${dil}] ${belge.id}: "${m[1]}" diye bir bolum ya da belge YOK ` +
              `(atif: "...${cevre.trim().slice(0, 60)}...")`,
          );
        }
      }
    }
  }
}

// KONTROL SATIRI: cikarim gercekten calisiyor mu? Regex bozulursa atifSayaci
// sifira duser ve denetim "hata yok" diye SESSIZCE gecerdi. Bu, denetcinin
// kendisini olcen satir.
const EN_AZ_ATIF = 8;
if (atifSayaci < EN_AZ_ATIF) {
  console.error(`hukuki atif denetimi: KONTROL SATIRI DUSTU — yalniz ${atifSayaci} atif bulundu.`);
  console.error(`En az ${EN_AZ_ATIF} bekleniyordu. Cikarim bozuk; sonuclara guvenilmez.`);
  process.exit(1);
}

if (hatalar.length) {
  console.error('\n!!! HUKUKI ATIF DENETIMI DUSTU !!!\n');
  for (const h of hatalar) console.error(`  ${h}`);
  console.error('\nBolum atiflari belge basligiyla BIREBIR eslesmeli.');
  console.error('Sozlesme metninde "§" kullanilmaz (kod yorumlarinda serbest).\n');
  process.exit(1);
}

console.log(`hukuki atif denetimi: ${atifSayaci} atif dogrulandi, "§" yok.`);
