import { useEffect, useRef, type ReactNode } from 'react';
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
  baslik, aciklama, acik, kapat, children,
}: {
  baslik: string;
  aciklama?: string;
  acik: boolean;
  kapat: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (acik && !d.open) d.showModal();
    if (!acik && d.open) d.close();
  }, [acik]);

  if (!acik) return null;

  return (
    <dialog
      ref={ref}
      className="pnl-diyalog"
      onClose={kapat}
      onClick={(e) => {
        // Arka plana tiklama: hedef diyalogun KENDISI ise disariya tiklanmistir.
        if (e.target === ref.current) kapat();
      }}>
      <form method="dialog" className="pnl-diyalog-kapat-sarmal">
        <button type="submit" className="pnl-diyalog-kapat" aria-label="Kapat"><X size={17} /></button>
      </form>
      <h2 className="pnl-diyalog-baslik">{baslik}</h2>
      {aciklama ? <p className="pnl-diyalog-aciklama">{aciklama}</p> : null}
      {children}
    </dialog>
  );
}
