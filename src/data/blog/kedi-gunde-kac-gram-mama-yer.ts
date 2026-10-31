import type { BlogYazi } from './types';

export const kediGundeKacGramMamaYer: BlogYazi = {
  slug: 'kedi-gunde-kac-gram-mama-yer',
  baslik: 'Kedi Günde Kaç Gram Mama Yemeli?',
  ozet: 'Yetişkin kedinin günlük mama miktarı kiloya ve mamanın kalorisine göre hesaplanıyor. 3, 4, 5 ve 6 kiloluk kedi için örnek tablo, kısırlaştırma ve yaş etkisi.',
  kapakAlt:
    'Terazinin üstündeki kaba mama dolduran el ve bekleyen kedi',
  kategori: 'Beslenme',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Yetişkin bir kedinin günde kaç gram mama yemesi gerektiği gramla değil kaloriyle** hesaplanıyor, çünkü mamaların kalorisi birbirinden çok farklı. Örnek vermek gerekirse 4 kiloluk sağlıklı yetişkin bir kedi için başlangıç noktası günde yaklaşık **190 kilokalori**; bu, 100 gramında 400 kilokalori olan bir kuru mamada günde yaklaşık **48 grama** karşılık geliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu hesabın nasıl yapıldığını, 3 ile 6 kilo arasındaki kediler için örnek tabloyu, kısırlaştırmanın ve yaşın miktarı nasıl değiştirdiğini ve verilen miktarın doğru olup olmadığının nasıl anlaşılacağını Amerikan Hayvan Hastaneleri Birliği (AAHA) ile Amerikan Kedi Hekimleri Birliği\'nin (AAFP) kılavuzuna, Cornell Üniversitesi\'nin beslenme sayfasına ve kedilerin enerji ihtiyacı üzerine yapılmış bir meta-analize dayanarak anlatıyoruz.' },

    { kind: 'baslik', metin: 'Kedinin günlük kalori ihtiyacı nasıl hesaplanır?' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzu, yetişkin kedi için iyi bir başlangıç noktası olarak **dinlenme enerji ihtiyacının (RER)** hesaplanmasını öneriyor: **RER (günlük kilokalori) = 30 × kilo + 70.** Günlük enerji ihtiyacı ise bu değerin bir ihtiyaç katsayısıyla çarpılmasıyla bulunuyor; genç ve sağlıklı yetişkinlerde bu katsayı 1. Yani sağlıklı genç yetişkin bir kedide başlangıç miktarı RER\'in kendisi oluyor.' },
    { kind: 'liste', maddeler: [
      '**1. adım:** Kedinin kilosu alınır, örneğin 4 kg. Fazla kilolu kedide hangi kiloyla hesap yapılacağını veteriner hekim belirliyor.',
      '**2. adım:** Kilo 30 ile çarpılır: 4 × 30 = 120.',
      '**3. adım:** Sonuca 70 eklenir: 120 + 70 = 190 kilokalori.',
      '**4. adım:** Sonuç, mamanın 1 gramındaki kaloriye bölünür. 100 gramı 400 kilokalori olan kuru mamada 1 gram 4 kilokalori; 190 ÷ 4 yaklaşık 48 gram.',
    ]},
    { kind: 'paragraf', metin: 'Cornell Kedi Sağlığı Merkezi de kedilerin ne kadar yemesi gerektiğinin kediden kediye çok değiştiğini, kedinin ideal kilosunun belirlenmesinde ve mamanın buna göre ayarlanmasında veteriner hekimden yardım alınmasını belirtiyor.' },

    { kind: 'baslik', metin: 'Gram olarak ne kadar eder?' },
    { kind: 'tablo', basliklar: ['Kedinin kilosu', 'Günlük enerji (30 × kilo + 70)', 'Kuru mama (100 g = 400 kcal)', 'Yaş mama (100 g = 100 kcal)'], satirlar: [
      ['3 kg', '160 kcal', '40 g', '160 g'],
      ['4 kg', '190 kcal', '48 g', '190 g'],
      ['5 kg', '220 kcal', '55 g', '220 g'],
      ['6 kg', '250 kcal', '63 g', '250 g'],
    ]},
    { kind: 'paragraf', metin: 'Tablodaki gram sütunları **yalnız örnek.** Kuru mamada 100 gram için 400, yaş mamada 100 gram için 100 kilokalori varsayıldı; gerçek mamanın kalorisi farklıysa sonuç da değişiyor. Kalori değeri paketin üzerinde yazıyor ve hesabın o değerle yeniden yapılması gerekiyor. Cornell, mamaların su oranı, protein düzeyi ve kalori yoğunluğu bakımından birbirinden farklı olduğunu belirtiyor; konserve mamanın en az yüzde 75 nem içermesi de aynı gramın kuru mamadan çok daha az kalori taşımasının nedeni. Kuru ve yaş mamanın farkını [[kediler-icin-yas-mama-mi-kuru-mama-mi|kediler için yaş mama mı kuru mama mı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Hesap her kediye uyar mı?' },
    { kind: 'paragraf', metin: 'Hesap bir başlangıç noktası. Bermingham ve arkadaşlarının sağlıklı yetişkin kedilerle yapılmış çalışmaları birleştiren meta-analizinde, bakım için ortalama enerji ihtiyacı kilo başına günde 55,1 kilokalori bulundu. Yazarlar, yalnız kiloya dayanan değerlerin isabetli bir tahmin vermeyebileceğini, yaş, cinsiyet, kısırlaştırma durumu ve vücut yapısı bilindiğinde yorumun daha iyi olacağını belirtiyor. AAHA ve AAFP kılavuzu da enerji ihtiyacını yaş, vücut kondisyonu, kas kondisyonu, kısırlaştırma durumu, sağlık durumu ve hareket düzeyinin etkilediğini söylüyor.' },
    { kind: 'yanilgi', baslik: '"Paketteki gramaj her kediye uyar"', metin: 'Aynı kilodaki iki kedinin ihtiyacı yaşa, hareketine ve kısırlaştırılmış olup olmamasına göre farklı olabiliyor. Paketteki miktar ve yukarıdaki hesap başlangıçtır; kedinin kilosu ve vücut kondisyonu izlenerek ayarlanması gerekiyor.' },

    { kind: 'baslik', metin: 'Kısırlaştırma ve yaş miktarı nasıl değiştirir?' },
    { kind: 'paragraf', metin: 'AAHA ve AAFP kılavuzuna göre kısırlaştırma, özellikle erkek kedilerde obezite için bir risk etkeni ve kilo alımını önlemek için enerji kısıtlaması uygun olabiliyor. Kısırlaştırma sonrası aynı miktarda mamaya devam etmek bu yüzden dikkat gerektiriyor. Miktarın nasıl ayarlanacağını veteriner hekimle birlikte belirlemek önerilir. Kısırlaştırma zamanı için [[kediler-ne-zaman-kisirlastirilmali|kediler ne zaman kısırlaştırılmalı]] yazısına bakılabilir.' },
    { kind: 'paragraf', metin: 'Yaş da hesabı değiştiriyor. Aynı kılavuza göre 7-10 yaş arasındaki olgun yetişkin kedilerde günlük enerji ihtiyacı dinlenme ihtiyacına eşit olabiliyor, ancak kediye göre ayar yapılması gerekiyor. 10 yaşından büyük kedilerde ise dinlenme ihtiyacının yüzde 10-20 artırılması, bazı kedilerde yüzde 25\'e kadar çıkarılması gerekebiliyor. Örneğin 4 kiloluk bir kedide 190 kilokalorilik değer, yüzde 10-20 artışla yaklaşık 209-228 kilokaloriye çıkıyor. Yaşlı kedilerde düşük kilo da sık görülen bir sorun; bu yüzden kilonun düzenli izlenmesi önem taşıyor.' },
    { kind: 'uyari', metin: 'Fazla kilolu kedide yalnızca ana mamayı azaltmak vitamin ve mineral eksikliğine yol açabiliyor. AAHA ve AAFP kılavuzu, kilo verdirme için eksiksiz vitamin ve mineral sağlayan, kalorisi azaltılmış özel mamaları öneriyor. Bu mamaların seçimi ve miktarı veteriner hekimle birlikte belirlenmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Ödül mamaları ve serbest besleme' },
    { kind: 'paragraf', metin: 'Cornell, ödül mamalarının kedinin günlük kalorisinin yüzde 10-15\'ini geçmemesini öneriyor. 190 kilokalorilik bir kedi için bu, ödüller için günde yaklaşık 19-29 kilokalori demek ve bu payın günlük hesabın içinde değerlendirilmesi gerekiyor. Hangi yiyeceklerin hiç verilmemesi gerektiğini [[kedilere-zararli-yiyecekler|kedilere zararlı yiyecekler]] yazımızda ayrıca anlattık.' },
    { kind: 'paragraf', metin: 'Kabı sürekli dolu bırakmak da miktarın kontrolünü zorlaştırıyor. AAHA ve AAFP kılavuzu, serbest beslemenin kedi sahiplerinde yaygın bir yöntem olduğunu ve aşırı yemeye yatkınlık yaratabildiğini belirtiyor; sağlıklı kiloyu korumak için kalori alımının izlenmesi ve kontrol edilmesi gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Kedi doyunca kendiliğinden durur"', metin: 'Cornell, kedilerde beslenmeyle ilgili en sık sorunun obezite olduğunu belirtiyor. Kabın sürekli dolu olması, miktarın ölçülmesini ve kilonun izlenmesini ortadan kaldırmıyor.' },

    { kind: 'baslik', metin: 'Verilen miktarın doğru olup olmadığı nasıl anlaşılır?' },
    { kind: 'paragraf', metin: 'Hesaplanan miktar bir başlangıç; doğru miktar kilo ve vücut kondisyonu düzenli izlenerek bulunuyor. AAHA\'nın beslenme kılavuzu, vücut kondisyon puanı ve kas kondisyon puanıyla yapılan beslenme değerlendirmesinin ideal olarak her muayenede yapılmasını öneriyor. Dokuzluk ölçekte 5 ideal sayılıyor: bu puanda bel kaburgaların arkasında belli oluyor, kaburgalar hafif bir yağ tabakasının altında elle hissediliyor ve karın yağ yastığı en az düzeyde. Dokuzluk ölçekte 6 ve 7 fazla kilolu, 8 ve üzeri obez sayılıyor.' },
    { kind: 'paragraf', metin: 'Kilo yalnız mamayla değil harekete de bağlı. Kılavuz, bir çalışmada günde üç kez 10-15 dakikalık egzersiz seansının, mama kısıtlaması olmadan bir ayda vücut ağırlığında yaklaşık yüzde 1 azalmaya yol açtığını aktarıyor. Mama miktarıyla birlikte günlük oyunun da hesaba katılması bu yüzden yararlı.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Hesap gramla yapılır', 'Mamanın kalorisine göre yapılıyor'],
      ['Paketteki miktar her kediye uyar', 'Yaş, kilo, kısırlaştırma ve hareket ihtiyacı değiştiriyor'],
      ['Kısırlaştırma sonrası miktar aynı kalır', 'Kilo alma riski arttığı için yeniden değerlendirilmesi gerekiyor'],
      ['Ödüller hesaba girmez', 'Günlük kalorinin yüzde 10-15\'ini geçmemesi öneriliyor'],
    ]},
    { kind: 'uyari', metin: 'Cornell, yemeği reddeden ve kilo kaybeden her kedinin bir veteriner hekim tarafından muayene edilmesi gerektiğini belirtiyor. İştahta ani değişiklik, açıklanamayan kilo kaybı ya da aynı miktarı yediği hâlde hızla kilo alan bir kedi, mama miktarıyla açıklanamayabilir; veteriner hekime gösterilmesi gerekiyor. Kedinin yemeyi bırakması durumu için [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısına bakılabilir.' },
  ],
  kontrolListesi: [
    'Mamanın kalorisi etikette bulundu mu?',
    'Mama tartıyla mı ölçülüyor?',
    'Kedi düzenli tartılıyor mu?',
    'Ödüller günlük payın içinde mi?',
    'Kısırlaştırma sonrası pay azaldı mı?',
    'Kaburgalar elle hissediliyor mu?',
  ],
  sss: [
    { soru: 'Kedi günde kaç gram mama yer?', cevap: 'Kiloya ve mamanın kalorisine göre değişiyor. Örneğin 4 kiloluk sağlıklı yetişkin bir kedi için başlangıç noktası günde yaklaşık 190 kilokalori; 100 gramı 400 kilokalori olan kuru mamada bu yaklaşık 48 gram.' },
    { soru: '5 kiloluk kedi günde kaç gram mama yer?', cevap: 'Başlangıç hesabı 30 × 5 + 70 = 220 kilokalori veriyor. 100 gramı 400 kilokalori olan kuru mamada bu yaklaşık 55 grama, 100 gramı 100 kilokalori olan yaş mamada 220 grama karşılık geliyor. Gerçek miktar kedinin durumuna göre ayarlanıyor.' },
    { soru: 'Kedinin günlük kalori ihtiyacı nasıl hesaplanır?', cevap: 'AAHA ve AAFP kılavuzu başlangıç için dinlenme enerji ihtiyacını 30 × kilo + 70 olarak veriyor. Genç ve sağlıklı yetişkin kedilerde ihtiyaç katsayısı 1; yaşa ve duruma göre bu katsayı değişiyor.' },
    { soru: 'Kısırlaştırılmış kedi daha az mı yemeli?', cevap: 'Kısırlaştırma kilo alma riskini artırıyor ve enerji kısıtlaması uygun olabiliyor. Ancak miktarın ne kadar azaltılacağı kedinin kilosuna, yaşına ve vücut kondisyonuna göre değişiyor; bunu veteriner hekimle birlikte belirlemek gerekiyor.' },
    { soru: 'Yaşlı kedi daha mı az yer?', cevap: 'Hayır, 10 yaşından büyük kedilerde dinlenme ihtiyacının yüzde 10-20 artırılması, bazen yüzde 25\'e kadar çıkarılması gerekebiliyor. Yaşlı kedilerde düşük kilo da sık görülüyor; kilonun düzenli izlenmesi önerilir.' },
    { soru: 'Kediye ödül mamasını ne kadar vermeli?', cevap: 'Cornell, ödüllerin günlük kalorinin yüzde 10-15\'ini geçmemesini öneriyor. Örneğin günde 190 kilokalori gereken bir kedide bu, yaklaşık 19-29 kilokalori demek ve bu payın günlük hesabın içinde değerlendirilmesi gerekiyor.' },
    { soru: 'Kedi fazla kiloluysa mama kendi başıma azaltılır mı?', cevap: 'Önerilmez. Yalnızca ana mamayı azaltmak vitamin ve mineral eksikliğine yol açabiliyor. AAHA ve AAFP kılavuzu, bu amaçla kalorisi azaltılmış ve vitamin mineral dengesi sağlanmış özel mamaları öneriyor; plan ve mama veteriner hekimle belirlenmeli.' },
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
      kurum: 'AgResearch',
      yazarlar: 'Bermingham EN, Thomas DG, Morris PJ, Hawthorne AJ',
      baslik: 'Energy requirements of adult cats',
      dergi: 'British Journal of Nutrition',
      yil: 2010,
      kunye: '103(8):1083-1093',
      doi: '10.1017/S000711450999290X',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/20100376/',
    },
    {
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Cline MG, Burns KM, Coe JB, Downing R, Durzi T, Murphy M, Parker V',
      baslik: '2021 AAHA Nutrition and Weight Management Guidelines for Dogs and Cats',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2021,
      kunye: '57(4):153-178',
      doi: '10.5326/JAAHA-MS-7232',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34228790/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
  ],
};
