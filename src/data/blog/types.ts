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
  /** Opsiyonel. Yalniz DOGRULANMIS kaynak yazilir, uydurma bagi konmaz. */
  kaynaklar?: { etiket: string; adres?: string }[];
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
