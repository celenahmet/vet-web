/**
 * PANEL SOZLUGU — sunucunun dilinden insanin diline
 *
 * ⚠️ NEDEN VAR (Ahmet, 24.08.2026): *"paneli kullanacak kisiler teknik insanlar
 * degil normal insanlar yani herkesin anlayacagi olmali"*. Panelin ilk halinde
 * ekranda `done` yaziyordu ve eksik alan uyarisi *"location, services"* diyordu.
 * Bunlar veritabani kodlari; klinikte calisan biri icin hicbir sey ifade etmiyor.
 *
 * ⚠️ TEK KAPI. Sunucudan gelen her kod ekrana ancak buradan gecerek cikiyor.
 * Dagitik `if status === ...` yazilsaydi, yeni bir durum eklendiginde biri
 * guncellenir digeri unutulurdu; nitekim ilk surumde sozlukte `completed`
 * yaziyordu ama sunucu `done` gonderiyordu ve ekranda ham kod goruldu.
 *
 * ⚠️ BILINMEYEN KOD GIZLENMIYOR. Sozlukte olmayan bir deger gelirse ham hali
 * gosteriliyor. Cirkin gorunuyor ve bu KASITLI: sessizce "Bilinmiyor" yazmak
 * eksigi gorunmez yapar, ham kod ise bir sonraki bakista duzeltilir.
 */

/** Randevu durumlari. Kaynak: migration 0111, `set_appointment_status` govdesi. */
export const RANDEVU_DURUMU: Record<string, { ad: string; anlam: string }> = {
  requested: {
    ad: 'Yeni talep',
    anlam: 'Hayvan sahibi randevu istedi. Sizin onayınızı bekliyor.',
  },
  proposed: {
    ad: 'Başka saat önerildi',
    anlam: 'Siz farklı bir saat önerdiniz. Hayvan sahibinin cevabı bekleniyor.',
  },
  confirmed: {
    ad: 'Onaylandı',
    anlam: 'Randevu kesinleşti. Gün gelince "Geldi" işaretleyin.',
  },
  done: {
    ad: 'Tamamlandı',
    anlam: 'Hayvan geldi ve randevu tamamlandı.',
  },
  cancelled: {
    ad: 'İptal edildi',
    anlam: 'Randevu iptal edildi.',
  },
  declined: {
    ad: 'Kabul edilmedi',
    anlam: 'Randevu talebi geri çevrildi.',
  },
};

/**
 * IZIN VERILEN GECISLER — sunucudaki makinenin AYNISI.
 *
 * ⚠️ BU BIR YETKI KONTROLU DEGIL, dugmeleri gizlemek icin. Karari sunucu
 * veriyor ve olculdu (24.08.2026): `requested -> done` denendi, sunucu
 * *"Bu durum gecisine izin verilmiyor."* dedi ve veri degismedi. Uydurma bir
 * durum gonderildi, o da reddedildi. Yani buradaki liste kurcalansa bile
 * gecersiz gecis sunucudan doner.
 *
 * ⚠️ Kopya oldugu icin sunucu degisirse burasi ESKIYEBILIR. Eskidiginde olan
 * sey, olmayan bir dugmenin gorunmemesi ya da gorunen dugmenin hata vermesi;
 * ikisi de veri kaybi degil. Kaynak: migration 0111.
 */
export const IZINLI_GECISLER: Record<string, { durum: string; etiket: string; tur: 'olumlu' | 'olumsuz' | 'notr' }[]> = {
  requested: [
    { durum: 'confirmed', etiket: 'Onayla', tur: 'olumlu' },
    { durum: 'declined', etiket: 'Kabul etme', tur: 'olumsuz' },
  ],
  confirmed: [
    { durum: 'done', etiket: 'Geldi, tamamlandı', tur: 'olumlu' },
    { durum: 'cancelled', etiket: 'İptal et', tur: 'olumsuz' },
  ],
  proposed: [
    { durum: 'declined', etiket: 'Kabul etme', tur: 'olumsuz' },
    { durum: 'cancelled', etiket: 'İptal et', tur: 'olumsuz' },
  ],
};

/** Klinik icindeki roller. Kaynak: migration 0012. */
export const ROL: Record<string, { ad: string; anlam: string }> = {
  owner: {
    ad: 'Klinik sahibi',
    anlam: 'Kliniğin tüm ayarlarını değiştirebilir, ekip ekleyip çıkarabilir.',
  },
  staff: {
    ad: 'Çalışan',
    anlam: 'Randevuları ve hastaları görür, klinik ayarlarını değiştiremez.',
  },
  vet: {
    ad: 'Veteriner hekim',
    anlam: 'Muayene ve reçete yazabilen hekim.',
  },
};

/**
 * Klinik sayfasindaki eksik alanlar. Kaynak: migration 0050, `clinic_dashboard`.
 * Sunucu `about, address, phone, email, location, services` uretiyor.
 */
export const EKSIK_ALAN: Record<string, string> = {
  about: 'kliniğinizi anlatan tanıtım yazısı',
  address: 'açık adres',
  phone: 'telefon numarası',
  email: 'e-posta adresi',
  location: 'haritadaki konum',
  services: 'verdiğiniz hizmetler',
};

