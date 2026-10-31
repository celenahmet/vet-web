import type { BlogYazi } from './types';

export const belediyeUcretsizKisirlastirma: BlogYazi = {
  slug: 'belediye-ucretsiz-kisirlastirma',
  baslik: 'Belediyede Ücretsiz Kısırlaştırma: Sahipli Hayvana Yapılır mı?',
  ozet: 'Belediyenin ücretsiz kısırlaştırması kural olarak sokak hayvanları için. Kanuna ve belediye sayfalarına göre sahipli kedi ve köpekte durum, istisna ve şartlar.',
  kapakAlt:
    'Klinik masasında taşıma kafesindeki kedi, yanında stetoskoplu veteriner hekim ve tablet',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kural olarak hayır: belediyelerin ücretsiz kısırlaştırma hizmeti sahipsiz sokak hayvanları için, sahipli kedi ve köpeğin kısırlaştırılması ise sahibinin sorumluluğunda.** 5199 sayılı Hayvanları Koruma Kanunu, toplu yaşanan yerlerde beslenen kedi ve köpeklerin sahiplerince kısırlaştırılmasını esas alıyor. Belediyelerin kendi başvuru sayfaları da sahipli hayvanları açıkça kapsam dışında bırakıyor.' },
    { kind: 'paragraf', metin: 'Bunun bir istisnası var: belediyenin hayvan bakımevinden altı aydan küçük ve henüz kısırlaştırılmamış bir hayvan sahiplendiyseniz, kısırlaştırma için tarihi belediye belirliyor ve işlemi belediye yapıyor. Aşağıda kanunun belediyeye verdiği görevi, örnek belediyelerin başvuru şartlarını ve sahipli hayvan için seçenekleri topladık.' },

    { kind: 'tablo', basliklar: ['Durum', 'Belediye ücretsiz kısırlaştırır mı?'], satirlar: [
      ['Sokaktan getirilen sahipsiz kedi', 'Evet; örnek belediyelerde randevuyla'],
      ['PETVET\'e kayıtlı sahipli kedi ya da köpek', 'Hayır; örnek belediyeler hizmet vermiyor'],
      ['Mikroçipli hayvan', 'Nilüfer gibi belediyeler operasyona kabul etmiyor'],
      ['Bakımevinden kısırlaştırılmadan sahiplenilen, altı aydan küçük hayvan', 'Evet; tarihi belediye belirliyor'],
      ['Gebe kedi', 'Örnek belediyelerde randevu verilmiyor'],
    ]},

    { kind: 'baslik', metin: 'Kanun belediyeye hangi görevi veriyor?' },
    { kind: 'paragraf', metin: 'Belediyenin kısırlaştırma görevi, kanundaki **rehabilitasyon** kavramından geliyor. 5199 sayılı kanunun 3. maddesi rehabilitasyonu sahipsiz hayvanların tedavisi, parazit mücadelesi, aşılanması, kısırlaştırılması ve dijital kimliklendirme yöntemleriyle işaretlenmesi olarak tanımlıyor. Tanımın öznesi sahipsiz hayvan; sahipli hayvan bu çerçevede yer almıyor.' },
    { kind: 'paragraf', metin: 'Kanunun ek 1. maddesine göre büyükşehir belediyeleri, il belediyeleri ve nüfusu yirmi beş bini aşan belediyeler hayvan bakımevi kurmakla yükümlü. Geçici 4. madde bu belediyelere 31 Aralık 2028\'e kadar bakımevi kurma ve rehabilitasyon için kesinleşmiş en son bütçe gelirlerinin binde beşi oranında kaynak ayırma görevi veriyor; oran büyükşehir belediyelerinde binde üç. Aynı madde, bu ödeneklerin başka bir amaç için kullanılamayacağını söylüyor.' },
    { kind: 'paragraf', metin: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği de Bakanlığın mali destek verebileceği faaliyetler arasında "sahipsiz hayvanların kısırlaştırılması ve işaretlenmesi"ni sayıyor. Yani hem belediye bütçesinden ayrılan pay hem de Bakanlık desteği sokak hayvanlarına yönelik. Kanunun genel çerçevesini [[5199-sayili-kanun|5199 sayılı kanun yazısında]] ayrıca anlattık.' },

    { kind: 'yanilgi', baslik: '"Belediye her kediyi ücretsiz kısırlaştırır"', metin: 'Ücretsiz hizmet, sokaktan getirilen sahipsiz hayvanlar için. Buca Belediyesi sayfasında "Sahipli hayvanlar için tedavi ve kısırlaştırma hizmeti verilmemektedir" yazıyor; Silivri ve Nilüfer belediyeleri de sahipli hayvanları kabul etmediklerini açıkça belirtiyor.' },

    { kind: 'baslik', metin: 'Sahipli hayvanın kısırlaştırılması kimin sorumluluğunda?' },
    { kind: 'paragraf', metin: 'Kanunun 4. maddesindeki ilkelerden biri şu: kontrolsüz üremeyi önlemek amacıyla, toplu yaşanan yerlerde beslenen ve barındırılan kedi ve köpeklerin **sahiplerince** kısırlaştırılması esastır. Uygulama yönetmeliğinin 10. maddesi de hayvan sahiplerinin görevleri arasında sahiplendikleri kedi ve köpekleri kısırlaştırmayı sayıyor; hayvanını yavrulatmak isteyen sahibin doğacak yavruları kayıt altına aldırarak sahiplenmesi ya da sahiplendirmesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Kanunun 7. maddesine göre hayvanlara tıbbi ve cerrahi müdahaleleri yalnız veteriner hekimler yapabiliyor. Kısırlaştırma da yönetmelikte "bir hayvanın üreme kabiliyetinin veteriner hekim tarafından kalıcı olarak sonlandırılması" diye tanımlanıyor. Bu yüzden sahipli bir hayvan için yol, bir veteriner hekimle görüşmek. Kısırlaştırmanın ne zaman yapılacağına hayvanı muayene eden hekim karar veriyor; genel bilgiyi [[kediler-ne-zaman-kisirlastirilmali|kedilerde kısırlaştırma zamanı]] ve [[kopek-ne-zaman-kisirlastirilmali|köpeklerde kısırlaştırma zamanı]] yazılarında bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Belediyelerin başvuru sayfaları ne diyor?' },
    { kind: 'paragraf', metin: 'Uygulama belediyeden belediyeye değişse de incelediğimiz sayfalarda sahipli hayvan dışarıda tutuluyor:' },
    { kind: 'liste', maddeler: [
      '**Buca (İzmir):** Vatandaşların getirdiği sokak kedilerine ücretsiz poliklinik hizmeti veriliyor; sahipli hayvanlara tedavi ve kısırlaştırma hizmeti verilmiyor. Belediye bunu bir İçişleri Bakanlığı genelgesine dayandırıyor ve ilçe sınırları dışındaki sokak hayvanlarına da hizmet vermiyor.',
      '**Silivri (İstanbul):** Ev hayvanı kayıt sistemine (PETVET) kayıtlı sahipli hayvanlara, 5199 sayılı kanun kapsamında hizmet verilemediği yazıyor.',
      '**Nilüfer (Bursa):** Hizmet, ilçe sınırlarında yaşayan vatandaşların ilgilendiği sahipsiz sokak hayvanlarını kapsıyor; sahipli ve mikroçipli hayvanlar operasyona kabul edilmiyor.',
    ]},
    { kind: 'paragraf', metin: 'Bölgenizdeki belediyenin sahipli hayvanlar için ayrı bir uygulaması olup olmadığını öğrenmenin en doğru yolu, belediyenin veteriner işleri müdürlüğüne sormak. Haber ya da sosyal medya paylaşımı yerine belediyenin kendi duyurusuna bakmak önerilir.' },

    { kind: 'baslik', metin: 'Sahipli hayvanı sokak hayvanı diye götürmek' },
    { kind: 'paragraf', metin: 'Bazı sahipler ücretsiz işlem için hayvanını sahipsiz gibi göstermeyi düşünebiliyor. Bu hem doğru değil hem de pratikte işlemiyor. Silivri\'de randevu alan kişi "Hayvanı Getiren Hayvan Sever Taahhütname"sini kabul ediyor. Nilüfer\'de mikroçipli hayvan kabul edilmiyor ve operasyona gelen kedilerin kulağına çentik atılıyor; bu, hayvanın sokak hayvanı olarak kısırlaştırıldığını gösteren kalıcı bir işaret.' },
    { kind: 'paragraf', metin: 'Ayrıca kanunun geçici 4. maddesi kedi ve köpek sahiplerine hayvanlarını en geç 31 Aralık 2025\'e kadar dijital kimliklendirme yöntemleriyle kayıt altına aldırma zorunluluğu getirdi. Kayıtlı bir hayvanın sahibi sistemde görünüyor. Kayıt sürecini [[petvet-kayit|PETVET kaydı]] ve [[mikrocip-nedir|mikroçip]] yazılarında anlattık.' },

    { kind: 'baslik', metin: 'Bakımevinden sahiplenilen yavruda durum farklı' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 7. maddesi, belediyenin görevleri arasında şunu sayıyor: altı aylıktan küçük hayvanları kısırlaştırılmadan sahiplendirmesi durumunda kısırlaştırma için tarih belirlemek, takibi yapmak, hayvanı kısırlaştırmak ve belirlenen sürede getirilmeyen hayvanları denetim elemanlarına bildirmek.' },
    { kind: 'paragraf', metin: 'Sahiplenen kişinin görevi de aynı yönetmeliğin 10. maddesinde: bakımevinden kısırlaştırılmadan sahiplendiği altı aydan küçük hayvanı **taahhüt ettiği tarihte** kısırlaştırmak. Yani bu yavru artık sahipli olsa da kısırlaştırma belediyenin takibinde. Sahiplenme sürecinin tamamını [[barinaktan-kopek-sahiplenme|barınaktan köpek sahiplenme]] yazısında bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Sokak hayvanı için başvuru nasıl yapılıyor?' },
    { kind: 'paragraf', metin: 'Sokaktaki sahipsiz bir kedinin kısırlaştırılmasına aracılık etmek isteyenler için incelediğimiz belediyeler randevu sistemi kullanıyor. Örnek iki belediyenin şartları şöyle:' },
    { kind: 'tablo', basliklar: ['Şart', 'Silivri', 'Nilüfer'], satirlar: [
      ['Başvuran', '16 yaşından büyük olduğunu kabul ediyor', 'İlçede yaşayan, kimliğiyle gelen kişi'],
      ['Randevu başına', 'Yalnız 1 kedi', 'Gönüllü başına haftada 1 randevu'],
      ['Kimler alınmıyor', 'Gebe, kızgın, süt veren ya da hasta dişi', 'Gebe kedi; son doğumdan 60 gün geçmemiş kedi'],
      ['Teslim', 'Randevuyu alan kişi getiriyor', 'Kişi kediyi kendisi getiriyor'],
      ['Sonrası', 'Bakım için taahhütname', '7 gün evde bakım'],
    ]},
    { kind: 'paragraf', metin: 'Nilüfer\'de randevusuna gelmeyen ve iptal bildirmeyen kişiye 1 ay boyunca yeni randevu verilmiyor; iptalin en az 24 saat önceden yapılması rica ediliyor. Yönetmeliğin 42. maddesine göre yerel yönetimlere ya da kamuya ait mobil kısırlaştırma üniteleri de bu işi yapabiliyor; ancak çalışma izinleri her yıl yenileniyor ve yalnız izin aldıkları il sınırları içinde çalışabiliyorlar.' },
    { kind: 'uyari', metin: 'Ameliyat öncesi hazırlık ve sonrası bakım için belediyenin ya da kliniğin veteriner hekiminin verdiği talimata uyulması gerekiyor. Hayvanın işleme uygun olup olmadığına hekim karar veriyor; işlem sonrasında beklenmedik bir durum fark edilirse vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Sahipli hayvan için seçenekler neler?' },
    { kind: 'paragraf', metin: 'Sahipli kedi ve köpekte kısırlaştırma, özel bir veteriner kliniğinde ya da hayvan hastanesinde yapılıyor. Ücret, kliniğe ve hayvanın durumuna göre değişiyor; tarifenin nasıl işlediği için [[asgari-ucret-tarifesi-nedir|asgari ücret tarifesi]], genel bir çerçeve için [[veteriner-ucretleri|veteriner ücretleri]] yazısına bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Belediyenin veteriner işleri müdürlüğüne sahipli hayvanlar için bir uygulama ya da kampanya olup olmadığını sormak da bir seçenek.' },

    { kind: 'baslik', metin: 'Ücretsiz kısırlaştırma programları işe yarıyor mu?' },
    { kind: 'paragraf', metin: 'Kamu desteğiyle yapılan kısırlaştırmanın barınaklara etkisini inceleyen bir çalışma, ABD\'de iki programa baktı. New Hampshire\'daki programın başlamasından sonraki yıllarda kedi kabulü ve ötanazisinde anlamlı bir düşüş görüldü, ancak bu eğilim programdan önce başlamış görünüyordu; köpeklerde düşüş görülmedi. Austin\'deki ücretsiz programın uygulandığı bölgelerde ise kedi ve köpek kabulündeki artış hızı daha düşük kaldı.' },
    { kind: 'paragraf', metin: 'Araştırmacılar, farklı finansman ve hizmet modellerinin etkisini ve maliyetini ölçecek ileriye dönük çalışmalara ihtiyaç olduğunu yazıyor. Kısacası ücretsiz programlar sahipsiz hayvan sayısını yönetmenin araçlarından biri, ama tek başına sonuç garantisi vermiyor; sahiplerin kendi hayvanlarını kısırlaştırması da bu tablonun parçası.' },
  ],
  sss: [
    { soru: 'Belediye sahipli kediyi ücretsiz kısırlaştırır mı?', cevap: 'Kural olarak hayır. Belediyelerin ücretsiz hizmeti sahipsiz sokak hayvanları için; Buca, Silivri ve Nilüfer belediyeleri sahipli hayvanları açıkça kapsam dışında tutuyor. Bölgenizdeki uygulamayı belediyenin veteriner işleri müdürlüğünden öğrenmek gerekiyor.' },
    { soru: 'Bakımevinden sahiplendiğim yavruyu kim kısırlaştırıyor?', cevap: 'Belediye. Altı aydan küçük ve kısırlaştırılmamış bir hayvan sahiplendirildiyse, yönetmeliğe göre belediye kısırlaştırma tarihini belirliyor, takibini yapıyor ve hayvanı kısırlaştırıyor. Sahiplenen kişinin de hayvanı taahhüt ettiği tarihte götürmesi gerekiyor.' },
    { soru: 'Sahipli hayvanı kısırlaştırmak zorunlu mu?', cevap: 'Kanun, toplu yaşanan yerlerde beslenen kedi ve köpeklerin sahiplerince kısırlaştırılmasını esas alıyor. Yönetmelik de bunu sahiplerin görevleri arasında sayıyor; yavrulatmak isteyen sahibin yavruları kayıt altına aldırarak sahiplenmesi ya da sahiplendirmesi gerekiyor.' },
    { soru: 'Sokak kedisi için kısırlaştırma randevusu nasıl alınır?', cevap: 'Belediyenin veteriner işleri müdürlüğü üzerinden; örneğin Silivri ve Nilüfer çevrim içi randevu sayfası kullanıyor. Silivri\'de randevu başına bir kedi kabul ediliyor, Nilüfer\'de gönüllü başına haftada bir randevu veriliyor ve randevuya kimlikle gelinmesi isteniyor.' },
    { soru: 'Gebe sokak kedisi kısırlaştırmaya alınır mı?', cevap: 'İncelediğimiz belediyelerde alınmıyor. Nilüfer gebe kediyi operasyona almıyor ve son doğumdan 60 gün geçmesini istiyor; Silivri gebe, kızgın, süt veren ya da hasta dişi kediler için randevu alınmamasını istiyor.' },
    { soru: 'Kulağında çentik olan kedi ne anlama geliyor?', cevap: 'Belediyenin kısırlaştırdığı sokak kedisi olduğunu gösteriyor. Nilüfer operasyona gelen kedilerin kulağına çentik atıyor; Buca da sokak kedilerinin kısırlaştırılarak kulaklarına işaret konulduğunu, köpeklere ise kısırlaştırma sonrası kulak küpesi ve mikroçip uygulandığını belirtiyor.' },
  ],
  kontrolListesi: [
    'Hayvanım PETVET\'e kayıtlı mı?',
    'Belediye sahipliyi kabul ediyor mu?',
    'Bakımevi kısırlaştırma tarihi var mı?',
    'Randevu ilçe sınırında mı?',
    'Taahhütnameyi okudum mu?',
    'Hekimin talimatı alındı mı?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 3, 4, 7, ek madde 1, geçici madde 4)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (Resmî Gazete, 13 Aralık 2024, sayı 32751), madde 4, 7, 10, 40 ve 42',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'Buca Belediyesi',
      baslik: 'Veterinerlik Hizmetleri',
      adres: 'https://www.buca.bel.tr/tr/hizmetler/veterinerlik',
    },
    {
      kurum: 'Silivri Belediyesi Veteriner İşleri Müdürlüğü',
      baslik: 'Randevu Alın',
      adres: 'https://veteriner.silivri.bel.tr/randevu',
    },
    {
      kurum: 'Nilüfer Belediyesi',
      baslik: 'Sahipsiz Hayvan Kısırlaştırma Başvurusu',
      adres: 'https://e-islem.nilufer.bel.tr/EYasam/HayvanMuayene',
    },
    {
      kurum: 'Spay ASAP, Inc.',
      baslik: 'Impact of publicly sponsored neutering programs on animal population dynamics at animal shelters: the New Hampshire and Austin experiences',
      yazarlar: 'White SC, Jefferson E, Levy JK',
      dergi: 'Journal of Applied Animal Welfare Science',
      yil: 2010,
      kunye: '13(3):191-212',
      doi: '10.1080/10888700903579903',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/20563902/',
    },
  ],
};
