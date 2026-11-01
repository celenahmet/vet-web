import type { BlogYazi } from './types';

export const petShopAcmak: BlogYazi = {
  slug: 'pet-shop-acmak',
  baslik: 'Pet Shop Açmak İçin Gerekenler 2026',
  ozet: 'Pet shop açmak için eğitim sertifikası, kuruluş izni, çalışma izni ve iş yeri veteriner hekimi gerekiyor. Adımlar ve belgeler resmî metinlere göre anlatıldı.',
  kapakAlt:
    'Pet shopta raflar arasında golden köpekle duran müşteri ve görevli',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Pet shop açmak için önce yerel yönetimlerin düzenlediği hayvan bakımı eğitimine katılıp sertifika almak, sonra il tarım ve orman müdürlüğünden önce kuruluş izni, ardından çalışma izni almak gerekiyor.** İş yerinde ayrıca bir iş yeri veteriner hekimi çalıştırmak da zorunlu. Bu sıra, 5199 sayılı Hayvanları Koruma Kanunu ile Tarım ve Orman Bakanlığı\'nın ev hayvanı yönetmeliklerinden geliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda adımları, istenen belgeleri ve açılıştan sonraki yükümlülükleri Resmî Gazete ve mevzuat.gov.tr metinlerine göre topladık. Pet shopta kedi ve köpek satışının nasıl yapıldığını ayrıca [[kedi-kopek-satmak-yasak-mi|kedi köpek satışı yasak mı]] yazımızda anlattık; burada konu, işyerini açma sürecidir.' },

    { kind: 'tablo', basliklar: ['Adım', 'Başvurulan yer', 'Ne gerekiyor?'], satirlar: [
      ['1. Eğitim', 'Yerel yönetimler', 'Hayvan bakımı ve korunması eğitimi, sertifika'],
      ['2. Kuruluş izni', 'İl tarım ve orman müdürlüğü', 'Dilekçe, planlar, su faturası ya da su kullanma belgesi'],
      ['3. Çalışma izni', 'İl tarım ve orman müdürlüğü', 'Veteriner hekim sözleşmesi, eğitim sertifikası'],
      ['4. Açılıştan sonra', 'Aynı müdürlük', 'Kayıtlar, satış belgeleri, altı aylık rapor, denetim'],
    ]},

    { kind: 'baslik', metin: 'Önce eğitim ve sertifika' },
    { kind: 'paragraf', metin: 'Kanunun 14. maddesi, hayvan bakımı eğitimi almamış kişilerin ev hayvanı satmasını yasaklıyor. Uygulama yönetmeliğine göre ev hayvanı satan kişiler, bu hayvanların bakımı ve korunmasıyla ilgili olarak yerel yönetimlerin düzenlediği eğitim programına katılıp sertifika almakla yükümlü. Eğitim sertifikasını almakla yükümlü olan kişi, satış yeri sahibi ya da sorumlu yöneticisi olarak tanımlanıyor.' },
    { kind: 'paragraf', metin: 'Eğitim programı rastgele bir kurs değil, yönetmelikte konuları sayılmış bir program:' },
    { kind: 'liste', maddeler: [
      'Ev Hayvanlarının Korunmasına Dair Avrupa Sözleşmesi ve CITES Sözleşmesi',
      '5199 sayılı Kanun ve ilgili yönetmelikler',
      'Hayvan etolojisi, hayvan davranışı, hayvan bakımı ve beslenmesi',
      'Kedi, köpek ve gelinciklerin kimliklendirilmesi ve kayıt altına alınması',
      'Zoonotik hastalıkların önlenmesi',
    ]},
    { kind: 'paragraf', metin: 'Eğitimcilerin arasında üniversitelerin öğretim elemanları, il tarım ve orman müdürlüğü ile belediyelerin ilgili personeli ve veteriner hekimler odasının görevlendireceği bir veteriner hekim sayılıyor.' },

    { kind: 'baslik', metin: 'Kuruluş izni için başvuru' },
    { kind: 'paragraf', metin: 'İş yeri açmak isteyen gerçek ya da tüzel kişi, ıslak ya da elektronik imzalı bir dilekçe ve ekindeki dosyayla il müdürlüğüne başvuruyor. Dosyada şunlar bulunuyor:' },
    { kind: 'liste', maddeler: [
      'Yönetmeliğin ekindeki **başvuru dilekçesi**',
      'İş yerinin yerleşim yeri ve çevresini gösteren **vaziyet ya da hâlihazır planı**',
      'İş yerinin bölümlerini ve kullanım amacını gösteren **plan örneği**',
      'Belediyeden alınan **su faturası sureti ya da su kullanma belgesi**',
      'Şirket kurulacaksa **şirket sözleşmesi** ya da ticaret sicil bilgisi',
    ]},
    { kind: 'paragraf', metin: 'Belgeler uygun bulunursa yer seçim komisyonu yerinde inceleme yapıyor. Komisyon, il müdürlüğündeki hayvan sağlığı biriminde görevli en az iki veteriner hekimden oluşuyor. Yer uygun bulunursa kuruluş izni veriliyor. Bu izin satış yerleri için üç ay geçerli; iş yerini bu sürede hazırlayamayanlara il müdürlüğü uygun görürse aynı miktarda ilave süre verebiliyor.' },

    { kind: 'baslik', metin: 'Çalışma izni için gerekenler' },
    { kind: 'paragraf', metin: 'İş yeri hazırlandıktan sonra ikinci başvuru yapılıyor. Dilekçenin ekinde iki belge isteniyor: veteriner hekimle yapılmış sözleşme ve satış yerleri için yerel yönetimlerin düzenlediği eğitim sertifikası. İl müdürlüğü yerinde inceleme yapıp iş yeri açma raporu düzenliyor, rapora uygun bulunan yerlere iş yeri çalışma izin belgesi veriliyor. İzin verilen iş yerlerinin bilgisi bölge veteriner hekimler odasına bildiriliyor.' },
    { kind: 'paragraf', metin: 'Çalışma izni kişiye ve işyerine bağlı. Belgede yazılı adres, faaliyet alanı ya da faaliyet gösterilen türlerden biri değişirse çalışma izni geçerliliğini kaybediyor. Taşınma ya da yeni bir hayvan türü eklemek bu yüzden önceden il müdürlüğüne sorulması gereken bir konu.' },

    { kind: 'baslik', metin: 'İş yeri veteriner hekimi zorunlu' },
    { kind: 'paragraf', metin: 'Yönetmelik, kapsamındaki bütün iş yerlerinde veteriner hekim istihdamını zorunlu tutuyor. Sözleşme, muayenehane, klinik, poliklinik ya da hayvan hastanesinde çalışan bir veteriner hekimle, en az bir yıllık ve bölge veteriner hekimler odası onaylı olarak yapılıyor. Hekimin çalışma gün ve saatlerini ve alacağı ücreti oda belirliyor. Kamuda çalışan veteriner hekimler bu hizmeti veremiyor.' },
    { kind: 'paragraf', metin: 'İş yeri veteriner hekimi, iş yerinin sağlık ve teknik yönden mevzuata uygun çalışmasından, hayvanların aşılama ve ilaçlamalarının yapılmasından ve temizlik ile dezenfeksiyonun yaptırılmasından işverenle birlikte sorumlu. Hayvanların aşı ve ilaçlama tarihleri gibi kayıtları da hekim tutuyor. Veteriner hekim seçerken [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazımız da yol gösterebilir.' },
    { kind: 'yanilgi', baslik: '"Pet shopun veteriner hekimi dükkânı muayenehane gibi kullanabilir"', metin: 'Yönetmelik, iş yeri veteriner hekiminin iş yerini amacı dışında muayene, tedavi, ilaç ve aşı uygulaması gibi amaçlarla kullanmasını açıkça yasaklıyor. Pet shop bir klinik değil, ticari bir satış yeri. Hasta, yaralı ya da sakat hayvanların ise iş yerinde ayrı bir bölümde barındırılması gerekiyor. Bir hayvanın sağlık durumuyla ilgili kararı veteriner hekim veriyor.' },

    { kind: 'baslik', metin: 'İş yerinde aranan şartlar' },
    { kind: 'paragraf', metin: 'Çalışma izni için iş yerinin yönetmelikteki asgari teknik ve sağlık şartlarını taşıması zorunlu. Başlıcaları şunlar:' },
    { kind: 'liste', maddeler: [
      'Zemin ve duvarlar **kolay yıkanabilen, su geçirmez** bir malzemeyle kaplı olmalı; zeminde süzgeç bulunmalı',
      'Yeterli kapasitede **su tesisatı** ve iş yerinin havasını temizleyebilen **havalandırma** olmalı',
      'İş yeri **haftada bir** dezenfekte edilmeli; kafes ve yemlik gibi malzemeler her gün temizlenmeli',
      'Farklı türdeki hayvanlar **ayrı kafes ya da bölümlerde** tutulmalı; kafesin üzerinde türü, ırkı ve yaşı yazan etiket bulunmalı',
      'Hasta, yaralı ya da sakat hayvanlar **ayrı bölümde** barındırılmalı',
      'Ürün satışı yapılıyorsa ürünler **zeminden en az 10 cm yüksekte**, hayvanların temas edemeyeceği raflarda durmalı',
    ]},
    { kind: 'paragraf', metin: 'Bitişikte insan gıdası üreten bir iş yeri varsa pet shopun gerekli tedbirleri alması isteniyor. Yönetmelik ayrıca iş yeri sahibini, bu şartları sağlamaktan sorumlu tutuyor.' },

    { kind: 'baslik', metin: 'Pet shopta hangi hayvanlar satılır?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin ev hayvanı tanımına kedi, köpek, gelincik, süs balıkları, sürüngenler, kemirgenler, evcil tavşanlar, kabuklu hayvanlar, tüm kuşlar, amfibik hayvanlar ve omurgasızlar giriyor. Ancak kedi ve köpekte kural farklı: 14 Temmuz 2022\'den sonra ev hayvanı satış yerlerinde sahipli olanlar dışında kedi ve köpek bulundurulamıyor. Pet shop, izinli üretim yerlerindeki kedi ve köpeklerin görsellerini kullanarak yalnızca satışa aracılık edebiliyor.' },
    { kind: 'paragraf', metin: 'Satış kuralları her tür için de geçerli. Onaltı yaşından küçüklere ev hayvanı satılamıyor. İthali yasak hayvanın satışı yasak. Çevreden ve doğadan alınan ya da izinli kuruluştan alınmayan hayvanlar da satılamıyor. Hangi türlerin sorun çıkarabileceğine örnek olarak [[kaplumbaga-beslemek-yasak-mi|kaplumbağa beslemek yasak mı]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Açıldıktan sonra yükümlülükler' },
    { kind: 'paragraf', metin: 'Çalışma izni almak sürecin sonu değil. İş yerinde bulunan hayvanlar kayıt defterine işleniyor ve satılan her hayvan için iki nüsha hayvan satış belgesi düzenlenip bir nüshası hayvan sahibine veriliyor. Bakanlıkça kimliklendirilmesi istenen türlerin kimliklendirilmesi ve kayıt altına alınması gerekiyor; mikroçip takılması uygun hayvanlar kimliklendirme yönetmeliğine göre kayıt altına aldırılıyor. Süreç için [[mikrocip-nedir|mikroçip nedir]] ve [[petvet-kayit|PETVET kaydı]] yazılarımıza bakılabilir.' },
    { kind: 'liste', maddeler: [
      '**Defterler:** Bulundurulması gereken defterlerin sayfaları il müdürlüğüne numaralandırılıp mühürletiliyor',
      '**Faaliyet raporu:** İş yeri sahibi ya da sorumluları altı ayda bir il ya da ilçe müdürlüğüne rapor veriyor',
      '**Denetim:** İş yerleri yılda en az bir kez iki denetim elemanınca denetleniyor',
      '**Kapatma:** Faaliyeti durduran ya da kapatan iş yeri sahibi bunu bir ay öncesinden il müdürlüğüne yazıyla bildiriyor',
    ]},
    { kind: 'paragraf', metin: 'Yönetmelik hükümlerine aykırılık halinde 5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu ile 5199 sayılı Kanun ve ilgili mevzuata göre işlem yapılıyor. Başvuru formları ve ayrıntılı usuller zamanla değişebildiği için, başvurudan önce il tarım ve orman müdürlüğünden güncel durumu sormak yerinde olur.' },
  ],
  kontrolListesi: [
    'Eğitim sertifikası alındı mı?',
    'Kuruluş izni süresi içinde mi?',
    'Veteriner hekim sözleşmesi var mı?',
    'Çalışma izin belgesi alındı mı?',
    'Hayvanlar etiketli ve kayıtlı mı?',
    'Altı aylık rapor hazır mı?',
  ],
  sss: [
    { soru: 'Pet shop açmak için sertifika gerekir mi?', cevap: 'Evet, ev hayvanı satan kişilerin yerel yönetimlerin düzenlediği hayvan bakımı ve korunması eğitimine katılıp sertifika alması gerekiyor. Kanunun 14. maddesi, bu eğitimi almamış kişilerin ev hayvanı satmasını yasaklıyor. Sertifika, çalışma izni başvurusunun da zorunlu belgelerinden biri.' },
    { soru: 'Pet shopta veteriner hekim çalıştırmak zorunlu mu?', cevap: 'Evet, yönetmelik kapsamındaki bütün iş yerlerinde veteriner hekim istihdamı zorunlu. Hekimle, muayenehane, klinik, poliklinik ya da hayvan hastanesinde çalışan biri olarak en az bir yıllık ve oda onaylı bir sözleşme yapılıyor. Kamuda çalışan hekimler bu hizmeti veremiyor.' },
    { soru: 'Kuruluş izni ne kadar geçerli?', cevap: 'Satış yerleri için kuruluş izni üç ay geçerli. İş yerini bu sürede hazırlayamayanlara il müdürlüğü uygun görürse aynı miktarda ilave süre verebiliyor. Süre dolmadan iş yeri hazırlanıp çalışma izni için başvuru yapılması gerekiyor.' },
    { soru: 'Pet shopta kedi köpek satılabilir mi?', cevap: 'Satış yerinde sahipli olanlar dışında kedi ve köpek bulundurulamıyor. Pet shop yalnızca izinli üretim yerlerindeki hayvanların görsellerini kullanarak satışa aracılık edebiliyor ve hayvan üretim yerinden teslim alınıyor. Satış bilgileri beş iş günü içinde tarım ve orman müdürlüğüne bildiriliyor.' },
    { soru: 'Çalışma izni başka adrese taşınınca geçerli kalır mı?', cevap: 'Hayır. Çalışma izni belgede yazılı adres, faaliyet alanı ve faaliyet gösterilen türler için geçerli. Bunlardan biri değişirse izin geçerliliğini kaybediyor. Taşınma ya da yeni tür ekleme planı varsa önce il tarım ve orman müdürlüğüne başvurmak gerekiyor.' },
    { soru: 'Hangi hayvanlar ev hayvanı sayılıyor?', cevap: 'Yönetmeliğe göre ev hayvanı tanımına köpek, kedi, gelincik, süs balıkları, sürüngenler, kemirgenler, evcil tavşanlar, kabuklu hayvanlar, tüm kuşlar, amfibik hayvanlar ve omurgasızlar giriyor. Kedi ve köpek için satış kuralları ayrıdır: satış yerinde yalnızca sahipli olanlar bulundurulabiliyor ve satış izinli üretim yerleri üzerinden yapılıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 10 ve 14)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13 Aralık 2024, sayı 32751), madde 11 ve 12',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Ev ve Süs Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik (8 Ekim 2011, sayı 28078)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2011/10/20111008-4.htm',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Aynı Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (18 Şubat 2020, sayı 31043), madde 3 ve 4',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2020/02/20200218-4.htm',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Aynı Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (6 Nisan 2022, sayı 31801), madde 5 ve 11',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2022/04/20220406-17.htm',
    },
  ],
};
