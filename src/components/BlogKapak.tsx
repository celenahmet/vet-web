import { BarChart3, Cat, Dog, HeartPulse, PawPrint, Users, Utensils } from 'lucide-react';

import type { BlogKategori } from '../data/blog';
import { kapakGorseli } from '../data/blog/gorsel';

/**
 * Yazi kapagi. Gorsel varsa gorseli, yoksa marka renginde kategori ikonunu gosterir.
 *
 * ⚠️ NEDEN YEDEK BLOK VAR: her yazinin kapagi hazir olmayabilir. Kapagi olmayan
 * yaziya BASKA bir yazinin afisini koymak, okuyucuya yanlis basligi gosterir; ilk
 * turda tam bu oldu. Yanlis gorsel yerine notr blok.
 *
 * ⚠️ `sizes` DOGRU OLMAK ZORUNDA (24.08.2026). `srcset` tarayiciya hangi
 * dosyalarin VAR oldugunu soyluyor; hangisini secece?ini `sizes` belirliyor.
 * Yanlis `sizes`, srcset'i işe yaramaz hale getirir: tarayici en buyugu indirir
 * ve hicbir sey kazanilmaz. O yuzden her kullanim yeri kendi olcusunu bildiriyor.
 */

const IKON: Record<BlogKategori, typeof Cat> = {
  'Kedi': Cat,
  'Köpek': Dog,
  'Beslenme': Utensils,
  'Sağlık': HeartPulse,
  'Klinik Yönetimi': BarChart3,
  'Pet Sahipleri': Users,
};

/**
 * Kullanim yerine gore `sizes`. Degerler tasarimdan olculdu:
 *   yazi   — yazi sutunu 1440'ta 784 px, 1080 altinda tek sutun
 *   kart   — dort sutunluk izgarada ~270 px, 1180 altinda iki, 700 altinda tek
 *   kucuk  — kenar cubugu ve ilgili yazi kucuk gorselleri
 */
const OLCULER = {
  yazi: '(max-width: 700px) 100vw, (max-width: 1080px) 780px, 784px',
  kart: '(max-width: 700px) 100vw, (max-width: 1180px) 46vw, 270px',
  kucuk: '96px',
} as const;

type Props = {
  slug: string;
  kategori: BlogKategori;
  alt: string;
  /** Yedek blok icin ikon boyutu. */
  boyut?: number;
  olcu?: keyof typeof OLCULER;
  /**
   * Sayfanin en buyuk gorseli mi? Yalniz yazi kapagi icin true olmali.
   * ⚠️ Birden fazla gorseli "oncelikli" isaretlemek onceligi anlamsizlastirir.
   */
  oncelikli?: boolean;
};

export default function BlogKapak({
  slug, kategori, alt, boyut = 44, olcu = 'kart', oncelikli = false,
}: Props) {
  const kaynak = kapakGorseli(slug);
  if (kaynak) {
    return (
      <img
        src={kaynak.asil}
        srcSet={kaynak.srcset}
        sizes={OLCULER[olcu]}
        /* ⚠️ width/height gercek olculer. Yer ayrilmazsa gorsel inince sayfa
           zipliyor; Lighthouse bunu CLS olarak olcuyor (yazi sayfasinda 0.049). */
        width={kaynak.en}
        height={kaynak.boy}
        alt={alt}
        loading={oncelikli ? 'eager' : 'lazy'}
        decoding={oncelikli ? 'sync' : 'async'}
        fetchPriority={oncelikli ? 'high' : undefined}
      />
    );
  }
  const Ikon = IKON[kategori] ?? PawPrint;
  return (
    <div className="kapak-yedek" role="img" aria-label={alt}>
      <Ikon size={boyut} />
    </div>
  );
}
