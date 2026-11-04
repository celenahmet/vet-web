import type { BlogYazi } from './types';

export const veterinerHekimKpss: BlogYazi = {
  slug: 'veteriner-hekim-kpss',
  baslik: 'Veteriner Hekim KPSS Ataması: Puan ve Kadrolar',
  ozet: 'Kamuda veteriner hekim olarak ilk kez göreve başlamak için KPSSP3 puanı kullanılıyor. 2026 kılavuzu ve Tarım ve Orman Bakanlığı ilanıyla süreç.',
  kapakAlt:
    'Masada evrak dolduran veteriner hekim, yanında taşıma kafesindeki kedi',
  kategori: 'Klinik Yönetimi',
  tarih: '2026-11-13',
  bloklar: [
    { kind: 'paragraf', metin: '**Kamuda veteriner hekim olarak ilk kez göreve başlamak için geçerli bir KPSS puanı gerekiyor; lisans mezunları için kullanılan puan türü KPSSP3.** ÖSYM\'nin 2026 kılavuzuna göre kamu kurumlarının kadrolarına ilk defa atanacakların geçerli bir KPSS puanına sahip olması zorunlu.' },
    { kind: 'paragraf', metin: 'Aşağıda 2026 KPSS Lisans kılavuzundaki kuralları ve Tarım ve Orman Bakanlığı\'nın 2026\'da yayımladığı veteriner hekim alımını içeren ilanı birlikte ele aldık. Kadro sayıları ve koşullar her ilanda değiştiği için bu yazı bir ilan yerine geçmiyor; kamu dışındaki çalışma biçimleri ve kazanç farkı için [[veteriner-hekim-maaslari|veteriner hekim maaşları]] yazısına bakılabilir.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Lisans mezunları hangi puan türüyle alınıyor?', 'KPSSP3'],
      ['2026 Genel Yetenek-Genel Kültür oturumu ne zaman?', 'Kılavuzda 6 Eylül 2026'],
      ['Sonuç ne kadar süre geçerli?', 'Açıklanmasından itibaren iki yıl'],
      ['Bakanlık ilanında asgari puan', 'KPSSP3\'ten en az 50'],
      ['Bakanlık ilanında başvuru yeri', 'Kariyer Kapısı'],
    ]},

    { kind: 'baslik', metin: 'KPSS veteriner hekimi neden ilgilendiriyor?' },
    { kind: 'paragraf', metin: 'KPSS, kamu görevlerine ilk defa atanacaklar için yapılan merkezî sınav. Lisans düzeyindeki sınav, dört veya daha fazla yıllık yükseköğretim programlarından mezun olanlar ile mezun olabilecek durumda olanlar için hazırlanıyor. Veteriner fakültesi lisans programı bu kapsamda; eğitimin ayrıntısını [[veteriner-hekim-nasil-olunur|veteriner hekim nasıl olunur]] yazısında anlattık.' },
    { kind: 'paragraf', metin: 'Kamu kurumları KPSS sonuçlarını iki biçimde kullanabiliyor. Bazı kadrolar için ÖSYM kendisi tercih alıp yerleştirme yapıyor, bazılarında ise kurum kendi ilanıyla alım yapıyor. İki yolda da kılavuzun ortak şartı aynı: geçerli bir KPSS puanı olmadan ilk atama yapılamıyor. Müfettiş yardımcılığı, uzman yardımcılığı gibi A grubu kadrolarda ise adaylar kuruma doğrudan başvuruyor; kurum ya doğrudan KPSS sonucuna göre atama yapıyor ya da kendi giriş sınavını düzenliyor.' },

    { kind: 'baslik', metin: 'KPSSP3 puanı nasıl oluşuyor?' },
    { kind: 'paragraf', metin: 'Kılavuza göre B grubu kadro niteliği taşıyan tüm kadrolu ve sözleşmeli personel alımlarında kamu kurumları lisans düzeyi için KPSSP3 puanını kullanıyor. Bu puan türü Genel Yetenek ve Genel Kültür testlerinden eşit ağırlıkla hesaplanıyor; Hukuk, İktisat gibi alan bilgisi oturumları KPSSP3\'e katılmıyor.' },
    { kind: 'paragraf', metin: 'Genel Yetenek-Genel Kültür oturumu kılavuzda 6 Eylül 2026 tarihinde saat 10.15\'te, 130 dakika olarak duyurulmuştu ve sınav ücreti 800 TL idi. Kılavuza göre tüm adayların bu oturuma girmesi zorunlu. Puanlar 100 üzerinden dağılım verecek biçimde hesaplanıyor.' },
    { kind: 'paragraf', metin: 'Sonuçların geçerlilik süresi de önemli. 2026-KPSS sonuçları, sonuçların açıklanmasından itibaren iki yıl süreyle geçerli. Bu sürede yeni sınav yapılmazsa sonuçlar bir sonraki sınavın sonucu açıklanana kadar geçerli kalıyor.' },

    { kind: 'baslik', metin: 'Kadrolar iki yoldan açılıyor' },
    { kind: 'liste', maddeler: [
      '**ÖSYM yerleştirmesi:** Sonuçlar açıklandıktan sonra ÖSYM bir Tercih Kılavuzu hazırlıyor; kadrolar, kadro sayıları ve koşullar bu kılavuzda yer alıyor.',
      '**Kurum ilanı:** Kurum kendi ilanını yayımlıyor. Adaylar bu durumda kurumun duyurusuna göre hareket ediyor.',
    ]},
    { kind: 'paragraf', metin: 'ÖSYM yerleştirmesinde adaylar puanları, tercihleri ve kadro sayıları göz önünde tutularak yerleştiriliyor. Yerleştirilen adaylar, kılavuza göre başka bir sınav veya mülakat yapılmaksızın ilan edilmiş kadrolara doğrudan atanıyor. Atama için öngörülen koşulları taşımayan ya da gerekli belgeleri süresinde getiremeyen adayın ataması yapılmıyor.' },

    { kind: 'baslik', metin: 'Tarım ve Orman Bakanlığı 2026 ilanında ne vardı?' },
    { kind: 'paragraf', metin: 'Bakanlık, 2026\'da 657 sayılı Devlet Memurları Kanunu\'nun 4/B maddesi kapsamında sözleşmeli personel alımı ilan etti. İlanda 800 mühendis, 645 veteriner hekim ve diğer unvanlarla birlikte toplam 1.874 pozisyon vardı. Yerleştirmede 2024 yılı KPSS\'nin B grubu puan sıralaması esas alındı.' },
    { kind: 'tablo', basliklar: ['Başlık', 'İlandaki düzenleme'], satirlar: [
      ['Veteriner hekim pozisyonu', '645'],
      ['Toplam pozisyon', '1.874'],
      ['Lisans mezunları için puan türü', 'KPSSP3, en az 50 puan'],
      ['Başvuru dönemi', '27 Temmuz ile 9 Ağustos 2026 arası'],
      ['Başvuru yolu', 'Kariyer Kapısı, e-Devlet girişi'],
      ['Tercih sınırı', 'En fazla 20 tercih'],
      ['Görev yeri', 'Bakanlığın taşra birimleri'],
    ]},
    { kind: 'paragraf', metin: 'Bakanlığın duyurusuna göre yerleştirme sonuçları 19 Ağustos 2026\'da Kariyer Kapısı üzerinden açıklandı. Veteriner hekim unvanında yerleşenlerin belge teslimi 27-28 Ağustos 2026 tarihlerinde, Bakanlık Personel Genel Müdürlüğü\'nde elden yapıldı; posta ve kargo ile gelen belgeler kabul edilmedi.' },
    { kind: 'uyari', metin: 'Bu ilan kapandı ve örnek olarak anlatıldı. Güncel bir alım için Bakanlığın duyuru sayfası, Kariyer Kapısı ve ÖSYM\'nin Tercih Kılavuzu esas alınmalı; kadro sayıları ve şartlar her seferinde değişebilir. Bakanlık, gerekli hallerde ilanın her aşamasında iptal veya değişiklik yapma hakkını saklı tutuyor ve değişiklikleri Personel Genel Müdürlüğü internet sayfasından duyuruyor.' },

    { kind: 'baslik', metin: 'Yerleştirme sırası nasıl belirleniyor?' },
    { kind: 'paragraf', metin: 'Bakanlık ilanında yerleştirme, istenilen nitelikleri sağlayanlar arasından KPSS puan üstünlüğü esasına göre Kariyer Kapısı sistemi tarafından yapılıyor. Puanların eşit olması hâlinde diploma tarihi itibarıyla önce mezun olana, bu da aynıysa yaşı büyük olana öncelik tanınıyor. ÖSYM kılavuzu da aynı eşitlik kuralını koyuyor.' },
    { kind: 'paragraf', metin: 'Puan tek başına yetmiyor. İlan, genel şart olarak 657 sayılı Kanun\'un 48. maddesindeki koşulların taşınmasını arıyor. Sosyal Güvenlik Kurumundan emeklilik veya yaşlılık aylığı alanlar ile 65 yaşını doldurmuş olanların ataması yerleşseler bile yapılmıyor. Yerleştirilen adaylar için güvenlik soruşturması ve arşiv araştırması da yapılıyor.' },
    { kind: 'paragraf', metin: 'İlan ayrıca adayların Türk vatandaşı olmasını arıyor; yabancı uyruklu adaylar tercih yapamıyor. Hizmet sözleşmesi esaslarına aykırı davranması nedeniyle sözleşmesi feshedilen ya da sözleşme döneminde sözleşmeyi tek taraflı feshedenler, fesih tarihinden itibaren bir yıl geçmedikçe kamu kurumlarının sözleşmeli pozisyonlarında yeniden istihdam edilemiyor. Gerçeğe aykırı belge veren ya da beyanda bulunanlar hakkında yasal işlem yapılıyor; ataması yapılmışsa atama iptal ediliyor.' },
    { kind: 'yanilgi', baslik: '"Yüksek KPSS puanı atamayı garanti eder"', metin: 'Kılavuz bunu açıkça reddediyor: KPSS\'de yüksek puan almak, kamu kurumlarında görev almada tek başına bir hak teşkil etmiyor. Atama için ilandaki koşulların karşılanması ve belgelerin süresinde teslim edilmesi gerekiyor.' },

    { kind: 'baslik', metin: 'Başvurmadan önce nelere bakılmalı?' },
    { kind: 'liste', maddeler: [
      'İlanın sonundaki özel nitelik tablosunun incelenmesi önerilir.',
      'e-Devlet üzerindeki iletişim bilgilerinin güncel tutulması önemli görülüyor.',
      'Mezuniyet bilgileri sisteme otomatik yükleniyor; yüklenmeyenlerin diplomalarını kendilerinin beyan etmesi gerekiyor.',
      'Başvuru sonrası "Başvuru Alındı" ibaresi görülmeyen başvuru değerlendirilmiyor.',
      'Tercih sayısı sınırı aşılırsa hiçbir başvuru kabul edilmiyor.',
    ]},
    { kind: 'paragraf', metin: 'Kamu kadrosunun ücret yapısı ve özel sektörle farkı ayrı bir konu. Gösterge, ek gösterge ve katsayıdan oluşan aylık hesabı için [[veteriner-hekim-maaslari|veteriner hekim maaşları]] yazısını okuyabilirsiniz.' },
  ],
  kontrolListesi: [
    'Geçerli KPSSP3 puanım var mı?',
    'İlanın özel nitelikleri uygun mu?',
    'Kariyer Kapısı hesabım hazır mı?',
    'Başvuru tarih aralığı belli mi?',
    'Tercih sayısı sınırı aşıldı mı?',
    'Diploma bilgim sistemde var mı?',
  ],
  sss: [
    { soru: 'Veteriner hekim atamasında hangi KPSS puanı kullanılır?', cevap: 'Lisans mezunu veteriner hekimler için KPSSP3 puanı kullanılıyor. ÖSYM kılavuzu, B grubu kadro niteliği taşıyan tüm kadrolu ve sözleşmeli personel alımlarında lisans düzeyi için KPSSP3\'ün esas alınacağını belirtiyor. Tarım ve Orman Bakanlığı\'nın 2026 ilanında da aynı puan türü kullanıldı.' },
    { soru: 'KPSS sonucu ne kadar süre geçerli?', cevap: 'Sonuçlar açıklanmasından itibaren iki yıl süreyle geçerli. ÖSYM\'nin 2026 kılavuzuna göre bu süre içinde yeni bir sınav yapılmazsa sonuçlar, bir sonraki sınavın sonucu açıklanana kadar geçerli olmaya devam ediyor. Geçerlilik tarihini ilan edilen kılavuzdan kontrol etmek gerekiyor.' },
    { soru: 'Bakanlık ilanında asgari puan kaç?', cevap: 'Tarım ve Orman Bakanlığı\'nın 2026 ilanında lisans mezunları için ilgili puan türünden, yani KPSSP3\'ten, en az 50 puan alınması gerekiyordu. Bu eşik o ilana ait; başka kurumların ilanlarında farklı koşullar bulunabilir ve ilan metninden doğrulanmalı.' },
    { soru: 'Veteriner hekim alımında mülakat var mı?', cevap: 'ÖSYM yerleştirmesinde mülakat yok. Kılavuza göre ÖSYM tarafından yerleştirilen adaylar, başka bir sınav veya mülakat yapılmaksızın ilan edilmiş kadrolara doğrudan atanıyor. Kurum ilanlarında yöntem ilanın kendisinde yazıyor; Bakanlığın 2026 ilanında yerleştirme KPSS puan üstünlüğüne göre yapıldı.' },
    { soru: 'Başvuru nasıl yapılıyor?', cevap: 'Bakanlığın 2026 ilanında başvurular yalnızca Kariyer Kapısı üzerinden, e-Devlet şifresiyle alındı. Şahsen veya posta yoluyla yapılan başvurular kabul edilmedi. ÖSYM yerleştirmesinde ise tercihler ÖSYM\'nin duyuracağı yöntemle internet üzerinden yapılıyor.' },
    { soru: 'Emekli aylığı alan veteriner hekim atanabilir mi?', cevap: 'Bakanlığın 2026 ilanına göre hayır. Sosyal Güvenlik Kurumundan emeklilik veya yaşlılık aylığı alanların ve 65 yaşını doldurmuş olanların ataması, yerleştirmeleri yapılmış olsa bile gerçekleştirilmiyor. Kendi durumunuzu ilgili kurumdan sormanız önerilir.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Ölçme, Seçme ve Yerleştirme Merkezi Başkanlığı (ÖSYM)',
      baslik: '2026 Kamu Personel Seçme Sınavı (KPSS) Lisans Başvuru Kılavuzu',
      yil: 2026,
      adres: 'https://dokuman.osym.gov.tr/pdfdokuman/2026/KPSS/LISANS/kilavuz_Ld01072026.pdf',
    },
    {
      kurum: 'T.C. Resmî Gazete, Tarım ve Orman Bakanlığı',
      baslik: '1.874 Sözleşmeli Personel Alım İlanı',
      yil: 2026,
      adres: 'https://www.resmigazete.gov.tr/ilanlar/eskiilanlar/2026/07/20260724-4-24.pdf',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı',
      baslik: 'Tarım ve Orman Bakanlığı 1851 4/B Sözleşmeli Personel Alımına İlişkin Duyuru',
      yil: 2026,
      adres: 'https://www.tarimorman.gov.tr/Duyuru/2676/Tarim-Ve-Orman-Bakanligi-1851-4_b-Sozlesmeli-Personel-Alimina-Iliskin-Duyuru',
    },
  ],
};
