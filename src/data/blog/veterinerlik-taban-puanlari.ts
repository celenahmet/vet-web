import type { BlogYazi } from './types';

export const veterinerlikTabanPuanlari: BlogYazi = {
  slug: 'veterinerlik-taban-puanlari',
  baslik: 'Veterinerlik Fakültesi Taban Puanları 2026',
  ozet: 'ÖSYM 2026 tercih kılavuzundaki resmî verilere göre veteriner fakültelerinin SAY taban puanı ve başarı sıralaması, tablo ve tercih ipuçlarıyla.',
  kapakAlt:
    'Masada anatomi kitabıyla çalışan öğrenci ve kucağındaki kedi',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-14',
  bloklar: [
    { kind: 'paragraf', metin: '**Veterinerlik fakültelerinin taban puanı programa göre büyük fark gösteriyor: ÖSYM\'nin 2026 tercih kılavuzundaki 2025 yerleştirme verilerine göre bu yazıdaki sekiz program arasında en yüksek puan Ankara Üniversitesi İngilizce programında (447,30), en düşük puan Siirt Üniversitesi\'nde (337,03).** Hepsi sayısal (SAY) puan türüyle öğrenci alıyor ve eğitim beş yıl sürüyor.' },
    { kind: 'paragraf', metin: 'Aşağıda ÖSYM\'nin kılavuzundan okuduğumuz puanları, başarı sıralamalarını ve kontenjanları bulacaksınız. Ayrıca bu rakamların nasıl okunacağını, hangi yanlışların sık yapıldığını ve tercih öncesi nelere bakılması gerektiğini anlattık. Mesleğin kendisi için [[veteriner-hekim-nasil-olunur|veteriner hekim nasıl olunur]] yazımıza göz atabilirsiniz.' },

    { kind: 'baslik', metin: 'Taban puan ne demek, hangi puan türü kullanılıyor?' },
    { kind: 'paragraf', metin: 'ÖSYM\'nin tercih kılavuzunda her lisans programı için öğretim süresi, puan türü, genel kontenjan ve bir önceki yılın verileri veriliyor. Kılavuza göre tablodaki "en küçük puan" sütunu programların 2025 yılındaki genel kontenjan en küçük puanını, "başarı sırası" sütunu ise o puana karşılık gelen sıralamayı gösteriyor.' },
    { kind: 'paragraf', metin: 'Veterinerlik programlarının hepsinde öğretim süresi 5 yıl ve puan türü SAY olarak yazılı. Yani bu bölümü isteyen adayın YKS\'de sayısal alanda yüksek puan alması gerekiyor.' },

    { kind: 'baslik', metin: 'Seçilmiş veteriner fakültelerinin 2025 taban puanları' },
    { kind: 'paragraf', metin: 'Aşağıdaki tablo, ÖSYM 2026 tercih kılavuzundan alınmış sekiz programı gösteriyor. Puanlar ve sıralar 2025 yerleştirmesine, kontenjanlar 2026 kılavuzuna ait.' },
    { kind: 'tablo', basliklar: ['Üniversite ve program', 'Genel kontenjan', 'Başarı sırası', 'En küçük puan'], satirlar: [
      ['Ankara Üniversitesi, Veteriner (İngilizce)', '27', '48.566', '447,30'],
      ['Ankara Üniversitesi, Veteriner', '120', '59.397', '435,97'],
      ['İstanbul Üniversitesi-Cerrahpaşa, Veteriner (İngilizce)', '27', '65.896', '429,56'],
      ['İstanbul Üniversitesi-Cerrahpaşa, Veteriner', '63', '70.808', '424,86'],
      ['Bursa Uludağ Üniversitesi, Veteriner', '70', '72.664', '423,11'],
      ['Kırıkkale Üniversitesi, Veteriner', '72', '119.724', '383,85'],
      ['Bingöl Üniversitesi, Veteriner', '45', '194.613', '340,09'],
      ['Siirt Üniversitesi, Veteriner', '45', '201.330', '337,03'],
    ]},
    { kind: 'uyari', metin: 'Bu tablo tüm fakülteleri kapsamıyor. Yalnızca örnek olarak seçilen sekiz program var. Tercih listenizi oluştururken ilgilendiğiniz bütün programların satırlarını kılavuzdan ya da YÖK Atlas\'tan tek tek kontrol etmeniz gerekiyor.' },

    { kind: 'baslik', metin: '2026 puanları neden ayrıca bakılması gereken bir veri?' },
    { kind: 'paragraf', metin: 'Tercih kılavuzu yerleştirmeden önce yayımlandığı için içindeki puanlar bir önceki yılın, yani 2025 yerleştirmesinin sonuçları. ÖSYM kılavuzda, 2026 merkezi ilk yerleştirmede oluşan en küçük puan tablosunun "2026-YKS Sayısal Bilgiler" belgesinde yer alacağını belirtiyor. Yani bu yılın kesin puanları ayrı bir belgede yayımlanıyor.' },
    { kind: 'yanilgi', baslik: '"Kılavuzdaki puan, bu yılki taban puandır"', metin: 'Kılavuzdaki sütun 2025 yılındaki en küçük puanı gösteriyor. 2026 yerleştirmesinde oluşan puanlar ÖSYM\'nin Sayısal Bilgiler belgesinde ayrıca açıklanıyor ve program bazında farklı çıkabiliyor. Kılavuz değerleri tercih için yön gösterir, bu yılın sonucu yerine geçmez.' },

    { kind: 'baslik', metin: 'Puan farkı neyi gösteriyor?' },
    { kind: 'paragraf', metin: 'Tablodaki en yüksek ve en düşük puan arasındaki fark yaklaşık 110 puan. Başarı sırasında ise fark daha çarpıcı: Ankara Üniversitesi İngilizce programı 48.566. sırada kapanırken Siirt Üniversitesi 201.330. sırada kapanıyor, yani aradaki fark yaklaşık 153 bin sıra.' },
    { kind: 'paragraf', metin: 'Bu fark girişteki puanı gösteriyor, eğitimin süresini değil. Kılavuza göre tablodaki bütün programlarda öğretim süresi 5 yıl. Nitekim bir fakültenin eğitim yönetmeliği de bunu doğruluyor: örnek olarak Tekirdağ Namık Kemal Üniversitesi Veteriner Fakültesi yönetmeliğinde eğitim süresi yabancı dil hazırlık sınıfı hariç beş yıl, onuncu yarıyıl ise intörn eğitimine ayrılıyor.' },
    { kind: 'yanilgi', baslik: '"Taban puanı düşük fakülte daha kısa sürede mezun eder"', metin: 'Taban puanı, programa yerleşen adayların puanını gösterir; eğitimin süresini ya da içeriğini belirlemez. Kılavuzdaki veterinerlik programlarının tamamında öğretim süresi 5 yıl olarak yazılı.' },

    { kind: 'baslik', metin: 'Akreditasyon sütunu ne anlatıyor?' },
    { kind: 'paragraf', metin: 'Kılavuzda her programın akreditasyon bilgisi ayrı bir sütunda yer alıyor. Veteriner programlarının satırlarında VEDEK ve EAEVE gibi kısaltmalar görülüyor. VEDEK, Veteriner Hekimliği Eğitim Kurumları ve Programları Değerlendirme ve Akreditasyon Derneği\'nin kısaltması.' },
    { kind: 'paragraf', metin: 'Her fakültenin akreditasyon durumu farklı olabildiği için, tercih etmeden önce ilgilendiğiniz programın satırındaki bu sütuna bakmak faydalı olur. Akreditasyon bilgisinin yanında kontenjan ve puan türünü de aynı satırdan okuyabilirsiniz.' },

    { kind: 'baslik', metin: 'Ek yerleştirmede taban puan nasıl işliyor?' },
    { kind: 'paragraf', metin: 'ÖSYM kılavuzuna göre kontenjanı kayıt yaptırılmadığı için dolmayan programlara ek yerleştirme yapılıyor. Ek yerleştirmede, merkezî genel yerleştirmedeki en küçük puanın altında puanı olan aday yerleştirilmiyor. Dolayısıyla ilk yerleştirmede oluşan taban puan, ek yerleştirme için de alt sınır oluyor.' },
    { kind: 'paragraf', metin: 'Merkezî yerleştirmede bir programa yerleştirilen aday ise ek yerleştirme için başvuramıyor. Bu nedenle ilk tercih listesini hazırlarken sıralamayı dikkatli düşünmek gerekiyor.' },
    { kind: 'paragraf', metin: 'Kısacası tercih listesi, yalnızca hayal edilen programdan oluşmamalı. Kılavuzdaki puan ve sıralama bilgisine bakarak kendi sıralamanıza yakın birkaç programı da listeye eklemek önerilir. Her programın satırında kontenjan, puan türü ve akreditasyon bilgisi aynı yerde olduğu için karşılaştırma yapmak da zor değil.' },

    { kind: 'baslik', metin: 'Taban puanın ötesinde: mezuniyet ve meslek' },
    { kind: 'paragraf', metin: '6343 sayılı kanunun birinci maddesine göre yüksek veteriner okullarından ve veteriner fakültelerinden diploma alanlara "veteriner hekim" denir. Ön lisans programlarını da merak ediyorsanız [[veteriner-hekim-tekniker-farki|veteriner hekim ve tekniker farkı]] yazımıza bakabilirsiniz.' },
    { kind: 'paragraf', metin: 'Mezuniyet sonrası kazanç beklentisi de tercihte önemli bir soru. Bu konuyu [[veteriner-hekim-maaslari|veteriner hekim maaşları]] yazımızda anlattık.' },

    { kind: 'baslik', metin: 'Tercih yaparken neler kontrol edilmeli?' },
    { kind: 'liste', maddeler: [
      '**Puan türü:** Veterinerlik programları SAY ile öğrenci alıyor',
      '**Başarı sırası:** Puanın yanında o puana karşılık gelen sıralama da okunmalı',
      '**Kontenjan:** Genel kontenjan sütunundaki sayı programdan programa değişiyor',
      '**Akreditasyon:** Programın satırındaki akreditasyon bilgisi okunmalı',
      '**Güncel veri:** 2026 yerleştirme sonuçları ÖSYM\'nin Sayısal Bilgiler belgesinde ayrıca yayımlanıyor',
    ]},
  ],
  kontrolListesi: [
    'Puan türüm SAY mı?',
    'Başarı sıralamama baktım mı?',
    'Kontenjan sütununu okudum mu?',
    'Akreditasyon bilgisi var mı?',
    '2026 sayısal bilgilere baktım mı?',
    'Ek yerleştirme kuralını biliyor muyum?',
  ],
  sss: [
    { soru: 'Veterinerlik hangi puan türüyle öğrenci alır?', cevap: 'Veterinerlik, SAY yani sayısal puan türüyle öğrenci alıyor. ÖSYM tercih kılavuzunda bütün veteriner programlarının puan türü SAY olarak yazılı ve öğretim süresi 5 yıl. Bu nedenle bölümü isteyen adayın YKS\'de sayısal alanda başarılı olması gerekiyor.' },
    { soru: 'Veterinerlik fakültesi taban puanları kaç?', cevap: 'ÖSYM kılavuzundaki 2025 verilerine göre bu yazıda yer alan sekiz program arasında en yüksek puan Ankara Üniversitesi İngilizce programında 447,30, en düşük puan Siirt Üniversitesi\'nde 337,03. Puanlar programa göre belirgin biçimde değişiyor; ilgilendiğiniz programın satırına ayrıca bakmanız gerekiyor.' },
    { soru: 'En yüksek puanlı veteriner fakültesi hangisi?', cevap: 'Bu yazıdaki tabloda en yüksek puan Ankara Üniversitesi Veteriner (İngilizce) programında, 447,30 puan ve 48.566 başarı sırası. Aynı üniversitenin Türkçe programı 435,97 puan ve 59.397. sırada. Tablo yalnızca seçilmiş sekiz programı içerdiği için tüm fakülteleri kapsamıyor.' },
    { soru: 'Kılavuzdaki puan 2026 taban puanı mıdır?', cevap: 'Hayır, kılavuzdaki puanlar 2025 yılındaki genel kontenjan en küçük puanını gösteriyor. ÖSYM, 2026 merkezi ilk yerleştirmede oluşan en küçük puan tablosunun "2026-YKS Sayısal Bilgiler" belgesinde yer alacağını kılavuzda belirtiyor. Bu yılın kesin değerleri o belgeden okunabiliyor.' },
    { soru: 'Veteriner fakültesi kaç yıl sürer?', cevap: 'Veteriner fakültesi 5 yıl sürüyor. ÖSYM kılavuzunda veteriner programlarının öğretim süresi 5 yıl yazılı. Örneğin Tekirdağ Namık Kemal Üniversitesi yönetmeliğinde eğitim süresi yabancı dil hazırlık sınıfı hariç beş yıl, azami süre ise sekiz yıl; onuncu yarıyıl intörn eğitimine ayrılıyor.' },
    { soru: 'Ek yerleştirmede düşük puanla veterinerliğe girilir mi?', cevap: 'Hayır. ÖSYM kılavuzuna göre ek yerleştirmede, merkezî genel yerleştirmedeki en küçük puanın altında puanı olan aday programa yerleştirilmiyor. Yani ilk yerleştirmede oluşan taban puan, ek yerleştirmede de alt sınır olarak geçerli kalıyor.' },
    { soru: 'Başarı sırası ile taban puan aynı şey mi?', cevap: 'Hayır, ama birbirine bağlılar. ÖSYM kılavuzunda bir sütun programın 2025 yılındaki genel kontenjan en küçük puanını, diğer sütun ise o en küçük puana karşı gelen başarı sırasını gösteriyor. Örneğin Ankara Üniversitesi Veteriner programında 435,97 puana karşılık gelen sıra 59.397.' },
  ],
  kaynaklar: [
    {
      kurum: 'Ölçme, Seçme ve Yerleştirme Merkezi (ÖSYM)',
      baslik: '2026 Yükseköğretim Kurumları Sınavı (YKS) Yükseköğretim Programları ve Kontenjanları Kılavuzu (Tablo 4: lisans programları)',
      yil: 2026,
      adres: 'https://cdn.osym.gov.tr/pdfdokuman/2026/YKS/TERCIH/kontkilavuz_yktd21072026.pdf',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Tekirdağ Namık Kemal Üniversitesi Veteriner Fakültesi Eğitim-Öğretim ve Sınav Yönetmeliği (22 Temmuz 2026, sayı 33317)',
      yil: 2026,
      adres: 'https://www.resmigazete.gov.tr/eskiler/2026/07/20260722-2.htm',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '6343 sayılı Veteriner Hekimliği Mesleğinin İcrasına, Türk Veteriner Hekimleri Birliği ile Odalarının Teşekkül Tarz ve Mesai Şekillerine Dair Kanun (madde 1)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=6343&MevzuatTertip=3',
    },
  ],
};
