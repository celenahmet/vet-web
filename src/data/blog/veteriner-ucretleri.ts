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
    { kind: 'paragraf', metin: 'Kliniğe gitmeden önce en çok sorulan soru bu: ne kadar tutar? Aşağıda **Ağustos 2026 itibarıyla** geçerli alt sınır ücretleri var. Rakamlar İstanbul Veteriner Hekimler Odası’nın 2026 Ev Hayvanları Alt Sınır Ücret Tarifesi’nden; tarife İstanbul ve Yalova için geçerli, diğer illerde kendi odalarının tarifesi uygulanıyor.' },

    { kind: 'baslik', metin: 'Muayene ücretleri' },
    { kind: 'tablo', basliklar: ['İşlem', 'Alt sınır (2026)'], satirlar: [
      ['Genel muayene (kedi / köpek)', '1.750 TL'],
      ['Acil muayene', '2.350 TL'],
      ['Kontrol muayenesi', '850 TL'],
    ] },
    { kind: 'paragraf', metin: 'Kontrol muayenesi, aynı sorun için yapılan ikinci görüşme. Bir işlem sonrası kontrolün ücrete dâhil olup olmadığını **önceden sormak** faturadaki sürprizi ortadan kaldırıyor.' },

    { kind: 'baslik', metin: 'Aşı ücretleri' },
    { kind: 'tablo', basliklar: ['Aşı', 'Alt sınır (2026)'], satirlar: [
      ['Kuduz aşısı', '1.450 TL'],
      ['Karma aşı', '1.750 TL'],
      ['Lösemi aşısı (kedi)', '1.750 TL'],
      ['FIV aşısı (kedi)', '2.100 TL'],
    ] },
    { kind: 'paragraf', metin: 'Kuduz aşısı sahipli kedi, köpek ve gelinciklerde yasal zorunluluk. Aşıların hangi yaşta ve hangi aralıkla yapıldığı için [[kedi-asi-takvimi|kedi aşı takvimi]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Kısırlaştırma ücretleri' },
    { kind: 'tablo', basliklar: ['İşlem', 'Alt sınır (2026)'], satirlar: [
      ['Erkek kedi kısırlaştırma', '1.500 TL'],
      ['Dişi köpek kısırlaştırma', '3.000 - 4.500 TL'],
    ] },
    { kind: 'paragraf', metin: 'Dişi hayvanlarda ücretin daha yüksek olması keyfî değil: işlem karın boşluğuna giriliyor, anestezi süresi uzun ve sonrasında takip gerekiyor. Ağırlık arttıkça ilaç ve malzeme miktarı da artıyor, bu yüzden köpeklerde aralık geniş.' },
    { kind: 'paragraf', metin: 'Birçok belediye kısırlaştırma için ücretsiz ya da destekli hizmet veriyor; veteriner fakültelerinin hayvan hastaneleri de genellikle daha uygun. Bütçe sorunsa önce bu iki kapıyı denemeye değer.' },

    { kind: 'yanilgi', baslik: '"Tarifede yazan tutarı öderim" yanılgısı', metin: 'Tarife alt sınır, yani altına inilemeyecek ücret. Üst sınır koymuyor. Ayrıca operasyonlarda anestezi, kullanılan ilaç, sarf malzeme ve gerekiyorsa yatış ücreti bu tutarların ÜSTÜNE ekleniyor. Yani kısırlaştırma için verilen rakam işlemin kendisi; ödeyeceğiniz toplam, hayvanın kilosuna ve işlemin seyrine göre değişiyor. Doğru soru "tarifede ne yazıyor" değil, "bu işlemin toplamı ne olur".' },

    { kind: 'baslik', metin: 'Fatura kalemleri: neye ödeme yapıyorsunuz' },
    { kind: 'liste', maddeler: [
      'Muayene: hekimin değerlendirmesi',
      'Anestezi: ilaç ve uygulama, kiloya göre değişir',
      'Sarf malzeme: dikiş, örtü, eldiven, serum seti',
      'İlaç: ameliyat sırasında ve sonrasında verilenler',
      'Tahlil ve görüntüleme: gerekiyorsa ayrı kalem',
      'Yatış: gözlem gerektiren durumlarda gün üzerinden',
    ] },
    { kind: 'paragraf', metin: 'Bu kalemleri işlem öncesinde tek tek sormak hakkınız. Tarifelerin nasıl belirlendiğini ve neden il il değiştiğini [[asgari-ucret-tarifesi-nedir|asgari ücret tarifesi]] yazısında anlattık.' },

    { kind: 'uyari', metin: 'Buradaki rakamlar Ağustos 2026 itibarıyla İstanbul Veteriner Hekimler Odası alt sınır tarifesine dayanıyor ve bilgilendirme amaçlıdır. Tarifeler il odalarına göre değişir ve yıl içinde güncellenir; klinikler alt sınırın üzerinde ücret uygulayabilir. Kesin tutar için gideceğiniz kliniğe sorun.' },
  ],
  sss: [
    { soru: 'Bu fiyatlar tüm Türkiye’de geçerli mi?', cevap: 'Hayır. Rakamlar İstanbul Veteriner Hekimler Odası’nın 2026 tarifesinden ve İstanbul ile Yalova için geçerli. Diğer illerde kendi odalarının tarifesi uygulanıyor.' },
    { soru: 'Klinik neden tarifenin üstünde ücret istiyor?', cevap: 'Tarife alt sınır belirliyor, üst sınır koymuyor. Konum, donanım, işlem süresi ve kullanılan malzeme ücreti yukarı taşıyabiliyor.' },
    { soru: 'Kısırlaştırma ücretine her şey dâhil mi?', cevap: 'Genellikle değil. Anestezi, ilaç, sarf malzeme ve gerekiyorsa yatış ayrıca ekleniyor. Toplamı önceden sorun.' },
    { soru: 'Ücretsiz kısırlaştırma imkânı var mı?', cevap: 'Birçok belediye ücretsiz ya da destekli hizmet veriyor; veteriner fakültesi hayvan hastaneleri de genellikle daha uygun oluyor.' },
    { soru: 'Kuduz aşısı zorunlu mu?', cevap: 'Evet, sahipli kedi, köpek ve gelinciklerde kuduz aşısının düzenli yaptırılması yasal zorunluluk.' },
  ],
  kontrolListesi: [
    'İşlem öncesi toplam tutarı kalem kalem sorun.',
    'Kontrol muayenesinin dâhil olup olmadığını netleştirin.',
    'Kısırlaştırmada anestezi ve ilaç kalemlerini ayrıca sorun.',
    'Bütçe sorunsa belediye ve fakülte hastanesi seçeneklerine bakın.',
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
