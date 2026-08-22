import type { LegalDocument, LegalDocumentId } from './types';

/**
 * Türkçe hukuki metinler.
 *
 * ⚠️ METİN ÜRÜNÜN GERÇEĞİNİ ANLATIR, iyi niyetini değil. Buradaki her satır 22.08.2026
 * tarihinde canlı veritabanı ve kod okunarak yazıldı: tablo kolonları, saklama süreleri,
 * hangi sağlayıcıya ne gittiği ve uygulamanın hangi izinleri istediği ölçüldü. Ürün
 * değişirse metin de değişmek zorunda — aksi hâlde belge, olmayan bir korumayı varmış
 * gibi gösterir.
 *
 * ⚠️ YAZILMAYAN ŞEY DE KARARDIR. Analitik, reklam kimliği, konum takibi ve oturum
 * kaydı metinlerde geçmiyor çünkü uygulamada YOK (bağımlılık listesi tarandı). Bunları
 * "ileride olabilir" diye yazmak, bugün toplanmayan veriyi toplanıyor göstermek olurdu.
 */

const YURURLUK = '22 Ağustos 2026';

export const legalDocumentsTR: Record<LegalDocumentId, LegalDocument> = {
  // =========================================================================
  privacy: {
    id: 'privacy',
    slug: '/privacy',
    title: 'Gizlilik Politikası',
    summary:
      'Verilerinizi neden ve nasıl işlediğimizin sade dille anlatımı. Resmî ayrıntılar Aydınlatma Metni’nde.',
    effectiveDate: YURURLUK,
    related: ['kvkk', 'consent', 'account-deletion'],
    required: true,
    intro: [
      {
        kind: 'callout',
        value:
          'Bu metin gizliliğinize nasıl davrandığımızı gündelik dille anlatır. Hukuki ve teknik ayrıntı arıyorsanız **Aydınlatma Metni**’ne bakın; ikisi çelişirse Aydınlatma Metni esastır.',
      },
      {
        kind: 'text',
        value:
          'Veterito, evcil hayvan sahiplerini, veteriner hekimleri ve klinikleri bir araya getiren bir platformdur. Hayvanınızın sağlık geçmişini tutar, klinikten randevu almanızı sağlar, sahiplendirme ilanlarını ve hayvanseverlerin paylaşımlarını bir araya getirir.',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Üç cümlelik özet',
        blocks: [
          {
            kind: 'list',
            items: [
              '**Verinizi satmayız.** Reklam ağlarına aktarmayız, reklam kimliği kullanmayız.',
              '**Hayvanınızın sağlık verisi sizindir.** Kimin göreceğine siz karar verirsiniz; varsayılan olarak yalnız sizsiniz.',
              '**Toplamadığımız veri en güvenli veridir.** Uygulamada analitik, oturum kaydı ve konum takibi yoktur.',
            ],
          },
        ],
      },
      {
        number: '2',
        title: 'Hangi verileri topluyoruz',
        blocks: [
          {
            kind: 'text',
            value:
              'Kısaca: hesabınızı açarken verdikleriniz, hayvanınız için girdikleriniz ve platformu kullanırken oluşan kayıtlar. Kalem kalem listesi **Aydınlatma Metni §2**’dedir.',
          },
          {
            kind: 'text',
            value:
              'Yalnızca hayvanınızla ilgili girdiğiniz sağlık bilgileri (aşı, ilaç, kilo, teşhis, reçete) hassas görünse de bunlar **hayvana ait** kayıtlardır, size ait sağlık verisi değildir. Yine de aynı özenle korunurlar.',
          },
        ],
      },
      {
        number: '3',
        title: 'Neyi kim görür',
        blocks: [
          {
            kind: 'table',
            columns: ['İçerik', 'Kimler görebilir'],
            rows: [
              ['Hayvan sağlık kayıtları (aşı, ilaç, kilo, teşhis)', 'Yalnız siz. Bir kliniğe açmadıkça kimse göremez'],
              ['Hayvan profili', 'Siz “herkese açık” yaptıysanız diğer kullanıcılar; aksi hâlde yalnız siz'],
              ['Gönderiler ve yorumlar', 'Seçtiğiniz görünürlüğe göre; hesabınız gizliyse yalnız takipçileriniz'],
              ['Profil adı, kullanıcı adı ve fotoğrafı', 'Aramada ve profilinizde görünür'],
              ['Mesajlar', 'Yalnız yazıştığınız kişi'],
              ['Randevu ve klinik notları', 'Siz ve randevu aldığınız kliniğin yetkili personeli'],
              ['Telefon, doğum tarihi, e-posta', 'Yalnız siz. Başka kullanıcılara gösterilmez'],
            ],
          },
          {
            kind: 'callout',
            value:
              'Bu ayrımlar arayüz nezaketi değil: erişim kuralları **sunucuda satır düzeyinde** uygulanır. Ekranda gizlenen bir veri, sunucudan da gelmez.',
          },
        ],
      },
      {
        number: '4',
        title: 'Mesajlaşma ve istenmeyen iletiler',
        blocks: [
          {
            kind: 'text',
            value:
              'Sizi takip etmeyen ve aranızda klinik ilişkisi bulunmayan biri size yazdığında mesajı doğrudan kutunuza düşmez; **Mesaj İstekleri**’nde bekler. Siz kabul edene kadar o kişi **yalnızca tek bir mesaj** gönderebilir.',
          },
          {
            kind: 'list',
            items: [
              'İsteği silerseniz o kişi size bir daha yazamaz.',
              'İstek beklerken mesajı okumanız karşı tarafa **bildirilmez**.',
              'Randevu aldığınız ya da müşterisi olduğunuz kliniğin hekimi bu kuraldan muaftır. Amaç, hayvanınızla ilgili bir mesajın istek kutusunda kaybolmasını önlemektir.',
            ],
          },
        ],
      },
      {
        number: '5',
        title: 'Verilerinizi kimlerle paylaşıyoruz',
        blocks: [
          {
            kind: 'text',
            value:
              'Yalnızca hizmeti çalıştıran altyapı sağlayıcılarıyla, sözleşmeli ve sınırlı amaçla. Tam liste ve konumları **Aydınlatma Metni §4**’tedir. Reklam ağlarına veri satışı ya da paylaşımı yapmayız.',
          },
        ],
      },
      {
        number: '6',
        title: 'Güvenlik',
        blocks: [
          {
            kind: 'text',
            value:
              'Aktarımda ve saklamada şifreleme, satır düzeyinde erişim denetimi, giriş kayıtları ve en az yetki ilkesi uygularız. Yüklediğiniz görsel ve videolar herkese açık bir adreste durmaz; her görüntüleme için **kısa ömürlü imzalı adres** üretilir.',
          },
          {
            kind: 'text',
            value:
              'Güvenlik yapılandırmasının ayrıntılarını paylaşmayız. Sebebi, saldırı yüzeyini genişletmemektir.',
          },
        ],
      },
      {
        number: '7',
        title: 'Saklama ve silme',
        blocks: [
          {
            kind: 'text',
            value:
              'Verileriniz hesabınız açık olduğu sürece saklanır. Hesabınızı uygulama içinden silebilirsiniz; silme **anında** gerçekleşir, bekleme süresi yoktur ve **geri alınamaz**. Adımlar için **Hesap Silme** sayfasına bakın.',
          },
        ],
      },
      {
        number: '8',
        title: 'Çocuklar',
        blocks: [
          {
            kind: 'text',
            value:
              'Veterito çocuklara yönelik bir uygulama değildir ve **13 yaşından küçüklerin** kullanımına kapalıdır. Ayrıntı için **Çocuk Güvenliği** sayfasına bakın.',
          },
        ],
      },
      {
        number: '9',
        title: 'Haklarınız ve iletişim',
        blocks: [
          {
            kind: 'text',
            value:
              'Erişim, düzeltme, silme, veri indirme ve itiraz haklarınızı uygulama içinden ya da `info@veterito.com` üzerinden kullanabilirsiniz. Hukuki dayanak ve süreler **Aydınlatma Metni §6**’dadır.',
          },
        ],
      },
      {
        number: '10',
        title: 'Değişiklikler',
        blocks: [
          {
            kind: 'text',
            value:
              'Bu politikayı güncellersek yürürlük tarihini değiştirir ve önemli değişikliklerde uygulama içinden bilgilendiririz.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  kvkk: {
    id: 'kvkk',
    slug: '/kvkk',
    title: 'Aydınlatma Metni',
    summary:
      'KVKK Md. 10 kapsamında yasal bilgilendirme: hangi veri, hangi amaç, hangi hukuki sebep, nereye aktarılıyor, ne kadar saklanıyor.',
    effectiveDate: YURURLUK,
    related: ['privacy', 'consent', 'account-deletion'],
    required: true,
    intro: [
      {
        kind: 'callout',
        value:
          'Bu metin 6698 sayılı Kişisel Verilerin Korunması Kanunu (**KVKK**) **Md. 10** kapsamında bir **aydınlatma** metnidir: sizi bilgilendirir, onay istemez. Açık rızaya bağlı işlemeler ayrı **Açık Rıza Metni** ile alınır. Aydınlatma ile rıza aynı belgede toplanmaz.',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Veri sorumlusu',
        blocks: [
          {
            kind: 'text',
            value:
              'Veterito bir dijital platformdur. Platform aracılığıyla işlenen kişisel verilerin veri sorumlusu, platformu işleten **işletmecidir**.',
          },
          {
            kind: 'list',
            items: [
              '**Veri sorumlusu / işletmeci:** `Veterito`',
              '**KVKK başvuru ve iletişim:** `info@veterito.com`',
            ],
          },
        ],
      },
      {
        number: '2',
        title: 'İşlediğimiz kişisel veriler',
        blocks: [
          {
            kind: 'table',
            columns: ['Kategori', 'Veriler', 'Kaynak'],
            rows: [
              ['Kimlik', 'Ad, soyad, kullanıcı adı', 'Sizin girişiniz'],
              ['İletişim', 'E-posta; telefon (opsiyonel)', 'Sizin girişiniz'],
              ['Profil', 'Profil fotoğrafı, il/ilçe, doğum tarihi (opsiyonel), ilgilendiğiniz hayvan türleri, hesap gizliliği tercihi', 'Sizin girişiniz'],
              ['Hayvan bilgisi', 'Ad, tür, ırk, cinsiyet, doğum tarihi, kısırlık durumu, tanıtım metni, fotoğraf ve videolar, mikroçip ve pasaport numarası', 'Sizin girişiniz'],
              ['Hayvan sağlık kaydı', 'Aşılar, ilaçlar, parazit uygulamaları, kilo ölçümleri, tıbbi işlemler, veteriner ziyaretleri, teşhis ve notlar, kronik durumlar, beslenme notları, reçeteler', 'Sizin ya da yetkilendirdiğiniz kliniğin girişi'],
              ['Randevu', 'Klinik, hizmet, tarih-saat, notunuz ve kliniğin notu', 'Sizin girişiniz + klinik'],
              ['Sosyal etkileşim', 'Gönderiler, yorumlar, beğeniler, kaydetmeler, takip ilişkileri, engellemeler, şikâyetler, içerik görüntülenmeleri', 'Kullanımınız'],
              ['Mesajlaşma', 'Mesaj içeriği, gönderilen medya, okundu bilgisi, mesaj isteği durumu', 'Kullanımınız'],
              ['Sahiplendirme', 'İlan içeriği ve başvurularınız (mesaj, iletişim telefonu)', 'Sizin girişiniz'],
              ['Klinik verisi (yalnız veteriner rolü)', 'Klinik bilgileri, ekip üyeleri, müşteri kayıtları, kliniğin uygulamayı kullanmayan müşterileri için ad/telefon/e-posta, gelir-gider kayıtları', 'Kliniğin girişi'],
              ['İşlem güvenliği', 'Giriş IP adresi, cihaz modeli, işletim sistemi ve sürümü, uygulama sürümü, platform', 'Otomatik'],
              ['Bildirim', 'Cihaz bildirim jetonu, platform, cihaz modeli, uygulama sürümü; bildirim tercihleriniz', 'Otomatik + tercihiniz'],
            ],
          },
          {
            kind: 'text',
            value:
              '**Giriş kayıtları (sınırlı, güvenlik amaçlı):** Hesabınızın güvenliği için giriş IP adresiniz ve cihaz bilgileriniz yalnızca giriş güvenliği kayıtlarında tutulur. Kullanıcı başına **en son 10 giriş** ve azami **180 gün** ile sınırlıdır; sonrasında otomatik silinir. Bu bilgileri pazarlama ya da analitik amacıyla işlemeyiz.',
          },
          {
            kind: 'callout',
            value:
              '**İşlemediklerimiz (veri minimizasyonu):** Reklam kimliği, konum (GPS) takibi, analitik ölçümü, oturum kaydı, çerez tabanlı reklam izleme, üçüncü taraf reklam ağı ve parmak izi çıkarma **kullanmıyoruz**. Uygulamada bu amaçlara hizmet eden hiçbir yazılım kütüphanesi bulunmuyor.',
          },
        ],
      },
      {
        number: '3',
        title: 'Cihaz izinleri',
        blocks: [
          {
            kind: 'text',
            value:
              'Uygulama yalnız şu izinleri, yalnız kullandığınız özellik için ister. Reddederseniz uygulamanın geri kalanı çalışmaya devam eder.',
          },
          {
            kind: 'table',
            columns: ['İzin', 'Ne için', 'Zorunlu mu'],
            rows: [
              ['Fotoğraflar', 'Profil ve hayvan fotoğrafı seçmek, gönderi ve mesaja görsel eklemek', 'Hayır'],
              ['Kamera', 'Aynı işleri anlık çekimle yapmak', 'Hayır'],
              ['Mikrofon', 'Video çekerken sesin kaydedilmesi', 'Hayır'],
              ['Takvim', 'Randevunuzu cihaz takviminize eklemek', 'Hayır'],
              ['Bildirim', 'Randevu, aşı hatırlatması ve mesaj bildirimleri', 'Hayır'],
            ],
          },
          {
            kind: 'text',
            value:
              'Konum izni istemiyoruz. Klinik dizinindeki mesafe bilgisi, kliniğin kendi beyan ettiği adrese ve sizin seçtiğiniz il/ilçeye dayanır; cihazınızın konumu okunmaz.',
          },
        ],
      },
      {
        number: '4',
        title: 'Verilerin aktarılması (KVKK Md. 8-9)',
        blocks: [
          {
            kind: 'text',
            value: 'Hizmeti sunmak için aşağıdaki **veri işleyenlerle** sözleşmeli çalışırız.',
          },
          {
            kind: 'table',
            columns: ['İşleyen', 'Amaç', 'Konum'],
            rows: [
              ['Supabase', 'Veritabanı, kimlik doğrulama, sunucu işlevleri', '**AB, Frankfurt / Almanya**'],
              ['Cloudflare R2 + CDN', 'Görsel, video ve belge depolama ve dağıtımı', 'Küresel uç ağı'],
              ['Resend', 'İşlemsel e-posta (doğrulama, şifre sıfırlama, hesap bildirimleri)', '**AB, İrlanda**'],
              ['Expo (Expo Application Services)', 'Anlık bildirimin cihaza iletilmesi', 'ABD'],
              ['Apple Push Notification service', 'iOS cihazlara bildirim iletimi', 'ABD / küresel'],
              ['Google Firebase Cloud Messaging', 'Android cihazlara bildirim iletimi', 'ABD'],
              ['Apple ile Giriş', 'Apple hesabınızla kimlik doğrulama (yalnız kullanırsanız)', 'ABD / küresel'],
              ['Google ile Giriş', 'Google hesabınızla kimlik doğrulama (yalnız kullanırsanız)', 'ABD'],
              ['Apple App Store / Google Play', 'Uygulamanın dağıtımı ve güncellenmesi', 'ABD / küresel'],
            ],
          },
          {
            kind: 'text',
            value:
              '**Yurt dışına aktarım (Md. 9):** Hesabınız, hayvan kayıtlarınız, mesajlarınız ve yüklediğiniz dosyalar **Avrupa Birliği** (Almanya, İrlanda) altyapısında işlenir. Bildirim gönderimi için **cihaz bildirim jetonunuz** ABD merkezli bildirim altyapılarına aktarılır; bu jeton tek başına kimliğinizi göstermez ve yalnız bildirimi iletmek için kullanılır. Apple/Google ile giriş yalnız bu yolu **siz seçerseniz** devreye girer. Aktarımlar KVKK Md. 9’da öngörülen uygun güvence dayanaklarıyla yapılır.',
          },
          {
            kind: 'callout',
            value:
              '**Kliniklerle paylaşım:** Bir klinikten randevu aldığınızda ya da o kliniğin müşteri listesine eklenmeyi kabul ettiğinizde, adınız ve ilgili hayvanınızın sağlık kaydı **o kliniğin yetkili personeline** görünür. Bu bir aktarım değil, hizmetin kendisidir ve siz başlatırsınız. İlişkiyi uygulama içinden sonlandırabilirsiniz.',
          },
        ],
      },
      {
        number: '5',
        title: 'İşleme amaçları ve hukuki sebepler (KVKK Md. 5)',
        blocks: [
          {
            kind: 'text',
            value: '**a) Sözleşmenin ifası (Md. 5/2-c).** Üyelikle talep ettiğiniz hizmetin kendisi:',
          },
          {
            kind: 'list',
            items: [
              'Hesap oluşturma ve profil yönetimi',
              'Hayvan profili ve sağlık kaydı tutma',
              'Randevu talebi, teklif ve onay akışı',
              'Klinik vitrini, ekip ve müşteri yönetimi (veteriner rolü)',
              'Mesajlaşma, gönderi paylaşımı ve sahiplendirme ilanları',
            ],
          },
          { kind: 'text', value: '**b) Meşru menfaat (Md. 5/2-f):**' },
          {
            kind: 'list',
            items: [
              'Platform güvenliği, kötüye kullanım ve spam önleme',
              'Giriş güvenliği kayıtları (sınırlı süre ve sayıda)',
              'Şikâyet ve moderasyon süreçlerinin yürütülmesi',
            ],
          },
          {
            kind: 'text',
            value:
              '**c) Açık rıza (Md. 5/1-a).** Yalnız **Açık Rıza Metni**’nde sayılan opsiyonel işlemeler. Bunlar varsayılan olarak **kapalıdır** ve istediğiniz an geri çekebilirsiniz.',
          },
          {
            kind: 'text',
            value:
              '**d) Hukuki yükümlülük (Md. 5/2-ç):** Mevzuatın saklamamızı zorunlu kıldığı kayıtlar.',
          },
        ],
      },
      {
        number: '6',
        title: 'Saklama süreleri',
        blocks: [
          {
            kind: 'table',
            columns: ['Veri', 'Süre'],
            rows: [
              ['Aktif hesap verisi', 'Hesap açık olduğu sürece'],
              ['Hesap silme', 'Talep **anında** işlenir: profil, hayvan kayıtları, gönderiler, mesajlar ve yüklediğiniz dosyalar geri alınamaz biçimde silinir. Bekleme ya da geri alma penceresi **yoktur**'],
              ['Giriş güvenliği kayıtları', 'Kullanıcı başına en son **10 giriş** ve azami **180 gün**; sonra otomatik imha'],
              ['Kliniğin tuttuğu hasta kaydı', 'Kliniğin veteriner hekimlik mevzuatından doğan saklama yükümlülüğü süresince. Bu kayıtların sorumlusu ilgili kliniktir'],
              ['Şikâyet ve moderasyon kayıtları', 'İnceleme tamamlanana ve yasal itiraz süresi dolana kadar'],
            ],
          },
          {
            kind: 'callout',
            value:
              '**Klinik kaydı ayrı bir konudur.** Hesabınızı sildiğinizde sizin girdiğiniz kayıtlar silinir; ancak bir kliniğin kendi hasta dosyasına işlediği muayene kaydı, o kliniğin mevzuattan doğan yükümlülüğü kapsamında kalabilir. Bu kayıtlar için ilgili kliniğe başvurmanız gerekir.',
          },
        ],
      },
      {
        number: '7',
        title: 'Haklarınız (KVKK Md. 11)',
        blocks: [
          {
            kind: 'text',
            value:
              'Verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, amaca uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı tarafları bilme, **düzeltme**, **silme veya yok edilmesini isteme**, **taşınabilir biçimde talep etme**, **işlemeye itiraz** ve Kurul’a şikâyet haklarına sahipsiniz.',
          },
          {
            kind: 'text',
            value:
              '**Yanıt süresi:** Uygulama içinden yaptığınız hesap silme **anında** gerçekleşir, beklemezsiniz. E-posta ile ilettiğiniz talepler için yasal azami süre 30 gündür; hedefimiz bu süreyi beklemeden sonuçlandırmaktır.',
          },
        ],
      },
      {
        number: '8',
        title: 'Küçüklerin verisi',
        blocks: [
          {
            kind: 'text',
            value:
              'Veterito **13 yaşından küçük** kullanıcılara yönelik değildir ve bilerek 13 yaş altından veri toplamaz. 13 yaş altına ait bir hesap tespit edilirse kapatılır ve verileri silinir. Ayrıntı: **Çocuk Güvenliği**.',
          },
        ],
      },
      {
        number: '9',
        title: 'İletişim ve şikâyet',
        blocks: [
          {
            kind: 'list',
            items: [
              '**Başvuru:** `info@veterito.com`',
              'Başvurunuz sonuçsuz kalırsa Kişisel Verileri Koruma Kurumu’na şikâyette bulunabilirsiniz.',
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  consent: {
    id: 'consent',
    slug: '/consent',
    title: 'Açık Rıza Metni',
    summary:
      'Yalnız opsiyonel işlemeler için. Hiçbiri hizmetin şartı değildir; hepsi varsayılan kapalıdır ve geri çekilebilir.',
    effectiveDate: YURURLUK,
    related: ['kvkk', 'privacy'],
    required: true,
    intro: [
      {
        kind: 'callout',
        value:
          'Bu metin **yalnızca opsiyonel** işlemeler içindir. Aşağıdakilerin hiçbirine izin vermeseniz de Veterito’yu tam olarak kullanabilirsiniz. Hesabınız, hayvan kayıtlarınız, randevularınız ve mesajlaşmanız çalışmaya devam eder.',
      },
      {
        kind: 'text',
        value:
          'Zorunlu işlemeler açık rızaya değil, **sözleşmenin ifasına** ve **meşru menfaate** dayanır; onlar için rıza istemeyiz ve isteseydik zaten geçersiz olurdu (hizmetin şartı hâline getirilen rıza serbest iradeye dayanmaz).',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Rızanıza tabi işlemeler',
        blocks: [
          {
            kind: 'table',
            columns: ['İşleme', 'Ne anlama geliyor', 'Varsayılan'],
            rows: [
              ['Bildirim gönderimi', 'Randevu, aşı hatırlatması, mesaj ve sosyal etkileşim bildirimlerinin cihazınıza iletilmesi. Bunun için cihaz bildirim jetonunuz işlenir', '**Kapalı.** Cihaz izni vermedikçe gönderilmez'],
              ['E-posta ile hatırlatma', 'Aşı ve randevu hatırlatmalarının e-posta ile de gönderilmesi', '**Kapalı**'],
              ['Klinik müşteri listesine eklenme', 'Randevu aldığınız kliniğin sizi müşteri listesine ekleyip hayvanınızın kaydını tutabilmesi', '**Kapalı.** Davet gelir, onayı siz verirsiniz'],
              ['Hayvan profilinin herkese açık olması', 'Hayvanınızın profilinin diğer kullanıcılara görünmesi', '**Kapalı**'],
              ['Eşleşme (çiftleştirme) ilanı', 'Hayvanınızın eşleşmeye açık olarak listelenmesi', '**Kapalı**'],
              ['Sağlık kaydının klinikle paylaşımı', 'Seçtiğiniz kliniğin hayvanınızın sağlık geçmişini görebilmesi', '**Kapalı.** Her hayvan için ayrı ayrı siz açarsınız'],
            ],
          },
          {
            kind: 'callout',
            value:
              'Listede **pazarlama iletişimi, reklam ve analitik yer almıyor**, çünkü bunları hiç yapmıyoruz. İleride eklenirse ayrı ve yeni bir rıza istenir; bu metne sessizce eklenmez.',
          },
        ],
      },
      {
        number: '2',
        title: 'Rızayı nasıl verir, nasıl geri çekersiniz',
        blocks: [
          {
            kind: 'text',
            value:
              'Her biri uygulama içindeki ilgili ekrandan açılıp kapatılır. Geri çekme, vermek kadar kolaydır ve tek dokunuştur.',
          },
          {
            kind: 'table',
            columns: ['İşleme', 'Nereden'],
            rows: [
              ['Bildirimler ve e-posta hatırlatmaları', 'Profil → Bildirim Tercihleri'],
              ['Klinik müşteri ilişkisi', 'Profil → Bildirimler → gelen davet'],
              ['Hayvan profilinin görünürlüğü', 'Hayvan profili → Düzenle → Görünürlük'],
              ['Eşleşme ilanı', 'Hayvan profili → Düzenle → Eşleşmeye açık'],
              ['Sağlık kaydının klinikle paylaşımı', 'Hayvan profili → Düzenle → Sağlık bilgisi görünürlüğü'],
            ],
          },
          {
            kind: 'text',
            value:
              'Geri çekme **ileriye etkilidir**: geri çekmeden önce hukuka uygun biçimde yapılmış işlemeler geçerli kalır, sonrasında işleme durur.',
          },
        ],
      },
      {
        number: '3',
        title: 'Rıza vermezseniz ne olur',
        blocks: [
          {
            kind: 'list',
            items: [
              'Hesabınızı açar, hayvan kaydı tutar, randevu alır, mesajlaşır ve gönderi paylaşırsınız.',
              'Yalnızca ilgili opsiyonel özellik çalışmaz. Örneğin bildirim kapalıysa hatırlatma cihazınıza düşmez; uygulamayı açtığınızda görürsünüz.',
              '**Hiçbir özelliğe erişiminiz bu yüzden kısıtlanmaz** ve size farklı bir fiyat uygulanmaz.',
            ],
          },
        ],
      },
    ],
    closing: [
      {
        kind: 'text',
        value:
          'Rızanızla ilgili sorularınız için `info@veterito.com`. Hangi verinin hangi hukuki sebeple işlendiğini **Aydınlatma Metni §5**’te bulabilirsiniz.',
      },
    ],
  },

  // =========================================================================
  terms: {
    id: 'terms',
    slug: '/terms',
    title: 'Kullanım Koşulları',
    summary: 'Platformu kullanırken uyulması gereken kurallar, hakların ve sorumlulukların sınırı.',
    effectiveDate: YURURLUK,
    related: ['privacy', 'service-agreement', 'child-safety'],
    required: true,
    intro: [
      {
        kind: 'callout',
        value:
          '**Veterito tıbbi tavsiye vermez.** Uygulamadaki içerikler ve hatırlatmalar bilgilendirme amaçlıdır; veteriner hekim muayenesinin yerine geçmez. Hayvanınızın sağlığıyla ilgili her kararı bir veteriner hekimle alın.',
      },
      {
        kind: 'text',
        value:
          'Veterito’yu kullanarak bu koşulları kabul etmiş olursunuz. Kabul etmiyorsanız uygulamayı kullanmayın; hesabınızı istediğiniz an silebilirsiniz.',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Hesap',
        blocks: [
          {
            kind: 'list',
            items: [
              'Hesap açmak için **en az 13 yaşında** olmalısınız.',
              'Verdiğiniz bilgilerin doğruluğundan siz sorumlusunuz.',
              'Hesabınızın güvenliği sizin sorumluluğunuzdadır; şüpheli bir giriş görürseniz **Profil → Giriş Geçmişi** ekranından kontrol edip şifrenizi değiştirin.',
              'Bir hesabı başkasına devredemez ya da kiralayamazsınız.',
            ],
          },
        ],
      },
      {
        number: '2',
        title: 'İçeriğiniz size aittir',
        blocks: [
          {
            kind: 'text',
            value:
              'Yüklediğiniz metin, fotoğraf ve videoların hakları sizde kalır. Bize verdiğiniz izin yalnızca **hizmeti sunmak için gereken** kadardır: içeriği saklamak, sizin belirlediğiniz kitleye göstermek ve teknik olarak işlemek (boyutlandırma, önbellekleme gibi).',
          },
          {
            kind: 'text',
            value:
              'Bu izin, hesabınızı ya da içeriğinizi sildiğinizde sona erer. İçeriğinizi reklamda kullanmaz, üçüncü taraflara lisanslamayız.',
          },
        ],
      },
      {
        number: '3',
        title: 'Yasak davranışlar',
        blocks: [
          {
            kind: 'list',
            items: [
              'Hayvana kötü muamele, şiddet ya da eziyet içeren veya bunu özendiren içerik paylaşmak.',
              'Hayvan ticaretini sahiplendirme gibi göstermek; **para karşılığı hayvan satışı** ilanı vermek.',
              'Başkasının kimliğine bürünmek, sahte klinik ya da sahte veteriner hekim profili oluşturmak.',
              'Taciz, tehdit, nefret söylemi, ayrımcılık ve ısrarlı istenmeyen mesaj.',
              'Yanıltıcı tıbbi iddia yaymak; reçeteli ilaçları hekim önerisi yerine geçecek şekilde tavsiye etmek.',
              'Spam, toplu tanıtım, veri kazıma (scraping), otomatik istek ve tersine mühendislik.',
              'Başkalarının kişisel verilerini izinsiz paylaşmak.',
              'Güvenlik önlemlerini aşmaya çalışmak ya da başkasının hesabına erişmeye teşebbüs etmek.',
            ],
          },
          {
            kind: 'callout',
            value:
              '**Sıfır tolerans:** Çocuk istismarı içeren materyal ve hayvana eziyet içeriği bildirim beklenmeden kaldırılır, hesap kalıcı olarak kapatılır ve gereken hâllerde yetkili makamlara bildirilir.',
          },
        ],
      },
      {
        number: '4',
        title: 'Şikâyet ve moderasyon',
        blocks: [
          {
            kind: 'text',
            value:
              'Her gönderi, yorum, profil ve sohbet uygulama içinden **şikâyet edilebilir**; istediğiniz kullanıcıyı **engelleyebilirsiniz**. Engellediğiniz kişi size yazamaz, sizi bulamaz.',
          },
          {
            kind: 'text',
            value:
              'Şikâyetleri **24 saat içinde** inceleriz. İnceleme sonucunda içerik kaldırılabilir, gizlenebilir ya da hesap askıya alınabilir. Kararlarımıza `info@veterito.com` üzerinden itiraz edebilirsiniz.',
          },
        ],
      },
      {
        number: '5',
        title: 'Veteriner hekimler ve klinikler',
        blocks: [
          {
            kind: 'text',
            value:
              'Veteriner rolü ve klinik sayfası açmak ek yükümlülükler doğurur. Bunlar **Kurumsal Sözleşme**’de düzenlenir; klinik hesabı açan kullanıcı o sözleşmeyi de kabul etmiş sayılır.',
          },
          {
            kind: 'text',
            value:
              '**Doğrulanmamış** klinik hesapları platformda görünür ancak bu şekilde işaretlenir ve bazı işlemleri yapamaz. Doğrulama, kliniğin beyanının platform tarafından kontrol edildiği anlamına gelir; bir kalite ya da yeterlilik garantisi değildir.',
          },
        ],
      },
      {
        number: '6',
        title: 'Randevular',
        blocks: [
          {
            kind: 'text',
            value:
              'Veterito randevu **talebi** iletir; hizmet ilişkisi sizinle klinik arasında kurulur. Randevunun kabulü, ertelenmesi, iptali ve verilen hizmet kliniğin sorumluluğundadır. Platform bu ilişkinin tarafı değildir.',
          },
        ],
      },
      {
        number: '7',
        title: 'Sahiplendirme',
        blocks: [
          {
            kind: 'text',
            value:
              'Sahiplendirme ilanları kullanıcılar tarafından oluşturulur. Platform ilan sahibini ve hayvanı doğrulamaz; buluşma, teslim ve sonrasında olanlar taraflar arasındadır. **Para karşılığı satış yasaktır** ve tespit edilen ilanlar kaldırılır.',
          },
        ],
      },
      {
        number: '8',
        title: 'Hizmetin sürekliliği ve değişiklikler',
        blocks: [
          {
            kind: 'text',
            value:
              'Hizmeti geliştirebilir, özellik ekleyip kaldırabiliriz. Sizin aleyhinize olan önemli değişiklikleri **önceden** duyururuz. Bakım ve teknik arıza nedeniyle kesinti yaşanabilir; kesintisiz erişim taahhüdü vermiyoruz.',
          },
        ],
      },
      {
        number: '9',
        title: 'Sorumluluğun sınırı',
        blocks: [
          {
            kind: 'list',
            items: [
              'Platform, kullanıcıların ürettiği içerikten ve kullanıcılar arasındaki ilişkilerden doğan zararlardan sorumlu değildir.',
              'Hayvan sağlığına ilişkin kararlarınızın sorumluluğu size ve veteriner hekiminize aittir.',
              'Bu sınırlamalar, tüketici mevzuatının emredici hükümlerini ve kasıt ya da ağır kusur hâllerini **kapsamaz**.',
            ],
          },
        ],
      },
      {
        number: '10',
        title: 'Hesabın kapatılması',
        blocks: [
          {
            kind: 'text',
            value:
              'Hesabınızı istediğiniz an uygulama içinden silebilirsiniz (bkz. **Hesap Silme**). Bu koşulların ağır ihlali hâlinde hesabınızı askıya alabilir ya da kapatabiliriz; kalıcı kapatmadan önce mümkün olduğunca uyarır ve gerekçesini bildiririz.',
          },
        ],
      },
      {
        number: '11',
        title: 'Uygulanacak hukuk',
        blocks: [
          {
            kind: 'text',
            value:
              'Bu koşullara Türkiye Cumhuriyeti hukuku uygulanır. Tüketici sıfatıyla sahip olduğunuz haklar ve yetkili tüketici hakem heyeti/mahkemesine başvurma imkânınız saklıdır.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  'service-agreement': {
    id: 'service-agreement',
    slug: '/service-agreement',
    title: 'Kurumsal Sözleşme',
    summary:
      'Veteriner hekimler, klinikler ve kurumsal hesaplar için ek koşullar: doğrulama, hasta verisi sorumluluğu, ekip yönetimi.',
    effectiveDate: YURURLUK,
    related: ['terms', 'kvkk', 'privacy'],
    required: true,
    intro: [
      {
        kind: 'callout',
        value:
          'Bu sözleşme **yalnızca klinik hesabı açan veya bir kliniğin ekibine katılan** kullanıcıları bağlar. Bireysel hayvan sahibiyseniz sizi ilgilendirmez; sizin için **Kullanım Koşulları** geçerlidir.',
      },
      {
        kind: 'text',
        value:
          'Klinik hesabı açtığınızda Kullanım Koşulları’na **ek olarak** bu sözleşmeyi de kabul etmiş olursunuz. İki metin çelişirse kurumsal kullanım bakımından bu sözleşme uygulanır.',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Kim klinik hesabı açabilir',
        blocks: [
          {
            kind: 'list',
            items: [
              'Türkiye’de faaliyet gösteren, mevzuata uygun ruhsatlı veteriner klinikleri, poliklinikleri ve hayvan hastaneleri.',
              'Bu kuruluşlar adına işlem yapmaya yetkili kişiler.',
              'Klinik hesabını açan kişi, kliniği temsile yetkili olduğunu beyan eder. Yetkisiz açılan hesaplar kapatılır.',
            ],
          },
        ],
      },
      {
        number: '2',
        title: 'Doğrulama',
        blocks: [
          {
            kind: 'text',
            value:
              'Klinikler platforma **doğrulanmamış** olarak katılır ve bu durum kullanıcılara açıkça gösterilir. Doğrulama başvurusunda kliniğin adı, adresi ve iletişim bilgileri istenir.',
          },
          {
            kind: 'text',
            value:
              '**Doğrulama bir kalite belgesi değildir.** Kliniğin beyan ettiği bilgilerin makul ölçüde kontrol edildiğini gösterir; verilen veteriner hekimlik hizmetinin niteliğine dair bir garanti içermez. Doğrulama geri alınabilir.',
          },
        ],
      },
      {
        number: '3',
        title: 'Hasta verisi: kim neyden sorumlu',
        blocks: [
          {
            kind: 'callout',
            value:
              'Bu bölüm sözleşmenin en önemli kısmıdır: hangi veride kimin **veri sorumlusu** olduğunu belirler.',
          },
          {
            kind: 'table',
            columns: ['Veri', 'Veri sorumlusu', 'Platformun rolü'],
            rows: [
              ['Hayvan sahibinin kendi girdiği kayıtlar', 'Hayvan sahibi (kendi verisi)', 'Barındırma'],
              ['Kliniğin oluşturduğu muayene, teşhis ve reçete kaydı', '**Klinik**', 'Veri işleyen'],
              ['Kliniğin eklediği çevrimdışı müşteri bilgileri (ad, telefon, e-posta)', '**Klinik**', 'Veri işleyen'],
              ['Kliniğin gelir-gider kayıtları', '**Klinik**', 'Veri işleyen'],
              ['Klinik vitrini, ekip ve hizmet bilgileri', '**Klinik**', 'Yayımlama'],
            ],
          },
          {
            kind: 'text',
            value:
              'Klinik, uygulamayı kullanmayan bir müşterisinin bilgilerini sisteme girdiğinde, **o kişiyi aydınlatmak ve gerekiyorsa rızasını almak kliniğin yükümlülüğüdür.** Platform bu kişiyle doğrudan bir ilişki kurmaz.',
          },
          {
            kind: 'text',
            value:
              'Klinik, veteriner hekimlik mevzuatından doğan kayıt tutma ve saklama yükümlülüklerinden kendisi sorumludur. Platform bu kayıtları barındırır; sürelerin takibi klinikteğdir.',
          },
        ],
      },
      {
        number: '4',
        title: 'Ekip ve yetkiler',
        blocks: [
          {
            kind: 'list',
            items: [
              'Klinik sahibi ekip üyesi davet edebilir ve yetkilerini belirleyebilir.',
              'Ekip üyelerinin platformdaki davranışlarından klinik sorumludur.',
              'Ekipten ayrılan kişinin erişimini **derhal** kaldırmak kliniğin sorumluluğudur.',
              'Bir klinik en az bir sahibe sahip olmak zorundadır. Tek sahip, sahipliği devretmeden ne veteriner rolünden ayrılabilir ne de hesabını silebilir.',
            ],
          },
        ],
      },
      {
        number: '5',
        title: 'Klinik vitrini ve iletişim',
        blocks: [
          {
            kind: 'list',
            items: [
              'Vitrinde yayımlanan bilgilerin doğruluğundan klinik sorumludur.',
              'Yanıltıcı tedavi vaadi, garantili sonuç iddiası ve mevzuata aykırı reklam yasaktır.',
              'Klinik, müşterilerine yalnızca hizmet ilişkisi kapsamında duyuru gönderebilir. Duyuru aracı **pazarlama listesi değildir**; kullanıcı bildirimleri kapatabilir.',
              'Kullanıcı yorumlarına müdahale edilemez; uygunsuz yorum şikâyet yoluyla incelenir.',
            ],
          },
        ],
      },
      {
        number: '6',
        title: 'Randevu yükümlülükleri',
        blocks: [
          {
            kind: 'text',
            value:
              'Klinik, aldığı randevu taleplerini makul sürede yanıtlamayı kabul eder. Randevunun kabulü, teklif edilen saatin değiştirilmesi ve iptali kliniğin sorumluluğundadır. Hizmet ilişkisi klinikle hayvan sahibi arasında kurulur; **platform bu ilişkinin tarafı değildir.**',
          },
        ],
      },
      {
        number: '7',
        title: 'Paketler ve ücretlendirme',
        blocks: [
          {
            kind: 'callout',
            value:
              'Bu sürümde klinik hesabı **tamamen ücretsizdir** ve uygulama içinde herhangi bir ödeme alınmaz. Aşağıdaki kurallar, ileride ücretli bir paket sunulması hâlinde uygulanacak taahhütlerimizdir.',
          },
          {
            kind: 'text',
            value:
              'Klinik hesapları için iki paket planlanmaktadır: temel özellikleri kapsayan **Veterito Klinik** ve ekip yönetimi, web paneli ve gelişmiş görünürlük içeren **Veterito Klinik Pro**. Paketler yayına alındığında her ikisi de **ilk yıl ücretsiz** olacaktır.',
          },
          {
            kind: 'text',
            value: 'Ücretli döneme geçilirse aşağıdakileri taahhüt ederiz:',
          },
          {
            kind: 'list',
            items: [
              'Ücretlendirme başlamadan **en az 30 gün önce** bildirim yapılır.',
              'Ücretsiz dönemde kullandığınız özellikler, o dönem boyunca geri alınmaz.',
              'Ücretli pakete geçmemeyi seçerseniz hesabınız kapatılmaz; **ücretsiz pakete döner** ve verileriniz silinmez. Yalnızca ücretli pakete özgü özellikler devre dışı kalır.',
              'Fiyat değişiklikleri yürürlüğe girmeden önce duyurulur; devam etmek istemezseniz süre sonunda ücretsiz pakete dönebilirsiniz.',
            ],
          },
          {
            kind: 'text',
            value:
              '**Uygulama içinde ödeme alınmaz.** Ücretli paketler yayına alındığında ödeme, uygulama dışındaki kurumsal satış kanalı üzerinden yapılır. Mobil uygulama bir satın alma aracı değildir.',
          },
          {
            kind: 'text',
            value:
              'Platform, hasta ile klinik arasındaki ödemeye de hiçbir şekilde aracılık etmez. Muayene, tedavi ve hizmet bedelleri tamamen klinik ile müşterisi arasındadır.',
          },
        ],
      },
      {
        number: '8',
        title: 'Askıya alma ve fesih',
        blocks: [
          {
            kind: 'list',
            items: [
              'Klinik hesabını istediği an kapatabilir; kapanan kliniğin vitrini yayından kalkar.',
              'Mevzuata aykırı faaliyet, yanıltıcı beyan veya kullanıcı güvenliğini tehlikeye atan davranış hâlinde hesap askıya alınabilir.',
              'Askıya almadan önce, acil hâller dışında, klinik bilgilendirilir ve düzeltme için süre verilir.',
              'Hesap kapansa dahi kliniğin mevzuattan doğan kayıt yükümlülükleri devam eder; verilerini kapanmadan önce dışa aktarması gerekir.',
            ],
          },
        ],
      },
      {
        number: '9',
        title: 'Uygulanacak hukuk',
        blocks: [
          {
            kind: 'text',
            value:
              'Bu sözleşmeye Türkiye Cumhuriyeti hukuku uygulanır. Taraflar arasındaki uyuşmazlıklarda Türkiye Cumhuriyeti mahkemeleri ve icra daireleri yetkilidir.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  cookies: {
    id: 'cookies',
    slug: '/cookies',
    title: 'Çerez Bildirimi',
    summary: 'Web sitesinde ve uygulamada hangi çerez ve benzeri teknolojilerin kullanıldığı.',
    effectiveDate: YURURLUK,
    related: ['privacy', 'kvkk'],
    required: true,
    intro: [
      {
        kind: 'callout',
        value:
          '**Mobil uygulamada reklam ya da izleme çerezi kullanmıyoruz.** Web sitesinde de reklam çerezi yok. Bu bildirim kısa, çünkü anlatacak fazla şey yok.',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Web sitesinde',
        blocks: [
          {
            kind: 'table',
            columns: ['Tür', 'Ne yapar', 'İzin gerekir mi'],
            rows: [
              ['Zorunlu', 'Dil tercihiniz ve tema seçiminiz gibi ayarların tarayıcınızda hatırlanması', 'Hayır. Hizmetin çalışması için gerekli'],
              ['Performans / analitik', 'Yok', '**Kullanılmıyor**'],
              ['Reklam / hedefleme', 'Yok', '**Kullanılmıyor**'],
              ['Sosyal medya izleyicileri', 'Yok', '**Kullanılmıyor**'],
            ],
          },
          {
            kind: 'text',
            value:
              'Zorunlu kayıtlar tarayıcınızın kendi deposunda (`localStorage`) tutulur, sunucuya gönderilmez ve kimliğinizle ilişkilendirilmez. Tarayıcı ayarlarınızdan temizleyebilirsiniz; bu durumda tercihleriniz sıfırlanır, site çalışmaya devam eder.',
          },
        ],
      },
      {
        number: '2',
        title: 'Mobil uygulamada',
        blocks: [
          {
            kind: 'text',
            value:
              'Uygulamada çerez kullanılmaz. Onun yerine cihazınızda şunlar saklanır:',
          },
          {
            kind: 'list',
            items: [
              '**Oturum bilgisi.** Her açılışta yeniden giriş yapmamanız için cihazın güvenli deposunda tutulur.',
              '**Tercihleriniz.** Tema, dil ve arayüz seçimleri.',
              '**Bildirim jetonu.** Yalnızca bildirim izni verdiyseniz saklanır.',
            ],
          },
          {
            kind: 'text',
            value:
              'Hiçbiri reklam kimliği değildir ve hiçbiri üçüncü taraflarla paylaşılmaz. Uygulamayı kaldırdığınızda cihazınızdaki bu kayıtlar da silinir.',
          },
        ],
      },
      {
        number: '3',
        title: 'Üçüncü taraf içerik',
        blocks: [
          {
            kind: 'text',
            value:
              'Sitede gömülü reklam, izleme pikseli ya da sosyal medya beğeni düğmesi bulunmaz. Uygulama mağazalarına verilen bağlantılara tıkladığınızda Apple ya da Google’ın kendi kuralları geçerli olur.',
          },
        ],
      },
      {
        number: '4',
        title: 'Değişiklik',
        blocks: [
          {
            kind: 'text',
            value:
              'İleride zorunlu olmayan bir çerez kullanmaya başlarsak, çalıştırmadan **önce** izninizi isteriz ve bu bildirimi güncelleriz.',
          },
        ],
      },
    ],
  },

  // =========================================================================
  'account-deletion': {
    id: 'account-deletion',
    slug: '/account-deletion',
    title: 'Hesap Silme',
    summary:
      'Hesabınızı uygulama içinden nasıl silersiniz, ne silinir, ne kalır. Silme anında ve geri alınamaz biçimde gerçekleşir.',
    effectiveDate: YURURLUK,
    related: ['privacy', 'kvkk', 'terms'],
    required: true,
    intro: [
      {
        kind: 'callout',
        value:
          'Hesabınızı **uygulama içinden**, kimseye sormadan ve bir talep formu doldurmadan silebilirsiniz. Silme **anında** gerçekleşir; bekleme süresi yoktur ve **geri alınamaz**.',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Uygulamadan silme (önerilen)',
        blocks: [
          {
            kind: 'steps',
            items: [
              'Veterito uygulamasını açın ve hesabınıza giriş yapın.',
              'Alt menüden **Profil** sekmesine geçin.',
              'Sayfanın en altına inin ve **Hesabı Sil** satırına dokunun.',
              'Açılan pencerede nelerin silineceğini okuyun.',
              'Onay kutusuna büyük harflerle **ONAY** (ya da **CONFIRM**) yazın.',
              '**Hesabı Sil** düğmesine dokunun. İşlem tamamlandığında oturumunuz kapanır.',
            ],
          },
          {
            kind: 'text',
            value:
              'Kelimeyi yazdırmamızın sebebi basit: bu işlem geri alınamıyor ve tek dokunuşla ulaşılabilecek bir yerde durmamalı.',
          },
        ],
      },
      {
        number: '2',
        title: 'Yalnız veteriner hesabını kapatma',
        blocks: [
          {
            kind: 'text',
            value:
              'Veterinerliği bırakmak istiyor ama kişisel hesabınızı korumak istiyorsanız **her şeyi silmenize gerek yok**. Ayrı bir düğme var:',
          },
          {
            kind: 'steps',
            items: [
              'Profil sekmesine geçin.',
              '**Veteriner hesabını kapat** satırına dokunun. Bu satır yalnızca veteriner rolü olan hesaplarda görünür.',
              'Onaylayın.',
            ],
          },
          {
            kind: 'text',
            value:
              'Bu işlemde yalnız veteriner rolünüz ve klinik üyelikleriniz kaldırılır. Kişisel hesabınız, hayvanlarınız, gönderileriniz ve mesajlarınız **durur**.',
          },
        ],
      },
      {
        number: '3',
        title: 'Ne silinir',
        blocks: [
          {
            kind: 'list',
            items: [
              'Hesabınız ve giriş bilgileriniz',
              'Profiliniz: ad, kullanıcı adı, telefon, doğum tarihi, il/ilçe, profil fotoğrafı',
              'Hayvanlarınız ve tüm sağlık kayıtları: aşılar, ilaçlar, kilo ölçümleri, ziyaretler, teşhisler, beslenme notları, kimlik bilgileri',
              'Gönderileriniz, yorumlarınız, beğenileriniz ve kaydettikleriniz',
              'Mesajlarınız ve gönderdiğiniz medya',
              'Sahiplendirme ilanlarınız ve başvurularınız',
              'Randevu kayıtlarınız',
              'Yüklediğiniz tüm fotoğraf, video ve belgeler',
              'Giriş güvenliği kayıtlarınız ve bildirim jetonlarınız',
            ],
          },
        ],
      },
      {
        number: '4',
        title: 'Ne kalabilir ve neden',
        blocks: [
          {
            kind: 'table',
            columns: ['Kalan', 'Sebep'],
            rows: [
              ['Bir kliniğin kendi hasta dosyasına işlediği muayene ve reçete kaydı', 'Kliniğin veteriner hekimlik mevzuatından doğan saklama yükümlülüğü. Bu kayıtların sorumlusu klinik olduğu için silinmesini o klinikten talep etmeniz gerekir'],
              ['Başkalarının size yazdığı mesajların kendi taraflarındaki kopyası', 'Karşı tarafın kendi yazışma geçmişi. Sizin adınız ve profiliniz görünmez hâle gelir'],
              ['Hakkınızda yapılmış ve incelenmekte olan şikâyet kayıtları', 'Moderasyon sürecinin tamamlanabilmesi ve yasal itiraz süresi'],
              ['Kimliğinizle ilişkilendirilemeyen toplu sayılar', 'Örneğin bir gönderinin toplam görüntülenme sayısı. Bu kayıtlar kişiye bağlanamaz'],
            ],
          },
        ],
      },
      {
        number: '5',
        title: 'Silme engellenirse',
        blocks: [
          {
            kind: 'text',
            value:
              'Tek sahibi olduğunuz **açık bir kliniğiniz** varsa silme reddedilir ve hangi klinik olduğu size gösterilir. Sebebi: sahipsiz kalan bir kliniğe kimse personel ekleyemez, randevu kapatamaz ve sayfayı yayından alamaz.',
          },
          {
            kind: 'text',
            value: 'İki çözümden birini seçin:',
          },
          {
            kind: 'list',
            items: [
              'Kliniğe **başka bir sahip atayın**: Profil → Veteriner Paneli → Kliniğim → Ekip. Yeni sahip atandıktan sonra silme işlemini tekrar deneyin.',
              'Kliniği tamamen kapatmak istiyorsanız `info@veterito.com` adresine, hesabınızda kayıtlı e-posta adresinden yazın. Kliniği kapattıktan sonra hesabınızı silebilirsiniz.',
            ],
          },
        ],
      },
      {
        number: '6',
        title: 'Uygulamaya erişemiyorsanız',
        blocks: [
          {
            kind: 'text',
            value:
              'Telefonunuza ya da hesabınıza erişemiyorsanız `info@veterito.com` adresine, **hesabınızda kayıtlı e-posta adresinden** yazın ve konuya “Hesap silme talebi” yazın.',
          },
          {
            kind: 'text',
            value:
              'Kimliğinizi doğrulayabilmek için talebin kayıtlı adresten gelmesi gerekir. Talebi en geç **30 gün** içinde sonuçlandırırız; uygulamaya erişebiliyorsanız uygulama içinden silmek **anında** olduğu için her zaman daha hızlıdır.',
          },
        ],
      },
      {
        number: '7',
        title: 'Hesabı silmeden önce',
        blocks: [
          {
            kind: 'list',
            items: [
              'Hayvanınızın sağlık geçmişini saklamak istiyorsanız silmeden **önce** dışa aktarın ya da ekran görüntüsü alın. Silme işleminden sonra bu kayıtları geri getiremeyiz.',
              'Uygulama mağazasından yaptığınız bir abonelik varsa (bu sürümde yok) mağaza tarafından ayrıca iptal edilmesi gerekir.',
              'Hesabı silmek uygulamayı telefonunuzdan kaldırmaz; uygulamayı kaldırmak da hesabı silmez. İkisi ayrı işlemdir.',
            ],
          },
        ],
      },
    ],
  },

  // =========================================================================
  'child-safety': {
    id: 'child-safety',
    slug: '/child-safety',
    title: 'Çocuk Güvenliği Standartları',
    summary:
      'Yaş sınırı, çocuk istismarı içeriğine karşı sıfır tolerans politikası ve bildirim yolları.',
    effectiveDate: YURURLUK,
    related: ['terms', 'privacy'],
    required: false,
    intro: [
      {
        kind: 'callout',
        value:
          'Veterito **çocuklara yönelik bir uygulama değildir** ve mağaza beyanlarında da bu şekilde işaretlenmiştir. Bu sayfa, çocukların istismarını önlemeye dair standartlarımızı ve bildirim yollarımızı açıklar.',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'Yaş sınırı',
        blocks: [
          {
            kind: 'list',
            items: [
              'Hesap açmak için **en az 13 yaşında** olmak gerekir.',
              'Uygulama içeriği genel izleyiciye uygundur; yetişkinlere yönelik içerik barındırmaz.',
              '13 yaşından küçük olduğu tespit edilen hesaplar kapatılır ve verileri silinir.',
              'Bir çocuğun hesabı olduğunu düşünüyorsanız `info@veterito.com` adresine bildirin.',
            ],
          },
        ],
      },
      {
        number: '2',
        title: 'Sıfır tolerans',
        blocks: [
          {
            kind: 'text',
            value:
              'Çocukların cinsel istismarını içeren ya da özendiren her türlü materyal (CSAE/CSAM) kesinlikle yasaktır. Böyle bir içerik tespit edildiğinde:',
          },
          {
            kind: 'steps',
            items: [
              'İçerik derhal ve şikâyet beklenmeden kaldırılır.',
              'İlgili hesap kalıcı olarak kapatılır.',
              'Kayıtlar delil olarak korunur ve yetkili makamlara bildirim yapılır.',
              'Aynı kişinin yeni hesap açma girişimleri engellenir.',
            ],
          },
          {
            kind: 'text',
            value:
              'Bu politika, kullanıcının niyetinden ve içeriğin sunuluş biçiminden bağımsız olarak uygulanır.',
          },
        ],
      },
      {
        number: '3',
        title: 'Nasıl bildirilir',
        blocks: [
          {
            kind: 'list',
            items: [
              '**Uygulama içinden:** Her gönderi, yorum, profil ve sohbetin yanındaki **⋯** menüsünden **Şikâyet et**.',
              '**E-posta:** `info@veterito.com` adresine, konu satırına “Çocuk güvenliği” yazarak bildirin. Bu bildirimler öncelikli sıraya alınır.',
              '**Acil durumlarda:** Bir çocuğun ani tehlike altında olduğunu düşünüyorsanız önce **155** (Polis) ya da **112**’yi arayın.',
            ],
          },
          {
            kind: 'text',
            value:
              'Çocuk güvenliği bildirimlerini **24 saat içinde** inceleriz. Bildirimde bulunan kişinin kimliği içerik sahibiyle paylaşılmaz.',
          },
        ],
      },
      {
        number: '4',
        title: 'Önleyici tedbirler',
        blocks: [
          {
            kind: 'list',
            items: [
              'Tanımadığınız kişiler size doğrudan mesaj gönderemez; ilk mesaj **Mesaj İstekleri**’nde bekler ve kabul edilene kadar tek mesajla sınırlıdır.',
              'Her kullanıcı istediği kişiyi engelleyebilir; engellenen kişi sizi bulamaz ve size yazamaz.',
              'Profiller varsayılan olarak gizlenebilir; hangi içeriğin kime görüneceğine kullanıcı karar verir.',
              'Uygulama kullanıcıların konumunu toplamaz ve göstermez.',
              'Tüm şikâyetler insan incelemesinden geçer.',
            ],
          },
        ],
      },
      {
        number: '5',
        title: 'Sorumlu kişi',
        blocks: [
          {
            kind: 'text',
            value:
              'Çocuk güvenliği bildirimlerinden ve bu standartların uygulanmasından platform işletmecisi sorumludur. İletişim: `info@veterito.com`.',
          },
        ],
      },
    ],
  },
};
