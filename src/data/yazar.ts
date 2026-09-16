/**
 * YAZAR SAYFASI VERISI — "Veterito Editör" (16.09.2026)
 *
 * Ahmet: *"veterito editör kısmı tıklanabilir ve yazar sayfası olmalı, güven
 * artırma için"*. Her yazinin kunyesindeki "Veterito Editör" artik bir
 * baglanti; bu sayfa yazilarin KIM tarafindan ve HANGI kurallarla yazildigini
 * soyluyor. Arama motorlarinin E-E-A-T dedigi sey: deneyim, uzmanlik, yetki,
 * guven — yazar sayfasi bunun en somut sinyali.
 *
 * ⚠️ BURADAKI HER CUMLE DOGRULANABILIR OLMAK ZORUNDA. Sayfa guven vermek icin
 * var; dogrulanamayan bir iddia (ornegin "veteriner hekim tarafindan yazildi")
 * tam tersini yapar. Maddeler `scripts/kaynak-denetimi.mjs` ve
 * `docs/BLOG_HAZIRLAMA_BRIEFI.md` icindeki GERCEK kurallardan alindi; kural
 * degisirse bu metin de degismeli.
 *
 * ⚠️ TEK KAYNAK: React sayfasi (`pages/Yazar.tsx`) da prerender
 * (`scripts/prerender.mjs`) da metni BURADAN okuyor. Iki yerde ayri metin,
 * biri guncellenip otekinin unutulmasi demek.
 */
export const YAZAR = {
  yol: '/author',
  ad: 'Veterito Editör',
  rol: 'Veterito editoryal ekibi',
  eposta: 'info@veterito.com',
  ozet:
    'Veterito Blog’daki yazılar Veterito ekibi tarafından hazırlanır. Amaç, kedi ve köpek sahiplerinin en sık aradığı sağlık sorularına doğrulanabilir kaynaklarla cevap vermek ve “ne zaman veterinere gidilmeli” sorusunu netleştirmektir.',
  /** "Nasil yaziyoruz" — her madde yayin surecindeki gercek bir kurala karsilik geliyor. */
  ilkeler: [
    {
      baslik: 'Her sağlık yazısında en az iki kaynak',
      metin: 'Kedi, köpek, beslenme ve sağlık kategorisindeki her yazı en az iki doğrulanmış kaynağa dayanır. Kaynağı olmayan yazı yayına giremez; bu kural yayın öncesi otomatik denetimle uygulanır.',
    },
    {
      baslik: 'Yalnızca kurumsal ve akademik kaynak',
      metin: 'Üniversite veteriner fakülteleri, meslek kuruluşları ve hakemli dergiler kaynak olarak kullanılır. Üçüncü taraf blog ve haber siteleri kaynak kabul edilmez.',
    },
    {
      baslik: 'Hakemli çalışmalarda tam künye',
      metin: 'Bir bilimsel çalışmaya dayanılıyorsa yazarlar, dergi, yıl, sayı ve DOI verilir. Yarım künye doğrulanamaz; doğrulanamayan kaynak yazıya girmez.',
    },
    {
      baslik: 'Tıbbi uyarı her sağlık yazısında',
      metin: 'Yazılar bilgilendirme amaçlıdır; teşhis ve tedavi yerine geçmez. Hangi bulguda beklenmeyeceği, hangisinde aynı gün veterinere başvurulacağı her yazıda ayrıca belirtilir.',
    },
    {
      baslik: 'Sayı doğrulanmadan yazılmaz',
      metin: 'Ücret, maaş ve tarife gibi sayısal veriler doğrulanmış bir kaynak olmadan yayınlanmaz. Doğrulanamayan sayı yerine “neye göre değişir” anlatılır.',
    },
    {
      baslik: 'Hata bildirimi ve güncelleme',
      metin: 'Yazılar yayından sonra da gözden geçirilir. Bir hata ya da eskimiş bilgi görürseniz iletişim adresine yazmanız yeterli; düzeltme yazının içinde yapılır.',
    },
  ],
} as const;
