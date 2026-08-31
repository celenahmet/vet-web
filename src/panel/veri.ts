/**
 * PANEL VERI KATMANI
 *
 * ⚠️ ARKA UCTA HICBIR SEY YAZILMADI. Buradaki her cagri, uygulamanin ZATEN
 * kullandigi bir RPC. Klinik tarafinda 41 RPC var; panelin ilk surumu bunlarin
 * IKISINI cagiriyordu, geri kalani ekranda hic yoktu. Ahmet'in *"uygulama
 * icerigi yok yani"* dedigi sey buydu: eksik olan sunucu degil BAGLANTIYDI.
 *
 * ⚠️ YETKI HER CAGRIDA SUNUCUDA. Fonksiyonlarin govdesinde `is_clinic_member()`
 * kontrolu var; burada tekrar bir kontrol YAPILMIYOR, cunku istemcide yapilan
 * kontrol guvenlik degil sustur ve olmayan bir katman varmis izlenimi verir.
 *
 * ⚠️ Imza adlari TAHMIN EDILMEDI, migration'lardan okundu. Ilk denemede
 * `p_clinic_id` yazilmisti; gercek ad `p_clinic` ve yanlis ad uc farkli durumda
 * da AYNI 404'u dondurup testi anlamsiz kilmisti.
 */
import { istemci } from './istemci';
import { guvenliHata } from './guvenli-hata';
import { guvenliGorselleriTemizle } from './medya-veri';

async function cagir<T>(ad: string, parametre: Record<string, unknown>): Promise<T[]> {
  const { data, error } = await istemci.rpc(ad, parametre);
  /* Ham sunucu hatasi BURADAN OTEYE GECMIYOR. Tek bogaz oldugu icin yirmi bes
     ayri `catch` blogunu duzeltmek gerekmedi; hepsi kendiliginden guvenli. */
  if (error) throw guvenliHata(error, ad);
  return (data as T[] | null) ?? [];
}

export type Pano = {
  follower_count: number;
  customer_count: number;
  announcement_count: number;
  service_count: number;
  is_verified: boolean;
  missing_fields: string[];
};

export type Randevu = {
  id: string;
  pet_name: string | null;
  owner_name: string | null;
  service_name: string | null;
  starts_at: string | null;
  proposed_at: string | null;
  status: string;
  note: string | null;
  clinic_note: string | null;
};

export type Musteri = {
  user_id: string;
  display_name: string | null;
  avatar_url: string | null;
  note: string | null;
  created_at: string;
  pet_count: number;
};

export type Hasta = {
  pet_id: string;
  pet_name: string | null;
  species_code: string | null;
  owner_id: string;
  owner_name: string | null;
};

export type Personel = {
  user_id: string;
  display_name: string | null;
  avatar_url: string | null;
  role: string;
  created_at: string;
  is_me: boolean;
  title: string | null;
  education: string | null;
  bio: string | null;
  is_public: boolean;
  photo_key: string | null;
};

export type Degerlendirme = {
  id: string;
  display_name: string | null;
  rating: number;
  comment: string | null;
  created_at: string;
};

export type Analiz = {
  appt_total: number;
  appt_confirmed: number;
  appt_declined: number;
  appt_cancelled: number;
  appt_done: number;
  appt_pending: number;
  completion_rate: number;
  patients_total: number;
  patients_new: number;
  records_total: number;
  upcoming_due: number;
  top_service: string | null;
  top_service_count: number;
};

export type Rapor = {
  views_total: number;
  views_period: number;
  posts_total: number;
  likes_total: number;
  comments_total: number;
  post_views_total: number;
  followers_total: number;
  customers_total: number;
  appointments_period: number;
  reviews_total: number;
  rating_avg: number | null;
};

export type DefterOzeti = { income: number; expense: number; balance: number; tx_count: number };
export type DefterKalemi = { kind: string; category: string; total: number; tx_count: number };
/** Bir yilin tek ayi. Bos aylar da gelir; `ay` 1-12. Tutarlar KURUS. */
export type DefterAyi = { ay: number; income: number; expense: number; balance: number; tx_count: number };

/** Klinik web sayfasinin ayarlari. `clinics` tablosundan, RLS altinda. */
export type KlinikSayfasi = {
  name: string;
  address: string | null;
  city: string | null;
  district: string | null;
  username: string | null;
  is_published: boolean;
  is_indexable: boolean;
  is_verified: boolean;
  page_tagline: string | null;
  directions: string | null;
  about: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  website: string | null;
  instagram: string | null;
  facebook: string | null;
  x_handle: string | null;
  tiktok: string | null;
  youtube: string | null;
  linkedin: string | null;
  logo_key: string | null;
  cover_key: string | null;
  view_count: number;
  rating_avg: number | null;
  rating_count: number;
};

export const panoOku = (klinik: string) => cagir<Pano>('clinic_dashboard', { p_clinic: klinik });
export const randevulariOku = (klinik: string) => cagir<Randevu>('appointment_list', { p_clinic: klinik });
export const musterileriOku = (klinik: string) => cagir<Musteri>('clinic_customer_list', { p_clinic: klinik });
export const hastalariOku = (klinik: string) => cagir<Hasta>('clinic_pet_list', { p_clinic: klinik });
export const personeliOku = (klinik: string) => cagir<Personel>('clinic_staff_list', { p_clinic: klinik });

export async function personelProfiliniGuncelle(input: {
  klinik: string;
  kullanici: string;
  unvan: string;
  egitim: string;
  tanitim: string;
  yayinda?: boolean;
}): Promise<void> {
  await calistir('update_staff_profile', {
    p_clinic: input.klinik,
    p_user: input.kullanici,
    p_title: input.unvan.trim(),
    p_education: input.egitim.trim(),
    p_bio: input.tanitim.trim(),
    p_public: input.yayinda ?? null,
    p_sort: null,
  });
}

export async function kendiPersonelFotografiniGuncelle(klinik: string, key: string): Promise<void> {
  await calistir('update_staff_photo', { p_clinic: klinik, p_key: key });
}
export const degerlendirmeleriOku = (klinik: string) => cagir<Degerlendirme>('clinic_review_list', { p_clinic: klinik });
export type Hatirlatma = {
  record_id: string;
  pet_id: string;
  pet_name: string | null;
  owner_name: string | null;
  /** 'vaccine' | 'parasite' gibi kayit turu. */
  kind: string | null;
  title: string | null;
  next_due_at: string | null;
  days_left: number | null;
};

export const analizOku = (klinik: string) => cagir<Analiz>('clinic_analytics', { p_clinic: klinik });
/**
 * Yaklasan asi ve parazit hatirlatmalari.
 *
 * ⚠️ Tasarim taslagindaki "Yaklasan Asi & Parazit" kutusunun ARKASI VAR: sunucu
 * `kind`, `title`, `next_due_at` ve `days_left` donduruyor. Taslaktaki diger
 * bazi kutularin (trend oklari, doluluk grafigi, kilo) arkasi yok; onlar
 * yapilmadi.
 */
export const hatirlatmalariOku = (klinik: string) => cagir<Hatirlatma>('clinic_upcoming_records', { p_clinic: klinik });
export const raporOku = (klinik: string) => cagir<Rapor>('clinic_report', { p_clinic: klinik });

/**
 * Randevu durumunu degistirir.
 *
 * ⚠️ TEK YAZMA ISLEMI. Panelin geri kalani okuma; degistiren yalniz burasi.
 * Sunucu hem uyeligi hem gecisin gecerliligini kendisi denetliyor. Olculdu
 * (24.08.2026):
 *   oturumsuz cagri            -> 42501 permission denied
 *   `requested` -> `done`      -> "Bu durum gecisine izin verilmiyor."
 *   uydurma durum degeri       -> ayni ret
 * Uc denemenin hicbirinde veri degismedi.
 */
export async function randevuDurumunuDegistir(randevu: string, durum: string, not?: string) {
  const { error } = await istemci.rpc('set_appointment_status', {
    p_appointment: randevu,
    p_status: durum,
    ...(not ? { p_clinic_note: not } : {}),
  });
  if (error) throw error;
}

