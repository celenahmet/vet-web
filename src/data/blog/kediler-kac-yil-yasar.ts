import type { BlogYazi } from './types';

export const kedilerKacYilYasar: BlogYazi = {
  slug: 'kediler-kac-yil-yasar',
  baslik: 'Kediler Kaç Yıl Yaşar? Ev Kedisi ve Sokak Kedisi Ömrü',
  ozet: 'Ev kedileri ortalama 13-17 yıl yaşar, sokakta bu süre üçte birine kadar düşer. Farkı yaratan ırk değil, kedinin nerede yaşadığı ve neyin ne zaman fark edildiği.',
  kategori: 'Kedi',
  tarih: '2026-08-23',
  bloklar: [
    { kind: 'paragraf', metin: 'Ev kedileri ortalama **13 ile 17 yıl** yaşar. Bakımı düzenli olan bir kedi 20 yaşını görebilir. Tamamen dışarıda yaşayan kedilerde ise ortalama **3 ile 6 yıl** arasında konuşuyoruz.' },
    { kind: 'paragraf', metin: 'Aradaki fark üç katı aşıyor ve bu farkı ırk açıklamıyor. Aynı tekir kedi, evde yaşadığında dışarıda yaşadığının iki üç katı ömür sürüyor. Bu yazı, o farkın nereden geldiğini ve hangi kısmının sizin elinizde olduğunu anlatıyor.' },

    { kind: 'baslik', metin: 'Ömrü belirleyen şey ırk değil, kapı' },
    { kind: 'tablo', basliklar: ['Yaşam biçimi', 'Ortalama ömür'], satirlar: [
      ['Ev içinde yaşayan, kısırlaştırılmış kedi', '13-17 yıl'],
      ['Eve girip çıkan kedi', '8-12 yıl'],
      ['Tamamen dışarıda yaşayan kedi', '3-6 yıl'],
      ['Bakımsız sokak kedisi', '2-5 yıl'],
    ]},
    { kind: 'paragraf', metin: 'Tablodaki dört satırın hepsi aynı hayvan. Değişen tek şey riske ne kadar maruz kaldığı. Ev kedisi trafiğe çıkmıyor, kavgada ısırılmıyor, aç kalmıyor ve hastalandığında biri fark ediyor. Dördü de ömrü doğrudan uzatan şeyler ve dördü de kapının hangi tarafında durduğuna bağlı.' },

    { kind: 'tuzak', baslik: '"Sokak kedileri daha dayanıklıdır" tuzağı', metin: 'Sokakta yaşayan kediler dayanıklı oldukları için değil, dayanıksızları erken elendiği için güçlü görünür. Gördüğünüz kedi hayatta kalanı; hayatta kalamayanı zaten görmüyorsunuz. Bu, dayanıklılık değil seçilim.' },

    { kind: 'baslik', metin: 'Kısırlaştırma bir kısıtlama değil, ömre yapılan en büyük tek müdahale' },
    { kind: 'paragraf', metin: 'Kısırlaştırılmış kediler istatistiklerde açık ara önde ve sebebi iki katmanlı.' },
    { kind: 'paragraf', metin: 'Birincisi doğrudan tıbbi: dişilerde rahim iltihabı ve meme tümörü riski, erkeklerde testis tümörü ya tamamen ortadan kalkıyor ya da belirgin biçimde düşüyor. İkincisi davranışsal ve aslında daha belirleyici: kısırlaştırılan kedi kaçmayı, uzağa gitmeyi ve kavga etmeyi büyük ölçüde bırakıyor. Kavga bırakılınca ısırıkla bulaşan hastalıklar da bırakılıyor.' },
    { kind: 'paragraf', metin: 'Yani kısırlaştırma yalnız üremeyi durdurmuyor, kediyi ömrünü kısaltan davranışlardan çıkarıyor.' },
    { kind: 'tuzak', baslik: '"Kısırlaştırma kediyi şişmanlatır" tuzağı', metin: 'Kısırlaştırma sonrası enerji ihtiyacı düşüyor. Porsiyon aynı kalırsa kedi kilo alıyor. Şişmanlatan ameliyat değil, güncellenmeyen mama miktarı. Kontrolde veteriner hekiminize yeni porsiyonu sorun, mesele orada bitiyor.' },

    { kind: 'baslik', metin: 'Kilonun ölçüsü terazi değil, kaburga' },
    { kind: 'paragraf', metin: 'Fazla kilo kedilerde şeker hastalığı, eklem sorunları ve karaciğer yağlanması riskini artırıyor. Ama "kaç kilo olmalı" sorusunun tek bir cevabı yok, çünkü iskelet yapısı kediden kediye değişiyor.' },
    { kind: 'paragraf', metin: 'Evde kullanabileceğiniz ölçü şu: kedinizin yan tarafına avucunuzu koyup hafifçe gezdirin. Kaburgaları **bastırmadan** hissedebiliyorsanız kilo uygundur. Hissetmek için bastırmanız gerekiyorsa fazla kilo var. Kaburgalar gözle görünüyorsa zayıf.' },

    { kind: 'baslik', metin: 'Ağızda başlayan sorun ağızda kalmıyor' },
    { kind: 'paragraf', metin: 'Diş taşı ve diş eti iltihabı, kedi bakımında en çok atlanan başlık. Atlanmasının sebebi de belli: kedi şikâyet etmiyor, ağzını açıp göstermiyor ve sahibi bir sorun olduğunu ancak koku ya da yeme zorluğu başlayınca fark ediyor.' },
    { kind: 'paragraf', metin: 'Kronik ağız enfeksiyonu vücutta sürekli bir iltihap yükü oluşturuyor. Bu yük uzun vadede böbrek ve kalp sağlığını etkiliyor. Yani ağız bakımı estetik bir konu değil, ömürle ilgili bir konu.' },

    { kind: 'baslik', metin: 'Tahlil gözlemin yerine geçmez, gözlem de tahlilin' },
    { kind: 'paragraf', metin: 'Kediler rahatsızlığını saklamakta ustadır. Bu bir kişilik özelliği değil, avlanan bir hayvanın zayıflığını belli etmeme refleksi. Sonucu şu: siz bir şey fark ettiğinizde hastalık genellikle başlamış olmuyor, ilerlemiş oluyor.' },
    { kind: 'paragraf', metin: 'Böbrek yetmezliği bunun en net örneği. Böbrek fonksiyonunun büyük kısmı kaybedilmeden dışarıdan belirti görülmüyor. Kan ve idrar tahlili ise değişimi belirtiler başlamadan önce gösterebiliyor. Bu yüzden yılda bir kontrol, yaşlı kedide altı ayda bir kontrol öneriliyor; tahlil, gözlemin göremediğini görüyor.' },
    { kind: 'paragraf', metin: 'Tersi de doğru: tahlil de her şeyi göstermiyor. Kedinin gece huzursuzlanması, yüksek yerlere çıkmayı bırakması ya da kumun dışına yapmaya başlaması hiçbir tahlilde çıkmaz. İkisi birbirinin yerine geçmiyor, birbirini tamamlıyor.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Kedinizin sağlığıyla ilgili her kararı, hayvanı gören bir veteriner hekimle birlikte alın.' },

    { kind: 'baslik', metin: 'Yaşlılık bir teşhis değil' },
    { kind: 'paragraf', metin: 'Veteriner hekimlikte kediler kabaca üç döneme ayrılıyor: 7-10 yaş olgun, 11-14 yaş yaşlı, 15 yaş ve üzeri ileri yaş. Yaşlanmanın kendisi hastalık değil ama bu dönemde bazı hastalıkların görülme sıklığı artıyor: böbrek yetmezliği, tiroid bezinin fazla çalışması, şeker hastalığı, eklem kireçlenmesi ve ağız hastalıkları.' },
    { kind: 'altBaslik', metin: 'Veterinere gitmeyi gerektiren değişiklikler' },
    { kind: 'liste', maddeler: [
      'Su tüketiminde belirgin artış',
      'İştah yerindeyken kilo kaybı',
      'Kumun dışına tuvalet yapmaya başlama',
      'Tüylerin matlaşması, kendini eskisi kadar temizlememe',
      'Zıplamaktan kaçınma, yüksek yerlere çıkmayı bırakma',
      'Gece artan miyavlama ve huzursuzluk',
    ]},
    { kind: 'tuzak', baslik: '"Yaşlandı, normaldir" tuzağı', metin: 'Yukarıdaki maddelerin hiçbiri yaşlılığın normal parçası değil. Her biri, erken yakalandığında yönetilebilen bir hastalığın ilk işareti olabilir. "Yaşlandı" demek, belirtiyi açıklamıyor, yalnız ertelemenizi sağlıyor.' },

    { kind: 'baslik', metin: 'Bir kedi yılı yedi insan yılı değil' },
    { kind: 'paragraf', metin: 'Yaygın bilinen yedi ile çarpma kuralı yanlış. Kediler ilk iki yılda çok hızlı olgunlaşıyor, sonra yavaşlıyor. Bir yaşındaki kedi bebek değil, genç bir yetişkin.' },
    { kind: 'tablo', basliklar: ['Kedi yaşı', 'İnsan karşılığı'], satirlar: [
      ['6 ay', '10 yaş'], ['1 yaş', '15 yaş'], ['2 yaş', '24 yaş'],
      ['5 yaş', '36 yaş'], ['10 yaş', '56 yaş'], ['15 yaş', '76 yaş'], ['20 yaş', '96 yaş'],
    ]},
    { kind: 'paragraf', metin: 'Kaba kural: ilk yıl 15, ikinci yıl 9, sonraki her yıl yaklaşık 4 insan yılı.' },

    { kind: 'baslik', metin: 'Irk tek başına belirleyici değil ama riski değiştiriyor' },
    { kind: 'tablo', basliklar: ['Irk', 'Ortalama ömür', 'Dikkat edilecek'], satirlar: [
      ['Tekir (melez)', '14-18 yıl', 'Genetik çeşitlilik avantaj sağlıyor'],
      ['Siyam', '15-20 yıl', 'Uzun ömürlü ırklardan'],
      ['Birman', '14-16 yıl', ''],
      ['British Shorthair', '12-16 yıl', 'Kalp kası hastalığı (HCM) riski'],
      ['Maine Coon', '10-14 yıl', 'HCM ve kalça displazisi'],
      ['Scottish Fold', '11-14 yıl', 'Kıkırdak ve eklem sorunları'],
      ['İran (Pers)', '10-15 yıl', 'Böbrek kisti (PKD), solunum sorunları'],
    ]},
    { kind: 'paragraf', metin: 'Melez kediler genellikle saf ırklardan uzun yaşıyor. Sebep basit: kalıtsal hastalıkların aynı hayvanda birikme ihtimali daha düşük.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Kedi kendi kendine bakar', 'Kedi kendini temizler, kendini tedavi etmez'],
      ['Dışarı çıkmazsa mutsuz olur', 'Ev içinde oyun ve tırmanma alanı, ömrün üçte ikisinden ucuz'],
      ['Süt iyi gelir', 'Yetişkin kedilerin çoğu laktozu sindiremiyor, ishale yol açıyor'],
      ['Az su içmesi normal', 'Az su içen kedide böbrek yükü artıyor, yaş mama ve akan su işe yarıyor'],
      ['Aşı bir kez yapılır', 'Karma ve kuduz aşısının tekrarı var, takvim kediye göre belirleniyor'],
      ['Yaşlı kedi mamasını paketten seçeriz', 'Böbrek değeri bozuksa mama tahlile göre seçilir, yaş grubuna göre değil'],
    ]},

    { kind: 'baslik', metin: 'Kedinizin ömrünü uzatmak için sekiz madde' },
    { kind: 'liste', maddeler: [
      'Ev içinde tutun; dışarı çıkacaksa kapalı bahçe ya da tasmalı gezinti',
      'Kısırlaştırın ve sonrasında porsiyonu güncelleyin',
      'Karma ve kuduz aşısını, iç ve dış parazit uygulamasını aksatmayın',
      'Kaburga testiyle kiloyu ayda bir kontrol edin',
      'Su tüketimini artırın: yaş mama, birden fazla su kabı, akan su',
      'Ağız bakımını ihmal etmeyin, kontrollerde diş taşını sordurun',
      'Yılda bir, 11 yaşından sonra altı ayda bir kontrol ve tahlil',
      'Kum kabını temiz tutun; tuvalet alışkanlığındaki değişim en erken uyarıdır',
    ]},
    { kind: 'paragraf', metin: 'Bu sekiz maddenin hiçbiri pahalı ya da zor değil. Zor olan, hepsini yıllarca aksatmadan sürdürmek. Aşı ve kontrol tarihlerini takip eden bir yer tutmak, listedeki en sıkıcı maddeyi en kolayı hâline getiriyor.' },
  ],
  sss: [
    { soru: 'En uzun yaşayan kedi kaç yaşına kadar yaşadı?', cevap: 'Kayıtlara geçen en uzun ömürlü kedi 38 yaşına kadar yaşadı. Bu bir istisna; 20 yaşını gören kedi bile nadir sayılır.' },
    { soru: 'Sokak kedisini eve alırsam ömrü uzar mı?', cevap: 'Evet, çünkü riskin büyük kısmı ortamdan geliyor. Eve almadan önce veteriner kontrolü, parazit uygulaması ve bulaşıcı hastalık testi yaptırın; evde başka kedi varsa bu adım isteğe bağlı değil.' },
    { soru: 'Erkek kediler mi dişi kediler mi daha uzun yaşar?', cevap: 'Kısırlaştırılmış dişiler istatistiklerde biraz önde ama fark küçük. Yaşam biçimi cinsiyetten çok daha belirleyici: ev içinde yaşayan bir erkek kedi, dışarı çıkan bir dişiden uzun yaşar.' },
    { soru: 'Kedimin yaşını nasıl öğrenebilirim?', cevap: 'Sokaktan alınan kedilerde yaş; diş yapısı, göz merceğinin berraklığı ve genel vücut durumuna bakılarak tahmin ediliyor. Kesin bir yöntem değil, veteriner hekim birkaç yıllık bir aralık verir.' },
    { soru: 'Kedim çok uyuyor, hasta mı?', cevap: 'Kediler günde 12-16 saat uyur, bu normaldir. Dikkat edilmesi gereken uyku süresinin kendisi değil, değişimi: eskisinden belirgin çok uyuyorsa, uyandığında oyuna ilgisizse ya da saklanmaya başladıysa kontrol gerekiyor.' },
    { soru: 'Yaşlı kedimin maması değişmeli mi?', cevap: 'Genellikle evet, ama paket üzerindeki yaş grubuna bakarak değil. Böbrek yetmezliği ya da başka bir hastalık varsa mama tahlil sonucuna göre seçilir. Önce kontrol, sonra mama.' },
  ],
};
