import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI. Tarifeyi kimin belirledigi 6343 sayili Kanun'a, tarifenin
 * kendisi il odalarinin yayimladigi belgelere dayaniyor. RAKAM YAZILMADI:
 * tarife il il ve donem donem degisiyor, burada verilen bir sayi kisa surede
 * yaniltici olurdu. Okuyucu kendi odasinin guncel belgesine yonlendiriliyor.
 */
export const asgariUcretTarifesiNedir: BlogYazi = {
  slug: 'asgari-ucret-tarifesi-nedir',
  baslik: 'Veteriner Hekim Odası Asgari Ücret Tarifesi Nedir, Klinikler Nasıl Uygular?',
  ozet: 'Tarife bir fiyat listesi değil, alt sınır. Aynı işlem için kliniklerin farklı ücret istemesi bu yüzden aykırılık değil.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-30',
  bloklar: [
    { kind: 'paragraf', metin: 'Fatura elinize geçtiğinde akla gelen soru genelde aynı: "bu fiyat normal mi?" Cevabın dayanağı, veteriner hekimleri odalarının yayımladığı **asgari ücret tarifesi.** Ama bu belge çoğu zaman yanlış anlaşılıyor.' },

    { kind: 'baslik', metin: 'Tarife tavan değil, taban' },
    { kind: 'paragraf', metin: 'Adındaki "asgari" kelimesi belgeyi özetliyor: tarife, bir işlemin **altına inilmemesi gereken** ücreti gösteriyor. Üst sınır belirlemiyor. Bu yüzden iki klinik aynı işlem için farklı ücret isteyebiliyor ve ikisi de tarifeye uygun olabiliyor.' },
    { kind: 'paragraf', metin: 'Taban belirlemenin amacı fiyat yükseltmek değil; hizmetin sürdürülebilir bir maliyetin altında verilmesini önlemek. Çok düşük ücret, kullanılan malzemeden ya da ayrılan süreden kısmak anlamına gelebiliyor.' },

    { kind: 'baslik', metin: 'Tarifeyi kim belirliyor' },
    { kind: 'paragraf', metin: '1954 tarihli 6343 sayılı Kanun, veteriner hekimleri odalarını ve Türk Veteriner Hekimleri Birliği’ni kamu kurumu niteliğinde meslek kuruluşu olarak tanımlıyor ve görevlerini belirliyor. Asgari ücret tarifeleri bu çerçevede **il odaları tarafından** hazırlanıp yayımlanıyor.' },
    { kind: 'paragraf', metin: 'Sonuç olarak tek bir ülke tarifesi yok: Ankara, İstanbul, Kocaeli gibi illerin odaları kendi tarifelerini yayımlıyor ve bölge şartlarına göre farklılaşıyor. Tarifeler dönem dönem güncelleniyor.' },

    { kind: 'yanilgi', baslik: '"Tarifede yazan fiyatı ödemem gerekir" yanılgısı', metin: 'Tarifedeki sayı ödeyeceğiniz ücret değil, altına inilemeyecek sınır. Kliniğin konumu, kullandığı malzeme, cihaz donanımı, işlemin süresi ve hekim sayısı ücreti yukarı taşıyabiliyor. Aynı şekilde tarifenin altında bir ücret duyduğunuzda da sormaya değer: aynı işlem mi yapılıyor, aynı malzeme mi kullanılıyor.' },

    { kind: 'baslik', metin: 'Ücreti anlamanın pratik yolu' },
    { kind: 'liste', maddeler: [
      'İşlem öncesinde kalem kalem bilgi isteyin: muayene, ilaç, sarf, anestezi, yatış ayrı kalemler.',
      'Anestezi gerektiren işlemlerde tahlil ve hazırlık maliyetini önceden sorun.',
      'Kontrol muayenesinin ücrete dâhil olup olmadığını netleştirin.',
      'Kendi ilinizin odasının güncel tarifesine bakın; il il değişiyor.',
      'Fatura isteyin; kalemleri görmek karşılaştırma imkânı veriyor.',
    ] },
    { kind: 'paragraf', metin: 'Ücretin hangi kuruluşta oluştuğu da fark yaratıyor. Muayenehane, poliklinik ve hastane arasındaki kapsam farkını [[muayenehane-poliklinik-hastane-farki|kliniklerin farkı]] yazısında anlattık.' },

    { kind: 'uyari', metin: 'Bu yazı tarifenin ne olduğunu anlatıyor; güncel ücretleri içermiyor. Tarifeler il odalarına göre değişiyor ve yıl içinde güncellenebiliyor. Güncel bilgi için bulunduğunuz ilin veteriner hekimleri odasının yayımladığı belgeye bakın.' },
  ],
  sss: [
    { soru: 'Tarife tüm Türkiye’de aynı mı?', cevap: 'Hayır. Tarifeler il odaları tarafından, bölge şartları değerlendirilerek yayımlanıyor ve iller arasında farklılaşıyor.' },
    { soru: 'Klinik tarifenin üstünde ücret isteyebilir mi?', cevap: 'Evet. Tarife alt sınır belirliyor, üst sınır koymuyor. Donanım, konum, işlem süresi ve kullanılan malzeme ücreti etkiliyor.' },
    { soru: 'Tarifenin altında ücret gördüm, iyi mi kötü mü?', cevap: 'Tek başına iyi ya da kötü değil, sormaya değer. Aynı işlem, aynı malzeme ve aynı hazırlıkla mı yapılıyor sorusunu netleştirin.' },
    { soru: 'Güncel tarifeyi nereden bulurum?', cevap: 'Bulunduğunuz ilin veteriner hekimleri odasının internet sitesinden. Tarifeler dönem dönem güncelleniyor, yayım tarihine dikkat edin.' },
  ],
  kontrolListesi: [
    'Kendi ilinizin odasının güncel tarifesini bir kez inceleyin.',
    'İşlem öncesi kalem kalem ücret bilgisi isteyin.',
    'Kontrol muayenesinin dâhil olup olmadığını sorun.',
    'Faturayı saklayın; sonraki karşılaştırmaların zeminini veriyor.',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarzına ve Göreceği İşlere Dair Kanun',
      yil: 1954,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6343&MevzuatTur=1&MevzuatTertip=3',
    },
    {
      kurum: 'Ankara Veteriner Hekimleri Odası',
      baslik: 'Asgari Ücret Tarifeleri (ev hayvanları ve çiftlik hayvanları, dönemsel yayım)',
      yil: 2026,
      adres: 'https://www.avho.org.tr/asgari-ucret-tarifeleri/',
    },
  ],
};
