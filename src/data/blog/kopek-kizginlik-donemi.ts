import type { BlogYazi } from './types';

export const kopekKizginlikDonemi: BlogYazi = {
  slug: 'kopek-kizginlik-donemi',
  baslik: 'Köpek Kızgınlık Dönemi Ne Kadar Sürer? Belirtileri ve Evreleri',
  ozet: 'Köpeklerde kızgınlık, kanlı akıntının görüldüğü dönemle birlikte genellikle 2-3 hafta sürüyor ve çoğu köpekte yılda iki kez geliyor. Evreler, belirtiler ve sıklık.',
  kapakAlt:
    'Köpek kızgınlık dönemi konulu yazının kapak görseli; şehir parkında tasmayla yürürken sahibine bakan dişi bir köpek',
  kategori: 'Köpek',
  tarih: '2026-10-26',
  bloklar: [
    { kind: 'paragraf', metin: 'Dişi köpeklerde kızgınlık, kanlı akıntının başladığı dönemle birlikte **genellikle 2-3 hafta** sürüyor. Cornell Üniversitesi Veteriner Fakültesi\'ne göre en belirgin işaret olan kanlı akıntı çoğunlukla **14-21 gün** görülüyor. Köpeklerin çoğu **yılda iki kez**, yani 5 ile 11 ayda bir kızgınlığa giriyor; ilk kızgınlık 6 ay ile 2 yaş arasında geliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kızgınlığın evrelerini, her evrede görülen belirtileri, köpeğin ne zaman çiftleşmeye hazır olduğunu ve kısırlaştırmanın ne zaman yapılabileceğini Cornell\'in yayınları ve hakemli çalışmalarla anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Evre', 'Süre', 'Ne görülür'], satirlar: [
      ['Kızgınlık öncesi (proöstrus)', 'Yaklaşık 6-11 gün', 'Kanlı akıntı, vulvada şişlik; erkekleri çekiyor ama kabul etmiyor'],
      ['Kızgınlık (östrus)', 'Yaklaşık 5-9 gün (1-20)', 'Akıntı açık renge dönebiliyor; erkeği kabul ediyor'],
      ['Kızgınlık sonrası (diöstrus)', 'Yaklaşık 2 ay', 'Erkeği artık kabul etmiyor ve çekmiyor'],
      ['Dinlenme (anöstrus)', 'Bir sonraki kızgınlığa kadar', 'Rahim kendini onarıyor'],
    ]},

    { kind: 'baslik', metin: 'Köpek kızgınlık dönemi ne kadar sürer?' },
    { kind: 'paragraf', metin: 'Cornell\'e göre kızgınlık öncesi evre yaklaşık **6-11 gün**, köpeğin çiftleşmeyi kabul ettiği asıl kızgınlık evresi ise yaklaşık **5-9 gün** sürüyor; bu evrenin 1 ile 20 gün arasında değişebildiği de bildiriliyor. İki evre birlikte, sahiplerin "kızgınlık" diye gördüğü 2-3 haftalık dönemi oluşturuyor.' },
    { kind: 'paragraf', metin: 'Köpekler arasında farklar büyük. Cornell Üniversitesi\'nden Concannon ve arkadaşlarının 1989 tarihli çalışmasında kızgınlık öncesi evre de kızgınlık evresi de **3 ile 21 gün** arasında değişiyor. Bu yüzden kendi köpeğinizin döngüsünü birkaç kez not etmek, ortalamadan daha iyi bir rehber oluyor.' },

    { kind: 'baslik', metin: 'Köpeğin kızgınlıkta olduğu nasıl anlaşılır?' },
    { kind: 'liste', maddeler: [
      '**Kanlı akıntı:** En belirgin işaret; çoğunlukla 14-21 gün sürüyor.',
      '**Vulvada şişlik:** Kızgınlık öncesi evrede östrojenin etkisiyle başlıyor.',
      '**Erkekleri çekme:** Kızgınlık öncesinde erkek köpekler ilgi gösteriyor, dişi onlarla oynayabiliyor ama çiftleşmeyi kabul etmiyor.',
      '**Çiftleşmeyi kabul:** Asıl kızgınlık evresinde dişi erkeği kabul ediyor; akıntı saman rengine dönebiliyor.',
    ]},
    { kind: 'yanilgi', baslik: '"Akıntı açıldıysa kızgınlık bitmiştir"', metin: 'Akıntının açık renge dönmesi çoğu zaman köpeğin çiftleşmeyi kabul ettiği asıl kızgınlık evresinin başladığını gösteriyor. Yani hamilelik riskinin en yüksek olduğu dönem tam da bu. Kızgınlığın bittiği, dişinin erkeği artık kabul etmemesiyle anlaşılıyor.' },

    { kind: 'baslik', metin: 'Köpekler yılda kaç kez kızgınlığa girer?' },
    { kind: 'paragraf', metin: 'Cornell\'e göre köpeklerin çoğu yılda iki kez, yani 5 ile 11 ayda bir kızgınlığa giriyor; Basenji ve Tibet Mastifi gibi bazı ırklar ise genellikle yılda bir kez. Concannon\'un 2011 tarihli derlemesi iki kızgınlık arasındaki sürenin **5-12 ay** arasında değiştiğini ve çoğunlukla **6-7 ay** olduğunu bildiriyor. Kedilerin aksine köpeklerin döngüsü çoğunlukla mevsime bağlı değil.' },
    { kind: 'paragraf', metin: 'İlk kızgınlık **6 ay ile 24 ay** arasında geliyor; küçük ırklar daha erken başlama eğiliminde. Kızgınlık bittikten ya da doğumdan sonra rahmin kendini onarması yaklaşık dört ay sürüyor.' },
    { kind: 'yanilgi', baslik: '"Küçük köpek henüz kızgınlığa girmez"', metin: 'Küçük ırklar daha erken olgunlaşma eğiliminde ve ilk kızgınlık 6 aylıkken gelebiliyor. İlk kızgınlığın tarihini kaçırmak, istenmeyen bir hamileliğe yol açabiliyor.' },

    { kind: 'baslik', metin: 'Kızgınlıktaki köpek kısırlaştırılır mı?' },
    { kind: 'paragraf', metin: 'Cornell, köpek kızgınlıktaysa ameliyat için **kızgınlıktan sonra yaklaşık iki ay** beklenmesini öneriyor. Gerekirse kızgınlık sırasında da yapılabiliyor ama beklemek ameliyatı kolaylaştırıyor ve kanama riskini azaltıyor. Kısırlaştırma kızgınlığı ve hamileliği önlüyor; ayrıca rahim iltihabını (pyometra) önlüyor ve birçok köpekte meme kanseri riskini düşürüyor. Doğru yaşı [[kopek-ne-zaman-kisirlastirilmali|köpek ne zaman kısırlaştırılmalı]] yazımızda ırk ve kiloya göre anlattık.' },

    { kind: 'baslik', metin: 'Kızgınlık döneminde nelere dikkat edilir?' },
    { kind: 'liste', maddeler: [
      '**Gezdirme:** Bu dönemde köpeğin tasmayla ve sürekli kontrol altında gezdirilmesi istenmeyen çiftleşmeyi önlüyor. Genel kuralları [[kopek-gezdirme-kurallari|köpek gezdirme kuralları]] yazımızda topladık.',
      '**Takvim:** Kızgınlığın başladığı ve bittiği günleri not etmek, bir sonrakini tahmin etmeye yarıyor.',
      '**Hamilelik ihtimali:** Çiftleşme olduysa hamilelik süresi ve belirtileri için [[kopek-kac-gunde-dogurur|köpek kaç günde doğurur]] yazımıza bakabilirsiniz.',
    ]},
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Kızgınlık yalnız kanamanın olduğu birkaç gündür', 'Akıntıyla birlikte genellikle 2-3 hafta sürüyor'],
      ['Akıntı açıldıysa tehlike geçmiştir', 'Açık akıntı çoğu zaman en verimli dönemi gösteriyor'],
      ['Köpekler ilkbaharda kızgınlığa girer', 'Döngü çoğunlukla mevsime bağlı değil'],
      ['Kızgınlıkta kısırlaştırma yapılamaz', 'Yapılabiliyor ama iki ay beklemek önerilir'],
    ]},
    { kind: 'uyari', metin: 'Kızgınlık dışında görülen ya da kötü kokulu akıntı, iştahsızlık veya halsizlik, kızgınlık sanılıp beklenmemesi ve vakit kaybetmeden veteriner hekime gösterilmesi gereken bir tablodur.' },
  ],
  kontrolListesi: [
    'Kızgınlık başlangıcı not edildi mi?',
    'Gezide tasma hep takılı mı?',
    'Bahçe ve kapılar kapalı mı?',
    'Kısırlaştırma hekimle konuşuldu mu?',
    'Akıntının rengi izleniyor mu?',
  ],
  sss: [
    { soru: 'Köpek kızgınlık dönemi ne kadar sürer?', cevap: 'Kanlı akıntının görüldüğü dönemle birlikte genellikle 2-3 hafta sürüyor. Kızgınlık öncesi evre yaklaşık 6-11 gün, çiftleşmenin kabul edildiği asıl kızgınlık yaklaşık 5-9 gün.' },
    { soru: 'Köpekler yılda kaç kez kızgınlığa girer?', cevap: 'Çoğu köpek yılda iki kez, yani 5 ile 11 ayda bir kızgınlığa giriyor. Basenji ve Tibet Mastifi gibi bazı ırklar yılda bir kez giriyor.' },
    { soru: 'Köpek ilk kez kaç aylıkken kızgınlığa girer?', cevap: 'İlk kızgınlık 6 ay ile 24 ay arasında geliyor. Küçük ırklar daha erken, büyük ırklar daha geç başlama eğiliminde.' },
    { soru: 'Köpek kızgınlık belirtileri nelerdir?', cevap: 'Kanlı akıntı, vulvada şişlik, erkek köpeklerin ilgisini çekme ve asıl kızgınlık evresinde erkeği kabul etme. Kanlı akıntı çoğunlukla 14-21 gün sürüyor.' },
    { soru: 'Kızgınlıktaki köpek kısırlaştırılır mı?', cevap: 'Yapılabiliyor ama Cornell, ameliyatı kolaylaştırmak ve kanama riskini azaltmak için kızgınlıktan sonra yaklaşık iki ay beklenmesini öneriyor.' },
    { soru: 'Köpek kızgınlıkta ne zaman hamile kalır?', cevap: 'Akıntının açık renge dönebildiği ve dişinin erkeği kabul ettiği asıl kızgınlık evresinde. Bu evre ortalama 5-9 gün sürüyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine',
      baslik: 'Dog estrous cycles',
      adres: 'https://www.vet.cornell.edu/dog-estrous-cycles',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine',
      yazarlar: 'Concannon PW',
      baslik: 'Reproductive cycles of the domestic bitch',
      dergi: 'Animal Reproduction Science',
      yil: 2011,
      kunye: '124(3-4):200-210',
      doi: '10.1016/j.anireprosci.2010.08.028',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21055888/',
    },
    {
      kurum: 'Cornell University, New York State College of Veterinary Medicine',
      yazarlar: 'Concannon PW, McCann JP, Temple M',
      baslik: 'Biology and endocrinology of ovulation, pregnancy and parturition in the dog',
      dergi: 'Journal of Reproduction and Fertility. Supplement',
      yil: 1989,
      kunye: '39:3-25',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/2695640/',
    },
  ],
};
