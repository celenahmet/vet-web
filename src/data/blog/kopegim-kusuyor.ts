import type { BlogYazi } from './types';

/**
 * KOPEK kategorisi. Iki dayanak:
 *   1. MSD (Merck) Veteriner El Kitabi, sahip surumu — kusma ile REGURJITASYON
 *      farki, sik sebepler (sindirim sistemi hastaligi, bobrek/karaciger
 *      yetmezligi, pankreatit, sinir sistemi, zararli madde alimi), akut
 *      (3-4 gunden kisa) ve kronik kusmada tani basamaklari.
 *   2. Glickman ve ark. 2000, JAVMA 217(10):1492-9 — buyuk ve dev irklarda
 *      mide dilatasyonu-volvulus (GDV): calisma boyunca kumulatif gorulme
 *      %6; risk artiran etkenler yas, birinci derece akrabada GDV oykusu,
 *      HIZLI YEME ve YUKSELTILMIS MAMA KABI; dev irklarda vakalarin yaklasik
 *      %52'si yukseltilmis kaba atfedildi.
 *
 * ⚠️ SAAT VERILMIYOR ("2 saat ac birakin" gibi): MSD'nin ac birakma tarifi
 * hekim gozetiminde ve sivi destegiyle anlatiliyor, evde uygulanacak bir recete
 * degil.
 *
 * ⚠️ GDV bir KUSMA yazisinda neden var: sahibin gordugu sey cogu zaman
 * "kusmaya calisiyor ama cikmiyor" oluyor ve bu tablo saatlerle olculuyor.
 */
