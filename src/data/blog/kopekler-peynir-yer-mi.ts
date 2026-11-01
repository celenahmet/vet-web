import type { BlogYazi } from './types';

export const kopeklerPeynirYerMi: BlogYazi = {
  slug: 'kopekler-peynir-yer-mi',
  baslik: 'Köpekler Peynir Yer mi? Laktoz, Yağ ve Küf Riski',
  ozet: 'Köpeklere peynir önerilmiyor: laktaz azlığı, yağ ve pankreatit riski ile küflü peynirdeki toksinler kaynaklarla anlatıldı. Verilecekse neye bakılır?',
  kapakAlt:
    'Elle uzatılan peynir küpüne bakan üç renkli köpek',
  kategori: 'Beslenme',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpeklere peynir önerilmiyor: Cornell Üniversitesi Veteriner Fakültesi peyniri kusma, ishal ve pankreatite yol açabilen yağlı gıdalar arasında sayıyor, ASPCA ise süt ürünlerinin laktaz azlığı yüzünden ishal ve sindirim sorunu yapabildiğini belirtiyor.** Küflü peynirler ayrıca ayrı bir risk taşıyor. Sağlıklı bir köpeğe küçük bir parçanın zarar verip vermeyeceği ise köpeğin kilosuna ve sağlık durumuna göre değiştiği için veteriner hekime sorulması gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda peynirin neden sorun çıkarabildiğini, küçük bir parçanın bile ödül payında ne kadar yer tuttuğunu, küflü ve katkılı peynirlerin neden ayrı ele alınması gerektiğini ve hangi durumda veteriner hekime gidileceğini topladık. Köpeğinizin sağlığıyla ilgili bir soru varsa karar için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Peynirin durumu', 'Kaynaklarda söylenen', 'Sonuç'], satirlar: [
      ['Sade peynir', 'Yağlı gıdalar arasında sayılıyor; süt ürünleri laktaz azlığı nedeniyle ishal yapabiliyor', 'Önerilmiyor'],
      ['Küflü ya da küf ile olgunlaşan peynir', 'Küflenmiş süt ürünleri titreme ve nöbet yapan toksinlere yol açabiliyor', 'Verilmemesi gerekiyor'],
      ['Sarımsaklı, soğanlı, frenk soğanlı peynir', 'Bu bitkiler alyuvar hasarına ve kansızlığa yol açabiliyor', 'Verilmemesi gerekiyor'],
      ['Küçük parça, ödül olarak', 'Ödüller günlük kalorinin yüzde 10\'undan azını oluşturmalı', 'Veteriner hekime sorulmalı'],
    ]},

    { kind: 'baslik', metin: 'Laktaz azlığı ve süt ürünleri' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre evcil hayvanlarda sütteki laktozu parçalayan laktaz enzimi fazla bulunmuyor; bu yüzden süt ve diğer süt ürünleri ishale ya da başka sindirim sorunlarına yol açabiliyor. Peynir de bir süt ürünü olduğu için aynı uyarı kapsamında düşünülüyor.' },
    { kind: 'paragraf', metin: 'Kaynaklarda peynir için "şu kadar gram sorun çıkarmaz" diye bir miktar verilmiyor. Hangi peynir türünde ne kadar laktoz kaldığına dair elimizdeki kaynaklarda bir bilgi de yok. Bu nedenle bir köpeğin peyniri iyi karşılayacağını önceden söylemek mümkün değil. Aynı konunun kediler için anlatıldığı [[kediler-sut-icer-mi|kediler süt içer mi]] yazısına da bakılabilir.' },
    { kind: 'yanilgi', baslik: '"Köpek peyniri bu kadar seviyorsa ona iyi gelir"', metin: 'Köpeğin bir şeyi çok istemesi onu rahat sindirdiği anlamına gelmiyor. ASPCA süt ürünlerinin ishal ve sindirim sorunu yapabildiğini belirtiyor.' },

    { kind: 'baslik', metin: 'Yağ ve pankreatit' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Veteriner Fakültesi, kaçınılması gereken gıdalar arasında et kırpıntıları ve sos ile birlikte peyniri de sayıyor ve yüksek yağlı gıdaların kusma ve ishali tetikleyebildiğini, hatta ağrılı ve ciddi bir durum olan pankreatite yol açabildiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Pankreatit tanısı ve tedavisi veteriner hekimin işidir. Peynir yedikten sonra köpekte kusma, ishal ya da karın bölgesinde huzursuzluk görülüyorsa nedenini kendi başınıza aramak yerine veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Küçük bir parça ödül payında ne kadar yer tutar' },
    { kind: 'paragraf', metin: 'Dünya Küçük Hayvan Veteriner Hekimleri Birliği (WSAVA) ödüllerin köpeğin günlük kalori alımının yüzde 10\'undan azını oluşturması gerektiğini, ödülün hiçbir zaman bir öğünün yerini tutmaması gerektiğini belirtiyor. Aynı kılavuz, bazı köpekler için ölçüsü verilen tek bir yiyeceğin bile günlük ödül kalorisini aşabileceğini söylüyor. Tabloda 28 gram (bir ons) çedar peyniri 120 kalori olarak yer alıyor.' },
    { kind: 'paragraf', metin: 'Yani küçük görünen bir peynir parçası, bazı köpeklerde günlük ödül payını doldurabiliyor. Köpeğin günlük mama miktarı için [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazısına, kilo konusunda [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Küflü ve mavi peynirler' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı, Penicillium türü küflerin süt ürünleri, ceviz ve yer fıstığı gibi gıdalarda, hayvan yeminde ve kompost gibi yemek atıklarında titremeye yol açan toksinler üretebildiğini belirtiyor. Köpeklerde başlıca belirtiler arasında kusma, titreme, koordinasyon bozukluğu, kalp atışında hızlanma ve nöbet sayılıyor. Aynı kaynak, öyküde küflü gıdaların yenmesinin (örneğin süt ürünleri, kuruyemiş, makarna) görülebildiğini de ekliyor.' },
    { kind: 'paragraf', metin: 'Letonya\'daki bir gıda güvenliği enstitüsünün 46 mavi damarlı peyniri incelediği çalışmada, peynirlerin yüzde 63\'ünde mikofenolik asit ile roquefortine C birlikte bulundu. Merck roquefortine C\'yi köpeklerde incelenen titreme yapıcı toksinler arasında sayıyor, ancak bu toksinin tek başına önemli bir titreme nedeni olmayabileceğini de ekliyor. Çalışma insan tüketimini değerlendirdi ve köpekler için bir doz hesaplamadı. Kaynaklarda mavi peynir için güvenli bir miktar da tanımlanmıyor; bu nedenle küf ile olgunlaşan peynirlerin köpeğe verilmemesi önerilir.' },
    { kind: 'yanilgi', baslik: '"Mavi peynir de sonuçta peynir, fark etmez"', metin: 'Küf ile olgunlaşan peynirlerde küfün ürettiği maddeler bulunuyor ve Merck küflenmiş süt ürünlerinin köpeklerde titreme ve nöbete yol açan toksinler içerebildiğini belirtiyor. Sade peynirden farklı bir risk grubunda düşünülmesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Norveç Ulusal Veteriner Enstitüsü araştırmacılarının bildirdiği, Penicillium toksinlerinden kaynaklanan altı köpeklik zehirlenme serisinde belirtiler kusma, nöbet, titreme, koordinasyon bozukluğu ve kalp atışında hızlanmaydı. Bir köpek akut dönemde ötanazi edildi, üç köpek birkaç gün içinde tamamen düzeldi, iki köpekte dört ay sonra da sinirsel belirtiler görülüyordu. Bunlardan biri sonraki iki üç ay içinde düzeldi, diğerinde üç yıl sonra bile koordinasyon bozukluğu sürüyordu. Çalışmada analiz edilen örnekler yem, mide içeriği ve dokulardı; yine de küf kaynaklı zehirlenmenin ciddiyetini gösteriyor.' },

    { kind: 'baslik', metin: 'Sarımsaklı, soğanlı ve otlu peynirler' },
    { kind: 'paragraf', metin: 'Peynir bazen sarımsak, soğan ya da frenk soğanıyla birlikte satılıyor. ASPCA bu bitkilerin mide bağırsak tahrişine ve alyuvar hasarına, buna bağlı olarak kansızlığa yol açabildiğini, köpeklerin de yenen miktara göre risk altında olduğunu belirtiyor. Bu yüzden katkılı peynirlerin köpeğe verilmemesi gerekiyor. Diğer riskli yiyecekler için [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazısı kullanılabilir.' },

    { kind: 'baslik', metin: 'Peynir verilecekse nelere bakılır' },
    { kind: 'paragraf', metin: 'Cornell, bayram ve toplantı dönemlerinde köpeklere özel ödüllerin tercih edilmesini, misafirlerin sofradan yiyecek vermemesinin hatırlatılmasını öneriyor. Peynir ödülü yine de verilecekse kaynaklara göre şu noktalara dikkat etmek gerekiyor.' },
    { kind: 'liste', maddeler: [
      'Veteriner hekimin köpek için uygun bulması',
      'Küflü ve küf ile olgunlaşan peynirlerden uzak durulması',
      'Sarımsak, soğan, frenk soğanı katılmamış olması',
      'Miktarın günlük kalorinin yüzde 10\'unun altında kalması',
      'Peynirin ana öğünün yerine geçmemesi',
    ]},

    { kind: 'baslik', metin: 'Veteriner hekime ne zaman başvurulur' },
    { kind: 'paragraf', metin: 'Merck, tremorjenik toksinlerde belirtilerin bir ila iki saat içinde ya da birkaç saate kadar uzayan sürede başlayabildiğini belirtiyor. Bu nedenle köpek küflü peynir ya da küflenmiş başka bir süt ürünü yediyse belirti beklemek yerine hemen veteriner hekime ulaşmak gerekiyor.' },
    { kind: 'uyari', metin: 'Köpek küflü peynir ya da sarımsaklı, soğanlı bir peynir yediyse, ayrıca peynirden sonra titreme, kusma, koordinasyon bozukluğu, nöbet ya da sürekli ishal görülüyorsa vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Yenen peynirin türünü ve miktarını not etmek hekime yardımcı oluyor. Evde müdahale etmeye çalışılmaması önerilir.' },
  ],
  sss: [
    { soru: 'Köpekler peynir yiyebilir mi?', cevap: 'Köpeklere peynir önerilmiyor. Cornell Üniversitesi Veteriner Fakültesi peyniri yüksek yağlı gıdalar arasında sayıyor ve bu gıdaların kusma, ishal ve pankreatite yol açabildiğini belirtiyor. ASPCA ise süt ürünlerinin ishal yapabildiğini söylüyor. Küçük bir parça için veteriner hekime danışmak gerekiyor.' },
    { soru: 'Köpekler laktoz intoleransı olur mu?', cevap: 'ASPCA, evcil hayvanlarda sütteki laktozu parçalayan laktaz enziminin fazla bulunmadığını, bu yüzden süt ve süt ürünlerinin ishal ya da başka sindirim sorunlarına yol açabildiğini belirtiyor.' },
    { soru: 'Köpeklere mavi peynir verilir mi?', cevap: 'Verilmemesi gerekiyor. Merck Veteriner El Kitabı, Penicillium türü küflerin süt ürünlerinde titreme ve nöbete yol açan toksinler üretebildiğini belirtiyor. Mavi damarlı peynirlerin yüzde 63\'ünde roquefortine C bulunduğu bir çalışmada bildirildi. Köpek yediyse vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Köpeğe günde ne kadar peynir verilebilir?', cevap: 'Kaynaklarda peynir için sabit bir miktar verilmiyor. WSAVA ödüllerin günlük kalorinin yüzde 10\'undan azını oluşturmasını belirtiyor. 28 gram çedar peyniri 120 kalori olduğundan küçük köpeklerde bu pay hızla doluyor. Uygun miktarı veteriner hekim belirler.' },
    { soru: 'Peynir köpeklerde pankreatite yol açar mı?', cevap: 'Cornell, peynir gibi yüksek yağlı gıdaların kusma ve ishalin yanında pankreatite de yol açabildiğini belirtiyor. Pankreatit ağrılı ve ciddi bir durum olduğundan, peynirden sonra kusma ya da karın ağrısı belirtisi görülen köpeğin veteriner hekime götürülmesi gerekiyor.' },
    { soru: 'Köpek peynir yediyse ne yapılmalı?', cevap: 'Peynir sade ve küçük bir parçaysa köpekte kusma, ishal gibi belirtiler olup olmadığına dikkat etmek, şüphe varsa veteriner hekime danışmak gerekiyor. Küflü, sarımsaklı ya da soğanlı peynir yenmişse vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde müdahale edilmemesi önerilir.' },
    { soru: 'Sarımsaklı peynir köpeğe zarar verir mi?', cevap: 'Evet, zarar verebilir. ASPCA sarımsak, soğan ve frenk soğanının mide bağırsak tahrişine ve alyuvar hasarına, buna bağlı olarak kansızlığa yol açabildiğini belirtiyor. Köpekler yenen miktara göre risk altında. Böyle bir peynir yenmişse veteriner hekime başvurmak gerekiyor.' },
  ],
  kontrolListesi: [
    'Peynir küflü ya da mavi damarlı mı?',
    'İçinde sarımsak veya soğan var mı?',
    'Ödül payı yüzde 10\'u aştı mı?',
    'Kusma veya ishal belirtisi var mı?',
    'Titreme ya da yalpalama var mı?',
    'Veteriner hekime danışıldı mı?',
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA (American Society for the Prevention of Cruelty to Animals)',
      baslik: 'People Foods to Avoid Feeding Your Pets',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Riney Canine Health Center',
      baslik: 'Holiday hazards for dogs',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-topics/holiday-hazards-dogs',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Tremorgenic Neuromycotoxicosis in Dogs',
      adres: 'https://www.merckvetmanual.com/toxicology/mycotoxicoses/tremorgenic-neuromycotoxicosis-in-dogs',
    },
    {
      kurum: 'World Small Animal Veterinary Association (WSAVA)',
      baslik: 'Feeding treats to your dog',
      adres: 'https://wsava.org/wp-content/uploads/2025/11/WSAVA_GuidetoTreats_Dogs_251107.pdf',
    },
    {
      kurum: 'National Veterinary Institute, Oslo',
      yazarlar: 'Eriksen GS, Jäderlund KH, Moldes-Anaya A, Schönheit J, Bernhoft A, Jaeger G, Rundberget T, Skaar I',
      baslik: 'Poisoning of dogs with tremorgenic Penicillium toxins',
      dergi: 'Medical Mycology',
      yil: 2010,
      kunye: '48(1):188-196',
      doi: '10.3109/13693780903225821',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19886763/',
    },
    {
      kurum: 'Institute of Food Safety, Animal Health and Environment BIOR, Riga',
      yazarlar: 'Reinholds I, Rusko J, Pugajeva I, Berzina Z, Jansons M, Kirilina-Gutmane O, Tihomirova K, Bartkevics V',
      baslik: 'The Occurrence and Dietary Exposure Assessment of Mycotoxins, Biogenic Amines, and Heavy Metals in Mould-Ripened Blue Cheeses',
      dergi: 'Foods',
      yil: 2020,
      kunye: '9(1):93',
      doi: '10.3390/foods9010093',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31963130/',
    },
  ],
};
