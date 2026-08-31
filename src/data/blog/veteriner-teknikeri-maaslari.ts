import type { BlogYazi } from './types';

/**
 * KLINIK YONETIMI. Ayni gerekce: RAKAM YAZILMADI. Teknikerde ozel sektor
 * ucreti asgari ucret mevzuatina bagli bir tabana sahip ve merkezi kayit yok;
 * kamuda ise kadro ve ek gostergeye bagli. Yazi yapiyi anlatiyor.
 */
export const veterinerTeknikeriMaaslari: BlogYazi = {
  slug: 'veteriner-teknikeri-maaslari',
  baslik: 'Veteriner Teknikeri Maaşları: Kazanç Neye Göre Değişiyor?',
  ozet: 'Aynı diplomayla çok farklı ücretler görülüyor. Farkı yaratan diploma değil; kadro, çalışma saati ve üstlenilen sorumluluk.',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-08-31',
  bloklar: [
    { kind: 'paragraf', metin: 'Veteriner sağlık teknikerlerinin kazancı geniş bir aralıkta değişiyor ve bu aralığın sebebi çoğu zaman yanlış anlaşılıyor. Belirleyici olan diploma değil; **nerede, hangi kadroda ve hangi saatlerde** çalışıldığı.' },
    { kind: 'paragraf', metin: 'Bu yazı güncel rakam vermiyor. Kamuda ücret merkezi katsayıya bağlı olarak dönemsel değişiyor, özel sektörde ise merkezi bir kayıt yok. Anlatılan şey ücreti belirleyen kalemler ve pazarlıkta nelerin konuşulması gerektiği.' },

    { kind: 'baslik', metin: 'Ücreti belirleyen dört kalem' },
    { kind: 'tablo', basliklar: ['Kalem', 'Neden fark yaratıyor'], satirlar: [
      ['Kamu ya da özel', 'Kamuda ücret formüle bağlı, özelde işletmenin bütçesine'],
      ['Çalışma saati', 'Gece nöbeti ve hafta sonu vardiyası ücreti belirgin değiştiriyor'],
      ['Kuruluşun türü', 'Yatışlı hasta bakan hastane ile tek hekimli muayenehane farklı yük'],
      ['Üstlenilen sorumluluk', 'Laboratuvar, anestezi takibi, stok yönetimi gibi işler'],
    ] },
    { kind: 'paragraf', metin: 'Kamuda çalışan tekniker devlet memuru statüsünde; ücret gösterge, ek gösterge, katsayı ve kıdemin toplamıyla oluşuyor. Özel sektörde ise taban, asgari ücret mevzuatı; üstü işletmenin bütçesine ve kişinin üstlendiği işe bağlı.' },

    { kind: 'yanilgi', baslik: '"Deneyim arttıkça ücret kendiliğinden artar" yanılgısı', metin: 'Özel sektörde ücret artışı çoğu zaman kendiliğinden gelmiyor; üstlenilen işin genişlemesiyle geliyor. Laboratuvar cihazını kullanabilen, anestezi takibinde güvenilir olan, stok ve hatırlatma sistemini yürüten bir tekniker işletme için ölçülebilir değer üretiyor. Pazarlıkta konuşulması gereken de yıl sayısı değil, bu somut yetkinlikler.' },

    { kind: 'baslik', metin: 'Pazarlıkta netleştirilecekler' },
    { kind: 'liste', maddeler: [
      'Haftalık çalışma saati ve fazla mesai karşılığı',
      'Gece nöbeti ve hafta sonu vardiyasının ayrı ücretlendirilip ücretlendirilmediği',
      'Resmî tatil çalışmasının nasıl karşılandığı',
      'Sigorta priminin gerçek ücret üzerinden yatırılıp yatırılmadığı',
      'Eğitim ve sertifika giderlerini kimin karşıladığı',
      'Görev tanımının yazılı olup olmadığı',
    ] },
    { kind: 'paragraf', metin: 'Son madde görünenden önemli. Görev tanımı yazılı değilse iş zamanla genişliyor ve ücret aynı kalıyor. Görev sınırlarının ne olduğu konusunda [[veteriner-teknikeri-ne-is-yapar|tekniker ne iş yapar]] yazısı çerçeveyi veriyor.' },

    { kind: 'baslik', metin: 'Klinik sahibi tarafından bakınca' },
    { kind: 'paragraf', metin: 'İşveren tarafında da denklem basit değil. Deneyimli bir teknikerin ücreti gider kalemi gibi görünüyor ama kliniğin kapasitesini doğrudan etkiliyor: hazırlığı hızlanan bir klinik günde daha çok hasta bakabiliyor, takibi düzgün yapılan hasta geri geliyor. Ücret pazarlığını salt maliyet olarak görmek, kapasiteyi de sabitliyor.' },

    { kind: 'uyari', metin: 'Bu yazı güncel ücret rakamı içermiyor ve iş hukuku danışmanlığı değildir. Asgari ücret, mesai ve sigorta konularında güncel mevzuat esastır; tereddütte ilgili kurumlara başvurun.' },
  ],
  sss: [
    { soru: 'Neden net rakam verilmiyor?', cevap: 'Kamuda ücret merkezi katsayıya bağlı olarak dönemsel değişiyor, özel sektörde merkezi bir kayıt yok. Yazılacak sayı kısa sürede yanlış olurdu.' },
    { soru: 'Kamuda mı özelde mi daha yüksek?', cevap: 'Kamu daha öngörülebilir ve haklar mevzuatla belirli. Özel sektörde aralık geniş; üstlenilen sorumluluk ve çalışma saatiyle değişiyor.' },
    { soru: 'Ücret artışı için ne yapmalı?', cevap: 'Somut yetkinlik eklemek: laboratuvar, anestezi takibi, stok ve hatırlatma sistemleri. Pazarlık yıl sayısı üzerinden değil, üstlenilen iş üzerinden yürüyor.' },
    { soru: 'Sigorta primim gerçek ücretim üzerinden mi yatmalı?', cevap: 'Evet. Priminizin fiilen aldığınız ücret üzerinden yatırılması gerekir; bordronuzu düzenli kontrol edin.' },
  ],
  kontrolListesi: [
    'Görev tanımınızın yazılı olduğundan emin olun.',
    'Nöbet, fazla mesai ve tatil çalışmasının karşılığını sözleşmede netleştirin.',
    'Bordronuzu ve sigorta priminizin dayandığı ücreti düzenli kontrol edin.',
    'Yeni bir sorumluluk üstlendiğinizde ücret görüşmesini o zaman açın.',
    'Sertifika ve eğitim giderlerini kimin karşılayacağını baştan konuşun.',
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '4857 sayılı İş Kanunu (çalışma süresi, fazla çalışma ve ücrete ilişkin hükümler)',
      yil: 2003,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=4857&MevzuatTur=1&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '657 sayılı Devlet Memurları Kanunu (kamuda kadro, gösterge ve aylık hesabı)',
      yil: 1965,
      adres: 'https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=657&MevzuatTur=1&MevzuatTertip=5',
    },
  ],
};
