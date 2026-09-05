import { readSheet } from 'read-excel-file/browser';
import writeXlsxFile from 'write-excel-file/browser';

import { csvMetniniCoz, xlsxPaketSinirlariniDogrula } from './stok-aktarim.ts';

export const MUSTERI_SEMA_KIMLIGI = 'VETERITO_CUSTOMER_V1';
export const MUSTERI_AZAMI_SATIR = 1000;
export const MUSTERI_AZAMI_DOSYA = 5 * 1024 * 1024;

type Hucre = string | number | boolean | Date | null;
export type OzelAlanTuru = 'text' | 'number' | 'date' | 'boolean' | 'tag';
export type MusteriHedefAlani = 'ignore' | 'schema_id' | 'external_ref' | 'full_name' | 'phone' | 'email' | 'note' | 'labels' | 'custom';
export type MusteriAlanEslestirmesi = { source: string; target: MusteriHedefAlani; dataType: OzelAlanTuru; key: string };
export type HamMusteriDosyasi = { headers: string[]; rows: Hucre[][]; digest: string; format: 'csv' | 'xlsx'; name: string };
export type MusteriAktarimSatiri = {
  row_no: number; schema_id: string; external_ref: string | null; full_name: string;
  phone: string | null; email: string | null; note: string | null; labels: string[];
  custom_fields: { key: string; label: string; data_type: OzelAlanTuru; value: string }[];
  resolution: string;
};
export type MusteriDisAktarimSatiri = {
  schema_id: string; external_ref: string | null; full_name: string; phone: string | null;
  email: string | null; note: string | null; labels: string[]; custom_data: Record<string, unknown>;
  created_at: string;
};
export type MusteriOzelAlan = { field_key: string; label: string; data_type: OzelAlanTuru };

const TEMEL_BASLIKLAR = [
  'Veterito Şema Kimliği', 'Dış Müşteri No', 'Ad Soyad', 'Telefon', 'E-posta',
  'Klinik İçi Not', 'Etiketler',
] as const;

const ALAN_REHBERI = [
  ['Alan', 'Zorunlu', 'Veri tipi', 'Örnek', 'Açıklama'],
  ['Veterito Şema Kimliği', 'Evet', 'Metin', MUSTERI_SEMA_KIMLIGI, 'Dosyanın Veterito müşteri sözleşmesini belirtir.'],
  ['Dış Müşteri No', 'Önerilir', 'Metin', 'KLINIK-1042', 'Eski sistemdeki kararlı müşteri numarası; tekrar aktarımı güvenli kılar.'],
  ['Ad Soyad', 'Evet', 'Metin', 'Ayşe Yılmaz', '2-120 karakter.'],
  ['Telefon', 'Hayır', 'Telefon', '0532 000 00 00', 'Yalnız eşleşme ipucudur; Veterito hesabına otomatik bağlamaz.'],
  ['E-posta', 'Hayır', 'E-posta', 'ayse@example.com', 'Yalnız eşleşme ipucudur; davet ayrıca kabul edilmelidir.'],
  ['Klinik İçi Not', 'Hayır', 'Metin', 'Sabah aranmayı tercih ediyor', 'Müşteriye gösterilmez; mevcut dolu notu ezmez.'],
  ['Etiketler', 'Hayır', 'Etiket listesi', 'VIP | Kedi sahibi', '| veya ; ile ayrılır; müşteri başına en fazla 20 etiket.'],
  ['Diğer sütunlar', 'Hayır', 'Özel alan', 'Sadakat grubu', 'Eşleme ekranında metin, sayı, tarih, evet/hayır veya etiket seçilir.'],
] as Hucre[][];

function metin(deger: unknown) { return deger instanceof Date ? deger.toISOString().slice(0, 10) : String(deger ?? '').trim(); }
function baslikAnahtari(deger: string) {
  return deger.toLocaleLowerCase('tr-TR').replace(/[ıİ]/g, 'i').normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '');
}
export function ozelAlanAnahtari(deger: string) {
  const anahtar = baslikAnahtari(deger).replace(/^ozel/, '').slice(0, 42);
  return `f_${anahtar || 'alan'}`;
}
function csvHucre(deger: Hucre) {
  let sonuc = metin(deger);
  if (/^[=+\-@]/.test(sonuc)) sonuc = `'${sonuc}`;
  return `"${sonuc.replace(/"/g, '""')}"`;
}
function csvIndir(ad: string, tablo: Hucre[][]) {
  const icerik = `\uFEFF${tablo.map((satir) => satir.map(csvHucre).join(',')).join('\r\n')}`;
  const adres = URL.createObjectURL(new Blob([icerik], { type: 'text/csv;charset=utf-8' }));
  const baglanti = document.createElement('a'); baglanti.href = adres; baglanti.download = ad; baglanti.click();
  URL.revokeObjectURL(adres);
}
function dosyaAdi(klinikAdi: string, ek: string, uzanti: string) {
  const klinik = klinikAdi.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'klinik';
  return `veterito-${klinik}-${ek}-${new Date().toISOString().slice(0, 10)}.${uzanti}`;
}
export async function sha256(tampon: ArrayBuffer) {
  const ozet = await crypto.subtle.digest('SHA-256', tampon);
  return Array.from(new Uint8Array(ozet), (deger) => deger.toString(16).padStart(2, '0')).join('');
}

