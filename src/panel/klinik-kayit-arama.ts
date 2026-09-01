import type { CevrimdisiMusteri, DefterHastasi, Hasta, Musteri } from './veri';

export type KayitKaynagi = 'all' | 'platform' | 'ledger';

function anahtar(deger: string | null | undefined) {
  return (deger ?? '').trim().toLocaleLowerCase('tr-TR');
}

function eslesir(sorgu: string, alanlar: Array<string | null | undefined>) {
  const aranan = anahtar(sorgu);
  return !aranan || alanlar.some((alan) => anahtar(alan).includes(aranan));
}

export function musterileriFiltrele(
  platform: Musteri[],
  defter: CevrimdisiMusteri[],
  sorgu: string,
  kaynak: KayitKaynagi,
) {
  return {
    platform: kaynak === 'ledger' ? [] : platform.filter((m) => eslesir(sorgu, [m.display_name, m.note])),
    defter: kaynak === 'platform' ? [] : defter.filter((m) => eslesir(sorgu, [m.full_name, m.phone, m.email, m.note])),
  };
}

export function hastalariFiltrele(
  platform: Hasta[],
  defter: DefterHastasi[],
  musteriAdi: (id: string) => string,
  turAdi: (kod: string | null) => string,
  sorgu: string,
  kaynak: KayitKaynagi,
) {
  return {
    platform: kaynak === 'ledger' ? [] : platform.filter((h) => eslesir(sorgu, [h.pet_name, h.owner_name, turAdi(h.species_code)])),
    defter: kaynak === 'platform' ? [] : defter.filter((h) => eslesir(sorgu, [h.name, musteriAdi(h.customer_id), turAdi(h.species_code), h.microchip_no, h.note])),
  };
}

/**
 * Platform hastasını otomatik birleştirmez. Yalnız aynı hasta ve sahip adıyla
 * olası klinik defteri kaydını gösterir; veteriner ikinci kayıt açmadan önce
 * mevcut klinik geçmişini kontrol edebilir.
 */
export function olasiDefterHastasiEslesmeleri(
  platformHastasi: Hasta,
  defter: DefterHastasi[],
  musteriAdi: (id: string) => string,
) {
  const hasta = anahtar(platformHastasi.pet_name);
  const sahip = anahtar(platformHastasi.owner_name);
  if (!hasta) return [];
  return defter.filter((kayit) => {
    if (anahtar(kayit.name) !== hasta) return false;
    const kayitSahibi = anahtar(musteriAdi(kayit.customer_id));
    return !sahip || !kayitSahibi || sahip === kayitSahibi;
  });
}
