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
  // Acik adres yerine sehir: veri sorumlusu kimligi hukuki metinlerde duruyor,
  // pazarlama alt bilgisinde ev adresi yayimlamanin bir faydasi yok.
  address: "İstanbul, Türkiye"
};
