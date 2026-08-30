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
| Duyurular | `announcements` · **`send_announcement`** | ✅ **duyuru oluşturulup gönderilebiliyor** |
| Klinik profili · Topluluk · Sahiplendirme · Değerlendirmeler · Ayarlar | ilgili tablolar | ✅ salt okuma |
| Bildirimler | `notifications` | ✅ zil rozeti gerçek sayı; menüde yok, zilden açılıyor |
| Mesajlar | — | ⬜ tek gerçekten boş bölüm: gelen kutusu RPC'si yok |
| Gelir / Gider | `clinic_ledger_summary` · `clinic_ledger_by_category` | ✅ salt okuma |
| Ekip | `clinic_staff_list` · **`clinic_invite_staff`** · **`clinic_remove_staff`** | ✅ davet / çıkarma (onaylı) |
| Klinik web sitesi | `clinics` (RLS) · **`update_clinic_page`** · **`set_clinic_username`** · **`update_clinic_contact`** · `clinics` kolon güncellemesi | ✅ adres, slogan, tanıtım, yol tarifi, yayın, arama, WhatsApp ve sosyal hesaplar düzenlenebiliyor |
| Raporlar | `clinic_analytics` · `clinic_report` · `clinic_review_list` | ✅ salt okuma |
| Ürün ve stok | `clinic_inventory_list_v2` · `upsert_clinic_product_v2` · `record_inventory_movement` · barkod/QR ve sayım RPC'leri | ✅ arama, ilaç/lot/SKT, kamera/USB okuma, eşleme ve taslak sayım canlı kabulden geçti |
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
- [ ] Mevcut panel tasarımını ve sabit açık tema kuralını koru; masaüstü/dar ekran,
      TypeScript, panel denetimi ve production build ile ölçüp ayrı commit oluştur.
      — 🟨 TypeScript, değişen dosya lint'i, 251 sınıflı panel denetimi ve tam
      production build geçti. Yerel tarayıcıda klinik oturumu olmadığı için panel
      içi masaüstü/dar ekran görsel kabulü oturumlu kontrolde tamamlanacak.

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
| Reçete yazma / iptal | `write_prescription` · `void_prescription` | tıbbi kayıt, onay akışı şart |
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
