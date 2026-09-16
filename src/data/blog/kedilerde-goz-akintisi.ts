import type { BlogYazi } from './types';

/**
 * KEDI kategorisi. Iki dayanak:
 *   1. Cornell Feline Health Center — konjonktivit "kedilerde en sik goz
 *      rahatsizligi"; belirtiler (gozu kisma, sik kirpma, renksiz-sulu ya da
 *      koyu-yogun akinti, konjonktiva ve ucuncu goz kapaginda sislik/kizariklik);
 *      sik sebepler herpesvirus, kalisivirus, klamidofila, mikoplazma; genc ve
 *      cok kedili ortamlarda daha sik; tedavi genelde 2-3 hafta damla/merhem,
 *      herpes suphesinde antiviral eklenebiliyor.
 *   2. Hartmann ve ark. 2010, JFMS 12(10):775-82 — konjonktiviti olan 41 kedide
 *      PCR: mikoplazma %49, C. felis %56, FHV %27; 37 kedide etken saptandi,
 *      22'sinde COKLU enfeksiyon vardi.
 *
 * ⚠️ ILAC ADI VE DOZ YAZILMIYOR. Gozde kortizonlu damla yanlis tabloda kornea
 * hasarini agirlastirabiliyor; secim hekimin.
 */
export const kedilerdeGozAkintisi: BlogYazi = {
  slug: 'kedilerde-goz-akintisi',
  baslik: 'Kedilerde Göz Akıntısı: Sebepleri ve Ne Zaman Veterinere Gidilir?',
  ozet: 'Göz akıntısı kedilerde en sık görülen göz sorununun habercisi. Akıntının rengi, gözün kısılması ve tek mi çift mi olduğu yönü belirliyor.',
  kapakAlt:
    'Kedilerde göz akıntısı konulu yazının kapak görseli; gözünü kısan kedi, akıntı rengi ve muayene zamanı',
  kategori: 'Kedi',
  tarih: '2026-09-16',
  bloklar: [
    { kind: 'paragraf', metin: 'Gözün köşesinde biriken akıntı, kedilerde en sık karşılaşılan şikâyetlerden. Çoğu zaman "uyku tozu" diye geçiştiriliyor; oysa akıntının **rengi, miktarı ve yanındaki bulgular** ciddi bir tabloyla basit bir tahrişi ayırıyor.' },
    { kind: 'paragraf', metin: 'Bu yazı üç şeyi ayırıyor: akıntının arkasında ne var, hangi bulgu beklemeye uygun değil ve muayenede ne yapılıyor.' },

    { kind: 'baslik', metin: 'En sık görülen göz sorunu' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Kedi Sağlığı Merkezi konjonktiviti "kedilerdeki tüm göz rahatsızlıkları içinde en sık görüleni" olarak tanımlıyor. Konjonktiva, göz kapaklarının iç yüzünü ve göz küresinin dışını kaplayan zar; iltihaplandığında tablo şöyle görünüyor:' },
    { kind: 'liste', maddeler: [
      'Gözü kısma, sık kırpma',
      'Renksiz ve sulu ya da koyu renkli ve yoğun akıntı',
      'Konjonktivada şişlik ve kızarıklık',
      'Üçüncü göz kapağının belirginleşmesi',
      'Gözü patiyle ovalama, ışıktan rahatsız olma',
    ] },
    { kind: 'paragraf', metin: 'Akıntının niteliği yön veriyor ama tek başına tanı koymuyor: sulu akıntı daha çok tahriş ve virüs tablolarında, koyu ve yoğun akıntı bakteriyel katkı olan tablolarda öne çıkıyor.' },

    { kind: 'baslik', metin: 'Arkasında genelde enfeksiyon var' },
    { kind: 'paragraf', metin: 'Cornell’in saydığı başlıca sebepler herpesvirüs, kalisivirüs ve iki bakteri: klamidofila ile mikoplazma. FIV ya da FeLV nedeniyle bağışıklığı baskılanmış kedilerde tablo daha sık görülüyor.' },
    { kind: 'paragraf', metin: 'Münih’teki Ludwig Maximilian Üniversitesi kliniğinden 2010 tarihli bir çalışma, konjonktiviti olan 41 kedide göz sürüntüsünü PCR ile inceledi. 41 kedinin 37’sinde bir etken saptandı ve dağılım şöyleydi:' },
    { kind: 'tablo', basliklar: ['Etken', 'Oran (41 kedilik seride)'], satirlar: [
      ['Chlamydophila felis', '%56'],
      ['Mikoplazma türleri', '%49'],
      ['Kedi herpesvirüsü (FHV)', '%27'],
    ] },
    { kind: 'paragraf', metin: 'Aynı çalışmada 22 kedide **birden çok etken birlikte** bulundu. Pratikteki karşılığı şu: "virüstür, geçer" ya da "damla yeterli" demek çoğu zaman tabloyu eksik okumak oluyor.' },

    { kind: 'yanilgi', baslik: '"Tek gözde akıntı varsa önemsizdir" yanılgısı', metin: 'Tek taraflı akıntı bazen yabancı cisim, tıkalı gözyaşı kanalı ya da kornea çiziği gibi mekanik bir sebebe işaret ediyor; bunlar kendiliğinden geçen tablolar değil. Çift taraflı akıntı ise daha çok bulaşıcı sebepleri düşündürüyor. Yani taraf sayısı ciddiyeti değil, aranacak yeri değiştiriyor.' },

    { kind: 'baslik', metin: 'Aynı gün başvuru gerektiren bulgular' },
    { kind: 'liste', maddeler: [
      'Gözü tamamen kapalı tutmak, açamamak',
      'Belirgin ağrı: dokunmaya izin vermeme, yüzünü ovalamayı sürdürme',
      'Gözde bulanıklık, mavimsi ya da beyazımsı görünüm',
      'Kanlı ya da irinli akıntı',
      'Akıntıya hapşırık, burun akıntısı ve iştahsızlığın eşlik etmesi',
      'Yavru kedide göz kapaklarının yapışması ve şişlik',
    ] },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlı; teşhis ve tedavi yerine geçmez. Evde eczaneden alınan göz damlası kullanılmaz: yanlış tabloda kortizonlu damla kornea hasarını ağırlaştırabiliyor.' },

    { kind: 'baslik', metin: 'Tedavi ve süre' },
    { kind: 'paragraf', metin: 'Cornell, birçok olgunun ilaçsız gerilediğini, tedavi gerektiğinde ise genellikle **iki ila üç hafta boyunca günde üç dört kez** antibiyotikli damla ya da merhem uygulandığını belirtiyor; herpesvirüs şüphesinde antiviral ilaç ekleniyor. Buradaki kritik nokta süre: birkaç gün sonra "düzeldi" diye bırakılan tedavi, tablonun tekrarlamasının en sık sebebi.' },
    { kind: 'paragraf', metin: 'Çok kedili evlerde bulaş önemli. Cornell, tablonun özellikle genç hayvanlarda ve kedi barınağı gibi çok kedili ortamlarda yaygın olduğunu belirtiyor. Yeni kedi alındığında ayrı tutma ve [[kedi-asi-takvimi|aşı takvimi]] bu yüzden önem kazanıyor.' },

    { kind: 'baslik', metin: 'Karar tablosu' },
    { kind: 'tablo', basliklar: ['Durum', 'Ne yapılır'], satirlar: [
      ['Sabah köşede az miktarda kuru akıntı, göz açık ve berrak', 'Birkaç gün gözlenir, tekrarlıyorsa randevu alınır'],
      ['Sulu akıntı, hafif kızarıklık', 'Hekime danışılır'],
      ['Göz kısılıyor, kedi rahatsız', 'Aynı gün başvurulur'],
      ['İrinli akıntı ya da gözde bulanıklık', 'Aynı gün başvurulur'],
      ['Yavru kedide kapaklar yapışık', 'Aynı gün başvurulur'],
      ['Evde başka kedilerde de başladı', 'Ayrı tutulur, hep birlikte değerlendirilir'],
    ] },

    { kind: 'baslik', metin: 'Akıntının görüntüsü ne anlatıyor' },
    { kind: 'paragraf', metin: 'Akıntının rengi ve kıvamı tek başına tanı koydurmuyor ama hekime gidene kadar ne izleneceğini belirliyor. Berrak ve sulu akıntı daha çok tahriş ya da gözyaşı akışındaki bir aksaklığı; koyu, yeşilimsi ve yapışkan akıntı ise iltihabi bir süreci düşündürüyor. Göz çevresinde kuruyup kabuklanan kahverengi iz, akıntının gün boyu devam ettiğini gösteriyor.' },
    { kind: 'liste', maddeler: [
      'Akıntı hangi gözde, ne zaman başladı',
      'Renk ve kıvam: berrak, beyaz, sarı-yeşil',
      'Göz kısılıyor mu, kedi pati ile ovuyor mu',
      'Üçüncü göz kapağı görünüyor mu',
      'Burun akıntısı, hapşırma ya da iştahsızlık eşlik ediyor mu',
      'Evde başka kedide aynı bulgu var mı',
    ] },
    { kind: 'paragraf', metin: 'Bu altı satır, muayenede hekimin zaten soracağı sorular. Telefonla randevu alırken söylenmesi bile sıranın ve hazırlığın değişmesini sağlayabiliyor; özellikle göz kısılması ve ovma bulgusu, ağrı anlamına geldiği için öne alınıyor.' },

    { kind: 'baslik', metin: 'Yavru kedilerde ve çok kedili evde' },
    { kind: 'paragraf', metin: 'Bulaşıcı etkenler söz konusu olduğunda yaş ve ortam tabloyu değiştiriyor. Yavru kedilerde göz akıntısı üst solunum yolu enfeksiyonuyla birlikte gidiyor ve göz kapakları birbirine yapışabiliyor; bu yaşta beklemek, kornea hasarı riskini artırıyor. Sokaktan yeni alınmış ya da barınaktan gelmiş yavruda akıntı, ilk muayene sebeplerinden biri.' },
    { kind: 'paragraf', metin: 'Çok kedili evlerde ise soru tek kediyle sınırlı kalmıyor. 41 kedilik seride kedilerin yarısından fazlasında birden çok etken birlikte bulundu; yani "hangi mikrop" sorusunun cevabı çoğu zaman tek değil. Hekim bu yüzden ev içindeki diğer kedileri, aşı geçmişini ve yeni gelen kedi olup olmadığını soruyor. Aşı düzeni için [[kedi-asi-takvimi|kedi aşı takvimi]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Tekrarlayan akıntı ve stres' },
    { kind: 'paragraf', metin: 'Bazı kedilerde akıntı geçiyor, aylar sonra geri geliyor. Herpes virüsü taşıyan kedilerde bu tablo biliniyor: virüs vücutta sessiz kalıyor ve stres dönemlerinde yeniden aktifleşiyor. Taşınma, eve yeni bir hayvan ya da bebek gelmesi, pansiyon, uzun süren misafirlik gibi değişiklikler bu dönemlerin tipik örnekleri.' },
    { kind: 'paragraf', metin: 'Nüksü tamamen engellemek her zaman mümkün olmuyor ama iki şey işe yarıyor: tedaviyi hekimin verdiği süre boyunca yarıda kesmemek ve stres kaynaklarını öngörülebilir hâle getirmek. Tekrarların tarihini kaydetmek de yardımcı oluyor; hekim böylece sıklığı ve tetikleyiciyi görebiliyor.' },

    { kind: 'baslik', metin: 'Eve dönerken' },
    { kind: 'paragraf', metin: 'Göz akıntısı kedilerde sık, bu doğru. Ama sık olan şeyin ucuz atlatılacağı anlamına gelmiyor: kornea hasarı ve görme kaybı, geciken tabloların bilinen sonuçları. Bakılacak üç şey var: göz açılabiliyor mu, akıntı nasıl, ağrı var mı.' },
  ],
  kontrolListesi: [
    'Hangi gözde başladığını not edin',
    'Akıntının rengini ve kıvamını yazın',
    'Göz kısılması ve ovma varsa öne alın',
    'Eczane damlasını kendiniz kullanmayın',
    'Tedaviyi süresinden önce kesmeyin',
    'Evdeki diğer kedileri de gözleyin',
  ],
  sss: [
    { soru: 'Kedimin gözündeki akıntı kendiliğinden geçer mi?', cevap: 'Cornell birçok olgunun ilaçsız gerilediğini belirtiyor, ama bu her akıntının evde beklenebileceği anlamına gelmiyor. Göz kısılıyorsa, kedi patisiyle ovuyorsa, akıntı koyulaşmışsa ya da kornea bulanık görünüyorsa beklenmez; bu bulgular ağrı ve yüzey hasarı anlamına geliyor.' },
    { soru: 'Eczaneden göz damlası alabilir miyim?', cevap: 'Hayır. İnsan için üretilen bazı damlalar kortizon içeriyor ve kornea çiziği olan bir gözde iyileşmeyi geciktirip tabloyu ağırlaştırabiliyor. Hangi damlanın kullanılacağı, boyalı muayeneyle kornea yüzeyi değerlendirildikten sonra belirleniyor.' },
    { soru: 'Diğer kedilerime bulaşır mı?', cevap: 'Bulaşıcı etkenler söz konusu olduğunda evet. Cornell, tablonun çok kedili ortamlarda yaygın olduğunu belirtiyor; 41 kedilik bir seride en sık etkenler klamidofila ve mikoplazma çıktı ve kedilerin yarısından fazlasında birden çok etken birlikte bulundu. Evdeki diğer kedileri de gözlemek gerekiyor.' },
    { soru: 'Tedavi ne kadar sürer?', cevap: 'Genellikle iki ila üç hafta sürüyor ve günde üç dört uygulama isteniyor. Göz birkaç günde düzelmiş görünse bile erken bırakmak, tekrarlamanın en sık sebebi. Süreyi ve uygulama sıklığını hekim belirliyor, evde kısaltılmıyor.' },
    { soru: 'Tek gözde akıntı varsa ne düşünülür?', cevap: 'Tek taraflı akıntıda yabancı cisim, tıkalı gözyaşı kanalı ya da kornea çiziği gibi mekanik sebepler öne çıkıyor; çift taraflı akıntı ise daha çok bulaşıcı sebepleri düşündürüyor. Taraf sayısı ciddiyeti değil, aranacak yeri değiştiriyor ve her ikisinde de muayene gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine · Cornell Feline Health Center',
      baslik: 'Conjunctivitis',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/conjunctivitis',
    },
    {
      kurum: 'ISFM · AAFP · Journal of Feline Medicine and Surgery',
      baslik: 'Detection of bacterial and viral organisms from the conjunctiva of cats with conjunctivitis and upper respiratory tract disease',
      yazarlar: 'Hartmann AD, Hawley J, Werckenthin C, Lappin MR, Hartmann K',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2010,
      kunye: '12(10):775-782',
      doi: '10.1016/j.jfms.2010.06.001',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/20817584/',
    },
  ],
};
