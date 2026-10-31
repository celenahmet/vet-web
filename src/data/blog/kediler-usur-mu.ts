import type { BlogYazi } from './types';

export const kedilerUsurMu: BlogYazi = {
  slug: 'kediler-usur-mu',
  baslik: 'Kediler Üşür mü? Kışın Kedi Bakımı',
  ozet: 'Kediler üşür; tüyleri soğuğa karşı tam koruma sağlamaz. Kışın barınak, yatak, mama, su, araba motoru ve antifriz için veteriner kaynaklı öneriler.',
  kapakAlt:
    'Karlı pencerenin önünde örgü yatağında kıvrılmış uzun tüylü kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, kediler üşür; düşük sıcaklık, rüzgâr, kar ve buz onları hipotermi ve donma yaralanmalarına açık hâle getirir.** Cornell Üniversitesi Veteriner Fakültesi\'nin kedi sağlığı merkezi, kışın bu sorunlardan korumanın en iyi yolunun kediyi içeride tutmak olduğunu söylüyor. ASPCA\'nın özeti de basit: hava size çok soğuk geliyorsa evcil hayvanınız için de büyük olasılıkla çok soğuktur.' },
    { kind: 'paragraf', metin: 'Aşağıda hangi kedilerin soğuktan daha çok etkilendiğini, dışarıya çıkan ya da sokakta yaşayan kediler için barınağın nasıl olması gerektiğini, kışın mama ve su düzenini, araba motoru ve antifriz gibi mevsime özgü riskleri ve evin içinde dikkat edilmesi gerekenleri veteriner fakülteleri ile hayvan refahı kuruluşlarının önerilerine dayanarak anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Kış riski', 'Önerilen önlem'], satirlar: [
      ['Uzun süre soğukta kalmak', 'Kedinin içeride tutulması, dışarıdakine korunaklı barınak'],
      ['Yerden ısı kaybı', 'Barınağın yerden yükseltilmesi, altlık olarak saman'],
      ['Donan su kabı', 'Sığ seramik yerine kalın plastik kap, düzenli kontrol'],
      ['Sıcak araba motoru', 'Çalıştırmadan önce kaputa vurmak, tekerlek aralarına bakmak'],
      ['Antifriz', 'Kapalı ve ulaşılamaz yerde saklamak, sızıntıyı hemen temizlemek'],
      ['Yol tuzu ve buz çözücüler', 'Dışarıdan dönen kedinin patilerini nemli bezle silmek'],
      ['Soba, şömine, ısıtıcı', 'Kediyi doğrudan temastan ve yanıktan korumak'],
    ]},

    { kind: 'baslik', metin: 'Kediler neden üşür?' },
    { kind: 'paragraf', metin: 'Kedinin tüyü onu bir ölçüde korur ama soğuğa karşı tam bir kalkan değildir. Cornell\'in kedi sağlığı merkezine göre kış, dışarıda kayda değer zaman geçiren kedileri en çok etkiliyor: düşük sıcaklık, rüzgâr ve kar ya da buz bir araya geldiğinde kediler hipotermi ve donma yaralanmalarına yatkın hâle geliyor.' },
    { kind: 'paragraf', metin: 'Hipotermi, vücut sıcaklığının normalin altına düşmesidir. Cornell\'den hekim Brian Collins bunu, donma derecesindeki bir ortamda uzun süre kalmanın yol açabileceği ve ölümcül olabilen bir vücut ısısı düşüşü olarak tarif ediyor. Kediler sıcağı sever ve kendiliğinden sıcak noktalar arar. Kışın radyatöre, sobaya ya da park edilmiş arabanın ılık motoruna yönelmeleri bu yüzdendir.' },
    { kind: 'yanilgi', baslik: '"Kedinin kürkü var, kışın dışarıda bir şey olmaz"', metin: 'Tüy soğuğu tamamen engellemez. Veteriner kaynakları, dışarıda zaman geçiren kedilerin hipotermi ve donmaya yatkın olduğunu, en iyi önlemin kediyi içeride tutmak olduğunu belirtiyor. Dışarıda kalmak zorunda olan kedi için korunaklı bir barınak, yatak, mama ve su gerekiyor.' },

    { kind: 'baslik', metin: 'Hangi kediler soğuktan daha çok etkilenir?' },
    { kind: 'paragraf', metin: 'Her kedi soğuktan aynı ölçüde etkilenmez. Cornell\'in uyarısına göre çok genç hayvanlar, yaşlı hayvanlar ve kısa tüylü ırklar en savunmasız grup. Tüysüz ya da çok kısa tüylü bir kedinin uzun tüylü bir kediye göre daha kolay üşümesi bu yüzden beklenen bir durumdur.' },
    { kind: 'liste', maddeler: [
      '**Yeni doğan yavrular:** Milano Üniversitesi\'nden araştırmacıların derlemesine göre yavru kediler yaşamlarının ilk iki haftasında hipotermi, susuz kalma ve kan şekeri düşüklüğü açısından yüksek risk altında. Yavru bakımı için [[yavru-kedi-bakimi|yavru kedi bakımı]] yazısına bakılabilir.',
      '**Yaşlı ve hasta kediler:** International Cat Care, hareketi azalmış, kas ya da kilo kaybetmiş veya vücut sıcaklığını korumakta zorlanan kedilerin kışın ek özen istediğini belirtiyor.',
      '**Eklem sorunu olan kediler:** Aynı kuruluşa göre artriti olan bir kedi biraz daha sıcak bir ortamdan özellikle hoşnut kalıyor.',
      '**Kısa tüylü ırklar:** Cornell\'in en savunmasız saydığı gruplardan biri.',
    ]},
    { kind: 'paragraf', metin: 'Hipotermi yalnızca soğukta kalmaktan kaynaklanmaz. Kedi ve köpeklerde hipotermiyi inceleyen bir derlemede, düşük vücut sıcaklığının çevresel maruziyetin yanı sıra hastalık, ilaçlar, anestezi ya da travmaya bağlı da gelişebildiği belirtiliyor. Bu yüzden sıcak bir evde yaşadığı hâlde sürekli üşüyormuş gibi görünen bir kedinin veteriner hekime gösterilmesi gerekiyor.' },
    { kind: 'uyari', metin: 'Soğukta kalmış, halsiz görünen, durgunlaşmış ya da her zamankinden farklı davranan bir kedinin içeri alınması ve vakit kaybetmeden veteriner hekime başvurulması gerekiyor. Belirtilerin nedenini ve ne yapılacağını muayene eden hekim belirler.' },

    { kind: 'baslik', metin: 'Kışın kedi içeride mi tutulmalı?' },
    { kind: 'paragraf', metin: 'Cornell\'in kedi sağlığı merkezine göre kışın soğuğa bağlı sorunlardan korumanın en iyi yolu kediyi her zaman içeride tutmak. International Cat Care de kar ya da buz fırtınasında ve çok düşük sıcaklıklarda kedilerin içeride kalmasını öneriyor; fırtına kedinin yönünü şaşırmasına, kaybolmasına ya da yaralanmasına yol açabiliyor. ASPCA da dışarıda bırakılan hayvanların donabileceğini, yönünü kaybedebileceğini, kaybolabileceğini ya da yaralanabileceğini hatırlatıyor.' },
    { kind: 'paragraf', metin: 'Dışarı çıkmaya alışkın bir kediyi tamamen içeride tutmak her zaman mümkün olmayabilir. International Cat Care bu durumda kedinin mikroçipli olmasını, dışarıda su geçirmeyen ve güvenli bir sığınağı bulunmasını ve eve kolayca dönebilmesini öneriyor. Buzlu havada kedi kapısı donup açılmaz hâle gelebiliyor; kapının düzenli kontrol edilmesi gerekiyor. Mikroçipin ne işe yaradığı [[mikrocip-nedir|mikroçip nedir]] yazısında anlatılıyor.' },
    { kind: 'paragraf', metin: 'İçeride tutulan kedinin hareketsiz kalmaması da önemli. Aynı kuruluş kedi ağacı, tırmalama tahtası, ödüllü mama oyuncakları gibi zenginleştirme araçlarını öneriyor. Yaşlı ya da hasta kediler veya dışarı çıkamayacak kadar sert havalar için evin sessiz bir köşesine kum kabı konulması gerekiyor; birden fazla kedi varsa kum kaplarının da birden fazla ve farklı yerlerde olması öneriliyor.' },

    { kind: 'baslik', metin: 'Dışarıdaki kediler için kış barınağı' },
    { kind: 'paragraf', metin: 'Bahçeye çıkan ya da sokakta yaşayan kediler için Cornell\'in önerisi, rüzgârdan, soğuktan ve yağıştan koruyan bir barınak sağlamak. Bu, kediler için yapılmış bir kulübe ya da yeterli yatağı, maması ve suyu olan kapalı bir alan olabilir.' },
    { kind: 'liste', maddeler: [
      '**Altlık:** Cornell samanı iyi bir seçenek olarak gösteriyor; gazete, kumaş ve kuru ot önerilmiyor.',
      '**Zemin:** Vücut ısısının toprağa kaçmaması için barınağın mümkünse yerden yükseltilmesi gerekiyor.',
      '**Su:** Suyun donmaması için sığ seramik kaplar yerine kalın plastik kaplar öneriliyor. International Cat Care dışarıdaki su kabının donup donmadığının ve temiz olup olmadığının düzenli kontrol edilmesini istiyor.',
      '**Mama:** Kediler kışın ısınmak için daha fazla kalori yakıyor; bu yüzden sıcak aylara göre biraz daha fazla beslemek kilo kaybını önlemeye yardımcı oluyor.',
    ]},
    { kind: 'paragraf', metin: 'Apartman bahçesinde ya da ortak alanda kedi besleyenler için kurallar ve komşuluk ilişkileri [[apartmanda-kedi-kopek-beslemek|apartmanda kedi köpek beslemek]] yazısında ayrıca anlatılıyor.' },

    { kind: 'baslik', metin: 'Kışın mama ve su düzeni' },
    { kind: 'paragraf', metin: 'ASPCA da kış aylarında hayvanların sıcak kalmak için daha fazla enerji harcadığını, biraz daha fazla beslemenin gereken kaloriyi sağlayabileceğini belirtiyor. Bol ve temiz su ise hem vücudun su dengesine hem de kuru havada derinin kurumamasına katkı sağlıyor.' },
    { kind: 'paragraf', metin: 'Ev kedileri için tablo biraz farklı. International Cat Care, soğuk ve yağışlı havada pek çok kedinin içeride kalmayı tercih ettiğini, bu yüzden daha çok yiyip daha az hareket edebileceğini söylüyor. Kuruluşun önerisi, zenginleştirme ile kediyi hareketli tutmak ve kilosunu izlemek. Kışın mama miktarını artırmak dışarıda vakit geçiren kedi için mantıklı olabilir; evden çıkmayan kedide ise kilo artışına yol açabilir. Kedinin ihtiyacı konusunda veteriner hekimle konuşmak en doğru yol. Kilo ve genel durum için [[kedi-kopek-check-up-ne-zaman|check-up zamanlaması]] yazısı da yol gösterebilir.' },

    { kind: 'baslik', metin: 'Araba motoru ve kurutma makinesi riski' },
    { kind: 'paragraf', metin: 'Kışın en sık gözden kaçan risklerden biri park edilmiş arabalar. Motor ısı ürettiği ve dışarıdaki kediler sürekli sıcak bir yer aradığı için kediler tekerlek boşluklarına ya da motor bölmesine girebiliyor. Araç sahibi farkında olmadan arabayı çalıştırıp yola çıktığında kedi yaralanabiliyor.' },
    { kind: 'paragraf', metin: 'Cornell\'in önerisi, arabayı çalıştırmadan önce tekerlek boşluklarına bakmak ve kornaya basmak ya da kaputa vurmak; böylece motor bölmesine sığınmış bir kedi oradan çıkma fırsatı buluyor. International Cat Care de kaputa hafifçe vurmayı ve lastiklerin arasına bakmayı öneriyor.' },
    { kind: 'paragraf', metin: 'Aynı içgüdü evde de geçerli. Cornell\'den Collins, kedilerin sıcağa çekildiğini hatırlatarak çamaşır kurutma makinesinin kapağının kapalı tutulmasını öneriyor. ASPCA ise soğuk havada hayvanların arabada yalnız bırakılmamasını istiyor: araba soğuğu içinde tutan bir buzdolabı gibi davranabiliyor.' },

    { kind: 'baslik', metin: 'Antifriz ve yol tuzu' },
    { kind: 'paragraf', metin: 'Kış hazırlığında arabalara konan antifriz kediler için ciddi bir tehlike. Cornell\'e göre antifriz yutulduğunda kediler için son derece zehirli ve tadı kedilerin hoşuna gidiyor. Bu yüzden antifrizin iyi kapatılmış hâlde, kedilerin ulaşamayacağı bir yerde saklanması, dökülen ya da sızan antifrizin hemen temizlenmesi gerekiyor. ASPCA ayrıca etilen glikol yerine propilen glikol içeren ürünlerin tercih edilmesini öneriyor.' },
    { kind: 'paragraf', metin: 'International Cat Care, kedilerin bahçedeki havuz ve su birikintilerinden de su içtiğini hatırlatıyor; bu sulara kimyasal katılması, antifrizde olduğu gibi zararlı hatta ölümcül olabiliyor. Yol tuzu ve buz çözücüler de bir risk: kedi patisini yalarken bunları yutabiliyor. Tuzlanmış yol ve kaldırımlarda dolaşan bir kedinin patilerinin nemli bir bezle silinmesi ve düzenli olarak kontrol edilmesi öneriliyor.' },
    { kind: 'uyari', metin: 'Kedinin antifriz ya da başka bir kimyasal yuttuğundan şüpheleniliyorsa beklemeden veteriner hekime başvurmak gerekiyor. Evde kendi başına bir şey verilmemeli; ne yapılacağına hekim karar verir. Evdeki diğer zehirli maddeler için [[kedilere-zararli-yiyecekler|kedilere zararlı yiyecekler]] ve [[kediler-icin-zehirli-bitkiler|kediler için zehirli bitkiler]] yazılarına bakılabilir.' },

    { kind: 'baslik', metin: 'Evin içinde kış: soba, yatak ve kuru hava' },
    { kind: 'paragraf', metin: 'Sıcağı seven kediler kışın radyatöre, şömineye ve sobaya yöneliyor. International Cat Care, açık şömine, odun sobası ve elektrikli ısıtıcılarda yanık riskine karşı kedinin korunmasını öneriyor; radyatörün üzerine battaniye örtmek ise kediye güvenli bir sıcak nokta sağlayabiliyor.' },
    { kind: 'paragraf', metin: 'ASPCA, kedinin uyuyacağı yerin sıcak, yerden yüksek ve cereyandan uzak olmasını, içinde sıcak bir battaniye ya da yastık bulunan bir yatağın bunun için uygun olduğunu belirtiyor. Kuruluş, kışın kuru havanın deride kuruma ve kaşıntıya yol açabileceğini, evin nemli tutulmasının ve dışarıdan gelen hayvanın hemen kurulanmasının bu konuda yardımcı olduğunu ekliyor. Kışın tüy durumundaki değişiklikler için [[kedi-tuy-dokumu|kedi tüy dökümü]] yazısına bakılabilir.' },
  ],
  sss: [
    { soru: 'Kediler kışın üşür mü?', cevap: 'Evet, kediler üşür. Düşük sıcaklık, rüzgâr, kar ve buz özellikle dışarıda zaman geçiren kedileri hipotermi ve donma yaralanmalarına açık hâle getirir. Cornell Üniversitesi\'nin kedi sağlığı merkezi bunun en iyi önleminin kediyi kışın içeride tutmak olduğunu söylüyor.' },
    { soru: 'Hangi kediler soğuğa daha dayanıksızdır?', cevap: 'Çok genç, yaşlı ve kısa tüylü kediler en savunmasız gruptur. Yeni doğan yavrular ilk iki haftada hipotermi açısından yüksek risk taşır. Hasta, kilo kaybetmiş ya da eklem sorunu olan kediler de kışın ek özen ister.' },
    { soru: 'Sokak kedisi için kış barınağına ne konulmalı?', cevap: 'Altlık olarak saman iyi bir seçenektir; gazete, kumaş ve kuru ot önerilmez. Barınağın mümkünse yerden yükseltilmesi, rüzgâr ve yağıştan koruması gerekir. Yanında mama ve donmaması için kalın plastik bir kapta su bulunması önerilir.' },
    { soru: 'Kediye kışın daha fazla mama verilmeli mi?', cevap: 'Dışarıda vakit geçiren kediler için çoğu zaman evet, çünkü ısınmak için daha fazla kalori yakarlar. Evden çıkmayan kediler ise kışın daha az hareket edip kilo alabilir. Bu yüzden kilonun izlenmesi ve miktar için veteriner hekime danışılması önerilir.' },
    { soru: 'Kediler neden arabanın motoruna girer?', cevap: 'Çünkü motor ısı üretir ve kediler kışın sıcak yer arar. Tekerlek boşluklarına ya da motor bölmesine giren kedi, araba çalıştırıldığında yaralanabilir. Çalıştırmadan önce kaputa vurmak, kornaya basmak ve tekerlek aralarına bakmak önerilir.' },
    { soru: 'Antifriz kediler için neden tehlikelidir?', cevap: 'Antifriz yutulduğunda kediler için son derece zehirlidir ve tadı kedilerin hoşuna gider. Kapalı ve ulaşılamaz yerde saklanması, sızıntıların hemen temizlenmesi gerekir. Yutma şüphesinde vakit kaybetmeden veteriner hekime başvurmak gerekir.' },
    { soru: 'Kedi sobanın ya da radyatörün dibinde yatıyorsa sorun olur mu?', cevap: 'Kedilerin sıcak noktaları araması doğaldır, ama açık şömine, soba ve elektrikli ısıtıcılar yanık riski taşır. International Cat Care kedinin bunlardan korunmasını, radyatör üzerine battaniye örtülerek güvenli bir sıcak alan sağlanmasını öneriyor.' },
  ],
  kontrolListesi: [
    'Cereyansız sıcak bir yatak var mı?',
    'Dışarıdaki barınak yerden yüksek mi?',
    'Su kabının donması izleniyor mu?',
    'Çalıştırmadan kaputa vuruluyor mu?',
    'Antifriz ulaşılamaz yerde mi?',
    'Soba ve ısıtıcının önü korunuyor mu?',
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Cold Weather Tips For Cats',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/cat-health-news/cold-weather-tips-cats',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine',
      baslik: 'Keeping your furry friends safe during winter weather',
      yil: 2021,
      adres: 'https://vet.cornell.edu/news/20210129/keeping-your-furry-friends-safe-during-winter-weather',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Hazardous weather and your cat',
      adres: 'https://icatcare.org/articles/hazardous-weather-and-your-cat',
    },
    {
      kurum: 'ASPCA (American Society for the Prevention of Cruelty to Animals)',
      baslik: 'Cold Weather Safety Tips',
      adres: 'https://www.aspca.org/pet-care/general-pet-care/cold-weather-safety-tips',
    },
    {
      kurum: 'Oradell Animal Hospital; Maine Veterinary Referral Center',
      yazarlar: 'Brodeur A, Wright A, Cortes Y',
      baslik: 'Hypothermia and targeted temperature management in cats and dogs',
      dergi: 'Journal of Veterinary Emergency and Critical Care',
      yil: 2017,
      kunye: '27(2):151-163',
      doi: '10.1111/vec.12572',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/28122159/',
    },
    {
      kurum: 'Università degli Studi di Milano, Department of Health, Animal Science and Food Safety',
      yazarlar: 'Rossi L, Lumbreras AEV, Vagni S, Dell\'Anno M, Bontempo V',
      baslik: 'Nutritional and Functional Properties of Colostrum in Puppies and Kittens',
      dergi: 'Animals (Basel)',
      yil: 2021,
      kunye: '11(11):3260',
      doi: '10.3390/ani11113260',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34827992/',
    },
  ],
};
