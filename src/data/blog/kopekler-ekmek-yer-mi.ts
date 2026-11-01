import type { BlogYazi } from './types';

export const kopeklerEkmekYerMi: BlogYazi = {
  slug: 'kopekler-ekmek-yer-mi',
  baslik: 'Köpekler Ekmek Yer mi? Pişmiş Ekmek ve Çiğ Hamur',
  ozet: 'Sade ve pişmiş ekmek küçük miktarda kabul edilebilir sayılıyor. Asıl risk çiğ maya hamuru ile ekmeğe katılan üzüm, ksilitol ve sarımsak gibi içerikler.',
  kapakAlt:
    'Tezgâhtaki ekmek dilimine bakan küçük köpek',
  kategori: 'Beslenme',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Sade ve tamamen pişmiş ekmek küçük miktarda köpekler için kabul edilebilir sayılıyor; asıl tehlike çiğ maya hamuru ile ekmeğe katılan üzüm, ksilitol ve sarımsak gibi içeriklerdir.** Texas A&M Üniversitesi Veteriner Hekimliği Fakültesi\'nden bir klinisyen, sade ekmeğin küçük miktarda kabul edilebilir olduğunu söylüyor ve güvenliğin porsiyona bağlı olduğunu vurguluyor.' },
    { kind: 'paragraf', metin: 'Aşağıda ekmeğin hangi hâlinin sorun çıkarmadığını, hangi hâlinin acil durum sayıldığını, günlük beslenmede ne kadar yer tutabileceğini ve riskli bir ürün yendiğinde hangi aşamada veteriner hekime ulaşılması gerektiğini anlatıyoruz. Bu yazı teşhis ya da tedavi için değil, bilinçli karar vermek için hazırlandı.' },

    { kind: 'tablo', basliklar: ['Ekmek türü', 'Değerlendirme'], satirlar: [
      ['Sade, tamamen pişmiş ekmek', 'Küçük miktarda kabul edilebilir sayılıyor'],
      ['Çiğ ya da mayalanmakta olan hamur', 'Acil durum olabilir; veteriner hekime başvurulması gerekiyor'],
      ['Üzümlü ya da kuru üzümlü ekmek, kek', 'Böbrek hasarı riski; verilmemesi gerekiyor'],
      ['Şekersiz ya da ksilitollü fırın ürünü', 'Kan şekerinde düşüş ve karaciğer hasarı riski'],
      ['Sarımsaklı ekmek', 'Kırmızı kan hücrelerine zarar verebilen sarımsak içeriyor'],
      ['Çok tuzlu hamur işleri', 'Fazla tuz zehirlenme belirtilerine yol açabiliyor'],
    ]},

    { kind: 'baslik', metin: 'Sade ve pişmiş ekmek: küçük parça, ara sıra' },
    { kind: 'paragraf', metin: 'Texas A&M Veteriner Hekimliği Fakültesi\'nden Dr. Lori Teller, sade ekmeğin küçük miktarlarda kabul edilebilir olduğunu belirtiyor. Aynı açıklamada köpeğe verilen ikramların ve insan yiyeceklerinin toplam alımın yüzde 10\'unu aşmaması gerektiği, aşılırsa beslenmenin dengesini kaybedebileceği ve köpeğin altta yatan bir sağlık sorunu varsa önce veteriner hekime danışılması gerektiği söyleniyor.' },
    { kind: 'paragraf', metin: 'Yani sade ekmek küçük miktarda kabul edilebilir bir ikram olarak anılıyor; öğünün yerini tutmuyor. Köpeğe verilebilecek diğer insan yiyecekleriyle birlikte [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazımızdaki listeye de göz atmak yararlı olur.' },

    { kind: 'baslik', metin: 'Çiğ maya hamuru neden acil durum olabiliyor' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı\'na göre mayayla yapılmış çiğ hamur yendiğinde midenin sıcak ve nemli ortamı mayanın çoğalması için verimli bir kuluçka makinesi gibi çalışıyor ve hamur kitlesi büyüyor. Şişen mide, mide duvarına giden kan akışını azaltabiliyor. Maya fermantasyonunun ürünlerinden biri de alkoldür; etanol kana karışıp zehirlenmeye ve metabolik bozukluklara yol açıyor.' },
    { kind: 'paragraf', metin: 'Her tür etkilenebilir ama köpekler, önüne gelen her şeyi yeme eğilimleri yüzünden en sık etkilenen türdür. Erken işaretler arasında kusmaya çalışıp kusamama, şişkin karın ve çökkünlük sayılıyor; zehirlenme ilerledikçe hayvan şaşkınlaşıp dengesini kaybedebiliyor. Hakemli bir derleme belirtilerin genellikle yemeden sonraki bir saat içinde başladığını bildiriyor.' },
    { kind: 'paragraf', metin: 'Merck kaynağı ölümün çoğunlukla mide şişkinliğinden çok etanolün metabolik etkilerine bağlı olduğunu, ama hamurun duyarlı köpek ırklarında mide dönmesini de tetikleyebileceğini belirtiyor. Bu nedenle hamurun miktarı küçük görünse de durum evde beklenerek değerlendirilmiyor.' },
    { kind: 'yanilgi', baslik: '"Ekmek hamuru da ekmektir, bir lokma bir şey yapmaz"', metin: 'Pişmiş ekmek ile çiğ maya hamuru aynı risk grubunda değil. Çiğ hamur midede büyümeye ve alkol üretmeye devam ediyor. ASPCA, listedeki besinlerden birinin yendiğinden şüphelenildiğinde yenen miktarın not alınmasını ve veteriner hekime ya da zehir danışma hattına ulaşılmasını söylüyor.' },

    { kind: 'baslik', metin: 'Ekmeğin içindekiler sorunu belirliyor' },
    { kind: 'paragraf', metin: 'Sade ekmekte sorun çıkarmayan bir ürün, içine katılanlarla riskli hâle gelebiliyor. Bu yüzden köpeğe ekmek vermeden önce içindekiler listesine bakmak gerekiyor.' },
    { kind: 'liste', maddeler: [
      '**Üzüm ve kuru üzüm:** Derlemeler, üzüm ve kurutulmuş ürünlerinin köpeklerde böbrek yetmezliğine yol açabildiğini, bunların kek, çörek ve benzeri fırın ürünlerinin içinde de yenebildiğini bildiriyor. Köpekler arasında duyarlılık çok değiştiği için güvenli bir miktar belirlenemiyor.',
      '**Ksilitol:** Şekersiz sakız, şekerleme ve fırın ürünlerinde kullanılan bir tatlandırıcı. ASPCA kan şekerinde düşüşe ve yenen miktara göre karaciğer hasarına yol açabildiğini, ilk belirtilerin kusma, uyuşukluk ve koordinasyon kaybı olduğunu bildiriyor.',
      '**Sarımsak ve soğan:** ASPCA bu bitki grubunun mide bağırsak tahrişine ve kırmızı kan hücrelerinde hasara, bunun sonucunda kansızlığa yol açabildiğini söylüyor.',
      '**Fazla tuz:** Aşırı tuz alımı susuzluk ve idrar artışına, miktara göre kandaki elektrolit dengesinin bozulmasına yol açabiliyor.',
    ]},
    { kind: 'paragraf', metin: 'Bu içeriklerden birini taşıyan bir ekmeğin yenmesi durumunda doz hesabı yapmaya çalışmak yerine ürünün adı ve tahmini miktarıyla veteriner hekime başvurmak gerekiyor. Zehirlenme ihtimaline dair genel bilgiler için [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazısı da var.' },

    { kind: 'baslik', metin: 'Ne kadar verilebilir' },
    { kind: 'paragraf', metin: 'Kaynaklarda ekmek için dilim ya da gram ölçüsü verilmiyor. Dünya Küçük Hayvan Veteriner Hekimleri Birliği (WSAVA) ikramların köpeğin günlük kalori alımının yüzde 10\'undan az olması gerektiğini söylüyor. Bu sınır ekmeğe özel değil, gün içinde verilen bütün ikramların toplamı için geçerli.' },
    { kind: 'paragraf', metin: 'WSAVA ayrıca ikramların hiçbir zaman bir öğünün yerine geçmemesi gerektiğini, çünkü her köpeğin tam ve dengeli bir mamaya ihtiyaç duyduğunu, fazla ikramın da istenmeden kilo alımına katkıda bulunabildiğini belirtiyor. Günlük mama miktarı için [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazımıza bakılabilir.' },
    { kind: 'yanilgi', baslik: '"Ekmek köpeğin karnını doyurur, mamanın yerini tutar"', metin: 'WSAVA\'ya göre ikramlar öğünün yerine geçmiyor ve fazlası ana beslenmenin dengesini bozabiliyor. Her köpeğin tam ve dengeli bir mamaya ihtiyacı var; ekmek ise ikram olarak değerlendiriliyor.' },

    { kind: 'baslik', metin: 'Buğday ve besin hassasiyeti' },
    { kind: 'paragraf', metin: 'Ekmeğin ana maddesi buğday. Hakemli bir değerlendirmede köpeklerde deri belirtili besin reaksiyonlarına yol açan en olası besin kaynaklarının sığır eti, süt ürünleri, tavuk ve buğday olduğu bildirildi. Bu, her köpeğin ekmeğe tepki vereceği anlamına gelmiyor; yalnızca buğdayın bilinen alerjen kaynaklarından biri olduğunu gösteriyor.' },
    { kind: 'paragraf', metin: 'Ekmek verildikten sonra köpekte tekrarlayan bir deri sorunu fark edilirse bunu kendi kendine yorumlamak yerine veteriner hekime göstermek gerekiyor. Besin alerjisi tanısında veteriner hekimler besini kısıtlayıp sonra yeniden deneyen kontrollü diyet çalışmaları yapıyor.' },

    { kind: 'baslik', metin: 'Ekmek yerine ne verilebilir' },
    { kind: 'paragraf', metin: 'Texas A&M\'den Dr. Teller çekirdeği çıkarılmış elma, muz, yaban mersini ve karpuz gibi meyveleri; havuç, yeşil fasulye ve salatalık gibi sebzeleri; derisiz ve kemiksiz pişmiş tavuk, hindi ya da balığı güvenli seçenekler arasında sayıyor. Bunlar da aynı yüzde 10 sınırı içinde değerlendiriliyor.' },

    { kind: 'baslik', metin: 'Köpeğe ekmek verirken dikkat edilecekler' },
    { kind: 'liste', maddeler: [
      'Yalnızca sade ve tamamen pişmiş ekmeği, küçük parçalar hâlinde düşünmek',
      'İçindekiler listesinde üzüm, ksilitol, sarımsak ya da soğan olup olmadığına bakmak',
      'Mayalanmaya bırakılan hamuru köpeğin erişemeyeceği yerde tutmak',
      'Bütün ikramların günlük kalorinin yüzde 10\'unu aşmamasına dikkat etmek',
      'Sağlık sorunu olan ya da özel mamayla beslenen köpekler için veteriner hekime danışmak',
    ]},

    { kind: 'uyari', metin: 'Köpeğin çiğ hamur, üzümlü ya da ksilitollü bir ürün yediğinden şüpheleniliyorsa belirtilerin ortaya çıkması beklenmeden vakit kaybetmeden veteriner hekime başvurulması gerekiyor. Yenen ürünün ne olduğu ve tahmini miktarı not alınırsa veteriner hekime yardımcı olur. Evde müdahale denemeden önce veteriner hekime ya da zehir danışma hattına ulaşmak önerilir.' },
  ],
  kontrolListesi: [
    'Ekmek tamamen pişmiş mi?',
    'İçinde üzüm ya da ksilitol var mı?',
    'Sarımsak ya da soğan var mı?',
    'Çiğ hamur köpeğin erişiminde mi?',
    'İkramlar yüzde 10 sınırını aşıyor mu?',
    'Bilinen bir sağlık sorunu var mı?',
  ],
  sss: [
    { soru: 'Köpekler ekmek yer mi?', cevap: 'Evet, sade ve tamamen pişmiş ekmeği küçük miktarda yiyebilirler; Texas A&M veteriner fakültesinden bir klinisyen bunu kabul edilebilir buluyor. Çiğ maya hamuru ise acil durum olabilir. Üzümlü, sarımsaklı ya da ksilitollü ekmeğin verilmemesi gerekiyor.' },
    { soru: 'Köpek ekmek hamuru yerse ne olur?', cevap: 'Midede mayalanan hamur büyüyor, mide şişiyor ve maya alkol üretiyor. Kusmaya çalışıp kusamama, şişkin karın ve çökkünlük ilk işaretler arasında; ilerleyince şaşkınlık ve dengesizlik görülebiliyor. Bu bir acil durum olabileceğinden vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Köpeğe günde kaç dilim ekmek verilebilir?', cevap: 'Kaynaklarda dilim ya da gram ölçüsü verilmiyor. Veteriner hekimler ikramların ve insan yiyeceklerinin toplamının günlük enerjinin yüzde 10\'unu aşmamasını öneriyor. Bu sınır yalnızca ekmek için değil, bütün ikramların toplamı için geçerli. Kesin miktar için veteriner hekime danışmak gerekiyor.' },
    { soru: 'Üzümlü ekmek köpeklere zararlı mı?', cevap: 'Evet, risklidir. Üzüm ve kuru üzüm köpeklerde böbrek hasarına yol açabiliyor ve derlemeler bunun kek ve çörek gibi pişmiş ürünlerde de görülebildiğini bildiriyor. Duyarlılık köpekten köpeğe çok değiştiği için güvenli bir miktar belirlenemiyor ve şüphede veteriner hekime ulaşmak gerekiyor.' },
    { soru: 'Köpekler buğdaya alerjik olabilir mi?', cevap: 'Evet, buğday köpeklerde besin alerjisine yol açabilen en olası kaynaklar arasında sayılıyor; sığır eti, süt ürünleri ve tavukla birlikte anılıyor. Ekmek sonrası tekrarlayan bir deri sorunu fark edilirse tanı için veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Ekmek yerine köpeğe ne verilebilir?', cevap: 'Texas A&M fakültesinden bir klinisyen çekirdeği çıkarılmış elma, muz, yaban mersini ve karpuzu; havuç, yeşil fasulye ve salatalığı; derisiz ve kemiksiz pişmiş tavuk, hindi ya da balığı güvenli seçenekler arasında sayıyor. Hepsi günlük enerjinin yüzde 10\'unu geçmeyen ikram miktarı içinde kalmalı.' },
  ],
  kaynaklar: [
    {
      kurum: 'Texas A&M University, College of Veterinary Medicine & Biomedical Sciences',
      baslik: 'Foods To Avoid Feeding Your Pet',
      yil: 2022,
      adres: 'https://vetmed.tamu.edu/news/pet-talk/foods-to-avoid-feeding-pets/',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Bread Dough Toxicosis in Animals',
      yil: 2024,
      adres: 'https://www.merckvetmanual.com/toxicology/food-hazards/bread-dough-toxicosis-in-animals',
    },
    {
      kurum: 'ASPCA (American Society for the Prevention of Cruelty to Animals), Animal Poison Control',
      baslik: 'People Foods to Avoid Feeding Your Pets',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets',
    },
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA), Global Nutrition Committee',
      baslik: 'Feeding treats to your dog',
      adres: 'https://wsava.org/wp-content/uploads/2024/06/Feeding-treats-to-your-dog-v2.pdf',
    },
    {
      kurum: 'Università degli Studi di Milano, Department of Health, Animal Science and Food Safety',
      yazarlar: 'Cortinovis C, Caloni F',
      baslik: 'Household Food Items Toxic to Dogs and Cats',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2016,
      kunye: '3:26',
      doi: '10.3389/fvets.2016.00026',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27047944/',
    },
    {
      kurum: 'Ludwig Maximilian University of Munich, North Carolina State University, Clinique Advetia',
      yazarlar: 'Mueller RS, Olivry T, Prélaud P',
      baslik: 'Critically appraised topic on adverse food reactions of companion animals (2): common food allergen sources in dogs and cats',
      dergi: 'BMC Veterinary Research',
      yil: 2016,
      kunye: '12:9',
      doi: '10.1186/s12917-016-0633-8',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/26753610/',
    },
  ],
};
