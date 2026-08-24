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

async function cagir<T>(ad: string, parametre: Record<string, unknown>): Promise<T[]> {
  const { data, error } = await istemci.rpc(ad, parametre);
  if (error) throw error;
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
  role: string;
  created_at: string;
  is_me: boolean;
  title: string | null;
  education: string | null;
  is_public: boolean;
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

/** Klinik web sayfasinin ayarlari. `clinics` tablosundan, RLS altinda. */
export type KlinikSayfasi = {
  username: string | null;
  is_published: boolean;
  is_indexable: boolean;
  is_verified: boolean;
  page_tagline: string | null;
  about: string | null;
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
export const defterOzetiOku = (klinik: string) => cagir<DefterOzeti>('clinic_ledger_summary', { p_clinic: klinik });
export const defterKalemleriOku = (klinik: string) => cagir<DefterKalemi>('clinic_ledger_by_category', { p_clinic: klinik });

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
    .select('username, is_published, is_indexable, is_verified, page_tagline, about, logo_key, cover_key, view_count, rating_avg, rating_count')
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
