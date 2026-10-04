import type { BlogYazi } from './types';

/**
 * KEDI kategorisi. Ahmet (04.10.2026): "kedilerde göz enfeksiyonu ile ilgili" yazı.
 *
 * ⚠️ GOZ AKINTISI YAZISIYLA CAKISMIYOR. `kedilerde-goz-akintisi` akintinin rengine ve
 * ne zaman gidilecegine bakiyor; bu yazi ETKENLERIN kendisini anlatiyor (herpes,
 * klamidya, mikoplazma, kalisivirus), bulasmayi, muayeneyi ve korunmayi. Ortak bilgi
 * tekrar edilmiyor, iki yazi birbirine bagli.
 *
 * Dayanaklar (hepsi tam metin ya da ozgun ozetten, 04.10.2026):
 *   1. ABCD FHV kilavuzu (Thiry ve ark. 2009, JFMS 11(7):547-555, PMC tam metin) —
 *      salgilarla sacilim, 3 haftaya kadar, dogrudan temas; akut hastalik 10-14 gun;
 *      neredeyse tum enfekte kediler omur boyu tasiyici; stres ya da kortizon virusu
 *      uyandiriyor; dendritik ulser tani koydurucu; PCR (pozitif sonuc dikkatle,
 *      yakin zamanda canli asi yapilan kediden ornek alinmaz); temel asi; asi hastaliga
 *      karsi korur, enfeksiyonu her zaman engellemez, sacilimi azaltir; barinakta yeni
 *      gelen 2 hafta ayri; cogu dezenfektanla etkisiz; turler arasi gecis bilinmiyor.
 *   2. ABCD Chlamydophila felis kilavuzu (Gruffydd-Jones ve ark. 2009, JFMS 11(7):605-609,
 *      PMC tam metin) — konjonktivitle en sik iliskili etken; cogu olgu 1 yas alti;
 *      vucut disinda yasamiyor; kulucka 2-5 gun; tek gozden iki goze; sacilim ~60 gun,
 *      deneyde 215 gune kadar; PCR; yerlesik enfeksiyonda en az 4 hafta tedavi;
 *      asi temel degil; insana kayda deger risk kaniti yok.
 *   3. Fernandez ve ark. 2017 (JFMS 19(4):461-469) — 358 kedi, konjonktivitli ve
 *      saglikli kedilerde PCR oranlari (ozgun ozet).
 *   4. Gould 2011 (JFMS 13(5):333-346) — karsilasma %97'ye kadar, kalici enfekte
 *      kedilerin yaklasik yarisi sacilim yapiyor, tekrarlayan ataklar korneada
 *      ilerleyici hasar ve gorme kaybi (ozgun ozet).
 *   5. Andrew 2001 (JFMS 3(1):9-16, University of Florida) — herpesle iliskili goz
 *      bulgulari listesi (ozgun ozet).
 *   6. Merck Veterinary Manual, The Conjunctiva in Animals (Hamor, 2023) — kedide FHV-1,
 *      mikoplazma, klamidya; tek gozde baslayip iki goze; kemozis; kortizon ancak
 *      korneada ulser yoksa.
 *   7. Cornell Feline Health Center, Conjunctivitis — en sik goz rahatsizligi; cogu olgu
 *      ilacsiz geriliyor ama rahatsizlik ve akinti varsa muayene.
 *
 * ⚠️ ILAC ADI VE DOZ YAZILMIYOR (goz akintisi yazisindaki kural).
 */
