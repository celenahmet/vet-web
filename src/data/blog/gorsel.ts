/**
 * Kapak gorselleri: yazi verisinde dosya ADI duruyor, import burada yapiliyor.
 * Boylece yazi dosyalari saf veri kaliyor ve derleme aninda statik HTML uretmek
 * kolaylasiyor.
 */
import blog1 from '../../assets/blog-1.jpg';
import blog2 from '../../assets/blog-2.jpg';
import blog3 from '../../assets/blog-3.jpg';
import blog4 from '../../assets/blog-4.jpg';

const HARITA: Record<string, string> = {
  'blog-1.jpg': blog1,
  'blog-2.jpg': blog2,
  'blog-3.jpg': blog3,
  'blog-4.jpg': blog4,
};

/** Eslesme yoksa null doner; cagiran taraf marka renginde yedek blok gosterir. */
export function kapakGorseli(ad: string | undefined): string | null {
  if (!ad) return null;
  return HARITA[ad] ?? null;
}
