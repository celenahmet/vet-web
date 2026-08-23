import type { BlogYazi } from './types';

export const kopekAsiTakvimi: BlogYazi = {
  slug: 'kopek-asi-takvimi',
  baslik: 'Köpek Aşı Takvimi Nasıl Olmalı? Yavru ve Yetişkin Köpekte Aşılar',
  ozet: 'Yavru köpekte karma aşı 6-8 haftada başlar ve 16. haftaya kadar 3-4 hafta arayla tekrarlanır. Kuduz 12. haftadan sonra yapılır. Tam takvim ve sosyalleşme ikilemi.',
  kategori: 'Köpek',
  tarih: '2026-08-23',
  bloklar: [
    { kind: 'paragraf', metin: 'Yavru köpeklerde karma aşı genellikle **6-8 haftalıkken** başlıyor, **3-4 hafta arayla** ve **16. haftaya kadar** tekrarlanıyor. Kuduz aşısı 12. haftadan sonra ekleniyor ve yıllık tekrarı bulunuyor.' },
    { kind: 'paragraf', metin: 'Köpeklerde seri kedilerden biraz daha uzun sürüyor. Sebebi parvovirüs: yavrularda çok hızlı ve çok ölümcül seyrediyor, anneden gelen bağışıklık ise bazı yavrularda 16. haftaya kadar aşının etkisini bloke edebiliyor. Seri bu yüzden geç bitiyor.' },

    { kind: 'baslik', metin: 'Yavru köpekte aşı takvimi' },
    { kind: 'tablo', basliklar: ['Yaş', 'Yapılan', 'Not'], satirlar: [
      ['4-6 hafta', 'İlk muayene, iç parazit', 'Aşı öncesi parazit temizliği'],
      ['6-8 hafta', 'Karma aşı, ilk doz', 'Gençlik hastalığı, hepatit, parvovirüs, parainfluenza'],
      ['9-11 hafta', 'Karma aşı, ikinci doz', 'Leptospiroz genelde bu dozla ekleniyor'],
      ['12-14 hafta', 'Karma aşı üçüncü doz ve kuduz', 'Kuduz Türkiye\'de yasal olarak gerekli'],
      ['15-16 hafta', 'Karma aşı, son doz', 'Serinin tamamlanması bu dozla oluyor'],
      ['12 ay', 'Yıllık tekrarlar başlar', 'Karma, leptospiroz ve kuduz'],
    ]},
    { kind: 'paragraf', metin: 'Bronşiyoseptika (kennel cough) aşısı bu tablonun dışında, ihtiyaca göre ekleniyor: pansiyona giden, köpek parkı kullanan ya da eğitim grubuna katılan köpeklerde öneriliyor.' },

    { kind: 'baslik', metin: 'Karma aşı neye karşı koruyor' },
    { kind: 'liste', maddeler: [
      '**Parvovirüs:** yavrularda kanlı ishal ve hızlı sıvı kaybıyla seyreden, tedavi edilmezse ölümcül',
      '**Gençlik hastalığı (distemper):** solunum, sindirim ve sinir sistemini tutan viral hastalık',
      '**Hepatit (adenovirüs):** karaciğer tutulumu',
      '**Parainfluenza:** solunum yolu enfeksiyonu, kennel cough tablosuna katkıda bulunuyor',
      '**Leptospiroz:** bakteriyel, böbrek ve karaciğeri tutuyor ve **insana da bulaşabiliyor**',
    ]},
    { kind: 'paragraf', metin: 'Leptospiroz diğerlerinden farklı: bakteriyel olduğu için bağışıklık daha kısa sürüyor ve genellikle iki doz gerekiyor. İnsana bulaşabilen bir hastalık olması da onu ayrı bir başlık yapıyor.' },

    { kind: 'yanilgi', baslik: 'Sosyalleşme ile aşı arasındaki ikilem', metin: 'Yavru köpeklerde sosyalleşme penceresi 3-16 hafta arasında ve bu pencere kapanınca bir daha açılmıyor. Ama aynı dönemde aşı serisi henüz bitmemiş oluyor. "Aşılar bitene kadar hiç dışarı çıkarma" tavsiyesi hastalıktan koruyor ama davranış sorunlarına açık kapı bırakıyor. Doğru olan tam izolasyon değil, kontrollü sosyalleşme: aşıları tam olan sağlıklı köpeklerle, temiz ve tanıdık ortamlarda, sokak köpeklerinin yoğun kullandığı alanlardan uzak. Bu dengeyi veteriner hekiminizle konuşun.' },

    { kind: 'uyari', metin: 'Bu içerik genel bilgidir, tıbbi tavsiye değildir. Aşı ve tedavi programını, hayvanı gören veteriner hekim belirler.' },

    { kind: 'baslik', metin: 'Yetişkin köpekte düzen' },
    { kind: 'paragraf', metin: 'Yavruluk serisi bittikten sonra yıllık tekrar düzenine geçiliyor. Kuduz aşısının tekrarı Türkiye\'de yasal yükümlülük ve kayıt altına alınıyor. Leptospiroz da bağışıklık süresi kısa olduğu için yıllık tekrarlanıyor.' },
    { kind: 'paragraf', metin: 'Karma aşının bazı bileşenlerinde tekrar aralığı ürüne göre değişebiliyor. Bu kararı, köpeği gören veteriner hekim veriyor.' },

    { kind: 'baslik', metin: 'Aşı öncesinde ve sonrasında' },
    { kind: 'liste', maddeler: [
      'Köpek sağlıklı olmalı; ateş, ishal ya da kusma varsa aşı erteleniyor',
      'İç parazit uygulaması aşıdan önce yapılıyor',
      'Yeni sahiplenilen köpekte birkaç gün gözlem öneriliyor',
      'Aşı sonrası bir iki gün halsizlik ve aşı yerinde hassasiyet normal',
      'Yüzde şişlik, kusma, kaşıntı ya da nefes darlığı varsa hemen kliniğe dönülmeli',
    ]},

    { kind: 'baslik', metin: 'Yaygın yanlışlar ve doğruları' },
    { kind: 'tablo', basliklar: ['Yaygın yanlış', 'Doğrusu'], satirlar: [
      ['Bir doz yapıldı, korunuyor', 'Seri 16. haftaya kadar tamamlanmadan koruma tam değil'],
      ['Aşılar bitene kadar hiç dışarı çıkmasın', 'Kontrollü sosyalleşme gerekiyor, pencere 16 haftada kapanıyor'],
      ['Bahçeli evde yaşıyor, risk yok', 'Parvovirüs toprakta uzun süre canlı kalabiliyor'],
      ['Kuduz aşısı isteğe bağlı', 'Türkiye\'de yasal yükümlülük, seyahat için de şart'],
      ['Aşı kartı kaybolursa önemli değil', 'Kayıt yoksa takvim yeniden kurulur, gereksiz doz yapılabilir'],
    ]},
    { kind: 'paragraf', metin: 'Aşı takviminde en çok sorun çıkaran şey ilk dozun yapılmaması değil, ara dozların unutulması. Tarihleri bir yerde tutmak, kartı kaybetseniz bile takvimin bozulmamasını sağlıyor. Veterito bu takvimi köpeğiniz için tutuyor ve tekrar tarihi yaklaşınca hatırlatıyor; uygulama ücretsiz.' },
  ],
  sss: [
    { soru: 'Yavru köpeğe ilk aşı kaç haftalıkken yapılır?', cevap: 'Genellikle 6-8 haftalıkken karma aşı ile başlanıyor. Öncesinde iç parazit uygulaması yapılıyor. Kesin zamanı veteriner hekim belirliyor.' },
    { soru: 'Köpek aşı serisi kaç haftada biter?', cevap: 'Genellikle 16. haftada. Serinin bu kadar uzun sürmesinin sebebi, anneden gelen bağışıklığın bazı yavrularda 16. haftaya kadar aşının etkisini engelleyebilmesi.' },
    { soru: 'Aşıları bitmeden köpeğimi dışarı çıkarabilir miyim?', cevap: 'Kontrollü biçimde evet. Sosyalleşme penceresi 16 haftada kapanıyor ve tam izolasyon davranış sorunlarına yol açıyor. Aşıları tam olan sağlıklı köpeklerle, sokak köpeklerinin yoğun olduğu alanlardan uzak durarak. Dengeyi hekiminizle konuşun.' },
    { soru: 'Leptospiroz aşısı gerçekten gerekli mi?', cevap: 'Bakteriyel bir hastalık, böbrek ve karaciğeri tutuyor ve insana da bulaşabiliyor. Özellikle su birikintisi, dere kenarı ve kemirgen bulunan ortamlara giren köpeklerde önemli.' },
    { soru: 'Sokaktan aldığım yetişkin köpeğe aşı yapılır mı?', cevap: 'Evet. Aşı geçmişi bilinmeyen köpeklerde seri yeniden kuruluyor. Önce muayene, sonra takvim.' },
    { soru: 'Aşı tekrarını kaçırdım, ne olur?', cevap: 'Kısa gecikmelerde çoğu zaman kaldığı yerden devam ediliyor. Gecikme uzunsa hekim seriyi yenilemeyi tercih edebiliyor. Kaç gün geciktiğinizi söyleyip sorun, kendi başınıza karar vermeyin.' },
  ],
};
