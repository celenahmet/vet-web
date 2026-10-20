import type { BlogYazi } from './types';

export const kopekGezdirmeKurallari: BlogYazi = {
  slug: 'kopek-gezdirme-kurallari',
  baslik: 'Tasmasız Köpek Gezdirmek Yasak mı? Köpek Gezdirme Kuralları',
  ozet: 'Evet, halka açık yerde köpeği tasmayla gezdirmek ve dışkısını toplamak yönetmelikle zorunlu. Ağızlık kimlere şart, cezası ne, köpek birine zarar verirse sorumluluk kimde.',
  kapakAlt:
    'Köpek gezdirme kuralları konulu yazının kapak görseli; sonbahar parkında tasmalı köpeğini gezdiren bir kişi',
  kategori: 'Köpek',
  tarih: '2026-10-21',
  bloklar: [
    { kind: 'paragraf', metin: '**Evet, Türkiye\'de halka açık yerlerde köpeği tasmasız gezdirmek kurallara aykırı.** 13 Aralık 2024\'te yürürlüğe giren Hayvanların Korunması Hakkında Uygulama Yönetmeliği\'nin 10. maddesi, sahibin **köpeğini halka açık yerlerde tasmayla kontrol altında dolaştırmasını, pasaportunu yanında bulundurmasını ve dışkısını temizlemesini** yükümlülük olarak sayıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda bu kuralların dayanağını, ağızlığın kimler için zorunlu olduğunu, kurala uyulmadığında hangi yaptırımların gündeme geldiğini ve köpek birine zarar verirse sorumluluğun kimde olduğunu kanun maddeleriyle anlatıyoruz.' },

    { kind: 'baslik', metin: 'Tasmasız köpek gezdirmek yasak mı?' },
    { kind: 'paragraf', metin: 'Kural iki metinden geliyor. [[5199-sayili-kanun|5199 sayılı Hayvanları Koruma Kanunu]]\'nun 5. maddesi sahibi, **hayvanının insanlara verebileceği zarar ve rahatsızlıkları önlemekle** yükümlü tutuyor. Uygulama yönetmeliği bunu somutlaştırıyor: halka açık yerlerde sahipli köpek **tasmayla ve kontrol altında** dolaştırılıyor.' },
    { kind: 'paragraf', metin: 'Yönetmelik tasmanın kendisi için de bir şart koyuyor: kullanılan alet ve ekipman hayvana zarar vermemeli ve ona yeterli hareket özgürlüğü tanımalı. Çocuk oyun alanları, parklar, alışveriş merkezleri, plajlar ve gıda işletmeleri gibi yerlerde ise ayrıca o yerin mevzuatına ve kurallarına uyulması gerekiyor; belediyenin ya da işletmenin koyduğu yasaklar burada geçerli.' },
    { kind: 'yanilgi', baslik: '"Köpeğim çok uysal, tasmaya gerek yok"', metin: 'Kural köpeğin mizacına bakmıyor; halka açık yerde her sahipli köpek için geçerli. Uysal bir köpek de ürkebiliyor, bir çocuğa ya da başka bir köpeğe koşabiliyor. Bir zarar doğduğunda sahibin özen gösterip göstermediği de sorulan ilk şey oluyor.' },

    { kind: 'baslik', metin: 'Tasmasız köpek gezdirmenin cezası nedir?' },
    { kind: 'paragraf', metin: 'Yönetmelik, tasmasız dolaştırmanın kanundaki hangi ceza bendine bağlanacağını ayrıca yazmıyor; denetimde kabahat tespit edilirse idari yaptırım karar tutanağı düzenleniyor. Kanunun 28. maddesinin (b) bendi, 5. maddedeki bakım ve zarar önleme yükümlülüklerine aykırılığa **hayvan başına 1.000 TL** idari para cezası öngörüyor. İdari para cezaları her yıl yeniden değerleme oranıyla arttığı için bu tutar 2026\'da **hayvan başına 8.687 TL**\'ye karşılık geliyor.' },

    { kind: 'baslik', metin: 'Tasmasız köpek gezdirmek suç mu?' },
    { kind: 'paragraf', metin: 'Köpek başkaları için tehlike yaratıyorsa evet. Türk Ceza Kanunu\'nun 177. maddesi, gözetimindeki hayvanı **başkalarının hayatı veya sağlığı bakımından tehlikeli olabilecek şekilde serbest bırakan ya da kontrol altına alınmasında ihmal gösteren** kişiye altı aya kadar hapis veya adli para cezası öngörüyor. Yani sıradan bir tasmasız yürüyüş idari bir konuyken, köpeğin insanlara saldırabilecek şekilde başıboş bırakılması ceza hukukunun alanına giriyor.' },

    { kind: 'baslik', metin: 'Köpek birine zarar verirse sorumluluk kimde?' },
    { kind: 'paragraf', metin: 'Türk Borçlar Kanunu\'nun 67. maddesine göre **hayvanın bakımını ve yönetimini sürekli ya da geçici olarak üstlenen kişi, hayvanın verdiği zararı gidermekle yükümlü.** Sorumluluktan kurtulmanın tek yolu, zararın doğmaması için gerekli özeni gösterdiğini ispat etmek. Köpeği tasmayla, kontrol altında gezdirmek bu özenin en temel göstergesi. 5199 sayılı kanun da yeterli önlem alınmadığı için doğan zararın sahibince tazmin edileceğini söylüyor.' },
    { kind: 'paragraf', metin: 'Köpeğinizi bir arkadaşınıza ya da bir gezdiriciye emanet ettiğinizde de bu kural geçerli: madde, hayvanın yönetimini **geçici olarak** üstlenen kişiyi de kapsıyor.' },

    { kind: 'baslik', metin: 'Köpek dışkısını toplamak zorunlu mu?' },
    { kind: 'paragraf', metin: 'Evet. Uygulama yönetmeliği halka açık yerlerde köpeğin dışkısının sahibince temizlenmesini açıkça istiyor; kanun da sahibi hayvanından kaynaklanan çevre kirliliğini önlemekle yükümlü tutuyor. Dışkı aynı zamanda iç parazitlerin bulaşma yolu; düzenli parazit koruması için [[kopeklerde-ic-ve-dis-parazit|köpeklerde iç ve dış parazit]] yazımıza bakabilirsiniz.' },

    { kind: 'baslik', metin: 'Köpeklere ağızlık takmak zorunlu mu?' },
    { kind: 'paragraf', metin: 'Genel bir ağızlık zorunluluğu yok; zorunluluk **Bakanlıkça tehlike arz eden sayılan ırklar** için. Tarım ve Orman Bakanlığı\'nın 2021/48 sayılı genelgesi bu ırkları şöyle sayıyor:' },
    { kind: 'liste', maddeler: [
      'Amerikan Pitbull Terrier',
      'Dogo Argentino',
      'Fila Brasileiro',
      'Japanese Tosa',
      'American Staffordshire Terrier',
      'American Bully',
    ]},
    { kind: 'paragraf', metin: 'Bu ırkları ve melezlerini üretmek, sahiplenmek, satmak ve sahiplendirmek kanunla yasak. Süresi içinde kısırlaştırılıp kayda alınarak sahibinin yanında kalan köpekler ise **kayıt belgesi, ağızlık ve tasma olmadan dolaştırılamıyor;** kalabalık yerlere, çocuk oyun alanlarına ve parklara sokulamıyor.' },

    { kind: 'baslik', metin: 'Köpek gezdirirken yanınızda olması gerekenler' },
    { kind: 'liste', maddeler: [
      '**Tasma:** Köpeğe zarar vermeyen, kontrolü sağlayan bir tasma ve gezdirme kayışı.',
      '**Pasaport:** Yönetmelik halka açık yerde köpeğin pasaportunun yanınızda bulunmasını istiyor. Pasaport, [[petvet-kayit|PETVET kaydıyla]] birlikte düzenleniyor.',
      '**Dışkı torbası:** Dışkıyı toplayıp çöpe atmak için.',
      '**Ağızlık ve kayıt belgesi:** Yalnız tehlike arz eden ırklar için zorunlu.',
    ]},

    { kind: 'baslik', metin: 'Tasmasız köpek gezdirenler nereye şikâyet edilir?' },
    { kind: 'paragraf', metin: 'Yönetmeliğe göre 5199 sayılı kanun ve yönetmeliğe uyulup uyulmadığını denetleme yetkisi **Tarım ve Orman Bakanlığı\'nda;** bu nedenle başvuru yeri il veya ilçe tarım ve orman müdürlüğü. Park, plaj gibi belediye alanlarındaki kurallar için belediyeye başvurulabiliyor. Bir köpek o anda insanlar için tehlike oluşturuyorsa 112\'yi arayın.' },
    { kind: 'uyari', metin: 'Bir köpek ısırdıysa vakit kaybetmeden bir sağlık kuruluşuna başvurun; kuduz riskini sağlık kuruluşu değerlendirir. Köpeğin sahibine ulaşabiliyorsanız köpeğin aşı bilgisini isteyin.' },
  ],
  sss: [
    { soru: 'Tasmasız köpek gezdirmek yasak mı?', cevap: 'Evet; 2024 tarihli uygulama yönetmeliği halka açık yerlerde köpeğin tasmayla kontrol altında dolaştırılmasını istiyor.' },
    { soru: 'Tasmasız köpek gezdirmenin cezası ne kadar?', cevap: 'Kanunun 28/b bendindeki tutar hayvan başına 1.000 TL; yeniden değerlemeyle 2026 karşılığı 8.687 TL.' },
    { soru: 'Tasmasız köpek gezdirmek suç mu?', cevap: 'Köpek başkalarının hayatı veya sağlığı için tehlike yaratıyorsa TCK 177 gereği altı aya kadar hapis veya adli para cezası var.' },
    { soru: 'Köpek dışkısını toplamak zorunlu mu?', cevap: 'Evet; yönetmelik halka açık yerlerde dışkının sahibince temizlenmesini istiyor.' },
    { soru: 'Hangi köpeklere ağızlık zorunlu?', cevap: 'Bakanlığın tehlike arz eden saydığı altı ırka ve melezlerine; diğer köpekler için genel bir ağızlık zorunluluğu yok.' },
    { soru: 'Köpeğim birini ısırırsa sorumlu kim olur?', cevap: 'Borçlar Kanunu 67. madde gereği köpeğin bakımını ve yönetimini üstlenen kişi; gerekli özeni ispat ederse sorumlu olmaz.' },
    { soru: 'Tasmasız köpek gezdirenler nereye şikâyet edilir?', cevap: 'İl veya ilçe tarım ve orman müdürlüğüne; o anda tehlike varsa 112\'ye.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Hayvanların Korunması Hakkında Uygulama Yönetmeliği (13.12.2024, sayı 32751)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2024/12/20241213-3.htm',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 5, 14, 28 ve geçici madde 3)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı Doğa Koruma ve Milli Parklar Genel Müdürlüğü',
      baslik: 'Tehlike Arz Eden Hayvanlara İlişkin Genelge (2021/48)',
      adres: 'https://www.tarimorman.gov.tr/DKMP/Haber/209/Tehlike-Arz-Eden-Hayvanlara-Iliskin-Genelge',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5237 sayılı Türk Ceza Kanunu (madde 177)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5237&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '6098 sayılı Türk Borçlar Kanunu (madde 67)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=6098&MevzuatTertip=5',
    },
  ],
};
