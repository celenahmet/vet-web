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
  baslik, aciklama, yukle, bosBaslik, bosAciklama, satir, anahtar, eylem, altNot, tetik,
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
  /**
   * Listeyi yeniden yukletmek icin sayac.
   *
   * ⚠️ 27.08.2026'da eklendi: bir satir silinebilir olunca listenin kendini
   * tazelemesi gerekti. Cagiran tarafta yerel olarak satiri gizlemek daha
   * ucuzdu ama YANLIS olurdu: silme sunucuda duserse ekran, olmayan bir
   * basariyi gostermeye devam ederdi. Sayaci artirmak listeyi sunucudan
   * yeniden okutuyor, yani ekranda hep GERCEK duruyor.
   */
  tetik?: number;
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
    // `tetik` ise bilerek bagimlilikta: cagiran taraf artirdiginda yeniden okunur.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tetik]);

  const AltIkon = altNot?.ikon;

  return (
    /* ⚠️ `aria-label`: gorunur baslik ust cubuga tasindi, bolumun kendisi
       isimsiz kalmasin diye ad burada duruyor. */
    <section className="pnl-bolum" aria-label={baslik}>
      <header className="pnl-bolum-basi">
        {/*
          ⚠️ BOLUM BASLIGI BURADA YOK, UST CUBUKTA. Once ikisi de yaziyordu ve
          ekranda ayni kelime iki kez goruluyordu ("Raporlar / Raporlar").
          Ust cubuk yapiskan, yani sayfa kaydiginca da gorunur duruyor; burada
          tekrarlamak hem yer yiyor hem ekran okuyucuya ayni basligi iki kez
          okutuyordu. Burada yalniz ACIKLAMA ve eylem dugmeleri kaliyor.
        */}
        <div>
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
