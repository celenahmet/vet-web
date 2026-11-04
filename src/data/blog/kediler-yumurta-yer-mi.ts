import type { BlogYazi } from './types';

export const kedilerYumurtaYerMi: BlogYazi = {
  slug: 'kediler-yumurta-yer-mi',
  baslik: 'Kediler Yumurta Yer mi? Çiğ ve Pişmiş Yumurta',
  ozet: 'Kedilere çiğ yumurta önerilmiyor, tam pişmiş yumurta ise ara sıra küçük bir ödül olabilir. Bakteri riski ve ödül payı sınırı kaynaklarla anlatıldı.',
  kapakAlt:
    'Kaseyle haşlanmış yumurta uzatılan kedi',
  kategori: 'Beslenme',
  tarih: '2026-11-06',
  bloklar: [
    { kind: 'paragraf', metin: '**Kediler yumurtayı yiyebilir, ancak çiğ değil, tam pişmiş ve ara sıra verilen küçük bir ödül olarak.** ASPCA çiğ yumurtayı evcil hayvanlara verilmemesi gereken yiyecekler arasında sayıyor. Merck Veteriner El Kitabı çiğ yumurtadaki avidin denen maddenin pişirmeyle yok olduğunu belirtiyor. Cornell Üniversitesi Kedi Sağlığı Merkezi ise ödüllerin kedinin günlük kalorisinin yüzde 10 ile 15\'ini geçmemesini öneriyor.' },
    { kind: 'paragraf', metin: 'Aşağıda çiğ yumurtanın neden sorun sayıldığını, pişirmenin neyi değiştirdiğini, yumurtanın kedi beslenmesindeki yerini ve mutfakta dikkat edilmesi gereken hijyen noktalarını topladık. Kedinizin sağlığıyla ilgili bir soru varsa karar için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Yumurtanın durumu', 'Kaynaklarda söylenen', 'Sonuç'], satirlar: [
      ['Çiğ', 'Salmonella ve E. coli taşıyabilir; çiğ akındaki avidin biyotinin emilimini engelliyor', 'Önerilmiyor'],
      ['Az pişmiş', 'ASPCA çiğ ve az pişmiş et, yumurta ve kemikleri aynı uyarı başlığında topluyor', 'Önerilmiyor'],
      ['Tam pişmiş', 'Pişirme avidini yok ediyor; iyice pişirme Salmonella gibi bakterileri öldürüyor', 'Ara sıra, ödül payı içinde'],
    ]},

    { kind: 'baslik', metin: 'Çiğ yumurtanın bakteri sorunu' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre çiğ et ve çiğ yumurta, hem evcil hayvanlara hem insanlara zarar verebilecek Salmonella ve E. coli gibi bakteriler taşıyabiliyor. Bu risk yalnızca kediyi değil evdeki insanları da ilgilendiriyor, çünkü bakteri mutfak yüzeylerine, kaba ve ellere geçebiliyor.' },
    { kind: 'paragraf', metin: 'Çiğ beslenme üzerine yazılmış bir derlemede, Avrupa ve Kuzey Amerika\'daki taramaların çiğ mama örneklerinin bir bölümünde sürekli olarak Salmonella bulduğu, enfeksiyonun hayvanı ve ev halkını etkileyebildiği belirtiliyor. Amerikan Gıda ve İlaç İdaresi (FDA) de analiz ettiği 196 çiğ mama örneğinin 15\'inde Salmonella, 32\'sinde Listeria monocytogenes saptadı. Bunlar yumurtaya özel rakamlar değil, çiğ hayvansal gıdanın genel tablosudur; yine de çiğ yumurtanın neden güvenli sayılmadığını açıklıyor.' },

    { kind: 'baslik', metin: 'Çiğ yumurta akı ve biyotin' },
    { kind: 'paragraf', metin: 'Çiğ yumurtanın ikinci sorunu bakteriyle ilgili değil. ASPCA, çiğ yumurtadaki bir enzimin bazı vitaminlerin emilimini engelleyebildiğini ve bunun deri ile tüy sorunlarına yol açabildiğini belirtiyor. Merck Veteriner El Kitabı bu maddeyi adıyla anıyor: çiğ yumurta akında biyotini bağlayan ve sindirim kanalından emilmesini engelleyen avidin adlı bir glikoprotein var.' },
    { kind: 'paragraf', metin: 'Aynı kaynak, yumurta sarısının biyotin açısından iyi bir kaynak olduğunu da ekliyor. Yani sorun yumurtanın kendisinde değil, çiğ akında. Kedide kendi başınıza vitamin eksikliği aramak yerine, deri ya da tüyde bir değişiklik görüldüğünde veteriner hekime başvurmak gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Çiğ yumurta kedinin tüyünü parlatır"', metin: 'Kaynaklar tersini söylüyor. ASPCA çiğ yumurtadaki enzimin vitamin emilimini engelleyerek deri ve tüy sorunlarına yol açabileceğini belirtiyor. Tüy parlaklığı için çiğ yumurta vermek yerine kedinin tam ve dengeli bir mamayla beslenmesi önerilir.' },

    { kind: 'baslik', metin: 'Pişirme neyi değiştiriyor' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı, besinin çiğ ya da pişmiş verilmesinin besin kullanımını etkileyebildiğini ve çiğ yumurtadaki avidin gibi bazı besin karşıtı maddelerin pişirmeyle yok olduğunu belirtiyor. Bakteri tarafında FDA, çiğ malzemelerle evde hazırlanan pişmiş mamalar için besinin doğru iç sıcaklığa kadar pişirilmesini ve iyice pişirmenin Salmonella ve Listeria gibi bakterileri öldürdüğünü bildiriyor.' },
    { kind: 'paragraf', metin: 'Bu iki bilgi birlikte okunduğunda, tam pişmiş yumurtanın çiğ yumurtanın iki ana sorununu da ortadan kaldırdığı görülüyor. Bu yüzden yumurtanın içinin iyice pişmiş olması gerekiyor; ASPCA az pişmiş gıdaları da çiğ gıdalarla aynı uyarı başlığında topluyor.' },

    { kind: 'baslik', metin: 'Ne kadar yumurta verilebilir' },
    { kind: 'paragraf', metin: 'Kaynaklarda kedi için "günde şu kadar yumurta" diye bir miktar yok. Cornell Kedi Sağlığı Merkezi genel kural olarak ara sıra verilen ödüllerin zararlı olmadığını, ancak besin açısından tam ve dengeli olmadıkları için nadiren verilmesi gerektiğini, toplamın günlük kalorinin yüzde 10 ile 15\'ini geçmemesini belirtiyor. Pişmiş yumurta da bu ödül payının içinde sayılıyor.' },
    { kind: 'paragraf', metin: 'Günlük mama miktarını ve ödülün buna nasıl sığdırılacağını [[kedi-gunde-kac-gram-mama-yer|kedi günde kaç gram mama yer]] yazısında anlattık. Kilosu fazla olan, hamile, yavru ya da kronik hastalığı bulunan kedilerde yumurtanın uygun olup olmadığına veteriner hekimin karar vermesi gerekiyor.' },
    { kind: 'liste', maddeler: [
      'Yumurtanın tam pişmiş olması',
      'Çiğ akın hiçbir şekilde verilmemesi',
      'Miktarın günlük kalorinin yüzde 10 ile 15\'lik ödül payı içinde kalması',
      'Yumurtanın ana öğünün yerine geçmemesi',
    ]},

    { kind: 'baslik', metin: 'Yumurta kedinin ana yemeği olamaz' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı yumurtaya protein kalitesi açısından en yüksek biyolojik değeri verildiğini belirtiyor. Bu, yumurtanın iyi bir protein kaynağı olduğunu gösteriyor ama kedinin tüm besin ihtiyacını karşıladığı anlamına gelmiyor. Aynı kaynak, az sayıda besinden oluşan ev yapımı rasyonların çoğu zaman yetersiz kaldığını belirtiyor.' },
    { kind: 'paragraf', metin: 'Cornell Kedi Sağlığı Merkezi kedilerin zorunlu etçil olduğunu, yani yalnızca hayvansal ürünlerde bulunan besinlere dayandığını anlatıyor. Merkez, veteriner hekim aksini önermedikçe besin açısından dengeli ticari mamaların tercih edilmesini öneriyor. Kuru ve yaş mama arasında seçim yapmak için [[kediler-icin-yas-mama-mi-kuru-mama-mi|kediler için yaş mama mı kuru mama mı]] yazısına bakılabilir.' },
    { kind: 'yanilgi', baslik: '"Yumurta protein açısından mükemmel, o zaman mamanın yerine geçer"', metin: 'Yumurta yüksek biyolojik değerli bir proteindir, ama tek başına tam ve dengeli bir kedi rasyonu değildir. Merck az sayıda besinden oluşan ev yapımı rasyonların çoğu zaman yetersiz kaldığını belirtiyor.' },

    { kind: 'baslik', metin: 'Çiğ beslenme önerilmiyor' },
    { kind: 'paragraf', metin: 'Çiğ yumurtayı "doğal beslenme" diye düşünenler olabiliyor. Cornell Kedi Sağlığı Merkezi çiğ ve hafif pişmiş beslenme düzenlerinin faydasına dair bilimsel kanıtın şu an bulunmadığını, bu diyetlerin kedilere ve sahiplerine, özellikle bağışıklığı baskılanmış kişilere bulaşabilecek canlı bakteri, virüs ve parazit taşıyabildiğini belirterek bu tür beslenmeyi önermiyor.' },
    { kind: 'paragraf', metin: 'Evde bağışıklığı baskılanmış biri varsa bu risk daha da önemli hâle geliyor. Diğer riskli yiyecekler için [[kedilere-zararli-yiyecekler|kedilere zararlı yiyecekler]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Mutfakta hijyen' },
    { kind: 'paragraf', metin: 'FDA, çiğ mama ve onunla temas eden yüzeyler için ellerin sabun ve suyla en az 20 saniye yıkanmasını, yüzeylerin önce sıcak sabunlu suyla temizlenip sonra dezenfekte edilmesini öneriyor. Çiğ yumurtayla çalışırken de aynı mantık geçerli: kırıldığı tezgâh, kullanılan kaşık ve eller çiğ yumurtayla temas ettikten sonra temizlenmesi, çiğ gıdanın diğer yiyeceklerden ayrı tutulması gerekiyor.' },
    { kind: 'uyari', metin: 'Kedi çiğ ya da az pişmiş yumurta yediyse ve sonrasında kusma, ishal, halsizlik gibi bir değişiklik görülüyorsa nedenini kendi başınıza aramak yerine vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde bakteri bulaşmasından şüphe edilen kişilerin de bir sağlık kuruluşuna danışması gerekiyor.' },
  ],
  sss: [
    { soru: 'Kediler çiğ yumurta yer mi?', cevap: 'Kedilere çiğ yumurta verilmesi önerilmiyor. ASPCA çiğ yumurtanın Salmonella ve E. coli taşıyabildiğini, içindeki enzimin de bazı vitaminlerin emilimini engelleyerek deri ve tüy sorunlarına yol açabildiğini belirtiyor. Bu nedenle çiğ yumurta yerine tam pişmiş yumurta tercih edilmesi gerekiyor.' },
    { soru: 'Kediler haşlanmış yumurta yiyebilir mi?', cevap: 'Tam pişmiş yumurta ara sıra küçük bir ödül olarak verilebilir. Pişirme çiğ akındaki avidini yok ediyor ve iyice pişirme Salmonella gibi bakterileri öldürüyor. Yumurtanın içinin tamamen pişmiş olması ve ödül payını aşmaması gerekiyor. Şüphe varsa veteriner hekime danışmak önerilir.' },
    { soru: 'Kedilere yumurta akı mı sarısı mı verilir?', cevap: 'Pişmiş yumurtanın akı da sarısı da verilebilir, önemli olan yumurtanın tam pişmiş olması. Sorun çiğ akında: Merck Veteriner El Kitabı çiğ akındaki avidinin biyotini bağlayıp emilimini engellediğini, sarının ise biyotin açısından iyi bir kaynak olduğunu belirtiyor.' },
    { soru: 'Kediye ne kadar yumurta verilebilir?', cevap: 'Kaynaklarda yumurta için sabit bir miktar verilmiyor. Cornell Kedi Sağlığı Merkezi ödüllerin günlük kalorinin yüzde 10 ile 15\'ini geçmemesini öneriyor. Pişmiş yumurta bu payın içinde sayılıyor; uygun miktar kedinin kilosuna ve sağlık durumuna göre değiştiği için veteriner hekime sorulması gerekiyor.' },
    { soru: 'Yumurta kedi mamasının yerini tutar mı?', cevap: 'Hayır, yumurta kedi mamasının yerini tutmaz. Yumurta iyi bir protein kaynağı olsa da tek başına tam ve dengeli bir rasyon değil. Cornell Kedi Sağlığı Merkezi, veteriner hekim aksini önermedikçe besin açısından dengeli ticari mamaların tercih edilmesini öneriyor.' },
    { soru: 'Kedi çiğ yumurta yediyse ne yapılmalı?', cevap: 'Kendi başınıza bir şey denemek yerine veteriner hekime danışmak gerekiyor. Kedide kusma, ishal ya da halsizlik gibi bir değişiklik varsa vakit kaybetmeden başvurmak gerekiyor. Kedinin yaşı, kilosu ve sağlık durumu karar için önemli olduğundan telefonla bile bilgi almak yararlı olur.' },
  ],
  kontrolListesi: [
    'Yumurta tam pişmiş mi?',
    'Çiğ yumurta akı kaldı mı?',
    'Ödül payı aşıldı mı?',
    'Eller 20 saniye yıkandı mı?',
    'Mutfak yüzeyleri temizlendi mi?',
    'Kedide rahatsızlık belirtisi var mı?',
  ],
  kaynaklar: [
    {
      kurum: 'ASPCA (American Society for the Prevention of Cruelty to Animals)',
      baslik: 'People Foods to Avoid Feeding Your Pets',
      adres: 'https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets',
    },
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Nutritional Requirements of Small Animals',
      adres: 'https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals/nutritional-requirements-and-related-diseases-of-small-animals',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Feeding Your Cat',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feeding-your-cat',
    },
    {
      kurum: 'U.S. Food and Drug Administration (FDA), Center for Veterinary Medicine',
      baslik: 'Get the Facts! Raw Pet Food Diets can be Dangerous to You and Your Pet',
      adres: 'https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet',
    },
    {
      kurum: 'Animal and Plant Health Agency (APHA); University of Surrey, School of Veterinary Medicine',
      yazarlar: 'Davies RH, Lawes JR, Wales AD',
      baslik: 'Raw diets for dogs and cats: a review, with particular reference to microbiological hazards',
      dergi: 'Journal of Small Animal Practice',
      yil: 2019,
      kunye: '60(6):329-339',
      doi: '10.1111/jsap.13000',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31025713/',
    },
  ],
};
