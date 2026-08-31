import { useEffect, useId, useRef, type ReactNode } from 'react';
import { X } from 'lucide-react';

/**
 * DIYALOG
 *
 * ⚠️ `<dialog>` KULLANILIYOR, kendi yaptigim bir kutu degil. Tarayicinin
 * kendisi odak tuzagini, Esc ile kapanmayi ve arka plani erisilemez yapmayi
 * hallediyor. Elde yazilan modallarda en sik atlanan sey budur: fare ile
 * calisiyor gorunur, klavyeyle arka plandaki dugmelere gecilebilir.
 *
 * ⚠️ `showModal()` EFEKTTE cagriliyor, render sirasinda degil: render saf
 * olmali ve DOM'a dokunmamali.
 *
 * ⚠️ Kapatma UC yoldan: capraz dugme, Esc (tarayici), ve arka plana tiklama.
 * Ucunu de saglamak, "kapatamiyorum" durumunu ortadan kaldiriyor.
 */
export default function Diyalog({
  baslik, aciklama, acik, kapat, children, boyut = 'normal',
}: {
  baslik: string;
  aciklama?: string;
  acik: boolean;
  kapat: () => void;
  children: ReactNode;
  boyut?: 'normal' | 'genis' | 'panorama';
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const oncekiOdak = useRef<HTMLElement | null>(null);
  const baslikKimligi = useId();
  const aciklamaKimligi = useId();

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (acik && !d.open) {
      oncekiOdak.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
      d.showModal();
      requestAnimationFrame(() => {
        const ilkAlan = d.querySelector<HTMLElement>(
          '[data-dialog-ilk-odak], input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled])',
        );
        ilkAlan?.focus({ preventScroll: true });
      });
    }
    if (!acik && d.open) d.close();
    return () => {
      if (d.open) d.close();
      oncekiOdak.current?.focus({ preventScroll: true });
      oncekiOdak.current = null;
    };
  }, [acik]);

  if (!acik) return null;

  return (
    <dialog
      ref={ref}
      className={`pnl-diyalog pnl-diyalog-${boyut}`}
      aria-labelledby={baslikKimligi}
      aria-describedby={aciklama ? aciklamaKimligi : undefined}
      onCancel={(e) => {
        e.preventDefault();
        kapat();
      }}
      onKeyDown={(e) => {
        if (e.key !== 'Escape') return;
        e.preventDefault();
        kapat();
      }}
      onClose={kapat}
      onClick={(e) => {
        // `<dialog>` arka plan tiklamasini kendi hedefi olarak bildirir. Koordinat
        // kontrolu olmazsa kutunun icindeki bos bir alana tiklamak da kapatirdi.
        if (e.target !== ref.current) return;
        const sinir = e.currentTarget.getBoundingClientRect();
        const disarida = e.clientX < sinir.left || e.clientX > sinir.right
          || e.clientY < sinir.top || e.clientY > sinir.bottom;
        if (disarida) kapat();
      }}>
      <header className="pnl-diyalog-basi">
        <div>
          <h2 id={baslikKimligi} className="pnl-diyalog-baslik">{baslik}</h2>
          {aciklama ? <p id={aciklamaKimligi} className="pnl-diyalog-aciklama">{aciklama}</p> : null}
        </div>
        <form method="dialog" className="pnl-diyalog-kapat-sarmal">
          <button type="submit" className="pnl-diyalog-kapat" aria-label="Kapat"><X size={17} /></button>
        </form>
      </header>
      <div className="pnl-diyalog-icerik">{children}</div>
    </dialog>
  );
}
