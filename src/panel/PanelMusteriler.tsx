import { useEffect, useState } from 'react';
import { User } from 'lucide-react';

import { musterileriOku, type Musteri } from './veri';
import { tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';

/**
 * MUSTERILER
 *
 * ⚠️ "Musteri" burada ALISVERIS yapan degil, klinige BAGLI hayvan sahibi.
 * Baglanti tek tarafli kurulamiyor: sunucu tarafinda cift onay var (klinik davet
 * ediyor, hayvan sahibi kabul ediyor). Ekrandaki aciklama bunu soyluyor, cunku
 * "neden listede az kisi var" sorusunun cevabi bu.
 */
export default function PanelMusteriler({ klinik }: { klinik: string }) {
  const [liste, setListe] = useState<Musteri[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);

  useEffect(() => {
    setListe(null); setHata(null);
    musterileriOku(klinik).then(setListe)
      .catch((e: { message?: string }) => { setListe([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  if (liste === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        <div>
          <h2>Müşteriler</h2>
          <p className="pnl-aciklama">
            Kliniğinize bağlı hayvan sahipleri. Bağlantı çift taraflı kuruluyor: siz davet
            ediyorsunuz, hayvan sahibi uygulamadan kabul ediyor.
          </p>
        </div>
      </header>

      {liste.length === 0 ? (
        <Bos baslik="Henüz bağlı müşteri yok" aciklama="Uygulamadan müşteri davet ettiğinizde ve davet kabul edildiğinde burada görünürler." />
      ) : (
        <ul className="pnl-kisi-listesi">
          {liste.map((m) => (
            <li key={m.user_id} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><User size={18} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">{m.display_name || 'İsim girilmemiş'}</p>
                <p className="pnl-kisi-rol">
                  {m.pet_count > 0 ? `${m.pet_count} hayvanı kayıtlı` : 'Kayıtlı hayvanı yok'}
                </p>
                {m.note ? <p className="pnl-kisi-ek">Not: {m.note}</p> : null}
                <p className="pnl-kisi-ek pnl-soluk">Müşteri oldu: {tarihYaz(m.created_at, false)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
