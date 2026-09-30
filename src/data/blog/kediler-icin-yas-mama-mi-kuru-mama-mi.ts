import type { BlogYazi } from './types';

/**
 * BESLENME. Plan no 13. Su oranlari, saklama ve "tercih meselesi" Cornell Feline Health
 * Center'in "Feeding Your Cat" sayfasindan; idrar yolu risk etkenleri Cornell'in FLUTD
 * sayfasindan; su alimi ve idrar yogunlugu Buckley 2011 (Br J Nutr, PubMed); dis
 * mamasi ve fircalama AAHA 2019 Dental Care Guidelines PDF'inden; mama gecisi suresi
 * 2021 AAHA/AAFP Feline Life Stage Guidelines'tan. 30.09.2026.
 *
 * Okuyucu kalir mi (Ahmet 30.09): kazanan ilan edilmiyor, cunku kaynaklar da ilan
 * etmiyor. Yazi okuyucunun kendi kedisi icin karar verebilecegi olcutleri veriyor:
 * su, kalori, dis, saklama, gecis.
 */
export const kedilerIcinYasMamaMiKuruMamaMi: BlogYazi = {
  slug: 'kediler-icin-yas-mama-mi-kuru-mama-mi',
  baslik: 'Kediler İçin Yaş Mama mı Kuru Mama mı?',
  ozet: 'İkisi de tam ve dengeliyse ikisi de yeterli; asıl fark su. Kuru mamada su yüzde 6-10, konservede en az 75. Hangi kediye hangisinin uyduğu ve karışık besleme.',
  kapakAlt:
    'Kedilerde yaş ve kuru mama karşılaştırması konulu yazının kapak görseli; su oranı ve besleme düzeni',
  kategori: 'Beslenme',
  tarih: '2026-10-01',
  bloklar: [
    { kind: 'paragraf', metin: 'İkisi de "tam ve dengeli" olduğu sürece yaş mama da kuru mama da bir kediyi tek başına besleyebilir. Cornell Üniversitesi Veteriner Fakültesi’nin kedi sağlığı merkezine göre bu noktadan sonra seçim büyük ölçüde kedinin tercihine kalıyor: bazı kediler konserveyi, bazıları kuru mamayı, bazıları ikisinin karışımını seviyor. İki tür arasındaki asıl fark **sudur**: kuru mamada su yüzde 6-10, konservede en az yüzde 75.' },
    { kind: 'paragraf', metin: 'Bu fark, az su içen, kilo alma eğilimi olan ya da idrar yolu sorunu geçirmiş kediler için seçimi anlamlı hâle getiriyor. Aşağıdaki tablo iki türü yan yana koyuyor; sonraki bölümler hangi kediye hangisinin daha çok yaradığını, diş konusundaki yaygın inancı ve iki mama arasında geçişin nasıl yapıldığını anlatıyor.' },

    { kind: 'tablo', basliklar: ['Özellik', 'Kuru mama', 'Yaş mama (konserve)'], satirlar: [
      ['Su oranı', 'Yüzde 6-10', 'En az yüzde 75'],
      ['Fiyat', 'Daha düşük', 'Genellikle en pahalı tür'],
      ['Lezzet', 'Bazı kedilere daha az çekici', 'Çoğu kedi için çok lezzetli'],
      ['Serbest besleme', 'Uygun, kabında bozulmuyor', 'Uygun değil, açıkta bozuluyor'],
      ['Saklama', 'Kapalı kapta, serin ve kuru yerde', 'Açılınca kalan kısım buzdolabında'],
    ] },

    { kind: 'baslik', metin: 'Önce bakılan şey türü değil, "tam ve dengeli" ibaresi' },
    { kind: 'paragraf', metin: 'Kediler zorunlu etoburdur: bazı besin öğelerini yalnız hayvansal kaynaklardan alabiliyorlar. Cornell, ticari mamaların Amerikan Yem Kontrol Yetkilileri Birliği’nin (AAFCO) kedi besin profillerine göre üretildiğini ve karşılaştırmanın en iyi yolunun etiketi okumak olduğunu belirtiyor. Etikette mamanın kedinin yaşam dönemi için "tam ve dengeli" olduğu yazmalı; içerik listesinde et, et yan ürünleri ya da balık ilk sıralarda yer almalı.' },
    { kind: 'paragraf', metin: 'Bu şart sağlandıktan sonra yaş ya da kuru olması beslenme yeterliliğini değiştirmiyor. Tersine, "gurme" diye satılan bazı konservelerin besin açısından eksik olabileceğini de Cornell ayrıca uyarıyor; bu ürünlerde de aynı ibare aranıyor.' },

    { kind: 'yanilgi', baslik: '"Pahalı konserve her zaman daha iyidir" yanılgısı', metin: 'Fiyat, mamanın tam ve dengeli olduğunu göstermiyor. Cornell’e göre bazı gurme konserveler tek başına kediyi beslemeye yetecek besin içeriğine sahip değil. Karşılaştırma fiyatla değil etiketteki "tam ve dengeli" ibaresiyle yapılıyor.' },

    { kind: 'baslik', metin: 'Asıl fark su, ve bu idrarı değiştiriyor' },
    { kind: 'paragraf', metin: 'Kuru mamayla beslenen kedi günlük suyunun büyük kısmını kaptan içmek zorunda; yaş mamayla beslenen kedi ise suyun bir bölümünü yemekle alıyor. Altı kediyle yapılan kontrollü bir çalışmada aynı mama farklı oranlarda sulandırılarak verildi: su oranı yüzde 73 olan mamayı yiyen kediler, kaptan daha az içmelerine rağmen toplamda günde yaklaşık **145 ml** sıvı aldı. Yüzde 6 sulu kuru mamada bu miktar yaklaşık **103 ml** idi.' },
    { kind: 'paragraf', metin: 'Aynı çalışmada yaş mamada idrar belirgin biçimde daha seyreltik çıktı ve kalsiyum oksalat taşı oluşumuna yol açabilen doygunluk düzeyi yarı yarıya düştü. Çalışma küçük ve bir mama üreticisinin araştırma merkezinde yapıldı; yine de su alımının idrarı nasıl değiştirdiğini açıkça gösteriyor.' },

    { kind: 'baslik', metin: 'Az su içen ve idrar sorunu yaşamış kedide yaş mama bir araç' },
    { kind: 'paragraf', metin: 'Cornell’in alt idrar yolu hastalıkları sayfasına göre bu sorunlar en çok orta yaşlı, fazla kilolu, az hareket eden, ev içinde kum kabı kullanan, dışarı çıkamayan ve **az su içen** kedilerde görülüyor; erkek kediler daha yüksek risk taşıyabiliyor. Bu kedilerde yaş mama, su alımını artırmanın en kolay yollarından biri.' },
    { kind: 'paragraf', metin: 'Aynı sayfa önemli bir uyarı da yapıyor: idrar yolunun tıkanması, özellikle erkek kedilerde, **kesin bir acil durumdur.** Kum kabında ıkınıp idrar yapamayan kedi, vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodadır. İdrarda kan görüldüğünde neye bakıldığı [[kedi-idrarinda-kan|kedinin idrarında kan]] yazısında anlatılıyor.' },

    { kind: 'yanilgi', baslik: '"Yaş mama yiyen kedinin su kabına gerek yok" yanılgısı', metin: 'Yaş mama su alımını artırıyor ama su kabının yerini tutmuyor. Cornell’e göre kedinin her zaman temiz ve taze suya erişimi olmalı. Yaş mama yiyen kedi kaptan daha az içebilir; bu beklenen bir durumdur, suyun kaldırılması için bir gerekçe değildir.' },

    { kind: 'baslik', metin: 'Kilo kontrolünde bakılan kalori yoğunluğu' },
    { kind: 'paragraf', metin: 'Cornell’e göre kedilerde en sık görülen beslenme sorunu şişmanlık ve bu durum eklem hastalıkları ile diyabet riskini artırıyor. Suyu az olduğu için aynı ağırlıkta kuru mama çok daha fazla kalori taşıyor; bir avuç fazladan kuru mama, kâseye bakıldığında fark edilmeyen önemli bir kalori farkı demek.' },
    { kind: 'paragraf', metin: 'Kuru mamanın kapta bozulmaması serbest beslemeyi mümkün kılıyor ama kabın sürekli dolu tutulması, kedinin ne kadar yediğinin bilinmemesi anlamına geliyor. Kilo takibi yapılan kedilerde günlük miktar tartılarak ya da ölçülerek veriliyor; ideal kilonun nasıl değerlendirildiğini veteriner hekim gösteriyor.' },

    { kind: 'baslik', metin: 'Kuru mama dişleri temizlemiyor, diş maması ayrı bir ürün' },
    { kind: 'paragraf', metin: 'Kuru mamanın diş taşını önlediği sık duyulan bir inanç. Amerikan Hayvan Hastaneleri Birliği’nin (AAHA) 2019 diş bakımı kılavuzu, diş taşını azaltmak için tasarlanmış özel mamaların daha iri ya da özel dokulu taneleriyle mekanik ya da kimyasal olarak etki edebildiğini, ancak bu iddiayı taşıyan ürünlerden yalnız Veteriner Ağız Sağlığı Konseyi’nin (VOHC) onayladıklarının belirlenmiş ölçütleri karşıladığını belirtiyor.' },
    { kind: 'paragraf', metin: 'Yani sıradan bir kuru mama diş bakımı yerine geçmiyor. Aynı kılavuza göre fırçalama yalnız plağı temizliyor, oluşmuş diş taşını değil, ve fayda sağlaması için her gün yapılması gerekiyor.' },

    { kind: 'yanilgi', baslik: '"Kuru mama kedinin dişlerini temizler" yanılgısı', metin: 'Bu etkiyi yalnız özel olarak tasarlanmış ve VOHC onayı almış diş mamaları göstermiş durumda. AAHA’ya göre mekanik temizlik için tanenin boyutu ve dokusu buna göre tasarlanıyor; sıradan kuru mama bu amaçla üretilmiyor. Diş sağlığı mama türüyle değil, bakım ve kontrolle korunuyor.' },

    { kind: 'baslik', metin: 'Karışık besleme ve mamalar arası geçiş' },
    { kind: 'paragraf', metin: 'Cornell, yaş ve kuru mamanın birlikte verilmesini de geçerli bir seçenek olarak sayıyor: günün bir öğünü konserve, diğeri kuru mama olabilir. Bu düzen, kuru mamanın kolaylığını korurken su alımını artırıyor. Önemli olan iki mamanın toplam kalorisinin günlük ihtiyacı aşmaması.' },
    { kind: 'paragraf', metin: 'Mama türü ya da markası değiştirilirken 2021 AAHA ve AAFP kedi kılavuzu geçişin **7-10 güne** yayılmasını öneriyor: yeni mama eskisinin içine her gün biraz daha fazla karıştırılıyor. Ani değişiklik bazı kedilerde mamayı reddetmeye ya da sindirim sorunlarına yol açabiliyor. Kedi yeni mamayı hiç yemiyorsa bunun ne zaman endişe verici olduğu [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısında.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. İdrar yolu sorunu, böbrek hastalığı, diyabet ya da kilo sorunu olan kedilerin maması veteriner hekim tarafından belirlenir; tedavi amaçlı mamalar hekim önerisiyle kullanılır.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Yaş mama kuru mamadan daha besleyicidir', 'Tam ve dengeliyse ikisi de yeterli, fark suda'],
      ['Kuru mama dişleri temizler', 'Bunu yalnız VOHC onaylı diş mamaları gösterdi'],
      ['Yaş mama yiyen kediye su gerekmez', 'Temiz su her zaman erişilebilir olmalı'],
      ['Pahalı konserve her zaman iyidir', 'Bazı gurme konserveler tek başına yetersiz'],
      ['Mama bir günde değiştirilebilir', 'Geçiş 7-10 güne yayılıyor'],
    ] },
  ],
  kontrolListesi: [
    'Etikette tam ve dengeli yazıyor mu?',
    'Su kabı her zaman dolu mu?',
    'Günlük porsiyon ölçülüyor mu?',
    'Açılan konserve buzdolabında mı?',
    'Kuru mama kapalı kapta mı?',
    'Geçiş 7-10 güne yayıldı mı?',
  ],
  sss: [
    { soru: 'Kediye yaş mama mı kuru mama mı verilmeli?', cevap: 'İkisi de "tam ve dengeli" olduğu sürece kediyi tek başına besleyebilir ve Cornell’e göre seçim çoğu zaman kedinin tercihine kalıyor. Fark sudadır: kuru mamada su yüzde 6-10, konservede en az yüzde 75. Az su içen, kilo alma eğilimi olan ya da idrar yolu sorunu geçirmiş kedilerde yaş mama avantaj sağlayabiliyor.' },
    { soru: 'Yaş mama ve kuru mama birlikte verilebilir mi?', cevap: 'Evet, Cornell karışık beslemeyi geçerli bir seçenek olarak sayıyor. Örneğin bir öğün konserve, diğeri kuru mama olabilir; bu düzen su alımını artırırken kuru mamanın kolaylığını koruyor. Dikkat edilmesi gereken, iki mamanın toplam kalorisinin kedinin günlük ihtiyacını aşmaması.' },
    { soru: 'Kuru mama kedinin dişlerini temizler mi?', cevap: 'Sıradan kuru mama dişleri temizlemiyor. AAHA’nın 2019 diş bakımı kılavuzuna göre diş taşını azaltma iddiasını yalnız özel olarak tasarlanmış ve Veteriner Ağız Sağlığı Konseyi (VOHC) onayı almış diş mamaları kanıtlamış durumda. Diş sağlığı için günlük fırçalama ve düzenli kontrol gerekiyor.' },
    { soru: 'Kuru mamadan yaş mamaya nasıl geçilir?', cevap: '2021 AAHA ve AAFP kedi kılavuzu mama değişikliğinin 7-10 güne yayılmasını öneriyor. Yeni mama eskisinin içine her gün biraz daha fazla karıştırılıyor ve eski mama kademeli olarak azaltılıyor. Ani değişiklik bazı kedilerde mamayı reddetmeye ya da sindirim sorunlarına yol açabiliyor.' },
    { soru: 'Su içmeyen kediye yaş mama verilir mi?', cevap: 'Evet, yaş mama su alımını artırmanın en kolay yollarından biri. Altı kediyle yapılan bir çalışmada yüzde 73 su içeren mamayı yiyen kediler, kaptan daha az içmelerine rağmen toplamda günde yaklaşık 145 ml sıvı aldı; kuru mamada bu miktar yaklaşık 103 ml idi ve idrar daha yoğundu.' },
    { soru: 'Açılan kedi konservesi nasıl saklanır?', cevap: 'Cornell, açılmış konservenin kullanılmayan kısmının kalitesini korumak ve bozulmayı önlemek için buzdolabında saklanmasını öneriyor; kesin bir süre vermiyor. Açık konserve serbest besleme için kapta bırakılmıyor. Kuru mama ise hava almayan kapta, serin ve kuru bir yerde, son kullanma tarihine dikkat edilerek saklanıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feline Lower Urinary Tract Disease',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease',
    },
    {
      kurum: 'WALTHAM Centre for Pet Nutrition',
      yazarlar: 'Buckley CM, Hawthorne A, Colyer A, Stevenson AE',
      baslik: 'Effect of dietary water intake on urinary output, specific gravity and relative supersaturation for calcium oxalate and struvite in the cat',
      dergi: 'British Journal of Nutrition',
      yil: 2011,
      kunye: '106 Suppl 1:S128-S130',
      doi: '10.1017/S0007114511001875',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/22005408/',
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
    {
      kurum: 'American Animal Hospital Association (AAHA), American Association of Feline Practitioners (AAFP)',
      yazarlar: 'Quimby J, Gowland S, Carney HC, DePorter T, Plummer P, Westropp J',
      baslik: '2021 AAHA/AAFP Feline Life Stage Guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2021,
      kunye: '23(3):211-233',
      doi: '10.1177/1098612X21993657',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10812130/',
    },
  ],
};
