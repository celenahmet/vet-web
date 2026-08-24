import { useEffect, useState } from 'react';
import { PawPrint } from 'lucide-react';

import { hastalariOku, type Hasta } from './veri';
import { TUR } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

/**
 * HASTALAR
 *
 * ⚠️ Tur kodu (`dog`, `cat`) ekrana ham cikmiyor. Sozlukte olmayan bir kod
 * gelirse ham hali gorunuyor; bu kasitli, sessizce "Diger" yazmak yeni bir turun
 * eklendigini gorunmez yapardi.
 */
export default function PanelHastalar({ klinik }: { klinik: string }) {
  const [liste, setListe] = useState<Hasta[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    setListe(null); setHata(null);
    hastalariOku(klinik).then(setListe)
      .catch((e: { message?: string }) => { setListe([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  if (liste === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Hastalar</h2>
          <p className="pnl-aciklama">
            Kliniğinize bağlı müşterilerin kayıtlı hayvanları. Hayvan sahibi kaydını
            uygulamadan girdiği için buradaki bilgiler ona ait.
          </p>
        </div>
      </header>

      {liste.length === 0 ? (
        <Bos baslik="Kayıtlı hasta yok" aciklama="Müşterileriniz uygulamada hayvanlarını kaydettiğinde burada listelenir." />
      ) : (
        <ul className="pnl-kisi-listesi">
          {liste.map((h) => (
            <li key={h.pet_id} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><PawPrint size={18} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">{h.pet_name || 'İsim girilmemiş'}</p>
                <p className="pnl-kisi-rol">{h.species_code ? (TUR[h.species_code] ?? h.species_code) : 'Türü girilmemiş'}</p>
                <p className="pnl-kisi-ek">Sahibi: {h.owner_name || 'İsim girilmemiş'}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
