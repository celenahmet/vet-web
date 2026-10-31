import type { BlogYazi } from './types';

export const kedilerKacSaatUyur: BlogYazi = {
  slug: 'kediler-kac-saat-uyur',
  baslik: 'Kediler Günde Kaç Saat Uyur? Yaşa Göre Uyku Süresi',
  ozet: 'Yetişkin bir kedi günün yaklaşık %40\'ını uyuyarak, %22\'sini dinlenerek geçirir. Yavru ve ilerleyen yaşta uyku süresi nasıl değişiyor, anlatıyoruz.',
  kapakAlt:
    'Koltuk minderinde uyuyan siyah beyaz kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Yetişkin bir kedi günün yaklaşık %40\'ını uyuyarak, %22\'sini de dinlenerek geçirir; yani uyku ve dinlenme birlikte günün büyük bölümünü, kabaca 15 saati bulur.** Merck Veterinary Manual kedileri alacakaranlıkta etkin hayvanlar olarak tanımlıyor ve günlük zaman dağılımını bu oranlarla veriyor. International Cat Care ise kedilerin günün üçte ikisini uyuyarak geçirebildiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu rakamların nereden geldiğini, yavru ve ilerleyen yaştaki kedilerde uykunun nasıl değiştiğini, ev ortamının uykuyu nasıl etkilediğini ve uyku düzenindeki değişikliğin ne zaman veteriner hekime danışmayı gerektirdiğini anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Dönem', 'Uyku ve dinlenme hakkında bilinen'], satirlar: [
      ['İlk iki hafta', 'Sağlıklı yavru zamanın %90\'ında yemek yer ya da uyur'],
      ['Yetişkin kedi', 'Günün %40\'ı uyku, %22\'si dinlenme, %15\'i tüy bakımı'],
      ['Yaş ilerledikçe', 'Dinlenme ve uyku süresi artıyor, hareket ve sıçrama azalıyor'],
      ['Hastanede yatan kedi', 'Gözlenen sürenin ortancası uykuda geçti: %11'],
    ]},

    { kind: 'baslik', metin: 'Yetişkin kedi günün ne kadarını uyur?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'a göre kediler günün %40\'ını uyuyarak, %22\'sini dinlenerek ve %15\'ini tüylerini temizleyerek geçirir. Uyku ile dinlenmeyi toplarsanız yaklaşık %62 eder; bu, 24 saatin kabaca 15 saatine denk gelir. Yalnızca uyku sayılırsa süre yaklaşık 9,6 saattir.' },
    { kind: 'paragraf', metin: 'Bu yüzden kaynaklar arasında farklı rakamlar görmek şaşırtıcı değil. Kimi kaynak yalnızca uykuyu, kimi uyku ve dinlenmeyi birlikte sayıyor. Aynı kedide bile süre günden güne, mevsime ve evdeki hareketliliğe göre değişir. Bu nedenle tek bir "doğru saat" yerine kedinin kendi alışkın düzenini bilmek daha işe yarar.' },
    { kind: 'baslik', metin: 'Uyku ile dinlenme aynı şey değil' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual uykuyu ve dinlenmeyi iki ayrı kalem olarak veriyor: günün %40\'ı uyku, %22\'si dinlenme. Nihon Üniversitesi\'nin çalışmasında kedilerin boyunluğuna takılan etkinlik ölçer, sağlıklı kedilerde dinlenme ve uyku durumlarını yüksek doğrulukla ayırt edebildi. Yani kedinin yatıyor görünmesi ile gerçekten uyuması aynı şey sayılmıyor.' },
    { kind: 'paragraf', metin: 'Bu ayrım pratikte işe yarar. Kedinin bir kenarda hareketsiz durması her zaman derin uyku anlamına gelmiyor; bu yüzden toplam süreyi yorumlarken tek bir rakama bakmak yerine kedinin gün içindeki genel etkinliğini, yemek ve oyuna ilgisini birlikte değerlendirmek gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Çok uyuyan kedi tembeldir"', metin: 'Kedinin günün büyük bölümünü uyku ve dinlenmeyle geçirmesi türün normal düzenidir. International Cat Care, kedilerin günün üçte ikisini uyuyabildiğini ama uyanıkken çevrelerine karşı çok dikkatli olduklarını belirtiyor. Sorun, kedinin kendi alışkın düzeninden belirgin biçimde sapmasıdır.' },

    { kind: 'baslik', metin: 'Kediler neden bu kadar çok uyur?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual kedilerin alacakaranlıkta etkin olduğunu, günlük etkinliklerinin de yaşadıkları ortamdan etkilendiğini belirtiyor. International Cat Care de kedilerin özellikle şafak ve gün batımında hareketli olabildiğini yazıyor. Yani uyku saatleri gün boyuna yayılır, hareketlilik ise sabaha karşı ve akşam saatlerinde yoğunlaşabilir.' },
    { kind: 'paragraf', metin: 'Kedinin gece koşturması ve sabaha karşı sizi uyandırması bu ritimle ilişkilidir. Konuyu ayrıca [[kedim-neden-gece-uyumuyor|kedim neden gece uyumuyor]] yazımızda ele aldık.' },

    { kind: 'baslik', metin: 'Yavru kediler ne kadar uyur?' },
    { kind: 'paragraf', metin: 'International Cat Care, sağlıklı yavru kedilerin yaşamlarının ilk iki haftasında zamanın %90\'ında yemek yediğini ya da uyuduğunu belirtiyor. Bu dönemde yavrunun uykusu da beslenmesi kadar doğal bir parçadır. Yavrunun yeterince emmediğinden, sürekli ağladığından ya da sönük göründüğünden endişe edilirse veteriner hekime danışmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Yavru kedi bakımına dair diğer konular için [[yavru-kedi-bakimi|yavru kedi bakımı]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Yaş ilerledikçe uyku süresi artıyor' },
    { kind: 'paragraf', metin: 'Nihon Üniversitesi\'nden Yamazaki ve ekibinin PLoS One dergisinde yayımlanan çalışması, kedilerin uyku ve dinlenmesini boyunluğa takılan bir etkinlik ölçerle izledi. Çalışmaya sahipli 61 kedi katıldı. Sonuçta kedilerin yaşı arttıkça günlük dinlenme ve uyku süresi anlamlı biçimde arttı; fiziksel etkinlik miktarı ve sıçrama sayısı ise azaldı. Cinsiyetler arasında anlamlı bir fark bulunmadı.' },
    { kind: 'paragraf', metin: 'Yani yaşlanan bir kedinin daha çok uyuması beklenen bir değişimdir. Kedinin yaşını ve hangi yaş döneminde olduğunu [[kedi-yasi-nasil-hesaplanir|kedi yaşı hesaplama]] ve [[kediler-kac-yil-yasar|kediler kaç yıl yaşar]] yazılarımızdan öğrenebilirsiniz.' },

    { kind: 'baslik', metin: 'Ev ortamı uykuyu nasıl etkiler?' },
    { kind: 'paragraf', metin: 'Kuzey Karolina Eyalet Üniversitesi Veteriner Fakültesi\'nin yoğun bakım ünitesinde yaptığı gözlem çalışmasına 96 köpek ve 16 kedi katıldı. Gözlenen sürenin ortancası köpeklerde %40, kedilerde %11 uykuda geçti. Doğal gece saatlerinde ışıklar kısıldığında hastanın uykuda olma olasılığı 1,7 kat yüksekti; gürültü düzeyi arttıkça uykuda olma olasılığı azaldı.' },
    { kind: 'paragraf', metin: 'Bu çalışma yoğun bakımdaki hastalarda yapıldı ve evdeki sağlıklı kedilere doğrudan uygulanamaz. Yine de ışık ve gürültünün kedi uykusunu etkileyebildiğini gösteriyor. Merck Veterinary Manual da kedilere yemek, su, tuvalet ve kaşınma alanlarının yanında ayrı ve birden çok dinlenme ya da uyku alanı sağlanmasını öneriyor. Kedilerin kutulara olan düşkünlüğü için [[kediler-neden-kutulari-sever|kediler neden kutuları sever]] yazısına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Kedinin uykusu için yapılabilecekler' },
    { kind: 'liste', maddeler: [
      'Kedinin kendi alışkın uyku düzenini gözlemleyip not etmek',
      'Sessiz, loş ve diğer kaynaklardan ayrı bir dinlenme köşesi sağlamak',
      'Gündüz uyuyan kediyi gereksiz yere uyandırmamak',
      'Etkin olduğu akşam ve sabah saatlerine oyun yerleştirmek',
      'Uyku düzeninde belirgin değişiklik görülürse veteriner hekime danışmak',
    ]},

    { kind: 'baslik', metin: 'Uyku düzeni ne zaman değişmiş sayılır?' },
    { kind: 'paragraf', metin: 'International Cat Care, kedinin normal davranışındaki değişikliklerin, örneğin daha çok uyumanın ya da temastan kaçınmanın, duygusal ya da bilişsel bir değişimden kaynaklanabileceğini ama sağlık sorununa da işaret edebileceğini belirtiyor. Nedenin ne olduğunu evde ayırt etmeye çalışmak yerine kedinin muayene edilmesi gerekiyor.' },
    { kind: 'uyari', metin: 'Kedi alışkın olduğundan belirgin biçimde fazla uyuyor, saklanıyor, oyuna ya da yemeğe ilgisini kaybediyorsa uyku düzenindeki değişiklik bir sağlık sorununun işareti olabilir. Bu durumda veteriner hekime başvurulması gerekiyor. Evde ilaç ya da tedavi denemesi önerilmez.' },
  ],
  kontrolListesi: [
    'Normal uyku düzenini biliyor muyum?',
    'Sessiz bir dinlenme köşesi var mı?',
    'Uyku düzeninde değişiklik var mı?',
    'Yemek ve oyuna ilgisi sürüyor mu?',
    'Muayene gereken bir işaret var mı?',
  ],
  sss: [
    { soru: 'Kediler günde kaç saat uyur?', cevap: 'Yetişkin kediler günün yaklaşık %40\'ını uyuyarak ve %22\'sini dinlenerek geçirir; ikisi birlikte kabaca 15 saati bulur. International Cat Care günün üçte ikisine kadar uykudan söz ediyor. Süre kediden kediye ve günden güne değişebiliyor.' },
    { soru: 'Yavru kediler ne kadar uyur?', cevap: 'Sağlıklı yavru kediler yaşamlarının ilk iki haftasında zamanın yaklaşık %90\'ında yemek yer ya da uyur. Yavru sönük görünüyor, emmiyor ya da sürekli ağlıyorsa veteriner hekime danışmak gerekiyor.' },
    { soru: 'Yaşlı kediler daha çok mu uyur?', cevap: 'Evet, yaş ilerledikçe kedilerin dinlenme ve uyku süresi artıyor. 61 sahipli kedi üzerinde yapılan bir çalışmada yaşla birlikte uyku ve dinlenme süresi artarken fiziksel etkinlik ve sıçrama sayısı azaldı. Yine de ani ve belirgin değişiklik muayene gerektirir.' },
    { soru: 'Kediler neden gündüz çok uyuyup gece hareketlenir?', cevap: 'Kediler alacakaranlıkta etkin hayvanlardır; özellikle şafak ve gün batımında hareketli olabilirler. Bu yüzden akşam ve sabaha karşı koşturma görülebilir. Gece huzursuzluğu sürüyorsa kedinin gün içinde yeterince oynadığından emin olmak ve sürerse veteriner hekime danışmak önerilir.' },
    { soru: 'Kedim çok uyuyor, endişelenmeli miyim?', cevap: 'Kedinin alışkın düzeni içinde çok uyuması normaldir. Ancak daha çok uyuma, saklanma ya da temastan kaçınma gibi değişiklikler sağlık sorununa işaret edebilir. Davranış değişikliğini fark ettiğinizde nedenini aramak yerine veteriner hekime başvurmak gerekiyor.' },
    { soru: 'Gürültü ve ışık kedi uykusunu etkiler mi?', cevap: 'Etkileyebilir. Veteriner yoğun bakım ünitesinde yapılan bir gözlem çalışmasında ışıklar kısıldığında hastaların gece uykuda olma olasılığı 1,7 kat arttı, gürültü arttıkça azaldı. Bu bulgu hastane ortamı içindir; yine de sessiz ve loş bir dinlenme alanı önerilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Social Behavior of Cats',
      adres: 'https://www.merckvetmanual.com/behavior/behavior-of-cats/social-behavior-of-cats',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'What is a cat?',
      adres: 'https://icatcare.org/articles/what-is-a-cat',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Bringing up a litter of kittens: health considerations',
      adres: 'https://icatcare.org/articles/bringing-up-a-litter-of-kittens-health-considerations',
    },
    {
      kurum: 'Nihon University, College of Bioresource Sciences, Laboratory of Veterinary Surgery',
      yazarlar: 'Yamazaki A, Edamura K, Tanegashima K, Tomo Y, Yamamoto M, Hirao H, Seki M, Asano K',
      baslik: 'Utility of a novel activity monitor assessing physical activities and sleep quality in cats',
      dergi: 'PLoS One',
      yil: 2020,
      kunye: '15(7):e0236795',
      doi: '10.1371/journal.pone.0236795',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/32735625/',
    },
    {
      kurum: 'North Carolina State University, College of Veterinary Medicine',
      yazarlar: 'Devereux EA, Ejezie AV, Lynch AM, Gruen ME, LaJuett SJ, Robertson JB, Scharf VF',
      baslik: 'Factors Affecting Sleep Among Dogs and Cats in a Veterinary Intensive Care Unit',
      dergi: 'Journal of Veterinary Emergency and Critical Care',
      yil: 2025,
      kunye: '35(3):225-232',
      doi: '10.1111/vec.13472',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/40492371/',
    },
  ],
};
