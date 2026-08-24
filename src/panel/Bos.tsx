import { Inbox } from 'lucide-react';

/**
 * BOS DURUM
 *
 * ⚠️ "Kayit yok" TEK BASINA yetmiyor (Ahmet, 24.08.2026: *"her sey cok
 * aciklayici olmali"*). Panelde bos bir liste goren klinik calisani iki sey
 * dusunebilir: gercekten kayit yok, ya da panel bozuk. Ikinci cumle bu ayrimi
 * yapiyor ve orada NE oldugunda dolacagini soyluyor.
 */
export default function Bos({ baslik, aciklama }: { baslik: string; aciklama: string }) {
  return (
    <div className="pnl-bos">
      <Inbox size={26} aria-hidden="true" />
      <p className="pnl-bos-baslik">{baslik}</p>
      <p className="pnl-bos-aciklama">{aciklama}</p>
    </div>
  );
}