/**
 * GELIR / GIDER
 *
 * ⚠️ TUTARLAR KURUS. Sunucu tam sayi tutuyor (`6365300` = 63.653,00 TL); kayan
 * noktali para birimi kuruslari sessizce yuvarlar ve gun sonu tutmaz. Bolme
 * YALNIZ EKRANDA yapiliyor, veride degil.
 *
 * ⚠️ Defter ekip disina kapali (migration 0096) ve bu kontrol sunucuda:
 * `is_clinic_member(p_clinic)` sorgunun `where` sartinda.
 */
export const defterOzetiOku = (klinik: string, aralik?: { baslangic?: string; bitis?: string }) => cagir<DefterOzeti>('clinic_ledger_summary', { p_clinic: klinik, p_from: aralik?.baslangic ?? null, p_to: aralik?.bitis ?? null });
export const defterKalemleriOku = (klinik: string, aralik?: { baslangic?: string; bitis?: string }) => cagir<DefterKalemi>('clinic_ledger_by_category', { p_clinic: klinik, p_from: aralik?.baslangic ?? null, p_to: aralik?.bitis ?? null });

/**
 * Yilin on iki ayi. Toplama SUNUCUDA (migration 0139): on iki ayri cagri
 * yerine tek gidis donus, ve bos aylar da doluyor -- boylece "mart yok" ile
 * "martta hareket yok" ayirt ediliyor.
 */
export const defterAylariOku = (klinik: string, yil?: number) =>
  cagir<DefterAyi>('clinic_ledger_monthly', { p_clinic: klinik, p_year: yil ?? null });

/**
 * Klinigin web sayfasi ayarlari.
 *
 * ⚠️ RPC degil dogrudan tablo okumasi; `clinics` uzerinde `clinics_member_read`
 * politikasi var ve yalniz uye oldugunuz klinigi donduruyor. Yabanci bir kimlik
 * verilirse bos kume doner, hata degil.
 */
