import { useState } from 'react';
import { Cpu, Plus } from 'lucide-react';

import Hata from './Hata';
import {
  labCihazEslemesiniKaydet, labCihaziniAktiflestir, labCihaziniKaydet,
  type LabCihazEslemesi, type LabCihazi, type LabDisiplini, type LabSistemTuru,
} from './lab-veri';

const DISIPLINLER: { kod: LabDisiplini; ad: string }[] = [
  { kod: 'hematology', ad: 'Hematoloji' }, { kod: 'biochemistry', ad: 'Biyokimya' },
  { kod: 'urinalysis', ad: 'İdrar' }, { kod: 'blood_gas', ad: 'Kan gazı' },
  { kod: 'coagulation', ad: 'Koagülasyon' }, { kod: 'endocrinology', ad: 'Endokrinoloji' },
  { kod: 'microbiology', ad: 'Mikrobiyoloji' }, { kod: 'pathology', ad: 'Patoloji' },
];

export default function LabCihazlari({ klinik, sahip, cihazlar, eslemeler, yenile,
  acik: denetimliAcik, acikDegistir }: {
  klinik: string; sahip: boolean; cihazlar: LabCihazi[]; eslemeler: LabCihazEslemesi[];
  yenile: () => Promise<void>;
  acik?: boolean;
  acikDegistir?: (acik: boolean) => void;
}) {
  const [yerelAcik, setYerelAcik] = useState(false);
  const acik = denetimliAcik ?? yerelAcik;
  const acikligiDegistir = (deger: boolean) => acikDegistir ? acikDegistir(deger) : setYerelAcik(deger);
  const [bekliyor, setBekliyor] = useState(false);
  const [hata, setHata] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [form, setForm] = useState({ ad: '', uretici: '', model: '', kimlik: '', seri: '',
    konum: '', sistem: 'in_house_analyzer' as LabSistemTuru, disiplinler: ['hematology'] as LabDisiplini[] });
  const [esleme, setEsleme] = useState({ cihaz: '', hamKod: '', kanonikKod: '', hamBirim: '',
    kanonikBirim: '', katsayi: '1', yontem: '' });

  async function cihazKaydet(e: React.FormEvent) {
    e.preventDefault(); if (bekliyor) return;
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      await labCihaziniKaydet({ klinik, ad: form.ad, uretici: form.uretici, model: form.model,
        kimlik: form.kimlik, seriSon4: form.seri || null, konum: form.konum || null,
        sistem: form.sistem, disiplinler: form.disiplinler });
      setForm({ ad: '', uretici: '', model: '', kimlik: '', seri: '', konum: '',
        sistem: 'in_house_analyzer', disiplinler: ['hematology'] });
      setBilgi('Cihaz profili kaydedildi. Artık istem ve OCR taramasında seçilebilir.');
      await yenile();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function eslemeKaydet(e: React.FormEvent) {
    e.preventDefault(); if (bekliyor) return;
    const katsayi = Number(esleme.katsayi.replace(',', '.'));
    if (!Number.isFinite(katsayi) || katsayi <= 0) return setHata('Dönüşüm katsayısı sıfırdan büyük olmalı.');
    setBekliyor(true); setHata(null); setBilgi(null);
    try {
      await labCihazEslemesiniKaydet({ cihaz: esleme.cihaz, hamKod: esleme.hamKod,
        kanonikKod: esleme.kanonikKod, hamBirim: esleme.hamBirim || null,
        kanonikBirim: esleme.kanonikBirim || null, katsayi, yontem: esleme.yontem || null });
      setEsleme((onceki) => ({ ...onceki, hamKod: '', kanonikKod: '', hamBirim: '',
        kanonikBirim: '', katsayi: '1', yontem: '' }));
      setBilgi('Cihaza özgü analit eşlemesi kaydedildi.'); await yenile();
    } catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  async function aktifDegistir(cihaz: LabCihazi) {
    setBekliyor(true); setHata(null);
    try { await labCihaziniAktiflestir(cihaz.id, !cihaz.is_active); await yenile(); }
    catch (e) { setHata((e as Error).message); } finally { setBekliyor(false); }
  }

  return <section id="laboratuvar-cihazlari" className="pnl-widget pnl-lab-cihazlar">
    <header className="pnl-widget-basi"><span className="pnl-widget-ikon"><Cpu size={17} /></span>
      <h3>Laboratuvar cihazları</h3><button type="button" className="pnl-metin-dugme" aria-expanded={acik} aria-controls="laboratuvar-cihaz-ayrintilari" onClick={() => acikligiDegistir(!acik)}>
        {acik ? 'Kapat' : `${cihazlar.filter((c) => c.is_active).length} aktif cihaz`}
      </button></header>
    {acik ? <div id="laboratuvar-cihaz-ayrintilari" className="pnl-widget-govde"><p className="pnl-widget-not">Her istem ve sonuç revizyonu kaynak cihaza sabitlenir. Aynı isteme farklı cihaz sonucu yazılamaz; bu durumda yeni istem açılır.</p>
      {hata ? <Hata mesaj={hata} kucuk /> : null}{bilgi ? <p className="pnl-bilgi">{bilgi}</p> : null}
      {cihazlar.length === 0 ? <p className="pnl-widget-bos">Henüz cihaz profili yok. İlk cihazı ekleyerek istem, OCR ve analit eşlemelerini aynı kaynağa bağlayın.</p> : <div className="pnl-cihaz-listesi">{cihazlar.map((cihaz) => <article key={cihaz.id} className="pnl-cihaz-karti">
        <div><strong>{cihaz.display_name}</strong><p>{cihaz.manufacturer} {cihaz.model} · {cihaz.location || 'Konum belirtilmedi'}</p>
          <small>{cihaz.disciplines.map((d) => DISIPLINLER.find((x) => x.kod === d)?.ad ?? d).join(' · ')} · {eslemeler.filter((e) => e.device_id === cihaz.id).length} eşleme</small></div>
        <span className={cihaz.is_active ? 'pnl-etiket pnl-etiket-yesil' : 'pnl-etiket'}>{cihaz.is_active ? 'Aktif' : 'Pasif'}</span>
        {sahip ? <button type="button" className="pnl-dugme pnl-dugme-sade" disabled={bekliyor} onClick={() => void aktifDegistir(cihaz)}>{cihaz.is_active ? 'Pasife al' : 'Yeniden etkinleştir'}</button> : null}
      </article>)}</div>}
      {sahip ? <div className="pnl-cihaz-formlari"><form onSubmit={cihazKaydet}><h4><Plus size={15} /> Cihaz profili ekle</h4>
        <div className="pnl-form-ikili"><div className="pnl-alan"><label>Cihaz adı</label><input required minLength={2} value={form.ad} onChange={(e) => setForm({ ...form, ad: e.target.value })} /></div><div className="pnl-alan"><label>Cihaz / gateway kimliği</label><input required value={form.kimlik} onChange={(e) => setForm({ ...form, kimlik: e.target.value })} /></div><div className="pnl-alan"><label>Üretici</label><input required value={form.uretici} onChange={(e) => setForm({ ...form, uretici: e.target.value })} /></div><div className="pnl-alan"><label>Model</label><input required value={form.model} onChange={(e) => setForm({ ...form, model: e.target.value })} /></div><div className="pnl-alan"><label>Seri son 4</label><input maxLength={4} value={form.seri} onChange={(e) => setForm({ ...form, seri: e.target.value })} /></div><div className="pnl-alan"><label>Konum</label><input value={form.konum} onChange={(e) => setForm({ ...form, konum: e.target.value })} /></div></div>
        <div className="pnl-alan"><label>Sistem türü</label><select value={form.sistem} onChange={(e) => setForm({ ...form, sistem: e.target.value as LabSistemTuru })}><option value="in_house_analyzer">Klinik içi analiz cihazı</option><option value="lis_middleware">LIS / ara katman</option><option value="external_reference_lab">Dış referans laboratuvarı</option><option value="manual_file_import">Manuel dosya</option></select></div>
        <fieldset className="pnl-secilebilir-liste"><legend>Desteklenen disiplinler</legend>{DISIPLINLER.map((d) => <label key={d.kod}><input type="checkbox" checked={form.disiplinler.includes(d.kod)} onChange={(e) => setForm({ ...form, disiplinler: e.target.checked ? [...form.disiplinler, d.kod] : form.disiplinler.filter((x) => x !== d.kod) })} /><span>{d.ad}</span></label>)}</fieldset>
        <div className="pnl-form-eylem"><button className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || form.disiplinler.length === 0}>Cihazı kaydet</button></div></form>
        <form onSubmit={eslemeKaydet}><h4>Analit eşlemesi ekle</h4><p className="pnl-widget-not">Ham kodu kanonik koda bağlar; birim dönüşümü varsa katsayı kayıt altında kalır.</p>
          <div className="pnl-alan"><label>Cihaz</label><select required value={esleme.cihaz} onChange={(e) => setEsleme({ ...esleme, cihaz: e.target.value })}><option value="">Cihaz seçin</option>{cihazlar.filter((c) => c.is_active).map((c) => <option key={c.id} value={c.id}>{c.display_name}</option>)}</select></div>
          <div className="pnl-form-ikili"><div className="pnl-alan"><label>Ham cihaz kodu</label><input required value={esleme.hamKod} onChange={(e) => setEsleme({ ...esleme, hamKod: e.target.value })} /></div><div className="pnl-alan"><label>Kanonik kod</label><input required value={esleme.kanonikKod} onChange={(e) => setEsleme({ ...esleme, kanonikKod: e.target.value.toUpperCase() })} /></div><div className="pnl-alan"><label>Ham birim</label><input value={esleme.hamBirim} onChange={(e) => setEsleme({ ...esleme, hamBirim: e.target.value })} /></div><div className="pnl-alan"><label>Kanonik birim</label><input value={esleme.kanonikBirim} onChange={(e) => setEsleme({ ...esleme, kanonikBirim: e.target.value })} /></div><div className="pnl-alan"><label>Dönüşüm katsayısı</label><input inputMode="decimal" required value={esleme.katsayi} onChange={(e) => setEsleme({ ...esleme, katsayi: e.target.value })} /></div><div className="pnl-alan"><label>Yöntem</label><input value={esleme.yontem} onChange={(e) => setEsleme({ ...esleme, yontem: e.target.value })} /></div></div>
          <div className="pnl-form-eylem"><button className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !esleme.cihaz}>Eşlemeyi kaydet</button></div></form></div> : <p className="pnl-dipnot">Cihaz profili ve eşleme ayarlarını yalnız klinik sahibi değiştirebilir.</p>}
    </div> : null}
  </section>;
}
