import type { BlogYazi } from './types';

/**
 * KEDI. Plan no 11. Kayganlastirici etki, parafin uyarisi, tuy yumagi sikligi,
 * tarama ve kucuk ogun Cannon 2013 (Oxford Cat Clinic, JFMS; PMC tam metni okundu);
 * "haftada ya da iki haftada bir tuy yumagi" ve kusma alarm isaretleri Cornell Feline
 * Health Center'in "Vomiting" sayfasindan. Kunyeler PubMed E-utilities. 30.09.2026.
 *
 * ⚠️ IKI KAYNAK AYNI SEYI SOYLEMIYOR ve yazi bunu gizlemiyor: Cornell ara sira tuy
 * yumagini sorunsuz sayiyor, Cannon kisa tuylu kedide sik tuy yumagini hastalik
 * isareti goruyor. Okuyucu kendi kedisinin nerede durdugunu tablodan buluyor.
 */
export const kedilerdeMaltNeIseYarar: BlogYazi = {
  slug: 'kedilerde-malt-ne-ise-yarar',
  baslik: 'Kedilerde Malt Ne İşe Yarar?',
  ozet: 'Malt, yutulan tüyün bağırsağa geçmesini kolaylaştıran kayganlaştırıcı bir macun; tüy yumağının nedenini çözmüyor. Ne zaman işe yarar, ne zaman bir işarettir.',
  kapakAlt:
    'Kedilerde malt macunu ve tüy yumağı konulu yazının kapak görseli; tüy yumağının nedenleri ve malt kullanımı',
  kategori: 'Kedi',
  tarih: '2026-10-02',
  bloklar: [
    { kind: 'paragraf', metin: 'Malt, kedinin tüylerini yalarken yuttuğu kılların mideden bağırsağa geçmesini kolaylaştıran **kayganlaştırıcı bir macundur.** Oxford Cat Clinic’ten Cannon’ın Journal of Feline Medicine and Surgery’de yayımlanan derlemesine göre parafin gibi etkisiz yağlar ya da aromalı parafin macunları, tüy tellerinin mideden ince bağırsağa geçip dışkıyla atılmasına, yani midede yumak hâline gelmemesine yardımcı olabiliyor.' },
    { kind: 'paragraf', metin: 'Malt tüy yumağının sonucunu hafifletiyor, nedenini çözmüyor. Aynı derleme, bu yöntemlerin ne kadar etkili olduğunu ölçen bir çalışma bulunmadığını da açıkça yazıyor. Bu yüzden asıl soru "malt verilsin mi" değil, kedinin neden bu kadar tüy yuttuğu. Aşağıdaki tablo kendi kedinizin durumunu bulmanız için.' },

    { kind: 'tablo', basliklar: ['Durum', 'Bakılan şey'], satirlar: [
      ['Uzun tüylü kedi, ara sıra tüy yumağı', 'Düzenli tarama, gerekirse kayganlaştırıcı'],
      ['Kısa tüylü kedi, sık tüy yumağı', 'Altta yatan neden: kaşıntı, pire, sindirim sorunu'],
      ['Haftada birden sık kusma', 'Veteriner hekim değerlendirmesi'],
      ['Kusmaya çalışıp çıkaramama, iştahsızlık, halsizlik', 'Vakit kaybetmeden veteriner hekim'],
    ] },

    { kind: 'baslik', metin: 'Malt tüyün yolunu kolaylaştırıyor, yutulan tüyü azaltmıyor' },
    { kind: 'paragraf', metin: 'Kedi kendini temizlerken dilindeki çıkıntılar ölü tüyü topluyor ve kedi bunu yutuyor. Cannon’ın aktardığı bir gözlem çalışmasında kediler günde ortalama **3,6 saat**, yani uyanık geçirdikleri zamanın yaklaşık dörtte birini kendilerini temizleyerek geçirdi. Tüyün çoğu sindirim yoluyla dışarı atılıyor; mideden çıkamayan kısım birikip yumak hâline geliyor.' },
    { kind: 'paragraf', metin: 'Malt bu noktada devreye giriyor: mide içeriğini kayganlaştırarak tüyün bağırsağa geçmesine yardım ediyor. Yutulan tüyün miktarını ise değiştirmiyor. Derlemeye göre piyasadaki tüy yumağı mamalarının etkinliği hakkında da kamuya açık nesnel bir veri yok.' },

    { kind: 'yanilgi', baslik: '"Malt tüy yumağını önler" yanılgısı', metin: 'Malt, yutulan tüyün yumak olmadan ilerlemesine yardım eden bir kayganlaştırıcı. Kedinin neden fazla tüy yuttuğuna dokunmuyor ve bu yöntemlerin etkinliğini ölçen bir çalışma bulunmuyor. Sık tüy yumağı olan kedide malt tek başına çözüm değildir.' },

    { kind: 'baslik', metin: 'Tüy yumağının ne zaman normal sayıldığı tartışmalı' },
    { kind: 'paragraf', metin: 'Bu konuda iki güçlü kaynak aynı şeyi söylemiyor. Cornell Üniversitesi Veteriner Fakültesi’nin kedi sağlığı merkezine göre bir kedinin haftada ya da iki haftada bir tüy yumağı çıkarması kalıcı bir sorun olmadan görülebiliyor. Cannon ise kısa tüylü kedilerin çoğunda sık tüy yumağının, kedinin fazla tüy yutmasına ya da sindirim hareketlerinin değişmesine yol açan kronik bir sorunun işareti olduğunu savunuyor.' },
    { kind: 'paragraf', metin: 'Cannon’ın kendi kliniğinde yaptığı yoklamaya göre sağlıklı görünen kısa tüylü kedilerin yaklaşık **yüzde 10’u** düzenli olarak, yılda iki ya da daha fazla tüy yumağı çıkarıyor; uzun tüylü kedilerde bu oran yaklaşık iki katı. İki görüşün ortak noktası şu: uzun tüylü kedide ara sıra görülen tüy yumağı daha az endişe verici, kısa tüylü kedide sık tüy yumağı ise sorgulanmayı hak ediyor.' },

    { kind: 'yanilgi', baslik: '"Her kedi tüy yumağı kusar, bu normaldir" yanılgısı', metin: 'Ara sıra görülen tüy yumağı sorun olmayabilir, ama "normal" sayılan sıklık tartışmalı. Kısa tüylü bir kedinin sık sık tüy yumağı çıkarması, Cannon’a göre çoğu zaman kaşıntı, pire ya da sindirim sorunu gibi altta yatan bir nedene işaret ediyor.' },

    { kind: 'baslik', metin: 'Sık tüy yumağının arkasında çoğunlukla üç neden var' },
    { kind: 'paragraf', metin: 'Cannon’ın derlemesi, sık tüy yumağı olan kedilerde gözden kaçırılmaması gereken üç yaygın katkıyı sayıyor:' },
    { kind: 'liste', maddeler: [
      'Kaşıntılı deri hastalıkları: kaşınan kedi kendini daha çok yalıyor ve daha çok tüy yutuyor',
      'Pire: pireli kedi hem kaşınıyor hem de pireyi yutarken şerit kapabiliyor',
      'Mamaya tahammülsüzlük: derlemeye göre sağlıklı görünen kısa tüylü kedilerde tüy yumağı kusmanın yaygın nedenlerinden biri mamaya yanıt veren sindirim hastalığı',
    ] },
    { kind: 'paragraf', metin: 'Bu yüzden sık tüy yumağı görülen bir kedide önce pire ve deri kontrolü yapılıyor. Pirenin nasıl anlaşıldığı [[kedilerde-pire-nasil-anlasilir|kedilerde pire nasıl anlaşılır]] yazısında. Derlemenin ifadesiyle koruyucu tedavi, altta yatan neden bulunamadığında ya da ortadan kaldırılamadığında gündeme geliyor.' },

    { kind: 'baslik', metin: 'Malt güvenle nasıl verilir' },
    { kind: 'paragraf', metin: 'Aromalı malt macunları çoğu kedinin gönüllü olarak yaladığı ürünler; miktar ve sıklık ürün etiketine ve veteriner hekimin önerisine göre belirleniyor. İçerik markaya göre değiştiği için etiketin okunması gerekiyor.' },
    { kind: 'paragraf', metin: 'Sıvı parafin söz konusu olduğunda Cannon’ın uyarısı nettir: tatsız ve kokusuz olduğu için mamaya karıştırılarak çoğu kediye güvenle verilebiliyor, ama **şırıngayla kedinin ağzına verilmemeli.** Yanlışlıkla soluk yoluna kaçarsa ağır bir yağ zatürresine yol açabiliyor. Derleme bunun tamamen önlenebilir bir tehlike olduğunu vurguluyor.' },

    { kind: 'yanilgi', baslik: '"Parafin şırıngayla ağza verilirse daha etkili olur" yanılgısı', metin: 'Etkisi değişmiyor, riski büyüyor. Kokusuz ve tatsız olan parafin, kedi yutkunmadan soluk yoluna kaçabiliyor ve ağır bir yağ zatürresine yol açabiliyor. Mamaya karıştırılarak verilmesi hem yeterli hem güvenli.' },

    { kind: 'baslik', metin: 'Taramak maltan önce gelir' },
    { kind: 'paragraf', metin: 'Cannon’a göre dökülen tüyü her gün tarayarak almak, kedinin yuttuğu tüy miktarını azaltmaya yardımcı olabiliyor. Özellikle uzun tüylü kedilerde tarama, maltan önce başvurulan yöntemdir. Ağır durumlarda tüylerin kısaltılması da tüy uzunluğunu sindirim sisteminin kaldırabileceği ölçüye indirerek yardımcı olabiliyor.' },
    { kind: 'paragraf', metin: 'Aynı derleme küçük öğünlerin mideden daha hızlı boşaldığını, bu nedenle günün farklı saatlerine dağılmış küçük ve sık öğünlerin mide hareketlerini iyileştirip tüy yumağını azaltabileceğini aktarıyor. Öğünlerin güne nasıl bölündüğü [[yavru-kedi-ne-kadar-mama-yemeli|yavru kedi ne kadar mama yemeli]] yazısında anlatılıyor.' },

    { kind: 'baslik', metin: 'Bu belirtilerde malt değil, hekim' },
    { kind: 'paragraf', metin: 'Kusmayla atılamayan bir tüy yumağı, Cannon’a göre ince bağırsağa geçip kısmi ya da tam tıkanmaya yol açabiliyor ya da yemek borusunda takılabiliyor; bu durum ciddi hastalığa, nadiren de ölüme neden olabiliyor. Cornell ise haftada birden sık kusan ya da şu belirtileri gösteren kedinin hemen veteriner hekim tarafından değerlendirilmesini öneriyor:' },
    { kind: 'liste', maddeler: [
      'Halsizlik ve güçsüzlük',
      'İştahta azalma',
      'Kusmukta kan',
      'Su içmede ya da idrar miktarında değişiklik',
      'Kusmayla birlikte ishal',
    ] },
    { kind: 'paragraf', metin: 'Kusmaya çalıştığı hâlde bir şey çıkaramayan, karnına dokunulmasından rahatsız olan kedi vakit kaybetmeden veteriner hekime ulaşılması gereken bir tablodadır. Kusmanın diğer nedenleri [[kedim-kusuyor|kedim kusuyor]] yazısında; tüyün bağırsağın sonuna kadar ilerleyip kabızlık yaptığı durumlar ise [[kedilerde-kabizlik|kedilerde kabızlık]] yazısında.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Sık tüy yumağı, tekrarlayan kusma ya da iştahsızlık görülen kedide nedeni veteriner hekim araştırır. Sıvı parafin şırıngayla kedinin ağzına verilmez.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Malt tüy yumağını önler', 'Tüyün geçişini kolaylaştırır, nedenini çözmez'],
      ['Her kedi tüy yumağı kusar', 'Kısa tüylü kedide sık tüy yumağı bir işaret olabilir'],
      ['Parafin şırıngayla verilir', 'Mamaya karıştırılır; ağza şırınga zatürre yapabilir'],
      ['Tüy yumağı mamaları kesin çözer', 'Etkinlikleri hakkında nesnel veri yok'],
      ['Tüy yumağı zararsızdır', 'Atılamazsa bağırsak tıkanmasına yol açabilir'],
    ] },
  ],
  kontrolListesi: [
    'Kedi düzenli taranıyor mu?',
    'Tüy yumağı sıklığı not ediliyor mu?',
    'Pire kontrolü güncel mi?',
    'Kaşıntı ya da tüy dökülmesi var mı?',
    'Öğünler küçük ve sık mı?',
    'Malt şırıngayla verilmiyor mu?',
  ],
  sss: [
    { soru: 'Kedilerde malt ne işe yarar?', cevap: 'Malt, kedinin yuttuğu tüylerin mideden bağırsağa geçmesini kolaylaştıran kayganlaştırıcı bir macun. Cannon’ın derlemesine göre bu tür kayganlaştırıcılar tüyün dışkıyla atılmasına, midede yumak olmamasına yardımcı olabiliyor. Yutulan tüy miktarını azaltmıyor ve etkinliğini ölçen bir çalışma bulunmuyor.' },
    { soru: 'Kediye malt ne sıklıkla verilir?', cevap: 'Kaynaklar belirli bir sıklık vermiyor; miktar ve sıklık ürün etiketine ve veteriner hekimin önerisine göre belirleniyor. Sık ihtiyaç duyulan bir kedide asıl yapılması gereken, fazla tüy yutmaya yol açan kaşıntı, pire ya da sindirim sorununun araştırılması ve düzenli tarama.' },
    { soru: 'Kedi ne sıklıkla tüy yumağı kusabilir?', cevap: 'Cornell’e göre bir kedinin haftada ya da iki haftada bir tüy yumağı çıkarması kalıcı bir sorun olmadan görülebiliyor, ama haftada birden sık kusma hekim değerlendirmesi gerektiriyor. Cannon ise kısa tüylü kedide sık tüy yumağını çoğu zaman altta yatan bir sorunun işareti sayıyor.' },
    { soru: 'Tüy yumağı kediye zarar verir mi?', cevap: 'Çoğu zaman kusmayla atılıyor, ama atılamayan tüy yumağı ince bağırsağa geçip tıkanmaya yol açabiliyor ya da yemek borusunda takılabiliyor. Cannon’a göre bu durum ciddi hastalığa, nadiren de ölüme neden olabiliyor. Kusmaya çalışıp bir şey çıkaramayan kedi hemen hekim görmeli.' },
    { soru: 'Malt yerine ne yapılabilir?', cevap: 'Dökülen tüyün her gün taranması yutulan tüyü azaltmaya yardımcı olabiliyor ve özellikle uzun tüylü kedilerde ilk başvurulan yöntem. Küçük ve sık öğünler midenin daha hızlı boşalmasına yardım edebiliyor. Kaşıntı, pire ya da mamaya tahammülsüzlük varsa bunların tedavisi tüy yumağını da azaltıyor.' },
    { soru: 'Sıvı parafin kediye nasıl verilir?', cevap: 'Cannon’ın derlemesine göre sıvı parafin tatsız ve kokusuz olduğu için mamaya karıştırılarak çoğu kediye güvenle verilebiliyor. Şırıngayla kedinin ağzına verilmemeli, çünkü soluk yoluna kaçarsa ağır bir yağ zatürresine yol açabiliyor. Miktarı veteriner hekim belirliyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'Oxford Cat Clinic, Oxford, Birleşik Krallık',
      yazarlar: 'Cannon M',
      baslik: 'Hair balls in cats: a normal nuisance or a sign that something is wrong?',
      dergi: 'Journal of Feline Medicine and Surgery',
      yil: 2013,
      kunye: '15(1):21-29',
      doi: '10.1177/1098612X12470342',
      adres: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10816490/',
    },
    {
      kurum: 'Cornell University College of Veterinary Medicine, Cornell Feline Health Center',
      baslik: 'Vomiting',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/vomiting',
    },
  ],
};
