import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { QRCodeSVG } from 'qrcode.react';
import { Printer } from 'lucide-react';
import { stokEtiketiniYazdir } from './stok-etiketi-yazdir';

export default function StokEtiketi({ klinikAdi, ad, kod, gtin }: { klinikAdi: string; ad: string; kod: string; gtin: string | null }) {
  const barkod = useRef<SVGSVGElement>(null);
  const etiket = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barkod.current) return;
    JsBarcode(barkod.current, gtin || kod, {
      // EAN-13 yalnız uzunluğa bakılarak seçilemez; hatalı kontrol basamağı
      // JsBarcode'u düşürür. CODE128 hem GTIN'i hem klinik kodunu güvenle taşır.
      format: 'CODE128',
      displayValue: true,
      height: 48,
      width: 1.5,
      margin: 4,
      fontSize: 12,
    });
  }, [gtin, kod]);

  return (
    <div className="pnl-etiket-sarmal">
      <div ref={etiket} className="pnl-urun-etiketi" id={`stok-etiketi-${kod}`}>
        <div className="pnl-urun-etiket-bilgi">
          <small className="pnl-urun-etiket-klinik">{klinikAdi}</small>
          <strong className="pnl-urun-etiket-ad">{ad}</strong>
          <span className="pnl-urun-etiket-kod">{kod}</span>
          <svg ref={barkod} className="pnl-urun-etiket-barkod" aria-label={`${ad} barkodu`} />
        </div>
        <div className="pnl-urun-etiket-qr"><QRCodeSVG value={kod} size={108} level="M" aria-label={`${ad} QR kodu`} /><span>Veterito stok kodu</span></div>
      </div>
      <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => { if (etiket.current) stokEtiketiniYazdir(etiket.current); }}>
        <Printer size={15} /> Etiketi yazdır
      </button>
    </div>
  );
}
