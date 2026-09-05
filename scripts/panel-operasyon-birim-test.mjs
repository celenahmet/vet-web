import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { readSheet as xlsxSayfasiniOku } from 'read-excel-file/node';
import writeXlsxFile from 'write-excel-file/node';

import {
  birlestirilmisAnalitler,
  cihazAdaylariniNormallestir,
  ocrMetniniCoz,
  ocrSonucunuBirlestir,
} from '../src/panel/lab-ocr.ts';
import { stokEtiketiYazdirmaHtml } from '../src/panel/stok-etiketi-yazdir.ts';
import { stokKameraHataMesaji } from '../src/panel/stok-kamera.ts';
import { receteHastalariniFiltrele } from '../src/panel/recete-hasta-arama.ts';
import { stokKodTurunuNormallestir, ureticiKoduGtinOlabilir } from '../src/panel/stok-kod-turu.ts';
import {
  csvMetniniCoz, STOK_AKTARIM_BASLIKLARI, tabloyuAktarimSatirlarinaCevir,
  xlsxPaketSinirlariniDogrula,
} from '../src/panel/stok-aktarim.ts';
import { sahiplendirmeIlanlariniFiltreleSirala } from '../src/panel/sahiplendirme-liste.ts';
import { duyurulariFiltrele } from '../src/panel/duyuru-liste.ts';
import { musterileriFiltrele, hastalariFiltrele, olasiDefterHastasiEslesmeleri } from '../src/panel/klinik-kayit-arama.ts';
import { randevulariFiltrele } from '../src/panel/randevu-liste.ts';
import { guvenliDisWebAdresi } from '../src/lib/safe-url.ts';
import { ocrGorselBoyutunuOku } from '../src/panel/ocr-gorsel-guvenligi.ts';

assert.equal(guvenliDisWebAdresi('https://klinik.example/yol'), 'https://klinik.example/yol',
  'HTTPS klinik web adresi tıklanabilir kalmalı.');
assert.equal(guvenliDisWebAdresi('javascript:alert(1)'), null,
  'Çalıştırılabilir URL şeması kamusal klinik sayfasında bağlantıya dönüşmemeli.');
assert.equal(guvenliDisWebAdresi('http://klinik.example'), null,
  'Şifresiz HTTP klinik web adresi bağlantıya dönüşmemeli.');

const pngBasligi = new Uint8Array(24);
pngBasligi.set([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], 0);
pngBasligi.set([0x49, 0x48, 0x44, 0x52], 12);
pngBasligi.set([0, 0, 6, 64, 0, 0, 4, 176], 16);
assert.deepEqual(ocrGorselBoyutunuOku(pngBasligi, 'image/png'),
  { width: 1600, height: 1200, format: 'png' },
  'OCR güvenlik kapısı görüntü boyutunu dosyanın gerçek başlığından okumalı.');
assert.equal(ocrGorselBoyutunuOku(pngBasligi, 'image/jpeg'), null,
  'OCR güvenlik kapısı sahte MIME etiketiyle gerçek dosya imzası uyuşmazlığını reddetmeli.');

const platformMusterileri = [{ user_id: 'u1', display_name: 'İlker Işık', note: 'Kontrol listesi' }];
const defterMusterileri = [{ id: 'd1', full_name: 'Ayşe Yılmaz', phone: '905322221100', email: 'ayse@example.com', note: null }];
assert.equal(musterileriFiltrele(platformMusterileri, defterMusterileri, 'ışık', 'platform').platform.length, 1,
  'Müşteri araması Türkçe I/İ eşleşmesini ve kayıt kaynağını korumalı.');
assert.equal(musterileriFiltrele(platformMusterileri, defterMusterileri, '532', 'ledger').defter.length, 1,
  'Klinik defteri müşterisi telefonun bir bölümüyle bulunabilmeli.');
const platformHastalari = [{ pet_id: 'p1', pet_name: 'Zeytin', owner_name: 'Rümeysa Büyük', species_code: 'cat' }];
const defterHastalari = [{ id: 'p2', name: 'Paşa', customer_id: 'd1', species_code: 'dog', microchip_no: '900123456789012', note: 'Golden Retriever' }];
assert.equal(hastalariFiltrele(platformHastalari, defterHastalari, () => 'Ayşe Yılmaz', () => 'Köpek', 'golden', 'ledger').defter.length, 1,
  'Hasta araması klinik defterindeki not alanını da taramalı.');
assert.equal(hastalariFiltrele(platformHastalari, defterHastalari, () => 'Ayşe Yılmaz', () => 'Köpek', '345678', 'ledger').defter.length, 1,
  'Hasta araması mikroçip numarasının bir bölümüyle çalışmalı.');
assert.equal(olasiDefterHastasiEslesmeleri(
  { pet_id: 'p3', pet_name: 'Paşa', owner_name: 'Ayşe Yılmaz', species_code: 'dog' },
  defterHastalari, () => 'Ayşe Yılmaz',
).length, 1, 'Aynı hasta ve sahip adına ait olası klinik kaydı ikinci kayıt açılmadan görünmeli.');

const randevular = [
  { id: 'r1', owner_name: 'İlker Işık', pet_name: 'Misket', service_name: 'Muayene', clinic_note: 'Kontrol', note: null, starts_at: '2026-09-01T10:00:00Z', proposed_at: null },
  { id: 'r2', owner_name: 'Ayşe', pet_name: 'Paşa', service_name: 'Aşı', clinic_note: null, note: null, starts_at: '2026-09-03T10:00:00Z', proposed_at: null },
];
assert.deepEqual(randevulariFiltrele(randevular, 'ışık', 'all', new Date('2026-09-01T08:00:00Z')).map((r) => r.id), ['r1'],
  'Randevu araması sahip, hasta, hizmet ve not alanlarında Türkçe eşleşmeli.');
assert.deepEqual(randevulariFiltrele(randevular, '', 'upcoming', new Date('2026-09-02T08:00:00Z')).map((r) => r.id), ['r2'],
  'Yaklaşan randevu filtresi geçmiş kayıtları dışarıda bırakmalı.');
assert.deepEqual(randevulariFiltrele(randevular, '', 'week', new Date('2026-09-02T08:00:00Z')).map((r) => r.id), ['r1', 'r2'],
  'Haftalık randevu filtresi pazartesi-pazar aralığını göstermeli.');

const ornekDuyurular = [
  { body: 'İstanbul kliniğimiz bayramda açıktır', audience: 'customers', status: 'sent', delivery_kind: 'announcement', target_city: 'İstanbul', target_species: 'cat' },
  { body: 'Randevunuz yarın', audience: 'customers', status: 'draft', delivery_kind: 'notification', target_city: null, target_species: null },
];
assert.equal(
  duyurulariFiltrele(ornekDuyurular, { arama: 'İSTANBUL', durum: 'all', teslim: 'all' }, { customers: 'Müşterilerinize' }, { cat: 'Kedi' }).length,
  1,
  'Duyuru araması Türkçe büyük/küçük harf ve hedef filtrelerinde çalışmalı.',
);
assert.equal(
  duyurulariFiltrele(ornekDuyurular, { arama: '', durum: 'draft', teslim: 'notification' }, { customers: 'Müşterilerinize' }, { cat: 'Kedi' }).length,
  1,
  'Duyuru durum ve gönderim türü filtreleri birlikte uygulanmalı.',
);

