import { useCallback, useEffect, useRef, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

import { istemci } from './istemci';
import { BOSTA_SINIR_MS, UYARI_ONCESI_MS, ETKINLIK_OLAYLARI, geriSayimYaz } from './oturumSuresi';
import Diyalog from './Diyalog';

/**
 * BOSTA KALMA KILIDI
 *
 * Gerekce ve sure secimi → `oturumSuresi.ts`.
 *
 * ⚠️ SESSIZCE ATMIYOR. Sure dolmadan iki dakika once uyari cikiyor ve geri
 * sayim gorunuyor. Uyarisiz cikis, kullanicinin yazdigi seyi kaybetmesi
 * demek; ustelik "sistem beni attı" hissi guveni zedeliyor.
 *
 * ⚠️ SAYAC `ref`TE TUTULUYOR, state'te degil. Her fare hareketinde state
 * guncellemek saniyede onlarca render demek olurdu; ekranda degisen bir sey
 * yokken render etmek gereksiz.
 *
 * ⚠️ Uyari acikken etkinlik olaylari sayaci SIFIRLAMIYOR: fare uyari kutusunun
 * uzerinden gecince kilit iptal olsaydi, uyarinin bir anlami kalmazdi. Iptal
 * icin dugmeye BASMAK gerekiyor.
 */
export default function OturumKilidi() {
  const sonEtkinlik = useRef<number>(Date.now());
  const [uyari, setUyari] = useState(false);
  const [kalan, setKalan] = useState(UYARI_ONCESI_MS);
  const uyariRef = useRef(false);

  const devamEt = useCallback(() => {
    sonEtkinlik.current = Date.now();
    uyariRef.current = false;
    setUyari(false);
  }, []);

  useEffect(() => {
    function etkinlik() {
      /* Uyari acikken hareket sayaci sifirlamiyor; bkz. dosya basi. */
      if (uyariRef.current) return;
      sonEtkinlik.current = Date.now();
    }
    for (const olay of ETKINLIK_OLAYLARI) {
      window.addEventListener(olay, etkinlik, { passive: true });
    }
    function gorunurluk() { if (document.visibilityState === 'visible') etkinlik(); }
    document.addEventListener('visibilitychange', gorunurluk);

    const sayac = window.setInterval(() => {
      const gecen = Date.now() - sonEtkinlik.current;
      const kalanSure = BOSTA_SINIR_MS - gecen;

      if (kalanSure <= 0) {
        window.clearInterval(sayac);
        /*
         * ⚠️ `scope: 'local'`: cikis bu tarayicinin oturumunu SUNUCUDA da iptal
         * ediyor (olculdu) ama telefondaki uygulamayi dusurmuyor. Klinik
         * calisaninin masadan kalkmasi, cebindeki uygulamadan atilmasini
         * gerektirmiyor.
         */
        istemci.auth.signOut({ scope: 'local' }).catch(() => { /* zaten kapanacak */ });
        return;
      }

      if (kalanSure <= UYARI_ONCESI_MS) {
        uyariRef.current = true;
        setUyari(true);
        setKalan(kalanSure);
      }
    }, 1000);

    return () => {
      for (const olay of ETKINLIK_OLAYLARI) window.removeEventListener(olay, etkinlik);
      document.removeEventListener('visibilitychange', gorunurluk);
      window.clearInterval(sayac);
    };
  }, []);

  return (
    <Diyalog
      acik={uyari}
      kapat={devamEt}
      baslik="Oturumunuz birazdan kapanacak"
      aciklama="Bir süredir işlem yapılmadı. Güvenlik için oturum kendiliğinden kapanıyor; ekranınızın başında değilseniz kimse kliniğinizin bilgilerini göremesin diye.">
      <div className="pnl-kilit">
        <span className="pnl-kilit-ikon" aria-hidden="true"><ShieldAlert size={22} /></span>
        <div>
          <p className="pnl-kilit-sayac" role="timer" aria-live="polite">{geriSayimYaz(kalan)}</p>
          <p className="pnl-kilit-alt">
            Devam ederseniz oturumunuz açık kalır. Telefondaki uygulamanız bundan etkilenmez.
          </p>
        </div>
      </div>
      <div className="pnl-diyalog-eylem">
        <button
          type="button"
          className="pnl-dugme pnl-dugme-sade"
          onClick={() => istemci.auth.signOut({ scope: 'local' })}>
          Şimdi çıkış yap
        </button>
        <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={devamEt} autoFocus>
          Devam et
        </button>
      </div>
    </Diyalog>
  );
}
