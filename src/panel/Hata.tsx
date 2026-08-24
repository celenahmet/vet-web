import { AlertTriangle, RefreshCw } from 'lucide-react';
import { hatayiAnlat } from './sozluk';

/**
 * HATA KUTUSU
 *
 * ⚠️ Ham sunucu mesaji EKRANA DOGRUDAN BASILMIYOR ama SAKLANMIYOR da. Ust satir
 * insanin anlayacagi cumle, alt satir teknik ayrinti. Ikisini de tutmanin sebebi
 * pratik: klinik calisani ne yapacagini ustten anliyor, destek isteyecegi zaman
 * alttaki satiri yapistiriyor.
 */
export default function Hata({ mesaj, tekrar, kucuk }: { mesaj: string; tekrar?: () => void; kucuk?: boolean }) {
  const { baslik, ayrinti } = hatayiAnlat(mesaj);
  return (
    <div className={kucuk ? 'pnl-hata pnl-hata-kucuk' : 'pnl-hata'} role="alert">
      <AlertTriangle size={18} aria-hidden="true" />
      <div>
        <p className="pnl-hata-baslik">{baslik}</p>
        {ayrinti ? <p className="pnl-hata-ayrinti">{ayrinti}</p> : null}
      </div>
      {tekrar ? (
        <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={tekrar}>
          <RefreshCw size={15} /> Tekrar dene
        </button>
      ) : null}
    </div>
  );
}