const ornekIlanlar = [
  { id: '1', title: 'İnci yuva arıyor', species_code: 'cat', status: 'published', created_at: '2026-08-30T10:00:00Z', city: 'İstanbul', district: 'Kadıköy' },
  { id: '2', title: 'Cesur için sıcak yuva', species_code: 'dog', status: 'pending', created_at: '2026-08-31T10:00:00Z', city: 'Ankara', district: 'Çankaya' },
  { id: '3', title: 'Misket sahiplendirildi', species_code: 'cat', status: 'adopted', created_at: '2026-08-29T10:00:00Z', city: 'İzmir', district: 'Karşıyaka' },
];
const ornekBasvurular = [{ listing_id: '1' }, { listing_id: '1' }, { listing_id: '2' }];
assert.deepEqual(
  sahiplendirmeIlanlariniFiltreleSirala(ornekIlanlar, ornekBasvurular, { arama: 'İSTANBUL', durum: 'all', tur: 'all', siralama: 'newest' }, { cat: 'Kedi', dog: 'Köpek' }).map((ilan) => ilan.id),
  ['1'],
  'Sahiplendirme araması Türkçe büyük/küçük harf ve konum alanında çalışmalı.',
);
assert.deepEqual(
  sahiplendirmeIlanlariniFiltreleSirala(ornekIlanlar, ornekBasvurular, { arama: '', durum: 'published', tur: 'cat', siralama: 'newest' }, { cat: 'Kedi', dog: 'Köpek' }).map((ilan) => ilan.id),
  ['1'],
  'Sahiplendirme durum ve tür filtreleri birlikte uygulanmalı.',
);
assert.deepEqual(
  sahiplendirmeIlanlariniFiltreleSirala(ornekIlanlar, ornekBasvurular, { arama: '', durum: 'all', tur: 'all', siralama: 'applications' }, { cat: 'Kedi', dog: 'Köpek' }).map((ilan) => ilan.id),
  ['1', '2', '3'],
  'Başvuru sıralaması en çok başvurusu olan ilanı üste taşımalı.',
);

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
].join('\n'), ['RBC', 'WBC', 'HGB', 'CREA', 'ALT', 'rbc', ' RBC ']);

assert.equal(adaylar.filter((satir) => satir.code === 'RBC').length, 1, 'Yinelenen panel kodu tek OCR adayı üretmeli.');
assert.equal(adaylar.find((satir) => satir.code === 'RBC')?.value, 4);
assert.equal(adaylar.find((satir) => satir.code === 'CREA')?.value, null);
assert.equal(adaylar.find((satir) => satir.code === 'ALT')?.raw_line, null);

const cihazAdayi = cihazAdaylariniNormallestir([{
  ...adaylar[0], code: 'RBC%', value: 4, unit: 'raw', method_name: 'browser_on_device_ocr',
}], [{ id: 'mapping-1', device_id: 'device-1', raw_code: 'RBC%', canonical_code: 'RBC',
  raw_unit: 'raw', canonical_unit: '10^12/L', conversion_factor: 1.5,
  method_name: 'Impedance', is_active: true }]);
assert.deepEqual(
  [cihazAdayi[0]?.code, cihazAdayi[0]?.value, cihazAdayi[0]?.unit, cihazAdayi[0]?.method_name],
  ['RBC', 6, '10^12/L', 'Impedance'],
  'Web OCR cihaz eşlemesi kod, katsayı, birim ve metodu birlikte uygulamalı.',
);
assert.throws(() => cihazAdaylariniNormallestir([
  { ...adaylar[0], code: 'RBC-A', value: 4 }, { ...adaylar[0], code: 'RBC-B', value: 5 },
], [
  { id: 'mapping-a', device_id: 'device-1', raw_code: 'RBC-A', canonical_code: 'RBC',
    raw_unit: null, canonical_unit: null, conversion_factor: 1, method_name: null, is_active: true },
  { id: 'mapping-b', device_id: 'device-1', raw_code: 'RBC-B', canonical_code: 'RBC',
    raw_unit: null, canonical_unit: null, conversion_factor: 1, method_name: null, is_active: true },
]), /Aynı kanonik analite/, 'Web OCR çelişkili iki cihaz değerini sessizce birleştirmemeli.');
assert.throws(() => cihazAdaylariniNormallestir([
  { ...adaylar[0], code: 'GLU', unit: null },
], [
  { id: 'mapping-mg', device_id: 'device-1', raw_code: 'GLU', canonical_code: 'GLU',
    raw_unit: 'mg/dL', canonical_unit: 'mg/dL', conversion_factor: 1, method_name: null, is_active: true },
  { id: 'mapping-mmol', device_id: 'device-1', raw_code: 'GLU', canonical_code: 'GLU',
    raw_unit: 'mmol/L', canonical_unit: 'mmol/L', conversion_factor: 1, method_name: null, is_active: true },
]), /birden fazla birim eşlemesi/, 'Web OCR birimi okunmayan çoklu eşlemeyi tahmin etmemeli.');
assert.throws(() => cihazAdaylariniNormallestir([
  { ...adaylar[0], code: 'RBC-A', value: 4, unit: 'g/dL' },
  { ...adaylar[0], code: 'RBC-B', value: 4, unit: 'mg/dL' },
], [
  { id: 'mapping-c', device_id: 'device-1', raw_code: 'RBC-A', canonical_code: 'RBC',
    raw_unit: null, canonical_unit: null, conversion_factor: 1, method_name: null, is_active: true },
  { id: 'mapping-d', device_id: 'device-1', raw_code: 'RBC-B', canonical_code: 'RBC',
    raw_unit: null, canonical_unit: null, conversion_factor: 1, method_name: null, is_active: true },
]), /Aynı kanonik analite/, 'Web OCR aynı sayıyı farklı birimle yinelenen veri saymamalı.');

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

const etiketBelgesi = stokEtiketiYazdirmaHtml({
  outerHTML: '<div class="pnl-urun-etiketi"><small>Patili Dostlar Veteriner Kliniği</small></div>',
});
assert.match(etiketBelgesi, /@page \{ size: 100mm 50mm; margin: 0; \}/,
  'Çalışan etiket üreticisi yazıcıya tek etiketlik özel sayfa ölçüsü vermeli.');
assert.equal((etiketBelgesi.match(/Patili Dostlar Veteriner Kliniği/g) ?? []).length, 1,
  'Klinik adı yazdırma belgesine kaybolmadan ve yinelenmeden taşınmalı.');
const receteHastalari = [
  { pet_id: '1', pet_name: 'Zeytin', owner_name: 'Rümeysa Büyük' },
  { pet_id: '2', pet_name: 'Misket', owner_name: 'İlker Işık' },
];
assert.deepEqual(receteHastalariniFiltrele(receteHastalari, 'rümeysa').map((satir) => satir.pet_id), ['1'],
  'Reçete araması müşteri/sahip adıyla hastayı bulmalı.');
assert.deepEqual(receteHastalariniFiltrele(receteHastalari, 'misket').map((satir) => satir.pet_id), ['2'],
  'Reçete araması hasta adıyla kaydı bulmalı.');
assert.deepEqual(receteHastalariniFiltrele(receteHastalari, 'ışık').map((satir) => satir.pet_id), ['2'],
  'Reçete araması Türkçe I/İ harflerini doğru eşlemeli.');
assert.equal(stokKodTurunuNormallestir('EAN_13', '8690506076379'), 'ean13',
  'ZXing EAN_13 adı sunucunun ean13 sözlüğüne çevrilmeli.');
