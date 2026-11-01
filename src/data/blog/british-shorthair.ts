import type { BlogYazi } from './types';

export const britishShorthair: BlogYazi = {
  slug: 'british-shorthair',
  baslik: 'British Shorthair: Özellikleri ve Ömrü',
  ozet: 'British Shorthair yuvarlak yüzlü, yoğun tüylü ve sakin bir ırk. Özelliklerini, kan grubunu, kalp taramasını ve İngiltere verilerine göre ömrünü anlattık.',
  kapakAlt:
    'Tüylü oyuncağa pati atan gri British Shorthair kedi',
  kategori: 'Kedi',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**British Shorthair, kısa ve çok yoğun tüylü, yuvarlak yüzlü, güçlü yapılı ve sakin huylu bir kedi ırkıdır; tam gelişimine 3 ila 5 yılda ulaşır.** Ömrüne gelince, İngiltere\'deki bir veteriner kayıt çalışmasında ölen 69 British Shorthair\'in ölüm yaşı ortancası 11,8 yıl, melez kedilerinki ise 14,0 yıl bulundu. Irkta kalp kası hastalığı, kan grubu ve kilo konuları öne çıkıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın kökenini, görünüşünü, huyunu ve bakımını; kan grubunun ve kalp taramasının neden konuşulduğunu; ömür ve kilo verilerinin ne söylediğini anlatıyoruz. Ömür ve sağlık rakamları gözlemsel çalışmalara dayanıyor, bu yüzden tek bir kediye birebir uygulanmıyor.' },

    { kind: 'tablo', basliklar: ['Özellik', 'British Shorthair'], satirlar: [
      ['Gövde', 'Kompakt, dengeli, güçlü; geniş göğüs, kısa ila orta boy güçlü bacaklar'],
      ['Baş', 'Yuvarlak; yuvarlak yanaklar, iri ve yuvarlak gözler'],
      ['Tüy', 'Kısa ve çok yoğun'],
      ['Olgunlaşma', 'Tam gelişim 3 ila 5 yıl'],
      ['Ağırlık', 'Erkekler 17 pounda (yaklaşık 7,7 kg) kadar büyüyebilir'],
      ['Kan grubu', 'A baskın, ama birçok hatta B tipi var'],
    ]},

    { kind: 'baslik', metin: 'Kökeni: Londra kedi gösterilerinden bugüne' },
    { kind: 'paragraf', metin: 'Cat Fanciers\' Association (CFA), British Shorthair\'i antik Roma kedilerinin modern karşılığı olarak tanımlıyor. Irk, yüzyıl dönümünde Londra\'daki Crystal Palace kedi gösterilerinde kamuoyunun karşısına çıktı. Her iki dünya savaşı gen havuzuna zarar verdi; ırk tipini korumak ve geliştirmek için Pers kedileriyle ve ırkı belli olmayan kısa tüylü ev kedileriyle çaprazlama yapılması gerekti.' },
    { kind: 'paragraf', metin: 'Irk 1900\'lerin başında ABD\'ye ihraç edildi ve başlangıçta "British Blues" adıyla kaydedildi. Bugün mavinin yanında diğer düz renklerde, iki renkli ve tekir desenli örnekleriyle de görülüyor.' },

    { kind: 'baslik', metin: 'Görünüşü ve boyutu: yuvarlak yüz, geniş göğüs' },
    { kind: 'paragraf', metin: 'CFA ırk standardı British Shorthair\'i kompakt, dengeli ve güçlü olarak tarif ediyor: derin bir gövde, dolgun ve geniş bir göğüs, kısa ila orta boy güçlü bacaklar, yuvarlak patiler, tabanı kalın ve ucu yuvarlak bir kuyruk. Baş yuvarlak, kulaklar orta boy, gözler iri, yuvarlak ve açık. Dişiler her yönden erkeklere göre daha az iri, erkeklerde yanak etleri daha belirgin.' },
    { kind: 'paragraf', metin: 'Irk geç olgunlaşıyor. CFA\'nın tanıtım sayfası tam boyuta yaklaşık üç yaşında ulaşıldığını, ırk standardı ise tam olgunlaşmanın 3 ila 5 yıl sürdüğünü yazıyor. Erkekler 17 pounda (yaklaşık 7,7 kg) kadar büyüyebilir, dişiler biraz daha küçük kalır. Yavruluk döneminin beslenmesi için [[yavru-kedi-ne-kadar-mama-yemeli|yavru kedi ne kadar mama yemeli]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Huyu: sakin, sabırlı, kucakta taşınmayı pek sevmez' },
    { kind: 'paragraf', metin: 'CFA ırkı özgüvenli ve rahat huylu olarak anlatıyor. Bir köpeğin ya da başka bir evcil hayvanın varlığına kolay uyum sağlayabildiği, çok sabırlı olduğu ve çocuklarla iyi geçindiği yazılıyor. Gürültülü ve hareketli dönemlerde ise bir kenara çekilebiliyor. Çocuklara bu kedilerin kucakta taşınmaktan pek hoşlanmadığını öğretmek akıllıca olur.' },
    { kind: 'paragraf', metin: 'Sakin ve yerleşik bir kedi arıyorsanız bu tarif cazip gelebilir, ama her kedi ırk tarifine birebir uymaz. Evde başka bir hayvan varsa tanıştırma süreci için [[kedi-ile-kopek-nasil-alistirilir|kedi ile köpek nasıl alıştırılır]] yazısı işe yarar.' },

    { kind: 'baslik', metin: 'Tüy bakımı ve renkler' },
    { kind: 'paragraf', metin: 'CFA, tüyün aşırı yoğun olması nedeniyle dökülmenin beklenmesi gerektiğini yazıyor. Ama tüy kısa ve dirençli olduğu için bakımı kolay: çoğu sahip için haftada bir kez tarama ya da fırçalama dökülen tüyü kontrol altında tutmaya yetiyor. Bunun yanında düzenli tırnak kesimi ve ara sıra kulak temizliği ek bakım olarak sayılıyor. Dökülme konusunda [[kedi-tuy-dokumu|kedi tüy dökümü]] yazımız yol gösterir.' },
    { kind: 'paragraf', metin: 'Renk çeşitliliği geniş: standart düz renkleri, iki renkliyi ve çok sayıda tekir desenini (klasik, çizgili ve benekli) tanımlıyor.' },

    { kind: 'baslik', metin: 'Kan grubu: B tipi bu ırkta sık görülebiliyor' },
    { kind: 'paragraf', metin: 'Kedilerde iki iyi bilinen kan grubu var ve A tipi baskın. CFA, birçok British Shorthair hattının B tipi taşıdığını belirtiyor; iki tipin eşleştirilmesi ise üreticiler için özel önlem gerektiriyor. Sıradan bir sahip için ise kedinin kan grubunun bilinmesi, ihtimal düşük de olsa kan nakli gerekirse işe yarayacağı için öneriliyor.' },
    { kind: 'paragraf', metin: 'Edinburgh Üniversitesi\'nin 1999 tarihli İngiltere çalışmasında 207 soylu kedinin 121\'i British Shorthair\'di. Bu kedilerin yüzde 39,7\'si A, yüzde 58,7\'si B, yüzde 1,6\'sı AB tipi çıktı. Aynı çalışma, ırklara göre kan grubu dağılımının İngiltere\'de başka yerlerde bildirilenden farklı olabildiğini de not ediyor; yani rakamı her ülkedeki ve her hattaki kediye aynen taşımak doğru olmaz.' },

    { kind: 'baslik', metin: 'Kalp kası hastalığı (HCM) ve tarama' },
    { kind: 'paragraf', metin: 'Kedilerde hipertrofik kardiyomiyopati (HCM), kalbin kas duvarlarının kalınlaşmasıyla seyreden bir hastalık. Cornell Üniversitesi Veteriner Fakültesi, hastalığın belirli ırklarda daha sık görülmesinin ve bazı kalp genlerinde mutasyon saptanmasının genetiğin rol oynadığını düşündürdüğünü yazıyor; sayılan ırklar arasında British Shorthair de var.' },
    { kind: 'paragraf', metin: 'Kopenhag Üniversitesi\'nden Granström ve ekibinin çalışmasında, rutin HCM taramasına getirilen 329 British Shorthair ekokardiyografiyle incelendi. Kedilerin yüzde 8,5\'i HCM pozitif, yüzde 4,3\'ü şüpheli bulundu. Erkeklerde HCM oranı yüzde 20,4, dişilerde yüzde 2,1 çıktı. Tanı konan kedilerin ortanca yaşı 2,7 idi, yani hastalık erken yaşta da görülebiliyor. Araştırmacılar bu ırkta, özellikle üretimde kullanılan kedilerde ekokardiyografik tarama öneriyor.' },
    { kind: 'paragraf', metin: 'Bu tablonun bir sınırı var: çalışmadaki kediler tarama için getirilmiş kedilerdi, genel British Shorthair nüfusunu birebir temsil etmeyebilirler. CFA ise ırk profilinde ırka özgü endişe verici bir sağlık sorunu bulunmadığını yazıyor. Farklı kaynaklar farklı vurgu yapıyor; kalp muayenesinin gerekip gerekmediğine kediyi bizzat muayene eden veteriner hekim karar veriyor.' },
    { kind: 'paragraf', metin: 'Cornell\'e göre HCM tanısı ekokardiyografiyle konuyor; kalp kasındaki kalınlaşma yüksek tansiyon ve hipertiroidi gibi başka durumlarda da görülebildiği için bunlar önce ayrılıyor. Genetik testler de var, ama sonuçlar bir veteriner hekimin rehberliğinde dikkatle yorumlanmalı, çünkü mutasyonu taşıyan her kedi hastalığı geliştirmiyor.' },
    { kind: 'uyari', metin: 'Kedide ani arka bacak ağrısı ya da arka bacakları kullanamama, nefes almada zorlanma gibi bir durum görülürse nedeni ne olursa olsun vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Cornell, kalp kası hastalığına bağlı bir pıhtının arka bacaklara giden kan akışını tıkayarak ani ağrıya ve en uç durumda felce yol açabildiğini belirtiyor.' },

    { kind: 'baslik', metin: 'Ömrü: İngiltere verisi ne söylüyor?' },
    { kind: 'paragraf', metin: 'Royal Veterinary College\'dan O\'Neill ve ekibi, İngiltere\'deki birinci basamak kliniklerde ölümü kayıtlı 4009 kediyi inceledi. Tüm kedilerde ölüm yaşı ortancası 14,0 yıl, safkan kedilerde 12,5 yıl çıktı. British Shorthair grubunda ise 69 kedinin ölüm yaşı ortancası 11,8 yıl, çeyreklik aralığı 5,8 ile 16,3 yıl arasındaydı. Makale British Shorthair\'in, Bengal, Abyssinian, Ragdoll ve Maine Coon ile birlikte melezlerden daha kısa ömürlü görüldüğü ırklar arasında olduğunu yazıyor.' },
    { kind: 'tablo', basliklar: ['Grup', 'Ölüm yaşı ortancası'], satirlar: [
      ['Melez kediler', '14,0 yıl'],
      ['Tüm safkan kediler', '12,5 yıl'],
      ['British Shorthair (69 kedi)', '11,8 yıl'],
    ]},
    { kind: 'paragraf', metin: 'Bu rakamlar bir kedinin ne kadar yaşayacağını söylemiyor. Yalnızca o çalışmada ölümü kayıtlı kedilerin ölüm yaşlarını anlatıyor, 69 kedi küçük bir örnek ve ırk farkı tek başına nedeni göstermiyor. Genel ömür bilgisi için [[kediler-kac-yil-yasar|kediler kaç yıl yaşar]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Kilo: yuvarlak yapı ile fazla kilo aynı şey değil' },
    { kind: 'paragraf', metin: 'Melbourne Üniversitesi\'nden Murphy ve ekibi, Avustralya\'daki birinci basamak kliniklere gelen British Shorthair kedilerin kilo kayıtlarını inceledi. Bu kedilerin yüzde 48\'i fazla kilolu sınıfındaydı. Yaşamın ilk 12 ayında en az bir ölçümü 3,3 kg ve altı olan kedilerde, kedilerin yüzde 20\'sinin ölüm ya da ötanaziyle kaybedildiği yaş 12,3 yıl, 3,3 kg ve üzeri olanlarda 6,6 yıl bulundu. Araştırmacılar bunu klinik açıdan büyük bir fark olarak yorumluyor.' },
    { kind: 'yanilgi', baslik: '"British Shorthair zaten iri yapılı bir ırk, kilosu önemli değil"', metin: 'Irk standardı güçlü ve kompakt bir yapı tarif ediyor, ama hiçbir özelliğin zayıflığa ya da aşırılığa yol açacak biçimde abartılmaması gerektiğini de yazıyor. Avustralya çalışmasında yüzde 48\'lik fazla kilo oranı ve ilk yıldaki yüksek kilonun daha kısa yaşamla ilişkisi görüldü. Kedinin ideal kilosunu ve porsiyonunu veteriner hekime sormak gerekiyor; günlük miktar için [[kedi-gunde-kac-gram-mama-yer|kedi günde kaç gram mama yer]] yazısı başlangıç sağlar.' },

    { kind: 'baslik', metin: 'Sahiplenirken ve sonrasında neye bakılmalı?' },
    { kind: 'liste', maddeler: [
      'Yavrunun anne ve babasının kalp taramasını (ekokardiyografi) sormak',
      'Kedinin kan grubunu öğrenip kayıt altında tutmak',
      'İlk yıldan itibaren düzenli tartı ve kilo takibi yapmak',
      'Aşı ve kontrol programını veteriner hekimle planlamak',
      'Haftalık fırçalamayı alışkanlık hâline getirmek',
    ]},
    { kind: 'paragraf', metin: 'Aşı programı için [[kedi-asi-takvimi|kedi aşı takvimi]], kontrol aralıkları için [[kedi-kopek-check-up-ne-zaman|kedi ve köpekte check-up ne zaman yapılmalı]] yazılarına göz atılabilir.' },
  ],
  kontrolListesi: [
    'Yıllık veteriner kontrolü var mı?',
    'Kalp muayenesi yapıldı mı?',
    'Kan grubu biliniyor mu?',
    'Düzenli kilo takibi var mı?',
    'Haftalık fırçalama var mı?',
  ],
  sss: [
    { soru: 'British Shorthair kaç yıl yaşar?', cevap: 'İngiltere\'de ölümü kayıtlı 69 British Shorthair\'in ölüm yaşı ortancası 11,8 yıl çıktı; melez kedilerde bu değer 14,0 yıldı. Rakam bir ömür beklentisi değil, o örnekteki ölüm yaşlarını anlatıyor. Bireysel kedinin ömrünü kilo, bakım ve genetik etkiliyor.' },
    { soru: 'British Shorthair kaç kilo olur?', cevap: 'Erkekler CFA\'ya göre 17 pounda (yaklaşık 7,7 kg) kadar büyüyebilir, dişiler biraz daha küçük kalır. Irk geç olgunlaştığı için tam boyuta yaklaşık üç yaşında, standarda göre 3 ila 5 yıl içinde ulaşılıyor. Sağlıklı kilo kediye göre değiştiği için ideal kiloyu veteriner hekim muayenede belirler.' },
    { soru: 'British Shorthair\'in tüy bakımı zor mu?', cevap: 'Hayır, tüyü kısa ve dirençli olduğu için bakımı kolay. CFA çoğu sahip için haftada bir tarama ya da fırçalamanın yettiğini yazıyor. Tüy çok yoğun olduğu için dökülme beklenmeli. Ek olarak düzenli tırnak kesimi ve ara sıra kulak temizliği öneriliyor.' },
    { soru: 'British Shorthair kucağa gelir mi?', cevap: 'Genellikle kucağa atlamıyorlar; CFA, davet edilince yanınızda kanepeye oturmayı kucağa zıplamaya tercih ettiklerini ve kucakta taşınmaktan pek hoşlanmadıklarını yazıyor. CFA çocuklarla iyi geçindiklerini, gürültülü ve hareketli dönemlerde ise kenara çekilebildiklerini yazıyor. Her kedinin huyu farklı olduğu için bunlar ırk tarifidir, garanti değildir.' },
    { soru: 'British Shorthair\'in kan grubunu bilmek gerekir mi?', cevap: 'Evet, öneriliyor. CFA birçok British Shorthair hattının B tipi taşıdığını ve kedinin kan grubunun, kan nakli gerekirse işe yarayacağı için bilinmesinin önerildiğini yazıyor. Kan grubu konusunu muayenede veteriner hekime sormak yeterli.' },
    { soru: 'British Shorthair\'de kalp kası hastalığı görülür mü?', cevap: 'Görülebiliyor. Cornell hastalığın British Shorthair dahil belirli ırklarda daha sık olduğunu yazıyor. Danimarka\'da tarama için getirilen 329 kedinin yüzde 8,5\'i HCM pozitif çıktı. Tanı ekokardiyografiyle konuyor ve değerlendirmeyi veteriner hekim yapıyor.' },
    { soru: 'British Shorthair yavrusu alırken neye dikkat edilir?', cevap: 'Anne ve babanın kalp taramasının yapılıp yapılmadığı sorulabilir; Danimarka çalışması özellikle üretimde kullanılan kedilerde ekokardiyografik tarama öneriyor. Kan grubu bilgisi ve yavrunun veteriner kontrolleri de sorulması gereken konular. Ayrıntıyı muayene eden veteriner hekim değerlendirir.' },
  ],
  kaynaklar: [
    {
      kurum: 'The Cat Fanciers\' Association (CFA)',
      baslik: 'British Shorthair (ırk profili ve ırk standardı)',
      adres: 'https://cfa.org/british-shorthair/',
    },
    {
      kurum: 'University of Copenhagen, Department of Small Animal Clinical Sciences',
      yazarlar: 'Granström S, Godiksen MT, Christiansen M, Pipper CB, Willesen JL, Koch J',
      baslik: 'Prevalence of hypertrophic cardiomyopathy in a cohort of British Shorthair cats in Denmark',
      dergi: 'Journal of Veterinary Internal Medicine',
      yil: 2011,
      kunye: '25(4):866-871',
      doi: '10.1111/j.1939-1676.2011.0751.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21736622/',
    },
    {
      kurum: 'University of Edinburgh, Royal (Dick) School of Veterinary Studies',
      yazarlar: 'Knottenbelt CM, Addie DD, Day MJ, Mackin AJ',
      baslik: 'Determination of the prevalence of feline blood types in the UK',
      dergi: 'Journal of Small Animal Practice',
      yil: 1999,
      kunye: '40(3):115-118',
      doi: '10.1111/j.1748-5827.1999.tb03051.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/10200921/',
    },
    {
      kurum: 'The Royal Veterinary College',
      yazarlar: 'O\'Neill DG, Church DB, McGreevy PD, Thomson PC, Brodbelt DC',
      baslik: 'Longevity and mortality of cats attending primary care veterinary practices in England',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2015,
      kunye: '17(2):125-133',
      doi: '10.1177/1098612X14536176',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/24925771/',
    },
    {
      kurum: 'The University of Melbourne, Melbourne Veterinary School',
      yazarlar: 'Murphy BJ, Stevenson MA, Mansfield CS',
      baslik: 'Bodyweight and body condition scores of Australian British shorthaired cats, 2008-2017',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2023,
      kunye: '10:1241080',
      doi: '10.3389/fvets.2023.1241080',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37885615/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Hypertrophic Cardiomyopathy',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/hypertrophic-cardiomyopathy',
    },
  ],
};