export async function klinikSayfasiniOku(klinik: string): Promise<KlinikSayfasi | null> {
  const { data, error } = await istemci
    .from('clinics')
    .select('name, address, city, district, username, is_published, is_indexable, is_verified, page_tagline, directions, about, phone, whatsapp, email, website, instagram, facebook, x_handle, tiktok, youtube, linkedin, logo_key, cover_key, view_count, rating_avg, rating_count')
    .eq('id', klinik)
    .maybeSingle();
  if (error) throw error;
  return (data as KlinikSayfasi | null) ?? null;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * YAZMA ISLEMLERI (Ahmet, 24.08.2026: *"listeleniyor bazı şeyler mobildeki
 * gibi yönetilemiyor eksikler çok fazla var"*)
 *
 * ⚠️ HEPSININ YETKISI SUNUCUDA. Olculdu (24.08.2026):
 *   oturumsuz            -> 42501 permission denied for function
 *   uye, kendi klinigi   -> 204
 *   uye, YABANCI klinik  -> 45030 "Bunu yalnız klinik sahibi yapabilir."
 * Panelde ayrica bir kontrol YAPILMIYOR; yapilsaydi guvenlik sanilan ama
 * olmayan bir katman eklenmis olurdu.
 *
 * ⚠️ SAHIP / CALISAN AYRIMI DA SUNUCUDA. Klinik sahibi olmayan bir calisan bu
 * cagrilari yaptiginda sunucu reddediyor; panel hatayi gizlemiyor, insan diline
 * cevirip gosteriyor ("Bazı işlemleri yalnızca klinik sahibi yapabilir").
 * ═══════════════════════════════════════════════════════════════════════════ */

async function calistir(ad: string, parametre: Record<string, unknown>): Promise<void> {
  const { error } = await istemci.rpc(ad, parametre);
  if (error) throw error;
}

/**
 * Randevuya BASKA SAAT onerir.
 *
 * ⚠️ Onaylamanin alternatifi. Klinik "olmaz" demek zorunda kalmasin diye var:
 * saat uymuyorsa randevu reddedilmek yerine karsi teklif aliyor. Hayvan sahibi
 * kabul ya da ret veriyor; durum `proposed` oluyor.
 */
export const baskaSaatOner = (randevu: string, yeniZaman: string, not?: string) =>
  calistir('propose_appointment_time', { p_appointment: randevu, p_new_time: yeniZaman, ...(not ? { p_note: not } : {}) });

/**
 * Klinik sayfasinin yayin ayarlari.
 *
 * ⚠️ `p_published` ve `p_indexable` AYRI SEYLER: biri sayfanin acik olup
 * olmadigi, digeri arama motorlarina gorunup gorunmedigi. Tek anahtara
 * indirgemek, "sayfam kapali sanıyordum ama Google'da cikiyor" durumunu
 * uretirdi.
 */
export const klinikSayfasiniGuncelle = (
  klinik: string,
  alanlar: { yayinda?: boolean; aramayaAcik?: boolean; slogan?: string; yolTarifi?: string; websitesi?: string },
) =>
  calistir('update_clinic_page', {
    p_clinic: klinik,
    ...(alanlar.yayinda !== undefined ? { p_published: alanlar.yayinda } : {}),
    ...(alanlar.aramayaAcik !== undefined ? { p_indexable: alanlar.aramayaAcik } : {}),
    ...(alanlar.slogan !== undefined ? { p_tagline: alanlar.slogan } : {}),
    ...(alanlar.yolTarifi !== undefined ? { p_directions: alanlar.yolTarifi } : {}),
    ...(alanlar.websitesi !== undefined ? { p_website: alanlar.websitesi } : {}),
  });

/**
 * Kullanici adi kurallari mobildeki `usernameProblem` ile birebir ayni.
 * Ekrandaki kontrol yalniz anlik geri bildirim; son karari yine
 * `set_clinic_username` verir ve profil kullanici adlariyla cakismayi da denetler.
 */
export function klinikKullaniciAdiSorunu(ad: string): string | null {
  const deger = ad.trim().toLocaleLowerCase('en');
  if (deger.length < 3) return 'too_short';
  if (deger.length > 30) return 'too_long';
  if (!/^[a-z0-9_]+$/.test(deger)) return 'invalid_chars';
  if (/^[0-9_]/.test(deger)) return 'bad_start';
  return null;
}

export const klinikKullaniciAdiniYaz = (klinik: string, ad: string) =>
  calistir('set_clinic_username', {
    p_clinic: klinik,
    p_name: ad.trim().toLocaleLowerCase('en'),
  });

/**
 * WhatsApp ve sosyal hesaplar mobildeki `updateClinicContact` ile ayni RPC'ye
 * gider. Tam profil adresi yapistirilsa bile temizligi sunucu yapar; webde ikinci
 * bir normalizasyon kurali yazilmiyor.
 */
export const klinikIletisiminiGuncelle = (
  klinik: string,
  alanlar: {
    whatsapp?: string | null;
    instagram?: string | null;
    facebook?: string | null;
    x?: string | null;
    tiktok?: string | null;
    youtube?: string | null;
    linkedin?: string | null;
  },
) =>
  calistir('update_clinic_contact', {
    p_clinic: klinik,
    p_whatsapp: alanlar.whatsapp ?? null,
    p_instagram: alanlar.instagram ?? null,
    p_facebook: alanlar.facebook ?? null,
    p_x: alanlar.x ?? null,
    p_tiktok: alanlar.tiktok ?? null,
    p_youtube: alanlar.youtube ?? null,
    p_linkedin: alanlar.linkedin ?? null,
  });

/**
 * Klinigin temel bilgileri.
 *
 * ⚠️ RPC DEGIL, DOGRUDAN TABLO GUNCELLEMESI — ve bu guvenli: migration 0022
 * `clinics` uzerindeki UPDATE yetkisini KOLON KOLON veriyor. `is_verified`
 * bilerek disarida: klinik sahibi kendi kendine dogrulanmis rozeti verebilseydi
 * rozet hicbir sey ifade etmezdi.
 *
 * ⚠️ Satir kontrolu de var: `clinics_owner_write` politikasi yalniz klinik
 * sahibine izin veriyor. Calisan denerse guncelleme sessizce sifir satir
 * etkiliyor; o yuzden `return=representation` ile donen satir sayisi
 * kontrol ediliyor ve bos donerse hata firlatiliyor.
 */
export async function klinikBilgileriniGuncelle(
  klinik: string,
  alanlar: Partial<{ name: string; about: string; address: string; city: string; district: string; phone: string; email: string }>,
): Promise<void> {
  const { data, error } = await istemci
    .from('clinics')
    .update(alanlar)
    .eq('id', klinik)
    .select('id');
  if (error) throw error;
  if (!data || data.length === 0) {
    /*
     * ⚠️ SESSIZ BASARISIZLIK ENGELLENIYOR. RLS bir satiri gizlediginde PostgREST
     * hata degil BOS SONUC doner. Bunu basari saymak, "kaydettim" deyip hicbir
     * sey kaydetmemek olurdu — en kotu turden hata.
     */
    throw new Error('permission denied');
  }
}

/**
 * KLINIK PROFILI YAZMA YOLLARI (27.08.2026, esitleme denetimi 2. madde).
 *
 * Panel bu iki seyi OKUYABILIYOR ama DEGISTIREMIYORDU: hizmet listesi ve
 * calisma saatleri. Klinik bilgisini duzeltmek icin telefona gitmek gerekiyordu
 * ve bu, "web paneli" fikrini bosa cikariyordu.
 *
 * ⚠️ MOBILLE AYNI YUZEY. Ikisi de `clinic_capabilities` ve `clinic_hours`
 * tablolarina yaziyor; ayri bir RPC ya da ayri bir tablo ACILMADI. Ikinci bir
 * yol acmak, iki tarafin zamanla ayrisması demekti.
 *
 * ⚠️ YETKI SUNUCUDA. Bu fonksiyonlar hicbir rol kontrolu yapmiyor; "web panele
 * girebilen zaten kliniktir" varsayimi YOK. Tablolarin RLS politikalari
 * karar veriyor, buradaki tek is basarisizligi GORUNUR kilmak.
 */

/**
 * Bir hizmeti acar ya da kapatir.
 *
 * ⚠️ ACMA ile KAPATMA farkli dogrulaniyor ve bu bilincli. Acmada bos sonuc
 * kesin olarak RLS demektir. Kapatmada bos sonuc iki anlama gelebilir: ya RLS
 * engelledi ya da satir zaten yoktu (baska sekmede kapatilmis olabilir).
 * Ikisini ayirt etmek icin satirin HALA DURUP DURMADIGI okunuyor; duruyorsa
 * silinememis demektir. Bos sonucu kosulsuz hata saymak, mesru bir tekrari
 * hata gibi gosterirdi.
 */
export async function hizmetiAcKapat(klinik: string, kod: string, acik: boolean): Promise<void> {
  if (acik) {
    const { data, error } = await istemci
      .from('clinic_capabilities')
      .upsert({ clinic_id: klinik, service_code: kod }, { onConflict: 'clinic_id,service_code' })
      .select('service_code');
    if (error) throw error;
    if (!data || data.length === 0) throw new Error('permission denied');
    return;
  }

  const { error } = await istemci
    .from('clinic_capabilities')
    .delete()
    .eq('clinic_id', klinik)
    .eq('service_code', kod);
  if (error) throw error;

  const { data: kalan, error: okumaHatasi } = await istemci
    .from('clinic_capabilities')
    .select('service_code')
    .eq('clinic_id', klinik)
    .eq('service_code', kod);
  if (okumaHatasi) throw okumaHatasi;
  if (kalan && kalan.length > 0) throw new Error('permission denied');
}

/**
 * Bir gunun calisma saatini yazar.
 *
 * ⚠️ KAPALI GUNDE SAAT NULL'A CEKILIYOR, mobildeki `setHours` ile birebir ayni.
 * Kapali bir gunde eski saatleri birakmak, ekranda "kapali" yazip veride
 * "09:00-18:00" tutmak olurdu; iki kaynak ayrisirsa hangisinin dogru oldugunu
 * kimse bilemez.
 */
export async function calismaSaatiYaz(input: {
  klinik: string;
  gun: number;
  kapali: boolean;
  acilis: string | null;
  kapanis: string | null;
}): Promise<void> {
  const { data, error } = await istemci
    .from('clinic_hours')
    .upsert(
      {
        clinic_id: input.klinik,
        weekday: input.gun,
        is_closed: input.kapali,
        opens_at: input.kapali ? null : (input.acilis || null),
        closes_at: input.kapali ? null : (input.kapanis || null),
      },
      { onConflict: 'clinic_id,weekday' },
    )
    .select('weekday');
  if (error) throw error;
  if (!data || data.length === 0) throw new Error('permission denied');
}

/**
 * RECETE (mig 0095, panele 27.08.2026'da eklendi).
 *
 * ⚠️ RECETEYI VETERINER YAZAR, PLATFORM YAZMAZ. Burada ilac listesi, doz
 * onerisi ya da otomatik tamamlama YOK ve olmayacak; oneri sunmak tibbi karar
 * vermek demektir. Mobil taraftaki ayni kural (`prescriptions-api.ts`) burada
 * da geceli.
 *
 * ⚠️ SILME YOK, IPTAL VAR. Yanlis recete silinmiyor, iptal isaretleniyor;
 * duzeltme yeni surum olarak yaziliyor (`p_replaces`). Sunucu da silmeye izin
 * vermiyor, DELETE yetkisi hic verilmemis. Defter kaydiyla farki tam burada:
 * defter duzeltilebilir, recete duzeltilmez -- cunku recete disariya verilmis
 * bir belgedir ve gecmisi degistirmek, verilmemis bir belgeyi verilmis
 * gostermek olur.
 *
 * ⚠️ TEK RPC, AYRI INSERT DEGIL. Recete ve kalemleri tek islemde yaziliyor;
 * ikisi ayri gitseydi ve kalemler duserse hastanin gecmisinde ILACSIZ bir
 * recete kalirdi.
 */
export type ReceteKalemi = {
  drug_name: string;
  dosage?: string | null;
  frequency?: string | null;
  duration?: string | null;
  note?: string | null;
};

export type Recete = {
  id: string;
  pet_id: string;
  issued_at: string;
  diagnosis: string | null;
  notes: string | null;
  voided_at: string | null;
  void_reason: string | null;
  replaces_id: string | null;
  superseded_by: string | null;
  prescription_items: (ReceteKalemi & { id: string; sort_order: number })[];
};

export async function receteleriOku(klinik: string): Promise<Recete[]> {
  const { data, error } = await istemci
    .from('prescriptions')
    .select(
      'id, pet_id, issued_at, diagnosis, notes, voided_at, void_reason, replaces_id, superseded_by,'
      + ' prescription_items(id, drug_name, dosage, frequency, duration, note, sort_order)',
    )
    .eq('clinic_id', klinik)
    .order('issued_at', { ascending: false });
  if (error) throw error;
  return (data as unknown as Recete[] | null) ?? [];
}

/** Yeni recete. `degistirilen` verilirse eski recetenin yerine yazilir. */
export async function receteYaz(input: {
  klinik: string;
  hasta: string;
  kalemler: ReceteKalemi[];
  tani?: string | null;
  notlar?: string | null;
  degistirilen?: string | null;
}): Promise<void> {
  await calistir('write_prescription', {
    p_clinic: input.klinik,
    p_pet: input.hasta,
    p_items: input.kalemler,
    p_diagnosis: input.tani ?? null,
    p_notes: input.notlar ?? null,
    p_replaces: input.degistirilen ?? null,
  });
}

/**
 * Receteyi iptal eder.
 *
 * ⚠️ SEBEP ZORUNLU ve bos gecilemiyor. Sebepsiz iptal, gecmise bakan bir
 * hekimin "neden iptal edilmis" sorusunu cevapsiz birakir; belge kaydinda en
 * cok ihtiyac duyulan sey tam da budur.
 */
export const receteIptalEt = (id: string, sebep: string) =>
  calistir('void_prescription', { p_id: id, p_reason: sebep.trim() });

/**
 * MUSTERI NOTU VE CIKARMA (esitleme 7. madde, 27.08.2026).
 *
 * ⚠️ NOT KLINIK ICIDIR, musteriye gosterilmiyor. Mobil taraftaki ayni kural
 * (`customers-api.ts`) burada da geceli; notu musteriye acmak, klinigin kendi
 * defterini disariya vermek olurdu.
 */
export async function musteriNotuYaz(klinik: string, kullanici: string, not: string): Promise<void> {
  const { data, error } = await istemci
    .from('clinic_customers')
    .update({ note: not.trim() || null })
    .eq('clinic_id', klinik)
    .eq('user_id', kullanici)
    .select('user_id');
  if (error) throw error;
  if (!data || data.length === 0) throw new Error('permission denied');
}

/**
 * Musteriyi klinikten cikarir.
 *
 * ⚠️ SATIRIN GERCEKTEN GITTIGI OKUNARAK dogrulaniyor. Silmede bos sonuc iki
 * anlama gelir: RLS engelledi ya da satir zaten yoktu. Ikisini ayirt etmeden
 * "silindi" demek, yetkisiz bir denemeyi basari gibi gostermek olurdu.
 *
 * ⚠️ HASTA KAYITLARI SILINMIYOR. Bu islem yalniz klinik ile musteri
 * baglantisini kaldiriyor; gecmis saglik kayitlari hastanin gecmisidir ve
 * baglantiyla birlikte yok olmasi kabul edilemez.
 */
export async function musteriyiCikar(klinik: string, kullanici: string): Promise<void> {
  const { error } = await istemci
    .from('clinic_customers')
    .delete()
    .eq('clinic_id', klinik)
    .eq('user_id', kullanici);
  if (error) throw error;

  const { data: kalan, error: okumaHatasi } = await istemci
    .from('clinic_customers')
    .select('user_id')
    .eq('clinic_id', klinik)
    .eq('user_id', kullanici);
  if (okumaHatasi) throw okumaHatasi;
  if (kalan && kalan.length > 0) throw new Error('permission denied');
}

/**
 * Saglik kaydini siler (esitleme 8. madde).
 *
 * ⚠️ RECETEDEN FARKLI ve fark bilincli. Recete disariya verilmis bir belgedir,
 * silinmez iptal edilir. Saglik kaydi ise klinigin kendi defterindeki bir
 * satir; yanlis girilen bir muayene tarihini duzeltmenin yolu onu silip
 * yeniden yazmak. Mobil taraf da tam olarak boyle davraniyor
 * (`removePetRecord`).
 */
export async function saglikKaydiSil(kayit: string): Promise<void> {
  const { error } = await istemci.from('clinic_pet_records').delete().eq('id', kayit);
  if (error) throw error;

  const { data: kalan, error: okumaHatasi } = await istemci
    .from('clinic_pet_records')
    .select('id')
    .eq('id', kayit);
  if (okumaHatasi) throw okumaHatasi;
  if (kalan && kalan.length > 0) throw new Error('permission denied');
}

/**
 * KLINIGIN BAKTIGI TURLER (esitleme, 27.08.2026).
 *
 * Mobilde `clinic/capabilities.tsx` bunu yonetiyordu, panelde yoktu.
 * Tur secimi kliniğin aramalarda hangi hayvan sahibine gorunecegini belirliyor;
 * bos birakan klinik, bakabilecegi hastaya gorunmuyor.
 */
/* ⚠️ `Tur` tipi ve tur listesi okuyucusu ZATEN VARDI (`turleriOku`, asagida).
   Ilk yazimda ikinci bir kopya acilmisti; ayni tabloyu iki ayri isimle okumak,
   birinin degisip otekinin geride kalmasi demekti. Kopya kaldirildi. */

export async function klinikTurleriniOku(klinik: string): Promise<string[]> {
  const { data, error } = await istemci
    .from('clinic_species')
    .select('species_code')
    .eq('clinic_id', klinik);
  if (error) throw error;
  return ((data as { species_code: string }[] | null) ?? []).map((x) => x.species_code);
}

/**
 * Turu acar ya da kapatir.
 *
 * ⚠️ Hizmet acip kapatmakla ayni desen: acmada bos sonuc kesin RLS, kapatmada
 * satirin hala durup durmadigi okunuyor. Ayni gerekce, ayni kalip.
 */
export async function turAcKapat(klinik: string, kod: string, acik: boolean): Promise<void> {
  if (acik) {
    const { data, error } = await istemci
      .from('clinic_species')
      .upsert({ clinic_id: klinik, species_code: kod }, { onConflict: 'clinic_id,species_code' })
      .select('species_code');
    if (error) throw error;
    if (!data || data.length === 0) throw new Error('permission denied');
    return;
  }

  const { error } = await istemci
    .from('clinic_species')
    .delete()
    .eq('clinic_id', klinik)
    .eq('species_code', kod);
  if (error) throw error;

  const { data: kalan, error: okumaHatasi } = await istemci
    .from('clinic_species')
    .select('species_code')
    .eq('clinic_id', klinik)
    .eq('species_code', kod);
  if (okumaHatasi) throw okumaHatasi;
  if (kalan && kalan.length > 0) throw new Error('permission denied');
}

/** Ekibe yeni kisi daveti. Yalniz klinik sahibi. */
export const personelDavetEt = (klinik: string, eposta: string) =>
  calistir('clinic_invite_staff', { p_clinic: klinik, p_email: eposta.trim() });

/** Ekipten cikarma. Yalniz klinik sahibi. */
export const personeliCikar = (klinik: string, kullanici: string) =>
  calistir('clinic_remove_staff', { p_clinic: klinik, p_user: kullanici });

/**
 * Musteri daveti.
 *
 * ⚠️ CIFT ONAYLI: davet tek basina baglanti kurmuyor, hayvan sahibi
 * uygulamadan kabul etmek zorunda. Klinik kimseyi kendi listesine tek tarafli
 * ekleyemiyor; bu bir kisitlama degil, urun karari.
 */
export const musteriDavetEt = (klinik: string, alanlar: { eposta?: string; telefon?: string; not?: string }) =>
  calistir('clinic_invite_customer', {
    p_clinic: klinik,
    ...(alanlar.eposta ? { p_email: alanlar.eposta.trim() } : {}),
    ...(alanlar.telefon ? { p_phone: alanlar.telefon.trim() } : {}),
    ...(alanlar.not ? { p_note: alanlar.not } : {}),
  });

/* ── REFERANS MENUSUNDEKI DIGER BOLUMLER ────────────────────────────────────
 * ⚠️ Hepsi TABLO okumasi, RPC degil. Sebep: bu tablolarin RLS politikalari
 * zaten klinik uyeligine bagli ve ayri bir RPC yazmak yeni bir yuzey acardi.
 * Yabanci klinik kimligi verilirse bos kume doner, hata degil.
 */

/**
 * ⚠️ KOLON ADLARI KAYNAKTAN OKUNDU, tahmin edilmedi (25.08.2026). Ilk halinde
 * `note` ve `performed_on` yazilmisti; gercek adlar `detail` ve `performed_at`
 * ve sorgu `42703 column does not exist` donduruyordu. Migration 0074.
 *
 * ⚠️ `weight_kg` BURADA: kilo hayvanda degil SAGLIK KAYDINDA tutuluyor. Daha
 * once "kilo hicbir yerde yok" diye yazilmisti, yanlisti; hayvan tablosunda yok
 * ama kayit tablosunda var.
 */
export type SaglikKaydi = {
  id: string;
  pet_id: string | null;
  kind: string | null;
  title: string | null;
  detail: string | null;
  performed_at: string | null;
  next_due_at: string | null;
  weight_kg: number | null;
};

export type Gonderi = {
  id: string;
  body: string | null;
  status: string | null;
  like_count: number;
  comment_count: number;
  created_at: string;
  media: { storage_key: string; position: number; media_type: string }[];
};
export type GonderiYorumu = {
  id: string; post_id: string; author_id: string; body: string | null; created_at: string;
  author_name: string; parent_id: string | null; reply_count: number; media_key: string | null;
};

export type Ilan = {
  id: string;
  title: string | null;
  species_code: string | null;
  status: string | null;
  created_at: string;
  reject_reason: string | null;
  city: string | null;
  district: string | null;
  photos: { storage_key: string; sort_order: number }[];
};

export type Hizmet = { service_code: string; note: string | null; price_min: number | null; price_max: number | null };
export type CalismaSaati = { weekday: number; is_closed: boolean; opens_at: string | null; closes_at: string | null };
export type OzelCalismaGunu = {
  id: string;
  special_date: string;
  label: string;
  is_closed: boolean;
  opens_at: string | null;
  closes_at: string | null;
};
export type Duyuru = { id: string; body: string | null; audience: string | null; status: string | null; recipient_count: number | null; created_at: string; delivery_kind: string; target_city: string | null; target_species: string | null; channels: string[]; media: { storage_key: string; position: number }[] };
export type HizmetAdi = { code: string; name_tr: string };

async function tablo<T>(ad: string, secim: string, klinik: string | null, siralama?: string): Promise<T[]> {
  let q = istemci.from(ad).select(secim);
  if (klinik) q = q.eq('clinic_id', klinik);
  if (siralama) q = q.order(siralama, { ascending: false });
  const { data, error } = await q.limit(60);
  if (error) throw error;
  return (data as T[] | null) ?? [];
}

export const saglikKayitlariniOku = (klinik: string) =>
  tablo<SaglikKaydi>('clinic_pet_records', 'id, pet_id, kind, title, detail, performed_at, next_due_at, weight_kg', klinik, 'performed_at');

export async function ilanlarimiOku(): Promise<Ilan[]> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) return [];
  const { data, error } = await istemci.from('adoption_listings')
    .select('id, title, species_code, status, created_at, reject_reason, city, district, photos:adoption_photos(storage_key,sort_order)')
    .eq('created_by', kullanici.user.id).order('created_at', { ascending: false });
  if (error) throw error;
  return (data as unknown as Ilan[] | null) ?? [];
}

