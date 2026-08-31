import { useCallback, useEffect, useMemo, useState } from 'react';
import { BellOff, BellRing, Check, CheckCheck, Flag, MessagesSquare, Send, ShieldBan, Trash2, UserPlus, X } from 'lucide-react';

import Bos from './Bos';
import Diyalog from './Diyalog';
import Hata from './Hata';
import Yukleniyor from './Yukleniyor';
import { tarihYaz } from './sozluk';
import { ulasilabilirKisileriOku, type UlasilabilirKisi } from './veri';
import {
  icerigiSikayetEt,
  karsiTarafinOkumaZamani,
  konusmaAc,
  konusmaMesajlariniOku,
  konusmalariOku,
  konusmayiOkunduYap,
  konusmayiSessizeAl,
  kullaniciyiEngelle,
  mesajiSil,
  mesajIsteginiYanitla,
  mesajIstekleriniOku,
  mesajYaz,
  mesajaGorselEkle,
  type Konusma,
  type KonusmaMesaji,
  type MesajIstegi,
  type SikayetSebebi,
} from './mesaj-veri';
import { guvenliGorselSil, guvenliGorselYukle, imzaliGorselAdresi } from './medya-veri';

function MesajGorseli({ storageKey }: { storageKey: string }) {
  const [adres, setAdres] = useState<string | null>(null);
  useEffect(() => { let gecerli = true; imzaliGorselAdresi(storageKey).then((u) => { if (gecerli) setAdres(u); }).catch(() => setAdres('')); return () => { gecerli = false; }; }, [storageKey]);
  if (!adres) return adres === null ? <small>Görsel yükleniyor…</small> : <small>Görsel önizlenemedi.</small>;
  return <img className="pnl-mesaj-gorseli" src={adres} alt="Mesaj görseli" loading="lazy" />;
}

const SEBEPLER: { kod: SikayetSebebi; ad: string }[] = [
  { kod: 'spam', ad: 'İstenmeyen ileti / spam' },
  { kod: 'abuse', ad: 'Taciz veya kötüye kullanım' },
  { kod: 'fake', ad: 'Yanıltıcı içerik' },
  { kod: 'sale', ad: 'Uygunsuz satış' },
  { kod: 'animal_welfare', ad: 'Hayvan refahı riski' },
  { kod: 'other', ad: 'Diğer' },
];

