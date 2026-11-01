import type { BlogYazi } from './types';

export const sokakKedileriIcinKisEvi: BlogYazi = {
  slug: 'sokak-kedileri-icin-kis-evi',
  baslik: 'Sokak Kedileri İçin Kış Evi Nasıl Yapılır?',
  ozet: 'Sokak kedisi kış evi için malzeme, yatak, yer seçimi ve giriş sayısı. Kuru saman neden battaniyeden iyi ve kış evi tek başına neden yetmiyor?',
  kapakAlt:
    'Karlı bahçede ahşap kış evinin içindeki samanda oturan kedi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Sokak kedileri için iyi bir kış evi; yağmurdan ve rüzgârdan korunan, zeminden yüksekte duran, içi kuru saman ile yalıtılmış ve kedinin sıkışıp kalmaması için mümkünse iki girişi olan küçük, kapalı bir kutudur.** İngiliz kedi refahı kuruluşu Cats Protection\'a göre malzeme olarak ahşaptan çok temizlenebilen plastik tercih ediliyor, yatak olarak ise en kuru, en sıcak ve en güvenli doğal seçenek saman.' },
    { kind: 'paragraf', metin: 'Aşağıda kış evinin nasıl bir yapıda olması gerektiğini, içine ne konup ne konmaması gerektiğini, nereye yerleştirileceğini ve kış evinin tek başına neden yetmediğini anlatıyoruz. Kışın sokakta yaşayan bir kedinin yemek ve su ihtiyacı için [[sokak-hayvanlarini-beslemek-yasak-mi|sokak hayvanlarını beslemek yasak mı]] yazımıza da bakabilirsiniz.' },

    { kind: 'tablo', basliklar: ['Kış evi malzemesi', 'Durum', 'Neden?'], satirlar: [
      ['Saman', 'Önerilir', 'En kuru, en sıcak ve en güvenli doğal yatak olarak anılıyor'],
      ['Battaniye, havlu', 'Dikkatle kullanılır', 'Nemlenebilir, çok soğukta donabilir'],
      ['Plastik kutu', 'Ahşaba tercih edilir', 'Daha iyi temizlenir, hijyen korunur'],
      ['Dış kaplama (çöp poşeti, branda, çatı keçesi)', 'Önerilir', 'İçeriyi kuru ve cereyansız tutar'],
      ['Giriş yerlerinin örtülmesi', 'Önerilmez', 'Cats Protection girişlerin kapatılmamasını istiyor'],
    ]},

    { kind: 'baslik', metin: 'Kediler soğukta neden kış evine ihtiyaç duyar?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, soğukta uzun süre dışarıda kalan hayvanlarda hipotermi ihtimalinin arttığını belirtiyor. Kuruluşa göre soğuğa uyumu zayıf köpek ve kedilerde ıslak ya da rüzgârlı havada donma hasarı (frostbite) da görülebiliyor ve bu hasar en çok iyi yalıtılmamış bölgeleri, yani kulak uçlarını, patileri ve kuyruğu etkiliyor.' },
    { kind: 'paragraf', metin: 'ASPCA da basit bir ölçü veriyor: sizin için fazla soğuksa hayvanınız için de muhtemelen fazla soğuktur. Cats Protection\'a göre yabani ya da sahipsiz kediler hava soğuk ya da yağmurlu olduğunda genellikle sessiz ve üstü kapalı bir yer arıyor. Yani kış evi, kedinin zaten yapmaya çalıştığı şeye yardım etmenin bir yolu.' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'e göre kedilerin kışın ideal olarak içeride olması gerekiyor; dışarı çıkan kedilerin de sıcak bir ortama, mamaya ve suya ulaşabilmesi gerekiyor. Eve alınamayan kediler için kış evi bu sıcak ortamı sağlamanın bir yolu.' },

    { kind: 'baslik', metin: 'Kış evi nasıl bir yapıda olmalı?' },
    { kind: 'paragraf', metin: 'Cats Protection\'ın dış mekân barınağı önerileri şöyle özetlenebilir:' },
    { kind: 'liste', maddeler: [
      'Plastik bir kutu, temizlenebildiği için ahşaba tercih ediliyor.',
      'Kedinin içeride mahsur kalmaması için mümkünse iki giriş bulunmalı; bu girişler birbirinin tam karşısında olmamalı, çünkü karşılıklı girişler cereyan yaratıyor.',
      'Dış yüzey çöp poşeti, branda ya da çatı keçesi gibi bir malzemeyle kaplanıp kuru ve cereyansız tutulmalı; girişler ise kapatılmamalı.',
      'Kış evi zeminden yüksekte, örneğin tahta palet ya da tuğla üzerinde durmalı ve sallanmaması için düz olmalı.',
    ] },
    { kind: 'paragraf', metin: 'Kış evinde yalnızca tek giriş varsa kedinin hızlıca ve kolayca kaçabileceği bir noktaya konulması öneriliyor. Bu, kedinin kendini daha güvende hissetmesine yardımcı oluyor.' },

    { kind: 'baslik', metin: 'İçine ne serilmeli: saman mı battaniye mi?' },
    { kind: 'paragraf', metin: 'Cats Protection, dış mekân kedi barınaklarının yalıtımı için samanı öneriyor ve onu en kuru, en sıcak ve en güvenli doğal yatak seçeneği olarak tanımlıyor. Battaniye ya da havlu kullanılırsa düzenli kontrol edilip değiştirilmesi gerekiyor, çünkü bunlar nemlenebiliyor ve çok soğuk havada donabiliyor.' },
    { kind: 'yanilgi', baslik: '"Kalın bir battaniye en sıcak yataktır"', metin: 'Cats Protection\'a göre battaniye ve havlu nemlenebiliyor, hatta çok soğukta donabiliyor. Islanmış ya da donmuş bir yatak kediyi ısıtmak yerine soğutabilir. Kuru saman daha güvenli bir seçim ve iç yalıtımın da ıslak ya da donmuş olmaması için düzenli değiştirilmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Kış evi nereye konmalı?' },
    { kind: 'paragraf', metin: 'Cats Protection\'ın önerisine göre kış evi kedinin zaten tanıdığı bir yere, mümkünse sessiz ve gözlerden uzak bir köşeye yerleştirilmeli. Ayrıca hava koşullarından korunması gerekiyor; örneğin bir çalının altı ya da çıkıntılı bir çatının altı uygun olabilir.' },
    { kind: 'paragraf', metin: 'Kediyi elle kaldırıp kış evinin içine koymak ya da zorla içeri sokmak önerilmiyor. Kedinin evi kendi hızında keşfetmesine izin vermek gerekiyor; ihtiyaç duyduğunda kullanacaktır.' },

    { kind: 'baslik', metin: 'Kış evi tek başına yetmez: mama ve su' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre hayvanlar kışın ısınmaya çalışırken fazladan enerji harcıyor; bu nedenle biraz daha fazla mama vermek ve bol su bulundurmak öneriliyor. Merck Veterinary Manual da dışarıdaki kedilerin ısınabileceği bir ortamın yanında mamaya ve suya erişimin gerekli olduğunu vurguluyor. Mama ve su miktarı konusunda [[kedi-gunde-kac-gram-mama-yer|kedi günde kaç gram mama yer]] ve [[kedi-gunde-ne-kadar-su-icmeli|kedi günde ne kadar su içmeli]] yazılarımız yol gösterebilir.' },

    { kind: 'baslik', metin: 'Antifriz ve kış kimyasalları' },
    { kind: 'paragraf', metin: 'ASPCA, araçlardan dökülen antifrizin köpekler ve kediler için öldürücü olabileceğini belirtiyor ve dökülen her sızıntının iyice temizlenmesini öneriyor. Merck Veterinary Manual\'e göre etilen glikol içeren antifriz tatlı tadı yüzünden ilgi çekiyor, öldürücü miktarı çok küçük ve çoğu zaman uygunsuz biçimde saklanıp atılıyor.' },
    { kind: 'uyari', metin: 'Bir kedinin antifriz ya da başka bir zehirli madde yuttuğundan şüpheleniliyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Merck Veterinary Manual\'e göre antifriz zehirlenmesinin belirtileri arasında sakarlık, aşırı susama ve sık idrara çıkma var ve bunlar kusma, nöbet ya da komaya ilerleyebiliyor. Evde müdahale denenmemeli.' },

    { kind: 'baslik', metin: 'Üşümüş ya da halsiz bir kedi görürseniz' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'e göre hipotermi her zaman titremeyle belli olmuyor; hayvanlarda genellikle halsizlik, kafa karışıklığı, yüzeysel nefes ve yavaş nabız görülüyor, en kötü durumda ise çökme ve bilinç kaybı yaşanabiliyor. Donma hasarında deri soluk ya da kırmızı, şiş ve ağrılı olabiliyor.' },
    { kind: 'uyari', metin: 'Soğukta bulunan bir kedi halsiz, kafası karışık ya da nefesi yüzeysel görünüyorsa ya da kulak, pati veya kuyruk ucunda donma şüphesi varsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Isıtma ve tedavi konusunda evde deneme yapmak yerine hekim yönlendirmesi izlenmeli. Yaralı hayvanlar için [[yarali-sokak-hayvani|yaralı sokak hayvanı bulunca ne yapılır]] yazısı da yol gösterebilir.' },

    { kind: 'baslik', metin: 'Uzun vadede kısırlaştırma ve sahiplenme' },
    { kind: 'paragraf', metin: 'Sahipsiz kediler çoğunlukla yiyecek ve barınak bulunan kentsel alanlarda grup oluşturuyor. 2023 tarihli bir derlemeye göre bu kedilere hayvan refahı kuruluşları çoğu zaman yiyecek, barınak ve tıbbi bakım sağlıyor; serbest dolaşan kedi sayısını denetlemenin en etkili ve insancıl yolu ise yakala, kısırlaştır, geri bırak (TNR) uygulaması olarak görülüyor.' },
    { kind: 'paragraf', metin: 'Bu nedenle mahalledeki kedilerin kışı geçirmesine yardım ederken kısırlaştırma için yetkililerle iletişime geçmek de önerilir. Belediyelerin kısırlaştırma uygulamasını [[belediye-ucretsiz-kisirlastirma|belediye ücretsiz kısırlaştırma]] yazımızda anlattık.' },
  ],
  kontrolListesi: [
    'Ev zeminden yüksekte mi?',
    'İçinde kuru saman var mı?',
    'Girişler cereyan yapıyor mu?',
    'Dış yüzey yağmura kapalı mı?',
    'Yanında temiz su var mı?',
    'Antifriz sızıntısı temizlendi mi?',
  ],
  sss: [
    { soru: 'Sokak kedisi kış evi neyden yapılır?', cevap: 'Cats Protection, plastik bir kutuyu ahşaba tercih ediyor çünkü plastik daha iyi temizlenebiliyor. Dış yüzeyin çöp poşeti, branda ya da çatı keçesi gibi bir malzemeyle kaplanıp kuru ve cereyansız tutulması, girişlerin ise açık bırakılması öneriliyor.' },
    { soru: 'Kış evinin içine ne konmalı?', cevap: 'Kuru saman konması öneriliyor. Cats Protection samanı en kuru, en sıcak ve en güvenli doğal yatak olarak tanımlıyor. Battaniye ya da havlu kullanılırsa nemlenebileceği ve çok soğukta donabileceği için düzenli kontrol edilip değiştirilmesi gerekiyor.' },
    { soru: 'Kış evinin kaç girişi olmalı?', cevap: 'Mümkünse iki giriş olması öneriliyor ki kedi içeride mahsur kalmasın. Girişlerin birbirinin tam karşısında olmaması gerekiyor, çünkü karşılıklı girişler cereyan yaratıyor. Tek girişli evlerde kedinin hızlıca kaçabileceği bir yere konulması öneriliyor.' },
    { soru: 'Kış evi nereye konmalı?', cevap: 'Kedinin tanıdığı, sessiz ve gözlerden uzak bir yere konması öneriliyor. Cats Protection\'a göre kış evinin hava koşullarından, örneğin bir çalının ya da çatı çıkıntısının altında korunması ve zeminden yüksekte, düz biçimde durması gerekiyor.' },
    { soru: 'Kediyi zorla kış evine koymak doğru mu?', cevap: 'Hayır, doğru değil. Cats Protection kediyi elle kaldırıp kış evine koymamayı ya da zorla içeri sokmamayı öneriyor. Kedinin evi kendi hızında keşfetmesine izin vermek gerekiyor; ihtiyacı olduğunda kullanacaktır.' },
    { soru: 'Soğukta kedi titremiyorsa sorun yok mudur?', cevap: 'Hayır, titremenin olmaması güvenceye işaret etmiyor. Merck Veterinary Manual\'e göre titreme hipotermi için güvenilir bir işaret değil. Halsizlik, kafa karışıklığı, yüzeysel nefes ya da yavaş nabız görülürse vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Soğukta kediye daha fazla mama verilmeli mi?', cevap: 'Evet, biraz daha fazla mama verilmesi öneriliyor. ASPCA\'ya göre hayvanlar kışın ısınmak için fazladan enerji harcıyor ve bol su da gerekiyor. Merck Veterinary Manual da dışarıdaki kedilerin sıcak bir ortamın yanında mamaya ve suya erişebilmesi gerektiğini belirtiyor.' },
    { soru: 'Antifriz kediler için tehlikeli mi?', cevap: 'Evet, antifriz kediler için öldürücü olabiliyor. Merck Veterinary Manual\'e göre tatlı tadı yüzünden ilgi çekiyor ve öldürücü miktarı çok küçük. Yutulduğundan şüphelenilirse vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cats Protection',
      baslik: 'Keep stray or feral cats warm and dry with ideas for building a DIY outdoor shelter',
      adres: 'https://www.cats.org.uk/cats-blog/how-to-make-stray-cat-shelter',
    },
    {
      kurum: 'ASPCA',
      baslik: 'Cold Weather Safety Tips',
      adres: 'https://www.aspca.org/pet-care/general-pet-care/cold-weather-safety-tips',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Keeping Pets Safe During Cold Winter Months',
      yil: 2025,
      adres: 'https://www.merckvetmanual.com/news/editorial/2025/01/15/15/23/keeping-pets-safe-during-cold-winter-months',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'What to Do in a Dog or Cat Emergency',
      adres: 'https://www.merckvetmanual.com/special-pet-topics/emergencies/what-to-do-in-a-dog-or-cat-emergency',
    },
    {
      kurum: 'University of Las Palmas de Gran Canaria, Faculty of Veterinary Medicine',
      yazarlar: 'Luzardo OP, Zaldívar-Laguía JE, Zumbado M, Travieso-Aja MDM',
      baslik: 'The Role of Veterinarians in Managing Community Cats: A Contextualized, Comprehensive Approach for Biodiversity, Public Health, and Animal Welfare',
      dergi: 'Animals (Basel)',
      yil: 2023,
      kunye: '13(10):1586',
      doi: '10.3390/ani13101586',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37238021/',
    },
  ],
};
