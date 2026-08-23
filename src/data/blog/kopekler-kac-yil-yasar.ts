import type { BlogYazi } from './types';

export const kopeklerKacYilYasar: BlogYazi = {
  slug: 'kopekler-kac-yil-yasar',
  baslik: 'Köpekler Kaç Yıl Yaşar? Irka ve Boya Göre Ömür',
  ozet: 'Köpeklerde ömrü belirleyen en güçlü etken boy. Küçük ırklar 12-16 yıl yaşarken dev ırklarda bu süre 6-10 yıla iniyor. Sebebi ve sizin elinizde olan kısmı.',
  kategori: 'Köpek',
  tarih: '2026-08-23',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpeklerde ortalama ömür **10 ile 13 yıl** arasında ama bu ortalama tek başına yanıltıcı. Çünkü köpekler, aynı türün içinde ömrü en çok değişen memelilerden biri: küçük bir terrier 16 yıl yaşarken bir Danua 7 yılda yaşlanmış sayılıyor.' },
    { kind: 'paragraf', metin: 'Farkı yaratan şey ırkın kendisinden çok **boy**. Bu yazıda o bağlantıyı, hangi kısmının elinizde olduğunu ve köpeğinizin yaşlandığını nereden anlayacağınızı bulacaksınız.' },

    { kind: 'baslik', metin: 'Köpeklerde büyük olmak, erken yaşlanmak demek' },
    { kind: 'tablo', basliklar: ['Boy sınıfı', 'Yetişkin ağırlığı', 'Ortalama ömür'], satirlar: [
      ['Küçük', '10 kg altı', '12-16 yıl'],
      ['Orta', '10-25 kg', '10-13 yıl'],
      ['Büyük', '25-45 kg', '8-12 yıl'],
      ['Dev', '45 kg üzeri', '6-10 yıl'],
    ]},
    { kind: 'paragraf', metin: 'Memelilerde genel kural bunun tersidir: büyük hayvan uzun yaşar, fil fareden çok yaşar. Köpekler bu kuralın içinde bir istisna oluşturuyor, çünkü ırklar arasındaki boy farkı doğal seçilimle değil, insan eliyle ve çok kısa sürede oluştu. Hızlı büyüyen iri bir vücut, hücre yenilenmesi ve eklem yükü açısından bedel ödüyor.' },
    { kind: 'yanilgi', baslik: '"Büyük köpek daha dayanıklıdır" yanılgısı', metin: 'Büyük ırklar güçlü görünür ama kalp hastalıkları, eklem sorunları ve bazı tümör türleri onlarda daha erken ve daha sık çıkıyor. Dayanıklılıkla ömür aynı şey değil. Dev ırk bir köpek, yedi yaşında küçük bir ırkın on iki yaşındaki hâline denk sayılıyor.' },

    { kind: 'baslik', metin: 'Yaygın ırklarda ortalama ömür' },
    { kind: 'tablo', basliklar: ['Irk', 'Ortalama ömür', 'Dikkat edilecek'], satirlar: [
      ['Melez (orta boy)', '11-14 yıl', 'Genetik çeşitlilik avantaj'],
      ['Chihuahua', '14-17 yıl', 'Diş ve diş eti sorunları'],
      ['Yorkshire Terrier', '13-16 yıl', 'Diz kapağı çıkığı'],
      ['Beagle', '12-15 yıl', 'Obeziteye çok yatkın'],
      ['Golden Retriever', '10-12 yıl', 'Tümör riski, kalça displazisi'],
      ['Labrador', '10-12 yıl', 'Obezite ve eklem'],
      ['Alman Kurdu', '9-13 yıl', 'Kalça displazisi'],
      ['Rottweiler', '8-10 yıl', 'Eklem ve kalp'],
      ['Danua', '6-8 yıl', 'Mide dönmesi, kalp kası hastalığı'],
    ]},

    { kind: 'baslik', metin: 'Kilo, ömürden yıl çalıyor' },
    { kind: 'paragraf', metin: 'Fazla kilo köpeklerde eklem yükünü artırıyor, şeker hastalığı ve kalp sorunları riskini yükseltiyor. Etkisi de küçük değil: ideal kiloda tutulan köpekler, fazla kilolu benzerlerinden belirgin biçimde uzun yaşıyor.' },
    { kind: 'paragraf', metin: 'Evde ölçü şu: köpeğin yan tarafına avucunuzu koyup gezdirin. Kaburgaları **bastırmadan** hissetmelisiniz. Üstten baktığınızda bel çizgisi görünmeli, yandan baktığınızda karın göğüs hizasından yukarı doğru toplanmalı. Bu üç işaretten ikisi yoksa kilo fazla demektir.' },
    { kind: 'yanilgi', baslik: '"Mama paketindeki miktar doğrudur" yanılgısı', metin: 'Paketteki tablo ortalama bir köpek için yazılıyor; kısırlaştırılmış, az hareket eden ya da yaşlı bir köpekte fazla geliyor. Miktarı pakete göre değil, köpeğin vücut durumuna göre ayarlayın ve kontrolde veteriner hekiminize sordurun.' },

    { kind: 'baslik', metin: 'Kısırlaştırma: ömre etkisi var ama zamanlaması ırka bağlı' },
    { kind: 'paragraf', metin: 'Kısırlaştırma dişilerde rahim iltihabı ve meme tümörü riskini, erkeklerde testis tümörünü azaltıyor. Ayrıca kaçma ve kavga davranışını düşürerek kaza riskini indiriyor.' },
    { kind: 'paragraf', metin: 'Ancak köpeklerde kedilerden farklı bir ayrıntı var: özellikle büyük ve dev ırklarda çok erken yapılan kısırlaştırma, kemik gelişimi tamamlanmadan hormon desteğini kestiği için eklem sorunlarıyla ilişkilendiriliyor. Bu yüzden zamanlama ırka ve boya göre veteriner hekimle birlikte belirleniyor; tek bir doğru yaş yok.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Köpeğinizin sağlığıyla ilgili her kararı, hayvanı gören bir veteriner hekimle birlikte alın.' },

    { kind: 'baslik', metin: 'Ağız bakımı küçük ırklarda daha da kritik' },
    { kind: 'paragraf', metin: 'Küçük ırklarda dişler aynı çene alanına sıkışıyor, bu da diş taşı ve diş eti iltihabını hızlandırıyor. Kronik ağız enfeksiyonu vücutta sürekli bir iltihap yükü oluşturuyor ve uzun vadede kalp ve böbrek sağlığını etkiliyor.' },
    { kind: 'paragraf', metin: 'Ağız kokusu "köpek kokusu" değildir. Kalıcı kötü koku, çoğu zaman ilk uyarıdır.' },

    { kind: 'baslik', metin: 'Bir köpek yılı yedi insan yılı değil, ve boya göre değişiyor' },
    { kind: 'paragraf', metin: 'Yedi ile çarpma kuralı köpeklerde kedilerden bile daha yanlış, çünkü yaşlanma hızı boya göre farklı. Kaba karşılıklar şöyle:' },
    { kind: 'tablo', basliklar: ['Köpek yaşı', 'Küçük ırk', 'Orta ırk', 'Büyük ırk'], satirlar: [
      ['1 yaş', '15', '15', '14'],
      ['2 yaş', '24', '24', '22'],
      ['5 yaş', '36', '37', '40'],
      ['8 yaş', '48', '51', '55'],
      ['10 yaş', '56', '60', '66'],
      ['12 yaş', '64', '69', '77'],
    ]},
    { kind: 'paragraf', metin: 'Tablonun anlattığı şey şu: ilk iki yıl bütün köpeklerde hızlı geçiyor, sonrasında büyük ırklar hızlanıyor.' },

    { kind: 'baslik', metin: 'Yaşlılık belirtisi ile hastalık belirtisi karıştırılıyor' },
    { kind: 'paragraf', metin: 'Köpekler genellikle küçük ırklarda 9-10, büyük ırklarda 6-7 yaşından sonra yaşlı kabul ediliyor. Bu dönemde bazı değişiklikler normal, bazıları değil.' },
    { kind: 'altBaslik', metin: 'Veterinere gitmeyi gerektirenler' },
    { kind: 'liste', maddeler: [
      'Su tüketiminde ve idrar sıklığında belirgin artış',
      'İştah yerindeyken kilo kaybı',
      'Merdiven çıkmakta zorlanma, yürüyüşte geride kalma',
      'Nefes darlığı, dinlenirken bile hızlı soluma',
      'Karında şişkinlik ve huzursuzluk, özellikle dev ırklarda acildir',
      'Gece dolaşma, sahibini tanımakta gecikme, kafa karışıklığı',
    ]},
    { kind: 'yanilgi', baslik: '"Yaşlandı, o yüzden yavaşladı" yanılgısı', metin: 'Yavaşlama tek başına yaşın sonucu olabilir ama eklem ağrısının, kalp yetmezliğinin ve tiroid sorununun da ilk belirtisi. İkisini ayıran tek şey muayene. "Yaşlandı" demek belirtiyi açıklamıyor, yalnız ertelemenizi sağlıyor.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Köpek kemik yemeli', 'Pişmiş kemik kırılıp parçalanıyor, sindirim sistemini delebiliyor'],
      ['Bir öğün atlaması sorun değil', 'Köpeklerde iştahsızlık kedilere göre daha net bir uyarıdır'],
      ['Yorulana kadar koştursun', 'Yavru ve dev ırklarda aşırı eforun eklem gelişimine zararı var'],
      ['Aşı bir kez yapılır', 'Karma ve kuduz aşısının tekrarı var, takvim köpeğe göre belirlenir'],
      ['Kuyruk sallıyorsa mutludur', 'Kuyruk sallamak uyarılmışlık işareti, gerginlikte de görülür'],
    ]},

    { kind: 'baslik', metin: 'Köpeğinizin ömrünü uzatmak için yedi madde' },
    { kind: 'liste', maddeler: [
      'Kiloyu ideal aralıkta tutun, bu listedeki en güçlü tek madde',
      'Aşı ve parazit takvimini aksatmayın',
      'Ağız bakımını ihmal etmeyin, kontrollerde diş taşını sordurun',
      'Düzenli ama ırka uygun egzersiz verin, yavruda aşırı eforu sınırlayın',
      'Kısırlaştırma zamanını ırka göre veteriner hekimle belirleyin',
      'Yılda bir, yaşlılıkta altı ayda bir kontrol ve kan tahlili',
      'Dev ırklarda mide dönmesi belirtilerini öğrenin, bu bir acil durumdur',
    ]},
    { kind: 'paragraf', metin: 'Listedeki maddelerin hiçbiri zor değil; zor olan yıllarca aksatmadan sürdürmek. Aşı ve kontrol tarihlerini takip eden bir yer tutmak, en çok unutulan maddeyi en kolayı hâline getiriyor.' },
  ],
  sss: [
    { soru: 'En uzun yaşayan köpek kaç yaşına kadar yaşadı?', cevap: 'Kayıtlara geçen en uzun ömürlü köpekler 22-29 yaş aralığında bildirildi. Bunlar istisna; 16 yaşını gören köpek bile uzun ömürlü sayılır.' },
    { soru: 'Melez köpekler saf ırklardan uzun mu yaşar?', cevap: 'Genellikle evet, aynı boy sınıfında karşılaştırıldığında. Sebebi genetik çeşitlilik: kalıtsal hastalıkların aynı hayvanda birikme ihtimali daha düşük.' },
    { soru: 'Köpeğim yaşlandı, yürüyüşü kesmeli miyim?', cevap: 'Hayır, kısaltmalı ve sıklaştırmalısınız. Hareketsizlik eklem sorunlarını hızlandırıyor. Uzun tek yürüyüş yerine kısa ve sık yürüyüş yaşlı köpekte daha iyi tolere ediliyor.' },
    { soru: 'Köpekler için mide dönmesi neden acil?', cevap: 'Derin göğüslü ve dev ırklarda mide dönüp gaz sıkışabiliyor. Karında şişkinlik, kusmaya çalışıp kusamama ve huzursuzluk görülürse saatler değil dakikalar önemlidir, hemen kliniğe gidilmeli.' },
    { soru: 'Köpeğimin yaşını nasıl öğrenebilirim?', cevap: 'Sahiplenilen köpeklerde yaş; diş aşınması, tüy rengindeki ağarma ve genel vücut durumuna bakılarak tahmin ediliyor. Kesin değil, veteriner hekim bir aralık verir.' },
    { soru: 'Yaşlı köpek maması gerçekten gerekli mi?', cevap: 'Çoğu köpekte faydalı, çünkü kalori yoğunluğu ve eklem destekleri farklı ayarlanıyor. Ancak böbrek ya da kalp sorunu varsa mama seçimi paket üzerindeki yaş grubuna göre değil, tahlil sonucuna göre yapılmalı.' },
  ],
};
