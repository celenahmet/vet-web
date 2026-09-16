import type { BlogYazi } from './types';

/**
 * KEDI kategorisi. Iki dayanak:
 *   1. ASPCA Animal Poison Control — kediler icin zehirli bitki listesi
 *      (zambaklar, sagu palmiyesi, zakkum, aculale, difenbahya, sarmasik,
 *      filodendron, sonbahar ciglemi, lale).
 *   2. Fitzgerald 2010, Topics in Companion Animal Medicine 25(4):213-7 —
 *      zambak toksisitesi: Lilium ve Hemerocallis turleri kedide nefrotoksik;
 *      IKI YAPRAK ya da tek cicegin bir parcasi olumle sonuclanmis vakalar var;
 *      bitkinin tamami (tac yaprak, ercik, yaprak, POLEN) toksik; kesin toksik
 *      doz ve sorumlu toksin HALA BILINMIYOR; hedef bobrek tubul epiteli.
 *      Ayrica Convallaria (muge) bobrek degil KALP uzerinden etkiliyor.
 *
 * ⚠️ "Sunu yerse sunu yapin" turu evde mudahale tarif EDILMIYOR; kusturma
 * girisimi zehirlenmelerde durumu kotulestirebiliyor. Yazinin isi riski ve
 * zamanlamayi anlatmak.
 *
 * ⚠️ Tam liste yazilmiyor: ASPCA listesi yuzlerce bitki iceriyor ve
 * guncelleniyor. Metin en sik ev bitkilerini veriyor, listenin kendisine
 * yonlendiriyor.
 */
