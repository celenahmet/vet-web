import type { BlogYazi } from './types';

/**
 * KEDI kategorisi. Iki dayanak:
 *   1. Cornell Feline Health Center — kusma sikligi olcutu (haftada birden sik
 *      degerlendirme gerektirir), tuy yumagi icin iki haftada bir beklenen
 *      araligi, kirmizi bayraklar ve tani basamaklari.
 *   2. Norsworthy ve ark. 2013, JAVMA 243(10):1455-61 — kronik kusma, kilo kaybi
 *      ve ince bagirsak kalinlasmasi olan 100 kedinin 99'unda kronik ince
 *      bagirsak hastaligi bulundu; en sik kronik enterit ve intestinal lenfoma.
 *      Calismanin kendi sonucu: bu bulgular NORMAL SAYILMAMALI.
 *
 * ⚠️ SIKLIK ORANI UYDURULMADI. "Kedilerin yuzde su kadari kusar" gibi bir cumle
 * yazilmadi; iki kaynakta da oyle bir oran yok. Verilen tek sayisal olcut
 * Cornell'in siklik esigi ve calismanin 99/100 bulgusu.
 *
 * ⚠️ TEDAVI TARIF EDILMIYOR. Evde ilac, ac birakma suresi ya da mama degisimi
 * onerisi yok: ikisi de hekim karari. Yazinin isi, bekleme ile basvuru
 * arasindaki siniri gostermek.
 */
