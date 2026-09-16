/**
 * TURKCE-GUVENLI ARAMA (blog arama kutusu, 16.09.2026)
 *
 * ⚠️ NEDEN GEREKLI. JavaScript'te `'I'.toLowerCase()` "i" verir ama Turkce'de
 * `I` ile `ı` AYRI harflerdir; kullanici ikisini de yazar. Duz `toLowerCase`
 * ile su aramalar SESSIZCE kacar:
 *
 *   "ısırık" ↛ "ISIRIK"      (ı ↔ I)
 *   "İdrar"  ↛ "idrar"
 *   "kopek"  ↛ "köpek"       (sapkasiz yazan kullanici)
 *
 * Bos sonuc donen bir arama kutusu, arama kutusu olmamasindan kotudur:
 * kullanici "bu konuda yazi yok" sonucunu cikarir.
 *
 * ⚠️ AYNI ESLEME BASKA YERLERDE DE VAR. UniConnectly web'inde `lib/trSearch.ts`,
 * Veterito veritabaninda `public.normalize_tr()`. Ucu ayrisirsa ayni sorgu uc
 * yerde uc farkli sonuc verir; degistiren hepsini degistirmeli.
 */

const KAYNAK = 'İIıŞşĞğÜüÖöÇç' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const HEDEF = 'iiissgguuoocc' + 'abcdefghijklmnopqrstuvwxyz';

const HARITA = new Map<string, string>();
for (let i = 0; i < KAYNAK.length; i++) HARITA.set(KAYNAK[i], HEDEF[i]);

/** Turkce harfleri ASCII kucuk harfe indirir. */
export function trNorm(metin: string): string {
  let cikti = '';
  for (const ch of metin) cikti += HARITA.get(ch) ?? ch;
  return cikti;
}

/** Unsuz yumusamasina ugrayan son harfler: k→ğ · p→b · t→d · ç→c */
const YUMUSAYANLAR = new Set(['k', 'p', 't', 'c']);

/**
 * Arama terimini kok haline indirir.
 *
 * Turkce'de iyelik eki son unsuzu yumusatiyor: "parazit" → "paraziti",
 * "kopek" → "kopegi". Kullanici yalin hali yaziyor, baslikta ekli hali
 * geciyor ve eslesme olmuyor. 6+ harfli ve yumusayan unsuzle biten terimde
 * son harf dusuruluyor.
 *
 * ⚠️ BEDELI VAR: "kontrol" → "kontro" olur ve baska kelimeler de eslesir.
 * Arama kutusunda fazladan ilgili sonuc, hic sonuctan iyidir.
 */
export function trArananKok(sorgu: string): string {
  const n = trNorm(sorgu.trim());
  if (n.length >= 6 && YUMUSAYANLAR.has(n[n.length - 1])) return n.slice(0, -1);
  return n;
}

/**
 * Sorgudaki HER kelime metinde geciyor mu?
 * Kelime sirasi onemsiz: "kedi kusma" ile "kusma kedi" ayni sonucu buluyor.
 */
export function trEslesiyor(metin: string, sorgu: string): boolean {
  const s = sorgu.trim();
  if (!s) return true;
  const hedef = trNorm(metin);
  return s.split(/\s+/).filter(Boolean).every((k) => hedef.includes(trArananKok(k)));
}