assert.equal(stokKodTurunuNormallestir('qr_code', 'P1234567890'), 'qr',
  'Tarayıcı qr_code adı sunucunun qr sözlüğüne çevrilmeli.');
assert.equal(stokKodTurunuNormallestir('itf', '12345'), 'unknown',
  '14 hane olmayan genel ITF kodu yanlışlıkla ITF-14 diye kaydedilmemeli.');
assert.equal(ureticiKoduGtinOlabilir('ean13', '8690506076379'), true,
  'Geçerli EAN-13 yeni ürünün GTIN alanına taşınabilmeli.');
assert.equal(ureticiKoduGtinOlabilir('qr', '8690506076379'), false,
  'Sayısal QR içeriği sırf rakam diye üretici GTIN’i sayılmamalı.');

const stokCsv = [
  'Şema Sürümü;İç Kod;Ürün Adı;Tür;Birim;Minimum Stok;Lot Takibi;İlaç Formu;Etken Madde;Doz / Konsantrasyon;Üretici;Paket Miktarı;Reçeteli;GTIN;Lot Kodu;Son Kullanma Tarihi;Mevcut Stok (salt okunur);Açılış Miktarı',
  '1;ILAC-01;Örnek İlaç;medicine;box;2,5;true;tablet;Etken;10 mg;Üretici;1;true;8690506076379;LOT-1;2027-12-31;0;4,5',
].join('\r\n');
const stokSatirlari = tabloyuAktarimSatirlarinaCevir(csvMetniniCoz(stokCsv));
assert.deepEqual(
  [stokSatirlari[0]?.row_no, stokSatirlari[0]?.internal_code, stokSatirlari[0]?.minimum_stock, stokSatirlari[0]?.opening_quantity],
  [2, 'ILAC-01', '2,5', '4,5'],
  'Noktalı virgüllü CSV içindeki ondalık virgüller sütunları kaydırmadan okunmalı.',
);
const xlsxBelgesi = writeXlsxFile([
  STOK_AKTARIM_BASLIKLARI.map((deger) => ({ value: deger, type: String })),
  csvMetniniCoz(stokCsv)[1].map((deger) => ({ value: deger, type: String })),
], { sheet: 'Ürün ve stok' });
const xlsxTamponu = await xlsxBelgesi.toBuffer();
xlsxPaketSinirlariniDogrula(xlsxTamponu.buffer.slice(xlsxTamponu.byteOffset, xlsxTamponu.byteOffset + xlsxTamponu.byteLength));
assert.throws(
  () => xlsxPaketSinirlariniDogrula(new ArrayBuffer(32)),
  /bozuk|desteklenmiyor/i,
  'Bozuk XLSX paketi ayrıştırıcıya ulaşmadan reddedilmeli.',
);
const xlsxSatirlari = tabloyuAktarimSatirlarinaCevir(await xlsxSayfasiniOku(xlsxTamponu, 1));
assert.equal(xlsxSatirlari[0]?.name, 'Örnek İlaç', 'XLSX üretme ve yeniden okuma Türkçe ürün adını korumalı.');
assert.throws(
  () => tabloyuAktarimSatirlarinaCevir(csvMetniniCoz('Şema Sürümü,İç Kod,Tür,Birim\n1,KOD,retail,piece')),
  /en az bir ürün|Zorunlu sütun|başlık/i,
  'Eksik ürün dosyası sessizce içeri alınmamalı.',
);
for (const [ad, beklenen] of [
  ['NotAllowedError', 'Kamera izni bu site için engellenmiş.'],
  ['NotFoundError', 'Kullanılabilir kamera bulunamadı.'],
  ['NotReadableError', 'Kamera başka bir uygulama tarafından kullanılıyor.'],
]) {
  const hata = new Error('ham tarayıcı hatası'); hata.name = ad;
  assert.match(stokKameraHataMesaji(hata), new RegExp(`^${beklenen.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`),
    `${ad} kullanıcıya kendi çözümünü açıklamalı.`);
}

// Kritik mobil–web eşlik kapıları bileşen ağacından yanlışlıkla çıkarılırsa build
// yine geçebilir. Bu sözleşme kontrolleri menü/işlem bağlarının gerçekten panelde
// kaldığını ölçer; canlı RPC davranışı mobil repodaki kabul testiyle ayrıca ölçülür.
const panel = readFileSync(new URL('../src/panel/Panel.tsx', import.meta.url), 'utf8');
const panelGiris = readFileSync(new URL('../src/panel/PanelGiris.tsx', import.meta.url), 'utf8');
const bolumler = readFileSync(new URL('../src/panel/bolumler.ts', import.meta.url), 'utf8');
const entegrasyon = readFileSync(new URL('../src/panel/PanelEntegrasyonlar.tsx', import.meta.url), 'utf8');
const recete = readFileSync(new URL('../src/panel/PanelReceteler.tsx', import.meta.url), 'utf8');
const mesaj = readFileSync(new URL('../src/panel/PanelMesajlar.tsx', import.meta.url), 'utf8');
const mesajVeri = readFileSync(new URL('../src/panel/mesaj-veri.ts', import.meta.url), 'utf8');
const panelBolumler = readFileSync(new URL('../src/panel/PanelBolumler.tsx', import.meta.url), 'utf8');
const defter = readFileSync(new URL('../src/panel/PanelDefter.tsx', import.meta.url), 'utf8');
const webSitesi = readFileSync(new URL('../src/panel/PanelWebSitesi.tsx', import.meta.url), 'utf8');
const klinikSayfasi = readFileSync(new URL('../src/pages/ClinicPage.tsx', import.meta.url), 'utf8');
const klinikSayfasiCss = readFileSync(new URL('../src/pages/ClinicPage.css', import.meta.url), 'utf8');
const turkce = JSON.parse(readFileSync(new URL('../src/locales/tr.json', import.meta.url), 'utf8'));
const stok = readFileSync(new URL('../src/panel/PanelStok.tsx', import.meta.url), 'utf8');
const stokEtiketi = readFileSync(new URL('../src/panel/StokEtiketi.tsx', import.meta.url), 'utf8');
const stokEtiketiYazdir = readFileSync(new URL('../src/panel/stok-etiketi-yazdir.ts', import.meta.url), 'utf8');
const stokKamera = readFileSync(new URL('../src/panel/stok-kamera.ts', import.meta.url), 'utf8');
const stokKodTuru = readFileSync(new URL('../src/panel/stok-kod-turu.ts', import.meta.url), 'utf8');
const medya = readFileSync(new URL('../src/panel/medya-veri.ts', import.meta.url), 'utf8');
const galeri = readFileSync(new URL('../src/panel/KlinikGaleri.tsx', import.meta.url), 'utf8');
const ekip = readFileSync(new URL('../src/panel/PanelEkip.tsx', import.meta.url), 'utf8');
const laboratuvar = readFileSync(new URL('../src/panel/PanelLaboratuvar.tsx', import.meta.url), 'utf8');
const diyalog = readFileSync(new URL('../src/panel/Diyalog.tsx', import.meta.url), 'utf8');
const labVeri = readFileSync(new URL('../src/panel/lab-veri.ts', import.meta.url), 'utf8');
const labCihazlari = readFileSync(new URL('../src/panel/LabCihazlari.tsx', import.meta.url), 'utf8');
const musteriler = readFileSync(new URL('../src/panel/PanelMusteriler.tsx', import.meta.url), 'utf8');
const hastalar = readFileSync(new URL('../src/panel/PanelHastalar.tsx', import.meta.url), 'utf8');
const panelVeri = readFileSync(new URL('../src/panel/veri.ts', import.meta.url), 'utf8');
const panelCss = readFileSync(new URL('../src/panel/panel.css', import.meta.url), 'utf8');
const pano = readFileSync(new URL('../src/panel/PanelPano.tsx', import.meta.url), 'utf8');
const vercel = readFileSync(new URL('../vercel.json', import.meta.url), 'utf8');
const envOrnegi = readFileSync(new URL('../.env.example', import.meta.url), 'utf8');
const paket = readFileSync(new URL('../package.json', import.meta.url), 'utf8');
const ocrVarliklari = readFileSync(new URL('./ocr-varliklarini-hazirla.mjs', import.meta.url), 'utf8');
assert.ok(hastalar.includes('ikinci müşteri kaydı açmayın'),
  'Hasta formu uygulama üyesi için sessiz ikiz kaydı önlemeli.');
