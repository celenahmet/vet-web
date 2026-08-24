/**
 * ⚠️ `role="status"` ve gorunur metin birlikte. Yalniz donen halka birakmak,
 * ekran okuyucu kullanan biri icin sessizlik demek; yalniz metin birakmak da
 * gozle bakan icin "dondu mu kaldi mi" belirsizligi.
 */
export default function Yukleniyor({ metin = 'Bilgiler yükleniyor' }: { metin?: string }) {
  return (
    <div className="pnl-yukleniyor" role="status">
      <span className="pnl-halka" aria-hidden="true" />
      <span>{metin}…</span>
    </div>
  );
}
