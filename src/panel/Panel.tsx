import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { LogOut, Building2, Menu, X, ChevronDown } from 'lucide-react';
import type { Session } from '@supabase/supabase-js';

import SEO from '../components/SEO';
import logoUrl from '../assets/logo.webp';
import logoKoyuUrl from '../assets/logo-koyu.webp';
import { istemci } from './istemci';
import { klinikUyelikleri, seciliKlinigiOku, seciliKlinigiYaz, type KlinikUyeligi } from './oturum';
import { BOLUMLER, type Bolum } from './bolumler';
import { ROL } from './sozluk';
import PanelGiris from './PanelGiris';
import PanelPano from './PanelPano';
import PanelRandevular from './PanelRandevular';
import PanelMusteriler from './PanelMusteriler';
import PanelHastalar from './PanelHastalar';
import PanelEkip from './PanelEkip';
import PanelRaporlar from './PanelRaporlar';
import PanelDefter from './PanelDefter';
import PanelReceteler from './PanelReceteler';
import PanelWebSitesi from './PanelWebSitesi';
import {
  PanelKayitlar, PanelAsi, PanelTopluluk, PanelSahiplendirme, PanelMesajlar,
  PanelProfil, PanelAyarlar, PanelDuyurular, PanelBildirimler, PanelDegerlendirmeler,
} from './PanelBolumler';
import { okunmamisBildirimSayisi } from './veri';
import BildirimPenceresi from './BildirimPenceresi';
import OturumKilidi from './OturumKilidi';
import Yukleniyor from './Yukleniyor';
import './panel.css';

// Ağır operasyon araçları yalnız ilgili bölüm açıldığında indirilir. QR/barkod
// üreticisi ve tarayıcı OCR motoru genel panel paketine yük bindirmez.
const PanelStok = lazy(() => import('./PanelStok'));
const PanelLaboratuvar = lazy(() => import('./PanelLaboratuvar'));
const PanelEntegrasyonlar = lazy(() => import('./PanelEntegrasyonlar'));

