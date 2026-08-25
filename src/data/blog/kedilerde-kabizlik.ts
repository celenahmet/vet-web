import type { BlogYazi } from './types';

/**
 * KEDI kategorisi. Dayanak Munif ve ark. 2026 (The Veterinary Journal):
 * megakolonun siddetli ve inatci kabizligin bir sonucu oldugu, kalici kolon
 * genislemesi ve hareket kaybiyla seyrettigi. Sure ve oran verilmiyor;
 * kaynakta yok.
 */
export const kedilerdeKabizlik: BlogYazi = {
  slug: 'kedilerde-kabizlik',
  baslik: 'Kedilerde Kabızlık: Ne Zaman Beklenir, Ne Zaman Gidilir?',
  ozet: 'Kum kabına girip çıkan ama çıkaramayan kedi bekletilmiyor. Kabızlık ihmal edildiğinde geri dönüşü zor bir tabloya ilerleyebiliyor.',
  kategori: 'Kedi',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Kedinin kum kabına girip uzun süre kalması, zorlanması ve sonuç alamadan çıkması sık görülen bir tablo. Çoğu zaman “bir iki gün bakalım” deniyor. Oysa kabızlıkta bekleme kararı, düşünüldüğü kadar zararsız değil.' },
    { kind: 'paragraf', metin: 'Bu yazı üç şeyi ayırıyor: kabızlık nasıl anlaşılır, hangi bulgular beklemeye uygun değil, ve ihmal edilirse ne oluyor.' },

    { kind: 'baslik', metin: 'Kabızlık her zaman görünür değil' },
    { kind: 'paragraf', metin: 'Kapalı kum kabı kullanan ya da dışarı çıkan kedilerde dışkının ne sıklıkta ve nasıl çıktığı görülmüyor. Bu yüzden kabızlık çoğu zaman dolaylı belirtilerle fark ediliyor.' },
    { kind: 'liste', maddeler: [
      'Kum kabına sık girip boş çıkmak',
      'Kum kabında uzun süre zorlanır hâlde kalmak',
      'Sert, küçük ve kuru dışkı',
      'Kum kabının dışına tuvalet yapmaya başlamak',
      'İştahta azalma, kusma',
      'Karnına dokunulmasına izin vermemek',
    ] },
    { kind: 'paragraf', metin: 'Dördüncü madde özellikle yanlış anlaşılıyor: kum kabının dışına tuvalet yapmak inatçılık sanılıyor. Oysa kedi çoğu zaman **ağrıyı kum kabıyla ilişkilendirdiği için** oraya girmekten kaçınıyor.' },

    { kind: 'yanilgi', baslik: '"Zorlanıyor ama idrar yapıyor, acil değil" yanılgısı', metin: 'Kum kabında zorlanan bir kedinin dışkı mı yoksa idrar mı yapamadığını dışarıdan ayırmak çoğu zaman mümkün değil. İdrar yapamama, özellikle erkek kedilerde saatler içinde hayatı tehdit eden bir durum. Zorlanma varsa ve sonuç alınamıyorsa, hangi ikisi olduğu tahmin edilmiyor; aynı gün başvuruluyor.' },

    { kind: 'baslik', metin: 'İhmal edildiğinde ilerleyebiliyor' },
    { kind: 'paragraf', metin: 'Kabızlığın kendi başına geçmesi mümkün, ama tekrarlayan ve inatçı hâle gelen tablolarda süreç ilerleyebiliyor. 2026 tarihli bir derleme, kedilerde **megakolonu** şiddetli ve tedaviye dirençli kabızlığın kritik bir sonucu olarak tanımlıyor: kalın bağırsakta kalıcı genişleme ve hareket kaybı gelişiyor.' },
    { kind: 'paragraf', metin: 'Buradaki mesaj bir korkutma değil, bir zamanlama bilgisi: kabızlık erken ele alındığında yönetilebilir bir sorun, uzadığında yapının kendisi değişebiliyor. Bu yüzden “tekrarlıyor ama geçiyor” cümlesi rahatlatıcı değil, aksine bir uyarı.' },

    { kind: 'tablo', basliklar: ['Durum', 'Ne yapılır'], satirlar: [
      ['Bir günlük gecikme, kedi keyifli', 'Su ve hareket gözlenir, takip edilir'],
      ['İki gün dışkı yok', 'Hekime danışılır'],
      ['Zorlanma var, sonuç yok', 'Aynı gün başvurulur'],
      ['Kusma, iştahsızlık eşlik ediyor', 'Aynı gün başvurulur'],
      ['Tekrarlayan kabızlık', 'Zemin araştırılır, sadece o atak tedavi edilmez'],
    ] },

    { kind: 'baslik', metin: 'Zemin çoğu zaman tek şey değil' },
    { kind: 'paragraf', metin: 'Kabızlıkta bakılan başlıklar arasında su tüketimi, mama türü, hareket düzeyi, tüy yutma, ağrı kaynakları ve kum kabı düzeni var. Bunların hepsi aynı anda etkili olabiliyor; birini düzeltip diğerini bırakmak çoğu zaman kısmi sonuç veriyor.' },
    { kind: 'liste', maddeler: [
      'Su tüketimi: kuru mama ağırlıklı beslenmede su alımı düşebiliyor',
      'Hareket: az hareket eden kedide bağırsak hareketi de azalıyor',
      'Tüy: uzun tüylü kedilerde yutulan tüy miktarı artıyor',
      'Ağrı: eklem ağrısı olan kedi çömelme pozisyonundan kaçınabiliyor',
      'Kum kabı: kirli, dar ya da ulaşılması zor kap kullanımı azaltıyor',
    ] },
    { kind: 'paragraf', metin: 'Son madde çok kaçırılıyor. Yaşlı bir kedi için yüksek kenarlı bir kaba tırmanmak zorlaşıyor ve kedi tuvaletini erteliyor; ertelenen her seferde dışkı biraz daha kuruyor.' },

    { kind: 'yanilgi', baslik: '"Zeytinyağı veririm, yumuşatır" yanılgısı', metin: 'Evde uygulanan yağ ve müshil türü çözümler, tıkanma varsa durumu ağırlaştırabiliyor; ayrıca yanlış verildiğinde akciğere kaçma riski taşıyor. Kabızlığın sebebi bilinmeden yumuşatıcı verilmiyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Kabızlıkta uygulanacak her yöntem, tıkanma olup olmadığı değerlendirildikten sonra veteriner hekim tarafından belirlenir. İnsanlar için üretilmiş müshiller kedilerde kullanılmaz.' },

    { kind: 'baslik', metin: 'Su tüketimini artırmanın pratik yolları' },
    { kind: 'paragraf', metin: 'Kabızlıkta en çok konuşulan başlık su. Kediler doğaları gereği az su içen hayvanlar; atalarının suyu büyük ölçüde avdan aldığı düşünülüyor. Kuru mama ağırlıklı bir beslenmede bu açık kapanmayabiliyor.' },
    { kind: 'paragraf', metin: 'Su tüketimini artırmak için sık kullanılan düzenlemeler şunlar:' },
    { kind: 'liste', maddeler: [
      'Birden fazla su kabı, evin farklı noktalarında',
      'Su kabını mama kabından ayrı bir yere koymak',
      'Kabı duvara dayamamak: kedi etrafını görebilmeli',
      'Geniş ve sığ kap: bıyıkların kaba değmesi rahatsız ediyor',
      'Suyu günde birkaç kez tazelemek',
      'Yaş mama seçeneklerini hekimle konuşmak',
    ] },
    { kind: 'paragraf', metin: 'Dördüncü madde sık atlanıyor. Dar ve derin kaplarda kedinin bıyıkları kenara değiyor ve bu rahatsızlık su içme süresini kısaltıyor. Geniş bir kap, aynı kediye daha fazla su içirebiliyor.' },

    { kind: 'baslik', metin: 'Kum kabı düzeni sanılandan önemli' },
    { kind: 'paragraf', metin: 'Kabızlık her zaman bağırsakta başlamıyor; bazen kum kabında başlıyor. Kedi tuvaletini ertelediğinde dışkı bağırsakta daha uzun kalıyor ve su çekilmesiyle sertleşiyor. Erteleme sebepleri çoğu zaman basit ve düzeltilebilir.' },
    { kind: 'liste', maddeler: [
      'Kap kirliyse kedi girmekten kaçınıyor',
      'Kap dar ya da kapalıysa dönmekte zorlanıyor',
      'Yüksek kenar, yaşlı ve eklem ağrılı kedide engel oluyor',
      'Gürültülü ya da geçiş yolu üzerindeki konum rahatsız ediyor',
      'Evde birden fazla kedi varsa kap sayısı yetmiyor olabilir',
    ] },
    { kind: 'paragraf', metin: 'Yaşlı kedilerde üçüncü madde özellikle önemli. Yüksek kenarlı bir kaba tırmanmak zorlaştığında kedi tuvaletini erteliyor; ertelenen her seferde dışkı biraz daha kuruyor ve döngü kendini besliyor. Alçak kenarlı bir kap bu döngüyü kırabiliyor.' },

    { kind: 'baslik', metin: 'Takip etmek tedavinin parçası' },
    { kind: 'paragraf', metin: 'Kabızlık tekrarlayan bir sorun olduğunda, hekimin en çok ihtiyaç duyduğu şey tarih. Son ne zaman oldu, kaç gün sürdü, ne verildi, ne değişti. Bu bilgi hafızada tutulduğunda güvenilir olmuyor.' },
    { kind: 'paragraf', metin: 'Veterito’da kedinizin kaydına bu tarihleri ekleyebilirsiniz; tekrarlayan bir tabloda yazılı kayıt, tahminin yerini alıyor. Beslenme tarafı için [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazısı da ilgili olabilir.' },
    { kind: 'paragraf', metin: 'Hekime giderken götürülen bilgi ne kadar somutsa, değerlendirme o kadar hızlı ilerliyor. "Birkaç gündür zorlanıyor" cümlesi ile "salı akşamından beri dışkı yok, çarşamba iki kez kusma oldu, su tüketimi azaldı" cümlesi aynı şeyi anlatmıyor. İkincisi, muayenede hangi yönde ilerleneceğini baştan daraltıyor.' },
  ],
  kontrolListesi: [
    'Kaç gündür çıkmadığını not edin',
    'Zorlanmada idrarı da düşünün',
    'Su kabı sayısını artırın',
    'Kum kabı temiz ve alçak olsun',
    'Evde yağ ya da müshil vermeyin',
    'Tekrarlıyorsa tarihleri kaydedin',
  ],
  sss: [
    { soru: 'Kedi kaç günde bir dışkılamalı?', cevap: 'Kediden kediye değişiyor ve buraya tek bir sayı yazmak doğru olmaz. Önemli olan kedinin kendi alışılmış düzeninden sapması ve buna zorlanmanın eşlik etmesi. Düzenini bilmek için kum kabının düzenli temizlenmesi ve gözlem yapılması gerekiyor.' },
    { soru: 'Kum kabının dışına yapması inat mı?', cevap: 'Genellikle değil. Kedi tuvalet sırasında ağrı yaşadığında bunu kum kabıyla ilişkilendirebiliyor ve oraya girmekten kaçınıyor. Yani kum kabının dışına yapmak çoğu zaman bir davranış sorunu değil, bir ağrı işareti oluyor.' },
    { soru: 'Malt işe yarar mı?', cevap: 'Tüy yutmayla ilgili bir tabloda hekim önerebiliyor. Ancak kabızlığın sebebi bilinmeden kendi başına başlanan bir çözüm değil; tıkanma olasılığı varsa bağırsağı hareketlendirmeye çalışmak durumu ağırlaştırabiliyor. Karar muayeneden sonra veriliyor.' },
    { soru: 'Kabızlık kendiliğinden geçer mi?', cevap: 'Tek seferlik tablolar geçebiliyor. Ancak tekrarlayan ve tedaviye dirençli hâle gelen kabızlık, kalın bağırsakta kalıcı genişleme ve hareket kaybına ilerleyebiliyor. Bu yüzden "tekrarlıyor ama geçiyor" cümlesi rahatlatıcı değil, aksine bir uyarı sayılıyor.' },
    { soru: 'Su tüketimini nasıl artırırım?', cevap: 'Evin farklı noktalarında birden fazla su kabı, mama kabından ayrı konum, geniş ve sığ kap kullanımı ve suyun günde birkaç kez tazelenmesi sık kullanılan yöntemler. Yaş mama seçeneği ve miktar kararı hekimle birlikte veriliyor.' },
    { soru: 'Yaşlı kedide daha mı sık görülüyor?', cevap: 'Eklem ağrısı ve azalan hareket kabızlığı kolaylaştırabiliyor. Ayrıca yüksek kenarlı bir kum kabına tırmanmak zorlaştığında kedi tuvaletini erteliyor ve dışkı bağırsakta daha uzun kalarak sertleşiyor. Alçak kenarlı bir kap bu döngüyü kırabiliyor.' },
    { soru: 'Kaç kum kabı olmalı?', cevap: 'Birden fazla kedi olan evlerde kap sayısının yetersiz kalması sık görülüyor ve bu, kedilerin tuvaletlerini ertelemesine yol açabiliyor. Kapların temiz, kolay ulaşılır ve sakin bir konumda olması, sayı kadar önemli.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of New England (Avustralya) ve University of Florida College of Veterinary Medicine',
      yazarlar: 'Munif MR, Williams RW, Mumu TT',
      baslik: 'Megacolon in cats: Current insights and future directions',
      dergi: 'The Veterinary Journal',
      yil: 2026,
      kunye: '315:106531',
      doi: '10.1016/j.tvjl.2025.106531',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/41354320/',
    },
  ],
};
