# Klinik Web Paneli — yol haritası

> Hedef (Ahmet, 24.08.2026): *"tam teşekküllü uygulamamızı web veteriner
> paneline aktaracağız"*. Bu dosya, o aktarımın nerede kaldığını tutuyor.
> Yarım kalan iş burada görünür olsun diye var.

**Adres:** `veterito.com/panel` · **Depo:** `veteriner-web` · **Klasör:** `src/panel/`

⚠️ **Bu klasör bize ait.** Ahmet: *"panel ve blog bizim taraflarımız, diğer
tarafta stajyerim çalışıyor... blog ve panelde bizim yazdıklarımız geçerli olur
her zaman."* Çakışma olursa `src/panel/`, `src/data/blog/` ve blog sayfalarında
bizim sürümümüz kalır; pazarlama sayfalarında stajyerin sürümü esastır.

---

## 02.09.2026 · Klinik sahibi raporu yeniden kabul matrisi

Bu tur, önceki eleştiri raporundaki her maddeyi yalnız ekranda görünmesine göre
değil; veri kaynağı, yetki sınırı, boş durum, dar ekran ve geri dönüş davranışıyla
yeniden değerlendirir. Mobil kaynak kodu değiştirilmedi. Ortak veride yapılan tek
ekleme, klinik defteri hastasına isteğe bağlı ve klinik içinde tekil mikroçip
numarasıdır (`0200_clinic_offline_pet_microchip.sql`).

| Rapor bulgusu | Kabul sonucu | Kanıt / sınır |
|---|---|---|
| Müşteri–hasta kayıtlarının parçalanması | **Kısmen kapalı** | Mevcut Veterito müşterisi `clinic_invite_customer` ile açık davet/kabul akışında bağlanıyor. Klinik defteri hayvanını platform hayvanına otomatik birleştirmek yasak; sahip onaylı kimlik köprüsü ayrı veri sözleşmesi ister. |
| Hasta sayaçlarının çelişmesi | **Kapalı** | Veterito bağlantılı, klinik defteri ve toplam aktif hasta ayrı ad ve kapsamla gösteriliyor. |
| Laboratuvar cihazı yokken çıkmaz | **Kapalı** | İstem penceresi önkoşulu açıklıyor ve cihaz/entegrasyon kurulumuna doğrudan geçiriyor; istem yalnız klinik defteri hastasıyla açılıyor. |
| Müşteri/hasta araması | **Kapalı** | Türkçe duyarlı isim, telefon, e-posta, sahip, tür ve not araması; klinik hastasında ayrıca mikroçip araması ve açık sıfır sonuç durumu var. |
| Randevu dili ve takvim kapsamı | **Kısmen kapalı** | “Aksiyon bekleyen”, günlük/haftalık/tarih/durum araması var. Sunucu tek `done` durumu taşıdığı için eylem dürüstçe “Geldi, tamamlandı”; ayrı `arrived` ve atanmış veteriner alanı Faz 5'tedir. |
| Uzun klinik profili | **Kapalı** | Türler ve mesai üstte; hizmetler arama, kategori, seçili filtresi ve kompakt ızgarada; özel gün istisnaları korunuyor. |
| Entegrasyonların teknik yoğunluğu | **Kapalı** | Varsayılan “Kolay kurulum” durum/eksik adımı gösteriyor; “Uzman ayarları” gerçek sağlayıcı, uç nokta, webhook ve sır kasası alanlarını koruyor. |
| Ayarlar ekranının boşluğu | **Kapalı** | İletişim/bildirim, ekip yetkisi, aktif oturum ve tüm cihazlardan çıkış yalnız çalışan hedeflerle sunuluyor; var olmayan parola işlevi vaat edilmiyor. |
| Sahiplendirme yönetimi | **Kapalı** | Arama/filtre/sıralamaya ek olarak uygulama önizlemesi, düzenleme, sahiplendirildi ve yayından kaldırma güvenli RPC üzerinden çalışıyor. |
| Gelir/gider metin çelişkisi | **Kapalı** | Webde gerçekten desteklenen kayıt/okuma sınırı tek anlamlı metinle gösteriliyor. |
| Web sitesi tamamlanma ve medya sağlığı | **Kapalı** | İçerik tamamlanması ile logo/kapak/galeri önizleme sağlığı ayrı ölçülüyor. |
| Duyuru görsel hatası | **Kapalı** | İmzalı URL bir kez yenileniyor; ikinci hatada ham hata yerine kalıcı, dengeli yedek görünüm çıkıyor. |
| Düz ve uzun navigasyon | **Kapalı** | Altı görev alanına ayrılmış akordeon; mevcut bölüm anahtarları ve erişim kuralları korunuyor. |
| Webde soğuk renk dağılımı | **Kapalı** | Mobil palete dokunmadan yalnız panelde laboratuvar/operasyon/finans/uyarı yüzeyleri düşük doygunluklu alan tonlarıyla ayrıldı. |

