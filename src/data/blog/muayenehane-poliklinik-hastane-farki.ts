import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI. Tanimlar 2011 tarihli Veteriner Hekim Muayenehane ve
 * Poliklinik Yonetmeligi'ne dayaniyor. Yonetmelikte gecmeyen bir ayrim
 * (ornegin "hastane su kadar hekim calistirir") YAZILMADI.
 */
export const muayenehanePoliklinikHastaneFarki: BlogYazi = {
  slug: 'muayenehane-poliklinik-hastane-farki',
  baslik: 'Veteriner Muayenehanesi, Poliklinik ve Hayvan Hastanesi Arasındaki Fark Nedir?',
  ozet: 'Tabeladaki isim tesadüf değil. Her biri farklı bir ruhsata, farklı bir kadroya ve farklı bir hizmet kapsamına karşılık geliyor.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Çoğu kişi hepsine "veteriner" diyor. Oysa muayenehane, poliklinik ve hayvan hastanesi **ayrı ruhsatlarla açılan, kapsamları farklı** kuruluşlar. Aradaki farkı bilmek, acil bir durumda nereye gideceğinizi bilmek demek.' },

    { kind: 'baslik', metin: 'Muayenehane: tek hekimin çalışma yeri' },
    { kind: 'paragraf', metin: 'Muayenehane, bir veteriner hekimin mesleğini yürüttüğü yer. Ayakta muayene, aşı, temel tedavi ve takip burada yapılıyor. Yatışlı hasta ve geniş cerrahi kapasitesi beklenmez; ihtiyaç doğduğunda hasta daha donanımlı bir kuruluşa yönlendiriliyor.' },

    { kind: 'baslik', metin: 'Poliklinik: birden fazla hekimin birlikte çalıştığı yapı' },
    { kind: 'paragraf', metin: 'Poliklinik, birden çok veteriner hekimin bir araya gelerek kurduğu kuruluş. 2011 tarihli Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği, bu iki kuruluşun taşıması gereken **asgari teknik, hijyenik ve sağlık şartlarını** ve açılış, çalışma, denetim usullerini belirliyor.' },
    { kind: 'paragraf', metin: 'Pratikte fark, hekim sayısıyla birlikte gelen kapasite: birden fazla hekim, daha geniş çalışma saatleri ve daha çeşitli işlem anlamına gelebiliyor. Ama "poliklinik" adı tek başına belirli bir cihazın varlığını garanti etmiyor.' },

    { kind: 'baslik', metin: 'Hayvan hastanesi: yatışlı bakım ve ileri donanım' },
    { kind: 'paragraf', metin: 'Hayvan hastanesi, yatışlı hasta bakımı, ileri görüntüleme, laboratuvar ve yoğun bakım gibi imkânların bir arada bulunduğu kuruluş. Üniversitelerin veteriner fakültelerine bağlı hastaneler ve büyük özel hastaneler bu grupta.' },

    { kind: 'tablo', basliklar: ['', 'Muayenehane', 'Poliklinik', 'Hayvan hastanesi'], satirlar: [
      ['Hekim sayısı', 'Tek hekim', 'Birden fazla hekim', 'Çok sayıda hekim ve ekip'],
      ['Yatışlı bakım', 'Beklenmez', 'Sınırlı olabilir', 'Var'],
      ['İleri görüntüleme', 'Genellikle yok', 'Değişken', 'Genellikle var'],
      ['Gece acil', 'Değişken', 'Değişken', 'Daha sık'],
      ['Yönlendirme rolü', 'Üst kuruluşa yönlendirir', 'Duruma göre', 'Yönlendirme alır'],
    ] },

    { kind: 'yanilgi', baslik: '"Hastane her zaman daha iyidir" yanılgısı', metin: 'Daha büyük kuruluş her durumda daha doğru adres değil. Rutin aşı, kontrol ve bilinen bir sorunun takibi için hayvanınızı tanıyan bir muayenehane çoğu zaman daha iyi hizmet veriyor: geçmişi biliyor, aynı hekim görüyor. Hastanenin üstünlüğü acil, yatış gerektiren ve ileri tetkik isteyen durumlarda ortaya çıkıyor. Doğru soru "hangisi daha büyük" değil, "bu durum için hangisi gerekli".' },

    { kind: 'baslik', metin: 'Nereye gitmeli' },
    { kind: 'liste', maddeler: [
      'Rutin aşı, kontrol, bilinen sorunun takibi: muayenehane',
      'Farklı uzmanlık gerektiren, planlı işlemler: poliklinik',
      'Trafik kazası, zehirlenme, doğum güçlüğü, solunum sıkıntısı: hastane ya da acil kliniği',
      'Yatış gerektiren tedavi: hayvan hastanesi',
    ] },
    { kind: 'paragraf', metin: 'Zehirlenme gibi acil durumlarda ne yapılacağını [[kopeklerde-zehirlenme|zehirlenme]] yazısında ayrıca anlattık. Hangi kliniği seçeceğinize dair ölçütler için [[veteriner-klinigi-nasil-secilir|klinik nasıl seçilir]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Kliniğinizi doğru anlatmak' },
    { kind: 'paragraf', metin: 'Sahiplerin kafası karışıyorsa sorumluluğun bir kısmı bizde: çoğu klinik ne yaptığını dışarıya anlatmıyor. Veterito klinik panelinde kuruluş türü, hizmetler, cihaz envanteri ve çalışma saatleri düzenlenebiliyor, klinik profili aramalarda bu bilgilerle görünüyor. Gece hizmeti veriyorsanız bunu profilde yazmak, acil anında aranan klinik olmayı belirliyor.' },

    { kind: 'uyari', metin: 'Bu yazı mevzuatın genel çerçevesini özetliyor. Bir kuruluşun hangi ruhsatla çalıştığı ve hangi işlemleri yapabildiği, o kuruluşun ruhsatına ve kadrosuna bağlıdır; bilgi için doğrudan kuruluşa sorun.' },
  ],
  sss: [
    { soru: 'Muayenehanede ameliyat yapılabilir mi?', cevap: 'Yapılabilecek işlemler kuruluşun ruhsatına ve donanımına bağlı. Küçük girişimler yapılabiliyor; yatış ve ileri donanım gerektiren işlemler için üst kuruluşa yönlendirme yapılıyor.' },
    { soru: 'Poliklinik hastane demek mi?', cevap: 'Hayır. Poliklinik birden fazla hekimin birlikte çalıştığı kuruluş; hastane yatışlı bakım ve ileri donanımı olan yapı.' },
    { soru: 'Gece acil için nereye gitmeliyim?', cevap: 'Acil durumlarda gece hizmeti veren klinik ya da hayvan hastanesine gidin. Bu bilgiyi acil doğmadan önce öğrenip kaydetmek zaman kazandırıyor.' },
    { soru: 'Kuruluşun ruhsatlı olduğunu nasıl anlarım?', cevap: 'Ruhsat ve sorumlu hekim bilgileri kuruluşta görünür şekilde bulunuyor; sormaktan çekinmeyin.' },
  ],
  kontrolListesi: [
    'Evinize en yakın gece acil veren kliniği şimdiden öğrenin ve kaydedin.',
    'Rutin takip için sabit bir hekim seçin; geçmişi bilen hekim daha hızlı karar veriyor.',
    'Kuruluşun ruhsat ve sorumlu hekim bilgisinin görünür olduğundan emin olun.',
    'Yatış gerektiren bir işlem konuşuluyorsa nerede yapılacağını önceden netleştirin.',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği',
      yil: 2011,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=15393&MevzuatTur=7&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarzına ve Göreceği İşlere Dair Kanun',
      yil: 1954,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6343&MevzuatTur=1&MevzuatTertip=3',
    },
  ],
};
