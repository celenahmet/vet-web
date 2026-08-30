import type { LabAnaliti, LabAnalitGirdisi } from './lab-veri';

export type OcrAdayi = LabAnalitGirdisi & { code: string; name: string; raw_line: string | null };
export type OcrDurumu = 'same' | 'new' | 'conflict' | 'unreadable' | 'existing_only';
export type OcrSecimi = 'existing' | 'scanned' | 'unresolved';
export type OcrBirlestirme = {
  code: string;
  status: OcrDurumu;
  choice: OcrSecimi;
  scanned: OcrAdayi | null;
  existing: LabAnaliti | null;
};

const BIRIMLER = [
  '10^12/L', '10^9/L', 'g/dL', 'mg/dL', 'mmol/L', 'µmol/L', 'umol/L',
  'U/L', 'IU/L', 'fL', 'pg', '%', 'mEq/L', 'ng/mL', 'µg/dL', 'ug/dL',
];

const sayi = (deger?: string): number | null => {
  if (!deger) return null;
  const sonuc = Number(deger.replace(',', '.'));
  return Number.isFinite(sonuc) ? sonuc : null;
};

const kacir = (deger: string) => deger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function satiriCoz(kod: string, satir: string): OcrAdayi {
  const sonrasi = satir.replace(new RegExp(`^.*?\\b${kacir(kod)}\\b`, 'i'), ' ').trim();
  const degerler = [...sonrasi.matchAll(/[-+]?\d+(?:[.,]\d+)?/g)];
  const aralik = sonrasi.match(/([-+]?\d+(?:[.,]\d+)?)\s*[-–—]\s*([-+]?\d+(?:[.,]\d+)?)/);
  const okunamadi = /^(?:\?\?|--+|—+|N\/A|NA)(?:\s|$)/i.test(sonrasi);
  const yalnizAralik = degerler[0]?.index != null && degerler[0].index === aralik?.index;
  const birim = BIRIMLER.find((aday) => sonrasi.toLocaleLowerCase('en-US')
    .includes(aday.toLocaleLowerCase('en-US'))) ?? null;
  const bayrak = sonrasi.match(/(?:^|\s)(H|L|HIGH|LOW|\+{1,3}|-{1,3})(?:\s|$)/i)?.[1] ?? null;
  return {
    code: kod,
    name: kod,
    value: okunamadi || yalnizAralik ? null : sayi(degerler[0]?.[0]),
    text_value: null,
    unit: birim,
    reference_low: sayi(aralik?.[1]),
    reference_high: sayi(aralik?.[2]),
    provider_flag: okunamadi ? null : bayrak?.toUpperCase() ?? null,
    method_name: 'browser_on_device_ocr',
    raw_line: satir,
  };
}

export function ocrMetniniCoz(metin: string, beklenenler: string[]): OcrAdayi[] {
  const satirlar = metin.split(/\r?\n/).map((satir) => satir.replace(/\s+/g, ' ').trim()).filter(Boolean);
  return beklenenler.map((hamKod) => {
    const kod = hamKod.toUpperCase();
    const satir = satirlar.find((aday) => new RegExp(
      `(?:^|[^A-Z0-9_])${kacir(kod)}(?:$|[^A-Z0-9_])`, 'i',
    ).test(aday));
    return satir ? satiriCoz(kod, satir) : {
      code: kod, name: kod, value: null, text_value: null, unit: null,
      reference_low: null, reference_high: null, provider_flag: null,
      method_name: 'browser_on_device_ocr', raw_line: null,
    };
  });
}

const norm = (deger: string | null | undefined) => deger?.trim().toLocaleLowerCase('en-US') || null;

function ayni(taranan: OcrAdayi, mevcut: LabAnaliti): boolean {
  return mevcut.text_value == null
    && (taranan.value ?? null) === mevcut.numeric_value
    && norm(taranan.unit) === norm(mevcut.unit)
    && (taranan.reference_low ?? null) === mevcut.reference_low
    && (taranan.reference_high ?? null) === mevcut.reference_high
    && norm(taranan.provider_flag) === norm(mevcut.provider_flag);
}

export function ocrSonucunuBirlestir(tarananlar: OcrAdayi[], mevcutlar: LabAnaliti[]): OcrBirlestirme[] {
  const mevcutKodlar = new Map(mevcutlar.map((satir) => [satir.analyte_code.toUpperCase(), satir]));
  const gorulen = new Set<string>();
  const satirlar = tarananlar.map((taranan): OcrBirlestirme => {
    const kod = taranan.code.toUpperCase();
    gorulen.add(kod);
    const mevcut = mevcutKodlar.get(kod) ?? null;
    if (taranan.value == null) {
      return { code: kod, status: 'unreadable', choice: mevcut ? 'existing' : 'unresolved', scanned: taranan, existing: mevcut };
    }
    if (!mevcut) return { code: kod, status: 'new', choice: 'scanned', scanned: taranan, existing: null };
    if (ayni(taranan, mevcut)) return { code: kod, status: 'same', choice: 'existing', scanned: taranan, existing: mevcut };
    return { code: kod, status: 'conflict', choice: 'existing', scanned: taranan, existing: mevcut };
  });
  for (const mevcut of mevcutlar) {
    const kod = mevcut.analyte_code.toUpperCase();
    if (!gorulen.has(kod)) satirlar.push({ code: kod, status: 'existing_only', choice: 'existing', scanned: null, existing: mevcut });
  }
  return satirlar;
}

export function birlestirilmisAnalitler(satirlar: OcrBirlestirme[]): LabAnalitGirdisi[] {
  return satirlar.flatMap((satir) => {
    if (satir.choice === 'unresolved') return [];
    if (satir.choice === 'scanned' && satir.scanned) {
      const { raw_line: _ham, ...aday } = satir.scanned;
      return [aday];
    }
    if (!satir.existing) return [];
    return [{
      code: satir.existing.analyte_code,
      name: satir.existing.analyte_name,
      value: satir.existing.numeric_value,
      text_value: satir.existing.text_value,
      unit: satir.existing.unit,
      reference_low: satir.existing.reference_low,
      reference_high: satir.existing.reference_high,
      provider_flag: satir.existing.provider_flag,
      method_name: satir.existing.method_name,
      measured_at: satir.existing.measured_at,
    }];
  });
}
