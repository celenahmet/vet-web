const IZINLI_TURLER = new Set(['image/jpeg', 'image/png', 'image/webp']);
const AZAMI_DOSYA = 12 * 1024 * 1024;
const AZAMI_KENAR = 8_000;
const AZAMI_PIKSEL = 24_000_000;
const OCR_KENAR = 2_400;

export type OcrGorselBoyutu = { width: number; height: number; format: 'jpeg' | 'png' | 'webp' };

export class OcrGorselHatasi extends Error {}

const u16le = (b: Uint8Array, i: number) => b[i] | (b[i + 1] << 8);
const u24le = (b: Uint8Array, i: number) => b[i] | (b[i + 1] << 8) | (b[i + 2] << 16);
const u32be = (b: Uint8Array, i: number) => (
  ((b[i] << 24) >>> 0) + (b[i + 1] << 16) + (b[i + 2] << 8) + b[i + 3]
);
const ascii = (b: Uint8Array, i: number, n: number) => String.fromCharCode(...b.slice(i, i + n));

/** MIME etiketi değil, dosyanın kendi imzası ve başlığındaki ölçü okunur. */
export function ocrGorselBoyutunuOku(b: Uint8Array, mime: string): OcrGorselBoyutu | null {
  if (b.length >= 24 && ascii(b, 0, 8) === '\x89PNG\r\n\x1a\n') {
    if (mime !== 'image/png' || ascii(b, 12, 4) !== 'IHDR') return null;
    return { width: u32be(b, 16), height: u32be(b, 20), format: 'png' };
  }

  if (b.length >= 12 && b[0] === 0xff && b[1] === 0xd8) {
    if (mime !== 'image/jpeg') return null;
    const sof = new Set([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf]);
    let i = 2;
    while (i + 8 < b.length) {
      if (b[i] !== 0xff) { i += 1; continue; }
      while (i < b.length && b[i] === 0xff) i += 1;
      const marker = b[i++];
      if (marker === 0xd8 || marker === 0xd9 || (marker >= 0xd0 && marker <= 0xd7)) continue;
      if (i + 1 >= b.length) return null;
      const length = (b[i] << 8) | b[i + 1];
      if (length < 2 || i + length > b.length) return null;
      if (sof.has(marker) && length >= 7) {
        return { width: (b[i + 5] << 8) | b[i + 6], height: (b[i + 3] << 8) | b[i + 4], format: 'jpeg' };
      }
      i += length;
    }
    return null;
  }

  if (b.length >= 30 && ascii(b, 0, 4) === 'RIFF' && ascii(b, 8, 4) === 'WEBP') {
    if (mime !== 'image/webp') return null;
    const chunk = ascii(b, 12, 4);
    if (chunk === 'VP8X') {
      return { width: u24le(b, 24) + 1, height: u24le(b, 27) + 1, format: 'webp' };
    }
    if (chunk === 'VP8L' && b[20] === 0x2f && b.length >= 25) {
      return {
        width: 1 + (b[21] | ((b[22] & 0x3f) << 8)),
        height: 1 + ((b[22] >> 6) | (b[23] << 2) | ((b[24] & 0x0f) << 10)),
        format: 'webp',
      };
    }
    if (chunk === 'VP8 ' && b.length >= 30
        && b[23] === 0x9d && b[24] === 0x01 && b[25] === 0x2a) {
      return { width: u16le(b, 26) & 0x3fff, height: u16le(b, 28) & 0x3fff, format: 'webp' };
    }
  }
  return null;
}

function boyutuDogrula(boyut: OcrGorselBoyutu | null): asserts boyut is OcrGorselBoyutu {
  if (!boyut) throw new OcrGorselHatasi('Dosya uzantısı ile gerçek görüntü biçimi eşleşmiyor veya görüntü başlığı okunamıyor.');
  if (boyut.width < 1 || boyut.height < 1 || boyut.width > AZAMI_KENAR || boyut.height > AZAMI_KENAR
      || boyut.width * boyut.height > AZAMI_PIKSEL) {
    throw new OcrGorselHatasi('Görüntü çözünürlüğü güvenli OCR sınırını aşıyor. En fazla 8.000 piksel kenar ve 24 megapiksel kullanın.');
  }
}

/** Görsel OCR motoruna gitmeden önce sınırlı boyutta WebP'ye yeniden kodlanır. */
export async function ocrGorseliniHazirla(dosya: File): Promise<Blob> {
  if (!IZINLI_TURLER.has(dosya.type)) {
    throw new OcrGorselHatasi('Yalnız JPEG, PNG veya WebP biçiminde cihaz fotoğrafı seçin.');
  }
  if (dosya.size > AZAMI_DOSYA) {
    throw new OcrGorselHatasi('Cihaz fotoğrafı en fazla 12 MB olabilir. Daha küçük bir görüntü seçin.');
  }

  const baslik = new Uint8Array(await dosya.slice(0, Math.min(dosya.size, 1024 * 1024)).arrayBuffer());
  const bildirilen = ocrGorselBoyutunuOku(baslik, dosya.type);
  boyutuDogrula(bildirilen);

  const adres = URL.createObjectURL(dosya);
  try {
    const resim = new Image();
    resim.decoding = 'async';
    resim.src = adres;
    await resim.decode();
    const gercek = { width: resim.naturalWidth, height: resim.naturalHeight, format: bildirilen.format };
    boyutuDogrula(gercek);
    if (gercek.width !== bildirilen.width || gercek.height !== bildirilen.height) {
      throw new OcrGorselHatasi('Görüntünün başlık ve çözümlenen ölçüleri uyuşmuyor. Başka bir fotoğraf seçin.');
    }

    const oran = Math.min(1, OCR_KENAR / Math.max(gercek.width, gercek.height));
    const tuval = document.createElement('canvas');
    tuval.width = Math.max(1, Math.round(gercek.width * oran));
    tuval.height = Math.max(1, Math.round(gercek.height * oran));
    const cizim = tuval.getContext('2d');
    if (!cizim) throw new OcrGorselHatasi('Görüntü bu tarayıcıda güvenli biçimde hazırlanamadı.');
    cizim.drawImage(resim, 0, 0, tuval.width, tuval.height);
    const sonuc = await new Promise<Blob | null>((coz) => tuval.toBlob(coz, 'image/webp', 0.88));
    if (!sonuc) throw new OcrGorselHatasi('Görüntü OCR için yeniden kodlanamadı.');
    return sonuc;
  } finally {
    URL.revokeObjectURL(adres);
  }
}

export async function ocrZamanSinirli<T>(islem: Promise<T>, sureMs = 45_000): Promise<T> {
  let zamanlayici = 0;
  const zamanAsimi = new Promise<never>((_, reddet) => {
    zamanlayici = window.setTimeout(() => reddet(new OcrGorselHatasi(
      'OCR güvenli süre sınırını aştı. Daha küçük ve yalnız cihaz ekranını içeren bir fotoğraf deneyin.',
    )), sureMs);
  });
  try {
    return await Promise.race([islem, zamanAsimi]);
  } finally {
    window.clearTimeout(zamanlayici);
  }
}
