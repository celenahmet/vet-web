import type { BlogYazi } from './types';

/**
 * PET SAHIPLERI kategorisi.
 *
 * ⚠️ RAKAMLAR ODA ALT SINIR TARIFESINDEN, UYDURULMADI. Istanbul Veteriner
 * Hekimler Odasi 2026 Ev Hayvanlari Alt Sinir Ucret Tarifesi esas alindi;
 * tarife Istanbul ve Yalova icin gecerli, diger illerde kendi odalarinin
 * tarifesi uygulaniyor.
 *
 * ⚠️ HER SAYININ YANINDA TARIH VE SINIR VAR. Tarife alt sinirdir, klinik
 * ustunde fiyat uygulayabilir; anestezi, ilac ve sarf ayrica ekleniyor. Bu
 * kayitlar olmadan verilen rakam okuyucuyu yaniltirdi.
 */
export const veterinerUcretleri: BlogYazi = {
  slug: 'veteriner-ucretleri',
  baslik: '2026 Veteriner Ücretleri: Muayene, Aşı ve Kısırlaştırma',
  ozet: 'Muayene, aşı ve kısırlaştırma için 2026 alt sınır ücretleri, üstüne nelerin eklendiği ve faturayı okumanın yolu.',
  kategori: 'Pet Sahipleri',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Kliniğe gitmeden önce en çok sorulan soru bu: ne kadar tutar? Aşağıda **Ağustos 2026 sonu itibarıyla** yaygın işlemlerin ücret aralıkları var. Alt uçlar veteriner hekimleri odalarının alt sınır tarifelerinden, üst uçlar kliniklerde fiilen görülen tutarlardan.' },
    { kind: 'paragraf', metin: 'Neden tek bir rakam değil de aralık: tarife **alt sınır** belirliyor, üst sınır koymuyor. Aynı işlem için semte, kliniğin donanımına, hayvanın kilosuna ve kullanılan ilaca göre ödediğiniz tutar belirgin şekilde değişiyor.' },

    { kind: 'baslik', metin: 'Muayene' },
    { kind: 'tablo', basliklar: ['İşlem', 'Yaygın aralık (2026)'], satirlar: [
      ['Genel muayene (kedi / köpek)', '1.750 - 2.500 TL'],
      ['Acil muayene', '2.350 - 3.500 TL'],
      ['Kontrol muayenesi', '850 - 1.500 TL'],
    ] },
    { kind: 'paragraf', metin: 'Muayene ücreti sabit bir fiyat değil, ortalamadır. Aynı şehirde bile semtten semte, klinikten kliniğe değişir. Bir işlem sonrası kontrolün ücrete dâhil olup olmadığını önceden sormak faturadaki sürprizi ortadan kaldırıyor.' },

    { kind: 'baslik', metin: 'Aşılar' },
    { kind: 'tablo', basliklar: ['Aşı', 'Yaygın aralık (2026)', 'Not'], satirlar: [
      ['Kuduz aşısı', '1.450 - 2.000 TL', 'Sahipli hayvanda yasal zorunluluk'],
      ['Karma aşı', '1.750 - 2.500 TL', 'Kedi ve köpekte içerik farklı'],
      ['Lösemi aşısı (kedi)', '1.750 - 2.500 TL', 'Test sonrası uygulanır'],
      ['FIV aşısı (kedi)', '2.100 - 3.000 TL', 'Her klinikte bulunmayabilir'],
    ] },
    { kind: 'paragraf', metin: 'Karma ve lösemi aşısı aynı seansta yapıldığında toplam 2.000 TL ve üzerine çıkabiliyor. Aşı takvimi için [[kedi-asi-takvimi|kedi aşı takvimi]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'İç ve dış parazit uygulamaları' },
    { kind: 'tablo', basliklar: ['Uygulama', 'Yaygın aralık (2026)', 'Neye göre değişir'], satirlar: [
      ['İç parazit (tablet / enjeksiyon)', '350 - 1.250 TL', 'Kilo, ilaç markası, form'],
      ['Dış parazit (damla / tasma / tablet)', '150 - 1.250 TL', 'Ürünün koruma süresi ve kapsamı'],
      ['Kombine (iç + dış) ürünler', '750 - 1.500 TL', 'Tek üründe geniş kapsam'],
    ] },
    { kind: 'paragraf', metin: 'Buradaki aralık özellikle geniş, çünkü ödenen tutarın büyük kısmı **ilacın kendisi.** Bir aylık koruma veren damla ile üç ay koruyan geniş kapsamlı bir ürün arasında birkaç kat fark olabiliyor. Uygulama ücreti ile ilaç bedelini ayrı sormak karşılaştırmayı kolaylaştırıyor. Parazit türleri için [[kedilerde-ic-ve-dis-parazit|iç ve dış parazit]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Kısırlaştırma' },
    { kind: 'tablo', basliklar: ['İşlem', 'Yaygın aralık (2026)', 'Neye göre değişir'], satirlar: [
      ['Erkek kedi', '1.500 - 3.000 TL', 'En kısa süren işlem'],
      ['Dişi kedi', '2.500 - 8.000 TL', 'Karın boşluğuna giriliyor'],
      ['Erkek köpek', '2.500 - 7.000 TL', 'Kilo belirleyici'],
      ['Dişi köpek', '3.000 - 9.500 TL', 'Kilo ve işlem süresi'],
    ] },
    { kind: 'paragraf', metin: 'Dişi hayvanlarda ücretin yüksek olması keyfî değil: işlem karın boşluğuna giriliyor, anestezi süresi uzun ve sonrasında takip gerekiyor. Köpeklerde aralığın bu kadar açılmasının sebebi kilo: 5 kiloluk bir köpekle 40 kiloluk bir köpek aynı miktarda ilaç ve malzeme kullanmıyor.' },
    { kind: 'paragraf', metin: 'Birçok belediye kısırlaştırma için ücretsiz ya da destekli hizmet veriyor; veteriner fakültelerinin hayvan hastaneleri de genellikle daha uygun. Bütçe sorunsa önce bu iki kapıyı denemeye değer.' },

    { kind: 'yanilgi', baslik: '"Tarifede yazan tutarı öderim" yanılgısı', metin: 'Tarife alt sınır, yani altına inilemeyecek ücret; üst sınır koymuyor. Ayrıca operasyonlarda anestezi, kullanılan ilaç, sarf malzeme ve gerekiyorsa yatış bu tutarların ÜSTÜNE ekleniyor. Yani kısırlaştırma için verilen rakam işlemin kendisi; ödeyeceğiniz toplam hayvanın kilosuna ve işlemin seyrine göre değişiyor. Doğru soru "tarifede ne yazıyor" değil, "bu işlemin toplamı ne olur".' },

    { kind: 'baslik', metin: 'Ücreti değiştiren beş etken' },
    { kind: 'liste', maddeler: [
      'Şehir ve semt: aynı ilde bile fark belirgin.',
      'Kliniğin donanımı: kendi laboratuvarı ve görüntülemesi olan klinik farklı fiyatlıyor.',
      'Hayvanın kilosu: ilaç ve sarf miktarını doğrudan belirliyor.',
      'İlaç ve malzeme seçimi: aynı işlemde marka farkı tutarı değiştiriyor.',
      'Ödeme şekli: peşin ödemede indirim uygulayan klinikler var; taksit imkânı da kliniğe göre değişiyor.',
    ] },
    { kind: 'paragraf', metin: 'Bu etkenler yüzünden "şu işlem şu kadardır" demek mümkün değil. Buradaki aralıklar karşılaştırma yapmanız için; kesin tutarı ancak gideceğiniz klinik söyleyebilir.' },

    { kind: 'uyari', metin: 'Rakamlar Ağustos 2026 sonu itibarıyla geçerli aralıklardır ve bilgilendirme amaçlıdır. Tarifeler il odalarına göre değişir, yıl içinde güncellenir ve **2026 sonuna doğru bu aralıkların yukarı genişlemesi beklenebilir.** Klinikler alt sınırın üzerinde ücret uygulayabilir; anestezi, ilaç ve sarf malzeme ayrıca eklenir. Kesin tutar için gideceğiniz kliniğe sorun.' },
  ],
  sss: [
    { soru: 'Neden tek rakam değil de aralık veriyorsunuz?', cevap: 'Oda tarifeleri alt sınır belirliyor, üst sınır koymuyor. Aynı işlem semte, kliniğin donanımına, hayvanın kilosuna ve kullanılan ilaca göre değişiyor. Tek rakam vermek yanıltıcı olurdu.' },
    { soru: 'Bu fiyatlar tüm Türkiye’de geçerli mi?', cevap: 'Hayır. Alt sınırlar il odalarının tarifelerinden geliyor ve iller arasında değişiyor. Kendi ilinizin oda tarifesine bakmanız gerekir.' },
    { soru: 'Fiyatlar yıl içinde artar mı?', cevap: 'Evet. Tarifeler dönem dönem güncelleniyor ve 2026 sonuna doğru bu aralıkların yukarı genişlemesi beklenebilir. Buradaki değerler Ağustos 2026 sonu durumunu yansıtıyor.' },
    { soru: 'Dişi hayvanlarda kısırlaştırma neden daha pahalı?', cevap: 'İşlem karın boşluğuna giriliyor, anestezi süresi uzun ve sonrasında takip gerekiyor. Köpeklerde kilo da ilaç ve malzeme miktarını doğrudan artırıyor.' },
    { soru: 'Parazit uygulamasında neden bu kadar fark var?', cevap: 'Ödenen tutarın büyük kısmı ilacın kendisi. Bir aylık koruma veren damla ile üç ay koruyan geniş kapsamlı ürün arasında birkaç kat fark olabiliyor. Uygulama ücretiyle ilaç bedelini ayrı sorun.' },
    { soru: 'İndirim ya da taksit imkânı var mı?', cevap: 'Kliniğe göre değişiyor. Peşin ödemede indirim uygulayan klinikler var; taksit imkânı da kliniğin kendi kararı. Önceden sormakta fayda var.' },
    { soru: 'Ücretsiz kısırlaştırma imkânı var mı?', cevap: 'Birçok belediye ücretsiz ya da destekli hizmet veriyor; veteriner fakültesi hayvan hastaneleri de genellikle daha uygun oluyor.' },
  ],
  kontrolListesi: [
    'İşlem öncesi toplam tutarı kalem kalem sorun: muayene, anestezi, ilaç, sarf, yatış.',
    'Parazit uygulamasında ilaç bedelini ayrı sorun; aralığın sebebi orası.',
    'Kısırlaştırmada hayvanınızın kilosunu söyleyip tahmini toplam isteyin.',
    'Kontrol muayenesinin dâhil olup olmadığını netleştirin.',
    'Ödeme şeklinde indirim ya da taksit olup olmadığını sorun.',
    'Bütçe sorunsa belediye ve veteriner fakültesi hastanesi seçeneklerine bakın.',
    'Kendi ilinizin oda tarifesine bakın; iller arasında fark var.',
  ],
  kaynaklar: [
    {
      kurum: 'İstanbul Veteriner Hekimler Odası',
      baslik: '2026 Yılı Ev Hayvanları Alt Sınır Ücret Tarifesi (İstanbul ve Yalova)',
      yil: 2026,
      adres: 'https://ivho.org.tr/',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarzına ve Göreceği İşlere Dair Kanun',
      yil: 1954,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6343&MevzuatTur=1&MevzuatTertip=3',
    },
  ],
};
