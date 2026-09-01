import { useCallback, useEffect, useState } from 'react';
import { Archive, ArchiveRestore, User, UserPlus, Plus, Smartphone, NotebookPen, Pencil, Search } from 'lucide-react';

import {
  musterileriOku, musteriDavetEt, cevrimdisiMusterileriOku, defterMusterisiEkle,
  type Musteri, type CevrimdisiMusteri,
  musteriNotuYaz,
  musteriyiCikar,
  defterMusterisiniGuncelle,
  defterArsivEtkisiniOku,
  defterKaydiniArsivle,
  arsivdekiMusterileriOku,
  defterKaydiniGeriAc,
  type DefterArsivEtkisi,
} from './veri';
import { tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';
import { musterileriFiltrele, type KayitKaynagi } from './klinik-kayit-arama';

/**
 * MUSTERILER — iki kaynak tek liste
 *
 * ⚠️ IKI TUR MUSTERI VAR ve karistirilmamali:
 *   1. **Platform uyesi**: uygulamada hesabi var, klinige cift onayli baglandi.
 *      Kendi hayvanlarini kendi giriyor.
 *   2. **Defter kaydi**: uygulamayi kullanmiyor, klinik kendi defterine yazdi.
 *      Hayvanlarini da klinik giriyor.
 *
 * Ahmet, 25.08.2026: *"bu müşteriler manuel veya platform üyemiz olabilir"* ve
 * *"çoğu zaten uygulama kullanmayanlar olacak"*. Ikinci grup kural, birincisi
 * istisna; o yuzden ikisi ayni listede ama nereden geldigi her satirda yaziyor.
 *
 * ⚠️ "Platforma kayitli mi?" SORUSU BILGI TOPLAMAK ICIN DEGIL, AKISI SECMEK
 * ICIN (Ahmet: *"opsiyonel sorulabilir bilgi edinmek için kayıtlı mı platforma
 * diye"*). Cevap hicbir yere KAYDEDILMIYOR: `clinic_offline_customers`
 * tablosunda platform hesabina baglayan bir kolon yok ve uydurma bir baglanti
 * kurmak yerine soru yalnizca "davet de gonderelim mi" karari icin kullaniliyor.
 * Gercek baglanti tek yoldan kuruluyor: davet, karsi taraf kabul ediyor.
 */
export default function PanelMusteriler({ klinik, sahip }: { klinik: string; sahip: boolean }) {
  const [platform, setPlatform] = useState<Musteri[] | null>(null);
  /* Not duzenleme ve cikarma (esitleme 7. madde). Ayni anda tek satir
     duzenleniyor: birden fazla acik kutu, hangisinin kaydedildigini
     belirsizlestirirdi. */
  const [notYazilan, setNotYazilan] = useState<string | null>(null);
  const [notMetni, setNotMetni] = useState('');
  const [satirBekliyor, setSatirBekliyor] = useState<string | null>(null);
  const [satirHatasi, setSatirHatasi] = useState<string | null>(null);
  const [defter, setDefter] = useState<CevrimdisiMusteri[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);

  const [ekleAcik, setEkleAcik] = useState(false);
  const [davetAcik, setDavetAcik] = useState(false);
  const [form, setForm] = useState({ adSoyad: '', telefon: '', eposta: '', not: '', platformda: 'bilinmiyor' as 'evet' | 'hayir' | 'bilinmiyor' });
  const [davet, setDavet] = useState({ eposta: '', telefon: '', not: '' });
  const [duzenlenen, setDuzenlenen] = useState<CevrimdisiMusteri | null>(null);
  const [duzenleme, setDuzenleme] = useState({ adSoyad: '', telefon: '', eposta: '', not: '' });
  const [arsiv, setArsiv] = useState<{ kayit: CevrimdisiMusteri; etki: DefterArsivEtkisi } | null>(null);
  const [arsivAcik, setArsivAcik] = useState(false);
  const [arsivdekiler, setArsivdekiler] = useState<CevrimdisiMusteri[]>([]);
  const [arama, setArama] = useState('');
  const [kaynak, setKaynak] = useState<KayitKaynagi>('all');

  const yukle = useCallback(() => {
    setHata(null);
    Promise.all([musterileriOku(klinik), cevrimdisiMusterileriOku(klinik)])
      .then(([p, d]) => { setPlatform(p); setDefter(d); })
      .catch((e: { message?: string }) => { setPlatform([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  useEffect(() => { setPlatform(null); yukle(); }, [yukle]);
  useEffect(() => { if (sahip && arsivAcik) arsivdekiMusterileriOku(klinik)
    .then(setArsivdekiler).catch((e: Error) => setIslemHatasi(e.message)); }, [arsivAcik, klinik, sahip]);

  async function geriAc(id: string) {
    if (bekliyor) return; setBekliyor(true); setIslemHatasi(null);
    try { await defterKaydiniGeriAc('customer', id); setBilgi('Müşteri ve bu arşiv paketindeki hastalar yeniden etkinleştirildi.');
      setArsivdekiler((rows) => rows.filter((row) => row.id !== id)); yukle(); }
    catch (e) { setIslemHatasi((e as Error).message); } finally { setBekliyor(false); }
  }

  async function musteriEkle(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await defterMusterisiEkle(klinik, { adSoyad: form.adSoyad, telefon: form.telefon, eposta: form.eposta, not: form.not });
      setEkleAcik(false);
      /*
       * ⚠️ "Evet, kayitli" diyenlere davet ONERILIYOR, kendiliginden
       * GONDERILMIYOR. Davet karsi tarafa bildirim demek; kullanicinin bilmedigi
       * bir bildirim gondermek, en kolay guven kaybettiren sey.
       */
      if (form.platformda === 'evet' && (form.eposta.trim() || form.telefon.trim())) {
        setDavet({ eposta: form.eposta, telefon: form.telefon, not: '' });
        setDavetAcik(true);
        setBilgi(`${form.adSoyad.trim()} deftere eklendi. Platform hesabıyla da bağlamak isterseniz davet gönderebilirsiniz.`);
      } else {
        setBilgi(`${form.adSoyad.trim()} deftere eklendi. Hastalar bölümünden hayvanını ekleyebilirsiniz.`);
      }
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  async function davetGonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await musteriDavetEt(klinik, { eposta: davet.eposta.trim() || undefined, telefon: davet.telefon.trim() || undefined, not: davet.not.trim() || undefined });
      setDavetAcik(false); setDavet({ eposta: '', telefon: '', not: '' });
      setBilgi('Davet gönderildi. Hayvan sahibi uygulamadan kabul edince platform müşterisi olarak da görünecek.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  function duzenlemeyiAc(m: CevrimdisiMusteri) {
    setDuzenlenen(m); setDuzenleme({ adSoyad: m.full_name ?? '', telefon: m.phone ?? '', eposta: m.email ?? '', not: m.note ?? '' }); setIslemHatasi(null);
  }

  async function duzenlemeyiKaydet(e: React.FormEvent) {
    e.preventDefault(); if (!duzenlenen || bekliyor) return;
    setBekliyor(true); setIslemHatasi(null);
    try { await defterMusterisiniGuncelle(duzenlenen.id, duzenleme); setDuzenlenen(null); setBilgi('Müşteri kaydı güncellendi.'); yukle(); }
    catch (err) { setIslemHatasi((err as Error).message); }
    finally { setBekliyor(false); }
  }

  async function arsivOnizle(kayit: CevrimdisiMusteri) {
    setBekliyor(true); setIslemHatasi(null);
    try { setArsiv({ kayit, etki: await defterArsivEtkisiniOku('customer', kayit.id) }); }
    catch (e) { setIslemHatasi((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function arsivle() {
    if (!arsiv || bekliyor) return; setBekliyor(true); setIslemHatasi(null);
    try { const kayit = arsiv.kayit; await defterKaydiniArsivle(arsiv.etki); setArsiv(null);
      if (arsivAcik) setArsivdekiler((rows) => [kayit, ...rows]);
      setBilgi('Müşteri aktif defterden arşive alındı; bağlı klinik geçmişi korunuyor.'); yukle(); }
    catch (e) { setIslemHatasi((e as Error).message); }
    finally { setBekliyor(false); }
  }


  async function notKaydet(kullanici: string) {
    setSatirBekliyor(kullanici); setSatirHatasi(null);
    try {
      await musteriNotuYaz(klinik, kullanici, notMetni);
      setPlatform((o) => (o ?? []).map((x) => (x.user_id === kullanici ? { ...x, note: notMetni.trim() || null } : x)));
      setNotYazilan(null);
    } catch (e) {
      setSatirHatasi((e as { message?: string })?.message ?? 'Not kaydedilemedi.');
    } finally {
      setSatirBekliyor(null);
    }
  }

  async function musteriCikar(kullanici: string, ad: string | null) {
    if (!window.confirm(`${ad || 'Bu müşteri'} klinikten çıkarılsın mı? Sağlık kayıtları silinmez.`)) return;
    setSatirBekliyor(kullanici); setSatirHatasi(null);
    try {
      await musteriyiCikar(klinik, kullanici);
      setPlatform((o) => (o ?? []).filter((x) => x.user_id !== kullanici));
    } catch (e) {
      setSatirHatasi((e as { message?: string })?.message ?? 'Müşteri çıkarılamadı.');
    } finally {
      setSatirBekliyor(null);
    }
  }

  if (platform === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} tekrar={yukle} />;

  const toplam = platform.length + defter.length;
  const gorunen = musterileriFiltrele(platform, defter, arama, kaynak);
  const gorunenToplam = gorunen.platform.length + gorunen.defter.length;

  return (
    <section className="pnl-bolum">
      <header className="pnl-bolum-basi">
        {/*
          ⚠️ BOLUM BASLIGI BURADA YOK, UST CUBUKTA. Once ikisi de yaziyordu ve
          ekranda ayni kelime iki kez goruluyordu ("Raporlar / Raporlar").
          Ust cubuk yapiskan, yani sayfa kaydiginca da gorunur duruyor; burada
          tekrarlamak hem yer yiyor hem ekran okuyucuya ayni basligi iki kez
          okutuyordu. Burada yalniz ACIKLAMA ve eylem dugmeleri kaliyor.
        */}
        <div>
          <p className="pnl-aciklama">
            Uygulamayı kullanan müşterileriniz ve kendi defterinize yazdıklarınız bir arada.
            Her satırda hangisi olduğu yazıyor.
          </p>
        </div>
        <div className="pnl-basi-dugmeler">
          {sahip ? <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setArsivAcik((v) => !v)}>
            <ArchiveRestore size={15} /> {arsivAcik ? 'Arşivi gizle' : 'Arşiv'}
          </button> : null}
          <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => { setDavet({ eposta: '', telefon: '', not: '' }); setDavetAcik(true); setIslemHatasi(null); }}>
            <UserPlus size={15} /> Davet et
          </button>
          <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setForm({ adSoyad: '', telefon: '', eposta: '', not: '', platformda: 'bilinmiyor' }); setEkleAcik(true); setIslemHatasi(null); }}>
            <Plus size={15} /> Müşteri ekle
          </button>
        </div>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}
      {toplam > 0 ? <div className="pnl-liste-araclari" role="search" aria-label="Müşteri listesinde ara ve filtrele">
        <label className="pnl-operasyon-arama" htmlFor="pnl-musteri-arama">
          <Search size={16} aria-hidden="true" />
          <input id="pnl-musteri-arama" type="search" value={arama} onChange={(e) => setArama(e.target.value)}
            placeholder="Ad, telefon, e-posta veya not ara" />
        </label>
        <label className="pnl-liste-filtre" htmlFor="pnl-musteri-kaynak">
          <span>Kayıt kaynağı</span>
          <select id="pnl-musteri-kaynak" value={kaynak} onChange={(e) => setKaynak(e.target.value as KayitKaynagi)}>
            <option value="all">Tüm müşteriler</option>
            <option value="platform">Veterito üyeleri</option>
            <option value="ledger">Klinik defteri</option>
          </select>
        </label>
        <span className="pnl-liste-sonuc" aria-live="polite">{gorunenToplam} / {toplam} kayıt</span>
      </div> : null}
      {arsivAcik ? <section className="pnl-arsiv-kutusu"><h3>Arşivlenen müşteriler</h3>
        {arsivdekiler.length === 0 ? <p className="pnl-soluk">Arşivlenmiş müşteri yok.</p> :
          <ul className="pnl-kisi-listesi">{arsivdekiler.map((m) => <li className="pnl-kisi" key={m.id}>
            <span className="pnl-avatar"><Archive size={16} /></span><div className="pnl-kisi-bilgi"><p className="pnl-kisi-ad">{m.full_name}</p>
            <p className="pnl-kisi-ek">Bağlı klinik geçmişi korunuyor.</p></div><button type="button" className="pnl-dugme pnl-dugme-sade"
              disabled={bekliyor} onClick={() => void geriAc(m.id)}><ArchiveRestore size={14} /> Geri aç</button></li>)}</ul>}
      </section> : null}

      {toplam === 0 ? (
        <Bos
          baslik="Henüz müşteriniz yok"
          aciklama="Uygulamayı kullanmayan bir müşteriyi “Müşteri ekle” ile defterinize yazabilir, uygulamayı kullananı “Davet et” ile kliniğinize bağlayabilirsiniz."
        />
      ) : gorunenToplam === 0 ? (
        <Bos baslik="Eşleşen müşteri bulunamadı" aciklama="Arama metnini veya kayıt kaynağı filtresini değiştirin." />
      ) : (
        <ul className="pnl-kisi-listesi">
          {gorunen.platform.map((m) => (
            <li key={`p-${m.user_id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><User size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {m.display_name || 'İsim girilmemiş'}
                  <span className="pnl-etiket pnl-etiket-mavi"><Smartphone size={11} /> uygulama üyesi</span>
                </p>
                <p className="pnl-kisi-rol">{m.pet_count > 0 ? `${m.pet_count} hayvanı kayıtlı` : 'Kayıtlı hayvanı yok'}</p>
                {notYazilan === m.user_id ? (
                  <div className="pnl-alan">
                    <label htmlFor={`pnl-not-${m.user_id}`}>Klinik içi not</label>
                    <input
                      id={`pnl-not-${m.user_id}`}
                      type="text"
                      value={notMetni}
                      onChange={(e) => setNotMetni(e.target.value)}
                      placeholder="Bu not yalnızca sizin görürsünüz"
                    />
                    <span className="pnl-alan-ipucu">Not müşteriye gösterilmez.</span>
                  </div>
                ) : m.note ? (
                  <p className="pnl-kisi-ek">Not: {m.note}</p>
                ) : null}
                <p className="pnl-kisi-ek pnl-soluk">Müşteri oldu: {tarihYaz(m.created_at, false)}</p>
                {satirHatasi && satirBekliyor === null && notYazilan === m.user_id ? (
                  <p className="pnl-hata-kucuk">{satirHatasi}</p>
                ) : null}
              </div>
              <span className="pnl-kisi-eylem">
                {notYazilan === m.user_id ? (
                  <>
                    <button
                      type="button"
                      className="pnl-dugme pnl-dugme-sade"
                      onClick={() => { setNotYazilan(null); setSatirHatasi(null); }}
                    >
                      Vazgeç
                    </button>
                    <button
                      type="button"
                      className="pnl-dugme pnl-dugme-olumlu"
                      disabled={satirBekliyor !== null}
                      onClick={() => void notKaydet(m.user_id)}
                    >
                      {satirBekliyor === m.user_id ? 'Kaydediliyor...' : 'Kaydet'}
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      type="button"
                      className="pnl-dugme pnl-dugme-sade"
                      onClick={() => { setNotYazilan(m.user_id); setNotMetni(m.note ?? ''); setSatirHatasi(null); }}
                    >
                      Not
                    </button>
                    {/* ⚠️ CIKARMA yalniz BAGLANTIYI kaldiriyor; hastanin saglik
                        kayitlari duruyor. Onay soruluyor cunku geri alma yolu
                        musteriyi yeniden davet etmekten geciyor. */}
                    <button
                      type="button"
                      className="pnl-dugme pnl-dugme-olumsuz"
                      disabled={satirBekliyor !== null}
                      onClick={() => void musteriCikar(m.user_id, m.display_name)}
                    >
                      Çıkar
                    </button>
                  </>
                )}
              </span>
            </li>
          ))}
          {gorunen.defter.map((m) => (
            <li key={`d-${m.id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><NotebookPen size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {m.full_name || 'İsim girilmemiş'}
                  <span className="pnl-etiket">kendi kaydınız</span>
                </p>
                <p className="pnl-kisi-rol">{m.phone || m.email || 'İletişim bilgisi yok'}</p>
                {m.note ? <p className="pnl-kisi-ek">Not: {m.note}</p> : null}
                <p className="pnl-kisi-ek pnl-soluk">Deftere eklendi: {tarihYaz(m.created_at, false)}</p>
              </div>
              <span className="pnl-kisi-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => duzenlemeyiAc(m)}><Pencil size={14} /> Düzenle</button>{sahip ? <button type="button" className="pnl-dugme pnl-dugme-sade" disabled={bekliyor} onClick={() => void arsivOnizle(m)}><Archive size={14} /> Arşivle</button> : null}</span>
            </li>
          ))}
        </ul>
      )}

      <Diyalog acik={!!arsiv} kapat={() => setArsiv(null)} baslik="Müşteriyi arşive al"
        aciklama="Kayıt silinmez; aktif listelerden kaldırılır ve gerektiğinde geri açılabilir.">
        {arsiv ? <div className="pnl-etki-ozeti"><strong>{arsiv.kayit.full_name}</strong><p>{arsiv.etki.pet_count} hasta aktif listeden kalkacak.</p><div className="pnl-etki-grid"><span>{arsiv.etki.appointment_count}<small>randevu</small></span><span>{arsiv.etki.record_count}<small>sağlık kaydı</small></span><span>{arsiv.etki.prescription_count}<small>reçete</small></span><span>{arsiv.etki.lab_request_count}<small>lab istemi</small></span></div><p className="pnl-alan-ipucu">Bu {arsiv.etki.dependency_count} bağlı kayıt silinmeyecek. Onaydan önce sayı değişirse işlem güvenli biçimde durur.</p><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setArsiv(null)}>Vazgeç</button><button type="button" className="pnl-dugme pnl-dugme-olumsuz" disabled={bekliyor} onClick={() => void arsivle()}>{bekliyor ? 'Arşivleniyor…' : 'Arşive al'}</button></div></div> : null}
      </Diyalog>

      {/* ── DEFTERE MUSTERI EKLE ── */}
      <Diyalog acik={ekleAcik} kapat={() => setEkleAcik(false)} baslik="Müşteri ekle"
        aciklama="Kendi defterinize bir müşteri kaydedin. Uygulamada hesabı olması gerekmiyor.">
        <form onSubmit={musteriEkle}>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-ad">Ad soyad</label>
            <input id="pnl-m-ad" required minLength={2} maxLength={120} value={form.adSoyad}
              onChange={(e) => setForm((f) => ({ ...f, adSoyad: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-tel">Telefon</label>
            <input id="pnl-m-tel" type="tel" maxLength={30} value={form.telefon}
              onChange={(e) => setForm((f) => ({ ...f, telefon: e.target.value }))} placeholder="05xx xxx xx xx" />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-m-mail">E-posta</label>
            <input id="pnl-m-mail" type="email" value={form.eposta}
              onChange={(e) => setForm((f) => ({ ...f, eposta: e.target.value }))} />
            <span className="pnl-alan-ipucu">İletişim bilgileri isteğe bağlı.</span>
          </div>

          {/*
            ⚠️ OPSIYONEL SORU, ZORUNLU DEGIL. Cevap hicbir yere kaydedilmiyor:
            defter tablosunda platform hesabina baglayan bir kolon yok. Soru
            yalnizca "davet de gonderelim mi" adimini acmak icin var. Kaydedilen
            bir sey yokken "kayitli" isaretlemek, olmayan bir baglanti varmis
            gibi gostermek olurdu.
          */}
          <div className="pnl-alan">
            <label htmlFor="pnl-m-platform">Veterito uygulamasını kullanıyor mu? (isteğe bağlı)</label>
            <select id="pnl-m-platform" value={form.platformda}
              onChange={(e) => setForm((f) => ({ ...f, platformda: e.target.value as 'evet' | 'hayir' | 'bilinmiyor' }))}>
              <option value="bilinmiyor">Bilmiyorum</option>
              <option value="evet">Evet, kullanıyor</option>
              <option value="hayir">Hayır, kullanmıyor</option>
            </select>
            <span className="pnl-alan-ipucu">
              {form.platformda === 'evet'
                ? 'Kaydettikten sonra davet göndermeyi önereceğiz; kabul ederse hesabıyla da bağlanır.'
                : 'Bu bilgi kaydedilmiyor, yalnızca sonraki adımı belirliyor.'}
            </span>
          </div>

          <div className="pnl-alan">
            <label htmlFor="pnl-m-not">Not</label>
            <textarea id="pnl-m-not" maxLength={500} value={form.not}
              onChange={(e) => setForm((f) => ({ ...f, not: e.target.value }))}
              placeholder="Kendi kaydınız için not. Müşteri bu notu görmez." />
          </div>

          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setEkleAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || form.adSoyad.trim().length < 2}>
              {bekliyor ? 'Ekleniyor…' : 'Müşteriyi ekle'}
            </button>
          </div>
        </form>
      </Diyalog>

      <Diyalog acik={duzenlenen !== null} kapat={() => setDuzenlenen(null)} baslik="Defter müşterisini düzenle" aciklama="Bu kayıt yalnız kliniğinizin kendi defterindedir; Veterito hesabını değiştirmez.">
        <form onSubmit={duzenlemeyiKaydet}><div className="pnl-alan"><label htmlFor="pnl-md-ad">Ad soyad</label><input id="pnl-md-ad" required minLength={2} maxLength={120} value={duzenleme.adSoyad} onChange={(e) => setDuzenleme((f) => ({ ...f, adSoyad: e.target.value }))} /></div><div className="pnl-alan"><label htmlFor="pnl-md-tel">Telefon</label><input id="pnl-md-tel" type="tel" maxLength={30} value={duzenleme.telefon} onChange={(e) => setDuzenleme((f) => ({ ...f, telefon: e.target.value }))} /></div><div className="pnl-alan"><label htmlFor="pnl-md-eposta">E-posta</label><input id="pnl-md-eposta" type="email" maxLength={200} value={duzenleme.eposta} onChange={(e) => setDuzenleme((f) => ({ ...f, eposta: e.target.value }))} /></div><div className="pnl-alan"><label htmlFor="pnl-md-not">Klinik içi not</label><textarea id="pnl-md-not" maxLength={500} value={duzenleme.not} onChange={(e) => setDuzenleme((f) => ({ ...f, not: e.target.value }))} /></div><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setDuzenlenen(null)}>Vazgeç</button><button className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || duzenleme.adSoyad.trim().length < 2}>Kaydet</button></div></form>
      </Diyalog>

      {/* ── PLATFORM DAVETI ── */}
      <Diyalog acik={davetAcik} kapat={() => setDavetAcik(false)} baslik="Müşteri davet et"
        aciklama="Davet hayvan sahibine gider. Kabul edene kadar uygulama müşterisi olarak görünmez; kendi defterinizdeki kaydı bundan etkilenmez.">
        <form onSubmit={davetGonder}>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-mail">E-posta</label>
            <input id="pnl-d-mail" type="email" value={davet.eposta} onChange={(e) => setDavet((d) => ({ ...d, eposta: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-d-tel">Telefon</label>
            <input id="pnl-d-tel" type="tel" value={davet.telefon} onChange={(e) => setDavet((d) => ({ ...d, telefon: e.target.value }))} />
            <span className="pnl-alan-ipucu">İkisinden birini doldurmanız yeterli.</span>
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setDavetAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || (!davet.eposta.trim() && !davet.telefon.trim())}>
              {bekliyor ? 'Gönderiliyor…' : 'Daveti gönder'}
            </button>
          </div>
        </form>
      </Diyalog>
    </section>
  );
}
