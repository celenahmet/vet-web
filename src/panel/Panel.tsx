import { useCallback, useEffect, useState } from 'react';
import { LogOut, Building2 } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';

import SEO from '../components/SEO';
import { istemci } from './istemci';
import { klinikUyelikleri, seciliKlinigiOku, seciliKlinigiYaz, type KlinikUyeligi } from './oturum';
import PanelGiris from './PanelGiris';
import PanelPano from './PanelPano';
import './panel.css';

/**
 * KLINIK WEB PANELI (İSTEK: Ahmet, 24.08.2026)
 *
 * *"uygulamanin kontrolunu web panelden de yapilabilecek sekilde yapacagiz,
 * icerikler falan ayni olacak ancak sadece klinikler web girisi yapabilecek
 * ilk etapta"*
 *
 * ⚠️ SIFIR BACKEND ISI GEREKTI ve bu tesadüf degil: klinik islemleri zaten
 * RPC'ler uzerinden yurutuluyor ve yetki kontrolu RPC GOVDESINDE. Olculdu
 * (24.08.2026, duz HTTP ile):
 *   oturumsuz        -> 401, RPC anon'a hic acik degil
 *   uye, kendi klinigi -> 200, gercek veri
 *   uye, baska klinik  -> 400 "yetkisiz: bu klinigin uyesi degilsin"
 * Yani panel yeni bir yetki yuzeyi ACMIYOR.
 *
 * ⚠️ `noindex`: panel arama sonuclarinda yeri olmayan, oturum arkasindaki bir
 * ekran. Site haritasina da girmiyor.
 *
 * ⚠️ Bu agac `App.tsx` icinde `lazy()` ile yukleniyor; `@supabase/supabase-js`
 * yalniz buradan import edildigi icin pazarlama sayfalarinin paketine
 * girmiyor. Derlemeden sonra olculuyor.
 */
export default function Panel() {
  const [oturum, setOturum] = useState<Session | null>(null);
  const [hazir, setHazir] = useState(false);
  const [klinikler, setKlinikler] = useState<KlinikUyeligi[] | null>(null);
  const [seciliId, setSeciliId] = useState<string | null>(seciliKlinigiOku());

  useEffect(() => {
    istemci.auth.getSession().then(({ data }) => {
      setOturum(data.session);
      setHazir(true);
    });
    /**
     * ⚠️ Dinleyici sart: jeton kendiliğinden yenilenince ya da baska bir sekmede
     * cikis yapilinca bu sekme de haberdar olmali. Yoksa kullanici cikis yaptigini
     * saniyor ama ekranda veri duruyor.
     */
    const { data: abone } = istemci.auth.onAuthStateChange((_olay, s) => setOturum(s));
    return () => abone.subscription.unsubscribe();
  }, []);

  const uyelikleriYukle = useCallback(() => {
    klinikUyelikleri()
      .then((liste) => {
        setKlinikler(liste);
        setSeciliId((onceki) => {
          if (onceki && liste.some((k) => k.clinic_id === onceki)) return onceki;
          return liste[0]?.clinic_id ?? null;
        });
      })
      .catch(() => setKlinikler([]));
  }, []);

  useEffect(() => {
    if (oturum) uyelikleriYukle();
    else setKlinikler(null);
  }, [oturum, uyelikleriYukle]);

  function klinikSec(id: string) {
    setSeciliId(id);
    seciliKlinigiYaz(id);
  }

  const govde = () => {
    if (!hazir) return <div className="panel-yukleniyor" role="status" aria-label="Yükleniyor" />;
    if (!oturum) return <PanelGiris girildi={() => { /* dinleyici oturumu yakaliyor */ }} />;
    if (klinikler === null) return <div className="panel-yukleniyor" role="status" aria-label="Yükleniyor" />;

    if (klinikler.length === 0) {
      /*
       * ⚠️ Bu ekran "yetkin yok" DEMIYOR, "klinik uyeligin yok" diyor. Ikisi
       * farkli sey ve karistirmak kullaniciyi yanlis yere gonderir: hayvan
       * sahibi hesabiyla giren biri hata yaptigini degil, henuz web girisi
       * olmadigini bilmeli.
       */
      return (
        <div className="panel-kutu">
          <Building2 size={22} />
          <h2>Bağlı bir klinik bulunamadı</h2>
          <p>Bu hesap hiçbir kliniğe üye görünmüyor. Web paneli ilk etapta yalnızca klinikler için açık.</p>
          <p className="panel-not">Hayvan sahibiyseniz uygulamayı kullanabilirsiniz; web girişi henüz yok.</p>
        </div>
      );
    }

    const secili = klinikler.find((k) => k.clinic_id === seciliId) ?? klinikler[0];
    return (
      <>
        {klinikler.length > 1 ? (
          <div className="panel-klinik-secim">
            <span>Klinik</span>
            <select value={secili.clinic_id} onChange={(e) => klinikSec(e.target.value)}>
              {klinikler.map((k) => (
                <option key={k.clinic_id} value={k.clinic_id}>{k.clinic_name}</option>
              ))}
            </select>
          </div>
        ) : null}
        <PanelPano klinik={secili} />
      </>
    );
  };

  return (
    <div className="panel-sayfa">
      <SEO title="Klinik Paneli" description="Veterito klinik yönetim paneli." noindex />

      <header className="panel-baslik">
        <div>
          <h1>Klinik Paneli</h1>
          {oturum ? <p>{oturum.user.email}</p> : null}
        </div>
        {/*
          ⚠️ `scope: 'local'` ZORUNLU. `signOut()` varsayilani GLOBAL: butun
          oturumlari iptal ediyor. Yani klinik calisani web panelinden cikinca
          TELEFONUNDAKI uygulamadan da atilirdi. Kullanicinin bekledigi sey bu
          degil ve "cikis yaptim, telefonum neden kapandi" sorusu guveni zedeler.
          ⚠️ Paylasilan bilgisayarda global cikis daha guvenli gorunuyor ama
          dogru cozum o degil; oturum suresi ve cihaz yonetimi ayri bir is.

          ⚠️ Bu yorum ternary DALININ ICINDE degil DISINDA duruyor. Iceride
          yazilinca JSX yorumu bir nesne ifadesi gibi okunuyor ve derleme
          kiriliyor; 24.08.2026'da tam bu oldu.
        */}
        {oturum ? (
          <button type="button" className="panel-cikis" onClick={() => istemci.auth.signOut({ scope: 'local' })}>
            <LogOut size={16} /> Çıkış
          </button>
        ) : null}
      </header>

      {govde()}
    </div>
  );
}
