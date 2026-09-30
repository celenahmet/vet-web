import type { BlogYazi } from './types';

/**
 * BESLENME. Plan no 14. Enerji ihtiyaci (10 haftada 200, 10 ayda 80 kcal/kg/gun),
 * mamaya gecis haftasi, vucut kondisyon puani esikleri 2021 AAHA/AAFP Feline Life
 * Stage Guidelines tam metninden (PMC); "gunde 10-20 kucuk av" ve kucuk sik ogun
 * onerisi 2013 AAFP/ISFM Feline Environmental Needs Guidelines'tan (PMC); yasam
 * donemine gore etiket Cornell "Feeding Your Cat" sayfasindan. 30.09.2026.
 *
 * ⚠️ Ornek hesaplardaki 4000 ve 1000 kcal/kg KAYNAK IDDIASI DEGIL, varsayim; metinde
 * "ornek" diye aciklaniyor ve okuyucu kendi mamasinin degeriyle ayni hesabi yapiyor.
 *
 * Okuyucu kalir mi (Ahmet 30.09): "kac gram" sorusunun tek dogru cevabi yok; yazi
 * okuyucuya kendi yavrusu icin hesap yapabilecegi yontemi veriyor.
 */
export const yavruKediNeKadarMamaYemeli: BlogYazi = {
  slug: 'yavru-kedi-ne-kadar-mama-yemeli',
  baslik: 'Yavru Kedi Ne Kadar Mama Yemeli?',
  ozet: 'Yavru kedinin ihtiyacı gramla değil kaloriyle hesaplanıyor: 10 haftalıkta kilo başına günde 200 kcal, 10 aylıkta 80. Kendi mamanızla hesap ve öğün düzeni.',
  kapakAlt:
    'Yavru kedi beslenmesi konulu yazının kapak görseli; günlük mama miktarı ve öğün düzeni',
  kategori: 'Beslenme',
  tarih: '2026-10-01',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru kedinin ne kadar yemesi gerektiği gramla değil **kaloriyle** hesaplanıyor, çünkü mamaların kalorisi birbirinden çok farklı. 2021 AAHA ve AAFP kedi kılavuzuna göre 10 haftalık bir yavru vücut ağırlığının kilogramı başına günde yaklaşık **200 kilokalori** harcıyor; 10 aylık olduğunda bu ihtiyaç kilogram başına **80 kilokaloriye** iniyor.' },
    { kind: 'paragraf', metin: 'Yani 1 kilo gelen 10 haftalık bir yavru günde yaklaşık 200 kilokaloriye ihtiyaç duyuyor. Bunun kaç grama karşılık geldiğini mamanın kalorisi belirliyor. Aşağıdaki örnek hesap yöntemi gösteriyor; sonraki bölümler bu sayının vücut kondisyonuna göre nasıl ayarlandığını, öğünlerin nasıl bölündüğünü ve yavru mamasından ne zaman çıkıldığını anlatıyor.' },

    { kind: 'tablo', basliklar: ['Örnek yavru', 'Günlük enerji', 'Kuru mama (örnek 4.000 kcal/kg)', 'Yaş mama (örnek 1.000 kcal/kg)'], satirlar: [
      ['10 haftalık, 1 kg', '200 × 1 = 200 kcal', 'Yaklaşık 50 g', 'Yaklaşık 200 g'],
      ['10 aylık, 3,5 kg', '80 × 3,5 = 280 kcal', 'Yaklaşık 70 g', 'Yaklaşık 280 g'],
    ] },
    { kind: 'paragraf', metin: 'Tablodaki 4.000 ve 1.000 kcal/kg değerleri yalnız hesabı göstermek için seçilmiş örneklerdir. Kendi mamanızın kalorisi paketinde yazıyorsa aynı hesabı o değerle yapabilirsiniz: günlük kalori ihtiyacı, mamanın bir kilogramındaki kaloriye bölünüp 1.000 ile çarpılınca günlük gram çıkıyor.' },

    { kind: 'baslik', metin: 'İhtiyaç ilk aylarda en yüksek, sonra düşüyor' },
    { kind: 'paragraf', metin: 'Kılavuzdaki iki sayı arasındaki fark büyük: 10 haftada kilogram başına 200, 10 ayda 80 kilokalori. Yavru küçükken vücudu hem kendini sürdürüyor hem de hızla büyüyor; büyüme yavaşladıkça kilogram başına ihtiyaç düşüyor.' },
    { kind: 'paragraf', metin: 'Bu, günlük toplam mamanın hemen azalacağı anlamına gelmiyor. Yavru büyüdükçe kilosu arttığı için toplam kalori bir süre artmaya devam edebiliyor; azalan, her kilogram için gereken kalori. Bu yüzden porsiyon bir kez belirlenip bırakılmıyor, kilo değiştikçe yeniden hesaplanıyor.' },

    { kind: 'baslik', metin: 'Paketteki tablo başlangıç, vücut kondisyonu ayar' },
    { kind: 'paragraf', metin: 'Paketlerdeki besleme tabloları ortalama bir kediye göre hazırlanıyor. AAHA ve AAFP kılavuzuna göre enerji ihtiyacı yaş, vücut ve kas kondisyonu, kısırlaştırma durumu, sağlık ve hareket düzeyine göre değişiyor; bu yüzden verilen miktar, kedinin ideal vücut kondisyonunu koruyacak ya da ona ulaştıracak şekilde ayarlanıyor.' },
    { kind: 'paragraf', metin: 'Aynı kılavuz vücut kondisyon puanının her veteriner ziyaretinde kaydedilmesini öneriyor. Dokuzluk ölçekte **6-7 fazla kilolu, 8 ve üzeri şişman** kabul ediliyor. Kılavuz ayrıca değişimi izlemek için kedinin yukarıdan ve yandan fotoğrafının çekilmesini öneriyor; evde de aynı açıdan düzenli çekilen fotoğraflar, göz alıştığı için fark edilmeyen kilo alımını ortaya çıkarıyor.' },

    { kind: 'yanilgi', baslik: '"Paketteki miktar her yavruya uyar" yanılgısı', metin: 'Paket tablosu ortalamaya göre yazılıyor; aynı yaştaki iki yavrunun hareketi, yapısı ve büyüme hızı farklı. Tablo başlangıç noktasıdır, doğru miktarı yavrunun kilo seyri ve vücut kondisyonu gösteriyor.' },

    { kind: 'baslik', metin: 'Küçük ve sık öğün kedinin doğasına uygun' },
    { kind: 'paragraf', metin: 'Amerikan Kedi Hekimleri Birliği (AAFP) ve Uluslararası Kedi Tıbbı Derneği’nin (ISFM) ortak kılavuzuna göre kediler tek başına avlanan hayvanlar ve doğada günde **10-20 küçük av** yiyebiliyor. Kılavuz bu yüzden mamanın birkaç küçük öğüne bölünmesini, oyuncaklı ya da bulmacalı mama kaplarıyla sık ve küçük öğünlerin desteklenmesini öneriyor.' },
    { kind: 'paragraf', metin: 'Pratikte günlük miktar sabah bir kez tartılıyor ve gün içine bölünüyor. Kuru mamanın bir kısmı evin farklı yerlerine saklanabiliyor ya da yavrunun kovalayacağı şekilde atılabiliyor; bu hem av içgüdüsünü karşılıyor hem de mamanın tek seferde hızla yenmesini önlüyor. Kılavuz oyunda el ve ayakların kullanılmamasını da ayrıca vurguluyor.' },

    { kind: 'baslik', metin: 'Sütten mamaya geçiş 3-5. haftada başlıyor' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzuna göre yavrular 3-5 haftalıkken besin açısından dengeli ticari yavru mamasına geçmeye başlayabiliyor. Kılavuz yavrunun mama tercihlerinin annesinden büyük ölçüde etkilendiğini, bu tercihlerin ileride deneyimle değişebildiğini de aktarıyor.' },
    { kind: 'paragraf', metin: 'Bu dönemde hem yaş hem kuru mamayla tanışmak ileride iki türü de kabul eden bir kedi yetiştirmeyi kolaylaştırabiliyor. İki türün farkı ve karışık beslemenin nasıl kurulduğu [[kediler-icin-yas-mama-mi-kuru-mama-mi|kediler için yaş mama mı, kuru mama mı]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Yavru maması yaşam dönemine göre seçiliyor' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Veteriner Fakültesi’nin kedi sağlığı merkezine göre kedinin besin ihtiyaçları yaşam dönemlerine göre değişiyor ve mama etiketinde, mamanın hangi yaşam dönemi için tam ve dengeli olduğu yazıyor. Yavru döneminde "yavru" ya da "büyüme" dönemi için tam ve dengeli olan bir mama seçiliyor.' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzu yavru dönemini doğumdan 1 yaşına kadar tanımlıyor. Yetişkin mamasına geçişin zamanı çoğunlukla bu yaş civarında, kedinin büyümesi ve kondisyonu değerlendirilerek belirleniyor ve geçiş 7-10 güne yayılıyor.' },

    { kind: 'yanilgi', baslik: '"Yavru istediği kadar yesin, nasılsa büyüyor" yanılgısı', metin: 'Büyüme, sınırsız yeme gerekçesi değildir. Kılavuzlar yavru döneminde de verilen miktarın ideal vücut kondisyonuna göre ayarlanmasını öneriyor. Yavrulukta başlayan fazla kilo, yetişkinlikte en sık görülen beslenme sorununun, yani şişmanlığın başlangıcı olabiliyor.' },

    { kind: 'baslik', metin: 'Kısırlaştırmadan sonra porsiyon yeniden hesaplanıyor' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzu kısırlaştırma durumunu enerji ihtiyacını etkileyen etkenler arasında sayıyor. Kısırlaştırma çoğunlukla yavru döneminin sonuna denk geldiği için bu dönemde porsiyonun yeniden hesaplanması ve kilonun birkaç hafta yakından izlenmesi gerekiyor. Kısırlaştırma zamanı [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazısında anlatılıyor.' },
    { kind: 'paragraf', metin: 'Yavru döneminin veteriner takvimi, yani aşılar, parazit uygulaması ve kontroller [[yavru-kedi-veterinere-ne-zaman-goturulmeli|yavru kedi ne zaman veterinere götürülmeli]] yazısında bir arada. Kontroller kilonun kayda geçtiği yer olduğu için beslenme sorularını bu ziyaretlere biriktirmek işe yarıyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Yavrunun günlük mama miktarı, kilo seyri ve vücut kondisyonu değerlendirilerek veteriner hekimle birlikte belirlenir. İştahsızlık, kusma ya da ishal görülen yavruda beklenmeden hekime başvurulması gerekiyor.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Her yavruya aynı gram verilir', 'Miktar kaloriye ve kiloya göre hesaplanıyor'],
      ['Paketteki miktar kesin doğrudur', 'Tablo başlangıç, ayarı vücut kondisyonu yapıyor'],
      ['Yavru istediği kadar yemeli', 'Miktar ideal kondisyona göre ayarlanıyor'],
      ['Günde bir büyük öğün yeterli', 'Küçük ve sık öğün kedinin doğasına uygun'],
      ['Kısırlaştırma sonrası mama değişmez', 'Enerji ihtiyacı değiştiği için yeniden hesaplanıyor'],
    ] },
  ],
  kontrolListesi: [
    'Mamanın kalorisi biliniyor mu?',
    'Günlük miktar tartılıyor mu?',
    'Öğünler güne yayılıyor mu?',
    'Kilo düzenli kaydediliyor mu?',
    'Mama yaşam dönemine uygun mu?',
    'Kısırlaştırma sonrası ayar yapıldı mı?',
  ],
  sss: [
    { soru: 'Yavru kedi günde kaç gram mama yemeli?', cevap: 'Tek bir gram değeri yok, çünkü mamaların kalorisi farklı. 2021 AAHA ve AAFP kılavuzuna göre 10 haftalık yavru kilogram başına günde yaklaşık 200 kilokalori harcıyor. Örneğin 1 kilo gelen yavru için bu, kilogramında 4.000 kilokalori olan bir kuru mamada yaklaşık 50 grama karşılık geliyor.' },
    { soru: 'Yavru kedi günde kaç öğün yemeli?', cevap: 'Günlük miktarın birkaç küçük öğüne bölünmesi öneriliyor. AAFP ve ISFM kılavuzuna göre kediler doğada günde 10-20 küçük av yiyebiliyor ve kılavuz sık, küçük öğünleri bulmacalı mama kaplarıyla desteklemeyi öneriyor. Günlük miktar sabah tartılıp gün içine bölünebiliyor.' },
    { soru: 'Yavru kedi mamaya ne zaman başlar?', cevap: 'AAHA ve AAFP kılavuzuna göre yavrular 3-5 haftalıkken besin açısından dengeli ticari yavru mamasına geçmeye başlayabiliyor. Yavrunun mama tercihleri annesinden büyük ölçüde etkileniyor; bu dönemde farklı dokularla tanışmak ileride hem yaş hem kuru mamayı kabul etmesini kolaylaştırabiliyor.' },
    { soru: 'Yavru kedi maması ne zamana kadar verilir?', cevap: 'AAHA ve AAFP kılavuzu yavru dönemini doğumdan 1 yaşına kadar tanımlıyor ve yetişkin mamasına geçiş çoğunlukla bu yaş civarında yapılıyor. Zaman, kedinin büyümesi ve vücut kondisyonu değerlendirilerek veteriner hekimle belirleniyor; geçiş 7-10 güne yayılıyor.' },
    { soru: 'Yavru kedinin fazla yediği nasıl anlaşılır?', cevap: 'En güvenilir ölçü, veteriner hekimin her ziyarette kaydettiği vücut kondisyon puanıdır. Dokuzluk ölçekte 6-7 fazla kilolu, 8 ve üzeri şişman sayılıyor. Evde kedinin yukarıdan ve yandan düzenli fotoğrafının çekilmesi, göz alıştığı için fark edilmeyen kilo alımını görmeyi kolaylaştırıyor.' },
    { soru: 'Kısırlaştırılan kedinin maması azaltılır mı?', cevap: 'Kısırlaştırma enerji ihtiyacını etkileyen etkenlerden biri olduğu için porsiyonun yeniden hesaplanması gerekiyor. AAHA ve AAFP kılavuzu verilen miktarın ideal vücut kondisyonunu koruyacak şekilde ayarlanmasını öneriyor. Ameliyattan sonraki haftalarda kilonun yakından izlenmesi, gerekli ayarın zamanında yapılmasını sağlıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'American Animal Hospital Association (AAHA), American Association of Feline Practitioners (AAFP)',
      yazarlar: 'Quimby J, Gowland S, Carney HC, DePorter T, Plummer P, Westropp J',
      baslik: '2021 AAHA/AAFP Feline Life Stage Guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2021,
      kunye: '23(3):211-233',
      doi: '10.1177/1098612X21993657',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10812130/',
    },
    {
      kurum: 'American Association of Feline Practitioners (AAFP), International Society of Feline Medicine (ISFM)',
      yazarlar: 'Ellis SL, Rodan I, Carney HC, Heath S, Rochlitz I, Shearburn LD, Sundahl E, Westropp JL',
      baslik: 'AAFP and ISFM feline environmental needs guidelines',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2013,
      kunye: '15(3):219-230',
      doi: '10.1177/1098612X13477537',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11383066/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
  ],
};
