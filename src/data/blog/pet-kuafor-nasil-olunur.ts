import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI. Cerceve MYK'nin Evcil Hayvan Kuaforu (Seviye 3) ulusal meslek
 * standardi (18UMS0709-3). Kuaforun izin durumu icin yonetmelikte ayri yer turu
 * bulunmadigi icin "su izin gerekir" CUMLESI YAZILMADI; okur il mudurlugune ve
 * belediyeye yonlendirildi. MYK belgelendirmesinin guncel durumu dogrulanamadi.
 */
export const petKuaforNasilOlunur: BlogYazi = {
  slug: 'pet-kuafor-nasil-olunur',
  baslik: 'Pet Kuaför Nasıl Olunur? Kurs ve Sertifika',
  ozet: 'Pet kuaförlüğünün resmî çerçevesi MYK standardında: görevler, kurs içeriği, belge ayrımı, çalışma riskleri ve iş yeri açarken sorulacaklar.',
  kapakAlt:
    'Bakım masasında kıvırcık tüylü köpeği tarayan pet kuaför',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-15',
  bloklar: [
    { kind: 'paragraf', metin: '**Pet kuaförlüğünün resmî çerçevesi, Mesleki Yeterlilik Kurumunun (MYK) Evcil Hayvan Kuaförü (Seviye 3) ulusal meslek standardı.** Standart 21 Aralık 2018 tarihli Resmî Gazete\'de (mükerrer, sayı 30632) yayımlandı ve mesleğe ilişkin ayrıca bir gereklilik öngörmüyor; nitelik, tanımlanan görevleri yapabilme bilgi ve becerisine bağlanıyor.' },
    { kind: 'paragraf', metin: 'Standartta meslek, tüy kesimi yapan, evcil hayvanı yıkayan, tırnak ve pati bakımı ile diğer bakımları yapan nitelikli kişi olarak tanımlanıyor. Sınır da aynı metinde çiziliyor: sağlık hizmetine giren her konuda kapı veteriner hekime açılıyor.' },

    { kind: 'baslik', metin: 'Standart kuaförden ne bekliyor' },
    { kind: 'paragraf', metin: 'MYK standardı işi yedi görev altında topluyor:' },
    { kind: 'liste', maddeler: [
      'İş sağlığı ve güvenliği, çevre koruma ve kalite gerekliliklerini uygulamak',
      'İş organizasyonu yapmak: randevu, kayıt ve müşteri ile görüşme',
      'Tüy kesimi yapmak',
      'Yıkama yapmak: yıkama, kurutma ve kuru şampuan',
      'Tırnak ve pati bakımı yapmak',
      'Diğer bakımları yapmak: diş fırçalama, deri ve tüy bakımı, tüy boyama',
      'Mesleki gelişim faaliyetlerini yürütmek',
    ] },
    { kind: 'paragraf', metin: 'Listenin ilk görevinin iş sağlığı ve güvenliği olması dikkat çekiyor. Standart, çalışanın kendisini, çevresindekileri ve hayvanları riske atmayacak şekilde çalışmasını başarım ölçütleri arasında sayıyor.' },

    { kind: 'baslik', metin: 'Kursta hangi içerik aranmalı' },
    { kind: 'paragraf', metin: 'Standardın bilgi ve beceri listesi, bir kursun programını değerlendirmek için kullanışlı bir ölçü. Aşağıdaki tabloda listeden bazı başlıklar ve kursta aranabilecek karşılıkları yer alıyor.' },
    { kind: 'tablo', basliklar: ['Standartta geçen bilgi ve beceri', 'Kursta aranabilecek karşılığı'], satirlar: [
      ['Hayvan tutuş şekilleri, hayvanla iletişim kurma ve yaklaşma', 'Güvenli sabitleme ve yaklaşma uygulaması'],
      ['Temel hayvan ırkları ve cinsleri bilgisi', 'Irka ve tüy tipine göre kesim modelleri'],
      ['Makas ve tıraş makinesi kullanım becerisi', 'Uygulamalı kesim saatleri'],
      ['Hayvan yıkama bilgisi ve becerisi', 'Yıkama ve kurutma uygulaması'],
      ['İş sağlığı ve güvenliği bilgisi', 'Ekipman ve koruyucu donanım eğitimi'],
      ['Basit ilkyardım ve acil durum bilgisi', 'İlkyardım ve acil durum modülü'],
      ['Mesleğe ilişkin yasal düzenlemeler, kayıt tutma', 'Mevzuat ve müşteri kaydı konuları'],
    ] },
    { kind: 'paragraf', metin: 'Programında hayvan tutuşu, ırk bilgisi ve iş güvenliği geçmeyen bir kurs, standardın tarif ettiği mesleğin yalnız bir kısmını öğretiyor olabilir. Bu yüzden kayıttan önce program ayrıntısını yazılı istemek önerilir.' },

    { kind: 'baslik', metin: 'Kurs sertifikası ile resmî belge' },
    { kind: 'paragraf', metin: 'Standart, belgelendirmenin nasıl yapılacağını da söylüyor. Standardı esas alan ulusal yeterliliklere göre belgelendirme için yapılacak ölçme ve değerlendirme, gerekli şartların sağlandığı ölçme ve değerlendirme merkezlerinde yazılı ve/veya sözlü teorik ve uygulamalı olarak gerçekleştirilecek. İşlemler MYK Sınav, Ölçme, Değerlendirme ve Belgelendirme Yönetmeliği çerçevesinde yürütülüyor.' },
    { kind: 'yanilgi', baslik: '"Kursu bitirdim, elimdeki sertifika resmî meslek belgesi"', metin: 'Standartta belgelendirme, ölçme ve değerlendirme merkezlerinde yapılan sınava bağlanıyor. Bir kursun düzenlediği katılım belgesinin bu sistemle ilişkisi belgede açıkça yazmıyorsa kurstan sorulması gerekiyor: belge hangi kurum adına ve hangi sistemde düzenleniyor, yazılı olarak öğrenilmeli.' },
    { kind: 'paragraf', metin: 'Standarda dayalı ulusal yeterliliğin ve belgelendirme yapan kuruluşların güncel durumu zamanla değişebiliyor. Başvurudan önce MYK portalından kontrol etmek gerekiyor.' },

    { kind: 'baslik', metin: 'Çalışma ortamı sanıldığından yorucu' },
    { kind: 'paragraf', metin: 'Standart çalışma ortamını iyi aydınlatılmış ve havalandırılmış ama gürültülü, kokulu, hayvanların bulunduğu alanlar olarak tarif ediyor. İşin yoğunluğuna göre uzun süreli ve yoğun tempoda çalışmanın gerekebileceğini, kaza ve yaralanma riskleri bulunduğunu da açıkça yazıyor.' },
    { kind: 'paragraf', metin: 'Bu tarifi bir çalışma destekliyor. Tayvan\'da 180 pet kuaförüyle yapılan kesitsel araştırmada katılımcıların **%95\'i** en az bir vücut bölgesinde kas iskelet sistemi şikâyeti bildirdi. En çok etkilenen bölgeler sağ omuz (%71,7), boyun (%70,6), üst sırt ve bel (ikisi de %65,6) oldu. Orta ve ağır düzeyde tükenmişlik kişisel olarak %43,3, işle ilgili olarak %37,2 oranında görüldü. Küvet derinliğinin 46 cm ve üzeri olması ile ayarlanamayan kesim masaları şikâyetlerle ilişkili bulundu.' },
    { kind: 'paragraf', metin: 'Araştırma kolayda örneklemeyle ve anketle yapıldığı için neden sonuç ilişkisi kurmuyor; yine de ekipmanın boyutunun ve ayarlanabilirliğinin iş yeri seçerken bakılacak bir ölçü olduğunu gösteriyor.' },
    { kind: 'paragraf', metin: 'Solunum yolu için elimizdeki kanıt daha sınırlı. 2017\'de bildirilen tek bir vaka, hemen her gün köpek tıraşı yapan bir kuaförde piretrin içeren böcek ilaçlı spreylerin kullanımıyla ilişkili bir akciğer hastalığını anlatıyor. Yazarlar, bu meslekte sürekli maruziyetin bir risk etkeni olabileceği sonucuna varıyor. Tek vaka sıklık hakkında bir şey söylemiyor; ama iyi havalandırılmış ortamın ve koruyucu donanımın neden standardın parçası olduğunu açıklıyor.' },

    { kind: 'baslik', metin: 'Veteriner hekimin işi nerede başlıyor' },
    { kind: 'paragraf', metin: 'Standart sınırı kendisi çiziyor. Sedasyon, anestezi, ilaç kullanımı gibi veteriner hekimlik sağlık hizmetine giren uygulamalar gerektiğinde kuaförün müşteriyi veteriner hekime yönlendirmesi, başarım ölçütü olarak yazılı. Kesim sırasında hayvanın derisinde karşılaşılan sağlık sorunlarını müşteriye bildirmek de görev: yani kuaför gördüğünü söylüyor, ne olduğuna karar vermiyor.' },
    { kind: 'uyari', metin: 'Bakım sırasında hayvanın derisinde ya da patisinde olağan görünmeyen bir durum fark eden sahibin vakit kaybetmeden veteriner hekime başvurması önerilir. Kuaför gözlemini iletebilir; teşhis ve tedavi veteriner hekimin işidir.' },
    { kind: 'paragraf', metin: 'Standart tırnak ve pati bakımını da ayrı bir görev sayıyor. Evde tırnak bakımı yapmak isteyen sahipler için [[kopek-tirnagi-nasil-kesilir|köpek tırnağı nasıl kesilir]] ve [[kedi-tirnagi-nasil-kesilir|kedi tırnağı nasıl kesilir]] yazıları var.' },

    { kind: 'baslik', metin: 'İş yeri açmayı düşünenler için' },
    { kind: 'paragraf', metin: 'Tarım ve Orman Bakanlığının Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmeliği, ev hayvanları için açılacak üretim, satış ve eğitim yerleri ile belli süreler barındırılacağı yerleri kapsıyor. Yönetmelik metninde kuaför, ayrı bir yer türü olarak tanımlanmıyor.' },
    { kind: 'paragraf', metin: 'Bu nedenle yalnız kuaförlük yapacak bir işletmenin hangi izne tabi olduğu bu yazıdan çıkarılamaz. İl tarım ve orman müdürlüğüne ve işletmenin bulunacağı yerin belediyesine sorulması gerekiyor. Kuaförlüğün yanında hayvanları geçici olarak barındıran pansiyon ya da otel hizmeti de verilecekse, yönetmelik konukevi, pansiyon ve otel gibi yerleri barınma yeri sayıyor; çalışma izin belgesi ve veteriner hekim istihdamı gibi hükümler bu durumda gündeme geliyor.' },
    { kind: 'paragraf', metin: 'Kendi kliniğine bakım hizmeti eklemeyi düşünen hekimler için kliniğin kuruluş adımları [[veteriner-klinigi-acmak|veteriner kliniği açmak]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Kayıt ve randevu tarafı' },
    { kind: 'paragraf', metin: 'Standart, işin önemli bir bölümünün kayıtta ve iletişimde olduğunu gösteriyor. Randevuların çakışmayacak şekilde verilmesi, hayvanın cinsi, türü, ırkı, cinsiyeti, yaşı ve sağlık durumunun kayıt altına alınması, sahibinden hayvanın huyu hakkında bilgi alınması, işlemin bedeli, süresi ve aşamaları hakkında bilgi verilmesi başarım ölçütleri arasında yer alıyor.' },
    { kind: 'paragraf', metin: 'Klinikte bakım hizmeti sunuluyorsa bu kayıtların hekimin tuttuğu hasta kaydıyla tutarlı olması işi kolaylaştırır. Randevu düzeni için [[klinikte-randevu-yonetimi|klinikte randevu yönetimi]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Başlamadan önce sıralanabilecek adımlar' },
    { kind: 'liste', maddeler: [
      'MYK standardını baştan sona okumak',
      'Kursun programını standardın bilgi ve beceri listesiyle karşılaştırmak',
      'Kurs belgesinin hangi kurum adına düzenlendiğini yazılı sormak',
      'Deneyimli bir kuaförün yanında uygulama imkânı aramak',
      'Çalışılacak yerde küvet, masa ve havalandırmayı görmek',
      'İş yeri açılacaksa il müdürlüğüne ve belediyeye danışmak',
    ] },
  ],
  sss: [
    { soru: 'Pet kuaförü olmak için diploma gerekiyor mu?', cevap: 'MYK standardı mesleğe ilişkin ayrıca bir gereklilik öngörmüyor. Standart nitelikli kişiyi görevleri yapabilme bilgi ve becerisiyle tanımlıyor; yani eğitim ve uygulama belirleyici oluyor. İş yeri açacak olanların ayrıca il tarım ve orman müdürlüğüne danışması gerekiyor.' },
    { soru: 'Pet kuaför belgesi MYK tarafından veriliyor mu?', cevap: 'Standart, belgelendirmenin ulusal yeterliliklere göre ölçme ve değerlendirme merkezlerinde yapılacağını söylüyor. Yeterliliğin ve belgelendirme kuruluşlarının güncel durumunu bu yazı için doğrulayamadık; başvurudan önce MYK portalından bakmak gerekiyor.' },
    { soru: 'Pet kuaförü veteriner hekimin yerine geçebilir mi?', cevap: 'Hayır. Standart sedasyon, anestezi ve ilaç kullanımı gibi uygulamaları veteriner hekimlik sağlık hizmeti sayıyor ve gerektiğinde müşterinin veteriner hekime yönlendirilmesini istiyor. Kuaför deride gördüğü sorunu sahibine bildirebilir; teşhis ve tedavi veteriner hekimin işi.' },
    { soru: 'Pet kuaförlüğü fiziksel olarak zor bir iş mi?', cevap: 'Evet, araştırma bunu destekliyor. Tayvan\'da 180 pet kuaförüyle yapılan çalışmada katılımcıların %95\'i en az bir bölgede kas iskelet şikâyeti bildirdi. Küvet derinliği, ayarlanamayan masa ve uzun süre öne eğilme gibi etkenler şikâyetlerle ilişkili bulundu.' },
    { soru: 'Pet kuaförü hangi işleri yapar?', cevap: 'Standarda göre tüy kesimi, yıkama ve kurutma, tırnak ve pati bakımı, diş fırçalama, deri ve tüy bakımı ile tüy boyama kuaförün görevleri arasında. Bunların yanında randevu, kayıt tutma ve iş sağlığı ve güvenliği önlemleri de görev tanımının parçası.' },
    { soru: 'Pet kuaför iş yeri açmak için nereye başvurulur?', cevap: 'İl tarım ve orman müdürlüğüne ve işletmenin bulunacağı yerin belediyesine danışmak gerekiyor. Ev hayvanları yer yönetmeliği üretim, satış, barınma ve eğitim yerlerini düzenliyor; kuaförü ayrı bir yer türü olarak tanımlamıyor, bu yüzden durumun yetkili birime sorulması önerilir.' },
    { soru: 'Kurs seçerken nelere bakılmalı?', cevap: 'Kursun programını standardın bilgi ve beceri listesiyle karşılaştırmak önerilir. Hayvan tutuşu, ırk bilgisi, makas ve makine uygulaması, iş güvenliği ve ilkyardım konularının programda yer alması, belgenin hangi kurum adına düzenlendiğinin yazılı belli olması aranabilecek ölçüler.' },
  ],
  kontrolListesi: [
    'Kurs MYK standardına uyuyor mu?',
    'Belgeyi veren kurum belli mi?',
    'Uygulamalı eğitim saati var mı?',
    'İş güvenliği eğitimi var mı?',
    'Çalışma alanı havalandırılıyor mu?',
    'İzin için müdürlüğe sorduk mu?',
  ],
  kaynaklar: [
    {
      kurum: 'Mesleki Yeterlilik Kurumu',
      baslik: 'Evcil Hayvan Kuaförü (Seviye 3) Ulusal Meslek Standardı',
      yil: 2018,
      kunye: '18UMS0709-3, Resmî Gazete 21 Aralık 2018, sayı 30632 (Mükerrer)',
      adres: 'https://portal.myk.gov.tr/index.php?fileName=18UMS0709-3+Rev+00+Evcil+Hayvan+Kuaf%C3%B6r%C3%BC&dl=Meslek_Standartlari%2F4416%2FSON_TASLAK_PDF_20181221_111229.pdf',
    },
    {
      kurum: 'Tarım ve Orman Bakanlığı',
      baslik: 'Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik',
      yil: 2011,
      kunye: 'Resmî Gazete 8 Ekim 2011, sayı 28078 (güncel konsolide metin)',
      adres: 'https://mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=15374&mevzuatTur=KurumVeKurulusYonetmeligi&mevzuatTertip=5',
    },
    {
      kurum: 'Healthcare (Basel)',
      baslik: 'Work-Related Musculoskeletal Disorders and Occupational Burnout Among Pet Grooming Professionals: Prevalence, Ergonomic Risk Factors, and Their Interrelationships',
      yazarlar: 'Cheng SH, Chen MR, Tsai CJ',
      dergi: 'Healthcare (Basel)',
      yil: 2026,
      kunye: '14(14):2213',
      doi: '10.3390/healthcare14142213',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/42512729/',
    },
    {
      kurum: 'American Journal of Industrial Medicine',
      baslik: 'Pet Groomer\'s Lung: A novel occupation related hypersensitivity pneumonitis related to pyrethrin exposure in a pet groomer',
      yazarlar: 'Pu CY, Rasheed MR, Sekosan M, Sharma V',
      dergi: 'Am J Ind Med',
      yil: 2017,
      kunye: '60(1):141-145',
      doi: '10.1002/ajim.22664',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27747913/',
    },
  ],
};
