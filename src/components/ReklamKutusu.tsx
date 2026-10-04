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
/* OtoSenior logosu acik zemin surumu (bote.web.tr ve uniconnectly.com reklam yuvalarindakiyle ayni dosya). */
import otoseniorLogo from '../assets/otosenior.webp';
import './ReklamKutusu.css';

/**
 * KENAR CUBUGU REKLAM ALANI (İSTEK: Ahmet, 25.08.2026)
 *
 * *"sağ tarafa kutucuğa da bi alan ayıralım, reklam verin yazsın, sonra 20
 * sn'de bir UniConnectly reklamı dönsün"*
 *
 * Ilk surumde iki kart 20 saniyede bir donuyordu ("burada yer alin" ve UniConnectly).
 * 04.10.2026'dan beri ev reklamlari donuyor: UniConnectly ve OtoSenior, 15 saniyede bir
 * (asagida `KARTLAR` ve `ARALIK_MS`).
 *
 * ⚠️ ARALIK BIR SANIYELIK SAYAC DEGIL, TEK ZAMANLAYICI. Saniye
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

/**
 * DONME ARALIGI 15 SN (Ahmet, 04.10.2026: *"veterito bote uniconnectly de otosenior reklami
 * ekleyelim blog sayfasinin reklam panosuna 15 sn donen kisimlar var ya onlara ekleyebiliriz"*,
 * *"veterito blogta otosenior reklami donmuyor"*). Diger sitelerdeki yuvalarla ayni aralik.
 */
const ARALIK_MS = 15_000;

/**
 * ENVANTER KARTI ACIK MI? (Ahmet, 16.09.2026: *"reklam alanlari da olacak ama
 * bos reklam donmesin simdilik"*.)
 *
 * `false` iken yuvada YALNIZ gercek reklam (UniConnectly) duruyor; "burada yer
 * alin" cagrisi ve 20 saniyelik donme calismiyor. Gerekce: doldurulmamis bir
 * yuvayi dolu gostermek, okuyucuya reklamla icerik arasinda olmayan bir
 * yogunluk hissi veriyor.
 *
 * ⚠️ BU BIR ANAHTAR, SILINMIS KOD DEGIL. Envanter satilmaya baslandiginda
 * `true` yapmak yetiyor; kart metni ve donme mantigi yerinde duruyor.
 */
const ENVANTER_KARTI_ACIK = false;

/**
 * DONEN KARTLAR (04.10.2026). Envanter karti acilirsa basa giriyor; ev reklamlari
 * (kendi urunlerimiz) sirayla donuyor. Yeni kart = bu listeye bir satir + asagida bir dal.
 */
type Kart = 'envanter' | 'uniconnectly' | 'otosenior';
const KARTLAR: Kart[] = [...(ENVANTER_KARTI_ACIK ? (['envanter'] as Kart[]) : []), 'uniconnectly', 'otosenior'];

export default function ReklamKutusu() {
  const { t } = useTranslation();
  const [sira, setSira] = useState(0);
  /* Uzerine gelince ya da klavyeyle odaklaninca DURUR: okunan kart elden kacmasin
     (bote.web.tr yuvasiyla ayni davranis, WCAG 2.2.2). */
  const [durdu, setDurdu] = useState(false);

  useEffect(() => {
    if (KARTLAR.length < 2 || durdu) return;
    /* Hareketi azalt: donme hic baslamiyor, ilk kart sabit kaliyor. */
    const azalt = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (azalt) return;

    const sayac = window.setInterval(() => setSira((s) => (s + 1) % KARTLAR.length), ARALIK_MS);
    return () => window.clearInterval(sayac);
  }, [durdu]);

  const kart = KARTLAR[sira] ?? 'uniconnectly';

  return (
    <section
      className={`kenar-kutu kenar-reklam${KARTLAR.length > 1 ? ' kenar-reklam-donen' : ''}`}
      aria-label="Reklam alanı"
      onMouseEnter={() => setDurdu(true)}
      onMouseLeave={() => setDurdu(false)}
      onFocus={() => setDurdu(true)}
      onBlur={() => setDurdu(false)}>
      {/* ⚠️ Etiket her iki kartta da duruyor: hangisi gorunurse gorunsun
          okuyucu bunun reklam alani oldugunu biliyor. */}
      <p className="reklam-etiket">{t('ad_label')}</p>

      {kart === 'envanter' ? (
        <div className="reklam-kart">
          <span className="reklam-ikon" aria-hidden="true"><Megaphone size={21} /></span>
          <p className="reklam-baslik">{t('ad_title_1')}</p>
          <p className="reklam-metin">{t('ad_desc_1')}</p>
          <a className="reklam-dugme" href="mailto:info@veterito.com?subject=Blog%20reklam">{t('ad_btn_1')}<ArrowUpRight size={15} />
          </a>
        </div>
      ) : kart === 'otosenior' ? (
        <div className="reklam-kart">
          {/* OtoSenior: ayni kisinin otomobil rehberi sitesi. Metin Ahmet'in onayladigi kitle cumlesi
              (04.10.2026); diger sitelerdeki kartla AYNI. Baglanti `rel="sponsored"`. */}
          <img
            src={otoseniorLogo}
            alt="OtoSenior"
            width={190}
            height={35}
            className="reklam-logo"
          />
          <p className="reklam-metin">
            Otomobil sahipleri, galericiler ve meraklıları için araç alım satımı, vergi, sigorta ve trafik
            kurallarında resmî kaynaklı rehberler.
          </p>
          <a
            className="reklam-dugme"
            href="https://otosenior.com"
            target="_blank"
            rel="sponsored noopener noreferrer">Rehberleri oku<ArrowUpRight size={15} />
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
            width={190}
            height={68}
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
            rel="sponsored noopener noreferrer">{t('ad_btn_2')}<ArrowUpRight size={15} />
          </a>
        </div>
      )}
    </section>
  );
}
