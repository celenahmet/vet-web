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
| Randevular | `appointment_list` · **`set_appointment_status`** | ✅ tek yazma işlemi |
| Müşteriler | `clinic_customer_list` | ✅ salt okuma |
| Hastalar | `clinic_pet_list` | ✅ salt okuma |
| Gelir / Gider | `clinic_ledger_summary` · `clinic_ledger_by_category` | ✅ salt okuma |
| Ekip | `clinic_staff_list` | ✅ salt okuma |
| Klinik web sitesi | `clinics` (RLS) | ✅ salt okuma |
| Raporlar | `clinic_analytics` · `clinic_report` · `clinic_review_list` | ✅ salt okuma |

Ayrıca: kendi tasarımı (pazarlama menüsü bu rotada çizilmiyor) · uygulamanın
paleti · merkezî sözlük (ekranda ham kod yok) · `X-Robots-Tag: noindex` · CSP.

---

## Sırada — panel

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

### 2. Yazma işlemleri (şu an yalnız randevu durumu yazıyor)
| İş | RPC | Not |
|---|---|---|
| Duyuru gönderme | `send_announcement` | ⚠️ **DÖRT tanımı var**, en sonuncusu alınacak |
| Reçete yazma / iptal | `write_prescription` · `void_prescription` | tıbbi kayıt, onay akışı şart |
| Klinik sayfası düzenleme | `update_clinic_page` · `update_clinic_contact` | ⚠️ kullanıcı adı değişirse eski adres kırılır |
| Ekip davet / çıkarma | `clinic_invite_staff` · `clinic_remove_staff` | geri alması zor, onay akışı şart |
| Müşteri daveti | `clinic_invite_customer` | çift onaylı |
| Hizmet / kabiliyet düzenleme | `capabilities-api` | yalnız klinik sahibi |
| Başka saat önerme | `propose_appointment_time` | randevu ekranına eklenecek |
| Gelir / gider kaydı | `clinic_transactions` | para girişi, geri alma zor |

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