export type SahiplendirmeBasvurusu = { id: string; listing_id: string; applicant_id: string; message: string; contact_phone: string | null; status: 'pending' | 'accepted' | 'rejected'; created_at: string };
export async function sahiplendirmeBasvurulariniOku(): Promise<SahiplendirmeBasvurusu[]> {
  const { data, error } = await istemci.from('adoption_applications').select('*').order('created_at', { ascending: false });
  if (error) throw error;
  return (data as SahiplendirmeBasvurusu[] | null) ?? [];
}

export async function sahiplendirmeBasvurusunuYanitla(id: string, durum: 'accepted' | 'rejected'): Promise<void> {
  const { data, error } = await istemci.from('adoption_applications').update({ status: durum }).eq('id', id).select('id');
  if (error) throw error;
  if (!data?.length) throw new Error('permission denied');
}

export const duyurulariOku = (klinik: string) =>
  tablo<Duyuru>('announcements', 'id, body, audience, status, recipient_count, created_at, delivery_kind, target_city, target_species, channels, media:announcement_media(storage_key,position)', klinik, 'created_at');

export const hizmetleriOku = (klinik: string) =>
  tablo<Hizmet>('clinic_capabilities', 'service_code, note, price_min, price_max', klinik);

export const saatleriOku = (klinik: string) =>
  tablo<CalismaSaati>('clinic_hours', 'weekday, is_closed, opens_at, closes_at', klinik);