### Aşamalı Ar-Ge ve yayın kapısı

1. **Güven ve veri bütünlüğü:** sayaç kapsamı, kayıt kaynağı, laboratuvar
   yabancı anahtarı ve mikroçip tekilliği.
2. **Yoğun klinik hızı:** birleşik arama, günlük/haftalık randevu kapsamı,
   kategori ve sıfır sonuç davranışları.
3. **Kurulum ve işletme:** kolay/uzman entegrasyon, çalışan ayar hedefleri,
   güvenli sahiplendirme eylemleri ve medya geri kazanımı.
4. **Masaüstü sunum:** görev tabanlı menü, iş alanı renkleri, geniş/dar ekran
   boşluk ve hiyerarşi kabulü.
5. **Şema ve açık onay gerektiren devam işi:** platform hayvanı–klinik defteri
   kimlik köprüsü; randevuda `arrived`, `completed` ve atanmış veteriner.
   Bunlar eklenene kadar arayüz veri uydurmayacak veya iki durumu tekmiş gibi
   göstermeyecek.
6. **Yayın kapısı:** saf birim testleri, lint, TypeScript/production build,
   gizli anahtar taraması ve kimlikli demo tarayıcı kabulü birlikte geçmeden
   tamamlandı işareti konmayacak.

**02.09 kabul ölçümü:** Demo owner oturumunda 1280×720 görünümde hasta/mikroçip
alanı, randevu günlük–haftalık kapsamı, entegrasyon kolay–uzman geçişi, ayarlar
hedefleri, sahiplendirme önizlemesi, duyuru görseli yeniden deneme/yedek durumu ve
laboratuvar önkoşul kapıları açıldı. Yatay taşma ve konsol hatası görülmedi. Veri
oluşturan, ileti gönderen, ilan kapatan veya oturum sonlandıran eylemler kabul
testinde çalıştırılmadı; bunların veri yazmayan yüzey ve güvenli RPC sözleşmeleri
birim/statik denetimle ölçüldü. Dar ekran davranışı aynı paket içindeki önceki
390 px gerçek tarayıcı kabulünde geçmişti; son ekler mevcut tek sütun kırılımlarını
değiştirmedi.

---

## Temel kural

**Arka uçta hiçbir şey yazılmadı ve yazılmayacak gibi duruyor.** Klinik
tarafında **41 RPC** zaten var; panelin ilk sürümü bunların **ikisini**
çağırıyordu. İş çoğu zaman "yaz" değil **"bağla"**.

Yeni bir ekran açmadan önce: `grep -rhoE "rpc\(\s*['\"][a-z_]+['\"]" ~/Developer/veteriner/src`

---

## Biten

