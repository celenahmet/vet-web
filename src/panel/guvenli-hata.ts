import { istemci } from './istemci';

/**
 * SUNUCU HATASINI KULLANICIYA GOSTERILEBILIR HALE GETIRIR.
 *
 * ⚠️ Bu dosya mobildeki `src/shared/utils/kullanici-hatasi.ts`'in ESIDIR.
 * Ikisi ayni SQLSTATE ayirimini ve AYNI referans alfabesini kullaniyor; boylece
 * kullanicinin okudugu `VT-8F3K2` panelden de telefondan da ayni bicimde cikiyor
 * ve admin kaydinda tek listede toplaniyor.
 *
 * ⚠️ ESLEME TABLOSU YOK, bu kasten boyle. Ahmet: *"bu hata kodlari disaridan
 * yazilimcilarin anlayabilecegi kodlar olmasin, yalniz bizdeki karsiliklari
 * olsun."* Web paketi tarayiciya ACIK gonderiliyor; burada bir katalog
 * bulunsaydi kaynak sekmesinden okunurdu. Referans RASTGELE, hicbir sey
 * anlatmiyor; gercek ayrinti sunucuda (migration 0160) ve yalniz admin goruyor.
 *
 * ⚠️ AYIRIM SQLSTATE ILE, METINLE DEGIL. Kendi `raise`'lerimiz 45xxx / P000x /
 * 22023 kullaniyor. "Turkce gorunuyorsa bizimdir" kurali bir gun Turkce bir
 * sistem mesajiyla yanilirdi.
 *
 * ⚠️ 42501 GUVENLI SAYILMIYOR: Postgres da firlatiyor ve metni TABLO ADI
 * iceriyor (`permission denied for table pet_photos`). Ayirt edemedigimiz icin
 * tamami gizleniyor.
 */

function bizimHataMi(kod: string | null): boolean {
  if (!kod) return false;
  return /^45\d{3}$/.test(kod) || /^P000[1-9]$/.test(kod) || kod === '22023';
}

function hamMesaj(err: unknown): string {
  if (typeof err === 'string') return err;
  if (err && typeof err === 'object') {
    const c = err as { message?: unknown; error_description?: unknown };
    if (typeof c.message === 'string' && c.message.trim()) return c.message;
    if (typeof c.error_description === 'string') return c.error_description;
  }
  return '';
}

function sunucuKodu(err: unknown): string | null {
  if (err && typeof err === 'object') {
    const c = err as { code?: unknown };
    if (typeof c.code === 'string' && c.code) return c.code;
  }
  return null;
}

const HARFLER = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // I, O, 0, 1 yok: okunurken karisiyor

function referansUret(): string {
  let s = '';
  for (let i = 0; i < 5; i += 1) s += HARFLER[Math.floor(Math.random() * HARFLER.length)];
  return `VT-${s}`;
}

export { GIZLI_ISARET, GUVENLI_ISARET } from './hata-isaretleri';
import { GIZLI_ISARET, GUVENLI_ISARET } from './hata-isaretleri';

/**
 * Gosterilebilir bir `Error` uretir.
 *
 * Bizim hatamizsa metin oldugu gibi kalir. Degilse metin ATILIR, yerine
 * `GIZLI_ISARET` + referans gecer ve ayrinti sunucuya bildirilir.
 *
 * @param yuzey Hangi cagri patladi; YALNIZ sunucu kaydina gidiyor.
 */
export function guvenliHata(err: unknown, yuzey: string): Error {
  const kod = sunucuKodu(err);

  if (bizimHataMi(kod)) {
    const m = hamMesaj(err);
    if (m) return new Error(`${GUVENLI_ISARET}${m}`);
  }

  /*
   * Bilinen ve ANLATILABILIR durumlar. Buradaki cumleler SUNUCUDAN GELMIYOR,
   * bizim yazdigimiz cumleler; sunucunun metni (`permission denied for table
   * pet_photos`) atiliyor.
   *
   * ⚠️ Bu, Ahmet'in reddettigi "esleme tablosu" DEGIL. Reddedilen sey opak bir
   * kodun karsiligini paketin icinde bulundurmakti; burada opak kod yok,
   * kullanicinin zaten ekranda gordugu cumle var. Yine de kisa tutuluyor:
   * anlatamadigimiz her sey referansa dusuyor.
   */
  if (kod === '42501') {
    return new Error(`${GUVENLI_ISARET}Bu işlem için yetkiniz yok. Bazı işlemleri yalnızca klinik sahibi yapabilir.`);
  }
  if (kod === 'PGRST301' || kod === '401') {
    return new Error(`${GUVENLI_ISARET}Oturumunuz sona ermiş. Tekrar giriş yapın.`);
  }

  /* Ag hatasi: sunucuya zaten bildirilemez, ve metni mimari sizdirmiyor. */
  const ham = hamMesaj(err);
  if (/failed to fetch|networkerror|load failed/i.test(ham)) return new Error(`${GUVENLI_ISARET}${ham}`);

  const referans = referansUret();

  // ⚠️ BEKLETILMIYOR ve hatasi YUTULUYOR: kullanici zaten bir hata yasadi,
  // bildirimin de patlamasi ekrani ikinci kez bozmamali.
  void istemci
    .rpc('report_error', {
      p_referans: referans,
      p_kod: kod ?? '',
      p_ayrinti: ham.slice(0, 240),
      p_yuzey: `panel:${yuzey}`,
    })
    .then(
      () => undefined,
      // ⚠️ Supabase'in donusu PromiseLike; .catch YOK, ikinci arguman var.
      () => undefined,
    );

  return new Error(`${GIZLI_ISARET}${referans}`);
}
