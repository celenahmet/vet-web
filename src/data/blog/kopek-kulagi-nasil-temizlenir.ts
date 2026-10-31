import type { BlogYazi } from './types';

/**
 * KOPEK kategorisi. Dayanaklar dokumde ve kaynaklar listesinde. Teshis, ilac ve
 * evde tedavi yazilmiyor.
 */
export const kopekKulagiNasilTemizlenir: BlogYazi = {
  slug: 'kopek-kulagi-nasil-temizlenir',
  baslik: 'Köpeğin Kulağı Nasıl Temizlenir?',
  ozet: 'Kulak temizliğinde çubuk kullanılmıyor, ürünü hekim seçiyor. Doğru adımlar, kaçınılacak ürünler ve hekime gitmeyi gerektiren belirtiler.',
  kapakAlt:
    'Uzun tüylü köpeğin kulağını pamukla temizleyen el',
  kategori: 'Köpek',
  tarih: '2026-10-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Köpeğin kulağı **gerçek pamuk topla ve veteriner hekimin önerdiği bir çözeltiyle temizleniyor; pamuklu kulak çubuğu hiç kullanılmıyor.** Çözelti kanalı dolduracak kadar verilir, kulağın tabanı masaj yapılır ve gevşeyen kir pamuğa alınır.' },
    { kind: 'paragraf', metin: 'Bu yazı sağlıklı görünen bir kulağın bakımını anlatıyor. Kulakta koku, kızarıklık ya da akıntı varsa mesele temizlik değil; o durumda önce hekim bakıyor.' },

    { kind: 'baslik', metin: 'Temizlemeden önce kulağa bakmak' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, kulak iltihabının belirtilerini baş sallama, kötü koku, deride kızarıklık, şişlik, kaşıma, akıntı ve pullanma olarak sayıyor. Kulak ağrılı ya da kaşıntılı olabiliyor ve bir ya da iki kulak etkilenebiliyor.' },
    { kind: 'paragraf', metin: 'Bu yüzden temizlik, kulağa bakma alışkanlığıyla birlikte düşünülüyor. Kılavuz, düzenli kontrolde sıcaklık değişimine, deri renginde farklılığa ve ani nem görünmesine dikkat edilmesini, bir değişiklik fark edilince de vakit kaybetmeden hekime başvurulmasını öneriyor.' },
    { kind: 'liste', maddeler: [
      'Kulak diğerinden daha sıcak mı?',
      'Deride kızarıklık ya da renk değişimi var mı?',
      'Kulakta ani bir nemlilik mi oluştu?',
      'Kötü bir koku var mı?',
      'Köpek başını sallıyor ya da kaşıyor mu?',
    ] },
    { kind: 'paragraf', metin: 'Bu soruların herhangi birine "evet" cevabı veriliyorsa, kulağı kendi başınıza temizlemeye çalışmak yerine hekime göstermek gerekiyor. İltihaplı kulağın nedenini ancak muayene gösteriyor. Ayrıntı için [[kopeklerde-kulak-enfeksiyonu|köpeklerde kulak enfeksiyonu]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Kulak zarı sorusu neden önemli' },
    { kind: 'paragraf', metin: 'Kulağa sıvı vermeden önce bilinmesi gereken şey, kulak zarının sağlam olup olmadığı. Bir veteriner derleme makalesi, zarın bütünlüğü belirlenemiyorsa orta kulak hastalığının varmış gibi hareket edilmesini ve kulağa zarar verme ihtimali olan temizleyicilerden ya da ilaçlardan kaçınılmasını öneriyor.' },
    { kind: 'paragraf', metin: 'Bunun evdeki karşılığı basit: daha önce hiç kontrol ettirilmemiş ya da sorunlu bir kulakta, hangi ürünün kullanılacağı hekimle konuşulmadan karar verilmiyor. Hekim ürünü seçerken zarın durumunu da hesaba katıyor.' },
    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Köpeğin kulağında koku, akıntı, kızarıklık ya da ağrı varsa temizlemeye çalışmadan veteriner hekime başvurmak gerekiyor.' },

    { kind: 'baslik', metin: 'Sağlıklı kulakta temizlik adımları' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual pet sahipleri için şu sırayı veriyor. Hekimin kendi talimatı varsa o talimat önce geliyor ve hekim doğru tekniği gösterebiliyor.' },
    { kind: 'liste', maddeler: [
      'Gerçek pamuk top ve hekimin önerdiği bir temizleme çözeltisi hazırlanır',
      'Kanalı dolduracak kadar çözelti verilir',
      'Kulağın tabanı, çözelti "şıkırdayana" kadar nazikçe masaj yapılır',
      'Kulak kepçesi tabandan tutulup yukarı ve baştan uzağa çekilir',
      'Pamuk top küçük bir tüp biçiminde sıkılır ve kanala nazikçe sokulur',
      'Taban yeniden masaj yapılır; kir ve nem pamuğa geçer',
    ] },
    { kind: 'paragraf', metin: 'Hekim bir ilaç yazdıysa, ilaç kulağa konmadan önce temizlikten sonra birkaç dakika beklenmesi gerekiyor. Sıklık da hekimin planına göre değişiyor. Kılavuz, kulak iltihabını sık geçiren köpeklerde hekimin düzenli temizlik isteyebileceğini, örneğin günde bir kezle başlanıp bakım için haftada bir ya da iki kez sıklığına inildiğini örnek olarak veriyor.' },

    { kind: 'baslik', metin: 'Neyin kullanılıp neyin kullanılmadığı' },
    { kind: 'tablo', basliklar: ['Ürün ya da yöntem', 'Durum', 'Neden'], satirlar: [
      ['Pamuklu kulak çubuğu', 'Kullanılmıyor', 'Kiri kanalın daha derinine itebiliyor'],
      ['Gerçek pamuk top', 'Kullanılıyor', 'Kılavuz gerçek pamuk top kullanılmasını söylüyor'],
      ['Polyester ya da sentetik pamuk', 'Kullanılmıyor', 'Kılavuz gerçek pamuk istiyor'],
      ['Hekimin önerdiği çözelti', 'Kullanılıyor', 'Eczane tuzlu göz solüsyonu sık önerilen bir örnek'],
      ['Reçetesiz kulak kiri çözücü', 'Hekim onaylamadıkça kullanılmıyor', 'Kılavuz, hekim onaylamadıkça kaçınılmasını söylüyor'],
      ['Sirke karışımı gibi ev yöntemleri', 'Kullanılmıyor', 'Şişliği ve salgıyı artırabiliyor'],
    ] },
    { kind: 'yanilgi', baslik: '"Kulak çubuğu daha temiz yapar" yanılgısı', metin: 'Merck Veterinary Manual açık söylüyor: kanalda kiri daha derine iten hiçbir şey kullanılmıyor ve pamuklu çubuk kullanılmıyor. Çubuk temizlik hissi veriyor ama kiri kanalın içine doğru itebiliyor. Gerçek pamuk top ve hekimin önerdiği çözelti kullanılıyor.' },
    { kind: 'paragraf', metin: 'Ev yöntemleri konusunda da kılavuz net. Sirke karışımları gibi tahriş edici ürünler şişliği ve salgıyı artırıp enfeksiyon riskini yükseltebiliyor. Sağlıklı kulakta sorun çıkarmayan ürünler bile iltihaplı kulağı tahriş edebiliyor.' },

    { kind: 'baslik', metin: 'Temizleme şişesinin kendisi de önemli' },
    { kind: 'paragraf', metin: 'Veteriner dermatoloji kliniklerine gelen köpek sahiplerinden toplanan kullanılmış kulak temizleyici şişeleri incelenmiş. Şişe uçlarının **%10’unda**, şişenin içindeki çözeltinin ise **%2’sinde** bakteri bulunmuş. Son kullanma tarihi geçmiş şişelerde uç kirlenmesi %17, tarihi geçmemişlerde %4 çıkmış.' },
    { kind: 'paragraf', metin: 'Araştırmacılar evde rutin kullanımda bakteri kirlenmesini küçük bir endişe olarak değerlendirmiş. Yine de bu sonuç, tarihi geçmiş ürünü atmak ve şişe ucunu temiz tutmak için yeterli bir gerekçe sunuyor.' },

    { kind: 'baslik', metin: 'Bazı köpeklerde kulak daha çok dikkat istiyor' },
    { kind: 'paragraf', metin: 'Birleşik Krallık’ta birinci basamak veteriner hekimliğinde izlenen 22.333 köpeklik bir örneklemde kulak iltihabının bir yıllık görülme sıklığı **%7,30** bulunmuş. En yüksek iki risk etkeni ırk ve kulak duruşu çıkmış: sarkık kulaklı ırklarda dik kulaklılara göre 1,76 kat, V biçiminde düşük kulaklılarda ise 1,84 kat daha yüksek olasılık bildirilmiş.' },
    { kind: 'paragraf', metin: 'Sarkık kulaklı bir köpekle yaşıyorsanız kulak kontrolü daha da önem kazanıyor. Temizliğin sıklığını ve ürününü bu tür bir köpekte hekimle birlikte belirlemek gerekiyor. Dış parazit de kulağı etkileyen nedenler arasında; ayrıntı [[kopeklerde-ic-ve-dis-parazit|iç ve dış parazit]] yazısında.' },

    { kind: 'baslik', metin: 'Banyo ve yüzme sonrası kulak' },
    { kind: 'paragraf', metin: 'Merck Veterinary Manual, kulak kanallarının kuru ve havadar tutulmasını, banyoda kulağa su kaçırılmamasını öneriyor. Sık yüzen köpeklerde ise hekimin önereceği kurutucu bir ürün gerekebiliyor. Bazı durumlarda kulak kanalı çevresindeki tüyün kesilmesi ya da yolunması hava akışını artırıp nemi azaltıyor, ama bu işlemden önce hekime danışmak gerekiyor.' },
    { kind: 'paragraf', metin: 'Düzenli kontrol sıklığı için [[kedi-kopek-check-up-ne-zaman|check-up ne zaman yapılır]] yazısına bakılabilir. Uygulama tarafında temizlik tarihlerini ve kullanılan ürünü not etmek için Veterito kullanılabilir.' },

    { kind: 'baslik', metin: 'Ne zaman beklemeden hekime gidilir' },
    { kind: 'liste', maddeler: [
      'Kulakta koku ya da akıntı',
      'Kulakta kızarıklık, şişlik ya da sıcaklık',
      'Köpek ısrarla başını sallıyor ya da kaşıyorsa',
      'Kulağa dokunulunca ağrı belirtisi',
      'Temizlik sırasında köpek sızlanıp çekiliyorsa',
    ] },
    { kind: 'paragraf', metin: 'Bu bulgularda temizliği sürdürmek yerine köpeği hekime götürmek gerekiyor. Hekim kulağı otoskopla inceliyor ve gerekirse akıntıdan örnek alıyor; sebebi belirleyen şey bu muayene.' },
  ],
  kontrolListesi: [
    'Kulakta koku var mı?',
    'Kızarıklık ya da akıntı var mı?',
    'Gerçek pamuk top hazır mı?',
    'Çözelti hekimin önerdiği mi?',
    'Şişenin tarihi geçmiş mi?',
    'Banyoda kulağa su kaçtı mı?',
  ],
  sss: [
    { soru: 'Köpeğin kulağı pamuklu çubukla temizlenir mi?', cevap: 'Hayır, pamuklu kulak çubuğu kullanılmıyor. Merck Veterinary Manual kiri kanalın daha derinine itebilecek hiçbir şeyin kullanılmamasını söylüyor. Bunun yerine gerçek pamuk top ve hekimin önerdiği bir temizleme çözeltisi kullanılıyor.' },
    { soru: 'Köpeğin kulağını evde ne ile temizlemeliyim?', cevap: 'Hekimin önerdiği çözeltiyle ve gerçek pamuk topla temizlenmesi öneriliyor. Merck Veterinary Manual, eczaneden alınan tuzlu göz solüsyonunun sık önerilen bir örnek olduğunu belirtiyor. Hangi ürünün uygun olduğuna hekim karar veriyor.' },
    { soru: 'Köpeğin kulağı ne sıklıkla temizlenir?', cevap: 'Sıklığı hekim belirliyor. Merck Veterinary Manual, kulak iltihabını sık geçiren köpeklerde hekimin düzenli temizlik isteyebileceğini yazıyor; örnek olarak günde bir kezle başlanıp bakım için haftada bir ya da iki kez sıklığına inilebiliyor.' },
    { soru: 'Köpeğin kulağından koku geliyorsa ne yapmalı?', cevap: 'Veteriner hekime başvurmak gerekiyor. Kötü koku kulak iltihabının bilinen belirtilerinden biri ve nedenini ancak muayene gösteriyor. Kulağı evde temizleyip beklemek yerine köpeği hekime götürmek önerilir.' },
    { soru: 'Sirke ile köpeğin kulağı temizlenir mi?', cevap: 'Hayır, önerilmiyor. Merck Veterinary Manual sirke karışımı gibi tahriş edici ev yöntemlerinin şişliği ve salgıyı artırabildiğini, enfeksiyon riskini yükselttiğini belirtiyor. Kulağa ne uygulanacağına hekim karar veriyor.' },
    { soru: 'Banyodan sonra köpeğin kulağı nasıl kurutulur?', cevap: 'Asıl önlem, banyoda kulağa su kaçırmamak. Kulak kanallarının kuru ve havadar tutulması öneriliyor. Sık yüzen köpeklerde hekimin önerdiği kurutucu bir ürün kullanılabiliyor; ürün seçimini hekim yapıyor.' },
    { soru: 'Hangi köpeklerde kulak sorunu daha sık görülür?', cevap: 'Sarkık kulaklı köpeklerde. Birleşik Krallık’ta 22.333 köpeklik bir çalışmada sarkık kulaklı ırklarda dik kulaklılara göre 1,76 kat, V biçiminde düşük kulaklılarda 1,84 kat daha yüksek olasılık bildirilmiş. Basset Hound en yüksek oranı göstermiş.' },
  ],
  kaynaklar: [
    {
      kurum: 'Merck Veterinary Manual',
      baslik: 'Ear Infections and Otitis Externa in Dogs (Pet Owner Version)',
      yil: 2026,
      adres: 'https://www.merckvetmanual.com/dog-owners/ear-disorders-of-dogs/ear-infections-and-otitis-externa-in-dogs',
    },
    {
      kurum: 'Animal Hospital of Montgomery',
      yazarlar: 'Gotthelf LN',
      baslik: 'Diagnosis and treatment of otitis media in dogs and cats',
      dergi: 'Veterinary Clinics of North America: Small Animal Practice',
      yil: 2004,
      kunye: '34(2):469-487',
      doi: '10.1016/j.cvsm.2003.10.007',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/15062620/',
    },
    {
      kurum: 'Animal Dermatology Clinic, Marietta',
      yazarlar: 'Bartlett SJ, Rosenkrantz WS, Sanchez S',
      baslik: 'Bacterial contamination of commercial ear cleaners following routine home use',
      dergi: 'Veterinary Dermatology',
      yil: 2011,
      kunye: '22(6):546-553',
      doi: '10.1111/j.1365-3164.2011.00988.x',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/21645141/',
    },
    {
      kurum: 'Royal Veterinary College, VetCompass Programme',
      yazarlar: 'O\'Neill DG, Volk AV, Soares T, Church DB, Brodbelt DC, Pegram C',
      baslik: 'Frequency and predisposing factors for canine otitis externa in the UK - a primary veterinary care epidemiological view',
      dergi: 'Canine Medicine and Genetics',
      yil: 2021,
      kunye: '8(1):7',
      doi: '10.1186/s40575-021-00106-1',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/34488894/',
    },
  ],
};
