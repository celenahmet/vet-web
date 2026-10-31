import type { BlogYazi } from './types';

export const kediYikanirMi: BlogYazi = {
  slug: 'kedi-yikanir-mi',
  baslik: 'Kedi Yıkanır mı? Ne Sıklıkla ve Nasıl?',
  ozet: 'Kediler kendi tüy bakımını büyük ölçüde kendisi yapar, çoğu kedinin düzenli banyoya ihtiyacı yoktur. Hangi durumda yıkanır, nasıl yıkanır, burada.',
  kapakAlt:
    'Lavabonun yanında havluyla kurulanan uzun tüylü kedi',
  kategori: 'Kedi',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Kedi yıkanabilir, ama sağlıklı bir kedinin çoğu zaman düzenli banyoya ihtiyacı yoktur; banyo, kedi çok kirlendiğinde ya da tüyüne yapışkan veya kötü kokulu bir şey bulaştığında gündeme gelir.** Amerikan hayvan refahı kuruluşu ASPCA, kedinin dili ve dişleriyle kendi tüy bakımını yapmaya yeterince donanımlı olduğunu belirtiyor. Tüysüz Sphynx gibi bazı ırklar ise bu kuralın istisnası: yağlı derileri nedeniyle düzenli banyo gerekiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda kedilerin kendi temizliğini nasıl yaptığını, hangi durumlarda banyonun gerçekten gerektiğini, evde adım adım nasıl yıkanacağını, banyonun alerjiye etkisini ve banyonun yerini çoğu zaman alan tarama alışkanlığını anlatıyoruz.' },

    { kind: 'tablo', basliklar: ['Durum', 'Banyo gerekir mi?'], satirlar: [
      ['Sağlıklı, kısa tüylü, ev kedisi', 'Çoğu zaman gerekmez; haftada bir iki tarama yeterli olur'],
      ['Uzun tüylü kedi', 'Banyodan çok birkaç günde bir tarama gerekir'],
      ['Tüye yapışkan ya da kötü kokulu bir şey bulaştı', 'Banyo gerekebilir'],
      ['Tüye zararlı olabilecek bir madde bulaştı', 'Önce vakit kaybetmeden veteriner hekime başvurmak gerekir'],
      ['Sphynx gibi tüysüz ırk', 'Yağlı deri nedeniyle düzenli banyo gerekir'],
      ['Banyo ya da bakım sırasında çok direnen kedi', 'Profesyonel bakım uzmanı ya da veteriner hekim önerilir'],
    ]},

    { kind: 'baslik', metin: 'Kediler kendi temizliğini nasıl yapar?' },
    { kind: 'paragraf', metin: 'Kediler kendini yalayarak temizler; dil ve dişler bu bakımın kendi araçlarıdır. ASPCA bu yüzden kedinin kendi tüy bakımını yapabilecek donanıma sahip olduğunu, banyonun yalnızca kedi çok kirlendiğinde ya da üzerine yapışkan veya kokulu bir şey bulaştığında gerektiğini söylüyor.' },
    { kind: 'paragraf', metin: 'Bu yalanma yalnızca görünüş için değil. Kaliforniya Üniversitesi Davis Veteriner Fakültesi\'nden Eckstein ve Hart\'ın 2000 tarihli çalışmasında, pireli bir evde yaşayan dokuz kediye kendini yalamasını engelleyen koruyucu yakalık takıldı. Üç hafta sonra bu kedilerdeki pire sayısı, aynı evde yakalıksız yaşayan kedilerin yaklaşık iki katıydı. Pireli evdeki kediler, piresiz bir kolonideki kedilere göre yaklaşık iki kat sık kendini temizliyordu. Araştırmacılar kendini temizlemenin pireleri uzaklaştırmada etkili olduğu sonucuna vardı.' },
    { kind: 'paragraf', metin: 'Bu bulgu pire korumasının yerini tutmaz; pire ve diğer parazitler için düzenli koruma ayrı bir konudur. Ayrıntısı [[kedilerde-pire-nasil-anlasilir|kedilerde pire nasıl anlaşılır]] ve [[kedilerde-ic-ve-dis-parazit|kedilerde iç ve dış parazit]] yazılarında.' },

    { kind: 'yanilgi', baslik: '"Kedi de köpek gibi düzenli yıkanmalı"', metin: 'Sağlıklı bir kedinin çoğu zaman düzenli banyoya ihtiyacı yoktur, çünkü tüy bakımını büyük ölçüde kendisi yapar. Banyo, kedi çok kirlendiğinde ya da tüyüne bir şey bulaştığında gündeme gelir. Tüysüz ırklar ve hekimin önerdiği özel durumlar bunun dışında kalır.' },

    { kind: 'baslik', metin: 'Kedi ne zaman yıkanır?' },
    { kind: 'paragraf', metin: 'Sağlıklı bir ev kedisi için sabit bir banyo takvimi yok. Banyo şu durumlarda düşünülebilir:' },
    { kind: 'liste', maddeler: [
      'Kedi çamura, toza ya da yağlı bir yüzeye bulandığında',
      'Tüyüne yapışkan ya da kötü kokulu bir şey bulaştığında',
      'Sphynx gibi tüysüz bir ırksa ve derisi yağlandığında',
      'Veteriner hekim belirli bir neden için banyo önerdiğinde',
    ]},
    { kind: 'paragraf', metin: 'Kedinin tüyüne ya da patisine bulaşan maddeler kendini yalarken diline geçer. ASPCA, patilere yapışan zararlı maddelerin tüy bakımı sırasında kedinin diline ulaşabileceğini belirtiyor. Bu nedenle tüye boya, yağ, kimyasal temizlik ürünü gibi zararlı olabilecek bir madde bulaştığında banyoyu beklemeden vakit kaybetmeden veteriner hekime başvurmak gerekiyor.' },

    { kind: 'uyari', metin: 'Tüyde döküklük, kel bölgeler, kızarıklık, kabuklanma, kötü koku ya da kedinin kendini bir anda bırakıp hiç temizlememesi veya tersine aşırı yalanması banyoyla çözülecek bir durum değildir. Bu belirtilerde banyo yerine veteriner hekime danışmak gerekiyor.' },

    { kind: 'baslik', metin: 'Tüysüz ırklar neden düzenli yıkanır?' },
    { kind: 'paragraf', metin: 'Sphynx tüysüz görünse de her zaman tamamen tüysüz değildir; burun, kulak ve kuyrukta genellikle kısa tüyler bulunur. ABD merkezli kedi ırk kuruluşu CFA (Cat Fanciers\' Association), bu kedilerin derisinin çok yağlı olduğunu ve düzenli banyo gerektirdiğini belirtiyor.' },
    { kind: 'paragraf', metin: 'CFA ayrıca Sphynx\'in alerjisi olan bazı kişilerce tolere edilebildiği için düşük alerjenli sanıldığını, ama bunun düşük alerjenli bir kedi anlamına gelmediğini vurguluyor. Banyo derideki alerjen miktarını azaltıyor, ancak bu kalıcı bir çözüm değil.' },

    { kind: 'baslik', metin: 'Banyo kedi alerjisini azaltır mı?' },
    { kind: 'paragraf', metin: 'Kısmen ve kısa süreliğine. Virginia Üniversitesi Astım ve Alerji Merkezi\'nden Avner ve arkadaşlarının 1997\'de yayımladığı çalışmada sekiz kedi yıkandı ve hem kediden alınan hem de havaya geçen ana kedi alerjeni Fel d 1 ölçüldü. Alerjenin en yoğun bulunduğu bölge boyun tüyleriydi.' },
    { kind: 'paragraf', metin: 'Üç kedinin bir ay boyunca haftada bir, üç dakika suya daldırılarak yıkanması havadaki alerjeni ortalama yüzde 79 azalttı. Ancak araştırmacılar bu düşüşün bir hafta sürmediğini, bir sonraki yıkamadan önce havadaki düzeyin yeniden yükseldiğini bildirdi. Yani banyo alerjen yükünü bir süre azaltabilir, ama alerjisi olan bir kişi için tek başına yeterli bir önlem sayılmaz.' },

    { kind: 'baslik', metin: 'Kedi evde nasıl yıkanır?' },
    { kind: 'paragraf', metin: 'Banyo kararı verildiyse ASPCA\'nın önerdiği sıra, hem kedinin hem de yıkayan kişinin stresini azaltmak üzerine kurulu:' },
    { kind: 'liste', maddeler: [
      '**Zamanlama:** Banyo, kedinin en sakin olduğu ana denk getirilmeli. Öncesinde bir oyun seansı kediyi yorabilir.',
      '**Hazırlık:** Yıkayan kişinin korunması için önce tırnakların kesilmesi, ardından dökülen tüylerin ve keçeleşmelerin taranarak alınması önerilir.',
      '**Kulaklar:** Suyun kulağa kaçmaması için kulak girişine nazikçe biraz pamuk yerleştirilebilir.',
      '**Kayma önlemi:** Lavabo ya da küvete kaydırmaz bir lastik paspas konur ve yaklaşık 7,5 ile 10 santimetre ılık su doldurulur. Su sıcak olmamalı.',
      '**Islatma:** Kedi el duşu, plastik bir sürahi ya da kırılmaz bir bardakla ıslatılır; su doğrudan kulağa, göze ve buruna tutulmaz.',
      '**Şampuan:** Bir ölçü kedi şampuanı beş ölçü suyla seyreltilir ve baştan kuyruğa doğru, tüyün çıkış yönünde yedirilir. Yüz, kulak ve gözlerden uzak durulur.',
      '**Durulama:** Şampuan ılık suyla iyice durulanır. Kalıntı deriyi tahriş edebilir ve kiri üzerine çeker.',
      '**Yüz:** Yüz bir bezle silinir. Yüz çok kirli değilse sade su yeterlidir.',
      '**Kurulama:** Kedi büyük bir havluya sarılıp cereyan almayan, ılık bir yerde kurulanır. Sesinden rahatsız olmuyorsa saç kurutma makinesi en düşük ısıda kullanılabilir. Uzun tüylü kedide tüyler geniş dişli bir tarakla dikkatle açılır.',
      '**Ödül:** Banyonun sonunda bolca sevgi ve kedinin en sevdiği ödül maması banyoyla iyi bir anı bağlamaya yardım eder.',
    ]},

    { kind: 'baslik', metin: 'Hangi şampuan kullanılır?' },
    { kind: 'paragraf', metin: 'ASPCA, insan şampuanının kedinin derisini kurutabileceğini belirtiyor ve banyoda kedi şampuanı kullanılmasını öneriyor. Kurum ayrıca bazı şampuanların ve bakım ürünlerinin kedinin derisini tahriş edebileceğini, kediler için önerilen hipoalerjenik ürünlerin tercih edilmesi gerektiğini söylüyor.' },
    { kind: 'paragraf', metin: 'Pire ya da deri sorunu için ilaçlı şampuan söz konusuysa bu, bakım ürünü değil tedavi kararıdır ve ürünü veteriner hekimin seçmesi gerekiyor. Köpek için üretilmiş bir ürünün kedide kullanılması da aynı nedenle hekime sorulmadan yapılmamalı.' },

    { kind: 'baslik', metin: 'Banyo yerine düzenli tarama' },
    { kind: 'paragraf', metin: 'Kedilerin çoğu için asıl bakım banyo değil taramadır. ASPCA, taramanın tüydeki kiri, yağı ve ölü tüyleri, derideki pulları aldığını belirtiyor ve haftada bir iki taramanın tüyün sağlıklı kalmasına yardım ettiğini söylüyor. Ev içinde yaşayan uzun tüylü kediler yıl boyu tüy döker ve ölü tüyleri almak, keçeleşmeyi önlemek için birkaç günde bir bakım ister.' },
    { kind: 'paragraf', metin: 'Düzenli tarama yaşlanan kediler için ayrıca önemli, çünkü kedi yaşlandıkça kendini eskisi kadar titizlikle temizleyemeyebilir. Taranmayan tüy acı veren keçelere ve yutulan tüylerin birikmesine yol açabilir. Tüy dökümü için [[kedi-tuy-dokumu|kedi tüy dökümü]], yutulan tüyler için [[kedilerde-malt-ne-ise-yarar|kedilerde malt ne işe yarar]] yazılarına bakılabilir.' },
    { kind: 'paragraf', metin: 'Tarama aynı zamanda iyi bir gözlem anıdır. Haftalık bakım sırasında elin kedinin vücudunda gezdirilmesi; yara, şişlik, gizli keçe, pire ya da kene ve pire dışkısı gibi izlerin fark edilmesini sağlar. Fark edilen bir değişiklik veteriner hekime danışmak için iyi bir nedendir.' },

    { kind: 'baslik', metin: 'Kedi banyoya çok direnirse' },
    { kind: 'paragraf', metin: 'Bazı kediler bakıma hiç tahammül edemez. ASPCA, kedi bakım sırasında çok direniyor ve kedinin ya da kişinin yaralanma olasılığı varsa profesyonel bir bakım uzmanından ya da veteriner hekimden randevu alınmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Banyo zorunlu değilse çoğu kedi için düzenli tarama yeterli olur. Yeni sahiplenilen yavrularda bakımın diğer adımları [[yavru-kedi-bakimi|yavru kedi bakımı]] yazısında.' },
  ],
  kontrolListesi: [
    'Tüye bir şey bulaştı mı?',
    'Kedi şampuanı mı kullanılıyor?',
    'Su ılık mı, sıcak mı?',
    'Şampuan iyice durulandı mı?',
    'Haftalık tarama yapılıyor mu?',
    'Deride değişiklik var mı?',
  ],
  sss: [
    { soru: 'Kedi yıkanır mı?', cevap: 'Evet, ama sağlıklı bir kedinin çoğu zaman düzenli banyoya ihtiyacı yoktur. Kedi tüy bakımını dili ve dişleriyle büyük ölçüde kendisi yapar. Banyo, kedi çok kirlendiğinde ya da tüyüne yapışkan veya kokulu bir şey bulaştığında gündeme gelir.' },
    { soru: 'Kedi ne sıklıkla yıkanmalı?', cevap: 'Sağlıklı bir ev kedisi için sabit bir banyo sıklığı yoktur; ihtiyaç oldukça yıkanır. Sphynx gibi tüysüz ırklar yağlı derileri nedeniyle düzenli banyo ister. Kedilerin çoğu için düzenli bakım banyo değil, haftada bir iki taramadır.' },
    { soru: 'Kedi insan şampuanıyla yıkanır mı?', cevap: 'Önerilmez. ASPCA, insan şampuanının kedinin derisini kurutabileceğini belirtiyor ve kedi şampuanı kullanılmasını öneriyor. Kedi şampuanı da suyla seyreltilerek kullanılır ve kalıntı kalmayacak şekilde iyice durulanır, çünkü kalan şampuan deriyi tahriş edebilir.' },
    { soru: 'Kedi banyosunda su kaç derece olmalı?', cevap: 'Su ılık olmalı, sıcak olmamalı. ASPCA lavabo ya da küvete yaklaşık 7,5 ile 10 santimetre ılık su doldurulmasını ve durulamada da ılık su kullanılmasını öneriyor. Kaymayı önlemek için zemine lastik paspas konması da öneriliyor.' },
    { soru: 'Yıkanan kedi nasıl kurutulur?', cevap: 'Kedi büyük bir havluya sarılarak cereyan almayan, ılık bir yerde kurulanır. Sesinden rahatsız olmuyorsa saç kurutma makinesi en düşük ısıda kullanılabilir. Uzun tüylü kedide tüyler geniş dişli bir tarakla nazikçe açılır.' },
    { soru: 'Kediyi yıkamak alerjiyi azaltır mı?', cevap: 'Kısa süreliğine azaltabilir. 1997 tarihli bir çalışmada haftalık yıkama havadaki ana kedi alerjenini belirgin biçimde düşürdü, ama bu etki bir hafta sürmedi. Banyo, alerjisi olan biri için tek başına yeterli bir önlem sayılmaz.' },
    { soru: 'Kedi banyoya çok direnirse ne yapılır?', cevap: 'Zorlamak yerine profesyonel bir bakım uzmanından ya da veteriner hekimden yardım almak önerilir. ASPCA, kedinin ya da kişinin yaralanma olasılığı varsa bakımın uzmana bırakılmasını öneriyor. Banyo yerine düzenli tarama da çoğu kedi için yeterli olur.' },
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA (American Society for the Prevention of Cruelty to Animals)',
      baslik: 'Cat Grooming Tips',
      adres: 'https://www.aspca.org/pet-care/cat-care/cat-grooming-tips',
    },
    {
      kurum: 'CFA (The Cat Fanciers\' Association)',
      baslik: 'Sphynx',
      adres: 'https://cfa.org/sphynx/',
    },
    {
      kurum: 'University of California, Davis, School of Veterinary Medicine',
      yazarlar: 'Eckstein RA, Hart BL',
      baslik: 'Grooming and control of fleas in cats',
      dergi: 'Applied Animal Behaviour Science',
      yil: 2000,
      kunye: '68(2):141-150',
      doi: '10.1016/s0168-1591(00)00095-2',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/10771322/',
    },
    {
      kurum: 'University of Virginia Asthma and Allergic Diseases Center',
      yazarlar: 'Avner DB, Perzanowski MS, Platts-Mills TA, Woodfolk JA',
      baslik: 'Evaluation of different techniques for washing cats: quantitation of allergen removed from the cat and the effect on airborne Fel d 1',
      dergi: 'The Journal of Allergy and Clinical Immunology',
      yil: 1997,
      kunye: '100(3):307-12',
      doi: '10.1016/s0091-6749(97)70242-2',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/9314341/',
    },
  ],
};
