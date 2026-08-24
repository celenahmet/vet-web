# Güvenlik başlıkları — neden bu değerler

`vercel.json` içindeki `headers` bloğunun gerekçesi. JSON yorum kabul etmediği
ve Vercel'in şeması bilinmeyen anahtarı reddettiği için (24.08.2026'da bu
öğrenildi, dağıtım sessizce yapılmamıştı) açıklama burada duruyor.

**Ölçüm (24.08.2026):** canlı sitede yalnız `strict-transport-security` vardı.
CSP, çerçeveleme koruması, referrer politikası ve izin politikası **yoktu**.
Oturum arkasında bir klinik paneli açılınca bu bir eksiklik olmaktan çıkıp
somut risk haline geldi.

## `frame-ancestors 'none'` + `X-Frame-Options: DENY`

**En önemlisi bu.** Panel oturum arkasında ve kullanıcı orada tıklıyor. Koruma
olmadan saldırgan paneli görünmez bir çerçeveye alıp kullanıcıya kendi
sayfasında tıklatabiliyor (clickjacking). İki başlık birlikte yazıldı: modern
tarayıcılar `frame-ancestors`'ı okuyor, eskiler `X-Frame-Options`'ı.

## `connect-src`

Yalnız kendi kaynağımız ve Supabase. Sızdırılan bir betik veriyi başka bir
sunucuya **gönderemiyor**; CSP'nin en çok işe yarayan parçası bu.

## ⚠️ `script-src 'self' 'unsafe-inline'` — bilinçli ödün

`'unsafe-inline'` istenmez ama buradaki alternatifler daha kötü:

- **Karma tabanlı CSP olmuyor.** Sayfalarda `application/ld+json` blokları var
  ve içerikleri **sayfa başına değişiyor** (Article ve FAQPage verisi). Her yazı
  için ayrı karma üretip başlığa koymak, başlığı yazı sayısıyla birlikte
  büyütürdü ve bir yazı eklendiğinde sessizce bozulurdu.
- **Nonce olmuyor.** Nonce her istekte değişmeli; site statik olarak sunuluyor,
  sunucu tarafında üretim yok.
- **Tema betiği dışarı alınamıyor.** `<head>` içindeki senkron tema betiği,
  sayfa ilk boyanmadan önce koyu/açık kararını veriyor. Ayrı dosyaya taşımak
  bir istek daha ekler ve yanlış tema flaşını geri getirir.

**Ne kazanıyoruz:** `'self'` sayesinde **dış kaynaklı** betik yüklenemiyor.
Yani üçüncü taraf bir alan adına script etiketi enjekte eden saldırı çalışmıyor.
Kaybettiğimiz, aynı sayfaya satır içi betik enjekte edebilen saldırıya karşı
koruma.

**Kalkma koşulu:** yapılandırılmış veri bloklarını satır içi `<script>` yerine
derleme zamanında üretilen ayrı bir `.json` dosyasına taşıyabilirsek ya da
sunucu tarafı render'a geçersek, `'unsafe-inline'` kaldırılır.

## `style-src 'unsafe-inline'`

React ve framer-motion satır içi `style` yazıyor. Kaldırmak animasyonları ve
düzeni bozar. Stil enjeksiyonunun saldırı değeri betiğe göre düşük.

## Diğerleri

| Başlık | Neden |
|---|---|
| `X-Content-Type-Options: nosniff` | Tarayıcı içerik türünü tahmin etmesin; yanlış tahmin bir dosyayı betik gibi çalıştırabiliyor |
| `Referrer-Policy: strict-origin-when-cross-origin` | Dışarı çıkarken tam adres sızmasın; panel adresleri referrer ile üçüncü tarafa gitmemeli |
| `Permissions-Policy` | Kamera, mikrofon, konum, ödeme ve USB kapalı. Site hiçbirini kullanmıyor; açık bırakmak gereksiz yüzey |
| `Cross-Origin-Opener-Policy: same-origin` | Açılan pencerelerin bu sayfaya erişmesini engelliyor |

## ⚠️ Değiştirmeden önce

CSP yanlış yazılırsa site **sessizce** bozulur: görsel yüklenmez, panel giriş
yapamaz, konsola hata düşer ama kullanıcı yalnız boş ekran görür. Değişiklikten
sonra en az şu üçü ölçülür:

1. Ana sayfa, blog listesi ve bir yazı: konsolda CSP ihlali var mı
2. Panelde giriş: Supabase'e istek gidebiliyor mu
3. Yapılandırılmış veri: `ld+json` blokları hâlâ okunabiliyor mu

## `X-Robots-Tag: noindex, nofollow` — yalnız `/panel`

Ölçüldü (24.08.2026): bir tarama botu `/panel` isteyince ana sayfanın HTML'i
gidiyor. Sebep mimari: panel ayrı bir dosya değil, `index.html`'e yapılan bir
yönlendirme. `noindex` etiketini React koyuyor, yani ancak JavaScript çalışınca
beliriyor. JS çalıştırmayan bir bot, klinik giriş ekranını ana sayfanın bir
kopyası olarak görüyordu.

Bu başlık yanıtın kendisinde taşındığı için JavaScript'e bağlı değil.

### Neden `robots.txt`'ye `Disallow: /panel` YAZILMADI

İkisi birlikte kullanılınca birbirini iptal ediyor. `Disallow`, botun sayfayı
**indirmesini** engelliyor; indirmeyen bot `noindex` başlığını da okuyamıyor.
Sonuç, adresin dışarıdan verilen bir bağlantı yüzünden içeriksiz biçimde yine de
dizine girmesi olabiliyor.

Doğru sıralama: taramaya izin ver, başlıkla "dizine ekleme" de. Panelde gizli
bir şey yok zaten, gizlenmesi gereken veri **girişin arkasında** ve yetkisi
sunucuda.

### Doğrulama

```
curl -sI https://veterito.com/panel | grep -i x-robots-tag
curl -sI https://veterito.com/ | grep -i x-robots-tag   # BOS OLMALI
```

İkinci komut çıktı verirse başlık tüm siteye sızmış demektir; site dizinden
düşer. Panelin başlığı ayrı bir kural olarak duruyor, `/(.*)` kuralına
eklenmemeli.