assert.ok(!hastalar.includes('onun adına bir kayıt açın'),
  'Hasta formu mükerrer defter müşterisi önermemeli.');

assert.match(panelGiris, /import logoUrl from '\.\.\/assets\/logo\.webp'/,
  'Klinik girişi açık zemin Veterito marka varlığını yeniden kullanmalı.');
assert.match(panelGiris, /className="pnl-giris-marka"[\s\S]*src=\{logoUrl\}[\s\S]*alt="Veterito"/,
  'Klinik giriş kartının üstünde erişilebilir Veterito logosu bulunmalı.');
assert.match(panel, /acikMenuGrubu[\s\S]*aria-expanded=\{acik\}[\s\S]*pnl-menu-alt/,
  'Uzun web menüsü alan gruplarıyla açılıp kapanmalı; alt menüler ekran dışında kaybolmamalı.');
assert.match(panelCss, /\.pnl-giris-marka img\s*\{[^}]*height:\s*34px;[^}]*max-width:\s*100%;/,
  'Giriş logosu kart sınırlarında doğal oranını korumalı.');

assert.match(bolumler, /anahtar:\s*'iletisim',\s*ad:\s*'Operasyonel işlemler'/, 'Günlük işlemler açık adıyla ayrı menü olmalı.');
assert.match(bolumler, /anahtar:\s*'entegrasyonlar',\s*ad:\s*'Entegrasyonlar'/, 'Teknik entegrasyonlar solda ayrı menü olmalı.');
assert.match(panel, /gorunum="communications"\s+git=\{bolumeGit\}/, 'Operasyon menüsü günlük görünüm ve çalışan bölüm geçişlerine bağlanmalı.');
assert.match(panel, /gorunum="technical"/, 'Teknik entegrasyonlar ayrı görünümde kalmalı.');
assert.match(entegrasyon, /Entegrasyon ayarlarını aç[\s\S]*acik=\{ayarPenceresiAcik\}[\s\S]*baslik="Entegrasyon ayarları"/,
  'Hassas entegrasyon ayarları aynı sekmede, odaklı diyalog içinde açılmalı.');
assert.match(entegrasyon, /pnl-entegrasyon-kolay-grid[\s\S]*setAyarPenceresiAcik\(true\)/,
  'Özet entegrasyon kartları seçilen sistemi odaklı ayar penceresinde açmalı.');
for (const alan of ['Sağlayıcı / cihaz sistemi', 'API temel adresi', 'Genel entegrasyon ayarları', 'Gizli kimlik bilgileri']) {
  assert.match(entegrasyon, new RegExp(alan), `Entegrasyon ekranında ${alan} bulunmalı.`);
}
assert.match(entegrasyon, /type="password"\s+autoComplete="new-password"/, 'Gizli entegrasyon alanları parola girdisi olmalı.');
assert.match(entegrasyon, /••••••••/, 'Kaydedilmiş gizli değerler gerçek değer yerine sabit maskeyle gösterilmeli.');
assert.match(entegrasyon, /Entegrasyon ayarlarını güvenli kaydet/, 'Teknik ayar kaydetme eylemi açık adlandırılmalı.');
for (const hedef of ['randevular', 'laboratuvar', 'receteler', 'stok', 'entegrasyonlar']) {
  assert.match(entegrasyon, new RegExp(`git\\('${hedef}'\\)`), `Operasyon merkezi ${hedef} ekranına işlevsel geçiş vermeli.`);
}
assert.match(entegrasyon, /seciliKanalHazir/, 'Hazır olmayan sağlayıcıda ileti gönderimi açılmamalı.');
assert.match(entegrasyon, /Kuyruğa alındı, gönderildi anlamına gelmez/, 'Kuyruk ve teslim durumu açıkça ayrılmalı.');
assert.match(entegrasyon, /pnl-yeni-modul-ozetleri/, 'Yeni operasyon ve entegrasyon özetleri kendi duyarlı ızgarasını kullanmalı.');
assert.match(entegrasyon, /pnl-operasyon-tablo/, 'İletişim tercihleri ve teslim listeleri dar panelde kart düzenine geçebilmeli.');
assert.match(entegrasyon, /aria-expanded=\{acik\}[\s\S]*aria-controls=\{`entegrasyon-\$\{tur\}-ayrinti`\}/,
  'Entegrasyon kartı açık durumunu ve ayrıntı ilişkisini yardımcı teknolojilere bildirmeli.');
for (const etiket of ['Alıcı', 'Amaç / kanal', 'Tercih', 'Hedef', 'Kanal / amaç', 'Şablon', 'Durum', 'Zaman', 'İşlem']) {
  assert.match(entegrasyon, new RegExp(`data-label="${etiket}"`), `Dar operasyon kaydında ${etiket} alan etiketi korunmalı.`);
}
assert.match(panelCss, /@media \(max-width: 1380px\)[\s\S]*\.pnl-yeni-modul-ozetleri[\s\S]*\.pnl-operasyon-kisayollari/,
  'Dizüstü kırılımı özet ve kısayolları panel içeriği sıkışmadan iki sütuna indirmeli.');
assert.match(panelCss, /\.pnl-operasyon-kisayollari strong\s*\{[^}]*font-size:\s*15px/,
  'Günlük operasyon adları yardımcı metin boyutunda kalmamalı.');
assert.match(panelCss, /\.pnl-operasyon-kisayollari small\s*\{[^}]*font-size:\s*12\.5px/,
  'Günlük operasyon açıklamaları okunabilir masaüstü boyutunda kalmalı.');
assert.match(panelCss, /\.pnl-operasyon-kisayol-widget \.pnl-widget-basi\s*\{[^}]*min-height:\s*62px;[^}]*border-bottom:/,
  'Operasyon bölümü başlığı altındaki eylem kartlarından yüzey ve ayırıcıyla ayrılmalı.');
assert.match(panelCss, /\.pnl-operasyon-kisayollari > button\s*\{[^}]*min-height:\s*86px;[^}]*box-shadow:/,
  'Operasyon geçişleri sıkışık satırlar yerine belirgin, dengeli kartlar olmalı.');
assert.match(diyalog, /boyut\?: 'normal' \| 'genis' \| 'panorama'/,
  'Karmaşık operasyon pencereleri içerik yoğunluğuna uygun genişlik seçebilmeli.');
assert.match(diyalog, /oncekiOdak[\s\S]*focus\(\{ preventScroll: true \}\)/,
  'Diyalog kapandığında kullanıcı odağı pencereyi açan eyleme dönmeli.');
