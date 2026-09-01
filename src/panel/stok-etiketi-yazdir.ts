export function stokEtiketiYazdirmaHtml(etiket: HTMLElement): string {
  return `<!doctype html><html lang="tr"><head><meta charset="utf-8" /><title>Ürün etiketi</title><style>
    @page { size: 100mm 50mm; margin: 0; }
    * { box-sizing: border-box; }
    html, body { width: 100mm; height: 50mm; margin: 0; overflow: hidden; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif; color: #10211d; }
    .pnl-urun-etiketi { width: 100mm; height: 50mm; padding: 6mm; display: grid; grid-template-columns: minmax(0, 1fr) 29mm; gap: 5mm; align-items: center; border: 0; overflow: hidden; break-inside: avoid; page-break-inside: avoid; }
    .pnl-urun-etiket-bilgi { min-width: 0; display: flex; flex-direction: column; gap: 1.2mm; }
    .pnl-urun-etiket-klinik { font-size: 9pt; line-height: 1.2; font-weight: 750; color: #087864; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .pnl-urun-etiket-ad { font-size: 12pt; line-height: 1.2; font-weight: 750; overflow-wrap: anywhere; }
    .pnl-urun-etiket-kod { font-size: 7.5pt; line-height: 1.2; color: #56645f; overflow-wrap: anywhere; }
    .pnl-urun-etiket-barkod { width: 100%; height: 15mm; display: block; }
    .pnl-urun-etiket-qr { display: flex; flex-direction: column; align-items: center; gap: 1mm; }
    .pnl-urun-etiket-qr svg { display: block; width: 27mm; height: 27mm; }
    .pnl-urun-etiket-qr span { font-size: 7pt; color: #56645f; }
  </style></head><body>${etiket.outerHTML}</body></html>`;
}

export function stokEtiketiniYazdir(etiket: HTMLElement): void {
  const cerceve = document.createElement('iframe');
  cerceve.setAttribute('aria-hidden', 'true');
  cerceve.style.position = 'fixed';
  cerceve.style.right = '0';
  cerceve.style.bottom = '0';
  cerceve.style.width = '0';
  cerceve.style.height = '0';
  cerceve.style.border = '0';
  cerceve.srcdoc = stokEtiketiYazdirmaHtml(etiket);

  cerceve.onload = () => {
    const pencere = cerceve.contentWindow;
    if (!pencere) { cerceve.remove(); return; }
    pencere.focus();
    pencere.print();
    window.setTimeout(() => cerceve.remove(), 1000);
  };
  document.body.appendChild(cerceve);
}