export async function ozelCalismaGunleriniOku(klinik: string): Promise<OzelCalismaGunu[]> {
  const { data, error } = await istemci
    .from('clinic_special_hours')
    .select('id, special_date, label, is_closed, opens_at, closes_at')
    .eq('clinic_id', klinik)
    .order('special_date', { ascending: true })
    .limit(120);
  if (error) throw error;
  return (data as OzelCalismaGunu[] | null) ?? [];
}

export async function ozelCalismaGunuYaz(input: {
  klinik: string;
  tarih: string;
  aciklama: string;
  kapali: boolean;
  acilis: string | null;
  kapanis: string | null;
}): Promise<OzelCalismaGunu> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) throw new Error('Özel günü kaydetmek için yeniden giriş yapın.');

  const { data, error } = await istemci
    .from('clinic_special_hours')
    .upsert({
      clinic_id: input.klinik,
      special_date: input.tarih,
      label: input.aciklama.trim(),
      is_closed: input.kapali,
      opens_at: input.kapali ? null : input.acilis,
      closes_at: input.kapali ? null : input.kapanis,
      created_by: kullanici.user.id,
    }, { onConflict: 'clinic_id,special_date' })
    .select('id, special_date, label, is_closed, opens_at, closes_at')
    .single();
  if (error) throw error;
  return data as OzelCalismaGunu;
}

export async function ozelCalismaGunuSil(klinik: string, id: string): Promise<void> {
  const { data, error } = await istemci
    .from('clinic_special_hours')
    .delete()
    .eq('clinic_id', klinik)
    .eq('id', id)
    .select('id');
  if (error) throw error;
  if (!data?.length) throw new Error('Özel gün bulunamadı veya silme yetkiniz yok.');
}

export const hizmetAdlariniOku = () =>
  tablo<HizmetAdi>('service_catalog', 'code, name_tr', null);

/**
 * Klinigin kendi paylasimlari.
 *
 * ⚠️ `clinic_id` YOK: gonderi tablosu yazarla iliskili, klinikle degil. O yuzden
 * giren kullanicinin yazdiklari okunuyor. Klinik adina paylasim kavrami
 * uygulamada baska turlu isliyorsa burasi eksik kalir; ekranda bu acikca
 * yaziyor, sessizce "hic paylasim yok" denmiyor.
 */
export async function gonderileriOku(klinik: string): Promise<Gonderi[]> {
  const { data, error } = await istemci
    .from('posts')
    .select('id, body, status, like_count, comment_count, created_at, media:post_media(storage_key,position,media_type)')
    .eq('clinic_id', klinik)
    .order('created_at', { ascending: false })
    .limit(40);
  if (error) throw error;
  return (data as Gonderi[] | null) ?? [];
}

export async function gonderiYorumlariniOku(gonderi: string): Promise<GonderiYorumu[]> {
  const { data, error } = await istemci.from('post_comment_feed')
    .select('id,post_id,author_id,body,created_at,author_name,parent_id,reply_count,media_key')
    .eq('post_id', gonderi).order('created_at');
  if (error) throw error;
  return (data as GonderiYorumu[] | null) ?? [];
}

export async function gonderiYorumunaYanitYaz(gonderi: string, ustYorum: string, metin: string): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  if (!kullanici.user) throw new Error('Yanıtlamak için yeniden giriş yapın.');
  const { error } = await istemci.from('post_comments').insert({
    post_id: gonderi, author_id: kullanici.user.id, parent_id: ustYorum, body: metin.trim(),
  });
  if (error) throw error;
}

/* ── DUYURU, BILDIRIM, DEGERLENDIRME, CEVRIMDISI MUSTERI ────────────────────
 * ⚠️ Ahmet, 25.08.2026: *"sol tarafa duyuru ve bildirimler de ekleyelim
 * eksikmiş böyle eksikleri de ilave ekleyelim... proaktif olalım"*.
 * Hepsinin arkasinda gercek tablo var; menuye "olsun" diye eklenen bolum yok.
 */

export type Bildirim = {
  id: number;
  title: string | null;
  body: string | null;
  kind: string | null;
  read_at: string | null;
  created_at: string;
};

export type CevrimdisiMusteri = {
  id: string;
  full_name: string | null;
  phone: string | null;
  email: string | null;
  note: string | null;
  created_at: string;
};

