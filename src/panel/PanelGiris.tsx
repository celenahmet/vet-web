import { useState } from 'react';
import { AlertTriangle, LogIn } from 'lucide-react';

import { istemci, yapilandirmaEksik } from './istemci';

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
      setHata('E-posta ya da parola hatalı.');
      return;
    }
    girildi();
  }

  if (yapilandirmaEksik) {
    return (
      <div className="panel-kutu">
        <AlertTriangle size={22} />
        <h1>Panel yapılandırılmamış</h1>
        <p>Sunucu adresi tanımlı değil. Bu bir kullanıcı hatası değil; yapılandırma tamamlanmadan giriş yapılamaz.</p>
      </div>
    );
  }

  return (
    <div className="panel-kutu">
      <h1>Klinik girişi</h1>
      <p>Veterito uygulamasındaki klinik hesabınızla giriş yapın.</p>

      <form onSubmit={gonder} className="panel-form">
        <label>
          <span>E-posta</span>
          <input
            type="email"
            value={eposta}
            onChange={(e) => setEposta(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label>
          <span>Parola</span>
          <input
            type="password"
            value={parola}
            onChange={(e) => setParola(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        {hata ? <p className="panel-hata" role="alert">{hata}</p> : null}

        <button type="submit" disabled={bekliyor}>
          <LogIn size={18} /> {bekliyor ? 'Giriş yapılıyor' : 'Giriş yap'}
        </button>
      </form>

      <p className="panel-not">
        Hayvan sahipleri için web girişi henüz yok; uygulamayı kullanabilirsiniz.
      </p>
    </div>
  );
}