| Bölüm | Çağırdığı | Durum |
|---|---|---|
| Genel bakış | `clinic_dashboard` · `appointment_list` · `clinic_upcoming_records` · `clinic_analytics` · `clinic_staff_list` | ✅ |
| Randevular | `appointment_list` · **`set_appointment_status`** · **`propose_appointment_time`** | ✅ onayla / kabul etme / tamamla / iptal / başka saat öner |
| Müşteriler | `clinic_customer_list` · `clinic_offline_customers` · **`clinic_invite_customer`** | ✅ uygulama üyesi + defter kaydı bir arada, **müşteri eklenebiliyor** |
| Hastalar | `clinic_pet_list` · `clinic_offline_pets` | ✅ **hasta eklenebiliyor**, sağlık kaydı girilebiliyor |
| Sağlık kayıtları | `clinic_pet_records` | ✅ kayıt eklenebiliyor (aşı, parazit, muayene, ilaç, kilo) |
| Aşı takvimi | `clinic_upcoming_records` | ✅ girilen sonraki tarihler buraya düşüyor |
| Reçeteler | `clinic_prescription_list` · `write_prescription` · `void_prescription` | ✅ yazma, sürümlü düzeltme, iptal ve çıktı; hasta seçimi hasta veya müşteri/sahip adına göre aranıyor, Türkçe I/İ ve sıfır sonuç davranışı ölçüldü |
| Duyurular | `announcements` · `announcement_media` · **`send_announcement`** | ✅ post kartı, arama/durum/tür filtresi ve tıklanabilir teslim istatistik özeti; gerçek `sent_at`, sıfır alıcı ve 1440/390 px tarayıcı kabulü ölçüldü, okunma verisi olmadığı için uydurulmadı |
| Klinik profili · Topluluk · Değerlendirmeler · Ayarlar | ilgili tablolar | ✅ salt okuma |
| Sahiplendirme | `adoption_listings` · `adoption_photos` · başvuru okuma/yanıtlama RPC'leri | ✅ post kartı görünümü, arama, tür/durum filtresi ve sıralama; ilan oluşturma ile başvuru kabul/ret korundu, davranış ve 1440/390 px tarayıcı kabulü ölçüldü |
| Bildirimler | `notifications` | ✅ zil rozeti gerçek sayı; menüde yok, zilden açılıyor |
| Mesajlar | `conversation_list` · `conversation_request_list` · `message_list` · `respond_to_message_request` · `conversation_peer_info` | ✅ gelen kutusu, istek kabul/ret, okundu bilgisi, görsel, sessize alma, silme, şikâyet ve engelleme webde bağlı |
| Gelir / Gider | `clinic_ledger_summary` · `clinic_ledger_by_category` | ✅ salt okuma |
| Ekip | `clinic_staff_list` · **`clinic_invite_staff`** · **`clinic_remove_staff`** | ✅ davet / çıkarma (onaylı) |
| Klinik web sitesi | `clinics` (RLS) · **`update_clinic_page`** · **`set_clinic_username`** · **`update_clinic_contact`** · `clinics` kolon güncellemesi | ✅ adres, slogan, tanıtım, yol tarifi, yayın, arama, WhatsApp ve sosyal hesaplar düzenlenebiliyor |
| Raporlar | `clinic_analytics` · `clinic_report` · `clinic_review_list` | ✅ salt okuma |
| Ürün ve stok | `clinic_inventory_list_v2` · `upsert_clinic_product_v2` · `record_inventory_movement` · barkod/QR ve sayım RPC'leri | ✅ arama, ilaç/lot/SKT, kamera/USB okuma, eşleme ve taslak sayım; eşleşmeyen üretici kodundan yeni ürün oluşturma, tam kod türü sözlüğü, doğrudan kamera izin kapısı ve klinik adlı 100×50 mm tek sayfa etiket çıktısı ölçüldü |
| Laboratuvar | istem, kalite, sürüm, analit, karar desteği ve `save_lab_result_revision_v3` | 🟨 fotoğrafsız saklama + tarayıcı OCR + merge; canlı 0190 geçişi bekliyor |
| Entegrasyon ayarları | sağlayıcı kataloğu · Vault Edge Function · ileti izin/kuyruk RPC'leri | ✅ owner-only sır yönetimi, SMS/WhatsApp izin, doğrulama, kota ve spam kapıları canlı kabulden geçti |

Ayrıca: kendi tasarımı (pazarlama menüsü bu rotada çizilmiyor) · uygulamanın
paleti · merkezî sözlük (ekranda ham kod yok) · `X-Robots-Tag: noindex` · CSP.

---

## ⏳ SIRADAKİ BÜYÜK İŞ — CSV ile müşteri taşıma

> Ahmet, 25.08.2026: *"bu panele müşteri kayıtlarını csv olarak
> yüklediklerinde de otomatik eklenmeleri gerekiyor... müşterilerini
> veterinerler taşıtabilmeliler bu çok ciddi bişey o yüzden şimdi girmemeni
> tavsiye ediyorum, yapacaklarımız otursun, müşterilerini taşımayı da
> gösterelim, akışı kurarız."*

**Durum: ⛔ BAŞLANMADI, bilerek.** Akış birlikte tasarlanacak.

Neden ciddi: bu bir içe aktarma değil, **veri göçü**. Bir kliniğin yıllardır
tuttuğu müşteri listesi tek seferde giriyor; yanlış giden bir aktarımı geri
almak, elle girilen tek bir kaydı silmeye benzemiyor.

### Şimdiden bilinenler (ölçüldü)

Hedef tablo `clinic_offline_customers`; sütunlar ve kısıtları:

| Alan | Kısıt |
|---|---|
| `full_name` | **zorunlu**, 2-120 karakter |
| `phone` | 7-30 karakter |
| `email` | serbest |
| `pet_name` | ≤ 80 karakter |
| `species_code` | `species` tablosuna **yabancı anahtar** |
| `note` | ≤ 500 karakter |

