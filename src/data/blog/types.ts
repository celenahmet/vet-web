/**
 * BLOG VERI TIPLERI
 *
 * Yazilar markdown olarak degil, TIPLI BLOKLAR olarak duruyor. Sebep:
 * `src/data/legal/*` ayni deseni kullaniyor ve ise yariyor. Blok yapisi hem
 * render tarafini basitlestiriyor hem de yaziyi derleme aninda statik HTML'e
 * cevirmeyi mumkun kiliyor (SEO icin sart, site tamamen tarayicida uretiliyor).
 */

export type BlogBlock =
  | { kind: 'paragraf'; metin: string }
  | { kind: 'baslik'; metin: string }
  | { kind: 'altBaslik'; metin: string }
  | { kind: 'liste'; maddeler: string[] }
  | { kind: 'tablo'; basliklar: string[]; satirlar: string[][] }
  | { kind: 'uyari'; metin: string }
  /**
   * Yaygin yanlis inanisi acikca soyleyen kutu. UniConnectly blogundaki "tuzak"
   * bolumlerinin karsiligi. ⚠️ ADI "tuzak" DEGIL "yanilgi" (Ahmet, 23.08.2026):
   * "kodlama yapmiyoruz, yanilgi kelimesi daha dogru olur". Okuyucunun dogru
   * sandigi seyi once adiyla soyleyip
   * sonra duzeltiyor. Tibbi uyaridan AYRI tutuluyor, ikisi farkli sey.
   */
  | { kind: 'yanilgi'; baslik: string; metin: string };

export type BlogSSS = { soru: string; cevap: string };

/**
 * KAYNAK KUNYESI
 *
 * ⚠️ Once yalnizca `{ etiket, adres }` vardi, yani "bir yerde bir sayfa". Ahmet
 * 24.08.2026'da olcuyu yukseltti: *"kaynakta universite felan tercihi ya kimin
 * arastirmayi yurutugunu felan detayli kaynak guzel olur hangi dergi hangi
 * makale hangi sayi vs vs"*. Kunye artik parcali tutuluyor; boylece hem ekranda
 * duzgun bicimlenebiliyor hem de eksik alan gozle degil DENETIMLE yakalanabiliyor
 * (`scripts/kaynak-denetimi.mjs`).
 *
 * ⚠️ HICBIR ALAN HATIRLAYARAK DOLDURULMAZ. Kunye, PubMed E-utilities gibi resmi
 * bir kaynaktan okunur ve oradan kopyalanir. Uydurulmus bir cilt/sayi, kaynaksiz
 * yazmaktan KOTUDUR: dogrulanabilir gorunur ama yanlistir.
 */
export type BlogKaynak = {
  /** Kurum ya da yayin sahibi. Hakemli calismada da yazilir. */
  kurum: string;
  /** Makale ya da sayfa basligi, BIREBIR. */
  baslik: string;
  /** 'Kraus C, Pavard S, Promislow DE' bicimi. Hakemli calismada zorunlu. */
  yazarlar?: string;
  /** Dergi adi. Hakemli calismada zorunlu. */
  dergi?: string;
  /** Yayin yili. */
  yil?: number;
  /** Cilt(sayi):sayfa — ornek '181(4):492-505'. */
  kunye?: string;
  /** Kalici tanimlayici. Adres degisse de kaynak bulunabilsin diye. */
  doi?: string;
  adres?: string;
};

export type BlogKategori =
  | 'Kedi'
  | 'Köpek'
  | 'Beslenme'
  | 'Sağlık'
  | 'Klinik Yönetimi'
  | 'Pet Sahipleri';

export type BlogYazi = {
  /** Adresteki parca: /blog/<slug>. Degistirilirse eski adres kirilir. */
  slug: string;
  baslik: string;
  /** Meta aciklama ve kart ozeti. 150-160 karakter hedefi. */
  ozet: string;
  kategori: BlogKategori;
  /** ISO tarih, ornek 2026-08-23 */
  tarih: string;
  bloklar: BlogBlock[];
  sss: BlogSSS[];
  /**
   * Yazinin sonundaki kontrol listesi (İSTEK: Ahmet, 24.08.2026 —
   * "yazilarin sonunda kontrol listesi yapalim faydasi olur").
   *
   * Okuyucuya elle tutulur bir sey birakiyor: yaziyi okuyup kapatmak yerine
   * uygulanabilir maddeler kaliyor. SSS'ten farki, SSS soruyu cevapliyor,
   * kontrol listesi EYLEM soyluyor.
   */
  kontrolListesi?: string[];
  /**
   * ⚠️ HER YAZIDA EN AZ BIR KAYNAK ZORUNLU (Ahmet, 24.08.2026: "her yazida en az
   * bi kaynak sart ya en az 1 ozellikle universite kaynagi daha hos oluyor").
   * Alan tipte opsiyonel kaldi cunku eski yazilar once tasinacak; ama
   * `scripts/kaynak-denetimi.mjs` bos birakilan yaziyi derlemede yakaliyor.
   */
  kaynaklar?: BlogKaynak[];
};

/** 200 kelime/dk uzerinden okuma suresi. Elle girilmiyor, metinden olculuyor. */
export function okumaSuresi(yazi: BlogYazi): number {
  const parcalar: string[] = [];
  for (const b of yazi.bloklar) {
    if (b.kind === 'liste') parcalar.push(...b.maddeler);
    else if (b.kind === 'tablo') parcalar.push(...b.basliklar, ...b.satirlar.flat());
    else parcalar.push(b.metin);
  }
  for (const s of yazi.sss) parcalar.push(s.soru, s.cevap);
  const kelime = parcalar.join(' ').trim().split(/\s+/).length;
  return Math.max(1, Math.round(kelime / 200));
}

/** Ekranda gosterilen tarih: 23 Ağustos 2026 */
export function tarihiYaz(iso: string): string {
  const aylar = ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];
  const [y, a, g] = iso.split('-').map(Number);
  return `${g} ${aylar[a - 1]} ${y}`;
}
