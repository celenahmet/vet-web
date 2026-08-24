import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ONCEDEN_URETILMIS } from './onizleme';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Pets = lazy(() => import('./pages/Pets'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Clinics = lazy(() => import('./pages/Clinics'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const LegalHub = lazy(() => import('./pages/LegalHub'));
const LegalDocument = lazy(() => import('./pages/LegalDocument'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Download = lazy(() => import('./pages/Download'));
const ClinicPage = lazy(() => import('./pages/ClinicPage'));
/**
 * ⚠️ PANEL AYRI PARCA. `@supabase/supabase-js` yalniz bu agactan import
 * ediliyor; `lazy()` sayesinde pazarlama sayfalarinin paketine girmiyor.
 * Derlemeden sonra olculuyor.
 */
const Panel = lazy(() => import('./panel/Panel'));

/**
 * ⚠️ ARA DURUM: onceden uretilmis icerik varsa ONU gosteriyoruz.
 *
 * Prerender edilen sayfalarda (blog yazilari ve blog listesi) HTML govdesinde
 * gercek metin duruyor; `createRoot` onu siliyor. Silinen metni ara durumda
 * geri koyunca okuyucu icin kesinti olmuyor ve sayfanin yuksekligi degismiyor.
 * Yukseklik degismeyince alt bilgi de ziplamiyor.
 *
 * Prerender edilmemis sayfalarda (ana sayfa, klinikler...) govde bos geliyor;
 * orada eski davranis suruyor, olculu bir donen halka.
 *
 * ⚠️ Yalniz ILK yuklemede gecerli. Uygulama icinde gezinirken `ONCEDEN_URETILMIS`
 * hala eski sayfanin metnini tasiyor; `ilkYukleme` bayragi bunu engelliyor,
 * yoksa kullanici B sayfasina giderken A sayfasinin metnini gorurdu.
 */
/**
 * ⚠️ "ILK YUKLEME" BAYRAK ILE DEGIL ROTA ANAHTARI ILE ANLASILIYOR (24.08.2026).
 *
 * Once modul kapsaminda `let ilkYukleme = true` vardi ve `Yedek` RENDER
 * SIRASINDA onu false yapiyordu. React eszamanli render'da ayni bileseni birden
 * fazla kez cagirabiliyor; ikinci cagride bayrak coktan false oluyor ve
 * onizleme yerine donen halka ciziliyordu. Olcum bunu gosterdi: blog listesinde
 * ara durumda onceden uretilmis icerik degil halka gorunuyordu.
 *
 * Render sirasinda modul degiskeni degistirmek zaten yanlis; React bileseninin
 * render'i saf olmali. `useLocation().key` ilk girişte 'default' oluyor, sonraki
 * gezinmelerde degisiyor. Yan etkisiz ve kac kez render edildiginden bagimsiz.
 */
function Yedek() {
  const { key } = useLocation();
  if (key === 'default' && ONCEDEN_URETILMIS) {
    return <div dangerouslySetInnerHTML={{ __html: ONCEDEN_URETILMIS }} />;
  }
  return <div className="loading-spinner" role="status" aria-label="Sayfa yükleniyor" />;
}

function App() {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Navbar />
      {/*
        ⚠️ ALT BILGI DE ARA DURUMUN ICINDE (24.08.2026). Once <Suspense> yalniz
        <main> icindeydi ve alt bilgi disinda kaliyordu. Olculdu: ara durumda alt
        bilgi ekranin hemen altina ciziliyor, rota parcasi inince gercek icerik
        araya giriyor ve alt bilgi BINLERCE PIKSEL asagi ziplıyordu. Lighthouse
        bunu CLS 0.40-0.42 olarak olctu ve TEK suclu buydu; hem prerender edilen
        yazi sayfasinda hem prerender EDILMEYEN ana sayfada ayni deger cikti,
        yani sebep icerik degil YERLESIMDI.

        ⚠️ Uzun sure gorunmedi cunku Google Fonts render'i ~4.4 sn bloklarken ilk
        boyama zaten bu gecisten SONRA oluyordu. Fontlar kendi sunucumuza alinip
        FCP 2.6 sn'ye inince ara durum GORUNUR oldu. Hizlanma sorunu yaratmadi,
        var olani ortaya cikardi.

        Alt bilgi artik icerikle ayni anda ciziliyor; yanlis yere hic konmadigi
        icin kaymasi da gerekmiyor.
      */}
      <Suspense fallback={<Yedek />}>
      <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/clinics" element={<Clinics />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* HUKUKİ SAYFALAR (22.08.2026)
                ⚠️ Adresler `data/legal` içindeki `slug` alanlarıyla BİREBİR aynı olmak
                zorunda; belge kendi adresini orada tanımlıyor ve toplu sayfa oradan
                bağlantı üretiyor. Buradaki bir yazım hatası, listede görünen ama
                açılmayan bir sözleşme demek.

                ⚠️ `/deletion` ESKİ ADRES, silinmedi. Google Play hesap silme bağlantısı
                bu adrese verilmiş olabilir; kırılırsa doğrudan red sebebi olur.
                `LegalDocument` onu `/account-deletion` belgesine eşliyor. */}
            {/* ⚠️ APPLE ISTIYOR: App Store Connect'te Support URL zorunlu ve o
                adreste gercek bir iletisim yolu bulunmali. Alt bilgideki mailto tek
                basina yetmiyor; inceleyici adresi acip sayfa gormek istiyor.
                /iletisim eski/Turkce adres olarak ayni sayfaya gidiyor. */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/legal" element={<LegalHub />} />
            <Route path="/privacy" element={<LegalDocument />} />
            <Route path="/kvkk" element={<LegalDocument />} />
            <Route path="/consent" element={<LegalDocument />} />
            <Route path="/terms" element={<LegalDocument />} />
            <Route path="/service-agreement" element={<LegalDocument />} />
            <Route path="/cookies" element={<LegalDocument />} />
            <Route path="/account-deletion" element={<LegalDocument />} />
            <Route path="/child-safety" element={<LegalDocument />} />
            <Route path="/deletion" element={<LegalDocument />} />
            <Route path="/gizlilik" element={<LegalDocument />} />
            <Route path="/cerez" element={<LegalDocument />} />
            <Route path="/kvkk-aydinlatma" element={<LegalDocument />} />
            <Route path="/account-deletion-request" element={<LegalDocument />} />
            <Route path="/download" element={<Download />} />
            {/* KLINIK WEB PANELI (Ahmet, 24.08.2026). Oturum arkasinda, noindex,
                site haritasinda yok. Yetki sunucuda: klinik RPC'leri anon'a
                kapali ve govdelerinde `is_clinic_member()` kontrolu var. */}
            <Route path="/panel" element={<Panel />} />
            {/* Klinik vitrini: /@kullaniciadi
                ⚠️ react-router v6 parcali parametre (":@kullanici") DESTEKLEMIYOR;
                bu yuzden tum segment yakalanip '@' kontrolu sayfada yapiliyor.
                Bilinen rotalardan SONRA duruyor — onlarin onune gecmesin.
                '@' ile baslamayan adresler ClinicPage icinde NotFound'a dusuyor,
                yani davranis degismiyor. */}
            <Route path="/:handle" element={<ClinicPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
