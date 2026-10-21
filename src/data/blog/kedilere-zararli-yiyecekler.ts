import type { BlogYazi } from './types';

export const kedilereZararliYiyecekler: BlogYazi = {
  slug: 'kedilere-zararli-yiyecekler',
  baslik: 'Kedilere Zararlı Yiyecekler: Kediler Neleri Yememeli?',
  ozet: 'Soğan, sarımsak, çikolata, üzüm, kuru üzüm, avokado ve ksilitol kediler için zararlı; süt de çoğu kedide sindirim sorunu yapıyor. Liste, nedenleri ve yapılacaklar.',
  kapakAlt:
    'Kedilere zararlı yiyecekler konulu yazının kapak görseli; mutfak tezgâhında üzüm, soğan ve çikolataya patisini uzatan meraklı bir tekir kedi',
  kategori: 'Beslenme',
  tarih: '2026-10-24',
  bloklar: [
    { kind: 'paragraf', metin: '**Soğan, sarımsak, çikolata, üzüm, kuru üzüm, avokado ve ksilitol içeren ürünler kediler için zararlı.** Cornell Üniversitesi Veteriner Fakültesi\'nin kedi sağlığı merkezi bu yiyecekleri kediler için zehirli olanlar arasında sayıyor. Süt zehirli değil ama birçok kedi laktozu sindiremediği için sindirim sorununa yol açabiliyor; çiğ et ise enfeksiyon riski taşıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu yiyeceklerin neden zararlı olduğunu, kedilerin en çok hangi durumda bunlarla karşılaştığını ve kedi zararlı bir şey yediğinde ne yapılması gerektiğini veteriner fakültelerinin ve hakemli bir derlemenin bilgileriyle anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Yiyecek', 'Neden zararlı'], satirlar: [
      ['Soğan, sarımsak, pırasa, frenk soğanı', 'Kırmızı kan hücrelerine zarar verip kansızlığa yol açabiliyor'],
      ['Çikolata', 'İçindeki teobromin ve kafein kalp ve sinir sistemini etkiliyor'],
      ['Üzüm ve kuru üzüm', 'Cornell kediler için zehirli sayıyor'],
      ['Avokado', 'Cornell kediler için zehirli sayıyor'],
      ['Ksilitol içeren ürünler', 'Yapay tatlandırıcı; Cornell kediler için zehirli sayıyor'],
      ['Süt ve süt ürünleri', 'Birçok kedi laktozu sindiremiyor, ishal ve mide sorunu yapabiliyor'],
      ['Çiğ et ve çiğ mama', 'Bakteri, virüs ve parazit taşıyabiliyor'],
    ]},

    { kind: 'baslik', metin: 'Soğan ve sarımsak kediler için neden tehlikeli?' },
    { kind: 'paragraf', metin: 'Soğan, sarımsak, pırasa ve frenk soğanı aynı bitki ailesinden (Allium) geliyor. Milano Üniversitesi\'nden Cortinovis ve Caloni\'nin 2016 tarihli derlemesine göre köpekler ve kediler bu bitkilere karşı çok duyarlı; zarar, kırmızı kan hücrelerinin oksidatif hasarla parçalanması yoluyla oluşuyor ve kansızlığa yol açabiliyor. Derleme, **pişirmenin, kurutmanın ve işlemenin bu etkiyi ortadan kaldırmadığını** da vurguluyor.' },
    { kind: 'paragraf', metin: 'Derleme, kedilerde **vücut ağırlığının kilogramı başına 5 gram soğanın** kanda önemli değişikliklere yetebildiğini, köpeklerde bu miktarın kilogram başına 15-30 gram olduğunu aktarıyor. Yani 4 kiloluk bir kedi için 20 gram soğan, yani küçük bir soğanın bir parçası bile risk oluşturabiliyor. Bu yüzden soğanlı ya da sarımsaklı yemek artıkları, çorba ve soslar kediye verilmemeli.' },
    { kind: 'yanilgi', baslik: '"Yemeğin içindeki biraz soğandan bir şey olmaz"', metin: 'Kediler küçük olduğu için zarar veren miktar da küçük. Derlemeye göre kedide kilogram başına 5 gram soğan kanda değişikliğe yetebiliyor; bu, ev yemeğindeki soğan miktarıyla kolayca aşılabilecek bir eşik.' },

    { kind: 'baslik', metin: 'Çikolata kediler için zehirli mi?' },
    { kind: 'paragraf', metin: 'Evet. Çikolatadaki teobromin ve kafein gibi maddeler (metilksantinler) kedileri de zehirleyebiliyor. Cortinovis ve Caloni\'ye göre çikolata zehirlenmesi en çok köpeklerde görülüyor, çünkü köpekler yiyecek seçmeden yiyor; ama kedilerde de olabiliyor. Derlemeye göre ilk belirtiler genellikle yedikten 2-4 saat sonra huzursuzluk, aşırı su içme, kusma ve ishal olarak başlıyor; ilerleyen zehirlenmede kalp ritmi bozuklukları, kas sertliği, denge kaybı ve nöbet görülebiliyor. Teobromin miktarı çikolatanın türüne göre çok değişiyor: şekersiz pişirme çikolatası ve kakao tozunda gram başına 14 miligramın üzerinde, bitter çikolatada yaklaşık 5, sütlü çikolatada yaklaşık 2 miligram.' },

    { kind: 'baslik', metin: 'Kedilere süt verilir mi?' },
    { kind: 'paragraf', metin: 'Cornell\'e göre süt kediler için önerilen bir ödül değil, çünkü **birçok kedi laktozu sindiremiyor** ve süt ürünleriyle beslendiğinde mide ve bağırsak sorunları yaşayabiliyor. Kedinin su ihtiyacı için en iyi kaynak her zaman temiz su.' },
    { kind: 'yanilgi', baslik: '"Kedilere süt iyi gelir"', metin: 'Kase sütün başındaki kedi görüntüsü yaygın ama Cornell, birçok kedinin laktozu sindiremediğini ve sütün ishal gibi sorunlara yol açabildiğini belirtiyor. Süt kedi için gerekli bir besin değil.' },

    { kind: 'baslik', metin: 'Çiğ et, çiğ balık ve insan konservesi' },
    { kind: 'paragraf', metin: 'Cornell çiğ et ve çiğ mama diyetlerini önermiyor: bunlar kediye ve evdeki insanlara geçebilecek **canlı bakteri, virüs ve parazit** taşıyabiliyor; çiğ et toksoplazma gibi enfeksiyonların da kaynağı olabiliyor. İnsanlar için üretilmiş konserve balık ürünleri ise bazı kedilerde **nörolojik bozukluklarla** ilişkilendirilmiş. Ton balığı konservesi gibi ürünleri düzenli bir yiyecek hâline getirmek bu yüzden doğru değil.' },

    { kind: 'baslik', metin: 'Ödül ve masa yemeği ne kadar olmalı?' },
    { kind: 'paragraf', metin: 'Cornell, ödül mamalarının kedinin günlük kalorisinin **yüzde 10-15\'ini** geçmemesini öneriyor. Zararsız bir yiyecek bile fazlası verildiğinde ana mamanın dengesini bozuyor ve kiloya yol açıyor. Kedinin ana öğününün nasıl seçileceğini [[kediler-icin-yas-mama-mi-kuru-mama-mi|kediler için yaş mama mı kuru mama mı]] yazımızda anlattık.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Kedilere süt iyi gelir', 'Birçok kedi laktozu sindiremiyor'],
      ['Biraz soğandan bir şey olmaz', 'Kedide kilogram başına 5 gram soğan kanda değişikliğe yetebiliyor'],
      ['Kedi seçicidir, zehirli şeyi yemez', 'Daha az görülse de kediler de zehirleniyor'],
      ['Ton balığı konservesi iyi bir öğündür', 'İnsan için konserve balık bazı kedilerde sinir sorunlarıyla ilişkilendirildi'],
    ]},

    { kind: 'baslik', metin: 'Kedi zararlı bir şey yerse ne yapılır?' },
    { kind: 'paragraf', metin: 'Cornell\'in önerisi açık: kedi zehirli olabilecek bir şey yediyse **vakit kaybetmeden veteriner hekime ulaşmak** gerekiyor; hekim o an ulaşılamıyorsa en yakın acil veteriner kliniğine başvurulmalı. Yenen ürünün ambalajı ya da bir örneği saklanmalı, çünkü hekimin karar vermesini kolaylaştırıyor. **Hekim söylemedikçe kediyi kusturmaya çalışmak doğru değil.**' },
    { kind: 'paragraf', metin: 'Bitkiler de kediler için önemli bir zehirlenme kaynağı; zambak türleri gibi bitkileri [[kediler-icin-zehirli-bitkiler|kediler için zehirli bitkiler]] yazımızda topladık. Köpekler için liste farklı; onu da [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazımızda anlattık.' },
    { kind: 'uyari', metin: 'Kusma, ishal, halsizlik, solgun diş eti, nefes almada güçlük ya da nöbet görülen bir kedi, belirtilerin geçmesi beklenmeden vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodur. Belirti başlamadan da yenen miktarı hekimle değerlendirmek gerekiyor.' },
  ],
  kontrolListesi: [
    'Soğanlı yemek artığı veriliyor mu?',
    'Çikolata kedinin erişiminde mi?',
    'Üzüm ve kuru üzüm kapalı yerde mi?',
    'Kediye süt veriliyor mu?',
    'Ödüller günlük payın altında mı?',
    'Veteriner hekimin numarası kayıtlı mı?',
  ],
  sss: [
    { soru: 'Kedilere hangi yiyecekler zararlı?', cevap: 'Soğan, sarımsak, çikolata, üzüm, kuru üzüm, avokado ve ksilitol içeren ürünler kediler için zararlı. Süt birçok kedide sindirim sorunu yaparken çiğ et enfeksiyon riski taşıyor.' },
    { soru: 'Kediler soğan yerse ne olur?', cevap: 'Soğan kırmızı kan hücrelerine zarar verip kansızlığa yol açabiliyor. Bir derlemeye göre kedide vücut ağırlığının kilogramı başına 5 gram soğan bile kanda önemli değişikliklere yetebiliyor.' },
    { soru: 'Kedilere süt verilir mi?', cevap: 'Önerilmiyor. Cornell\'e göre birçok kedi laktozu sindiremiyor ve süt ürünleri mide ve bağırsak sorunlarına yol açabiliyor; kedinin su ihtiyacını temiz su karşılıyor.' },
    { soru: 'Çikolata kediler için zehirli mi?', cevap: 'Evet. Çikolatadaki teobromin ve kafein kedilerde de huzursuzluk, kusma, kalp ritmi bozukluğu ve nöbete yol açabiliyor; kakao oranı yüksek çikolatada teobromin daha fazla.' },
    { soru: 'Kediler ton balığı konservesi yiyebilir mi?', cevap: 'Düzenli verilmemeli. Cornell, insanlar için üretilmiş konserve balığın bazı kedilerde nörolojik bozukluklarla ilişkilendirildiğini belirtiyor.' },
    { soru: 'Kedi üzüm yerse ne olur?', cevap: 'Cornell üzüm ve kuru üzümü kediler için zehirli yiyecekler arasında sayıyor. Kedi üzüm yediyse belirti beklemeden veteriner hekime ulaşmak gerekiyor.' },
    { soru: 'Kedi zehirli bir şey yerse kusturulur mu?', cevap: 'Hayır, veteriner hekim söylemedikçe kusturmaya çalışmak doğru değil. Yenen ürünün ambalajı saklanarak vakit kaybetmeden hekime ulaşılması gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Università degli Studi di Milano, Department of Health, Animal Science and Food Safety',
      yazarlar: 'Cortinovis C, Caloni F',
      baslik: 'Household Food Items Toxic to Dogs and Cats',
      dergi: 'Frontiers in Veterinary Science',
      yil: 2016,
      kunye: '3:26',
      doi: '10.3389/fvets.2016.00026',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/27047944/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Common Cat Hazards',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/common-cat-hazards-0',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
  ],
};