assert.match(diyalog, /data-dialog-ilk-odak[\s\S]*input:not/,
  'Diyalog açıldığında kapatma ikonuna değil ilk işlem alanına odaklanmalı.');
assert.match(panelCss, /\.pnl-diyalog-basi[\s\S]*position: sticky[\s\S]*\.pnl-diyalog-eylem[\s\S]*position: sticky/,
  'Uzun pencerelerde bağlam başlığı ve ana eylemler görünür kalmalı.');
assert.match(panelCss, /\.pnl-diyalog\s*\{[^}]*position:\s*fixed;[^}]*top:\s*50%;[^}]*left:\s*50%;[^}]*transform:\s*translate\(-50%,\s*-50%\);/,
  'Panel diyalogları tarayıcı varsayılanından bağımsız olarak görünüm alanının gerçek merkezine sabitlenmeli.');
assert.match(diyalog, /onCancel=\{\(e\) => \{[\s\S]*e\.preventDefault\(\);[\s\S]*kapat\(\);/,
  'Escape ile kapatma React durumunu güvenilir biçimde güncellemeli.');
assert.match(diyalog, /onKeyDown=\{\(e\) => \{[\s\S]*e\.key !== 'Escape'[\s\S]*kapat\(\);/,
  'Tarayıcı cancel olayı üretmese de Escape tuşu diyalogu kapatmalı.');
assert.match(diyalog, /getBoundingClientRect\(\)[\s\S]*e\.clientX < sinir\.left[\s\S]*if \(disarida\) kapat\(\)/,
  'Diyalog içindeki boş alan değil yalnız gerçek arka plan tıklaması pencereyi kapatmalı.');
assert.match(entegrasyon, /disabled=\{hazirSablonSayisi === 0\}/,
  'Hazır sağlayıcı yokken gönderilemeyecek şablon seçimi etkin görünmemeli.');
assert.match(entegrasyon, /disabled=\{!sablonHazirMi\(sablon\)\}/,
  'Hazır olmayan kanala ait her şablon seçim listesinde devre dışı kalmalı.');
assert.match(entegrasyon, /git\?\.\('entegrasyonlar'\)[\s\S]*Entegrasyon ayarlarına git/,
  'Hazır kanal yoksa gönderim penceresi kullanıcıyı çalışan entegrasyon ayarına taşımalı.');
assert.match(panelCss, /@media \(max-width: 1380px\)[\s\S]*\.pnl-operasyon-tablo td::before[\s\S]*content: attr\(data-label\)/,
  'Beş sütunlu operasyon tabloları orta genişlikte etiketli kartlara dönüşmeli.');
assert.doesNotMatch(entegrasyon, /doğrulama kuyruğuna/i, 'Olmayan otomatik doğrulama kuyruğu vaat edilmemeli.');
assert.match(envOrnegi, /^VITE_STORAGE_PROVIDER=r2$/m, 'Web paneli taşınmış medya anahtarlarını R2 üzerinden okumalı.');
assert.match(vercel, /img-src[^;]*https:\/\/cdn\.veterito\.com/, 'CSP, imzalı R2 görsellerinin CDN üzerinden gösterilmesine izin vermeli.');
assert.match(vercel, /connect-src[^;]*https:\/\/cdn\.veterito\.com/, 'CSP, imzalı R2 yükleme ve silme isteklerine izin vermeli.');
assert.doesNotMatch(vercel, /https:\/\/\*\.supabase\.co/, 'CSP bağlantı izni yalnız kullanılan Supabase projesiyle sınırlı kalmalı.');
assert.match(vercel, /"type":\s*"host"[\s\S]*"value":\s*"www\.veterito\.com"[\s\S]*https:\/\/veterito\.com\/:path\*/, 'Vercel, www isteğini kanonik apex alanına yönlendirmeli.');
assert.match(vercel, /worker-src 'self' blob:/, 'Tarayıcı OCR workerı yalnız aynı alan ve geçici blob bağlamında çalışabilmeli.');
assert.match(vercel, /camera=\(self\)/, 'Web barkod kamerası yalnız aynı kaynaklı panelde kullanıcı izniyle açılabilmeli.');
assert.doesNotMatch(vercel, /worker-src[^;]*https?:/, 'OCR workerı üçüncü taraf CDN’den çalıştırılmamalı.');
assert.match(recete, /resmiReceteyiHazirla/, 'Web reçetesi resmî gönderim taslağı kapısına bağlanmalı.');
assert.match(recete, /degistirilen/, 'Reçete düzeltmesi eski sürümü koruyan akışta kalmalı.');
assert.match(recete, /Hasta veya müşteri bul/, 'Reçete hastası hasta veya müşteri adına göre aranabilmeli.');
assert.match(recete, /receteHastalariniFiltrele\(hastalar, hastaAramasi\)/, 'Reçete araması test edilen ortak filtreyi kullanmalı.');
assert.match(recete, /Eşleşen hasta bulunamadı/, 'Reçete hasta araması boş sonucu açıkça anlatmalı.');
assert.match(panel, /import PanelMesajlar from '\.\/PanelMesajlar'/, 'Tam web gelen kutusu panele bağlanmalı.');
assert.match(mesajVeri, /conversation_request_list/, 'Web gelen kutusu mesaj isteklerini okumalı.');
assert.match(mesajVeri, /respond_to_message_request/, 'Mesaj isteği kabul ve ret yolu bağlı kalmalı.');
assert.match(mesajVeri, /conversation_peer_info/, 'Karşı taraf okuma bilgisi dar RPC üzerinden gelmeli.');
assert.match(mesaj, /icerigiSikayetEt/, 'Mesaj ve sohbet moderasyon yolu içermeli.');
assert.match(mesaj, /kullaniciyiEngelle/, 'Sohbet ekranında kullanıcı engelleme yolu bulunmalı.');
assert.match(mesaj, /mesajaGorselEkle/, 'Mesaj görseli yüklenip mesajla ilişkilendirilmeli.');
assert.doesNotMatch(panelBolumler, /export function PanelMesajlar/, 'Eski tek yönlü mesaj bileşeni kaynakta kalmamalı.');
assert.match(panelBolumler, /value="selected"/, 'Duyuruda ilişki içindeki seçili alıcı hedefi bulunmalı.');
assert.match(panelBolumler, /İşlemsel bildirim yalnız müşterilere gider/, 'Duyuru ve işlemsel bildirim ayrımı açıklanmalı.');
assert.match(panelBolumler, /guvenliGorselleriYukle/, 'Çoklu topluluk, ilan ve duyuru görselleri yarım yüklemede temizlenmeli.');
assert.match(panelBolumler, /sahiplendirmeBasvurusunuYanitla/, 'Sahiplendirme başvurusu kabul ve ret yolu bağlı kalmalı.');
assert.match(panelBolumler, /sahiplendirmeIlaniniKapat[\s\S]*Uygulama kartını önizle[\s\S]*Sahiplendirildi[\s\S]*Yayından kaldır/,
  'Sahiplendirme kartında önizleme ve güvenli kapatma eylemleri bulunmalı.');
assert.match(panelBolumler, /signOut\(\{ scope: 'global' \}\)[\s\S]*Tüm cihazlardan çık/,
  'Ayarlar ekranı açık onayla tüm oturumları kapatabilmeli.');
assert.match(panelBolumler, /Görsel yeniden deneniyor[\s\S]*duyuru metni kullanılabilir/,
  'Duyuru görseli başarısız olduğunda otomatik yeniden deneme ve kullanılabilir yedek içerik göstermeli.');
assert.match(panelBolumler, /placeholder="Başlık, konum veya tür ara"/, 'Sahiplendirme ilanları başlık, konum ve tür üzerinden aranabilmeli.');
assert.match(panelBolumler, /aria-label="İlan durumuna göre filtrele"[\s\S]*aria-label="Hayvan türüne göre filtrele"[\s\S]*aria-label="İlanları sırala"/,
  'Sahiplendirme arama araçlarında durum, tür ve sıralama ayrı ve erişilebilir olmalı.');
assert.match(panelBolumler, /pnl-ilan-kartlari[\s\S]*SahiplendirmeGorseli[\s\S]*pnl-ilan-basvurular/,
  'Sahiplendirme ilanı medya, içerik ve başvuruları ayrılmış post kartı olmalı.');
assert.match(panelCss, /\.pnl-ilan-kartlari\s*\{[^}]*repeat\(2,[^}]*\}[\s\S]*@media \(max-width: 760px\)[\s\S]*\.pnl-ilan-kartlari\s*\{[^}]*grid-template-columns:\s*1fr;/,
  'Sahiplendirme post kartları geniş ekranda iki, dar ekranda tek sütun olmalı.');
assert.match(panelBolumler, /pnl-duyuru-post-grid[\s\S]*setSeciliDuyuru\(duyuru\)[\s\S]*Duyuru istatistikleri/,
  'Duyuru post kartı tıklanınca istatistik ayrıntısı açılmalı.');
assert.match(panelBolumler, /placeholder="Duyuru metni, kitle veya filtre ara"[\s\S]*Duyuru durumuna göre filtrele[\s\S]*Duyuru türüne göre filtrele/,
  'Duyuru listesi metin araması, durum ve tür filtresi sunmalı.');
assert.match(panelBolumler, /Alıcı kaydı görüntülenme veya okunma anlamına gelmez/,
  'Duyuru istatistiği alıcı kaydını görüntülenme olarak sunmamalı.');
assert.match(panelBolumler, /recipient_count \?\? 0/,
  'Sıfır alıcılı gönderilmiş duyuru henüz gönderilmedi diye yanlış etiketlenmemeli.');
assert.match(panelVeri, /created_at, sent_at, delivery_kind/,
  'Duyuru ayrıntısı gerçek gönderim zamanını veri kaynağından okumalı.');
assert.match(panelCss, /\.pnl-duyuru-post-grid\s*\{[^}]*repeat\(2,[^}]*\}[\s\S]*@media \(max-width: 760px\)[\s\S]*\.pnl-duyuru-post-grid\s*\{[^}]*grid-template-columns:\s*1fr;/,
  'Duyuru postları geniş ekranda iki, dar ekranda tek sütun olmalı.');
assert.match(defter, /CSV indir/, 'Defter seçili dönem verisini dışa aktarabilmeli.');
assert.match(defter, /odemeYontemi/, 'Ödeme yöntemi kategoriden ayrı tutulmalı.');
assert.match(webSitesi, /Klinik bilgilerini düzenle/, 'Klinik temel bilgileri webden düzenlenebilmeli.');
assert.match(webSitesi, /KlinikGaleri/, 'Klinik logo, kapak ve galeri yönetimi web sitesine bağlı olmalı.');
assert.match(webSitesi, /Webde görünürsünüz — sayfanız yayında[\s\S]*Yayındaki sayfayı görüntüle/,
  'Yayındaki klinik sayfası web görünürlüğünü açık başarı durumu ve çalışan bağlantıyla anlatmalı.');
for (const anahtar of ['cp_contact_phone', 'cp_contact_whatsapp', 'cp_contact_email', 'cp_contact_directions', 'cp_contact_map', 'cp_address_title', 'cp_staff_tab', 'cp_gallery_tab', 'cp_hours_tab']) {
  assert.ok(turkce[anahtar] && !turkce[anahtar].startsWith('cp_'), `${anahtar} Türkçe kullanıcı metnine çözülmeli.`);
  assert.match(klinikSayfasi, new RegExp(`t\\('${anahtar}'\\)`), `${anahtar} genel klinik sayfasında çeviri katmanından okunmalı.`);
}
assert.match(klinikSayfasiCss, /\.vc-staff-photo\s*\{[^}]*aspect-ratio:\s*5\s*\/\s*4;/,
  'Klinik çalışan kartları web vitrini için daha kısa yatay fotoğraf oranı kullanmalı.');
assert.match(galeri, /guvenliGorselSil/, 'Galeri veritabanı bağı kurulamazsa yüklenen nesne temizlenmeli.');
assert.match(ekip, /kendiPersonelFotografiniGuncelle/, 'Personel kendi yayın fotoğrafını güncelleyebilmeli.');
assert.match(medya, /toBlob\(coz, 'image\/webp'/, 'Görsel EXIF taşımayan yeniden kodlanmış WebP olmalı.');
assert.match(medya, /guvenliGorselleriTemizle/, 'Sahipsiz medya nesnesi için telafi temizliği bulunmalı.');
assert.match(medya, /action: 'delete'/, 'R2 sağlayıcısında telafi silme imzalı DELETE kullanmalı.');
assert.match(stokKamera, /mobil uygulamanın kamerasını öneriyoruz/, 'Web kamerası desteklenmediğinde mobil alternatif önerilmeli.');
assert.match(panel, /<PanelStok klinik=\{secili\.clinic_id\} klinikAdi=\{secili\.clinic_name\}/,
  'Stok etiketi seçili kliniğin görünen adını almalı.');
assert.match(stokKamera, /return navigator\.mediaDevices\.getUserMedia\(STOK_KAMERA_KISITLARI\)/,
  'Kamera izni okuyucu kütüphanesine bırakılmadan doğrudan kullanıcı eyleminde istenmeli ve aynı akış yedek okuyucuda kullanılmalı.');
assert.match(stok, /stokKameraAkisiniIste\(\)[\s\S]*if \(!Kurucu\)[\s\S]*decodeFromStream\(akis, video/,
  'Doğrudan izinle alınan tek kamera akışı yerleşik ve yedek barkod okuyucular arasında paylaşılmalı.');
assert.doesNotMatch(stok, /decodeFromConstraints\(/,
  'Yedek barkod okuyucu ikinci bir örtük kamera izni istememeli.');
assert.match(stok, /Yeni ürün oluştur/, 'Eşleşmeyen stok kodundan yeni ürün kartı açılabilmeli.');
assert.match(stok, /STOK_KOD_TURLERI\.map/, 'Kod türü seçimi sunucunun tam sözlüğünden üretilmeli.');
assert.match(stokKodTuru, /code39.*code93.*code128.*itf14/s,
  'Kod türü sözlüğü sunucunun desteklediği Code ve ITF türlerini içermeli.');
assert.match(stok, /Kamera iznini yeniden dene/,
  'Engellenen kamera izninden sonra kullanıcıya çalışan yeniden deneme eylemi sunulmalı.');
assert.match(stokKamera, /NotFoundError[\s\S]*NotReadableError/,
  'İzin reddi, kamera yokluğu ve kameranın meşgul olması birbirinden ayrılmalı.');
assert.match(stokEtiketi, /pnl-urun-etiket-klinik[^>]*>\{klinikAdi\}/,
  'Yazdırılan ürün etiketinde klinik adı görünmeli.');
assert.match(stokEtiketiYazdir, /@page \{ size: 100mm 50mm; margin: 0; \}[\s\S]*html, body \{ width: 100mm; height: 50mm; margin: 0; overflow: hidden; \}/,
  'Etiket çıktısı ikinci sayfa üretmeyen sabit 100 × 50 mm belge olmalı.');
assert.match(stokEtiketiYazdir, /document\.createElement\('iframe'\)[\s\S]*srcdoc = stokEtiketiYazdirmaHtml\(etiket\)[\s\S]*pencere\.print\(\)/,
  'Etiket bütün panel yerine yalıtılmış tek sayfalık yazdırma çerçevesinden basılmalı.');
assert.doesNotMatch(stokEtiketiYazdir, /window\.print\(\)/,
  'Etiket eylemi uzun panel sayfasının tamamını yazdırmamalı.');
assert.doesNotMatch(panelCss, /body:has\(\.pnl-urun-etiketi\)/,
  'Etiket çıktısı panel gövdesini görünmez yaparak sayfa sayısını yazıcı motoruna bırakmamalı.');
assert.match(stok, /pnl-yeni-modul pnl-yeni-modul-operasyon/, 'Stok ekranı yeni modül dizüstü kırılımlarını kullanmalı.');
assert.match(stok, /pnl-operasyon-kartlari pnl-stok-kartlari/, 'Stok ürünleri geniş ekranda alanı dengeli kullanan özel kart ızgarasına bağlanmalı.');
assert.match(panelCss, /\.pnl-stok-kartlari\s*\{[^}]*repeat\(2,[^}]*\}[\s\S]*@media \(max-width: 1180px\)[\s\S]*\.pnl-stok-kartlari, \.pnl-cihaz-formlari\s*\{[^}]*grid-template-columns: 1fr;/,
  'Stok kartları ve cihaz formları geniş ekranda dengeli, dizüstünde sıkışmadan tek sütun olmalı.');
assert.match(laboratuvar, /pnl-yeni-modul pnl-yeni-modul-operasyon/, 'Laboratuvar ekranı yeni modül dizüstü kırılımlarını kullanmalı.');
assert.match(laboratuvar, /defterHastalariniOku\(klinik\)/,
  'Laboratuvar istemi RPC’nin kabul ettiği klinik defteri hastalarından oluşturulmalı.');
assert.doesNotMatch(laboratuvar, /hastalariOku\(klinik\)/,
  'Platform hastası bağlantı kaydı olmadan laboratuvar istemine sessizce gönderilmemeli.');
assert.match(laboratuvar, /pnl-yeni-modul-operasyon pnl-laboratuvar/,
  'Laboratuvar ekranı diğer operasyon sayfalarını etkilemeden özel yerleşim ritmi kullanmalı.');
assert.match(labCihazlari, /className="pnl-widget pnl-lab-cihazlar"/,
  'Laboratuvar cihaz yönetimi orta akışta bağımsız ve hedeflenebilir bir yüzey olmalı.');
assert.match(panelCss, /\.pnl-laboratuvar > \.pnl-yeni-modul-basi \.pnl-basi-dugmeler\s*\{[^}]*padding:\s*6px;[^}]*border:[^}]*border-radius:\s*14px;[^}]*box-shadow:/,
  'Laboratuvarın sağ üst eylemleri içerik çerçevelerinden ayrılan dengeli bir araç yüzeyinde durmalı.');
assert.match(panelCss, /\.pnl-laboratuvar > \.pnl-kartlar\s*\{[^}]*margin-bottom:\s*18px;[^}]*\}[\s\S]*\.pnl-laboratuvar > \.pnl-lab-cihazlar,[\s\S]*margin:\s*0 0 18px;/,
  'Laboratuvar özetleri ile orta cihaz çerçeveleri eşit dış boşlukla ayrılmalı.');
