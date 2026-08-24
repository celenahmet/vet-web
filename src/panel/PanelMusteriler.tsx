import { useCallback, useEffect, useState } from 'react';
import { User, UserPlus } from 'lucide-react';

import { musterileriOku, musteriDavetEt, type Musteri } from './veri';
import { tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

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
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [davetAcik, setDavetAcik] = useState(false);
  const [eposta, setEposta] = useState('');
  const [telefon, setTelefon] = useState('');
  const [not, setNot] = useState('');
  const [bekliyor, setBekliyor] = useState(false);

  const yukle = useCallback(() => {
    setHata(null);
    musterileriOku(klinik).then(setListe)
      .catch((e: { message?: string }) => { setListe([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  useEffect(() => { setListe(null); yukle(); }, [yukle]);

  async function davetGonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await musteriDavetEt(klinik, { eposta: eposta.trim() || undefined, telefon: telefon.trim() || undefined, not: not.trim() || undefined });
      setDavetAcik(false); setEposta(''); setTelefon(''); setNot('');
      setBilgi('Davet gönderildi. Hayvan sahibi uygulamadan kabul edince listede görünecek.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

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
        <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setDavetAcik(true); setIslemHatasi(null); }}>
          <UserPlus size={15} /> Müşteri davet et
        </button>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

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
      <Diyalog
        acik={davetAcik}
        kapat={() => setDavetAcik(false)}
        baslik="Müşteri davet et"
        aciklama="E-posta ya da telefondan biri yeterli. Davet hayvan sahibine gider; kabul edene kadar müşteri listenizde görünmez.">
        <form onSubmit={davetGonder}>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-eposta">E-posta</label>
            <input id="pnl-m-eposta" type="email" value={eposta} onChange={(e) => setEposta(e.target.value)} placeholder="ornek@eposta.com" />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-telefon">Telefon</label>
            <input id="pnl-m-telefon" type="tel" value={telefon} onChange={(e) => setTelefon(e.target.value)} placeholder="05xx xxx xx xx" />
            <span className="pnl-alan-ipucu">İkisinden birini doldurmanız yeterli.</span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-not">Not (isteğe bağlı)</label>
            <textarea id="pnl-m-not" value={not} maxLength={300} onChange={(e) => setNot(e.target.value)} placeholder="Kendi kaydınız için not. Hayvan sahibi bu notu görmez." />
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setDavetAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || (!eposta.trim() && !telefon.trim())}>
              {bekliyor ? 'Gönderiliyor…' : 'Daveti gönder'}
            </button>
          </div>
        </form>
      </Diyalog>
    </section>
  );
}
