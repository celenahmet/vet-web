import { useCallback, useEffect, useState } from 'react';
import { ImagePlus, Images, LoaderCircle } from 'lucide-react';

import Hata from './Hata';
import {
  guvenliGorselSil, guvenliGorselYukle, imzaliGorselAdresi, klinikFotografiEkle,
  klinikFotograflariniOku, klinikGorseliniGuncelle, type KlinikFotografi,
} from './medya-veri';

function Onizleme({ storageKey, alt }: { storageKey: string; alt: string }) {
  const [adres, setAdres] = useState<string | null>(null);
  useEffect(() => { let gecerli = true; imzaliGorselAdresi(storageKey).then((u) => { if (gecerli) setAdres(u); }).catch(() => setAdres('')); return () => { gecerli = false; }; }, [storageKey]);
  if (adres === null) return <span className="pnl-gorsel-yukleniyor"><LoaderCircle size={17} /></span>;
  if (!adres) return <span className="pnl-gorsel-yukleniyor">Görsel kaydı var; önizleme şu anda alınamadı</span>;
  return <img src={adres} alt={alt} loading="lazy" />;
}

export default function KlinikGaleri({ klinik, logo, kapak }: { klinik: string; logo: string | null; kapak: string | null }) {
  const [liste, setListe] = useState<KlinikFotografi[] | null>(null);
  const [islem, setIslem] = useState<'logo' | 'cover' | 'gallery' | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);

  const yukle = useCallback(() => klinikFotograflariniOku(klinik).then(setListe).catch((e: Error) => { setListe([]); setHata(e.message); }), [klinik]);
  useEffect(() => { setListe(null); yukle(); }, [yukle]);

  async function sec(hedef: 'logo' | 'cover' | 'gallery', dosya?: File) {
    if (!dosya || islem) return;
    setIslem(hedef); setHata(null); setBilgi(null);
    let key: string | null = null;
    try {
      key = await guvenliGorselYukle(dosya, `clinic-${klinik}`);
      if (hedef === 'gallery') await klinikFotografiEkle(klinik, key);
      else await klinikGorseliniGuncelle(klinik, hedef, key);
      setBilgi(hedef === 'gallery' ? 'Galeri görseli eklendi.' : hedef === 'logo' ? 'Logo güncellendi.' : 'Kapak güncellendi.');
      if (hedef === 'gallery') yukle(); else window.setTimeout(() => window.location.reload(), 500);
    } catch (e) {
      if (key) await Promise.allSettled([guvenliGorselSil(key)]);
      setHata((e as Error).message);
    }
    finally { setIslem(null); }
  }

  return <section className="pnl-widget pnl-klinik-galeri">
    <header className="pnl-widget-basi"><span className="pnl-widget-ikon"><Images size={17} /></span><h3>Logo, kapak ve galeri</h3></header>
    <div className="pnl-widget-govde">
      <p className="pnl-widget-not">Görseller tarayıcıda WebP'ye çevrilir; EXIF verisi taşınmaz ve en fazla 5 MB yüklenir. Galeri sınırı 12 görseldir.</p>
      {hata ? <Hata mesaj={hata} kucuk /> : null}{bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}
      <div className="pnl-klinik-gorsel-hedefleri">
        <label><span>{logo ? <Onizleme storageKey={logo} alt="Klinik logosu" /> : <ImagePlus size={22} />}</span><strong>{islem === 'logo' ? 'Yükleniyor…' : logo ? 'Logoyu değiştir' : 'Logo ekle'}</strong><input type="file" accept="image/jpeg,image/png,image/webp" disabled={islem !== null} onChange={(e) => { const f = e.target.files?.[0]; void sec('logo', f); e.currentTarget.value = ''; }} /></label>
        <label><span>{kapak ? <Onizleme storageKey={kapak} alt="Klinik kapak görseli" /> : <ImagePlus size={22} />}</span><strong>{islem === 'cover' ? 'Yükleniyor…' : kapak ? 'Kapağı değiştir' : 'Kapak ekle'}</strong><input type="file" accept="image/jpeg,image/png,image/webp" disabled={islem !== null} onChange={(e) => { const f = e.target.files?.[0]; void sec('cover', f); e.currentTarget.value = ''; }} /></label>
      </div>
      <div className="pnl-klinik-galeri-serit">{liste === null ? <span>Galeri yükleniyor…</span> : liste.map((g, i) => <Onizleme key={g.id} storageKey={g.storage_key} alt={g.caption || `Klinik galeri görseli ${i + 1}`} />)}</div>
      <label className={liste && liste.length >= 12 ? 'pnl-dugme pnl-dugme-sade pnl-dosya-kapali' : 'pnl-dugme pnl-dugme-sade'}><ImagePlus size={15} /> {islem === 'gallery' ? 'Yükleniyor…' : liste && liste.length >= 12 ? 'Galeri dolu (12/12)' : `Galeriye görsel ekle (${liste?.length ?? 0}/12)`}<input type="file" accept="image/jpeg,image/png,image/webp" disabled={islem !== null || Boolean(liste && liste.length >= 12)} onChange={(e) => { const f = e.target.files?.[0]; void sec('gallery', f); e.currentTarget.value = ''; }} /></label>
    </div>
  </section>;
}