/**
 * KLINIK WEB PANELI (İSTEK: Ahmet, 24.08.2026)
 *
 * *"uygulamanin kontrolunu web panelden de yapilabilecek sekilde yapacagiz,
 * icerikler falan ayni olacak ancak sadece klinikler web girisi yapabilecek
 * ilk etapta"*
 *
 * ⚠️ KENDI TASARIMI VAR, SITENIN ICINE GOMULU DEGIL (Ahmet, 24.08.2026:
 * *"web panel tasarimi ayri olmali yani bizim sitenin icerisine gomulmus gibi
 * olmamali"*). Pazarlama menusu ve alt bilgisi bu rotada hic cizilmiyor
 * (`App.tsx` icindeki `PazarlamaKabugu`). Panelin kendi ust cubugu, kendi yan
 * menusu var; marka olarak Veterito ama IS ARACI gibi duruyor, tanitim sayfasi
 * gibi degil.
 *
 * ⚠️ ARKA UCTA HICBIR SEY YAZILMADI. Yetki kontrolu RPC GOVDESINDE. Olculdu
 * (24.08.2026, duz HTTP ile):
 *   oturumsuz          -> 42501, RPC anon'a hic acik degil
 *   uye, kendi klinigi -> 200, gercek veri
 *   uye, baska klinik  -> 400 "yetkisiz: bu klinigin uyesi degilsin"
 * Yani panel yeni bir yetki yuzeyi ACMIYOR.
 *
 * ⚠️ `noindex`: panel arama sonuclarinda yeri olmayan, oturum arkasindaki bir
 * ekran. Site haritasina da girmiyor, ayrica `X-Robots-Tag` basligi var.
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
  const [bolum, setBolum] = useState<Bolum>('pano');
  const [menuAcik, setMenuAcik] = useState(false);
  /*
   * ⚠️ ZIL ROZETI ARTIK GERCEK. Once yer tutucuydu, cunku sayiyi verecek bir
   * kaynak bulunamamisti; `notifications.read_at` tam olarak bunu veriyor.
   * Yer tutucu yerine olcum koyabildigimiz her yerde olcum konuyor.
   */
  const [okunmamis, setOkunmamis] = useState(0);

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

  useEffect(() => {
    if (!oturum) { setOkunmamis(0); return; }
    /* Sayim basarisiz olursa rozet gosterilmiyor; panel yine calisiyor. */
    okunmamisBildirimSayisi().then(setOkunmamis).catch(() => setOkunmamis(0));
  }, [oturum, bolum]);

  function bolumeGit(b: Bolum) {
    setBolum(b);
    setMenuAcik(false);
    /* ⚠️ Bolum degisince yukari cikiyoruz: uzun bir listeden kisa bir bolume
       gecince kullanici sayfanin ortasinda kaliyordu ve ekran bos sanilıyordu. */
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── GIRIS YAPILMAMIS: panelin kendi giris ekrani, kabuk yok ── */
  if (!hazir) {
    return (
      <div className="pnl-kabuk pnl-kabuk-sade">
        <SEO title="Klinik Paneli" description="Veterito klinik yönetim paneli." noindex />
        <Yukleniyor metin="Panel açılıyor" />
      </div>
    );
  }

  if (!oturum) {
    return (
      <div className="pnl-kabuk pnl-kabuk-sade">
        <SEO title="Klinik Girişi" description="Veterito klinik yönetim paneli." noindex />
        <PanelGiris girildi={() => { /* dinleyici oturumu yakaliyor */ }} />
      </div>
    );
  }

  if (klinikler === null) {
    return (
      <div className="pnl-kabuk pnl-kabuk-sade">
        <SEO title="Klinik Paneli" description="Veterito klinik yönetim paneli." noindex />
        <Yukleniyor metin="Kliniğiniz yükleniyor" />
      </div>
    );
  }

  if (klinikler.length === 0) {
    /*
     * ⚠️ Bu ekran "yetkin yok" DEMIYOR, "klinik uyeligin yok" diyor. Ikisi
     * farkli sey ve karistirmak kullaniciyi yanlis yere gonderir: hayvan
     * sahibi hesabiyla giren biri hata yaptigini degil, henuz web girisi
     * olmadigini bilmeli.
     */
    return (
      <div className="pnl-kabuk pnl-kabuk-sade">
        <SEO title="Klinik Paneli" description="Veterito klinik yönetim paneli." noindex />
        <div className="pnl-kutu">
          <Building2 size={24} aria-hidden="true" />
          <h2>Bu hesap bir kliniğe bağlı değil</h2>
          <p>Web paneline şimdilik yalnızca klinikler girebiliyor ve bu hesap hiçbir klinikte kayıtlı görünmüyor.</p>
          <p className="pnl-not">
            Hayvan sahibiyseniz Veterito uygulamasını kullanabilirsiniz; hayvan sahipleri için web girişi henüz yok.
          </p>
          <button type="button" className="pnl-dugme pnl-dugme-sade" onClick={() => istemci.auth.signOut({ scope: 'local' })}>
            <LogOut size={15} /> Çıkış yap
          </button>
        </div>
      </div>
    );
  }

  const secili = klinikler.find((k) => k.clinic_id === seciliId) ?? klinikler[0];
  const rol = ROL[secili.role];
  const aktif = BOLUMLER.find((b) => b.anahtar === bolum);

  const icerik = () => {
    switch (bolum) {
      case 'randevular': return <PanelRandevular klinik={secili.clinic_id} />;
      case 'musteriler': return <PanelMusteriler klinik={secili.clinic_id} />;
      case 'hastalar': return <PanelHastalar klinik={secili.clinic_id} />;
      case 'kayitlar': return <PanelKayitlar klinik={secili.clinic_id} />;
      case 'asi': return <PanelAsi klinik={secili.clinic_id} />;
      case 'receteler': return <PanelReceteler klinik={secili.clinic_id} klinikAdi={secili.clinic_name} />;
      case 'stok': return <PanelStok klinik={secili.clinic_id} />;
      case 'laboratuvar': return <PanelLaboratuvar klinik={secili.clinic_id} />;
      case 'profil': return <PanelProfil klinik={secili.clinic_id} />;
      case 'topluluk': return <PanelTopluluk klinik={secili.clinic_id} />;
      case 'mesajlar': return <PanelMesajlar klinik={secili.clinic_id} />;
      case 'sahiplendirme': return <PanelSahiplendirme />;
      case 'duyurular': return <PanelDuyurular klinik={secili.clinic_id} />;
      case 'bildirimler': return <PanelBildirimler />;
      case 'degerlendirmeler': return <PanelDegerlendirmeler klinik={secili.clinic_id} />;
      case 'defter': return <PanelDefter klinik={secili.clinic_id} />;
      case 'ekip': return <PanelEkip klinik={secili.clinic_id} />;
      case 'entegrasyonlar': return <PanelEntegrasyonlar klinik={secili.clinic_id} sahip={secili.role === 'owner'} />;
      case 'websitesi': return <PanelWebSitesi klinik={secili.clinic_id} />;
      case 'ayarlar': return <PanelAyarlar />;
      case 'raporlar': return <PanelRaporlar klinik={secili.clinic_id} />;
      default: return <PanelPano klinik={secili.clinic_id} git={bolumeGit} />;
    }
  };

  return (
    <div className="pnl-kabuk">
      {/* ⚠️ Yalniz oturum ACIKKEN kuruluyor; giris ekraninda sayac calismasin. */}
      <OturumKilidi />
      <SEO title="Klinik Paneli" description="Veterito klinik yönetim paneli." noindex />

      <nav className={menuAcik ? 'pnl-yan pnl-yan-acik' : 'pnl-yan'} aria-label="Panel bölümleri">
          <div className="pnl-marka">
            {/* ⚠️ Yan menu her temada koyu; bu yuzden HER ZAMAN koyu zemin logosu. */}
            <img src={logoKoyuUrl} alt="Veterito" width={120} height={30} className="pnl-logo" />
            <img src={logoUrl} alt="" aria-hidden="true" width={120} height={30} className="pnl-logo pnl-logo-acik" />
          </div>

          <div className="pnl-klinik-kutu">
            {/* ⚠️ Bas harf, logo yerine gecen kucuk bir kimlik. Klinigin kendi
                gorseli sunucudan gelmiyor; uydurma bir ikon koymak yerine adin
                ilk harfi kullaniliyor. */}
            <span className="pnl-klinik-rozet" aria-hidden="true">
              {(secili.clinic_name || 'K').trim().charAt(0).toLocaleUpperCase('tr-TR')}
            </span>
            <span className="pnl-klinik-metin">
              <span className="pnl-klinik-etiket">Klinik</span>
              {klinikler.length > 1 ? (
                <select
                  className="pnl-klinik-secim"
                  value={secili.clinic_id}
                  aria-label="Klinik seçin"
                  onChange={(e) => { setSeciliId(e.target.value); seciliKlinigiYaz(e.target.value); }}>
                  {klinikler.map((k) => (
                    <option key={k.clinic_id} value={k.clinic_id}>{k.clinic_name}</option>
                  ))}
                </select>
              ) : (
                <span className="pnl-klinik-ad">{secili.clinic_name}</span>
              )}
            </span>
          </div>

          <div className="pnl-menu-sarmal">
          <ul className="pnl-menu">
            {BOLUMLER.map((b) => {
              const Ikon = b.ikon;
              return (
                <li key={b.anahtar}>
                  <button
                    type="button"
                    aria-current={bolum === b.anahtar ? 'page' : undefined}
                    className={bolum === b.anahtar ? 'pnl-menu-ogesi pnl-menu-etkin' : 'pnl-menu-ogesi'}
                    /*
                     * ⚠️ ACIKLAMA MENUDEN CIKTI, `title`e TASINDI (25.08.2026).
                     * Her satirin altinda bir aciklama satiri vardi ve menu
                     * ogesini iki katina cikariyordu; sekiz oge ekranin yarisini
                     * yiyordu. Referans yerlesimde menu tek satirlik ve panel tek
                     * ekrana sigiyor. Aciklama kaybolmadi: fare uzerine gelince
                     * cikiyor, ayrica her bolumun kendi basliginda yaziyor.
                     */
                    title={b.aciklama}
                    onClick={() => bolumeGit(b.anahtar as Bolum)}>
                    <Ikon size={18} aria-hidden="true" />
                    <span className="pnl-menu-ad">{b.ad}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          </div>

          {/* ⚠️ 27.08.2026'DA DUZELTILDI. Once "Recete VE DUYURU simdilik
              telefonda" yaziyordu; olculdu, duyuru panelde CALISIYOR
              (duyuruOlusturVeGonder -> PanelDuyurular) ve saglik kaydi da
              panelde yaziliyor (saglikKaydiEkle -> PanelHastalar).
              Yapabildigi isi yapamiyorum diye anlatan urun, calismayan
              dugmenin tersi ama ayni sinifta bir hata: veterineri gereksiz
              yere telefona gonderiyordu. Kalan tek gercek eksik recete. */}
          <p className="pnl-yan-not">
            Mobil ve web aynı klinik verisiyle çalışır; yetki ve doğrulama sunucuda uygulanır.
          </p>

          {/*
            ⚠️ `scope: 'local'` ZORUNLU. `signOut()` varsayilani GLOBAL: butun
            oturumlari iptal ediyor. Yani klinik calisani web panelinden cikinca
            TELEFONUNDAKI uygulamadan da atilirdi. Iki yonlu olculdu (24.08.2026):
            local ile diger oturumun yenileme belirteci gecerli kaliyor, global
            ile "Invalid Refresh Token" oluyor.
          */}
          <button type="button" className="pnl-cikis-yan" onClick={() => istemci.auth.signOut({ scope: 'local' })}>
            <LogOut size={16} aria-hidden="true" /> Çıkış yap
          </button>
      </nav>

      {/*
        ⚠️ YAN MENU EN TEPEDEN BASLIYOR (24.08.2026). Once ust cubuk butun
        genisligi kapliyordu ve yan menu onun ALTINDAN basliyordu; logo ile
        sayfa basligi ayni hizada olmadigi icin ekran iki parca gorunuyordu.
        Simdi yan menu tam yukseklikte tek sutun, ust cubuk yalniz icerik
        sutununun uzerinde duruyor. Taslakta da boyleydi.
      */}
      <div className="pnl-sutun">
      <header className="pnl-ust">
        <button
          type="button"
          className="pnl-menu-dugme"
          aria-expanded={menuAcik}
          aria-label={menuAcik ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setMenuAcik((a) => !a)}>
          {menuAcik ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* ⚠️ ASIL BASLIK USTTE: hangi bolumde oldugu sayfa kaysa da gorunur. */}
        <div className="pnl-ust-orta">
          <h1 className="pnl-ust-baslik">{aktif?.ad ?? 'Genel bakış'}</h1>
          <p className="pnl-ust-alt">{secili.clinic_name}</p>
        </div>

        <div className="pnl-ust-sag">
          {/*
            ⚠️ ZIL YONLENDIRMIYOR, PENCERE ACIYOR (Ahmet, 25.08.2026). Once
            tiklayinca bolum degisiyordu: kullanici randevu onaylarken zile
            bakmak istese bulundugu ekrani kaybediyordu. Bildirim yan bilgi;
            ona bakmak icin ise ara vermek gerekmemeli. Tam listeye gitmek yine
            mumkun ama artik ISTEGE BAGLI.
          */}
          <BildirimPenceresi
            okunmamis={okunmamis}
            sayiyiTazele={() => okunmamisBildirimSayisi().then(setOkunmamis).catch(() => {})}
            tumunuGor={() => bolumeGit('bildirimler')}
          />

          <div className="pnl-kullanici-kutu">
            <span className="pnl-avatar-bas" aria-hidden="true">
              {(oturum.user.email ?? 'K').trim().charAt(0).toLocaleUpperCase('tr-TR')}
            </span>
            <span className="pnl-kullanici">
              <span className="pnl-kullanici-ad">{oturum.user.email}</span>
              {rol ? <span className="pnl-kullanici-rol">{rol.ad}</span> : null}
            </span>
            <ChevronDown size={15} className="pnl-kullanici-ok" aria-hidden="true" />
          </div>
        </div>
      </header>

          <main className="pnl-icerik"><Suspense fallback={<Yukleniyor metin="Operasyon araçları hazırlanıyor" />}>{icerik()}</Suspense></main>
      </div>
    </div>
  );
}
