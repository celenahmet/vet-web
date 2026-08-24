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

/**
 * ONCEDEN URETILMIS ICERIK, REACT HAZIR OLANA KADAR EKRANDA KALIYOR.
 *
 * ⚠️ NEDEN (olculdu 24.08.2026): `createRoot` bagli oldugu kutunun icini
 * TEMIZLIYOR. Blog sayfalarinda o kutuda prerender'in urettigi gercek yazi
 * duruyor. Sira suydu: yazi ekranda -> React siliyor -> rota parcasi inene
 * kadar bos -> yazi geri geliyor.
 *
 * Uzun sure fark edilmedi cunku Google Fonts render'i ~4.4 sn bloklarken sayfa
 * zaten bu is bittikten SONRA boyaniyordu. Fontlar kendi sunucumuza alininca
 * ilk boyama 2.6 sn'ye indi ve bos ara durum GORUNUR oldu: alt bilgi once
 * yukarida ciziliyor, yazi gelince 13.000 piksel asagi ziplıyordu. Lighthouse
 * bunu CLS 0.418 olarak olctu (uretimde 0'di).
 *
 * Yani hizlanma bir sorun yaratmadi, MIMARIDE ZATEN DURAN bir sorunu gorunur
 * yapti. Cozum de hizi geri almak degil, ara durumu doldurmak.
 *
 * ⚠️ `dangerouslySetInnerHTML` burada guvenli: icerik bizim prerender
 * ciktimiz, kullanicidan ya da agdan gelen bir sey degil.
 */
const kok = document.getElementById('root')!;
export const ONCEDEN_URETILMIS = kok.innerHTML.trim();

createRoot(kok).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
