import type { BlogYazi } from './types';

export const kediAsiTakvimi: BlogYazi = {
  slug: 'kedi-asi-takvimi',
  baslik: 'Kedi Aşı Takvimi Nasıl Olmalı? Yavru ve Yetişkin Kedide Aşılar',
  ozet: 'Yavru kedide karma aşı 8-9 haftada başlar, 3-4 hafta arayla tekrarlanır. Kuduz 12. haftadan sonra yapılır ve yıllık tekrarı vardır. Tam takvim ve sık yapılan hatalar.',
  kategori: 'Kedi',
  tarih: '2026-08-23',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru kedilerde aşı takvimi genellikle **8-9 haftalıkken** karma aşı ile başlıyor, **3-4 hafta arayla** tekrarlanıyor ve **kuduz aşısı 12. haftadan sonra** ekleniyor. Yetişkinlikte ise yıllık tekrar düzeni kuruluyor.' },
    { kind: 'paragraf', metin: 'Bu bir şablon, reçete değildir. Kedinin yaşı, sağlık durumu, dışarı çıkıp çıkmadığı ve annesinden aldığı bağışıklık takvimi değiştiriyor. Aşağıda hem genel düzeni hem de en sık yapılan hataları bulacaksınız.' },

    { kind: 'baslik', metin: 'Yavru kedide aşı takvimi' },
    { kind: 'tablo', basliklar: ['Yaş', 'Yapılan', 'Not'], satirlar: [
      ['6-8 hafta', 'İlk muayene, iç parazit', 'Aşı öncesi parazit temizliği yapılır'],
      ['8-9 hafta', 'Karma aşı, ilk doz', 'Panlökopeni, kalisivirüs, rinotrakeit'],
      ['11-13 hafta', 'Karma aşı, ikinci doz', 'Aradaki süre 3-4 hafta'],
      ['12-16 hafta', 'Kuduz aşısı', 'Türkiye\'de yasal olarak gerekli'],
      ['15-17 hafta', 'Karma aşı, üçüncü doz', 'Veteriner hekim gerekli görürse'],
      ['12 ay', 'Yıllık tekrarlar başlar', 'Karma ve kuduz'],
    ]},
    { kind: 'paragraf', metin: 'Lösemi (FeLV) aşısı bu tablonun yanında ayrıca değerlendiriliyor. Cornell Üniversitesi Veteriner Fakültesi bu aşıyı **yavru kedilerde temel aşı** olarak tanımlıyor; sebebi, yavrularda hastalığın ilerleyici seyretme ihtimalinin daha yüksek olması. Yetişkinlerde ise kedinin dışarı çıkıp çıkmadığına ve başka kedilerle temasına göre karar veriliyor.' },
    { kind: 'paragraf', metin: 'Eve yeni kedi alınırken **önce test** yapılması öneriliyor. Aynı kaynak, bütün kedilerin eve girmeden önce FeLV açısından test edilmesi gerektiğini söylüyor; özellikle evde başka kedi varsa bu adım isteğe bağlı değil.' },

    { kind: 'yanilgi', baslik: '"Anne sütü aldı, aşıya gerek yok" yanılgısı', metin: 'Anneden gelen bağışıklık gerçek ama geçici; 8-12 hafta arasında sönüyor. Üstelik bu bağışıklık, erken yapılan aşının işe yaramasını da engelleyebiliyor. Aşı takviminin birden fazla dozdan oluşmasının sebebi tam olarak bu: anne bağışıklığının ne zaman söndüğü kediden kediye değişiyor ve tekrar dozları o boşluğu kapatıyor.' },

    { kind: 'baslik', metin: 'Karma aşı neye karşı koruyor' },
    { kind: 'liste', maddeler: [
      '**Panlökopeni:** yavrularda ölümcül seyredebilen, bağışıklığı çökerten viral hastalık',
      '**Kalisivirüs:** ağız yaraları, üst solunum yolu enfeksiyonu',
      '**Rinotrakeit (herpes):** göz ve burun akıntısı, kronikleşebiliyor',
    ]},
    { kind: 'paragraf', metin: 'Bu üçü bir arada uygulandığı için "karma" deniyor. Bazı aşılarda klamidya da ekleniyor.' },

    { kind: 'baslik', metin: 'Yetişkin kedide düzen' },
    { kind: 'paragraf', metin: 'Yavruluk serisi tamamlandıktan sonra yıllık tekrar düzenine geçiliyor. Kuduz aşısının tekrarı Türkiye\'de yasal bir yükümlülük ve kayıt altına alınıyor.' },
    { kind: 'paragraf', metin: 'Karma aşının tekrar sıklığı konusunda ise uygulama ürüne ve kedinin yaşam biçimine göre değişebiliyor: ev içinde yaşayan ve hiç dışarı çıkmayan bir kedide düzen farklı kurulabiliyor. Bu kararı, kediyi gören veteriner hekim veriyor.' },
    { kind: 'yanilgi', baslik: '"Ev kedisi, aşıya gerek yok" yanılgısı', metin: 'Ev kedisi risksiz değildir, riski düşüktür. Panlökopeni virüsü ayakkabı tabanıyla eve girebiliyor, dayanıklı bir virüs. Ayrıca kedinin bir gün kaçması, kliniğe ya da pansiyona gitmesi, eve yeni bir hayvan gelmesi ihtimali var. Kuduz aşısı ise yaşam biçiminden bağımsız olarak yasal bir yükümlülük.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Aşı ve tedavi programını, hayvanı gören veteriner hekim belirler.' },

    { kind: 'baslik', metin: 'Aşı öncesinde ve sonrasında' },
    { kind: 'altBaslik', metin: 'Öncesinde' },
    { kind: 'liste', maddeler: [
      'Kedi sağlıklı olmalı, ateşi ya da ishali varsa aşı ertelenir',
      'İç parazit uygulaması aşıdan önce yapılır, parazit yükü aşının etkisini düşürüyor',
      'Yeni sahiplenilen kedide birkaç gün gözlem önerilir',
    ]},
    { kind: 'altBaslik', metin: 'Sonrasında' },
    { kind: 'paragraf', metin: 'Aşı sonrası bir iki gün halsizlik, iştahta hafif azalma ve aşı yerinde hassasiyet normal kabul ediliyor. Ancak yüzde şişlik, kusma, kaşıntı ya da nefes almakta zorlanma varsa **hemen** kliniğe dönülmeli; bunlar alerjik tepki belirtisi.' },

    { kind: 'baslik', metin: 'En sık yapılan hata: tekrarın kaçırılması' },
    { kind: 'paragraf', metin: 'Aşı takviminde en çok sorun çıkaran şey ilk dozun yapılmaması değil, **ikinci ve üçüncü dozun unutulması**. Tek doz yapılmış bir yavru, aşılanmış sayılmıyor; seri tamamlanmadan koruma oluşmuyor.' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Bir doz yapıldı, korunuyor', 'Yavruluk serisi tamamlanmadan koruma tam değil'],
      ['Birkaç hafta gecikti, baştan başlamak gerekir', 'Çoğu durumda kaldığı yerden devam ediliyor, karar hekimin'],
      ['Aşı kartı kaybolursa önemli değil', 'Kayıt yoksa takvim yeniden kurulur, gereksiz doz yapılabilir'],
      ['Kuduz aşısı isteğe bağlı', 'Türkiye\'de yasal yükümlülük ve seyahat için şart'],
      ['Aşılıysa hiç hastalanmaz', 'Aşı riski düşürür, sıfırlamaz; hastalık daha hafif seyreder'],
    ]},
    { kind: 'paragraf', metin: 'Aşı kartını kaybetmek sanılandan sık oluyor. Tarihleri telefonda tutmak, kartı kaybetseniz bile takvimin bozulmamasını sağlıyor. Veterito bu takvimi kediniz için tutuyor ve tekrar tarihi yaklaşınca hatırlatıyor; uygulama ücretsiz.' },
  ],
  kaynaklar: [
    {
      etiket: 'Cornell University College of Veterinary Medicine — Feline Leukemia Virus',
      adres: 'https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center/health-information/feline-health-topics/feline-leukemia-virus',
    },
  ],
  sss: [
    { soru: 'Yavru kediye ilk aşı kaç haftalıkken yapılır?', cevap: 'Genellikle 8-9 haftalıkken karma aşı ile başlanıyor. Öncesinde iç parazit uygulaması yapılıyor. Kesin zamanı, yavrunun sağlık durumuna bakarak veteriner hekim belirliyor.' },
    { soru: 'Kedi aşısı kaç doz yapılır?', cevap: 'Yavrulukta karma aşı genellikle 2-3 doz, 3-4 hafta arayla uygulanıyor. Kuduz 12. haftadan sonra tek doz yapılıp yıllık tekrarlanıyor.' },
    { soru: 'Aşı tekrarını kaçırdım, baştan mı başlamalıyım?', cevap: 'Çoğu durumda kaldığı yerden devam ediliyor, ama gecikme uzunsa hekim seriyi yenilemeyi tercih edebiliyor. Kendi başınıza karar vermek yerine kaç gün geciktiğinizi söyleyip sorun.' },
    { soru: 'Ev kedisine kuduz aşısı gerekli mi?', cevap: 'Evet. Türkiye\'de kuduz aşısı yasal bir yükümlülük ve kedinin dışarı çıkıp çıkmamasından bağımsız. Ayrıca seyahat ve pansiyon için de isteniyor.' },
    { soru: 'Aşı sonrası kedim halsiz, normal mi?', cevap: 'Bir iki gün süren hafif halsizlik ve iştah azalması normal kabul ediliyor. Yüzde şişlik, kusma, kaşıntı ya da nefes darlığı varsa hemen kliniğe dönün.' },
    { soru: 'Sokaktan aldığım yetişkin kediye aşı yapılır mı?', cevap: 'Evet. Aşı geçmişi bilinmeyen yetişkin kedilerde seri yeniden kuruluyor. Önce genel muayene ve gerekirse bulaşıcı hastalık testi yapılıyor, sonra takvim başlatılıyor.' },
  ],
};