Hayvanlar ayrı tabloda (`clinic_offline_pets`) ve **bir müşteriye bağlanmak
zorunda**. Yani tek satırlık bir CSV bile iki tabloya yazıyor.

### Tasarlanmadan başlanmayacak sorular

1. **Eşleştirme:** CSV başlıkları hangi alana gidiyor? Sabit şablon mu,
   kullanıcının eşleştirdiği esnek bir ekran mı? Klinikler Excel'den
   geliyor, sütun adları hiçbir zaman aynı olmayacak.
2. **Tekrar kaydı:** aynı kişi iki kez yüklenirse ne olacak? Telefon mu
   e-posta mı anahtar? Yanlış birleştirme, iki müşterinin kaydını
   birbirine karıştırır.
3. **Geçersiz satır:** 500 satırın 12'si bozuksa hepsi mi düşecek, 488'i
   mi girecek? İkisi de savunulabilir ama **kullanıcı hangisi olduğunu
   önceden bilmeli**.
4. **Ön izleme şart:** yazmadan önce "şu kadar yeni, şu kadar mevcut, şu
   kadar hatalı" özeti gösterilmeli. Onaysız toplu yazma yapılmayacak.
5. **Geri alma:** aktarım bir parti numarasıyla işaretlenmeli ki tamamı tek
   hamlede geri alınabilsin. Şu an tabloda böyle bir kolon **yok** —
   gerekirse migration gerekir.
6. **Tür kodu:** CSV'de "kedi" yazacak, tabloda `cat` bekleniyor. Çeviri
   tablosu ve eşleşmeyen değerlerde ne yapılacağı belirlenmeli.
7. **Sınır:** kaç satıra kadar? Tarayıcıda tek seferde binlerce satır
   yazmak zaman aşımına düşer; parçalı yazma gerekir.
8. **Kişisel veri:** bu dosya doğrudan kişisel veri taşıyor. Yükleme
   sırasında dosyanın nereye gittiği, saklanıp saklanmadığı ve aydınlatma
   metniyle uyumu **hukuki tarafla birlikte** karara bağlanmalı.

⚠️ **Yetki zaten hazır:** `clinic_offline_customers` üzerinde RLS
`is_clinic_member(clinic_id)` ile hem `using` hem `with check` tarafında
kurulu. Yani içe aktarma yeni bir yetki yüzeyi açmıyor; risk yetkide değil
**veri bütünlüğünde**.

---

## Sırada — panel

### Ürün görselleri — backend kararı gerekiyor (01.09.2026)

- [ ] Ürün başına iki ayrı görsel rolü tanımla: **katalog/referans görseli** ve
      **kliniğin çektiği ürün görseli**. Mevcut `clinic_products` tablosunda görsel
      alanı, ilişkili medya tablosu veya `can_read_media` yetki dalı yok.
- [ ] Görsel tablosu ve medya okuma yetkisi backend kaynak deposunda eklenmeden
      webde yükleme alanı açma. Klinik galerisi ya da web vitrini referans tablosu
      ürün medyası için yeniden kullanılmayacak; aksi halde görünürlük ve silme
      yaşam döngüsü birbirine karışır.
- [ ] Kamera barkodu okuduğunda alınan kare yalnız kullanıcı açıkça onaylarsa
      “ürün fotoğrafı” adayı olsun. Varsayılan davranış kareyi saklamamak;
      reddedilirse veya ürün kaydı tamamlanmazsa nesne yüklenmemeli.

### Mobil → web eşitleme devamı (29.08.2026)

> Ahmet: *"Mobilde olan her şeyin webde de mevcut tasarıma uygun şekilde
> çalışmasını istiyorum. Değişiklikleri sadece web reposunda yapalım."*

- [x] Klinik web sitesi bölümüne mobilde bulunan kullanıcı adı yönetimini,
      adres kırılma uyarısı ve sunucuyla aynı anlık doğrulama kurallarıyla bağla.
      — ✅ Canlı adres önizlemesi ve mobildeki kurallarla anlık doğrulama var;
      son karar mevcut `set_clinic_username` RPC'sinde.
- [x] Yol tarifi, WhatsApp ve Instagram/Facebook/X/TikTok/YouTube/LinkedIn
      hesaplarını mobildeki mevcut veri kaynakları ve RPC üzerinden düzenlenebilir yap.
      — ✅ İkinci tablo/RPC açılmadı; mobilin `update_clinic_page` ve
      `update_clinic_contact` yolları kullanılıyor.
