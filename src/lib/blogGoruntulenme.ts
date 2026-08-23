/**
 * BLOG GORUNTULENME SAYACI
 *
 * ⚠️ PAKET EKLENMIYOR. `clinicPage.ts` ile ayni desen: PostgREST duz `fetch` ile
 * cagriliyor, supabase-js paketi gereksiz yuk olurdu.
 *
 * ⚠️ SESSIZCE BASARISIZ OLUR. Sayac calismiyorsa yazi yine acilir. Bir sayi
 * yuzunden okuyucunun sayfasini bozmak, sayinin degerinden buyuk bir bedeldir.
 *
 * ⚠️ KISISEL VERI YOK. IP, cerez, oturum tutulmuyor; sunucuda yalnizca slug basina
 * bir tam sayi var. Sonuc olarak sayi "kac kez acildi"yi gosteriyor, "kac kisi
 * okudu"yu degil: ayni kisi yenilerse iki sayilir. Bunu engellemek kimlik tutmayi
 * gerektirirdi ve veri minimizasyonuna aykiri olurdu.
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

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

/** Sayaci bir artirir ve yeni degeri doner. Basarisizsa null. */
export function goruntulenmeArtir(slug: string) {
  return rpc<number>('blog_view_increment', { p_slug: slug });
}

/** Birden fazla yazinin sayisini artirmadan okur (liste sayfasi icin). */
export function goruntulenmeOku(slugler: string[]) {
  return rpc<{ slug: string; goruntulenme: number }[]>('blog_views_read', { p_slugs: slugler });
}

/** 1240 -> "1,2 B" gibi kisaltir; uzun sayilar kunyeyi bozuyor. */
export function sayiyiKisalt(n: number): string {
  if (n < 1000) return String(n);
  if (n < 1_000_000) return `${(n / 1000).toFixed(1).replace('.', ',')} B`;
  return `${(n / 1_000_000).toFixed(1).replace('.', ',')} M`;
}
