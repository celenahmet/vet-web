import type { BlogYazi } from './types';

/**
 * KEDI. Plan no 16. Gunluk fircalama, iltihapli diş etinde fircalamanin agrisi,
 * VOHC, anestezisiz temizligin kabul edilmemesi ve 1 yasinda ilk profesyonel
 * kontrol 2019 AAHA diş rehberinden (tam metin okundu). Yayginlik verileri
 * (2 yas ustunde %80-85 periodontal hastalik, diş erimesi %29-66), bakim veren
 * icin belirti listesi, istahin normal kalabilmesi ve yillik rontgen 2025
 * FelineVMA kedi agiz ve diş sagligi rehberinden (PMC tam metni okundu).
 * Kunyeler PubMed. 02.10.2026.
 *
 * Rehberlerde insan diş macunu uyarisi gecmiyor; yazi bu konuda iddia kurmuyor.
 */
export const kedilerinDisleriNasilTemizlenir: BlogYazi = {
  slug: 'kedilerin-disleri-nasil-temizlenir',
  baslik: 'Kedilerin Dişleri Nasıl Temizlenir?',
  ozet: 'Evde etkili yol günlük fırçalama; diş taşı ise yalnızca anestezi altında temizlenir. Hangi belirtiler hekim gerektirir, hangi ürünler işe yarar.',
  kapakAlt:
    'Kedilerin dişleri nasıl temizlenir konulu yazının kapak görseli; kedi ağız ve diş bakımı',
  kategori: 'Kedi',
  tarih: '2026-10-02',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedinin dişlerini evde temizlemenin etkili yolu, kediye uygun bir fırça ve kediler için üretilmiş bir macunla **her gün fırçalamak.** Amerikan Hayvan Hastaneleri Birliği’nin (AAHA) 2019 diş rehberine göre fırçalamanın fayda sağlaması için günlük yapılması gerekiyor. Fırça, diş yüzeyinde biriken bakteri tabakasını, yani plağı temizliyor. Plak sertleşip diş taşına dönüştüğünde ise evde yapılabilecek bir şey kalmıyor: diş taşı yalnızca veteriner hekim tarafından anestezi altında temizleniyor.' },
    { kind: 'paragraf', metin: 'Konu kediler için sanıldığından yaygın. Kedi hekimlerinin meslek kuruluşu FelineVMA’nın 2025 kedi ağız ve diş sağlığı rehberinin derlediği verilere göre 2 yaşın üstündeki kedilerin **yüzde 80-85’inde** diş eti hastalığı görülüyor. Aşağıdaki tablo, kedinizin durumuna göre neyin öne çıktığını özetliyor.' },

    { kind: 'tablo', basliklar: ['Kedinizin durumu', 'Öne çıkan adım'], satirlar: [
      ['Yavru, kalıcı dişleri çıkmış', 'Fırçalamaya alıştırma başlayabilir'],
      ['Yetişkin, diş eti pembe', 'Günlük fırçalama ya da silme'],
      ['Diş eti kırmızı ya da kanıyor', 'Önce veteriner hekim; fırça ağrıtabilir'],
      ['Dişlerde sarı-kahve taş', 'Anestezi altında profesyonel temizlik'],
      ['Tek taraftan çiğneme, yemek düşürme', 'Vakit kaybetmeden veteriner hekim'],
    ] },

    { kind: 'baslik', metin: 'Fırçalama yalnızca her gün yapıldığında işe yarıyor' },
    { kind: 'paragraf', metin: 'AAHA rehberi bu konuda açık: fırçalamanın fayda sağlaması için her gün yapılması gerekiyor. Fırça yalnızca plağı alıyor; diş taşı fırçayla çıkmıyor. Rehber, her gün fırçalanan bir kedide bile anestezi altında yapılan muayene, röntgen ve tedavi ihtiyacının ortadan kalkmadığını da vurguluyor; insanlarda diş hekimi kontrolü neyse, kedide de durum benzer.' },
    { kind: 'paragraf', metin: 'FelineVMA rehberi evde bakımın fırçalama ya da silme ile plağın düzenli olarak alınması olduğunu yazıyor ve yalnızca güvenli ve etkinliği gösterilmiş ürünlerin önerilmesini istiyor. AAHA’ya göre diş silme mendilleri özellikle ön dişler ve köpek dişleri için ek bir seçenek. Fırçalanamayan kedide, plak ve taş birikimini yavaşlatmak için tasarlanmış mamalar da yardımcı olabiliyor.' },

    { kind: 'yanilgi', baslik: '"Kuru mama dişleri kendiliğinden temizler" yanılgısı', metin: 'Her kuru mama bu etkiyi göstermiyor. AAHA’ya göre bu iddiayı taşıyan çok ürün var, ama yalnızca Veteriner Ağız Sağlığı Konseyi’nin (VOHC) kabul ettiği ürünler belirli standartları karşıladığını kanıtlamış durumda. Mama seçiminin ayrıntıları [[kediler-icin-yas-mama-mi-kuru-mama-mi|yaş mama mı kuru mama mı]] yazısında.' },

    { kind: 'baslik', metin: 'Alıştırma sabır istiyor ve her kedi kabul etmeyebiliyor' },
    { kind: 'paragraf', metin: 'AAHA’ya göre evde ağız bakımına alıştırma, kalıcı dişler çıktıktan sonra başlayabiliyor. FelineVMA rehberi, kedinin bu sürece gönüllü katılmasını kolaylaştıran kademeli bir eğitimden söz ediyor ve bunun zaman ve emek gerektirdiğini kabul ediyor. Rehbere göre bu eğitim, kedinin ağız bakımına gönüllü katılmasını teşvik edebiliyor.' },
    { kind: 'paragraf', metin: 'Rehberin dürüst bir notu da var: korku ve kaygı yaşayan ya da ağrısı olan kedilerde evde bakım mümkün olmayabiliyor. Bu durumda ne yapılacağına veteriner hekimle birlikte karar veriliyor; AAHA’ya göre fırçalanamayan hayvanlarda plak ve taş birikimini yavaşlatmak için tasarlanmış mamalar özellikle yardımcı olabiliyor.' },

    { kind: 'baslik', metin: 'Kızarık diş etini fırçalamak ağrıtıyor' },
    { kind: 'paragraf', metin: 'AAHA rehberine göre iltihaplı diş eti olan bir hayvanın dişini fırçalamak **ağrıya ve fırçadan kaçmaya** yol açıyor. Kırmızı, şiş ya da kanayan diş eti, evde fırça ile çözülecek bir durum değil; önce veteriner hekim değerlendirmesi ve tedavisi geliyor. FelineVMA da evde bakımın, kedi anestezi altındaki diş tedavisinden iyileştikten sonra başlatılmasını öneriyor.' },

    { kind: 'baslik', metin: 'Diş taşı evde temizlenmiyor, anestezisiz temizlik de önerilmiyor' },
    { kind: 'paragraf', metin: 'Diş taşı, tükürükteki minerallerle sertleşmiş plaktır. AAHA rehberine göre profesyonel diş temizliği, diş eti üstündeki ve altındaki plak ile taşın temizlenmesini, dişlerin parlatılmasını ve ağız muayenesini kapsıyor ve **genel anestezi altında** yapılıyor. Rehber, yalnızca görünen taşın kazınmasının tamamen kozmetik olduğunu ve hastalığı tedavi etmediğini yazıyor; asıl sorun diş eti çizgisinin altında.' },
    { kind: 'paragraf', metin: 'İki rehber anestezisiz diş temizliği konusunda aynı noktada. AAHA’ya göre bu uygulamanın anestezi altındaki temizlik kadar güvenli ya da etkili olduğu gösterilmemiş ve kabul edilemez. FelineVMA da anestezisiz diş temizliğine karşı olduğunu açıkça belirtiyor; rehbere göre ağzın tam muayenesi ve diş röntgeni ancak anestezi altında yapılabiliyor.' },

    { kind: 'yanilgi', baslik: '"Anestezisiz diş temizliği daha güvenli" yanılgısı', metin: 'AAHA’ya göre anestezisiz temizliğin güvenli ya da eşdeğer olduğu gösterilmemiş. Görünen taşın kazınması dişi temiz gösteriyor, ama diş eti altındaki hastalık yerinde kalıyor. FelineVMA bu uygulamaya karşı.' },

    { kind: 'baslik', metin: 'Kediler ağrıyı saklıyor; iştah normal olsa bile sorun olabilir' },
    { kind: 'paragraf', metin: 'FelineVMA rehberine göre kediler hastalık ve ağrıyı saklama içgüdüsünü korumuş durumda. Bu yüzden ağız hastalığı çoğu zaman sessiz ilerliyor. Rehber, bakım verenlerin şu belirtilerde veteriner hekime başvurmasını öneriyor:' },
    { kind: 'liste', maddeler: [
      'Beklenmedik ağız kokusu',
      'Kırmızı ya da kanayan diş eti',
      'Ağzın tek tarafıyla ya da başı yana eğerek çiğneme',
      'Yemeği ağızdan düşürme',
      'Patisiyle yüzünü sıvazlama, yüzde şişlik',
      'Aşırı salya ya da ağızdan anormal akıntı',
      'İştahsızlık',
    ] },
    { kind: 'paragraf', metin: 'Rehberin önemli bir uyarısı var: ağız ve diş hastalığı olan kedilerde iştah değişikliği nadir görülüyor. Yani normal yemek yemesi, kedinin ağzında sorun olmadığını göstermiyor. Yemeğe ilgisi azalan kedide diğer olası nedenler [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısında.' },

    { kind: 'yanilgi', baslik: '"Kedi yemek yiyorsa dişi ağrımıyordur" yanılgısı', metin: 'FelineVMA’ya göre ağız hastalığı olan kedilerde iştah değişikliği nadir. Ağrısı olan bir kedi yemeye devam edebiliyor; değişiklik çoğu zaman çiğneme biçiminde, yemek düşürmede ya da ağız kokusunda kendini gösteriyor.' },

    { kind: 'baslik', metin: 'Diş erimesi kedilerde yaygın ve çoğu zaman evde fark edilmiyor' },
    { kind: 'paragraf', metin: 'Diş erimesi (rezorpsiyon), diş dokusunun vücut tarafından yıkıldığı ve kedilerde sık görülen bir hastalık. FelineVMA rehberinin derlediği röntgen çalışmalarında kedilerin **yüzde 29 ile 66’sında** görüldü; bir çalışmada 10 yaşın üstündeki kedilerde oran yüzde 83’e çıktı. En sık alt çenedeki küçük azı dişlerinde görülüyor.' },
    { kind: 'paragraf', metin: 'Rehbere göre ağrının işaretleri arasında çenede titreme, çiğneme biçiminin değişmesi, sert mamadan kaçınma ve yüzünü sürtme sayılıyor; ama çoğu zaman evde hiçbir değişiklik fark edilmiyor. Hastalık ilerleyici olduğu için tanı konan kedide başka dişlerde de yeni lezyonlar çıkabiliyor ve rehber ideal olarak **yılda bir röntgen kontrolü** öneriyor.' },

    { kind: 'baslik', metin: 'İlk profesyonel diş kontrolü 1 yaş civarında öneriliyor' },
    { kind: 'paragraf', metin: 'AAHA rehberi, kedilerde tam bir koruyucu diş temizliğinin (temizlik, parlatma ve ağız içi röntgen) **1 yaşına kadar** yapılmasını öneriyor. FelineVMA’ya göre diş eti iltihabı yavru kedilerde de başlayabiliyor: İngiltere’deki bir çalışmada 12 aylıktan küçük kedilerin yüzde 24,5’inde, 5-6 yaşındakilerin yüzde 56,3’ünde diş eti iltihabı görüldü. Erken başlayan diş eti iltihabı 6-8 aylık kedilerde görülebiliyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden ağız muayenesi her veteriner ziyaretinin bir parçası. Yavru kedinin ilk ziyaretlerinde nelere bakıldığı [[yavru-kedi-veterinere-ne-zaman-goturulmeli|yavru kedi veterinere ne zaman götürülmeli]] yazısında.' },

    { kind: 'tablo', basliklar: ['Yöntem', 'Ne yapar', 'Sınırı'], satirlar: [
      ['Günlük fırçalama', 'Plağı temizler', 'Diş taşını çıkarmaz'],
      ['Diş silme mendili', 'Ön dişlerde plağı azaltır', 'Fırçanın yerini tam tutmaz'],
      ['VOHC onaylı mama ya da ödül', 'Plak ve taş birikimini yavaşlatır', 'Fırçalanamayan kedide yardımcı'],
      ['Anestezi altında temizlik', 'Diş eti altını temizler, röntgen çekilir', 'Veteriner hekim kararıyla'],
    ] },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Kırmızı ya da kanayan diş eti, ağız kokusu, yemeği ağızdan düşürme, tek taraftan çiğneme ya da yüzde şişlik görülen kedide veteriner hekim değerlendirmesi gerekir. Diş taşı evde kazınmaz.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Haftada bir fırçalamak yeter', 'Fayda için her gün fırçalamak gerekir'],
      ['Kuru mama dişi temizler', 'Yalnızca VOHC onaylı ürünler kanıtlı'],
      ['Diş taşı evde kazınabilir', 'Diş taşı anestezi altında temizlenir'],
      ['Anestezisiz temizlik güvenlidir', 'İki rehber de bu uygulamaya karşı'],
      ['Yemek yiyorsa dişi ağrımıyordur', 'Ağrılı kedi de yemeye devam edebilir'],
    ] },
  ],
  kontrolListesi: [
    'Dişler her gün fırçalanıyor mu?',
    'Kedi macunu kullanılıyor mu?',
    'Diş eti pembe ve sağlıklı mı?',
    'Ağız kokusu ya da salya var mı?',
    'Tek taraftan çiğniyor mu?',
    'Yıllık ağız kontrolü yapıldı mı?',
  ],
  sss: [
    { soru: 'Kedinin dişleri ne sıklıkla fırçalanmalı?', cevap: 'AAHA’nın 2019 diş rehberine göre fırçalamanın fayda sağlaması için her gün yapılması gerekiyor. Fırça diş yüzeyindeki plağı alıyor ama sertleşmiş diş taşını çıkarmıyor. Her gün fırçalanan kedide de anestezi altında yapılan ağız muayenesi ve röntgen ihtiyacı ortadan kalkmıyor; ev bakımı profesyonel bakımın yerini tutmuyor.' },
    { soru: 'Kedinin diş taşı evde temizlenir mi?', cevap: 'Hayır. Diş taşı, tükürükteki minerallerle sertleşmiş plaktır ve AAHA’ya göre profesyonel temizlik genel anestezi altında yapılıyor. Rehber, yalnızca görünen taşın kazınmasının kozmetik olduğunu, asıl hastalığın diş eti çizgisinin altında kaldığını belirtiyor. Bu yüzden diş taşı için veteriner hekime başvuruluyor.' },
    { soru: 'Anestezisiz diş temizliği güvenli mi?', cevap: 'AAHA’ya göre anestezisiz diş temizliğinin anestezi altındaki temizlik kadar güvenli ya da etkili olduğu gösterilmemiş ve kabul edilemez. FelineVMA da bu uygulamaya açıkça karşı. Rehberlere göre ağzın tam muayenesi ve diş röntgeni ancak anestezi altında yapılabiliyor; görünen taşı kazımak diş eti altındaki hastalığı tedavi etmiyor.' },
    { soru: 'Kedide diş ağrısı nasıl anlaşılır?', cevap: 'FelineVMA rehberine göre ağız kokusu, kırmızı ya da kanayan diş eti, tek taraftan ya da başı yana eğerek çiğneme, yemeği düşürme, yüzü patiyle sıvazlama, yüzde şişlik ve aşırı salya başlıca işaretler. İştah değişikliği nadir görülüyor; normal yemek yiyen bir kedide de ağız hastalığı olabiliyor.' },
    { soru: 'Kedilerde diş erimesi ne kadar yaygın?', cevap: 'FelineVMA rehberinin derlediği röntgen çalışmalarında diş erimesi kedilerin yüzde 29 ile 66’sında görüldü; bir çalışmada 10 yaş üstü kedilerde oran yüzde 83’e çıktı. En sık alt çenedeki küçük azı dişlerinde görülüyor. Çoğu zaman evde fark edilmediği ve ilerleyici olduğu için rehber yılda bir röntgen kontrolü öneriyor.' },
    { soru: 'Kedi ilk diş kontrolüne ne zaman götürülmeli?', cevap: 'AAHA rehberi, kedilerde temizlik, parlatma ve ağız içi röntgeni kapsayan ilk koruyucu diş işleminin 1 yaşına kadar yapılmasını öneriyor. Ağız muayenesi ise her veteriner ziyaretinin parçası. Diş eti iltihabı yavru kedilerde de görülebildiği için kontrolü ertelememek faydalı oluyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Feline Veterinary Medical Association (FelineVMA)',
      yazarlar: 'Lobprise H, St Denis K, Anderson JG, Hoyer N, Fiani N, Yaroslav J',
      baslik: '2025 FelineVMA feline oral health and dental care guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2025,
      kunye: '27(11):1098612X251398793',
      doi: '10.1177/1098612X251398793',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12665832/',
    },
    {
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Bellows J, Berg ML, Dennis S, Harvey R, Lobprise HB, Snyder CJ, Stone AES, Van de Wetering AG',
      baslik: '2019 AAHA Dental Care Guidelines for Dogs and Cats',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2019,
      kunye: '55(2):49-69',
      doi: '10.5326/JAAHA-MS-6933',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30776257/',
    },
  ],
};
