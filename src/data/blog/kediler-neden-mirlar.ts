import type { BlogYazi } from './types';

export const kedilerNedenMirlar: BlogYazi = {
  slug: 'kediler-neden-mirlar',
  baslik: 'Kediler Neden Mırlar? Mırlama Her Zaman Mutluluk mu?',
  ozet: 'Kediler en çok huzurluyken mırlar ama selamlaşırken, mama isterken, hasta ya da gerginken de mırlayabilir. Anlamını vücut dili belirler.',
  kapakAlt:
    'Kediler neden mırlar konulu yazının kapak görseli; battaniyenin üzerinde gözlerini kapatmış, çenesi kaşınırken keyifle mırlayan turuncu tekir bir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler en çok güvende ve huzurlu hissettiklerinde mırlar.** Ama mırlama yalnız mutluluğun sesi değildir: International Cat Care\'e göre kediler selamlaşırken, yavrusunu emzirirken, hasta ya da yaralıyken de mırlıyor. Sussex Üniversitesi\'nden Karen McComb\'un ekibi ise kedilerin mama isterken mırlamanın içine insanın dikkatini çeken, ağlamayı andıran bir ses yerleştirdiğini gösterdi.' },
    { kind: 'paragraf', metin: 'Aşağıda mırlamanın nasıl çıktığını, hangi durumda ne anlama geldiğini, "isteyen mırlama"yı ve mırlayan bir kedinin hangi belirtilerde veteriner hekime gösterilmesi gerektiğini anlatıyoruz. Anlamı çözmenin anahtarı tek bir kural: sesi değil, sesin eşlik ettiği bedeni okumak.' },

    { kind: 'tablo', basliklar: ['Durum', 'Mırlamanın olası anlamı', 'Eşlik eden beden dili'], satirlar: [
      ['Kucakta ya da yanınızda uzanırken', 'Huzur ve güven', 'Gevşek beden, yarı kapalı gözler'],
      ['Kapıda karşılarken', 'Selamlaşma', 'Dik kuyruk, bacaklara sürtünme'],
      ['Mama saati yaklaşırken', 'İstek', 'Ayağa dolanma, miyavlamayla karışık ses'],
      ['Emziren anne ve yavrular', 'Yatıştırma ve memnuniyet', 'Yan yatma, yoğurma'],
      ['Hasta, yaralı ya da muayenede', 'Kendini yatıştırma olabilir', 'Gergin beden, saklanma, iştahsızlık'],
    ]},

    { kind: 'baslik', metin: 'Mırlamanın nasıl çıktığı hâlâ tartışılıyor' },
    { kind: 'paragraf', metin: 'Uzun süre kabul gören açıklama şuydu: beyindeki bir ritim üreteci gırtlak kaslarını saniyede yaklaşık 20-30 kez kasıp gevşetiyor, hava akımı bu ritimle kesilip açılıyor ve mırlama ortaya çıkıyor. Viyana Üniversitesi\'nden Christian Herbst\'ün ekibi 2023\'te Current Biology dergisinde bu açıklamayı sınadı. Sekiz kediden alınan gırtlaklar hiçbir sinir uyarısı olmadan, yalnız hava akımıyla, mırlama sıklığında titreşim üretti.' },
    { kind: 'paragraf', metin: 'Araştırmacılar ses tellerinin içinde çapı 4 milimetreye varan bağ dokusu kitleleri buldu. Bu yapı, bu kadar küçük bir hayvanın bu kadar alçak bir ses çıkarabilmesini açıklıyor olabilir. Ekip eski açıklamayı tümüyle reddetmiyor; iki mekanizmanın birlikte çalışıyor olabileceğini söylüyor. Yani mırlamanın tam olarak nasıl üretildiği bugün bile kesinleşmiş değildir.' },

    { kind: 'baslik', metin: 'Mırlama yavrulukta, annenin yanında başlar' },
    { kind: 'paragraf', metin: 'International Cat Care, mırlamanın kökenini yavruluk dönemine bağlıyor. Yavrular emerken aynı anda mırlıyor; anne de yuvaya döndüğünde ve yavrularını yatıştırırken mırlıyor. Kurumun açıklamasına göre bu sessiz ve alçak ses, annenin yavrularıyla yırtıcıların dikkatini çekmeden haberleşmesini sağlıyor.' },
    { kind: 'paragraf', metin: 'Yetişkin kedinin kucağınızda mırlaması bu ilk ilişkinin devamı gibidir. Kedi size, annesinin yanındaki güven duygusuna benzer bir duyguyla yaklaşıyor. Bu yüzden mırlamanın yanında çoğu zaman yoğurma hareketi de görülüyor; ikisi aynı yavruluk anısından geliyor. Yoğurmanın ayrıntılarını ve tırnaklarla ilgili pratik çözümleri ayrı yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Kapıda mırlayan kedi selam veriyor' },
    { kind: 'paragraf', metin: 'International Cat Care\'e göre yetişkin kediler mırlamayı çoğunlukla selamlaşmada kullanıyor. Eve döndüğünüzde kedinin kuyruğu dik, bacaklarınıza sürtünerek mırlaması tanıdık birini karşılamasıdır. Bu sürtünme aynı zamanda koku bırakmadır: kedi yüzündeki ve gövdesindeki bezlerle sizi kendi sosyal grubunun kokusuyla işaretliyor.' },
    { kind: 'paragraf', metin: 'Selamlaşmada mırlamaya çoğu zaman kısa bir "trill" ya da cıvıltıya benzer bir ses eşlik ediyor. Kurumun ses iletişimi üzerine yazısında bu sesin dostça bir selamlaşma çağrısı olduğu, annelerin de yavrularına seslenirken kullandığı belirtiliyor.' },

    { kind: 'baslik', metin: 'Mama isterken mırlamanın içinde bir ağlama saklı' },
    { kind: 'paragraf', metin: 'McComb ve ekibinin 2009 tarihli çalışması mırlamanın en ilginç yüzünü ortaya çıkardı. On kedinin sahibi, kedilerinin mırlamasını iki durumda kaydetti: mama isterken ve başka bir şey istemezken. Elli kişilik dinleyici grubu, mama isterken kaydedilen mırlamaları daha acil ve daha az hoş buldu; kedi sahibi olmayan dinleyiciler de aynı farkı duydu.' },
    { kind: 'paragraf', metin: 'Farkın kaynağı, isteyen mırlamanın içine gömülmüş yüksek perdeli bir bileşendi. Araştırmacılar bu bileşeni kayıttan çıkardığında dinleyiciler iki tür mırlamayı artık ayırt edemedi. Yazarlar bu sesin insan bebeğinin ağlamasını andırdığını ve insanın bakım verme eğilimine seslendiğini düşünüyor. McComb, kedilerin bu sesi normal mırlamada az da olsa çıkardığını, insandan karşılık aldıkça abarttığını tahmin ediyor.' },
    { kind: 'yanilgi', baslik: '"Mırlayan kedi her zaman mutludur"', metin: 'Mırlama bir duygunun değil bir iletişimin sesidir. International Cat Care kedilerin hasta ya da yaralıyken de mırladığını belirtiyor; mama isteyen kedi de mırlıyor. Kedinin ne hissettiği mırlamanın kendisinden değil, beden dilinden ve durumdan anlaşılıyor.' },

    { kind: 'baslik', metin: 'Hasta ya da ağrılı kedi de mırlayabilir' },
    { kind: 'paragraf', metin: 'International Cat Care, hasta ya da yaralı kedilerin de mırladığını belirtiyor ve bunun için iki olası açıklama veriyor: mırlamanın iyileştirici bir etkisi olabileceği ya da kedinin kendini en savunmasız hissettiği anda kendini yatıştırdığı. İkisi de olası açıklamadır, kanıtlanmış bir mekanizma değildir.' },
    { kind: 'paragraf', metin: 'Pratikteki sonucu nettir: muayene masasında, taşıma çantasında ya da hastalık sırasında mırlayan kedi rahat demek değildir. Bu durumda mırlamanın yanında gergin bir beden, yana yatık kulaklar, büyümüş göz bebekleri, saklanma ya da dokunulmak istememe görülebiliyor.' },
    { kind: 'yanilgi', baslik: '"Mırlama kediyi iyileştirir, veterinere gerek kalmaz"', metin: 'Mırlamanın iyileştirici olabileceği bir hipotezdir; kediyi tedavi ettiği gösterilmiş değildir. Hasta görünen bir kedinin mırlamasına güvenip beklemek, tedavisi gereken bir durumu geciktirebilir.' },

    { kind: 'baslik', metin: 'Anlamı ses değil beden söyler' },
    { kind: 'paragraf', metin: 'Aynı mırlama iki farklı kedide iki farklı şey anlatabiliyor. Ayırt etmenin en güvenilir yolu sesle birlikte bedenin geri kalanına bakmaktır. Aşağıdaki tablo iki ucu karşılaştırıyor; çoğu kedi bu iki ucun arasında bir yerde durur ve bağlam belirleyici olur.' },
    { kind: 'tablo', basliklar: ['Bakılacak yer', 'Huzurlu mırlama', 'Gergin ya da rahatsız mırlama'], satirlar: [
      ['Gözler', 'Yarı kapalı, yavaş kırpma', 'Açık, göz bebekleri büyük'],
      ['Kulaklar', 'Öne ya da yukarı dönük', 'Yana ya da geriye yatık'],
      ['Beden', 'Gevşek, yana uzanmış', 'Büzülmüş, kamburlaşmış'],
      ['Davranış', 'Sürtünme, yoğurma, yanınızda kalma', 'Saklanma, dokunulmak istememe'],
      ['Bağlam', 'Evde, tanıdık ortamda', 'Muayene, yolculuk, hastalık'],
    ]},

    { kind: 'baslik', metin: 'Az mırlayan kedi sevgisiz değildir' },
    { kind: 'paragraf', metin: 'Kediler mırlama sıklığı ve sesinin gücü bakımından birbirinden farklıdır. Bazı kedilerin mırlaması odanın öbür ucundan duyulurken, bazılarınınki ancak elinizi boğazına koyduğunuzda hissedilir. Az mırlayan bir kedi sahibini sevmiyor değildir; sevgisini yanınızda uyuyarak, sürtünerek ya da yavaşça göz kırparak gösteriyor olabilir.' },
    { kind: 'paragraf', metin: 'Önemli olan kedinin kendi alışkanlığındaki değişikliktir. Her zaman çok mırlayan bir kedi aniden sessizleşir, iştahı azalır ya da saklanmaya başlarsa bu bir değişiklik işaretidir. Yeni gelen bir kedinin ilk günlerde mırlamaması ise çoğu zaman alışma sürecinin parçasıdır; bu dönemi [[yeni-kedi-eve-alisma|eve yeni gelen kedi]] yazımızda anlattık.' },

    { kind: 'uyari', metin: 'Mırlayan bir kedide iştahsızlık, saklanma, nefes almada zorlanma, salya akıtma, kuma çıkamama ya da dokunulduğunda tepki gösterme görülüyorsa mırlama huzur işareti sayılmamalı. Bu belirtilerde kedinin vakit kaybetmeden veteriner hekime gösterilmesi gerekiyor.' },
  ],
  kontrolListesi: [
    'Mırlarken bedeni gevşek mi?',
    'İştahı ve kum düzeni normal mi?',
    'Saklanma ya da huzursuzluk var mı?',
    'Mama saatleri düzenli mi?',
    'Yoğururken tırnakları kesik mi?',
  ],
  sss: [
    { soru: 'Kediler neden mırlar?', cevap: 'Kediler en çok huzurlu ve güvende hissettiklerinde mırlar, ama selamlaşırken, mama isterken, yavrularını emzirirken ve hasta ya da yaralıyken de mırlayabilir. Mırlamanın ne anlattığı, sesin eşlik ettiği beden dilinden ve durumdan anlaşılıyor.' },
    { soru: 'Kediler mutlu olunca mı mırlar?', cevap: 'Çoğu zaman evet, ama her zaman değil. Gevşek beden ve yarı kapalı gözlerle mırlayan kedi büyük olasılıkla huzurludur; muayenede, yolculukta ya da hastalık sırasında mırlayan kedi ise kendini yatıştırıyor olabilir.' },
    { soru: 'Kedi hastayken neden mırlar?', cevap: 'Kesin olarak bilinmiyor. International Cat Care iki olası açıklama veriyor: mırlamanın iyileştirici bir etkisi olabileceği ya da kedinin kendini savunmasız hissettiğinde kendini yatıştırdığı. Hasta görünen kedinin mırlaması, veteriner hekime götürmeyi geciktirmek için bir neden değildir.' },
    { soru: 'Kediler mama isterken neden farklı mırlar?', cevap: 'Sussex Üniversitesi\'nin 2009 tarihli çalışmasında, mama isterken kaydedilen mırlamaların içinde yüksek perdeli, ağlamayı andıran bir bileşen bulundu. Dinleyiciler bu mırlamaları daha acil buldu; bileşen çıkarılınca fark kayboldu.' },
    { soru: 'Kedi nasıl mırlar?', cevap: 'Uzun süre beyindeki bir ritim üretecinin gırtlak kaslarını saniyede yaklaşık 20-30 kez kasıp gevşettiği düşünüldü. 2023 tarihli bir çalışma ise kedi gırtlağının sinir uyarısı olmadan da mırlama sıklığında titreşebildiğini gösterdi; mekanizma hâlâ tartışılıyor.' },
    { soru: 'Yavru kediler mırlar mı?', cevap: 'Evet. International Cat Care\'e göre yavrular emerken aynı anda mırlıyor, anne kedi de yavrularını yatıştırmak için mırlıyor. Mırlama, kedinin hayatındaki ilk iletişim biçimlerinden biridir ve çoğu kedide yetişkinlikte de sürer.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of Sussex, School of Psychology',
      yazarlar: 'McComb K, Taylor AM, Wilson C, Charlton BD',
      baslik: 'The cry embedded within the purr',
      dergi: 'Current Biology',
      yil: 2009,
      kunye: '19(13):R507-R508',
      doi: '10.1016/j.cub.2009.05.033',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19602409/',
    },
    {
      kurum: 'University of Vienna, Department of Behavioral and Cognitive Biology',
      yazarlar: 'Herbst CT, Prigge T, Garcia M, Hampala V, Hofer R, Weissengruber GE, Svec JG, Fitch WT',
      baslik: 'Domestic cat larynges can produce purring frequencies without neural input',
      dergi: 'Current Biology',
      yil: 2023,
      kunye: '33(21):4727-4732',
      doi: '10.1016/j.cub.2023.09.014',
      adres: 'https://doi.org/10.1016/j.cub.2023.09.014',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Why do cats..?',
      adres: 'https://icatcare.org/articles/why-do-cats',
    },
  ],
};