- [x] Mevcut panel tasarımını ve sabit açık tema kuralını koru; masaüstü/dar ekran,
      TypeScript, panel denetimi ve production build ile ölçüp ayrı commit oluştur.
      — ✅ Değişen dosya lint'i, 387 sınıflı panel denetimi ve tam production
      build geçti. Operasyon diyalogları, klinik profili, laboratuvar ve stok
      yüzeyleri masaüstü/dar ekran yerel tarayıcı kabulünde ölçüldü; yatay taşma yok.

### 1. Taslaktaki boş kutular (Ahmet: *"olmayanlara - koyarız sonra oturturuz"*)
Tasarım taslağındaki bu kutuların arkasında **veri yok**; yer tutucu olarak
konacak, sayı uydurulmayacak:

| Kutu | Neden boş | Ne gerekir |
|---|---|---|
| Trend okları (▲%9 · dün: 11) | günlük geçmiş tutulmuyor | günlük özet tablosu + cron |
| Randevuda "Veteriner" sütunu | `appointment_list` hekim döndürmüyor | RPC'ye kolon eklemek |
| "Devam ediyor" durumu | böyle bir randevu durumu yok | durum makinesine yeni değer |
| Hasta kilosu | hiçbir RPC kilo döndürmüyor | `pets` tablosunda alan var mı, bakılacak |
| Mesajlar kutusu | klinik gelen kutusu RPC'si yok | `open_direct_conversation` var, liste yok |
| Bildirim zili | sayıyı verecek kaynak yok | bildirim sayacı RPC'si |
| Doluluk oranı grafiği | zaman serisi yok | günlük özet tablosu |
| ~~Pro'ya Yükselt~~ | **24.08.2026: fiyatlar full ücretsiz** | yerine başka şey konacak |

### 2. Kalan yazma işlemleri
| İş | RPC | Not |
|---|---|---|
| Duyuru gönderme | `send_announcement` | ⚠️ **DÖRT tanımı var**, en sonuncusu alınacak. Önce duyuru satırı oluşturulmalı |
| ~~Reçete yazma / iptal~~ | `write_prescription` · `void_prescription` | ✅ tamamlandı; sürüm geçmişi ve iptal gerekçesi korunuyor |
| Hizmet / kabiliyet düzenleme | `capabilities-api` | yalnız klinik sahibi |
| Gelir / gider kaydı | `clinic_transactions` | para girişi, geri alma zor |
| Adres ve konum | — | ⚠️ `latitude`/`longitude` kolon yetkisinde YOK (migration 0022). Panodaki "haritadaki konum eksik" uyarısı bu yüzden panelden kapatılamıyor; ayrı bir yol gerekiyor |
| Logo ve kapak yükleme | R2 presign | dosya yükleme akışı

### 3. Yeni bölümler
- **Sağlık kayıtları** — `clinic_pet_list` + `pet_profile` + `clinic_upcoming_records`
- **Aşı takvimi** — `clinic_upcoming_records` (tarih ekseninde)
- **Ayarlar** — klinik bilgileri, çalışma saatleri

### 4. Mimari borç
- Bölümler **rota değil iç durum**. Derinleşince rota modeline geçilecek;
  o zaman her rota `vercel.json`'a da eklenmeli, yoksa doğrudan açılan adres
  404 döner. `scripts/rota-kapsam-denetimi.mjs` bunu yakalıyor.
- Palet `palette.json`'dan **elle kopyalandı**, ayrışabilir.

---

## ⏳ SIRADAKİ BÜYÜK İŞ — CSV ile müşteri taşıma

> Ahmet, 25.08.2026: *"bu panele müşteri kayıtlarını csv olarak
> yüklediklerinde de otomatik eklenmeleri gerekiyor... müşterilerini
> veterinerler taşıtabilmeliler bu çok ciddi bişey o yüzden şimdi girmemeni
> tavsiye ediyorum, yapacaklarımız otursun, müşterilerini taşımayı da
> gösterelim, akışı kurarız."*

**Durum: ⛔ BAŞLANMADI, bilerek.** Akış birlikte tasarlanacak.

Neden ciddi: bu bir içe aktarma değil, **veri göçü**. Bir kliniğin yıllardır
tuttuğu müşteri listesi tek seferde giriyor; yanlış giden bir aktarımı geri
almak, elle girilen tek bir kaydı silmeye benzemiyor.

### Şimdiden bilinenler (ölçüldü)

