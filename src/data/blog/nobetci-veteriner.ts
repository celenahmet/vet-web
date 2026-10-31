import type { BlogYazi } from './types';

export const nobetciVeteriner: BlogYazi = {
  slug: 'nobetci-veteriner',
  baslik: 'Nöbetçi Veteriner Nasıl Bulunur? Gece Açık Klinikler',
  ozet: 'Gece açık veteriner arayacağınız yer önce hayvan hastaneleri: yönetmelik 24 saat hizmet ve gece nöbetini şart koşuyor. Acilden önce yapılacaklar burada.',
  kapakAlt:
    'Gece kliniğin kapısında taşıma kafesindeki kediyi teslim eden kişi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Gece nöbetçi veteriner ararken ilk bakılacak yer hayvan hastaneleri, çünkü Hayvan Hastaneleri Yönetmeliği hastanelerin 24 saat hizmet vermesini ve en az bir veteriner hekimin gece nöbeti tutmasını şart koşuyor.** Muayenehane ve polikliniklerde böyle bir şart yok; bu yerler kendi çalışma saatlerine göre açık. Bu yüzden en yakın gece açık yeri, acil bir durum doğmadan önce bulup telefonunuza kaydetmek en çok zaman kazandıran adım.' },
    { kind: 'paragraf', metin: 'Aşağıda mevzuatın hangi kuruluşa gece hizmeti yüklediğini, gece açık bir yeri nasıl bulabileceğinizi, yola çıkmadan önce neden aramak gerektiğini ve sokak ya da yaban hayvanı için gece kime ulaşılabileceğini topladık.' },

    { kind: 'tablo', basliklar: ['Kuruluş', 'Gece durumu', 'Mevzuattaki kadro şartı'], satirlar: [
      ['Hayvan hastanesi', '24 saat hizmet zorunlu, gece nöbetçi hekim var', 'En az beş veteriner hekim, biri uzman'],
      ['Poliklinik', 'Kendi çalışma saatlerine göre', 'En az dört veteriner hekim'],
      ['Muayenehane', 'Kendi çalışma saatlerine göre', 'Bir ya da daha fazla veteriner hekim'],
    ]},

    { kind: 'baslik', metin: 'Gece hizmeti hangi kuruluş için zorunlu?' },
    { kind: 'paragraf', metin: 'Hayvan Hastaneleri Yönetmeliği\'nin 15. maddesi açık: "Hastaneler 24 saat hizmet verir. En az bir veteriner hekim gece nöbeti tutar." Aynı madde, nöbetçi hekime yardımcı sağlık hizmetleri personeli ile yardımcı personelin eşlik edeceğini de söylüyor. Yani ruhsatlı bir hayvan hastanesi, gece kapısı kapalı bir yer olamaz.' },
    { kind: 'paragraf', metin: 'Yönetmelik hastaneyi, bütün hayvanların hastalıklarının teşhis ve tedavilerinin ayakta veya yatarak yapıldığı yer olarak tanımlıyor ve veteriner hekim kadrosunun biri sorumlu yönetici, biri uzman veteriner hekim olmak üzere en az beş hekimden oluşmasını istiyor. Hastaneler Bakanlıktan ruhsat almadan faaliyete geçemiyor.' },
    { kind: 'paragraf', metin: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği ise muayenehaneyi hayvanların ayakta muayene, teşhis ve tedavilerinin yapıldığı iş yeri, polikliniği de en az dört veteriner hekimin bir araya gelerek açtığı muayenehaneler bütünü olarak tanımlıyor. Bu yönetmelik sorumlu veteriner hekimden hizmetlerin **çalışma saatleri içinde** düzenli ve sürekli yürütülmesini istiyor; gece açık olmayı şart koşan bir hüküm içermiyor. Gece hizmeti veren muayenehane ve poliklinikler de var, ama bu kliniğin kendi tercihi.' },
    { kind: 'paragraf', metin: 'Kuruluş türleri arasındaki farkı ayrıntılı olarak [[muayenehane-poliklinik-hastane-farki|muayenehane, poliklinik ve hastane farkı]] yazısında anlattık.' },

    { kind: 'yanilgi', baslik: '"Adında klinik yazan her yer gece de açıktır"', metin: 'Gece hizmeti mevzuatta yalnız hayvan hastaneleri için zorunlu. Muayenehane ve poliklinikler kendi çalışma saatlerine göre açık. Bir yerin gece açık olup olmadığını tabelasından değil, kendisini arayarak öğrenmek gerekiyor.' },

    { kind: 'baslik', metin: 'Gece açık veteriner nasıl bulunur?' },
    { kind: 'paragraf', metin: 'Gece arayışı çoğu zaman telaşla, telefonda harita uygulamasında "nöbetçi veteriner" yazarak başlıyor. Bu arama işe yarayabilir, ama listede görünen saatler güncel olmayabiliyor. Daha güvenli bir yol, aşağıdaki adımları sakin bir günde tamamlamak:' },
    { kind: 'liste', maddeler: [
      'Kendi veteriner hekiminize mesai dışında hangi kuruluşa yönlendirdiğini sormak',
      'Evinize en yakın hayvan hastanesini ve varsa üniversite hayvan hastanesini belirlemek',
      'Bu yerleri bir kez arayıp gece hasta kabul edip etmediklerini ve hangi türlere baktıklarını öğrenmek',
      'Numaraları ve adresleri telefonunuza, ailedeki başka bir kişinin telefonuna da kaydetmek',
      'Gece gidilecek yere ulaşım yolunu, taşıma çantası ya da kafesin yerini önceden düşünmek',
    ]},
    { kind: 'paragraf', metin: 'Bazı veteriner fakültelerinin hayvan hastaneleri de acil klinik işletiyor. Örneğin Ankara Üniversitesi Veteriner Fakültesi Hayvan Hastanesi, acil kliniğindeki öncelikli amacın yaşamsal riski bulunan hayvanların durumunu stabil hale getirmek ve gerekiyorsa branş kliniklerine sevk etmek olduğunu yazıyor. Çalışma saatlerinin dönemsel olarak değişebildiğini de belirtiyor; bu yüzden üniversite hastanelerinde de güncel saati sormak gerekiyor.' },
    { kind: 'paragraf', metin: 'Klinik seçerken bakılacak diğer ölçütleri [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazısında topladık.' },

    { kind: 'baslik', metin: 'Yola çıkmadan önce aramak neden önerilir?' },
    { kind: 'paragraf', metin: 'Gece giden bir hasta sahibi çoğu zaman gündüzkü düzeni bulmayı bekliyor. Oysa gece hizmeti daha az personelle yürüyor ve bazı tetkikler sunulamayabiliyor. Ankara Üniversitesi Hayvan Hastanesi bunu açıkça yazıyor: hafta içi 08.30-16.00 dışında ve hafta sonları kan analizi, röntgen, MR ve bilgisayarlı tomografi gibi hizmetler acil klinikte sunulamıyor.' },
    { kind: 'paragraf', metin: 'Aynı hastane, sınırlı sayıda personelle yürüyen acil klinikte hasta kabulünün **triyaj esaslı**, yani hastanın durumunun aciliyetine göre yapıldığını belirtiyor. Bu, gelen sıraya göre değil, durumu daha ağır olana öncelik verildiği anlamına geliyor. Acil kategorisine girmeyen hastalar için ise ilgili kliniklerden randevu alınması isteniyor.' },
    { kind: 'paragraf', metin: 'Yola çıkmadan önce yapılan kısa bir telefon görüşmesi bu yüzden önemli: o saatte hekim olup olmadığını, hayvanınızın türüne bakıp bakmadıklarını ve gerekirse başka bir yere yönlendirme yapıp yapmadıklarını öğrenmiş oluyorsunuz.' },

    { kind: 'baslik', metin: 'Acil durumda yapılması ve yapılmaması gerekenler' },
    { kind: 'paragraf', metin: 'Ankara Üniversitesi Hayvan Hastanesi\'nin hasta sahiplerine önerisi kısa: önce sakin kalmak, hemen veteriner hekimi arayıp yönlendirmelerini dikkate almak ve en yakın sağlık kuruluşuna ulaşmaya çalışmak. Ağrı içindeki kedi ve köpeklerin farklı tepkiler verebileceğini, bu yüzden ısırılma ve tırmalanmaya karşı kendinizi korumanız gerektiğini de hatırlatıyor.' },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlıdır, teşhis ve tedavi önerisi içermez. Hayvanınızda bir sağlık sorunu olduğunu düşünüyorsanız vakit kaybetmeden bir veteriner hekime başvurmanız gerekiyor. Hekime danışmadan ilaç verilmemesi önerilir: Ankara Üniversitesi Hayvan Hastanesi, insanlara sakıncasız görünen ağrı kesiciler gibi ilaçların hayvanlarda çoğu zaman beklenmedik sonuçlar ve riskli durumlar doğurabildiğini vurguluyor.' },
    { kind: 'paragraf', metin: 'Gece gidilen yerin hayvanınızı ilk kez görmesi büyük olasılıkla. Bu yüzden yanınızda aşı karnesi ya da pasaport, kullandığı ilaçların adı ve bilinen bir hastalığı varsa önceki kayıtlarının bulunması işi kolaylaştırıyor. Zehirlenme şüphesinde neler yapılacağını [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazısında ayrıca anlattık.' },

    { kind: 'baslik', metin: 'Gece ücreti neden farklı olabilir?' },
    { kind: 'paragraf', metin: 'Hayvan hastaneleri ve muayenehaneler, bağlı oldukları veteriner hekimler odasının o yıla ait asgari ücret tarifesinden az olmamak üzere kendi ücret tarifelerini belirliyor ve bu tarifeyi hasta sahiplerinin görebileceği bir yere asmak zorunda. Acil hizmet için ayrı bir tarife uygulayan yerler de var; Ankara Üniversitesi Hayvan Hastanesi acil klinik ücret tarifesini ayrıca yayımlıyor.' },
    { kind: 'paragraf', metin: 'Gece gidilecek yerin ücretini telefonda sormak ya da bekleme odasındaki tarifeye bakmak, sonradan sürpriz yaşamayı önlüyor. Asgari ücret tarifesinin ne olduğunu [[asgari-ucret-tarifesi-nedir|asgari ücret tarifesi nedir]] yazısında, ücretleri etkileyen etkenleri de [[veteriner-ucretleri|veteriner ücretleri]] yazısında bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Acil klinikler en çok ne zaman yoğun?' },
    { kind: 'paragraf', metin: 'Pennsylvania Üniversitesi Veteriner Fakültesi\'nden Drobatz ve ekibi, kentteki bir eğitim hastanesinin acil servisine 1987-2002 arasında gelen kedi ve köpek kayıtlarını inceledi. Haftanın en yoğun günleri cumartesi ve pazardı; büyük bayram ve tatil günlerinin çoğunda da hasta sayısı belirgin biçimde artıyordu. Gün içinde en yoğun dilimler hafta ortası akşamları ile cumartesi ve pazar öğleden sonralarıydı.' },
    { kind: 'paragraf', metin: 'Bu çalışma ABD\'deki tek bir hastaneye ait ve Türkiye\'deki yoğunluğu doğrudan göstermiyor. Yine de tatil ve hafta sonu günlerinde bekleme süresinin uzayabileceğini düşünmek, gece ve tatil planını önceden yapmanın neden önemli olduğunu gösteriyor.' },
    { kind: 'yanilgi', baslik: '"Dolunay gecelerinde veteriner acilleri dolup taşar"', metin: 'Drobatz ve ekibinin on altı yıllık kayıtlarında acil servisteki hasta sayısı ile dolunay arasında bir ilişki bulunmadı. Aynı sonuç Cadılar Bayramı ve ayın 13\'üne denk gelen cuma günleri için de geçerliydi. Yoğunluğu belirleyen, haftanın günü, saat ve tatillerdi.' },

    { kind: 'baslik', metin: 'Sokak ya da yaban hayvanı için gece kime ulaşılır?' },
    { kind: 'paragraf', metin: 'Sahipsiz bir hayvan için durum farklı. Ankara Üniversitesi Hayvan Hastanesi, serbest yaşayan şehir hayvanlarının tüm yetki ve sorumluluğunun yerel yönetimlere verildiğini, yaban hayvanlarına ilişkin süreçlerin ise Tarım ve Orman Bakanlığı taşra teşkilatı aracılığıyla yürütüldüğünü yazıyor.' },
    { kind: 'paragraf', metin: 'Ankara\'da yardıma muhtaç bir şehir hayvanı için ALO 153 hattı aranabiliyor; ihbarla alınan hayvanlar Büyükşehir Belediyesi tarafından tedaviye götürülüyor ve gerekli görülenler fakülteye sevk ediliyor. Yaralı bir yaban hayvanı için de ALO 112 hattından Tarım ve Orman Bakanlığı\'na ihbarda bulunulabiliyor. Başka şehirlerde belediyenin kendi hattını ve veteriner işleri biriminin çalışma düzenini önceden öğrenmek önerilir.' },

    { kind: 'baslik', metin: 'Veterito klinik profilinde çalışma saatleri' },
    { kind: 'paragraf', metin: 'Gece arayışını zorlaştıran şey, kliniklerin çalışma saatlerini çoğu zaman dışarıya düzenli olarak duyurmaması. Veterito klinik panelinde kuruluş türü, hizmetler ve çalışma saatleri düzenlenebiliyor ve klinik profili aramalarda bu bilgilerle görünüyor. Gece hizmeti veren bir klinik için bunu profilde yazmak, acil bir anda aranan yer olmayı belirliyor.' },
  ],
  sss: [
    { soru: 'Nöbetçi veteriner nasıl bulunur?', cevap: 'En güvenli yol, evinize en yakın hayvan hastanesini önceden bulmak. Hayvan Hastaneleri Yönetmeliği hastanelerin 24 saat hizmet vermesini ve en az bir hekimin gece nöbeti tutmasını şart koşuyor. Gece açık olduğunu söyleyen başka klinikleri de bir kez arayıp teyit etmek ve numaraları telefona kaydetmek önerilir.' },
    { soru: 'Her veteriner kliniği gece açık mı?', cevap: 'Hayır. Gece hizmeti mevzuatta yalnız hayvan hastaneleri için zorunlu. Muayenehane ve poliklinikler kendi çalışma saatlerine göre açık; gece hizmeti veren muayenehane ve poliklinikler olsa da bu, kliniğin kendi tercihi. Gece açık olup olmadığını kliniğin kendisine sormak gerekiyor.' },
    { soru: 'Hayvan hastanesi ile klinik arasındaki fark nedir?', cevap: 'Hayvan hastanesinde teşhis ve tedavi ayakta veya yatarak yapılıyor ve kadro en az beş veteriner hekimden oluşuyor; bunlardan biri uzman. Poliklinik en az dört hekimin bir araya geldiği muayenehaneler bütünü, muayenehane ise ayakta muayenenin yapıldığı iş yeri. Gece 24 saat hizmet zorunluluğu yalnız hastanede var.' },
    { soru: 'Gece acile gitmeden önce aramak gerekir mi?', cevap: 'Evet, aramak önerilir. Gece hizmeti daha az personelle yürüyor ve bazı tetkikler sunulamayabiliyor. Ankara Üniversitesi Hayvan Hastanesi, mesai dışında kan analizi, röntgen, MR ve tomografi gibi hizmetlerin acil klinikte sunulamadığını yazıyor. Kısa bir görüşme, doğru yere gitmenizi sağlıyor.' },
    { soru: 'Acil klinikte neden sıra beklemeden başkası alınıyor?', cevap: 'Çünkü acil kliniklerde hasta kabulü çoğu zaman geliş sırasına göre değil, aciliyete göre yapılıyor. Ankara Üniversitesi Hayvan Hastanesi, acil klinikte kabulün triyaj esaslı olduğunu, yani hastanın durumunun aciliyetinin dikkate alındığını belirtiyor. Durumu daha ağır olan hayvan önce görülüyor.' },
    { soru: 'Gece veteriner ücreti daha mı pahalı?', cevap: 'Olabilir, kliniğin tarifesine bağlı. Hastaneler ve muayenehaneler oda asgari ücret tarifesinden az olmamak üzere kendi tarifelerini belirleyip bekleme odasına asmak zorunda; acil hizmet için ayrı tarife uygulayan yerler de var. Ücreti telefonda ya da tarifeden önceden öğrenmek sürprizi önlüyor.' },
    { soru: 'Gece yaralı bir sokak hayvanı görürsem kimi aramalıyım?', cevap: 'Serbest yaşayan şehir hayvanlarının sorumluluğu yerel yönetimlerde. Ankara\'da bu durumda ALO 153 hattı aranabiliyor ve hayvan belediye tarafından tedaviye götürülüyor. Yaban hayvanı için ALO 112 hattından Tarım ve Orman Bakanlığı\'na ihbar yapılabiliyor. Başka şehirlerde belediyenin hattını önceden öğrenmek önerilir.' },
  ],
  kontrolListesi: [
    'En yakın hayvan hastanesi belli mi?',
    'Gece numarası telefonda kayıtlı mı?',
    'Gece kabul ettiği teyit edildi mi?',
    'Hekiminizin yönlendirdiği yer var mı?',
    'Aşı karnesi kolay bulunuyor mu?',
    'Taşıma çantası hazır mı?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Hayvan Hastaneleri Yönetmeliği (madde 4, 8, 9, 15, 24)',
      adres: 'https://www.mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=15625&mevzuatTur=KurumVeKurulusYonetmeligi&mevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği (madde 4, 7, 10, 12)',
      adres: 'https://www.mevzuat.gov.tr/MevzuatMetin/yonetmelik/7.5.15393.pdf',
    },
    {
      kurum: 'Ankara Üniversitesi Veteriner Fakültesi Hayvan Hastanesi',
      baslik: 'Acil Klinik',
      adres: 'https://hayvanhastanesi.veterinary.ankara.edu.tr/acil-klinik',
    },
    {
      kurum: 'University of Pennsylvania, School of Veterinary Medicine',
      yazarlar: 'Drobatz KJ, Syring R, Reineke E, Meadows C',
      baslik: 'Association of holidays, full moon, Friday the 13th, day of week, time of day, day of week, and time of year on case distribution in an urban referral small animal emergency clinic',
      dergi: 'Journal of Veterinary Emergency and Critical Care',
      yil: 2009,
      kunye: '19(5):479-483',
      doi: '10.1111/j.1476-4431.2009.00452.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19821890/',
    },
  ],
};
