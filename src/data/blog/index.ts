/**
 * BLOG KAYIT DEFTERI
 *
 * Yeni yazi eklerken: dosyayi bu klasore koy, asagiya import et, `YAZILAR` dizisine
 * ekle. Sira onemli degil, liste tarihe gore kendisi siralaniyor.
 *
 * ⚠️ SAHTE YAZI EKLENMEZ. Onceki surumde govdesi olmayan 7 ornek kart vardi ve
 * detay sayfasi Ingilizce bir sablon metni gosteriyordu. Bos icerik, olmayan bir
 * blogu varmis gibi gosterir.
 */
import type { BlogYazi } from './types';
import { kedilerKacYilYasar } from './kediler-kac-yil-yasar';
import { kopeklerKacYilYasar } from './kopekler-kac-yil-yasar';
import { kediYasiNasilHesaplanir } from './kedi-yasi-nasil-hesaplanir';
import { kedimYemekYemiyor } from './kedim-yemek-yemiyor';

export const YAZILAR: BlogYazi[] = [kedilerKacYilYasar, kopeklerKacYilYasar, kediYasiNasilHesaplanir, kedimYemekYemiyor].sort((a, b) =>
  b.tarih.localeCompare(a.tarih),
);

export function yaziBul(slug: string | undefined): BlogYazi | undefined {
  return YAZILAR.find((y) => y.slug === slug);
}

export const KATEGORILER = [
  'Kedi',
  'Köpek',
  'Beslenme',
  'Sağlık',
  'Klinik Yönetimi',
  'Pet Sahipleri',
] as const;

export * from './types';