/**
 * Giren kullanicinin bildirimleri.
 *
 * ⚠️ KLINIGIN DEGIL KISININ bildirimleri: tablo `user_id` uzerinden calisiyor
 * ve RLS yalniz kendi satirlarini gosteriyor. Olculdu: 25 satirin hepsi giren
 * kullaniciya ait, hicbiri baskasinin degil.
 */
export async function bildirimleriOku(): Promise<Bildirim[]> {
  const { data, error } = await istemci
    .from('notifications')
    .select('id, title, body, kind, read_at, created_at')
    .order('created_at', { ascending: false })
    .limit(60);
  if (error) throw error;
  return (data as Bildirim[] | null) ?? [];
}

/**
 * Okunmamis bildirim sayisi.
 *
 * ⚠️ ZIL ROZETI ARTIK UYDURMA DEGIL. Once ust cubuktaki zil yer tutucuydu,
 * cunku sayiyi verecek bir kaynak bulunamamisti. `notifications.read_at` tam
 * olarak bunu veriyor: dolu ise okunmus, bos ise okunmamis.
 *
 * ⚠️ `head: true` ile SATIRLAR CEKILMIYOR, yalniz sayi geliyor. Zil her sayfa
 * acilisinda soruluyor; altmis satiri her seferinde indirmek gereksiz.
 */
export async function okunmamisBildirimSayisi(): Promise<number> {
  const { count, error } = await istemci
    .from('notifications')
    .select('id', { count: 'exact', head: true })
    .is('read_at', null);
  if (error) throw error;
  return count ?? 0;
}

export async function cevrimdisiMusterileriOku(klinik: string): Promise<CevrimdisiMusteri[]> {
  const { data, error } = await istemci.from('clinic_offline_customers')
    .select('id,full_name,phone,email,note,created_at').eq('clinic_id', klinik)
    .is('archived_at', null).order('created_at', { ascending: false });
  if (error) throw error;
  return (data as CevrimdisiMusteri[] | null) ?? [];
}

export async function arsivdekiMusterileriOku(klinik: string): Promise<CevrimdisiMusteri[]> {
  const { data, error } = await istemci.from('clinic_offline_customers')
    .select('id,full_name,phone,email,note,created_at').eq('clinic_id', klinik)
    .not('archived_at', 'is', null).order('archived_at', { ascending: false });
  if (error) throw error;
  return (data as CevrimdisiMusteri[] | null) ?? [];
}

/* ═══════════════════════════════════════════════════════════════════════════
 * UYGULAMADAN BAGIMSIZ KAYIT (Ahmet, 25.08.2026: *"hasta kaydı felan yok
 * oluşturma kısmı uygulamadan bağımsız kayıt da yapabilmeliler çoğu zaten
 * uygulama kullanmayanlar olacak"*)
 *
 * ⚠️ BU KLINIGIN KENDI DEFTERI. `clinic_offline_customers` ve
 * `clinic_offline_pets`, uygulamada hesabi OLMAYAN musteriler ve hayvanlari
 * icin. Klinigin gunluk isi buradan yuruyor; uygulama kullanan musteri
 * istisna, kural degil.
 *
 * ⚠️ `clinic_pet_records.pet_id` **`clinic_offline_pets`e** bagli, `pets`e
 * degil. Yani saglik kaydi ancak defterdeki bir hayvana yazilabiliyor. Bu bir
 * eksiklik degil tasarim: klinigin tuttugu kayit, hayvan sahibinin uygulamadaki
 * profilinden ayri.
 *
 * ⚠️ Yetki RLS'te: `is_clinic_member(clinic_id)` hem `using` hem `with check`
 * tarafinda. Yani baska klinigin defterine yazilamiyor; istemcide ek kontrol
 * yok, olsaydi guvenlik sanilan ama olmayan bir katman olurdu.
 * ═══════════════════════════════════════════════════════════════════════════ */

export type DefterHastasi = {
  id: string;
  customer_id: string;
  name: string;
  species_code: string;
  sex: string | null;
  birth_date: string | null;
  note: string | null;
};

export type Tur = { code: string; name_tr: string };

/**
 * Hayvan turleri — SUNUCUDAN.
 *
 * ⚠️ Elde yazilmis sozluk EKSIKTI: `at`, `gelincik`, `papagan` ve `ciftlik
 * hayvani` yoktu. Tur listesi `species` tablosunda ve orasi tek dogru kaynak;
 * yeni bir tur eklendiginde panel kendiliginden ogreniyor.
 */
export const turleriOku = () => tablo<Tur>('species', 'code, name_tr', null);

export async function defterHastalariniOku(klinik: string): Promise<DefterHastasi[]> {
  const { data, error } = await istemci.from('clinic_offline_pets')
    .select('id,customer_id,name,species_code,sex,birth_date,note').eq('clinic_id', klinik)
    .is('archived_at', null).order('created_at', { ascending: false });
  if (error) throw error;
  return (data as DefterHastasi[] | null) ?? [];
}

export async function arsivdekiHastalariOku(klinik: string): Promise<DefterHastasi[]> {
  const { data, error } = await istemci.from('clinic_offline_pets')
    .select('id,customer_id,name,species_code,sex,birth_date,note').eq('clinic_id', klinik)
    .not('archived_at', 'is', null).order('archived_at', { ascending: false });
  if (error) throw error;
  return (data as DefterHastasi[] | null) ?? [];
}

export type DefterArsivEtkisi = {
  kind: 'customer' | 'pet'; id: string; pet_count: number; appointment_count: number;
  record_count: number; prescription_count: number; lab_request_count: number;
  dependency_count: number;
};
export async function defterArsivEtkisiniOku(tur: 'customer' | 'pet', id: string): Promise<DefterArsivEtkisi> {
  const { data, error } = await istemci.rpc('clinic_offline_archive_impact', { p_kind: tur, p_id: id });
  if (error) throw error;
  return data as DefterArsivEtkisi;
}
export async function defterKaydiniArsivle(etki: DefterArsivEtkisi): Promise<void> {
  const { error } = await istemci.rpc('archive_clinic_offline_record', {
    p_kind: etki.kind, p_id: etki.id, p_expected_pet_count: etki.pet_count,
    p_expected_dependency_count: etki.dependency_count,
  });
  if (error) throw error;
}
export async function defterKaydiniGeriAc(tur: 'customer' | 'pet', id: string): Promise<void> {
  const { error } = await istemci.rpc('restore_clinic_offline_record', { p_kind: tur, p_id: id });
  if (error) throw error;
}

/** Deftere musteri ekler. */
export async function defterMusterisiEkle(
  klinik: string,
  alanlar: { adSoyad: string; telefon?: string; eposta?: string; not?: string },
): Promise<string> {
  const { data: kullanici } = await istemci.auth.getUser();
  const { data, error } = await istemci
    .from('clinic_offline_customers')
    .insert({
      clinic_id: klinik,
      full_name: alanlar.adSoyad.trim(),
      phone: alanlar.telefon?.trim() || null,
      email: alanlar.eposta?.trim() || null,
      note: alanlar.not?.trim() || null,
      created_by: kullanici.user?.id ?? null,
    })
    .select('id')
    .single();
  if (error) throw error;
  return (data as { id: string }).id;
}

export async function defterMusterisiniGuncelle(
  id: string,
  alanlar: { adSoyad: string; telefon?: string; eposta?: string; not?: string },
): Promise<void> {
  const { data, error } = await istemci.from('clinic_offline_customers').update({
    full_name: alanlar.adSoyad.trim(),
    phone: alanlar.telefon?.trim() || null,
    email: alanlar.eposta?.trim() || null,
    note: alanlar.not?.trim() || null,
  }).eq('id', id).select('id');
  if (error) throw error;
  if (!data?.length) throw new Error('permission denied');
}

/**
 * Deftere hasta ekler.
 *
 * ⚠️ `clinic_id` DE yaziliyor, `customer_id` yetmiyor: tablo bilerek
 * denormalize (migration 0070). RLS her satirda musteriye zincirlenmek yerine
 * dogrudan klinige bakiyor; zincirli kontrol her sorguda ekstra birlesim demek.
 */
