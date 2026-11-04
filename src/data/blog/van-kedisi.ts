import type { BlogYazi } from './types';

export const vanKedisi: BlogYazi = {
  slug: 'van-kedisi',
  baslik: 'Van Kedisi: Özellikleri ve Koruma Altında mı?',
  ozet: 'Van kedisinin kökenini, görünüşünü, huyunu ve tüy bakımını; Bakanlık talimatında koruma altındaki ırklar arasında sayılmasının ne anlama geldiğini anlattık.',
  kapakAlt:
    'Göl ve dağ manzaralı balkonda duran beyaz tüylü kedi',
  kategori: 'Kedi',
  tarih: '2026-11-13',
  bloklar: [
    { kind: 'paragraf', metin: '**Van kedisi, Van Gölü çevresinde gelişen yerli bir ırktır; iri yapılı, kaşmir dokulu yarı uzun tüylü ve suyu seven bir kedidir; Tarım ve Orman Bakanlığı talimatında gen kaynakları koruma altına alınan ırklar arasında sayılıyor.** Bu korumanın somut sonucu, yurt dışına çıkışın ön izne bağlı olması. Talimatın konusu yurt dışına sevktir.' },
    { kind: 'paragraf', metin: 'Aşağıda ırkın kökenini, görünüşünü ve huyunu, tüy bakımının nasıl olduğunu, "koruma altında" ifadesinin yönetmelik açısından neyi kapsadığını, yurt dışına götürmek isteyenlerin karşılaşacağı işlemleri ve işitme ile kilo konularını anlatıyoruz. Irk bilgileri kedi federasyonunun tanımına, hukuki bilgiler Bakanlığın belgelerine, sağlık bilgileri hakemli çalışmaya dayanıyor; tek bir kedinin durumunu yalnızca muayene eden veteriner hekim değerlendirebilir.' },

    { kind: 'tablo', basliklar: ['Özellik', 'Van kedisinde'], satirlar: [
      ['Köken', 'Van Gölü çevresi'],
      ['Gövde', 'İri, kaslı, geniş göğüslü'],
      ['Tüy', 'Yarı uzun, kaşmir dokulu, alt kat yok; yazın kısa, kışın uzun ve kalın'],
      ['Desen (CFA standardı)', 'Beyaz gövde, renk baş ve kuyrukta'],
      ['Göz rengi', 'Kehribar, mavi ya da farklı renkli gözler kabul ediliyor'],
      ['Olgunlaşma', '3 ile 5 yıl'],
      ['Ağırlık', 'Olgun erkekler 20 pounda (yaklaşık 9 kg) kadar çıkabiliyor'],
    ]},

    { kind: 'baslik', metin: 'Van kedisi nereden geliyor?' },
    { kind: 'paragraf', metin: 'Cat Fanciers\' Association (CFA), Van kedisinin Angora ile sık karıştırıldığını ama ondan açıkça farklı bir ırk olduğunu yazıyor: Van, Türkiye\'nin Van Gölü bölgesinde, Angora\'dan coğrafi olarak uzak bir yerde gelişmiş. Aynı kaynak iki ırkı kıyaslarken Van\'ı olimpiyat yüzme şampiyonuna, Angora\'yı balerine benzetiyor. Angora kedisi için [[ankara-kedisi|Ankara kedisi]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'CFA\'ya göre Van kedilerinin Avrupa\'ya Haçlılarla dönmüş olabileceği düşünülüyor, ırkın modern tarihi ise 1955\'te başlıyor: Turkish Tourist Board adına Türkiye\'yi gezen iki İngiliz fotoğrafçı birbirinden bağımsız bir çifti İngiltere\'ye götürmüş. Irk ABD\'de CFA tarafından ilk kez 1988\'de tanındı, 1994\'te şampiyonluk statüsüne yükseldi.' },
    { kind: 'paragraf', metin: 'Ankara Üniversitesi Veteriner Fakültesi\'nden Bilgen ve ekibi 2024\'te Gene dergisinde, Türkiye\'nin farklı bölgelerinden 240 örnekle melez kedilerin mitokondriyal DNA profillerini Ankara kedisi ve Van kedisiyle karşılaştırdı. Araştırmacılar, melez kedilerde haplotip yapısının çeşitli olduğunu ve Angora ile Van ırklarından ayrımlar gösterdiğini bildiriyor.' },

    { kind: 'baslik', metin: 'Görünüşü: iri, kaslı ve baş ile kuyrukta desen' },
    { kind: 'paragraf', metin: 'CFA, Van kedisini büyük, güçlü, kaşmir gibi yumuşak tüylü ve dikkat çekici desenli olarak tarif ediyor. Baş geniş ve ılımlı bir kama biçiminde, kulaklar büyükçe ve yüksekte, gözler iri ve ifadeli. Irk yavaş olgunlaştığı için beş yaşına kadar büyümeyi sürdürüyor; olgun erkekler 20 pounda (yaklaşık 9 kg) ulaşabiliyor, dişiler biraz daha küçük kalıyor.' },
    { kind: 'paragraf', metin: 'Standartta tercih edilen desen, parlak tebeşir beyazı bir gövdede rengin baş ve kuyrukla sınırlı kalması. Gövdede rastgele bir ya da birkaç lekeye, toplam vücudun yüzde 15\'ine kadar izin var. CFA, "van" teriminin başka ırklarda da baş ve kuyruğu renkli beyaz kedileri anlatmak için kullanıldığını not ediyor. Göz rengi olarak kehribar, mavi ya da farklı renkli gözler kabul ediliyor.' },
    { kind: 'yanilgi', baslik: '"Gözleri farklı renkli her beyaz kedi Van kedisidir"', metin: 'CFA standardı ırkı yalnızca göz rengine göre değerlendirmiyor: puanın 30\'u baş, 30\'u gövde, 15\'i tüy, 20\'si renk ve desen, 5\'i denge için veriliyor. Farklı renkli gözler kabul edilen seçeneklerden yalnızca biri. Bir kedinin Van olup olmadığını soy belgesi ve kayıt gösterir.' },

    { kind: 'baslik', metin: 'Huyu: sadık, zeki ve suyu seven' },
    { kind: 'paragraf', metin: 'CFA\'ya göre Van kedileri sadık arkadaşlar; çok zeki, problem çözmede başarılı (mama dolabını açmak gibi) ve kovalama oyunlarını seviyor. Kucakta taşınmaktan hoşlanmıyorlar ama sahibine fiziksel yakınlık istiyorlar; oyun bitince koltukta yanına kıvrılabiliyor. Tüy ve kürk gibi doğal malzemeli oyuncaklara ilgi duyuyorlar, buruşturulmuş kâğıttan kendi oyuncaklarını da yapabiliyorlar.' },
    { kind: 'paragraf', metin: 'Aynı kaynak, doğru tanıştırılırlarsa köpeklerle iyi geçindiklerini, en iyi uyumu kucakta taşınmaya isteksiz olduklarını anlayabilecek daha büyük çocuklarla kurduklarını belirtiyor. Sesleri gür değil ama konuşkanlar. Bazı kurucu yetiştiricilere göre Van yavruları havuzda ya da gölde kendiliğinden oynayıp yüzebiliyor. Bunlar ırk tarifidir; her kedinin huyu farklıdır. Yeni bir kedinin eve alışması için [[yeni-kedi-eve-alisma|yeni kedi eve alışma]], köpekle tanıştırma için [[kedi-ile-kopek-nasil-alistirilir|kedi ile köpek nasıl alıştırılır]] yazıları kullanılabilir.' },

    { kind: 'baslik', metin: 'Tüy bakımı: alt katı yok, mevsime göre değişiyor' },
    { kind: 'paragraf', metin: 'CFA, Van kedisini bakımı en kolay uzun tüylü ırklardan biri olarak tanımlıyor: alt kat tüyü olmadığı için düğüm ya da keçeleşme oluşmuyor. Ölü tüyü almak için ara sıra çelik tarak yeterli. Yaz tüyü tavşan tüyü gibi kısa olduğu için haftalık tarama yetiyor, daha gür olan kış tüyü ise daha sık ilgi isteyebiliyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynağa göre Van kedileri çok temiz hayvanlar ve sergiye hazırlık dışında yıkama gerekmiyor. Yıkama kararı için [[kedi-yikanir-mi|kedi yıkanır mı]], mevsimsel dökülme için [[kedi-tuy-dokumu|kedi tüy dökümü]] yazılarına bakılabilir.' },

    { kind: 'baslik', metin: 'Koruma altında mı? Bakanlık ne diyor?' },
    { kind: 'paragraf', metin: 'Tarım ve Orman Bakanlığı\'nın kedi ve köpeklerin yurt dışına yolcu beraberi ve ticari sevkine ilişkin uygulama talimatında, "Koruma altındaki ırklar" başlığı altında Yerli Evcil Hayvan Genetik Kaynaklarının Kullanılması ve Yurt Dışına Çıkarılması Hakkında Yönetmelik gereği Ulusal Komite tarafından belirlenmiş yedi ırk sayılıyor. Talimata göre bu ırklardan olan kedi ve köpekler, gen kaynakları koruma altına alınan hayvanlardır ve yurt dışına çıkışları ön izne bağlıdır.' },
    { kind: 'liste', maddeler: [
      'Kangal Çoban Köpeği',
      'Akbaş Çoban Köpeği',
      'Kars Çoban Köpeği',
      'Çatal Burun Av Köpeği',
      'Zağar İnci Köpeği',
      'Ankara Kedisi',
      'Van Kedisi',
    ]},
    { kind: 'paragraf', metin: 'Yönetmelik, yerli evcil hayvan genetik kaynaklarını Türkiye\'ye özgü ya da özel niteliklere sahip ırk, tip, hat, ekotip ve topluluklar olarak tanımlıyor. Yani "koruma altında" ifadesi, ırkın bir ulusal genetik kaynak olarak kayıt altına alınmasını ve yurt dışına çıkışının denetlenmesini anlatıyor. Talimat ve yönetmelik metninde, bu ırktan bir kediyi evde bakmak için ayrı bir izin arandığına dair bir hüküm görülmüyor; bu konuda kesin bilgi için il ya da ilçe Tarım ve Orman Müdürlüğüne sorulması gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Koruma altındaki kedi evde bakılamaz"', metin: 'Bakanlık talimatı koruma altındaki ırkları yurt dışına çıkış bakımından ele alıyor ve çıkışı ön izne bağlıyor. Van Yüzüncü Yıl Üniversitesi Van Kedisi Araştırma ve Uygulama Merkezi ise 29 Haziran 2020 tarihli duyurusunda 2,5 ile 3 aylık yavru kedi satışlarının 14 Temmuz 2020\'de başlayacağını bildirdi. Güncel durum için merkezin kendisine sorulması gerekiyor.' },

    { kind: 'baslik', metin: 'Yurt dışına götürmek isteyenler için' },
    { kind: 'paragraf', metin: 'Talimat, pasaportunda ırkı yalnızca "mix/melez", rengi yalnızca "mix/karışık" gibi ifadelerle yazılmış hayvanların yurt dışı çıkış işlemlerinin yapılmayacağını belirtiyor; hayvanın ırkına ve rengine en yakın ırk ve renk yazılıyor ve düzeltmeler yapıldıktan sonra işlem sürüyor. Pasaport düzenlemesi için [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'Yönetmelik, yolcu beraberinde çıkışta hayvan sahibinin ikamet ettiği yerin il müdürlüğüne başvurmasını ve ırkın belirlenebilmesi için hayvanın dış görünüm olarak incelenmesinin şart olduğunu yazıyor. İstenen belgeler arasında hayvanın sağlık karnesi, hayvanın önden ve yandan tüm görünümünü içeren ikişer adet 4x5 cm renkli fotoğraf ve sahibin T.C. kimlik numarası beyanı var. Talimat ayrıca aşı ve kuduz antikor testine ilişkin koşullar içeriyor; kuduz testi için [[kuduz-titre-testi|kuduz titre testi]], uçak yolculuğu için [[thy-evcil-hayvan|THY ile evcil hayvan]] yazıları kullanılabilir.' },
    { kind: 'uyari', metin: 'Yurt dışına çıkış işlemleri talimat ve yönetmelikle belirleniyor ve zaman içinde değişebiliyor. Güncel koşullar için çıkıştan önce il ya da ilçe Tarım ve Orman Müdürlüğüne başvurulması ve gidilecek ülkenin giriş kurallarının ayrıca kontrol edilmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Sağlık: işitme ve kilo' },
    { kind: 'paragraf', metin: 'CFA, bu doğal ırkı etkileyen bilinen özel bir genetik sorun olmadığını yazıyor. Aynı kaynak, Van kedilerinin iri ve hareketli olduğunu, geniş yaşam alanı ve etkileşimli oyunla düzenli hareket etmedikleri takdirde kolayca obez olabileceklerini belirtiyor. Günlük mama miktarı için [[kedi-gunde-kac-gram-mama-yer|kedi günde kaç gram mama yer]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'İşitme konusu ise tamamen beyaz kedilerde gündeme geliyor. Birleşik Krallık\'ta Mari ve ekibi 132 tamamen beyaz safkan yavru kediyi işitme sinyali testiyle (BAER) inceledi. Doğuştan sensörinöral sağırlık yalnızca beyaz yavrularda görüldü ve oranı yüzde 30,3 çıktı. Tamamen beyaz "Turkish Vankedisi" yavrularda 15 yavrunun 7\'sinde (yüzde 46,7) sağırlık saptandı. Örnek küçük ve çalışma Birleşik Krallık\'taki sahipli yavruları kapsıyor; yine de ırklar arasında fark olabileceğini gösteriyor.' },
    { kind: 'paragraf', metin: 'Aynı çalışmada en az bir gözü mavi olan yavrularda sağırlık, mavi gözü olmayanlara göre 3,2 kat daha olasıydı. Beyaz kedilerde işitme, test ve sağır kediyle yaşam konusunun ayrıntıları [[ankara-kedisi|Ankara kedisi]] yazısında anlatıldı. Özetle her beyaz kedi sağır değil, ama kesin cevabı yalnızca test veriyor.' },
    { kind: 'uyari', metin: 'Yavru kedi seslere tepki vermiyorsa ya da tek kulağı duymuyor gibiyse veteriner hekime başvurmak gerekiyor. İşitme kaybının nedeni ancak muayene ve uygun testle ayırt edilebilir.' },

    { kind: 'baslik', metin: 'Sahiplenirken neye bakılmalı?' },
    { kind: 'liste', maddeler: [
      'Soy belgesini ve kayıt bilgisini istemek',
      'Anne ve babanın rengini ve işitme durumunu sormak',
      'Beyaz yavru için BAER testi yapılıp yapılmadığını öğrenmek',
      'Aşı ve kontrol planını veteriner hekimle birlikte yapmak',
      'Geniş bir yaşam alanı ve düzenli oyun saati ayırmak',
    ]},
    { kind: 'paragraf', metin: 'Yavru bakımı için [[yavru-kedi-bakimi|yavru kedi bakımı]], aşı programı için [[kedi-asi-takvimi|kedi aşı takvimi]] yazıları kullanılabilir. Alım satıma dair kurallar için [[kedi-kopek-satmak-yasak-mi|kedi köpek satmak yasak mı]] yazısına bakılabilir.' },
  ],
  kontrolListesi: [
    'Soy belgesi ve kayıt var mı?',
    'Ebeveynlerin rengi biliniyor mu?',
    'Beyaz yavrunun işitmesi ölçüldü mü?',
    'Yurt dışı için ön izin alındı mı?',
    'Oyun ve hareket alanı yeterli mi?',
    'Aşı ve kontrol planı var mı?',
  ],
  sss: [
    { soru: 'Van kedisi koruma altında mı?', cevap: 'Evet, gen kaynağı olarak. Tarım ve Orman Bakanlığı talimatı Van kedisini, gen kaynakları koruma altına alınan ve yurt dışına çıkışı ön izne bağlı ırklar arasında sayıyor. Talimat yurt dışına sevki düzenliyor; evde bakım için ayrı bir izin hükmü görünmüyor, kesin bilgi için il ya da ilçe müdürlüğüne sorulabilir.' },
    { soru: 'Van kedisi yurt dışına çıkarılabilir mi?', cevap: 'Ön izinle çıkarılabiliyor. Talimata göre yurt dışına çıkışı ön izne bağlı ırklar arasında Van kedisi de var. Yönetmelik, hayvan sahibinin il müdürlüğüne başvurmasını ve ırkın dış görünümle incelenmesini şart koşuyor; sağlık karnesi ve fotoğraf gibi belgeler isteniyor.' },
    { soru: 'Van kedisi ile Ankara kedisi aynı mı?', cevap: 'Hayır. CFA iki ırkın sık karıştırıldığını ama belirgin biçimde farklı olduğunu yazıyor. Van, Van Gölü bölgesinde gelişmiş, iri ve kaslı bir ırk; Angora ise zarif ve ince yapılı. Van\'da renk baş ve kuyrukta toplanıyor, tüy ise alt katsız ve mevsime göre değişiyor.' },
    { soru: 'Van kedisinin tüy bakımı zor mu?', cevap: 'Hayır, kolay sayılıyor. CFA alt kat tüyü olmadığı için düğüm oluşmadığını, ara sıra çelik taramanın yettiğini yazıyor. Yaz tüyünde haftalık tarama yetiyor, kış tüyünde daha sık gerekebiliyor. Sergi dışında yıkama gerekmiyor.' },
    { soru: 'Van kedisi suyu sever mi?', cevap: 'Irk suya ilgisiyle tanınıyor. CFA Van kedisinin suya düşkünlüğünü öne çıkarıyor ve bazı kurucu yetiştiricilere göre yavruların havuzda ya da gölde kendiliğinden oynayıp yüzdüğünü yazıyor. Bu ırk tarifidir; her kedinin davranışı farklıdır.' },
    { soru: 'Beyaz Van kedisi sağır mı olur?', cevap: 'Olabilir, ama her zaman olmaz. Mari ve ekibinin çalışmasında tamamen beyaz Vankedisi yavruların 15\'inin 7\'sinde sağırlık saptandı. Örnek küçük. Hangi kedinin duyduğunu yalnızca işitme testi gösteriyor; kuşku varsa veteriner hekime başvurmak gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'The Cat Fanciers\' Association (CFA)',
      baslik: 'Turkish Van (ırk profili ve ırk standardı)',
      adres: 'https://cfa.org/turkish-van/',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı, Hayvan Sağlığı ve Hizmetleri Genel Müdürlüğü',
      baslik: 'Kedi ve Köpeklerin Yurt Dışına Yolcu Beraberi ve Ticari Sevklerine İlişkin Uygulama Talimatı',
      adres: 'https://www.tarimorman.gov.tr/HAYGEM/Belgeler/DB_Hayvan_Ithalat_Ihracat_Sinir/Ihracat/2026%20YILI/Kedi%20ve%20K%C3%B6peklerin%20Yurt%20D%C4%B1%C5%9F%C4%B1na%20Yolcu%20Beraberi%20Ve%20Ticari%20Sevklerine%20%C4%B0li%C5%9Fkin%20Uygulama%20Talimat%C4%B1.pdf',
    },
    {
      kurum: 'Mevzuat Bilgi Sistemi (mevzuat.gov.tr)',
      baslik: 'Yerli Evcil Hayvan Genetik Kaynaklarının Kullanılması ve Yurt Dışına Çıkarılması Hakkında Yönetmelik',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=7&MevzuatNo=16619&MevzuatTertip=5',
    },
    {
      kurum: 'Animal Health Trust, Neurology/Neurosurgery Service, Newmarket',
      yazarlar: 'Mari L, Freeman J, Van Dijk J, De Risio L',
      baslik: 'Prevalence of congenital sensorineural deafness in a population of client-owned purebred kittens in the United Kingdom',
      dergi: 'Journal of Veterinary Internal Medicine',
      yil: 2019,
      kunye: '33(4):1707-1713',
      doi: '10.1111/jvim.15515',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31144374/',
    },
    {
      kurum: 'Ankara Üniversitesi Veteriner Fakültesi, Hayvan Genetiği Anabilim Dalı',
      yazarlar: 'Bilgen N, Güvendi M, Sezgin E, Can H, Köseoğlu AE, Erkunt Alak S, Döşkaya M, Ün C',
      baslik: 'Mitotyping of random bred cats and pure breed cats (Turkish Angora and Turkish Van) using non-repetitive mitochondrial DNA control region',
      dergi: 'Gene',
      yil: 2024,
      kunye: '892:147849',
      doi: '10.1016/j.gene.2023.147849',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37776989/',
    },
    {
      kurum: 'Van Yüzüncü Yıl Üniversitesi',
      baslik: 'Van Kedisi Satışları Başlamıştır (duyuru)',
      yil: 2020,
      adres: 'https://www.yyu.edu.tr/duyurular/van-kedisi-satislari-baslamistir/7643',
    },
  ],
};
