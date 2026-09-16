import type { BlogYazi } from './types';

/**
 * KEDI kategorisi. Iki dayanak:
 *   1. Cornell Feline Health Center — alt idrar yolu hastaligi (FLUTD) bulgulari,
 *      idiopatik sistitin en sik tani olmasi ve idrar yolu TIKANIKLIGININ gercek
 *      bir acil olmasi: tam tikanmadan olume gecen sure 24-48 saatten AZ olabiliyor.
 *   2. Gerber ve ark. 2005, JSAP 46(12):571-7 — 77 kedilik seride tanilarin
 *      dagilimi: idiopatik %57, tas %22, tikac %10, enfeksiyon %8; basvuru aninda
 *      kedilerin %58'inde uretra tikanikligi vardi.
 *
 * ⚠️ ORANLAR TEK BIR CALISMAYA AIT, "kedilerin %57'sinde" diye genellenmiyor.
 * Metinde calismanin adi ve buyuklugu birlikte veriliyor.
 *
 * ⚠️ EVDE TEDAVI TARIF EDILMIYOR. Idrar yapamayan kedide gecen her saat
 * onemli; yazinin isi bekleme ile acil arasindaki cizgiyi net koymak.
 */
export const kediIdrarindaKan: BlogYazi = {
  slug: 'kedi-idrarinda-kan',
  baslik: 'Kedinin İdrarında Kan: Sebepleri ve Ne Zaman Acil?',
  ozet: 'Kumda pembe leke, sık sık kum kabına gidip az idrar yapmak ve zorlanma birlikteyse beklenmiyor. Erkek kedide tıkanıklık saatlerle ölçülen bir acil.',
  kapakAlt:
    'Kedilerde idrarda kan konulu yazının kapak görseli; kum kabında kanlı idrar, zorlanma ve acil başvuru ölçütleri',
  kategori: 'Kedi',
  tarih: '2026-09-16',
  bloklar: [
    { kind: 'paragraf', metin: 'Kumda pembemsi bir leke ya da kum topağında kırmızı bir iz, çoğu sahibin ilk kez karşılaştığında ne yapacağını bilemediği bulgulardan. Sorunun cevabı tek başına kanda değil, kanın **yanında ne olduğunda**: kedi idrarını yapabiliyor mu, ne sıklıkta gidiyor, zorlanıyor mu, sesleniyor mu.' },
    { kind: 'paragraf', metin: 'Bu yazı üç şeyi ayırıyor: idrarda kan ne anlama geliyor, hangi tablo saatler içinde hayati risk taşıyor, ve muayenede ne yapılıyor.' },

    { kind: 'baslik', metin: 'Tek bulgu değil, bulgu kümesi' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Kedi Sağlığı Merkezi, alt idrar yolu hastalığını bir bulgu kümesiyle tanımlıyor. Kan çoğu zaman bu kümenin yalnız bir parçası.' },
    { kind: 'liste', maddeler: [
      'İdrar yaparken zorlanma ya da ağrı',
      'İdrar sıklığında artış, her seferinde az miktar',
      'İdrar yaparken sesli miyavlama',
      'İdrarda kan',
      'Kum kabı dışına idrar yapmaya başlamak',
      'Genital bölgeyi aşırı yalamak',
    ] },
    { kind: 'paragraf', metin: 'Kum kabının dışına idrar yapmak sık yanlış okunuyor: inatçılık ya da küslük sanılıyor. Oysa kedi çoğu zaman **ağrıyı kum kabıyla ilişkilendirdiği için** oradan kaçınıyor. Aynı okuma hatası [[kedilerde-kabizlik|kabızlıkta]] da yapılıyor.' },

    { kind: 'yanilgi', baslik: '"Kan var ama idrarını yapıyor, sabaha bakarız" yanılgısı', metin: 'Kedinin kum kabında oturup çıkması, idrarın gerçekten çıktığı anlamına gelmiyor. Tıkanıklıkta kedi defalarca kum kabına gidiyor, zorluyor, birkaç damla çıkarıyor ya da hiç çıkaramıyor. Cornell bu tabloyu "en tehlikeli sorun" ve "gerçek bir tıbbi acil" olarak tanımlıyor: tam tıkanıklıktan ölüme geçen süre yirmi dört ila kırk sekiz saatten az olabiliyor. Bu yüzden "sabaha bakarız" cümlesi, özellikle erkek kedide kurulmuyor.' },

    { kind: 'baslik', metin: 'Arkasında ne çıkıyor' },
    { kind: 'paragraf', metin: 'İsviçre’de Zürih Üniversitesi kliniğinden 2005 tarihli bir çalışma, alt idrar yolu hastalığı tanısı alan 77 kediyi inceledi ve tanıların dağılımını şöyle verdi:' },
    { kind: 'tablo', basliklar: ['Tanı', 'Oran (77 kedilik seride)'], satirlar: [
      ['İdiopatik (sebebi bulunamayan) alt idrar yolu hastalığı', '%57'],
      ['İdrar taşı', '%22'],
      ['Üretra tıkacı', '%10'],
      ['İdrar yolu enfeksiyonu', '%8'],
      ['Kesin tanı konulamayan', '%3'],
    ] },
    { kind: 'paragraf', metin: 'Aynı çalışmanın en dikkat çeken sayısı şu: başvuru anında kedilerin **%58’inde üretra tıkanıklığı** vardı ve seride 77 kedinin 67’si erkekti. Yani idrarda kanla gelen kedilerin önemli bir kısmı zaten tıkanmış hâlde geliyor. Bu oranlar tek bir seriye ait, Türkiye geneli için bir tahmin değil; ama sıralamayı gösteriyor.' },
    { kind: 'paragraf', metin: 'Cornell, idiopatik sistiti "kedilerde en sık konan tanı" olarak tanımlıyor ve bulguların tedaviden bağımsız olarak birkaç hafta içinde gerilediğini belirtiyor. Buradan çıkan sonuç "o zaman beklerim" değil: tıkanıklık ihtimali dışlanmadan hangi tablo olduğu bilinmiyor.' },

    { kind: 'baslik', metin: 'Aynı gün başvuru gerektiren tablo' },
    { kind: 'liste', maddeler: [
      'Kum kabına gidip hiç idrar çıkaramamak',
      'Zorlanmaya rağmen birkaç damla çıkması',
      'İdrar yaparken sesli ağrı belirtisi',
      'Halsizlik, kusma, iştahın kesilmesi',
      'Karnın gergin olması ve dokunmaya tepki',
      'Erkek kedide bu bulguların herhangi biri',
    ] },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlı; teşhis ve tedavi yerine geçmez. İdrar yapamayan kedi bekletilmez, aynı gün en yakın veteriner hekime başvurulur.' },

    { kind: 'baslik', metin: 'Muayenede ne yapılıyor' },
    { kind: 'paragraf', metin: 'Cornell’in tarif ettiği ilk basamak fizik muayene ve idrar tahlili. Gerekirse kan tahlili, röntgen, ultrason ve idrar kültürü ekleniyor. Taş tipinin (struvit ya da kalsiyum oksalat) belirlenmesi tedaviyi ve sonraki beslenme planını değiştiriyor.' },
    { kind: 'paragraf', metin: 'Kan tahlilinin hangi başlıklara baktığı için [[evcil-hayvanlarda-kan-tahlili|kan tahlili]] yazısına, düzenli kontrolün bu tabloları erken yakalamadaki rolü için [[kedi-kopek-check-up-ne-zaman|check-up]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Karar tablosu' },
    { kind: 'tablo', basliklar: ['Durum', 'Ne yapılır'], satirlar: [
      ['Kumda tek seferlik pembe iz, kedi normal', 'Aynı gün hekime danışılır, gözlem başlatılır'],
      ['Sık sık kum kabına gidiyor, az idrar var', 'Aynı gün başvurulur'],
      ['Zorluyor, idrar çıkmıyor', 'Acil başvuru, beklenmez'],
      ['Erkek kedi, zorlanma var', 'Acil başvuru, beklenmez'],
      ['Kusma, halsizlik eşlik ediyor', 'Acil başvuru'],
      ['Şikâyet geçti ama tekrarlıyor', 'Zemin araştırılır; tekrar eden tablo tek atak gibi tedavi edilmez'],
    ] },

    { kind: 'baslik', metin: 'Erkek ve dişi kedide tablo neden farklı' },
    { kind: 'paragraf', metin: 'Alt idrar yolu hastalığı cinsiyet ayırmıyor; tehlikeli olan tıkanıklık ise ayırıyor. Erkek kedide üretra daha uzun ve uç kısmına doğru belirgin biçimde daralıyor. Kristal, mukus ve iltihap hücrelerinden oluşan tıkacın takıldığı yer çoğunlukla burası. Dişi kedide aynı hastalık görülüyor ama kanal daha geniş olduğu için tam tıkanıklık çok daha seyrek.' },
    { kind: 'paragraf', metin: 'Bu yüzden iki kedide aynı bulgu farklı aciliyet taşıyor: kanlı idrar yapan dişi kedide aynı gün değerlendirme yeterliyken, zorlanan ve idrar çıkaramayan erkek kedide saat sayılıyor. Kısırlaştırılmış erkek kedilerde risk daha da öne çıkıyor; [[kediler-ne-zaman-kisirlastirilmali|kısırlaştırma zamanlaması]] yazısında bu başlık ayrıca geçiyor.' },

    { kind: 'baslik', metin: 'Kum kabı, evin en iyi ölçüm aracı' },
    { kind: 'paragraf', metin: 'Bu hastalıkta ilk bulguyu genelde tahlil değil, kum kabı veriyor. Topaklanan kum kullanan evlerde topağın büyüklüğü idrar miktarını, sayısı ise sıklığı gösteriyor. Günlük temizlik sırasında iki soruya bakmak yetiyor: her zamankinden çok mu daha küçük topak var, ve toplam sayı arttı mı.' },
    { kind: 'liste', maddeler: [
      'Normalde birkaç büyük topak varken çok sayıda küçük topak çıkması',
      'Kum kabında uzun süre oturup çıkması, çıkınca hemen geri dönmesi',
      'Kabın dışına, küvete, lavaboya ya da yumuşak zemine yapması',
      'Kum kabında ya da yattığı yerde pembe-kırmızı leke',
      'İdrar yaparken ses çıkarması',
    ] },
    { kind: 'paragraf', metin: 'Çok kedili evde hangi kedinin yaptığını ayırmak zorlaşıyor. Böyle durumlarda kedileri kısa süreliğine ayrı kum kaplarıyla izlemek ya da kabı gün içinde birkaç kez kontrol etmek, hekime götürülecek bilgiyi netleştiriyor.' },

    { kind: 'baslik', metin: 'Tekrarı azaltan başlıklar' },
    { kind: 'paragraf', metin: 'İdiopatik tabloda tedavi sonrası asıl iş nüksü azaltmak oluyor; Cornell hastalığın orta yaşlı, kilolu ve az hareket eden kedilerde daha sık görüldüğünü belirtiyor. Bu üç başlık evde doğrudan çalışılabiliyor: su tüketimini artırmak, kiloyu hekimle birlikte hedefe çekmek ve günlük oyunla hareketi düzenli hâle getirmek.' },
    { kind: 'paragraf', metin: 'Kum kabı düzeni de sanıldığından fazla etkili. Kedi sayısından bir fazla kap, sessiz ve geçiş yolu üzerinde olmayan konum, günlük temizlik ve kedinin alıştığı kumdan vazgeçmemek ilk sırada geliyor. Ev içi stresi azaltan düzenlemeler, mama ve tedavi kararları ise hekimle birlikte veriliyor.' },

    { kind: 'baslik', metin: 'Eve dönerken' },
    { kind: 'paragraf', metin: 'İdrarda kan tek başına bir teşhis değil, bir yön tabelası. Asıl soru kedinin idrarını **yapabiliyor** olup olmadığı. Yapabiliyorsa değerlendirme aynı gün planlanır; yapamıyorsa saat değil dakika konuşulur.' },
  ],
  kontrolListesi: [
    'Kum kabını günde iki kez kontrol edin',
    'Topak sayısı ve boyutunu kıyaslayın',
    'Erkek kedide zorlanma varsa beklemeyin',
    'Kedi sayısı + 1 kum kabı bulundurun',
    'Su kabını mamadan uzağa koyun',
    'Nüks tarihlerini kaydedin',
  ],
  sss: [
    { soru: 'Kedimin idrarında kan gördüm ama keyfi yerinde, bekleyebilir miyim?', cevap: 'Keyfin yerinde olması tıkanıklık ihtimalini dışlamıyor; kedi ağrısını uzun süre saklayabiliyor. Kedi idrarını rahat yapabiliyorsa aynı gün hekime danışılır. Zorlanma varsa, kum kabına sık gidip az çıkarıyorsa ya da hiç idrar çıkmıyorsa tablo acil kabul edilir ve beklenmez.' },
    { soru: 'Neden erkek kediler daha riskli?', cevap: 'Erkek kedilerde üretra daha dar olduğu için tıkanma riski yüksek. 77 kedilik bir seride kedilerin 67’si erkekti ve başvuru anında %58’inde tıkanıklık vardı. Cornell de tıkanıklığı gerçek bir tıbbi acil olarak tanımlıyor.' },
    { soru: 'Kan idrar yolu enfeksiyonundan mı geliyor?', cevap: 'Her zaman değil, hatta çoğu zaman değil. 77 kedilik seride idrar yolu enfeksiyonu oranı %8 çıktı; en sık tanı, sebebi bulunamayan idiopatik hastalıktı. Bu yüzden antibiyotik kararı peşinen verilmiyor, tanı idrar tahlili ve gerekirse görüntülemeyle konuyor.' },
    { soru: 'Kum kabının dışına yapıyor, ceza vermeli miyim?', cevap: 'Hayır. Bu davranış çoğu zaman ağrıyla kum kabı arasında kurulan ilişkiden kaynaklanıyor: kedi acıyı kaba bağlıyor ve başka zemin arıyor. Ceza hem tabloyu hem aranızdaki ilişkiyi kötüleştiriyor. Yapılması gereken şey ceza değil, tıbbi değerlendirme ve ardından kum kabı düzeninin gözden geçirilmesi.' },
    { soru: 'Tekrarlamasını nasıl azaltırım?', cevap: 'Su tüketimi, kilo, hareket, kum kabı düzeni ve stres başlıkları hekimle birlikte gözden geçirilir. Cornell, hastalığın orta yaşlı, kilolu ve az hareket eden kedilerde daha sık görüldüğünü belirtiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine · Cornell Feline Health Center',
      baslik: 'Feline Lower Urinary Tract Disease',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-lower-urinary-tract-disease',
    },
    {
      kurum: 'British Small Animal Veterinary Association',
      baslik: 'Evaluation of clinical signs and causes of lower urinary tract disease in European cats',
      yazarlar: 'Gerber B, Boretti FS, Kley S, Laluha P, Müller C ve ark.',
      dergi: 'Journal of Small Animal Practice',
      yil: 2005,
      kunye: '46(12):571-577',
      doi: '10.1111/j.1748-5827.2005.tb00288.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/16355731/',
    },
  ],
};
