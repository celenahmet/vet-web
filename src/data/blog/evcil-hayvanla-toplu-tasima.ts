import type { BlogYazi } from './types';

export const evcilHayvanlaTopluTasima: BlogYazi = {
  slug: 'evcil-hayvanla-toplu-tasima',
  baslik: 'Evcil Hayvanla Metroya ve Otobüse Binilir mi?',
  ozet: 'İstanbul metrosu, İETT otobüsü, vapur, Ankara metrosu ve trende kedi ve köpekle yolculuk kuralları: saatler, tasma, ağızlık ve kafes şartları tabloda.',
  kapakAlt:
    'Evcil hayvanla toplu taşıma konulu yazının kapak görseli; tren vagonunda yolcunun kucağındaki fileli taşıma çantasının içinden bakan tekir bir kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Türkiye\'de evcil hayvanla toplu taşımaya binmek çoğu zaman mümkün, ama kurallar şehirden şehre ve araçtan araca değişiyor.** İstanbul\'da metro ve İETT otobüslerinde köpekler boyuna göre farklı kurallarla, kediler ise yalnızca taşıma çantasında kabul ediliyor. Ankara raylı sisteminde hayvanlar yalnızca kafeste, trenlerde ise kafesteki kedi, köpek ve küçük ötücü kuşlar yolcunun yanında taşınabiliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda işletmelerin kendi yayımladığı yolculuk kurallarını araç araç topladık. Kurallar zaman zaman güncelleniyor ve aynı işletmenin iki sayfası bile farklı şeyler söyleyebiliyor; bu yüzden yolculuktan önce görevliye sormak her zaman en güvenli yol.' },

    { kind: 'tablo', basliklar: ['Araç', 'Kedi', 'Köpek'], satirlar: [
      ['İstanbul metro ve tramvay', 'Çanta, sepet ya da kafeste; yoğun saatler dışında', 'Küçük köpek kucakta her saat; orta ve büyük köpek ağızlıkla, yoğun saatler dışında'],
      ['İETT otobüsleri', 'Çanta, sepet ya da kafeste; yoğun saatler dışında', 'Metroyla aynı kurallar'],
      ['Şehir Hatları vapurları', 'Çantada her saat (SSS)', 'Ağızlık ve tasmayla her saat (SSS)'],
      ['Ankara metro ve Ankaray', 'Önlemi alınmış kafeste', 'Önlemi alınmış kafeste'],
      ['TCDD trenleri', 'Kafeste, yolcunun yanında', 'Kafeste, yolcunun yanında'],
    ]},

    { kind: 'baslik', metin: 'İstanbul metrosunda köpekle yolculuk' },
    { kind: 'paragraf', metin: 'Metro İstanbul\'un yolculuk kurallarına göre evcil hayvanla seyahat, belirlenen şartlara uyulması kaydıyla **07.00-10.00 ve 16.00-20.00 saatleri dışında** serbest. Köpekler için kurallar boyuna göre ayrılıyor:' },
    { kind: 'liste', maddeler: [
      '**Küçük köpekler:** Ağırlığı 5 kilogramı geçmeyen ve tek elle kucakta taşınabilen köpekler. 50 santimetreyi geçmeyen tasmayla ve kucakta taşınmak şartıyla saat sınırı ve ağızlık zorunluluğu olmadan seyahat edebiliyor.',
      '**Orta ve büyük köpekler:** 50 santimetreyi geçmeyen tasma ve ağızlık yolculuk boyunca çıkarılmamak şartıyla, yoğun saatler dışında seyahat edebiliyor. Araçta koridoru kapatmadan, zeminde ve sahibinin yanında durmaları gerekiyor.',
      '**Bir yolcu, bir köpek:** Bir yolcu yanında yalnızca bir köpekle yolculuk edebiliyor.',
      '**Yürüyen merdiven:** Yürüyen merdiven ve bantlarda küçük köpeklerin kucakta taşınması zorunlu.',
      '**Koltuk yok:** Kafesler koltuklara konulamıyor, köpekler koltuklara oturtulamıyor.',
    ]},
    { kind: 'paragraf', metin: 'Metro İstanbul, normalin üzerinde yolcu yoğunluğu olduğunda kafes içinde olsa bile köpeklerin girişini kısıtlama hakkını saklı tutuyor. Köpeğin yolculara, ekipmana ya da istasyona verdiği zarar ve dışkı, idrar gibi kirliliğin temizlenmesi köpek sahibinin sorumluluğunda.' },
    { kind: 'yanilgi', baslik: '"Ağızlık takan büyük köpek her saatte metroya binebilir"', metin: 'Ağızlık ve kısa tasma orta ve büyük köpekler için şart, ama yetmiyor. Bu köpekler 07.00-10.00 ve 16.00-20.00 arasındaki yoğun saatlerde metroya alınmıyor. Saat sınırı olmadan seyahat edebilenler yalnızca kucakta taşınan küçük köpekler ve rehber köpekler.' },

    { kind: 'baslik', metin: 'Rehber köpekler her saat yolculuk edebiliyor' },
    { kind: 'paragraf', metin: 'Engellilere refakat eden rehber köpekler hem metroda hem İETT otobüslerinde saat sınırlaması olmadan seyahat edebiliyor. Görevli istediğinde, yolcunun engelli kartını ve köpeğe ait rehber köpek kartını göstermesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Ağızlık konusunda iki işletmenin sayfaları farklı: Metro İstanbul, engelli kartı gösterildiğinde rehber köpekler için ağızlık zorunluluğu olmadığını yazıyor. İETT\'nin yolcu hakları bildirgesi ise rehber köpeklerin de diğer köpekler gibi 50 santimetreyi geçmeyen tasma ve ağızlıkla seyahat edeceğini belirtiyor. Otobüs yolculuğunda ağızlığı yanınızda bulundurmak sorun yaşamamanın en kolay yolu.' },

    { kind: 'baslik', metin: 'Kedilerle yolculuk: yalnızca taşıma çantasında' },
    { kind: 'paragraf', metin: 'Metro İstanbul ve İETT kurallarında kediler için tek bir yol var: özel olarak hayvan taşımak için tasarlanmış kedi çantası, sepet ya da kafes. Bu şekilde taşınmayan kediler, tasmalı olsa ya da kucakta taşınsa bile araca alınmıyor. Kediler için ayrı bir saat istisnası tanımlanmadığından, metroda ve otobüste genel kural olan yoğun saat sınırı kediler için de geçerli.' },
    { kind: 'yanilgi', baslik: '"Kucağımda sakin duran kedimle metroya binebilirim"', metin: 'Kurallar bunu açıkça yasaklıyor: kediler yalnızca kedi çantası, sepet ya da kafesle seyahat edebiliyor; tasmayla ya da kucakta taşınan kediler alınmıyor. Kalabalıkta ürken bir kedinin kaçıp raylara ya da kapı aralığına girmesi ciddi bir tehlike.' },
    { kind: 'paragraf', metin: 'Kediyi çantaya önceden alıştırmak yolculuğu çok kolaylaştırır. Çantayı evde açık bırakıp içine sevdiği bir battaniye koymak, kedinin onu sığınak olarak görmesini sağlar. Uzun yolculuklar için [[evcil-hayvanla-ucak-yolculugu|evcil hayvanla uçak yolculuğu]] yazımızdaki hazırlıklar da işe yarar.' },

    { kind: 'baslik', metin: 'Vapurda evcil hayvan: iki sayfa, iki farklı kural' },
    { kind: 'paragraf', metin: 'Şehir Hatları\'nın iki sayfası birbirinden farklı bilgi veriyor. Yolculuk kuralları sayfasına göre iskele ve vapurlarda yalnızca görme engellilere refakat eden kılavuz köpekler ve kafeste taşınan küçük kafes hayvanlarıyla yolculuk yapılabiliyor. Sıkça sorulan sorular sayfası ise tüm köpeklerin ağızlık ve en fazla 50 santimetre tasmayla, kedilerin de çanta, sepet ya da kafeste günün her saati seyahat edebileceğini yazıyor.' },
    { kind: 'paragraf', metin: 'Bu çelişki giderilene kadar vapura köpekle binmeden önce iskeledeki görevliye sormak en sağlıklısı. Kedi için durum daha net: çantada ya da kafeste taşınan bir kedi iki sayfanın kuralına da uyuyor.' },

    { kind: 'baslik', metin: 'Ankara metrosu ve Ankaray' },
    { kind: 'paragraf', metin: 'EGO Genel Müdürlüğü\'nün raylı sistem yolcu taşıma yönergesi daha sıkı bir kural koyuyor: istasyonlara ve araçlara, önlemi alınmış kafeste taşınabilen evcil hayvanlar dışında hiçbir hayvan sokulamıyor. Yani Ankara metrosunda ve Ankaray\'da kedi de köpek de ancak kafes içinde yolculuk edebiliyor; tasmalı köpekle binmek mümkün değil.' },

    { kind: 'baslik', metin: 'Trende evcil hayvan' },
    { kind: 'paragraf', metin: 'TCDD Taşımacılık\'ın yolcu hakları belgesi, yolcunun yanında taşınabilecek evcil hayvanları tanımlıyor: kafeslerinde olmak kaydıyla yalnızca kedi, köpek ve küçük ötücü kuşlar. Belgede örnek olarak saka kuşu, muhabbet kuşu, kanarya ve papağan sayılıyor. Hayvanın gözetimi yolcunun sorumluluğunda.' },
    { kind: 'tablo', basliklar: ['Hayvan', 'Trende yolcunun yanında'], satirlar: [
      ['Kedi', 'Kafesinde olmak kaydıyla kabul ediliyor'],
      ['Köpek', 'Kafesinde olmak kaydıyla kabul ediliyor'],
      ['Küçük ötücü kuşlar', 'Kafesinde olmak kaydıyla kabul ediliyor'],
      ['Diğer hayvanlar', 'Tanımın dışında kalıyor'],
    ]},

    { kind: 'baslik', metin: 'Hangi hayvanlar hiç kabul edilmiyor?' },
    { kind: 'paragraf', metin: 'Metro İstanbul, İETT ve Şehir Hatları kurallarında ortak bir yasak listesi var. Serbest kaldığında diğer yolculara zarar verebilecek yırtıcı ve zehirli hayvanlar, sürüngenler, eklem bacaklılar, böcekler, primatlar, yabani kuşlar ve çiftlik hayvanları istasyon ve araçlara hiçbir şekilde alınmıyor.' },
    { kind: 'uyari', metin: 'Toplu taşıma kuralları işletmeler tarafından güncellenebiliyor ve aynı işletmenin farklı sayfaları farklı bilgi verebiliyor. Yolculuk öncesinde işletmenin güncel kurallarına bakmak ya da görevliye sormak, kapıda geri çevrilme riskini ortadan kaldırır.' },

    { kind: 'baslik', metin: 'Yolculuk öncesi kısa hazırlık' },
    { kind: 'liste', maddeler: [
      'Yolculuğu 07.00-10.00 ve 16.00-20.00 arasındaki yoğun saatlerin dışına planlamak',
      'Orta ve büyük köpeği ağızlığa evde, kısa sürelerle ve ödülle alıştırmak',
      'Kediyi taşıma çantasına önceden alıştırmak',
      'Yanınızda dışkı torbası ve küçük bir bez bulundurmak',
      'Köpeğin mikroçip kaydının ve iletişim bilgilerinizin güncel olduğunu kontrol etmek',
    ]},
    { kind: 'paragraf', metin: 'Kalabalık bir istasyonda kaybolan bir hayvanın sahibine ulaşmasını mikroçip kaydı sağlar. Ayrıntılar [[mikrocip-nedir|mikroçip nedir]] yazımızda; şehirde köpekle dolaşırken uyulması gereken tasma ve temizlik kurallarını da [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazımızda topladık.' },
  ],
  kontrolListesi: [
    'Yoğun saatlerin dışında mı?',
    'Tasma 50 cm\'yi geçmiyor mu?',
    'Büyük köpekte ağızlık takılı mı?',
    'Kedi çanta ya da kafeste mi?',
    'Dışkı torbası yanında mı?',
    'Mikroçip kaydı güncel mi?',
  ],
  sss: [
    { soru: 'Metroya köpekle binilir mi?', cevap: 'İstanbul\'da evet. Ağırlığı 5 kilogramı geçmeyen küçük köpekler kısa tasmayla ve kucakta her saat binebiliyor. Orta ve büyük köpekler 50 santimetreyi geçmeyen tasma ve ağızlıkla, 07.00-10.00 ve 16.00-20.00 dışındaki saatlerde seyahat edebiliyor. Bir yolcu yanında yalnızca bir köpek olabiliyor.' },
    { soru: 'Otobüse kedi ile binilir mi?', cevap: 'İETT kurallarına göre kediler yalnızca özel kedi çantası, sepet ya da kafesle otobüse binebiliyor. Tasmalı ya da kucakta taşınan kediler alınmıyor. Kediler için saat istisnası tanımlanmadığından yoğun saatler dışında yolculuk etmek gerekiyor.' },
    { soru: 'Vapura köpek alınır mı?', cevap: 'Şehir Hatları\'nın sıkça sorulan sorular sayfası tüm köpeklerin ağızlık ve en fazla 50 santimetre tasmayla günün her saati seyahat edebileceğini yazıyor. Ancak yolculuk kuralları sayfası yalnızca kılavuz köpekleri ve kafesteki küçük hayvanları sayıyor. Binmeden önce görevliye sormak en sağlıklısı.' },
    { soru: 'Trende kedi ve köpek taşınabilir mi?', cevap: 'Evet. TCDD Taşımacılık\'ın yolcu hakları belgesine göre kafeslerinde olmak kaydıyla kedi, köpek ve küçük ötücü kuşlar yolcunun yanında taşınabiliyor. Belgede örnek olarak saka kuşu, muhabbet kuşu, kanarya ve papağan sayılıyor. Hayvanın gözetimi yolculuk boyunca yolcunun sorumluluğunda.' },
    { soru: 'Rehber köpekler için saat sınırı var mı?', cevap: 'Hayır. Engellilere refakat eden rehber köpekler İstanbul\'da metro ve otobüslerde saat sınırlaması olmadan seyahat edebiliyor. Görevli istediğinde yolcunun engelli kartını ve köpeğin rehber köpek kartını göstermesi gerekiyor.' },
    { soru: 'Ankara metrosuna köpekle binilir mi?', cevap: 'EGO\'nun raylı sistem yolcu taşıma yönergesine göre istasyonlara ve araçlara yalnızca önlemi alınmış kafeste taşınabilen evcil hayvanlar alınabiliyor. Tasmalı köpekle Ankara metrosuna ya da Ankaray\'a binmek mümkün değil; kafese sığan hayvanlar kafesle seyahat edebiliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Metro İstanbul',
      baslik: 'Yolculuk Kuralları',
      adres: 'https://www.metro.istanbul/icerik/yolculuk_kurallari',
    },
    {
      kurum: 'İETT Genel Müdürlüğü',
      baslik: 'Yolcu Hakları Bildirgesi',
      adres: 'https://iett.istanbul/icerik/yolcu-haklari-bildirgesi',
    },
    {
      kurum: 'Şehir Hatları',
      baslik: 'Yolculuk Kuralları',
      adres: 'https://sehirhatlari.istanbul/tr/bilgiler/yolculuk-kurallari-249',
    },
    {
      kurum: 'Şehir Hatları',
      baslik: 'Sıkça Sorulan Sorular: Evcil Hayvanlarla Seyahat Kuralları',
      adres: 'https://sehirhatlari.istanbul/tr/sikca-sorulan-sorular',
    },
    {
      kurum: 'EGO Genel Müdürlüğü',
      baslik: 'Raylı Sistem Yolcu Taşıma Yönergesi',
      adres: 'https://www.ego.gov.tr/tr/sayfa/2096/rayli-sistem-yolcu-tasima-yonergesiii',
    },
    {
      kurum: 'TCDD Taşımacılık A.Ş.',
      baslik: 'Yolcu Hakları',
      adres: 'https://adminapi.tcddtasimacilik.gov.tr/files/pdfs/yolcu-haklari.pdf',
    },
  ],
};