export async function defterHastasiEkle(
  klinik: string,
  musteri: string,
  alanlar: { ad: string; tur: string; cinsiyet?: string; dogum?: string; not?: string },
): Promise<string> {
  const { data, error } = await istemci
    .from('clinic_offline_pets')
    .insert({
      clinic_id: klinik,
      customer_id: musteri,
      name: alanlar.ad.trim(),
      species_code: alanlar.tur,
      sex: alanlar.cinsiyet || null,
      birth_date: alanlar.dogum || null,
      note: alanlar.not?.trim() || null,
    })
    .select('id')
    .single();
  if (error) throw error;
  return (data as { id: string }).id;
}

/** Deftere saglik kaydi ekler. */
export async function saglikKaydiEkle(
  klinik: string,
  hasta: string,
  alanlar: { tur: string; baslik: string; ayrinti?: string; tarih: string; sonraki?: string; kilo?: string },
): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  const { error } = await istemci.from('clinic_pet_records').insert({
    clinic_id: klinik,
    pet_id: hasta,
    kind: alanlar.tur,
    title: alanlar.baslik.trim(),
    detail: alanlar.ayrinti?.trim() || null,
    performed_at: alanlar.tarih,
    next_due_at: alanlar.sonraki || null,
    /* ⚠️ Bos dize `0` olmasin: kilo girilmemisse NULL, sifir DEGIL. */
    weight_kg: alanlar.kilo?.trim() ? Number(alanlar.kilo) : null,
    created_by: kullanici.user?.id ?? null,
  });
  if (error) throw error;
}

/**
 * DUYURU OLUSTURUR VE GONDERIR.
 *
 * ⚠️ IKI ADIM ve ayrilmasi zorunlu: once satir aciliyor, sonra
 * `send_announcement` gonderiyor. Gonderimde bes katmanli spam korumasi
 * calisiyor (migration 0029) ve `status` kolonuna istemcinin UPDATE yetkisi
 * YOK; yani "gonderildi" demenin tek yolu RPC.
 *
 * ⚠️ BASLIK ALANI YOK ve olamaz: `announcements` tablosunda baslik kolonu
 * bulunmuyor, baslik gonderim aninda klinigin adindan turetiliyor. Arayuze
 * baslik alani koymak, calismayan bir alan gostermek olurdu.
 *
 * ⚠️ `push` kanali YALNIZ `customers` kitlesinde acik (migration 0115 kisiti).
 * Takipcilere bildirim gondermek, izin vermemis kisiye bildirim atmak olurdu.
 */
export async function duyuruOlusturVeGonder(
  klinik: string,
  alanlar: {
    metin: string;
    kitle: 'customers' | 'followers' | 'both' | 'selected';
    pushGonder: boolean;
    teslim: 'announcement' | 'notification';
    sehir?: string;
    tur?: string;
    alicilar?: string[];
    gorseller?: string[];
  },
): Promise<number> {
  const { data: kullanici } = await istemci.auth.getUser();
  const pushOlur = alanlar.pushGonder && alanlar.kitle === 'customers';
  const tekilAlicilar = [...new Set(alanlar.alicilar ?? [])];
  if (alanlar.kitle === 'selected' && tekilAlicilar.length === 0) throw new Error('En az bir alıcı seçin.');

  const { data, error } = await istemci
    .from('announcements')
    .insert({
      clinic_id: klinik,
      body: alanlar.metin.trim(),
      audience: alanlar.kitle,
      target_city: alanlar.sehir?.trim() || null,
      target_species: alanlar.tur || null,
      channels: pushOlur ? ['inapp', 'push'] : ['inapp'],
      delivery_kind: alanlar.teslim,
      created_by: kullanici.user?.id ?? null,
    })
    .select('id')
    .single();
  if (error) {
    await guvenliGorselleriTemizle(alanlar.gorseller ?? []);
    throw error;
  }

  const duyuru = (data as { id: string }).id;
  if (alanlar.kitle === 'selected') {
    const { error: aliciHatasi } = await istemci.from('announcement_recipients').insert(
      tekilAlicilar.map((user_id) => ({ announcement_id: duyuru, user_id })),
    );
    if (aliciHatasi) {
      const { error: geriAlmaHatasi } = await istemci.from('announcements').delete().eq('id', duyuru);
      if (!geriAlmaHatasi) await guvenliGorselleriTemizle(alanlar.gorseller ?? []);
      throw aliciHatasi;
    }
  }
  if (alanlar.gorseller?.length) {
    const { error: medyaHatasi } = await istemci.from('announcement_media').insert(
      alanlar.gorseller.slice(0, 4).map((storage_key, position) => ({ announcement_id: duyuru, storage_key, position })),
    );
    if (medyaHatasi) {
      const { error: geriAlmaHatasi } = await istemci.from('announcements').delete().eq('id', duyuru);
      if (!geriAlmaHatasi) await guvenliGorselleriTemizle(alanlar.gorseller ?? []);
      throw medyaHatasi;
    }
  }

  const { data: sayi, error: gonderimHatasi } = await istemci.rpc('send_announcement', {
    p_announcement: duyuru,
  });
  if (gonderimHatasi) throw gonderimHatasi;
  return (sayi as number) ?? 0;
}

/**
 * Bildirimleri okundu isaretler.
 *
 * ⚠️ SUNUCU YALNIZ `read_at` KOLONUNU ACIYOR: `grant update (read_at) on
 * notifications` (migration 0028). Yani istemci bir bildirimin metnini ya da
 * sahibini degistiremiyor, sadece okundu diyebiliyor. Kolon duzeyinde
 * yetkilendirmenin ders niteliginde bir ornegi; satir politikasi da
 * `user_id = auth.uid()` diyor.
 *
 * ⚠️ Yalniz OKUNMAMIS satirlar guncelleniyor. Hepsini yazmak, eski
 * bildirimlerin okunma zamanini bugune cekerdi ve "ne zaman okudum" bilgisi
 * bozulurdu.
 */
export async function bildirimleriOkunduIsaretle(): Promise<void> {
  const { error } = await istemci
    .from('notifications')
    .update({ read_at: new Date().toISOString() })
    .is('read_at', null);
  if (error) throw error;
}

/* ═══════════════════════════════════════════════════════════════════════════
 * ILAN, GONDERI, MESAJ (Ahmet, 25.08.2026)
 * ═══════════════════════════════════════════════════════════════════════════ */

export type UlasilabilirKisi = { user_id: string; display_name: string; avatar_url: string | null; relation: string };

/**
 * Klinigin MESAJ ATABILECEGI kisiler.
 *
 * ⚠️ HERKESE MESAJ ATILAMIYOR ve bu bir kisitlama degil koruma: yalniz klinigin
 * TAKIPCISI ya da MUSTERISI olanlar listeleniyor. Rastgele kullanici aramak,
 * istenmeyen mesajin en kolay yolu olurdu; uygulamada da ayni sebeple kullanici
 * aramasi yok.
 */
export const ulasilabilirKisileriOku = (klinik: string) =>
  cagir<UlasilabilirKisi>('clinic_reachable_users', { p_clinic: klinik });

/**
 * Konusma acar ve ilk mesaji yazar.
 *
 * ⚠️ IKI ADIM: `open_direct_conversation` konusmayi aciyor (varsa mevcudu
 * donduruyor), sonra mesaj satiri ekleniyor. RPC'nin kendisi mesaj yazmiyor;
 * ayni kisiye ikinci kez yazarken yeni konusma acilmasin diye boyle.
 */
/**
 * Gonderi olusturur ve yayimlar.
 *
 * ⚠️ `status` ISTEMCIDEN AYARLANMIYOR: kolon `draft` varsayilaniyla aciliyor,
 * yayimlama yalniz `publish_post` RPC'siyle oluyor. Istemci `status`i
 * kendisi yazabilseydi moderasyon adimini atlayabilirdi.
 *
 * ⚠️ `clinic_id` yaziliyor (migration 0043): gonderi klinik adina cikiyor,
 * kisisel hesap adina degil.
 */
