/**
 * KAPAK GORSELLERI
 *
 * ⚠️ DOSYA ADI = SLUG. `src/assets/blog/<slug>.webp`. Bu kural sayesinde yazi
 * verisinde kapak alani tutmaya gerek kalmiyor: 100 yazida hangi gorselin hangi
 * yaziya ait oldugu elle eslestirilirse er ya da gec kayar. Nitekim ilk turda
 * kaydi: alakasiz bir afis kapak olarak gorunuyordu.
 *
 * ⚠️ `import.meta.glob` KULLANILIYOR, tek tek import degil. 100 gorsel icin 100
 * satir import yazmak, her yeni yazida bir satir daha unutulacak demek.
 *
 * Gorseller kaynak PNG'lerden uretiliyor: 1200 px genislik, WEBP kalite 82.
 * Olculdu: 9.6 MB'lik alti kapak 402 KB'ye indi, yaklasik 25 kat.
 *
 * ⚠️ UC OLCU VAR (24.08.2026): `<slug>-400.webp`, `<slug>-800.webp` ve asil
 * 1200'luk. Sebep olculdu: Lighthouse "properly size images" basliginda yalniz
 * yazi sayfasinda 325 KiB fazlalik gosteriyordu; 1200 px'lik gorsel mobilde
 * 380 px'lik yere, kart izgarasinda ~270 px'lik yere ciziliyordu. Dar surumler
 * `npm run kapaklar` ile uretiliyor.
 */
const GORSELLER = import.meta.glob('../../assets/blog/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export type KapakKaynagi = {
  /** 1200 px genislikteki asil dosya. `src` olarak bu veriliyor. */
  asil: string;
  /** `srcset` dizesi; tarayici olcuye gore secer. */
  srcset: string;
  en: number;
  boy: number;
};

/** Kaynak afislerin orani sabit: 1200x675 (16:9). width/height bundan geliyor. */
const ASIL_EN = 1200;
const ASIL_BOY = 675;

const HARITA: Record<string, KapakKaynagi> = {};
const DAR: Record<string, Record<number, string>> = {};

for (const [yol, kaynak] of Object.entries(GORSELLER)) {
  const ad = yol.split('/').pop()?.replace(/\.webp$/, '');
  if (!ad) continue;
  const darEslesme = ad.match(/^(.+)-(\d+)$/);
  if (darEslesme) {
    const [, slug, en] = darEslesme;
    (DAR[slug] ??= {})[Number(en)] = kaynak;
  } else {
    HARITA[ad] = { asil: kaynak, srcset: '', en: ASIL_EN, boy: ASIL_BOY };
  }
}

// srcset ikinci gecişte kuruluyor: dar surumler asil dosyadan once de gelebilir.
for (const [slug, kayit] of Object.entries(HARITA)) {
  const parcalar = Object.entries(DAR[slug] ?? {})
    .sort((a, b) => Number(a[0]) - Number(b[0]))
    .map(([en, kaynak]) => `${kaynak} ${en}w`);
  parcalar.push(`${kayit.asil} ${ASIL_EN}w`);
  kayit.srcset = parcalar.join(', ');
}

/** Slug'a karsilik gelen kapak. Yoksa null doner, cagiran yedek blok gosterir. */
export function kapakGorseli(slug: string | undefined): KapakKaynagi | null {
  if (!slug) return null;
  return HARITA[slug] ?? null;
}

/** Kac yazinin kapagi var: denetim ve uyari icin. */
export function kapakSayisi(): number {
  return Object.keys(HARITA).length;
}
