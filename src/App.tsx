import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Features = lazy(() => import('./pages/Features'));
const Pets = lazy(() => import('./pages/Pets'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Clinics = lazy(() => import('./pages/Clinics'));
const Pricing = lazy(() => import('./pages/Pricing'));
const LegalHub = lazy(() => import('./pages/LegalHub'));
const LegalDocument = lazy(() => import('./pages/LegalDocument'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Download = lazy(() => import('./pages/Download'));
const ClinicPage = lazy(() => import('./pages/ClinicPage'));

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
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
            {/* Klinik vitrini: /@kullaniciadi
                ⚠️ react-router v6 parcali parametre (":@kullanici") DESTEKLEMIYOR;
                bu yuzden tum segment yakalanip '@' kontrolu sayfada yapiliyor.
                Bilinen rotalardan SONRA duruyor — onlarin onune gecmesin.
                '@' ile baslamayan adresler ClinicPage icinde NotFound'a dusuyor,
                yani davranis degismiyor. */}
            <Route path="/:handle" element={<ClinicPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
