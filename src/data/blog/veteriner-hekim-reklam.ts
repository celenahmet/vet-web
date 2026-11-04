import type { BlogYazi } from './types';

export const veterinerHekimReklam: BlogYazi = {
  slug: 'veteriner-hekim-reklam',
  baslik: 'Veteriner Hekimler Reklam Yapabilir mi?',
  ozet: 'Veteriner hekimler ve klinikler reklam yapabilir mi? Tabelada, internette ve sosyal medyada nelerin yazılabildiğini, yaptırımları kanun maddeleriyle anlattık.',
  kapakAlt:
    'Klinikte dizüstü bilgisayarla çalışan veteriner hekim ve masadaki golden köpek',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-15',
  bloklar: [
    { kind: 'paragraf', metin: '**Hayır, veteriner hekimler ve klinikler reklam yapamaz; yalnızca kliniğin adı, adresi, telefonu, hekimin unvanı ve muayene saatleri gibi tanıtıcı bilgileri duyurabilir.** 6343 sayılı kanun, çalışma yerini ve ihtisası bildiren ilanlara izin veriyor, ama bunların propaganda ve reklam mahiyetinde olmamasını şart koşuyor.' },
    { kind: 'paragraf', metin: 'Kural hem mesleği icra edenleri hem de kliniğini seçerken tabelalara, ilanlara ve sosyal medya paylaşımlarına bakan hayvan sahiplerini ilgilendiriyor. Aşağıda tabela, internet, indirim, uzmanlık unvanı ve ürün tanıtımı konularını kanun ve yönetmelik maddeleriyle ele aldık.' },

    { kind: 'tablo', basliklar: ['Konu', 'Durum', 'Dayanak'], satirlar: [
      ['Klinik adı, adres, telefon', 'Yazılabilir', 'Poliklinik Yönetmeliği md. 18'],
      ['Muayene günü ve saatleri', 'Duyurulabilir', 'Birlik Yönetmeliği md. 97'],
      ['Hekimin adı, unvanı, ihtisası', 'Tabelaya yazılabilir', 'Poliklinik Yönetmeliği md. 18'],
      ['Frapan renk, avantaj vaadi', 'Kullanılamaz', 'Birlik Yönetmeliği md. 97'],
      ['Yabancı dilde unvan', 'Kullanılamaz', 'Poliklinik Yönetmeliği md. 18'],
      ['Müşteriye teşekkür ilanı', 'Hekim veremez', 'Birlik Yönetmeliği md. 98'],
    ]},

    { kind: 'baslik', metin: 'Reklam yasağı hangi metne dayanıyor?' },
    { kind: 'paragraf', metin: '6343 sayılı kanunun 9. maddesi, veteriner hekimlerin çalışma yerlerini ve ihtisaslarını bildiren ilanlar düzenleyebileceğini, ancak bunların propaganda ve reklam mahiyetinde olmaması gerektiğini söylüyor. Yani bilgi vermek serbest, öne çıkmaya yönelik reklam serbest değil.' },
    { kind: 'paragraf', metin: 'Meslek içi kurallar aynı çizgide. Türk Veteriner Hekimleri Birliği (TVHB) uygulama yönetmeliğinin 72. maddesine göre tabela, ilan ve reçete kâğıtlarında kanunen kazanılmış sıfatlar dışında unvan kullanılamıyor ve bunlara reklam anlamı taşıyan biçim ve işaretler konamıyor.' },
    { kind: 'paragraf', metin: 'Kanunun disiplin maddesi de konuyu ayrıca sayıyor. Çalışma yerlerini ve ihtisasları bildiren ilanları propaganda ve reklam amacıyla düzenlemek, tabela, ilan, reçete, internet, medya ve sosyal medya gibi yerlerde reklam ve propaganda mahiyetinde biçim, içerik, ifade ve işaretler kullanmak yazılı ihtar gerektiren fiiller arasında.' },

    { kind: 'baslik', metin: 'Tabelaya ne yazılabilir?' },
    { kind: 'paragraf', metin: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği\'nin 18. maddesi tabelayı tanıtım için serbest bırakıyor, ama içeriğini sınırlıyor. Muayenehane ve poliklinik dışındaki tabelaya muayenehane veya polikliniğin adı, telefon numarası, veteriner hekimlerin adı, unvanı ve varsa kazandığı ihtisaslar yazılabiliyor.' },
    { kind: 'paragraf', metin: 'Yanıltıcı bilgi, yanlış ifade ve mesleği küçük düşürücü ifade kullanılamıyor. Başka bir unvan ya da mevcut unvanların yabancı dildeki karşılıkları da yazılamıyor. Yönetmeliğin 22. maddesi ise dış cephede yönetmelikte belirtilen tabelalardan başka tabela ve ibare kullanılmasını, ruhsatta verilen isim dışında başka bir isim kullanılmasını yasaklıyor. Ruhsat sürecini [[veteriner-klinigi-acmak|veteriner kliniği açmak]] yazımızda anlattık.' },
    { kind: 'yanilgi', baslik: '"Kendi tabelama ve broşürüme istediğimi yazabilirim"', metin: 'Tabela içeriği yönetmelikle sınırlı: ad, telefon, hekimin adı, unvanı ve varsa ihtisas yazılabiliyor. Duyurularda ise reklam niteliği taşıyan frapan renkler ve müşteriye maddi ya da manevi avantaj sağlanacağını belirten ifadeler kabul edilmiyor.' },

    { kind: 'baslik', metin: 'İnternet ve sosyal medya paylaşımları' },
    { kind: 'paragraf', metin: 'Kanunun disiplin maddesi internet, medya ve sosyal medyayı açıkça sayıyor. Bir kliniğin web sitesi ya da sosyal medya hesabı, tabela ve ilanla aynı fiil kapsamında anılıyor: adres, telefon ve çalışma saati gibi bilgi vermek ayrı, reklam ve propaganda mahiyetinde biçim ve ifade kullanmak ayrı.' },
    { kind: 'paragraf', metin: 'TVHB uygulama yönetmeliğinin 97. maddesi duyurular için bir çerçeve çiziyor. Gazete, afiş, broşür, el ilanı ve her türlü iletişim aracındaki duyurularda adres, telefon numarası, muayene günü ve saatleri, sahip olunan unvan, acil olaylar için ev adresi ve muayenehaneyi bulmaya yardımcı işaretlerin dışına çıkılmaması bekleniyor. Reklam niteliği taşıyan frapan renkler ile bilimsel ve eğitici nitelik taşımayan ışıklı gösteriler ve süslemeler de bu çerçevenin dışında kalıyor.' },
    { kind: 'paragraf', metin: 'Bir paylaşımın bu çerçeveye girip girmediği kuşkuluysa, bağlı olunan veteriner hekimler odasına danışmak önerilir.' },

    { kind: 'baslik', metin: 'İndirim, kampanya ve teşekkür ilanı' },
    { kind: 'paragraf', metin: '97. madde, müşteriye maddi ve manevi avantaj sağlanacağını belirten her türlü yazı ve ifadeden kaçınılmasını istiyor. İndirim ya da kampanya vaadi içeren bir duyuru bu çerçevede sorunlu olabiliyor; yayımlamadan önce odaya danışmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Ücret konusunda ayrı bir sınır da var: oda ya da Merkez Konseyi tarafından belirlenen asgari ücret tarifesinin altında ücret almak, kanunda para cezası gerektiren fiiller arasında. Tarifelerin nasıl işlediğini [[veteriner-ucretleri|veteriner ücretleri]] yazımızda bulabilirsiniz.' },
    { kind: 'paragraf', metin: 'TVHB uygulama yönetmeliğinin 98. maddesi, hayvan sahiplerinin veteriner hekimlere ilişkin teşekkür ilanı vermesini doğal buluyor. Buna karşılık veteriner hekimlerin hiçbir suretle müşterisine yönelik teşekkür ilanı ya da reklam veremeyeceğini söylüyor.' },
    { kind: 'yanilgi', baslik: '"Hayvan sahibinin kliniğe teşekkür etmesi de yasak"', metin: 'Yönetmelik hayvan sahiplerinin teşekkür ilanı vermesini doğal olarak değerlendiriyor. Sınırlama, veteriner hekimin müşterisine yönelik teşekkür ilanı ya da reklam vermesine getirilmiş.' },

    { kind: 'baslik', metin: 'Uzmanlık unvanı ve ürün tanıtımı' },
    { kind: 'paragraf', metin: 'Kanuna göre veteriner hekimlikte uzmanlık mevzuatına göre alınmış uzmanlık belgesi olmadan herhangi bir biçimde uzmanmış gibi davranmak ya da tanıtım yapmak suretiyle meslek uygulamasında bulunmak, para cezası gerektiren fiiller arasında. Tabela, ilan ve reçetede de kanunen kazanılmış sıfatlar dışında unvan kullanılamıyor.' },
    { kind: 'paragraf', metin: 'Ürün tanıtımı için de ayrı bir hüküm var. Şahsi çıkar sağlamak amacıyla ticari ürün ve/veya hizmetin tanıtımında yer almak ya da reklamına aracılık etmek, para cezası gerektiren fiiller arasında sayılıyor. Kanun, kurumlara veya meslektaşlara destek sağlamayı bu kapsamın dışında tutuyor.' },

    { kind: 'baslik', metin: 'Kurallara uymayana ne oluyor?' },
    { kind: 'paragraf', metin: 'Disiplin cezalarını oda haysiyet divanı veriyor. Kanunun 41. maddesindeki ceza basamakları ve reklamla ilgili fiillerin yeri şöyle:' },
    { kind: 'liste', maddeler: [
      '**Yazılı ihtar:** Daha özenli davranılması gerektiğinin yazıyla bildirilmesi; reklam amaçlı ilan, tabela ve sosyal medya kullanımı bu grupta',
      '**Para cezası:** Fiilin ağırlığına göre 20.000 ile 100.000 TL arasında; ürün tanıtımı, uzmanmış gibi davranmak, haksız rekabet ve asgari tarifenin altında ücret bu grupta',
      '**Geçici men:** Meslek uygulamasından 15 günden 6 aya kadar alıkonulma',
    ]},
    { kind: 'paragraf', metin: 'Para cezası tutarı sabit değil: kanundaki disiplin para cezaları her takvim yılı başından geçerli olmak üzere yeniden değerleme oranında artırılarak uygulanıyor. Savunma alınmadan ceza verilemiyor. Ceza kesinleştikten sonra beş yıl içinde aynı ağırlıkta yeni bir fiil işlenirse, kanundaki cezanın bir derece ağırı uygulanıyor.' },
    { kind: 'uyari', metin: 'Bu yazı kanun ve yönetmelik maddelerinin özetidir, hukuki danışmanlık değildir. Belirli bir paylaşım ya da duyuru için bağlı olunan veteriner hekimler odasının görüşünü almak gerekiyor. Hayvanınızda bir sağlık sorunu varsa bir klinik paylaşımına değil, bir veteriner hekimin muayenesine başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Hayvan sahibi olarak ilanlara nasıl bakılır?' },
    { kind: 'paragraf', metin: 'Bir kliniğin adını, adresini, telefonunu ve çalışma saatlerini paylaşması kurallara uygun, beklenen bir tanıtım. Klinik seçerken ruhsat, hekimin unvanı ve ihtisas gibi doğrulanabilir bilgilere bakmak daha sağlıklı; bunları [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazımızda sıraladık.' },
    { kind: 'paragraf', metin: 'Kliniğin türünü anlamak için [[muayenehane-poliklinik-hastane-farki|muayenehane, poliklinik ve hastane farkı]] yazısına da bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Kurallar değişiyor mu?' },
    { kind: 'paragraf', metin: 'Kanunun disiplin maddesi son dönemde yeniden düzenlendi. 41. madde Anayasa Mahkemesinin 22 Mart 2023 tarihli kararıyla iptal edilmişti ve 11 Haziran 2026 tarihli 7584 sayılı kanunla yeniden düzenlendi. TVHB\'nin 15 Ağustos 2026 tarihli açıklamasına göre İstanbul Veteriner Hekimler Odasının 20 sayfalık görüşünün yarıdan fazlası reklam yasağıyla ilgili; yani konu mesleğin içinde de tartışılıyor.' },
    { kind: 'paragraf', metin: 'TVHB uygulama yönetmeliği ayrı bir metin. Kanundaki son değişiklikle uyumunu mevzuat.gov.tr\'deki güncel hâlinden ya da odadan teyit etmek gerekiyor.' },
  ],
  kontrolListesi: [
    'Tabelada yalnız izinli bilgi var mı?',
    'Ruhsattaki ad kullanılıyor mu?',
    'İndirim ya da avantaj vaadi var mı?',
    'Uzmanlık belgesi var mı?',
    'Paylaşım bilgi vermekle mi sınırlı?',
    'Odanın görüşü alındı mı?',
  ],
  sss: [
    { soru: 'Veteriner hekimler sosyal medyada paylaşım yapabilir mi?', cevap: 'Reklam ve propaganda niteliği taşımayan, bilgi veren paylaşımlar yapılabilir. Kanun, internet ve sosyal medya dahil her ortamda reklam ve propaganda mahiyetinde biçim, içerik ve ifade kullanmayı yazılı ihtar gerektiren fiil sayıyor. Emin olunmayan paylaşım için bağlı olunan oda ile görüşmek gerekiyor.' },
    { soru: 'Veteriner kliniği tabelasına neler yazılabilir?', cevap: 'Tabelaya kliniğin adı, telefon numarası, veteriner hekimlerin adı, unvanı ve varsa kazandığı ihtisaslar yazılabiliyor. Yanıltıcı bilgi, başka bir unvan ve unvanların yabancı dildeki karşılıkları kullanılamıyor. Ruhsattaki ad dışında bir ad da kullanılamıyor. Dayanak, Muayenehane ve Poliklinik Yönetmeliği\'nin 18. ve 22. maddeleri.' },
    { soru: 'Veteriner klinikleri indirim kampanyası yapabilir mi?', cevap: 'İndirim ve kampanya duyurusu yönetmeliğe göre sorunlu olabiliyor. TVHB uygulama yönetmeliği, duyurularda müşteriye maddi ve manevi avantaj sağlanacağını belirten yazı ve ifadeleri kabul etmiyor. Ayrıca asgari ücret tarifesinin altında ücret almak kanunda para cezası gerektiriyor. Uygulamadan önce odaya danışmak gerekiyor.' },
    { soru: 'Hayvan sahibi veteriner hekime teşekkür ilanı verebilir mi?', cevap: 'Evet, yönetmelik hayvan sahiplerinin veteriner hekimlere ilişkin teşekkür ilanı vermesini doğal buluyor. Yasak, veteriner hekimin müşterisine yönelik teşekkür ilanı ya da reklam vermesi için getirilmiş. Hekimin ya da kliniğin böyle bir paylaşımı kendi adına kullanıp kullanamayacağı için oda ile görüşmek gerekiyor.' },
    { soru: 'Veteriner hekim bir ürünün reklamında yer alabilir mi?', cevap: 'Şahsi çıkar amacıyla ticari ürünün tanıtımında yer almak yasak; kanunda para cezası gerektiriyor. Kanun, kurumlara veya meslektaşlara destek sağlamayı bu kapsamın dışında tutuyor. Somut bir iş birliği teklifi için bağlı olunan veteriner hekimler odasına danışmak gerekiyor.' },
    { soru: 'Veteriner hekim kendine uzman diyebilir mi?', cevap: 'Uzmanlık belgesi olmadan diyemez. Kanun, veteriner hekimlikte uzmanlık mevzuatına göre alınmış uzmanlık belgesi olmadan herhangi bir biçimde uzmanmış gibi davranmayı ya da tanıtım yapmayı para cezası gerektiren fiiller arasında sayıyor. Tabela, ilan ve reçetede de kanunen kazanılmış sıfatlar dışında unvan kullanılamıyor.' },
    { soru: 'Reklam yapan veteriner hekime ne ceza verilir?', cevap: 'Reklam amaçlı ilan, tabela ya da sosyal medya kullanımı kanunda yazılı ihtar gerektiren fiiller arasında. Ürün tanıtımı, uzmanmış gibi davranmak ve haksız rekabet para cezası gerektiriyor; tutar kanunda fiilin ağırlığına göre 20.000 ile 100.000 TL arasında ve her yıl artırılıyor. Cezayı oda haysiyet divanı veriyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarz ve Mesai Şekillerine Dair Kanun',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=6343&MevzuatTertip=3',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği',
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=15393&MevzuatTur=7&MevzuatTertip=5',
    },
    {
      kurum: 'Türk Veteriner Hekimleri Birliği',
      baslik: 'Türk Veteriner Hekimleri Birliği Hizmetlerinin Yürütülmesine İlişkin Uygulama Yönetmeliği',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=10644&MevzuatTertip=5',
    },
    {
      kurum: 'Türk Veteriner Hekimleri Birliği',
      baslik: '6343 Sayılı Kanunun Disiplin Hükümlerine İlişkin Düzenleme Süreci Hakkında Bilgilendirme',
      yil: 2026,
      adres: 'https://tvhb.org.tr/2026/08/15/6343-sayili-kanunun-disiplin-hukumlerine-iliskin-duzenleme-sureci-hakkinda-bilgilendirme/',
    },
  ],
};
