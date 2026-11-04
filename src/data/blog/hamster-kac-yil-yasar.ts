import type { BlogYazi } from './types';

export const hamsterKacYilYasar: BlogYazi = {
  slug: 'hamster-kac-yil-yasar',
  baslik: 'Hamster Kaç Yıl Yaşar? Türlere Göre Ömür',
  ozet: 'Evcil hamsterler çoğunlukla 18 ay ile 3 yıl arasında yaşıyor. Tür, cinsiyet ve veteriner kayıtlarındaki gerçek ölüm yaşı verileri bu yazıda.',
  kapakAlt:
    'Ahşap tünelin önünde yem yiyen hamster',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-09',
  bloklar: [
    { kind: 'paragraf', metin: '**Evcil hamsterlerin çoğu 18 ay ile 3 yıl arasında yaşar.** Merck Veterinary Manual, pet hamsterlerin genellikle bu aralıkta yaşadığını belirtiyor. Aralık türe göre değişiyor: Rus cüce hamsterde 18 ile 24 ay, Roborovski hamsterde 36 ile 48 ay veriliyor. İngiltere\'de veteriner hekime getirilen 16.605 hamsterin kayıtlarında ölüm yaşının ortancası 1,75 yıl çıktı.' },
    { kind: 'paragraf', metin: 'Aşağıda türlere göre ömür aralıklarını, gerçek klinik kayıtların ve bir laboratuvar kolonisinin ne gösterdiğini, genç yaşta ölümlerin neden önemli olduğunu ve bakım koşullarının ömürle ilişkisini anlatıyoruz. Yazı genel bilgi içindir; hamsterin sağlığıyla ilgili her kaygıda karar veteriner hekime aittir.' },

    { kind: 'baslik', metin: 'Türe göre hamster ömrü' },
    { kind: 'tablo', basliklar: ['Tür', 'Ömür (Merck Veterinary Manual)'], satirlar: [
      ['Suriye (altın) hamsteri', '18 ile 36 ay'],
      ['Çin hamsteri', '24 ile 36 ay'],
      ['Rus cüce hamsteri', '18 ile 24 ay'],
      ['Roborovski hamsteri', '36 ile 48 ay'],
    ]},
    { kind: 'paragraf', metin: 'Aynı kaynağın uzmanlara yönelik sayfası Suriye hamsterinin ömrünü 2 ile 3 yıl olarak veriyor. Yani tek bir kaynak içinde bile küçük farklar var. Bu yüzden hamster ömrü için tek bir sayı yerine bir aralıktan söz etmek daha doğrudur. Merck, Suriye dışındaki pet hamsterlerin çoğunun çok daha küçük olduğunu ve cüce hamster diye anıldığını yazıyor.' },

    { kind: 'baslik', metin: 'Veteriner kayıtları ne gösteriyor?' },
    { kind: 'paragraf', metin: 'Royal Veterinary College\'dan O\'Neill ve ekibi, 2016 yılında İngiltere\'deki klinik kayıtlardan 16.605 hamsteri inceledi. Hayvanların %73,45\'i Suriye (altın) hamsteriydi. Ölüm yaşı bilinen hayvanlarda ortanca değer 1,75 yıl, aralık ise 0,01 ile 3,65 yıl arasındaydı. Çeyreklerarası aralık 0,83 ile 2,20 yıl olarak bildirildi; yani hayvanların yarısı bu iki yaş arasında öldü.' },
    { kind: 'tablo', basliklar: ['Grup', 'Ortanca ölüm yaşı'], satirlar: [
      ['Tüm hamsterler', '1,75 yıl'],
      ['Suriye (altın) hamsteri', '1,76 yıl'],
      ['Suriye dışı türler', '1,68 yıl'],
      ['Erkekler', '2,00 yıl'],
      ['Dişiler', '1,67 yıl'],
    ]},
    { kind: 'paragraf', metin: 'Çalışmada Suriye hamsteri ile diğer türler arasında ortanca ölüm yaşı bakımından fark bulunmadı. Erkeklerin ortanca ölüm yaşı ise dişilerden yüksekti. Yazarlar bunun laboratuvarda önceden bildirilen, erkeklerin dişilerden uzun yaşadığı bulguyla uyumlu olduğunu belirtiyor.' },
    { kind: 'paragraf', metin: 'Bu sayıları yorumlarken bir noktayı akılda tutmak gerekiyor. Ölüm mekanizması bilinen vakaların %84,29\'unda ölüm ötanaziyle gerçekleşti. Yani 1,75 yıl, hamsterin kendiliğinden yaşayabileceği süreyi değil, veteriner hekime getirilen bir hayvanın hayatının sona erdiği yaşı gösteriyor. Veri yalnızca İngiltere\'de veteriner bakımına gelen hayvanlara dayanıyor.' },

    { kind: 'baslik', metin: 'Laboratuvar kolonisinde ömür' },
    { kind: 'paragraf', metin: 'Johns Hopkins Üniversitesi\'nde dokuz yıl boyunca sürdürülen bir Suriye hamsteri kolonisinde, doğal yolla ölen 150 erkek hamsterin ortanca yaşam süresi 19,5 ay bulundu. En uzun yaşam süresi 36 ay, en kısa ise 6 aydı. Bu çalışma yalnızca erkek ve tek bir soy üzerinde yapıldığı için her evcil hamstere doğrudan uygulanamaz, ama Merck\'in verdiği 18 ile 36 ay aralığıyla örtüşüyor.' },
    { kind: 'yanilgi', baslik: '"Hamster zaten bir yıl yaşar"', metin: 'Yaygın inanış hamsterin yalnızca bir yıl yaşadığı yönünde, ama kaynaklar daha uzun bir süre gösteriyor. Merck 18 ay ile 3 yıl diyor, İngiltere kayıtlarında ortanca ölüm yaşı 1,75 yıl. Bununla birlikte kayıtlarda 0,01 yıl gibi çok erken ölümler de var; bu yüzden ömür bir söz değil, bir aralıktır. Laboratuvarda bazı cüce türler için 0,75 ile 1,25 yıl gibi daha kısa ömürler bildirilmiş.' },

    { kind: 'baslik', metin: 'Genç yaşta ölümlerin başlıca nedenleri' },
    { kind: 'paragraf', metin: 'İngiltere kayıtlarında ölüm nedeni kaydedilen hayvanlar arasında en sık nedenler sırasıyla şunlardı: "wet tail" denen ishal tablosu (%7,88), karında kitle (%6,40), neoplazi (%5,38) ve nefes darlığı (%3,99). Wet tail nedeniyle ölen hayvanların ortanca yaşı 0,34 yıldı; yani sık görülen ölüm nedenleri arasında ortanca yaşı en düşük olan bu tablo.' },
    { kind: 'paragraf', metin: 'Merck, wet tail\'in Suriye hamsterlerinde her yaşta görülebilen bir ishal tablosu olduğunu ve genç hayvanlarda sık kullanıldığını yazıyor. Bu tabloyu ya da başka bir sağlık sorununu evde değerlendirmeye çalışmak yerine hamsterin hemen bir veteriner hekime gösterilmesi gerekiyor.' },
    { kind: 'uyari', metin: 'Hamsterde ishal, durgunluk ya da nefes güçlüğü görüldüğünde vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde ilaç ya da besin vererek beklemek önerilmez.' },

    { kind: 'baslik', metin: 'Bakım koşulları ve ömür' },
    { kind: 'paragraf', metin: 'Kaynaklar bakımın ömrü kaç ay uzattığını sayıyla vermiyor. Yine de Merck Veterinary Manual, hamsterin refahı için şu uygulamaları öneriyor:' },
    { kind: 'liste', maddeler: [
      'Suriye hamsterleri için kazmaya uygun, en az 40 ile 80 cm derinlikte altlık',
      'Hamsterlere özel üretilmiş, dengeli pelet yem; tohum karışımlarından kaçınılması, çünkü hamster tohumları seçip peleti bırakıyor',
      'Pelet yemin kafesin tabanına konması, çünkü geniş burunları yem haznesinden yemelerini çoğu zaman engelliyor',
      'Cam su tüpü yerine tabana yakın paslanmaz çelik emzik, çünkü hamster camı kemirip kırabiliyor',
    ]},
    { kind: 'paragraf', metin: 'Birlikte barındırma konusunda da dikkat gerekiyor. Merck, erkek ve dişi hamsterlerin kendi türdeşlerine karşı saldırgan olabildiğini, grup halinde barındırılacaksa hayvanların küçük yaştan itibaren birlikte tutulması gerektiğini belirtiyor. İngiltere kayıtlarında diğer hamsterlerin ısırığı, en sık görülen sorunlar arasında üçüncü sıradaydı (%5,88).' },
    { kind: 'paragraf', metin: 'Soğuk da önemli. Merck, hamsterlerin 5 °C\'nin altındaki sıcaklıklarda sıklıkla kış uykusuna yattığını yazıyor. Hareketsiz bir hamsterin uykuda mı yoksa hasta mı olduğuna kendiniz karar vermek yerine veteriner hekime danışmak daha güvenlidir.' },

    { kind: 'baslik', metin: 'Yaşlanan hamsterde neye dikkat edilir?' },
    { kind: 'paragraf', metin: 'Merck\'e göre hasta hamsterler çoğu zaman diğerlerinden uzaklaşır; kilo kaybı, kamburlaşma, halsizlik, tüylerde kabalaşma, nefes güçlüğü ve merak davranışında azalma görülebiliyor. İdrar ve dışkının renginde, kıvamında, kokusunda ya da miktarında değişiklik de erken uyarı işareti sayılıyor. Bunlardan biri fark edildiğinde hamsteri veteriner hekime göstermek gerekiyor.' },
    { kind: 'paragraf', metin: 'İngiltere çalışmasının yazarları, kedi ve köpeklerde olduğu gibi egzotik evcil hayvanlarda da düzenli yaşlılık muayenelerinin, sahiplere yaşa bağlı değişiklikleri anlatmak için değerli bir fırsat olabileceğini belirtiyor. Yazarlar dişiler daha kısa yaşıyorsa yaşa bağlı bakım değişikliklerinin onlarda daha erken gerekebileceğini de ekliyor.' },
    { kind: 'paragraf', metin: 'Hamsterin ömrünü kedi ve köpeklerle karşılaştırmak isterseniz [[kediler-kac-yil-yasar|kediler kaç yıl yaşar]] ve [[kopekler-kac-yil-yasar|köpekler kaç yıl yaşar]] yazılarına bakabilirsiniz. Bir evcil hayvanı kaybettikten sonra neler yapılabileceği için [[evcil-hayvan-olunce|evcil hayvan öldüğünde ne yapılır]] yazısı yol gösterebilir.' },
  ],
  kontrolListesi: [
    'Altlık yeterince derin mi?',
    'Yem hamsterlere özel pelet mi?',
    'Su tüpü paslanmaz çelik mi?',
    'Hamster tek başına mı barınıyor?',
    'İshal veya kilo kaybı var mı?',
    'Hamster bakan veteriner hekim var mı?',
  ],
  sss: [
    { soru: 'Hamster kaç yıl yaşar?', cevap: 'Evcil hamsterler genellikle 18 ay ile 3 yıl arasında yaşar. Merck Veterinary Manual bu aralığı veriyor. İngiltere\'de veteriner bakımındaki hamsterlerde ortanca ölüm yaşı 1,75 yıl bulundu. Tür ve bireye göre ömür değişebiliyor.' },
    { soru: 'Suriye (altın) hamsteri kaç yıl yaşar?', cevap: 'Suriye hamsteri için Merck 18 ile 36 ay aralığını veriyor; uzmanlara yönelik sayfası ise 2 ile 3 yıl diyor. İngiltere kayıtlarında Suriye hamsterlerinin ortanca ölüm yaşı 1,76 yıldı. Yani çoğu hayvan iki yıl civarında ya da biraz öncesinde ölüyor.' },
    { soru: 'Cüce hamsterler kaç yıl yaşar?', cevap: 'Cüce türlerin ömrü türe göre değişiyor. Merck Rus cüce hamsteri için 18 ile 24 ay, Roborovski için 36 ile 48 ay, Çin hamsteri için 24 ile 36 ay veriyor. İngiltere kayıtlarında Suriye dışı türlerin ortanca ölüm yaşı 1,68 yıldı.' },
    { soru: 'Erkek mi dişi mi daha uzun yaşar?', cevap: 'Veteriner kayıtlarında erkekler daha uzun yaşadı. İngiltere çalışmasında erkeklerin ortanca ölüm yaşı 2,00 yıl, dişilerinki 1,67 yıl bulundu. Yazarlar bunun laboratuvarda önceden bildirilen bulguyla uyumlu olduğunu belirtiyor.' },
    { soru: 'Hamsterler en çok hangi nedenle ölür?', cevap: 'İngiltere kayıtlarında ölüm nedeni kaydedilen hamsterlerde en sık neden wet tail denen ishal tablosuydu (%7,88). Onu karında kitle (%6,40), neoplazi (%5,38) ve nefes darlığı (%3,99) izledi. Hamsterde ishal ya da durgunluk görüldüğünde vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Hamster kış uykusuna yatar mı?', cevap: 'Evet, soğukta yatabilir. Merck, hamsterlerin 5 °C\'nin altındaki sıcaklıklarda sıklıkla kış uykusuna yattığını yazıyor. Hareketsiz bir hamsterin uyuyor mu yoksa hasta mı olduğuna kendiniz karar vermek yerine veteriner hekime danışmanız önerilir.' },
    { soru: 'Hamster ne zaman veterinere götürülmeli?', cevap: 'Kilo kaybı, kamburlaşma, halsizlik, tüylerde kabalaşma, nefes güçlüğü ya da idrar ve dışkıda değişiklik görüldüğünde gidilmesi gerekiyor. Merck bu işaretleri hasta hamsterde sık görülen bulgular arasında sayıyor. Karar vermek için evde beklemek yerine veteriner hekime başvurulması önerilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Description and Physical Characteristics of Hamsters',
      yil: 2026,
      adres: 'https://www.merckvetmanual.com/all-other-pets/hamsters/description-and-physical-characteristics-of-hamsters',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Hamsters',
      yil: 2026,
      adres: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/rodents/hamsters',
    },
    {
      kurum: 'Royal Veterinary College',
      baslik: 'Demography, disorders and mortality of pet hamsters under primary veterinary care in the United Kingdom in 2016',
      yazarlar: 'O\'Neill DG, Kim K, Brodbelt DC, Church DB, Pegram C, Baldrey V',
      dergi: 'Journal of Small Animal Practice',
      yil: 2022,
      kunye: '63(10):747-755',
      doi: '10.1111/jsap.13527',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/35732354/',
    },
    {
      kurum: 'Johns Hopkins University, School of Hygiene and Public Health',
      baslik: 'Longevity and age-related pathology of LVG outbred golden Syrian hamsters (Mesocricetus auratus)',
      yazarlar: 'Deamond SF, Portnoy LG, Strandberg JD, Bruce SA',
      dergi: 'Experimental Gerontology',
      yil: 1990,
      kunye: '25(5):433-446',
      doi: '10.1016/0531-5565(90)90032-w',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/2257890/',
    },
  ],
};
