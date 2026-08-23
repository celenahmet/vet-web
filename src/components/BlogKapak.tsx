import { BarChart3, Cat, Dog, HeartPulse, PawPrint, Users, Utensils } from 'lucide-react';

import type { BlogKategori } from '../data/blog';
import { kapakGorseli } from '../data/blog/gorsel';

/**
 * Yazi kapagi. Gorsel varsa gorseli, yoksa marka renginde kategori ikonunu gosterir.
 *
 * ⚠️ NEDEN YEDEK BLOK VAR: her yazinin kapagi hazir olmayabilir. Kapagi olmayan
 * yaziya BASKA bir yazinin afisini koymak, okuyucuya yanlis basligi gosterir; ilk
 * turda tam bu oldu. Yanlis gorsel yerine notr blok.
 */

const IKON: Record<BlogKategori, typeof Cat> = {
  'Kedi': Cat,
  'Köpek': Dog,
  'Beslenme': Utensils,
  'Sağlık': HeartPulse,
  'Klinik Yönetimi': BarChart3,
  'Pet Sahipleri': Users,
};

type Props = { slug: string; kategori: BlogKategori; alt: string; boyut?: number };

export default function BlogKapak({ slug, kategori, alt, boyut = 44 }: Props) {
  const kaynak = kapakGorseli(slug);
  if (kaynak) return <img src={kaynak} alt={alt} />;
  const Ikon = IKON[kategori] ?? PawPrint;
  return (
    <div className="kapak-yedek" role="img" aria-label={alt}>
      <Ikon size={boyut} />
    </div>
  );
}
