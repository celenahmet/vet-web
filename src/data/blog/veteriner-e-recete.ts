import type { BlogYazi } from './types';

export const veterinerERecete: BlogYazi = {
  slug: 'veteriner-e-recete',
  baslik: 'Veteriner E-Reçete Sistemi Nedir?',
  ozet: 'Veteriner e-reçete, hekimin reçeteyi Bakanlık sistemi üzerinden elektronik düzenlemesidir. 2018\'de başladı; yönetmelik ve reçeteye tabi ürünler burada.',
  kapakAlt:
    'Muayene masasındaki kedinin yanında tablete reçete yazan veteriner hekim',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-15',
  bloklar: [
    { kind: 'paragraf', metin: '**Veteriner e-reçete sistemi, veteriner hekimin reçeteyi kâğıt yerine Tarım ve Orman Bakanlığı\'nın kurduğu sistem üzerinden elektronik ortamda düzenlemesidir.** Bakanlık, 1 Ocak 2018 itibarıyla tüm ülkede veteriner hekimlikte elektronik reçete uygulamasına geçildiğini duyurdu.' },
    { kind: 'paragraf', metin: 'Amaç, hayvanlara verilen ilaçların kayıt altına alınması. Bu yazıda sistemin ne olduğunu, mevzuatın reçete hakkında ne söylediğini ve hayvan sahibinin nelere dikkat etmesi gerektiğini topladık. Hangi ilacın verileceği ya da nasıl kullanılacağı bu yazının konusu değil; bunlar hayvanı muayene eden veteriner hekimin kararı.' },

    { kind: 'baslik', metin: 'E-reçete tam olarak nedir?' },
    { kind: 'paragraf', metin: 'Veteriner Tıbbi Ürünler Hakkında Yönetmelik reçeteyi, veteriner hekim tarafından yazılan, hekimin kimlik ve adres bilgilerini, diploma numarasını ve hayvana ait kimlik ve adres bilgilerini içeren, tarihli ve imzalı ya da elektronik ortamda düzenlenen belge olarak tanımlıyor. Yani e-reçete ayrı bir belge türü değil, aynı reçetenin elektronik ortamda düzenlenmiş hâli.' },
    { kind: 'yanilgi', baslik: '"E-reçete, reçetenin telefonla ya da internetten iletilmesi demektir"', metin: 'Yönetmelik, internet, faks, telefon, kurye ve benzeri yollarla gelen reçeteleri satış yerinde kabul etmiyor. Bu hükmün dışında kalan tek durum, veteriner hekimin elektronik ortamda yazıp güvenli elektronik imza ile imzaladığı e-reçete. Yani belirleyici olan mesajın iletilmesi değil, reçetenin güvenli elektronik imzayla düzenlenmiş olması.' },

    { kind: 'baslik', metin: 'Ne zaman ve neden başladı?' },
    { kind: 'paragraf', metin: 'Bakanlığın Ocak 2018 tarihli duyurusuna göre sistem 15 Temmuz 2017\'de veteriner hekimler için test uygulamasına açıldı, test süreci 31 Aralık 2017\'ye kadar sürdü ve 1 Ocak 2018 itibarıyla ülke genelinde elektronik reçeteye geçildi.' },
    { kind: 'paragraf', metin: 'Bakanlık amacı üç başlıkta anlatıyor: ilaçların izlenebilirliğini sağlamak, hayvansal gıdalardaki kalıntıyı önlemek ve ilaç tüketimini kontrol altına almak. Sistemin ardından 1 Mart 2018\'de Veteriner İlaç Takip Sistemi (İTS), 15 Ağustos 2019\'da da Aşı Takip Sistemi (ATS) uygulamaya alındı. E-reçete ile İTS birbiriyle entegre çalışıyor ve veteriner hekimlerin ile eczacıların ücretsiz kullanımına sunuldu.' },
    { kind: 'paragraf', metin: 'Ocak 2023 tarihli Bakanlık haberine göre ilk beş yılda farklı türlerden 182,4 milyon hayvan için 10,7 milyon e-reçete düzenlendi ve reçete edilen ilaç sayısı 226 milyonu aştı. Bu rakamlar güncel değil, yalnızca sistemin ölçeğini göstermek için veriliyor.' },

    { kind: 'paragraf', metin: 'Bakanlığın Mayıs 2022 tarihli eğitim toplantısı haberine göre e-reçete, İTS ve ATS ile hammadde ithalatı, veteriner tıbbi ürünlerin üretimi, satışı, depolanması, nakli, muhafazası ve uygulanması gibi tüm aşamalar izlenebilir hale getirildi. Aynı haberde, veteriner hekimlerin ilaç ve aşı stoklarını ekstra bir programa ihtiyaç duymadan takip edebildiği belirtiliyor. Ocak 2023 haberi ise aşı stoklarının ve aşılama kayıtlarının anlık izlenebilir hale geldiğini söylüyor.' },

    { kind: 'baslik', metin: 'Mevzuat reçetede neleri istiyor?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 48. maddesine göre veteriner hekim reçetesinde asgari olarak tarih, hekime ait kimlik bilgileri (adı soyadı, imzası, adresi, diploma numarası), hayvana ait kimlik bilgileri ve reçete edilen ürün hakkındaki bilgiler yer almalı. Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği de bu yerlerde fiziki ya da elektronik ortamda düzenlenen reçetenin kullanıldığını söylüyor.' },
    { kind: 'paragraf', metin: 'Aynı maddeye göre reçeteler en az üç nüsha düzenleniyor: bir nüsha düzenleyen hekimde kalıyor, diğer ikisi hayvan sahibine veriliyor. Elektronik ortamda düzenlemeye ve tutulacak kayıtlara ilişkin ayrıntıları ise Bakanlığın yayımladığı talimat ve kılavuz belirliyor. Muayenehane, poliklinik ve hastane arasındaki farkı [[muayenehane-poliklinik-hastane-farki|muayenehane, poliklinik ve hastane farkı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Hangi ürünler reçeteye tabi?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 12. maddesi ürünleri reçeteye tabi olanlar ve olmayanlar diye ikiye ayırıyor. Reçeteye tabi ürünler arasında kullanımı ya da tedariki resmî kısıtlamalara veya takibe bağlı olanlar, güvenlik aralığı dar olanlar, gıda değeri olan hayvanlarda kalıntıya neden olanlar ve etkin maddesi beş yıldan daha az süredir piyasada olanlar sayılıyor. Hangi ürünün hangi gruba girdiğini Bakanlık belirleyip internet sayfasında yayımlıyor.' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 49. maddesine göre reçeteye tabi ürünlerin reçetesiz satışı yapılamıyor. Dolayısıyla satış yerinde reçete istenmesi bir keyfîlik değil, mevzuatın kuralı. Bir ürünün reçete gerektirip gerektirmediğini veteriner hekime sormak gerekiyor.' },

    { kind: 'baslik', metin: 'Kim ne yapıyor?' },
    { kind: 'tablo', basliklar: ['Taraf', 'Görevi', 'Dayanak'], satirlar: [
      ['Veteriner hekim', 'Uyguladığı ya da tavsiye ettiği reçeteye tabi ürünler için reçete düzenler, kayıt tutar', '5996 sayılı Kanun, madde 14'],
      ['Satış yeri', 'Reçeteye tabi ürünü reçetesiz satamaz', 'Yönetmelik, madde 49'],
      ['Hayvan sahibi', 'Uygulanan ürünlerle ilgili fatura, reçete ve kayıtları en az beş yıl saklar', 'Yönetmelik, madde 48'],
      ['Bakanlık', 'Reçeteye tabilik durumunu belirler, internet sayfasında yayımlar', 'Yönetmelik, madde 48'],
    ]},

    { kind: 'baslik', metin: 'Hayvan sahibi için ne anlama geliyor?' },
    { kind: 'paragraf', metin: 'Yönetmelik hayvan sahiplerinin, hayvanlarına uygulanan tıbbi ürünlerle ilgili fatura, reçete ve kayıtları en az beş yıl saklamasını istiyor. Hüküm "hayvan sahipleri" diye genel yazılmış; bu yüzden reçete ve faturaları ayrı bir dosyada tutmak yerinde olur.' },
    { kind: 'uyari', metin: 'Reçetede hangi ürünün yazılacağı, hayvanın muayenesine dayanan veteriner hekim kararıdır. Reçeteyi başka bir hayvana ya da sonraki bir rahatsızlığa uygulamak, uygulamayı kendi başına değiştirmek veya ilacı bırakmak gibi konularda önce reçeteyi yazan veteriner hekime danışmak gerekiyor. İlaçtan sonra beklenmedik bir durum fark edilirse vakit kaybetmeden veteriner hekime başvurulması önerilir.' },
    { kind: 'paragraf', metin: 'Reçete yazma yetkisinin kimde olduğunu [[veteriner-hekim-tekniker-farki|veteriner hekim ve tekniker farkı]] yazımızda, doğru kliniği bulurken nelere bakılacağını [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazımızda bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Klinikler için e-reçete ne ifade ediyor?' },
    { kind: 'paragraf', metin: 'Klinik tarafında belirleyici olan, Bakanlığın yayımladığı "Veteriner Hekim E-Reçete ve İlaç Takip Sistemi (İTS) Talimatı ve Uygulama Kılavuzu". Elektronik düzenlemenin ve kayıtların ayrıntıları yönetmelikte değil bu belgede; belge Bakanlığın Veteriner Sağlık Ürünleri sayfasında yayımlanıyor. Kayıt ve süreçlerde güncel sürümün esas alınması gerekiyor.' },
  ],
  kontrolListesi: [
    'Reçeteyi veteriner hekim yazdı mı?',
    'Reçetede hayvanın bilgileri var mı?',
    'Ürün reçeteye tabi mi, soruldu mu?',
    'Reçete elektronik imzalı mı?',
    'Reçete ve fatura saklanıyor mu?',
  ],
  sss: [
    { soru: 'Veteriner e-reçete nedir?', cevap: 'Veteriner e-reçete, veteriner hekimin reçeteyi Tarım ve Orman Bakanlığı\'nın sistemi üzerinden elektronik ortamda düzenlemesidir. Bakanlık, 1 Ocak 2018 itibarıyla tüm ülkede elektronik reçeteye geçildiğini duyurdu. Amaç ilaçların izlenebilirliği, gıdalarda kalıntı riskinin azaltılması ve ilaç tüketiminin kontrol altına alınması.' },
    { soru: 'E-reçete ne zaman başladı?', cevap: 'E-reçete 1 Ocak 2018 itibarıyla tüm ülkede uygulamaya geçti. Sistem 15 Temmuz 2017\'de veteriner hekimler için test uygulamasına açılmış, test süreci 31 Aralık 2017\'ye kadar sürmüştü. İlaç Takip Sistemi (İTS) ise 1 Mart 2018\'de uygulamaya alındı.' },
    { soru: 'E-reçete ile İlaç Takip Sistemi aynı şey mi?', cevap: 'Hayır, iki ayrı uygulama ama birbiriyle entegre çalışıyor. E-reçete hekimin reçeteyi elektronik düzenlediği sistem; İTS ise veteriner ilaçlarının ve ham maddelerinin ithalatı, üretimi ve satış noktalarına dağıtımının izlenmesi için kurulan sistem. İkisi de veteriner hekimlerin ve eczacıların ücretsiz kullanımına sunuldu.' },
    { soru: 'Reçeteye tabi ürün reçetesiz alınabilir mi?', cevap: 'Hayır. Yönetmeliğe göre reçeteye tabi ürünlerin reçetesiz satışı yapılamıyor. Hangi ürünün reçeteye tabi olduğunu Bakanlık belirleyip internet sayfasında yayımlıyor. Bir ürünün reçete gerektirip gerektirmediği konusunda veteriner hekime ya da eczacıya sormak gerekiyor.' },
    { soru: 'Reçeteyi ne kadar süre saklamak gerekiyor?', cevap: 'Yönetmelik, hayvan sahiplerinin hayvanlarına uygulanan tıbbi ürünlerle ilgili fatura, reçete ve kayıtları en az beş yıl saklamasını istiyor. Satış yerlerinde de tüm reçetelerin muhafaza süresi, Bakanlık aksi belirtmedikçe en az beş yıl olarak belirlenmiş.' },
    { soru: 'Reçeteyi telefonla ya da internetten göndermek yeterli mi?', cevap: 'Yönetmelik, internet, faks, telefon veya kurye gibi yollarla gelen reçeteleri satış yerinde kabul etmiyor. İstisna, hekimin elektronik ortamda yazıp güvenli elektronik imza ile imzaladığı e-reçete. Hangi yolun kullanılacağını reçeteyi yazan veteriner hekimle konuşmak gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı, Gıda ve Kontrol Genel Müdürlüğü',
      baslik: 'Veteriner Hekimlikte E-Reçete Uygulamasına Geçildi',
      yil: 2018,
      adres: 'https://www.tarimorman.gov.tr/GKGM/Sayfalar/Detay.aspx?TermStoreId=368e785b-af33-487d-a98d-c11d5495130b&TermSetId=c9118bad-41d2-40a8-9352-d3c5d954b355&TermId=fb841593-eb13-4a7b-90e6-762d1dc46795&UrlSuffix=175%2FVeteriner-Hekimlikte-E-Recete-Uygulamasina-Gecildi',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'E-Reçete Sistemiyle Hayvanların Tedavi ve Aşılama Süreçleri Elektronik Ortamda İzleniyor',
      yil: 2023,
      adres: 'https://www.tarimorman.gov.tr/Haber/5663/E-Recete-Sistemiyle-Hayvanlarin-Tedavi-Ve-Asilama-Surecleri-Elektronik-Ortamda-Izleniyor',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Veteriner Tıbbi Ürünler Hakkında Yönetmelik (madde 12, 48, 49)',
      adres: 'https://www.mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=15651&mevzuatTur=KurumVeKurulusYonetmeligi&mevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği',
      adres: 'https://mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=15393&mevzuatTur=KurumVeKurulusYonetmeligi&mevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu (madde 14)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5996&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Veteriner Sağlık Ürünleri (Veteriner Hekim E-Reçete ve İlaç Takip Sistemi Talimatı ve Uygulama Kılavuzu)',
      adres: 'https://www.tarimorman.gov.tr/HAYGEM/Menu/67/Veteriner-Saglik-Urunleri',
    },
  ],
};
