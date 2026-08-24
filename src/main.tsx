import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './i18n';
import './styles/yazi-tipleri.css';
import './index.css';
import './styles/degisken-uyumlulugu.css';
import './styles/yuklenme.css';
import './onizleme';

/**
 * ⚠️ `onizleme` EN BASTA IMPORT EDILIYOR. O modul yuklenirken `#root` icindeki
 * prerender ciktisini okuyor; `createRoot` ise ayni kutuyu TEMIZLIYOR. Sira
 * bozulursa okunacak bir sey kalmaz.
 */
const kok = document.getElementById('root')!;

createRoot(kok).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
