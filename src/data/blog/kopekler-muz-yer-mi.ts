import type { BlogYazi } from './types';

export const kopeklerMuzYerMi: BlogYazi = {
  slug: 'kopekler-muz-yer-mi',
  baslik: 'Köpekler Muz Yer mi? Miktar ve Dikkat Edilecekler',
  ozet: 'Muz köpekler için zehirli değil ve ödül olarak verilebilir. Sınır, ödüllerin toplamının günlük kalorinin %10\'unu aşmamasıdır.',
  kapakAlt:
    'Elle uzatılan muz dilimine bakan golden köpek',
  kategori: 'Beslenme',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, köpekler muz yiyebilir.** ASPCA muz bitkisini köpekler için zehirsiz bitkiler arasında sayıyor ve muz, köpeklere verilmemesi gereken insan yiyecekleri listesinde geçmiyor. Asıl konu miktardır: muz bir ödüldür ve Merck Veteriner El Kitabı\'na göre ödüllerin günlük toplamı toplam kalorinin %10\'unun altında kalmalıdır.' },
    { kind: 'paragraf', metin: 'Aşağıda muzun hangi koşulda güvenli sayıldığını, ödül payının nasıl düşünülmesi gerektiğini, muzlu ürünlerde nelere dikkat edildiğini ve hangi durumda veteriner hekime başvurulacağını anlatıyoruz. Bu yazı tanı ya da tedavi bilgisi vermez; köpeğinizin sağlığıyla ilgili her soruda karar veteriner hekimindir.' },

    { kind: 'tablo', basliklar: ['Durum', 'Ne yapmak gerekiyor?'], satirlar: [
      ['Soyulmuş, taze muz', 'Ödül payının içinde az miktarda verilebilir'],
      ['Muz kabuğu', 'Besin olarak verilmez, muz soyularak verilmesi önerilir'],
      ['Muzlu kek, ekmek, tatlı', 'İçerik listesine bakılır; üzüm, çikolata veya kuruyemiş varsa verilmez'],
      ['Kilolu ya da diyet uygulanan köpek', 'Önce veteriner hekime danışılır'],
      ['Kabuk veya yiyecek dışı bir şey yutulmuş', 'Vakit kaybetmeden veteriner hekime başvurulur'],
    ]},

    { kind: 'baslik', metin: 'Muz köpekler için güvenli mi?' },
    { kind: 'paragraf', metin: 'ASPCA\'nın köpekler için hazırladığı zehirli ve zehirsiz bitki listesinde muz (Musa acuminata), zehirsiz bitkiler bölümünde yer alıyor. ASPCA Zehir Kontrol uzmanlarının ayrıca hazırladığı, evcil hayvanlara verilmemesi gereken insan yiyecekleri listesinde alkol, çikolata, kafein, üzüm, soğan ve makadamya gibi ürünler sayılıyor; muz bu listede geçmiyor.' },
    { kind: 'paragraf', metin: 'Bu bilgi muzun sınırsız verilebileceği anlamına gelmiyor. Zehirli olmaması ile bir yiyeceğin köpeğin düzenine uygun olması ayrı konulardır. Muzun sağlıklı bir ödül olarak nasıl yer alacağını belirleyen şey miktar ve köpeğin genel durumudur.' },

    { kind: 'baslik', metin: 'Ne kadar muz verilebilir?' },
    { kind: 'paragraf', metin: 'Muz için gram cinsinden tek bir değer vermek doğru olmaz, çünkü sınır muzun kendisine değil ödüllerin toplamına konuyor. Merck Veteriner El Kitabı, çoğu ödülün tam ve dengeli olmadığını, besin eksikliğini önlemek için günlük ödül toplamının toplam kalorinin %10\'undan az olması gerektiğini belirtiyor. Aynı sınır sofra artıkları için de geçerli: Merck, bunların günlük kalorinin %10\'unu hiçbir zaman aşmaması gerektiğini ve aşırı beslenmenin obeziteye ve başka sağlık sorunlarına yol açabildiğini yazıyor.' },
    { kind: 'paragraf', metin: 'Hakemli literatürde de aynı çerçeve görülüyor. 2025\'te Veterinary Sciences dergisinde yayımlanan bir çalışma, WSAVA ve AAHA\'nın ödüllerin köpek ve kedilerde günlük enerjinin en fazla %10\'unu oluşturmasını önerdiğini belirtiyor. Yani muz yedirilen günde bisküvi, çiğneme ödülü ve sofra artığı da varsa hepsi aynı %10\'luk payın içinde sayılır.' },
    { kind: 'paragraf', metin: 'Payın gram karşılığı köpeğin günlük enerji ihtiyacına bağlıdır ve bunu en doğru veteriner hekim hesaplar. Günlük mama miktarını [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazımızda anlattık. Kiloya yatkın köpeklerde Merck, verilen tüm ödüllerin kalorisinin hesaba katılması gerektiğini vurguluyor; kilo durumunu [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazımızdan değerlendirebilirsiniz.' },
    { kind: 'yanilgi', baslik: '"Meyve doğal olduğu için istediği kadar yiyebilir"', metin: 'Merck\'in sınırı ödülün türüne bakmıyor: hangi ödül olursa olsun günlük toplam kalorinin %10\'unun altında kalması gerekiyor. Meyve de bu payın içinde sayılır ve fazlası kilo artışına yol açabilir.' },

    { kind: 'baslik', metin: 'Muzu vermeden önce nelere bakılmalı?' },
    { kind: 'liste', maddeler: [
      'Taze muzu soyup kabuğunu çıkarmak',
      'Muzu o günkü ödül payının içinde saymak',
      'Daha önce muz yememiş köpekte sindirim belirtilerini izlemek',
      'Muzlu hazır ürünlerde içerik listesini okumak',
      'Kilo ya da hastalık nedeniyle diyetteki köpeklerde önce veteriner hekime sormak',
    ]},

    { kind: 'baslik', metin: 'Muzlu ürünlerde asıl dikkat edilecek yer katkılar' },
    { kind: 'paragraf', metin: 'Muzlu kek, ekmek ve kurabiyeler çoğu zaman muzdan çok başka içerik taşıyor. ASPCA\'ya göre çikolata, kahve ve kafein, içerdikleri metilksantinler nedeniyle kusma, ishal, kalp ritim bozukluğu ve nöbete yol açabiliyor. Üzüm ve kuru üzüm köpeklerde böbrek hasarıyla ilişkilendiriliyor. Makadamya fındığı zayıflık, kusma ve titremeye neden olabiliyor; badem, ceviz ve pikan gibi kuruyemişlerin yağı ise kusma, ishal ve bazı hayvanlarda pankreatit riskiyle bağlantılı.' },
    { kind: 'paragraf', metin: 'Bu yüzden muzlu bir ürünün içinde bunlardan biri varsa köpeğe verilmemesi gerekiyor. Evde kalan tatlıların köpeğin ulaşabileceği yerde bırakılmaması da önemli. Zehirlenme şüphesinde ne yapılması gerektiğini [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Bütün meyveler muz gibi değil' },
    { kind: 'paragraf', metin: 'Muzun güvenli sayılması başka meyveler için geçerli değil. ASPCA\'ya göre üzüm ve kuru üzüm köpeklerde böbrek hasarına yol açabiliyor. Narenciyenin kabuğu, yaprağı ve çekirdeği tahrişe neden olabiliyor; küçük miktarda meyve yemek ise çoğunlukla hafif mide rahatsızlığının ötesinde sorun çıkarmıyor. Hangi yiyeceklerin köpekler için riskli olduğunu [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazımızda topladık.' },

    { kind: 'baslik', metin: 'Hangi köpeklerde önce veteriner hekime danışılmalı?' },
    { kind: 'paragraf', metin: 'Kilosu fazla olan, kilo verme programındaki ya da hastalık nedeniyle özel mama yiyen köpeklerde muz dahil her ödülün miktarını veteriner hekim belirlemeli. Merck, deneme diyetlerinde tüm ödüllerin, atıştırmalıkların ve sofra yiyeceklerinin diyetten çıkarıldığını belirtiyor; böyle bir programdaki köpeğe muz vermek diyeti bozabilir.' },
    { kind: 'paragraf', metin: 'Pankreas hastalığı geçiren köpeklerde de durum benzer. Merck, hafif pankreatit vakalarında köpeklerin çoğunlukla düşük yağlı mamaya ve düşük yağlı ödüllere geçirildiğini yazıyor. Hangi ödülün uygun olduğuna köpeğin hekimi karar verir.' },

    { kind: 'baslik', metin: 'Kabuk ya da yiyecek dışı bir şey yutulursa' },
    { kind: 'paragraf', metin: 'Muz kabuğu yenmesi gereken bir parça değil; muz soyularak verilmesi öneriliyor. Köpek yine de kabuğu ya da yiyecek olmayan başka bir şeyi yutmuşsa Merck\'in anlattığı tablo önem kazanıyor: bağırsak tıkanıklığı yabancı cisimlerden kaynaklanabiliyor ve belirtiler genellikle uyuşukluk, iştah kaybı ve kusmayı içeriyor. Kusma durmayabiliyor ve tedavi edilmezse sıvı kaybına bağlı şok kısa sürede gelişebiliyor.' },
    { kind: 'paragraf', metin: 'İyi haber, Merck\'e göre yabancı cisme bağlı tıkanıklığı olan köpeklerin hızlı tanı ve tedaviyle çoğunlukla iyi sonuç alması. Bu yüzden şüphe durumunda beklemek yerine veteriner hekime ulaşmak gerekiyor.' },
    { kind: 'uyari', metin: 'Köpek muz kabuğu ya da yiyecek olmayan bir şey yuttuysa, ya da yedikten sonra durmayan kusma, uyuşukluk, iştahsızlık veya karın ağrısı gösteriyorsa vakit kaybetmeden veteriner hekime başvurulması gerekiyor. Neyin yutulduğunu ve ne zaman olduğunu hekime söylemek tanıyı kolaylaştırır.' },
  ],
  kontrolListesi: [
    'Muzun kabuğu soyuldu mu?',
    'Ödül payı %10\'u aşıyor mu?',
    'Üründe üzüm veya çikolata var mı?',
    'Özel diyet ya da kilo sorunu var mı?',
    'Yutulan kabuk veya parça var mı?',
    'Yedikten sonra kusma var mı?',
  ],
  sss: [
    { soru: 'Köpekler muz yer mi?', cevap: 'Evet, köpekler muz yiyebilir. ASPCA muz bitkisini köpekler için zehirsiz bitkiler arasında listeliyor. Muz bir ödül olduğu için günün toplam ödül payının, yani günlük kalorinin %10\'unun içinde sayılması gerekiyor. Kilolu ya da diyetteki köpeklerde miktarı veteriner hekim belirler.' },
    { soru: 'Muz köpekler için zehirli mi?', cevap: 'Hayır, ASPCA muzu köpekler için zehirsiz bitkiler arasında sayıyor ve muz, ASPCA\'nın kaçınılacak insan yiyecekleri listesinde geçmiyor. Zehirli olmaması sınırsız verilebileceği anlamına gelmez; ödüllerin toplamı günlük kalorinin %10\'unu aşmamalı.' },
    { soru: 'Köpeğe günde kaç muz verilir?', cevap: 'Herkes için geçerli tek bir sayı yok, çünkü sınır ödüllerin toplamına konuyor. Merck, günlük ödül toplamının toplam kalorinin %10\'undan az olmasını söylüyor. Bu payın ne kadar muza denk geldiği köpeğin enerji ihtiyacına bağlı; veteriner hekim hesaplayabilir.' },
    { soru: 'Muz kabuğu köpeğe verilir mi?', cevap: 'Hayır, kabuğun verilmesi gerekmiyor ve muzun soyularak verilmesi öneriliyor. Köpek kabuğu yutmuşsa ve uyuşukluk, iştah kaybı ya da durmayan kusma görülüyorsa, Merck bu tabloyu yabancı cisme bağlı tıkanıklıkla da ilişkilendiriyor; vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Muzlu kek köpeğe verilir mi?', cevap: 'Önerilmez, çünkü muzlu ürünlerde başka içerikler olabiliyor. ASPCA\'ya göre çikolata, üzüm, kuru üzüm, makadamya ve bazı kuruyemişler köpekler için riskli. İçerik listesinde bunlardan biri varsa köpeğe verilmemeli; yenmişse veteriner hekime başvurulması gerekiyor.' },
    { soru: 'Diyetteki köpek muz yiyebilir mi?', cevap: 'Bu kararı köpeğin hekimi vermeli. Merck, deneme diyetlerinde tüm ödüllerin ve sofra yiyeceklerinin çıkarıldığını, kiloya yatkın köpeklerde de her ödülün kalorisinin hesaba katılması gerektiğini belirtiyor. Muz da bu kapsamda bir ödüldür.' },
    { soru: 'Köpek muz yedikten sonra kustuysa ne yapılmalı?', cevap: 'Kusma sürüyorsa ya da uyuşukluk ve iştah kaybı eşlik ediyorsa veteriner hekime başvurmak gerekiyor. Merck, bu belirtileri yabancı cisme bağlı tıkanıklıkta da sayıyor ve kusmanın durmayabileceğini belirtiyor. Kabuk ya da başka bir nesne yutulduysa beklemeden hekime ulaşılmalı.' },
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Feeding Practices in Small Animals',
      adres: 'https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/feeding-practices-in-small-animals',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Providing a Home for a Dog',
      adres: 'https://www.merckvetmanual.com/dog-owners/selecting-and-providing-a-home-for-a-dog/providing-a-home-for-a-dog',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Disorders of the Stomach and Intestines in Dogs',
      adres: 'https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/disorders-of-the-stomach-and-intestines-in-dogs',
    },
    {
      kurum: 'ASPCA Animal Poison Control Center',
      baslik: 'People Foods to Avoid Feeding Your Pets',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets',
    },
    {
      kurum: 'ASPCA Animal Poison Control Center',
      baslik: 'Toxic and Non-Toxic Plant List: Dogs',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/dogs-plant-list',
    },
    {
      kurum: 'University of São Paulo, School of Veterinary Medicine and Animal Science',
      yazarlar: 'Príncipe LA, Marchi PH, Amaral AR, Pedrinelli V, Zafalon RVA, Romano FS, Balieiro JCC, Vendramini THA',
      baslik: 'Assessment of the Nutritional Impact of the 10% Snack Recommendation in Pet Diets',
      dergi: 'Veterinary Sciences',
      yil: 2025,
      kunye: '12(3):282',
      doi: '10.3390/vetsci12030282',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40266981/',
    },
  ],
};
