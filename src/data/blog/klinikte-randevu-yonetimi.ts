import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI kategorisinin ilk yazisi.
 *
 * ⚠️ Bu yazi TIBBI IDDIA TASIMIYOR; konusu klinigin is akisi. `kaynak-denetimi`
 * bu kategoride hakemli kaynak aramiyor, cunku brief'in kurali "saglik icerikli
 * her yazida" diyor. Zorlanan kaynak yanlis kaynaktir.
 *
 * ⚠️ Yaziya SAYI konmadi: doluluk oranlari, gelmeyen hasta yuzdeleri ve gelir
 * etkisi gibi rakamlarin dogrulanmis bir karsiligi elimizde yok.
 */
export const klinikteRandevuYonetimi: BlogYazi = {
  slug: 'klinikte-randevu-yonetimi',
  baslik: 'Veteriner Kliniğinde Randevu Yönetimi Nasıl Kurulur?',
  ozet: 'Randevu defteri dolu görünüp gün boşa geçiyorsa sorun talepte değil akışta. Klinikte randevu düzenini kurmanın adımları ve en sık yapılan hatalar.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-24',
  bloklar: [
    { kind: 'paragraf', metin: 'Randevu yönetimi bir takvim doldurma işi değil, **kliniğin gününü tahmin edilebilir kılma** işi. Defter dolu görünüp gün dağınık geçiyorsa sorun genellikle talepte değil, randevunun nasıl alındığında ve nasıl hatırlatıldığında.' },
    { kind: 'paragraf', metin: 'Bu yazı randevu akışını dört parçaya ayırıyor: talebin nereden geldiği, süre ayrımı, hatırlatma ve gelmeyen hasta. Dördü ayrı ayrı çözülüyor; hepsini tek bir yazılıma yükleyip beklemek işe yaramıyor.' },

    { kind: 'baslik', metin: 'Talep tek kanaldan gelmiyorsa takip edilemiyor' },
    { kind: 'paragraf', metin: 'Çoğu klinikte randevu telefonla, mesajla, sosyal medyadan ve kapıdan gelen istekle karışık şekilde alınıyor. Her kanalın kendi defteri oluyor ve gün içinde hangisinin güncel olduğu belirsizleşiyor. Aynı saate iki hayvan yazılması bu yüzden oluyor, dikkatsizlikten değil.' },
    { kind: 'paragraf', metin: 'İlk adım kanalları azaltmak değil, hepsini **tek bir takvimde toplamak**. Telefonla gelen istek de aynı takvime düşüyorsa, çakışma ihtimali kendiliğinden kalkıyor.' },

    { kind: 'yanilgi', baslik: '"Telefon daha kişisel, bırakmayalım" yanılgısı', metin: 'Sorun telefonun kendisi değil, telefonla alınan randevunun kayda geçmemesi. Telefon açık kalabilir; kaydın nereye düştüğü değişiyor. Bir yerde kayıt, başka yerde defter olduğunda ikisi er ya da geç ayrışıyor.' },

    { kind: 'baslik', metin: 'Her randevu aynı süreyi almıyor' },
    { kind: 'paragraf', metin: 'Aşı randevusuyla ilk muayene aynı kutuya sığmıyor. Takvim tek tip bloklarla kurulduğunda ya kısa işlemler boşluk bırakıyor ya da uzun işlemler günü kaydırıyor. Kayan gün, sonraki bütün randevuların gecikmesi demek.' },
    { kind: 'tablo', basliklar: ['Randevu türü', 'Neye ihtiyacı var', 'Sık yapılan hata'], satirlar: [
      ['Aşı ve rutin', 'Kısa, öngörülebilir blok', 'Muayene bloğuyla aynı süre verilmesi'],
      ['İlk muayene', 'Uzun blok, kayıt açma zamanı', 'Araya sıkıştırılması'],
      ['Kontrol', 'Orta blok, geçmişe bakma', 'Geçmişin ziyaret sırasında aranması'],
      ['Acil', 'Takvimde bilinçli boşluk', 'Boşluk bırakılmaması, günün kayması'],
    ] },
    { kind: 'paragraf', metin: 'Acil için gün içinde bilinçli boşluk bırakmak, doluluk kaybı gibi görünüyor ama tam tersi işe yarıyor: acil geldiğinde başka bir randevu iptal edilmiyor.' },

    { kind: 'baslik', metin: 'Hatırlatma, gelmeyen hastanın tek gerçek çaresi' },
    { kind: 'paragraf', metin: 'Gelmeyen hasta çoğu zaman vazgeçmiş değil, unutmuş oluyor. Aşı tekrarı gibi aylar sonrasına verilen randevularda unutma oranı doğal olarak yükseliyor. Hatırlatma bu yüzden bir nezaket değil, akışın parçası.' },
    { kind: 'liste', maddeler: [
      'Hatırlatma randevudan bir gün önce, gerekiyorsa aynı sabah tekrar',
      'Mesajda tarih, saat ve hayvanın adı geçmeli; genel metin fark edilmiyor',
      'İptal yolu açık olmalı, iptal edilen saat başkasına verilebiliyor',
      'Aşı ve parazit tekrarı, randevudan ayrı bir hatırlatma zinciri',
      'Hatırlatma gönderimi rızaya bağlı; istemeyene gönderilmiyor',
    ] },
    { kind: 'paragraf', metin: 'İptalin kolay olması sezgiye aykırı gelebiliyor ama iptal edilen randevu, gelinmeyen randevudan iyidir: saat boşa gitmiyor, başka bir hastaya açılıyor.' },

    { kind: 'yanilgi', baslik: '"Hatırlatma rahatsız eder" yanılgısı', metin: 'Rahatsız eden şey hatırlatmanın kendisi değil, sıklığı ve içeriği. Tarih, saat ve hayvanın adını taşıyan tek bir mesaj bilgi veriyor; genel içerikli sık mesajlar ise okunmadan siliniyor ve gerçek hatırlatmanın da fark edilmemesine yol açıyor.' },

    { kind: 'baslik', metin: 'Randevu ile hasta kaydı ayrı durursa iş iki kere yapılıyor' },
    { kind: 'paragraf', metin: 'Randevu bir takvimde, hasta geçmişi başka bir defterde duruyorsa, hayvan içeri girdiğinde geçmiş yeniden aranıyor. Bu, muayene süresinden çalınan bir zaman ve her ziyarette tekrarlanıyor.' },
    { kind: 'paragraf', metin: 'Randevuya tıklandığında hayvanın kaydına ulaşılabiliyorsa hazırlık ziyaret öncesinde bitiyor. Hangi aşı ne zaman yapıldı, son kilo neydi, hangi ilaç veriliyordu; bunlar hasta gelmeden görülebiliyorsa muayene kısalıyor ve kalitesi artıyor.' },

    { kind: 'baslik', metin: 'Ekip büyüdükçe yetki de ayrışıyor' },
    { kind: 'paragraf', metin: 'Tek hekimli klinikte randevu düzeni kafada durabiliyor. İkinci hekim ya da yardımcı personel geldiğinde bu mümkün olmuyor: kimin hangi randevuyu görebildiği, kimin iptal edebildiği ve kimin hasta kaydına erişebildiği tanımlanmak zorunda.' },
    { kind: 'paragraf', metin: 'Yetki ayrımı bir güvensizlik göstergesi değil; kayıtların kimin tarafından değiştirildiğinin izlenebilmesi, hem hasta güvenliği hem ekip huzuru için gerekli.' },

    { kind: 'baslik', metin: 'Ölçmediğiniz şeyi düzeltemiyorsunuz' },
    { kind: 'paragraf', metin: 'Randevu düzeninin çalışıp çalışmadığı hisle değerlendirilemiyor. "Bugün yoğunduk" ile "bugün üç randevu boşa gitti" farklı şeyler ve ikincisi ancak kayıt tutulduğunda görülüyor. En az üç şeyin sayısı takip edilebilir: alınan randevu, gelinmeyen randevu ve iptal edilip yeniden doldurulan saat.' },
    { kind: 'paragraf', metin: 'Bu üç sayı bir arada okunduğunda sorun nerede olduğu ortaya çıkıyor. Gelinmeyen çoksa hatırlatmaya bakılıyor. İptal çok ama yeniden doldurma az ise, boşalan saatin duyurulma yolu eksik demektir. Alınan randevu azsa sorun akışta değil, talebin kliniğe ulaşmasında.' },
    { kind: 'altBaslik', metin: 'Sezonluk yoğunluk önceden görülebiliyor' },
    { kind: 'paragraf', metin: 'Aşı tekrarları belirli aylarda kümeleniyor, çünkü ilk aşılar da belirli aylarda yapılmış oluyor. Kayıt tutuluyorsa bu kümelenme önceden görülüyor ve o haftalara ek kapasite ayrılabiliyor. Görülmüyorsa aynı yoğunluk her yıl sürpriz gibi yaşanıyor.' },
    { kind: 'paragraf', metin: 'Aynı şey personel izinleri için de geçerli. İzin planı, randevu yoğunluğunun tahmin edilebildiği bir takvimde çok daha kolay kuruluyor.' },

    { kind: 'altBaslik', metin: 'Hatırlatma izni bir kere alınır, her seferinde değil' },
    { kind: 'paragraf', metin: 'Hatırlatma göndermek müşterinin rızasına bağlı ve bu rıza kayıt açılırken bir kez alınıp saklanıyor. Her randevuda yeniden sormak hem işi yavaşlatıyor hem de kaydın nerede tutulduğu sorusunu yanıtsız bırakıyor. Rızayı geri çekmek isteyen için de tek adımlık bir yol bulunmalı.' },
    { kind: 'paragraf', metin: 'Uygulamada iki ayrı izin var: randevu hatırlatması ve duyuru. İlki hizmetin parçası, ikincisi pazarlama. Bunları tek bir onaya bağlamak, duyuru istemeyen müşterinin randevu hatırlatmasından da çıkmasına yol açıyor; ikisi ayrı tutulduğunda kimse gereksiz yere kapsam dışında kalmıyor.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Takvim dolu ise iyi gidiyor', 'Dolu takvim kayan günü gizleyebiliyor, süre ayrımı da gerekiyor'],
      ['Gelmeyen hasta ilgisiz', 'Çoğu unutmuş oluyor, hatırlatma sorunu büyük ölçüde çözüyor'],
      ['İptali zorlaştırmak gelmeyi artırır', 'Zorlaşan iptal, gelinmeyen randevuya dönüşüyor'],
      ['Acil için boşluk bırakmak kayıp', 'Boşluk bırakılmazsa acil başka bir randevuyu iptal ettiriyor'],
      ['Kayıt ve randevu ayrı dursa olur', 'Ayrı durunca geçmiş her ziyarette yeniden aranıyor'],
    ] },
    { kind: 'baslik', metin: 'Hatırlatmanın konusu dönüşü değiştiriyor' },
    { kind: 'paragraf', metin: 'Hatırlatma göndermek tek başına bir sonuç vermiyor; neyin hatırlatıldığı da fark yaratıyor. Kanada’da bir klinik yönetim yazılımının hatırlatma kayıtlarını inceleyen çalışma, müşterilerin **aşı hatırlatmalarına, diğer hatırlatmaların tamamına göre yaklaşık üç kat daha az** yanıt verdiğini bulmuş. Karşılaştırılan diğer başlıklar diş işlemleri, laboratuvar testleri, kontrol muayeneleri ve kısırlaştırma.' },
    { kind: 'paragraf', metin: 'Çalışmanın önerisi, hatırlatma düzenini yalnız yıllık aşıya bağlamak yerine koruyucu hekimlik hizmetlerinin bütününe yaymak. Randevu takvimi açısından bunun anlamı şu: takvimi dolduran şey tek bir hatırlatma türü değil, düzenli bir bakım akışı.' },

    { kind: 'baslik', metin: 'Uzaktan görüşme talebi karşılıksız kalıyor' },
    { kind: 'paragraf', metin: 'Randevu düzeni kurulurken sorulan başlıklardan biri de uzaktan görüşme. 2.117 köpek ve kedi sahibiyle yapılan bir anket çalışması ilginç bir uyumsuzluk gösteriyor: sahipler uzaktan görüşmenin özellikle **kontrol randevularında** ve uzmana erişimde yararlı olabileceğini görüyor, ama fiilen kullanım çok düşük.' },
    { kind: 'paragraf', metin: 'Çalışmada köpek sahiplerinin **%12’si**, kedi sahiplerinin **%6’sı** daha önce uzaktan görüşme kullanmış; hiç kullanmamış olanların yaklaşık dörtte biri gelecekte kullanmaya istekli olduğunu belirtmiş. Aynı çalışma sahiplerin çoğunun bir şeyin gözden kaçma riskinin farkında olduğunu da aktarıyor.' },
    { kind: 'paragraf', metin: 'Klinik açısından buradaki bilgi şu: talep ile kullanım arasındaki fark, çoğu zaman isteksizlikten değil sunulmamasından kaynaklanıyor olabilir. Randevu türlerini tasarlarken kontrol görüşmelerinin nasıl yürütüleceği ayrı bir başlık olarak düşünülüyor.' },

    { kind: 'paragraf', metin: 'Kliniğe gelen tarafın bu akışı nasıl gördüğünü merak ediyorsanız [[veteriner-klinigi-nasil-secilir|veteriner kliniği nasıl seçilir]] yazısı aynı konuya hayvan sahibinin gözünden bakıyor.' },
  ],
  kontrolListesi: [
    'Bütün randevular tek takvimde mi?',
    'Süre ayrımı randevu türüne göre mi?',
    'Bir gün önce hatırlatma gidiyor mu?',
    'İptal yolu müşteriye açık mı?',
    'Acil için günde boşluk bırakılıyor mu?',
    'Randevudan hasta kaydına geçiliyor mu?',
  ],
  kaynaklar: [
    {
      kurum: 'University of Saskatchewan — Western College of Veterinary Medicine',
      yazarlar: 'Adams VJ, Waldner CL, Campbell JR',
      baslik: 'Analysis of a practice management computer software program for owner compliance with recall reminders',
      dergi: 'The Canadian Veterinary Journal',
      yil: 2006,
      kunye: '47(3):234-240',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/16604979/',
    },
    {
      kurum: 'University of Veterinary Medicine Vienna, University of Copenhagen ve University of Glasgow',
      yazarlar: 'Springer S, Lund TB, Corr SA, Sandøe P',
      baslik: 'Seeing the benefits, but not taking advantage of them: Dog and cat owners\' beliefs about veterinary telemedicine',
      dergi: 'Veterinary Record',
      yil: 2024,
      kunye: '194(5):e3312',
      doi: '10.1002/vetr.3312',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/37733831/',
    },
  ],
  sss: [
    { soru: 'Klinikte randevu düzeni nereden başlar?', cevap: 'Bütün talepleri tek takvimde toplamaktan başlar. Telefon, mesaj, sosyal medya ve kapıdan gelen istek ayrı defterlere düştüğünde hangisinin güncel olduğu belirsizleşiyor ve aynı saate iki hayvan yazılıyor. Kanalları azaltmak değil, hepsini aynı yere düşürmek gerekiyor.' },
    { soru: 'Gelmeyen hasta sorunu nasıl azaltılır?', cevap: 'Hatırlatma en belirleyici adım, çünkü gelmeyenlerin çoğu vazgeçmiş değil unutmuş oluyor. Bir gün önce gönderilen, tarih saat ve hayvanın adını taşıyan tek bir mesaj işe yarıyor. İptal yolunun açık olması da gerekiyor; iptal edilen saat başkasına verilebiliyor.' },
    { soru: 'Her randevuya aynı süre verilebilir mi?', cevap: 'Verilemez. Aşı randevusu ile ilk muayene aynı bloğa sığmıyor; tek tip blok ya kısa işlemlerde boşluk bırakıyor ya uzun işlemlerde günü kaydırıyor. Kayan gün, sonraki bütün randevuların gecikmesi demek.' },
    { soru: 'Acil hastalar için takvimde boşluk bırakmak kayıp mı?', cevap: 'Kayıp gibi görünüyor ama tersi çalışıyor. Boşluk bırakılmadığında acil geldiğinde başka bir randevu iptal ediliyor ve o hasta da mağdur oluyor. Bilinçli bırakılan boşluk, günün tahmin edilebilir kalmasını sağlıyor.' },
    { soru: 'Randevu ve hasta kaydı aynı yerde mi durmalı?', cevap: 'Ayrı durduklarında hayvan içeri girdiğinde geçmiş yeniden aranıyor ve bu her ziyarette tekrarlanıyor. Randevudan hasta kaydına geçilebiliyorsa hazırlık ziyaret öncesinde bitiyor; hangi aşı ne zaman yapıldı, son kilo neydi, hasta gelmeden görülüyor.' },
    { soru: 'Hangi hatırlatma daha çok dönüş getiriyor?', cevap: 'Bir klinik yönetim yazılımının kayıtlarını inceleyen çalışmada müşteriler, aşı hatırlatmalarına diğer hatırlatmaların tamamına göre yaklaşık üç kat daha az yanıt vermiş. Diş işlemleri, laboratuvar testleri, kontrol muayeneleri ve kısırlaştırma hatırlatmaları daha yüksek dönüş almış.' },
    { soru: 'Uzaktan görüşme randevu düzenine girmeli mi?', cevap: '2.117 hayvan sahibiyle yapılan bir ankette sahipler uzaktan görüşmeyi özellikle kontrol randevularında yararlı buluyor, ama köpek sahiplerinin yalnız %12’si, kedi sahiplerinin %6’sı kullanmış. Talep ile kullanım arasındaki fark, çoğu zaman sunulmamasından kaynaklanıyor olabilir.' },
    { soru: 'Ekipte yetki ayrımı gerekli mi?', cevap: 'Tek hekimli klinikte düzen kafada durabiliyor, ikinci kişi geldiğinde durmuyor. Kimin hangi randevuyu görebildiği, iptal edebildiği ve hasta kaydına erişebildiği tanımlanmalı. Yetki ayrımı güvensizlik değil, değişikliğin izlenebilmesi meselesi.' },
  ],
};
