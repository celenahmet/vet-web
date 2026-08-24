# Veterito uygulaması ne yapıyor

**Ne bu:** mobil uygulamada **bugün gerçekten çalışan** her şeyin envanteri.
Web tarafında çalışan herkes (site metni, özellik sayfası, blog, tanıtım
görseli) buradan bakar.

**Neden var:** site ile uygulama iki ayrı depoda. Web tarafındaki biri
uygulamayı açmadan "şu da vardır herhalde" diye yazarsa, sitede olmayan bir
özellik anlatılmış olur. Bu yalnız yanlış değil, mağaza için de risk:
App Store 2.3.1 ve Google Play Yanıltıcı Beyan maddeleri, uygulamada karşılığı
olmayan tanıtımı doğrudan red sebebi sayıyor.

**Kaynağı ne:** uygulama deposundaki koddan ölçüldü (`~/Developer/veteriner`),
hatırlanarak yazılmadı. Ekran listesi `src/app/`, veri katmanı
`src/features/*/​*-api.ts`, tür listesi migration `0002`, aşı/rehber bölümleri
`guide-sections.tsx` üzerinden çıkarıldı.

> ⚠️ **Buradaki liste eskiyebilir.** Uygulama tarafında yeni bir özellik
> çıktığında bu dosya aynı turda güncellenir. Emin değilseniz **yazmayın, sorun.**
> Bu dosyanın tek işi "sitede yazdığımız şey uygulamada var mı" sorusunu
> cevaplamak; cevabı bilmiyorsak amacı kalmıyor.

**Son ölçüm:** 24.08.2026 · uygulama sürümü 1.0.0 (3) · 76 ekran · 137 migration

---

## 1 · Tek cümlede

Evcil hayvan sahibinin hayvanının **sağlık kayıtlarını** tuttuğu ve
hatırlatmalarla geri geldiği; veteriner kliniklerinin **randevu, hasta ve
muayene** tarafını yönettiği; üzerine hayvan profilleri ve sosyal paylaşım
katmanı binen mobil uygulama.

Ana kitle **pet sahibi**. Veteriner/klinik ikinci yüzey, admin üçüncü.

---

## 2 · Kimler kullanıyor

| Rol | Nasıl giriyor | Ne yapıyor |
|---|---|---|
| **Pet sahibi** | Kendi kaydoluyor | Asıl kitle. Hayvan kaydı, sağlık geçmişi, randevu, topluluk |
| **Veteriner / klinik çalışanı** | Aynı giriş ekranı | Yetki klinik üyeliğinden geliyor, ayrı hesap türü yok |
| **Klinik sahibi** | Aynı giriş ekranı | Kliniği yönetiyor, personel ekliyor |
| **Admin** | Ayrı | Şikâyet kuyruğu, doğrulama onayları, platform duyurusu |

⚠️ **Kimlik tek, yetki üyelikten geliyor.** Sitede "veteriner hesabı açın" gibi
ayrı bir kayıt yolu anlatılmaz; öyle bir yol yok.

---

## 3 · Uygulamanın beş sekmesi

| Sekme | İçinde ne var |
|---|---|
| **Ana sayfa** | Kişisel panel: yaklaşan randevular, hatırlatmalar, hayvanların özeti |
| **Sağlık** | Hayvanın sağlık defteri: aşı, ilaç, muayene, kilo, belge kaydı |
| **Ekle** | Hızlı kayıt girişi |
| **Topluluk** | Akış, gönderiler, klinik dizini, rehber, sahiplendirme |
| **Profil** | Hesap, hayvanlar, ayarlar, klinik paneline geçiş |

⚠️ **Ana sekme akış DEĞİL.** `(tabs)/index.tsx` içinde `PostCard` hiç
kullanılmıyor; kullanıcı içeriği yalnız Topluluk sekmesinde. Sitede uygulamayı
"sosyal ağ" diye manşete taşımak ürünü yanlış anlatır. IARC anketinde de
"asıl içerik kaynağı kullanıcı içeriği mi" sorusuna **Hayır** dendi.

---

## 4 · Pet sahibi tarafında ne var

### Hayvan ve sağlık kaydı
- Hayvan profili: ad, tür, ırk, doğum tarihi, fotoğraf, mikroçip
- Desteklenen türler: **kedi, köpek, kuş, tavşan, hamster, balık**
  (balıkta eş bulma kapalı)
- Sağlık kaydı: aşı, ilaç, muayene, tahlil, kilo takibi
- Aşı planı ve tekrar hatırlatması
- Acil durum bilgisi (`pet/emergency`)
- Hayvanın herkese açık profili (`pet-profile/[id]`)

### Randevu
- Klinikten randevu isteme
- Kliniğin karşı teklif vermesi (`appointment/propose`)
- Randevu listesi ve durum takibi

### Topluluk
- Gönderi, fotoğraf ve video paylaşımı
- Beğeni, yorum, kaydetme, paylaşma
- Takip etme, profil sayfaları
- Kullanıcı adı ve platform araması
- Doğrudan mesajlaşma + **mesaj isteği kutusu**
- Şikâyet etme ve engelleme

### Rehber (dört bölüm)
`breeds` (ırk rehberi, **1152 kayıt**) · `vaccineSchedule` (aşı takvimi) ·
`careTips` (bakım) · `adoption` (sahiplendirme)

