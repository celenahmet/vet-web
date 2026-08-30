import assert from 'node:assert/strict';

import {
  birlestirilmisAnalitler,
  ocrMetniniCoz,
  ocrSonucunuBirlestir,
} from '../src/panel/lab-ocr.ts';

const mevcut = (kod, deger, ek = {}) => ({
  id: kod,
  request_id: '00000000-0000-0000-0000-000000000001',
  analyte_code: kod,
  analyte_name: kod,
  numeric_value: deger,
  text_value: null,
  unit: 'g/dL',
  reference_low: 1,
  reference_high: 5,
  provider_flag: null,
  method_name: 'Analyzer',
  measured_at: '2026-08-30T00:00:00Z',
  ...ek,
});

const adaylar = ocrMetniniCoz([
  'RBC 4 g/dL 1-5',
  'WBC 3 g/dL 1-5',
  'HGB 7 g/dL 1-5 H',
  'CREA ??',
].join('\n'), ['RBC', 'WBC', 'HGB', 'CREA', 'ALT']);

assert.equal(adaylar.find((satir) => satir.code === 'RBC')?.value, 4);
assert.equal(adaylar.find((satir) => satir.code === 'CREA')?.value, null);
assert.equal(adaylar.find((satir) => satir.code === 'ALT')?.raw_line, null);

const birlesim = ocrSonucunuBirlestir(adaylar, [
  mevcut('RBC', 4), mevcut('HGB', 2), mevcut('CREA', 3), mevcut('PLT', 4),
]);
const kodla = new Map(birlesim.map((satir) => [satir.code, satir]));
assert.deepEqual([kodla.get('RBC')?.status, kodla.get('RBC')?.choice], ['same', 'existing']);
assert.deepEqual([kodla.get('WBC')?.status, kodla.get('WBC')?.choice], ['new', 'scanned']);
assert.deepEqual([kodla.get('HGB')?.status, kodla.get('HGB')?.choice], ['conflict', 'existing']);
assert.deepEqual([kodla.get('CREA')?.status, kodla.get('CREA')?.choice], ['unreadable', 'existing']);
assert.deepEqual([kodla.get('ALT')?.status, kodla.get('ALT')?.choice], ['unreadable', 'unresolved']);
assert.deepEqual([kodla.get('PLT')?.status, kodla.get('PLT')?.choice], ['existing_only', 'existing']);

const kalici = birlestirilmisAnalitler(birlesim);
assert.equal(kalici.some((satir) => 'raw_line' in satir), false, 'Ham OCR satırı kalıcı sonuca sızmamalı.');
assert.equal(kalici.find((satir) => satir.code === 'HGB')?.value, 2, 'Çakışmada mevcut değer varsayılan kalmalı.');
assert.equal(kalici.some((satir) => satir.code === 'ALT'), false, 'Çözülmemiş ?? kalıcı sonuca yazılmamalı.');

console.log('PANEL OPERASYON BİRİM TESTİ — OCR ayrıştırma, merge ve sıfır ham veri kontrolleri geçti.');