export const kedilerdeGozEnfeksiyonu: BlogYazi = {
  slug: 'kedilerde-goz-enfeksiyonu',
  baslik: 'Kedilerde Göz Enfeksiyonu: Belirtileri, Sebepleri ve Tedavisi',
  ozet: 'Kedilerde göz enfeksiyonunun arkasında çoğu zaman herpesvirüs, klamidya ya da mikoplazma var. Belirtiler, bulaşma, muayene, tedavi ve aşının rolü.',
  kapakAlt:
    'Gözü kızarık ve sulanan bir kediyi muayene eden veteriner hekim; konjonktivit ve kornea enfeksiyonu belirtileri',
  kategori: 'Kedi',
  tarih: '2026-10-04',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedinin gözünde kızarıklık, akıntı ve kısma görüldüğünde akla ilk gelen enfeksiyon oluyor ve çoğu zaman bu tahmin doğru. Ama "göz enfeksiyonu" tek bir hastalık değil: arkasında farklı davranan birkaç etken var ve hangisinin olduğu **tedavinin süresini, bulaşma riskini ve tablonun tekrar edip etmeyeceğini** belirliyor.' },
    { kind: 'paragraf', metin: 'Akıntının rengine ve ne zaman beklenip ne zaman gidileceğine [[kedilerde-goz-akintisi|kedilerde göz akıntısı]] yazısında baktık. Bu yazı etkenlerin kendisine odaklanıyor: hangisi nasıl bulaşıyor, gözde neye yol açıyor ve muayenede nasıl ayırt ediliyor.' },

    { kind: 'baslik', metin: 'Üç etken öne çıkıyor' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Kedi Sağlığı Merkezi konjonktiviti kedilerdeki en sık göz rahatsızlığı olarak tanımlıyor. Merck Veteriner El Kitabı kedilerde konjonktiviti üç etkenle ilişkilendiriyor: kedi herpesvirüsü 1 (FHV-1), mikoplazma ve klamidya. Üçünde de tablo tek gözde başlayıp iki göze yayılabiliyor ve göz zarında belirgin şişlik (kemozis) sık görülüyor.' },
    { kind: 'paragraf', metin: 'İspanya’da 358 kediyle yapılan çok merkezli bir çalışma bu etkenlerin ne kadar yaygın olduğunu gösteriyor. Konjonktiviti olan kedilerde ve sağlıklı kontrol kedilerinde PCR ile şu oranlar bulundu:' },
    { kind: 'tablo', basliklar: ['Etken', 'Konjonktivitli', 'Sağlıklı'], satirlar: [
      ['Kalisivirüs (FCV)', '%43,6', '%15,3'],
      ['Mycoplasma felis', '%38,3', '%20,4'],
      ['Herpesvirüs (FHV-1)', '%24,2', '%6,1'],
      ['Chlamydophila felis', '%19,5', '%2,0'],
    ] },
    { kind: 'paragraf', metin: 'Aynı çalışmada birden çok etkenin bir arada bulunması sıktı ve herpesvirüs, kalisivirüs ve klamidya konjonktivitle ilişkili çıktı. Tablonun son sütunu da önemli bir şey söylüyor: bazı etkenler sağlıklı görünen kedilerde de bulunabiliyor. Yani bir testin pozitif çıkması, gözdeki sorunun tek sebebi o etken demek değil; hekim sonucu muayene bulgularıyla birlikte yorumluyor.' },

    { kind: 'baslik', metin: 'Herpesvirüs: bir kez giren virüs kalıyor' },
    { kind: 'paragraf', metin: 'Avrupa Kedi Hastalıkları Danışma Kurulu’nun (ABCD) kılavuzuna göre hasta kedi virüsü ağız, burun ve göz salgılarıyla saçıyor; bu saçılım üç haftaya kadar sürebiliyor ve bulaşma için saçılım yapan bir kediyle doğrudan temas gerekiyor. Akut hastalık genellikle 10 ile 14 gün içinde geriliyor.' },
    { kind: 'paragraf', metin: 'Asıl mesele sonrası. Kılavuz, enfekte kedilerin **neredeyse tamamının virüsü ömür boyu taşıdığını** belirtiyor: virüs sinir hücrelerinde sessiz kalıyor, stres ya da kortizonlu tedavi onu yeniden harekete geçirebiliyor ve göz şikâyetleri aylar, hatta yıllar sonra geri gelebiliyor.' },
    { kind: 'paragraf', metin: 'Gözde en tipik bulgular konjonktivit ve kornea ülseri. ABCD, herpesvirüsün yol açtığı ağaç dalı biçimindeki (dendritik) kornea ülserini bu enfeksiyon için tanı koydurucu sayıyor. Gould’un 2011 tarihli derlemesine göre tekrarlayan ataklar korneada ilerleyici hasar bırakabiliyor ve bu hasar görme kaybına kadar gidebiliyor. Aynı derleme, bazı kedi topluluklarında virüsle karşılaşma oranının %97’ye ulaştığını, kalıcı enfekte kedilerin yaklaşık yarısının hayatının bir döneminde virüs saçtığını belirtiyor.' },
    { kind: 'paragraf', metin: 'Herpes korneanın ötesinde de iz bırakabiliyor. Florida Üniversitesi’nden Andrew’un derlemesi virüsle ilişkili göz bulguları arasında kuru göz, göz kapağının göz zarına yapışması (simblefaron), korneada koyu renkli doku ölümü (sekestrum), göz içi iltihabı ve yavru kedilerde göz kapakları açılmadan gelişen enfeksiyonu sayıyor.' },
    { kind: 'yanilgi', baslik: '"Atak geçti, virüs gitti" yanılgısı', metin: 'Herpes atağı geçtiğinde virüs vücuttan çıkmıyor; ABCD kılavuzuna göre enfekte kedilerin neredeyse tamamı ömür boyu taşıyıcı kalıyor ve hastalığı atlatan kedi sonraki ataklara karşı genellikle korunmuş olmuyor. Taşınma, pansiyon ya da eve yeni bir hayvan gelmesi gibi stres dönemlerinden sonra gözün yeniden kızarması bu yüzden şaşırtıcı değil. Her yeni atak, korneada iz bırakmadan önce muayene edilmeli.' },

    { kind: 'baslik', metin: 'Klamidya: genç kedilerin göz enfeksiyonu' },
    { kind: 'paragraf', metin: 'Chlamydophila felis bir bakteri ve birincil hedefi göz zarı. ABCD’nin klamidya kılavuzu onu konjonktivitle en sık ilişkilendirilen enfeksiyon etkeni olarak tanımlıyor; olguların çoğu bir yaşın altındaki kedilerde görülüyor. Bakteri vücut dışında yaşayamıyor; bulaşma için kedilerin yakın teması gerekiyor ve en önemli bulaştırıcı salgı göz akıntısı.' },
    { kind: 'paragraf', metin: 'Kuluçka süresi genellikle 2 ile 5 gün. Tablo çoğu zaman tek gözde başlıyor ve bir iki gün içinde iki göze geçiyor. Göz kapağının içi ve üçüncü göz kapağı belirgin biçimde kızarıyor, kedi gözünü kısıyor; akıntı önce sulu, sonra koyu ve irinli olabiliyor. Buna karşın kedilerin çoğu genel olarak iyi görünüyor ve yemeye devam ediyor; bu da tablonun hafife alınmasına yol açabiliyor.' },
    { kind: 'paragraf', metin: 'Tedavi edilmezse bakteri gözde uzun süre kalabiliyor. Kılavuza göre saçılım genellikle enfeksiyondan yaklaşık 60 gün sonra bitiyor, ama bazı kedilerde kalıcı enfeksiyon gelişiyor; deneysel enfeksiyonda bakteri 215 güne kadar gözden elde edilmiş. Tedavi antibiyotikle yapılıyor ve uzun sürüyor; kılavuz, enfeksiyonun yerleştiği kedi üretim yerlerinde bütün kedilerin **en az dört hafta** tedavi edilmesini öneriyor.' },
    { kind: 'paragraf', metin: 'İnsana bulaşma sorusu sık soruluyor. Kılavuz, bağışıklığı baskılanmış bir hastada tek bir olgu bildirildiğini, ama kedi klamidyasının insanlar için kayda değer bir risk oluşturduğuna dair epidemiyolojik kanıt bulunmadığını belirtiyor. Kedi herpesvirüsünün ise başka türlere geçtiği bilinmiyor.' },

    { kind: 'baslik', metin: 'Mikoplazma ve kalisivirüs' },
    { kind: 'paragraf', metin: 'Mikoplazmalar konjonktivitli kedilerde sık bulunuyor; ama sağlıklı kedilerde de görülebildikleri için tek başına saptanmaları tanı koydurmuyor. İspanya çalışmasında sağlıklı kedilerin %20,4’ünde mikoplazma bulundu. Kalisivirüs ise konjonktivitli kedilerde en sık bulunan etken oldu (%43,6), ama ağızla da yakından ilişkili: aynı çalışmada diş eti ve ağız iltihabı olan kedilerin %58,4’ünde saptandı. Gözde sık sık diğer etkenlerle birlikte bulunuyor.' },

    { kind: 'baslik', metin: 'Muayenede ne yapılıyor?' },
    { kind: 'paragraf', metin: 'Hekim önce göz kapaklarını, göz zarını ve korneayı inceliyor; ardından kornea yüzeyini boyalı muayeneyle değerlendiriyor. Floresein boyası korneada yüzey hasarı olan yeri gösteriyor ve ülser varsa tedavinin yönü değişiyor. Testin nasıl yapıldığını ve neyi gösterdiğini [[kedilerde-goz-boyama-testi|kedilerde göz boyama testi]] yazısında anlattık.' },
    { kind: 'paragraf', metin: 'Etkeni belirlemek için en sık kullanılan yöntem PCR. ABCD kılavuzları göz, kornea ya da ağız sürüntüsünden yapılan PCR’ı herpesvirüs ve klamidya için en kullanışlı yöntem olarak veriyor. Herpes kılavuzu bir uyarı da ekliyor: pozitif sonuç düşük düzeyde saçılım ya da sessiz taşıyıcılık nedeniyle de çıkabildiği için dikkatle yorumlanmalı ve yakın zamanda canlı aşı yapılmış kediden örnek alınmamalı.' },

    { kind: 'baslik', metin: 'Tedavi etkene göre değişiyor' },
    { kind: 'paragraf', metin: 'Cornell, konjonktivitin çoğu olguda ilaçsız gerilediğini belirtiyor; ama gözde belirgin rahatsızlık ve akıntı varsa daha ciddi bir göz sorununu dışlamak için hekime gidilmesini öneriyor. Tedavi gerektiğinde yön etkene göre çiziliyor: klamidyada antibiyotik haftalarca sürüyor; herpesin ağır göz tablolarında virüse karşı ilaçlar kullanılabiliyor ve ikincil bakteri enfeksiyonuna karşı antibiyotik ekleniyor.' },
    { kind: 'paragraf', metin: 'Bir ilaç grubunun özellikle dikkat istediği biliniyor: kortizon. Merck, kortizonlu damlanın ancak korneada ülser yoksa kullanılabileceğini belirtiyor; ABCD de kortizonlu tedavinin herpesvirüsü yeniden harekete geçirebildiğini yazıyor. Hangi damlanın kullanılacağına bu yüzden boyalı muayeneden sonra hekim karar veriyor.' },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlı; teşhis ve tedavinin yerine geçmez. Evde kalan ya da eczaneden alınan göz damlası kullanılmaz: kortizon içeren bir damla, ülserli gözde hasarı ağırlaştırabiliyor ve herpesvirüsü yeniden harekete geçirebiliyor.' },
    { kind: 'yanilgi', baslik: '"Göz düzeldiyse damla bırakılabilir" yanılgısı', metin: 'Klamidyada saçılım haftalarca sürebiliyor ve ABCD kılavuzu yerleşik enfeksiyonda en az dört haftalık tedavi öneriyor. Gözün birkaç günde düzelmiş görünmesi bakterinin gittiği anlamına gelmiyor. Süreyi hekim belirliyor; erken bırakılan tedavi tablonun geri gelmesine ve evdeki diğer kedilere bulaşmaya yol açabiliyor.' },

    { kind: 'baslik', metin: 'Korunma: aşı ve ayrı tutma' },
    { kind: 'paragraf', metin: 'ABCD, herpesvirüs aşısını her kediye önerilen temel aşılar arasında sayıyor. Aşı hastalığa karşı koruyor ama enfeksiyonu her zaman engellemiyor; enfeksiyon olursa virüs saçılımını azaltıyor. Klamidya aşısı ise temel aşılardan değil: kılavuz onu özellikle çok kedili ortamlarda ve daha önce klamidya görülmüş yerlerde öneriyor. Aşıların zamanlaması için [[kedi-asi-takvimi|kedi aşı takvimi]] yazısına bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Çok kedili yerler için kılavuzun önerisi net: barınağa yeni gelen kedi iki hafta ayrı tutulmalı. Aynı mantık eve yeni kedi alındığında da işe yarıyor. Herpesvirüs piyasadaki çoğu dezenfektan, antiseptik ve deterjanla etkisiz hâle geliyor; hasta kedinin mama ve su kaplarını, yatağını ayırmak ve onunla temastan sonra elleri yıkamak bulaşı azaltıyor.' },
    { kind: 'yanilgi', baslik: '"Aşılı kediye göz enfeksiyonu bulaşmaz" yanılgısı', metin: 'ABCD kılavuzuna göre herpesvirüs aşısı hastalığa karşı koruyor ama enfeksiyonu her zaman engellemiyor; klinik belirtilere karşı koruma tam değil. Aşılı bir kedide de göz enfeksiyonu görülebiliyor, ama aşı saçılımı azaltıyor ve tabloyu hafifletiyor. Yani aşı, muayene ve ayrı tutma gibi önlemlerin yerine geçmiyor; onlarla birlikte çalışıyor.' },

    { kind: 'baslik', metin: 'Beklemeden gidilmesi gereken durumlar' },
    { kind: 'liste', maddeler: [
      'Göz tamamen kapalı ya da kedi gözünü açamıyor',
      'Korneada bulanıklık, beyazlaşma ya da gözle görülür bir çukurluk var',
      'Yavru kedide göz kapakları şiş ya da yapışık',
      'Akıntı irinli ve kedinin genel durumu bozuluyor',
      'Tedaviye rağmen birkaç gün içinde düzelme yok',
      'Evdeki başka kedilerde de aynı belirtiler başladı',
    ] },

    { kind: 'baslik', metin: 'Özet' },
    { kind: 'paragraf', metin: 'Kedilerde göz enfeksiyonunun arkasında çoğu zaman herpesvirüs, klamidya, mikoplazma ya da kalisivirüs var ve bunlar sık sık bir arada bulunuyor. Herpes ömür boyu taşınıyor ve stresle geri gelebiliyor; klamidya genç kedilerde tek gözde başlayıp iki göze yayılıyor ve uzun tedavi istiyor. Doğru tedavi için önce etkenin ve korneanın durumunun bilinmesi gerekiyor; bu da evde değil, muayenede belirleniyor.' },
  ],
  kontrolListesi: [
    'Hangi gözde başladığını not edin',
    'Eczane damlası kullanmayın',
    'Tedaviyi süresinden önce kesmeyin',
    'Yeni gelen kediyi 2 hafta ayırın',
    'Aşı karnesini güncel tutun',
    'Stres sonrası nüksleri kaydedin',
  ],
  sss: [
    { soru: 'Kedilerde göz enfeksiyonu kendiliğinden geçer mi?', cevap: 'Bazı hafif konjonktivitler ilaçsız geriliyor; Cornell çoğu olgunun kendiliğinden düzeldiğini belirtiyor. Ama hangisinin geçeceğini evden ayırt etmek mümkün değil: herpesvirüs korneada ülser bırakabiliyor, klamidya tedavi edilmezse haftalarca gözde kalabiliyor. Göz kısılıyorsa, akıntı koyulaşıyorsa ya da korneada bulanıklık varsa beklemek yerine muayene gerekiyor.' },
    { soru: 'Kedi göz enfeksiyonu insana bulaşır mı?', cevap: 'Kayda değer bir risk görünmüyor. ABCD kılavuzu kedi klamidyasıyla ilişkili konjonktivitin bağışıklığı baskılanmış bir insanda tek bir olgu olarak bildirildiğini, ama insanlar için kayda değer bir risk oluşturduğuna dair epidemiyolojik kanıt olmadığını belirtiyor. Kedi herpesvirüsünün başka türlere geçtiği de bilinmiyor. Yine de akıntılı gözle temastan sonra elleri yıkamak iyi bir alışkanlık.' },
    { soru: 'Evdeki diğer kedilere bulaşır mı?', cevap: 'Evet, bulaşabiliyor. Herpesvirüs saçılım yapan bir kediyle doğrudan temasla, klamidya ise yakın temasla ve en çok göz akıntısı yoluyla geçiyor. Hasta kediyi ayrı tutmak, mama ve su kaplarını ayırmak ve elleri yıkamak bulaşı azaltıyor. ABCD kılavuzu barınaklarda yeni gelen kedilerin iki hafta ayrı tutulmasını öneriyor; eve yeni kedi alındığında da aynı yol izlenebilir.' },
    { soru: 'Herpes virüsü olan kedi iyileşir mi?', cevap: 'Atak genellikle 10 ile 14 gün içinde geriliyor, ama virüs vücuttan çıkmıyor. ABCD kılavuzuna göre enfekte kedilerin neredeyse tamamı ömür boyu taşıyıcı kalıyor ve stres ya da kortizonlu tedavi virüsü yeniden harekete geçirebiliyor. Bu yüzden amaç virüsü yok etmek değil, atakları zamanında ve doğru tedavi etmek ve stres dönemlerinde gözü yakından izlemek.' },
    { soru: 'Göz enfeksiyonu tedavisi ne kadar sürer?', cevap: 'Süre etkene göre değişiyor. Herpes atağı genellikle iki hafta içinde sakinleşirken klamidyada tedavi haftalarca sürüyor; ABCD kılavuzu yerleşik klamidya enfeksiyonunda en az dört haftalık tedavi öneriyor. Göz birkaç günde düzelmiş görünse bile tedaviyi hekimin söylediği süreden önce bırakmak, tablonun geri gelmesine yol açabiliyor.' },
    { soru: 'Aşılı kedide göz enfeksiyonu olur mu?', cevap: 'Olabilir, ama aşı tabloyu hafifletiyor. ABCD kılavuzu herpesvirüs aşısının hastalığa karşı koruduğunu, enfeksiyonu ise her zaman engellemediğini ve virüs saçılımını azalttığını belirtiyor. Klamidya aşısı temel aşılar arasında değil; çok kedili ortamlarda ve daha önce klamidya görülmüş yerlerde öneriliyor. Aşı programını kedinin yaşam koşullarına göre hekimle birlikte planlamak gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'European Advisory Board on Cat Diseases (ABCD) · Journal of Feline Medicine and Surgery',
      baslik: 'Feline herpesvirus infection. ABCD guidelines on prevention and management',
      yazarlar: 'Thiry E, Addie D, Belák S, Boucraut-Baralon C, Egberink H, Frymus T, Gruffydd-Jones T, Hartmann K, Hosie MJ, Lloret A, Lutz H, Marsilio F, Pennisi MG, Radford AD, Truyen U, Horzinek MC',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2009,
      kunye: '11(7):547-555',
      doi: '10.1016/j.jfms.2009.05.003',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19481034/',
    },
    {
      kurum: 'European Advisory Board on Cat Diseases (ABCD) · Journal of Feline Medicine and Surgery',
      baslik: 'Chlamydophila felis infection. ABCD guidelines on prevention and management',
      yazarlar: 'Gruffydd-Jones T, Addie D, Belák S, Boucraut-Baralon C, Egberink H, Frymus T, Hartmann K, Hosie MJ, Lloret A, Lutz H, Marsilio F, Pennisi MG, Radford AD, Thiry E, Truyen U, Horzinek MC',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2009,
      kunye: '11(7):605-609',
      doi: '10.1016/j.jfms.2009.05.009',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19481040/',
    },
    {
      kurum: 'Universitat Autònoma de Barcelona · Journal of Feline Medicine and Surgery',
      baslik: 'Prevalence of feline herpesvirus-1, feline calicivirus, Chlamydophila felis and Mycoplasma felis DNA and associated risk factors in cats in Spain with upper respiratory tract disease, conjunctivitis and/or gingivostomatitis',
      yazarlar: 'Fernandez M, Manzanilla EG, Lloret A, León M, Thibault JC',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2017,
      kunye: '19(4):461-469',
      doi: '10.1177/1098612X16634387',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/26919892/',
    },
    {
      kurum: 'ISFM · AAFP · Journal of Feline Medicine and Surgery',
      baslik: 'Feline herpesvirus-1: ocular manifestations, diagnosis and treatment options',
      yazarlar: 'Gould D',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2011,
      kunye: '13(5):333-346',
      doi: '10.1016/j.jfms.2011.03.010',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21515221/',
    },
    {
      kurum: 'University of Florida College of Veterinary Medicine · Journal of Feline Medicine and Surgery',
      baslik: 'Ocular manifestations of feline herpesvirus',
      yazarlar: 'Andrew SE',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2001,
      kunye: '3(1):9-16',
      doi: '10.1053/jfms.2001.0110',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/11716625/',
    },
    {
      kurum: 'Merck Veterinary Manual · University of Florida College of Veterinary Medicine',
      baslik: 'The Conjunctiva in Animals',
      yil: 2023,
      adres: 'https://www.merckvetmanual.com/eye-diseases-and-disorders/ophthalmology/the-conjunctiva-in-animals',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine · Cornell Feline Health Center',
      baslik: 'Conjunctivitis',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/conjunctivitis',
    },
  ],
};
