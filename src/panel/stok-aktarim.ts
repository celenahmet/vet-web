import { readSheet } from 'read-excel-file/browser';
import writeXlsxFile from 'write-excel-file/browser';

import type { IlacFormu, UrunBirimi, UrunTuru } from './stok-veri';

export const STOK_AKTARIM_SURUMU = '1';
export const STOK_AKTARIM_AZAMI_SATIR = 1000;
export const STOK_AKTARIM_AZAMI_DOSYA = 5 * 1024 * 1024;
const XLSX_AZAMI_ACILMIS_BOYUT = 25 * 1024 * 1024;
const XLSX_AZAMI_DOSYA_SAYISI = 200;

export type StokAktarimSatiri = {
  row_no: number;
  schema_version: string;
  internal_code: string;
  name: string;
  kind: UrunTuru | string;
  unit: UrunBirimi | string;
  minimum_stock: number | string;
  lot_tracking: boolean | string;
  medicine_form: IlacFormu | string | null;
  active_ingredient: string | null;
  strength: string | null;
  manufacturer: string | null;
  package_quantity: number | string;
  requires_prescription: boolean | string;
  gtin: string | null;
  lot_code: string | null;
  expires_on: string | null;
  opening_quantity: number | string;
};

export type StokDisaAktarimSatiri = Omit<StokAktarimSatiri, 'row_no' | 'opening_quantity'> & {
  current_stock: number;
  opening_quantity?: number | null;
};

type Hucre = string | number | boolean | Date | null;

export const STOK_AKTARIM_BASLIKLARI = [
  'Şema Sürümü', 'İç Kod', 'Ürün Adı', 'Tür', 'Birim', 'Minimum Stok',
  'Lot Takibi', 'İlaç Formu', 'Etken Madde', 'Doz / Konsantrasyon',
  'Üretici', 'Paket Miktarı', 'Reçeteli', 'GTIN', 'Lot Kodu',
  'Son Kullanma Tarihi', 'Mevcut Stok (salt okunur)', 'Açılış Miktarı',
] as const;

const ALANLAR = [
  'schema_version', 'internal_code', 'name', 'kind', 'unit', 'minimum_stock',
  'lot_tracking', 'medicine_form', 'active_ingredient', 'strength', 'manufacturer',
  'package_quantity', 'requires_prescription', 'gtin', 'lot_code', 'expires_on',
  'current_stock', 'opening_quantity',
] as const;

const BASLIK_ESLEME = new Map<string, typeof ALANLAR[number]>([
  ...STOK_AKTARIM_BASLIKLARI.map((baslik, i) => [basligiNormallestir(baslik), ALANLAR[i]] as const),
  ...ALANLAR.map((alan) => [basligiNormallestir(alan), alan] as const),
]);

function basligiNormallestir(deger: unknown) {
  return String(deger ?? '').trim().toLocaleLowerCase('tr-TR')
    .replace(/[ıİ]/g, 'i').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '');
}

function metin(deger: unknown): string {
  return deger instanceof Date ? deger.toISOString().slice(0, 10) : String(deger ?? '').trim();
}

function csvHucre(deger: Hucre): string {
  let sonuc = deger instanceof Date ? deger.toISOString().slice(0, 10) : String(deger ?? '');
  if (/^[=+\-@]/.test(sonuc)) sonuc = `'${sonuc}`;
  return `"${sonuc.replace(/"/g, '""')}"`;
}

export function csvMetniniCoz(icerik: string): Hucre[][] {
  const satirlar: Hucre[][] = [];
  let satir: Hucre[] = [];
  let hucre = '';
  let tirnak = false;
  const temiz = icerik.replace(/^\uFEFF/, '');
  const ilkSatir = temiz.split(/\r?\n/, 1)[0] ?? '';
  const say = (ayrac: string) => {
    let adet = 0; let icerde = false;
    for (let i = 0; i < ilkSatir.length; i += 1) {
      if (ilkSatir[i] === '"') {
        if (icerde && ilkSatir[i + 1] === '"') i += 1;
        else icerde = !icerde;
      } else if (!icerde && ilkSatir[i] === ayrac) adet += 1;
    }
    return adet;
  };
  const ayrac = say(';') > say(',') ? ';' : ',';
  for (let i = 0; i < temiz.length; i += 1) {
    const karakter = temiz[i];
    if (tirnak) {
      if (karakter === '"' && temiz[i + 1] === '"') { hucre += '"'; i += 1; }
      else if (karakter === '"') tirnak = false;
      else hucre += karakter;
    } else if (karakter === '"') tirnak = true;
    else if (karakter === ayrac) { satir.push(hucre); hucre = ''; }
    else if (karakter === '\n') { satir.push(hucre.replace(/\r$/, '')); satirlar.push(satir); satir = []; hucre = ''; }
    else hucre += karakter;
  }
  if (tirnak) throw new Error('CSV dosyasında kapanmamış tırnak bulundu.');
  if (hucre || satir.length) { satir.push(hucre.replace(/\r$/, '')); satirlar.push(satir); }
  return satirlar.filter((degerler) => degerler.some((deger) => metin(deger) !== ''));
}