export const kedimKusuyor: BlogYazi = {
  slug: 'kedim-kusuyor',
  baslik: 'Kedim Kusuyor: Ne Zaman Beklenir, Ne Zaman Veterinere Gidilir?',
  ozet: 'Kedilerde kusma sık görülüyor ama "kedi zaten kusar" cümlesi çoğu zaman yanlış. Sıklık, süre ve eşlik eden bulgular sınırı belirliyor.',
  kapakAlt:
    'Kedilerde kusma konulu yazının kapak görseli; kusma sıklığı, kırmızı bayraklar ve veterinere başvuru zamanı',
  kategori: 'Kedi',
  tarih: '2026-09-16',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedi sahiplerinin en sık sorduğu şeylerden biri: “kustu, önemli mi?” Cevap tek bir kusmada değil, **desende** saklı. Ne sıklıkta olduğu, ne kadar sürdüğü ve yanında başka bulgu olup olmadığı, evde beklenecek bir tabloyla hekime götürülecek bir tabloyu ayırıyor.' },
    { kind: 'paragraf', metin: 'Bu yazı üç şeyi ayırıyor: hangi kusma beklenebilir, hangi bulgu aynı gün başvuru gerektirir ve “kedi zaten kusar” cümlesi neden çoğu zaman yanlış.' },

    { kind: 'baslik', metin: 'Sıklık, tek kusmadan daha çok şey söylüyor' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Kedi Sağlığı Merkezi, kusmayı sıklığa göre değerlendiriyor: **haftada birden sık kusan** kedi veteriner değerlendirmesi gerektiriyor. Tüy yumağı için beklenen aralık ise daha geniş; iki haftada bir tüy yumağı çıkarmak tipik kabul ediliyor.' },
    { kind: 'paragraf', metin: 'Buradaki ayrım pratikte şöyle işliyor: ayda bir tüy yumağı çıkaran, kilosu sabit, iştahı yerinde bir kedi ile haftada üç kez kusan bir kedi aynı tabloda değil. İkincisinde kusma bir alışkanlık değil, bir bulgu.' },

    { kind: 'liste', maddeler: [
      'Ne sıklıkta: haftada bir mi, günde bir mi, ayda bir mi',
      'Ne çıkıyor: yem, tüy, safra, köpük, yabancı cisim',
      'Ne zaman: yemekten hemen sonra mı, aç karnına mı',
      'Yanında ne var: iştahsızlık, halsizlik, ishal, kilo kaybı, su tüketiminde artış',
      'Ne kadar zamandır: birkaç gün mü, haftalardır mı',
    ] },
    { kind: 'paragraf', metin: 'Bu beş başlık hekimin ilk soracağı şeyler. Kusmanın videosunu çekmek ya da tarih tutmak, muayenede tahmin yürütmeyi bitiriyor. Uygulamada sağlık kaydı tutuyorsanız tarihleri geriye dönük görebiliyorsunuz; kusmanın sıklaştığı çoğu zaman ancak böyle fark ediliyor.' },

    { kind: 'yanilgi', baslik: '"Kedi zaten kusar, normaldir" yanılgısı', metin: 'Bu cümle en sık tekrarlanan ve en çok zaman kaybettiren cümle. 2013 tarihli bir çalışma (JAVMA), kronik kusma, ince bağırsak ishali ya da kilo kaybı olan ve ultrasonda bağırsak duvarı kalınlaşmış 100 kediyi biyopsiyle inceledi: **99’unda kronik ince bağırsak hastalığı bulundu.** En sık iki tanı kronik enterit ve intestinal lenfomaydı. Çalışmanın kendi sonucu net: bu bulgular normal kabul edilmemeli ve “kedim zaten kusar” açıklamasıyla geçiştirilmemeli.' },

    { kind: 'baslik', metin: 'Aynı gün başvuru gerektiren bulgular' },
    { kind: 'paragraf', metin: 'Cornell’in listelediği uyarı bulguları, kusmanın yanında göründüğünde beklemeyi anlamsız kılıyor:' },
    { kind: 'liste', maddeler: [
      'Kusmukta kan olması',
      'Halsizlik, güçsüzlük, tepkisizlik',
      'İştahın belirgin azalması ya da tamamen kesilmesi',
      'Su tüketiminde belirgin artış',
      'İshalin eşlik etmesi',
      'Tekrarlayan kusma nedeniyle suyun da tutulamaması',
    ] },
    { kind: 'uyari', metin: 'Bu yazı bilgilendirme amaçlı; teşhis ve tedavi yerine geçmez. Yukarıdaki bulgulardan biri varsa ya da kedi kısa sürede birden çok kez kusuyorsa en yakın veteriner hekime başvurun.' },

    { kind: 'baslik', metin: 'Sık karşılaşılan sebepler' },
    { kind: 'paragraf', metin: 'Kusmanın arkasında sindirimle sınırlı bir sebep de olabiliyor, sistemik bir hastalık da. Cornell’in sıraladığı başlıklar iki kümede toplanıyor.' },
    { kind: 'tablo', basliklar: ['Çoğunlukla iyi huylu', 'Ciddi olabilen'], satirlar: [
      ['Tüy yumağı', 'Yabancı cisim ve bağırsak tıkanıklığı'],
      ['Bozuk yiyecek ya da uygunsuz insan yiyeceği', 'İç parazitler'],
      ['Hızlı yeme', 'Şeker hastalığı, böbrek hastalığı, hipertiroidi'],
      ['Mama değişikliğine uyum', 'İnflamatuvar bağırsak hastalığı'],
      ['', 'Bağırsakta kitle'],
      ['', 'Zehirlenme: zehirli bitkiler, antifriz, ilaçlar'],
    ] },
    { kind: 'paragraf', metin: 'İp, kurdele, lastik ve ataş gibi cisimler özellikle tehlikeli: kediler bunları oynarken yutabiliyor ve tıkanıklık yapabiliyor. İç parazit tarafı için [[kedilerde-ic-ve-dis-parazit|kedilerde iç ve dış parazit]] yazısına bakabilirsiniz; iştah tarafı içinse [[kedim-yemek-yemiyor|kedim yemek yemiyor]].' },

    { kind: 'baslik', metin: 'Muayenede ne yapılıyor' },
    { kind: 'paragraf', metin: 'Kusmanın sebebi dışarıdan bakarak ayrılmıyor; bu yüzden değerlendirme basamaklı ilerliyor. Cornell’in tarif ettiği sıra: ayrıntılı öykü, fizik muayene, kan tahlili, dışkı incelemesi ve görüntüleme (röntgen ya da ultrason). Bulgular net değilse bağırsak biyopsisi gündeme geliyor.' },
    { kind: 'paragraf', metin: 'Kan tahlilinin neyi gösterdiği ve neden istendiği için [[evcil-hayvanlarda-kan-tahlili|evcil hayvanlarda kan tahlili]] yazısı ayrıntılı. Düzenli kontrolün bu tabloları erken yakalamadaki rolü için [[kedi-kopek-check-up-ne-zaman|check-up ne zaman yapılmalı]].' },

    { kind: 'baslik', metin: 'Karar tablosu' },
    { kind: 'tablo', basliklar: ['Durum', 'Ne yapılır'], satirlar: [
      ['Ayda bir tüy yumağı, kedi keyifli', 'Takip edilir, tarama düzeni gözden geçirilir'],
      ['Haftada birden sık kusma', 'Hekime danışılır'],
      ['Kusma haftalardır sürüyor', 'Randevu alınır, öykü ve kilo kaydı götürülür'],
      ['Kilo kaybı ya da ishal eşlik ediyor', 'Değerlendirme geciktirilmez'],
      ['Kusmukta kan, halsizlik, su tutamama', 'Aynı gün başvurulur'],
      ['İp ya da cisim yuttuğundan şüphe var', 'Aynı gün başvurulur, beklenmez'],
    ] },

    { kind: 'baslik', metin: 'Kusma mı, çıkarma mı' },
    { kind: 'paragraf', metin: 'Sahibin gördüğü iki olay birbirine benziyor ama aynı yeri işaret etmiyor. Kusmada karın kasları çalışıyor: kedi öncesinde huzursuzlanıyor, salyası artıyor, öğürme sesi duyuluyor ve içerik güçle dışarı atılıyor. Çıkarmada yani regürjitasyonda böyle bir çaba yok; kedi başını eğiyor ve sindirilmemiş, çoğu zaman silindir biçiminde bir materyal ağzından geliyor.' },
    { kind: 'paragraf', metin: 'Ayrım önemli çünkü ikisi farklı organları düşündürüyor. Kusma mideyi ve ötesini, çıkarma ise yemek borusunu akla getiriyor. Muayenede hekimin ilk sorduğu şeylerden biri bu ve cevabı yalnızca olayı gören kişi verebiliyor. Hekime "kusuyor" demekle "yediğini olduğu gibi çıkarıyor" demek aynı bilgi değil.' },

    { kind: 'baslik', metin: 'Kronik kusmada kayıt tutmak' },
    { kind: 'paragraf', metin: 'Tek seferlik kusmada kayıt gerekmiyor; tekrarlayan kusmada ise tanıyı hızlandıran şey çoğu zaman sahibin tuttuğu kayıt oluyor. Kronik tabloda muayene anındaki tek fotoğraf yetmiyor, hekim haftalar içindeki eğilimi görmek istiyor. Kilo kaybının sinsi ilerlediği bu tablolarda eğilim, tek bir tartımdan çok daha fazlasını söylüyor.' },
    { kind: 'liste', maddeler: [
      'Tarih ve saat: kusma yemekten hemen sonra mı, aç karnına mı',
      'İçerik: yiyecek, köpük, safra, tüy, kan',
      'Kilo: aynı terazide, mümkünse haftada bir ve aynı saatte',
      'İştah ve su tüketimindeki değişiklik',
      'Dışkı düzeni: kıvam, sıklık, renk',
      'Mama değişikliği, yeni bir ödül maması ya da eve yeni giren bir bitki',
    ] },
    { kind: 'paragraf', metin: 'Bu kayıtları telefon notunda tutmak da işe yarıyor; tartım ve not aynı yerde biriktiğinde muayenede tek ekrandan gösterilebiliyor. İştahın kesilmesi ayrı bir başlık; [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısı oradan devam ediyor. Yeni giren bitki başlığı için [[kediler-icin-zehirli-bitkiler|kediler için zehirli bitkiler]] listesine bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Eve dönerken' },
    { kind: 'paragraf', metin: 'Kusma kedilerde sık görülüyor, bu doğru. Ama sık görülmesi onu normal yapmıyor. Karar verirken bakılacak üç şey var: sıklık, süre ve eşlik eden bulgular. Üçünden biri sınırı geçtiğinde beklemek, kazanılan zamanı değil kaybedilen zamanı büyütüyor.' },
  ],
  kontrolListesi: [
    'Haftada kaç kez kustuğunu not edin',
    'Ne çıktığını yazın: tüy, safra, kan',
    'Haftada bir aynı terazide tartın',
    'Kusma anının kısa videosunu çekin',
    'Aç bırakma kararını hekime bırakın',
    'Eve yeni giren bitkiyi kontrol edin',
  ],
  sss: [
    {
      soru: 'Kedim ayda bir tüy yumağı çıkarıyor, normal mi?',
      cevap: 'Cornell Kedi Sağlığı Merkezi, iki haftada bir tüy yumağı çıkarmayı tipik kabul ediyor. Ayda bir çıkaran, kilosu ve iştahı yerinde bir kedi bu aralığın içinde. Sıklık artıyorsa ya da yanında başka bulgu varsa değerlendirme gerekiyor.',
    },
    {
      soru: 'Kaç kez kusarsa veterinere gitmeliyim?',
      cevap: 'Sıklık ölçütü haftada bir: bundan sık kusan kedi değerlendirilmeli. Kısa sürede tekrarlayan kusma, kanlı kusma, halsizlik ya da suyun tutulamaması durumunda sayı beklenmeden aynı gün başvurulur.',
    },
    {
      soru: 'Kedim kusuyor ama iştahı yerinde, yine de gitmeli miyim?',
      cevap: 'İştahın yerinde olması tabloyu tek başına güvenli yapmıyor. 2013 tarihli JAVMA çalışmasında kronik kusma ve kilo kaybı olan 100 kedinin 99’unda tedavi edilebilir bir bağırsak hastalığı bulundu. Kusma haftalardır sürüyorsa iştahtan bağımsız olarak değerlendirme isteniyor.',
    },
    {
      soru: 'Evde aç bırakmak doğru mu?',
      cevap: 'Aç bırakma süresi, mama değişimi ve ilaç kullanımı hekim kararı. Özellikle kedilerde uzun süre yemek yememek ayrı bir risk oluşturuyor; evde karar vermek yerine hekime danışmak gerekiyor.',
    },
    {
      soru: 'Muayeneye giderken ne götürmeliyim?',
      cevap: 'Kusmanın tarihleri ve sıklığı, her seferinde ne çıktığı, son haftalardaki kilo değişimi, kullanılan mama ile parazit ve aşı geçmişi işe yarıyor. Mümkünse kusma anının kısa bir videosunu çekin: hekim kusmayla çıkarmayı bu görüntüden ayırabiliyor. Bu bilgiler tanı basamaklarını belirgin biçimde kısaltıyor.',
    },
  ],
  kaynaklar: [
    {
      kurum: 'Cornell University College of Veterinary Medicine · Cornell Feline Health Center',
      baslik: 'Vomiting',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/vomiting',
    },
    {
      kurum: 'American Veterinary Medical Association',
      baslik: 'Diagnosis of chronic small bowel disease in cats: 100 cases (2008-2012)',
      yazarlar: 'Norsworthy GD, Scot Estep J, Kiupel M, Olson JC, Gassler LN',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 2013,
      kunye: '243(10):1455-1461',
      doi: '10.2460/javma.243.10.1455',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/24171376/',
    },
  ],
};
