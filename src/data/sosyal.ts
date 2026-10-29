/**
 * /social sayfasi: YouTube DISINDAKI platformlarin gonderileri (Ahmet 30.10: "her sosyal
 * medyada son 5 post ve populer postlarimiz"; karar: YouTube otomatik, digerleri liste).
 *
 * NEDEN ELLE: Instagram (Meta onayli isletme hesabi + jeton), TikTok (Display API + OAuth),
 * X (ucretli API) ve LinkedIn'in jetonsuz listeleme yolu yok. Gonderi baglantisi buraya
 * eklenir; kapak gorseli `public/sosyal/<platform>/` altina konur (kendi alan adimizdan
 * sunulur, okurun tarayicisi platforma istek atmaz, cerez yok).
 *
 * Bir platformda gonderi yoksa sayfa o platform icin PROFIL KARTI gosterir (hesaba giden
 * gercek baglanti; yer tutucu metin degil).
 *
 * Alanlar:
 *   adres   gonderinin kendi adresi (ornek: https://www.instagram.com/reel/XXXX/)
 *   baslik  kartta gorunen kisa metin
 *   tarih   YYYY-MM-DD (Yeni sekmesi buna gore)
 *   gorsel  /sosyal/<platform>/<dosya> (dikey icerikte 9:16, digerinde 16:9 kirpilir)
 *   izlenme biliniyorsa (Populer sekmesi buna gore; yoksa 0)
 *   dikey   Reels / TikTok gibi dikey icerik mi (kart oranini belirler)
 */
export type SosyalPlatform = 'instagram' | 'tiktok' | 'youtube' | 'x' | 'linkedin';

export type SosyalGonderi = {
  adres: string;
  baslik: string;
  tarih: string;
  gorsel: string;
  izlenme?: number;
  dikey?: boolean;
  /** Yalniz YouTube: 'shorts' rozeti. */
  tur?: 'shorts' | 'video';
};

export const ELLE_GONDERILER: Record<Exclude<SosyalPlatform, 'youtube'>, SosyalGonderi[]> = {
  instagram: [],
  tiktok: [],
  x: [],
  linkedin: [],
};
