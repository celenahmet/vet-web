import { useEffect, useRef, useState } from 'react';
import { Bell, ArrowRight, CheckCheck } from 'lucide-react';

import { bildirimleriOku, bildirimleriOkunduIsaretle, type Bildirim } from './veri';
import { tarihYaz } from './sozluk';

/**
 * BILDIRIM PENCERESI
 *
 * ⚠️ NEDEN VAR (Ahmet, 25.08.2026): *"bildirimlere basınca bence ek bi pencere
 * açılsın ergonomik şekilde tüm sayfa oraya kaymasın yani ergonomik olarak kötü
 * bi karar direkt öyle yönlendirme"*.
 *
 * Onceki hâlinde zile basmak bolum degistiriyordu: kullanici randevu
 * onaylarken zile bakmak istese, bulundugu ekrani KAYBEDIYORDU. Bildirim bir
 * yan bilgi; ona bakmak icin ise ara vermek gerekmemeli.
 *
 * ⚠️ Icerik ACILINCA yukleniyor, sayfa acilisinda degil. Zilin rozeti icin
 * yalnizca SAYI cekiliyor (`head: true`); listeyi herkes her acilista
 * indirmesin.
 *
 * ⚠️ UC YOLDAN KAPANIYOR: disariya tiklama, Esc ve zile tekrar basma. Kapaninca
 * odak ZILE geri donuyor; klavyeyle gezen biri icin odagin sayfanin basina
 * dusmesi, yerini kaybetmek demek.
 *
 * ⚠️ "Tumunu gor" yine tam bolume goturuyor — yonlendirme kalkmadi, ISTEGE
 * BAGLI hale geldi. Uzun listeyi kucuk pencerede okutmak da dogru degil.
 */
export default function BildirimPenceresi({
  okunmamis, sayiyiTazele, tumunuGor,
}: {
  okunmamis: number;
  sayiyiTazele: () => void;
  tumunuGor: () => void;
}) {
  const [acik, setAcik] = useState(false);
  const [liste, setListe] = useState<Bildirim[] | null>(null);
  const [hata, setHata] = useState(false);
  const sarmal = useRef<HTMLDivElement>(null);
  const zil = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!acik) return;
    setListe(null); setHata(false);
    bildirimleriOku().then((d) => setListe(d.slice(0, 8))).catch(() => { setListe([]); setHata(true); });
  }, [acik]);

  useEffect(() => {
    if (!acik) return;
    function disariTiklama(e: MouseEvent) {
      if (sarmal.current && !sarmal.current.contains(e.target as Node)) setAcik(false);
    }
    function tus(e: KeyboardEvent) {
      if (e.key === 'Escape') { setAcik(false); zil.current?.focus(); }
    }
    document.addEventListener('mousedown', disariTiklama);
    document.addEventListener('keydown', tus);
    return () => {
      document.removeEventListener('mousedown', disariTiklama);
      document.removeEventListener('keydown', tus);
    };
  }, [acik]);

  async function hepsiniOkunduYap() {
    try {
      await bildirimleriOkunduIsaretle();
      /* Ekrani sunucuyla ayrisik birakmamak icin liste de tazeleniyor. */
      setListe(await bildirimleriOku().then((d) => d.slice(0, 8)));
      sayiyiTazele();
    } catch {
      setHata(true);
    }
  }

  return (
    <div className="pnl-zil-sarmal" ref={sarmal}>
      <button
        ref={zil}
        type="button"
        className="pnl-ust-ikon"
        aria-expanded={acik}
        aria-haspopup="dialog"
        aria-label={okunmamis > 0 ? `Bildirimler, ${okunmamis} okunmamış` : 'Bildirimler'}
        title="Bildirimler"
        onClick={() => setAcik((a) => !a)}>
        <Bell size={18} aria-hidden="true" />
        {okunmamis > 0 ? <span className="pnl-zil-rozet" aria-hidden="true">{okunmamis > 99 ? '99+' : okunmamis}</span> : null}
      </button>

      {acik ? (
        <div className="pnl-zil-pencere" role="dialog" aria-label="Bildirimler">
          <header className="pnl-zil-basi">
            <h3>Bildirimler</h3>
            {okunmamis > 0 ? (
              <button type="button" className="pnl-zil-eylem" onClick={hepsiniOkunduYap}>
                <CheckCheck size={14} /> Tümünü okundu say
              </button>
            ) : null}
          </header>

          <div className="pnl-zil-govde">
            {liste === null ? (
              <p className="pnl-zil-bos">Yükleniyor…</p>
            ) : hata ? (
              <p className="pnl-zil-bos">Bildirimler alınamadı. Sayfayı yenileyip tekrar deneyin.</p>
            ) : liste.length === 0 ? (
              <p className="pnl-zil-bos">Bildiriminiz yok. Randevu ve duyuru hareketleri burada birikir.</p>
            ) : (
              <ul className="pnl-zil-liste">
                {liste.map((b) => (
                  <li key={b.id} className={b.read_at ? 'pnl-zil-satir' : 'pnl-zil-satir pnl-zil-yeni'}>
                    {/* ⚠️ Okunmamis YALNIZ RENKLE degil, nokta ve metinle de belli. */}
                    <span className="pnl-zil-nokta" aria-hidden="true" />
                    <div>
                      <p className="pnl-zil-baslik">
                        {b.title || 'Başlıksız bildirim'}
                        {!b.read_at ? <span className="pnl-zil-yeni-etiket">yeni</span> : null}
                      </p>
                      {b.body ? <p className="pnl-zil-metin">{b.body}</p> : null}
                      <p className="pnl-zil-zaman">{tarihYaz(b.created_at)}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button
            type="button"
            className="pnl-zil-alt"
            onClick={() => { setAcik(false); tumunuGor(); }}>
            Tümünü görüntüle <ArrowRight size={13} />
          </button>
        </div>
      ) : null}
    </div>
  );
}
