import type { BlogYazi } from './types';

export const vapurdaEvcilHayvan: BlogYazi = {
  slug: 'vapurda-evcil-hayvan',
  baslik: 'Vapurda ve Feribotta Evcil Hayvan Kuralları',
  ozet: 'Şehir Hatları, İDO ve BUDO\'da kedi ve köpekle yolculuk: kafes ölçüsü, ağızlık, tasma, aşı karnesi, pasaport ve alınmayan ırklar tek tabloda.',
  kapakAlt:
    'Vapur güvertesinde deniz manzarasının önünde taşıma çantasındaki köpek',
  kategori: 'Pet Sahipleri',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: '**Vapur, deniz otobüsü ve feribotta kedi ve köpekle yolculuk yapılabiliyor, ama kuralı her işletme kendisi koyuyor: kedi taşıma çantası ya da kafeste kabul ediliyor, köpek için ağızlık, tasma ve kafes ölçüsü işletmeden işletmeye değişiyor.** İncelediğimiz üç büyük işletmenin (İstanbul Şehir Hatları, İDO ve BUDO) hiçbiri kafessiz, kucakta ya da serbest gezen bir kediyi kabul etmiyor; kafes dışında taşınan köpek için ise üçü de ağızlık istiyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu üç işletmenin kendi sitelerinde yayımladığı taşıma kurallarını bir araya getirdik. Kurallar zaman zaman güncelleniyor; bilet almadan önce işletmenin güncel sayfasına bakmak ya da iskeledeki görevliye sormak önerilir.' },

    { kind: 'tablo', basliklar: ['İşletme', 'Kedi', 'Köpek', 'Belge'], satirlar: [
      ['Şehir Hatları (vapur)', 'Kedi çantası, sepet ya da kafeste, her saat', 'Ağızlık ve en fazla 50 cm tasma (SSS sayfası)', 'Rehber köpekte engelli kartı ve rehber köpek kartı'],
      ['İDO (deniz otobüsü, feribot)', 'Özel kafeste; salonda en fazla 23x40x55 cm', 'Kafese sığmayan köpek ağızlıkla hızlı feribotta, salon dışında', 'Aşı karnesi'],
      ['BUDO (deniz otobüsü)', 'El kafesinde, salondaki özel bölümde', 'Kafese sığmayan köpek ağızlıkla, özel bölümde', 'PETVET kayıtlı pasaport ya da istisna belgesi'],
    ]},

    { kind: 'baslik', metin: 'Vapurda evcil hayvan kuralını kim belirliyor?' },
    { kind: 'paragraf', metin: 'Deniz yolcu taşımacılığında evcil hayvan kuralı her işletmenin kendi taşıma ya da yolculuk kurallarında yer alıyor. Bu yüzden İstanbul\'da Kadıköy vapurunda geçerli olan kural, Bursa\'ya giden deniz otobüsünde ya da Yenikapı\'dan kalkan hızlı feribotta aynı olmayabiliyor.' },
    { kind: 'paragraf', metin: 'Üç işletmenin ortak noktası sorumluluğun hayvanın sahibinde olması. Şehir Hatları, kafesinden ya da sahibinin kontrolünden kurtulup güvenliği tehlikeye sokan bir hayvan için refakatçisini sorumlu tutuyor. İDO ve BUDO ise taşınan hayvanın seferden önce, sefer sırasında ya da sonrasında sağlık durumunun kötüleşmesinden sorumlu tutulamayacaklarını yazıyor.' },

    { kind: 'baslik', metin: 'Şehir Hatları vapurlarında kedi ve köpek' },
    { kind: 'paragraf', metin: 'Şehir Hatları\'nın sıkça sorulan sorular sayfasına göre kediler, özel tasarlanmış kedi çantası, sepet ya da kafesle taşınmak şartıyla günün her saati seyahat edebiliyor. Okul çantası, pazar çantası, spor sırt çantası, koli ya da el çantasıyla taşımaya izin verilmiyor.' },
    { kind: 'paragraf', metin: 'Aynı sayfa tüm köpekler için ağızlık ve en fazla 50 santimetre tasmayı zorunlu tutuyor; 5 kilogramdan küçük, orta boy ve büyük köpeklerin tasma ve ağızlık takılı olmak şartıyla günün her saati seyahat edebileceğini yazıyor. Köpekler araç içinde zeminde ve sahibinin yakınında durmalı; kafesin koltuğa konmasına ve köpeğin koltuğa oturtulmasına izin verilmiyor. Dışkı ve idrar gibi kirliliğin temizlenmesinden köpek sahibi sorumlu.' },
    { kind: 'paragraf', metin: 'Şehir Hatları\'nın yolculuk kuralları sayfası ise iskele ve vapurlarda yalnızca kılavuz köpeklerle ve kafeste taşınan küçük kafes hayvanlarıyla yolculuk yapılabileceğini söylüyor. İki sayfa arasındaki bu farkı ve İstanbul\'daki metro, otobüs kurallarını [[evcil-hayvanla-toplu-tasima|evcil hayvanla toplu taşıma]] yazımızda ayrıntılı anlattık. Köpekle binmeden önce iskeledeki görevliye sormak en sağlıklısı.' },
    { kind: 'yanilgi', baslik: '"Kedi kucakta sakin duruyorsa vapura binebilir"', metin: 'Şehir Hatları bunu açıkça yasaklıyor: kedi çantası, sepet ya da kafes dışında taşınan kedilerin tasmayla ya da kucakta taşınsa dahi seyahatine izin verilmiyor. Kedinin sakin olması kuralı değiştirmiyor.' },

    { kind: 'baslik', metin: 'İDO deniz otobüsü ve feribotlarında evcil hayvan' },
    { kind: 'paragraf', metin: 'İDO\'nun taşıma kurallarına göre özel kafeslerde bulunan ve aşı karnesi olan kedi, köpek ve muhabbet kuşu, kanarya gibi ötücü kuşlar belirlenen kurallar içinde taşınabiliyor. Yolcu salonunda taşınacak kafesin en büyük ölçüsü 23x40x55 santimetre.' },
    { kind: 'paragraf', metin: 'Kafes bu ölçüden büyükse hayvan, gemi görevlilerinin gösterdiği yerlerde ya da aracın içinde taşınıyor. Kafese sığmayacak kadar büyük köpekler ağızlık takmak şartıyla hızlı feribot seferlerine kabul edilebiliyor, ancak yolcu salonunda seyahat edemiyor. Sefer boyunca hayvanın kafesinden ya da araçtan çıkarılmaması gerekiyor.' },
    { kind: 'paragraf', metin: 'Kontrolü yapan görevliler sağlık durumundan şüphelendiği ya da sağlıklı bir yolculuğa engel olabileceğini düşündüğü hayvanın taşınmasını reddedebiliyor.' },
    { kind: 'yanilgi', baslik: '"Kafese sığmayan köpek deniz otobüsüne hiç alınmaz"', metin: 'İki işletme de bunun için bir yol tanımlıyor. İDO, kafese sığmayan köpeği ağızlıkla hızlı feribot seferlerine salon dışında kabul edebiliyor. BUDO da kafesine sığmayan köpeğin ağızlık takmak koşuluyla, yolcu salonunda evcil hayvanlara ayrılan özel bölümde taşınabileceğini yazıyor.' },

    { kind: 'baslik', metin: 'BUDO\'da evcil hayvan ve PETVET pasaportu' },
    { kind: 'paragraf', metin: 'BUDO\'nun yolculuk kurallarına göre kedi, köpek, tavşan gibi küçük evcil hayvanlar el kafesi içinde, personelin gösterdiği ve yolcu salonunda evcil hayvanlar için ayrılan özel bölümde taşınabiliyor. Seyahat çantasındaki hayvan, yolcunun kendi koltuğunu aşmayacak şekilde koltuk önünde durabiliyor. Kuşlar kafesinde olmak koşuluyla salona alınıyor.' },
    { kind: 'paragraf', metin: 'BUDO\'yu ayıran kural belge şartı. 1 Ocak 2023\'ten bu yana evcil hayvanlar BUDO deniz otobüslerinde PETVET sistemine kayıtlı olduğunu gösteren pasaportla seyahat edebiliyor; pasaportu olmayan hayvan araçlara alınmıyor. Pasaport alamamış sahipler, tarım il müdürlüklerinden aldıkları istisna belgesini göstererek seyahat edebiliyor. Kaydın nasıl yapıldığını [[petvet-kayit|PETVET kaydı]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Hangi köpek ırkları vapura alınmıyor?' },
    { kind: 'paragraf', metin: 'İDO, 5199 sayılı Hayvanları Koruma Kanunu\'nun 14. maddesine dayanarak Pitbull Terrier, Japon Tosa, Dogo Arjantin ve Fila Brasileiro ırklarını taşımıyor. BUDO\'nun listesi bu dört ırka American Staffordshire Terrier ve American Bully\'yi de ekliyor; işletme bu yasağı 5199 sayılı kanuna ve Tarım ve Orman Bakanlığı\'nın 7 Aralık 2021 tarihli genelgesine dayandırıyor.' },
    { kind: 'paragraf', metin: 'Bu ırkların neden yasak olduğunu ve sahiplerin hangi yükümlülükleri olduğunu [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazımızda bulabilirsiniz.' },

    { kind: 'baslik', metin: 'Arabalı vapur ve feribotta hayvan araçta kalabilir mi?' },
    { kind: 'paragraf', metin: 'İDO, kafesi salon ölçüsünü aşan hayvanların gemi görevlilerinin gösterdiği yerde ya da aracın içinde taşınabileceğini yazıyor. Araçlı yolculuklarda aşı karnesinin güvenlik kontrolünde ve sefer boyunca istendiği her an gösterilmesi bekleniyor.' },
    { kind: 'paragraf', metin: 'Hayvanı araçta bırakmak salonda yer sorununu çözse de havalandırma ve sıcaklık açısından dikkat ister. Kısa bir geçiş için bile aracın içinin ne kadar ısınabileceğini ya da soğuyabileceğini hesaba katmak, mümkünse sefer boyunca hayvanın yanında bulunmak önerilir.' },
    { kind: 'uyari', metin: 'Yolculuk sırasında ya da sonrasında hayvanınızda kusma, halsizlik, aşırı soluma gibi sizi kaygılandıran bir durum görürseniz veteriner hekime başvurmanız gerekiyor. Yolculuk tutmasına yatkın olduğunu düşündüğünüz bir hayvan için ne yapılabileceğini de yola çıkmadan önce veteriner hekiminizle konuşmanız önerilir; hekime danışmadan ilaç verilmemeli.' },

    { kind: 'baslik', metin: 'Yanınızda hangi belgeler bulunmalı?' },
    { kind: 'liste', maddeler: [
      '**Aşı karnesi:** İDO, 1 Mart 2012\'den bu yana yaya yolculuklarda biniş terminalinde görevliye gösterilmek üzere aşı karnesinin yanınızda olmasını istiyor.',
      '**Pasaport:** BUDO, PETVET sistemine kayıtlı olduğunu gösteren pasaport ya da tarım il müdürlüğünden alınmış istisna belgesi arıyor. Pasaportun ne olduğunu [[evcil-hayvan-pasaportu|evcil hayvan pasaportu]] yazımızda anlattık.',
      '**Sağlık sertifikası:** BUDO, evcil hayvanın mevzuata uygun taşıma belgelerinin ve sorulduğunda gösterilecek sağlık sertifikasının bulunmasını şart koşuyor.',
      '**Rehber köpek belgeleri:** İDO rehber köpek için rehber köpek derneği kimliği, aşı karnesi ve rehber köpek olduğunu gösteren göğüs tasması istiyor; Şehir Hatları da görevli talep ederse engelli kartı ile rehber köpek kartının gösterilmesini bekliyor.',
    ]},

    { kind: 'baslik', metin: 'Yolculuktan önce hayvanı nasıl hazırlamalı?' },
    { kind: 'paragraf', metin: 'Vapur yolculuğu çoğu hayvan için alışık olmadığı sesler, kalabalık ve sarsıntı demek. Taşıma çantasını yolculuktan günler önce evde açık bırakmak, içine hayvanın tanıdığı bir örtü koymak ve çantaya kısa sürelerle alıştırmak yolculuğu kolaylaştırıyor. Kafesin sağlam kapandığından ve hayvanın içinde dönebildiğinden emin olmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Köpek için ağızlık da yolculuk günü ilk kez takılmamalı; önceden kısa sürelerle denenmesi önerilir. Hayvanın kaybolma ihtimaline karşı mikroçipli ve kayıtlı olması da işi kolaylaştırıyor; ayrıntıları [[mikrocip-nedir|mikroçip]] yazımızda bulabilirsiniz. Yurt dışına giden bir feribota binecekseniz işletme kuralının yanında varış ülkesinin giriş şartlarını da önceden araştırmanız gerekiyor; uçakla seyahatte benzer konuları [[evcil-hayvanla-ucak-yolculugu|evcil hayvanla uçak yolculuğu]] yazımızda ele aldık.' },
  ],
  sss: [
    { soru: 'Vapura kedi alınır mı?', cevap: 'Evet, kedi taşıma çantası, sepet ya da kafeste alınıyor. Şehir Hatları bu şartla kedinin günün her saati seyahat edebileceğini yazıyor; okul çantası, koli ya da el çantasıyla taşımaya ve kucakta taşımaya izin vermiyor. İDO ve BUDO da kediyi kafeste kabul ediyor.' },
    { soru: 'Vapura köpek alınır mı?', cevap: 'Alınabiliyor, ama şartlar işletmeye göre değişiyor. Şehir Hatları\'nın sıkça sorulan sorular sayfası ağızlık ve en fazla 50 santimetre tasmayı yeterli sayıyor. İDO ve BUDO küçük köpeği kafeste, kafese sığmayan köpeği ise ağızlıkla ve salonda ayrılan yerde ya da salon dışında kabul ediyor.' },
    { soru: 'İDO\'da kafes ölçüsü ne kadar olmalı?', cevap: 'Yolcu salonuna alınacak kafes en fazla 23x40x55 santimetre olmalı. Kafes daha büyükse hayvan görevlilerin gösterdiği yerde ya da aracın içinde taşınıyor. Sefer boyunca hayvanın kafesten ya da araçtan çıkarılmaması gerekiyor.' },
    { soru: 'BUDO\'da evcil hayvan için pasaport şart mı?', cevap: 'Evet, BUDO 1 Ocak 2023\'ten bu yana PETVET sistemine kayıtlı olduğunu gösteren pasaport istiyor. Pasaportu olmayan hayvan deniz otobüsüne alınmıyor; pasaport alamamış sahipler tarım il müdürlüğünden alacakları istisna belgesiyle seyahat edebiliyor.' },
    { soru: 'Feribotta köpek arabada kalabilir mi?', cevap: 'İDO\'nun kurallarına göre kafese sığmayan ya da kafesi salon ölçüsünü aşan hayvan aracın içinde ya da görevlilerin gösterdiği yerde taşınabiliyor. Hayvanın sefer boyunca araçtan çıkarılmaması gerekiyor; havalandırma ve sıcaklık açısından aracı kontrol etmek önerilir.' },
    { soru: 'Pitbull vapura binebilir mi?', cevap: 'Hayır, İDO ve BUDO Pitbull Terrier\'ı taşımıyor. İDO bu kuralı 5199 sayılı kanunun 14. maddesine dayandırıyor ve Japon Tosa, Dogo Arjantin, Fila Brasileiro ırklarını da kabul etmiyor. BUDO\'nun listesinde American Staffordshire Terrier ve American Bully de var.' },
    { soru: 'Görevli hayvanımı neden vapura almayabilir?', cevap: 'İDO ve BUDO görevlilerinin, sağlık durumundan şüphe ettikleri ya da güvenlik kaygısı taşıdıkları hayvanın taşınmasını reddetme yetkisi var. Kafes, ağızlık ya da belge şartı karşılanmadığında da hayvan alınmayabiliyor. Hayvanınızın sağlığından kaygılanıyorsanız yolculuktan önce veteriner hekime danışmanız önerilir.' },
  ],
  kontrolListesi: [
    'Kedi için taşıma çantası var mı?',
    'Köpeğin ağızlığı ve tasması var mı?',
    'Kafes 23x40x55 cm\'e sığıyor mu?',
    'Aşı karnesi yanınızda mı?',
    'PETVET pasaportu hazır mı?',
    'Güncel kurala baktınız mı?',
  ],
  kaynaklar: [
    {
      kurum: 'İstanbul Şehir Hatları',
      baslik: 'Sıkça Sorulan Sorular: Evcil Hayvanlarla Seyahat Kuralları Nelerdir?',
      adres: 'https://sehirhatlari.istanbul/tr/sikca-sorulan-sorular',
    },
    {
      kurum: 'İstanbul Şehir Hatları',
      baslik: 'Yolculuk Kuralları',
      adres: 'https://sehirhatlari.istanbul/tr/bilgiler/yolculuk-kurallari-249',
    },
    {
      kurum: 'İstanbul Deniz Otobüsleri (İDO)',
      baslik: 'Araç, Yolcu ve Bagaj Taşıma Kuralları',
      adres: 'https://www.ido.com.tr/tr/onemli-bilgiler/tasima-ve-seyahat-kurallari/tasima-kurallari/',
    },
    {
      kurum: 'BURULAŞ, Bursa Deniz Otobüsleri (BUDO)',
      baslik: 'Yolculuk Kuralları: 10. Evcil Hayvanlar',
      adres: 'https://budo.burulas.com.tr/tr/Budo/TravellingTerms?pageno=0',
    },
  ],
};
