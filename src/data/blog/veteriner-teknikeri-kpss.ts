import type { BlogYazi } from './types';

export const veterinerTeknikeriKpss: BlogYazi = {
  slug: 'veteriner-teknikeri-kpss',
  baslik: 'Veteriner Teknikeri KPSS Ataması: Şartlar ve Kadrolar',
  ozet: 'Veteriner teknikeri olarak kamuya atanmak için hangi KPSS puanı, hangi program ve hangi kadro gerekiyor; ÖSYM 2026 kılavuzlarına göre anlatıyoruz.',
  kapakAlt:
    'Klinikte köpeğin yanında malzeme hazırlayan veteriner teknikeri',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-16',
  bloklar: [
    { kind: 'paragraf', metin: '**Veteriner teknikeri olarak kamuya atanmak için KPSS ön lisans sınavından geçerli bir KPSS P93 puanı alınması ve ÖSYM\'nin merkezi yerleştirmesinde bir kadroya yerleşilmesi gerekiyor.** Mezuniyet tek başına atama hakkı vermiyor; kadroyu açan kurum, kadro sayısı ve puan sıralaması sonucu belirliyor.' },
    { kind: 'paragraf', metin: 'Bu yazı veteriner sağlık alanında ön lisans okuyanlara ve mezun olanlara, bir de ekibine teknikeri almayı düşünen klinik sahiplerine yönelik. Anlatılanlar ÖSYM\'nin 2026 KPSS ön lisans başvuru kılavuzuna, KPSS-2026/1 tercih kılavuzuna ve tablolarına dayanıyor. İşin klinikteki yönünü [[veteriner-teknikeri-ne-is-yapar|veteriner teknikeri ne iş yapar]] yazımızda anlattık.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Hangi sınav?', 'KPSS Ön Lisans (B grubu kadrolar)'],
      ['Hangi puan türü?', 'KPSS P93'],
      ['Sonuç ne kadar geçerli?', 'Açıklanmasından itibaren iki yıl'],
      ['Aranan program?', 'Laborant ve Veteriner Sağlık ya da Veteriner Sağlık Teknikerliği'],
      ['Yerleştirmeyi kim yapıyor?', 'ÖSYM, tercih kılavuzu ve tablolar üzerinden'],
      ['Özel klinikte çalışmak için?', 'İl müdürlüğünden çalışma izin belgesi'],
    ]},

    { kind: 'baslik', metin: 'Hangi sınava girmek gerekiyor?' },
    { kind: 'paragraf', metin: 'Kamu kurum ve kuruluşlarının B grubu kadrolarına ilk defa atanacakların geçerli bir KPSS puanına sahip olması zorunlu. Ön lisans mezunları için bu sınav KPSS Ön Lisans; 2026 sınavının tarihi kılavuzda 4 Ekim 2026 olarak duyuruldu. Sınava iki yıllık meslek yüksekokullarından ve dengi açıköğretim programlarından mezun olanlar başvurabiliyor. Başvuru sırasında mezun olmayanlar da, sınavın geçerlik süresi olan iki yıl içinde mezun olabilecek durumdaysa sınava girebiliyor.' },
    { kind: 'paragraf', metin: 'Puan türü öğrenim düzeyine göre değişiyor: yerleştirmede ön lisans mezunları için KPSSP93, lisans mezunları için KPSSP3, ortaöğretim mezunları için KPSSP94 kullanılıyor. Veteriner teknikeri ön lisans düzeyinde olduğu için geçerli puan türü P93.' },
    { kind: 'paragraf', metin: 'Sınav sonuçları açıklanmasından itibaren iki yıl geçerli. Ön lisans düzeyinden sınava giren bir adayın sonraki KPSS B grubu lisans sınavına girmesi hâlinde ise, lisans sonucunun açıklandığı tarihte ön lisans sonuçlarının geçerliliği sona eriyor. Ön lisanstan sonra lisans tamamlamayı düşünenlerin bunu hesaba katması gerekiyor.' },

    { kind: 'baslik', metin: 'Hangi programdan mezun olmak gerekiyor?' },
    { kind: 'paragraf', metin: 'Her kadro için aranan öğrenim koşulu, ÖSYM\'nin ön lisans nitelik tablosunda bir kodla gösteriliyor. Veteriner alanına ait kod 3021 ve metni şöyle: "Laborant ve Veteriner Sağlık, Veteriner Sağlık Teknikerliği önlisans programlarının birinden mezun olmak." Kılavuz, tercihten önce sistemde kayıtlı mezun olunan alan ve program bilgisinin bu tablolardan kontrol edilmesini özellikle istiyor; programı kadro niteliğiyle uyumsuz olan tercih ise sistem tarafından kaydedilmiyor.' },
    { kind: 'paragraf', metin: 'Bazı kadrolar daha geniş bir nitelik arıyor. Kod 3001 yalnızca "herhangi bir önlisans programından mezun olmak" diyor; bu tür kadrolarda veteriner programı mezunu da tercih yapabiliyor. Bir kadro için birden fazla program koşulu sayılmışsa bunlardan birini karşılamak yeterli oluyor.' },

    { kind: 'baslik', metin: 'Atama nasıl işliyor?' },
    { kind: 'paragraf', metin: 'Kamu kurumlarının bazı kadro ve pozisyonlarına yerleştirmeyi ÖSYM yapıyor. Tercih kılavuzu, atama izni alınmış kadro ve pozisyonları kapsıyor ve bunları tablolarla yayımlıyor. Tablo-1 ortaöğretim, Tablo-2 ön lisans, Tablo-3 lisans mezunlarının tercih edebileceği kadro ve pozisyonları gösteriyor. Devlet memuru olarak atanacakların sınava girmesi ve sınavı kazanması ise 657 sayılı Devlet Memurları Kanunu\'nun 50. maddesinde şart olarak yazıyor.' },
    { kind: 'liste', maddeler: [
      '**Mezuniyet:** Tercihlerin ÖSYM\'ye internetle gönderildiği gün mezun olmak gerekiyor; mezun olmayan adayların yerleştirmesi yapılsa bile ataması yapılmıyor',
      '**Sıralama:** Yerleştirme puana ve tercih sırasına göre yapılıyor; daha yüksek puanlı adaylar yerleştiği için birinci tercihine yerleşemeyen aday ikinci tercihine yerleştirilmeye çalışılıyor',
      '**Tek hak:** B grubuna ait bir kadroya yerleşen aday, sonraki personel alımlarında aynı puanla yeniden başvuramıyor',
    ]},
    { kind: 'uyari', metin: 'Kadro, nitelik kodu ve kontenjan her yerleştirme döneminde değişiyor. Güncel durumu yalnızca ÖSYM\'nin o döneme ait kılavuzu ve tabloları gösteriyor; bu yazıdaki örnekler KPSS-2026/1 içindir.' },

    { kind: 'baslik', metin: 'KPSS-2026/1\'de kaç kadro vardı?' },
    { kind: 'paragraf', metin: 'ÖSYM\'nin KPSS-2026/1 Tablo-2 listesinde, yani ön lisans mezunlarının tercih edebildiği kadrolar arasında, veteriner niteliğini (kod 3021) arayan tek bir satır bulunuyor: Et ve Süt Kurumu Genel Müdürlüğü\'nün Erzincan\'daki tekniker kadrosu. Kadro tek kişilik ve KİT sözleşmeli personel statüsünde.' },
    { kind: 'tablo', basliklar: ['Kurum', 'Kadro ve il', 'İstihdam', 'Adet'], satirlar: [
      ['Et ve Süt Kurumu Genel Müdürlüğü', 'Tekniker, Erzincan', 'KİT sözleşmeli personel', '1'],
    ]},
    { kind: 'paragraf', metin: 'Dikkat çeken nokta, kadro adının "veteriner teknikeri" olmaması. Unvan yalnızca "tekniker"; veteriner şartı nitelik kodunda saklı. Bu yüzden tabloda unvan yerine nitelik koduyla arama yapmak gerekiyor. Bu bir dönemin görüntüsü; başka dönemlerde sayı ve kurum farklı olabilir.' },
    { kind: 'yanilgi', baslik: '"Veteriner sağlık bölümünü bitiren herkes KPSS ile devlete atanır"', metin: 'Mezuniyet yalnızca tercih hakkı veriyor. Yerleştirme puana ve tercih sırasına göre yapılıyor; son tercihine de daha yüksek puanlı biri yerleşen aday hiçbir kadroya yerleşemiyor. KPSS-2026/1\'de bu niteliği arayan kadro da tek kişilikti.' },

    { kind: 'baslik', metin: 'Kamu dışında yol: özel muayenehane ve poliklinik' },
    { kind: 'paragraf', metin: 'Kamu kadrosu tek yol değil. Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği, veteriner hekimlerin muayenehane ve polikliniklerinde veteriner sağlık teknikeri, teknisyeni veya laborantı gibi personeli yardımcı sağlık hizmetleri personeli olarak çalıştırabileceğini söylüyor. Yönetmelik bu personeli, veteriner hekime hayvan sağlığı hizmeti sırasında yardımcı olan ve veteriner hekim sorumluluğunda görev yapan kişiler olarak tanımlıyor.' },
    { kind: 'paragraf', metin: 'Çalıştırmak isteyen veteriner hekim için süreç il müdürlüğünden geçiyor:' },
    { kind: 'liste', maddeler: [
      'İl müdürlüğüne dilekçe ile başvuru',
      'Personelin diploma veya mezuniyet belgesinin aslı ya da onaylı örneği',
      'Hekim ile personel arasında imzalanan protokolün bir nüshası ve iki resim',
      'Noter tasdikli iş akdi',
    ]},
    { kind: 'paragraf', metin: 'Evraklar uygun bulunursa il müdürlüğü, personel adına yardımcı sağlık hizmetleri personeli çalışma izin belgesi düzenliyor. Klinik tarafındaki yükümlülükleri [[veteriner-klinigi-acmak|veteriner kliniği açmak]] yazımızda, hekim ile tekniker arasındaki yetki farkını [[veteriner-hekim-tekniker-farki|veteriner hekim ile tekniker farkı]] yazımızda bulabilirsiniz.' },
    { kind: 'uyari', metin: 'İl müdürlüğünce düzenlenmiş çalışma izin belgesi olmadan veteriner sağlık teknikeri, teknisyeni veya laborantı çalıştırılamıyor. Teknikerin görevi de kendi yetkileriyle sınırlı işlerden ibaret ve veteriner hekimin sorumluluğunda yürütülüyor.' },

    { kind: 'baslik', metin: 'Hazırlık sürecinde nelere dikkat edilmeli?' },
    { kind: 'paragraf', metin: 'KPSS sonucu ile yerleştirme ayrı iki adım. Sınava mezun olmadan girilebiliyor, ama tercih aşamasında mezun durumda olmak şart. Sınav ve yerleştirme sonuçlarının geçerli sayılması için kılavuzdaki tüm kurallara uyulması gerekiyor. Dönem dönem yayımlanan kılavuzların okunması bu nedenle ilk iş.' },
    { kind: 'paragraf', metin: 'Maaş, çalışma koşulları ve kariyer ayrıntıları için [[veteriner-teknikeri-maaslari|veteriner teknikeri maaşları]] yazısı da bakılabilecek bir kaynak. Kamu kadrosuna yerleşmek ile özel klinikte çalışmak arasında seçim yapmadan önce her iki yolun güncel koşullarını görmek faydalı olur.' },
  ],
  sss: [
    { soru: 'Veteriner teknikeri olmak için KPSS puanı gerekiyor mu?', cevap: 'Kamu kurumlarının B grubu kadrolarına ilk defa atanmak için evet, geçerli bir KPSS puanı zorunlu. Özel muayenehane ve polikliniklerde çalışmak ise KPSS puanı üzerinden değil, diploma ve il müdürlüğünce düzenlenen yardımcı sağlık hizmetleri personeli çalışma izin belgesi üzerinden işliyor.' },
    { soru: 'Veteriner teknikeri hangi KPSS puan türüyle atanır?', cevap: 'Ön lisans mezunları için KPSSP93 puanı kullanılıyor. Lisans mezunları KPSSP3, ortaöğretim mezunları KPSSP94 ile yerleştiriliyor. Veteriner teknikeri ön lisans düzeyinde olduğundan, tercih ve yerleştirmede P93 puanı esas alınıyor.' },
    { soru: 'KPSS ön lisans sonucu kaç yıl geçerli?', cevap: 'Sınav sonuçları açıklanmasından itibaren iki yıl süreyle geçerli. Yeni bir sınav yapılamazsa sonuçlar, bir sonraki sınav sonuçları açıklanana kadar geçerli kalıyor. Ön lisans adayı sonraki KPSS B grubu lisans sınavına girerse, o sonucun açıklandığı tarihte ön lisans sonucu geçerliliğini yitiriyor.' },
    { soru: 'Veteriner teknikeri kadrosu her dönem açılıyor mu?', cevap: 'Hayır, kadro açılması kurumların aldığı atama iznine bağlı ve dönemden döneme değişiyor. KPSS-2026/1 Tablo-2\'de veteriner niteliğini (kod 3021) arayan tek kadro vardı: Et ve Süt Kurumu\'nun Erzincan\'daki tek kişilik tekniker kadrosu. Güncel durum için ÖSYM tabloları izlenmeli.' },
    { soru: 'Mezun olmadan KPSS tercihi yapılabilir mi?', cevap: 'Hayır, tercihin ÖSYM\'ye gönderildiği gün itibarıyla mezun olmak zorunlu. Sınava mezun olmadan başvurulabiliyor, ama tercih günü mezun durumda olmayan adayın yerleştirmesi yapılsa bile ataması yapılmıyor. Mezuniyet tarihinin tercih döneminden önce tamamlanması gerekiyor.' },
    { soru: 'Özel klinikte çalışan teknikerin hangi belgesi olmalı?', cevap: 'Yardımcı sağlık hizmetleri personeli çalışma izin belgesi gerekiyor. Belgeyi, veteriner hekimin dilekçe, diploma, protokol ve noter tasdikli iş akdi ile yaptığı başvuru üzerine il müdürlüğü düzenliyor. Belge olmadan veteriner sağlık teknikeri muayenehane veya poliklinikte çalıştırılamıyor.' },
  ],
  kontrolListesi: [
    'Geçerli bir P93 puanı var mı?',
    'Mezuniyet belgesi hazır mı?',
    'Nitelik kodu 3021 kadrosu var mı?',
    'Tercih günü mezun durumda mı?',
    'Güncel ÖSYM kılavuzu okundu mu?',
    'Klinikte çalışma izin belgesi var mı?',
  ],
  kaynaklar: [
    {
      kurum: 'ÖSYM',
      baslik: '2026 Kamu Personel Seçme Sınavı (KPSS) Ön Lisans Başvuru Kılavuzu',
      yil: 2026,
      adres: 'https://dokuman.osym.gov.tr/web/2026/8/basvuru-kilavuzu-fqs59p-13083438.pdf',
    },
    {
      kurum: 'ÖSYM',
      baslik: 'Kamu Personel Seçme Sınavı KPSS-2026/1 Tercih Kılavuzu',
      yil: 2026,
      adres: 'https://dokuman.osym.gov.tr/pdfdokuman/2026/KPSS/TERCIH1/kilavuz_t1d03072026.pdf',
    },
    {
      kurum: 'ÖSYM',
      baslik: 'KPSS-2026/1 Tablo-2: Ön Lisans Mezunlarının Tercihleri Arasında Gösterebileceği Kadro ve Pozisyonlar',
      yil: 2026,
      adres: 'https://dokuman.osym.gov.tr/pdfdokuman/2026/KPSS/TERCIH1/tablo2_t1d03062026.pdf',
    },
    {
      kurum: 'ÖSYM',
      baslik: 'KPSS-2026/1 Ön Lisans Nitelik Kodları ve Öğrenim Koşulları',
      yil: 2026,
      adres: 'https://dokuman.osym.gov.tr/pdfdokuman/2026/KPSS/TERCIH1/onlisans-nitelik_t1d03072026.pdf',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: '657 sayılı Devlet Memurları Kanunu',
      yil: 1965,
      adres: 'https://www.mevzuat.gov.tr/MevzuatMetin/1.5.657.pdf',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Veteriner Hekim Muayenehane ve Poliklinik Yönetmeliği',
      adres: 'https://www.mevzuat.gov.tr/MevzuatMetin/yonetmelik/7.5.15393.pdf',
    },
  ],
};
