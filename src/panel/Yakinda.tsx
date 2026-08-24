import { Clock } from 'lucide-react';

/**
 * YER TUTUCU KUTU (İSTEK: Ahmet, 24.08.2026 — *"olmayanlara - koyarız sonra
 * oturturuz bence daha hızlı çıkar panel"*)
 *
 * ⚠️ SAYI UYDURMUYOR, YER AYIRIYOR. Tasarim taslagindaki bazi kutularin
 * arkasinda henuz veri yok. Iki yanlis yol vardi: kutuyu hic koymamak (tasarim
 * oturmaz, sonra yeniden dizmek gerekir) ya da orneklik bir sayi yazmak
 * (panelde gorulen her sayi karar veriyor, uydurma sayi yanlis karar verdirir).
 *
 * Ucuncu yol bu: kutu yerinde, sayinin yerinde tire, altinda neden bos oldugu.
 * "Karsiligi olmayan bilgi verilmez" ilkesi (Ahmet, 24.08.2026) korunuyor ve
 * tasarim yine de tam gorunuyor.
 */
export default function Yakinda({ baslik, aciklama }: { baslik: string; aciklama: string }) {
  return (
    <section className="pnl-widget pnl-widget-yakinda">
      <header className="pnl-widget-basi">
        <span className="pnl-widget-ikon" aria-hidden="true"><Clock size={17} /></span>
        <h3>{baslik}</h3>
        <span className="pnl-yakinda-etiket">Yakında</span>
      </header>
      <div className="pnl-widget-govde">
        <p className="pnl-yakinda-tire" aria-hidden="true">—</p>
        <p className="pnl-widget-bos">{aciklama}</p>
      </div>
    </section>
  );
}
