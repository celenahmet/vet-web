import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Beaker, BookOpen, Camera, Check, ChevronDown, ChevronUp, CircleAlert,
  FileCheck2, FlaskConical, Plus, ShieldCheck, Sparkles, X,
} from 'lucide-react';

import Bos from './Bos';
import Diyalog from './Diyalog';
import Hata from './Hata';
import Yukleniyor from './Yukleniyor';
import LabCihazlari from './LabCihazlari';
import { hastalariOku, type Hasta } from './veri';
import {
  klinikKaynaklariniOku, kuralAciklamalariniOku, labAnalitleriniOku,
  labCihazEslemeleriniOku, labCihazlariniOku,
  labDegerlendirmeleriniOku, labDegerlendirmesiUret, labDegerlendirmesiniIncele,
  labDurumunuGuncelle, labIstemiOlustur, labIstemleriniOku, labKalitesiniOku,
  labPanelleriniOku, labSonucSurumuKaydet, labSurumleriniOku,
  type KlinikKaynak, type KuralAciklamasi, type LabAnalitGirdisi, type LabAnaliti,
  type LabCihazEslemesi, type LabCihazi,
  type LabDegerlendirmesi, type LabDurumu, type LabIstemi, type LabKalitesi,
  type LabPaneli, type LabSistemTuru, type LabSurumu,
} from './lab-veri';
import {
  birlestirilmisAnalitler, cihazAdaylariniNormallestir, ocrMetniniCoz, ocrSonucunuBirlestir,
  type OcrBirlestirme,
} from './lab-ocr';

const DURUM: Record<LabDurumu, string> = {
  requested: 'İstendi', accepted: 'Kabul edildi', processing: 'Çalışılıyor',
  result_ready: 'Sonuç hazır', reviewed: 'Hekim inceledi', cancelled: 'İptal',
};
const SISTEM: Record<LabSistemTuru, string> = {
  external_reference_lab: 'Dış referans laboratuvarı', lis_middleware: 'LIS / ara katman',
  in_house_analyzer: 'Klinik içi analiz cihazı', manual_file_import: 'Manuel dosya aktarımı',
};
const DISIPLIN: Record<string, string> = {
  hematology: 'Hematoloji', biochemistry: 'Biyokimya', urinalysis: 'İdrar', blood_gas: 'Kan gazı',
  coagulation: 'Koagülasyon', endocrinology: 'Endokrinoloji', microbiology: 'Mikrobiyoloji', pathology: 'Patoloji',
};
const OCR_DURUM: Record<OcrBirlestirme['status'], string> = {
  same: 'Aynı', new: 'Yeni değer', conflict: 'Çakışıyor', unreadable: 'Okunamadı', existing_only: 'Mevcut korundu',
};
const BULGU: Record<string, { baslik: string; aciklama: string }> = {
  'value.low': { baslik: 'Laboratuvar referansının altında', aciklama: 'Yöntem, numune ve hasta bağlamıyla yorumlanmalıdır.' },
  'value.high': { baslik: 'Laboratuvar referansının üstünde', aciklama: 'Yöntem, numune ve hasta bağlamıyla yorumlanmalıdır.' },
  'pattern.azotemia': { baslik: 'Azotemi paterni ayrıştırılmalı', aciklama: 'Prerenal, renal ve postrenal mekanizmalar klinik ve idrar verileriyle ayrılmalıdır.' },
  'pattern.erythron_low': { baslik: 'Düşük eritron paterni', aciklama: 'Retikülosit, yayma, artefaktlar ve bütün klinik bağlam gerekir.' },
  'pattern.hepatobiliary': { baslik: 'Hepatobiliyer enzim paterni', aciklama: 'Tür, ilaçlar, kas bulguları, bilirubin ve görüntüleme yorumu değiştirebilir.' },
  'pattern.no_rule_triggered': { baslik: 'Yapılandırılmış patern tetiklenmedi', aciklama: 'Bu, sonucun normal olduğunu veya hastalık bulunmadığını göstermez.' },
};

const bosAnalit = (kod = ''): LabAnalitGirdisi => ({
  code: kod, name: kod, value: null, text_value: null, unit: null,
  reference_low: null, reference_high: null, provider_flag: null, method_name: null,
});

function analitDegeri(analit?: LabAnaliti | null): string {
  if (!analit) return '—';
  const deger = analit.numeric_value ?? analit.text_value ?? '—';
  const aralik = analit.reference_low != null || analit.reference_high != null
    ? ` · ref ${analit.reference_low ?? '—'}–${analit.reference_high ?? '—'}` : '';
  return `${deger}${analit.unit ? ` ${analit.unit}` : ''}${aralik}`;
}

function ocrDegeri(satir: OcrBirlestirme): string {
  if (satir.scanned?.value == null) return '??';
  const aralik = satir.scanned.reference_low != null || satir.scanned.reference_high != null
    ? ` · ref ${satir.scanned.reference_low ?? '—'}–${satir.scanned.reference_high ?? '—'}` : '';
  return `${satir.scanned.value}${satir.scanned.unit ? ` ${satir.scanned.unit}` : ''}${aralik}`;
}

