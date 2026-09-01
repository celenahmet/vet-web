import { useCallback, useEffect, useState } from 'react';
import { Archive, ArchiveRestore, PawPrint, Plus, Smartphone, NotebookPen, FileText, Search } from 'lucide-react';

import {
  hastalariOku, defterHastalariniOku, cevrimdisiMusterileriOku, turleriOku,
  defterHastasiEkle, saglikKaydiEkle,
  defterArsivEtkisiniOku, defterKaydiniArsivle,
  arsivdekiHastalariOku, defterKaydiniGeriAc,
  type Hasta, type DefterHastasi, type CevrimdisiMusteri, type Tur, type DefterArsivEtkisi,
} from './veri';
import { KAYIT_TURU, tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';
import { hastalariFiltrele, olasiDefterHastasiEslesmeleri, type KayitKaynagi } from './klinik-kayit-arama';

/**
 * HASTALAR — iki kaynak tek liste
 *
 * ⚠️ IKI TUR HASTA VAR:
 *   1. **Uygulama uyesinin hayvani**: sahibi kendi hesabina girmis. Klinik
 *      goruyor ama duzenlemiyor; kayit hayvan sahibinin.
 *   2. **Defter kaydi**: klinik kendi defterine yazdi. Saglik kaydi ancak
 *      buraya yazilabiliyor.
 *
 * ⚠️ SAGLIK KAYDI YALNIZ DEFTER HASTASINA yazilabiliyor ve bu bir eksiklik
 * degil, semadan geliyor: `clinic_pet_records.pet_id` alani
 * `clinic_offline_pets`e bagli, uygulamadaki `pets` tablosuna DEGIL. Klinigin
 * tuttugu kayit, hayvan sahibinin kendi profilinden ayri duruyor.
 *
 * Ekran bunu GIZLEMIYOR: uygulama uyesinin hayvaninda "Kayıt ekle" dugmesi
 * yok ve neden olmadigi yaziyor. Dugmeyi koyup hata verdirmek ya da sessizce
 * hicbir sey yapmamak, ikisi de daha kotu olurdu.
 *
 * ⚠️ Defter hayvani bir DEFTER MUSTERISINE baglanmak zorunda (yabanci anahtar).
 * Uygulama uyesi icin ikinci defter musterisi acmak sessiz ikiz uretir. Sahip
 * onayli hayvan koprusu hazir olana kadar arayuz bunu cozum diye onermez.
 */
export default function PanelHastalar({ klinik, sahip }: { klinik: string; sahip: boolean }) {
  const [uygulama, setUygulama] = useState<Hasta[] | null>(null);
  const [defter, setDefter] = useState<DefterHastasi[]>([]);
  const [musteriler, setMusteriler] = useState<CevrimdisiMusteri[]>([]);
  const [turler, setTurler] = useState<Tur[]>([]);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [bekliyor, setBekliyor] = useState(false);

  const [ekleAcik, setEkleAcik] = useState(false);
  const [kayitAcik, setKayitAcik] = useState(false);
  const [hForm, setHForm] = useState({ musteri: '', ad: '', tur: 'dog', cinsiyet: '', dogum: '', mikrocip: '', not: '' });
  const [kForm, setKForm] = useState({ hasta: '', hastaAdi: '', tur: 'exam', baslik: '', ayrinti: '', tarih: '', sonraki: '', kilo: '' });
  const [arsiv, setArsiv] = useState<{ kayit: DefterHastasi; etki: DefterArsivEtkisi } | null>(null);
  const [arsivAcik, setArsivAcik] = useState(false);
  const [arsivdekiler, setArsivdekiler] = useState<DefterHastasi[]>([]);
  const [arama, setArama] = useState('');
  const [kaynak, setKaynak] = useState<KayitKaynagi>('all');

  const bugun = () => new Date().toISOString().slice(0, 10);

  const yukle = useCallback(() => {
    setHata(null);
    Promise.all([hastalariOku(klinik), defterHastalariniOku(klinik), cevrimdisiMusterileriOku(klinik), turleriOku()])
      .then(([u, d, m, t]) => { setUygulama(u); setDefter(d); setMusteriler(m); setTurler(t); })
      .catch((e: { message?: string }) => { setUygulama([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  useEffect(() => { setUygulama(null); yukle(); }, [yukle]);
  useEffect(() => { if (sahip && arsivAcik) arsivdekiHastalariOku(klinik)
    .then(setArsivdekiler).catch((e: Error) => setIslemHatasi(e.message)); }, [arsivAcik, klinik, sahip]);

  async function geriAc(id: string) {
    if (bekliyor) return; setBekliyor(true); setIslemHatasi(null);
    try { await defterKaydiniGeriAc('pet', id); setBilgi('Hasta yeniden aktif edildi.');
      setArsivdekiler((rows) => rows.filter((row) => row.id !== id)); yukle(); }
    catch (e) { setIslemHatasi((e as Error).message); } finally { setBekliyor(false); }
  }

  async function calistir(is: () => Promise<string>, kapat: () => void) {
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      const mesaj = await is();
      kapat(); setBilgi(mesaj); yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  async function arsivOnizle(kayit: DefterHastasi) {
    setBekliyor(true); setIslemHatasi(null);
    try { setArsiv({ kayit, etki: await defterArsivEtkisiniOku('pet', kayit.id) }); }
    catch (e) { setIslemHatasi((e as Error).message); }
    finally { setBekliyor(false); }
  }

  async function arsivle() {
    if (!arsiv || bekliyor) return; setBekliyor(true); setIslemHatasi(null);
    try { const kayit = arsiv.kayit; await defterKaydiniArsivle(arsiv.etki); setArsiv(null);
      if (arsivAcik) setArsivdekiler((rows) => [kayit, ...rows]);
      setBilgi('Hasta aktif listeden arşive alındı; klinik geçmişi korunuyor.'); yukle(); }
    catch (e) { setIslemHatasi((e as Error).message); }
    finally { setBekliyor(false); }
  }

  if (uygulama === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} tekrar={yukle} />;

  const turAdi = (kod: string | null) => (kod ? (turler.find((t) => t.code === kod)?.name_tr ?? kod) : 'Türü girilmemiş');
  const musteriAdi = (id: string) => musteriler.find((m) => m.id === id)?.full_name ?? 'Bilinmeyen müşteri';
  const toplam = uygulama.length + defter.length;
  const gorunen = hastalariFiltrele(uygulama, defter, musteriAdi, turAdi, arama, kaynak);
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
            Uygulama üyelerinin hayvanları ve kendi defterinize yazdıklarınız bir arada.
            Sağlık kaydı yalnızca kendi defterinizdeki hastalara yazılabiliyor.
          </p>
        </div>
        <div className="pnl-basi-dugmeler">{sahip ? <button type="button" className="pnl-dugme pnl-dugme-sade"
          onClick={() => setArsivAcik((v) => !v)}><ArchiveRestore size={15} /> {arsivAcik ? 'Arşivi gizle' : 'Arşiv'}</button> : null}<button
          type="button"
          className="pnl-dugme pnl-dugme-olumlu"
          disabled={musteriler.length === 0}
          title={musteriler.length === 0 ? 'Önce Müşteriler bölümünden bir müşteri ekleyin' : undefined}
          onClick={() => { setHForm({ musteri: musteriler[0]?.id ?? '', ad: '', tur: 'dog', cinsiyet: '', dogum: '', mikrocip: '', not: '' }); setEkleAcik(true); setIslemHatasi(null); }}>
          <Plus size={15} /> Hasta ekle
        </button></div>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}
      {toplam > 0 ? <div className="pnl-liste-araclari" role="search" aria-label="Hasta listesinde ara ve filtrele">
        <label className="pnl-operasyon-arama" htmlFor="pnl-hasta-arama">
          <Search size={16} aria-hidden="true" />
          <input id="pnl-hasta-arama" type="search" value={arama} onChange={(e) => setArama(e.target.value)}
            placeholder="Hasta, sahip, tür veya mikroçip ara" />
        </label>
        <label className="pnl-liste-filtre" htmlFor="pnl-hasta-kaynak">
          <span>Kayıt kaynağı</span>
          <select id="pnl-hasta-kaynak" value={kaynak} onChange={(e) => setKaynak(e.target.value as KayitKaynagi)}>
            <option value="all">Tüm hastalar</option>
            <option value="platform">Veterito bağlantılı</option>
            <option value="ledger">Klinik defteri</option>
          </select>
        </label>
        <span className="pnl-liste-sonuc" aria-live="polite">{gorunenToplam} / {toplam} kayıt</span>
      </div> : null}
      {arsivAcik ? <section className="pnl-arsiv-kutusu"><h3>Arşivlenen hastalar</h3>
        {arsivdekiler.filter((h) => musteriler.some((m) => m.id === h.customer_id)).length === 0 ?
          <p className="pnl-soluk">Bağımsız arşivlenmiş hasta yok. Müşteriyle arşivlenen hastayı Müşteriler arşivinden geri açın.</p> :
          <ul className="pnl-kisi-listesi">{arsivdekiler.filter((h) => musteriler.some((m) => m.id === h.customer_id)).map((h) =>
            <li className="pnl-kisi" key={h.id}><span className="pnl-avatar"><Archive size={16} /></span>
              <div className="pnl-kisi-bilgi"><p className="pnl-kisi-ad">{h.name}</p><p className="pnl-kisi-ek">{musteriAdi(h.customer_id)}</p></div>
              <button type="button" className="pnl-dugme pnl-dugme-sade" disabled={bekliyor}
                onClick={() => void geriAc(h.id)}><ArchiveRestore size={14} /> Geri aç</button></li>)}</ul>}
      </section> : null}

      {/* ⚠️ Dugme pasifse SEBEBI yaziyor. Tiklanmayan bir dugme, aciklamasi
          yoksa bozuk sanilir. */}
      {musteriler.length === 0 ? (
        <p className="pnl-dipnot">
          <NotebookPen size={14} aria-hidden="true" />
          Hasta eklemek için önce Müşteriler bölümünden bir müşteri kaydı açın; her hayvan bir müşteriye bağlanıyor.
        </p>
      ) : null}

      {toplam === 0 ? (
        <Bos
          baslik="Kayıtlı hasta yok"
          aciklama="Uygulama üyesi müşterileriniz hayvanlarını kendileri kaydeder. Uygulamayı kullanmayanlar için “Hasta ekle” ile kendi defterinize kayıt açabilirsiniz."
        />
      ) : gorunenToplam === 0 ? (
        <Bos baslik="Eşleşen hasta bulunamadı" aciklama="Hasta, sahip veya tür aramasını ya da kayıt kaynağı filtresini değiştirin." />
      ) : (
        <ul className="pnl-kisi-listesi">
          {gorunen.defter.map((h) => (
            <li key={`d-${h.id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><NotebookPen size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {h.name}
                  <span className="pnl-etiket">kendi kaydınız</span>
                </p>
                <p className="pnl-kisi-rol">{turAdi(h.species_code)}</p>
                <p className="pnl-kisi-ek">Sahibi: {musteriAdi(h.customer_id)}</p>
                {h.microchip_no ? <p className="pnl-kisi-ek pnl-soluk">Mikroçip: {h.microchip_no}</p> : null}
                {h.birth_date ? <p className="pnl-kisi-ek pnl-soluk">Doğum: {tarihYaz(h.birth_date, false)}</p> : null}
              </div>
              <span className="pnl-kisi-eylem"><button
                type="button"
                className="pnl-dugme pnl-dugme-sade"
                onClick={() => {
                  setKForm({ hasta: h.id, hastaAdi: h.name, tur: 'exam', baslik: '', ayrinti: '', tarih: bugun(), sonraki: '', kilo: '' });
                  setKayitAcik(true); setIslemHatasi(null);
                }}>
                <FileText size={14} /> Kayıt ekle
              </button>{sahip ? <button type="button" className="pnl-dugme pnl-dugme-sade" disabled={bekliyor} onClick={() => void arsivOnizle(h)}><Archive size={14} /> Arşivle</button> : null}</span>
            </li>
          ))}
          {gorunen.platform.map((h) => (
            <li key={`u-${h.pet_id}`} className="pnl-kisi">
              <span className="pnl-avatar" aria-hidden="true"><PawPrint size={17} /></span>
              <div className="pnl-kisi-bilgi">
                <p className="pnl-kisi-ad">
                  {h.pet_name || 'İsim girilmemiş'}
                  <span className="pnl-etiket pnl-etiket-mavi"><Smartphone size={11} /> uygulama üyesi</span>
                </p>
                <p className="pnl-kisi-rol">{turAdi(h.species_code)}</p>
                <p className="pnl-kisi-ek">Sahibi: {h.owner_name || 'İsim girilmemiş'}</p>
                {(() => {
                  const adaylar = olasiDefterHastasiEslesmeleri(h, defter, musteriAdi);
                  return adaylar.length ? <p className="pnl-kisi-ek pnl-eslesme-uyarisi">
                    Olası klinik kaydı: {adaylar.map((aday) => aday.name).join(', ')}. Yeni kayıt açmadan önce klinik defteri satırını kontrol edin.
                  </p> : <p className="pnl-kisi-ek pnl-soluk">
                    Bağlı klinik kaydı yok; sağlık kaydı klinik defteri hastasına yazılır.
                  </p>;
                })()}
              </div>
            </li>
          ))}
        </ul>
      )}

      <Diyalog acik={!!arsiv} kapat={() => setArsiv(null)} baslik="Hastayı arşive al"
        aciklama="Hasta silinmez; aktif listelerden kaldırılır ve klinik geçmişi korunur.">
        {arsiv ? <div className="pnl-etki-ozeti"><strong>{arsiv.kayit.name}</strong><div className="pnl-etki-grid"><span>{arsiv.etki.appointment_count}<small>randevu</small></span><span>{arsiv.etki.record_count}<small>sağlık kaydı</small></span><span>{arsiv.etki.prescription_count}<small>reçete</small></span><span>{arsiv.etki.lab_request_count}<small>lab istemi</small></span></div><p className="pnl-alan-ipucu">Bu {arsiv.etki.dependency_count} kayıt silinmeyecek. Onaydan önce sayı değişirse işlem durur.</p><div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setArsiv(null)}>Vazgeç</button><button type="button" className="pnl-dugme pnl-dugme-olumsuz" disabled={bekliyor} onClick={() => void arsivle()}>{bekliyor ? 'Arşivleniyor…' : 'Arşive al'}</button></div></div> : null}
      </Diyalog>

      {/* ── HASTA EKLE ── */}
      <Diyalog acik={ekleAcik} kapat={() => setEkleAcik(false)} baslik="Hasta ekle"
        aciklama="Kendi defterinize hayvan kaydı açın. Her hayvan bir müşteriye bağlanıyor.">
        <form onSubmit={(e) => { e.preventDefault(); calistir(async () => {
          await defterHastasiEkle(klinik, hForm.musteri, { ad: hForm.ad, tur: hForm.tur, cinsiyet: hForm.cinsiyet, dogum: hForm.dogum, mikrocip: hForm.mikrocip, not: hForm.not });
          return `${hForm.ad.trim()} deftere eklendi. Artık sağlık kaydı girebilirsiniz.`;
        }, () => setEkleAcik(false)); }}>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-musteri">Sahibi</label>
            <select id="pnl-h-musteri" required value={hForm.musteri}
              onChange={(e) => setHForm((f) => ({ ...f, musteri: e.target.value }))}>
              {musteriler.map((m) => <option key={m.id} value={m.id}>{m.full_name}</option>)}
            </select>
            <span className="pnl-alan-ipucu">
              Burada yalnız klinik defteri müşterileri bulunur. Veterito bağlantılı bir kişi adına
              ikinci müşteri kaydı açmayın; sahip onaylı hasta bağlantısı hazır olduğunda bu listede
              ayrıca gösterilecektir.
            </span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-ad">Hayvanın adı</label>
            <input id="pnl-h-ad" required maxLength={80} value={hForm.ad}
              onChange={(e) => setHForm((f) => ({ ...f, ad: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-tur">Tür</label>
            {/* ⚠️ Tur listesi SUNUCUDAN geliyor; elde yazilmis sozlukte at,
                gelincik ve papagan eksikti. */}
            <select id="pnl-h-tur" value={hForm.tur} onChange={(e) => setHForm((f) => ({ ...f, tur: e.target.value }))}>
              {turler.map((t) => <option key={t.code} value={t.code}>{t.name_tr}</option>)}
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-cins">Cinsiyet</label>
            <select id="pnl-h-cins" value={hForm.cinsiyet} onChange={(e) => setHForm((f) => ({ ...f, cinsiyet: e.target.value }))}>
              <option value="">Belirtilmedi</option>
              <option value="male">Erkek</option>
              <option value="female">Dişi</option>
              <option value="unknown">Bilinmiyor</option>
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-dogum">Doğum tarihi</label>
            <input id="pnl-h-dogum" type="date" max={bugun()} value={hForm.dogum}
              onChange={(e) => setHForm((f) => ({ ...f, dogum: e.target.value }))} />
            <span className="pnl-alan-ipucu">Bilinmiyorsa boş bırakın.</span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-h-mikrocip">Mikroçip numarası</label>
            <input id="pnl-h-mikrocip" inputMode="numeric" pattern="[0-9]{9,15}" minLength={9} maxLength={15}
              value={hForm.mikrocip} onChange={(e) => setHForm((f) => ({ ...f, mikrocip: e.target.value.replace(/\D/g, '').slice(0, 15) }))}
              placeholder="9–15 haneli, isteğe bağlı" />
            <span className="pnl-alan-ipucu">Aynı klinikte aktif iki hastaya aynı mikroçip kaydedilemez.</span>
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setEkleAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !hForm.ad.trim() || !hForm.musteri}>
              {bekliyor ? 'Ekleniyor…' : 'Hastayı ekle'}
            </button>
          </div>
        </form>
      </Diyalog>

      {/* ── SAGLIK KAYDI EKLE ── */}
      <Diyalog acik={kayitAcik} kapat={() => setKayitAcik(false)} baslik="Sağlık kaydı ekle"
        aciklama={kForm.hastaAdi ? `${kForm.hastaAdi} için muayene, aşı, parazit, ilaç ya da kilo kaydı.` : undefined}>
        <form onSubmit={(e) => { e.preventDefault(); calistir(async () => {
          await saglikKaydiEkle(klinik, kForm.hasta, { tur: kForm.tur, baslik: kForm.baslik, ayrinti: kForm.ayrinti, tarih: kForm.tarih, sonraki: kForm.sonraki, kilo: kForm.kilo });
          return 'Sağlık kaydı eklendi. Sonraki tarih girdiyseniz aşı takviminde görünür.';
        }, () => setKayitAcik(false)); }}>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-tur">Kayıt türü</label>
            <select id="pnl-k-tur" value={kForm.tur} onChange={(e) => setKForm((f) => ({ ...f, tur: e.target.value }))}>
              {Object.entries(KAYIT_TURU).map(([kod, ad]) => <option key={kod} value={kod}>{ad}</option>)}
            </select>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-baslik">Başlık</label>
            <input id="pnl-k-baslik" required minLength={2} maxLength={120} value={kForm.baslik}
              onChange={(e) => setKForm((f) => ({ ...f, baslik: e.target.value }))}
              placeholder="Örnek: Karma aşı (DHPPi)" />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-tarih">Yapıldığı tarih</label>
            <input id="pnl-k-tarih" type="date" required max={bugun()} value={kForm.tarih}
              onChange={(e) => setKForm((f) => ({ ...f, tarih: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-sonraki">Sonraki tarih</label>
            <input id="pnl-k-sonraki" type="date" min={kForm.tarih || undefined} value={kForm.sonraki}
              onChange={(e) => setKForm((f) => ({ ...f, sonraki: e.target.value }))} />
            <span className="pnl-alan-ipucu">Aşı takviminde hatırlatma olarak çıkar. Gerekmiyorsa boş bırakın.</span>
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-kilo">Kilo (kg)</label>
            <input id="pnl-k-kilo" type="number" step="0.01" min="0.01" max="499" value={kForm.kilo}
              onChange={(e) => setKForm((f) => ({ ...f, kilo: e.target.value }))} />
          </div>
          <div className="pnl-alan">
            <label htmlFor="pnl-k-ayrinti">Ayrıntı</label>
            <textarea id="pnl-k-ayrinti" maxLength={1000} value={kForm.ayrinti}
              onChange={(e) => setKForm((f) => ({ ...f, ayrinti: e.target.value }))} />
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setKayitAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || kForm.baslik.trim().length < 2 || !kForm.tarih}>
              {bekliyor ? 'Kaydediliyor…' : 'Kaydı ekle'}
            </button>
          </div>
        </form>
      </Diyalog>
    </section>
  );
}
