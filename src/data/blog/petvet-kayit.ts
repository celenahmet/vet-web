import type { BlogYazi } from './types';

export const petvetKayit: BlogYazi = {
  slug: 'petvet-kayit',
  baslik: 'PETVET Kaydı Nasıl Yapılır? Sahipli Hayvan Kayıt Zorunluluğu',
  ozet: 'Sahipli kedi ve köpeğin PETVET kaydı zorunlu; son tarih 31 Aralık 2025\'ti. Kayıt nerede yapılır, yavruda ne zaman, cezası ne kadar, sonra neler bildirilir?',
  kapakAlt:
    'PETVET kaydı konulu yazının kapak görseli; klinikte mikroçip okuyucuyla okutulan bir köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-20',
  bloklar: [
    { kind: 'paragraf', metin: '**Sahipli kedi ve köpeklerin mikroçiple kimliklendirilip PETVET\'e kaydettirilmesi yasal bir zorunluluk.** 5199 sayılı Hayvanları Koruma Kanunu, sahiplere bunun için **31 Aralık 2025**\'e kadar süre vermişti; bu süre doldu. Bugün kaydı olmayan bir kedi ya da köpek için sahibine idari para cezası uygulanabiliyor.' },
    { kind: 'paragraf', metin: 'Kayıt bir klinik ziyaretiyle yapılıyor: mikroçip takılıyor, hayvan sisteme işleniyor ve pasaportu düzenleniyor. Aşağıda kaydın nerede ve nasıl yapıldığını, yavru hayvanda ne zaman gerektiğini, cezanın nasıl hesaplandığını ve kayıttan sonra hangi değişikliklerin kaç gün içinde bildirilmesi gerektiğini kanun ve yönetmelik maddeleriyle anlatıyoruz.' },

    { kind: 'baslik', metin: 'PETVET nedir?' },
    { kind: 'paragraf', metin: 'PETVET, Tarım ve Orman Bakanlığı\'nın **Ev Hayvanı Kayıt Sistemi.** Mikroçip numarasıyla açılan kayıtta hayvanın adı, pasaport numarası, türü, ırkı, cinsiyeti, rengi ve doğum tarihi; sahibinin adı ve adresi ile acil durumda ulaşılacak kişi yer alıyor. Aşılar, sahip değişikliği, kayıp ve yapılan operasyonlar da aynı kayda işleniyor.' },
    { kind: 'paragraf', metin: 'Kayıt, sokakta bulunan bir hayvanın sahibine ulaşmayı sağlıyor: hayvan bir okuyucuyla okutulduğunda numaradan sahibi bulunuyor. Mikroçipin nasıl çalıştığını [[mikrocip-nedir|mikroçip nedir]] yazımızda ayrıca anlattık.' },

    { kind: 'baslik', metin: 'Kayıt zorunlu mu, son tarih neydi?' },
    { kind: 'paragraf', metin: 'Evet. Kanunun 4. maddesi kedi ve köpek sahiplerini **hayvanlarını dijital kimliklendirme yöntemleriyle kayıt altına aldırmakla yükümlü** tutuyor. Geçici 4. madde bu yükümlülük için son tarihi **31 Aralık 2025** olarak belirlemişti. Gelincik sahipleri de kimliklendirme yönetmeliğinin kapsamında.' },
    { kind: 'yanilgi', baslik: '"Kedim evden hiç çıkmıyor, kayda gerek yok"', metin: 'Yükümlülük hayvanın yaşam biçimine bakmıyor; kanun bütün sahipli kedi ve köpekleri kapsıyor. Ev kedileri de kaçabiliyor; kayıtlı bir kedinin sahibine numarasından ulaşılabiliyor.' },

    { kind: 'baslik', metin: 'PETVET kaydı nasıl yapılır?' },
    { kind: 'liste', maddeler: [
      '**Başvuru yeri:** Serbest çalışan bir veteriner hekime (kliniğe) ya da il veya ilçe tarım ve orman müdürlüğüne başvuruluyor.',
      '**Mikroçip:** 15 haneli numara taşıyan mikroçip, veteriner hekim tarafından ya da hekim gözetiminde deri altına uygulanıyor. Genel yer iki kürek kemiğinin arası ya da boynun sol tarafında kulağa yakın bölge. Omurga hastalığına yatkın ırklarda arka bacak ya da göğüs kemiği bölgesi de kullanılabiliyor.',
      '**Sisteme kayıt:** Yetkili veteriner hekim hayvanı ve sahibini PETVET\'e işliyor.',
      '**Pasaport:** Hayvan adına pasaport düzenleniyor. Yönetmelik pasaportun düzenlenmesi ve kaydın veri tabanına girilmesi için en çok 15 gün tanıyor.',
    ]},
    { kind: 'paragraf', metin: 'Kayıt için hayvanın kendisi ve sahibinin kimlik bilgileri gerekiyor. Yönetmelik ev hayvanı sahibini **16 yaş ve üzeri** kişi olarak tanımlıyor; sahip 16 ile 18 yaş arasındaysa sorumluluk veli ya da vasiye ait.' },

    { kind: 'baslik', metin: 'Yavru kedi ve köpek ne zaman kaydedilir?' },
    { kind: 'paragraf', metin: 'Yeni doğan bir hayvan için sahibi, **doğum tarihinden itibaren en geç altı ay içinde** başvurmak zorunda. Kuduz yönetmeliği ise köpeklerin üç aylıktan, kedilerin altı aylıktan itibaren kayıt altında olmasını istiyor. Bu yüzden köpek yavrusunu ilk kuduz aşısıyla aynı ziyarette çipletmek pratik bir yol. Aşı zamanlarını [[kedi-asi-takvimi|kedi aşı takvimi]] ve [[kopek-asi-takvimi|köpek aşı takvimi]] yazılarımızda anlattık.' },

    { kind: 'baslik', metin: 'PETVET kayıt ücreti ne kadar?' },
    { kind: 'paragraf', metin: 'Yönetmeliğe göre kimliklendirme masraflarını hayvan sahibi karşılıyor ve uygulama ücretini Bakanlık belirliyor. Klinikte muayene ya da aşı gibi başka işlemler de yapılıyorsa bunlar ayrı kalem olabiliyor. Klinik fiyatlarının nasıl oluştuğunu [[veteriner-ucretleri|veteriner ücretleri]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Kayıt yaptırmamanın cezası ne kadar?' },
    { kind: 'paragraf', metin: 'Kanunun 28. maddesi, kedi ve köpeğini kayıt altına aldırmayana **hayvan başına 1.200 TL** idari para cezası öngörüyor. Bu tutar kanunda sabit kalsa da Kabahatler Kanunu\'nun 17. maddesi gereği idari para cezaları her yıl başında yeniden değerleme oranıyla artırılıyor. Bakanlık 2023 için bu cezayı **3.642 TL** olarak duyurmuştu. Aynı kuralla ve her yıl açıklanan oranlarla hesaplanan tutarlar şöyle:' },
    { kind: 'tablo', basliklar: ['Yıl', 'Hayvan başına ceza', 'Dayanak'], satirlar: [
      ['2023', '3.642 TL', 'Bakanlık duyurusu'],
      ['2024', '5.771 TL', '%58,46 yeniden değerleme oranıyla'],
      ['2025', '8.306 TL', '%43,93 yeniden değerleme oranıyla'],
      ['2026', '10.423 TL', '%25,49 yeniden değerleme oranıyla'],
    ]},
    { kind: 'paragraf', metin: 'Cezayı il ve ilçe tarım ve orman müdürlükleri ile doğa koruma ve milli parklar şube müdürlükleri uyguluyor. Ceza kesildikten sonra hayvan yine çiplenip kaydediliyor; yani ceza, kayıt yükümlülüğünü ortadan kaldırmıyor. Hayvanını terk etmenin cezası çok daha ağır: kanundaki tutar hayvan başına 60.000 TL.' },

    { kind: 'baslik', metin: 'Kayıttan sonra neyi kaç gün içinde bildirmelisiniz?' },
    { kind: 'tablo', basliklar: ['Durum', 'Bildirim süresi', 'Nereye'], satirlar: [
      ['Hayvan kayboldu', '7 gün', 'İl veya ilçe müdürlüğü'],
      ['Hayvan öldü', '30 gün (pasaport teslim edilir)', 'İl veya ilçe müdürlüğü'],
      ['Hayvan başkasına geçti', '60 gün (yeni sahip başvurur)', 'İl veya ilçe müdürlüğü'],
      ['Pasaport kayboldu, çalındı', '60 gün', 'İl veya ilçe müdürlüğü'],
    ]},
    { kind: 'paragraf', metin: 'Kayıp bildirilen hayvan PETVET\'te **kayıp** olarak işaretleniyor ve sistemi kullanan hekimler bunu görebiliyor. Sahip değişikliğinde **Ev Hayvanı Sahip Değişikliği Belgesi** kullanılıyor; kayıt ve pasaport yeni sahip adına güncelleniyor.' },

    { kind: 'baslik', metin: 'Sokaktan ya da barınaktan sahiplenilen hayvan nasıl kaydedilir?' },
    { kind: 'paragraf', metin: 'Sahipsiz hayvanların kimliklendirilmesi yerel yönetimlerin görevi. Barınaktan sahiplenilen kedi ve köpeği barınağın sorumlu veteriner hekimi sisteme kaydediyor ve pasaportunu oluşturuyor. Sokaktan sahiplenilen hayvan için beyannameyle başvuruluyor; Bakanlık bu hayvanların cezasız kaydedildiğini duyurmuştu.' },

    { kind: 'baslik', metin: 'Kayıt nasıl sorgulanır?' },
    { kind: 'paragraf', metin: 'En kısa yol hayvanın **pasaportu:** mikroçip numarası ve kayıt bilgileri orada yazıyor. Pasaport elinizde değilse herhangi bir veteriner kliniğinde hayvanı okuyucuyla okutup numarayı öğrenebilir, kaydın durumunu il veya ilçe müdürlüğüne sorabilirsiniz. Adres ya da telefon değiştiğinde bilgileri güncel tutmak kaydın asıl işlevi: kaybolan hayvanın sahibine bu bilgilerle ulaşılıyor.' },
    { kind: 'uyari', metin: 'Yurt içinde başka bir şehre taşırken hayvanın pasaportunun yanınızda olması gerekiyor. Yurt dışına çıkışta mikroçip, pasaport ve PETVET kaydı birlikte isteniyor; ülkeye göre ek aşı ve test şartları da var.' },
  ],
  kontrolListesi: [
    'Mikroçip numarası pasaportta mı?',
    'Kayıttaki telefon güncel mi?',
    'Adres değişikliği bildirildi mi?',
    'Yavru 6 aylık olmadan çiplendi mi?',
    'Pasaport kolay bulunur yerde mi?',
  ],
  sss: [
    { soru: 'PETVET nedir?', cevap: 'Tarım ve Orman Bakanlığı\'nın Ev Hayvanı Kayıt Sistemi; mikroçip numarasıyla hayvanın ve sahibinin bilgilerini tutuyor.' },
    { soru: 'PETVET kaydı zorunlu mu?', cevap: 'Evet; 5199 sayılı kanun sahipli kedi ve köpeklerin kaydını zorunlu tutuyor ve son tarih 31 Aralık 2025\'ti.' },
    { soru: 'PETVET kaydı nerede yapılır?', cevap: 'Serbest çalışan veteriner hekimlerde ya da il ve ilçe tarım ve orman müdürlüklerinde.' },
    { soru: 'Yavru kediyi ne zaman kaydettirmeliyim?', cevap: 'Doğumdan itibaren en geç altı ay içinde; köpek yavrularında kuduz yönetmeliği üç aylıktan itibaren kayıt istiyor.' },
    { soru: 'Kayıt yaptırmamanın cezası ne kadar?', cevap: 'Kanundaki tutar hayvan başına 1.200 TL; yıllık yeniden değerlemeyle 2026 tutarı hayvan başına 10.423 TL\'ye ulaşıyor.' },
    { soru: 'Hayvanım kaybolursa ne yapmalıyım?', cevap: '7 gün içinde il veya ilçe müdürlüğüne bildirilmesi gerekiyor; hayvan PETVET\'te kayıp olarak işaretlenir.' },
    { soru: 'Sahiplendiğim hayvanın kaydını nasıl üzerime alırım?', cevap: 'Sahip değişikliği belgesiyle 60 gün içinde il veya ilçe müdürlüğüne başvurursunuz.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 4, 28 ve geçici madde 4)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi, Köpek ve Gelinciklerin Kimliklendirilmesi ve Kayıt Altına Alınmasına Dair Yönetmelik',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=24414&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Sahipli Hayvanların Dijital Kimliklendirilmesi (kamuoyu bilgilendirmesi, 27.12.2022)',
      adres: 'https://www.tarimorman.gov.tr/Haber/5652/Sahipli-Hayvanlarin-Dijital-Kimliklendirilmesi',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5326 sayılı Kabahatler Kanunu (madde 17, yeniden değerleme)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5326&MevzuatTertip=5',
    },
  ],
};
