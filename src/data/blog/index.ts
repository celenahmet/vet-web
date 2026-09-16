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
import { kediKopekCheckUpNeZaman } from './kedi-kopek-check-up-ne-zaman';
import { kopeklerdeZehirlenme } from './kopeklerde-zehirlenme';
import { evcilHayvanlardaKanTahlili } from './evcil-hayvanlarda-kan-tahlili';
import { veterinerHekimTeknikerFarki } from './veteriner-hekim-tekniker-farki';
import { muayenehanePoliklinikHastaneFarki } from './muayenehane-poliklinik-hastane-farki';
import { asgariUcretTarifesiNedir } from './asgari-ucret-tarifesi-nedir';
import { veterinerTeknikeriNeIsYapar } from './veteriner-teknikeri-ne-is-yapar';
import { veterinerHekimMaaslari } from './veteriner-hekim-maaslari';
import { veterinerTeknikeriMaaslari } from './veteriner-teknikeri-maaslari';
import { veterinerUcretleri } from './veteriner-ucretleri';
import { kedimKusuyor } from './kedim-kusuyor';

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
  kediKopekCheckUpNeZaman, kopeklerdeZehirlenme, evcilHayvanlardaKanTahlili,
  veterinerHekimTeknikerFarki, muayenehanePoliklinikHastaneFarki,
  asgariUcretTarifesiNedir, veterinerTeknikeriNeIsYapar,
  veterinerHekimMaaslari, veterinerTeknikeriMaaslari, veterinerUcretleri,
  kedimKusuyor,
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

/**
 * TARIHI GELMEYEN YAZI YAYINLANMAZ (16.09.2026).
 *
 * Ahmet: *"yayın mekanizmasını da kuralım"*. Bugune kadar bir yaziyi ileri
 * tarihe yazmanin karsiligi yoktu: dosya eklendigi an yayina giriyordu. Yani
 * "hafta boyu her gun bir yazi" ancak elle, her sabah commit atarak olurdu.
 *
 * Artik olcut TARIH: `tarih` bugunden ileriyse yazi listelerde, site
 * haritasinda ve beslemede YOK; adresi de 404 (kapak kuralinda oldugu gibi,
 * yayinda olmayanin adresi acik birakilmaz).
 *
 * ⚠️ SITE STATIK: tarihi gelen yazinin kendiliginden cikmasi icin o gun yeni
 * bir build gerekiyor. Bunun icin `api/gunluk-yayin` + Vercel Cron kuruldu
 * (UniConnectly'de calisan desen). Cron olmazsa yazi bir sonraki deploy'da
 * cikar; veri kaybi yok, yalnizca gecikme olur.
 *
 * ⚠️ SAAT DILIMI: kiyas Istanbul gunu uzerinden ("sv-SE" biciminde YYYY-MM-DD).
 * UTC ile kiyaslamak, gece yarisindan sonra yazilan bir yaziyi bir gun erken
 * yayina sokardi.
 */
export function bugunIstanbul(): string {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Istanbul' }).format(new Date());
}

export const TARIHI_GELMEYENLER: BlogYazi[] = TUM_YAZILAR.filter((y) => y.tarih > bugunIstanbul());

export const YAZILAR: BlogYazi[] = TUM_YAZILAR
  .filter((y) => Boolean(kapakGorseli(y.slug)))
  .filter((y) => y.tarih <= bugunIstanbul())
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
