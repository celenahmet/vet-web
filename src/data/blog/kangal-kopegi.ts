import type { BlogYazi } from './types';

export const kangalKopegi: BlogYazi = {
  slug: 'kangal-kopegi',
  baslik: 'Kangal Köpeği: Özellikleri, Bakımı ve Ömrü',
  ozet: 'Kangal, FCI standardında erkeği 72-78 cm boyunda, siyah maskeli bir sürü bekçisi. Mizacı, sağlık riskleri, bakımı ve ömrü hakkında bilinenler.',
  kapakAlt:
    'Kırsal bahçede duran Kangal köpeği',
  kategori: 'Köpek',
  tarih: '2026-11-09',
  bloklar: [
    { kind: 'paragraf', metin: '**Kangal, Türkiye kökenli, koyun sürülerini korumak için yetişen iri bir çoban köpeğidir; erkekleri 48 ile 60 kg, dişileri 40 ile 50 kg ağırlığında olabilir ve siyah maskesiyle tanınır.** Uluslararası Kinoloji Federasyonu (FCI) ırkı 331 numaralı standartla tarif ediyor. Standarda göre Kangal saldırgan değil, güvenilir bir bekçidir.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın kökenini, standarttaki boy, kilo ve tüy ölçülerini, mizacını, büyük köpeklerde sık anılan eklem sorununu, ömür konusunda bilinenleri ve Kangal\'ın yurt dışına çıkarılmasındaki izin şartını anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Özellik', 'FCI standardı'], satirlar: [
      ['Köken', 'Türkiye'],
      ['Erkek boyu (omuz yüksekliği)', '72-78 cm, 2 cm tolerans'],
      ['Dişi boyu (omuz yüksekliği)', '65-73 cm, 2 cm tolerans'],
      ['Erkek ağırlığı', '48-60 kg'],
      ['Dişi ağırlığı', '40-50 kg'],
      ['Tüy uzunluğu', '3-7 cm, yoğun alt tüy'],
      ['Renk', 'Açık sarımsı kahveden (fawn) kurt sabalına kadar tek renk, siyah maske şart'],
    ]},

    { kind: 'baslik', metin: 'Kangal köpeği nereden geliyor?' },
    { kind: 'paragraf', metin: 'FCI standardı Kangal\'ı Türkiye\'nin övgüyle anılan ulusal köpeği olarak tarif ediyor. Irkın adı, standarda göre Sivas\'a bağlı Kangal kasabasından geliyor; ırk burada olağanüstü kaliteli ve birörnek örnekleriyle dünya çapında ilgi görmüş. Standart, ırkın tarihçesinin kesin biçimde yazılmasının çoğu sürü koruma köpeğinde olduğu gibi zor olduğunu da açıkça belirtiyor.' },
    { kind: 'paragraf', metin: 'Standart, Kangal\'ın tip ve özellikle renkte birörnek hâle gelmesinin Doğu Türkiye\'de yoğun yaşadığı bölgeyle ve koruduğu Akkaraman koyun ırkıyla ilişkili olduğuna inanıldığını belirtiyor. Bu bir inanıştır; FCI kesin bir köken öyküsü vermiyor.' },
    { kind: 'paragraf', metin: 'Standartta kullanım amacı koyun korumak olarak geçiyor: çok çalışan, aşırı sıcağa ve soğuğa dayanabilen aktif bir bekçi köpeği. Ev köpeği olarak sahiplenmeyi düşünen biri için bu geçmiş, ırkın ihtiyaçlarını anlamanın başlangıç noktasıdır.' },

    { kind: 'baslik', metin: 'Boy, kilo ve görünüş' },
    { kind: 'paragraf', metin: 'Standart Kangal\'ı iri, dik duruşlu, güçlü yapılı, koyu maskeli bir sürü bekçisi köpeği olarak tarif ediyor. Gövde dikdörtgen biçimli; vücut uzunluğu omuz yüksekliğinden yüzde 10 ile 12 kadar uzun. Göğüs derinliği omuz yüksekliğinin yaklaşık yarısı.' },
    { kind: 'paragraf', metin: 'Tüy 3 ile 7 cm uzunluğunda, sert bir üst tüy ve yoğun bir alt tüyden oluşuyor; hava koşullarına göre tüy uzunluğunda değişiklik olabileceği standartta belirtilmiş. Boyun, omuz ve uyluklarda tüy daha uzun ve kalın. Tüm vücut tek renk olmalı; açık sarımsı kahveden (fawn) kurt sabalına kadar tonlar kabul ediliyor. Göğüste 10 cm\'yi geçmeyen beyaz alan kusur sayılmıyor. Siyah maske şart; maske burun bölgesini kaplıyor, kafatasında daha açık, kulaklar koyu renkli.' },
    { kind: 'yanilgi', baslik: '"Kangal her renkte olur"', metin: 'FCI standardında tüm vücut tek renk olmalı ve siyah maske bulunmalı. Burun bölgesinde maske olmaması standartta diskalifiye edici kusurlar arasında sayılıyor.' },

    { kind: 'baslik', metin: 'Mizacı nasıl?' },
    { kind: 'paragraf', metin: 'Standartta mizaç; sakin, cesur, saldırganlıktan uzak, doğal olarak bağımsız, çok zeki ve söz dinleyen olarak anlatılıyor. Gururlu ve özgüvenli; sahibine bağlı ve sevecen, ama görev başındayken yabancılara karşı temkinli. Genel görünüm bölümünde de saldırgan olmadığı ama iyi bir bekçi olduğu yazılı.' },
    { kind: 'yanilgi', baslik: '"Kangal saldırgan bir ırktır"', metin: 'FCI standardı Kangal\'ı saldırganlığı olmayan, sakin ve cesur bir köpek olarak tarif ediyor; saldırgan ya da aşırı ürkek köpekler standartta diskalifiye edici kusur sayılıyor. Yabancılara temkinli olması bekçilik görevinin parçasıdır. Bu, her köpeğin davranışını garanti etmez; ziyaretçi ve çocuk durumları sahiplenmeden önce düşünülmeli, davranış sorunlarında veteriner hekime ya da davranış uzmanına başvurulması gerekiyor.' },
    { kind: 'paragraf', metin: 'Yabancılara temkinli, bağımsız ve çalışmaya yatkın bir ırk olması, yaşam alanı ve ilgi konusunda baştan düşünmeyi gerektiriyor. Apartman yaşamı için genel kuralları [[apartmanda-kedi-kopek-beslemek|apartmanda köpek beslemek]] yazısında anlattık.' },

    { kind: 'baslik', metin: 'Bakım ve beslenme' },
    { kind: 'paragraf', metin: 'Kangal için ırka özgü kesin bir bakım takvimi yok; temel bakım diğer iri köpeklerle aynı çerçevede ilerliyor. Aşı, parazit ve kontrol takvimi için veteriner hekimin planı esas alınmalı. Yavru döneminde mama miktarı ve egzersiz önemli; ayrıntı için [[yavru-kopek-bakimi|yavru köpek bakımı]] ve [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazılarına bakılabilir.' },
    { kind: 'liste', maddeler: [
      'Kimlik ve kayıt için [[mikrocip-nedir|mikroçip]] konusunda veteriner hekime danışmak önerilir',
      'Aşı ve parazit takvimini veteriner hekimle birlikte belirlemek önerilir',
      'Kilo takibini düzenli yapmak, yavruyken fazla kilo aldırmamak önerilir',
      'Sıcak havada gölge ve temiz su bulundurmak gerekiyor',
      'Yıllık sağlık kontrolü için [[kedi-kopek-check-up-ne-zaman|check-up zamanlaması]] yazısına bakılabilir',
    ]},

    { kind: 'baslik', metin: 'Sağlık: kalça displazisi ve yaşlılık' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı kalça displazisini büyük köpeklerde görülen, kalça eklemi gelişiminin bozulmasıyla ortaya çıkan bir durum olarak tanımlıyor. Eklemde gevşeklik ve sonrasında eklem kireçlenmesi gelişiyor; aşırı büyüme, egzersiz, beslenme ve kalıtsal etkenlerin ortaya çıkışını etkilediği belirtiliyor. Bu bilgi büyük köpekler için geçerli; Kangal\'a özgü bir yaygınlık oranı bu yazıda verilmiyor, çünkü güvenilir bir kaynakta bulunamadı.' },
    { kind: 'paragraf', metin: 'Belirtiler hafiften ağıra kadar değişebiliyor. Topallama egzersizden sonra daha belirgin olabiliyor, köpek "tavşan sıçraması" denen bir yürüyüşle ilerleyebiliyor. Eklem hasarının derecesini değerlendirmede röntgenden yararlanılıyor. Bu yüzden köpeğin yürüyüşünde bir değişiklik fark eden sahibin kendi kendine yorum yapması yerine veteriner hekime götürmesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Sivas Cumhuriyet Üniversitesi Veteriner Fakültesi araştırmacıları 2023\'te yetişkin, yaşlı ve çok yaşlı Kangal köpeklerinde yaşın kemik yapım ve yıkım göstergelerini etkilediğini bildirdi. Çalışma, her grupta sekiz köpek olmak üzere altı gruba ayrılmış köpeklerle yapıldı; kemik belirteçlerinin yaşla değiştiğini gösterdi ama tedavi önermiyor. Yaşlanan Kangal\'da düzenli veteriner kontrolünün neden önemli olduğunu bu tür bulgular da destekliyor.' },
    { kind: 'uyari', metin: 'Köpeğiniz topallıyor, kalkarken zorlanıyor, merdiven çıkmak ya da zıplamak istemiyor ya da yürüyüşü değişmişse veteriner hekime başvurulması gerekiyor. Ağrı kesici dahil hiçbir ilacı hekim önermeden vermemek önerilir.' },

    { kind: 'baslik', metin: 'Kangal kaç yıl yaşar?' },
    { kind: 'paragraf', metin: 'Kangal\'a özgü, güvenilir bir ortalama ömür rakamı bu yazıda verilmiyor; çünkü hakemli bir kaynakta ırka özgü bir sayı bulamadık. Genel tablo ise bellidir: köpeklerde vücut büyüklüğü arttıkça ömür kısalıyor. Kraus ve arkadaşlarının 2013\'te 74 ırkın ölüm verilerini inceleyen çalışması, büyük köpeklerin esas olarak daha hızlı yaşlandıkları için erken öldüğü sonucuna vardı.' },
    { kind: 'paragraf', metin: 'Aynı araştırmacıların 2023\'te 118 ırk ve 40.000\'den fazla köpek üzerinde yaptığı başka bir çalışmada küçük beden ve genetik çeşitliliğin ortalama ömrün uzamasıyla ilişkili olduğu bulundu. Kangal\'a özgü veri olmadığı için bu eğilimi ırka doğrudan uygulamak ve kesin bir rakam vermek doğru olmaz. Genel ömür bilgisi için [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Yurt dışına çıkarma ve sahiplenme' },
    { kind: 'paragraf', metin: 'Tarım ve Orman Bakanlığı\'nın uygulama talimatına göre Kangal Çoban Köpeği, Akbaş ve Kars çoban köpekleriyle birlikte gen kaynakları koruma altına alınan ırklardan. Bu ırklardan kedi ve köpeklerin yurt dışına çıkışı ön izne bağlı. Yurt dışına çıkarılacak hayvanların pasaportunda ırk ve rengin kesin olarak tanımlanmış olması isteniyor.' },
    { kind: 'paragraf', metin: 'Yurt dışına gitmeyi düşünüyorsanız [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] yazısında izin sürecini, [[thy-evcil-hayvan|THY]] ve [[pegasus-evcil-hayvan|Pegasus]] yazılarında uçuş şartlarını bulabilirsiniz. Türkiye\'de sahiplenmesi kısıtlı ırklar ayrı bir konudur; liste için [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazısına bakılabilir.' },
  ],
  kontrolListesi: [
    'Kayıtlı ve belgeli bir köpek mi?',
    'Mikroçip yaptırıldı mı?',
    'Yeterli yaşam alanı var mı?',
    'Kilosu düzenli takip ediliyor mu?',
    'Yürüyüşünde değişiklik var mı?',
    'Yıllık veteriner kontrolü planlı mı?',
  ],
  sss: [
    { soru: 'Kangal köpeği kaç kilo olur?', cevap: 'FCI standardına göre erkek Kangal 48 ile 60 kg, dişi 40 ile 50 kg ağırlığında. Omuz yüksekliği erkekte 72-78 cm, dişide 65-73 cm. Bunlar standart değerleri; gerçek köpeğin ideal kilosunu veteriner hekim yaşa ve yapıya göre belirler.' },
    { soru: 'Kangal köpeği saldırgan mıdır?', cevap: 'FCI standardı Kangal\'ı saldırganlıktan uzak, sakin ve cesur olarak tarif ediyor. Sahibine bağlı, yabancılara karşı görev başında temkinli bir bekçidir. Her köpeğin davranışı tek tek farklı olduğu için sorun yaşanırsa veteriner hekim ya da davranış uzmanına danışılması gerekiyor.' },
    { soru: 'Kangal köpeği kaç yıl yaşar?', cevap: 'Kangal\'a özgü güvenilir bir ortalama ömür rakamı bulunamadı. Genel olarak büyük köpekler daha hızlı yaşlandığı için küçük ırklardan daha kısa yaşıyor. Beklenen ömür için köpeğinizin yaşına, kilosuna ve sağlığına bakan veteriner hekime danışmak en doğrusu.' },
    { soru: 'Kangal köpeğinin rengi ne olmalı?', cevap: 'FCI standardına göre tüm vücut tek renk olmalı ve açık sarımsı kahveden (fawn) kurt sabalına kadar tonlar kabul ediliyor. Siyah maske şart. Göğüste 10 cm\'yi geçmeyen beyaz alan kusur sayılmıyor, boğazdaki beyaz ise tercih edilmiyor.' },
    { soru: 'Kangal köpeği yurt dışına götürülebilir mi?', cevap: 'Evet ama ön izne bağlı. Kangal, gen kaynakları koruma altına alınan ırklardan olduğu için Tarım ve Orman Bakanlığı\'nın izni olmadan yurt dışına çıkarılamıyor. Süreç için il ya da ilçe tarım ve orman müdürlüğüyle erken görüşmek gerekiyor.' },
    { soru: 'Kangal köpeğinde kalça sorunu görülür mü?', cevap: 'Kalça displazisi büyük köpeklerde görülen bir durum, ancak Kangal\'a özgü bir oran bu yazıda verilemiyor. Topallama ya da yürüyüş değişikliği görüyorsanız köpeği veteriner hekime götürmek gerekiyor; değerlendirmede röntgenden yararlanılıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Fédération Cynologique Internationale (FCI)',
      baslik: 'FCI-Standard N° 331: Kangal Çoban Köpeği (Kangal Shepherd Dog)',
      yil: 2018,
      adres: 'https://www.fci.be/Nomenclature/Standards/331g02-en.pdf',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı (21.10.2022, sayı 7455140)',
      yil: 2022,
      adres: 'https://vskn.tarimorman.gov.tr/tekirdag/Belgeler/D%C3%96K%C3%9CMAN/Kedi%20Ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Hip Dysplasia (Dog Owners)',
      adres: 'https://www.merckvetmanual.com/dog-owners/bone-joint-and-muscle-disorders-of-dogs/hip-dysplasia',
    },
    {
      kurum: 'Max Planck Institute for Demographic Research',
      baslik: 'The size-life span trade-off decomposed: why large dogs die young',
      yazarlar: 'Kraus C, Pavard S, Promislow DE',
      dergi: 'The American Naturalist',
      yil: 2013,
      kunye: '181(4):492-505',
      doi: '10.1086/669665',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23535614/',
    },
    {
      kurum: 'University of Washington',
      baslik: 'How size and genetic diversity shape lifespan across breeds of purebred dogs',
      yazarlar: 'Kraus C, Snyder-Mackler N, Promislow DEL',
      dergi: 'GeroScience',
      yil: 2023,
      kunye: '45(2):627-643',
      doi: '10.1007/s11357-022-00653-w',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/36066765/',
    },
    {
      kurum: 'Sivas Cumhuriyet Üniversitesi Veteriner Fakültesi',
      baslik: 'The influence of sex and age on bone turnover markers in the adult to geriatric Kangal shepherd dogs',
      yazarlar: 'Ekici M, Koçkaya M, Baş-Ekici H',
      dergi: 'Veterinary Clinical Pathology',
      yil: 2023,
      kunye: '52(2):353-359',
      doi: '10.1111/vcp.13199',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/36740233/',
    },
  ],
};
