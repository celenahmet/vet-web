/**
 * Klinik vitrini verisi — `veterito.com/@kullaniciadi`
 *
 * ⚠️ YENİ BAĞIMLILIK EKLENMEDİ. `@supabase/supabase-js` bu repoda yok ve tek bir
 * okuma çağrısı için paket eklemek gereksiz; PostgREST düz `fetch` ile çağrılabiliyor.
 *
 * ⚠️ ANON ANAHTAR TARAYICIYA ÇIKIYOR VE BU BEKLENEN. Koruma anahtarda değil, satır
 * güvenliğinde (RLS): `clinic_public_page` yalnız YAYINDAKİ ve DOĞRULANMIŞ kliniği
 * döndürüyor. Yayında olmayan bir kullanıcı adı sorulursa boş dönüyor — "var ama
 * kapalı" bilgisi bile sızmıyor.
 *
 * Sözleşme: ../../docs/WEB_SAYFA_SOZLESMESI.md (uygulama reposunda)
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export type ClinicPage = {
  clinic_id: string;
  name: string;
  tagline: string | null;
  about: string | null;
  city: string | null;
  district: string | null;
  address: string | null;
  directions: string | null;
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
  rating_avg: number | null;
  rating_count: number | null;
  is_indexable: boolean;
};

export type StaffMember = {
  user_id: string;
  display_name: string;
  avatar_url: string | null;
  role: string;
  title: string | null;
  education: string | null;
  bio: string | null;
};

async function rpc<T>(fn: string, body: Record<string, unknown>): Promise<T[]> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    // ⚠️ SESSİZ BOŞ DÖNMÜYORUZ. Env eksikse sayfa "klinik yok" der ve kimse sebebini
    // anlamaz; konsola açık bir satır bırakmak saatler kazandırır.
    console.error('[clinicPage] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY tanımlı değil.');
    return [];
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    console.error(`[clinicPage] ${fn} başarısız: HTTP ${res.status}`);
    return [];
  }
  return (await res.json()) as T[];
}

/** Boş dizi → sayfa yok (404). */
export async function fetchClinicPage(username: string): Promise<ClinicPage | null> {
  const rows = await rpc<ClinicPage>('clinic_public_page', { p_username: username });
  return rows[0] ?? null;
}

export async function fetchClinicStaff(clinicId: string): Promise<StaffMember[]> {
  return rpc<StaffMember>('clinic_public_staff', { p_clinic: clinicId });
}

// ---------------------------------------------------------------------------
// Bağlantı kalıpları
// ---------------------------------------------------------------------------

/**
 * ⚠️ VERİTABANI HESAP ADINI TUTUYOR, TAM ADRESİ DEĞİL. `@` ve yapıştırılmış tam
 * adresler sunucuda soyuluyor; adresi burada kuruyoruz. Tam adres saklansaydı klinik
 * yanlışlıkla bir gönderi bağlantısı yapıştırır ve profil yerine oraya gidilirdi.
 */
export const socialUrl = {
  instagram: (v: string) => `https://instagram.com/${v}`,
  facebook: (v: string) => `https://facebook.com/${v}`,
  x_handle: (v: string) => `https://x.com/${v}`,
  tiktok: (v: string) => `https://tiktok.com/@${v}`,
  youtube: (v: string) => `https://youtube.com/@${v}`,
  linkedin: (v: string) => `https://linkedin.com/company/${v}`,
} as const;

export const socialLabel: Record<keyof typeof socialUrl, string> = {
  instagram: 'Instagram',
  facebook: 'Facebook',
  x_handle: 'X',
  tiktok: 'TikTok',
  youtube: 'YouTube',
  linkedin: 'LinkedIn',
};

/** `905321112233` → `+90 532 111 22 33`. Numara EKRANDA da okunabilir olmalı. */
export function formatPhone(raw: string): string {
  const d = raw.replace(/[^0-9]/g, '');
  if (d.length === 12 && d.startsWith('90')) {
    return `+90 ${d.slice(2, 5)} ${d.slice(5, 8)} ${d.slice(8, 10)} ${d.slice(10)}`;
  }
  if (d.length === 11 && d.startsWith('0')) {
    return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7, 9)} ${d.slice(9)}`;
  }
  return raw;
}

/** Harita bağlantısı — adres metninden. Koordinat TUTMUYORUZ (ürün briefi §8.1). */
export function mapsUrl(page: ClinicPage): string {
  const parts = [page.name, page.address, page.district, page.city].filter(Boolean);
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(parts.join(' '))}`;
}
