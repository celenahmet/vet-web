import type { BlogYazi } from './types';

/**
 * KOPEK kategorisi. Ksilitol icin verilen esik degerleri DuHadway ve ark.
 * 2015 (J Vet Emerg Crit Care) calismasinin bulgulari; 192 vakalik geriye
 * donuk seri. Ozette gecmeyen hicbir sayi yazilmadi.
 */
export const kopeklerdeZehirlenme: BlogYazi = {
  slug: 'kopeklerde-zehirlenme',
  baslik: 'Köpeklerde Zehirlenme Nasıl Anlaşılır?',
  ozet: 'Zehirlenmede en kritik bilgi belirti değil, zaman. Belirti çıkmasını beklemek çoğu maddede müdahale penceresini kapatıyor.',
  kategori: 'Köpek',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Zehirlenme şüphesinde ilk refleks belirti aramak oluyor: kusuyor mu, titriyor mu, halsiz mi. Oysa çoğu maddede **belirti gecikmeli çıkıyor** ve belirti çıktığında en etkili müdahale zamanı çoktan geçmiş oluyor.' },
    { kind: 'paragraf', metin: 'Bu yazı iki şeyi ayırıyor: belirtilerden zehirlenmeyi anlamak ile maruz kalmayı bilip belirti beklemeden hareket etmek. İkincisi hayat kurtarıyor.' },

    { kind: 'baslik', metin: 'Belirtiler geç ve genel' },
    { kind: 'paragraf', metin: 'Zehirlenme belirtilerinin çoğu başka pek çok durumda da görülüyor. Yani belirti, zehirlenmeyi kanıtlamıyor; yalnız acil değerlendirme gerektiğini gösteriyor.' },
    { kind: 'liste', maddeler: [
      'Kusma, ishal, aşırı salya',
      'Halsizlik, dengesiz yürüme, titreme',
      'Kas seğirmesi, nöbet',
      'Hızlı ya da güçlükle solunum',
      'Diş etlerinde solukluk',
      'Aşırı su içme, idrar miktarında belirgin değişiklik',
      'Huzursuzluk ya da olağandışı durgunluk',
    ] },
    { kind: 'paragraf', metin: 'Bu liste bir tanı aracı değil. Tek başına hiçbir madde "zehirlenme" demiyor, hepsi birden "beklemeyin" diyor.' },

    { kind: 'yanilgi', baslik: '"Kusturayım, atlatır" yanılgısı', metin: 'Evde kusturmak her maddede doğru değil ve bazılarında zararlı. Aşındırıcı maddeler yemek borusundan geri gelirken ikinci kez hasar veriyor; bilinci bulanık bir hayvanda kusturmak kusmuğun akciğere kaçmasına yol açabiliyor. Kusturma kararı, maddeye ve geçen süreye bakan veteriner hekimin kararı. Telefonla arayıp sormak, evde denemekten hızlı.' },

    { kind: 'baslik', metin: 'Miktar önemli: ksilitol örneği' },
    { kind: 'paragraf', metin: 'Bazı maddelerde riskin dozla ölçüldüğünü gösteren iyi bir örnek ksilitol. Şekersiz sakız, bazı diş macunları ve tatlandırıcılarda bulunan bu madde köpeklerde kan şekerini düşürüyor.' },
    { kind: 'paragraf', metin: 'Üç üniversite hastanesinde 2007-2012 arasındaki 192 köpek vakasını inceleyen geriye dönük bir çalışmada eşik şöyle özetlenmiş: **kilogram başına 0,1 gramın üzerinde** ksilitol alan köpekler kan şekeri düşmesi açısından risk altında; **0,5 gramın üzerinde** alanlarda akut karaciğer yetmezliği gelişebiliyor.' },
    { kind: 'paragraf', metin: 'Buradaki asıl bilgi sayılar değil, sayıların varlığı: "biraz yedi" ile "paketi bitirdi" aynı durum değil. Bu yüzden klinikte sorulacak ilk şeylerden biri ne kadar alındığı oluyor.' },

    { kind: 'paragraf', metin: 'Çikolata da benzer bir örnek. Berlin’de 2015-2019 arasında görülen 156 çikolata alımı olayını inceleyen bir seride, vakaların büyük bölümünde belirti hafif kalmış ama miktar ve çikolatanın türü belirleyici olmuş. Bitter çikolatadaki teobromin oranı sütlüye göre yüksek olduğu için aynı gram farklı risk demek.' },

    { kind: 'baslik', metin: 'Kliniğe giderken götürülecek üç bilgi' },
    { kind: 'tablo', basliklar: ['Bilgi', 'Neden önemli', 'Nasıl hazırlanır'], satirlar: [
      ['Ne alındı', 'Tedavi maddeye göre değişiyor', 'Ambalajı yanınıza alın'],
      ['Ne kadar alındı', 'Risk dozla ölçülüyor', 'Kalan miktardan tahmin edin'],
      ['Ne zaman alındı', 'Müdahale penceresini belirliyor', 'Saat verin, "biraz önce" demeyin'],
    ] },
    { kind: 'paragraf', metin: 'Ambalajı götürmek tahminden iyi. İçerik listesi, maddenin yoğunluğu ve üretici bilgisi hekimin dakikalar kazanmasını sağlıyor.' },

    { kind: 'baslik', metin: 'Riski önden azaltmak' },
    { kind: 'paragraf', metin: 'Zehirlenmelerin önemli bölümü mutfakta ve çantada başlıyor. Hangi yiyeceklerin köpekler için riskli olduğunu [[kopeklere-zararli-yiyecekler|zararlı yiyecekler]] yazısında ayrıntılı ele aldık. İlaçlar, temizlik ürünleri ve şekersiz ürünler kapalı dolapta durduğunda risk belirgin biçimde düşüyor.' },

    { kind: 'uyari', metin: 'Zehirlenme şüphesi acil bir durumdur. Bu yazı bilgilendirme amaçlıdır ve müdahale talimatı değildir. Şüphe hâlinde belirti beklemeden veteriner hekiminizi ya da en yakın acil kliniği arayın; evde kusturma dâhil hiçbir işlemi hekime danışmadan uygulamayın.' },
  ],
  sss: [
    { soru: 'Belirti yoksa yine de kliniğe gitmeli miyim?', cevap: 'Evet. Pek çok maddede belirti saatler sonra çıkıyor ve o noktada en etkili müdahale dönemi kapanmış oluyor. Karar belirtiye değil, maruz kalmaya göre verilir.' },
    { soru: 'Evde kusturmak doğru mu?', cevap: 'Her maddede doğru değil, bazılarında zararlı. Aşındırıcı maddelerde ve bilinci açık olmayan hayvanda kusturmak ek hasar üretebiliyor. Kararı hekim veriyor.' },
    { soru: 'Ne kadar aldığını bilmiyorum, ne yapmalıyım?', cevap: 'Kalan miktardan tahmin edip ambalajla birlikte kliniğe gidin. Bilinmeyen miktar, gitmemek için sebep değil; hekim en kötü senaryoya göre değerlendiriyor.' },
    { soru: 'Ksilitol neden özellikle tehlikeli?', cevap: 'Köpeklerde insülin salınımını uyarıp kan şekerini düşürüyor; yüksek dozda karaciğer yetmezliğine yol açabiliyor. Şekersiz ürünlerde yaygın olduğu için farkında olmadan alınması kolay.' },
  ],
  kontrolListesi: [
    'Veteriner hekiminizin ve en yakın acil kliniğin numarasını telefonunuza kaydedin.',
    'İlaç, temizlik ürünü ve şekersiz ürünleri kapalı dolapta tutun.',
    'Şüphe anında ambalajı alın, saati not edin, belirti beklemeden arayın.',
    'Evde kusturma dâhil hiçbir işlemi hekime danışmadan uygulamayın.',
    'Çöp kovasını kapaklı ve erişilemez tutun.',
  ],
  kaynaklar: [
    {
      kurum: 'University of Michigan · Michigan State University · Michigan Veterinary Specialists (çok merkezli)',
      baslik: 'Retrospective evaluation of xylitol ingestion in dogs: 192 cases (2007-2012)',
      yazarlar: 'DuHadway MR, Sharp CR, Meyers KE, Koenigshof AM',
      dergi: 'Journal of Veterinary Emergency and Critical Care',
      yil: 2015,
      kunye: '25(5):646-54',
      doi: '10.1111/vec.12350',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/26220654/',
    },
    {
      kurum: 'Freie Universität Berlin, Klinik für kleine Haustiere',
      baslik: 'Chocolate ingestion in dogs: 156 events (2015-2019)',
      yazarlar: 'Weingart C, Hartmann A, Kohn B',
      dergi: 'Journal of Small Animal Practice',
      yil: 2021,
      kunye: '62(11):979-983',
      doi: '10.1111/jsap.13329',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/33788297/',
    },
  ],
};
