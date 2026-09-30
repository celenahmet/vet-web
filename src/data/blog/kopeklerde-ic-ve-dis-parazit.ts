import type { BlogYazi } from './types';

/**
 * SAGLIK. Plan no 6. Takvim ve risk gruplari ESCCAP Guideline 01 (7. baski, Haziran
 * 2025) PDF'inden okundu; dis parazit bolumu ESCCAP Guideline 03 (7. baski, Ocak
 * 2022); Turkiye'deki kist hidatik verisi Altintas 2003 (Ege Universitesi, Acta
 * Tropica, PubMed'den kopyalandi). 30.09.2026.
 *
 * Okuyucu kalir mi (Ahmet 30.09): cevap ilk paragrafta ve risk tablosunda; okuyucu
 * kendi kopeginin satirini bulup gecsin diye tablo yasam bicimine gore. Bolumler
 * yavru -> yetiskin -> ev -> sakatat -> dis parazit -> urun sirasiyla ilerliyor.
 */
export const kopeklerdeIcVeDisParazit: BlogYazi = {
  slug: 'kopeklerde-ic-ve-dis-parazit',
  baslik: 'Köpeklere İç ve Dış Parazit Ne Zaman Yapılır?',
  ozet: 'Yavru köpekte program 2 haftalıkken başlıyor; yetişkinde sıklığı yaşam biçimi belirliyor. Evde yaşayan, dışarı çıkan ve sakatat yiyen köpeğin takvimi aynı değil.',
  kapakAlt:
    'Köpeklerde iç ve dış parazit uygulaması konulu yazının kapak görseli; yaşam biçimine göre uygulama sıklığı',
  kategori: 'Sağlık',
  tarih: '2026-10-02',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru köpekte iç parazit uygulaması **2 haftalıkken** başlıyor ve sütten kesildikten 2 hafta sonrasına kadar 2 haftada bir tekrarlanıyor; enfeksiyon riski sürüyorsa 6 aylığa kadar ayda bir devam ediyor. Yetişkin köpekte sıklığı yaşam biçimi belirliyor: Avrupa Evcil Hayvan Parazitleri Bilim Konseyi’nin (ESCCAP) 2025 kılavuzuna göre yalnız ev içinde yaşayan köpekte yılda 1-2 kez, düzenli dışarı çıkıp başka köpeklerle karşılaşan köpekte yılda 4 kez, avlanan ya da çiğ et, sakatat yiyen köpekte ayda bire kadar. Risk belirlenemiyorsa en az yılda 4 kez öneriliyor.' },
    { kind: 'paragraf', metin: 'Dış parazitte takvim mevsime değil eve bakıyor: pire yıl boyu görülebildiği için çoğu evde koruma kesintisiz sürüyor, kene mevsiminde ise korumanın arası açılmıyor. Aşağıdaki tablo kendi köpeğinizin satırını bulmanız için; sonraki bölümler her satırın nedenini ve Türkiye’de özellikle önemli olan sakatat konusunu açıyor.' },

    { kind: 'tablo', basliklar: ['Köpeğin durumu', 'İç parazit sıklığı (ESCCAP 2025)'], satirlar: [
      ['Yavru, 2 haftalıktan itibaren', '2 haftada bir, sütten kesildikten 2 hafta sonrasına kadar; risk sürüyorsa 6 aya kadar ayda bir'],
      ['Yalnız ev içinde, başka köpekle teması yok', 'Yılda 1-2 kez'],
      ['Düzenli dışarı çıkıyor, başka köpeklerle karşılaşıyor', 'Yılda 4 kez'],
      ['Avlanıyor, çiğ et, sakatat ya da salyangoz yiyor', 'Yılda 4-12 kez; şeride karşı ayda bire kadar'],
      ['Evde 5-6 yaşından küçük çocuk ya da bağışıklığı zayıf biri var', 'Ayda bir ya da ayda bir dışkı incelemesi'],
      ['Risk belirlenemiyor', 'En az yılda 4 kez'],
    ] },

    { kind: 'baslik', metin: 'Yavru köpekte program ikinci haftada başlıyor' },
    { kind: 'paragraf', metin: 'Yavru köpek, dış dünyayla hiç karşılaşmadan da parazitli olabiliyor. ESCCAP’a göre gebe dişi, köpeklerin yuvarlak solucanı Toxocara canis’in larvalarını doğumdan önce yavruya, doğumdan sonra da sütle aktarabiliyor. Bu yüzden ilk uygulama 14. günde yapılıyor ve anne de yavrularla birlikte tedavi ediliyor.' },
    { kind: 'paragraf', metin: 'Sütten kesme döneminden sonra da risk sürüyorsa, örneğin yavru başka yavrularla aynı ortamda oynuyorsa, uygulama 6 aylığa kadar ayda bir tekrarlanıyor. Bu dönem aşı programıyla çakıştığı için ikisi çoğunlukla aynı ziyarette planlanıyor; aşıların sırası [[kopek-asi-takvimi|köpek aşı takvimi]] yazısında.' },

    { kind: 'baslik', metin: 'Yetişkin köpekte sıklığı yaşam biçimi belirliyor' },
    { kind: 'paragraf', metin: 'ESCCAP yetişkin köpekleri parazitle karşılaşma ihtimaline göre gruplara ayırıyor. Belirleyici olan köpeğin kendisi değil, gün içinde neye dokunduğu ve ne yediği: parkta başka köpeklerin dışkısıyla kirlenmiş toprak, avladığı kemirgen, bahçede yediği salyangoz ya da kendisine verilen çiğ et.' },
    { kind: 'liste', maddeler: [
      'Yalnız ev içinde yaşayan, parka ve bahçeye çıkmayan, başka köpekle teması olmayan köpek en düşük risk grubunda',
      'Düzenli dışarı çıkan, sahipsiz dolaşabilen ve başka köpeklerle karşılaşan köpek orta risk grubunda',
      'Avlanan, leş ya da sakatat yiyen, çiğ etle beslenen köpek en yüksek risk grubunda',
      'Salyangoz ve sümüklüböcek yeme eğilimi, akciğer kurdu riski nedeniyle aralığı ayrıca kısaltıyor',
    ] },
    { kind: 'paragraf', metin: 'Aynı kılavuz ilaç yerine dışkı incelemesini de geçerli bir yol olarak kabul ediyor: önerilen sıklıkta dışkı bakılıp sonuca göre tedavi edilebiliyor. Şerit için ise dışkı testinin güvenilirliği düşük olduğundan tedavi çoğunlukla takvimle sürdürülüyor.' },

    { kind: 'yanilgi', baslik: '"Parazit görmüyorsam köpeğimde parazit yoktur" yanılgısı', metin: 'Bağırsak parazitlerinin çoğu dışkıda gözle görülmüyor; görülenler genellikle şerit halkaları oluyor ve onlar da her zaman çıkmıyor. Belirti beklemek, bulaşın uzun süre fark edilmemesi demektir. ESCCAP programı belirtiye değil riske göre kuruyor.' },

    { kind: 'baslik', metin: 'Evde küçük çocuk varsa aralık kısalıyor' },
    { kind: 'paragraf', metin: 'Köpeklerin yuvarlak solucanı insana da geçebiliyor ve bulaş çoğunlukla kirlenmiş toprak, kum ya da ellerle oluyor. ESCCAP bu nedenle evde **5-6 yaşından küçük çocuk**, bağışıklığı baskılanmış ya da yaşlı biri varsa ayda bir parazit uygulaması ya da ayda bir dışkı incelemesi öneriyor.' },
    { kind: 'liste', maddeler: [
      'Köpeğin dışkısı bahçede ve parkta hemen toplanıyor',
      'Çocukların oynadığı kum havuzu kullanılmadığında kapalı tutuluyor',
      'Köpekle oynadıktan sonra, özellikle yemekten önce eller yıkanıyor',
      'Yeni gelen yavru, evdeki diğer hayvanlarla karışmadan önce kontrol ediliyor',
    ] },

    { kind: 'baslik', metin: 'Sakatat ve av, Türkiye’de şerit riskini büyütüyor' },
    { kind: 'paragraf', metin: 'Kist hidatik hastalığına yol açan köpek şeridi Echinococcus granulosus, köpek ile koyun arasında dolaşan bir döngüye sahip: köpek, parazitli organı yiyerek şerit kapıyor, dışkısıyla attığı yumurtalar da insana ve hayvanlara geçiyor. Ege Üniversitesi’nden Altıntaş’ın derlemesine göre hastalık Türkiye’nin her yerinde görülüyor; köpeklerde yaygınlık bölgeye göre yüzde 0,32 ile 40 arasında değişiyor ve Sağlık Bakanlığı kayıtlarında 1987-1994 arasında yılda ortalama yaklaşık 2663 kişi kist hidatik nedeniyle ameliyat edilmiş.' },
    { kind: 'paragraf', metin: 'ESCCAP bu şeridin görüldüğü bölgelerde sakatata ya da hayvan leşine erişimi olan köpeklerin **en az 6 haftada bir** bu parazite etkili bir ürünle tedavi edilmesini, beslenmenin ise hazır mama ya da pişmiş yemekle yapılmasını öneriyor. Kesim dönemlerinde, örneğin kurban bayramında, çiğ sakatatın köpeğe verilmemesi bu yüzden önemlidir.' },

    { kind: 'yanilgi', baslik: '"Sakatat köpeğin doğal besinidir, zararı olmaz" yanılgısı', metin: 'Çiğ sakatat, kist hidatik şeridinin köpeğe geçtiği başlıca yoldur. Köpek bu şeritle genellikle hasta görünmüyor ama yumurtaları çevreye ve insana yayabiliyor. Pişirilmiş ya da hazır mama tercih edildiğinde bu yol kapanıyor.' },

    { kind: 'baslik', metin: 'Pire yıl boyu, kene mevsimle ama kesintisiz' },
    { kind: 'paragraf', metin: 'ESCCAP’ın dış parazit kılavuzuna göre pire yaz ve sonbaharda artıyor ama yılın her döneminde görülebiliyor; bu nedenle yıl boyu koruma gerekebiliyor. Koruma başarısızlığının en sık iki nedeni evdeki bütün hayvanların aynı anda tedavi edilmemesi ve ürünün talimata uygun uygulanmamasıdır.' },
    { kind: 'paragraf', metin: 'Keneler sıcak iklimlerde ilkbahar ve yazın yoğunlaşıyor ama yıl boyu beslenebiliyor. Kene, köpeklerde babesiozis ve ehrlichiozis gibi kan parazitlerini taşıdığı için kene mevsiminde korumanın arası açılmıyor. Köpekte kene bulunduğunda ESCCAP, mevsimin geri kalanında o köpek ve birlikte yaşadığı bütün hayvanlar için korumanın sürdürülmesini öneriyor.' },
    { kind: 'paragraf', metin: 'Kalp kurdunun görüldüğü bölgelerde aynı kılavuz sivrisinek mevsimi boyunca aylık koruyucu ya da uzun etkili enjeksiyon öneriyor. Yaşadığınız bölgenin durumunu veteriner hekim biliyor; tatil için başka bir bölgeye gidilecekse programın buna göre güncellenmesi gerekiyor.' },

    { kind: 'yanilgi', baslik: '"Kışın parazit ilacına gerek yok" yanılgısı', metin: 'Isıtılan evlerde pire yıl boyu yaşayabiliyor ve keneler sıcak iklimlerde kışın da beslenebiliyor. Kışın korumayı bırakmak, baharda sorunun büyümüş olarak geri gelmesi demektir. Program mevsime göre değil, köpeğin ortamına göre kuruluyor.' },

    { kind: 'baslik', metin: 'Ürünler aynı şeyi kapsamıyor, kedili evde dikkat' },
    { kind: 'paragraf', metin: 'Damla, tablet ve tasma farklı etken maddeler taşıyor ve her biri farklı parazitleri kapsıyor. Bir ürünün pireye etkili olması keneye ya da iç parazite de etkili olduğu anlamına gelmiyor. Bu yüzden "parazit yapıldı" bilgisi tek başına yetmiyor; hangi ürünün hangi tarihte uygulandığı kayıt altında tutuluyor.' },
    { kind: 'paragraf', metin: 'ESCCAP, köpekler için onaylı bazı sentetik piretroit içeren ürünlerin kediler için zehirli olabileceğini ve kedi ile köpeğin birlikte yaşadığı evlerde bu ürünlerden kaçınılmasını ya da etiketine uygun dikkatle kullanılmasını belirtiyor. Kedinin programı ayrıca kuruluyor; ayrıntılar [[kedilerde-ic-ve-dis-parazit|kedilerde iç ve dış parazit]] yazısında.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Parazit ürünü ve uygulama aralığı, köpeği gören veteriner hekim tarafından yaşam biçimine ve bölgeye göre belirlenir. Köpek için üretilmiş dış parazit ürünleri kedilere uygulanmaz.' },

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Her köpeğe yılda bir kez yeter', 'Sıklık yaşam biçimine göre yılda 1 ile 12 arasında değişiyor'],
      ['Yavruya parazit aşılardan sonra başlar', 'İlk uygulama 14. günde yapılıyor'],
      ['Kışın dış parazite gerek yok', 'Pire yıl boyu görülebiliyor, kene kışın da beslenebiliyor'],
      ['Sakatat köpeğe zarar vermez', 'Çiğ sakatat kist hidatik şeridinin başlıca bulaş yolu'],
      ['Köpeğin ürünü kediye de olur', 'Bazı köpek ürünleri kediler için zehirli'],
    ] },
    { kind: 'paragraf', metin: 'Dışkı incelemesi yıllık kontrolün doğal bir parçası; hangi yaşta hangi kontrollerin öne çıktığı [[kedi-kopek-check-up-ne-zaman|check-up ne zaman yapılmalı]] yazısında anlatılıyor.' },
  ],
  kontrolListesi: [
    'Son iç parazit tarihi kayıtlı mı?',
    'Köpeğin risk grubu belirlendi mi?',
    'Evdeki tüm hayvanlar kapsandı mı?',
    'Dış parazit koruması güncel mi?',
    'Çiğ sakatat veriliyor mu?',
    'Bir sonraki tarih takvimde mi?',
  ],
  sss: [
    { soru: 'Köpeklere iç parazit kaç ayda bir yapılır?', cevap: 'Sıklığı köpeğin yaşam biçimi belirliyor. ESCCAP’ın 2025 kılavuzuna göre yalnız ev içinde yaşayan köpekte yılda 1-2 kez, düzenli dışarı çıkıp başka köpeklerle karşılaşan köpekte yılda 4 kez, avlanan ya da çiğ et yiyen köpekte ayda bire kadar uygulanıyor. Risk belirlenemiyorsa en az yılda 4 kez öneriliyor.' },
    { soru: 'Yavru köpeğe ilk iç parazit ne zaman yapılır?', cevap: 'İlk uygulama yavru 14 günlükken yapılıyor ve sütten kesildikten 2 hafta sonrasına kadar 2 haftada bir tekrarlanıyor. Enfeksiyon riski sürüyorsa 6 aylığa kadar ayda bir devam ediliyor. Yuvarlak solucan anneden yavruya doğumdan önce ve sütle geçebildiği için anne de aynı dönemde tedavi ediliyor.' },
    { soru: 'Köpeklere dış parazit kışın da yapılır mı?', cevap: 'Çoğu evde evet. ESCCAP’a göre pire yılın her döneminde görülebiliyor ve ısıtılan evlerde yıl boyu yaşayabiliyor; keneler de sıcak iklimlerde kışın beslenebiliyor. Bu yüzden koruma çoğunlukla yıl boyu sürüyor, kene mevsiminde ise arası kesinlikle açılmıyor.' },
    { soru: 'Evde çocuk varsa köpeğe ne sıklıkla parazit yapılmalı?', cevap: 'ESCCAP, evde 5-6 yaşından küçük çocuk, bağışıklığı baskılanmış ya da yaşlı biri varsa ayda bir parazit uygulaması ya da ayda bir dışkı incelemesi öneriyor. Köpeklerin yuvarlak solucanı insana kirlenmiş toprak ve kum yoluyla geçebildiği için bu evlerde aralık kısalıyor; dışkının hemen toplanması da önemli.' },
    { soru: 'Köpeğe çiğ sakatat verilir mi?', cevap: 'Verilmemesi öneriliyor. Çiğ sakatat, kist hidatik hastalığına yol açan köpek şeridinin başlıca bulaş yolu ve bu hastalık Türkiye’nin her bölgesinde görülüyor. ESCCAP beslenmenin hazır mama ya da pişmiş yemekle yapılmasını, sakatata erişimi olan köpeklerin ise en az 6 haftada bir tedavi edilmesini öneriyor.' },
    { soru: 'Köpeğimin pire ilacını kediye kullanabilir miyim?', cevap: 'Hayır. ESCCAP’a göre köpekler için onaylı bazı sentetik piretroit içeren dış parazit ürünleri kediler için zehirli olabiliyor. Kedi ile köpeğin birlikte yaşadığı evlerde bu ürünlerden kaçınılması ya da etiketine uygun dikkatle kullanılması gerekiyor; her hayvana kendi türü için üretilmiş ürün uygulanıyor.' },
  ],
  kaynaklar: [
    {
      kurum: 'European Scientific Counsel Companion Animal Parasites (ESCCAP)',
      baslik: 'Worm Control in Dogs and Cats. ESCCAP Guideline 01, Seventh Edition',
      yil: 2025,
      adres: 'https://www.esccap.org/uploads/docs/ag51r456_0778_ESCCAP_GL1__English_2026_v23.pdf',
    },
    {
      kurum: 'European Scientific Counsel Companion Animal Parasites (ESCCAP)',
      baslik: 'Control of Ectoparasites in Dogs and Cats. ESCCAP Guideline 03, Seventh Edition',
      yil: 2022,
      adres: 'https://www.esccap.org/uploads/docs/cgqtqpf1_0720_ESCCAP_GL3__English_v19_1p.pdf',
    },
    {
      kurum: 'Ege Üniversitesi Tıp Fakültesi, Parazitoloji Anabilim Dalı',
      yazarlar: 'Altintas N',
      baslik: 'Past to present: echinococcosis in Turkey',
      dergi: 'Acta Tropica',
      yil: 2003,
      kunye: '85(2):105-112',
      doi: '10.1016/s0001-706x(02)00213-9',
      adres: 'https://pubmed.ncbi.nlm.nih.gov/12606087/',
    },
  ],
};