export const kopegimKusuyor: BlogYazi = {
  slug: 'kopegim-kusuyor',
  baslik: 'Köpeğim Kusuyor: Ne Zaman Beklenir, Ne Zaman Acil?',
  ozet: 'Kusmakla çıkarmak aynı şey değil. Köpekte kusmaya çalışıp çıkaramamak, özellikle büyük ırklarda saatle ölçülen bir acil.',
  kapakAlt:
    'Köpeklerde kusma konulu yazının kapak görseli; kusan köpek, acil belirtiler ve veterinere başvuru zamanı',
  kategori: 'Köpek',
  tarih: '2026-09-16',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpeklerde kusma sık görülüyor ve çoğu zaman tek seferlik bir olayla bitiyor. Ama bazı tabloların görüntüsü benziyor, sonucu benzemiyor. Bu yazının amacı, evde takip edilebilecek bir kusmayla aynı gün hekime gitmesi gereken bir kusmayı ayırmak.' },

    { kind: 'baslik', metin: 'Önce ayrım: kusma mı, çıkarma mı' },
    { kind: 'paragraf', metin: 'MSD Veteriner El Kitabı, kusmayı "mide ve ince bağırsağın üst kısmındaki içeriğin güçle dışarı atılması" olarak tanımlıyor: karın kaslarının kasılmasıyla oluyor, öncesinde salya artışı ve öğürme görülüyor. Regürjitasyon yani çıkarma ise pasif: kas çabası yok, çıkan materyal sindirilmemiş ve çoğu zaman silindirik biçimde.' },
    { kind: 'paragraf', metin: 'Bu ayrım önemli çünkü ikisi farklı yerlere işaret ediyor. Kusma mideyi ve ötesini, çıkarma daha çok yemek borusunu düşündürüyor. Hekime "kusuyor" demekle "yediğini olduğu gibi çıkarıyor" demek aynı bilgi değil.' },

    { kind: 'baslik', metin: 'Arkasında ne olabilir' },
    { kind: 'liste', maddeler: [
      'Sindirim sistemi hastalıkları',
      'Böbrek ya da karaciğer yetmezliği',
      'Pankreatit',
      'Sinir sistemi kaynaklı sebepler',
      'Zararlı madde ya da yabancı cisim yutulması',
    ] },
    { kind: 'paragraf', metin: 'Zararlı madde başlığı köpeklerde özellikle geniş: çikolata, üzüm, soğan gibi mutfak kalemleri ve ev bitkileri sık karşılaşılan sebepler. Ayrıntı için [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] ve [[kopeklerde-zehirlenme|köpeklerde zehirlenme]] yazıları var.' },

    { kind: 'yanilgi', baslik: '"Kusmaya çalışıyor ama çıkaramıyor, boğazına bir şey takılmış olmalı" yanılgısı', metin: 'Bu tablo özellikle büyük ve dev ırklarda mide dilatasyonu-volvulus (halk arasında şişkinlik) belirtisi olabiliyor ve saatlerle ölçülen bir acil. 2000 tarihli geniş bir çalışma, büyük ve dev ırklarda kümülatif görülme oranını %6 olarak bildiriyor; riski artıran etkenler arasında ileri yaş, birinci derece akrabada aynı öykünün bulunması, hızlı yeme ve yükseltilmiş mama kabı sayılıyor. Aynı çalışmada dev ırklardaki vakaların yaklaşık %52’si yükseltilmiş mama kabına atfedildi. Karnı gergin, huzursuz, öğürüp bir şey çıkaramayan köpekte beklenmiyor.' },

    { kind: 'baslik', metin: 'Aynı gün başvuru gerektiren bulgular' },
    { kind: 'liste', maddeler: [
      'Öğürüp bir şey çıkaramamak, karnın gergin görünmesi',
      'Kusmukta kan ya da kahve telvesi görünümü',
      'Halsizlik, ayakta durmakta zorlanma',
      'Kısa sürede tekrarlayan kusma, suyun tutulamaması',
      'Yavru köpekte kusma ve ishalin birlikte olması',
      'Zararlı madde, ip ya da oyuncak parçası yutulduğundan şüphe',
    ] },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlı; teşhis ve tedavi yerine geçmez. Yukarıdaki bulgulardan biri varsa en yakın veteriner hekime başvurun; özellikle öğürüp çıkaramama tablosunda beklemeyin.' },

    { kind: 'baslik', metin: 'Muayenede ne yapılıyor' },
    { kind: 'paragraf', metin: 'MSD, üç dört günden kısa süren ve başka bulgu eşlik etmeyen kusmada değerlendirmeyi şöyle tarif ediyor: ayrıntılı öykü ve fizik muayene, yabancı cisim gibi hayati durumları görmek için röntgen, ardından kan, idrar ve dışkı tetkikleri. Uzayan kusmada inceleme derinleşiyor: endoskopi, biyopsi, ultrason, tomografi ya da MR.' },
    { kind: 'paragraf', metin: 'Sıvı kaybı ve elektrolit dengesi tedavinin ayrı bir başlığı. Evde su kısıtlaması yapmak yerine hekimin planladığı sıvı desteği uygulanıyor.' },

    { kind: 'baslik', metin: 'Karar tablosu' },
    { kind: 'tablo', basliklar: ['Durum', 'Ne yapılır'], satirlar: [
      ['Tek sefer kustu, köpek neşeli, iştahı yerinde', 'Gözlenir, su erişimi kesilmez'],
      ['Gün içinde iki üç kez kusma, halsizlik yok', 'Aynı gün hekime danışılır'],
      ['Kusma üç günden uzun sürüyor', 'Randevu alınır, öykü ve kilo kaydı götürülür'],
      ['Kusmukta kan, halsizlik ya da su tutulamıyor', 'Aynı gün başvurulur'],
      ['Öğürüyor, çıkaramıyor, karın gergin', 'Acil başvuru, beklenmez'],
      ['Yavru köpekte kusma + ishal', 'Acil başvuru'],
    ] },

    { kind: 'baslik', metin: 'Yavru köpekte kusma ayrı bir başlık' },
    { kind: 'paragraf', metin: 'Yetişkin bir köpekte tek seferlik kusma gözlenebilirken yavruda aynı tolerans yok. Yavrunun sıvı ve şeker rezervi küçük; kusma ve ishal birlikte olduğunda tablo saatler içinde ağırlaşabiliyor. Üstelik bu yaşta aşı serisi henüz tamamlanmamış oluyor ve bulaşıcı hastalıklar ilk sırada düşünülüyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden yavru köpekte kusma, halsizlik ya da ishal eşlik ediyorsa gözlem süresi tanınmıyor. Aşı ve parazit uygulamalarının tarihlerini yanınızda götürmek tanıyı hızlandırıyor; takvimin nasıl ilerlediğini [[kopek-asi-takvimi|köpek aşı takvimi]] yazısında anlattık.' },

    { kind: 'baslik', metin: 'Hekime giderken ne götürülür' },
    { kind: 'paragraf', metin: 'Kusma şikayetinde muayenenin ilk yarısı öyküden oluşuyor ve öykünün tek kaynağı sahip. Aşağıdaki başlıklar hazır gidildiğinde hekim, hangi tetkikin gerekli olduğuna daha erken karar verebiliyor.' },
    { kind: 'liste', maddeler: [
      'Kusmanın başlangıç tarihi, günde kaç kez tekrarladığı',
      'Çıkan materyal: yiyecek, safra, köpük, kan',
      'Kusma yemekle ilişkili mi, hemen sonrasında mı oluyor',
      'Son haftalardaki kilo, iştah ve su tüketimi değişikliği',
      'Dışkı düzeni ve rengi',
      'Aşı ve parazit uygulama tarihleri, kullanılan ilaçlar',
      'Eve yeni giren yiyecek, bitki, oyuncak ya da temizlik ürünü',
      'Mümkünse kusma anının kısa videosu',
    ] },
    { kind: 'paragraf', metin: 'Video özellikle işe yarıyor: kusma ile çıkarma arasındaki farkı, tarif etmeye çalışmak yerine görüntü üzerinden ayırmak çok daha kolay. Bu kayıtların uygulama üzerinde tutulması, aynı bilgilerin sonraki muayenede de elde olması anlamına geliyor.' },

    { kind: 'baslik', metin: 'Kusma uzarsa ne değişir' },
    { kind: 'paragraf', metin: 'Üç dört günü aşan kusmada soru "neden kustu" olmaktan çıkıp "hangi sistem bunu üretiyor" hâline geliyor. MSD bu noktada incelemenin derinleştiğini söylüyor: endoskopi, biyopsi, ultrason, tomografi ya da manyetik rezonans devreye girebiliyor. Bunlar rutin tetkikler değil, önceki basamaklar cevap vermediğinde isteniyor.' },
    { kind: 'paragraf', metin: 'Sahip tarafında ise iş değişmiyor: kayıt tutmak. Kronik tabloda kilo eğrisi, kusma sıklığı ve mama değişikliklerinin tarihleri, tek bir muayenenin veremeyeceği bilgiyi veriyor. Kilo yönetimi ayrı bir başlık; [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazısı bu kısmı anlatıyor.' },

    { kind: 'paragraf', metin: 'Tetkiklerin sırası da rastgele değil. Önce ucuz ve hızlı basamaklar deneniyor: fizik muayene, röntgen, kan ve idrar tahlili, dışkı incelemesi. Bu basamaklar hem yabancı cisim gibi acil durumları dışlıyor hem de böbrek, karaciğer ve pankreas kaynaklı sebepleri gösteriyor. İleri görüntüleme ancak bu aşamadan sonra gündeme geliyor. Sahip açısından bunun anlamı şu: ilk muayenede her şeyin cevabı çıkmayabilir ve bu, eksik bir değerlendirme olduğu anlamına gelmiyor.' },

    { kind: 'baslik', metin: 'Riski azaltan iki basit değişiklik' },
    { kind: 'paragraf', metin: 'Aynı çalışmanın işaret ettiği iki etken evde doğrudan değiştirilebiliyor: **hızlı yeme** ve **yükseltilmiş mama kabı**. Yavaşlatıcı kap kullanmak ve mama kabını yerde tutmak, büyük ırklarda tartışılan ilk iki başlık. Kilo yönetimi için [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazısına bakabilirsiniz.' },
  ],
  kontrolListesi: [
    'Kusma mı çıkarma mı, ayırt edin',
    'Başlangıç tarihini ve sıklığını yazın',
    'Öğürüp çıkaramıyorsa beklemeyin',
    'Mama kabını yerde tutun',
    'Hızlı yiyorsa yavaşlatıcı kap kullanın',
    'Aşı ve parazit tarihlerini alın',
  ],
  sss: [
    { soru: 'Köpeğim bir kez kustu, hemen gitmeli miyim?', cevap: 'Tek seferlik kusmadan sonra köpek neşeliyse, su içebiliyorsa ve karnı normal görünüyorsa gözlem makul. Kusma gün içinde tekrarlıyorsa, kusmukta kan varsa, halsizlik eklenirse ya da köpek yavruysa aynı gün başvurulur; öğürüp çıkaramama tablosunda ise beklenmez.' },
    { soru: 'Kusma ile çıkarma arasındaki fark ne?', cevap: 'Kusmada karın kasları çalışıyor, öncesinde öğürme ve salya artışı oluyor. Çıkarmada çaba yok; materyal sindirilmemiş ve çoğu zaman silindirik. İkisi farklı sebepleri düşündürüyor, bu yüzden hekime hangisi olduğunu tarif etmek önemli.' },
    { soru: 'Öğürüp hiçbir şey çıkaramıyor, ne yapmalıyım?', cevap: 'Beklemeden başvurun. Bu tablo büyük ve dev ırklarda mide dilatasyonu-volvulus belirtisi olabiliyor ve saatler içinde hayati risk taşıyor. Karnın gergin görünmesi, huzursuzluk ve salya artışı eşlik ediyorsa gece olması da beklemek için sebep değil; nöbetçi kliniğe gidilir.' },
    { soru: 'Mama kabını yükseltmek iyi değil mi?', cevap: '2000 tarihli çalışmada yükseltilmiş mama kabı, GDV riskini artıran etkenler arasında sayıldı; dev ırklardaki vakaların yaklaşık yarısı bu etkene atfedildi. Kabın yüksekliği hekimle konuşulmadan değiştirilmemeli.' },
    { soru: 'Evde aç bırakmak gerekir mi?', cevap: 'Aç bırakma ve su kısıtlaması, sıvı desteğiyle birlikte planlanan tıbbi bir karar; MSD bu uygulamayı hekim gözetiminde tarif ediyor. Evde kendi başına uygulanması, özellikle küçük ırklarda ve yavrularda kan şekeri ve sıvı dengesi açısından risk oluşturuyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'MSD (Merck) Veterinary Manual · Pet Owner Version',
      baslik: 'Vomiting in Dogs',
      adres: 'https://www.merckvetmanual.com/dog-owners/digestive-disorders-of-dogs/vomiting-in-dogs',
    },
    {
      kurum: 'American Veterinary Medical Association',
      baslik: 'Non-dietary risk factors for gastric dilatation-volvulus in large and giant breed dogs',
      yazarlar: 'Glickman LT, Glickman NW, Schellenberg DB, Raghavan M, Lee T',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 2000,
      kunye: '217(10):1492-1499',
      doi: '10.2460/javma.2000.217.1492',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/11128539/',
    },
  ],
};
