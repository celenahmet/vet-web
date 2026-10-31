import type { BlogYazi } from './types';

export const kopekDisleriNasilFircalanir: BlogYazi = {
  slug: 'kopek-disleri-nasil-fircalanir',
  baslik: 'Köpeklerin Dişleri Nasıl Fırçalanır?',
  ozet: 'Köpeğin dişleri en iyi her gün fırçalandığında temizleniyor. Köpek macunu, kademeli alıştırma ve fırçalama yöntemi bu yazıda anlatılıyor.',
  kapakAlt:
    'Beagle köpeğin dişlerini fırçalayan el',
  kategori: 'Köpek',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpeğin dişleri en iyi, her gün fırçalandığında temizleniyor; bunun için köpek diş macunu kullanılması, diş etiyle dişin buluştuğu çizgiye de ulaşılması ve köpeğin kademeli olarak, ödüllerle alıştırılması gerekiyor.** Veteriner ağız bakımı çalışmalarında günlük fırçalama, ev ortamında dişleri temiz tutmanın en etkili yolu olarak kabul ediliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda fırçalamanın neden bu kadar önemli olduğunu, nelerin hazırlanması gerektiğini, köpeğin fırçalamaya nasıl alıştırıldığını, fırçalama sırasında nelere dikkat edildiğini ve ne zaman veteriner hekime başvurulması gerektiğini anlatıyoruz. Yazı bir tedavi önerisi değil, ev bakımı için bir rehberdir.' },

    { kind: 'tablo', basliklar: ['Yöntem', 'Çalışmalarda görülen'], satirlar: [
      ['Fırça ve köpek macunuyla günlük fırçalama', 'Plak birikimini kontrol etmede günlük çiğneme ve diş diyetinden üç kattan fazla etkili'],
      ['Günlük ya da gün aşırı fırçalama', 'Haftada bir ya da iki haftada bir fırçalamaya göre anlamlı biçimde daha iyi'],
      ['Naylon eldiven ya da mikrofiber parmak bezi', 'Beş haftalık günlük kullanımda diş eti iltihabını ve plağı azalttı'],
      ['Günlük diş çiğnemesi ya da diş diyeti', 'Fırçalamadan daha değişken ve daha zayıf sonuç verdi'],
    ]},

    { kind: 'baslik', metin: 'Dişlerin fırçalanması neden gerekiyor?' },
    { kind: 'paragraf', metin: 'Diş eti ve dişi tutan dokular, dişin üzerini kaplayan plak denen bakteri tabakası yüzünden iltihaplanıyor. Diş fırçalanmadığında bu tabaka kendiliğinden gitmiyor. İsveç Tarım Bilimleri Üniversitesi\'nden Olsén ve ekibinin 2021 tarihli çalışmasına göre plak, diş temizliğinden hemen sonra yeniden oluşmaya başlıyor; fırçalanmayan dişte plağın mineralleşmiş hâli olan diş taşı 2 ila 3 gün içinde oluşmaya başlayabiliyor.' },
    { kind: 'paragraf', metin: 'Aynı makale, 3 yaşın üzerindeki köpeklerin yüzde 80\'inde periodontal hastalığın görüldüğünü bildiriyor. Köpeğin yaşını bilmek bu açıdan önemli; yaş hesabı için [[kopek-yasi-hesaplama|köpek yaşı hesaplama]] yazımıza bakılabilir. Makale ayrıca diş eti iltihabının günlük fırçalamayla on gün içinde geri dönebildiğini, ancak sonucun korunması için fırçalamanın sürmesi gerektiğini aktarıyor.' },
    { kind: 'yanilgi', baslik: '"Haftada bir fırçalamak yeter"', metin: 'Harvey ve ekibinin 28 günlük kontrollü çalışmasında günlük ya da gün aşırı fırçalama, haftada bir ya da iki haftada bir fırçalamaya göre istatistiksel olarak anlamlı biçimde daha iyi sonuç verdi. Yazarlar günlük fırçalamayı öneriyor.' },

    { kind: 'baslik', metin: 'Başlamadan önce hazırlanacaklar' },
    { kind: 'liste', maddeler: [
      'Köpek için üretilmiş diş macunu',
      'Köpeğin ağzına uygun boyutta bir diş fırçası ya da parmağa takılan bir fırça ya da bez',
      'Köpeğin sevdiği küçük ödüller',
      'Telaşsız, köpeğin sakin olduğu bir zaman',
    ]},
    { kind: 'paragraf', metin: 'Macun seçimi önemli. ASPCA, ksilitol adlı tatlandırıcının sakız, şeker, fırın ürünleri ve diş macunu gibi birçok üründe kullanıldığını, köpeklerde kan şekerinde düşmeye ve karaciğer hasarına yol açabildiğini bildiriyor. Bu yüzden köpek için üretilmiş bir macun seçilmesi ve içerik etiketine bakılması öneriliyor.' },
    { kind: 'uyari', metin: 'Köpeğin ksilitol içeren bir ürünü yediğinden şüpheleniliyorsa beklemeden, vakit kaybetmeden veteriner hekime başvurulması gerekiyor. Evde müdahale denenmemeli. Ayrıntılar için [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] ve [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazılarına bakılabilir.' },

    { kind: 'baslik', metin: 'Köpeği fırçalamaya kademeli alıştırmak' },
    { kind: 'paragraf', metin: 'Köpekler diş fırçalamayı rahatsız edici ve stresli bulabiliyor. Olsén ve ekibi, köpeğin fırçalamayı kabul etmesi için eğitimin kademeli olması ve ödül ile övgü gibi olumlu pekiştirme içermesi gerektiğini belirtiyor; aksi hâlde sahiple köpek arasındaki bağ olumsuz etkilenebiliyor.' },
    { kind: 'liste', maddeler: [
      'Önce köpeğin ağzına ve dudaklarına dokunmaya alıştırılması, her adımdan sonra ödül verilmesi',
      'Ardından macunun parmakla tattırılması',
      'Sonra parmağın ya da bezin dişlere sürülmesi',
      'En son fırçanın ağza alıştırılması ve süre kısa tutularak fırçalamaya geçilmesi',
    ]},
    { kind: 'paragraf', metin: 'Çalışmada köpekler 35 gün boyunca her gün temizlendi ve ilk güne göre son günde stres puanları anlamlı biçimde düşmüştü; yani köpekler zamanla alıştı. Stres düzeyi, korku, kaygı ve stres belirtilerini değerlendiren bir ölçekle izlendi. Köpek belirgin biçimde rahatsız oluyorsa zorlamamak ve bir adım geri dönmek gerekiyor.' },

    { kind: 'baslik', metin: 'Fırçalama sırasında nelere dikkat ediliyor?' },
    { kind: 'paragraf', metin: 'Aynı çalışmada her dişin yanak tarafı, köpek dişleri, küçük azılar ve üst çene büyük azıları günde bir dakika temizlendi. Diş eti çizgisine ulaşmak önemli: yazarlara göre bu bölgedeki plak diş eti iltihabına ve ilerleyerek periodontite yol açabiliyor. Harvey ve ekibinin çalışmasında 28 günlük fırçalama süresince ağız dokularında yaralanma görülmedi.' },
    { kind: 'paragraf', metin: 'Olsén ve ekibi, günlük fırçalamayı bir alışkanlık hâline getirmenin zor olabildiğini de belirtiyor. Her gün mümkün olmazsa gün aşırı fırçalama da haftalık fırçalamadan daha iyi sonuç verdi.' },

    { kind: 'baslik', metin: 'Fırça kabul edilmiyorsa alternatifler' },
    { kind: 'paragraf', metin: 'Olsén ve ekibinin çalışmasında manuel fırça, ultrasonik fırça, naylon eldiven ve mikrofiber parmak bezi, beş hafta boyunca günlük kullanıldığında dört yöntem de diş eti iltihabını ve plağı azalttı. Yazarlar, bezle temizliğin etkisini günlük fırçalamaya benzer buldu. Ancak elektrikli fırçada köpekler daha ilk alıştırmada çalışmanın belirlediği stres sınırını aştı, bu yüzden elektrikli fırçanın etkisi incelenemedi.' },
    { kind: 'paragraf', metin: 'Naylon eldivenin üreticisi diş etine sürülmemesini öneriyor. Yazarlar eldivenin ne kadar sert bastırıldığının ve her gün ne kadar süre kullanıldığının yaralanma açısından önem taşıyabileceğini belirtiyor. Bu nedenle bastırmadan, nazik hareketlerle ilerlenmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Çiğneme ürünleri fırçanın yerini tutmuyor' },
    { kind: 'paragraf', metin: 'Allan ve ekibinin Glasgow\'daki bir veteriner hastanesinde yürüttüğü çalışmada 22 köpek, rutin diş temizliğinden sonra 6 hafta boyunca günlük fırçalama, günlük bir diş çiğnemesi ya da reçeteli bir diş diyetinden birine ayrıldı. Günlük fırçalama, plak birikimini kontrol etmede çiğneme ürününe ve diyete göre üç kattan fazla etkili bulundu.' },
    { kind: 'yanilgi', baslik: '"Çiğneme oyuncağı ya da kuru mama dişleri temizler"', metin: 'Aynı çalışmada çiğneme ürünü ve diyet grubu birbirinden anlamlı biçimde farklı değildi ve her ikisinde de sonuçların değişkenliği fırçalama grubundan çok daha fazlaydı. Bu ürünler fırçalamanın yerine değil, yanına konabilecek şeyler olarak düşünülmeli.' },

    { kind: 'baslik', metin: 'Veteriner hekime ne zaman başvurulmalı?' },
    { kind: 'paragraf', metin: 'Amerikan Hayvan Hastaneleri Birliği\'nin (AAHA) 2019 tarihli köpek ve kedi diş bakımı rehberi, önleyici ağız bakımının ve sahibin bilgilendirilmesinin ağrıyı ve periodontal hastalığın olumsuz etkilerini azaltmadaki rolünü vurguluyor. Fırçalama evde yapılır ama ağızdaki bir durumun değerlendirilmesi veteriner hekimin işidir.' },
    { kind: 'uyari', metin: 'Fırçalama sırasında köpek acı gösteriyor, ağzına dokundurmuyor, diş etinde kanama ya da şişlik görülüyor, yemek yemeyi bırakıyor veya çiğnerken zorlanıyorsa fırçalamaya ara verip veteriner hekime başvurulması gerekiyor. Belirtilerden hastalık çıkarmaya çalışmak ve evde ilaç ya da ürün denemek önerilmez.' },
    { kind: 'paragraf', metin: 'Aynı konu kediler için de geçerli: kedilerde fırçalamanın nasıl yapıldığını [[kedilerin-disleri-nasil-temizlenir|kedilerin dişleri nasıl temizlenir]] yazısında anlattık. Genel sağlık kontrolleri için [[kedi-kopek-check-up-ne-zaman|kedi ve köpek check-up ne zaman]] yazısı da faydalı olabilir.' },
  ],
  kontrolListesi: [
    'Köpek macunu kullanılıyor mu?',
    'Ksilitol içeriği kontrol edildi mi?',
    'Fırçalamaya kademeli başlandı mı?',
    'Ödül hazır mı?',
    'Diş eti çizgisine ulaşılıyor mu?',
    'Ağız ağrısı belirtisi var mı?',
  ],
  sss: [
    { soru: 'Köpeğin dişleri günde kaç kez fırçalanmalı?', cevap: 'Günde bir kez fırçalamak öneriliyor. 28 günlük kontrollü bir çalışmada her gün ya da gün aşırı fırçalama, haftada bir ya da iki haftada bir fırçalamaya göre anlamlı biçimde daha iyi sonuç verdi. Her gün mümkün olmuyorsa gün aşırı fırçalama da haftalıktan daha etkili görünüyor.' },
    { soru: 'İnsan diş macunuyla köpeğin dişi fırçalanır mı?', cevap: 'İnsan macunu yerine köpek için üretilmiş macun kullanılması öneriliyor. ASPCA, ksilitolün diş macunu gibi birçok üründe kullanıldığını ve köpeklerde kan şekerinde düşmeye ve karaciğer hasarına yol açabildiğini bildiriyor. Etiketi kontrol etmek ve emin olunmayan durumda veteriner hekime danışmak gerekiyor.' },
    { soru: 'Köpek fırçadan hoşlanmıyorsa dişleri nasıl temizlenir?', cevap: 'Naylon eldiven ya da mikrofiber parmak bezi bir seçenek olabilir. Beş haftalık bir çalışmada bu ürünlerin günlük kullanımı diş eti iltihabını ve plağı azalttı ve yazarlar etkiyi günlük fırçalamaya benzer buldu. Hangi yöntemin uygun olduğunu veteriner hekimle konuşmak iyi olur.' },
    { soru: 'Köpek fırçalamaya alışmazsa ne yapılır?', cevap: 'Alıştırmanın daha yavaş ve ödüllerle yapılması gerekiyor. Bir çalışmada köpeklerin stres puanı 35 günlük günlük uygulamada anlamlı biçimde azaldı, yani zamanla alıştılar. Köpek sürekli kaçıyor, kaygı gösteriyor ya da ağzını korumaya çalışıyorsa zorlamadan veteriner hekime danışılması önerilir.' },
    { soru: 'Çiğneme ürünleri fırçalamanın yerini tutar mı?', cevap: 'Çalışmada tutmadı. 22 köpekle 6 hafta süren bir araştırmada günlük fırçalama, plak birikimini kontrol etmede günlük diş çiğnemesinden ve reçeteli diş diyetinden üç kattan fazla etkili bulundu. Çiğneme ürünleri fırçalamanın yerine değil, yanına eklenen bir destek olarak düşünülmeli.' },
    { soru: 'Fırçalanmayan dişte diş taşı ne kadar sürede oluşur?', cevap: 'Diş taşı 2 ila 3 gün içinde oluşmaya başlayabiliyor. Plak ise temizlikten hemen sonra yeniden birikmeye başlıyor. Bu yüzden fırçalamanın ara sıra değil düzenli yapılması gerekiyor.' },
    { soru: 'Fırçalama sırasında köpek acı çekiyorsa ne yapılmalı?', cevap: 'Fırçalamayı durdurup veteriner hekime başvurmak gerekiyor. Ağızda ağrı, kanama ya da şişlik gibi bir durumun nedenini evde bulmaya çalışmak ya da ürün denemek önerilmez. Muayeneyi ve değerlendirmeyi veteriner hekim yapar.' },
  ],
  kaynaklar: [
    {
      kurum: 'Journal of Veterinary Dentistry',
      yazarlar: 'Harvey C, Serfilippi L, Barnvos D',
      baslik: 'Effect of Frequency of Brushing Teeth on Plaque and Calculus Accumulation, and Gingivitis in Dogs',
      dergi: 'Journal of Veterinary Dentistry',
      yil: 2015,
      kunye: '32(1):16-21',
      doi: '10.1177/089875641503200102',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/26197686/',
    },
    {
      kurum: 'The Pets\'n\'Vets Family, Roundhouse Veterinary Hospital',
      yazarlar: 'Allan RM, Adams VJ, Johnston NW',
      baslik: 'Prospective randomised blinded clinical trial assessing effectiveness of three dental plaque control methods in dogs',
      dergi: 'Journal of Small Animal Practice',
      yil: 2019,
      kunye: '60(4):212-217',
      doi: '10.1111/jsap.12964',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30575038/',
    },
    {
      kurum: 'Swedish University of Agricultural Sciences (SLU)',
      yazarlar: 'Olsén L, Brissman A, Wiman S, Eriksson F, Kaj C, Brunius Enlund K',
      baslik: 'Improved Oral Health and Adaptation to Treatment in Dogs Using Manual or Ultrasonic Toothbrush or Textile of Nylon or Microfiber for Active Dental Home Care',
      dergi: 'Animals',
      yil: 2021,
      kunye: '11(9):2481',
      doi: '10.3390/ani11092481',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34573447/',
    },
    {
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Bellows J, Berg ML, Dennis S, Harvey R, Lobprise HB, Snyder CJ, Stone AES, Van de Wetering AG',
      baslik: '2019 AAHA Dental Care Guidelines for Dogs and Cats',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2019,
      kunye: '55(2):49-69',
      doi: '10.5326/JAAHA-MS-6933',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30776257/',
    },
    {
      kurum: 'American Society for the Prevention of Cruelty to Animals (ASPCA)',
      baslik: 'People Foods to Avoid Feeding Your Pets',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets',
    },
  ],
};