export async function gonderiPaylas(klinik: string, metin: string, herkeseAcik: boolean, gorseller: string[] = []): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  const { data, error } = await istemci
    .from('posts')
    .insert({
      author_id: kullanici.user?.id,
      clinic_id: klinik,
      body: metin.trim(),
      visibility: herkeseAcik ? 'public' : 'followers',
    })
    .select('id')
    .single();
  if (error) {
    await guvenliGorselleriTemizle(gorseller);
    throw error;
  }

  if (gorseller.length) {
    const { error: medyaHatasi } = await istemci.from('post_media').insert(
      gorseller.slice(0, 8).map((storage_key, position) => ({ post_id: data.id, storage_key, position, media_type: 'image' })),
    );
    if (medyaHatasi) {
      const { error: geriAlmaHatasi } = await istemci.from('posts').delete().eq('id', data.id);
      if (!geriAlmaHatasi) await guvenliGorselleriTemizle(gorseller);
      throw medyaHatasi;
    }
  }

  const { error: yayinHatasi } = await istemci.rpc('publish_post', { p_post: data.id });
  if (yayinHatasi) throw yayinHatasi;
}

/**
 * Sahiplendirme ilani acar.
 *
 * ⚠️ `status` YAZILMIYOR: varsayilan `pending` ve moderasyondan geciyor. Ilan
 * aninda yayina girseydi, hicbir denetimden gecmemis bir ilan herkese acik
 * olurdu.
 */
export async function ilanOlustur(alanlar: {
  baslik: string; aciklama: string; tur: string; cinsiyet: string; kosullar?: string; sehir?: string; ilce?: string; gorseller?: string[];
}): Promise<void> {
  const { data: kullanici } = await istemci.auth.getUser();
  const { data, error } = await istemci.from('adoption_listings').insert({
    created_by: kullanici.user?.id,
    title: alanlar.baslik.trim(),
    description: alanlar.aciklama.trim(),
    species_code: alanlar.tur,
    sex: alanlar.cinsiyet || 'unknown',
    conditions: alanlar.kosullar?.trim() || null,
    city: alanlar.sehir?.trim() || null,
    district: alanlar.ilce?.trim() || null,
  }).select('id').single();
  if (error) {
    await guvenliGorselleriTemizle(alanlar.gorseller ?? []);
    throw error;
  }
  if (alanlar.gorseller?.length) {
    const { error: fotografHatasi } = await istemci.from('adoption_photos').insert(
      alanlar.gorseller.slice(0, 8).map((storage_key, sort_order) => ({ listing_id: data.id, storage_key, sort_order })),
    );
    if (fotografHatasi) {
      const { error: geriAlmaHatasi } = await istemci.from('adoption_listings').delete().eq('id', data.id);
      if (!geriAlmaHatasi) await guvenliGorselleriTemizle(alanlar.gorseller ?? []);
      throw fotografHatasi;
    }
  }
}

/**
 * Randevuya klinik notu yazar / gunceller.
 *
 * ⚠️ DURUM DEGISTIRMEDEN not yazmanin yolu: `set_appointment_status` durumu
 * OLDUGU GIBI gonderiyor. Ayni duruma gecis makinede tanimli olmadigi icin
 * dogrudan cagrilamiyor; bu yuzden not `appointments` tablosuna yaziliyor.
 * Kolon yetkisi migration 0082'de veriliyor.
 *
 * ⚠️ Yalniz `clinic_note` yaziliyor. Randevunun saatini ya da sahibini
 * degistirmek ayri islerdir ve baska yollari var.
 */
export async function randevuNotuYaz(randevu: string, not: string): Promise<void> {
  const { data, error } = await istemci
    .from('appointments')
    .update({ clinic_note: not.trim() || null })
    .eq('id', randevu)
    .select('id');
  if (error) throw error;
  /* ⚠️ RLS satiri gizlerse PostgREST hata degil BOS SONUC doner; bunu basari
     saymak "kaydettim" deyip hicbir sey kaydetmemek olurdu. */
  if (!data || data.length === 0) throw new Error('permission denied');
}

/* ── DEFTER YONETIMI (Ahmet, 25.08.2026: *"gelir gider yönetim eksik oluştur
 * sil felan yok"*) ────────────────────────────────────────────────────────── */

export type DefterKaydi = {
  id: string;
  kind: string;
  amount: number;
  category: string;
  note: string | null;
  occurred_on: string;
  category_code: string | null;
  payment_method: string | null;
};

/** Tek tek kayitlar. Ozet kategoriye gore; silmek icin satirin kendisi gerekiyor. */
export async function defterKayitlariniOku(klinik: string, aralik?: { baslangic?: string; bitis?: string }): Promise<DefterKaydi[]> {
  let sorgu = istemci.from('clinic_transactions')
    .select('id, kind, amount, category, note, occurred_on, category_code, payment_method')
    .eq('clinic_id', klinik)
    .order('occurred_on', { ascending: false });
  if (aralik?.baslangic) sorgu = sorgu.gte('occurred_on', aralik.baslangic);
  if (aralik?.bitis) sorgu = sorgu.lte('occurred_on', aralik.bitis);
  const { data, error } = await sorgu.limit(500);
  if (error) throw error;
  return (data as DefterKaydi[] | null) ?? [];
}

export type DefterBoyutu = { code: string; name: string };
export async function defterBoyutlariniOku(tur: string): Promise<DefterBoyutu[]> {
  const { data, error } = await istemci.from('ledger_dimensions').select('code, name').eq('dimension_code', tur).order('sort_order');
  if (error) throw error;
  return (data as DefterBoyutu[] | null) ?? [];
}

export type DefterKategorisi = { code: string; group_name: string; name: string };
export async function defterKategorileriniOku(tur: 'income' | 'expense'): Promise<DefterKategorisi[]> {
  const { data, error } = await istemci.from('ledger_categories').select('code, group_name, name').eq('kind', tur).order('group_no').order('name');
  if (error) throw error;
  return (data as DefterKategorisi[] | null) ?? [];
}

/**
 * Deftere kayit ekler.
 *
 * ⚠️ TUTAR KURUSA CEVRILIYOR ve bu cevrim TEK YERDE. Sunucu `bigint` kurus
 * tutuyor: kayan noktali para toplaminda 0.1 + 0.2 = 0.30000000000000004 olur
 * ve gun sonu raporu tutmaz. Ekranda lira yaziliyor, veride kurus duruyor.
 *
 * ⚠️ `Math.round` sart: `19.99 * 100` JavaScript'te 1998.9999999999998 veriyor.
 * Yuvarlanmazsa `bigint` kolonu reddeder ya da bir kurus kaybolur.
 */
export async function defterKaydiEkle(
  klinik: string,
  alanlar: { tur: 'income' | 'expense'; tutarTL: string; kategori: string; kategoriKodu?: string | null; odemeYontemi?: string | null; tarih: string; not?: string },
): Promise<void> {
  const kurus = Math.round(Number(String(alanlar.tutarTL).replace(',', '.')) * 100);
  if (!Number.isFinite(kurus) || kurus <= 0) throw new Error('Tutar geçersiz.');

  const { data: kullanici } = await istemci.auth.getUser();
  const { error } = await istemci.from('clinic_transactions').insert({
    clinic_id: klinik,
    kind: alanlar.tur,
    amount: kurus,
    category: alanlar.kategori.trim(),
    category_code: alanlar.kategoriKodu ?? null,
    payment_method: alanlar.odemeYontemi ?? null,
    note: alanlar.not?.trim() || null,
    occurred_on: alanlar.tarih,
    created_by: kullanici.user?.id ?? null,
  });
  if (error) throw error;
}

/**
 * Defterden kayit siler.
 *
 * ⚠️ SILME BILEREK VAR (migration 0096): bu tibbi kayit degil muhasebe
 * taslagi, yanlis girilen tutar duzeltilebilmeli. Recete tam tersi — orada
 * silme yok, iptal var.
 */
export async function defterKaydiSil(kayit: string): Promise<void> {
  const { error } = await istemci.from('clinic_transactions').delete().eq('id', kayit);
  if (error) throw error;
}
