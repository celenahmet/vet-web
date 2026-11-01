import type { BlogYazi } from './types';

export const veterinerlikKacYil: BlogYazi = {
  slug: 'veterinerlik-kac-yil',
  baslik: 'Veterinerlik Kaç Yıl? Dersler ve Staj',
  ozet: 'Veterinerlik hazırlık hariç beş yıl, yani on yarıyıl sürüyor. Ders türleri, devam şartı, zorunlu staj ve intörnlük örnek yönetmeliklerle anlatılıyor.',
  kapakAlt:
    'Anatomi modellerinin önünde golden köpeği stetoskopla dinleyen öğrenci',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Veteriner fakültesi, yabancı dil hazırlık sınıfı hariç beş yıl, yani on yarıyıl sürüyor; azami süre ise sekiz yıl.** Bu sürenin son yarıyılı intörnlüğe ayrılıyor, zorunlu staj da öğrencinin yıllar içinde tamamlaması gereken ayrı bir yükümlülük olarak programda yer alıyor.' },
    { kind: 'paragraf', metin: 'Süre sorusunun cevabı kısa, ama beş yılın içinde neler olduğu çoğu zaman merak ediliyor: hangi tür dersler okutuluyor, devam zorunluluğu var mı, staj kaç gün sürüyor, intörnlük ne zaman başlıyor? Aşağıda bu soruları, Resmî Gazete\'de yayımlanan iki veteriner fakültesi yönetmeliğine dayanarak cevaplıyoruz. Ayrıntılar fakülteden fakülteye değişebildiği için örnekler, kendi fakültenizin güncel yönetmeliğinin yerine geçmiyor.' },

    { kind: 'tablo', basliklar: ['Konu', 'Yönetmeliklerdeki örnek'], satirlar: [
      ['Eğitim süresi', 'Hazırlık hariç beş yıl, on yarıyıl'],
      ['Azami süre', 'Sekiz yıl'],
      ['Bir yarıyıl', 'En az 14 hafta'],
      ['Toplam ders kredisi', 'Beş yılda en az 300 AKTS'],
      ['Zorunlu staj (Van YYÜ)', 'En az 20 iş günü ve 160 saat'],
      ['İntörnlük', 'Onuncu yarıyıl'],
    ]},

    { kind: 'baslik', metin: 'Veterinerlik kaç yıl sürüyor?' },
    { kind: 'paragraf', metin: 'Tekirdağ Namık Kemal Üniversitesi Veteriner Fakültesi\'nin 22 Temmuz 2026\'da yayımlanan yönetmeliğine göre eğitim-öğretim süresi yabancı dil hazırlık sınıfı hariç beş yıl, azami süre sekiz yıl. Van Yüzüncü Yıl Üniversitesi\'nin yönetmeliği de normal öğrenim süresini beş, azami süreyi sekiz yıl olarak belirliyor. Yani hazırlık sınıfı varsa, o yıl beş yıllık süreye eklenmiyor.' },
    { kind: 'paragraf', metin: 'Beş yıl, on yarıyıla denk geliyor: Van Yüzüncü Yıl\'ın yönetmeliği mezuniyet şartını "on yarıyıllık zorunlu ve seçmeli dersler" üzerinden tanımlıyor. Her yarıyıl en az 14 haftadan oluşuyor; güz ve bahar olmak üzere bir yılda iki yarıyıl var.' },
    { kind: 'yanilgi', baslik: '"Beş yıl dolunca diploma gelir"', metin: 'Beş yıl normal süre, mezuniyet güvencesi değil. Mezun olmak için derslerin başarılması, devam şartının sağlanması ve not ortalamasının belirli bir düzeyde olması gerekiyor. Beş yılın sonunda mezun olamayanlar azami süre olan sekiz yıla kadar kayıt yaptırabiliyor, ancak ilgili yarıyılın öğrenci katkı payını ya da öğrenim ücretini ödemek koşuluyla.' },

    { kind: 'baslik', metin: 'Hangi dersler okutuluyor?' },
    { kind: 'paragraf', metin: 'Derslerin tam listesi yönetmelikte değil, fakültenin ders planında yer alıyor. Van Yüzüncü Yıl yönetmeliğine göre ders planlarını Fakülte Kurulu düzenliyor ve Senatonun onayıyla yürürlüğe giriyor. Bu yüzden iki fakültenin ders adları ve yarıyıllara dağılımı birebir aynı olmayabiliyor. Yönetmeliklerden anlaşılan, derslerin türleri.' },
    { kind: 'liste', maddeler: [
      '**Zorunlu dersler:** Öğrencinin almakla yükümlü olduğu dersler; intörn eğitimi de bu gruba giriyor.',
      '**Ortak zorunlu dersler:** Atatürk İlkeleri ve İnkılap Tarihi, Türk Dili ve yabancı dil. Van Yüzüncü Yıl\'da ilk iki yarıyılda ders planında yer alıyor.',
      '**Seçmeli dersler:** Öğrencinin alan içinden ya da alan dışından seçtiği dersler. Van Yüzüncü Yıl\'da her sınıf seviyesinde ve her yarıyılda en az altı Avrupa Kredisi seçmeli ders başarmak gerekiyor.',
      '**Uygulama ve klinik çalışmalar:** Teorik derslerin yanında uygulamalı dersler, klinik uygulamalar ve laboratuvar çalışmaları da programda yer alıyor.',
      '**Ön koşullu dersler:** Bazı dersler, belirli derslerin başarılmasına bağlı. Ön koşul başarılmadan o ders alınamıyor.',
    ]},
    { kind: 'paragraf', metin: 'Kredi tarafında Tekirdağ Namık Kemal yönetmeliği, beş yıllık eğitim boyunca verilen derslerin toplam kredi değerinin en az 300 AKTS olması gerektiğini söylüyor. Haftalık bir saatlik teorik ders ya da iki saatlik uygulama, laboratuvar ve klinik çalışma bir ulusal krediye eşdeğer sayılıyor.' },

    { kind: 'baslik', metin: 'Derslere devam zorunlu mu?' },
    { kind: 'paragraf', metin: 'Van Yüzüncü Yıl yönetmeliğinde teorik derslere en az yüzde 70, teorik derse ait uygulamaya en az yüzde 80 oranında devam zorunlu. Yalnızca uygulamadan oluşan derslerde de devam oranı en az yüzde 80 olmalı. Devam şartını sağlayamayan öğrenci o dersten devamsız sayılıyor ve final ile bütünleme sınavlarına alınmıyor.' },
    { kind: 'paragraf', metin: 'Fakülteler oranları kendi yönetmeliklerinde belirlediği için bu rakamlar yalnızca bir örnek. Tercih ettiğiniz fakültenin yüzdeleri farklı olabiliyor.' },

    { kind: 'baslik', metin: 'Zorunlu staj nasıl işliyor?' },
    { kind: 'paragraf', metin: 'Staj, derslerden ayrı bir yükümlülük. Van Yüzüncü Yıl yönetmeliğine göre öğrenciler en erken sekizinci yarıyılın sonunda, yirmi iş günü ve yüz altmış saatten az olmamak üzere staj yapıyor. Staja devam zorunlu; ancak öğrenci, dekanlıktan onay almak şartıyla stajını daha sonraki zamanlarda da yapabiliyor.' },
    { kind: 'paragraf', metin: 'Tekirdağ Namık Kemal yönetmeliği ise stajın ayrıntısını yönergeye bırakıyor: veteriner fakültesi öğrencilerinin yapacağı stajın esasları ilgili yönergeyle belirleniyor. Fakülte kurulunun yaz stajlarını planlayabildiği de aynı yönetmelikte yazıyor. Yani stajın süresi, yeri ve zamanlaması için öğrencinin kendi fakültesinin staj yönergesine bakması gerekiyor.' },

    { kind: 'baslik', metin: 'Son yarıyıl: intörnlük' },
    { kind: 'paragraf', metin: 'Tekirdağ Namık Kemal yönetmeliği, beşinci eğitim-öğretim yılının ikinci yarıyılını, yani onuncu yarıyılı, Veteriner Hekimliği Olgunlaşma Uygulama (İntörn) Eğitimi olarak tanımlıyor. Bu eğitim multidisipliner ve tümü tek ders sayılıyor. Van Yüzüncü Yıl\'da da intörn programı onuncu yarıyılda uygulanıyor ve öğrenciler gruplara ayrılarak eğitim alıyor.' },
    { kind: 'paragraf', metin: 'İntörnlüğe başlamak için bir koşul var: Van Yüzüncü Yıl yönetmeliğinde öğrencinin fakülte ders planındaki dokuz yarıyıllık zorunlu ve seçmeli derslerin tamamından başarılı olması gerekiyor. Dolayısıyla alttan kalan dersler, son yarıyıla geçişi ve mezuniyet tarihini doğrudan etkileyebiliyor.' },

    { kind: 'baslik', metin: 'Klinik pratik neden bu kadar önemli?' },
    { kind: 'paragraf', metin: 'Yönetmelikler biçimsel çerçeveyi çiziyor; mesleğin gündelik tarafı için hakemli bir çalışma ilgi çekici. Belçika\'daki Ghent Üniversitesi\'nde 82 son sınıf veteriner öğrencisi ve 53 yeni mezunla yapılan görüşmelerde en önemli beceriler hayvan tutma, klinik muayene, uygulamalar ve iletişim olarak öne çıktı.' },
    { kind: 'paragraf', metin: 'Aynı çalışmada özgüveni artıran temel etken, klinik rotasyonlarda ve dış kurumlardaki rotasyonlarda tekrar tekrar yapılan pratik oldu. Beceri laboratuvarı ilk adım olarak değerli bulunsa da klinik ortamda tekrarlı uygulamanın hâlâ belirleyici olduğu sonucuna varıldı. Çalışma tek bir fakülteyi inceliyor; Türkiye\'deki fakültelere birebir uygulanamaz, ama staj ve intörnlüğün neden programın ayrı bir parçası olduğunu anlamaya yardımcı oluyor.' },

    { kind: 'baslik', metin: 'Mezuniyet için ne gerekiyor?' },
    { kind: 'paragraf', metin: 'Van Yüzüncü Yıl yönetmeliğine göre mezun olmak için on yarıyıllık zorunlu ve seçmeli derslerin devam şartını yerine getirmek, bu derslerden başarılı not almak ve ağırlıklı not ortalamasının en az 2,00 olması gerekiyor. Bunun yanında en az üç yüz Avrupa Kredisi ders, on Avrupa Kredisi de zorunlu stajdan olmak üzere toplam en az üç yüz on Avrupa Kredisi isteniyor.' },
    { kind: 'paragraf', metin: 'Beş yıllık programı başarıyla tamamlayanlara yüksek lisans diplomasına eş değer veteriner hekim diploması ve veteriner hekim unvanı veriliyor. Unvanın hukuki dayanağı 6343 sayılı kanunun 1. maddesi: veteriner fakültelerinden diploma alanlara "veteriner hekim" deniyor. Diplomadan sonraki adımları [[veteriner-hekim-nasil-olunur|veteriner hekim nasıl olunur]] yazımızda anlattık.' },
    { kind: 'uyari', metin: 'Süre, devam oranı, staj ve intörn düzeni fakülteye göre değişebiliyor ve yönetmelikler güncelleniyor. Kayıt olacağınız fakültenin güncel yönetmeliğine ve staj yönergesine bakmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Veteriner hekimlikle karıştırılan ön lisans yolunu [[veteriner-hekim-tekniker-farki|veteriner hekim ve tekniker farkı]], mezuniyet sonrası kazanç tarafını ise [[veteriner-hekim-maaslari|veteriner hekim maaşları]] yazılarımızda ele aldık.' },
  ],
  kontrolListesi: [
    'Hazırlık sınıfı var mı?',
    'Güncel yönetmelik elinizde mi?',
    'Devam şartını biliyor musunuz?',
    'Staj yönergesini okudunuz mu?',
    'İntörn dönemini öğrendiniz mi?',
    'Gerekli AKTS toplamı belli mi?',
  ],
  sss: [
    { soru: 'Veterinerlik kaç yıl?', cevap: 'Veterinerlik, yabancı dil hazırlık sınıfı hariç beş yıl sürüyor. Bu süre on yarıyıla denk geliyor ve son yarıyıl intörnlüğe ayrılıyor. İncelenen iki fakülte yönetmeliğinde azami öğrenim süresi sekiz yıl olarak belirlenmiş.' },
    { soru: 'Hazırlık sınıfı beş yıla dahil mi?', cevap: 'Hayır, yabancı dil hazırlık sınıfı beş yıllık süreye dahil değil. Tekirdağ Namık Kemal Üniversitesi yönetmeliği eğitim süresini hazırlık sınıfı hariç beş yıl olarak yazıyor. Hazırlığın gerekip gerekmediği öğrencinin yabancı dil durumuna ve fakültenin düzenine bağlı.' },
    { soru: 'Veterinerlikte staj zorunlu mu?', cevap: 'Evet, incelenen yönetmeliklerde staj programın bir parçası. Van Yüzüncü Yıl Üniversitesi\'nde en erken sekizinci yarıyılın sonunda, en az yirmi iş günü ve yüz altmış saat staj yapılıyor. Tekirdağ Namık Kemal\'de esaslar staj yönergesiyle belirleniyor.' },
    { soru: 'İntörnlük kaçıncı yarıyılda başlıyor?', cevap: 'İntörnlük onuncu yarıyılda, yani beşinci yılın ikinci yarısında uygulanıyor. Van Yüzüncü Yıl\'da başlamak için dokuz yarıyıllık zorunlu ve seçmeli derslerin tamamından başarılı olmak gerekiyor. Fakülteye göre uygulama ilkeleri farklılaşabiliyor.' },
    { soru: 'Veteriner fakültesinde devam zorunlu mu?', cevap: 'Evet, devam zorunlu. Van Yüzüncü Yıl yönetmeliğinde teorik derslerde en az yüzde 70, teorik derse ait uygulamada ise en az yüzde 80 devam isteniyor. Şartı sağlamayan öğrenci o dersin final ve bütünleme sınavlarına alınmıyor.' },
    { soru: 'Veteriner fakültesinden en geç kaç yılda mezun olunur?', cevap: 'İncelenen iki yönetmelikte azami öğrenim süresi sekiz yıl. Beş yılın sonunda mezun olamayan öğrenci, ilgili yarıyılın katkı payını ya da öğrenim ücretini ödeyerek kayıt yaptırıp öğrencilik statüsünü sürdürebiliyor. Kesin kurallar fakülteye göre değişiyor.' },
    { soru: 'Mezun olmak için not ortalaması kaç olmalı?', cevap: 'Van Yüzüncü Yıl yönetmeliğinde ağırlıklı not ortalamasının en az 2,00 olması isteniyor. Ayrıca toplam en az 310 Avrupa Kredisi, bunun 10\'u zorunlu stajdan olmak üzere, alınmış olmalı. Diğer fakültelerde oran ve kredi farklı olabiliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Tekirdağ Namık Kemal Üniversitesi Veteriner Fakültesi Eğitim-Öğretim ve Sınav Yönetmeliği (22.07.2026, sayı 33317)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2026/07/20260722-2.htm',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Van Yüzüncü Yıl Üniversitesi Veteriner Fakültesi Eğitim-Öğretim ve Sınav Yönetmeliği (13.10.2024)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/10/20241013-5.htm',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarz ve Mesai Şekillerine Dair Kanun (madde 1)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=6343&MevzuatTertip=3',
    },
    {
      kurum: 'Ghent Üniversitesi Veteriner Hekimlik Fakültesi',
      baslik: 'Students\' and Recent Graduates\' Perception of Clinical and Communication Skills Training in the Veterinary Curriculum',
      yazarlar: 'Martlé V, Valcke M, Decloedt A',
      dergi: 'Journal of Veterinary Medical Education',
      yil: 2026,
      kunye: 'e20250051',
      doi: '10.3138/jvme-2025-0051',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41587405/',
    },
  ],
};
