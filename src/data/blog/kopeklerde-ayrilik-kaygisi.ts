import type { BlogYazi } from './types';

/**
 * KOPEK kategorisi, davranis konusu. Dayanak Ballantyne 2018 (Veterinary
 * Clinics of North America: Small Animal Practice): ayrilik kaygisi ve ses
 * korkusunun en yaygin refah sorunlarindan ikisi oldugu, cogu kopegin tedavi
 * almadigi, tanida davranis gecmisi ve VIDEO kaydinin yardimci oldugu.
 * Sayisal oran verilmiyor cunku kaynak ozetinde oran yok.
 */
export const kopeklerdeAyrilikKaygisi: BlogYazi = {
  slug: 'kopeklerde-ayrilik-kaygisi',
  baslik: 'Köpeklerde Ayrılık Kaygısı Nasıl Anlaşılır?',
  ozet: 'Yalnız kalınca havlayan her köpekte kaygı yok, kaygısı olan her köpek de havlamıyor. Ayrımı yapan şey davranışın kendisi değil, ne zaman başladığı.',
  kategori: 'Köpek',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Evden çıkınca havlayan, kapıyı tırmalayan, eşyaya zarar veren bir köpek çoğu zaman “yaramazlık yapıyor” diye anlatılıyor. Oysa bu tablonun bir kısmı **yaramazlık değil kaygı**, ve ikisi farklı şeyler olduğu için çözümleri de farklı.' },
    { kind: 'paragraf', metin: 'Ayrılık kaygısı, köpeğin yalnız kaldığında yaşadığı gerçek bir sıkıntı hâli. Illinois Üniversitesi Veteriner Fakültesi’nden Ballantyne’in derlemesi, ayrılık kaygısı ile ses korkusunu **ev köpeklerini etkileyen en yaygın refah sorunlarından ikisi** olarak tanımlıyor ve yaygınlığına rağmen etkilenen köpeklerin çoğunun tedavi almadığını belirtiyor.' },

    { kind: 'baslik', metin: 'Belirtiler tek başına yeterli değil' },
    { kind: 'paragraf', metin: 'Ayrılık kaygısında görülen davranışların hepsi, kaygısı olmayan köpeklerde de görülebiliyor. Ayırt edici olan davranışın türü değil, **ne zaman ortaya çıktığı**.' },
    { kind: 'liste', maddeler: [
      'Yalnız kalınca başlıyor, siz varken olmuyor',
      'Genellikle siz çıktıktan sonraki ilk yarım saatte yoğunlaşıyor',
      'Kapı, pencere gibi çıkış noktalarına yöneliyor',
      'Ev eğitimi olan köpekte yalnızken tuvalet kazası oluyor',
      'Salya, titreme, aşırı soluma gibi bedensel belirtiler eşlik ediyor',
      'Siz hazırlanırken huzursuzluk başlıyor',
    ] },
    { kind: 'paragraf', metin: 'Son madde önemli: anahtarın sesi, ayakkabı giymek, çanta almak gibi hazırlık işaretlerinde başlayan huzursuzluk, davranışın sıkılmayla değil **ayrılık beklentisiyle** ilgili olduğunu gösteriyor.' },

    { kind: 'yanilgi', baslik: '"İnat ediyor, kızdığı için yapıyor" yanılgısı', metin: 'Köpekler kızgınlıklarını eşyaya zarar vererek göstermiyor. Yalnızken oluşan hasar çoğu zaman panik hâlinde çıkış aramanın sonucu; kapı kenarları ve pencere altları bu yüzden en sık zarar gören yerler. Ceza bu tabloyu düzeltmiyor, çünkü davranışın kaynağı korku.' },

    { kind: 'baslik', metin: 'Tanıda video işe yarıyor' },
    { kind: 'paragraf', metin: 'Ballantyne’in derlemesi, tanıyı doğrulamada **davranış geçmişi ve video kaydının** yardımcı olduğunu belirtiyor. Sebep pratik: siz evdeyken köpek bu davranışları göstermiyor, dolayısıyla hekimin muayenede görebileceği bir şey yok.' },
    { kind: 'paragraf', metin: 'Kayıt alırken bakılan şeyler:' },
    { kind: 'liste', maddeler: [
      'Siz çıktıktan sonra davranış kaç dakikada başlıyor',
      'Ne kadar sürüyor, kendiliğinden azalıyor mu',
      'Köpek nerede duruyor: kapı önü mü, yatağı mı',
      'Ses, hareket ve bedensel belirtiler birlikte mi',
      'Siz döndüğünüzde tepki nasıl',
    ] },
    { kind: 'paragraf', metin: 'Bu beş başlığın cevabı, tabloyu sıkılmadan, ses korkusundan ve kapalı alan sıkıntısından ayırmaya yarıyor. Aynı derleme bu üçünün birbirine ve başka davranış sorunlarına **eşlik edebileceğini** de söylüyor; yani bir köpekte birden fazlası aynı anda olabiliyor.' },

    { kind: 'yanilgi', baslik: '"Yeni bir köpek alırsam geçer" yanılgısı', metin: 'Ayrılık kaygısı çoğu zaman genel bir yalnızlık meselesi değil, kişiye bağlı bir kaygı. İkinci bir hayvan bazı köpeklerde hiçbir şey değiştirmiyor, bazılarında ise iki hayvanın birden etkilendiği bir tabloya dönüşebiliyor. Karar, mevcut köpeğin durumu değerlendirilmeden verilmiyor.' },

    { kind: 'baslik', metin: 'Tedavi tek bir şey değil' },
    { kind: 'paragraf', metin: 'Derlemenin önerdiği yaklaşım iki bacaklı: **davranış değişikliği çalışması ve gerektiğinde ilaç**. İkisi birlikte önerildiği için, "önce ilaç deneyelim" ya da "ilaç olmadan halledelim" yaklaşımlarının ikisi de eksik kalıyor.' },
    { kind: 'paragraf', metin: 'Davranış tarafında yapılan şey, yalnız kalmayı köpeğin dayanabileceği sürelere bölmek ve o süreyi kademeli uzatmak. Hazırlık işaretlerinin anlamını değiştirmek de bu çalışmanın parçası: anahtarı alıp oturmak, ayakkabı giyip çıkmamak gibi.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Ayrılık kaygısı tanısı ve ilaç kararı, köpeği gören veteriner hekime aittir. İnsanlar için üretilmiş sakinleştiriciler köpeklerde kullanılmaz.' },

    { kind: 'baslik', metin: 'Gidiş ve dönüş anları önemli' },
    { kind: 'paragraf', metin: 'Ayrılık kaygısı olan bir evde çoğu zaman iki an abartılı yaşanıyor: çıkarken uzun bir veda, dönerken coşkulu bir karşılama. İkisi de iyi niyetle yapılıyor ama ikisi de ayrılığı köpeğin gözünde büyük bir olay hâline getiriyor.' },
    { kind: 'paragraf', metin: 'Önerilen yaklaşım tersini yapmak: çıkış ve dönüş sıradanlaştırılıyor. Çıkarken uzun uzun konuşulmuyor, dönerken kapıda karşılama töreni yapılmıyor; köpek sakinleştikten sonra ilgi gösteriliyor. Amaç, gitmenin ve gelmenin gündelik bir şey olduğunu göstermek.' },
    { kind: 'paragraf', metin: 'Bu tek başına bir tedavi değil, davranış çalışmasının küçük ama sürekli bir parçası. Ev içindeki herkesin aynı şeyi yapması gerekiyor; bir kişi eski alışkanlığı sürdürdüğünde çalışma geriliyor.' },

    { kind: 'baslik', metin: 'Yalnızlık süresi kademeli uzatılıyor' },
    { kind: 'paragraf', metin: 'Davranış çalışmasının çekirdeği şu: köpeğin **sıkıntı yaşamadan** kalabildiği süreyi bulmak ve o süreyi çok küçük adımlarla uzatmak. Buradaki anahtar kelime "sıkıntı yaşamadan". Köpek panikleyene kadar bekleyip sonra dönmek, öğrenmeyi tersine çeviriyor.' },
    { kind: 'paragraf', metin: 'Pratikte şöyle işliyor: önce kapıya gidip dönmek, sonra kapıyı açıp kapatmak, sonra birkaç saniye dışarıda kalmak. Her adım köpek sakin kaldığı sürece bir sonrakine geçiyor; huzursuzluk başlarsa bir önceki adıma dönülüyor.' },
    { kind: 'paragraf', metin: 'Bu süreç haftalar sürebiliyor ve düz bir çizgi izlemiyor. İyi giden bir haftanın ardından geriye düşüş olabiliyor; bu, çalışmanın işe yaramadığı anlamına gelmiyor.' },

    { kind: 'baslik', metin: 'Önce tıbbi sebepler eleniyor' },
    { kind: 'paragraf', metin: 'Yalnızken tuvalet kazası, huzursuzluk ve aşırı soluma davranışsal olmayabilir. Ağrı, idrar yolu sorunları, yaşlı köpeklerde bilişsel değişiklikler benzer tabloyu üretebiliyor. Bu yüzden davranış çalışmasına başlamadan önce genel bir muayene isteniyor.' },
    { kind: 'paragraf', metin: 'Yaşa bağlı değişiklikler için [[kopekler-kac-yil-yasar|köpeklerin yaşam süresi]] yazısındaki yaşlılık başlığı da yardımcı olabilir.' },
    { kind: 'paragraf', metin: 'Muayenede sorulan sorular genellikle şunlar: davranış ne zaman başladı, hayatta o dönemde ne değişti, köpek yalnızken tuvalet kazası yapıyor mu, gece de huzursuz mu, iştah ve su tüketiminde değişiklik var mı. Bu soruların cevabı, tabloyu davranışsal olan ve olmayan diye ayırmaya yarıyor.' },
    { kind: 'paragraf', metin: 'Ev değişikliği, ailede yeni bir kişi ya da hayvan, çalışma düzeninin değişmesi ve taşınma sık karşılaşılan tetikleyiciler. Bunlar tek başına kaygıyı yaratmıyor ama yatkın bir köpekte tabloyu görünür hâle getirebiliyor. Bu yüzden hekim, davranışın başladığı döneme denk gelen değişiklikleri soruyor.' },
    { kind: 'paragraf', metin: 'Süreç uzun olduğu için ilerlemeyi yazmak gerekiyor: hangi hafta kaç dakika dayanabildi, hangi gün geriledi. Veterito’da bu notları hayvanın kaydına ekleyebilirsiniz.' },
  ],
  kontrolListesi: [
    'Yalnızken kayıt alın, ne zaman başladı',
    'Hazırlanırken huzursuzluk var mı',
    'Hasar çıkış noktalarında mı, bakın',
    'Önce genel muayene isteyin',
    'Ceza yöntemlerini bırakın',
    'İlerlemeyi haftalık not edin',
  ],
  sss: [
    { soru: 'Havlayan her köpekte ayrılık kaygısı var mı?', cevap: 'Hayır, aynı davranışlar kaygısı olmayan köpeklerde de görülebiliyor. Ayırt edici olan davranışın türü değil zamanlaması: yalnız kalınca başlaması, siz varken olmaması ve genellikle siz çıktıktan sonraki ilk yarım saatte yoğunlaşması.' },
    { soru: 'Neden video isteniyor?', cevap: 'Siz evdeyken davranış ortaya çıkmıyor, dolayısıyla hekimin muayenede görebileceği bir şey yok. Kaynak derleme, tanıyı doğrulamada davranış geçmişi ve video kaydının yardımcı olduğunu belirtiyor. Kayıt ayrıca davranışın kaç dakikada başladığını ve ne kadar sürdüğünü gösteriyor.' },
    { soru: 'İlaç şart mı?', cevap: 'Kararı köpeği gören hekim veriyor. Kaynak derlemede önerilen yaklaşım, davranış değişikliği çalışması ile gerektiğinde ilacın birlikte kullanılması. Bu yüzden "önce ilaç deneyelim" ya da "ilaçsız halledelim" yaklaşımlarının ikisi de eksik kalıyor.' },
    { soru: 'Ceza işe yarar mı?', cevap: 'Yaramıyor ve zarar veriyor. Davranışın kaynağı korku olduğu için ceza kaygıyı artırıyor ve tabloyu ağırlaştırabiliyor. Ayrıca köpek cezayı siz döndüğünüzde yaşadığı için, dönüşünüzü de kaygı verici bir olayla ilişkilendirmeye başlıyor.' },
    { soru: 'İkinci bir köpek çözüm olur mu?', cevap: 'Her zaman değil. Ayrılık kaygısı çoğu zaman genel bir yalnızlık meselesi değil, belirli bir kişiye bağlı bir kaygı. İkinci hayvan bazı köpeklerde hiçbir şey değiştirmiyor, bazılarında ise iki hayvanın birden etkilendiği bir tabloya dönüşebiliyor.' },
    { soru: 'Ne kadar sürede düzeliyor?', cevap: 'Değişiyor ve buraya bir süre yazmak doğru olmaz. İlerleme kademeli ölçülüyor: köpeğin sıkıntı yaşamadan yalnız kalabildiği sürenin uzayıp uzamadığına bakılıyor. Süreç haftalar alabiliyor ve düz bir çizgi izlemiyor; iyi giden bir haftanın ardından geriye düşüş olabiliyor.' },
    { soru: 'Çıkarken vedalaşmak zararlı mı?', cevap: 'Uzun veda ve coşkulu karşılama, ayrılığı köpeğin gözünde büyük bir olay hâline getiriyor. Önerilen yaklaşım çıkış ve dönüşü sıradanlaştırmak: kapıda tören yapmadan çıkmak, dönünce köpek sakinleştikten sonra ilgi göstermek. Evdeki herkesin aynı şeyi yapması gerekiyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'University of Illinois College of Veterinary Medicine — Veterinary Clinical Medicine',
      yazarlar: 'Ballantyne KC',
      baslik: 'Separation, Confinement, or Noises: What Is Scaring That Dog?',
      dergi: 'Veterinary Clinics of North America: Small Animal Practice',
      yil: 2018,
      kunye: '48(3):367-386',
      doi: '10.1016/j.cvsm.2017.12.005',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/29397241/',
    },
  ],
};
