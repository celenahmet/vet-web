import type { BlogYazi } from './types';

export const muhabbetKusuBakimi: BlogYazi = {
  slug: 'muhabbet-kusu-bakimi',
  baslik: 'Muhabbet Kuşu Bakımı: Kafes, Yem ve Günlük Düzen',
  ozet: 'Muhabbet kuşu için önerilen en küçük kafes 20 × 20 × 30 inç. Kafesin yeri, yem düzeni, gece uykusu ve evdeki tehlikeleri kaynaklarıyla anlatıyoruz.',
  kapakAlt:
    'Kafesteki dalda yan yana duran mavi ve yeşil muhabbet kuşları',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-12',
  bloklar: [
    { kind: 'paragraf', metin: '**Muhabbet kuşu bakımı üç ayağa dayanıyor: kuşun rahatça hareket edeceği kadar büyük bir kafes, yalnızca tohumla sınırlı kalmayan dengeli bir yem düzeni ve kafes dışı hareketi, oyunu ve geceyi kapsayan sakin bir günlük akış.** Merck Veterinary Manual\'a göre muhabbet kuşu için önerilen en küçük kafes ölçüsü 20 × 20 × 30 inç, yani yaklaşık 51 × 51 × 76 cm; parmaklık aralığı ise 0,5 inç, yani yaklaşık 1,3 cm.' },
    { kind: 'paragraf', metin: 'Bu yazıda kafesin ölçüsünü ve evdeki yerini, yem düzenini, günlük akışı, gece uykusunu ve evdeki tehlikeleri bulacaksınız. Ömür ve yaşlanma verileri için [[muhabbet-kusu-kac-yil-yasar|muhabbet kuşu kaç yıl yaşar]] yazısı var; burada aynı bilgileri tekrarlamıyoruz. Yazı bir bakım rehberidir; hastalık belirtisi yorumlamaz, tedavi anlatmaz.' },

    { kind: 'tablo', basliklar: ['Konu', 'Kaynakların söylediği'], satirlar: [
      ['Kafes ölçüsü', 'En az 20 × 20 × 30 inç, parmaklık aralığı 0,5 inç'],
      ['Kafes biçimi', 'Çoğu kuş dikdörtgen kafesi tercih ediyor'],
      ['Kafesin yeri', 'Pencere, klima ve mutfaktan uzak'],
      ['Yem', 'Dengeli pelet ağırlıklı, yanında daha az taze sebze ve meyve'],
      ['Gece', 'Çoğu kuşta kafes örtülmüyor'],
      ['Kontrol', 'Yılda bir veteriner muayenesi'],
    ]},

    { kind: 'baslik', metin: 'Kafes ne kadar büyük olmalı?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual\'ın tablosunda muhabbet kuşu, cockatiel, sevda papağanı ve parrotlet için önerilen en küçük kafes 20 × 20 × 30 inç (uzunluk × genişlik × yükseklik), parmaklık aralığı 0,5 inç. Aynı kaynak kafesi yalnızca bir barınak olarak değil, kuşun tırmanıp oynayacağı, oyuncakların, yem arama fırsatlarının ve farklı boyut ve dokuda birkaç tünek çubuğunun sığacağı bir yaşam alanı olarak tarif ediyor. Yer ve bütçe elverdiği ölçüde mümkün olan en büyük kafesin alınması öneriliyor.' },
    { kind: 'paragraf', metin: 'Kuş sahipleri için kolay bir ölçüt de var: kafes, kuşun kanat açıklığının her yönde en az bir buçuk katı olmalı ki kuş kanatlarını gerebilsin. Küçük kafeslerin kuşu strese sokup sorunlara yol açabildiği belirtiliyor. Çoğu kuş, köşelerde oturmayı sevdiği için yuvarlak yerine dikdörtgen kafesi tercih ediyor.' },
    { kind: 'paragraf', metin: 'Aynı kafeste birden fazla kuş tutulacaksa kafesin daha da büyük olması gerekiyor. Her kuş birbiriyle anlaşmıyor ve aynı kafeste kavga edebiliyor. Hangi kuşların birlikte yaşayabileceği ve yeni bir kuşun nasıl tanıştırılacağı konusunda kuş hekimine danışılması öneriliyor.' },

    { kind: 'baslik', metin: 'Kafes evde nereye konmalı?' },
    { kind: 'paragraf', metin: 'Kafesin yeri ölçüsü kadar önemli. Bazı kuşlar insanların bulunduğu yerde olmak isterken bazıları sessiz köşelerde kendini daha güvende hissediyor; kuşun tepkisini izlemek gerekiyor. Pencere ve klimanın yanı kafesi fazla ısıttığı ya da soğuttuğu için uygun değil. Mutfak ise duman ve yemek buharları kuşlara zarar verebildiği için önerilmiyor.' },
    { kind: 'uyari', metin: 'Kuşların solunum yolu kimyasal dumanlara çok duyarlı. Benzin, haşere ilacı, parfüm ve diğer spreylerin kuşun bulunduğu ortamdan uzak tutulması, kafesin de mutfaktan uzakta durması gerekiyor. Kuşun bir duman, sprey ya da zehirli madde ile temas ettiğinden şüphelenilirse vakit kaybetmeden bir veteriner hekime başvurmak gerekiyor. Evde bir şey vermeye çalışmak önerilmez.' },

    { kind: 'baslik', metin: 'Muhabbet kuşu ne yemeli?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, evcil kuşlarda beslenmenin hâlâ büyük bir sorun olduğunu yazıyor. Geçmişte kuşlar yağı yüksek, tohum ve fındık ağırlıklı yemlerle beslenmiş; karaciğer, böbrek, solunum ve kemik sorunları gibi pek çok hastalık yetersiz beslenmeyle ilişkilendiriliyor. Kaynağın belirlediği hedef, dengeli bir pelet yeme ek olarak daha az miktarda taze sebze ve meyve vermek.' },
    { kind: 'paragraf', metin: 'Sıkça yapılan bir hata, peleti tohumla karıştırıp kuşun seçmesini beklemek. Kuşlar genellikle daha lezzetli tohumu ve fındığı seçip besleyici peleti bırakıyor. Tohum ağırlıklı beslenen bir kuşun dengeli yeme geçişi kademeli yapılmalı ve geçiş döneminde takviye gerekebiliyor; bu planı hekimin yapması gerekiyor. Yem gruplarının önerilen payları için [[muhabbet-kusu-kac-yil-yasar|muhabbet kuşu kaç yıl yaşar]] yazısındaki tabloya bakılabilir.' },
    { kind: 'yanilgi', baslik: '"Karışık yemde kuş ihtiyacı olanı seçer"', metin: 'Kuşlar genellikle daha lezzetli olan tohumu ve fındığı seçip besleyici peleti bırakıyor. Seçimi kuşa bırakmak dengeli beslenmeyi sağlamıyor.' },
    { kind: 'paragraf', metin: 'Saklama koşulları da önemli. Kabuklu fıstık ve tohum uygun saklanmazsa içinde küf oluşabiliyor ve küf karaciğere zarar verebiliyor; bu yüzden taze yem kullanılması ve doğru saklanması gerekiyor. Ağırlıklı olarak pelet yiyen kuşlarda ek vitamin ve mineral genellikle gerekmiyor, hekim önermedikçe verilmemesi öneriliyor. Büyük miktarda A vitamini takviyesi ise zararlı olabiliyor.' },
    { kind: 'paragraf', metin: 'Merck, tohumun, fındığın ve birçok sofra yemeğinin yağ oranının yüksek olduğunu, fazla yem ve hareketsizliğin kuşlarda obeziteye yol açtığını yazıyor. İdeal ağırlığın yüzde 20 üzerindeki kuş obez sayılıyor. Sofradan verilen yiyeceklerde ise dikkat gerekiyor: avokado, kuşlar için zehirli maddeler listesinde yer alıyor.' },

    { kind: 'baslik', metin: 'Günlük düzen nasıl kurulabilir?' },
    { kind: 'paragraf', metin: 'Kaynaklar muhabbet kuşu için saat saat bir program vermiyor. Ancak bakım önerileri, dört başlık altında toplanabilecek bir akış çıkarıyor. Aşağıdaki tablo bu önerileri bir araya getiren bir düzenleme; her satırdaki bilgi yazının ilgili bölümünde kaynağıyla birlikte geçiyor.' },
    { kind: 'tablo', basliklar: ['Zaman', 'Neler yapılabilir?'], satirlar: [
      ['Sabah', 'Taze yemin konması, kuşun davranışında ya da görünüşünde değişiklik olup olmadığına bakılması'],
      ['Gün içi', 'Tünekler ve oyuncaklarla hareket, kafes dışı zaman için pencere ve kapıların kapatılması'],
      ['Kafes dışı zaman', 'Kuşun her an gözetim altında tutulması, evdeki tehlikelerin önceden kaldırılması'],
      ['Gece', 'Kafesin örtülmemesi, oda ısısının ayarlanması, cereyanlı pencere ve havalandırmadan uzak durma'],
    ]},
    { kind: 'paragraf', metin: 'Overview of Pet Birds sayfası, evcil kuşların zeki, sosyal ve uçmaya uyumlu hayvanlar olduğunu belirtiyor. Aynı sayfaya göre yalnız tutulan bir kuşu, hareket fırsatı sınırlı küçük bir kafeste yaşatmanın hem bedensel hem ruhsal sonuçları var. Bu yüzden düzenin merkezinde kuşa ayrılan zaman ve hareket alanı bulunuyor.' },

    { kind: 'baslik', metin: 'Gece kafes örtülür mü?' },
    { kind: 'paragraf', metin: 'Kafesin üstünü geceleri örtmek akla gelen bir yol olsa da Merck Veterinary Manual çoğu kuşun kafesinin gece örtülmemesi gerektiğini belirtiyor. Örtü kuşu strese sokabiliyor. Oda soğuksa önerilen yol, odanın ısısını artırmak ya da kafesi cereyanlı pencere ve havalandırmalardan uzaklaştırmak. Kaynağa göre kuşlar genellikle insanların rahat ettiği sıcaklıklarda iyi oluyor.' },
    { kind: 'yanilgi', baslik: '"Kafesi geceleri örtünce kuş daha rahat uyur"', metin: 'Merck Veterinary Manual çoğu kuşun kafesinin geceleri örtülmemesi gerektiğini, örtünün kuşu strese sokabildiğini yazıyor. Soğuk bir oda için kafesi örtmek yerine oda ısısını artırmak ya da cereyandan uzaklaştırmak öneriliyor.' },

    { kind: 'baslik', metin: 'Kafes dışında uçuş ve evdeki tehlikeler' },
    { kind: 'paragraf', metin: 'Merck, kuşların da insanlar gibi sağlıklı kalmak için harekete ihtiyaç duyduğunu yazıyor. Kafes içinde tünek ve oyuncakla hareket destekleniyor, ayrıca kuşların gözetim altında kafesten çıkarılması gerekiyor. Aynı kaynak, kafes dışında geçirilen zamanın riskli de olabildiğini belirtip yaygın tehlikeleri sıralıyor:' },
    { kind: 'liste', maddeler: [
      'Cam pencereler ve aynalar: kuşlar çarpıp yaralanabiliyor.',
      'Açık pencere, açık kapı ve dönen tavan vantilatörleri: çarpma ve yaralanma riski taşıyor.',
      'Elektrik kabloları: kuşlar kabloyu kemirip elektrik çarpabiliyor.',
      'Açık tuvalet, lavabo ve ocak üstündeki sıvı kapları: kuşlar boğulabiliyor.',
      'Böcek ve fare yapışkanları: kuşlar yapışıp kalabiliyor.',
      'Açık alev: ocak ve şömine gibi yerlere kuşlar uçabiliyor.',
      'Çamaşır suyu, amonyak, fırın ve klozet temizleyicileri, tırnak cilası çıkarıcı, ilaçlar ve bazı bitkiler: zehirli olabiliyor.',
    ]},
    { kind: 'paragraf', metin: 'Merck, zehirli maddeler listesinin her şeyi kapsamadığını da vurguluyor: kuşun bulunduğu ortamın, güvenli olduğu bilinen eşyalarla sınırlı tutulması gerekiyor. Kafesten çıkarmadan önce pencerelerin ve kapıların kapatılması gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Aynalı oyuncak kuşa arkadaş olur"', metin: 'Merck Veterinary Manual kuşları şaşırtıp strese sokabildiği için aynalı oyuncaklardan kaçınılmasını öneriyor.' },

    { kind: 'baslik', metin: 'Bakımda en sık görülen eksikler' },
    { kind: 'paragraf', metin: 'Leipzig Üniversitesi Veteriner Fakültesi Kuş ve Sürüngen Kliniği\'nden Wickermann ve Krautwald-Junghanns, 2021\'de Almanya\'da muhabbet kuşu sahiplerine uygulanan çevrimiçi bir anketi yayımladı. Ankete 541 muhabbet kuşu sahibi katıldı. Araştırmacılar, bir uzman grubun EXOPET projesinde hazırladığı önerilere göre kuşlarla yaşama, kafes boyutu, kafes aksesuarları, sıcaklık, UV ışığı ve serbest uçuş koşullarını değerlendirdi.' },
    { kind: 'paragraf', metin: 'Sonuçlara göre muhabbet kuşu yaşam koşullarının yüzde 85,5\'inde serbest uçuş önerilerden sapıyordu; kuşların yüzde 52,2\'si gereğinden küçük kafeslerde, yüzde 77,8\'i ise önerilere uymayan aksesuarlarla tutuluyordu. Muhabbet kuşu sahiplerinin en sık bildirdiği sağlık sorunu yüzde 26,4 ile obeziteydi ve araştırmacılar bunu hareketsizlikle ilişkilendirdi. Muhabbet kuşlarının yüzde 48,3\'üne günde en az 12 saat serbest uçuş sağlanıyordu.' },
    { kind: 'paragraf', metin: 'Veriler sahiplerin kendi beyanına dayanan bir anketten geliyor ve Almanya\'yı kapsıyor; Türkiye için bu kaynakta ayrı bir veri yok. Yine de çalışmanın sonucu açık: araştırmacılar bu eksiklerin giderilmesi için sahiplerin bilgisinin artması ve türe özgü standart bilgi verilmesi gerektiğini yazıyor.' },

    { kind: 'baslik', metin: 'Veteriner kontrolü ne zaman gerekiyor?' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, kuşların av hayvanı olduğunu ve zayıf görünmemek için hastalığı gizlediklerini yazıyor; bu yüzden sahibin bir sorunu fark etmesi zorlaşıyor. Davranışta ya da görünüşte değişiklik görüldüğünde kuşun hemen bir veteriner hekime götürülmesi öneriliyor. Yeni alınan bir kuşun eve getirilmeden önce hekim tarafından kontrol edilmesi, ayrıca her yıl bir kez muayene yaptırılması da kaynakta yer alıyor.' },
    { kind: 'paragraf', metin: 'Muayeneye kuşun kendi kafesiyle gidilmesi öneriliyor, çünkü kafesin düzeni hekime ipucu verebiliyor. Kontrollerde yapılan kan testleri ise hastalıkları kuş ciddi belirti göstermeden yakalayabildiği için işe yarıyor. Kuşlarla çalışan bir hekim seçerken [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazısındaki ölçütlere ek olarak kuşa bakıp bakmadığını sormak yerinde olur. Acil bir durumda [[nobetci-veteriner|nöbetçi veteriner]] yazısı yardımcı olur.' },
    { kind: 'uyari', metin: 'Muhabbet kuşunun davranışında ya da görünüşünde bir değişiklik fark edilirse beklemeden bir veteriner hekime başvurmak gerekiyor. Kendiliğinden geçmesini beklemek zaman kaybettirebilir. Evde ilaç, vitamin ya da bitkisel ürün vermeye çalışmak önerilmez.' },
  ],
  kontrolListesi: [
    'Kafes yeterince büyük mü?',
    'Yem yalnız tohumdan mı oluşuyor?',
    'Kafes mutfaktan uzakta mı?',
    'Cam, kablo ya da açık su var mı?',
    'Kafesten çıkış gözetim altında mı?',
    'Kuşa bakan bir hekim var mı?',
  ],
  sss: [
    { soru: 'Muhabbet kuşu kafesi ne kadar büyük olmalı?', cevap: 'En az 20 × 20 × 30 inç, yani yaklaşık 51 × 51 × 76 cm olmalı ve parmaklık aralığı 0,5 inç olmalı. Merck Veterinary Manual mümkün olan en büyük kafesin alınmasını öneriyor. Kafes, kuşun kanat açıklığının her yönde en az bir buçuk katı olmalı ki kanatlarını gerebilsin.' },
    { soru: 'Muhabbet kuşuna ne yedirilmeli?', cevap: 'Ağırlıklı olarak dengeli pelet, yanında daha az miktarda taze sebze ve meyve veriliyor. Tohum ve fındık yağı yüksek olduğu için ağırlıklı yem olarak önerilmiyor. Geçiş kademeli yapılmalı; yem planını ve takviye ihtiyacını kuşa bakan veteriner hekimin belirlemesi gerekiyor.' },
    { soru: 'Muhabbet kuşunun kafesi geceleri örtülür mü?', cevap: 'Çoğu kuşta örtülmemesi gerekiyor. Merck Veterinary Manual, örtünün kuşu strese sokabildiğini belirtiyor. Oda soğuksa kafesi örtmek yerine oda ısısını artırmak ya da kafesi cereyanlı pencere ve havalandırmalardan uzaklaştırmak öneriliyor. Kuşa özel bir durum için hekime danışılmalı.' },
    { soru: 'Muhabbet kuşu mutfakta tutulur mu?', cevap: 'Tutulmaması öneriliyor. Merck Veterinary Manual mutfağın duman ve yemek buharları nedeniyle kuşlar için uygun olmadığını belirtiyor. Kuşların solunum yolu kimyasal dumanlara çok duyarlı olduğu için kafesin mutfaktan ve spreylerin kullanıldığı yerlerden uzakta durması gerekiyor.' },
    { soru: 'Muhabbet kuşu kafesten çıkarılmalı mı?', cevap: 'Evet, ama gözetim altında. Merck Veterinary Manual kuşların sağlıklı kalmak için harekete ihtiyaç duyduğunu yazıyor. Çıkarmadan önce pencere ve kapılar kapatılmalı; cam, ayna, kablo, açık su ve açık alev gibi tehlikeler önceden kaldırılmalı.' },
    { soru: 'Muhabbet kuşuna ayna konur mu?', cevap: 'Aynalı oyuncaklardan kaçınılması öneriliyor. Merck Veterinary Manual, ayna oyuncakların kuşları şaşırtıp strese sokabildiğini belirtiyor. Kuşun hareketi tünekler ve diğer oyuncaklarla destekleniyor; hangi oyuncağın uygun olduğunu kuşa bakan hekime sormak yerinde olur.' },
    { soru: 'Muhabbet kuşu ne zaman veterinere götürülmeli?', cevap: 'Davranışında ya da görünüşünde değişiklik fark edilir edilmez götürülmeli. Kuşlar hastalığı gizlediği için sahibin fark etmesi zor oluyor. Yeni alınan kuşun eve getirilmeden önce, ardından da her yıl bir kez muayene edilmesi öneriliyor. Evde ilaç ya da vitamin vermek önerilmez.' },
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Providing a Home for a Bird',
      adres: 'https://www.merckvetmanual.com/bird-owners/choosing-and-taking-care-of-a-pet-bird/providing-a-home-for-a-bird',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Overview of Pet Birds',
      adres: 'https://www.merckvetmanual.com/exotic-and-laboratory-animals/pet-birds/overview-of-pet-birds',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Nutritional Disorders of Pet Birds',
      adres: 'https://www.merckvetmanual.com/bird-owners/disorders-and-diseases-of-birds/nutritional-disorders-of-pet-birds',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Household Hazards for Pet Birds',
      adres: 'https://www.merckvetmanual.com/bird-owners/routine-care-and-safety-of-birds/household-hazards-for-pet-birds',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Importance of Veterinary Care in Pet Birds',
      adres: 'https://www.merckvetmanual.com/bird-owners/routine-care-and-safety-of-birds/importance-of-veterinary-care-in-pet-birds',
    },
    {
      kurum: 'Leipzig Üniversitesi Veteriner Fakültesi, Kuş ve Sürüngen Kliniği',
      yazarlar: 'Wickermann S, Krautwald-Junghanns ME',
      baslik: 'Evaluation of housing conditions of budgerigars (Melopsittacus undulatus) and cockatiels (Nymphicus hollandicus) in Germany',
      dergi: 'Tierärztliche Praxis Ausgabe K: Kleintiere/Heimtiere',
      yil: 2021,
      kunye: '49(6):425-435',
      doi: '10.1055/a-1668-9122',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34861720/',
    },
  ],
};
