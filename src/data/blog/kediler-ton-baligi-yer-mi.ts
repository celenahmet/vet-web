import type { BlogYazi } from './types';

export const kedilerTonBaligiYerMi: BlogYazi = {
  slug: 'kediler-ton-baligi-yer-mi',
  baslik: 'Kediler Ton Balığı Yer mi?',
  ozet: 'Ton balığı kedinin düzenli yiyeceği olmamalı. Konserve ton balığının E vitamini eksikliği ve sinir sorunlarıyla ilişkisini kaynaklarıyla anlatıyoruz.',
  kapakAlt:
    'Elle uzatılan ton balığına uzanan kedi, yanında mama kabı',
  kategori: 'Beslenme',
  tarih: '2026-11-05',
  bloklar: [
    { kind: 'paragraf', metin: '**Ton balığı kedinin düzenli yiyeceği olmamalı:** büyük miktarda konserve ton balığı verilen kedilerde E vitamini eksikliği ve "sarı yağ hastalığı" adı verilen yağ dokusu iltihabı görülmüş, insanlar için hazırlanmış konserve balık ise bazı kedilerde ciddi sinir sistemi bozukluklarıyla ilişkilendirilmiş. Kedilerin balığı çok sevmesi, balığın onlar için dengeli bir yiyecek olduğu anlamına gelmiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda Merck Veterinary Manual, Cornell Üniversitesi Veteriner Fakültesi ve Lizbon Veteriner Fakültesi\'nden araştırmacıların yayınladığı bir çalışmaya dayanarak ton balığının neden sorun olabildiğini, çiğ balığın ayrı riskini, ödül miktarının sınırını ve hangi durumda veteriner hekime başvurulması gerektiğini anlatıyoruz. Bu yazı teşhis ya da tedavi bilgisi vermez; kedinizin sağlığıyla ilgili her soruda son söz veteriner hekimindir.' },

    { kind: 'baslik', metin: 'Ton balığı kedi için neden sorun olabiliyor?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'in küçük hayvan beslenmesi bölümü şunu belirtiyor: büyük miktarda konserve ton balığı verilen kedilerde doğal yoldan E vitamini eksikliği gelişmiş ve bu eksiklik pansteatit, yani sarı yağ hastalığı olarak ortaya çıkmış. Sorunun kaynağı ton balığının "zehirli" olması değil; tek tip ve aşırı miktarda beslenmenin kedinin ihtiyaç duyduğu dengeyi bozmasıdır.' },
    { kind: 'paragraf', metin: 'Cornell Feline Health Center ise ayrı bir uyarı yapıyor: insanlar için üretilmiş konserve balık ürünlerini yiyen bazı kediler ciddi olabilecek nörolojik bozukluklar geliştirmiş. Bu yüzden ton balığı konservesini kediye düzenli bir öğün hâline getirmek önerilmiyor. Hangi yiyeceklerin kedi için sorun yarattığını [[kedilere-zararli-yiyecekler|kedilere zararlı yiyecekler]] yazımızda ayrıca topladık.' },

    { kind: 'baslik', metin: 'Sarı yağ hastalığı nedir?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'e göre sarı yağ hastalığı, yağ dokusunun iltihaplandığı bir durumdur. Nedeni, besindeki doymamış yağ asitlerinin fazlalığı ile E vitamini ya da diğer antioksidanların eksikliğinin birleşmesi olarak düşünülüyor. Bilinen vakaların çoğunda beslenme tamamen ya da kısmen balık veya balık yan ürünlerinden oluşuyor. Etkilenen kediler genellikle genç ve çoğu zaman kilolu oluyor.' },
    { kind: 'paragraf', metin: 'Lizbon\'daki Veteriner Hekimliği Fakültesi\'nden Niza ve arkadaşları 2003\'te Journal of Feline Medicine and Surgery dergisinde bu tabloyu vaka kayıtlarıyla anlattı. Ağırlıklı olarak yağlı balıkla beslenen sekiz kedide iştahsızlık, durgunluk, hareket etmekte isteksizlik ve dokunulduğunda ağrılı deri altı yumrular görüldü; kan tahlillerinde de lökosit artışı ve kansızlık saptandı. Yağlı balık yiyen kedilerden biri dışında hepsi tıbbi tedavi ve beslenme düzeninin değiştirilmesiyle toparlandı.' },
    { kind: 'uyari', metin: 'Balık ağırlıklı beslenen bir kedide iştahsızlık, durgunluk, hareket etmek istememe ya da sırt ve karın bölgesine dokunulduğunda acı belirtisi görülüyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Bu belirtilerin nedenini evde değerlendirmek ya da besin takviyesiyle kendi başına müdahale etmek doğru değildir.' },

    { kind: 'baslik', metin: 'Çiğ balığın ayrı bir riski var' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, çiğ tatlı su balığında ve midyede tiaminaz adı verilen enzimlerin bulunduğunu, bu enzimlerin B1 vitamini olan tiamini hızla yıktığını anlatıyor. Tiamin eksikliği kedide sinir sistemini etkileyebiliyor. Tiaminazlar balık pişirilince yok oluyor; ticari konserve kedi mamalarında balık bulunsa bile konserveleme sırasındaki ısı tiaminazı yok etmeye yetiyor.' },
    { kind: 'paragraf', metin: 'Cornell ise çiğ ve az pişmiş mama diyetlerini önermiyor: bunların kediye ve evdekilere bulaşabilecek canlı bakteri, virüs ve parazit taşıyabildiği, buna karşılık kediye açık bir sağlık yararı sağladığına dair bilimsel kanıtın şu an eksik olduğu belirtiliyor. Yani kediye "doğal olsun" diye çiğ balık vermek hem tiamin hem de enfeksiyon yönünden ek risk getiriyor.' },
    { kind: 'yanilgi', baslik: '"Çiğ balık kedi için daha sağlıklıdır"', metin: 'Cornell, çiğ besinlerin sağladığı yararın bilimsel kanıtının eksik olduğunu, buna karşılık canlı bakteri, virüs ve parazit taşıma riskinin bulunduğunu belirtiyor. Merck ise çiğ tatlı su balığındaki tiaminazın tiamini yıktığını anlatıyor. Çiğ olmak balığı daha güvenli ya da daha besleyici yapmıyor.' },

    { kind: 'baslik', metin: 'Yalnızca ton balığı neden dengeli bir beslenme değil?' },
    { kind: 'paragraf', metin: 'Kediler köpeklerden farklı olarak diyetle taurin almak zorunda; Merck Veterinary Manual taurin eksikliğinin kedide genişlemiş kalp kası hastalığına ve retinanın merkezinde dejenerasyona yol açabildiğini belirtiyor. Tam ve dengeli bir kedi maması bu ihtiyaçları hesaba katarak hazırlanıyor; bir kutu ton balığı konservesi ise kedinin tüm besin ihtiyacını karşılamak üzere tasarlanmıyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynak, iyi kalitede, ticari, tam ve dengeli bir mamayla ya da beslenme uzmanı hekimin hazırladığı bir ev yapımı diyetle beslenen kedi ve köpeklerde beslenme hastalıklarının nadir görüldüğünü, sorunların en sık dengesiz ev yapımı diyetlerde ortaya çıktığını vurguluyor. Kedinin ana öğününün nasıl seçileceğini [[kediler-icin-yas-mama-mi-kuru-mama-mi|kediler için yaş mama mı kuru mama mı]] yazımızda anlattık.' },
    { kind: 'tablo', basliklar: ['Durum', 'Kaynaklara göre değerlendirme'], satirlar: [
      ['Tam ve dengeli ticari kedi maması (içinde balık olabilir)', 'Beslenme hastalıkları nadir; konserveleme ısısı tiaminazı yok ediyor'],
      ['Düzenli ve büyük miktarda insan konservesi ton balığı', 'E vitamini eksikliği ve sarı yağ hastalığı ile ilişkilendirilmiş'],
      ['İnsan için üretilmiş konserve balık ürünleri', 'Bazı kedilerde ciddi nörolojik bozukluklar görülmüş'],
      ['Çiğ tatlı su balığı', 'Tiaminaz tiamini yıkıyor; Cornell çiğ diyetleri önermiyor'],
      ['Balık ağırlıklı ev yapımı öğün', 'Dengesiz diyet riski; yağlı balıkla vaka bildirilmiş'],
    ]},

    { kind: 'baslik', metin: 'Ne kadar verilebilir?' },
    { kind: 'paragraf', metin: 'Kaynaklar ton balığı için güvenli bir gram miktarı vermiyor; bu yüzden bir rakam yazmak doğru olmaz. Cornell\'in genel ölçüsü şöyle: ödüller bir kedinin günlük kalorisinin **yüzde 10-15\'ini** aşmamalı. Ton balığı da dahil her ödül bu paya sayılıyor ve ana öğünün yerini almıyor.' },
    { kind: 'paragraf', metin: 'Böbrek, mide-bağırsak ya da başka bir sağlık sorunu olan kedilerde ödül seçimi için veteriner hekime danışmak gerekiyor. Günlük mama miktarını [[kedi-gunde-kac-gram-mama-yer|kedi günde kaç gram mama yer]] yazımızdan kontrol edebilirsiniz. İştah değişikliği yaşayan kedilerde ise [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısı yol gösterir.' },
    { kind: 'yanilgi', baslik: '"Kedi balığı bu kadar seviyor, demek ki ona iyi geliyor"', metin: 'Kedinin bir yiyeceği sevmesi o yiyeceğin dengeli olduğunu göstermiyor. Merck Veterinary Manual, sarı yağ hastalığı vakalarının çoğunda beslenmenin tamamen ya da kısmen balıktan oluştuğunu belirtiyor.' },

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime başvurulmalı?' },
    { kind: 'paragraf', metin: 'Kedi uzun süre balık ağırlıklı beslenmişse, ton balığı konservesini düzenli yemişse ya da yedikten sonra davranışında bir değişiklik görüldüyse veteriner hekimle konuşmak gerekiyor. Hekim kedinin kilosunu, kondisyonunu ve beslenme geçmişini değerlendirerek uygun mamayı belirler. Kedinin ne yediğini ve miktarını not etmek bu görüşmeyi kolaylaştırır.' },
  ],
  kontrolListesi: [
    'Ana öğün tam ve dengeli mama mı?',
    'Düzenli ton balığı alışkanlığı var mı?',
    'Ödül payı yüzde 15\'i geçiyor mu?',
    'Kedi çiğ balık yiyor mu?',
    'Ağrı ya da isteksizlik var mı?',
  ],
  sss: [
    { soru: 'Kediler ton balığı yiyebilir mi?', cevap: 'Düzenli ve büyük miktarda verilmemesi gerekiyor. Merck Veterinary Manual, çok miktarda konserve ton balığı verilen kedilerde E vitamini eksikliği ve sarı yağ hastalığı geliştiğini bildiriyor; Cornell ise insan için üretilmiş konserve balığın bazı kedilerde nörolojik sorunlarla ilişkilendirildiğini belirtiyor.' },
    { soru: 'Kediye konserve ton balığı verilir mi?', cevap: 'Düzenli öğün olarak verilmesi önerilmiyor. Cornell, insanlar için üretilmiş konserve balık yiyen bazı kedilerde ciddi olabilecek nörolojik bozukluklar görüldüğünü belirtiyor. Kedi için hazırlanmış, tam ve dengeli mama kedinin besin ihtiyacını karşılamak üzere tasarlanıyor.' },
    { soru: 'Sarı yağ hastalığı nedir?', cevap: 'Yağ dokusunun iltihaplandığı bir durumdur. Merck Veterinary Manual\'e göre doymamış yağ asitlerinin fazlalığı ile E vitamini eksikliği birleşince ortaya çıktığı düşünülüyor ve bilinen vakaların çoğunda beslenme tamamen ya da kısmen balıktan oluşuyor. Şüphede veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Kediler çiğ balık yiyebilir mi?', cevap: 'Önerilmiyor. Merck Veterinary Manual, çiğ tatlı su balığındaki tiaminazın B1 vitaminini yıktığını belirtiyor; Cornell ise çiğ ve az pişmiş mama diyetlerinin kedilere ve evdekilere bulaşabilecek bakteri, virüs ve parazit taşıyabildiğini, açık bir yararının kanıtlanmadığını söylüyor.' },
    { soru: 'Kediye ödül olarak ne kadar verilebilir?', cevap: 'Cornell\'in genel ölçüsü, ödüllerin kedinin günlük kalorisinin yüzde 10-15\'ini geçmemesi yönünde. Ton balığı için ayrı bir güvenli gram miktarı bildirilmiyor; ödül payı tüm ödüllerin toplamıdır ve ana öğün tam ve dengeli mamadan oluşmalıdır.' },
    { soru: 'Kedi çok fazla ton balığı yerse ne yapılmalı?', cevap: 'Kedi uzun süre ya da çok miktarda ton balığı yediyse veteriner hekime başvurmak gerekiyor. Özellikle iştahsızlık, durgunluk, hareket etmek istememe ya da dokunulunca acı belirtisi varsa vakit kaybetmemek önemli. Evde müdahale ya da takviye vermek doğru değildir.' },
    { soru: 'Ton balığı kedi için taurin kaynağı mıdır?', cevap: 'Taurin kediler için diyetle alınması zorunlu bir amino asit ve eksikliği kalp kası ile gözde ciddi sorunlara yol açabiliyor. Tam ve dengeli kedi mamaları taurini hesaba katarak hazırlanıyor; tek başına bir balık konservesi bu dengeyi sağlamak üzere tasarlanmıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Nutritional Requirements of Small Animals',
      adres: 'https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutritional-requirements-of-small-animals',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Muscle Disorders in Cats',
      adres: 'https://www.merckvetmanual.com/cat-owners/bone-joint-and-muscle-disorders-of-cats/muscle-disorders-in-cats',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
    {
      kurum: 'Universidade de Lisboa, Faculdade de Medicina Veterinária (CIISA)',
      yazarlar: 'Niza MM, Vilela CL, Ferreira LM',
      baslik: 'Feline pansteatitis revisited: hazards of unbalanced home-made diets',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2003,
      kunye: '5(5):271-7',
      doi: '10.1016/S1098-612X(03)00051-2',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/12948502/',
    },
  ],
};
