import type { BlogYazi } from '../data/blog';

/**
 * ILGILI YAZILAR (30.09.2026)
 *
 * ⚠️ NEDEN HALKA. Once her yazinin altinda listenin ilk uc yazisi (en yeniler)
 * duruyordu: konudan bagimsizdi ve en yeni 6 yazi 34 sayfadan baglanti alirken
 * eski yazilarin 15'i en cok 2 sayfadan baglanti aliyordu. Search Console
 * (21.09): 55 sayfanin 32'si "Kesfedildi, su anda dizine eklenmemis". Google, ic
 * baglantisi zayif sayfayi taramayi erteliyor.
 *
 * Kural: once ayni kategori, yazinin kategorideki yerinden SONRAKI yazilar (sona
 * gelince basa doner). Boylece her yazi kategorisindeki onceki yazilardan
 * baglanti aliyor, hicbir yazi sahipsiz kalmiyor. Kategori yetmezse (az yazili
 * kategori) tum yazilar halkasindan ayni yontemle tamamlaniyor.
 */
export function ilgiliYazilar(yazi: BlogYazi, liste: BlogYazi[], adet = 3): BlogYazi[] {
  const halka = (dizi: BlogYazi[]) => {
    const sira = dizi.findIndex((y) => y.slug === yazi.slug);
    return sira < 0 ? dizi : [...dizi.slice(sira + 1), ...dizi.slice(0, sira)];
  };
  // Sira girdiden bagimsiz: prerender ve React ayni yazilari ayni sirayla secsin.
  const sirali = [...liste].sort((a, b) => b.tarih.localeCompare(a.tarih) || a.slug.localeCompare(b.slug));
  const secim = halka(sirali.filter((y) => y.kategori === yazi.kategori)).slice(0, adet);
  for (const y of halka(sirali)) {
    if (secim.length >= adet) break;
    if (y.slug !== yazi.slug && !secim.includes(y)) secim.push(y);
  }
  return secim;
}
