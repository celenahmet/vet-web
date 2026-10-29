/**
 * BLOG TEPKILERI: "Faydali oldu mu?" ve emoji ifadeleri (29.10.2026).
 *
 * Sunucu tarafi `veteriner/supabase/migrations/0346_blog_tepkiler.sql`:
 * yalniz (slug, tur) basina sayac; IP, cerez, oturum yok.
 *
 * ⚠️ IKI EKSEN (UniConnectly mig 537 ile ayni mantik): 'faydali'/'faydasiz'
 * bir eksen, emoji ifadesi ayri eksen. Okuyucu ikisini birden birakabilir.
 *
 * ⚠️ TEKRAR OY YEREL BAYRAKLA ENGELLENIYOR. Sunucu kimin oy verdigini bilmiyor,
 * bilmesi kimlik tutmayi gerektirirdi. Bayrak yalniz bu tarayicida, yalniz
 * okuyucunun kendi rahatligi icin; silinirse ikinci oy sayilir. Bu bilincli
 * bir bedel: sayi "kac tiklama" demek, "kac kisi" degil.
 *
 * ⚠️ SESSIZCE BASARISIZ OLUR. Sunucu fonksiyonu yoksa ya da ag dusukse okuma
 * null doner ve bilesen tepki bolumunu HIC GOSTERMEZ. Calismayan bir dugme
 * gostermek, hic gostermemekten kotu.
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

// 6 ifade (30.10, mig 0347): harika ve zorlandim yeni; digerlerinin sayaclari korunuyor.
export type TepkiTuru = 'faydali' | 'faydasiz' | 'sevdim' | 'harika' | 'ogrendim' | 'sasirdim' | 'dusundurdu' | 'zorlandim';
export type TepkiEkseni = 'faydali' | 'ifade';
export type TepkiSecimi = Partial<Record<TepkiEkseni, TepkiTuru>>;

async function rpc<T>(fn: string, govde: unknown): Promise<T | null> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(govde),
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** Yazinin tepki sayilarini okur. Sunucu hazir degilse null. */
export async function tepkileriOku(slug: string): Promise<Partial<Record<TepkiTuru, number>> | null> {
  const satirlar = await rpc<{ tur: TepkiTuru; sayi: number | string }[]>('blog_tepkileri', { p_slug: slug });
  if (!Array.isArray(satirlar)) return null;
  const sonuc: Partial<Record<TepkiTuru, number>> = {};
  for (const s of satirlar) sonuc[s.tur] = Number(s.sayi);
  return sonuc;
}

/** Bir tepki ekler, yeni sayiyi doner. Basarisizsa null. */
export function tepkiEkle(slug: string, tur: TepkiTuru) {
  return rpc<number>('blog_tepki_ekle', { p_slug: slug, p_tur: tur });
}

const anahtar = (slug: string) => `veterito-blog-tepki:${slug}`;

/** Bu tarayicida daha once birakilan tepki. Depolama kapaliysa bos. */
export function yerelSecim(slug: string): TepkiSecimi {
  try {
    const ham = window.localStorage.getItem(anahtar(slug));
    return ham ? (JSON.parse(ham) as TepkiSecimi) : {};
  } catch {
    return {};
  }
}

export function yerelSecimiKaydet(slug: string, secim: TepkiSecimi) {
  try {
    window.localStorage.setItem(anahtar(slug), JSON.stringify(secim));
  } catch {
    /* Gizli pencere ya da kapali depolama: oy yine sayildi, yalniz hatirlanmaz. */
  }
}
