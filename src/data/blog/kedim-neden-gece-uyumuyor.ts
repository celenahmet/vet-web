import type { BlogYazi } from './types';

export const kedimNedenGeceUyumuyor: BlogYazi = {
  slug: 'kedim-neden-gece-uyumuyor',
  baslik: 'Kedim Neden Gece Uyumuyor? Gece Koşturma ve Miyavlama',
  ozet: 'Kediler en hareketli oldukları saatleri alacakaranlıkta yaşar. Gece koşturması çoğu zaman harcanmamış enerjidir; yaşlı kedide ise değişiklik işareti olabilir.',
  kapakAlt:
    'Kedim neden gece uyumuyor konulu yazının kapak görseli; gece yatak odasında, sahibi uyurken halıdaki oyuncak fareye atılmaya hazırlanan tekir bir kedi',
  kategori: 'Kedi',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler en hareketli oldukları saatleri gün doğumu ve gün batımında yaşar.** International Cat Care, kedilerin ışığın az olduğu şafak ve alacakaranlık saatlerinde etkin olduğunu belirtiyor. Gece koşturması, sabaha karşı uyandırma ya da karanlıkta miyavlama çoğu zaman bu doğal ritimle gün içinde harcanmamış enerjinin birleşmesidir; bir sorun olmak zorunda değildir.' },
    { kind: 'paragraf', metin: 'Aşağıda kedilerin neden gece canlandığını, ani koşturma nöbetlerinin ne olduğunu, gece miyavlamasının hangi durumlarda öğrenilmiş bir alışkanlığa dönüştüğünü ve özellikle yaşlı kedilerde gece huzursuzluğunun ne zaman veteriner hekime gösterilmesi gereken bir değişiklik olduğunu anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Gördüğünüz', 'En olası neden', 'Ne yapılabilir'], satirlar: [
      ['Gece yarısı koşturma, duvara tırmanma', 'Harcanmamış enerji', 'Yatmadan önce oyun'],
      ['Sabaha karşı yüzünüze dokunma', 'Mama ya da ilgi isteği', 'Saate bağlı otomatik mama kabı'],
      ['Kapı önünde miyavlama', 'Öğrenilmiş istek', 'Karşılık vermemek, gündüzü zenginleştirmek'],
      ['Yeni gelen kedinin gece yemesi', 'Alışma süreci', 'Sabır, sessiz bir oda'],
      ['Yaşlı kedide amaçsız dolaşma, bağırma', 'Yaşa bağlı değişiklik ya da hastalık', 'Veteriner hekim kontrolü'],
    ]},

    { kind: 'baslik', metin: 'Kedi gece değil alacakaranlıkta uyanıktır' },
    { kind: 'paragraf', metin: 'Kediler sanıldığı gibi tam anlamıyla gece hayvanı değildir. International Cat Care\'in kedi iletişimi üzerine yazısında kedilerin zamanlarının bir kısmını ışığın az olduğu şafak ve alacakaranlıkta etkin geçirdiği, bu yüzden ses iletişiminin onlar için önemli olduğu anlatılıyor. Bu, atalarının avlandığı saatlerin mirasıdır: küçük kemirgenler ve kuşlar en çok bu saatlerde hareket eder.' },
    { kind: 'paragraf', metin: 'Ev kedisinin hayatında av yok ama ritim duruyor. Akşam karanlık bastığında ve sabaha karşı ilk ışıkta kedinin canlanması bu yüzden şaşırtıcı değildir. Sorun, bu saatlerin bizim uyku saatlerimize denk gelmesidir.' },

    { kind: 'baslik', metin: 'Ani koşturma nöbetleri birikmiş enerjidir' },
    { kind: 'paragraf', metin: 'Kedinin aniden koridorda deli gibi koşması, perdeye atlaması ya da görünmez bir şeyi kovalaması pek çok evde gece yaşanır. International Cat Care bu "çılgın anları" kedinin fazla enerjisini harcaması olarak açıklıyor. Gün boyu yalnız kalan, pencereden dışarı bakmaktan başka uyaranı olmayan bir ev kedisi, enerjisini akşam ve gece boşaltır.' },
    { kind: 'paragraf', metin: 'Bu nöbetler genç kedilerde ve yavrularda daha sık görülür. Kısa sürer, kedi sonra sakinleşir ve normal davranışına döner. Koşturma sırasında kedinin bir yere çarpması, aniden acı içinde bağırması ya da nöbetten sonra halsiz kalması ise oyunun ötesinde bir tabloya işaret edebilir.' },
    { kind: 'yanilgi', baslik: '"Gece koşturan kedi hastadır ya da bir şey görüyordur"', metin: 'Sağlıklı, genç bir kedinin kısa süreli gece koşturması çoğu zaman yalnızca biriken enerjinin boşalmasıdır. Belirleyici olan koşturmanın kendisi değil, kedinin bunun dışında yemesi, kuma çıkması ve davranışının normal olup olmadığıdır.' },

    { kind: 'baslik', metin: 'Gece miyavlaması çoğu zaman öğrenilir' },
    { kind: 'paragraf', metin: 'International Cat Care, yetişkin kedilerin miyavlamayı çoğunlukla insanlara yönelttiğini, insanların da bu sese karşılık vererek onu çeşitli biçimlere soktuğunu belirtiyor. Sabaha karşı miyavlayan kediye bir kez mama verildiğinde, kedi bu saatte miyavlamanın işe yaradığını öğrenir. Ertesi gün aynı saatte, daha ısrarlı biçimde tekrarlar.' },
    { kind: 'paragraf', metin: 'Bu yüzden gece isteklerine karşılık vermemek, kalıcı çözümün en önemli parçasıdır. Kızmak da bir karşılıktır; kedi için ilgi ilgidir. Karşılıksız kalan gece miyavlaması ilk günlerde artabilir, sonra azalır. Kedilerin neden ve kime miyavladığını ayrıntılı olarak kedilerin neden çok miyavladığını anlattığımız yazıda ele aldık.' },

    { kind: 'baslik', metin: 'Enerjiyi gündüz ve akşam harcatmak işe yarar' },
    { kind: 'paragraf', metin: 'Gece huzursuzluğunu azaltmanın en etkili yolu, kedinin enerjisini sizin uyanık olduğunuz saatlere taşımaktır. Kedinin av ritmini taklit eden bir akşam düzeni çoğu evde gece sakinliğini artırır.' },
    { kind: 'liste', maddeler: [
      'Yatmadan önce 10-15 dakikalık bir oyun: tüy ya da olta oyuncağıyla kovalama, yakalama',
      'Oyunun ardından akşamın son öğünü: avlan, ye, uyu döngüsünü tamamlar',
      'Gün içinde pencere önü, tırmanma rafı ve saklanma yeri gibi uyaranlar',
      'Sabaha karşı mama isteği için saate bağlı otomatik mama kabı; mamayı veren kişi değil makine olur',
      'Gece isteklerine karşılık vermemek, ama gündüz ilgiyi artırmak',
    ]},
    { kind: 'yanilgi', baslik: '"Kediyi gündüz uyutmazsam gece uyur"', metin: 'Kediler doğal olarak günün büyük bölümünü uyuyarak geçirir; kediyi gündüz zorla uyanık tutmak onu yalnızca huzursuz eder. İşe yarayan uykuyu engellemek değil, uyanık olduğu saatleri oyun ve uyaranla doldurmaktır.' },

    { kind: 'baslik', metin: 'Yeni gelen kedi önce geceleri cesaret toplar' },
    { kind: 'paragraf', metin: 'International Cat Care, yeni sahiplenilen yetişkin kedilerin ilk zamanlarda çoğu zaman kaygılı olduğunu, bazılarının ilk günlerde ya da haftalarda yalnız gecenin ortasında yemek yiyip kuma çıktığını belirtiyor. Kurum bu durum o dönemin ötesine geçerse veteriner hekime danışılmasını öneriyor. Evde herkes uyuduğunda ortam sessizleşir ve ürkek kedi ancak o zaman keşfe çıkar.' },
    { kind: 'paragraf', metin: 'Bu dönemde kediyi gündüz saklandığı yerden çıkarmaya zorlamak süreci uzatır. Alışma sürecini adım adım [[yeni-kedi-eve-alisma|eve yeni gelen kedi ne kadar sürede alışır]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Kızgınlıktaki dişi kedi geceyi bölebilir' },
    { kind: 'paragraf', metin: 'Kısırlaştırılmamış dişi kedilerde gece boyu süren yüksek sesli, uzun çağrılar çoğu zaman kızgınlık döneminin işaretidir. Kedi yere sürtünür, kuyruğunu yana çeker ve huzursuzlanır. Bu, oyunla ya da mama düzeniyle geçen bir durum değildir. Belirtileri ve sıklığını [[kedi-kizginlik-donemi|kedilerde kızgınlık dönemi]] yazımızda topladık.' },

    { kind: 'baslik', metin: 'Yaşlı kedide gece huzursuzluğu bir değişiklik işaretidir' },
    { kind: 'paragraf', metin: 'Cornell Üniversitesi Kedi Sağlığı Merkezi, pek çok kedide yaşa bağlı fiziksel değişikliklerin 7 ile 10 yaş arasında başladığını, 12 yaşına gelindiğinde çoğu kedide görüldüğünü belirtiyor. Merkez, insanlardaki yaşlanmaya bağlı bellek kaybına benzer belirtilerin yaşlı kedilerde de görülebildiğini yazıyor: amaçsız dolaşma, aşırı miyavlama ve yön kaybı.' },
    { kind: 'paragraf', metin: 'Aynı kaynak, yaşlı kedilerde sık görülen tiroit bezinin aşırı çalışmasının çoğu zaman aşırı hareketliliğe yol açtığını da belirtiyor. Cornell\'in uyarısı açıktır: yaşlı kedide görülen değişikliklerin yalnızca yaşlılıktan kaynaklandığı varsayılmamalı, davranıştaki her değişiklik veteriner hekime danışılacak bir durumdur. Yaşlanmanın kedideki karşılığını [[kedi-yasi-nasil-hesaplanir|kedi yaşı nasıl hesaplanır]] yazımızda anlattık.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Kediler gece hayvanıdır', 'En hareketli oldukları saatler şafak ve alacakaranlık'],
      ['Gece miyavlayana mama vermek susturur', 'Miyavlamanın işe yaradığını öğretir'],
      ['Yaşlı kedinin gece dolaşması yaşlılıktır', 'Cornell her değişikliğin hekime danışılmasını öneriyor'],
      ['Gündüz uyumasın ki gece uyusun', 'Uyanık saatleri oyunla doldurmak işe yarar'],
    ]},

    { kind: 'uyari', metin: 'Gece huzursuzluğuna iştah ya da su tüketiminde artış, kilo kaybı, kum dışına idrar yapma, amaçsız dolaşma, yön kaybı ya da dokunulduğunda ağrı tepkisi eşlik ediyorsa, özellikle 7 yaş üstü bir kedide durum yalnızca alışkanlık sayılmamalı ve veteriner hekime danışılması gerekiyor.' },
  ],
  kontrolListesi: [
    'Yatmadan önce oyun oynanıyor mu?',
    'Son öğün oyundan sonra mı?',
    'Gece isteklerine karşılık kesildi mi?',
    'Gündüz uyaran yeterli mi?',
    'Yaşlı kedide yeni değişiklik var mı?',
  ],
  sss: [
    { soru: 'Kedim neden gece uyumuyor?', cevap: 'Kediler en hareketli oldukları saatleri şafakta ve alacakaranlıkta yaşar. Gün içinde yeterince oynamayan bir kedi biriken enerjisini akşam ve gece boşaltır. Yaşlı bir kedide yeni başlayan gece huzursuzluğu ise veteriner hekime danışılması gereken bir değişikliktir.' },
    { soru: 'Kediler gece neden koşturur?', cevap: 'International Cat Care bu ani koşturma nöbetlerini kedinin fazla enerjisini harcaması olarak açıklıyor. Genç kedilerde ve yavrularda daha sık görülür, kısa sürer ve kedi ardından sakinleşir. Yatmadan önce oyun oynatmak nöbetleri çoğu zaman azaltır.' },
    { soru: 'Kedim gece neden miyavlıyor?', cevap: 'Yetişkin kediler miyavlamayı çoğunlukla insanlara yöneltir ve karşılık aldıkça sürdürür. Gece miyavlayan kediye mama ya da ilgi verilirse bu saatte miyavlamayı öğrenir. Kısırlaştırılmamış dişilerde kızgınlık, yaşlılarda ise yaşa bağlı değişiklikler de neden olabilir.' },
    { soru: 'Kediyi gece uyutmak için ne yapılır?', cevap: 'Yatmadan önce 10-15 dakikalık bir kovalama oyunu ve ardından akşamın son öğünü çoğu evde işe yarıyor. Gece isteklerine karşılık vermemek, sabaha karşı mama için otomatik mama kabı kullanmak ve gündüzü uyaranla zenginleştirmek de yardımcı oluyor.' },
    { soru: 'Yaşlı kedi geceleri neden bağırır?', cevap: 'Cornell Üniversitesi, yaşlı kedilerde amaçsız dolaşma, aşırı miyavlama ve yön kaybı gibi yaşa bağlı belirtiler görülebildiğini, tiroit bezinin aşırı çalışmasının da aşırı hareketliliğe yol açabildiğini belirtiyor. Bu belirtilerde veteriner hekime danışmak gerekiyor.' },
    { soru: 'Yeni gelen kedi neden sadece gece yemek yer?', cevap: 'International Cat Care\'e göre yeni sahiplenilen yetişkin kediler ilk zamanlarda kaygılı olabiliyor ve bazıları ilk günlerde ya da haftalarda yalnız gecenin ortasında yiyip kuma çıkıyor. Bu dönemin ötesine geçerse veteriner hekime danışılması öneriliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'International Cat Care',
      baslik: 'Cat Communication',
      adres: 'https://icatcare.org/articles/cat-communication',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Why do cats..?',
      adres: 'https://icatcare.org/articles/why-do-cats',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'The Special Needs of the Senior Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/special-needs-senior-cat',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Helping your new cat or kitten settle in',
      adres: 'https://icatcare.org/articles/helping-your-new-cat-or-kitten-settle-in',
    },
  ],
};
