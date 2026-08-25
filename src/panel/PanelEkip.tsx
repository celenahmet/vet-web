import { useCallback, useEffect, useState } from 'react';
import { ShieldCheck, User, UserPlus, UserMinus } from 'lucide-react';

import { personeliOku, personelDavetEt, personeliCikar, type Personel } from './veri';
import { ROL, tarihYaz } from './sozluk';
import Bos from './Bos';
import Yukleniyor from './Yukleniyor';
import Hata from './Hata';
import Diyalog from './Diyalog';

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

      {liste.length === 0 ? (
        <Bos baslik="Ekipte kimse görünmüyor" aciklama="Klinik sahibi uygulamadan çalışan davet ettiğinde burada listelenir." />
      ) : (
        <ul className="pnl-kisi-listesi">
          {liste.map((k) => {
            const rol = ROL[k.role];
            return (
              <li key={k.user_id} className="pnl-kisi">
                <span className="pnl-avatar" aria-hidden="true">
                  {k.role === 'owner' ? <ShieldCheck size={18} /> : <User size={18} />}
                </span>
                <div className="pnl-kisi-bilgi">
                  <p className="pnl-kisi-ad">
                    {k.display_name || 'İsim girilmemiş'}
                    {k.is_me ? <span className="pnl-etiket">siz</span> : null}
                  </p>
                  <p className="pnl-kisi-rol">{rol?.ad ?? k.role}</p>
                  <p className="pnl-kisi-anlam">{rol?.anlam ?? 'Bu rolün ne yapabildiği tanımlanmamış.'}</p>
                  {k.title ? <p className="pnl-kisi-ek">{k.title}</p> : null}
                  <p className="pnl-kisi-ek pnl-soluk">Ekibe katıldı: {tarihYaz(k.created_at, false)}</p>
                </div>
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
