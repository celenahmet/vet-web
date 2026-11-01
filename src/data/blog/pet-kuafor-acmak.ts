import type { BlogYazi } from './types';

export const petKuaforAcmak: BlogYazi = {
  slug: 'pet-kuafor-acmak',
  baslik: 'Pet Kuaför Açmak İçin Ne Gerekir?',
  ozet: 'Pet kuaför açmak için belediyeden işyeri ruhsatı gerekiyor. Barınma ya da eğitim eklenirse Tarım ve Orman izni de lazım; şartlar ve sınırlar yazıda.',
  kapakAlt:
    'Bakım masasında uzun kulaklı köpeği tarayan görevli',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Pet kuaför açmak için önce belediyeden işyeri açma ve çalışma ruhsatı almak gerekiyor; ruhsat alınmadan açılan işyerleri yetkili idareler tarafından kapatılıyor.** Hizmetler arasına geçici barındırma ya da davranış eğitimi girerse, ayrıca il tarım ve orman müdürlüğünden çalışma izni almak da gerekiyor.' },
    { kind: 'paragraf', metin: 'Evcil hayvan bakımı sevenler için cazip bir iş gibi görünüyor, ama işin bir de hukuki ve sağlıkla ilgili tarafı var. Ev hayvanlarına ilişkin yönetmelik üretim, satış, barınma ve eğitim yerlerini sayıyor; tüy bakımı ve tıraş bu dört başlık arasında ayrıca anılmıyor. Bu yüzden gerekenler, salonda hangi hizmetlerin verileceğine göre değişiyor. Aşağıda kanun ve yönetmelik metinlerinde doğrulayabildiğimiz noktaları anlattık; doğrulayamadığımız yerleri de açıkça belirttik.' },

    { kind: 'tablo', basliklar: ['Verilecek hizmet', 'Gerekenler'], satirlar: [
      ['Yıkama, tarama, tüy kesimi', 'Belediyeden işyeri açma ve çalışma ruhsatı'],
      ['Geçici barındırma (pansiyon, otel)', 'Belediye ruhsatı ve il müdürlüğü çalışma izni'],
      ['Davranış ve itaat eğitimi', 'Belediye ruhsatı ve il müdürlüğü çalışma izni'],
      ['Hayvan satışı', 'Eğitim sertifikası, ruhsat ve çalışma izni'],
      ['Aşı, ilaç, cerrahi müdahale', 'Yalnızca veteriner hekim yapabilir'],
    ]},

    { kind: 'baslik', metin: 'Önce hangi hizmeti vereceğinize karar verin' },
    { kind: 'paragraf', metin: 'Yönetmelik, hayvanların geçici süreler için barındırıldığı konukevi, pansiyon ve otel gibi yerleri "barınma yeri" olarak tanımlıyor. Eğitim yeri ise hayvanların itaat, tuvalet terbiyesi, hırçın hayvanların sakinleştirilmesi gibi özelliklerinin veteriner hekim denetiminde kazandırıldığı yer. Salonda geçici konaklama ya da davranış çalışması sunulacaksa, işyeri bu tanımların kapsamına girebiliyor.' },
    { kind: 'paragraf', metin: 'Bu ayrım önemli, çünkü yönetmelik üretim, satış, barınma ve eğitim yerleri için ayrıca bir çalışma izni arıyor. Pansiyonlu ya da eğitim veren bir bakım merkezi bu tanımlara doğrudan girerken, yalnızca yıkama ve tıraş yapan bir salon yönetmelikte ayrıca anılmıyor. Planı kağıda dökmeden önce hizmet listesini netleştirmek, sonradan ek izin aramaktan çok daha kolay.' },

    { kind: 'baslik', metin: 'Belediye ruhsatı ilk adım' },
    { kind: 'paragraf', metin: 'İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik, usulüne uygun işyeri açma ve çalışma ruhsatı alınmadan işyeri açılamayacağını ve çalıştırılamayacağını söylüyor. Yönetmeliğe göre ruhsatı belediye sınırları ve mücavir alanlar içinde belediye veriyor. Başka kurumların kendi mevzuatına göre verdiği izinler de bu ruhsat yükümlülüğünü ortadan kaldırmıyor.' },
    { kind: 'paragraf', metin: 'Yönetmelik ruhsat sınıflarını bir listeyle düzenliyor. Listede "ev ve süs hayvanı üretim, satış ve eğitim tesisleri" geçiyor; sadece tüy bakımı yapan bir salonun hangi gruba gireceği ise bu listeden doğrudan okunamıyor. Ruhsatı veren yetkili idare belediye olduğu için en doğru cevabı belediyenin ruhsat birimi veriyor. Başvurudan önce hizmet listesiyle birlikte bir görüşme yapılması önerilir.' },
    { kind: 'yanilgi', baslik: '"Dükkânı tutup tabela asmak yeterli"', metin: 'Yönetmeliğe göre ruhsat alınmadan açılan işyerleri yetkili idareler tarafından kapatılıyor. Kira sözleşmesi, tabela ve ekipman hazır olsa bile ruhsat süreci tamamlanmadan müşteri kabul etmeye başlamak işyerinin kapatılmasına yol açabiliyor.' },

    { kind: 'baslik', metin: 'Tarım ve Orman izni ne zaman gerekiyor?' },
    { kind: 'paragraf', metin: 'Ev hayvanlarının üretim, satış, barınma ve eğitim yerleri hakkındaki yönetmelik iki aşamalı bir izin yolu tarif ediyor. Önce il müdürlüğü yer ve projeyi inceleyip kuruluş izni veriyor; bu izin üç ay için geçerli. Ardından çalışma izni için başvuruluyor ve belgeler uygun bulunursa il müdürlüğü çalışma izni düzenliyor.' },
    { kind: 'paragraf', metin: 'Çalışma izni başvurusunda istenen belgeler arasında belediyeden alınmış işyeri ruhsatı da var. Bunun yanında, muayenehane, poliklinik ya da hayvan hastanesinde çalışan ve hizmet içi eğitim belgesi olan bir veteriner hekimle yapılmış, en az bir yıllık, noter tasdikli sözleşme isteniyor. Yani barınma ya da eğitim hizmeti veren bir işyerinin kaçınılmaz olarak bir veteriner hekimle düzenli bağı olması gerekiyor.' },
    { kind: 'paragraf', metin: 'Hayvan konukevleri, pansiyon ve oteller ile hayvan eğitim yerleri, 2024 tarihli Hayvanların Korunması Hakkında Uygulama Yönetmeliği\'ne göre denetime de tabi. Hayvan satışı yapmak isteyenler için ise ek şartlar var; satış kurallarını [[kedi-kopek-satmak-yasak-mi|kedi köpek satışı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Meslek belgesi şart mı?' },
    { kind: 'paragraf', metin: 'İşyeri ruhsat yönetmeliğine 2020\'de eklenen bir hüküm, işyeri sahibinin ya da her meslek dalında çalışan en az bir kişinin ustalık belgesi, ilgili okul diploması ya da kurs bitirme belgesi gibi bir belgeye sahip olmasını arıyor. Aynı hüküm, bu belgelerin kapsamına girmeyen faaliyet konuları için belge aranmayacağını da söylüyor.' },
    { kind: 'paragraf', metin: 'Pet kuaförlüğünün bu belge kapsamında sayılıp sayılmadığını yönetmelik metninden çıkaramadık. Bu konuda belediyeden yazılı bilgi almak, ikinci el bilgilere güvenmekten daha güvenli. Belge gerekmese bile hayvan davranışı ve tüy bakımı eğitimi almış çalışanlar, hem hayvanın hem çalışanın güvenliği açısından işin temeli.' },

    { kind: 'baslik', metin: 'Tıbbi işlemler kuaförün işi değil' },
    { kind: 'paragraf', metin: '5199 sayılı Hayvanları Koruma Kanunu\'nun 7. maddesi, hayvanlara tıbbi ve cerrahi müdahalelerin yalnızca veteriner hekimler tarafından yapılacağını söylüyor. Tırnak diplerinde yara, kulakta akıntı ya da ciltte kızarıklık gibi bir durum fark edildiğinde yapılacak şey bakım değil, hayvanı bir veteriner hekime yönlendirmek.' },
    { kind: 'yanilgi', baslik: '"Huysuz hayvanı ilaçla sakinleştirip tıraş etmek bakımın parçası"', metin: 'Kanunun 7. maddesi tıbbi müdahaleleri veteriner hekime bırakıyor; 8. maddesi de tıbbi amaçlar dışında hayvanın türüne ve etolojik özelliklerine aykırı hale getirecek şekilde ve dozda ilaç verilmesini yasaklıyor. Sakinleştirme kararı salonun değil, veteriner hekimin kararı olmalı.' },
    { kind: 'uyari', metin: 'Bakım sırasında hayvanda yara, kanama, nefes almada zorlanma ya da ani halsizlik görülürse vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Salonda belirti yorumlamak, ilaç ya da krem sürmek veteriner hekimin işi.' },

    { kind: 'baslik', metin: 'Dış görünüş adına yapılamayacaklar' },
    { kind: 'paragraf', metin: 'Kanunun 8. maddesi, ev hayvanının dış görünüşünü değiştirmeye yönelik ve tedavi edici olmayan kuyruk ve kulak kesilmesini, ses tellerinin alınmasını, tırnak ve dişlerinin sökülmesine yönelik cerrahi müdahaleleri yasaklıyor. İstisna yalnızca bir veteriner hekimin tıbbi sebeple gerekli görmesi. Müşteri bir ırk "standardı" için kuyruk ya da kulak kesilmesini isterse, salonun cevabı net olmak zorunda.' },
    { kind: 'paragraf', metin: 'Kanunun 14. maddesi ise hayvanlara kasıtlı kötü davranmayı, bakımı ihmal etmeyi ve fiziksel ya da psikolojik acı çektirmeyi yasaklıyor. Korkan ya da direnen bir hayvana zorla tıraş yapmak bu çerçeveye girebilir. Cezalar ve uygulama için [[hayvana-eziyet-cezasi|hayvana eziyet cezası]] ve [[5199-sayili-kanun|5199 sayılı kanun]] yazılarına bakılabilir.' },

    { kind: 'baslik', metin: 'Salon hijyeni neden ciddiye alınmalı?' },
    { kind: 'paragraf', metin: 'Veteriner dermatoloji dergisinde yayımlanan bir çalışmada, ABD\'nin Washington eyaletindeki 19 bakım salonunda numune alındı. Meticillin dirençli stafilokok 12 salondan ve 112 numunenin 25\'inden izole edildi; en sık elektrikli makine bıçaklarında, makine saplarında ve bakım tasmalarında bulundu. Araştırmacılar bu eşyaların bulaşıcı etkenleri taşıyabileceğini ve dezenfeksiyonun artırılmasının gerektiğini belirtti.' },
    { kind: 'paragraf', metin: 'İsrail\'de yapılan başka bir çalışmada 117 köpek bakım ürünü şişesi incelendi ve 14\'ünde, yani yüzde 11,97\'sinde Pseudomonas aeruginosa üredi. Seyreltilmiş ürünlerde bulaşma, seyreltilmemişlere göre anlamlı biçimde daha sıktı. Yazarlar bu bakterinin bakım sonrası ciddi cilt enfeksiyonlarıyla ilişkili olabileceğini belirtiyor.' },
    { kind: 'paragraf', metin: 'İlk çalışma küçük ve gözleme dayalı, ikincisi ürün şişeleri üzerinde; Türkiye\'deki salonlar için doğrudan bir oran vermiyorlar. Yine de iki çalışma da aynı yönde: aletlerin her hayvandan sonra temizlenmesi ve ürünlerin nasıl seyreltilip saklandığının düzenli olarak gözden geçirilmesi önerilir. Hayvanlarda tüy dökümü ve tüy bakımı üzerine genel bilgi için [[kedi-tuy-dokumu|kedilerde tüy dökümü]] yazımıza bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Veteriner hekimle çalışmak işi güçlendiriyor' },
    { kind: 'paragraf', metin: 'Çalışma izni gerekmese bile bir veteriner hekimle düzenli iletişim kurmak pratikte çok işe yarıyor. Bakım sırasında fark edilen bir deri sorunu, parazit ya da davranış değişikliği olduğunda müşteriyi güvenle yönlendirebileceğiniz bir adres olması hem hayvan hem de salon açısından iyi. Müşteriye "bu bir veteriner hekim değerlendirmesi gerektiriyor" demek, tanı koymaya çalışmaktan çok daha doğru.' },
    { kind: 'liste', maddeler: [
      'Belediyenin ruhsat birimiyle hizmet listesini konuşmak',
      'Pansiyon ya da eğitim varsa il müdürlüğüyle görüşmek',
      'Anlaşmalı bir veteriner hekim bulmak',
      'Makine bıçakları ve tarakların temizlik düzenini yazılı hale getirmek',
    ]},
    { kind: 'paragraf', metin: 'Müşteri hayvanları için bakım öncesi hazırlık da önemli. Tıraşa uygun olup olmadığı belirsiz bir hayvanda ilk adım veteriner kontrolü olmalı; bu konuda [[kedi-yikanir-mi|kedi yıkanır mı]] yazısı da bakım kararını nasıl vermek gerektiğine bir fikir veriyor.' },
  ],
  kontrolListesi: [
    'Belediye ruhsatı alındı mı?',
    'Hizmetler ruhsata uygun mu?',
    'Pansiyon ya da eğitim izni var mı?',
    'Anlaşmalı veteriner hekim var mı?',
    'Aletler her hayvandan sonra temiz mi?',
    'Seyreltilen ürünler izleniyor mu?',
  ],
  sss: [
    { soru: 'Pet kuaför açmak için ruhsat gerekir mi?', cevap: 'Evet, işyeri açma ve çalışma ruhsatı gerekiyor. İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik, usulüne uygun ruhsat alınmadan işyeri açılamayacağını ve ruhsatsız açılan işyerlerinin yetkili idarelerce kapatılacağını söylüyor. Belediye sınırları ve mücavir alanlar içinde ruhsatı belediye veriyor.' },
    { soru: 'Pet kuaförde pansiyon hizmeti verilebilir mi?', cevap: 'Verilebiliyor, ancak ayrı bir izin yolu var. Ev hayvanlarının barınma yerleri yönetmelikte tanımlı ve il tarım ve orman müdürlüğünden çalışma izni gerektiriyor. Başvuruda belediye ruhsatı ve bir veteriner hekimle yapılmış en az bir yıllık noter tasdikli sözleşme isteniyor.' },
    { soru: 'Pet kuaförlük için diploma ya da belge şart mı?', cevap: 'Her faaliyet için şart değil. İşyeri ruhsat yönetmeliği ustalık belgesi, diploma ya da kurs belgesi şartını yalnızca belgelerin kapsamına giren faaliyet konuları için arıyor. Pet kuaförlüğünün bu kapsamda olup olmadığını yönetmelik metninden çıkaramadık; belediyeden yazılı bilgi almak gerekiyor.' },
    { soru: 'Kuaför hayvana sakinleştirici ilaç verebilir mi?', cevap: 'Hayır, bu veteriner hekimin yetkisinde. 5199 sayılı kanunun 7. maddesi hayvanlara tıbbi ve cerrahi müdahalelerin yalnızca veteriner hekimler tarafından yapılacağını söylüyor. 8. madde de tıbbi amaç dışında türüne ve etolojik özelliklerine aykırı hale getirecek şekilde ve dozda ilaç verilmesini yasaklıyor.' },
    { soru: 'Kuaför kulak ya da kuyruk kesebilir mi?', cevap: 'Hayır. Kanunun 8. maddesi, ev hayvanının dış görünüşünü değiştirmeye yönelik tedavi edici olmayan kuyruk ve kulak kesilmesini yasaklıyor. İstisna, yalnızca bir veteriner hekimin tıbbi sebeple gerekli görmesi. Salon çalışanının böyle bir işlem yapması ya da yönlendirmesi söz konusu olmamalı.' },
    { soru: 'Pet kuaför salonlarında hijyen sorunu yaygın mı?', cevap: 'Araştırmalar riskin gerçek olduğunu gösteriyor. ABD\'de 19 salonun 12\'sinde dirençli stafilokok bulundu; İsrail\'de incelenen bakım ürünü şişelerinin yüzde 11,97\'sinde Pseudomonas üredi. Örneklemler küçük olduğu için Türkiye\'deki salonlar hakkında oran vermek mümkün değil; aletlerin düzenli temizlenmesi önerilir.' },
    { soru: 'Müşterinin hayvanında deri sorunu görürsem ne yapmalıyım?', cevap: 'Müşteriyi bir veteriner hekime yönlendirmek gerekiyor. Salonda belirti yorumlamak, krem ya da ilaç önermek veteriner hekimin işi. Bakıma ara verilmesi ve hayvanın muayene edilmesi hem hayvanın hem diğer müşteri hayvanlarının sağlığı açısından en güvenli yol.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 7, 8 ve 14)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Ev ve Süs Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik (8 Ekim 2011, sayı 28078)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2011/10/20111008-4.htm',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'İşyeri Açma ve Çalışma Ruhsatlarına İlişkin Yönetmelik (10 Ağustos 2005, sayı 25902), madde 2, 6 ve ek madde 2',
      adres: 'https://www.mevzuat.gov.tr/MevzuatMetin/21.5.20059207.pdf',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13 Aralık 2024, sayı 32751), madde 33',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'Veterinary Dermatology',
      baslik: 'Recovery of meticillin-resistant Staphylococcus species from pet-grooming salons',
      yazarlar: 'Gould AP, Coyner KS, Trimmer AM, Weese JS, Budke CM',
      dergi: 'Veterinary Dermatology',
      yil: 2020,
      kunye: '31(4):262-e60',
      doi: '10.1111/vde.12839',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31876006/',
    },
    {
      kurum: 'Veterinary Dermatology',
      baslik: 'Pseudomonas aeruginosa isolation from dog grooming products used by private owners or by professional pet grooming salons: prevalence and risk factors',
      yazarlar: 'Perry E, Sutton GA, Haggag L, Fleker M, Blum SE, Kaufmann R',
      dergi: 'Veterinary Dermatology',
      yil: 2022,
      kunye: '33(4):316-e73',
      doi: '10.1111/vde.13072',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35635240/',
    },
  ],
};
