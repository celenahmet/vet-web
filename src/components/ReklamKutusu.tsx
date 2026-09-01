import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Megaphone, ArrowUpRight } from 'lucide-react';

/*
 * ⚠️ ACIK ZEMIN SURUMU. UniConnectly deposunda iki logo var: `dark-logo`
 * (koyu zemin icin, "Uni" beyaz) ve `light-logo` (acik zemin icin, "Uni"
 * lacivert). Reklam kutusu acik zeminde durdugu icin ikincisi kullaniliyor;
 * digeri secilseydi kelimenin yarisi gorunmezdi.
 */
import uniconnectlyLogo from '../assets/uniconnectly.webp';

/**
 * KENAR CUBUGU REKLAM ALANI (İSTEK: Ahmet, 25.08.2026)
 *
 * *"sağ tarafa kutucuğa da bi alan ayıralım, reklam verin yazsın, sonra 20
 * sn'de bir UniConnectly reklamı dönsün"*
 *
 * Iki kart 20 saniyede bir sirayla degisiyor: once "burada yer alin", sonra
 * UniConnectly tanitimi.
 *
 * ⚠️ ARALIK BIR SANIYELIK SAYAC DEGIL, 20 SANIYELIK TEK ZAMANLAYICI. Saniye
 * saniye guncellemek her saniye bir render demek olurdu ve ekranda degisen
 * hicbir sey yokken render etmek bos is.
 *
 * ⚠️ HAREKETI AZALT AYARINA UYUYOR. `prefers-reduced-motion` acikken donme
 * DURUYOR ve ilk kart sabit kaliyor: kendiliginden degisen icerik, hareket
 * duyarliligi olan kullanicilar icin rahatsiz edici ve WCAG 2.2.2 bunu
 * "kullanicinin durdurabilmesi gereken hareket" sayiyor.
 *
 * ⚠️ ACIKCA REKLAM. Kartin ustunde "Reklam" etiketi var ve UniConnectly
 * baglantisi `rel="sponsored"` tasiyor. Reklami icerik gibi gostermek hem
 * okuyucuya hem arama motoruna karsi durustluk sorunu.
 *
 * ⚠️ UniConnectly AYRI BIR URUN ve ayri bir sirket degil, ayni kisinin ikinci
 * urunu. Metin bunu satis dili olmadan, ne oldugunu soyleyerek veriyor.
 */

const ARALIK_MS = 20_000;

export default function ReklamKutusu() {
  const { t } = useTranslation();
  const [ikinci, setIkinci] = useState(false);

  useEffect(() => {
    /* Hareketi azalt: donme hic baslamiyor. */
    const azalt = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (azalt) return;

    const sayac = window.setInterval(() => setIkinci((o) => !o), ARALIK_MS);
    return () => window.clearInterval(sayac);
  }, []);

  return (
    <section className="kenar-kutu kenar-reklam" aria-label="Reklam alanı">
      {/* ⚠️ Etiket her iki kartta da duruyor: hangisi gorunurse gorunsun
          okuyucu bunun reklam alani oldugunu biliyor. */}
      <p className="reklam-etiket">{t('ad_label')}</p>

      {!ikinci ? (
        <div className="reklam-kart">
          <span className="reklam-ikon" aria-hidden="true"><Megaphone size={18} /></span>
          <p className="reklam-baslik">{t('ad_title_1')}</p>
          <p className="reklam-metin">{t('ad_desc_1')}</p>
          <a className="reklam-dugme" href="mailto:info@veterito.com?subject=Blog%20reklam">{t('ad_btn_1')}<ArrowUpRight size={14} />
          </a>
        </div>
      ) : (
        <div className="reklam-kart">
          {/* ⚠️ Logo METNIN YERINE GECIYOR, yanina eklenmiyor: marka adi zaten
              logonun icinde yaziyor, ikisini birlikte koymak ismi iki kez
              gostermek olurdu. `alt` metni ad taşıyor, ekran okuyucu okuyor. */}
          <img
            src={uniconnectlyLogo}
            alt="UniConnectly"
            width={160}
            height={57}
            className="reklam-logo"
          />
          <p className="reklam-metin">
            Üniversite toplulukları, etkinlikler ve şirketler tek uygulamada. App Store ve
            Google Play’de.
          </p>
          <a
            className="reklam-dugme"
            href="https://uniconnectly.com"
            target="_blank"
            rel="sponsored noopener noreferrer">{t('ad_btn_2')}<ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </section>
  );
}
