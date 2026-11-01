import type { BlogYazi } from './types';

export const kopeklerYumurtaYerMi: BlogYazi = {
  slug: 'kopekler-yumurta-yer-mi',
  baslik: 'Köpekler Yumurta Yer mi? Çiğ ve Pişmiş Yumurta',
  ozet: 'Köpeklere çiğ yumurta önerilmiyor, tam pişmiş yumurta ise ara sıra küçük bir ödül olabilir. Bakteri riski, biyotin ve ödül payı kaynaklarla anlatıldı.',
  kapakAlt:
    'Kasedeki haşlanmış yumurtaya bakan köpek',
  kategori: 'Beslenme',
  tarih: '2026-11-01',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpekler yumurtayı yiyebilir, ancak çiğ değil, tam pişmiş ve ara sıra verilen küçük bir ödül olarak.** ASPCA çiğ yumurtayı evcil hayvanlara verilmemesi gereken yiyecekler arasında sayıyor. Merck Veteriner El Kitabı çiğ yumurta akındaki avidin denen maddenin biyotinin emilimini engellediğini belirtiyor. Amerikan Hayvan Hastaneleri Birliği (AAHA) kılavuzu ise ödül ve diğer yiyeceklerin günlük alımın yüzde 10\'unu geçmemesini öngörüyor.' },
    { kind: 'paragraf', metin: 'Aşağıda çiğ yumurtanın neden sorun sayıldığını, pişirmenin neyi değiştirdiğini, yumurtanın köpek beslenmesindeki yerini ve mutfakta dikkat edilmesi gereken noktaları topladık. Köpeğinizin sağlığıyla ilgili bir soru varsa karar için veteriner hekime başvurmak gerekiyor.' },

    { kind: 'tablo', basliklar: ['Yumurtanın durumu', 'Kaynaklarda söylenen', 'Sonuç'], satirlar: [
      ['Çiğ', 'Salmonella ve E. coli taşıyabilir; çiğ akındaki avidin biyotinin emilimini engelliyor', 'Önerilmiyor'],
      ['Az pişmiş', 'ASPCA çiğ ve az pişmiş et, yumurta ve kemikleri aynı uyarı başlığında topluyor', 'Önerilmiyor'],
      ['Tam pişmiş', 'Pişirme avidini yok ediyor; iyice pişirme Salmonella gibi bakterileri öldürüyor', 'Ara sıra, ödül payı içinde'],
    ]},

    { kind: 'baslik', metin: 'Çiğ yumurtanın bakteri sorunu' },
    { kind: 'paragraf', metin: 'ASPCA\'ya göre çiğ et ve çiğ yumurta, hem evcil hayvanlara hem insanlara zarar verebilecek Salmonella ve E. coli gibi bakteriler taşıyabiliyor. Bu risk yalnızca köpeği değil evdeki insanları da ilgilendiriyor, çünkü bakteri mutfak yüzeylerine, kaba ve ellere geçebiliyor.' },
    { kind: 'paragraf', metin: 'Çiğ beslenme üzerine yazılmış bir derlemede, Avrupa ve Kuzey Amerika\'daki taramaların örneklerin bir bölümünde sürekli olarak Salmonella bulduğu, çiğ beslenmenin başlıca risklerinin yetersiz beslenme ile hayvanı ve ev halkını etkileyebilen enfeksiyon olduğu belirtiliyor. FDA da analiz ettiği 196 çiğ mama örneğinin 15\'inde Salmonella, 32\'sinde Listeria monocytogenes saptadı. Bunlar yumurtaya özel rakamlar değil, çiğ hayvansal gıdanın genel tablosudur; yine de çiğ yumurtanın neden güvenli sayılmadığını açıklıyor.' },

    { kind: 'baslik', metin: 'Çiğ yumurta akı ve biyotin' },
    { kind: 'paragraf', metin: 'Çiğ yumurtanın ikinci sorunu bakteriyle ilgili değil. ASPCA, çiğ yumurtadaki bir enzimin bazı vitaminlerin emilimini engelleyebildiğini ve bunun deri ile tüy sorunlarına yol açabildiğini belirtiyor. Merck Veteriner El Kitabı bu maddeyi adıyla anıyor: çiğ yumurta akında biyotini bağlayan ve sindirim kanalından emilmesini engelleyen avidin adlı bir glikoprotein var.' },
    { kind: 'paragraf', metin: 'Aynı kaynak, yumurta sarısının biyotin açısından iyi bir kaynak olduğunu da ekliyor. Yani sorun yumurtanın kendisinde değil, çiğ akında. Merck biyotin eksikliğinin köpek ve kedilerde doğal olarak çok nadir olduğunu, ancak ortaya çıkabileceği yollardan birinin çiğ yumurta akı yedirmek olduğunu söylüyor. Belirtiler arasında büyümede geri kalma, deri iltihabı, halsizlik ve sinirsel bozukluklar sayılıyor. Köpekte böyle bir değişiklik görüldüğünde nedenini kendi başınıza aramak yerine veteriner hekime başvurmak gerekiyor.' },
    { kind: 'yanilgi', baslik: '"Çiğ yumurta köpeğin tüyünü parlatır"', metin: 'Kaynaklar tersini söylüyor. ASPCA çiğ yumurtadaki enzimin vitamin emilimini engelleyerek deri ve tüy sorunlarına yol açabileceğini belirtiyor. Tüy parlaklığı için çiğ yumurta vermek yerine köpeğin tam ve dengeli bir mamayla beslenmesi önerilir.' },

    { kind: 'baslik', metin: 'Pişirme neyi değiştiriyor' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı, besinin çiğ ya da pişmiş verilmesinin besin kullanımını etkileyebildiğini ve çiğ yumurtadaki avidin gibi bazı besin karşıtı maddelerin pişirmeyle yok olduğunu belirtiyor. Aynı kaynağa göre gıdadaki bakterileri, bağırsak kurtlarını ve protozoonları öldürmek için en az 74 derece (165 Fahrenheit) gerekiyor. FDA de evde pişirilen mamalarda iyice pişirmenin Salmonella ve Listeria gibi bakterileri öldürdüğünü bildiriyor.' },
    { kind: 'paragraf', metin: 'Bu bilgiler birlikte okunduğunda, tam pişmiş yumurtanın çiğ yumurtanın iki ana sorununu da ortadan kaldırdığı görülüyor. Bu yüzden yumurtanın içinin iyice pişmiş olması gerekiyor; ASPCA az pişmiş gıdaları da çiğ gıdalarla aynı uyarı başlığında topluyor.' },

    { kind: 'baslik', metin: 'Ne kadar yumurta verilebilir' },
    { kind: 'paragraf', metin: 'Kaynaklarda köpek için "günde şu kadar yumurta" diye bir miktar yok. AAHA beslenme kılavuzu, dengeli ve eksiksiz ana mamanın toplam alımın yüzde 90\'ını, ödül ve diğer yiyeceklerin ise yüzde 10\'unu oluşturmasını belirtiyor. Pişmiş yumurta da bu yüzde 10\'luk payın içinde sayılıyor. Uygun miktar köpeğin kilosuna ve sağlık durumuna göre değiştiği için veteriner hekime sorulması gerekiyor.' },
    { kind: 'paragraf', metin: 'Günlük mama miktarını ve ödülün buna nasıl sığdırılacağını [[kopek-gunde-kac-gram-mama-yer|köpek günde kaç gram mama yer]] yazısında anlattık. Kilosu fazla olan, hamile, yavru ya da kronik hastalığı bulunan köpeklerde yumurtanın uygun olup olmadığına veteriner hekimin karar vermesi gerekiyor. Kilo konusunda [[kopegim-fazla-kilolu-mu|köpeğim fazla kilolu mu]] yazısı yol gösterebilir.' },
    { kind: 'liste', maddeler: [
      'Yumurtanın tam pişmiş olması',
      'Çiğ akın hiçbir şekilde verilmemesi',
      'Miktarın günlük alımın yüzde 10\'luk ödül payı içinde kalması',
      'Yumurtanın ana öğünün yerine geçmemesi',
    ]},

    { kind: 'baslik', metin: 'Yumurta köpeğin ana yemeği olamaz' },
    { kind: 'paragraf', metin: 'Merck Veteriner El Kitabı yumurtaya protein kalitesi açısından en yüksek biyolojik değeri verildiğini belirtiyor. Bu, yumurtanın iyi bir protein kaynağı olduğunu gösteriyor ama köpeğin tüm besin ihtiyacını karşıladığı anlamına gelmiyor. Aynı kaynak, az sayıda besinden oluşan ev yapımı rasyonların çoğu zaman yetersiz kaldığını belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Yumurta protein açısından mükemmel, o zaman mamanın yerine geçer"', metin: 'Yumurta yüksek biyolojik değerli bir proteindir, ama tek başına tam ve dengeli bir köpek rasyonu değildir. Merck az sayıda besinden oluşan ev yapımı rasyonların çoğu zaman yetersiz kaldığını belirtiyor.' },

    { kind: 'baslik', metin: 'Yumurtayı hazırlarken katılanlar' },
    { kind: 'paragraf', metin: 'Köpeğe yumurta hazırlarken yumurtanın kendisi kadar yanına katılanlar da önem taşıyor. ASPCA soğan, sarımsak ve frenk soğanının mide bağırsak tahrişine ve alyuvar hasarına, buna bağlı olarak kansızlığa yol açabildiğini, köpeklerin de miktara göre risk altında olduğunu belirtiyor. Aşırı tuzun da susuzluk ve idrar artışı, bazen kandaki elektrolitlerde bozulma yapabildiği bildiriliyor. Bu nedenle köpek için pişirilen yumurtaya tuz, soğan ve sarımsak katılmaması gerekiyor.' },
    { kind: 'paragraf', metin: 'Soğanlı, sarımsaklı ya da çok tuzlu bir yemek yenmişse ASPCA, yenen miktarı not edip veteriner hekimle iletişime geçmeyi öneriyor. Diğer riskli yiyecekler için [[kopeklere-zararli-yiyecekler|köpeklere zararlı yiyecekler]] yazısına bakılabilir. Kedilerde aynı konu için [[kediler-yumurta-yer-mi|kediler yumurta yer mi]] yazısı var.' },

    { kind: 'baslik', metin: 'Çiğ beslenme önerilmiyor' },
    { kind: 'paragraf', metin: 'Çiğ yumurtayı "doğal beslenme" diye düşünenler olabiliyor. Çiğ beslenme üzerine yazılmış derleme, bu beslenmenin savunulan faydalarının çoğu için güçlü kanıt ya da makul bir mekanizma bulunmadığını, belgelenmiş risklerin ise başlıca yetersiz beslenme ve hayvanı ya da ev halkını etkileyen enfeksiyon olduğunu belirtiyor.' },
    { kind: 'yanilgi', baslik: '"Çiğ yumurta daha doğal, o yüzden daha sağlıklı"', metin: 'Derleme çiğ beslenmenin savunulan faydalarının çoğu için güçlü bir kanıt bulunmadığını, risklerin ise belgelendiğini söylüyor. Doğal görünmesi güvenli olduğunu göstermiyor.' },

    { kind: 'baslik', metin: 'Mutfakta hijyen' },
    { kind: 'paragraf', metin: 'FDA, çiğ mama ile temas sonrasında ellerin sabun ve suyla en az 20 saniye yıkanmasını, çiğ gıdayla temas eden tezgâh, mutfak aletleri, mama kapları ve kesme tahtası gibi yüzeylerin de temizlenmesini öneriyor. Çiğ yumurtayla çalışırken de aynı mantık geçerli: kırıldığı tezgâh, kullanılan kaşık ve eller çiğ yumurtayla temas ettikten sonra temizlenmesi gerekiyor.' },
    { kind: 'uyari', metin: 'Köpek çiğ ya da az pişmiş yumurta yediyse ve sonrasında kusma, ishal, halsizlik gibi bir değişiklik görülüyorsa nedenini kendi başınıza aramak yerine vakit kaybetmeden veteriner hekime başvurmak gerekiyor. Evde bakteri bulaşmasından şüphe edilen kişilerin de bir sağlık kuruluşuna danışması gerekiyor.' },
  ],
  sss: [
    { soru: 'Köpekler çiğ yumurta yer mi?', cevap: 'Köpeklere çiğ yumurta verilmesi önerilmiyor. ASPCA çiğ yumurtanın Salmonella ve E. coli taşıyabildiğini, içindeki enzimin de bazı vitaminlerin emilimini engelleyerek deri ve tüy sorunlarına yol açabildiğini belirtiyor. Bu nedenle çiğ yumurta yerine tam pişmiş yumurta tercih edilmesi gerekiyor.' },
    { soru: 'Köpekler haşlanmış yumurta yiyebilir mi?', cevap: 'Tam pişmiş yumurta ara sıra küçük bir ödül olarak verilebilir. Pişirme çiğ akındaki avidini yok ediyor ve iyice pişirme Salmonella gibi bakterileri öldürüyor. Yumurtanın içinin tamamen pişmiş olması ve ödül payını aşmaması gerekiyor. Şüphe varsa veteriner hekime danışmak önerilir.' },
    { soru: 'Köpeklere yumurta akı mı sarısı mı verilir?', cevap: 'Pişmiş yumurtanın akı da sarısı da verilebilir, önemli olan yumurtanın tam pişmiş olması. Sorun çiğ akında: Merck Veteriner El Kitabı çiğ akındaki avidinin biyotini bağlayıp emilimini engellediğini, sarının ise biyotin açısından iyi bir kaynak olduğunu belirtiyor.' },
    { soru: 'Köpeğe ne kadar yumurta verilebilir?', cevap: 'Kaynaklarda yumurta için sabit bir miktar verilmiyor. AAHA kılavuzu ödül ve diğer yiyeceklerin toplam alımın yüzde 10\'unu oluşturmasını belirtiyor. Pişmiş yumurta bu payın içinde sayılıyor; uygun miktar köpeğin kilosuna ve sağlık durumuna göre değiştiği için veteriner hekime sorulması gerekiyor.' },
    { soru: 'Yumurta köpek mamasının yerini tutar mı?', cevap: 'Hayır, yumurta köpek mamasının yerini tutmaz. Yumurta iyi bir protein kaynağı olsa da tek başına tam ve dengeli bir rasyon değil. Merck Veteriner El Kitabı, az sayıda besinden oluşan ev yapımı rasyonların çoğu zaman yetersiz kaldığını belirtiyor.' },
    { soru: 'Köpeklere soğanlı ya da tuzlu omlet verilir mi?', cevap: 'Verilmemesi gerekiyor. ASPCA soğan ve sarımsağın alyuvar hasarına ve kansızlığa yol açabildiğini, aşırı tuzun da susuzluk ve elektrolit bozukluğu yapabildiğini belirtiyor. Köpek böyle bir yemek yediyse yenen miktarı not edip veteriner hekimle iletişime geçmek gerekiyor.' },
    { soru: 'Köpek çiğ yumurta yediyse ne yapılmalı?', cevap: 'Kendi başınıza bir şey denemek yerine veteriner hekime danışmak gerekiyor. Köpekte kusma, ishal ya da halsizlik gibi bir değişiklik varsa vakit kaybetmeden başvurmak gerekiyor. Köpeğin yaşı, kilosu ve sağlık durumu karar için önemli olduğundan telefonla bile bilgi almak yararlı olur.' },
  ],
  kontrolListesi: [
    'Yumurta tam pişmiş mi?',
    'Çiğ yumurta akı kaldı mı?',
    'Tuz, soğan, sarımsak katıldı mı?',
    'Ödül payı aşıldı mı?',
    'Eller 20 saniye yıkandı mı?',
    'Köpekte rahatsızlık belirtisi var mı?',
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
      kurum: 'American Animal Hospital Association (AAHA)',
      yazarlar: 'Cline MG, Burns KM, Coe JB, Downing R, Durzi T, Murphy M, Parker V',
      baslik: '2021 AAHA Nutrition and Weight Management Guidelines for Dogs and Cats',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2021,
      kunye: '57(4):153-178',
      doi: '10.5326/JAAHA-MS-7232',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34228790/',
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
