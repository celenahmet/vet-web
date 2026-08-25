import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI kategorisi. Tibbi iddia tasimadigi icin hakemli kaynak
 * gerekmiyor; yazi da tibbi bir sey soylemiyor, SUREC anlatiyor.
 * ⚠️ Oran ve kazanc rakami VERILMIYOR ("hatirlatma gelirinizi %30 artirir"
 * turu cumleler dogrulanmadan yazilmaz).
 */
export const kliniklerdeAsiHatirlatma: BlogYazi = {
  slug: 'kliniklerde-asi-hatirlatma',
  baslik: 'Klinikte Aşı Hatırlatma Sistemi Nasıl Kurulur?',
  ozet: 'Hatırlatma göndermek kolay, doğru kişiye doğru zamanda göndermek zor. İşin tamamı mesajda değil, kaydın nasıl tutulduğunda.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-25',
  bloklar: [
    { kind: 'paragraf', metin: 'Aşı hatırlatması çoğu klinikte bir kişinin hafızasına ya da bir deftere bağlı çalışıyor. İşe yarıyor, ta ki o kişi izne çıkana kadar. Bu yazı, hatırlatmayı kişiye değil **sürece** bağlamanın nasıl kurulduğunu anlatıyor.' },
    { kind: 'paragraf', metin: 'Baştan söyleyelim: mesele mesaj göndermek değil. Mesaj, zincirin en sonundaki adım ve öncesindeki üç adım doğru değilse en iyi mesaj bile yanlış kişiye gidiyor.' },

    { kind: 'baslik', metin: 'Zincirin dört halkası' },
    { kind: 'tablo', basliklar: ['Adım', 'Ne yapılıyor', 'Aksarsa ne olur'], satirlar: [
      ['1. Kayıt', 'Yapılan aşı ve sonraki tarih yazılıyor', 'Hatırlatılacak bir şey yok'],
      ['2. Tarih', 'Sonraki tarih kayda işleniyor', 'Sistem kimin zamanı geldiğini bilmiyor'],
      ['3. İletişim', 'Sahibin güncel numarası duruyor', 'Mesaj gidiyor ama ulaşmıyor'],
      ['4. Gönderim', 'Zamanı gelen listeleniyor, mesaj çıkıyor', 'Liste var, kimse bakmıyor'],
    ] },
    { kind: 'paragraf', metin: 'Kliniklerin çoğu dördüncü adımı düşünüyor ve orada takılıyor. Oysa gerçek sorun genellikle ikinci adımda: aşı yapılıyor, **sonraki tarih kayda yazılmıyor**. Yazılmayan tarih hatırlatılamıyor.' },

    { kind: 'baslik', metin: 'Sonraki tarihi aynı anda yazmak' },
    { kind: 'paragraf', metin: 'En etkili tek değişiklik bu: aşı kaydı girilirken sonraki tarihin de aynı ekranda, aynı anda girilmesi. Sonraya bırakılan hiçbir tarih girilmiyor; bu bir disiplin meselesi değil, iş akışı meselesi.' },
    { kind: 'paragraf', metin: 'Pratikte kural şöyle konuyor: **sonraki tarih girilmeden kayıt kapanmıyor.** Gerekmiyorsa "yok" işaretleniyor, ama boş bırakılmıyor. Boş bırakılan alan, sonradan doldurulmuyor.' },

    { kind: 'yanilgi', baslik: '"Programa geçince kendiliğinden olur" yanılgısı', metin: 'Yazılım, girilmeyen tarihi hatırlatamıyor. Program almak zincirin dördüncü halkasını çözüyor, ikinci halkayı çözmüyor. Kâğıt defterle düzgün tutulan kayıt, yazılıma düzensiz girilen kayıttan daha iyi çalışıyor.' },

    { kind: 'baslik', metin: 'Kime, ne zaman, kaç kez' },
    { kind: 'paragraf', metin: 'Hatırlatmanın dozu da bir karar. Az gönderim işe yaramıyor, çok gönderim rahatsız ediyor ve klinik "sürekli mesaj atan yer" hâline geliyor.' },
    { kind: 'liste', maddeler: [
      'Tek bir hatırlatma yeterli olmuyor, ikiden fazlası rahatsız ediyor',
      'Aynı hayvan için aynı hafta içinde tekrar gönderilmiyor',
      'Birden fazla hayvanı olan sahibe ayrı ayrı mesaj gitmiyor',
      'Cevap verene bir daha aynı hatırlatma gitmiyor',
      'Vefat eden hayvanın kaydı kapatılıyor',
    ] },
    { kind: 'paragraf', metin: 'Son madde en çok zarar veren yer. Vefat etmiş bir hayvan için aşı hatırlatması göndermek, o aileyle ilişkiyi bitiren bir hata ve tamamen kayıt hijyeniyle önlenebiliyor.' },

    { kind: 'baslik', metin: 'Mesajın kendisi' },
    { kind: 'paragraf', metin: 'Hatırlatma metni kısa ve tek bir iş yapmalı. İçinde bulunması gerekenler:' },
    { kind: 'liste', maddeler: [
      'Hayvanın adı: "Pati" demek "hayvanınız" demekten daha etkili',
      'Ne zamanı geldiği: aşı mı, parazit mi, kontrol mü',
      'Kliniğin adı ve ulaşılabilecek numara',
      'Randevu için ne yapılacağı, tek cümleyle',
    ] },
    { kind: 'paragraf', metin: 'İçinde olmaması gerekenler de var: tıbbi ayrıntı, uzun açıklama ve baskı kuran ifadeler. Hatırlatma bir bilgi, bir satış mesajı değil.' },
    { kind: 'paragraf', metin: 'Basit yazmanın bir dayanağı da var. Veteriner hekimlerin hasta sahiplerine verdiği bilgilendirme metinlerinin okunabilirliğini inceleyen bir çalışma, Amerikan Ulusal Sağlık Enstitüleri ve Amerikan Tabipler Birliği’nin sağlık bilgisi metinleri için **dördüncü ile altıncı sınıf düzeyinde** okunabilirlik önerdiğini aktarıyor. Aynı çalışma, hedef kitlenin anlamadığı bilgilendirme metinlerinin istenmeyen sonuçlar doğurabileceğini belirtiyor.' },
    { kind: 'paragraf', metin: 'Kısacası mesajı sadeleştirmek üslup tercihi değil, ulaşma meselesi. Anlaşılmayan bir hatırlatma, gönderilmemiş bir hatırlatmayla aynı sonucu veriyor.' },

    { kind: 'yanilgi', baslik: '"Ne kadar çok mesaj, o kadar çok randevu" yanılgısı', metin: 'Sık gönderim kısa vadede birkaç randevu getirse de, sahiplerin bildirimleri kapatmasına ve numarayı engellemesine yol açıyor. Kapatılan bir kanal geri açılmıyor; yani kısa vadeli kazanç, uzun vadeli erişimi tüketiyor.' },

    { kind: 'baslik', metin: 'Kim gönderiyor, ne zaman' },
    { kind: 'paragraf', metin: 'Hatırlatmanın kime ait bir iş olduğu belirlenmemişse, herkesin işi olan hiç kimsenin işi olmuyor. Küçük kliniklerde bu genellikle bir kişiye veriliyor; sorun o kişi izne çıktığında ya da işten ayrıldığında ortaya çıkıyor.' },
    { kind: 'paragraf', metin: 'Daha dayanıklı düzen şöyle kuruluyor: gönderim belirli bir güne ve saate bağlanıyor, o gün kim çalışıyorsa listeyi o açıyor. Kişiye değil takvime bağlanan iş, devir teslimde kaybolmuyor.' },
    { kind: 'liste', maddeler: [
      'Gönderim günü ve saati sabitlenir',
      'Listeyi kimin açacağı vardiyaya bağlanır',
      'Gönderilenler işaretlenir, iki kez gitmez',
      'İzin ve devirde iş listeyle birlikte aktarılır',
      'Kimse bakmadığında uyaran bir işaret bırakılır',
    ] },
    { kind: 'paragraf', metin: 'Son madde basit ama etkili: liste açılmadığında görünür bir iz kalması, aksamayı aynı hafta içinde fark ettiriyor. Aylar sonra fark edilen bir aksama, kayıp müşteri demek.' },

    { kind: 'baslik', metin: 'Hangi kayıtlar hatırlatmaya girmiyor' },
    { kind: 'paragraf', metin: 'Gönderim listesi ham hâliyle kullanılmıyor; içinden çıkarılması gereken kayıtlar var. Bunlar temizlenmediğinde hatırlatma sistemi yalnız etkisiz kalmıyor, zarar veriyor.' },
    { kind: 'tablo', basliklar: ['Kayıt', 'Neden çıkarılıyor'], satirlar: [
      ['Vefat eden hayvan', 'Aileyle ilişkiyi bitiren bir hata'],
      ['Başka kliniğe geçen müşteri', 'Rahatsız edici, dönüş getirmiyor'],
      ['Ulaşılamayan numara', 'Liste gerçeği göstermiyor'],
      ['Sahiplendirilen hayvan', 'Kayıt eski sahipte kalmış oluyor'],
      ['Aynı sahibin ikinci hayvanı', 'Ayrı ayrı mesaj gitmemeli'],
    ] },
    { kind: 'paragraf', metin: 'Bu temizlik bir kez yapılıp bırakılan bir iş değil. Her ziyarette iletişim bilgisinin teyit edilmesi, listeyi kendiliğinden güncel tutuyor; sonradan toplu temizlik yapmak hem zor hem eksik oluyor.' },

    { kind: 'baslik', metin: 'Ölçülmezse iyileşmiyor' },
    { kind: 'paragraf', metin: 'Sistem kurulduktan sonra bakılacak birkaç şey var: hatırlatma gönderilen kaç kişi randevuya döndü, hangi aşamada kopuyor, hangi mesaj hiç ulaşmıyor. Ulaşmayan mesajlar genellikle eski numaraları işaret ediyor ve o kayıtların temizlenmesi gerekiyor.' },
    { kind: 'paragraf', metin: 'Burada bir uyarı: dönüş oranı için internette dolaşan hazır rakamlar kendi kliniğiniz için geçerli değil. Kendi sayınızı ölçün; başkasının oranı hedef olarak kullanılmıyor.' },
    { kind: 'paragraf', metin: 'Randevu tarafının nasıl kurulduğu için [[klinikte-randevu-yonetimi|klinikte randevu yönetimi]] yazısına bakabilirsiniz; hatırlatma ile randevu aynı zincirin iki ucu. Hatırlatma randevuya dönüşmüyorsa sorun mesajda değil, randevu vermenin ne kadar kolay olduğunda olabiliyor.' },
    { kind: 'paragraf', metin: 'Veterito bu zinciri klinik tarafında tutuyor: aşı kaydına sonraki tarih giriliyor, zamanı gelenler listeleniyor. Uygulamayı kullanmayan müşteriler için de klinik kendi defterine kayıt açabiliyor.' },
    { kind: 'paragraf', metin: 'Son olarak bir beklenti ayarı: hatırlatma sistemi kurmak, gelmeyen müşteriyi getirmiyor. Yaptığı şey, gelmek isteyen ama unutan müşterinin unutmasını engellemek. Bu ikisi karıştırıldığında sistem başarısız sanılıyor; oysa ölçülmesi gereken şey unutmaya bağlı kaybın azalıp azalmadığı.' },
    { kind: 'paragraf', metin: 'Bir de şu var: hatırlatmanın konusu dönüş oranını etkiliyor. Kanada’da bir klinik yönetim yazılımının hatırlatma kayıtlarını inceleyen çalışma, müşterilerin **aşı hatırlatmalarına, diğer hatırlatmaların tamamına göre yaklaşık üç kat daha az** yanıt verdiğini bulmuş. Diğer hatırlatmalar arasında diş işlemleri, laboratuvar testleri, kontrol muayeneleri ve kısırlaştırma sayılıyor.' },
    { kind: 'paragraf', metin: 'Çalışmanın buradan çıkardığı sonuç, kliniklerin yalnız yıllık aşı hatırlatmasına dayanmak yerine koruyucu hekimlik hizmetlerini bütün olarak öne çıkarması yönünde. Yani hatırlatma sisteminin işi aşıyla sınırlı tutulduğunda, sistemin kendisi az kullanılmış oluyor.' },
  ],
  kontrolListesi: [
    'Sonraki tarihi aynı anda girin',
    'Tarih girilmeden kaydı kapatmayın',
    'İletişimi her ziyarette teyit edin',
    'Aynı hafta tekrar mesaj göndermeyin',
    'Vefat eden kaydı kapatın',
    'Dönüş oranını kendiniz ölçün',
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
      kurum: 'North Carolina State University College of Veterinary Medicine',
      yazarlar: 'Royal KD, Sheats MK, Kedrowicz AA',
      baslik: 'Readability Evaluations of Veterinary Client Handouts and Implications for Patient Care',
      dergi: 'Topics in Companion Animal Medicine',
      yil: 2018,
      kunye: '33(2):58-61',
      doi: '10.1053/j.tcam.2018.03.005',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/30236410/',
    },
  ],
  sss: [
    { soru: 'Hatırlatma için yazılım şart mı?', cevap: 'Şart değil. Zincirin kritik halkası, aşı yapılırken sonraki tarihin kaydedilmesi; bu düzgün yapılıyorsa kâğıt defterle de çalışıyor. Yazılım yalnız gönderim adımını kolaylaştırıyor. Girilmeyen bir tarihi hiçbir program hatırlatamıyor.' },
    { soru: 'Kaç gün önce hatırlatılmalı?', cevap: 'Tek bir doğru yok; klinik kendi randevu doluluğuna ve müşteri alışkanlığına göre belirliyor. Önemli olan aralığın tutarlı olması: her seferinde farklı bir zamanlama, hem müşteride hem klinikte belirsizlik yaratıyor.' },
    { soru: 'SMS mi, uygulama bildirimi mi?', cevap: 'Sahibin fiilen kullandığı kanal belirleyici. Uygulama kullanmayan müşteri için telefon hâlâ en güvenilir yol. Kanalı klinik değil müşteri seçiyor; iki kanaldan aynı anda göndermek ise rahatsız edici oluyor.' },
    { soru: 'Kaç kez hatırlatılmalı?', cevap: 'Tek hatırlatma çoğu zaman yetmiyor, ikiden fazlası rahatsız ediyor. Cevap verene aynı hatırlatma bir daha gönderilmiyor ve aynı hayvan için aynı hafta içinde tekrar mesaj çıkmıyor. Bu kurallar listede değil, gönderim adımında uygulanıyor.' },
    { soru: 'Eski numaralarla ne yapılmalı?', cevap: 'Ulaşmayan mesajlar tespit edilip o kayıtlar temizleniyor. Temizlenmeyen liste zamanla gerçek durumu göstermeyen bir listeye dönüşüyor ve gönderim sayısı arttıkça dönüş oranı düşüyor gibi görünüyor; oysa sorun oranda değil listede.' },
    { soru: 'Dönüş oranı ne olmalı?', cevap: 'İnternette dolaşan hazır rakamlar kendi kliniğiniz için geçerli değil; hasta profili, bölge ve hizmet karması farklı. Kendi sayınızı ölçüp onu iyileştirmek daha anlamlı. Başkasının oranını hedef almak, yanlış bir başarı ya da başarısızlık hissi üretiyor.' },
    { soru: 'Neden aşı hatırlatmasına dönüş düşük?', cevap: 'Kanada’da bir klinik yönetim yazılımının kayıtlarını inceleyen çalışmada müşteriler, aşı hatırlatmalarına diğer hatırlatmaların tamamına göre yaklaşık üç kat daha az yanıt vermiş. Çalışma, kliniklerin yalnız yıllık aşıya dayanmak yerine koruyucu hekimlik hizmetlerini bütün olarak öne çıkarmasını öneriyor.' },
    { soru: 'Vefat eden hayvanın kaydı ne olmalı?', cevap: 'Kapatılıyor ve gönderim listesinden çıkarılıyor. Vefat etmiş bir hayvan için aşı hatırlatması göndermek, o aileyle ilişkiyi bitiren bir hata ve tamamen kayıt hijyeniyle önlenebiliyor. Bu, sistemin en çok özen isteyen tarafı.' },
  ],
};
