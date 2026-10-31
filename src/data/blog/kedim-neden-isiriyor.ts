import type { BlogYazi } from './types';

export const kedimNedenIsiriyor: BlogYazi = {
  slug: 'kedim-neden-isiriyor',
  baslik: 'Kedim Neden Isırıyor? Oyun Isırması',
  ozet: 'Kedilerin insanı ısırmasının en yaygın nedeni oyundur; sevilirken rahatsızlık, korku ve ağrı da ısırığa yol açabilir. Nedenler ve ne zaman veterinere gidileceği.',
  kapakAlt:
    'Tüylü oyuncağı ısırıp oynayan sarman kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedilerin sahiplerini ısırmasının en yaygın nedeni oyundur.** ASPCA\'ya göre oyun saldırganlığı, kedilerin sahiplerine yönelttiği saldırgan davranışların en yaygın türüdür. Ama her ısırık oyun değildir: sevilirken rahatsız olma, korku ve ağrı da ısırığa yol açabiliyor. Bu yüzden ısırığın hangi durumda geldiğine bakmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda oyun ısırmasının neden ortaya çıktığını, yavru kedilerin ısırmayı nasıl öğrendiğini, oyun dışındaki yaygın nedenleri, cezanın neden önerilmediğini ve ne zaman veteriner hekime başvurulması gerektiğini anlatıyoruz. Bu yazı genel bilgilendirmedir; tek tek kedilerde ısırığın nedenini belirlemek veteriner hekimin işidir.' },

    { kind: 'tablo', basliklar: ['Isırığın geldiği an', 'Sık görülen neden'], satirlar: [
      ['Pusu, kovalama ve atılma sonrası, oyun sırasında', 'Oyun ısırması'],
      ['Sevilirken, ani ısırıp uzaklaşma', 'Sevilmekten rahatsız olma'],
      ['Pencereden başka bir kediyi izledikten sonra yakındaki kişiye', 'Yönlendirilmiş (aktarılmış) saldırganlık'],
      ['Kulaklar yatık, beden küçülmüş, kaçacak yer yok', 'Korku'],
      ['Belirli bir bölgeye dokunulunca', 'Ağrı olabilir, veteriner hekime danışılması gerekiyor'],
    ]},

    { kind: 'baslik', metin: 'Oyun ısırması nedir?' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre sert oyun, iki yaşından küçük yavru ve genç kedilerde yaygın ve doğal bir davranış. Oyun saldırganlığı da pusuya yatma, kovalama, atılma, patiyle vurma, kavrama ve ısırma gibi tipik avlanma ve oyun davranışlarından oluşuyor. Kedinin niyeti oyun olsa bile bu davranış insana yöneldiğinde ya da fazla hırçınlaştığında yaralanmaya yol açabiliyor.' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'a göre kedilerde oyun, ritüelleşmiş ve normal bir saldırgan davranıştır; genetik ve öğrenmenin etkisiyle yetişkinliğe kadar sürebiliyor. Kitaba göre oyun dışındaki saldırganlık biçimlerinin çoğu, kedinin uyaranla arasındaki mesafeyi artırmaya yönelik davranışlardır. Oyun ve avlanma ise bu kuralın dışında tutuluyor.' },

    { kind: 'baslik', metin: 'Yavru kediler ısırmayı nasıl öğreniyor?' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre genç kedilerin birbirleriyle oynayarak ısırmalarını kontrol etmeyi ve patiyle vururken tırnaklarını içeri almayı öğrendiğine inanılıyor. Bu öğrenmenin derecesi her kedide aynı değil. Yetim kalan ya da erken sütten kesilen kediler oyun davranışını ölçmeyi hiç öğrenmemiş olabiliyor.' },
    { kind: 'paragraf', metin: 'Aynı kaynak oyun ısırmasına katkı veren iki etken daha sayıyor: uzun saatler yalnız kalıp oynama fırsatı bulamamak ve sahiplerin kediyi oyun içinde el ve ayakları kovalamaya, onlara saldırmaya teşvik etmesi. Yavru kedi bakımının genel çerçevesi için [[yavru-kedi-bakimi|yavru kedi bakımı]] yazısına bakılabilir.' },
    { kind: 'yanilgi', baslik: '"Elle oynamak zararsız, büyüyünce kendiliğinden geçer"', metin: 'Merck\'e göre oyun saldırganlığı genetik ve öğrenmenin etkisiyle yetişkinliğe kadar sürebiliyor. ASPCA ise sahiplerin eli ve ayağı oyun nesnesi yapmasını oyun ısırmasına katkı veren etkenler arasında sayıyor. Yavruyken sevimli gelen davranış, yetişkin kedide yaralayıcı hâle gelebilir.' },

    { kind: 'baslik', metin: 'Oyun dışında ısırmanın yaygın nedenleri' },
    { kind: 'paragraf', metin: 'Curtis\'in 2008 tarihli derlemesine göre kedilerde insana yönelik saldırganlığın daha yaygın nedenleri arasında oyun, korku, sevilmeye tahammülsüzlük ve yönlendirilmiş saldırganlık var; ağrı ve annelik davranışı ise diğer nedenler arasında sayılıyor. Aynı derleme, tedavi için önce saldırganlığın arkasındaki nedenin belirlenmesinin önemli olduğunu vurguluyor.' },
    { kind: 'liste', maddeler: [
      '**Sevilirken ısırma:** ASPCA\'ya göre kedi bir anda sevilmekten rahatsız olup nazikçe ısırabiliyor ve hemen uzaklaşıyor. Davranışbilimcilere göre aynı noktayı tekrar tekrar okşamak kısa sürede hoşnutsuz edici hâle gelebiliyor.',
      '**Yönlendirilmiş saldırganlık:** Kedi, ulaşamadığı bir hayvan ya da kişi yüzünden (örneğin pencere ardındaki bir kedi) heyecanlanıp yakındaki birine saldırabiliyor. ASPCA bu tepkinin, uyaranın üzerinden saatler geçtikten sonra da görülebildiğini belirtiyor.',
      '**Korku:** Merck\'e göre bazı kediler insanlarla arasındaki mesafeyi artırmak için saldırganlık gösteriyor; kulakları geriye yatırma, çömelme ve ağırlığı geriye verme savunma işaretlerinden.',
      '**Ağrı:** ASPCA\'ya göre ağrı çeken bir hayvan, ağrılı bölgesine dokunulduğunda saldırgan davranabilir. Ağrının kaynağını belirlemek veteriner hekimin işidir.',
    ]},

    { kind: 'baslik', metin: 'Sevilirken ısıran kedinin uyarı işaretleri' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre sevilirken ısırma, dikkatli bakıldığında çoğu zaman önceden haber veriyor. Kedinin başını aniden ele doğru çevirmesi, kuyruğunu seğirtmesi ya da çırpması, kulaklarını yassılaştırması veya ileri geri döndürmesi, huzursuzlaşması ve gözbebeklerinin büyümesi uyarı işaretleri olarak sayılıyor.' },
    { kind: 'paragraf', metin: 'Kedi durmak istediğini bu şekilde söylediğinde en iyi yanıtın okşamayı bırakmak olduğunu ASPCA açıkça belirtiyor. Ayrıca saldırgan duruş sergileyen bir kediye dokunulmaması, onu yatıştırmaya çalışılmaması ve cezalandırılmaması gerektiği de aynı kaynağın pratik kuralı.' },

    { kind: 'baslik', metin: 'Araştırmalar insana yönelik ısırıkla ilgili ne gösteriyor?' },
    { kind: 'paragraf', metin: 'São Paulo Üniversitesi Veteriner Fakültesi\'nden Ramos ve Mills, 2009\'da Brezilya\'nın São Paulo bölgesinde 107 kedi sahibiyle anket yaptı. Sahiplerin bildirdiğine göre kedilerin yüzde 49,5\'inde insana yönelik saldırganlık görüldü ve en sık okşama ile oyun durumlarıyla ilişkiliydi. Bunu kaynak başı koruma, ürkme ve yabancı bir hayvanı izleme izledi; yabancı kişilerin varlığı en az ilişkili durumdu.' },
    { kind: 'paragraf', metin: 'Çalışmada sevilmeye hassasiyet ve evdeki arka plan stres düzeyi, en yaygın risk etkenleri olarak öne çıktı. Bu bulgular sahip bildirimine dayanan küçük bir ankete ait. Yazarlar, sahiplerin saldırganlığı kedi sahipliğinin kaçınılmaz bir parçası sanabildiğini belirtiyor ve risk etkenlerinin bilinmesinin sahiplere danışmanlıkta önemli olduğunu vurguluyor.' },
    { kind: 'tablo', basliklar: ['Kaynak', 'Ne söylüyor?'], satirlar: [
      ['ASPCA', 'Oyun saldırganlığı sahiplere yönelen saldırganlığın en yaygın türü'],
      ['Merck Veterinary Manual', 'Oyun normal bir saldırgan davranış; yetişkinliğe sürebilir, cezadan kaçınılmalı'],
      ['Ramos ve Mills, 2009', 'Sahip bildirimlerine göre kedilerin yüzde 49,5\'inde insana yönelik saldırganlık'],
      ['Curtis, 2008', 'Oyun, korku, sevilmeye tahammülsüzlük ve yönlendirilmiş saldırganlık yaygın nedenler'],
    ]},

    { kind: 'baslik', metin: 'Ceza neden önerilmiyor?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'a göre kedilerde pozitif ceza (istenmeyen davranışa hoşa gitmeyen bir tepki vermek) korkuyu, kaygıyı ve saldırganlığı artırıyor. Bu nedenle bağırmak, vurmak ya da kediyi korkutmak yerine davranışın nedenine bakmak ve ödüle dayalı yöntemlere yönelmek öneriliyor.' },
    { kind: 'yanilgi', baslik: '"Isıran kediyi cezalandırırsan bırakır"', metin: 'Merck\'e göre pozitif ceza kedilerde korkuyu, kaygıyı ve saldırganlığı artırıyor. Ceza, ısırığın nedenini ortadan kaldırmadığı gibi kedinin sahibinden korkmasına da yol açabilir. Isırığı sürekli olan kedilerde bir davranış uzmanı ya da veteriner hekimle çalışmak daha güvenli bir yol.' },

    { kind: 'baslik', metin: 'Evde ne yapılabilir?' },
    { kind: 'liste', maddeler: [
      'Elleri ve ayakları oyun nesnesi olarak kullanmamak önerilir',
      'Kedinin gün içinde yeterli oyun fırsatı bulması gerekiyor',
      'Okşarken kuyruk, kulak ve gözbebeği işaretlerini izleyip kedi huzursuzlaşınca bırakmak önerilir',
      'Saldırgan duruştaki kediye dokunmamak ve yatıştırmaya çalışmamak gerekiyor',
      'Kediyi bağırarak ya da korkutarak cezalandırmaktan kaçınmak gerekiyor',
    ]},

    { kind: 'baslik', metin: 'Ne zaman veteriner hekime başvurulmalı?' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre saldırgan her kedi için tıbbi muayene şart. Bazı kediler tıbbi bir sorun ya da komplikasyon nedeniyle saldırgan davranabiliyor; ağrılı durumlar, ortopedik sorunlar, tiroid ve adrenal bozuklukları, bilişsel işlev bozukluğu, nörolojik sorunlar ve duyu kayıpları huzursuzluğu ve saldırganlığı artırabiliyor. ASPCA ayrıca saldırganlığın karmaşık, tedavisi zor ve yanlış uygulanan bazı yöntemlerin zararlı olabildiği bir sorun olduğunu belirtiyor.' },
    { kind: 'uyari', metin: 'Isırma ani başladıysa, giderek şiddetleniyorsa, ağrılı bir bölgeye dokunulunca ortaya çıkıyorsa ya da yaşlı bir kedide saldırganlık başladıysa veteriner hekime başvurulması gerekiyor. Kedinin ısırığı deriyi zedelediyse yara hemen bol su ve sabunla yıkanmalı ve en kısa sürede bir sağlık kuruluşuna başvurulmalı. Ayrıntılar için [[kedi-tirmalamasi-kuduz-yapar-mi|kedi tırmalaması kuduz yapar mı]] yazısına bakılabilir.' },
  ],
  kontrolListesi: [
    'Ellerle oynuyor muyum?',
    'Yeterli oyun fırsatı var mı?',
    'Uyarı işaretlerini tanıyor muyum?',
    'Huzursuzlanınca bırakıyor muyum?',
    'Cezaya başvuruyor muyum?',
    'Ani değişiklikte muayene var mı?',
  ],
  sss: [
    { soru: 'Kedim neden elimi ısırıyor?', cevap: 'En yaygın neden oyundur. ASPCA\'ya göre oyun saldırganlığı, kedilerin sahiplerine yönelttiği saldırgan davranışların en yaygın türü. Sevilirken rahatsız olma, korku ya da ağrı da ısırığa yol açabilir; ısırığın hangi durumda geldiğine bakmak gerekiyor.' },
    { soru: 'Kedimin oyun sırasında ısırması normal mi?', cevap: 'Oyun sırasında ısırma kediler için normal bir davranış. Merck Veterinary Manual\'a göre oyun, ritüelleşmiş ve normal bir saldırgan davranıştır. Ancak insanlar yaralanıyorsa ya da davranış giderek şiddetleniyorsa veteriner hekime ya da bir davranış uzmanına danışmak önerilir.' },
    { soru: 'Oyun ısırması yaşla kendiliğinden geçer mi?', cevap: 'Geçeceği garanti değil. Merck\'e göre oyun saldırganlığı genetik ve öğrenmenin etkisiyle yetişkinliğe kadar sürebiliyor. ASPCA ise sert oyunun iki yaşından küçük kedilerde yaygın olduğunu belirtiyor. Süren ve yaralayan ısırmada uzman desteği önerilir.' },
    { soru: 'Kedim sevilirken neden ısırıyor?', cevap: 'Sevilmek bir noktadan sonra kediyi rahatsız ediyor olabilir. ASPCA\'ya göre aynı bölgeyi tekrar tekrar okşamak kısa sürede hoşnutsuz edici hâle gelebiliyor. Kuyruk seğirmesi, kulakları yassılaştırma ve gözbebeği büyümesi uyarı işaretleri. Bu işaretlerde okşamayı bırakmak gerekiyor.' },
    { soru: 'Isıran kediyi cezalandırmak işe yarar mı?', cevap: 'Hayır, ceza işe yaramıyor ve zarar verebiliyor. Merck Veterinary Manual\'a göre pozitif ceza kedilerde korkuyu, kaygıyı ve saldırganlığı artırıyor. Isırığın nedenini bulmak ve gerekirse veteriner hekim ya da davranış uzmanıyla çalışmak daha doğru bir yol.' },
    { soru: 'Kedi ısırması kuduz bulaştırır mı?', cevap: 'Sağlık Bakanlığı\'na göre kedi ve köpek gibi kuduza yakalanma ihtimali olan hayvanların ısırıkları risk oluşturuyor. Isırık bölgesi vakit kaybedilmeden bol su ve sabunla yıkanmalı ve en kısa sürede sağlık kuruluşuna başvurulmalı. Aşı kararını sağlık kuruluşu verir.' },
    { soru: 'Kedim aniden ısırmaya başladıysa ne yapmalı?', cevap: 'Veteriner hekime başvurmak gerekiyor. ASPCA\'ya göre bazı kediler tıbbi bir sorun nedeniyle saldırgan davranabiliyor ve saldırgan her kedi için tıbbi muayene şart. Nedenin belirlenmesi muayeneyle mümkün; bu yazı bir teşhis yerine geçmez.' },
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA (Amerikan Hayvanlara Zulmü Önleme Derneği)',
      baslik: 'Aggression in Cats',
      adres: 'https://www.aspca.org/pet-care/cat-care/common-cat-behavior-issues/aggression-cats',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Behavior Problems of Cats',
      adres: 'https://www.merckvetmanual.com/behavior/normal-social-behavior-and-behavioral-problems-of-domestic-animals/behavioral-problems-of-cats',
    },
    {
      kurum: 'Universidade de São Paulo, Faculdade de Medicina Veterinária e Zootecnia',
      yazarlar: 'Ramos D, Mills DS',
      baslik: 'Human directed aggression in Brazilian domestic cats: owner reported prevalence, contexts and risk factors',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2009,
      kunye: '11(10):835-41',
      doi: '10.1016/j.jfms.2009.04.006',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/19577496/',
    },
    {
      kurum: 'University of Florida, College of Veterinary Medicine',
      yazarlar: 'Curtis TM',
      baslik: 'Human-directed aggression in the cat',
      dergi: 'Veterinary Clinics of North America: Small Animal Practice',
      yil: 2008,
      kunye: '38(5):1131-43',
      doi: '10.1016/j.cvsm.2008.04.009',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/18672157/',
    },
    {
      kurum: 'T.C. Sağlık Bakanlığı Halk Sağlığı Genel Müdürlüğü',
      baslik: 'Kuduz (sık sorulan sorular)',
      adres: 'https://hsgm.saglik.gov.tr/depo/birimler/zoonotik-ve-vektorel-hastaliklar-db/Sikca_Sorulan_Sorular/Kuduz.pdf',
    },
  ],
};
