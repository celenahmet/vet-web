import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI. Gorev tanimi 6343 sayili Kanun cercevesinde: yardimci
 * saglik personeli hekimin sorumlulugu altinda calisiyor. Kanunda yer almayan
 * bir yetki (tesihs, recete) bu yaziya YAZILMADI.
 */
export const veterinerTeknikeriNeIsYapar: BlogYazi = {
  slug: 'veteriner-teknikeri-ne-is-yapar',
  baslik: 'Veteriner Teknikeri Ne İş Yapar? Görevleri ve Çalışma Alanları',
  ozet: 'Kliniğin görünmeyen yükünü büyük ölçüde tekniker taşıyor. Ama yetki sınırı net: karar hekimin, uygulama ekibin.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Veteriner sağlık teknikeri, hayvan sağlığı alanında **yardımcı sağlık personeli** olarak çalışıyor. Meslek yüksekokullarının ilgili ön lisans programlarından mezun oluyor ve kliniğin günlük işleyişinde geniş bir alanda görev alıyor.' },
    { kind: 'paragraf', metin: 'İşin çerçevesini tek cümleyle çizmek mümkün: **karar hekimin, uygulama ve hazırlık ekibin.** Teşhis koymak, tedaviyi belirlemek ve reçete yazmak veteriner hekimin yetkisinde.' },

    { kind: 'baslik', metin: 'Klinikte günlük görevler' },
    { kind: 'liste', maddeler: [
      'Hasta kabulü, tartı, temel ölçümler ve kayıt',
      'Muayene ve işlem öncesi hazırlık, malzeme ve alan hazırlığı',
      'Hekimin gözetiminde uygulama ve hayvanın sabitlenmesi',
      'Örnek alma ve laboratuvara hazırlık işleri',
      'Yatışlı hastanın bakımı, beslenmesi ve takibinin kaydı',
      'Sterilizasyon, hijyen ve atık yönetimi',
      'Stok ve sarf malzeme takibi',
      'Sahiple iletişim: randevu, bilgilendirme, takip hatırlatmaları',
    ] },
    { kind: 'paragraf', metin: 'Bu listenin son iki maddesi genellikle küçümseniyor ama kliniğin işleyişini doğrudan etkiliyor. Stokun tükenmesi ya da hatırlatmanın yapılmaması, en iyi tedavi planını bile aksatıyor.' },

    { kind: 'yanilgi', baslik: '"Tekniker yardımcıdır, teknik iş yapmaz" yanılgısı', metin: 'Yardımcı sağlık personeli olmak, işin teknik olmadığı anlamına gelmiyor. Anestezi sırasında hastanın izlenmesi, laboratuvar örneğinin doğru alınıp doğru saklanması, yatışlı hastanın saatlik takibi teknik bilgi isteyen işler. Buradaki "yardımcı" kelimesi işin niteliğini değil, **sorumluluğun kimde olduğunu** anlatıyor.' },

    { kind: 'baslik', metin: 'Çalışma alanları klinikle sınırlı değil' },
    { kind: 'tablo', basliklar: ['Alan', 'Yapılan iş', 'Kimin sorumluluğunda'], satirlar: [
      ['Klinik ve hastane', 'Hasta hazırlık, bakım, takip', 'Veteriner hekim'],
      ['Laboratuvar', 'Örnek hazırlama, cihaz kullanımı', 'Sorumlu hekim'],
      ['Hayvancılık işletmesi', 'Sürü takibi, kayıt, bakım', 'İşletme ve hekim'],
      ['Kamu kurumları', 'Saha ve denetim destek işleri', 'Kurum'],
      ['Barınak', 'Bakım, besleme, takip', 'Sorumlu hekim'],
    ] },

    { kind: 'baslik', metin: 'Hekimle farkı nerede başlıyor' },
    { kind: 'paragraf', metin: 'Sınır, kararın alındığı yerde başlıyor. Ayrıntılı karşılaştırma için [[veteriner-hekim-tekniker-farki|veteriner hekim ile tekniker arasındaki fark]] yazısına bakabilirsiniz. Sahip olarak muhatabınız, teşhis ve tedavi konularında her zaman veteriner hekim.' },

    { kind: 'baslik', metin: 'Görev dağılımını yazılı tutmak' },
    { kind: 'paragraf', metin: 'Yazının sonunda kalan asıl iş şu: kim neyi yapıyor, yazılı mı. Veterito klinik panelinde ekip üyeleri ve yetkileri tanımlanıyor, stok ve hatırlatma gibi yinelenen işler kişiye bağlanabiliyor. Sözlü yürüyen bir dağılım, kişi değiştiğinde kayboluyor; panelde tanımlı olan kalıyor.' },

    { kind: 'uyari', metin: 'Bu yazı mesleğin genel çerçevesini anlatıyor, kariyer danışmanlığı ya da hukuki görüş değildir. Görev, yetki ve sorumluluklar mevzuatla belirleniyor; güncel düzenlemeler için Resmî Gazete yayımlarını esas alın.' },
  ],
  sss: [
    { soru: 'Veteriner teknikeri olmak için hangi eğitim gerekiyor?', cevap: 'Meslek yüksekokullarının veteriner sağlık alanındaki ön lisans programlarından mezun olmak gerekiyor.' },
    { soru: 'Tekniker kendi başına muayene yapabilir mi?', cevap: 'Hayır. Teşhis ve tedavi kararı veteriner hekimin yetkisinde; tekniker hekimin sorumluluğu altında görev alıyor.' },
    { soru: 'Klinik dışında nerede çalışabilir?', cevap: 'Hayvancılık işletmeleri, laboratuvarlar, barınaklar ve ilgili kamu kurumları başlıca alanlar.' },
    { soru: 'Tekniker ile teknisyen arasında fark var mı?', cevap: 'Evet, eğitim düzeyi farklı: teknisyen lise düzeyi meslek eğitiminden, tekniker ön lisans programından geliyor.' },
  ],
  kontrolListesi: [
    'Klinik sahibiyseniz görev dağılımını yazılı hale getirin; sınırı belirsiz iş, sorumluluğu belirsiz bırakıyor.',
    'Yetki gerektiren işlemlerin hekim tarafından yapıldığını kayıt altına alın.',
    'Ekip içi eğitim ve sertifikaları düzenli güncelleyin.',
    'Sahiple iletişim ve hatırlatma işlerinin kimde olduğunu netleştirin.',
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
