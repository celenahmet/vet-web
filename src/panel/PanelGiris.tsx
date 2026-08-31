import { useState } from 'react';
import { AlertTriangle, LogIn } from 'lucide-react';

import logoUrl from '../assets/logo.webp';
import { istemci, yapilandirmaEksik } from './istemci';
import Hata from './Hata';

/**
 * KLINIK GIRISI
 *
 * ⚠️ ILK ETAPTA YALNIZ KLINIKLER (Ahmet, 24.08.2026: "sadece klinikler web
 * girisi yapabilecek ilk etapta"). Hayvan sahibi hesabiyla giris teknik olarak
 * mumkun ama panelde gosterilecek bir sey bulamiyor; o durum ekranda acikca
 * soyleniyor, sessizce bos panel gosterilmiyor.
 *
 * ⚠️ HATA MESAJI AYRIM YAPMIYOR. "Bu e-posta kayitli degil" demek, kimin kayitli
 * oldugunu disaridan sinamaya yarayan bir sizinti olur. Yanlis parola ile
 * olmayan hesap ayni cevabi aliyor.
 */
export default function PanelGiris({ girildi }: { girildi: () => void }) {
  const [eposta, setEposta] = useState('');
  const [parola, setParola] = useState('');
  const [hata, setHata] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);

  async function gonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setHata(null);
    setBekliyor(true);
    const { error } = await istemci.auth.signInWithPassword({ email: eposta.trim(), password: parola });
    setBekliyor(false);
    if (error) {
      setHata('E-posta ya da parola hatalı. Kontrol edip tekrar deneyin.');
      return;
    }
    girildi();
  }

  if (yapilandirmaEksik) {
    return (
      <div className="pnl-kutu">
        <AlertTriangle size={22} aria-hidden="true" />
        <h2>Panel şu an açılamıyor</h2>
        <p>Sunucu bağlantısı tanımlı değil. Bu sizin yaptığınız bir hata değil, bizim tarafımızda bir ayar eksik.</p>
        <p className="pnl-not">Kısa süre sonra tekrar deneyin.</p>
      </div>
    );
  }

  return (
    <div className="pnl-giris">
      <div className="pnl-giris-marka">
        <img src={logoUrl} alt="Veterito" width={567} height={144} />
      </div>
      <h1>Klinik girişi</h1>
      <p className="pnl-giris-alt">
        Veterito uygulamasında kullandığınız klinik hesabınızla girin. Ayrı bir web hesabı
        açmanız gerekmiyor, şifreniz aynı.
      </p>

      <form onSubmit={gonder} className="pnl-form">
        <div className="pnl-alan">
          <label htmlFor="pnl-eposta">E-posta</label>
          <input
            id="pnl-eposta"
            type="email"
            value={eposta}
            onChange={(e) => setEposta(e.target.value)}
            autoComplete="username"
            required
          />
        </div>
        <div className="pnl-alan">
          <label htmlFor="pnl-parola">Parola</label>
          <input
            id="pnl-parola"
            type="password"
            value={parola}
            onChange={(e) => setParola(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        {hata ? <Hata mesaj={hata} kucuk /> : null}

        <button type="submit" className="pnl-dugme pnl-dugme-olumlu pnl-giris-dugme" disabled={bekliyor}>
          <LogIn size={16} /> {bekliyor ? 'Giriş yapılıyor…' : 'Giriş yap'}
        </button>
      </form>

      <p className="pnl-giris-not">
        Hayvan sahibiyseniz web girişi henüz yok; Veterito uygulamasını kullanabilirsiniz.
      </p>
    </div>
  );
}
