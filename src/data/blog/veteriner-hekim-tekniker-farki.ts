import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI kategorisi. Yetki ayrimi 6343 sayili Kanun'a dayaniyor:
 * veteriner hekimlik icrasi hekime ait, yardimci saglik personeli hekimin
 * sorumlulugunda calisiyor. Kanunda gecmeyen hicbir yetki iddiasi yazilmadi.
 */
export const veterinerHekimTeknikerFarki: BlogYazi = {
  slug: 'veteriner-hekim-tekniker-farki',
  baslik: 'Veteriner Hekim ile Veteriner Teknikeri Arasındaki Fark Nedir?',
  ozet: 'İkisi de kliniğin içinde, önlükleri benzer. Ama teşhis koyma, reçete yazma ve ameliyat yetkisi yalnız birinde.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Kliniğe giren çoğu kişi karşısındaki iki kişiyi ayırt edemiyor: ikisi de önlüklü, ikisi de hayvanla ilgileniyor. Oysa aradaki fark görgü değil, **kanunla çizilmiş bir yetki sınırı.**' },
    { kind: 'paragraf', metin: 'Fark tek cümleyle şu: veteriner hekimlik mesleğini icra etme yetkisi veteriner hekime ait. Tekniker ve teknisyen, yardımcı sağlık personeli olarak **hekimin sorumluluğu altında** çalışıyor.' },

    { kind: 'baslik', metin: 'Eğitim yolu farklı' },
    { kind: 'tablo', basliklar: ['', 'Veteriner hekim', 'Veteriner sağlık teknikeri'], satirlar: [
      ['Eğitim', 'Veteriner fakültesi, lisans', 'Meslek yüksekokulu, ön lisans'], 
      ['Unvan', 'Hekim', 'Yardımcı sağlık personeli'],
      ['Bağlı olduğu meslek örgütü', 'Veteriner hekimleri odası', 'Oda üyeliği söz konusu değil'],
      ['Muayenehane açma', 'Açabilir', 'Açamaz'],
    ] },
    { kind: 'paragraf', metin: 'Veteriner fakültesi eğitimi beş yıl sürüyor ve mezun "veteriner hekim" unvanını alıyor. Meslek yüksekokullarının veteriner sağlık programları ise iki yıllık ön lisans; mezunu tekniker unvanıyla çalışıyor.' },

    { kind: 'baslik', metin: 'Yetki sınırı: kim neyi yapabilir' },
    { kind: 'paragraf', metin: '1954 tarihli 6343 sayılı Kanun, veteriner hekimliği mesleğinin nasıl icra edileceğini düzenliyor. Kanunun çerçevesinde **teşhis koymak, tedaviyi belirlemek, reçete yazmak ve cerrahi girişimde bulunmak** veteriner hekimin yetkisinde. Hayvan sağlığı alanında çalışan yardımcı personel ise bu işleri kendi başına yapamıyor; hekimin gözetimi ve sorumluluğu altında görev alıyor.' },
    { kind: 'liste', maddeler: [
      'Teşhis ve tedavi kararı: veteriner hekim',
      'Reçete: veteriner hekim',
      'Cerrahi girişim ve anestezi yönetimi: veteriner hekim',
      'Hazırlık, bakım, örnek alma gibi işler: hekim gözetiminde yardımcı personel',
      'Kayıt, takip, sahiple iletişim: birlikte yürüyen işler',
    ] },

    { kind: 'yanilgi', baslik: '"Tekniker de iğne yapıyor, aynı iş" yanılgısı', metin: 'Bir işlemi elle uygulamak ile o işleme karar vermek aynı şey değil. Hangi ilacın, hangi dozda, hangi hayvana verileceğine karar vermek hekimlik icrasıdır ve sorumluluğu hekimdedir. Uygulamanın kim tarafından yapıldığı, kararın kime ait olduğunu değiştirmiyor. Sahibi ilgilendiren kısım da bu: sorunun muhatabı hekimdir.' },

    { kind: 'baslik', metin: 'Sahip olarak neden önemsemelisiniz' },
    { kind: 'paragraf', metin: 'Kliniğe gittiğinizde hayvanınızla ilgilenen kişinin unvanını bilmek hakkınız. Bu bir güvensizlik değil, sorumluluğun kimde olduğunu bilmek anlamına geliyor. Teşhis, tedavi planı ve reçete konuşulacaksa muhatabınız veteriner hekim.' },
    { kind: 'paragraf', metin: 'Kliniğin türü de bu tabloya giriyor. Muayenehane, poliklinik ve hayvan hastanesinin hangi kadroyla çalıştığını [[muayenehane-poliklinik-hastane-farki|kliniklerin farkı]] yazısında ele aldık.' },

    { kind: 'uyari', metin: 'Bu yazı mevzuatın genel çerçevesini anlatıyor, hukuki görüş değildir. Güncel düzenlemeler için Resmî Gazete ve Tarım ve Orman Bakanlığı yayımlarını esas alın.' },
  ],
  sss: [
    { soru: 'Veteriner teknikeri muayenehane açabilir mi?', cevap: 'Hayır. Veteriner hekimliği mesleğini icra etme ve muayenehane açma yetkisi veteriner hekime ait.' },
    { soru: 'Tekniker reçete yazabilir mi?', cevap: 'Hayır. Reçete, teşhis ve tedavi kararının bir parçası ve hekimlik icrasına giriyor.' },
    { soru: 'Teknisyen ile tekniker aynı şey mi?', cevap: 'Eğitim düzeyleri farklı: teknisyen lise düzeyi meslek eğitiminden, tekniker ön lisans programından geliyor. İkisi de yardımcı sağlık personeli.' },
    { soru: 'Kliniğe girince kimin hekim olduğunu nasıl anlarım?', cevap: 'Sorabilirsiniz. Ayrıca hekimin diploma ve oda kayıt belgeleri klinikte bulunuyor.' },
  ],
  kontrolListesi: [
    'Teşhis ve tedavi konuşulacaksa veteriner hekimle görüşün.',
    'Reçeteyi kimin yazdığına bakın.',
    'Kliniğin ruhsat ve hekim bilgilerinin görünür olduğundan emin olun.',
    'Uygulanan işlemi kimin, kimin sorumluluğunda yaptığını sormaktan çekinmeyin.',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarzına ve Göreceği İşlere Dair Kanun',
      yil: 1954,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6343&MevzuatTur=1&MevzuatTertip=3',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği',
      yil: 2011,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=15393&MevzuatTur=7&MevzuatTertip=5',
    },
  ],
};