export async function musteriDosyasiniOku(dosya: File): Promise<HamMusteriDosyasi> {
  if (dosya.size > MUSTERI_AZAMI_DOSYA) throw new Error('Dosya en fazla 5 MB olabilir.');
  const tampon = await dosya.arrayBuffer();
  const format = dosya.name.toLocaleLowerCase('tr-TR').endsWith('.xlsx') ? 'xlsx'
    : dosya.name.toLocaleLowerCase('tr-TR').endsWith('.csv') ? 'csv' : null;
  if (!format) throw new Error('Yalnız CSV veya XLSX dosyası yükleyebilirsiniz.');
  let tablo: Hucre[][];
  if (format === 'xlsx') { xlsxPaketSinirlariniDogrula(tampon); tablo = await readSheet(dosya, 1) as Hucre[][]; }
  else tablo = csvMetniniCoz(await dosya.text());
  if (tablo.length < 2) throw new Error('Dosyada başlık ve en az bir müşteri satırı bulunmalı.');
  if (tablo.length - 1 > MUSTERI_AZAMI_SATIR) throw new Error(`Tek dosyada en fazla ${MUSTERI_AZAMI_SATIR} satır olabilir.`);
  if (tablo[0].length > 64) throw new Error('Dosyada en fazla 64 sütun olabilir.');
  const headers = tablo[0].map(metin);
  if (headers.some((baslik) => !baslik)) throw new Error('Boş sütun başlığı bulunuyor.');
  if (new Set(headers.map(baslikAnahtari)).size !== headers.length) throw new Error('Aynı anlama gelen yinelenen sütun başlığı bulunuyor.');
  return { headers, rows: tablo.slice(1).filter((satir) => satir.some((x) => metin(x))), digest: await sha256(tampon), format, name: dosya.name };
}

export function varsayilanEslestirmeler(headers: string[], tanimlar: MusteriOzelAlan[]): MusteriAlanEslestirmesi[] {
  const bilinen: Record<string, MusteriHedefAlani> = {
    veteritosemakimligi: 'schema_id', schemaid: 'schema_id', semasurumu: 'schema_id',
    dismusterino: 'external_ref', musterino: 'external_ref', customerno: 'external_ref', externalref: 'external_ref',
    adsoyad: 'full_name', fullname: 'full_name', musteriadi: 'full_name', isimsoyisim: 'full_name', ad: 'full_name',
    telefon: 'phone', phone: 'phone', gsm: 'phone', ceptelefonu: 'phone', mobile: 'phone',
    eposta: 'email', email: 'email', mail: 'email',
    klinikicinot: 'note', not: 'note', note: 'note', aciklama: 'note',
    etiketler: 'labels', tags: 'labels', labels: 'labels', etiket: 'labels',
  };
  return headers.map((source) => {
    const anahtar = baslikAnahtari(source);
    const kayitli = tanimlar.find((alan) => alan.field_key === ozelAlanAnahtari(source) || baslikAnahtari(alan.label) === anahtar);
    return { source, target: kayitli ? 'custom' : (bilinen[anahtar] ?? 'ignore'), dataType: kayitli?.data_type ?? 'text', key: kayitli?.field_key ?? ozelAlanAnahtari(source) };
  });
}

