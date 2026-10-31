import type { BlogYazi } from './types';

export const kediKacGunYalnizKalabilir: BlogYazi = {
  slug: 'kedi-kac-gun-yalniz-kalabilir',
  baslik: 'Kedi Evde Kaç Gün Yalnız Kalabilir?',
  ozet: 'Sağlıklı yetişkin kediler köpeklerden genellikle daha uzun süre yalnız kalabilir. Yavru, yaşlı ve hasta kedilerde ise durum değişiyor.',
  kapakAlt:
    'Evde kapıya doğru yürüyen tekir kedi, yanında mama kabı ve yatak',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Sağlıklı yetişkin bir kedi köpeklerden genellikle daha uzun süre yalnız bırakılabilir, ama herkes için geçerli tek bir güvenli gün sayısı yoktur.** International Cat Care\'e göre yavru, yaşlı, sağlık sorunu olan, davranış sorunu yaşayan ve bakım verenine bağı çok güçlü kediler uzun süre yalnız kalmaya uygun olmayabilir. Bu yüzden süreyi kedinin yaşı, sağlığı ve huyu açısından değerlendirmek gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda hangi kedilerin uzun yokluğa uygun olmayabileceğini, yalnız kalan kedilerde 223 kedilik bir anket çalışmasında neler görüldüğünü, evin yokluğa nasıl hazırlanabileceğini ve birkaç günlük yolculukta hangi bakım seçeneklerinin olduğunu anlatıyoruz. Elimizdeki hakemli çalışmada ve uluslararası kedi kuruluşlarının sayfalarında "şu kadar gün sorun olmaz" diyen kesin bir sayı bulamadığımız için yazıda da böyle bir sayı vermiyoruz.' },

    { kind: 'tablo', basliklar: ['Kedinin durumu', 'Yalnız kalma konusunda söylenen'], satirlar: [
      ['Sağlıklı yetişkin kedi', 'Köpeklerden genellikle daha uzun süre yalnız bırakılabilir'],
      ['Yavru kedi', 'Uzun süre yalnız kalmaya uygun olmayabilir'],
      ['Yaşlı kedi', 'Uzun süre yalnız kalmaya uygun olmayabilir; tatilde tanıdık biri evde bakabilir'],
      ['Sağlık sorunu olan kedi', 'Uzun süre yalnız kalmaya uygun olmayabilir'],
      ['Davranış sorunu olan kedi', 'Uzun süre yalnız kalmaya uygun olmayabilir'],
      ['Bakım verenine bağı çok güçlü kedi', 'Uzun süre yalnız kalmaya uygun olmayabilir'],
    ]},

    { kind: 'baslik', metin: 'Hangi kediler uzun süre yalnız kalmaya uygun olmayabilir?' },
    { kind: 'paragraf', metin: 'International Cat Care, kedilerin oldukça bağımsız olduğunu ve genellikle köpeklerden daha uzun süre yalnız bırakılabildiğini söylüyor. Aynı kuruluş bunun herkes için geçerli olmadığını da ekliyor: yavru kediler, yaşlı kediler, fiziksel sağlık sorunu olanlar, davranış sorunu yaşayanlar ve bakım verenine bağı özellikle güçlü olanlar uzun süre yalnız kalmaya uygun olmayabiliyor.' },
    { kind: 'paragraf', metin: 'Yavru kediler için de aynı kuruluş, yavruların çok ilgiye ihtiyaç duyduğunu, onları meşgul etmek için önceden plan yapmak gerektiğini ve evden uzaktayken güvende olduklarından emin olmanın sahibine düştüğünü belirtiyor. Yeni bir yavru alacaksanız [[yavru-kedi-bakimi|yavru kedi bakımı]] yazımız da işinize yarayabilir.' },
    { kind: 'yanilgi', baslik: '"Kediler bağımsızdır, yalnız kalmaktan hiç etkilenmez"', metin: 'Kediler genellikle köpeklerden daha uzun süre yalnız kalabiliyor, ama her kedi için aynı şey söylenemez. Aşağıda anlatılan 223 kedilik çalışmada, sahiplerin yanıtlarına göre kedilerin yaklaşık yüzde 13\'ü ayrılıkla ilişkili sorun ölçütlerinden en az birini karşıladı. Yani çoğu kedi bu ölçütleri karşılamadı, ama küçük bir kısmı yalnız kalmakta zorlandı.' },

    { kind: 'baslik', metin: 'Yalnız kalan kedilerde neler görülüyor?' },
    { kind: 'paragraf', metin: 'Brezilya\'daki Juiz de Fora Federal Üniversitesi\'nden de Souza Machado ve ekibi 2020\'de PLoS One dergisinde, kedilerde ayrılıkla ilişkili sorunları tanımlamak için bir sahip anketi geliştirdi. Ayrılıkla ilişkili sorun, hayvanın bağlı olduğu kişiden ayrıldığında gösterdiği davranış ve fizyolojik belirtiler bütünü olarak tanımlanıyor. Ankete 130 sahip 223 kedi için yanıt verdi.' },
    { kind: 'paragraf', metin: 'Kedilerin yüzde 13,45\'i, yani 223 kedinin 30\'u, araştırmacıların ayrılıkla ilişkili sorun için belirlediği davranış ölçütlerinden en az birini karşıladı. Bu 30 kedide en sık bildirilen davranışlar aşağıdaki tabloda.' },
    { kind: 'tablo', basliklar: ['Bildirilen davranış', 'Sorun gösteren 30 kedide oran'], satirlar: [
      ['Yıkıcı davranış', 'Yüzde 66,67 (20 kedi)'],
      ['Aşırı miyavlama', 'Yüzde 63,33 (19 kedi)'],
      ['Uygunsuz yerde idrar yapma', 'Yüzde 60,00 (18 kedi)'],
      ['Durgunluk ve ilgisizlik', 'Yüzde 53,33 (16 kedi)'],
      ['Saldırganlık', 'Yüzde 36,67 (11 kedi)'],
      ['Huzursuzluk ve kaygı', 'Yüzde 36,67 (11 kedi)'],
      ['Uygunsuz yerde dışkılama', 'Yüzde 23,33 (7 kedi)'],
    ]},
    { kind: 'paragraf', metin: 'Araştırmada bu sorunların görülmesi, evde yaşayan dişi kedi sayısıyla, kedinin oyuncaklara erişememesiyle ve evde başka hayvan bulunmamasıyla ilişkili çıktı. Bu bir ilişki bulgusudur ve tek başına nedensellik göstermez. Yazarlar da kedilerde ayrılıkla ilişkili sorunların bilgi azlığı nedeniyle tanımlanmasının zor olduğunu, anketin gelecek çalışmalar için bir başlangıç noktası olabileceğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Kedilerin miyavlamasını merak ediyorsanız [[kediler-neden-cok-miyavlar|kediler neden çok miyavlar]] yazımıza bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Ev, yokluğa nasıl hazırlanabilir?' },
    { kind: 'paragraf', metin: 'AAFP ve ISFM\'nin 2013 tarihli kedi çevre ihtiyaçları rehberi, sağlıklı bir kedi ortamını beş temel ilke üzerine kuruyor. Bunlar güvenli bir yer sağlamak, temel kaynakları çoğaltıp ayırmak, oyun ve av davranışına fırsat vermek, insanla olumlu, tutarlı ve öngörülebilir etkileşim sağlamak ve kedinin koku duyusuna saygı göstermektir. Rehber, bu önerilerin yaşam tarzından bağımsız olarak tüm evcil kedileri kapsadığını söylüyor.' },
    { kind: 'paragraf', metin: 'Yalnız kalacak bir kedi için en işe yarar kısım ikinci ilkedir. Tuvalet, yemek ve su kapları, oyun, dinlenme ve tırmalama alanlarının her biri ayrı bir yerde olmalı ve kedinin her kaynakta bir seçeneği bulunmalı. Rehberdeki örnekte en az iki dinlenme alanı, iki yemek alanı ve iki tuvalet alanı yer alıyor. Yiyecek ve su kaynaklarının birbirinden ayrı konumlandırılması da öneriliyor.' },
    { kind: 'liste', maddeler: [
      'Mama ve su kaplarını birbirinden ayrı yerlere koymak',
      'Evde en az iki tuvalet alanı bulundurmak',
      'En az iki dinlenme alanı ve bir tırmalama yüzeyi sağlamak',
      'Oyuncak bırakmak ve dönünce birlikte oynamak',
      'Evdeki düzeni ve saatleri mümkün olduğunca sabit tutmak',
    ]},
    { kind: 'paragraf', metin: 'Rehber, öngörülebilirlik, tanıdıklık ve rutinin kedinin başa çıkma becerisini artırdığını belirtiyor. Bu nedenle yokluk öncesinde evdeki eşyaları ve beslenme düzenini aniden değiştirmemek önerilir.' },

    { kind: 'baslik', metin: 'Birkaç günlük yolculukta bakım seçenekleri' },
    { kind: 'paragraf', metin: 'International Cat Care, tatile giderken kedinin güvenilir bir arkadaşın ya da aile bireyinin bakımına bırakılmasını, ya da bir evcil hayvan bakıcısı veya kedi oteli düşünülmesini öneriyor. Yaşlı kedilerde durum biraz farklı: yaşlı kediler rutindeki değişikliklere pek iyi uyum sağlamıyor ve bir noktada kedi otelinden çok evinde kalmayı, birinin ziyaret etmesini ya da yanında kalmasını tercih edebiliyor. Kuruluş bakıcının kedinin tanıdığı biri olmasının ideal olduğunu söylüyor.' },
    { kind: 'paragraf', metin: 'Kedi oteline bırakılacaksa kuruluş, öncesinde oteli gezip görmeyi öneriyor. Otelin her kedinin aşı belgesini, aşıların güncel olduğunun kanıtı olarak istemesi gerekiyor. Farklı evlerden gelen kedilerin birbirine dokunamaması da hastalık kontrolünün temel ilkesi sayılıyor. Aşı durumunu [[kedi-asi-takvimi|kedi aşı takvimi]] yazımızdan kontrol edebilirsiniz.' },
    { kind: 'paragraf', metin: 'Köpeğiniz de varsa onun yalnız kalma sorunları için [[kopeklerde-ayrilik-kaygisi|köpeklerde ayrılık kaygısı]] yazımız ayrı bir konu olarak ele alıyor.' },

    { kind: 'baslik', metin: 'Eve dönünce nasıl bir düzen kurulmalı?' },
    { kind: 'paragraf', metin: 'AAFP ve ISFM rehberine göre pek çok kedi, insanla sık ama düşük yoğunlukta temas kurulan bir düzeni tercih ediyor. Bu düzende kedi etkileşimi başlatabiliyor, yönlendirebiliyor ve bitirebiliyor. Eve döndüğünüzde kediyi kucaklamaya zorlamak yerine yaklaşmasını beklemek, kedinin kendi hızında temas kurmasını sağlamak daha uygun olur.' },

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime başvurmak gerekir?' },
    { kind: 'uyari', metin: 'Kedi yalnız kaldıktan sonra tuvalet dışına idrar ya da dışkı yapıyor, yemeyi bırakıyor, durgunlaşıyor ya da saldırganlaşıyorsa nedenini evde ayırt etmek zordur. Bu belirtiler yalnız kalmayla ilişkili olabildiği gibi sağlık sorunlarının da işareti olabilir; bu yüzden veteriner hekime başvurulması gerekiyor. Teşhis ve tedavi için hekim değerlendirmesi şarttır.' },
    { kind: 'paragraf', metin: 'Kedinizin yemeyi bıraktığını fark ettiyseniz [[kedim-yemek-yemiyor|kedim yemek yemiyor]] yazımızdaki uyarı işaretlerine bakabilirsiniz. Yavru, yaşlı ya da kronik sağlık sorunu olan bir kediyle uzun süre evden ayrılmayı planlıyorsanız önce veteriner hekime danışmak önerilir.' },
  ],
  sss: [
    {
      soru: 'Kedi bir gün evde tek başına kalabilir mi?',
      cevap: 'Bu, kedinin yaşına ve sağlığına bağlı; kaynaklarda herkes için geçerli bir güvenli süre verilmiyor. International Cat Care sağlıklı yetişkin kedilerin köpeklerden genellikle daha uzun süre yalnız kalabildiğini söylüyor. Yavru, yaşlı, hasta ya da bağı çok güçlü kediler için uzun süre uygun olmayabilir.',
    },
    {
      soru: 'Yavru kedi evde yalnız bırakılabilir mi?',
      cevap: 'Yavru kediler uzun süre yalnız kalmaya uygun olmayabilir. International Cat Care, yavruların çok ilgiye ihtiyaç duyduğunu ve onları meşgul tutmak ile güvende olmalarını sağlamak için önceden plan yapmak gerektiğini belirtiyor. Süre konusunda tereddüt varsa veteriner hekime danışmak önerilir.',
    },
    {
      soru: 'Yaşlı kedi tatilde otelde mi evde mi kalmalı?',
      cevap: 'Bu kedinin alışkanlığına bağlı. International Cat Care, kedi hep otelde kaldıysa rutini değiştirmeye gerek olmadığını, ama yaşlı kedilerin rutin değişikliklerine pek iyi uyum sağlamadığını ve evde ziyaret edilmeyi tercih edebileceğini söylüyor. Bakıcının kedinin tanıdığı biri olması ideal sayılıyor.',
    },
    {
      soru: 'Kediler yalnız kalınca ayrılık kaygısı yaşar mı?',
      cevap: 'Bazı kediler yaşayabiliyor. 223 kedilik bir anket çalışmasında kedilerin yüzde 13,45\'i ayrılıkla ilişkili sorun ölçütlerinden en az birini karşıladı. Yazarlar bu sorunların kedilerde bilgi azlığı nedeniyle tanımlanmasının zor olduğunu belirtiyor; şüphelenirseniz veteriner hekime başvurmak gerekiyor.',
    },
    {
      soru: 'Yalnız kalan kedi için kaç tuvalet alanı gerekir?',
      cevap: 'AAFP ve ISFM rehberi, kedinin her kaynakta seçeneği olması gerektiğini söylüyor ve örnek olarak en az iki tuvalet alanı veriyor. Aynı örnekte iki dinlenme ve iki yemek alanı da yer alıyor. Yiyecek ile su kaynaklarının birbirinden ayrı konumlandırılması da öneriliyor.',
    },
    {
      soru: 'Evde başka bir hayvan olması kedinin yalnızlığını azaltır mı?',
      cevap: 'Kesin söylenemez. Anket çalışmasında evde başka hayvan bulunmaması, ayrılıkla ilişkili sorunlarla ilişkili çıktı. Ancak bu bir ilişki bulgusudur ve nedensellik göstermez. Yeni bir kedi eklemeden önce veteriner hekime danışmak önerilir.',
    },
  ],
  kontrolListesi: [
    'Kedi yavru ya da yaşlı mı?',
    'Bilinen bir sağlık sorunu var mı?',
    'Su ve mama kapları ayrı yerde mi?',
    'En az iki tuvalet alanı var mı?',
    'Oyuncak ve tırmalama alanı var mı?',
    'Tanıdık bir bakıcı ayarlandı mı?',
  ],
  kaynaklar: [
    {
      kurum: 'Juiz de Fora Federal Üniversitesi (Brezilya)',
      baslik: 'Identification of separation-related problems in domestic cats: A questionnaire survey',
      yazarlar: 'de Souza Machado D, Oliveira PMB, Machado JC, Ceballos MC, Sant\'Anna AC',
      dergi: 'PLoS One',
      yil: 2020,
      kunye: '15(4):e0230999',
      doi: '10.1371/journal.pone.0230999',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32294083/',
    },
    {
      kurum: 'AAFP ve ISFM',
      baslik: 'AAFP and ISFM feline environmental needs guidelines',
      yazarlar: 'Ellis SL, Rodan I, Carney HC, Heath S, Rochlitz I, Shearburn LD, Sundahl E, Westropp JL',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2013,
      kunye: '15(3):219-30',
      doi: '10.1177/1098612X13477537',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/23422366/',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Thinking of getting a cat?',
      adres: 'https://icatcare.org/articles/thinking-of-getting-a-cat',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Special considerations for senior cats',
      adres: 'https://icatcare.org/articles/special-considerations-for-senior-cats',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Choosing a boarding cattery',
      adres: 'https://icatcare.org/articles/choosing-a-boarding-cattery',
    },
  ],
};
