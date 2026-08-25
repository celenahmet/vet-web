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
import { kapakGorseli } from './gorsel';
import { kedilerKacYilYasar } from './kediler-kac-yil-yasar';
import { kopeklerKacYilYasar } from './kopekler-kac-yil-yasar';
import { kediYasiNasilHesaplanir } from './kedi-yasi-nasil-hesaplanir';
import { kedimYemekYemiyor } from './kedim-yemek-yemiyor';
import { kediAsiTakvimi } from './kedi-asi-takvimi';
import { kopekAsiTakvimi } from './kopek-asi-takvimi';
import { kopegimFazlaKiloluMu } from './kopegim-fazla-kilolu-mu';
import { kedilerdeIcVeDisParazit } from './kedilerde-ic-ve-dis-parazit';
import { veterinerKliniginNasilSecilir } from './veteriner-klinigi-nasil-secilir';
import { klinikteRandevuYonetimi } from './klinikte-randevu-yonetimi';
import { kopeklerdeKulakEnfeksiyonu } from './kopeklerde-kulak-enfeksiyonu';
import { kopeklerdeAyrilikKaygisi } from './kopeklerde-ayrilik-kaygisi';
import { kedilerdeKabizlik } from './kedilerde-kabizlik';
import { kedilerNeZamanKisirlastirilmali } from './kediler-ne-zaman-kisirlastirilmali';
import { kopeklereZararliYiyecekler } from './kopeklere-zararli-yiyecekler';
import { kedilerdePireNasilAnlasilir } from './kedilerde-pire-nasil-anlasilir';
import { mikrocipNedir } from './mikrocip-nedir';
import { kliniklerdeAsiHatirlatma } from './kliniklerde-asi-hatirlatma';

/**
 * Yazilmis butun yazilar — yayinda olsun olmasin.
 *
 * ⚠️ Bu liste DOGRUDAN KULLANILMAZ. Ekranda gosterilen `YAZILAR`; aradaki fark
 * kapak kuralidir (asagida).
 */
const TUM_YAZILAR: BlogYazi[] = [
  kedilerKacYilYasar, kopeklerKacYilYasar, kediYasiNasilHesaplanir, kedimYemekYemiyor,
  kediAsiTakvimi, kopekAsiTakvimi, kopegimFazlaKiloluMu, kedilerdeIcVeDisParazit,
  veterinerKliniginNasilSecilir, klinikteRandevuYonetimi,
  kopeklerdeKulakEnfeksiyonu, kopeklerdeAyrilikKaygisi, kedilerdeKabizlik,
  kedilerNeZamanKisirlastirilmali, kopeklereZararliYiyecekler,
  kedilerdePireNasilAnlasilir, mikrocipNedir, kliniklerdeAsiHatirlatma,
];

/**
 * KAPAKSIZ YAZI YAYINLANMAZ (İSTEK: Ahmet, 24.08.2026 — *"kapak fotoğrafı
 * olmayan yazıları yayınlamayalım"*).
 *
 * ⚠️ Yazi SILINMIYOR, yayindan cekiliyor. Dosya duruyor, kaynaklari duruyor,
 * denetimlerden gecmeye devam ediyor; yalnizca listelerde, site haritasinda ve
 * onceden uretilen sayfalarda yok. Kapak eklendigi anda kendiliginden yayina
 * giriyor, baska hicbir sey yapmak gerekmiyor.
 *
 * ⚠️ NEDEN: kapaksiz yazi listede bos bir dikdortgen olarak duruyordu ve
 * paylasildiginda `og:image` uretmiyordu. Yarim gorunen yazi, hic gorunmeyenden
 * kotu: okuyucu blogun bakimsiz oldugunu dusunuyor.
 *
 * ⚠️ ADRES DE KAPANIYOR. Yalniz listeden cikarmak yetmez; yayinda olmayan bir
 * yazinin adresi acik kalirsa arama motoru onu yine bulur ve kapaksiz
 * paylasir. `yaziBul` bu yuzden yayinda olmayani DONDURMUYOR, sayfa 404 oluyor.
 */
export const YAYINDA_OLMAYANLAR: BlogYazi[] = TUM_YAZILAR.filter((y) => !kapakGorseli(y.slug));

export const YAZILAR: BlogYazi[] = TUM_YAZILAR
  .filter((y) => Boolean(kapakGorseli(y.slug)))
  .sort((a, b) => b.tarih.localeCompare(a.tarih));

export function yaziBul(slug: string | undefined): BlogYazi | undefined {
  return YAZILAR.find((y) => y.slug === slug);
}

/** Denetim betikleri icin: yazilmis her sey, yayin durumundan bagimsiz. */
export function tumYazilar(): BlogYazi[] {
  return [...TUM_YAZILAR].sort((a, b) => b.tarih.localeCompare(a.tarih));
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
