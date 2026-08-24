/**
 * KAYNAK DENETCISI
 *
 * ⚠️ NEDEN VAR: Ahmet 24.08.2026'da iki kez ayni seyi soyledi —
 *   *"bloglarda hala kaynak eksikleri var her yazida en az bi kaynak sart"*
 *   *"hangi dergi hangi makale hangi sayi vs vs"*
 * O gun olculdu: alti yazinin DORDUNDE hic kaynak yoktu. Kural sohbette kalirsa
 * yedinci yazida yine unutulur. Bu betik onu derlemede yakaliyor.
 *
 * Neyi denetliyor:
 *   1. Her yazida EN AZ BIR kaynak var mi
 *   2. Hakemli bir calisma gosteriliyorsa kunyesi TAM mi (yazar, dergi, yil,
 *      cilt/sayi). Yarim kunye, kaynak vermemekten kotudur: dogrulanabilir
 *      gorunur ama dogrulanamaz.
 *   3. DOI bicimi dogru mu (uydurulmus DOI'yi bicim yakalayamaz ama bozugu
 *      yakalar)
 *
 * ⚠️ NEYI DENETLEYEMEZ: kaynagin GERCEK olup olmadigini. Bunu yalniz kunyeyi
 * resmi bir kayittan (PubMed E-utilities gibi) okuyarak dogrulayabilirsiniz.
 * Betik "alan dolu" der, "dogru" demez. Uydurma kunye buradan gecer; kurali
 * uygulayan insandir.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const KOK = join(dirname(fileURLToPath(import.meta.url)), '..');
const KLASOR = join(KOK, 'src/data/blog');
const HARIC = new Set(['index.ts', 'types.ts', 'gorsel.ts']);

const yazilar = [];
for (const d of readdirSync(KLASOR).filter((f) => f.endsWith('.ts') && !HARIC.has(f))) {
  const mod = await import(pathToFileURL(join(KLASOR, d)).href);
  for (const deger of Object.values(mod)) {
    if (deger && typeof deger === 'object' && 'slug' in deger && 'bloklar' in deger) yazilar.push(deger);
  }
}

if (yazilar.length === 0) {
  console.error('kaynak denetimi: hic yazi bulunamadi — ayristirma bozuk, sonuclara guvenilmez.');
  process.exit(1);
}

const bulgular = [];

/**
 * Kaynak zorunlulugu SAGLIK ICERIGI icin.
 *
 * ⚠️ Brief'in kurali birebir soyle: "Saglik icerikli her yazida en az bir
 * dogrulanmis kaynak bulunur." Klinik yonetimi yazilari tibbi iddia tasimiyor;
 * onlar icin hakemli kaynak aramak, kaynagi zorlama getiriyor ve zorlanan
 * kaynak yanlis kaynaktir.
 *
 * ⚠️ MUAFIYET DEGIL, KAPSAM. Klinik yonetimi yazisinda tibbi bir cumle gecerse
 * kural yine isler: o cumle kaynaksiz yazilamaz. Denetim kategoriye bakiyor,
 * cumleye bakamaz; bunu uygulayan insandir.
 */
const SAGLIK_KATEGORILERI = new Set(['Kedi', 'Köpek', 'Beslenme', 'Sağlık']);

for (const y of yazilar) {
  const kaynaklar = y.kaynaklar ?? [];
  const saglikIcerigi = SAGLIK_KATEGORILERI.has(y.kategori);

  if (kaynaklar.length === 0) {
    if (saglikIcerigi) {
      bulgular.push(`${y.slug}: HIC KAYNAK YOK. Saglik icerikli her yazida en az bir doğrulanmış kaynak zorunlu.`);
    }
    continue;
  }

  kaynaklar.forEach((k, i) => {
    const yer = `${y.slug} · kaynak ${i + 1}`;
    if (!k.kurum) bulgular.push(`${yer}: "kurum" bos. Kaynagin sahibi yazilmadan kaynak sayilmaz.`);
    if (!k.baslik) bulgular.push(`${yer}: "baslik" bos.`);

    // Hakemli calisma isareti: yazar VEYA dergi verilmisse kunye tamamlanmali.
    const hakemliGibi = Boolean(k.yazarlar || k.dergi);
    if (hakemliGibi) {
      for (const alan of ['yazarlar', 'dergi', 'yil', 'kunye']) {
        if (!k[alan]) {
          bulgular.push(`${yer}: hakemli calisma gosteriliyor ama "${alan}" bos. Yarim kunye dogrulanamaz.`);
        }
      }
    }

    if (k.doi && !/^10\.\d{4,9}\/\S+$/.test(k.doi)) {
      bulgular.push(`${yer}: DOI bicimi bozuk (${k.doi}). Beklenen bicim 10.xxxx/....`);
    }
    if (k.adres && !/^https:\/\//.test(k.adres)) {
      bulgular.push(`${yer}: adres https ile baslamiyor (${k.adres}).`);
    }
  });
}

// KONTROL SATIRI: denetci gercekten calisiyor mu? Bilerek bozuk bir kayit
// uydurulup ayni kurallardan geciriliyor; yakalanmazsa denetim bozuktur.
const denek = { kurum: '', baslik: 'deneme', yazarlar: 'X Y', dergi: '', yil: 0, kunye: '', doi: 'bozuk-doi' };
const denekBulgu = [];
if (!denek.kurum) denekBulgu.push('kurum');
if (denek.yazarlar || denek.dergi) for (const a of ['dergi', 'yil', 'kunye']) if (!denek[a]) denekBulgu.push(a);
if (denek.doi && !/^10\.\d{4,9}\/\S+$/.test(denek.doi)) denekBulgu.push('doi');
if (denekBulgu.length !== 5) {
  console.error(`kaynak denetimi: KONTROL SATIRI DUSTU — bozuk denek kayitta 5 bulgu bekleniyordu, ${denekBulgu.length} cikti.`);
  console.error('Kural mantigi bozuk; gercek sonuclara guvenilmez.');
  process.exit(1);
}

if (bulgular.length) {
  console.error('\n!!! KAYNAK DENETIMI KALDI — DERLEME DURDURULDU !!!\n');
  for (const b of bulgular) console.error(`  ${b}`);
  console.error('\nKunye HATIRLAYARAK doldurulmaz. PubMed E-utilities gibi resmi');
  console.error('bir kayittan okunup kopyalanir; emin olunmayan alan bos birakilmaz,');
  console.error('kaynagin tamami yazilmaz.\n');
  process.exit(1);
}

const toplam = yazilar.reduce((n, y) => n + (y.kaynaklar?.length ?? 0), 0);
const hakemli = yazilar.reduce((n, y) => n + (y.kaynaklar ?? []).filter((k) => k.dergi).length, 0);
console.log(`kaynak denetimi: ${yazilar.length} yazi, ${toplam} kaynak (${hakemli} hakemli), eksik yok.`);