export default function PanelMesajlar({ klinik }: { klinik: string }) {
  const [konusmalar, setKonusmalar] = useState<Konusma[] | null>(null);
  const [istekler, setIstekler] = useState<MesajIstegi[]>([]);
  const [kisiler, setKisiler] = useState<UlasilabilirKisi[]>([]);
  const [secili, setSecili] = useState<Konusma | null>(null);
  const [mesajlar, setMesajlar] = useState<KonusmaMesaji[] | null>(null);
  const [okumaZamani, setOkumaZamani] = useState<string | null>(null);
  const [metin, setMetin] = useState('');
  const [gorsel, setGorsel] = useState<File | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);
  const [yeniAcik, setYeniAcik] = useState(false);
  const [yeniKisi, setYeniKisi] = useState('');
  const [sikayet, setSikayet] = useState<{ tur: 'message' | 'conversation'; id: string } | null>(null);
  const [sebep, setSebep] = useState<SikayetSebebi>('spam');
  const [ayrinti, setAyrinti] = useState('');

  const yukle = useCallback(async () => {
    setHata(null);
    try {
      const [k, i, u] = await Promise.all([
        konusmalariOku(), mesajIstekleriniOku(), ulasilabilirKisileriOku(klinik),
      ]);
      setKonusmalar(k); setIstekler(i); setKisiler(u);
      setSecili((onceki) => onceki ? k.find((x) => x.id === onceki.id) ?? null : null);
    } catch (e) {
      setKonusmalar([]); setHata((e as Error).message);
    }
  }, [klinik]);

  useEffect(() => { setKonusmalar(null); setSecili(null); setMesajlar(null); void yukle(); }, [yukle]);

  const mesajiYukle = useCallback(async (k: Konusma) => {
    setSecili(k); setMesajlar(null); setHata(null);
    try {
      const [m, o] = await Promise.all([konusmaMesajlariniOku(k.id), karsiTarafinOkumaZamani(k.id)]);
      setMesajlar(m); setOkumaZamani(o);
      await konusmayiOkunduYap(k.id);
      setKonusmalar((liste) => liste?.map((x) => x.id === k.id ? { ...x, unread_count: 0 } : x) ?? []);
    } catch (e) { setMesajlar([]); setHata((e as Error).message); }
  }, []);

  async function gonder(e: React.FormEvent) {
    e.preventDefault();
    if (!secili || bekliyor || (!metin.trim() && !gorsel)) return;
    setBekliyor(true); setHata(null);
    try {
      const key = gorsel ? await guvenliGorselYukle(gorsel, `message-${secili.id}`, 'prv') : null;
      const id = await mesajYaz(secili.id, metin);
      if (key) {
        try { await mesajaGorselEkle(id, key); }
        catch (e) {
          await Promise.allSettled([mesajiSil(id), guvenliGorselSil(key)]);
          throw e;
        }
      }
      setMetin(''); setGorsel(null); await mesajiYukle(secili); await yukle();
    }
    catch (e) { setHata((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function yeniKonusma(e: React.FormEvent) {
    e.preventDefault(); if (!yeniKisi || bekliyor) return;
    setBekliyor(true); setHata(null);
    try {
      const id = await konusmaAc(yeniKisi); setYeniAcik(false); await yukle();
      const liste = await konusmalariOku(); const k = liste.find((x) => x.id === id);
      if (k) await mesajiYukle(k);
    } catch (e) { setHata((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function istegiYanitla(i: MesajIstegi, kabul: boolean) {
    setBekliyor(true); setHata(null);
    try { await mesajIsteginiYanitla(i.id, kabul); await yukle(); setBilgi(kabul ? 'Mesaj isteği kabul edildi.' : 'Mesaj isteği reddedildi.'); }
    catch (e) { setHata((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function sessizDegistir() {
    if (!secili) return;
    try {
      await konusmayiSessizeAl(secili.id, !secili.muted);
      const guncel = { ...secili, muted: !secili.muted }; setSecili(guncel);
      setKonusmalar((l) => l?.map((x) => x.id === guncel.id ? guncel : x) ?? []);
    } catch (e) { setHata((e as Error).message); }
  }

  async function sil(m: KonusmaMesaji) {
    if (!window.confirm('Bu mesaj silinsin mi? Bu işlem geri alınamaz.')) return;
    try { await mesajiSil(m.id); if (secili) await mesajiYukle(secili); await yukle(); }
    catch (e) { setHata((e as Error).message); }
  }

  async function sikayetiGonder(e: React.FormEvent) {
    e.preventDefault(); if (!sikayet || bekliyor) return;
    setBekliyor(true); setHata(null);
    try { await icerigiSikayetEt(sikayet.tur, sikayet.id, sebep, ayrinti); setSikayet(null); setAyrinti(''); setBilgi('Bildiriminiz inceleme ekibine iletildi.'); }
    catch (e) { setHata((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function engelle() {
    if (!secili || !window.confirm(`${secili.peer_name || 'Bu kişi'} engellensin mi? Artık birbirinize mesaj gönderemezsiniz.`)) return;
    try { await kullaniciyiEngelle(secili.peer_id); setSecili(null); setMesajlar(null); await yukle(); setBilgi('Kullanıcı engellendi.'); }
    catch (e) { setHata((e as Error).message); }
  }

  const sonBenimMesajim = useMemo(() => [...(mesajlar ?? [])].reverse().find((m) => m.is_mine), [mesajlar]);

  if (konusmalar === null) return <Yukleniyor />;
  return <section className="pnl-bolum">
    <header className="pnl-bolum-basi">
      <div><p className="pnl-aciklama">Mesajları okuyun, yanıtlayın ve yeni mesaj isteklerini güvenle yönetin. Yalnızca müşterilerinize ve takipçilerinize yeni sohbet açabilirsiniz.</p></div>
      <button className="pnl-dugme pnl-dugme-olumlu" type="button" disabled={kisiler.length === 0} onClick={() => { setYeniKisi(kisiler[0]?.user_id ?? ''); setYeniAcik(true); }}><Send size={15} /> Yeni mesaj</button>
    </header>
    {hata ? <Hata mesaj={hata} kucuk /> : null}{bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}
    {istekler.length > 0 ? <section className="pnl-mesaj-istekleri" aria-label="Mesaj istekleri">
      <h3><UserPlus size={17} /> Mesaj istekleri <span>{istekler.length}</span></h3>
      {istekler.map((i) => <article key={i.id} className="pnl-mesaj-istek">
        <div><strong>{i.peer_name || 'İsimsiz kullanıcı'}</strong><p>{i.last_body || (i.last_has_media ? 'Medya gönderdi' : 'Yeni mesaj isteği')}</p></div>
        <div className="pnl-satir-eylem"><button type="button" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor} onClick={() => void istegiYanitla(i, true)}><Check size={14} /> Kabul et</button><button type="button" className="pnl-dugme pnl-dugme-sade" disabled={bekliyor} onClick={() => void istegiYanitla(i, false)}><X size={14} /> Reddet</button></div>
      </article>)}
    </section> : null}
    <div className="pnl-mesaj-duzen">
      <aside className="pnl-mesaj-konusmalar" aria-label="Sohbetler">
        {konusmalar.length === 0 ? <Bos baslik="Henüz sohbet yok" aciklama="Yeni mesaj ile müşteriniz veya takipçinizle güvenli bir görüşme başlatabilirsiniz." /> : konusmalar.map((k) => <button type="button" key={k.id} className={`pnl-mesaj-konusma${secili?.id === k.id ? ' aktif' : ''}`} onClick={() => void mesajiYukle(k)}>
          <span className="pnl-avatar"><MessagesSquare size={16} /></span><span><strong>{k.peer_name || 'İsimsiz kullanıcı'}</strong><small>{k.last_body || (k.last_has_media ? 'Medya' : 'Henüz mesaj yok')}</small></span>{k.unread_count > 0 ? <b>{k.unread_count}</b> : null}
        </button>)}
      </aside>
      <div className="pnl-mesaj-akis">
        {!secili ? <Bos baslik="Bir sohbet seçin" aciklama="Mesaj geçmişi ve yanıt alanı burada açılır." /> : <>
          <header className="pnl-mesaj-akis-basi"><div><strong>{secili.peer_name || 'İsimsiz kullanıcı'}</strong><small>{secili.peer_state === 'pending' ? 'Mesaj isteği bekleniyor' : secili.muted ? 'Bildirimleri sessizde' : 'Sohbet açık'}</small></div><div className="pnl-satir-eylem"><button type="button" className="pnl-ikon-dugme" title={secili.muted ? 'Bildirimleri aç' : 'Sessize al'} onClick={() => void sessizDegistir()}>{secili.muted ? <BellRing size={17} /> : <BellOff size={17} />}</button><button type="button" className="pnl-ikon-dugme" title="Sohbeti bildir" onClick={() => setSikayet({ tur: 'conversation', id: secili.id })}><Flag size={17} /></button><button type="button" className="pnl-ikon-dugme pnl-ikon-olumsuz" title="Kullanıcıyı engelle" onClick={() => void engelle()}><ShieldBan size={17} /></button></div></header>
          <div className="pnl-mesajlar" aria-live="polite">{mesajlar === null ? <Yukleniyor /> : mesajlar.length === 0 ? <Bos baslik="Henüz mesaj yok" aciklama="İlk mesajı aşağıdaki alandan yazabilirsiniz." /> : mesajlar.map((m) => <article key={m.id} className={`pnl-mesaj${m.is_mine ? ' benim' : ''}`}><div>{m.first_media_key && m.first_media_type === 'image' ? <MesajGorseli storageKey={m.first_media_key} /> : null}<p>{m.body}</p>{m.media_count > 0 && m.first_media_type === 'video' ? <small>Video eki mobil uygulamada görüntülenebilir.</small> : null}<footer>{tarihYaz(m.created_at, true)}{m.is_mine && sonBenimMesajim?.id === m.id ? (okumaZamani && new Date(okumaZamani) >= new Date(m.created_at) ? <CheckCheck size={13} aria-label="Okundu" /> : <Check size={13} aria-label="Gönderildi" />) : null}</footer></div><span className="pnl-mesaj-eylemler">{m.is_mine ? <button type="button" title="Mesajı sil" onClick={() => void sil(m)}><Trash2 size={13} /></button> : <button type="button" title="Mesajı bildir" onClick={() => setSikayet({ tur: 'message', id: m.id })}><Flag size={13} /></button>}</span></article>)}</div>
          <form className="pnl-mesaj-yaz" onSubmit={gonder}><textarea aria-label="Mesaj" maxLength={1000} value={metin} onChange={(e) => setMetin(e.target.value)} placeholder="Mesajınızı yazın…" /><label className="pnl-dugme pnl-dugme-sade">{gorsel ? 'Görsel seçildi' : 'Görsel ekle'}<input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setGorsel(e.target.files?.[0] ?? null)} /></label><button className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || (!metin.trim() && !gorsel)}><Send size={15} /> Gönder</button></form>
        </>}
      </div>
    </div>
    <Diyalog acik={yeniAcik} kapat={() => setYeniAcik(false)} baslik="Yeni mesaj" aciklama="Yalnızca kliniğinizin müşterileri ve takipçileri listelenir."><form onSubmit={yeniKonusma}><div className="pnl-alan"><label htmlFor="pnl-yeni-kisi">Kişi</label><select id="pnl-yeni-kisi" value={yeniKisi} onChange={(e) => setYeniKisi(e.target.value)}>{kisiler.map((k) => <option key={k.user_id} value={k.user_id}>{k.display_name || 'İsimsiz kullanıcı'} — {k.relation === 'customer' ? 'müşteri' : 'takipçi'}</option>)}</select></div><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setYeniAcik(false)}>Vazgeç</button><button className="pnl-dugme pnl-dugme-olumlu" disabled={!yeniKisi || bekliyor}>Sohbeti aç</button></div></form></Diyalog>
    <Diyalog acik={sikayet !== null} kapat={() => setSikayet(null)} baslik="İçeriği bildir" aciklama="Bildirim inceleme ekibine gider. Acil bir güvenlik riski varsa yerel yetkililere de ulaşın."><form onSubmit={sikayetiGonder}><div className="pnl-alan"><label htmlFor="pnl-sikayet-sebep">Sebep</label><select id="pnl-sikayet-sebep" value={sebep} onChange={(e) => setSebep(e.target.value as SikayetSebebi)}>{SEBEPLER.map((s) => <option key={s.kod} value={s.kod}>{s.ad}</option>)}</select></div><div className="pnl-alan"><label htmlFor="pnl-sikayet-ayrinti">Açıklama (isteğe bağlı)</label><textarea id="pnl-sikayet-ayrinti" maxLength={500} value={ayrinti} onChange={(e) => setAyrinti(e.target.value)} /></div><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setSikayet(null)}>Vazgeç</button><button className="pnl-dugme pnl-dugme-olumsuz" disabled={bekliyor}>Bildir</button></div></form></Diyalog>
  </section>;
}