export default function PanelLaboratuvar({ klinik, sahip }: { klinik: string; sahip: boolean }) {
  const [istemler, setIstemler] = useState<LabIstemi[] | null>(null);
  const [hastalar, setHastalar] = useState<Hasta[]>([]);
  const [paneller, setPaneller] = useState<LabPaneli[]>([]);
  const [kalite, setKalite] = useState<LabKalitesi[]>([]);
  const [analitler, setAnalitler] = useState<LabAnaliti[]>([]);
  const [surumler, setSurumler] = useState<LabSurumu[]>([]);
  const [degerlendirmeler, setDegerlendirmeler] = useState<LabDegerlendirmesi[]>([]);
  const [kaynaklar, setKaynaklar] = useState<KlinikKaynak[]>([]);
  const [kurallar, setKurallar] = useState<KuralAciklamasi[]>([]);
  const [cihazlar, setCihazlar] = useState<LabCihazi[]>([]);
  const [cihazEslemeleri, setCihazEslemeleri] = useState<LabCihazEslemesi[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);
  const [uyariAcik, setUyariAcik] = useState(true);
  const [acikIstem, setAcikIstem] = useState<string | null>(null);
  const [yeniAcik, setYeniAcik] = useState(false);
  const [yeni, setYeni] = useState({ hasta: '', saglayici: '', panel: '', sistem: 'external_reference_lab' as LabSistemTuru, cihaz: '', numune: '', disKimlik: '' });
  const [sonucIstemi, setSonucIstemi] = useState<LabIstemi | null>(null);
  const [sonucAsamasi, setSonucAsamasi] = useState<'partial' | 'final' | 'corrected'>('final');
  const [sonucAnalitleri, setSonucAnalitleri] = useState<LabAnalitGirdisi[]>([]);
  const [ocrAcik, setOcrAcik] = useState(false);
  const [ocrIstemi, setOcrIstemi] = useState('');
  const [ocrCihazi, setOcrCihazi] = useState('');
  const [ocrSatirlari, setOcrSatirlari] = useState<OcrBirlestirme[]>([]);
  const [ocrIlerleme, setOcrIlerleme] = useState<number | null>(null);
  const [ocrDurum, setOcrDurum] = useState('');
  const [incelemeNotu, setIncelemeNotu] = useState<Record<string, string>>({});
  const dosyaAlani = useRef<HTMLInputElement>(null);

  const yukle = useCallback(async () => {
    setHata(null);
    try {
      const [i, h, p, k, a, s, d, kk, ka, c, ce] = await Promise.all([
        labIstemleriniOku(klinik), hastalariOku(klinik), labPanelleriniOku(),
        labKalitesiniOku(klinik), labAnalitleriniOku(klinik), labSurumleriniOku(klinik),
        labDegerlendirmeleriniOku(klinik), klinikKaynaklariniOku(), kuralAciklamalariniOku(),
        labCihazlariniOku(klinik), labCihazEslemeleriniOku(klinik),
      ]);
      setIstemler(i); setHastalar(h); setPaneller(p); setKalite(k); setAnalitler(a);
      setSurumler(s); setDegerlendirmeler(d); setKaynaklar(kk); setKurallar(ka);
      setCihazlar(c); setCihazEslemeleri(ce);
    } catch (e) { setHata((e as Error).message); setIstemler([]); }
  }, [klinik]);

  useEffect(() => { void yukle(); }, [yukle]);

  const hastaAdi = (id: string) => hastalar.find((hasta) => hasta.pet_id === id)?.pet_name ?? 'Hasta';
  const panel = (istem: LabIstemi) => paneller.find((satir) => satir.code === istem.panel_code);
  const istemAnalitleri = (istem: string) => analitler.filter((satir) => satir.request_id === istem);
  const istemKalitesi = (istem: string) => kalite.find((satir) => satir.request_id === istem);
  const istemDegerlendirmesi = (istem: string) => degerlendirmeler.find((satir) => satir.request_id === istem);
  const acikIstemler = (istemler ?? []).filter((satir) => !['reviewed', 'cancelled'].includes(satir.status));
  const sonucHazir = (istemler ?? []).filter((satir) => satir.status === 'result_ready').length;
  const teknikEksik = kalite.filter((satir) => satir.missing_codes.length || satir.unknown_codes.length || satir.missing_metadata_count).length;

  async function istemOlustur(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor || !yeni.hasta || !yeni.saglayici.trim() || !yeni.panel
        || (yeni.sistem === 'in_house_analyzer' && !yeni.cihaz)) return;
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      await labIstemiOlustur({ klinik, hasta: yeni.hasta, saglayici: yeni.saglayici.trim(), panel: yeni.panel, sistem: yeni.sistem, cihaz: yeni.cihaz || null, numune: yeni.numune.trim() || null, disKimlik: yeni.disKimlik.trim() || null });
      const profil = cihazlar.find((satir) => satir.id === ocrCihazi);
      setYeniAcik(false); setYeni({ hasta: '', saglayici: profil?.display_name ?? '', panel: '', sistem: profil?.lab_system_type ?? 'external_reference_lab', cihaz: ocrCihazi, numune: '', disKimlik: '' });
      setBilgi('Laboratuvar istemi oluşturuldu.'); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function durumYaz(istem: LabIstemi, durum: LabDurumu) {
    setBekliyor(true); setHata(null); setBilgi(null);
    try { await labDurumunuGuncelle({ istem: istem.id, durum, sonucNotu: istem.result_note }); setBilgi(`İstem durumu “${DURUM[durum]}” olarak güncellendi.`); await yukle(); }
    catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  function sonucFormunuAc(istem: LabIstemi) {
    const mevcut = istemAnalitleri(istem.id);
    const beklenen = panel(istem)?.expected_analytes ?? [];
    setSonucIstemi(istem);
    setSonucAsamasi(istem.current_result_revision > 0 ? 'corrected' : 'final');
    setSonucAnalitleri(mevcut.length ? mevcut.map((satir) => ({
      code: satir.analyte_code, name: satir.analyte_name, value: satir.numeric_value,
      text_value: satir.text_value, unit: satir.unit, reference_low: satir.reference_low,
      reference_high: satir.reference_high, provider_flag: satir.provider_flag,
      method_name: satir.method_name, measured_at: satir.measured_at,
    })) : (beklenen.length ? beklenen.map(bosAnalit) : [bosAnalit()]));
  }

  function analitGuncelle(index: number, alan: keyof LabAnalitGirdisi, deger: string) {
    setSonucAnalitleri((liste) => liste.map((satir, i) => i !== index ? satir : {
      ...satir,
      [alan]: ['value', 'reference_low', 'reference_high'].includes(alan)
        ? (deger.trim() === '' ? null : Number(deger.replace(',', '.'))) : (deger || null),
      ...(alan === 'code' && !satir.name ? { name: deger } : {}),
    }));
  }

  async function sonucuKaydet(e: React.FormEvent) {
    e.preventDefault();
    if (!sonucIstemi || bekliyor) return;
    const gecerli = sonucAnalitleri.filter((satir) => satir.code.trim() && satir.name.trim()
      && (satir.value != null || String(satir.text_value ?? '').trim()));
    if (gecerli.length === 0 || gecerli.some((satir) => satir.reference_low != null && satir.reference_high != null && satir.reference_low > satir.reference_high)) {
      return setHata('Her analit için kod, ad ve sayısal veya metinsel sonuç girin; referans aralığını kontrol edin.');
    }
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      const onceki = surumler.find((satir) => satir.request_id === sonucIstemi.id);
      await labSonucSurumuKaydet({ istem: sonucIstemi.id, asama: sonucAsamasi, analitler: gecerli, duzeltme: sonucAsamasi === 'corrected' ? onceki?.id ?? null : null, kaynak: 'manual', beklenenSurum: sonucIstemi.current_result_revision, cihaz: sonucIstemi.device_id });
      setSonucIstemi(null); setBilgi('Yapılandırılmış sonuç yeni sürüm olarak kaydedildi.'); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function fotografiOku(dosya: File) {
    const istem = acikIstemler.find((satir) => satir.id === ocrIstemi);
    const cihaz = cihazlar.find((satir) => satir.id === ocrCihazi && satir.is_active);
    const beklenen = istem ? panel(istem)?.expected_analytes ?? [] : [];
    if (!istem || !cihaz || beklenen.length === 0) return setHata('Önce açık istemi ve sonucu üreten aktif cihazı seçin.');
    if (istem.device_id && istem.device_id !== cihaz.id) return setHata('Bu istem başka bir cihaza bağlı. Sonuçları karıştırmak yerine yeni istem açın.');
    const izinliTurler = new Set(['image/jpeg', 'image/png', 'image/webp']);
    if (!izinliTurler.has(dosya.type)) {
      if (dosyaAlani.current) dosyaAlani.current.value = '';
      return setHata('Yalnız JPEG, PNG veya WebP biçiminde cihaz fotoğrafı seçin.');
    }
    if (dosya.size > 12 * 1024 * 1024) {
      if (dosyaAlani.current) dosyaAlani.current.value = '';
      return setHata('Cihaz fotoğrafı en fazla 12 MB olabilir. Daha küçük bir görüntü seçin.');
    }
    const nesneAdresi = URL.createObjectURL(dosya);
    setBekliyor(true); setHata(null); setOcrIlerleme(0); setOcrDurum('OCR motoru hazırlanıyor');
    try {
      const { createWorker } = await import('tesseract.js');
      const worker = await createWorker('eng', 1, {
        logger: (olay) => {
          setOcrDurum(olay.status === 'recognizing text' ? 'Cihaz ekranı okunuyor' : 'OCR hazırlanıyor');
          if (typeof olay.progress === 'number') setOcrIlerleme(Math.round(olay.progress * 100));
        },
      });
      try {
        const sonuc = await worker.recognize(nesneAdresi);
        const eslemeler = cihazEslemeleri.filter((satir) => satir.device_id === cihaz.id);
        const taranan = cihazAdaylariniNormallestir(ocrMetniniCoz(sonuc.data.text,
          [...new Set([...beklenen, ...eslemeler.map((satir) => satir.raw_code)])]), eslemeler);
        setOcrSatirlari(ocrSonucunuBirlestir(taranan, istemAnalitleri(istem.id)));
        setOcrDurum('Fotoğraf silindi; doğrulanabilir taslak hazır'); setOcrIlerleme(100);
      } finally { await worker.terminate(); }
    } catch (e) { setHata((e as Error).message); setOcrDurum(''); setOcrIlerleme(null); }
    finally {
      URL.revokeObjectURL(nesneAdresi);
      if (dosyaAlani.current) dosyaAlani.current.value = '';
      setBekliyor(false);
    }
  }

  const ocrSayilari = useMemo(() => ocrSatirlari.reduce((sayac, satir) => ({ ...sayac, [satir.status]: sayac[satir.status] + 1 }),
    { same: 0, new: 0, conflict: 0, unreadable: 0, existing_only: 0 }), [ocrSatirlari]);
  const cozulmemis = ocrSatirlari.filter((satir) => satir.choice === 'unresolved').length;
  const degisiklikVar = ocrSatirlari.some((satir) => satir.choice === 'scanned'
    && (satir.status === 'new' || satir.status === 'conflict' || satir.status === 'unreadable'));

  function ocrSec(satirKodu: string, secim: 'existing' | 'scanned') {
    setOcrSatirlari((liste) => liste.map((satir) => satir.code === satirKodu ? { ...satir, choice: secim } : satir));
  }

  function okunamayanDegeriYaz(satirKodu: string, deger: string) {
    const sayisal = deger.trim() === '' ? null : Number(deger.replace(',', '.'));
    setOcrSatirlari((liste) => liste.map((satir) => satir.code !== satirKodu || !satir.scanned ? satir : {
      ...satir,
      status: sayisal == null || !Number.isFinite(sayisal) ? 'unreadable' : satir.existing ? 'conflict' : 'new',
      choice: sayisal == null || !Number.isFinite(sayisal) ? (satir.existing ? 'existing' : 'unresolved') : 'scanned',
      scanned: { ...satir.scanned, value: sayisal != null && Number.isFinite(sayisal) ? sayisal : null },
    }));
  }

  async function ocrSonucunuKaydet() {
    const istem = acikIstemler.find((satir) => satir.id === ocrIstemi);
    if (!istem || !ocrCihazi || cozulmemis > 0 || !degisiklikVar || bekliyor) return;
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      const onceki = surumler.find((satir) => satir.request_id === istem.id);
      await labSonucSurumuKaydet({ istem: istem.id, asama: istem.current_result_revision > 0 ? 'corrected' : 'final', analitler: birlestirilmisAnalitler(ocrSatirlari), duzeltme: istem.current_result_revision > 0 ? onceki?.id ?? null : null, kaynak: 'image_ocr', beklenenSurum: istem.current_result_revision, cihaz: ocrCihazi });
      setOcrSatirlari([]); setOcrIstemi(''); setOcrCihazi(''); setOcrAcik(false); setOcrIlerleme(null);
      setBilgi('Fotoğraf saklanmadan doğrulanan sonuç sürümü kaydedildi.'); await yukle();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function degerlendirmeUret(istem: string) {
    setBekliyor(true); setHata(null);
    try { await labDegerlendirmesiUret(istem); setBilgi('Açıklanabilir klinik destek kuralları çalıştırıldı.'); await yukle(); }
    catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function degerlendirmeyiIncele(degerlendirme: LabDegerlendirmesi, durum: 'accepted' | 'rejected') {
    setBekliyor(true); setHata(null);
    try { await labDegerlendirmesiniIncele(degerlendirme.id, durum, incelemeNotu[degerlendirme.id]?.trim() || null); setBilgi(durum === 'accepted' ? 'Klinik destek veteriner tarafından kabul edildi.' : 'Klinik destek veteriner tarafından reddedildi.'); await yukle(); }
    catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  if (istemler === null) return <Yukleniyor metin="Laboratuvar akışı yükleniyor" />;

  return <section className="pnl-bolum pnl-yeni-modul pnl-yeni-modul-operasyon">
    <header className="pnl-bolum-basi pnl-yeni-modul-basi"><div><p className="pnl-aciklama">İstem, cihaz sonucu, teknik kalite, sürüm geçmişi ve kaynaklı klinik karar desteğini tek izlenebilir akışta yönetin.</p></div><div className="pnl-basi-dugmeler"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setOcrAcik(true)}><Camera size={15} /> Cihaz ekranını oku</button><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => setYeniAcik(true)}><Plus size={15} /> İstem oluştur</button></div></header>
    {uyariAcik ? <div className="pnl-klinik-uyari"><ShieldCheck size={20} /><div><strong>Veteriner doğrulaması zorunludur</strong><p>OCR ve açıklanabilir kurallar eksik veya hatalı olabilir; tanı ve tedavi önerisi değildir. Muayene ve klinik kararın yerini tutmaz.</p></div><button type="button" aria-label="Uyarıyı kapat" onClick={() => setUyariAcik(false)}><X size={16} /></button></div> : null}
    {hata ? <Hata mesaj={hata} kucuk tekrar={() => { setHata(null); void yukle(); }} /> : null}
    {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}
    <div className="pnl-kartlar"><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon"><FlaskConical size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">İstem</span><span className="pnl-kart-deger">{istemler.length}</span><span className="pnl-kart-anlam">Toplam laboratuvar istemi</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon"><Beaker size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Açık akış</span><span className="pnl-kart-deger">{acikIstemler.length}</span><span className="pnl-kart-anlam">İşlem bekleyen</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-altin"><FileCheck2 size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Sonuç hazır</span><span className="pnl-kart-deger">{sonucHazir}</span><span className="pnl-kart-anlam">Hekim incelemesi bekliyor</span></span></div><div className="pnl-kart pnl-kart-durgun"><span className="pnl-kart-ikon pnl-kart-ikon-uyari"><CircleAlert size={21} /></span><span className="pnl-kart-govde"><span className="pnl-kart-ad">Teknik eksik</span><span className="pnl-kart-deger">{teknikEksik}</span><span className="pnl-kart-anlam">Eşleme veya metadata sorunu</span></span></div></div>

    <LabCihazlari klinik={klinik} sahip={sahip} cihazlar={cihazlar} eslemeler={cihazEslemeleri} yenile={yukle} />
    <section className="pnl-widget"><div className="pnl-widget-govde"><div className="pnl-alan">
      <label htmlFor="lab-calisma-cihazi">İstem ve OCR için çalışma cihazı</label>
      <select id="lab-calisma-cihazi" value={ocrCihazi} onChange={(e) => {
        const cihaz = e.target.value; const profil = cihazlar.find((satir) => satir.id === cihaz);
        setOcrCihazi(cihaz); setYeni((onceki) => ({ ...onceki, cihaz,
          ...(profil ? { saglayici: profil.display_name, sistem: profil.lab_system_type } : {}) }));
        setOcrSatirlari([]);
      }}><option value="">Cihaz seçin</option>{cihazlar.filter((cihaz) => cihaz.is_active).map((cihaz) => <option key={cihaz.id} value={cihaz.id}>{cihaz.display_name} · {cihaz.manufacturer} {cihaz.model}</option>)}</select>
      <span className="pnl-alan-ipucu">Seçim isteme ve sonuç revizyonuna kaydedilir. Başka cihazdan sonuç gelirse aynı isteme karıştırılmaz.</span>
    </div></div></section>

    {istemler.length === 0 ? <Bos baslik="Henüz laboratuvar istemi yok" aciklama="Hasta ve panel seçerek ilk laboratuvar istemini oluşturun." /> : <div className="pnl-lab-listesi">{istemler.map((istem) => {
      const p = panel(istem); const q = istemKalitesi(istem.id); const a = istemAnalitleri(istem.id); const d = istemDegerlendirmesi(istem.id); const acik = acikIstem === istem.id;
      return <article className="pnl-widget pnl-lab-karti" key={istem.id}><button type="button" className="pnl-lab-kart-basi" aria-expanded={acik} aria-controls={`laboratuvar-${istem.id}-ayrinti`} onClick={() => setAcikIstem(acik ? null : istem.id)}><span className="pnl-widget-ikon"><FlaskConical size={17} /></span><span><strong>{hastaAdi(istem.pet_id)} · {p ? DISIPLIN[p.discipline] : istem.test_name}</strong><small>{istem.provider_name} · {new Date(istem.created_at).toLocaleString('tr-TR')}</small></span><em className={`pnl-durum pnl-durum-${istem.status}`}>{DURUM[istem.status]}</em>{acik ? <ChevronUp size={17} /> : <ChevronDown size={17} />}</button>
      {acik ? <div id={`laboratuvar-${istem.id}-ayrinti`} className="pnl-lab-ayrinti"><div className="pnl-lab-meta"><span><b>Sistem</b>{istem.lab_system_type ? SISTEM[istem.lab_system_type] : '—'}</span><span><b>Numune</b>{istem.specimen || '—'}</span><span><b>Dış istem</b>{istem.external_request_id || '—'}</span><span><b>Sonuç sürümü</b>{istem.current_result_revision || 'Henüz yok'}</span></div>
      {q ? <div className="pnl-lab-kalite"><strong>Sonuç kapsamı ve teknik kalite</strong><p>Gelen {q.received_count} / beklenen {q.expected_count} · eksik {q.missing_codes.length} · panel dışı {q.unexpected_codes.length} · bilinmeyen {q.unknown_codes.length}</p><div>{q.missing_codes.length ? <span>Eksik: {q.missing_codes.join(', ')}</span> : null}{q.unexpected_codes.length ? <span>Panel dışı: {q.unexpected_codes.join(', ')}</span> : null}{q.unknown_codes.length ? <span>Bilinmeyen: {q.unknown_codes.join(', ')}</span> : null}{q.missing_metadata_count ? <span>{q.missing_metadata_count} analitte birim/referans/yöntem eksik</span> : null}<span>Referans dışı: {q.below_count} düşük · {q.above_count} yüksek</span></div></div> : null}
      {a.length ? <div className="pnl-lab-analitler"><table className="pnl-tablo"><thead><tr><th>Analit</th><th>Sonuç</th><th>Referans</th><th>Yöntem</th></tr></thead><tbody>{a.map((satir) => <tr key={satir.id}><td><strong>{satir.analyte_code}</strong><small>{satir.analyte_name}</small></td><td>{satir.numeric_value ?? satir.text_value ?? '—'} {satir.unit}</td><td>{satir.reference_low ?? '—'}–{satir.reference_high ?? '—'} {satir.provider_flag ? <em>{satir.provider_flag}</em> : null}</td><td>{satir.method_name || '—'}</td></tr>)}</tbody></table></div> : null}
      {d ? <div className="pnl-karar-destegi"><header><Sparkles size={17} /><strong>Klinik karar desteği · sürüm {d.revision}</strong><span>{d.status === 'draft' ? 'Hekim incelemesi bekliyor' : d.status === 'accepted' ? 'Hekim kabul etti' : 'Hekim reddetti'}</span></header><p className="pnl-widget-not">Eksik veya hatalı olabilir; tanı ya da tedavi önerisi değildir. Her bulgu veteriner tarafından doğrulanmalıdır.</p>{d.missing_context.length ? <p>Eksik bağlam: {d.missing_context.join(', ')}</p> : null}{d.clinic_lab_findings.map((bulgu) => { const metin = BULGU[bulgu.finding_code] ?? { baslik: bulgu.finding_code, aciklama: 'Kural tabanlı bulgu; hasta bağlamıyla doğrulanmalıdır.' }; const kural = kurallar.find((satir) => satir.finding_code === bulgu.finding_code); return <details key={bulgu.id}><summary><b>{metin.baslik}</b><span>{bulgu.confidence} güven · {bulgu.source_codes.join(', ')}</span></summary><p>{metin.aciklama}</p>{kural ? <p>Kural v{kural.rule_version} · {new Date(kural.reviewed_on).toLocaleDateString('tr-TR')} tarihinde gözden geçirildi · kaynak kodları: {kural.source_codes.join(', ')}</p> : null}</details>; })}{d.status === 'draft' ? <><div className="pnl-alan"><label htmlFor={`inceleme-${d.id}`}>Hekim inceleme notu</label><textarea id={`inceleme-${d.id}`} value={incelemeNotu[d.id] ?? ''} onChange={(e) => setIncelemeNotu((notlar) => ({ ...notlar, [d.id]: e.target.value }))} /></div><div className="pnl-urun-eylemler"><button type="button" className="pnl-dugme pnl-dugme-olumsuz" onClick={() => void degerlendirmeyiIncele(d, 'rejected')}>Hekim reddediyor</button><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => void degerlendirmeyiIncele(d, 'accepted')}><Check size={14} /> Hekim kabul ediyor</button></div></> : null}</div> : null}
      <div className="pnl-urun-eylemler">{istem.status === 'requested' ? <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => void durumYaz(istem, 'accepted')}>Kabul et</button> : null}{istem.status === 'accepted' ? <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => void durumYaz(istem, 'processing')}>İşleme al</button> : null}{!['reviewed', 'cancelled'].includes(istem.status) ? <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => sonucFormunuAc(istem)}>Yapılandırılmış sonuç</button> : null}{istem.status === 'result_ready' ? <><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => void degerlendirmeUret(istem.id)} disabled={bekliyor}>Kuralları çalıştır</button><button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => void durumYaz(istem, 'reviewed')}>Hekim inceledi</button></> : null}{!['reviewed', 'cancelled'].includes(istem.status) ? <button type="button" className="pnl-dugme pnl-dugme-olumsuz" onClick={() => void durumYaz(istem, 'cancelled')}>İptal et</button> : null}</div>
      </div> : null}</article>;
    })}</div>}

    <section className="pnl-widget pnl-kaynak-kutuphanesi"><header className="pnl-widget-basi"><span className="pnl-widget-ikon"><BookOpen size={17} /></span><h3>Akademik kaynak kütüphanesi</h3></header><div className="pnl-widget-govde"><p className="pnl-widget-not">Kuralların gerekçesi sürüm ve kaynak koduna sabitlenir. Kaynak bağlantıları tanı üretmez; veterinerin birincil kaynağı incelemesini sağlar.</p><div className="pnl-kaynaklar">{kaynaklar.map((kaynak) => <a key={kaynak.code} href={kaynak.url} target="_blank" rel="noopener noreferrer"><strong>{kaynak.publisher}</strong><span>{kaynak.title}</span><small>{kaynak.version_label || kaynak.code}</small></a>)}</div></div></section>

    <Diyalog acik={yeniAcik} kapat={() => setYeniAcik(false)} baslik="Yeni laboratuvar istemi" aciklama="Hasta, sistem türü ve panel seçimi sonuçların teknik kalite denetimini belirler."><form onSubmit={istemOlustur}><div className="pnl-alan"><label htmlFor="lab-hasta">Hasta</label><select id="lab-hasta" required value={yeni.hasta} onChange={(e) => setYeni({ ...yeni, hasta: e.target.value })}><option value="">Hasta seçin</option>{hastalar.map((hasta) => <option key={hasta.pet_id} value={hasta.pet_id}>{hasta.pet_name}</option>)}</select></div><div className="pnl-alan"><label htmlFor="lab-sistem">Laboratuvar sistem türü</label><select id="lab-sistem" value={yeni.sistem} onChange={(e) => setYeni({ ...yeni, sistem: e.target.value as LabSistemTuru })}>{Object.entries(SISTEM).map(([kod, ad]) => <option key={kod} value={kod}>{ad}</option>)}</select></div><div className="pnl-alan"><label htmlFor="lab-panel">Test / panel</label><select id="lab-panel" required value={yeni.panel} onChange={(e) => setYeni({ ...yeni, panel: e.target.value })}><option value="">Panel seçin</option>{paneller.map((satir) => <option key={satir.code} value={satir.code}>{DISIPLIN[satir.discipline]} · {satir.code} · {satir.expected_analytes.length} analit</option>)}</select></div><div className="pnl-alan"><label htmlFor="lab-saglayici">Laboratuvar / cihaz adı</label><input id="lab-saglayici" required value={yeni.saglayici} onChange={(e) => setYeni({ ...yeni, saglayici: e.target.value })} /></div><div className="pnl-form-ikili"><div className="pnl-alan"><label htmlFor="lab-numune">Numune</label><input id="lab-numune" value={yeni.numune} onChange={(e) => setYeni({ ...yeni, numune: e.target.value })} placeholder="Serum, EDTA kan…" /></div><div className="pnl-alan"><label htmlFor="lab-dis">Sağlayıcı istem no.</label><input id="lab-dis" value={yeni.disKimlik} onChange={(e) => setYeni({ ...yeni, disKimlik: e.target.value })} /></div></div><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setYeniAcik(false)}>Vazgeç</button><button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !yeni.hasta || !yeni.panel || !yeni.saglayici.trim()}>{bekliyor ? 'Oluşturuluyor…' : 'İstemi oluştur'}</button></div></form></Diyalog>

    <Diyalog acik={sonucIstemi !== null} kapat={() => setSonucIstemi(null)} baslik="Yapılandırılmış laboratuvar sonucu" aciklama="Her analiti laboratuvarın birimi, referans aralığı ve yöntemiyle girin. Önceki sürüm silinmez.">{sonucIstemi ? <form onSubmit={sonucuKaydet}><div className="pnl-alan"><label htmlFor="lab-asama">Sonuç aşaması</label><select id="lab-asama" value={sonucAsamasi} onChange={(e) => setSonucAsamasi(e.target.value as typeof sonucAsamasi)}><option value="partial">Parsiyel</option><option value="final">Final</option>{sonucIstemi.current_result_revision > 0 ? <option value="corrected">Düzeltilmiş yeni sürüm</option> : null}</select></div><div className="pnl-analit-formu">{sonucAnalitleri.map((satir, index) => <fieldset key={`${satir.code}-${index}`}><legend>Analit {index + 1}</legend><div className="pnl-form-ikili"><div className="pnl-alan"><label>Kod</label><input value={satir.code} onChange={(e) => analitGuncelle(index, 'code', e.target.value.toUpperCase())} /></div><div className="pnl-alan"><label>Ad</label><input value={satir.name} onChange={(e) => analitGuncelle(index, 'name', e.target.value)} /></div><div className="pnl-alan"><label>Sayısal değer</label><input inputMode="decimal" value={satir.value ?? ''} onChange={(e) => analitGuncelle(index, 'value', e.target.value)} /></div><div className="pnl-alan"><label>Metinsel / nitel sonuç</label><input value={satir.text_value ?? ''} onChange={(e) => analitGuncelle(index, 'text_value', e.target.value)} /></div><div className="pnl-alan"><label>Birim</label><input value={satir.unit ?? ''} onChange={(e) => analitGuncelle(index, 'unit', e.target.value)} /></div><div className="pnl-alan"><label>Yöntem</label><input value={satir.method_name ?? ''} onChange={(e) => analitGuncelle(index, 'method_name', e.target.value)} /></div><div className="pnl-alan"><label>Referans alt</label><input inputMode="decimal" value={satir.reference_low ?? ''} onChange={(e) => analitGuncelle(index, 'reference_low', e.target.value)} /></div><div className="pnl-alan"><label>Referans üst</label><input inputMode="decimal" value={satir.reference_high ?? ''} onChange={(e) => analitGuncelle(index, 'reference_high', e.target.value)} /></div></div><button type="button" className="pnl-metin-dugme pnl-eksi" onClick={() => setSonucAnalitleri((liste) => liste.filter((_, i) => i !== index))}>Analiti kaldır</button></fieldset>)}</div><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setSonucAnalitleri((liste) => [...liste, bosAnalit()])}><Plus size={14} /> Analit ekle</button><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setSonucIstemi(null)}>Vazgeç</button><button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor}>{bekliyor ? 'Kaydediliyor…' : 'Sonuç sürümünü kaydet'}</button></div></form> : null}</Diyalog>

    <Diyalog acik={ocrAcik} kapat={() => { if (!bekliyor) { setOcrAcik(false); setOcrSatirlari([]); } }} baslik="Cihaz ekranından sonuç tara" aciklama="Fotoğraf yalnız bu tarayıcı sekmesinde OCR için kullanılır; sunucuya yüklenmez ve okuma tamamlanınca nesne adresi silinir."><div className="pnl-alan"><label htmlFor="ocr-istem">Açık laboratuvar istemi</label><select id="ocr-istem" value={ocrIstemi} onChange={(e) => { setOcrIstemi(e.target.value); setOcrSatirlari([]); }}><option value="">Hasta ve istem seçin</option>{acikIstemler.filter((istem) => panel(istem)?.expected_analytes.length).map((istem) => <option key={istem.id} value={istem.id}>{hastaAdi(istem.pet_id)} · {panel(istem)?.code} · {istem.provider_name}</option>)}</select></div><label className={ocrIstemi && !bekliyor ? 'pnl-dosya-alani' : 'pnl-dosya-alani pnl-dosya-kapali'}><Camera size={24} /><strong>Cihaz ekranı fotoğrafını seç veya çek</strong><span>JPEG, PNG veya WebP · fotoğraf saklanmaz</span><input ref={dosyaAlani} type="file" accept="image/jpeg,image/png,image/webp" capture="environment" disabled={!ocrIstemi || bekliyor} onChange={(e) => { const dosya = e.target.files?.[0]; if (dosya) void fotografiOku(dosya); }} /></label>{ocrIlerleme != null ? <div className="pnl-ilerleme"><span style={{ width: `${ocrIlerleme}%` }} /><p>{ocrDurum} · %{ocrIlerleme}</p></div> : null}{ocrSatirlari.length ? <><div className="pnl-gizlilik-notu"><ShieldCheck size={17} /><span>Fotoğraf silindi; yalnız aşağıdaki geçici OCR taslağı bellekte. Kayda yalnız veterinerin doğruladığı analitler gider.</span></div><p className="pnl-ocr-ozet">Aynı {ocrSayilari.same} · yeni {ocrSayilari.new} · çakışan {ocrSayilari.conflict} · okunamayan {ocrSayilari.unreadable} · mevcut korunan {ocrSayilari.existing_only}</p>{ocrSayilari.conflict ? <p className="pnl-ocr-politika">Çakışmalarda mevcut klinik değeri varsayılan korunur. Yalnız açıkça “Tarananı kullan” seçtiğiniz satırlar değişir.</p> : null}<div className="pnl-ocr-satirlar">{ocrSatirlari.map((satir) => <div key={satir.code} className={`pnl-ocr-satir pnl-ocr-${satir.status}`}><header><strong>{satir.code}</strong><span>{OCR_DURUM[satir.status]}</span></header>{satir.status === 'conflict' ? <><p>Mevcut: {analitDegeri(satir.existing)}</p><p>Taranan: {ocrDegeri(satir)}</p><div className="pnl-segment"><button type="button" className={satir.choice === 'existing' ? 'pnl-segment-etkin' : ''} onClick={() => ocrSec(satir.code, 'existing')}>Mevcut değeri koru</button><button type="button" className={satir.choice === 'scanned' ? 'pnl-segment-etkin' : ''} onClick={() => ocrSec(satir.code, 'scanned')}>Tarananı kullan</button></div></> : satir.status === 'unreadable' && !satir.existing ? <div className="pnl-alan"><label htmlFor={`ocr-${satir.code}`}>Okunamayan değer (??)</label><input id={`ocr-${satir.code}`} inputMode="decimal" placeholder="Cihaz ekranından doğrulayıp girin" onChange={(e) => okunamayanDegeriYaz(satir.code, e.target.value)} /></div> : <p>{satir.choice === 'existing' ? analitDegeri(satir.existing) : ocrDegeri(satir)}</p>}</div>)}</div>{cozulmemis ? <p className="pnl-ocr-politika">{cozulmemis} yeni değer okunamadı. Cihaz ekranından doğrulayıp sayısal değeri girmeden sonuç kaydedilemez.</p> : !degisiklikVar ? <p className="pnl-widget-not">Tarama mevcut sonuçla aynı; gereksiz yeni revizyon oluşturulmayacak.</p> : null}<div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setOcrSatirlari([])}>Yeniden tara</button><button type="button" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || cozulmemis > 0 || !degisiklikVar} onClick={() => void ocrSonucunuKaydet()}>Doğrulanan sonucu kaydet</button></div></> : null}</Diyalog>
  </section>;
}