export const kedilerIcinZehirliBitkiler: BlogYazi = {
  slug: 'kediler-icin-zehirli-bitkiler',
  baslik: 'Kediler İçin Zehirli Bitkiler: Evdeki Riskler ve Zambak Tehlikesi',
  ozet: 'Zambak kedide iki yaprakla ölümcül olabiliyor, poleni bile toksik. Evdeki bitkilerde risk sıralaması ve şüphede ne yapılacağı.',
  kapakAlt:
    'Kediler için zehirli bitkiler konulu yazının kapak görseli; ev bitkileri arasında kedi ve zambak gibi riskli türler',
  kategori: 'Kedi',
  tarih: '2026-09-16',
  bloklar: [
    { kind: 'paragraf', metin: 'Eve alınan bir saksı ya da gelen bir çiçek buketi, kedili evde sessiz bir risk olabiliyor. Riskin büyüklüğü bitkiden bitkiye çok değişiyor: bazıları ağızda tahrişle sınırlı kalırken, zambak kedide **böbrek yetmezliğine** yol açabiliyor.' },
    { kind: 'paragraf', metin: 'Bu yazı üç şeyi ayırıyor: hangi bitkiler gerçekten tehlikeli, zambak neden ayrı bir başlık ve şüphelenildiğinde ne yapılıyor.' },

    { kind: 'baslik', metin: 'Zambak: kedilerde ayrı bir başlık' },
    { kind: 'paragraf', metin: '2010 tarihli bir derleme, zambak toksisitesini kedilere özgü bir tablo olarak anlatıyor. Lilium ve Hemerocallis (gün zambağı) türleri kedide **nefrotoksik**, yani böbrek dokusunu hedef alıyor.' },
    { kind: 'liste', maddeler: [
      'Kediler zambağın toksik etkisine aşırı duyarlı',
      'Yalnızca iki yaprak ya da tek bir çiçeğin bir parçası ölümle sonuçlanmış vakalar var',
      'Bitkinin tamamı toksik: taç yaprak, ercik, yaprak ve polen',
      'Kesin toksik doz ve sorumlu toksin hâlâ bilinmiyor',
      'Belirtilerin hızlı başlaması, toksinin hızlı emildiğini düşündürüyor',
    ] },
    { kind: 'paragraf', metin: 'Polen maddesi pratikte en çok gözden kaçan kısım: kedi vazoya hiç dokunmasa bile tüyüne bulaşan poleni yalayarak alabiliyor. Aynı derleme, halkın büyük kısmının zambağın kedilere tehlikeli olduğunu bilmediğini ve kendi evindeki bitkiyi doğru tanımlayamadığını da belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Adında zambak geçen her bitki aynı şeydir" yanılgısı', metin: 'Kafa karışıklığının kaynağı isim benzerliği. Müge (Convallaria) da halk arasında zambak olarak anılıyor ama böbrek üzerinden değil, dijital benzeri güçlü kalp glikozitleriyle etki ediyor; yani tablo tamamen farklı. Melez türlerin çokluğu da ayrımı zorlaştırıyor. Bu yüzden "hangi zambak" sorusunun cevabı evde değil, hekimde aranıyor: mümkünse bitkinin fotoğrafı ya da kendisi götürülüyor.' },

    { kind: 'baslik', metin: 'Evde sık bulunan riskli bitkiler' },
    { kind: 'paragraf', metin: 'ASPCA’nın kediler için zehirli bitkiler listesinde en sık karşılaşılan başlıklar şunlar:' },
    { kind: 'tablo', basliklar: ['Bitki', 'Not'], satirlar: [
      ['Zambaklar (Asya, Paskalya, kaplan, rubrum)', 'Kedide böbrek yetmezliği riski, en ciddi grup'],
      ['Sagu palmiyesi (Cycas)', 'Ciddi toksisite'],
      ['Zakkum', 'Ciddi toksisite'],
      ['Açalya ve ormangülü', 'Toksik'],
      ['Difenbahya', 'Ağız ve yutakta tahriş'],
      ['Şeytan sarmaşığı (pothos)', 'Ağız ve sindirim tahrişi'],
      ['Filodendron', 'Ağız ve sindirim tahrişi'],
      ['Sonbahar çiğdemi', 'Toksik'],
      ['Lale', 'Toksik, özellikle soğanı'],
    ] },
    { kind: 'paragraf', metin: 'Bu tablo tam liste değil: ASPCA’nın kendi listesi yüzlerce bitki içeriyor ve güncelleniyor. Eve yeni bir bitki almadan önce adını o listede aratmak, sonradan yapılacak her şeyden kolay.' },

    { kind: 'baslik', metin: 'Şüpheleniyorsanız ne yapılır' },
    { kind: 'liste', maddeler: [
      'Kediyi bitkiden uzaklaştırın, ağzında kalan parçaları alın',
      'Bitkinin adını öğrenin; bilmiyorsanız bir parçasını ya da fotoğrafını hazırlayın',
      'Ne kadar ve ne zaman yediğini not edin',
      'Belirti beklemeden hekime haber verin',
      'Evde kusturmaya çalışmayın; bu, tabloyu ağırlaştırabiliyor',
    ] },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlı; teşhis ve tedavi yerine geçmez. Zambak temasından şüpheleniyorsanız belirti çıkmasını beklemeden en yakın veteriner hekime başvurun.' },
    { kind: 'paragraf', metin: 'Kusma ve iştahsızlık zehirlenmenin ilk işaretleri olabiliyor ama tek başına ayırt edici değil; [[kedim-kusuyor|kedilerde kusma]] yazısında bu ayrım anlatılıyor. Köpek tarafı için [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] ve [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazıları var.' },

    { kind: 'baslik', metin: 'Zambak zehirlenmesi nasıl ilerliyor' },
    { kind: 'paragraf', metin: 'Derlemenin tarif ettiği tablo aşamalı. İlk saatlerde kusma, salya, iştahsızlık ve halsizlik görülüyor; bu bulgular birkaç saat sonra geçici olarak hafifleyebiliyor ve tam da bu yüzden "atlattı" sanılıyor. Oysa asıl hasar böbrek tübüllerinde ilerliyor ve tablo bir iki gün içinde akut böbrek yetmezliği olarak geri dönüyor.' },
    { kind: 'paragraf', metin: 'Bu ara dönem, evde beklemeyi en çok pahalıya çıkaran kısım. Tedavinin sonucunu belirleyen şey temasla müdahale arasındaki süre oluyor; belirti çıkmadan başvurulan kedi ile böbrek değerleri yükseldikten sonra gelen kedi aynı yerde değil. Karar, belirtiye değil temas öyküsüne göre veriliyor.' },

    { kind: 'baslik', metin: 'Buket ve saksı: risk nereden giriyor' },
    { kind: 'paragraf', metin: 'Eve zambağın giriş yolu çoğu zaman saksı değil, hediye buketi oluyor: doğum günü, ziyaret, bayram. Buket masaya konduğunda kimse bitkinin türünü kontrol etmiyor. Poleni de toksik kabul edildiği için kedinin bitkiyi yemesi bile gerekmiyor; tüyüne bulaşan poleni yalaması tarif edilen temas yollarından biri.' },
    { kind: 'liste', maddeler: [
      'Buket gelince önce türünü kontrol edin, sonra vazoya koyun',
      'Vazo suyu da temas kaynağı; kedinin erişemeyeceği yere koyun',
      'Dökülen polen ve yaprakları aynı gün toplayın',
      'Kapalı balkon ya da kedinin girmediği oda, yüksek raf demek değil: kedi rafa çıkar',
      'Emin değilseniz bitkiyi evde tutmayın, kediye alternatif yeşillik verin',
    ] },

    { kind: 'baslik', metin: 'Kediye güvenli yeşillik' },
    { kind: 'paragraf', metin: 'Bitki kemirme davranışı kedide sık; yeşilliği tamamen kaldırmak yerine güvenli bir seçenek sunmak daha çok işe yarıyor. Kedi otu olarak satılan çimler ve ASPCA listesinde toksik olmayan bölümde yer alan türler bu iş için kullanılıyor. Listeyi eve bitki almadan önce bir kez açmak, sonradan yapılacak acil başvurudan çok daha ucuz.' },
    { kind: 'paragraf', metin: 'Bitki dışında da benzer bir liste var: mutfaktan gelen riskler. Köpekler için [[kopeklere-zararli-yiyecekler|zararlı yiyecekler]] yazısında topladığımız kalemlerin bir kısmı kediler için de geçerli, ve zehirlenme şüphesinde izlenen yol [[kopeklerde-zehirlenme|zehirlenme]] yazısında anlatılan yolla aynı: evde müdahale edilmiyor, temas bilgisiyle hekime gidiliyor.' },

    { kind: 'baslik', metin: 'Belirti yokken başvurmak neden mantıklı' },
    { kind: 'paragraf', metin: 'Zehirlenme başlıklarının çoğunda "belirti çıkarsa gidin" cümlesi kuruluyor; zambakta bu cümle tersine dönüyor. Böbrek hasarı belirtilerden önce başlıyor ve tedavinin başarısı, hasar yerleşmeden önce başlamasına bağlı. Yani burada başvuru ölçütü kedinin görünümü değil, temas ihtimalinin kendisi.' },
    { kind: 'paragraf', metin: 'Aynı mantık şüpheli madde yutan köpeklerde de geçerli. Evde beklemek, kusturmaya çalışmak ya da internetten doz aramak geçen sürenin uzamasından başka bir işe yaramıyor; yapılacak tek şey maddeyi tanımlayıp hekime gitmek.' },

    { kind: 'paragraf', metin: 'Bir nokta daha: evde birden fazla kedi varsa hangisinin bitkiye dokunduğunu ayırmak çoğu zaman mümkün olmuyor. Bu durumda değerlendirme tek kediyle sınırlandırılmıyor, temas ihtimali olan bütün kediler hekime götürülüyor.' },

    { kind: 'baslik', metin: 'Evi düzenlerken' },
    { kind: 'paragraf', metin: 'Kedili evde en sağlam kural, riskli bitkiyi "ulaşamayacağı yere koymak" değil **eve hiç almamak.** Kedi rafa çıkar, vazoyu devirir, poleni tüyüne bulaştırır. Gelen buketten zambağı ayırmak, sonrasında yapılacak her müdahaleden ucuz.' },
  ],
  kontrolListesi: [
    'Gelen buketin türünü önce kontrol edin',
    'Vazo suyunu erişilmeyen yere koyun',
    'Dökülen polen ve yaprağı hemen alın',
    'Temas şüphesinde belirti beklemeyin',
    'Bitkinin adını ya da parçasını alın',
    'Evde güvenli bir yeşillik bulundurun',
  ],
  sss: [
    { soru: 'Kedim zambak yaprağını sadece ısırdı, yutmadı. Risk var mı?', cevap: 'Evet. Derlemede iki yaprak kadar az miktarın ölümle sonuçlandığı vakalar bildiriliyor ve bitkinin tamamı, poleni dahil toksik kabul ediliyor. Miktar tartışmasına girmeden hekime başvurmak gerekiyor.' },
    { soru: 'Vazodaki suyu içti, sorun olur mu?', cevap: 'Zambak temasında güvenli bir eşik bilinmiyor; derleme kesin toksik dozun hâlâ belirlenmemiş olduğunu söylüyor ve bitkinin tamamını, poleni ve vazo suyu dahil, toksik kabul ediyor. Temas şüphesi varsa belirti beklemeden değerlendirme isteniyor.' },
    { soru: 'Zehirlenmede ilk belirtiler neler?', cevap: 'Kusma, salya artışı, iştahsızlık ve halsizlik ilk sıralarda geliyor; birkaç saat sonra geçici bir düzelme görülebiliyor ve bu aldatıcı oluyor. Belirtiler başka birçok tabloda da görüldüğü için ayırt edici değil; asıl bilgi veren şey temas öyküsü.' },
    { soru: 'Evde kusturmak doğru mu?', cevap: 'Hayır, kendi başınıza kusturmaya çalışmayın. Bazı maddelerde kusturma yemek borusuna ve solunum yoluna ek hasar veriyor, üstelik kedide evde uygulanan yöntemler güvenli değil. Kusturma kararı da yöntemi de hekime ait; siz bitkinin adını ya da bir parçasını götürün.' },
    { soru: 'Hangi bitkilerin güvenli olduğunu nereden öğrenirim?', cevap: 'ASPCA’nın kediler için hazırladığı liste hem toksik hem toksik olmayan bitkileri bilimsel adlarıyla birlikte veriyor; halk arasındaki isimler karıştığı için bilimsel ad üzerinden bakmak daha güvenli. Eve bitki almadan ya da gelen buketi vazoya koymadan önce adı oradan kontrol edilebilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA Animal Poison Control Center',
      baslik: 'Toxic and Non-Toxic Plants: Cats',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/cats-plant-list',
    },
    {
      kurum: 'Elsevier · Topics in Companion Animal Medicine',
      baslik: 'Lily toxicity in the cat',
      yazarlar: 'Fitzgerald KT',
      dergi: 'Topics in Companion Animal Medicine',
      yil: 2010,
      kunye: '25(4):213-217',
      doi: '10.1053/j.tcam.2010.09.006',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21147474/',
    },
  ],
};