⚠️ Aşı rehberi bilgilendirici. Ekranda görünen uyarı: *"Bu içerik genel
bilgidir, tıbbi tavsiye değildir."* Sitede rehberden söz ederken bu sınır
korunur.

### Sahiplendirme
İlan verme, ilan listesi, kendi ilanlarını yönetme.

---

## 5 · Klinik tarafında ne var

| Ekran | Ne yapıyor |
|---|---|
| Panel | Kliniğin özeti, kısayollar |
| Randevular | Gelen talepler, onay, karşı teklif |
| Müşteriler | Müşteri kaydı ve müşterinin hayvanları |
| Hasta kayıtları | Muayene ve tedavi geçmişi |
| Reçete | Reçete oluşturma ve listeleme |
| Ekip | Personel daveti ve yetkilendirme |
| Duyurular | Müşterilere duyuru (rızaya bağlı) |
| Raporlar | Klinik raporları |
| Gelir gider defteri | Basit kayıt: tür, tutar, kategori, not, tarih |
| Sayfa ayarları | Kliniğin herkese açık sayfası |

**Kliniğin herkese açık web sayfası:** `veterito.com/@kullaniciadi` adresinde
yayında ve site tarafından çiziliyor (`src/pages/ClinicPage.tsx`).

⚠️ **Gelir gider defteri finansal hizmet DEĞİL.** Müşteriye bağlanmıyor, fatura
kesmiyor, tahsilat yapmıyor. Play'e de "finans özelliği yok" beyanı verildi.
Sitede "ödeme", "tahsilat", "POS" gibi kelimeler kullanılmaz.

---

## 6 · Uygulamada OLMAYANLAR

Bu bölüm listeden daha önemli. Aşağıdakiler **yok** ve sitede, blogda,
mağaza metninde, tanıtım görselinde **anlatılmaz**:

| Yok olan | Notu |
|---|---|
| **Uygulama içi ödeme / tahsilat** | Hiç olmayacak. Para platformdan geçmiyor, pazarlığa kapalı ilke |
| **Ücretli paket / abonelik** | Faz-2. Bugün her şey ücretsiz |
| **Yapay zekâ** | Yok. "AI destekli" denmez |
| **SMS bildirimi** | Arayüzden kaldırıldı |
| **Teşhis / tedavi önerisi** | Uygulama teşhis koymuyor. Apple'da Medical kategorisi bilerek seçilmedi |
| **Cihaz konumu (GPS)** | Okunmuyor, izin bile istenmiyor. İl/ilçe kullanıcının listeden seçtiği bilgi |
| **Reklam** | Yok, reklam SDK'sı da yok |
| **Analitik / çökme raporlama SDK'sı** | Yok |
| **Kullanıcıdan belge yükleme** | Henüz yok, "yakında" deniyor |
| **Sesli mesaj** | Yok |
| **İngilizce arayüz** | `en.json` var ama yayında değil; uygulama Türkçe açılıyor |
| **iPad düzeni** | Bu sürümde iPhone-only |
| **Android'de Apple ile giriş** | Yalnız iOS'ta |

⚠️ Bu tablodan bir satır kalkacaksa (özellik gerçekten geldiyse), aynı turda
uygulama deposundaki `docs/MAGAZA_BEYAN_DEFTERI.md` §13 "beyan tetikleyicileri"
tablosu da gözden geçirilir. Mağaza beyanı koddan **sonra** değil, kodla
**birlikte** değişir.

---

## 7 · Site metni yazarken

**Kullanılabilecek üç kitle adı:** pati sahipleri · veteriner hekimler ·
klinikler. Mağaza metinlerinde de bu üçü geçiyor, tutarlı kalsın.

**Ölçek iddiası yazılmaz.** "Türkiye'nin en büyük", "binlerce kullanıcı" gibi
cümleler mağaza metninden bilerek elendi: uygulamada şu an dört gönderi var.
Hak edilmemiş bir cümle, doğrulanabilir bir abartma olur.

**Sayı yazılacaksa ölçülür.** Sitede geçen `1100'den fazla ırk` ifadesi
veritabanından sayıldı (1152). Yuvarlanmış ama gerçek.

**Uygulama mağazada:** App Store'da incelemede, Google Play'de kapalı test.
⚠️ `src/config/brand.ts` içindeki mağaza adresleri şu an **yer tutucu**
(`apps.apple.com/` ve `play.google.com/store/apps/`, uygulama kimliği yok).
Uygulama yayına girince gerçek adreslerle değiştirilecek; o güne kadar
"İndir" düğmesi mağaza ana sayfasına gidiyor.

---

## 8 · Uygulama içi geliştirme fikri çıkarsa

Bu dosya envanter, yol haritası değil. Web tarafında çalışırken "uygulamada şu
da olsaydı" diye bir şey görürseniz, karar yeri uygulama deposundaki
`docs/IS_LISTESI.md`. Buraya özellik önerisi yazılmaz; buraya yalnız
**var olan** yazılır.

Bağlayıcı kaynaklar (uygulama deposunda):
`docs/URUN_BRIEF.md` · `docs/IS_LISTESI.md` · `docs/MAGAZA_BEYAN_DEFTERI.md`
