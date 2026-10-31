import type { BlogYazi } from './types';

export const arabadaKopekTasima: BlogYazi = {
  slug: 'arabada-kopek-tasima',
  baslik: 'Arabada Kedi Köpek Taşıma Kuralları ve Cezası',
  ozet: 'Arabada kedi köpek taşımak yasak mı, cezası var mı? Trafik kanunundaki genel kural, 2026 ceza tutarı, güvenli taşıma yolları ve sıcak araç riski bu yazıda.',
  kapakAlt:
    'Otomobilin arka koltuğunda göğüs tasması takılı golden retriever',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Türkiye\'de özel araçta kedi ya da köpek taşımak yasak değil ve trafik mevzuatında evcil hayvanı adıyla anan bir ceza maddesi yok; ama hayvanın sürücünün görüşünü kapatması ya da sürüş güvenliğini bozması, Karayolları Trafik Kanunu\'ndaki genel yükleme yasağının kapsamına girebiliyor.** Bu yasağın idari para cezası kanun metninde 3.000 TL olarak yazıyor. Hayvanı sıcak ya da soğuk bir araçta bırakmak ise ayrıca 5199 sayılı Hayvanları Koruma Kanunu\'nun yasakları arasında.' },
    { kind: 'paragraf', metin: 'Aşağıda hangi kuralın neyi söylediğini, ceza tutarının nereden geldiğini ve kedi ile köpeği araçta güvenle taşımanın yollarını resmî metinlere ve hakemli çalışmalara dayanarak topladık.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Arabada evcil hayvan taşımak yasak mı?', 'Hayır; özel araçta taşımayı yasaklayan bir hüküm yok'],
      ['Hayvana özel bir trafik cezası var mı?', 'Yok; görüşü engelleyen yükleme yasağı uygulanabilir'],
      ['O yasağın cezası ne kadar?', 'Kanun metninde 3.000 TL (7574 sayılı Kanunla, 2026)'],
      ['Hayvana emniyet kemeri zorunlu mu?', 'Kanundaki kemer zorunluluğu sürücü ve yolcular için'],
      ['Hayvanı araçta bırakmak suç mu?', 'Aşırı sıcağa ve soğuğa bırakmak 5199\'da yasak'],
    ]},

    { kind: 'baslik', metin: 'Arabada kedi köpek taşımak yasak mı?' },
    { kind: 'paragraf', metin: 'Karayolları Trafik Kanunu taşıtı "karayolunda insan, hayvan ve yük taşımaya yarayan araçlar" olarak tanımlıyor. Yani hayvan taşımak, kanunun en baştan öngördüğü bir kullanım. Kanunda özel otomobilde kedi ya da köpek taşımayı ayrıca düzenleyen, kafes ya da kemer şartı koyan bir madde bulunmuyor. Kanunun hayvanlara ayırdığı trafik kuralları, 69. maddede olduğu gibi hayvanla çekilen araçları sürenler ve hayvan sürücüleri için yazılmış.' },
    { kind: 'paragraf', metin: 'Bu, hayvanın araçta istenildiği gibi taşınabileceği anlamına gelmiyor. Hem trafik kanununun genel hükümleri hem de Hayvanları Koruma Kanunu, taşıma biçimine sınır çiziyor. Otobüs, metro, vapur ve tren gibi toplu taşıma araçlarında ise her işletmenin kendi kuralı var; bunları [[evcil-hayvanla-toplu-tasima|evcil hayvanla toplu taşıma]] yazımızda ayrıca anlattık.' },
    { kind: 'yanilgi', baslik: '"Arabada köpek taşımanın ayrı bir trafik cezası var"', metin: 'Kanunda evcil hayvanı adıyla anan bir trafik cezası yok. Söz konusu olabilecek ceza, araçta taşınan her şey için geçerli olan genel yükleme kuralından geliyor: sürücünün görüşüne engel olan ya da aracın sürme güvenliğini bozan taşıma yasak. Hayvanın serbestçe ön koltuğa geçmesi, sürücünün kucağına çıkması ya da ön camı kapatması bu kapsamda değerlendirilebilir.' },

    { kind: 'baslik', metin: 'Trafik cezası ne kadar?' },
    { kind: 'paragraf', metin: 'Karayolları Trafik Kanunu\'nun 65. maddesi, yüklü ve yüksüz araçlarda bazı taşıma biçimlerini yasaklıyor. Birinci fıkranın (j) bendi, "sürücünün görüşüne engel olacak, aracın sürme güvenliğini bozacak" şekilde yükleme yapılmasını sayıyor. Maddenin ikinci fıkrası 12 Şubat 2026 tarihli 7574 sayılı Kanunla değiştirildi ve (j) bendine uymayanlara uygulanacak idari para cezası **3.000 TL** olarak yazıldı.' },
    { kind: 'paragraf', metin: 'Kanuna göre bu bentteki şartlara uymadan kullanılan taşıtların, gerekli şartlar sağlanıncaya kadar yola devam etmesine izin verilmiyor. Yani ceza yazılırsa çoğu durumda hayvanın araçta yeniden yerleştirilmesi de gerekiyor. Trafik cezalarındaki tutarlar ise her takvim yılı başında, Vergi Usul Kanunu\'na göre ilan edilen yeniden değerleme oranında artırılıyor; bu yüzden tutar sonraki yıllarda değişebilir.' },
    { kind: 'paragraf', metin: 'Bir hayvanın bu bende aykırı taşındığına karar vermek, olayın koşullarına göre trafik görevlisinin takdirinde. Hayvan arka koltukta bağlıysa ya da sabitlenmiş bir taşıma kabındaysa bu soru çoğu zaman hiç doğmuyor.' },

    { kind: 'baslik', metin: 'Emniyet kemeri kuralı hayvanları kapsıyor mu?' },
    { kind: 'paragraf', metin: 'Kanunun 78. maddesi, araçların sürülmesi sırasında sürücü ve yolcuların güvenliği için emniyet kemerinin ve çocuk bağlama sisteminin usulüne uygun kullanılmasını zorunlu tutuyor. Bu madde insanlar için yazılmış; hayvan için kemer ya da kafes zorunluluğu getirmiyor.' },
    { kind: 'paragraf', metin: 'Bazı ülkeler bu konuda daha açık. İngiltere\'nin resmî karayolu kuralları, araçta köpeklerin ve diğer hayvanların, sürüş sırasında dikkat dağıtamayacakları ve ani duruşta sürücüyü ya da kendilerini yaralayamayacakları şekilde uygun biçimde bağlanmasını istiyor. Aynı metin bunun yollarını da sayıyor: emniyet kemeri bağlantılı tasma, taşıma çantası, köpek kafesi ve bagaj bölmesi ayırıcısı. Türkiye\'de bu bir yasal şart değil, ama aynı mantıkla önerilen bir uygulama.' },

    { kind: 'baslik', metin: 'Arabada köpek nasıl taşınır?' },
    { kind: 'paragraf', metin: 'ASPCA, kaza durumunda en güvenli seçeneğin iyi havalandırılan bir kafes ya da taşıma kabı olduğunu belirtiyor. Kabın, hayvanın içinde ayakta durabileceği, oturup uzanabileceği ve dönebileceği büyüklükte olması gerekiyor. Kabın, ani frende kaymayacak ya da yer değiştirmeyecek biçimde sabitlenmesi önerilir.' },
    { kind: 'paragraf', metin: 'Kafes kullanılmayacaksa köpeğin arka koltukta, sabitlenmiş bir emniyet kemerine bağlı göğüs tasmasıyla oturması öneriliyor. Aynı kurum, köpeğin başını pencereden dışarı çıkararak yolculuk yapmasına izin verilmemesini öneriyor.' },
    { kind: 'tablo', basliklar: ['Yöntem', 'Ne işe yarıyor', 'Dikkat edilecek nokta'], satirlar: [
      ['Kafes ya da taşıma kabı', 'Kazada en güvenli seçenek olarak öneriliyor', 'Ayakta durup dönebileceği boyutta, sabitlenmiş olmalı'],
      ['Kemere bağlı göğüs tasması', 'Köpeği arka koltukta yerinde tutuyor', 'Bağlantı sabitlenmiş bir emniyet kemerine yapılmalı'],
      ['Bagaj bölmesi ayırıcısı', 'Hayvanın yolcu bölümüne geçmesini engelliyor', 'İngiltere kurallarında sayılan yollardan biri'],
      ['Serbest ya da kucakta', 'Bir koruma sağlamıyor', 'Dikkat dağıtabilir, görüşü engelleyebilir'],
    ]},

    { kind: 'baslik', metin: 'Kedi arabada nasıl taşınır?' },
    { kind: 'paragraf', metin: 'Kedi için de ilke aynı: havalandırması iyi, kedinin içinde rahatça dönebileceği bir taşıma kabı, ani frende kaymayacak şekilde sabitlenmiş olarak. Kucakta ya da araç içinde serbest taşınan bir kedi, sürücünün dikkatini dağıtabilir ve kapı açıldığında kaçabilir.' },
    { kind: 'paragraf', metin: 'Yolculuğa çıkmadan önce kimlik bilgisi de önemli. ASPCA, hayvanın mikroçipli olmasını ve üzerinde sahibinin adı ile telefon numarası yazılı bir künye taşımasını öneriyor. Mikroçipin nasıl çalıştığını [[mikrocip-nedir|mikroçip nedir]] yazımızda, yolda kaybolan bir hayvanı aramanın adımlarını da [[kaybolan-kedi-kopek-nasil-bulunur|kaybolan kedi köpek nasıl bulunur]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Hayvanı arabada bırakmak neden tehlikeli?' },
    { kind: 'paragraf', metin: 'Park halindeki bir araç, dışarısı çok sıcak değilken bile hızla ısınıyor. Pediatrics dergisinde yayımlanan bir ölçüm çalışmasında koyu renkli bir sedan, açık ve güneşli 16 farklı günde 60 dakika boyunca izlendi. Dış sıcaklık 22 ile 36 °C (72 ile 96 °F) arasındaydı. En serin günde bile araç içi sıcaklık 47 °C\'ye (117 °F) ulaştı; ortalama artış yaklaşık 22 °C (40 °F) oldu ve artışın yüzde 80\'i ilk 30 dakikada gerçekleşti.' },
    { kind: 'yanilgi', baslik: '"Camı biraz aralık bırakırsam araç ısınmaz"', metin: 'Aynı çalışmada camlar yaklaşık 4 santimetre (1,5 inç) aralık bırakıldığında ısınma hızı da ulaşılan en yüksek sıcaklık da düşmedi. ASPCA da sıcak bir günde camlar açık olsa bile park halindeki aracın kısa sürede fırına dönebileceğini, soğuk havada ise buzdolabı gibi soğuğu içinde tutabileceğini belirtiyor.' },
    { kind: 'paragraf', metin: '5199 sayılı Hayvanları Koruma Kanunu\'nun 14. maddesi, hayvanları aşırı soğuğa ve sıcağa maruz bırakmayı yasaklar arasında sayıyor. Kanunun 4. maddesindeki temel ilkelere göre de hayvanları taşıyanlar onları türüne ve özelliğine uygun ortam ve şartlarda taşımak, taşıma sırasında beslemek ve bakımını yapmak durumunda. Bu yasağın idari para cezasını ve hapis gerektiren hâlleri [[hayvana-eziyet-cezasi|hayvana eziyet cezası]] yazımızda ayrıntılı ele aldık.' },
    { kind: 'uyari', metin: 'Sıcak bir araçta kalmış bir kedi ya da köpek için vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde müdahale denemek yerine en yakın kliniği aramak ve yola çıkmak önerilir.' },

    { kind: 'baslik', metin: 'Sıcak araç tek risk değil' },
    { kind: 'paragraf', metin: 'İngiltere\'de 2016\'da birinci basamak veteriner bakımı altındaki 905.543 köpeğin kayıtlarını inceleyen bir çalışma, 1.259 sıcakla ilişkili hastalık olayı buldu. Bu olayların yüzde 74,2\'si egzersizle, yüzde 12,9\'u çevre sıcaklığıyla, yüzde 5,2\'si ise araçta kapalı kalmayla ilişkiliydi. Basık yüzlü (brakisefal) köpeklerde üç türün de görülme olasılığı daha yüksekti.' },
    { kind: 'paragraf', metin: 'Bu bulgu yolculuk için de önemli. Sıcak bir günde araçtan inip yapılan uzun ve yorucu bir yürüyüş, kısa bir park kadar risk taşıyabiliyor. Molaları günün serin saatlerine ve gölgeli yerlere denk getirmek önerilir.' },

    { kind: 'baslik', metin: 'Uzun yolculuğa nasıl hazırlanılır?' },
    { kind: 'paragraf', metin: 'ASPCA, uzun bir yolculuktan önce hayvanı bir dizi kısa sürüşle araca alıştırmayı ve araçta geçen süreyi giderek uzatmayı öneriyor. Yanına mama, kap, tasma, dışkı torbası, bolca su ve hayvanın tanıdığı bir oyuncak ya da minder almak, yolculuğu kolaylaştırıyor.' },
    { kind: 'liste', maddeler: [
      'Yolculuk günü hafif bir öğünün yola çıkmadan üç ila dört saat önce verilmesi öneriliyor.',
      'Araç hareket hâlindeyken hayvanı beslemekten kaçınmak gerekiyor.',
      'Hayvanın alışık olmadığı bir yerin suyu mide rahatsızlığına yol açabileceği için yanında su götürmek öneriliyor.',
      'Yurt dışına araçla çıkılacaksa belge şartları ayrı; bunları [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] yazımızda anlattık.',
    ]},
    { kind: 'paragraf', metin: 'Hayvanınız araçta çok huzursuzlanıyor, sık sık kusuyor ya da yolculuk boyunca rahatlayamıyorsa, bunun nedenini ve yapılabilecekleri veteriner hekiminizle konuşmak gerekiyor.' },
  ],
  sss: [
    { soru: 'Arabada köpek taşımanın cezası var mı?', cevap: 'Köpeği adıyla anan bir trafik cezası yok. Ancak köpek sürücünün görüşünü engelleyecek ya da aracın sürme güvenliğini bozacak şekilde taşınıyorsa, Karayolları Trafik Kanunu\'nun 65. maddesindeki genel yükleme yasağı uygulanabilir. Bu bendin cezası kanun metninde 3.000 TL.' },
    { soru: 'Köpek ön koltukta taşınabilir mi?', cevap: 'Kanunda ön koltuğu yasaklayan bir hüküm yok, ama ASPCA kafes kullanılmıyorsa köpeğin arka koltukta, sabitlenmiş bir emniyet kemerine bağlı göğüs tasmasıyla taşınmasını öneriyor. Ön koltukta serbest duran bir köpek sürücünün görüşünü ve dikkatini etkileyebilir.' },
    { soru: 'Kediyi arabada kafessiz taşımak olur mu?', cevap: 'Önerilmez. Kedinin havalandırması iyi, içinde dönebileceği ve ani frende kaymayacak şekilde sabitlenmiş bir taşıma kabında taşınması daha güvenli. Araçta serbest dolaşan bir kedi sürücünün dikkatini dağıtabilir ve kapı açıldığında kaçabilir.' },
    { soru: 'Camı açık bırakırsam köpek arabada bekleyebilir mi?', cevap: 'Hayır, bu güvenli değil. Bir ölçüm çalışmasında camlar yaklaşık 4 santimetre aralık bırakıldığında araç içindeki ısınma hızı da en yüksek sıcaklık da düşmedi. Dış sıcaklık 22 °C iken bile araç içi 47 °C\'ye ulaştı.' },
    { soru: 'Köpeğin başını camdan çıkarması tehlikeli mi?', cevap: 'ASPCA, köpeğin başını pencereden dışarı çıkararak yolculuk yapmasına izin verilmemesini öneriyor. Camı, köpeğin başını dışarı çıkaramayacağı kadar açık bırakmak ve köpeği arka koltukta bağlı tutmak daha güvenli bir yol.' },
    { soru: 'Hayvanı arabada bırakmanın cezası nedir?', cevap: 'Hayvanı aşırı sıcağa ya da soğuğa maruz bırakmak, 5199 sayılı Hayvanları Koruma Kanunu\'nun 14. maddesinde yasaklar arasında sayılıyor ve kanunda idari para cezası öngörülüyor. Tutarlar ve hapis gerektiren hâller hayvana eziyet cezasını anlatan yazımızda.' },
    { soru: 'Uzun yolculuktan önce köpek beslenir mi?', cevap: 'ASPCA, yola çıkmadan üç ila dört saat önce hafif bir öğün verilmesini ve araç hareket hâlindeyken beslemekten kaçınılmasını öneriyor. Yanında bolca su götürmek de gerekiyor; alışık olmadığı bir yerin suyu mide rahatsızlığına yol açabilir.' },
  ],
  kontrolListesi: [
    'Taşıma kabı sabitlendi mi?',
    'Köpek arka koltukta bağlı mı?',
    'Başını camdan çıkaramıyor mu?',
    'Yanınızda su ve kap var mı?',
    'Künye ve mikroçip bilgisi güncel mi?',
    'Hayvan araçta yalnız kalmıyor mu?',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '2918 sayılı Karayolları Trafik Kanunu',
      yil: 1983,
      adres: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.2918.pdf',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu',
      yil: 2004,
      adres: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.5199.pdf',
    },
    {
      kurum: 'UK Government, Department for Transport',
      baslik: 'The Highway Code: Rules about animals (47 to 58)',
      adres: 'https://www.gov.uk/guidance/the-highway-code/rules-about-animals-47-to-58',
    },
    {
      kurum: 'ASPCA',
      baslik: 'Travel Safety Tips',
      adres: 'https://www.aspca.org/pet-care/general-pet-care/travel-safety-tips',
    },
    {
      kurum: 'Stanford University, Division of Emergency Medicine',
      yazarlar: 'McLaren C, Null J, Quinn J',
      baslik: 'Heat stress from enclosed vehicles: moderate ambient temperatures cause significant temperature rise in enclosed vehicles',
      dergi: 'Pediatrics',
      yil: 2005,
      kunye: '116(1):e109-12',
      doi: '10.1542/peds.2004-2368',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/15995010/',
    },
    {
      kurum: 'Nottingham Trent University; The Royal Veterinary College',
      yazarlar: 'Hall EJ, Carter AJ, O\'Neill DG',
      baslik: 'Dogs Don\'t Die Just in Hot Cars-Exertional Heat-Related Illness (Heatstroke) Is a Greater Threat to UK Dogs',
      dergi: 'Animals (Basel)',
      yil: 2020,
      kunye: '10(8):1324',
      doi: '10.3390/ani10081324',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32751913/',
    },
  ],
};
