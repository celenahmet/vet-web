/**
 * OTURUM SURESI — bosta kalma kilidi
 *
 * ⚠️ ISTEK (Ahmet, 25.08.2026): *"web de oturum süresi güvenliğini yapmamız
 * lazım... sürekli uygulamadan atması da tatsız olur da bi süre belirlemek
 * lazım... sen benim önerilerimi çok önemseme, ergonomiklikle güvenlik
 * çelişebilir"*.
 *
 * ── ÖLÇÜM ÖNCE ────────────────────────────────────────────────────────────
 *   erisim belirteci omru : 60 dakika, kendiliginden yenileniyor
 *   yenileme belirteci    : uzun omurlu
 *   `signOut({scope:'local'})` : belirteci SUNUCUDA da iptal ediyor
 *      (denendi: cikistan once GECERLI, cikistan sonra IPTAL EDILDI)
 *
 * Yani bugun panel bir kez acildiginda oturum PRATIKTE SURESIZ. Klinik masasinda
 * acik unutulan bir ekran, ertesi gun de acik.
 *
 * ── NEDEN "GUNDE BIR KEZ ATSIN" DEGIL ─────────────────────────────────────
 * Ahmet'in onerisi ogle arasi bir cikisti. Olcup dusununce bunu ONERMIYORUM:
 *
 *   · Sabit saatte atmak, O SIRADA CALISAN kisiyi atiyor. Randevu onaylarken
 *     oturumu kapanan bir calisan icin bu bedel, karsiliginda bir guvenlik
 *     kazanci vermiyor: ekranin BASINDA biri varsa risk zaten yok.
 *   · Asil risk BASINDA KIMSE YOKKEN acik kalan ekran. Sabit saatli cikis o
 *     ekrani sabahtan ogleye kadar acik birakiyor.
 *
 * Dogru kontrol BOSTA KALMA SURESI: kullanan kisi hic atilmiyor, birakip giden
 * kisinin ekrani kapaniyor. Ergonomi ile guvenlik burada CELISMIYOR, ayni
 * yone bakiyor.
 *
 * ⚠️ Bu bir istemci kilidi ve tek basina yeterli DEGIL — ama tiyatro da degil:
 * sure dolunca `signOut` cagriliyor ve o cagri belirteci sunucuda iptal
 * ediyor. Yani kilit acildiginda oturum GERCEKTEN bitmis oluyor.
 *
 * ── YALNIZ WEB ─────────────────────────────────────────────────────────────
 * ⚠️ BU KILIT MOBILI HIC ETKILEMIYOR (Ahmet, 25.08.2026: *"bu oturum süresi
 * kısmı jwt sadece web için olsun... web ile mobil karışmasın bu konuda"*).
 *
 * Uc ayri sebeple ayrik:
 *   1. Kod bu depoda ve yalnizca `/panel` rotasinda calisiyor; uygulama ayri
 *      bir depo ve bu dosyayi hic gormuyor.
 *   2. Cikis `scope: 'local'`; olculdu — yalnizca BU tarayicinin belirtecini
 *      sunucuda iptal ediyor, telefonun yenileme belirteci gecerli kaliyor.
 *   3. Supabase tarafinda bir ayar DEGISMEDI. Belirtec omru (60 dakika) ve
 *      yenileme davranisi projenin ayari; ona dokunmak mobili de degistirirdi.
 *      O yuzden sure sinirlamasi sunucuda degil, panelin kendi icinde.
 *
 * Yani telefondaki uygulama, bugun nasil davraniyorsa oyle davranmaya devam
 * ediyor: kimseyi durduk yere atmiyor.
 *
 * ⚠️ Sure secimi: 40 dakika bosta + 2 dakika uyari. Bankacilikta 5-15 dakika
 * olur; klinik masasi banka degil ve kisa sure burada gercek bir maliyet:
 * muayeneden donen calisan her seferinde sifreyi yeniden yazar. 40 dakika,
 * "masadan kalkip gitti" ile "ic odaya gecti" arasini ayiran esik.
 */

/** Bosta kalma siniri. */
export const BOSTA_SINIR_MS = 40 * 60 * 1000;
/** Kilitlenmeden once uyarinin cikacagi sure. */
export const UYARI_ONCESI_MS = 2 * 60 * 1000;

/**
 * Kullanicinin "burada" oldugunu gosteren olaylar.
 *
 * ⚠️ `scroll` ve `mousemove` BILEREK var: klavye ve tiklama beklemek, uzun bir
 * listeyi okuyan kisiyi "bosta" saymak olurdu.
 * ⚠️ `visibilitychange` de var: baska sekmeye gecip donen kisi bosta degil.
 */
export const ETKINLIK_OLAYLARI = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart', 'wheel'] as const;

/** '3 dakika 12 saniye' yerine '3:12' — geri sayimda okunan sey saniye. */
export function geriSayimYaz(ms: number): string {
  const toplam = Math.max(0, Math.ceil(ms / 1000));
  const dakika = Math.floor(toplam / 60);
  const saniye = toplam % 60;
  return `${dakika}:${String(saniye).padStart(2, '0')}`;
}
