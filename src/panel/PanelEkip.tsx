import { useCallback, useEffect, useState } from 'react';
import { Search, ShieldCheck, User, UserPlus, UserMinus, Pencil } from 'lucide-react';

import { personeliOku, personelDavetEt, personeliCikar, personelProfiliniGuncelle, kendiPersonelFotografiniGuncelle, type Personel } from './veri';
import { guvenliGorselSil, guvenliGorselYukle, imzaliGorselAdresi } from './medya-veri';
import { ROL, tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

function PersonelFotografi({ storageKey }: { storageKey: string }) {
  const [adres, setAdres] = useState<string | null>(null);
  useEffect(() => { let gecerli = true; imzaliGorselAdresi(storageKey, 'avatars').then((u) => { if (gecerli) setAdres(u); }).catch(() => setAdres('')); return () => { gecerli = false; }; }, [storageKey]);
  return adres ? <img className="pnl-personel-fotografi" src={adres} alt="Ekip üyesi" loading="lazy" /> : <User size={18} />;
}

/**
 * EKIP
 *
 * ⚠️ ROL HAM KOD OLARAK YAZILMIYOR (Ahmet, 24.08.2026: *"personelin listesi
 * felan neyse her sey cok aciklayici olmali"*). Ekranda `owner` / `staff`
 * gormek, klinikte calisan biri icin hicbir sey soylemez. Rolun adi da yetmiyor:
 * "Klinik sahibi" ile "Calisan" arasindaki farkin NE OLDUGU yaziyor, cunku
 * birini digerine cevirmenin sonucu var.
 *
 * ⚠️ Bu ekran yalniz GOSTERIYOR. Ekip ekleme ve cikarma (`clinic_invite_staff`,
 * `clinic_remove_staff`) sunucuda hazir ama panele bilerek baglanmadi: davet ve
 * cikarma geri alinmasi zor islemler, once onay akisi tasarlanmali.
 */
export default function PanelEkip({ klinik }: { klinik: string }) {
  const [liste, setListe] = useState<Personel[] | null>(null);
  const [hata, setHata] = useState<string | null>(null);
  const [islemHatasi, setIslemHatasi] = useState<string | null>(null);
  const [davetAcik, setDavetAcik] = useState(false);
  const [davetEposta, setDavetEposta] = useState('');
  const [bekliyor, setBekliyor] = useState(false);
  const [cikarilacak, setCikarilacak] = useState<Personel | null>(null);
  const [bilgi, setBilgi] = useState<string | null>(null);
  const [arama, setArama] = useState('');
  const [duzenlenen, setDuzenlenen] = useState<Personel | null>(null);
  const [profil, setProfil] = useState({ unvan: '', egitim: '', tanitim: '', yayinda: false });

  const yukle = useCallback(() => {
    setHata(null);
    personeliOku(klinik).then(setListe)
      .catch((e: { message?: string }) => { setListe([]); setHata(e?.message ?? ''); });
  }, [klinik]);

  useEffect(() => { setListe(null); yukle(); }, [yukle]);

  async function davetGonder(e: React.FormEvent) {
    e.preventDefault();
    if (bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await personelDavetEt(klinik, davetEposta);
      setDavetAcik(false); setDavetEposta('');
      setBilgi('Davet gönderildi. Kişi uygulamadan kabul edince ekipte görünecek.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  async function cikar() {
    if (!cikarilacak || bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await personeliCikar(klinik, cikarilacak.user_id);
      setCikarilacak(null);
      setBilgi('Kişi ekipten çıkarıldı.');
      yukle();
    } catch (err) {
      setIslemHatasi((err as { message?: string })?.message ?? '');
    } finally { setBekliyor(false); }
  }

  function duzenle(k: Personel) {
    setDuzenlenen(k);
    setProfil({ unvan: k.title ?? '', egitim: k.education ?? '', tanitim: k.bio ?? '', yayinda: k.is_public });
    setIslemHatasi(null);
  }

  async function profiliKaydet(e: React.FormEvent) {
    e.preventDefault();
    if (!duzenlenen || bekliyor) return;
    setBekliyor(true); setIslemHatasi(null); setBilgi(null);
    try {
      await personelProfiliniGuncelle({
        klinik,
        kullanici: duzenlenen.user_id,
        unvan: profil.unvan,
        egitim: profil.egitim,
        tanitim: profil.tanitim,
        ...(duzenlenen.is_me ? { yayinda: profil.yayinda } : {}),
      });
      setDuzenlenen(null); setBilgi('Ekip profili güncellendi.'); yukle();
    } catch (err) { setIslemHatasi((err as { message?: string })?.message ?? ''); }
    finally { setBekliyor(false); }
  }

  async function fotografYukle(dosya?: File) {
    if (!dosya || bekliyor) return;
    setBekliyor(true); setIslemHatasi(null);
    let key: string | null = null;
    try {
      key = await guvenliGorselYukle(dosya, `staff-${klinik}`, 'pub', 'avatars');
      await kendiPersonelFotografiniGuncelle(klinik, key);
      setBilgi('Ekip fotoğrafınız güncellendi.'); yukle();
    } catch (e) {
      if (key) await Promise.allSettled([guvenliGorselSil(key, 'avatars')]);
      setIslemHatasi((e as Error).message);
    }
    finally { setBekliyor(false); }
  }

  if (liste === null) return <Yukleniyor />;
  if (hata) return <Hata mesaj={hata} />;

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
            Bu klinikte çalışan kişiler. Ekibe kişi eklemeyi ve çıkarmayı yalnızca klinik
            sahibi yapabilir.
          </p>
        </div>
        <button type="button" className="pnl-dugme pnl-dugme-olumlu" onClick={() => { setDavetAcik(true); setIslemHatasi(null); }}>
          <UserPlus size={15} /> Ekibe kişi davet et
        </button>
      </header>

      {islemHatasi ? <Hata mesaj={islemHatasi} kucuk /> : null}
      {bilgi ? <p className="pnl-bilgi" role="status">{bilgi}</p> : null}

      <div className="pnl-arama">
        <Search size={16} aria-hidden="true" />
        <input aria-label="Ekipte ara" type="search" value={arama} onChange={(e) => setArama(e.target.value)} placeholder="Ad, unvan veya eğitim ara" />
      </div>

      {liste.length === 0 ? (
        <Bos baslik="Ekipte kimse görünmüyor" aciklama="Klinik sahibi uygulamadan çalışan davet ettiğinde burada listelenir." />
      ) : (
        <ul className="pnl-kisi-listesi">
          {liste.filter((k) => `${k.display_name ?? ''} ${k.title ?? ''} ${k.education ?? ''}`.toLocaleLowerCase('tr-TR').includes(arama.trim().toLocaleLowerCase('tr-TR'))).map((k) => {
            const rol = ROL[k.role];
            return (
              <li key={k.user_id} className="pnl-kisi">
                <span className="pnl-avatar" aria-hidden="true">
                  {k.photo_key ? <PersonelFotografi storageKey={k.photo_key} /> : k.role === 'owner' ? <ShieldCheck size={18} /> : <User size={18} />}
                </span>
                <div className="pnl-kisi-bilgi">
                  <p className="pnl-kisi-ad">
                    {k.display_name || 'İsim girilmemiş'}
                    {k.is_me ? <span className="pnl-etiket">siz</span> : null}
                  </p>
                  <p className="pnl-kisi-rol">{rol?.ad ?? k.role}</p>
                  <p className="pnl-kisi-anlam">{rol?.anlam ?? 'Bu rolün ne yapabildiği tanımlanmamış.'}</p>
                  {k.title ? <p className="pnl-kisi-ek">{k.title}</p> : null}
                  {k.education ? <p className="pnl-kisi-ek pnl-soluk">{k.education}</p> : null}
                  {k.bio ? <p className="pnl-kisi-anlam">{k.bio}</p> : null}
                  <p className="pnl-kisi-ek pnl-soluk">Klinik web sitesinde: {k.is_public ? 'yayında' : 'gizli'}</p>
                  <p className="pnl-kisi-ek pnl-soluk">Ekibe katıldı: {tarihYaz(k.created_at, false)}</p>
                </div>
                <button type="button" className="pnl-dugme pnl-dugme-sade pnl-kisi-eylem" onClick={() => duzenle(k)}><Pencil size={14} /> Profili düzenle</button>
                {k.is_me ? <label className="pnl-dugme pnl-dugme-sade pnl-kisi-eylem pnl-dosya-dugmesi">Fotoğraf yükle<input type="file" accept="image/jpeg,image/png,image/webp" disabled={bekliyor} onChange={(e) => { const f = e.target.files?.[0]; void fotografYukle(f); e.currentTarget.value = ''; }} /></label> : null}
                {/*
                  ⚠️ Kisi KENDINI cikaramiyor ve klinik sahibi listeden
                  cikarilamiyor. Ikisi de sunucuda da engelli; buradaki gizleme
                  yalnizca calismayacak bir dugmeyi gostermemek icin.
                */}
                {!k.is_me && k.role !== 'owner' ? (
                  <button
                    type="button"
                    className="pnl-dugme pnl-dugme-olumsuz pnl-kisi-eylem"
                    onClick={() => { setCikarilacak(k); setIslemHatasi(null); }}>
                    <UserMinus size={15} /> Ekipten çıkar
                  </button>
                ) : null}
              </li>
            );
          })}
        </ul>
      )}
      <Diyalog
        acik={davetAcik}
        kapat={() => setDavetAcik(false)}
        baslik="Ekibe kişi davet et"
        aciklama="Kişinin Veterito hesabındaki e-posta adresini yazın. Davet ona bildirim olarak gider; kabul edene kadar ekipte görünmez.">
        <form onSubmit={davetGonder}>
          <div className="pnl-alan">
            <label htmlFor="pnl-davet-eposta">E-posta</label>
            <input
              id="pnl-davet-eposta"
              type="email"
              required
              value={davetEposta}
              onChange={(e) => setDavetEposta(e.target.value)}
              placeholder="ornek@eposta.com"
            />
            <span className="pnl-alan-ipucu">
              Adres Veterito’da kayıtlı değilse davet gönderilemez.
            </span>
          </div>
          <div className="pnl-diyalog-eylem">
            <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setDavetAcik(false)}>Vazgeç</button>
            <button type="submit" className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor || !davetEposta.trim()}>
              {bekliyor ? 'Gönderiliyor…' : 'Daveti gönder'}
            </button>
          </div>
        </form>
      </Diyalog>

      <Diyalog acik={duzenlenen !== null} kapat={() => setDuzenlenen(null)} baslik="Ekip profilini düzenle" aciklama="Unvan, eğitim ve tanıtım metni klinik ekibi vitrininizde kullanılır. Yayınlama kararını yalnız kişi kendisi verebilir.">
        <form onSubmit={profiliKaydet}>
          <div className="pnl-alan"><label htmlFor="pnl-ekip-unvan">Mesleki unvan</label><input id="pnl-ekip-unvan" maxLength={120} value={profil.unvan} onChange={(e) => setProfil((p) => ({ ...p, unvan: e.target.value }))} placeholder="Veteriner Hekim" /></div>
          <div className="pnl-alan"><label htmlFor="pnl-ekip-egitim">Eğitim ve uzmanlık</label><textarea id="pnl-ekip-egitim" maxLength={500} value={profil.egitim} onChange={(e) => setProfil((p) => ({ ...p, egitim: e.target.value }))} placeholder="Üniversite, uzmanlık alanları, sertifikalar" /></div>
          <div className="pnl-alan"><label htmlFor="pnl-ekip-tanitim">Kısa tanıtım</label><textarea id="pnl-ekip-tanitim" maxLength={1000} value={profil.tanitim} onChange={(e) => setProfil((p) => ({ ...p, tanitim: e.target.value }))} placeholder="Hasta yaklaşımı ve çalışma alanları" /><span className="pnl-alan-ipucu">{profil.tanitim.length} / 1000 karakter</span></div>
          {duzenlenen?.is_me ? <label className="pnl-onay"><input type="checkbox" checked={profil.yayinda} onChange={(e) => setProfil((p) => ({ ...p, yayinda: e.target.checked }))} /><span><strong>Klinik web sitesinde göster</strong><small>Adınız ve mesleki bilgileriniz ekip bölümünde yayınlanır.</small></span></label> : <p className="pnl-not">Bu kişinin yayınlama tercihini değiştiremezsiniz; yalnız mesleki bilgilerini düzenleyebilirsiniz.</p>}
          <div className="pnl-diyalog-eylem"><button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setDuzenlenen(null)}>Vazgeç</button><button className="pnl-dugme pnl-dugme-olumlu" disabled={bekliyor}>{bekliyor ? 'Kaydediliyor…' : 'Kaydet'}</button></div>
        </form>
      </Diyalog>

      {/*
        ⚠️ CIKARMA ONAY ISTIYOR. Geri alinmasi zor bir islem: cikarilan kisi
        klinigin randevularini, musterilerini ve defterini aninda goremez olur.
        Tek tiklamayla olmasi, yanlislikla yapilmasini kolaylastirirdi.
      */}
      <Diyalog
        acik={cikarilacak !== null}
        kapat={() => setCikarilacak(null)}
        baslik="Bu kişiyi ekipten çıkarmak istiyor musunuz?"
        aciklama={
          cikarilacak
            ? `${cikarilacak.display_name || 'Bu kişi'} çıkarıldığında kliniğin randevularını, müşterilerini ve defterini artık göremez. Dilerseniz sonra tekrar davet edebilirsiniz.`
            : undefined
        }>
        <div className="pnl-diyalog-eylem">
          <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => setCikarilacak(null)}>Vazgeç</button>
          <button type="button" className="pnl-dugme pnl-dugme-olumsuz" onClick={cikar} disabled={bekliyor}>
            {bekliyor ? 'Çıkarılıyor…' : 'Evet, ekipten çıkar'}
          </button>
        </div>
      </Diyalog>
    </section>
  );
}
