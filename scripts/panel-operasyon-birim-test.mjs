import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

import {
  birlestirilmisAnalitler,
  cihazAdaylariniNormallestir,
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

// Kritik mobil–web eşlik kapıları bileşen ağacından yanlışlıkla çıkarılırsa build
// yine geçebilir. Bu sözleşme kontrolleri menü/işlem bağlarının gerçekten panelde
// kaldığını ölçer; canlı RPC davranışı mobil repodaki kabul testiyle ayrıca ölçülür.
const panel = readFileSync(new URL('../src/panel/Panel.tsx', import.meta.url), 'utf8');
const bolumler = readFileSync(new URL('../src/panel/bolumler.ts', import.meta.url), 'utf8');
const entegrasyon = readFileSync(new URL('../src/panel/PanelEntegrasyonlar.tsx', import.meta.url), 'utf8');
const recete = readFileSync(new URL('../src/panel/PanelReceteler.tsx', import.meta.url), 'utf8');
const mesaj = readFileSync(new URL('../src/panel/PanelMesajlar.tsx', import.meta.url), 'utf8');
const mesajVeri = readFileSync(new URL('../src/panel/mesaj-veri.ts', import.meta.url), 'utf8');
const panelBolumler = readFileSync(new URL('../src/panel/PanelBolumler.tsx', import.meta.url), 'utf8');
const defter = readFileSync(new URL('../src/panel/PanelDefter.tsx', import.meta.url), 'utf8');
const webSitesi = readFileSync(new URL('../src/panel/PanelWebSitesi.tsx', import.meta.url), 'utf8');
const stok = readFileSync(new URL('../src/panel/PanelStok.tsx', import.meta.url), 'utf8');
const medya = readFileSync(new URL('../src/panel/medya-veri.ts', import.meta.url), 'utf8');
const galeri = readFileSync(new URL('../src/panel/KlinikGaleri.tsx', import.meta.url), 'utf8');
const ekip = readFileSync(new URL('../src/panel/PanelEkip.tsx', import.meta.url), 'utf8');
const laboratuvar = readFileSync(new URL('../src/panel/PanelLaboratuvar.tsx', import.meta.url), 'utf8');
const labVeri = readFileSync(new URL('../src/panel/lab-veri.ts', import.meta.url), 'utf8');
const labCihazlari = readFileSync(new URL('../src/panel/LabCihazlari.tsx', import.meta.url), 'utf8');
const musteriler = readFileSync(new URL('../src/panel/PanelMusteriler.tsx', import.meta.url), 'utf8');
const hastalar = readFileSync(new URL('../src/panel/PanelHastalar.tsx', import.meta.url), 'utf8');
const panelVeri = readFileSync(new URL('../src/panel/veri.ts', import.meta.url), 'utf8');
const panelCss = readFileSync(new URL('../src/panel/panel.css', import.meta.url), 'utf8');
const pano = readFileSync(new URL('../src/panel/PanelPano.tsx', import.meta.url), 'utf8');
const vercel = readFileSync(new URL('../vercel.json', import.meta.url), 'utf8');
const envOrnegi = readFileSync(new URL('../.env.example', import.meta.url), 'utf8');

assert.match(bolumler, /anahtar:\s*'iletisim',\s*ad:\s*'Operasyonel işlemler'/, 'Günlük işlemler açık adıyla ayrı menü olmalı.');
assert.match(bolumler, /anahtar:\s*'entegrasyonlar',\s*ad:\s*'Entegrasyonlar'/, 'Teknik entegrasyonlar solda ayrı menü olmalı.');
assert.match(panel, /gorunum="communications"\s+git=\{bolumeGit\}/, 'Operasyon menüsü günlük görünüm ve çalışan bölüm geçişlerine bağlanmalı.');
assert.match(panel, /gorunum="technical"/, 'Teknik entegrasyonlar ayrı görünümde kalmalı.');
assert.match(entegrasyon, />Entegrasyon ayarları<\//, 'Teknik ekran ayarların bulunduğu yeri açıkça adlandırmalı.');
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
for (const etiket of ['Alıcı', 'Amaç / kanal', 'Tercih', 'Hedef', 'Kanal / amaç', 'Şablon', 'Durum', 'Zaman', 'İşlem']) {
  assert.match(entegrasyon, new RegExp(`data-label="${etiket}"`), `Dar operasyon kaydında ${etiket} alan etiketi korunmalı.`);
}
assert.match(panelCss, /@media \(max-width: 1380px\)[\s\S]*\.pnl-yeni-modul-ozetleri[\s\S]*\.pnl-operasyon-kisayollari/,
  'Dizüstü kırılımı özet ve kısayolları panel içeriği sıkışmadan iki sütuna indirmeli.');
assert.match(panelCss, /@media \(max-width: 1180px\)[\s\S]*\.pnl-operasyon-tablo td::before[\s\S]*content: attr\(data-label\)/,
  'Beş sütunlu operasyon tabloları orta genişlikte etiketli kartlara dönüşmeli.');
assert.doesNotMatch(entegrasyon, /doğrulama kuyruğuna/i, 'Olmayan otomatik doğrulama kuyruğu vaat edilmemeli.');
assert.match(envOrnegi, /^VITE_STORAGE_PROVIDER=r2$/m, 'Web paneli taşınmış medya anahtarlarını R2 üzerinden okumalı.');
assert.match(vercel, /img-src[^;]*https:\/\/cdn\.veterito\.com/, 'CSP, imzalı R2 görsellerinin CDN üzerinden gösterilmesine izin vermeli.');
assert.match(vercel, /connect-src[^;]*https:\/\/cdn\.veterito\.com/, 'CSP, imzalı R2 yükleme ve silme isteklerine izin vermeli.');
assert.match(recete, /resmiReceteyiHazirla/, 'Web reçetesi resmî gönderim taslağı kapısına bağlanmalı.');
assert.match(recete, /degistirilen/, 'Reçete düzeltmesi eski sürümü koruyan akışta kalmalı.');
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
assert.match(defter, /CSV indir/, 'Defter seçili dönem verisini dışa aktarabilmeli.');
assert.match(defter, /odemeYontemi/, 'Ödeme yöntemi kategoriden ayrı tutulmalı.');
assert.match(webSitesi, /Klinik bilgilerini düzenle/, 'Klinik temel bilgileri webden düzenlenebilmeli.');
assert.match(webSitesi, /KlinikGaleri/, 'Klinik logo, kapak ve galeri yönetimi web sitesine bağlı olmalı.');
assert.match(galeri, /guvenliGorselSil/, 'Galeri veritabanı bağı kurulamazsa yüklenen nesne temizlenmeli.');
assert.match(ekip, /kendiPersonelFotografiniGuncelle/, 'Personel kendi yayın fotoğrafını güncelleyebilmeli.');
assert.match(medya, /toBlob\(coz, 'image\/webp'/, 'Görsel EXIF taşımayan yeniden kodlanmış WebP olmalı.');
assert.match(medya, /guvenliGorselleriTemizle/, 'Sahipsiz medya nesnesi için telafi temizliği bulunmalı.');
assert.match(medya, /action: 'delete'/, 'R2 sağlayıcısında telafi silme imzalı DELETE kullanmalı.');
assert.match(stok, /mobil uygulamanın kamerasını öneriyoruz/, 'Web kamerası desteklenmediğinde mobil alternatif önerilmeli.');
assert.match(laboratuvar, /ocrCihazi/, 'OCR sonucu kaydedilmeden önce kaynak cihaz seçilmeli.');
assert.match(laboratuvar, /cihazAdaylariniNormallestir/, 'Cihaza özgü ham analit kodları kanonikleştirilmeli.');
assert.match(labVeri, /create_lab_request_v3/, 'Laboratuvar istemi cihaz kimliğini kabul eden kapıyı kullanmalı.');
assert.match(labVeri, /save_lab_result_revision_v5/, 'Sonuç revizyonu kaynak cihazı atomik kaydetmeli.');
assert.match(labCihazlari, /labCihazEslemesiniKaydet/, 'Owner cihaz bazlı analit eşlemesini yönetebilmeli.');
assert.match(musteriler, /defterArsivEtkisiniOku/, 'Müşteri arşivlenmeden önce bağlı kayıt etkisi okunmalı.');
assert.match(hastalar, /defterArsivEtkisiniOku/, 'Hasta arşivlenmeden önce bağlı kayıt etkisi okunmalı.');
assert.match(panelVeri, /archive_clinic_offline_record/, 'Web defter kaydı güvenli arşiv RPC kapısını kullanmalı.');
assert.match(panelVeri, /restore_clinic_offline_record/, 'Arşivlenen müşteri ve hasta webden geri açılabilmeli.');
assert.match(panelVeri, /\.is\('archived_at', null\)/, 'Arşivlenen defter kayıtları aktif listeden çıkarılmalı.');
assert.doesNotMatch(panelVeri, /from\('clinic_offline_(?:customers|pets)'\)\s*\.delete\(/s,
  'Web çevrimdışı müşteri veya hastayı doğrudan silmemeli.');
assert.match(panelBolumler, /gonderiYorumlariniOku/, 'Topluluk gönderisinin yorumları webde yönetilebilmeli.');
assert.match(panelBolumler, /gonderiYorumunaYanitYaz/, 'Klinik webden topluluk yorumuna yanıt verebilmeli.');
assert.match(panelBolumler, /pnl-izgara-ikili pnl-profil-ust[\s\S]*Baktığınız türler[\s\S]*Çalışma saatleri/,
  'Klinik profilinde baktığınız türler solda, çalışma saatleri sağda kalmalı.');
assert.match(panelBolumler, /pnl-profil-hizmetler[\s\S]*pnl-hizmet-grid/,
  'Hizmetler üst ikilinin altında kompakt çok sütunlu bölüme taşınmalı.');
assert.match(panelBolumler, /Özel günler/, 'Çalışma saatlerinde özel gün yönetimi görünmeli.');
assert.match(panelBolumler, /ozelCalismaGunuYaz[\s\S]*ozelCalismaGunuSil/,
  'Özel çalışma günü ekleme, güncelleme ve kaldırma işlemleri gerçek veri kapısına bağlanmalı.');
assert.match(panelVeri, /from\('clinic_special_hours'\)[\s\S]*upsert\([\s\S]*onConflict:\s*'clinic_id,special_date'/,
  'Aynı kliniğin aynı tarihli özel günü yinelenmek yerine güncellenmeli.');
assert.match(pano, /git\('mesajlar'\)/, 'Pano çalışan web gelen kutusuna yönlendirmeli.');
assert.doesNotMatch(pano, /mesajlaşma yalnızca telefondaki uygulamada/i,
  'Pano çalışan web mesajlaşmasını yakında diye göstermemeli.');

console.log('PANEL OPERASYON BİRİM TESTİ — OCR, sıfır ham veri ve mobil–web işlem bağları geçti.');
