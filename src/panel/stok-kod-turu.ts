export const STOK_KOD_TURLERI = [
  'unknown', 'ean13', 'ean8', 'upc_a', 'upc_e', 'code39', 'code93', 'code128', 'itf14', 'qr',
] as const;

export type StokKodTuru = typeof STOK_KOD_TURLERI[number];

export const STOK_KOD_TURU_ADI: Record<StokKodTuru, string> = {
  unknown: 'Bilinmiyor', ean13: 'EAN-13', ean8: 'EAN-8', upc_a: 'UPC-A', upc_e: 'UPC-E',
  code39: 'Code 39', code93: 'Code 93', code128: 'Code 128', itf14: 'ITF-14', qr: 'QR',
};

const TARAYICI_TURU: Record<string, StokKodTuru> = {
  ean_13: 'ean13', ean13: 'ean13', ean_8: 'ean8', ean8: 'ean8',
  upc_a: 'upc_a', upca: 'upc_a', upc_e: 'upc_e', upce: 'upc_e',
  code_39: 'code39', code39: 'code39', code_93: 'code93', code93: 'code93',
  code_128: 'code128', code128: 'code128', itf_14: 'itf14', itf14: 'itf14',
  qr_code: 'qr', qr: 'qr',
};

/** BarcodeDetector ve ZXing aynı format için farklı ad döndürür. */
export function stokKodTurunuNormallestir(tur: string | undefined, kod: string): StokKodTuru {
  const anahtar = (tur ?? '').trim().toLocaleLowerCase('en-US').replaceAll('-', '_').replaceAll(' ', '_');
  if (anahtar === 'itf') return /^\d{14}$/.test(kod) ? 'itf14' : 'unknown';
  return TARAYICI_TURU[anahtar] ?? 'unknown';
}

export function ureticiKoduGtinOlabilir(tur: StokKodTuru, kod: string): boolean {
  return ['ean13', 'ean8', 'upc_a', 'upc_e', 'itf14'].includes(tur) && /^\d{8,14}$/.test(kod);
}
