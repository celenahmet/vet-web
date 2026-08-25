import type { BlogYazi } from './types';

/**
 * PET SAHIPLERI kategorisinin ilk yazisi.
 *
 * ⚠️ Konu once "mikrocip" olarak planlanmisti; kaynak olarak dusunulen AVMA
 * sayfasi hem duz istege hem gercek tarayiciya BOS donuyor, yani okunamadi.
 * Okunmamis kaynak alintilanmaz (anayasa §1.0: karsiligi olmayan bilgi
 * verilmez), konu kaynagi dogrulanabilir olanla degistirildi.
 *
 * Buradaki tek tibbi nitelikli iddia kontrol siklıgı ve dayanagi AAHA yasam
 * evreleri kilavuzu.
 */
export const veterinerKliniginNasilSecilir: BlogYazi = {
  slug: 'veteriner-klinigi-nasil-secilir',
  baslik: 'Veteriner Kliniği Nasıl Seçilir? Sorulacak Sorular',
  ozet: 'Klinik seçimi fiyat listesiyle değil, acil durumda ulaşabilmekle başlıyor. İlk ziyaret öncesi sorulacaklar ve kliniği değiştirmeniz gereken işaretler.',
  kategori: 'Pet Sahipleri',
  tarih: '2026-08-24',
  bloklar: [
    { kind: 'paragraf', metin: 'İyi bir veteriner kliniği seçmenin ilk ölçütü fiyat değil, **acil bir durumda ulaşılabilir olması**. Hayvanınızın kaydının tek yerde birikmesi ve sizi tanıyan bir hekimin olması, tek tek muayene ücretlerinden daha çok fark yaratıyor.' },
    { kind: 'paragraf', metin: 'Bu yazı iki şeyi anlatıyor: bir kliniğe bağlanmadan önce nelere bakılır, ve hangi işaretler klinik değiştirmeyi düşündürmeli. Hiçbiri hekimlik kalitesini uzaktan ölçme iddiası taşımıyor; ölçülebilir olanlar sıralanıyor.' },

    { kind: 'baslik', metin: 'Önce mesafe, sonra her şey' },
    { kind: 'paragraf', metin: 'Acil durumlarda dakikalar önemli olabiliyor. Evinize kırk dakika uzaklıktaki mükemmel bir klinik, on dakikadaki iyi bir klinikten daha kötü bir seçim olabilir. Rutin kontroller için uzağa gitmek mümkün ama acil durumda aynı şey geçerli değil.' },
    { kind: 'paragraf', metin: 'Bakılacak ikinci şey çalışma saatleri. Kliniğin mesai dışı düzeni nasıl, gece ve hafta sonu için yönlendirdiği bir yer var mı? Bu sorunun cevabını **acil bir gecede değil, önceden** öğrenmek gerekiyor.' },

    { kind: 'baslik', metin: 'İlk ziyaretten önce sorulacaklar' },
    { kind: 'liste', maddeler: [
      'Mesai dışında ve hafta sonu ne oluyor, yönlendirme yapılan bir yer var mı',
      'Randevu nasıl alınıyor, aynı gün randevu mümkün mü',
      'Hayvanımın kaydı dijital tutuluyor mu, geçmişini görebiliyor muyum',
      'Aşı ve parazit hatırlatması yapılıyor mu',
      'Hangi işlemler burada yapılıyor, hangileri için sevk gerekiyor',
      'Röntgen, ultrason ve laboratuvar yerinde mi',
      'Ödeme ve fiyatlandırma nasıl paylaşılıyor',
    ] },
    { kind: 'paragraf', metin: 'Bu soruların hepsinin cevabı telefonda alınabiliyor ve hiçbiri kliniği zor durumda bırakmıyor. Cevap vermekten kaçınılan bir soru varsa, o da bir bilgi.' },

    { kind: 'yanilgi', baslik: '"En ucuz klinik en mantıklısı" yanılgısı', metin: 'Muayene ücreti toplam maliyetin küçük bir parçası. Eksik teşhis yüzünden tekrarlanan ziyaretler, geç kalınmış bir tedavi ya da başka bir kliniğe sevk, ilk ziyaretteki farkı kısa sürede kapatıyor. Ucuzluk tek başına ölçüt değil.' },

    { kind: 'baslik', metin: 'Kaydın nerede durduğu sandığınızdan önemli' },
    { kind: 'paragraf', metin: 'Aşı tarihleri, geçirilen hastalıklar, kullanılan ilaçlar ve kilo geçmişi tek yerde birikmediğinde her ziyaret sıfırdan başlıyor. Hekime "geçen sene ne olmuştu" sorusunu siz cevaplıyorsunuz ve çoğu zaman "sanırım" diye başlıyor.' },
    { kind: 'paragraf', metin: 'Kliniğin kaydı dijital tutması bir kolaylık değil, teşhis kalitesini etkileyen bir şey. Kendi tarafınızda da bir kopya tutmanız, klinik değiştirdiğinizde geçmişi kaybetmemenizi sağlıyor.' },

    { kind: 'tablo', basliklar: ['Bakılan', 'İyi işaret', 'Zayıf işaret'], satirlar: [
      ['Kayıt', 'Geçmiş dijital, size de açık', 'Kâğıt kart, yalnız klinikte'],
      ['Randevu', 'Önceden alınabiliyor', 'Yalnız sıraya girerek'],
      ['Mesai dışı', 'Net bir yönlendirme var', '"Bakarız" cevabı'],
      ['Sevk', 'Hangi durumda nereye, açıkça söyleniyor', 'Konu geçiştiriliyor'],
      ['İletişim', 'Sorulara zaman ayrılıyor', 'Muayene birkaç dakikada bitiyor'],
    ] },

    { kind: 'baslik', metin: 'Kontrol sıklığı yaşla değişiyor' },
    { kind: 'paragraf', metin: 'Sağlıklı bir hayvanın da düzenli kontrole ihtiyacı var. AAHA’nın köpek yaşam evreleri kılavuzu hayvanın hayatını beş evreye ayırıyor ve beslenmeden parazit kontrolüne, davranıştan güvenliğe kadar on başlığı **her evre için ayrı** ele alıyor. Yani kontrol sıklığı ve içeriği sabit değil, yaşla birlikte değişiyor.' },
    { kind: 'paragraf', metin: 'Seçtiğiniz kliniğin bu ritmi kendisi hatırlatması, sizin takvim tutmanızdan daha güvenilir. Hatırlatma yapılmıyorsa takibi siz üstlenmek zorundasınız.' },

    { kind: 'yanilgi', baslik: '"Hayvanım sağlıklı, kontrole gerek yok" yanılgısı', metin: 'Kedi ve köpekler rahatsızlığı uzun süre belli etmiyor; bu, avcı ve av olan türlerde beklenen bir davranış. Rutin kontrolün amacı hasta hayvanı tedavi etmek değil, henüz belirti vermemiş olanı erken yakalamak.' },

    { kind: 'baslik', metin: 'Klinik değiştirmeyi düşündüren işaretler' },
    { kind: 'liste', maddeler: [
      'Sorularınıza cevap verilmiyor ya da aceleye getiriliyor',
      'Yapılan işlem ve verilen ilaç size açıklanmıyor',
      'Geçmiş kayıt istendiğinde paylaşılmıyor',
      'Acil durumda ulaşılamıyor ve alternatif söylenmiyor',
      'Önerilen tedavinin gerekçesi sorulunca rahatsızlık oluşuyor',
    ] },
    { kind: 'paragraf', metin: 'Klinik değiştirmek bir kopuş değil; ikinci bir görüş almak da tıbbın olağan parçası. Ciddi bir teşhis ya da maliyetli bir tedavi söz konusuysa başka bir hekime danışmak, ilk hekime duyulan güvensizlik anlamına gelmiyor. İyi bir hekim bunu zaten anlayışla karşılıyor.' },
    { kind: 'paragraf', metin: 'Bunların hiçbiri tek başına hekimlik hatası anlamına gelmiyor. Ama hayvanınızın bakımını yıllarca sürdüreceğiniz bir ilişkide iletişim, teknik yeterlilik kadar belirleyici.' },

    { kind: 'baslik', metin: 'İlk ziyaret bir deneme ziyareti sayılabilir' },
    { kind: 'paragraf', metin: 'Kliniğe bağlanmadan önce rutin bir kontrolle gitmek, acil bir günde tanımadığınız bir yere düşmekten iyi. İlk ziyarette hayvanınızın nasıl karşılandığı, muayeneye ne kadar zaman ayrıldığı ve sorularınızın nasıl cevaplandığı gözlenebiliyor.' },
    { kind: 'paragraf', metin: 'Bakılacak somut şeyler var: bekleme alanında kedi ve köpek ayrımı yapılıyor mu, muayene masası her hasta arasında temizleniyor mu, hayvanın adı kullanılıyor mu. Bunların hiçbiri hekimlik kalitesini ölçmüyor ama kliniğin işleyişi hakkında bilgi veriyor.' },
    { kind: 'altBaslik', metin: 'Fiyat sorusu nasıl sorulur' },
    { kind: 'paragraf', metin: 'Fiyat sormak ayıp değil ve iyi bir klinik rahatsız olmuyor. Doğru soru "muayene kaç para" değil, "bu işlem için toplamda neler gerekecek ve yaklaşık aralık nedir". Tetkik gerekiyorsa hangi tetkikin neden istendiği de aynı konuşmanın parçası.' },
    { kind: 'paragraf', metin: 'Beklenmedik bir maliyet çıkacaksa önceden haber verilmesini istemek makul bir talep. Bunu ilk ziyarette söylemek, sonraki ziyaretlerde ikinizi de rahatlatıyor.' },

    { kind: 'baslik', metin: 'Birden fazla hayvanınız varsa ölçüt değişiyor' },
    { kind: 'paragraf', metin: 'Evde birden fazla hayvan varsa kliniğin kayıt düzeni daha da önemli hâle geliyor. Her hayvanın ayrı bir geçmişi oluyor ve bunlar karıştığında yanlış aşı tarihi, yanlış ilaç dozu gibi sonuçlar doğabiliyor. Kliniğin hayvanları ayrı ayrı kaydettiğinden emin olun.' },
    { kind: 'paragraf', metin: 'Tür karışıksa ikinci bir soru daha var: klinik kedi, köpek dışında hangi türlere bakıyor. Tavşan, kuş ve kemirgenler için ayrı deneyim gerekiyor ve her klinik bu türleri kabul etmiyor. Bunu ihtiyaç doğmadan sormak, acil bir günde yer aramaktan iyi.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Hayvanınızın tedavi planını ve kontrol sıklığını onu gören veteriner hekim belirler.' },

    { kind: 'paragraf', metin: 'Kliniğinizle birlikte takip edeceğiniz iki konu için [[kedi-asi-takvimi|kedi aşı takvimi]] ve [[kedilerde-ic-ve-dis-parazit|iç ve dış parazit programı]] yazılarına bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Uzaktan görüşme sunuyor mu' },
    { kind: 'paragraf', metin: 'Klinik seçerken az sorulan ama giderek önem kazanan bir başlık: kontrol görüşmeleri için uzaktan bir yol var mı. 2.117 köpek ve kedi sahibiyle yapılan bir anket çalışması, sahiplerin uzaktan görüşmede **özellikle kontrol randevuları ve uzmana erişim** açısından yüksek potansiyel gördüğünü aktarıyor.' },
    { kind: 'paragraf', metin: 'Buna karşılık fiilen kullanım düşük: köpek sahiplerinin **%12’si**, kedi sahiplerinin **%6’sı** daha önce kullanmış. Hiç kullanmamış olanların yaklaşık dörtte biri gelecekte kullanmaya istekli. Aynı çalışma, sahiplerin çoğunun bir şeyin gözden kaçma riskinin de farkında olduğunu belirtiyor.' },
    { kind: 'paragraf', metin: 'Yani uzaktan görüşme muayenenin yerini almıyor; kontrol ve takip aşamasında yol kısaltıyor. Klinik seçerken bunu sormak, özellikle uzun süreli takip gerektiren bir durum varsa fark yaratabiliyor.' },
  ],
  kontrolListesi: [
    'Acilde ulaşım süresi biliniyor mu?',
    'Mesai dışı yönlendirme soruldu mu?',
    'Kayıtlar dijital tutuluyor mu?',
    'Aşı hatırlatması yapılıyor mu?',
    'Geçmiş kaydın bir kopyası sizde mi?',
    'Sevk gereken durumlar konuşuldu mu?',
  ],
  sss: [
    { soru: 'Veteriner kliniği seçerken önce neye bakmalıyım?', cevap: 'Acil durumda ulaşabilme süresine bakın. Evinize kırk dakika uzaklıktaki mükemmel bir klinik, on dakikadaki iyi bir klinikten daha kötü bir seçim olabilir. Rutin kontrol için uzağa gitmek mümkün ama acil durumda aynı esneklik yok.' },
    { soru: 'En ucuz kliniği seçmek mantıklı mı?', cevap: 'Muayene ücreti toplam maliyetin küçük bir parçası. Eksik teşhis yüzünden tekrarlanan ziyaretler, geç kalınan tedavi ya da başka bir kliniğe sevk, ilk ziyaretteki fiyat farkını kısa sürede kapatıyor. Fiyat ölçütlerden biri, tek ölçüt değil.' },
    { soru: 'Sağlıklı hayvanı ne sıklıkla kontrole götürmeliyim?', cevap: 'Sıklık yaşam evresine göre değişiyor; sabit bir sayı yok. AAHA kılavuzu hayvanın hayatını beş evreye ayırıyor ve kontrol içeriğini her evre için ayrı ele alıyor. Kedi ve köpekler rahatsızlığı geç belli ettiği için rutin kontrolün amacı erken yakalamak.' },
    { soru: 'Klinik değiştirirsem geçmiş kayıtlar ne olur?', cevap: 'Kayıtları isteme hakkınız var ve yeni kliniğe aktarılması gerekiyor. Bu yüzden kendi tarafınızda da bir kopya tutmak önemli; aşı tarihleri, kullanılan ilaçlar ve kilo geçmişi olmadan yeni hekim sıfırdan başlıyor.' },
    { soru: 'Kliniğin dijital kayıt tutması neden önemli?', cevap: 'Aşı tarihleri, geçirilen hastalıklar ve kilo geçmişi tek yerde birikmediğinde her ziyaret sıfırdan başlıyor ve sorular "sanırım" ile cevaplanıyor. Dijital kayıt bir kolaylık değil, teşhisin dayandığı geçmişin doğru olmasını sağlayan şey.' },
    { soru: 'Hangi durumda klinik değiştirmeyi düşünmeliyim?', cevap: 'Sorularınıza cevap verilmemesi, yapılan işlemin açıklanmaması, geçmiş kaydın paylaşılmaması ve acil durumda ulaşılamayıp alternatif söylenmemesi dikkat çekmesi gereken işaretler. Hiçbiri tek başına hekimlik hatası değil ama uzun sürecek bir ilişkide iletişim belirleyici.' },
  ],
  kaynaklar: [
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
    {
      kurum: 'American Animal Hospital Association',
      yazarlar: 'Creevy KE, Grady J, Little SE, Moore GE ve ark.',
      baslik: '2019 AAHA Canine Life Stage Guidelines',
      dergi: 'Journal of the American Animal Hospital Association',
      yil: 2019,
      kunye: '55(6):267-290',
      doi: '10.5326/JAAHA-MS-6999',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/31622127/',
    },
  ],
};
