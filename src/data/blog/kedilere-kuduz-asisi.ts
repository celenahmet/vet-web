import type { BlogYazi } from './types';

export const kedilereKuduzAsisi: BlogYazi = {
  slug: 'kedilere-kuduz-asisi',
  baslik: 'Kedilere Kuduz Aşısı Ne Zaman Yapılır, Ne Sıklıkla Tekrarlanır?',
  ozet: 'Kuduz aşısı üç aydan büyük kedilerde yasal zorunluluk. İlk doz, 21 gün sonra rapel, sonra yılda bir. Ev kedisi de dahil; nerede yapılır, kayda nasıl işlenir.',
  kapakAlt:
    'Kedilere kuduz aşısı konulu yazının kapak görseli; klinikte veteriner hekimin kucağında sakin duran bir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-20',
  bloklar: [
    { kind: 'paragraf', metin: 'Türkiye\'de **üç aydan büyük her kedinin kuduz aşısı yaptırılması yasal bir yükümlülük.** Kuduz yönetmeliğine göre ilk dozdan sonra rapel (pekiştirme) dozu yapılıyor, ardından aşı **yılda bir** tekrarlanıyor. Kedinin hiç dışarı çıkmaması bu yükümlülüğü kaldırmıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda aşının ne zaman yapıldığını, ne sıklıkla tekrarlandığını, nerede yaptırıldığını ve aşıdan sonra nelere dikkat edileceğini yönetmelik maddeleri ve uluslararası kedi aşı rehberiyle anlatıyoruz. Kedinize özel takvimi her zaman veteriner hekiminiz belirler.' },

    { kind: 'baslik', metin: 'Kedilere kuduz aşısı ne zaman yapılır?' },
    { kind: 'tablo', basliklar: ['Aşama', 'Zaman', 'Dayanak'], satirlar: [
      ['İlk doz', 'Kedi üç aylıktan büyükken', 'Kuduz yönetmeliği, madde 9'],
      ['Rapel (pekiştirme) dozu', 'İlk dozdan 21 gün sonra', 'Üretici farklı süre belirtmemişse'],
      ['Tekrar', 'Yılda bir', 'Üretici farklı süre belirtmemişse'],
    ]},
    { kind: 'paragraf', metin: 'Uluslararası rehber de ilk dozun **12 haftalıktan önce yapılmamasını** öneriyor. Bunun sebebi yavrunun anneden aldığı bağışıklığın aşının etkisini azaltabilmesi. Yani yavru kedide kuduz aşısı genellikle karma aşı serisi başladıktan sonra, üç aylıkken ya da biraz sonra takvime giriyor. Karma aşıyla birlikte tüm takvimi [[kedi-asi-takvimi|kedi aşı takvimi]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Kuduz aşısı ne sıklıkla tekrarlanır?' },
    { kind: 'paragraf', metin: 'Yönetmelikteki genel kural **yılda bir kez.** Metin, üreticinin farklı bir süre belirttiği durumları ayrıca saklı tutuyor. Uluslararası rehber bazı kuduz aşılarının etiketinde üç yıllık koruma süresi bulunduğunu belirtiyor. Ancak Türkiye\'de yükümlülük yönetmelikteki yıllık düzene göre işliyor. Hangi aşının kullanıldığını ve bir sonraki tarihi kedinin kimlik belgesinde görebilirsiniz.' },
    { kind: 'paragraf', metin: 'Yönetmelik, evcil hayvanlarda kuduza karşı **yalnızca inaktif (ölü virüs) aşıların** kullanılmasını şart koşuyor.' },

    { kind: 'baslik', metin: 'Kuduz aşısı zorunlu mu? Ev kedisi için de geçerli mi?' },
    { kind: 'paragraf', metin: 'Evet. Kuduz Hastalığından Korunma ve Kuduz Hastalığı ile Mücadele Yönetmeliği\'nin 9. maddesi, **üç aydan büyük köpek ve kedi sahiplerini hayvanlarını yılda bir defa aşılatmakla yükümlü** tutuyor. Maddede ev kedisi ya da dışarı çıkmayan kedi için bir istisna yok.' },
    { kind: 'yanilgi', baslik: '"Kedim hiç dışarı çıkmıyor, kuduz aşısı gereksiz"', metin: 'Yasal yükümlülük kedinin yaşam biçiminden bağımsız. Ayrıca ev kedileri de kaçabiliyor, taşınmada ya da pansiyonda başka hayvanlarla karşılaşabiliyor. Seyahat ve pansiyon için de güncel kuduz aşısı isteniyor.' },
    { kind: 'paragraf', metin: 'Aynı yönetmeliğin 8. maddesi, **altı aydan büyük kedilerin** kayıt altına alınmasını da zorunlu tutuyor. Kedi mikroçiple kimliklendiriliyor ve bilgileri Bakanlığın veri tabanına giriliyor; adımları [[petvet-kayit|PETVET kaydı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Kuduz aşısı nerede yapılır?' },
    { kind: 'liste', maddeler: [
      '**Özel veteriner klinikleri:** Serbest veteriner hekimler kuduz aşısı uyguluyor. Sahipli kediler için en yaygın yol bu.',
      '**Resmi ve belediye veteriner hekimleri:** Yönetmelik aşıyı uygulayabilecek hekimler arasında onları da sayıyor. Belediyeler sahipsiz kedi ve köpekleri de yılda bir aşılıyor.',
    ]},
    { kind: 'paragraf', metin: 'Aşıyı yapan hekim, uygulamanın bilgilerini ve **bir sonraki aşı tarihini** kedinin kimlik belgesine işlemek ve Bakanlık veri tabanındaki kaydı güncellemekle yükümlü. Aşı sonrasında belgenin güncellendiğini kontrol edin; seyahatte ve pansiyonda bu belge isteniyor.' },

    { kind: 'baslik', metin: 'Kuduz aşısı fiyatı ne kadar?' },
    { kind: 'paragraf', metin: 'Fiyat klinikten kliniğe ve şehirden şehre değişiyor. Muayene, aşının kendisi ve kimlik belgesi işlemleri ayrı kalemler olabiliyor. Fiyatların nasıl oluştuğunu ve meslek odalarının belirlediği tabanı [[veteriner-ucretleri|veteriner ücretleri]] ve [[asgari-ucret-tarifesi-nedir|asgari ücret tarifesi]] yazılarımızda anlattık.' },

    { kind: 'baslik', metin: 'Aşıdan sonra ne beklenir?' },
    { kind: 'liste', maddeler: [
      '**Normal kabul edilenler:** Bir iki gün süren hafif halsizlik, iştahta azalma, aşı yerinde hassasiyet.',
      '**Hemen kliniğe dönülmesi gerekenler:** Yüzde şişlik, kusma, yaygın kaşıntı, nefes almada güçlük, bayılma.',
      '**Hekime gösterilmesi gerekenler:** Aşı yerinde **üç aydan uzun süren, 2 santimetreden büyük ya da aşıdan bir ay sonra hâlâ büyüyen** şişlik. Kedi aşı rehberi bu durumda şişliğin incelenmesini öneriyor.',
    ]},
    { kind: 'uyari', metin: 'Kediniz birini ısırdıysa ya da kuduz şüphesi varsa vakit kaybetmeden hem bir sağlık kuruluşuna hem veteriner hekime başvurun. Isırılan kişinin tedavisine sağlık kuruluşu karar verir.' },
  ],
  sss: [
    { soru: 'Kedilere kuduz aşısı ne zaman yapılır?', cevap: 'Kedi üç aylıktan büyükken ilk doz yapılıyor; üretici farklı süre belirtmemişse 21 gün sonra rapel dozu, sonra yılda bir tekrar.' },
    { soru: 'Kuduz aşısı ne sıklıkla yapılır?', cevap: 'Türkiye\'de yönetmeliğe göre yılda bir kez; üreticinin farklı süre belirttiği aşılarda o süre uygulanıyor.' },
    { soru: 'Kediye kuduz aşısı yaptırmak zorunlu mu?', cevap: 'Evet; kuduz yönetmeliğinin 9. maddesi üç aydan büyük kedi ve köpek sahiplerini yılda bir aşılatmakla yükümlü tutuyor.' },
    { soru: 'Hiç dışarı çıkmayan ev kedisine kuduz aşısı gerekli mi?', cevap: 'Evet; yönetmelikte ev kedisi için istisna yok ve seyahat ile pansiyon için de güncel aşı isteniyor.' },
    { soru: 'Kuduz aşısı nerede yapılır?', cevap: 'Özel veteriner kliniklerinde; resmi ve belediye veteriner hekimleri de uygulayabiliyor ve bilgiyi kimlik belgesine işliyor.' },
    { soru: 'Kuduz aşısını geciktirdim, ne yapmalıyım?', cevap: 'Kliniğinizi arayıp son aşı tarihini söyleyin; gecikmenin süresine göre hekim nasıl devam edileceğine karar verir.' },
    { soru: 'Kuduz ve karma aşı aynı gün yapılır mı?', cevap: 'Hekim uygun görürse aynı ziyarette yapılabiliyor; kedinin yaşı ve sağlık durumuna göre karar veriliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kuduz Hastalığından Korunma ve Kuduz Hastalığı ile Mücadele Yönetmeliği',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=15800&MevzuatTertip=5',
    },
    {
      kurum: 'American Animal Hospital Association · American Association of Feline Practitioners',
      yazarlar: 'Stone AE, Brummet GO, Carozza EM, Kass PH ve ark.',
      baslik: '2020 AAHA/AAFP Feline Vaccination Guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2020,
      kunye: '22(9):813-830',
      doi: '10.1177/1098612X20941784',
    },
  ],
};
