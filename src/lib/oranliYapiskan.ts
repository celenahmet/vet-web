import { useEffect, type RefObject } from 'react';

/**
 * ORANLI YAPISKAN KENAR CUBUGU (İSTEK: Ahmet, 29.10.2026 — "sag taraf asagi
 * dogru inerken hizali dengeli sekilde sag tarafta asagi insin, amac esitlemek").
 *
 * Eskiden cubuk ekrandan uzunsa ust cubugun altina yapisip KENDI ICINDE
 * kayiyordu: okuyucu alttaki kartlari gormek icin farenin cubugun ustunde
 * olmasi gerektigini bilmeliydi, kesik kartlar da bozuk gibi duruyordu.
 *
 * Simdi cubuk sayfayla birlikte, ama daha YAVAS iniyor. Yazinin basinda iki
 * sutunun ust kenari, sonunda alt kenari ayni hizada. Arada cubuk, okuyucunun
 * yazidaki ilerlemesiyle ayni oranda asagi kayiyor; hicbir kart erisilemez
 * kalmiyor, ic kaydirma yok.
 *
 * Nasil: cubuk `position: sticky` kaliyor, yalniz `top` degeri kaydirmayla
 * hesaplaniyor. Ilerleme p = 0 iken top = UST (cubugun ustu gorunur), p = 1
 * iken cubugun alt kenari ekranin altina (ALT pay) oturuyor. p, sutunlari
 * tasiyan kutunun ekrandaki yolculugundan geliyor; kutunun sonu ekranin altina
 * geldiginde p = 1, o anda iki sutunun alt kenari da cakisiyor.
 *
 * ⚠️ Yalniz genis ekranda (1081 px ve ustu). Altinda cubuk zaten akisin sonuna
 * iniyor ve yapiskan degil; orada stil temizleniyor.
 * ⚠️ JS calismazsa eski davranis kaliyor (CSS'teki ic kaydirma), `oranli`
 * sinifi yalniz bu kanca calisinca ekleniyor.
 */
const UST = 92; // sabit ust cubugun altinda birakilan pay; BlogPost.css'teki `top` ile ayni
const ALT = 24; // en sonda cubugun altinda kalan pay
const GENIS_EKRAN = '(min-width: 1081px)';

export function useOranliYapiskan(
  kapRef: RefObject<HTMLElement | null>,
  secici: string,
  anahtar: unknown,
) {
  useEffect(() => {
    const kap = kapRef.current;
    const cubuk = kap?.querySelector<HTMLElement>(secici);
    if (!kap || !cubuk) return;

    const genis = window.matchMedia(GENIS_EKRAN);
    let kare = 0;

    const temizle = () => {
      cubuk.classList.remove('oranli');
      cubuk.style.top = '';
    };

    const hesapla = () => {
      kare = 0;
      if (!genis.matches) { temizle(); return; }
      cubuk.classList.add('oranli');

      const boy = cubuk.offsetHeight;
      const alan = window.innerHeight - UST - ALT;
      if (boy <= alan) { cubuk.style.top = `${UST}px`; return; }

      const k = kap.getBoundingClientRect();
      const yol = k.height - alan;
      const p = yol > 0 ? Math.min(1, Math.max(0, (UST - k.top) / yol)) : 0;
      cubuk.style.top = `${Math.round(UST - p * (boy - alan))}px`;
    };

    const iste = () => { if (!kare) kare = requestAnimationFrame(hesapla); };

    hesapla();
    window.addEventListener('scroll', iste, { passive: true });
    window.addEventListener('resize', iste);
    genis.addEventListener('change', iste);
    // Populer yazilar ve gorseller sonradan yukleniyor; cubugun boyu degisebilir.
    const gozlemci = new ResizeObserver(iste);
    gozlemci.observe(cubuk);
    gozlemci.observe(kap);

    return () => {
      if (kare) cancelAnimationFrame(kare);
      window.removeEventListener('scroll', iste);
      window.removeEventListener('resize', iste);
      genis.removeEventListener('change', iste);
      gozlemci.disconnect();
      temizle();
    };
  }, [kapRef, secici, anahtar]);
}