assert.match(panelCss, /\.pnl-laboratuvar > \.pnl-bos,[\s\S]*\.pnl-laboratuvar > \.pnl-lab-listesi\s*\{[^}]*margin:\s*0 0 22px;/,
  'Laboratuvar istem alanı ile akademik kaynaklar birbirine yapışmamalı.');
assert.match(panelCss, /@media \(max-width: 560px\)\s*\{[\s\S]*\.pnl-laboratuvar > \.pnl-kartlar\s*\{[^}]*grid-template-columns:\s*1fr;/,
  'Laboratuvar özetleri telefonda sıkışık iki sütun yerine tek sütuna inmeli.');
assert.match(laboratuvar, /sayisalHata[\s\S]*Number\.isFinite/, 'Laboratuvar sonucu NaN veya sonsuz sayısal değeri kayda göndermemeli.');
assert.match(laboratuvar, /pnl-lab-calisma-cihazi[\s\S]*Aktif çalışma cihazı/, 'OCR ve istem kaynağı ayrı başlıklı çalışma cihazı alanında görünmeli.');
assert.doesNotMatch(panelCss, /\.pnl-(?:analit-formu|ocr-satirlar)\s*\{[^}]*overflow-y:\s*auto/,
  'Uzun laboratuvar pencerelerinde diyalog dışında ikinci bir dikey kaydırma alanı oluşmamalı.');
assert.match(laboratuvar, /aria-expanded=\{acik\}[\s\S]*aria-controls=\{`laboratuvar-\$\{istem\.id\}-ayrinti`\}/,
  'Laboratuvar sonuç kartı açık durumunu ve ayrıntı ilişkisini yardımcı teknolojilere bildirmeli.');
assert.match(stok, /async function tumSayimiSifirla[\s\S]*async function sayimiIptal/, 'Sayım sıfırlama ve iptal işlemleri hata kontrollü işlevlere bağlı kalmalı.');
assert.match(stok, /catch \(e\) \{[\s\S]*setSayimAcik\(false\);[\s\S]*setHata/, 'Sayım başlatılamazsa sonsuz yüklenen pencere açık kalmamalı.');
assert.match(laboratuvar, /ocrCihazi/, 'OCR sonucu kaydedilmeden önce kaynak cihaz seçilmeli.');
assert.match(laboratuvar, /cihazAdaylariniNormallestir/, 'Cihaza özgü ham analit kodları kanonikleştirilmeli.');
for (const yol of ['/ocr/v7/worker.min.js', '/ocr/v7/tesseract-core-lstm.wasm.js', '/ocr/v7']) {
  assert.match(laboratuvar, new RegExp(yol.replaceAll('/', '\\/')), `Web OCR ${yol} yerel varlığını kullanmalı.`);
}
assert.doesNotMatch(laboratuvar, /cdn\.jsdelivr\.net/, 'Laboratuvar fotoğrafı işlenirken çalışma kodu dış CDN’e bağlı kalmamalı.');
assert.match(laboratuvar, /URL\.revokeObjectURL\(nesneAdresi\)/, 'OCR tamamlanınca veya hata verince geçici fotoğraf nesne adresi silinmeli.');
assert.match(laboratuvar, /worker\.terminate\(\)/, 'OCR tamamlanınca web worker bellekte bırakılmamalı.');
assert.match(laboratuvar, /ocrGorseliniHazirla\(dosya\)/, 'OCR dosyası motora verilmeden önce doğrulanıp yeniden kodlanmalı.');
assert.match(laboratuvar, /ocrZamanSinirli\(worker\.recognize/, 'OCR işlemi kaynak tüketimini sınırlayan zaman aşımıyla çalışmalı.');
assert.match(laboratuvar, /Aktif cihaz profili gerekli[\s\S]*Açık laboratuvar istemi gerekli[\s\S]*OCR için hazır/,
  'OCR penceresi pasif alan yerine cihaz ve istem ön koşullarını eylemli açıklamalı.');
assert.match(laboratuvar, /id="ocr-cihaz"[\s\S]*id="ocr-istem"/, 'OCR penceresinde kaynak cihaz ve hasta istemi birlikte seçilebilmeli.');
assert.match(laboratuvar, /ocrIcinIstem[\s\S]*İstemi oluştur ve OCR’a dön/, 'Eksik istem aynı OCR görevinden oluşturulup akışa geri dönmeli.');
assert.match(laboratuvar, /id="lab-cihaz"[\s\S]*Cihaz seçimi OCR eşlemelerini/, 'Yeni laboratuvar istemi kaynak cihaz profiline bağlanabilmeli.');
assert.match(labCihazlari, /acik:\s*denetimliAcik[\s\S]*acikDegistir/, 'OCR ön koşulu cihaz yönetimi panelini programlı açabilmeli.');
assert.match(paket, /"@tesseract\.js-data\/eng":\s*"1\.0\.0"/, 'OCR İngilizce modeli sabit paket sürümüyle tekrarlanabilir olmalı.');
assert.match(paket, /"tesseract\.js":\s*"7\.0\.0"/, 'Tarayıcı OCR motoru doğrulanan worker sürümüyle birebir sabitlenmeli.');
assert.match(paket, /"predev":\s*"node scripts\/ocr-varliklarini-hazirla\.mjs"[\s\S]*"prebuild":\s*"node scripts\/ocr-varliklarini-hazirla\.mjs"/,
  'Yerel geliştirme ve üretim derlemesi OCR varlıklarını aynı şekilde hazırlamalı.');
for (const varlik of ['worker.min.js', 'tesseract-core-lstm.wasm.js', 'eng.traineddata.gz']) {
  assert.match(ocrVarliklari, new RegExp(varlik.replace('.', '\\.')), `OCR hazırlayıcı ${varlik} varlığını üretmeli.`);
}
assert.match(labVeri, /create_lab_request_v3/, 'Laboratuvar istemi cihaz kimliğini kabul eden kapıyı kullanmalı.');
assert.match(labVeri, /save_lab_result_revision_v5/, 'Sonuç revizyonu kaynak cihazı atomik kaydetmeli.');
assert.match(labCihazlari, /labCihazEslemesiniKaydet/, 'Owner cihaz bazlı analit eşlemesini yönetebilmeli.');
assert.match(labCihazlari, /cihazlar\.length === 0[\s\S]*Henüz cihaz profili yok/, 'Cihaz listesi boşken kullanıcıya sonraki adım açıklanmalı.');
assert.equal((labCihazlari.match(/className="pnl-form-eylem"/g) ?? []).length, 2,
  'Cihaz ve analit eşleme formunun ana eylemleri aynı hizalı alt alanda kalmalı.');
assert.match(entegrasyon, /function saglayiciyiSec[\s\S]*temelAdres: ayni[\s\S]*allowed_base_hosts\[0\]/,
  'Sağlayıcı değişince eski sağlayıcının API adresi yeni yapılandırmaya taşınmamalı.');
assert.match(entegrasyon, /adres\.protocol !== 'https:'[\s\S]*adres\.username[\s\S]*allowed_base_hosts\.includes/,
  'Entegrasyon formu yalnız katalogda doğrulanmış HTTPS sağlayıcı alanını kabul etmeli.');
assert.match(musteriler, /defterArsivEtkisiniOku/, 'Müşteri arşivlenmeden önce bağlı kayıt etkisi okunmalı.');
assert.match(hastalar, /defterArsivEtkisiniOku/, 'Hasta arşivlenmeden önce bağlı kayıt etkisi okunmalı.');
assert.match(panelVeri, /archive_clinic_offline_record/, 'Web defter kaydı güvenli arşiv RPC kapısını kullanmalı.');
assert.match(panelVeri, /restore_clinic_offline_record/, 'Arşivlenen müşteri ve hasta webden geri açılabilmeli.');
assert.match(panelVeri, /\.is\('archived_at', null\)/, 'Arşivlenen defter kayıtları aktif listeden çıkarılmalı.');
assert.doesNotMatch(panelVeri, /from\('clinic_offline_(?:customers|pets)'\)\s*\.delete\(/s,
  'Web çevrimdışı müşteri veya hastayı doğrudan silmemeli.');
assert.match(panelBolumler, /gonderiYorumlariniOku/, 'Topluluk gönderisinin yorumları webde yönetilebilmeli.');
assert.match(panelBolumler, /gonderiYorumunaYanitYaz/, 'Klinik webden topluluk yorumuna yanıt verebilmeli.');
assert.match(panelBolumler, /pnl-izgara-ikili pnl-profil-ust[\s\S]*pnl-profil-sol[\s\S]*Baktığınız türler[\s\S]*Özel çalışma günleri[\s\S]*Çalışma saatleri/,
  'Klinik profilinde baktığınız türler solda, çalışma saatleri sağda kalmalı.');
assert.match(panelBolumler, /pnl-profil-hizmetler[\s\S]*pnl-hizmet-grid/,
  'Hizmetler üst ikilinin altında kompakt çok sütunlu bölüme taşınmalı.');
assert.match(panelBolumler, /placeholder="Hizmet adı veya kodu ara"[\s\S]*Yalnız sunduklarım[\s\S]*Tüm kategoriler/,
  'Uzun hizmet kataloğu arama, yalnız seçili ve kategori filtresi sunmalı.');
assert.match(panelVeri, /service_catalog'\)[\s\S]*category,sort_order[\s\S]*order\('sort_order'/,
  'Hizmet kategorisi ve klinik sırası sunucunun katalog sözleşmesinden gelmeli.');
assert.match(panelCss, /data-panel-domain="care"[\s\S]*data-panel-domain="operations"[\s\S]*data-panel-domain="communication"/,
  'Web panelinin klinik alanları tekdüze beyaz yerine ölçülü semantik renk ayrımı kullanmalı.');
assert.match(panelBolumler, /Özel çalışma günleri/, 'Çalışma saatlerinde özel gün yönetimi görünmeli.');
assert.match(panelCss, /\.pnl-profil-sol\s*\{[^}]*display:\s*grid;[^}]*gap:\s*14px/,
  'Tür ve özel gün kartları sol sütundaki boşluğu dengeli kullanmalı.');
assert.match(panelCss, /\.pnl-hizmet-grid\s*\{[^}]*repeat\(4,/,
  'Uzun hizmet kataloğu üst kartların altında kompakt dört sütunlu başlamalı.');
assert.match(panelBolumler, /ozelCalismaGunuYaz[\s\S]*ozelCalismaGunuSil/,
  'Özel çalışma günü ekleme, güncelleme ve kaldırma işlemleri gerçek veri kapısına bağlanmalı.');
assert.match(panelVeri, /from\('clinic_special_hours'\)[\s\S]*upsert\([\s\S]*onConflict:\s*'clinic_id,special_date'/,
  'Aynı kliniğin aynı tarihli özel günü yinelenmek yerine güncellenmeli.');
assert.match(pano, /git\('mesajlar'\)/, 'Pano çalışan web gelen kutusuna yönlendirmeli.');
assert.doesNotMatch(pano, /mesajlaşma yalnızca telefondaki uygulamada/i,
  'Pano çalışan web mesajlaşmasını yakında diye göstermemeli.');

console.log('PANEL OPERASYON BİRİM TESTİ — OCR, sıfır ham veri ve mobil–web işlem bağları geçti.');
