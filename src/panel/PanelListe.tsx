import { useEffect, useState, type ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

/**
 * ORTAK LISTE BOLUMU
 *
 * ⚠️ NEDEN VAR: referans menudeki bolumlerin cogu ayni iskeleti tasiyor —
 * baslik, aciklama, yukleniyor, hata, bos durum, satirlar. Her biri icin ayri
 * bir bilesen yazmak, ayni hatanin alti kopyasini uretirdi; nitekim ilk uc
 * bolumde "bos liste" mesaji uc ayri yerde yaziliydi.
 *
 * ⚠️ Bos durum metni ZORUNLU parametre. Varsayilan bir "kayit yok" birakilsaydi
 * her bolum onu kullanir ve okuyucu neden bos oldugunu ogrenemezdi.
 */
export default function PanelListe<T>({
  baslik, aciklama, yukle, bosBaslik, bosAciklama, satir, anahtar, eylem, altNot,
}: {
  baslik: string;
  aciklama: string;
  yukle: () => Promise<T[]>;
  bosBaslik: string;
  bosAciklama: string;
  satir: (kayit: T) => ReactNode;
  anahtar: (kayit: T) => string;
  eylem?: ReactNode;
  altNot?: { ikon: LucideIcon; metin: string };
}) {
  const [liste, setListe] = useState<T[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    let iptal = false;
    setListe(null); setHata(null);
    yukle()
      .then((d) => { if (!iptal) setListe(d); })
      .catch((e: { message?: string }) => { if (!iptal) { setListe([]); setHata(e?.message ?? ''); } });
    return () => { iptal = true; };
    // yukle her render'da yeni bir islev olabilir; bagimliliga koymak sonsuz
    // donguye yol acar. Bolum degisimi zaten bileseni yeniden olusturuyor.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const AltIkon = altNot?.ikon;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>{baslik}</h2>
          <p className="pnl-aciklama">{aciklama}</p>
        </div>
        {eylem}
      </header>

      {liste === null ? <Yukleniyor /> : null}
      {hata ? <Hata mesaj={hata} /> : null}

      {liste !== null && !hata ? (
        liste.length === 0 ? (
          <Bos baslik={bosBaslik} aciklama={bosAciklama} />
        ) : (
          <ul className="pnl-kisi-listesi">
            {liste.map((k) => <li key={anahtar(k)} className="pnl-kisi">{satir(k)}</li>)}
          </ul>
        )
      ) : null}

      {altNot && AltIkon ? (
        <p className="pnl-dipnot"><AltIkon size={14} aria-hidden="true" />{altNot.metin}</p>
      ) : null}
    </section>
  );
}
