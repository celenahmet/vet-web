import type { BlogYazi } from './types';

export const kopekTirnagiNasilKesilir: BlogYazi = {
  slug: 'kopek-tirnagi-nasil-kesilir',
  baslik: 'Köpek Tırnağı Nasıl Kesilir?',
  ozet: 'Köpek tırnağı yere değmeye ya da yerde tıkırdamaya başlayınca kesilir. Damarlı kısma değmeden kesimin adımlarını kaynaklarıyla anlattık.',
  kapakAlt:
    'Köpeğin patisindeki tırnağı makasla kesen eller',
  kategori: 'Köpek',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpek tırnağı, köpek tırnak makasıyla yalnızca ucundan küçük parçalar halinde ve tırnağın içindeki damarlı kısma (İngilizcede "quick") değmeden kesilir; kesim zamanı ise tırnaklar yürürken yere değmeye başladığında ya da zeminde tıkırdadığında gelir.** Damarlı kısmı kesmek köpeğin canını yakar ve kanamaya yol açar. Bu yüzden ilk kesimi bir veteriner hekimden ya da veteriner teknikerinden görerek öğrenmek, Washington Eyalet Üniversitesi Veteriner Hastanesi tarafından öneriliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kesim zamanını, tırnağın yapısını, makas çeşitlerini, adım adım kesimi, siyah tırnak ve ayak bileği tırnağındaki ayrıntıları, köpeği kesime alıştırma yöntemini ve uzun tırnağın yürüyüşü bozup bozmadığına dair yeni bir çalışmayı özetliyoruz.' },

    { kind: 'baslik', metin: 'Köpeğin tırnağı ne zaman kesilir?' },
    { kind: 'paragraf', metin: 'ASPCA pratik bir ölçü veriyor: köpeğin tırnakları yürürken yere neredeyse değiyorsa kesim zamanı gelmiştir. Tırnaklar zeminde tıkırdıyorsa ya da halıya, parkeye takılıyorsa da kesim gerekiyor. Merck Veterinary Manual ise köpeklerin oyun sırasında kendilerini yaralamaması için tırnaklarının kesilmesi gerektiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Sıklık köpeğin yaşam biçimine göre değişiyor. ASPCA, rahat bir yaşam süren köpeklerde bunun haftalık kesim anlamına gelebileceğini, kaba kentsel kaldırımlarda yürüyen köpeklerin ise kesimler arasında daha uzun süre bekleyebileceğini söylüyor. Yani herkese uyan tek bir takvim yok; tırnaklara bakıp karar vermek gerekiyor. Günlük yürüyüş düzeni için [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazısına da göz atabilirsiniz.' },

    { kind: 'baslik', metin: 'Tırnağın yapısı: damarlı kısım neden önemli?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, köpek tırnağının insan tırnağıyla aynı yapıda ama çok daha kalın olduğunu anlatıyor. Tırnağın içindeki damarlı kısım, yanlışlıkla kesildiğinde kanıyor ve köpeğe acı veriyor. Washington Eyalet Üniversitesi, bu bölgeyi besleyen damar ve sinirlerin açık renkli tırnaklarda daha kolay görüldüğünü belirtiyor.' },
    { kind: 'tablo', basliklar: ['Tırnak rengi', 'Damarlı kısım', 'Kesimde dikkat'], satirlar: [
      ['Açık renkli', 'Dışarıdan daha kolay görülür', 'Görülen sınırın ötesine geçilmez'],
      ['Koyu ya da siyah', 'Dışarıdan zor görülür', 'Çok sayıda küçük kesim yapılır'],
    ]},

    { kind: 'baslik', metin: 'Hangi tırnak makası kullanılır?' },
    { kind: 'paragraf', metin: 'ASPCA iki temel makas türü sayıyor: makas tipi ve giyotin tipi. Kurum ikisinin de eşit derecede iyi çalıştığını, elinize hangisi daha rahat geliyorsa onu seçmenizi söylüyor. Washington Eyalet Üniversitesi ise köpeklerde giyotin tipinin kullanımının en kolay olduğunu, makas tipinin çoğunlukla ayak bileği tırnağında kullanıldığını belirtiyor. Kaynaklar burada tam örtüşmüyor; sizin için hangisinin uygun olduğunu kliniğe ilk gittiğinizde sormak yeterli.' },
    { kind: 'paragraf', metin: 'Köpek her iki makası da kabul etmiyorsa ASPCA alternatif olarak tırnak eğesi niteliğindeki elektrikli taşlama aletini anıyor. Bu alet iyi bir kontrol sağlıyor ama makastan uzun sürüyor; ses ve titreşim bazı köpeklere ve sahiplerine rahatsız edici geliyor.' },

    { kind: 'baslik', metin: 'Adım adım köpek tırnağı kesimi' },
    { kind: 'paragraf', metin: 'ASPCA ve Washington Eyalet Üniversitesi\'nin tarifleri bir araya getirildiğinde kesim şu sırayla ilerliyor:' },
    { kind: 'liste', maddeler: [
      '**Hazırlık:** köpeği önce hareketli bir yürüyüşle yormak ASPCA tarafından öneriliyor. Ortamın iyi aydınlatılmış olması gerekiyor.',
      '**Patiyi incelemek:** her patinin parmakları açılıp kir ve çöp olup olmadığına bakılır.',
      '**Parmağı tutmak:** parmak sıkı ama nazik biçimde tutulur.',
      '**Tırnağı makasa yerleştirmek:** tırnağın yalnızca çok küçük bir ucu makasın ağzına sokulur; kesen bıçağın size yakın tarafta olması gerekiyor.',
      '**Küçük kesimler yapmak:** ASPCA, her seferinde az miktarda tırnak kesilmesini ve kesit yüzeyinde tırnak renginde bir halka belirdiğinde durulmasını söylüyor.',
      '**Durmak:** Washington Eyalet Üniversitesi, kesit yüzeyinde gri ya da pembe bir oval görüldüğünde durulmasını, devam etmenin damarlı kısmı keseceğini belirtiyor.',
      '**Kenarları düzeltmek:** kesimden sonra pürüzlü kenarlar tırnak eğesiyle yumuşatılabilir.',
    ]},
    { kind: 'paragraf', metin: 'Kesim açısı konusunda iki kaynak farklı tarif ediyor. ASPCA tırnağı üstten alta doğru, hafif bir açıyla kesmeyi ve tırnağın doğal kıvrımını korumak için künt kesmemeyi söylüyor. Washington Eyalet Üniversitesi ise tırnağın alttan 45 derecelik bir açıyla kesilmesini tarif ediyor. Bu nedenle ilk denemeyi hekimin elinden görmek en güvenli yol.' },
    { kind: 'uyari', metin: 'Damarlı kısma değerse köpek acı sesi çıkarabilir ve kıpırdayabilir. ASPCA bu durumda kesimi bitirmeyi öneriyor. Kanama birkaç dakikadan uzun sürerse veteriner hekime haber vermek gerekiyor; hekim köpeği pıhtılaşma bozukluğu açısından kontrol edebilir.' },

    { kind: 'baslik', metin: 'Siyah tırnaklar ve ayak bileği tırnağı' },
    { kind: 'paragraf', metin: 'Koyu renkli tırnaklarda damarlı kısım görünmediği için ASPCA fazladan dikkatli olunmasını söylüyor. Washington Eyalet Üniversitesi bu tırnakları birkaç küçük kesimle almayı ve damarlı kısmın 2 milimetre yakınına gitmemeyi öneriyor. Washington Eyalet Üniversitesi, tırnak fazla kısa kesilirse kanayacağı için kanama durdurucu tozun elde bulundurulmasını öneriyor; kanama birkaç dakikadan uzun sürerse veteriner hekime başvurmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Bazı köpeklerde ayağın arka-iç tarafında, yerden biraz yukarıda fazladan bir parmak bulunur; buna ayak bileği tırnağı (dewclaw) deniyor. Merck Veterinary Manual bu parmağın bir işlevi olmadığını ama tırnağının diğerleri gibi kesilmesi gerektiğini belirtiyor. Washington Eyalet Üniversitesi ise bu tırnağın zemine değmediği için yürürken aşınmadığını, bu yüzden düzenli kesilmesi gerektiğini, kesilmezse tırnağın parmak yastığına gömülerek ağrı yapabildiğini söylüyor.' },

    { kind: 'baslik', metin: 'Köpeği tırnak kesimine alıştırmak' },
    { kind: 'paragraf', metin: 'Her köpek tırnak kesimini sevmiyor. Washington Eyalet Üniversitesi, kesime yavru yaşta başlamanın köpeğin süreci kabullenmesini kolaylaştırdığını söylüyor. ASPCA ise ayaklara dokunulmasına küçükken alıştırmayı öneriyor: bacak yukarıdan aşağıya okşanır, her parmağa nazikçe bastırılır ve bol övgü ile ödül verilir. Kurum, günlük ayak masajıyla bir iki hafta içinde köpeğin kesime daha rahat yaklaşacağını belirtiyor. Yavru köpeğin ilk aylardaki bakımı için [[yavru-kopek-veterinere-ne-zaman-goturulmeli|yavru köpek veteriner rehberi]] da işe yarar.' },
    { kind: 'paragraf', metin: 'Köpekte korku belirtileri de izlenmeli. ASPCA şu işaretleri sayıyor: soluma, salya akıtma, titreme, inleme, donakalma, büzüşme, kuyruğu kıstırma, hırlama ve diş gösterme. Kurum bu durumda köpeği zorlamamayı, işi veteriner hekimin ya da profesyonel bir bakım uzmanının yapıp yapamayacağına bakmayı, olmazsa davranış uzmanından destek almayı öneriyor.' },
    { kind: 'paragraf', metin: 'Bu sadece ev içi bir mesele değil. 2026\'da Vet Sci dergisinde yayımlanan, Avustralya\'daki 242 veteriner ekibi üyesiyle (hemşire, teknisyen ve diğer personel) yapılan ankette katılımcıların yüzde 72,4\'ü köpeklerde tırnak kesimi sırasında sık görülen korku, kaygı ve stres bildirdi; yüzde 79,8\'i de tırnak keserken yaralandığını söyledi. Nazik tutuş ve karşı koşullandırma gibi ilaçsız yöntemlerin de stresi azalttığı bildirildi.' },

    { kind: 'baslik', metin: 'Uzun tırnak yürüyüşü bozar mı?' },
    { kind: 'yanilgi', baslik: '"Uzun tırnak köpeğin yürüyüşünü bozar"', metin: 'Bu yaygın varsayımı sınayan ilk çalışmaya göre sağlıklı köpeklerde tırnak kesiminden önce ve sonra adım uzunluğu gibi yürüyüş ölçütlerinde anlamlı bir fark bulunmadı. Yani uzun tırnak yürüyüşün nedeni değil, sonucu olabilir. Bu, tırnağın uzun bırakılabileceği anlamına gelmiyor.' },
    { kind: 'paragraf', metin: '2026\'da Frontiers in Veterinary Science dergisinde yayımlanan çalışmada Häusler ve Söhnel, basınç algılayan koşu bandıyla küçük bir grup sağlıklı köpeği tırnak kesiminden önce ve sonra ölçtü. Yürüyüş ölçütlerinde fark çıkmadı; yalnızca ön patinin boyu kesimden önce 2 mm daha uzundu. Yazarlar uzun tırnağın bazen bozuk ya da verimsiz yürüyüşte tırnağın doğal aşınmasının azalmasının bir sonucu olabileceğini, yani odağın tırnak uzunluğundan altta yatan biyomekanik sorunlara kayması gerektiğini yazıyor. Köpeğin topallaması ya da yürüyüşü değişmişse sebebi tırnakta aramak yerine veteriner hekime göstermek gerekiyor.' },

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime başvurulmalı?' },
    { kind: 'paragraf', metin: 'Kanama birkaç dakikadan uzun sürüyorsa, tırnak parmak yastığına gömülmüşse, köpek kesimden korkup saldırganlaşıyorsa ya da yürüyüşünde değişiklik fark ettiyseniz veteriner hekime başvurmak gerekiyor. Tırnak bakımını [[kedi-kopek-check-up-ne-zaman|düzenli check-up]] ziyaretlerinde hekime göstermek de iyi bir alışkanlık. Kedi sahipleri için [[kedi-tirnagi-nasil-kesilir|kedi tırnağı nasıl kesilir]] yazısı da var.' },
  ],
  sss: [
    { soru: 'Köpek tırnağı ne sıklıkla kesilir?', cevap: 'Köpeğin yaşam biçimine göre değişiyor. ASPCA, tırnaklar yürürken yere değmeye başladığında ya da zeminde tıkırdadığında kesim zamanı geldiğini söylüyor. Rahat yaşayan köpeklerde bu haftalık olabilir, kaba kaldırımlarda yürüyen köpeklerde kesimler arası daha uzun geçebilir.' },
    { soru: 'Köpek tırnağının neresi kesilir?', cevap: 'Yalnızca tırnağın ucu kesilir. İçindeki damarlı kısma değmemek gerekiyor, çünkü kesildiğinde köpeğe acı verir ve kanar. Washington Eyalet Üniversitesi koyu tırnaklarda bu bölgenin 2 milimetre yakınına gitmemeyi ve kesit yüzeyinde gri ya da pembe bir oval görünce durmayı öneriyor.' },
    { soru: 'Köpeğin siyah tırnağı nasıl kesilir?', cevap: 'Siyah tırnaklarda damarlı kısım dışarıdan görülmediği için daha dikkatli olunmalıdır. Washington Eyalet Üniversitesi birkaç küçük kesim yapmayı ve damarlı kısma 2 milimetreden fazla yaklaşmamayı öneriyor. Emin olamıyorsanız ilk kesimi veteriner hekim ya da teknikeri gösterebilir.' },
    { soru: 'Köpek tırnağı insan tırnak makasıyla kesilir mi?', cevap: 'Kaynaklar köpek tırnak makasını tarif ediyor. ASPCA makas tipi ve giyotin tipi olmak üzere iki köpek tırnak makası türünden söz ediyor; Washington Eyalet Üniversitesi giyotin tipinin köpeklerde kullanımının en kolay olduğunu belirtiyor. Hangisinin uygun olduğunu hekime sormak yeterli.' },
    { soru: 'Köpek tırnağı kesilirken kanarsa ne yapılır?', cevap: 'Damarlı kısma değerse tırnak kanar. ASPCA bu durumda kesimin bitirilmesini öneriyor. Kanama birkaç dakikadan uzun sürerse veteriner hekime haber vermek gerekiyor, çünkü hekim köpeği pıhtılaşma bozukluğu açısından değerlendirmek isteyebilir.' },
    { soru: 'Köpeğim tırnak kesimine izin vermiyorsa ne yapmalıyım?', cevap: 'Zorlamamak gerekiyor. ASPCA, korku belirtileri gösteren köpeği zorlamamayı ve işi veteriner hekimin ya da profesyonel bir bakım uzmanının yapıp yapamayacağına bakmayı öneriyor. Olmazsa davranış uzmanından destek alınabilir. Önceden patiye dokunma alıştırması yapmak da yardımcı oluyor.' },
    { soru: 'Ayak bileği tırnağı da kesilir mi?', cevap: 'Evet. Merck Veterinary Manual, ayak bileği tırnağının işlevi olmasa da diğer tırnaklar gibi kesilmesi gerektiğini belirtiyor. Washington Eyalet Üniversitesi bu tırnağın yere değmediği için aşınmadığını ve parmak yastığına gömülerek ağrı yapabildiğini söylüyor.' },
  ],
  kontrolListesi: [
    'Tırnaklar yerde tıkırdıyor mu?',
    'Köpek tırnak makası hazır mı?',
    'Ortam yeterince aydınlık mı?',
    'Köpek sakin ve rahat mı?',
    'Damarlı kısım görülebiliyor mu?',
    'Ödül mamaları hazır mı?',
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA',
      baslik: 'Dog Grooming Tips',
      adres: 'https://www.aspca.org/pet-care/dog-care/dog-grooming-tips',
    },
    {
      kurum: 'Washington State University College of Veterinary Medicine, Veterinary Teaching Hospital',
      baslik: 'How to clip a dog\'s nails',
      adres: 'https://hospital.vetmed.wsu.edu/2026/02/25/how-to-clip-a-dogs-nails/',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Description of Dogs',
      adres: 'https://www.merckvetmanual.com/dog-owners/introduction-to-dogs/description-of-dogs',
    },
    {
      kurum: 'Zentrum für Tierphysiotherapie, Stuttgart; Friedrich-Schiller-Universität Jena',
      yazarlar: 'Häusler K, Söhnel K',
      baslik: 'Trimming of nails in healthy dogs does not change gait parameters when comparing pre- and post-nail trim',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2026,
      kunye: '13:1728382',
      doi: '10.3389/fvets.2026.1728382',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41728131/',
    },
    {
      kurum: 'Sydney School of Veterinary Science, University of Sydney; Melbourne Polytechnic; The Calm Pet Vet',
      yazarlar: 'Chen A, Hall E, Bennington LN, McGowan C, Quain A',
      baslik: '"One of the Hardest Things I Have to Do in the Clinic": A Survey of Veterinary Team Members\' Knowledge, Attitudes, and Practices Regarding Nail Clipping',
      dergi: 'Veterinary Sciences',
      yil: 2026,
      kunye: '13(2):115',
      doi: '10.3390/vetsci13020115',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41745909/',
    },
  ],
};
