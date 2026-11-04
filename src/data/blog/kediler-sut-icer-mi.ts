import type { BlogYazi } from './types';

export const kedilerSutIcerMi: BlogYazi = {
  slug: 'kediler-sut-icer-mi',
  baslik: 'Kediler Süt İçer mi? Laktoz ve Sindirim Sorunları',
  ozet: 'Kedilere süt önerilmiyor, çünkü birçok kedi laktozu sindiremiyor. Nedenini, yavru kedi ve süt ürünleri için söylenenleri ve sütün yerini anlattık.',
  kapakAlt:
    'Mutfak tezgâhındaki süt bardağına uzanan kedi',
  kategori: 'Beslenme',
  tarih: '2026-11-05',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler süt içebilir ama kedilere süt önerilmiyor: birçok kedi laktozu sindiremiyor ve süt mide ve bağırsak sorunlarına yol açabiliyor.** Cornell Üniversitesi Veteriner Fakültesi\'nin kedi sağlığı merkezi ve Merck Veterinary Manual, sütü kediler için önerilen bir ödül saymıyor. Süt, kedinin ihtiyaç duyduğu bir besin de değil.' },
    { kind: 'paragraf', metin: 'Aşağıda kedilerin sütü neden sindiremediğini, Liverpool Üniversitesi\'nin kedi ve köpek bağırsağını karşılaştıran çalışmasının ne gösterdiğini, yavru kedilere inek sütünün neden verilmediğini, süt ürünleri ve süt alerjisi konusunda söylenenleri ve süt yerine ne sunulabileceğini anlatıyoruz. Bir kedinin sağlığıyla ilgili kararı bu yazı değil, veteriner hekim verir.' },

    { kind: 'tablo', basliklar: ['Durum', 'Kaynakların söylediği'], satirlar: [
      ['Yetişkin kediye süt ödülü', 'Önerilmiyor, birçok kedide sindirim sorunu yapabiliyor'],
      ['Yavru kediye inek sütü', 'Bazı yavrularda mide bozukluğu ve ishal yapıyor'],
      ['İshalli kediye süt ürünü', 'Verilmemesi gerekiyor'],
      ['Çiğ süt', 'Kedilere hiçbir koşulda verilmemeli deniyor'],
      ['Susuzluk için süt', 'Kedi için en iyi kaynak temiz su'],
    ]},

    { kind: 'baslik', metin: 'Kediler sütü neden sindiremiyor?' },
    { kind: 'paragraf', metin: 'Sütün şekeri laktozdur. Laktozun emilebilmesi için bağırsak yüzeyindeki laktaz enziminin onu daha küçük şekerlere ayırması gerekir. Merck Veterinary Manual, kedilerde göreceli bir laktaz eksikliği bulunduğunu, laktaz etkinliğinin sütten kesildikten sonra azaldığını ve kedilerin laktoz intoleransı geliştirebildiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Sindirilemeyen laktoz bağırsakta kalınca olan şey de Merck\'te anlatılıyor: besinlerin emilememesi bağırsakta ozmotik bir etki yaratıyor, su ve elektrolit emilimi azalıyor ve sonuçta ishal ortaya çıkıyor. Kısacası kedi sütten rahatsız oluyorsa bu şımarıklık ya da inatçılık değil, bir sindirim sorunudur.' },
    { kind: 'yanilgi', baslik: '"Kedi sütü bu kadar seviyorsa ona iyi gelir"', metin: 'Kedinin sütü yalaması onu sindirebildiği anlamına gelmiyor. Merck, sütün kediler için önerilen bir ödül olmadığını ve kedinin midesini bozabildiğini belirtiyor. Cornell de birçok kedinin laktoz intoleransı olduğunu ve süt ürünleriyle sindirim sorunu yaşayabildiğini söylüyor.' },

    { kind: 'baslik', metin: 'Kedinin bağırsağı köpeğinkinden farklı çalışıyor' },
    { kind: 'paragraf', metin: 'Liverpool Üniversitesi\'nden Batchelor ve ekibi 2011\'de kedi ve köpeğin ince bağırsağında şekerleri parçalayan enzimleri karşılaştırdı. Kedi bir etçildir ve doğal olarak çok az karbonhidrat içeren bir beslenme düzenine sahiptir; köpek ise daha çeşitli beslenir. Çalışmada köpeklerin bağırsağında, ince bağırsağın ön ve orta bölümlerinde kedilere göre sırasıyla 3,1 ve 1,6 kat daha yüksek laktaz etkinliği ölçüldü.' },
    { kind: 'paragraf', metin: 'Araştırmacılar bu sonuçtan köpeklerin karbonhidratı sindirme ve emme kapasitesinin kedilerden daha yüksek olabileceğini, kedilerin ise karbonhidrattan zengin öğünlerin ardından karbonhidrat emilim sorunu yaşayabileceğini çıkardı. Bu çalışma sütü doğrudan denemedi, yani "şu kadar süt zarar verir" diye bir eşik vermiyor; ama kedinin bağırsağının laktozla başa çıkma gücünün sınırlı olduğunu anlamak için güçlü bir dayanaktır.' },
    { kind: 'tablo', basliklar: ['Kaynak', 'Konu', 'Ne söylüyor?'], satirlar: [
      ['Cornell Feline Health Center', 'Süt ödülü', 'Birçok kedi laktoz intoleransı olduğundan önerilmiyor'],
      ['Merck Veterinary Manual', 'Laktaz etkinliği', 'Sütten kesildikten sonra azalıyor'],
      ['Batchelor ve ekibi, 2011', 'Kedi ve köpek bağırsağı', 'Köpekte laktaz etkinliği daha yüksek'],
      ['ASPCA', 'Yavru kedi', 'İnek sütü bazı yavrularda ishal yapıyor'],
    ]},

    { kind: 'baslik', metin: 'Yavru kediye inek sütü verilir mi?' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre yeni doğan yavrular ilk dört hafta boyunca ihtiyaç duydukları tüm besini anne sütünden alıyor ve bu dönemde onlara başka bir şey vermek gerekmiyor. Anne hasta olduğunda, yeterli süt üretmediğinde ya da yavrular yetim kaldığında ticari bir süt ikamesi kullanmak gerekebiliyor; bu durumda ürün ve besleme önerileri için veteriner hekime danışılması gerekiyor.' },
    { kind: 'paragraf', metin: 'Sütten kesme döneminde de aynı kural geçerli. ASPCA, yavru kedi mamasıyla karıştırılacak sıvı için kedi süt ikamesinin kullanılmasını, inek sütünün ise bazı yavrularda mide bozukluğu ve ishale yol açtığı için kullanılmamasını öneriyor. Yavru kedinin genel bakımı için [[yavru-kedi-bakimi|yavru kedi bakımı]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Süt ürünleri, çiğ süt ve ishal' },
    { kind: 'paragraf', metin: 'Merck, çiğ süt dahil hiçbir süt ürününün kedilere verilmemesi gerektiğini belirtiyor. Aynı kaynak, laktoz intoleransının bağırsak yüzeyindeki özgül olmayan hasara bağlı olarak sonradan da gelişebildiğini ve bu yüzden ishali olan hayvana süt ürünü verilmemesi gerektiğini söylüyor. Yani kedide ishal varken yoğurt, peynir ya da süt denemek yerine nedenin veteriner hekimce araştırılması gerekiyor.' },
    { kind: 'paragraf', metin: 'Kedide kusma da görülüyorsa [[kedim-kusuyor|kedim kusuyor]] yazısındaki işaretler, hangi durumlarda beklemeden veteriner hekime gidilmesi gerektiğini gösteriyor.' },

    { kind: 'baslik', metin: 'Süt alerjisi ayrı bir konu' },
    { kind: 'paragraf', metin: 'Laktoz intoleransı ile süt alerjisi aynı şey değildir. Laktoz intoleransı bir sindirim sorunuyken alerji bağışıklık sisteminin bir besine tepki vermesidir. Merck, kedilerin en sık alerji gösterdiği besinler arasında balık, sığır eti, tavuk ve süt ürünlerini sayıyor.' },
    { kind: 'paragraf', metin: 'Besin alerjisinden şüphelenilen kedide tanı için güvenilir bir kan ya da deri testi yok; Merck\'e göre tek yol veteriner hekim denetiminde sınırlı içerikli bir diyet denemesi. Bu yüzden kaşıntı, tüy dökülmesi ya da ciltte kabarcık gibi bulgularda sütü kendi başına kesip nedeni tahmin etmek yerine veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Ne kadar süt güvenli?' },
    { kind: 'paragraf', metin: 'Cornell ve Merck\'in kedi sahiplerine yönelik sayfalarında güvenli sayılan bir süt miktarı verilmiyor; her ikisi de sütü ödül olarak önermiyor. Bu yüzden bu yazıda bir miktar ya da sıklık da belirtilmiyor. Kedisi daha önce süt içip sorun yaşamamış olsa bile sütün besin ihtiyacı için gerekmediği unutulmamalı.' },
    { kind: 'uyari', metin: 'Süt içtikten sonra kedide ishal, kusma, karın ağrısı belirtisi ya da halsizlik görülüyorsa, ayrıca ishal birkaç günden uzun sürüyorsa ya da süt içen kedi bir yavruysa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Belirtiyi evde tedavi etmeye çalışmak önerilmez.' },

    { kind: 'baslik', metin: 'Süt yerine ne sunulabilir?' },
    { kind: 'paragraf', metin: 'Cornell, kedilerin her zaman temiz ve taze suya ulaşabilmesi gerektiğini belirtiyor. Kedinin su ihtiyacına en iyi cevap sudur; konserve mama da en az yüzde 75 nem içerdiği için iyi bir su kaynağı. Günlük su ihtiyacını [[kedi-gunde-ne-kadar-su-icmeli|kedi günde ne kadar su içmeli]], mama seçimini ise [[kediler-icin-yas-mama-mi-kuru-mama-mi|kediler için yaş mama mı kuru mama mı]] yazısında anlattık.' },
    { kind: 'paragraf', metin: 'Ödül vermek isteyen sahipler için Cornell\'in genel kuralı, ödüllerin kedinin günlük kalori alımının yüzde 10 ile 15\'ini aşmaması. ASPCA yavru kedilerde bu payı yüzde 5 ve altında tutuyor. Besinin zararlı olup olmadığı için [[kedilere-zararli-yiyecekler|kedilere zararlı yiyecekler]] listesine de bakılabilir.' },
  ],
  kontrolListesi: [
    'Kediye süt ödül olarak veriliyor mu?',
    'Süt yerine temiz su sunuluyor mu?',
    'Süt sonrası ishal ya da kusma var mı?',
    'Yavruya inek sütü veriliyor mu?',
    'Ödül miktarı sınırlı mı?',
    'Veteriner hekime danışıldı mı?',
  ],
  sss: [
    { soru: 'Kediler süt içebilir mi?', cevap: 'İçebilir ama önerilmiyor. Cornell, birçok kedinin laktoz intoleransı olduğunu ve süt ürünleriyle sindirim sorunu yaşayabildiğini belirtiyor. Merck de sütün kediler için önerilen bir ödül olmadığını ve midelerini bozabildiğini söylüyor.' },
    { soru: 'Kediler neden sütü sindiremez?', cevap: 'Çünkü laktaz etkinliği sütten kesildikten sonra azalıyor. Merck, kedilerde göreceli bir laktaz eksikliği bulunduğunu ve kedilerin laktoz intoleransı geliştirebildiğini belirtiyor. Laktoz sindirilemeyince bağırsakta ishala yol açan bir etki ortaya çıkabiliyor.' },
    { soru: 'Yavru kediye inek sütü verilir mi?', cevap: 'Verilmemesi gerekiyor. ASPCA, inek sütünün bazı yavru kedilerde mide bozukluğu ve ishale yol açtığını belirtiyor. Anne sütü yoksa ticari süt ikamesi için veteriner hekime danışılması öneriliyor.' },
    { soru: 'Kedilere süt ürünleri verilebilir mi?', cevap: 'Önerilmiyor. Merck, çiğ süt dahil hiçbir süt ürününün kedilere verilmemesi gerektiğini söylüyor. İshali olan kedilere süt ürünü verilmemesi de ayrıca belirtiliyor, çünkü laktoz intoleransı bağırsak hasarına bağlı olarak sonradan da gelişebiliyor.' },
    { soru: 'Kedim süt içti ve ishal oldu, ne yapmalı?', cevap: 'Süt vermeyi bırakmak ve veteriner hekime danışmak gerekiyor. İshale kusma, halsizlik ya da iştahsızlık eşlik ediyorsa, ishal sürüyorsa ya da kedi yavruysa vakit kaybetmeden başvurulması önerilir. Evde ilaç ya da başka bir yöntemle tedavi denenmemeli.' },
    { soru: 'Kedilerde süt alerjisi olur mu?', cevap: 'Olur. Merck, kedilerin en sık alerji gösterdiği besinler arasında balık, sığır eti, tavuk ve süt ürünlerini sayıyor. Alerji şüphesinde tanı için güvenilir bir test yok; veteriner hekim denetiminde sınırlı içerikli diyet denemesi yapılıyor.' },
    { soru: 'Kedilere süt yerine ne verilmeli?', cevap: 'Temiz ve taze su yeterli. Cornell, kedilerin her zaman temiz suya ulaşabilmesi gerektiğini belirtiyor. Konserve mama da en az yüzde 75 nem içerdiği için iyi bir su kaynağı; mama seçimi için veteriner hekime danışılabilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Malabsorption Syndromes in Small Animals',
      adres: 'https://www.merckvetmanual.com/digestive-system/diseases-of-the-small-intestine-in-small-animals/malabsorption-syndromes-in-small-animals',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Proper Nutrition for Cats',
      adres: 'https://www.merckvetmanual.com/cat-owners/selecting-and-providing-a-home-for-a-cat/proper-nutrition-for-cats',
    },
    {
      kurum: 'University of Liverpool, Department of Veterinary Preclinical Sciences',
      yazarlar: 'Batchelor DJ, Al-Rammahi M, Moran AW, Brand JG, Li X, Haskins M, German AJ, Shirazi-Beechey SP',
      baslik: 'Sodium/glucose cotransporter-1, sweet receptor, and disaccharidase expression in the intestine of the domestic dog and cat: two species of different dietary habit',
      dergi: 'American Journal of Physiology. Regulatory, Integrative and Comparative Physiology',
      yil: 2011,
      kunye: '300(1):R67-75',
      doi: '10.1152/ajpregu.00262.2010',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/20980625/',
    },
    {
      kurum: 'ASPCA',
      baslik: 'Cat Nutrition Tips',
      adres: 'https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Allergies of Cats',
      adres: 'https://www.merckvetmanual.com/cat-owners/skin-disorders-of-cats/allergies-of-cats',
    },
  ],
};