Hedef tablo `clinic_offline_customers`; sütunlar ve kısıtları:

| Alan | Kısıt |
|---|---|
| `full_name` | **zorunlu**, 2-120 karakter |
| `phone` | 7-30 karakter |
| `email` | serbest |
| `pet_name` | ≤ 80 karakter |
| `species_code` | `species` tablosuna **yabancı anahtar** |
| `note` | ≤ 500 karakter |

Hayvanlar ayrı tabloda (`clinic_offline_pets`) ve **bir müşteriye bağlanmak
zorunda**. Yani tek satırlık bir CSV bile iki tabloya yazıyor.

### Tasarlanmadan başlanmayacak sorular

1. **Eşleştirme:** CSV başlıkları hangi alana gidiyor? Sabit şablon mu,
   kullanıcının eşleştirdiği esnek bir ekran mı? Klinikler Excel'den
   geliyor, sütun adları hiçbir zaman aynı olmayacak.
2. **Tekrar kaydı:** aynı kişi iki kez yüklenirse ne olacak? Telefon mu
   e-posta mı anahtar? Yanlış birleştirme, iki müşterinin kaydını
   birbirine karıştırır.
3. **Geçersiz satır:** 500 satırın 12'si bozuksa hepsi mi düşecek, 488'i
   mi girecek? İkisi de savunulabilir ama **kullanıcı hangisi olduğunu
   önceden bilmeli**.
4. **Ön izleme şart:** yazmadan önce "şu kadar yeni, şu kadar mevcut, şu
   kadar hatalı" özeti gösterilmeli. Onaysız toplu yazma yapılmayacak.
5. **Geri alma:** aktarım bir parti numarasıyla işaretlenmeli ki tamamı tek
   hamlede geri alınabilsin. Şu an tabloda böyle bir kolon **yok** —
   gerekirse migration gerekir.
6. **Tür kodu:** CSV'de "kedi" yazacak, tabloda `cat` bekleniyor. Çeviri
   tablosu ve eşleşmeyen değerlerde ne yapılacağı belirlenmeli.
7. **Sınır:** kaç satıra kadar? Tarayıcıda tek seferde binlerce satır
   yazmak zaman aşımına düşer; parçalı yazma gerekir.
8. **Kişisel veri:** bu dosya doğrudan kişisel veri taşıyor. Yükleme
   sırasında dosyanın nereye gittiği, saklanıp saklanmadığı ve aydınlatma
   metniyle uyumu **hukuki tarafla birlikte** karara bağlanmalı.

⚠️ **Yetki zaten hazır:** `clinic_offline_customers` üzerinde RLS
`is_clinic_member(clinic_id)` ile hem `using` hem `with check` tarafında
kurulu. Yani içe aktarma yeni bir yetki yüzeyi açmıyor; risk yetkide değil
**veri bütünlüğünde**.

---

## Sırada — panel dışı (Ahmet'in verdiği, bekleyen)

1. **Kapak fotoğrafı olmayan yazı yayınlanmasın** — `kopegim-fazla-kilolu-mu`
   şu an kapaksız. Derleme denetimi + prerender kuralı.
2. **Tablette yazı bütünlüğü bozuk** — kaynaklar ile SSS arasına başka şeyler
   giriyor. Tablet genişliğinde ölçülecek.
3. **E-posta doğrulaması kayıtta zorunlu olmasın** — opsiyonele alınacak.
   ⚠️ Güvenlik etkisi var, ölçülüp yazılacak.
4. İlk altı blog yazısı 684-796 kelime, brief 1000 diyor.

---

## Ölçüm kayıtları (tekrar kanıtlamaya gerek kalmasın)

**Yetki sunucuda** — `clinic_dashboard`, üç durum:
```
oturumsuz            -> 42501 permission denied
üye, kendi kliniği   -> 200, veri
üye, yabancı klinik  -> 400 yetkisiz: bu klinigin uyesi degilsin
```

**Durum makinesi sunucuda** — geçersiz geçiş ve uydurma durum reddedildi,
veri değişmedi.

**Çıkış `local` kapsamlı** — iki yönlü ölçüldü: `local` ile telefon oturumu
yaşıyor, `global` ile düşüyor.

**⚠️ `appointment_list` yabancı klinikte hata fırlatmıyor**, `200` + boş dizi
dönüyor. Bugün sızıntı yok ama reddetme açık bir karar değil, `where` yan
etkisi. `clinic_dashboard` gibi `raise` eklenmeli.
