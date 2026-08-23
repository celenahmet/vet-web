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
 */
const GORSELLER = import.meta.glob('../../assets/blog/*.webp', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const HARITA: Record<string, string> = {};
for (const [yol, kaynak] of Object.entries(GORSELLER)) {
  const ad = yol.split('/').pop()?.replace(/\.webp$/, '');
  if (ad) HARITA[ad] = kaynak;
}

/** Slug'a karsilik gelen kapak. Yoksa null doner, cagiran yedek blok gosterir. */
export function kapakGorseli(slug: string | undefined): string | null {
  if (!slug) return null;
  return HARITA[slug] ?? null;
}

/** Kac yazinin kapagi var: denetim ve uyari icin. */
export function kapakSayisi(): number {
  return Object.keys(HARITA).length;
}