/** Hayvan turleri. */
export const TUR: Record<string, string> = {
  dog: 'Köpek',
  cat: 'Kedi',
  bird: 'Kuş',
  rabbit: 'Tavşan',
  hamster: 'Hamster',
  rodent: 'Kemirgen',
  fish: 'Balık',
  reptile: 'Sürüngen',
  turtle: 'Kaplumbağa',
  other: 'Diğer',
};

/**
 * Sunucu hatasini insanin anlayacagi cumleye cevirir.
 *
 * ⚠️ Hata GIZLENMIYOR, ceviriliyor. Teknik metin ikinci satirda duruyor: klinik
 * calisani ne yapacagini ust satirdan anliyor, destek isteyecegi zaman alt
 * satiri okuyor. Hatayi tamamen yutmak, "kaydedildi mi acaba" belirsizligi
 * uretir ki en kotusu odur.
 */
export function hatayiAnlat(mesaj: string | undefined | null): { baslik: string; ayrinti: string | null } {
  const m = (mesaj ?? '').trim();
  if (!m) return { baslik: 'Beklenmeyen bir sorun oldu. Sayfayı yenileyip tekrar deneyin.', ayrinti: null };

  /* Giris ekrani zaten insan diliyle yaziyor; ceviri katmani onu bozmasin. */
  if (/parola hatalı|Invalid login credentials/i.test(m)) {
    return {
      baslik: 'E-posta ya da parola hatalı.',
      ayrinti: 'Uygulamaya girerken kullandığınız e-posta ve şifrenin aynısını yazın.',
    };
  }
  if (/yetkisiz|uyesi degilsin|üyesi değilsin/i.test(m)) {
    return {
      baslik: 'Bu kliniğin bilgilerini görme yetkiniz yok.',
      ayrinti: 'Yanlış klinik seçili olabilir. Üstteki listeden kendi kliniğinizi seçin.',
    };
  }
  if (/durum geçişine izin verilmiyor|durum gecisine/i.test(m)) {
    return {
      baslik: 'Randevu bu duruma alınamıyor.',
      ayrinti: 'Randevu siz bakarken başka birinde değişmiş olabilir. Sayfayı yenileyin.',
    };
  }
  if (/permission denied/i.test(m)) {
    return {
      baslik: 'Bu işlem için yetkiniz yok.',
      ayrinti: 'Bazı işlemleri yalnızca klinik sahibi yapabilir.',
    };
  }
  if (/JWT|token|expired/i.test(m)) {
    return {
      baslik: 'Oturumunuz sona ermiş. Tekrar giriş yapın.',
      ayrinti: null,
    };
  }
  if (/Failed to fetch|NetworkError/i.test(m)) {
    return {
      baslik: 'İnternet bağlantısına ulaşılamadı.',
      ayrinti: 'Bağlantınızı kontrol edip tekrar deneyin.',
    };
  }
  return { baslik: 'İşlem tamamlanamadı.', ayrinti: m };
}

/** '12 Aralık 2026, 15:00' — saatsiz tarih istenirse saat kapatilir. */
export function tarihYaz(iso: string | null | undefined, saatli = true): string {
  if (!iso) return 'Tarih belirtilmemiş';
  const t = new Date(iso);
  if (Number.isNaN(t.getTime())) return 'Tarih belirtilmemiş';
  return t.toLocaleString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    ...(saatli ? { hour: '2-digit', minute: '2-digit' } : {}),
  });
}

/** 'bugün' / 'yarın' / '3 gün sonra' / '2 gün önce' — takvimi okumadan anlasilsin diye. */
export function gorecelizaman(iso: string | null | undefined): string | null {
  if (!iso) return null;
  const t = new Date(iso);
  if (Number.isNaN(t.getTime())) return null;
  const gun = Math.round((t.setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (gun === 0) return 'bugün';
  if (gun === 1) return 'yarın';
  if (gun === -1) return 'dün';
  if (gun > 1) return `${gun} gün sonra`;
  return `${Math.abs(gun)} gün önce`;
}

/** Saglik kaydi turleri. Kaynak: migration 0074. */
export const KAYIT_TURU: Record<string, string> = {
  vaccine: 'Aşı',
  parasite: 'Parazit koruması',
  checkup: 'Kontrol',
  medication: 'İlaç',
  surgery: 'Ameliyat',
  test: 'Tahlil',
  other: 'Diğer',
};

/** '09:30' — ajanda satirlarinda yalniz saat gerekiyor. */
export function saatYaz(iso: string | null | undefined): string {
  if (!iso) return '--:--';
  const t = new Date(iso);
  if (Number.isNaN(t.getTime())) return '--:--';
  return t.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
}

/**
 * Kurus -> "63.653,00 ₺"
 *
 * ⚠️ BOLME YALNIZ BURADA. Sunucudaki sayi kurus ve oyle kalmali; ekranda
 * bolunup veride bolunmemesi, gun sonu raporunun tutmasinin sarti.
 */
export function paraYaz(kurus: number | null | undefined): string {
  if (kurus === null || kurus === undefined || !Number.isFinite(kurus)) return '—';
  return (kurus / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' ₺';
}