export function tabloyuAktarimSatirlarinaCevir(tablo: Hucre[][]): StokAktarimSatiri[] {
  if (tablo.length < 2) throw new Error('Dosyada başlık ve en az bir ürün satırı bulunmalı.');
  if (tablo.length - 1 > STOK_AKTARIM_AZAMI_SATIR) throw new Error(`Tek dosyada en fazla ${STOK_AKTARIM_AZAMI_SATIR} satır yüklenebilir.`);
  if (tablo.some((satir) => satir.length > 64)) throw new Error('Dosyada beklenenden fazla sütun bulunuyor.');
  const indeksler = new Map<string, number>();
  tablo[0].forEach((deger, indeks) => {
    const alan = BASLIK_ESLEME.get(basligiNormallestir(deger));
    if (alan && !indeksler.has(alan)) indeksler.set(alan, indeks);
  });
  for (const zorunlu of ['schema_version', 'internal_code', 'name', 'kind', 'unit'] as const) {
    if (!indeksler.has(zorunlu)) throw new Error(`Zorunlu sütun eksik: ${STOK_AKTARIM_BASLIKLARI[ALANLAR.indexOf(zorunlu)]}.`);
  }
  const oku = (satir: Hucre[], alan: typeof ALANLAR[number]) => satir[indeksler.get(alan) ?? -1];
  return tablo.slice(1).filter((satir) => satir.some((deger) => metin(deger) !== '')).map((satir, indeks) => ({
    row_no: indeks + 2,
    schema_version: metin(oku(satir, 'schema_version')),
    internal_code: metin(oku(satir, 'internal_code')),
    name: metin(oku(satir, 'name')),
    kind: metin(oku(satir, 'kind')),
    unit: metin(oku(satir, 'unit')),
    minimum_stock: metin(oku(satir, 'minimum_stock')) || '0',
    lot_tracking: metin(oku(satir, 'lot_tracking')) || 'false',
    medicine_form: metin(oku(satir, 'medicine_form')) || null,
    active_ingredient: metin(oku(satir, 'active_ingredient')) || null,
    strength: metin(oku(satir, 'strength')) || null,
    manufacturer: metin(oku(satir, 'manufacturer')) || null,
    package_quantity: metin(oku(satir, 'package_quantity')) || '1',
    requires_prescription: metin(oku(satir, 'requires_prescription')) || 'false',
    gtin: metin(oku(satir, 'gtin')).replace(/^'/, '') || null,
    lot_code: metin(oku(satir, 'lot_code')) || null,
    expires_on: metin(oku(satir, 'expires_on')) || null,
    opening_quantity: metin(oku(satir, 'opening_quantity')) || '0',
  }));
}

export function xlsxPaketSinirlariniDogrula(tampon: ArrayBuffer) {
  const gorunum = new DataView(tampon);
  let merkez = -1;
  for (let i = Math.max(0, tampon.byteLength - 65_557); i <= tampon.byteLength - 22; i += 1) {
    if (gorunum.getUint32(i, true) === 0x06054b50) merkez = i;
  }
  if (merkez < 0) throw new Error('XLSX paketi bozuk veya desteklenmiyor.');
  const kayitSayisi = gorunum.getUint16(merkez + 10, true);
  const merkezBoyutu = gorunum.getUint32(merkez + 12, true);
  let konum = gorunum.getUint32(merkez + 16, true);
  if (kayitSayisi > XLSX_AZAMI_DOSYA_SAYISI || konum + merkezBoyutu > tampon.byteLength) throw new Error('XLSX paketi güvenli işleme sınırlarını aşıyor.');
  let acilmisToplam = 0;
  for (let i = 0; i < kayitSayisi; i += 1) {
    if (konum + 46 > tampon.byteLength || gorunum.getUint32(konum, true) !== 0x02014b50) throw new Error('XLSX paket dizini bozuk.');
    if ((gorunum.getUint16(konum + 8, true) & 1) !== 0) throw new Error('Parolalı XLSX dosyaları desteklenmiyor.');
    acilmisToplam += gorunum.getUint32(konum + 24, true);
    if (acilmisToplam > XLSX_AZAMI_ACILMIS_BOYUT) throw new Error('XLSX açılmış boyutu güvenli işleme sınırını aşıyor.');
    konum += 46 + gorunum.getUint16(konum + 28, true) + gorunum.getUint16(konum + 30, true) + gorunum.getUint16(konum + 32, true);
  }
}

export async function stokDosyasiniOku(dosya: File): Promise<StokAktarimSatiri[]> {
  if (dosya.size > STOK_AKTARIM_AZAMI_DOSYA) throw new Error('Dosya en fazla 5 MB olabilir.');
  const uzanti = dosya.name.toLocaleLowerCase('tr-TR');
  let tablo: Hucre[][];
  if (uzanti.endsWith('.csv')) tablo = csvMetniniCoz(await dosya.text());
  else if (uzanti.endsWith('.xlsx')) {
    xlsxPaketSinirlariniDogrula(await dosya.arrayBuffer());
    tablo = await readSheet(dosya, 1) as Hucre[][];
  }
  else throw new Error('Yalnız CSV veya XLSX dosyası yükleyebilirsiniz.');
  return tabloyuAktarimSatirlarinaCevir(tablo);
}

function indirmeAdi(klinikAdi: string, ek: string, uzanti: string) {
  const ad = klinikAdi.toLocaleLowerCase('tr-TR').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'klinik';
  return `${ad}-${ek}-${new Date().toISOString().slice(0, 10)}.${uzanti}`;
}

function disaAktarimDegerleri(satirlar: StokDisaAktarimSatiri[]): Hucre[][] {
  return satirlar.map((satir) => [
    satir.schema_version, satir.internal_code, satir.name, satir.kind, satir.unit,
    satir.minimum_stock, satir.lot_tracking, satir.medicine_form, satir.active_ingredient,
    satir.strength, satir.manufacturer, satir.package_quantity, satir.requires_prescription,
    satir.gtin, satir.lot_code, satir.expires_on, satir.current_stock, satir.opening_quantity ?? null,
  ]);
}

export function stokCsvIndir(klinikAdi: string, satirlar: StokDisaAktarimSatiri[], sablon = false) {
  const tablo: Hucre[][] = [Array.from(STOK_AKTARIM_BASLIKLARI), ...disaAktarimDegerleri(satirlar)];
  const icerik = `\uFEFF${tablo.map((satir) => satir.map(csvHucre).join(',')).join('\r\n')}`;
  const adres = URL.createObjectURL(new Blob([icerik], { type: 'text/csv;charset=utf-8' }));
  const baglanti = document.createElement('a');
  baglanti.href = adres;
  baglanti.download = indirmeAdi(klinikAdi, sablon ? 'urun-stok-sablonu' : 'urun-stok-listesi', 'csv');
  baglanti.click();
  URL.revokeObjectURL(adres);
}

export function stokAktarimHataRaporuIndir(klinikAdi: string, hatalar: { row_no: number; message: string }[]) {
  const icerik = `\uFEFF${[['Satır', 'Hata'], ...hatalar.map((hata) => [hata.row_no, hata.message])]
    .map((satir) => satir.map((deger) => csvHucre(deger)).join(',')).join('\r\n')}`;
  const adres = URL.createObjectURL(new Blob([icerik], { type: 'text/csv;charset=utf-8' }));
  const baglanti = document.createElement('a');
  baglanti.href = adres;
  baglanti.download = indirmeAdi(klinikAdi, 'urun-stok-hata-raporu', 'csv');
  baglanti.click();
  URL.revokeObjectURL(adres);
}

export async function stokXlsxIndir(klinikAdi: string, satirlar: StokDisaAktarimSatiri[], sablon = false) {
  const guvenli = (deger: Hucre) => {
    const sonuc = deger instanceof Date ? deger.toISOString().slice(0, 10) : String(deger ?? '');
    return /^[=+\-@]/.test(sonuc) ? `'${sonuc}` : sonuc;
  };
  const belge = writeXlsxFile([
    STOK_AKTARIM_BASLIKLARI.map((baslik) => ({ value: baslik, fontWeight: 'bold' as const, backgroundColor: '#DDF1EA' })),
    ...disaAktarimDegerleri(satirlar).map((satir) => satir.map((deger) => ({ value: guvenli(deger), type: String }))),
  ], {
    sheet: 'Ürün ve stok',
    stickyRowsCount: 1,
    columns: STOK_AKTARIM_BASLIKLARI.map((_, indeks) => ({ width: [12, 18, 28, 14, 14, 15, 14, 18, 24, 22, 22, 16, 12, 18, 18, 20, 22, 18][indeks] })),
  });
  await belge.toFile(indirmeAdi(klinikAdi, sablon ? 'urun-stok-sablonu' : 'urun-stok-listesi', 'xlsx'));
}

export async function dosyaOzetiniHesapla(dosya: File): Promise<string> {
  if (!crypto.subtle) throw new Error('Güvenli dosya özeti bu tarayıcıda desteklenmiyor.');
  const ozet = await crypto.subtle.digest('SHA-256', await dosya.arrayBuffer());
  return Array.from(new Uint8Array(ozet), (deger) => deger.toString(16).padStart(2, '0')).join('');
}

export const bosStokAktarimOrnegi = (): StokDisaAktarimSatiri[] => [{
  schema_version: STOK_AKTARIM_SURUMU,
  internal_code: 'ORNEK-001',
  name: 'Örnek ürün (bu satırı silin)',
  kind: 'consumable',
  unit: 'piece',
  minimum_stock: 5,
  lot_tracking: false,
  medicine_form: null,
  active_ingredient: null,
  strength: null,
  manufacturer: null,
  package_quantity: 1,
  requires_prescription: false,
  gtin: null,
  lot_code: null,
  expires_on: null,
  current_stock: 0,
  opening_quantity: 0,
}];
