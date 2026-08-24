/**
 * Marka tek kaynagi.
 *
 * ⚠️ 22.08.2026'da uc yer tutucu duzeltildi ve hepsi CANLI SITEDE gorunuyordu:
 *   name    "PatiCare" idi; uygulama ve alan adi Veterito. Magaza listelemesi,
 *           uygulama ici ad ve pazarlama sitesi ayni markayi gostermek zorunda
 *           (App Store 2.3.1) ve inceleyici siteye bakiyor.
 *   website "veterito.app" idi; boyle bir alan adi yok, dogrusu veterito.com.
 *   address "123 Vet Street, Animal City" idi ve alt bilgide oldugu gibi yaziyordu.
 */
export const brandConfig = {
  name: "Veterito",
  tagline: "Hayvanseverlerin sosyal platformu",
  // ⚠️ Magaza adresleri uygulama yayina alininca gercek listeleme adresiyle
  // degistirilecek. Su an magaza ana sayfasina gidiyor.
  appStoreUrl: "https://apps.apple.com/",
  playStoreUrl: "https://play.google.com/store/apps/",
  social: {
    website: "https://veterito.com",
    community: "https://veterito.com/legal",
    contactEmail: "info@veterito.com"
  },

  /**
   * SOSYAL HESAPLAR — tek kaynak (Ahmet, 24.08.2026).
   *
   * ⚠️ Alt bilgi VE `index.html` icindeki `Organization.sameAs` semasi buradan
   * beslenmeli. Iki yerde ayri liste tutmak, birinin guncellenip otekinin
   * unutulmasi demek; arama motoru o zaman eksik listeyi okur.
   *
   * ⚠️ Adresler dogrulandi (24.08.2026): Instagram, X ve LinkedIn HTTP 200
   * donuyor. TikTok bot duvarina takiliyor (200 ama 1.4 KB), Facebook 400
   * donuyor — ikisi de platformun bota kapali olmasindan, "yok" demek degil
   * ama BURADAN dogrulanamadi.
   */
  sosyal: [
    { ad: 'Instagram', kullanici: 'veteritoapp', adres: 'https://www.instagram.com/veteritoapp/', altBilgide: true },
    { ad: 'X', kullanici: 'veterito', adres: 'https://x.com/veterito', altBilgide: true },
    { ad: 'TikTok', kullanici: 'veterito', adres: 'https://www.tiktok.com/@veterito', altBilgide: true },
    { ad: 'LinkedIn', kullanici: 'veterito', adres: 'https://www.linkedin.com/company/veterito/', altBilgide: true },
    /*
     * ⚠️ FACEBOOK ALT BILGIDE GOSTERILMIYOR — hesap DURUYOR, yalniz baglantisi
     * verilmiyor (Ahmet karari bana birakti, 24.08.2026).
     *
     * Gerekce "Facebook eski" degil: bos bir sayfaya baglanti vermek. Ziyaretci
     * ikona basip hic gonderisi olmayan bir sayfa gorurse, markanin terk edilmis
     * oldugu izlenimi kaliyor; bu, hic baglanti vermemekten kotu. Hesabin kendisi
     * Meta/Instagram isletme baglantisi icin zaten gerekli.
     *
     * Sayfa duzenli icerik almaya baslayinca tek kelime yeter: `altBilgide: true`.
     * ⚠️ Facebook LISTEDE duruyor cunku `sameAs` semasina girmesi ayri bir karar;
     * orada da su an disarida, adresi buradan dogrulanamadigi icin.
     */
    { ad: 'Facebook', kullanici: 'veteritoapp', adres: 'https://www.facebook.com/veteritoapp', altBilgide: false },
  ],
  // Acik adres yerine sehir: veri sorumlusu kimligi hukuki metinlerde duruyor,
  // pazarlama alt bilgisinde ev adresi yayimlamanin bir faydasi yok.
  address: "Ankara, Türkiye"
};
