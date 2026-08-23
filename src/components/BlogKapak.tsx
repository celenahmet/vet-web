import { BarChart3, Cat, Dog, HeartPulse, PawPrint, Users, Utensils } from 'lucide-react';

import type { BlogKategori } from '../data/blog';
import { kapakGorseli } from '../data/blog/gorsel';

/**
 * Yazi kapagi. Gorsel varsa gorseli, yoksa marka renginde kategori ikonunu gosterir.
 *
 * ⚠️ NEDEN YEDEK BLOK VAR: depodaki blog-1..4 gorselleri BASKA YAZILARIN afisleri ve
 * basliklari gorselin icine basili. Birini alakasiz bir yaziya kapak yapmak, okuyucuya
 * yanlis basligi gosteriyor. Kapagi olmayan yaziya yanlis gorsel koymaktansa notr bir
 * blok gostermek dogru.
 */

const IKON: Record<BlogKategori, typeof Cat> = {
  'Kedi': Cat,
  'Köpek': Dog,
  'Beslenme': Utensils,
  'Sağlık': HeartPulse,
  'Klinik Yönetimi': BarChart3,
  'Pet Sahipleri': Users,
};

type Props = { ad?: string; kategori: BlogKategori; alt: string; boyut?: number };

export default function BlogKapak({ ad, kategori, alt, boyut = 44 }: Props) {
  const kaynak = kapakGorseli(ad);
  if (kaynak) return <img src={kaynak} alt={alt} />;
  const Ikon = IKON[kategori] ?? PawPrint;
  return (
    <div className="kapak-yedek" role="img" aria-label={alt}>
      <Ikon size={boyut} />
    </div>
  );
}
