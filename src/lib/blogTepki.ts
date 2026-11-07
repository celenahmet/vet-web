/**
 * BLOG TEPKILERI: "Faydali oldu mu?" ve emoji ifadeleri (29.10.2026).
 *
 * Sunucu tarafi `veteriner/supabase/migrations/0348_blog_tepkiler.sql (+ 0349 alti ifade)`:
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
 * GERI CEKME (07.11.2026, veteriner mig 0356, UniConnectly ile ayni; Ahmet: "geri
 * cekmeleri bir dusunelim"): basili dugmeye tekrar basmak oyu geri alir, ayni
 * eksendeki obur dugme degistirir (bote.web.tr gibi). Her oya sunucu tek
 * kullanimlik bir FIS verir; geri cekme yalniz o fisle, 30 gun. Sunucu yalniz
 * fisin ozetini tutar, kisisel veri yok. Fissiz oy (bu surumden onceki oy,
 * sunucu tavani, suresi dolan fis) eskisi gibi kilitli.
 * Fonksiyon henuz yoksa (PostgREST 404) yeni oy eski blog_tepki_ekle'ye duser,
 * fis verilmez; geri cekme basarisiz sayilir (null).
 *
 * ⚠️ SESSIZCE BASARISIZ OLUR. Sunucu fonksiyonu yoksa ya da ag dusukse okuma
 * null doner ve bilesen tepki bolumunu HIC GOSTERMEZ. Calismayan bir dugme
 * gostermek, hic gostermemekten kotu.
 */
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

// 6 ifade (30.10, mig 0349): harika ve zorlandim yeni; digerlerinin sayaclari korunuyor.
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
export type TepkiSayilari = Partial<Record<TepkiTuru, number>>;
export type TepkiFisi = { f: string; t: number };
export type TepkiFisleri = Partial<Record<TepkiEkseni, TepkiFisi>>;
export type TepkiSonucu = { fis: string | null; geriAlindi: boolean; sayilar: TepkiSayilari };

const TURLER = new Set<string>(['faydali', 'faydasiz', 'sevdim', 'harika', 'ogrendim', 'sasirdim', 'dusundurdu', 'zorlandim']);
const FIS_BICIMI = /^[0-9a-f]{64}$/;
/** Sunucunun 30 gunluk penceresinden bir saat once kapanir: sinirda bosa istek gitmez. */
const FIS_OMRU_MS = 30 * 24 * 60 * 60 * 1000 - 60 * 60 * 1000;

export function fisGecerli(fis: TepkiFisi | undefined, simdi = Date.now()): fis is TepkiFisi {
  return Boolean(fis && FIS_BICIMI.test(fis.f) && Number.isFinite(fis.t) && simdi - fis.t < FIS_OMRU_MS && fis.t <= simdi + 60_000);
}

async function rpcHam(fn: string, govde: unknown): Promise<{ status: number; veri: unknown } | null> {
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
      cache: 'no-store',
    });
    return { status: res.status, veri: res.ok ? await res.json() : null };
  } catch {
    return null;
  }
}

/** tur null = geri cek. eskiFis o eksendeki oyun fisi (yoksa null). Basarisizsa null. */
export async function tepkiSec(slug: string, tur: TepkiTuru | null, eskiFis: string | null): Promise<TepkiSonucu | null> {
  const r = await rpcHam('blog_tepki_sec', { p_slug: slug, p_tur: tur, p_eski_fis: eskiFis });
  if (!r) return null;
  if (r.status === 404 && tur) {
    const n = Number(await rpc<number>('blog_tepki_ekle', { p_slug: slug, p_tur: tur }));
    return Number.isFinite(n) && n >= 0 ? { fis: null, geriAlindi: false, sayilar: { [tur]: n } } : null;
  }
  if (r.status !== 200 || !r.veri || typeof r.veri !== 'object') return null;
  const v = r.veri as { fis?: unknown; geri_alindi?: unknown; sayilar?: unknown };
  // Yanit da suzuluyor: fis bicimi, yalniz bilinen turler, yalniz sayi.
  const sayilar: TepkiSayilari = {};
  if (v.sayilar && typeof v.sayilar === 'object') {
    for (const [t, deger] of Object.entries(v.sayilar as Record<string, unknown>)) {
      const n = Number(deger);
      if (TURLER.has(t) && Number.isFinite(n) && n >= 0) sayilar[t as TepkiTuru] = n;
    }
  }
  const fis = typeof v.fis === 'string' && FIS_BICIMI.test(v.fis) ? v.fis : null;
  return { fis, geriAlindi: v.geri_alindi === true, sayilar };
}

const anahtar = (slug: string) => `veterito-blog-tepki:${slug}`;
const EKSENLER: TepkiEkseni[] = ['faydali', 'ifade'];

/** Bu tarayicida daha once birakilan tepki ve fisi. Eski bicimle ({faydali, ifade}) uyumlu. */
export function yerelKayit(slug: string): { secim: TepkiSecimi; fisler: TepkiFisleri } {
  const secim: TepkiSecimi = {};
  const fisler: TepkiFisleri = {};
  try {
    const ham = window.localStorage.getItem(anahtar(slug));
    const veri = ham ? (JSON.parse(ham) as Record<string, unknown>) : null;
    if (!veri || typeof veri !== 'object') return { secim, fisler };
    const kayitFisleri = (veri.fisler && typeof veri.fisler === 'object' ? veri.fisler : {}) as Record<string, unknown>;
    for (const e of EKSENLER) {
      if (typeof veri[e] === 'string') secim[e] = veri[e] as TepkiTuru;
      const f = kayitFisleri[e] as TepkiFisi | undefined;
      if (secim[e] && f && typeof f.f === 'string' && typeof f.t === 'number') fisler[e] = { f: f.f, t: f.t };
    }
  } catch {
    /* Okunamayan kayit: bos baslar. */
  }
  return { secim, fisler };
}

export function yerelKayitYaz(slug: string, secim: TepkiSecimi, fisler: TepkiFisleri) {
  try {
    if (!secim.faydali && !secim.ifade) window.localStorage.removeItem(anahtar(slug));
    else window.localStorage.setItem(anahtar(slug), JSON.stringify({ ...secim, fisler }));
  } catch {
    /* Gizli pencere ya da kapali depolama: oy yine sayildi, yalniz hatirlanmaz. */
  }
}
