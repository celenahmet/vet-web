import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { QRCodeSVG } from 'qrcode.react';
import { Printer } from 'lucide-react';

export default function StokEtiketi({ ad, kod, gtin }: { ad: string; kod: string; gtin: string | null }) {
  const barkod = useRef<SVGSVGElement>(null);

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
      <div className="pnl-urun-etiketi" id={`stok-etiketi-${kod}`}>
        <div>
          <strong>{ad}</strong>
          <span>{kod}</span>
          <svg ref={barkod} aria-label={`${ad} barkodu`} />
        </div>
        <QRCodeSVG value={kod} size={108} level="M" aria-label={`${ad} QR kodu`} />
      </div>
      <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => window.print()}>
        <Printer size={15} /> Etiketi yazdır
      </button>
    </div>
  );
}
