import type { BlogYazi } from './types';

export const kopekUretimCiftligiRuhsati: BlogYazi = {
  slug: 'kopek-uretim-ciftligi-ruhsati',
  baslik: 'Köpek Üretim Çiftliği Ruhsatı: Üretici Olmanın Şartları',
  ozet: 'Köpek üretmek için Tarım ve Orman Bakanlığı izni gerekir. Kuruluş izni, çalışma izni, veteriner hekim şartı ve üretim yerinin bölümleri yönetmeliğe göre anlatıldı.',
  kapakAlt:
    'Yatakta yavrularıyla uzanan golden anne köpek, yanda not alan kişi',
  kategori: 'Pet Sahipleri',
  tarih: '2026-11-11',
  bloklar: [
    { kind: 'paragraf', metin: '**Köpek ve kedi üretimini ticari amaçla yapmak için il tarım ve orman müdürlüğünden iki aşamalı bir izin gerekiyor: önce kuruluş izni, sonra çalışma izni.** Halk arasında "ruhsat" denen belgenin yönetmelikteki adı çalışma izin belgesi. Bu belge olmadan üretim yeri açılamıyor, belge olmayan yerden de pet shoplara hayvan satılamıyor.' },
    { kind: 'paragraf', metin: 'Aşağıda "Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik" esas alınarak başvurunun adımları, üretim yerinde bulunması zorunlu bölümler ve izni geçersiz kılan durumlar anlatılıyor. Bu yazı hukuki danışmanlık değil; başvuru öncesinde il ya da ilçe tarım ve orman müdürlüğünden güncel bilgi almak önerilir.' },

    { kind: 'tablo', basliklar: ['Soru', 'Kısa cevap'], satirlar: [
      ['Kime başvurulur?', 'İl tarım ve orman müdürlüğüne'],
      ['İzin kaç aşamalı?', 'İki: kuruluş izni ve çalışma izni'],
      ['Kuruluş izni ne kadar geçerli?', 'Üretim yerlerinde altı ay'],
      ['Veteriner hekim şart mı?', 'Evet; en az bir yıllık sözleşme'],
      ['Denetim ne sıklıkta?', 'Yılda en az bir kez'],
    ]},

    { kind: 'baslik', metin: 'Üretim izni neden var?' },
    { kind: 'paragraf', metin: '5199 sayılı Hayvanları Koruma Kanunu\'nun 10. maddesi, ev hayvanı satış yerlerinde kedi ve köpek bulundurulmasını yasaklıyor; satış ancak Bakanlıkça izin verilen ev hayvanı üretim yerlerindeki hayvanlar için yapılabiliyor. Yani pet shopların kedi ve köpek satışı, izinli üretim yerlerine bağlanmış durumda. Satış tarafını [[kedi-kopek-satmak-yasak-mi|kedi köpek satışı yasak mı]] yazımızda ayrıca anlattık.' },
    { kind: 'paragraf', metin: 'Aynı maddeye göre ev hayvanlarının üretimini ve ticaretini yapanlar, hayvanların sağlığını tehlikeye atmamak için gerekli anatomik, fizyolojik ve davranış karakteristikleriyle ilgili önlemleri almakla yükümlü. İzin sistemi bu yükümlülüğün denetlenebilir hâle gelmesini sağlıyor.' },

    { kind: 'baslik', metin: 'Kimler izin kapsamının dışında kalıyor?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 2. maddesine göre, bir kişinin yalnızca kendi ihtiyacı için ürettiği ya da bulundurduğu ve ticarete konu etmediği ev hayvanları yönetmeliğin kapsamına girmiyor. Evde tek köpek besleyen ya da sevdiği çifti çiftleştirip yavruları satmayı düşünmeyen kişi bu nedenle üretim yeri izni almak zorunda değil.' },
    { kind: 'yanilgi', baslik: '"Kendi köpeğimin yavrularını satmak için izin gerekmez"', metin: 'Kapsam dışı kalan, ticarete konu edilmeyen hayvanlar. Satış amacı varsa durum değişiyor: 5199 sayılı kanunun 14. maddesi hayvan bakımı eğitimi almamış kişilerin ev hayvanı satmasını yasaklıyor. Yavrulara karşılıksız yuva bulmak ise satış sayılmıyor.' },

    { kind: 'baslik', metin: 'Başvuru iki aşamada ilerliyor' },
    { kind: 'paragraf', metin: 'İş yeri açmak isteyen gerçek ya da tüzel kişi, önce il müdürlüğüne yazılı ya da elektronik başvuru yapıyor. Dosya incelendikten sonra yerinde bir uygunluk kontrolü yapılıyor; bu kontrolü hayvan sağlığı şube müdürlüğünde görevli en az iki veteriner hekimden oluşan yer seçim komisyonu yürütüyor.' },
    { kind: 'liste', maddeler: [
      '**Kuruluş izni:** Yer uygun bulunursa verilir. Üretim yerlerinde altı ay geçerlidir; bu sürede işyeri hazır hâle getirilemezse il müdürlüğü aynı miktarda ek süre verebilir',
      '**İş yeri açma raporu:** Kuruluş sonrasında il müdürlüğü yerinde inceleme yapar ve rapor düzenler',
      '**Çalışma izin belgesi:** Rapora göre mevzuata uygun bulunan yere il müdürlüğünce verilir',
    ]},
    { kind: 'paragraf', metin: 'Çalışma izni verilen iş yerlerinin bilgisi bölge veteriner hekimler odasına da bildiriliyor.' },

    { kind: 'baslik', metin: 'Başvuruda hangi belgeler isteniyor?' },
    { kind: 'tablo', basliklar: ['Aşama', 'İstenen belge'], satirlar: [
      ['Kuruluş izni', 'Yönetmelik ekindeki başvuru dilekçesi'],
      ['Kuruluş izni', 'Çevreyi gösteren vaziyet ya da hâlihazır plan'],
      ['Kuruluş izni', 'İş yerinin bölümlerini gösteren plan ve adres'],
      ['Kuruluş izni', 'Su faturası sureti ya da su kullanma belgesi'],
      ['Kuruluş izni', 'Şirketse ticaret sicil bilgisi'],
      ['Çalışma izni', 'Veteriner hekimle en az bir yıllık, odaca onaylı sözleşme'],
    ]},

    { kind: 'baslik', metin: 'Üretim yerinde hangi bölümler olmalı?' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 8. maddesi kedi ve köpek üretim yerleri için bir donanım listesi koyuyor. Bunlar "olursa iyi olur" değil, zorunlu özellikler:' },
    { kind: 'liste', maddeler: [
      'İdari büro, veteriner hekim odası, duş, depo ve tuvalet',
      'Hayvan karantina ünitesi, yiyeceklerin hazırlandığı bölüm ve temizlik ünitesi',
      'Kapalı ve açık gezdirme alanı; gezdirme alanlarının toprak zeminli olması',
      'Diğer ünitelerden bağımsız, kapalı bir bölümde ırka uygun boyutta doğum ünitesi ve karantina ünitesi',
      'Irka ve boyuta uygun, yerden en az 10 cm yüksekte yatma platformları',
      'Hayvanların ayrı ayrı bölümlerde tutulması ve her ünitenin üzerinde hayvanın türü, ırkı ve yaşının yazılı olması',
    ]},
    { kind: 'paragraf', metin: 'Açık alandaki kafesli bölümün yarısının yağmur ve güneşi engelleyen bir çatıyla kapatılması, tüm kafeslerde dezenfekte edilebilir su ve mama kabı bulunması da aynı maddede sayılıyor. Genel şartlar arasında iş yerinin haftada bir dezenfekte edilmesi de yer alıyor.' },

    { kind: 'baslik', metin: 'Veteriner hekim istihdamı zorunlu' },
    { kind: 'paragraf', metin: 'Yönetmeliğin 17. maddesi, kapsamdaki iş yerlerinde veteriner hekim istihdamını zorunlu kılıyor. Hekim muayenehane, klinik, poliklinik ya da hayvan hastanesinde görevli olmalı; çalışma gün, saat ve ücret bölge veteriner hekimler odasınca belirleniyor ve sözleşmede yer alıyor. Üretim yerindeki aşı, parazit uygulaması ve sağlık kayıtlarının sorumluluğu iş yeri veteriner hekimi ile işverene ait.' },
    { kind: 'paragraf', metin: 'Yavrularda aşı ve parazit uygulamasının zamanını Bakanlık belirliyor; son aşıdan on beş gün geçmeyen yavrular satış yerine gönderilemiyor. Bir hayvanın sağlığıyla ilgili her soru için karar yeri iş yeri hekimi ya da kendi veteriner hekiminiz olmalı; yavru takvimi için [[kopek-asi-takvimi|köpek aşı takvimi]] yazısına bakılabilir.' },

    { kind: 'baslik', metin: 'Kimlik, kayıt ve denetim' },
    { kind: 'paragraf', metin: 'İki aylık kedi ve köpek yavruları veteriner hekim denetiminde kimliklendirilmek zorunda; üretim ve satış yerlerindeki her hayvan için ayrı kimlik belgesi düzenleniyor. Mikroçip konusunu [[mikrocip-nedir|mikroçip nedir]] yazısında, kayıt sürecini [[petvet-kayit|PETVET kaydı]] yazısında anlattık.' },
    { kind: 'liste', maddeler: [
      'Hayvanlar kayıt defterine işlenir; üretilen hayvanlar için üretim belgesi düzenlenir',
      'Dezenfeksiyon işlemleri dezenfeksiyon defterine yazılır',
      'Denetim defterinin her sayfası il müdürlüğüne numaralatılıp mühürletilir',
      'İş yeri sahibi faaliyet raporunu altı ayda bir il ya da ilçe müdürlüğüne bildirir',
    ]},
    { kind: 'paragraf', metin: 'Denetim, yılda en az bir kez ve iki denetim elemanı tarafından yapılıyor. Yönetmeliğe aykırılık hâlinde 5996 sayılı Veteriner Hizmetleri, Bitki Sağlığı, Gıda ve Yem Kanunu ile 5199 sayılı Kanun ve ilgili diğer mevzuata göre işlem yapılıyor.' },

    { kind: 'baslik', metin: 'İzin hangi durumda geçerliliğini yitiriyor?' },
    { kind: 'paragraf', metin: 'Çalışma izni kişiye, yazılı adrese, faaliyet alanına ve faaliyet gösterilen türlere bağlı. Bunlardan biri değişirse izin geçerliliğini kaybediyor. Örneğin yalnızca kedi üretimi için alınmış izinle köpek üretmek olmaz. Vaziyet planında il müdürlüğünün izni olmadan değişiklik ya da ilave yapılamıyor.' },
    { kind: 'uyari', metin: 'Sahip ya da unvan değişecekse en az bir ay önceden dilekçeyle il müdürlüğüne bildirmek gerekiyor. Faaliyeti durdurmak ya da kapatmak da bir ay önceden yazıyla bildirilmek zorunda.' },
    { kind: 'paragraf', metin: 'Üretimin bir de yasak türü var: 5199 sayılı kanunun 14. maddesi, Bakanlıkça belirlenen tehlike arz eden hayvanların üretilmesini yasaklıyor. Bu kapsamdaki ırklar için [[yasakli-kopek-irklari|yasaklı köpek ırkları]] yazısına bakılabilir. Kanun bütününün özeti ise [[5199-sayili-kanun|5199 sayılı kanun]] yazısında.' },
  ],
  kontrolListesi: [
    'Kuruluş izni alındı mı?',
    'Çalışma izin belgesi var mı?',
    'Veteriner hekim sözleşmesi var mı?',
    'Karantina ve doğum ünitesi var mı?',
    'Yavrular için kimlik belgesi var mı?',
    'Kayıt ve denetim defteri var mı?',
  ],
  sss: [
    { soru: 'Köpek üretmek için ruhsat gerekir mi?', cevap: 'Ticari amaçla köpek üretmek için il tarım ve orman müdürlüğünden kuruluş izni ve ardından çalışma izin belgesi almak gerekiyor. Yalnızca kendi ihtiyacı için hayvan bulunduran ve ticaret yapmayan kişiler yönetmeliğin kapsamı dışında kalıyor.' },
    { soru: 'Kuruluş izni kaç ay geçerli?', cevap: 'Üretim ve eğitim yerleri için kuruluş izni altı ay geçerli; barınma ve satış yerlerinde süre üç ay. Bu sürede iş yeri hazır hâle getirilemezse il müdürlüğü uygun görürse aynı miktarda ilave süre verebiliyor.' },
    { soru: 'Üretim yerinde veteriner hekim çalıştırmak şart mı?', cevap: 'Evet, yönetmeliğin 17. maddesi kapsamdaki iş yerlerinde veteriner hekim istihdamını zorunlu kılıyor. Çalışma izni için muayenehane, klinik, poliklinik ya da hayvan hastanesinde çalışan bir hekimle, bölge veteriner hekimler odasınca onaylı en az bir yıllık sözleşme isteniyor.' },
    { soru: 'Yavrular hangi yaşta kimliklendirilir?', cevap: 'İş yerlerindeki iki aylık kedi ve köpek yavruları veteriner hekim denetiminde kimliklendiriliyor. Üretim ve satış yerlerinde her hayvan için ayrı kimlik belgesi düzenleniyor. Kimlik belgesinin içeriği, kedi, köpek ve gelinciklerin kimliklendirilmesine dair yönetmelikte belirtilen biçimde hazırlanıyor.' },
    { soru: 'Üretim yeri ne sıklıkla denetlenir?', cevap: 'Yönetmeliğe göre iş yerleri yılda en az bir kez, iki denetim elemanı tarafından denetleniyor. Tespit edilen konular denetim defterine yazılıyor ve tutanağın bir nüshası iş yeri sahibine ya da iş yeri veteriner hekimine veriliyor. İş yeri sahibi ayrıca altı ayda bir faaliyet raporu bildiriyor.' },
    { soru: 'Çalışma izni başka adrese taşınabilir mi?', cevap: 'Hayır. Çalışma izni kişiye, yazılı adrese, faaliyet alanına ve türlere bağlı olduğu için bunlardan biri değişirse geçerliliğini kaybediyor. Yeni adreste faaliyet için yeniden izin süreci gerekiyor. Sahip ya da unvan değişiklikleri en az bir ay önceden il müdürlüğüne bildirilmek zorunda.' },
  ],
  kaynaklar: [
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: 'Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelik (madde 2, 5, 6, 7, 8, 14, 15, 16, 17, 19, 20)',
      adres: 'https://mevzuat.gov.tr/File/GeneratePdf?mevzuatNo=15374&mevzuatTur=KurumVeKurulusYonetmeligi&mevzuatTertip=5',
    },
    {
      kurum: 'T.C. Cumhurbaşkanlığı Mevzuat Bilgi Sistemi',
      baslik: '5199 sayılı Hayvanları Koruma Kanunu (madde 10 ve 14)',
      adres: 'https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=1&MevzuatNo=5199&MevzuatTertip=5',
    },
    {
      kurum: 'T.C. Resmî Gazete',
      baslik: 'Ev ve Süs Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Hakkında Yönetmelikte Değişiklik Yapılmasına Dair Yönetmelik (6 Nisan 2022, sayı 31801)',
      adres: 'https://www.resmigazete.gov.tr/eskiler/2022/04/20220406-17.htm',
    },
    {
      kurum: 'T.C. Tarım ve Orman Bakanlığı Samsun İl Müdürlüğü',
      baslik: 'Ev Hayvanlarının Üretim, Satış, Barınma ve Eğitim Yerleri Faaliyetinde Bulunan İş Yerlerinin Dikkatine',
      adres: 'https://samsun.tarimorman.gov.tr/Duyuru/376/Ev-Hayvanlarinin-Uretim-Satis-Barinma-Ve-Egitim-Yerleri-Faaliyetinde-Bulunan-Is-Yerlerinin-Dikkatine',
    },
  ],
};
