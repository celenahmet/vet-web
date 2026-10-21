import type { BlogYazi } from './types';

export const kopekGundeKacGramMamaYer: BlogYazi = {
  slug: 'kopek-gunde-kac-gram-mama-yer',
  baslik: 'Köpek Günde Kaç Gram Mama Yer? Kiloya Göre Hesaplama',
  ozet: 'Köpeğin günlük mama miktarı kiloya ve mamanın kalorisine göre hesaplanıyor. 5, 10, 20 ve 30 kiloluk köpek için örnek tablo, adım adım hesap ve ödül payı.',
  kapakAlt:
    'Köpek mama miktarı konulu yazının kapak görseli; mutfakta mama kabının başında bekleyen golden retriever, yanında mama tartılan bir mutfak tartısı',
  kategori: 'Beslenme',
  tarih: '2026-10-27',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpeğin günde kaç gram mama yemesi gerektiği **gramla değil kaloriyle** hesaplanıyor, çünkü mamaların kalorisi birbirinden çok farklı. Örnek vermek gerekirse 10 kiloluk yetişkin bir ev köpeği günde yaklaşık **530-590 kilokaloriye** ihtiyaç duyuyor; 100 gramında 350 kilokalori olan bir mamada bu, günde yaklaşık **150-170 grama** karşılık geliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu hesabın nasıl yapıldığını, farklı kilolar için örnek tabloyu, kısırlaştırmanın ve hareketin ihtiyacı nasıl değiştirdiğini ve miktarın doğru olup olmadığının nasıl anlaşılacağını Amerikan Hayvan Hastaneleri Birliği\'nin (AAHA) beslenme kılavuzu ve köpeklerin enerji ihtiyacı üzerine yapılmış bir meta-analizle anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Köpeğin kilosu', 'Günlük enerji (hareketsiz - hareketli)', 'Günlük mama (100 g = 350 kcal)'], satirlar: [
      ['5 kg', '318-351 kcal', '91-100 g'],
      ['10 kg', '534-590 kcal', '153-169 g'],
      ['20 kg', '898-993 kcal', '257-284 g'],
      ['30 kg', '1218-1346 kcal', '348-385 g'],
    ]},
    { kind: 'paragraf', metin: 'Tablodaki enerji değerleri, ABD Ulusal Araştırma Konseyi\'nin (NRC) yetişkin ev köpekleri için kullandığı ve meta-analizde aktarılan değerlerle hesaplandı: hareketsiz ev köpeği için vücut ağırlığının 0,75. kuvvetinin kilogramı başına günde **95**, hareketli ev köpeği için **105 kilokalori.** Gram sütunu yalnız örnek; kendi mamanızın kalorisi farklıysa sonuç da değişiyor.' },

    { kind: 'baslik', metin: 'Köpeğin günlük kalori ihtiyacı nasıl hesaplanır?' },
    { kind: 'paragraf', metin: 'AAHA\'nın 2021 kılavuzu hesabın temelini **dinlenme enerji ihtiyacı (RER)** olarak veriyor: **RER = 70 × (kilo)^0,75.** Bu, köpeğin hiç hareket etmeden harcadığı enerji. Günlük ihtiyaç ise bu değerin yaşam evresine ve harekete göre bir katsayıyla çarpılmasıyla bulunuyor; kılavuz bu katsayıların **genel tahminler** olduğunu, gerçek ihtiyacın köpeğin kilosu izlenerek ayarlanması gerektiğini vurguluyor.' },
    { kind: 'liste', maddeler: [
      '**1. adım:** Köpeğin ideal kilosu alınır, örneğin 10 kg.',
      '**2. adım:** Kilonun 0,75. kuvveti bulunur; hesap makinesinin üs (x^y) tuşuyla 10^0,75 yaklaşık 5,62.',
      '**3. adım:** Dinlenme ihtiyacı için 70 ile çarpılır: yaklaşık 394 kcal.',
      '**4. adım:** Ev köpeğinin günlük ihtiyacı için 5,62, hareketsizse 95, hareketliyse 105 ile çarpılır: yaklaşık 534-590 kcal.',
      '**5. adım:** Sonuç, mamanın 1 gramındaki kaloriye bölünür. 100 gramı 350 kcal olan mamada 1 gram 3,5 kcal; 534 ÷ 3,5 yaklaşık 153 gram.',
    ]},
    { kind: 'paragraf', metin: 'Hesap, köpeğin şimdiki kilosuna değil **ideal kilosuna** göre yapılıyor; AAHA da hesabın ideal kiloya dayandırılmasını öneriyor. Fazla kilolu bir köpek için şimdiki kiloyla yapılan hesap, kilonun korunmasına yol açıyor.' },

    { kind: 'baslik', metin: 'Paketin üzerindeki tablo yeterli mi?' },
    { kind: 'paragraf', metin: 'Paketteki tablo iyi bir başlangıç noktası ama ortalama bir köpek için yazılıyor. Bermingham ve arkadaşlarının 29 yayındaki 70 köpek grubunu birleştiren 2014 tarihli meta-analizi, köpeklerin enerji ihtiyacının **çok geniş bir aralıkta** değiştiğini gösterdi: ortalama, vücut ağırlığının 0,75. kuvvetinin kilogramı başına günde 142,8 kilokalori, standart sapma ise 55,3. Yazarlar ihtiyacın yalnız kiloya bakılarak tahmin edilmesinin isabetli olmayabileceğini, köpeğin yaşam biçiminin ve kısırlaştırılmış olup olmamasının da hesaba katılması gerektiğini belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Paketteki gramaj her köpeğe uyar"', metin: 'Aynı kilodaki iki köpeğin ihtiyacı, hareket düzeyine ve kısırlaştırılmış olup olmamasına göre belirgin biçimde farklı olabiliyor. Paketteki miktar başlangıçtır; köpeğin kilosu ve vücut kondisyonu izlenerek ayarlanması gerekiyor.' },

    { kind: 'baslik', metin: 'Kısırlaştırılmış köpek daha az mı yemeli?' },
    { kind: 'paragraf', metin: 'Evet. AAHA, kısırlaştırmadan sonra enerji ihtiyacının azaldığını ve mama miktarının azaltılması gerektiğini belirtiyor. Bermingham\'ın meta-analizinde de kısırlaştırılmış köpeklerin enerji ihtiyacı kısırlaştırılmamış köpeklerden anlamlı olarak düşük çıktı. Kısırlaştırma sonrası aynı miktarda mamaya devam etmek, kilo almanın en yaygın nedenlerinden biri.' },

    { kind: 'baslik', metin: 'Ödül mamaları ne kadar olmalı?' },
    { kind: 'paragraf', metin: 'AAHA, ödül mamaları, masa yemekleri ve diğer ek yiyeceklerin günlük kalorinin **yüzde 10\'unu** geçmemesini, kalan **en az yüzde 90\'ın** besin açısından tam ve dengeli ana mamadan gelmesini öneriyor. 10 kiloluk bir köpekte bu, ödüller için günde en fazla 50-60 kilokalori demek. Hangi yiyeceklerin hiç verilmemesi gerektiğini [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazımızda anlattık.' },
    { kind: 'yanilgi', baslik: '"Kap boşaldıkça doldurmak yeterli"', metin: 'AAHA, köpeklerde kilo artışının en önemli nedenlerinden birinin ana mamanın fazla verilmesi olduğunu ve sahiplerin miktarı sonradan azaltmakta zorlandığını belirtiyor. Mamayı göz kararıyla değil tartıyla ölçmek bu yüzden işe yarıyor.' },

    { kind: 'baslik', metin: 'Mama miktarı doğru mu, nasıl anlaşılır?' },
    { kind: 'paragraf', metin: 'AAHA\'ya göre hesaplanan miktar bir başlangıç; doğru miktarı köpeğin **kilosunu ve vücut kondisyonunu düzenli izleyerek** bulmak gerekiyor. Kaburgalar hafif bir yağ tabakasının altında elle kolayca hissediliyorsa ve yukarıdan bakınca bel belirgin görünüyorsa miktar büyük ihtimalle uygun. Vücut kondisyonunun nasıl değerlendirildiğini [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazımızda anlattık.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Köpek günde kilosunun yüzde şu kadarı kadar yer', 'Hesap gramla değil, mamanın kalorisiyle yapılıyor'],
      ['Paketteki tablo her köpeğe uyar', 'Hareket ve kısırlaştırma ihtiyacı belirgin biçimde değiştiriyor'],
      ['Hesap şimdiki kiloyla yapılır', 'İdeal kiloyla yapılması öneriliyor'],
      ['Ödül mamaları hesaba girmez', 'Günlük kalorinin en fazla yüzde 10\'u olmalı'],
    ]},
    { kind: 'paragraf', metin: 'Yavru köpeklerin ihtiyacı yetişkinlerden farklı ve büyüme hızına göre değişiyor; büyük ve dev ırk yavrularda büyümenin kontrollü olması ayrıca önemli. Yavrular için miktarı mamanın büyüme tablosuna ve veteriner hekimin değerlendirmesine göre belirlemek gerekiyor.' },
    { kind: 'uyari', metin: 'İştahta ani artış ya da azalma, açıklanamayan kilo kaybı ya da aynı miktarı yediği hâlde hızla kilo alan bir köpek, mama miktarıyla açıklanmayabilir; veteriner hekime gösterilmesi gereken bir durumdur.' },
  ],
  kontrolListesi: [
    'Mamanın kalorisi etikette bulundu mu?',
    'Mama tartıyla mı ölçülüyor?',
    'Köpek ayda bir tartılıyor mu?',
    'Ödüller günlük payın onda biri mi?',
    'Kısırlaştırma sonrası mama azaldı mı?',
    'Kaburgalar elle hissediliyor mu?',
  ],
  sss: [
    { soru: 'Köpek günde kaç gram mama yer?', cevap: 'Kiloya ve mamanın kalorisine göre değişiyor. Örneğin 10 kiloluk yetişkin bir ev köpeği günde yaklaşık 530-590 kcal\'e ihtiyaç duyuyor; 100 gramı 350 kcal olan mamada bu yaklaşık 150-170 gram.' },
    { soru: '20 kiloluk köpek günde kaç gram mama yer?', cevap: 'Yaklaşık 900-990 kcal\'lik bir günlük ihtiyaç bekleniyor; 100 gramı 350 kcal olan bir mamada bu, günde yaklaşık 257-284 grama karşılık geliyor.' },
    { soru: 'Köpeğin kalori ihtiyacı nasıl hesaplanır?', cevap: 'Dinlenme ihtiyacı 70 ile ideal kilonun 0,75. kuvvetinin çarpımıyla bulunuyor. Günlük ihtiyaç bu değerin yaşam evresine ve harekete göre bir katsayıyla çarpılmasıyla tahmin ediliyor.' },
    { soru: 'Kısırlaştırılmış köpek daha az mı yemeli?', cevap: 'Evet. Kısırlaştırmadan sonra enerji ihtiyacı azalıyor; aynı miktarda mamaya devam etmek kilo alımına yol açabiliyor.' },
    { soru: 'Köpeğe günde kaç öğün mama verilir?', cevap: 'Günlük miktar hesaplandıktan sonra öğünlere bölünüyor. Öğün sayısını köpeğin yaşı ve sağlık durumuna göre veteriner hekimle belirlemek doğru oluyor.' },
    { soru: 'Ödül mamaları ne kadar verilmeli?', cevap: 'AAHA, ödül ve ek yiyeceklerin günlük kalorinin en fazla yüzde 10\'u olmasını öneriyor. Kalan en az yüzde 90 tam ve dengeli ana mamadan gelmeli.' },
  ],
  kaynaklar: [
    {
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Cline MG, Burns KM, Coe JB, Downing R, Durzi T, Murphy M ve ark.',
      baslik: '2021 AAHA Nutrition and Weight Management Guidelines for Dogs and Cats',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2021,
      kunye: '57(4):153-178',
      doi: '10.5326/JAAHA-MS-7232',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34228790/',
    },
    {
      kurum: 'AgResearch · Massey University · University of Liverpool',
      yazarlar: 'Bermingham EN, Thomas DG, Cave NJ, Morris PJ, Butterwick RF, German AJ',
      baslik: 'Energy requirements of adult dogs: a meta-analysis',
      dergi: 'PLoS One',
      yil: 2014,
      kunye: '9(10):e109681',
      doi: '10.1371/journal.pone.0109681',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/25313818/',
    },
  ],
};