export function aktarimSatirlariniOlustur(dosya: HamMusteriDosyasi, eslemeler: MusteriAlanEslestirmesi[], cozumler: Record<number, string> = {}) {
  const adSayisi = eslemeler.filter((x) => x.target === 'full_name').length;
  if (adSayisi !== 1) throw new Error('Tam olarak bir sütun “Ad Soyad” alanına eşlenmelidir.');
  const tekil = ['schema_id', 'external_ref', 'phone', 'email', 'note', 'labels'] as MusteriHedefAlani[];
  for (const hedef of tekil) if (eslemeler.filter((x) => x.target === hedef).length > 1) throw new Error(`${hedef} alanına yalnız bir sütun eşlenebilir.`);
  const indeks = new Map(dosya.headers.map((h, i) => [h, i]));
  const oku = (satir: Hucre[], hedef: MusteriHedefAlani) => {
    const esleme = eslemeler.find((x) => x.target === hedef); return esleme ? metin(satir[indeks.get(esleme.source) ?? -1]) : '';
  };
  return dosya.rows.map((satir, i): MusteriAktarimSatiri => {
    const sema = oku(satir, 'schema_id');
    if (sema && sema !== MUSTERI_SEMA_KIMLIGI) throw new Error(`Satır ${i + 2}: Veterito şema kimliği desteklenmiyor.`);
    const labels = oku(satir, 'labels').split(/[|;]/).map((x) => x.trim()).filter(Boolean);
    const custom_fields = eslemeler.filter((x) => x.target === 'custom').map((x) => ({
      key: x.key, label: x.source.replace(/^Özel:\s*/i, '').replace(/\s*\[[^\]]+]\s*$/, ''), data_type: x.dataType,
      value: metin(satir[indeks.get(x.source) ?? -1]),
    })).filter((x) => x.value);
    return { row_no: i + 2, schema_id: MUSTERI_SEMA_KIMLIGI, external_ref: oku(satir, 'external_ref') || null,
      full_name: oku(satir, 'full_name'), phone: oku(satir, 'phone') || null, email: oku(satir, 'email') || null,
      note: oku(satir, 'note') || null, labels, custom_fields, resolution: cozumler[i + 2] ?? 'auto' };
  });
}

function guvenli(deger: Hucre) { const sonuc = metin(deger); return /^[=+\-@]/.test(sonuc) ? `'${sonuc}` : sonuc; }
function disaAktarimTablosu(satirlar: MusteriDisAktarimSatiri[], tanimlar: MusteriOzelAlan[]) {
  const basliklar = [...TEMEL_BASLIKLAR, ...tanimlar.map((x) => `Özel: ${x.label} [${x.data_type}]`)];
  const satir = (x: MusteriDisAktarimSatiri): Hucre[] => [x.schema_id, x.external_ref, x.full_name, x.phone, x.email, x.note,
    x.labels.join(' | '), ...tanimlar.map((alan) => metin(x.custom_data?.[alan.field_key]))];
  return [basliklar as unknown as Hucre[], ...satirlar.map(satir)];
}
export function musteriCsvIndir(klinikAdi: string, satirlar: MusteriDisAktarimSatiri[], tanimlar: MusteriOzelAlan[], sablon = false) {
  csvIndir(dosyaAdi(klinikAdi, sablon ? 'musteri-sablonu' : 'musteri-listesi', 'csv'), disaAktarimTablosu(satirlar, tanimlar));
}
export function musteriCsvRehberiIndir() { csvIndir('veterito-musteri-alan-rehberi.csv', ALAN_REHBERI); }
export async function musteriXlsxIndir(klinikAdi: string, satirlar: MusteriDisAktarimSatiri[], tanimlar: MusteriOzelAlan[], sablon = false) {
  const ana = disaAktarimTablosu(satirlar, tanimlar).map((satir, satirNo) => satir.map((deger) => ({ value: guvenli(deger), type: String, fontWeight: satirNo === 0 ? 'bold' as const : undefined, backgroundColor: satirNo === 0 ? '#DDF1EA' : undefined })));
  const rehber = ALAN_REHBERI.map((satir, satirNo) => satir.map((deger) => ({ value: guvenli(deger), type: String, fontWeight: satirNo === 0 ? 'bold' as const : undefined, backgroundColor: satirNo === 0 ? '#DDF1EA' : undefined })));
  const belge = writeXlsxFile([
    { data: ana, sheet: 'Veterito Müşteriler', stickyRowsCount: 1, columns: ana[0].map((_, i) => ({ width: i === 2 ? 28 : 20 })) },
    { data: rehber, sheet: 'Veterito Alan Rehberi', stickyRowsCount: 1, columns: [{ width: 28 }, { width: 14 }, { width: 18 }, { width: 28 }, { width: 70 }] },
  ]);
  await belge.toFile(dosyaAdi(klinikAdi, sablon ? 'musteri-sablonu' : 'musteri-listesi', 'xlsx'));
}

export const ornekMusteriSatirlari = (): MusteriDisAktarimSatiri[] => [{
  schema_id: MUSTERI_SEMA_KIMLIGI, external_ref: 'KLINIK-0001', full_name: 'Örnek Müşteri (bu satırı silin)',
  phone: '0532 000 00 00', email: 'ornek@example.com', note: 'Yalnız kliniğiniz görür', labels: ['Örnek'],
  custom_data: {}, created_at: new Date().toISOString(),
}];
