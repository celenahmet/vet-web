import type { BlogYazi } from './types';

export const yavruKediTuvaletEgitimi: BlogYazi = {
  slug: 'yavru-kedi-tuvalet-egitimi',
  baslik: 'Yavru Kediye Tuvalet Eğitimi Nasıl Verilir? Kum Alıştırma',
  ozet: 'Yavru kediler kumu çoğunlukla annelerinden öğrenir. Uyandıktan ve yemekten sonra kuma koymak, doğru kap ve kum seçimi alıştırmayı kolaylaştırır.',
  kapakAlt:
    'Yavru kediye tuvalet eğitimi konulu yazının kapak görseli; alçak kenarlı bir kum kabının içinde duran tekir yavru kedi',
  kategori: 'Kedi',
  tarih: '2026-10-29',
  bloklar: [
    { kind: 'paragraf', metin: '**Yavru kediler kumu kullanmayı çoğunlukla annelerini taklit ederek öğrenir.** International Cat Care\'e göre yavru kendi başına kumu bulamadıysa, onu uyandığında ve yemekten sonra kum kabına koymak yeterli oluyor; yavru koklamaya, eşelemeye ya da çömelmeye başladığında da aynısı yapılabiliyor. Doğru yerde, doğru boyutta bir kap ve tanıdık bir kum, eğitimin büyük kısmını kendiliğinden halleder.' },
    { kind: 'paragraf', metin: 'Aşağıda kum alıştırmayı adım adım, kum kabının boyunu ve sayısını, kum türünü, temizlik sıklığını ve kaza olduğunda ne yapılacağını International Cat Care ve Cornell Üniversitesi\'nin önerileriyle anlatıyoruz. Kısa cevap: kedi kumu kendisi ister, bizim işimiz o isteği kolaylaştırmaktır.' },

    { kind: 'tablo', basliklar: ['Konu', 'Öneri'], satirlar: [
      ['Kap sayısı', 'Kedi sayısı kadar, artı bir'],
      ['Kap boyu', 'Kedinin burnundan kuyruk köküne boyunun 1,5 katı'],
      ['Yavru için', 'Alçak kenarlı, büyüdükçe büyüyen kap'],
      ['Kum derinliği', 'Yaklaşık 3 cm'],
      ['Temizlik', 'Günde en az iki kez topaklar alınır'],
      ['Yer', 'Sessiz, mama ve sudan uzak'],
    ]},

    { kind: 'baslik', metin: 'Yavru kumu çoğunlukla annesinden öğrenir' },
    { kind: 'paragraf', metin: 'Kediler tuvaletlerini eşeleyip gömmeye doğuştan yatkındır. International Cat Care, yavruların kumu kullanmayı genellikle annelerini taklit ederek öğrendiğini belirtiyor. Annesinin yanında yeterince uzun kalmış bir yavru, yeni evine geldiğinde çoğu zaman kumu ilk günden kullanır.' },
    { kind: 'paragraf', metin: 'Annesinden erken ayrılmış ya da sokaktan alınmış bir yavru ise bu taklit fırsatını bulamamış olabilir. Böyle yavrularda biraz daha rehberlik gerekir, ama çoğu kısa sürede öğrenir. Yavrunun ilk haftalarında genel bakımı [[yavru-kedi-bakimi|yavru kedi bakımı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Uyandığında ve yemekten sonra kuma koymak yeterli' },
    { kind: 'paragraf', metin: 'Yavru kedinin tuvalet ihtiyacı belirli anlarda yoğunlaşır. International Cat Care\'in önerisi basittir: yavru uyandığında ve yemekten sonra onu kum kabına koymak. Yavru yere koklamaya, bir köşeyi eşelemeye ya da çömelmeye başladığında da onu nazikçe kuma taşımak işe yarar.' },
    { kind: 'liste', maddeler: [
      'Uyanınca ve her öğünden sonra yavruyu kum kabına koymak',
      'Koklama, eşeleme ya da çömelme görünce nazikçe kuma taşımak',
      'Kumu kullandığında onu rahat bırakmak; tuvaletini yaparken bölmemek',
      'Önceki evinde kullandığı kumdan bir miktar almak ya da aynı kumu kullanmak',
      'İlk haftalarda yavruyu kum kabının da bulunduğu tek bir odada tutmak',
    ]},
    { kind: 'paragraf', metin: 'International Cat Care, yeni gelen bir yavrunun ilk birkaç haftasını sessiz bir odada geçirmesini ve yavrunun önceki evinde kullanılan kumun kullanılmasını öneriyor. Tanıdık kum ve küçük bir alan, yavrunun kumu kaybetmesini ve evin başka bir köşesini seçmesini önler.' },

    { kind: 'baslik', metin: 'Kum kabının boyu da sayısı da önemli' },
    { kind: 'paragraf', metin: 'International Cat Care\'e göre ideal kum kabı, kedinin burnundan kuyruk köküne kadar olan boyunun bir buçuk katı uzunluğunda olmalı ve piyasadaki pek çok standart kap bunun için küçük kalıyor. Yavrular için daha küçük bir kapla başlanıp kedi büyüdükçe daha büyüğüne geçilmesi öneriliyor. Cornell Üniversitesi Kedi Sağlığı Merkezi de yavruların, yaşlı kedilerin ve hareket güçlüğü olan kedilerin alçak kenarlı kaplara ihtiyacı olduğunu belirtiyor.' },
    { kind: 'paragraf', metin: 'Sayı konusunda iki kurum aynı kuralı veriyor: evdeki kedi sayısı kadar kum kabı, artı bir. Tek kedili bir evde bile iki kap, kedinin her zaman temiz bir seçeneği olmasını sağlar. International Cat Care kapların yan yana konmamasını, evin farklı yerlerine dağıtılmasını öneriyor; yan yana duran kapları kedi tek bir kap gibi algılayabilir.' },
    { kind: 'yanilgi', baslik: '"Tek kedi için tek kum kabı yeter"', metin: 'International Cat Care ve Cornell Üniversitesi, kedi sayısının bir fazlası kadar kum kabı öneriyor. Tek kedili bir evde ikinci kap, birinci kirliyken ya da ulaşılması zorken kedinin kum dışına yönelmesini önler.' },

    { kind: 'baslik', metin: 'Kumun türü ve derinliği kedinin tercihini belirler' },
    { kind: 'paragraf', metin: 'International Cat Care, araştırmaların kedilerin kabın içinde yaklaşık 3 cm kum tercih ettiğini gösterdiğini belirtiyor. Kediler genellikle ince, kum benzeri dokuyu seviyor ve pek çoğu topaklanan kumu tercih ediyor; topaklar kolay alındığı için kap daha temiz kalıyor. Cornell de kedilerin çoğunun kokusuz ve ince dokulu kumu tercih ettiğini yazıyor.' },
    { kind: 'paragraf', metin: 'Kum tercihleri yavrulukta oluşuyor; bu yüzden işe yarayan bir kum bulunduğunda sık sık değiştirmemek gerekiyor. International Cat Care kokulu kumların ve kabın içine serilen naylon örtülerin bazı kedileri rahatsız edebildiğini, kum dışına tuvalet yapmaya yol açabildiğini de belirtiyor.' },
    { kind: 'tablo', basliklar: ['Tercih edilen', 'Sorun çıkarabilen'], satirlar: [
      ['İnce, kum benzeri doku', 'İri, sert taneler'],
      ['Topaklanan kum', 'Sık sık değiştirilen kum türü'],
      ['Kokusuz kum', 'Ağır kokulu kum ve kokulu temizleyiciler'],
      ['Açık kap ya da kapaksız kapalı kap', 'Naylon örtü, kapaklı kapı'],
      ['Sessiz köşe', 'Mama kabının yanı, kalabalık geçiş yeri'],
    ]},

    { kind: 'baslik', metin: 'Kabın yeri ve temizliği alışkanlığı korur' },
    { kind: 'paragraf', metin: 'International Cat Care kum kabının sessiz, mama ve sudan, evin kalabalık yerlerinden uzak bir köşeye konmasını öneriyor; kedi flepinin ya da boydan boya cam pencerelerin yanı, dışarıdan tehdit hissedebileceği için uygun değil. Kurum topakların günde en az iki kez alınmasını, topaklanan kumda kabın 2-4 haftada bir, topaklanmayan kumda haftada bir tamamen yıkanmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Temizlikte ürün seçimi önemlidir. International Cat Care bazı dezenfektanların kediler için zehirli olduğunu belirtiyor ve sıcak su ile biyolojik deterjan kullanılıp kabın iyice durulanıp kurutulmasını öneriyor. Cornell ise idrar kokusunu andırdığı için amonyak ya da sirke içeren temizleyicilerden kaçınılmasını öneriyor.' },

    { kind: 'baslik', metin: 'Kaza olduğunda ceza değil temizlik gerekir' },
    { kind: 'paragraf', metin: 'Yavru kedilerde ara sıra kum dışına tuvalet yapmak öğrenme sürecinin parçası olabilir. Cornell Üniversitesi kediye asla vurulmaması, tekmelenmemesi ya da bağırılmaması gerektiğini, cezanın kaygıyı artırıp sorunu büyütebileceğini belirtiyor. Kedi bir yeri koklayarak tekrar kullanabildiği için kaza olan yerin kokusunun tamamen giderilmesi, yalnızca bastırılmaması gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Burnunu pisliğine sürmek kediye kumu öğretir"', metin: 'Ceza kediye kumu değil, korkmayı öğretir. Cornell Üniversitesi cezanın kedinin kaygısını artırdığını ve kum dışına tuvalet yapma sorununu büyütebildiğini belirtiyor. İşe yarayan, kazanın olduğu yeri iyice temizlemek ve kum kabını daha cazip hâle getirmektir.' },

    { kind: 'baslik', metin: 'Eğitimli kedi kumu bırakırsa önce sağlık düşünülür' },
    { kind: 'paragraf', metin: 'Kumu sorunsuz kullanan bir kedinin birden kum dışına tuvalet yapmaya başlaması bir eğitim eksikliği değildir. Cornell, hasta kedilerin her zaman hasta görünmeyebildiğini ve davranış üzerinde çalışmadan önce idrar yolu, böbrek, tiroit ya da sindirim sorunları gibi nedenlerin veteriner hekim tarafından araştırılması gerektiğini vurguluyor. İdrarda kan görülmesi gibi belirtileri [[kedi-idrarinda-kan|kedi idrarında kan]] yazımızda anlattık.' },

    { kind: 'uyari', metin: 'Kedi kuma sık sık gidip çok az idrar yapıyor ya da hiç yapamıyor, idrar yaparken zorlanıyor, ağlıyor veya idrarda kan görülüyorsa bu bir eğitim sorunu değil acil olabilecek bir sağlık sorunudur. Özellikle idrar yapamayan bir kedi vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodur.' },
  ],
  kontrolListesi: [
    'Kedi sayısından bir fazla kap var mı?',
    'Kap kedinin boyunun 1,5 katı mı?',
    'Kum yaklaşık 3 cm derinlikte mi?',
    'Topaklar günde iki kez alınıyor mu?',
    'Kap mama ve sudan uzakta mı?',
  ],
  sss: [
    { soru: 'Yavru kediye tuvalet eğitimi nasıl verilir?', cevap: 'Yavru kediler kumu çoğunlukla annelerini taklit ederek öğrenir. Yavruyu uyandığında, her öğünden sonra ve koklama ya da çömelme gördüğünüzde kum kabına koymak, ilk haftalarda onu kum kabının da bulunduğu tek bir odada tutmak ve tanıdık bir kum kullanmak çoğu zaman yeterlidir.' },
    { soru: 'Yavru kedi kaç kum kabı ister?', cevap: 'International Cat Care ve Cornell Üniversitesi, evdeki kedi sayısı kadar artı bir kum kabı öneriyor. Tek yavrulu bir evde bile iki kap, kedinin her zaman temiz bir seçeneği olmasını sağlar. Kaplar yan yana değil, evin farklı yerlerine konmalı.' },
    { soru: 'Kum kabı ne büyüklükte olmalı?', cevap: 'International Cat Care\'e göre ideal kum kabı, kedinin burnundan kuyruk köküne kadar olan boyunun bir buçuk katı uzunluğunda olmalı. Yavrular için alçak kenarlı daha küçük bir kapla başlanıp kedi büyüdükçe büyük kaba geçilmesi öneriliyor.' },
    { soru: 'Kediler hangi kumu sever?', cevap: 'Kediler genellikle ince, kum benzeri ve kokusuz kumu tercih ediyor; pek çoğu topaklanan kumu seviyor. International Cat Care kabın içinde yaklaşık 3 cm kum öneriyor. Kum tercihleri yavrulukta oluştuğu için işe yarayan kumu sık değiştirmemek gerekiyor.' },
    { soru: 'Kedi kumu ne sıklıkla temizlenmeli?', cevap: 'International Cat Care topakların günde en az iki kez alınmasını öneriyor. Kap topaklanan kumda 2-4 haftada bir, topaklanmayan kumda haftada bir tamamen yıkanmalı; sıcak su ve biyolojik deterjan kullanılıp iyice durulanmalı.' },
    { soru: 'Kedi kum dışına neden tuvalet yapar?', cevap: 'Kirli ya da küçük kap, sevmediği kum, kalabalık bir konum ya da stres neden olabilir. Kumu sorunsuz kullanan bir kedi birden kum dışına yapmaya başladıysa Cornell önce idrar yolu, böbrek ve tiroit gibi sağlık sorunlarının araştırılmasını öneriyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'International Cat Care',
      baslik: 'Choosing a litter tray for your cat',
      adres: 'https://icatcare.org/articles/choosing-a-litter-tray-for-your-cat',
    },
    {
      kurum: 'International Cat Care',
      baslik: 'Helping your new cat or kitten settle in',
      adres: 'https://icatcare.org/articles/helping-your-new-cat-or-kitten-settle-in',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feline Behavior Problems: House Soiling',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-behavior-problems-house-soiling',
    },
    {
      kurum: 'American Association of Feline Practitioners ve International Society of Feline Medicine',
      yazarlar: 'Carney HC, Sadek TP, Curtis TM, Halls V, Heath S, Hutchison P, Mundschenk K, Westropp JL',
      baslik: 'AAFP and ISFM guidelines for diagnosing and solving house-soiling behavior in cats',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2014,
      kunye: '16(7):579-598',
      doi: '10.1177/1098612X14539092',
      adres: 'https://doi.org/10.1177/1098612X14539092',
    },
  ],
};
