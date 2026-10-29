/**
 * YAZI PAYLASIMI VE YAPAY ZEKA OZETI BAGLANTILARI (İSTEK: Ahmet, 29.10.2026 —
 * "blog sayfalarimizin basina AI ile ozetle butonu ... yazi faydali oldu mu,
 * Google'da tercih edilen kaynak olarak ekleme kismi").
 *
 * ⚠️ TEK KAYNAK. Hem React bilesenleri (YzOzetle, YaziSonu) hem
 * `scripts/prerender.mjs` bu dosyadan uretiyor. Ayrisirlarsa tarama botunun
 * gordugu baglanti ile okuyucunun tikladigi baglanti farkli olur.
 *
 * ⚠️ ISTEM KALIBI ShiftDelete.net'in canli sayfasindan alindi (29.10.2026):
 * "Yalnizca <site> sitesinin <adres> adresindeki icerigi referans alarak
 * <baslik> baslikli icerik icin ozet olustur." Baska bir sey eklenmiyor:
 * Ahmet 29.10 "en sona ... yaz demesi sacma, platformu kendisi tanitsa guzel
 * olur, yazdirmana gerek yok". Ilk surumdeki dikte edilen platform cumlesi
 * bu yuzden kaldirildi; yapay zeka kaynagi sayfadan kendisi okuyup anlatiyor.
 *
 * ⚠️ HICBIR VERI GITMIYOR. Bunlar duz baglanti; tiklanana kadar hicbir servise
 * istek yapilmiyor, okuyucunun kimligi de baglantiya eklenmiyor.
 */

export const SITE = 'https://veterito.com';
const SITE_ADI = 'Veterito';

export function yaziAdresi(slug: string): string {
  return `${SITE}/blog/${slug}`;
}

export function ozetIstemi(slug: string, baslik: string): string {
  return `Yalnızca ${SITE_ADI} sitesinin ${yaziAdresi(slug)} adresindeki içeriği referans alarak "${baslik}" başlıklı yazı için özet oluştur.`;
}

export type YzAnahtari = 'chatgpt' | 'gemini' | 'claude' | 'copilot' | 'perplexity' | 'grok';
/** `kopyala`: tiklayinca istem panoya da kopyalanir (bkz. Gemini notu). */
export type YzBaglantisi = { anahtar: YzAnahtari; ad: string; adres: string; kopyala?: boolean };

/*
 * Adres kaliplari (29.10.2026): Claude ve Perplexity ShiftDelete'in canli
 * kodundan; ChatGPT'nin eski `chat.openai.com/?q=` adresi `chatgpt.com`'a
 * yonleniyor, dogrudan yenisi kullaniliyor; Grok icin `grok.com/?q=` (x.com
 * uzerinden acilan surum X hesabi istiyor).
 *
 * ⚠️ 6 ARAC (Ahmet 29.10: "5-6 tane ai araci olsun en fazla kullanilan").
 * Copilot uygulamasi giris sayfasina atip istemi dusurdu (basliksiz Chrome'da
 * denendi); istemi tasiyan Bing Copilot aramasi kullaniliyor.
 *
 * ⚠️ GEMINI (Ahmet 29.10: "Google gemini de olmasi lazim"): `?q=` desteginin
 * resmi belgesi yok, kaynaklar celisiyor; oturumsuz basliksiz Chrome'da istem
 * kutuya gelmedi. Bu yuzden IKI YOL BIRDEN: baglanti istemi tasiyor (destek
 * varsa kutu dolu acilir) ve tiklayinca istem panoya da kopyalaniyor (yoksa
 * okur yapistirir). Menude "Istem panoya kopyalanir" notu bunu soyluyor.
 */
export function yzBaglantilari(slug: string, baslik: string): YzBaglantisi[] {
  const q = encodeURIComponent(ozetIstemi(slug, baslik));
  return [
    { anahtar: 'chatgpt', ad: 'ChatGPT', adres: `https://chatgpt.com/?q=${q}` },
    { anahtar: 'gemini', ad: 'Gemini', adres: `https://gemini.google.com/app?q=${q}`, kopyala: true },
    { anahtar: 'claude', ad: 'Claude', adres: `https://claude.ai/new?q=${q}` },
    { anahtar: 'copilot', ad: 'Copilot', adres: `https://www.bing.com/copilotsearch?q=${q}` },
    { anahtar: 'perplexity', ad: 'Perplexity', adres: `https://www.perplexity.ai/search/new?q=${q}` },
    { anahtar: 'grok', ad: 'Grok', adres: `https://grok.com/?q=${q}` },
  ];
}

export type PaylasimAnahtari = 'whatsapp' | 'x' | 'telegram' | 'facebook' | 'linkedin' | 'threads' | 'reddit' | 'eposta';
export type PaylasimBaglantisi = { anahtar: PaylasimAnahtari; ad: string; adres: string };

/*
 * Ahmet 29.10: "instagram gibi platformlar yok, alakali birkac platform daha".
 * INSTAGRAM BURADA DEGIL: web'den paylasim adresi yok; bilesen dokunmatik
 * cihazda cihazin paylasim menusunu aciyor (Instagram orada), masaustunde
 * baglantiyi kopyalayip Instagram'i aciyor. Threads `intent/post` Meta'nin
 * resmi bicimi; oturum kapaliysa once giris istiyor.
 */
export function paylasimBaglantilari(slug: string, baslik: string): PaylasimBaglantisi[] {
  const u = encodeURIComponent(yaziAdresi(slug));
  const b = encodeURIComponent(baslik);
  return [
    { anahtar: 'whatsapp', ad: 'WhatsApp', adres: `https://wa.me/?text=${b}%20${u}` },
    { anahtar: 'x', ad: 'X', adres: `https://x.com/intent/tweet?url=${u}&text=${b}` },
    { anahtar: 'telegram', ad: 'Telegram', adres: `https://t.me/share/url?url=${u}&text=${b}` },
    { anahtar: 'facebook', ad: 'Facebook', adres: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { anahtar: 'linkedin', ad: 'LinkedIn', adres: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { anahtar: 'threads', ad: 'Threads', adres: `https://www.threads.com/intent/post?url=${u}&text=${b}` },
    { anahtar: 'reddit', ad: 'Reddit', adres: `https://www.reddit.com/submit?url=${u}&title=${b}` },
    { anahtar: 'eposta', ad: 'E-posta', adres: `mailto:?subject=${b}&body=${u}` },
  ];
}

/** Instagram'in web paylasim adresi yok; masaustunde baglanti kopyalanip bu acilir. */
export const INSTAGRAM_ADRESI = 'https://www.instagram.com/';

/*
 * Google "tercih edilen kaynak" baglantisi. Bicim Google'in yayinci rehberindeki
 * dogrudan baglanti (`google.com/preferences/source?q=<site adresi>`); ShiftDelete
 * de ayni bicimi kullaniyor. Okuyucu tiklayinca siteyi Google'daki tercih
 * edilen kaynaklarina ekliyor; bizim tarafimizda bir sey tutulmuyor.
 */
export const GOOGLE_TERCIH_ADRESI = `https://www.google.com/preferences/source?q=${SITE}/`;
