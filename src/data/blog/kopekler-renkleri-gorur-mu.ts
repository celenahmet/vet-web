import type { BlogYazi } from './types';

export const kopeklerRenkleriGorurMu: BlogYazi = {
  slug: 'kopekler-renkleri-gorur-mu',
  baslik: 'Köpekler Renkleri Görür mü? Hangi Renkleri Görür?',
  ozet: 'Köpekler renk görür ama bizden farklı: iki tür koni hücresiyle görüyorlar. Mavi ve sarıyı ayırırken kırmızı ile yeşili karıştırabiliyorlar.',
  kapakAlt:
    'Köpekler renkleri görür mü konulu yazının kapak görseli; parkta çimenlerin üzerinde mavi top ile sarı kemik oyuncağın arasında uzanan bir border collie',
  kategori: 'Köpek',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpekler renkleri görür, ama bizim gördüğümüz gibi değil.** Kaliforniya Üniversitesi araştırmacılarının 1989 tarihli çalışmasına göre köpeklerin gözünde iki tür renk algılayan koni hücresi var; insanlarda ise üç tür bulunuyor. Bu, köpeklerin mavi ve sarı tonlarını ayırt edebildiği, ama kırmızı ile yeşili birbirinden ayırmakta zorlanabildiği anlamına geliyor.' },
    { kind: 'paragraf', metin: 'Aşağıda köpeklerin renk görmesini ölçen çalışmaları, "köpekler siyah beyaz görür" inancının neden yanlış olduğunu, köpek gözünün insana göre hangi konularda zayıf hangi konularda güçlü olduğunu ve oyuncak seçerken bu bilginin nasıl işe yarayabileceğini anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['', 'İnsan', 'Köpek'], satirlar: [
      ['Renk algılayan koni türü', '3', '2'],
      ['Renk görme tipi', 'Üç renkli', 'İki renkli'],
      ['Mavi ve sarı', 'Ayırt eder', 'Ayırt edebilir'],
      ['Kırmızı ve yeşil', 'Ayırt eder', 'Karıştırabilir'],
      ['Loş ışıkta görme', 'Daha zayıf', 'Daha güçlü'],
    ]},

    { kind: 'baslik', metin: 'Köpekler siyah beyaz görmez' },
    { kind: 'paragraf', metin: 'Uzun süre köpeklerin dünyayı siyah beyaz gördüğü sanıldı. Kaliforniya Üniversitesi Santa Barbara\'dan Jay Neitz, Timothy Geist ve Gerald Jacobs 1989\'da Visual Neuroscience dergisinde bunu davranış deneyleriyle sınadı. Üç köpeğin renk görmesi bir dizi ayırt etme deneyiyle incelendi.' },
    { kind: 'paragraf', metin: 'Sonuçlar köpek retinasında iki tür koni pigmenti bulunduğunu gösterdi: biri yaklaşık 429 nanometrede, öbürü yaklaşık 555 nanometrede en duyarlı. Araştırmacılara göre bütün renk görme testlerinin sonucu, köpeklerin iki renkli görme yeteneğine sahip olduğu sonucuyla uyumlu. Yani köpekler renk görüyor; yalnızca renk yelpazeleri bizimkinden daha dar.' },
    { kind: 'yanilgi', baslik: '"Köpekler dünyayı siyah beyaz görür"', metin: 'Köpek retinasında iki tür renk algılayan koni hücresi bulunuyor ve deneyler köpeklerin renkleri ayırt edebildiğini gösteriyor. Köpeklerin renk görmesi, kırmızı-yeşil renk körlüğü olan bir insanın görmesine benzetilir; siyah beyaz değildir.' },

    { kind: 'baslik', metin: 'Köpek hangi renkleri görür, hangilerini karıştırır?' },
    { kind: 'paragraf', metin: 'İki tür koni hücresi, köpeğin renk dünyasını iki ana eksene indiriyor: mavi tonları ve sarı tonları. Bu iki uç arasındaki farkları köpek iyi algılayabiliyor. Buna karşın insanların ayrı renkler olarak gördüğü kırmızı, turuncu ve yeşil, köpek gözünde birbirine yakın, sarımsı ya da gri-kahverengimsi tonlar olarak görünebiliyor.' },
    { kind: 'tablo', basliklar: ['İnsanın gördüğü renk', 'Köpeğin görebileceği'], satirlar: [
      ['Mavi', 'Mavi (iyi ayırt eder)'],
      ['Sarı', 'Sarı (iyi ayırt eder)'],
      ['Kırmızı', 'Koyu sarımsı ya da kahverengimsi bir ton'],
      ['Yeşil', 'Sarımsı ya da grimsi bir ton'],
      ['Mor', 'Maviye yakın bir ton'],
    ]},
    { kind: 'paragraf', metin: 'Bu tablo iki renkli görme mantığına dayanan bir yaklaşımdır; köpeğin her rengi tam olarak nasıl algıladığını doğrudan görmek mümkün değildir. Ama günlük hayattaki karşılığı nettir: köpek için kırmızı bir top ile yeşil çim arasındaki fark, bizim için olduğu kadar belirgin değildir.' },

    { kind: 'baslik', metin: 'Köpekler renge parlaklıktan daha çok güveniyor' },
    { kind: 'paragraf', metin: 'Eski çalışmalar köpeklerin renk görebilse bile günlük hayatta rengi pek kullanmadığını düşündürmüştü. Rusya Bilimler Akademisi\'nden Anna Kasparson ve ekibi 2013\'te Proceedings of the Royal Society B\'de bu varsayımı sınadı. Daha önce eğitilmemiş sekiz köpeğe, hem parlaklığı hem rengi farklı olan görseller arasında seçim yaptırıldı.' },
    { kind: 'paragraf', metin: 'Köpekler seçim yaparken parlaklığı kullanabilecekleri hâlde kullanmadı; renk onlar için parlaklıktan daha bilgilendirici çıktı. Araştırmacılara göre bu, yalnızca iki tür koni hücresine sahip hayvanlar için bile, normal gün ışığında renk bilgisinin baskın olabileceğini gösteriyor. Yani köpek için renk süs değil, dünyayı ayırt etmenin işe yarayan bir yoludur.' },

    { kind: 'baslik', metin: 'Köpek gözü bazı konularda bizden üstün' },
    { kind: 'paragraf', metin: 'Wisconsin Üniversitesi\'nden Paul Miller ve Christopher Murphy 1995\'te Amerikan Veteriner Hekimler Birliği dergisinde köpek görmesini insanınkiyle karşılaştıran kapsamlı bir derleme yayımladı. Yazarlara göre köpek görmesi iki gözün ortak gördüğü alan, renk algısı, yakın-uzak odaklanma ve görme keskinliği bakımından insanınkinden geride sayılabilir.' },
    { kind: 'paragraf', metin: 'Buna karşın köpek görmesi loş ışıkta görme, hızla değişen görüntüleri algılama, görüş alanının genişliği, gri tonlarını ayırt etme ve büyük olasılıkla hareketi algılama bakımından insanınkini muhtemelen geride bırakıyor. Yazarlar bu özelliklerin köpeği belirli ortamlarda daha etkili bir avcı yaptığını belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Köpekler bizden daha keskin görür"', metin: 'Miller ve Murphy\'nin derlemesine göre köpeklerin görme keskinliği insanınkinden geride sayılabilir; ayrıntıyı bizim kadar net görmüyorlar. Köpekleri üstün kılan şey keskinlik değil, loş ışıkta görme, geniş görüş alanı ve hareketi algılamadır.' },

    { kind: 'baslik', metin: 'Oyuncak seçerken renk fark yaratabilir' },
    { kind: 'paragraf', metin: 'Bu bilginin en pratik karşılığı oyuncak seçimidir. Çim üzerinde oynanacak bir top ya da atma oyuncağı için mavi ya da sarı tonları, kırmızı ve turuncuya göre köpek tarafından daha kolay ayırt edilebilir. Köpeğiniz attığınız topu bulmakta zorlanıyorsa, yalnızca rengini değiştirmek oyunu kolaylaştırabilir.' },
    { kind: 'liste', maddeler: [
      'Çimde oynanacak oyuncaklarda mavi ya da sarıyı tercih etmek',
      'Kırmızı oyuncağı yeşil zeminde bulamıyorsa koku ipucu da kullanmak',
      'Akşam yürüyüşlerinde köpeğin loş ışıkta iyi gördüğünü ama ayrıntıyı seçemeyebileceğini hesaba katmak',
      'Eğitimde görsel işaretleri büyük ve belirgin hareketlerle vermek',
    ]},
    { kind: 'paragraf', metin: 'Köpekler dünyayı yalnızca gözleriyle değil, en çok burunlarıyla keşfeder. Dışarıda neyi koklayıp yediklerine dikkat etmek de bu yüzden önemlidir; çimde ot yeme davranışını [[kopekler-neden-ot-yer|köpekler neden ot yer]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Görmede ani değişiklik bir sağlık işaretidir' },
    { kind: 'paragraf', metin: 'Köpeklerin renk görmesi doğuştan sınırlıdır ve bu bir sorun değildir. Ancak köpeğin eşyalara çarpmaya başlaması, karanlıkta yolunu bulamaması, merdivenlerde tereddüt etmesi ya da gözde bulanıklık, kızarıklık ve akıntı görülmesi, görmede bir değişikliğe işaret edebilir. Yaşlanan köpeklerde bu değişiklikler daha sık görülür.' },

    { kind: 'uyari', metin: 'Köpek eşyalara çarpıyor, karanlıkta yolunu bulamıyor, gözünü kısıyor, sürekli kaşıyor ya da gözde bulanıklık, kızarıklık veya akıntı görülüyorsa durum renk görmeyle değil bir göz sorunuyla ilgili olabilir. Gözde ani değişikliklerde veteriner hekime vakit kaybetmeden başvurmak gerekiyor.' },
  ],
  kontrolListesi: [
    'Oyuncaklar mavi ya da sarı mı?',
    'Top çimde kolay görülüyor mu?',
    'Eğitim işaretleri belirgin mi?',
    'Eşyalara çarpma var mı?',
    'Gözde akıntı ya da bulanıklık var mı?',
  ],
  sss: [
    { soru: 'Köpekler renkleri görür mü?', cevap: 'Evet, ama bizden farklı. 1989 tarihli bir çalışmaya göre köpeklerin gözünde iki tür renk algılayan koni hücresi var, insanlarda ise üç tür. Köpekler mavi ve sarı tonlarını ayırt edebilir, kırmızı ile yeşili ise karıştırabilir.' },
    { soru: 'Köpekler hangi renkleri görür?', cevap: 'Köpeklerin renk dünyası mavi ve sarı tonları ekseninde şekilleniyor ve bu iki renk grubunu iyi ayırt edebiliyorlar. Kırmızı, turuncu ve yeşil ise köpek gözünde birbirine yakın, sarımsı ya da kahverengimsi tonlar olarak görünebiliyor.' },
    { soru: 'Köpekler siyah beyaz mı görür?', cevap: 'Hayır. Bu yaygın bir inançtır, ama köpek retinasında iki tür renk algılayan koni hücresi bulunuyor ve deneyler köpeklerin renkleri ayırt edebildiğini gösteriyor. 2013 tarihli bir çalışmada köpekler seçim yaparken renge parlaklıktan daha çok güvendi.' },
    { soru: 'Köpekler kırmızıyı görür mü?', cevap: 'Köpekler kırmızıyı bizim gördüğümüz gibi canlı bir renk olarak görmez; büyük olasılıkla koyu sarımsı ya da kahverengimsi bir ton olarak algılar. Bu yüzden kırmızı bir top yeşil çimin üzerinde köpek için bizim için olduğu kadar belirgin olmayabilir.' },
    { soru: 'Köpekler karanlıkta görür mü?', cevap: 'Köpekler loş ışıkta insanlardan daha iyi görür. 1995 tarihli bir derlemeye göre köpek görmesi loş ışıkta görme, geniş görüş alanı ve hareketi algılama bakımından insanınkini muhtemelen geride bırakıyor; ayrıntıyı seçme keskinliği ise daha düşük.' },
    { soru: 'Köpek oyuncağı hangi renk olmalı?', cevap: 'Çim üzerinde oynanacak oyuncaklarda mavi ya da sarı tonları, köpeğin iki renkli görme yapısı nedeniyle kırmızı ve turuncuya göre daha kolay ayırt edilebilir. Köpek attığınız topu bulmakta zorlanıyorsa rengini değiştirmek oyunu kolaylaştırabilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of California, Santa Barbara, Department of Psychology',
      yazarlar: 'Neitz J, Geist T, Jacobs GH',
      baslik: 'Color vision in the dog',
      dergi: 'Visual Neuroscience',
      yil: 1989,
      kunye: '3(2):119-125',
      doi: '10.1017/s0952523800004430',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/2487095/',
    },
    {
      kurum: 'Russian Academy of Sciences, Institute for Information Transmission Problems',
      yazarlar: 'Kasparson AA, Badridze J, Maximov VV',
      baslik: 'Colour cues proved to be more informative for dogs than brightness',
      dergi: 'Proceedings of the Royal Society B: Biological Sciences',
      yil: 2013,
      kunye: '280(1766):20131356',
      doi: '10.1098/rspb.2013.1356',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23864600/',
    },
    {
      kurum: 'University of Wisconsin, School of Veterinary Medicine',
      yazarlar: 'Miller PE, Murphy CJ',
      baslik: 'Vision in dogs',
      dergi: 'Journal of the American Veterinary Medical Association',
      yil: 1995,
      kunye: '207(12):1623-1634',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/7493905/',
    },
  ],
};
